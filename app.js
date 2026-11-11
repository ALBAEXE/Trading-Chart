const VERSION='0.23.1';
/* tema salvato sul telefono: scuro (predefinito) o bianco */
try{document.documentElement.dataset.theme=localStorage.getItem('theme')==='light'?'light':'dark'}catch(e){document.documentElement.dataset.theme='dark'}

/* Logo ritagliato dall'ultimo fotogramma del video: si sovrappone al logo del video e poi scivola in cima alla pagina di login. */
const LOGO_SRC='data:image/png;base64,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';
const LG={x:240,y:515,s:240};
const HOLD_MS=1100;     /* quanto resta fermo il logo al centro (dall'apertura) */
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
/* barre in basso: piu' vicine al bordo, piu' sottili, larghe quasi tutto lo schermo */
:root{--tbb:max(8px,calc(env(safe-area-inset-bottom) - 14px));--tbh:56px;--rowh:50px;--gapb:8px;--side:10px;--vfix:0px}
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
#msg{min-height:22px;margin-bottom:34px!important;font-size:13px;color:var(--muted);word-break:break-word;margin:6px 0}
#fid{display:flex;align-items:center;justify-content:center;gap:10px;background:var(--surf);border:1px solid var(--gold);color:var(--goldfg);margin-bottom:10px}
#fid svg{width:22px;height:22px;display:block}
#lform{margin:0}
#forget,#reset{background:transparent;border:0;color:var(--muted);font-weight:400;font-size:13px;text-decoration:underline;margin:2px 0;padding:8px}
#reset{color:var(--faint)}
.lnk{background:transparent;border:0;color:var(--muted);font-weight:400;font-size:13px;text-decoration:underline;margin:2px 0;padding:8px}
#fopen{color:#4d84ff;font-weight:600;font-size:14px;text-decoration:none;margin-top:6px}
#fgo{background:var(--blue);color:#fff}
#fform{margin:0}
#fcode{text-align:center;font-size:22px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;padding:13px}
#fcode::placeholder{font-size:16px;font-weight:400;letter-spacing:0;text-transform:none}
#flost{color:var(--goldfg)}
.sh-i .bnd{margin-left:auto;font-size:12px;color:var(--muted);white-space:nowrap}
.sh-i .bnd.on{color:var(--up)}
.sh-i .bnd+.addb{margin-left:10px}
.fcodebox{margin:6px 18px 4px;padding:14px 10px 6px;border-radius:18px;background:var(--glasssel);text-align:center}
.fcodebig{font-size:30px;font-weight:800;letter-spacing:.16em;font-variant-numeric:tabular-nums;color:var(--goldfg);user-select:all;-webkit-user-select:all}
/* login 0.19: logo grande, tutto piu' in basso, campi compatti */
body:not(.inapp) #login,body:not(.inapp) #msg{max-width:340px;margin-left:auto;margin-right:auto}
#brand{flex-direction:column;align-items:center;margin:clamp(10px,6vh,60px) 0 clamp(14px,4vh,34px)}
#brandimg{width:150px;height:150px}
#brandname{margin-top:2px;font-size:27px;font-weight:800;letter-spacing:-.02em;opacity:0;transform:translateY(6px);transition:opacity .6s ease .1s,transform .6s ease .1s}
#brand.show #brandname{opacity:1;transform:none}
#login input{height:44px;padding:0 14px;margin:4px 0;border-radius:12px;font-size:15px;background:var(--surf);border:1px solid var(--line)}
#login input:focus{outline:none;border-color:var(--goldfg)}
#login button{height:46px;border-radius:13px;margin:6px 0;font-size:15.5px}
#fid{height:46px;border-radius:13px;margin:0 0 10px}
#go{margin-top:8px}
#lor{display:flex;align-items:center;gap:12px;margin:14px 2px 6px;color:var(--muted);font-size:12.5px;text-transform:uppercase;letter-spacing:.08em}
#lor::before,#lor::after{content:'';flex:1;height:1px;background:var(--line)}
#lor[hidden]{display:none}
#fopen{display:flex;align-items:center;justify-content:center;gap:9px;background:var(--blue);color:#fff;font-weight:600;text-decoration:none;font-size:15.5px}
#fopen[hidden]{display:none}
#fopen svg{width:20px;height:20px}
#fhead{text-align:center;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin:2px 0 8px}
#login #fcode{height:56px;font-size:22px;font-weight:700;letter-spacing:.16em;text-align:center}
#login #fcode::placeholder{font-size:20px;letter-spacing:.16em;color:var(--faint);text-transform:none}
#fgo{background:var(--blue);color:#fff}
#login .lnk{height:auto;margin:2px 0;padding:9px}
body:not(.inapp) #root{display:flex;flex-direction:column;min-height:calc(100dvh - 24px - env(safe-area-inset-top) - env(safe-area-inset-bottom))}
body.inapp #reset{display:none}
html.sa,html.sa body{touch-action:pan-x pan-y}
html.sa #chartbox{touch-action:none}
body:not(.inapp) #ver{position:static;text-align:center;margin-top:10px}
#reset{position:relative;align-self:center;margin:auto auto 0!important;flex:0 0 auto;width:auto;height:auto!important;padding:9px 16px!important;display:flex;align-items:center;gap:7px;overflow:hidden;border-radius:999px!important;background:rgba(255,69,58,.08);border:1px solid rgba(255,69,58,.35);color:var(--danger);font-size:13px!important;font-weight:600;text-decoration:none;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;touch-action:none}
#reset svg{width:15px;height:15px;position:relative}
#rstx{position:relative}
#rsfill{position:absolute;left:0;top:0;bottom:0;width:0;background:rgba(255,69,58,.28)}
#reset.hold #rsfill{width:100%;transition:width 1.3s linear}
#gdbtn{margin:0 auto 0 0;width:auto;height:38px;padding:0 13px 0 10px;display:flex;align-items:center;gap:7px;border-radius:10px;background:var(--surf);color:var(--fg);border:1px solid var(--line);font-size:14px;font-weight:600}
#gdbtn svg{width:19px;height:19px;color:var(--goldfg)}
#gdbtn[hidden]{display:none}
#sheet.guide{padding-bottom:calc(env(safe-area-inset-bottom) + 14px)}
.gdhead{display:flex;flex-direction:column;align-items:center;text-align:center;padding:4px 22px 6px}
.gdhead img{width:64px;height:64px;filter:var(--logo);margin-bottom:4px}
.gdt{font-size:21px;font-weight:800;letter-spacing:-.01em}
.gdi{font-size:14px;color:var(--muted);line-height:1.45;margin-top:6px}
.gdseg{margin:10px 18px 4px;background:var(--glasssel);border-radius:14px}
.gdsteps{list-style:none;counter-reset:gd;margin:8px 0 0;padding:0 18px}
.gdsteps li{counter-increment:gd;display:flex;gap:12px;align-items:flex-start;padding:11px 0;border-bottom:1px solid var(--sep);font-size:15px;line-height:1.45}
.gdsteps li:last-child{border-bottom:0}
.gdsteps li::before{content:counter(gd);flex:0 0 26px;height:26px;border-radius:50%;background:var(--gold);color:var(--ongold);font-weight:800;font-size:14px;display:flex;align-items:center;justify-content:center;margin-top:-1px}
.gdsteps b{font-weight:700}
.gdic{display:inline-flex;vertical-align:-5px;width:24px;height:24px;margin:0 2px;border-radius:7px;background:var(--glasssel);align-items:center;justify-content:center;color:#3d82ff}
.gdic svg{width:16px;height:16px}
.gdtip{margin:8px 18px 4px;padding:12px 14px;border-radius:14px;background:rgba(41,98,255,.12);color:var(--fg);font-size:13.5px;line-height:1.45}
.gdok{display:block;width:calc(100% - 36px);margin:12px 18px 0;height:46px;border-radius:13px;background:var(--blue);color:#fff;font-size:15.5px}
#ver{position:fixed;left:14px;bottom:calc(6px + env(safe-area-inset-bottom));font-size:11px;color:var(--faint)}
body.inapp #ver{display:none}
body.inapp #msg{pointer-events:none;position:fixed;left:16px;right:16px;top:calc(env(safe-area-inset-top) + 8px);z-index:70;margin:0;min-height:0;padding:10px 14px;border-radius:14px;color:var(--fg);font-size:14px;background:var(--glass2);-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);border:1px solid var(--glassline)}
body.inapp #msg:empty{display:none}

/* vetro */
.glass{background:var(--glass);-webkit-backdrop-filter:blur(22px) saturate(180%);backdrop-filter:blur(22px) saturate(180%);border:1px solid var(--glassline);box-shadow:inset 0 1px 0 var(--glasshi),0 10px 30px var(--shadow)}

/* app */
#shell{position:fixed;inset:0}
/* iPhone disegna l'app solo fino alla fascia nera in basso: le barre scendono fino al fondo della parte visibile */
html.vgap{--tbb:8px}
#draw{position:absolute;left:0;top:0;z-index:2;pointer-events:none;touch-action:none}
#dban,#dedit{position:absolute;left:var(--side);right:var(--side);top:calc(env(safe-area-inset-top) + 6px);min-height:48px;border-radius:24px;display:flex;align-items:center;gap:6px;padding:0 6px 0 16px;z-index:9;color:var(--fg);font-size:14px}
#dbantxt{flex:1;min-width:0}
#dban button{width:auto;margin:0;padding:8px 14px;border-radius:18px;font-size:14px}
#rpfade{position:absolute;top:0;z-index:2;pointer-events:none;background:var(--bg);opacity:.62}
#rpline{position:absolute;top:0;width:0;z-index:2;pointer-events:none;border-left:1.5px dashed var(--blue)}
#rpline::after{content:'';position:absolute;left:-6px;bottom:-1px;width:10px;height:10px;border-radius:50%;background:var(--blue)}
#rpdate{position:absolute;bottom:14px;left:0;transform:translateX(-50%);background:var(--blue);color:#fff;font-size:12px;font-weight:600;padding:4px 9px;border-radius:9px;white-space:nowrap;font-variant-numeric:tabular-nums}
#dbcancel{background:var(--glasssel);color:var(--fg)}
#dedit{justify-content:flex-end;padding:0 6px}
.dbtn{width:auto;min-width:42px;height:38px;margin:0;padding:0 12px;border-radius:19px;background:var(--glasssel);color:var(--fg);display:flex;align-items:center;justify-content:center;font-size:14px}
.dbtn svg{width:20px;height:20px;display:block}
.dbtn.danger{color:var(--danger)}
.dbtn.on{background:var(--gold);color:var(--ongold)}
.dbtn .dot{width:20px;height:20px;border-radius:50%;display:block;box-shadow:0 0 0 2px var(--glassline)}
#rpbar{position:absolute;left:var(--side);right:var(--side);bottom:calc(var(--tbb) + var(--tbh) + var(--gapb));height:var(--rowh);border-radius:25px;display:flex;align-items:center;justify-content:space-around;padding:0 6px;z-index:6}
#rpbar button{width:44px;height:42px;margin:0;padding:0;background:transparent;border:0;color:var(--fg);display:flex;align-items:center;justify-content:center;border-radius:21px}
#rpbar button:disabled{opacity:.35}
#rpbar svg{width:24px;height:24px;display:block}
#rpbar #rpspeed{width:auto;padding:0 14px;background:var(--glasssel);font-weight:700}
.tgrid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;padding:6px 18px}
.tile{display:flex;flex-direction:column;align-items:center;gap:8px;width:100%;margin:0;padding:16px 4px 12px;border-radius:16px;background:var(--glasssel);color:var(--fg);border:0;font-weight:500;font-size:13px;text-align:center}
.tile svg{width:30px;height:30px;display:block}
#dtxt{display:block;margin:4px 18px 6px;width:calc(100% - 36px);min-height:84px;font:inherit;padding:10px;border-radius:12px;border:1px solid var(--line);background:var(--surf);color:var(--fg);resize:none}
.screen{position:absolute;inset:0}
#wl-screen{overflow-y:auto;-webkit-overflow-scrolling:touch;padding:calc(env(safe-area-inset-top) + 8px) 0 calc(var(--tbb) + var(--tbh) + var(--gapb) + var(--rowh) + 24px)}
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

#mini{width:auto;position:absolute;left:var(--side);right:var(--side);bottom:calc(var(--tbb) + var(--tbh) + var(--gapb));height:var(--rowh);border-radius:25px;display:flex;align-items:center;gap:12px;margin:0;padding:0 18px 0 8px;z-index:30;color:var(--fg);text-align:left;font-weight:400}
#mntxt{flex:1;min-width:0}
#mna{font-size:15px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-variant-numeric:tabular-nums}
#mnb{font-size:13px;font-variant-numeric:tabular-nums}
#mnsp{width:64px;height:26px;display:block}

#tabbar{position:absolute;left:var(--side);right:var(--side);bottom:var(--tbb);height:var(--tbh);border-radius:28px;display:flex;gap:4px;padding:4px;z-index:31}
.tab{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;margin:0;padding:0;background:transparent;border:0;border-radius:24px;color:var(--fg);font-size:11px;font-weight:600;transition:background-color .2s ease}
.tab svg{width:22px;height:22px;display:block}
.tab.on{background:var(--glasssel)}
@keyframes tbPf{0%{transform:rotate(0) scale(1)}35%{transform:rotate(-200deg) scale(.78)}70%{transform:rotate(-390deg) scale(1.18)}100%{transform:rotate(-360deg) scale(1)}}
.tab[data-t=pf].anim .tabimg{animation:tbPf .75s cubic-bezier(.3,.7,.3,1)}
@keyframes tbWlBox{0%{transform:translateY(0)}30%{transform:translateY(2.5px) scaleY(.92)}65%{transform:translateY(-2px)}100%{transform:none}}
@keyframes tbWlLine{from{stroke-dashoffset:1}to{stroke-dashoffset:0}}
.tab[data-t=wl] svg path{stroke-dasharray:1 0}
.tab[data-t=wl].anim svg rect{transform-box:fill-box;transform-origin:50% 100%;animation:tbWlBox .5s ease}
.tab[data-t=wl].anim svg path{stroke-dasharray:1 1;animation:tbWlLine .6s .08s ease-out both}
@keyframes tbChA{0%{transform:scaleY(1)}30%{transform:scaleY(.35)}65%{transform:scaleY(1.3)}100%{transform:scaleY(1)}}
@keyframes tbChW{0%,100%{opacity:1}30%{opacity:.15}}
.tab[data-t=ch].anim svg rect{transform-box:fill-box;transform-origin:50% 50%;animation:tbChA .55s cubic-bezier(.3,.7,.4,1.4)}
.tab[data-t=ch].anim svg rect+rect{animation-delay:.12s}
.tab[data-t=ch].anim svg path{animation:tbChW .55s ease}
.tab .tabimg{width:26px;height:26px;margin:-2px 0;display:block;filter:var(--logo)}
#pf-screen{overflow-y:auto;-webkit-overflow-scrolling:touch;padding:calc(env(safe-area-inset-top) + 8px) 16px calc(var(--tbb) + var(--tbh) + var(--gapb) + 28px);color:var(--fg)}
.pfhead{display:flex;flex-direction:column;align-items:center;gap:4px;padding:18px 0 14px;text-align:center}
.pfhead img{width:88px;height:88px;display:block;filter:var(--logo);margin-bottom:4px}
.pfname{font-size:24px;font-weight:800;letter-spacing:-.02em}
.pfsub{font-size:13px;color:var(--muted)}
.pfl{padding:18px 6px 7px;font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);font-weight:600}
.pfg{background:var(--surf);border-radius:18px;overflow:hidden;margin-top:6px}
.pfl+.pfg{margin-top:0}
.pfrow{display:flex;align-items:center;gap:13px;width:100%;margin:0;padding:12px 16px;background:transparent;border:0;border-radius:0;color:var(--fg);font-weight:400;font-size:16px;text-align:left}
.pfrow+.pfrow{border-top:1px solid var(--line)}
.pfrow .pfic{flex:0 0 32px;width:32px;height:32px;border-radius:9px;background:var(--glasssel);display:flex;align-items:center;justify-content:center;color:var(--goldfg)}
.pfrow .pfic svg{width:19px;height:19px}
.pfrow .pftx{display:flex;flex-direction:column;gap:2px;min-width:0}
.pfrow .pftx small{font-size:12.5px;color:var(--muted)}
.pfrow .ck{margin-left:auto;color:var(--goldfg);font-weight:700}
.pfrow .fl2{font-size:22px;line-height:1;flex:0 0 32px;text-align:center}
.pfrow.danger{color:var(--danger);justify-content:center;font-weight:600}
.pfrow.danger .pfic{background:transparent;color:var(--danger);flex-basis:auto;width:auto}
.pfrow.chev::after{content:'';margin-left:auto;width:8px;height:8px;border-right:2px solid var(--muted);border-top:2px solid var(--muted);transform:rotate(45deg);flex:0 0 8px;opacity:.7}
.pfbar{position:relative;display:flex;align-items:center;justify-content:center;min-height:44px;margin:4px 0 6px}
.pfback{position:absolute;left:-6px;top:50%;transform:translateY(-50%);width:auto;display:flex;align-items:center;gap:2px;margin:0;padding:6px 8px;background:transparent;border:0;color:var(--goldfg);font-weight:500;font-size:16px}
.pfback svg{width:22px;height:22px}
.pftitle{font-weight:700;font-size:18px}
@keyframes pfIn{from{opacity:0;transform:translateX(36px)}to{opacity:1;transform:none}}
@keyframes pfOut{from{opacity:0;transform:translateX(-36px)}to{opacity:1;transform:none}}
#pf-screen.pfin>*{animation:pfIn .32s cubic-bezier(.2,.8,.2,1) both}
#pf-screen.pfout>*{animation:pfOut .32s cubic-bezier(.2,.8,.2,1) both}
.pfseg{display:flex;gap:6px;padding:6px}
.pfseg button{flex:1;display:flex;align-items:center;justify-content:center;gap:8px;margin:0;padding:11px 0;border-radius:13px;background:transparent;color:var(--fg);border:0;font-weight:600;font-size:15px}
.pfseg button svg{width:19px;height:19px}
.pfseg button.on{background:var(--glasssel)}

#ch-screen{--tint:var(--bg);--chb:calc(var(--tbb) + var(--tbh) + var(--gapb) + var(--rowh) + 6px);background:linear-gradient(180deg,var(--bg) 0,var(--tint) calc(100% - var(--chb)),var(--tint) 100%)}
#ch-screen.tup{--tint:var(--tintup)}
#ch-screen.tdn{--tint:var(--tintdn)}
#chartbox{position:absolute;left:0;right:0;top:calc(env(safe-area-inset-top) + 4px);bottom:var(--chb)}
#chart{position:absolute;inset:0}
#pxtag{position:absolute;right:0;z-index:4;background:var(--blue);color:#fff;font-size:13px;line-height:1.3;padding:3px 7px 4px;border-radius:3px;font-variant-numeric:tabular-nums;pointer-events:none;transform:translateY(-11px);box-sizing:border-box}
#wm{position:absolute;left:12px;bottom:36px;height:42px;display:flex;align-items:center;z-index:3;cursor:pointer;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none}
#wm[hidden]{display:none}
#wm img{width:40px;height:40px;filter:var(--logo);opacity:.92;transition:transform .5s cubic-bezier(.3,1.5,.5,1)}
#wm.open img{transform:rotate(-12deg) scale(1.04)}
#wmtx{overflow:hidden;max-width:0;transition:max-width .6s cubic-bezier(.2,.8,.2,1)}
#wmtx b{display:block;padding:0 4px 0 7px;font-size:20px;font-weight:800;letter-spacing:-.02em;color:var(--fg);opacity:.92;white-space:nowrap;transform:translateX(-105%);transition:transform .6s cubic-bezier(.2,.8,.2,1)}
#wm.open #wmtx{max-width:190px}
#wm.open #wmtx b{transform:none}
#legend{position:absolute;top:calc(env(safe-area-inset-top) + 10px);left:14px;right:96px;z-index:5}
#lgtop{display:flex;align-items:center;gap:8px;font-size:18px;min-width:0}
#lgtop .ic{flex-basis:28px}
#lgname{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}
#lgstat{flex:0 0 auto;display:flex;align-items:center;padding:6px 9px;border-radius:12px;background:var(--glasssel)}
#lgdot{width:10px;height:10px;border-radius:50%;background:var(--faint);display:block}
#lgdot.on{background:var(--up)}
#lgdot.slow{background:#f5a524}
#lgpx{display:none}
#lgbtn{width:38px;height:32px;margin:8px 0 0;padding:0;display:flex;align-items:center;justify-content:center;background:transparent;border:1px solid var(--line);border-radius:6px;color:var(--fg)}
#lgbtn svg{width:18px;height:18px;transition:transform .2s ease}
#lgbtn.open svg{transform:rotate(180deg)}
#lgohlc{font-size:12px;margin:5px -16px 0 0;font-variant-numeric:tabular-nums;line-height:1.5;display:flex;flex-wrap:wrap;column-gap:7px;white-space:nowrap;letter-spacing:-.01em}
#lgohlc .k{color:var(--muted);margin-right:2px}
#lgohlc .gp{display:flex;column-gap:7px}
#lgohlc .v{color:var(--up)}#lgohlc.dn .v{color:var(--down)}
#lgind{font-size:12.5px;color:var(--muted);margin-top:8px}
#chbar{position:absolute;left:var(--side);right:var(--side);bottom:calc(var(--tbb) + var(--tbh) + var(--gapb));display:flex;gap:8px;z-index:6}
#sympill{flex:1.4;min-width:0;height:var(--rowh);border-radius:25px;display:flex;align-items:stretch;margin:0;padding:0;position:relative;overflow:hidden;color:var(--fg);font-weight:600;font-size:16px;text-align:left}
#spsym,#sptf{position:relative;display:flex;align-items:center;min-width:0;height:100%;overflow:hidden;touch-action:none;-webkit-user-select:none;user-select:none;cursor:pointer;transition:background .15s}
#spsym{flex:1 1 auto;gap:9px;padding:0 10px 0 6px;border-radius:25px 0 0 25px}
#sptf{flex:0 0 auto;min-width:58px;justify-content:center;padding:0 14px 0 12px;border-radius:0 25px 25px 0}
#spsym.press,#sptf.press{background:var(--glasssel)}
#spdiv{flex:0 0 1px;align-self:center;height:26px;background:currentColor;opacity:.22;border-radius:1px}
#sympill .ic{flex-basis:38px}
#sptxt,#sttxt{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
#sympill .ghost{position:absolute;left:53px;font-size:13px;opacity:.32;font-weight:600;white-space:nowrap;pointer-events:none}
#sptf .ghost{left:0;right:0;text-align:center;padding-right:2px}
#spg1,#stg1{top:-6px}
#spg2,#stg2{bottom:-6px}
#wheelbg{position:fixed;inset:0;z-index:56;background:transparent}
#wheel{position:fixed;z-index:57;border-radius:24px;padding:0;overflow:hidden;color:var(--fg);background:var(--glass2);opacity:0;transform:translateY(10px) scale(.96);transform-origin:var(--wo,50%) 100%;transition:opacity .16s,transform .18s cubic-bezier(.2,.8,.2,1)}
#wheel.show{opacity:1;transform:none}
#whband{position:absolute;left:8px;right:8px;top:84px;height:42px;border-radius:13px;background:var(--glasssel);pointer-events:none}
#whl{position:relative;height:210px;overflow-y:auto;-webkit-overflow-scrolling:touch;scroll-snap-type:y mandatory;padding:84px 0;box-sizing:border-box;scrollbar-width:none;-webkit-mask-image:linear-gradient(to bottom,transparent 0,#000 34%,#000 66%,transparent 100%);mask-image:linear-gradient(to bottom,transparent 0,#000 34%,#000 66%,transparent 100%)}
#whl::-webkit-scrollbar{display:none}
.wrow{height:42px;display:flex;align-items:center;gap:10px;padding:0 18px;scroll-snap-align:center;font-size:17px;font-weight:500;opacity:.55;white-space:nowrap;cursor:pointer;transition:opacity .12s}
.wrow.on{opacity:1;font-weight:600}
.wrow .ic{flex-basis:26px}
#tools{flex:1;min-width:0;height:var(--rowh);border-radius:25px;display:flex;align-items:center;justify-content:space-around;padding:0 4px}
#tools button{width:36px;height:42px;margin:0;padding:0;background:transparent;border:0;color:var(--fg);display:flex;align-items:center;justify-content:center;border-radius:50%}
#tools svg{width:24px;height:24px;display:block}

