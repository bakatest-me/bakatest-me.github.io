import{u as W,v as E,w as V,x as X,y as F,S as H,z as J,A as M,B as Z,C as $,D as S,E as ee,d as j,g as K,l as z,p as P,m as te,t as B,a as ne,s as p,o as ae,e as le,h as L}from"../chunks/disclose-version.At5vo8J9.js";import{j as A,r as w,k as se,E as Y,l as re,m as y,n as ie,o as N,q as T,v as O,w as oe,x as G,y as ce,z as ue,s as k,c as Q,p as U,g as q,e as fe,A as _e}from"../chunks/runtime.Jxtk_Oar.js";function de(){}function ve(e,t,s,r,n,u,_){const b=(s&y)!==0,a=X(s,e);let d=null;W(e,b);let v,m=null,g=null;a.r=l=>{const o=d,c=o.s;c.add(l),l.f(()=>{c.delete(l),c.size===0&&o.e!==null&&(o.d!==null&&(E(o.d),o.d=null),A(o.e),o.e=null)})};const i=()=>{const l={d:null,e:null,s:new Set,p:d},o=w(()=>{const c=a.d;c!==null&&(E(c),a.d=null);let h=a.a;(a.f&y)!==0&&(h=F(),a.a.appendChild(h)),u(h),l.d=a.d,a.d=null},a,!0);l.e=o,d=l},x=l=>{const o=l.f,c=(o&y)!==0,h=l.a;_(v,l,h,c,n,o,!0,m)},f=w(()=>{const l=t();v=se(l)?l:l==null?[]:Array.from(l),r!==null?m=v.map(r):s&Y||v.map(de);const o=v.length;if(u!==null){if(o===0){if(a.v.length!==0||g===null){x(a),i();return}}else if(a.v.length===0&&d!==null){const c=d,h=c.s;h.size===0?c.d!==null&&(E(c.d),c.d=null):V(h,"out")}}g!==null&&ie(g)},a,!1);g=w(x,a,!0),re(f,()=>{const l=a.f,o=a.a,c=(l&y)!==0;let h=d;for(;h!==null;){const C=h.d;C!==null&&E(C);const D=h.e;D!==null&&A(D),h=h.p}_([],a,o,c,n,l,!1,m),A(g)}),a.e=f}function he(e,t,s,r,n){ve(e,t,s,null,r,n,pe)}function pe(e,t,s,r,n,u,_){var b=H in e&&e[H].i,a=t.v,d=t.s;b&&(u&=~T);var v=a.length,m=e.length,g=Math.max(v,m),i=0,x,f;if(d.length!==0&&ge(d),m===0)for(x=[],r&&v!==0&&J(s);i<g;)f=a[i++],I(f,d,_,r);else{var l;if(x=Array(m),M!==null)for(var o=M[0];i<g;i++){l=b?N(e,i):e[i];var c=Z(o);$(c),o=c.at(-1).nextSibling.nextSibling,f=R(l,null,i,n,u),x[i]=f}else for(;i<g;i++)i>=v?(l=b?N(e,i):e[i],f=R(l,null,i,n,u),x[i]=f,me(f,s,r,null)):i>=m?(f=a[i],I(f,d,_)):(l=e[i],f=a[i],x[i]=f,xe(f,l,i,u))}t.v=x}function me(e,t,s,r){var n=e.d;return r===null?s?S(n,t,null):S(n,t.parentNode,t):S(n,null,r)}function ge(e){var t=e.length;if(t>0){for(var s=0,r,n;s<t;s++)r=e[s],n=r.r,n!==null&&(r.r=null,I(r,null,!1));e.length=0}}function xe(e,t,s,r){r&T?O(e.v,t):oe(e.v)&&(e.v.o[e.v.p]=t);const n=e.s,u=(r&G)!==0,_=e.a;n!==null&&r&Y&&_!==null&&_(e,n,s,u),u?O(e.i,s):e.i=s}function I(e,t,s,r=!1){const n=e.s;if(s&&n!==null){for(let _ of n)_.r==="key"&&n.delete(_);if(n.size===0)e.s=null;else{V(n,"out"),t!==null&&t.push(e);return}}const u=e.d;!r&&u!==null&&E(u),A(e.e)}function R(e,t,s,r,n){const _=(n&T)===0?e:n&ce?k(e):ue(e),b=n&G?k(s):s,a=ee(_,b,t),d=w(v=>{r(null,v.v,v.i)},a,!0);return a.e=d,a}var be=z('<div class="hero min-h-screen bg-base-200"><div class="hero-content flex-col lg:flex-row-reverse"><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" class="max-w-sm rounded-lg shadow-2xl" alt=""> <div><h1 class="text-5xl font-bold">Box Office News!</h1> <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> <button class="btn btn-primary">Get Started</button></div></div></div>');function Ee(e,t){U(t,!1);var s=K(e,!0,be);j(e,s),Q()}function ye(e=0){let t=k(P(e));return{get count(){return q(t)},increment:()=>fe(t,q(t)+1)}}var Ae=(e,t)=>t.increment(),we=(e,t)=>t.push({value:"eiei"}),Ce=z("<p> </p>"),Se=z('<!> <h1>Welcome to SvelteKit</h1> <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> <p> </p> <button>Plus</button> <button>ADD</button> <!>',!0);function ze(e,t){U(t,!0);let s=ye(0),r=P([{value:"world"}]);var n=ae(e,!0,Se),u=le(n),_=p(p(u)),b=p(p(_)),a=p(p(b)),d=L(a),v=p(p(a)),m=p(p(v)),g=p(p(m));B(d,()=>s.count),Ee(u,{}),v.__click=[Ae,s],m.__click=[we,r],he(g,()=>r,65,(i,x,f)=>{var l=K(i,!0,Ce),o=L(l);B(o,()=>_e(x).value),j(i,l)},null),ne(e,n),Q()}te(["click"]);export{ze as component};
