"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[202],{202:function(r,e,n){n.r(e),n.d(e,{default:function(){return j}});var t,a,s=n(861),i=n(439),c=n(757),u=n.n(c),o=n(791),p=n(87),l=n(689),f=n(969),d=n(168),v=n(444),h=v.ZP.img(t||(t=(0,d.Z)(["\n  width: 400px;\n"]))),x=v.ZP.div(a||(a=(0,d.Z)(["\n  display: flex;\n  gap: 16px;\n"]))),m=n(917),g=n(184),j=function(){var r,e,n=(0,l.TH)(),t=(0,l.UO)().movieId,a=(0,o.useState)({}),c=(0,i.Z)(a,2),d=c[0],v=c[1],j=(0,o.useRef)(null!==(r=null===(e=n.state)||void 0===e?void 0:e.from)&&void 0!==r?r:"/movies");(0,o.useEffect)((function(){var r=new AbortController,e=function(){var e=(0,s.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.s_)(n,r);case 3:t=e.sent,v(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}();return e(t),function(){r.abort()}}),[t]);var w=d.poster_path,b=d.title,Z=d.release_date,_=d.vote_average,k=d.overview,y=d.genres;return(0,g.jsxs)("div",{children:[(0,g.jsx)(p.rU,{to:j.current,children:"\u2b05\ufe0f go back"}),(0,g.jsx)("hr",{}),(0,g.jsxs)(x,{children:[(0,g.jsx)("div",{children:(0,g.jsx)(h,{src:w?"".concat("https://image.tmdb.org/t/p/w500"+w):m,alt:b})}),(0,g.jsxs)("div",{children:[(0,g.jsxs)("p",{children:[(0,g.jsx)("span",{children:b}),(0,g.jsxs)("span",{children:["(",Number.parseInt(Z),")"]})]}),(0,g.jsxs)("p",{children:["User score: ",Math.round(10*_),"%"]}),(0,g.jsxs)("p",{children:["Overview: ",k]}),(0,g.jsxs)("p",{children:["Genres:"," ",y?y.map((function(r){return r.name})).join(", "):"No Genres","."]})]})]}),(0,g.jsx)("hr",{}),(0,g.jsx)("h2",{children:"Additional information"}),(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:(0,g.jsx)(p.rU,{to:"cast",children:"Cast"})}),(0,g.jsx)("li",{children:(0,g.jsx)(p.rU,{to:"reviews",children:"Reviews"})})]}),(0,g.jsx)("hr",{}),(0,g.jsx)(o.Suspense,{fallback:(0,g.jsx)("p",{children:"Loading..."}),children:(0,g.jsx)(l.j3,{})})]})}},969:function(r,e,n){n.d(e,{Jh:function(){return f},_r:function(){return d},a2:function(){return o},on:function(){return p},s_:function(){return l}});var t=n(861),a=n(757),s=n.n(a),i=n(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="3b120c16b34f353f70d8604b6ed477b2",u={api_key:c},o=function(){var r=(0,t.Z)(s().mark((function r(e){var n;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.Z.get("/trending/movie/day",{params:u,signal:e.signal});case 2:return n=r.sent,r.abrupt("return",n.data.results);case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,t.Z)(s().mark((function r(e,n){var t;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.Z.get("/search/movie",{params:{api_key:c,query:e},signal:n.signal});case 2:return t=r.sent,r.abrupt("return",t.data.results);case 4:case"end":return r.stop()}}),r)})));return function(e,n){return r.apply(this,arguments)}}(),l=function(){var r=(0,t.Z)(s().mark((function r(e,n){var t;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.Z.get("/movie/".concat(e),{params:u,signal:n.signal});case 2:return t=r.sent,r.abrupt("return",t.data);case 4:case"end":return r.stop()}}),r)})));return function(e,n){return r.apply(this,arguments)}}(),f=function(){var r=(0,t.Z)(s().mark((function r(e,n){var t;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.Z.get("/movie/".concat(e,"/credits"),{params:u,signal:n.signal});case 2:return t=r.sent,r.abrupt("return",t.data.cast);case 4:case"end":return r.stop()}}),r)})));return function(e,n){return r.apply(this,arguments)}}(),d=function(){var r=(0,t.Z)(s().mark((function r(e,n){var t;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.Z.get("/movie/".concat(e,"/reviews"),{params:u,signal:n.signal});case 2:return t=r.sent,r.abrupt("return",t.data.results);case 4:case"end":return r.stop()}}),r)})));return function(e,n){return r.apply(this,arguments)}}()},917:function(r,e,n){r.exports=n.p+"static/media/placeholder-movie.b50ff5322878a700fc3b.webp"}}]);
//# sourceMappingURL=202.252a0ada.chunk.js.map