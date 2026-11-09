const VERSION='v9';

/* ---------- interfaccia ---------- */
const APP_CSS=`
body{padding:calc(12px + env(safe-area-inset-top)) 14px calc(12px + env(safe-area-inset-bottom));color:#e6e9ee;font:15px -apple-system,system-ui,sans-serif}
input,button{font:inherit;width:100%;padding:11px;margin:5px 0;border-radius:8px;border:1px solid #2a2a2a;background:#111;color:inherit}
button{background:#d9a441;color:#111;font-weight:600;border:0}
#top{display:flex;justify-content:flex-end;align-items:center;gap:8px;margin-bottom:6px}
#reload{width:38px;height:38px;margin:0;padding:0;display:flex;align-items:center;justify-content:center;border-radius:10px;background:#111;color:#d9a441;border:1px solid #2a2a2a}
#reload svg{width:20px;height:20px;display:block}
#reload.spin svg{animation:rot .8s linear infinite}
@keyframes rot{to{transform:rotate(360deg)}}
#langbox{position:relative}
#langbtn{width:auto;height:38px;margin:0;padding:0 10px;display:flex;align-items:center;gap:6px;border-radius:10px;background:#111;color:#9a9a9a;border:1px solid #2a2a2a;font-size:20px;font-weight:400}
#langbtn svg{width:11px;height:11px}
#langmenu{position:absolute;right:0;top:calc(100% + 6px);min-width:170px;background:#111;border:1px solid #2a2a2a;border-radius:12px;overflow:hidden;z-index:20;box-shadow:0 8px 24px rgba(0,0,0,.7)}
#langmenu button{display:flex;align-items:center;gap:12px;width:100%;margin:0;padding:12px 14px;border:0;border-radius:0;background:transparent;color:#e6e9ee;font-size:15px;font-weight:400;text-align:left}
#langmenu button+button{border-top:1px solid #2a2a2a}
#langmenu button.sel{background:#1c1c1c;color:#d9a441}
#langmenu .fl{font-size:22px;line-height:1}
#tf{display:flex;gap:6px;margin-top:8px}
#tf button{background:#111;color:#e6e9ee;border:1px solid #2a2a2a;padding:8px 0;margin:0}
#tf button.on{background:#d9a441;color:#111}
#chart{height:68vh;margin-top:8px}
#msg{min-height:22px;font-size:13px;color:#9a9a9a;word-break:break-word;margin:6px 0}
#px{font-size:20px;font-weight:600;margin-left:8px}
#ver{position:fixed;left:14px;bottom:calc(6px + env(safe-area-inset-bottom));font-size:11px;color:#555}
`;
const st=document.createElement('style');
st.textContent=APP_CSS;
document.head.appendChild(st);

document.getElementById('root').innerHTML=`
<div id="top">
  <button id="reload" aria-label="Refresh">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
  </button>
  <div id="langbox">
    <button id="langbtn" aria-label="Language">
      <span id="langflag">🇮🇹</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
    </button>
    <div id="langmenu" hidden></div>
  </div>
</div>
<div id="login">
  <input id="email" type="email" placeholder="Email" autocomplete="off">
  <input id="pass" type="password" placeholder="Password" autocomplete="off">
  <input id="server" placeholder="Server" autocomplete="off">
  <button id="go">Collegati</button>
</div>
<div id="msg"></div>
<div id="app" hidden>
  <b id="sym"></b><span id="px"></span>
  <div id="tf"></div>
  <div id="chart"></div>
</div>
<div id="ver"></div>
`;

/* ---------- impostazioni ---------- */
const $=id=>document.getElementById(id);
const BASE='https://demo.tradelocker.com/backend-api';
const DAYS={'1m':2,'5m':7,'15m':14,'1H':60,'4H':200,'1D':1000};
let tok,accNum,accId,tid,route,res='5m',chart,series;
const msg=t=>$('msg').textContent=t;
$('ver').textContent=VERSION;