/* hub del grafico */
#hubbg{position:fixed;inset:0;background:rgba(0,0,0,.35);z-index:58}
#hub{position:fixed;left:8px;right:8px;bottom:0;height:calc(100% - env(safe-area-inset-top) - 24px);border-radius:28px 28px 0 0;z-index:59;display:flex;flex-direction:column;background:var(--glass2);color:var(--fg);will-change:transform}
#hubhead{flex:0 0 auto;display:grid;grid-template-columns:44px 1fr 44px;align-items:center;padding:6px 10px 6px;touch-action:none;position:relative}
#hubhead .sh-h{position:absolute;left:50%;top:6px;margin:0 0 0 -20px}
#hubtitle{text-align:center;font-weight:700;font-size:17px;padding-top:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
#hubleft,#hubx{width:40px;height:40px;margin:10px 0 0;padding:0;border-radius:50%;border:0;background:var(--glasssel);color:var(--fg);display:flex;align-items:center;justify-content:center}
#hubleft svg,#hubx svg{width:21px;height:21px}
#hubbody{flex:1 1 auto;overflow-y:auto;-webkit-overflow-scrolling:touch;padding:4px 0 calc(env(safe-area-inset-bottom) + 24px);overscroll-behavior:contain}
.htiles{display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:6px 14px 4px}
.htiles.three{grid-template-columns:1fr 1fr 1fr}
.htile{width:auto;margin:0;min-height:76px;padding:12px 12px;border-radius:18px;border:0;background:var(--glasssel);color:var(--fg);display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;gap:8px;text-align:left;font-size:14.5px;font-weight:600;line-height:1.2}
.htiles.three .htile{align-items:center;text-align:center;min-height:70px}
.htile .hic,.tile .hic{display:flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:12px;background:var(--icbg,var(--glasssel));color:var(--ic,var(--goldfg))}
.htile .hic svg{width:24px;height:24px}
.tile .hic{margin:0 auto}
.tile .hic svg{width:26px;height:26px}
.htiles .htile:last-child:nth-child(odd){grid-column:1/-1}
.htiles.three .htile:last-child:nth-child(odd){grid-column:auto}
.cvpre{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;padding:4px 16px 6px}
.cvsw{width:auto;margin:0;padding:0;background:transparent;border:0;color:var(--fg);display:flex;flex-direction:column;align-items:center;gap:6px;font-size:12.5px;font-weight:600}
.cvsw i{display:block;width:100%;aspect-ratio:1;border-radius:16px;border:1px solid var(--glassline);box-shadow:inset 0 0 0 1px rgba(255,255,255,.04)}
.cvsw.on i{outline:2.5px solid var(--goldfg);outline-offset:2px}
.cvsw.on span{color:var(--goldfg)}
.cvrow{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:9px 18px;min-height:48px}
.cvl{font-size:15.5px;flex:1 1 auto;min-width:0}
.cvc{display:flex;align-items:center;gap:8px;flex:0 0 auto}
.cvcol{width:40px;height:34px;margin:0;padding:2px;border-radius:10px;border:1px solid var(--line);background:var(--glasssel);-webkit-appearance:none;appearance:none}
.cvcol::-webkit-color-swatch-wrapper{padding:0}.cvcol::-webkit-color-swatch{border:0;border-radius:7px}
.cvsel{width:auto;height:34px;margin:0;padding:0 10px;border-radius:10px;border:1px solid var(--line);background:var(--glasssel);color:var(--fg);font:inherit;font-size:14px}
.cvnumw{display:flex;align-items:center;gap:6px}
.cvnum{width:68px;height:34px;margin:0;padding:0 10px;border-radius:10px;border:1px solid var(--line);background:var(--glasssel);color:var(--fg);font-size:15px;text-align:center}
.cvu{color:var(--muted);font-size:14px;min-width:34px}
.cvrow input[switch]{width:auto;margin:0}
.htile:active{transform:scale(.97)}
.kv{display:flex;justify-content:space-between;gap:12px;padding:11px 18px;font-size:15.5px;border-bottom:1px solid var(--sep)}
.kv span:first-child{color:var(--muted)}
.kv span:last-child{text-align:right;font-variant-numeric:tabular-nums}
.up{color:var(--up)!important}.down{color:var(--down)!important}
.swrow{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 18px;font-size:16px}
.swrow input{width:auto;margin:0;transform:scale(1.1)}
.hinput{display:block;width:calc(100% - 36px);margin:6px 18px;padding:12px 14px;border-radius:14px;border:1px solid var(--line);background:var(--glasssel);color:var(--fg);font-size:17px}
.gauge{display:flex;flex-direction:column;align-items:center;padding:6px 0 10px;color:var(--fg)}
.verdict{font-size:22px;font-weight:700;margin-top:-4px}
.counts{font-size:13px;color:var(--muted);margin-top:6px}
.tic{width:26px;height:26px;display:flex}.tic svg{width:26px;height:26px}
.sh-note{padding:8px 18px 10px;color:var(--muted);font-size:14px;line-height:1.4}

#lgcmp{display:inline-block;margin-top:4px;font-size:13px;color:#ff9800;font-weight:600}
/* fogli dal basso */
#sheetbg{position:fixed;inset:0;background:rgba(0,0,0,.35);z-index:60}
#sheet{position:fixed;left:8px;right:8px;bottom:var(--tbb);max-height:78vh;overflow-y:auto;-webkit-overflow-scrolling:touch;border-radius:28px;z-index:61;padding:8px 0 14px;background:var(--glass2);color:var(--fg)}
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
const IC_RP='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 5v14"/><path d="M19 6l-9 6 9 6z"/></svg>';
const IC_MORE='<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.9"/><circle cx="12" cy="12" r="1.9"/><circle cx="19" cy="12" r="1.9"/></svg>';
const IC_CHEV='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>';
const IC_BARS='<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.7" stroke-linejoin="round"><path d="M8.6 5.5h6.8l1.6 4.8H7z"/><path d="M3.6 13.2h6.8l1.6 4.8H2z"/><path d="M13.6 13.2h6.8l1.6 4.8H12z"/></svg>';

document.getElementById('root').innerHTML=`
<div id="top">
  <button id="gdbtn" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2.5" width="12" height="19" rx="2.5"/><path d="M12 7v7M9 11l3 3 3-3M10.5 18.5h3"/></svg><span id="gdbtx"></span></button>
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
<div id="brand"><img id="brandimg" alt="" src="${LOGO_SRC}"><div id="brandname">NexusCharts</div></div>
<div id="login">
  <button id="fid" type="button" hidden><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2"/><path d="M9 10v1.5M15 10v1.5M12 10v3.5h-1M9 16.2c1.8 1.4 4.2 1.4 6 0"/></svg><span id="fidtxt"></span></button>
  <form id="lform" autocomplete="on" novalidate>
  <input id="email" name="email" type="email" placeholder="Email" autocomplete="username" autocapitalize="off" spellcheck="false">
  <input id="pass" name="password" type="password" placeholder="Password" autocomplete="current-password">
  <input id="server" name="server" placeholder="Server" autocomplete="off" autocapitalize="off" spellcheck="false">
  <button id="go" type="submit">Collegati</button>
  </form>
  <div id="lor"><span id="lortx"></span></div>
  <button id="fopen" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M17 6l3 3M15 8l2 2"/></svg><span id="fopentx"></span></button>
  <form id="fform" novalidate hidden><div id="fhead"></div><input id="fcode" name="fcode" placeholder="Codice amico" autocomplete="off" autocapitalize="characters" autocorrect="off" spellcheck="false"><button id="fgo" type="submit"></button><button id="flost" type="button" class="lnk"></button><button id="fback" type="button" class="lnk"></button></form>
  <button id="forget" type="button" hidden></button>
</div>
<div id="msg"></div>
<button id="reset" type="button"><span id="rsfill"></span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg><span id="rstx"></span></button>
<div id="shell" hidden>
  <section id="wl-screen" class="screen">
    <div id="bar" hidden><span id="bartxt"></span><button id="barsave"></button><button id="barno" class="no"></button></div>
    <div id="wl"></div>
  </section>
  <section id="pf-screen" class="screen" hidden></section>
  <section id="ch-screen" class="screen" hidden>
    <div id="chartbox">
      <div id="chart"></div>
      <canvas id="draw"></canvas>
      <div id="pxtag" hidden><div id="tagpx"></div><div id="tagcd"></div></div>
      <div id="wm" role="button" aria-label="NexusCharts"><img alt="" src="${LOGO_SRC}"><span id="wmtx"><b>NexusCharts</b></span></div>
    </div>
    <div id="legend">
      <div id="lgtop"><div id="lgic"></div><span id="lgname"></span><span id="lgstat"><i id="lgdot"></i></span></div>
      <div id="lgohlc"></div>
      <div id="lgpx"></div>
      <button id="lgbtn" aria-label="Details">${IC_CHEV}</button>
      <div id="lgind" hidden></div>
      <div id="lgcmp" hidden></div>
    </div>
    <div id="chbar">
      <div id="sympill" class="glass"><div id="spsym" role="button" aria-label="Symbol"><span id="spg1" class="ghost"></span><div id="spic"></div><span id="sptxt"></span><span id="spg2" class="ghost"></span></div><i id="spdiv"></i><div id="sptf" role="button" aria-label="Timeframe"><span id="stg1" class="ghost"></span><span id="sttxt"></span><span id="stg2" class="ghost"></span></div></div>
      <div id="tools" class="glass">
        <button id="pencil" aria-label="Drawing">${IC_PEN}</button>
        <button id="replay" aria-label="Bar Replay">${IC_RP}</button>
        <button id="inds" aria-label="Indicators">${IC_IND}</button>
        <button id="more" aria-label="More">${IC_MORE}</button>
      </div>
    </div>
    <div id="rpfade" hidden></div><div id="rpline" hidden><span id="rpdate"></span></div>
    <div id="dban" class="glass" hidden><span id="dbantxt"></span><button id="dbdone" hidden></button><button id="dbcancel"></button></div>
    <div id="dedit" class="glass" hidden></div>
    <div id="rpbar" class="glass" hidden>
      <button id="rpexit" aria-label="Exit"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
      <button id="rppick" aria-label="Pick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="6"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/></svg></button>
      <button id="rpplay" aria-label="Play"></button>
      <button id="rpstep" aria-label="Step"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.5v13l9-6.5z"/><rect x="16" y="5" width="2.6" height="14" rx="1"/></svg></button>
      <button id="rpspeed">1x</button>
    </div>
  </section>
  <button id="mini" class="glass"><div id="mnic"></div><div id="mntxt"><div id="mna"></div><div id="mnb"></div></div><canvas id="mnsp"></canvas></button>
  <nav id="tabbar" class="glass">
    <button class="tab" data-t="pf"><img class="tabimg" alt="" src="${LOGO_SRC}"><span id="tabpf"></span></button>
    <button class="tab on" data-t="wl">${IC_WL}<span id="tabwl"></span></button>
    <button class="tab" data-t="ch">${IC_CH}<span id="tabch"></span></button>
  </nav>
</div>
<div id="sheetbg" hidden></div>
<div id="hubbg" hidden></div>
<div id="hub" class="glass" hidden><div id="hubhead"><div class="sh-h"></div><button id="hubleft"></button><div id="hubtitle"></div><button id="hubx" aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div><div id="hubbody"></div></div>
<div id="wheelbg" hidden></div>
<div id="wheel" class="glass" hidden><div id="whband"></div><div id="whl"></div></div>
<div id="sheet" class="glass" hidden></div>
<div id="ver"></div>
`;

