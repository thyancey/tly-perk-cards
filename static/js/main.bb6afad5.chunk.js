(this["webpackJsonptly-perk-cards"]=this["webpackJsonptly-perk-cards"]||[]).push([[0],{34:function(n,e,t){},35:function(n,e,t){"use strict";t.r(e);var r,a,o,c,i,s,d,l,u,b,p,m,f,h,g=t(0),j=t.n(g),O=t(11),v=t.n(O),x=t(8),k=t(2),C=t(3),y=Object(C.a)(r||(r=Object(k.a)(["\n  *{\n    margin: 0;\n    padding: 0;\n    outline:0;\n    box-sizing:border-box;\n  }\n  #root{\n    margin:0 auto;\n  }\n  h1, h2, h3, h4{\n    font-family: 'Bevan', cursive;\n  }\n  a, p, span, h5, h6{\n    font-family: 'Cabin', sans-serif;\n  }\n  h1{\n    font-size: 5rem;\n  }\n  h2{\n    font-size: 4rem;\n  }\n  h3{\n    font-size: 3.5rem;\n  }\n  h4{\n    font-size: 2.5rem;\n  }\n  h5{\n    font-size: 2rem;\n  }\n  p, span{\n    font-size:2rem;\n  }\n\n  html{\n    font-size: 62.5%;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    font-family: 'Cabin', sans-serif;\n    background-color: black;\n  }\n  \n  code {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;\n  }\n"]))),w=function(n){return z.colors[n]},z={colors:{black:"#000000",grey_dark:"#222034",grey:"#847e87",grey_light:"#9badb7",white:"#fef8dd",brown_light:"#eec398",brown:"#8f563b",brown_dark:"#663931",green:"#4b692f",green_light:"#6abe30",red:"#ac3232",pink:"#d77bba"},shadows:{z1:"-0.1rem 0.1rem .25rem .1rem rgba(0,0,0,0.16)",z2:"-0.1rem 0.1rem .25rem .1rem rgba(0,0,0,0.36)",z3:"-.2rem .5rem 1rem .2rem rgba(0,0,0,.36)"},breakpoints:{mobile_tiny:"300px",mobile_medium:"400px",mobile_large:"500px",tablet:"768px",desktop:"1024px"}},A="18rem",I="30rem",S=t(6),R=t(1),_=C.c.div(c||(c=Object(k.a)(["\n  padding: 1.5rem 2rem;\n"]))),E=C.c.p(i||(i=Object(k.a)(["\n  color: ",";\n  font-size:1.4rem;\n  text-align:center;\n"])),w("black"));C.c.ul(s||(s=Object(k.a)(["\n  padding: 1rem;\n  border-radius:.5rem;\n  box-shadow: -.25rem -.25rem solid black;\n"]))),C.c.li(d||(d=Object(k.a)(["\n  span{\n    font-size:1.2rem;\n  }\n\n  span:first-child{\n    color:red;\n    font-weight: bold;\n  }\n\n  span:last-child{\n    color:green;\n    margin-left:1rem;\n  }\n"])));function N(n){var e=n.description;n.modifiers;return Object(R.jsxs)(_,{children:[Object(R.jsx)(E,{children:e}),!1]})}var D=C.c.div(l||(l=Object(k.a)(["\n  position:absolute;\n  width: ",";\n  height: ",";\n  left:50%;\n  top:50%;\n  transform: translate(-50%, -50%);\n  transform: scale(",", ",") translate(-50%, -50%);\n  cursor: pointer;\n  transform-origin: top;\n  z-index:1;\n\n  &:hover{\n    transform: scale(",", ",") rotate(-0.005turn) translate(-50%, -50%);\n    transition: transform .2s;\n    z-index:10;\n  }\n"])),A,I,(function(n){return n.size.normal[0]}),(function(n){return n.size.normal[1]}),(function(n){return n.size.zoom[0]}),(function(n){return n.size.zoom[1]})),L=C.c.div(u||(u=Object(k.a)(["\n  position:relative;\n  height:45%;\n  width:100%;\n  padding:1rem;\n"]))),T=C.c.div(b||(b=Object(k.a)(["\n  position:relative;\n  height:10%;\n  width:100%;\n\n  >div{\n    min-height: 1rem;\n\n    position:absolute;\n    width:100%;\n    top:50%;\n    transform: translateY(-50%);\n    padding: .5rem;\n    z-index:2;\n\n\n    >p{\n      font-size: 1.5rem;\n      text-align:center;\n      font-weight: bold;\n      color: ",";\n    }\n  }\n"])),w("black")),M=C.c.div(p||(p=Object(k.a)(["\n  height:45%;\n  width:100%;\n  padding:1rem 1rem;\n"]))),B=C.c.div(m||(m=Object(k.a)(["\n  width:100%;\n  height:100%;\n  background: url(",") no-repeat center;\n  background-size:cover;\n"])),(function(n){return n.url})),F=C.c.div(f||(f=Object(k.a)(["\n  position:absolute;\n  top:0;\n  right:0;\n  bottom:0;\n  left:0;\n  z-index:1;\n  background: url(",") no-repeat center;\n  background-size:cover;\n"])),(function(n){return n.url})),W=C.c.div(h||(h=Object(k.a)(["\n  position:absolute;\n  top:0;\n  right:0;\n  bottom:0;\n  left:0;\n  z-index:-1;\n  background: url(",") no-repeat center;\n  background-size:cover;\n"])),(function(n){return n.url}));function P(n){var e=n.size,t=n.cardIdx,r=n.cardData,a=n.onCardSelected,o=n.offsetIdx,c=n.stackType,i={};void 0!==o&&(i="side-by-side"===c?{left:100*o}:{left:2*o,top:4*o}),console.log("stackType",c);var s=Object(S.a)({normal:[1,1],zoom:[1.3,1.3]},e);return Object(R.jsxs)(D,{size:s,style:i,onClick:function(){void 0!==t&&a&&a(t)},children:[Object(R.jsx)(F,{url:r.frame.overlayImg}),Object(R.jsx)(L,{children:r.img&&Object(R.jsx)(B,{url:r.img})}),Object(R.jsx)(T,{children:Object(R.jsx)("div",{children:Object(R.jsx)("p",{children:r.title})})}),Object(R.jsx)(M,{children:Object(R.jsx)(N,{description:r.description,modifiers:r.modifiers})}),Object(R.jsx)(W,{url:r.frame.bgImg})]})}var q,U,G,J=t(10),V=J.c,H=t(14),Y=t(12),K={RACCOON_BITE:{title:"CURSED MASK",description:"Raccoon bites in this lane do +2 damage.",img:"assets/cards/raccoon-trapper/status-card-contents1.png",frame:{overlayImg:"assets/cards/raccoon-trapper/status-card-frame.png",bgImg:"assets/cards/raccoon-trapper/status-card-frame-opaque.png"},modifiers:[{type:"add",stat:"biteDamage",value:2}]},RACCOON_LOVE:{title:"RACCOON LOVE",description:"Raccoons in this lane stay tame for 1 second longer.",img:"assets/cards/raccoon-trapper/status-card-contents2.png",frame:{overlayImg:"assets/cards/raccoon-trapper/status-card-frame.png",bgImg:"assets/cards/raccoon-trapper/status-card-frame-opaque.png"},modifiers:[{type:"add",stat:"loveDuration",value:1}]},RACCOON_JUMP:{title:"RACCOON LOVE",description:"Raccoons in this lane can hop.",img:"assets/cards/raccoon-trapper/status-card-contents3.png",frame:{overlayImg:"assets/cards/raccoon-trapper/status-card-frame.png",bgImg:"assets/cards/raccoon-trapper/status-card-frame-opaque.png"},modifiers:[{type:"boolean",stat:"canJump",value:!0}]},RACCOON_CORPSE_BUFFET:{title:"ROTTING BUFFET",description:"Raccoons corpses in this lane act as food bowls.",img:"assets/cards/raccoon-trapper/status-card-contents4.png",frame:{overlayImg:"assets/cards/raccoon-trapper/status-card-frame.png",bgImg:"assets/cards/raccoon-trapper/status-card-frame-opaque.png"},modifiers:[{type:"boolean",stat:"corpseBuffet",value:!0}]},RACCOON_FEED:{title:"CHOW DOWN",description:"Raccoons in this lane eat 20% faster.",img:"assets/cards/raccoon-trapper/status-card-contents5.png",frame:{overlayImg:"assets/cards/raccoon-trapper/status-card-frame.png",bgImg:"assets/cards/raccoon-trapper/status-card-frame-opaque.png"},modifiers:[{type:"add",stat:"feedSpeed",value:.2}]},RACCOON_SPAWNRATE:{title:"CROWDED NURSERY",description:"30% more raccoons in this lane.",img:"assets/cards/raccoon-trapper/status-card-contents6.png",frame:{overlayImg:"assets/cards/raccoon-trapper/status-card-frame.png",bgImg:"assets/cards/raccoon-trapper/status-card-frame-opaque.png"},modifiers:[{type:"add",stat:"spawnRate",value:.3}]},REDRACCOON_SPAWN:{title:"RED RACCOONS",description:"Tanukis spawn in this lane.",img:"assets/cards/raccoon-trapper/status-card-contents7.png",frame:{overlayImg:"assets/cards/raccoon-trapper/status-card-frame.png",bgImg:"assets/cards/raccoon-trapper/status-card-frame-opaque.png"},modifiers:[{type:"boolean",stat:"feedSpeed",value:!0}]},RACCOON_GIBS:{title:"GIBBED",description:"Gibbed raccoons in this lane scare away others.",img:"assets/cards/raccoon-trapper/status-card-contents8.png",frame:{overlayImg:"assets/cards/raccoon-trapper/status-card-frame.png",bgImg:"assets/cards/raccoon-trapper/status-card-frame-opaque.png"},modifiers:[{type:"boolean",stat:"gibbedRaccons",value:!0}]}},$=[{id:"RACCOON_BITE",idx:0,count:5},{id:"RACCOON_LOVE",idx:0,count:4},{id:"RACCOON_JUMP",idx:0,count:1},{id:"RACCOON_CORPSE_BUFFET",idx:0,count:2},{id:"RACCOON_FEED",idx:0,count:5},{id:"RACCOON_SPAWNRATE",idx:0,count:5},{id:"REDRACCOON_SPAWN",idx:0,count:1},{id:"RACCOON_GIBS",idx:0,count:2}],Q=function(){var n={};return Object.keys(K).forEach((function(e){var t,r=K[e];n[e]=Object(S.a)(Object(S.a)({},r),{},{modifiers:(t=r.modifiers,t.map((function(n){return{type:n.type,effect:{stat:n.stat,value:n.value}}})))})})),n}(),X=Object(H.b)({name:"deck",initialState:{deckStatus:[],hand:[],gameStats:{}},reducers:{initCards:function(n){n.deckStatus=pn()},dealCards:function(n){var e=n.deckStatus.map((function(n,e){return n.active?Object(S.a)(Object(S.a)({},n),{},{active:!1}):n})),t=bn(e),r=(new Date).getTime();n.deckStatus=e.map((function(n,e){return t.includes(e)?Object(S.a)(Object(S.a)({},n),{},{dealt:!0,dealtAt:r+e,active:!0}):n})),n.hand=t},augmentStats:function(n,e){if("boolean"===e.payload.type){var t=e.payload.effect;n.gameStats[t.stat]={type:"boolean",stat:t.stat,value:t.value}}else if("add"===e.payload.type){var r,a=e.payload.effect;n.gameStats[a.stat]={type:"value",stat:a.stat,value:((null===(r=n.gameStats[a.stat])||void 0===r?void 0:r.value)||0)+a.value}}},chooseCard:function(n,e){var t=e.payload.handIdx,r=e.payload.laneId;console.log("put away cards",n.hand.map((function(n){return n}))),n.deckStatus=n.deckStatus.map((function(e,a){return n.hand.includes(a)?(console.log("put it away ",a,t),Object(S.a)(Object(S.a)({},e),{},{active:!1,lane:a===t?r:e.lane})):e})),n.hand=[]}}}),Z=X.actions,nn=Z.initCards,en=Z.dealCards,tn=Z.augmentStats,rn=Z.chooseCard,an=function(n){return n.data.deckStatus},on=function(n,e){return Object(S.a)(Object(S.a)({},Q[n.id]),{},{deckIdx:e})},cn=Object(Y.a)([function(n){return n.data.gameStats}],(function(n){return Object.keys(n).map((function(e){return n[e]}))})),sn=Object(Y.a)([function(n){return n.data.hand},an],(function(n,e){return n.filter((function(n){return-1!==n})).map((function(n){return on(e[n],n)}))})),dn=Object(Y.a)([an],(function(n){return n.filter((function(n){return!n.dealt})).map((function(n,e){return on(n,e)}))})),ln=Object(Y.a)([an],(function(n){return n.filter((function(n){return n.dealt&&!n.active&&0===n.lane})).sort((function(n,e){return n.dealtAt>e.dealtAt?1:-1})).map((function(n,e){return on(n,e)}))})),un=Object(Y.a)([an],(function(n){for(var e=[],t=function(t){e[t]=n.filter((function(n){return n.lane===t})).sort((function(n,e){return n.dealtAt>e.dealtAt?1:-1})).map((function(n,e){return on(n,e)}))},r=1;r<=3;r++)t(r);return e})),bn=function(n){for(var e=[],t=n.filter((function(n){return!n.dealt})),r=0;r<4&&0!==t.length;r++){var a=Math.floor(t.length*Math.random()),o=t[a];e.push(o.deckIdx),t.splice(a,1)}return e},pn=function(){for(var n=[],e=0;e<$.length;e++){var t=$[e];if(Q[t.id])for(var r=0;r<t.count;r++)n.push({id:t.id,deckIdx:n.length,dealt:!1,dealtAt:0,active:!1,lane:0})}return n},mn=X.reducer,fn=C.c.div(q||(q=Object(k.a)(["\n  position:absolute;\n  width: ",";\n  height: ",";\n  left:50%;\n  top:50%;\n  border-radius: 2rem;\n  transform-origin: top;\n  cursor: pointer;\n\n  transform: scale(",", ",") translate(-50%, -50%);\n\n  background-color: ",";\n  border: .5rem solid ",";\n\n  >span{\n    ",";\n    display:block;\n    transform: rotate(-90deg);\n    font-size:5rem;\n    font-weight: bold;\n    color: ",";\n    margin-top:11rem;\n  }\n\n  &:hover{\n    background-color: ",";\n\n    >span{\n      color: ",";\n    }\n  }\n\n  ","\n"])),A,I,(function(n){return n.size.normal[0]}),(function(n){return n.size.normal[1]}),w("green"),w("grey_dark"),function(n){switch(n){case"display":return Object(C.b)(a||(a=Object(k.a)(["font-family: 'Bevan', cursive"])));default:return Object(C.b)(o||(o=Object(k.a)(["font-family: 'Cabin', sans-serif"])))}}("display"),w("brown_light"),w("green_light"),w("brown_dark"),(function(n){return n.isDisabled&&Object(C.b)(U||(U=Object(k.a)(["\n    pointer-events:none;\n    background-color: ",";\n    border: .5rem solid ",";\n\n    >span{\n      color: ",";\n    }\n  "])),w("grey"),w("grey_dark"),w("grey_light"))}));function hn(n){var e=n.size,t=n.offsetIdx,r=n.onClickCard,a=n.isDisabled,o=void 0!==t?{left:.7*t,top:1*t}:{},c=Object(S.a)({normal:[1,1],zoom:[1.3,1.3]},e);return Object(R.jsx)(fn,{style:o,size:c,isDisabled:a,onClick:function(){return r?r():{}},children:!a&&Object(R.jsx)("span",{children:"DRAW"})})}var gn,jn=C.c.div(G||(G=Object(k.a)(["\n  position:relative;\n"])));function On(n){var e=n.cards,t=n.isFaceDown,r=n.onClickCard,a=n.isDisabled,o={normal:[.5,.5],zoom:[.5,.5]},c=function(){!a&&r&&r()};return Object(R.jsx)(jn,{children:e.map((function(n,e){return t?Object(R.jsx)(hn,{offsetIdx:e,size:o,isDisabled:a,onClickCard:c},e):Object(R.jsx)(P,{offsetIdx:e,cardData:n,size:o,onClickCard:r},e)}))})}var vn,xn,kn,Cn,yn,wn=C.c.div(gn||(gn=Object(k.a)(["\n  position:absolute;\n  width:100%;\n  top:0;\n  background-color: ",";\n  color: ",";\n"])),w("white"),w("black"));function zn(){var n=V(cn);return n?Object(R.jsx)(wn,{children:n.map((function(n){return Object(R.jsx)("p",{children:"".concat(n.stat,": ").concat(n.value)},n.stat)}))}):null}var An,In,Sn=C.c.div(vn||(vn=Object(k.a)(["\n  position:relative;\n  display:inline-block;\n  height:33%;\n  width:100%;\n\n  ","\n"])),(function(n){return n.selectionActive&&Object(C.b)(xn||(xn=Object(k.a)(["\n    cursor:pointer;\n    &:hover{\n      ","{\n        /* border-color: ","; */\n        background-color: ",";\n      }\n    }\n  "])),Rn,w("black"),w("brown_light"))})),Rn=C.c.div(kn||(kn=Object(k.a)(["\n  position:absolute;\n  border:.25rem dashed ",";\n  top:0;\n  right:0;\n  bottom:0;\n  left:0;\n\n  z-index:-1;\n"])),w("white")),_n=C.c.div(Cn||(Cn=Object(k.a)(["\n  position: relative;\n  width:calc(100%-5rem);\n  margin-left:5rem;\n  height:100%;\n"]))),En=C.c.div(yn||(yn=Object(k.a)(["\n  right:1rem;\n  top:.5rem;\n  position:absolute;\n"])));function Nn(n){var e=n.selectionActive,t=n.onLaneSelected,r=n.cards,a=n.laneId,o=function(n){switch(n){case 1:return"TOP LANE";case 2:return"MIDDLE LANE";case 3:return"BOTTOM LANE";default:return"??"}}(a),c={normal:[.5,.5],zoom:[1,1]};return console.log("lane",a,r),Object(R.jsxs)(Sn,{selectionActive:e,onClick:function(){return t(a)},children:[Object(R.jsx)(En,{children:Object(R.jsx)("span",{children:o})}),Object(R.jsx)(_n,{children:r.map((function(n,e){return Object(R.jsx)(P,{offsetIdx:e,stackType:"side-by-side",cardData:n,size:c},e)}))}),Object(R.jsx)(Rn,{})]})}var Dn,Ln,Tn,Mn,Bn,Fn,Wn,Pn,qn,Un,Gn,Jn,Vn,Hn,Yn=C.c.div(An||(An=Object(k.a)(["\n  position:relative;\n  width:100%;\n  height:100%;\n  z-index:2;\n"])));C.c.div(In||(In=Object(k.a)(["\n  height:10%;\n  width:100%;\n"])));function Kn(n){var e=n.selectionActive,t=n.onLaneSelected,r=V(un);return console.log("laneCards",r),Object(R.jsxs)(Yn,{children:[Object(R.jsx)(Nn,{selectionActive:e,onLaneSelected:t,cards:r[1],laneId:1}),Object(R.jsx)(Nn,{selectionActive:e,onLaneSelected:t,cards:r[2],laneId:2}),Object(R.jsx)(Nn,{selectionActive:e,onLaneSelected:t,cards:r[3],laneId:3})]})}var $n=C.c.div(Dn||(Dn=Object(k.a)(["\n  position:absolute;\n  left:0;\n  top:0;\n  bottom:0;\n  right:0;\n  background-color: ",";\n  color: ",";\n  z-index:-1;\n  padding-top:10rem;\n  z-index:1;\n"])),w("black"),w("white")),Qn=C.c.div(Ln||(Ln=Object(k.a)(["\n  opacity:0;\n  pointer-events:none;\n  \n  display:block;\n  position:fixed;\n  left:0;\n  right:0;\n  top:0;\n  bottom:0;\n  z-index:1;\n  ","\n"])),(function(n){return n.isLaneMode&&Object(C.b)(Tn||(Tn=Object(k.a)(["\n    pointer-events:all;\n\n    background-color: ",";\n    opacity: .8;\n    transition: opacity .2s ease-out;\n  "])),w("black"))})),Xn=C.c.div(Mn||(Mn=Object(k.a)(["\n  width:80%;\n  height:80%;\n  position:absolute;\n  left:10%;\n  top:10%;\n  border: .5rem solid ",";\n  background-color: ",";\n\n  ","\n\n  border-radius: 1rem;\n"])),w("grey_dark"),w("brown_dark"),(function(n){return n.isLaneMode&&Object(C.b)(Bn||(Bn=Object(k.a)(["\n    border: .5rem solid ",";\n    background-color: ",";\n  "])),w("grey_dark"),w("black"))})),Zn=C.c.div(Fn||(Fn=Object(k.a)(["\n  width:40%;\n  height:75%;\n\n  z-index:1;\n"]))),ne=C.c.div(Wn||(Wn=Object(k.a)(["\n  height:10%;\n  width:100%;\n  text-align:center;\n"]))),ee=C.c.div(Pn||(Pn=Object(k.a)(["\n  position:absolute;\n  right:0;\n  top:0;\n  height:90%;\n  width:60%;\n  text-align:center;\n"]))),te=C.c.div(qn||(qn=Object(k.a)(["\n  display: inline-block;\n  width: 50%;\n  height: 83%;\n\n  width: ",";\n  height: ",";\n  \n  transform: scale(",", ",");\n\n  position:relative;\n\n  padding: 1rem;\n  margin-bottom:-5rem;\n\n  &:hover{\n    z-index:1;\n  }\n"])),A,I,(function(n){return n.size.normal[0]}),(function(n){return n.size.normal[1]})),re=C.c.div(Un||(Un=Object(k.a)(["\n  width:40%;\n  height:15%;\n\n  >div{\n    padding:2rem;\n    display:inline-block;\n    vertical-align: bottom;\n    width:50%;\n  }\n"]))),ae=C.c.div(Gn||(Gn=Object(k.a)(["\n  width:10rem;\n  height:20rem;\n"]))),oe=C.c.div(Jn||(Jn=Object(k.a)(["\n  width:10rem;\n  height:20rem;\n"]))),ce=C.c.div(Vn||(Vn=Object(k.a)(["\n  height:10%;\n  width:60%;\n  margin-left:40%;\n  text-align:center;\n\n  color: ",";\n\n  >h2{\n    position:fixed;\n    z-index:3;\n  }\n"])),w("brown_light")),ie=C.c.div(Hn||(Hn=Object(k.a)(["\n  height:90%;\n  width:100%;\n  position:relative;\n"])));function se(){var n=Object(J.b)(),e=Object(g.useState)(-1),t=Object(x.a)(e,2),r=t[0],a=t[1],o=V(sn),c=V(dn),i=V(ln);Object(g.useEffect)((function(){n(nn())}),[]);var s=function(n){a(n)},d=Object(g.useMemo)((function(){return r>-1}),[r]),l={normal:[.9,.9],zoom:[1.3,1.3]};return Object(R.jsxs)($n,{children:[Object(R.jsx)(zn,{}),Object(R.jsxs)(Xn,{isLaneMode:d,children:[Object(R.jsx)(ce,{children:d?Object(R.jsx)("h2",{children:"SELECT A LANE"}):Object(R.jsx)("h2",{children:"CHOOSE SOME CARDS"})}),Object(R.jsxs)(ie,{children:[Object(R.jsxs)(re,{children:[Object(R.jsx)(ae,{children:Object(R.jsx)(On,{cards:c,isFaceDown:!0,onClickCard:function(){n(en())},isDisabled:o.length>0})}),Object(R.jsx)(oe,{children:Object(R.jsx)(On,{cards:i})})]}),Object(R.jsx)(Zn,{children:o.map((function(n,e){return Object(R.jsx)(te,{size:l,children:Object(R.jsx)(P,{cardIdx:e,cardData:n,onCardSelected:s,size:l})},e)}))}),Object(R.jsx)(ne,{children:Object(R.jsx)("p",{children:"Some details can go here?"})}),Object(R.jsx)(Qn,{isLaneMode:d}),Object(R.jsx)(ee,{children:Object(R.jsx)(Kn,{selectionActive:d,onLaneSelected:function(e){if(console.log("selectedLane",e),a(-1),r>-1)for(var t=o[r],c=0;c<t.modifiers.length;c++)n(tn(t.modifiers[c])),n(rn({handIdx:t.deckIdx,laneId:e}))}})})]})]})]})}var de,le,ue=t(17),be=t(4),pe=C.c.div(de||(de=Object(k.a)(["\n  position:fixed;\n  top:0;\n  left:0;\n  transition: top .5s ease-in-out;\n\n  width: 100%;\n  height:10rem;\n  border-bottom:1rem solid blue;\n  color:white;\n  z-index:1;\n  background-color:black;\n\n  &.collapsed{\n    top:-8rem;\n    transition: top .5s ease-in-out;\n  }\n\n  >.link-button{\n    color:white;\n    display:inline-block;\n    vertical-align:middle;\n    margin:1.4rem 1.8rem;\n    transition: color .5s ease-in;\n    &:hover{\n      color: ",";\n      transition: color .2s ease-out;\n    }\n  }\n"])),w("pink")),me=C.c.div(le||(le=Object(k.a)(["\n  position:absolute;\n  left:0;\n  top:0;\n  right:0;\n  bottom:0;\n  padding-top:5rem;\n"])));var fe=function(){var n=Object(g.useState)(!1),e=Object(x.a)(n,2),t=e[0],r=e[1],a=[{route:"/cards",text:"Cards",element:Object(R.jsx)(se,{})}];return Object(R.jsxs)(ue.a,{children:[Object(R.jsx)(pe,{className:t?"collapsed":"",onClick:function(){return r(!t)},children:a.map((function(n,e){return Object(R.jsx)(ue.b,{to:n.route,className:"link-button",children:Object(R.jsx)("h2",{children:n.text})},e)}))}),Object(R.jsx)(me,{children:Object(R.jsx)(be.c,{children:a.map((function(n,e){return Object(R.jsx)(be.a,{path:n.route,element:n.element},e)}))})})]})},he=Object(H.a)({reducer:{data:mn}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(34);v.a.render(Object(R.jsx)(j.a.StrictMode,{children:Object(R.jsxs)(J.a,{store:he,children:[Object(R.jsx)(fe,{}),Object(R.jsx)(y,{})]})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.bb6afad5.chunk.js.map