/* ---------- lingue ---------- */
const FLAGS={it:'🇮🇹',es:'🇪🇸',en:'🇬🇧',fr:'🇫🇷'};
const NAMES={it:'Italiano',es:'Español',en:'English',fr:'Français'};
const T={
  it:{email:'Email',pass:'Password',server:'Server',go:'Collegati',
    logging:'Accesso in corso...',finding:'Cerco XAUUSD...',nofind:'XAUUSD non trovato',
    nobars:'Nessuna candela ricevuta',upd:'Aggiornamento: ',ok:'Collegato.',
    newver:'Nuova versione, ricarico...',
    nolib:'La libreria del grafico non si è caricata. Ricarica la pagina.',
    cors:'Il browser ha bloccato la richiesta (probabile blocco CORS di TradeLocker).'},
  es:{email:'Correo electrónico',pass:'Contraseña',server:'Servidor',go:'Conectar',
    logging:'Iniciando sesión...',finding:'Buscando XAUUSD...',nofind:'XAUUSD no encontrado',
    nobars:'No se recibió ninguna vela',upd:'Actualización: ',ok:'Conectado.',
    newver:'Nueva versión, recargando...',
    nolib:'La librería del gráfico no se cargó. Recarga la página.',
    cors:'El navegador bloqueó la solicitud (probable bloqueo CORS de TradeLocker).'},
  en:{email:'Email',pass:'Password',server:'Server',go:'Connect',
    logging:'Signing in...',finding:'Looking for XAUUSD...',nofind:'XAUUSD not found',
    nobars:'No candles received',upd:'Update: ',ok:'Connected.',
    newver:'New version, reloading...',
    nolib:'The chart library failed to load. Reload the page.',
    cors:'The browser blocked the request (probably a TradeLocker CORS block).'},
  fr:{email:'E-mail',pass:'Mot de passe',server:'Serveur',go:'Se connecter',
    logging:'Connexion en cours...',finding:'Recherche de XAUUSD...',nofind:'XAUUSD introuvable',
    nobars:'Aucune bougie reçue',upd:'Mise à jour : ',ok:'Connecté.',
    newver:'Nouvelle version, rechargement...',
    nolib:"La bibliothèque du graphique ne s'est pas chargée. Recharge la page.",
    cors:'Le navigateur a bloqué la requête (probable blocage CORS de TradeLocker).'}
};
let lang='it';
try{lang=localStorage.getItem('lang')||'it'}catch(e){}
if(!T[lang])lang='it';
const t=k=>T[lang][k];

function buildLangMenu(){
  const m=$('langmenu');
  m.innerHTML='';
  Object.keys(FLAGS).forEach(k=>{
    const b=document.createElement('button');
    b.className=k===lang?'sel':'';
    b.innerHTML='<span class="fl">'+FLAGS[k]+'</span><span>'+NAMES[k]+'</span>';
    b.onclick=e=>{
      e.stopPropagation();
      lang=k;
      try{localStorage.setItem('lang',lang)}catch(x){}
      applyLang();
      m.hidden=true;
      msg('');
    };
    m.appendChild(b);
  });
}
function applyLang(){
  document.documentElement.lang=lang;
  $('langflag').textContent=FLAGS[lang];
  $('email').placeholder=t('email');
  $('pass').placeholder=t('pass');
  $('server').placeholder=t('server');
  $('go').textContent=t('go');
  buildLangMenu();
}
$('langbtn').onclick=e=>{
  e.stopPropagation();
  $('langmenu').hidden=!$('langmenu').hidden;
};
document.addEventListener('click',e=>{
  if(!$('langbox').contains(e.target))$('langmenu').hidden=true;
});
applyLang();

/* ---------- animazione: eventuale avviso se si e' interrotta ---------- */
if(window.splashDone)window.splashDone.then(()=>{
  const w=window.splashWhy;
  if(w&&w!=='ended'&&w!=='skip')msg('Animazione interrotta: '+w);
});

/* ---------- aggiornamenti ----------
   L'app viene scaricata nuova a ogni apertura (lo fa index.html).
   Qui si gestisce solo il caso in cui l'app resta aperta in background
   e, quando la riapri, c'e' una versione piu' recente online. */