/* ---------- impostazioni ---------- */
const $=id=>document.getElementById(id);
let BASE='https://demo.tradelocker.com/backend-api';
const TL_BASE=BASE;
var WORKER='https://tradingcharts.nexuscharts.workers.dev',TG_USER='albaexe',FRIEND=null;
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
    newver:'Nuova versione, ricarico...',anim:'Animazione interrotta: ',faceid:"Entra con Face ID",save:"Salvare l'accesso con Face ID?",savebtn:"Salva",later:"Non ora",saved:"Accesso salvato.",savedkey:"Chiave protetta dal Face ID.",savedgate:"Controllo con Face ID.",forget:"Cancella accesso salvato",forgot:"Accesso salvato cancellato.",fidfail:"Face ID non riuscito. Usa email e password.",nofid:"Non riesco a usare il Face ID qui.",relogin:"Sessione scaduta, mi ricollego...",theme:"Tema",dark:"Scuro",light:"Bianco",logout:"Esci",wl:"Watchlist",ch:"Grafico",cat_fx:"Forex",cat_com:"Commodity",cat_cry:"Cripto",cat_idx:"Indici",cat_stk:"Azioni",cat_oth:"Altro",search:"Cerca simbolo",searchph:"Cerca",tf:"Timeframe",symbols:"Simboli",tools:"Strumenti di disegno",inds:"Indicatori",soon:"Arrivano nella prossima versione, insieme all'editor per i tuoi script.",tl_trend:"Linea di tendenza",tl_h:"Linea orizzontale",tl_rect:"Rettangolo",tl_fib:"Ritracciamento di Fibonacci",tl_text:"Testo",in_ma:"Medie mobili",in_rsi:"RSI",in_macd:"MACD",in_bb:"Bande di Bollinger",in_mine:"I miei script",refresh:"Aggiorna",language:"Lingua",today:"oggi",noinst:"Nessuno strumento disponibile",noresult:"Nessun risultato",slow:"Connessione lenta con il broker, riprovo tra poco.",sec_trend:"Strumenti analisi trend",sec_fore:"Previsione e misurazione",sec_geo:"Figure geometriche",sec_ann:"Annotazioni",d_trend:"Trendline",d_channel:"Canale parallelo",d_long:"Posizione long",d_short:"Posizione short",d_brush:"Pennello",d_arrow:"Freccia",d_rect:"Rettangolo",d_path:"Percorso",d_ellipse:"Ellisse",d_text:"Testo",d_note:"Nota",h_p1:"Tocca il primo punto, oppure trascina",h_p2:"Tocca il secondo punto",h_p3:"Tocca per la larghezza del canale",h_brush:"Disegna col dito",h_path:"Tocca i punti, poi Fine",h_one:"Tocca dove posizionarlo",cancel:"Annulla",done:"Fine",del:"Elimina",ok:"Fatto",color:"Colore",edtext:"Testo",delall:"Elimina tutti i disegni",txtph:"Scrivi qui",rp_pick:"Porta la candela sulla linea",rp_go:"Avvia da qui",rp_end:"Il replay è arrivato alla fine dei dati.",target:"Target",stop:"Stop",afhint:"Tocca il tuo account sopra la tastiera: iPhone usa il Face ID e l'app entra da sola. La prima volta scrivi email e password e, quando iPhone lo chiede, scegli «Salva password».",reset:"Ripristina l'app",resetq:"Cancellare tutti i dati salvati dall'app su questo iPhone (accesso col Face ID, tema, lingua, server) e ripartire da zero?",resave:"Accesso salvato da rifare: entra con email e password e salva di nuovo col Face ID.",waitfid:"Conferma con Face ID…",nofidresp:"iPhone non ha mostrato il Face ID. Controlla in Impostazioni › Generali › Compilazione automatica e password che password e passkey siano attive, con l'app Password.",fidset:"Controlla in Impostazioni › Generali › Compilazione automatica e password.",fidsave:"Accesso con Face ID",fidhint:"Se iPhone dice che non c'è nessuna passkey, tocca «Cancella accesso salvato», entra con email e password e salva di nuovo.",
    nolib:'La libreria del grafico non si è caricata. Ricarica la pagina.',
    cors:'Il browser ha bloccato la richiesta (probabile blocco CORS di TradeLocker).'},
  es:{email:'Correo electrónico',pass:'Contraseña',server:'Servidor',go:'Conectar',
    logging:'Iniciando sesión...',finding:'Cargando mercados...',nofind:'XAUUSD no encontrado',
    nobars:'No se recibió ninguna vela',upd:'Actualización: ',ok:'Conectado.',
    newver:'Nueva versión, recargando...',anim:'Animación interrumpida: ',faceid:"Entrar con Face ID",save:"¿Guardar el acceso con Face ID?",savebtn:"Guardar",later:"Ahora no",saved:"Acceso guardado.",savedkey:"Clave protegida por Face ID.",savedgate:"Control con Face ID.",forget:"Borrar acceso guardado",forgot:"Acceso guardado borrado.",fidfail:"Face ID no funcionó. Usa correo y contraseña.",nofid:"No puedo usar Face ID aquí.",relogin:"Sesión caducada, reconectando...",theme:"Tema",dark:"Oscuro",light:"Blanco",logout:"Salir",wl:"Watchlist",ch:"Gráfico",cat_fx:"Forex",cat_com:"Materias primas",cat_cry:"Cripto",cat_idx:"Índices",cat_stk:"Acciones",cat_oth:"Otros",search:"Buscar símbolo",searchph:"Buscar",tf:"Temporalidad",symbols:"Símbolos",tools:"Herramientas de dibujo",inds:"Indicadores",soon:"Llegan en la próxima versión, junto con el editor para tus scripts.",tl_trend:"Línea de tendencia",tl_h:"Línea horizontal",tl_rect:"Rectángulo",tl_fib:"Retroceso de Fibonacci",tl_text:"Texto",in_ma:"Medias móviles",in_rsi:"RSI",in_macd:"MACD",in_bb:"Bandas de Bollinger",in_mine:"Mis scripts",refresh:"Actualizar",language:"Idioma",today:"hoy",noinst:"No hay instrumentos disponibles",noresult:"Sin resultados",slow:"Conexión lenta con el bróker, reintento en breve.",sec_trend:"Herramientas de tendencia",sec_fore:"Previsión y medición",sec_geo:"Formas geométricas",sec_ann:"Anotaciones",d_trend:"Línea de tendencia",d_channel:"Canal paralelo",d_long:"Posición larga",d_short:"Posición corta",d_brush:"Pincel",d_arrow:"Flecha",d_rect:"Rectángulo",d_path:"Trayectoria",d_ellipse:"Elipse",d_text:"Texto",d_note:"Nota",h_p1:"Toca el primer punto o arrastra",h_p2:"Toca el segundo punto",h_p3:"Toca para el ancho del canal",h_brush:"Dibuja con el dedo",h_path:"Toca los puntos y luego Fin",h_one:"Toca dónde colocarlo",cancel:"Cancelar",done:"Fin",del:"Eliminar",ok:"Listo",color:"Color",edtext:"Texto",delall:"Eliminar todos los dibujos",txtph:"Escribe aquí",rp_pick:"Lleva la vela a la línea",rp_go:"Empezar aquí",rp_end:"El replay llegó al final de los datos.",target:"Objetivo",stop:"Stop",afhint:"Toca tu cuenta encima del teclado: el iPhone usa Face ID y la app entra sola. La primera vez escribe correo y contraseña y, cuando el iPhone lo pida, elige «Guardar contraseña».",reset:"Restablecer la app",resetq:"¿Borrar todos los datos guardados por la app en este iPhone (acceso con Face ID, tema, idioma, servidor) y empezar de cero?",resave:"Hay que rehacer el acceso guardado: entra con correo y contraseña y guarda de nuevo con Face ID.",waitfid:"Confirma con Face ID…",nofidresp:"El iPhone no mostró Face ID. Revisa en Ajustes › General › Autorrelleno y contraseñas que las contraseñas y llaves de acceso estén activas, con la app Contraseñas.",fidset:"Revisa Ajustes › General › Autorrelleno y contraseñas.",fidsave:"Acceso con Face ID",fidhint:"Si el iPhone dice que no hay ninguna llave de acceso, toca «Borrar acceso guardado», entra con correo y contraseña y guarda de nuevo.",
    nolib:'La librería del gráfico no se cargó. Recarga la página.',
    cors:'El navegador bloqueó la solicitud (probable bloqueo CORS de TradeLocker).'},
  en:{email:'Email',pass:'Password',server:'Server',go:'Connect',
    logging:'Signing in...',finding:'Loading markets...',nofind:'XAUUSD not found',
    nobars:'No candles received',upd:'Update: ',ok:'Connected.',
    newver:'New version, reloading...',anim:'Animation interrupted: ',faceid:"Sign in with Face ID",save:"Save sign-in with Face ID?",savebtn:"Save",later:"Not now",saved:"Sign-in saved.",savedkey:"Key protected by Face ID.",savedgate:"Face ID check.",forget:"Delete saved sign-in",forgot:"Saved sign-in deleted.",fidfail:"Face ID failed. Use email and password.",nofid:"Face ID is not available here.",relogin:"Session expired, reconnecting...",theme:"Theme",dark:"Dark",light:"White",logout:"Sign out",wl:"Watchlist",ch:"Chart",cat_fx:"Forex",cat_com:"Commodities",cat_cry:"Crypto",cat_idx:"Indices",cat_stk:"Stocks",cat_oth:"Other",search:"Search symbol",searchph:"Search",tf:"Timeframe",symbols:"Symbols",tools:"Drawing tools",inds:"Indicators",soon:"Coming in the next version, together with the editor for your scripts.",tl_trend:"Trend line",tl_h:"Horizontal line",tl_rect:"Rectangle",tl_fib:"Fibonacci retracement",tl_text:"Text",in_ma:"Moving averages",in_rsi:"RSI",in_macd:"MACD",in_bb:"Bollinger Bands",in_mine:"My scripts",refresh:"Refresh",language:"Language",today:"today",noinst:"No instruments available",noresult:"No results",slow:"Slow connection to the broker, retrying shortly.",sec_trend:"Trend tools",sec_fore:"Forecasting & measurement",sec_geo:"Shapes",sec_ann:"Annotations",d_trend:"Trend line",d_channel:"Parallel channel",d_long:"Long position",d_short:"Short position",d_brush:"Brush",d_arrow:"Arrow",d_rect:"Rectangle",d_path:"Path",d_ellipse:"Ellipse",d_text:"Text",d_note:"Note",h_p1:"Tap the first point, or drag",h_p2:"Tap the second point",h_p3:"Tap for the channel width",h_brush:"Draw with your finger",h_path:"Tap the points, then Done",h_one:"Tap where to place it",cancel:"Cancel",done:"Done",del:"Delete",ok:"Done",color:"Color",edtext:"Text",delall:"Delete all drawings",txtph:"Type here",rp_pick:"Move the candle to the line",rp_go:"Start here",rp_end:"Replay reached the end of the data.",target:"Target",stop:"Stop",afhint:"Tap your account above the keyboard: the iPhone uses Face ID and the app signs in by itself. The first time, type email and password and, when the iPhone asks, choose “Save Password”.",reset:"Reset the app",resetq:"Delete all data the app saved on this iPhone (Face ID sign-in, theme, language, server) and start from scratch?",resave:"Saved sign-in must be redone: sign in with email and password and save again with Face ID.",waitfid:"Confirm with Face ID…",nofidresp:"The iPhone did not show Face ID. Check Settings › General › AutoFill & Passwords: passwords and passkeys must be on, with the Passwords app.",fidset:"Check Settings › General › AutoFill & Passwords.",fidsave:"Sign in with Face ID",fidhint:"If the iPhone says there is no passkey, tap “Delete saved sign-in”, sign in with email and password and save again.",
    nolib:'The chart library failed to load. Reload the page.',
    cors:'The browser blocked the request (probably a TradeLocker CORS block).'},
  fr:{email:'E-mail',pass:'Mot de passe',server:'Serveur',go:'Se connecter',
    logging:'Connexion en cours...',finding:'Chargement des marchés...',nofind:'XAUUSD introuvable',
    nobars:'Aucune bougie reçue',upd:'Mise à jour : ',ok:'Connecté.',
    newver:'Nouvelle version, rechargement...',anim:'Animation interrompue : ',faceid:"Se connecter avec Face ID",save:"Enregistrer l'accès avec Face ID ?",savebtn:"Enregistrer",later:"Pas maintenant",saved:"Accès enregistré.",savedkey:"Clé protégée par Face ID.",savedgate:"Contrôle par Face ID.",forget:"Supprimer l'accès enregistré",forgot:"Accès enregistré supprimé.",fidfail:"Face ID a échoué. Utilise e-mail et mot de passe.",nofid:"Face ID n'est pas disponible ici.",relogin:"Session expirée, reconnexion...",theme:"Thème",dark:"Sombre",light:"Blanc",logout:"Se déconnecter",wl:"Watchlist",ch:"Graphique",cat_fx:"Forex",cat_com:"Matières premières",cat_cry:"Crypto",cat_idx:"Indices",cat_stk:"Actions",cat_oth:"Autres",search:"Rechercher un symbole",searchph:"Rechercher",tf:"Unité de temps",symbols:"Symboles",tools:"Outils de dessin",inds:"Indicateurs",soon:"Disponibles dans la prochaine version, avec l'éditeur pour tes scripts.",tl_trend:"Ligne de tendance",tl_h:"Ligne horizontale",tl_rect:"Rectangle",tl_fib:"Retracement de Fibonacci",tl_text:"Texte",in_ma:"Moyennes mobiles",in_rsi:"RSI",in_macd:"MACD",in_bb:"Bandes de Bollinger",in_mine:"Mes scripts",refresh:"Actualiser",language:"Langue",today:"aujourd\u2019hui",noinst:"Aucun instrument disponible",noresult:"Aucun résultat",slow:"Connexion lente avec le courtier, nouvel essai sous peu.",sec_trend:"Outils de tendance",sec_fore:"Prévision et mesure",sec_geo:"Formes",sec_ann:"Annotations",d_trend:"Ligne de tendance",d_channel:"Canal parallèle",d_long:"Position longue",d_short:"Position courte",d_brush:"Pinceau",d_arrow:"Flèche",d_rect:"Rectangle",d_path:"Chemin",d_ellipse:"Ellipse",d_text:"Texte",d_note:"Note",h_p1:"Touche le premier point ou fais glisser",h_p2:"Touche le second point",h_p3:"Touche pour la largeur du canal",h_brush:"Dessine avec le doigt",h_path:"Touche les points, puis Fin",h_one:"Touche où le placer",cancel:"Annuler",done:"Fin",del:"Supprimer",ok:"OK",color:"Couleur",edtext:"Texte",delall:"Supprimer tous les dessins",txtph:"Écris ici",rp_pick:"Amène la bougie sur la ligne",rp_go:"Démarrer ici",rp_end:"Le replay est arrivé à la fin des données.",target:"Objectif",stop:"Stop",afhint:"Touche ton compte au-dessus du clavier : l'iPhone utilise Face ID et l'app se connecte toute seule. La première fois, saisis e-mail et mot de passe et, quand l'iPhone le demande, choisis « Enregistrer le mot de passe ».",reset:"Réinitialiser l'app",resetq:"Effacer toutes les données enregistrées par l'app sur cet iPhone (accès Face ID, thème, langue, serveur) et repartir de zéro ?",resave:"L'accès enregistré est à refaire : connecte-toi avec e-mail et mot de passe et enregistre à nouveau avec Face ID.",waitfid:"Confirme avec Face ID…",nofidresp:"L'iPhone n'a pas affiché Face ID. Vérifie dans Réglages › Général › Remplissage automatique et mots de passe que les mots de passe et clés d'accès sont activés, avec l'app Mots de passe.",fidset:"Vérifie Réglages › Général › Remplissage automatique et mots de passe.",fidsave:"Accès avec Face ID",fidhint:"Si l'iPhone indique qu'il n'y a aucune clé d'accès, touche « Supprimer l'accès enregistré », connecte-toi avec e-mail et mot de passe et enregistre à nouveau.",
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
  if(window.GD)guideTexts();
  if(window.FRT)fTexts();
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

/* ---------- apertura: logo al centro dello schermo, poi scivola in cima ---------- */
(function(){
  const sp=$('splash'),brand=$('brand'),bimg=$('brandimg');
  const showBrand=()=>brand.classList.add('show');
  const killSplash=()=>{if(sp)sp.remove()};

  let skip=false;
  try{skip=sessionStorage.getItem('noSplash')==='1';sessionStorage.removeItem('noSplash')}catch(e){}
  if(skip||!sp){killSplash();showBrand();return}

  /* niente piu' video: se il guscio e' quello vecchio lo tolgo e metto il logo al centro */
  const old=$('sv');if(old)old.remove();
  let sl=$('sl');
  if(!sl){
    sp.style.display='flex';sp.style.alignItems='center';sp.style.justifyContent='center';
    sl=document.createElement('img');sl.id='sl';sl.alt='';sl.src=LOGO_SRC;
    sl.style.cssText='width:60vw;max-width:320px;height:auto;aspect-ratio:1;display:block';
    sp.appendChild(sl);
  }

  /* logo "volante": stessa immagine, pronto prima che serva */
  const fly=document.createElement('img');
  fly.id='fly';fly.alt='';fly.src=LOGO_SRC;
  document.body.appendChild(fly);

  const fadeOut=()=>{
    sp.style.transition='opacity .7s ease';
    sp.style.opacity='0';
    sp.style.pointerEvents='none';
    setTimeout(killSplash,800);
  };
  const go=()=>{
    const g=sl.getBoundingClientRect(),b=bimg.getBoundingClientRect();
    if(!g.width||!b.width){fly.remove();fadeOut();showBrand();return}
    /* 1. il logo volante prende il posto di quello al centro, pixel su pixel */
    fly.style.left=g.left+'px';fly.style.top=g.top+'px';
    fly.style.width=g.width+'px';fly.style.height=g.height+'px';
    fly.style.opacity='1';
    sl.style.visibility='hidden';
    /* 2. scivola in cima mentre lo sfondo nero si dissolve */
    const dx=(b.left+b.width/2)-(g.left+g.width/2);
    const dy=(b.top+b.height/2)-(g.top+g.height/2);
    const sc=b.width/g.width;
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
  };
  const ready=()=>Promise.all([sl,fly].map(im=>im.decode?im.decode().catch(()=>{}):Promise.resolve()));
  const wait=Math.max(150,HOLD_MS-(performance.now?performance.now():0));
  ready().then(()=>setTimeout(()=>requestAnimationFrame(go),wait));
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
  if(window.RP&&RP.on){rpExit();return}
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
function backoff(first){apiBack=Math.min(first>=3000?10000:30000,apiBack?apiBack*2:first);apiPauseUntil=Date.now()+apiBack}
function api(path,opt={}){
  const isAuth=path.startsWith('/auth/');
  const run=async()=>{
    const wait=Math.max(0,apiLast+GAP-Date.now(),isAuth?0:apiPauseUntil-Date.now());
    if(wait)await new Promise(r=>setTimeout(r,wait));
    apiLast=Date.now();
    let r;
    try{r=await fetch(BASE+path,{...opt,headers:{'Content-Type':'application/json',...(opt.headers||{})}})}
    catch(e){if(!isAuth)backoff(1500);throw e}
    if(r.status===429){backoff(3000);if(window.tickSlow)tickSlow()}else if(r.ok)apiBack=0;
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
const auth=()=>FRIEND?{Authorization:'Bearer '+tok,accNum:String(accNum),'X-Device':devId()}:{Authorization:'Bearer '+tok,accNum:String(accNum)};
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
  /* watchlist fissa: solo i simboli scelti */
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
  checkAlerts(name,last.c);
}
function setCur(name,doLoad=true){
  if(!BYN[name])return;
  const changed=name!==cur;
  cur=name;tid=BYN[name].tid;route=BYN[name].route;
  try{localStorage.setItem('tc_sym',name)}catch(e){}
  if(changed&&window.RP&&RP.on){rpPause();RP.on=false;RP.started=false;$('rpbar').hidden=true;$('chbar').hidden=false}
  if(changed&&window.dMode&&dMode!=='idle'){dTemp=null;dSel=null;setMode('idle')}
  if(changed){lastBars=[];lastMove=0;if(series){try{series.setData([])}catch(e){}}}
  renderLegend();renderSymPill();renderMini();tint();
  if(doLoad&&series){
    loadSafe();
    quoteFor(name).then(()=>{renderLegend();renderMini();tint()}).catch(()=>{});
  }
}
function setRes(r){
  if(!SECS[r])return;
  if(window.RP&&RP.on){rpPause();RP.on=false;RP.started=false;$('rpbar').hidden=true;$('chbar').hidden=false}
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
  if(!force&&Date.now()-wlLast<5000)return;
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
  swapIcon('mnic',38);
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
  const v=cvOpts();
  return{
    layout:{...v.layout,fontFamily:'-apple-system,system-ui,sans-serif'},
    grid:v.grid,
    rightPriceScale:v.rightPriceScale,
    timeScale:{...v.timeScale,timeVisible:true,secondsVisible:false},
    crosshair:{mode:0,vertLine:{...v.crosshair.vertLine,labelBackgroundColor:'#3a3a3e'},horzLine:{...v.crosshair.horzLine,labelBackgroundColor:'#3a3a3e'}},
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
  const r=cvRes();
  $('ch-screen').style.setProperty('--tint',(chartSolid||r.type==='solid')?r.c1:r.c2);
  if(chart){try{chart.applyOptions({layout:{background:cvOpts().layout.background}})}catch(e){}}
  cvFg();
}
function renderLegend(){
  const it=BYN[cur];if(!it)return;
  swapIcon('lgic',28);
  $('lgname').textContent=it.name+' · '+info(it).desc;
  const last=lastBars.length?lastBars[lastBars.length-1]:null;
  $('lgpx').textContent=last?fmt(last.c,dec):'';
  $('lgdot').className=lastMove&&Date.now()-lastMove<180000?'on':'';
  if(!(window.XH&&XH.on))ohlcShow(last);
}
function ohlcShow(b){
  const o=$('lgohlc');
  if(!b){o.innerHTML='';return}
  o.classList.toggle('dn',b.c<b.o);
  const one=(k,v)=>'<span><span class="k">'+k+'</span><span class="v">'+fmt(v,dec)+'</span></span>';
  o.innerHTML='<span class="gp">'+one('O',b.o)+one('H',b.h)+'</span><span class="gp">'+one('L',b.l)+one('C',b.c)+'</span>';
}
function renderSymPill(){
  const it=BYN[cur];if(!it)return;
  swapIcon('spic',38);
  $('sptxt').textContent=it.name;
  const i=WATCH.indexOf(cur);
  $('spg1').textContent=i>0?WATCH[i-1]:'';
  $('spg2').textContent=i>=0&&i<WATCH.length-1?WATCH[i+1]:'';
  if(window.renderSymPillTF)renderSymPillTF();
}
function afterData(){
  const last=lastBars[lastBars.length-1];
  if(last){
    if(!lastMove&&Date.now()-last.t<SECS[res]*1000+120000)lastMove=Date.now();
    if(afterData.prev!=null&&afterData.prev!==last.c)lastMove=Date.now();
    afterData.prev=last.c;
  }
  renderLegend();renderMini();tint();tagText();
  if(last&&!(window.RP&&RP.on))checkAlerts(cur,last.c);
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
  setSeriesData(b);refreshAlertLines();
  if(CMP.sym===cur)cmpSet(null);else if(CMP.sym)cmpLoad().catch(()=>{});
  try{chart.priceScale('right').applyOptions({autoScale:true});chart.timeScale().scrollToRealTime()}catch(e){}
  afterData();
}
let tickFails=0;
/* ritmo del grafico: 1 secondo; se il broker dice "piano" rallenta da solo e poi torna veloce */
var TICK={gap:1000,ok:Date.now(),good:0,warned:0};
function tickSlow(){TICK.gap=Math.min(3000,TICK.gap+1000);TICK.good=0}
async function tick(){
  if(tick.busy||!series||!cur||!lastBars.length||paused()||document.hidden||(window.RP&&RP.on))return;
  tick.busy=true;setTimeout(()=>{tick.busy=false},4000);
  try{
    const it=BYN[cur],want=cur+'|'+res,to=Date.now();
    const b=await barsFor(it,res,to-Math.max(6e5,SECS[res]*5000),to);
    if(cur+'|'+res!==want||!b.length)return;
    const map=new Map(lastBars.map(x=>[x.t,x]));
    b.forEach(x=>map.set(x.t,x));
    lastBars=[...map.values()].sort((a,c)=>a.t-c.t).slice(-5000);
    updSeries(lastBars,b.map(x=>x.t));
    if(CMP.sym&&tickN%5===0)cmpLoad().catch(()=>{});
    afterData();
    if(++tickN%15===0)quoteFor(cur).then(()=>{renderLegend();renderMini();tint()}).catch(()=>{});
    tickFails=0;TICK.ok=Date.now();
    if(TICK.gap>1000&&++TICK.good>=10){TICK.gap-=500;TICK.good=0}
  }catch(e){
    /* errori passeggeri in silenzio: avviso solo se il grafico e' fermo da piu' di 25 secondi */
    if(e&&e.status===401)return;
    tickFails++;
    if(Date.now()-TICK.ok>25000&&Date.now()-TICK.warned>60000){TICK.warned=Date.now();msg(t('slow'))}
  }finally{tick.busy=false}
}
/* etichetta blu del prezzo con il conto alla rovescia della candela */
function tagText(){
  const last=lastBars[lastBars.length-1];if(!last)return;
  let s=Math.max(0,Math.floor((last.t+SECS[res]*1000-Date.now())/1000));
  const hh=Math.floor(s/3600),mm=Math.floor(s%3600/60),ss=s%60,p=n=>String(n).padStart(2,'0');
  $('tagpx').textContent=fmt(last.c,dec);
  $('tagcd').hidden=!!(window.RP&&RP.on)||!CS.cd;
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
$('lgbtn').onclick=()=>{const g=$('lgind');g.textContent=window.pt?pt('noind'):'';g.hidden=!g.hidden;$('lgbtn').classList.toggle('open',!g.hidden)};

/* ---------- schede in basso ---------- */
function showTab(x){
  if(x!=='ch'&&window.dMode&&(dMode==='place'||dMode==='edit')){dTemp=null;dSel=null;setMode('idle')}
  tab=x;
  $('wl-screen').hidden=x!=='wl';
  $('ch-screen').hidden=x!=='ch';
  $('pf-screen').hidden=x!=='pf';
  if(x==='pf')renderProfile();
  $('mini').hidden=x!=='wl';
  document.querySelectorAll('.tab').forEach(b=>b.classList.toggle('on',b.dataset.t===x));
  if(x==='wl')refreshWL(false);
  if(x==='ch'){tagText();if(series&&lastBars.length)tick()}
}
document.querySelectorAll('.tab').forEach(b=>{
  const p=b.querySelector('svg path');if(p&&b.dataset.t==='wl')p.setAttribute('pathLength','1');
  b.onclick=()=>{
    b.classList.remove('anim');void b.offsetWidth;b.classList.add('anim');
    clearTimeout(b._an);b._an=setTimeout(()=>b.classList.remove('anim'),900);
    if(b.dataset.t==='pf'&&tab==='pf'&&window.PF)PF.page=null;
    showTab(b.dataset.t);
  };
});
$('mini').onclick=()=>showTab('ch');

/* ---------- fogli dal basso ---------- */
function openSheet(build){
  const s=$('sheet');
  s.innerHTML='<div class="sh-h"></div>';
  build(s);
  $('sheetbg').hidden=false;s.hidden=false;s.scrollTop=0;
}
function closeSheet(){$('sheet').hidden=true;$('sheetbg').hidden=true;$('sheet').classList.remove('guide')}
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
    if(!FRIEND)shItem(s,ft('codes'),{on:()=>openCodes()});
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

$('more').onclick=openMenu;
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
    series=makeSeries();applyCS();
    (function loop(){setTimeout(()=>{if(tab==='ch')tick();loop()},TICK.gap)})();
    setInterval(()=>$('lgdot')&&$('lgdot').classList.toggle('slow',Date.now()-TICK.ok>8000&&tab==='ch'),1000);
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
  $('tabpf').textContent=pt('profile');
  if(tab==='pf')renderProfile();
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
    if(e.status===401&&!sess){if(FRIEND)friendLost();else sessionLost()}
    if(e.status===403&&FRIEND)friendLost('dev');
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
    rp:{name:'Nexus Charts',id:location.hostname},
    user:{id:rnd(16),name:'Nexus Charts',displayName:'Nexus Charts'},
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
  $('fid').hidden=false;
  $('forget').hidden=true;
  $('fidtxt').textContent=t('faceid');
  $('forget').textContent=t('forget');
  $('rstx').textContent=t('reset');
}
function offerSave(){
  return; /* le passkey dalle app della Home non sono affidabili: ora il Face ID passa dal portachiavi di iPhone */
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
$('fid').onclick=afLogin;
(function(){
  const b=$('reset');let tm=0,t0=0;
  const stop=()=>{clearTimeout(tm);tm=0;b.classList.remove('hold')};
  b.addEventListener('pointerdown',e=>{
    t0=Date.now();b.classList.add('hold');
    tm=setTimeout(()=>{tm=0;b.classList.remove('hold');haptic();resetApp()},1300);
  });
  b.addEventListener('pointerup',()=>{if(tm&&Date.now()-t0<1300){stop();msg(window.ft?ft('hold'):'')}});
  b.addEventListener('pointerleave',stop);b.addEventListener('pointercancel',stop);
  b.addEventListener('contextmenu',e=>e.preventDefault());
})();

let loginBusy=false;
$('lform').onsubmit=async ev=>{
  ev.preventDefault();
  const c={email:$('email').value.trim(),password:$('pass').value,server:$('server').value.trim()};
  if(!c.email||!c.password||!c.server||loginBusy)return;
  loginBusy=true;
  try{
    msg(t('logging'));
    await connect(c);
    try{localStorage.setItem('tc_server',c.server)}catch(e){}
    setTimeout(()=>{$('pass').value=''},1500);
    start();
  }catch(e){
    msg(errText(e));
  }finally{loginBusy=false}
};

/* ENTRA CON FACE ID: apre la tastiera sul campo email. Sopra la tastiera iPhone propone l'account salvato
   nel portachiavi; lo tocchi, fai il Face ID, iPhone riempie email e password e l'app entra da sola. */
function submitLogin(){const f=$('lform');if(f.requestSubmit)f.requestSubmit();else $('go').click()}
function afLogin(){
  if($('email').value&&$('pass').value&&$('server').value){submitLogin();return}
  $('email').focus();
  msg(t('afhint'));
}
let afTimer=0;
const afLen={email:0,pass:0};
/* entra da solo solo se il testo arriva tutto insieme (portachiavi di iPhone o incolla), mai mentre scrivi lettera per lettera */
function afCheck(e){
  const el=e.target,len=el.value.length,jump=len-afLen[el.id];
  afLen[el.id]=len;
  const it=e.inputType||'';
  let auto;
  if(e.type==='change')auto=jump>1;
  else auto=it==='insertReplacementText'||it==='insertFromPaste'||(it===''&&jump>1);
  if(!auto)return;
  clearTimeout(afTimer);
  afTimer=setTimeout(()=>{
    if(!document.body.classList.contains('inapp')&&$('email').value&&$('pass').value&&$('server').value)submitLogin();
  },450);
}
['email','pass'].forEach(id=>{$(id).addEventListener('input',afCheck);$(id).addEventListener('change',afCheck)});

refreshFid();
/* il server non e' un dato segreto: l'app lo ricorda */
try{const sv=localStorage.getItem('tc_server');if(sv&&!$('server').value)$('server').value=sv}catch(e){}
/* all'apertura, se c'e' un accesso salvato, chiede il Face ID appena finisce l'animazione */
(function(){
  const snap=takeSnap();
  if(snap&&snap.tok){
    tok=snap.tok;accNum=snap.accNum;accId=snap.accId;res=snap.res||res;cur=snap.cur||null;tab=snap.tab||'wl';
    window.__resume=true;
    if(snap.fr)friendMode(snap.fr);
    try{sessionStorage.removeItem('noAuto')}catch(e){}
    loadInstruments().then(start).catch(e=>{if(e&&e.status===401){if(FRIEND)friendLost();else sessionLost()}else msg(e.message)});
    return;
  }
  let na=false;try{na=sessionStorage.getItem('noAuto')==='1';sessionStorage.removeItem('noAuto')}catch(e){}
  if(na||!hasSaved()||!fidOK())return;
  let n=0;
  const w=setInterval(()=>{
    n++;
    if(!document.getElementById('splash')||n>200){
      clearInterval(w);
      /* all'apertura niente richieste automatiche: iPhone vuole un tocco per aprire la tastiera */
    }
  },100);
})();


/* ---------- tema ed esci ---------- */
function setTheme(th){
  document.documentElement.dataset.theme=th;
  try{localStorage.setItem('theme',th)}catch(e){}
  const m=document.querySelector('meta[name="theme-color"]');if(m)m.content=themeVar('--bg');
  if(chart){try{chart.applyOptions(chartOpts());applyCS()}catch(e){}}
  restyleSeries();
  tint();
  drawSpark();
}
/* esci: torna al login. L'accesso salvato con Face ID resta, si rientra col pulsante */
function logout(){
  try{sessionStorage.setItem('noSplash','1');sessionStorage.setItem('noAuto','1');sessionStorage.setItem('noAutoF','1')}catch(e){}
  location.reload();
}

/* ---------- ripresa dopo un aggiornamento ----------
   Salva solo il token temporaneo (non email ne' password) per il tempo del ricaricamento. */
function saveSnap(){
  try{sessionStorage.setItem('tc_snap',JSON.stringify({tok,accNum,accId,res,cur,tab,fr:FRIEND}))}catch(e){}
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

/* iPhone, nelle app della Home con barra di stato trasparente, a volte disegna l'app piu' corta dello schermo
   (fascia nera in basso, fuori dall'app). In quel caso il bordo in basso della parte visibile non ha la barra
   della Home sopra, quindi le barre possono scendere quasi fino al fondo. */
const topProbe=document.createElement('div');
topProbe.style.cssText='position:fixed;top:0;left:0;width:0;height:env(safe-area-inset-top,0px);visibility:hidden;pointer-events:none';
document.body.appendChild(topProbe);
function fixViewport(){
  let gap=false;
  try{
    const portrait=window.innerHeight>window.innerWidth;
    const standalone=navigator.standalone===true||matchMedia('(display-mode: standalone)').matches;
    const missing=screen.height-window.innerHeight,top=topProbe.getBoundingClientRect().height;
    gap=standalone&&portrait&&missing>20&&missing<120&&top>20;
  }catch(e){}
  document.documentElement.classList.toggle('vgap',gap);
}
fixViewport();
window.addEventListener('resize',fixViewport);
window.addEventListener('orientationchange',()=>setTimeout(fixViewport,300));

/* vibrazione leggera ai tocchi: iPhone non permette di vibrare ai siti,
   si usa il "clic" degli interruttori di iOS (da iOS 18); altrove navigator.vibrate */
const haptic=(()=>{
  let lab=null;
  try{
    lab=document.createElement('label');lab.setAttribute('aria-hidden','true');lab.style.display='none';
    const sw=document.createElement('input');sw.type='checkbox';sw.setAttribute('switch','');sw.tabIndex=-1;
    lab.appendChild(sw);document.body.appendChild(lab);
  }catch(e){}
  return()=>{try{if(navigator.vibrate)navigator.vibrate(10);else if(lab)lab.click()}catch(e){}};
})();
document.addEventListener('click',e=>{
  const el=e.target&&e.target.closest&&e.target.closest('button');
  if(el&&!el.disabled)haptic();
},true);

/* =====================================================================
   STRUMENTI DI DISEGNO
   I disegni stanno su un livello trasparente sopra il grafico e sono
   salvati in tempo/prezzo, per simbolo: si vedono su tutti i timeframe.
   ===================================================================== */
var DCOL=['#2962ff','#f23645','#22ab94','#ff9800','#9c27b0','#e0e0e0'];
var DTOOLS=[
  {sec:'sec_trend',items:['trend','channel']},
  {sec:'sec_fore',items:['long','short']},
  {sec:'sec_geo',items:['brush','arrow','rect','path','ellipse']},
  {sec:'sec_ann',items:['text','note']}
];
var DICON={
  trend:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="5" cy="19" r="1.8"/><circle cx="19" cy="5" r="1.8"/><path d="M6.3 17.7L17.7 6.3"/></svg>',
  channel:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M4 15L15 4M9 20L20 9"/><circle cx="4" cy="15" r="1.6"/><circle cx="15" cy="4" r="1.6"/><circle cx="14.5" cy="14.5" r="1.6"/></svg>',
  long:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="4" cy="5" r="1.5"/><path d="M6 5h14M4 12h16M6 19h14"/><circle cx="4" cy="19" r="1.5"/><path d="M12 10V7M10.5 8.5L12 7l1.5 1.5"/></svg>',
  short:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="4" cy="5" r="1.5"/><path d="M6 5h14M4 12h16M6 19h14"/><circle cx="4" cy="19" r="1.5"/><path d="M12 14v3M10.5 15.5L12 17l1.5-1.5"/></svg>',
  brush:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20c2.5 0 4.5-1.2 4.5-3.4 0-1.5-1-2-2.3-2.6C5 13.4 5.5 11 8 11c1.3 0 2 .7 2.5 1.6L19 4"/></svg>',
  arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="19" r="1.8"/><path d="M6.3 17.7L18 6"/><path d="M12 6h6v6"/></svg>',
  rect:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="5" y="5" width="14" height="14"/><circle cx="5" cy="5" r="1.6"/><circle cx="19" cy="19" r="1.6"/></svg>',
  path:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l5-6 4 4 8-8"/><path d="M15 7h5v5"/></svg>',
  ellipse:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><ellipse cx="12" cy="12" rx="9" ry="6"/></svg>',
  text:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6 5h12M12 5v14M10 19h4"/></svg>',
  note:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><rect x="5" y="3" width="14" height="11" rx="1.5"/><path d="M9 6.5h6M12 6.5V11M12 14v4"/><circle cx="12" cy="19.6" r="1.3"/></svg>'
};
var drawings=[],dSel=null,dMode='idle',dTool=null,dTemp=null,dStage=0,dDown=null,dDrag=null,dInit=false,dFor=null;
var dcv=$('draw'),dctx=dcv.getContext('2d');

function dKey(){return 'tc_draw_'+cur}
function dLoad(){try{drawings=JSON.parse(localStorage.getItem(dKey()))||[]}catch(e){drawings=[]}dSel=null;dTemp=null;dFor=cur}
function dSave(){try{localStorage.setItem(dKey(),JSON.stringify(drawings))}catch(e){}}
function fgCol(){return themeVar('--fg')||'#e0e0e0'}

/* ---- da tempo/prezzo a pixel e ritorno ---- */
var barTimes=[],barRef=null,barLen=-1;
function btimes(){
  if(barRef!==lastBars||barLen!==lastBars.length){
    barRef=lastBars;barLen=lastBars.length;
    const off=-new Date().getTimezoneOffset()*60;
    barTimes=lastBars.map(b=>Math.floor(b.t/1000)+off);
  }
  return barTimes;
}
function tToL(t){
  const a=btimes(),n=a.length,per=SECS[res];if(!n)return null;
  if(t>=a[n-1])return n-1+(t-a[n-1])/per;
  if(t<=a[0])return (t-a[0])/per;
  let lo=0,hi=n-1;
  while(hi-lo>1){const m=(lo+hi)>>1;if(a[m]<=t)lo=m;else hi=m}
  return lo+(t-a[lo])/((a[hi]-a[lo])||per);
}
function lToT(l){
  const a=btimes(),n=a.length,per=SECS[res];if(!n)return null;
  if(l>=n-1)return a[n-1]+(l-(n-1))*per;
  if(l<=0)return a[0]+l*per;
  const i=Math.floor(l);return a[i]+(l-i)*(a[i+1]-a[i]);
}
function X(t){const l=tToL(t);if(l==null)return null;const x=chart.timeScale().logicalToCoordinate(l);return x==null?null:x}
function Y(p){const y=series.priceToCoordinate(p);return y==null?null:y}
function px(q){return{x:X(q.t),y:Y(q.p)}}
function toTP(x,y){
  const l=chart.timeScale().coordinateToLogical(x),p=series.coordinateToPrice(y);
  if(l==null||p==null)return null;
  return{t:lToT(l),p:+p};
}

/* ---- disegno sul livello ---- */
function line(c,a,b){c.beginPath();c.moveTo(a.x,a.y);c.lineTo(b.x,b.y);c.stroke()}
function arrowHead(c,a,b,s){
  const ang=Math.atan2(b.y-a.y,b.x-a.x),L=s||12;
  c.beginPath();c.moveTo(b.x,b.y);
  c.lineTo(b.x-L*Math.cos(ang-0.45),b.y-L*Math.sin(ang-0.45));
  c.lineTo(b.x-L*Math.cos(ang+0.45),b.y-L*Math.sin(ang+0.45));
  c.closePath();c.fill();
}
function poly(c,P){c.beginPath();P.forEach((q,i)=>i?c.lineTo(q.x,q.y):c.moveTo(q.x,q.y));c.stroke()}
function priceOnLine(a,b,t){return b.t===a.t?a.p:a.p+(b.p-a.p)*(t-a.t)/(b.t-a.t)}
function rrect(c,x,y,w,h,r){c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath()}
function label(c,txt,x,y,bg,fg,align){
  c.font='600 12px -apple-system,system-ui,sans-serif';
  const w=c.measureText(txt).width+12,h=20;
  let lx=align==='center'?x-w/2:x;
  rrect(c,lx,y-h/2,w,h,4);c.fillStyle=bg;c.fill();
  c.fillStyle=fg;c.textBaseline='middle';c.fillText(txt,lx+6,y+0.5);
}
function posGeom(d){
  const x1=X(d.pts[0].t),x2=X(d.t2),yE=Y(d.pts[0].p),yT=Y(d.tp),yS=Y(d.sl);
  if([x1,x2,yE,yT,yS].some(v=>v==null))return null;
  return{x1,x2,yE,yT,yS};
}
function noteBox(c,d,P){
  c.font='500 13px -apple-system,system-ui,sans-serif';
  const lines=String(d.text||'').split('\n').slice(0,6),w=Math.min(220,Math.max(...lines.map(s=>c.measureText(s).width))+16),h=lines.length*17+12;
  return{x:P.x-w/2,y:P.y-18-h,w,h,lines};
}
function dRender(c,d,sel){
  const col=d.color||'#2962ff';
  c.lineWidth=2;c.strokeStyle=col;c.fillStyle=col;c.lineJoin='round';c.lineCap='round';c.setLineDash([]);c.globalAlpha=1;
  if(d.type==='long'||d.type==='short'){
    const g=posGeom(d);if(!g)return;
    const L=Math.min(g.x1,g.x2),R=Math.max(g.x1,g.x2),w=Math.max(2,R-L);
    const up=themeVar('--up'),dn=themeVar('--down');
    c.globalAlpha=.22;c.fillStyle=up;c.fillRect(L,Math.min(g.yE,g.yT),w,Math.abs(g.yT-g.yE));
    c.fillStyle=dn;c.fillRect(L,Math.min(g.yE,g.yS),w,Math.abs(g.yS-g.yE));c.globalAlpha=1;
    c.lineWidth=1.5;c.strokeStyle=up;line(c,{x:L,y:g.yT},{x:R,y:g.yT});
    c.strokeStyle=dn;line(c,{x:L,y:g.yS},{x:R,y:g.yS});
    c.strokeStyle=fgCol();line(c,{x:L,y:g.yE},{x:R,y:g.yE});
    const e=d.pts[0].p,dt=d.tp-e,ds=d.sl-e,rr=Math.abs(ds)?Math.abs(dt/ds):0,mid=(L+R)/2;
    label(c,t('target')+': '+fmt(d.tp,dec)+'  ('+fmtSigned(dt,dec)+'  '+fmtSigned(dt/e*100,2)+'%)',mid,g.yT+(g.yT<g.yE?-13:13),up,'#fff','center');
    label(c,t('stop')+': '+fmt(d.sl,dec)+'  ('+fmtSigned(ds,dec)+'  '+fmtSigned(ds/e*100,2)+'%)',mid,g.yS+(g.yS>g.yE?13:-13),dn,'#fff','center');
    label(c,'R/R '+fmt(rr,2),mid,g.yE,themeVar('--surf2')||'#333',fgCol(),'center');
  }else{
    const P=d.pts.map(px);
    if(P.some(q=>q.x==null||q.y==null))return;
    switch(d.type){
      case 'trend':line(c,P[0],P[1]);break;
      case 'arrow':line(c,P[0],P[1]);arrowHead(c,P[0],P[1]);break;
      case 'rect':{const x=Math.min(P[0].x,P[1].x),y=Math.min(P[0].y,P[1].y),w=Math.abs(P[1].x-P[0].x),h=Math.abs(P[1].y-P[0].y);c.globalAlpha=.16;c.fillRect(x,y,w,h);c.globalAlpha=1;c.strokeRect(x,y,w,h);break}
      case 'ellipse':{const cx=(P[0].x+P[1].x)/2,cy=(P[0].y+P[1].y)/2,rx=Math.abs(P[1].x-P[0].x)/2,ry=Math.abs(P[1].y-P[0].y)/2;c.beginPath();c.ellipse(cx,cy,Math.max(rx,1),Math.max(ry,1),0,0,7);c.globalAlpha=.14;c.fill();c.globalAlpha=1;c.stroke();break}
      case 'channel':{
        line(c,P[0],P[1]);
        if(d.pts.length>2){
          const off=d.pts[2].p-priceOnLine(d.pts[0],d.pts[1],d.pts[2].t);
          const Q0=px({t:d.pts[0].t,p:d.pts[0].p+off}),Q1=px({t:d.pts[1].t,p:d.pts[1].p+off});
          if(Q0.x==null||Q0.y==null||Q1.y==null)break;
          c.globalAlpha=.12;c.beginPath();c.moveTo(P[0].x,P[0].y);c.lineTo(P[1].x,P[1].y);c.lineTo(Q1.x,Q1.y);c.lineTo(Q0.x,Q0.y);c.closePath();c.fill();c.globalAlpha=1;
          line(c,Q0,Q1);c.setLineDash([5,5]);c.lineWidth=1;line(c,{x:P[0].x,y:(P[0].y+Q0.y)/2},{x:P[1].x,y:(P[1].y+Q1.y)/2});c.setLineDash([]);
        }
        break;
      }
      case 'brush':poly(c,P);break;
      case 'path':poly(c,P);if(P.length>1)arrowHead(c,P[P.length-2],P[P.length-1]);break;
      case 'text':c.font='600 16px -apple-system,system-ui,sans-serif';c.textBaseline='bottom';String(d.text||'').split('\n').forEach((s,i)=>c.fillText(s,P[0].x,P[0].y+i*19));break;
      case 'note':{
        const b=noteBox(c,d,P[0]);
        c.beginPath();c.arc(P[0].x,P[0].y,4,0,7);c.fill();
        line(c,P[0],{x:P[0].x,y:b.y+b.h});
        rrect(c,b.x,b.y,b.w,b.h,6);c.fill();
        c.fillStyle='#fff';c.textBaseline='top';b.lines.forEach((s,i)=>c.fillText(s,b.x+8,b.y+6+i*17));
        break;
      }
    }
  }
  if(sel)dHandles(d).forEach(h=>{c.beginPath();c.arc(h.x,h.y,7,0,7);c.fillStyle=themeVar('--bg')||'#000';c.fill();c.lineWidth=2;c.strokeStyle=col;c.stroke()});
}

/* ---- maniglie e tocchi ---- */
function dHandles(d){
  if(d.type==='long'||d.type==='short'){
    const g=posGeom(d);if(!g)return[];
    return[
      {x:g.x1,y:g.yE,set:q=>{const w=d.t2-d.pts[0].t;d.pts[0]={t:q.t,p:q.p};d.t2=q.t+w}},
      {x:g.x1,y:g.yT,set:q=>{d.tp=q.p}},
      {x:g.x1,y:g.yS,set:q=>{d.sl=q.p}},
      {x:g.x2,y:g.yE,set:q=>{d.t2=q.t}}
    ];
  }
  if(d.type==='brush')return[];
  const out=[];
  d.pts.forEach((q,i)=>{const P=px(q);if(P.x!=null&&P.y!=null)out.push({x:P.x,y:P.y,set:v=>{d.pts[i]={t:v.t,p:v.p}}})});
  return out;
}
function segD(x,y,a,b){
  const dx=b.x-a.x,dy=b.y-a.y,L=dx*dx+dy*dy;
  let u=L?((x-a.x)*dx+(y-a.y)*dy)/L:0;u=Math.max(0,Math.min(1,u));
  return Math.hypot(x-(a.x+u*dx),y-(a.y+u*dy));
}
function dHit(d,x,y){
  const T=14;
  if(d.type==='long'||d.type==='short'){
    const g=posGeom(d);if(!g)return false;
    const L=Math.min(g.x1,g.x2),R=Math.max(g.x1,g.x2),top=Math.min(g.yT,g.yS),bot=Math.max(g.yT,g.yS);
    return x>=L-T&&x<=R+T&&y>=top-T&&y<=bot+T;
  }
  const P=d.pts.map(px);if(P.some(q=>q.x==null||q.y==null))return false;
  switch(d.type){
    case 'trend':case 'arrow':return segD(x,y,P[0],P[1])<T;
    case 'rect':{const L=Math.min(P[0].x,P[1].x),R=Math.max(P[0].x,P[1].x),Tp=Math.min(P[0].y,P[1].y),B=Math.max(P[0].y,P[1].y);return x>=L-T&&x<=R+T&&y>=Tp-T&&y<=B+T}
    case 'ellipse':{const cx=(P[0].x+P[1].x)/2,cy=(P[0].y+P[1].y)/2,rx=Math.abs(P[1].x-P[0].x)/2+T,ry=Math.abs(P[1].y-P[0].y)/2+T;return((x-cx)/rx)**2+((y-cy)/ry)**2<=1}
    case 'channel':{
      if(segD(x,y,P[0],P[1])<T)return true;
      if(d.pts.length<3)return false;
      const off=d.pts[2].p-priceOnLine(d.pts[0],d.pts[1],d.pts[2].t);
      const Q0=px({t:d.pts[0].t,p:d.pts[0].p+off}),Q1=px({t:d.pts[1].t,p:d.pts[1].p+off});
      if(Q0.y==null||Q1.y==null)return false;
      if(segD(x,y,Q0,Q1)<T)return true;
      const L=Math.min(P[0].x,P[1].x),R=Math.max(P[0].x,P[1].x);
      if(x<L||x>R)return false;
      const u=(x-P[0].x)/((P[1].x-P[0].x)||1),y1=P[0].y+u*(P[1].y-P[0].y),y2=Q0.y+u*(Q1.y-Q0.y);
      return y>=Math.min(y1,y2)&&y<=Math.max(y1,y2);
    }
    case 'brush':case 'path':for(let i=1;i<P.length;i++)if(segD(x,y,P[i-1],P[i])<T)return true;return false;
    case 'text':{dctx.font='600 16px -apple-system,system-ui,sans-serif';const ls=String(d.text||'').split('\n'),w=Math.max(...ls.map(s=>dctx.measureText(s).width));return x>=P[0].x-T&&x<=P[0].x+w+T&&y>=P[0].y-20-T&&y<=P[0].y+(ls.length-1)*19+T}
    case 'note':{const b=noteBox(dctx,d,P[0]);return(x>=b.x-T&&x<=b.x+b.w+T&&y>=b.y-T&&y<=P[0].y+T)}
  }
  return false;
}
function dMove(d,o,dt,dp){
  if(d.type==='long'||d.type==='short'){
    d.pts=[{t:o.pts[0].t+dt,p:o.pts[0].p+dp}];d.t2=o.t2+dt;d.tp=o.tp+dp;d.sl=o.sl+dp;
  }else d.pts=o.pts.map(q=>({t:q.t+dt,p:q.p+dp}));
}

/* ---- stato: libero, sto disegnando, sto modificando, scelgo la candela del replay ---- */
function setMode(m){
  dMode=m;
  const active=m==='place'||m==='edit';
  dcv.style.pointerEvents=active?'auto':'none';
  try{chart.applyOptions({handleScroll:!active,handleScale:!active})}catch(e){}
  $('dban').hidden=!(m==='place'||m==='pick');
  $('dedit').hidden=m!=='edit';
  if(m==='edit')renderEdit();
}
function banner(txt,showDone){
  $('dbantxt').textContent=txt;
  $('dbdone').hidden=!showDone;
  $('dbdone').textContent=t('done');
  $('dbcancel').textContent=t('cancel');
}
function hintFor(){
  if(dTool==='brush')return t('h_brush');
  if(dTool==='path')return t('h_path');
  if(['text','note','long','short'].includes(dTool))return t('h_one');
  if(dStage>=4)return t('h_p3');
  if(dStage===2)return t('h_p2');
  return t('h_p1');
}
function startTool(tool){
  closeSheet();closeHub();
  if(RP.on&&dMode==='pick')return;
  dTool=tool;dTemp=null;dStage=0;dSel=null;
  setMode('place');banner(hintFor(),tool==='path');
}
function cancelPlace(){
  dTemp=null;dStage=0;dTool=null;
  if(dMode==='pick'){
    setMode('idle');
    if(RP.on&&!RP.started)rpExit();
    else if(RP.on){lastBars=RP.full.slice(0,RP.idx+1);setSeriesData(lastBars);try{chart.timeScale().scrollToRealTime()}catch(e){}afterData()}
    return;
  }
  setMode('idle');
}
function finishTemp(){
  const d=dTemp;dTemp=null;dStage=0;dTool=null;
  if(!d)return setMode('idle');
  if(d.type==='path'){if(d.pts.length>2)d.pts.pop();if(d.pts.length<2)return setMode('idle')}
  d.id=Date.now()+Math.random();
  drawings.push(d);dSave();haptic();
  dSel=d;setMode('edit');
}
function newOf(type,q){
  const color=(type==='text')?fgCol():(type==='rect'||type==='ellipse')?'#9c27b0':'#2962ff';
  return{type,pts:[{t:q.t,p:q.p}],color};
}
function visSpan(){
  const h=$('chart').getBoundingClientRect().height,a=series.coordinateToPrice(h*0.15),b=series.coordinateToPrice(h*0.75);
  return(a!=null&&b!=null)?Math.abs(a-b):Math.abs(lastBars.length?lastBars[lastBars.length-1].c*0.01:1);
}
function makePosition(type,q){
  const span=visSpan(),per=SECS[res],sign=type==='long'?1:-1;
  return{type,pts:[{t:q.t,p:q.p}],t2:q.t+per*24,tp:q.p+sign*span*0.25,sl:q.p-sign*span*0.125,color:'#2962ff'};
}
function local(e){const r=dcv.getBoundingClientRect();return{x:e.clientX-r.left,y:e.clientY-r.top}}

dcv.addEventListener('pointerdown',e=>{
  e.preventDefault();
  const{x,y}=local(e),q=toTP(x,y);if(!q)return;
  try{dcv.setPointerCapture(e.pointerId)}catch(err){}
  dDown={x,y,moved:false};
  if(dMode==='pick')return;
  if(dMode==='edit'){
    const hs=dSel?dHandles(dSel):[];
    const h=hs.find(h=>Math.hypot(h.x-x,h.y-y)<22);
    if(h){dDrag={kind:'h',h};return}
    if(dSel&&dHit(dSel,x,y)){dDrag={kind:'body',q0:q,o:JSON.parse(JSON.stringify(dSel))};return}
    const other=[...drawings].reverse().find(d=>dHit(d,x,y));
    if(other){dSel=other;renderEdit();dDrag={kind:'body',q0:q,o:JSON.parse(JSON.stringify(other))};haptic();return}
    dSel=null;dDrag=null;setMode('idle');dDown=null;return;
  }
  if(dMode!=='place')return;
  const tl=dTool;
  if(tl==='brush'){dTemp=newOf('brush',q);return}
  if(tl==='path'){if(!dTemp)dTemp=newOf('path',q);else dTemp.pts[dTemp.pts.length-1]={...q};return}
  if(['text','note','long','short'].includes(tl))return;
  if(dStage===0){dTemp=newOf(tl,q);dTemp.pts.push({...q});dStage=1;return}
  if(dStage===2){dTemp.pts[1]={...q};dStage=3;return}
  if(dStage===4){dTemp.pts[2]={...q};dStage=5;return}
});
dcv.addEventListener('pointermove',e=>{
  if(!dDown)return;
  const{x,y}=local(e),q=toTP(x,y);if(!q)return;
  if(Math.hypot(x-dDown.x,y-dDown.y)>10)dDown.moved=true;
  if(dMode==='edit'&&dDrag){
    if(dDrag.kind==='h')dDrag.h.set(q);
    else dMove(dSel,dDrag.o,q.t-dDrag.q0.t,q.p-dDrag.q0.p);
    return;
  }
  if(dMode!=='place'||!dTemp)return;
  if(dTool==='brush'){const L=px(dTemp.pts[dTemp.pts.length-1]);if(L.x==null||Math.hypot(L.x-x,L.y-y)>3)dTemp.pts.push(q);return}
  if(dTool==='path'){dTemp.pts[dTemp.pts.length-1]=q;return}
  if(dStage===1||dStage===3)dTemp.pts[1]=q;
  else if(dStage===5)dTemp.pts[2]=q;
});
function dUp(e){
  if(!dDown)return;
  const{x,y}=local(e),q=toTP(x,y),moved=dDown.moved;dDown=null;
  if(dMode==='pick'){if(!moved)rpPickAt(x);return}
  if(dMode==='edit'){if(dDrag){dDrag=null;dSave()}return}
  if(dMode!=='place')return;
  const tl=dTool;
  if(tl==='brush'){if(dTemp&&dTemp.pts.length>1)finishTemp();else dTemp=null;return}
  if(tl==='path'){if(dTemp&&q)dTemp.pts.push({...q});return}
  if(!q)return;
  if(tl==='text'||tl==='note'){askText(tl,q,null);return}
  if(tl==='long'||tl==='short'){dTemp=makePosition(tl,q);finishTemp();return}
  if(dStage===1){
    if(moved)dStage=(tl==='channel')?4:6;
    else{dStage=2;banner(hintFor(),false);return}
  }else if(dStage===3)dStage=(tl==='channel')?4:6;
  else if(dStage===5)dStage=6;
  if(dStage===4){dTemp.pts[2]={...dTemp.pts[1]};banner(hintFor(),false);return}
  if(dStage===6)finishTemp();
}
dcv.addEventListener('pointerup',dUp);
dcv.addEventListener('pointercancel',()=>{dDown=null;dDrag=null});

/* tocco sul grafico quando non stai disegnando: seleziona il disegno toccato */
function dClick(param){
  if(dMode==='pick'&&param&&param.point){
    try{
      const ts=chart.timeScale(),g=rpGuideX();if(!g)return;
      const d=Math.round(ts.coordinateToLogical(param.point.x))-g.i,r=ts.getVisibleLogicalRange();
      if(d&&r)ts.setVisibleLogicalRange({from:r.from+d,to:r.to+d});
    }catch(e){}
    return;
  }
  if(dMode!=='idle'||!param||!param.point)return;
  const{x,y}=param.point;
  const d=[...drawings].reverse().find(d=>dHit(d,x,y));
  if(d){dSel=d;haptic();setMode('edit')}
}

/* testo e note */
function askText(type,q,d){
  openSheet(s=>{
    shEl(s,'sh-t',t(type==='note'?'d_note':'d_text'));
    const ta=document.createElement('textarea');ta.id='dtxt';ta.rows=3;ta.placeholder=t('txtph');ta.value=d?d.text:'';
    s.appendChild(ta);
    const row=document.createElement('div');row.className='chips';
    const ok=document.createElement('button');ok.className='chip on';ok.textContent=t('savebtn');
    const no=document.createElement('button');no.className='chip';no.textContent=t('cancel');
    ok.onclick=()=>{
      const v=ta.value.trim();closeSheet();
      if(d){if(v){d.text=v;dSave()}renderEdit();return}
      if(!v){cancelPlace();return}
      dTemp=newOf(type,q);dTemp.text=v;if(type==='note')dTemp.color='#2962ff';finishTemp();
    };
    no.onclick=()=>{closeSheet();if(!d)cancelPlace()};
    row.appendChild(ok);row.appendChild(no);s.appendChild(row);
    setTimeout(()=>{try{ta.focus()}catch(e){}},250);
  });
}

/* barra in alto quando un disegno e' selezionato */
function renderEdit(){
  const b=$('dedit');b.innerHTML='';
  if(!dSel)return;
  const mk=(html,lab,fn,cls)=>{const x=document.createElement('button');x.className='dbtn'+(cls?' '+cls:'');x.innerHTML=html;x.setAttribute('aria-label',lab);x.onclick=fn;b.appendChild(x);return x};
  if(dSel.type!=='long'&&dSel.type!=='short'){
    const dot=mk('<span class="dot"></span>',t('color'),()=>{const i=DCOL.indexOf(dSel.color);dSel.color=DCOL[(i+1)%DCOL.length];dSave();renderEdit()});
    dot.firstChild.style.background=dSel.color;
  }
  if(dSel.type==='text'||dSel.type==='note')mk(esc(t('edtext')),t('edtext'),()=>askText(dSel.type,null,dSel),'wide');
  mk('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/></svg>',t('del'),()=>{drawings=drawings.filter(x=>x!==dSel);dSel=null;dSave();setMode('idle')},'danger');
  mk(esc(t('ok')),t('ok'),()=>{dSel=null;setMode('idle')},'wide on');
}

/* foglio con gli strumenti, come su TradingView */
function openDrawTools(){
  openSheet(s=>{
    shEl(s,'sh-t',t('tools'));
    DTOOLS.forEach(g=>{
      shEl(s,'sh-l',t(g.sec));
      const grid=document.createElement('div');grid.className='tgrid';
      g.items.forEach(k=>{
        const b=document.createElement('button');b.className='tile';
        b.innerHTML=DICON[k]+'<span></span>';b.lastChild.textContent=t('d_'+k);
        b.onclick=()=>startTool(k);grid.appendChild(b);
      });
      s.appendChild(grid);
    });
    if(drawings.length){
      shEl(s,'sh-sep','');
      shItem(s,t('delall')+' ('+cur+')',{danger:true,on:()=>{drawings=[];dSel=null;dSave();setMode('idle');closeSheet()}});
    }
  });
}

/* disegna a ogni fotogramma, cosi' segue scorrimento e zoom del grafico */
function dFrame(){
  requestAnimationFrame(dFrame);
  if(!chart||!series)return;
  if(!dInit){dInit=true;try{chart.subscribeClick(dClick)}catch(e){}}
  if(dFor!==cur&&cur)dLoad();
  if(tab!=='ch'||document.hidden)return;
  const r=$('chart').getBoundingClientRect(),dpr=window.devicePixelRatio||1;
  if(!r.width)return;
  const W=Math.round(r.width*dpr),H=Math.round(r.height*dpr);
  if(dcv.width!==W||dcv.height!==H){dcv.width=W;dcv.height=H;dcv.style.width=r.width+'px';dcv.style.height=r.height+'px'}
  const c=dctx;c.setTransform(dpr,0,0,dpr,0,0);c.clearRect(0,0,r.width,r.height);
  if(!lastBars.length)return;
  let pw=r.width,ph=r.height;
  try{pw-=chart.priceScale('right').width()}catch(e){pw-=70}
  try{ph-=chart.timeScale().height()}catch(e){ph-=28}
  c.save();c.beginPath();c.rect(0,0,pw,ph);c.clip();
  drawings.forEach(d=>{try{dRender(c,d,d===dSel)}catch(e){}});
  if(dTemp){try{dRender(c,dTemp,true)}catch(e){}}
  c.restore();
}
requestAnimationFrame(dFrame);

$('dbcancel').onclick=cancelPlace;
$('dbdone').onclick=()=>{
  if(dMode==='pick'){const g=rpGuideX();if(g)rpPickAt(g.x);return}
  if(dTool==='path')finishTemp();
};

/* =====================================================================
   BAR REPLAY
   ===================================================================== */
var RP={on:false,started:false,full:[],idx:0,timer:0,speed:1};
var RP_SPEEDS=[1,2,3,5,10];
var IC_PLAY='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg>';
var IC_PAUSE='<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6.5" y="5" width="4" height="14" rx="1"/><rect x="13.5" y="5" width="4" height="14" rx="1"/></svg>';
function rpStart(){
  closeSheet();if(HUB.open)closeHub();
  if(!lastBars.length||!series)return;
  if(dMode!=='idle'){dTemp=null;dSel=null;setMode('idle')}
  RP.on=true;RP.started=false;RP.full=lastBars.slice();RP.idx=RP.full.length-1;rpPause();
  $('chbar').hidden=true;$('rpbar').hidden=false;rpRender();
  rpPick();
}
function rpPick(){
  rpPause();
  /* se il replay era gia' partito rimetto tutte le candele, cosi' puoi scegliere anche piu' avanti */
  if(RP.started){lastBars=RP.full.slice();setSeriesData(lastBars);afterData()}
  setMode('pick');banner(t('rp_pick'),true);$('dbdone').textContent=t('rp_go');
  rpGuide();
}
/* linea fissa al centro: la candela sotto la linea e' quella da cui riparte il replay */
var RPG={x:null};
function rpGuideX(){
  const box=$('chartbox').getBoundingClientRect();
  let pw=0;try{pw=chart.priceScale('right').width()}catch(e){}
  const mid=(box.width-pw)/2,ts=chart.timeScale();
  const l=ts.coordinateToLogical(mid);if(l==null)return null;
  const n=RP.full.length,i=Math.max(0,Math.min(n-1,Math.round(l)));
  const x=ts.logicalToCoordinate(i);
  return{x:x==null?mid:x,i,pw,w:box.width,h:box.height};
}
function rpGuide(){
  const on=dMode==='pick'&&RP.on&&chart;
  $('rpline').hidden=!on;$('rpfade').hidden=!on;
  if(!on){RPG.x=null;return}
  requestAnimationFrame(rpGuide);
  const g=rpGuideX();if(!g)return;
  let th=26;try{th=chart.timeScale().height()}catch(e){}
  RPG.x=g.x;
  const L=$('rpline');L.style.left=g.x+'px';L.style.height=(g.h-th)+'px';
  const F=$('rpfade');F.style.left=(g.x+3)+'px';F.style.width=Math.max(0,g.w-g.pw-g.x-3)+'px';F.style.height=(g.h-th)+'px';
  const b=RP.full[g.i];
  if(b&&RPG.t!==b.t){
    RPG.t=b.t;
    $('rpdate').textContent=new Date(b.t).toLocaleString(LOC[lang]||'it-IT',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'});
    haptic();
  }
}
function rpPickAt(x){
  const l=chart.timeScale().coordinateToLogical(x);
  if(l==null)return;
  const n=RP.full.length;
  RP.idx=Math.max(Math.min(20,n-1),Math.min(n-2,Math.round(l)));
  RP.started=true;
  lastBars=RP.full.slice(0,RP.idx+1);afterData.prev=null;
  setSeriesData(lastBars);
  try{chart.timeScale().scrollToRealTime()}catch(e){}
  afterData();haptic();setMode('idle');rpRender();
}
function rpStep(){
  if(!RP.on||!RP.started)return;
  if(RP.idx>=RP.full.length-1){rpPause();msg(t('rp_end'));return}
  RP.idx++;
  const b=RP.full[RP.idx];
  lastBars=RP.full.slice(0,RP.idx+1);
  updSeries(lastBars,[b.t]);
  afterData();
}
function rpPlay(){
  if(!RP.started)return;
  if(RP.timer){rpPause();return}
  RP.timer=setInterval(rpStep,Math.round(1000/RP.speed));rpRender();
}
function rpPause(){if(RP.timer){clearInterval(RP.timer);RP.timer=0}rpRender()}
function rpSpeed(){const i=RP_SPEEDS.indexOf(RP.speed);RP.speed=RP_SPEEDS[(i+1)%RP_SPEEDS.length];if(RP.timer){clearInterval(RP.timer);RP.timer=setInterval(rpStep,Math.round(1000/RP.speed))}rpRender()}
function rpExit(){
  rpPause();RP.on=false;RP.started=false;
  if(dMode==='pick')setMode('idle');
  $('rpbar').hidden=true;$('chbar').hidden=false;
  lastBars=[];loadSafe();
}
function rpRender(){
  if(!$('rpplay'))return;
  $('rpplay').innerHTML=RP.timer?IC_PAUSE:IC_PLAY;
  $('rpplay').disabled=!RP.started;$('rpstep').disabled=!RP.started;
  $('rpspeed').textContent=RP.speed+'x';
}
$('replay').onclick=rpStart;
$('rpexit').onclick=rpExit;
$('rppick').onclick=rpPick;
$('rpplay').onclick=rpPlay;
$('rpstep').onclick=()=>{rpPause();rpStep()};
$('rpspeed').onclick=rpSpeed;


/* =====================================================================
   HUB DEL GRAFICO (tre puntini nel grafico)
   ===================================================================== */
var HUBT={
 it:{hub:"Hub del grafico",back:"Indietro",sec_layout:"Layout",sec_chart:"Grafico",sec_anal:"Analisi",sec_sym:"Simbolo",l_new:"Nuovo",l_save:"Salva",l_open:"Apri",c_type:"Tipologia di grafico",c_set:"Impostazioni grafico",c_tree:"Albero oggetti",a_ind:"Indicatori",a_cmp:"Confronta",a_rp:"Bar Replay",a_alert:"Alert",a_tech:"Tecnici",a_editor:"Editor script",s_det:"Dettagli simbolo",t_candles:"Candele",t_bars:"Barre",t_line:"Linea",t_area:"Area",t_ha:"Heikin Ashi",st_grid:"Griglia",st_pline:"Linea del prezzo",st_cd:"Conto alla rovescia della candela",st_wm:"Logo in filigrana",st_pal:"Colori delle candele",pal_tv:"Verde e rosso",pal_classic:"Classici",pal_mono:"Bianco e grigio",tr_empty:"Nessun disegno su questo simbolo.",dt_sym:"Simbolo",dt_desc:"Descrizione",dt_cat:"Categoria",dt_last:"Ultimo prezzo",dt_chg:"Variazione oggi",dt_open:"Apertura",dt_high:"Massimo",dt_low:"Minimo",dt_prev:"Chiusura precedente",dt_dec:"Decimali",al_new:"Nuovo alert",al_price:"Prezzo",al_add:"Crea alert",al_list:"Alert",al_none:"Nessun alert.",al_above:"sopra",al_below:"sotto",al_note:"Gli alert suonano solo mentre l'app è aperta.",al_fired:"Alert",al_done:"scattato",cm_hint:"Scegli un simbolo da confrontare: le due linee diventano in percentuale.",cm_off:"Togli il confronto",te_ssell:"Forte vendita",te_sell:"Vendita",te_neu:"Neutrale",te_buy:"Acquisto",te_sbuy:"Forte acquisto",te_osc:"Oscillatori",te_ma:"Medie mobili",te_few:"Servono più candele: prova un timeframe più basso.",te_sum:"Riepilogo",ly_name:"Nome del layout",ly_saved:"Layout salvato.",ly_none:"Nessun layout salvato.",ly_newq:"Cancellare i disegni di questo simbolo e tornare alle impostazioni iniziali del grafico?",ly_yes:"Sì, ricomincia",sh_fail:"Tieni premuta l'immagine per salvarla o condividerla.",draw:"Disegni",ed_soon:"L'editor per i tuoi script e gli indicatori arrivano nella prossima versione."},
 es:{hub:"Centro del gráfico",back:"Atrás",sec_layout:"Diseño",sec_chart:"Gráfico",sec_anal:"Análisis",sec_sym:"Símbolo",l_new:"Nuevo",l_save:"Guardar",l_open:"Abrir",c_type:"Tipo de gráfico",c_set:"Ajustes del gráfico",c_tree:"Árbol de objetos",a_ind:"Indicadores",a_cmp:"Comparar",a_rp:"Bar Replay",a_alert:"Alertas",a_tech:"Técnicos",a_editor:"Editor de scripts",s_det:"Detalles del símbolo",t_candles:"Velas",t_bars:"Barras",t_line:"Línea",t_area:"Área",t_ha:"Heikin Ashi",st_grid:"Cuadrícula",st_pline:"Línea de precio",st_cd:"Cuenta atrás de la vela",st_wm:"Logo de fondo",st_pal:"Colores de las velas",pal_tv:"Verde y rojo",pal_classic:"Clásicos",pal_mono:"Blanco y gris",tr_empty:"No hay dibujos en este símbolo.",dt_sym:"Símbolo",dt_desc:"Descripción",dt_cat:"Categoría",dt_last:"Último precio",dt_chg:"Variación hoy",dt_open:"Apertura",dt_high:"Máximo",dt_low:"Mínimo",dt_prev:"Cierre anterior",dt_dec:"Decimales",al_new:"Nueva alerta",al_price:"Precio",al_add:"Crear alerta",al_list:"Alertas",al_none:"No hay alertas.",al_above:"por encima",al_below:"por debajo",al_note:"Las alertas solo suenan con la app abierta.",al_fired:"Alerta",al_done:"activada",cm_hint:"Elige un símbolo para comparar: las dos líneas pasan a porcentaje.",cm_off:"Quitar comparación",te_ssell:"Venta fuerte",te_sell:"Venta",te_neu:"Neutral",te_buy:"Compra",te_sbuy:"Compra fuerte",te_osc:"Osciladores",te_ma:"Medias móviles",te_few:"Hacen falta más velas: prueba una temporalidad más baja.",te_sum:"Resumen",ly_name:"Nombre del diseño",ly_saved:"Diseño guardado.",ly_none:"No hay diseños guardados.",ly_newq:"¿Borrar los dibujos de este símbolo y volver a los ajustes iniciales del gráfico?",ly_yes:"Sí, empezar de nuevo",sh_fail:"Mantén pulsada la imagen para guardarla o compartirla.",draw:"Dibujos",ed_soon:"El editor de scripts y los indicadores llegan en la próxima versión."},
 en:{hub:"Chart hub",back:"Back",sec_layout:"Layout",sec_chart:"Chart",sec_anal:"Analysis",sec_sym:"Symbol",l_new:"New",l_save:"Save",l_open:"Open",c_type:"Chart type",c_set:"Chart settings",c_tree:"Object tree",a_ind:"Indicators",a_cmp:"Compare",a_rp:"Bar Replay",a_alert:"Alerts",a_tech:"Technicals",a_editor:"Script editor",s_det:"Symbol details",t_candles:"Candles",t_bars:"Bars",t_line:"Line",t_area:"Area",t_ha:"Heikin Ashi",st_grid:"Grid",st_pline:"Price line",st_cd:"Candle countdown",st_wm:"Watermark logo",st_pal:"Candle colors",pal_tv:"Green and red",pal_classic:"Classic",pal_mono:"White and grey",tr_empty:"No drawings on this symbol.",dt_sym:"Symbol",dt_desc:"Description",dt_cat:"Category",dt_last:"Last price",dt_chg:"Change today",dt_open:"Open",dt_high:"High",dt_low:"Low",dt_prev:"Previous close",dt_dec:"Decimals",al_new:"New alert",al_price:"Price",al_add:"Create alert",al_list:"Alerts",al_none:"No alerts.",al_above:"above",al_below:"below",al_note:"Alerts only ring while the app is open.",al_fired:"Alert",al_done:"triggered",cm_hint:"Pick a symbol to compare: both lines switch to percent.",cm_off:"Remove comparison",te_ssell:"Strong sell",te_sell:"Sell",te_neu:"Neutral",te_buy:"Buy",te_sbuy:"Strong buy",te_osc:"Oscillators",te_ma:"Moving averages",te_few:"More candles needed: try a lower timeframe.",te_sum:"Summary",ly_name:"Layout name",ly_saved:"Layout saved.",ly_none:"No saved layouts.",ly_newq:"Delete this symbol's drawings and reset the chart settings?",ly_yes:"Yes, start over",sh_fail:"Press and hold the image to save or share it.",draw:"Drawings",ed_soon:"The script editor and indicators come in the next version."},
 fr:{hub:"Hub du graphique",back:"Retour",sec_layout:"Mise en page",sec_chart:"Graphique",sec_anal:"Analyse",sec_sym:"Symbole",l_new:"Nouveau",l_save:"Enregistrer",l_open:"Ouvrir",c_type:"Type de graphique",c_set:"Réglages du graphique",c_tree:"Arbre des objets",a_ind:"Indicateurs",a_cmp:"Comparer",a_rp:"Bar Replay",a_alert:"Alertes",a_tech:"Techniques",a_editor:"Éditeur de scripts",s_det:"Détails du symbole",t_candles:"Bougies",t_bars:"Barres",t_line:"Ligne",t_area:"Aire",t_ha:"Heikin Ashi",st_grid:"Grille",st_pline:"Ligne de prix",st_cd:"Compte à rebours de la bougie",st_wm:"Logo en filigrane",st_pal:"Couleurs des bougies",pal_tv:"Vert et rouge",pal_classic:"Classiques",pal_mono:"Blanc et gris",tr_empty:"Aucun dessin sur ce symbole.",dt_sym:"Symbole",dt_desc:"Description",dt_cat:"Catégorie",dt_last:"Dernier prix",dt_chg:"Variation du jour",dt_open:"Ouverture",dt_high:"Plus haut",dt_low:"Plus bas",dt_prev:"Clôture précédente",dt_dec:"Décimales",al_new:"Nouvelle alerte",al_price:"Prix",al_add:"Créer l'alerte",al_list:"Alertes",al_none:"Aucune alerte.",al_above:"au-dessus",al_below:"en dessous",al_note:"Les alertes ne sonnent que quand l'app est ouverte.",al_fired:"Alerte",al_done:"déclenchée",cm_hint:"Choisis un symbole à comparer : les deux lignes passent en pourcentage.",cm_off:"Retirer la comparaison",te_ssell:"Vente forte",te_sell:"Vente",te_neu:"Neutre",te_buy:"Achat",te_sbuy:"Achat fort",te_osc:"Oscillateurs",te_ma:"Moyennes mobiles",te_few:"Il faut plus de bougies : essaie une unité de temps plus basse.",te_sum:"Résumé",ly_name:"Nom de la mise en page",ly_saved:"Mise en page enregistrée.",ly_none:"Aucune mise en page enregistrée.",ly_newq:"Supprimer les dessins de ce symbole et revenir aux réglages initiaux ?",ly_yes:"Oui, recommencer",sh_fail:"Appuie longuement sur l'image pour l'enregistrer ou la partager.",draw:"Dessins",ed_soon:"L'éditeur de scripts et les indicateurs arrivent dans la prochaine version."}
};
function th(k){return(HUBT[lang]&&HUBT[lang][k])||HUBT.it[k]||k}
function lsGet(k,d){try{const v=JSON.parse(localStorage.getItem(k));return v==null?d:v}catch(e){return d}}
function lsSet(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}

/* ---------- impostazioni e tipologia del grafico ---------- */
var CS_DEF={type:'candles',grid:true,pline:true,cd:true,wm:true,pal:'tv'};
var CS=Object.assign({},CS_DEF,lsGet('tc_chart',{}));
function saveCS(){lsSet('tc_chart',CS)}
function upDn(){
  if(CS.pal==='classic')return['#26a69a','#ef5350'];
  if(CS.pal==='mono'){const dark=(document.documentElement.dataset.theme||'dark')!=='light';return dark?['#e8e8e8','#5c5c5c']:['#1a1a1a','#a0a0a0']}
  return[themeVar('--up')||'#22ab94',themeVar('--down')||'#f23645'];
}
function makeSeries(){
  const[U,D]=upDn(),blue=themeVar('--blue')||'#2962ff';
  const base={lastValueVisible:false,priceLineVisible:CS.pline,priceLineStyle:1,priceLineWidth:1,priceLineColor:blue,priceFormat:{type:'price',precision:dec,minMove:Math.pow(10,-dec)}};
  if(CS.type==='bars')return chart.addBarSeries(Object.assign(base,{upColor:U,downColor:D,thinBars:false}));
  if(CS.type==='line')return chart.addLineSeries(Object.assign(base,{color:blue,lineWidth:2}));
  if(CS.type==='area')return chart.addAreaSeries(Object.assign(base,{lineColor:blue,topColor:'rgba(41, 98, 255, 0.35)',bottomColor:'rgba(41, 98, 255, 0.02)',lineWidth:2}));
  return chart.addCandlestickSeries(Object.assign(base,{upColor:U,downColor:D,borderVisible:false,wickUpColor:U,wickDownColor:D}));
}
function haList(list){
  const out=[];let po=0,pc=0;
  list.forEach((b,i)=>{const c=(b.o+b.h+b.l+b.c)/4,o=i?(po+pc)/2:(b.o+b.c)/2;out.push({t:b.t,o,h:Math.max(b.h,o,c),l:Math.min(b.l,o,c),c});po=o;pc=c});
  return out;
}
function ptOf(b){
  const time=toChart(b).time;
  if(CS.type==='line'||CS.type==='area')return{time,value:b.c};
  return{time,open:b.o,high:b.h,low:b.l,close:b.c};
}
function setSeriesData(list){
  const src=CS.type==='ha'?haList(list):list;
  series.setData(src.map(ptOf));
}
function updSeries(list,ts){
  const set=new Set(ts);
  const src=CS.type==='ha'?haList(list):list.slice(-Math.max(ts.length+2,3));
  src.forEach(b=>{if(set.has(b.t)){try{series.update(ptOf(b))}catch(e){}}});
}
function rebuildSeries(){
  if(!chart)return;
  try{chart.removeSeries(series)}catch(e){}
  series=makeSeries();
  if(lastBars.length)setSeriesData(lastBars);
  refreshAlertLines();
  applyCS();
}
function applyCS(){
  try{chart.applyOptions({grid:cvOpts().grid})}catch(e){}
  try{series.applyOptions({priceLineVisible:CS.pline})}catch(e){}
  $('wm').hidden=!CS.wm;
  tagText();
}
function restyleSeries(){if(series&&chart&&CS.pal==='mono')rebuildSeries()}

/* ---------- alert sul prezzo ---------- */
var ALERTS=lsGet('tc_alerts',[]),alertLines=[];
function saveAlerts(){lsSet('tc_alerts',ALERTS)}
function refreshAlertLines(){
  alertLines.forEach(l=>{try{series.removePriceLine(l)}catch(e){}});alertLines=[];
  if(!series)return;
  ALERTS.filter(a=>a.active&&a.sym===cur).forEach(a=>{try{alertLines.push(series.createPriceLine({price:a.price,color:'#ff9800',lineWidth:1,lineStyle:2,axisLabelVisible:true,title:'⏰'}))}catch(e){}});
}
var beepCtx=null;
function beep(){
  try{
    beepCtx=beepCtx||new (window.AudioContext||window.webkitAudioContext)();
    const o=beepCtx.createOscillator(),g=beepCtx.createGain();o.type='sine';o.frequency.value=880;
    g.gain.setValueAtTime(0.0001,beepCtx.currentTime);g.gain.exponentialRampToValueAtTime(0.25,beepCtx.currentTime+0.02);g.gain.exponentialRampToValueAtTime(0.0001,beepCtx.currentTime+0.5);
    o.connect(g);g.connect(beepCtx.destination);o.start();o.stop(beepCtx.currentTime+0.55);
  }catch(e){}
}
function checkAlerts(sym,price){
  if(price==null||!ALERTS.length)return;
  let hit=false;
  ALERTS.forEach(a=>{
    if(!a.active||a.sym!==sym)return;
    if((a.dir==='above'&&price>=a.price)||(a.dir==='below'&&price<=a.price)){
      a.active=false;hit=true;
      const d=(BYN[sym]&&QUOTE[sym])?QUOTE[sym].dec:dec;
      msg('⏰ '+th('al_fired')+' '+sym+' '+th(a.dir==='above'?'al_above':'al_below')+' '+fmt(a.price,d)+' — '+th('al_done'));
      haptic();beep();
    }
  });
  if(hit){saveAlerts();if(sym===cur)refreshAlertLines()}
}

/* ---------- confronto con un altro simbolo ---------- */
var CMP={sym:null,series:null,bars:[]};
async function cmpLoad(){
  if(!CMP.sym||!CMP.series)return;
  const it=BYN[CMP.sym];if(!it)return;
  const to=Date.now(),b=await barsFor(it,res,to-DAYS[res]*864e5,to);
  CMP.bars=b;
  try{CMP.series.setData(b.map(x=>({time:toChart(x).time,value:x.c})))}catch(e){}
}
function cmpSet(sym){
  if(CMP.series){try{chart.removeSeries(CMP.series)}catch(e){}CMP.series=null}
  CMP.sym=sym&&sym!==cur?sym:null;CMP.bars=[];
  try{chart.priceScale('right').applyOptions({mode:CMP.sym?2:0})}catch(e){}
  $('lgcmp').hidden=!CMP.sym;
  if(CMP.sym){
    $('lgcmp').textContent='＋ '+CMP.sym;
    CMP.series=chart.addLineSeries({color:'#ff9800',lineWidth:2,priceLineVisible:false,lastValueVisible:true});
    cmpLoad().catch(()=>{});
  }
}

/* ---------- tecnici: riepilogo di oscillatori e medie mobili ---------- */
function smaL(a,n){if(a.length<n)return null;let s=0;for(let i=a.length-n;i<a.length;i++)s+=a[i];return s/n}
function emaA(a,n){const k=2/(n+1);let e=null;return a.map(v=>e=e==null?v:v*k+e*(1-k))}
function emaL(a,n){return a.length<n?null:emaA(a,n).pop()}
function rsiL(a,n){if(a.length<n+1)return null;let g=0,l=0;for(let i=1;i<=n;i++){const d=a[i]-a[i-1];if(d>0)g+=d;else l-=d}g/=n;l/=n;for(let i=n+1;i<a.length;i++){const d=a[i]-a[i-1];g=(g*(n-1)+Math.max(d,0))/n;l=(l*(n-1)+Math.max(-d,0))/n}return l===0?100:100-100/(1+g/l)}
function technicals(){
  const B=lastBars;if(B.length<30)return null;
  const C=B.map(b=>b.c),last=C[C.length-1],osc=[],ma=[];
  const add=(arr,name,val,sig)=>arr.push({name,val,sig});
  const r=rsiL(C,14);if(r!=null)add(osc,'RSI (14)',r,r<30?1:r>70?-1:0);
  const kRaw=i=>{const w=B.slice(i-13,i+1),hh=Math.max(...w.map(b=>b.h)),ll=Math.min(...w.map(b=>b.l));return hh===ll?50:(B[i].c-ll)/(hh-ll)*100};
  if(B.length>=16){const n=B.length-1,k=(kRaw(n)+kRaw(n-1)+kRaw(n-2))/3;add(osc,'Stoch %K (14, 3)',k,k<20?1:k>80?-1:0)}
  if(B.length>=20){const tp=B.slice(-20).map(b=>(b.h+b.l+b.c)/3),m=tp.reduce((s,v)=>s+v,0)/20,md=tp.reduce((s,v)=>s+Math.abs(v-m),0)/20,cci=md?(tp[19]-m)/(0.015*md):0;add(osc,'CCI (20)',cci,cci<-100?1:cci>100?-1:0)}
  if(C.length>10){const mo=last-C[C.length-11];add(osc,'Momentum (10)',mo,mo>0?1:mo<0?-1:0)}
  if(C.length>=35){const m=emaA(C,12).map((v,i)=>v-emaA(C,26)[i]),s=emaA(m,9),mv=m[m.length-1],sv=s[s.length-1];add(osc,'MACD (12, 26)',mv,mv>sv?1:-1)}
  if(B.length>=14){const w=B.slice(-14),hh=Math.max(...w.map(b=>b.h)),ll=Math.min(...w.map(b=>b.l)),wr=hh===ll?-50:(hh-last)/(hh-ll)*-100;add(osc,'Williams %R (14)',wr,wr<-80?1:wr>-20?-1:0)}
  [10,20,30,50,100,200].forEach(n=>{
    const s=smaL(C,n);if(s!=null)add(ma,'SMA ('+n+')',s,last>s?1:last<s?-1:0);
    const e=emaL(C,n);if(e!=null)add(ma,'EMA ('+n+')',e,last>e?1:last<e?-1:0);
  });
  const all=osc.concat(ma),buy=all.filter(x=>x.sig>0).length,sell=all.filter(x=>x.sig<0).length,score=all.length?(buy-sell)/all.length:0;
  const verdict=score>0.5?'te_sbuy':score>0.1?'te_buy':score<-0.5?'te_ssell':score<-0.1?'te_sell':'te_neu';
  return{osc,ma,buy,sell,neu:all.length-buy-sell,score,verdict};
}
function gaugeSVG(score){
  const ang=Math.PI*(1-(score+1)/2),cx=110,cy=104,r=86;
  const seg=(a0,a1,col)=>{const p=a=>[cx+r*Math.cos(a),cy-r*Math.sin(a)];const[x0,y0]=p(a0),[x1,y1]=p(a1);return'<path d="M'+x0.toFixed(1)+' '+y0.toFixed(1)+' A'+r+' '+r+' 0 0 1 '+x1.toFixed(1)+' '+y1.toFixed(1)+'" stroke="'+col+'" stroke-width="14" fill="none"/>'};
  const cols=['#f23645','#f7838c','#8e8e93','#7fd3c5','#22ab94'];
  let s='<svg viewBox="0 0 220 120" width="220" height="120">';
  for(let i=0;i<5;i++)s+=seg(Math.PI-i*Math.PI/5-0.03,Math.PI-(i+1)*Math.PI/5+0.03,cols[i]);
  const nx=cx+(r-24)*Math.cos(ang),ny=cy-(r-24)*Math.sin(ang);
  s+='<line x1="'+cx+'" y1="'+cy+'" x2="'+nx.toFixed(1)+'" y2="'+ny.toFixed(1)+'" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><circle cx="'+cx+'" cy="'+cy+'" r="6" fill="currentColor"/></svg>';
  return s;
}

/* ---------- layout salvati ---------- */
var LAYOUTS=lsGet('tc_layouts',[]);
function saveLayouts(){lsSet('tc_layouts',LAYOUTS)}

/* ---------- immagine da condividere ---------- */
var shareLogo=new Image();shareLogo.src=LOGO_SRC;
function shareChart(){
  try{
    const box=$('chartbox').getBoundingClientRect(),dpr=2,W=Math.round(box.width),headH=74,footH=44,H=Math.round(box.height)+headH+footH;
    const cv=document.createElement('canvas');cv.width=W*dpr;cv.height=H*dpr;
    const c=cv.getContext('2d');c.scale(dpr,dpr);
    const cvr=cvRes(),dark=!cvLight();
    const g=c.createLinearGradient(0,0,0,H);g.addColorStop(0,cvr.c1);g.addColorStop(1,cvr.type==='solid'?cvr.c1:cvr.c2);c.fillStyle=g;c.fillRect(0,0,W,H);
    const it=BYN[cur],last=lastBars[lastBars.length-1],q=QUOTE[cur],fg=dark?'#f2f2f2':'#111';
    c.fillStyle=fg;c.font='600 18px -apple-system,system-ui,sans-serif';c.textBaseline='alphabetic';
    c.fillText(cur+' · '+res+(it?'  '+info(it).desc:''),14,30);
    if(last){
      c.font='600 22px -apple-system,system-ui,sans-serif';const ps=fmt(last.c,dec);c.fillText(ps,14,60);
      if(q){const dv=last.c-q.prev,pc=q.prev?dv/q.prev*100:0;c.font='500 15px -apple-system,system-ui,sans-serif';c.fillStyle=dv>=0?'#22ab94':'#f23645';c.fillText(fmtSigned(dv,dec)+'  '+fmtSigned(pc,2)+'%',14+c.measureText(ps).width*1.45+10,60)}
    }
    const shot=chart.takeScreenshot();
    c.drawImage(shot,0,headH,W,box.height);
    if(dcv.width)c.drawImage(dcv,0,headH,W,box.height);
    if(last&&!$('pxtag').hidden){
      const y=series.priceToCoordinate(last.c);
      if(y!=null){const txt=fmt(last.c,dec);c.font='500 13px -apple-system,system-ui,sans-serif';const tw=Math.max(c.measureText(txt).width+14,chart.priceScale('right').width());c.fillStyle='#2962ff';c.fillRect(W-tw,headH+y-11,tw,22);c.fillStyle='#fff';c.textBaseline='middle';c.fillText(txt,W-tw+7,headH+y);c.textBaseline='alphabetic'}
    }
    const fy=headH+box.height;
    c.save();if(!dark)c.filter='invert(1)';try{c.drawImage(shareLogo,14,fy+6,32,32)}catch(e){}c.restore();
    c.fillStyle=fg;c.font='700 15px -apple-system,system-ui,sans-serif';c.fillText('NexusCharts',52,fy+27);
    c.fillStyle=dark?'#8e8e93':'#6b6b70';c.font='13px -apple-system,system-ui,sans-serif';
    const ds=new Date().toLocaleString(LOC[lang]||'it-IT',{day:'2-digit',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'});
    c.fillText(ds,W-14-c.measureText(ds).width,fy+27);
    /* tutto sincrono fino alla condivisione: iPhone la permette solo subito dopo il tocco */
    /* JPEG e senza titolo: cosi' iPhone mostra l'anteprima dell'immagine nel foglio di condivisione */
    const url=cv.toDataURL('image/jpeg',0.93),bin=atob(url.split(',')[1]),arr=new Uint8Array(bin.length);
    for(let i=0;i<bin.length;i++)arr[i]=bin.charCodeAt(i);
    const file=new File([arr],'NexusCharts_'+cur+'_'+res+'.jpg',{type:'image/jpeg',lastModified:Date.now()});
    if(navigator.canShare&&navigator.canShare({files:[file]})){
      navigator.share({files:[file]}).catch(e=>{if(!e||e.name!=='AbortError')showShot(url)});
    }else showShot(url);
  }catch(e){msg(errText(e))}
}
function showShot(url){
  hubPage(th('l_save'),b=>{
    const im=document.createElement('img');im.src=url;im.alt='';im.style.cssText='display:block;width:calc(100% - 32px);margin:8px 16px;border-radius:14px';
    b.appendChild(im);shEl(b,'sh-note',th('sh_fail'));
  });
}

/* ---------- il pannello: si trascina su e giu', condividi e X ---------- */
var HUB={stack:[],y:0,open:false,mode:'hub'};
var HIC={
  new:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="15" height="14" rx="2"/><path d="M6 14l3-3 3 2 4-5M19 15v6M16 18h6"/></svg>',
  save:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a4 4 0 0 1-.5-8 6 6 0 0 1 11.6 1.5A3.5 3.5 0 0 1 17.5 18"/><path d="M12 12v8M9 15l3-3 3 3"/></svg>',
  open:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M3 6.5A1.5 1.5 0 0 1 4.5 5H10l2 2h7.5A1.5 1.5 0 0 1 21 8.5V18a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18z"/></svg>',
  type:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M7 3v4M7 15v6M17 4v5M17 17v3"/><rect x="5" y="7" width="4" height="8" rx="1"/><rect x="15" y="9" width="4" height="8" rx="1"/></svg>',
  set:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M12 2.8l8 4.6v9.2l-8 4.6-8-4.6V7.4z"/><circle cx="12" cy="12" r="3"/></svg>',
  tree:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/></svg>',
  ind:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 20h18M5 20v-5M9 20v-8M13 20v-6M17 20v-10"/><path d="M4 10l5-4 4 3 7-6"/></svg>',
  cmp:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/></svg>',
  rp:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M12 6l-8 6 8 6zM20 6l-8 6 8 6z"/></svg>',
  alert:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="12" cy="13" r="7"/><path d="M12 10v3.5l2 1.5M5 4L2.5 6.5M19 4l2.5 2.5"/></svg>',
  canvas:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a9 9 0 0 0 0 18c1.1 0 1.8-.9 1.8-1.9 0-.5-.2-.9-.5-1.3-.3-.3-.5-.8-.5-1.3 0-1 .8-1.8 1.8-1.8H17a4 4 0 0 0 4-4c0-4.3-4-7.7-9-7.7z"/><circle cx="7.5" cy="11" r="1.2" fill="currentColor"/><circle cx="10.5" cy="7.3" r="1.2" fill="currentColor"/><circle cx="15" cy="7.6" r="1.2" fill="currentColor"/></svg>',
  tech:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M4 17a8 8 0 1 1 16 0"/><path d="M12 17l4-5"/><circle cx="12" cy="17" r="1.4" fill="currentColor"/></svg>',
  ed:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/></svg>',
  det:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v6"/><circle cx="12" cy="7.6" r="1" fill="currentColor"/></svg>',
  share:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M8 7l4-4 4 4"/><path d="M7 11H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-1"/></svg>',
  back:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>'
};
function hubSetY(y,anim){const h=$('hub');h.style.transition=anim?'transform .28s cubic-bezier(.2,.8,.2,1)':'none';HUB.y=Math.max(0,y);h.style.transform='translateY('+HUB.y+'px)'}
function hubHalf(){return Math.round($('hub').getBoundingClientRect().height*0.42)}
function openHub(mode){
  mode=mode==='draw'?'draw':'hub';
  if(window.dMode&&dMode!=='idle'){dTemp=null;dSel=null;setMode('idle')}
  HUB.open=true;HUB.stack=[];HUB.mode=mode;
  $('hub').classList.toggle('draw',mode==='draw');
  $('hubbg').hidden=false;$('hub').hidden=false;
  hubSetY(window.innerHeight,false);
  hubRender();
  requestAnimationFrame(()=>requestAnimationFrame(()=>hubSetY(mode==='draw'?hubHalf():0,true)));
}
function closeHub(){
  if(!HUB.open)return;HUB.open=false;
  hubSetY($('hub').getBoundingClientRect().height+40,true);$('hubbg').hidden=true;
  setTimeout(()=>{if(!HUB.open)$('hub').hidden=true},300);
}
function hubPage(title,build){HUB.stack.push({title,build});hubRender()}
function hubBack(){HUB.stack.pop();hubRender()}
function hubRender(){
  const top=HUB.stack[HUB.stack.length-1];
  const dr=HUB.mode==='draw';
  $('hubtitle').textContent=top?top.title:(dr?th('draw'):th('hub'));
  const L=$('hubleft');L.innerHTML=top?HIC.back:HIC.share;L.setAttribute('aria-label',top?th('back'):'Share');
  L.style.visibility=!top&&dr?'hidden':'';
  const b=$('hubbody');b.innerHTML='';b.scrollTop=0;
  if(top)top.build(b);else if(dr)drawRoot(b);else hubRoot(b);
}
/* colori delle icone: ognuno richiama cosa fa la voce */
var HCOL={new:'#2dd4bf',save:'#3b82f6',open:'#f59e0b',type:'#fb923c',set:'#a1a1aa',canvas:'#e879f9',tree:'#a78bfa',det:'#38bdf8',ind:'#8b5cf6',cmp:'#06b6d4',rp:'#6366f1',alert:'#ef4444',tech:'#facc15',ed:'#22c55e'};
var DCOL2={trend:'#3b82f6',channel:'#6366f1',long:'#22c55e',short:'#ef4444',brush:'#f472b6',arrow:'#f97316',rect:'#eab308',path:'#14b8a6',ellipse:'#a78bfa',text:'#cbd5e1',note:'#fbbf24'};
function icTint(el,hex){
  if(!hex)return;
  const n=parseInt(hex.slice(1),16);
  el.style.setProperty('--ic',hex);
  el.style.setProperty('--icbg','rgba('+(n>>16&255)+','+(n>>8&255)+','+(n&255)+',.16)');
}
function tilesInto(b,cls,items){
  const g=document.createElement('div');g.className='htiles'+(cls?' '+cls:'');
  items.forEach(([ic,label,fn,dim])=>{
    const t=document.createElement('button');t.className='htile'+(dim?' dim':'');
    t.innerHTML='<i class="hic">'+HIC[ic]+'</i><span></span>';t.lastChild.textContent=label;t.onclick=fn;
    icTint(t,HCOL[ic]);g.appendChild(t);
  });
  b.appendChild(g);
}
function hubRoot(b){
  tilesInto(b,'three',[['new',th('l_new'),hubNew],['save',th('l_save'),()=>hubPage(th('l_save'),pageSave)],['open',th('l_open'),()=>hubPage(th('l_open'),pageOpen)]]);
  shEl(b,'sh-l',th('sec_chart'));
  tilesInto(b,'',[['type',th('c_type'),()=>hubPage(th('c_type'),pageType)],['set',th('c_set'),()=>hubPage(th('c_set'),pageSet)],['canvas',cvt('canvas'),()=>hubPage(cvt('canvas'),pageCanvas)],['tree',th('c_tree'),()=>hubPage(th('c_tree'),pageTree)],['det',th('s_det'),()=>hubPage(th('s_det'),pageDet)]]);
  shEl(b,'sh-l',th('sec_anal'));
  tilesInto(b,'',[
    ['ind',th('a_ind'),()=>hubPage(th('a_ind'),pageSoon)],
    ['cmp',th('a_cmp'),()=>hubPage(th('a_cmp'),pageCmp)],
    ['rp',th('a_rp'),()=>{closeHub();rpStart()}],
    ['alert',th('a_alert'),()=>hubPage(th('a_alert'),pageAlert)],
    ['tech',th('a_tech'),()=>hubPage(th('a_tech'),pageTech)],
    ['ed',th('a_editor'),()=>hubPage(th('a_editor'),pageSoon)]
  ]);
}
function rowKV(b,k,v,cls){const r=document.createElement('div');r.className='kv';const a=document.createElement('span');a.textContent=k;const c=document.createElement('span');c.textContent=v;if(cls)c.className=cls;r.appendChild(a);r.appendChild(c);b.appendChild(r)}
function pageSoon(b){shEl(b,'sh-note',th('ed_soon'))}
function pageType(b){
  [['candles','t_candles'],['bars','t_bars'],['line','t_line'],['area','t_area'],['ha','t_ha']].forEach(([k,lab])=>shItem(b,th(lab),{check:CS.type===k,on:()=>{CS.type=k;saveCS();rebuildSeries();hubRender()}}));
}
function sw(b,label,key,after){
  const r=document.createElement('label');r.className='swrow';
  const s=document.createElement('span');s.textContent=label;
  const i=document.createElement('input');i.type='checkbox';i.setAttribute('switch','');i.checked=!!CS[key];
  i.onchange=()=>{CS[key]=i.checked;saveCS();applyCS();if(after)after()};
  r.appendChild(s);r.appendChild(i);b.appendChild(r);
}
function pageSet(b){
  sw(b,th('st_grid'),'grid');sw(b,th('st_pline'),'pline');sw(b,th('st_cd'),'cd');sw(b,th('st_wm'),'wm');
  shEl(b,'sh-l',th('st_pal'));
  [['tv','pal_tv'],['classic','pal_classic'],['mono','pal_mono']].forEach(([k,lab])=>shItem(b,th(lab),{check:CS.pal===k,on:()=>{CS.pal=k;saveCS();rebuildSeries();hubRender()}}));
}
function pageTree(b){
  if(!drawings.length){shEl(b,'sh-note',th('tr_empty'));return}
  drawings.slice().reverse().forEach(d=>{
    const ic=document.createElement('span');ic.className='tic';ic.innerHTML=DICON[d.type]||'';ic.style.color=d.color||'';
    const del=document.createElement('button');del.className='addb';del.innerHTML='✕';del.setAttribute('aria-label',t('del'));
    del.onclick=e=>{e.stopPropagation();drawings=drawings.filter(x=>x!==d);if(dSel===d)dSel=null;dSave();hubRender()};
    shItem(b,t('d_'+d.type)+(d.text?' — '+d.text.slice(0,24):''),{left:ic,right:del,on:()=>{closeHub();dSel=d;setMode('edit')}});
  });
}
function pageDet(b){
  const it=BYN[cur];if(!it)return;
  const q=QUOTE[cur],last=lastBars.length?lastBars[lastBars.length-1].c:(q?q.last:null),inf=info(it),d=q?q.dec:dec;
  rowKV(b,th('dt_sym'),it.name);rowKV(b,th('dt_desc'),inf.desc||'—');rowKV(b,th('dt_cat'),t('cat_'+inf.cat));
  if(last!=null)rowKV(b,th('dt_last'),fmt(last,d));
  if(q){const dv=(last!=null?last:q.last)-q.prev;rowKV(b,th('dt_chg'),fmtSigned(dv,d)+'  '+fmtSigned(q.prev?dv/q.prev*100:0,2)+'%',dv>0?'up':dv<0?'down':'');rowKV(b,th('dt_prev'),fmt(q.prev,d))}
  const box=document.createElement('div');b.appendChild(box);
  barsFor(it,'1D',Date.now()-4*864e5,Date.now()).then(x=>{
    const l=x[x.length-1];if(!l)return;
    rowKV(box,th('dt_open'),fmt(l.o,d));rowKV(box,th('dt_high'),fmt(l.h,d));rowKV(box,th('dt_low'),fmt(l.l,d));rowKV(box,th('dt_dec'),String(d));
  }).catch(()=>{});
}
function pageCmp(b){
  shEl(b,'sh-note',th('cm_hint'));
  if(CMP.sym)shItem(b,th('cm_off'),{danger:true,on:()=>{cmpSet(null);hubRender()}});
  WATCH.filter(n=>n!==cur).forEach(n=>{const it=BYN[n];if(it)shItem(b,n,{left:iconEl(it,30),check:CMP.sym===n,on:()=>{cmpSet(n);closeHub()}})});
}
function pageAlert(b){
  const q=QUOTE[cur],last=lastBars.length?lastBars[lastBars.length-1].c:(q?q.last:0);
  shEl(b,'sh-l',th('al_new')+' — '+cur);
  const inp=document.createElement('input');inp.id='alprice';inp.type='text';inp.inputMode='decimal';inp.className='hinput';
  inp.value=fmt(last,dec).replace(/[^\d,.\-]/g,'');
  b.appendChild(inp);
  const row=document.createElement('div');row.className='chips';
  const ok=document.createElement('button');ok.className='chip on';ok.textContent=th('al_add');
  ok.onclick=()=>{
    const sp=SEPS[lang]||SEPS.it;
    let s=inp.value.trim().split(sp[0]).join('').replace(sp[1],'.').replace(',','.');
    const p=parseFloat(s);if(!isFinite(p))return;
    const now=lastBars.length?lastBars[lastBars.length-1].c:last;
    ALERTS.push({id:Date.now(),sym:cur,price:p,dir:p>=now?'above':'below',active:true});saveAlerts();refreshAlertLines();hubRender();
  };
  row.appendChild(ok);b.appendChild(row);
  shEl(b,'sh-l',th('al_list'));
  const act=ALERTS.filter(a=>a.active);
  if(!act.length)shEl(b,'sh-note',th('al_none'));
  act.forEach(a=>{
    const del=document.createElement('button');del.className='addb';del.innerHTML='✕';del.setAttribute('aria-label',t('del'));
    del.onclick=e=>{e.stopPropagation();ALERTS=ALERTS.filter(x=>x!==a);saveAlerts();refreshAlertLines();hubRender()};
    const d=QUOTE[a.sym]?QUOTE[a.sym].dec:dec;
    shItem(b,a.sym+'  '+th(a.dir==='above'?'al_above':'al_below')+'  '+fmt(a.price,d),{right:del});
  });
  shEl(b,'sh-note',th('al_note'));
}
function pageTech(b){
  const r=technicals();
  shEl(b,'sh-l',cur+' · '+res);
  if(!r){shEl(b,'sh-note',th('te_few'));return}
  const g=document.createElement('div');g.className='gauge';g.innerHTML=gaugeSVG(r.score);
  const v=document.createElement('div');v.className='verdict '+(r.score>0.1?'up':r.score<-0.1?'down':'');v.textContent=th(r.verdict);
  const cnt=document.createElement('div');cnt.className='counts';cnt.textContent=th('te_sell')+' '+r.sell+'   ·   '+th('te_neu')+' '+r.neu+'   ·   '+th('te_buy')+' '+r.buy;
  g.appendChild(v);g.appendChild(cnt);b.appendChild(g);
  const sec=(title,arr)=>{shEl(b,'sh-l',title);arr.forEach(x=>rowKV(b,x.name,fmt(x.val,Math.abs(x.val)>=100?2:dec>2?dec:2)+'   '+th(x.sig>0?'te_buy':x.sig<0?'te_sell':'te_neu'),x.sig>0?'up':x.sig<0?'down':''))};
  sec(th('te_osc'),r.osc);sec(th('te_ma'),r.ma);
}
function hubNew(){
  hubPage(th('l_new'),b=>{
    shEl(b,'sh-note',th('ly_newq'));
    shItem(b,th('ly_yes'),{danger:true,on:()=>{
      drawings=[];dSel=null;dSave();CS=Object.assign({},CS_DEF);saveCS();cmpSet(null);rebuildSeries();closeHub();
    }});
  });
}
function pageSave(b){
  const inp=document.createElement('input');inp.className='hinput';inp.placeholder=th('ly_name');inp.value=cur+' '+res;b.appendChild(inp);
  const row=document.createElement('div');row.className='chips';
  const ok=document.createElement('button');ok.className='chip on';ok.textContent=th('l_save');
  ok.onclick=()=>{
    const name=inp.value.trim()||(cur+' '+res);
    LAYOUTS=LAYOUTS.filter(l=>l.name!==name);
    LAYOUTS.unshift({name,sym:cur,res,cs:Object.assign({},CS),draw:JSON.parse(JSON.stringify(drawings)),cmp:CMP.sym,ts:Date.now()});
    saveLayouts();msg(th('ly_saved'));hubBack();
  };
  row.appendChild(ok);b.appendChild(row);
}
function pageOpen(b){
  if(!LAYOUTS.length){shEl(b,'sh-note',th('ly_none'));return}
  LAYOUTS.forEach(l=>{
    const del=document.createElement('button');del.className='addb';del.innerHTML='✕';del.setAttribute('aria-label',t('del'));
    del.onclick=e=>{e.stopPropagation();LAYOUTS=LAYOUTS.filter(x=>x!==l);saveLayouts();hubRender()};
    const it=BYN[l.sym];
    shItem(b,l.name,{left:it?iconEl(it,30):null,right:del,on:()=>{
      lsSet('tc_draw_'+l.sym,l.draw||[]);
      CS=Object.assign({},CS_DEF,l.cs||{});saveCS();
      closeHub();
      if(l.sym!==cur&&BYN[l.sym])setCur(l.sym);
      dLoad();
      if(l.res&&l.res!==res)setRes(l.res);
      rebuildSeries();
      setTimeout(()=>cmpSet(l.cmp||null),300);
    }});
  });
}

/* trascinamento del pannello */
(function(){
  const head=$('hubhead');let y0=null,base=0,t0=0;
  head.addEventListener('touchstart',e=>{if(e.target.closest('button'))return;y0=e.touches[0].clientY;base=HUB.y;t0=Date.now()},{passive:true});
  head.addEventListener('touchmove',e=>{if(y0==null)return;hubSetY(base+(e.touches[0].clientY-y0),false)},{passive:true});
  head.addEventListener('touchend',e=>{
    if(y0==null)return;
    const dy=e.changedTouches[0].clientY-y0,v=dy/Math.max(1,Date.now()-t0);y0=null;
    const h=$('hub').getBoundingClientRect().height,half=hubHalf();
    if(HUB.y>h*0.62||v>0.9)closeHub();
    else if(v<-0.5||HUB.y<half/2)hubSetY(0,true);
    else hubSetY(half,true);
  });
})();
(function(){
  const body=$('hubbody');let y0=null,base=0,t0=0,drag=false;
  body.addEventListener('touchstart',e=>{y0=body.scrollTop<=0?e.touches[0].clientY:null;base=HUB.y;t0=Date.now();drag=false},{passive:true});
  body.addEventListener('touchmove',e=>{
    if(y0==null)return;const dy=e.touches[0].clientY-y0;
    if(!drag&&dy>8)drag=true;
    if(drag){e.preventDefault();hubSetY(base+dy,false)}else if(dy<-4)y0=null;
  },{passive:false});
  body.addEventListener('touchend',e=>{
    if(!drag){y0=null;return}
    const dy=e.changedTouches[0].clientY-y0,v=dy/Math.max(1,Date.now()-t0);y0=null;drag=false;
    const h=$('hub').getBoundingClientRect().height,half=hubHalf();
    if(HUB.y>h*0.62||v>0.9)closeHub();else if(HUB.y<half/2)hubSetY(0,true);else hubSetY(half,true);
  });
})();
$('hubbg').onclick=closeHub;
$('hubx').onclick=closeHub;
$('hubleft').onclick=()=>{if(HUB.stack.length)hubBack();else if(HUB.mode==='hub')shareChart()};
$('more').onclick=()=>openHub('hub');
function drawRoot(b){
  DTOOLS.forEach(g=>{
    shEl(b,'sh-l',t(g.sec));
    const grid=document.createElement('div');grid.className='tgrid';
    g.items.forEach(k=>{
      const x=document.createElement('button');x.className='tile';
      x.innerHTML='<i class="hic">'+DICON[k]+'</i><span></span>';x.lastChild.textContent=t('d_'+k);icTint(x,DCOL2[k]);
      x.onclick=()=>startTool(k);grid.appendChild(x);
    });
    b.appendChild(grid);
  });
  if(drawings.length){
    shEl(b,'sh-sep','');
    shItem(b,t('delall')+' ('+cur+')',{danger:true,on:()=>{drawings=[];dSel=null;dSave();setMode('idle');closeHub()}});
  }
}

$('pencil').onclick=()=>openHub('draw');

/* logo in filigrana: un tocco fa uscire la scritta, un altro la fa rientrare */
(function(){
  const w=$('wm');
  try{if(localStorage.getItem('tc_wmtx')==='1')w.classList.add('open')}catch(e){}
  w.addEventListener('click',e=>{
    e.stopPropagation();
    const o=w.classList.toggle('open');haptic();
    try{localStorage.setItem('tc_wmtx',o?'1':'0')}catch(_){}
  });
})();

/* legenda: col mirino mostra apertura, massimo, minimo e chiusura della candela toccata */
var XH={on:false,map:null,len:0};
function xhBar(time){
  if(!XH.map||XH.len!==lastBars.length||XH.last!==lastBars[lastBars.length-1]){
    XH.map=new Map();lastBars.forEach(b=>XH.map.set(toChart(b).time,b));XH.len=lastBars.length;XH.last=lastBars[lastBars.length-1];
  }
  return XH.map.get(time);
}
function xhMove(p){
  const b=p&&p.time!=null&&p.point?xhBar(p.time):null;
  if(!b){if(XH.on){XH.on=false;renderLegend()}return}
  XH.on=true;
  ohlcShow(b);
}
(function hook(){
  if(!chart){setTimeout(hook,500);return}
  try{chart.subscribeCrosshairMove(xhMove)}catch(e){}
})();


/* =====================================================================
   RUOTA DI SCELTA (simbolo e timeframe) sulla pillola in basso
   - tieni premuto e trascina su/giu': scegli e lasci il dito
   - tocco semplice: la ruota resta aperta, la scorri e tocchi la voce
   ===================================================================== */
var TFN={
 it:{'1m':'1 minuto','5m':'5 minuti','15m':'15 minuti','1H':'1 ora','4H':'4 ore','1D':'1 giorno'},
 es:{'1m':'1 minuto','5m':'5 minutos','15m':'15 minutos','1H':'1 hora','4H':'4 horas','1D':'1 día'},
 en:{'1m':'1 minute','5m':'5 minutes','15m':'15 minutes','1H':'1 hour','4H':'4 hours','1D':'1 day'},
 fr:{'1m':'1 minute','5m':'5 minutes','15m':'15 minutes','1H':'1 heure','4H':'4 heures','1D':'1 jour'}
};
var WROW=42,WVIS=5;
var WH={open:false,kind:null,items:[],idx:0,start:0,drag:false,y0:0,pid:null,last:-1,timer:null};
function tfList(){return Object.keys(SECS)}
function renderSymPillTF(){
  const L=tfList(),i=L.indexOf(res);
  $('sttxt').textContent=res;
  $('stg1').textContent=i>0?L[i-1]:'';
  $('stg2').textContent=i>=0&&i<L.length-1?L[i+1]:'';
}
function wheelBuild(kind){
  const w=$('wheel'),list=$('whl');
  WH.kind=kind;
  WH.items=kind==='sym'?WATCH.filter(n=>BYN[n]):tfList();
  WH.idx=Math.max(0,WH.items.indexOf(kind==='sym'?cur:res));WH.start=WH.idx;WH.last=WH.idx;
  list.innerHTML='';
  WH.items.forEach((k,i)=>{
    const r=document.createElement('div');r.className='wrow';r.dataset.i=i;
    if(kind==='sym'){r.appendChild(iconEl(BYN[k],26));const s=document.createElement('span');s.textContent=k;r.appendChild(s)}
    else{const s=document.createElement('span');s.textContent=(TFN[lang]||TFN.it)[k]||k;r.appendChild(s)}
    r.onclick=()=>{if(WH.drag)return;wheelTo(i,true);setTimeout(()=>wheelClose(true),200)};
    list.appendChild(r);
  });
  /* posizione: sopra la parte della pillola che hai premuto */
  const z=$(kind==='sym'?'spsym':'sptf').getBoundingClientRect(),bar=$('chbar').getBoundingClientRect();
  const W=kind==='sym'?Math.max(200,Math.min(240,z.width)):170;
  let left=kind==='sym'?z.left:z.left+z.width/2-W/2;
  left=Math.max(10,Math.min(window.innerWidth-W-10,left));
  w.style.width=W+'px';w.style.left=left+'px';
  w.style.bottom=(window.innerHeight-bar.top+12)+'px';
  w.style.setProperty('--wo',(z.left+z.width/2-left)+'px');
}
function wheelMark(){
  [...$('whl').children].forEach((r,i)=>r.classList.toggle('on',i===WH.idx));
}
function wheelTo(i,smooth){
  i=Math.max(0,Math.min(WH.items.length-1,i));
  WH.idx=i;wheelMark();
  const l=$('whl');
  try{l.scrollTo({top:i*WROW,behavior:smooth?'smooth':'auto'})}catch(e){l.scrollTop=i*WROW}
  if(i!==WH.last){WH.last=i;haptic()}
}
function wheelOpen(kind){
  if(WH.open)wheelClose(false);
  wheelBuild(kind);
  WH.open=true;
  $('wheel').hidden=false;$('wheelbg').hidden=false;
  $(kind==='sym'?'spsym':'sptf').classList.add('press');
  wheelTo(WH.idx,false);WH.last=WH.idx;
  requestAnimationFrame(()=>$('wheel').classList.add('show'));
}
function wheelClose(apply){
  if(!WH.open)return;
  WH.open=false;WH.drag=false;
  const w=$('wheel');w.classList.remove('show');$('wheelbg').hidden=true;
  $('spsym').classList.remove('press');$('sptf').classList.remove('press');
  setTimeout(()=>{if(!WH.open)w.hidden=true},180);
  if(apply&&WH.idx!==WH.start){
    const v=WH.items[WH.idx];
    if(WH.kind==='sym')setCur(v);else setRes(v);
  }
}
/* scorrimento libero della ruota: la voce al centro e' quella scelta */
$('whl').addEventListener('scroll',()=>{
  if(!WH.open||WH.drag)return;
  const i=Math.max(0,Math.min(WH.items.length-1,Math.round($('whl').scrollTop/WROW)));
  if(i!==WH.idx){WH.idx=i;wheelMark();if(i!==WH.last){WH.last=i;haptic()}}
},{passive:true});
$('wheelbg').addEventListener('click',()=>wheelClose(true));

/* tieni premuto e trascina sulla pillola */
['spsym','sptf'].forEach(id=>{
  const z=$(id),kind=id==='spsym'?'sym':'tf';
  z.addEventListener('pointerdown',e=>{
    if(e.button>0)return;
    if(WH.open&&WH.kind===kind){wheelClose(true);WH.pid=null;return}
    wheelOpen(kind);haptic();
    WH.drag=false;WH.y0=e.clientY;WH.pid=e.pointerId;
    try{z.setPointerCapture(e.pointerId)}catch(_){}
  });
  z.addEventListener('pointermove',e=>{
    if(WH.pid!==e.pointerId||!WH.open)return;
    const dy=e.clientY-WH.y0;
    if(!WH.drag&&Math.abs(dy)>8)WH.drag=true;
    if(WH.drag)wheelTo(WH.start+Math.round(-dy/(WROW*0.75)),false);
  });
  const up=e=>{
    if(WH.pid!==e.pointerId)return;WH.pid=null;
    if(WH.drag){WH.drag=false;setTimeout(()=>wheelClose(true),120)}
    /* tocco semplice: la ruota resta aperta per scorrerla col dito */
  };
  z.addEventListener('pointerup',up);
  z.addEventListener('pointercancel',e=>{if(WH.pid===e.pointerId){WH.pid=null;WH.drag=false}});
});
renderSymPillTF();


/* =====================================================================
   AMICI: entrano con un codice, i prezzi passano dal servizio Cloudflare
   (le credenziali del broker stanno solo li', mai nell'app)
   ===================================================================== */
var FRT={
 it:{nobroker:"Accedi senza broker",or:"oppure",hold:"Per sicurezza: tieni premuto il pulsante per ripristinare l'app.",other:"Questo codice è già usato su un altro telefono. Ogni codice vale per un solo telefono: richiedine uno nuovo su Telegram.",used:"in uso",free:"non ancora usato",have:"Hai un codice amico?",ph:"Codice amico",enter:"Entra col codice",lost:"Codice perso? Richiedilo su Telegram",back:"Accedi con email e password",bad:"Codice non valido. Controllalo o richiedine uno nuovo.",expired:"Il tuo codice non è più valido. Richiedine uno nuovo su Telegram.",tgmsg:"Ciao ALBAEXE, mi serve un codice per accedere a NexusCharts",
   codes:"Codici amici",keyq:"Scrivi la tua chiave amministratore (la ADMIN_KEY che hai messo su Cloudflare). Serve una volta sola: poi resta su questo iPhone.",keyph:"Chiave amministratore",keysave:"Salva chiave",keybad:"Chiave sbagliata.",name:"Nome dell'amico",gen:"Genera codice",newc:"Nuovo codice",copy:"Copia",copied:"Copiato.",send:"Invia",active:"Codici attivi",none:"Nessun codice attivo.",delq:"Disattivare questo codice? Chi lo usa non potrà più entrare.",forgetkey:"Dimentica la chiave su questo iPhone",share:"Ecco il tuo codice per NexusCharts: ",howto:"Apri l'app, tocca «Hai un codice amico?» e scrivilo.",noname:"senza nome",neterr:"Servizio amici non raggiungibile."},
 es:{nobroker:"Entrar sin bróker",or:"o",hold:"Por seguridad: mantén pulsado el botón para restablecer la app.",other:"Este código ya se usa en otro teléfono. Cada código vale para un solo teléfono: pide uno nuevo en Telegram.",used:"en uso",free:"sin usar",have:"¿Tienes un código de amigo?",ph:"Código de amigo",enter:"Entrar con el código",lost:"¿Perdiste el código? Pídelo en Telegram",back:"Entrar con email y contraseña",bad:"Código no válido. Revísalo o pide uno nuevo.",expired:"Tu código ya no es válido. Pide uno nuevo en Telegram.",tgmsg:"Hola ALBAEXE, necesito un código para entrar en NexusCharts",
   codes:"Códigos de amigos",keyq:"Escribe tu clave de administrador (la ADMIN_KEY de Cloudflare). Solo una vez: luego se queda en este iPhone.",keyph:"Clave de administrador",keysave:"Guardar clave",keybad:"Clave incorrecta.",name:"Nombre del amigo",gen:"Generar código",newc:"Código nuevo",copy:"Copiar",copied:"Copiado.",send:"Enviar",active:"Códigos activos",none:"No hay códigos activos.",delq:"¿Desactivar este código? Quien lo use ya no podrá entrar.",forgetkey:"Olvidar la clave en este iPhone",share:"Este es tu código para NexusCharts: ",howto:"Abre la app, toca «¿Tienes un código de amigo?» y escríbelo.",noname:"sin nombre",neterr:"Servicio de amigos no disponible."},
 en:{nobroker:"Sign in without a broker",or:"or",hold:"For safety: press and hold the button to reset the app.",other:"This code is already used on another phone. Each code works on one phone only: ask for a new one on Telegram.",used:"in use",free:"not used yet",have:"Have a friend code?",ph:"Friend code",enter:"Enter with code",lost:"Lost your code? Ask on Telegram",back:"Sign in with email and password",bad:"Invalid code. Check it or ask for a new one.",expired:"Your code is no longer valid. Ask for a new one on Telegram.",tgmsg:"Hi ALBAEXE, I need a code to sign in to NexusCharts",
   codes:"Friend codes",keyq:"Type your admin key (the ADMIN_KEY you set on Cloudflare). Only once: then it stays on this iPhone.",keyph:"Admin key",keysave:"Save key",keybad:"Wrong key.",name:"Friend's name",gen:"Generate code",newc:"New code",copy:"Copy",copied:"Copied.",send:"Send",active:"Active codes",none:"No active codes.",delq:"Deactivate this code? Whoever uses it won't be able to sign in.",forgetkey:"Forget the key on this iPhone",share:"Here is your NexusCharts code: ",howto:"Open the app, tap “Have a friend code?” and type it.",noname:"no name",neterr:"Friend service unreachable."},
 fr:{nobroker:"Entrer sans courtier",or:"ou",hold:"Par sécurité : maintiens le bouton appuyé pour réinitialiser l'app.",other:"Ce code est déjà utilisé sur un autre téléphone. Chaque code ne vaut que pour un téléphone : demandes-en un nouveau sur Telegram.",used:"utilisé",free:"pas encore utilisé",have:"Tu as un code ami ?",ph:"Code ami",enter:"Entrer avec le code",lost:"Code perdu ? Demande-le sur Telegram",back:"Se connecter avec email et mot de passe",bad:"Code non valide. Vérifie-le ou demandes-en un nouveau.",expired:"Ton code n'est plus valide. Demandes-en un nouveau sur Telegram.",tgmsg:"Salut ALBAEXE, il me faut un code pour entrer dans NexusCharts",
   codes:"Codes amis",keyq:"Écris ta clé administrateur (l'ADMIN_KEY mise sur Cloudflare). Une seule fois : elle reste ensuite sur cet iPhone.",keyph:"Clé administrateur",keysave:"Enregistrer la clé",keybad:"Clé incorrecte.",name:"Nom de l'ami",gen:"Générer un code",newc:"Nouveau code",copy:"Copier",copied:"Copié.",send:"Envoyer",active:"Codes actifs",none:"Aucun code actif.",delq:"Désactiver ce code ? La personne qui l'utilise ne pourra plus entrer.",forgetkey:"Oublier la clé sur cet iPhone",share:"Voici ton code NexusCharts : ",howto:"Ouvre l'app, touche « Tu as un code ami ? » et écris-le.",noname:"sans nom",neterr:"Service amis injoignable."}
};
function ft(k){return(FRT[lang]&&FRT[lang][k])||FRT.it[k]||k}
/* identita' di questo telefono: creata una volta, resta finche' non si ripristina l'app */
function devId(){
  let d=null;try{d=localStorage.getItem('tc_dev')}catch(e){}
  if(!d||d.length<16){
    d=[...crypto.getRandomValues(new Uint8Array(18))].map(x=>x.toString(16).padStart(2,'0')).join('');
    try{localStorage.setItem('tc_dev',d)}catch(e){}
  }
  return d;
}
const fnorm=c=>String(c||'').toUpperCase().replace(/[^A-Z0-9]/g,'');
const fshow=c=>{c=fnorm(c);return c.length===8?c.slice(0,4)+'-'+c.slice(4):c};

function friendMode(code){FRIEND=fnorm(code);BASE=WORKER+'/tl';tok=FRIEND;accId='me';accNum='me';sess=null}
function friendOff(){FRIEND=null;BASE=TL_BASE}
/* codice tolto dall'amministratore mentre l'amico era dentro */
function friendLost(why){
  try{localStorage.removeItem('tc_fcode');sessionStorage.setItem('noSplash','1');sessionStorage.setItem('tc_fexp',why==='dev'?'dev':'1')}catch(e){}
  location.reload();
}
function friendUI(on){
  $('fform').hidden=!on;$('fopen').hidden=on;$('lor').hidden=on;
  $('lform').hidden=on;$('fid').hidden=on;
  $('forget').hidden=true;
  if(on)setTimeout(()=>{if(!$('fcode').value)$('fcode').focus()},50);
}
function fTexts(){
  $('fopentx').textContent=ft('nobroker');$('lortx').textContent=ft('or');$('fhead').textContent=ft('ph');$('fcode').placeholder='XXXX-XXXX';
  $('fgo').textContent=ft('enter');$('flost').textContent=ft('lost');$('fback').textContent=ft('back');
}
let fBusy=false;
async function friendEnter(code,auto){
  code=fnorm(code);if(code.length<6||fBusy)return;
  fBusy=true;
  try{
    msg(t('logging'));
    friendMode(code);
    await loadInstruments();
    try{localStorage.setItem('tc_fcode',code)}catch(e){}
    start();
  }catch(e){
    friendOff();
    if(e&&(e.status===401||e.status===403)){try{localStorage.removeItem('tc_fcode')}catch(_){}msg(ft(e.status===403?'other':'bad'));friendUI(true)}
    else msg(e&&e.status?errText(e):ft('neterr'));
  }finally{fBusy=false}
}
function openTelegram(){
  const u='https://t.me/'+TG_USER+'?text='+encodeURIComponent(ft('tgmsg'));
  const w=window.open(u,'_blank');if(!w)location.href=u;
}
$('fopen').onclick=()=>friendUI(true);
$('fback').onclick=()=>{friendUI(false);msg('')};
$('flost').onclick=openTelegram;
$('fform').onsubmit=ev=>{ev.preventDefault();friendEnter($('fcode').value,false)};
$('fcode').addEventListener('input',()=>{
  const c=fnorm($('fcode').value);
  if(c.length===8&&!fBusy){$('fcode').value=fshow(c);$('fcode').blur();friendEnter(c,false)}
});
fTexts();
/* all'apertura: l'amico che ha gia' un codice entra da solo */
(function(){
  let exp=false,na=false;
  try{exp=sessionStorage.getItem('tc_fexp');sessionStorage.removeItem('tc_fexp')}catch(e){}
  try{na=sessionStorage.getItem('noAutoF')==='1';sessionStorage.removeItem('noAutoF')}catch(e){}
  let code=null;try{code=localStorage.getItem('tc_fcode')}catch(e){}
  if(exp){friendUI(true);setTimeout(()=>msg(ft(exp==='dev'?'other':'expired')),300);return}
  if(!code)return;
  friendUI(true);$('fcode').value=fshow(code);
  if(document.body.classList.contains('inapp')||FRIEND||window.__resume)return;   /* gia' dentro (ripresa dopo aggiornamento) */
  if(!na)friendEnter(code,true);
})();

/* ---------- Codici amici: solo per l'amministratore (serve la chiave amministratore) ---------- */
function admKey(){try{return localStorage.getItem('tc_admin')||''}catch(e){return ''}}
async function adm(method,path,body,key){
  const r=await fetch(WORKER+'/admin'+path,{method,headers:{'Content-Type':'application/json','X-Admin-Key':key||admKey()},body:body?JSON.stringify(body):undefined,cache:'no-store'});
  let j=null;try{j=await r.json()}catch(e){}
  if(!r.ok){const er=new Error((j&&j.error)||('HTTP '+r.status));er.status=r.status;throw er}
  return j;
}
function codeBox(s,code){
  const box=document.createElement('div');box.className='fcodebox';
  const c=document.createElement('div');c.className='fcodebig';c.textContent=fshow(code);box.appendChild(c);
  const row=document.createElement('div');row.className='chips';row.style.justifyContent='center';
  const cp=document.createElement('button');cp.className='chip';cp.textContent=ft('copy');
  cp.onclick=async()=>{try{await navigator.clipboard.writeText(fshow(code));msg(ft('copied'))}catch(e){msg(fshow(code))}};
  const sh=document.createElement('button');sh.className='chip on';sh.textContent=ft('send');
  sh.onclick=()=>{
    const txt=ft('share')+fshow(code)+'\n'+ft('howto');
    if(navigator.share)navigator.share({text:txt}).catch(()=>{});
    else{try{navigator.clipboard.writeText(txt);msg(ft('copied'))}catch(e){}}
  };
  row.appendChild(cp);row.appendChild(sh);box.appendChild(row);s.appendChild(box);
}
function openCodes(fresh){
  openSheet(s=>{
    shEl(s,'sh-t',ft('codes'));
    if(!admKey()){
      shEl(s,'sh-note',ft('keyq'));
      const i=document.createElement('input');i.type='password';i.className='hinput';i.placeholder=ft('keyph');i.autocomplete='off';s.appendChild(i);
      const row=document.createElement('div');row.className='chips';
      const ok=document.createElement('button');ok.className='chip on';ok.textContent=ft('keysave');
      ok.onclick=async()=>{
        const k=i.value.trim();if(!k)return;
        try{await adm('GET','/codes',null,k);localStorage.setItem('tc_admin',k);openCodes()}
        catch(e){msg(e.status===403?ft('keybad'):ft('neterr'))}
      };
      row.appendChild(ok);s.appendChild(row);
      return;
    }
    if(fresh){shEl(s,'sh-l',ft('newc')+(fresh.name?' — '+fresh.name:''));codeBox(s,fresh.code)}
    const i=document.createElement('input');i.className='hinput';i.placeholder=ft('name');i.autocomplete='off';s.appendChild(i);
    const row=document.createElement('div');row.className='chips';
    const gen=document.createElement('button');gen.className='chip on';gen.textContent=ft('gen');
    gen.onclick=async()=>{
      gen.disabled=true;
      try{const j=await adm('POST','/codes',{name:i.value.trim()});openCodes(j)}
      catch(e){gen.disabled=false;msg(e.status===403?ft('keybad'):ft('neterr'))}
    };
    row.appendChild(gen);s.appendChild(row);
    shEl(s,'sh-l',ft('active'));
    const list=document.createElement('div');s.appendChild(list);
    adm('GET','/codes').then(j=>{
      const cs=(j&&j.codes)||[];
      if(!cs.length){shEl(list,'sh-note',ft('none'));return}
      cs.forEach(c=>{
        const del=document.createElement('button');del.className='addb';del.innerHTML='✕';del.setAttribute('aria-label',t('del'));
        del.onclick=async e=>{
          e.stopPropagation();
          if(!confirm(ft('delq')))return;
          try{await adm('DELETE','/codes/'+c.code);openCodes()}catch(er){msg(ft('neterr'))}
        };
        const d=c.created?new Date(c.created).toLocaleDateString(LOC[lang]||'it-IT',{day:'2-digit',month:'short'}):'';
        const st=document.createElement('span');st.className='bnd'+(c.bound?' on':'');st.textContent=c.bound?ft('used'):ft('free');
        const it=shItem(list,(c.name||ft('noname'))+'  ·  '+fshow(c.code)+(d?'  ·  '+d:''),{right:st,on:()=>openCodes({code:c.code,name:c.name})});
        it.appendChild(del);
      });
    }).catch(e=>{if(e.status===403){try{localStorage.removeItem('tc_admin')}catch(_){}msg(ft('keybad'))}else shEl(list,'sh-note',ft('neterr'))});
    shEl(s,'sh-sep','');
    shItem(s,ft('forgetkey'),{danger:true,on:()=>{try{localStorage.removeItem('tc_admin')}catch(e){}openCodes()}});
  });
}


/* =====================================================================
   PROFILO: scheda in basso col logo, tutte le impostazioni dell'app
   ===================================================================== */
var PFT={
 it:{settings:"Impostazioni",setsub:"Aspetto, lingua e dati dell'app",data:"Dati",noind:"Nessun indicatore attivo",profile:"Profilo",look:"Aspetto",theme:"Tema",language:"Lingua",friends:"Amici",app:"App",own:"Conto demo TradeLocker",fr:"Accesso con codice",codesub:"Crea e gestisci i codici per i tuoi amici",refsub:"Ricarica i dati e controlla gli aggiornamenti",ressub:"Cancella tutto ciò che è salvato su questo iPhone"},
 es:{settings:"Ajustes",setsub:"Apariencia, idioma y datos de la app",data:"Datos",noind:"Ningún indicador activo",profile:"Perfil",look:"Apariencia",theme:"Tema",language:"Idioma",friends:"Amigos",app:"App",own:"Cuenta demo TradeLocker",fr:"Acceso con código",codesub:"Crea y gestiona los códigos de tus amigos",refsub:"Recarga los datos y busca actualizaciones",ressub:"Borra todo lo guardado en este iPhone"},
 en:{settings:"Settings",setsub:"Appearance, language and app data",data:"Data",noind:"No active indicators",profile:"Profile",look:"Appearance",theme:"Theme",language:"Language",friends:"Friends",app:"App",own:"TradeLocker demo account",fr:"Signed in with code",codesub:"Create and manage your friends' codes",refsub:"Reload data and check for updates",ressub:"Erase everything saved on this iPhone"},
 fr:{settings:"Réglages",setsub:"Apparence, langue et données de l'app",data:"Données",noind:"Aucun indicateur actif",profile:"Profil",look:"Apparence",theme:"Thème",language:"Langue",friends:"Amis",app:"App",own:"Compte démo TradeLocker",fr:"Accès avec code",codesub:"Crée et gère les codes de tes amis",refsub:"Recharge les données et cherche les mises à jour",ressub:"Efface tout ce qui est enregistré sur cet iPhone"}
};
function pt(k){const P=window.PFT;return P?((P[lang]&&P[lang][k])||P.it[k]||k):k}
var PIC={
  codes:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M17 6l3 3M15 8l2 2"/></svg>',
  refresh:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 11a8 8 0 1 0-2.3 5.7"/><path d="M20 4v7h-7"/></svg>',
  reset:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/></svg>',
  out:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3"/><path d="M10 8l-4 4 4 4M6 12h10"/></svg>',
  gear:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>',
  moon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/></svg>',
  sun:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>'
};
function pfRow(g,ic,title,sub,fn,cls){
  const b=document.createElement('button');b.className='pfrow'+(cls?' '+cls:'');
  const i=document.createElement('span');i.className='pfic';i.innerHTML=ic;b.appendChild(i);
  const tx=document.createElement('span');tx.className='pftx';
  const a=document.createElement('span');a.textContent=title;tx.appendChild(a);
  if(sub){const s=document.createElement('small');s.textContent=sub;tx.appendChild(s)}
  b.appendChild(tx);b.onclick=fn;g.appendChild(b);return b;
}
function pfGroup(p,label){
  if(label){const l=document.createElement('div');l.className='pfl';l.textContent=label;p.appendChild(l)}
  const g=document.createElement('div');g.className='pfg';p.appendChild(g);return g;
}
var PF={page:null};
function renderProfile(){
  const p=$('pf-screen');if(!p)return;
  const st=PF.keep?p.scrollTop:0;PF.keep=false;p.innerHTML='';
  if(PF.page==='settings'){renderSettings(p);p.scrollTop=st;return}
  /* testa: logo e nome */
  const h=document.createElement('div');h.className='pfhead';
  h.innerHTML='<img alt="" src="'+LOGO_SRC+'"><div class="pfname">NexusCharts</div>';
  const sub=document.createElement('div');sub.className='pfsub';
  let sv='';try{sv=localStorage.getItem('tc_server')||''}catch(e){}
  sub.textContent=FRIEND?pt('fr')+' '+fshow(FRIEND):pt('own')+(sv?' · '+sv:'');
  h.appendChild(sub);p.appendChild(h);
  let g=pfGroup(p,'');
  const r=pfRow(g,PIC.gear,pt('settings'),pt('setsub'),()=>{PF.page='settings';renderProfile();p.firstChild&&p.firstChild.parentNode.classList.add('pfin');setTimeout(()=>p.classList.remove('pfin'),400)});
  r.classList.add('chev');
  if(!FRIEND){g=pfGroup(p,pt('friends'));pfRow(g,PIC.codes,ft('codes'),pt('codesub'),()=>openCodes()).classList.add('chev')}
  g=pfGroup(p,pt('app'));
  pfRow(g,PIC.refresh,t('refresh'),pt('refsub'),()=>doRefresh());
  g=pfGroup(p,'');
  pfRow(g,PIC.out,t('logout'),'',logout,'danger');
  p.scrollTop=st;
}
function renderSettings(p){
  const bar=document.createElement('div');bar.className='pfbar';
  const bk=document.createElement('button');bk.className='pfback';bk.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg><span></span>';
  bk.lastChild.textContent=pt('profile');
  bk.onclick=()=>{PF.page=null;renderProfile();p.classList.add('pfout');setTimeout(()=>p.classList.remove('pfout'),400)};
  const ti=document.createElement('div');ti.className='pftitle';ti.textContent=pt('settings');
  bar.appendChild(bk);bar.appendChild(ti);p.appendChild(bar);
  let g=pfGroup(p,pt('look'));
  const th=document.documentElement.dataset.theme||'dark';
  const seg=document.createElement('div');seg.className='pfseg';
  [['dark',t('dark'),PIC.moon],['light',t('light'),PIC.sun]].forEach(([k,txt,ic])=>{
    const b=document.createElement('button');b.className=k===th?'on':'';b.innerHTML=ic+'<span></span>';b.lastChild.textContent=txt;
    b.onclick=()=>{setTheme(k);PF.keep=true;renderProfile()};seg.appendChild(b);
  });
  g.appendChild(seg);
  g=pfGroup(p,pt('language'));
  Object.keys(FLAGS).forEach(k=>{
    const b=document.createElement('button');b.className='pfrow pflang';
    b.innerHTML='<span class="fl2"></span><span class="pftx"><span></span></span>';
    b.firstChild.textContent=FLAGS[k];b.querySelector('.pftx span').textContent=NAMES[k];
    if(k===lang){const c=document.createElement('span');c.className='ck';c.textContent='✓';b.appendChild(c)}
    b.onclick=()=>{lang=k;try{localStorage.setItem('lang',k)}catch(e){}PF.keep=true;applyLang();renderProfile()};
    g.appendChild(b);
  });
  g=pfGroup(p,pt('data'));
  pfRow(g,PIC.reset,t('reset'),pt('ressub'),()=>resetApp());
}
if(window.renderAll&&$('tabpf'))$('tabpf').textContent=pt('profile');


/* =====================================================================
   GUIDA: come installare NexusCharts sulla schermata Home
   ===================================================================== */
var GD={
 it:{btn:"Installa",title:"Installa NexusCharts",intro:"Aggiungi NexusCharts alla schermata Home: si aprirà a tutto schermo come una vera app, con la sua icona, sempre aggiornata.",ios:"iPhone",and:"Android",
  i:["Apri questa pagina con <b>Safari</b>.",
     "Tocca il pulsante <b>Condividi</b> {share} nella barra di Safari. Se hai iOS 26 tocca prima i <b>tre puntini</b> {dots} accanto all'indirizzo, poi <b>Condividi</b>.",
     "Scorri verso il basso e tocca <b>Aggiungi alla schermata Home</b> {plus}. Se non lo vedi, tocca <b>Visualizza altro</b>.",
     "Lascia attivo <b>Apri come app web</b>, controlla che il nome sia <b>NexusCharts</b> e tocca <b>Aggiungi</b>.",
     "Chiudi Safari e apri <b>NexusCharts</b> dalla schermata Home."],
  a:["Apri questa pagina con <b>Chrome</b>.",
     "Tocca i <b>tre puntini</b> {vdots} in alto a destra.",
     "Tocca <b>Aggiungi a schermata Home</b> oppure <b>Installa app</b> {plus}.",
     "Conferma con <b>Installa</b> (o <b>Aggiungi</b>): il nome è già <b>NexusCharts</b>.",
     "Apri <b>NexusCharts</b> dalla schermata Home o dall'elenco delle app."],
  tip:"Da quel momento entra sempre dall'icona sulla Home, non dal browser: l'app si apre a schermo intero, ricorda il tuo accesso e si aggiorna da sola.",ok:"Ho capito"},
 es:{btn:"Instalar",title:"Instala NexusCharts",intro:"Añade NexusCharts a la pantalla de inicio: se abrirá a pantalla completa como una app de verdad, con su icono y siempre actualizada.",ios:"iPhone",and:"Android",
  i:["Abre esta página con <b>Safari</b>.",
     "Toca el botón <b>Compartir</b> {share} en la barra de Safari. Con iOS 26 toca primero los <b>tres puntos</b> {dots} junto a la dirección y luego <b>Compartir</b>.",
     "Desliza hacia abajo y toca <b>Añadir a pantalla de inicio</b> {plus}. Si no aparece, toca <b>Ver más</b>.",
     "Deja activado <b>Abrir como app web</b>, comprueba que el nombre sea <b>NexusCharts</b> y toca <b>Añadir</b>.",
     "Cierra Safari y abre <b>NexusCharts</b> desde la pantalla de inicio."],
  a:["Abre esta página con <b>Chrome</b>.",
     "Toca los <b>tres puntos</b> {vdots} arriba a la derecha.",
     "Toca <b>Añadir a pantalla de inicio</b> o <b>Instalar app</b> {plus}.",
     "Confirma con <b>Instalar</b> (o <b>Añadir</b>): el nombre ya es <b>NexusCharts</b>.",
     "Abre <b>NexusCharts</b> desde la pantalla de inicio o la lista de apps."],
  tip:"A partir de ahí entra siempre desde el icono, no desde el navegador: la app se abre a pantalla completa, recuerda tu acceso y se actualiza sola.",ok:"Entendido"},
 en:{btn:"Install",title:"Install NexusCharts",intro:"Add NexusCharts to your Home Screen: it opens full screen like a real app, with its own icon, always up to date.",ios:"iPhone",and:"Android",
  i:["Open this page in <b>Safari</b>.",
     "Tap the <b>Share</b> button {share} in Safari's bar. On iOS 26, first tap the <b>three dots</b> {dots} next to the address, then <b>Share</b>.",
     "Scroll down and tap <b>Add to Home Screen</b> {plus}. If you don't see it, tap <b>View More</b>.",
     "Keep <b>Open as Web App</b> on, check the name is <b>NexusCharts</b> and tap <b>Add</b>.",
     "Close Safari and open <b>NexusCharts</b> from your Home Screen."],
  a:["Open this page in <b>Chrome</b>.",
     "Tap the <b>three dots</b> {vdots} at the top right.",
     "Tap <b>Add to Home screen</b> or <b>Install app</b> {plus}.",
     "Confirm with <b>Install</b> (or <b>Add</b>): the name is already <b>NexusCharts</b>.",
     "Open <b>NexusCharts</b> from your Home screen or app drawer."],
  tip:"From then on always open it from the icon, not the browser: it runs full screen, remembers your sign-in and updates itself.",ok:"Got it"},
 fr:{btn:"Installer",title:"Installer NexusCharts",intro:"Ajoute NexusCharts à l'écran d'accueil : elle s'ouvre en plein écran comme une vraie app, avec son icône, toujours à jour.",ios:"iPhone",and:"Android",
  i:["Ouvre cette page avec <b>Safari</b>.",
     "Touche le bouton <b>Partager</b> {share} dans la barre de Safari. Avec iOS 26, touche d'abord les <b>trois points</b> {dots} à côté de l'adresse, puis <b>Partager</b>.",
     "Fais défiler vers le bas et touche <b>Sur l'écran d'accueil</b> {plus}. Si tu ne le vois pas, touche <b>Afficher plus</b>.",
     "Laisse <b>Ouvrir comme app web</b> activé, vérifie que le nom est <b>NexusCharts</b> et touche <b>Ajouter</b>.",
     "Ferme Safari et ouvre <b>NexusCharts</b> depuis l'écran d'accueil."],
  a:["Ouvre cette page avec <b>Chrome</b>.",
     "Touche les <b>trois points</b> {vdots} en haut à droite.",
     "Touche <b>Ajouter à l'écran d'accueil</b> ou <b>Installer l'application</b> {plus}.",
     "Confirme avec <b>Installer</b> (ou <b>Ajouter</b>) : le nom est déjà <b>NexusCharts</b>.",
     "Ouvre <b>NexusCharts</b> depuis l'écran d'accueil ou la liste des apps."],
  tip:"Ensuite, entre toujours depuis l'icône et non depuis le navigateur : l'app s'ouvre en plein écran, se souvient de ta connexion et se met à jour toute seule.",ok:"Compris"}
};
var GIC={
  share:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M8 7l4-4 4 4"/><path d="M7 11H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-1"/></svg>',
  dots:'<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>',
  vdots:'<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>',
  plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="M12 8v8M8 12h8"/></svg>',
  inst:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2.5" width="12" height="19" rx="2.5"/><path d="M12 7v7M9 11l3 3 3-3M10.5 18.5h3"/></svg>'
};
function gd(k){return(GD[lang]&&GD[lang][k])||GD.it[k]}
const isStandalone=()=>!!(navigator.standalone||(window.matchMedia&&matchMedia('(display-mode: standalone)').matches));
var GUIDE={os:/android/i.test(navigator.userAgent)?'a':'i'};
function openGuide(){
  openSheet(s=>{
    s.classList.add('guide');
    const h=document.createElement('div');h.className='gdhead';
    h.innerHTML='<img alt="" src="'+LOGO_SRC+'"><div class="gdt"></div><div class="gdi"></div>';
    h.querySelector('.gdt').textContent=gd('title');h.querySelector('.gdi').textContent=gd('intro');
    s.appendChild(h);
    const seg=document.createElement('div');seg.className='pfseg gdseg';
    [['i',gd('ios')],['a',gd('and')]].forEach(([k,txt])=>{
      const b=document.createElement('button');b.className=GUIDE.os===k?'on':'';b.textContent=txt;
      b.onclick=()=>{GUIDE.os=k;openGuide()};seg.appendChild(b);
    });
    s.appendChild(seg);
    const ol=document.createElement('ol');ol.className='gdsteps';
    gd(GUIDE.os).forEach(tx=>{
      const li=document.createElement('li');
      li.innerHTML='<span class="gdtx">'+tx.replace(/\{(\w+)\}/g,(m,k)=>'<i class="gdic">'+(GIC[k]||'')+'</i>')+'</span>';
      ol.appendChild(li);
    });
    s.appendChild(ol);
    const tip=document.createElement('div');tip.className='gdtip';tip.textContent=gd('tip');s.appendChild(tip);
    const ok=document.createElement('button');ok.className='gdok';ok.textContent=gd('ok');ok.onclick=closeSheet;s.appendChild(ok);
  });
}
function guideTexts(){if($('gdbtx'))$('gdbtx').textContent=gd('btn')}
$('gdbtn').onclick=openGuide;
$('gdbtn').hidden=isStandalone();
guideTexts();


/* =====================================================================
   ZOOM: bloccato solo nell'app aperta dalla Home (a tutto schermo).
   Nel browser resta lo zoom normale. Il grafico usa sempre il suo pizzico.
   ===================================================================== */
(function(){
  if(!isStandalone())return;
  document.documentElement.classList.add('sa');
  /* niente ingrandimento automatico dei campi e niente zoom (Android lo rispetta) */
  const vp=document.querySelector('meta[name="viewport"]');
  if(vp)vp.setAttribute('content','width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover');
  const inChart=e=>{const c=$('chartbox');return c&&e.target&&c.contains(e.target)};
  /* iPhone: annulla il gesto di zoom con due dita (il grafico usa i suoi tocchi, non questo) */
  ['gesturestart','gesturechange','gestureend'].forEach(n=>document.addEventListener(n,e=>e.preventDefault(),{passive:false}));
  /* due dita fuori dal grafico: niente zoom della pagina */
  document.addEventListener('touchmove',e=>{if(e.touches&&e.touches.length>1&&!inChart(e))e.preventDefault()},{passive:false});
  /* il doppio tocco che ingrandisce e' gia' bloccato dal CSS (touch-action) */
})();


/* =====================================================================
   CANVAS: sfondo, griglia, mirino, assi e margini del grafico
   ===================================================================== */
var CVT={
 it:{canvas:"Canvas",presets:"Sfondi pronti",auto:"Automatico",black:"Nero",red:"Rosso",white:"Bianco",custom:"Personalizzato",style:"Stile del grafico",bg:"Sfondo",solid:"Tinta unita",grad:"Gradiente",vgrid:"Griglia verticale",hgrid:"Griglia orizzontale",cross:"Mirino",xs_dash:"Tratteggiato",xs_dot:"Punteggiato",xs_solid:"Continuo",wm:"Logo in filigrana",axes:"Assi",text:"Testo",lines:"Linee degli assi",margins:"Margini",top:"Sopra",bottom:"Sotto",right:"Destra",bars:"barre",reset:"Torna alle impostazioni iniziali",autonote:"Automatico: nero o bianco come il tema, con una sfumatura verde se il mercato sale oggi e rossa se scende."},
 es:{canvas:"Lienzo",presets:"Fondos listos",auto:"Automático",black:"Negro",red:"Rojo",white:"Blanco",custom:"Personalizado",style:"Estilo del gráfico",bg:"Fondo",solid:"Color sólido",grad:"Degradado",vgrid:"Cuadrícula vertical",hgrid:"Cuadrícula horizontal",cross:"Cruz",xs_dash:"Discontinua",xs_dot:"Punteada",xs_solid:"Continua",wm:"Logo de fondo",axes:"Ejes",text:"Texto",lines:"Líneas de los ejes",margins:"Márgenes",top:"Arriba",bottom:"Abajo",right:"Derecha",bars:"barras",reset:"Volver a los ajustes iniciales",autonote:"Automático: negro o blanco según el tema, con un tono verde si el mercado sube hoy y rojo si baja."},
 en:{canvas:"Canvas",presets:"Ready-made backgrounds",auto:"Automatic",black:"Black",red:"Red",white:"White",custom:"Custom",style:"Chart style",bg:"Background",solid:"Solid",grad:"Gradient",vgrid:"Vertical grid",hgrid:"Horizontal grid",cross:"Crosshair",xs_dash:"Dashed",xs_dot:"Dotted",xs_solid:"Solid",wm:"Watermark logo",axes:"Axes",text:"Text",lines:"Axis lines",margins:"Margins",top:"Top",bottom:"Bottom",right:"Right",bars:"bars",reset:"Reset to defaults",autonote:"Automatic: black or white like the theme, tinted green when the market is up today and red when it's down."},
 fr:{canvas:"Canevas",presets:"Fonds prêts",auto:"Automatique",black:"Noir",red:"Rouge",white:"Blanc",custom:"Personnalisé",style:"Style du graphique",bg:"Fond",solid:"Uni",grad:"Dégradé",vgrid:"Grille verticale",hgrid:"Grille horizontale",cross:"Réticule",xs_dash:"Tirets",xs_dot:"Pointillés",xs_solid:"Continu",wm:"Logo en filigrane",axes:"Axes",text:"Texte",lines:"Lignes des axes",margins:"Marges",top:"Haut",bottom:"Bas",right:"Droite",bars:"barres",reset:"Revenir aux réglages initiaux",autonote:"Automatique : noir ou blanc selon le thème, teinté de vert si le marché monte aujourd'hui et de rouge s'il baisse."}
};
function cvt(k){return(CVT[lang]&&CVT[lang][k])||CVT.it[k]||k}
var CV_PRE={
  black:{type:'solid',c1:'#000000',c2:'#000000',gc:'#1a1a1a',hc:'#1a1a1a',xc:'#9598a1',tc:'#8e8e93',lc:'#2a2a2e'},
  red:  {type:'grad', c1:'#000000',c2:'#2e0508',gc:'#1e0e10',hc:'#1e0e10',xc:'#9598a1',tc:'#8e8e93',lc:'#2a2a2e'},
  white:{type:'solid',c1:'#ffffff',c2:'#ffffff',gc:'#eeeeee',hc:'#eeeeee',xc:'#6b6b70',tc:'#6b6b70',lc:'#d9d9d4'}
};
var CV_DEF={p:'auto',vg:true,hg:true,xs:3,ts:12,lv:false,mt:20,mb:6,mr:6};
function cvCfg(){
  if(!window.CS)return Object.assign({},CV_DEF);
  if(!CS.cv)CS.cv=Object.assign({},CV_DEF);
  return CS.cv;
}
/* valori finali, gia' risolti (automatico = come prima: tema + sfumatura del giorno) */
function cvRes(){
  const v=cvCfg();
  let base;
  if(v.p==='auto'||!v.p){
    const c=chartColors(),dark=(document.documentElement.dataset.theme||'dark')!=='light';
    base={type:'grad',c1:c.bg,c2:c.tintc,gc:c.grid,hc:c.grid,xc:dark?'#9598a1':'#6b6b70',tc:c.text,lc:dark?'#2a2a2e':'#d9d9d4'};
  }else if(v.p==='custom'){
    base=Object.assign({},CV_PRE.black,v.c||{});
  }else base=Object.assign({},CV_PRE[v.p]||CV_PRE.black);
  return Object.assign(base,{vg:v.vg!==false,hg:v.hg!==false,xs:v.xs==null?3:v.xs,ts:v.ts||12,lv:!!v.lv,mt:v.mt==null?20:v.mt,mb:v.mb==null?6:v.mb,mr:v.mr==null?6:v.mr});
}
function hexLum(h){
  h=String(h||'#000').replace('#','');if(h.length===3)h=h.split('').map(x=>x+x).join('');
  const n=parseInt(h.slice(0,6),16);if(isNaN(n))return 0;
  const f=x=>{x/=255;return x<=.03928?x/12.92:Math.pow((x+.055)/1.055,2.4)};
  return .2126*f(n>>16&255)+.7152*f(n>>8&255)+.0722*f(n&255);
}
const cvLight=()=>hexLum(cvRes().c1)>0.45;
function cvOpts(){
  const r=cvRes();
  return{
    layout:{background:(chartSolid||r.type==='solid')?{type:'solid',color:r.c1}:{type:'gradient',topColor:r.c1,bottomColor:r.c2},textColor:r.tc,fontSize:r.ts},
    grid:{vertLines:{color:r.gc,visible:!(window.CS&&CS.grid===false)&&r.vg},horzLines:{color:r.hc,visible:!(window.CS&&CS.grid===false)&&r.hg}},
    rightPriceScale:{borderVisible:r.lv,borderColor:r.lc,scaleMargins:{top:Math.min(.45,r.mt/100),bottom:Math.min(.45,r.mb/100)}},
    timeScale:{borderVisible:r.lv,borderColor:r.lc,rightOffset:r.mr},
    crosshair:{vertLine:{color:r.xc,style:r.xs},horzLine:{color:r.xc,style:r.xs}}
  };
}
/* testo della legenda leggibile su qualsiasi sfondo */
function cvFg(){
  const light=cvLight();
  ['legend','chartbox'].forEach(id=>{
    const e=$(id);if(!e)return;
    e.style.setProperty('--fg',light?'#111111':'#f2f2f2');
    e.style.setProperty('--muted',light?'#6b6b70':'#8e8e93');
    e.style.setProperty('--line',light?'#d9d9d4':'#2a2a2a');
    e.style.setProperty('--logo',light?'invert(1)':'none');
  });
}
function applyCanvas(){
  if(chart){try{chart.applyOptions(cvOpts())}catch(e){}}
  cvFg();
  const r=cvRes();
  $('ch-screen').style.setProperty('--tint',(chartSolid||r.type==='solid')?r.c1:r.c2);
}
function cvSet(patch,custom){
  const v=cvCfg();
  if(custom&&v.p!=='custom'){const r=cvRes();v.c={type:r.type,c1:r.c1,c2:r.c2,gc:r.gc,hc:r.hc,xc:r.xc,tc:r.tc,lc:r.lc};v.p='custom';document.querySelectorAll('.cvsw.on').forEach(e=>e.classList.remove('on'))}
  if(custom)Object.assign(v.c,patch);else Object.assign(v,patch);
  saveCS();applyCanvas();
}

/* ---------- pagina Canvas nell'Hub ---------- */
function cvColor(val,on){
  const i=document.createElement('input');i.type='color';i.className='cvcol';i.value=val;
  i.oninput=()=>on(i.value);return i;
}
function cvRow(b,label,...ctrls){
  const r=document.createElement('div');r.className='cvrow';
  const l=document.createElement('span');l.className='cvl';l.textContent=label;r.appendChild(l);
  const c=document.createElement('div');c.className='cvc';ctrls.forEach(x=>x&&c.appendChild(x));r.appendChild(c);
  b.appendChild(r);return r;
}
function cvSwitch(on,fn){const i=document.createElement('input');i.type='checkbox';i.setAttribute('switch','');i.checked=!!on;i.onchange=()=>fn(i.checked);return i}
function cvSelect(opts,val,fn){
  const s=document.createElement('select');s.className='cvsel';
  opts.forEach(([k,t])=>{const o=document.createElement('option');o.value=k;o.textContent=t;if(String(k)===String(val))o.selected=true;s.appendChild(o)});
  s.onchange=()=>fn(s.value);return s;
}
function cvNum(val,min,max,unit,fn){
  const w=document.createElement('span');w.className='cvnumw';
  const i=document.createElement('input');i.type='number';i.inputMode='numeric';i.className='cvnum';i.value=val;i.min=min;i.max=max;
  i.onchange=()=>{let n=Math.round(+i.value);if(!isFinite(n))n=min;n=Math.max(min,Math.min(max,n));i.value=n;fn(n)};
  const u=document.createElement('span');u.className='cvu';u.textContent=unit;
  w.appendChild(i);w.appendChild(u);return w;
}
function pageCanvas(b){
  const v=cvCfg(),r=cvRes();
  shEl(b,'sh-l',cvt('presets'));
  const g=document.createElement('div');g.className='cvpre';
  const sw=(k,css,label)=>{
    const t=document.createElement('button');t.className='cvsw'+(v.p===k?' on':'');
    t.innerHTML='<i></i><span></span>';t.firstChild.style.background=css;t.lastChild.textContent=label;
    t.onclick=()=>{v.p=k;saveCS();applyCanvas();hubRender()};g.appendChild(t);
  };
  sw('auto','linear-gradient(135deg,#000 0 50%,#062820 50% 75%,#2e0508 75%)',cvt('auto'));
  sw('black','#000',cvt('black'));
  sw('red','linear-gradient(#000,#2e0508)',cvt('red'));
  sw('white','#fff',cvt('white'));
  b.appendChild(g);
  if(v.p==='auto')shEl(b,'sh-note',cvt('autonote'));
  if(v.p==='custom')shEl(b,'sh-note',cvt('custom'));

  shEl(b,'sh-l',cvt('style'));
  const c2=r.type==='grad'?cvColor(r.c2,x=>cvSet({c2:x},true)):null;
  cvRow(b,cvt('bg'),cvSelect([['solid',cvt('solid')],['grad',cvt('grad')]],r.type,x=>{cvSet({type:x},true);hubRender()}),cvColor(r.c1,x=>cvSet({c1:x},true)),c2);
  cvRow(b,cvt('vgrid'),cvSwitch(r.vg,x=>{cvSet({vg:x},false)}),cvColor(r.gc,x=>cvSet({gc:x},true)));
  cvRow(b,cvt('hgrid'),cvSwitch(r.hg,x=>{cvSet({hg:x},false)}),cvColor(r.hc,x=>cvSet({hc:x},true)));
  cvRow(b,cvt('cross'),cvColor(r.xc,x=>cvSet({xc:x},true)),cvSelect([[3,cvt('xs_dash')],[1,cvt('xs_dot')],[0,cvt('xs_solid')]],r.xs,x=>cvSet({xs:+x},false)));
  cvRow(b,cvt('wm'),cvSwitch(CS.wm,x=>{CS.wm=x;saveCS();applyCS()}));

  shEl(b,'sh-l',cvt('axes'));
  cvRow(b,cvt('text'),cvColor(r.tc,x=>cvSet({tc:x},true)),cvSelect([10,11,12,13,14,15,16].map(n=>[n,n+' px']),r.ts,x=>cvSet({ts:+x},false)));
  cvRow(b,cvt('lines'),cvSwitch(r.lv,x=>cvSet({lv:x},false)),cvColor(r.lc,x=>cvSet({lc:x},true)));

  shEl(b,'sh-l',cvt('margins'));
  cvRow(b,cvt('top'),cvNum(r.mt,0,45,'%',n=>cvSet({mt:n},false)));
  cvRow(b,cvt('bottom'),cvNum(r.mb,0,45,'%',n=>cvSet({mb:n},false)));
  cvRow(b,cvt('right'),cvNum(r.mr,0,50,cvt('bars'),n=>cvSet({mr:n},false)));

  shEl(b,'sh-sep','');
  shItem(b,cvt('reset'),{danger:true,on:()=>{CS.cv=Object.assign({},CV_DEF);CS.grid=true;CS.wm=true;saveCS();applyCS();applyCanvas();hubRender()}});
}
