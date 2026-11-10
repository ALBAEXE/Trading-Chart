const VERSION='0.8.6';
/* tema salvato sul telefono: scuro (predefinito) o bianco */
try{document.documentElement.dataset.theme=localStorage.getItem('theme')==='light'?'light':'dark'}catch(e){document.documentElement.dataset.theme='dark'}

/* Logo ritagliato dall'ultimo fotogramma del video: si sovrappone al logo del video e poi scivola in cima alla pagina di login. */
const LOGO_SRC='data:image/png;base64,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';
const LG={x:240,y:515,s:240};
const HOLD_MS=700;      /* quanto resta fermo il logo prima di muoversi */
const FLY_MS=1000;      /* durata dello spostamento */

/* ---------- interfaccia ---------- */
const APP_CSS=`
:root{--bg:#000;--surf:#111;--surf2:#1c1c1c;--line:#2a2a2a;--fg:#f2f2f2;--muted:#8e8e93;--faint:#555;--gold:#d9a441;--goldfg:#d9a441;--ongold:#111;--grid:rgba(255,255,255,.06);--shadow:rgba(0,0,0,.55);--danger:#ff5b52;--logo:none;
--up:#22ab94;--down:#f23645;--blue:#2962ff;--sep:rgba(255,255,255,.08);--pill:#fff;--onpill:#000;
--glass:rgba(38,38,40,.5);--glass2:rgba(30,30,32,.88);--glassline:rgba(255,255,255,.13);--glasshi:rgba(255,255,255,.22);--glasssel:rgba(255,255,255,.14);
--tintup:rgba(34,171,148,.20);--tintdn:rgba(150,20,28,.42)}
html[data-theme="light"]{--bg:#fff;--surf:#f3f3f1;--surf2:#e9e9e6;--line:#d9d9d4;--fg:#111;--muted:#6b6b70;--faint:#a3a3a3;--goldfg:#a87720;--grid:rgba(0,0,0,.06);--shadow:rgba(0,0,0,.14);--danger:#d33a31;--logo:invert(1);
--sep:rgba(0,0,0,.08);--pill:#111;--onpill:#fff;
--glass:rgba(255,255,255,.55);--glass2:rgba(250,250,250,.92);--glassline:rgba(0,0,0,.08);--glasshi:rgba(255,255,255,.95);--glasssel:rgba(0,0,0,.07);
--tintup:rgba(34,171,148,.12);--tintdn:rgba(242,54,69,.12)}
html,body{background:var(--bg)}
#root{color:var(--fg)}
body{padding:calc(12px + env(safe-area-inset-top)) 14px calc(12px + env(safe-area-inset-bottom));color:var(--fg);font:15px -apple-system,system-ui,sans-serif;transition:background-color .3s ease,color .3s ease}
body.inapp{padding:0;overflow:hidden}
input,button{font:inherit;width:100%;padding:11px;margin:5px 0;border-radius:8px;border:1px solid var(--line);background:var(--surf);color:inherit}
input::placeholder{color:var(--muted)}
button{background:var(--gold);color:var(--ongold);font-weight:600;border:0;-webkit-tap-highlight-color:transparent;cursor:pointer}
button:focus-visible{outline:2px solid var(--blue);outline-offset:2px}

/* login */
#top{display:flex;justify-content:flex-end;align-items:center;gap:8px;margin-bottom:6px}
#reload{width:38px;height:38px;margin:0;padding:0;display:flex;align-items:center;justify-content:center;border-radius:10px;background:var(--surf);color:var(--goldfg);border:1px solid var(--line)}
#reload svg{width:20px;height:20px;display:block}
#reload.spin svg{animation:rot .8s linear infinite}
@keyframes rot{to{transform:rotate(360deg)}}
#langbox{position:relative}
#langbtn{width:auto;height:38px;margin:0;padding:0 10px;display:flex;align-items:center;gap:6px;border-radius:10px;background:var(--surf);color:var(--muted);border:1px solid var(--line);font-size:20px;font-weight:400}
#langbtn svg{width:11px;height:11px}
#langmenu{position:absolute;right:0;top:calc(100% + 6px);min-width:170px;background:var(--surf);border:1px solid var(--line);border-radius:12px;overflow:hidden;z-index:20;box-shadow:0 8px 24px var(--shadow)}
#langmenu button{display:flex;align-items:center;gap:12px;width:100%;margin:0;padding:12px 14px;border:0;border-radius:0;background:transparent;color:var(--fg);font-size:15px;font-weight:400;text-align:left}
#langmenu button+button{border-top:1px solid var(--line)}
#langmenu button.sel{background:var(--surf2);color:var(--goldfg)}
#langmenu .fl{font-size:22px;line-height:1}
#brand{display:flex;justify-content:center;margin:-6px 0 4px}
#brandimg{width:96px;height:96px;display:block;visibility:hidden;filter:var(--logo)}
#brand.show #brandimg{visibility:visible}
#fly{position:fixed;z-index:101;margin:0;padding:0;border:0;pointer-events:none;display:block;opacity:0;transform-origin:50% 50%;will-change:transform}
#msg{min-height:22px;font-size:13px;color:var(--muted);word-break:break-word;margin:6px 0}
#fid{display:flex;align-items:center;justify-content:center;gap:10px;background:var(--surf);border:1px solid var(--gold);color:var(--goldfg);margin-bottom:10px}
#fid svg{width:22px;height:22px;display:block}
#lform{margin:0}
#forget,#reset{background:transparent;border:0;color:var(--muted);font-weight:400;font-size:13px;text-decoration:underline;margin:2px 0;padding:8px}
#reset{color:var(--faint)}
#ver{position:fixed;left:14px;bottom:calc(6px + env(safe-area-inset-bottom));font-size:11px;color:var(--faint)}
body.inapp #ver{display:none}
body.inapp #msg{pointer-events:none;position:fixed;left:16px;right:16px;top:calc(env(safe-area-inset-top) + 8px);z-index:70;margin:0;min-height:0;padding:10px 14px;border-radius:14px;color:var(--fg);font-size:14px;background:var(--glass2);-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);border:1px solid var(--glassline)}
body.inapp #msg:empty{display:none}

/* vetro */
.glass{background:var(--glass);-webkit-backdrop-filter:blur(22px) saturate(180%);backdrop-filter:blur(22px) saturate(180%);border:1px solid var(--glassline);box-shadow:inset 0 1px 0 var(--glasshi),0 10px 30px var(--shadow)}

/* app */
#shell{position:fixed;inset:0}
.screen{position:absolute;inset:0}
#wl-screen{overflow-y:auto;-webkit-overflow-scrolling:touch;padding:calc(env(safe-area-inset-top) + 8px) 0 calc(env(safe-area-inset-bottom) + 176px)}
#wlhead{display:flex;align-items:center;justify-content:space-between;padding:0 16px}
.circ{width:52px;height:52px;border-radius:50%;margin:0;padding:0;display:flex;align-items:center;justify-content:center;color:var(--fg)}
.circ img{width:42px;height:42px;display:block;filter:var(--logo)}
.circ svg{width:24px;height:24px;display:block}
#wltitle{display:inline-block;margin:16px 16px 4px;padding:8px 18px;border-radius:999px;background:var(--pill);color:var(--onpill);font-weight:600;font-size:17px}
#bar{display:flex;align-items:center;gap:8px;background:var(--surf);border:1px solid var(--line);border-radius:12px;padding:8px 10px;margin:12px 16px 4px;font-size:13px;color:var(--fg)}
#bar span{flex:1}
#bar button{width:auto;margin:0;padding:7px 12px;font-size:13px}
#bar .no{background:transparent;color:var(--muted);border:1px solid var(--line);font-weight:400}
.sec{padding:22px 16px 4px;color:var(--muted);font-weight:600;font-size:15px}
.row{display:flex;align-items:center;gap:14px;width:100%;margin:0;padding:12px 16px;background:transparent;border:0;border-radius:0;color:var(--fg);font-weight:400;text-align:left;position:relative}
.row::after{content:"";position:absolute;left:74px;right:0;bottom:0;height:1px;background:var(--sep)}
.row:active{background:var(--glasssel)}
.ic{width:44px;height:44px;flex:0 0 44px;border-radius:50%;display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative;color:#fff;font-weight:700;font-size:22px;line-height:1}
.ic svg{width:64%;height:64%;display:block}
.ic.fx,.ic.flag{overflow:visible}
.ic .fl{position:absolute;width:70%;height:70%;border-radius:50%;overflow:hidden;display:flex;align-items:center;justify-content:center;font-size:1.65em;line-height:1;box-shadow:0 0 0 2px var(--bg)}
.ic .fl.a{top:0;right:0}
.ic .fl.b{bottom:0;left:0}
.ic.flag .fl{width:100%;height:100%;font-size:2.45em;box-shadow:none;position:static}
.rmain{flex:1;min-width:0}
.rsym{font-size:17px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.rdesc{font-size:14px;color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:2px}
.rright{text-align:right;flex:0 0 auto}
.rpx{font-size:17px;font-variant-numeric:tabular-nums}
.rpx sup{font-size:.62em;vertical-align:.55em;margin-left:1px}
.rch{font-size:14px;font-variant-numeric:tabular-nums;margin-top:2px;white-space:nowrap}
.up{color:var(--up)}
.down{color:var(--down)}

#mini{width:auto;position:fixed;left:16px;right:16px;bottom:calc(env(safe-area-inset-bottom) + 88px);height:62px;border-radius:31px;display:flex;align-items:center;gap:12px;margin:0;padding:0 18px 0 8px;z-index:30;color:var(--fg);text-align:left;font-weight:400}
#mntxt{flex:1;min-width:0}
#mna{font-size:16px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-variant-numeric:tabular-nums}
#mnb{font-size:14px;font-variant-numeric:tabular-nums}
#mnsp{width:70px;height:30px;display:block}

#tabbar{position:fixed;left:16px;right:16px;bottom:calc(env(safe-area-inset-bottom) + 12px);height:66px;border-radius:33px;display:flex;gap:4px;padding:5px;z-index:31}
.tab{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;margin:0;padding:0;background:transparent;border:0;border-radius:28px;color:var(--fg);font-size:12px;font-weight:600;transition:background-color .2s ease}
.tab svg{width:25px;height:25px;display:block}
.tab.on{background:var(--glasssel)}

#ch-screen{--tint:var(--bg);background:linear-gradient(180deg,var(--bg) 0,var(--tint) calc(100% - 158px - env(safe-area-inset-bottom)),var(--tint) 100%)}
#ch-screen.tup{--tint:var(--tintup)}
#ch-screen.tdn{--tint:var(--tintdn)}
#chartbox{position:absolute;left:0;right:0;top:calc(env(safe-area-inset-top) + 4px);bottom:calc(env(safe-area-inset-bottom) + 158px)}
#chart{position:absolute;inset:0}
#pxtag{position:absolute;right:0;z-index:4;background:var(--blue);color:#fff;font-size:13px;line-height:1.3;padding:3px 7px 4px;border-radius:3px;font-variant-numeric:tabular-nums;pointer-events:none;transform:translateY(-11px);box-sizing:border-box}
#wm{position:absolute;left:14px;bottom:40px;width:46px;height:46px;opacity:.45;filter:var(--logo);z-index:3;pointer-events:none}
#legend{position:absolute;top:calc(env(safe-area-inset-top) + 10px);left:14px;right:96px;z-index:5}
#lgtop{display:flex;align-items:center;gap:8px;font-size:18px;min-width:0}
#lgtop .ic{flex-basis:28px}
#lgname{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}
#lgstat{flex:0 0 auto;display:flex;align-items:center;padding:6px 9px;border-radius:12px;background:var(--glasssel)}
#lgdot{width:10px;height:10px;border-radius:50%;background:var(--faint);display:block}
#lgdot.on{background:var(--up)}
#lgpx{font-size:16px;margin-top:6px;font-variant-numeric:tabular-nums}
#lgbtn{width:38px;height:32px;margin:8px 0 0;padding:0;display:flex;align-items:center;justify-content:center;background:transparent;border:1px solid var(--line);border-radius:6px;color:var(--fg)}
#lgbtn svg{width:18px;height:18px;transition:transform .2s ease}
#lgbtn.open svg{transform:rotate(180deg)}
#lgohlc{font-size:12px;color:var(--muted);margin-top:8px;font-variant-numeric:tabular-nums;line-height:1.6}
#chbar{position:absolute;left:16px;right:16px;bottom:calc(env(safe-area-inset-bottom) + 90px);display:flex;gap:10px;z-index:6}
#sympill{flex:1.35;min-width:0;height:58px;border-radius:29px;display:flex;align-items:center;gap:10px;margin:0;padding:0 14px 0 6px;position:relative;overflow:hidden;color:var(--fg);font-weight:600;font-size:18px;text-align:left}
#sympill .ic{flex-basis:44px}
#sptxt{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
#sympill .ghost{position:absolute;left:62px;font-size:15px;opacity:.32;font-weight:600;white-space:nowrap;pointer-events:none}
#spg1{top:-7px}
#spg2{bottom:-7px}
#tools{flex:1;min-width:0;height:58px;border-radius:29px;display:flex;align-items:center;justify-content:space-around;padding:0 6px}
#tools button{width:44px;height:44px;margin:0;padding:0;background:transparent;border:0;color:var(--fg);display:flex;align-items:center;justify-content:center;border-radius:50%}
#tools svg{width:27px;height:27px;display:block}

/* fogli dal basso */
#sheetbg{position:fixed;inset:0;background:rgba(0,0,0,.35);z-index:60}
#sheet{position:fixed;left:8px;right:8px;bottom:calc(env(safe-area-inset-bottom) + 8px);max-height:78vh;overflow-y:auto;-webkit-overflow-scrolling:touch;border-radius:28px;z-index:61;padding:8px 0 14px;background:var(--glass2);color:var(--fg)}
.sh-h{width:40px;height:5px;border-radius:3px;background:var(--faint);margin:4px auto 8px}
.sh-t{font-weight:700;font-size:19px;padding:4px 18px 8px}
.sh-l{padding:14px 18px 4px;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}
.sh-i{display:flex;align-items:center;gap:12px;width:100%;margin:0;padding:12px 18px;background:transparent;border:0;border-radius:0;color:var(--fg);font-weight:400;font-size:16px;text-align:left}
.sh-i .ck{margin-left:auto;color:var(--goldfg);font-weight:600}
.sh-i .fl2{font-size:22px;line-height:1}
.sh-i.danger{color:var(--danger)}
.sh-i.dis{opacity:.45}
.sh-sep{height:1px;background:var(--sep);margin:8px 0}
.chips{display:flex;flex-wrap:wrap;gap:8px;padding:6px 18px 8px}
.chip{width:auto;margin:0;padding:9px 15px;border-radius:999px;background:var(--glasssel);color:var(--fg);border:0;font-weight:600}
.chip.on{background:var(--gold);color:var(--ongold)}
.sh-note{padding:6px 18px 10px;color:var(--muted);font-size:14px;line-height:1.45}
#q{display:block;margin:2px 18px 8px;width:calc(100% - 36px);border-radius:12px}
.addb{flex:0 0 34px;width:34px;height:34px;margin:0 0 0 auto;padding:0;border-radius:50%;background:var(--glasssel);color:var(--fg);border:0;font-size:20px;font-weight:500;display:flex;align-items:center;justify-content:center}
.addb.on{background:var(--gold);color:var(--ongold)}
@media (prefers-reduced-motion: reduce){*{transition:none!important;animation:none!important}}
`;
const st=document.createElement('style');
st.textContent=APP_CSS;
document.head.appendChild(st);

