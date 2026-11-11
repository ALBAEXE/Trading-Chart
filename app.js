const VERSION='0.36.0';
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
.pfrow .pfic{flex:0 0 28px;width:28px;height:28px;display:flex;align-items:center;justify-content:center;color:var(--goldfg)}
.pfrow .pfic svg{width:24px;height:24px}
.pfrow.busy .pfic svg{animation:rot .8s linear infinite}
.pfrow.dim{opacity:.55}
.tab{position:relative}
.tbbadge{position:absolute;top:4px;left:calc(50% + 6px);min-width:18px;height:18px;padding:0 5px;border-radius:9px;background:#ef4444;color:#fff;font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;box-shadow:0 0 0 2px rgba(0,0,0,.35)}
.fbph{display:flex;gap:8px;flex-wrap:wrap;margin:6px 0}
.fbth{position:relative;width:76px;height:76px;margin:0;padding:0;border-radius:12px;border:1px solid var(--line);background:var(--glasssel) center/cover no-repeat}
.fbth.load{animation:pulse 1s ease-in-out infinite alternate}
@keyframes pulse{from{opacity:.4}to{opacity:.9}}
.fbth button{position:absolute;top:-6px;right:-6px;width:22px;height:22px;margin:0;padding:0;border-radius:50%;background:#000;color:#fff;border:1px solid var(--line);font-size:11px;display:flex;align-items:center;justify-content:center}
.fbadd{width:auto;min-width:76px;height:76px;padding:0 12px;border-radius:12px;border:1.5px dashed var(--muted);color:var(--fg);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;font-size:12px;font-weight:600;cursor:pointer}
.fbadd svg{width:24px;height:24px;color:#f97316}
.imgview{position:fixed;inset:0;z-index:90;background:rgba(0,0,0,.92);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:calc(env(safe-area-inset-top) + 10px) 10px calc(env(safe-area-inset-bottom) + 10px)}
.imgview img{max-width:100%;max-height:calc(100% - 70px);border-radius:12px;object-fit:contain}
.imgbar{display:flex;gap:10px;margin-top:14px}
.imgview .pfmini{padding:10px 20px;font-size:15px;margin:0}
.suphead{display:flex;flex-direction:column;align-items:center;text-align:center;gap:8px;padding:14px 10px 6px}
.suphead i{width:66px;height:66px;border-radius:50%;background:rgba(236,72,153,.15);color:#ec4899;display:flex;align-items:center;justify-content:center;animation:beat 1.6s ease-in-out infinite}
.suphead i svg{width:34px;height:34px}
@keyframes beat{0%,100%{transform:scale(1)}15%{transform:scale(1.12)}30%{transform:scale(1)}45%{transform:scale(1.08)}}
.suphead b{font-size:21px;font-weight:800}
.suphead span{font-size:14.5px;color:var(--muted);line-height:1.5}
.suplist{display:flex;flex-direction:column;gap:10px;margin-top:12px}
.supcard{display:flex;align-items:center;gap:14px;width:100%;margin:0;padding:14px 16px;border-radius:18px;background:var(--surf);border:1.5px solid color-mix(in srgb,var(--sc) 45%,transparent);color:var(--fg);text-align:left;font-weight:400}
.supcard:active{transform:scale(.98)}
.supcard.off{opacity:.55}
.supemo{font-size:30px;line-height:1;flex:0 0 40px;text-align:center}
.suptx{display:flex;flex-direction:column;gap:3px;flex:1;min-width:0}
.suptx b{font-size:16.5px;font-weight:700}
.suptx small{font-size:12.5px;color:var(--muted)}
.supamt{font-size:18px;font-weight:800;color:var(--sc);white-space:nowrap}
.supcard.off .supamt{font-size:12.5px;font-weight:600;color:var(--muted)}
.supthx{display:flex;flex-direction:column;align-items:center;text-align:center;gap:10px;padding:18px 20px 6px}
.supthx i{width:70px;height:70px;border-radius:50%;background:rgba(236,72,153,.15);color:#ec4899;display:flex;align-items:center;justify-content:center;animation:beat 1.6s ease-in-out infinite}
.supthx i svg{width:36px;height:36px}
.supthx b{font-size:21px;font-weight:800}
.supthx span{color:var(--muted);font-size:15px;line-height:1.45}
.pmrow{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;align-items:center;margin:18px 0 0}
.pmcard{display:flex;align-items:center;justify-content:center;width:50px;height:32px;border-radius:6px;background:#fff;border:1px solid #d9d9d9;box-sizing:border-box}
.pmcard img{display:block}
.pm-visa img{width:36px}
.pm-mc img{width:44px}
.pm-google img{width:36px}
.pm-apple img{width:34px}
.pmmark{display:block;height:32px;width:auto}
.pmsafe{display:flex;align-items:center;justify-content:center;gap:6px;margin:10px 0 0;font-size:12.5px;color:var(--muted);font-weight:600}
.pmsafe svg{width:14px;height:14px}
.pmchip{display:flex;align-items:center;gap:6px;padding:7px 12px;border-radius:999px;background:var(--surf);border:1px solid var(--line);font-size:12.5px;font-weight:600;color:var(--fg)}
.pmchip svg{width:16px;height:16px;color:var(--muted)}
.lgbox{background:var(--surf);border-radius:16px;margin-top:8px;overflow:hidden}
.lghd{display:flex;align-items:center;gap:12px;width:100%;margin:0;padding:14px 16px;background:transparent;border:0;color:var(--fg);font-size:16px;font-weight:600;text-align:left}
.lghd i{display:flex;flex:0 0 24px}.lghd i svg{width:22px;height:22px}
.lghd span{flex:1}
.lghd em{width:8px;height:8px;border-right:2px solid var(--muted);border-bottom:2px solid var(--muted);transform:rotate(45deg);margin:-4px 4px 0;transition:transform .2s}
.lgbox.open .lghd em{transform:rotate(225deg);margin-top:4px}
.lglist{margin:0;padding:0 18px 10px 52px;font-size:14px;line-height:1.5;color:var(--fg)}
.lglist li{margin:0 0 8px}
.lglist li::marker{color:var(--muted)}
.ntcard{display:flex;flex-direction:column;align-items:center;text-align:center;gap:8px;padding:16px 12px 10px}
.ntcard i{width:62px;height:62px;border-radius:50%;background:rgba(142,142,147,.16);color:var(--muted);display:flex;align-items:center;justify-content:center}
.ntcard i svg{width:30px;height:30px}
.ntcard.on i{background:rgba(239,68,68,.15);color:#ef4444;animation:ring 2.4s ease-in-out infinite}
@keyframes ring{0%,60%,100%{transform:rotate(0)}65%{transform:rotate(14deg)}72%{transform:rotate(-12deg)}79%{transform:rotate(8deg)}86%{transform:rotate(-4deg)}}
.ntcard b{font-size:19px;font-weight:800}
.ntcard span{font-size:14px;color:var(--muted);line-height:1.45}
.pfbtn.pfbtn2{background:var(--glasssel);color:var(--danger)}
.ntask{display:flex;flex-direction:column;align-items:center;text-align:center;gap:8px;padding:14px 22px 4px}
.ntask i{width:64px;height:64px;border-radius:50%;background:rgba(239,68,68,.15);color:#ef4444;display:flex;align-items:center;justify-content:center;animation:ring 2.4s ease-in-out infinite}
.ntask i svg{width:32px;height:32px}
.ntask b{font-size:19px;font-weight:800}
.ntask span{font-size:14px;color:var(--muted);line-height:1.45}
.ntlater{display:block;width:calc(100% - 36px);margin:8px 18px 0;height:42px;border-radius:13px;background:transparent;color:var(--muted);font-size:15px;border:0}
.ntstat{display:flex;align-items:baseline;justify-content:center;gap:8px;padding:10px 0 2px}
.ntstat b{font-size:30px;font-weight:800;color:#f97316}
.ntstat span{font-size:13.5px;color:var(--muted)}
.ntprev{display:flex;gap:10px;align-items:flex-start;padding:11px 12px;border-radius:18px;background:rgba(120,120,128,.22);-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);margin:2px 0 6px}
.ntprev img{width:38px;height:38px;border-radius:9px;background:#000;padding:3px;flex:0 0 38px}
.ntprev>div{flex:1;min-width:0}
.nth{display:flex;justify-content:space-between;font-size:13px}.nth b{font-weight:700}.nth span{color:var(--muted);font-size:12px}
.ntt{font-weight:700;font-size:14.5px;margin-top:1px}
.ntb{font-size:14px;line-height:1.35;white-space:pre-wrap;word-break:break-word}
.pfbadge{margin-left:auto;min-width:22px;height:22px;padding:0 7px;border-radius:11px;background:#ef4444;color:#fff;font-size:12.5px;font-weight:700;display:flex;align-items:center;justify-content:center}
.pfrow.chev .pfbadge+*{margin-left:8px}
.pfnote{padding:10px 6px;color:var(--muted);font-size:13.5px;line-height:1.45}
.pfpad{padding:12px}
.pfin2{display:block;width:100%;height:46px;margin:6px 0;padding:0 14px;border-radius:12px;border:1px solid var(--line);background:var(--glasssel);color:var(--fg);font-size:15.5px}
.pfta{display:block;width:100%;min-height:130px;margin:8px 0 6px;padding:12px 14px;border-radius:12px;border:1px solid var(--line);background:var(--glasssel);color:var(--fg);font:inherit;font-size:15.5px;resize:vertical}
.pfbtn{display:block;width:100%;height:46px;margin:8px 0 0;border-radius:13px;background:var(--blue);color:#fff;font-size:15.5px;font-weight:600;border:0}
.pfbtn:disabled{opacity:.5}
.pfcodebig{margin:4px 0 2px;padding:16px 8px 6px;text-align:center;font-size:32px;font-weight:800;letter-spacing:.16em;color:var(--goldfg);font-variant-numeric:tabular-nums;-webkit-user-select:all;user-select:all}
.pfcodename{text-align:center;color:var(--muted);font-size:13.5px;margin-bottom:6px}
.pfacts{display:flex;gap:8px;flex-wrap:wrap;margin:8px 0 6px}
.pfmini{width:auto;margin:0;padding:8px 14px;border-radius:999px;border:0;background:var(--glasssel);color:var(--fg);font-size:13.5px;font-weight:600}
.pfmini.on{background:var(--gold);color:var(--ongold)}
.pfmini.danger{color:var(--danger);margin-left:auto}
.pfstats{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:14px 0 2px}
.pfstats div{background:var(--surf);border-radius:16px;padding:12px 8px;text-align:center;display:flex;flex-direction:column;gap:2px}
.pfstats b{font-size:24px;font-weight:800}
.pfstats span{font-size:12px;color:var(--muted)}
.pfclist{display:flex;flex-direction:column;gap:8px}
.pfccard{background:var(--surf);border-radius:16px;padding:12px 14px 6px;border:1px solid transparent}
.pfccard.unread{border-color:rgba(167,139,250,.6)}
.pfctop{display:flex;align-items:center;gap:8px}
.pfcn{font-weight:700;font-size:15.5px;flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.pfcst{font-size:12px;padding:3px 9px;border-radius:999px;background:var(--glasssel);color:var(--muted);font-weight:600}
.pfcst.on{background:rgba(34,171,148,.16);color:var(--up)}
.pfccode{font-size:20px;font-weight:800;letter-spacing:.12em;color:var(--goldfg);margin:6px 0 2px;font-variant-numeric:tabular-nums}
.pfcmeta{font-size:12px;color:var(--muted);line-height:1.45}
.pfcdate{font-size:12px;color:var(--muted)}
.pffbic{display:flex}.pffbic svg{width:20px;height:20px}
.pffbtx{margin:8px 0 6px;font-size:15px;line-height:1.45;white-space:pre-wrap;word-break:break-word}
.pftypes{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.pftypes button{width:auto;margin:0;padding:12px 4px;border-radius:14px;border:1.5px solid transparent;background:var(--glasssel);color:var(--fg);display:flex;flex-direction:column;align-items:center;gap:6px;font-size:13.5px;font-weight:600}
.pftypes button svg{width:24px;height:24px}
.pftypes button.on{border-color:var(--goldfg)}
.pfdone{display:flex;flex-direction:column;align-items:center;gap:10px;padding:30px 10px;text-align:center;font-size:16px}
.pfdone i{width:58px;height:58px;border-radius:50%;background:rgba(34,171,148,.18);color:var(--up);font-style:normal;font-size:28px;font-weight:800;display:flex;align-items:center;justify-content:center}
.pfsegsm button{font-size:14px;padding:9px 0}
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
#legend{position:absolute;top:calc(env(safe-area-inset-top) + 10px);left:14px;right:96px;z-index:5;color:var(--fg)}
#lgtop{display:flex;align-items:center;gap:8px;font-size:18px;min-width:0}
#lgtop .ic{flex-basis:28px}
#lgname{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}
#lgstat{flex:0 0 auto;display:flex;align-items:center;padding:6px 9px;border-radius:12px;background:var(--glasssel)}
#lgdot{width:10px;height:10px;border-radius:50%;background:var(--faint);display:block}
#lgdot.on{background:var(--up)}
#lgdot.off{background:#8e8e93}
.lyact{margin:8px 18px 0;font-size:12.5px;color:var(--muted);text-align:center}
.lycard{display:flex;align-items:center;gap:12px;width:calc(100% - 24px);margin:6px 12px;padding:11px 12px;border-radius:16px;background:var(--glasssel);border:1px solid transparent;color:var(--fg);text-align:left;font-weight:400}
.lycard.on{border-color:var(--goldfg)}
.lycard .ic{flex-basis:34px}
.lytx{display:flex;flex-direction:column;gap:3px;min-width:0;flex:1}
.lytx b{font-size:16px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.lytx small{font-size:12.5px;color:var(--muted);line-height:1.35}
.lycard .ck{color:var(--goldfg);font-weight:700}
.lycard .addb{margin-left:4px}
#lgstat{cursor:pointer}
#sheet.mkt{padding:6px 0 calc(env(safe-area-inset-bottom) + 18px)}
.mkhead{display:grid;grid-template-columns:44px 1fr 44px;align-items:center;padding:0 12px 4px}
.mkt-t{grid-column:2;text-align:center;font-size:18px;font-weight:700}
.mkx{grid-column:3;width:40px;height:40px;margin:0;padding:0;border-radius:50%;background:var(--glasssel);color:var(--fg);display:flex;align-items:center;justify-content:center}
.mkx svg{width:20px;height:20px}
.mkst{display:flex;align-items:center;gap:10px;padding:14px 20px 4px;font-size:20px;font-weight:700;color:var(--muted)}
.mkst i{width:20px;height:20px;border-radius:50%;background:rgba(142,142,147,.25);display:flex;align-items:center;justify-content:center}
.mkst i::after{content:'';width:9px;height:9px;border-radius:50%;background:#8e8e93}
.mkst.on{color:var(--up)}
.mkst.on i{background:rgba(34,171,148,.22)}.mkst.on i::after{background:var(--up)}
.mktx{padding:2px 20px 6px 50px;font-size:15.5px;line-height:1.4}
.mktx b{display:block;font-weight:700}
.mkday{display:flex;align-items:center;gap:12px;padding:16px 20px 4px 20px}
.mkwd{font-size:12px;color:var(--muted);flex:0 0 32px}
.mkbar{position:relative;flex:1;height:30px}
.mkbar i{position:absolute;top:6px;height:7px;border-radius:4px}
.mkbar i.o{background:var(--up)}.mkbar i.c{background:var(--faint)}
.mkbar em{position:absolute;top:17px;transform:translateX(-50%);font-style:normal;font-size:11.5px;color:var(--muted)}
.mkbar u{position:absolute;top:0;width:2px;height:19px;margin-left:-1px;border-radius:1px;background:var(--fg)}
.mktz{padding:10px 20px 0 64px;font-size:13px;color:var(--muted);line-height:1.4}
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
.cvsw span{white-space:nowrap;font-size:11.5px;max-width:100%;overflow:hidden;text-overflow:ellipsis}
.cvcu i{border:1.5px dashed var(--muted);background:transparent;position:relative}
.cvcu i::after{content:'+';position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:26px;font-weight:300;color:var(--muted);text-shadow:0 0 6px rgba(0,0,0,.4)}
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
  return list.map(b=>({t:+b.t,o:+b.o,h:+b.h,l:+b.l,c:+b.c,v:b.v!=null?+b.v:0})).sort((a,b)=>a.t-b.t);
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
/* serie compatibili con la libreria grafica 5.x (e con la vecchia 4.x) */
function addS(kind,opts){
  const L=window.LightweightCharts;
  if(chart.addSeries&&L&&L[kind+'Series'])return chart.addSeries(L[kind+'Series'],opts);
  return chart['add'+kind+'Series'](opts);
}
function chartOpts(){
  const v=cvOpts();
  return{
    layout:{...v.layout,fontFamily:'-apple-system,system-ui,sans-serif',attributionLogo:false},
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
  if(window.MKT)mktDot();
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
  if(x==='pf'){renderProfile();if(window.fbCount)fbCount(false)}
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
function closeSheet(){$('sheet').hidden=true;$('sheetbg').hidden=true;$('sheet').classList.remove('guide','mkt')}
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
 it:{hub:"Hub del grafico",back:"Indietro",sec_layout:"Layout",sec_chart:"Grafico",sec_anal:"Analisi",sec_sym:"Simbolo",l_new:"Nuovo",l_save:"Salva",l_open:"Apri",c_type:"Tipologia di grafico",c_set:"Impostazioni grafico",a_ind:"Indicatori",a_cmp:"Confronta",a_rp:"Bar Replay",a_alert:"Alert",a_tech:"Tecnici",a_editor:"Editor script",s_det:"Dettagli simbolo",t_candles:"Candele",t_bars:"Barre",t_line:"Linea",t_area:"Area",t_ha:"Heikin Ashi",st_grid:"Griglia",st_pline:"Linea del prezzo",st_cd:"Conto alla rovescia della candela",st_wm:"Logo in filigrana",st_pal:"Colori delle candele",pal_tv:"Verde e rosso",pal_classic:"Classici",pal_mono:"Bianco e grigio",dt_sym:"Simbolo",dt_desc:"Descrizione",dt_cat:"Categoria",dt_last:"Ultimo prezzo",dt_chg:"Variazione oggi",dt_open:"Apertura",dt_high:"Massimo",dt_low:"Minimo",dt_prev:"Chiusura precedente",dt_dec:"Decimali",al_new:"Nuovo alert",al_price:"Prezzo",al_add:"Crea alert",al_list:"Alert",al_none:"Nessun alert.",al_above:"sopra",al_below:"sotto",al_note:"Gli alert suonano solo mentre l'app è aperta.",al_fired:"Alert",al_done:"scattato",cm_hint:"Scegli un simbolo da confrontare: le due linee diventano in percentuale.",cm_off:"Togli il confronto",te_ssell:"Forte vendita",te_sell:"Vendita",te_neu:"Neutrale",te_buy:"Acquisto",te_sbuy:"Forte acquisto",te_osc:"Oscillatori",te_ma:"Medie mobili",te_few:"Servono più candele: prova un timeframe più basso.",te_sum:"Riepilogo",ly_name:"Nome del layout",ly_saved:"Layout salvato.",ly_none:"Nessun layout salvato.",ly_newq:"Cancellare i disegni di questo simbolo e tornare alle impostazioni iniziali del grafico?",ly_yes:"Sì, ricomincia",sh_fail:"Tieni premuta l'immagine per salvarla o condividerla.",draw:"Disegni",ed_soon:"L'editor per i tuoi script e gli indicatori arrivano nella prossima versione."},
 es:{hub:"Centro del gráfico",back:"Atrás",sec_layout:"Diseño",sec_chart:"Gráfico",sec_anal:"Análisis",sec_sym:"Símbolo",l_new:"Nuevo",l_save:"Guardar",l_open:"Abrir",c_type:"Tipo de gráfico",c_set:"Ajustes del gráfico",a_ind:"Indicadores",a_cmp:"Comparar",a_rp:"Bar Replay",a_alert:"Alertas",a_tech:"Técnicos",a_editor:"Editor de scripts",s_det:"Detalles del símbolo",t_candles:"Velas",t_bars:"Barras",t_line:"Línea",t_area:"Área",t_ha:"Heikin Ashi",st_grid:"Cuadrícula",st_pline:"Línea de precio",st_cd:"Cuenta atrás de la vela",st_wm:"Logo de fondo",st_pal:"Colores de las velas",pal_tv:"Verde y rojo",pal_classic:"Clásicos",pal_mono:"Blanco y gris",dt_sym:"Símbolo",dt_desc:"Descripción",dt_cat:"Categoría",dt_last:"Último precio",dt_chg:"Variación hoy",dt_open:"Apertura",dt_high:"Máximo",dt_low:"Mínimo",dt_prev:"Cierre anterior",dt_dec:"Decimales",al_new:"Nueva alerta",al_price:"Precio",al_add:"Crear alerta",al_list:"Alertas",al_none:"No hay alertas.",al_above:"por encima",al_below:"por debajo",al_note:"Las alertas solo suenan con la app abierta.",al_fired:"Alerta",al_done:"activada",cm_hint:"Elige un símbolo para comparar: las dos líneas pasan a porcentaje.",cm_off:"Quitar comparación",te_ssell:"Venta fuerte",te_sell:"Venta",te_neu:"Neutral",te_buy:"Compra",te_sbuy:"Compra fuerte",te_osc:"Osciladores",te_ma:"Medias móviles",te_few:"Hacen falta más velas: prueba una temporalidad más baja.",te_sum:"Resumen",ly_name:"Nombre del diseño",ly_saved:"Diseño guardado.",ly_none:"No hay diseños guardados.",ly_newq:"¿Borrar los dibujos de este símbolo y volver a los ajustes iniciales del gráfico?",ly_yes:"Sí, empezar de nuevo",sh_fail:"Mantén pulsada la imagen para guardarla o compartirla.",draw:"Dibujos",ed_soon:"El editor de scripts y los indicadores llegan en la próxima versión."},
 en:{hub:"Chart hub",back:"Back",sec_layout:"Layout",sec_chart:"Chart",sec_anal:"Analysis",sec_sym:"Symbol",l_new:"New",l_save:"Save",l_open:"Open",c_type:"Chart type",c_set:"Chart settings",a_ind:"Indicators",a_cmp:"Compare",a_rp:"Bar Replay",a_alert:"Alerts",a_tech:"Technicals",a_editor:"Script editor",s_det:"Symbol details",t_candles:"Candles",t_bars:"Bars",t_line:"Line",t_area:"Area",t_ha:"Heikin Ashi",st_grid:"Grid",st_pline:"Price line",st_cd:"Candle countdown",st_wm:"Watermark logo",st_pal:"Candle colors",pal_tv:"Green and red",pal_classic:"Classic",pal_mono:"White and grey",dt_sym:"Symbol",dt_desc:"Description",dt_cat:"Category",dt_last:"Last price",dt_chg:"Change today",dt_open:"Open",dt_high:"High",dt_low:"Low",dt_prev:"Previous close",dt_dec:"Decimals",al_new:"New alert",al_price:"Price",al_add:"Create alert",al_list:"Alerts",al_none:"No alerts.",al_above:"above",al_below:"below",al_note:"Alerts only ring while the app is open.",al_fired:"Alert",al_done:"triggered",cm_hint:"Pick a symbol to compare: both lines switch to percent.",cm_off:"Remove comparison",te_ssell:"Strong sell",te_sell:"Sell",te_neu:"Neutral",te_buy:"Buy",te_sbuy:"Strong buy",te_osc:"Oscillators",te_ma:"Moving averages",te_few:"More candles needed: try a lower timeframe.",te_sum:"Summary",ly_name:"Layout name",ly_saved:"Layout saved.",ly_none:"No saved layouts.",ly_newq:"Delete this symbol's drawings and reset the chart settings?",ly_yes:"Yes, start over",sh_fail:"Press and hold the image to save or share it.",draw:"Drawings",ed_soon:"The script editor and indicators come in the next version."},
 fr:{hub:"Hub du graphique",back:"Retour",sec_layout:"Mise en page",sec_chart:"Graphique",sec_anal:"Analyse",sec_sym:"Symbole",l_new:"Nouveau",l_save:"Enregistrer",l_open:"Ouvrir",c_type:"Type de graphique",c_set:"Réglages du graphique",a_ind:"Indicateurs",a_cmp:"Comparer",a_rp:"Bar Replay",a_alert:"Alertes",a_tech:"Techniques",a_editor:"Éditeur de scripts",s_det:"Détails du symbole",t_candles:"Bougies",t_bars:"Barres",t_line:"Ligne",t_area:"Aire",t_ha:"Heikin Ashi",st_grid:"Grille",st_pline:"Ligne de prix",st_cd:"Compte à rebours de la bougie",st_wm:"Logo en filigrane",st_pal:"Couleurs des bougies",pal_tv:"Vert et rouge",pal_classic:"Classiques",pal_mono:"Blanc et gris",dt_sym:"Symbole",dt_desc:"Description",dt_cat:"Catégorie",dt_last:"Dernier prix",dt_chg:"Variation du jour",dt_open:"Ouverture",dt_high:"Plus haut",dt_low:"Plus bas",dt_prev:"Clôture précédente",dt_dec:"Décimales",al_new:"Nouvelle alerte",al_price:"Prix",al_add:"Créer l'alerte",al_list:"Alertes",al_none:"Aucune alerte.",al_above:"au-dessus",al_below:"en dessous",al_note:"Les alertes ne sonnent que quand l'app est ouverte.",al_fired:"Alerte",al_done:"déclenchée",cm_hint:"Choisis un symbole à comparer : les deux lignes passent en pourcentage.",cm_off:"Retirer la comparaison",te_ssell:"Vente forte",te_sell:"Vente",te_neu:"Neutre",te_buy:"Achat",te_sbuy:"Achat fort",te_osc:"Oscillateurs",te_ma:"Moyennes mobiles",te_few:"Il faut plus de bougies : essaie une unité de temps plus basse.",te_sum:"Résumé",ly_name:"Nom de la mise en page",ly_saved:"Mise en page enregistrée.",ly_none:"Aucune mise en page enregistrée.",ly_newq:"Supprimer les dessins de ce symbole et revenir aux réglages initiaux ?",ly_yes:"Oui, recommencer",sh_fail:"Appuie longuement sur l'image pour l'enregistrer ou la partager.",draw:"Dessins",ed_soon:"L'éditeur de scripts et les indicateurs arrivent dans la prochaine version."}
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
  if(CS.type==='bars')return addS('Bar',Object.assign(base,{upColor:U,downColor:D,thinBars:false}));
  if(CS.type==='line')return addS('Line',Object.assign(base,{color:blue,lineWidth:2}));
  if(CS.type==='area')return addS('Area',Object.assign(base,{lineColor:blue,topColor:'rgba(41, 98, 255, 0.35)',bottomColor:'rgba(41, 98, 255, 0.02)',lineWidth:2}));
  return addS('Candlestick',Object.assign(base,{upColor:U,downColor:D,borderVisible:false,wickUpColor:U,wickDownColor:D}));
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
    CMP.series=addS('Line',{color:'#ff9800',lineWidth:2,priceLineVisible:false,lastValueVisible:true});
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
var HCOL={new:'#2dd4bf',save:'#3b82f6',open:'#f59e0b',type:'#fb923c',set:'#a1a1aa',canvas:'#e879f9',det:'#38bdf8',ind:'#8b5cf6',cmp:'#06b6d4',rp:'#6366f1',alert:'#ef4444',tech:'#facc15',ed:'#22c55e'};
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
  tilesInto(b,'',[['type',th('c_type'),()=>hubPage(th('c_type'),pageType)],['set',th('c_set'),()=>hubPage(th('c_set'),pageSet)],['canvas',cvt('canvas'),()=>hubPage(cvt('canvas'),pageCanvas)],['det',th('s_det'),()=>hubPage(th('s_det'),pageDet)]]);
  shEl(b,'sh-l',th('sec_anal'));
  tilesInto(b,'',[
    ['ind',th('a_ind'),()=>hubPage(th('a_ind'),pageSoon)],
    ['cmp',th('a_cmp'),()=>hubPage(th('a_cmp'),pageCmp)],
    ['rp',th('a_rp'),()=>{closeHub();rpStart()}],
    ['alert',th('a_alert'),()=>hubPage(th('a_alert'),pageAlert)],
    ['tech',th('a_tech'),()=>hubPage(th('a_tech'),pageTech)],
    ['ed',th('a_editor'),()=>{closeHub();openEditor()}]
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
var CV_DEF={p:'black',vg:true,hg:true,xs:3,ts:12,lv:false,mt:20,mb:6,mr:6};
function cvCfg(){
  if(!window.CS)return Object.assign({},CV_DEF);
  if(!CS.cv)CS.cv=Object.assign({},CV_DEF);
  if(!CS.cv.p||CS.cv.p==='auto')CS.cv.p='black';
  return CS.cv;
}
/* valori finali, gia' risolti (automatico = come prima: tema + sfumatura del giorno) */
function cvRes(){
  const v=cvCfg();
  let base;
  if(v.p==='custom'){
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
  if(custom&&v.p!=='custom'){const r=cvRes();v.c={type:r.type,c1:r.c1,c2:r.c2,gc:r.gc,hc:r.hc,xc:r.xc,tc:r.tc,lc:r.lc};v.p='custom';document.querySelectorAll('.cvsw.on').forEach(e=>e.classList.remove('on'));const cu=document.querySelector('.cvcu');if(cu)cu.classList.add('on')}
  if(custom){const cu=document.querySelector('.cvcu i');if(cu){const c=Object.assign({},v.c,patch);cu.style.background=c.type==='grad'?'linear-gradient('+c.c1+','+c.c2+')':c.c1}}
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
  sw('black','#000',cvt('black'));
  sw('red','linear-gradient(#000,#2e0508)',cvt('red'));
  sw('white','#fff',cvt('white'));
  /* riquadro vuoto: il tuo canvas personalizzato */
  const cu=document.createElement('button');cu.className='cvsw cvcu'+(v.p==='custom'?' on':'');
  cu.innerHTML='<i></i><span></span>';cu.lastChild.textContent=cvt('custom');
  if(v.p==='custom'){const r0=cvRes();cu.firstChild.style.background=r0.type==='grad'?'linear-gradient('+r0.c1+','+r0.c2+')':r0.c1}
  cu.onclick=()=>{if(v.p!=='custom'){const r0=cvRes();v.c={type:r0.type,c1:r0.c1,c2:r0.c2,gc:r0.gc,hc:r0.hc,xc:r0.xc,tc:r0.tc,lc:r0.lc};v.p='custom';saveCS();applyCanvas()}hubRender()};
  g.appendChild(cu);
  b.appendChild(g);

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


/* =====================================================================
   STATO DEL MERCATO: pallino verde se aperto, grigio se chiuso.
   Orari sul fuso di New York, come TradingView.
   ===================================================================== */
var MKT={
 it:{open:"Mercato aperto",closed:"Mercato chiuso",okOpen:"Tutto a posto. Il mercato è aperto.",okClosed:"Il mercato è chiuso.",closes:"Chiuderà tra",opens:"Aprirà tra",always:"Questo mercato è aperto 24 ore su 24, 7 giorni su 7.",tz:"Fuso orario della borsa: New York",h:"ore",h1:"ora",m:"minuti",m1:"minuto",d:"giorni",d1:"giorno",and:"e"},
 es:{open:"Mercado abierto",closed:"Mercado cerrado",okOpen:"Todo en orden. El mercado está abierto.",okClosed:"El mercado está cerrado.",closes:"Cerrará en",opens:"Abrirá en",always:"Este mercado está abierto las 24 horas, los 7 días.",tz:"Zona horaria de la bolsa: Nueva York",h:"horas",h1:"hora",m:"minutos",m1:"minuto",d:"días",d1:"día",and:"y"},
 en:{open:"Market open",closed:"Market closed",okOpen:"All good. The market is open.",okClosed:"The market is closed.",closes:"It will close in",opens:"It will open in",always:"This market is open 24 hours a day, 7 days a week.",tz:"Exchange time zone: New York",h:"hours",h1:"hour",m:"minutes",m1:"minute",d:"days",d1:"day",and:"and"},
 fr:{open:"Marché ouvert",closed:"Marché fermé",okOpen:"Tout va bien. Le marché est ouvert.",okClosed:"Le marché est fermé.",closes:"Il fermera dans",opens:"Il ouvrira dans",always:"Ce marché est ouvert 24 h sur 24, 7 jours sur 7.",tz:"Fuseau horaire de la bourse : New York",h:"heures",h1:"heure",m:"minutes",m1:"minute",d:"jours",d1:"jour",and:"et"}
};
function mk(k){return(MKT[lang]&&MKT[lang][k])||MKT.it[k]}
const NYF=new Intl.DateTimeFormat('en-US',{timeZone:'America/New_York',hourCycle:'h23',weekday:'short',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit'});
const WDN={Sun:0,Mon:1,Tue:2,Wed:3,Thu:4,Fri:5,Sat:6};
function nyParts(ms){
  const o={};NYF.formatToParts(new Date(ms)).forEach(p=>o[p.type]=p.value);
  return{wd:WDN[o.weekday],h:+o.hour%24,mi:+o.minute,y:+o.year,mo:+o.month,d:+o.day};
}
/* tipo di orario per ogni mercato */
function mktKind(name){
  const it=BYN[name];const cat=it?info(it).cat:'oth';
  if(cat==='cry')return'always';
  if(cat==='fx')return'fx';
  return'daily';   /* metalli e indici: domenica 18:00 - venerdi' 17:00, pausa ogni giorno 17:00-18:00 */
}
function mktOpenAt(kind,p){
  if(kind==='always')return true;
  const mins=p.h*60+p.mi;
  if(p.wd===6)return false;                       /* sabato */
  if(p.wd===0)return mins>=(kind==='fx'?17:18)*60; /* domenica sera */
  if(p.wd===5)return mins<17*60;                   /* venerdi' fino alle 17 */
  if(kind==='daily')return!(mins>=17*60&&mins<18*60);
  return true;
}
function mktOpen(name,ms){return mktOpenAt(mktKind(name),nyParts(ms||Date.now()))}
/* minuti al prossimo cambio (apertura o chiusura) */
function mktNext(name){
  const k=mktKind(name);if(k==='always')return null;
  const now=Date.now(),st=mktOpenAt(k,nyParts(now));
  let t=Math.ceil(now/60000)*60000;
  for(let i=0;i<60*24*8;i+=1,t+=60000){if(mktOpenAt(k,nyParts(t))!==st)return t}
  return null;
}
function mktDur(ms){
  let m=Math.max(1,Math.round(ms/60000));const d=Math.floor(m/1440);m-=d*1440;const h=Math.floor(m/60);m-=h*60;
  const part=(n,a,b)=>n+' '+(n===1?mk(a):mk(b));
  const out=[];if(d)out.push(part(d,'d1','d'));if(h)out.push(part(h,'h1','h'));if(m&&!d)out.push(part(m,'m1','m'));
  return out.length>1?out.slice(0,-1).join(', ')+' '+mk('and')+' '+out[out.length-1]:out[0];
}
function mktDot(){
  const d=$('lgdot');if(!d||!cur)return;
  const o=mktOpen(cur);d.classList.toggle('on',o);d.classList.toggle('off',!o);
}
setInterval(()=>{if(tab==='ch')mktDot()},30000);
function openMarket(){
  if(!cur)return;
  const k=mktKind(cur),o=mktOpen(cur),nx=mktNext(cur),now=Date.now(),p=nyParts(now);
  openSheet(s=>{
    s.classList.add('mkt');
    const hd=document.createElement('div');hd.className='mkhead';
    hd.innerHTML='<div class="mkt-t"></div><button class="mkx" aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button>';
    hd.firstChild.textContent=cur;hd.lastChild.onclick=closeSheet;s.appendChild(hd);
    const st=document.createElement('div');st.className='mkst'+(o?' on':'');
    st.innerHTML='<i></i><span></span>';st.lastChild.textContent=o?mk('open'):mk('closed');s.appendChild(st);
    const tx=document.createElement('div');tx.className='mktx';
    const a=document.createElement('div');a.textContent=k==='always'?mk('always'):(o?mk('okOpen'):mk('okClosed'));tx.appendChild(a);
    if(nx){const b=document.createElement('b');b.textContent=(o?mk('closes'):mk('opens'))+' '+mktDur(nx-now)+'.';tx.appendChild(b)}
    s.appendChild(tx);
    /* barra della giornata a New York: tratti aperti in verde, chiusi in grigio, linea su "adesso" */
    const day=document.createElement('div');day.className='mkday';
    const wd=new Date(Date.UTC(2026,0,4+p.wd)).toLocaleDateString(LOC[lang]||'it-IT',{weekday:'short',timeZone:'UTC'}).replace('.','').toUpperCase();
    const lab=document.createElement('span');lab.className='mkwd';lab.textContent=wd;day.appendChild(lab);
    const bar=document.createElement('div');bar.className='mkbar';
    const segs=[];let prev=null,startM=0;
    for(let m=0;m<=1440;m+=15){
      const v=m<1440?mktOpenAt(k,{wd:p.wd,h:Math.floor(m/60),mi:m%60}):null;
      if(v!==prev){if(prev!==null)segs.push([startM,m,prev]);prev=v;startM=m}
    }
    segs.forEach(([a1,b1,v])=>{const e=document.createElement('i');e.className=v?'o':'c';e.style.left=(a1/14.4)+'%';e.style.width='calc('+((b1-a1)/14.4)+'% - 4px)';bar.appendChild(e)});
    let lastL=-99;
    segs.slice(1).forEach(([a1])=>{if(a1-lastL<180)return;lastL=a1;const l=document.createElement('em');l.style.left=(a1/14.4)+'%';l.textContent=String(Math.floor(a1/60)).padStart(2,'0')+':'+String(a1%60).padStart(2,'0');bar.appendChild(l)});
    const nowM=p.h*60+p.mi,mark=document.createElement('u');mark.style.left=(nowM/14.4)+'%';bar.appendChild(mark);
    day.appendChild(bar);s.appendChild(day);
    const tz=document.createElement('div');tz.className='mktz';
    const off=-Math.round((new Date(now).getTime()-Date.UTC(p.y,p.mo-1,p.d,p.h,p.mi))/3600000);
    tz.textContent=mk('tz')+' (UTC'+(off>=0?'+':'')+off+'), '+String(p.h).padStart(2,'0')+':'+String(p.mi).padStart(2,'0');
    s.appendChild(tz);
  });
}
$('lgstat').onclick=openMarket;


/* =====================================================================
   LAYOUT come TradingView: salva tutto lo spazio di lavoro del grafico
   (simbolo, timeframe, tipo, impostazioni e canvas, disegni di tutti i
   simboli, confronto, zoom; indicatori quando arriveranno)
   ===================================================================== */
var LYT={
 it:{active:"Layout attivo",none:"Nessun layout attivo",saveCur:"Salva",saveNew:"Salva come nuovo",saved:"Layout salvato.",updated:"Layout aggiornato.",what:"Un layout salva tutto lo spazio di lavoro: simbolo, timeframe, tipo di grafico, impostazioni e canvas, i disegni di tutti i simboli, il confronto e lo zoom. Gli indicatori verranno salvati appena arriveranno.",draws:"disegni",draw1:"disegno",open:"aperto",newq:"Iniziare un layout nuovo? Il grafico torna pulito, senza disegni e con le impostazioni iniziali. Il layout attivo viene salvato prima, quindi non perdi niente.",newyes:"Sì, nuovo layout",newdone:"Nuovo layout pronto.",openq:"I disegni non salvati in un layout verranno sostituiti da quelli del layout che apri. Continuare?",delq:"Eliminare questo layout?",rename:"Rinomina",multi:"Più grafici nella stessa schermata arriveranno più avanti."},
 es:{active:"Diseño activo",none:"Ningún diseño activo",saveCur:"Guardar",saveNew:"Guardar como nuevo",saved:"Diseño guardado.",updated:"Diseño actualizado.",what:"Un diseño guarda todo el espacio de trabajo: símbolo, temporalidad, tipo de gráfico, ajustes y lienzo, los dibujos de todos los símbolos, la comparación y el zoom. Los indicadores se guardarán en cuanto lleguen.",draws:"dibujos",draw1:"dibujo",open:"abierto",newq:"¿Empezar un diseño nuevo? El gráfico queda limpio, sin dibujos y con los ajustes iniciales. El diseño activo se guarda antes, así no pierdes nada.",newyes:"Sí, diseño nuevo",newdone:"Diseño nuevo listo.",openq:"Los dibujos que no estén guardados en un diseño se sustituirán por los del diseño que abres. ¿Continuar?",delq:"¿Eliminar este diseño?",rename:"Renombrar",multi:"Varios gráficos en la misma pantalla llegarán más adelante."},
 en:{active:"Active layout",none:"No active layout",saveCur:"Save",saveNew:"Save as new",saved:"Layout saved.",updated:"Layout updated.",what:"A layout saves your whole workspace: symbol, timeframe, chart type, settings and canvas, the drawings of every symbol, the comparison and the zoom. Indicators will be saved as soon as they arrive.",draws:"drawings",draw1:"drawing",open:"open",newq:"Start a new layout? The chart becomes clean, with no drawings and default settings. The active layout is saved first, so you lose nothing.",newyes:"Yes, new layout",newdone:"New layout ready.",openq:"Drawings not saved in a layout will be replaced by the ones in the layout you open. Continue?",delq:"Delete this layout?",rename:"Rename",multi:"Multiple charts on one screen will come later."},
 fr:{active:"Mise en page active",none:"Aucune mise en page active",saveCur:"Enregistrer",saveNew:"Enregistrer comme nouvelle",saved:"Mise en page enregistrée.",updated:"Mise en page mise à jour.",what:"Une mise en page enregistre tout l'espace de travail : symbole, unité de temps, type de graphique, réglages et canevas, les dessins de tous les symboles, la comparaison et le zoom. Les indicateurs seront enregistrés dès qu'ils arriveront.",draws:"dessins",draw1:"dessin",open:"ouverte",newq:"Commencer une nouvelle mise en page ? Le graphique redevient propre, sans dessins et avec les réglages initiaux. La mise en page active est enregistrée avant, tu ne perds rien.",newyes:"Oui, nouvelle mise en page",newdone:"Nouvelle mise en page prête.",openq:"Les dessins non enregistrés dans une mise en page seront remplacés par ceux de la mise en page que tu ouvres. Continuer ?",delq:"Supprimer cette mise en page ?",rename:"Renommer",multi:"Plusieurs graphiques sur le même écran arriveront plus tard."}
};
function lyt(k){return(LYT[lang]&&LYT[lang][k])||LYT.it[k]}
var LY_CUR=lsGet('tc_lycur',null);
function lyCurSet(id){LY_CUR=id;lsSet('tc_lycur',id)}
function lyActive(){return LAYOUTS.find(l=>l.id&&l.id===LY_CUR)||null}
/* tutti i disegni di tutti i simboli */
function allDraws(){
  try{dSave()}catch(e){}
  const o={};
  try{for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k&&k.startsWith('tc_draw_')){const v=lsGet(k,[]);if(v&&v.length)o[k.slice(8)]=v}}}catch(e){}
  return o;
}
function setAllDraws(o){
  try{
    const ks=[];for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k&&k.startsWith('tc_draw_'))ks.push(k)}
    ks.forEach(k=>localStorage.removeItem(k));
  }catch(e){}
  Object.keys(o||{}).forEach(s=>lsSet('tc_draw_'+s,o[s]));
}
function viewNow(){
  try{const r=chart.timeScale().getVisibleLogicalRange(),n=lastBars.length;if(!r||!n)return null;return{to:r.to-(n-1),w:r.to-r.from}}catch(e){return null}
}
function lySnap(name,id){
  return{v:2,id:id||('L'+Date.now().toString(36)),name,sym:cur,res,cs:JSON.parse(JSON.stringify(CS)),draws:allDraws(),cmp:CMP.sym||null,view:viewNow(),ind:(typeof IND!=='undefined'?JSON.parse(JSON.stringify(IND)):[]),ts:Date.now()};
}
function lySaveActive(quiet){
  const a=lyActive();if(!a)return false;
  const s=lySnap(a.name,a.id);LAYOUTS=LAYOUTS.map(l=>l===a?s:l);saveLayouts();
  if(!quiet)msg(lyt('updated'));return true;
}
function lyDrawCount(l){const d=l.draws||(l.sym?{[l.sym]:l.draw||[]}:{});return Object.values(d).reduce((s,a)=>s+(a?a.length:0),0)}
function lyApply(l){
  const draws=l.draws||(l.sym?{[l.sym]:l.draw||[]}:{});
  setAllDraws(draws);
  CS=Object.assign({},CS_DEF,JSON.parse(JSON.stringify(l.cs||{})));saveCS();
  if(l.id)lyCurSet(l.id);
  closeHub();
  if(l.sym&&l.sym!==cur&&BYN[l.sym])setCur(l.sym);
  dLoad();
  if(l.res&&l.res!==res)setRes(l.res);
  rebuildSeries();applyCS();applyCanvas();
  setTimeout(()=>cmpSet(l.cmp||null),300);
  if(Array.isArray(l.ind)&&typeof IND!=='undefined'){IND.forEach(x=>indClearSeries(x.uid));IND=JSON.parse(JSON.stringify(l.ind));IR.clear();indSave();indRender();indSchedule(true)}
  /* zoom: appena le candele sono caricate rimetto la stessa vista */
  if(l.view){
    const want=(l.sym||cur)+'|'+(l.res||res);let n=0;
    const tmr=setInterval(()=>{
      if(++n>40){clearInterval(tmr);return}
      if(cur+'|'+res!==want||!lastBars.length)return;
      clearInterval(tmr);
      try{const last=lastBars.length-1;chart.timeScale().setVisibleLogicalRange({from:last+l.view.to-l.view.w,to:last+l.view.to})}catch(e){}
    },150);
  }
  msg('');
}
/* ---- pagine dell'Hub (sostituiscono quelle di prima) ---- */
function hubNew(){
  hubPage(th('l_new'),b=>{
    shEl(b,'sh-note',lyt('newq'));
    shItem(b,lyt('newyes'),{danger:true,on:()=>{
      lySaveActive(true);
      setAllDraws({});drawings=[];dSel=null;
      CS=Object.assign({},CS_DEF);saveCS();lyCurSet(null);
      cmpSet(null);if(typeof IND!=='undefined'){IND.forEach(x=>indClearSeries(x.uid));IND=[];IR.clear();indSave();indRender()}rebuildSeries();applyCS();applyCanvas();closeHub();msg(lyt('newdone'));
    }});
  });
}
function pageSave(b){
  const a=lyActive();
  shEl(b,'sh-note',lyt('what'));
  if(a){
    shEl(b,'sh-l',lyt('active'));
    const row0=document.createElement('div');row0.className='chips';
    const up=document.createElement('button');up.className='chip on';up.textContent=lyt('saveCur')+' «'+a.name+'»';
    up.onclick=()=>{lySaveActive(false);closeHub()};row0.appendChild(up);b.appendChild(row0);
  }
  shEl(b,'sh-l',a?lyt('saveNew'):th('l_save'));
  const inp=document.createElement('input');inp.className='hinput';inp.placeholder=th('ly_name');inp.value=a?'':(cur+' '+res);b.appendChild(inp);
  const row=document.createElement('div');row.className='chips';
  const ok=document.createElement('button');ok.className='chip'+(a?'':' on');ok.textContent=a?lyt('saveNew'):th('l_save');
  ok.onclick=()=>{
    const name=inp.value.trim()||(cur+' '+res);
    const old=LAYOUTS.find(l=>l.name===name);
    const s=lySnap(name,old&&old.id);
    LAYOUTS=[s].concat(LAYOUTS.filter(l=>l!==old));
    saveLayouts();lyCurSet(s.id);msg(lyt('saved'));closeHub();
  };
  row.appendChild(ok);b.appendChild(row);
  shEl(b,'sh-note',lyt('multi'));
}
function pageOpen(b){
  if(!LAYOUTS.length){shEl(b,'sh-note',th('ly_none'));return}
  LAYOUTS.forEach(l=>{if(!l.id)l.id='L'+(l.ts||Date.now()).toString(36)+Math.random().toString(36).slice(2,5)});saveLayouts();
  const TN={candles:'t_candles',bars:'t_bars',line:'t_line',area:'t_area',ha:'t_ha'};
  LAYOUTS.forEach(l=>{
    const del=document.createElement('button');del.className='addb';del.innerHTML='✕';del.setAttribute('aria-label',t('del'));
    del.onclick=e=>{e.stopPropagation();if(!confirm(lyt('delq')))return;LAYOUTS=LAYOUTS.filter(x=>x!==l);if(l.id===LY_CUR)lyCurSet(null);saveLayouts();hubRender()};
    const it=BYN[l.sym],nd=lyDrawCount(l);
    const card=document.createElement('button');card.className='lycard'+(l.id===LY_CUR?' on':'');
    if(it)card.appendChild(iconEl(it,34));
    const tx=document.createElement('span');tx.className='lytx';
    const t1=document.createElement('b');t1.textContent=l.name;tx.appendChild(t1);
    const t2=document.createElement('small');
    const ty=l.cs&&l.cs.type?th(TN[l.cs.type]||'t_candles'):th('t_candles');
    const d=l.ts?new Date(l.ts).toLocaleDateString(LOC[lang]||'it-IT',{day:'2-digit',month:'short'}):'';
    t2.textContent=[l.sym,l.res,ty,nd+' '+(nd===1?lyt('draw1'):lyt('draws')),d].filter(Boolean).join(' · ');tx.appendChild(t2);
    card.appendChild(tx);
    if(l.id===LY_CUR){const c=document.createElement('span');c.className='ck';c.textContent='✓';card.appendChild(c)}
    card.appendChild(del);
    card.onclick=()=>{
      if(l.id===LY_CUR){lyApply(l);return}
      if(lyActive())lySaveActive(true);
      else if(Object.keys(allDraws()).length&&!confirm(lyt('openq')))return;
      lyApply(l);
    };
    b.appendChild(card);
  });
}
/* nome del layout attivo sotto i tre riquadri dell'Hub */
(function(){
  const orig=hubRoot;
  hubRoot=function(b){
    orig(b);
    const a=lyActive(),el=document.createElement('div');el.className='lyact';
    el.textContent=a?lyt('active')+': '+a.name:lyt('none');
    const first=b.querySelector('.htiles');if(first&&first.nextSibling)b.insertBefore(el,first.nextSibling);else b.appendChild(el);
  };
})();


/* =====================================================================
   PROFILO 2: icone colorate, Codici amici, Social, Segnalazioni
   ===================================================================== */
var PF2={
 it:{social:"Social",socsub:"Seguici e resta aggiornato",tgch:"Canale Telegram",tgchsub:"Novità e aggiornamenti",tgpr:"Contatto Telegram",tgprsub:"Scrivimi direttamente",soon:"In arrivo",fb:"Segnala o proponi",fbsub:"Un problema, un'idea, un consiglio",inbox:"Segnalazioni ricevute",inboxsub:"Leggi e gestisci i messaggi",codessub2:"Crea, invia e gestisci i codici",ref_ok:"Dati aggiornati. Hai già l'ultima versione",ref_new:"Nuova versione trovata, aggiorno…",ref_err:"Non riesco ad aggiornare adesso, riprova tra poco.",
  t_bug:"Problema",t_idea:"Idea",t_other:"Altro",fbph:"Descrivi cosa succede o cosa vorresti…",fbcontact:"Il tuo Telegram (facoltativo)",fbsend:"Invia",fbsent:"Grazie! Il messaggio è arrivato.",fbnote:"Insieme al messaggio inviamo solo la versione dell'app, il tipo di telefono e la lingua, per capire meglio il problema.",fbshort:"Scrivi almeno qualche parola.",fbmany:"Hai già inviato molti messaggi oggi. Riprova domani.",fbagain:"Scrivi un altro messaggio",
  all:"Tutte",new:"Nuove",done:"Risolte",markread:"Letta",markdone:"Risolta",reopen:"Riapri",del:"Elimina",delq:"Eliminare questo messaggio?",empty:"Nessun messaggio qui.",from_owner:"da te",from_web:"senza codice",from_code:"codice",
  st_total:"Codici",st_used:"In uso",st_free:"Liberi",created:"Creato",used_on:"Usato dal",copy:"Copia",send:"Invia",off:"Disattiva",newcode:"Nuovo codice"},
 es:{social:"Redes sociales",socsub:"Síguenos y mantente al día",tgch:"Canal de Telegram",tgchsub:"Novedades y actualizaciones",tgpr:"Contacto de Telegram",tgprsub:"Escríbeme directamente",soon:"Próximamente",fb:"Informar o proponer",fbsub:"Un problema, una idea, un consejo",inbox:"Mensajes recibidos",inboxsub:"Lee y gestiona los mensajes",codessub2:"Crea, envía y gestiona los códigos",ref_ok:"Datos actualizados. Ya tienes la última versión",ref_new:"Nueva versión encontrada, actualizando…",ref_err:"No puedo actualizar ahora, inténtalo en un momento.",
  t_bug:"Problema",t_idea:"Idea",t_other:"Otro",fbph:"Describe qué pasa o qué te gustaría…",fbcontact:"Tu Telegram (opcional)",fbsend:"Enviar",fbsent:"¡Gracias! El mensaje ha llegado.",fbnote:"Con el mensaje solo enviamos la versión de la app, el tipo de teléfono y el idioma, para entender mejor el problema.",fbshort:"Escribe al menos unas palabras.",fbmany:"Ya has enviado muchos mensajes hoy. Inténtalo mañana.",fbagain:"Escribir otro mensaje",
  all:"Todos",new:"Nuevos",done:"Resueltos",markread:"Leído",markdone:"Resuelto",reopen:"Reabrir",del:"Eliminar",delq:"¿Eliminar este mensaje?",empty:"No hay mensajes aquí.",from_owner:"tuyo",from_web:"sin código",from_code:"código",
  st_total:"Códigos",st_used:"En uso",st_free:"Libres",created:"Creado",used_on:"En uso desde",copy:"Copiar",send:"Enviar",off:"Desactivar",newcode:"Código nuevo"},
 en:{social:"Social",socsub:"Follow us and stay updated",tgch:"Telegram channel",tgchsub:"News and updates",tgpr:"Telegram contact",tgprsub:"Message me directly",soon:"Coming soon",fb:"Report or suggest",fbsub:"A problem, an idea, some advice",inbox:"Received messages",inboxsub:"Read and manage messages",codessub2:"Create, send and manage codes",ref_ok:"Data refreshed. You already have the latest version",ref_new:"New version found, updating…",ref_err:"Can't refresh right now, try again shortly.",
  t_bug:"Problem",t_idea:"Idea",t_other:"Other",fbph:"Describe what happens or what you'd like…",fbcontact:"Your Telegram (optional)",fbsend:"Send",fbsent:"Thanks! Your message has arrived.",fbnote:"Along with the message we only send the app version, the phone type and the language, to better understand the problem.",fbshort:"Write at least a few words.",fbmany:"You've already sent many messages today. Try again tomorrow.",fbagain:"Write another message",
  all:"All",new:"New",done:"Solved",markread:"Read",markdone:"Solved",reopen:"Reopen",del:"Delete",delq:"Delete this message?",empty:"No messages here.",from_owner:"from you",from_web:"no code",from_code:"code",
  st_total:"Codes",st_used:"In use",st_free:"Free",created:"Created",used_on:"In use since",copy:"Copy",send:"Send",off:"Deactivate",newcode:"New code"},
 fr:{social:"Réseaux sociaux",socsub:"Suis-nous et reste informé",tgch:"Canal Telegram",tgchsub:"Nouveautés et mises à jour",tgpr:"Contact Telegram",tgprsub:"Écris-moi directement",soon:"Bientôt",fb:"Signaler ou proposer",fbsub:"Un problème, une idée, un conseil",inbox:"Messages reçus",inboxsub:"Lis et gère les messages",codessub2:"Crée, envoie et gère les codes",ref_ok:"Données à jour. Tu as déjà la dernière version",ref_new:"Nouvelle version trouvée, mise à jour…",ref_err:"Impossible d'actualiser maintenant, réessaie dans un instant.",
  t_bug:"Problème",t_idea:"Idée",t_other:"Autre",fbph:"Décris ce qui se passe ou ce que tu voudrais…",fbcontact:"Ton Telegram (facultatif)",fbsend:"Envoyer",fbsent:"Merci ! Le message est bien arrivé.",fbnote:"Avec le message nous envoyons seulement la version de l'app, le type de téléphone et la langue, pour mieux comprendre le problème.",fbshort:"Écris au moins quelques mots.",fbmany:"Tu as déjà envoyé beaucoup de messages aujourd'hui. Réessaie demain.",fbagain:"Écrire un autre message",
  all:"Tous",new:"Nouveaux",done:"Résolus",markread:"Lu",markdone:"Résolu",reopen:"Rouvrir",del:"Supprimer",delq:"Supprimer ce message ?",empty:"Aucun message ici.",from_owner:"de toi",from_web:"sans code",from_code:"code",
  st_total:"Codes",st_used:"Utilisés",st_free:"Libres",created:"Créé",used_on:"Utilisé depuis",copy:"Copier",send:"Envoyer",off:"Désactiver",newcode:"Nouveau code"}
};
function p2(k){return(PF2[lang]&&PF2[lang][k])||PF2.it[k]||k}
/* link social: il canale si aggiunge qui quando e' pronto */
var SOCIAL=[
  {k:'tgch',url:'',ic:'tg',col:'#29a9eb'},
  {k:'tgpr',url:'https://t.me/'+TG_USER,ic:'tgu',col:'#29a9eb'}
];
Object.assign(PIC,{
  tg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.4 4.3 2.9 11.4c-1.3.5-1.3 1.2-.2 1.6l4.7 1.5 1.8 5.6c.2.6.1.9.8.9.5 0 .7-.2 1-.5l2.3-2.2 4.8 3.5c.9.5 1.5.2 1.7-.8l3.1-14.7c.3-1.3-.5-1.9-1.5-1.5zM8.8 14.2l9.6-6c.5-.3.9-.1.5.2l-8.2 7.4-.3 3.4-1.6-5z"/></svg>',
  tgu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/></svg>',
  share2:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="6" r="2.6"/><circle cx="18" cy="18" r="2.6"/><path d="M8.3 10.8l7.4-3.6M8.3 13.2l7.4 3.6"/></svg>',
  bug:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="7" width="10" height="13" rx="5"/><path d="M9 7a3 3 0 0 1 6 0M12 11v9M3 13h4M17 13h4M4 7l3 2M20 7l-3 2M4 20l3-3M20 20l-3-3"/></svg>',
  inbox:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M3 13l3-8h12l3 8v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><path d="M3 13h5l1.5 2.5h5L16 13h5"/></svg>',
  idea:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z"/></svg>',
  chat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/></svg>'
});
var PCOL={gear:'#9ca3af',codes:'#f5b301',refresh:'#3b82f6',share2:'#29a9eb',bug:'#f97316',inbox:'#a78bfa',out:'#ef4444',reset:'#ef4444'};
function pfRow(g,ic,title,sub,fn,cls,col){
  const b=document.createElement('button');b.className='pfrow'+(cls?' '+cls:'');
  const i=document.createElement('span');i.className='pfic';i.innerHTML=ic;
  const c=col||Object.keys(PIC).filter(k=>PIC[k]===ic).map(k=>PCOL[k]).find(Boolean);
  if(c)i.style.color=c;
  b.appendChild(i);
  const tx=document.createElement('span');tx.className='pftx';
  const a=document.createElement('span');a.textContent=title;tx.appendChild(a);
  if(sub){const s=document.createElement('small');s.textContent=sub;tx.appendChild(s)}
  b.appendChild(tx);b.onclick=fn;g.appendChild(b);return b;
}
function pfGo(page){const p=$('pf-screen');PF.page=page;renderProfile();p.classList.add('pfin');setTimeout(()=>p.classList.remove('pfin'),400)}
function pfSub(p,title){
  const bar=document.createElement('div');bar.className='pfbar';
  const bk=document.createElement('button');bk.className='pfback';bk.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg><span></span>';
  bk.lastChild.textContent=pt('profile');
  bk.onclick=()=>{PF.page=null;PF.fresh=null;renderProfile();p.classList.add('pfout');setTimeout(()=>p.classList.remove('pfout'),400)};
  const ti=document.createElement('div');ti.className='pftitle';ti.textContent=title;
  bar.appendChild(bk);bar.appendChild(ti);p.appendChild(bar);
}
var FBN=0;
function renderProfile(){
  const p=$('pf-screen');if(!p)return;
  const st=PF.keep?p.scrollTop:0;PF.keep=false;p.innerHTML='';
  if(PF.page==='settings'){renderSettings(p);p.scrollTop=st;return}
  if(PF.page==='codes'){renderCodes(p);p.scrollTop=st;return}
  if(PF.page==='social'){renderSocial(p);return}
  if(PF.page==='fb'){renderFeedback(p);return}
  if(PF.page==='inbox'){renderInbox(p);p.scrollTop=st;return}
  const h=document.createElement('div');h.className='pfhead';
  h.innerHTML='<img alt="" src="'+LOGO_SRC+'"><div class="pfname">NexusCharts</div>';
  const sub=document.createElement('div');sub.className='pfsub';
  let sv='';try{sv=localStorage.getItem('tc_server')||''}catch(e){}
  sub.textContent=FRIEND?pt('fr')+' '+fshow(FRIEND):pt('own')+(sv?' · '+sv:'');
  h.appendChild(sub);p.appendChild(h);
  let g=pfGroup(p,'');
  pfRow(g,PIC.gear,pt('settings'),pt('setsub'),()=>pfGo('settings')).classList.add('chev');
  if(!FRIEND){
    g=pfGroup(p,pt('friends'));
    pfRow(g,PIC.codes,ft('codes'),p2('codessub2'),()=>pfGo('codes')).classList.add('chev');
    if(admKey()){
      const r=pfRow(g,PIC.inbox,p2('inbox'),p2('inboxsub'),()=>pfGo('inbox'));r.classList.add('chev');
      if(FBN){const bd=document.createElement('span');bd.className='pfbadge';bd.textContent=FBN;r.appendChild(bd)}
    }
  }
  g=pfGroup(p,'Community');
  pfRow(g,PIC.share2,p2('social'),p2('socsub'),()=>pfGo('social')).classList.add('chev');
  pfRow(g,PIC.bug,p2('fb'),p2('fbsub'),()=>pfGo('fb')).classList.add('chev');
  g=pfGroup(p,pt('app'));
  const rr=pfRow(g,PIC.refresh,t('refresh'),pt('refsub'),()=>pfRefresh(rr));
  g=pfGroup(p,'');
  pfRow(g,PIC.out,t('logout'),'',logout,'danger');
  p.scrollTop=st;
  fbCount(false);
}
/* Aggiorna: icona che gira, poi un avviso chiaro */
async function pfRefresh(row){
  if(row.classList.contains('busy'))return;
  row.classList.add('busy');haptic();
  const t0=Date.now();
  try{
    const v=await remoteVersion();
    if(v&&v!==VERSION){msg(p2('ref_new'));setTimeout(()=>doRefresh(),500);return}
    /* i dati si ricaricano in sottofondo: il messaggio non aspetta tutta la watchlist */
    refreshWL(true);
    await Promise.race([loadSafe().catch(()=>{}),new Promise(r=>setTimeout(r,1500))]);
    await new Promise(r=>setTimeout(r,Math.max(0,600-(Date.now()-t0))));
    msg('✓ '+p2('ref_ok')+' (v'+VERSION+').');haptic();
  }catch(e){msg(p2('ref_err'))}
  finally{row.classList.remove('busy')}
}
function renderSettings(p){
  pfSub(p,pt('settings'));
  let g=pfGroup(p,pt('look'));
  const th=document.documentElement.dataset.theme||'dark';
  const seg=document.createElement('div');seg.className='pfseg';
  [['dark',t('dark'),PIC.moon,'#a78bfa'],['light',t('light'),PIC.sun,'#f5b301']].forEach(([k,txt,ic,col])=>{
    const b=document.createElement('button');b.className=k===th?'on':'';b.innerHTML=ic+'<span></span>';b.lastChild.textContent=txt;b.firstChild.style.color=col;
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
  pfRow(g,PIC.reset,t('reset'),pt('ressub'),()=>resetApp(),'',PCOL.reset);
}
/* ---------- Codici amici: pagina intera ---------- */
function renderCodes(p){
  pfSub(p,ft('codes'));
  if(!admKey()){
    shEl(p,'pfnote',ft('keyq'));
    const g=pfGroup(p,'');g.classList.add('pfpad');
    const i=document.createElement('input');i.type='password';i.className='pfin2';i.placeholder=ft('keyph');i.autocomplete='off';g.appendChild(i);
    const ok=document.createElement('button');ok.className='pfbtn';ok.textContent=ft('keysave');g.appendChild(ok);
    ok.onclick=async()=>{const k=i.value.trim();if(!k)return;try{await adm('GET','/codes',null,k);localStorage.setItem('tc_admin',k);PF.fbChecked=false;renderProfile()}catch(e){msg(e.status===403?ft('keybad'):ft('neterr'))}};
    return;
  }
  /* nuovo codice */
  let g=pfGroup(p,p2('newcode'));g.classList.add('pfpad');
  if(PF.fresh){
    const box=document.createElement('div');box.className='pfcodebig';box.textContent=fshow(PF.fresh.code);g.appendChild(box);
    if(PF.fresh.name){const n=document.createElement('div');n.className='pfcodename';n.textContent=PF.fresh.name;g.appendChild(n)}
    g.appendChild(codeActs(PF.fresh.code));
  }
  const i=document.createElement('input');i.className='pfin2';i.placeholder=ft('name');i.autocomplete='off';g.appendChild(i);
  const gen=document.createElement('button');gen.className='pfbtn';gen.textContent=ft('gen');g.appendChild(gen);
  gen.onclick=async()=>{gen.disabled=true;try{PF.fresh=await adm('POST','/codes',{name:i.value.trim()});haptic();renderProfile()}catch(e){gen.disabled=false;msg(e.status===403?ft('keybad'):ft('neterr'))}};
  /* riepilogo e lista */
  const stats=document.createElement('div');stats.className='pfstats';p.appendChild(stats);
  const lab=document.createElement('div');lab.className='pfl';lab.textContent=ft('active');p.appendChild(lab);
  const list=document.createElement('div');list.className='pfclist';p.appendChild(list);
  adm('GET','/codes').then(j=>{
    const cs=(j&&j.codes)||[],u=cs.filter(c=>c.bound).length;
    stats.innerHTML='';[[cs.length,p2('st_total'),'#f5b301'],[u,p2('st_used'),'#22ab94'],[cs.length-u,p2('st_free'),'#9ca3af']].forEach(([n,l,c])=>{const d=document.createElement('div');d.innerHTML='<b></b><span></span>';d.firstChild.textContent=n;d.firstChild.style.color=c;d.lastChild.textContent=l;stats.appendChild(d)});
    if(!cs.length){shEl(list,'pfnote',ft('none'));return}
    const df=ts=>ts?new Date(ts).toLocaleDateString(LOC[lang]||'it-IT',{day:'2-digit',month:'short',year:'numeric'}):'';
    cs.forEach(c=>{
      const card=document.createElement('div');card.className='pfccard';
      const top=document.createElement('div');top.className='pfctop';
      top.innerHTML='<span class="pfcn"></span><span class="pfcst"></span>';
      top.firstChild.textContent=c.name||ft('noname');
      top.lastChild.textContent=c.bound?ft('used'):ft('free');top.lastChild.classList.toggle('on',!!c.bound);
      card.appendChild(top);
      const code=document.createElement('div');code.className='pfccode';code.textContent=fshow(c.code);card.appendChild(code);
      const meta=document.createElement('div');meta.className='pfcmeta';
      meta.textContent=p2('created')+' '+df(c.created)+(c.used?'  ·  '+p2('used_on')+' '+df(c.used):'');card.appendChild(meta);
      const acts=codeActs(c.code);
      const off=document.createElement('button');off.className='pfmini danger';off.textContent=p2('off');
      off.onclick=async()=>{if(!confirm(ft('delq')))return;try{await adm('DELETE','/codes/'+c.code);if(PF.fresh&&PF.fresh.code===c.code)PF.fresh=null;PF.keep=true;renderProfile()}catch(e){msg(ft('neterr'))}};
      acts.appendChild(off);card.appendChild(acts);list.appendChild(card);
    });
  }).catch(e=>{if(e.status===403){try{localStorage.removeItem('tc_admin')}catch(_){}msg(ft('keybad'));renderProfile()}else shEl(list,'pfnote',ft('neterr'))});
  const g2=pfGroup(p,'');
  pfRow(g2,PIC.out,ft('forgetkey'),'',()=>{try{localStorage.removeItem('tc_admin')}catch(e){}PF.fresh=null;renderProfile()},'danger');
}
function codeActs(code){
  const row=document.createElement('div');row.className='pfacts';
  const cp=document.createElement('button');cp.className='pfmini';cp.textContent=p2('copy');
  cp.onclick=async()=>{try{await navigator.clipboard.writeText(fshow(code));msg(ft('copied'))}catch(e){msg(fshow(code))}};
  const sh=document.createElement('button');sh.className='pfmini on';sh.textContent=p2('send');
  sh.onclick=()=>{const txt=ft('share')+fshow(code)+'\n'+ft('howto');if(navigator.share)navigator.share({text:txt}).catch(()=>{});else{try{navigator.clipboard.writeText(txt);msg(ft('copied'))}catch(e){}}};
  row.appendChild(cp);row.appendChild(sh);return row;
}
/* ---------- Social ---------- */
function renderSocial(p){
  pfSub(p,p2('social'));
  const g=pfGroup(p,'');
  SOCIAL.forEach(s=>{
    const r=pfRow(g,PIC[s.ic],p2(s.k),s.url?p2(s.k+'sub'):p2('soon'),()=>{if(!s.url)return;const w=window.open(s.url,'_blank');if(!w)location.href=s.url},'',s.col);
    if(s.url)r.classList.add('chev');else r.classList.add('dim');
  });
}
/* ---------- Segnala o proponi (per tutti) ---------- */
function renderFeedback(p){
  pfSub(p,p2('fb'));
  if(PF.fbDone){
    const ok=document.createElement('div');ok.className='pfdone';ok.innerHTML='<i>✓</i><span></span>';ok.lastChild.textContent=p2('fbsent');p.appendChild(ok);
    const g=pfGroup(p,'');pfRow(g,PIC.chat,p2('fbagain'),'',()=>{PF.fbDone=false;renderProfile()},'',PCOL.bug);
    return;
  }
  const g=pfGroup(p,'');g.classList.add('pfpad');
  const types=document.createElement('div');types.className='pftypes';
  PF.fbType=PF.fbType||'bug';
  [['bug',PIC.bug,'#f97316'],['idea',PIC.idea,'#facc15'],['other',PIC.chat,'#3b82f6']].forEach(([k,ic,col])=>{
    const b=document.createElement('button');b.className=PF.fbType===k?'on':'';b.innerHTML=ic+'<span></span>';b.firstChild.style.color=col;b.lastChild.textContent=p2('t_'+k);
    b.onclick=()=>{PF.fbType=k;types.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b))};types.appendChild(b);
  });
  g.appendChild(types);
  const ta=document.createElement('textarea');ta.className='pfta';ta.placeholder=p2('fbph');ta.maxLength=2000;ta.value=PF.fbDraft||'';ta.oninput=()=>{PF.fbDraft=ta.value};g.appendChild(ta);
  const ct=document.createElement('input');ct.className='pfin2';ct.placeholder=p2('fbcontact');ct.autocomplete='off';ct.autocapitalize='off';ct.maxLength=60;g.appendChild(ct);
  const send=document.createElement('button');send.className='pfbtn';send.textContent=p2('fbsend');g.appendChild(send);
  shEl(p,'pfnote',p2('fbnote'));
  send.onclick=async()=>{
    const text=ta.value.trim();if(text.length<5){msg(p2('fbshort'));return}
    send.disabled=true;
    try{
      const ua=navigator.userAgent,dev=/iPhone/.test(ua)?'iPhone':/iPad/.test(ua)?'iPad':/Android/.test(ua)?'Android':'Computer';
      const r=await fetch(WORKER+'/feedback',{method:'POST',headers:{'Content-Type':'application/json',...(FRIEND?{Authorization:'Bearer '+FRIEND}:{}),...(admKey()&&!FRIEND?{'X-Admin-Key':admKey()}:{})},body:JSON.stringify({type:PF.fbType,text,contact:ct.value.trim(),ver:VERSION,dev,lang,ctx:(cur||'')+' '+(res||''),standalone:isStandalone()})});
      if(r.status===429){msg(p2('fbmany'));send.disabled=false;return}
      if(!r.ok)throw new Error(r.status);
      PF.fbDone=true;PF.fbDraft='';haptic();renderProfile();
    }catch(e){send.disabled=false;msg(ft('neterr'))}
  };
}
/* ---------- Segnalazioni ricevute (solo amministratore) ---------- */
function renderInbox(p){
  pfSub(p,p2('inbox'));
  PF.fbFilter=PF.fbFilter||'new';
  const seg=document.createElement('div');seg.className='pfseg pfsegsm';
  [['new',p2('new')],['all',p2('all')],['done',p2('done')]].forEach(([k,l])=>{const b=document.createElement('button');b.className=PF.fbFilter===k?'on':'';b.textContent=l;b.onclick=()=>{PF.fbFilter=k;PF.keep=true;renderProfile()};seg.appendChild(b)});
  const sg=pfGroup(p,'');sg.appendChild(seg);
  const list=document.createElement('div');list.className='pfclist';p.appendChild(list);
  adm('GET','/feedback').then(j=>{
    const all=(j&&j.items)||[];FBN=all.filter(x=>x.status==='new').length;fbBadge();
    const items=all.filter(x=>PF.fbFilter==='all'||(PF.fbFilter==='new'?x.status!=='done':x.status==='done'));
    if(!items.length){shEl(list,'pfnote',p2('empty'));return}
    const TI={bug:[PIC.bug,'#f97316'],idea:[PIC.idea,'#facc15'],other:[PIC.chat,'#3b82f6']};
    items.forEach(x=>{
      const card=document.createElement('div');card.className='pfccard'+(x.status==='new'?' unread':'');card.dataset.id=x.id;card.dataset.imgs=x.imgs||0;
      const top=document.createElement('div');top.className='pfctop';
      const ic=TI[x.type]||TI.other;
      top.innerHTML='<span class="pffbic">'+ic[0]+'</span><span class="pfcn"></span><span class="pfcdate"></span>';
      top.firstChild.style.color=ic[1];top.children[1].textContent=p2('t_'+(TI[x.type]?x.type:'other'));
      top.children[2].textContent=new Date(x.ts).toLocaleString(LOC[lang]||'it-IT',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'});
      card.appendChild(top);
      const tx=document.createElement('div');tx.className='pffbtx';tx.textContent=x.text;card.appendChild(tx);
      const meta=document.createElement('div');meta.className='pfcmeta';
      const who=x.who==='owner'?p2('from_owner'):x.who?p2('from_code')+' '+fshow(x.who):p2('from_web');
      meta.textContent=[x.contact?'✈︎ '+x.contact:'',who,x.dev,x.ver?'v'+x.ver:'',x.ctx].filter(Boolean).join('  ·  ');card.appendChild(meta);
      const acts=document.createElement('div');acts.className='pfacts';
      const setSt=st=>async()=>{try{await adm('POST','/feedback/'+x.id,{status:st});PF.keep=true;renderProfile()}catch(e){msg(ft('neterr'))}};
      if(x.status==='new'){const b=document.createElement('button');b.className='pfmini';b.textContent=p2('markread');b.onclick=setSt('read');acts.appendChild(b)}
      const d=document.createElement('button');d.className='pfmini on';d.textContent=x.status==='done'?p2('reopen'):p2('markdone');d.onclick=setSt(x.status==='done'?'read':'done');acts.appendChild(d);
      if(x.contact&&/^@?[A-Za-z0-9_]{4,}$/.test(x.contact)){const t=document.createElement('button');t.className='pfmini';t.textContent='Telegram';t.onclick=()=>window.open('https://t.me/'+x.contact.replace('@',''),'_blank');acts.appendChild(t)}
      const del=document.createElement('button');del.className='pfmini danger';del.textContent=p2('del');del.onclick=async()=>{if(!confirm(p2('delq')))return;try{await adm('DELETE','/feedback/'+x.id);PF.keep=true;renderProfile()}catch(e){msg(ft('neterr'))}};acts.appendChild(del);
      card.appendChild(acts);list.appendChild(card);
    });
  }).catch(e=>{shEl(list,'pfnote',e.status===403?ft('keybad'):ft('neterr'))});
}
/* numero di segnalazioni nuove: sulla voce del Profilo e sull'icona Profilo in basso */
var FB_LAST=0;
function fbBadge(){
  const tb=document.querySelector('.tab[data-t=pf]');if(!tb)return;
  let b=tb.querySelector('.tbbadge');
  if(!FBN){if(b)b.remove();return}
  if(!b){b=document.createElement('span');b.className='tbbadge';tb.appendChild(b)}
  b.textContent=FBN>9?'9+':FBN;
}
function fbCount(force){
  if(FRIEND||!admKey()||document.hidden)return;
  if(!force&&Date.now()-FB_LAST<30000)return;
  FB_LAST=Date.now();
  adm('GET','/feedback').then(j=>{
    const n=((j&&j.items)||[]).filter(x=>x.status==='new').length;
    const ch=n!==FBN;FBN=n;fbBadge();
    if(ch&&tab==='pf'&&!PF.page){PF.keep=true;renderProfile()}
  }).catch(()=>{});
}
/* controllo ogni 4 minuti mentre l'app e' aperta, e subito quando torni sull'app */
setInterval(()=>fbCount(true),240000);
document.addEventListener('visibilitychange',()=>{if(!document.hidden)fbCount(false)});
setTimeout(()=>fbCount(true),4000);
/* "Codici amici" dal vecchio foglio ora apre la pagina */
function openCodes(){if(tab!=='pf')showTab('pf');pfGo('codes')}


/* =====================================================================
   FOTO NELLE SEGNALAZIONI + SUPPORTA IL PROGETTO
   ===================================================================== */
var PF3={
 it:{att:"Allega foto",attmax:"Massimo 3 foto.",attsub:"Fino a 3 screenshot, per mostrare il problema",photos:"foto",save:"Salva",close:"Chiudi",
  sup:"Supporta il progetto",supsub:"Aiuta NexusCharts a crescere",suptitle:"Ti piace NexusCharts?",suptext:"NexusCharts è gratuita e senza pubblicità. Se ti è utile puoi aiutarmi a portarla avanti con un contributo una tantum: nessun abbonamento, paghi una volta sola e decidi tu quanto.",
  t1:"Un caffè",t1s:"Un piccolo grazie",t2:"Una spinta",t2s:"Aiuti lo sviluppo di nuove funzioni",t3:"Grande sostenitore",t3s:"Fai davvero la differenza",free:"Importo libero",frees:"Scegli tu quanto",soon:"In arrivo",pay:"Paga in modo sicuro con Stripe: carta, Apple Pay o Google Pay.",thanks:"Grazie di cuore!",thankstx:"Il tuo supporto è arrivato. Mi aiuta a far crescere NexusCharts."},
 es:{att:"Adjuntar fotos",attmax:"Máximo 3 fotos.",attsub:"Hasta 3 capturas, para mostrar el problema",photos:"fotos",save:"Guardar",close:"Cerrar",
  sup:"Apoya el proyecto",supsub:"Ayuda a NexusCharts a crecer",suptitle:"¿Te gusta NexusCharts?",suptext:"NexusCharts es gratuita y sin publicidad. Si te resulta útil puedes ayudarme a seguir con una aportación única: sin suscripción, pagas una sola vez y eliges cuánto.",
  t1:"Un café",t1s:"Un pequeño gracias",t2:"Un empujón",t2s:"Ayudas a desarrollar nuevas funciones",t3:"Gran patrocinador",t3s:"Marcas la diferencia",free:"Importe libre",frees:"Tú eliges cuánto",soon:"Próximamente",pay:"Paga de forma segura con Stripe: tarjeta, Apple Pay o Google Pay.",thanks:"¡Muchísimas gracias!",thankstx:"Tu apoyo ha llegado. Me ayuda a hacer crecer NexusCharts."},
 en:{att:"Attach photos",attmax:"Up to 3 photos.",attsub:"Up to 3 screenshots, to show the problem",photos:"photos",save:"Save",close:"Close",
  sup:"Support the project",supsub:"Help NexusCharts grow",suptitle:"Enjoying NexusCharts?",suptext:"NexusCharts is free and ad-free. If you find it useful you can help me keep it going with a one-time contribution: no subscription, you pay once and choose how much.",
  t1:"A coffee",t1s:"A small thank you",t2:"A boost",t2s:"Helps build new features",t3:"Big supporter",t3s:"Makes a real difference",free:"Custom amount",frees:"You choose how much",soon:"Coming soon",pay:"Pay securely with Stripe: card, Apple Pay or Google Pay.",thanks:"Thank you so much!",thankstx:"Your support has arrived. It helps NexusCharts grow."},
 fr:{att:"Joindre des photos",attmax:"3 photos maximum.",attsub:"Jusqu'à 3 captures, pour montrer le problème",photos:"photos",save:"Enregistrer",close:"Fermer",
  sup:"Soutenir le projet",supsub:"Aide NexusCharts à grandir",suptitle:"Tu aimes NexusCharts ?",suptext:"NexusCharts est gratuite et sans publicité. Si elle t'est utile, tu peux m'aider à la faire avancer avec une contribution unique : pas d'abonnement, tu paies une seule fois et tu choisis combien.",
  t1:"Un café",t1s:"Un petit merci",t2:"Un coup de pouce",t2s:"Aide à créer de nouvelles fonctions",t3:"Grand soutien",t3s:"Fait vraiment la différence",free:"Montant libre",frees:"Tu choisis combien",soon:"Bientôt",pay:"Paiement sécurisé avec Stripe : carte, Apple Pay ou Google Pay.",thanks:"Merci infiniment !",thankstx:"Ton soutien est bien arrivé. Il aide NexusCharts à grandir."}
};
function p3(k){return(PF3[lang]&&PF3[lang][k])||PF3.it[k]||k}
/* LINK STRIPE: incolla qui i Payment Links e gli importi quando sono pronti */
var SUPPORT=[
  {k:'t1',emoji:'☕',amt:'3,50 €',url:'https://donate.stripe.com/14AeVf3tAbph3oddnE5EY00',col:'#f59e0b'},
  {k:'t2',emoji:'🚀',amt:'12 €',url:'https://donate.stripe.com/4gM28t0ho3WP8IxgzQ5EY01',col:'#3b82f6'},
  {k:'t3',emoji:'💎',amt:'35 €',url:'https://donate.stripe.com/00w9AVggmgJB6Ap0AS5EY02',col:'#a78bfa'},
  {k:'free',emoji:'💛',amt:'',url:'https://donate.stripe.com/cNi5kF4xEgJB6Ap6Zg5EY03',col:'#22ab94'}
];
PIC.heart='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-9.6-9.4C1 8.2 3 4.5 6.8 4.5c2.2 0 3.6 1.2 5.2 3 1.6-1.8 3-3 5.2-3C21 4.5 23 8.2 21.6 11.6 19.5 16.4 12 21 12 21z"/></svg>';
PIC.cam='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13.5" r="3.5"/></svg>';
PCOL.heart='#ec4899';

/* ---------- pagina Supporta il progetto ---------- */
function renderSupport(p){
  pfSub(p,p3('sup'));
  const h=document.createElement('div');h.className='suphead';
  h.innerHTML='<i>'+PIC.heart+'</i><b></b><span></span>';
  h.children[1].textContent=p3('suptitle');h.children[2].textContent=p3('suptext');p.appendChild(h);
  const list=document.createElement('div');list.className='suplist';
  SUPPORT.forEach(s=>{
    const c=document.createElement('button');c.className='supcard'+(s.url?'':' off');
    c.style.setProperty('--sc',s.col);
    c.innerHTML='<span class="supemo"></span><span class="suptx"><b></b><small></small></span><span class="supamt"></span>';
    c.querySelector('.supemo').textContent=s.emoji;
    c.querySelector('b').textContent=p3(s.k);c.querySelector('small').textContent=p3(s.k+'s');
    c.querySelector('.supamt').textContent=s.url?(s.amt||'›'):p3('soon');
    c.onclick=()=>{if(!s.url)return;haptic();const w=window.open(s.url,'_blank');if(!w)location.href=s.url};
    list.appendChild(c);
  });
  p.appendChild(list);
  shEl(p,'pfnote',p3('pay'));
}
/* ritorno da Stripe: indirizzo dell'app con ?grazie=1 */
(function(){
  if(!/[?&]grazie=1/.test(location.search))return;
  try{history.replaceState(null,'',location.pathname)}catch(e){}
  setTimeout(()=>{
    openSheet(s=>{
      const d=document.createElement('div');d.className='supthx';
      d.innerHTML='<i>'+PIC.heart+'</i><b></b><span></span>';
      d.children[1].textContent=p3('thanks');d.children[2].textContent=p3('thankstx');s.appendChild(d);
      const ok=document.createElement('button');ok.className='gdok';ok.textContent='OK';ok.onclick=closeSheet;s.appendChild(ok);
    });
    haptic();
  },1500);
})();

/* ---------- foto: rimpicciolite prima dell'invio ---------- */
function shrinkImg(file){
  return new Promise((ok,ko)=>{
    const fr=new FileReader();
    fr.onerror=ko;
    fr.onload=()=>{
      const im=new Image();
      im.onerror=ko;
      im.onload=()=>{
        const M=1280,k=Math.min(1,M/Math.max(im.width,im.height));
        const c=document.createElement('canvas');c.width=Math.round(im.width*k);c.height=Math.round(im.height*k);
        c.getContext('2d').drawImage(im,0,0,c.width,c.height);
        let q=.72,u=c.toDataURL('image/jpeg',q);
        while(u.length>600000&&q>.35){q-=.1;u=c.toDataURL('image/jpeg',q)}
        ok(u);
      };
      im.src=fr.result;
    };
    fr.readAsDataURL(file);
  });
}
/* aggiunge il riquadro foto al modulo "Segnala o proponi" */
function fbPhotos(g,before){
  PF.fbImgs=PF.fbImgs||[];
  const wrap=document.createElement('div');wrap.className='fbph';
  const draw=()=>{
    wrap.innerHTML='';
    PF.fbImgs.forEach((u,i)=>{
      const t=document.createElement('div');t.className='fbth';t.style.backgroundImage='url('+u+')';
      const x=document.createElement('button');x.textContent='✕';x.onclick=()=>{PF.fbImgs.splice(i,1);draw()};t.appendChild(x);wrap.appendChild(t);
    });
    if(PF.fbImgs.length<3){
      const add=document.createElement('label');add.className='fbadd';
      add.innerHTML=PIC.cam+'<span></span>';add.lastChild.textContent=p3('att');
      const inp=document.createElement('input');inp.type='file';inp.accept='image/*';inp.multiple=true;inp.hidden=true;
      inp.onchange=async()=>{
        const fs=[...inp.files];
        if(PF.fbImgs.length+fs.length>3)msg(p3('attmax'));
        for(const f of fs.slice(0,3-PF.fbImgs.length)){try{PF.fbImgs.push(await shrinkImg(f))}catch(e){}}
        draw();
      };
      add.appendChild(inp);wrap.appendChild(add);
    }
  };
  draw();g.insertBefore(wrap,before);
}
/* versione del modulo con le foto */
(function(){
  const orig=renderFeedback;
  renderFeedback=function(p){
    orig(p);
    if(PF.fbDone)return;
    const ta=p.querySelector('.pfta');if(!ta)return;
    fbPhotos(ta.parentNode,ta.nextSibling);
    const send=p.querySelector('.pfbtn');
    const oldClick=send.onclick;
    send.onclick=async()=>{
      const text=p.querySelector('.pfta').value.trim();if(text.length<5){msg(p2('fbshort'));return}
      send.disabled=true;
      try{
        const ua=navigator.userAgent,dev=/iPhone/.test(ua)?'iPhone':/iPad/.test(ua)?'iPad':/Android/.test(ua)?'Android':'Computer';
        const r=await fetch(WORKER+'/feedback',{method:'POST',headers:{'Content-Type':'application/json',...(FRIEND?{Authorization:'Bearer '+FRIEND}:{}),...(admKey()&&!FRIEND?{'X-Admin-Key':admKey()}:{})},
          body:JSON.stringify({type:PF.fbType,text,contact:p.querySelector('.pfin2').value.trim(),ver:VERSION,dev,lang,ctx:(cur||'')+' '+(res||''),imgs:PF.fbImgs||[]})});
        if(r.status===429){msg(p2('fbmany'));send.disabled=false;return}
        if(!r.ok)throw new Error(r.status);
        PF.fbDone=true;PF.fbDraft='';PF.fbImgs=[];haptic();renderProfile();
      }catch(e){send.disabled=false;msg(ft('neterr'))}
    };
  };
})();
/* foto nelle segnalazioni ricevute */
(function(){
  const orig=renderInbox;
  renderInbox=function(p){
    orig(p);
    let n=0;const iv=setInterval(()=>{
      if(++n>60){clearInterval(iv);return}
      const cards=p.querySelectorAll('.pfccard[data-id]');if(!cards.length)return;
      clearInterval(iv);
      cards.forEach(card=>{
        const id=card.dataset.id,k=+card.dataset.imgs||0;if(!k)return;
        const tx=card.querySelector('.pffbtx'),row=document.createElement('div');row.className='fbph';
        for(let i=0;i<k;i++){
          const t=document.createElement('button');t.className='fbth load';row.appendChild(t);
          adm('GET','/feedback/'+id+'/img/'+i).then(r=>{t.classList.remove('load');t.style.backgroundImage='url('+r.data+')';t.onclick=()=>viewImg(r.data,id+'_'+(i+1))}).catch(()=>{});
        }
        tx.after(row);
      });
    },150);
  };
})();
function viewImg(data,name){
  const v=document.createElement('div');v.className='imgview';
  v.innerHTML='<img alt=""><div class="imgbar"><button class="pfmini"></button><button class="pfmini on"></button></div>';
  v.querySelector('img').src=data;
  const [cl,sv]=v.querySelectorAll('button');cl.textContent=p3('close');sv.textContent=p3('save');
  cl.onclick=()=>v.remove();
  sv.onclick=()=>{
    try{
      const bin=atob(data.split(',')[1]),a=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)a[i]=bin.charCodeAt(i);
      const f=new File([a],'NexusCharts_'+name+'.jpg',{type:'image/jpeg'});
      if(navigator.canShare&&navigator.canShare({files:[f]}))navigator.share({files:[f]}).catch(()=>{});
      else{const l=document.createElement('a');l.href=data;l.download=f.name;l.click()}
    }catch(e){}
  };
  document.body.appendChild(v);
}
/* voce nel Profilo */
(function(){
  const orig=renderProfile;
  renderProfile=function(){
    if(PF.page==='support'){const p=$('pf-screen');p.innerHTML='';renderSupport(p);return}
    orig();
    if(PF.page)return;
    const p=$('pf-screen'),rows=[...p.querySelectorAll('.pfrow')];
    const fb=rows.find(r=>(r.querySelector('.pftx span')||{}).textContent===p2('fb'));
    if(!fb)return;
    const tmp=document.createElement('div');
    const r=pfRow(tmp,PIC.heart,p3('sup'),p3('supsub'),()=>pfGo('support'),'',PCOL.heart);r.classList.add('chev','suprow');
    fb.parentNode.insertBefore(r,fb.parentNode.firstChild);
  };
})();


/* =====================================================================
   NOTE LEGALI + metodi di pagamento (icone generiche, niente loghi)
   ===================================================================== */
var LEGAL={
 it:{title:"Note legali",sub:"Termini, privacy e avvertenze",upd:"Ultimo aggiornamento: 11 novembre 2026",
  note:"Questi testi descrivono come funziona l'app. Non sono stati redatti da un avvocato.",
  pm_card:"Carta",pm_apple:"Apple Pay",pm_google:"Google Pay",pm_safe:"Pagamento protetto",
  s:[
   ["risk","Avvertenza sul rischio",["NexusCharts è uno strumento di analisi grafica. Niente di quello che mostra è un consiglio finanziario o di investimento.","Il trading su forex, materie prime, indici e criptovalute comporta un rischio elevato di perdita del capitale. Decidi sempre in autonomia.","I prezzi possono essere in ritardo, incompleti o diversi da quelli del tuo broker. Prima di operare controlla sempre la piattaforma del tuo broker."]],
   ["terms","Termini d'uso",["L'app è gratuita e viene fornita così com'è, senza garanzie di funzionamento continuo o di assenza di errori.","Le funzioni possono cambiare, essere aggiunte o tolte in qualsiasi momento, e il servizio può essere sospeso.","Il codice di accesso è personale e vale per un solo telefono: non va ceduto né condiviso. Un codice usato in modo scorretto può essere disattivato.","È vietato usare l'app per scopi illeciti, provare ad aggirarne le protezioni o sovraccaricare il servizio.","Nei limiti consentiti dalla legge, non si risponde di perdite o danni derivanti dall'uso dell'app o dei dati mostrati."]],
   ["privacy","Privacy",["Per usare l'app con un codice non serve nessun dato personale: niente nome, email o numero di telefono.","Impostazioni, disegni, layout e alert restano salvati solo sul tuo telefono.","Sul server dell'app vengono conservati: il codice di accesso con un identificativo casuale del telefono e le date di creazione e di primo utilizzo; i messaggi di \"Segnala o proponi\" con le eventuali foto, il contatto Telegram se lo scrivi tu, la versione dell'app, il tipo di telefono, la lingua e il simbolo aperto.","L'indirizzo IP è usato solo per limitare i messaggi ripetuti e viene cancellato dopo 24 ore.","Chi entra con il proprio conto del broker invia email e password direttamente al broker: l'app non le salva. Se scegli di salvarle, le conserva il portachiavi del tuo iPhone.","Nessuna pubblicità, nessun tracciamento e nessuna analisi del comportamento.","Puoi cancellare tutti i dati sul telefono con \"Ripristina l'app\". Per far cancellare i tuoi messaggi dal server scrivi su Telegram."]],
   ["donate","Contributi volontari",["I contributi in \"Supporta il progetto\" sono volontari e una tantum: non sono un abbonamento e non sbloccano funzioni aggiuntive.","I pagamenti sono gestiti da Stripe: l'app non vede né conserva i dati della tua carta.","I contributi non sono rimborsabili, salvo i casi previsti dalla legge."]],
   ["contact","Contatti",["Per domande, richieste sui dati o segnalazioni puoi usare \"Segnala o proponi\" oppure scrivere su Telegram."]]
  ]},
 es:{title:"Avisos legales",sub:"Términos, privacidad y advertencias",upd:"Última actualización: 11 de noviembre de 2026",
  note:"Estos textos describen cómo funciona la app. No han sido redactados por un abogado.",
  pm_card:"Tarjeta",pm_apple:"Apple Pay",pm_google:"Google Pay",pm_safe:"Pago protegido",
  s:[
   ["risk","Advertencia de riesgo",["NexusCharts es una herramienta de análisis gráfico. Nada de lo que muestra es un consejo financiero o de inversión.","Operar con forex, materias primas, índices y criptomonedas conlleva un alto riesgo de perder el capital. Decide siempre por tu cuenta.","Los precios pueden llegar con retraso, estar incompletos o ser distintos de los de tu bróker. Antes de operar revisa siempre la plataforma de tu bróker."]],
   ["terms","Términos de uso",["La app es gratuita y se ofrece tal cual, sin garantías de funcionamiento continuo o sin errores.","Las funciones pueden cambiar, añadirse o eliminarse en cualquier momento, y el servicio puede suspenderse.","El código de acceso es personal y vale para un solo teléfono: no debe cederse ni compartirse. Un código mal utilizado puede desactivarse.","Está prohibido usar la app con fines ilícitos, intentar eludir sus protecciones o sobrecargar el servicio.","En la medida permitida por la ley, no se responde de pérdidas o daños derivados del uso de la app o de los datos mostrados."]],
   ["privacy","Privacidad",["Para usar la app con un código no se necesita ningún dato personal: ni nombre, ni email, ni teléfono.","Ajustes, dibujos, diseños y alertas se guardan solo en tu teléfono.","En el servidor de la app se guardan: el código de acceso con un identificador aleatorio del teléfono y las fechas de creación y primer uso; los mensajes de \"Informar o proponer\" con las fotos, el contacto de Telegram si lo escribes, la versión de la app, el tipo de teléfono, el idioma y el símbolo abierto.","La dirección IP se usa solo para limitar mensajes repetidos y se borra a las 24 horas.","Quien entra con su propia cuenta del bróker envía email y contraseña directamente al bróker: la app no los guarda. Si decides guardarlos, los conserva el llavero de tu iPhone.","Sin publicidad, sin rastreo y sin análisis de comportamiento.","Puedes borrar todos los datos del teléfono con \"Restablecer app\". Para borrar tus mensajes del servidor escribe por Telegram."]],
   ["donate","Aportaciones voluntarias",["Las aportaciones de \"Apoya el proyecto\" son voluntarias y únicas: no son una suscripción y no desbloquean funciones extra.","Los pagos los gestiona Stripe: la app no ve ni guarda los datos de tu tarjeta.","Las aportaciones no son reembolsables, salvo en los casos previstos por la ley."]],
   ["contact","Contacto",["Para preguntas, solicitudes sobre tus datos o avisos usa \"Informar o proponer\" o escribe por Telegram."]]
  ]},
 en:{title:"Legal",sub:"Terms, privacy and disclaimers",upd:"Last updated: 11 November 2026",
  note:"These texts describe how the app works. They were not written by a lawyer.",
  pm_card:"Card",pm_apple:"Apple Pay",pm_google:"Google Pay",pm_safe:"Secure payment",
  s:[
   ["risk","Risk disclaimer",["NexusCharts is a charting and analysis tool. Nothing it shows is financial or investment advice.","Trading forex, commodities, indices and crypto carries a high risk of losing your capital. Always make your own decisions.","Prices may be delayed, incomplete or different from your broker's. Always check your broker's platform before trading."]],
   ["terms","Terms of use",["The app is free and provided as is, with no guarantee of continuous or error-free operation.","Features may change, be added or removed at any time, and the service may be suspended.","Your access code is personal and works on one phone only: it must not be transferred or shared. A misused code may be deactivated.","Using the app for unlawful purposes, trying to bypass its protections or overloading the service is not allowed.","To the extent permitted by law, there is no liability for losses or damages arising from the use of the app or the data shown."]],
   ["privacy","Privacy",["Using the app with a code requires no personal data: no name, email or phone number.","Settings, drawings, layouts and alerts are stored only on your phone.","The app's server stores: your access code with a random phone identifier and the dates of creation and first use; \"Report or suggest\" messages with any photos, your Telegram contact if you type it, the app version, phone type, language and open symbol.","Your IP address is used only to limit repeated messages and is deleted after 24 hours.","If you sign in with your own broker account, your email and password go straight to the broker: the app doesn't store them. If you choose to save them, your iPhone Keychain keeps them.","No ads, no tracking, no behaviour analytics.","You can erase all data on the phone with \"Reset app\". To have your messages deleted from the server, write on Telegram."]],
   ["donate","Voluntary contributions",["Contributions in \"Support the project\" are voluntary and one-time: they are not a subscription and don't unlock extra features.","Payments are handled by Stripe: the app never sees or stores your card details.","Contributions are non-refundable, except where required by law."]],
   ["contact","Contact",["For questions, data requests or reports use \"Report or suggest\" or write on Telegram."]]
  ]},
 fr:{title:"Mentions légales",sub:"Conditions, confidentialité et avertissements",upd:"Dernière mise à jour : 11 novembre 2026",
  note:"Ces textes décrivent le fonctionnement de l'app. Ils n'ont pas été rédigés par un avocat.",
  pm_card:"Carte",pm_apple:"Apple Pay",pm_google:"Google Pay",pm_safe:"Paiement sécurisé",
  s:[
   ["risk","Avertissement sur les risques",["NexusCharts est un outil d'analyse graphique. Rien de ce qu'elle affiche n'est un conseil financier ou d'investissement.","Le trading sur le forex, les matières premières, les indices et les cryptos comporte un risque élevé de perte du capital. Décide toujours par toi-même.","Les prix peuvent être en retard, incomplets ou différents de ceux de ton courtier. Vérifie toujours la plateforme de ton courtier avant de trader."]],
   ["terms","Conditions d'utilisation",["L'app est gratuite et fournie telle quelle, sans garantie de fonctionnement continu ou sans erreurs.","Les fonctions peuvent changer, être ajoutées ou retirées à tout moment, et le service peut être suspendu.","Le code d'accès est personnel et ne vaut que pour un téléphone : il ne doit être ni cédé ni partagé. Un code mal utilisé peut être désactivé.","Il est interdit d'utiliser l'app à des fins illicites, de contourner ses protections ou de surcharger le service.","Dans les limites permises par la loi, aucune responsabilité n'est assumée pour les pertes ou dommages liés à l'utilisation de l'app ou des données affichées."]],
   ["privacy","Confidentialité",["Utiliser l'app avec un code ne demande aucune donnée personnelle : ni nom, ni email, ni téléphone.","Réglages, dessins, mises en page et alertes restent uniquement sur ton téléphone.","Le serveur de l'app conserve : le code d'accès avec un identifiant aléatoire du téléphone et les dates de création et de première utilisation ; les messages de \"Signaler ou proposer\" avec les éventuelles photos, ton contact Telegram si tu l'écris, la version de l'app, le type de téléphone, la langue et le symbole ouvert.","L'adresse IP sert uniquement à limiter les messages répétés et est effacée après 24 heures.","Si tu te connectes avec ton propre compte courtier, l'email et le mot de passe vont directement au courtier : l'app ne les conserve pas. Si tu choisis de les enregistrer, c'est le trousseau de ton iPhone qui les garde.","Pas de publicité, pas de suivi, pas d'analyse du comportement.","Tu peux effacer toutes les données du téléphone avec \"Réinitialiser l'app\". Pour faire supprimer tes messages du serveur, écris sur Telegram."]],
   ["donate","Contributions volontaires",["Les contributions de \"Soutenir le projet\" sont volontaires et uniques : ce n'est pas un abonnement et elles ne débloquent aucune fonction.","Les paiements sont gérés par Stripe : l'app ne voit ni ne conserve les données de ta carte.","Les contributions ne sont pas remboursables, sauf dans les cas prévus par la loi."]],
   ["contact","Contact",["Pour toute question, demande sur tes données ou signalement, utilise \"Signaler ou proposer\" ou écris sur Telegram."]]
  ]}
};
function lg(){return LEGAL[lang]||LEGAL.it}
PIC.legal='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M7 21h10M5 7h14M5 7l-3 7a3.5 3.5 0 0 0 6 0zM19 7l-3 7a3.5 3.5 0 0 0 6 0z"/></svg>';
PCOL.legal='#94a3b8';
var LIC={
  risk:['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg>','#f59e0b'],
  terms:['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h6"/></svg>','#3b82f6'],
  privacy:['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/></svg>','#22ab94'],
  donate:['<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-9.6-9.4C1 8.2 3 4.5 6.8 4.5c2.2 0 3.6 1.2 5.2 3 1.6-1.8 3-3 5.2-3C21 4.5 23 8.2 21.6 11.6 19.5 16.4 12 21 12 21z"/></svg>','#ec4899'],
  contact:['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/></svg>','#a78bfa']
};
function renderLegal(p){
  const L=lg();pfSub(p,L.title);
  L.s.forEach(([k,title,items])=>{
    const box=document.createElement('div');box.className='lgbox'+(PF.lgOpen===k?' open':'');
    const hd=document.createElement('button');hd.className='lghd';
    hd.innerHTML='<i></i><span></span><em></em>';hd.firstChild.innerHTML=LIC[k][0];hd.firstChild.style.color=LIC[k][1];hd.children[1].textContent=title;
    hd.onclick=()=>{PF.lgOpen=PF.lgOpen===k?null:k;PF.keep=true;renderProfile()};
    box.appendChild(hd);
    if(PF.lgOpen===k){
      const ul=document.createElement('ul');ul.className='lglist';
      items.forEach(t=>{const li=document.createElement('li');li.textContent=t;ul.appendChild(li)});
      if(k==='contact'){const b=document.createElement('button');b.className='pfmini on';b.style.margin='4px 0 6px 0';b.textContent='Telegram';b.onclick=()=>{const u='https://t.me/'+TG_USER;const w=window.open(u,'_blank');if(!w)location.href=u};ul.appendChild(b)}
      box.appendChild(ul);
    }
    p.appendChild(box);
  });
}
/* riga dei metodi di pagamento sotto "Supporta il progetto" */
var PAYLOGO={"apple": "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJBcnR3b3JrIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIxOSAyNSAxMzAgNTgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDE2NS41MjEwNyAxMDUuOTY1MSIKCSB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+CgkKCQoJPGc+CgkJPGc+CgkJCTxwYXRoIGQ9Ik00NS4xODYyLDM1LjY0MDUzYzEuNDE3MjQtMS43NzI2NiwyLjM3ODk3LTQuMTUyODIsMi4xMjUzMi02LjU4NTA2Yy0yLjA3NDY0LDAuMTAzMTYtNC42MDYzNCwxLjM2ODcxLTYuMDcyMDcsMy4xNDI3NgoJCQkJYy0xLjMxNjA3LDEuNTE5Mi0yLjQ4MDksMy45OTkwMi0yLjE3NzIzLDYuMzI5M0M0MS4zOTExMSwzOC43Mjk1NCw0My43MTc4NSwzNy4zNjM0NSw0NS4xODYyLDM1LjY0MDUzIi8+CgkJCTxwYXRoIGQ9Ik00Ny4yODUwNiwzOC45ODI1MmMtMy4zODIxMS0wLjIwMTQ2LTYuMjU3NzMsMS45MTk1MS03Ljg3Mjg2LDEuOTE5NTFjLTEuNjE2MDIsMC00LjA4OTMxLTEuODE3OTktNi43NjQzOC0xLjc2ODk5CgkJCQljLTMuNDgxNzcsMC4wNTExNC02LjcxMjQ1LDIuMDE5NzYtOC40NzkzLDUuMTUwNzljLTMuNjM0MTEsNi4yNjM2LTAuOTU5MDQsMTUuNTU0NzEsMi41NzQ5NCwyMC42NTYwNgoJCQkJYzEuNzE2MTgsMi41MjM4LDMuNzg0NDcsNS4zMDI2OSw2LjUwOTc2LDUuMjAyODdjMi41NzQ5NC0wLjEwMTA0LDMuNTg0MjEtMS42NjczMiw2LjcxNDE2LTEuNjY3MzIKCQkJCWMzLjEyNzY1LDAsNC4wMzY3OSwxLjY2NzMyLDYuNzYyNTIsMS42MTY4MWMyLjgyNjY1LTAuMDUwNTQsNC41OTM4MS0yLjUyNTA2LDYuMzA5OTctNS4wNTEzMgoJCQkJYzEuOTY4NzgtMi44NzcsMi43NzQ3My01LjY1NDk4LDIuODI1NDItNS44MDc0OGMtMC4wNTA3LTAuMDUwNTEtNS40NTA1OC0yLjEyMjA0LTUuNTAwNjUtOC4zMzM1OAoJCQkJYy0wLjA1MDk4LTUuMjAxMDEsNC4yMzk1MS03LjY3NDksNC40NDE0NC03LjgyODMyQzUyLjM4MzIsMzkuNDg4MSw0OC41OTc1LDM5LjA4NDA0LDQ3LjI4NTA2LDM4Ljk4MjUyIi8+CgkJPC9nPgoJCTxnPgoJCQk8cGF0aCBkPSJNNzYuNzMzODUsMzEuOTQzODFjNy4zNTA5NiwwLDEyLjQ2OTcsNS4wNjcwOCwxMi40Njk3LDEyLjQ0NDM3YzAsNy40MDM2My01LjIyNDA3LDEyLjQ5NzA0LTEyLjY1NDAzLDEyLjQ5NzA0aC04LjEzODkyCgkJCQl2MTIuOTQzMThoLTUuODgwMzd2LTM3Ljg4NDZINzYuNzMzODV6IE02OC40MTA1OSw1MS45NDkzaDYuNzQ3MzJjNS4xMTk3NSwwLDguMDMzNi0yLjc1NjM2LDguMDMzNi03LjUzNDc5CgkJCQljMC00Ljc3NzkyLTIuOTEzODUtNy41MDg0NS04LjAwNzI3LTcuNTA4NDVoLTYuNzczNjVWNTEuOTQ5M3oiLz4KCQkJPHBhdGggZD0iTTkwLjczOTk3LDYxLjk3ODY0YzAtNC44MzExLDMuNzAxODItNy43OTc2MSwxMC4yNjU4My04LjE2NTI2bDcuNTYwNjEtMC40NDYxNHYtMi4xMjYzOQoJCQkJYzAtMy4wNzE4NS0yLjA3NDIzLTQuOTA5NTktNS41MzkwNS00LjkwOTU5Yy0zLjI4MjUxLDAtNS4zMzA0MSwxLjU3NDkyLTUuODI4NzEsNC4wNDMxM2gtNS4zNTU3NAoJCQkJYzAuMzE0OTktNC45ODg1OSw0LjU2Nzc3LTguNjY0MDcsMTEuMzk0MS04LjY2NDA3YzYuNjk0NjYsMCwxMC45NzM3NywzLjU0NDMyLDEwLjk3Mzc3LDkuMDgzODh2MTkuMDM0MjFoLTUuNDM0NzJ2LTQuNTQxOTQKCQkJCWgtMC4xMzA2NWMtMS42MDEyNSwzLjA3MTg1LTUuMDkzNDEsNS4wMTQ0MS04LjcxNjIzLDUuMDE0NDFDOTQuNTIwNzgsNzAuMzAwODgsOTAuNzM5OTcsNjYuOTQwMzgsOTAuNzM5OTcsNjEuOTc4NjR6CgkJCQkgTTEwOC41NjY0MSw1OS40ODQ2di0yLjE3OTA1bC02LjgsMC40MTk4MWMtMy4zODY4MywwLjIzNjQ5LTUuMzAzMDYsMS43MzI5MS01LjMwMzA2LDQuMDk1NzkKCQkJCWMwLDIuNDE1MDQsMS45OTUyMywzLjk5MDQ2LDUuMDQwNzUsMy45OTA0NkMxMDUuNDY4MjMsNjUuODExNjEsMTA4LjU2NjQxLDYzLjA4MTA4LDEwOC41NjY0MSw1OS40ODQ2eiIvPgoJCQk8cGF0aCBkPSJNMTE5LjM0MTY3LDc5Ljk4ODl2LTQuNTk0NmMwLjQxOTMsMC4xMDQ4MywxLjM2NDI1LDAuMTA0ODMsMS44MzcyMywwLjEwNDgzYzIuNjI1MiwwLDQuMDQzMTMtMS4xMDI0NSw0LjkwOTA4LTMuOTM3OAoJCQkJYzAtMC4wNTI2NywwLjQ5OTMxLTEuNjgwMjUsMC40OTkzMS0xLjcwNjU4bC05Ljk3NjE2LTI3LjY0NTYyaDYuMTQyNjhsNi45ODQzMiwyMi40NzM3MWgwLjEwNDMybDYuOTg0MzMtMjIuNDczNzFoNS45ODU3CgkJCQlsLTEwLjM0NDgzLDI5LjA2MzA0Yy0yLjM2MTg2LDYuNjk1MTctNS4wOTI0LDguODQ3ODktMTAuODE1NzcsOC44NDc4OUMxMjEuMTc4OTEsODAuMTIwMDYsMTE5Ljc2MDk4LDgwLjA2NzM5LDExOS4zNDE2Nyw3OS45ODg5CgkJCQl6Ii8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPg==", "google": "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJHX1BheV9BY2NlcHRhbmNlX01hcmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiCgkgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjI3NiAyNTAgNTQyIDI1MCIgIHhtbDpzcGFjZT0icHJlc2VydmUiPgoKCjxnIGlkPSJHX1BheV9Mb2NrdXBfMV8iPgoJPGcgaWQ9IlBheV9UeXBlZmFjZV8zXyI+CgkJPHBhdGggaWQ9IkxldHRlcl9wXzNfIiBmaWxsPSIjM0M0MDQzIiBkPSJNNTI5LjMsMzg0LjJ2NjAuNWgtMTkuMlYyOTUuM0g1NjFjMTIuOSwwLDIzLjksNC4zLDMyLjksMTIuOQoJCQljOS4yLDguNiwxMy44LDE5LjEsMTMuOCwzMS41YzAsMTIuNy00LjYsMjMuMi0xMy44LDMxLjdjLTguOSw4LjUtMTkuOSwxMi43LTMyLjksMTIuN2gtMzEuN1YzODQuMnogTTUyOS4zLDMxMy43djUyLjFoMzIuMQoJCQljNy42LDAsMTQtMi42LDE5LTcuN2M1LjEtNS4xLDcuNy0xMS4zLDcuNy0xOC4zYzAtNi45LTIuNi0xMy03LjctMTguMWMtNS01LjMtMTEuMy03LjktMTktNy45aC0zMi4xVjMxMy43eiIvPgoJCTxwYXRoIGlkPSJMZXR0ZXJfYV8zXyIgZmlsbD0iIzNDNDA0MyIgZD0iTTY1Ny45LDMzOS4xYzE0LjIsMCwyNS40LDMuOCwzMy42LDExLjRjOC4yLDcuNiwxMi4zLDE4LDEyLjMsMzEuMnY2M2gtMTguM3YtMTQuMmgtMC44CgkJCWMtNy45LDExLjctMTguNSwxNy41LTMxLjcsMTcuNWMtMTEuMywwLTIwLjctMy4zLTI4LjMtMTBzLTExLjQtMTUtMTEuNC0yNWMwLTEwLjYsNC0xOSwxMi0yNS4yYzgtNi4zLDE4LjctOS40LDMyLTkuNAoJCQljMTEuNCwwLDIwLjgsMi4xLDI4LjEsNi4zdi00LjRjMC02LjctMi42LTEyLjMtNy45LTE3Yy01LjMtNC43LTExLjUtNy0xOC42LTdjLTEwLjcsMC0xOS4yLDQuNS0yNS40LDEzLjZsLTE2LjktMTAuNgoJCQlDNjI1LjksMzQ1LjgsNjM5LjcsMzM5LjEsNjU3LjksMzM5LjF6IE02MzMuMSw0MTMuM2MwLDUsMi4xLDkuMiw2LjQsMTIuNWM0LjIsMy4zLDkuMiw1LDE0LjksNWM4LjEsMCwxNS4zLTMsMjEuNi05CgkJCXM5LjUtMTMsOS41LTIxLjFjLTYtNC43LTE0LjMtNy4xLTI1LTcuMWMtNy44LDAtMTQuMywxLjktMTkuNSw1LjZDNjM1LjcsNDAzLjEsNjMzLjEsNDA3LjgsNjMzLjEsNDEzLjN6Ii8+CgkJPHBhdGggaWQ9IkxldHRlcl95XzNfIiBmaWxsPSIjM0M0MDQzIiBkPSJNODA4LjIsMzQyLjRsLTY0LDE0Ny4yaC0xOS44bDIzLjgtNTEuNUw3MDYsMzQyLjRoMjAuOWwzMC40LDczLjRoMC40bDI5LjYtNzMuNEg4MDguMnoiCgkJCS8+Cgk8L2c+Cgk8ZyBpZD0iR19NYXJrXzFfIj4KCQk8cGF0aCBpZD0iQmx1ZV81MDAiIGZpbGw9IiM0Mjg1RjQiIGQ9Ik00NTIuOTMsMzcyYzAtNi4yNi0wLjU2LTEyLjI1LTEuNi0xOC4wMWgtODAuNDh2MzNMNDE3LjIsMzg3CgkJCWMtMS44OCwxMC45OC03LjkzLDIwLjM0LTE3LjIsMjYuNTh2MjEuNDFoMjcuNTlDNDQzLjcsNDIwLjA4LDQ1Mi45MywzOTguMDQsNDUyLjkzLDM3MnoiLz4KCQk8cGF0aCBpZD0iR3JlZW5fNTAwXzFfIiBmaWxsPSIjMzRBODUzIiBkPSJNNDAwLjAxLDQxMy41OGMtNy42OCw1LjE4LTE3LjU3LDguMjEtMjkuMTQsOC4yMWMtMjIuMzUsMC00MS4zMS0xNS4wNi00OC4xLTM1LjM2CgkJCWgtMjguNDZ2MjIuMDhjMTQuMSwyNy45OCw0My4wOCw0Ny4xOCw3Ni41Niw0Ny4xOGMyMy4xNCwwLDQyLjU4LTcuNjEsNTYuNzMtMjAuNzFMNDAwLjAxLDQxMy41OHoiLz4KCQk8cGF0aCBpZD0iWWVsbG93XzUwMF8xXyIgZmlsbD0iI0ZBQkIwNSIgZD0iTTMyMC4wOSwzNzAuMDVjMC01LjcsMC45NS0xMS4yMSwyLjY4LTE2LjM5di0yMi4wOGgtMjguNDYKCQkJYy01LjgzLDExLjU3LTkuMTEsMjQuNjMtOS4xMSwzOC40N3MzLjI5LDI2LjksOS4xMSwzOC40N2wyOC40Ni0yMi4wOEMzMjEuMDQsMzgxLjI2LDMyMC4wOSwzNzUuNzUsMzIwLjA5LDM3MC4wNXoiLz4KCQk8cGF0aCBpZD0iUmVkXzUwMCIgZmlsbD0iI0U5NDIzNSIgZD0iTTM3MC44NywzMTguM2MxMi42MywwLDIzLjk0LDQuMzUsMzIuODcsMTIuODVsMjQuNDUtMjQuNDMKCQkJYy0xNC44NS0xMy44My0zNC4yMS0yMi4zMi01Ny4zMi0yMi4zMmMtMzMuNDcsMC02Mi40NiwxOS4yLTc2LjU2LDQ3LjE4bDI4LjQ2LDIyLjA4QzMyOS41NiwzMzMuMzYsMzQ4LjUyLDMxOC4zLDM3MC44NywzMTguM3oiLz4KCTwvZz4KPC9nPgo8L3N2Zz4=", "visa": "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIC0xIDI1NiA4NSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjQ1Ljk3NDE5NjYlIiB5MT0iLTIuMDA2MTc0NjclIiB4Mj0iNTQuODc2ODcyNiUiIHkyPSIxMDAlIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMyMjIzNTciIG9mZnNldD0iMCUiPgoKPC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMjU0QUE1IiBvZmZzZXQ9IjEwMCUiPgoKPC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8Zz4KICAgICAgICA8cGF0aCBkPSJNMTMyLjM5NzA5NCw1Ni4yMzk3NDU1IEMxMzIuMjUxMDM2LDQ0LjcyNDI4MDggMTQyLjY1OTU0LDM4LjI5Nzc1OTkgMTUwLjUwMDUxMSwzNC40NzcyMDg2IEMxNTguNTU2NzI0LDMwLjU1NjcyMzMgMTYxLjI2MjYyNywyOC4wNDMwMDA0IDE2MS4yMzE4NzgsMjQuNTM3NjI1MyBDMTYxLjE3MDM4LDE5LjE3MTk0MTYgMTU0LjgwNTM1NywxNi44MDQyNzYgMTQ4Ljg0Nzc1NywxNi43MTIwMjkzIEMxMzguNDU0NjI4LDE2LjU1MDU5NzUgMTMyLjQxMjQ2NywxOS41MTc4NjY4IDEyNy42MDc5NTIsMjEuNzYyNTM2OCBMMTIzLjg2NDI3Myw0LjI0MzM0ODc1IEMxMjguNjg0MTYzLDIuMDIxNzQwNDMgMTM3LjYwOTAzMywwLjA4NDU1OTQ4NiAxNDYuODY0NDUzLC03LjEwNTQyNzM2ZS0xNSBDMTY4LjU4ODU1MywtNy4xMDU0MjczNmUtMTUgMTgyLjgwMjIzNCwxMC43MjM2ODAyIDE4Mi44NzkxMDcsMjcuMzUxMTUwMSBDMTgyLjk2MzY2Niw0OC40NTI1ODU0IDE1My42OTA3MSw0OS42MjEwNDM4IDE1My44OTA1NzcsNTkuMDUzMjcgQzE1My45NTk3NjIsNjEuOTEyOTE4IDE1Ni42ODg3MjgsNjQuOTY0NzQ3IDE2Mi42NjkzODksNjUuNzQxMTU2NSBDMTY1LjYyODk3MSw2Ni4xMzMyMDUgMTczLjgwMDQ5Myw2Ni40MzMwMDcgMTgzLjA2MzYsNjIuMTY2NTk2NSBMMTg2LjY5OTY1OCw3OS4xMTY5MyBDMTgxLjcxODMzNSw4MC45MzExMTUgMTc1LjMxNDg3Niw4Mi42Njg0Mjg1IDE2Ny4zNDMyMjMsODIuNjY4NDI4NSBDMTQ2Ljg5NTIwMiw4Mi42Njg0Mjg1IDEzMi41MTI0MDIsNzEuNzk4NjkxIDEzMi4zOTcwOTQsNTYuMjM5NzQ1NSBNMjIxLjYzODEsODEuMjA3ODU1NSBDMjE3LjY3MTQ5MSw4MS4yMDc4NTU1IDIxNC4zMjc1NDgsNzguODk0MDAwNSAyMTIuODM2MjI2LDc1LjM0MjUwMiBMMTgxLjgwMjg5NCwxLjI0NTMzMDYxIEwyMDMuNTExNjIxLDEuMjQ1MzMwNjEgTDIwNy44MzE4NDIsMTMuMTgzNTkyNiBMMjM0LjM2MDQ1OSwxMy4xODM1OTI2IEwyMzYuODY2NDk0LDEuMjQ1MzMwNjEgTDI1NiwxLjI0NTMzMDYxIEwyMzkuMzAzMzQ1LDgxLjIwNzg1NTUgTDIyMS42MzgxLDgxLjIwNzg1NTUgTTIyNC42NzQ1NTQsNTkuNjA2NzUwNSBMMjMwLjkzOTY0MywyOS41ODA0NDU2IEwyMTMuNzgxNzU1LDI5LjU4MDQ0NTYgTDIyNC42NzQ1NTQsNTkuNjA2NzUwNSBNMTA2LjA3NjAzMSw4MS4yMDc4NTU1IEw4OC45NjQyNjY1LDEuMjQ1MzMwNjEgTDEwOS42NTA1OTEsMS4yNDUzMzA2MSBMMTI2Ljc1NDY2OSw4MS4yMDc4NTU1IEwxMDYuMDc2MDMxLDgxLjIwNzg1NTUgTTc1LjQ3MzE4NSw4MS4yMDc4NTU1IEw1My45NDEyNjUsMjYuNzgyMjk1MyBMNDUuMjMxNjM3Nyw3My4wNTkzOTYgQzQ0LjIwOTIzNjcsNzguMjI1MjExNSA0MC4xNzM0NDMxLDgxLjIwNzg1NTUgMzUuNjkxNzkwMyw4MS4yMDc4NTU1IEwwLjQ5MTk4MjQ2NCw4MS4yMDc4NTU1IEwwLDc4Ljg4NjMxMyBDNy4yMjU5OTI0NSw3Ny4zMTgxMTkgMTUuNDM1OTQ5OCw3NC43ODkwMjE1IDIwLjQwOTU4NSw3Mi4wODMxMTggQzIzLjQ1MzcyNjUsNzAuNDMwMzY0NSAyNC4zMjIzODMsNjguOTg1MTY2IDI1LjMyMTcyMjQsNjUuMDU2OTkzNSBMNDEuODE4NTA5NCwxLjI0NTMzMDYxIEw2My42ODA5OCwxLjI0NTMzMDYxIEw5Ny4xOTcyODU1LDgxLjIwNzg1NTUgTDc1LjQ3MzE4NSw4MS4yMDc4NTU1IiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjguMDAwMDAwLCA0MS4zMzQyMTQpIHNjYWxlKDEsIC0xKSB0cmFuc2xhdGUoLTEyOC4wMDAwMDAsIC00MS4zMzQyMTQpICI+Cgo8L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg==", "mc": "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMTUyLjQgMTA4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNTIuNCAxMDg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO30KCS5zdDF7ZmlsbDojRkY1RjAwO30KCS5zdDJ7ZmlsbDojRUIwMDFCO30KCS5zdDN7ZmlsbDojRjc5RTFCO30KPC9zdHlsZT4KPGc+Cgk8cmVjdCB5PSIwIiBjbGFzcz0ic3QwIiB3aWR0aD0iMTUyLjQiIGhlaWdodD0iMTA4Ii8+Cgk8Zz4KCQk8cmVjdCB4PSI2MC40IiB5PSIyNS43IiBjbGFzcz0ic3QxIiB3aWR0aD0iMzEuNSIgaGVpZ2h0PSI1Ni42Ii8+CgkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTYyLjQsNTRjMC0xMSw1LjEtMjEuNSwxMy43LTI4LjNjLTE1LjYtMTIuMy0zOC4zLTkuNi01MC42LDYuMUMxMy4zLDQ3LjQsMTYsNzAsMzEuNyw4Mi4zCgkJCWMxMy4xLDEwLjMsMzEuNCwxMC4zLDQ0LjUsMEM2Ny41LDc1LjUsNjIuNCw2NSw2Mi40LDU0eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik0xMzQuNCw1NGMwLDE5LjktMTYuMSwzNi0zNiwzNmMtOC4xLDAtMTUuOS0yLjctMjIuMi03LjdjMTUuNi0xMi4zLDE4LjMtMzQuOSw2LTUwLjZjLTEuOC0yLjItMy44LTQuMy02LTYKCQkJYzE1LjYtMTIuMywzOC4zLTkuNiw1MC41LDYuMUMxMzEuNywzOC4xLDEzNC40LDQ1LjksMTM0LjQsNTR6Ii8+Cgk8L2c+CjwvZz4KPC9zdmc+"};
var PMI={
  card:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="M2.5 10h19M6 15h4"/></svg>',
  phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2.5" width="12" height="19" rx="2.5"/><path d="M10.5 18.5h3"/></svg>',
  lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="4.5" y="10.5" width="15" height="10.5" rx="2.5"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/></svg>'
};
(function(){
  const orig=renderSupport;
  renderSupport=function(p){
    orig(p);
    const L=lg(),row=document.createElement('div');row.className='pmrow';
    /* marchi ufficiali dei metodi di pagamento accettati da Stripe */
    [['visa',1],['mc',1],['apple',1],['google',1]].forEach(([k,card])=>{
      const im=document.createElement('img');im.alt=k;im.src=PAYLOGO[k];
      if(card){const c=document.createElement('span');c.className='pmcard pm-'+k;c.appendChild(im);row.appendChild(c)}
      else{im.className='pmmark pm-'+k;row.appendChild(im)}
    });
    const safe=document.createElement('div');safe.className='pmsafe';safe.innerHTML=PMI.lock+'<span></span>';safe.lastChild.textContent=L.pm_safe+' · Stripe';
    const note=p.querySelector('.pfnote');if(note)note.remove();
    p.appendChild(row);p.appendChild(safe);
  };
})();
/* voce "Note legali" prima di Esci */
(function(){
  const orig=renderProfile;
  renderProfile=function(){
    if(PF.page==='legal'){const p=$('pf-screen');const st=PF.keep?p.scrollTop:0;PF.keep=false;p.innerHTML='';renderLegal(p);p.scrollTop=st;return}
    orig();
    if(PF.page)return;
    const p=$('pf-screen'),out=[...p.querySelectorAll('.pfrow.danger')].pop();
    if(!out)return;
    const g=document.createElement('div');g.className='pfg';
    pfRow(g,PIC.legal,lg().title,lg().sub,()=>pfGo('legal'),'',PCOL.legal).classList.add('chev');
    out.parentNode.before(g);
  };
})();


/* =====================================================================
   NOTIFICHE: attivazione per tutti + portale "Invia notifica" per l'amministratore
   ===================================================================== */
var NT={
 it:{reuse:"Riusa",del:"Elimina",delq:"Togliere questa notifica dallo storico? Su chi l'ha già ricevuta resta.",delall:"Svuota lo storico",delallq:"Togliere tutte le notifiche dallo storico?",n:"Notifiche",nsub:"Novità e avvisi sul telefono",on:"Notifiche attive",off:"Notifiche spente",enable:"Attiva notifiche",disable:"Disattiva",why:"Ricevi sul telefono le novità di NexusCharts e gli avvisi importanti, anche ad app chiusa.",home:"Per ricevere le notifiche apri NexusCharts dall'icona sulla schermata Home (non da Safari).",old:"Questo telefono non supporta le notifiche delle web app. Su iPhone serve iOS 16.4 o successivo.",denied:"Le notifiche sono bloccate. Riattivale da Impostazioni dell'iPhone → Notifiche → NexusCharts.",done:"Notifiche attivate.",fail:"Non sono riuscito ad attivare le notifiche. Riprova.",offdone:"Notifiche disattivate.",ask:"Vuoi ricevere le notifiche di NexusCharts?",asksub:"Novità, aggiornamenti e avvisi importanti. Puoi spegnerle quando vuoi dal Profilo.",later:"Non ora",
  send:"Invia notifica",sendsub:"Scrivi un messaggio a tutti gli utenti",ttl:"Titolo",body:"Messaggio",preview:"Anteprima",devices:"telefoni con le notifiche attive",go:"Invia a tutti",confirm:"Inviare questa notifica a tutti?",sent:"Notifica inviata",hist:"Inviate di recente",none:"Nessuna notifica inviata.",now:"ora",lim:"Con il piano gratuito si arriva a circa 45 telefoni per invio."},
 es:{reuse:"Reutilizar",del:"Eliminar",delq:"¿Quitar esta notificación del historial? Quien ya la recibió la conserva.",delall:"Vaciar historial",delallq:"¿Quitar todas las notificaciones del historial?",n:"Notificaciones",nsub:"Novedades y avisos en el teléfono",on:"Notificaciones activas",off:"Notificaciones apagadas",enable:"Activar notificaciones",disable:"Desactivar",why:"Recibe en el teléfono las novedades de NexusCharts y los avisos importantes, incluso con la app cerrada.",home:"Para recibir notificaciones abre NexusCharts desde el icono de la pantalla de inicio (no desde Safari).",old:"Este teléfono no admite notificaciones de web apps. En iPhone hace falta iOS 16.4 o posterior.",denied:"Las notificaciones están bloqueadas. Actívalas en Ajustes del iPhone → Notificaciones → NexusCharts.",done:"Notificaciones activadas.",fail:"No pude activar las notificaciones. Inténtalo de nuevo.",offdone:"Notificaciones desactivadas.",ask:"¿Quieres recibir las notificaciones de NexusCharts?",asksub:"Novedades, actualizaciones y avisos importantes. Puedes apagarlas cuando quieras desde el Perfil.",later:"Ahora no",
  send:"Enviar notificación",sendsub:"Escribe un mensaje a todos los usuarios",ttl:"Título",body:"Mensaje",preview:"Vista previa",devices:"teléfonos con notificaciones activas",go:"Enviar a todos",confirm:"¿Enviar esta notificación a todos?",sent:"Notificación enviada",hist:"Enviadas recientemente",none:"Ninguna notificación enviada.",now:"ahora",lim:"Con el plan gratuito se llega a unos 45 teléfonos por envío."},
 en:{reuse:"Reuse",del:"Delete",delq:"Remove this notification from the history? People who already got it keep it.",delall:"Clear history",delallq:"Remove all notifications from the history?",n:"Notifications",nsub:"News and alerts on your phone",on:"Notifications on",off:"Notifications off",enable:"Turn on notifications",disable:"Turn off",why:"Get NexusCharts news and important alerts on your phone, even when the app is closed.",home:"To get notifications open NexusCharts from its Home Screen icon (not from Safari).",old:"This phone doesn't support web app notifications. iPhone needs iOS 16.4 or later.",denied:"Notifications are blocked. Turn them back on in iPhone Settings → Notifications → NexusCharts.",done:"Notifications turned on.",fail:"Couldn't turn on notifications. Try again.",offdone:"Notifications turned off.",ask:"Do you want NexusCharts notifications?",asksub:"News, updates and important alerts. You can turn them off anytime from Profile.",later:"Not now",
  send:"Send notification",sendsub:"Write a message to all users",ttl:"Title",body:"Message",preview:"Preview",devices:"phones with notifications on",go:"Send to everyone",confirm:"Send this notification to everyone?",sent:"Notification sent",hist:"Recently sent",none:"No notifications sent.",now:"now",lim:"On the free plan each send reaches about 45 phones."},
 fr:{reuse:"Réutiliser",del:"Supprimer",delq:"Retirer cette notification de l'historique ? Ceux qui l'ont reçue la gardent.",delall:"Vider l'historique",delallq:"Retirer toutes les notifications de l'historique ?",n:"Notifications",nsub:"Nouveautés et alertes sur le téléphone",on:"Notifications activées",off:"Notifications désactivées",enable:"Activer les notifications",disable:"Désactiver",why:"Reçois sur ton téléphone les nouveautés de NexusCharts et les alertes importantes, même app fermée.",home:"Pour recevoir les notifications, ouvre NexusCharts depuis l'icône de l'écran d'accueil (pas depuis Safari).",old:"Ce téléphone ne prend pas en charge les notifications des web apps. Sur iPhone il faut iOS 16.4 ou plus.",denied:"Les notifications sont bloquées. Réactive-les dans Réglages de l'iPhone → Notifications → NexusCharts.",done:"Notifications activées.",fail:"Impossible d'activer les notifications. Réessaie.",offdone:"Notifications désactivées.",ask:"Veux-tu recevoir les notifications de NexusCharts ?",asksub:"Nouveautés, mises à jour et alertes importantes. Tu peux les couper quand tu veux depuis le Profil.",later:"Pas maintenant",
  send:"Envoyer une notification",sendsub:"Écris un message à tous les utilisateurs",ttl:"Titre",body:"Message",preview:"Aperçu",devices:"téléphones avec les notifications activées",go:"Envoyer à tous",confirm:"Envoyer cette notification à tous ?",sent:"Notification envoyée",hist:"Envoyées récemment",none:"Aucune notification envoyée.",now:"maintenant",lim:"Avec le plan gratuit chaque envoi atteint environ 45 téléphones."}
};
function nt(k){return(NT[lang]&&NT[lang][k])||NT.it[k]||k}
PIC.bell='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.9 1.9 0 0 0 3.4 0"/></svg>';
PIC.mega='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11v2a1 1 0 0 0 1 1h3l6 4V6L7 10H4a1 1 0 0 0-1 1z"/><path d="M16 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/></svg>';
PCOL.bell='#ef4444';PCOL.mega='#f97316';
const pushOK=()=>'serviceWorker' in navigator&&'PushManager' in window&&'Notification' in window;
var SWREG=null;
function swReady(){
  if(!('serviceWorker' in navigator))return Promise.resolve(null);
  if(!SWREG)SWREG=navigator.serviceWorker.register('sw.js').then(()=>navigator.serviceWorker.ready).catch(()=>null);
  return SWREG;
}
if('serviceWorker' in navigator)setTimeout(swReady,2500);
const b64uToU8=s=>{s=s.replace(/-/g,'+').replace(/_/g,'/');while(s.length%4)s+='=';return Uint8Array.from(atob(s),c=>c.charCodeAt(0))};
async function pushState(){
  if(!pushOK())return'old';
  if(!isStandalone()&&/iPhone|iPad/.test(navigator.userAgent))return'home';
  if(Notification.permission==='denied')return'denied';
  const r=await swReady();if(!r)return'old';
  const s=await r.pushManager.getSubscription();
  return s&&Notification.permission==='granted'?'on':'off';
}
function pushHeaders(){return{'Content-Type':'application/json',...(FRIEND?{Authorization:'Bearer '+FRIEND}:{}),...(admKey()&&!FRIEND?{'X-Admin-Key':admKey()}:{})}}
async function pushEnable(){
  try{
    /* la richiesta di permesso deve partire subito dal tocco */
    const perm=await Notification.requestPermission();
    if(perm!=='granted'){msg(nt(perm==='denied'?'denied':'fail'));return false}
    const r=await swReady();if(!r)throw new Error('sw');
    const k=await (await fetch(WORKER+'/push/key',{cache:'no-store'})).json();
    let s=await r.pushManager.getSubscription();
    if(!s)s=await r.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:b64uToU8(k.key)});
    const ua=navigator.userAgent,dev=/iPhone/.test(ua)?'iPhone':/iPad/.test(ua)?'iPad':/Android/.test(ua)?'Android':'Computer';
    const res=await fetch(WORKER+'/push/sub',{method:'POST',headers:pushHeaders(),body:JSON.stringify({sub:s.toJSON(),lang,dev})});
    if(!res.ok)throw new Error(res.status);
    try{localStorage.setItem('tc_push','1')}catch(e){}
    msg(nt('done'));haptic();return true;
  }catch(e){msg(nt('fail'));return false}
}
async function pushDisable(){
  try{
    const r=await swReady(),s=r&&await r.pushManager.getSubscription();
    if(s){await fetch(WORKER+'/push/sub',{method:'POST',headers:pushHeaders(),body:JSON.stringify({sub:s.toJSON(),off:true})}).catch(()=>{});await s.unsubscribe()}
    try{localStorage.setItem('tc_push','0')}catch(e){}
    msg(nt('offdone'));
  }catch(e){}
}
/* ripresenta l'iscrizione a ogni apertura: se il telefono l'ha rinnovata, il server resta aggiornato */
setTimeout(async()=>{
  try{if(await pushState()!=='on')return;const r=await swReady(),s=await r.pushManager.getSubscription();
    const ua=navigator.userAgent,dev=/iPhone/.test(ua)?'iPhone':/Android/.test(ua)?'Android':'Computer';
    fetch(WORKER+'/push/sub',{method:'POST',headers:pushHeaders(),body:JSON.stringify({sub:s.toJSON(),lang,dev})}).catch(()=>{})}catch(e){}
},8000);
/* invito una sola volta, dopo l'accesso, per chi usa l'app dalla Home */
function pushInvite(){
  let seen=null;try{seen=localStorage.getItem('tc_pushask')}catch(e){}
  if(seen||!document.body.classList.contains('inapp'))return;
  pushState().then(st=>{
    if(st!=='off')return;
    try{localStorage.setItem('tc_pushask','1')}catch(e){}
    openSheet(s=>{
      const d=document.createElement('div');d.className='ntask';
      d.innerHTML='<i>'+PIC.bell+'</i><b></b><span></span>';d.children[1].textContent=nt('ask');d.children[2].textContent=nt('asksub');s.appendChild(d);
      const ok=document.createElement('button');ok.className='gdok';ok.textContent=nt('enable');ok.onclick=async()=>{closeSheet();await pushEnable()};s.appendChild(ok);
      const no=document.createElement('button');no.className='ntlater';no.textContent=nt('later');no.onclick=closeSheet;s.appendChild(no);
    });
  });
}
setInterval(()=>{if(document.body.classList.contains('inapp')&&!document.hidden)pushInvite()},8000);
/* ---------- pagina Notifiche (per tutti) ---------- */
function renderNotif(p){
  pfSub(p,nt('n'));
  const card=document.createElement('div');card.className='ntcard';
  card.innerHTML='<i>'+PIC.bell+'</i><b>…</b><span></span>';card.children[2].textContent=nt('why');p.appendChild(card);
  const g=pfGroup(p,'');g.classList.add('pfpad');
  pushState().then(st=>{
    card.classList.toggle('on',st==='on');
    card.children[1].textContent=st==='on'?nt('on'):nt('off');
    g.innerHTML='';
    if(st==='old'||st==='home'||st==='denied'){shEl(g,'pfnote',nt(st));return}
    const b=document.createElement('button');b.className='pfbtn'+(st==='on'?' pfbtn2':'');b.textContent=st==='on'?nt('disable'):nt('enable');
    b.onclick=async()=>{b.disabled=true;if(st==='on')await pushDisable();else await pushEnable();PF.keep=true;renderProfile()};
    g.appendChild(b);
  });
}
/* ---------- pagina Invia notifica (solo amministratore) ---------- */
function renderSend(p){
  pfSub(p,nt('send'));
  const stat=document.createElement('div');stat.className='ntstat';stat.innerHTML='<b>…</b><span></span>';stat.lastChild.textContent=nt('devices');p.appendChild(stat);
  const g=pfGroup(p,'');g.classList.add('pfpad');
  const ti=document.createElement('input');ti.className='pfin2';ti.placeholder=nt('ttl');ti.maxLength=80;ti.value=PF.ntT||'';g.appendChild(ti);
  const bo=document.createElement('textarea');bo.className='pfta';bo.placeholder=nt('body');bo.maxLength=300;bo.value=PF.ntB||'';g.appendChild(bo);
  /* anteprima stile iPhone */
  const lab=document.createElement('div');lab.className='pfl';lab.textContent=nt('preview');g.appendChild(lab);
  const pv=document.createElement('div');pv.className='ntprev';
  pv.innerHTML='<img alt="" src="'+LOGO_SRC+'"><div><div class="nth"><b>NexusCharts</b><span></span></div><div class="ntt"></div><div class="ntb"></div></div>';
  pv.querySelector('.nth span').textContent=nt('now');g.appendChild(pv);
  const upd=()=>{PF.ntT=ti.value;PF.ntB=bo.value;pv.querySelector('.ntt').textContent=ti.value||nt('ttl');pv.querySelector('.ntb').textContent=bo.value||nt('body')};
  ti.oninput=upd;bo.oninput=upd;upd();
  const go=document.createElement('button');go.className='pfbtn';go.textContent=nt('go');g.appendChild(go);
  go.onclick=async()=>{
    if(!ti.value.trim()&&!bo.value.trim())return;
    if(!confirm(nt('confirm')))return;
    go.disabled=true;
    try{const r=await adm('POST','/push',{title:ti.value.trim(),body:bo.value.trim()});msg('✓ '+nt('sent')+': '+r.sent+'/'+r.total);PF.ntT='';PF.ntB='';haptic();PF.keep=true;renderProfile()}
    catch(e){go.disabled=false;msg(e.status===403?ft('keybad'):ft('neterr'))}
  };
  shEl(p,'pfnote',nt('lim'));
  const hl=document.createElement('div');hl.className='pfl';hl.textContent=nt('hist');p.appendChild(hl);
  const list=document.createElement('div');list.className='pfclist';p.appendChild(list);
  adm('GET','/push').then(j=>{
    stat.firstChild.textContent=j.devices;
    if(!j.hist||!j.hist.length){shEl(list,'pfnote',nt('none'));return}
    j.hist.forEach(h=>{
      const c=document.createElement('div');c.className='pfccard';
      c.innerHTML='<div class="pfctop"><span class="pfcn"></span><span class="pfcdate"></span></div><div class="pffbtx"></div><div class="pfcmeta"></div>';
      c.querySelector('.pfcn').textContent=h.title;c.querySelector('.pffbtx').textContent=h.body;
      c.querySelector('.pfcdate').textContent=new Date(h.ts).toLocaleString(LOC[lang]||'it-IT',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'});
      c.querySelector('.pfcmeta').textContent='✓ '+h.sent+'/'+h.total+(h.removed?'  ·  −'+h.removed:'');
      const acts=document.createElement('div');acts.className='pfacts';
      const again=document.createElement('button');again.className='pfmini';again.textContent=nt('reuse');
      again.onclick=()=>{PF.ntT=h.title;PF.ntB=h.body;PF.keep=false;renderProfile()};acts.appendChild(again);
      const del=document.createElement('button');del.className='pfmini danger';del.textContent=nt('del');
      del.onclick=async()=>{if(!confirm(nt('delq')))return;try{await adm('DELETE','/push/'+h.id);PF.keep=true;renderProfile()}catch(e){msg(ft('neterr'))}};
      acts.appendChild(del);c.appendChild(acts);
      list.appendChild(c);
    });
    if(j.hist.length>1){const g2=pfGroup(p,'');pfRow(g2,PIC.reset,nt('delall'),'',async()=>{if(!confirm(nt('delallq')))return;try{await adm('DELETE','/push/all');PF.keep=true;renderProfile()}catch(e){msg(ft('neterr'))}},'danger')}
  }).catch(()=>{stat.firstChild.textContent='–'});
}
/* voci nel Profilo */
(function(){
  const orig=renderProfile;
  renderProfile=function(){
    const p=$('pf-screen');
    if(PF.page==='notif'){p.innerHTML='';renderNotif(p);return}
    if(PF.page==='send'){const st=PF.keep?p.scrollTop:0;PF.keep=false;p.innerHTML='';renderSend(p);p.scrollTop=st;return}
    orig();
    if(PF.page)return;
    const rows=[...p.querySelectorAll('.pfrow')];
    const setRow=rows.find(r=>(r.querySelector('.pftx span')||{}).textContent===pt('settings'));
    if(setRow){const tmp=document.createElement('div');const r=pfRow(tmp,PIC.bell,nt('n'),nt('nsub'),()=>pfGo('notif'),'',PCOL.bell);r.classList.add('chev');setRow.after(r)}
    const inbox=rows.find(r=>(r.querySelector('.pftx span')||{}).textContent===p2('inbox'));
    if(inbox){const tmp=document.createElement('div');const r=pfRow(tmp,PIC.mega,nt('send'),nt('sendsub'),()=>pfGo('send'),'',PCOL.mega);r.classList.add('chev');inbox.after(r)}
  };
})();

/* =====================================================================
   0.34.0 — TIPI DI GRAFICO CON ANTEPRIMA, COLORI DELLE CANDELE
   PERSONALIZZABILI, DETTAGLI SIMBOLO E TECNICI NUOVI
   ===================================================================== */
var TCH={
 it:{body:"Corpo",bord:"Bordi",wick:"Stoppini",opac:"Opacità",custom:"Personalizzati",ccreset:"Ripristina i colori",up:"Rialzo",down:"Ribasso",
  vol:"Volume",vol30:"Volume medio (30G)",dr:"Range giornaliero",wr:"Range 52 settimane",note:"Aggiungi nota",noteph:"Scrivi una nota su questo simbolo…",perf:"Performance",seas:"Stagionalità",tech:"Tecnici",techall:"Vedi tutti i tecnici",
  sum:"Sintesi",osc:"Oscillatori",ma:"Medie mobili",piv:"Pivot",name:"Nome",value:"Valore",action:"Azione",sell:"Vendi",neu:"Neutro",buy:"Compra",ssell:"Vendi forte",sbuy:"Compra forte",
  pd:"Calcolati sul giorno precedente.",pw:"Calcolati sulla settimana precedente.",pm:"Calcolati sul mese precedente.",
  disc:"Avvertenza",disctx:"Questi valori sono calcolati in automatico dall'app sui prezzi del grafico. Non sono un consiglio di investimento, non tengono conto della tua situazione e non sono un invito a comprare o vendere. Fai sempre le tue valutazioni.",
  load:"Caricamento…",nodata:"Dati non disponibili al momento.",few:"Servono più candele per questo timeframe.",cfd:"CFD",
  tf:{'1m':"1 minuto",'5m':"5 minuti",'15m':"15 minuti",'1H':"1 ora",'4H':"4 ore",'1D':"1 giorno"},
  n:{stoch:"Stocastico %K",ao:"Oscillatore Awesome",macd:"Livello MACD",srsi:"Stocastico RSI veloce",ema:"Media mobile esponenziale",sma:"Media mobile semplice",ich:"Ichimoku linea base",vwma:"Media mobile ponderata per volume",hull:"Media mobile Hull"}},
 es:{body:"Cuerpo",bord:"Bordes",wick:"Mechas",opac:"Opacidad",custom:"Personalizados",ccreset:"Restablecer colores",up:"Alcista",down:"Bajista",
  vol:"Volumen",vol30:"Volumen medio (30D)",dr:"Rango diario",wr:"Rango 52 semanas",note:"Añadir nota",noteph:"Escribe una nota sobre este símbolo…",perf:"Rendimiento",seas:"Estacionalidad",tech:"Técnicos",techall:"Ver todos los técnicos",
  sum:"Resumen",osc:"Osciladores",ma:"Medias móviles",piv:"Pivotes",name:"Nombre",value:"Valor",action:"Acción",sell:"Vender",neu:"Neutral",buy:"Comprar",ssell:"Venta fuerte",sbuy:"Compra fuerte",
  pd:"Calculados sobre el día anterior.",pw:"Calculados sobre la semana anterior.",pm:"Calculados sobre el mes anterior.",
  disc:"Aviso",disctx:"Estos valores los calcula la app automáticamente con los precios del gráfico. No son un consejo de inversión, no tienen en cuenta tu situación y no son una invitación a comprar o vender. Haz siempre tu propio análisis.",
  load:"Cargando…",nodata:"Datos no disponibles por ahora.",few:"Hacen falta más velas para esta temporalidad.",cfd:"CFD",
  tf:{'1m':"1 minuto",'5m':"5 minutos",'15m':"15 minutos",'1H':"1 hora",'4H':"4 horas",'1D':"1 día"},
  n:{stoch:"Estocástico %K",ao:"Oscilador Awesome",macd:"Nivel MACD",srsi:"Estocástico RSI rápido",ema:"Media móvil exponencial",sma:"Media móvil simple",ich:"Ichimoku línea base",vwma:"Media móvil ponderada por volumen",hull:"Media móvil de Hull"}},
 en:{body:"Body",bord:"Borders",wick:"Wicks",opac:"Opacity",custom:"Custom",ccreset:"Reset colors",up:"Up",down:"Down",
  vol:"Volume",vol30:"Avg volume (30D)",dr:"Day's range",wr:"52-week range",note:"Add note",noteph:"Write a note about this symbol…",perf:"Performance",seas:"Seasonality",tech:"Technicals",techall:"See all technicals",
  sum:"Summary",osc:"Oscillators",ma:"Moving averages",piv:"Pivots",name:"Name",value:"Value",action:"Action",sell:"Sell",neu:"Neutral",buy:"Buy",ssell:"Strong sell",sbuy:"Strong buy",
  pd:"Based on the previous day.",pw:"Based on the previous week.",pm:"Based on the previous month.",
  disc:"Disclaimer",disctx:"These values are calculated automatically by the app from the chart prices. They are not investment advice, they don't consider your situation and they are not an invitation to buy or sell. Always do your own research.",
  load:"Loading…",nodata:"Data not available right now.",few:"More candles are needed for this timeframe.",cfd:"CFD",
  tf:{'1m':"1 minute",'5m':"5 minutes",'15m':"15 minutes",'1H':"1 hour",'4H':"4 hours",'1D':"1 day"},
  n:{stoch:"Stochastic %K",ao:"Awesome Oscillator",macd:"MACD Level",srsi:"Stochastic RSI Fast",ema:"Exponential Moving Average",sma:"Simple Moving Average",ich:"Ichimoku Base Line",vwma:"Volume Weighted Moving Average",hull:"Hull Moving Average"}},
 fr:{body:"Corps",bord:"Bordures",wick:"Mèches",opac:"Opacité",custom:"Personnalisées",ccreset:"Rétablir les couleurs",up:"Hausse",down:"Baisse",
  vol:"Volume",vol30:"Volume moyen (30J)",dr:"Fourchette du jour",wr:"Fourchette 52 semaines",note:"Ajouter une note",noteph:"Écris une note sur ce symbole…",perf:"Performance",seas:"Saisonnalité",tech:"Techniques",techall:"Voir toutes les techniques",
  sum:"Synthèse",osc:"Oscillateurs",ma:"Moyennes mobiles",piv:"Pivots",name:"Nom",value:"Valeur",action:"Action",sell:"Vendre",neu:"Neutre",buy:"Acheter",ssell:"Vente forte",sbuy:"Achat fort",
  pd:"Calculés sur le jour précédent.",pw:"Calculés sur la semaine précédente.",pm:"Calculés sur le mois précédent.",
  disc:"Avertissement",disctx:"Ces valeurs sont calculées automatiquement par l'app à partir des prix du graphique. Ce n'est pas un conseil en investissement, elles ne tiennent pas compte de ta situation et ne sont pas une invitation à acheter ou vendre. Fais toujours tes propres analyses.",
  load:"Chargement…",nodata:"Données indisponibles pour le moment.",few:"Il faut plus de bougies pour cette unité de temps.",cfd:"CFD",
  tf:{'1m':"1 minute",'5m':"5 minutes",'15m':"15 minutes",'1H':"1 heure",'4H':"4 heures",'1D':"1 jour"},
  n:{stoch:"Stochastique %K",ao:"Oscillateur Awesome",macd:"Niveau MACD",srsi:"Stochastique RSI rapide",ema:"Moyenne mobile exponentielle",sma:"Moyenne mobile simple",ich:"Ichimoku ligne de base",vwma:"Moyenne mobile pondérée par le volume",hull:"Moyenne mobile de Hull"}}
};
function tc(k){return(TCH[lang]&&TCH[lang][k]!=null)?TCH[lang][k]:TCH.it[k]}
var TNAME0={rsi:"Relative Strength Index",cci:"Commodity Channel Index",adx:"Average Directional Index",mom:"Momentum",wr:"Williams Percent Range",bbp:"Bull Bear Power",uo:"Ultimate Oscillator"};
function tname(k){const n=tc('n');return(n&&n[k])||TNAME0[k]||k}

(function(){
  const css=`
.tyic{width:44px;height:44px;flex:0 0 44px;border-radius:12px;background:var(--glasssel);display:flex;align-items:center;justify-content:center;margin-right:4px}
.tyic svg{width:30px;height:30px}
.ccprev{margin:6px 16px 4px;border-radius:16px;overflow:hidden;border:1px solid var(--glassline)}
.ccprev svg{display:block;width:100%;height:96px}
.ccsw i{display:flex!important;align-items:center;justify-content:center;background:var(--glasssel)}
.ccsw i svg{width:70%;height:70%}
.ccrow2{padding:0 18px 8px 34px;display:flex;align-items:center;gap:10px}
.ccrow2 span{font-size:13.5px;color:var(--muted);min-width:62px}
.ccrow2 b{font-size:13.5px;font-weight:600;min-width:42px;text-align:right;font-variant-numeric:tabular-nums}
.ccrng{flex:1;width:auto!important;margin:0!important;padding:0!important;height:28px;background:transparent!important;border:0!important;accent-color:var(--goldfg)}
.dthead{display:flex;align-items:center;gap:12px;padding:8px 18px 2px}
.dthead b{display:block;font-size:22px;font-weight:800;letter-spacing:-.01em}
.dthead small{display:block;font-size:14px;color:var(--fg);margin-top:2px}
.dthead em{display:block;font-style:normal;font-size:13px;color:var(--muted);margin-top:2px}
.dtprice{display:flex;align-items:baseline;flex-wrap:wrap;gap:4px 10px;padding:14px 18px 0}
.dtprice .pv{font-size:36px;font-weight:800;letter-spacing:-.02em;font-variant-numeric:tabular-nums;line-height:1}
.dtprice .pv sup{font-size:.5em;font-weight:700;vertical-align:.95em;margin-left:1px}
.dtprice .pc{font-size:17px;font-weight:700;font-variant-numeric:tabular-nums}
.dtmkt{display:flex;align-items:center;gap:7px;padding:8px 18px 2px;font-size:14.5px;font-weight:600}
.dtmkt i{width:9px;height:9px;border-radius:50%;background:#8e8e93}
.dtmkt.on{color:var(--up)}.dtmkt.on i{background:var(--up);box-shadow:0 0 0 4px rgba(34,171,148,.18)}
.dtmkt.off{color:var(--muted)}
.dtba{display:flex;gap:8px;padding:10px 18px 2px}
.dtba span{padding:5px 11px;border-radius:999px;font-size:14px;font-weight:600;font-variant-numeric:tabular-nums}
.dtba .b{background:rgba(41,98,255,.14);color:#4f7cff}.dtba .a{background:rgba(242,54,69,.13);color:#f2545f}
.dtba small{font-size:10.5px;font-weight:700;opacity:.7;margin-right:5px;letter-spacing:.04em}
.dtblk{padding:14px 18px 2px}
.dtrow{display:flex;justify-content:space-between;align-items:flex-end;gap:10px;font-size:14px;font-variant-numeric:tabular-nums}
.dtrow em{font-style:normal;color:var(--muted);font-size:13px;text-align:center;flex:1}
.dtrow span:first-child{text-align:left}.dtrow span:last-child{text-align:right}
.dtrow.top em{text-align:left}.dtrow.top em:last-child{text-align:right}
.dtbar{position:relative;height:8px;border-radius:4px;background:var(--glasssel);margin:9px 0 14px}
.dtbar i{position:absolute;top:0;bottom:0;border-radius:4px}
.dtbar s{position:absolute;top:11px;width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:8px solid var(--fg);transform:translateX(-6px);transition:left .5s}
.dtnote{display:block;width:calc(100% - 36px);margin:12px 18px 0;min-height:46px;padding:12px 14px;border-radius:14px;border:1px solid var(--line);background:var(--glasssel);color:var(--fg);font:inherit;font-size:15.5px;resize:none;box-sizing:border-box}
.dth{padding:20px 18px 8px;font-size:18px;font-weight:800}
.dtperf{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;padding:0 18px}
.dtperf div{border-radius:12px;padding:10px 4px;text-align:center}
.dtperf b{display:block;font-size:16px;font-weight:700;font-variant-numeric:tabular-nums}
.dtperf span{display:block;font-size:12.5px;color:var(--fg);opacity:.75;margin-top:2px}
.dtseas{padding:0 12px}
.dtseas svg{display:block;width:100%;height:auto}
.dtleg{display:flex;justify-content:center;gap:16px;font-size:13px;color:var(--muted);padding:6px 0 0}
.dtleg i{display:inline-block;width:9px;height:9px;border-radius:50%;margin-right:6px;vertical-align:0}
.tgau{display:flex;flex-direction:column;align-items:center;padding:4px 0 6px;color:var(--fg)}
.tgau svg{display:block}
.tgau .nd{transition:transform .9s cubic-bezier(.2,.9,.3,1.15)}
.tgau h5{margin:2px 0 0;font-size:14.5px;font-weight:700;color:var(--muted)}
.tgau h4{margin:0;font-size:23px;font-weight:800}
.tgau.sm h4{font-size:17px}.tgau.sm h5{font-size:13px}
.tcnt{display:flex;gap:2px;margin-top:10px;background:var(--glasssel);border-radius:14px;padding:7px 4px}
.tcnt div{min-width:66px;text-align:center;font-size:12.5px;color:var(--muted)}
.tcnt b{display:block;font-size:17px;color:var(--fg);margin-top:1px}
.tgau.sm .tcnt div{min-width:44px;font-size:11px}.tgau.sm .tcnt b{font-size:15px}
.tpair{display:grid;grid-template-columns:1fr 1fr;gap:4px;padding:10px 6px 0}
.ttf{display:flex;gap:6px;overflow-x:auto;padding:4px 16px 8px;scrollbar-width:none}
.ttf::-webkit-scrollbar{display:none}
.ttf button{flex:0 0 auto;width:auto;margin:0;padding:8px 14px;border-radius:12px;border:0;background:transparent;color:var(--fg);font-size:15px;font-weight:500}
.ttf button.on{background:var(--glasssel);font-weight:700}
.ttab{width:calc(100% - 36px);margin:0 18px;border-collapse:collapse;font-size:14.5px}
.ttab th{font-weight:500;color:var(--muted);text-align:right;padding:10px 0;border-bottom:1px solid var(--sep);font-size:13.5px}
.ttab th:first-child,.ttab td:first-child{text-align:left}
.ttab td{padding:11px 0;border-bottom:1px solid var(--sep);text-align:right;font-variant-numeric:tabular-nums;vertical-align:middle}
.ttab td:first-child{padding-right:10px;line-height:1.3}
.ttab td:nth-child(2){white-space:nowrap}
.ttab td:last-child{width:76px;padding-left:12px;font-weight:600;white-space:nowrap}
.ttab .sb{color:var(--up)}.ttab .ss{color:var(--down)}.ttab .sn{color:var(--muted);font-weight:500}
.tpiv2{display:flex;padding:0 0 0 18px}
.tpl{border-collapse:collapse;flex:0 0 auto;font-size:14.5px}
.tpl th{font-weight:500;color:var(--muted);text-align:left;padding:10px 14px 10px 0;border-bottom:1px solid var(--sep);font-size:13.5px;white-space:nowrap;line-height:18px}
.tpl td{padding:11px 14px 11px 0;border-bottom:1px solid var(--sep);color:var(--muted);white-space:nowrap;line-height:18px}
.tpiv{overflow-x:auto;flex:1 1 auto;min-width:0;padding:0 18px 0 0;scrollbar-width:none;-webkit-mask-image:linear-gradient(90deg,#000 calc(100% - 20px),transparent);mask-image:linear-gradient(90deg,#000 calc(100% - 20px),transparent)}
.tpiv::-webkit-scrollbar{display:none}
.tpiv table{border-collapse:collapse;font-size:14.5px;min-width:100%}
.tpiv th{font-weight:500;color:var(--muted);text-align:right;padding:10px 0 10px 18px;border-bottom:1px solid var(--sep);font-size:13.5px;white-space:nowrap}
.tpiv td{padding:11px 0 11px 18px;border-bottom:1px solid var(--sep);text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap}
.tpiv th,.tpiv td{line-height:18px}
.tpiv th:last-child,.tpiv td:last-child{padding-right:24px}
.tdisc{margin:22px 18px 6px;padding:14px 16px;border-radius:16px;background:var(--glasssel)}
.tdisc b{display:block;font-size:15px;margin-bottom:5px}
.tdisc span{font-size:13.5px;color:var(--muted);line-height:1.5}
.tload{padding:26px 18px;text-align:center;color:var(--muted);font-size:14.5px}
.tlink{display:flex;align-items:center;justify-content:center;gap:6px;width:auto;margin:8px auto 0;padding:9px 16px;border-radius:999px;border:0;background:var(--glasssel);color:var(--fg);font-size:14.5px;font-weight:600}
`;
  const s=document.createElement('style');s.textContent=css;document.head.appendChild(s);
})();

/* ---------------- colori delle candele ---------------- */
function hexA(h,o){
  h=String(h||'#000').replace('#','');if(h.length===3)h=h.split('').map(x=>x+x).join('');
  const n=parseInt(h.slice(0,6),16);
  return'rgba('+(n>>16&255)+','+(n>>8&255)+','+(n&255)+','+(o==null?1:Math.max(0,Math.min(100,o))/100)+')';
}
function ccPreset(pal){
  const keep=CS.pal;CS.pal=pal;const[U,D]=upDn();CS.pal=keep;
  return{body:{on:true,u:U,d:D,o:100},bord:{on:false,u:U,d:D,o:100},wick:{on:true,u:U,d:D,o:100}};
}
function ccRes(){
  if(CS.pal==='custom'&&CS.cc&&CS.cc.body)return CS.cc;
  return ccPreset(CS.pal==='custom'?'tv':CS.pal);
}
function ccOpts(){
  const c=ccRes(),T='rgba(0,0,0,0)';
  return{
    upColor:c.body.on?hexA(c.body.u,c.body.o):T,downColor:c.body.on?hexA(c.body.d,c.body.o):T,
    borderVisible:!!c.bord.on,borderUpColor:hexA(c.bord.u,c.bord.o),borderDownColor:hexA(c.bord.d,c.bord.o),
    wickVisible:!!c.wick.on,wickUpColor:hexA(c.wick.u,c.wick.o),wickDownColor:hexA(c.wick.d,c.wick.o)
  };
}
makeSeries=function(){
  const blue=themeVar('--blue')||'#2962ff';
  const base={lastValueVisible:false,priceLineVisible:CS.pline,priceLineStyle:1,priceLineWidth:1,priceLineColor:blue,priceFormat:{type:'price',precision:dec,minMove:Math.pow(10,-dec)}};
  if(CS.type==='bars'){const c=ccRes();return addS('Bar',Object.assign(base,{upColor:hexA(c.body.u,c.body.o),downColor:hexA(c.body.d,c.body.o),thinBars:false}))}
  if(CS.type==='line')return addS('Line',Object.assign(base,{color:blue,lineWidth:2}));
  if(CS.type==='area')return addS('Area',Object.assign(base,{lineColor:blue,topColor:'rgba(41, 98, 255, 0.35)',bottomColor:'rgba(41, 98, 255, 0.02)',lineWidth:2}));
  return addS('Candlestick',Object.assign(base,ccOpts()));
};
function ccLive(){
  if(!series)return;
  try{
    if(CS.type==='candles'||CS.type==='ha')series.applyOptions(ccOpts());
    else if(CS.type==='bars'){const c=ccRes();series.applyOptions({upColor:hexA(c.body.u,c.body.o),downColor:hexA(c.body.d,c.body.o)})}
  }catch(e){}
}
/* piccolo disegno di candele con i colori scelti (usato nelle anteprime) */
const CC_DEMO=[[50,62,44,58],[58,66,52,54],[54,57,40,44],[44,52,38,50],[50,70,48,68],[68,74,60,63],[63,65,50,52],[52,60,46,58],[58,78,56,76],[76,80,64,67],[67,71,58,70],[70,86,68,84]];
function ccSVG(c,w,h,n,bg){
  const data=CC_DEMO.slice(-n),lo=Math.min(...data.map(x=>x[2])),hi=Math.max(...data.map(x=>x[1]));
  const pad=h*0.12,Y=v=>pad+(hi-v)/(hi-lo)*(h-2*pad),step=w/n,bw=step*0.56;
  let s='<svg viewBox="0 0 '+w+' '+h+'" preserveAspectRatio="none">';
  if(bg)s+='<rect width="'+w+'" height="'+h+'" fill="'+bg+'"/>';
  data.forEach((x,i)=>{
    const[o,hh,l,cl]=x,up=cl>=o,cx=step*i+step/2,top=Y(Math.max(o,cl)),bot=Y(Math.min(o,cl));
    if(c.wick.on)s+='<line x1="'+cx.toFixed(1)+'" x2="'+cx.toFixed(1)+'" y1="'+Y(hh).toFixed(1)+'" y2="'+Y(l).toFixed(1)+'" stroke="'+hexA(up?c.wick.u:c.wick.d,c.wick.o)+'" stroke-width="'+Math.max(1,w/180).toFixed(1)+'"/>';
    s+='<rect x="'+(cx-bw/2).toFixed(1)+'" y="'+top.toFixed(1)+'" width="'+bw.toFixed(1)+'" height="'+Math.max(1,bot-top).toFixed(1)+'" fill="'+(c.body.on?hexA(up?c.body.u:c.body.d,c.body.o):'none')+'"'+(c.bord.on?' stroke="'+hexA(up?c.bord.u:c.bord.d,c.bord.o)+'" stroke-width="'+Math.max(1,w/200).toFixed(1)+'"':'')+'/>';
  });
  return s+'</svg>';
}

/* ---------------- tipologia di grafico con anteprima ---------------- */
function typeIcon(k){
  const c=ccRes(),U=c.body.u,D=c.body.d,B=themeVar('--blue')||'#2962ff';
  if(k==='candles')return'<svg viewBox="0 0 30 30"><line x1="9" y1="5" x2="9" y2="25" stroke="'+U+'" stroke-width="1.6"/><rect x="5.5" y="9" width="7" height="11" rx="1.2" fill="'+U+'"/><line x1="21" y1="4" x2="21" y2="23" stroke="'+D+'" stroke-width="1.6"/><rect x="17.5" y="7" width="7" height="11" rx="1.2" fill="'+D+'"/></svg>';
  if(k==='bars')return'<svg viewBox="0 0 30 30" stroke-width="2" stroke-linecap="round"><g stroke="'+U+'"><line x1="9" y1="6" x2="9" y2="24"/><line x1="4.5" y1="19" x2="9" y2="19"/><line x1="9" y1="10" x2="13.5" y2="10"/></g><g stroke="'+D+'"><line x1="21" y1="5" x2="21" y2="23"/><line x1="16.5" y1="9" x2="21" y2="9"/><line x1="21" y1="18" x2="25.5" y2="18"/></g></svg>';
  if(k==='line')return'<svg viewBox="0 0 30 30" fill="none" stroke="'+B+'" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21l6-7 5 4 6-9 7 5"/></svg>';
  if(k==='area')return'<svg viewBox="0 0 30 30"><defs><linearGradient id="tyg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="'+B+'" stop-opacity=".55"/><stop offset="1" stop-color="'+B+'" stop-opacity=".04"/></linearGradient></defs><path d="M3 21l6-7 5 4 6-9 7 5V27H3z" fill="url(#tyg)"/><path d="M3 21l6-7 5 4 6-9 7 5" fill="none" stroke="'+B+'" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  /* Heikin Ashi: candele morbide e tutte dello stesso colore in fila */
  return'<svg viewBox="0 0 30 30"><g fill="'+U+'"><rect x="2.5" y="15" width="6" height="8" rx="3"/><rect x="11.5" y="10" width="6" height="9" rx="3"/><rect x="20.5" y="5" width="6" height="10" rx="3"/></g><g stroke="'+U+'" stroke-width="1.4"><line x1="5.5" y1="12" x2="5.5" y2="26"/><line x1="14.5" y1="7" x2="14.5" y2="22"/><line x1="23.5" y1="3" x2="23.5" y2="18"/></g></svg>';
}
pageType=function(b){
  [['candles','t_candles'],['bars','t_bars'],['line','t_line'],['area','t_area'],['ha','t_ha']].forEach(([k,lab])=>{
    const ic=document.createElement('span');ic.className='tyic';ic.innerHTML=typeIcon(k);
    shItem(b,th(lab),{left:ic,check:CS.type===k,on:()=>{CS.type=k;saveCS();rebuildSeries();hubRender()}});
  });
};

/* ---------------- impostazioni grafico + colori candele ---------------- */
pageSet=function(b){
  sw(b,th('st_grid'),'grid');sw(b,th('st_pline'),'pline');sw(b,th('st_cd'),'cd');sw(b,th('st_wm'),'wm');
  shEl(b,'sh-l',th('st_pal'));
  const g=document.createElement('div');g.className='cvpre';b.appendChild(g);
  const tiles={};
  const mkTile=(k,label)=>{
    const t=document.createElement('button');t.className='cvsw ccsw'+(CS.pal===k?' on':'');
    t.innerHTML='<i></i><span></span>';t.lastChild.textContent=label;
    t.onclick=()=>{
      if(k==='custom'){if(CS.pal!=='custom'){CS.cc=JSON.parse(JSON.stringify(ccRes()));CS.pal='custom'}}
      else CS.pal=k;
      saveCS();rebuildSeries();hubRender();
    };
    tiles[k]=t;g.appendChild(t);
  };
  mkTile('tv',th('pal_tv'));mkTile('classic',th('pal_classic'));mkTile('mono',th('pal_mono'));mkTile('custom',tc('custom'));
  const paint=()=>{
    ['tv','classic','mono'].forEach(k=>{tiles[k].firstChild.innerHTML=ccSVG(ccPreset(k),40,40,4);tiles[k].classList.toggle('on',CS.pal===k)});
    tiles.custom.classList.toggle('on',CS.pal==='custom');
    tiles.custom.classList.toggle('cvcu',!(CS.pal==='custom'&&CS.cc));
    tiles.custom.firstChild.innerHTML=CS.pal==='custom'&&CS.cc?ccSVG(CS.cc,40,40,4):'';
    pv.innerHTML=ccSVG(ccRes(),360,96,12,cvRes().c1);
  };
  const pv=document.createElement('div');pv.className='ccprev';b.appendChild(pv);
  /* ogni modifica passa ai colori personalizzati, partendo da quelli attuali */
  const edit=fn=>{
    if(CS.pal!=='custom'||!CS.cc){CS.cc=JSON.parse(JSON.stringify(ccRes()));CS.pal='custom'}
    fn(CS.cc);saveCS();ccLive();paint();
  };
  const c=ccRes();
  [['body','body'],['bord','bord'],['wick','wick']].forEach(([k,lab])=>{
    cvRow(b,tc(lab),
      cvSwitch(c[k].on,x=>edit(cc=>{cc[k].on=x})),
      cvColor(c[k].u,x=>edit(cc=>{cc[k].u=x})),
      cvColor(c[k].d,x=>edit(cc=>{cc[k].d=x})));
    const r=document.createElement('div');r.className='ccrow2';
    const l=document.createElement('span');l.textContent=tc('opac');
    const rg=document.createElement('input');rg.type='range';rg.min=0;rg.max=100;rg.step=5;rg.value=c[k].o;rg.className='ccrng';
    const v=document.createElement('b');v.textContent=c[k].o+'%';
    rg.oninput=()=>{v.textContent=rg.value+'%';edit(cc=>{cc[k].o=+rg.value})};
    r.appendChild(l);r.appendChild(rg);r.appendChild(v);b.appendChild(r);
  });
  paint();
  shEl(b,'sh-sep','');
  shItem(b,tc('ccreset'),{danger:true,on:()=>{CS.pal='tv';delete CS.cc;saveCS();rebuildSeries();hubRender()}});
};
/* con il tema bianco/nero i colori "Bianco e grigio" cambiano: aggiorno */
restyleSeries=function(){if(series&&chart&&CS.pal==='mono')rebuildSeries()};

/* ---------------- dati: candele con volume, prezzi bid/ask ---------------- */
async function barsV(it,reso,from,to){
  const q=new URLSearchParams({routeId:it.route,from:from,to:to,resolution:reso,tradableInstrumentId:it.tid});
  const j=await authed('/trade/history?'+q);
  const list=(j.d&&j.d.barDetails)||j.barDetails||[];
  return list.map(b=>({t:+b.t,o:+b.o,h:+b.h,l:+b.l,c:+b.c,v:b.v!=null?+b.v:null})).sort((a,b)=>a.t-b.t);
}
var TCACHE={};
async function barsCached(sym,reso,from,ttl){
  const k=sym+'|'+reso,h=TCACHE[k];
  if(h&&h.exp>Date.now()&&h.from<=from)return h.bars;
  const it=BYN[sym];if(!it)return[];
  const bars=await barsV(it,reso,from,Date.now());
  TCACHE[k]={exp:Date.now()+ttl,from,bars};return bars;
}
var QNO=false;
async function bidAsk(sym){
  if(QNO)return null;
  const it=BYN[sym];if(!it)return null;
  try{
    const j=await authed('/trade/quotes?'+new URLSearchParams({routeId:it.route,tradableInstrumentId:it.tid}));
    const d=j&&(j.d||j);if(!d||d.bp==null||d.ap==null)return null;
    return{b:+d.bp,a:+d.ap};
  }catch(e){if(e&&(e.status===404||e.status===400))QNO=true;return null}
}

/* ---------------- calcoli tecnici ---------------- */
const TA={
  sma(a,n){const o=new Array(a.length).fill(null);let s=0,k=0;for(let i=0;i<a.length;i++){const v=a[i];if(v==null){s=0;k=0;continue}s+=v;k++;if(k>n){s-=a[i-n];k=n}if(k===n)o[i]=s/n}return o},
  ema(a,n){const o=new Array(a.length).fill(null),m=2/(n+1);let e=null,k=0,s=0;for(let i=0;i<a.length;i++){const v=a[i];if(v==null)continue;if(e==null){s+=v;k++;if(k===n){e=s/n;o[i]=e}}else{e=v*m+e*(1-m);o[i]=e}}return o},
  wma(a,n){const o=new Array(a.length).fill(null),d=n*(n+1)/2;for(let i=n-1;i<a.length;i++){let s=0,ok=true;for(let j=0;j<n;j++){const v=a[i-n+1+j];if(v==null){ok=false;break}s+=v*(j+1)}if(ok)o[i]=s/d}return o},
  rsi(a,n){const o=new Array(a.length).fill(null);if(a.length<=n)return o;let g=0,l=0;for(let i=1;i<=n;i++){const d=a[i]-a[i-1];if(d>0)g+=d;else l-=d}g/=n;l/=n;o[n]=l===0?100:100-100/(1+g/l);for(let i=n+1;i<a.length;i++){const d=a[i]-a[i-1];g=(g*(n-1)+Math.max(d,0))/n;l=(l*(n-1)+Math.max(-d,0))/n;o[i]=l===0?100:100-100/(1+g/l)}return o},
  hh(a,i,n){let m=-Infinity;for(let j=i-n+1;j<=i;j++)m=Math.max(m,a[j]);return m},
  ll(a,i,n){let m=Infinity;for(let j=i-n+1;j<=i;j++)m=Math.min(m,a[j]);return m}
};
function lastTwo(a){let i=a.length-1;while(i>=0&&a[i]==null)i--;return[a[i],i>0?a[i-1]:null]}
function techCalc(B){
  if(!B||B.length<35)return null;
  const C=B.map(b=>b.c),H=B.map(b=>b.h),L=B.map(b=>b.l),N=B.length,last=C[N-1];
  const osc=[],ma=[];
  const add=(arr,k,p,val,sig)=>{if(val!=null&&isFinite(val))arr.push({k,p,val,sig})};
  /* RSI 14 */
  {const[r,rp]=lastTwo(TA.rsi(C,14));add(osc,'rsi','14',r,r<30&&r>rp?1:r>70&&r<rp?-1:0)}
  /* Stocastico 14,3,3 */
  {const raw=C.map((c,i)=>i<13?null:(()=>{const hh=TA.hh(H,i,14),ll=TA.ll(L,i,14);return hh===ll?50:(c-ll)/(hh-ll)*100})());
   const K=TA.sma(raw,3),D=TA.sma(K,3),k=K[N-1],d=D[N-1];add(osc,'stoch','14, 3, 3',k,k<20&&k>d?1:k>80&&k<d?-1:0)}
  /* CCI 20 */
  {const tp=B.map(b=>(b.h+b.l+b.c)/3),cci=i=>{const w=tp.slice(i-19,i+1),m=w.reduce((s,v)=>s+v,0)/20,md=w.reduce((s,v)=>s+Math.abs(v-m),0)/20;return md?(tp[i]-m)/(0.015*md):0};
   const v=cci(N-1),vp=cci(N-2);add(osc,'cci','20',v,v<-100&&v>vp?1:v>100&&v<vp?-1:0)}
  /* ADX 14 */
  if(N>40){const n=14;let tr=0,pd=0,md=0,adx=null,dxs=[];const adxA=[];let pdi=0,mdi=0;
    for(let i=1;i<N;i++){
      const up=H[i]-H[i-1],dn=L[i-1]-L[i],t=Math.max(H[i]-L[i],Math.abs(H[i]-C[i-1]),Math.abs(L[i]-C[i-1]));
      const p=up>dn&&up>0?up:0,m=dn>up&&dn>0?dn:0;
      if(i<=n){tr+=t;pd+=p;md+=m;if(i<n)continue}else{tr=tr-tr/n+t;pd=pd-pd/n+p;md=md-md/n+m}
      pdi=tr?100*pd/tr:0;mdi=tr?100*md/tr:0;const dx=pdi+mdi?100*Math.abs(pdi-mdi)/(pdi+mdi):0;
      if(adx==null){dxs.push(dx);if(dxs.length===n)adx=dxs.reduce((s,v)=>s+v,0)/n}else adx=(adx*(n-1)+dx)/n;
      adxA.push(adx);
    }
    const a=adxA[adxA.length-1],ap=adxA[adxA.length-2];
    add(osc,'adx','14',a,a>20&&pdi>mdi&&a>ap?1:a>20&&mdi>pdi&&a>ap?-1:0);
  }
  /* Awesome */
  {const med=B.map(b=>(b.h+b.l)/2),s5=TA.sma(med,5),s34=TA.sma(med,34),ao=s5.map((v,i)=>v!=null&&s34[i]!=null?v-s34[i]:null);const[v,vp]=lastTwo(ao);add(osc,'ao','',v,v>0&&v>vp?1:v<0&&v<vp?-1:0)}
  /* Momentum 10 */
  {const v=last-C[N-11],vp=C[N-2]-C[N-12];add(osc,'mom','10',v,v>vp?1:v<vp?-1:0)}
  /* MACD 12 26 */
  {const e12=TA.ema(C,12),e26=TA.ema(C,26),m=e12.map((v,i)=>v!=null&&e26[i]!=null?v-e26[i]:null),s=TA.ema(m,9),mv=m[N-1],sv=s[N-1];add(osc,'macd','12, 26',mv,sv==null?0:mv>sv?1:-1)}
  /* Stoch RSI 3,3,14,14 */
  {const R=TA.rsi(C,14),raw=R.map((r,i)=>{if(r==null||i<27)return null;let hh=-Infinity,ll=Infinity;for(let j=i-13;j<=i;j++){if(R[j]==null)return null;hh=Math.max(hh,R[j]);ll=Math.min(ll,R[j])}return hh===ll?50:(r-ll)/(hh-ll)*100});
   const K=TA.sma(raw,3),D=TA.sma(K,3),k=K[N-1],d=D[N-1];add(osc,'srsi','3, 3, 14, 14',k,k<20&&k>d?1:k>80&&k<d?-1:0)}
  /* Williams %R 14 */
  {const w=i=>{const hh=TA.hh(H,i,14),ll=TA.ll(L,i,14);return hh===ll?-50:(hh-C[i])/(hh-ll)*-100};const v=w(N-1),vp=w(N-2);add(osc,'wr','14',v,v<-80&&v>vp?1:v>-20&&v<vp?-1:0)}
  /* Bull Bear Power */
  {const e=TA.ema(C,13),i=N-1,bull=H[i]-e[i],bear=L[i]-e[i],bullp=H[i-1]-e[i-1],bearp=L[i-1]-e[i-1],upT=e[i]>e[i-1];
   add(osc,'bbp','',bull+bear,upT&&bear<0&&bear>bearp?1:!upT&&bull>0&&bull<bullp?-1:0)}
  /* Ultimate Oscillator 7,14,28 */
  if(N>30){const bp=[],tr=[];for(let i=1;i<N;i++){const lo=Math.min(L[i],C[i-1]),hi=Math.max(H[i],C[i-1]);bp.push(C[i]-lo);tr.push(hi-lo)}
    const av=n=>{let a=0,b2=0;for(let j=bp.length-n;j<bp.length;j++){a+=bp[j];b2+=tr[j]}return b2?a/b2:0};
    const u=100*(4*av(7)+2*av(14)+av(28))/7;add(osc,'uo','7, 14, 28',u,u>70?1:u<30?-1:0)}
  /* medie mobili */
  [10,20,30,50,100,200].forEach(n=>{
    if(N<n)return;
    const e=TA.ema(C,n)[N-1],s=TA.sma(C,n)[N-1];
    add(ma,'ema',String(n),e,e<last?1:e>last?-1:0);
    add(ma,'sma',String(n),s,s<last?1:s>last?-1:0);
  });
  if(N>=52){const base=(TA.hh(H,N-1,26)+TA.ll(L,N-1,26))/2,conv=(TA.hh(H,N-1,9)+TA.ll(L,N-1,9))/2;add(ma,'ich','9, 26, 52, 26',base,last>base&&conv>base?1:last<base&&conv<base?-1:0)}
  if(B.slice(-20).every(b=>b.v!=null&&b.v>0)){let pv=0,vv=0;B.slice(-20).forEach(b=>{pv+=b.c*b.v;vv+=b.v});const v=pv/vv;add(ma,'vwma','20',v,v<last?1:v>last?-1:0)}
  {const w4=TA.wma(C,4),w9=TA.wma(C,9),d=w4.map((v,i)=>v!=null&&w9[i]!=null?2*v-w9[i]:null),h=TA.wma(d,3)[N-1];add(ma,'hull','9',h,h<last?1:h>last?-1:0)}
  const cnt=a=>{const buy=a.filter(x=>x.sig>0).length,sell=a.filter(x=>x.sig<0).length,score=a.length?(buy-sell)/a.length:0;
    return{buy,sell,neu:a.length-buy-sell,score,verdict:score>0.5?'sbuy':score>0.1?'buy':score<-0.5?'ssell':score<-0.1?'sell':'neu'}};
  return{osc,ma,o:cnt(osc),m:cnt(ma),s:cnt(osc.concat(ma))};
}
/* pivot dal periodo precedente (giorno, settimana o mese) */
function pivotsFrom(D,per){
  if(!D||D.length<3)return null;
  const key=t=>{const d=new Date(t);if(per==='d')return d.toISOString().slice(0,10);if(per==='m')return d.getUTCFullYear()+'-'+d.getUTCMonth();
    const x=new Date(Date.UTC(d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate()));x.setUTCDate(x.getUTCDate()-((x.getUTCDay()+6)%7));return x.toISOString().slice(0,10)};
  const groups=[];D.forEach(b=>{const k=key(b.t),g=groups[groups.length-1];if(g&&g.k===k){g.h=Math.max(g.h,b.h);g.l=Math.min(g.l,b.l);g.c=b.c}else groups.push({k,o:b.o,h:b.h,l:b.l,c:b.c})});
  if(groups.length<2)return null;
  const{o:O,h:Hh,l:Ll,c:Cc}=groups[groups.length-2],R=Hh-Ll,P=(Hh+Ll+Cc)/3;
  const W=(Hh+Ll+2*Cc)/4,X=Cc<O?Hh+2*Ll+Cc:Cc>O?2*Hh+Ll+Cc:Hh+Ll+2*Cc;
  return{
    classic:[Hh+2*(P-Ll),P+R,2*P-Ll,P,2*P-Hh,P-R,Ll-2*(Hh-P)],
    fib:[P+R,P+0.618*R,P+0.382*R,P,P-0.382*R,P-0.618*R,P-R],
    cam:[Cc+1.1*R/4,Cc+1.1*R/6,Cc+1.1*R/12,P,Cc-1.1*R/12,Cc-1.1*R/6,Cc-1.1*R/4],
    wood:[Hh+2*(W-Ll),W+R,2*W-Ll,W,2*W-Hh,W-R,Ll-2*(Hh-W)],
    dm:[null,null,X/2-Ll,X/4,X/2-Hh,null,null]
  };
}

/* ---------------- tachimetro ---------------- */
function tGauge(r,title,small){
  const w=small?150:240,h=small?92:142,cx=w/2,cy=h-(small?10:14),R=small?62:100,sw=small?8:12;
  const cols=['#b4232f','#f23645','#9a9aa0','#22ab94','#0f7f6c'];
  const pt=a=>[cx+R*Math.cos(a),cy-R*Math.sin(a)];
  let s='<svg viewBox="0 0 '+w+' '+h+'" width="'+w+'" height="'+h+'">';
  for(let i=0;i<5;i++){
    const a0=Math.PI-i*Math.PI/5-0.07,a1=Math.PI-(i+1)*Math.PI/5+0.07,[x0,y0]=pt(a0),[x1,y1]=pt(a1);
    s+='<path d="M'+x0.toFixed(1)+' '+y0.toFixed(1)+' A'+R+' '+R+' 0 0 1 '+x1.toFixed(1)+' '+y1.toFixed(1)+'" stroke="'+cols[i]+'" stroke-width="'+sw+'" stroke-linecap="round" fill="none"/>';
  }
  const nl=R-(small?14:22);
  s+='<g class="nd" style="transform-origin:'+cx+'px '+cy+'px;transform:rotate(-90deg)"><path d="M'+(cx-(small?3:4.5))+' '+cy+' L'+cx+' '+(cy-nl)+' L'+(cx+(small?3:4.5))+' '+cy+' Z" fill="currentColor"/></g>';
  s+='<circle cx="'+cx+'" cy="'+cy+'" r="'+(small?5:7.5)+'" fill="currentColor"/></svg>';
  const d=document.createElement('div');d.className='tgau'+(small?' sm':'');
  d.innerHTML=s+'<h5></h5><h4></h4><div class="tcnt"><div><span></span><b></b></div><div><span></span><b></b></div><div><span></span><b></b></div></div>';
  d.querySelector('h5').textContent=title||'';if(!title)d.querySelector('h5').remove();
  const v=d.querySelector('h4');v.textContent=tc(r.verdict);v.className=r.score>0.1?'up':r.score<-0.1?'down':'';
  const cs=d.querySelectorAll('.tcnt div');
  [[tc('sell'),r.sell],[tc('neu'),r.neu],[tc('buy'),r.buy]].forEach(([l,n],i)=>{cs[i].firstChild.textContent=l;cs[i].lastChild.textContent=n});
  const deg=Math.max(-1,Math.min(1,r.score))*90;
  requestAnimationFrame(()=>requestAnimationFrame(()=>{const n=d.querySelector('.nd');if(n)n.style.transform='rotate('+deg.toFixed(1)+'deg)'}));
  return d;
}
function tTable(b,rows,dp){
  const t=document.createElement('table');t.className='ttab';
  t.innerHTML='<thead><tr><th></th><th></th><th></th></tr></thead><tbody></tbody>';
  const th0=t.querySelectorAll('th');th0[0].textContent=tc('name');th0[1].textContent=tc('value');th0[2].textContent=tc('action');
  const tb=t.querySelector('tbody');
  rows.forEach(x=>{
    const tr=document.createElement('tr');tr.innerHTML='<td></td><td></td><td></td>';
    tr.children[0].textContent=tname(x.k)+(x.p?' ('+x.p+')':'');
    tr.children[1].textContent=fmt(x.val,dp);
    tr.children[2].textContent=tc(x.sig>0?'buy':x.sig<0?'sell':'neu');tr.children[2].className=x.sig>0?'sb':x.sig<0?'ss':'sn';
    tb.appendChild(tr);
  });
  b.appendChild(t);
}
function tHead(b,txt){const h=document.createElement('div');h.className='dth';h.textContent=txt;b.appendChild(h);return h}
function tDisc(b){const d=document.createElement('div');d.className='tdisc';d.innerHTML='<b></b><span></span>';d.firstChild.textContent=tc('disc');d.lastChild.textContent=tc('disctx');b.appendChild(d)}

/* ---------------- pagina Tecnici ---------------- */
var TE_TF=null;
pageTech=function(b){
  const sym=cur,it=BYN[sym];if(!it)return;
  if(!TE_TF||!SECS[TE_TF])TE_TF=res;
  const bar=document.createElement('div');bar.className='ttf';b.appendChild(bar);
  Object.keys(SECS).forEach(k=>{
    const x=document.createElement('button');x.textContent=tc('tf')[k]||k;x.className=k===TE_TF?'on':'';
    x.onclick=()=>{TE_TF=k;bar.querySelectorAll('button').forEach(y=>y.classList.toggle('on',y===x));run()};
    bar.appendChild(x);
  });
  const box=document.createElement('div');b.appendChild(box);
  requestAnimationFrame(()=>{const on=bar.querySelector('.on');if(on)bar.scrollLeft=on.offsetLeft-16});
  let seq=0;
  const run=async()=>{
    const my=++seq,tf=TE_TF;
    box.innerHTML='';shEl(box,'tload',tc('load'));
    try{
      const B=await barsCached(sym,tf,Date.now()-DAYS[tf]*864e5,15000);
      const D=await barsCached(sym,'1D',Date.now()-400*864e5,600000);
      if(my!==seq||!box.isConnected)return;
      box.innerHTML='';
      const r=techCalc(B);
      if(!r){shEl(box,'tload',tc('few'));return}
      box.appendChild(tGauge(r.s,tc('sum')));
      const pair=document.createElement('div');pair.className='tpair';
      pair.appendChild(tGauge(r.o,tc('osc'),true));pair.appendChild(tGauge(r.m,tc('ma'),true));box.appendChild(pair);
      const q=QUOTE[sym],pd=q?q.dec:dec;
      tHead(box,tc('osc'));tTable(box,r.osc,3);
      tHead(box,tc('ma'));tTable(box,r.ma,Math.max(pd,2));
      const per=tf==='1D'?'m':(tf==='1H'||tf==='4H')?'w':'d',P=pivotsFrom(D,per);
      if(P){
        tHead(box,tc('piv'));
        /* colonna dei nomi ferma a sinistra, i valori scorrono di lato */
        const wrap=document.createElement('div');wrap.className='tpiv2';
        const LBL=['R3','R2','R1','P','S1','S2','S3'];
        const lt=document.createElement('table');lt.className='tpl';
        lt.innerHTML='<thead><tr><th>'+esc(tc('piv'))+'</th></tr></thead><tbody>'+LBL.map(l=>'<tr><td>'+l+'</td></tr>').join('')+'</tbody>';
        const sc=document.createElement('div');sc.className='tpiv';
        const tb=document.createElement('table');
        const cols=[['classic','Classic'],['fib','Fibonacci'],['cam','Camarilla'],['wood','Woodie'],['dm','DM']];
        let h='<thead><tr>'+cols.map(c=>'<th>'+c[1]+'</th>').join('')+'</tr></thead><tbody>';
        LBL.forEach((lab,i)=>{h+='<tr>'+cols.map(c=>'<td>'+(P[c[0]][i]==null?'—':esc(fmt(P[c[0]][i],pd)))+'</td>').join('')+'</tr>'});
        tb.innerHTML=h+'</tbody>';sc.appendChild(tb);wrap.appendChild(lt);wrap.appendChild(sc);box.appendChild(wrap);
        shEl(box,'sh-note',tc(per==='d'?'pd':per==='w'?'pw':'pm'));
      }
      tDisc(box);
    }catch(e){if(my===seq&&box.isConnected){box.innerHTML='';shEl(box,'tload',tc('nodata'))}}
  };
  run();
};

/* ---------------- pagina Dettagli simbolo ---------------- */
function bigPrice(el,v,d){
  const s=fmt(v,d);el.textContent='';
  if(d>=3){el.appendChild(document.createTextNode(s.slice(0,-1)));const sp=document.createElement('sup');sp.textContent=s.slice(-1);el.appendChild(sp)}
  else el.textContent=s;
}
function rangeBlock(b,lo,hi,val,label,col,dp){
  const blk=document.createElement('div');blk.className='dtblk';
  const row=document.createElement('div');row.className='dtrow';
  row.innerHTML='<span></span><em></em><span></span>';row.children[0].textContent=fmt(lo,dp);row.children[1].textContent=label;row.children[2].textContent=fmt(hi,dp);
  const bar=document.createElement('div');bar.className='dtbar';
  const f=document.createElement('i'),m=document.createElement('s');
  const p=hi>lo?Math.max(0,Math.min(1,(val-lo)/(hi-lo))):0.5;
  f.style.left='0';f.style.width=(p*100).toFixed(1)+'%';f.style.background=col;m.style.left=(p*100).toFixed(1)+'%';
  bar.appendChild(f);bar.appendChild(m);blk.appendChild(row);blk.appendChild(bar);b.appendChild(blk);
  return{set(v){const q=hi>lo?Math.max(0,Math.min(1,(v-lo)/(hi-lo))):0.5;f.style.width=(q*100).toFixed(1)+'%';m.style.left=(q*100).toFixed(1)+'%'}};
}
function seasonSVG(D){
  const now=new Date(),Y=now.getFullYear(),years=[Y,Y-1,Y-2],cols=['#3b82f6','#22c55e','#f59e0b'];
  const W=360,H=170,pl=6,pr=6,pt=10,pb=26;
  const lines=[];let mn=0,mx=0;
  years.forEach((y,yi)=>{
    const s=Date.UTC(y,0,1),e=Date.UTC(y+1,0,1);
    const prev=D.filter(b=>b.t<s).pop(),inY=D.filter(b=>b.t>=s&&b.t<e);
    if(!inY.length)return;
    const base=prev?prev.c:inY[0].o;
    const pts=inY.map(b=>{const doy=(b.t-s)/864e5,p=(b.c/base-1)*100;mn=Math.min(mn,p);mx=Math.max(mx,p);return[doy,p]});
    lines.push({y,col:cols[yi],pts,w:yi===0?2.4:1.6});
  });
  if(!lines.length)return null;
  const pad=(mx-mn)*0.08||1;mn-=pad;mx+=pad;
  const X=d=>pl+d/366*(W-pl-pr),Yp=p=>pt+(mx-p)/(mx-mn)*(H-pt-pb);
  let s='<svg viewBox="0 0 '+W+' '+H+'">';
  const mon=new Intl.DateTimeFormat(LOC[lang]||'it-IT',{month:'short'});
  [0,3,6,9].forEach(m=>{const d=(Date.UTC(Y,m,1)-Date.UTC(Y,0,1))/864e5,x=X(d);
    if(m)s+='<line x1="'+x.toFixed(1)+'" x2="'+x.toFixed(1)+'" y1="'+pt+'" y2="'+(H-pb)+'" stroke="var(--muted)" stroke-opacity=".35" stroke-dasharray="3 4"/>';
    s+='<text x="'+(x+(m?4:0)).toFixed(1)+'" y="'+(H-8)+'" font-size="11.5" fill="var(--muted)">'+esc(mon.format(new Date(Y,m,15)).replace('.',''))+'</text>'});
  s+='<line x1="'+pl+'" x2="'+(W-pr)+'" y1="'+Yp(0).toFixed(1)+'" y2="'+Yp(0).toFixed(1)+'" stroke="var(--muted)" stroke-opacity=".5"/>';
  lines.slice().reverse().forEach(l=>{
    s+='<polyline fill="none" stroke="'+l.col+'" stroke-width="'+l.w+'" stroke-linejoin="round" points="'+l.pts.map(p=>X(p[0]).toFixed(1)+','+Yp(p[1]).toFixed(1)).join(' ')+'"/>';
    if(l.y===Y){const p=l.pts[l.pts.length-1];s+='<circle cx="'+X(p[0]).toFixed(1)+'" cy="'+Yp(p[1]).toFixed(1)+'" r="4" fill="'+l.col+'"/>'}
  });
  s+='</svg><div class="dtleg">'+lines.map(l=>'<span><i style="background:'+l.col+'"></i>'+l.y+'</span>').join('')+'</div>';
  return s;
}
pageDet=function(b){
  const sym=cur,it=BYN[sym];if(!it)return;
  const inf=info(it),q=QUOTE[sym],dp=q?q.dec:dec;
  const head=document.createElement('div');head.className='dthead';
  head.appendChild(iconEl(it,46));
  const hx=document.createElement('div');hx.innerHTML='<b></b><small></small><em></em>';
  hx.children[0].textContent=sym;hx.children[1].textContent=inf.desc||'';hx.children[2].textContent=t('cat_'+inf.cat)+' · '+tc('cfd');
  head.appendChild(hx);b.appendChild(head);

  const pr=document.createElement('div');pr.className='dtprice';
  const pv=document.createElement('span');pv.className='pv';const pc=document.createElement('span');pc.className='pc';
  pr.appendChild(pv);pr.appendChild(pc);b.appendChild(pr);
  const mkr=document.createElement('div');mkr.className='dtmkt';mkr.innerHTML='<i></i><span></span>';b.appendChild(mkr);
  const ba=document.createElement('div');ba.className='dtba';ba.hidden=true;
  ba.innerHTML='<span class="b"><small>BID</small><em></em></span><span class="a"><small>ASK</small><em></em></span>';
  ba.querySelectorAll('em').forEach(e=>e.style.fontStyle='normal');b.appendChild(ba);

  const lastPx=()=>{const Q=QUOTE[sym];return sym===cur&&lastBars.length?lastBars[lastBars.length-1].c:(Q?Q.last:null)};
  const paint=()=>{
    const v=lastPx(),Q=QUOTE[sym];if(v==null)return;
    bigPrice(pv,v,dp);
    if(Q&&Q.prev){const dv=v-Q.prev;pc.textContent=fmtSigned(dv,dp)+'   '+fmtSigned(dv/Q.prev*100,2)+'%';pv.className='pv '+(dv>0?'up':dv<0?'down':'');pc.className='pc '+(dv>0?'up':dv<0?'down':'')}
    const o=mktOpen(sym);mkr.className='dtmkt '+(o?'on':'off');mkr.lastChild.textContent=mk(o?'open':'closed');
  };
  paint();

  const rest=document.createElement('div');b.appendChild(rest);
  shEl(rest,'tload',tc('load'));
  let dr=null,n=0;
  const tmr=setInterval(async()=>{
    if(!pr.isConnected){clearInterval(tmr);return}
    paint();const v=lastPx();if(dr&&v!=null)dr.set(v);
    if(n++%3===0){const x=await bidAsk(sym);if(x&&pr.isConnected){ba.hidden=false;const e=ba.querySelectorAll('em');e[0].textContent=fmt(x.b,dp);e[1].textContent=fmt(x.a,dp)}}
  },1000);

  const y0=Date.UTC(new Date().getFullYear()-2,0,1)-10*864e5;
  barsCached(sym,'1D',y0,600000).then(D=>{
    if(!rest.isConnected)return;rest.innerHTML='';
    if(!D.length){shEl(rest,'tload',tc('nodata'));return}
    const L=D[D.length-1],v=lastPx()||L.c,now=Date.now();
    /* volume */
    const vols=D.slice(-31,-1).map(x=>x.v).filter(x=>x!=null&&x>0);
    if(L.v>0&&vols.length>5){
      const avg=vols.reduce((s,x)=>s+x,0)/vols.length,blk=document.createElement('div');blk.className='dtblk';
      const kfmt=x=>x>=1e6?fmt(x/1e6,2)+' M':x>=1e3?fmt(x/1e3,2)+' K':fmt(x,0);
      blk.innerHTML='<div class="dtrow top"><em></em><em></em></div><div class="dtrow"><span></span><span></span></div><div class="dtbar"><i></i><i></i></div>';
      const em=blk.querySelectorAll('em');em[0].textContent=tc('vol');em[1].textContent=tc('vol30');
      const sp=blk.querySelectorAll('.dtrow span');sp[0].textContent=kfmt(L.v);sp[1].textContent=kfmt(avg);
      const p=Math.min(1,L.v/(L.v+avg)),is=blk.querySelectorAll('.dtbar i');
      is[0].style.cssText='left:0;width:calc('+(p*100).toFixed(1)+'% - 2px);background:#3b82f6';
      is[1].style.cssText='right:0;width:'+((1-p)*100).toFixed(1)+'%;background:#06b6d4';
      rest.appendChild(blk);
    }
    /* range del giorno e di 52 settimane */
    dr=rangeBlock(rest,Math.min(L.l,v),Math.max(L.h,v),v,tc('dr'),'linear-gradient(90deg,rgba(34,171,148,.35),var(--up))',dp);
    const Y1=D.filter(x=>x.t>=now-365*864e5);
    rangeBlock(rest,Math.min(...Y1.map(x=>x.l)),Math.max(...Y1.map(x=>x.h)),v,tc('wr'),'linear-gradient(90deg,rgba(59,130,246,.3),#3b82f6)',dp);
    /* nota personale */
    const nt=document.createElement('textarea');nt.className='dtnote';nt.rows=1;nt.placeholder='✎  '+tc('note');
    nt.value=lsGet('tc_note_'+sym,'');
    const fit=()=>{nt.style.height='auto';nt.style.height=Math.max(46,nt.scrollHeight)+'px'};
    nt.oninput=()=>{lsSet('tc_note_'+sym,nt.value);fit()};
    nt.onfocus=()=>{nt.placeholder=tc('noteph')};nt.onblur=()=>{nt.placeholder='✎  '+tc('note')};
    rest.appendChild(nt);setTimeout(fit,0);
    /* performance */
    tHead(rest,tc('perf'));
    const pg=document.createElement('div');pg.className='dtperf';
    const at=ms=>{let r=null;for(const x of D){if(x.t<=ms)r=x;else break}return r};
    const ys=Date.UTC(new Date().getFullYear(),0,1);
    [['1W',7],['1M',30.4],['3M',91.3],['6M',182.6],['YTD',null],['1Y',365]].forEach(([lab,days])=>{
      const ref=days==null?D.filter(x=>x.t<ys).pop():at(now-days*864e5);
      const c=document.createElement('div');c.innerHTML='<b></b><span></span>';c.lastChild.textContent=lab;
      if(ref&&ref.c){
        const p=(v/ref.c-1)*100,a=Math.min(.34,.07+Math.abs(p)/40);
        c.firstChild.textContent=fmtSigned(p,2)+'%';c.firstChild.className=p>0?'up':p<0?'down':'';
        c.style.background=p>=0?'rgba(34,171,148,'+a+')':'rgba(242,54,69,'+a+')';
      }else{c.firstChild.textContent='—';c.style.background='var(--glasssel)'}
      pg.appendChild(c);
    });
    rest.appendChild(pg);
    /* stagionalita' */
    const ss=seasonSVG(D);
    if(ss){tHead(rest,tc('seas'));const w=document.createElement('div');w.className='dtseas';w.innerHTML=ss;rest.appendChild(w)}
    /* tecnici sul giornaliero */
    const r=techCalc(D);
    if(r){
      tHead(rest,tc('tech')+' · '+(tc('tf')['1D']));
      rest.appendChild(tGauge(r.s,''));
      const go=document.createElement('button');go.className='tlink';go.textContent=tc('techall')+' ›';
      go.onclick=()=>{TE_TF='1D';hubPage(th('a_tech'),pageTech)};rest.appendChild(go);
    }
    tDisc(rest);
  }).catch(()=>{if(rest.isConnected){rest.innerHTML='';shEl(rest,'tload',tc('nodata'))}});
};

/* =====================================================================
   0.35.0 — ALERT: gestione (attivi / non attivi), "+" sul mirino,
   linea orizzontale, notifica sul telefono anche ad app chiusa
   ===================================================================== */
var ALT={
 it:{alpush:"Notifiche degli alert",alpushsub:"Quando il prezzo tocca un alert, anche ad app chiusa",alneed:"Attiva prima le notifiche qui sopra.",delt:"Eliminare questo alert?",deltx:"L'alert «{n}» verrà eliminato definitivamente.",act:"Attivi",inact:"Non attivi",none:"Nessun alert attivo.",noin:"Nessun alert non attivo.",fired:"Scattato",stopped:"Annullato",stop:"Annulla",re:"Riattiva",delin:"Elimina tutti i non attivi",delinq:"Eliminare definitivamente tutti gli alert non attivi?",delq:"Eliminare definitivamente questo alert?",
  above:"Sopra",below:"Sotto",created:"Creato",tip:"Più veloce: tieni premuto sul grafico e tocca il + accanto al prezzo.",push:"Notifica sul telefono",pushsub:"Arriva anche con l'app chiusa",pushoff:"Per ricevere gli alert ad app chiusa attiva le notifiche: tocca l'interruttore.",
  addat:"Aggiungi alert su {s} a {p}",hline:"Disegna una linea orizzontale a {p}",copy:"Copia il prezzo {p}",copied:"Prezzo copiato.",made:"Alert creato: {s} {d} {p}",d_hline:"Linea orizzontale"},
 es:{alpush:"Notificaciones de alertas",alpushsub:"Cuando el precio toca una alerta, incluso con la app cerrada",alneed:"Activa antes las notificaciones aquí arriba.",delt:"¿Eliminar esta alerta?",deltx:"La alerta «{n}» se eliminará definitivamente.",act:"Activas",inact:"Inactivas",none:"Ninguna alerta activa.",noin:"Ninguna alerta inactiva.",fired:"Activada",stopped:"Cancelada",stop:"Cancelar",re:"Reactivar",delin:"Eliminar todas las inactivas",delinq:"¿Eliminar definitivamente todas las alertas inactivas?",delq:"¿Eliminar definitivamente esta alerta?",
  above:"Por encima",below:"Por debajo",created:"Creada",tip:"Más rápido: mantén pulsado el gráfico y toca el + junto al precio.",push:"Aviso en el teléfono",pushsub:"Llega también con la app cerrada",pushoff:"Para recibir las alertas con la app cerrada activa las notificaciones: toca el interruptor.",
  addat:"Añadir alerta en {s} a {p}",hline:"Dibujar una línea horizontal a {p}",copy:"Copiar el precio {p}",copied:"Precio copiado.",made:"Alerta creada: {s} {d} {p}",d_hline:"Línea horizontal"},
 en:{alpush:"Alert notifications",alpushsub:"When price touches an alert, even with the app closed",alneed:"Turn on notifications above first.",delt:"Delete this alert?",deltx:"The alert “{n}” will be permanently deleted.",act:"Active",inact:"Inactive",none:"No active alerts.",noin:"No inactive alerts.",fired:"Triggered",stopped:"Cancelled",stop:"Cancel",re:"Restart",delin:"Delete all inactive",delinq:"Permanently delete all inactive alerts?",delq:"Permanently delete this alert?",
  above:"Above",below:"Below",created:"Created",tip:"Faster: press and hold on the chart and tap the + next to the price.",push:"Phone notification",pushsub:"Arrives even when the app is closed",pushoff:"To get alerts with the app closed, turn on notifications: tap the switch.",
  addat:"Add alert on {s} at {p}",hline:"Draw a horizontal line at {p}",copy:"Copy price {p}",copied:"Price copied.",made:"Alert created: {s} {d} {p}",d_hline:"Horizontal line"},
 fr:{alpush:"Notifications des alertes",alpushsub:"Quand le prix touche une alerte, même app fermée",alneed:"Active d'abord les notifications ci-dessus.",delt:"Supprimer cette alerte ?",deltx:"L'alerte « {n} » sera supprimée définitivement.",act:"Actives",inact:"Inactives",none:"Aucune alerte active.",noin:"Aucune alerte inactive.",fired:"Déclenchée",stopped:"Annulée",stop:"Annuler",re:"Réactiver",delin:"Supprimer toutes les inactives",delinq:"Supprimer définitivement toutes les alertes inactives ?",delq:"Supprimer définitivement cette alerte ?",
  above:"Au-dessus",below:"En dessous",created:"Créée",tip:"Plus rapide : appuie longuement sur le graphique et touche le + à côté du prix.",push:"Notification sur le téléphone",pushsub:"Arrive même app fermée",pushoff:"Pour recevoir les alertes app fermée, active les notifications : touche l'interrupteur.",
  addat:"Ajouter une alerte sur {s} à {p}",hline:"Tracer une ligne horizontale à {p}",copy:"Copier le prix {p}",copied:"Prix copié.",made:"Alerte créée : {s} {d} {p}",d_hline:"Ligne horizontale"}
};
function alt(k,o){let s=(ALT[lang]&&ALT[lang][k])||ALT.it[k]||k;if(o)Object.keys(o).forEach(x=>{s=s.split('{'+x+'}').join(o[x])});return s}
['it','es','en','fr'].forEach(L=>{if(T[L])T[L].d_hline=ALT[L].d_hline});

(function(){
  const css=`
#xhplus{position:absolute;z-index:6;width:30px;height:30px;margin:0;padding:0;border-radius:50%;border:1.5px solid var(--fg);background:var(--glass2);color:var(--fg);display:flex;align-items:center;justify-content:center;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);box-shadow:0 2px 10px rgba(0,0,0,.3)}
#xhplus[hidden]{display:none}
#xhplus svg{width:18px;height:18px}
#xhplus:active{transform:scale(.9)}
.alrow{display:flex;align-items:center;gap:12px;padding:10px 14px 10px 18px;border-bottom:1px solid var(--sep)}
.alrow .altx{flex:1;min-width:0}
.alrow b{display:block;font-size:15.5px}
.alrow small{display:block;font-size:13px;color:var(--muted);margin-top:2px;font-variant-numeric:tabular-nums}
.alrow .alp{font-size:14.5px;font-weight:600;margin-top:2px;font-variant-numeric:tabular-nums}
.alrow .albt{width:34px;height:34px;flex:0 0 34px;margin:0;padding:0;border-radius:50%;border:0;background:var(--glasssel);color:var(--fg);display:flex;align-items:center;justify-content:center}
.alrow .albt svg{width:17px;height:17px}
.alrow .albt.del{color:var(--down)}
.alrow.off{opacity:.62}
.altag{display:inline-block;font-size:11.5px;font-weight:700;padding:2px 7px;border-radius:6px;margin-right:6px;background:var(--glasssel)}
.altag.f{background:rgba(255,152,0,.18);color:#ff9800}
.alic{width:28px;height:28px;display:flex;align-items:center;justify-content:center}
.alic svg{width:24px;height:24px}
`;
  const s=document.createElement('style');s.textContent=css;document.head.appendChild(s);
})();
var AIC={
  bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="7"/><path d="M12 9.5V13l2.2 1.5M4.5 5.5l2.5-2M19.5 5.5l-2.5-2"/><path d="M18 18.5h4M20 16.5v4" stroke-width="1.9"/></svg>',
  hline:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M3 12h18"/><circle cx="12" cy="12" r="2.2" fill="var(--glass2)"/></svg>',
  copy:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/></svg>',
  plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  stop:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6.5" y="5.5" width="4" height="13" rx="1.2"/><rect x="13.5" y="5.5" width="4" height="13" rx="1.2"/></svg>',
  re:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12a8 8 0 1 0 2.4-5.7"/><path d="M4 4v4.5h4.5"/></svg>',
  del:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>'
};

/* ---------- dati degli alert ---------- */
ALERTS.forEach(a=>{a.id=String(a.id);if(!a.ts)a.ts=a.id&&+a.id>1e12?+a.id:Date.now();if(!a.active&&!a.st)a.st='fired'});
function alDec(sym){return(BYN[sym]&&QUOTE[sym])?QUOTE[sym].dec:dec}
function alNow(sym){if(sym===cur&&lastBars.length)return lastBars[lastBars.length-1].c;const q=QUOTE[sym];return q?q.last:null}
function alAdd(sym,price){
  const now=alNow(sym);
  const a={id:Date.now().toString(36)+Math.random().toString(36).slice(2,5),sym,price:+price,dir:now==null||price>=now?'above':'below',active:true,ts:Date.now()};
  ALERTS.push(a);saveAlerts();refreshAlertLines();alSync();haptic();
  msg(alt('made',{s:sym,d:alt(a.dir).toLowerCase(),p:fmt(a.price,alDec(sym))}));
  return a;
}
checkAlerts=function(sym,price){
  if(price==null||!ALERTS.length)return;
  let hit=false;
  ALERTS.forEach(a=>{
    if(!a.active||a.sym!==sym)return;
    if((a.dir==='above'&&price>=a.price)||(a.dir==='below'&&price<=a.price)){
      a.active=false;a.st='fired';a.ft=Date.now();hit=true;
      msg('⏰ '+th('al_fired')+' '+sym+' '+th(a.dir==='above'?'al_above':'al_below')+' '+fmt(a.price,alDec(sym))+' — '+th('al_done'));
      haptic();beep();
    }
  });
  if(hit){saveAlerts();if(sym===cur)refreshAlertLines();alSync()}
};

/* ---------- sincronizzazione col server per le notifiche ad app chiusa ---------- */
var AL_ACK=[],alSyncT=0;
function alPushOn(){try{return localStorage.getItem('tc_alpush')!=='0'}catch(e){return true}}
function alSync(delay){clearTimeout(alSyncT);alSyncT=setTimeout(alSyncNow,delay==null?1200:delay)}
async function alSyncNow(){
  try{
    if(typeof pushState!=='function'||await pushState()!=='on')return;
    const r=await swReady(),s=r&&await r.pushManager.getSubscription();if(!s)return;
    const list=alPushOn()?ALERTS.filter(a=>a.active&&BYN[a.sym]).slice(0,50).map(a=>({id:a.id,sym:a.sym,tid:BYN[a.sym].tid,route:BYN[a.sym].route,p:a.price,dir:a.dir,dec:alDec(a.sym),ts:a.ts})):[];
    const ack=AL_ACK.slice();
    const res=await fetch(WORKER+'/alerts/sync',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sub:s.toJSON(),lang,alerts:list,ack})});
    if(!res.ok)return;
    AL_ACK=AL_ACK.filter(x=>!ack.includes(x));
    const j=await res.json();
    const fired=(j&&j.fired)||[];
    if(fired.length){
      let ch=false;
      fired.forEach(f=>{const a=ALERTS.find(x=>x.id===f.id);if(a&&a.active){a.active=false;a.st='fired';a.ft=f.ft||Date.now();ch=true}AL_ACK.push(f.id)});
      if(ch){saveAlerts();refreshAlertLines();if(HUB.open)hubRender()}
      alSync(300);
    }
  }catch(e){}
}
setTimeout(()=>alSync(0),7000);
document.addEventListener('visibilitychange',()=>{if(!document.hidden)alSync(800)});

/* ---------- pagina Alert ---------- */
function alWhen(ms){try{return new Date(ms).toLocaleString(LOC[lang]||'it-IT',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'})}catch(e){return''}}
function alRow(b,a){
  const on=a.active,r=document.createElement('div');r.className='alrow'+(on?'':' off');
  const it=BYN[a.sym];r.appendChild(it?iconEl(it,30):document.createElement('span'));
  const tx=document.createElement('div');tx.className='altx';
  const t1=document.createElement('b');t1.textContent=a.sym;
  const t2=document.createElement('div');t2.className='alp';
  if(!on){const tg=document.createElement('span');tg.className='altag'+(a.st==='stopped'?'':' f');tg.textContent=alt(a.st==='stopped'?'stopped':'fired');t2.appendChild(tg)}
  t2.appendChild(document.createTextNode(alt(a.dir)+' '+fmt(a.price,alDec(a.sym))));
  const t3=document.createElement('small');t3.textContent=on?alt('created')+' '+alWhen(a.ts):(a.st==='stopped'?alWhen(a.ft||a.ts):alt('fired')+' '+alWhen(a.ft||a.ts));
  tx.appendChild(t1);tx.appendChild(t2);tx.appendChild(t3);r.appendChild(tx);
  const bt=(ic,lab,cls,fn)=>{const x=document.createElement('button');x.className='albt'+(cls?' '+cls:'');x.innerHTML=AIC[ic];x.setAttribute('aria-label',lab);x.onclick=e=>{e.stopPropagation();fn()};r.appendChild(x)};
  if(on)bt('stop',alt('stop'),'',()=>{a.active=false;a.st='stopped';a.ft=Date.now();saveAlerts();refreshAlertLines();alSync();hubRender()});
  else bt('re',alt('re'),'',()=>{const n=alNow(a.sym);a.active=true;a.st=null;a.ft=null;a.ts=Date.now();if(n!=null)a.dir=a.price>=n?'above':'below';saveAlerts();refreshAlertLines();alSync();hubRender()});
  bt('del',t('del'),'del',()=>{if(!confirm(alt('delq')))return;ALERTS=ALERTS.filter(x=>x!==a);saveAlerts();refreshAlertLines();alSync();hubRender()});
  b.appendChild(r);
}
pageAlert=function(b){
  const last=alNow(cur)||0;
  shEl(b,'sh-l',th('al_new')+' — '+cur);
  const inp=document.createElement('input');inp.id='alprice';inp.type='text';inp.inputMode='decimal';inp.className='hinput';
  inp.value=fmt(last,dec).replace(/[^\d,.\- ]/g,'');
  b.appendChild(inp);
  const row=document.createElement('div');row.className='chips';
  const ok=document.createElement('button');ok.className='chip on';ok.textContent=th('al_add');
  ok.onclick=()=>{
    const sp=SEPS[lang]||SEPS.it;
    let s=inp.value.trim().split(sp[0]).join('').replace(sp[1],'.').replace(',','.');
    const p=parseFloat(s);if(!isFinite(p))return;
    alAdd(cur,p);hubRender();
  };
  row.appendChild(ok);b.appendChild(row);
  shEl(b,'sh-note',alt('tip'));
  const act=ALERTS.filter(a=>a.active).sort((x,y)=>y.ts-x.ts),ina=ALERTS.filter(a=>!a.active).sort((x,y)=>(y.ft||y.ts)-(x.ft||x.ts));
  shEl(b,'sh-l',alt('act')+' ('+act.length+')');
  if(!act.length)shEl(b,'sh-note',alt('none'));
  act.forEach(a=>alRow(b,a));
  shEl(b,'sh-l',alt('inact')+' ('+ina.length+')');
  if(!ina.length)shEl(b,'sh-note',alt('noin'));
  ina.forEach(a=>alRow(b,a));
  if(ina.length){shEl(b,'sh-sep','');shItem(b,alt('delin'),{danger:true,on:()=>{if(!confirm(alt('delinq')))return;ALERTS=ALERTS.filter(a=>a.active);saveAlerts();hubRender()}})}
};

/* ---------- linea orizzontale tra i disegni ---------- */
DICON.hline='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M2.5 12h19"/><circle cx="12" cy="12" r="2"/></svg>';
DCOL2.hline='#38bdf8';
if(DTOOLS[0].items.indexOf('hline')<0)DTOOLS[0].items.splice(1,0,'hline');
(function(){
  const oR=dRender,oH=dHit,oHa=dHandles,oHint=hintFor;
  const plotW=()=>{try{return chart.timeScale().width()}catch(e){return dcv.getBoundingClientRect().width-60}};
  dRender=function(c,d,sel){
    if(d.type!=='hline')return oR(c,d,sel);
    const y=Y(d.pts[0].p);if(y==null)return;
    const col=d.color||'#2962ff',w=plotW();
    c.lineWidth=2;c.strokeStyle=col;c.setLineDash([]);c.globalAlpha=1;
    line(c,{x:0,y},{x:w,y});
    c.font='600 12px -apple-system,system-ui,sans-serif';
    const tx=fmt(d.pts[0].p,dec),tw=c.measureText(tx).width+12;
    label(c,tx,w-tw-4,y,col,'#fff');
    if(sel)dHandles(d).forEach(h=>{c.beginPath();c.arc(h.x,h.y,7,0,7);c.fillStyle=themeVar('--bg')||'#000';c.fill();c.lineWidth=2;c.strokeStyle=col;c.stroke()});
  };
  dHit=function(d,x,y){if(d.type!=='hline')return oH(d,x,y);const yy=Y(d.pts[0].p);return yy!=null&&Math.abs(y-yy)<14&&x<=plotW()};
  dHandles=function(d){
    if(d.type!=='hline')return oHa(d);
    const yy=Y(d.pts[0].p);if(yy==null)return[];
    let x=X(d.pts[0].t);const w=plotW();if(x==null||x<20||x>w-20)x=w/2;
    return[{x,y:yy,set:q=>{d.pts[0]={t:d.pts[0].t,p:q.p}}}];
  };
  hintFor=function(){return dTool==='hline'?t('h_one'):oHint()};
  /* nel disegno: un tocco basta per la linea orizzontale */
  dcv.parentNode.addEventListener('pointerdown',e=>{
    if(e.target!==dcv||dMode!=='place'||dTool!=='hline')return;
    e.stopPropagation();e.preventDefault();
    const r=dcv.getBoundingClientRect(),q=toTP(e.clientX-r.left,e.clientY-r.top);if(!q)return;
    dTemp={type:'hline',pts:[{t:q.t,p:q.p}],color:'#2962ff'};finishTemp();
  },true);
})();
function addHLine(p){
  const tt=lastBars.length?btimes()[btimes().length-1]:Math.floor(Date.now()/1000);
  const d={type:'hline',pts:[{t:tt,p:+p}],color:'#2962ff',id:Date.now()+Math.random()};
  drawings.push(d);dSave();haptic();dSel=d;setMode('edit');
}

/* ---------- "+" accanto al prezzo quando appare il mirino ---------- */
(function(){
  const box=$('chartbox'),b=document.createElement('button');b.id='xhplus';b.hidden=true;b.innerHTML=AIC.plus;b.setAttribute('aria-label','+');
  box.appendChild(b);
  let price=null,hideT=0;
  const touch=window.matchMedia&&matchMedia('(hover: none)').matches;
  const hide=()=>{clearTimeout(hideT);if(touch){b.hidden=true;return}hideT=setTimeout(()=>{b.hidden=true},260)};
  b.addEventListener('pointerenter',()=>clearTimeout(hideT));
  function mv(p){
    if(!p||!p.point||dMode!=='idle'||(window.RP&&RP.on)||!series){hide();return}
    const pr=series.coordinateToPrice(p.point.y);if(pr==null){hide();return}
    clearTimeout(hideT);
    price=+pr;
    const ch=$('chart').getBoundingClientRect(),bx=box.getBoundingClientRect();
    let w=0;try{w=chart.timeScale().width()}catch(e){w=ch.width-70}
    b.style.left=(ch.left-bx.left+w-36)+'px';
    b.style.top=(ch.top-bx.top+p.point.y-15)+'px';
    b.hidden=false;
  }
  (function hook(){if(!chart){setTimeout(hook,500);return}try{chart.subscribeCrosshairMove(mv)}catch(e){}})();
  b.onclick=e=>{
    e.stopPropagation();if(price==null)return;haptic();
    const d=dec,p=+price.toFixed(d),ps=fmt(p,d),sym=cur;
    try{chart.clearCrosshairPosition()}catch(_){}
    b.hidden=true;
    openSheet(s=>{
      const ic=k=>{const i=document.createElement('span');i.className='alic';i.innerHTML=AIC[k];return i};
      shItem(s,alt('addat',{s:sym,p:ps}),{left:ic('bell'),on:()=>{closeSheet();alAdd(sym,p)}});
      shEl(s,'sh-sep','');
      shItem(s,alt('hline',{p:ps}),{left:ic('hline'),on:()=>{closeSheet();addHLine(p)}});
      shItem(s,alt('copy',{p:ps}),{left:ic('copy'),on:()=>{closeSheet();try{navigator.clipboard.writeText(ps.replace(/[\s ]/g,''));msg(alt('copied'))}catch(_){}}});
    });
  };
})();

/* ---------- interruttore "Notifiche degli alert" nella pagina Notifiche del Profilo ---------- */
(function(){
  const css=`.alsw{display:flex;align-items:center;gap:12px;padding:12px 16px}
.alsw .tx{flex:1;min-width:0}.alsw b{display:block;font-weight:500;font-size:16px}.alsw small{display:block;font-size:12.5px;color:var(--muted);margin-top:2px;line-height:1.35}
.alsw input{width:auto;margin:0}
#altag{position:absolute;z-index:6;display:flex;align-items:center;gap:0;height:30px;border-radius:8px;border:1.5px solid var(--fg);background:var(--glass2);color:var(--fg);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);font-size:14px;font-weight:600;white-space:nowrap;box-shadow:0 2px 10px rgba(0,0,0,.3);transform:translateY(-50%)}
#altag[hidden]{display:none}
#altag span{padding:0 10px;font-variant-numeric:tabular-nums}
#altag button{width:38px;height:100%;margin:0;padding:0;border:0;border-left:1.5px solid var(--fg);background:transparent;color:var(--fg);display:flex;align-items:center;justify-content:center;border-radius:0 7px 7px 0}
#altag button svg{width:18px;height:18px}`;
  const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
  const orig=renderNotif;
  renderNotif=function(p){
    orig(p);
    const g=pfGroup(p,'');
    const r=document.createElement('label');r.className='alsw';
    r.innerHTML='<div class="tx"><b></b><small></small></div>';
    r.querySelector('b').textContent=alt('alpush');r.querySelector('small').textContent=alt('alpushsub');
    const sw=cvSwitch(false,v=>{try{localStorage.setItem('tc_alpush',v?'1':'0')}catch(e){}alSync(0)});
    r.appendChild(sw);g.appendChild(r);
    pushState().then(st=>{
      const on=st==='on';sw.disabled=!on;sw.checked=on&&alPushOn();
      if(!on)r.querySelector('small').textContent=alt('alneed');
    }).catch(()=>{});
  };
})();

/* ---------- tocco sulla linea dell'alert: etichetta con il cestino ---------- */
(function(){
  const box=$('chartbox'),tag=document.createElement('div');tag.id='altag';tag.hidden=true;
  tag.innerHTML='<span></span><button aria-label="del"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/></svg></button>';
  box.appendChild(tag);
  let sel=null,raf=0;
  const name=a=>a.sym+' '+alt(a.dir)+' '+fmt(a.price,alDec(a.sym));
  function place(){
    raf=0;
    if(!sel||!sel.active||sel.sym!==cur||!series){hideTag();return}
    const y=series.priceToCoordinate(sel.price);
    if(y==null){tag.style.visibility='hidden'}else{
      const ch=$('chart').getBoundingClientRect(),bx=box.getBoundingClientRect();
      let w=0;try{w=chart.timeScale().width()}catch(e){w=ch.width-70}
      tag.style.visibility='';tag.style.top=(ch.top-bx.top+y)+'px';
      tag.style.left=Math.max(8,ch.left-bx.left+w/2-tag.offsetWidth/2)+'px';
    }
    raf=requestAnimationFrame(place);
  }
  function hideTag(){sel=null;tag.hidden=true;if(raf){cancelAnimationFrame(raf);raf=0}}
  function showTag(a){sel=a;tag.firstChild.textContent='⏰ '+name(a);tag.hidden=false;haptic();if(!raf)raf=requestAnimationFrame(place)}
  window.alTagHide=hideTag;
  tag.querySelector('button').onclick=e=>{
    e.stopPropagation();const a=sel;if(!a)return;
    openSheet(s=>{
      shEl(s,'sh-t',alt('delt'));
      shEl(s,'sh-note',alt('deltx',{n:name(a)}));
      shItem(s,t('del'),{danger:true,on:()=>{closeSheet();ALERTS=ALERTS.filter(x=>x!==a);saveAlerts();refreshAlertLines();alSync();hideTag()}});
      shItem(s,t('cancel'),{on:closeSheet});
    });
  };
  function click(p){
    if(dMode!=='idle'||!p||!p.point||!series){hideTag();return}
    const y=p.point.y;let best=null,bd=16;
    ALERTS.forEach(a=>{if(!a.active||a.sym!==cur)return;const yy=series.priceToCoordinate(a.price);if(yy!=null&&Math.abs(yy-y)<bd){bd=Math.abs(yy-y);best=a}});
    if(best){if(sel===best)hideTag();else showTag(best)}else hideTag();
  }
  (function hook(){if(!chart){setTimeout(hook,500);return}try{chart.subscribeClick(click)}catch(e){}})();
})();

/* ---------- nome del simbolo in alto: sempre leggibile per intero ---------- */
(function(){
  const st=document.createElement('style');
  st.textContent='#lgname.wrap{white-space:normal;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;line-height:1.2}';
  document.head.appendChild(st);
  function fit(){
    const el=$('lgname');if(!el)return;
    el.classList.remove('wrap');
    let fs=18;el.style.fontSize=fs+'px';
    while(fs>13&&el.scrollWidth>el.clientWidth+1){fs-=0.5;el.style.fontSize=fs+'px'}
    if(el.scrollWidth>el.clientWidth+1){el.style.fontSize='14px';el.classList.add('wrap')}
  }
  const orig=renderLegend;
  renderLegend=function(){orig();fit()};
  window.addEventListener('resize',()=>setTimeout(fit,100));
  setTimeout(fit,500);
})();

/* =====================================================================
   0.35.0 — EDITOR SCRIPT
   Si scrive in linguaggio Pine (v5/v6). Gli script si salvano su questo
   telefono, con lo storico delle versioni. L'esecuzione sul grafico
   arriva insieme al motore degli indicatori.
   ===================================================================== */
var EDT={
 it:{title:"Editor script",untitled:"Script senza titolo",save:"Salva script",copy:"Crea una copia…",rename:"Rinomina…",history:"Storico versioni…",create:"Crea nuovo",open:"Apri script…",ind:"Indicatore",strat:"Strategia",lib:"Libreria",builtin:"Integrato…",
  selall:"Seleziona tutto",copyall:"Copia tutto",discard:"Scarta tutte le modifiche",cut:"Taglia",copyx:"Copia",paste:"Incolla",find:"Trova/Sostituisci",gotoline:"Vai alla riga…",comment:"Commenta/decommenta righe",
  findph:"Trova",replph:"Sostituisci con",repl1:"Sostituisci",replall:"Tutti",nf:"Nessun risultato",nres:"{n} risultati",nres1:"1 risultato",line:"Linea",col:"Col",saved:"Script salvato.",nochg:"Nessuna modifica da salvare.",namep:"Nome dello script",ok:"OK",cancel:"Annulla",
  nover:"Nessuna versione salvata.",verload:"Versione caricata: salva per confermarla.",del:"Elimina script",delq:"Eliminare definitivamente questo script?",deleted:"Script eliminato.",addchart:"Aggiungi al grafico",check:"Controlla lo script",bigger:"Testo più grande",smaller:"Testo più piccolo",
  soonrun:"Il grafico eseguirà gli script con la prossima versione, insieme al motore degli indicatori. Intanto puoi scriverli, controllarli e salvarli.",console:"Console",chkok:"Nessun errore trovato.",copied:"Copiato.",pastefail:"Non riesco a leggere gli appunti: tieni premuto nel testo e scegli Incolla.",
  e_open:"parentesi «{c}» aperta e mai chiusa",e_close:"parentesi «{c}» chiusa senza essere aperta",e_str:"testo tra virgolette non chiuso",e_decl:"manca la dichiarazione: indicator(), strategy() o library()",w_ver:"manca //@version=6 in cima allo script",w_ind:"il rientro dovrebbe essere di 4 spazi (o un multiplo)",
  discq:"Ci sono modifiche non salvate. Scartarle?",mine:"I miei script",empty:"Nessuno script salvato.",copyof:"Copia di ",unsaved:"non salvato",lines:"righe",linep:"Numero della riga",
  n_ind:"Il mio script",n_strat:"La mia strategia",n_lib:"LaMiaLibreria",chk:"Controllo",err:"Errore",warn:"Avviso",in_line:"riga"},
 es:{title:"Editor de scripts",untitled:"Script sin título",save:"Guardar script",copy:"Crear una copia…",rename:"Renombrar…",history:"Historial de versiones…",create:"Crear nuevo",open:"Abrir script…",ind:"Indicador",strat:"Estrategia",lib:"Librería",builtin:"Integrado…",
  selall:"Seleccionar todo",copyall:"Copiar todo",discard:"Descartar todos los cambios",cut:"Cortar",copyx:"Copiar",paste:"Pegar",find:"Buscar/Reemplazar",gotoline:"Ir a la línea…",comment:"Comentar/descomentar líneas",
  findph:"Buscar",replph:"Reemplazar con",repl1:"Reemplazar",replall:"Todos",nf:"Sin resultados",nres:"{n} resultados",nres1:"1 resultado",line:"Línea",col:"Col",saved:"Script guardado.",nochg:"No hay cambios que guardar.",namep:"Nombre del script",ok:"OK",cancel:"Cancelar",
  nover:"No hay versiones guardadas.",verload:"Versión cargada: guarda para confirmarla.",del:"Eliminar script",delq:"¿Eliminar definitivamente este script?",deleted:"Script eliminado.",addchart:"Añadir al gráfico",check:"Revisar el script",bigger:"Texto más grande",smaller:"Texto más pequeño",
  soonrun:"El gráfico ejecutará los scripts en la próxima versión, junto con el motor de indicadores. Mientras tanto puedes escribirlos, revisarlos y guardarlos.",console:"Consola",chkok:"No se encontraron errores.",copied:"Copiado.",pastefail:"No puedo leer el portapapeles: mantén pulsado en el texto y elige Pegar.",
  e_open:"paréntesis «{c}» abierto y nunca cerrado",e_close:"paréntesis «{c}» cerrado sin abrir",e_str:"texto entre comillas sin cerrar",e_decl:"falta la declaración: indicator(), strategy() o library()",w_ver:"falta //@version=6 al principio del script",w_ind:"la sangría debería ser de 4 espacios (o un múltiplo)",
  discq:"Hay cambios sin guardar. ¿Descartarlos?",mine:"Mis scripts",empty:"No hay scripts guardados.",copyof:"Copia de ",unsaved:"sin guardar",lines:"líneas",linep:"Número de línea",
  n_ind:"Mi script",n_strat:"Mi estrategia",n_lib:"MiLibreria",chk:"Revisión",err:"Error",warn:"Aviso",in_line:"línea"},
 en:{title:"Script editor",untitled:"Untitled script",save:"Save script",copy:"Make a copy…",rename:"Rename…",history:"Version history…",create:"Create new",open:"Open script…",ind:"Indicator",strat:"Strategy",lib:"Library",builtin:"Built-in…",
  selall:"Select all",copyall:"Copy all",discard:"Discard all changes",cut:"Cut",copyx:"Copy",paste:"Paste",find:"Find/Replace",gotoline:"Go to line…",comment:"Comment/uncomment lines",
  findph:"Find",replph:"Replace with",repl1:"Replace",replall:"All",nf:"No results",nres:"{n} results",nres1:"1 result",line:"Line",col:"Col",saved:"Script saved.",nochg:"No changes to save.",namep:"Script name",ok:"OK",cancel:"Cancel",
  nover:"No saved versions.",verload:"Version loaded: save to keep it.",del:"Delete script",delq:"Permanently delete this script?",deleted:"Script deleted.",addchart:"Add to chart",check:"Check the script",bigger:"Bigger text",smaller:"Smaller text",
  soonrun:"The chart will run scripts in the next version, together with the indicator engine. Meanwhile you can write, check and save them.",console:"Console",chkok:"No errors found.",copied:"Copied.",pastefail:"Can't read the clipboard: press and hold in the text and choose Paste.",
  e_open:"bracket “{c}” opened and never closed",e_close:"bracket “{c}” closed without being opened",e_str:"unclosed quoted text",e_decl:"missing declaration: indicator(), strategy() or library()",w_ver:"missing //@version=6 at the top of the script",w_ind:"indentation should be 4 spaces (or a multiple)",
  discq:"There are unsaved changes. Discard them?",mine:"My scripts",empty:"No saved scripts.",copyof:"Copy of ",unsaved:"unsaved",lines:"lines",linep:"Line number",
  n_ind:"My script",n_strat:"My strategy",n_lib:"MyLibrary",chk:"Check",err:"Error",warn:"Warning",in_line:"line"},
 fr:{title:"Éditeur de scripts",untitled:"Script sans titre",save:"Enregistrer le script",copy:"Créer une copie…",rename:"Renommer…",history:"Historique des versions…",create:"Créer nouveau",open:"Ouvrir un script…",ind:"Indicateur",strat:"Stratégie",lib:"Bibliothèque",builtin:"Intégré…",
  selall:"Tout sélectionner",copyall:"Tout copier",discard:"Annuler toutes les modifications",cut:"Couper",copyx:"Copier",paste:"Coller",find:"Rechercher/Remplacer",gotoline:"Aller à la ligne…",comment:"Commenter/décommenter les lignes",
  findph:"Rechercher",replph:"Remplacer par",repl1:"Remplacer",replall:"Tous",nf:"Aucun résultat",nres:"{n} résultats",nres1:"1 résultat",line:"Ligne",col:"Col",saved:"Script enregistré.",nochg:"Aucune modification à enregistrer.",namep:"Nom du script",ok:"OK",cancel:"Annuler",
  nover:"Aucune version enregistrée.",verload:"Version chargée : enregistre pour la garder.",del:"Supprimer le script",delq:"Supprimer définitivement ce script ?",deleted:"Script supprimé.",addchart:"Ajouter au graphique",check:"Vérifier le script",bigger:"Texte plus grand",smaller:"Texte plus petit",
  soonrun:"Le graphique exécutera les scripts dans la prochaine version, avec le moteur d'indicateurs. En attendant tu peux les écrire, les vérifier et les enregistrer.",console:"Console",chkok:"Aucune erreur trouvée.",copied:"Copié.",pastefail:"Impossible de lire le presse-papiers : appuie longuement dans le texte et choisis Coller.",
  e_open:"parenthèse « {c} » ouverte et jamais fermée",e_close:"parenthèse « {c} » fermée sans être ouverte",e_str:"texte entre guillemets non fermé",e_decl:"déclaration manquante : indicator(), strategy() ou library()",w_ver:"//@version=6 manque en haut du script",w_ind:"le retrait devrait être de 4 espaces (ou un multiple)",
  discq:"Il y a des modifications non enregistrées. Les abandonner ?",mine:"Mes scripts",empty:"Aucun script enregistré.",copyof:"Copie de ",unsaved:"non enregistré",lines:"lignes",linep:"Numéro de ligne",
  n_ind:"Mon script",n_strat:"Ma stratégie",n_lib:"MaBibliotheque",chk:"Vérification",err:"Erreur",warn:"Avertissement",in_line:"ligne"}
};
function edt(k,o){let s=(EDT[lang]&&EDT[lang][k])||EDT.it[k]||k;if(o)Object.keys(o).forEach(x=>{s=s.split('{'+x+'}').join(o[x])});return s}

/* ---------- modelli ---------- */
function edTpl(kind){
  if(kind==='strategy')return'//@version=6\nstrategy("'+edt('n_strat')+'", overlay=true)\n\nfast = ta.sma(close, 14)\nslow = ta.sma(close, 28)\n\nif ta.crossover(fast, slow)\n    strategy.entry("Long", strategy.long)\nif ta.crossunder(fast, slow)\n    strategy.entry("Short", strategy.short)\n\nplot(fast, "Fast", color=color.teal)\nplot(slow, "Slow", color=color.orange)\n';
  if(kind==='library')return'//@version=6\n// @description '+edt('lib')+'\nlibrary("'+edt('n_lib')+'")\n\n// @function Media di due valori\n// @param a primo valore\n// @param b secondo valore\n// @returns la media\nexport media(float a, float b) =>\n    (a + b) / 2\n';
  return'//@version=6\nindicator("'+edt('n_ind')+'")\nplot(close)\n';
}
var ED_BUILTIN=[
 ['Simple Moving Average (SMA)','//@version=6\nindicator("Simple Moving Average", shorttitle="SMA", overlay=true)\nlen = input.int(20, "Length", minval=1)\nsrc = input.source(close, "Source")\nplot(ta.sma(src, len), "SMA", color=color.blue, linewidth=2)\n'],
 ['Exponential Moving Average (EMA)','//@version=6\nindicator("Exponential Moving Average", shorttitle="EMA", overlay=true)\nlen = input.int(50, "Length", minval=1)\nsrc = input.source(close, "Source")\nplot(ta.ema(src, len), "EMA", color=color.orange, linewidth=2)\n'],
 ['Relative Strength Index (RSI)','//@version=6\nindicator("Relative Strength Index", shorttitle="RSI")\nlen = input.int(14, "Length", minval=1)\nsrc = input.source(close, "Source")\nr = ta.rsi(src, len)\nplot(r, "RSI", color=color.purple)\nhline(70, "Overbought", color=color.gray)\nhline(50, "Middle", color=color.gray, linestyle=hline.style_dotted)\nhline(30, "Oversold", color=color.gray)\n'],
 ['MACD','//@version=6\nindicator("MACD")\nfast = input.int(12, "Fast length")\nslow = input.int(26, "Slow length")\nsig = input.int(9, "Signal smoothing")\n[m, s, h] = ta.macd(close, fast, slow, sig)\nplot(h, "Histogram", style=plot.style_columns, color=h >= 0 ? color.teal : color.red)\nplot(m, "MACD", color=color.blue)\nplot(s, "Signal", color=color.orange)\n'],
 ['Bollinger Bands','//@version=6\nindicator("Bollinger Bands", shorttitle="BB", overlay=true)\nlen = input.int(20, "Length", minval=1)\nmult = input.float(2.0, "StdDev", minval=0.1)\nbasis = ta.sma(close, len)\ndev = mult * ta.stdev(close, len)\nplot(basis, "Basis", color=color.orange)\nu = plot(basis + dev, "Upper", color=color.blue)\nl = plot(basis - dev, "Lower", color=color.blue)\nfill(u, l, color=color.new(color.blue, 90))\n'],
 ['Average True Range (ATR)','//@version=6\nindicator("Average True Range", shorttitle="ATR")\nlen = input.int(14, "Length", minval=1)\nplot(ta.atr(len), "ATR", color=color.red)\n'],
 ['Stochastic','//@version=6\nindicator("Stochastic", shorttitle="Stoch")\nk = input.int(14, "%K length", minval=1)\nsk = input.int(3, "%K smoothing", minval=1)\nsd = input.int(3, "%D smoothing", minval=1)\nkk = ta.sma(ta.stoch(close, high, low, k), sk)\ndd = ta.sma(kk, sd)\nplot(kk, "%K", color=color.blue)\nplot(dd, "%D", color=color.orange)\nhline(80, "Upper", color=color.gray)\nhline(20, "Lower", color=color.gray)\n'],
 ['VWAP','//@version=6\nindicator("VWAP", overlay=true)\nplot(ta.vwap(hlc3), "VWAP", color=color.fuchsia, linewidth=2)\n']
];

/* ---------- archivio ---------- */
var ED={list:lsGet('tc_scripts',[]),cur:null,fs:lsGet('tc_edfs',15),open:false,built:false,msgs:[]};
function edSaveList(){lsSet('tc_scripts',ED.list)}
function edNew(kind,code,name){const c=code!=null?code:edTpl(kind);return{id:null,name:name||edt('untitled'),kind:kind||'indicator',code:c,saved:c,vers:[]}}
function edDirty(){return!!ED.cur&&ED.ta&&ED.ta.value!==ED.cur.saved}
function edDraft(){if(ED.cur)lsSet('tc_sdraft',{id:ED.cur.id,name:ED.cur.name,kind:ED.cur.kind,code:ED.ta.value,saved:ED.cur.saved})}
function edKindOf(code){const m=/^\s*(indicator|strategy|library)\s*\(/m.exec(code||'');return m?m[1]:'indicator'}
function edTitleOf(code){const m=/^\s*(?:indicator|strategy|library)\s*\(\s*(?:title\s*=\s*)?"([^"]{1,60})"/m.exec(code||'');return m?m[1]:''}

/* ---------- colori della sintassi ---------- */
var ED_KW=new Set('if else for to by while switch var varip import export method type true false and or not na in continue break return enum'.split(' '));
var ED_TY=new Set('int float bool string color line label box table array matrix map series simple const'.split(' '));
var ED_NS=new Set('ta math input color str request strategy array syminfo timeframe barstate plot shape location size display hline format currency session ticker chart polyline linefill extend xloc yloc position text font order alert dayofweek adjustment barmerge scale earnings dividends splits matrix map runtime log'.split(' '));
var ED_BV=new Set('open high low close volume time time_close bar_index hl2 hlc3 ohlc4 hlcc4 last_bar_index timenow year month dayofmonth hour minute second'.split(' '));
var ED_DECL=new Set('indicator strategy library'.split(' '));
function edHL(code){
  const re=/(\/\/[^\n]*)|("(?:[^"\\\n]|\\.)*"?|'(?:[^'\\\n]|\\.)*'?)|(#[0-9a-fA-F]{6,8}\b)|(\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b|\.\d+\b)|([A-Za-z_][A-Za-z0-9_]*)/g;
  let out='',i=0,m;
  const sp=(c,s)=>'<span class="'+c+'">'+esc(s)+'</span>';
  while((m=re.exec(code))){
    out+=esc(code.slice(i,m.index));i=re.lastIndex;
    const s=m[0];
    if(m[1])out+=sp(/^\/\/\s*@/.test(s)?'hv':'hc',s);
    else if(m[2])out+=sp('hs',s);
    else if(m[3])out+=sp('hx',s);
    else if(m[4])out+=sp('hn',s);
    else{
      const nx=code[i],pv=code[m.index-1];
      if(pv==='.')out+=sp(nx==='('?'hf':'hm',s);
      else if(ED_DECL.has(s)&&nx==='(')out+=sp('hd',s);
      else if(ED_KW.has(s))out+=sp('hk',s);
      else if(ED_TY.has(s))out+=sp('ht',s);
      else if(ED_NS.has(s)&&nx==='.')out+=sp('hns',s);
      else if(ED_BV.has(s))out+=sp('hb',s);
      else if(nx==='(')out+=sp('hf',s);
      else out+=esc(s);
    }
  }
  return out+esc(code.slice(i));
}

/* ---------- controllo dello script ---------- */
function edCheck(code){
  const out=[],lines=code.split('\n'),stack=[],pair={')':'(',']':'[','}':'{'};
  lines.forEach((ln,li)=>{
    let q=null;
    for(let j=0;j<ln.length;j++){
      const c=ln[j];
      if(q){if(c==='\\'){j++;continue}if(c===q)q=null;continue}
      if(c==='/'&&ln[j+1]==='/')break;
      if(c==='"'||c==="'"){q=c;continue}
      if('([{'.includes(c))stack.push({c,l:li+1});
      else if(')]}'.includes(c)){
        const t=stack[stack.length-1];
        if(t&&t.c===pair[c])stack.pop();
        else out.push({l:li+1,lv:'e',m:edt('e_close',{c})});
      }
    }
    if(q)out.push({l:li+1,lv:'e',m:edt('e_str')});
    const ind=/^( *)\S/.exec(ln);
    if(ind&&ind[1].length%4!==0&&!stack.length&&!/^\s*\/\//.test(ln)&&!/[,(\[+\-*\/=?:]\s*$/.test(lines[li-1]||''))out.push({l:li+1,lv:'w',m:edt('w_ind')});
  });
  stack.forEach(t=>out.push({l:t.l,lv:'e',m:edt('e_open',{c:t.c})}));
  if(!/^\s*\/\/\s*@version\s*=\s*\d/m.test(code))out.push({l:1,lv:'w',m:edt('w_ver')});
  if(!/^\s*(indicator|strategy|library)\s*\(/m.test(code))out.push({l:1,lv:'e',m:edt('e_decl')});
  return out.sort((a,b)=>a.l-b.l);
}

/* ---------- icone ---------- */
var EIC={
  ind:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14c2.5-5 5-5 7.5 0s5 5 7.5 0 2.5-3 3-3"/></svg>',
  strat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 13c2.5-4 5-4 7.5 0s5 4 7.5 0 2.5-2.5 3-2.5"/><path d="M8 3v5M6 6l2 2 2-2M16 21v-5M14 18l2-2 2 2"/></svg>',
  lib:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><rect x="3.5" y="11" width="7" height="7"/><rect x="10.5" y="11" width="7" height="7"/><rect x="3.5" y="4" width="7" height="7"/><rect x="13.5" y="3" width="6" height="6"/></svg>',
  builtin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11c2.5-4 5-4 7.5 0s5 4 7.5 0 2.5-2.5 3-2.5"/><path d="M4 20v-3M7 20v-5M10 20v-2M13 20v-4M16 20v-6M19 20v-3"/></svg>',
  cloud:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18H6a4 4 0 0 1-.6-7.96A6 6 0 0 1 17 8.5a4.5 4.5 0 0 1 1 8.9V18h-1"/><path d="M12 20v-8M9 15l3-3 3 3"/></svg>',
  cloudok:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18H6a4 4 0 0 1-.6-7.96A6 6 0 0 1 17 8.5a4.5 4.5 0 0 1 .5 8.97"/><path d="M9 15.5l2.2 2.2L15.5 13"/></svg>',
  chev:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',
  right:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>',
  back:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg>',
  more:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="5" cy="12" r="1.9"/><circle cx="12" cy="12" r="1.9"/><circle cx="19" cy="12" r="1.9"/></svg>',
  x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  kb:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="5.5" width="19" height="13" rx="2"/><path d="M6 9.5h1M9.5 9.5h1M13 9.5h1M16.5 9.5h1M6 12.5h1M9.5 12.5h1M13 12.5h1M16.5 12.5h1M8 15.5h8"/></svg>',
  edit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4h6M12 4v16M9 20h6"/><path d="M4 8v8M20 8v8" opacity=".5"/></svg>',
  term:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="3"/><path d="M7.5 9.5l3 2.5-3 2.5M12.5 15h4"/></svg>',
  hist:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12a8 8 0 1 0 2.4-5.7"/><path d="M4 4v4.5h4.5M12 8v4.5l3 1.8"/></svg>',
  copy:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/></svg>',
  pen:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20l1-4L16.5 4.5a2.1 2.1 0 0 1 3 3L8 19z"/><path d="M14.5 6.5l3 3"/></svg>',
  plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M12 4v16M4 12h16"/></svg>',
  folder:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',
  chart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4v16h16"/><path d="M7 14l4-4 3 3 5-6"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M8 12.3l2.6 2.6L16 9.5"/></svg>',
  trash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/></svg>',
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5L20 20"/></svg>',
  aa:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18l4.5-12L12 18M4.6 14h5.8M14 18l3-8 3 8M15 15.5h4"/></svg>'
};

(function(){
  const css=`
#sedbg{position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:68}
#sed{position:fixed;left:0;right:0;top:calc(env(safe-area-inset-top) + 10px);height:calc(var(--sedh,100%) - env(safe-area-inset-top) - 10px);z-index:69;background:var(--bg);color:var(--fg);border-radius:26px 26px 0 0;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 -6px 30px rgba(0,0,0,.35);transform:translateY(0);transition:transform .32s cubic-bezier(.2,.9,.3,1)}
#sed.hide{transform:translateY(105%)}
#sed[hidden],#sedbg[hidden]{display:none}
.sedh{position:relative;display:flex;align-items:center;justify-content:center;height:58px;flex:0 0 58px}
.sedh b{font-size:18px;font-weight:700}
.sedx{position:absolute;right:14px;top:9px;width:40px;height:40px;margin:0;padding:0;border-radius:50%;border:1px solid var(--line);background:var(--glasssel);color:var(--fg);display:flex;align-items:center;justify-content:center}
.sedx svg{width:20px;height:20px}
.sedbar{display:flex;align-items:center;gap:8px;padding:4px 12px 10px;border-bottom:1px solid var(--line);flex:0 0 auto}
.sedname{display:flex;align-items:center;gap:8px;min-width:0;flex:0 1 auto;width:auto;margin:0;padding:7px 10px;border-radius:12px;border:0;background:transparent;color:var(--fg)}
.sedname.on{background:var(--glasssel)}
.sedname i{display:flex;flex:0 0 22px}.sedname i svg{width:22px;height:22px}
.sedname b{font-size:19px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}
.sedname u{display:flex;flex:0 0 16px;text-decoration:none}.sedname u svg{width:16px;height:16px}
.sedname small{font-size:11px;font-weight:600;color:#ff9800;white-space:nowrap}
.sedsave{width:40px;height:40px;flex:0 0 40px;margin:0;padding:0;border:0;background:transparent;color:var(--muted);display:flex;align-items:center;justify-content:center}
.sedsave.dirty{color:#3b82f6}
.sedsave svg{width:26px;height:26px}
.sedsp{flex:1}
.sedmore{width:44px;height:40px;flex:0 0 44px;margin:0;padding:0;border-radius:12px;border:1px solid var(--line);background:transparent;color:var(--fg);display:flex;align-items:center;justify-content:center}
.sedmore svg{width:22px;height:22px}
.sedfind{display:flex;flex-wrap:wrap;gap:6px;padding:8px 12px;border-bottom:1px solid var(--line);flex:0 0 auto;align-items:center}
.sedfind[hidden]{display:none}
.sedfind input{flex:1 1 40%;min-width:0;width:auto;margin:0;height:36px;padding:0 10px;border-radius:10px;border:1px solid var(--line);background:var(--glasssel);color:var(--fg);font-size:15px}
.sedfind button{width:auto;margin:0;height:36px;padding:0 11px;border-radius:10px;border:0;background:var(--glasssel);color:var(--fg);font-size:14px;font-weight:600}
.sedfind span{font-size:12.5px;color:var(--muted);min-width:70px}
.sedscroll{flex:1 1 auto;overflow:auto;-webkit-overflow-scrolling:touch;position:relative;overscroll-behavior:contain}
.sedin{display:flex;min-height:100%;min-width:100%;width:max-content}
.sedgut{position:sticky;left:0;z-index:2;flex:0 0 auto;padding:10px 10px 10px 12px;background:var(--bg);color:var(--muted);text-align:right;font:var(--edfs,15px)/var(--edlh,22px) ui-monospace,"SF Mono",Menlo,monospace;white-space:pre;user-select:none;-webkit-user-select:none;border-right:1px solid var(--sep)}
.sedgut .on{color:var(--fg);font-weight:600}
.sedcode{position:relative;flex:1 0 auto;min-width:0}
.sedline{position:absolute;left:0;right:0;height:var(--edlh,22px);background:rgba(59,130,246,.12);pointer-events:none}
.sedhl,.sedta{margin:0;border:0;padding:10px 40px 60vh 10px;font:var(--edfs,15px)/var(--edlh,22px) ui-monospace,"SF Mono",Menlo,monospace;white-space:pre;tab-size:4;letter-spacing:0;word-spacing:0;box-sizing:border-box}
.sedhl{position:relative;color:var(--fg);pointer-events:none;min-height:100%;min-width:100%}
.sedta{position:absolute;inset:0;width:100%;height:100%;resize:none;overflow:hidden;background:transparent;color:transparent;-webkit-text-fill-color:transparent;caret-color:var(--fg);outline:none;border-radius:0}
.sedta::selection{background:rgba(59,130,246,.35);-webkit-text-fill-color:transparent}
.hc{color:#8e8e93;font-style:italic}.hv{color:#8e8e93;font-weight:700}
.hs{color:#3fa76b}.hn{color:#e0803a}.hx{color:#c084fc}
.hk{color:#4c8dff;font-weight:600}.ht{color:#14b8a6}.hd{color:#4c8dff}.hf{color:#4c8dff}.hm{color:#a78bfa}.hns{color:#a78bfa}.hb{color:#e5484d}
html[data-theme="light"] .hs{color:#16803c}html[data-theme="light"] .hk,html[data-theme="light"] .hf,html[data-theme="light"] .hd{color:#1d4ed8}html[data-theme="light"] .hb{color:#c62828}html[data-theme="light"] .hm,html[data-theme="light"] .hns{color:#7c3aed}
.sedfab{position:absolute;right:14px;bottom:62px;z-index:3;display:flex;gap:8px}
.sedfab button{width:50px;height:46px;margin:0;padding:0;border-radius:14px;border:1px solid var(--line);background:var(--glass2);color:var(--fg);display:flex;align-items:center;justify-content:center;-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);box-shadow:0 4px 14px rgba(0,0,0,.25)}
.sedfab svg{width:28px;height:28px}
.sedcon{flex:0 0 auto;max-height:34%;overflow:auto;border-top:1px solid var(--line);background:var(--surf);font-size:13.5px}
.sedcon[hidden]{display:none}
.sedcon .ch{display:flex;justify-content:space-between;align-items:center;padding:8px 14px;font-weight:700;font-size:13px;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;position:sticky;top:0;background:var(--surf)}
.sedcon .cm{display:flex;gap:8px;padding:7px 14px;border-top:1px solid var(--sep);line-height:1.35;width:100%;margin:0;border-left:0;border-right:0;border-bottom:0;background:transparent;color:var(--fg);text-align:left;font-size:13.5px}
.sedcon .cm i{font-style:normal;font-weight:700;flex:0 0 auto}
.sedcon .cm.e i{color:var(--down)}.sedcon .cm.w i{color:#ff9800}.sedcon .cm.ok i{color:var(--up)}
.sedcon .cm em{font-style:normal;color:var(--muted);flex:0 0 auto}
.sedfoot{flex:0 0 auto;display:flex;align-items:center;justify-content:space-between;padding:6px 14px calc(env(safe-area-inset-bottom) + 6px);border-top:1px solid var(--line);font-size:14px;color:var(--fg)}
.sedfoot button{position:relative;width:38px;height:34px;margin:0;padding:0;border:0;background:transparent;color:var(--fg);display:flex;align-items:center;justify-content:center;border-radius:9px}
.sedfoot button.on{background:var(--glasssel)}
.sedfoot button svg{width:24px;height:24px}
.sedfoot button s{position:absolute;top:0;right:0;min-width:16px;height:16px;border-radius:8px;background:var(--down);color:#fff;font-size:10.5px;font-weight:700;text-decoration:none;display:flex;align-items:center;justify-content:center;padding:0 4px}
.sedfoot span{font-variant-numeric:tabular-nums;color:var(--muted)}
#sedmbg{position:absolute;inset:0;z-index:5;background:rgba(0,0,0,.25)}
#sedmbg[hidden],#sedm[hidden]{display:none}
#sedm{position:absolute;z-index:6;left:8px;right:8px;bottom:8px;max-height:76%;overflow:auto;border-radius:24px;background:var(--glass2);-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);border:1px solid var(--glassline);padding:6px 0;box-shadow:0 10px 40px rgba(0,0,0,.4)}
#sedm.pop{left:auto;right:auto;bottom:auto;width:min(300px,82vw);border-radius:14px;padding:4px 0}
.smh{display:flex;align-items:center;gap:8px;padding:12px 18px 8px;font-size:19px;font-weight:700}
.smh button{width:30px;height:30px;margin:0 0 0 -8px;padding:0;border:0;background:transparent;color:var(--fg);display:flex;align-items:center;justify-content:center}
.smh button svg{width:24px;height:24px}
.smi{display:flex;align-items:center;gap:14px;width:100%;margin:0;padding:13px 18px;border:0;background:transparent;color:var(--fg);font-size:17px;text-align:left}
#sedm.pop .smi{padding:11px 16px;font-size:16px}
.smi i{display:flex;flex:0 0 26px;color:var(--fg)}.smi i svg{width:26px;height:26px}
.smi span{flex:1;min-width:0}
.smi small{display:block;font-size:12.5px;color:var(--muted);margin-top:2px}
.smi em{font-style:normal;color:var(--muted);display:flex}.smi em svg{width:18px;height:18px}
.smi.dis{opacity:.4;pointer-events:none}
.smi.danger,.smi.danger i{color:var(--down)}
.smi:active{background:var(--glasssel)}
.sms{height:1px;background:var(--sep);margin:5px 0}
.smnote{padding:6px 18px 12px;font-size:13.5px;color:var(--muted);line-height:1.45}
.smin{display:block;width:calc(100% - 36px);margin:6px 18px 10px;padding:12px 14px;border-radius:14px;border:1px solid var(--line);background:var(--glasssel);color:var(--fg);font-size:17px;box-sizing:border-box}
.smrow{display:flex;gap:8px;padding:2px 18px 10px;justify-content:flex-end}
.smrow button{width:auto;margin:0;padding:10px 18px;border-radius:12px;border:0;background:var(--glasssel);color:var(--fg);font-size:15.5px;font-weight:600}
.smrow button.pri{background:#3b82f6;color:#fff}
`;
  const s=document.createElement('style');s.textContent=css;document.head.appendChild(s);
})();

/* ---------- costruzione della finestra ---------- */
function edBuild(){
  if(ED.built)return;ED.built=true;
  const bg=document.createElement('div');bg.id='sedbg';bg.hidden=true;document.body.appendChild(bg);
  const w=document.createElement('div');w.id='sed';w.hidden=true;
  w.innerHTML=
   '<div class="sedh"><b></b><button class="sedx" aria-label="close">'+EIC.x+'</button></div>'+
   '<div class="sedbar"><button class="sedname"><i></i><b></b><small></small><u>'+EIC.chev+'</u></button><button class="sedsave" aria-label="save"></button><span class="sedsp"></span><button class="sedmore" aria-label="more">'+EIC.more+'</button></div>'+
   '<div class="sedfind" hidden><input class="ff" autocapitalize="off" autocorrect="off" spellcheck="false"><button class="fp">‹</button><button class="fn">›</button><span class="fc"></span><input class="fr" autocapitalize="off" autocorrect="off" spellcheck="false"><button class="f1"></button><button class="fa"></button><button class="fx">✕</button></div>'+
   '<div class="sedscroll"><div class="sedin"><div class="sedgut"></div><div class="sedcode"><div class="sedline"></div><pre class="sedhl"></pre><textarea class="sedta" wrap="off" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false"></textarea></div></div></div>'+
   '<div class="sedfab"><button class="fbed" aria-label="edit">'+EIC.edit+'</button><button class="fbkb" aria-label="keyboard">'+EIC.kb+'</button></div>'+
   '<div class="sedcon" hidden></div>'+
   '<div class="sedfoot"><button class="fcon" aria-label="console">'+EIC.term+'</button><span class="fpos"></span></div>'+
   '<div id="sedmbg" hidden></div><div id="sedm" hidden></div>';
  document.body.appendChild(w);
  const q=s=>w.querySelector(s);
  ED.w=w;ED.bg=bg;ED.ta=q('.sedta');ED.hl=q('.sedhl');ED.gut=q('.sedgut');ED.line=q('.sedline');ED.sc=q('.sedscroll');ED.con=q('.sedcon');ED.pos=q('.fpos');ED.find=q('.sedfind');
  q('.sedx').onclick=closeEditor;bg.onclick=closeEditor;
  q('.sedname').onclick=()=>edNameMenu();
  q('.sedsave').onclick=()=>edSave();
  q('.sedmore').onclick=()=>edMoreMenu();
  q('.fbkb').onclick=()=>{if(document.activeElement===ED.ta)ED.ta.blur();else ED.ta.focus()};
  q('.fbed').onclick=e=>edEditMenu(e.currentTarget);
  q('.fcon').onclick=()=>{if(ED.con.hidden)edRunCheck(true);else{ED.con.hidden=true;q('.fcon').classList.remove('on');edFab()}};
  $('sedmbg').onclick=edMenuClose;
  const ta=ED.ta;
  ta.addEventListener('input',e=>{
    if(e.inputType==='insertLineBreak'||(e.inputType==='insertText'&&e.data==null)){
      const p=ta.selectionStart,before=ta.value.slice(0,p-1),prev=before.slice(before.lastIndexOf('\n')+1);
      let ind=(/^[ \t]*/.exec(prev)||[''])[0];
      const tr=prev.replace(/\/\/.*$/,'').trim();
      if(/=>$/.test(tr)||/^(if|else|for|while|switch)\b/.test(tr))ind+='    ';
      if(ind)edInsert(ind,p,p,true);
    }
    edRefresh();edDraft();
  });
  ta.addEventListener('keydown',e=>{if(e.key==='Tab'){e.preventDefault();edInsert('    ',ta.selectionStart,ta.selectionEnd)}if((e.metaKey||e.ctrlKey)&&e.key==='s'){e.preventDefault();edSave()}});
  ['keyup','click','select','focus'].forEach(ev=>ta.addEventListener(ev,edPos));
  document.addEventListener('selectionchange',()=>{if(document.activeElement===ta)edPos()});
  /* trova e sostituisci */
  const ff=q('.ff'),fr=q('.fr');ff.placeholder=edt('findph');fr.placeholder=edt('replph');
  q('.f1').textContent=edt('repl1');q('.fa').textContent=edt('replall');
  ff.oninput=()=>edFindCount();
  ff.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();edFind(1)}};
  q('.fn').onclick=()=>edFind(1);q('.fp').onclick=()=>edFind(-1);
  q('.f1').onclick=()=>{const v=ta.value,a=ta.selectionStart,b=ta.selectionEnd;if(ff.value&&v.slice(a,b)===ff.value){edInsert(fr.value,a,b);}edFind(1)};
  q('.fa').onclick=()=>{if(!ff.value)return;const v=ta.value.split(ff.value).join(fr.value);if(v!==ta.value){edInsert(v,0,ta.value.length)}edFindCount()};
  q('.fx').onclick=()=>{ED.find.hidden=true};
  /* tastiera: la finestra si accorcia per non finire sotto */
  const vv=window.visualViewport;
  if(vv){const fit=()=>{if(!ED.open)return;w.style.setProperty('--sedh',vv.height+'px')};vv.addEventListener('resize',fit);vv.addEventListener('scroll',fit)}
}
function edApplyFs(){
  ED.w.style.setProperty('--edfs',ED.fs+'px');ED.w.style.setProperty('--edlh',Math.round(ED.fs*1.47)+'px');edRefresh();
}
function edLoad(s){
  ED.cur=s;ED.ta.value=s.code;s.code=undefined;delete s.code;
  edRefresh();edHead();edDraft();ED.sc.scrollTop=0;ED.sc.scrollLeft=0;
  if(!ED.con.hidden)edRunCheck(false);
}
function openEditor(){
  edBuild();
  ED.w.querySelector('.sedh b').textContent=edt('title');
  if(!ED.cur){
    const d=lsGet('tc_sdraft',null);
    if(d&&d.code!=null){const base=d.id?ED.list.find(x=>x.id===d.id):null;edLoad({id:base?base.id:null,name:d.name||edt('untitled'),kind:d.kind||edKindOf(d.code),code:d.code,saved:base?base.code:(d.saved||'')})}
    else if(ED.list.length){const s=ED.list[0];edLoad({id:s.id,name:s.name,kind:s.kind,code:s.code,saved:s.code})}
    else edLoad(edNew('indicator'));
  }
  ED.open=true;ED.bg.hidden=false;ED.w.hidden=false;ED.w.classList.add('hide');
  edApplyFs();edFab();
  requestAnimationFrame(()=>requestAnimationFrame(()=>ED.w.classList.remove('hide')));
}
function closeEditor(){
  if(!ED.open)return;
  ED.open=false;edDraft();edMenuClose();
  try{ED.ta.blur()}catch(e){}
  ED.w.classList.add('hide');ED.bg.hidden=true;
  setTimeout(()=>{if(!ED.open)ED.w.hidden=true},330);
}
function edHead(){
  const k=ED.cur.kind,n=ED.w.querySelector('.sedname');
  n.querySelector('i').innerHTML=k==='strategy'?EIC.strat:k==='library'?EIC.lib:EIC.ind;
  n.querySelector('b').textContent=ED.cur.name;
  const d=edDirty(),sv=ED.w.querySelector('.sedsave');
  n.querySelector('small').textContent=!ED.cur.id?'':d?'•':'';
  sv.classList.toggle('dirty',d||!ED.cur.id);sv.innerHTML=d||!ED.cur.id?EIC.cloud:EIC.cloudok;
}
var edRT=0;
function edRefresh(){
  const v=ED.ta.value;
  ED.hl.innerHTML=edHL(v)+'\n';
  const n=v.split('\n').length;let g='';for(let i=1;i<=n;i++)g+=i+'\n';ED.gut.textContent=g;ED.gut.dataset.l='';
  edPos();edHead();
  clearTimeout(edRT);if(!ED.con.hidden)edRT=setTimeout(()=>edRunCheck(false),600);
}
function edLineCol(){const ta=ED.ta,p=ta.selectionStart,b=ta.value.slice(0,p),l=b.split('\n').length,c=p-b.lastIndexOf('\n');return[l,c]}
function edPos(){
  if(!ED.ta)return;
  const[l,c]=edLineCol(),lh=Math.round(ED.fs*1.47);
  ED.pos.textContent=edt('line')+' '+l+', '+edt('col')+' '+c;
  ED.line.style.top=(10+(l-1)*lh)+'px';
  const g=ED.gut;const prev=g.querySelector('.on');
  if(g.dataset.l!==String(l)){g.dataset.l=String(l);const lines=g.textContent.split('\n');g.innerHTML=lines.map((x,i)=>i===l-1?'<b class="on">'+x+'</b>':x).join('\n')}
  void prev;
}
function edInsert(text,a,b,keep){
  const ta=ED.ta;
  try{ta.focus({preventScroll:true})}catch(e){ta.focus()}
  ta.setSelectionRange(a,b);
  let ok=false;try{ok=document.execCommand('insertText',false,text)}catch(e){}
  if(!ok||ta.value.slice(a,a+text.length)!==text){ta.setRangeText(text,a,b,'end')}
  if(!keep){edRefresh();edDraft()}
}
function edScrollToLine(l){const lh=Math.round(ED.fs*1.47);ED.sc.scrollTop=Math.max(0,10+(l-1)*lh-ED.sc.clientHeight/3)}
function edSelectLine(l){
  const v=ED.ta.value,ls=v.split('\n');let p=0;for(let i=0;i<Math.min(l-1,ls.length);i++)p+=ls[i].length+1;
  ED.ta.setSelectionRange(p,p+((ls[l-1]||'').length));edScrollToLine(l);edPos();
}

/* ---------- menu (foglio dal basso o riquadro) ---------- */
function edMenuClose(){$('sedm').hidden=true;$('sedmbg').hidden=true;ED.w.querySelector('.sedname').classList.remove('on')}
function edMenu(build,anchor){
  const m=$('sedm');m.innerHTML='';m.className=anchor?'pop':'';
  build(m);
  $('sedmbg').hidden=false;m.hidden=false;m.scrollTop=0;
  if(anchor){
    const r=anchor.getBoundingClientRect(),wr=ED.w.getBoundingClientRect(),mh=m.offsetHeight,mw=m.offsetWidth;
    let top=r.top-wr.top-mh-8;if(top<60)top=Math.min(r.bottom-wr.top+8,wr.height-mh-8);
    m.style.top=Math.max(8,top)+'px';m.style.left=Math.max(8,Math.min(wr.width-mw-8,r.right-wr.left-mw))+'px';
  }else{m.style.top='';m.style.left=''}
}
function smHead(m,txt,back){const h=document.createElement('div');h.className='smh';if(back){const b=document.createElement('button');b.innerHTML=EIC.back;b.onclick=back;h.appendChild(b)}const s=document.createElement('span');s.textContent=txt;h.appendChild(s);m.appendChild(h)}
function smItem(m,label,o={}){
  const b=document.createElement('button');b.className='smi'+(o.dis?' dis':'')+(o.danger?' danger':'');
  b.innerHTML=(o.ic?'<i>'+EIC[o.ic]+'</i>':'')+'<span></span>'+(o.sub?'<em>'+EIC.right+'</em>':'');
  const sp=b.querySelector('span');sp.textContent=label;
  if(o.note){const n=document.createElement('small');n.textContent=o.note;sp.appendChild(n)}
  b.onclick=()=>{if(!o.keep)edMenuClose();if(o.on)o.on()};
  m.appendChild(b);return b;
}
function smSep(m){const d=document.createElement('div');d.className='sms';m.appendChild(d)}
function smNote(m,t){const d=document.createElement('div');d.className='smnote';d.textContent=t;m.appendChild(d)}
function edPrompt(title,val,cb,num){
  edMenu(m=>{
    smHead(m,title);
    const i=document.createElement('input');i.className='smin';i.value=val||'';if(num){i.inputMode='numeric'}i.setAttribute('autocapitalize','sentences');m.appendChild(i);
    const r=document.createElement('div');r.className='smrow';
    const c=document.createElement('button');c.textContent=edt('cancel');c.onclick=edMenuClose;
    const o=document.createElement('button');o.className='pri';o.textContent=edt('ok');
    const go=()=>{const v=i.value.trim();if(!v)return;edMenuClose();cb(v)};
    o.onclick=go;i.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();go()}};
    r.appendChild(c);r.appendChild(o);m.appendChild(r);
    setTimeout(()=>{i.focus();i.select()},60);
  });
}

/* ---------- azioni ---------- */
function edSave(name){
  const c=ED.cur,code=ED.ta.value;
  if(!c.id&&!name){edPrompt(edt('namep'),c.name!==edt('untitled')?c.name:(edTitleOf(code)||c.name),v=>edSave(v));return}
  if(c.id&&code===c.saved&&!name){msg(edt('nochg'));return}
  const now=Date.now();
  let s=c.id?ED.list.find(x=>x.id===c.id):null;
  if(!s){s={id:'S'+now.toString(36)+Math.random().toString(36).slice(2,5),name:name||c.name,kind:edKindOf(code),code:'',ts:now,vers:[]};ED.list.unshift(s)}
  if(name)s.name=name;
  if(s.code&&s.code!==code){s.vers=[{ts:s.ts,code:s.code}].concat(s.vers||[]).slice(0,20)}
  s.code=code;s.ts=now;s.kind=edKindOf(code);
  ED.list=[s].concat(ED.list.filter(x=>x!==s));edSaveList();
  c.id=s.id;c.name=s.name;c.kind=s.kind;c.saved=code;
  edHead();edDraft();haptic();
  const errs=edCheck(code).filter(x=>x.lv==='e');
  ED.msgs.unshift({lv:'ok',m:edt('saved'),t:now});
  if(errs.length)edRunCheck(true);else msg(edt('saved'));
}
function edConfirmLeave(){return!edDirty()||confirm(edt('discq'))}
function edCreate(kind,code,name){
  if(!edConfirmLeave())return;
  edLoad(edNew(kind,code,name));
}
function edFab(){const f=ED.w.querySelector('.sedfab'),ft=ED.w.querySelector('.sedfoot');f.style.bottom=(ft.offsetHeight+(ED.con.hidden?0:ED.con.offsetHeight)+12)+'px'}
function edRunCheck(open){
  const res=edCheck(ED.ta.value),con=ED.con,btn=ED.w.querySelector('.fcon');
  const nE=res.filter(x=>x.lv==='e').length;
  btn.querySelector('s')&&btn.querySelector('s').remove();
  if(nE){const s=document.createElement('s');s.textContent=nE;btn.appendChild(s)}
  if(!open&&con.hidden)return;
  con.hidden=false;btn.classList.add('on');
  con.innerHTML='<div class="ch"><span></span><span></span></div>';
  con.firstChild.firstChild.textContent=edt('console');
  const tm=new Date().toLocaleTimeString(LOC[lang]||'it-IT',{hour:'2-digit',minute:'2-digit',second:'2-digit'});
  con.firstChild.lastChild.textContent=tm;
  if(!res.length){const r=document.createElement('div');r.className='cm ok';r.innerHTML='<i>✓</i><span></span>';r.lastChild.textContent=edt('chkok');con.appendChild(r)}
  res.forEach(x=>{
    const r=document.createElement('button');r.className='cm '+x.lv;
    r.innerHTML='<i></i><em></em><span></span>';
    r.children[0].textContent=x.lv==='e'?edt('err'):edt('warn');
    r.children[1].textContent=edt('in_line')+' '+x.l;
    r.children[2].textContent=x.m;
    r.onclick=()=>edSelectLine(x.l);
    con.appendChild(r);
  });
  edFab();
}
function edFindCount(){
  const f=ED.find.querySelector('.ff').value,c=ED.find.querySelector('.fc');
  if(!f){c.textContent='';return 0}
  const n=ED.ta.value.split(f).length-1;c.textContent=n===1?edt('nres1'):n?edt('nres',{n}):edt('nf');return n;
}
function edFind(dir){
  const f=ED.find.querySelector('.ff').value,ta=ED.ta,v=ta.value;if(!f)return;
  let i=dir>0?v.indexOf(f,ta.selectionEnd):v.lastIndexOf(f,Math.max(0,ta.selectionStart-1));
  if(i<0)i=dir>0?v.indexOf(f):v.lastIndexOf(f);
  if(i<0){edFindCount();return}
  ta.setSelectionRange(i,i+f.length);
  edScrollToLine(v.slice(0,i).split('\n').length);edPos();edFindCount();
}
function edToggleComment(){
  const ta=ED.ta,v=ta.value,a=v.lastIndexOf('\n',ta.selectionStart-1)+1;let b=v.indexOf('\n',Math.max(ta.selectionEnd-(ta.selectionEnd>ta.selectionStart&&v[ta.selectionEnd-1]==='\n'?1:0),a));if(b<0)b=v.length;
  const ls=v.slice(a,b).split('\n'),all=ls.filter(x=>x.trim()).every(x=>/^\s*\/\//.test(x));
  const out=ls.map(x=>!x.trim()?x:all?x.replace(/^(\s*)\/\/ ?/,'$1'):x.replace(/^(\s*)/,'$1// ')).join('\n');
  edInsert(out,a,b);ta.setSelectionRange(a,a+out.length);
}
async function edCopy(text){try{await navigator.clipboard.writeText(text);msg(edt('copied'))}catch(e){}}

/* menu del nome dello script */
function edNameMenu(){
  ED.w.querySelector('.sedname').classList.add('on');
  edMenu(m=>{
    const c=ED.cur;
    smItem(m,edt('save'),{ic:'cloud',on:()=>edSave()});
    smItem(m,edt('copy'),{ic:'copy',dis:!c.id,on:()=>edPrompt(edt('namep'),edt('copyof')+c.name,v=>{const code=ED.ta.value;const s=edNew(edKindOf(code),code,v);edLoad(s);edSave(v)})});
    smItem(m,edt('rename'),{ic:'pen',on:()=>edPrompt(edt('namep'),c.name,v=>{c.name=v;if(c.id){const s=ED.list.find(x=>x.id===c.id);if(s){s.name=v;edSaveList()}}edHead();edDraft()})});
    const s=c.id?ED.list.find(x=>x.id===c.id):null;
    smItem(m,edt('history'),{ic:'hist',dis:!(s&&s.vers&&s.vers.length),keep:true,on:()=>edHistMenu(s)});
    smSep(m);
    smItem(m,edt('open'),{ic:'folder',sub:true,keep:true,on:()=>edOpenMenu()});
    smItem(m,edt('create'),{ic:'plus',sub:true,keep:true,on:()=>edCreateMenu()});
  });
}
function edCreateMenu(){
  edMenu(m=>{
    smHead(m,edt('create'),edNameMenu);
    smItem(m,edt('ind'),{ic:'ind',on:()=>edCreate('indicator')});
    smItem(m,edt('strat'),{ic:'strat',on:()=>edCreate('strategy')});
    smItem(m,edt('lib'),{ic:'lib',on:()=>edCreate('library')});
    smSep(m);
    smItem(m,edt('builtin'),{ic:'builtin',sub:true,keep:true,on:()=>edBuiltinMenu()});
  });
}
function edBuiltinMenu(){
  edMenu(m=>{
    smHead(m,edt('builtin').replace('…',''),edCreateMenu);
    ED_BUILTIN.forEach(([n,code])=>smItem(m,n,{ic:'builtin',on:()=>edCreate('indicator',code,n)}));
  });
}
function edOpenMenu(){
  edMenu(m=>{
    smHead(m,edt('mine'),edNameMenu);
    if(!ED.list.length){smNote(m,edt('empty'));return}
    ED.list.forEach(s=>{
      const d=new Date(s.ts).toLocaleDateString(LOC[lang]||'it-IT',{day:'2-digit',month:'short'});
      const it=smItem(m,s.name,{ic:s.kind==='strategy'?'strat':s.kind==='library'?'lib':'ind',note:edt(s.kind==='strategy'?'strat':s.kind==='library'?'lib':'ind')+' · '+(s.code||'').split('\n').length+' '+edt('lines')+' · '+d,
        on:()=>{if(ED.cur&&ED.cur.id===s.id)return;if(!edConfirmLeave())return;edLoad({id:s.id,name:s.name,kind:s.kind,code:s.code,saved:s.code})}});
      if(ED.cur&&ED.cur.id===s.id)it.style.background='var(--glasssel)';
    });
  });
}
function edHistMenu(s){
  edMenu(m=>{
    smHead(m,edt('history').replace('…',''),edNameMenu);
    if(!s||!s.vers||!s.vers.length){smNote(m,edt('nover'));return}
    s.vers.forEach(v=>{
      const d=new Date(v.ts).toLocaleString(LOC[lang]||'it-IT',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'});
      smItem(m,d,{ic:'hist',note:v.code.split('\n').length+' '+edt('lines'),on:()=>{edInsert(v.code,0,ED.ta.value.length);ED.ta.blur();msg(edt('verload'))}});
    });
  });
}
function edMoreMenu(){
  edMenu(m=>{
    smItem(m,edt('addchart'),{ic:'chart',keep:true,on:()=>edMenu(mm=>{smHead(mm,edt('addchart'),edMoreMenu);smNote(mm,edt('soonrun'))})});
    smItem(m,edt('check'),{ic:'check',on:()=>edRunCheck(true)});
    smItem(m,edt('find'),{ic:'search',on:()=>{ED.find.hidden=false;const f=ED.find.querySelector('.ff');const sel=ED.ta.value.slice(ED.ta.selectionStart,ED.ta.selectionEnd);if(sel&&!sel.includes('\n'))f.value=sel;edFindCount();setTimeout(()=>f.focus(),50)}});
    smSep(m);
    smItem(m,edt('bigger'),{ic:'aa',keep:true,on:()=>{ED.fs=Math.min(22,ED.fs+1);lsSet('tc_edfs',ED.fs);edApplyFs()}});
    smItem(m,edt('smaller'),{ic:'aa',keep:true,on:()=>{ED.fs=Math.max(11,ED.fs-1);lsSet('tc_edfs',ED.fs);edApplyFs()}});
    if(ED.cur&&ED.cur.id){
      smSep(m);
      smItem(m,edt('del'),{ic:'trash',danger:true,on:()=>{
        if(!confirm(edt('delq')))return;
        ED.list=ED.list.filter(x=>x.id!==ED.cur.id);edSaveList();
        const n=ED.list[0];edLoad(n?{id:n.id,name:n.name,kind:n.kind,code:n.code,saved:n.code}:edNew('indicator'));msg(edt('deleted'));
      }});
    }
  });
}
/* menu di modifica (come la pressione lunga nell'editor) */
function edEditMenu(anchor){
  const ta=ED.ta,a=ta.selectionStart,b=ta.selectionEnd,sel=b>a;
  edMenu(m=>{
    smItem(m,edt('selall'),{on:()=>{ta.focus();ta.setSelectionRange(0,ta.value.length);edPos()}});
    smItem(m,edt('copyall'),{on:()=>edCopy(ta.value)});
    smItem(m,edt('discard'),{dis:!edDirty()||!ED.cur.id,on:()=>{edInsert(ED.cur.saved,0,ta.value.length);ta.blur()}});
    smSep(m);
    smItem(m,edt('cut'),{dis:!sel,on:()=>{edCopy(ta.value.slice(a,b));edInsert('',a,b)}});
    smItem(m,edt('copyx'),{dis:!sel,on:()=>edCopy(ta.value.slice(a,b))});
    smItem(m,edt('paste'),{on:async()=>{try{const tx=await navigator.clipboard.readText();edInsert(tx,a,b)}catch(e){msg(edt('pastefail'))}}});
    smSep(m);
    smItem(m,edt('comment'),{on:edToggleComment});
    smItem(m,edt('find'),{on:()=>{ED.find.hidden=false;const f=ED.find.querySelector('.ff');if(sel&&!ta.value.slice(a,b).includes('\n'))f.value=ta.value.slice(a,b);edFindCount();setTimeout(()=>f.focus(),50)}});
    smItem(m,edt('gotoline'),{on:()=>edPrompt(edt('linep'),String(edLineCol()[0]),v=>{const n=parseInt(v,10);if(n>0)edSelectLine(n)},true)});
  },anchor);
}


/* =====================================================================
   MOTORE PINE — 1) lettura del testo (lexer) e analisi (parser)
   Supporta Pine v5 e v6: rientri a 4 spazi, righe spezzate, tipi,
   funzioni, metodi, switch, for/while, tuple, generics array<T>.
   ===================================================================== */
function PINE_SRC(){
'use strict';
function PErr(msg,ln){const e=new Error(msg);e.pine=true;e.ln=ln||0;return e}

/* ---------------- lexer ---------------- */
const OPS2=[':=','+=','-=','*=','/=','%=','==','!=','<=','>=','=>'];
const CONT_END=new Set([',','+','-','*','/','%','?',':','==','!=','<','>','<=','>=','and','or','not','=',':=','+=','-=','*=','/=','%=']);
function lex(src){
  const T=[],lines=String(src).replace(/\r\n?/g,'\n').split('\n'),stack=[0];
  let depth=0,started=false,prevLast=null;
  for(let li=0;li<lines.length;li++){
    const s=lines[li],n=s.length,ln=li+1;let i=0,ind=0;
    while(i<n&&(s[i]===' '||s[i]==='\t')){ind+=s[i]==='\t'?4:1;i++}
    const lt=[],d0=depth;
    while(i<n){
      const c=s[i];
      if(c===' '||c==='\t'){i++;continue}
      if(c==='/'&&s[i+1]==='/')break;
      const col=i+1;
      if(c==='"'||c==="'"){
        let j=i+1,str='';
        while(j<n&&s[j]!==c){if(s[j]==='\\'&&j+1<n){const e=s[j+1];str+=e==='n'?'\n':e==='t'?'\t':e;j+=2;continue}str+=s[j];j++}
        if(j>=n)throw PErr('testo tra virgolette non chiuso',ln);
        lt.push({k:'str',v:str,ln,col});i=j+1;continue;
      }
      if(c==='#'){const m=/^#([0-9a-fA-F]{8}|[0-9a-fA-F]{6})(?![0-9a-fA-F])/.exec(s.slice(i));if(m){lt.push({k:'col',v:m[0],ln,col});i+=m[0].length;continue}}
      if((c>='0'&&c<='9')||(c==='.'&&s[i+1]>='0'&&s[i+1]<='9')){
        const m=/^(\d+\.?\d*(?:[eE][+-]?\d+)?|\.\d+(?:[eE][+-]?\d+)?)/.exec(s.slice(i));
        lt.push({k:'num',v:parseFloat(m[0]),int:!/[.eE]/.test(m[0]),ln,col});i+=m[0].length;continue;
      }
      if(/[A-Za-z_]/.test(c)){const m=/^[A-Za-z_][A-Za-z0-9_]*/.exec(s.slice(i));lt.push({k:'id',v:m[0],ln,col});i+=m[0].length;continue}
      const two=s.substr(i,2);
      if(OPS2.includes(two)){lt.push({k:'op',v:two,ln,col});i+=2;continue}
      if('+-*/%<>=?:,.()[]{}'.includes(c)){
        if(c==='('||c==='[')depth++;else if(c===')'||c===']')depth=Math.max(0,depth-1);
        lt.push({k:'op',v:c,ln,col});i++;continue;
      }
      throw PErr('carattere non valido «'+c+'»',ln);
    }
    if(!lt.length)continue;
    const cont=started&&(d0>0||ind%4!==0||(prevLast!=null&&CONT_END.has(prevLast)));
    if(!cont){
      if(started)T.push({k:'nl',ln});
      if(ind>stack[stack.length-1]){stack.push(ind);T.push({k:'ind',ln})}
      else{while(ind<stack[stack.length-1]){stack.pop();T.push({k:'ded',ln})}if(ind!==stack[stack.length-1])throw PErr('rientro non valido',ln)}
    }
    for(const t of lt)T.push(t);
    started=true;
    const L=lt[lt.length-1];prevLast=(L.k==='op'||(L.k==='id'&&(L.v==='and'||L.v==='or'||L.v==='not')))?L.v:null;
  }
  const ln=lines.length;
  T.push({k:'nl',ln});while(stack.length>1){stack.pop();T.push({k:'ded',ln})}
  T.push({k:'eof',ln});
  return T;
}

/* ---------------- parser ---------------- */
let NID=1;
function P(T){this.T=T;this.p=0}
const pp=P.prototype;
pp.pk=function(o){return this.T[this.p+(o||0)]};
pp.nx=function(){return this.T[this.p++]};
pp.isOp=function(v,o){const t=this.pk(o);return t&&t.k==='op'&&t.v===v};
pp.isId=function(v,o){const t=this.pk(o);return t&&t.k==='id'&&(v==null||t.v===v)};
pp.err=function(m,t){t=t||this.pk();return PErr(m,t&&t.ln)};
pp.expOp=function(v){const t=this.nx();if(!t||t.k!=='op'||t.v!==v)throw this.err('atteso «'+v+'»'+(t&&t.v!=null?' invece di «'+t.v+'»':''),t);return t};
pp.expId=function(v){const t=this.nx();if(!t||t.k!=='id'||(v&&t.v!==v))throw this.err(v?'atteso «'+v+'»':'atteso un nome'+(t&&t.v!=null?' invece di «'+t.v+'»':''),t);return t.v};
pp.N=function(o,t){o.id=NID++;o.ln=(t||this.T[Math.max(0,this.p-1)]||{}).ln||0;return o};
pp.skipNl=function(){while(this.pk().k==='nl')this.nx()};
pp.endStmt=function(){const t=this.pk(),pv=this.T[this.p-1];if(pv&&pv.k==='ded')return;if(t.k==='nl'||t.k==='ded'||t.k==='eof')return;throw this.err('fine riga attesa, trovato «'+(t.v!=null?t.v:t.k)+'»')};
pp.program=function(){const body=[];for(;;){this.skipNl();if(this.pk().k==='eof')break;if(this.pk().k==='ind')throw this.err('rientro inatteso');body.push(this.stmt());this.endStmt()}return body};
pp.block=function(){
  const t=this.pk();if(t.k!=='nl')throw this.err('a capo atteso');this.nx();
  if(this.pk().k!=='ind')throw this.err('blocco rientrato atteso');this.nx();
  const out=[];
  for(;;){this.skipNl();const k=this.pk().k;if(k==='ded'){this.nx();break}if(k==='eof')break;out.push(this.stmt());this.endStmt()}
  return out;
};
const QUAL=new Set(['series','simple','const','input']);
pp.genericAt=function(o){
  if(!this.isOp('<',o))return 0;let j=o+1;
  for(;;){if(!this.isId(null,j))return 0;j++;if(this.isOp('<',j)){const g=this.genericAt(j);if(!g)return 0;j+=g}if(this.isOp(',',j)){j++;continue}if(this.isOp('>',j))return j+1-o;return 0}
};
pp.typeLen=function(o){let j=o;while(this.isId(null,j)&&QUAL.has(this.pk(j).v)&&this.isId(null,j+1))j++;if(!this.isId(null,j))return 0;j++;const g=this.genericAt(j);if(g)j+=g;return j-o};
pp.isTypedDecl=function(){const L=this.typeLen(0);return L>0&&this.isId(null,L)&&this.isOp('=',L+1)};
pp.matchClose=function(o){const open=this.pk(o).v,close=open==='('?')':']';let d=0,j=o;for(;;){const t=this.pk(j);if(!t||t.k==='eof')return -1;if(t.k==='op'){if(t.v==='('||t.v==='[')d++;else if(t.v===')'||t.v===']'){d--;if(d===0)return t.v===close?j:-1}}j++}};
pp.stmt=function(){
  const t=this.pk();
  if(t.k==='id'){
    const v=t.v;
    if(v==='if'||v==='for'||v==='while'||v==='switch')return this.N({t:'expr',e:this.expr()},t);
    if(v==='break'||v==='continue'){this.nx();return this.N({t:v},t)}
    if(v==='type'&&this.isId(null,1)&&this.pk(2).k==='nl')return this.typeDef();
    if(v==='export'){this.nx();return this.stmt()}
    if(v==='method'&&this.isId(null,1)){this.nx();return this.fnDef(true)}
    if(v==='import')throw this.err('«import» di librerie esterne non è supportato');
    if(v==='var'||v==='varip'){this.nx();return this.decl(v,t)}
    if(this.isOp('(',1)){const j=this.matchClose(1);if(j>0&&this.isOp('=>',j+1))return this.fnDef(false)}
    if(this.isTypedDecl())return this.decl(null,t);
    if(this.isOp('=',1))return this.decl(null,t);
  }
  if(t.k==='op'&&t.v==='['){const j=this.matchClose(0);if(j>0&&this.isOp('=',j+1)){
    this.nx();const names=[];for(;;){names.push(this.expId());if(this.isOp(',')){this.nx();continue}break}
    this.expOp(']');this.expOp('=');return this.N({t:'tdecl',names,e:this.expr()},t);
  }}
  const e=this.expr(),o=this.pk();
  if(o.k==='op'&&(o.v===':='||o.v==='+='||o.v==='-='||o.v==='*='||o.v==='/='||o.v==='%=')){
    if(e.t!=='name'&&e.t!=='mem')throw this.err('assegnazione non valida');
    this.nx();return this.N({t:'asg',tgt:e,op:o.v,e:this.expr()},t);
  }
  if(o.k==='op'&&o.v==='=')throw this.err('usa «:=» per cambiare il valore di una variabile già dichiarata');
  return this.N({t:'expr',e},t);
};
pp.decl=function(mode,t0){
  let typ=null;
  if(this.isTypedDecl()){const L=this.typeLen(0);typ=[];for(let k=0;k<L;k++)typ.push(this.nx().v);typ=typ.join(' ')}
  const name=this.expId();this.expOp('=');
  return this.N({t:'decl',mode,typ,name,e:this.expr()},t0);
};
pp.params=function(){
  this.expOp('(');const ps=[];
  if(this.isOp(')')){this.nx();return ps}
  for(;;){
    const ids=[];
    while(this.isId()){ids.push(this.nx().v);const g=this.genericAt(0);if(g)this.p+=g}
    if(!ids.length)throw this.err('parametro atteso');
    let def=null;if(this.isOp('=')){this.nx();def=this.expr()}
    ps.push({name:ids[ids.length-1],typ:ids.length>1?ids[ids.length-2]:null,def});
    if(this.isOp(',')){this.nx();continue}
    this.expOp(')');break;
  }
  return ps;
};
pp.fnDef=function(isMethod){
  const t=this.pk(),name=this.expId(),params=this.params();this.expOp('=>');
  let body;if(this.pk().k==='nl')body=this.block();else body=[this.stmt()];
  return this.N({t:'fn',name,params,body,isMethod},t);
};
pp.typeDef=function(){
  const t=this.nx(),name=this.expId(),fields=[];
  this.expect=null;if(this.pk().k!=='nl')throw this.err('a capo atteso');this.nx();if(this.pk().k!=='ind')throw this.err('campi del tipo attesi');this.nx();
  for(;;){
    this.skipNl();const k=this.pk().k;if(k==='ded'){this.nx();break}if(k==='eof')break;
    const ids=[];while(this.isId()){ids.push(this.nx().v);const g=this.genericAt(0);if(g)this.p+=g}
    if(ids.length<1)throw this.err('campo non valido');
    let def=null;if(this.isOp('=')){this.nx();def=this.expr()}
    fields.push({name:ids[ids.length-1],typ:ids[ids.length-2]||null,def});
  }
  return this.N({t:'type',name,fields},t);
};
/* espressioni */
pp.expr=function(){return this.tern()};
pp.tern=function(){const t=this.pk(),c=this.or();if(this.isOp('?')){this.nx();const a=this.tern();this.expOp(':');const b=this.tern();return this.N({t:'tern',c,a,b},t)}return c};
pp.binLoop=function(next,ops,isWord){let a=next.call(this);for(;;){const t=this.pk();if(isWord?(t.k==='id'&&ops.includes(t.v)):(t.k==='op'&&ops.includes(t.v))){this.nx();const b=next.call(this);a=this.N({t:'bin',op:t.v,a,b},t)}else return a}};
pp.or=function(){return this.binLoop(this.and,['or'],true)};
pp.and=function(){return this.binLoop(this.eq,['and'],true)};
pp.eq=function(){return this.binLoop(this.rel,['==','!='])};
pp.rel=function(){return this.binLoop(this.add,['<','>','<=','>='])};
pp.add=function(){return this.binLoop(this.mul,['+','-'])};
pp.mul=function(){return this.binLoop(this.un,['*','/','%'])};
pp.un=function(){const t=this.pk();if((t.k==='op'&&(t.v==='-'||t.v==='+'))||(t.k==='id'&&t.v==='not')){this.nx();return this.N({t:'un',op:t.v,a:this.un()},t)}return this.post()};
pp.post=function(){
  let e=this.prim();
  for(;;){
    const t=this.pk(),pv=this.T[this.p-1];
    if(pv&&pv.k==='ded')return e;
    if(t.k==='op'&&t.v==='.'){this.nx();const p=this.expId();e=this.N({t:'mem',o:e,p},t);continue}
    if(t.k==='op'&&t.v==='<'){const g=this.genericAt(0);if(g&&this.isOp('(',g)){this.p+=g;continue}}
    if(t.k==='op'&&t.v==='('){e=this.call(e);continue}
    if(t.k==='op'&&t.v==='['){this.nx();const n=this.expr();this.expOp(']');e=this.N({t:'idx',o:e,n},t);continue}
    return e;
  }
};
pp.call=function(f){
  const t=this.expOp('('),args=[],kw={};
  if(this.isOp(')')){this.nx();return this.N({t:'call',f,args,kw},t)}
  for(;;){
    if(this.isId()&&this.isOp('=',1)){const k=this.nx().v;this.nx();kw[k]=this.expr()}
    else{if(Object.keys(kw).length)throw this.err('argomento senza nome dopo uno con nome');args.push(this.expr())}
    if(this.isOp(',')){this.nx();continue}
    this.expOp(')');break;
  }
  return this.N({t:'call',f,args,kw},t);
};
pp.prim=function(){
  const t=this.pk();
  if(t.k==='num'){this.nx();return this.N({t:'lit',v:t.v,int:t.int},t)}
  if(t.k==='str'){this.nx();return this.N({t:'lit',v:t.v},t)}
  if(t.k==='col'){this.nx();return this.N({t:'col',v:t.v},t)}
  if(t.k==='id'){
    switch(t.v){
      case 'true':this.nx();return this.N({t:'lit',v:true},t);
      case 'false':this.nx();return this.N({t:'lit',v:false},t);
      case 'na':if(!this.isOp('(',1)){this.nx();return this.N({t:'lit',v:NaN},t)}break;
      case 'if':return this.ifE();
      case 'for':return this.forE();
      case 'while':{this.nx();const c=this.expr();return this.N({t:'while',c,body:this.block()},t)}
      case 'switch':return this.switchE();
    }
    this.nx();return this.N({t:'name',n:t.v},t);
  }
  if(t.k==='op'&&t.v==='('){this.nx();const e=this.expr();this.expOp(')');return e}
  if(t.k==='op'&&t.v==='['){this.nx();const items=[];if(!this.isOp(']'))for(;;){items.push(this.expr());if(this.isOp(',')){this.nx();continue}break}this.expOp(']');return this.N({t:'tuple',items},t)}
  throw this.err(t.k==='nl'||t.k==='eof'?'espressione incompleta':'«'+(t.v!=null?t.v:t.k)+'» inatteso');
};
pp.ifE=function(){
  const t=this.nx(),c=this.expr(),then=this.block();let els=null;
  if(this.isId('else')){this.nx();if(this.isId('if'))els=[this.N({t:'expr',e:this.ifE()})];else els=this.block()}
  return this.N({t:'if',c,then,els},t);
};
pp.forE=function(){
  const t=this.nx();
  if(this.isOp('[')){this.nx();const a=this.expId();this.expOp(',');const b=this.expId();this.expOp(']');this.expId('in');const arr=this.expr();return this.N({t:'forin',a,b,arr,body:this.block()},t)}
  if(this.isId()&&this.isId('in',1)){const a=this.expId();this.nx();const arr=this.expr();return this.N({t:'forin',a:null,b:a,arr,body:this.block()},t)}
  const v=this.expId();this.expOp('=');const from=this.expr();this.expId('to');const to=this.expr();let by=null;if(this.isId('by')){this.nx();by=this.expr()}
  return this.N({t:'for',v,from,to,by,body:this.block()},t);
};
pp.switchE=function(){
  const t=this.nx();let subj=null;if(this.pk().k!=='nl')subj=this.expr();
  this.nx();if(this.pk().k!=='ind')throw this.err('casi dello switch attesi');this.nx();
  const cases=[];
  for(;;){
    this.skipNl();const k=this.pk().k;if(k==='ded'){this.nx();break}if(k==='eof')break;
    let c=null;if(this.isOp('=>'))this.nx();else{c=this.expr();this.expOp('=>')}
    const body=this.pk().k==='nl'?this.block():[this.stmt()];
    cases.push({c,body});this.endStmt();
  }
  return this.N({t:'switch',subj,cases},t);
};
function parse(src){
  const T=lex(src),p=new P(T);
  const body=p.program();
  const vm=/\/\/\s*@version\s*=\s*(\d+)/.exec(src);
  return{body,version:vm?+vm[1]:5};
}

/* =====================================================================
   MOTORE PINE — 2) esecuzione candela per candela
   ===================================================================== */
const isNa=x=>x===undefined||x===null||(typeof x==='number'&&x!==x);
const tru=x=>x===true||(x!==false&&x!=null&&x===x&&x!==0&&x!=='');
const num=x=>(x===true?1:x===false?0:x);

/* ---------- colori ---------- */
function mkc(r,g,b,t){return{__c:1,r,g,b,t:t==null?0:t}}
function hexc(h){h=h.replace('#','');const a=h.length===8?parseInt(h.slice(6,8),16):255;return mkc(parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16),Math.round((1-a/255)*100))}
function css(c){if(!c||!c.__c)return null;const a=Math.max(0,Math.min(1,(100-c.t)/100));return a<=0?null:'rgba('+Math.round(c.r)+','+Math.round(c.g)+','+Math.round(c.b)+','+(+a.toFixed(3))+')'}
const COLORS={aqua:'#00BCD4',black:'#363A45',blue:'#2196F3',fuchsia:'#E040FB',gray:'#787B86',green:'#4CAF50',lime:'#00E676',maroon:'#880E4F',navy:'#311B92',olive:'#808000',orange:'#FF9800',purple:'#9C27B0',red:'#FF5252',silver:'#B2B5BE',teal:'#00897B',white:'#FFFFFF',yellow:'#FFEB3B'};

/* ---------- variabili con storico ---------- */
function V(){this.h=[];this.cur=NaN;this.cb=-1;this.iv=false;this.init=false}
function vget(E,v){return(v.cb===E.bar||v.iv||E.sec)?v.cur:NaN}
function vset(E,v,x){
  if(E.sec){v.cur=x;return x}
  if(v.cb!==E.bar){if(v.iv&&v.cb>=0)for(let i=v.cb+1;i<E.bar;i++)v.h[i]=v.cur;v.cb=E.bar}
  v.cur=x;v.h[E.bar]=x;return x;
}
function vhist(E,v,n){
  if(E.sec)return v.cur;
  n=Math.round(n);if(n===0)return vget(E,v);if(!(n>0))return NaN;
  const i=E.bar-n;if(i<0)return NaN;
  if(i>v.cb)return v.iv?v.cur:NaN;
  const x=v.h[i];if(x!==undefined)return x;
  if(v.iv)for(let j=i-1;j>=0;j--)if(v.h[j]!==undefined)return v.h[j];
  return NaN;
}
function Ctx(nl){this.L=[];for(let i=0;i<nl;i++)this.L.push(new V());this.S=new Map();this.K=new Map()}
function gst(E,id){let s=E.C.S.get(id);if(!s){s={b:-1};E.C.S.set(id,s)}return s}
function sub(s,k){return s[k]||(s[k]={b:-1})}

/* ---------- aiuti per gli indicatori ---------- */
function buf(s,E,x,k){
  k=k||'a';let a=s[k];if(!a){a=s[k]=[];s[k+'b']=-1}
  if(s[k+'b']!==E.bar){a.push(x);s[k+'b']=E.bar;if(a.length>8000)a.splice(0,2000)}else a[a.length-1]=x;
  return a;
}
function last(a,len){len=Math.round(len);if(!(len>0)||a.length<len)return null;return a.slice(a.length-len)}
function emaStep(s,E,x,len,alpha){
  len=Math.max(1,Math.round(len));
  if(s.b!==E.bar){s.b=E.bar;s.P=s.C||{n:0,sum:0,v:NaN}}
  const P=s.P;let C;
  if(x!==x||x==null)C={n:P.n,sum:P.sum,v:P.v,o:NaN};
  else if(P.n<len-1)C={n:P.n+1,sum:P.sum+x,v:NaN,o:NaN};
  else if(P.n===len-1){const v=(P.sum+x)/len;C={n:len,sum:0,v,o:v}}
  else{const v=alpha*x+(1-alpha)*P.v;C={n:P.n,sum:0,v,o:v}}
  s.C=C;return C.o;
}
const ema=(s,E,x,len)=>emaStep(s,E,x,len,2/(Math.round(len)+1));
const rma=(s,E,x,len)=>emaStep(s,E,x,len,1/Math.round(len));
function smaA(a,len){const w=last(a,len);if(!w)return NaN;let t=0;for(const x of w){if(x!==x)return NaN;t+=x}return t/w.length}
function stdevA(a,len,biased){const w=last(a,len);if(!w)return NaN;let m=0;for(const x of w){if(x!==x)return NaN;m+=x}m/=w.length;let v=0;for(const x of w)v+=(x-m)*(x-m);return Math.sqrt(v/(biased===false?w.length-1:w.length))}
function wmaA(a,len){const w=last(a,len);if(!w)return NaN;let t=0,d=0;for(let i=0;i<w.length;i++){if(w[i]!==w[i])return NaN;t+=w[i]*(i+1);d+=i+1}return t/d}
function trNow(E,handle){const b=E.bar,D=E.D;if(b===0)return handle===false?NaN:D.h[b]-D.l[b];const pc=D.c[b-1];return Math.max(D.h[b]-D.l[b],Math.abs(D.h[b]-pc),Math.abs(D.l[b]-pc))}
function srcAt(E,k){const D=E.D,b=E.bar;switch(k){case 'open':return D.o[b];case 'high':return D.h[b];case 'low':return D.l[b];case 'close':return D.c[b];case 'volume':return D.v?D.v[b]:NaN;case 'hl2':return(D.h[b]+D.l[b])/2;case 'hlc3':return(D.h[b]+D.l[b]+D.c[b])/3;case 'ohlc4':return(D.o[b]+D.h[b]+D.l[b]+D.c[b])/4;case 'hlcc4':return(D.h[b]+D.l[b]+2*D.c[b])/4}return NaN}
const SERIES=new Set(['open','high','low','close','volume','hl2','hlc3','ohlc4','hlcc4','time','time_close','bar_index']);
function seriesAt(E,k,i){const D=E.D;if(i<0||i>=E.n)return NaN;switch(k){case 'open':return D.o[i];case 'high':return D.h[i];case 'low':return D.l[i];case 'close':return D.c[i];case 'volume':return D.v?D.v[i]:NaN;case 'hl2':return(D.h[i]+D.l[i])/2;case 'hlc3':return(D.h[i]+D.l[i]+D.c[i])/3;case 'ohlc4':return(D.o[i]+D.h[i]+D.l[i]+D.c[i])/4;case 'hlcc4':return(D.h[i]+D.l[i]+2*D.c[i])/4;case 'time':return D.t[i];case 'time_close':return D.t[i]+E.tfMs;case 'bar_index':return i}return NaN}

/* ---------- tempo, timeframe, sessioni ---------- */
function tfNorm(tf){
  tf=String(tf==null?'':tf).trim().toUpperCase();
  if(tf==='')return'';
  let m=/^(\d*)([SDWM]?)$/.exec(tf);if(!m)return tf;
  const n=m[1]===''?1:+m[1],u=m[2];
  if(u==='')return String(n);
  if(u==='S')return n+'S';
  return(n===1?'':n)+u;
}
function tfMsOf(tf){tf=tfNorm(tf);let m=/^(\d*)([SDWM]?)$/.exec(tf);if(!m)return 60000;const n=m[1]===''?1:+m[1],u=m[2];return u===''?n*60000:u==='S'?n*1000:u==='D'?n*864e5:u==='W'?n*6048e5:n*2592e6}
const TZC=new Map();
function tzOff(tz,ms){
  if(!tz)return 0;tz=String(tz).trim();
  if(/^(UTC|GMT|Etc\/UTC|Etc\/GMT|Z)$/i.test(tz))return 0;
  const m=/^(?:UTC|GMT)\s*([+-])\s*(\d{1,2})(?::?(\d{2}))?$/i.exec(tz);
  if(m)return(m[1]==='-'?-1:1)*((+m[2])*60+(+(m[3]||0)));
  const key=tz+'|'+Math.floor(ms/36e5);if(TZC.has(key))return TZC.get(key);
  let off=0;
  try{const f=new Intl.DateTimeFormat('en-US',{timeZone:tz,hourCycle:'h23',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit'});const p={};f.formatToParts(new Date(ms)).forEach(x=>p[x.type]=x.value);off=Math.round((Date.UTC(+p.year,+p.month-1,+p.day,+p.hour%24,+p.minute)-Math.floor(ms/60000)*60000)/60000)}catch(e){off=0}
  if(TZC.size>5000)TZC.clear();TZC.set(key,off);return off;
}
const SESC=new Map();
function sessParse(s){
  if(SESC.has(s))return SESC.get(s);
  const out=[];
  String(s).split(',').forEach(p=>{const m=/^\s*(\d{2})(\d{2})-(\d{2})(\d{2})(?::(\d+))?\s*$/.exec(p);if(!m)return;out.push({s:+m[1]*60+(+m[2]),e:+m[3]*60+(+m[4]),d:new Set((m[5]||'1234567').split('').map(Number))})});
  SESC.set(s,out);return out;
}
function inSess(ms,sess,tz){
  const L=sessParse(sess);if(!L.length)return false;
  const loc=new Date(ms+tzOff(tz,ms)*60000),m=loc.getUTCHours()*60+loc.getUTCMinutes(),dw=loc.getUTCDay()+1;
  for(const x of L){
    if(x.s===x.e){if(x.d.has(dw))return true;continue}
    if(x.s<x.e){if(m>=x.s&&m<x.e&&x.d.has(dw))return true}
    else{if(m>=x.s&&x.d.has(dw))return true;if(m<x.e&&x.d.has(dw===1?7:dw-1))return true}
  }
  return false;
}
function tparts(ms,tz){const d=new Date(ms+tzOff(tz||'UTC',ms)*60000);return{y:d.getUTCFullYear(),mo:d.getUTCMonth()+1,d:d.getUTCDate(),dw:d.getUTCDay()+1,h:d.getUTCHours(),mi:d.getUTCMinutes(),s:d.getUTCSeconds()}}

/* ---------- testo e numeri ---------- */
function fmtNum(v,fmt,E){
  if(v===true)return'true';if(v===false)return'false';
  if(typeof v==='string')return v;
  if(v&&v.__c)return'#'+[v.r,v.g,v.b].map(x=>Math.round(x).toString(16).padStart(2,'0')).join('').toUpperCase();
  if(v==null||(typeof v==='number'&&v!==v))return'NaN';
  if(typeof v!=='number')return String(v);
  if(fmt==null||fmt===''){if(Number.isInteger(v))return String(v);return String(+v.toFixed(8))}
  if(fmt==='__volume'){const a=Math.abs(v);return a>=1e9?+(v/1e9).toFixed(3)+'B':a>=1e6?+(v/1e6).toFixed(3)+'M':a>=1e3?+(v/1e3).toFixed(3)+'K':String(+v.toFixed(2))}
  if(fmt==='__percent')return v.toFixed(2)+'%';
  if(fmt==='__mintick'||fmt==='__price'||fmt==='__inherit')return v.toFixed(E?E.dec:2);
  const m=/^([#0,]*)(?:\.([#0]*))?(%?)$/.exec(fmt);
  if(!m)return String(v);
  const decs=m[2]||'',min=(decs.match(/0/g)||[]).length,max=decs.length;
  let x=m[3]?v*100:v;
  let s=x.toFixed(max);
  if(max>min){s=s.replace(/0+$/,'');const need=min-(s.split('.')[1]||'').length;if(need>0)s+='0'.repeat(need);s=s.replace(/\.$/,'')}
  if(m[1].includes(',')){const p=s.split('.');p[0]=p[0].replace(/\B(?=(\d{3})+(?!\d))/g,',');s=p.join('.')}
  return s+(m[3]?'%':'');
}

/* ---------- costanti ---------- */
const CONST={};
function C(ns,o){Object.keys(o).forEach(k=>CONST[ns+'.'+k]=o[k])}
C('extend',{none:'none',left:'left',right:'right',both:'both'});
C('xloc',{bar_index:'bi',bar_time:'bt'});
C('yloc',{price:'price',abovebar:'abovebar',belowbar:'belowbar'});
C('text',{align_left:'left',align_center:'center',align_right:'right',align_top:'top',align_bottom:'bottom',wrap_auto:'auto',wrap_none:'none',format_bold:'bold',format_italic:'italic',format_none:'none'});
C('size',{auto:'auto',tiny:'tiny',small:'small',normal:'normal',large:'large',huge:'huge'});
C('shape',{xcross:'xcross',cross:'cross',triangleup:'triangleup',triangledown:'triangledown',flag:'flag',circle:'circle',arrowup:'arrowup',arrowdown:'arrowdown',labelup:'labelup',labeldown:'labeldown',square:'square',diamond:'diamond'});
C('location',{abovebar:'abovebar',belowbar:'belowbar',top:'top',bottom:'bottom',absolute:'absolute'});
C('line',{style_solid:'solid',style_dotted:'dotted',style_dashed:'dashed',style_arrow_left:'arrow_left',style_arrow_right:'arrow_right',style_arrow_both:'arrow_both'});
C('label',{style_none:'none',style_xcross:'xcross',style_cross:'cross',style_triangleup:'triangleup',style_triangledown:'triangledown',style_flag:'flag',style_circle:'circle',style_arrowup:'arrowup',style_arrowdown:'arrowdown',style_label_up:'label_up',style_label_down:'label_down',style_label_left:'label_left',style_label_right:'label_right',style_label_lower_left:'label_lower_left',style_label_lower_right:'label_lower_right',style_label_upper_left:'label_upper_left',style_label_upper_right:'label_upper_right',style_label_center:'label_center',style_square:'square',style_diamond:'diamond',style_text_outline:'text_outline'});
C('position',{top_left:'top_left',top_center:'top_center',top_right:'top_right',middle_left:'middle_left',middle_center:'middle_center',middle_right:'middle_right',bottom_left:'bottom_left',bottom_center:'bottom_center',bottom_right:'bottom_right'});
C('plot',{style_line:'line',style_linebr:'linebr',style_stepline:'stepline',style_stepline_diamond:'stepline',style_steplinebr:'stepline',style_histogram:'histogram',style_columns:'columns',style_circles:'circles',style_cross:'cross',style_area:'area',style_areabr:'area'});
C('hline',{style_solid:'solid',style_dotted:'dotted',style_dashed:'dashed'});
C('display',{none:0,pane:1,data_window:2,price_scale:4,status_line:8,all:15});
C('barmerge',{gaps_on:true,gaps_off:false,lookahead_on:true,lookahead_off:false});
C('alert',{freq_all:'all',freq_once_per_bar:'bar',freq_once_per_bar_close:'close'});
C('format',{price:'__price',volume:'__volume',percent:'__percent',mintick:'__mintick',inherit:'__inherit'});
C('order',{ascending:1,descending:-1});
C('dayofweek',{sunday:1,monday:2,tuesday:3,wednesday:4,thursday:5,friday:6,saturday:7});
C('font',{family_default:'default',family_monospace:'monospace'});
C('strategy',{long:'long',short:'short',fixed:'fixed',cash:'cash',percent_of_equity:'percent_of_equity',direction:{}});
C('scale',{right:'right',left:'left',none:'none'});
C('session',{regular:'regular',extended:'extended'});
C('adjustment',{none:'none',splits:'splits',dividends:'dividends'});
C('currency',{USD:'USD',EUR:'EUR',GBP:'GBP',JPY:'JPY',CHF:'CHF',NONE:'NONE'});
C('math',{pi:Math.PI,e:Math.E,phi:1.618033988749895,rphi:0.618033988749895});
Object.keys(COLORS).forEach(k=>CONST['color.'+k]=hexc(COLORS[k]));

/* ---------- variabili integrate ---------- */
const BV={
  open:E=>E.D.o[E.bar],high:E=>E.D.h[E.bar],low:E=>E.D.l[E.bar],close:E=>E.D.c[E.bar],volume:E=>E.D.v?E.D.v[E.bar]:NaN,
  hl2:E=>srcAt(E,'hl2'),hlc3:E=>srcAt(E,'hlc3'),ohlc4:E=>srcAt(E,'ohlc4'),hlcc4:E=>srcAt(E,'hlcc4'),
  time:E=>E.D.t[E.bar],time_close:E=>E.D.t[E.bar]+E.tfMs,time_tradingday:E=>E.D.t[E.bar],bar_index:E=>E.bar,last_bar_index:E=>E.n-1,last_bar_time:E=>E.D.t[E.n-1],timenow:E=>E.now,
  year:E=>tparts(E.D.t[E.bar],E.tz).y,month:E=>tparts(E.D.t[E.bar],E.tz).mo,dayofmonth:E=>tparts(E.D.t[E.bar],E.tz).d,dayofweek:E=>tparts(E.D.t[E.bar],E.tz).dw,
  hour:E=>tparts(E.D.t[E.bar],E.tz).h,minute:E=>tparts(E.D.t[E.bar],E.tz).mi,second:E=>tparts(E.D.t[E.bar],E.tz).s,
  weekofyear:E=>{const d=new Date(E.D.t[E.bar]);const s=Date.UTC(d.getUTCFullYear(),0,1);return Math.ceil(((E.D.t[E.bar]-s)/864e5+new Date(s).getUTCDay()+1)/7)},
  'barstate.isfirst':E=>E.bar===0,'barstate.islast':E=>E.bar===E.n-1,'barstate.isconfirmed':E=>!(E.bar===E.n-1&&E.live),
  'barstate.isrealtime':E=>E.bar===E.n-1&&E.live,'barstate.ishistory':E=>!(E.bar===E.n-1&&E.live),'barstate.isnew':()=>true,
  'barstate.islastconfirmedhistory':E=>E.bar===(E.live?E.n-2:E.n-1),
  'timeframe.period':E=>E.tf,'timeframe.main_period':E=>E.mainTf,'timeframe.multiplier':E=>{const m=/^(\d*)/.exec(E.tf);return m[1]?+m[1]:1},
  'timeframe.isintraday':E=>/^\d+S?$/.test(E.tf),'timeframe.isminutes':E=>/^\d+$/.test(E.tf),'timeframe.isseconds':E=>/S$/.test(E.tf),
  'timeframe.isdaily':E=>/D$/.test(E.tf),'timeframe.isweekly':E=>/W$/.test(E.tf),'timeframe.ismonthly':E=>/M$/.test(E.tf),'timeframe.isdwm':E=>/[DWM]$/.test(E.tf),
  'syminfo.tickerid':E=>'NEXUS:'+E.sym,'syminfo.ticker':E=>E.sym,'syminfo.root':E=>E.sym,'syminfo.prefix':()=>'NEXUS','syminfo.description':E=>E.desc||E.sym,
  'syminfo.timezone':()=>'Etc/UTC','syminfo.mintick':E=>Math.pow(10,-E.dec),'syminfo.pointvalue':()=>1,'syminfo.currency':()=>'USD','syminfo.basecurrency':E=>String(E.sym).slice(0,3),
  'syminfo.type':()=>'cfd','syminfo.session':()=>'regular','syminfo.volumetype':()=>'tick',
  'chart.fg_color':E=>E.fg,'chart.bg_color':E=>E.bg,'chart.is_standard':()=>true,'chart.is_heikinashi':()=>false,
  'ta.tr':E=>trNow(E,false),
  'strategy.position_size':E=>E.pos,'strategy.equity':()=>NaN,'strategy.netprofit':()=>NaN,'strategy.opentrades':E=>E.pos?1:0,'strategy.closedtrades':()=>0
};
/* variabili che in realta' sono calcoli con memoria */
const BV_CALL={'ta.vwap':['ta.vwap',['hlc3']],'ta.obv':['ta.__obv',[]]};

/* ---------- funzioni integrate ---------- */
const BF={};
function F(name,params,f,st){BF[name]={p:params,f,st:!!st}}
const err=(node,m)=>{const e=new Error(m);e.pine=true;e.ln=node&&node.ln;return e};

/* math */
F('math.abs',['number'],(E,a)=>Math.abs(a[0]));
F('math.ceil',['number'],(E,a)=>Math.ceil(a[0]));
F('math.floor',['number'],(E,a)=>Math.floor(a[0]));
F('math.round',['number','precision'],(E,a)=>{const x=a[0];if(x!==x)return NaN;if(a[1]==null||a[1]!==a[1])return Math.sign(x)*Math.round(Math.abs(x));const p=Math.pow(10,a[1]);return Math.round(x*p)/p});
F('math.round_to_mintick',['number'],(E,a)=>{const m=Math.pow(10,-E.dec);return Math.round(a[0]/m)*m});
F('math.sqrt',['number'],(E,a)=>Math.sqrt(a[0]));
F('math.pow',['base','exponent'],(E,a)=>Math.pow(a[0],a[1]));
F('math.exp',['number'],(E,a)=>Math.exp(a[0]));
F('math.log',['number'],(E,a)=>Math.log(a[0]));
F('math.log10',['number'],(E,a)=>Math.log10(a[0]));
F('math.sign',['number'],(E,a)=>Math.sign(a[0]));
['sin','cos','tan','asin','acos','atan'].forEach(k=>F('math.'+k,['angle'],(E,a)=>Math[k](a[0])));
F('math.todegrees',['radians'],(E,a)=>a[0]*180/Math.PI);
F('math.toradians',['degrees'],(E,a)=>a[0]*Math.PI/180);
F('math.max',[],(E,a)=>{if(!a.length)return NaN;let m=-Infinity;for(const x of a){if(x!==x||x==null)return NaN;if(x>m)m=x}return m});
F('math.min',[],(E,a)=>{if(!a.length)return NaN;let m=Infinity;for(const x of a){if(x!==x||x==null)return NaN;if(x<m)m=x}return m});
F('math.avg',[],(E,a)=>{let t=0;for(const x of a){if(x!==x||x==null)return NaN;t+=x}return t/a.length});
F('math.random',['min','max','seed'],(E,a)=>{const lo=a[0]==null?0:a[0],hi=a[1]==null?1:a[1];return lo+Math.random()*(hi-lo)});
F('math.sum',['source','length'],(E,a,s)=>{const w=last(buf(s,E,a[0]),a[1]);if(!w)return NaN;let t=0;for(const x of w){if(x!==x)return NaN;t+=x}return t},1);
/* na */
F('na',['x'],(E,a)=>isNa(a[0]));
F('nz',['source','replacement'],(E,a)=>isNa(a[0])?(a[1]==null?0:a[1]):a[0]);
F('fixnan',['source'],(E,a,s)=>{if(!isNa(a[0]))s.v=a[0];return s.v==null?NaN:s.v},1);
/* conversioni */
F('int',['x'],(E,a)=>isNa(a[0])?NaN:Math.trunc(num(a[0])));
F('float',['x'],(E,a)=>isNa(a[0])?NaN:num(a[0]));
F('bool',['x'],(E,a)=>tru(a[0]));
F('string',['x'],(E,a)=>a[0]);
F('color',['x'],(E,a)=>a[0]);
['box','line','label','table','linefill'].forEach(k=>F(k,['x'],(E,a)=>a[0]));
/* colori */
F('color.new',['color','transp'],(E,a)=>{const c=a[0];if(!c||!c.__c)return NaN;return mkc(c.r,c.g,c.b,a[1]==null||a[1]!==a[1]?c.t:a[1])});
F('color.rgb',['red','green','blue','transp'],(E,a)=>mkc(a[0],a[1],a[2],a[3]==null?0:a[3]));
F('color.r',['color'],(E,a)=>a[0]&&a[0].__c?a[0].r:NaN);F('color.g',['color'],(E,a)=>a[0]&&a[0].__c?a[0].g:NaN);
F('color.b',['color'],(E,a)=>a[0]&&a[0].__c?a[0].b:NaN);F('color.t',['color'],(E,a)=>a[0]&&a[0].__c?a[0].t:NaN);
F('color.from_gradient',['value','bottom_value','top_value','bottom_color','top_color'],(E,a)=>{
  const[v,lo,hi,c1,c2]=a;if(!c1||!c2||v!==v)return NaN;const k=hi===lo?0:Math.max(0,Math.min(1,(v-lo)/(hi-lo)));
  return mkc(c1.r+(c2.r-c1.r)*k,c1.g+(c2.g-c1.g)*k,c1.b+(c2.b-c1.b)*k,c1.t+(c2.t-c1.t)*k)});
/* testo */
F('str.tostring',['value','format'],(E,a)=>fmtNum(a[0],a[1],E));
F('str.tonumber',['string'],(E,a)=>{const s=String(a[0]).trim();if(s==='')return NaN;const n=Number(s);return isFinite(n)?n:NaN});
F('str.format',['formatString'],(E,a)=>String(a[0]).replace(/\{(\d+)(?:,\s*number,\s*([^}]*))?\}/g,(m,i,f)=>{const v=a[+i+1];return v===undefined?m:fmtNum(v,f||undefined,E)}));
F('str.length',['string'],(E,a)=>String(a[0]).length);
F('str.contains',['source','str'],(E,a)=>String(a[0]).includes(a[1]));
F('str.startswith',['source','str'],(E,a)=>String(a[0]).startsWith(a[1]));
F('str.endswith',['source','str'],(E,a)=>String(a[0]).endsWith(a[1]));
F('str.pos',['source','str'],(E,a)=>{const i=String(a[0]).indexOf(a[1]);return i<0?NaN:i});
F('str.substring',['source','begin_pos','end_pos'],(E,a)=>String(a[0]).substring(a[1],a[2]==null?undefined:a[2]));
F('str.replace',['source','target','replacement','occurrence'],(E,a)=>{const s=String(a[0]),t=String(a[1]);let k=a[3]||0,i=-1;do{i=s.indexOf(t,i+1)}while(i>=0&&k-->0);return i<0?s:s.slice(0,i)+a[2]+s.slice(i+t.length)});
F('str.replace_all',['source','target','replacement'],(E,a)=>String(a[0]).split(a[1]).join(a[2]));
F('str.lower',['source'],(E,a)=>String(a[0]).toLowerCase());
F('str.upper',['source'],(E,a)=>String(a[0]).toUpperCase());
F('str.split',['string','separator'],(E,a)=>String(a[0]).split(a[1]));
F('str.trim',['source'],(E,a)=>String(a[0]).trim());
F('str.repeat',['source','repeat','separator'],(E,a)=>Array(Math.max(0,a[1]|0)).fill(String(a[0])).join(a[2]||''));
F('str.match',['source','regex'],(E,a)=>{try{const m=new RegExp(a[1]).exec(String(a[0]));return m?m[0]:''}catch(e){return''}});
/* array */
const chkArr=(n,x)=>{if(!Array.isArray(x))throw err(n,'serve un array, trovato '+(isNa(x)?'na':typeof x));return x};
const aidx=(n,a,i)=>{i=Math.trunc(i);const j=i<0?a.length+i:i;if(!(j>=0&&j<a.length))throw err(n,'indice '+i+' fuori dall\'array (dimensione '+a.length+')');return j};
['new','new_float','new_int','new_bool','new_string','new_color','new_box','new_line','new_label','new_table','new_linefill'].forEach(k=>F('array.'+k,['size','initial_value'],(E,a)=>{const n=a[0]==null?0:Math.max(0,a[0]|0),v=a[1]===undefined?NaN:a[1];return new Array(n).fill(v)}));
F('array.from',[],(E,a)=>a.slice());
F('array.size',['id'],(E,a,s,n)=>chkArr(n,a[0]).length);
F('array.get',['id','index'],(E,a,s,n)=>{const A=chkArr(n,a[0]);return A[aidx(n,A,a[1])]});
F('array.set',['id','index','value'],(E,a,s,n)=>{const A=chkArr(n,a[0]);A[aidx(n,A,a[1])]=a[2];return NaN});
F('array.push',['id','value'],(E,a,s,n)=>{chkArr(n,a[0]).push(a[1]);return NaN});
F('array.unshift',['id','value'],(E,a,s,n)=>{chkArr(n,a[0]).unshift(a[1]);return NaN});
F('array.pop',['id'],(E,a,s,n)=>{const A=chkArr(n,a[0]);if(!A.length)throw err(n,'array.pop su un array vuoto');return A.pop()});
F('array.shift',['id'],(E,a,s,n)=>{const A=chkArr(n,a[0]);if(!A.length)throw err(n,'array.shift su un array vuoto');return A.shift()});
F('array.insert',['id','index','value'],(E,a,s,n)=>{const A=chkArr(n,a[0]);A.splice(Math.trunc(a[1]),0,a[2]);return NaN});
F('array.remove',['id','index'],(E,a,s,n)=>{const A=chkArr(n,a[0]);return A.splice(aidx(n,A,a[1]),1)[0]});
F('array.clear',['id'],(E,a,s,n)=>{chkArr(n,a[0]).length=0;return NaN});
F('array.includes',['id','value'],(E,a,s,n)=>chkArr(n,a[0]).includes(a[1]));
F('array.indexof',['id','value'],(E,a,s,n)=>chkArr(n,a[0]).indexOf(a[1]));
F('array.lastindexof',['id','value'],(E,a,s,n)=>chkArr(n,a[0]).lastIndexOf(a[1]));
F('array.first',['id'],(E,a,s,n)=>{const A=chkArr(n,a[0]);if(!A.length)throw err(n,'array vuoto');return A[0]});
F('array.last',['id'],(E,a,s,n)=>{const A=chkArr(n,a[0]);if(!A.length)throw err(n,'array vuoto');return A[A.length-1]});
F('array.sum',['id'],(E,a,s,n)=>{let t=0;for(const x of chkArr(n,a[0])){if(x!==x)return NaN;t+=x}return t});
F('array.avg',['id'],(E,a,s,n)=>{const A=chkArr(n,a[0]);if(!A.length)return NaN;let t=0;for(const x of A)t+=x;return t/A.length});
F('array.max',['id','nth'],(E,a,s,n)=>{const A=chkArr(n,a[0]).filter(x=>x===x).sort((x,y)=>y-x);return A.length?A[a[1]|0]:NaN});
F('array.min',['id','nth'],(E,a,s,n)=>{const A=chkArr(n,a[0]).filter(x=>x===x).sort((x,y)=>x-y);return A.length?A[a[1]|0]:NaN});
F('array.median',['id'],(E,a,s,n)=>{const A=chkArr(n,a[0]).filter(x=>x===x).sort((x,y)=>x-y);if(!A.length)return NaN;const m=A.length>>1;return A.length%2?A[m]:(A[m-1]+A[m])/2});
F('array.stdev',['id','biased'],(E,a,s,n)=>{const A=chkArr(n,a[0]);return stdevA(A,A.length,a[1])});
F('array.sort',['id','order'],(E,a,s,n)=>{const d=a[1]===-1?-1:1;chkArr(n,a[0]).sort((x,y)=>typeof x==='string'?d*String(x).localeCompare(y):d*(x-y));return NaN});
F('array.reverse',['id'],(E,a,s,n)=>{chkArr(n,a[0]).reverse();return NaN});
F('array.copy',['id'],(E,a,s,n)=>chkArr(n,a[0]).slice());
F('array.slice',['id','index_from','index_to'],(E,a,s,n)=>chkArr(n,a[0]).slice(a[1],a[2]));
F('array.concat',['id1','id2'],(E,a,s,n)=>{const A=chkArr(n,a[0]);A.push(...chkArr(n,a[1]));return A});
F('array.fill',['id','value','index_from','index_to'],(E,a,s,n)=>{chkArr(n,a[0]).fill(a[1],a[2]||0,a[3]==null?undefined:a[3]);return NaN});
F('array.join',['id','separator'],(E,a,s,n)=>chkArr(n,a[0]).map(x=>fmtNum(x,null,E)).join(a[1]==null?',':a[1]));
F('array.range',['id'],(E,a,s,n)=>{const A=chkArr(n,a[0]).filter(x=>x===x);return A.length?Math.max(...A)-Math.min(...A):NaN});
F('array.abs',['id'],(E,a,s,n)=>chkArr(n,a[0]).map(Math.abs));
/* map */
F('map.new',[],()=>({__k:'map',m:new Map()}));
F('map.put',['id','key','value'],(E,a)=>{const p=a[0].m.get(a[1]);a[0].m.set(a[1],a[2]);return p===undefined?NaN:p});
F('map.get',['id','key'],(E,a)=>{const v=a[0].m.get(a[1]);return v===undefined?NaN:v});
F('map.contains',['id','key'],(E,a)=>a[0].m.has(a[1]));
F('map.remove',['id','key'],(E,a)=>{const v=a[0].m.get(a[1]);a[0].m.delete(a[1]);return v===undefined?NaN:v});
F('map.keys',['id'],(E,a)=>[...a[0].m.keys()]);
F('map.values',['id'],(E,a)=>[...a[0].m.values()]);
F('map.size',['id'],(E,a)=>a[0].m.size);
F('map.clear',['id'],(E,a)=>{a[0].m.clear();return NaN});
F('map.copy',['id'],(E,a)=>({__k:'map',m:new Map(a[0].m)}));

/* ---------- indicatori (ta) ---------- */
F('ta.sma',['source','length'],(E,a,s)=>smaA(buf(s,E,a[0]),a[1]),1);
F('ta.ema',['source','length'],(E,a,s)=>ema(s,E,a[0],a[1]),1);
F('ta.rma',['source','length'],(E,a,s)=>rma(s,E,a[0],a[1]),1);
F('ta.wma',['source','length'],(E,a,s)=>wmaA(buf(s,E,a[0]),a[1]),1);
F('ta.vwma',['source','length'],(E,a,s)=>{const v=E.D.v?E.D.v[E.bar]:NaN;const A=last(buf(s,E,a[0]*v,'a'),a[1]),B=last(buf(s,E,v,'v'),a[1]);if(!A||!B)return NaN;let x=0,y=0;for(let i=0;i<A.length;i++){x+=A[i];y+=B[i]}return y?x/y:NaN},1);
F('ta.hma',['source','length'],(E,a,s)=>{const L=Math.round(a[1]),h=Math.floor(L/2),q=Math.floor(Math.sqrt(L));const w1=wmaA(buf(s,E,a[0]),h),w2=wmaA(s.a,L);return wmaA(buf(s,E,2*w1-w2,'d'),q)},1);
F('ta.swma',['source'],(E,a,s)=>{const w=last(buf(s,E,a[0]),4);return w?(w[0]+2*w[1]+2*w[2]+w[3])/6:NaN},1);
F('ta.alma',['series','length','offset','sigma','floor'],(E,a,s)=>{const L=Math.round(a[1]),w=last(buf(s,E,a[0]),L);if(!w)return NaN;const m=(a[4]?Math.floor(a[2]*(L-1)):a[2]*(L-1)),sg=L/a[3];let t=0,n=0;for(let i=0;i<L;i++){const k=Math.exp(-((i-m)*(i-m))/(2*sg*sg));t+=w[i]*k;n+=k}return t/n},1);
F('ta.stdev',['source','length','biased'],(E,a,s)=>stdevA(buf(s,E,a[0]),a[1],a[2]),1);
F('ta.variance',['source','length','biased'],(E,a,s)=>{const x=stdevA(buf(s,E,a[0]),a[1],a[2]);return x*x},1);
F('ta.dev',['source','length'],(E,a,s)=>{const w=last(buf(s,E,a[0]),a[1]);if(!w)return NaN;const m=w.reduce((t,x)=>t+x,0)/w.length;return w.reduce((t,x)=>t+Math.abs(x-m),0)/w.length},1);
F('ta.median',['source','length'],(E,a,s)=>{const w=last(buf(s,E,a[0]),a[1]);if(!w)return NaN;const A=w.slice().sort((x,y)=>x-y),m=A.length>>1;return A.length%2?A[m]:(A[m-1]+A[m])/2},1);
F('ta.linreg',['source','length','offset'],(E,a,s)=>{const w=last(buf(s,E,a[0]),a[1]);if(!w)return NaN;const n=w.length;let sx=0,sy=0,sxy=0,sxx=0;for(let i=0;i<n;i++){sx+=i;sy+=w[i];sxy+=i*w[i];sxx+=i*i}const sl=(n*sxy-sx*sy)/(n*sxx-sx*sx),ic=(sy-sl*sx)/n;return ic+sl*(n-1-(a[2]||0))},1);
const hiLo=(E,a,s,isHi,src)=>{let x,len;if(a.length<2||a[1]===undefined){x=src;len=a[0]}else{x=a[0];len=a[1]}const w=last(buf(s,E,x),len);if(!w)return NaN;let m=isHi?-Infinity:Infinity;for(const v of w){if(v!==v)continue;if(isHi?v>m:v<m)m=v}return m===Infinity||m===-Infinity?NaN:m};
F('ta.highest',['source','length'],(E,a,s)=>hiLo(E,a,s,true,E.D.h[E.bar]),1);
F('ta.lowest',['source','length'],(E,a,s)=>hiLo(E,a,s,false,E.D.l[E.bar]),1);
const hiLoBars=(E,a,s,isHi,src)=>{let x,len;if(a.length<2||a[1]===undefined){x=src;len=a[0]}else{x=a[0];len=a[1]}const w=last(buf(s,E,x),len);if(!w)return NaN;let m=isHi?-Infinity:Infinity,k=-1;for(let i=0;i<w.length;i++){const v=w[i];if(v!==v)continue;if(isHi?v>=m:v<=m){m=v;k=i}}return k<0?NaN:-(w.length-1-k)};
F('ta.highestbars',['source','length'],(E,a,s)=>hiLoBars(E,a,s,true,E.D.h[E.bar]),1);
F('ta.lowestbars',['source','length'],(E,a,s)=>hiLoBars(E,a,s,false,E.D.l[E.bar]),1);
const pivot=(E,a,s,isHi)=>{let x,L,R;if(a.length>=3&&a[2]!==undefined){x=a[0];L=a[1];R=a[2]}else{x=isHi?E.D.h[E.bar]:E.D.l[E.bar];L=a[0];R=a[1]}L=Math.round(L);R=Math.round(R);const w=last(buf(s,E,x),L+R+1);if(!w)return NaN;const c=w[L];if(c!==c)return NaN;for(let i=0;i<w.length;i++){if(i===L)continue;const v=w[i];if(isHi?(i<L?v>=c:v>c):(i<L?v<=c:v<c))return NaN}return c};
F('ta.pivothigh',['source','leftbars','rightbars'],(E,a,s)=>pivot(E,a,s,true),1);
F('ta.pivotlow',['source','leftbars','rightbars'],(E,a,s)=>pivot(E,a,s,false),1);
const cross2=(E,a,s)=>{if(s.b!==E.bar){s.b=E.bar;s.pa=s.ca;s.pb=s.cb}s.ca=a[0];s.cb=a[1]};
F('ta.crossover',['source1','source2'],(E,a,s)=>{cross2(E,a,s);return a[0]>a[1]&&s.pa<=s.pb},1);
F('ta.crossunder',['source1','source2'],(E,a,s)=>{cross2(E,a,s);return a[0]<a[1]&&s.pa>=s.pb},1);
F('ta.cross',['source1','source2'],(E,a,s)=>{cross2(E,a,s);return(a[0]>a[1]&&s.pa<=s.pb)||(a[0]<a[1]&&s.pa>=s.pb)},1);
F('ta.change',['source','length'],(E,a,s)=>{const A=buf(s,E,a[0]);const L=a[1]==null?1:Math.round(a[1]);if(A.length<=L)return NaN;const x=A[A.length-1],y=A[A.length-1-L];return typeof x==='boolean'?x!==y:x-y},1);
F('ta.mom',['source','length'],(E,a,s)=>{const A=buf(s,E,a[0]),L=Math.round(a[1]);return A.length>L?A[A.length-1]-A[A.length-1-L]:NaN},1);
F('ta.roc',['source','length'],(E,a,s)=>{const A=buf(s,E,a[0]),L=Math.round(a[1]);if(A.length<=L)return NaN;const p=A[A.length-1-L];return 100*(A[A.length-1]-p)/p},1);
F('ta.rising',['source','length'],(E,a,s)=>{const w=last(buf(s,E,a[0]),Math.round(a[1])+1);if(!w)return false;for(let i=0;i<w.length-1;i++)if(!(w[w.length-1]>w[i]))return false;return true},1);
F('ta.falling',['source','length'],(E,a,s)=>{const w=last(buf(s,E,a[0]),Math.round(a[1])+1);if(!w)return false;for(let i=0;i<w.length-1;i++)if(!(w[w.length-1]<w[i]))return false;return true},1);
F('ta.barssince',['condition'],(E,a,s)=>{if(s.b!==E.bar){s.b=E.bar;s.P=s.Cv}const P=s.P;s.Cv=tru(a[0])?0:(P===undefined||P!==P?NaN:P+1);return s.Cv},1);
F('ta.valuewhen',['condition','source','occurrence'],(E,a,s)=>{if(s.b!==E.bar){s.b=E.bar;s.P=s.Cv||[]}let L=s.P;if(tru(a[0])){L=L.concat([a[1]]);if(L.length>200)L=L.slice(-200)}s.Cv=L;const i=L.length-1-(a[2]|0);return i>=0?L[i]:NaN},1);
F('ta.cum',['source'],(E,a,s)=>{if(s.b!==E.bar){s.b=E.bar;s.P=s.Cv||0}s.Cv=s.P+(a[0]!==a[0]?0:a[0]);return s.Cv},1);
F('ta.tr',['handle_na'],(E,a)=>trNow(E,a[0]));
F('ta.atr',['length'],(E,a,s)=>rma(s,E,trNow(E,true),a[0]),1);
F('ta.rsi',['source','length'],(E,a,s)=>{if(s.b!==E.bar){s.b=E.bar;s.px=s.cx}s.cx=a[0];const ch=a[0]-s.px;const up=ch!==ch?NaN:Math.max(ch,0),dn=ch!==ch?NaN:Math.max(-ch,0);const u=rma(sub(s,'u'),E,up,a[1]),d=rma(sub(s,'d'),E,dn,a[1]);if(u!==u||d!==d)return NaN;return d===0?100:u===0?0:100-100/(1+u/d)},1);
F('ta.macd',['source','fastlen','slowlen','siglen'],(E,a,s)=>{const m=ema(sub(s,'f'),E,a[0],a[1])-ema(sub(s,'s'),E,a[0],a[2]);const g=ema(sub(s,'g'),E,m,a[3]);return[m,g,m-g]},1);
F('ta.bb',['series','length','mult'],(E,a,s)=>{const A=buf(s,E,a[0]);const b=smaA(A,a[1]),d=a[2]*stdevA(A,a[1]);return[b,b+d,b-d]},1);
F('ta.bbw',['series','length','mult'],(E,a,s)=>{const A=buf(s,E,a[0]);const b=smaA(A,a[1]),d=a[2]*stdevA(A,a[1]);return b?((b+d)-(b-d))/b:NaN},1);
F('ta.kc',['series','length','mult','useTrueRange'],(E,a,s)=>{const b=ema(sub(s,'e'),E,a[0],a[1]);const r=ema(sub(s,'r'),E,a[3]===false?E.D.h[E.bar]-E.D.l[E.bar]:trNow(E,true),a[1]);return[b,b+a[2]*r,b-a[2]*r]},1);
F('ta.stoch',['source','high','low','length'],(E,a,s)=>{const H=last(buf(s,E,a[1],'h'),a[3]),L=last(buf(s,E,a[2],'l'),a[3]);if(!H||!L)return NaN;const hh=Math.max(...H),ll=Math.min(...L);return hh===ll?NaN:100*(a[0]-ll)/(hh-ll)},1);
F('ta.cci',['source','length'],(E,a,s)=>{const w=last(buf(s,E,a[0]),a[1]);if(!w)return NaN;const m=w.reduce((t,x)=>t+x,0)/w.length,md=w.reduce((t,x)=>t+Math.abs(x-m),0)/w.length;return md?(a[0]-m)/(0.015*md):0},1);
F('ta.wpr',['length'],(E,a,s)=>{const H=last(buf(s,E,E.D.h[E.bar],'h'),a[0]),L=last(buf(s,E,E.D.l[E.bar],'l'),a[0]);if(!H||!L)return NaN;const hh=Math.max(...H),ll=Math.min(...L);return hh===ll?NaN:100*(E.D.c[E.bar]-hh)/(hh-ll)},1);
F('ta.mfi',['series','length'],(E,a,s)=>{if(s.b!==E.bar){s.b=E.bar;s.px=s.cx}s.cx=a[0];const v=E.D.v?E.D.v[E.bar]:NaN,ch=a[0]-s.px;const U=last(buf(s,E,ch>0?a[0]*v:0,'u'),a[1]),D=last(buf(s,E,ch<0?a[0]*v:0,'d'),a[1]);if(!U||!D)return NaN;const u=U.reduce((t,x)=>t+x,0),d=D.reduce((t,x)=>t+x,0);return d===0?100:100-100/(1+u/d)},1);
F('ta.dmi',['diLength','adxSmoothing'],(E,a,s)=>{
  const b=E.bar,D=E.D;const up=b?D.h[b]-D.h[b-1]:NaN,dn=b?D.l[b-1]-D.l[b]:NaN;
  const pdm=up!==up?NaN:(up>dn&&up>0?up:0),mdm=dn!==dn?NaN:(dn>up&&dn>0?dn:0);
  const tr=rma(sub(s,'t'),E,trNow(E,true),a[0]),p=100*rma(sub(s,'p'),E,pdm,a[0])/tr,m=100*rma(sub(s,'m'),E,mdm,a[0])/tr;
  const sm=p+m,adx=100*rma(sub(s,'x'),E,sm===0?0:Math.abs(p-m)/sm,a[1]);return[p,m,adx]},1);
F('ta.supertrend',['factor','atrPeriod'],(E,a,s)=>{
  const atr=rma(sub(s,'r'),E,trNow(E,true),a[1]),D=E.D,b=E.bar,src=(D.h[b]+D.l[b])/2;
  if(s.b!==E.bar){s.b=E.bar;s.P=s.Cv||{u:NaN,l:NaN,d:1,st:NaN}}const P=s.P,pc=b?D.c[b-1]:NaN;
  let up=src+a[0]*atr,lo=src-a[0]*atr;
  lo=(lo>P.l||pc<P.l)?lo:P.l;up=(up<P.u||pc>P.u)?up:P.u;if(P.l!==P.l)lo=src-a[0]*atr;if(P.u!==P.u)up=src+a[0]*atr;
  let d;if(P.st!==P.st)d=1;else if(P.st===P.u)d=D.c[b]>up?-1:1;else d=D.c[b]<lo?1:-1;
  const st=d===-1?lo:up;s.Cv={u:up,l:lo,d,st};return atr!==atr?[NaN,NaN]:[st,d]},1);
F('ta.vwap',['source','anchor','stdev_mult'],(E,a,s)=>{
  const day=Math.floor(E.D.t[E.bar]/864e5);if(s.b!==E.bar){s.b=E.bar;s.P=s.Cv||{d:-1,pv:0,v:0}}
  const P=s.P,v=E.D.v?E.D.v[E.bar]:0,reset=a[1]!=null?tru(a[1]):P.d!==day;
  const C=reset?{d:day,pv:a[0]*v,v}:{d:day,pv:P.pv+a[0]*v,v:P.v+v};s.Cv=C;return C.v?C.pv/C.v:a[0]},1);
F('ta.__obv',[],(E,a,s)=>{if(s.b!==E.bar){s.b=E.bar;s.P=s.Cv||0}const b=E.bar,D=E.D,v=D.v?D.v[b]:0;s.Cv=b?s.P+(D.c[b]>D.c[b-1]?v:D.c[b]<D.c[b-1]?-v:0):0;return s.Cv},1);
F('ta.percentrank',['source','length'],(E,a,s)=>{const w=last(buf(s,E,a[0]),Math.round(a[1])+1);if(!w)return NaN;const x=w[w.length-1];let c=0;for(let i=0;i<w.length-1;i++)if(w[i]<=x)c++;return 100*c/(w.length-1)},1);
F('ta.correlation',['source1','source2','length'],(E,a,s)=>{const X=last(buf(s,E,a[0],'x'),a[2]),Y=last(buf(s,E,a[1],'y'),a[2]);if(!X||!Y)return NaN;const n=X.length,mx=X.reduce((t,v)=>t+v,0)/n,my=Y.reduce((t,v)=>t+v,0)/n;let c=0,vx=0,vy=0;for(let i=0;i<n;i++){c+=(X[i]-mx)*(Y[i]-my);vx+=(X[i]-mx)**2;vy+=(Y[i]-my)**2}return c/Math.sqrt(vx*vy)},1);

/* ---------- tempo ---------- */
F('time',['timeframe','session','timezone'],(E,a)=>{
  const t=E.D.t[E.bar],tf=tfNorm(a[0]||'');let r=t;
  if(tf&&tf!==E.tf){const ms=tfMsOf(tf);r=Math.floor(t/ms)*ms}
  if(a[1]!=null&&a[1]!==''&&!inSess(t,a[1],a[2]||'UTC'))return NaN;return r});
F('time_close',['timeframe','session','timezone'],(E,a)=>{const t=E.D.t[E.bar];if(a[1]!=null&&a[1]!==''&&!inSess(t,a[1],a[2]||'UTC'))return NaN;const tf=tfNorm(a[0]||'');const ms=tf?tfMsOf(tf):E.tfMs;return Math.floor(t/ms)*ms+ms});
F('timestamp',[],(E,a)=>{
  if(a.length===1&&typeof a[0]==='string'){const d=Date.parse(a[0]);return isNaN(d)?NaN:d}
  let tz='UTC',i=0;if(typeof a[0]==='string'){tz=a[0];i=1}
  const y=a[i],mo=a[i+1],d=a[i+2],h=a[i+3]||0,mi=a[i+4]||0,sc=a[i+5]||0;
  const g=Date.UTC(y,mo-1,d,h,mi,sc);return g-tzOff(tz,g)*60000});
['year','month','dayofmonth','dayofweek','hour','minute','second'].forEach(k=>F(k,['time','timezone'],(E,a)=>{const p=tparts(a[0],a[1]||E.tz);return{year:p.y,month:p.mo,dayofmonth:p.d,dayofweek:p.dw,hour:p.h,minute:p.mi,second:p.s}[k]}));
F('timeframe.in_seconds',['timeframe'],(E,a)=>tfMsOf(a[0]==null?E.tf:a[0])/1000);
F('timeframe.from_seconds',['seconds'],(E,a)=>{const s=a[0];return s%86400===0?(s/86400===1?'D':s/86400+'D'):s%60===0?String(s/60):s+'S'});

/* ---------- disegni: box, line, label, table, linefill ---------- */
function mkDraw(E,kind,o){
  o.__k=kind;o.del=false;o.seq=++E.seq;const L=E.out[kind];L.push(o);E.lc[kind]++;
  const mx=E.max[kind]||50;
  while(E.lc[kind]>mx){const q=L[E.old[kind]++];if(q&&!q.del){q.del=true;E.lc[kind]--}}
  if(L.length>4*mx+200){const keep=L.filter(q=>!q.del);E.out[kind]=keep;E.old[kind]=0}
  return o;
}
const live=(n,o,k)=>{if(isNa(o)||!o||o.__k!==k)return null;return o.del?null:o};
const dflt=(x,d)=>x===undefined?d:x;
F('box.new',['left','top','right','bottom','border_color','border_width','border_style','extend','xloc','bgcolor','text','text_size','text_color','text_halign','text_valign','text_wrap','text_font_family','force_overlay','text_formatting'],(E,a)=>mkDraw(E,'box',{
  l:a[0],t:a[1],r:a[2],b:a[3],bc:dflt(a[4],CONST['color.blue']),bw:dflt(a[5],1),bs:dflt(a[6],'solid'),ext:dflt(a[7],'none'),xl:dflt(a[8],'bi'),bg:dflt(a[9],CONST['color.blue']),
  tx:dflt(a[10],''),ts:dflt(a[11],'auto'),tc:dflt(a[12],CONST['color.black']),th:dflt(a[13],'center'),tv:dflt(a[14],'center')}));
const BSET={left:'l',right:'r',top:'t',bottom:'b',bgcolor:'bg',border_color:'bc',border_width:'bw',border_style:'bs',extend:'ext',text:'tx',text_color:'tc',text_size:'ts',text_halign:'th',text_valign:'tv'};
Object.keys(BSET).forEach(k=>F('box.set_'+k,['id','value'],(E,a,s,n)=>{const o=live(n,a[0],'box');if(o)o[BSET[k]]=a[1];return NaN}));
F('box.set_lefttop',['id','left','top'],(E,a,s,n)=>{const o=live(n,a[0],'box');if(o){o.l=a[1];o.t=a[2]}return NaN});
F('box.set_rightbottom',['id','right','bottom'],(E,a,s,n)=>{const o=live(n,a[0],'box');if(o){o.r=a[1];o.b=a[2]}return NaN});
F('box.set_text_wrap',['id','value'],()=>NaN);F('box.set_text_font_family',['id','value'],()=>NaN);F('box.set_xloc',['id','left','right','xloc'],(E,a,s,n)=>{const o=live(n,a[0],'box');if(o){o.l=a[1];o.r=a[2];o.xl=a[3]}return NaN});
['left','right','top','bottom'].forEach(k=>F('box.get_'+k,['id'],(E,a,s,n)=>{const o=live(n,a[0],'box');return o?o[BSET[k]]:NaN}));
F('box.delete',['id'],(E,a)=>{const o=a[0];if(o&&o.__k==='box'&&!o.del){o.del=true;E.lc.box--}return NaN});
F('box.copy',['id'],(E,a,s,n)=>{const o=live(n,a[0],'box');if(!o)return NaN;const c=Object.assign({},o);delete c.seq;return mkDraw(E,'box',c)});
F('line.new',['x1','y1','x2','y2','xloc','extend','color','style','width','force_overlay'],(E,a)=>mkDraw(E,'line',{x1:a[0],y1:a[1],x2:a[2],y2:a[3],xl:dflt(a[4],'bi'),ext:dflt(a[5],'none'),c:dflt(a[6],CONST['color.blue']),st:dflt(a[7],'solid'),w:dflt(a[8],1)}));
const LSET={x1:'x1',y1:'y1',x2:'x2',y2:'y2',color:'c',style:'st',width:'w',extend:'ext'};
Object.keys(LSET).forEach(k=>F('line.set_'+k,['id','value'],(E,a,s,n)=>{const o=live(n,a[0],'line');if(o)o[LSET[k]]=a[1];return NaN}));
F('line.set_xy1',['id','x','y'],(E,a,s,n)=>{const o=live(n,a[0],'line');if(o){o.x1=a[1];o.y1=a[2]}return NaN});
F('line.set_xy2',['id','x','y'],(E,a,s,n)=>{const o=live(n,a[0],'line');if(o){o.x2=a[1];o.y2=a[2]}return NaN});
F('line.set_xloc',['id','x1','x2','xloc'],(E,a,s,n)=>{const o=live(n,a[0],'line');if(o){o.x1=a[1];o.x2=a[2];o.xl=a[3]}return NaN});
['x1','y1','x2','y2'].forEach(k=>F('line.get_'+k,['id'],(E,a,s,n)=>{const o=live(n,a[0],'line');return o?o[k]:NaN}));
F('line.get_price',['id','x'],(E,a,s,n)=>{const o=live(n,a[0],'line');if(!o||o.x2===o.x1)return NaN;return o.y1+(o.y2-o.y1)*(a[1]-o.x1)/(o.x2-o.x1)});
F('line.delete',['id'],(E,a)=>{const o=a[0];if(o&&o.__k==='line'&&!o.del){o.del=true;E.lc.line--}return NaN});
F('line.copy',['id'],(E,a,s,n)=>{const o=live(n,a[0],'line');if(!o)return NaN;const c=Object.assign({},o);return mkDraw(E,'line',c)});
F('label.new',['x','y','text','xloc','yloc','color','style','textcolor','size','textalign','tooltip','text_font_family','force_overlay','text_formatting'],(E,a)=>mkDraw(E,'label',{x:a[0],y:a[1],tx:dflt(a[2],''),xl:dflt(a[3],'bi'),yl:dflt(a[4],'price'),c:dflt(a[5],CONST['color.blue']),st:dflt(a[6],'label_down'),tc:dflt(a[7],CONST['color.white']),sz:dflt(a[8],'normal'),ta:dflt(a[9],'center'),tt:a[10]||''}));
const LBSET={x:'x',y:'y',text:'tx',color:'c',style:'st',textcolor:'tc',size:'sz',yloc:'yl',textalign:'ta',tooltip:'tt'};
Object.keys(LBSET).forEach(k=>F('label.set_'+k,['id','value'],(E,a,s,n)=>{const o=live(n,a[0],'label');if(o)o[LBSET[k]]=a[1];return NaN}));
F('label.set_xy',['id','x','y'],(E,a,s,n)=>{const o=live(n,a[0],'label');if(o){o.x=a[1];o.y=a[2]}return NaN});
F('label.set_xloc',['id','x','xloc'],(E,a,s,n)=>{const o=live(n,a[0],'label');if(o){o.x=a[1];o.xl=a[2]}return NaN});
F('label.set_text_font_family',['id','value'],()=>NaN);
['x','y'].forEach(k=>F('label.get_'+k,['id'],(E,a,s,n)=>{const o=live(n,a[0],'label');return o?o[k]:NaN}));
F('label.get_text',['id'],(E,a,s,n)=>{const o=live(n,a[0],'label');return o?o.tx:NaN});
F('label.delete',['id'],(E,a)=>{const o=a[0];if(o&&o.__k==='label'&&!o.del){o.del=true;E.lc.label--}return NaN});
F('label.copy',['id'],(E,a,s,n)=>{const o=live(n,a[0],'label');if(!o)return NaN;return mkDraw(E,'label',Object.assign({},o))});
F('linefill.new',['line1','line2','color'],(E,a)=>mkDraw(E,'linefill',{l1:a[0],l2:a[1],c:a[2]}));
F('linefill.set_color',['id','color'],(E,a)=>{if(a[0]&&a[0].__k==='linefill')a[0].c=a[1];return NaN});
F('linefill.delete',['id'],(E,a)=>{const o=a[0];if(o&&o.__k==='linefill'&&!o.del){o.del=true;E.lc.linefill--}return NaN});
F('table.new',['position','columns','rows','bgcolor','frame_color','frame_width','border_color','border_width','force_overlay'],(E,a)=>mkDraw(E,'table',{pos:a[0],cols:a[1]|0,rows:a[2]|0,bg:a[3],fc:a[4],fw:dflt(a[5],0),brc:a[6],brw:dflt(a[7],0),cells:{},merges:[]}));
F('table.cell',['table_id','column','row','text','width','height','text_color','text_halign','text_valign','text_size','bgcolor','tooltip','text_font_family','text_formatting'],(E,a,s,n)=>{const o=live(n,a[0],'table');if(!o)return NaN;
  o.cells[a[1]+','+a[2]]={tx:dflt(a[3],''),w:a[4]||0,h:a[5]||0,tc:dflt(a[6],CONST['color.black']),th:dflt(a[7],'center'),tv:dflt(a[8],'center'),ts:dflt(a[9],'normal'),bg:a[10]};return NaN});
const TSET={text:'tx',bgcolor:'bg',text_color:'tc',text_size:'ts',text_halign:'th',text_valign:'tv',width:'w',height:'h'};
Object.keys(TSET).forEach(k=>F('table.cell_set_'+k,['table_id','column','row','value'],(E,a,s,n)=>{const o=live(n,a[0],'table');if(!o)return NaN;const c=o.cells[a[1]+','+a[2]]||(o.cells[a[1]+','+a[2]]={tx:'',tc:CONST['color.black'],th:'center',tv:'center',ts:'normal'});c[TSET[k]]=a[3];return NaN}));
F('table.merge_cells',['table_id','start_column','start_row','end_column','end_row'],(E,a,s,n)=>{const o=live(n,a[0],'table');if(o)o.merges.push([a[1],a[2],a[3],a[4]]);return NaN});
F('table.clear',['table_id','start_column','start_row','end_column','end_row'],(E,a,s,n)=>{const o=live(n,a[0],'table');if(!o)return NaN;const ec=a[3]==null?a[1]:a[3],er=a[4]==null?a[2]:a[4];for(let c=a[1];c<=ec;c++)for(let r=a[2];r<=er;r++)delete o.cells[c+','+r];return NaN});
['set_position','set_bgcolor','set_frame_color','set_frame_width','set_border_color','set_border_width'].forEach(k=>F('table.'+k,['table_id','value'],(E,a,s,n)=>{const o=live(n,a[0],'table');if(o)o[{set_position:'pos',set_bgcolor:'bg',set_frame_color:'fc',set_frame_width:'fw',set_border_color:'brc',set_border_width:'brw'}[k]]=a[1];return NaN}));
F('table.delete',['table_id'],(E,a)=>{const o=a[0];if(o&&o.__k==='table'&&!o.del){o.del=true;E.lc.table--}return NaN});
['box','line','label','table','linefill'].forEach(k=>BV[k+'.all']=E=>E.out[k].filter(o=>!o.del));

/* ---------- uscite: plot, forme, sfondi, alert ---------- */
function plotRec(E,node){let p=E.out.plot.get(node.id);if(!p){p={id:node.id,ln:node.ln,vals:new Array(E.n).fill(NaN),cols:new Array(E.n).fill(null)};E.out.plot.set(node.id,p)}return p}
F('plot',['series','title','color','linewidth','style','trackprice','histbase','offset','join','editable','show_last','display','format','precision','force_overlay','linestyle'],(E,a,s,n)=>{
  const p=plotRec(E,n);if(p.title===undefined){p.title=a[1]||('Plot '+(E.out.plot.size));p.lw=a[3]||1;p.style=a[4]||'line';p.off=a[7]||0;p.disp=a[11]==null?15:a[11];p.ov=a[14]===true;p.hb=a[6]||0}
  const v=a[0];p.vals[E.bar]=typeof v==='boolean'?+v:v;p.cols[E.bar]=a[2]===undefined?CONST['color.blue']:a[2];return{__k:'plot',id:n.id}});
F('plotshape',['series','title','style','location','color','offset','text','textcolor','editable','size','show_last','display','format','precision','force_overlay'],(E,a,s,n)=>{
  const v=a[0],loc=a[3]||'abovebar';if(a[11]===0)return NaN;
  if(loc==='absolute'?isNa(v):!tru(v))return NaN;
  E.out.shape.push({bar:E.bar+(a[5]||0),y:loc==='absolute'?v:NaN,st:a[2]||'xcross',loc,c:a[4]===undefined?CONST['color.blue']:a[4],tx:a[6]||'',tc:a[7]===undefined?CONST['color.blue']:a[7],sz:a[9]||'auto',k:'shape',id:n.id});return NaN});
F('plotchar',['series','title','char','location','color','offset','text','textcolor','editable','size','show_last','display','format','precision','force_overlay'],(E,a,s,n)=>{
  const v=a[0],loc=a[3]||'abovebar';if(a[11]===0)return NaN;
  if(loc==='absolute'?isNa(v):!tru(v))return NaN;
  E.out.shape.push({bar:E.bar+(a[5]||0),y:loc==='absolute'?v:NaN,st:'char',ch:a[2]||'★',loc,c:a[4]===undefined?CONST['color.blue']:a[4],tx:a[6]||'',tc:a[7]===undefined?CONST['color.blue']:a[7],sz:a[9]||'auto',k:'char',id:n.id});return NaN});
F('plotarrow',['series','title','colorup','colordown','offset','minheight','maxheight','editable','show_last','display'],(E,a,s,n)=>{const v=a[0];if(isNa(v)||v===0)return NaN;E.out.shape.push({bar:E.bar,y:NaN,st:v>0?'arrowup':'arrowdown',loc:v>0?'belowbar':'abovebar',c:v>0?(a[2]||CONST['color.green']):(a[3]||CONST['color.red']),tx:'',sz:'small',k:'shape',id:n.id});return NaN});
F('plotcandle',['open','high','low','close','title','color','wickcolor','editable','show_last','bordercolor','display'],()=>NaN);
F('plotbar',['open','high','low','close','title','color','editable','show_last','display'],()=>NaN);
F('hline',['price','title','color','linestyle','linewidth','editable','display'],(E,a,s,n)=>{if(!E.out.hline.has(n.id))E.out.hline.set(n.id,{id:n.id,p:a[0],title:a[1]||'',c:a[2]===undefined?CONST['color.gray']:a[2],st:a[3]||'dashed',w:a[4]||1,disp:a[6]==null?15:a[6]});return{__k:'hline',id:n.id}});
F('fill',['plot1','plot2','color','title','editable','show_last','fillgaps','display'],(E,a,s,n)=>{let f=E.out.fill.get(n.id);if(!f){f={id:n.id,a:a[0]&&a[0].id,ak:a[0]&&a[0].__k,b:a[1]&&a[1].id,bk:a[1]&&a[1].__k,cols:new Array(E.n).fill(null)};E.out.fill.set(n.id,f)}f.cols[E.bar]=a[2]===undefined?mkc(33,150,243,80):a[2];return NaN});
F('bgcolor',['color','offset','editable','show_last','title','display','force_overlay'],(E,a)=>{if(!isNa(a[0]))E.out.bg[E.bar+(a[1]||0)]=a[0];return NaN});
F('barcolor',['color','offset','editable','show_last','title','display'],(E,a)=>{if(!isNa(a[0]))E.out.barc[E.bar+(a[1]||0)]=a[0];return NaN});
F('alert',['message','freq'],(E,a)=>{if(E.bar===E.n-1)E.out.alerts.push(String(a[0]));return NaN});
F('alertcondition',['condition','title','message'],(E,a,s,n)=>{if(!E.out.condMeta.some(c=>c.id===n.id))E.out.condMeta.push({id:n.id,title:a[1]||'',msg:a[2]||''});if(E.bar===E.n-1&&tru(a[0]))E.out.conds.push({id:n.id,title:a[1]||'',msg:a[2]||''});return NaN});
F('log.info',['message'],(E,a)=>{if(E.bar===E.n-1)E.out.logs.push(String(a[0]));return NaN});
F('log.warning',['message'],(E,a)=>{if(E.bar===E.n-1)E.out.logs.push(String(a[0]));return NaN});
F('log.error',['message'],(E,a)=>{if(E.bar===E.n-1)E.out.logs.push(String(a[0]));return NaN});
F('runtime.error',['message'],(E,a,s,n)=>{throw err(n,String(a[0]))});
F('max_bars_back',['var','num'],()=>NaN);
/* dichiarazione */
const DECL_P=['title','shorttitle','overlay','format','precision','scale','max_bars_back','timeframe','timeframe_gaps','explicit_plot_zorder','max_lines_count','max_labels_count','max_boxes_count','calc_bars_count','max_polylines_count','dynamic_requests','behind_chart'];
const declF=kind=>(E,a)=>{if(E.bar===0&&!E.declared){E.declared=true;const k=i=>a[DECL_P.indexOf(i)];E.out.meta={kind,title:k('title')||'Script',short:k('shorttitle')||'',overlay:k('overlay')===true,precision:k('precision')};
  E.max.line=Math.min(500,k('max_lines_count')||50);E.max.label=Math.min(500,k('max_labels_count')||50);E.max.box=Math.min(500,k('max_boxes_count')||50);}return NaN};
F('indicator',DECL_P,declF('indicator'));F('study',DECL_P,declF('indicator'));F('library',['title','overlay'],declF('library'));
F('strategy',['title','shorttitle','overlay','format','precision','scale','pyramiding','calc_on_order_fills','calc_on_every_tick','max_bars_back','backtest_fill_limits_assumption','default_qty_type','default_qty_value','initial_capital','currency','slippage','commission_type','commission_value','process_orders_on_close','close_entries_rule','margin_long','margin_short','explicit_plot_zorder','max_lines_count','max_labels_count','max_boxes_count'],(E,a)=>{if(E.bar===0&&!E.declared){E.declared=true;E.out.meta={kind:'strategy',title:a[0]||'Strategy',short:a[1]||'',overlay:a[2]===true}}return NaN});
/* strategie: solo i segnali sul grafico */
F('strategy.entry',['id','direction','qty','limit','stop','oca_name','oca_type','comment','alert_message','disable_alert'],(E,a)=>{const d=a[1]==='short'?-1:1;if(E.pos!==d){E.pos=d;E.out.orders.push({bar:E.bar,d,tx:a[7]||a[0]})}return NaN});
F('strategy.order',['id','direction','qty','limit','stop','oca_name','oca_type','comment'],(E,a)=>{const d=a[1]==='short'?-1:1;E.out.orders.push({bar:E.bar,d,tx:a[7]||a[0]});E.pos=d;return NaN});
F('strategy.close',['id','comment','qty','qty_percent','alert_message','immediately','disable_alert'],(E,a)=>{if(E.pos){E.out.orders.push({bar:E.bar,d:0,tx:a[1]||'Close'});E.pos=0}return NaN});
F('strategy.close_all',['comment'],(E,a)=>{if(E.pos){E.out.orders.push({bar:E.bar,d:0,tx:a[0]||'Close'});E.pos=0}return NaN});
F('strategy.exit',['id','from_entry','qty','qty_percent','profit','limit','loss','stop','trail_price','trail_points','trail_offset','oca_name','comment'],()=>NaN);
F('strategy.cancel',['id'],()=>NaN);F('strategy.cancel_all',[],()=>NaN);

/* =====================================================================
   MOTORE PINE — 3) compilazione in funzioni veloci ed esecuzione
   ===================================================================== */
const INPUT_P={
  input:['defval','title','tooltip','inline','group','confirm','display'],
  'input.int':['defval','title','minval','maxval','step','tooltip','inline','group','confirm','display','options'],
  'input.float':['defval','title','minval','maxval','step','tooltip','inline','group','confirm','display','options'],
  'input.bool':['defval','title','tooltip','inline','group','confirm','display'],
  'input.string':['defval','title','options','tooltip','inline','group','confirm','display'],
  'input.color':['defval','title','tooltip','inline','group','confirm','display'],
  'input.timeframe':['defval','title','options','tooltip','inline','group','confirm','display'],
  'input.session':['defval','title','options','tooltip','inline','group','confirm','display'],
  'input.source':['defval','title','tooltip','inline','group','display'],
  'input.symbol':['defval','title','tooltip','inline','group','confirm','display'],
  'input.text_area':['defval','title','tooltip','group','confirm','display'],
  'input.price':['defval','title','tooltip','inline','group','confirm','display'],
  'input.time':['defval','title','tooltip','inline','group','confirm','display']
};
const SRC_NAMES=['open','high','low','close','hl2','hlc3','ohlc4','hlcc4','volume'];
function dotted(e){if(e.t==='name')return e.n;if(e.t==='mem'){const d=dotted(e.o);return d==null?null:d+'.'+e.p}return null}
function eqv(a,b){if(isNa(a)||isNa(b))return false;if(a&&a.__c&&b&&b.__c)return a.r===b.r&&a.g===b.g&&a.b===b.b&&a.t===b.t;return a===b}
function addv(a,b){if(typeof a==='string'||typeof b==='string')return(isNa(a)?'':String(a))+(isNa(b)?'':String(b));return num(a)+num(b)}
const BIN={'+':addv,'-':(a,b)=>num(a)-num(b),'*':(a,b)=>num(a)*num(b),'/':(a,b)=>{b=num(b);return b===0?NaN:num(a)/b},'%':(a,b)=>{b=num(b);return b===0?NaN:num(a)%b},
  '<':(a,b)=>a<b,'>':(a,b)=>a>b,'<=':(a,b)=>a<=b,'>=':(a,b)=>a>=b,'==':eqv,'!=':(a,b)=>!(isNa(a)||isNa(b))&&!eqv(a,b)};

function Comp(ast){
  this.ast=ast;this.v6=ast.version>=6;
  this.fns=new Map();this.types=new Map();this.methods=new Map();this.G=new Map();
  for(const s of ast.body){
    if(s.t==='fn'){if(s.isMethod)this.methods.set(s.name,s);else this.fns.set(s.name,s)}
    else if(s.t==='type')this.types.set(s.name,s);
  }
  const g=new Set();this.collect(ast.body,g);[...g].forEach((n,i)=>this.G.set(n,i));
  this.fc=new Map();
}
const cp=Comp.prototype;
cp.collect=function(stmts,set){
  for(const s of stmts){
    if(s.t==='decl'){set.add(s.name);this.collectE(s.e,set)}
    else if(s.t==='tdecl'){s.names.forEach(n=>set.add(n));this.collectE(s.e,set)}
    else if(s.t==='expr'||s.t==='asg')this.collectE(s.e,set);
  }
};
cp.collectE=function(e,set){
  if(!e||typeof e!=='object')return;
  switch(e.t){
    case 'if':this.collect(e.then,set);if(e.els)this.collect(e.els,set);break;
    case 'for':set.add(e.v);this.collect(e.body,set);break;
    case 'forin':if(e.a)set.add(e.a);set.add(e.b);this.collect(e.body,set);break;
    case 'while':this.collect(e.body,set);break;
    case 'switch':e.cases.forEach(c=>this.collect(c.body,set));break;
  }
};
cp.isVar=function(n,sc){return(sc.loc&&sc.loc.has(n))||this.G.has(n)};
cp.vref=function(n,sc,node){
  if(sc.loc&&sc.loc.has(n)){const i=sc.loc.get(n);return E=>E.C.L[i]}
  if(this.G.has(n)){const i=this.G.get(n);return E=>E.G[i]}
  throw err(node,'variabile sconosciuta «'+n+'»');
};
/* blocchi e istruzioni */
cp.block=function(stmts,sc){
  const fs=stmts.map(s=>this.stmt(s,sc)).filter(Boolean);
  if(fs.length===1)return fs[0];
  return E=>{let r=NaN;for(let i=0;i<fs.length;i++){r=fs[i](E);if(E.brk||E.cont)break}return r};
};
cp.stmt=function(s,sc){
  const ln=s.ln;let f;
  switch(s.t){
    case 'fn':case 'type':return null;
    case 'break':return E=>{E.brk=true;return NaN};
    case 'continue':return E=>{E.cont=true;return NaN};
    case 'expr':f=this.ex(s.e,sc);break;
    case 'decl':{
      const vr=this.vref(s.name,sc,s),ef=this.ex(s.e,sc);
      if(s.mode)f=E=>{const v=vr(E);if(!v.init){v.init=true;v.iv=true;vset(E,v,ef(E))}return v.cur};
      else f=E=>vset(E,vr(E),ef(E));
      break;
    }
    case 'tdecl':{
      const vrs=s.names.map(n=>this.vref(n,sc,s)),ef=this.ex(s.e,sc);
      f=E=>{const r=ef(E);for(let i=0;i<vrs.length;i++)vset(E,vrs[i](E),Array.isArray(r)?(r[i]===undefined?NaN:r[i]):NaN);return NaN};
      break;
    }
    case 'asg':{
      const ef=this.ex(s.e,sc),op=s.op,bf=op===':='?null:BIN[op[0]];
      if(s.tgt.t==='name'){
        const vr=this.vref(s.tgt.n,sc,s.tgt);
        f=bf?E=>{const v=vr(E);return vset(E,v,bf(vget(E,v),ef(E)))}:E=>vset(E,vr(E),ef(E));
      }else{
        const of=this.ex(s.tgt.o,sc),p=s.tgt.p;
        f=E=>{const o=of(E);if(!o||typeof o!=='object')throw err(s,'impossibile assegnare «'+p+'»: oggetto na');const x=ef(E);o[p]=bf?bf(o[p],x):x;return o[p]};
      }
      break;
    }
    default:throw err(s,'istruzione non supportata');
  }
  return E=>{E.ln=ln;return f(E)};
};
/* espressioni */
cp.ex=function(e,sc){
  switch(e.t){
    case 'lit':{const v=e.v;return()=>v}
    case 'col':{const c=hexc(e.v);return()=>c}
    case 'tuple':{const fs=e.items.map(x=>this.ex(x,sc));return E=>fs.map(f=>f(E))}
    case 'name':return this.name(e,sc);
    case 'mem':return this.mem(e,sc);
    case 'call':return this.call(e,sc);
    case 'idx':return this.hist(e,sc);
    case 'un':{const a=this.ex(e.a,sc);if(e.op==='-')return E=>-num(a(E));if(e.op==='+')return a;return E=>{const x=a(E);return isNa(x)?NaN:!tru(x)}}
    case 'bin':{
      const a=this.ex(e.a,sc),b=this.ex(e.b,sc);
      if(e.op==='and')return this.v6?E=>tru(a(E))&&tru(b(E)):E=>{const x=tru(a(E)),y=tru(b(E));return x&&y};
      if(e.op==='or')return this.v6?E=>tru(a(E))||tru(b(E)):E=>{const x=tru(a(E)),y=tru(b(E));return x||y};
      const f=BIN[e.op];return E=>f(a(E),b(E));
    }
    case 'tern':{const c=this.ex(e.c,sc),a=this.ex(e.a,sc),b=this.ex(e.b,sc);return E=>tru(c(E))?a(E):b(E)}
    case 'if':{const c=this.ex(e.c,sc),t=this.block(e.then,sc),f=e.els?this.block(e.els,sc):null;return E=>tru(c(E))?t(E):(f?f(E):NaN)}
    case 'for':{
      const vr=this.vref(e.v,sc,e),fa=this.ex(e.from,sc),fb=this.ex(e.to,sc),fs=e.by?this.ex(e.by,sc):null,body=this.block(e.body,sc),dyn=this.v6;
      return E=>{
        const a=num(fa(E));let b=num(fb(E));if(a!==a||b!==b)return NaN;
        const st=fs?Math.abs(num(fs(E)))||1:1,dir=a<=b?1:-1;let r=NaN,g=0;
        for(let i=a;dir>0?i<=b:i>=b;i+=dir*st){
          vset(E,vr(E),i);r=body(E);
          if(E.brk){E.brk=false;break}E.cont=false;
          if(++g>20000)throw err(e,'ciclo for troppo lungo');
          if(dyn){b=num(fb(E))}
        }
        return r;
      };
    }
    case 'forin':{
      const va=e.a?this.vref(e.a,sc,e):null,vb=this.vref(e.b,sc,e),fa=this.ex(e.arr,sc),body=this.block(e.body,sc);
      return E=>{const A=fa(E);if(!Array.isArray(A))return NaN;let r=NaN;const C=A.slice();for(let i=0;i<C.length;i++){if(va)vset(E,va(E),i);vset(E,vb(E),C[i]);r=body(E);if(E.brk){E.brk=false;break}E.cont=false}return r};
    }
    case 'while':{
      const c=this.ex(e.c,sc),body=this.block(e.body,sc);
      return E=>{let r=NaN,g=0;while(tru(c(E))){r=body(E);if(E.brk){E.brk=false;break}E.cont=false;if(++g>20000)throw err(e,'ciclo while troppo lungo')}return r};
    }
    case 'switch':{
      const sf=e.subj?this.ex(e.subj,sc):null;
      const cs=e.cases.map(c=>({c:c.c?this.ex(c.c,sc):null,b:this.block(c.body,sc)}));
      return E=>{const sv=sf?sf(E):null;for(const c of cs){if(!c.c)return c.b(E);const x=c.c(E);if(sf?eqv(sv,x):tru(x))return c.b(E)}return NaN};
    }
  }
  throw err(e,'espressione non supportata');
};
cp.name=function(e,sc){
  const n=e.n;
  if(this.isVar(n,sc)){const vr=this.vref(n,sc,e);return E=>vget(E,vr(E))}
  if(BV[n])return BV[n];
  if(CONST[n]!==undefined){const v=CONST[n];return()=>v}
  if(this.fns.has(n))throw err(e,'«'+n+'» è una funzione: aggiungi le parentesi');
  throw err(e,'nome sconosciuto «'+n+'»');
};
cp.mem=function(e,sc){
  const d=dotted(e);
  if(d!=null){
    const root=d.split('.')[0];
    if(!this.isVar(root,sc)){
      if(BV_CALL[d]){const[fn,args]=BV_CALL[d];return this.call({t:'call',id:e.id,ln:e.ln,f:{t:'name',n:fn},args:args.map(n=>({t:'name',n})),kw:{}},sc,fn)}
      if(BV[d])return BV[d];
      if(CONST[d]!==undefined){const v=CONST[d];return()=>v}
      throw err(e,'nome sconosciuto «'+d+'»');
    }
  }
  const of=this.ex(e.o,sc),p=e.p;
  return E=>{const o=of(E);if(o==null||typeof o!=='object')return NaN;const v=o[p];return v===undefined?NaN:v};
};
cp.hist=function(e,sc){
  const nf=this.ex(e.n,sc),o=e.o;
  if(o.t==='name'&&this.isVar(o.n,sc)){const vr=this.vref(o.n,sc,o);return E=>vhist(E,vr(E),num(nf(E)))}
  if(o.t==='name'&&SERIES.has(o.n)){const k=o.n;return E=>{if(E.sec)return seriesAt(E,k,E.bar);const n=Math.round(num(nf(E)));return n!==n?NaN:seriesAt(E,k,E.bar-n)}}
  const f=this.ex(o,sc),id=e.id;
  return E=>{
    const s=gst(E,id),v=f(E);if(!s.h)s.h=[];s.h[E.bar]=v;
    const n=Math.round(num(nf(E)));if(n===0)return v;if(!(n>0))return NaN;
    const i=E.bar-n;if(i<0)return NaN;const x=s.h[i];if(x!==undefined)return x;
    for(let j=i-1;j>=0&&j>=i-5000;j--)if(s.h[j]!==undefined)return s.h[j];
    return NaN;
  };
};
cp.args=function(e,sc,params){
  const fs=e.args.map(a=>this.ex(a,sc));
  Object.keys(e.kw).forEach(k=>{const i=params.indexOf(k);if(i>=0)fs[i]=this.ex(e.kw[k],sc)});
  return fs;
};
cp.call=function(e,sc,forced){
  const d=forced||dotted(e.f);
  if(d!=null){
    const root=d.split('.')[0];
    if(!this.isVar(root,sc)){
      if(!d.includes('.')&&this.fns.has(d))return this.ucall(e,sc,this.fns.get(d),null);
      if(/\.new$/.test(d)&&this.types.has(d.slice(0,-4)))return this.ctor(e,sc,this.types.get(d.slice(0,-4)));
      if(/\.copy$/.test(d)&&this.types.has(d.slice(0,-5))){const a=this.ex(e.args[0],sc);return E=>{const o=a(E);return o&&typeof o==='object'?Object.assign({},o):NaN}}
      if(d==='request.security')return this.security(e,sc);
      if(INPUT_P[d])return this.input(e,sc,d);
      if(/^request\./.test(d))throw err(e,'«'+d+'» non è ancora supportato');
      const B=BF[d];
      if(!B)throw err(e,(/^(matrix|polyline|chart\.point|ticker|ta)\./.test(d)?'funzione non ancora supportata: «':'funzione sconosciuta: «')+d+'»');
      return this.bcall(e,sc,B,d);
    }
  }
  if(e.f.t==='mem'){
    const of=this.ex(e.f.o,sc),m=e.f.p;
    if(this.methods.has(m))return this.ucall(e,sc,this.methods.get(m),of);
    const afs=e.args.map(a=>this.ex(a,sc)),kw=e.kw,kws=Object.keys(kw).map(k=>[k,this.ex(kw[k],sc)]),id=e.id,node=e;
    return E=>{
      const o=of(E);let ns;
      if(Array.isArray(o))ns='array';else if(o&&o.__k)ns=o.__k;else if(typeof o==='string')ns='str';else if(o&&o.__c)ns='color';
      else if(o&&typeof o==='object'&&m==='copy')return Object.assign({},o);
      const B=ns&&BF[ns+'.'+m];if(!B)throw err(node,'metodo sconosciuto «'+m+'»'+(isNa(o)?' (oggetto na)':''));
      const a=[o];for(const f of afs)a.push(f(E));
      for(const[k,f]of kws){const i=B.p.indexOf(k);if(i>=0)a[i]=f(E)}
      return B.f(E,a,B.st?gst(E,id):null,node);
    };
  }
  throw err(e,'chiamata non valida');
};
cp.bcall=function(e,sc,B,d){
  const fs=this.args(e,sc,B.p),n=fs.length,id=e.id,st=B.st,f=B.f,node=e;
  if(d==='math.max'||d==='math.min'||d==='math.avg'||d==='array.from'||d==='timestamp')return E=>{const a=[];for(let i=0;i<n;i++)a.push(fs[i]?fs[i](E):undefined);return f(E,a,null,node)};
  return E=>{const a=new Array(n);for(let i=0;i<n;i++)a[i]=fs[i]?fs[i](E):undefined;return f(E,a,st?gst(E,id):null,node)};
};
cp.fnc=function(fn){
  let c=this.fc.get(fn);if(c)return c;
  const loc=new Map();fn.params.forEach(p=>loc.set(p.name,loc.size));
  const set=new Set();this.collect(fn.body,set);set.forEach(n=>{if(!loc.has(n))loc.set(n,loc.size)});
  c={nl:loc.size,pi:fn.params.map(p=>loc.get(p.name)),defs:fn.params.map(p=>p.def?this.ex(p.def,{loc:null}):null),names:fn.params.map(p=>p.name)};
  this.fc.set(fn,c);
  c.body=this.block(fn.body,{loc});
  return c;
};
cp.ucall=function(e,sc,fn,selfF){
  const c=this.fnc(fn),afs=e.args.map(a=>this.ex(a,sc)),id=e.id;
  if(selfF)afs.unshift(selfF);
  Object.keys(e.kw).forEach(k=>{const i=c.names.indexOf(k);if(i<0)throw err(e,'parametro sconosciuto «'+k+'» per '+fn.name);afs[i]=this.ex(e.kw[k],sc)});
  return E=>{
    const vals=new Array(c.pi.length);
    for(let i=0;i<vals.length;i++)vals[i]=afs[i]?afs[i](E):(c.defs[i]?c.defs[i](E):NaN);
    let k=E.C.K.get(id);if(!k){k=new Ctx(c.nl);E.C.K.set(id,k)}
    const sv=E.C,ln=E.ln;E.C=k;
    for(let i=0;i<vals.length;i++)vset(E,k.L[c.pi[i]],vals[i]);
    if(++E.depth>60){E.depth=0;throw err(e,'troppe chiamate annidate')}
    const r=c.body(E);E.depth--;E.C=sv;E.ln=ln;E.brk=false;E.cont=false;return r;
  };
};
cp.ctor=function(e,sc,T){
  const names=T.fields.map(f=>f.name),defs=T.fields.map(f=>f.def?this.ex(f.def,{loc:null}):null);
  const afs=e.args.map(a=>this.ex(a,sc));
  Object.keys(e.kw).forEach(k=>{const i=names.indexOf(k);if(i<0)throw err(e,'campo sconosciuto «'+k+'» in '+T.name);afs[i]=this.ex(e.kw[k],sc)});
  const tn=T.name;
  return E=>{const o={__t:tn};for(let i=0;i<names.length;i++)o[names[i]]=afs[i]?afs[i](E):(defs[i]?defs[i](E):NaN);return o};
};
cp.input=function(e,sc,d){
  const P=INPUT_P[d],id=e.id;
  const get=k=>{const i=P.indexOf(k);if(e.kw[k])return e.kw[k];return i>=0?e.args[i]:undefined};
  const fs=this.args(e,sc,P);
  const dv=get('defval');
  if(d==='input.source'){
    const def=dv&&dv.t==='name'&&SRC_NAMES.includes(dv.n)?dv.n:'close';
    return E=>{
      let m=E.inp.get(id);
      if(!m){const a=fs.map(f=>f?f(E):undefined);m=this.inMeta(E,d,a,P,def);m.src=SRC_NAMES.includes(m.val)?m.val:def;E.inp.set(id,m)}
      return srcAt(E,m.src);
    };
  }
  return E=>{
    let m=E.inp.get(id);
    if(!m){const a=fs.map(f=>f?f(E):undefined);m=this.inMeta(E,d,a,P);E.inp.set(id,m)}
    return m.val;
  };
};
cp.inMeta=function(E,d,a,P,srcDef){
  const g=k=>a[P.indexOf(k)];
  let def=srcDef||g('defval'),type=d==='input'?(typeof def==='boolean'?'bool':typeof def==='string'?'string':def&&def.__c?'color':'float'):d.slice(6);
  if(d==='input'&&type==='float'&&Number.isInteger(def))type='int';
  const title=g('title')||'',group=g('group')||'',key=(group?group+' › ':'')+(title||('#'+(E.out.inputs.length+1)));
  const m={key,type,title:title||key,group,tooltip:g('tooltip')||'',inline:g('inline')||'',def,options:Array.isArray(g('options'))?g('options'):null,min:g('minval'),max:g('maxval'),step:g('step')};
  let v=def;
  if(E.opts.inputs&&Object.prototype.hasOwnProperty.call(E.opts.inputs,key)){
    let o=E.opts.inputs[key];
    if(type==='int'){o=Math.round(+o);if(isFinite(o))v=o}
    else if(type==='float'||type==='price'){o=+o;if(isFinite(o))v=o}
    else if(type==='bool')v=!!o;
    else if(type==='color'){if(o&&typeof o==='object'&&o.__c)v=mkc(o.r,o.g,o.b,o.t)}
    else if(type==='time'){o=+o;if(isFinite(o))v=o}
    else if(o!=null)v=String(o);
    if((type==='int'||type==='float')&&typeof v==='number'){if(m.min!=null&&v<m.min)v=m.min;if(m.max!=null&&v>m.max)v=m.max}
  }
  m.val=v;
  E.out.inputs.push({key,type,title:m.title,group,tooltip:m.tooltip,inline:m.inline,def:type==='source'?srcDef:def,val:v,options:m.options,min:m.min,max:m.max,step:m.step});
  return m;
};
cp.security=function(e,sc){
  const P=['symbol','timeframe','expression','gaps','lookahead','ignore_invalid_symbol','currency','calc_bars_count'];
  const fs=this.args(e,sc,P),tff=fs[1],ef=fs[2],la=fs[4],gp=fs[3],id=e.id;
  const exN=e.kw.expression||e.args[2],isT=exN&&exN.t==='tuple',tl=isT?exN.items.length:0;
  if(!ef)throw err(e,'request.security: manca l\'espressione');
  const naV=()=>isT?new Array(tl).fill(NaN):NaN;
  return E=>{
    if(E.sec)return ef(E);
    const tf=tfNorm(tff?tff(E):'');
    if(tf===''||tf===E.tf)return ef(E);
    const key=id+'|'+tf;let R=E.secR.get(key);
    if(!R){
      const D=E.secData&&E.secData[tf];
      if(!D||!D.t||!D.t.length){E.need.add(tf);return naV()}
      R={vals:[],t:D.t,ms:tfMsOf(tf),p:0};
      const sv={bar:E.bar,D:E.D,n:E.n,C:E.C,tf:E.tf,tfMs:E.tfMs,ln:E.ln};
      const kc=new Ctx(0);kc.L=E.C.L;
      E.sec=true;E.D=D;E.n=D.t.length;E.C=kc;E.tf=tf;E.tfMs=R.ms;
      try{for(let b=0;b<E.n;b++){E.bar=b;const v=ef(E);R.vals.push(Array.isArray(v)?v.slice():v)}}
      finally{E.sec=false;E.bar=sv.bar;E.D=sv.D;E.n=sv.n;E.C=sv.C;E.tf=sv.tf;E.tfMs=sv.tfMs;E.ln=sv.ln}
      E.secR.set(key,R);
    }
    const t=E.D.t[E.bar],lookOn=la?tru(la(E)):false,isLiveLast=E.live&&E.bar===E.n-1;
    const lim=(lookOn||isLiveLast)?t:t+E.tfMs;
    let j=R.p;
    if(lookOn||isLiveLast){while(j+1<R.t.length&&R.t[j+1]<=lim)j++}
    else{while(j+1<R.t.length&&R.t[j+1]+R.ms<=lim)j++}
    R.p=j;
    const okJ=(lookOn||isLiveLast)?R.t[j]<=lim:R.t[j]+R.ms<=lim;
    if(!okJ)return naV();
    if(gp&&tru(gp(E))&&j===R.lastJ)return naV();
    R.lastJ=j;
    const v=R.vals[j];return Array.isArray(v)?v.slice():v;
  };
};

/* ---------- interfaccia pubblica ---------- */
function compile(src){
  NID=1;
  const ast=parse(src),c=new Comp(ast);
  const main=c.block(ast.body,{loc:null});
  const m=/^\s*(indicator|strategy|library|study)\s*\(/m.exec(src);
  if(!m)throw PErr('manca la dichiarazione indicator() o strategy()',1);
  return{main,nG:c.G.size,version:ast.version,kind:m[1]==='study'?'indicator':m[1]};
}
function run(prog,data,opts){
  opts=opts||{};
  const n=data.t.length,t0=Date.now();
  const E={bar:0,n,D:data,tf:tfNorm(data.tf||''),mainTf:tfNorm(data.tf||''),tfMs:tfMsOf(data.tf||'1'),live:!!data.live,sym:data.sym||'',desc:data.desc||'',dec:data.dec==null?2:data.dec,tz:'UTC',now:Date.now(),
    fg:opts.fg?hexc(opts.fg):hexc('#D1D4DC'),bg:opts.bg?hexc(opts.bg):hexc('#000000'),
    G:[],C:new Ctx(0),brk:false,cont:false,sec:false,depth:0,ln:0,pos:0,seq:0,declared:false,
    inp:new Map(),secR:new Map(),secData:opts.sec||{},need:new Set(),opts,
    max:{box:50,line:50,label:50,table:20,linefill:50},live2:null,old:{box:0,line:0,label:0,table:0,linefill:0},
    out:{meta:{kind:prog.kind,title:'Script',short:'',overlay:false},inputs:[],plot:new Map(),hline:new Map(),fill:new Map(),shape:[],bg:{},barc:{},
      box:[],line:[],label:[],table:[],linefill:[],alerts:[],conds:[],condMeta:[],logs:[],orders:[]}};
  E.lc={box:0,line:0,label:0,table:0,linefill:0};
  for(let i=0;i<prog.nG;i++)E.G.push(new V());
  let error=null;
  try{
    for(let b=0;b<n;b++){
      E.bar=b;E.brk=E.cont=false;E.depth=0;
      prog.main(E);
      if((b&31)===0&&Date.now()-t0>(opts.maxMs||15000))throw PErr('lo script è troppo lento su questo grafico',E.ln);
    }
  }catch(x){error={msg:x&&x.pine?x.message:('errore interno: '+(x&&x.message||x)),ln:(x&&x.ln)||E.ln||0}}
  const O=E.out,cv=c=>css(c);
  const res={ms:Date.now()-t0,error,need:[...E.need],meta:O.meta,inputs:O.inputs,alerts:O.alerts,conds:O.conds,condMeta:O.condMeta,logs:O.logs,
    plots:[...O.plot.values()].map(p=>({id:p.id,title:p.title,lw:p.lw,style:p.style,off:p.off,disp:p.disp,ov:p.ov,vals:p.vals,cols:p.cols.map(cv)})),
    hlines:[...O.hline.values()].map(h=>({id:h.id,p:h.p,title:h.title,c:cv(h.c),st:h.st,w:h.w,disp:h.disp})),
    fills:[...O.fill.values()].map(f=>({a:f.a,ak:f.ak,b:f.b,bk:f.bk,cols:f.cols.map(cv)})),
    shapes:O.shape.map(s=>Object.assign({},s,{c:cv(s.c),tc:cv(s.tc)})),
    bg:Object.keys(O.bg).map(k=>({bar:+k,c:cv(O.bg[k])})).filter(x=>x.c),
    barc:Object.keys(O.barc).map(k=>({bar:+k,c:cv(O.barc[k])})).filter(x=>x.c),
    boxes:O.box.filter(o=>!o.del).map(o=>({l:o.l,t:o.t,r:o.r,b:o.b,bc:cv(o.bc),bw:o.bw,bs:o.bs,ext:o.ext,xl:o.xl,bg:cv(o.bg),tx:o.tx,ts:o.ts,tc:cv(o.tc),th:o.th,tv:o.tv})),
    lines:O.line.filter(o=>!o.del).map(o=>({x1:o.x1,y1:o.y1,x2:o.x2,y2:o.y2,xl:o.xl,ext:o.ext,c:cv(o.c),st:o.st,w:o.w,_o:o})),
    labels:O.label.filter(o=>!o.del).map(o=>({x:o.x,y:o.y,tx:o.tx,xl:o.xl,yl:o.yl,c:cv(o.c),st:o.st,tc:cv(o.tc),sz:o.sz,ta:o.ta})),
    tables:O.table.filter(o=>!o.del).map(o=>({pos:o.pos,cols:o.cols,rows:o.rows,bg:cv(o.bg),fc:cv(o.fc),fw:o.fw,brc:cv(o.brc),brw:o.brw,merges:o.merges,
      cells:Object.keys(o.cells).map(k=>{const c=o.cells[k],p=k.split(',');return{c:+p[0],r:+p[1],tx:String(c.tx==null?'':c.tx),w:c.w,h:c.h,tc:cv(c.tc),th:c.th,tv:c.tv,ts:c.ts,bg:cv(c.bg)}})})),
    linefills:O.linefill.filter(o=>!o.del&&o.l1&&o.l2&&!o.l1.del&&!o.l2.del).map(o=>({l1:o.l1,l2:o.l2,c:cv(o.c)})),
    orders:O.orders};
  const lmap=new Map();res.lines.forEach(L=>{lmap.set(L._o,L);delete L._o});
  res.linefills=res.linefills.map(f=>({a:lmap.get(f.l1),b:lmap.get(f.l2),c:f.c})).filter(f=>f.a&&f.b);
  return res;
}
return{compile,run,lex,parse,tfNorm,tfMsOf,hexc,css,version:'1.0'};
}
var PINE=PINE_SRC();


/* =====================================================================
   0.36.0 — INDICATORI: gli script Pine girano sul grafico
   - il motore lavora in sottofondo (Web Worker) per non bloccare l'app
   - plot come serie del grafico (sopra o in un riquadro sotto)
   - box, linee, etichette, tabelle, forme, riempimenti su un livello
   ===================================================================== */
var INT={
 it:{ind:"Indicatori",onchart:"Sul grafico",none:"Nessun indicatore sul grafico.",mine:"I miei script",builtin:"Integrati",add:"Aggiungi",added:"Aggiunto al grafico.",updated:"Indicatore aggiornato.",remove:"Rimuovi",removeq:"Togliere questo indicatore dal grafico?",
  settings:"Impostazioni",inputs:"Input",style:"Stile",reset:"Ripristina i valori predefiniti",show:"Visibile",hide:"Nascosto",error:"Errore",line:"riga",running:"Calcolo…",ms:"calcolato in {n} ms",
  noin:"Questo script non ha impostazioni.",editcode:"Modifica il codice",empty:"Nessuno script salvato: creane uno nell'Editor script.",editor:"Apri l'Editor script",
  alert:"Alert dall'indicatore",opacity:"Opacità",tfchart:"Come il grafico",src:"Sorgente",unsup:"Alcune funzioni di questo script non sono ancora supportate.",slow:"Lo script è pesante: si aggiorna ogni pochi secondi."},
 es:{ind:"Indicadores",onchart:"En el gráfico",none:"Ningún indicador en el gráfico.",mine:"Mis scripts",builtin:"Integrados",add:"Añadir",added:"Añadido al gráfico.",updated:"Indicador actualizado.",remove:"Quitar",removeq:"¿Quitar este indicador del gráfico?",
  settings:"Ajustes",inputs:"Entradas",style:"Estilo",reset:"Restablecer valores",show:"Visible",hide:"Oculto",error:"Error",line:"línea",running:"Calculando…",ms:"calculado en {n} ms",
  noin:"Este script no tiene ajustes.",editcode:"Editar el código",empty:"No hay scripts guardados: crea uno en el Editor de scripts.",editor:"Abrir el Editor de scripts",
  alert:"Alerta del indicador",opacity:"Opacidad",tfchart:"Como el gráfico",src:"Fuente",unsup:"Algunas funciones de este script aún no son compatibles.",slow:"El script es pesado: se actualiza cada pocos segundos."},
 en:{ind:"Indicators",onchart:"On the chart",none:"No indicators on the chart.",mine:"My scripts",builtin:"Built-in",add:"Add",added:"Added to the chart.",updated:"Indicator updated.",remove:"Remove",removeq:"Remove this indicator from the chart?",
  settings:"Settings",inputs:"Inputs",style:"Style",reset:"Reset to defaults",show:"Visible",hide:"Hidden",error:"Error",line:"line",running:"Calculating…",ms:"calculated in {n} ms",
  noin:"This script has no settings.",editcode:"Edit the code",empty:"No saved scripts: create one in the Script editor.",editor:"Open the Script editor",
  alert:"Indicator alert",opacity:"Opacity",tfchart:"Same as chart",src:"Source",unsup:"Some functions of this script are not supported yet.",slow:"The script is heavy: it updates every few seconds."},
 fr:{ind:"Indicateurs",onchart:"Sur le graphique",none:"Aucun indicateur sur le graphique.",mine:"Mes scripts",builtin:"Intégrés",add:"Ajouter",added:"Ajouté au graphique.",updated:"Indicateur mis à jour.",remove:"Retirer",removeq:"Retirer cet indicateur du graphique ?",
  settings:"Réglages",inputs:"Entrées",style:"Style",reset:"Rétablir les valeurs",show:"Visible",hide:"Masqué",error:"Erreur",line:"ligne",running:"Calcul…",ms:"calculé en {n} ms",
  noin:"Ce script n'a pas de réglages.",editcode:"Modifier le code",empty:"Aucun script enregistré : crée-en un dans l'Éditeur de scripts.",editor:"Ouvrir l'Éditeur de scripts",
  alert:"Alerte de l'indicateur",opacity:"Opacité",tfchart:"Comme le graphique",src:"Source",unsup:"Certaines fonctions de ce script ne sont pas encore prises en charge.",slow:"Le script est lourd : il se met à jour toutes les quelques secondes."}
};
function itx(k,o){let s=(INT[lang]&&INT[lang][k])||INT.it[k]||k;if(o)Object.keys(o).forEach(x=>{s=s.split('{'+x+'}').join(o[x])});return s}

/* ---------- motore in sottofondo ---------- */
var PW={w:null,q:new Map(),id:0};
function pineWorker(){
  if(PW.w!==null)return PW.w;
  try{
    const src='var PINE=('+PINE_SRC.toString()+')();var CC=new Map();'+
      'onmessage=function(e){var m=e.data,r;try{var p=CC.get(m.code);if(!p){p=PINE.compile(m.code);CC.set(m.code,p);if(CC.size>6)CC.delete(CC.keys().next().value)}r=PINE.run(p,m.data,m.opts)}'+
      'catch(x){r={error:{msg:x&&x.message||String(x),ln:x&&x.ln||0},need:[],plots:[],hlines:[],fills:[],shapes:[],bg:[],barc:[],boxes:[],lines:[],labels:[],tables:[],linefills:[],orders:[],inputs:[],alerts:[],conds:[],meta:null}}postMessage({id:m.id,r:r})};';
    const w=new Worker(URL.createObjectURL(new Blob([src],{type:'text/javascript'})));
    w.onmessage=e=>{const c=PW.q.get(e.data.id);PW.q.delete(e.data.id);if(c){clearTimeout(c.tm);c.ok(e.data.r)}};
    w.onerror=()=>{PW.w=false;PW.q.forEach(c=>c.ok(null));PW.q.clear()};
    PW.w=w;
  }catch(e){PW.w=false}
  return PW.w;
}
const EMPTY_RES=msg=>({error:{msg,ln:0},need:[],plots:[],hlines:[],fills:[],shapes:[],bg:[],barc:[],boxes:[],lines:[],labels:[],tables:[],linefills:[],orders:[],inputs:[],alerts:[],conds:[],meta:null});
function pineRun(code,data,opts){
  const w=pineWorker();
  if(!w)return new Promise(ok=>setTimeout(()=>{try{ok(PINE.run(PINE.compile(code),data,opts))}catch(x){ok(EMPTY_RES(x.message))}},0));
  return new Promise(ok=>{
    const id=++PW.id;
    const tm=setTimeout(()=>{PW.q.delete(id);try{w.terminate()}catch(e){}PW.w=null;ok(EMPTY_RES('lo script ci mette troppo'))},25000);
    PW.q.set(id,{ok,tm});w.postMessage({id,code,data,opts});
  });
}

/* ---------- indicatori sul grafico ---------- */
var IND=lsGet('tc_ind',[]);
var IR=new Map();          /* uid -> risultato */
var IS=new Map();          /* uid -> serie disegnate */
function indSave(){lsSet('tc_ind',IND.map(x=>({uid:x.uid,name:x.name,sid:x.sid||null,code:x.code,inputs:x.inputs||{},vis:x.vis!==false})))}
const RES_TF={'1m':'1','5m':'5','15m':'15','1H':'60','4H':'240','1D':'D'};
function indData(){
  const B=lastBars,n=B.length,D={t:new Array(n),o:new Array(n),h:new Array(n),l:new Array(n),c:new Array(n),v:new Array(n)};
  for(let i=0;i<n;i++){const b=B[i];D.t[i]=b.t;D.o[i]=b.o;D.h[i]=b.h;D.l[i]=b.l;D.c[i]=b.c;D.v[i]=b.v==null?0:b.v}
  D.tf=RES_TF[res]||'5';D.sym=cur;D.dec=dec;D.desc=BYN[cur]?info(BYN[cur]).desc:'';
  D.live=n?(B[n-1].t+SECS[res]*1000>Date.now()):false;
  return D;
}
/* timeframe superiori per request.security: dati dal broker, uniti se serve */
var SECC=new Map();
function tfPlan(tf){
  tf=PINE.tfNorm(tf);let m;
  if((m=/^(\d+)$/.exec(tf))){const n=+m[1];for(const[bm,br]of[[1440,'1D'],[240,'4H'],[60,'1H'],[15,'15m'],[5,'5m'],[1,'1m']])if(n%bm===0)return{base:br,ms:n*60000,kind:'i'};return null}
  if((m=/^(\d*)D$/.exec(tf)))return{base:'1D',ms:(+m[1]||1)*864e5,kind:'i'};
  if(/W$/.test(tf))return{base:'1D',ms:6048e5,kind:'w'};
  if(/M$/.test(tf))return{base:'1D',ms:2592e6,kind:'m'};
  return null;
}
function aggregate(B,plan){
  const out={t:[],o:[],h:[],l:[],c:[],v:[]};let key=null;
  const k=t=>{if(plan.kind==='w'){const d=new Date(t);const day=(d.getUTCDay()+6)%7;return Date.UTC(d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate()-day)}if(plan.kind==='m'){const d=new Date(t);return Date.UTC(d.getUTCFullYear(),d.getUTCMonth(),1)}return Math.floor(t/plan.ms)*plan.ms};
  for(const b of B){const kk=k(b.t),n=out.t.length;
    if(kk!==key){key=kk;out.t.push(kk);out.o.push(b.o);out.h.push(b.h);out.l.push(b.l);out.c.push(b.c);out.v.push(b.v||0)}
    else{out.h[n-1]=Math.max(out.h[n-1],b.h);out.l[n-1]=Math.min(out.l[n-1],b.l);out.c[n-1]=b.c;out.v[n-1]+=b.v||0}}
  return out;
}
async function secFetch(tf){
  const plan=tfPlan(tf),it=BYN[cur];if(!plan||!it||!lastBars.length)return null;
  const now=Date.now(),days=DAYS[plan.base]||60;
  const from=Math.max(lastBars[0].t-320*plan.ms,now-days*864e5);
  const B=await barsFor(it,plan.base,from,now);
  const D=aggregate(B,plan);
  SECC.set(cur+'|'+PINE.tfNorm(tf),{D,at:Date.now()});
  return D;
}
function secFor(){const o={};SECC.forEach((v,k)=>{const p=k.split('|');if(p[0]===cur)o[p[1]]=v.D});return o}

var INDS={busy:false,again:false,last:0,sig:'',tm:0,pend:false};
function indSig(){return cur+'|'+res+'|'+lastBars.length+'|'+(lastBars.length?lastBars[0].t+'|'+lastBars[lastBars.length-1].t:'')}
function indSchedule(force){
  if(!IND.length){indRender();return}
  if(!lastBars.length||!series)return;
  const major=force||indSig()!==INDS.sig;
  if(INDS.busy){INDS.again=true;if(major)INDS.force=true;return}
  if(major){clearTimeout(INDS.tm);INDS.pend=true;INDS.tm=setTimeout(indRunAll,80);return}
  if(INDS.pend)return;
  const gap=Math.max(2500,(INDS.cost||0)*4);
  INDS.pend=true;INDS.tm=setTimeout(indRunAll,Math.max(0,gap-(Date.now()-INDS.last)));
}
async function indRunAll(){
  INDS.pend=false;if(INDS.busy)return;
  if(!lastBars.length||!series)return;
  INDS.busy=true;INDS.again=false;INDS.force=false;
  const sig=indSig(),want=cur+'|'+res,t0=Date.now();
  try{
    /* aggiorno ogni tanto i timeframe superiori usati */
    for(const[k,v]of SECC){const p=k.split('|');if(p[0]===cur&&Date.now()-v.at>90000){try{await secFetch(p[1])}catch(e){}}}
    const D=indData(),fg=themeVar('--fg')||'#d1d4dc',bg=(cvRes&&cvRes().c1)||'#000000';
    for(const ind of IND.slice()){
      if(ind.vis===false){IR.delete(ind.uid);continue}
      let r=await pineRun(ind.code,D,{inputs:ind.inputs||{},sec:secFor(),fg,bg});
      if(!r)r=EMPTY_RES('motore non disponibile');
      if(r.need&&r.need.length){
        let got=false;for(const tf of r.need){try{if(await secFetch(tf))got=true}catch(e){}}
        if(got&&cur+'|'+res===want)r=await pineRun(ind.code,D,{inputs:ind.inputs||{},sec:secFor(),fg,bg})||r;
      }
      if(cur+'|'+res!==want)break;
      r.times=D.t;r.sym=cur;r.res=res;
      const prev=IR.get(ind.uid);
      IR.set(ind.uid,r);
      if(r.meta&&r.meta.title&&!ind.name){ind.name=r.meta.short||r.meta.title;indSave()}
      if(r.error&&(!prev||!prev.error||prev.error.msg!==r.error.msg))msg('⚠ '+(ind.name||'Script')+': '+r.error.msg+(r.error.ln?' ('+itx('line')+' '+r.error.ln+')':''));
      indAlerts(ind,r,D);
    }
    INDS.sig=sig;
  }catch(e){}
  INDS.cost=Date.now()-t0;INDS.last=Date.now();INDS.busy=false;
  indRender();
  if(INDS.again)indSchedule(INDS.force);
}
/* alert scritti nello script: avviso nell'app una volta per candela */
var IALS=lsGet('tc_ialseen',{});
function indAlerts(ind,r,D){
  const n=D.t.length;if(!n)return;const bt=D.t[n-1],list=[];
  (r.alerts||[]).forEach(m=>list.push(m));(r.conds||[]).forEach(c=>list.push(c.msg||c.title));
  list.forEach(m=>{const k=ind.uid+'|'+bt+'|'+m;if(IALS[k])return;IALS[k]=1;msg('🔔 '+(ind.name||'')+': '+String(m).replace(/\{\{ticker\}\}/g,cur).replace(/\{\{interval\}\}/g,res).replace(/\{\{close\}\}/g,fmt(D.c[n-1],dec)));haptic();try{beep()}catch(e){}});
  const ks=Object.keys(IALS);if(ks.length>300)ks.slice(0,ks.length-200).forEach(k=>delete IALS[k]);lsSet('tc_ialseen',IALS);
}
/* hook: ogni volta che arrivano dati nuovi */
(function(){const o=afterData;afterData=function(){o.apply(this,arguments);try{indSchedule(false)}catch(e){}}})();
(function(){const o=rebuildSeries;rebuildSeries=function(){o.apply(this,arguments);try{pcvDirty()}catch(e){}}})();

/* ---------- serie dei plot ---------- */
const chartT=ms=>Math.floor(ms/1000)-new Date(ms).getTimezoneOffset()*60;
function paneOf(ind,r){if(!r.meta||r.meta.overlay)return 0;let k=1;for(const x of IND){if(x===ind)break;const rr=IR.get(x.uid);if(x.vis!==false&&rr&&rr.meta&&!rr.meta.overlay&&!rr.error)k++}return k}
function indClearSeries(uid){const s=IS.get(uid);if(!s)return;s.list.forEach(x=>{try{chart.removeSeries(x)}catch(e){}});IS.delete(uid)}
function cleanPanes(){try{const ps=chart.panes();for(let i=ps.length-1;i>0;i--){if(!ps[i].getSeries().length)chart.removePane(i)}}catch(e){}}
function indRender(){
  if(!chart)return;
  const alive=new Set(IND.filter(x=>x.vis!==false).map(x=>x.uid));
  [...IS.keys()].forEach(u=>{if(!alive.has(u))indClearSeries(u)});
  const L=window.LightweightCharts;
  for(const ind of IND){
    const r=IR.get(ind.uid);
    if(!alive.has(ind.uid)||!r||r.error||r.sym!==cur||r.res!==res){indClearSeries(ind.uid);continue}
    const pane=paneOf(ind,r),times=r.times.map(chartT);
    const plots=r.plots.filter(p=>p.disp!==0&&(p.disp&1)),hl=r.hlines.filter(h=>h.disp!==0&&isFinite(h.p));
    const key=pane+'|'+plots.map(p=>p.style+p.id).join(',')+'|'+hl.map(h=>h.id).join(',');
    let S=IS.get(ind.uid);
    if(!S||S.key!==key){
      indClearSeries(ind.uid);S={key,list:[],map:{}};
      plots.forEach(p=>{
        const base={lastValueVisible:pane>0,priceLineVisible:false,title:'',priceFormat:{type:'price',precision:pane>0?2:dec,minMove:pane>0?0.01:Math.pow(10,-dec)}};
        let s,kind;
        if(p.style==='histogram'||p.style==='columns'){kind='Histogram';s=chart.addSeries(L.HistogramSeries,Object.assign(base,{base:p.hb||0}),pane)}
        else if(p.style==='area'){kind='Area';s=chart.addSeries(L.AreaSeries,Object.assign(base,{lineWidth:p.lw||1}),pane)}
        else{kind='Line';const pts=p.style==='circles'||p.style==='cross';s=chart.addSeries(L.LineSeries,Object.assign(base,{lineWidth:p.lw||1,lineType:p.style==='stepline'?1:0,lineVisible:!pts,pointMarkersVisible:pts,pointMarkersRadius:pts?2:undefined,crosshairMarkerVisible:!pts}),pane)}
        S.list.push(s);S.map['p'+p.id]={s,kind};
      });
      hl.forEach(h=>{const s=chart.addSeries(L.LineSeries,{color:h.c||'#787B86',lineWidth:h.w||1,lineStyle:h.st==='solid'?0:h.st==='dotted'?1:2,lastValueVisible:false,priceLineVisible:false,crosshairMarkerVisible:false},pane);S.list.push(s);S.map['h'+h.id]={s,kind:'H'}});
      IS.set(ind.uid,S);
    }
    plots.forEach(p=>{
      const o=S.map['p'+p.id];if(!o)return;const data=[];
      for(let i=0;i<times.length;i++){
        const j=i-(p.off||0);const v=j>=0&&j<p.vals.length?p.vals[j]:NaN,c=j>=0?p.cols[j]:null;
        if(!isFinite(v)){data.push({time:times[i]});continue}
        const d={time:times[i],value:v};
        if(o.kind==='Area'){if(c){d.lineColor=c;d.topColor=c.replace(/[\d.]+\)$/,'0.35)');d.bottomColor=c.replace(/[\d.]+\)$/,'0.02)')}}
        else if(c)d.color=c;else if(o.kind==='Line'){data.push({time:times[i]});continue}
        data.push(d);
      }
      try{o.s.setData(data)}catch(e){}
    });
    hl.forEach(h=>{const o=S.map['h'+h.id];if(!o)return;try{o.s.setData(times.map(t=>({time:t,value:h.p})))}catch(e){}});
  }
  cleanPanes();
  pcvDirty();indLegend();
}

/* ---------- livello di disegno degli script ---------- */
var PCV={cv:null,sig:'',dirty:true,raf:0};
function pcvDirty(){PCV.dirty=true;if(!PCV.raf)PCV.raf=requestAnimationFrame(pcvLoop)}
(function(){
  const cv=document.createElement('canvas');cv.id='pcv';cv.style.cssText='position:absolute;left:0;top:0;z-index:1;pointer-events:none';
  const box=$('chartbox');box.insertBefore(cv,$('draw'));PCV.cv=cv;
})();
function pcvLoop(){
  PCV.raf=0;
  const has=IND.some(x=>x.vis!==false&&IR.get(x.uid));
  if(!has){if(PCV.drawn){const c=PCV.cv;c.getContext('2d').clearRect(0,0,c.width,c.height);PCV.drawn=false}return}
  let sig='';
  try{const r=chart.timeScale().getVisibleLogicalRange();sig=(r?r.from.toFixed(2)+','+r.to.toFixed(2):'')+'|'+series.priceToCoordinate(lastBars.length?lastBars[lastBars.length-1].c:0)+'|'+series.priceToCoordinate(lastBars.length?lastBars[0].c*1.01:1)+'|'+$('chart').clientWidth+'x'+$('chart').clientHeight}catch(e){}
  if(PCV.dirty||sig!==PCV.sig){PCV.sig=sig;PCV.dirty=false;try{pcvDraw()}catch(e){}}
  if(tab==='ch')PCV.raf=requestAnimationFrame(pcvLoop);
}
document.addEventListener('visibilitychange',()=>{if(!document.hidden)pcvDirty()});
const FS={tiny:9,small:11,normal:13,large:17,huge:23,auto:11};
function dash(c,st){c.setLineDash(st==='dashed'?[6,4]:st==='dotted'?[2,3]:[])}
function pcvDraw(){
  const cv=PCV.cv,el=$('chart'),W=el.clientWidth,H=el.clientHeight,dpr=window.devicePixelRatio||1;
  if(cv.width!==Math.round(W*dpr)||cv.height!==Math.round(H*dpr)){cv.width=Math.round(W*dpr);cv.height=Math.round(H*dpr);cv.style.width=W+'px';cv.style.height=H+'px'}
  const c=cv.getContext('2d');c.setTransform(dpr,0,0,dpr,0,0);c.clearRect(0,0,W,H);PCV.drawn=true;
  if(!series||!lastBars.length)return;
  const ts=chart.timeScale(),pw=ts.width();let ph=H-30;try{ph=chart.panes()[0].getHeight()}catch(e){}
  const vr=ts.getVisibleLogicalRange();if(!vr)return;
  const spacing=Math.max(1,(ts.logicalToCoordinate(1)||0)-(ts.logicalToCoordinate(0)||0));
  c.save();c.beginPath();c.rect(0,0,pw,ph);c.clip();
  for(const ind of IND){
    const r=IR.get(ind.uid);if(ind.vis===false||!r||r.error||r.sym!==cur||r.res!==res)continue;
    const ov=!r.meta||r.meta.overlay;
    /* indice della prima candela del risultato nel grafico attuale */
    let off=0;if(r.times.length&&lastBars.length&&lastBars[0].t!==r.times[0]){const k=lastBars.findIndex(b=>b.t===r.times[0]);off=k>=0?k:0}
    const X=i=>ts.logicalToCoordinate(i+off),XT=ms=>{const l=tToL(chartT(ms));return l==null?null:ts.logicalToCoordinate(l)};
    const xOf=(x,xl)=>xl==='bt'?XT(x):X(x),Y=p=>series.priceToCoordinate(p);
    const inView=(a,b)=>!(Math.max(a,b)<vr.from-off-2||Math.min(a,b)>vr.to-off+2);
    const i0=Math.max(0,Math.floor(vr.from-off)-1),i1=Math.min(r.times.length-1,Math.ceil(vr.to-off)+1);
    if(ov){
      /* sfondi */
      for(const b of r.bg){if(b.bar<i0||b.bar>i1)continue;const x=X(b.bar);if(x==null)continue;c.fillStyle=b.c;c.fillRect(x-spacing/2,0,spacing,ph)}
      /* riempimenti tra plot o hline */
      const series2=(k,id)=>{if(k==='hline'){const h=r.hlines.find(x=>x.id===id);return h?(()=>h.p):null}const p=r.plots.find(x=>x.id===id);return p?(i=>p.vals[i]):null};
      for(const f of r.fills){const A=series2(f.ak,f.a),B=series2(f.bk,f.b);if(!A||!B)continue;
        for(let i=Math.max(i0,0);i<i1;i++){const col=f.cols[i];if(!col)continue;const a0=A(i),a1=A(i+1),b0=B(i),b1=B(i+1);if(![a0,a1,b0,b1].every(isFinite))continue;
          const x0=X(i),x1=X(i+1);if(x0==null||x1==null)continue;c.fillStyle=col;c.beginPath();c.moveTo(x0,Y(a0));c.lineTo(x1,Y(a1));c.lineTo(x1,Y(b1));c.lineTo(x0,Y(b0));c.closePath();c.fill()}}
      /* box */
      for(const b of r.boxes){
        if(![b.l,b.r,b.t,b.b].every(isFinite))continue;
        if(b.xl!=='bt'&&b.ext==='none'&&!inView(b.l,b.r))continue;
        let x1=xOf(b.l,b.xl),x2=xOf(b.r,b.xl);const y1=Y(b.t),y2=Y(b.b);if(x1==null||x2==null||y1==null||y2==null)continue;
        if(b.ext==='left'||b.ext==='both')x1=Math.min(x1,x2)===x1?0:x1;if(b.ext==='right'||b.ext==='both')x2=pw;
        const L=Math.min(x1,x2),R=Math.max(x1,x2),T=Math.min(y1,y2),Bm=Math.max(y1,y2);
        if(b.bg){c.fillStyle=b.bg;c.fillRect(L,T,R-L,Bm-T)}
        if(b.bc&&b.bw>0){c.strokeStyle=b.bc;c.lineWidth=b.bw;dash(c,b.bs);c.strokeRect(L+0.5,T+0.5,R-L,Bm-T);c.setLineDash([])}
        if(b.tx&&b.tc&&Bm-T>8){
          const fs=b.ts==='auto'?Math.max(8,Math.min(13,(Bm-T)*0.6)):FS[b.ts]||11;
          c.save();c.beginPath();c.rect(L,T,R-L,Bm-T);c.clip();
          c.font='600 '+fs+'px -apple-system,system-ui,sans-serif';c.fillStyle=b.tc;
          c.textAlign=b.th==='left'?'left':b.th==='right'?'right':'center';c.textBaseline=b.tv==='top'?'top':b.tv==='bottom'?'bottom':'middle';
          const tx=b.th==='left'?L+4:b.th==='right'?R-4:(L+R)/2,ty=b.tv==='top'?T+3:b.tv==='bottom'?Bm-3:(T+Bm)/2;
          String(b.tx).split('\n').forEach((s,k,a)=>c.fillText(s,tx,ty+(k-(a.length-1)/2)*(fs+2)));
          c.restore();
        }
      }
      /* riempimenti tra linee */
      for(const f of r.linefills){if(!f.c)continue;const a=f.a,b=f.b;const p=[[xOf(a.x1,a.xl),Y(a.y1)],[xOf(a.x2,a.xl),Y(a.y2)],[xOf(b.x2,b.xl),Y(b.y2)],[xOf(b.x1,b.xl),Y(b.y1)]];if(p.some(q=>q[0]==null||q[1]==null))continue;c.fillStyle=f.c;c.beginPath();p.forEach((q,i)=>i?c.lineTo(q[0],q[1]):c.moveTo(q[0],q[1]));c.closePath();c.fill()}
      /* linee */
      for(const l of r.lines){
        if(![l.x1,l.y1,l.x2,l.y2].every(isFinite)||!l.c)continue;
        if(l.xl!=='bt'&&l.ext==='none'&&!inView(l.x1,l.x2))continue;
        let x1=xOf(l.x1,l.xl),x2=xOf(l.x2,l.xl),y1=Y(l.y1),y2=Y(l.y2);if(x1==null||x2==null||y1==null||y2==null)continue;
        const dx=x2-x1,dy=y2-y1;
        if((l.ext==='right'||l.ext==='both')&&dx!==0){const k=(pw-x1)/dx;if(k>1){x2=x1+dx*k;y2=y1+dy*k}}else if((l.ext==='right'||l.ext==='both')&&dx===0)y2=dy>0?ph:0;
        if((l.ext==='left'||l.ext==='both')&&dx!==0){const k=-x1/dx;if(k<0){x1=x1+dx*k;y1=y1+dy*k}}
        c.strokeStyle=l.c;c.lineWidth=l.w||1;dash(c,l.st);c.beginPath();c.moveTo(x1,y1);c.lineTo(x2,y2);c.stroke();c.setLineDash([]);
        const ah=(ax,ay,bx,by)=>{const a=Math.atan2(by-ay,bx-ax);c.fillStyle=l.c;c.beginPath();c.moveTo(bx,by);c.lineTo(bx-9*Math.cos(a-0.45),by-9*Math.sin(a-0.45));c.lineTo(bx-9*Math.cos(a+0.45),by-9*Math.sin(a+0.45));c.closePath();c.fill()};
        if(l.st==='arrow_right'||l.st==='arrow_both')ah(x1,y1,x2,y2);if(l.st==='arrow_left'||l.st==='arrow_both')ah(x2,y2,x1,y1);
      }
      /* forme di plotshape / plotchar */
      for(const s of r.shapes){if(s.bar<i0||s.bar>i1)continue;const x=X(s.bar);if(x==null)continue;pcvShape(c,s,x,r,ph,Y)}
      /* segnali delle strategie */
      for(const o of r.orders){if(o.bar<i0||o.bar>i1)continue;const x=X(o.bar),bb=lastBars[o.bar+off];if(x==null||!bb)continue;
        const up=o.d>0,y=up?Y(bb.l)+16:Y(bb.h)-16;pcvShape(c,{st:o.d===0?'xcross':up?'arrowup':'arrowdown',c:o.d>0?'#22ab94':o.d<0?'#f23645':'#9598a1',tx:o.tx,tc:o.d>0?'#22ab94':o.d<0?'#f23645':'#9598a1',sz:'small',loc:'absolute',y:NaN},x,r,ph,Y,y)}
      /* etichette */
      for(const lb of r.labels){
        if(!isFinite(lb.x))continue;
        if(lb.xl!=='bt'&&!inView(lb.x,lb.x))continue;
        const x=xOf(lb.x,lb.xl);if(x==null)continue;
        let y;if(lb.yl==='abovebar'||lb.yl==='belowbar'){const bi=lb.xl==='bt'?null:Math.round(lb.x)+off,bb=bi!=null?lastBars[bi]:null;if(!bb)continue;y=lb.yl==='abovebar'?Y(bb.h)-6:Y(bb.l)+6}else{if(!isFinite(lb.y))continue;y=Y(lb.y)}
        if(y==null)continue;pcvLabel(c,lb,x,y);
      }
    }
    /* tabelle (anche per gli script nel riquadro sotto) */
    for(const tb of r.tables)pcvTable(c,tb,pw,ph);
  }
  c.restore();
}
function pcvShape(c,s,x,r,ph,Y,yForce){
  const sz={tiny:6,small:9,normal:12,large:17,huge:24,auto:9}[s.sz]||9;
  let y,below;
  if(yForce!=null){y=yForce;below=s.st==='arrowup'}
  else if(s.loc==='absolute'){y=Y(s.y);below=false}
  else if(s.loc==='top'){y=sz+4;below=false}
  else if(s.loc==='bottom'){y=ph-sz-4;below=true}
  else{const b=lastBars[s.bar+(r&&r.times.length&&lastBars[0].t!==r.times[0]?Math.max(0,lastBars.findIndex(q=>q.t===r.times[0])):0)];if(!b)return;below=s.loc==='belowbar';y=below?Y(b.l)+sz+6:Y(b.h)-sz-6}
  if(y==null)return;
  c.fillStyle=s.c||'#2196F3';c.strokeStyle=s.c||'#2196F3';c.lineWidth=2;c.setLineDash([]);
  const h=sz;
  switch(s.st){
    case 'char':c.font=(h*1.4)+'px -apple-system,system-ui,sans-serif';c.textAlign='center';c.textBaseline='middle';c.fillText(s.ch||'★',x,y);break;
    case 'circle':c.beginPath();c.arc(x,y,h/2,0,7);c.fill();break;
    case 'square':c.fillRect(x-h/2,y-h/2,h,h);break;
    case 'diamond':c.beginPath();c.moveTo(x,y-h/1.6);c.lineTo(x+h/1.6,y);c.lineTo(x,y+h/1.6);c.lineTo(x-h/1.6,y);c.closePath();c.fill();break;
    case 'cross':c.beginPath();c.moveTo(x-h/2,y);c.lineTo(x+h/2,y);c.moveTo(x,y-h/2);c.lineTo(x,y+h/2);c.stroke();break;
    case 'xcross':c.beginPath();c.moveTo(x-h/2,y-h/2);c.lineTo(x+h/2,y+h/2);c.moveTo(x+h/2,y-h/2);c.lineTo(x-h/2,y+h/2);c.stroke();break;
    case 'triangleup':case 'arrowup':c.beginPath();c.moveTo(x,y-h/1.4);c.lineTo(x+h/1.6,y+h/2);c.lineTo(x-h/1.6,y+h/2);c.closePath();c.fill();if(s.st==='arrowup')c.fillRect(x-h/5,y+h/2,h/2.5,h/1.5);break;
    case 'triangledown':case 'arrowdown':c.beginPath();c.moveTo(x,y+h/1.4);c.lineTo(x+h/1.6,y-h/2);c.lineTo(x-h/1.6,y-h/2);c.closePath();c.fill();if(s.st==='arrowdown')c.fillRect(x-h/5,y-h/2-h/1.5,h/2.5,h/1.5);break;
    case 'flag':c.fillRect(x-h/2,y-h/2,2,h);c.beginPath();c.moveTo(x-h/2+2,y-h/2);c.lineTo(x+h/2,y-h/4);c.lineTo(x-h/2+2,y);c.closePath();c.fill();break;
    case 'labelup':case 'labeldown':{
      const t=s.tx||'',f=Math.max(9,h+2);c.font='600 '+f+'px -apple-system,system-ui,sans-serif';
      const w=Math.max(h*1.6,c.measureText(t).width+10),bh=f+8,up=s.st==='labelup',by=up?y-2:y-bh+2;
      c.beginPath();c.moveTo(x,up?y-8:y+8);c.lineTo(x-5,up?y-2:y+2);c.lineTo(x+5,up?y-2:y+2);c.closePath();c.fill();
      rrect(c,x-w/2,up?y-2:y-bh+2,w,bh,4);c.fill();
      if(t){c.fillStyle=s.tc||'#fff';c.textAlign='center';c.textBaseline='middle';c.fillText(t,x,by+bh/2)}
      return;
    }
    default:c.beginPath();c.moveTo(x-h/2,y-h/2);c.lineTo(x+h/2,y+h/2);c.moveTo(x+h/2,y-h/2);c.lineTo(x-h/2,y+h/2);c.stroke();
  }
  if(s.tx){c.font='600 11px -apple-system,system-ui,sans-serif';c.fillStyle=s.tc||s.c;c.textAlign='center';c.textBaseline=below?'top':'bottom';c.fillText(s.tx,x,below?y+h/2+3:y-h/2-3)}
}
function pcvLabel(c,lb,x,y){
  const f=FS[lb.sz]||13,t=String(lb.tx||'');c.font='600 '+f+'px -apple-system,system-ui,sans-serif';
  const lines=t.split('\n'),tw=Math.max(0,...lines.map(s=>c.measureText(s).width)),w=tw+12,h=lines.length*(f+3)+6,st=lb.st;
  const txt=(cx,cy,al)=>{c.fillStyle=lb.tc||'#fff';c.textAlign=al||'center';c.textBaseline='middle';lines.forEach((s,k)=>c.fillText(s,cx,cy+(k-(lines.length-1)/2)*(f+3)))};
  if(st==='none'||st==='text_outline'){txt(x,y,lb.ta==='left'?'left':lb.ta==='right'?'right':'center');return}
  if(/^label_/.test(st)){
    let bx=x-w/2,by=y-h/2,tip=null;
    if(st==='label_down'){by=y-h-6;tip=[[x,y],[x-5,y-6],[x+5,y-6]]}
    else if(st==='label_up'){by=y+6;tip=[[x,y],[x-5,y+6],[x+5,y+6]]}
    else if(st==='label_left'){bx=x+6;tip=[[x,y],[x+6,y-5],[x+6,y+5]]}
    else if(st==='label_right'){bx=x-w-6;tip=[[x,y],[x-6,y-5],[x-6,y+5]]}
    else if(st==='label_lower_left'){bx=x;by=y}else if(st==='label_lower_right'){bx=x-w;by=y}else if(st==='label_upper_left'){bx=x;by=y-h}else if(st==='label_upper_right'){bx=x-w;by=y-h}
    if(lb.c){c.fillStyle=lb.c;if(tip){c.beginPath();c.moveTo(tip[0][0],tip[0][1]);c.lineTo(tip[1][0],tip[1][1]);c.lineTo(tip[2][0],tip[2][1]);c.closePath();c.fill()}rrect(c,bx,by,w,h,4);c.fill()}
    txt(bx+w/2,by+h/2);return;
  }
  pcvShape(c,{st,c:lb.c||'#2196F3',sz:lb.sz==='normal'?'small':lb.sz,tx:'',loc:'absolute'},x,null,0,()=>y,y);
  if(t)txt(x,y-(f+10));
}
function pcvTable(c,tb,pw,ph){
  if(!tb.cells.length)return;
  const cols=Math.max(tb.cols,1),rows=Math.max(tb.rows,1),cw=new Array(cols).fill(0),rh=new Array(rows).fill(0),cov=new Set(),span={};
  (tb.merges||[]).forEach(m=>{for(let x=m[0];x<=m[2];x++)for(let y=m[1];y<=m[3];y++)if(x!==m[0]||y!==m[1])cov.add(x+','+y);span[m[0]+','+m[1]]=m});
  const cells=tb.cells.filter(k=>k.c<cols&&k.r<rows&&!cov.has(k.c+','+k.r));
  cells.forEach(k=>{const f=FS[k.ts]||13;c.font='500 '+f+'px -apple-system,system-ui,sans-serif';const w=Math.max(...String(k.tx).split('\n').map(s=>c.measureText(s).width))+12,h=String(k.tx).split('\n').length*(f+3)+6;k._f=f;
    const sp=span[k.c+','+k.r];if(!sp)cw[k.c]=Math.max(cw[k.c],k.w?k.w*pw/100:w);rh[k.r]=Math.max(rh[k.r],k.h?k.h*ph/100:h)});
  cells.forEach(k=>{const sp=span[k.c+','+k.r];if(sp){let tot=0;for(let x=sp[0];x<=sp[2];x++)tot+=cw[x];c.font='500 '+k._f+'px -apple-system,system-ui,sans-serif';const need=Math.max(...String(k.tx).split('\n').map(s=>c.measureText(s).width))+12;if(need>tot)cw[sp[2]]+=need-tot}});
  const W=cw.reduce((a,b)=>a+b,0),H=rh.reduce((a,b)=>a+b,0),m=8;
  const pos=tb.pos||'top_right',x0=/left/.test(pos)?m:/center/.test(pos)?(pw-W)/2:pw-W-m,y0=/^top/.test(pos)?m+(window.innerWidth<500?44:0):/^middle/.test(pos)?(ph-H)/2:ph-H-m;
  if(tb.bg){c.fillStyle=tb.bg;c.fillRect(x0,y0,W,H)}
  const cx=[x0];cw.forEach((w,i)=>cx.push(cx[i]+w));const cy=[y0];rh.forEach((h,i)=>cy.push(cy[i]+h));
  cells.forEach(k=>{const sp=span[k.c+','+k.r]||[k.c,k.r,k.c,k.r];const L=cx[sp[0]],R=cx[sp[2]+1],T=cy[sp[1]],B=cy[sp[3]+1];
    if(k.bg){c.fillStyle=k.bg;c.fillRect(L,T,R-L,B-T)}
    if(tb.brc&&tb.brw){c.strokeStyle=tb.brc;c.lineWidth=tb.brw;c.strokeRect(L,T,R-L,B-T)}
    if(k.tx&&k.tc){c.font='500 '+k._f+'px -apple-system,system-ui,sans-serif';c.fillStyle=k.tc;c.textAlign=k.th==='left'?'left':k.th==='right'?'right':'center';c.textBaseline='middle';
      const tx=k.th==='left'?L+6:k.th==='right'?R-6:(L+R)/2,ls=String(k.tx).split('\n');ls.forEach((s,i)=>c.fillText(s,tx,(T+B)/2+(i-(ls.length-1)/2)*(k._f+3)))}});
  if(tb.fc&&tb.fw){c.strokeStyle=tb.fc;c.lineWidth=tb.fw;c.strokeRect(x0,y0,W,H)}
}
/* ---------- nomi degli indicatori nella legenda ---------- */
(function(){
  const st=document.createElement('style');
  st.textContent=`#lgind{display:flex;flex-direction:column;gap:3px;margin-top:6px;pointer-events:auto}
#lgind[hidden]{display:none}
#lgind button{display:inline-flex;align-items:center;gap:6px;width:auto;max-width:100%;margin:0;padding:3px 8px;border-radius:8px;border:0;background:var(--glasssel);color:var(--fg);font-size:12.5px;font-weight:600;align-self:flex-start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
#lgind button.off{opacity:.5}#lgind button.err{color:var(--down)}
#lgind button i{font-style:normal;color:var(--muted);font-weight:500}`;
  document.head.appendChild(st);
  /* la freccia della legenda apre e chiude l'elenco degli indicatori */
  $('lgbtn').onclick=()=>{let o=lsGet('tc_lgopen',true);o=!o;lsSet('tc_lgopen',o);indLegend()};
})();
function indLegend(){
  const d=$('lgind');if(!d)return;d.innerHTML='';
  const open=lsGet('tc_lgopen',true);d.hidden=!open;$('lgbtn').classList.toggle('open',open);
  if(!IND.length){const n=document.createElement('span');n.style.cssText='font-size:12.5px;color:var(--muted)';n.textContent=itx('none');d.appendChild(n)}
  IND.forEach(ind=>{
    const r=IR.get(ind.uid),b=document.createElement('button');
    b.className=(ind.vis===false?'off':'')+(r&&r.error?' err':'');
    b.textContent=(r&&r.error?'⚠ ':'')+(ind.name||'Script');
    const ins=r&&r.inputs?r.inputs.filter(x=>x.type==='int'||x.type==='float').slice(0,3).map(x=>x.val):[];
    if(ins.length){const i=document.createElement('i');i.textContent=ins.join(' ');b.appendChild(i)}
    b.onclick=e=>{e.stopPropagation();openHub();hubPage(ind.name||'Script',bb=>pageIndSet(bb,ind))};
    d.appendChild(b);
  });
}

/* ---------- aggiungere, togliere ---------- */
function indAdd(code,name,sid){
  try{PINE.compile(code)}catch(e){return{error:e.message,ln:e.ln}}
  let ind=sid?IND.find(x=>x.sid===sid):null;
  if(ind){ind.code=code;ind.name=name||ind.name;msg(itx('updated'))}
  else{ind={uid:'I'+Date.now().toString(36)+Math.random().toString(36).slice(2,5),name,sid:sid||null,code,inputs:{},vis:true};IND.push(ind);msg(itx('added'))}
  indSave();IR.delete(ind.uid);indClearSeries(ind.uid);indSchedule(true);indLegend();
  return{ok:true,ind};
}
function indRemove(ind){IND=IND.filter(x=>x!==ind);IR.delete(ind.uid);indClearSeries(ind.uid);indSave();cleanPanes();indRender()}

/* ---------- pagina Indicatori nell'Hub ---------- */
function pageInd(b){
  shEl(b,'sh-l',itx('onchart'));
  if(!IND.length)shEl(b,'sh-note',itx('none'));
  IND.forEach(ind=>{
    const r=IR.get(ind.uid);
    const eye=document.createElement('button');eye.className='addb';eye.textContent=ind.vis===false?'◌':'◉';eye.setAttribute('aria-label',itx(ind.vis===false?'hide':'show'));
    eye.onclick=e=>{e.stopPropagation();ind.vis=ind.vis===false;indSave();indSchedule(true);indRender();hubRender()};
    const it=shItem(b,ind.name||'Script',{right:eye,on:()=>hubPage(ind.name||'Script',bb=>pageIndSet(bb,ind))});
    const sp=it.querySelector('span');
    if(r&&r.error){const s=document.createElement('small');s.style.cssText='display:block;color:var(--down);font-size:12px;margin-top:2px;white-space:normal';s.textContent=itx('error')+(r.error.ln?' ('+itx('line')+' '+r.error.ln+')':'')+': '+r.error.msg;sp.appendChild(s)}
    else if(r){const s=document.createElement('small');s.style.cssText='display:block;color:var(--muted);font-size:12px;margin-top:2px';s.textContent=itx('ms',{n:r.ms});sp.appendChild(s)}
  });
  shEl(b,'sh-l',itx('mine'));
  if(!ED.list.length){shEl(b,'sh-note',itx('empty'));shItem(b,itx('editor'),{on:()=>{closeHub();openEditor()}})}
  ED.list.forEach(s=>{
    const add=document.createElement('button');add.className='addb';add.textContent='+';add.setAttribute('aria-label',itx('add'));
    const go=()=>{const nm=edTitleOf(s.code)||s.name,r=indAdd(s.code,nm,s.id);if(r.error)msg('⚠ '+r.error+(r.ln?' ('+itx('line')+' '+r.ln+')':''));else hubRender()};
    add.onclick=e=>{e.stopPropagation();go()};
    shItem(b,s.name,{right:add,on:go});
  });
  shEl(b,'sh-l',itx('builtin'));
  ED_BUILTIN.forEach(([n,code])=>{
    const add=document.createElement('button');add.className='addb';add.textContent='+';
    const go=()=>{const r=indAdd(code,(/shorttitle="([^"]+)"/.exec(code)||[])[1]||n,'b:'+n);if(!r.error)hubRender()};
    add.onclick=e=>{e.stopPropagation();go()};
    shItem(b,n,{right:add,on:go});
  });
}
const TF_OPTS=['','1','5','15','30','60','120','180','240','D','W','M'];
function tfLabel(v){if(v==='')return itx('tfchart');if(/^\d+$/.test(v)){const n=+v;return n%60===0?(n/60)+'h':n+'m'}return v==='D'?'1D':v==='W'?'1W':v==='M'?'1M':v}
function pageIndSet(b,ind){
  const r=IR.get(ind.uid);
  if(r&&r.error){const n=shEl(b,'sh-note','⚠ '+r.error.msg+(r.error.ln?' ('+itx('line')+' '+r.error.ln+')':''));n.style.color='var(--down)'}
  const vis=cvSwitch(ind.vis!==false,v=>{ind.vis=v;indSave();indSchedule(true);indRender()});
  cvRow(b,itx('show'),vis);
  const list=r&&r.inputs?r.inputs:[];
  if(!list.length&&r&&!r.error)shEl(b,'sh-note',itx('noin'));
  let lastG=null,tmr=0;
  const upd=(k,v)=>{ind.inputs=ind.inputs||{};ind.inputs[k]=v;indSave();clearTimeout(tmr);tmr=setTimeout(()=>indSchedule(true),350)};
  list.forEach(inp=>{
    if(inp.group!==lastG){lastG=inp.group;shEl(b,'sh-l',inp.group||itx('inputs'))}
    const cur0=ind.inputs&&Object.prototype.hasOwnProperty.call(ind.inputs,inp.key)?ind.inputs[inp.key]:inp.val;
    let ctl;
    switch(inp.type){
      case 'bool':ctl=cvSwitch(!!cur0,v=>upd(inp.key,v));break;
      case 'int':case 'float':case 'price':{
        const i=document.createElement('input');i.type='number';i.inputMode='decimal';i.className='cvnum';i.style.width='86px';i.value=cur0;
        if(inp.min!=null)i.min=inp.min;if(inp.max!=null)i.max=inp.max;i.step=inp.step||(inp.type==='int'?1:'any');
        i.onchange=()=>{let v=+String(i.value).replace(',','.');if(!isFinite(v))return;if(inp.type==='int')v=Math.round(v);if(inp.min!=null)v=Math.max(inp.min,v);if(inp.max!=null)v=Math.min(inp.max,v);i.value=v;upd(inp.key,v)};
        if(inp.options){ctl=cvSelect(inp.options.map(o=>[o,String(o)]),cur0,v=>upd(inp.key,+v))}else ctl=i;break;
      }
      case 'string':
        if(inp.options)ctl=cvSelect(inp.options.map(o=>[o,o]),cur0,v=>upd(inp.key,v));
        else{const i=document.createElement('input');i.type='text';i.className='cvsel';i.style.width='150px';i.value=cur0;i.onchange=()=>upd(inp.key,i.value);ctl=i}
        break;
      case 'session':case 'symbol':case 'text_area':{const i=document.createElement('input');i.type='text';i.className='cvsel';i.style.width='130px';i.value=cur0;i.onchange=()=>upd(inp.key,i.value.trim());ctl=i;break}
      case 'timeframe':{const o=TF_OPTS.slice();if(!o.includes(cur0))o.push(cur0);ctl=cvSelect((inp.options||o).map(v=>[v,tfLabel(v)]),cur0,v=>upd(inp.key,v));break}
      case 'source':ctl=cvSelect(['open','high','low','close','hl2','hlc3','ohlc4','hlcc4','volume'].map(v=>[v,v]),cur0,v=>upd(inp.key,v));break;
      case 'color':{
        const c0=cur0&&cur0.__c?cur0:{r:33,g:150,b:243,t:0};
        const hex='#'+[c0.r,c0.g,c0.b].map(x=>Math.round(x).toString(16).padStart(2,'0')).join('');
        const w=document.createElement('span');w.className='cvnumw';
        const ci=cvColor(hex,v=>{const n=parseInt(v.slice(1),16);c0.r=n>>16&255;c0.g=n>>8&255;c0.b=n&255;upd(inp.key,{__c:1,r:c0.r,g:c0.g,b:c0.b,t:c0.t})});
        const rg=document.createElement('input');rg.type='range';rg.min=0;rg.max=100;rg.step=5;rg.value=100-c0.t;rg.className='ccrng';rg.style.width='80px';
        rg.oninput=()=>{c0.t=100-(+rg.value);upd(inp.key,{__c:1,r:c0.r,g:c0.g,b:c0.b,t:c0.t})};
        w.appendChild(ci);w.appendChild(rg);ctl=w;break;
      }
      default:{const i=document.createElement('input');i.type='text';i.className='cvsel';i.value=cur0;i.onchange=()=>upd(inp.key,i.value);ctl=i}
    }
    const row=cvRow(b,inp.title,ctl);
    if(inp.tooltip){const tl=row.querySelector('.cvl'),s=document.createElement('small');s.style.cssText='display:block;color:var(--muted);font-size:11.5px;line-height:1.35;margin-top:3px;white-space:normal';s.textContent=inp.tooltip;tl.appendChild(s);row.style.alignItems='flex-start'}
  });
  shEl(b,'sh-sep','');
  if(list.length)shItem(b,itx('reset'),{on:()=>{ind.inputs={};indSave();indSchedule(true);setTimeout(hubRender,600)}});
  if(ind.sid&&!/^b:/.test(ind.sid))shItem(b,itx('editcode'),{on:()=>{const s=ED.list.find(x=>x.id===ind.sid);closeHub();openEditor();if(s&&(!ED.cur||ED.cur.id!==s.id)&&edConfirmLeave())edLoad({id:s.id,name:s.name,kind:s.kind,code:s.code,saved:s.code})}});
  shItem(b,itx('remove'),{danger:true,on:()=>{if(!confirm(itx('removeq')))return;indRemove(ind);hubBack()}});
}
/* il riquadro "Indicatori" dell'Hub apre la pagina vera */
(function(){
  const o=hubRoot;
  hubRoot=function(b){o(b);const t=[...b.querySelectorAll('.htile')].find(x=>x.textContent.trim()===th('a_ind'));if(t)t.onclick=()=>hubPage(itx('ind'),pageInd)};
})();

/* ---------- editor: "Aggiungi al grafico" vero ---------- */
edMoreMenu=function(){
  edMenu(m=>{
    smItem(m,edt('addchart'),{ic:'chart',on:()=>{
      const code=ED.ta.value,errs=edCheck(code).filter(x=>x.lv==='e');
      if(errs.length){edRunCheck(true);return}
      if(edDirty()||!ED.cur.id){edSave(ED.cur.id?null:(edTitleOf(code)||ED.cur.name));if(!ED.cur.id)return}
      const r=indAdd(code,edTitleOf(code)||ED.cur.name,ED.cur.id);
      if(r.error){ED.msgs=[];edRunCheck(true);const con=ED.con,x=document.createElement('button');x.className='cm e';x.innerHTML='<i></i><em></em><span></span>';x.children[0].textContent=edt('err');x.children[1].textContent=edt('in_line')+' '+(r.ln||1);x.children[2].textContent=r.error;x.onclick=()=>edSelectLine(r.ln||1);con.appendChild(x);return}
      closeEditor();
    }});
    smItem(m,edt('check'),{ic:'check',on:()=>{edRunCheck(true);try{PINE.compile(ED.ta.value)}catch(e){const con=ED.con,x=document.createElement('button');x.className='cm e';x.innerHTML='<i></i><em></em><span></span>';x.children[0].textContent=edt('err');x.children[1].textContent=edt('in_line')+' '+(e.ln||1);x.children[2].textContent=e.message;x.onclick=()=>edSelectLine(e.ln||1);con.appendChild(x)}}});
    smItem(m,edt('find'),{ic:'search',on:()=>{ED.find.hidden=false;const f=ED.find.querySelector('.ff');const sel=ED.ta.value.slice(ED.ta.selectionStart,ED.ta.selectionEnd);if(sel&&!sel.includes('\n'))f.value=sel;edFindCount();setTimeout(()=>f.focus(),50)}});
    smSep(m);
    smItem(m,edt('bigger'),{ic:'aa',keep:true,on:()=>{ED.fs=Math.min(22,ED.fs+1);lsSet('tc_edfs',ED.fs);edApplyFs()}});
    smItem(m,edt('smaller'),{ic:'aa',keep:true,on:()=>{ED.fs=Math.max(11,ED.fs-1);lsSet('tc_edfs',ED.fs);edApplyFs()}});
    if(ED.cur&&ED.cur.id){
      smSep(m);
      smItem(m,edt('del'),{ic:'trash',danger:true,on:()=>{
        if(!confirm(edt('delq')))return;
        ED.list=ED.list.filter(x=>x.id!==ED.cur.id);edSaveList();
        const n=ED.list[0];edLoad(n?{id:n.id,name:n.name,kind:n.kind,code:n.code,saved:n.code}:edNew('indicator'));msg(edt('deleted'));
      }});
    }
  });
};
/* quando salvi uno script gia' sul grafico, l'indicatore si aggiorna */
(function(){
  const o=edSave;
  edSave=function(name){
    o(name);
    const c=ED.cur;if(!c||!c.id||edDirty())return;
    const ind=IND.find(x=>x.sid===c.id);
    if(ind&&ind.code!==ED.ta.value){try{PINE.compile(ED.ta.value);ind.code=ED.ta.value;indSave();IR.delete(ind.uid);indSchedule(true)}catch(e){}}
  };
})();
/* controllo vero dello script nella console dell'editor */
(function(){
  const o=edCheck;
  edCheck=function(code){
    const out=o(code);
    if(!out.some(x=>x.lv==='e')){try{PINE.compile(code)}catch(e){out.push({l:e.ln||1,lv:'e',m:e.message})}}
    return out.sort((a,b)=>a.l-b.l);
  };
})();
setTimeout(()=>{indLegend();if(IND.length)indSchedule(true)},1500);
