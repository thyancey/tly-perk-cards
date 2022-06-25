(this["webpackJsonptly-experiments"]=this["webpackJsonptly-experiments"]||[]).push([[0],{34:function(n,e,t){},35:function(n,e,t){"use strict";t.r(e);var r,i,o,a,c,s,d,l,u,b,h,m,j,p,f=t(0),g=t.n(f),O=t(11),v=t.n(O),x=t(7),w=t(3),k=t(4),y=Object(k.a)(r||(r=Object(w.a)(["\n  *{\n    margin: 0;\n    padding: 0;\n    outline:0;\n    box-sizing:border-box;\n  }\n  #root{\n    margin:0 auto;\n  }\n  h1, h2, h3, h4{\n    font-family: 'Bevan', cursive;\n  }\n  a, p, span, h5, h6{\n    font-family: 'Cabin', sans-serif;\n  }\n  h1{\n    font-size: 5rem;\n  }\n  h2{\n    font-size: 4rem;\n  }\n  h3{\n    font-size: 3.5rem;\n  }\n  h4{\n    font-size: 2.5rem;\n  }\n  h5{\n    font-size: 2rem;\n  }\n  p, span{\n    font-size:2rem;\n  }\n\n  html{\n    font-size: 62.5%;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    font-family: 'Cabin', sans-serif;\n    background-color: black;\n  }\n  \n  code {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;\n  }\n"]))),S=function(n){return A.colors[n]},A={colors:{black:"#000000",grey:"#373737",grey_light:"#A39F8E",white:"#fef8dd",blue:"#1fb9f3",green:"#51f249",yellow:"#fff249",red:"#F55658",purple:"#6b1ff3"},shadows:{z1:"-0.1rem 0.1rem .25rem .1rem rgba(0,0,0,0.16)",z2:"-0.1rem 0.1rem .25rem .1rem rgba(0,0,0,0.36)",z3:"-.2rem .5rem 1rem .2rem rgba(0,0,0,.36)"},breakpoints:{mobile_tiny:"300px",mobile_medium:"400px",mobile_large:"500px",tablet:"768px",desktop:"1024px"}},C=t(10),z=function(){return Object(C.b)()},D=C.c,N=t(8),E=t(14),I=t(12),T={DORITO_SNAKE:{title:"CURSED DORITOS",description:"A snake with doritos",img:"assets/cards/alien-doritos.jpg",modifiers:[{type:"health",value:1.2},{type:"damage",value:-1.3}]},SPACE_BANANA:{title:"SPACE BANANA",description:"Bananas don't rot in space",img:"assets/cards/banana-astro.jpg",modifiers:[{type:"health",value:1.1},{type:"damage",value:-1.4}]},BLOOD_DRAGON:{title:"ANCIENT SLAYER",description:"Dragons love blood",img:"assets/cards/dragon.jpg",modifiers:[{type:"health",value:3.1},{type:"damage",value:50}]},RAIN_CAT:{title:"RAIN CAT",description:"This cat is in the rain",img:"assets/cards/cat-rain.jpg",modifiers:[{type:"wetness",value:1},{type:"happyness",value:-.5}]}},_=[{id:"DORITO_SNAKE",idx:0,count:5},{id:"SPACE_BANANA",idx:1,count:2},{id:"BLOOD_DRAGON",idx:2,count:1},{id:"RAIN_CAT",idx:3,count:1}],R=Object(E.b)({name:"deck",initialState:{deckStatus:[],hand:[],gameStats:{}},reducers:{initCards:function(n){n.deckStatus=U()},dealCards:function(n){var e=n.deckStatus.map((function(n,e){return n.active?Object(N.a)(Object(N.a)({},n),{},{active:!1}):n})),t=H(e);n.deckStatus=e.map((function(n,e){return t.includes(e)?Object(N.a)(Object(N.a)({},n),{},{dealt:!0,active:!0}):n})),n.hand=t},augmentStats:function(n,e){var t=e.payload.type;n.gameStats[t]?n.gameStats[t].value=n.gameStats[t].value+e.payload.value:n.gameStats[t]={type:t,value:e.payload.value},n.deckStatus=n.deckStatus.map((function(e,t){return n.hand.includes(t)?Object(N.a)(Object(N.a)({},e),{},{active:!1}):e})),n.hand=[]}}}),B=R.actions,F=B.initCards,M=B.dealCards,L=B.augmentStats,P=function(n){return n.data.deckStatus},G=function(n){return T[n.id]},J=Object(I.a)([function(n){return n.data.gameStats}],(function(n){return console.log("hello",n),Object.keys(n).map((function(e){return n[e]}))})),K=Object(I.a)([function(n){return n.data.hand},P],(function(n,e){return n.filter((function(n){return-1!==n})).map((function(n){return G(e[n])}))})),W=Object(I.a)([P],(function(n){return n.filter((function(n){return!n.dealt})).map((function(n){return G(n)}))})),Y=Object(I.a)([P],(function(n){return n.filter((function(n){return n.dealt&&!n.active})).map((function(n){return G(n)}))})),H=function(n){for(var e=[],t=n.filter((function(n){return!n.dealt})),r=0;r<3&&0!==t.length;r++){var i=Math.floor(t.length*Math.random()),o=t[i];e.push(o.deckIdx),t.splice(i,1)}return e},U=function(){for(var n=[],e=0;e<_.length;e++){var t=_[e];if(T[t.id])for(var r=0;r<t.count;r++)n.push({id:t.id,deckIdx:n.length,dealt:!1,active:!1})}return n},$=R.reducer,q=t(1),Q=k.c.div(i||(i=Object(w.a)(["\n"]))),V=k.c.p(o||(o=Object(w.a)(["\n"]))),X=k.c.ul(a||(a=Object(w.a)(["\n  padding: 1rem;\n  border-radius:.5rem;\n  box-shadow: -.25rem -.25rem solid black;\n"]))),Z=k.c.li(c||(c=Object(w.a)(["\n  span{\n    font-size:1.3rem;\n  }\n\n  span:first-child{\n    color:red;\n    font-weight: bold;\n  }\n\n  span:last-child{\n    color:green;\n    margin-left:1rem;\n  }\n"])));function nn(n){var e=n.description,t=n.modifiers;return Object(q.jsxs)(Q,{children:[Object(q.jsx)(V,{children:e}),Object(q.jsx)(X,{children:t.map((function(n,e){return Object(q.jsx)(Z,{children:Object(q.jsxs)("div",{children:[Object(q.jsx)("span",{children:"".concat(n.type,":")}),Object(q.jsx)("span",{children:n.value})]})},n.type)}))})]})}var en,tn=k.c.div(s||(s=Object(w.a)(["\n  position:absolute;\n  width: 20rem;\n  height: 34rem;\n  left:50%;\n  top:50%;\n  transform: translate(-50%, -50%);\n  cursor: pointer;\n  transform-origin: top;\n\n  background-color: ",";\n  border-radius: 2rem;\n  border: .5rem solid ",";\n  \n  ","\n"])),S("blue"),S("grey"),(function(n){return n.isTiny&&Object(k.b)(d||(d=Object(w.a)(["\n    transform: scale(.5, .5) translate(-50%, -50%);\n\n    &:hover{\n      transform: scale(.5, .5) translate(-50%, -50%);\n    }\n  "])))})),rn=k.c.div(l||(l=Object(w.a)(["\n  position:absolute;\n  width: 20rem;\n  height: 34rem;\n  left:50%;\n  top:50%;\n  transform: translate(-50%, -50%);\n  cursor: pointer;\n  transform-origin: top;\n\n  background-color: ",";\n  border-radius: 2rem;\n  border: .5rem solid ",";\n  \n  &:hover{\n    transform: scale(1.3, 1.3) rotate(-0.005turn) translate(-50%, -50%);\n    transition: transform .2s;\n  }\n\n  ","\n"])),S("white"),S("grey"),(function(n){return n.isTiny&&Object(k.b)(u||(u=Object(w.a)(["\n    transform: scale(.5, .5) translate(-50%, -50%);\n\n    &:hover{\n      transform: scale(.5, .5) translate(-50%, -50%);\n    }\n  "])))})),on=k.c.div(b||(b=Object(w.a)(["\n  position:relative;\n  height:45%;\n  width:100%;\n"]))),an=k.c.div(h||(h=Object(w.a)(["\n  position:relative;\n  height:10%;\n  width:100%;\n\n  >div{\n    min-height: 1rem;\n\n    position:absolute;\n    width:100%;\n    top:50%;\n    transform: translateY(-50%);\n    background-color:black;\n    padding: .5rem;\n\n    >p{\n      font-size: 1.5rem;\n      text-align:center;\n    }\n  }\n"]))),cn=k.c.div(m||(m=Object(w.a)(["\n  height:45%;\n  width:100%;\n  padding:1rem 1rem;\n"]))),sn=k.c.div(j||(j=Object(w.a)(["\n  width:100%;\n  height:100%;\n  background: url(",") no-repeat center;\n  background-size:cover;\n  \n  border-radius: 2rem 2rem 0 0;\n"])),(function(n){return n.url})),dn=k.c.div(p||(p=Object(w.a)(["\n  border-radius: 1rem;\n  background-color: ",";\n  position:absolute;\n  top:0;\n  right:0;\n  bottom:0;\n  left:0;\n  z-index:-1;\n"])),S("white"));function ln(n){var e=n.cardData,t=n.offsetIdx,r=n.isFaceDown,i=z(),o=void 0!==t?{left:5*t,top:5*t}:{};return r?Object(q.jsx)(tn,{style:o,isTiny:void 0!==t}):Object(q.jsxs)(rn,{style:o,isTiny:void 0!==t,onClick:function(){for(var n=0;n<e.modifiers.length;n++)i(L(e.modifiers[n]))},children:[Object(q.jsx)(on,{children:e.img&&Object(q.jsx)(sn,{url:e.img})}),Object(q.jsx)(an,{children:Object(q.jsx)("div",{children:Object(q.jsx)("p",{children:e.title})})}),Object(q.jsx)(cn,{children:Object(q.jsx)(nn,{description:e.description,modifiers:e.modifiers})}),Object(q.jsx)(dn,{})]})}var un,bn=k.c.div(en||(en=Object(w.a)(["\n  position:relative;\n  margin-top:10rem;\n"])));function hn(n){var e=n.cards,t=n.isFaceDown;return Object(q.jsx)(bn,{children:e.map((function(n,e){return Object(q.jsx)(ln,{offsetIdx:e,cardData:n,isFaceDown:t},e)}))})}var mn,jn,pn,fn,gn,On,vn,xn,wn,kn=k.c.div(un||(un=Object(w.a)(["\n  position:absolute;\n  width:100%;\n  top:0;\n  background-color: ",";\n  color: ",";\n"])),S("white"),S("black"));function yn(){var n=D(J);return console.log("gameStats",n),n?Object(q.jsx)(kn,{children:n.map((function(n){return Object(q.jsx)("p",{children:"".concat(n.type,": ").concat(n.value)},n.type)}))}):null}var Sn=k.c.div(mn||(mn=Object(w.a)(["\n  position:absolute;\n  left:0;\n  top:0;\n  bottom:0;\n  right:0;\n  background-color: ",";\n  color: ",";\n  z-index:-1;\n  padding-top:10rem;\n  z-index:1;\n"])),S("black"),S("white")),An=k.c.div(jn||(jn=Object(w.a)(["\n  width:80%;\n  height:80%;\n  position:absolute;\n  left:10%;\n  top:10%;\n  border: 1rem solid white;\n"]))),Cn=k.c.div(pn||(pn=Object(w.a)(["\n  height:8%;\n  width:100%;\n  text-align:center;\n"]))),zn=k.c.div(fn||(fn=Object(w.a)(["\n  width:100%;\n  height:80%;\n"]))),Dn=k.c.div(gn||(gn=Object(w.a)(["\n  height:12%;\n  width:100%;\n  text-align:center;\n"]))),Nn=k.c.button(On||(On=Object(w.a)(["\n  position:absolute;\n  bottom:2rem;\n  width: 80%;\n  left: 10%;\n  background: none;\n  border: none;\n\n  padding: 1rem 2rem;\n\n  background-color: ",";\n  color: ",";\n  font-weight: bold;\n  font-size: 3rem;\n\n  border-radius: 2rem;\n\n  cursor: pointer;\n  &:hover{\n    background-color: ",";\n  }\n  &:active{\n    background-color: ",";\n  }\n"])),S("green"),S("white"),S("blue"),S("purple")),En=k.c.div(vn||(vn=Object(w.a)(["\n  display: inline-block;\n  width:33%;\n  height: 100%;\n  color: ",";\n\n  position:relative;\n\n  padding: 1rem;\n"])),S("blue")),In=k.c.div(xn||(xn=Object(w.a)(["\n  position: absolute;\n  left:0;\n  width:10rem;\n  height:20rem;\n"]))),Tn=k.c.div(wn||(wn=Object(w.a)(["\n  position: absolute;\n\n  right:0;\n  width:10rem;\n  height:20rem;\n"])));function _n(){var n=z(),e=D(K),t=D(W),r=D(Y);console.log("discarded",r),Object(f.useEffect)((function(){n(F())}),[]);return Object(q.jsxs)(Sn,{children:[Object(q.jsx)(yn,{}),Object(q.jsx)(In,{children:Object(q.jsx)(hn,{cards:t,isFaceDown:!0})}),Object(q.jsx)(Tn,{children:Object(q.jsx)(hn,{cards:r})}),Object(q.jsxs)(An,{children:[Object(q.jsx)(Cn,{children:Object(q.jsx)("h2",{children:"CHOOSE SOME CARDS"})}),Object(q.jsx)(zn,{children:e.map((function(n,e){return Object(q.jsx)(En,{children:Object(q.jsx)(ln,{cardData:n},e)})}))}),Object(q.jsx)(Dn,{children:Object(q.jsx)("p",{children:"Something something extra text.. details?"})})]}),Object(q.jsx)(Nn,{onClick:function(){n(M())},children:"DEAL"})]})}var Rn,Bn,Fn,Mn=t(17),Ln=t(2),Pn=(k.c.div(Rn||(Rn=Object(w.a)(["\n  background-color: ",";\n  border: 1rem solid ",";\n  border-radius: 5rem;\n  margin: 3rem;\n  padding: 2rem 3.3rem;\n"])),S("blue"),S("white")),k.c.div(Bn||(Bn=Object(w.a)(["\n  position:fixed;\n  top:0;\n  left:0;\n  transition: top .5s ease-in-out;\n\n  width: 100%;\n  height:10rem;\n  border-bottom:1rem solid blue;\n  color:white;\n  z-index:1;\n  background-color:black;\n\n  &.collapsed{\n    top:-8rem;\n    transition: top .5s ease-in-out;\n  }\n\n  >.link-button{\n    color:white;\n    display:inline-block;\n    vertical-align:middle;\n    margin:1.4rem 1.8rem;\n    transition: color .5s ease-in;\n    &:hover{\n      color: ",";\n      transition: color .2s ease-out;\n    }\n  }\n"])),S("yellow"))),Gn=k.c.div(Fn||(Fn=Object(w.a)(["\n  position:absolute;\n  left:0;\n  top:0;\n  right:0;\n  bottom:0;\n  padding-top:5rem;\n"])));var Jn=function(){var n=Object(f.useState)(!1),e=Object(x.a)(n,2),t=e[0],r=e[1],i=[{route:"/cards",text:"Cards",element:Object(q.jsx)(_n,{})}];return Object(q.jsxs)(Mn.a,{children:[Object(q.jsx)(Pn,{className:t?"collapsed":"",onClick:function(){return r(!t)},children:i.map((function(n,e){return Object(q.jsx)(Mn.b,{to:n.route,className:"link-button",children:Object(q.jsx)("h2",{children:n.text})},e)}))}),Object(q.jsx)(Gn,{children:Object(q.jsx)(Ln.c,{children:i.map((function(n,e){return Object(q.jsx)(Ln.a,{path:n.route,element:n.element},e)}))})})]})},Kn=Object(E.a)({reducer:{data:$}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(34);v.a.render(Object(q.jsx)(g.a.StrictMode,{children:Object(q.jsxs)(C.a,{store:Kn,children:[Object(q.jsx)(Jn,{}),Object(q.jsx)(y,{})]})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.6c961507.chunk.js.map