const IC_SEARCH='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.6-3.6"/></svg>';
const IC_WL='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/></svg>';
const IC_CH='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3v4M7 15v6M17 4v5M17 17v3"/><rect x="5" y="7" width="4" height="8" rx="1"/><rect x="15" y="9" width="4" height="8" rx="1"/></svg>';
const IC_PEN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 19l1-4L16.5 4.5a2.1 2.1 0 0 1 3 3L9 18l-4 1z"/><path d="M14.5 6.5l3 3"/><path d="M3 22c3-1.2 5 .8 8-.2"/></svg>';
const IC_IND='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14l4-5 4 4 4-6 6 7"/><path d="M3 19l4-4 4 3 4-5 6 5"/></svg>';
const IC_MORE='<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.9"/><circle cx="12" cy="12" r="1.9"/><circle cx="19" cy="12" r="1.9"/></svg>';
const IC_CHEV='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>';
const IC_BARS='<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.7" stroke-linejoin="round"><path d="M8.6 5.5h6.8l1.6 4.8H7z"/><path d="M3.6 13.2h6.8l1.6 4.8H2z"/><path d="M13.6 13.2h6.8l1.6 4.8H12z"/></svg>';

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
  <button id="fid" type="button" hidden><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2"/><path d="M9 10v1.5M15 10v1.5M12 10v3.5h-1M9 16.2c1.8 1.4 4.2 1.4 6 0"/></svg><span id="fidtxt"></span></button>
  <form id="lform" autocomplete="on" novalidate>
  <input id="email" name="email" type="email" placeholder="Email" autocomplete="username" autocapitalize="off" spellcheck="false">
  <input id="pass" name="password" type="password" placeholder="Password" autocomplete="current-password">
  <input id="server" name="server" placeholder="Server" autocomplete="off" autocapitalize="off" spellcheck="false">
  <button id="go" type="submit">Collegati</button>
  </form>
  <button id="forget" type="button" hidden></button>
  <button id="reset" type="button"></button>
</div>
<div id="msg"></div>
<div id="shell" hidden>
  <section id="wl-screen" class="screen">
    <div id="wlhead">
      <button id="menubtn" class="circ glass" aria-label="Menu"><img alt="" src="${LOGO_SRC}"></button>
    </div>
    <div id="bar" hidden><span id="bartxt"></span><button id="barsave"></button><button id="barno" class="no"></button></div>
    <div id="wl"></div>
  </section>
  <section id="ch-screen" class="screen" hidden>
    <div id="chartbox">
      <div id="chart"></div>
      <div id="pxtag" hidden><div id="tagpx"></div><div id="tagcd"></div></div>
      <img id="wm" alt="" src="${LOGO_SRC}">
    </div>
    <div id="legend">
      <div id="lgtop"><div id="lgic"></div><span id="lgname"></span><span id="lgstat"><i id="lgdot"></i></span></div>
      <div id="lgpx"></div>
      <button id="lgbtn" aria-label="Details">${IC_CHEV}</button>
      <div id="lgohlc" hidden></div>
    </div>
    <div id="chbar">
      <button id="sympill" class="glass"><span id="spg1" class="ghost"></span><div id="spic"></div><span id="sptxt"></span><span id="spg2" class="ghost"></span></button>
      <div id="tools" class="glass">
        <button id="pencil" aria-label="Drawing">${IC_PEN}</button>
        <button id="inds" aria-label="Indicators">${IC_IND}</button>
        <button id="more" aria-label="More">${IC_MORE}</button>
      </div>
    </div>
  </section>
  <button id="mini" class="glass"><div id="mnic"></div><div id="mntxt"><div id="mna"></div><div id="mnb"></div></div><canvas id="mnsp"></canvas></button>
  <nav id="tabbar" class="glass">
    <button class="tab on" data-t="wl">${IC_WL}<span id="tabwl"></span></button>
    <button class="tab" data-t="ch">${IC_CH}<span id="tabch"></span></button>
  </nav>
