const VERSION='v10';

/* Logo ritagliato dall'ultimo fotogramma del video (quadrato 240x240, parte da x=240 y=515 nel video 720x1280).
   Si sovrappone al logo del video e poi scivola in cima alla pagina di login. */
const LOGO_SRC='data:image/png;base64,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';
const LG={x:240,y:515,s:240};
const HOLD_MS=700;      /* quanto resta fermo il logo prima di muoversi */
const FLY_MS=1000;      /* durata dello spostamento */

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
#brand{display:flex;justify-content:center;margin:-6px 0 4px}
#brandimg{width:96px;height:96px;display:block;visibility:hidden}
#brand.show #brandimg{visibility:visible}
#fly{position:fixed;z-index:101;margin:0;padding:0;border:0;pointer-events:none;display:block;opacity:0;transform-origin:50% 50%;will-change:transform}
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
<div id="brand"><img id="brandimg" alt="" src="${LOGO_SRC}"></div>
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
    newver:'Nuova versione, ricarico...',anim:'Animazione interrotta: ',
    nolib:'La libreria del grafico non si è caricata. Ricarica la pagina.',
    cors:'Il browser ha bloccato la richiesta (probabile blocco CORS di TradeLocker).'},
  es:{email:'Correo electrónico',pass:'Contraseña',server:'Servidor',go:'Conectar',
    logging:'Iniciando sesión...',finding:'Buscando XAUUSD...',nofind:'XAUUSD no encontrado',
    nobars:'No se recibió ninguna vela',upd:'Actualización: ',ok:'Conectado.',
    newver:'Nueva versión, recargando...',anim:'Animación interrumpida: ',
    nolib:'La librería del gráfico no se cargó. Recarga la página.',
    cors:'El navegador bloqueó la solicitud (probable bloqueo CORS de TradeLocker).'},
  en:{email:'Email',pass:'Password',server:'Server',go:'Connect',
    logging:'Signing in...',finding:'Looking for XAUUSD...',nofind:'XAUUSD not found',
    nobars:'No candles received',upd:'Update: ',ok:'Connected.',
    newver:'New version, reloading...',anim:'Animation interrupted: ',
    nolib:'The chart library failed to load. Reload the page.',
    cors:'The browser blocked the request (probably a TradeLocker CORS block).'},
  fr:{email:'E-mail',pass:'Mot de passe',server:'Serveur',go:'Se connecter',
    logging:'Connexion en cours...',finding:'Recherche de XAUUSD...',nofind:'XAUUSD introuvable',
    nobars:'Aucune bougie reçue',upd:'Mise à jour : ',ok:'Connecté.',
    newver:'Nouvelle version, rechargement...',anim:'Animation interrompue : ',
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

/* ---------- animazione di apertura + logo che scivola in cima ---------- */
(function(){
  const sp=$('splash'),v=$('sv'),brand=$('brand'),bimg=$('brandimg');
  const showBrand=()=>brand.classList.add('show');
  const killSplash=()=>{if(sp)sp.remove()};

  let skip=false;
  try{skip=sessionStorage.getItem('noSplash')==='1';sessionStorage.removeItem('noSplash')}catch(e){}
  if(skip||!sp||!v){killSplash();showBrand();return}

  /* logo "volante": pronto e decodificato prima che serva */
  const fly=document.createElement('img');
  fly.id='fly';fly.alt='';fly.src=LOGO_SRC;
  document.body.appendChild(fly);
  if(fly.decode)fly.decode().catch(()=>{});

  let done=false;
  const fadeOut=()=>{
    sp.style.transition='opacity .7s ease';
    sp.style.opacity='0';
    sp.style.pointerEvents='none';
    setTimeout(killSplash,800);
  };
  const fallback=why=>{
    if(done)return;
    done=true;
    fly.remove();
    fadeOut();showBrand();
    if(why)msg(t('anim')+why);
  };

  /* dove sta il logo sullo schermo, nell'ultimo fotogramma (video a tutto schermo, object-fit: cover) */
  const geometry=()=>{
    const r=v.getBoundingClientRect();
    const vw=v.videoWidth||720,vh=v.videoHeight||1280;
    const k=Math.max(r.width/vw,r.height/vh);
    const ox=r.left+(r.width-vw*k)/2,oy=r.top+(r.height-vh*k)/2;
    return{left:ox+LG.x*k,top:oy+LG.y*k,size:LG.s*k};
  };

  v.muted=true;
  v.addEventListener('error',()=>fallback('errore video '+(v.error?v.error.code:'')));
  v.addEventListener('ended',()=>{
    if(done)return;
    done=true;
    const g=geometry();
    /* 1. il logo fermo prende il posto di quello del video, pixel su pixel */
    fly.style.left=g.left+'px';fly.style.top=g.top+'px';
    fly.style.width=g.size+'px';fly.style.height=g.size+'px';
    fly.style.opacity='1';
    v.style.visibility='hidden';
    /* 2. dopo una pausa si sposta in cima, mentre lo sfondo nero si dissolve */
    setTimeout(()=>{
      const b=bimg.getBoundingClientRect();
      if(!b.width){fly.remove();fadeOut();showBrand();return}
      const dx=(b.left+b.width/2)-(g.left+g.size/2);
      const dy=(b.top+b.height/2)-(g.top+g.size/2);
      const sc=b.width/g.size;
      fly.style.transition='transform '+FLY_MS+'ms cubic-bezier(.65,0,.25,1)';
      fly.getBoundingClientRect();
      requestAnimationFrame(()=>{
        fly.style.transform='translate('+dx+'px,'+dy+'px) scale('+sc+')';
        fadeOut();
      });
      let landed=false;
      const land=()=>{
        if(landed)return;
        landed=true;
        showBrand();
        requestAnimationFrame(()=>fly.remove());
      };
      fly.addEventListener('transitionend',land,{once:true});
      setTimeout(land,FLY_MS+400);
    },HOLD_MS);
  });

  const p=v.play();
  if(p&&p.catch)p.catch(()=>{
    sp.addEventListener('click',()=>{const q=v.play();if(q&&q.catch)q.catch(()=>{})});
    setTimeout(()=>{if(v.paused&&!done)fallback('riproduzione bloccata')},6000);
  });
  setTimeout(()=>{if(!done)fallback('tempo scaduto')},20000);
})();

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
  $('login').hidden=true;$('brand').hidden=true;$('app').hidden=false;
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