async function checkFresh(){
  try{
    const r=await fetch('app.js?t='+Date.now(),{cache:'no-store'});
    if(!r.ok)return;
    const code=await r.text();
    const m=code.match(/const VERSION='([^']+)'/);
    if(m&&m[1]!==VERSION){
      msg(t('newver'));
      try{sessionStorage.setItem('noSplash','1')}catch(e){}
      setTimeout(()=>location.reload(),300);
    }
  }catch(e){}
}
let hiddenAt=0;
document.addEventListener('visibilitychange',()=>{
  if(document.hidden)hiddenAt=Date.now();
  else if(Date.now()-hiddenAt>3000)checkFresh();
});
window.addEventListener('pageshow',e=>{if(e.persisted)checkFresh()});
$('reload').onclick=()=>{
  $('reload').classList.add('spin');
  try{sessionStorage.setItem('noSplash','1')}catch(e){}
  location.reload();
};

/* ---------- dati TradeLocker ---------- */
async function api(path,opt={}){
  const r=await fetch(BASE+path,{...opt,headers:{'Content-Type':'application/json',...(opt.headers||{})}});
  const tx=await r.text();let j;
  try{j=JSON.parse(tx)}catch(e){j=tx}
  if(!r.ok)throw new Error(r.status+' '+(typeof j==='string'?j:JSON.stringify(j)).slice(0,300));
  return j;
}
const auth=()=>({Authorization:'Bearer '+tok,accNum:String(accNum)});

async function bars(from,to){
  const q=new URLSearchParams({routeId:route,from:from,to:to,resolution:res,tradableInstrumentId:tid});
  const j=await api('/trade/history?'+q,{headers:auth()});
  const list=(j.d&&j.d.barDetails)||j.barDetails||[];
  const off=-new Date().getTimezoneOffset()*60;
  return list.map(b=>({time:Math.floor(b.t/1000)+off,open:+b.o,high:+b.h,low:+b.l,close:+b.c})).sort((a,b)=>a.time-b.time);
}
function showLast(b){if(b.length)$('px').textContent=b[b.length-1].close.toFixed(2)}

async function load(){
  const to=Date.now(),from=to-DAYS[res]*864e5;
  const b=await bars(from,to);
  if(!b.length)throw new Error(t('nobars'));
  series.setData(b);showLast(b);
}
async function tick(){
  try{
    const to=Date.now();
    const b=await bars(to-72e5,to);
    b.forEach(x=>{try{series.update(x)}catch(e){}});
    showLast(b);
  }catch(e){msg(t('upd')+e.message)}
}

function start(){
  if(!window.LightweightCharts){msg(t('nolib'));return}
  $('login').hidden=true;$('app').hidden=false;
  chart=LightweightCharts.createChart($('chart'),{
    autoSize:true,
    layout:{background:{color:'#000000'},textColor:'#9a9a9a'},
    grid:{vertLines:{color:'#141414'},horzLines:{color:'#141414'}},
    timeScale:{timeVisible:true,secondsVisible:false}
  });
  series=chart.addCandlestickSeries();
  Object.keys(DAYS).forEach(k=>{
    const b=document.createElement('button');
    b.textContent=k;if(k===res)b.className='on';
    b.onclick=()=>{
      res=k;
      document.querySelectorAll('#tf button').forEach(x=>x.className='');
      b.className='on';
      load().catch(e=>msg(e.message));
    };
    $('tf').appendChild(b);
  });
  load().then(()=>msg(t('ok'))).catch(e=>msg(e.message));
  setInterval(tick,5000);
}

$('go').onclick=async()=>{
  try{
    msg(t('logging'));
    const j=await api('/auth/jwt/token',{method:'POST',body:JSON.stringify({
      email:$('email').value.trim(),password:$('pass').value,server:$('server').value.trim()})});
    tok=j.accessToken;
    $('pass').value='';
    const a=await api('/auth/jwt/all-accounts',{headers:{Authorization:'Bearer '+tok}});
    const acc=(a.accounts||a)[0];
    accId=acc.id;accNum=acc.accNum;
    msg(t('finding'));
    const i=await api('/trade/accounts/'+accId+'/instruments',{headers:auth()});
    const g=((i.d&&i.d.instruments)||[]).find(x=>/^XAUUSD/i.test(x.name));
    if(!g)throw new Error(t('nofind'));
    tid=g.tradableInstrumentId;
    route=g.routes.find(r=>r.type==='INFO').id;
    $('sym').textContent=g.name;
    start();
  }catch(e){
    msg(e instanceof TypeError ? t('cors') : e.message);
  }
};