</div>
<div id="sheetbg" hidden></div>
<div id="sheet" class="glass" hidden></div>
<div id="ver"></div>
`;

/* ---------- impostazioni ---------- */
const $=id=>document.getElementById(id);
const BASE='https://demo.tradelocker.com/backend-api';
const DAYS={'1m':2,'5m':7,'15m':14,'1H':60,'4H':200,'1D':1000};
let tok,accNum,accId,tid,route,res='5m',chart,series;
let msgTimer=0;
const msg=tx=>{
  const el=$('msg');el.textContent=tx;clearTimeout(msgTimer);
  if(tx&&document.body.classList.contains('inapp'))msgTimer=setTimeout(()=>{if(el.textContent===tx)el.textContent=''},5000);
};
$('ver').textContent='v'+VERSION;

/* ---------- lingue ---------- */
const FLAGS={it:'🇮🇹',es:'🇪🇸',en:'🇬🇧',fr:'🇫🇷'};
const NAMES={it:'Italiano',es:'Español',en:'English',fr:'Français'};
const T={
  it:{email:'Email',pass:'Password',server:'Server',go:'Collegati',
    logging:'Accesso in corso...',finding:'Carico i mercati...',nofind:'XAUUSD non trovato',
    nobars:'Nessuna candela ricevuta',upd:'Aggiornamento: ',ok:'Collegato.',
    newver:'Nuova versione, ricarico...',anim:'Animazione interrotta: ',faceid:"Entra con Face ID",save:"Salvare l'accesso con Face ID?",savebtn:"Salva",later:"Non ora",saved:"Accesso salvato.",savedkey:"Chiave protetta dal Face ID.",savedgate:"Controllo con Face ID.",forget:"Cancella accesso salvato",forgot:"Accesso salvato cancellato.",fidfail:"Face ID non riuscito. Usa email e password.",nofid:"Non riesco a usare il Face ID qui.",relogin:"Sessione scaduta, mi ricollego...",theme:"Tema",dark:"Scuro",light:"Bianco",logout:"Esci",wl:"Watchlist",ch:"Grafico",cat_fx:"Forex",cat_com:"Commodity",cat_cry:"Cripto",cat_idx:"Indici",cat_stk:"Azioni",cat_oth:"Altro",search:"Cerca simbolo",searchph:"Cerca",tf:"Timeframe",symbols:"Simboli",tools:"Strumenti di disegno",inds:"Indicatori",soon:"Arrivano nella versione 0.9.0, con il nuovo motore del grafico.",tl_trend:"Linea di tendenza",tl_h:"Linea orizzontale",tl_rect:"Rettangolo",tl_fib:"Ritracciamento di Fibonacci",tl_text:"Testo",in_ma:"Medie mobili",in_rsi:"RSI",in_macd:"MACD",in_bb:"Bande di Bollinger",in_mine:"I miei script",refresh:"Aggiorna",language:"Lingua",today:"oggi",noinst:"Nessuno strumento disponibile",noresult:"Nessun risultato",slow:"Connessione lenta con il broker, riprovo tra poco.",reset:"Ripristina l'app",resetq:"Cancellare tutti i dati salvati dall'app su questo iPhone (accesso col Face ID, tema, lingua, server) e ripartire da zero?",resave:"Accesso salvato da rifare: entra con email e password e salva di nuovo col Face ID.",waitfid:"Conferma con Face ID…",nofidresp:"iPhone non ha mostrato il Face ID. Controlla in Impostazioni › Generali › Compilazione automatica e password che password e passkey siano attive, con l'app Password.",fidset:"Controlla in Impostazioni › Generali › Compilazione automatica e password.",fidsave:"Accesso con Face ID",fidhint:"Se iPhone dice che non c'è nessuna passkey, tocca «Cancella accesso salvato», entra con email e password e salva di nuovo.",
    nolib:'La libreria del grafico non si è caricata. Ricarica la pagina.',
    cors:'Il browser ha bloccato la richiesta (probabile blocco CORS di TradeLocker).'},
  es:{email:'Correo electrónico',pass:'Contraseña',server:'Servidor',go:'Conectar',
    logging:'Iniciando sesión...',finding:'Cargando mercados...',nofind:'XAUUSD no encontrado',
    nobars:'No se recibió ninguna vela',upd:'Actualización: ',ok:'Conectado.',
    newver:'Nueva versión, recargando...',anim:'Animación interrumpida: ',faceid:"Entrar con Face ID",save:"¿Guardar el acceso con Face ID?",savebtn:"Guardar",later:"Ahora no",saved:"Acceso guardado.",savedkey:"Clave protegida por Face ID.",savedgate:"Control con Face ID.",forget:"Borrar acceso guardado",forgot:"Acceso guardado borrado.",fidfail:"Face ID no funcionó. Usa correo y contraseña.",nofid:"No puedo usar Face ID aquí.",relogin:"Sesión caducada, reconectando...",theme:"Tema",dark:"Oscuro",light:"Blanco",logout:"Salir",wl:"Watchlist",ch:"Gráfico",cat_fx:"Forex",cat_com:"Materias primas",cat_cry:"Cripto",cat_idx:"Índices",cat_stk:"Acciones",cat_oth:"Otros",search:"Buscar símbolo",searchph:"Buscar",tf:"Temporalidad",symbols:"Símbolos",tools:"Herramientas de dibujo",inds:"Indicadores",soon:"Llegan en la versión 0.9.0, con el nuevo motor del gráfico.",tl_trend:"Línea de tendencia",tl_h:"Línea horizontal",tl_rect:"Rectángulo",tl_fib:"Retroceso de Fibonacci",tl_text:"Texto",in_ma:"Medias móviles",in_rsi:"RSI",in_macd:"MACD",in_bb:"Bandas de Bollinger",in_mine:"Mis scripts",refresh:"Actualizar",language:"Idioma",today:"hoy",noinst:"No hay instrumentos disponibles",noresult:"Sin resultados",slow:"Conexión lenta con el bróker, reintento en breve.",reset:"Restablecer la app",resetq:"¿Borrar todos los datos guardados por la app en este iPhone (acceso con Face ID, tema, idioma, servidor) y empezar de cero?",resave:"Hay que rehacer el acceso guardado: entra con correo y contraseña y guarda de nuevo con Face ID.",waitfid:"Confirma con Face ID…",nofidresp:"El iPhone no mostró Face ID. Revisa en Ajustes › General › Autorrelleno y contraseñas que las contraseñas y llaves de acceso estén activas, con la app Contraseñas.",fidset:"Revisa Ajustes › General › Autorrelleno y contraseñas.",fidsave:"Acceso con Face ID",fidhint:"Si el iPhone dice que no hay ninguna llave de acceso, toca «Borrar acceso guardado», entra con correo y contraseña y guarda de nuevo.",
    nolib:'La librería del gráfico no se cargó. Recarga la página.',
    cors:'El navegador bloqueó la solicitud (probable bloqueo CORS de TradeLocker).'},
  en:{email:'Email',pass:'Password',server:'Server',go:'Connect',
    logging:'Signing in...',finding:'Loading markets...',nofind:'XAUUSD not found',
    nobars:'No candles received',upd:'Update: ',ok:'Connected.',
    newver:'New version, reloading...',anim:'Animation interrupted: ',faceid:"Sign in with Face ID",save:"Save sign-in with Face ID?",savebtn:"Save",later:"Not now",saved:"Sign-in saved.",savedkey:"Key protected by Face ID.",savedgate:"Face ID check.",forget:"Delete saved sign-in",forgot:"Saved sign-in deleted.",fidfail:"Face ID failed. Use email and password.",nofid:"Face ID is not available here.",relogin:"Session expired, reconnecting...",theme:"Theme",dark:"Dark",light:"White",logout:"Sign out",wl:"Watchlist",ch:"Chart",cat_fx:"Forex",cat_com:"Commodities",cat_cry:"Crypto",cat_idx:"Indices",cat_stk:"Stocks",cat_oth:"Other",search:"Search symbol",searchph:"Search",tf:"Timeframe",symbols:"Symbols",tools:"Drawing tools",inds:"Indicators",soon:"Coming in version 0.9.0, with the new chart engine.",tl_trend:"Trend line",tl_h:"Horizontal line",tl_rect:"Rectangle",tl_fib:"Fibonacci retracement",tl_text:"Text",in_ma:"Moving averages",in_rsi:"RSI",in_macd:"MACD",in_bb:"Bollinger Bands",in_mine:"My scripts",refresh:"Refresh",language:"Language",today:"today",noinst:"No instruments available",noresult:"No results",slow:"Slow connection to the broker, retrying shortly.",reset:"Reset the app",resetq:"Delete all data the app saved on this iPhone (Face ID sign-in, theme, language, server) and start from scratch?",resave:"Saved sign-in must be redone: sign in with email and password and save again with Face ID.",waitfid:"Confirm with Face ID…",nofidresp:"The iPhone did not show Face ID. Check Settings › General › AutoFill & Passwords: passwords and passkeys must be on, with the Passwords app.",fidset:"Check Settings › General › AutoFill & Passwords.",fidsave:"Sign in with Face ID",fidhint:"If the iPhone says there is no passkey, tap “Delete saved sign-in”, sign in with email and password and save again.",
    nolib:'The chart library failed to load. Reload the page.',
    cors:'The browser blocked the request (probably a TradeLocker CORS block).'},
  fr:{email:'E-mail',pass:'Mot de passe',server:'Serveur',go:'Se connecter',
    logging:'Connexion en cours...',finding:'Chargement des marchés...',nofind:'XAUUSD introuvable',
    nobars:'Aucune bougie reçue',upd:'Mise à jour : ',ok:'Connecté.',
    newver:'Nouvelle version, rechargement...',anim:'Animation interrompue : ',faceid:"Se connecter avec Face ID",save:"Enregistrer l'accès avec Face ID ?",savebtn:"Enregistrer",later:"Pas maintenant",saved:"Accès enregistré.",savedkey:"Clé protégée par Face ID.",savedgate:"Contrôle par Face ID.",forget:"Supprimer l'accès enregistré",forgot:"Accès enregistré supprimé.",fidfail:"Face ID a échoué. Utilise e-mail et mot de passe.",nofid:"Face ID n'est pas disponible ici.",relogin:"Session expirée, reconnexion...",theme:"Thème",dark:"Sombre",light:"Blanc",logout:"Se déconnecter",wl:"Watchlist",ch:"Graphique",cat_fx:"Forex",cat_com:"Matières premières",cat_cry:"Crypto",cat_idx:"Indices",cat_stk:"Actions",cat_oth:"Autres",search:"Rechercher un symbole",searchph:"Rechercher",tf:"Unité de temps",symbols:"Symboles",tools:"Outils de dessin",inds:"Indicateurs",soon:"Disponibles dans la version 0.9.0, avec le nouveau moteur graphique.",tl_trend:"Ligne de tendance",tl_h:"Ligne horizontale",tl_rect:"Rectangle",tl_fib:"Retracement de Fibonacci",tl_text:"Texte",in_ma:"Moyennes mobiles",in_rsi:"RSI",in_macd:"MACD",in_bb:"Bandes de Bollinger",in_mine:"Mes scripts",refresh:"Actualiser",language:"Langue",today:"aujourd\u2019hui",noinst:"Aucun instrument disponible",noresult:"Aucun résultat",slow:"Connexion lente avec le courtier, nouvel essai sous peu.",reset:"Réinitialiser l'app",resetq:"Effacer toutes les données enregistrées par l'app sur cet iPhone (accès Face ID, thème, langue, serveur) et repartir de zéro ?",resave:"L'accès enregistré est à refaire : connecte-toi avec e-mail et mot de passe et enregistre à nouveau avec Face ID.",waitfid:"Confirme avec Face ID…",nofidresp:"L'iPhone n'a pas affiché Face ID. Vérifie dans Réglages › Général › Remplissage automatique et mots de passe que les mots de passe et clés d'accès sont activés, avec l'app Mots de passe.",fidset:"Vérifie Réglages › Général › Remplissage automatique et mots de passe.",fidsave:"Accès avec Face ID",fidhint:"Si l'iPhone indique qu'il n'y a aucune clé d'accès, touche « Supprimer l'accès enregistré », connecte-toi avec e-mail et mot de passe et enregistre à nouveau.",
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
  try{refreshFid()}catch(e){}
  try{renderAll()}catch(e){}
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
      fly.style.transition='transform '+FLY_MS+'ms cubic-bezier(.65,0,.25,1), filter '+FLY_MS+'ms ease';
      fly.getBoundingClientRect();
      requestAnimationFrame(()=>{
        fly.style.transform='translate('+dx+'px,'+dy+'px) scale('+sc+')';
        if(document.documentElement.dataset.theme==='light')fly.style.filter='invert(1)';
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

/* ---------- aggiornamenti dell'app ---------- */
async function remoteVersion(){
  try{
    const r=await fetch('app.js?t='+Date.now(),{cache:'no-store'});
    if(!r.ok)return null;
    const m=(await r.text()).match(/const VERSION='([^']+)'/);
    return m?m[1]:null;
  }catch(e){return null}
}
async function checkFresh(){
  const v=await remoteVersion();
  if(v&&v!==VERSION){
    msg(t('newver'));
    try{sessionStorage.setItem('noSplash','1')}catch(e){}
    if(series)saveSnap();
    setTimeout(()=>location.reload(),300);
  }
}
let hiddenAt=0;
document.addEventListener('visibilitychange',()=>{
  if(document.hidden)hiddenAt=Date.now();
  else if(Date.now()-hiddenAt>3000)checkFresh();
});
window.addEventListener('pageshow',e=>{if(e.persisted)checkFresh()});
/* aggiorna: dentro l'app ricarica i dati e resta dove sei; se online c'e' una versione nuova la carica senza farti uscire */
async function doRefresh(){
  const v=await remoteVersion();
  if(!series||(v&&v!==VERSION)){
    try{sessionStorage.setItem('noSplash','1')}catch(e){}
    if(series)saveSnap();
    location.reload();
    return;
  }
  await loadSafe();refreshWL(true);
}
$('reload').onclick=async()=>{
  const b=$('reload');
  if(b.classList.contains('spin'))return;
  b.classList.add('spin');
  await doRefresh();
  setTimeout(()=>b.classList.remove('spin'),300);
};

/* ---------- dati TradeLocker ---------- */
/* una richiesta alla volta, distanziate; se il broker ne rifiuta una, pausa e poi riprova */
const GAP=350;
let apiChain=Promise.resolve(),apiLast=0,apiPauseUntil=0,apiBack=0;
/* rete caduta: pausa breve (1,5 s, poi di piu' se continua); troppe richieste (429): pausa piu' lunga */
function backoff(first){apiBack=Math.min(30000,apiBack?apiBack*2:first);apiPauseUntil=Date.now()+apiBack}
function api(path,opt={}){
  const isAuth=path.startsWith('/auth/');
  const run=async()=>{
    const wait=Math.max(0,apiLast+GAP-Date.now(),isAuth?0:apiPauseUntil-Date.now());
    if(wait)await new Promise(r=>setTimeout(r,wait));
    apiLast=Date.now();
    let r;
    try{r=await fetch(BASE+path,{...opt,headers:{'Content-Type':'application/json',...(opt.headers||{})}})}
    catch(e){if(!isAuth)backoff(1500);throw e}
    if(r.status===429)backoff(5000);else if(r.ok)apiBack=0;
    const tx=await r.text();let j;
    try{j=JSON.parse(tx)}catch(e){j=tx}
    if(!r.ok){const er=new Error(r.status+' '+(typeof j==='string'?j:JSON.stringify(j)).slice(0,300));er.status=r.status;throw er}
    return j;
  };
  const p=apiChain.then(run,run);
  apiChain=p.catch(()=>{});
  return p;
}
const paused=()=>Date.now()<apiPauseUntil;
const auth=()=>({Authorization:'Bearer '+tok,accNum:String(accNum)});
const SECS={'1m':60,'5m':300,'15m':900,'1H':3600,'4H':14400,'1D':86400};
async function barsFor(it,reso,from,to){
  const q=new URLSearchParams({routeId:it.route,from:from,to:to,resolution:reso,tradableInstrumentId:it.tid});
  const j=await authed('/trade/history?'+q);
  const list=(j.d&&j.d.barDetails)||j.barDetails||[];
  return list.map(b=>({t:+b.t,o:+b.o,h:+b.h,l:+b.l,c:+b.c})).sort((a,b)=>a.t-b.t);
}
const toChart=b=>({time:Math.floor(b.t/1000)-new Date().getTimezoneOffset()*60,open:b.o,high:b.h,low:b.l,close:b.c});
function decOf(vals){
  for(let d=0;d<=5;d++){const k=Math.pow(10,d);if(vals.every(v=>Math.abs(v*k-Math.round(v*k))<1e-4))return d}
  return 5;
}
const LOC={it:'it-IT',es:'es-ES',en:'en-US',fr:'fr-FR'};
/* numeri come su TradingView: 4.134,015 in italiano, 4,134.015 in inglese */
const SEPS={it:['.',','],es:['.',','],en:[',','.'],fr:['\u202f',',']};
function fmt(v,d){
  const sp=SEPS[lang]||SEPS.it,n=Number(v);
  const s=Math.abs(n).toFixed(d).split('.');
  return (n<0?'-':'')+s[0].replace(/\B(?=(\d{3})+(?!\d))/g,sp[0])+(s[1]?sp[1]+s[1]:'');
}
function fmtSigned(v,d){return (v>0?'+':v<0?'−':'')+fmt(Math.abs(v),d)}
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function themeVar(n){return getComputedStyle(document.documentElement).getPropertyValue(n).trim()}

/* ---------- strumenti, watchlist, simbolo attivo ---------- */
let INST=[],BYN={},WATCH=[],cur=null,QUOTE={},lastBars=[],dec=2,tab='wl',tickN=0,lastMove=0;
const norm=s=>String(s||'').toUpperCase().replace(/[^A-Z0-9]/g,'');
const FIXED=['EURUSD','XAUUSD','XAGUSD','XPTUSD','BTCUSD','ETHUSD','US30','NAS100'];
function findBase(b){return INST.find(x=>norm(x.name)===b)||INST.find(x=>norm(x.name).startsWith(b))}
function saveWatch(){try{localStorage.setItem('tc_watch',JSON.stringify(WATCH))}catch(e){}}
/* niente rinnovo automatico qui: questa funzione la usa anche il ricollegamento */
async function loadInstruments(){
  const i=await api('/trade/accounts/'+accId+'/instruments',{headers:auth()});
  const list=(i.d&&i.d.instruments)||[];
  INST=[];BYN={};
  list.forEach(x=>{
    const r=(x.routes||[]).find(r=>r.type==='INFO');
    if(!r||!x.name||BYN[x.name])return;
    const it={name:String(x.name),tid:x.tradableInstrumentId,route:r.id,desc:String(x.description||x.localizedName||''),type:String(x.type||'')};
    INST.push(it);BYN[it.name]=it;
  });
  if(!INST.length)throw new Error(t('noinst'));
  /* watchlist fissa: solo i simboli scelti dall'amministratore */
  WATCH=[];
  FIXED.forEach(b=>{const x=findBase(b);if(x&&!WATCH.includes(x.name))WATCH.push(x.name)});
  if(!WATCH.length)WATCH=INST.slice(0,8).map(x=>x.name);
  let s=cur;
  if(!s||!WATCH.includes(s)){try{s=localStorage.getItem('tc_sym')}catch(e){}}
  if(!WATCH.includes(s))s=null;
  if(!s||!BYN[s]){const g=findBase('XAUUSD');s=g?g.name:WATCH[0]}
  setCur(s,false);
}
async function quoteFor(name){
  const it=BYN[name];if(!it)return;
  const to=Date.now(),b=await barsFor(it,'1D',to-12*864e5,to);
  if(!b.length)return;
  const last=b[b.length-1],prev=b.length>1?b[b.length-2].c:last.o;
  QUOTE[name]={last:last.c,prev,dec:decOf(b.slice(-6).flatMap(x=>[x.o,x.h,x.l,x.c])),t:last.t};
}
function setCur(name,doLoad=true){
  if(!BYN[name])return;
  const changed=name!==cur;
  cur=name;tid=BYN[name].tid;route=BYN[name].route;
  try{localStorage.setItem('tc_sym',name)}catch(e){}
  if(changed){lastBars=[];lastMove=0;if(series){try{series.setData([])}catch(e){}}}
  renderLegend();renderSymPill();renderMini();tint();
  if(doLoad&&series){
    loadSafe();
    quoteFor(name).then(()=>{renderLegend();renderMini();tint()}).catch(()=>{});
  }
}
function setRes(r){
  if(!SECS[r])return;
  res=r;lastBars=[];lastMove=0;
  renderSymPill();
  if(series){try{series.setData([])}catch(e){}loadSafe()}
}

/* ---------- icone e descrizioni ---------- */
const CUR_FLAG={USD:'🇺🇸',EUR:'🇪🇺',GBP:'🇬🇧',JPY:'🇯🇵',CHF:'🇨🇭',CAD:'🇨🇦',AUD:'🇦🇺',NZD:'🇳🇿',SEK:'🇸🇪',NOK:'🇳🇴',DKK:'🇩🇰',PLN:'🇵🇱',HUF:'🇭🇺',CZK:'🇨🇿',TRY:'🇹🇷',ZAR:'🇿🇦',MXN:'🇲🇽',SGD:'🇸🇬',HKD:'🇭🇰',CNH:'🇨🇳',CNY:'🇨🇳',ILS:'🇮🇱'};
const IDX=[[/^(US30|DJ30|DOW|WS30)/,'🇺🇸','Dow Jones 30'],[/^(NAS100|US100|USTEC|NDX)/,'🇺🇸','Nasdaq 100'],[/^(US500|SPX500|SP500|SPX)/,'🇺🇸','S&P 500'],[/^(GER40|DE40|GER30|DE30|DAX)/,'🇩🇪','DAX 40'],[/^(UK100|FTSE)/,'🇬🇧','FTSE 100'],[/^(JP225|JPN225|NIK|NI225)/,'🇯🇵','Nikkei 225'],[/^(FRA40|FR40|CAC)/,'🇫🇷','CAC 40'],[/^(EU50|EUSTX50|STOXX50|ESTX50)/,'🇪🇺','Euro Stoxx 50'],[/^(AUS200|AU200)/,'🇦🇺','ASX 200'],[/^(HK50|HSI)/,'🇭🇰','Hang Seng'],[/^(ESP35|ES35|SPA35)/,'🇪🇸','IBEX 35'],[/^(IT40|ITA40)/,'🇮🇹','FTSE MIB']];
const CRYPTO=['BTC','ETH','SOL','XRP','LTC','DOGE','ADA','BNB','DOT','AVAX','LINK','TRX','BCH','XLM','MATIC','SHIB','UNI','ATOM','TON'];
const CRY_COL={BTC:'#f7931a',ETH:'#627eea',SOL:'#9945ff',XRP:'#2b3138',LTC:'#345d9d',DOGE:'#c2a633',ADA:'#0033ad',BNB:'#f0b90b'};
const CRY_SYM={BTC:'₿',ETH:'Ξ',LTC:'Ł',DOGE:'Ð'};
const METAL={XAU:'#d9a441',XAG:'#a9abb0',XPT:'#c3bfb5',XPD:'#b0aba0'};
const DESC_IT={EURUSD:'Euro / Dollaro USA',GBPUSD:'Sterlina britannica / Dollaro USA',USDJPY:'Dollaro USA / Yen giapponese',USDCHF:'Dollaro USA / Franco svizzero',AUDUSD:'Dollaro australiano / Dollaro USA',USDCAD:'Dollaro USA / Dollaro canadese',NZDUSD:'Dollaro neozelandese / Dollaro USA',EURGBP:'Euro / Sterlina britannica',EURJPY:'Euro / Yen giapponese',GBPJPY:'Sterlina britannica / Yen giapponese',XAUUSD:'Oro spot / Dollaro USA',XAGUSD:'Argento / Dollaro USA',XPTUSD:'Platino / Dollaro USA',XPDUSD:'Palladio / Dollaro USA',BTCUSD:'Bitcoin / Dollaro USA',ETHUSD:'Ethereum / Dollaro USA'};
function info(it){
  const b=norm(it.name),ty=it.type.toUpperCase(),m=b.slice(0,3);
  let cat='oth';
  if(METAL[m]||/^(XTI|XBR|WTI|USOIL|UKOIL|BRENT|OIL|NGAS|XNG|COPPER|XCU)/.test(b))cat='com';
  else if(ty.includes('CRYPTO')||CRYPTO.some(c=>b.startsWith(c)))cat='cry';
  else if(b.length>=6&&CUR_FLAG[m]&&CUR_FLAG[b.slice(3,6)])cat='fx';
  else if(IDX.some(r=>r[0].test(b))||ty.includes('INDEX'))cat='idx';
  else if(ty.includes('EQUITY')||ty.includes('STOCK')||ty.includes('SHARE'))cat='stk';
  const b6=b.slice(0,6);
  let desc=(lang==='it'&&DESC_IT[b6])||it.desc||DESC_IT[b6]||'';
  if(cat==='idx'){const r=IDX.find(r=>r[0].test(b));if(r)desc=r[2]}
  return{cat,b,desc};
}
function iconEl(it,size,id){
  const s=size||44,{cat,b}=info(it),m=b.slice(0,3);
  const d=document.createElement('div');
  d.className='ic';if(id)d.id=id;
  d.style.width=d.style.height=s+'px';d.style.flexBasis=s+'px';d.style.fontSize=(s/2)+'px';
  const flag=(cls,txt)=>{const f=document.createElement('span');f.className='fl '+cls;f.textContent=txt;d.appendChild(f)};
  if(cat==='fx'){d.classList.add('fx');flag('a',CUR_FLAG[b.slice(3,6)]);flag('b',CUR_FLAG[m])}
  else if(METAL[m]){d.style.background=METAL[m];d.innerHTML=IC_BARS}
  else if(cat==='cry'){const c=CRYPTO.find(c=>b.startsWith(c))||m;d.style.background=CRY_COL[c]||'#5b6b7c';d.textContent=CRY_SYM[c]||c[0]}
  else if(cat==='idx'){const r=IDX.find(r=>r[0].test(b));d.classList.add('flag');flag('',r?r[1]:'🌐')}
  else{d.style.background='#4a5260';d.style.fontSize=(s/2.6)+'px';d.textContent=b.slice(0,2)}
  return d;
}
function swapIcon(id,size){const it=BYN[cur],old=$(id);if(it&&old)old.replaceWith(iconEl(it,size,id))}

/* ---------- watchlist ---------- */
const CATS=['fx','com','cry','idx','stk','oth'];
function pxHTML(v,d){const s=fmt(v,d);return d<3?esc(s):esc(s.slice(0,-1))+'<sup>'+esc(s.slice(-1))+'</sup>'}
function fillQuote(r,n){
  const q=QUOTE[n],px=r.querySelector('.rpx'),ch=r.querySelector('.rch');
  if(!q){px.textContent='—';ch.textContent='';ch.className='rch';return}
  px.innerHTML=pxHTML(q.last,q.dec);
  const dv=q.last-q.prev,pc=q.prev?dv/q.prev*100:0;
  ch.textContent=fmtSigned(dv,q.dec)+'  '+fmtSigned(pc,2)+'%';
  ch.className='rch '+(dv>0?'up':dv<0?'down':'');
}
function renderWL(){
  const box=$('wl');box.innerHTML='';
  const groups={};
  WATCH.forEach(n=>{const it=BYN[n];if(it){const c=info(it).cat;(groups[c]=groups[c]||[]).push(it)}});
  CATS.forEach(c=>{
    if(!groups[c])return;
    const h=document.createElement('div');h.className='sec';h.textContent=t('cat_'+c);box.appendChild(h);
    groups[c].forEach(it=>{
      const r=document.createElement('button');r.className='row';r.dataset.n=it.name;
      r.appendChild(iconEl(it));
      const mn=document.createElement('div');mn.className='rmain';
      const s=document.createElement('div');s.className='rsym';s.textContent=it.name;
      const ds=document.createElement('div');ds.className='rdesc';ds.textContent=info(it).desc;
      mn.appendChild(s);mn.appendChild(ds);r.appendChild(mn);
      const rt=document.createElement('div');rt.className='rright';
      rt.innerHTML='<div class="rpx"></div><div class="rch"></div>';
      r.appendChild(rt);
      fillQuote(r,it.name);
      r.onclick=()=>{setCur(it.name);showTab('ch')};
      box.appendChild(r);
    });
  });
}
let wlBusy=false,wlLast=0;
async function refreshWL(force){
  if(wlBusy||!accId||!WATCH.length)return;
  if(!force&&Date.now()-wlLast<8000)return;
  if(paused())return;
  wlBusy=true;wlLast=Date.now();
  try{
    for(const n of WATCH.slice()){
      try{await quoteFor(n)}catch(e){if(e.status===401)break;continue}
      document.querySelectorAll('#wl .row').forEach(r=>{if(r.dataset.n===n)fillQuote(r,n)});
      if(n===cur){renderLegend();renderMini();tint()}
    }
  }finally{wlBusy=false}
}
setInterval(()=>{if(!document.hidden&&series&&tab==='wl')refreshWL(false)},1000);

/* ---------- mini lettore sopra la barra ---------- */
function renderMini(){
  const it=BYN[cur];if(!it)return;
  swapIcon('mnic',44);
  const q=QUOTE[cur];
  const useQ=tab==='wl'&&q;
  const last=useQ?q.last:(lastBars.length?lastBars[lastBars.length-1].c:(q?q.last:null));
  const d=useQ?q.dec:(lastBars.length?dec:(q?q.dec:dec));
  $('mna').textContent=it.name+(last!=null?'  '+fmt(last,d):'');
  if(q){
    const dv=(last!=null?last:q.last)-q.prev,pc=q.prev?dv/q.prev*100:0;
    $('mnb').textContent=fmtSigned(pc,2)+'% '+t('today');
    $('mnb').className=dv>0?'up':dv<0?'down':'';
  }else{$('mnb').textContent='';$('mnb').className=''}
  drawSpark();
}
function drawSpark(){
  const cv=$('mnsp'),w=70,h=30,r=window.devicePixelRatio||2;
  cv.width=w*r;cv.height=h*r;
  const c=cv.getContext('2d');c.scale(r,r);c.clearRect(0,0,w,h);
  const pts=lastBars.slice(-60).map(b=>b.c);
  if(pts.length<2)return;
  const lo=Math.min(...pts),hi=Math.max(...pts),rg=(hi-lo)||1,q=QUOTE[cur];
  const up=q?pts[pts.length-1]>=q.prev:pts[pts.length-1]>=pts[0];
  const col=themeVar(up?'--up':'--down');
  const X=i=>2+i*(w-8)/(pts.length-1),Y=v=>3+(hi-v)/rg*(h-6);
  c.strokeStyle=col;c.lineWidth=1.6;c.lineJoin='round';c.beginPath();
  pts.forEach((v,i)=>i?c.lineTo(X(i),Y(v)):c.moveTo(X(i),Y(v)));c.stroke();
  c.fillStyle=col;c.beginPath();c.arc(X(pts.length-1),Y(pts[pts.length-1]),2.6,0,7);c.fill();
}

/* ---------- schermata grafico ---------- */
/* colori pieni (#rrggbb): niente trasparenze, cosi' il grafico li accetta di sicuro */
let chartSolid=false;
function chartColors(){
  const dark=(document.documentElement.dataset.theme||'dark')!=='light';
  const q=QUOTE[cur],last=lastBars.length?lastBars[lastBars.length-1].c:(q?q.last:null);
  const dv=q&&last!=null?last-q.prev:0;
  const bg=dark?'#000000':'#ffffff';
  const tintc=dv>0?(dark?'#062820':'#e8f6f2'):dv<0?(dark?'#2e0508':'#fdecee'):bg;
  return{bg,tintc,text:dark?'#8e8e93':'#6b6b70',grid:dark?'#161616':'#eeeeee'};
}
function chartBg(){const c=chartColors();return chartSolid?{type:'solid',color:c.bg}:{type:'gradient',topColor:c.bg,bottomColor:c.tintc}}
function chartOpts(){
  const cc=chartColors();
  return{
    layout:{background:chartBg(),textColor:cc.text,fontFamily:'-apple-system,system-ui,sans-serif'},
    grid:{vertLines:{color:cc.grid},horzLines:{color:cc.grid}},
    rightPriceScale:{borderVisible:false,scaleMargins:{top:0.2,bottom:0.06}},
    timeScale:{borderVisible:false,timeVisible:true,secondsVisible:false,rightOffset:6},
    localization:{priceFormatter:p=>fmt(p,dec)}
  };
}
function setDec(d){
  if(d===dec)return;
  dec=d;
  if(series)series.applyOptions({priceFormat:{type:'price',precision:d,minMove:Math.pow(10,-d)}});
  if(chart)chart.applyOptions({localization:{priceFormatter:p=>fmt(p,dec)}});
}
function tint(){
  const c=chartColors();
  $('ch-screen').style.setProperty('--tint',chartSolid?c.bg:c.tintc);
  if(chart){try{chart.applyOptions({layout:{background:chartBg()}})}catch(e){}}
}
function renderLegend(){
  const it=BYN[cur];if(!it)return;
  swapIcon('lgic',28);
  $('lgname').textContent=it.name+' · '+info(it).desc;
  const last=lastBars.length?lastBars[lastBars.length-1]:null;
  $('lgpx').textContent=last?fmt(last.c,dec):'';
  $('lgdot').className=lastMove&&Date.now()-lastMove<180000?'on':'';
  $('lgohlc').textContent=last?('O '+fmt(last.o,dec)+'   H '+fmt(last.h,dec)+'   L '+fmt(last.l,dec)+'   C '+fmt(last.c,dec)):'';
}
function renderSymPill(){
  const it=BYN[cur];if(!it)return;
  swapIcon('spic',44);
  $('sptxt').textContent=it.name+' '+res;
  const i=WATCH.indexOf(cur);
  $('spg1').textContent=i>0?WATCH[i-1]+' '+res:'';
  $('spg2').textContent=i>=0&&i<WATCH.length-1?WATCH[i+1]+' '+res:'';
}
function afterData(){
  const last=lastBars[lastBars.length-1];
  if(last){
    if(!lastMove&&Date.now()-last.t<SECS[res]*1000+120000)lastMove=Date.now();
    if(afterData.prev!=null&&afterData.prev!==last.c)lastMove=Date.now();
    afterData.prev=last.c;
  }
  renderLegend();renderMini();tint();tagText();
}
async function load(){
  const it=BYN[cur];if(!it||!series)return;
  const want=cur+'|'+res;
  const to=Date.now(),from=to-DAYS[res]*864e5;
  const b=await barsFor(it,res,from,to);
  if(cur+'|'+res!==want)return;
  if(!b.length)throw new Error(t('nobars'));
  lastBars=b;afterData.prev=null;
  setDec(decOf(b.slice(-200).flatMap(x=>[x.o,x.h,x.l,x.c])));
  series.setData(b.map(toChart));
  try{chart.priceScale('right').applyOptions({autoScale:true});chart.timeScale().scrollToRealTime()}catch(e){}
  afterData();
}
let tickFails=0;
async function tick(){
  if(!series||!cur||!lastBars.length||paused()||document.hidden)return;
  try{
    const it=BYN[cur],want=cur+'|'+res,to=Date.now();
    const b=await barsFor(it,res,to-Math.max(72e5,SECS[res]*3000),to);
    if(cur+'|'+res!==want||!b.length)return;
    b.forEach(x=>{try{series.update(toChart(x))}catch(e){}});
    const map=new Map(lastBars.map(x=>[x.t,x]));
    b.forEach(x=>map.set(x.t,x));
    lastBars=[...map.values()].sort((a,c)=>a.t-c.t).slice(-5000);
    afterData();
    if(++tickN%6===0)quoteFor(cur).then(()=>{renderLegend();renderMini();tint()}).catch(()=>{});
    tickFails=0;
  }catch(e){
    /* errori passeggeri in silenzio; avviso solo se continuano */
    if(e&&e.status===401)return;
    if(++tickFails>=3){tickFails=0;msg(t('slow'))}
  }
}
/* etichetta blu del prezzo con il conto alla rovescia della candela */
function tagText(){
  const last=lastBars[lastBars.length-1];if(!last)return;
  let s=Math.max(0,Math.floor((last.t+SECS[res]*1000-Date.now())/1000));
  const hh=Math.floor(s/3600),mm=Math.floor(s%3600/60),ss=s%60,p=n=>String(n).padStart(2,'0');
  $('tagpx').textContent=fmt(last.c,dec);
  $('tagcd').textContent=(hh?p(hh)+':':'')+p(mm)+':'+p(ss);
}
setInterval(()=>{if(tab==='ch'&&!document.hidden)tagText()},1000);
function tagLoop(){
  requestAnimationFrame(tagLoop);
  const tg=$('pxtag');
  if(tab!=='ch'||!lastBars.length||document.hidden){tg.hidden=true;return}
  const y=series.priceToCoordinate(lastBars[lastBars.length-1].c);
  if(y==null||y<0){tg.hidden=true;return}
  tg.hidden=false;
  tg.style.top=y+'px';
  tg.style.minWidth=chart.priceScale('right').width()+'px';
}
$('lgbtn').onclick=()=>{$('lgohlc').hidden=!$('lgohlc').hidden;$('lgbtn').classList.toggle('open',!$('lgohlc').hidden)};

/* scorri in su o in giu' sulla pillola per cambiare simbolo */
(function(){
  let y0=null,moved=false;
  const p=$('sympill');
  p.addEventListener('touchstart',e=>{y0=e.touches[0].clientY;moved=false},{passive:true});
  p.addEventListener('touchend',e=>{
    if(y0==null)return;
    const dy=e.changedTouches[0].clientY-y0;y0=null;
    if(Math.abs(dy)<28)return;
    moved=true;
    const i=WATCH.indexOf(cur),j=i+(dy<0?1:-1);
    if(j>=0&&j<WATCH.length)setCur(WATCH[j]);
  });
  p.addEventListener('click',()=>{if(moved){moved=false;return}openTF()});
})();

/* ---------- schede in basso ---------- */
function showTab(x){
  tab=x;
  $('wl-screen').hidden=x!=='wl';
  $('ch-screen').hidden=x!=='ch';
  $('mini').hidden=x!=='wl';
  document.querySelectorAll('.tab').forEach(b=>b.classList.toggle('on',b.dataset.t===x));
  if(x==='wl')refreshWL(false);
  if(x==='ch'){tagText();if(series&&lastBars.length)tick()}
}
document.querySelectorAll('.tab').forEach(b=>b.onclick=()=>showTab(b.dataset.t));
$('mini').onclick=()=>showTab('ch');

/* ---------- fogli dal basso ---------- */
function openSheet(build){
  const s=$('sheet');
  s.innerHTML='<div class="sh-h"></div>';
  build(s);
  $('sheetbg').hidden=false;s.hidden=false;s.scrollTop=0;
}
function closeSheet(){$('sheet').hidden=true;$('sheetbg').hidden=true}
$('sheetbg').onclick=closeSheet;
function shEl(s,cls,txt){const d=document.createElement('div');d.className=cls;d.textContent=txt;s.appendChild(d);return d}
function shItem(s,txt,o={}){
  const b=document.createElement('button');b.className='sh-i'+(o.danger?' danger':'')+(o.dis?' dis':'');
  if(o.left)b.appendChild(o.left);
  const sp=document.createElement('span');sp.textContent=txt;b.appendChild(sp);
  if(o.check){const k=document.createElement('span');k.className='ck';k.textContent='✓';b.appendChild(k)}
  if(o.right)b.appendChild(o.right);
  if(o.on)b.onclick=o.on;
  s.appendChild(b);return b;
}
function openMenu(){
  openSheet(s=>{
    shEl(s,'sh-l',t('theme'));
    const th=document.documentElement.dataset.theme||'dark';
    [['dark',t('dark')],['light',t('light')]].forEach(([k,txt])=>shItem(s,txt,{check:k===th,on:()=>{setTheme(k);openMenu()}}));
    shEl(s,'sh-l',t('language'));
    Object.keys(FLAGS).forEach(k=>{
      const f=document.createElement('span');f.className='fl2';f.textContent=FLAGS[k];
      shItem(s,NAMES[k],{left:f,check:k===lang,on:()=>{lang=k;try{localStorage.setItem('lang',k)}catch(e){}applyLang();openMenu()}});
    });
    shEl(s,'sh-sep','');
    if(fidOK())shItem(s,t('fidsave'),{on:()=>{doSaveFid(tx=>{if(tx)msg(tx)});closeSheet()}});
    shItem(s,t('refresh'),{on:async()=>{closeSheet();await doRefresh()}});
    shItem(s,t('reset'),{on:()=>{closeSheet();resetApp()}});
    shItem(s,t('logout'),{danger:true,on:logout});
  });
}
function openTF(){
  openSheet(s=>{
    shEl(s,'sh-l',t('tf'));
    const ch=document.createElement('div');ch.className='chips';
    Object.keys(SECS).forEach(k=>{
      const b=document.createElement('button');b.className='chip'+(k===res?' on':'');b.textContent=k;
      b.onclick=()=>{setRes(k);closeSheet()};ch.appendChild(b);
    });
    s.appendChild(ch);
    shEl(s,'sh-l',t('symbols'));
    WATCH.forEach(n=>{const it=BYN[n];if(it)shItem(s,n,{left:iconEl(it,30),check:n===cur,on:()=>{setCur(n);closeSheet()}})});
  });
}
function openSearch(){
  openSheet(s=>{
    shEl(s,'sh-t',t('search'));
    const q=document.createElement('input');q.id='q';q.type='search';q.placeholder=t('searchph');q.autocomplete='off';
    q.setAttribute('autocapitalize','characters');
    s.appendChild(q);
    const list=document.createElement('div');s.appendChild(list);
    const draw=()=>{
      list.innerHTML='';
      const k=norm(q.value);
      let res2=k?INST.filter(x=>norm(x.name).includes(k)||norm(x.desc).includes(k)):WATCH.map(n=>BYN[n]).filter(Boolean).concat(INST.filter(x=>!WATCH.includes(x.name)));
      res2=res2.slice(0,80);
      if(!res2.length){shEl(list,'sh-note',t('noresult'));return}
      res2.forEach(it=>{
        const add=document.createElement('button');add.className='addb'+(WATCH.includes(it.name)?' on':'');
        add.textContent=WATCH.includes(it.name)?'✓':'+';
        add.setAttribute('aria-label',it.name);
        add.onclick=e=>{
          e.stopPropagation();
          const i=WATCH.indexOf(it.name);
          if(i>=0){if(WATCH.length>1)WATCH.splice(i,1)}else{WATCH.push(it.name);quoteFor(it.name).then(renderWL).catch(()=>{})}
          saveWatch();renderWL();renderSymPill();
          add.className='addb'+(WATCH.includes(it.name)?' on':'');add.textContent=WATCH.includes(it.name)?'✓':'+';
        };
        const b=shItem(list,it.name,{left:iconEl(it,34),right:add,on:()=>{setCur(it.name);closeSheet();showTab('ch')}});
        const d=info(it).desc;if(d){const sm=document.createElement('small');sm.style.cssText='color:var(--muted);margin-left:6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;flex:1';sm.textContent=d;b.insertBefore(sm,add)}
      });
    };
    q.oninput=draw;draw();
  });
}
function openSoon(title,keys){
  openSheet(s=>{
    shEl(s,'sh-t',title);
    keys.forEach(k=>shItem(s,t(k),{dis:true}));
    shEl(s,'sh-note',t('soon'));
  });
}
$('menubtn').onclick=openMenu;
$('more').onclick=openMenu;
$('pencil').onclick=()=>openSoon(t('tools'),['tl_trend','tl_h','tl_rect','tl_fib','tl_text']);
$('inds').onclick=()=>openSoon(t('inds'),['in_ma','in_rsi','in_macd','in_bb','in_mine']);

/* ---------- avvio dell'app dopo l'accesso ---------- */
function start(){
  if(!window.LightweightCharts){
    let n=0;
    const w=setInterval(()=>{if(window.LightweightCharts){clearInterval(w);start()}else if(++n>100){clearInterval(w);msg(t('nolib'))}},100);
    return;
  }
  if(!chart){
    try{chart=LightweightCharts.createChart($('chart'),{autoSize:true,...chartOpts()})}
    catch(e){
      chartSolid=true;$('chart').innerHTML='';
      chart=LightweightCharts.createChart($('chart'),{autoSize:true,...chartOpts()});
    }
    const UP=themeVar('--up'),DN=themeVar('--down');
    series=chart.addCandlestickSeries({upColor:UP,downColor:DN,borderVisible:false,wickUpColor:UP,wickDownColor:DN,
      lastValueVisible:false,priceLineVisible:true,priceLineStyle:1,priceLineWidth:1,priceLineColor:themeVar('--blue'),
      priceFormat:{type:'price',precision:dec,minMove:Math.pow(10,-dec)}});
    setInterval(()=>{if(tab==='ch')tick()},3000);
    requestAnimationFrame(tagLoop);
  }
  $('top').hidden=true;$('login').hidden=true;$('brand').hidden=true;
  document.body.classList.add('inapp');
  $('shell').hidden=false;
  msg('');
  renderAll();
  showTab(tab||'wl');
  loadSafe();
  quoteFor(cur).then(()=>{renderLegend();renderMini();tint()}).catch(()=>{});
  refreshWL(true);
}
function renderAll(){
  $('tabwl').textContent=t('wl');
  $('tabch').textContent=t('ch');
  if(!BYN[cur])return;
  renderWL();renderLegend();renderSymPill();renderMini();tagText();
  if(chart)chart.applyOptions({localization:{priceFormatter:p=>fmt(p,dec)}});
}

/* ---------- accesso: collegamento, rinnovo automatico, Face ID ---------- */
let sess=null;          /* email, password e server: solo in memoria, finche' l'app e' aperta */
let relogging=null;

async function connect(c){
  const j=await api('/auth/jwt/token',{method:'POST',body:JSON.stringify({email:c.email,password:c.password,server:c.server})});
  tok=j.accessToken;
  const a=await api('/auth/jwt/all-accounts',{headers:{Authorization:'Bearer '+tok}});
  const acc=(a.accounts||a)[0];
  accId=acc.id;accNum=acc.accNum;
  msg(t('finding'));
  await loadInstruments();
  sess=c;
}
/* se il token e' scaduto (401) l'app si ricollega da sola e riprova */
function relogin(){
  if(!relogging){
    relogging=(async()=>{msg(t('relogin'));await connect(sess);msg('')})().finally(()=>{relogging=null});
  }
  return relogging;
}
async function authed(path){
  try{return await api(path,{headers:auth()})}
  catch(e){
    if(e.status===401&&sess){await relogin();return await api(path,{headers:auth()})}
    if(e.status===401&&!sess)sessionLost();
    throw e;
  }
}
/* quando torni sull'app dopo un po', aggiorna subito i dati */
let hid2=0;
document.addEventListener('visibilitychange',()=>{
  if(document.hidden){hid2=Date.now();return}
  if(!series)return;
  if(Date.now()-hid2>120000)loadSafe();else tick();
});

/* ---------- Face ID: le credenziali restano cifrate solo su questo telefono ---------- */
const CRED_KEY='tc_cred';
const b64=u=>btoa(String.fromCharCode(...new Uint8Array(u)));
const unb64=s=>Uint8Array.from(atob(s),c=>c.charCodeAt(0));
const rnd=n=>crypto.getRandomValues(new Uint8Array(n));
const fidOK=()=>!!(window.PublicKeyCredential&&navigator.credentials&&window.crypto&&crypto.subtle);
const hasSaved=()=>{try{return !!localStorage.getItem(CRED_KEY)}catch(e){return false}};

async function aesFromPrf(out){
  const base=await crypto.subtle.importKey('raw',out,'HKDF',false,['deriveKey']);
  return crypto.subtle.deriveKey({name:'HKDF',hash:'SHA-256',salt:new Uint8Array(32),info:new TextEncoder().encode('trading-charts-v1')},base,{name:'AES-GCM',length:256},false,['encrypt','decrypt']);
}
function idb(){return new Promise((res,rej)=>{const r=indexedDB.open('tc',1);r.onupgradeneeded=()=>r.result.createObjectStore('k');r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)})}
async function idbGet(k){const d=await idb();return new Promise((res,rej)=>{const q=d.transaction('k').objectStore('k').get(k);q.onsuccess=()=>res(q.result);q.onerror=()=>rej(q.error)})}
async function idbSet(k,v){const d=await idb();return new Promise((res,rej)=>{const x=d.transaction('k','readwrite');x.objectStore('k').put(v,k);x.oncomplete=()=>res();x.onerror=()=>rej(x.error)})}
async function idbDel(k){const d=await idb();return new Promise((res,rej)=>{const x=d.transaction('k','readwrite');x.objectStore('k').delete(k);x.oncomplete=()=>res();x.onerror=()=>rej(x.error)})}

/* SALVA: un solo Face ID, crea la passkey. Niente IndexedDB (sulle app della Home a volte resta bloccato).
   Email e password vengono cifrate e restano solo su questo iPhone. */
async function saveCreds(){
  const c=sess;if(!c)throw new Error('no session');
  const cred=await navigator.credentials.create({publicKey:{
    rp:{name:'Trading Charts',id:location.hostname},
    user:{id:rnd(16),name:'Trading Charts',displayName:'Trading Charts'},
    challenge:rnd(32),
    pubKeyCredParams:[{type:'public-key',alg:-7},{type:'public-key',alg:-257}],
    authenticatorSelection:{authenticatorAttachment:'platform',residentKey:'required',requireResidentKey:true,userVerification:'required'},
    timeout:60000,attestation:'none',
    extensions:{prf:{}}
  }});
  if(!cred||!cred.rawId)throw new Error('passkey');
  const raw=rnd(32);
  const key=await crypto.subtle.importKey('raw',raw,'AES-GCM',false,['encrypt','decrypt']);
  const iv=rnd(12);
  const ct=await crypto.subtle.encrypt({name:'AES-GCM',iv},key,new TextEncoder().encode(JSON.stringify(c)));
  localStorage.setItem(CRED_KEY,JSON.stringify({v:3,mode:'raw',id:b64(new Uint8Array(cred.rawId)),salt:b64(rnd(32)),k:b64(raw),iv:b64(iv),ct:b64(ct)}));
  return 'raw';
}
/* ENTRA: un solo Face ID. Se iPhone da' anche la chiave legata al Face ID,
   da quel momento i dati vengono ricifrati con quella e si aprono solo col tuo viso. */
async function unlock(){
  const rec=JSON.parse(localStorage.getItem(CRED_KEY));
  if(!rec||rec.mode==='gate'){try{localStorage.removeItem(CRED_KEY)}catch(e){}refreshFid();throw new Error(t('resave'))}
  const pk={challenge:rnd(32),rpId:location.hostname,allowCredentials:[{type:'public-key',id:unb64(rec.id)}],userVerification:'required',timeout:60000};
  if(rec.salt)pk.extensions={prf:{eval:{first:unb64(rec.salt)}}};
  const a=await navigator.credentials.get({publicKey:pk});
  let out=null;
  try{const ex=a.getClientExtensionResults();out=ex.prf&&ex.prf.results&&ex.prf.results.first}catch(e){}
  let key;
  if(rec.mode==='prf'){if(!out)throw new Error('prf');key=await aesFromPrf(out)}
  else key=await crypto.subtle.importKey('raw',unb64(rec.k),'AES-GCM',false,['encrypt','decrypt']);
  const pt=await crypto.subtle.decrypt({name:'AES-GCM',iv:unb64(rec.iv)},key,unb64(rec.ct));
  const c=JSON.parse(new TextDecoder().decode(pt));
  if(rec.mode==='raw'&&out){
    try{
      const k2=await aesFromPrf(out),iv=rnd(12);
      const ct=await crypto.subtle.encrypt({name:'AES-GCM',iv},k2,new TextEncoder().encode(JSON.stringify(c)));
      localStorage.setItem(CRED_KEY,JSON.stringify({v:3,mode:'prf',id:rec.id,salt:rec.salt,iv:b64(iv),ct:b64(ct)}));
    }catch(e){}
  }
  return c;
}

/* RIPRISTINA: cancella tutto quello che l'app ha salvato su questo iPhone e riparte pulita */
function resetApp(){
  if(!confirm(t('resetq')))return;
  try{localStorage.clear()}catch(e){}
  try{sessionStorage.clear()}catch(e){}
  try{indexedDB.deleteDatabase('tc')}catch(e){}
  try{sessionStorage.setItem('noSplash','1')}catch(e){}
  location.reload();
}

function refreshFid(){
  const has=hasSaved();
  $('fid').hidden=!(has&&fidOK());
  $('forget').hidden=!has;
  $('fidtxt').textContent=t('faceid');
  $('forget').textContent=t('forget');
  $('reset').textContent=t('reset');
}
function offerSave(){
  let no=false;try{no=sessionStorage.getItem('noOffer')==='1'}catch(e){}
  if(!fidOK()||hasSaved()||no)return;
  $('bartxt').textContent=t('save');
  $('barsave').textContent=t('savebtn');
  $('barno').textContent=t('later');
  $('bar').hidden=false;
}
async function faceLogin(auto){
  let c;
  try{c=await unlock()}
  catch(e){
    /* auto: se il browser vuole un tocco o annulli, resta il pulsante, senza messaggi */
    if(!auto||(e&&e.name!=='NotAllowedError'))msg(t('fidfail')+' '+t('fidhint'));
    return;
  }
  try{
    msg(t('logging'));
    await connect(c);
    start();
  }catch(e){
    msg(errText(e));
  }
}
/* salva con Face ID: dice sempre cosa sta succedendo, e se iPhone non risponde lo segnala */
let fidBusy=false;
function doSaveFid(show){
  if(fidBusy)return;
  fidBusy=true;
  show(t('waitfid'));
  const tm=setTimeout(()=>{if(fidBusy){fidBusy=false;show(t('nofidresp'))}},25000);
  saveCreds().then(()=>{
    clearTimeout(tm);fidBusy=false;
    $('bar').hidden=true;show('');msg(t('saved'));refreshFid();
  }).catch(e=>{
    clearTimeout(tm);fidBusy=false;
    show(t('nofid')+(e&&e.name?' ('+e.name+(e.message?': '+e.message:'')+')':'')+' '+t('fidset'));
  });
}
$('barsave').onclick=()=>doSaveFid(tx=>{$('bartxt').textContent=tx||t('save')});
$('barno').onclick=()=>{$('bar').hidden=true;try{sessionStorage.setItem('noOffer','1')}catch(e){}};
$('forget').onclick=async()=>{
  try{localStorage.removeItem(CRED_KEY)}catch(e){}
  refreshFid();msg(t('forgot'));
};
$('fid').onclick=()=>faceLogin(false);
$('reset').onclick=resetApp;

$('lform').onsubmit=async ev=>{
  ev.preventDefault();
  const c={email:$('email').value.trim(),password:$('pass').value,server:$('server').value.trim()};
  if(!c.email||!c.password||!c.server)return;
  try{
    msg(t('logging'));
    await connect(c);
    try{localStorage.setItem('tc_server',c.server)}catch(e){}
    setTimeout(()=>{$('pass').value=''},1500);
    start();
    offerSave();
  }catch(e){
    msg(errText(e));
  }
};

refreshFid();
/* il server non e' un dato segreto: l'app lo ricorda */
try{const sv=localStorage.getItem('tc_server');if(sv&&!$('server').value)$('server').value=sv}catch(e){}
/* all'apertura, se c'e' un accesso salvato, chiede il Face ID appena finisce l'animazione */
(function(){
  const snap=takeSnap();
  if(snap&&snap.tok){
    tok=snap.tok;accNum=snap.accNum;accId=snap.accId;res=snap.res||res;cur=snap.cur||null;tab=snap.tab||'wl';
    try{sessionStorage.removeItem('noAuto')}catch(e){}
    loadInstruments().then(start).catch(e=>{if(e&&e.status===401)sessionLost();else msg(e.message)});
    return;
  }
  let na=false;try{na=sessionStorage.getItem('noAuto')==='1';sessionStorage.removeItem('noAuto')}catch(e){}
  if(na||!hasSaved()||!fidOK())return;
  let n=0;
  const w=setInterval(()=>{
    n++;
    if(!document.getElementById('splash')||n>200){
      clearInterval(w);
      if(n<=200)faceLogin(true);
    }
  },100);
})();


/* ---------- tema ed esci ---------- */
function setTheme(th){
  document.documentElement.dataset.theme=th;
  try{localStorage.setItem('theme',th)}catch(e){}
  const m=document.querySelector('meta[name="theme-color"]');if(m)m.content=themeVar('--bg');
  if(chart){try{chart.applyOptions(chartOpts())}catch(e){}}
  tint();
  drawSpark();
}
/* esci: torna al login. L'accesso salvato con Face ID resta, si rientra col pulsante */
function logout(){
  try{sessionStorage.setItem('noSplash','1');sessionStorage.setItem('noAuto','1')}catch(e){}
  location.reload();
}

/* ---------- ripresa dopo un aggiornamento ----------
   Salva solo il token temporaneo (non email ne' password) per il tempo del ricaricamento. */
function saveSnap(){
  try{sessionStorage.setItem('tc_snap',JSON.stringify({tok,accNum,accId,res,cur,tab}))}catch(e){}
}
function takeSnap(){
  try{const s=JSON.parse(sessionStorage.getItem('tc_snap'));sessionStorage.removeItem('tc_snap');return s}catch(e){return null}
}
function sessionLost(){
  try{sessionStorage.setItem('noSplash','1')}catch(e){}
  location.reload();
}

/* testo dell'errore: blocco di rete oppure la causa precisa */
function errText(e){
  const m=(e&&e.message)||String(e);
  if(e instanceof TypeError&&/fetch|load failed|network/i.test(m))return t('cors');
  return m;
}

/* carica il grafico; se la rete o il broker fanno i capricci riprova da solo */
async function loadSafe(n=0){
  try{await load()}
  catch(e){
    if(e&&e.status===401)return;
    const net=e instanceof TypeError||(e&&(e.status===429||e.status>=500));
    if(net&&n<6){setTimeout(()=>loadSafe(n+1),Math.min(10000,800*(n+1)));return}
    msg(net?t('slow'):errText(e));
  }
}
