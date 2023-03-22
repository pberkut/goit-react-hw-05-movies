"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[59],{4723:function(n,t,r){r.d(t,{Z:function(){return w}});var e,a,i,u,o,s,c=r(7689),p=r(168),f=r(6444),l=r(1087),d=(0,f.ZP)(l.rU)(e||(e=(0,p.Z)(["\n  text-decoration: none;\n  color: inherit;\n"]))),v=f.ZP.ul(a||(a=(0,p.Z)(["\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: center;\n"]))),m=f.ZP.li(i||(i=(0,p.Z)(["\n  list-style: none;\n  background-color: white;\n  border: 1px solid gray;\n  border-radius: 20px;\n  position: relative;\n  overflow: hidden;\n\n  transition: transform 100ms linear;\n\n  &:hover,\n  &:focus {\n    transform: scale(1.05);\n  }\n"]))),h=f.ZP.img(u||(u=(0,p.Z)(["\n  display: block;\n  width: 250px;\n"]))),x=f.ZP.p(o||(o=(0,p.Z)(["\n  width: 250px;\n  text-align: center;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  font-size: 18px;\n  font-weight: 700;\n"]))),g=f.ZP.p(s||(s=(0,p.Z)(["\n  text-align: center;\n  margin-top: 5px;\n  margin-bottom: 5px;\n"]))),Z=r(9917),b=r(184),w=function(n){var t=n.movies,r=(0,c.TH)();return(0,b.jsx)(v,{children:t.map((function(n){var t=n.id,e=n.title,a=n.poster_path,i=n.release_date;return(0,b.jsx)(m,{children:(0,b.jsxs)(d,{to:"/movies/".concat(t),state:{from:r},children:[(0,b.jsx)(h,{src:a?"".concat("https://image.tmdb.org/t/p/w500").concat(a):Z,alt:e}),(0,b.jsx)(x,{className:"title",children:e}),(0,b.jsx)(g,{children:Number.parseInt(i)})]})},t)}))})}},8059:function(n,t,r){r.r(t),r.d(t,{default:function(){return d}});var e=r(5861),a=r(9439),i=r(7757),u=r.n(i),o=r(2791),s=r(1087),c=r(3969),p=r(4723),f=r(4821),l=r(184),d=function(){var n,t=(0,o.useState)([]),r=(0,a.Z)(t,2),i=r[0],d=r[1],v=(0,s.lr)(),m=(0,a.Z)(v,2),h=m[0],x=m[1],g=null!==(n=h.get("query"))&&void 0!==n?n:"",Z=(0,o.useState)(g),b=(0,a.Z)(Z,2),w=b[0],y=b[1],_=(0,o.useState)(null),k=(0,a.Z)(_,2),j=k[0],S=k[1];(0,o.useEffect)((function(){if(g){var n=new AbortController,t=function(){var t=(0,e.Z)(u().mark((function t(r){var e,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,c.on)(r,n);case 3:e=t.sent,a=(0,f.Z)(e),d(a),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(n){return t.apply(this,arguments)}}();return t(g),function(){n.abort()}}}),[g,j]);return(0,l.jsxs)("div",{children:[(0,l.jsx)(s.rU,{to:"/",children:"\u2b05\ufe0f go back"}),(0,l.jsx)("hr",{}),(0,l.jsxs)("form",{onSubmit:function(n){n.preventDefault();var t=n.target.query.value.trim();if(""===t)return x({}),void d([]);x({query:t}),S(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,t){return n+((t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_")}),"")}(1))},children:[(0,l.jsx)("input",{type:"text",name:"query",value:w,onChange:function(n){return y((function(){return n.target.value.trimStart()}))}}),(0,l.jsx)("button",{type:"submit",children:"Search"})]}),(0,l.jsx)(p.Z,{movies:i})]})}},3969:function(n,t,r){r.d(t,{Jh:function(){return l},_r:function(){return d},a2:function(){return c},on:function(){return p},s_:function(){return f}});var e=r(5861),a=r(7757),i=r.n(a),u=r(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="3b120c16b34f353f70d8604b6ed477b2",s={api_key:o},c=function(){var n=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/movie/day",{params:s,signal:t.signal});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(i().mark((function n(t,r){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie",{params:{api_key:o,query:t},signal:r.signal});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(i().mark((function n(t,r){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t),{params:s,signal:r.signal});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(i().mark((function n(t,r){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/credits"),{params:s,signal:r.signal});case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(i().mark((function n(t,r){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/reviews"),{params:s,signal:r.signal});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}()},4821:function(n,t){t.Z=function(n){return n.map((function(n){return{id:n.id,title:n.title,poster_path:n.poster_path,release_date:n.release_date}}))}},9917:function(n,t,r){n.exports=r.p+"static/media/placeholder-movie.b50ff5322878a700fc3b.webp"}}]);
//# sourceMappingURL=59.4912ab80.chunk.js.map