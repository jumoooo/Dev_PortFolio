const k0=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),Bp={},x0="/",je=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${x0}${r}`,r in Bp)return;Bp[r]=!0;const i=r.endsWith(".css"),s=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${s}`))return;const o=document.createElement("link");if(o.rel=i?"stylesheet":k0,i||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),i)return new Promise((a,c)=>{o.addEventListener("load",a),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ad(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const He={},is=[],In=()=>{},O0=()=>!1,nc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ld=t=>t.startsWith("onUpdate:"),lt=Object.assign,cd=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},D0=Object.prototype.hasOwnProperty,Le=(t,e)=>D0.call(t,e),ge=Array.isArray,ss=t=>rc(t)==="[object Map]",cy=t=>rc(t)==="[object Set]",ve=t=>typeof t=="function",Ye=t=>typeof t=="string",hr=t=>typeof t=="symbol",Ke=t=>t!==null&&typeof t=="object",uy=t=>(Ke(t)||ve(t))&&ve(t.then)&&ve(t.catch),hy=Object.prototype.toString,rc=t=>hy.call(t),N0=t=>rc(t).slice(8,-1),dy=t=>rc(t)==="[object Object]",ud=t=>Ye(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,fo=ad(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ic=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},L0=/-(\w)/g,mn=ic(t=>t.replace(L0,(e,n)=>n?n.toUpperCase():"")),V0=/\B([A-Z])/g,Kr=ic(t=>t.replace(V0,"-$1").toLowerCase()),sc=ic(t=>t.charAt(0).toUpperCase()+t.slice(1)),pu=ic(t=>t?`on${sc(t)}`:""),Nr=(t,e)=>!Object.is(t,e),mu=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},fy=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},M0=t=>{const e=parseFloat(t);return isNaN(e)?t:e},F0=t=>{const e=Ye(t)?Number(t):NaN;return isNaN(e)?t:e};let jp;const Jo=()=>jp||(jp=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});function Xo(t){if(ge(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=Ye(r)?B0(r):Xo(r);if(i)for(const s in i)e[s]=i[s]}return e}else if(Ye(t)||Ke(t))return t}const U0=/;(?![^(]*\))/g,$0=/:([^]+)/,q0=/\/\*[^]*?\*\//g;function B0(t){const e={};return t.replace(q0,"").split(U0).forEach(n=>{if(n){const r=n.split($0);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function oc(t){let e="";if(Ye(t))e=t;else if(ge(t))for(let n=0;n<t.length;n++){const r=oc(t[n]);r&&(e+=r+" ")}else if(Ke(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function MF(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Ye(e)&&(t.class=oc(e)),n&&(t.style=Xo(n)),t}const j0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",H0=ad(j0);function py(t){return!!t||t===""}const my=t=>!!(t&&t.__v_isRef===!0),z0=t=>Ye(t)?t:t==null?"":ge(t)||Ke(t)&&(t.toString===hy||!ve(t.toString))?my(t)?z0(t.value):JSON.stringify(t,gy,2):String(t),gy=(t,e)=>my(e)?gy(t,e.value):ss(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i],s)=>(n[gu(r,s)+" =>"]=i,n),{})}:cy(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>gu(n))}:hr(e)?gu(e):Ke(e)&&!ge(e)&&!dy(e)?String(e):e,gu=(t,e="")=>{var n;return hr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $t;class _y{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=$t,!e&&$t&&(this.index=($t.scopes||($t.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=$t;try{return $t=this,e()}finally{$t=n}}}on(){$t=this}off(){$t=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function yy(t){return new _y(t)}function hd(){return $t}function vy(t,e=!1){$t&&$t.cleanups.push(t)}let ze;const _u=new WeakSet;class wy{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,$t&&$t.active&&$t.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,_u.has(this)&&(_u.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ty(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Hp(this),by(this);const e=ze,n=An;ze=this,An=!0;try{return this.fn()}finally{Iy(this),ze=e,An=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)pd(e);this.deps=this.depsTail=void 0,Hp(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?_u.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ah(this)&&this.run()}get dirty(){return ah(this)}}let Ey=0,po,mo;function Ty(t,e=!1){if(t.flags|=8,e){t.next=mo,mo=t;return}t.next=po,po=t}function dd(){Ey++}function fd(){if(--Ey>0)return;if(mo){let e=mo;for(mo=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;po;){let e=po;for(po=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function by(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Iy(t){let e,n=t.depsTail,r=n;for(;r;){const i=r.prevDep;r.version===-1?(r===n&&(n=i),pd(r),W0(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}t.deps=e,t.depsTail=n}function ah(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ay(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Ay(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Co))return;t.globalVersion=Co;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!ah(t)){t.flags&=-3;return}const n=ze,r=An;ze=t,An=!0;try{by(t);const i=t.fn(t._value);(e.version===0||Nr(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{ze=n,An=r,Iy(t),t.flags&=-3}}function pd(t,e=!1){const{dep:n,prevSub:r,nextSub:i}=t;if(r&&(r.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)pd(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function W0(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let An=!0;const Ry=[];function Gr(){Ry.push(An),An=!1}function Qr(){const t=Ry.pop();An=t===void 0?!0:t}function Hp(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ze;ze=void 0;try{e()}finally{ze=n}}}let Co=0;class K0{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ac{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ze||!An||ze===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ze)n=this.activeLink=new K0(ze,this),ze.deps?(n.prevDep=ze.depsTail,ze.depsTail.nextDep=n,ze.depsTail=n):ze.deps=ze.depsTail=n,Sy(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ze.depsTail,n.nextDep=void 0,ze.depsTail.nextDep=n,ze.depsTail=n,ze.deps===n&&(ze.deps=r)}return n}trigger(e){this.version++,Co++,this.notify(e)}notify(e){dd();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{fd()}}}function Sy(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Sy(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ml=new WeakMap,pi=Symbol(""),lh=Symbol(""),Po=Symbol("");function xt(t,e,n){if(An&&ze){let r=ml.get(t);r||ml.set(t,r=new Map);let i=r.get(n);i||(r.set(n,i=new ac),i.map=r,i.key=n),i.track()}}function Jn(t,e,n,r,i,s){const o=ml.get(t);if(!o){Co++;return}const a=c=>{c&&c.trigger()};if(dd(),e==="clear")o.forEach(a);else{const c=ge(t),u=c&&ud(n);if(c&&n==="length"){const h=Number(r);o.forEach((f,p)=>{(p==="length"||p===Po||!hr(p)&&p>=h)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(Po)),e){case"add":c?u&&a(o.get("length")):(a(o.get(pi)),ss(t)&&a(o.get(lh)));break;case"delete":c||(a(o.get(pi)),ss(t)&&a(o.get(lh)));break;case"set":ss(t)&&a(o.get(pi));break}}fd()}function G0(t,e){const n=ml.get(t);return n&&n.get(e)}function Hi(t){const e=Pe(t);return e===t?e:(xt(e,"iterate",Po),fn(t)?e:e.map(Ot))}function lc(t){return xt(t=Pe(t),"iterate",Po),t}const Q0={__proto__:null,[Symbol.iterator](){return yu(this,Symbol.iterator,Ot)},concat(...t){return Hi(this).concat(...t.map(e=>ge(e)?Hi(e):e))},entries(){return yu(this,"entries",t=>(t[1]=Ot(t[1]),t))},every(t,e){return Kn(this,"every",t,e,void 0,arguments)},filter(t,e){return Kn(this,"filter",t,e,n=>n.map(Ot),arguments)},find(t,e){return Kn(this,"find",t,e,Ot,arguments)},findIndex(t,e){return Kn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Kn(this,"findLast",t,e,Ot,arguments)},findLastIndex(t,e){return Kn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Kn(this,"forEach",t,e,void 0,arguments)},includes(...t){return vu(this,"includes",t)},indexOf(...t){return vu(this,"indexOf",t)},join(t){return Hi(this).join(t)},lastIndexOf(...t){return vu(this,"lastIndexOf",t)},map(t,e){return Kn(this,"map",t,e,void 0,arguments)},pop(){return Ys(this,"pop")},push(...t){return Ys(this,"push",t)},reduce(t,...e){return zp(this,"reduce",t,e)},reduceRight(t,...e){return zp(this,"reduceRight",t,e)},shift(){return Ys(this,"shift")},some(t,e){return Kn(this,"some",t,e,void 0,arguments)},splice(...t){return Ys(this,"splice",t)},toReversed(){return Hi(this).toReversed()},toSorted(t){return Hi(this).toSorted(t)},toSpliced(...t){return Hi(this).toSpliced(...t)},unshift(...t){return Ys(this,"unshift",t)},values(){return yu(this,"values",Ot)}};function yu(t,e,n){const r=lc(t),i=r[e]();return r!==t&&!fn(t)&&(i._next=i.next,i.next=()=>{const s=i._next();return s.value&&(s.value=n(s.value)),s}),i}const Y0=Array.prototype;function Kn(t,e,n,r,i,s){const o=lc(t),a=o!==t&&!fn(t),c=o[e];if(c!==Y0[e]){const f=c.apply(t,s);return a?Ot(f):f}let u=n;o!==t&&(a?u=function(f,p){return n.call(this,Ot(f),p,t)}:n.length>2&&(u=function(f,p){return n.call(this,f,p,t)}));const h=c.call(o,u,r);return a&&i?i(h):h}function zp(t,e,n,r){const i=lc(t);let s=n;return i!==t&&(fn(t)?n.length>3&&(s=function(o,a,c){return n.call(this,o,a,c,t)}):s=function(o,a,c){return n.call(this,o,Ot(a),c,t)}),i[e](s,...r)}function vu(t,e,n){const r=Pe(t);xt(r,"iterate",Po);const i=r[e](...n);return(i===-1||i===!1)&&_d(n[0])?(n[0]=Pe(n[0]),r[e](...n)):i}function Ys(t,e,n=[]){Gr(),dd();const r=Pe(t)[e].apply(t,n);return fd(),Qr(),r}const J0=ad("__proto__,__v_isRef,__isVue"),Cy=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(hr));function X0(t){hr(t)||(t=String(t));const e=Pe(this);return xt(e,"has",t),e.hasOwnProperty(t)}class Py{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(i?s?lI:Dy:s?Oy:xy).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ge(e);if(!i){let c;if(o&&(c=Q0[n]))return c;if(n==="hasOwnProperty")return X0}const a=Reflect.get(e,n,Qe(e)?e:r);return(hr(n)?Cy.has(n):J0(n))||(i||xt(e,"get",n),s)?a:Qe(a)?o&&ud(n)?a:a.value:Ke(a)?i?cc(a):dn(a):a}}class ky extends Py{constructor(e=!1){super(!1,e)}set(e,n,r,i){let s=e[n];if(!this._isShallow){const c=Ei(s);if(!fn(r)&&!Ei(r)&&(s=Pe(s),r=Pe(r)),!ge(e)&&Qe(s)&&!Qe(r))return c?!1:(s.value=r,!0)}const o=ge(e)&&ud(n)?Number(n)<e.length:Le(e,n),a=Reflect.set(e,n,r,Qe(e)?e:i);return e===Pe(i)&&(o?Nr(r,s)&&Jn(e,"set",n,r):Jn(e,"add",n,r)),a}deleteProperty(e,n){const r=Le(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&r&&Jn(e,"delete",n,void 0),i}has(e,n){const r=Reflect.has(e,n);return(!hr(n)||!Cy.has(n))&&xt(e,"has",n),r}ownKeys(e){return xt(e,"iterate",ge(e)?"length":pi),Reflect.ownKeys(e)}}class Z0 extends Py{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const eI=new ky,tI=new Z0,nI=new ky(!0);const ch=t=>t,Oa=t=>Reflect.getPrototypeOf(t);function rI(t,e,n){return function(...r){const i=this.__v_raw,s=Pe(i),o=ss(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=i[t](...r),h=n?ch:e?uh:Ot;return!e&&xt(s,"iterate",c?lh:pi),{next(){const{value:f,done:p}=u.next();return p?{value:f,done:p}:{value:a?[h(f[0]),h(f[1])]:h(f),done:p}},[Symbol.iterator](){return this}}}}function Da(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function iI(t,e){const n={get(i){const s=this.__v_raw,o=Pe(s),a=Pe(i);t||(Nr(i,a)&&xt(o,"get",i),xt(o,"get",a));const{has:c}=Oa(o),u=e?ch:t?uh:Ot;if(c.call(o,i))return u(s.get(i));if(c.call(o,a))return u(s.get(a));s!==o&&s.get(i)},get size(){const i=this.__v_raw;return!t&&xt(Pe(i),"iterate",pi),Reflect.get(i,"size",i)},has(i){const s=this.__v_raw,o=Pe(s),a=Pe(i);return t||(Nr(i,a)&&xt(o,"has",i),xt(o,"has",a)),i===a?s.has(i):s.has(i)||s.has(a)},forEach(i,s){const o=this,a=o.__v_raw,c=Pe(a),u=e?ch:t?uh:Ot;return!t&&xt(c,"iterate",pi),a.forEach((h,f)=>i.call(s,u(h),u(f),o))}};return lt(n,t?{add:Da("add"),set:Da("set"),delete:Da("delete"),clear:Da("clear")}:{add(i){!e&&!fn(i)&&!Ei(i)&&(i=Pe(i));const s=Pe(this);return Oa(s).has.call(s,i)||(s.add(i),Jn(s,"add",i,i)),this},set(i,s){!e&&!fn(s)&&!Ei(s)&&(s=Pe(s));const o=Pe(this),{has:a,get:c}=Oa(o);let u=a.call(o,i);u||(i=Pe(i),u=a.call(o,i));const h=c.call(o,i);return o.set(i,s),u?Nr(s,h)&&Jn(o,"set",i,s):Jn(o,"add",i,s),this},delete(i){const s=Pe(this),{has:o,get:a}=Oa(s);let c=o.call(s,i);c||(i=Pe(i),c=o.call(s,i)),a&&a.call(s,i);const u=s.delete(i);return c&&Jn(s,"delete",i,void 0),u},clear(){const i=Pe(this),s=i.size!==0,o=i.clear();return s&&Jn(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=rI(i,t,e)}),n}function md(t,e){const n=iI(t,e);return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(Le(n,i)&&i in r?n:r,i,s)}const sI={get:md(!1,!1)},oI={get:md(!1,!0)},aI={get:md(!0,!1)};const xy=new WeakMap,Oy=new WeakMap,Dy=new WeakMap,lI=new WeakMap;function cI(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function uI(t){return t.__v_skip||!Object.isExtensible(t)?0:cI(N0(t))}function dn(t){return Ei(t)?t:gd(t,!1,eI,sI,xy)}function hI(t){return gd(t,!1,nI,oI,Oy)}function cc(t){return gd(t,!0,tI,aI,Dy)}function gd(t,e,n,r,i){if(!Ke(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=uI(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function rr(t){return Ei(t)?rr(t.__v_raw):!!(t&&t.__v_isReactive)}function Ei(t){return!!(t&&t.__v_isReadonly)}function fn(t){return!!(t&&t.__v_isShallow)}function _d(t){return t?!!t.__v_raw:!1}function Pe(t){const e=t&&t.__v_raw;return e?Pe(e):t}function Di(t){return!Le(t,"__v_skip")&&Object.isExtensible(t)&&fy(t,"__v_skip",!0),t}const Ot=t=>Ke(t)?dn(t):t,uh=t=>Ke(t)?cc(t):t;function Qe(t){return t?t.__v_isRef===!0:!1}function Re(t){return Ny(t,!1)}function ns(t){return Ny(t,!0)}function Ny(t,e){return Qe(t)?t:new dI(t,e)}class dI{constructor(e,n){this.dep=new ac,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Pe(e),this._value=n?e:Ot(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||fn(e)||Ei(e);e=r?e:Pe(e),Nr(e,n)&&(this._rawValue=e,this._value=r?e:Ot(e),this.dep.trigger())}}function qt(t){return Qe(t)?t.value:t}function bn(t){return ve(t)?t():qt(t)}const fI={get:(t,e,n)=>e==="__v_raw"?t:qt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Qe(i)&&!Qe(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Ly(t){return rr(t)?t:new Proxy(t,fI)}class pI{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new ac,{get:r,set:i}=e(n.track.bind(n),n.trigger.bind(n));this._get=r,this._set=i}get value(){return this._value=this._get()}set value(e){this._set(e)}}function mI(t){return new pI(t)}function gI(t){const e=ge(t)?new Array(t.length):{};for(const n in t)e[n]=My(t,n);return e}class _I{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return G0(Pe(this._object),this._key)}}class yI{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Vy(t,e,n){return Qe(t)?t:ve(t)?new yI(t):Ke(t)&&arguments.length>1?My(t,e,n):Re(t)}function My(t,e,n){const r=t[e];return Qe(r)?r:new _I(t,e,n)}class vI{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ac(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Co-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ze!==this)return Ty(this,!0),!0}get value(){const e=this.dep.track();return Ay(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function wI(t,e,n=!1){let r,i;return ve(t)?r=t:(r=t.get,i=t.set),new vI(r,i,n)}const Na={},gl=new WeakMap;let ai;function EI(t,e=!1,n=ai){if(n){let r=gl.get(n);r||gl.set(n,r=[]),r.push(t)}}function TI(t,e,n=He){const{immediate:r,deep:i,once:s,scheduler:o,augmentJob:a,call:c}=n,u=D=>i?D:fn(D)||i===!1||i===0?Xn(D,1):Xn(D);let h,f,p,g,w=!1,C=!1;if(Qe(t)?(f=()=>t.value,w=fn(t)):rr(t)?(f=()=>u(t),w=!0):ge(t)?(C=!0,w=t.some(D=>rr(D)||fn(D)),f=()=>t.map(D=>{if(Qe(D))return D.value;if(rr(D))return u(D);if(ve(D))return c?c(D,2):D()})):ve(t)?e?f=c?()=>c(t,2):t:f=()=>{if(p){Gr();try{p()}finally{Qr()}}const D=ai;ai=h;try{return c?c(t,3,[g]):t(g)}finally{ai=D}}:f=In,e&&i){const D=f,V=i===!0?1/0:i;f=()=>Xn(D(),V)}const S=hd(),x=()=>{h.stop(),S&&S.active&&cd(S.effects,h)};if(s&&e){const D=e;e=(...V)=>{D(...V),x()}}let k=C?new Array(t.length).fill(Na):Na;const O=D=>{if(!(!(h.flags&1)||!h.dirty&&!D))if(e){const V=h.run();if(i||w||(C?V.some((j,b)=>Nr(j,k[b])):Nr(V,k))){p&&p();const j=ai;ai=h;try{const b=[V,k===Na?void 0:C&&k[0]===Na?[]:k,g];c?c(e,3,b):e(...b),k=V}finally{ai=j}}}else h.run()};return a&&a(O),h=new wy(f),h.scheduler=o?()=>o(O,!1):O,g=D=>EI(D,!1,h),p=h.onStop=()=>{const D=gl.get(h);if(D){if(c)c(D,4);else for(const V of D)V();gl.delete(h)}},e?r?O(!0):k=h.run():o?o(O.bind(null,!0),!0):h.run(),x.pause=h.pause.bind(h),x.resume=h.resume.bind(h),x.stop=x,x}function Xn(t,e=1/0,n){if(e<=0||!Ke(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Qe(t))Xn(t.value,e,n);else if(ge(t))for(let r=0;r<t.length;r++)Xn(t[r],e,n);else if(cy(t)||ss(t))t.forEach(r=>{Xn(r,e,n)});else if(dy(t)){for(const r in t)Xn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Xn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zo(t,e,n,r){try{return r?t(...r):t()}catch(i){ea(i,e,n)}}function Sn(t,e,n,r){if(ve(t)){const i=Zo(t,e,n,r);return i&&uy(i)&&i.catch(s=>{ea(s,e,n)}),i}if(ge(t)){const i=[];for(let s=0;s<t.length;s++)i.push(Sn(t[s],e,n,r));return i}}function ea(t,e,n,r=!0){const i=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||He;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const h=a.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](t,c,u)===!1)return}a=a.parent}if(s){Gr(),Zo(s,null,10,[t,c,u]),Qr();return}}bI(t,n,i,r,o)}function bI(t,e,n,r=!0,i=!1){if(i)throw t;console.error(t)}const Bt=[];let Vn=-1;const os=[];let Ar=null,Qi=0;const Fy=Promise.resolve();let _l=null;function on(t){const e=_l||Fy;return t?e.then(this?t.bind(this):t):e}function II(t){let e=Vn+1,n=Bt.length;for(;e<n;){const r=e+n>>>1,i=Bt[r],s=ko(i);s<t||s===t&&i.flags&2?e=r+1:n=r}return e}function yd(t){if(!(t.flags&1)){const e=ko(t),n=Bt[Bt.length-1];!n||!(t.flags&2)&&e>=ko(n)?Bt.push(t):Bt.splice(II(e),0,t),t.flags|=1,Uy()}}function Uy(){_l||(_l=Fy.then(qy))}function AI(t){ge(t)?os.push(...t):Ar&&t.id===-1?Ar.splice(Qi+1,0,t):t.flags&1||(os.push(t),t.flags|=1),Uy()}function Wp(t,e,n=Vn+1){for(;n<Bt.length;n++){const r=Bt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Bt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function $y(t){if(os.length){const e=[...new Set(os)].sort((n,r)=>ko(n)-ko(r));if(os.length=0,Ar){Ar.push(...e);return}for(Ar=e,Qi=0;Qi<Ar.length;Qi++){const n=Ar[Qi];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ar=null,Qi=0}}const ko=t=>t.id==null?t.flags&2?-1:1/0:t.id;function qy(t){const e=In;try{for(Vn=0;Vn<Bt.length;Vn++){const n=Bt[Vn];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),Zo(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;Vn<Bt.length;Vn++){const n=Bt[Vn];n&&(n.flags&=-2)}Vn=-1,Bt.length=0,$y(),_l=null,(Bt.length||os.length)&&qy()}}let mt=null,By=null;function yl(t){const e=mt;return mt=t,By=t&&t.type.__scopeId||null,e}function nt(t,e=mt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&om(-1);const s=yl(e);let o;try{o=t(...i)}finally{yl(s),r._d&&om(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function as(t,e){if(mt===null)return t;const n=mc(mt),r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[s,o,a,c=He]=e[i];s&&(ve(s)&&(s={mounted:s,updated:s}),s.deep&&Xn(o),r.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function ri(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(Gr(),Sn(c,n,8,[t.el,a,t,e]),Qr())}}const jy=Symbol("_vte"),Hy=t=>t.__isTeleport,go=t=>t&&(t.disabled||t.disabled===""),Kp=t=>t&&(t.defer||t.defer===""),Gp=t=>typeof SVGElement!="undefined"&&t instanceof SVGElement,Qp=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,hh=(t,e)=>{const n=t&&t.to;return Ye(n)?e?e(n):null:n},zy={name:"Teleport",__isTeleport:!0,process(t,e,n,r,i,s,o,a,c,u){const{mc:h,pc:f,pbc:p,o:{insert:g,querySelector:w,createText:C,createComment:S}}=u,x=go(e.props);let{shapeFlag:k,children:O,dynamicChildren:D}=e;if(t==null){const V=e.el=C(""),j=e.anchor=C("");g(V,n,r),g(j,n,r);const b=(_,A)=>{k&16&&(i&&i.isCE&&(i.ce._teleportTarget=_),h(O,_,A,i,s,o,a,c))},v=()=>{const _=e.target=hh(e.props,w),A=Wy(_,e,C,g);_&&(o!=="svg"&&Gp(_)?o="svg":o!=="mathml"&&Qp(_)&&(o="mathml"),x||(b(_,A),Ya(e,!1)))};x&&(b(n,j),Ya(e,!0)),Kp(e.props)?Ut(()=>{v(),e.el.__isMounted=!0},s):v()}else{if(Kp(e.props)&&!t.el.__isMounted){Ut(()=>{zy.process(t,e,n,r,i,s,o,a,c,u),delete t.el.__isMounted},s);return}e.el=t.el,e.targetStart=t.targetStart;const V=e.anchor=t.anchor,j=e.target=t.target,b=e.targetAnchor=t.targetAnchor,v=go(t.props),_=v?n:j,A=v?V:b;if(o==="svg"||Gp(j)?o="svg":(o==="mathml"||Qp(j))&&(o="mathml"),D?(p(t.dynamicChildren,D,_,i,s,o,a),Ad(t,e,!0)):c||f(t,e,_,A,i,s,o,a,!1),x)v?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):La(e,n,V,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const T=e.target=hh(e.props,w);T&&La(e,T,null,u,0)}else v&&La(e,j,b,u,1);Ya(e,x)}},remove(t,e,n,{um:r,o:{remove:i}},s){const{shapeFlag:o,children:a,anchor:c,targetStart:u,targetAnchor:h,target:f,props:p}=t;if(f&&(i(u),i(h)),s&&i(c),o&16){const g=s||!go(p);for(let w=0;w<a.length;w++){const C=a[w];r(C,e,n,g,!!C.dynamicChildren)}}},move:La,hydrate:RI};function La(t,e,n,{o:{insert:r},m:i},s=2){s===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:u,props:h}=t,f=s===2;if(f&&r(o,e,n),(!f||go(h))&&c&16)for(let p=0;p<u.length;p++)i(u[p],e,n,2);f&&r(a,e,n)}function RI(t,e,n,r,i,s,{o:{nextSibling:o,parentNode:a,querySelector:c,insert:u,createText:h}},f){const p=e.target=hh(e.props,c);if(p){const g=go(e.props),w=p._lpa||p.firstChild;if(e.shapeFlag&16)if(g)e.anchor=f(o(t),e,a(t),n,r,i,s),e.targetStart=w,e.targetAnchor=w&&o(w);else{e.anchor=o(t);let C=w;for(;C;){if(C&&C.nodeType===8){if(C.data==="teleport start anchor")e.targetStart=C;else if(C.data==="teleport anchor"){e.targetAnchor=C,p._lpa=e.targetAnchor&&o(e.targetAnchor);break}}C=o(C)}e.targetAnchor||Wy(p,e,h,u),f(w&&o(w),e,p,n,r,i,s)}Ya(e,g)}return e.anchor&&o(e.anchor)}const SI=zy;function Ya(t,e){const n=t.ctx;if(n&&n.ut){let r,i;for(e?(r=t.el,i=t.anchor):(r=t.targetStart,i=t.targetAnchor);r&&r!==i;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function Wy(t,e,n,r){const i=e.targetStart=n(""),s=e.targetAnchor=n("");return i[jy]=s,t&&(r(i,t),r(s,t)),s}const Rr=Symbol("_leaveCb"),Va=Symbol("_enterCb");function Ky(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return sr(()=>{t.isMounted=!0}),Nt(()=>{t.isUnmounting=!0}),t}const ln=[Function,Array],Gy={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ln,onEnter:ln,onAfterEnter:ln,onEnterCancelled:ln,onBeforeLeave:ln,onLeave:ln,onAfterLeave:ln,onLeaveCancelled:ln,onBeforeAppear:ln,onAppear:ln,onAfterAppear:ln,onAppearCancelled:ln},Qy=t=>{const e=t.subTree;return e.component?Qy(e.component):e},CI={name:"BaseTransition",props:Gy,setup(t,{slots:e}){const n=Ze(),r=Ky();return()=>{const i=e.default&&vd(e.default(),!0);if(!i||!i.length)return;const s=Yy(i),o=Pe(t),{mode:a}=o;if(r.isLeaving)return wu(s);const c=Yp(s);if(!c)return wu(s);let u=xo(c,o,r,n,f=>u=f);c.type!==jt&&Ti(c,u);let h=n.subTree&&Yp(n.subTree);if(h&&h.type!==jt&&!ci(c,h)&&Qy(n).type!==jt){let f=xo(h,o,r,n);if(Ti(h,f),a==="out-in"&&c.type!==jt)return r.isLeaving=!0,f.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,h=void 0},wu(s);a==="in-out"&&c.type!==jt?f.delayLeave=(p,g,w)=>{const C=Jy(r,h);C[String(h.key)]=h,p[Rr]=()=>{g(),p[Rr]=void 0,delete u.delayedLeave,h=void 0},u.delayedLeave=()=>{w(),delete u.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return s}}};function Yy(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==jt){e=n;break}}return e}const PI=CI;function Jy(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function xo(t,e,n,r,i){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:h,onEnterCancelled:f,onBeforeLeave:p,onLeave:g,onAfterLeave:w,onLeaveCancelled:C,onBeforeAppear:S,onAppear:x,onAfterAppear:k,onAppearCancelled:O}=e,D=String(t.key),V=Jy(n,t),j=(_,A)=>{_&&Sn(_,r,9,A)},b=(_,A)=>{const T=A[1];j(_,A),ge(_)?_.every(R=>R.length<=1)&&T():_.length<=1&&T()},v={mode:o,persisted:a,beforeEnter(_){let A=c;if(!n.isMounted)if(s)A=S||c;else return;_[Rr]&&_[Rr](!0);const T=V[D];T&&ci(t,T)&&T.el[Rr]&&T.el[Rr](),j(A,[_])},enter(_){let A=u,T=h,R=f;if(!n.isMounted)if(s)A=x||u,T=k||h,R=O||f;else return;let E=!1;const G=_[Va]=oe=>{E||(E=!0,oe?j(R,[_]):j(T,[_]),v.delayedLeave&&v.delayedLeave(),_[Va]=void 0)};A?b(A,[_,G]):G()},leave(_,A){const T=String(t.key);if(_[Va]&&_[Va](!0),n.isUnmounting)return A();j(p,[_]);let R=!1;const E=_[Rr]=G=>{R||(R=!0,A(),G?j(C,[_]):j(w,[_]),_[Rr]=void 0,V[T]===t&&delete V[T])};V[T]=t,g?b(g,[_,E]):E()},clone(_){const A=xo(_,e,n,r,i);return i&&i(A),A}};return v}function wu(t){if(ta(t))return t=Ur(t),t.children=null,t}function Yp(t){if(!ta(t))return Hy(t.type)&&t.children?Yy(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ve(n.default))return n.default()}}function Ti(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ti(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function vd(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Gt?(o.patchFlag&128&&i++,r=r.concat(vd(o.children,e,a))):(e||o.type!==jt)&&r.push(a!=null?Ur(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function uc(t,e){return ve(t)?(()=>lt({name:t.name},e,{setup:t}))():t}function wd(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function vl(t,e,n,r,i=!1){if(ge(t)){t.forEach((w,C)=>vl(w,e&&(ge(e)?e[C]:e),n,r,i));return}if(ls(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&vl(t,e,n,r.component.subTree);return}const s=r.shapeFlag&4?mc(r.component):r.el,o=i?null:s,{i:a,r:c}=t,u=e&&e.r,h=a.refs===He?a.refs={}:a.refs,f=a.setupState,p=Pe(f),g=f===He?()=>!1:w=>Le(p,w);if(u!=null&&u!==c&&(Ye(u)?(h[u]=null,g(u)&&(f[u]=null)):Qe(u)&&(u.value=null)),ve(c))Zo(c,a,12,[o,h]);else{const w=Ye(c),C=Qe(c);if(w||C){const S=()=>{if(t.f){const x=w?g(c)?f[c]:h[c]:c.value;i?ge(x)&&cd(x,s):ge(x)?x.includes(s)||x.push(s):w?(h[c]=[s],g(c)&&(f[c]=h[c])):(c.value=[s],t.k&&(h[t.k]=c.value))}else w?(h[c]=o,g(c)&&(f[c]=o)):C&&(c.value=o,t.k&&(h[t.k]=o))};o?(S.id=-1,Ut(S,n)):S()}}}const Jp=t=>t.nodeType===8;Jo().requestIdleCallback;Jo().cancelIdleCallback;function kI(t,e){if(Jp(t)&&t.data==="["){let n=1,r=t.nextSibling;for(;r;){if(r.nodeType===1){if(e(r)===!1)break}else if(Jp(r))if(r.data==="]"){if(--n===0)break}else r.data==="["&&n++;r=r.nextSibling}}else e(t)}const ls=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Eu(t){ve(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:i=200,hydrate:s,timeout:o,suspensible:a=!0,onError:c}=t;let u=null,h,f=0;const p=()=>(f++,u=null,g()),g=()=>{let w;return u||(w=u=e().catch(C=>{if(C=C instanceof Error?C:new Error(String(C)),c)return new Promise((S,x)=>{c(C,()=>S(p()),()=>x(C),f+1)});throw C}).then(C=>w!==u&&u?u:(C&&(C.__esModule||C[Symbol.toStringTag]==="Module")&&(C=C.default),h=C,C)))};return uc({name:"AsyncComponentWrapper",__asyncLoader:g,__asyncHydrate(w,C,S){const x=s?()=>{const k=s(S,O=>kI(w,O));k&&(C.bum||(C.bum=[])).push(k)}:S;h?x():g().then(()=>!C.isUnmounted&&x())},get __asyncResolved(){return h},setup(){const w=pt;if(wd(w),h)return()=>Tu(h,w);const C=O=>{u=null,ea(O,w,13,!r)};if(a&&w.suspense||_s)return g().then(O=>()=>Tu(O,w)).catch(O=>(C(O),()=>r?Ee(r,{error:O}):null));const S=Re(!1),x=Re(),k=Re(!!i);return i&&setTimeout(()=>{k.value=!1},i),o!=null&&setTimeout(()=>{if(!S.value&&!x.value){const O=new Error(`Async component timed out after ${o}ms.`);C(O),x.value=O}},o),g().then(()=>{S.value=!0,w.parent&&ta(w.parent.vnode)&&w.parent.update()}).catch(O=>{C(O),x.value=O}),()=>{if(S.value&&h)return Tu(h,w);if(x.value&&r)return Ee(r,{error:x.value});if(n&&!k.value)return Ee(n)}}})}function Tu(t,e){const{ref:n,props:r,children:i,ce:s}=e.vnode,o=Ee(t,r,i);return o.ref=n,o.ce=s,delete e.vnode.ce,o}const ta=t=>t.type.__isKeepAlive;function xI(t,e){Xy(t,"a",e)}function Ed(t,e){Xy(t,"da",e)}function Xy(t,e,n=pt){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(hc(e,r,n),n){let i=n.parent;for(;i&&i.parent;)ta(i.parent.vnode)&&OI(r,e,n,i),i=i.parent}}function OI(t,e,n,r){const i=hc(e,t,r,!0);dc(()=>{cd(r[e],i)},n)}function hc(t,e,n=pt,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{Gr();const a=na(n),c=Sn(e,n,t,o);return a(),Qr(),c});return r?i.unshift(s):i.push(s),s}}const dr=t=>(e,n=pt)=>{(!_s||t==="sp")&&hc(t,(...r)=>e(...r),n)},DI=dr("bm"),sr=dr("m"),NI=dr("bu"),Zy=dr("u"),Nt=dr("bum"),dc=dr("um"),LI=dr("sp"),VI=dr("rtg"),MI=dr("rtc");function ev(t,e=pt){hc("ec",t,e)}const Td="components";function tv(t,e){return rv(Td,t,!0,e)||t}const nv=Symbol.for("v-ndc");function FI(t){return Ye(t)?rv(Td,t,!1)||t:t||nv}function rv(t,e,n=!0,r=!1){const i=mt||pt;if(i){const s=i.type;if(t===Td){const a=RA(s,!1);if(a&&(a===e||a===mn(e)||a===sc(mn(e))))return s}const o=Xp(i[t]||s[t],e)||Xp(i.appContext[t],e);return!o&&r?s:o}}function Xp(t,e){return t&&(t[e]||t[mn(e)]||t[sc(mn(e))])}function FF(t,e,n,r){let i;const s=n&&n[r],o=ge(t);if(o||Ye(t)){const a=o&&rr(t);let c=!1;a&&(c=!fn(t),t=lc(t)),i=new Array(t.length);for(let u=0,h=t.length;u<h;u++)i[u]=e(c?Ot(t[u]):t[u],u,void 0,s&&s[u])}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,s&&s[a])}else if(Ke(t))if(t[Symbol.iterator])i=Array.from(t,(a,c)=>e(a,c,void 0,s&&s[c]));else{const a=Object.keys(t);i=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const h=a[c];i[c]=e(t[h],h,c,s&&s[c])}}else i=[];return n&&(n[r]=i),i}function UF(t,e){for(let n=0;n<e.length;n++){const r=e[n];if(ge(r))for(let i=0;i<r.length;i++)t[r[i].name]=r[i].fn;else r&&(t[r.name]=r.key?(...i)=>{const s=r.fn(...i);return s&&(s.key=r.key),s}:r.fn)}return t}function $F(t,e,n={},r,i){if(mt.ce||mt.parent&&ls(mt.parent)&&mt.parent.ce)return e!=="default"&&(n.name=e),un(),hn(Gt,null,[Ee("slot",n,r&&r())],64);let s=t[e];s&&s._c&&(s._d=!1),un();const o=s&&iv(s(n)),a=n.key||o&&o.key,c=hn(Gt,{key:(a&&!hr(a)?a:`_${e}`)+(!o&&r?"_fb":"")},o||(r?r():[]),o&&t._===1?64:-2);return!i&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),s&&s._c&&(s._d=!0),c}function iv(t){return t.some(e=>Do(e)?!(e.type===jt||e.type===Gt&&!iv(e.children)):!0)?t:null}const dh=t=>t?Tv(t)?mc(t):dh(t.parent):null,_o=lt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>dh(t.parent),$root:t=>dh(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>bd(t),$forceUpdate:t=>t.f||(t.f=()=>{yd(t.update)}),$nextTick:t=>t.n||(t.n=on.bind(t.proxy)),$watch:t=>aA.bind(t)}),bu=(t,e)=>t!==He&&!t.__isScriptSetup&&Le(t,e),UI={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(bu(r,e))return o[e]=1,r[e];if(i!==He&&Le(i,e))return o[e]=2,i[e];if((u=t.propsOptions[0])&&Le(u,e))return o[e]=3,s[e];if(n!==He&&Le(n,e))return o[e]=4,n[e];fh&&(o[e]=0)}}const h=_o[e];let f,p;if(h)return e==="$attrs"&&xt(t.attrs,"get",""),h(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==He&&Le(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Le(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return bu(i,e)?(i[e]=n,!0):r!==He&&Le(r,e)?(r[e]=n,!0):Le(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==He&&Le(t,o)||bu(e,o)||(a=s[0])&&Le(a,o)||Le(r,o)||Le(_o,o)||Le(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Le(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Zp(t){return ge(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let fh=!0;function $I(t){const e=bd(t),n=t.proxy,r=t.ctx;fh=!1,e.beforeCreate&&em(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:u,created:h,beforeMount:f,mounted:p,beforeUpdate:g,updated:w,activated:C,deactivated:S,beforeDestroy:x,beforeUnmount:k,destroyed:O,unmounted:D,render:V,renderTracked:j,renderTriggered:b,errorCaptured:v,serverPrefetch:_,expose:A,inheritAttrs:T,components:R,directives:E,filters:G}=e;if(u&&qI(u,r,null),o)for(const _e in o){const he=o[_e];ve(he)&&(r[_e]=he.bind(n))}if(i){const _e=i.call(n,n);Ke(_e)&&(t.data=dn(_e))}if(fh=!0,s)for(const _e in s){const he=s[_e],qe=ve(he)?he.bind(n,n):ve(he.get)?he.get.bind(n,n):In,Je=!ve(he)&&ve(he.set)?he.set.bind(n):In,st=H({get:qe,set:Je});Object.defineProperty(r,_e,{enumerable:!0,configurable:!0,get:()=>st.value,set:De=>st.value=De})}if(a)for(const _e in a)sv(a[_e],r,n,_e);if(c){const _e=ve(c)?c.call(n):c;Reflect.ownKeys(_e).forEach(he=>{cs(he,_e[he])})}h&&em(h,t,"c");function se(_e,he){ge(he)?he.forEach(qe=>_e(qe.bind(n))):he&&_e(he.bind(n))}if(se(DI,f),se(sr,p),se(NI,g),se(Zy,w),se(xI,C),se(Ed,S),se(ev,v),se(MI,j),se(VI,b),se(Nt,k),se(dc,D),se(LI,_),ge(A))if(A.length){const _e=t.exposed||(t.exposed={});A.forEach(he=>{Object.defineProperty(_e,he,{get:()=>n[he],set:qe=>n[he]=qe})})}else t.exposed||(t.exposed={});V&&t.render===In&&(t.render=V),T!=null&&(t.inheritAttrs=T),R&&(t.components=R),E&&(t.directives=E),_&&wd(t)}function qI(t,e,n=In){ge(t)&&(t=ph(t));for(const r in t){const i=t[r];let s;Ke(i)?"default"in i?s=zt(i.from||r,i.default,!0):s=zt(i.from||r):s=zt(i),Qe(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function em(t,e,n){Sn(ge(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function sv(t,e,n,r){let i=r.includes(".")?_v(n,r):()=>n[r];if(Ye(t)){const s=e[t];ve(s)&&Ve(i,s)}else if(ve(t))Ve(i,t.bind(n));else if(Ke(t))if(ge(t))t.forEach(s=>sv(s,e,n,r));else{const s=ve(t.handler)?t.handler.bind(n):e[t.handler];ve(s)&&Ve(i,s,t)}}function bd(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!n&&!r?c=e:(c={},i.length&&i.forEach(u=>wl(c,u,o,!0)),wl(c,e,o)),Ke(e)&&s.set(e,c),c}function wl(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&wl(t,s,n,!0),i&&i.forEach(o=>wl(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=BI[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const BI={data:tm,props:nm,emits:nm,methods:ro,computed:ro,beforeCreate:Ft,created:Ft,beforeMount:Ft,mounted:Ft,beforeUpdate:Ft,updated:Ft,beforeDestroy:Ft,beforeUnmount:Ft,destroyed:Ft,unmounted:Ft,activated:Ft,deactivated:Ft,errorCaptured:Ft,serverPrefetch:Ft,components:ro,directives:ro,watch:HI,provide:tm,inject:jI};function tm(t,e){return e?t?function(){return lt(ve(t)?t.call(this,this):t,ve(e)?e.call(this,this):e)}:e:t}function jI(t,e){return ro(ph(t),ph(e))}function ph(t){if(ge(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ft(t,e){return t?[...new Set([].concat(t,e))]:e}function ro(t,e){return t?lt(Object.create(null),t,e):e}function nm(t,e){return t?ge(t)&&ge(e)?[...new Set([...t,...e])]:lt(Object.create(null),Zp(t),Zp(e!=null?e:{})):e}function HI(t,e){if(!t)return e;if(!e)return t;const n=lt(Object.create(null),t);for(const r in e)n[r]=Ft(t[r],e[r]);return n}function ov(){return{app:null,config:{isNativeTag:O0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zI=0;function WI(t,e){return function(r,i=null){ve(r)||(r=lt({},r)),i!=null&&!Ke(i)&&(i=null);const s=ov(),o=new WeakSet,a=[];let c=!1;const u=s.app={_uid:zI++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:CA,get config(){return s.config},set config(h){},use(h,...f){return o.has(h)||(h&&ve(h.install)?(o.add(h),h.install(u,...f)):ve(h)&&(o.add(h),h(u,...f))),u},mixin(h){return s.mixins.includes(h)||s.mixins.push(h),u},component(h,f){return f?(s.components[h]=f,u):s.components[h]},directive(h,f){return f?(s.directives[h]=f,u):s.directives[h]},mount(h,f,p){if(!c){const g=u._ceVNode||Ee(r,i);return g.appContext=s,p===!0?p="svg":p===!1&&(p=void 0),f&&e?e(g,h):t(g,h,p),c=!0,u._container=h,h.__vue_app__=u,mc(g.component)}},onUnmount(h){a.push(h)},unmount(){c&&(Sn(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,f){return s.provides[h]=f,u},runWithContext(h){const f=mi;mi=u;try{return h()}finally{mi=f}}};return u}}let mi=null;function cs(t,e){if(pt){let n=pt.provides;const r=pt.parent&&pt.parent.provides;r===n&&(n=pt.provides=Object.create(r)),n[t]=e}}function zt(t,e,n=!1){const r=pt||mt;if(r||mi){const i=mi?mi._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ve(e)?e.call(r&&r.proxy):e}}function KI(){return!!(pt||mt||mi)}const av={},lv=()=>Object.create(av),cv=t=>Object.getPrototypeOf(t)===av;function GI(t,e,n,r=!1){const i={},s=lv();t.propsDefaults=Object.create(null),uv(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:hI(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function QI(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=Pe(i),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let f=0;f<h.length;f++){let p=h[f];if(fc(t.emitsOptions,p))continue;const g=e[p];if(c)if(Le(s,p))g!==s[p]&&(s[p]=g,u=!0);else{const w=mn(p);i[w]=mh(c,a,w,g,t,!1)}else g!==s[p]&&(s[p]=g,u=!0)}}}else{uv(t,e,i,s)&&(u=!0);let h;for(const f in a)(!e||!Le(e,f)&&((h=Kr(f))===f||!Le(e,h)))&&(c?n&&(n[f]!==void 0||n[h]!==void 0)&&(i[f]=mh(c,a,f,void 0,t,!0)):delete i[f]);if(s!==a)for(const f in s)(!e||!Le(e,f)&&!0)&&(delete s[f],u=!0)}u&&Jn(t.attrs,"set","")}function uv(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(fo(c))continue;const u=e[c];let h;i&&Le(i,h=mn(c))?!s||!s.includes(h)?n[h]=u:(a||(a={}))[h]=u:fc(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(s){const c=Pe(n),u=a||He;for(let h=0;h<s.length;h++){const f=s[h];n[f]=mh(i,c,f,u[f],t,!Le(u,f))}}return o}function mh(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=Le(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ve(c)){const{propsDefaults:u}=i;if(n in u)r=u[n];else{const h=na(i);r=u[n]=c.call(null,e),h()}}else r=c;i.ce&&i.ce._setProp(n,r)}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===Kr(n))&&(r=!0))}return r}const YI=new WeakMap;function hv(t,e,n=!1){const r=n?YI:e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let c=!1;if(!ve(t)){const h=f=>{c=!0;const[p,g]=hv(f,e,!0);lt(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!s&&!c)return Ke(t)&&r.set(t,is),is;if(ge(s))for(let h=0;h<s.length;h++){const f=mn(s[h]);rm(f)&&(o[f]=He)}else if(s)for(const h in s){const f=mn(h);if(rm(f)){const p=s[h],g=o[f]=ge(p)||ve(p)?{type:p}:lt({},p),w=g.type;let C=!1,S=!0;if(ge(w))for(let x=0;x<w.length;++x){const k=w[x],O=ve(k)&&k.name;if(O==="Boolean"){C=!0;break}else O==="String"&&(S=!1)}else C=ve(w)&&w.name==="Boolean";g[0]=C,g[1]=S,(C||Le(g,"default"))&&a.push(f)}}const u=[o,a];return Ke(t)&&r.set(t,u),u}function rm(t){return t[0]!=="$"&&!fo(t)}const dv=t=>t[0]==="_"||t==="$stable",Id=t=>ge(t)?t.map(Fn):[Fn(t)],JI=(t,e,n)=>{if(e._n)return e;const r=nt((...i)=>Id(e(...i)),n);return r._c=!1,r},fv=(t,e,n)=>{const r=t._ctx;for(const i in t){if(dv(i))continue;const s=t[i];if(ve(s))e[i]=JI(i,s,r);else if(s!=null){const o=Id(s);e[i]=()=>o}}},pv=(t,e)=>{const n=Id(e);t.slots.default=()=>n},mv=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},XI=(t,e,n)=>{const r=t.slots=lv();if(t.vnode.shapeFlag&32){const i=e._;i?(mv(r,e,n),n&&fy(r,"_",i,!0)):fv(e,r)}else e&&pv(t,e)},ZI=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=He;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:mv(i,e,n):(s=!e.$stable,fv(e,i)),o=e}else e&&(pv(t,e),o={default:1});if(s)for(const a in i)!dv(a)&&o[a]==null&&delete i[a]};function eA(){typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__!="boolean"&&(Jo().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const Ut=pA;function tA(t){return nA(t)}function nA(t,e){eA();const n=Jo();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:u,setElementText:h,parentNode:f,nextSibling:p,setScopeId:g=In,insertStaticContent:w}=t,C=(I,P,L,z=null,q=null,W=null,ee=void 0,J=null,Q=!!P.dynamicChildren)=>{if(I===P)return;I&&!ci(I,P)&&(z=F(I),De(I,q,W,!0),I=null),P.patchFlag===-2&&(Q=!1,P.dynamicChildren=null);const{type:K,ref:fe,shapeFlag:ne}=P;switch(K){case pc:S(I,P,L,z);break;case jt:x(I,P,L,z);break;case Ja:I==null&&k(P,L,z,ee);break;case Gt:R(I,P,L,z,q,W,ee,J,Q);break;default:ne&1?V(I,P,L,z,q,W,ee,J,Q):ne&6?E(I,P,L,z,q,W,ee,J,Q):(ne&64||ne&128)&&K.process(I,P,L,z,q,W,ee,J,Q,re)}fe!=null&&q&&vl(fe,I&&I.ref,W,P||I,!P)},S=(I,P,L,z)=>{if(I==null)r(P.el=a(P.children),L,z);else{const q=P.el=I.el;P.children!==I.children&&u(q,P.children)}},x=(I,P,L,z)=>{I==null?r(P.el=c(P.children||""),L,z):P.el=I.el},k=(I,P,L,z)=>{[I.el,I.anchor]=w(I.children,P,L,z,I.el,I.anchor)},O=({el:I,anchor:P},L,z)=>{let q;for(;I&&I!==P;)q=p(I),r(I,L,z),I=q;r(P,L,z)},D=({el:I,anchor:P})=>{let L;for(;I&&I!==P;)L=p(I),i(I),I=L;i(P)},V=(I,P,L,z,q,W,ee,J,Q)=>{P.type==="svg"?ee="svg":P.type==="math"&&(ee="mathml"),I==null?j(P,L,z,q,W,ee,J,Q):_(I,P,q,W,ee,J,Q)},j=(I,P,L,z,q,W,ee,J)=>{let Q,K;const{props:fe,shapeFlag:ne,transition:ae,dirs:me}=I;if(Q=I.el=o(I.type,W,fe&&fe.is,fe),ne&8?h(Q,I.children):ne&16&&v(I.children,Q,null,z,q,Iu(I,W),ee,J),me&&ri(I,null,z,"created"),b(Q,I,I.scopeId,ee,z),fe){for(const be in fe)be!=="value"&&!fo(be)&&s(Q,be,null,fe[be],W,z);"value"in fe&&s(Q,"value",null,fe.value,W),(K=fe.onVnodeBeforeMount)&&Nn(K,z,I)}me&&ri(I,null,z,"beforeMount");const pe=rA(q,ae);pe&&ae.beforeEnter(Q),r(Q,P,L),((K=fe&&fe.onVnodeMounted)||pe||me)&&Ut(()=>{K&&Nn(K,z,I),pe&&ae.enter(Q),me&&ri(I,null,z,"mounted")},q)},b=(I,P,L,z,q)=>{if(L&&g(I,L),z)for(let W=0;W<z.length;W++)g(I,z[W]);if(q){let W=q.subTree;if(P===W||vv(W.type)&&(W.ssContent===P||W.ssFallback===P)){const ee=q.vnode;b(I,ee,ee.scopeId,ee.slotScopeIds,q.parent)}}},v=(I,P,L,z,q,W,ee,J,Q=0)=>{for(let K=Q;K<I.length;K++){const fe=I[K]=J?Sr(I[K]):Fn(I[K]);C(null,fe,P,L,z,q,W,ee,J)}},_=(I,P,L,z,q,W,ee)=>{const J=P.el=I.el;let{patchFlag:Q,dynamicChildren:K,dirs:fe}=P;Q|=I.patchFlag&16;const ne=I.props||He,ae=P.props||He;let me;if(L&&ii(L,!1),(me=ae.onVnodeBeforeUpdate)&&Nn(me,L,P,I),fe&&ri(P,I,L,"beforeUpdate"),L&&ii(L,!0),(ne.innerHTML&&ae.innerHTML==null||ne.textContent&&ae.textContent==null)&&h(J,""),K?A(I.dynamicChildren,K,J,L,z,Iu(P,q),W):ee||he(I,P,J,null,L,z,Iu(P,q),W,!1),Q>0){if(Q&16)T(J,ne,ae,L,q);else if(Q&2&&ne.class!==ae.class&&s(J,"class",null,ae.class,q),Q&4&&s(J,"style",ne.style,ae.style,q),Q&8){const pe=P.dynamicProps;for(let be=0;be<pe.length;be++){const xe=pe[be],At=ne[xe],dt=ae[xe];(dt!==At||xe==="value")&&s(J,xe,At,dt,q,L)}}Q&1&&I.children!==P.children&&h(J,P.children)}else!ee&&K==null&&T(J,ne,ae,L,q);((me=ae.onVnodeUpdated)||fe)&&Ut(()=>{me&&Nn(me,L,P,I),fe&&ri(P,I,L,"updated")},z)},A=(I,P,L,z,q,W,ee)=>{for(let J=0;J<P.length;J++){const Q=I[J],K=P[J],fe=Q.el&&(Q.type===Gt||!ci(Q,K)||Q.shapeFlag&70)?f(Q.el):L;C(Q,K,fe,null,z,q,W,ee,!0)}},T=(I,P,L,z,q)=>{if(P!==L){if(P!==He)for(const W in P)!fo(W)&&!(W in L)&&s(I,W,P[W],null,q,z);for(const W in L){if(fo(W))continue;const ee=L[W],J=P[W];ee!==J&&W!=="value"&&s(I,W,J,ee,q,z)}"value"in L&&s(I,"value",P.value,L.value,q)}},R=(I,P,L,z,q,W,ee,J,Q)=>{const K=P.el=I?I.el:a(""),fe=P.anchor=I?I.anchor:a("");let{patchFlag:ne,dynamicChildren:ae,slotScopeIds:me}=P;me&&(J=J?J.concat(me):me),I==null?(r(K,L,z),r(fe,L,z),v(P.children||[],L,fe,q,W,ee,J,Q)):ne>0&&ne&64&&ae&&I.dynamicChildren?(A(I.dynamicChildren,ae,L,q,W,ee,J),(P.key!=null||q&&P===q.subTree)&&Ad(I,P,!0)):he(I,P,L,fe,q,W,ee,J,Q)},E=(I,P,L,z,q,W,ee,J,Q)=>{P.slotScopeIds=J,I==null?P.shapeFlag&512?q.ctx.activate(P,L,z,ee,Q):G(P,L,z,q,W,ee,Q):oe(I,P,Q)},G=(I,P,L,z,q,W,ee)=>{const J=I.component=EA(I,z,q);if(ta(I)&&(J.ctx.renderer=re),TA(J,!1,ee),J.asyncDep){if(q&&q.registerDep(J,se,ee),!I.el){const Q=J.subTree=Ee(jt);x(null,Q,P,L)}}else se(J,I,P,L,q,W,ee)},oe=(I,P,L)=>{const z=P.component=I.component;if(dA(I,P,L))if(z.asyncDep&&!z.asyncResolved){_e(z,P,L);return}else z.next=P,z.update();else P.el=I.el,z.vnode=P},se=(I,P,L,z,q,W,ee)=>{const J=()=>{if(I.isMounted){let{next:ne,bu:ae,u:me,parent:pe,vnode:be}=I;{const ft=gv(I);if(ft){ne&&(ne.el=be.el,_e(I,ne,ee)),ft.asyncDep.then(()=>{I.isUnmounted||J()});return}}let xe=ne,At;ii(I,!1),ne?(ne.el=be.el,_e(I,ne,ee)):ne=be,ae&&mu(ae),(At=ne.props&&ne.props.onVnodeBeforeUpdate)&&Nn(At,pe,ne,be),ii(I,!0);const dt=Au(I),Zt=I.subTree;I.subTree=dt,C(Zt,dt,f(Zt.el),F(Zt),I,q,W),ne.el=dt.el,xe===null&&fA(I,dt.el),me&&Ut(me,q),(At=ne.props&&ne.props.onVnodeUpdated)&&Ut(()=>Nn(At,pe,ne,be),q)}else{let ne;const{el:ae,props:me}=P,{bm:pe,m:be,parent:xe,root:At,type:dt}=I,Zt=ls(P);if(ii(I,!1),pe&&mu(pe),!Zt&&(ne=me&&me.onVnodeBeforeMount)&&Nn(ne,xe,P),ii(I,!0),ae&&Fe){const ft=()=>{I.subTree=Au(I),Fe(ae,I.subTree,I,q,null)};Zt&&dt.__asyncHydrate?dt.__asyncHydrate(ae,I,ft):ft()}else{At.ce&&At.ce._injectChildStyle(dt);const ft=I.subTree=Au(I);C(null,ft,L,z,I,q,W),P.el=ft.el}if(be&&Ut(be,q),!Zt&&(ne=me&&me.onVnodeMounted)){const ft=P;Ut(()=>Nn(ne,xe,ft),q)}(P.shapeFlag&256||xe&&ls(xe.vnode)&&xe.vnode.shapeFlag&256)&&I.a&&Ut(I.a,q),I.isMounted=!0,P=L=z=null}};I.scope.on();const Q=I.effect=new wy(J);I.scope.off();const K=I.update=Q.run.bind(Q),fe=I.job=Q.runIfDirty.bind(Q);fe.i=I,fe.id=I.uid,Q.scheduler=()=>yd(fe),ii(I,!0),K()},_e=(I,P,L)=>{P.component=I;const z=I.vnode.props;I.vnode=P,I.next=null,QI(I,P.props,z,L),ZI(I,P.children,L),Gr(),Wp(I),Qr()},he=(I,P,L,z,q,W,ee,J,Q=!1)=>{const K=I&&I.children,fe=I?I.shapeFlag:0,ne=P.children,{patchFlag:ae,shapeFlag:me}=P;if(ae>0){if(ae&128){Je(K,ne,L,z,q,W,ee,J,Q);return}else if(ae&256){qe(K,ne,L,z,q,W,ee,J,Q);return}}me&8?(fe&16&&Ie(K,q,W),ne!==K&&h(L,ne)):fe&16?me&16?Je(K,ne,L,z,q,W,ee,J,Q):Ie(K,q,W,!0):(fe&8&&h(L,""),me&16&&v(ne,L,z,q,W,ee,J,Q))},qe=(I,P,L,z,q,W,ee,J,Q)=>{I=I||is,P=P||is;const K=I.length,fe=P.length,ne=Math.min(K,fe);let ae;for(ae=0;ae<ne;ae++){const me=P[ae]=Q?Sr(P[ae]):Fn(P[ae]);C(I[ae],me,L,null,q,W,ee,J,Q)}K>fe?Ie(I,q,W,!0,!1,ne):v(P,L,z,q,W,ee,J,Q,ne)},Je=(I,P,L,z,q,W,ee,J,Q)=>{let K=0;const fe=P.length;let ne=I.length-1,ae=fe-1;for(;K<=ne&&K<=ae;){const me=I[K],pe=P[K]=Q?Sr(P[K]):Fn(P[K]);if(ci(me,pe))C(me,pe,L,null,q,W,ee,J,Q);else break;K++}for(;K<=ne&&K<=ae;){const me=I[ne],pe=P[ae]=Q?Sr(P[ae]):Fn(P[ae]);if(ci(me,pe))C(me,pe,L,null,q,W,ee,J,Q);else break;ne--,ae--}if(K>ne){if(K<=ae){const me=ae+1,pe=me<fe?P[me].el:z;for(;K<=ae;)C(null,P[K]=Q?Sr(P[K]):Fn(P[K]),L,pe,q,W,ee,J,Q),K++}}else if(K>ae)for(;K<=ne;)De(I[K],q,W,!0),K++;else{const me=K,pe=K,be=new Map;for(K=pe;K<=ae;K++){const wt=P[K]=Q?Sr(P[K]):Fn(P[K]);wt.key!=null&&be.set(wt.key,K)}let xe,At=0;const dt=ae-pe+1;let Zt=!1,ft=0;const gr=new Array(dt);for(K=0;K<dt;K++)gr[K]=0;for(K=me;K<=ne;K++){const wt=I[K];if(At>=dt){De(wt,q,W,!0);continue}let an;if(wt.key!=null)an=be.get(wt.key);else for(xe=pe;xe<=ae;xe++)if(gr[xe-pe]===0&&ci(wt,P[xe])){an=xe;break}an===void 0?De(wt,q,W,!0):(gr[an-pe]=K+1,an>=ft?ft=an:Zt=!0,C(wt,P[an],L,null,q,W,ee,J,Q),At++)}const Ms=Zt?iA(gr):is;for(xe=Ms.length-1,K=dt-1;K>=0;K--){const wt=pe+K,an=P[wt],ga=wt+1<fe?P[wt+1].el:z;gr[K]===0?C(null,an,L,ga,q,W,ee,J,Q):Zt&&(xe<0||K!==Ms[xe]?st(an,L,ga,2):xe--)}}},st=(I,P,L,z,q=null)=>{const{el:W,type:ee,transition:J,children:Q,shapeFlag:K}=I;if(K&6){st(I.component.subTree,P,L,z);return}if(K&128){I.suspense.move(P,L,z);return}if(K&64){ee.move(I,P,L,re);return}if(ee===Gt){r(W,P,L);for(let ne=0;ne<Q.length;ne++)st(Q[ne],P,L,z);r(I.anchor,P,L);return}if(ee===Ja){O(I,P,L);return}if(z!==2&&K&1&&J)if(z===0)J.beforeEnter(W),r(W,P,L),Ut(()=>J.enter(W),q);else{const{leave:ne,delayLeave:ae,afterLeave:me}=J,pe=()=>r(W,P,L),be=()=>{ne(W,()=>{pe(),me&&me()})};ae?ae(W,pe,be):be()}else r(W,P,L)},De=(I,P,L,z=!1,q=!1)=>{const{type:W,props:ee,ref:J,children:Q,dynamicChildren:K,shapeFlag:fe,patchFlag:ne,dirs:ae,cacheIndex:me}=I;if(ne===-2&&(q=!1),J!=null&&vl(J,null,L,I,!0),me!=null&&(P.renderCache[me]=void 0),fe&256){P.ctx.deactivate(I);return}const pe=fe&1&&ae,be=!ls(I);let xe;if(be&&(xe=ee&&ee.onVnodeBeforeUnmount)&&Nn(xe,P,I),fe&6)ce(I.component,L,z);else{if(fe&128){I.suspense.unmount(L,z);return}pe&&ri(I,null,P,"beforeUnmount"),fe&64?I.type.remove(I,P,L,re,z):K&&!K.hasOnce&&(W!==Gt||ne>0&&ne&64)?Ie(K,P,L,!1,!0):(W===Gt&&ne&384||!q&&fe&16)&&Ie(Q,P,L),z&&de(I)}(be&&(xe=ee&&ee.onVnodeUnmounted)||pe)&&Ut(()=>{xe&&Nn(xe,P,I),pe&&ri(I,null,P,"unmounted")},L)},de=I=>{const{type:P,el:L,anchor:z,transition:q}=I;if(P===Gt){yt(L,z);return}if(P===Ja){D(I);return}const W=()=>{i(L),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(I.shapeFlag&1&&q&&!q.persisted){const{leave:ee,delayLeave:J}=q,Q=()=>ee(L,W);J?J(I.el,W,Q):Q()}else W()},yt=(I,P)=>{let L;for(;I!==P;)L=p(I),i(I),I=L;i(P)},ce=(I,P,L)=>{const{bum:z,scope:q,job:W,subTree:ee,um:J,m:Q,a:K}=I;im(Q),im(K),z&&mu(z),q.stop(),W&&(W.flags|=8,De(ee,I,P,L)),J&&Ut(J,P),Ut(()=>{I.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&I.asyncDep&&!I.asyncResolved&&I.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},Ie=(I,P,L,z=!1,q=!1,W=0)=>{for(let ee=W;ee<I.length;ee++)De(I[ee],P,L,z,q)},F=I=>{if(I.shapeFlag&6)return F(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const P=p(I.anchor||I.el),L=P&&P[jy];return L?p(L):P};let Z=!1;const U=(I,P,L)=>{I==null?P._vnode&&De(P._vnode,null,null,!0):C(P._vnode||null,I,P,null,null,null,L),P._vnode=I,Z||(Z=!0,Wp(),$y(),Z=!1)},re={p:C,um:De,m:st,r:de,mt:G,mc:v,pc:he,pbc:A,n:F,o:t};let Ae,Fe;return e&&([Ae,Fe]=e(re)),{render:U,hydrate:Ae,createApp:WI(U,Ae)}}function Iu({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ii({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function rA(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ad(t,e,n=!1){const r=t.children,i=e.children;if(ge(r)&&ge(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Sr(i[s]),a.el=o.el),!n&&a.patchFlag!==-2&&Ad(o,a)),a.type===pc&&(a.el=o.el)}}function iA(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(i=n[n.length-1],t[i]<u){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<u?s=a+1:o=a;u<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function gv(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:gv(e)}function im(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const sA=Symbol.for("v-scx"),oA=()=>zt(sA);function qF(t,e){return Rd(t,null,e)}function Ve(t,e,n){return Rd(t,e,n)}function Rd(t,e,n=He){const{immediate:r,deep:i,flush:s,once:o}=n,a=lt({},n),c=e&&r||!e&&s!=="post";let u;if(_s){if(s==="sync"){const g=oA();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=In,g.resume=In,g.pause=In,g}}const h=pt;a.call=(g,w,C)=>Sn(g,h,w,C);let f=!1;s==="post"?a.scheduler=g=>{Ut(g,h&&h.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(g,w)=>{w?g():yd(g)}),a.augmentJob=g=>{e&&(g.flags|=4),f&&(g.flags|=2,h&&(g.id=h.uid,g.i=h))};const p=TI(t,e,a);return _s&&(u?u.push(p):c&&p()),p}function aA(t,e,n){const r=this.proxy,i=Ye(t)?t.includes(".")?_v(r,t):()=>r[t]:t.bind(r,r);let s;ve(e)?s=e:(s=e.handler,n=e);const o=na(this),a=Rd(i,s.bind(r),n);return o(),a}function _v(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}const lA=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${mn(e)}Modifiers`]||t[`${Kr(e)}Modifiers`];function cA(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||He;let i=n;const s=e.startsWith("update:"),o=s&&lA(r,e.slice(7));o&&(o.trim&&(i=n.map(h=>Ye(h)?h.trim():h)),o.number&&(i=n.map(M0)));let a,c=r[a=pu(e)]||r[a=pu(mn(e))];!c&&s&&(c=r[a=pu(Kr(e))]),c&&Sn(c,t,6,i);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Sn(u,t,6,i)}}function yv(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!ve(t)){const c=u=>{const h=yv(u,e,!0);h&&(a=!0,lt(o,h))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(Ke(t)&&r.set(t,null),null):(ge(s)?s.forEach(c=>o[c]=null):lt(o,s),Ke(t)&&r.set(t,o),o)}function fc(t,e){return!t||!nc(e)?!1:(e=e.slice(2).replace(/Once$/,""),Le(t,e[0].toLowerCase()+e.slice(1))||Le(t,Kr(e))||Le(t,e))}function Au(t){const{type:e,vnode:n,proxy:r,withProxy:i,propsOptions:[s],slots:o,attrs:a,emit:c,render:u,renderCache:h,props:f,data:p,setupState:g,ctx:w,inheritAttrs:C}=t,S=yl(t);let x,k;try{if(n.shapeFlag&4){const D=i||r,V=D;x=Fn(u.call(V,D,h,f,g,p,w)),k=a}else{const D=e;x=Fn(D.length>1?D(f,{attrs:a,slots:o,emit:c}):D(f,null)),k=e.props?a:uA(a)}}catch(D){yo.length=0,ea(D,t,1),x=Ee(jt)}let O=x;if(k&&C!==!1){const D=Object.keys(k),{shapeFlag:V}=O;D.length&&V&7&&(s&&D.some(ld)&&(k=hA(k,s)),O=Ur(O,k,!1,!0))}return n.dirs&&(O=Ur(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&Ti(O,n.transition),x=O,yl(S),x}const uA=t=>{let e;for(const n in t)(n==="class"||n==="style"||nc(n))&&((e||(e={}))[n]=t[n]);return e},hA=(t,e)=>{const n={};for(const r in t)(!ld(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function dA(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?sm(r,o,u):!!o;if(c&8){const h=e.dynamicProps;for(let f=0;f<h.length;f++){const p=h[f];if(o[p]!==r[p]&&!fc(u,p))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?sm(r,o,u):!0:!!o;return!1}function sm(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!fc(n,s))return!0}return!1}function fA({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const vv=t=>t.__isSuspense;function pA(t,e){e&&e.pendingBranch?ge(t)?e.effects.push(...t):e.effects.push(t):AI(t)}const Gt=Symbol.for("v-fgt"),pc=Symbol.for("v-txt"),jt=Symbol.for("v-cmt"),Ja=Symbol.for("v-stc"),yo=[];let tn=null;function un(t=!1){yo.push(tn=t?null:[])}function mA(){yo.pop(),tn=yo[yo.length-1]||null}let Oo=1;function om(t,e=!1){Oo+=t,t<0&&tn&&e&&(tn.hasOnce=!0)}function wv(t){return t.dynamicChildren=Oo>0?tn||is:null,mA(),Oo>0&&tn&&tn.push(t),t}function BF(t,e,n,r,i,s){return wv(El(t,e,n,r,i,s,!0))}function hn(t,e,n,r,i){return wv(Ee(t,e,n,r,i,!0))}function Do(t){return t?t.__v_isVNode===!0:!1}function ci(t,e){return t.type===e.type&&t.key===e.key}const Ev=({key:t})=>t!=null?t:null,Xa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ye(t)||Qe(t)||ve(t)?{i:mt,r:t,k:e,f:!!n}:t:null);function El(t,e=null,n=null,r=0,i=null,s=t===Gt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ev(e),ref:e&&Xa(e),scopeId:By,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:mt};return a?(Sd(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=Ye(n)?8:16),Oo>0&&!o&&tn&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&tn.push(c),c}const Ee=gA;function gA(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===nv)&&(t=jt),Do(t)){const a=Ur(t,e,!0);return n&&Sd(a,n),Oo>0&&!s&&tn&&(a.shapeFlag&6?tn[tn.indexOf(t)]=a:tn.push(a)),a.patchFlag=-2,a}if(SA(t)&&(t=t.__vccOpts),e){e=_A(e);let{class:a,style:c}=e;a&&!Ye(a)&&(e.class=oc(a)),Ke(c)&&(_d(c)&&!ge(c)&&(c=lt({},c)),e.style=Xo(c))}const o=Ye(t)?1:vv(t)?128:Hy(t)?64:Ke(t)?4:ve(t)?2:0;return El(t,e,n,r,i,o,s,!0)}function _A(t){return t?_d(t)||cv(t)?lt({},t):t:null}function Ur(t,e,n=!1,r=!1){const{props:i,ref:s,patchFlag:o,children:a,transition:c}=t,u=e?yA(i||{},e):i,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Ev(u),ref:e&&e.ref?n&&s?ge(s)?s.concat(Xa(e)):[s,Xa(e)]:Xa(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Gt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ur(t.ssContent),ssFallback:t.ssFallback&&Ur(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Ti(h,c.clone(h)),h}function io(t=" ",e=0){return Ee(pc,null,t,e)}function jF(t,e){const n=Ee(Ja,null,t);return n.staticCount=e,n}function am(t="",e=!1){return e?(un(),hn(jt,null,t)):Ee(jt,null,t)}function Fn(t){return t==null||typeof t=="boolean"?Ee(jt):ge(t)?Ee(Gt,null,t.slice()):Do(t)?Sr(t):Ee(pc,null,String(t))}function Sr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ur(t)}function Sd(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ge(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Sd(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!cv(e)?e._ctx=mt:i===3&&mt&&(mt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ve(e)?(e={default:e,_ctx:mt},n=32):(e=String(e),r&64?(n=16,e=[io(e)]):n=8);t.children=e,t.shapeFlag|=n}function yA(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=oc([e.class,r.class]));else if(i==="style")e.style=Xo([e.style,r.style]);else if(nc(i)){const s=e[i],o=r[i];o&&s!==o&&!(ge(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function Nn(t,e,n,r=null){Sn(t,e,7,[n,r])}const vA=ov();let wA=0;function EA(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||vA,s={uid:wA++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new _y(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hv(r,i),emitsOptions:yv(r,i),emit:null,emitted:null,propsDefaults:He,inheritAttrs:r.inheritAttrs,ctx:He,data:He,props:He,attrs:He,slots:He,refs:He,setupState:He,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=cA.bind(null,s),t.ce&&t.ce(s),s}let pt=null;const Ze=()=>pt||mt;let Tl,gh;{const t=Jo(),e=(n,r)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(r),s=>{i.length>1?i.forEach(o=>o(s)):i[0](s)}};Tl=e("__VUE_INSTANCE_SETTERS__",n=>pt=n),gh=e("__VUE_SSR_SETTERS__",n=>_s=n)}const na=t=>{const e=pt;return Tl(t),t.scope.on(),()=>{t.scope.off(),Tl(e)}},lm=()=>{pt&&pt.scope.off(),Tl(null)};function Tv(t){return t.vnode.shapeFlag&4}let _s=!1;function TA(t,e=!1,n=!1){e&&gh(e);const{props:r,children:i}=t.vnode,s=Tv(t);GI(t,r,s,e),XI(t,i,n);const o=s?bA(t,e):void 0;return e&&gh(!1),o}function bA(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,UI);const{setup:r}=n;if(r){Gr();const i=t.setupContext=r.length>1?AA(t):null,s=na(t),o=Zo(r,t,0,[t.props,i]),a=uy(o);if(Qr(),s(),(a||t.sp)&&!ls(t)&&wd(t),a){if(o.then(lm,lm),e)return o.then(c=>{cm(t,c,e)}).catch(c=>{ea(c,t,0)});t.asyncDep=o}else cm(t,o,e)}else bv(t,e)}function cm(t,e,n){ve(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ke(e)&&(t.setupState=Ly(e)),bv(t,n)}let um;function bv(t,e,n){const r=t.type;if(!t.render){if(!e&&um&&!r.render){const i=r.template||bd(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=lt(lt({isCustomElement:s,delimiters:a},o),c);r.render=um(i,u)}}t.render=r.render||In}{const i=na(t);Gr();try{$I(t)}finally{Qr(),i()}}}const IA={get(t,e){return xt(t,"get",""),t[e]}};function AA(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,IA),slots:t.slots,emit:t.emit,expose:e}}function mc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ly(Di(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in _o)return _o[n](t)},has(e,n){return n in e||n in _o}})):t.proxy}function RA(t,e=!0){return ve(t)?t.displayName||t.name:t.name||e&&t.__name}function SA(t){return ve(t)&&"__vccOpts"in t}const H=(t,e)=>wI(t,e,_s);function Y(t,e,n){const r=arguments.length;return r===2?Ke(e)&&!ge(e)?Do(e)?Ee(t,null,[e]):Ee(t,e):Ee(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Do(n)&&(n=[n]),Ee(t,e,n))}const CA="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _h;const hm=typeof window!="undefined"&&window.trustedTypes;if(hm)try{_h=hm.createPolicy("vue",{createHTML:t=>t})}catch{}const Iv=_h?t=>_h.createHTML(t):t=>t,PA="http://www.w3.org/2000/svg",kA="http://www.w3.org/1998/Math/MathML",Qn=typeof document!="undefined"?document:null,dm=Qn&&Qn.createElement("template"),xA={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e==="svg"?Qn.createElementNS(PA,t):e==="mathml"?Qn.createElementNS(kA,t):n?Qn.createElement(t,{is:n}):Qn.createElement(t);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>Qn.createTextNode(t),createComment:t=>Qn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Qn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{dm.innerHTML=Iv(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=dm.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},wr="transition",Js="animation",ys=Symbol("_vtc"),Av={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Rv=lt({},Gy,Av),OA=t=>(t.displayName="Transition",t.props=Rv,t),No=OA((t,{slots:e})=>Y(PI,Sv(t),e)),si=(t,e=[])=>{ge(t)?t.forEach(n=>n(...e)):t&&t(...e)},fm=t=>t?ge(t)?t.some(e=>e.length>1):t.length>1:!1;function Sv(t){const e={};for(const R in t)R in Av||(e[R]=t[R]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:u=o,appearToClass:h=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,w=DA(i),C=w&&w[0],S=w&&w[1],{onBeforeEnter:x,onEnter:k,onEnterCancelled:O,onLeave:D,onLeaveCancelled:V,onBeforeAppear:j=x,onAppear:b=k,onAppearCancelled:v=O}=e,_=(R,E,G,oe)=>{R._enterCancelled=oe,br(R,E?h:a),br(R,E?u:o),G&&G()},A=(R,E)=>{R._isLeaving=!1,br(R,f),br(R,g),br(R,p),E&&E()},T=R=>(E,G)=>{const oe=R?b:k,se=()=>_(E,R,G);si(oe,[E,se]),pm(()=>{br(E,R?c:s),Ln(E,R?h:a),fm(oe)||mm(E,r,C,se)})};return lt(e,{onBeforeEnter(R){si(x,[R]),Ln(R,s),Ln(R,o)},onBeforeAppear(R){si(j,[R]),Ln(R,c),Ln(R,u)},onEnter:T(!1),onAppear:T(!0),onLeave(R,E){R._isLeaving=!0;const G=()=>A(R,E);Ln(R,f),R._enterCancelled?(Ln(R,p),yh()):(yh(),Ln(R,p)),pm(()=>{!R._isLeaving||(br(R,f),Ln(R,g),fm(D)||mm(R,r,S,G))}),si(D,[R,G])},onEnterCancelled(R){_(R,!1,void 0,!0),si(O,[R])},onAppearCancelled(R){_(R,!0,void 0,!0),si(v,[R])},onLeaveCancelled(R){A(R),si(V,[R])}})}function DA(t){if(t==null)return null;if(Ke(t))return[Ru(t.enter),Ru(t.leave)];{const e=Ru(t);return[e,e]}}function Ru(t){return F0(t)}function Ln(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ys]||(t[ys]=new Set)).add(e)}function br(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[ys];n&&(n.delete(e),n.size||(t[ys]=void 0))}function pm(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let NA=0;function mm(t,e,n,r){const i=t._endId=++NA,s=()=>{i===t._endId&&r()};if(n!=null)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=Cv(t,e);if(!o)return r();const u=o+"end";let h=0;const f=()=>{t.removeEventListener(u,p),s()},p=g=>{g.target===t&&++h>=c&&f()};setTimeout(()=>{h<c&&f()},a+1),t.addEventListener(u,p)}function Cv(t,e){const n=window.getComputedStyle(t),r=w=>(n[w]||"").split(", "),i=r(`${wr}Delay`),s=r(`${wr}Duration`),o=gm(i,s),a=r(`${Js}Delay`),c=r(`${Js}Duration`),u=gm(a,c);let h=null,f=0,p=0;e===wr?o>0&&(h=wr,f=o,p=s.length):e===Js?u>0&&(h=Js,f=u,p=c.length):(f=Math.max(o,u),h=f>0?o>u?wr:Js:null,p=h?h===wr?s.length:c.length:0);const g=h===wr&&/\b(transform|all)(,|$)/.test(r(`${wr}Property`).toString());return{type:h,timeout:f,propCount:p,hasTransform:g}}function gm(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>_m(n)+_m(t[r])))}function _m(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function yh(){return document.body.offsetHeight}function LA(t,e,n){const r=t[ys];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ym=Symbol("_vod"),VA=Symbol("_vsh"),MA=Symbol(""),FA=/(^|;)\s*display\s*:/;function UA(t,e,n){const r=t.style,i=Ye(n);let s=!1;if(n&&!i){if(e)if(Ye(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Za(r,a,"")}else for(const o in e)n[o]==null&&Za(r,o,"");for(const o in n)o==="display"&&(s=!0),Za(r,o,n[o])}else if(i){if(e!==n){const o=r[MA];o&&(n+=";"+o),r.cssText=n,s=FA.test(n)}}else e&&t.removeAttribute("style");ym in t&&(t[ym]=s?r.display:"",t[VA]&&(r.display="none"))}const vm=/\s*!important$/;function Za(t,e,n){if(ge(n))n.forEach(r=>Za(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=$A(t,e);vm.test(n)?t.setProperty(Kr(r),n.replace(vm,""),"important"):t[r]=n}}const wm=["Webkit","Moz","ms"],Su={};function $A(t,e){const n=Su[e];if(n)return n;let r=mn(e);if(r!=="filter"&&r in t)return Su[e]=r;r=sc(r);for(let i=0;i<wm.length;i++){const s=wm[i]+r;if(s in t)return Su[e]=s}return e}const Em="http://www.w3.org/1999/xlink";function Tm(t,e,n,r,i,s=H0(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Em,e.slice(6,e.length)):t.setAttributeNS(Em,e,n):n==null||s&&!py(n)?t.removeAttribute(e):t.setAttribute(e,s?"":hr(n)?String(n):n)}function bm(t,e,n,r,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Iv(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=py(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function qA(t,e,n,r){t.addEventListener(e,n,r)}function BA(t,e,n,r){t.removeEventListener(e,n,r)}const Im=Symbol("_vei");function jA(t,e,n,r,i=null){const s=t[Im]||(t[Im]={}),o=s[e];if(r&&o)o.value=r;else{const[a,c]=HA(e);if(r){const u=s[e]=KA(r,i);qA(t,a,u,c)}else o&&(BA(t,a,o,c),s[e]=void 0)}}const Am=/(?:Once|Passive|Capture)$/;function HA(t){let e;if(Am.test(t)){e={};let r;for(;r=t.match(Am);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Kr(t.slice(2)),e]}let Cu=0;const zA=Promise.resolve(),WA=()=>Cu||(zA.then(()=>Cu=0),Cu=Date.now());function KA(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Sn(GA(r,n.value),e,5,[r])};return n.value=t,n.attached=WA(),n}function GA(t,e){if(ge(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Rm=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,QA=(t,e,n,r,i,s)=>{const o=i==="svg";e==="class"?LA(t,r,o):e==="style"?UA(t,n,r):nc(e)?ld(e)||jA(t,e,n,r,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):YA(t,e,r,o))?(bm(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Tm(t,e,r,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ye(r))?bm(t,mn(e),r,s,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Tm(t,e,r,o))};function YA(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Rm(e)&&ve(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Rm(e)&&Ye(n)?!1:e in t}const Pv=new WeakMap,kv=new WeakMap,bl=Symbol("_moveCb"),Sm=Symbol("_enterCb"),JA=t=>(delete t.props.mode,t),XA=JA({name:"TransitionGroup",props:lt({},Rv,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Ze(),r=Ky();let i,s;return Zy(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!rR(i[0].el,n.vnode.el,o))return;i.forEach(eR),i.forEach(tR);const a=i.filter(nR);yh(),a.forEach(c=>{const u=c.el,h=u.style;Ln(u,o),h.transform=h.webkitTransform=h.transitionDuration="";const f=u[bl]=p=>{p&&p.target!==u||(!p||/transform$/.test(p.propertyName))&&(u.removeEventListener("transitionend",f),u[bl]=null,br(u,o))};u.addEventListener("transitionend",f)})}),()=>{const o=Pe(t),a=Sv(o);let c=o.tag||Gt;if(i=[],s)for(let u=0;u<s.length;u++){const h=s[u];h.el&&h.el instanceof Element&&(i.push(h),Ti(h,xo(h,a,r,n)),Pv.set(h,h.el.getBoundingClientRect()))}s=e.default?vd(e.default()):[];for(let u=0;u<s.length;u++){const h=s[u];h.key!=null&&Ti(h,xo(h,a,r,n))}return Ee(c,null,s)}}}),ZA=XA;function eR(t){const e=t.el;e[bl]&&e[bl](),e[Sm]&&e[Sm]()}function tR(t){kv.set(t,t.el.getBoundingClientRect())}function nR(t){const e=Pv.get(t),n=kv.get(t),r=e.left-n.left,i=e.top-n.top;if(r||i){const s=t.el.style;return s.transform=s.webkitTransform=`translate(${r}px,${i}px)`,s.transitionDuration="0s",t}}function rR(t,e,n){const r=t.cloneNode(),i=t[ys];i&&i.forEach(a=>{a.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),n.split(/\s+/).forEach(a=>a&&r.classList.add(a)),r.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(r);const{hasTransform:o}=Cv(r);return s.removeChild(r),o}const iR=["ctrl","shift","alt","meta"],sR={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>iR.some(n=>t[`${n}Key`]&&!e.includes(n))},HF=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(i,...s)=>{for(let o=0;o<e.length;o++){const a=sR[e[o]];if(a&&a(i,e))return}return t(i,...s)})},oR={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},zF=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=i=>{if(!("key"in i))return;const s=Kr(i.key);if(e.some(o=>o===s||oR[o]===s))return t(i)})},aR=lt({patchProp:QA},xA);let Cm;function lR(){return Cm||(Cm=tA(aR))}const xv=(...t)=>{const e=lR().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=uR(r);if(!i)return;const s=e._component;!ve(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,cR(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function cR(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function uR(t){return Ye(t)?document.querySelector(t):t}function gc(t,e,n,r){return Object.defineProperty(t,e,{get:n,set:r,enumerable:!0}),t}const or=Re(!1);let _c;function hR(t,e){const n=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(t)||/(opr)[\/]([\w.]+)/.exec(t)||/(vivaldi)[\/]([\w.]+)/.exec(t)||/(chrome|crios)[\/]([\w.]+)/.exec(t)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t)||/(firefox|fxios)[\/]([\w.]+)/.exec(t)||/(webkit)[\/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(t)||[];return{browser:n[5]||n[3]||n[1]||"",version:n[2]||n[4]||"0",versionNumber:n[4]||n[2]||"0",platform:e[0]||""}}function dR(t){return/(ipad)/.exec(t)||/(ipod)/.exec(t)||/(windows phone)/.exec(t)||/(iphone)/.exec(t)||/(kindle)/.exec(t)||/(silk)/.exec(t)||/(android)/.exec(t)||/(win)/.exec(t)||/(mac)/.exec(t)||/(linux)/.exec(t)||/(cros)/.exec(t)||/(playbook)/.exec(t)||/(bb)/.exec(t)||/(blackberry)/.exec(t)||[]}const Ov="ontouchstart"in window||window.navigator.maxTouchPoints>0;function fR(t){_c={is:{...t}},delete t.mac,delete t.desktop;const e=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(t,{mobile:!0,ios:!0,platform:e,[e]:!0})}function pR(t){const e=t.toLowerCase(),n=dR(e),r=hR(e,n),i={};r.browser&&(i[r.browser]=!0,i.version=r.version,i.versionNumber=parseInt(r.versionNumber,10)),r.platform&&(i[r.platform]=!0);const s=i.android||i.ios||i.bb||i.blackberry||i.ipad||i.iphone||i.ipod||i.kindle||i.playbook||i.silk||i["windows phone"];return s===!0||e.indexOf("mobile")>-1?(i.mobile=!0,i.edga||i.edgios?(i.edge=!0,r.browser="edge"):i.crios?(i.chrome=!0,r.browser="chrome"):i.fxios&&(i.firefox=!0,r.browser="firefox")):i.desktop=!0,(i.ipod||i.ipad||i.iphone)&&(i.ios=!0),i["windows phone"]&&(i.winphone=!0,delete i["windows phone"]),(i.chrome||i.opr||i.safari||i.vivaldi||i.mobile===!0&&i.ios!==!0&&s!==!0)&&(i.webkit=!0),i.edg&&(r.browser="edgechromium",i.edgeChromium=!0),(i.safari&&i.blackberry||i.bb)&&(r.browser="blackberry",i.blackberry=!0),i.safari&&i.playbook&&(r.browser="playbook",i.playbook=!0),i.opr&&(r.browser="opera",i.opera=!0),i.safari&&i.android&&(r.browser="android",i.android=!0),i.safari&&i.kindle&&(r.browser="kindle",i.kindle=!0),i.safari&&i.silk&&(r.browser="silk",i.silk=!0),i.vivaldi&&(r.browser="vivaldi",i.vivaldi=!0),i.name=r.browser,i.platform=r.platform,e.indexOf("electron")>-1?i.electron=!0:document.location.href.indexOf("-extension://")>-1?i.bex=!0:(window.Capacitor!==void 0?(i.capacitor=!0,i.nativeMobile=!0,i.nativeMobileWrapper="capacitor"):(window._cordovaNative!==void 0||window.cordova!==void 0)&&(i.cordova=!0,i.nativeMobile=!0,i.nativeMobileWrapper="cordova"),Ov===!0&&i.mac===!0&&(i.desktop===!0&&i.safari===!0||i.nativeMobile===!0&&i.android!==!0&&i.ios!==!0&&i.ipad!==!0)&&fR(i)),i}const Pm=navigator.userAgent||navigator.vendor||window.opera,mR={has:{touch:!1,webStorage:!1},within:{iframe:!1}},at={userAgent:Pm,is:pR(Pm),has:{touch:Ov},within:{iframe:window.self!==window.top}},Il={install(t){const{$q:e}=t;or.value===!0?(t.onSSRHydrated.push(()=>{Object.assign(e.platform,at),or.value=!1,_c=void 0}),e.platform=dn(this)):e.platform=this}};{let t;gc(at.has,"webStorage",()=>{if(t!==void 0)return t;try{if(window.localStorage)return t=!0,!0}catch{}return t=!1,!1}),at.is.ios===!0&&window.navigator.vendor.toLowerCase().indexOf("apple"),or.value===!0?Object.assign(Il,at,_c,mR):Object.assign(Il,at)}var yc=(t,e)=>{const n=dn(t);for(const r in t)gc(e,r,()=>n[r],i=>{n[r]=i});return e};const ut={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const t=Object.defineProperty({},"passive",{get(){Object.assign(ut,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,t),window.removeEventListener("qtest",null,t)}catch{}function bi(){}function WF(t){return t.button===0}function Dv(t){return t.touches&&t.touches[0]?t=t.touches[0]:t.changedTouches&&t.changedTouches[0]?t=t.changedTouches[0]:t.targetTouches&&t.targetTouches[0]&&(t=t.targetTouches[0]),{top:t.clientY,left:t.clientX}}function gR(t){if(t.path)return t.path;if(t.composedPath)return t.composedPath();const e=[];let n=t.target;for(;n;){if(e.push(n),n.tagName==="HTML")return e.push(document),e.push(window),e;n=n.parentElement}}function Nv(t){t.stopPropagation()}function Lo(t){t.cancelable!==!1&&t.preventDefault()}function Tn(t){t.cancelable!==!1&&t.preventDefault(),t.stopPropagation()}function KF(t,e){if(t===void 0||e===!0&&t.__dragPrevented===!0)return;const n=e===!0?r=>{r.__dragPrevented=!0,r.addEventListener("dragstart",Lo,ut.notPassiveCapture)}:r=>{delete r.__dragPrevented,r.removeEventListener("dragstart",Lo,ut.notPassiveCapture)};t.querySelectorAll("a, img").forEach(n)}function Vo(t,e,n){const r=`__q_${e}_evt`;t[r]=t[r]!==void 0?t[r].concat(n):n,n.forEach(i=>{i[0].addEventListener(i[1],t[i[2]],ut[i[3]])})}function Al(t,e){const n=`__q_${e}_evt`;t[n]!==void 0&&(t[n].forEach(r=>{r[0].removeEventListener(r[1],t[r[2]],ut[r[3]])}),t[n]=void 0)}function _R(t,e=250,n){let r=null;function i(){const s=arguments,o=()=>{r=null,n!==!0&&t.apply(this,s)};r!==null?clearTimeout(r):n===!0&&t.apply(this,s),r=setTimeout(o,e)}return i.cancel=()=>{r!==null&&clearTimeout(r)},i}const Pu=["sm","md","lg","xl"],{passive:km}=ut;var yR=yc({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:bi,setDebounce:bi,install({$q:t,onSSRHydrated:e}){if(t.screen=this,this.__installed===!0){t.config.screen!==void 0&&(t.config.screen.bodyClasses===!1?document.body.classList.remove(`screen--${this.name}`):this.__update(!0));return}const{visualViewport:n}=window,r=n||window,i=document.scrollingElement||document.documentElement,s=n===void 0||at.is.mobile===!0?()=>[Math.max(window.innerWidth,i.clientWidth),Math.max(window.innerHeight,i.clientHeight)]:()=>[n.width*n.scale+window.innerWidth-i.clientWidth,n.height*n.scale+window.innerHeight-i.clientHeight],o=t.config.screen!==void 0&&t.config.screen.bodyClasses===!0;this.__update=f=>{const[p,g]=s();if(g!==this.height&&(this.height=g),p!==this.width)this.width=p;else if(f!==!0)return;let w=this.sizes;this.gt.xs=p>=w.sm,this.gt.sm=p>=w.md,this.gt.md=p>=w.lg,this.gt.lg=p>=w.xl,this.lt.sm=p<w.sm,this.lt.md=p<w.md,this.lt.lg=p<w.lg,this.lt.xl=p<w.xl,this.xs=this.lt.sm,this.sm=this.gt.xs===!0&&this.lt.md===!0,this.md=this.gt.sm===!0&&this.lt.lg===!0,this.lg=this.gt.md===!0&&this.lt.xl===!0,this.xl=this.gt.lg,w=this.xs===!0&&"xs"||this.sm===!0&&"sm"||this.md===!0&&"md"||this.lg===!0&&"lg"||"xl",w!==this.name&&(o===!0&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${w}`)),this.name=w)};let a,c={},u=16;this.setSizes=f=>{Pu.forEach(p=>{f[p]!==void 0&&(c[p]=f[p])})},this.setDebounce=f=>{u=f};const h=()=>{const f=getComputedStyle(document.body);f.getPropertyValue("--q-size-sm")&&Pu.forEach(p=>{this.sizes[p]=parseInt(f.getPropertyValue(`--q-size-${p}`),10)}),this.setSizes=p=>{Pu.forEach(g=>{p[g]&&(this.sizes[g]=p[g])}),this.__update(!0)},this.setDebounce=p=>{a!==void 0&&r.removeEventListener("resize",a,km),a=p>0?_R(this.__update,p):this.__update,r.addEventListener("resize",a,km)},this.setDebounce(u),Object.keys(c).length!==0?(this.setSizes(c),c=void 0):this.__update(),o===!0&&this.name==="xs"&&document.body.classList.add("screen--xs")};or.value===!0?e.push(h):h()}});const Pt=yc({isActive:!1,mode:!1},{__media:void 0,set(t){Pt.mode=t,t==="auto"?(Pt.__media===void 0&&(Pt.__media=window.matchMedia("(prefers-color-scheme: dark)"),Pt.__updateMedia=()=>{Pt.set("auto")},Pt.__media.addListener(Pt.__updateMedia)),t=Pt.__media.matches):Pt.__media!==void 0&&(Pt.__media.removeListener(Pt.__updateMedia),Pt.__media=void 0),Pt.isActive=t===!0,document.body.classList.remove(`body--${t===!0?"light":"dark"}`),document.body.classList.add(`body--${t===!0?"dark":"light"}`)},toggle(){Pt.set(Pt.isActive===!1)},install({$q:t,onSSRHydrated:e,ssrContext:n}){const{dark:r}=t.config;if(t.dark=this,this.__installed===!0&&r===void 0)return;this.isActive=r===!0;const i=r!==void 0?r:!1;if(or.value===!0){const s=a=>{this.__fromSSR=a},o=this.set;this.set=s,s(i),e.push(()=>{this.set=o,this.set(this.__fromSSR)})}else this.set(i)}}),Lv=()=>!0;function vR(t){return typeof t=="string"&&t!==""&&t!=="/"&&t!=="#/"}function wR(t){return t.startsWith("#")===!0&&(t=t.substring(1)),t.startsWith("/")===!1&&(t="/"+t),t.endsWith("/")===!0&&(t=t.substring(0,t.length-1)),"#"+t}function ER(t){if(t.backButtonExit===!1)return()=>!1;if(t.backButtonExit==="*")return Lv;const e=["#/"];return Array.isArray(t.backButtonExit)===!0&&e.push(...t.backButtonExit.filter(vR).map(wR)),()=>e.includes(window.location.hash)}var vh={__history:[],add:bi,remove:bi,install({$q:t}){if(this.__installed===!0)return;const{cordova:e,capacitor:n}=at.is;if(e!==!0&&n!==!0)return;const r=t.config[e===!0?"cordova":"capacitor"];if(r!==void 0&&r.backButton===!1||n===!0&&(window.Capacitor===void 0||window.Capacitor.Plugins.App===void 0))return;this.add=o=>{o.condition===void 0&&(o.condition=Lv),this.__history.push(o)},this.remove=o=>{const a=this.__history.indexOf(o);a>=0&&this.__history.splice(a,1)};const i=ER(Object.assign({backButtonExit:!0},r)),s=()=>{if(this.__history.length){const o=this.__history[this.__history.length-1];o.condition()===!0&&(this.__history.pop(),o.handler())}else i()===!0?navigator.app.exitApp():window.history.back()};e===!0?document.addEventListener("deviceready",()=>{document.addEventListener("backbutton",s,!1)}):window.Capacitor.Plugins.App.addListener("backButton",s)}},xm={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh",expand:t=>t?`Expand "${t}"`:"Expand",collapse:t=>t?`Collapse "${t}"`:"Collapse"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days"},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:t=>t===1?"1 record selected.":(t===0?"No":t)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(t,e,n)=>t+"-"+e+" of "+n,columns:"Columns"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function Om(){const t=Array.isArray(navigator.languages)===!0&&navigator.languages.length!==0?navigator.languages[0]:navigator.language;if(typeof t=="string")return t.split(/[-_]/).map((e,n)=>n===0?e.toLowerCase():n>1||e.length<4?e.toUpperCase():e[0].toUpperCase()+e.slice(1).toLowerCase()).join("-")}const wn=yc({__langPack:{}},{getLocale:Om,set(t=xm,e){const n={...t,rtl:t.rtl===!0,getLocale:Om};{if(n.set=wn.set,wn.__langConfig===void 0||wn.__langConfig.noHtmlAttrs!==!0){const r=document.documentElement;r.setAttribute("dir",n.rtl===!0?"rtl":"ltr"),r.setAttribute("lang",n.isoName)}Object.assign(wn.__langPack,n),wn.props=n,wn.isoName=n.isoName,wn.nativeName=n.nativeName}},install({$q:t,lang:e,ssrContext:n}){t.lang=wn.__langPack,wn.__langConfig=t.config.lang,this.__installed===!0?e!==void 0&&this.set(e):this.set(e||xm)}});function TR(t,e,n=document.body){if(typeof t!="string")throw new TypeError("Expected a string as propName");if(typeof e!="string")throw new TypeError("Expected a string as value");if(!(n instanceof Element))throw new TypeError("Expected a DOM element");n.style.setProperty(`--q-${t}`,e)}let Vv=!1;function bR(t){Vv=t.isComposing===!0}function IR(t){return Vv===!0||t!==Object(t)||t.isComposing===!0||t.qKeyEvent===!0}function Ii(t,e){return IR(t)===!0?!1:[].concat(e).includes(t.keyCode)}function Mv(t){if(t.ios===!0)return"ios";if(t.android===!0)return"android"}function AR({is:t,has:e,within:n},r){const i=[t.desktop===!0?"desktop":"mobile",`${e.touch===!1?"no-":""}touch`];if(t.mobile===!0){const s=Mv(t);s!==void 0&&i.push("platform-"+s)}if(t.nativeMobile===!0){const s=t.nativeMobileWrapper;i.push(s),i.push("native-mobile"),t.ios===!0&&(r[s]===void 0||r[s].iosStatusBarPadding!==!1)&&i.push("q-ios-padding")}else t.electron===!0?i.push("electron"):t.bex===!0&&i.push("bex");return n.iframe===!0&&i.push("within-iframe"),i}function RR(){const{is:t}=at,e=document.body.className,n=new Set(e.replace(/ {2}/g," ").split(" "));if(_c!==void 0)n.delete("desktop"),n.add("platform-ios"),n.add("mobile");else if(t.nativeMobile!==!0&&t.electron!==!0&&t.bex!==!0){if(t.desktop===!0)n.delete("mobile"),n.delete("platform-ios"),n.delete("platform-android"),n.add("desktop");else if(t.mobile===!0){n.delete("desktop"),n.add("mobile");const i=Mv(t);i!==void 0?(n.add(`platform-${i}`),n.delete(`platform-${i==="ios"?"android":"ios"}`)):(n.delete("platform-ios"),n.delete("platform-android"))}}at.has.touch===!0&&(n.delete("no-touch"),n.add("touch")),at.within.iframe===!0&&n.add("within-iframe");const r=Array.from(n).join(" ");e!==r&&(document.body.className=r)}function SR(t){for(const e in t)TR(e,t[e])}var CR={install(t){if(this.__installed!==!0){if(or.value===!0)RR();else{const{$q:e}=t;e.config.brand!==void 0&&SR(e.config.brand);const n=AR(at,e.config);document.body.classList.add.apply(document.body.classList,n)}at.is.ios===!0&&document.body.addEventListener("touchstart",bi),window.addEventListener("keydown",bR,!0)}}},PR={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}};const Rl=yc({iconMapFn:null,__icons:{}},{set(t,e){const n={...t,rtl:t.rtl===!0};n.set=Rl.set,Object.assign(Rl.__icons,n)},install({$q:t,iconSet:e,ssrContext:n}){t.config.iconMapFn!==void 0&&(this.iconMapFn=t.config.iconMapFn),t.iconSet=this.__icons,gc(t,"iconMapFn",()=>this.iconMapFn,r=>{this.iconMapFn=r}),this.__installed===!0?e!==void 0&&this.set(e):this.set(e||PR)}}),Fv="_q_",Cd="_q_l_",kR="_q_pc_",GF="_q_fo_",QF="_q_tabs_",us=()=>{},Sl={};let Uv=!1;function xR(){Uv=!0}function ku(t,e){if(t===e)return!0;if(t!==null&&e!==null&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;let n,r;if(t.constructor===Array){if(n=t.length,n!==e.length)return!1;for(r=n;r--!==0;)if(ku(t[r],e[r])!==!0)return!1;return!0}if(t.constructor===Map){if(t.size!==e.size)return!1;let s=t.entries();for(r=s.next();r.done!==!0;){if(e.has(r.value[0])!==!0)return!1;r=s.next()}for(s=t.entries(),r=s.next();r.done!==!0;){if(ku(r.value[1],e.get(r.value[0]))!==!0)return!1;r=s.next()}return!0}if(t.constructor===Set){if(t.size!==e.size)return!1;const s=t.entries();for(r=s.next();r.done!==!0;){if(e.has(r.value[0])!==!0)return!1;r=s.next()}return!0}if(t.buffer!=null&&t.buffer.constructor===ArrayBuffer){if(n=t.length,n!==e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();const i=Object.keys(t).filter(s=>t[s]!==void 0);if(n=i.length,n!==Object.keys(e).filter(s=>e[s]!==void 0).length)return!1;for(r=n;r--!==0;){const s=i[r];if(ku(t[s],e[s])!==!0)return!1}return!0}return t!==t&&e!==e}function Mo(t){return t!==null&&typeof t=="object"&&Array.isArray(t)!==!0}function YF(t){return Object.prototype.toString.call(t)==="[object Date]"}const Dm=[Il,CR,Pt,yR,vh,wn,Rl];function OR(t,e){const n=xv(t);n.config.globalProperties=e.config.globalProperties;const{reload:r,...i}=e._context;return Object.assign(n._context,i),n}function Nm(t,e){e.forEach(n=>{n.install(t),n.__installed=!0})}function DR(t,e,n){t.config.globalProperties.$q=n.$q,t.provide(Fv,n.$q),Nm(n,Dm),e.components!==void 0&&Object.values(e.components).forEach(r=>{Mo(r)===!0&&r.name!==void 0&&t.component(r.name,r)}),e.directives!==void 0&&Object.values(e.directives).forEach(r=>{Mo(r)===!0&&r.name!==void 0&&t.directive(r.name,r)}),e.plugins!==void 0&&Nm(n,Object.values(e.plugins).filter(r=>typeof r.install=="function"&&Dm.includes(r)===!1)),or.value===!0&&(n.$q.onSSRHydrated=()=>{n.onSSRHydrated.forEach(r=>{r()}),n.$q.onSSRHydrated=()=>{}})}var NR=function(t,e={}){const n={version:"2.12.0"};Uv===!1?(e.config!==void 0&&Object.assign(Sl,e.config),n.config={...Sl},xR()):n.config=e.config||{},DR(t,e,{parentApp:t,$q:n,lang:e.lang,iconSet:e.iconSet,onSSRHydrated:[]})},LR={version:"2.12.0",install:NR,lang:wn,iconSet:Rl};const VR={__name:"App",setup(t){return ev(e=>{console.log("### onErrorCaptured ###"),console.log("err: ",e)}),(e,n)=>{const r=tv("router-view");return un(),hn(r)}}};function JF(t){return t}var MR=!1;/*!
  * pinia v2.1.3
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let $v;const vc=t=>$v=t,qv=Symbol();function wh(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var vo;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(vo||(vo={}));function FR(){const t=yy(!0),e=t.run(()=>Re({}));let n=[],r=[];const i=Di({install(s){vc(i),i._a=s,s.provide(qv,i),s.config.globalProperties.$pinia=i,r.forEach(o=>n.push(o)),r=[]},use(s){return!this._a&&!MR?r.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Bv=()=>{};function Lm(t,e,n,r=Bv){t.push(e);const i=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),r())};return!n&&hd()&&vy(i),i}function zi(t,...e){t.slice().forEach(n=>{n(...e)})}const UR=t=>t();function Eh(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],i=t[n];wh(i)&&wh(r)&&t.hasOwnProperty(n)&&!Qe(r)&&!rr(r)?t[n]=Eh(i,r):t[n]=r}return t}const $R=Symbol();function qR(t){return!wh(t)||!t.hasOwnProperty($R)}const{assign:Ir}=Object;function BR(t){return!!(Qe(t)&&t.effect)}function jR(t,e,n,r){const{state:i,actions:s,getters:o}=e,a=n.state.value[t];let c;function u(){a||(n.state.value[t]=i?i():{});const h=gI(n.state.value[t]);return Ir(h,s,Object.keys(o||{}).reduce((f,p)=>(f[p]=Di(H(()=>{vc(n);const g=n._s.get(t);return o[p].call(g,g)})),f),{}))}return c=jv(t,u,e,n,r,!0),c}function jv(t,e,n={},r,i,s){let o;const a=Ir({actions:{}},n),c={deep:!0};let u,h,f=[],p=[],g;const w=r.state.value[t];!s&&!w&&(r.state.value[t]={}),Re({});let C;function S(v){let _;u=h=!1,typeof v=="function"?(v(r.state.value[t]),_={type:vo.patchFunction,storeId:t,events:g}):(Eh(r.state.value[t],v),_={type:vo.patchObject,payload:v,storeId:t,events:g});const A=C=Symbol();on().then(()=>{C===A&&(u=!0)}),h=!0,zi(f,_,r.state.value[t])}const x=s?function(){const{state:_}=n,A=_?_():{};this.$patch(T=>{Ir(T,A)})}:Bv;function k(){o.stop(),f=[],p=[],r._s.delete(t)}function O(v,_){return function(){vc(r);const A=Array.from(arguments),T=[],R=[];function E(se){T.push(se)}function G(se){R.push(se)}zi(p,{args:A,name:v,store:V,after:E,onError:G});let oe;try{oe=_.apply(this&&this.$id===t?this:V,A)}catch(se){throw zi(R,se),se}return oe instanceof Promise?oe.then(se=>(zi(T,se),se)).catch(se=>(zi(R,se),Promise.reject(se))):(zi(T,oe),oe)}}const D={_p:r,$id:t,$onAction:Lm.bind(null,p),$patch:S,$reset:x,$subscribe(v,_={}){const A=Lm(f,v,_.detached,()=>T()),T=o.run(()=>Ve(()=>r.state.value[t],R=>{(_.flush==="sync"?h:u)&&v({storeId:t,type:vo.direct,events:g},R)},Ir({},c,_)));return A},$dispose:k},V=dn(D);r._s.set(t,V);const j=r._a&&r._a.runWithContext||UR,b=r._e.run(()=>(o=yy(),j(()=>o.run(e))));for(const v in b){const _=b[v];if(Qe(_)&&!BR(_)||rr(_))s||(w&&qR(_)&&(Qe(_)?_.value=w[v]:Eh(_,w[v])),r.state.value[t][v]=_);else if(typeof _=="function"){const A=O(v,_);b[v]=A,a.actions[v]=_}}return Ir(V,b),Ir(Pe(V),b),Object.defineProperty(V,"$state",{get:()=>r.state.value[t],set:v=>{S(_=>{Ir(_,v)})}}),r._p.forEach(v=>{Ir(V,o.run(()=>v({store:V,app:r._a,pinia:r,options:a})))}),w&&s&&n.hydrate&&n.hydrate(V.$state,w),u=!0,h=!0,V}function HR(t,e,n){let r,i;const s=typeof e=="function";typeof t=="string"?(r=t,i=s?n:e):(i=t,r=t.id);function o(a,c){const u=KI();return a=a||(u?zt(qv,null):null),a&&vc(a),a=$v,a._s.has(r)||(s?jv(r,e,i,a):jR(r,i,a)),a._s.get(r)}return o.$id=r,o}function XF(t){{t=Pe(t);const e={};for(const n in t){const r=t[n];(Qe(r)||rr(r))&&(e[n]=Vy(t,n))}return e}}var xu=()=>FR();const Vm=[{path:"/",name:"/",component:()=>je(()=>import("./index.7905fc01.js"),["assets/index.7905fc01.js","assets/index.cf7e0c69.css","assets/QPage.4a7353bb.js","assets/post.de84d442.js","assets/PostList.f4f66fd0.js","assets/PostItem.876d1c7d.js","assets/PostIcon.08c4412d.js","assets/QForm.9ba2c0df.js","assets/PostForm.b81cfeb1.js","assets/PostForm.07fb72be.css","assets/QItemLabel.f46cb4a1.js","assets/format.c860d4da.js","assets/QCardActions.92b96a6f.js","assets/validate-rules.ce7e6efc.js","assets/index.8460fa06.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/_admin",name:"/_admin",component:()=>je(()=>import("./_admin.30db0cc0.js"),["assets/_admin.30db0cc0.js","assets/route-block.1e6a8648.js","assets/plugin-vue_export-helper.21dcd24c.js"]),meta:{layout:"admin"}},{path:"/:path(.*)",name:"/[...path]",component:()=>je(()=>import("./_...path_.04e48ff1.js"),["assets/_...path_.04e48ff1.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/about",name:"/about",component:()=>je(()=>import("./about.40061aa0.js"),["assets/about.40061aa0.js","assets/route-block.1e6a8648.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/admin",children:[{path:"",name:"/admin/",component:()=>je(()=>import("./index.a934adf9.js"),["assets/index.a934adf9.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"dashboard",name:"/admin/dashboard",component:()=>je(()=>import("./dashboard.131e12fe.js"),["assets/dashboard.131e12fe.js","assets/plugin-vue_export-helper.21dcd24c.js"])}]},{path:"/docs",children:[{path:"",name:"/docs/",component:()=>je(()=>import("./index.5b039e16.js"),["assets/index.5b039e16.js","assets/plugin-vue_export-helper.21dcd24c.js"])}]},{path:"/ErrorNotFound",name:"/ErrorNotFound",component:()=>je(()=>import("./ErrorNotFound.8d1c8f66.js"),["assets/ErrorNotFound.8d1c8f66.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/home",name:"home-page",component:()=>je(()=>import("./home.43577d51.js"),["assets/home.43577d51.js","assets/QPage.4a7353bb.js","assets/route-block.1e6a8648.js","assets/plugin-vue_export-helper.21dcd24c.js"]),meta:{requiresAuth:!0,width:"600px"}},{path:"/IndexPage",name:"/IndexPage",component:()=>je(()=>import("./IndexPage.c8e2b027.js"),["assets/IndexPage.c8e2b027.js","assets/QPage.4a7353bb.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/mypage",name:"/mypage",component:()=>je(()=>import("./mypage.790e9344.js"),["assets/mypage.790e9344.js","assets/QPage.4a7353bb.js","assets/BaseCard.f7886897.js","assets/route-block.1e6a8648.js"]),children:[{path:"bookmark",name:"/mypage/bookmark",component:()=>je(()=>import("./bookmark.d8b675a4.js"),["assets/bookmark.d8b675a4.js","assets/post.de84d442.js","assets/PostList.f4f66fd0.js","assets/PostItem.876d1c7d.js","assets/PostIcon.08c4412d.js"])},{path:"password",name:"/mypage/password",component:()=>je(()=>import("./password.b9506da7.js"),["assets/password.b9506da7.js","assets/QForm.9ba2c0df.js","assets/QCardActions.92b96a6f.js","assets/BaseCard.f7886897.js","assets/error-message.d08c6aae.js"])},{path:"profile",name:"/mypage/profile",component:()=>je(()=>import("./profile.70f25bc3.js"),["assets/profile.70f25bc3.js","assets/QForm.9ba2c0df.js","assets/QCardActions.92b96a6f.js","assets/BaseCard.f7886897.js","assets/error-message.d08c6aae.js"])}],meta:{requiresAuth:!0}},{path:"/posts",children:[{path:":id",children:[{path:"",name:"/posts/[id]/",component:()=>je(()=>import("./index.4c752adb.js"),["assets/index.4c752adb.js","assets/index.4a640d70.css","assets/QPage.4a7353bb.js","assets/format.c860d4da.js","assets/post.de84d442.js","assets/PostIcon.08c4412d.js","assets/BaseCard.f7886897.js","assets/index.8460fa06.js","assets/QForm.9ba2c0df.js","assets/validate-rules.ce7e6efc.js","assets/route-block.1e6a8648.js"]),meta:{width:"800px"}},{path:"edit",name:"/posts/[id]/edit",component:()=>je(()=>import("./edit.279eae70.js"),["assets/edit.279eae70.js","assets/QPage.4a7353bb.js","assets/post.de84d442.js","assets/BaseCard.f7886897.js","assets/PostForm.b81cfeb1.js","assets/PostForm.07fb72be.css","assets/QForm.9ba2c0df.js","assets/QItemLabel.f46cb4a1.js","assets/format.c860d4da.js","assets/QCardActions.92b96a6f.js","assets/validate-rules.ce7e6efc.js","assets/index.8460fa06.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/route-block.1e6a8648.js"]),meta:{width:"800px"}}]}]},{path:"/search",children:[{path:"",name:"/search/",component:()=>je(()=>import("./index.1af6d030.js"),["assets/index.1af6d030.js","assets/index.b27cccda.css","assets/QPage.4a7353bb.js","assets/PostItem.876d1c7d.js","assets/PostIcon.08c4412d.js","assets/post.de84d442.js"])}]},{path:"/vueuse",children:[{path:"",name:"/vueuse/",component:()=>je(()=>import("./index.60fa8bd6.js"),["assets/index.60fa8bd6.js","assets/QPage.4a7353bb.js"])}]}];/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Yi=typeof window!="undefined";function zR(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ue=Object.assign;function Ou(t,e){const n={};for(const r in e){const i=e[r];n[r]=Cn(i)?i.map(t):t(i)}return n}const wo=()=>{},Cn=Array.isArray,WR=/\/$/,KR=t=>t.replace(WR,"");function Du(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=JR(r!=null?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function GR(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Mm(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function QR(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&vs(e.matched[r],n.matched[i])&&Hv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function vs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Hv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!YR(t[n],e[n]))return!1;return!0}function YR(t,e){return Cn(t)?Fm(t,e):Cn(e)?Fm(e,t):t===e}function Fm(t,e){return Cn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function JR(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Fo;(function(t){t.pop="pop",t.push="push"})(Fo||(Fo={}));var Eo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Eo||(Eo={}));function XR(t){if(!t)if(Yi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),KR(t)}const ZR=/^[^#]+#/;function eS(t,e){return t.replace(ZR,"#")+e}function tS(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const wc=()=>({left:window.pageXOffset,top:window.pageYOffset});function nS(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=tS(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Um(t,e){return(history.state?history.state.position-e:-1)+t}const Th=new Map;function rS(t,e){Th.set(t,e)}function iS(t){const e=Th.get(t);return Th.delete(t),e}let sS=()=>location.protocol+"//"+location.host;function zv(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),Mm(c,"")}return Mm(n,t)+r+i}function oS(t,e,n,r){let i=[],s=[],o=null;const a=({state:p})=>{const g=zv(t,location),w=n.value,C=e.value;let S=0;if(p){if(n.value=g,e.value=p,o&&o===w){o=null;return}S=C?p.position-C.position:0}else r(g);i.forEach(x=>{x(n.value,w,{delta:S,type:Fo.pop,direction:S?S>0?Eo.forward:Eo.back:Eo.unknown})})};function c(){o=n.value}function u(p){i.push(p);const g=()=>{const w=i.indexOf(p);w>-1&&i.splice(w,1)};return s.push(g),g}function h(){const{history:p}=window;!p.state||p.replaceState(Ue({},p.state,{scroll:wc()}),"")}function f(){for(const p of s)p();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:u,destroy:f}}function $m(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?wc():null}}function aS(t){const{history:e,location:n}=window,r={value:zv(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,u,h){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:sS()+t+c;try{e[h?"replaceState":"pushState"](u,"",p),i.value=u}catch(g){console.error(g),n[h?"replace":"assign"](p)}}function o(c,u){const h=Ue({},e.state,$m(i.value.back,c,i.value.forward,!0),u,{position:i.value.position});s(c,h,!0),r.value=c}function a(c,u){const h=Ue({},i.value,e.state,{forward:c,scroll:wc()});s(h.current,h,!0);const f=Ue({},$m(r.value,c,null),{position:h.position+1},u);s(c,f,!1),r.value=c}return{location:r,state:i,push:a,replace:o}}function lS(t){t=XR(t);const e=aS(t),n=oS(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=Ue({location:"",base:t,go:r,createHref:eS.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function cS(t){return typeof t=="string"||t&&typeof t=="object"}function Wv(t){return typeof t=="string"||typeof t=="symbol"}const Er={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Kv=Symbol("");var qm;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(qm||(qm={}));function ws(t,e){return Ue(new Error,{type:t,[Kv]:!0},e)}function Gn(t,e){return t instanceof Error&&Kv in t&&(e==null||!!(t.type&e))}const Bm="[^/]+?",uS={sensitive:!1,strict:!1,start:!0,end:!0},hS=/[.+*?^${}()[\]/\\]/g;function dS(t,e){const n=Ue({},uS,e),r=[];let i=n.start?"^":"";const s=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let f=0;f<u.length;f++){const p=u[f];let g=40+(n.sensitive?.25:0);if(p.type===0)f||(i+="/"),i+=p.value.replace(hS,"\\$&"),g+=40;else if(p.type===1){const{value:w,repeatable:C,optional:S,regexp:x}=p;s.push({name:w,repeatable:C,optional:S});const k=x||Bm;if(k!==Bm){g+=10;try{new RegExp(`(${k})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${w}" (${k}): `+D.message)}}let O=C?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;f||(O=S&&u.length<2?`(?:/${O})`:"/"+O),S&&(O+="?"),i+=O,g+=20,S&&(g+=-8),C&&(g+=-20),k===".*"&&(g+=-50)}h.push(g)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(u){const h=u.match(o),f={};if(!h)return null;for(let p=1;p<h.length;p++){const g=h[p]||"",w=s[p-1];f[w.name]=g&&w.repeatable?g.split("/"):g}return f}function c(u){let h="",f=!1;for(const p of t){(!f||!h.endsWith("/"))&&(h+="/"),f=!1;for(const g of p)if(g.type===0)h+=g.value;else if(g.type===1){const{value:w,repeatable:C,optional:S}=g,x=w in u?u[w]:"";if(Cn(x)&&!C)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const k=Cn(x)?x.join("/"):x;if(!k)if(S)p.length<2&&(h.endsWith("/")?h=h.slice(0,-1):f=!0);else throw new Error(`Missing required param "${w}"`);h+=k}}return h||"/"}return{re:o,score:r,keys:s,parse:a,stringify:c}}function fS(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function pS(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=fS(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(jm(r))return 1;if(jm(i))return-1}return i.length-r.length}function jm(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const mS={type:0,value:""},gS=/[a-zA-Z0-9_]/;function _S(t){if(!t)return[[]];if(t==="/")return[[mS]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,c,u="",h="";function f(){!u||(n===0?s.push({type:0,value:u}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&f(),o()):c===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:gS.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:n=3:h+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),i}function yS(t,e,n){const r=dS(_S(t.path),n),i=Ue(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function vS(t,e){const n=[],r=new Map;e=Wm({strict:!1,end:!0,sensitive:!1},e);function i(h){return r.get(h)}function s(h,f,p){const g=!p,w=wS(h);w.aliasOf=p&&p.record;const C=Wm(e,h),S=[w];if("alias"in h){const O=typeof h.alias=="string"?[h.alias]:h.alias;for(const D of O)S.push(Ue({},w,{components:p?p.record.components:w.components,path:D,aliasOf:p?p.record:w}))}let x,k;for(const O of S){const{path:D}=O;if(f&&D[0]!=="/"){const V=f.record.path,j=V[V.length-1]==="/"?"":"/";O.path=f.record.path+(D&&j+D)}if(x=yS(O,f,C),p?p.alias.push(x):(k=k||x,k!==x&&k.alias.push(x),g&&h.name&&!zm(x)&&o(h.name)),w.children){const V=w.children;for(let j=0;j<V.length;j++)s(V[j],x,p&&p.children[j])}p=p||x,(x.record.components&&Object.keys(x.record.components).length||x.record.name||x.record.redirect)&&c(x)}return k?()=>{o(k)}:wo}function o(h){if(Wv(h)){const f=r.get(h);f&&(r.delete(h),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(h);f>-1&&(n.splice(f,1),h.record.name&&r.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return n}function c(h){let f=0;for(;f<n.length&&pS(h,n[f])>=0&&(h.record.path!==n[f].record.path||!Gv(h,n[f]));)f++;n.splice(f,0,h),h.record.name&&!zm(h)&&r.set(h.record.name,h)}function u(h,f){let p,g={},w,C;if("name"in h&&h.name){if(p=r.get(h.name),!p)throw ws(1,{location:h});C=p.record.name,g=Ue(Hm(f.params,p.keys.filter(k=>!k.optional).map(k=>k.name)),h.params&&Hm(h.params,p.keys.map(k=>k.name))),w=p.stringify(g)}else if("path"in h)w=h.path,p=n.find(k=>k.re.test(w)),p&&(g=p.parse(w),C=p.record.name);else{if(p=f.name?r.get(f.name):n.find(k=>k.re.test(f.path)),!p)throw ws(1,{location:h,currentLocation:f});C=p.record.name,g=Ue({},f.params,h.params),w=p.stringify(g)}const S=[];let x=p;for(;x;)S.unshift(x.record),x=x.parent;return{name:C,path:w,params:g,matched:S,meta:TS(S)}}return t.forEach(h=>s(h)),{addRoute:s,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Hm(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function wS(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ES(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function ES(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function zm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function TS(t){return t.reduce((e,n)=>Ue(e,n.meta),{})}function Wm(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Gv(t,e){return e.children.some(n=>n===t||Gv(t,n))}const Qv=/#/g,bS=/&/g,IS=/\//g,AS=/=/g,RS=/\?/g,Yv=/\+/g,SS=/%5B/g,CS=/%5D/g,Jv=/%5E/g,PS=/%60/g,Xv=/%7B/g,kS=/%7C/g,Zv=/%7D/g,xS=/%20/g;function Pd(t){return encodeURI(""+t).replace(kS,"|").replace(SS,"[").replace(CS,"]")}function OS(t){return Pd(t).replace(Xv,"{").replace(Zv,"}").replace(Jv,"^")}function bh(t){return Pd(t).replace(Yv,"%2B").replace(xS,"+").replace(Qv,"%23").replace(bS,"%26").replace(PS,"`").replace(Xv,"{").replace(Zv,"}").replace(Jv,"^")}function DS(t){return bh(t).replace(AS,"%3D")}function NS(t){return Pd(t).replace(Qv,"%23").replace(RS,"%3F")}function LS(t){return t==null?"":NS(t).replace(IS,"%2F")}function Cl(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function VS(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(Yv," "),o=s.indexOf("="),a=Cl(o<0?s:s.slice(0,o)),c=o<0?null:Cl(s.slice(o+1));if(a in e){let u=e[a];Cn(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function Km(t){let e="";for(let n in t){const r=t[n];if(n=DS(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Cn(r)?r.map(s=>s&&bh(s)):[r&&bh(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function MS(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Cn(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const FS=Symbol(""),Gm=Symbol(""),Ec=Symbol(""),kd=Symbol(""),Ih=Symbol("");function Xs(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Cr(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=f=>{f===!1?a(ws(4,{from:n,to:e})):f instanceof Error?a(f):cS(f)?a(ws(2,{from:e,to:f})):(s&&r.enterCallbacks[i]===s&&typeof f=="function"&&s.push(f),o())},u=t.call(r&&r.instances[i],e,n,c);let h=Promise.resolve(u);t.length<3&&(h=h.then(c)),h.catch(f=>a(f))})}function Nu(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(US(a)){const u=(a.__vccOpts||a)[e];u&&i.push(Cr(u,n,r,s,o))}else{let c=a();i.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const h=zR(u)?u.default:u;s.components[o]=h;const p=(h.__vccOpts||h)[e];return p&&Cr(p,n,r,s,o)()}))}}return i}function US(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Qm(t){const e=zt(Ec),n=zt(kd),r=H(()=>e.resolve(qt(t.to))),i=H(()=>{const{matched:c}=r.value,{length:u}=c,h=c[u-1],f=n.matched;if(!h||!f.length)return-1;const p=f.findIndex(vs.bind(null,h));if(p>-1)return p;const g=Ym(c[u-2]);return u>1&&Ym(h)===g&&f[f.length-1].path!==g?f.findIndex(vs.bind(null,c[u-2])):p}),s=H(()=>i.value>-1&&jS(n.params,r.value.params)),o=H(()=>i.value>-1&&i.value===n.matched.length-1&&Hv(n.params,r.value.params));function a(c={}){return BS(c)?e[qt(t.replace)?"replace":"push"](qt(t.to)).catch(wo):Promise.resolve()}return{route:r,href:H(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const $S=uc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Qm,setup(t,{slots:e}){const n=dn(Qm(t)),{options:r}=zt(Ec),i=H(()=>({[Jm(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Jm(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Y("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),qS=$S;function BS(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function jS(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Cn(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function Ym(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Jm=(t,e,n)=>t!=null?t:e!=null?e:n,HS=uc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=zt(Ih),i=H(()=>t.route||r.value),s=zt(Gm,0),o=H(()=>{let u=qt(s);const{matched:h}=i.value;let f;for(;(f=h[u])&&!f.components;)u++;return u}),a=H(()=>i.value.matched[o.value]);cs(Gm,H(()=>o.value+1)),cs(FS,a),cs(Ih,i);const c=Re();return Ve(()=>[c.value,a.value,t.name],([u,h,f],[p,g,w])=>{h&&(h.instances[f]=u,g&&g!==h&&u&&u===p&&(h.leaveGuards.size||(h.leaveGuards=g.leaveGuards),h.updateGuards.size||(h.updateGuards=g.updateGuards))),u&&h&&(!g||!vs(h,g)||!p)&&(h.enterCallbacks[f]||[]).forEach(C=>C(u))},{flush:"post"}),()=>{const u=i.value,h=t.name,f=a.value,p=f&&f.components[h];if(!p)return Xm(n.default,{Component:p,route:u});const g=f.props[h],w=g?g===!0?u.params:typeof g=="function"?g(u):g:null,S=Y(p,Ue({},w,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(f.instances[h]=null)},ref:c}));return Xm(n.default,{Component:S,route:u})||S}}});function Xm(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const zS=HS;function WS(t){const e=vS(t.routes,t),n=t.parseQuery||VS,r=t.stringifyQuery||Km,i=t.history,s=Xs(),o=Xs(),a=Xs(),c=ns(Er);let u=Er;Yi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Ou.bind(null,F=>""+F),f=Ou.bind(null,LS),p=Ou.bind(null,Cl);function g(F,Z){let U,re;return Wv(F)?(U=e.getRecordMatcher(F),re=Z):re=F,e.addRoute(re,U)}function w(F){const Z=e.getRecordMatcher(F);Z&&e.removeRoute(Z)}function C(){return e.getRoutes().map(F=>F.record)}function S(F){return!!e.getRecordMatcher(F)}function x(F,Z){if(Z=Ue({},Z||c.value),typeof F=="string"){const P=Du(n,F,Z.path),L=e.resolve({path:P.path},Z),z=i.createHref(P.fullPath);return Ue(P,L,{params:p(L.params),hash:Cl(P.hash),redirectedFrom:void 0,href:z})}let U;if("path"in F)U=Ue({},F,{path:Du(n,F.path,Z.path).path});else{const P=Ue({},F.params);for(const L in P)P[L]==null&&delete P[L];U=Ue({},F,{params:f(P)}),Z.params=f(Z.params)}const re=e.resolve(U,Z),Ae=F.hash||"";re.params=h(p(re.params));const Fe=GR(r,Ue({},F,{hash:OS(Ae),path:re.path})),I=i.createHref(Fe);return Ue({fullPath:Fe,hash:Ae,query:r===Km?MS(F.query):F.query||{}},re,{redirectedFrom:void 0,href:I})}function k(F){return typeof F=="string"?Du(n,F,c.value.path):Ue({},F)}function O(F,Z){if(u!==F)return ws(8,{from:Z,to:F})}function D(F){return b(F)}function V(F){return D(Ue(k(F),{replace:!0}))}function j(F){const Z=F.matched[F.matched.length-1];if(Z&&Z.redirect){const{redirect:U}=Z;let re=typeof U=="function"?U(F):U;return typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=k(re):{path:re},re.params={}),Ue({query:F.query,hash:F.hash,params:"path"in re?{}:F.params},re)}}function b(F,Z){const U=u=x(F),re=c.value,Ae=F.state,Fe=F.force,I=F.replace===!0,P=j(U);if(P)return b(Ue(k(P),{state:typeof P=="object"?Ue({},Ae,P.state):Ae,force:Fe,replace:I}),Z||U);const L=U;L.redirectedFrom=Z;let z;return!Fe&&QR(r,re,U)&&(z=ws(16,{to:L,from:re}),st(re,re,!0,!1)),(z?Promise.resolve(z):A(L,re)).catch(q=>Gn(q)?Gn(q,2)?q:Je(q):he(q,L,re)).then(q=>{if(q){if(Gn(q,2))return b(Ue({replace:I},k(q.to),{state:typeof q.to=="object"?Ue({},Ae,q.to.state):Ae,force:Fe}),Z||L)}else q=R(L,re,!0,I,Ae);return T(L,re,q),q})}function v(F,Z){const U=O(F,Z);return U?Promise.reject(U):Promise.resolve()}function _(F){const Z=yt.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(F):F()}function A(F,Z){let U;const[re,Ae,Fe]=KS(F,Z);U=Nu(re.reverse(),"beforeRouteLeave",F,Z);for(const P of re)P.leaveGuards.forEach(L=>{U.push(Cr(L,F,Z))});const I=v.bind(null,F,Z);return U.push(I),Ie(U).then(()=>{U=[];for(const P of s.list())U.push(Cr(P,F,Z));return U.push(I),Ie(U)}).then(()=>{U=Nu(Ae,"beforeRouteUpdate",F,Z);for(const P of Ae)P.updateGuards.forEach(L=>{U.push(Cr(L,F,Z))});return U.push(I),Ie(U)}).then(()=>{U=[];for(const P of F.matched)if(P.beforeEnter&&!Z.matched.includes(P))if(Cn(P.beforeEnter))for(const L of P.beforeEnter)U.push(Cr(L,F,Z));else U.push(Cr(P.beforeEnter,F,Z));return U.push(I),Ie(U)}).then(()=>(F.matched.forEach(P=>P.enterCallbacks={}),U=Nu(Fe,"beforeRouteEnter",F,Z),U.push(I),Ie(U))).then(()=>{U=[];for(const P of o.list())U.push(Cr(P,F,Z));return U.push(I),Ie(U)}).catch(P=>Gn(P,8)?P:Promise.reject(P))}function T(F,Z,U){for(const re of a.list())_(()=>re(F,Z,U))}function R(F,Z,U,re,Ae){const Fe=O(F,Z);if(Fe)return Fe;const I=Z===Er,P=Yi?history.state:{};U&&(re||I?i.replace(F.fullPath,Ue({scroll:I&&P&&P.scroll},Ae)):i.push(F.fullPath,Ae)),c.value=F,st(F,Z,U,I),Je()}let E;function G(){E||(E=i.listen((F,Z,U)=>{if(!ce.listening)return;const re=x(F),Ae=j(re);if(Ae){b(Ue(Ae,{replace:!0}),re).catch(wo);return}u=re;const Fe=c.value;Yi&&rS(Um(Fe.fullPath,U.delta),wc()),A(re,Fe).catch(I=>Gn(I,12)?I:Gn(I,2)?(b(I.to,re).then(P=>{Gn(P,20)&&!U.delta&&U.type===Fo.pop&&i.go(-1,!1)}).catch(wo),Promise.reject()):(U.delta&&i.go(-U.delta,!1),he(I,re,Fe))).then(I=>{I=I||R(re,Fe,!1),I&&(U.delta&&!Gn(I,8)?i.go(-U.delta,!1):U.type===Fo.pop&&Gn(I,20)&&i.go(-1,!1)),T(re,Fe,I)}).catch(wo)}))}let oe=Xs(),se=Xs(),_e;function he(F,Z,U){Je(F);const re=se.list();return re.length?re.forEach(Ae=>Ae(F,Z,U)):console.error(F),Promise.reject(F)}function qe(){return _e&&c.value!==Er?Promise.resolve():new Promise((F,Z)=>{oe.add([F,Z])})}function Je(F){return _e||(_e=!F,G(),oe.list().forEach(([Z,U])=>F?U(F):Z()),oe.reset()),F}function st(F,Z,U,re){const{scrollBehavior:Ae}=t;if(!Yi||!Ae)return Promise.resolve();const Fe=!U&&iS(Um(F.fullPath,0))||(re||!U)&&history.state&&history.state.scroll||null;return on().then(()=>Ae(F,Z,Fe)).then(I=>I&&nS(I)).catch(I=>he(I,F,Z))}const De=F=>i.go(F);let de;const yt=new Set,ce={currentRoute:c,listening:!0,addRoute:g,removeRoute:w,hasRoute:S,getRoutes:C,resolve:x,options:t,push:D,replace:V,go:De,back:()=>De(-1),forward:()=>De(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:se.add,isReady:qe,install(F){const Z=this;F.component("RouterLink",qS),F.component("RouterView",zS),F.config.globalProperties.$router=Z,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>qt(c)}),Yi&&!de&&c.value===Er&&(de=!0,D(i.location).catch(Ae=>{}));const U={};for(const Ae in Er)U[Ae]=H(()=>c.value[Ae]);F.provide(Ec,Z),F.provide(kd,dn(U)),F.provide(Ih,c);const re=F.unmount;yt.add(F),F.unmount=function(){yt.delete(F),yt.size<1&&(u=Er,E&&E(),E=null,c.value=Er,de=!1,_e=!1),re()}}};function Ie(F){return F.reduce((Z,U)=>Z.then(()=>_(U)),Promise.resolve())}return ce}function KS(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(u=>vs(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>vs(u,c))||i.push(c))}return[n,r,i]}function ZF(){return zt(Ec)}function GS(){return zt(kd)}function QS(t){const{extendRoutes:e}=t;return WS(Object.assign(t,{routes:typeof e=="function"?e(Vm):Vm}))}const Ah={xs:18,sm:24,md:32,lg:38,xl:46},Tc={size:String};function bc(t,e=Ah){return H(()=>t.size!==void 0?{fontSize:t.size in e?`${e[t.size]}px`:t.size}:null)}const et=t=>Di(uc(t)),ew=t=>Di(t);function On(t,e){return t!==void 0&&t()||e}function tw(t,e){if(t!==void 0){const n=t();if(n!=null)return n.slice()}return e}function rs(t,e){return t!==void 0?e.concat(t()):e}function nw(t,e){return t===void 0?e:e!==void 0?e.concat(t()):t()}function YS(t,e,n,r,i,s){e.key=r+i;const o=Y(t,e,n);return i===!0?as(o,s()):o}const Zm="0 0 24 24",eg=t=>t,Lu=t=>`ionicons ${t}`,rw={"mdi-":t=>`mdi ${t}`,"icon-":eg,"bt-":t=>`bt ${t}`,"eva-":t=>`eva ${t}`,"ion-md":Lu,"ion-ios":Lu,"ion-logo":Lu,"iconfont ":eg,"ti-":t=>`themify-icon ${t}`,"bi-":t=>`bootstrap-icons ${t}`},iw={o_:"-outlined",r_:"-round",s_:"-sharp"},sw={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},JS=new RegExp("^("+Object.keys(rw).join("|")+")"),XS=new RegExp("^("+Object.keys(iw).join("|")+")"),tg=new RegExp("^("+Object.keys(sw).join("|")+")"),ZS=/^[Mm]\s?[-+]?\.?\d/,eC=/^img:/,tC=/^svguse:/,nC=/^ion-/,rC=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var gi=et({name:"QIcon",props:{...Tc,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(t,{slots:e}){const{proxy:{$q:n}}=Ze(),r=bc(t),i=H(()=>"q-icon"+(t.left===!0?" on-left":"")+(t.right===!0?" on-right":"")+(t.color!==void 0?` text-${t.color}`:"")),s=H(()=>{let o,a=t.name;if(a==="none"||!a)return{none:!0};if(n.iconMapFn!==null){const h=n.iconMapFn(a);if(h!==void 0)if(h.icon!==void 0){if(a=h.icon,a==="none"||!a)return{none:!0}}else return{cls:h.cls,content:h.content!==void 0?h.content:" "}}if(ZS.test(a)===!0){const[h,f=Zm]=a.split("|");return{svg:!0,viewBox:f,nodes:h.split("&&").map(p=>{const[g,w,C]=p.split("@@");return Y("path",{style:w,d:g,transform:C})})}}if(eC.test(a)===!0)return{img:!0,src:a.substring(4)};if(tC.test(a)===!0){const[h,f=Zm]=a.split("|");return{svguse:!0,src:h.substring(7),viewBox:f}}let c=" ";const u=a.match(JS);if(u!==null)o=rw[u[1]](a);else if(rC.test(a)===!0)o=a;else if(nC.test(a)===!0)o=`ionicons ion-${n.platform.is.ios===!0?"ios":"md"}${a.substring(3)}`;else if(tg.test(a)===!0){o="notranslate material-symbols";const h=a.match(tg);h!==null&&(a=a.substring(6),o+=sw[h[1]]),c=a}else{o="notranslate material-icons";const h=a.match(XS);h!==null&&(a=a.substring(2),o+=iw[h[1]]),c=a}return{cls:o,content:c}});return()=>{const o={class:i.value,style:r.value,"aria-hidden":"true",role:"presentation"};return s.value.none===!0?Y(t.tag,o,On(e.default)):s.value.img===!0?Y("span",o,rs(e.default,[Y("img",{src:s.value.src})])):s.value.svg===!0?Y("span",o,rs(e.default,[Y("svg",{viewBox:s.value.viewBox||"0 0 24 24"},s.value.nodes)])):s.value.svguse===!0?Y("span",o,rs(e.default,[Y("svg",{viewBox:s.value.viewBox},[Y("use",{"xlink:href":s.value.src})])])):(s.value.cls!==void 0&&(o.class+=" "+s.value.cls),Y(t.tag,o,rs(e.default,[s.value.content])))}}}),Rh=et({name:"QAvatar",props:{...Tc,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(t,{slots:e}){const n=bc(t),r=H(()=>"q-avatar"+(t.color?` bg-${t.color}`:"")+(t.textColor?` text-${t.textColor} q-chip--colored`:"")+(t.square===!0?" q-avatar--square":t.rounded===!0?" rounded-borders":"")),i=H(()=>t.fontSize?{fontSize:t.fontSize}:null);return()=>{const s=t.icon!==void 0?[Y(gi,{name:t.icon})]:void 0;return Y("div",{class:r.value,style:n.value},[Y("div",{class:"q-avatar__content row flex-center overflow-hidden",style:i.value},nw(e.default,s))])}}}),iC=et({name:"QToolbarTitle",props:{shrink:Boolean},setup(t,{slots:e}){const n=H(()=>"q-toolbar__title ellipsis"+(t.shrink===!0?" col-shrink":""));return()=>Y("div",{class:n.value},On(e.default))}});const sC={size:{type:[Number,String],default:"1em"},color:String};function oC(t){return{cSize:H(()=>t.size in Ah?`${Ah[t.size]}px`:t.size),classes:H(()=>"q-spinner"+(t.color?` text-${t.color}`:""))}}var ow=et({name:"QSpinner",props:{...sC,thickness:{type:Number,default:5}},setup(t){const{cSize:e,classes:n}=oC(t);return()=>Y("svg",{class:n.value+" q-spinner-mat",width:e.value,height:e.value,viewBox:"25 25 50 50"},[Y("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":t.thickness,"stroke-miterlimit":"10"})])}});function Sh(t,e){const n=t.style;for(const r in e)n[r]=e[r]}function aC(t){if(t==null)return;if(typeof t=="string")try{return document.querySelector(t)||void 0}catch{return}const e=qt(t);if(e)return e.$el||e}function aw(t,e){if(t==null||t.contains(e)===!0)return!0;for(let n=t.nextElementSibling;n!==null;n=n.nextElementSibling)if(n.contains(e))return!0;return!1}function lC(t,e=250){let n=!1,r;return function(){return n===!1&&(n=!0,setTimeout(()=>{n=!1},e),r=t.apply(this,arguments)),r}}function ng(t,e,n,r){n.modifiers.stop===!0&&Nv(t);const i=n.modifiers.color;let s=n.modifiers.center;s=s===!0||r===!0;const o=document.createElement("span"),a=document.createElement("span"),c=Dv(t),{left:u,top:h,width:f,height:p}=e.getBoundingClientRect(),g=Math.sqrt(f*f+p*p),w=g/2,C=`${(f-g)/2}px`,S=s?C:`${c.left-u-w}px`,x=`${(p-g)/2}px`,k=s?x:`${c.top-h-w}px`;a.className="q-ripple__inner",Sh(a,{height:`${g}px`,width:`${g}px`,transform:`translate3d(${S},${k},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${i?" text-"+i:""}`,o.setAttribute("dir","ltr"),o.appendChild(a),e.appendChild(o);const O=()=>{o.remove(),clearTimeout(D)};n.abort.push(O);let D=setTimeout(()=>{a.classList.add("q-ripple__inner--enter"),a.style.transform=`translate3d(${C},${x},0) scale3d(1,1,1)`,a.style.opacity=.2,D=setTimeout(()=>{a.classList.remove("q-ripple__inner--enter"),a.classList.add("q-ripple__inner--leave"),a.style.opacity=0,D=setTimeout(()=>{o.remove(),n.abort.splice(n.abort.indexOf(O),1)},275)},250)},50)}function rg(t,{modifiers:e,value:n,arg:r}){const i=Object.assign({},t.cfg.ripple,e,n);t.modifiers={early:i.early===!0,stop:i.stop===!0,center:i.center===!0,color:i.color||r,keyCodes:[].concat(i.keyCodes||13)}}var lw=ew({name:"ripple",beforeMount(t,e){const n=e.instance.$.appContext.config.globalProperties.$q.config||{};if(n.ripple===!1)return;const r={cfg:n,enabled:e.value!==!1,modifiers:{},abort:[],start(i){r.enabled===!0&&i.qSkipRipple!==!0&&i.type===(r.modifiers.early===!0?"pointerdown":"click")&&ng(i,t,r,i.qKeyEvent===!0)},keystart:lC(i=>{r.enabled===!0&&i.qSkipRipple!==!0&&Ii(i,r.modifiers.keyCodes)===!0&&i.type===`key${r.modifiers.early===!0?"down":"up"}`&&ng(i,t,r,!0)},300)};rg(r,e),t.__qripple=r,Vo(r,"main",[[t,"pointerdown","start","passive"],[t,"click","start","passive"],[t,"keydown","keystart","passive"],[t,"keyup","keystart","passive"]])},updated(t,e){if(e.oldValue!==e.value){const n=t.__qripple;n!==void 0&&(n.enabled=e.value!==!1,n.enabled===!0&&Object(e.value)===e.value&&rg(n,e))}},beforeUnmount(t){const e=t.__qripple;e!==void 0&&(e.abort.forEach(n=>{n()}),Al(e,"main"),delete t._qripple)}});const cw={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},cC=Object.keys(cw),uC={align:{type:String,validator:t=>cC.includes(t)}};function hC(t){return H(()=>{const e=t.align===void 0?t.vertical===!0?"stretch":"left":t.align;return`${t.vertical===!0?"items":"justify"}-${cw[e]}`})}function el(t){if(Object(t.$parent)===t.$parent)return t.$parent;let{parent:e}=t.$;for(;Object(e)===e;){if(Object(e.proxy)===e.proxy)return e.proxy;e=e.parent}}function uw(t){return t.appContext.config.globalProperties.$router!==void 0}function hw(t){return t.isUnmounted===!0||t.isDeactivated===!0}function ig(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}function sg(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function dC(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(Array.isArray(i)===!1||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function og(t,e){return Array.isArray(e)===!0?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function fC(t,e){return Array.isArray(t)===!0?og(t,e):Array.isArray(e)===!0?og(e,t):t===e}function pC(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(fC(t[n],e[n])===!1)return!1;return!0}const dw={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function fw({fallbackTag:t,useDisableForRouterLinkProps:e=!0}={}){const n=Ze(),{props:r,proxy:i,emit:s}=n,o=uw(n),a=H(()=>r.disable!==!0&&r.href!==void 0),c=H(e===!0?()=>o===!0&&r.disable!==!0&&a.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!=="":()=>o===!0&&a.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!==""),u=H(()=>c.value===!0?k(r.to):null),h=H(()=>u.value!==null),f=H(()=>a.value===!0||h.value===!0),p=H(()=>r.type==="a"||f.value===!0?"a":r.tag||t||"div"),g=H(()=>a.value===!0?{href:r.href,target:r.target}:h.value===!0?{href:u.value.href,target:r.target}:{}),w=H(()=>{if(h.value===!1)return-1;const{matched:V}=u.value,{length:j}=V,b=V[j-1];if(b===void 0)return-1;const v=i.$route.matched;if(v.length===0)return-1;const _=v.findIndex(sg.bind(null,b));if(_>-1)return _;const A=ig(V[j-2]);return j>1&&ig(b)===A&&v[v.length-1].path!==A?v.findIndex(sg.bind(null,V[j-2])):_}),C=H(()=>h.value===!0&&w.value!==-1&&dC(i.$route.params,u.value.params)),S=H(()=>C.value===!0&&w.value===i.$route.matched.length-1&&pC(i.$route.params,u.value.params)),x=H(()=>h.value===!0?S.value===!0?` ${r.exactActiveClass} ${r.activeClass}`:r.exact===!0?"":C.value===!0?` ${r.activeClass}`:"":"");function k(V){try{return i.$router.resolve(V)}catch{}return null}function O(V,{returnRouterError:j,to:b=r.to,replace:v=r.replace}={}){if(r.disable===!0)return V.preventDefault(),Promise.resolve(!1);if(V.metaKey||V.altKey||V.ctrlKey||V.shiftKey||V.button!==void 0&&V.button!==0||r.target==="_blank")return Promise.resolve(!1);V.preventDefault();const _=i.$router[v===!0?"replace":"push"](b);return j===!0?_:_.then(()=>{}).catch(()=>{})}function D(V){if(h.value===!0){const j=b=>O(V,b);s("click",V,j),V.defaultPrevented!==!0&&j()}else s("click",V)}return{hasRouterLink:h,hasHrefLink:a,hasLink:f,linkTag:p,resolvedLink:u,linkIsActive:C,linkIsExactActive:S,linkClass:x,linkAttrs:g,getLink:k,navigateToRouterLink:O,navigateOnClick:D}}const ag={none:0,xs:4,sm:8,md:16,lg:24,xl:32},mC={xs:8,sm:10,md:14,lg:20,xl:24},gC=["button","submit","reset"],_C=/[^\s]\/[^\s]/,yC=["flat","outline","push","unelevated"],vC=(t,e)=>t.flat===!0?"flat":t.outline===!0?"outline":t.push===!0?"push":t.unelevated===!0?"unelevated":e,wC={...Tc,...dw,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...yC.reduce((t,e)=>(t[e]=Boolean)&&t,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...uC.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function EC(t){const e=bc(t,mC),n=hC(t),{hasRouterLink:r,hasLink:i,linkTag:s,linkAttrs:o,navigateOnClick:a}=fw({fallbackTag:"button"}),c=H(()=>{const S=t.fab===!1&&t.fabMini===!1?e.value:{};return t.padding!==void 0?Object.assign({},S,{padding:t.padding.split(/\s+/).map(x=>x in ag?ag[x]+"px":x).join(" "),minWidth:"0",minHeight:"0"}):S}),u=H(()=>t.rounded===!0||t.fab===!0||t.fabMini===!0),h=H(()=>t.disable!==!0&&t.loading!==!0),f=H(()=>h.value===!0?t.tabindex||0:-1),p=H(()=>vC(t,"standard")),g=H(()=>{const S={tabindex:f.value};return i.value===!0?Object.assign(S,o.value):gC.includes(t.type)===!0&&(S.type=t.type),s.value==="a"?(t.disable===!0?S["aria-disabled"]="true":S.href===void 0&&(S.role="button"),r.value!==!0&&_C.test(t.type)===!0&&(S.type=t.type)):t.disable===!0&&(S.disabled="",S["aria-disabled"]="true"),t.loading===!0&&t.percentage!==void 0&&Object.assign(S,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":t.percentage}),S}),w=H(()=>{let S;t.color!==void 0?t.flat===!0||t.outline===!0?S=`text-${t.textColor||t.color}`:S=`bg-${t.color} text-${t.textColor||"white"}`:t.textColor&&(S=`text-${t.textColor}`);const x=t.round===!0?"round":`rectangle${u.value===!0?" q-btn--rounded":t.square===!0?" q-btn--square":""}`;return`q-btn--${p.value} q-btn--${x}`+(S!==void 0?" "+S:"")+(h.value===!0?" q-btn--actionable q-focusable q-hoverable":t.disable===!0?" disabled":"")+(t.fab===!0?" q-btn--fab":t.fabMini===!0?" q-btn--fab-mini":"")+(t.noCaps===!0?" q-btn--no-uppercase":"")+(t.dense===!0?" q-btn--dense":"")+(t.stretch===!0?" no-border-radius self-stretch":"")+(t.glossy===!0?" glossy":"")+(t.square?" q-btn--square":"")}),C=H(()=>n.value+(t.stack===!0?" column":" row")+(t.noWrap===!0?" no-wrap text-no-wrap":"")+(t.loading===!0?" q-btn__content--hidden":""));return{classes:w,style:c,innerClasses:C,attributes:g,hasLink:i,linkTag:s,navigateOnClick:a,isActionable:h}}const{passiveCapture:cn}=ut;let Wi=null,Ki=null,Gi=null;var Yn=et({name:"QBtn",props:{...wC,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(t,{slots:e,emit:n}){const{proxy:r}=Ze(),{classes:i,style:s,innerClasses:o,attributes:a,hasLink:c,linkTag:u,navigateOnClick:h,isActionable:f}=EC(t),p=Re(null),g=Re(null);let w=null,C,S=null;const x=H(()=>t.label!==void 0&&t.label!==null&&t.label!==""),k=H(()=>t.disable===!0||t.ripple===!1?!1:{keyCodes:c.value===!0?[13,32]:[13],...t.ripple===!0?{}:t.ripple}),O=H(()=>({center:t.round})),D=H(()=>{const G=Math.max(0,Math.min(100,t.percentage));return G>0?{transition:"transform 0.6s",transform:`translateX(${G-100}%)`}:{}}),V=H(()=>{if(t.loading===!0)return{onMousedown:E,onTouchstart:E,onClick:E,onKeydown:E,onKeyup:E};if(f.value===!0){const G={onClick:b,onKeydown:v,onMousedown:A};if(r.$q.platform.has.touch===!0){const oe=t.onTouchstart!==void 0?"":"Passive";G[`onTouchstart${oe}`]=_}return G}return{onClick:Tn}}),j=H(()=>({ref:p,class:"q-btn q-btn-item non-selectable no-outline "+i.value,style:s.value,...a.value,...V.value}));function b(G){if(p.value!==null){if(G!==void 0){if(G.defaultPrevented===!0)return;const oe=document.activeElement;if(t.type==="submit"&&oe!==document.body&&p.value.contains(oe)===!1&&oe.contains(p.value)===!1){p.value.focus();const se=()=>{document.removeEventListener("keydown",Tn,!0),document.removeEventListener("keyup",se,cn),p.value!==null&&p.value.removeEventListener("blur",se,cn)};document.addEventListener("keydown",Tn,!0),document.addEventListener("keyup",se,cn),p.value.addEventListener("blur",se,cn)}}h(G)}}function v(G){p.value!==null&&(n("keydown",G),Ii(G,[13,32])===!0&&Ki!==p.value&&(Ki!==null&&R(),G.defaultPrevented!==!0&&(p.value.focus(),Ki=p.value,p.value.classList.add("q-btn--active"),document.addEventListener("keyup",T,!0),p.value.addEventListener("blur",T,cn)),Tn(G)))}function _(G){p.value!==null&&(n("touchstart",G),G.defaultPrevented!==!0&&(Wi!==p.value&&(Wi!==null&&R(),Wi=p.value,w=G.target,w.addEventListener("touchcancel",T,cn),w.addEventListener("touchend",T,cn)),C=!0,S!==null&&clearTimeout(S),S=setTimeout(()=>{S=null,C=!1},200)))}function A(G){p.value!==null&&(G.qSkipRipple=C===!0,n("mousedown",G),G.defaultPrevented!==!0&&Gi!==p.value&&(Gi!==null&&R(),Gi=p.value,p.value.classList.add("q-btn--active"),document.addEventListener("mouseup",T,cn)))}function T(G){if(p.value!==null&&!(G!==void 0&&G.type==="blur"&&document.activeElement===p.value)){if(G!==void 0&&G.type==="keyup"){if(Ki===p.value&&Ii(G,[13,32])===!0){const oe=new MouseEvent("click",G);oe.qKeyEvent=!0,G.defaultPrevented===!0&&Lo(oe),G.cancelBubble===!0&&Nv(oe),p.value.dispatchEvent(oe),Tn(G),G.qKeyEvent=!0}n("keyup",G)}R()}}function R(G){const oe=g.value;G!==!0&&(Wi===p.value||Gi===p.value)&&oe!==null&&oe!==document.activeElement&&(oe.setAttribute("tabindex",-1),oe.focus()),Wi===p.value&&(w!==null&&(w.removeEventListener("touchcancel",T,cn),w.removeEventListener("touchend",T,cn)),Wi=w=null),Gi===p.value&&(document.removeEventListener("mouseup",T,cn),Gi=null),Ki===p.value&&(document.removeEventListener("keyup",T,!0),p.value!==null&&p.value.removeEventListener("blur",T,cn),Ki=null),p.value!==null&&p.value.classList.remove("q-btn--active")}function E(G){Tn(G),G.qSkipRipple=!0}return Nt(()=>{R(!0)}),Object.assign(r,{click:b}),()=>{let G=[];t.icon!==void 0&&G.push(Y(gi,{name:t.icon,left:t.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"})),x.value===!0&&G.push(Y("span",{class:"block"},[t.label])),G=rs(e.default,G),t.iconRight!==void 0&&t.round===!1&&G.push(Y(gi,{name:t.iconRight,right:t.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"}));const oe=[Y("span",{class:"q-focus-helper",ref:g})];return t.loading===!0&&t.percentage!==void 0&&oe.push(Y("span",{class:"q-btn__progress absolute-full overflow-hidden"+(t.darkPercentage===!0?" q-btn__progress--dark":"")},[Y("span",{class:"q-btn__progress-indicator fit block",style:D.value})])),oe.push(Y("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+o.value},G)),t.loading!==null&&oe.push(Y(No,{name:"q-transition--fade"},()=>t.loading===!0?[Y("span",{key:"loading",class:"absolute-full flex flex-center"},e.loading!==void 0?e.loading():[Y(ow)])]:null)),as(Y(u.value,j.value,oe),[[lw,k.value,void 0,O.value]])}}});const TC=Y("div",{class:"q-space"});var bC=et({name:"QSpace",setup(){return()=>TC}});const ks={dark:{type:Boolean,default:null}};function xs(t,e){return H(()=>t.dark===null?e.dark.isActive:t.dark)}const IC={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},Vu={xs:2,sm:4,md:8,lg:16,xl:24};var AC=et({name:"QSeparator",props:{...ks,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(t){const e=Ze(),n=xs(t,e.proxy.$q),r=H(()=>t.vertical===!0?"vertical":"horizontal"),i=H(()=>` q-separator--${r.value}`),s=H(()=>t.inset!==!1?`${i.value}-${IC[t.inset]}`:""),o=H(()=>`q-separator${i.value}${s.value}`+(t.color!==void 0?` bg-${t.color}`:"")+(n.value===!0?" q-separator--dark":"")),a=H(()=>{const c={};if(t.size!==void 0&&(c[t.vertical===!0?"width":"height"]=t.size),t.spaced!==!1){const u=t.spaced===!0?`${Vu.md}px`:t.spaced in Vu?`${Vu[t.spaced]}px`:t.spaced,h=t.vertical===!0?["Left","Right"]:["Top","Bottom"];c[`margin${h[0]}`]=c[`margin${h[1]}`]=u}return c});return()=>Y("hr",{class:o.value,style:a.value,"aria-orientation":r.value})}}),Mu=et({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(t,{slots:e}){const n=H(()=>`q-item__section column q-item__section--${t.avatar===!0||t.side===!0||t.thumbnail===!0?"side":"main"}`+(t.top===!0?" q-item__section--top justify-start":" justify-center")+(t.avatar===!0?" q-item__section--avatar":"")+(t.thumbnail===!0?" q-item__section--thumbnail":"")+(t.noWrap===!0?" q-item__section--nowrap":""));return()=>Y("div",{class:n.value},On(e.default))}}),Fu=et({name:"QItem",props:{...ks,...dw,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(t,{slots:e,emit:n}){const{proxy:{$q:r}}=Ze(),i=xs(t,r),{hasLink:s,linkAttrs:o,linkClass:a,linkTag:c,navigateOnClick:u}=fw(),h=Re(null),f=Re(null),p=H(()=>t.clickable===!0||s.value===!0||t.tag==="label"),g=H(()=>t.disable!==!0&&p.value===!0),w=H(()=>"q-item q-item-type row no-wrap"+(t.dense===!0?" q-item--dense":"")+(i.value===!0?" q-item--dark":"")+(s.value===!0&&t.active===null?a.value:t.active===!0?` q-item--active${t.activeClass!==void 0?` ${t.activeClass}`:""}`:"")+(t.disable===!0?" disabled":"")+(g.value===!0?" q-item--clickable q-link cursor-pointer "+(t.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(t.focused===!0?" q-manual-focusable--focused":""):"")),C=H(()=>{if(t.insetLevel===void 0)return null;const O=r.lang.rtl===!0?"Right":"Left";return{["padding"+O]:16+t.insetLevel*56+"px"}});function S(O){g.value===!0&&(f.value!==null&&(O.qKeyEvent!==!0&&document.activeElement===h.value?f.value.focus():document.activeElement===f.value&&h.value.focus()),u(O))}function x(O){if(g.value===!0&&Ii(O,13)===!0){Tn(O),O.qKeyEvent=!0;const D=new MouseEvent("click",O);D.qKeyEvent=!0,h.value.dispatchEvent(D)}n("keyup",O)}function k(){const O=tw(e.default,[]);return g.value===!0&&O.unshift(Y("div",{class:"q-focus-helper",tabindex:-1,ref:f})),O}return()=>{const O={ref:h,class:w.value,style:C.value,role:"listitem",onClick:S,onKeyup:x};return g.value===!0?(O.tabindex=t.tabindex||"0",Object.assign(O,o.value)):p.value===!0&&(O["aria-disabled"]="true"),Y(c.value,O,k())}}}),RC=et({name:"QList",props:{...ks,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(t,{slots:e}){const n=Ze(),r=xs(t,n.proxy.$q),i=H(()=>"q-list"+(t.bordered===!0?" q-list--bordered":"")+(t.dense===!0?" q-list--dense":"")+(t.separator===!0?" q-list--separator":"")+(r.value===!0?" q-list--dark":"")+(t.padding===!0?" q-list--padding":""));return()=>Y(t.tag,{class:i.value},On(e.default))}});function Ch(){if(window.getSelection!==void 0){const t=window.getSelection();t.empty!==void 0?t.empty():t.removeAllRanges!==void 0&&(t.removeAllRanges(),Il.is.mobile!==!0&&t.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const pw={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function mw({showing:t,avoidEmit:e,configureAnchorEl:n}){const{props:r,proxy:i,emit:s}=Ze(),o=Re(null);let a=null;function c(g){return o.value===null?!1:g===void 0||g.touches===void 0||g.touches.length<=1}const u={};n===void 0&&(Object.assign(u,{hide(g){i.hide(g)},toggle(g){i.toggle(g),g.qAnchorHandled=!0},toggleKey(g){Ii(g,13)===!0&&u.toggle(g)},contextClick(g){i.hide(g),Lo(g),on(()=>{i.show(g),g.qAnchorHandled=!0})},prevent:Lo,mobileTouch(g){if(u.mobileCleanup(g),c(g)!==!0)return;i.hide(g),o.value.classList.add("non-selectable");const w=g.target;Vo(u,"anchor",[[w,"touchmove","mobileCleanup","passive"],[w,"touchend","mobileCleanup","passive"],[w,"touchcancel","mobileCleanup","passive"],[o.value,"contextmenu","prevent","notPassive"]]),a=setTimeout(()=>{a=null,i.show(g),g.qAnchorHandled=!0},300)},mobileCleanup(g){o.value.classList.remove("non-selectable"),a!==null&&(clearTimeout(a),a=null),t.value===!0&&g!==void 0&&Ch()}}),n=function(g=r.contextMenu){if(r.noParentEvent===!0||o.value===null)return;let w;g===!0?i.$q.platform.is.mobile===!0?w=[[o.value,"touchstart","mobileTouch","passive"]]:w=[[o.value,"mousedown","hide","passive"],[o.value,"contextmenu","contextClick","notPassive"]]:w=[[o.value,"click","toggle","passive"],[o.value,"keyup","toggleKey","passive"]],Vo(u,"anchor",w)});function h(){Al(u,"anchor")}function f(g){for(o.value=g;o.value.classList.contains("q-anchor--skip");)o.value=o.value.parentNode;n()}function p(){if(r.target===!1||r.target===""||i.$el.parentNode===null)o.value=null;else if(r.target===!0)f(i.$el.parentNode);else{let g=r.target;if(typeof r.target=="string")try{g=document.querySelector(r.target)}catch{g=void 0}g!=null?(o.value=g.$el||g,n()):(o.value=null,console.error(`Anchor: target "${r.target}" not found`))}}return Ve(()=>r.contextMenu,g=>{o.value!==null&&(h(),n(g))}),Ve(()=>r.target,()=>{o.value!==null&&h(),p()}),Ve(()=>r.noParentEvent,g=>{o.value!==null&&(g===!0?h():n())}),sr(()=>{p(),e!==!0&&r.modelValue===!0&&o.value===null&&s("update:modelValue",!1)}),Nt(()=>{a!==null&&clearTimeout(a),h()}),{anchorEl:o,canShow:c,anchorEvents:u}}function gw(t,e){const n=Re(null);let r;function i(a,c){const u=`${c!==void 0?"add":"remove"}EventListener`,h=c!==void 0?c:r;a!==window&&a[u]("scroll",h,ut.passive),window[u]("scroll",h,ut.passive),r=c}function s(){n.value!==null&&(i(n.value),n.value=null)}const o=Ve(()=>t.noParentEvent,()=>{n.value!==null&&(s(),e())});return Nt(o),{localScrollTarget:n,unconfigureScrollTarget:s,changeScrollEvent:i}}const xd={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Od=["beforeShow","show","beforeHide","hide"];function Dd({showing:t,canShow:e,hideOnRouteChange:n,handleShow:r,handleHide:i,processOnMount:s}){const o=Ze(),{props:a,emit:c,proxy:u}=o;let h;function f(k){t.value===!0?w(k):p(k)}function p(k){if(a.disable===!0||k!==void 0&&k.qAnchorHandled===!0||e!==void 0&&e(k)!==!0)return;const O=a["onUpdate:modelValue"]!==void 0;O===!0&&(c("update:modelValue",!0),h=k,on(()=>{h===k&&(h=void 0)})),(a.modelValue===null||O===!1)&&g(k)}function g(k){t.value!==!0&&(t.value=!0,c("beforeShow",k),r!==void 0?r(k):c("show",k))}function w(k){if(a.disable===!0)return;const O=a["onUpdate:modelValue"]!==void 0;O===!0&&(c("update:modelValue",!1),h=k,on(()=>{h===k&&(h=void 0)})),(a.modelValue===null||O===!1)&&C(k)}function C(k){t.value!==!1&&(t.value=!1,c("beforeHide",k),i!==void 0?i(k):c("hide",k))}function S(k){a.disable===!0&&k===!0?a["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):k===!0!==t.value&&(k===!0?g:C)(h)}Ve(()=>a.modelValue,S),n!==void 0&&uw(o)===!0&&Ve(()=>u.$route.fullPath,()=>{n.value===!0&&t.value===!0&&w()}),s===!0&&sr(()=>{S(a.modelValue)});const x={show:p,hide:w,toggle:f};return Object.assign(u,x),x}let ui=[],Uo=[];function _w(t){Uo=Uo.filter(e=>e!==t)}function SC(t){_w(t),Uo.push(t)}function lg(t){_w(t),Uo.length===0&&ui.length!==0&&(ui[ui.length-1](),ui=[])}function yw(t){Uo.length===0?t():ui.push(t)}function eU(t){ui=ui.filter(e=>e!==t)}let CC=1,PC=document.body;function vw(t,e){const n=document.createElement("div");if(n.id=e!==void 0?`q-portal--${e}--${CC++}`:t,Sl.globalNodes!==void 0){const r=Sl.globalNodes.class;r!==void 0&&(n.className=r)}return PC.appendChild(n),n}function kC(t){t.remove()}const hs=[];function xC(t){return hs.find(e=>e.contentEl!==null&&e.contentEl.contains(t))}function ww(t,e){do{if(t.$options.name==="QMenu"){if(t.hide(e),t.$props.separateClosePopup===!0)return el(t)}else if(t.__qPortal===!0){const n=el(t);return n!==void 0&&n.$options.name==="QPopupProxy"?(t.hide(e),n):t}t=el(t)}while(t!=null)}function OC(t,e,n){for(;n!==0&&t!==void 0&&t!==null;){if(t.__qPortal===!0){if(n--,t.$options.name==="QMenu"){t=ww(t,e);continue}t.hide(e)}t=el(t)}}function DC(t){for(t=t.parent;t!=null;){if(t.type.name==="QGlobalDialog")return!0;if(t.type.name==="QDialog"||t.type.name==="QMenu")return!1;t=t.parent}return!1}function Nd(t,e,n,r){const i=Re(!1),s=Re(!1);let o=null;const a={},c=r==="dialog"&&DC(t);function u(f){if(f===!0){lg(a),s.value=!0;return}s.value=!1,i.value===!1&&(c===!1&&o===null&&(o=vw(!1,r)),i.value=!0,hs.push(t.proxy),SC(a))}function h(f){if(s.value=!1,f!==!0)return;lg(a),i.value=!1;const p=hs.indexOf(t.proxy);p!==-1&&hs.splice(p,1),o!==null&&(kC(o),o=null)}return dc(()=>{h(!0)}),t.proxy.__qPortal=!0,gc(t.proxy,"contentEl",()=>e.value),{showPortal:u,hidePortal:h,portalIsActive:i,portalIsAccessible:s,renderPortal:()=>c===!0?n():i.value===!0?[Y(SI,{to:o},n())]:void 0}}const Ld={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Vd(t,e=()=>{},n=()=>{}){return{transitionProps:H(()=>{const r=`q-transition--${t.transitionShow||e()}`,i=`q-transition--${t.transitionHide||n()}`;return{appear:!0,enterFromClass:`${r}-enter-from`,enterActiveClass:`${r}-enter-active`,enterToClass:`${r}-enter-to`,leaveFromClass:`${i}-leave-from`,leaveActiveClass:`${i}-leave-active`,leaveToClass:`${i}-leave-to`}}),transitionStyle:H(()=>`--q-transition-duration: ${t.transitionDuration}ms`)}}function Md(){let t;const e=Ze();function n(){t=void 0}return Ed(n),Nt(n),{removeTick:n,registerTick(r){t=r,on(()=>{t===r&&(hw(e)===!1&&t(),t=void 0)})}}}function Fd(){let t=null;const e=Ze();function n(){t!==null&&(clearTimeout(t),t=null)}return Ed(n),Nt(n),{removeTimeout:n,registerTimeout(r,i){n(),hw(e)===!1&&(t=setTimeout(r,i))}}}const NC=[null,document,document.body,document.scrollingElement,document.documentElement];function Ud(t,e){let n=aC(e);if(n===void 0){if(t==null)return window;n=t.closest(".scroll,.scroll-y,.overflow-auto")}return NC.includes(n)?window:n}function Ew(t){return t===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:t.scrollTop}function Tw(t){return t===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:t.scrollLeft}let Ma;function tl(){if(Ma!==void 0)return Ma;const t=document.createElement("p"),e=document.createElement("div");Sh(t,{width:"100%",height:"200px"}),Sh(e,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),e.appendChild(t),document.body.appendChild(e);const n=t.offsetWidth;e.style.overflow="scroll";let r=t.offsetWidth;return n===r&&(r=e.clientWidth),e.remove(),Ma=n-r,Ma}function LC(t,e=!0){return!t||t.nodeType!==Node.ELEMENT_NODE?!1:e?t.scrollHeight>t.clientHeight&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-y"])):t.scrollWidth>t.clientWidth&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-x"]))}const _i=[];let Es;function VC(t){Es=t.keyCode===27}function MC(){Es===!0&&(Es=!1)}function FC(t){Es===!0&&(Es=!1,Ii(t,27)===!0&&_i[_i.length-1](t))}function bw(t){window[t]("keydown",VC),window[t]("blur",MC),window[t]("keyup",FC),Es=!1}function Iw(t){at.is.desktop===!0&&(_i.push(t),_i.length===1&&bw("addEventListener"))}function Pl(t){const e=_i.indexOf(t);e>-1&&(_i.splice(e,1),_i.length===0&&bw("removeEventListener"))}const yi=[];function Aw(t){yi[yi.length-1](t)}function Rw(t){at.is.desktop===!0&&(yi.push(t),yi.length===1&&document.body.addEventListener("focusin",Aw))}function Ph(t){const e=yi.indexOf(t);e>-1&&(yi.splice(e,1),yi.length===0&&document.body.removeEventListener("focusin",Aw))}const{notPassiveCapture:kl}=ut,vi=[];function xl(t){const e=t.target;if(e===void 0||e.nodeType===8||e.classList.contains("no-pointer-events")===!0)return;let n=hs.length-1;for(;n>=0;){const r=hs[n].$;if(r.type.name!=="QDialog")break;if(r.props.seamless!==!0)return;n--}for(let r=vi.length-1;r>=0;r--){const i=vi[r];if((i.anchorEl.value===null||i.anchorEl.value.contains(e)===!1)&&(e===document.body||i.innerRef.value!==null&&i.innerRef.value.contains(e)===!1))t.qClickOutside=!0,i.onClickOutside(t);else return}}function Sw(t){vi.push(t),vi.length===1&&(document.addEventListener("mousedown",xl,kl),document.addEventListener("touchstart",xl,kl))}function Ol(t){const e=vi.findIndex(n=>n===t);e>-1&&(vi.splice(e,1),vi.length===0&&(document.removeEventListener("mousedown",xl,kl),document.removeEventListener("touchstart",xl,kl)))}let cg,ug;function Dl(t){const e=t.split(" ");return e.length!==2?!1:["top","center","bottom"].includes(e[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(e[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Cw(t){return t?!(t.length!==2||typeof t[0]!="number"||typeof t[1]!="number"):!0}const kh={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(t=>{kh[`${t}#ltr`]=t,kh[`${t}#rtl`]=t});function Nl(t,e){const n=t.split(" ");return{vertical:n[0],horizontal:kh[`${n[1]}#${e===!0?"rtl":"ltr"}`]}}function UC(t,e){let{top:n,left:r,right:i,bottom:s,width:o,height:a}=t.getBoundingClientRect();return e!==void 0&&(n-=e[1],r-=e[0],s+=e[1],i+=e[0],o+=e[0],a+=e[1]),{top:n,bottom:s,height:a,left:r,right:i,width:o,middle:r+(i-r)/2,center:n+(s-n)/2}}function $C(t,e,n){let{top:r,left:i}=t.getBoundingClientRect();return r+=e.top,i+=e.left,n!==void 0&&(r+=n[1],i+=n[0]),{top:r,bottom:r+1,height:1,left:i,right:i+1,width:1,middle:i,center:r}}function qC(t){return{top:0,center:t.offsetHeight/2,bottom:t.offsetHeight,left:0,middle:t.offsetWidth/2,right:t.offsetWidth}}function hg(t,e,n){return{top:t[n.anchorOrigin.vertical]-e[n.selfOrigin.vertical],left:t[n.anchorOrigin.horizontal]-e[n.selfOrigin.horizontal]}}function Pw(t){if(at.is.ios===!0&&window.visualViewport!==void 0){const a=document.body.style,{offsetLeft:c,offsetTop:u}=window.visualViewport;c!==cg&&(a.setProperty("--q-pe-left",c+"px"),cg=c),u!==ug&&(a.setProperty("--q-pe-top",u+"px"),ug=u)}const{scrollLeft:e,scrollTop:n}=t.el,r=t.absoluteOffset===void 0?UC(t.anchorEl,t.cover===!0?[0,0]:t.offset):$C(t.anchorEl,t.absoluteOffset,t.offset);let i={maxHeight:t.maxHeight,maxWidth:t.maxWidth,visibility:"visible"};(t.fit===!0||t.cover===!0)&&(i.minWidth=r.width+"px",t.cover===!0&&(i.minHeight=r.height+"px")),Object.assign(t.el.style,i);const s=qC(t.el);let o=hg(r,s,t);if(t.absoluteOffset===void 0||t.offset===void 0)Uu(o,r,s,t.anchorOrigin,t.selfOrigin);else{const{top:a,left:c}=o;Uu(o,r,s,t.anchorOrigin,t.selfOrigin);let u=!1;if(o.top!==a){u=!0;const h=2*t.offset[1];r.center=r.top-=h,r.bottom-=h+2}if(o.left!==c){u=!0;const h=2*t.offset[0];r.middle=r.left-=h,r.right-=h+2}u===!0&&(o=hg(r,s,t),Uu(o,r,s,t.anchorOrigin,t.selfOrigin))}i={top:o.top+"px",left:o.left+"px"},o.maxHeight!==void 0&&(i.maxHeight=o.maxHeight+"px",r.height>o.maxHeight&&(i.minHeight=i.maxHeight)),o.maxWidth!==void 0&&(i.maxWidth=o.maxWidth+"px",r.width>o.maxWidth&&(i.minWidth=i.maxWidth)),Object.assign(t.el.style,i),t.el.scrollTop!==n&&(t.el.scrollTop=n),t.el.scrollLeft!==e&&(t.el.scrollLeft=e)}function Uu(t,e,n,r,i){const s=n.bottom,o=n.right,a=tl(),c=window.innerHeight-a,u=document.body.clientWidth;if(t.top<0||t.top+s>c)if(i.vertical==="center")t.top=e[r.vertical]>c/2?Math.max(0,c-s):0,t.maxHeight=Math.min(s,c);else if(e[r.vertical]>c/2){const h=Math.min(c,r.vertical==="center"?e.center:r.vertical===i.vertical?e.bottom:e.top);t.maxHeight=Math.min(s,h),t.top=Math.max(0,h-s)}else t.top=Math.max(0,r.vertical==="center"?e.center:r.vertical===i.vertical?e.top:e.bottom),t.maxHeight=Math.min(s,c-t.top);if(t.left<0||t.left+o>u)if(t.maxWidth=Math.min(o,u),i.horizontal==="middle")t.left=e[r.horizontal]>u/2?Math.max(0,u-o):0;else if(e[r.horizontal]>u/2){const h=Math.min(u,r.horizontal==="middle"?e.middle:r.horizontal===i.horizontal?e.right:e.left);t.maxWidth=Math.min(o,h),t.left=Math.max(0,h-t.maxWidth)}else t.left=Math.max(0,r.horizontal==="middle"?e.middle:r.horizontal===i.horizontal?e.left:e.right),t.maxWidth=Math.min(o,u-t.left)}var BC=et({name:"QMenu",inheritAttrs:!1,props:{...pw,...xd,...ks,...Ld,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:Dl},self:{type:String,validator:Dl},offset:{type:Array,validator:Cw},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Od,"click","escapeKey"],setup(t,{slots:e,emit:n,attrs:r}){let i=null,s,o,a;const c=Ze(),{proxy:u}=c,{$q:h}=u,f=Re(null),p=Re(!1),g=H(()=>t.persistent!==!0&&t.noRouteDismiss!==!0),w=xs(t,h),{registerTick:C,removeTick:S}=Md(),{registerTimeout:x}=Fd(),{transitionProps:k,transitionStyle:O}=Vd(t),{localScrollTarget:D,changeScrollEvent:V,unconfigureScrollTarget:j}=gw(t,de),{anchorEl:b,canShow:v}=mw({showing:p}),{hide:_}=Dd({showing:p,canShow:v,handleShow:Je,handleHide:st,hideOnRouteChange:g,processOnMount:!0}),{showPortal:A,hidePortal:T,renderPortal:R}=Nd(c,f,Z,"menu"),E={anchorEl:b,innerRef:f,onClickOutside(U){if(t.persistent!==!0&&p.value===!0)return _(U),(U.type==="touchstart"||U.target.classList.contains("q-dialog__backdrop"))&&Tn(U),!0}},G=H(()=>Nl(t.anchor||(t.cover===!0?"center middle":"bottom start"),h.lang.rtl)),oe=H(()=>t.cover===!0?G.value:Nl(t.self||"top start",h.lang.rtl)),se=H(()=>(t.square===!0?" q-menu--square":"")+(w.value===!0?" q-menu--dark q-dark":"")),_e=H(()=>t.autoClose===!0?{onClick:yt}:{}),he=H(()=>p.value===!0&&t.persistent!==!0);Ve(he,U=>{U===!0?(Iw(Ie),Sw(E)):(Pl(Ie),Ol(E))});function qe(){yw(()=>{let U=f.value;U&&U.contains(document.activeElement)!==!0&&(U=U.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||U.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||U.querySelector("[autofocus], [data-autofocus]")||U,U.focus({preventScroll:!0}))})}function Je(U){if(i=t.noRefocus===!1?document.activeElement:null,Rw(ce),A(),de(),s=void 0,U!==void 0&&(t.touchPosition||t.contextMenu)){const re=Dv(U);if(re.left!==void 0){const{top:Ae,left:Fe}=b.value.getBoundingClientRect();s={left:re.left-Fe,top:re.top-Ae}}}o===void 0&&(o=Ve(()=>h.screen.width+"|"+h.screen.height+"|"+t.self+"|"+t.anchor+"|"+h.lang.rtl,F)),t.noFocus!==!0&&document.activeElement.blur(),C(()=>{F(),t.noFocus!==!0&&qe()}),x(()=>{h.platform.is.ios===!0&&(a=t.autoClose,f.value.click()),F(),A(!0),n("show",U)},t.transitionDuration)}function st(U){S(),T(),De(!0),i!==null&&(U===void 0||U.qClickOutside!==!0)&&(((U&&U.type.indexOf("key")===0?i.closest('[tabindex]:not([tabindex^="-"])'):void 0)||i).focus(),i=null),x(()=>{T(!0),n("hide",U)},t.transitionDuration)}function De(U){s=void 0,o!==void 0&&(o(),o=void 0),(U===!0||p.value===!0)&&(Ph(ce),j(),Ol(E),Pl(Ie)),U!==!0&&(i=null)}function de(){(b.value!==null||t.scrollTarget!==void 0)&&(D.value=Ud(b.value,t.scrollTarget),V(D.value,F))}function yt(U){a!==!0?(ww(u,U),n("click",U)):a=!1}function ce(U){he.value===!0&&t.noFocus!==!0&&aw(f.value,U.target)!==!0&&qe()}function Ie(U){n("escapeKey"),_(U)}function F(){const U=f.value;U===null||b.value===null||Pw({el:U,offset:t.offset,anchorEl:b.value,anchorOrigin:G.value,selfOrigin:oe.value,absoluteOffset:s,fit:t.fit,cover:t.cover,maxHeight:t.maxHeight,maxWidth:t.maxWidth})}function Z(){return Y(No,k.value,()=>p.value===!0?Y("div",{role:"menu",...r,ref:f,tabindex:-1,class:["q-menu q-position-engine scroll"+se.value,r.class],style:[r.style,O.value],..._e.value},On(e.default)):null)}return Nt(De),Object.assign(u,{focus:qe,updatePosition:F}),R}}),jC=et({name:"QToolbar",props:{inset:Boolean},setup(t,{slots:e}){const n=H(()=>"q-toolbar row no-wrap items-center"+(t.inset===!0?" q-toolbar--inset":""));return()=>Y("div",{class:n.value,role:"toolbar"},On(e.default))}});function HC(){const t=Re(!or.value);return t.value===!1&&sr(()=>{t.value=!0}),t}const kw=typeof ResizeObserver!="undefined",dg=kw===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var xh=et({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(t,{emit:e}){let n=null,r,i={width:-1,height:-1};function s(c){c===!0||t.debounce===0||t.debounce==="0"?o():n===null&&(n=setTimeout(o,t.debounce))}function o(){if(n!==null&&(clearTimeout(n),n=null),r){const{offsetWidth:c,offsetHeight:u}=r;(c!==i.width||u!==i.height)&&(i={width:c,height:u},e("resize",i))}}const{proxy:a}=Ze();if(kw===!0){let c;const u=h=>{r=a.$el.parentNode,r?(c=new ResizeObserver(s),c.observe(r),o()):h!==!0&&on(()=>{u(!0)})};return sr(()=>{u()}),Nt(()=>{n!==null&&clearTimeout(n),c!==void 0&&(c.disconnect!==void 0?c.disconnect():r&&c.unobserve(r))}),bi}else{let h=function(){n!==null&&(clearTimeout(n),n=null),u!==void 0&&(u.removeEventListener!==void 0&&u.removeEventListener("resize",s,ut.passive),u=void 0)},f=function(){h(),r&&r.contentDocument&&(u=r.contentDocument.defaultView,u.addEventListener("resize",s,ut.passive),o())};const c=HC();let u;return sr(()=>{on(()=>{r=a.$el,r&&f()})}),Nt(h),a.trigger=s,()=>{if(c.value===!0)return Y("object",{style:dg.style,tabindex:-1,type:"text/html",data:dg.url,"aria-hidden":"true",onLoad:f})}}}}),zC=et({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:e,emit:n}){const{proxy:{$q:r}}=Ze(),i=zt(Cd,us);if(i===us)return console.error("QHeader needs to be child of QLayout"),us;const s=Re(parseInt(t.heightHint,10)),o=Re(!0),a=H(()=>t.reveal===!0||i.view.value.indexOf("H")>-1||r.platform.is.ios&&i.isContainer.value===!0),c=H(()=>{if(t.modelValue!==!0)return 0;if(a.value===!0)return o.value===!0?s.value:0;const k=s.value-i.scroll.value.position;return k>0?k:0}),u=H(()=>t.modelValue!==!0||a.value===!0&&o.value!==!0),h=H(()=>t.modelValue===!0&&u.value===!0&&t.reveal===!0),f=H(()=>"q-header q-layout__section--marginal "+(a.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(u.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),p=H(()=>{const k=i.rows.value.top,O={};return k[0]==="l"&&i.left.space===!0&&(O[r.lang.rtl===!0?"right":"left"]=`${i.left.size}px`),k[2]==="r"&&i.right.space===!0&&(O[r.lang.rtl===!0?"left":"right"]=`${i.right.size}px`),O});function g(k,O){i.update("header",k,O)}function w(k,O){k.value!==O&&(k.value=O)}function C({height:k}){w(s,k),g("size",k)}function S(k){h.value===!0&&w(o,!0),n("focusin",k)}Ve(()=>t.modelValue,k=>{g("space",k),w(o,!0),i.animate()}),Ve(c,k=>{g("offset",k)}),Ve(()=>t.reveal,k=>{k===!1&&w(o,t.modelValue)}),Ve(o,k=>{i.animate(),n("reveal",k)}),Ve(i.scroll,k=>{t.reveal===!0&&w(o,k.direction==="up"||k.position<=t.revealOffset||k.position-k.inflectionPoint<100)});const x={};return i.instances.header=x,t.modelValue===!0&&g("size",s.value),g("space",t.modelValue),g("offset",c.value),Nt(()=>{i.instances.header===x&&(i.instances.header=void 0,g("size",0),g("offset",0),g("space",!1))}),()=>{const k=tw(e.default,[]);return t.elevated===!0&&k.push(Y("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),k.push(Y(xh,{debounce:0,onResize:C})),Y("header",{class:f.value,style:p.value,onFocusin:S},k)}}}),WC=et({name:"QPageContainer",setup(t,{slots:e}){const{proxy:{$q:n}}=Ze(),r=zt(Cd,us);if(r===us)return console.error("QPageContainer needs to be child of QLayout"),us;cs(kR,!0);const i=H(()=>{const s={};return r.header.space===!0&&(s.paddingTop=`${r.header.size}px`),r.right.space===!0&&(s[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${r.right.size}px`),r.footer.space===!0&&(s.paddingBottom=`${r.footer.size}px`),r.left.space===!0&&(s[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${r.left.size}px`),s});return()=>Y("div",{class:"q-page-container",style:i.value},On(e.default))}});const{passive:fg}=ut,KC=["both","horizontal","vertical"];var GC=et({name:"QScrollObserver",props:{axis:{type:String,validator:t=>KC.includes(t),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(t,{emit:e}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let r=null,i,s;Ve(()=>t.scrollTarget,()=>{c(),a()});function o(){r!==null&&r();const f=Math.max(0,Ew(i)),p=Tw(i),g={top:f-n.position.top,left:p-n.position.left};if(t.axis==="vertical"&&g.top===0||t.axis==="horizontal"&&g.left===0)return;const w=Math.abs(g.top)>=Math.abs(g.left)?g.top<0?"up":"down":g.left<0?"left":"right";n.position={top:f,left:p},n.directionChanged=n.direction!==w,n.delta=g,n.directionChanged===!0&&(n.direction=w,n.inflectionPoint=n.position),e("scroll",{...n})}function a(){i=Ud(s,t.scrollTarget),i.addEventListener("scroll",u,fg),u(!0)}function c(){i!==void 0&&(i.removeEventListener("scroll",u,fg),i=void 0)}function u(f){if(f===!0||t.debounce===0||t.debounce==="0")o();else if(r===null){const[p,g]=t.debounce?[setTimeout(o,t.debounce),clearTimeout]:[requestAnimationFrame(o),cancelAnimationFrame];r=()=>{g(p),r=null}}}const{proxy:h}=Ze();return Ve(()=>h.$q.lang.rtl,o),sr(()=>{s=h.$el.parentNode,a()}),Nt(()=>{r!==null&&r(),c()}),Object.assign(h,{trigger:u,getPosition:()=>n}),bi}}),QC=et({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:t=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(t.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(t,{slots:e,emit:n}){const{proxy:{$q:r}}=Ze(),i=Re(null),s=Re(r.screen.height),o=Re(t.container===!0?0:r.screen.width),a=Re({position:0,direction:"down",inflectionPoint:0}),c=Re(0),u=Re(or.value===!0?0:tl()),h=H(()=>"q-layout q-layout--"+(t.container===!0?"containerized":"standard")),f=H(()=>t.container===!1?{minHeight:r.screen.height+"px"}:null),p=H(()=>u.value!==0?{[r.lang.rtl===!0?"left":"right"]:`${u.value}px`}:null),g=H(()=>u.value!==0?{[r.lang.rtl===!0?"right":"left"]:0,[r.lang.rtl===!0?"left":"right"]:`-${u.value}px`,width:`calc(100% + ${u.value}px)`}:null);function w(D){if(t.container===!0||document.qScrollPrevented!==!0){const V={position:D.position.top,direction:D.direction,directionChanged:D.directionChanged,inflectionPoint:D.inflectionPoint.top,delta:D.delta.top};a.value=V,t.onScroll!==void 0&&n("scroll",V)}}function C(D){const{height:V,width:j}=D;let b=!1;s.value!==V&&(b=!0,s.value=V,t.onScrollHeight!==void 0&&n("scrollHeight",V),x()),o.value!==j&&(b=!0,o.value=j),b===!0&&t.onResize!==void 0&&n("resize",D)}function S({height:D}){c.value!==D&&(c.value=D,x())}function x(){if(t.container===!0){const D=s.value>c.value?tl():0;u.value!==D&&(u.value=D)}}let k=null;const O={instances:{},view:H(()=>t.view),isContainer:H(()=>t.container),rootRef:i,height:s,containerHeight:c,scrollbarWidth:u,totalWidth:H(()=>o.value+u.value),rows:H(()=>{const D=t.view.toLowerCase().split(" ");return{top:D[0].split(""),middle:D[1].split(""),bottom:D[2].split("")}}),header:dn({size:0,offset:0,space:!1}),right:dn({size:300,offset:0,space:!1}),footer:dn({size:0,offset:0,space:!1}),left:dn({size:300,offset:0,space:!1}),scroll:a,animate(){k!==null?clearTimeout(k):document.body.classList.add("q-body--layout-animate"),k=setTimeout(()=>{k=null,document.body.classList.remove("q-body--layout-animate")},155)},update(D,V,j){O[D][V]=j}};if(cs(Cd,O),tl()>0){let j=function(){D=null,V.classList.remove("hide-scrollbar")},b=function(){if(D===null){if(V.scrollHeight>r.screen.height)return;V.classList.add("hide-scrollbar")}else clearTimeout(D);D=setTimeout(j,300)},v=function(_){D!==null&&_==="remove"&&(clearTimeout(D),j()),window[`${_}EventListener`]("resize",b)},D=null;const V=document.body;Ve(()=>t.container!==!0?"add":"remove",v),t.container!==!0&&v("add"),dc(()=>{v("remove")})}return()=>{const D=rs(e.default,[Y(GC,{onScroll:w}),Y(xh,{onResize:C})]),V=Y("div",{class:h.value,style:f.value,ref:t.container===!0?void 0:i,tabindex:-1},D);return t.container===!0?Y("div",{class:"q-layout-container overflow-hidden",ref:i},[Y(xh,{onResize:S}),Y("div",{class:"absolute-full",style:p.value},[Y("div",{class:"scroll",style:g.value},[V])])]):V}}});function pg(t){if(t===!1)return 0;if(t===!0||t===void 0)return 1;const e=parseInt(t,10);return isNaN(e)?0:e}var nl=ew({name:"close-popup",beforeMount(t,{value:e}){const n={depth:pg(e),handler(r){n.depth!==0&&setTimeout(()=>{const i=xC(t);i!==void 0&&OC(i,r,n.depth)})},handlerKey(r){Ii(r,13)===!0&&n.handler(r)}};t.__qclosepopup=n,t.addEventListener("click",n.handler),t.addEventListener("keyup",n.handlerKey)},updated(t,{value:e,oldValue:n}){e!==n&&(t.__qclosepopup.depth=pg(e))},beforeUnmount(t){const e=t.__qclosepopup;t.removeEventListener("click",e.handler),t.removeEventListener("keyup",e.handlerKey),delete t.__qclosepopup}});function YC(t){return hd()?(vy(t),!0):!1}const ra=typeof window!="undefined"&&typeof document!="undefined";typeof WorkerGlobalScope!="undefined"&&globalThis instanceof WorkerGlobalScope;const tU=t=>t!=null,JC=Object.prototype.toString,XC=t=>JC.call(t)==="[object Object]",Oh=()=>{},nU=ZC();function ZC(){var t,e;return ra&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((e=window==null?void 0:window.navigator)==null?void 0:e.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function eP(...t){if(t.length!==1)return Vy(...t);const e=t[0];return typeof e=="function"?cc(mI(()=>({get:e,set:Oh}))):Re(e)}function tP(t,e){function n(...r){return new Promise((i,s)=>{Promise.resolve(t(()=>e.apply(this,r),{fn:e,thisArg:this,args:r})).then(i).catch(s)})}return n}const xw=t=>t();function nP(t=xw,e={}){const{initialState:n="active"}=e,r=eP(n==="active");function i(){r.value=!1}function s(){r.value=!0}const o=(...a)=>{r.value&&t(...a)};return{isActive:cc(r),pause:i,resume:s,eventFilter:o}}function Dh(t,e=!1,n="Timeout"){return new Promise((r,i)=>{setTimeout(e?()=>i(n):r,t)})}function $u(t){return Array.isArray(t)?t:[t]}function rP(t){return t||Ze()}function iP(t,e,n={}){const{eventFilter:r=xw,...i}=n;return Ve(t,tP(r,e),i)}function sP(t,e,n={}){const{eventFilter:r,initialState:i="active",...s}=n,{eventFilter:o,pause:a,resume:c,isActive:u}=nP(r,{initialState:i});return{stop:iP(t,e,{...s,eventFilter:o}),pause:a,resume:c,isActive:u}}function oP(t,e=!0,n){rP()?sr(t,n):e?t():on(t)}function Nh(t,e=!1){function n(f,{flush:p="sync",deep:g=!1,timeout:w,throwOnTimeout:C}={}){let S=null;const k=[new Promise(O=>{S=Ve(t,D=>{f(D)!==e&&(S?S():on(()=>S==null?void 0:S()),O(D))},{flush:p,deep:g,immediate:!0})})];return w!=null&&k.push(Dh(w,C).then(()=>bn(t)).finally(()=>S==null?void 0:S())),Promise.race(k)}function r(f,p){if(!Qe(f))return n(D=>D===f,p);const{flush:g="sync",deep:w=!1,timeout:C,throwOnTimeout:S}=p!=null?p:{};let x=null;const O=[new Promise(D=>{x=Ve([t,f],([V,j])=>{e!==(V===j)&&(x?x():on(()=>x==null?void 0:x()),D(V))},{flush:g,deep:w,immediate:!0})})];return C!=null&&O.push(Dh(C,S).then(()=>bn(t)).finally(()=>(x==null||x(),bn(t)))),Promise.race(O)}function i(f){return n(p=>Boolean(p),f)}function s(f){return r(null,f)}function o(f){return r(void 0,f)}function a(f){return n(Number.isNaN,f)}function c(f,p){return n(g=>{const w=Array.from(g);return w.includes(f)||w.includes(bn(f))},p)}function u(f){return h(1,f)}function h(f=1,p){let g=-1;return n(()=>(g+=1,g>=f),p)}return Array.isArray(bn(t))?{toMatch:n,toContains:c,changed:u,changedTimes:h,get not(){return Nh(t,!e)}}:{toMatch:n,toBe:r,toBeTruthy:i,toBeNull:s,toBeNaN:a,toBeUndefined:o,changed:u,changedTimes:h,get not(){return Nh(t,!e)}}}function aP(t){return Nh(t)}function lP(t,e,n){return Ve(t,e,{...n,immediate:!0})}const Ll=ra?window:void 0;ra&&window.document;ra&&window.navigator;ra&&window.location;function cP(t){var e;const n=bn(t);return(e=n==null?void 0:n.$el)!=null?e:n}function mg(...t){const e=[],n=()=>{e.forEach(a=>a()),e.length=0},r=(a,c,u,h)=>(a.addEventListener(c,u,h),()=>a.removeEventListener(c,u,h)),i=H(()=>{const a=$u(bn(t[0])).filter(c=>c!=null);return a.every(c=>typeof c!="string")?a:void 0}),s=lP(()=>{var a,c;return[(c=(a=i.value)==null?void 0:a.map(u=>cP(u)))!=null?c:[Ll].filter(u=>u!=null),$u(bn(i.value?t[1]:t[0])),$u(qt(i.value?t[2]:t[1])),bn(i.value?t[3]:t[2])]},([a,c,u,h])=>{if(n(),!(a!=null&&a.length)||!(c!=null&&c.length)||!(u!=null&&u.length))return;const f=XC(h)?{...h}:h;e.push(...a.flatMap(p=>c.flatMap(g=>u.map(w=>r(p,g,w,f)))))},{flush:"post"}),o=()=>{s(),n()};return YC(n),o}function rU(t,e,n){const{immediate:r=!0,delay:i=0,onError:s=Oh,onSuccess:o=Oh,resetOnExecute:a=!0,shallow:c=!0,throwError:u}=n!=null?n:{},h=c?ns(e):Re(e),f=ns(!1),p=ns(!1),g=ns(void 0);async function w(x=0,...k){a&&(h.value=e),g.value=void 0,f.value=!1,p.value=!0,x>0&&await Dh(x);const O=typeof t=="function"?t(...k):t;try{const D=await O;h.value=D,f.value=!0,o(D)}catch(D){if(g.value=D,s(D),u)throw D}finally{p.value=!1}return h.value}r&&w(i);const C={state:h,isReady:f,isLoading:p,error:g,execute:w};function S(){return new Promise((x,k)=>{aP(p).toBe(!1).then(()=>x(C)).catch(k)})}return{...C,then(x,k){return S().then(x,k)}}}const Fa=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Ua="__vueuse_ssr_handlers__",uP=hP();function hP(){return Ua in Fa||(Fa[Ua]=Fa[Ua]||{}),Fa[Ua]}function dP(t,e){return uP[t]||e}function fP(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const Ow={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},gg="vueuse-storage";function pP(t,e,n,r={}){var i;const{flush:s="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:h,window:f=Ll,eventFilter:p,onError:g=T=>{console.error(T)},initOnMounted:w}=r,C=(h?ns:Re)(typeof e=="function"?e():e),S=H(()=>bn(t));if(!n)try{n=dP("getDefaultStorage",()=>{var T;return(T=Ll)==null?void 0:T.localStorage})()}catch(T){g(T)}if(!n)return C;const x=bn(e),k=fP(x),O=(i=r.serializer)!=null?i:Ow[k],{pause:D,resume:V}=sP(C,()=>b(C.value),{flush:s,deep:o,eventFilter:p});Ve(S,()=>_(),{flush:s}),f&&a&&oP(()=>{n instanceof Storage?mg(f,"storage",_,{passive:!0}):mg(f,gg,A),w&&_()}),w||_();function j(T,R){if(f){const E={key:S.value,oldValue:T,newValue:R,storageArea:n};f.dispatchEvent(n instanceof Storage?new StorageEvent("storage",E):new CustomEvent(gg,{detail:E}))}}function b(T){try{const R=n.getItem(S.value);if(T==null)j(R,null),n.removeItem(S.value);else{const E=O.write(T);R!==E&&(n.setItem(S.value,E),j(R,E))}}catch(R){g(R)}}function v(T){const R=T?T.newValue:n.getItem(S.value);if(R==null)return c&&x!=null&&n.setItem(S.value,O.write(x)),x;if(!T&&u){const E=O.read(R);return typeof u=="function"?u(E,x):k==="object"&&!Array.isArray(E)?{...x,...E}:E}else return typeof R!="string"?R:O.read(R)}function _(T){if(!(T&&T.storageArea!==n)){if(T&&T.key==null){C.value=x;return}if(!(T&&T.key!==S.value)){D();try{(T==null?void 0:T.newValue)!==O.write(C.value)&&(C.value=v(T))}catch(R){g(R)}finally{T?on(V):V()}}}}function A(T){_(T.detail)}return C}function mP(t,e,n={}){const{window:r=Ll}=n;return pP(t,e,r==null?void 0:r.localStorage,n)}const Dw=HR("auth",()=>{const t=mP("auth/user",null,{serializer:Ow.object}),e=H(()=>!!t.value),n=H(()=>{var s;return((s=t.value)==null?void 0:s.uid)||null});return{uid:n,user:t,isAuthenticated:e,setUser:s=>{t.value=s,s?t.value={uid:s.uid,photoURL:s.photoURL,displayName:s.displayName,email:s.email,emailVerified:s.emailVerified}:t.value=null},hasOwnContent:s=>e.value?n.value===s:!1}}),gP=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},_P=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Lw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let p=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(p=64)),r.push(n[h],n[f],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Nw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_P(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw new yP;const p=s<<2|a>>4;if(r.push(p),u!==64){const g=a<<4&240|u>>2;if(r.push(g),f!==64){const w=u<<6&192|f;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class yP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vP=function(t){const e=Nw(t);return Lw.encodeByteArray(e,!0)},Vl=function(t){return vP(t).replace(/\./g,"")},Vw=function(t){try{return Lw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wP(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EP=()=>wP().__FIREBASE_DEFAULTS__,TP=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bP=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Vw(t[1]);return e&&JSON.parse(e)},Ic=()=>{try{return gP()||EP()||TP()||bP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Mw=t=>{var e,n;return(n=(e=Ic())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Fw=t=>{const e=Mw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Uw=()=>{var t;return(t=Ic())===null||t===void 0?void 0:t.config},$w=t=>{var e;return(e=Ic())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Vl(JSON.stringify(n)),Vl(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function AP(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Lt())}function RP(){var t;const e=(t=Ic())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function SP(){return typeof navigator!="undefined"&&navigator.userAgent==="Cloudflare-Workers"}function Bw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function CP(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function PP(){const t=Lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function kP(){return!RP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function jw(){try{return typeof indexedDB=="object"}catch{return!1}}function Hw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function xP(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OP="FirebaseError";class yn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=OP,Object.setPrototypeOf(this,yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ni.prototype.create)}}class Ni{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?DP(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new yn(i,a,r)}}function DP(t,e){return t.replace(NP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const NP=/\{\$([^}]+)}/g;function LP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $r(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(_g(s)&&_g(o)){if(!$r(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function _g(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function so(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function oo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function VP(t,e){const n=new MP(t,e);return n.subscribe.bind(n)}class MP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");FP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=qu),i.error===void 0&&(i.error=qu),i.complete===void 0&&(i.complete=qu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function FP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qu(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP=1e3,$P=2,qP=4*60*60*1e3,BP=.5;function yg(t,e=UP,n=$P){const r=e*Math.pow(n,t),i=Math.round(BP*r*(Math.random()-.5)*2);return Math.min(qP,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t){return t&&t._delegate?t._delegate:t}class gn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new IP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zP(e))try{this.getOrInitializeService({instanceIdentifier:li})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=li){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=li){return this.instances.has(e)}getOptions(e=li){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:HP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=li){return this.component?this.component.multipleInstances?e:li:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function HP(t){return t===li?void 0:t}function zP(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new jP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Se||(Se={}));const KP={debug:Se.DEBUG,verbose:Se.VERBOSE,info:Se.INFO,warn:Se.WARN,error:Se.ERROR,silent:Se.SILENT},GP=Se.INFO,QP={[Se.DEBUG]:"log",[Se.VERBOSE]:"log",[Se.INFO]:"info",[Se.WARN]:"warn",[Se.ERROR]:"error"},YP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=QP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ac{constructor(e){this.name=e,this._logLevel=GP,this._logHandler=YP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?KP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Se.DEBUG,...e),this._logHandler(this,Se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Se.VERBOSE,...e),this._logHandler(this,Se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Se.INFO,...e),this._logHandler(this,Se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Se.WARN,...e),this._logHandler(this,Se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Se.ERROR,...e),this._logHandler(this,Se.ERROR,...e)}}const JP=(t,e)=>e.some(n=>t instanceof n);let vg,wg;function XP(){return vg||(vg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ZP(){return wg||(wg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zw=new WeakMap,Lh=new WeakMap,Ww=new WeakMap,Bu=new WeakMap,$d=new WeakMap;function ek(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Lr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&zw.set(n,t)}).catch(()=>{}),$d.set(e,t),e}function tk(t){if(Lh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Lh.set(t,e)}let Vh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Lh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ww.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Lr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function nk(t){Vh=t(Vh)}function rk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ju(this),e,...n);return Ww.set(r,e.sort?e.sort():[e]),Lr(r)}:ZP().includes(t)?function(...e){return t.apply(ju(this),e),Lr(zw.get(this))}:function(...e){return Lr(t.apply(ju(this),e))}}function ik(t){return typeof t=="function"?rk(t):(t instanceof IDBTransaction&&tk(t),JP(t,XP())?new Proxy(t,Vh):t)}function Lr(t){if(t instanceof IDBRequest)return ek(t);if(Bu.has(t))return Bu.get(t);const e=ik(t);return e!==t&&(Bu.set(t,e),$d.set(e,t)),e}const ju=t=>$d.get(t);function Kw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Lr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Lr(o.result),c.oldVersion,c.newVersion,Lr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const sk=["get","getKey","getAll","getAllKeys","count"],ok=["put","add","delete","clear"],Hu=new Map;function Eg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Hu.get(e))return Hu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=ok.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||sk.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return Hu.set(e,s),s}nk(t=>({...t,get:(e,n,r)=>Eg(e,n)||t.get(e,n,r),has:(e,n)=>!!Eg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function lk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mh="@firebase/app",Tg="0.11.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=new Ac("@firebase/app"),ck="@firebase/app-compat",uk="@firebase/analytics-compat",hk="@firebase/analytics",dk="@firebase/app-check-compat",fk="@firebase/app-check",pk="@firebase/auth",mk="@firebase/auth-compat",gk="@firebase/database",_k="@firebase/data-connect",yk="@firebase/database-compat",vk="@firebase/functions",wk="@firebase/functions-compat",Ek="@firebase/installations",Tk="@firebase/installations-compat",bk="@firebase/messaging",Ik="@firebase/messaging-compat",Ak="@firebase/performance",Rk="@firebase/performance-compat",Sk="@firebase/remote-config",Ck="@firebase/remote-config-compat",Pk="@firebase/storage",kk="@firebase/storage-compat",xk="@firebase/firestore",Ok="@firebase/vertexai",Dk="@firebase/firestore-compat",Nk="firebase",Lk="11.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh="[DEFAULT]",Vk={[Mh]:"fire-core",[ck]:"fire-core-compat",[hk]:"fire-analytics",[uk]:"fire-analytics-compat",[fk]:"fire-app-check",[dk]:"fire-app-check-compat",[pk]:"fire-auth",[mk]:"fire-auth-compat",[gk]:"fire-rtdb",[_k]:"fire-data-connect",[yk]:"fire-rtdb-compat",[vk]:"fire-fn",[wk]:"fire-fn-compat",[Ek]:"fire-iid",[Tk]:"fire-iid-compat",[bk]:"fire-fcm",[Ik]:"fire-fcm-compat",[Ak]:"fire-perf",[Rk]:"fire-perf-compat",[Sk]:"fire-rc",[Ck]:"fire-rc-compat",[Pk]:"fire-gcs",[kk]:"fire-gcs-compat",[xk]:"fire-fst",[Dk]:"fire-fst-compat",[Ok]:"fire-vertex","fire-js":"fire-js",[Nk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=new Map,Mk=new Map,Uh=new Map;function bg(t,e){try{t.container.addComponent(e)}catch(n){ar.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Pn(t){const e=t.name;if(Uh.has(e))return ar.debug(`There were multiple attempts to register component ${e}.`),!1;Uh.set(e,t);for(const n of Ml.values())bg(n,t);for(const n of Mk.values())bg(n,t);return!0}function Yr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ht(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},Vr=new Ni("app","Firebase",Fk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li=Lk;function Gw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Fh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Vr.create("bad-app-name",{appName:String(i)});if(n||(n=Uw()),!n)throw Vr.create("no-options");const s=Ml.get(i);if(s){if($r(n,s.options)&&$r(r,s.config))return s;throw Vr.create("duplicate-app",{appName:i})}const o=new WP(i);for(const c of Uh.values())o.addComponent(c);const a=new Uk(n,r,o);return Ml.set(i,a),a}function Rc(t=Fh){const e=Ml.get(t);if(!e&&t===Fh&&Uw())return Gw();if(!e)throw Vr.create("no-app",{appName:t});return e}function Yt(t,e,n){var r;let i=(r=Vk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ar.warn(a.join(" "));return}Pn(new gn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k="firebase-heartbeat-database",qk=1,$o="firebase-heartbeat-store";let zu=null;function Qw(){return zu||(zu=Kw($k,qk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore($o)}catch(n){console.warn(n)}}}}).catch(t=>{throw Vr.create("idb-open",{originalErrorMessage:t.message})})),zu}async function Bk(t){try{const n=(await Qw()).transaction($o),r=await n.objectStore($o).get(Yw(t));return await n.done,r}catch(e){if(e instanceof yn)ar.warn(e.message);else{const n=Vr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ar.warn(n.message)}}}async function Ig(t,e){try{const r=(await Qw()).transaction($o,"readwrite");await r.objectStore($o).put(e,Yw(t)),await r.done}catch(n){if(n instanceof yn)ar.warn(n.message);else{const r=Vr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ar.warn(r.message)}}}function Yw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jk=1024,Hk=30;class zk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Kk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ag();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>Hk){const o=Gk(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ar.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ag(),{heartbeatsToSend:r,unsentEntries:i}=Wk(this._heartbeatsCache.heartbeats),s=Vl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return ar.warn(n),""}}}function Ag(){return new Date().toISOString().substring(0,10)}function Wk(t,e=jk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Rg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Rg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Kk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jw()?Hw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Bk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ig(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ig(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Rg(t){return Vl(JSON.stringify({version:2,heartbeats:t})).length}function Gk(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qk(t){Pn(new gn("platform-logger",e=>new ak(e),"PRIVATE")),Pn(new gn("heartbeat",e=>new zk(e),"PRIVATE")),Yt(Mh,Tg,t),Yt(Mh,Tg,"esm2017"),Yt("fire-js","")}Qk("");function qd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Jw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Yk=Jw,Xw=new Ni("auth","Firebase",Jw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl=new Ac("@firebase/auth");function Jk(t,...e){Fl.logLevel<=Se.WARN&&Fl.warn(`Auth (${Li}): ${t}`,...e)}function rl(t,...e){Fl.logLevel<=Se.ERROR&&Fl.error(`Auth (${Li}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(t,...e){throw jd(t,...e)}function Rn(t,...e){return jd(t,...e)}function Bd(t,e,n){const r=Object.assign(Object.assign({},Yk()),{[e]:n});return new Ni("auth","Firebase",r).create(e,{appName:t.name})}function $n(t){return Bd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xk(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&_n(t,"argument-error"),Bd(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function jd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Xw.create(t,...e)}function ue(t,e,...n){if(!t)throw jd(e,...n)}function er(t){const e="INTERNAL ASSERTION FAILED: "+t;throw rl(e),new Error(e)}function lr(t,e){t||er(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Zk(){return Sg()==="http:"||Sg()==="https:"}function Sg(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ex(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Zk()||Bw()||"connection"in navigator)?navigator.onLine:!0}function tx(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n){this.shortDelay=e,this.longDelay=n,lr(n>e,"Short delay should be less than long delay!"),this.isMobile=AP()||CP()}get(){return ex()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(t,e){lr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;er("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;er("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;er("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx=new sa(3e4,6e4);function fr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Dn(t,e,n,r,i={}){return eE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ia(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},s);return SP()||(u.referrerPolicy="no-referrer"),Zw.fetch()(tE(t,t.config.apiHost,n,a),u)})}async function eE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},nx),e);try{const i=new sx(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw $a(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw $a(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw $a(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw $a(t,"user-disabled",o);const h=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Bd(t,h,u);_n(t,h)}}catch(i){if(i instanceof yn)throw i;_n(t,"network-request-failed",{message:String(i)})}}async function oa(t,e,n,r,i={}){const s=await Dn(t,e,n,r,i);return"mfaPendingCredential"in s&&_n(t,"multi-factor-auth-required",{_serverResponse:s}),s}function tE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Hd(t.config,i):`${t.config.apiScheme}://${i}`}function ix(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class sx{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Rn(this.auth,"network-request-failed")),rx.get())})}}function $a(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Rn(t,e,r);return i.customData._tokenResponse=n,i}function Cg(t){return t!==void 0&&t.enterprise!==void 0}class ox{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return ix(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function ax(t,e){return Dn(t,"GET","/v2/recaptchaConfig",fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lx(t,e){return Dn(t,"POST","/v1/accounts:delete",e)}async function nE(t,e){return Dn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function cx(t,e=!1){const n=$e(t),r=await n.getIdToken(e),i=zd(r);ue(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:To(Wu(i.auth_time)),issuedAtTime:To(Wu(i.iat)),expirationTime:To(Wu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Wu(t){return Number(t)*1e3}function zd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return rl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Vw(n);return i?JSON.parse(i):(rl("Failed to decode base64 JWT payload"),null)}catch(i){return rl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Pg(t){const e=zd(t);return ue(e,"internal-error"),ue(typeof e.exp!="undefined","internal-error"),ue(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ai(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof yn&&ux(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ux({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=To(this.lastLoginAt),this.creationTime=To(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ul(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ai(t,nE(n,{idToken:r}));ue(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?rE(s.providerUserInfo):[],a=fx(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=c?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new qh(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function dx(t){const e=$e(t);await Ul(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fx(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function rE(t){return t.map(e=>{var{providerId:n}=e,r=qd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function px(t,e){const n=await eE(t,{},async()=>{const r=ia({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=tE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Zw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function mx(t,e){return Dn(t,"POST","/v2/accounts:revokeToken",fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ue(e.idToken,"internal-error"),ue(typeof e.idToken!="undefined","internal-error"),ue(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Pg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ue(e.length!==0,"internal-error");const n=Pg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ue(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await px(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ds;return r&&(ue(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ue(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ue(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ds,this.toJSON())}_performRefresh(){return er("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(t,e){ue(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class tr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=qd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new hx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new qh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ai(this,this.stsTokenManager.getToken(this.auth,e));return ue(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return cx(this,e)}reload(){return dx(this)}_assign(e){this!==e&&(ue(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new tr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ul(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ht(this.auth.app))return Promise.reject($n(this.auth));const e=await this.getIdToken();return await Ai(this,lx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,u,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,x=(u=n.createdAt)!==null&&u!==void 0?u:void 0,k=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:O,emailVerified:D,isAnonymous:V,providerData:j,stsTokenManager:b}=n;ue(O&&b,e,"internal-error");const v=ds.fromJSON(this.name,b);ue(typeof O=="string",e,"internal-error"),Tr(f,e.name),Tr(p,e.name),ue(typeof D=="boolean",e,"internal-error"),ue(typeof V=="boolean",e,"internal-error"),Tr(g,e.name),Tr(w,e.name),Tr(C,e.name),Tr(S,e.name),Tr(x,e.name),Tr(k,e.name);const _=new tr({uid:O,auth:e,email:p,emailVerified:D,displayName:f,isAnonymous:V,photoURL:w,phoneNumber:g,tenantId:C,stsTokenManager:v,createdAt:x,lastLoginAt:k});return j&&Array.isArray(j)&&(_.providerData=j.map(A=>Object.assign({},A))),S&&(_._redirectEventId=S),_}static async _fromIdTokenResponse(e,n,r=!1){const i=new ds;i.updateFromServerResponse(n);const s=new tr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ul(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ue(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?rE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new ds;a.updateFromIdToken(r);const c=new tr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new qh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg=new Map;function nr(t){lr(t instanceof Function,"Expected a class definition");let e=kg.get(t);return e?(lr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,kg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}iE.type="NONE";const xg=iE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(t,e,n){return`firebase:${t}:${e}:${n}`}class fs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=il(this.userKey,i.apiKey,s),this.fullPersistenceKey=il("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?tr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new fs(nr(xg),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||nr(xg);const o=il(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const f=tr._fromJSON(e,h);u!==s&&(a=f),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new fs(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new fs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(uE(e))return"Blackberry";if(hE(e))return"Webos";if(oE(e))return"Safari";if((e.includes("chrome/")||aE(e))&&!e.includes("edge/"))return"Chrome";if(cE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function sE(t=Lt()){return/firefox\//i.test(t)}function oE(t=Lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function aE(t=Lt()){return/crios\//i.test(t)}function lE(t=Lt()){return/iemobile/i.test(t)}function cE(t=Lt()){return/android/i.test(t)}function uE(t=Lt()){return/blackberry/i.test(t)}function hE(t=Lt()){return/webos/i.test(t)}function Wd(t=Lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function gx(t=Lt()){var e;return Wd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _x(){return PP()&&document.documentMode===10}function dE(t=Lt()){return Wd(t)||cE(t)||hE(t)||uE(t)||/windows phone/i.test(t)||lE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(t,e=[]){let n;switch(t){case"Browser":n=Og(Lt());break;case"Worker":n=`${Og(Lt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Li}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vx(t,e={}){return Dn(t,"GET","/v2/passwordPolicy",fr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wx=6;class Ex{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:wx,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dg(this),this.idTokenSubscription=new Dg(this),this.beforeStateQueue=new yx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=nr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await fs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await nE(this,{idToken:e}),r=await tr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ht(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ul(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=tx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ht(this.app))return Promise.reject($n(this));const n=e?$e(e):null;return n&&ue(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ue(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ht(this.app)?Promise.reject($n(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ht(this.app)?Promise.reject($n(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vx(this),n=new Ex(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ni("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await mx(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&nr(e)||this._popupRedirectResolver;ue(n,this,"argument-error"),this.redirectPersistenceManager=await fs.create(this,[nr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ue(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(Ht(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Jk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function pr(t){return $e(t)}class Dg{constructor(e){this.auth=e,this.observer=null,this.addObserver=VP(n=>this.observer=n)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bx(t){Sc=t}function pE(t){return Sc.loadJS(t)}function Ix(){return Sc.recaptchaEnterpriseScript}function Ax(){return Sc.gapiScript}function Rx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Sx{constructor(){this.enterprise=new Cx}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Cx{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Px="recaptcha-enterprise",mE="NO_RECAPTCHA";class kx{constructor(e){this.type=Px,this.auth=pr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{ax(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new ox(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;Cg(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(mE)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Sx().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Cg(window.grecaptcha))i(a,s,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Ix();c.length!==0&&(c+=a),pE(c).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Zs(t,e,n,r=!1,i=!1){const s=new kx(t);let o;if(i)o=mE;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function $l(t,e,n,r,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Zs(t,e,n,n==="getOobCode");return r(t,a)}else return r(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Zs(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(a)});else if(i==="PHONE_PROVIDER")if(!((o=t._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await Zs(t,e,n);return r(t,a).catch(async c=>{var u;if(((u=t._getRecaptchaConfig())===null||u===void 0?void 0:u.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(c.code==="auth/missing-recaptcha-token"||c.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const h=await Zs(t,e,n,!1,!0);return r(t,h)}return Promise.reject(c)})}else{const a=await Zs(t,e,n,!1,!0);return r(t,a)}else return Promise.reject(i+" provider is not supported.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xx(t,e){const n=Yr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if($r(s,e!=null?e:{}))return i;_n(i,"already-initialized")}return n.initialize({options:e})}function Ox(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(nr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Dx(t,e,n){const r=pr(t);ue(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=gE(e),{host:o,port:a}=Nx(e),c=a===null?"":`:${a}`,u={url:`${s}//${o}${c}/`},h=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){ue(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ue($r(u,r.config.emulator)&&$r(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,i||Lx()}function gE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Nx(t){const e=gE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ng(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ng(o)}}}function Ng(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Lx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return er("not implemented")}_getIdTokenResponse(e){return er("not implemented")}_linkToIdToken(e,n){return er("not implemented")}_getReauthenticationResolver(e){return er("not implemented")}}async function Vx(t,e){return Dn(t,"POST","/v1/accounts:update",e)}async function Mx(t,e){return Dn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fx(t,e){return oa(t,"POST","/v1/accounts:signInWithPassword",fr(t,e))}async function _E(t,e){return Dn(t,"POST","/v1/accounts:sendOobCode",fr(t,e))}async function Ux(t,e){return _E(t,e)}async function $x(t,e){return _E(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qx(t,e){return oa(t,"POST","/v1/accounts:signInWithEmailLink",fr(t,e))}async function Bx(t,e){return oa(t,"POST","/v1/accounts:signInWithEmailLink",fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo extends Kd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new qo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new qo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $l(e,n,"signInWithPassword",Fx,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return qx(e,{email:this._email,oobCode:this._password});default:_n(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $l(e,r,"signUpPassword",Mx,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Bx(e,{idToken:n,email:this._email,oobCode:this._password});default:_n(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ps(t,e){return oa(t,"POST","/v1/accounts:signInWithIdp",fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jx="http://localhost";class Ri extends Kd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ri(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):_n("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=qd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ri(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ps(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ps(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ps(e,n)}buildRequest(){const e={requestUri:jx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ia(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function zx(t){const e=so(oo(t)).link,n=e?so(oo(e)).deep_link_id:null,r=so(oo(t)).deep_link_id;return(r?so(oo(r)).link:null)||r||n||e||t}class Gd{constructor(e){var n,r,i,s,o,a;const c=so(oo(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,h=(r=c.oobCode)!==null&&r!==void 0?r:null,f=Hx((i=c.mode)!==null&&i!==void 0?i:null);ue(u&&h&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=h,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=zx(e);try{return new Gd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(){this.providerId=Os.PROVIDER_ID}static credential(e,n){return qo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Gd.parseLink(n);return ue(r,"argument-error"),qo._fromEmailAndCode(e,r.code,r.tenantId)}}Os.PROVIDER_ID="password";Os.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Os.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa extends Qd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends aa{constructor(){super("facebook.com")}static credential(e){return Ri._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pr.credential(e.oauthAccessToken)}catch{return null}}}Pr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends aa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ri._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Zn.credential(n,r)}catch{return null}}}Zn.GOOGLE_SIGN_IN_METHOD="google.com";Zn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends aa{constructor(){super("github.com")}static credential(e){return Ri._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kr.credential(e.oauthAccessToken)}catch{return null}}}kr.GITHUB_SIGN_IN_METHOD="github.com";kr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends aa{constructor(){super("twitter.com")}static credential(e,n){return Ri._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return xr.credential(n,r)}catch{return null}}}xr.TWITTER_SIGN_IN_METHOD="twitter.com";xr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wx(t,e){return oa(t,"POST","/v1/accounts:signUp",fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await tr._fromIdTokenResponse(e,r,i),o=Lg(r);return new Si({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Lg(r);return new Si({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Lg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql extends yn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ql.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ql(e,n,r,i)}}function yE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ql._fromErrorAndOperation(t,s,e,r):s})}async function Kx(t,e,n=!1){const r=await Ai(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Si._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gx(t,e,n=!1){const{auth:r}=t;if(Ht(r.app))return Promise.reject($n(r));const i="reauthenticate";try{const s=await Ai(t,yE(r,i,e,t),n);ue(s.idToken,r,"internal-error");const o=zd(s.idToken);ue(o,r,"internal-error");const{sub:a}=o;return ue(t.uid===a,r,"user-mismatch"),Si._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&_n(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vE(t,e,n=!1){if(Ht(t.app))return Promise.reject($n(t));const r="signIn",i=await yE(t,r,e),s=await Si._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Qx(t,e){return vE(pr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wE(t,e,n){var r;ue(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),ue(typeof n.dynamicLinkDomain=="undefined"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),ue(typeof n.linkDomain=="undefined"||n.linkDomain.length>0,t,"invalid-hosting-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.linkDomain=n.linkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(ue(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(ue(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EE(t){const e=pr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Yx(t,e,n){const r=pr(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&wE(r,i,n),await $l(r,i,"getOobCode",$x,"EMAIL_PASSWORD_PROVIDER")}async function Jx(t,e,n){if(Ht(t.app))return Promise.reject($n(t));const r=pr(t),o=await $l(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Wx,"EMAIL_PASSWORD_PROVIDER").catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&EE(t),c}),a=await Si._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Xx(t,e,n){return Ht(t.app)?Promise.reject($n(t)):Qx($e(t),Os.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&EE(t),r})}async function TE(t,e){const n=$e(t),r=await t.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:r};e&&wE(n.auth,i,e);const{email:s}=await Ux(n.auth,i);s!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zx(t,e){return Dn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bE(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=$e(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ai(r,Zx(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function eO(t,e){const n=$e(t);return Ht(n.auth.app)?Promise.reject($n(n.auth)):IE(n,e,null)}function tO(t,e){return IE($e(t),null,e)}async function IE(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Ai(t,Vx(r,s));await t._updateTokensIfNecessary(o,!0)}function nO(t,e,n,r){return $e(t).onIdTokenChanged(e,n,r)}function rO(t,e,n){return $e(t).beforeAuthStateChanged(e,n)}function iO(t,e,n,r){return $e(t).onAuthStateChanged(e,n,r)}function sO(t){return $e(t).signOut()}const Bl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Bl,"1"),this.storage.removeItem(Bl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oO=1e3,aO=10;class RE extends AE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=dE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);_x()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,aO):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},oO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}RE.type="LOCAL";const lO=RE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE extends AE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}SE.type="SESSION";const CE=SE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cO(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Cc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),c=await cO(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=Yd("",20);i.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(h),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(){return window}function hO(t){qn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(){return typeof qn().WorkerGlobalScope!="undefined"&&typeof qn().importScripts=="function"}async function dO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function pO(){return PE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE="firebaseLocalStorageDb",mO=1,jl="firebaseLocalStorage",xE="fbase_key";class la{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Pc(t,e){return t.transaction([jl],e?"readwrite":"readonly").objectStore(jl)}function gO(){const t=indexedDB.deleteDatabase(kE);return new la(t).toPromise()}function Bh(){const t=indexedDB.open(kE,mO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(jl,{keyPath:xE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(jl)?e(r):(r.close(),await gO(),e(await Bh()))})})}async function Vg(t,e,n){const r=Pc(t,!0).put({[xE]:e,value:n});return new la(r).toPromise()}async function _O(t,e){const n=Pc(t,!1).get(e),r=await new la(n).toPromise();return r===void 0?null:r.value}function Mg(t,e){const n=Pc(t,!0).delete(e);return new la(n).toPromise()}const yO=800,vO=3;class OE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>vO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return PE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cc._getInstance(pO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await dO(),!this.activeServiceWorker)return;this.sender=new uO(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bh();return await Vg(e,Bl,"1"),await Mg(e,Bl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Vg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>_O(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Mg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Pc(i,!1).getAll();return new la(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}OE.type="LOCAL";const wO=OE;new sa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(t,e){return e?nr(e):(ue(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd extends Kd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ps(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ps(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ps(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function EO(t){return vE(t.auth,new Jd(t),t.bypassAuthState)}function TO(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),Gx(n,new Jd(t),t.bypassAuthState)}async function bO(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),Kx(n,new Jd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return EO;case"linkViaPopup":case"linkViaRedirect":return bO;case"reauthViaPopup":case"reauthViaRedirect":return TO;default:_n(this.auth,"internal-error")}}resolve(e){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IO=new sa(2e3,1e4);async function AO(t,e,n){if(Ht(t.app))return Promise.reject(Rn(t,"operation-not-supported-in-this-environment"));const r=pr(t);Xk(t,e,Qd);const i=DE(r,n);return new hi(r,"signInViaPopup",e,i).executeNotNull()}class hi extends NE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,hi.currentPopupAction&&hi.currentPopupAction.cancel(),hi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ue(e,this.auth,"internal-error"),e}async onExecution(){lr(this.filter.length===1,"Popup operations only handle one event");const e=Yd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,IO.get())};e()}}hi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RO="pendingRedirect",sl=new Map;class SO extends NE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=sl.get(this.auth._key());if(!e){try{const r=await CO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}sl.set(this.auth._key(),e)}return this.bypassAuthState||sl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function CO(t,e){const n=xO(e),r=kO(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function PO(t,e){sl.set(t._key(),e)}function kO(t){return nr(t._redirectPersistence)}function xO(t){return il(RO,t.config.apiKey,t.name)}async function OO(t,e,n=!1){if(Ht(t.app))return Promise.reject($n(t));const r=pr(t),i=DE(r,e),o=await new SO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DO=10*60*1e3;class NO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!LO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!LE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Rn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=DO&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fg(e))}saveEventToCache(e){this.cachedEventUids.add(Fg(e)),this.lastProcessedEventTime=Date.now()}}function Fg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function LE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function LO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return LE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VO(t,e={}){return Dn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,FO=/^https?/;async function UO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await VO(t);for(const n of e)try{if($O(n))return}catch{}_n(t,"unauthorized-domain")}function $O(t){const e=$h(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!FO.test(n))return!1;if(MO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qO=new sa(3e4,6e4);function Ug(){const t=qn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function BO(t){return new Promise((e,n)=>{var r,i,s;function o(){Ug(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ug(),n(Rn(t,"network-request-failed"))},timeout:qO.get()})}if(!((i=(r=qn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=qn().gapi)===null||s===void 0)&&s.load)o();else{const a=Rx("iframefcb");return qn()[a]=()=>{gapi.load?o():n(Rn(t,"network-request-failed"))},pE(`${Ax()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ol=null,e})}let ol=null;function jO(t){return ol=ol||BO(t),ol}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HO=new sa(5e3,15e3),zO="__/auth/iframe",WO="emulator/auth/iframe",KO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},GO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function QO(t){const e=t.config;ue(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Hd(e,WO):`https://${t.config.authDomain}/${zO}`,r={apiKey:e.apiKey,appName:t.name,v:Li},i=GO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ia(r).slice(1)}`}async function YO(t){const e=await jO(t),n=qn().gapi;return ue(n,t,"internal-error"),e.open({where:document.body,url:QO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:KO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Rn(t,"network-request-failed"),a=qn().setTimeout(()=>{s(o)},HO.get());function c(){qn().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},XO=500,ZO=600,e1="_blank",t1="http://localhost";class $g{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function n1(t,e,n,r=XO,i=ZO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},JO),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Lt().toLowerCase();n&&(a=aE(u)?e1:n),sE(u)&&(e=e||t1,c.scrollbars="yes");const h=Object.entries(c).reduce((p,[g,w])=>`${p}${g}=${w},`,"");if(gx(u)&&a!=="_self")return r1(e||"",a),new $g(null);const f=window.open(e||"",a,h);ue(f,t,"popup-blocked");try{f.focus()}catch{}return new $g(f)}function r1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1="__/auth/handler",s1="emulator/auth/handler",o1=encodeURIComponent("fac");async function qg(t,e,n,r,i,s){ue(t.config.authDomain,t,"auth-domain-config-required"),ue(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Li,eventId:i};if(e instanceof Qd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",LP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries(s||{}))o[h]=f}if(e instanceof aa){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await t._getAppCheckToken(),u=c?`#${o1}=${encodeURIComponent(c)}`:"";return`${a1(t)}?${ia(a).slice(1)}${u}`}function a1({config:t}){return t.emulator?Hd(t,s1):`https://${t.authDomain}/${i1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku="webStorageSupport";class l1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=CE,this._completeRedirectFn=OO,this._overrideRedirectResult=PO}async _openPopup(e,n,r,i){var s;lr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await qg(e,n,r,$h(),i);return n1(e,o,Yd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await qg(e,n,r,$h(),i);return hO(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(lr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await YO(e),r=new NO(e);return n.register("authEvent",i=>(ue(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ku,{type:Ku},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ku];o!==void 0&&n(!!o),_n(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=UO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return dE()||oE()||Wd()}}const c1=l1;var Bg="@firebase/auth",jg="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function d1(t){Pn(new gn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ue(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fE(t)},u=new Tx(r,i,s,c);return Ox(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Pn(new gn("auth-internal",e=>{const n=pr(e.getProvider("auth").getImmediate());return(r=>new u1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yt(Bg,jg,h1(t)),Yt(Bg,jg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1=5*60,p1=$w("authIdTokenMaxAge")||f1;let Hg=null;const m1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>p1)return;const i=n==null?void 0:n.token;Hg!==i&&(Hg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function g1(t=Rc()){const e=Yr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=xx(t,{popupRedirectResolver:c1,persistence:[wO,lO,CE]}),r=$w("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=m1(s.toString());rO(n,o,()=>o(n.currentUser)),nO(n,a=>o(a))}}const i=Mw("auth");return i&&Dx(n,`http://${i}`),n}function _1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}bx({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Rn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",_1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});d1("Browser");var zg=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Mr,VE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,v){function _(){}_.prototype=v.prototype,b.D=v.prototype,b.prototype=new _,b.prototype.constructor=b,b.C=function(A,T,R){for(var E=Array(arguments.length-2),G=2;G<arguments.length;G++)E[G-2]=arguments[G];return v.prototype[T].apply(A,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,v,_){_||(_=0);var A=Array(16);if(typeof v=="string")for(var T=0;16>T;++T)A[T]=v.charCodeAt(_++)|v.charCodeAt(_++)<<8|v.charCodeAt(_++)<<16|v.charCodeAt(_++)<<24;else for(T=0;16>T;++T)A[T]=v[_++]|v[_++]<<8|v[_++]<<16|v[_++]<<24;v=b.g[0],_=b.g[1],T=b.g[2];var R=b.g[3],E=v+(R^_&(T^R))+A[0]+3614090360&4294967295;v=_+(E<<7&4294967295|E>>>25),E=R+(T^v&(_^T))+A[1]+3905402710&4294967295,R=v+(E<<12&4294967295|E>>>20),E=T+(_^R&(v^_))+A[2]+606105819&4294967295,T=R+(E<<17&4294967295|E>>>15),E=_+(v^T&(R^v))+A[3]+3250441966&4294967295,_=T+(E<<22&4294967295|E>>>10),E=v+(R^_&(T^R))+A[4]+4118548399&4294967295,v=_+(E<<7&4294967295|E>>>25),E=R+(T^v&(_^T))+A[5]+1200080426&4294967295,R=v+(E<<12&4294967295|E>>>20),E=T+(_^R&(v^_))+A[6]+2821735955&4294967295,T=R+(E<<17&4294967295|E>>>15),E=_+(v^T&(R^v))+A[7]+4249261313&4294967295,_=T+(E<<22&4294967295|E>>>10),E=v+(R^_&(T^R))+A[8]+1770035416&4294967295,v=_+(E<<7&4294967295|E>>>25),E=R+(T^v&(_^T))+A[9]+2336552879&4294967295,R=v+(E<<12&4294967295|E>>>20),E=T+(_^R&(v^_))+A[10]+4294925233&4294967295,T=R+(E<<17&4294967295|E>>>15),E=_+(v^T&(R^v))+A[11]+2304563134&4294967295,_=T+(E<<22&4294967295|E>>>10),E=v+(R^_&(T^R))+A[12]+1804603682&4294967295,v=_+(E<<7&4294967295|E>>>25),E=R+(T^v&(_^T))+A[13]+4254626195&4294967295,R=v+(E<<12&4294967295|E>>>20),E=T+(_^R&(v^_))+A[14]+2792965006&4294967295,T=R+(E<<17&4294967295|E>>>15),E=_+(v^T&(R^v))+A[15]+1236535329&4294967295,_=T+(E<<22&4294967295|E>>>10),E=v+(T^R&(_^T))+A[1]+4129170786&4294967295,v=_+(E<<5&4294967295|E>>>27),E=R+(_^T&(v^_))+A[6]+3225465664&4294967295,R=v+(E<<9&4294967295|E>>>23),E=T+(v^_&(R^v))+A[11]+643717713&4294967295,T=R+(E<<14&4294967295|E>>>18),E=_+(R^v&(T^R))+A[0]+3921069994&4294967295,_=T+(E<<20&4294967295|E>>>12),E=v+(T^R&(_^T))+A[5]+3593408605&4294967295,v=_+(E<<5&4294967295|E>>>27),E=R+(_^T&(v^_))+A[10]+38016083&4294967295,R=v+(E<<9&4294967295|E>>>23),E=T+(v^_&(R^v))+A[15]+3634488961&4294967295,T=R+(E<<14&4294967295|E>>>18),E=_+(R^v&(T^R))+A[4]+3889429448&4294967295,_=T+(E<<20&4294967295|E>>>12),E=v+(T^R&(_^T))+A[9]+568446438&4294967295,v=_+(E<<5&4294967295|E>>>27),E=R+(_^T&(v^_))+A[14]+3275163606&4294967295,R=v+(E<<9&4294967295|E>>>23),E=T+(v^_&(R^v))+A[3]+4107603335&4294967295,T=R+(E<<14&4294967295|E>>>18),E=_+(R^v&(T^R))+A[8]+1163531501&4294967295,_=T+(E<<20&4294967295|E>>>12),E=v+(T^R&(_^T))+A[13]+2850285829&4294967295,v=_+(E<<5&4294967295|E>>>27),E=R+(_^T&(v^_))+A[2]+4243563512&4294967295,R=v+(E<<9&4294967295|E>>>23),E=T+(v^_&(R^v))+A[7]+1735328473&4294967295,T=R+(E<<14&4294967295|E>>>18),E=_+(R^v&(T^R))+A[12]+2368359562&4294967295,_=T+(E<<20&4294967295|E>>>12),E=v+(_^T^R)+A[5]+4294588738&4294967295,v=_+(E<<4&4294967295|E>>>28),E=R+(v^_^T)+A[8]+2272392833&4294967295,R=v+(E<<11&4294967295|E>>>21),E=T+(R^v^_)+A[11]+1839030562&4294967295,T=R+(E<<16&4294967295|E>>>16),E=_+(T^R^v)+A[14]+4259657740&4294967295,_=T+(E<<23&4294967295|E>>>9),E=v+(_^T^R)+A[1]+2763975236&4294967295,v=_+(E<<4&4294967295|E>>>28),E=R+(v^_^T)+A[4]+1272893353&4294967295,R=v+(E<<11&4294967295|E>>>21),E=T+(R^v^_)+A[7]+4139469664&4294967295,T=R+(E<<16&4294967295|E>>>16),E=_+(T^R^v)+A[10]+3200236656&4294967295,_=T+(E<<23&4294967295|E>>>9),E=v+(_^T^R)+A[13]+681279174&4294967295,v=_+(E<<4&4294967295|E>>>28),E=R+(v^_^T)+A[0]+3936430074&4294967295,R=v+(E<<11&4294967295|E>>>21),E=T+(R^v^_)+A[3]+3572445317&4294967295,T=R+(E<<16&4294967295|E>>>16),E=_+(T^R^v)+A[6]+76029189&4294967295,_=T+(E<<23&4294967295|E>>>9),E=v+(_^T^R)+A[9]+3654602809&4294967295,v=_+(E<<4&4294967295|E>>>28),E=R+(v^_^T)+A[12]+3873151461&4294967295,R=v+(E<<11&4294967295|E>>>21),E=T+(R^v^_)+A[15]+530742520&4294967295,T=R+(E<<16&4294967295|E>>>16),E=_+(T^R^v)+A[2]+3299628645&4294967295,_=T+(E<<23&4294967295|E>>>9),E=v+(T^(_|~R))+A[0]+4096336452&4294967295,v=_+(E<<6&4294967295|E>>>26),E=R+(_^(v|~T))+A[7]+1126891415&4294967295,R=v+(E<<10&4294967295|E>>>22),E=T+(v^(R|~_))+A[14]+2878612391&4294967295,T=R+(E<<15&4294967295|E>>>17),E=_+(R^(T|~v))+A[5]+4237533241&4294967295,_=T+(E<<21&4294967295|E>>>11),E=v+(T^(_|~R))+A[12]+1700485571&4294967295,v=_+(E<<6&4294967295|E>>>26),E=R+(_^(v|~T))+A[3]+2399980690&4294967295,R=v+(E<<10&4294967295|E>>>22),E=T+(v^(R|~_))+A[10]+4293915773&4294967295,T=R+(E<<15&4294967295|E>>>17),E=_+(R^(T|~v))+A[1]+2240044497&4294967295,_=T+(E<<21&4294967295|E>>>11),E=v+(T^(_|~R))+A[8]+1873313359&4294967295,v=_+(E<<6&4294967295|E>>>26),E=R+(_^(v|~T))+A[15]+4264355552&4294967295,R=v+(E<<10&4294967295|E>>>22),E=T+(v^(R|~_))+A[6]+2734768916&4294967295,T=R+(E<<15&4294967295|E>>>17),E=_+(R^(T|~v))+A[13]+1309151649&4294967295,_=T+(E<<21&4294967295|E>>>11),E=v+(T^(_|~R))+A[4]+4149444226&4294967295,v=_+(E<<6&4294967295|E>>>26),E=R+(_^(v|~T))+A[11]+3174756917&4294967295,R=v+(E<<10&4294967295|E>>>22),E=T+(v^(R|~_))+A[2]+718787259&4294967295,T=R+(E<<15&4294967295|E>>>17),E=_+(R^(T|~v))+A[9]+3951481745&4294967295,b.g[0]=b.g[0]+v&4294967295,b.g[1]=b.g[1]+(T+(E<<21&4294967295|E>>>11))&4294967295,b.g[2]=b.g[2]+T&4294967295,b.g[3]=b.g[3]+R&4294967295}r.prototype.u=function(b,v){v===void 0&&(v=b.length);for(var _=v-this.blockSize,A=this.B,T=this.h,R=0;R<v;){if(T==0)for(;R<=_;)i(this,b,R),R+=this.blockSize;if(typeof b=="string"){for(;R<v;)if(A[T++]=b.charCodeAt(R++),T==this.blockSize){i(this,A),T=0;break}}else for(;R<v;)if(A[T++]=b[R++],T==this.blockSize){i(this,A),T=0;break}}this.h=T,this.o+=v},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var v=1;v<b.length-8;++v)b[v]=0;var _=8*this.o;for(v=b.length-8;v<b.length;++v)b[v]=_&255,_/=256;for(this.u(b),b=Array(16),v=_=0;4>v;++v)for(var A=0;32>A;A+=8)b[_++]=this.g[v]>>>A&255;return b};function s(b,v){var _=a;return Object.prototype.hasOwnProperty.call(_,b)?_[b]:_[b]=v(b)}function o(b,v){this.h=v;for(var _=[],A=!0,T=b.length-1;0<=T;T--){var R=b[T]|0;A&&R==v||(_[T]=R,A=!1)}this.g=_}var a={};function c(b){return-128<=b&&128>b?s(b,function(v){return new o([v|0],0>v?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return f;if(0>b)return S(u(-b));for(var v=[],_=1,A=0;b>=_;A++)v[A]=b/_|0,_*=4294967296;return new o(v,0)}function h(b,v){if(b.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(b.charAt(0)=="-")return S(h(b.substring(1),v));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=u(Math.pow(v,8)),A=f,T=0;T<b.length;T+=8){var R=Math.min(8,b.length-T),E=parseInt(b.substring(T,T+R),v);8>R?(R=u(Math.pow(v,R)),A=A.j(R).add(u(E))):(A=A.j(_),A=A.add(u(E)))}return A}var f=c(0),p=c(1),g=c(16777216);t=o.prototype,t.m=function(){if(C(this))return-S(this).m();for(var b=0,v=1,_=0;_<this.g.length;_++){var A=this.i(_);b+=(0<=A?A:4294967296+A)*v,v*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(w(this))return"0";if(C(this))return"-"+S(this).toString(b);for(var v=u(Math.pow(b,6)),_=this,A="";;){var T=D(_,v).g;_=x(_,T.j(v));var R=((0<_.g.length?_.g[0]:_.h)>>>0).toString(b);if(_=T,w(_))return R+A;for(;6>R.length;)R="0"+R;A=R+A}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function w(b){if(b.h!=0)return!1;for(var v=0;v<b.g.length;v++)if(b.g[v]!=0)return!1;return!0}function C(b){return b.h==-1}t.l=function(b){return b=x(this,b),C(b)?-1:w(b)?0:1};function S(b){for(var v=b.g.length,_=[],A=0;A<v;A++)_[A]=~b.g[A];return new o(_,~b.h).add(p)}t.abs=function(){return C(this)?S(this):this},t.add=function(b){for(var v=Math.max(this.g.length,b.g.length),_=[],A=0,T=0;T<=v;T++){var R=A+(this.i(T)&65535)+(b.i(T)&65535),E=(R>>>16)+(this.i(T)>>>16)+(b.i(T)>>>16);A=E>>>16,R&=65535,E&=65535,_[T]=E<<16|R}return new o(_,_[_.length-1]&-2147483648?-1:0)};function x(b,v){return b.add(S(v))}t.j=function(b){if(w(this)||w(b))return f;if(C(this))return C(b)?S(this).j(S(b)):S(S(this).j(b));if(C(b))return S(this.j(S(b)));if(0>this.l(g)&&0>b.l(g))return u(this.m()*b.m());for(var v=this.g.length+b.g.length,_=[],A=0;A<2*v;A++)_[A]=0;for(A=0;A<this.g.length;A++)for(var T=0;T<b.g.length;T++){var R=this.i(A)>>>16,E=this.i(A)&65535,G=b.i(T)>>>16,oe=b.i(T)&65535;_[2*A+2*T]+=E*oe,k(_,2*A+2*T),_[2*A+2*T+1]+=R*oe,k(_,2*A+2*T+1),_[2*A+2*T+1]+=E*G,k(_,2*A+2*T+1),_[2*A+2*T+2]+=R*G,k(_,2*A+2*T+2)}for(A=0;A<v;A++)_[A]=_[2*A+1]<<16|_[2*A];for(A=v;A<2*v;A++)_[A]=0;return new o(_,0)};function k(b,v){for(;(b[v]&65535)!=b[v];)b[v+1]+=b[v]>>>16,b[v]&=65535,v++}function O(b,v){this.g=b,this.h=v}function D(b,v){if(w(v))throw Error("division by zero");if(w(b))return new O(f,f);if(C(b))return v=D(S(b),v),new O(S(v.g),S(v.h));if(C(v))return v=D(b,S(v)),new O(S(v.g),v.h);if(30<b.g.length){if(C(b)||C(v))throw Error("slowDivide_ only works with positive integers.");for(var _=p,A=v;0>=A.l(b);)_=V(_),A=V(A);var T=j(_,1),R=j(A,1);for(A=j(A,2),_=j(_,2);!w(A);){var E=R.add(A);0>=E.l(b)&&(T=T.add(_),R=E),A=j(A,1),_=j(_,1)}return v=x(b,T.j(v)),new O(T,v)}for(T=f;0<=b.l(v);){for(_=Math.max(1,Math.floor(b.m()/v.m())),A=Math.ceil(Math.log(_)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),R=u(_),E=R.j(v);C(E)||0<E.l(b);)_-=A,R=u(_),E=R.j(v);w(R)&&(R=p),T=T.add(R),b=x(b,E)}return new O(T,b)}t.A=function(b){return D(this,b).h},t.and=function(b){for(var v=Math.max(this.g.length,b.g.length),_=[],A=0;A<v;A++)_[A]=this.i(A)&b.i(A);return new o(_,this.h&b.h)},t.or=function(b){for(var v=Math.max(this.g.length,b.g.length),_=[],A=0;A<v;A++)_[A]=this.i(A)|b.i(A);return new o(_,this.h|b.h)},t.xor=function(b){for(var v=Math.max(this.g.length,b.g.length),_=[],A=0;A<v;A++)_[A]=this.i(A)^b.i(A);return new o(_,this.h^b.h)};function V(b){for(var v=b.g.length+1,_=[],A=0;A<v;A++)_[A]=b.i(A)<<1|b.i(A-1)>>>31;return new o(_,b.h)}function j(b,v){var _=v>>5;v%=32;for(var A=b.g.length-_,T=[],R=0;R<A;R++)T[R]=0<v?b.i(R+_)>>>v|b.i(R+_+1)<<32-v:b.i(R+_);return new o(T,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,VE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Mr=o}).apply(typeof zg!="undefined"?zg:typeof self!="undefined"?self:typeof window!="undefined"?window:{});var qa=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ME,ao,FE,al,jh,UE,$E,qE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,m){return l==Array.prototype||l==Object.prototype||(l[d]=m.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof qa=="object"&&qa];for(var d=0;d<l.length;++d){var m=l[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(l,d){if(d)e:{var m=r;l=l.split(".");for(var y=0;y<l.length-1;y++){var N=l[y];if(!(N in m))break e;m=m[N]}l=l[l.length-1],y=m[l],d=d(y),d!=y&&d!=null&&e(m,l,{configurable:!0,writable:!0,value:d})}}function s(l,d){l instanceof String&&(l+="");var m=0,y=!1,N={next:function(){if(!y&&m<l.length){var M=m++;return{value:d(M,l[M]),done:!1}}return y=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(l){return l||function(){return s(this,function(d,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function u(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,m){return l.call.apply(l.bind,arguments)}function f(l,d,m){if(!l)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,y),l.apply(d,N)}}return function(){return l.apply(d,arguments)}}function p(l,d,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,p.apply(null,arguments)}function g(l,d){var m=Array.prototype.slice.call(arguments,1);return function(){var y=m.slice();return y.push.apply(y,arguments),l.apply(this,y)}}function w(l,d){function m(){}m.prototype=d.prototype,l.aa=d.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(y,N,M){for(var X=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)X[Be-2]=arguments[Be];return d.prototype[N].apply(y,X)}}function C(l){const d=l.length;if(0<d){const m=Array(d);for(let y=0;y<d;y++)m[y]=l[y];return m}return[]}function S(l,d){for(let m=1;m<arguments.length;m++){const y=arguments[m];if(c(y)){const N=l.length||0,M=y.length||0;l.length=N+M;for(let X=0;X<M;X++)l[N+X]=y[X]}else l.push(y)}}class x{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function k(l){return/^[\s\xa0]*$/.test(l)}function O(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function D(l){return D[" "](l),l}D[" "]=function(){};var V=O().indexOf("Gecko")!=-1&&!(O().toLowerCase().indexOf("webkit")!=-1&&O().indexOf("Edge")==-1)&&!(O().indexOf("Trident")!=-1||O().indexOf("MSIE")!=-1)&&O().indexOf("Edge")==-1;function j(l,d,m){for(const y in l)d.call(m,l[y],y,l)}function b(l,d){for(const m in l)d.call(void 0,l[m],m,l)}function v(l){const d={};for(const m in l)d[m]=l[m];return d}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(l,d){let m,y;for(let N=1;N<arguments.length;N++){y=arguments[N];for(m in y)l[m]=y[m];for(let M=0;M<_.length;M++)m=_[M],Object.prototype.hasOwnProperty.call(y,m)&&(l[m]=y[m])}}function T(l){var d=1;l=l.split(":");const m=[];for(;0<d&&l.length;)m.push(l.shift()),d--;return l.length&&m.push(l.join(":")),m}function R(l){a.setTimeout(()=>{throw l},0)}function E(){var l=qe;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class G{constructor(){this.h=this.g=null}add(d,m){const y=oe.get();y.set(d,m),this.h?this.h.next=y:this.g=y,this.h=y}}var oe=new x(()=>new se,l=>l.reset());class se{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let _e,he=!1,qe=new G,Je=()=>{const l=a.Promise.resolve(void 0);_e=()=>{l.then(st)}};var st=()=>{for(var l;l=E();){try{l.h.call(l.g)}catch(m){R(m)}var d=oe;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}he=!1};function De(){this.s=this.s,this.C=this.C}De.prototype.s=!1,De.prototype.ma=function(){this.s||(this.s=!0,this.N())},De.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function de(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}de.prototype.h=function(){this.defaultPrevented=!0};var yt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};a.addEventListener("test",m,d),a.removeEventListener("test",m,d)}catch{}return l}();function ce(l,d){if(de.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,y=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(V){e:{try{D(d.nodeName);var N=!0;break e}catch{}N=!1}N||(d=null)}}else m=="mouseover"?d=l.fromElement:m=="mouseout"&&(d=l.toElement);this.relatedTarget=d,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Ie[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&ce.aa.h.call(this)}}w(ce,de);var Ie={2:"touch",3:"pen",4:"mouse"};ce.prototype.h=function(){ce.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var F="closure_listenable_"+(1e6*Math.random()|0),Z=0;function U(l,d,m,y,N){this.listener=l,this.proxy=null,this.src=d,this.type=m,this.capture=!!y,this.ha=N,this.key=++Z,this.da=this.fa=!1}function re(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Ae(l){this.src=l,this.g={},this.h=0}Ae.prototype.add=function(l,d,m,y,N){var M=l.toString();l=this.g[M],l||(l=this.g[M]=[],this.h++);var X=I(l,d,y,N);return-1<X?(d=l[X],m||(d.fa=!1)):(d=new U(d,this.src,M,!!y,N),d.fa=m,l.push(d)),d};function Fe(l,d){var m=d.type;if(m in l.g){var y=l.g[m],N=Array.prototype.indexOf.call(y,d,void 0),M;(M=0<=N)&&Array.prototype.splice.call(y,N,1),M&&(re(d),l.g[m].length==0&&(delete l.g[m],l.h--))}}function I(l,d,m,y){for(var N=0;N<l.length;++N){var M=l[N];if(!M.da&&M.listener==d&&M.capture==!!m&&M.ha==y)return N}return-1}var P="closure_lm_"+(1e6*Math.random()|0),L={};function z(l,d,m,y,N){if(y&&y.once)return ee(l,d,m,y,N);if(Array.isArray(d)){for(var M=0;M<d.length;M++)z(l,d[M],m,y,N);return null}return m=me(m),l&&l[F]?l.K(d,m,u(y)?!!y.capture:!!y,N):q(l,d,m,!1,y,N)}function q(l,d,m,y,N,M){if(!d)throw Error("Invalid event type");var X=u(N)?!!N.capture:!!N,Be=ne(l);if(Be||(l[P]=Be=new Ae(l)),m=Be.add(d,m,y,X,M),m.proxy)return m;if(y=W(),m.proxy=y,y.src=l,y.listener=m,l.addEventListener)yt||(N=X),N===void 0&&(N=!1),l.addEventListener(d.toString(),y,N);else if(l.attachEvent)l.attachEvent(K(d.toString()),y);else if(l.addListener&&l.removeListener)l.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return m}function W(){function l(m){return d.call(l.src,l.listener,m)}const d=fe;return l}function ee(l,d,m,y,N){if(Array.isArray(d)){for(var M=0;M<d.length;M++)ee(l,d[M],m,y,N);return null}return m=me(m),l&&l[F]?l.L(d,m,u(y)?!!y.capture:!!y,N):q(l,d,m,!0,y,N)}function J(l,d,m,y,N){if(Array.isArray(d))for(var M=0;M<d.length;M++)J(l,d[M],m,y,N);else y=u(y)?!!y.capture:!!y,m=me(m),l&&l[F]?(l=l.i,d=String(d).toString(),d in l.g&&(M=l.g[d],m=I(M,m,y,N),-1<m&&(re(M[m]),Array.prototype.splice.call(M,m,1),M.length==0&&(delete l.g[d],l.h--)))):l&&(l=ne(l))&&(d=l.g[d.toString()],l=-1,d&&(l=I(d,m,y,N)),(m=-1<l?d[l]:null)&&Q(m))}function Q(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[F])Fe(d.i,l);else{var m=l.type,y=l.proxy;d.removeEventListener?d.removeEventListener(m,y,l.capture):d.detachEvent?d.detachEvent(K(m),y):d.addListener&&d.removeListener&&d.removeListener(y),(m=ne(d))?(Fe(m,l),m.h==0&&(m.src=null,d[P]=null)):re(l)}}}function K(l){return l in L?L[l]:L[l]="on"+l}function fe(l,d){if(l.da)l=!0;else{d=new ce(d,this);var m=l.listener,y=l.ha||l.src;l.fa&&Q(l),l=m.call(y,d)}return l}function ne(l){return l=l[P],l instanceof Ae?l:null}var ae="__closure_events_fn_"+(1e9*Math.random()>>>0);function me(l){return typeof l=="function"?l:(l[ae]||(l[ae]=function(d){return l.handleEvent(d)}),l[ae])}function pe(){De.call(this),this.i=new Ae(this),this.M=this,this.F=null}w(pe,De),pe.prototype[F]=!0,pe.prototype.removeEventListener=function(l,d,m,y){J(this,l,d,m,y)};function be(l,d){var m,y=l.F;if(y)for(m=[];y;y=y.F)m.push(y);if(l=l.M,y=d.type||d,typeof d=="string")d=new de(d,l);else if(d instanceof de)d.target=d.target||l;else{var N=d;d=new de(y,l),A(d,N)}if(N=!0,m)for(var M=m.length-1;0<=M;M--){var X=d.g=m[M];N=xe(X,y,!0,d)&&N}if(X=d.g=l,N=xe(X,y,!0,d)&&N,N=xe(X,y,!1,d)&&N,m)for(M=0;M<m.length;M++)X=d.g=m[M],N=xe(X,y,!1,d)&&N}pe.prototype.N=function(){if(pe.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var m=l.g[d],y=0;y<m.length;y++)re(m[y]);delete l.g[d],l.h--}}this.F=null},pe.prototype.K=function(l,d,m,y){return this.i.add(String(l),d,!1,m,y)},pe.prototype.L=function(l,d,m,y){return this.i.add(String(l),d,!0,m,y)};function xe(l,d,m,y){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var N=!0,M=0;M<d.length;++M){var X=d[M];if(X&&!X.da&&X.capture==m){var Be=X.listener,Et=X.ha||X.src;X.fa&&Fe(l.i,X),N=Be.call(Et,y)!==!1&&N}}return N&&!y.defaultPrevented}function At(l,d,m){if(typeof l=="function")m&&(l=p(l,m));else if(l&&typeof l.handleEvent=="function")l=p(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function dt(l){l.g=At(()=>{l.g=null,l.i&&(l.i=!1,dt(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class Zt extends De{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:dt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ft(l){De.call(this),this.h=l,this.g={}}w(ft,De);var gr=[];function Ms(l){j(l.g,function(d,m){this.g.hasOwnProperty(m)&&Q(d)},l),l.g={}}ft.prototype.N=function(){ft.aa.N.call(this),Ms(this)},ft.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var wt=a.JSON.stringify,an=a.JSON.parse,ga=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Zc(){}Zc.prototype.h=null;function Jf(l){return l.h||(l.h=l.i())}function Xf(){}var Fs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function eu(){de.call(this,"d")}w(eu,de);function tu(){de.call(this,"c")}w(tu,de);var Zr={},Zf=null;function _a(){return Zf=Zf||new pe}Zr.La="serverreachability";function ep(l){de.call(this,Zr.La,l)}w(ep,de);function Us(l){const d=_a();be(d,new ep(d))}Zr.STAT_EVENT="statevent";function tp(l,d){de.call(this,Zr.STAT_EVENT,l),this.stat=d}w(tp,de);function Vt(l){const d=_a();be(d,new tp(d,l))}Zr.Ma="timingevent";function np(l,d){de.call(this,Zr.Ma,l),this.size=d}w(np,de);function $s(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function qs(){this.g=!0}qs.prototype.xa=function(){this.g=!1};function a0(l,d,m,y,N,M){l.info(function(){if(l.g)if(M)for(var X="",Be=M.split("&"),Et=0;Et<Be.length;Et++){var Ne=Be[Et].split("=");if(1<Ne.length){var Rt=Ne[0];Ne=Ne[1];var St=Rt.split("_");X=2<=St.length&&St[1]=="type"?X+(Rt+"="+Ne+"&"):X+(Rt+"=redacted&")}}else X=null;else X=M;return"XMLHTTP REQ ("+y+") [attempt "+N+"]: "+d+`
`+m+`
`+X})}function l0(l,d,m,y,N,M,X){l.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+N+"]: "+d+`
`+m+`
`+M+" "+X})}function $i(l,d,m,y){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+u0(l,m)+(y?" "+y:"")})}function c0(l,d){l.info(function(){return"TIMEOUT: "+d})}qs.prototype.info=function(){};function u0(l,d){if(!l.g)return d;if(!d)return null;try{var m=JSON.parse(d);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var y=m[l];if(!(2>y.length)){var N=y[1];if(Array.isArray(N)&&!(1>N.length)){var M=N[0];if(M!="noop"&&M!="stop"&&M!="close")for(var X=1;X<N.length;X++)N[X]=""}}}}return wt(m)}catch{return d}}var ya={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},rp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},nu;function va(){}w(va,Zc),va.prototype.g=function(){return new XMLHttpRequest},va.prototype.i=function(){return{}},nu=new va;function _r(l,d,m,y){this.j=l,this.i=d,this.l=m,this.R=y||1,this.U=new ft(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ip}function ip(){this.i=null,this.g="",this.h=!1}var sp={},ru={};function iu(l,d,m){l.L=1,l.v=ba(zn(d)),l.m=m,l.P=!0,op(l,null)}function op(l,d){l.F=Date.now(),wa(l),l.A=zn(l.v);var m=l.A,y=l.R;Array.isArray(y)||(y=[String(y)]),wp(m.i,"t",y),l.C=0,m=l.j.J,l.h=new ip,l.g=Fp(l.j,m?d:null,!l.m),0<l.O&&(l.M=new Zt(p(l.Y,l,l.g),l.O)),d=l.U,m=l.g,y=l.ca;var N="readystatechange";Array.isArray(N)||(N&&(gr[0]=N.toString()),N=gr);for(var M=0;M<N.length;M++){var X=z(m,N[M],y||d.handleEvent,!1,d.h||d);if(!X)break;d.g[X.key]=X}d=l.H?v(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),Us(),a0(l.i,l.u,l.A,l.l,l.R,l.m)}_r.prototype.ca=function(l){l=l.target;const d=this.M;d&&Wn(l)==3?d.j():this.Y(l)},_r.prototype.Y=function(l){try{if(l==this.g)e:{const St=Wn(this.g);var d=this.g.Ba();const ji=this.g.Z();if(!(3>St)&&(St!=3||this.g&&(this.h.h||this.g.oa()||Sp(this.g)))){this.J||St!=4||d==7||(d==8||0>=ji?Us(3):Us(2)),su(this);var m=this.g.Z();this.X=m;t:if(ap(this)){var y=Sp(this.g);l="";var N=y.length,M=Wn(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){ei(this),Bs(this);var X="";break t}this.h.i=new a.TextDecoder}for(d=0;d<N;d++)this.h.h=!0,l+=this.h.i.decode(y[d],{stream:!(M&&d==N-1)});y.length=0,this.h.g+=l,this.C=0,X=this.h.g}else X=this.g.oa();if(this.o=m==200,l0(this.i,this.u,this.A,this.l,this.R,St,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Be,Et=this.g;if((Be=Et.g?Et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(Be)){var Ne=Be;break t}}Ne=null}if(m=Ne)$i(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ou(this,m);else{this.o=!1,this.s=3,Vt(12),ei(this),Bs(this);break e}}if(this.P){m=!0;let vn;for(;!this.J&&this.C<X.length;)if(vn=h0(this,X),vn==ru){St==4&&(this.s=4,Vt(14),m=!1),$i(this.i,this.l,null,"[Incomplete Response]");break}else if(vn==sp){this.s=4,Vt(15),$i(this.i,this.l,X,"[Invalid Chunk]"),m=!1;break}else $i(this.i,this.l,vn,null),ou(this,vn);if(ap(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),St!=4||X.length!=0||this.h.h||(this.s=1,Vt(16),m=!1),this.o=this.o&&m,!m)$i(this.i,this.l,X,"[Invalid Chunked Response]"),ei(this),Bs(this);else if(0<X.length&&!this.W){this.W=!0;var Rt=this.j;Rt.g==this&&Rt.ba&&!Rt.M&&(Rt.j.info("Great, no buffering proxy detected. Bytes received: "+X.length),du(Rt),Rt.M=!0,Vt(11))}}else $i(this.i,this.l,X,null),ou(this,X);St==4&&ei(this),this.o&&!this.J&&(St==4?Np(this.j,this):(this.o=!1,wa(this)))}else C0(this.g),m==400&&0<X.indexOf("Unknown SID")?(this.s=3,Vt(12)):(this.s=0,Vt(13)),ei(this),Bs(this)}}}catch{}finally{}};function ap(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function h0(l,d){var m=l.C,y=d.indexOf(`
`,m);return y==-1?ru:(m=Number(d.substring(m,y)),isNaN(m)?sp:(y+=1,y+m>d.length?ru:(d=d.slice(y,y+m),l.C=y+m,d)))}_r.prototype.cancel=function(){this.J=!0,ei(this)};function wa(l){l.S=Date.now()+l.I,lp(l,l.I)}function lp(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=$s(p(l.ba,l),d)}function su(l){l.B&&(a.clearTimeout(l.B),l.B=null)}_r.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(c0(this.i,this.A),this.L!=2&&(Us(),Vt(17)),ei(this),this.s=2,Bs(this)):lp(this,this.S-l)};function Bs(l){l.j.G==0||l.J||Np(l.j,l)}function ei(l){su(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,Ms(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function ou(l,d){try{var m=l.j;if(m.G!=0&&(m.g==l||au(m.h,l))){if(!l.K&&au(m.h,l)&&m.G==3){try{var y=m.Da.g.parse(d)}catch{y=null}if(Array.isArray(y)&&y.length==3){var N=y;if(N[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)Pa(m),Sa(m);else break e;hu(m),Vt(18)}}else m.za=N[1],0<m.za-m.T&&37500>N[2]&&m.F&&m.v==0&&!m.C&&(m.C=$s(p(m.Za,m),6e3));if(1>=hp(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else ni(m,11)}else if((l.K||m.g==l)&&Pa(m),!k(d))for(N=m.Da.g.parse(d),d=0;d<N.length;d++){let Ne=N[d];if(m.T=Ne[0],Ne=Ne[1],m.G==2)if(Ne[0]=="c"){m.K=Ne[1],m.ia=Ne[2];const Rt=Ne[3];Rt!=null&&(m.la=Rt,m.j.info("VER="+m.la));const St=Ne[4];St!=null&&(m.Aa=St,m.j.info("SVER="+m.Aa));const ji=Ne[5];ji!=null&&typeof ji=="number"&&0<ji&&(y=1.5*ji,m.L=y,m.j.info("backChannelRequestTimeoutMs_="+y)),y=m;const vn=l.g;if(vn){const xa=vn.g?vn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(xa){var M=y.h;M.g||xa.indexOf("spdy")==-1&&xa.indexOf("quic")==-1&&xa.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(lu(M,M.h),M.h=null))}if(y.D){const fu=vn.g?vn.g.getResponseHeader("X-HTTP-Session-Id"):null;fu&&(y.ya=fu,Ge(y.I,y.D,fu))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),y=m;var X=l;if(y.qa=Mp(y,y.J?y.ia:null,y.W),X.K){dp(y.h,X);var Be=X,Et=y.L;Et&&(Be.I=Et),Be.B&&(su(Be),wa(Be)),y.g=X}else Op(y);0<m.i.length&&Ca(m)}else Ne[0]!="stop"&&Ne[0]!="close"||ni(m,7);else m.G==3&&(Ne[0]=="stop"||Ne[0]=="close"?Ne[0]=="stop"?ni(m,7):uu(m):Ne[0]!="noop"&&m.l&&m.l.ta(Ne),m.v=0)}}Us(4)}catch{}}var d0=class{constructor(l,d){this.g=l,this.map=d}};function cp(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function up(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function hp(l){return l.h?1:l.g?l.g.size:0}function au(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function lu(l,d){l.g?l.g.add(d):l.h=d}function dp(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}cp.prototype.cancel=function(){if(this.i=fp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function fp(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const m of l.g.values())d=d.concat(m.D);return d}return C(l.i)}function f0(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map!="undefined"&&l instanceof Map||typeof Set!="undefined"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var d=[],m=l.length,y=0;y<m;y++)d.push(l[y]);return d}d=[],m=0;for(y in l)d[m++]=l[y];return d}function p0(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map!="undefined"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set!="undefined"&&l instanceof Set)){if(c(l)||typeof l=="string"){var d=[];l=l.length;for(var m=0;m<l;m++)d.push(m);return d}d=[],m=0;for(const y in l)d[m++]=y;return d}}}function pp(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var m=p0(l),y=f0(l),N=y.length,M=0;M<N;M++)d.call(void 0,y[M],m&&m[M],l)}var mp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function m0(l,d){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var y=l[m].indexOf("="),N=null;if(0<=y){var M=l[m].substring(0,y);N=l[m].substring(y+1)}else M=l[m];d(M,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function ti(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof ti){this.h=l.h,Ea(this,l.j),this.o=l.o,this.g=l.g,Ta(this,l.s),this.l=l.l;var d=l.i,m=new zs;m.i=d.i,d.g&&(m.g=new Map(d.g),m.h=d.h),gp(this,m),this.m=l.m}else l&&(d=String(l).match(mp))?(this.h=!1,Ea(this,d[1]||"",!0),this.o=js(d[2]||""),this.g=js(d[3]||"",!0),Ta(this,d[4]),this.l=js(d[5]||"",!0),gp(this,d[6]||"",!0),this.m=js(d[7]||"")):(this.h=!1,this.i=new zs(null,this.h))}ti.prototype.toString=function(){var l=[],d=this.j;d&&l.push(Hs(d,_p,!0),":");var m=this.g;return(m||d=="file")&&(l.push("//"),(d=this.o)&&l.push(Hs(d,_p,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(Hs(m,m.charAt(0)=="/"?y0:_0,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",Hs(m,w0)),l.join("")};function zn(l){return new ti(l)}function Ea(l,d,m){l.j=m?js(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function Ta(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function gp(l,d,m){d instanceof zs?(l.i=d,E0(l.i,l.h)):(m||(d=Hs(d,v0)),l.i=new zs(d,l.h))}function Ge(l,d,m){l.i.set(d,m)}function ba(l){return Ge(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function js(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Hs(l,d,m){return typeof l=="string"?(l=encodeURI(l).replace(d,g0),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function g0(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var _p=/[#\/\?@]/g,_0=/[#\?:]/g,y0=/[#\?]/g,v0=/[#\?@]/g,w0=/#/g;function zs(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function yr(l){l.g||(l.g=new Map,l.h=0,l.i&&m0(l.i,function(d,m){l.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}t=zs.prototype,t.add=function(l,d){yr(this),this.i=null,l=qi(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(d),this.h+=1,this};function yp(l,d){yr(l),d=qi(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function vp(l,d){return yr(l),d=qi(l,d),l.g.has(d)}t.forEach=function(l,d){yr(this),this.g.forEach(function(m,y){m.forEach(function(N){l.call(d,N,y,this)},this)},this)},t.na=function(){yr(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),m=[];for(let y=0;y<d.length;y++){const N=l[y];for(let M=0;M<N.length;M++)m.push(d[y])}return m},t.V=function(l){yr(this);let d=[];if(typeof l=="string")vp(this,l)&&(d=d.concat(this.g.get(qi(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)d=d.concat(l[m])}return d},t.set=function(l,d){return yr(this),this.i=null,l=qi(this,l),vp(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function wp(l,d,m){yp(l,d),0<m.length&&(l.i=null,l.g.set(qi(l,d),C(m)),l.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var m=0;m<d.length;m++){var y=d[m];const M=encodeURIComponent(String(y)),X=this.V(y);for(y=0;y<X.length;y++){var N=M;X[y]!==""&&(N+="="+encodeURIComponent(String(X[y]))),l.push(N)}}return this.i=l.join("&")};function qi(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function E0(l,d){d&&!l.j&&(yr(l),l.i=null,l.g.forEach(function(m,y){var N=y.toLowerCase();y!=N&&(yp(this,y),wp(this,N,m))},l)),l.j=d}function T0(l,d){const m=new qs;if(a.Image){const y=new Image;y.onload=g(vr,m,"TestLoadImage: loaded",!0,d,y),y.onerror=g(vr,m,"TestLoadImage: error",!1,d,y),y.onabort=g(vr,m,"TestLoadImage: abort",!1,d,y),y.ontimeout=g(vr,m,"TestLoadImage: timeout",!1,d,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=l}else d(!1)}function b0(l,d){const m=new qs,y=new AbortController,N=setTimeout(()=>{y.abort(),vr(m,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:y.signal}).then(M=>{clearTimeout(N),M.ok?vr(m,"TestPingServer: ok",!0,d):vr(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(N),vr(m,"TestPingServer: error",!1,d)})}function vr(l,d,m,y,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),y(m)}catch{}}function I0(){this.g=new ga}function A0(l,d,m){const y=m||"";try{pp(l,function(N,M){let X=N;u(N)&&(X=wt(N)),d.push(y+M+"="+encodeURIComponent(X))})}catch(N){throw d.push(y+"type="+encodeURIComponent("_badmap")),N}}function Ia(l){this.l=l.Ub||null,this.j=l.eb||!1}w(Ia,Zc),Ia.prototype.g=function(){return new Aa(this.l,this.j)},Ia.prototype.i=function(l){return function(){return l}}({});function Aa(l,d){pe.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}w(Aa,pe),t=Aa.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,Ks(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ws(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Ks(this)),this.g&&(this.readyState=3,Ks(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream!="undefined"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ep(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ep(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?Ws(this):Ks(this),this.readyState==3&&Ep(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Ws(this))},t.Qa=function(l){this.g&&(this.response=l,Ws(this))},t.ga=function(){this.g&&Ws(this)};function Ws(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Ks(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=d.next();return l.join(`\r
`)};function Ks(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Aa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Tp(l){let d="";return j(l,function(m,y){d+=y,d+=":",d+=m,d+=`\r
`}),d}function cu(l,d,m){e:{for(y in m){var y=!1;break e}y=!0}y||(m=Tp(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):Ge(l,d,m))}function tt(l){pe.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}w(tt,pe);var R0=/^https?$/i,S0=["POST","PUT"];t=tt.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,m,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():nu.g(),this.v=this.o?Jf(this.o):Jf(nu),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(M){bp(this,M);return}if(l=m||"",m=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var N in y)m.set(N,y[N]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const M of y.keys())m.set(M,y.get(M));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(m.keys()).find(M=>M.toLowerCase()=="content-type"),N=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(S0,d,void 0))||y||N||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,X]of m)this.g.setRequestHeader(M,X);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Rp(this),this.u=!0,this.g.send(l),this.u=!1}catch(M){bp(this,M)}};function bp(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,Ip(l),Ra(l)}function Ip(l){l.A||(l.A=!0,be(l,"complete"),be(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,be(this,"complete"),be(this,"abort"),Ra(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ra(this,!0)),tt.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ap(this):this.bb())},t.bb=function(){Ap(this)};function Ap(l){if(l.h&&typeof o!="undefined"&&(!l.v[1]||Wn(l)!=4||l.Z()!=2)){if(l.u&&Wn(l)==4)At(l.Ea,0,l);else if(be(l,"readystatechange"),Wn(l)==4){l.h=!1;try{const X=l.Z();e:switch(X){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var m;if(!(m=d)){var y;if(y=X===0){var N=String(l.D).match(mp)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),y=!R0.test(N?N.toLowerCase():"")}m=y}if(m)be(l,"complete"),be(l,"success");else{l.m=6;try{var M=2<Wn(l)?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.Z()+"]",Ip(l)}}finally{Ra(l)}}}}function Ra(l,d){if(l.g){Rp(l);const m=l.g,y=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||be(l,"ready");try{m.onreadystatechange=y}catch{}}}function Rp(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Wn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Wn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),an(d)}};function Sp(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function C0(l){const d={};l=(l.g&&2<=Wn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<l.length;y++){if(k(l[y]))continue;var m=T(l[y]);const N=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const M=d[N]||[];d[N]=M,M.push(m)}b(d,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Gs(l,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||d}function Cp(l){this.Aa=0,this.i=[],this.j=new qs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Gs("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Gs("baseRetryDelayMs",5e3,l),this.cb=Gs("retryDelaySeedMs",1e4,l),this.Wa=Gs("forwardChannelMaxRetries",2,l),this.wa=Gs("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new cp(l&&l.concurrentRequestLimit),this.Da=new I0,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Cp.prototype,t.la=8,t.G=1,t.connect=function(l,d,m,y){Vt(0),this.W=l,this.H=d||{},m&&y!==void 0&&(this.H.OSID=m,this.H.OAID=y),this.F=this.X,this.I=Mp(this,null,this.W),Ca(this)};function uu(l){if(Pp(l),l.G==3){var d=l.U++,m=zn(l.I);if(Ge(m,"SID",l.K),Ge(m,"RID",d),Ge(m,"TYPE","terminate"),Qs(l,m),d=new _r(l,l.j,d),d.L=2,d.v=ba(zn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=d.v,m=!0),m||(d.g=Fp(d.j,null),d.g.ea(d.v)),d.F=Date.now(),wa(d)}Vp(l)}function Sa(l){l.g&&(du(l),l.g.cancel(),l.g=null)}function Pp(l){Sa(l),l.u&&(a.clearTimeout(l.u),l.u=null),Pa(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Ca(l){if(!up(l.h)&&!l.s){l.s=!0;var d=l.Ga;_e||Je(),he||(_e(),he=!0),qe.add(d,l),l.B=0}}function P0(l,d){return hp(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=$s(p(l.Ga,l,d),Lp(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const N=new _r(this,this.j,l);let M=this.o;if(this.S&&(M?(M=v(M),A(M,this.S)):M=this.S),this.m!==null||this.O||(N.H=M,M=null),this.P)e:{for(var d=0,m=0;m<this.i.length;m++){t:{var y=this.i[m];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(d+=y,4096<d){d=m;break e}if(d===4096||m===this.i.length-1){d=m+1;break e}}d=1e3}else d=1e3;d=xp(this,N,d),m=zn(this.I),Ge(m,"RID",l),Ge(m,"CVER",22),this.D&&Ge(m,"X-HTTP-Session-Id",this.D),Qs(this,m),M&&(this.O?d="headers="+encodeURIComponent(String(Tp(M)))+"&"+d:this.m&&cu(m,this.m,M)),lu(this.h,N),this.Ua&&Ge(m,"TYPE","init"),this.P?(Ge(m,"$req",d),Ge(m,"SID","null"),N.T=!0,iu(N,m,null)):iu(N,m,d),this.G=2}}else this.G==3&&(l?kp(this,l):this.i.length==0||up(this.h)||kp(this))};function kp(l,d){var m;d?m=d.l:m=l.U++;const y=zn(l.I);Ge(y,"SID",l.K),Ge(y,"RID",m),Ge(y,"AID",l.T),Qs(l,y),l.m&&l.o&&cu(y,l.m,l.o),m=new _r(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),d&&(l.i=d.D.concat(l.i)),d=xp(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),lu(l.h,m),iu(m,y,d)}function Qs(l,d){l.H&&j(l.H,function(m,y){Ge(d,y,m)}),l.l&&pp({},function(m,y){Ge(d,y,m)})}function xp(l,d,m){m=Math.min(l.i.length,m);var y=l.l?p(l.l.Na,l.l,l):null;e:{var N=l.i;let M=-1;for(;;){const X=["count="+m];M==-1?0<m?(M=N[0].g,X.push("ofs="+M)):M=0:X.push("ofs="+M);let Be=!0;for(let Et=0;Et<m;Et++){let Ne=N[Et].g;const Rt=N[Et].map;if(Ne-=M,0>Ne)M=Math.max(0,N[Et].g-100),Be=!1;else try{A0(Rt,X,"req"+Ne+"_")}catch{y&&y(Rt)}}if(Be){y=X.join("&");break e}}}return l=l.i.splice(0,m),d.D=l,y}function Op(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;_e||Je(),he||(_e(),he=!0),qe.add(d,l),l.v=0}}function hu(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=$s(p(l.Fa,l),Lp(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Dp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=$s(p(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Vt(10),Sa(this),Dp(this))};function du(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Dp(l){l.g=new _r(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=zn(l.qa);Ge(d,"RID","rpc"),Ge(d,"SID",l.K),Ge(d,"AID",l.T),Ge(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ge(d,"TO",l.ja),Ge(d,"TYPE","xmlhttp"),Qs(l,d),l.m&&l.o&&cu(d,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=ba(zn(d)),m.m=null,m.P=!0,op(m,l)}t.Za=function(){this.C!=null&&(this.C=null,Sa(this),hu(this),Vt(19))};function Pa(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Np(l,d){var m=null;if(l.g==d){Pa(l),du(l),l.g=null;var y=2}else if(au(l.h,d))m=d.D,dp(l.h,d),y=1;else return;if(l.G!=0){if(d.o)if(y==1){m=d.m?d.m.length:0,d=Date.now()-d.F;var N=l.B;y=_a(),be(y,new np(y,m)),Ca(l)}else Op(l);else if(N=d.s,N==3||N==0&&0<d.X||!(y==1&&P0(l,d)||y==2&&hu(l)))switch(m&&0<m.length&&(d=l.h,d.i=d.i.concat(m)),N){case 1:ni(l,5);break;case 4:ni(l,10);break;case 3:ni(l,6);break;default:ni(l,2)}}}function Lp(l,d){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*d}function ni(l,d){if(l.j.info("Error code "+d),d==2){var m=p(l.fb,l),y=l.Xa;const N=!y;y=new ti(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ea(y,"https"),ba(y),N?T0(y.toString(),m):b0(y.toString(),m)}else Vt(2);l.G=0,l.l&&l.l.sa(d),Vp(l),Pp(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Vt(2)):(this.j.info("Failed to ping google.com"),Vt(1))};function Vp(l){if(l.G=0,l.ka=[],l.l){const d=fp(l.h);(d.length!=0||l.i.length!=0)&&(S(l.ka,d),S(l.ka,l.i),l.h.i.length=0,C(l.i),l.i.length=0),l.l.ra()}}function Mp(l,d,m){var y=m instanceof ti?zn(m):new ti(m);if(y.g!="")d&&(y.g=d+"."+y.g),Ta(y,y.s);else{var N=a.location;y=N.protocol,d=d?d+"."+N.hostname:N.hostname,N=+N.port;var M=new ti(null);y&&Ea(M,y),d&&(M.g=d),N&&Ta(M,N),m&&(M.l=m),y=M}return m=l.D,d=l.ya,m&&d&&Ge(y,m,d),Ge(y,"VER",l.la),Qs(l,y),y}function Fp(l,d,m){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new tt(new Ia({eb:m})):new tt(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Up(){}t=Up.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ka(){}ka.prototype.g=function(l,d){return new en(l,d)};function en(l,d){pe.call(this),this.g=new Cp(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!k(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!k(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new Bi(this)}w(en,pe),en.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},en.prototype.close=function(){uu(this.g)},en.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=wt(l),l=m);d.i.push(new d0(d.Ya++,l)),d.G==3&&Ca(d)},en.prototype.N=function(){this.g.l=null,delete this.j,uu(this.g),delete this.g,en.aa.N.call(this)};function $p(l){eu.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const m in d){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}w($p,eu);function qp(){tu.call(this),this.status=1}w(qp,tu);function Bi(l){this.g=l}w(Bi,Up),Bi.prototype.ua=function(){be(this.g,"a")},Bi.prototype.ta=function(l){be(this.g,new $p(l))},Bi.prototype.sa=function(l){be(this.g,new qp)},Bi.prototype.ra=function(){be(this.g,"b")},ka.prototype.createWebChannel=ka.prototype.g,en.prototype.send=en.prototype.o,en.prototype.open=en.prototype.m,en.prototype.close=en.prototype.close,qE=function(){return new ka},$E=function(){return _a()},UE=Zr,jh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ya.NO_ERROR=0,ya.TIMEOUT=8,ya.HTTP_ERROR=6,al=ya,rp.COMPLETE="complete",FE=rp,Xf.EventType=Fs,Fs.OPEN="a",Fs.CLOSE="b",Fs.ERROR="c",Fs.MESSAGE="d",pe.prototype.listen=pe.prototype.K,ao=Xf,tt.prototype.listenOnce=tt.prototype.L,tt.prototype.getLastError=tt.prototype.Ka,tt.prototype.getLastErrorCode=tt.prototype.Ba,tt.prototype.getStatus=tt.prototype.Z,tt.prototype.getResponseJson=tt.prototype.Oa,tt.prototype.getResponseText=tt.prototype.oa,tt.prototype.send=tt.prototype.ea,tt.prototype.setWithCredentials=tt.prototype.Ha,ME=tt}).apply(typeof qa!="undefined"?qa:typeof self!="undefined"?self:typeof window!="undefined"?window:{});const Wg="@firebase/firestore",Kg="4.7.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}kt.UNAUTHENTICATED=new kt(null),kt.GOOGLE_CREDENTIALS=new kt("google-credentials-uid"),kt.FIRST_PARTY=new kt("first-party-uid"),kt.MOCK_USER=new kt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ds="11.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=new Ac("@firebase/firestore");function Ji(){return Ci.logLevel}function ie(t,...e){if(Ci.logLevel<=Se.DEBUG){const n=e.map(Xd);Ci.debug(`Firestore (${Ds}): ${t}`,...n)}}function cr(t,...e){if(Ci.logLevel<=Se.ERROR){const n=e.map(Xd);Ci.error(`Firestore (${Ds}): ${t}`,...n)}}function Ts(t,...e){if(Ci.logLevel<=Se.WARN){const n=e.map(Xd);Ci.warn(`Firestore (${Ds}): ${t}`,...n)}}function Xd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(t="Unexpected state"){const e=`FIRESTORE (${Ds}) INTERNAL ASSERTION FAILED: `+t;throw cr(e),new Error(e)}function Me(t,e){t||ye()}function Te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends yn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class y1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(kt.UNAUTHENTICATED))}shutdown(){}}class v1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class w1{constructor(e){this.t=e,this.currentUser=kt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Me(this.o===void 0);let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new ir;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ir,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ir)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Me(typeof r.accessToken=="string"),new BE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Me(e===null||typeof e=="string"),new kt(e)}}class E1{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=kt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class T1{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new E1(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(kt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Gg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class b1{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Ht(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){Me(this.o===void 0);const r=s=>{s.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,ie("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Gg(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Me(typeof n.token=="string"),this.R=n.token,new Gg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I1(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=I1(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ke(t,e){return t<e?-1:t>e?1:0}function bs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg=-62135596800,Yg=1e6;class gt{static now(){return gt.fromMillis(Date.now())}static fromDate(e){return gt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Yg);return new gt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new te($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new te($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Qg)throw new te($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Yg}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Qg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{static fromTimestamp(e){return new we(e)}static min(){return new we(new gt(0,0))}static max(){return new we(new gt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg="__name__";class Mn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ye(),r===void 0?r=e.length-n:r>e.length-n&&ye(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Mn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Mn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Mn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return Math.sign(e.length-n.length)}static compareSegments(e,n){const r=Mn.isNumericId(e),i=Mn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Mn.extractNumericId(e).compare(Mn.extractNumericId(n)):e<n?-1:e>n?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Mr.fromString(e.substring(4,e.length-2))}}class We extends Mn{construct(e,n,r){return new We(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new te($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new We(n)}static emptyPath(){return new We([])}}const A1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bt extends Mn{construct(e,n,r){return new bt(e,n,r)}static isValidIdentifier(e){return A1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Jg}static keyField(){return new bt([Jg])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new te($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new te($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new te($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new te($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new bt(n)}static emptyPath(){return new bt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.path=e}static fromPath(e){return new le(We.fromString(e))}static fromName(e){return new le(We.fromString(e).popFirst(5))}static empty(){return new le(We.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&We.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return We.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new le(new We(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo=-1;function R1(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=we.fromTimestamp(r===1e9?new gt(n+1,0):new gt(n,r));return new qr(i,le.empty(),e)}function S1(t){return new qr(t.readTime,t.key,Bo)}class qr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new qr(we.min(),le.empty(),Bo)}static max(){return new qr(we.max(),le.empty(),Bo)}}function C1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=le.comparator(t.documentKey,e.documentKey),n!==0?n:ke(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class k1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ns(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==P1)throw t;ie("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ye(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(i=>i?B.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new B((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;n(e[u]).next(h=>{o[u]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new B((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function x1(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ls(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}kc.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd=-1;function xc(t){return t==null}function Hl(t){return t===0&&1/t==-1/0}function O1(t){return typeof t=="number"&&Number.isInteger(t)&&!Hl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE="";function D1(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Xg(e)),e=N1(t.get(n),e);return Xg(e)}function N1(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case HE:n+="";break;default:n+=s}}return n}function Xg(t){return t+HE+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Jr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function zE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,n){this.comparator=e,this.root=n||Tt.EMPTY}insert(e,n){return new Xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Tt.BLACK,null,null))}remove(e){return new Xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ba(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ba(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ba(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ba(this.root,e,this.comparator,!0)}}class Ba{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Tt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Tt.RED,this.left=i!=null?i:Tt.EMPTY,this.right=s!=null?s:Tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Tt(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Tt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ye();const e=this.left.check();if(e!==this.right.check())throw ye();return e+(this.isRed()?0:1)}}Tt.EMPTY=null,Tt.RED=!0,Tt.BLACK=!1;Tt.EMPTY=new class{constructor(){this.size=0}get key(){throw ye()}get value(){throw ye()}get color(){throw ye()}get left(){throw ye()}get right(){throw ye()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Tt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.comparator=e,this.data=new Xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new e_(this.data.getIterator())}getIteratorFrom(e){return new e_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof _t)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new _t(this.comparator);return n.data=e,n}}class e_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.fields=e,e.sort(bt.comparator)}static empty(){return new nn([])}unionWith(e){let n=new _t(bt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new nn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return bs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException!="undefined"&&s instanceof DOMException?new WE("Invalid base64 string: "+s):s}}(e);return new It(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new It(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}It.EMPTY_BYTE_STRING=new It("");const L1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Br(t){if(Me(!!t),typeof t=="string"){let e=0;const n=L1.exec(t);if(Me(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ot(t.seconds),nanos:ot(t.nanos)}}function ot(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function jr(t){return typeof t=="string"?It.fromBase64String(t):It.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE="server_timestamp",GE="__type__",QE="__previous_value__",YE="__local_write_time__";function Oc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[GE])===null||n===void 0?void 0:n.stringValue)===KE}function Dc(t){const e=t.mapValue.fields[QE];return Oc(e)?Dc(e):e}function jo(t){const e=Br(t.mapValue.fields[YE].timestampValue);return new gt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(e,n,r,i,s,o,a,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}const zl="(default)";class Ho{constructor(e,n){this.projectId=e,this.database=n||zl}static empty(){return new Ho("","")}get isDefaultDatabase(){return this.database===zl}isEqual(e){return e instanceof Ho&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE="__type__",XE="__max__",ja={mapValue:{fields:{__type__:{stringValue:XE}}}},ZE="__vector__",Wl="value";function Hr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Oc(t)?4:F1(t)?9007199254740991:M1(t)?10:11:ye()}function Hn(t,e){if(t===e)return!0;const n=Hr(t);if(n!==Hr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return jo(t).isEqual(jo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Br(i.timestampValue),a=Br(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return jr(i.bytesValue).isEqual(jr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ot(i.geoPointValue.latitude)===ot(s.geoPointValue.latitude)&&ot(i.geoPointValue.longitude)===ot(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ot(i.integerValue)===ot(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ot(i.doubleValue),a=ot(s.doubleValue);return o===a?Hl(o)===Hl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return bs(t.arrayValue.values||[],e.arrayValue.values||[],Hn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Zg(o)!==Zg(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Hn(o[c],a[c])))return!1;return!0}(t,e);default:return ye()}}function zo(t,e){return(t.values||[]).find(n=>Hn(n,e))!==void 0}function Is(t,e){if(t===e)return 0;const n=Hr(t),r=Hr(e);if(n!==r)return ke(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ke(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ot(s.integerValue||s.doubleValue),c=ot(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return t_(t.timestampValue,e.timestampValue);case 4:return t_(jo(t),jo(e));case 5:return ke(t.stringValue,e.stringValue);case 6:return function(s,o){const a=jr(s),c=jr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const h=ke(a[u],c[u]);if(h!==0)return h}return ke(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ke(ot(s.latitude),ot(o.latitude));return a!==0?a:ke(ot(s.longitude),ot(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return n_(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,c,u,h;const f=s.fields||{},p=o.fields||{},g=(a=f[Wl])===null||a===void 0?void 0:a.arrayValue,w=(c=p[Wl])===null||c===void 0?void 0:c.arrayValue,C=ke(((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0,((h=w==null?void 0:w.values)===null||h===void 0?void 0:h.length)||0);return C!==0?C:n_(g,w)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===ja.mapValue&&o===ja.mapValue)return 0;if(s===ja.mapValue)return 1;if(o===ja.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let f=0;f<c.length&&f<h.length;++f){const p=ke(c[f],h[f]);if(p!==0)return p;const g=Is(a[c[f]],u[h[f]]);if(g!==0)return g}return ke(c.length,h.length)}(t.mapValue,e.mapValue);default:throw ye()}}function t_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ke(t,e);const n=Br(t),r=Br(e),i=ke(n.seconds,r.seconds);return i!==0?i:ke(n.nanos,r.nanos)}function n_(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Is(n[i],r[i]);if(s)return s}return ke(n.length,r.length)}function As(t){return Hh(t)}function Hh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Br(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return jr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return le.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Hh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Hh(n.fields[o])}`;return i+"}"}(t.mapValue):ye()}function ll(t){switch(Hr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Dc(t);return e?16+ll(e):16;case 5:return 2*t.stringValue.length;case 6:return jr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+ll(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Jr(r.fields,(s,o)=>{i+=s.length+ll(o)}),i}(t.mapValue);default:throw ye()}}function Kl(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function zh(t){return!!t&&"integerValue"in t}function ef(t){return!!t&&"arrayValue"in t}function r_(t){return!!t&&"nullValue"in t}function i_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function cl(t){return!!t&&"mapValue"in t}function M1(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[JE])===null||n===void 0?void 0:n.stringValue)===ZE}function bo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Jr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=bo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=bo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function F1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===XE}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.value=e}static empty(){return new Qt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!cl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=bo(n)}setAll(e){let n=bt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=bo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());cl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Hn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];cl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Jr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Qt(bo(this.value))}}function eT(t){const e=[];return Jr(t.fields,(n,r)=>{const i=new bt([n]);if(cl(r)){const s=eT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new nn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Dt(e,0,we.min(),we.min(),we.min(),Qt.empty(),0)}static newFoundDocument(e,n,r,i){return new Dt(e,1,n,we.min(),r,i,0)}static newNoDocument(e,n){return new Dt(e,2,n,we.min(),we.min(),Qt.empty(),0)}static newUnknownDocument(e,n){return new Dt(e,3,n,we.min(),we.min(),Qt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,n){this.position=e,this.inclusive=n}}function s_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=le.comparator(le.fromName(o.referenceValue),n.key):r=Is(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function o_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Hn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,n="asc"){this.field=e,this.dir=n}}function U1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{}class ht extends tT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new q1(e,n,r):n==="array-contains"?new H1(e,r):n==="in"?new z1(e,r):n==="not-in"?new W1(e,r):n==="array-contains-any"?new K1(e,r):new ht(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new B1(e,r):new j1(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Is(n,this.value)):n!==null&&Hr(this.value)===Hr(n)&&this.matchesComparison(Is(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ye()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class kn extends tT{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new kn(e,n)}matches(e){return nT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function nT(t){return t.op==="and"}function rT(t){return $1(t)&&nT(t)}function $1(t){for(const e of t.filters)if(e instanceof kn)return!1;return!0}function Wh(t){if(t instanceof ht)return t.field.canonicalString()+t.op.toString()+As(t.value);if(rT(t))return t.filters.map(e=>Wh(e)).join(",");{const e=t.filters.map(n=>Wh(n)).join(",");return`${t.op}(${e})`}}function iT(t,e){return t instanceof ht?function(r,i){return i instanceof ht&&r.op===i.op&&r.field.isEqual(i.field)&&Hn(r.value,i.value)}(t,e):t instanceof kn?function(r,i){return i instanceof kn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&iT(o,i.filters[a]),!0):!1}(t,e):void ye()}function sT(t){return t instanceof ht?function(n){return`${n.field.canonicalString()} ${n.op} ${As(n.value)}`}(t):t instanceof kn?function(n){return n.op.toString()+" {"+n.getFilters().map(sT).join(" ,")+"}"}(t):"Filter"}class q1 extends ht{constructor(e,n,r){super(e,n,r),this.key=le.fromName(r.referenceValue)}matches(e){const n=le.comparator(e.key,this.key);return this.matchesComparison(n)}}class B1 extends ht{constructor(e,n){super(e,"in",n),this.keys=oT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class j1 extends ht{constructor(e,n){super(e,"not-in",n),this.keys=oT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function oT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>le.fromName(r.referenceValue))}class H1 extends ht{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ef(n)&&zo(n.arrayValue,this.value)}}class z1 extends ht{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&zo(this.value.arrayValue,n)}}class W1 extends ht{constructor(e,n){super(e,"not-in",n)}matches(e){if(zo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!zo(this.value.arrayValue,n)}}class K1 extends ht{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ef(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>zo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.le=null}}function a_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new G1(t,e,n,r,i,s,o)}function tf(t){const e=Te(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Wh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),xc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>As(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>As(r)).join(",")),e.le=n}return e.le}function nf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!U1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!iT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!o_(t.startAt,e.startAt)&&o_(t.endAt,e.endAt)}function Kh(t){return le.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Q1(t,e,n,r,i,s,o,a){return new Vi(t,e,n,r,i,s,o,a)}function rf(t){return new Vi(t)}function l_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function sf(t){return t.collectionGroup!==null}function ms(t){const e=Te(t);if(e.he===null){e.he=[];const n=new Set;for(const s of e.explicitOrderBy)e.he.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new _t(bt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.he.push(new Wo(s,r))}),n.has(bt.keyField().canonicalString())||e.he.push(new Wo(bt.keyField(),r))}return e.he}function Bn(t){const e=Te(t);return e.Pe||(e.Pe=Y1(e,ms(t))),e.Pe}function Y1(t,e){if(t.limitType==="F")return a_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Wo(i.field,s)});const n=t.endAt?new Rs(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Rs(t.startAt.position,t.startAt.inclusive):null;return a_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Gh(t,e){const n=t.filters.concat([e]);return new Vi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Gl(t,e,n){return new Vi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Nc(t,e){return nf(Bn(t),Bn(e))&&t.limitType===e.limitType}function aT(t){return`${tf(Bn(t))}|lt:${t.limitType}`}function Xi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>sT(i)).join(", ")}]`),xc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>As(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>As(i)).join(",")),`Target(${r})`}(Bn(t))}; limitType=${t.limitType})`}function Lc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):le.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ms(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,c){const u=s_(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,ms(r),i)||r.endAt&&!function(o,a,c){const u=s_(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,ms(r),i))}(t,e)}function J1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function lT(t){return(e,n)=>{let r=!1;for(const i of ms(t)){const s=X1(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function X1(t,e,n){const r=t.field.isKeyField()?le.comparator(e.key,n.key):function(s,o,a){const c=o.data.field(s),u=a.data.field(s);return c!==null&&u!==null?Is(c,u):ye()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ye()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Jr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return zE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1=new Xe(le.comparator);function ur(){return Z1}const cT=new Xe(le.comparator);function lo(...t){let e=cT;for(const n of t)e=e.insert(n.key,n);return e}function uT(t){let e=cT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function di(){return Io()}function hT(){return Io()}function Io(){return new Mi(t=>t.toString(),(t,e)=>t.isEqual(e))}const eD=new Xe(le.comparator),tD=new _t(le.comparator);function Ce(...t){let e=tD;for(const n of t)e=e.add(n);return e}const nD=new _t(ke);function rD(){return nD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hl(e)?"-0":e}}function dT(t){return{integerValue:""+t}}function fT(t,e){return O1(e)?dT(e):of(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(){this._=void 0}}function iD(t,e,n){return t instanceof Ko?function(i,s){const o={fields:{[GE]:{stringValue:KE},[YE]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Oc(s)&&(s=Dc(s)),s&&(o.fields[QE]=s),{mapValue:o}}(n,e):t instanceof Go?mT(t,e):t instanceof Qo?gT(t,e):function(i,s){const o=pT(i,s),a=c_(o)+c_(i.Ie);return zh(o)&&zh(i.Ie)?dT(a):of(i.serializer,a)}(t,e)}function sD(t,e,n){return t instanceof Go?mT(t,e):t instanceof Qo?gT(t,e):n}function pT(t,e){return t instanceof Yo?function(r){return zh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ko extends Vc{}class Go extends Vc{constructor(e){super(),this.elements=e}}function mT(t,e){const n=_T(e);for(const r of t.elements)n.some(i=>Hn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Qo extends Vc{constructor(e){super(),this.elements=e}}function gT(t,e){let n=_T(e);for(const r of t.elements)n=n.filter(i=>!Hn(i,r));return{arrayValue:{values:n}}}class Yo extends Vc{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function c_(t){return ot(t.integerValue||t.doubleValue)}function _T(t){return ef(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e,n){this.field=e,this.transform=n}}function oD(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Go&&i instanceof Go||r instanceof Qo&&i instanceof Qo?bs(r.elements,i.elements,Hn):r instanceof Yo&&i instanceof Yo?Hn(r.Ie,i.Ie):r instanceof Ko&&i instanceof Ko}(t.transform,e.transform)}class aD{constructor(e,n){this.version=e,this.transformResults=n}}class pn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new pn}static exists(e){return new pn(void 0,e)}static updateTime(e){return new pn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ul(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Mc{}function vT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new af(t.key,pn.none()):new ca(t.key,t.data,pn.none());{const n=t.data,r=Qt.empty();let i=new _t(bt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Xr(t.key,r,new nn(i.toArray()),pn.none())}}function lD(t,e,n){t instanceof ca?function(i,s,o){const a=i.value.clone(),c=h_(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Xr?function(i,s,o){if(!ul(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=h_(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(wT(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ao(t,e,n,r){return t instanceof ca?function(s,o,a,c){if(!ul(s.precondition,o))return a;const u=s.value.clone(),h=d_(s.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Xr?function(s,o,a,c){if(!ul(s.precondition,o))return a;const u=d_(s.fieldTransforms,c,o),h=o.data;return h.setAll(wT(s)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return ul(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function cD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=pT(r.transform,i||null);s!=null&&(n===null&&(n=Qt.empty()),n.set(r.field,s))}return n||null}function u_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&bs(r,i,(s,o)=>oD(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ca extends Mc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Xr extends Mc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function wT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function h_(t,e,n){const r=new Map;Me(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,sD(o,a,n[i]))}return r}function d_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,iD(s,o,e))}return r}class af extends Mc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class uD extends Mc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hD{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&lD(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ao(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ao(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=hT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=vT(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(we.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ce())}isEqual(e){return this.batchId===e.batchId&&bs(this.mutations,e.mutations,(n,r)=>u_(n,r))&&bs(this.baseMutations,e.baseMutations,(n,r)=>u_(n,r))}}class lf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Me(e.mutations.length===r.length);let i=function(){return eD}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new lf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct,Oe;function pD(t){switch(t){case $.OK:return ye();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return ye()}}function ET(t){if(t===void 0)return cr("GRPC error has no .code"),$.UNKNOWN;switch(t){case ct.OK:return $.OK;case ct.CANCELLED:return $.CANCELLED;case ct.UNKNOWN:return $.UNKNOWN;case ct.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case ct.INTERNAL:return $.INTERNAL;case ct.UNAVAILABLE:return $.UNAVAILABLE;case ct.UNAUTHENTICATED:return $.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case ct.NOT_FOUND:return $.NOT_FOUND;case ct.ALREADY_EXISTS:return $.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return $.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case ct.ABORTED:return $.ABORTED;case ct.OUT_OF_RANGE:return $.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return $.UNIMPLEMENTED;case ct.DATA_LOSS:return $.DATA_LOSS;default:return ye()}}(Oe=ct||(ct={}))[Oe.OK=0]="OK",Oe[Oe.CANCELLED=1]="CANCELLED",Oe[Oe.UNKNOWN=2]="UNKNOWN",Oe[Oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Oe[Oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Oe[Oe.NOT_FOUND=5]="NOT_FOUND",Oe[Oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Oe[Oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Oe[Oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Oe[Oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Oe[Oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Oe[Oe.ABORTED=10]="ABORTED",Oe[Oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Oe[Oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Oe[Oe.INTERNAL=13]="INTERNAL",Oe[Oe.UNAVAILABLE=14]="UNAVAILABLE",Oe[Oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mD(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gD=new Mr([4294967295,4294967295],0);function f_(t){const e=mD().encode(t),n=new VE;return n.update(e),new Uint8Array(n.digest())}function p_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Mr([n,r],0),new Mr([i,s],0)]}class cf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new co(`Invalid padding: ${n}`);if(r<0)throw new co(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new co(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new co(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=Mr.fromNumber(this.Ee)}Ae(e,n,r){let i=e.add(n.multiply(Mr.fromNumber(r)));return i.compare(gD)===1&&(i=new Mr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const n=f_(e),[r,i]=p_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ae(r,i,s);if(!this.Re(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new cf(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ee===0)return;const n=f_(e),[r,i]=p_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ae(r,i,s);this.Ve(o)}}Ve(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class co extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ua.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Fc(we.min(),i,new Xe(ke),ur(),Ce())}}class ua{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ua(r,n,Ce(),Ce(),Ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n,r,i){this.me=e,this.removedTargetIds=n,this.key=r,this.fe=i}}class TT{constructor(e,n){this.targetId=e,this.ge=n}}class bT{constructor(e,n,r=It.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class m_{constructor(){this.pe=0,this.ye=g_(),this.we=It.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.we=e)}Fe(){let e=Ce(),n=Ce(),r=Ce();return this.ye.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ye()}}),new ua(this.we,this.be,e,n,r)}Me(){this.Se=!1,this.ye=g_()}xe(e,n){this.Se=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.Se=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Me(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class _D{constructor(e){this.ke=e,this.qe=new Map,this.Qe=ur(),this.$e=Ha(),this.Ke=Ha(),this.Ue=new Xe(ke)}We(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(n,e.fe):this.ze(n,e.key,e.fe);for(const n of e.removedTargetIds)this.ze(n,e.key,e.fe)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.Je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Ce(e.resumeToken));break;default:ye()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((r,i)=>{this.Je(i)&&n(i)})}Ze(e){const n=e.targetId,r=e.ge.count,i=this.Xe(n);if(i){const s=i.target;if(Kh(s))if(r===0){const o=new le(s.path);this.ze(n,o,Dt.newNoDocument(o,we.min()))}else Me(r===1);else{const o=this.et(n);if(o!==r){const a=this.tt(e),c=a?this.nt(a,e,o):1;if(c!==0){this.Ye(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(n,u)}}}}}tt(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=jr(r).toUint8Array()}catch(c){if(c instanceof WE)return Ts("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new cf(o,i,s)}catch(c){return Ts(c instanceof co?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ee===0?null:a}nt(e,n,r){return n.ge.count===r-this.st(e,n.targetId)?0:2}st(e,n){const r=this.ke.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.ke.it(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.ze(n,s,null),i++)}),i}ot(e){const n=new Map;this.qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&Kh(a.target)){const c=new le(a.target.path);this._t(c).has(o)||this.ut(o,c)||this.ze(o,c,Dt.newNoDocument(c,e))}s.ve&&(n.set(o,s.Fe()),s.Me())}});let r=Ce();this.Ke.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Xe(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Qe.forEach((s,o)=>o.setReadTime(e));const i=new Fc(e,n,this.Ue,this.Qe,r);return this.Qe=ur(),this.$e=Ha(),this.Ke=Ha(),this.Ue=new Xe(ke),i}Ge(e,n){if(!this.Je(e))return;const r=this.ut(e,n.key)?2:0;this.He(e).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e)),this.Ke=this.Ke.insert(n.key,this.ct(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const i=this.He(e);this.ut(e,n)?i.xe(n,1):i.Oe(n),this.Ke=this.Ke.insert(n,this.ct(n).delete(e)),this.Ke=this.Ke.insert(n,this.ct(n).add(e)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(e){this.qe.delete(e)}et(e){const n=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let n=this.qe.get(e);return n||(n=new m_,this.qe.set(e,n)),n}ct(e){let n=this.Ke.get(e);return n||(n=new _t(ke),this.Ke=this.Ke.insert(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new _t(ke),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||ie("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new m_),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ut(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function Ha(){return new Xe(le.comparator)}function g_(){return new Xe(le.comparator)}const yD=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),vD=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),wD=(()=>({and:"AND",or:"OR"}))();class ED{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Qh(t,e){return t.useProto3Json||xc(e)?e:{value:e}}function Ql(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function IT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function TD(t,e){return Ql(t,e.toTimestamp())}function jn(t){return Me(!!t),we.fromTimestamp(function(n){const r=Br(n);return new gt(r.seconds,r.nanos)}(t))}function uf(t,e){return Yh(t,e).canonicalString()}function Yh(t,e){const n=function(i){return new We(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function AT(t){const e=We.fromString(t);return Me(kT(e)),e}function Jh(t,e){return uf(t.databaseId,e.path)}function Gu(t,e){const n=AT(e);if(n.get(1)!==t.databaseId.projectId)throw new te($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new te($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new le(ST(n))}function RT(t,e){return uf(t.databaseId,e)}function bD(t){const e=AT(t);return e.length===4?We.emptyPath():ST(e)}function Xh(t){return new We(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ST(t){return Me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function __(t,e,n){return{name:Jh(t,e),fields:n.value.mapValue.fields}}function ID(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ye()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,h){return u.useProto3Json?(Me(h===void 0||typeof h=="string"),It.fromBase64String(h||"")):(Me(h===void 0||h instanceof Buffer||h instanceof Uint8Array),It.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?$.UNKNOWN:ET(u.code);return new te(h,u.message||"")}(o);n=new bT(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Gu(t,r.document.name),s=jn(r.document.updateTime),o=r.document.createTime?jn(r.document.createTime):we.min(),a=new Qt({mapValue:{fields:r.document.fields}}),c=Dt.newFoundDocument(i,s,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new hl(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Gu(t,r.document),s=r.readTime?jn(r.readTime):we.min(),o=Dt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new hl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Gu(t,r.document),s=r.removedTargetIds||[];n=new hl([],s,i,null)}else{if(!("filter"in e))return ye();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new fD(i,s),a=r.targetId;n=new TT(a,o)}}return n}function AD(t,e){let n;if(e instanceof ca)n={update:__(t,e.key,e.value)};else if(e instanceof af)n={delete:Jh(t,e.key)};else if(e instanceof Xr)n={update:__(t,e.key,e.data),updateMask:ND(e.fieldMask)};else{if(!(e instanceof uD))return ye();n={verify:Jh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Ko)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Go)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Qo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Yo)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw ye()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:TD(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ye()}(t,e.precondition)),n}function RD(t,e){return t&&t.length>0?(Me(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?jn(i.updateTime):jn(s);return o.isEqual(we.min())&&(o=jn(s)),new aD(o,i.transformResults||[])}(n,e))):[]}function SD(t,e){return{documents:[RT(t,e.path)]}}function CD(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=RT(t,i);const s=function(u){if(u.length!==0)return PT(kn.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(h=>function(p){return{field:Zi(p.field),direction:xD(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Qh(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ht:n,parent:i}}function PD(t){let e=bD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Me(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const p=CT(f);return p instanceof kn&&rT(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(w){return new Wo(es(w.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,xc(p)?null:p}(n.limit));let c=null;n.startAt&&(c=function(f){const p=!!f.before,g=f.values||[];return new Rs(g,p)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const p=!f.before,g=f.values||[];return new Rs(g,p)}(n.endAt)),Q1(e,i,o,s,a,"F",c,u)}function kD(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ye()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function CT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=es(n.unaryFilter.field);return ht.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=es(n.unaryFilter.field);return ht.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=es(n.unaryFilter.field);return ht.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=es(n.unaryFilter.field);return ht.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ye()}}(t):t.fieldFilter!==void 0?function(n){return ht.create(es(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ye()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return kn.create(n.compositeFilter.filters.map(r=>CT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ye()}}(n.compositeFilter.op))}(t):ye()}function xD(t){return yD[t]}function OD(t){return vD[t]}function DD(t){return wD[t]}function Zi(t){return{fieldPath:t.canonicalString()}}function es(t){return bt.fromServerFormat(t.fieldPath)}function PT(t){return t instanceof ht?function(n){if(n.op==="=="){if(i_(n.value))return{unaryFilter:{field:Zi(n.field),op:"IS_NAN"}};if(r_(n.value))return{unaryFilter:{field:Zi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(i_(n.value))return{unaryFilter:{field:Zi(n.field),op:"IS_NOT_NAN"}};if(r_(n.value))return{unaryFilter:{field:Zi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zi(n.field),op:OD(n.op),value:n.value}}}(t):t instanceof kn?function(n){const r=n.getFilters().map(i=>PT(i));return r.length===1?r[0]:{compositeFilter:{op:DD(n.op),filters:r}}}(t):ye()}function ND(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function kT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,n,r,i,s=we.min(),o=we.min(),a=It.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Dr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Dr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LD{constructor(e){this.Tt=e}}function VD(t){const e=PD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Gl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(){this.Tn=new FD}addToCollectionParentIndex(e,n){return this.Tn.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(qr.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(qr.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class FD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new _t(We.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new _t(We.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},xT=41943040;class Kt{static withCacheSize(e){return new Kt(e,Kt.DEFAULT_COLLECTION_PERCENTILE,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kt.DEFAULT_COLLECTION_PERCENTILE=10,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Kt.DEFAULT=new Kt(xT,Kt.DEFAULT_COLLECTION_PERCENTILE,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Kt.DISABLED=new Kt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new Ss(0)}static Un(){return new Ss(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_="LruGarbageCollector",UD=1048576;function w_([t,e],[n,r]){const i=ke(t,n);return i===0?ke(e,r):i}class $D{constructor(e){this.Hn=e,this.buffer=new _t(w_),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();w_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class qD{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){ie(v_,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ls(n)?ie(v_,"Ignoring IndexedDB error during garbage collection: ",n):await Ns(n)}await this.er(3e5)})}}class BD{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return B.resolve(kc.ae);const r=new $D(n);return this.tr.forEachTarget(e,i=>r.Zn(i.sequenceNumber)).next(()=>this.tr.rr(e,i=>r.Zn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.tr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(y_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),y_):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let r,i,s,o,a,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(u=Date.now(),Ji()<=Se.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${f} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function jD(t,e){return new BD(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(){this.changes=new Mi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ao(r.mutation,i,nn.empty(),gt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ce()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ce()){const i=di();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=lo();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=di();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ce()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=ur();const o=Io(),a=function(){return Io()}();return n.forEach((c,u)=>{const h=r.get(u.key);i.has(u.key)&&(h===void 0||h.mutation instanceof Xr)?s=s.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Ao(h.mutation,u,h.mutation.getFieldMask(),gt.now())):o.set(u.key,nn.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var f;return a.set(u,new zD(h,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Io();let i=new Xe((o,a)=>o-a),s=Ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=r.get(c)||nn.empty();h=a.applyToLocalView(u,h),r.set(c,h);const f=(i.get(a.batchId)||Ce()).add(c);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,f=hT();h.forEach(p=>{if(!s.has(p)){const g=vT(n.get(p),r.get(p));g!==null&&f.set(p,g),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return le.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):sf(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):B.resolve(di());let a=Bo,c=s;return o.next(u=>B.forEach(u,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?B.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{c=c.insert(h,p)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,Ce())).next(h=>({batchId:a,changes:uT(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new le(n)).next(r=>{let i=lo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=lo();return this.indexManager.getCollectionParents(e,s).next(a=>B.forEach(a,c=>{const u=function(f,p){return new Vi(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(h=>{h.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Dt.newInvalidDocument(h)))});let a=lo();return o.forEach((c,u)=>{const h=s.get(c);h!==void 0&&Ao(h.mutation,u,nn.empty(),gt.now()),Lc(n,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return B.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:jn(i.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(i){return{name:i.name,query:VD(i.bundledQuery),readTime:jn(i.readTime)}}(n)),B.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GD{constructor(){this.overlays=new Xe(le.comparator),this.Rr=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=di();return B.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.Et(e,n,s)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Rr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Rr.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const i=di(),s=n.length+1,o=new le(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return B.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Xe((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=s.get(u.largestBatchId);h===null&&(h=di(),s=s.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=di(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=i)););return B.resolve(a)}Et(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Rr.get(i.largestBatchId).delete(r.key);this.Rr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new dD(n,r));let s=this.Rr.get(n);s===void 0&&(s=Ce(),this.Rr.set(n,s)),this.Rr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD{constructor(){this.sessionToken=It.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(){this.Vr=new _t(vt.mr),this.gr=new _t(vt.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const r=new vt(e,n);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.wr(new vt(e,n))}br(e,n){e.forEach(r=>this.removeReference(r,n))}Sr(e){const n=new le(new We([])),r=new vt(n,e),i=new vt(n,e+1),s=[];return this.gr.forEachInRange([r,i],o=>{this.wr(o),s.push(o.key)}),s}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new le(new We([])),r=new vt(n,e),i=new vt(n,e+1);let s=Ce();return this.gr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new vt(e,0),r=this.Vr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class vt{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return le.comparator(e.key,n.key)||ke(e.Cr,n.Cr)}static pr(e,n){return ke(e.Cr,n.Cr)||le.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new _t(vt.mr)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new hD(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Mr=this.Mr.add(new vt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Nr(r),s=i<0?0:i;return B.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?Zd:this.Fr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new vt(n,0),i=new vt(n,Number.POSITIVE_INFINITY),s=[];return this.Mr.forEachInRange([r,i],o=>{const a=this.Or(o.Cr);s.push(a)}),B.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new _t(ke);return n.forEach(i=>{const s=new vt(i,0),o=new vt(i,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([s,o],a=>{r=r.add(a.Cr)})}),B.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;le.isDocumentKey(s)||(s=s.child(""));const o=new vt(new le(s),0);let a=new _t(ke);return this.Mr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.Cr)),!0)},o),B.resolve(this.Br(a))}Br(e){const n=[];return e.forEach(r=>{const i=this.Or(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Me(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return B.forEach(n.mutations,i=>{const s=new vt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,n){const r=new vt(n,0),i=this.Mr.firstAfterOrEqual(r);return B.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(e){this.kr=e,this.docs=function(){return new Xe(le.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.kr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():Dt.newInvalidDocument(n))}getEntries(e,n){let r=ur();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Dt.newInvalidDocument(i))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=ur();const o=n.path,a=new le(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||C1(S1(h),r)<=0||(i.has(h.key)||Lc(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return B.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ye()}qr(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new XD(this)}getSize(e){return B.resolve(this.size)}}class XD extends HD{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Ir.addEntry(e,i)):this.Ir.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(e){this.persistence=e,this.Qr=new Mi(n=>tf(n),nf),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.$r=0,this.Kr=new hf,this.targetCount=0,this.Ur=Ss.Kn()}forEachTarget(e,n){return this.Qr.forEach((r,i)=>n(i)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$r&&(this.$r=n),B.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ur=new Ss(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.zn(n),B.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Kr.Sr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Qr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Qr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),B.waitFor(s).next(()=>i)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.Qr.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this.Kr.yr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this.Kr.br(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),B.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Kr.Sr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Kr.vr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this.Kr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new kc(0),this.zr=!1,this.zr=!0,this.jr=new QD,this.referenceDelegate=e(this),this.Hr=new ZD(this),this.indexManager=new MD,this.remoteDocumentCache=function(i){return new JD(i)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new LD(n),this.Yr=new KD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new GD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Wr[e.toKey()];return r||(r=new YD(n,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,r){ie("MemoryPersistence","Starting transaction:",e);const i=new eN(this.Gr.next());return this.referenceDelegate.Zr(),r(i).next(s=>this.referenceDelegate.Xr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}ei(e,n){return B.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,n)))}}class eN extends k1{constructor(e){super(),this.currentSequenceNumber=e}}class df{constructor(e){this.persistence=e,this.ti=new hf,this.ni=null}static ri(e){return new df(e)}get ii(){if(this.ni)return this.ni;throw ye()}addReference(e,n,r){return this.ti.addReference(r,n),this.ii.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.ti.removeReference(r,n),this.ii.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),B.resolve()}removeTarget(e,n){this.ti.Sr(n.targetId).forEach(i=>this.ii.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.ii.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.ii,r=>{const i=le.fromPath(r);return this.si(e,i).next(s=>{s||n.removeEntry(i,we.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(r=>{r?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return B.or([()=>B.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class Yl{constructor(e,n){this.persistence=e,this.oi=new Mi(r=>D1(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=jD(this,n)}static ri(e,n){return new Yl(e,n)}Zr(){}Xr(e){return B.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}sr(e){let n=0;return this.rr(e,r=>{n++}).next(()=>n)}rr(e,n){return B.forEach(this.oi,(r,i)=>this.ar(e,r,i).next(s=>s?B.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.qr(e,o=>this.ar(e,o,n).next(a=>{a||(r++,s.removeEntry(o,we.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),B.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),B.resolve()}removeReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),B.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ll(e.data.value)),n}ar(e,n,r){return B.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.oi.get(n);return B.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Hi=r,this.Ji=i}static Yi(e,n){let r=Ce(),i=Ce();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ff(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return kP()?8:x1(Lt())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.rs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ss(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new tN;return this._s(e,n,o).next(a=>{if(s.result=a,this.Xi)return this.us(e,n,o,a.size)})}).next(()=>s.result)}us(e,n,r,i){return r.documentReadCount<this.es?(Ji()<=Se.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",Xi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),B.resolve()):(Ji()<=Se.DEBUG&&ie("QueryEngine","Query:",Xi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ts*i?(Ji()<=Se.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",Xi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Bn(n))):B.resolve())}rs(e,n){if(l_(n))return B.resolve(null);let r=Bn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Gl(n,null,"F"),r=Bn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Ce(...s);return this.ns.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.cs(n,a);return this.ls(n,u,o,c.readTime)?this.rs(e,Gl(n,null,"F")):this.hs(e,u,n,c)}))})))}ss(e,n,r,i){return l_(n)||i.isEqual(we.min())?B.resolve(null):this.ns.getDocuments(e,r).next(s=>{const o=this.cs(n,s);return this.ls(n,o,r,i)?B.resolve(null):(Ji()<=Se.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Xi(n)),this.hs(e,o,n,R1(i,Bo)).next(a=>a))})}cs(e,n){let r=new _t(lT(e));return n.forEach((i,s)=>{Lc(e,s)&&(r=r.add(s))}),r}ls(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}_s(e,n,r){return Ji()<=Se.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",Xi(n)),this.ns.getDocumentsMatchingQuery(e,n,qr.min(),r)}hs(e,n,r,i){return this.ns.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf="LocalStore",rN=3e8;class iN{constructor(e,n,r,i){this.persistence=e,this.Ps=n,this.serializer=i,this.Ts=new Xe(ke),this.Is=new Mi(s=>tf(s),nf),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new WD(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function sN(t,e,n,r){return new iN(t,e,n,r)}async function DT(t,e){const n=Te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.As(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=Ce();for(const u of i){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of s){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Rs:u,removedBatchIds:o,addedBatchIds:a}))})})}function oN(t,e){const n=Te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ds.newChangeBuffer({trackRemovals:!0});return function(a,c,u,h){const f=u.batch,p=f.keys();let g=B.resolve();return p.forEach(w=>{g=g.next(()=>h.getEntry(c,w)).next(C=>{const S=u.docVersions.get(w);Me(S!==null),C.version.compareTo(S)<0&&(f.applyToRemoteDocument(C,u),C.isValidDocument()&&(C.setReadTime(u.commitVersion),h.addEntry(C)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(c,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=Ce();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function NT(t){const e=Te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function aN(t,e){const n=Te(t),r=e.snapshotVersion;let i=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ds.newChangeBuffer({trackRemovals:!0});i=n.Ts;const a=[];e.targetChanges.forEach((h,f)=>{const p=i.get(f);if(!p)return;a.push(n.Hr.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Hr.addMatchingKeys(s,h.addedDocuments,f)));let g=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(It.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),i=i.insert(f,g),function(C,S,x){return C.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=rN?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(p,g,h)&&a.push(n.Hr.updateTargetData(s,g))});let c=ur(),u=Ce();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(lN(s,o,e.documentUpdates).next(h=>{c=h.Vs,u=h.fs})),!r.isEqual(we.min())){const h=n.Hr.getLastRemoteSnapshotVersion(s).next(f=>n.Hr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return B.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(n.Ts=i,s))}function lN(t,e,n){let r=Ce(),i=Ce();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=ur();return n.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(we.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):ie(pf,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Vs:o,fs:i}})}function cN(t,e){const n=Te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Zd),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function uN(t,e){const n=Te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Hr.getTargetData(r,e).next(s=>s?(i=s,B.resolve(i)):n.Hr.allocateTargetId(r).next(o=>(i=new Dr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Hr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(r.targetId,r),n.Is.set(e,r.targetId)),r})}async function Zh(t,e,n){const r=Te(t),i=r.Ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ls(o))throw o;ie(pf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ts=r.Ts.remove(e),r.Is.delete(i.target)}function E_(t,e,n){const r=Te(t);let i=we.min(),s=Ce();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const f=Te(c),p=f.Is.get(h);return p!==void 0?B.resolve(f.Ts.get(p)):f.Hr.getTargetData(u,h)}(r,o,Bn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Ps.getDocumentsMatchingQuery(o,e,n?i:we.min(),n?s:Ce())).next(a=>(hN(r,J1(e),a),{documents:a,gs:s})))}function hN(t,e,n){let r=t.Es.get(e)||we.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Es.set(e,r)}class T_{constructor(){this.activeTargetIds=rD()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class dN{constructor(){this.ho=new T_,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,r){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new T_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_="ConnectivityMonitor";class I_{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){ie(b_,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){ie(b_,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let za=null;function ed(){return za===null?za=function(){return 268435456+Math.round(2147483648*Math.random())}():za++,"0x"+za.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu="RestConnection",pN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class mN{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${r}/databases/${i}`,this.wo=this.databaseId.database===zl?`project_id=${r}`:`project_id=${r}&database_id=${i}`}bo(e,n,r,i,s){const o=ed(),a=this.So(e,n.toUriEncodedString());ie(Qu,`Sending RPC '${e}' ${o}:`,a,r);const c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(c,i,s),this.vo(e,a,c,r).then(u=>(ie(Qu,`Received RPC '${e}' ${o}: `,u),u),u=>{throw Ts(Qu,`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}Co(e,n,r,i,s,o){return this.bo(e,n,r,i,s)}Do(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ds}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}So(e,n){const r=pN[e];return`${this.po}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct="WebChannelConnection";class _N extends mN{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,i){const s=ed();return new Promise((o,a)=>{const c=new ME;c.setWithCredentials(!0),c.listenOnce(FE.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case al.NO_ERROR:const h=c.getResponseJson();ie(Ct,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case al.TIMEOUT:ie(Ct,`RPC '${e}' ${s} timed out`),a(new te($.DEADLINE_EXCEEDED,"Request time out"));break;case al.HTTP_ERROR:const f=c.getStatus();if(ie(Ct,`RPC '${e}' ${s} failed with status:`,f,"response text:",c.getResponseText()),f>0){let p=c.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const w=function(S){const x=S.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(x)>=0?x:$.UNKNOWN}(g.status);a(new te(w,g.message))}else a(new te($.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new te($.UNAVAILABLE,"Connection failed."));break;default:ye()}}finally{ie(Ct,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);ie(Ct,`RPC '${e}' ${s} sending request:`,i),c.send(n,"POST",u,r,15)})}Wo(e,n,r){const i=ed(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=qE(),a=$E(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const h=s.join("");ie(Ct,`Creating RPC '${e}' stream ${i}: ${h}`,c);const f=o.createWebChannel(h,c);let p=!1,g=!1;const w=new gN({Fo:S=>{g?ie(Ct,`Not sending because RPC '${e}' stream ${i} is closed:`,S):(p||(ie(Ct,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),ie(Ct,`RPC '${e}' stream ${i} sending:`,S),f.send(S))},Mo:()=>f.close()}),C=(S,x,k)=>{S.listen(x,O=>{try{k(O)}catch(D){setTimeout(()=>{throw D},0)}})};return C(f,ao.EventType.OPEN,()=>{g||(ie(Ct,`RPC '${e}' stream ${i} transport opened.`),w.Qo())}),C(f,ao.EventType.CLOSE,()=>{g||(g=!0,ie(Ct,`RPC '${e}' stream ${i} transport closed`),w.Ko())}),C(f,ao.EventType.ERROR,S=>{g||(g=!0,Ts(Ct,`RPC '${e}' stream ${i} transport errored:`,S),w.Ko(new te($.UNAVAILABLE,"The operation could not be completed")))}),C(f,ao.EventType.MESSAGE,S=>{var x;if(!g){const k=S.data[0];Me(!!k);const O=k,D=(O==null?void 0:O.error)||((x=O[0])===null||x===void 0?void 0:x.error);if(D){ie(Ct,`RPC '${e}' stream ${i} received error:`,D);const V=D.status;let j=function(_){const A=ct[_];if(A!==void 0)return ET(A)}(V),b=D.message;j===void 0&&(j=$.INTERNAL,b="Unknown error status: "+V+" with message "+D.message),g=!0,w.Ko(new te(j,b)),f.close()}else ie(Ct,`RPC '${e}' stream ${i} received:`,k),w.Uo(k)}}),C(a,UE.STAT_EVENT,S=>{S.stat===jh.PROXY?ie(Ct,`RPC '${e}' stream ${i} detected buffering proxy`):S.stat===jh.NOPROXY&&ie(Ct,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{w.$o()},0),w}}function Yu(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(t){return new ED(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ti=e,this.timerId=n,this.Go=r,this.zo=i,this.jo=s,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),i=Math.max(0,n-r);i>0&&ie("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,i,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_="PersistentStream";class VT{constructor(e,n,r,i,s,o,a,c){this.Ti=e,this.n_=r,this.r_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new LT(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(cr(n.toString()),cr("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.i_===n&&this.V_(r,i)},r=>{e(()=>{const i=new te($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(i)})})}V_(e,n){const r=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(i=>{r(()=>this.m_(i))}),this.stream.onMessage(i=>{r(()=>++this.__==1?this.g_(i):this.onNext(i))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return ie(A_,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(ie(A_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class yN extends VT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}f_(e,n){return this.connection.Wo("Listen",e,n)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const n=ID(this.serializer,e),r=function(s){if(!("targetChange"in s))return we.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?we.min():o.readTime?jn(o.readTime):we.min()}(e);return this.listener.p_(n,r)}y_(e){const n={};n.database=Xh(this.serializer),n.addTarget=function(s,o){let a;const c=o.target;if(a=Kh(c)?{documents:SD(s,c)}:{query:CD(s,c).ht},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=IT(s,o.resumeToken);const u=Qh(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(we.min())>0){a.readTime=Ql(s,o.snapshotVersion.toTimestamp());const u=Qh(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=kD(this.serializer,e);r&&(n.labels=r),this.I_(n)}w_(e){const n={};n.database=Xh(this.serializer),n.removeTarget=e,this.I_(n)}}class vN extends VT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return Me(!!e.streamToken),this.lastStreamToken=e.streamToken,Me(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=RD(e.writeResults,e.commitTime),r=jn(e.commitTime);return this.listener.v_(r,n)}C_(){const e={};e.database=Xh(this.serializer),this.I_(e)}S_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>AD(this.serializer,r))};this.I_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN{}class EN extends wN{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.F_=!1}M_(){if(this.F_)throw new te($.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.bo(e,Yh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new te($.UNKNOWN,s.toString())})}Co(e,n,r,i,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Co(e,Yh(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new te($.UNKNOWN,o.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class TN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(cr(n),this.N_=!1):ie("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi="RemoteStore";class bN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=s,this.z_.To(o=>{r.enqueueAndForget(async()=>{Fi(this)&&(ie(Pi,"Restarting streams for network reachability change."),await async function(c){const u=Te(c);u.W_.add(4),await ha(u),u.j_.set("Unknown"),u.W_.delete(4),await $c(u)}(this))})}),this.j_=new TN(r,i)}}async function $c(t){if(Fi(t))for(const e of t.G_)await e(!0)}async function ha(t){for(const e of t.G_)await e(!1)}function MT(t,e){const n=Te(t);n.U_.has(e.targetId)||(n.U_.set(e.targetId,e),yf(n)?_f(n):Vs(n).c_()&&gf(n,e))}function mf(t,e){const n=Te(t),r=Vs(n);n.U_.delete(e),r.c_()&&FT(n,e),n.U_.size===0&&(r.c_()?r.P_():Fi(n)&&n.j_.set("Unknown"))}function gf(t,e){if(t.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Vs(t).y_(e)}function FT(t,e){t.H_.Ne(e),Vs(t).w_(e)}function _f(t){t.H_=new _D({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.U_.get(e)||null,it:()=>t.datastore.serializer.databaseId}),Vs(t).start(),t.j_.B_()}function yf(t){return Fi(t)&&!Vs(t).u_()&&t.U_.size>0}function Fi(t){return Te(t).W_.size===0}function UT(t){t.H_=void 0}async function IN(t){t.j_.set("Online")}async function AN(t){t.U_.forEach((e,n)=>{gf(t,e)})}async function RN(t,e){UT(t),yf(t)?(t.j_.q_(e),_f(t)):t.j_.set("Unknown")}async function SN(t,e,n){if(t.j_.set("Online"),e instanceof bT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.U_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.U_.delete(a),i.H_.removeTarget(a))}(t,e)}catch(r){ie(Pi,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Jl(t,r)}else if(e instanceof hl?t.H_.We(e):e instanceof TT?t.H_.Ze(e):t.H_.je(e),!n.isEqual(we.min()))try{const r=await NT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.H_.ot(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=s.U_.get(u);h&&s.U_.set(u,h.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const h=s.U_.get(c);if(!h)return;s.U_.set(c,h.withResumeToken(It.EMPTY_BYTE_STRING,h.snapshotVersion)),FT(s,c);const f=new Dr(h.target,c,u,h.sequenceNumber);gf(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){ie(Pi,"Failed to raise snapshot:",r),await Jl(t,r)}}async function Jl(t,e,n){if(!Ls(e))throw e;t.W_.add(1),await ha(t),t.j_.set("Offline"),n||(n=()=>NT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ie(Pi,"Retrying IndexedDB access"),await n(),t.W_.delete(1),await $c(t)})}function $T(t,e){return e().catch(n=>Jl(t,n,e))}async function qc(t){const e=Te(t),n=zr(e);let r=e.K_.length>0?e.K_[e.K_.length-1].batchId:Zd;for(;CN(e);)try{const i=await cN(e.localStore,r);if(i===null){e.K_.length===0&&n.P_();break}r=i.batchId,PN(e,i)}catch(i){await Jl(e,i)}qT(e)&&BT(e)}function CN(t){return Fi(t)&&t.K_.length<10}function PN(t,e){t.K_.push(e);const n=zr(t);n.c_()&&n.b_&&n.S_(e.mutations)}function qT(t){return Fi(t)&&!zr(t).u_()&&t.K_.length>0}function BT(t){zr(t).start()}async function kN(t){zr(t).C_()}async function xN(t){const e=zr(t);for(const n of t.K_)e.S_(n.mutations)}async function ON(t,e,n){const r=t.K_.shift(),i=lf.from(r,e,n);await $T(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await qc(t)}async function DN(t,e){e&&zr(t).b_&&await async function(r,i){if(function(o){return pD(o)&&o!==$.ABORTED}(i.code)){const s=r.K_.shift();zr(r).h_(),await $T(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await qc(r)}}(t,e),qT(t)&&BT(t)}async function R_(t,e){const n=Te(t);n.asyncQueue.verifyOperationInProgress(),ie(Pi,"RemoteStore received new credentials");const r=Fi(n);n.W_.add(3),await ha(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await $c(n)}async function NN(t,e){const n=Te(t);e?(n.W_.delete(2),await $c(n)):e||(n.W_.add(2),await ha(n),n.j_.set("Unknown"))}function Vs(t){return t.J_||(t.J_=function(n,r,i){const s=Te(n);return s.M_(),new yN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{xo:IN.bind(null,t),No:AN.bind(null,t),Lo:RN.bind(null,t),p_:SN.bind(null,t)}),t.G_.push(async e=>{e?(t.J_.h_(),yf(t)?_f(t):t.j_.set("Unknown")):(await t.J_.stop(),UT(t))})),t.J_}function zr(t){return t.Y_||(t.Y_=function(n,r,i){const s=Te(n);return s.M_(),new vN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{xo:()=>Promise.resolve(),No:kN.bind(null,t),Lo:DN.bind(null,t),D_:xN.bind(null,t),v_:ON.bind(null,t)}),t.G_.push(async e=>{e?(t.Y_.h_(),await qc(t)):(await t.Y_.stop(),t.K_.length>0&&(ie(Pi,`Stopping write stream with ${t.K_.length} pending writes`),t.K_=[]))})),t.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ir,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new vf(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wf(t,e){if(cr("AsyncQueue",`${e}: ${t}`),Ls(t))return new te($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{static emptySet(e){return new gs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||le.comparator(n.key,r.key):(n,r)=>le.comparator(n.key,r.key),this.keyedMap=lo(),this.sortedSet=new Xe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof gs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new gs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(){this.Z_=new Xe(le.comparator)}track(e){const n=e.doc.key,r=this.Z_.get(n);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(n,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(n):e.type===1&&r.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):ye():this.Z_=this.Z_.insert(n,e)}X_(){const e=[];return this.Z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Cs{constructor(e,n,r,i,s,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Cs(e,n,gs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Nc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class VN{constructor(){this.queries=C_(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,r){const i=Te(n),s=i.queries;i.queries=C_(),s.forEach((o,a)=>{for(const c of a.ta)c.onError(r)})})(this,new te($.ABORTED,"Firestore shutting down"))}}function C_(){return new Mi(t=>aT(t),Nc)}async function jT(t,e){const n=Te(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.na()&&e.ra()&&(r=2):(s=new LN,r=e.ra()?0:1);try{switch(r){case 0:s.ea=await n.onListen(i,!0);break;case 1:s.ea=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=wf(o,`Initialization of query '${Xi(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.ta.push(e),e.sa(n.onlineState),s.ea&&e.oa(s.ea)&&Ef(n)}async function HT(t,e){const n=Te(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.ta.indexOf(e);o>=0&&(s.ta.splice(o,1),s.ta.length===0?i=e.ra()?0:1:!s.na()&&e.ra()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function MN(t,e){const n=Te(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.ta)a.oa(i)&&(r=!0);o.ea=i}}r&&Ef(n)}function FN(t,e,n){const r=Te(t),i=r.queries.get(e);if(i)for(const s of i.ta)s.onError(n);r.queries.delete(e)}function Ef(t){t.ia.forEach(e=>{e.next()})}var td,P_;(P_=td||(td={}))._a="default",P_.Cache="cache";class zT{constructor(e,n,r){this.query=e,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Cs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ua?this.la(e)&&(this.aa.next(e),n=!0):this.ha(e,this.onlineState)&&(this.Pa(e),n=!0),this.ca=e,n}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),n=!0),n}ha(e,n){if(!e.fromCache||!this.ra())return!0;const r=n!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}la(e){if(e.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(e){e=Cs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==td.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e){this.key=e}}class KT{constructor(e){this.key=e}}class UN{constructor(e,n){this.query=e,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Ce(),this.mutatedKeys=Ce(),this.ya=lT(e),this.wa=new gs(this.ya)}get ba(){return this.fa}Sa(e,n){const r=n?n.Da:new S_,i=n?n.wa:this.wa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const p=i.get(h),g=Lc(this.query,f)?f:null,w=!!p&&this.mutatedKeys.has(p.key),C=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let S=!1;p&&g?p.data.isEqual(g.data)?w!==C&&(r.track({type:3,doc:g}),S=!0):this.va(p,g)||(r.track({type:2,doc:g}),S=!0,(c&&this.ya(g,c)>0||u&&this.ya(g,u)<0)&&(a=!0)):!p&&g?(r.track({type:0,doc:g}),S=!0):p&&!g&&(r.track({type:1,doc:p}),S=!0,(c||u)&&(a=!0)),S&&(g?(o=o.add(g),s=C?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{wa:o,Da:r,ls:a,mutatedKeys:s}}va(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const o=e.Da.X_();o.sort((h,f)=>function(g,w){const C=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ye()}};return C(g)-C(w)}(h.type,f.type)||this.ya(h.doc,f.doc)),this.Ca(r),i=i!=null&&i;const a=n&&!i?this.Fa():[],c=this.pa.size===0&&this.current&&!i?1:0,u=c!==this.ga;return this.ga=c,o.length!==0||u?{snapshot:new Cs(this.query,e.wa,s,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:a}:{Ma:a}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new S_,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Ce(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const n=[];return e.forEach(r=>{this.pa.has(r)||n.push(new KT(r))}),this.pa.forEach(r=>{e.has(r)||n.push(new WT(r))}),n}Oa(e){this.fa=e.gs,this.pa=Ce();const n=this.Sa(e.documents);return this.applyChanges(n,!0)}Na(){return Cs.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Tf="SyncEngine";class $N{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class qN{constructor(e){this.key=e,this.Ba=!1}}class BN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.La={},this.ka=new Mi(a=>aT(a),Nc),this.qa=new Map,this.Qa=new Set,this.$a=new Xe(le.comparator),this.Ka=new Map,this.Ua=new hf,this.Wa={},this.Ga=new Map,this.za=Ss.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function jN(t,e,n=!0){const r=ZT(t);let i;const s=r.ka.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Na()):i=await GT(r,e,n,!0),i}async function HN(t,e){const n=ZT(t);await GT(n,e,!0,!1)}async function GT(t,e,n,r){const i=await uN(t.localStore,Bn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await zN(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&MT(t.remoteStore,i),a}async function zN(t,e,n,r,i){t.Ha=(f,p,g)=>async function(C,S,x,k){let O=S.view.Sa(x);O.ls&&(O=await E_(C.localStore,S.query,!1).then(({documents:b})=>S.view.Sa(b,O)));const D=k&&k.targetChanges.get(S.targetId),V=k&&k.targetMismatches.get(S.targetId)!=null,j=S.view.applyChanges(O,C.isPrimaryClient,D,V);return x_(C,S.targetId,j.Ma),j.snapshot}(t,f,p,g);const s=await E_(t.localStore,e,!0),o=new UN(e,s.gs),a=o.Sa(s.documents),c=ua.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,c);x_(t,n,u.Ma);const h=new $N(e,n,o);return t.ka.set(e,h),t.qa.has(n)?t.qa.get(n).push(e):t.qa.set(n,[e]),u.snapshot}async function WN(t,e,n){const r=Te(t),i=r.ka.get(e),s=r.qa.get(i.targetId);if(s.length>1)return r.qa.set(i.targetId,s.filter(o=>!Nc(o,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Zh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&mf(r.remoteStore,i.targetId),nd(r,i.targetId)}).catch(Ns)):(nd(r,i.targetId),await Zh(r.localStore,i.targetId,!0))}async function KN(t,e){const n=Te(t),r=n.ka.get(e),i=n.qa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),mf(n.remoteStore,r.targetId))}async function GN(t,e,n){const r=tL(t);try{const i=await function(o,a){const c=Te(o),u=gt.now(),h=a.reduce((g,w)=>g.add(w.key),Ce());let f,p;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let w=ur(),C=Ce();return c.ds.getEntries(g,h).next(S=>{w=S,w.forEach((x,k)=>{k.isValidDocument()||(C=C.add(x))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,w)).next(S=>{f=S;const x=[];for(const k of a){const O=cD(k,f.get(k.key).overlayedDocument);O!=null&&x.push(new Xr(k.key,O,eT(O.value.mapValue),pn.exists(!0)))}return c.mutationQueue.addMutationBatch(g,u,x,a)}).next(S=>{p=S;const x=S.applyToLocalDocumentSet(f,C);return c.documentOverlayCache.saveOverlays(g,S.batchId,x)})}).then(()=>({batchId:p.batchId,changes:uT(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let u=o.Wa[o.currentUser.toKey()];u||(u=new Xe(ke)),u=u.insert(a,c),o.Wa[o.currentUser.toKey()]=u}(r,i.batchId,n),await da(r,i.changes),await qc(r.remoteStore)}catch(i){const s=wf(i,"Failed to persist write");n.reject(s)}}async function QT(t,e){const n=Te(t);try{const r=await aN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Ka.get(s);o&&(Me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ba=!0:i.modifiedDocuments.size>0?Me(o.Ba):i.removedDocuments.size>0&&(Me(o.Ba),o.Ba=!1))}),await da(n,r,e)}catch(r){await Ns(r)}}function k_(t,e,n){const r=Te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ka.forEach((s,o)=>{const a=o.view.sa(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=Te(o);c.onlineState=a;let u=!1;c.queries.forEach((h,f)=>{for(const p of f.ta)p.sa(a)&&(u=!0)}),u&&Ef(c)}(r.eventManager,e),i.length&&r.La.p_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function QN(t,e,n){const r=Te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ka.get(e),s=i&&i.key;if(s){let o=new Xe(le.comparator);o=o.insert(s,Dt.newNoDocument(s,we.min()));const a=Ce().add(s),c=new Fc(we.min(),new Map,new Xe(ke),o,a);await QT(r,c),r.$a=r.$a.remove(s),r.Ka.delete(e),bf(r)}else await Zh(r.localStore,e,!1).then(()=>nd(r,e,n)).catch(Ns)}async function YN(t,e){const n=Te(t),r=e.batch.batchId;try{const i=await oN(n.localStore,e);JT(n,r,null),YT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await da(n,i)}catch(i){await Ns(i)}}async function JN(t,e,n){const r=Te(t);try{const i=await function(o,a){const c=Te(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,a).next(f=>(Me(f!==null),h=f.keys(),c.mutationQueue.removeMutationBatch(u,f))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(r.localStore,e);JT(r,e,n),YT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await da(r,i)}catch(i){await Ns(i)}}function YT(t,e){(t.Ga.get(e)||[]).forEach(n=>{n.resolve()}),t.Ga.delete(e)}function JT(t,e,n){const r=Te(t);let i=r.Wa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Wa[r.currentUser.toKey()]=i}}function nd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.qa.get(e))t.ka.delete(r),n&&t.La.Ja(r,n);t.qa.delete(e),t.isPrimaryClient&&t.Ua.Sr(e).forEach(r=>{t.Ua.containsKey(r)||XT(t,r)})}function XT(t,e){t.Qa.delete(e.path.canonicalString());const n=t.$a.get(e);n!==null&&(mf(t.remoteStore,n),t.$a=t.$a.remove(e),t.Ka.delete(n),bf(t))}function x_(t,e,n){for(const r of n)r instanceof WT?(t.Ua.addReference(r.key,e),XN(t,r)):r instanceof KT?(ie(Tf,"Document no longer in limbo: "+r.key),t.Ua.removeReference(r.key,e),t.Ua.containsKey(r.key)||XT(t,r.key)):ye()}function XN(t,e){const n=e.key,r=n.path.canonicalString();t.$a.get(n)||t.Qa.has(r)||(ie(Tf,"New document in limbo: "+n),t.Qa.add(r),bf(t))}function bf(t){for(;t.Qa.size>0&&t.$a.size<t.maxConcurrentLimboResolutions;){const e=t.Qa.values().next().value;t.Qa.delete(e);const n=new le(We.fromString(e)),r=t.za.next();t.Ka.set(r,new qN(n)),t.$a=t.$a.insert(n,r),MT(t.remoteStore,new Dr(Bn(rf(n.path)),r,"TargetPurposeLimboResolution",kc.ae))}}async function da(t,e,n){const r=Te(t),i=[],s=[],o=[];r.ka.isEmpty()||(r.ka.forEach((a,c)=>{o.push(r.Ha(c,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){i.push(u);const f=ff.Yi(c.targetId,u);s.push(f)}}))}),await Promise.all(o),r.La.p_(i),await async function(c,u){const h=Te(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>B.forEach(u,p=>B.forEach(p.Hi,g=>h.persistence.referenceDelegate.addReference(f,p.targetId,g)).next(()=>B.forEach(p.Ji,g=>h.persistence.referenceDelegate.removeReference(f,p.targetId,g)))))}catch(f){if(!Ls(f))throw f;ie(pf,"Failed to update sequence numbers: "+f)}for(const f of u){const p=f.targetId;if(!f.fromCache){const g=h.Ts.get(p),w=g.snapshotVersion,C=g.withLastLimboFreeSnapshotVersion(w);h.Ts=h.Ts.insert(p,C)}}}(r.localStore,s))}async function ZN(t,e){const n=Te(t);if(!n.currentUser.isEqual(e)){ie(Tf,"User change. New user:",e.toKey());const r=await DT(n.localStore,e);n.currentUser=e,function(s,o){s.Ga.forEach(a=>{a.forEach(c=>{c.reject(new te($.CANCELLED,o))})}),s.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await da(n,r.Rs)}}function eL(t,e){const n=Te(t),r=n.Ka.get(e);if(r&&r.Ba)return Ce().add(r.key);{let i=Ce();const s=n.qa.get(e);if(!s)return i;for(const o of s){const a=n.ka.get(o);i=i.unionWith(a.view.ba)}return i}}function ZT(t){const e=Te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=QT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=eL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=QN.bind(null,e),e.La.p_=MN.bind(null,e.eventManager),e.La.Ja=FN.bind(null,e.eventManager),e}function tL(t){const e=Te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=YN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=JN.bind(null,e),e}class Xl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Uc(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return sN(this.persistence,new nN,e.initialUser,this.serializer)}Xa(e){return new OT(df.ri,this.serializer)}Za(e){return new dN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Xl.provider={build:()=>new Xl};class nL extends Xl{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){Me(this.persistence.referenceDelegate instanceof Yl);const r=this.persistence.referenceDelegate.garbageCollector;return new qD(r,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?Kt.withCacheSize(this.cacheSizeBytes):Kt.DEFAULT;return new OT(r=>Yl.ri(r,n),this.serializer)}}class rd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>k_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ZN.bind(null,this.syncEngine),await NN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new VN}()}createDatastore(e){const n=Uc(e.databaseInfo.databaseId),r=function(s){return new _N(s)}(e.databaseInfo);return function(s,o,a,c){return new EN(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new bN(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>k_(this.syncEngine,n,0),function(){return I_.D()?new I_:new fN}())}createSyncEngine(e,n){return function(i,s,o,a,c,u,h){const f=new BN(i,s,o,a,c,u);return h&&(f.ja=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Te(i);ie(Pi,"RemoteStore shutting down."),s.W_.add(5),await ha(s),s.z_.shutdown(),s.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}rd.provider={build:()=>new rd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):cr("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr="FirestoreClient";class rL{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=kt.UNAUTHENTICATED,this.clientId=jE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{ie(Wr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ie(Wr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ir;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=wf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ju(t,e){t.asyncQueue.verifyOperationInProgress(),ie(Wr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await DT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function O_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await iL(t);ie(Wr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>R_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>R_(e.remoteStore,i)),t._onlineComponents=e}async function iL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ie(Wr,"Using user provided OfflineComponentProvider");try{await Ju(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===$.FAILED_PRECONDITION||i.code===$.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ts("Error using user provided cache. Falling back to memory cache: "+n),await Ju(t,new Xl)}}else ie(Wr,"Using default OfflineComponentProvider"),await Ju(t,new nL(void 0));return t._offlineComponents}async function tb(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ie(Wr,"Using user provided OnlineComponentProvider"),await O_(t,t._uninitializedComponentsProvider._online)):(ie(Wr,"Using default OnlineComponentProvider"),await O_(t,new rd))),t._onlineComponents}function sL(t){return tb(t).then(e=>e.syncEngine)}async function nb(t){const e=await tb(t),n=e.eventManager;return n.onListen=jN.bind(null,e.syncEngine),n.onUnlisten=WN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=HN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=KN.bind(null,e.syncEngine),n}function oL(t,e,n={}){const r=new ir;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const h=new eb({next:p=>{h.su(),o.enqueueAndForget(()=>HT(s,f));const g=p.docs.has(a);!g&&p.fromCache?u.reject(new te($.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&p.fromCache&&c&&c.source==="server"?u.reject(new te($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),f=new zT(rf(a.path),h,{includeMetadataChanges:!0,Ta:!0});return jT(s,f)}(await nb(t),t.asyncQueue,e,n,r)),r.promise}function aL(t,e,n={}){const r=new ir;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const h=new eb({next:p=>{h.su(),o.enqueueAndForget(()=>HT(s,f)),p.fromCache&&c.source==="server"?u.reject(new te($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),f=new zT(a,h,{includeMetadataChanges:!0,Ta:!0});return jT(s,f)}(await nb(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rb(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ib(t,e,n){if(!n)throw new te($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function lL(t,e,n,r){if(e===!0&&r===!0)throw new te($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function N_(t){if(!le.isDocumentKey(t))throw new te($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function L_(t){if(le.isDocumentKey(t))throw new te($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Bc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ye()}function xn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new te($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Bc(t);throw new te($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function cL(t,e){if(e<=0)throw new te($.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sb="firestore.googleapis.com",V_=!0;class M_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new te($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=sb,this.ssl=V_}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:V_;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=xT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<UD)throw new te($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}lL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rb((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new te($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new te($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new te($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class jc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new M_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new M_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new y1;switch(r.type){case"firstParty":return new T1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=D_.get(n);r&&(ie("ComponentProvider","Removing Datastore"),D_.delete(n),r.terminate())}(this),Promise.resolve()}}function uL(t,e,n,r={}){var i;const s=(t=xn(t,jc))._getSettings(),o=Object.assign(Object.assign({},s),{emulatorOptions:t._getEmulatorOptions()}),a=`${e}:${n}`;s.host!==sb&&s.host!==a&&Ts("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},s),{host:a,ssl:!1,emulatorOptions:r});if(!$r(c,o)&&(t._setSettings(c),r.mockUserToken)){let u,h;if(typeof r.mockUserToken=="string")u=r.mockUserToken,h=kt.MOCK_USER;else{u=qw(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new te($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new kt(f)}t._authCredentials=new v1(new BE(u,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new mr(this.firestore,e,this._query)}}class Wt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Wt(this.firestore,e,this._key)}}class Fr extends mr{constructor(e,n,r){super(e,n,rf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Wt(this.firestore,null,new le(e))}withConverter(e){return new Fr(this.firestore,e,this._path)}}function sU(t,e,...n){if(t=$e(t),ib("collection","path",e),t instanceof jc){const r=We.fromString(e,...n);return L_(r),new Fr(t,null,r)}{if(!(t instanceof Wt||t instanceof Fr))throw new te($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(We.fromString(e,...n));return L_(r),new Fr(t.firestore,null,r)}}function If(t,e,...n){if(t=$e(t),arguments.length===1&&(e=jE.newId()),ib("doc","path",e),t instanceof jc){const r=We.fromString(e,...n);return N_(r),new Wt(t,null,new le(r))}{if(!(t instanceof Wt||t instanceof Fr))throw new te($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(We.fromString(e,...n));return N_(r),new Wt(t.firestore,t instanceof Fr?t.converter:null,new le(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_="AsyncQueue";class U_{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new LT(this,"async_queue_retry"),this.bu=()=>{const r=Yu();r&&ie(F_,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.Su=e;const n=Yu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=Yu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new ir;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Ls(e))throw e;ie(F_,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.Su.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw cr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.pu=!1,r))));return this.Su=n,n}enqueueAfterDelay(e,n,r){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const i=vf.createAndSchedule(this,e,n,r,s=>this.Fu(s));return this.fu.push(i),i}Du(){this.gu&&ye()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}class Ui extends jc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new U_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new U_(e),this._firestoreClient=void 0,await e}}}function hL(t,e){const n=typeof t=="object"?t:Rc(),r=typeof t=="string"?t:e||zl,i=Yr(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Fw("firestore");s&&uL(i,...s)}return i}function Af(t){if(t._terminated)throw new te($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||dL(t),t._firestoreClient}function dL(t){var e,n,r;const i=t._freezeSettings(),s=function(a,c,u,h){return new V1(a,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,rb(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||((n=i.localCache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((r=i.localCache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new rL(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ps(It.fromBase64String(e))}catch(n){throw new te($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ps(It.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new te($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new te($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new te($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fL=/^__.*__$/;class pL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Xr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ca(e,this.data,n,this.fieldTransforms)}}class ob{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Xr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ab(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ye()}}class Cf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Bu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Cf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ku({path:r,Qu:!1});return i.$u(e),i}Ku(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ku({path:r,Qu:!1});return i.Bu(),i}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Zl(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(ab(this.Lu)&&fL.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class mL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Uc(e)}ju(e,n,r,i=!1){return new Cf({Lu:e,methodName:n,zu:r,path:bt.emptyPath(),Qu:!1,Gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function pa(t){const e=t._freezeSettings(),n=Uc(t._databaseId);return new mL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function lb(t,e,n,r,i,s={}){const o=t.ju(s.merge||s.mergeFields?2:0,e,n,i);xf("Data must be an object, but it was:",o,r);const a=ub(r,o);let c,u;if(s.merge)c=new nn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const p=id(e,f,n);if(!o.contains(p))throw new te($.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);db(h,p)||h.push(p)}c=new nn(h),u=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,u=o.fieldTransforms;return new pL(new Qt(a),c,u)}class zc extends fa{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof zc}}class Pf extends fa{_toFieldTransform(e){return new yT(e.path,new Ko)}isEqual(e){return e instanceof Pf}}class kf extends fa{constructor(e,n){super(e),this.Ju=n}_toFieldTransform(e){const n=new Yo(e.serializer,fT(e.serializer,this.Ju));return new yT(e.path,n)}isEqual(e){return e instanceof kf&&this.Ju===e.Ju}}function gL(t,e,n,r){const i=t.ju(1,e,n);xf("Data must be an object, but it was:",i,r);const s=[],o=Qt.empty();Jr(r,(c,u)=>{const h=Of(e,c,n);u=$e(u);const f=i.Ku(h);if(u instanceof zc)s.push(h);else{const p=ma(u,f);p!=null&&(s.push(h),o.set(h,p))}});const a=new nn(s);return new ob(o,a,i.fieldTransforms)}function _L(t,e,n,r,i,s){const o=t.ju(1,e,n),a=[id(e,r,n)],c=[i];if(s.length%2!=0)throw new te($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)a.push(id(e,s[p])),c.push(s[p+1]);const u=[],h=Qt.empty();for(let p=a.length-1;p>=0;--p)if(!db(u,a[p])){const g=a[p];let w=c[p];w=$e(w);const C=o.Ku(g);if(w instanceof zc)u.push(g);else{const S=ma(w,C);S!=null&&(u.push(g),h.set(g,S))}}const f=new nn(u);return new ob(h,f,o.fieldTransforms)}function cb(t,e,n,r=!1){return ma(n,t.ju(r?4:3,e))}function ma(t,e){if(hb(t=$e(t)))return xf("Unsupported field value:",e,t),ub(t,e);if(t instanceof fa)return function(r,i){if(!ab(i.Lu))throw i.Wu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Wu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=ma(a,i.Uu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=$e(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return fT(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=gt.fromDate(r);return{timestampValue:Ql(i.serializer,s)}}if(r instanceof gt){const s=new gt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ql(i.serializer,s)}}if(r instanceof Rf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ps)return{bytesValue:IT(i.serializer,r._byteString)};if(r instanceof Wt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Wu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:uf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Sf)return function(o,a){return{mapValue:{fields:{[JE]:{stringValue:ZE},[Wl]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Wu("VectorValues must only contain numeric values.");return of(a.serializer,u)})}}}}}}(r,i);throw i.Wu(`Unsupported field value: ${Bc(r)}`)}(t,e)}function ub(t,e){const n={};return zE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Jr(t,(r,i)=>{const s=ma(i,e.qu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function hb(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof gt||t instanceof Rf||t instanceof Ps||t instanceof Wt||t instanceof fa||t instanceof Sf)}function xf(t,e,n){if(!hb(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Bc(n);throw r==="an object"?e.Wu(t+" a custom object"):e.Wu(t+" "+r)}}function id(t,e,n){if((e=$e(e))instanceof Hc)return e._internalPath;if(typeof e=="string")return Of(t,e);throw Zl("Field path arguments must be of type string or ",t,!1,void 0,n)}const yL=new RegExp("[~\\*/\\[\\]]");function Of(t,e,n){if(e.search(yL)>=0)throw Zl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Hc(...e.split("."))._internalPath}catch{throw Zl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Zl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new te($.INVALID_ARGUMENT,a+t+c)}function db(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new vL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Wc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class vL extends Df{data(){return super.data()}}function Wc(t,e){return typeof e=="string"?Of(t,e):e instanceof Hc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wL(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new te($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Nf{}class Kc extends Nf{}function oU(t,e,...n){let r=[];e instanceof Nf&&r.push(e),r=r.concat(n),function(s){const o=s.filter(c=>c instanceof Lf).length,a=s.filter(c=>c instanceof Gc).length;if(o>1||o>0&&a>0)throw new te($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Gc extends Kc{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Gc(e,n,r)}_apply(e){const n=this._parse(e);return fb(e._query,n),new mr(e.firestore,e.converter,Gh(e._query,n))}_parse(e){const n=pa(e.firestore);return function(s,o,a,c,u,h,f){let p;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new te($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){q_(f,h);const w=[];for(const C of f)w.push($_(c,s,C));p={arrayValue:{values:w}}}else p=$_(c,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||q_(f,h),p=cb(a,o,f,h==="in"||h==="not-in");return ht.create(u,h,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function aU(t,e,n){const r=e,i=Wc("where",t);return Gc._create(i,r,n)}class Lf extends Nf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Lf(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:kn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const c of a)fb(o,c),o=Gh(o,c)}(e._query,n),new mr(e.firestore,e.converter,Gh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Vf extends Kc{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Vf(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new te($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new te($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Wo(s,o)}(e._query,this._field,this._direction);return new mr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Vi(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function lU(t,e="asc"){const n=e,r=Wc("orderBy",t);return Vf._create(r,n)}class Mf extends Kc{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Mf(e,n,r)}_apply(e){return new mr(e.firestore,e.converter,Gl(e._query,this._limit,this._limitType))}}function cU(t){return cL("limit",t),Mf._create("limit",t,"F")}class Ff extends Kc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Ff(e,n,r)}_apply(e){const n=EL(e,this.type,this._docOrFields,this._inclusive);return new mr(e.firestore,e.converter,function(i,s){return new Vi(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function uU(...t){return Ff._create("startAfter",t,!1)}function EL(t,e,n,r){if(n[0]=$e(n[0]),n[0]instanceof Df)return function(s,o,a,c,u){if(!c)throw new te($.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const h=[];for(const f of ms(s))if(f.field.isKeyField())h.push(Kl(o,c.key));else{const p=c.data.field(f.field);if(Oc(p))throw new te($.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(p===null){const g=f.field.canonicalString();throw new te($.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${g}' (used as the orderBy) does not exist.`)}h.push(p)}return new Rs(h,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=pa(t.firestore);return function(o,a,c,u,h,f){const p=o.explicitOrderBy;if(h.length>p.length)throw new te($.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const g=[];for(let w=0;w<h.length;w++){const C=h[w];if(p[w].field.isKeyField()){if(typeof C!="string")throw new te($.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof C}`);if(!sf(o)&&C.indexOf("/")!==-1)throw new te($.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${C}' contains a slash.`);const S=o.path.child(We.fromString(C));if(!le.isDocumentKey(S))throw new te($.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${S}' is not because it contains an odd number of segments.`);const x=new le(S);g.push(Kl(a,x))}else{const S=cb(c,u,C);g.push(S)}}return new Rs(g,f)}(t._query,t.firestore._databaseId,i,e,n,r)}}function $_(t,e,n){if(typeof(n=$e(n))=="string"){if(n==="")throw new te($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!sf(e)&&n.indexOf("/")!==-1)throw new te($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(We.fromString(n));if(!le.isDocumentKey(r))throw new te($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Kl(t,new le(r))}if(n instanceof Wt)return Kl(t,n._key);throw new te($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Bc(n)}.`)}function q_(t,e){if(!Array.isArray(t)||t.length===0)throw new te($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function fb(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new te($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class TL{convertValue(e,n="none"){switch(Hr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ot(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ye()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Jr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n[Wl].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>ot(o.doubleValue));return new Sf(s)}convertGeoPoint(e){return new Rf(ot(e.latitude),ot(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Dc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(jo(e));default:return null}}convertTimestamp(e){const n=Br(e);return new gt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=We.fromString(e);Me(kT(r));const i=new Ho(r.get(1),r.get(3)),s=new le(r.popFirst(5));return i.isEqual(n)||cr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pb(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class mb extends Df{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new dl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Wc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class dl extends mb{data(e={}){return super.data(e)}}class bL{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new uo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new dl(this._firestore,this._userDataWriter,r.key,r,new uo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new te($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new dl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new uo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new dl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new uo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:IL(a.type),doc:c,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function IL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ye()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hU(t){t=xn(t,Wt);const e=xn(t.firestore,Ui);return oL(Af(e),t._key).then(n=>AL(e,t,n))}class gb extends TL{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ps(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Wt(this.firestore,null,n)}}function dU(t){t=xn(t,mr);const e=xn(t.firestore,Ui),n=Af(e),r=new gb(e);return wL(t._query),aL(n,t._query).then(i=>new bL(e,r,t,i))}function fU(t,e,n){t=xn(t,Wt);const r=xn(t.firestore,Ui),i=pb(t.converter,e,n);return Qc(r,[lb(pa(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,pn.none())])}function _b(t,e,n,...r){t=xn(t,Wt);const i=xn(t.firestore,Ui),s=pa(i);let o;return o=typeof(e=$e(e))=="string"||e instanceof Hc?_L(s,"updateDoc",t._key,e,n,r):gL(s,"updateDoc",t._key,e),Qc(i,[o.toMutation(t._key,pn.exists(!0))])}function pU(t){return Qc(xn(t.firestore,Ui),[new af(t._key,pn.none())])}function mU(t,e){const n=xn(t.firestore,Ui),r=If(t),i=pb(t.converter,e);return Qc(n,[lb(pa(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,pn.exists(!1))]).then(()=>r)}function Qc(t,e){return function(r,i){const s=new ir;return r.asyncQueue.enqueueAndForget(async()=>GN(await sL(r),i,s)),s.promise}(Af(t),e)}function AL(t,e,n){const r=n.docs.get(e._key),i=new gb(t);return new mb(t,i,e._key,r,new uo(n.hasPendingWrites,n.fromCache),e.converter)}function gU(){return new Pf("serverTimestamp")}function _U(t){return new kf("increment",t)}(function(e,n=!0){(function(i){Ds=i})(Li),Pn(new gn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Ui(new w1(r.getProvider("auth-internal")),new b1(o,r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new te($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ho(u.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Yt(Wg,Kg,e),Yt(Wg,Kg,"esm2017")})();var RL="firebase",SL="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yt(RL,SL,"app");const yb="@firebase/installations",Uf="0.6.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb=1e4,wb=`w:${Uf}`,Eb="FIS_v2",CL="https://firebaseinstallations.googleapis.com/v1",PL=60*60*1e3,kL="installations",xL="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OL={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},ki=new Ni(kL,xL,OL);function Tb(t){return t instanceof yn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bb({projectId:t}){return`${CL}/projects/${t}/installations`}function Ib(t){return{token:t.token,requestStatus:2,expiresIn:NL(t.expiresIn),creationTime:Date.now()}}async function Ab(t,e){const r=(await e.json()).error;return ki.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Rb({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function DL(t,{refreshToken:e}){const n=Rb(t);return n.append("Authorization",LL(e)),n}async function Sb(t){const e=await t();return e.status>=500&&e.status<600?t():e}function NL(t){return Number(t.replace("s","000"))}function LL(t){return`${Eb} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VL({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=bb(t),i=Rb(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:Eb,appId:t.appId,sdkVersion:wb},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Sb(()=>fetch(r,a));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Ib(u.authToken)}}else throw await Ab("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cb(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ML(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FL=/^[cdef][\w-]{21}$/,sd="";function UL(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=$L(t);return FL.test(n)?n:sd}catch{return sd}}function $L(t){return ML(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb=new Map;function kb(t,e){const n=Yc(t);xb(n,e),qL(n,e)}function xb(t,e){const n=Pb.get(t);if(!!n)for(const r of n)r(e)}function qL(t,e){const n=BL();n&&n.postMessage({key:t,fid:e}),jL()}let fi=null;function BL(){return!fi&&"BroadcastChannel"in self&&(fi=new BroadcastChannel("[Firebase] FID Change"),fi.onmessage=t=>{xb(t.data.key,t.data.fid)}),fi}function jL(){Pb.size===0&&fi&&(fi.close(),fi=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HL="firebase-installations-database",zL=1,xi="firebase-installations-store";let Xu=null;function $f(){return Xu||(Xu=Kw(HL,zL,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(xi)}}})),Xu}async function ec(t,e){const n=Yc(t),i=(await $f()).transaction(xi,"readwrite"),s=i.objectStore(xi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&kb(t,e.fid),e}async function Ob(t){const e=Yc(t),r=(await $f()).transaction(xi,"readwrite");await r.objectStore(xi).delete(e),await r.done}async function Jc(t,e){const n=Yc(t),i=(await $f()).transaction(xi,"readwrite"),s=i.objectStore(xi),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&kb(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qf(t){let e;const n=await Jc(t.appConfig,r=>{const i=WL(r),s=KL(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===sd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function WL(t){const e=t||{fid:UL(),registrationStatus:0};return Db(e)}function KL(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ki.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=GL(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:QL(t)}:{installationEntry:e}}async function GL(t,e){try{const n=await VL(t,e);return ec(t.appConfig,n)}catch(n){throw Tb(n)&&n.customData.serverCode===409?await Ob(t.appConfig):await ec(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function QL(t){let e=await B_(t.appConfig);for(;e.registrationStatus===1;)await Cb(100),e=await B_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await qf(t);return r||n}return e}function B_(t){return Jc(t,e=>{if(!e)throw ki.create("installation-not-found");return Db(e)})}function Db(t){return YL(t)?{fid:t.fid,registrationStatus:0}:t}function YL(t){return t.registrationStatus===1&&t.registrationTime+vb<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JL({appConfig:t,heartbeatServiceProvider:e},n){const r=XL(t,n),i=DL(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:wb,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Sb(()=>fetch(r,a));if(c.ok){const u=await c.json();return Ib(u)}else throw await Ab("Generate Auth Token",c)}function XL(t,{fid:e}){return`${bb(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bf(t,e=!1){let n;const r=await Jc(t.appConfig,s=>{if(!Nb(s))throw ki.create("not-registered");const o=s.authToken;if(!e&&tV(o))return s;if(o.requestStatus===1)return n=ZL(t,e),s;{if(!navigator.onLine)throw ki.create("app-offline");const a=rV(s);return n=eV(t,a),a}});return n?await n:r.authToken}async function ZL(t,e){let n=await j_(t.appConfig);for(;n.authToken.requestStatus===1;)await Cb(100),n=await j_(t.appConfig);const r=n.authToken;return r.requestStatus===0?Bf(t,e):r}function j_(t){return Jc(t,e=>{if(!Nb(e))throw ki.create("not-registered");const n=e.authToken;return iV(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function eV(t,e){try{const n=await JL(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await ec(t.appConfig,r),n}catch(n){if(Tb(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Ob(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ec(t.appConfig,r)}throw n}}function Nb(t){return t!==void 0&&t.registrationStatus===2}function tV(t){return t.requestStatus===2&&!nV(t)}function nV(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+PL}function rV(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function iV(t){return t.requestStatus===1&&t.requestTime+vb<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sV(t){const e=t,{installationEntry:n,registrationPromise:r}=await qf(e);return r?r.catch(console.error):Bf(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oV(t,e=!1){const n=t;return await aV(n),(await Bf(n,e)).token}async function aV(t){const{registrationPromise:e}=await qf(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lV(t){if(!t||!t.options)throw Zu("App Configuration");if(!t.name)throw Zu("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Zu(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Zu(t){return ki.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb="installations",cV="installations-internal",uV=t=>{const e=t.getProvider("app").getImmediate(),n=lV(e),r=Yr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},hV=t=>{const e=t.getProvider("app").getImmediate(),n=Yr(e,Lb).getImmediate();return{getId:()=>sV(n),getToken:i=>oV(n,i)}};function dV(){Pn(new gn(Lb,uV,"PUBLIC")),Pn(new gn(cV,hV,"PRIVATE"))}dV();Yt(yb,Uf);Yt(yb,Uf,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc="analytics",fV="firebase_id",pV="origin",mV=60*1e3,gV="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",jf="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt=new Ac("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _V={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},sn=new Ni("analytics","Analytics",_V);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yV(t){if(!t.startsWith(jf)){const e=sn.create("invalid-gtag-resource",{gtagURL:t});return Jt.warn(e.message),""}return t}function Vb(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function vV(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function wV(t,e){const n=vV("firebase-js-sdk-policy",{createScriptURL:yV}),r=document.createElement("script"),i=`${jf}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function EV(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function TV(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const c=(await Vb(n)).find(u=>u.measurementId===i);c&&await e[c.appId]}}catch(a){Jt.error(a)}t("config",i,s)}async function bV(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Vb(n);for(const c of o){const u=a.find(f=>f.measurementId===c),h=u&&e[u.appId];if(h)s.push(h);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Jt.error(s)}}function IV(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,c]=o;await bV(t,e,n,a,c)}else if(s==="config"){const[a,c]=o;await TV(t,e,n,r,a,c)}else if(s==="consent"){const[a,c]=o;t("consent",a,c)}else if(s==="get"){const[a,c,u]=o;t("get",a,c,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){Jt.error(a)}}return i}function AV(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=IV(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function RV(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(jf)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SV=30,CV=1e3;class PV{constructor(e={},n=CV){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Mb=new PV;function kV(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function xV(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:kV(r)},s=gV.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw sn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function OV(t,e=Mb,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw sn.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw sn.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new LV;return setTimeout(async()=>{a.abort()},n!==void 0?n:mV),Fb({appId:r,apiKey:i,measurementId:s},o,a,e)}async function Fb(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Mb){var s;const{appId:o,measurementId:a}=t;try{await DV(r,e)}catch(c){if(a)return Jt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await xV(t);return i.deleteThrottleMetadata(o),c}catch(c){const u=c;if(!NV(u)){if(i.deleteThrottleMetadata(o),a)return Jt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw c}const h=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?yg(n,i.intervalMillis,SV):yg(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(o,f),Jt.debug(`Calling attemptFetch again in ${h} millis`),Fb(t,f,r,i)}}function DV(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(sn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function NV(t){if(!(t instanceof yn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class LV{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function VV(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MV(){if(jw())try{await Hw()}catch(t){return Jt.warn(sn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Jt.warn(sn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function FV(t,e,n,r,i,s,o){var a;const c=OV(t);c.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&Jt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Jt.error(g)),e.push(c);const u=MV().then(g=>{if(g)return r.getId()}),[h,f]=await Promise.all([c,u]);RV(s)||wV(s,h.measurementId),i("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[pV]="firebase",p.update=!0,f!=null&&(p[fV]=f),i("config",h.measurementId,p),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UV{constructor(e){this.app=e}_delete(){return delete Ro[this.app.options.appId],Promise.resolve()}}let Ro={},H_=[];const z_={};let eh="dataLayer",$V="gtag",W_,Ub,K_=!1;function qV(){const t=[];if(Bw()&&t.push("This is a browser extension environment."),xP()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=sn.create("invalid-analytics-context",{errorInfo:e});Jt.warn(n.message)}}function BV(t,e,n){qV();const r=t.options.appId;if(!r)throw sn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Jt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw sn.create("no-api-key");if(Ro[r]!=null)throw sn.create("already-exists",{id:r});if(!K_){EV(eh);const{wrappedGtag:s,gtagCore:o}=AV(Ro,H_,z_,eh,$V);Ub=s,W_=o,K_=!0}return Ro[r]=FV(t,H_,z_,e,W_,eh,n),new UV(t)}function jV(t=Rc()){t=$e(t);const e=Yr(t,tc);return e.isInitialized()?e.getImmediate():HV(t)}function HV(t,e={}){const n=Yr(t,tc);if(n.isInitialized()){const i=n.getImmediate();if($r(e,n.getOptions()))return i;throw sn.create("already-initialized")}return n.initialize({options:e})}function zV(t,e,n,r){t=$e(t),VV(Ub,Ro[t.app.options.appId],e,n,r).catch(i=>Jt.error(i))}const G_="@firebase/analytics",Q_="0.10.12";function WV(){Pn(new gn(tc,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return BV(r,i,n)},"PUBLIC")),Pn(new gn("analytics-internal",t,"PRIVATE")),Yt(G_,Q_),Yt(G_,Q_,"esm2017");function t(e){try{const n=e.getProvider(tc).getImmediate();return{logEvent:(r,i,s)=>zV(n,r,i,s)}}catch(n){throw sn.create("interop-component-reg-failed",{reason:n})}}}WV();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $b="firebasestorage.googleapis.com",qb="storageBucket",KV=2*60*1e3,GV=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends yn{constructor(e,n,r=0){super(th(e),`Firebase Storage: ${n} (${th(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,it.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return th(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var rt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(rt||(rt={}));function th(t){return"storage/"+t}function Hf(){const t="An unknown error occurred, please check the error payload for server response.";return new it(rt.UNKNOWN,t)}function QV(t){return new it(rt.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function YV(t){return new it(rt.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function JV(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new it(rt.UNAUTHENTICATED,t)}function XV(){return new it(rt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function ZV(t){return new it(rt.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function eM(){return new it(rt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function tM(){return new it(rt.CANCELED,"User canceled the upload/download.")}function nM(t){return new it(rt.INVALID_URL,"Invalid URL '"+t+"'.")}function rM(t){return new it(rt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function iM(){return new it(rt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+qb+"' property when initializing the app?")}function sM(){return new it(rt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function oM(){return new it(rt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function aM(t){return new it(rt.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function od(t){return new it(rt.INVALID_ARGUMENT,t)}function Bb(){return new it(rt.APP_DELETED,"The Firebase app was deleted.")}function lM(t){return new it(rt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function So(t,e){return new it(rt.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function eo(t){throw new it(rt.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=rn.makeFromUrl(e,n)}catch{return new rn(e,"")}if(r.path==="")return r;throw rM(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(D){D.path_=decodeURIComponent(D.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${h}/b/${i}/o${p}`,"i"),w={bucket:1,path:3},C=n===$b?"(?:storage.googleapis.com|storage.cloud.google.com)":n,S="([^?#]*)",x=new RegExp(`^https?://${C}/${i}/${S}`,"i"),O=[{regex:a,indices:c,postModify:s},{regex:g,indices:w,postModify:u},{regex:x,indices:{bucket:1,path:2},postModify:u}];for(let D=0;D<O.length;D++){const V=O[D],j=V.regex.exec(e);if(j){const b=j[V.indices.bucket];let v=j[V.indices.path];v||(v=""),r=new rn(b,v),V.postModify(r);break}}if(r==null)throw nM(e);return r}}class cM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uM(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return a===2}let u=!1;function h(...S){u||(u=!0,e.apply(null,S))}function f(S){i=setTimeout(()=>{i=null,t(g,c())},S)}function p(){s&&clearTimeout(s)}function g(S,...x){if(u){p();return}if(S){p(),h.call(null,S,...x);return}if(c()||o){p(),h.call(null,S,...x);return}r<64&&(r*=2);let O;a===1?(a=2,O=0):O=(r+Math.random())*1e3,f(O)}let w=!1;function C(S){w||(w=!0,p(),!u&&(i!==null?(S||(a=2),clearTimeout(i),f(0)):S||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,C(!0)},n),C}function hM(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dM(t){return t!==void 0}function fM(t){return typeof t=="object"&&!Array.isArray(t)}function zf(t){return typeof t=="string"||t instanceof String}function Y_(t){return Wf()&&t instanceof Blob}function Wf(){return typeof Blob!="undefined"}function J_(t,e,n,r){if(r<e)throw od(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw od(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function jb(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var wi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(wi||(wi={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pM(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mM{constructor(e,n,r,i,s,o,a,c,u,h,f,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=f,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,w)=>{this.resolve_=g,this.reject_=w,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Wa(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===wi.NO_ERROR,c=s.getStatus();if(!a||pM(c,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===wi.ABORT;r(!1,new Wa(!1,null,h));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new Wa(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());dM(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=Hf();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?Bb():tM();o(c)}else{const c=eM();o(c)}};this.canceled_?n(!1,new Wa(!1,null,!0)):this.backoffId_=uM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&hM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Wa{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function gM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function _M(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function yM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function vM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function wM(t,e,n,r,i,s,o=!0){const a=jb(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return yM(u,e),gM(u,n),_M(u,s),vM(u,r),new mM(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EM(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function TM(...t){const e=EM();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Wf())return new Blob(t);throw new it(rt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function bM(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IM(t){if(typeof atob=="undefined")throw aM("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class nh{constructor(e,n){this.data=e,this.contentType=n||null}}function AM(t,e){switch(t){case Un.RAW:return new nh(Hb(e));case Un.BASE64:case Un.BASE64URL:return new nh(zb(t,e));case Un.DATA_URL:return new nh(SM(e),CM(e))}throw Hf()}function Hb(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function RM(t){let e;try{e=decodeURIComponent(t)}catch{throw So(Un.DATA_URL,"Malformed data URL.")}return Hb(e)}function zb(t,e){switch(t){case Un.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw So(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Un.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw So(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=IM(e)}catch(i){throw i.message.includes("polyfill")?i:So(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class Wb{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw So(Un.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=PM(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function SM(t){const e=new Wb(t);return e.base64?zb(Un.BASE64,e.rest):RM(e.rest)}function CM(t){return new Wb(t).contentType}function PM(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,n){let r=0,i="";Y_(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Y_(this.data_)){const r=this.data_,i=bM(r,e,n);return i===null?null:new Or(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Or(r,!0)}}static getBlob(...e){if(Wf()){const n=e.map(r=>r instanceof Or?r.data_:r);return new Or(TM.apply(null,n))}else{const n=e.map(o=>zf(o)?AM(Un.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Or(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kb(t){let e;try{e=JSON.parse(t)}catch{return null}return fM(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function xM(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Gb(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OM(t,e){return e}class Mt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||OM}}let Ka=null;function DM(t){return!zf(t)||t.length<2?t:Gb(t)}function Qb(){if(Ka)return Ka;const t=[];t.push(new Mt("bucket")),t.push(new Mt("generation")),t.push(new Mt("metageneration")),t.push(new Mt("name","fullPath",!0));function e(s,o){return DM(o)}const n=new Mt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Mt("size");return i.xform=r,t.push(i),t.push(new Mt("timeCreated")),t.push(new Mt("updated")),t.push(new Mt("md5Hash",null,!0)),t.push(new Mt("cacheControl",null,!0)),t.push(new Mt("contentDisposition",null,!0)),t.push(new Mt("contentEncoding",null,!0)),t.push(new Mt("contentLanguage",null,!0)),t.push(new Mt("contentType",null,!0)),t.push(new Mt("metadata","customMetadata",!0)),Ka=t,Ka}function NM(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new rn(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function LM(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return NM(r,t),r}function Yb(t,e,n){const r=Kb(e);return r===null?null:LM(t,r,n)}function VM(t,e,n,r){const i=Kb(e);if(i===null||!zf(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const h=t.bucket,f=t.fullPath,p="/b/"+o(h)+"/o/"+o(f),g=Kf(p,n,r),w=jb({alt:"media",token:u});return g+w})[0]}function MM(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Jb{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xb(t){if(!t)throw Hf()}function FM(t,e){function n(r,i){const s=Yb(t,i,e);return Xb(s!==null),s}return n}function UM(t,e){function n(r,i){const s=Yb(t,i,e);return Xb(s!==null),VM(s,i,t.host,t._protocol)}return n}function Zb(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=XV():i=JV():n.getStatus()===402?i=YV(t.bucket):n.getStatus()===403?i=ZV(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function $M(t){const e=Zb(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=QV(t.path)),s.serverResponse=i.serverResponse,s}return n}function qM(t,e,n){const r=e.fullServerUrl(),i=Kf(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Jb(i,s,UM(t,n),o);return a.errorHandler=$M(e),a}function BM(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function jM(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=BM(null,e)),r}function HM(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let O="";for(let D=0;D<2;D++)O=O+Math.random().toString().slice(2);return O}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=jM(e,r,i),h=MM(u,n),f="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,p=`\r
--`+c+"--",g=Or.getBlob(f,r,p);if(g===null)throw sM();const w={name:u.fullPath},C=Kf(s,t.host,t._protocol),S="POST",x=t.maxUploadRetryTime,k=new Jb(C,S,FM(t,n),x);return k.urlParams=w,k.headers=o,k.body=g.uploadData(),k.errorHandler=Zb(e),k}class zM{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=wi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=wi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=wi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw eo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw eo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw eo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw eo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw eo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class WM extends zM{initXhr(){this.xhr_.responseType="text"}}function e0(){return new WM}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,n){this._service=e,n instanceof rn?this._location=n:this._location=rn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Oi(e,n)}get root(){const e=new rn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Gb(this._location.path)}get storage(){return this._service}get parent(){const e=kM(this._location.path);if(e===null)return null;const n=new rn(this._location.bucket,e);return new Oi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw lM(e)}}function KM(t,e,n){t._throwIfRoot("uploadBytes");const r=HM(t.storage,t._location,Qb(),new Or(e,!0),n);return t.storage.makeRequestWithTokens(r,e0).then(i=>({metadata:i,ref:t}))}function GM(t){t._throwIfRoot("getDownloadURL");const e=qM(t.storage,t._location,Qb());return t.storage.makeRequestWithTokens(e,e0).then(n=>{if(n===null)throw oM();return n})}function QM(t,e){const n=xM(t._location.path,e),r=new rn(t._location.bucket,n);return new Oi(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YM(t){return/^[A-Za-z]+:\/\//.test(t)}function JM(t,e){return new Oi(t,e)}function t0(t,e){if(t instanceof Gf){const n=t;if(n._bucket==null)throw iM();const r=new Oi(n,n._bucket);return e!=null?t0(r,e):r}else return e!==void 0?QM(t,e):t}function XM(t,e){if(e&&YM(e)){if(t instanceof Gf)return JM(t,e);throw od("To use ref(service, url), the first argument must be a Storage instance.")}else return t0(t,e)}function X_(t,e){const n=e==null?void 0:e[qb];return n==null?null:rn.makeFromBucketSpec(n,t)}function ZM(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:qw(i,t.app.options.projectId))}class Gf{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=$b,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=KV,this._maxUploadRetryTime=GV,this._requests=new Set,i!=null?this._bucket=rn.makeFromBucketSpec(i,this._host):this._bucket=X_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=rn.makeFromBucketSpec(this._url,e):this._bucket=X_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){J_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){J_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Ht(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Oi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new cM(Bb());{const o=wM(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Z_="@firebase/storage",ey="0.13.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0="storage";function yU(t,e,n){return t=$e(t),KM(t,e,n)}function vU(t){return t=$e(t),GM(t)}function wU(t,e){return t=$e(t),XM(t,e)}function eF(t=Rc(),e){t=$e(t);const r=Yr(t,n0).getImmediate({identifier:e}),i=Fw("storage");return i&&tF(r,...i),r}function tF(t,e,n,r={}){ZM(t,e,n,r)}function nF(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Gf(n,r,i,e,Li)}function rF(){Pn(new gn(n0,nF,"PUBLIC").setMultipleInstances(!0)),Yt(Z_,ey,""),Yt(Z_,ey,"esm2017")}rF();const iF={apiKey:"AIzaSyA75UioB4LkxZBOmmJhIvUvRjfUrySC6nk",authDomain:"kjm01-vue3-firebase-app-c56f7.firebaseapp.com",projectId:"kjm01-vue3-firebase-app-c56f7",storageBucket:"kjm01-vue3-firebase-app-c56f7.firebasestorage.app",messagingSenderId:"1093570967237",appId:"1:1093570967237:web:b05e745dd9d30813b522ac",measurementId:"G-RFLEFK40QF"},Xc=Gw(iF);jV(Xc);const Xt=g1(Xc),Qf=hL(Xc),sF=eF(Xc);var oF=async()=>{const t=Dw();iO(Xt,e=>{t.setUser(e)})},aF=Object.freeze(Object.defineProperty({__proto__:null,auth:Xt,db:Qf,storage:sF,default:oF},Symbol.toStringTag,{value:"Module"}));const lF="https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=";async function EU(){const t=new Zn,{user:e}=await AO(Xt,t);return e}async function cF(){await sO(Xt)}async function TU({email:t,password:e}){const{user:n}=await Jx(Xt,t,e);await bE(n,{displayName:t.split("@")[0],photoURL:r0(n.uid)}),TE(Xt.currentUser)}function r0(t){return`${lF}${t}`}async function bU({email:t,password:e}){const{user:n}=await Xx(Xt,t,e);return n}async function IU(t){await Yx(Xt,t)}async function AU(t){await tO(Xt.currentUser,t)}async function uF(){await TE(Xt.currentUser)}async function RU(t){await bE(Xt.currentUser,{displayName:t}),await _b(If(Qf,"users",Xt.currentUser.uid),{displayName:t})}async function SU(t){await eO(Xt.currentUser,t),await _b(If(Qf,"users",Xt.currentUser.uid),{email:t})}const hF={xs:8,sm:10,md:14,lg:20,xl:24};var CU=et({name:"QChip",props:{...ks,...Tc,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(t,{slots:e,emit:n}){const{proxy:{$q:r}}=Ze(),i=xs(t,r),s=bc(t,hF),o=H(()=>t.selected===!0||t.icon!==void 0),a=H(()=>t.selected===!0?t.iconSelected||r.iconSet.chip.selected:t.icon),c=H(()=>t.iconRemove||r.iconSet.chip.remove),u=H(()=>t.disable===!1&&(t.clickable===!0||t.selected!==null)),h=H(()=>{const S=t.outline===!0&&t.color||t.textColor;return"q-chip row inline no-wrap items-center"+(t.outline===!1&&t.color!==void 0?` bg-${t.color}`:"")+(S?` text-${S} q-chip--colored`:"")+(t.disable===!0?" disabled":"")+(t.dense===!0?" q-chip--dense":"")+(t.outline===!0?" q-chip--outline":"")+(t.selected===!0?" q-chip--selected":"")+(u.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(t.square===!0?" q-chip--square":"")+(i.value===!0?" q-chip--dark q-dark":"")}),f=H(()=>{const S=t.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:t.tabindex||0},x={...S,role:"button","aria-hidden":"false","aria-label":t.removeAriaLabel||r.lang.label.remove};return{chip:S,remove:x}});function p(S){S.keyCode===13&&g(S)}function g(S){t.disable||(n("update:selected",!t.selected),n("click",S))}function w(S){(S.keyCode===void 0||S.keyCode===13)&&(Tn(S),t.disable===!1&&(n("update:modelValue",!1),n("remove")))}function C(){const S=[];u.value===!0&&S.push(Y("div",{class:"q-focus-helper"})),o.value===!0&&S.push(Y(gi,{class:"q-chip__icon q-chip__icon--left",name:a.value}));const x=t.label!==void 0?[Y("div",{class:"ellipsis"},[t.label])]:void 0;return S.push(Y("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},nw(e.default,x))),t.iconRight&&S.push(Y(gi,{class:"q-chip__icon q-chip__icon--right",name:t.iconRight})),t.removable===!0&&S.push(Y(gi,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:c.value,...f.value.remove,onClick:w,onKeyup:w})),S}return()=>{if(t.modelValue===!1)return;const S={class:h.value,style:s.value};return u.value===!0&&Object.assign(S,f.value.chip,{onClick:g,onKeyup:p}),YS("div",S,C(),"ripple",t.ripple!==!1&&t.disable!==!0,()=>[[lw,t.ripple]])}}}),PU=et({name:"QTooltip",inheritAttrs:!1,props:{...pw,...xd,...Ld,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:Dl},self:{type:String,default:"top middle",validator:Dl},offset:{type:Array,default:()=>[14,14],validator:Cw},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...Od],setup(t,{slots:e,emit:n,attrs:r}){let i,s;const o=Ze(),{proxy:{$q:a}}=o,c=Re(null),u=Re(!1),h=H(()=>Nl(t.anchor,a.lang.rtl)),f=H(()=>Nl(t.self,a.lang.rtl)),p=H(()=>t.persistent!==!0),{registerTick:g,removeTick:w}=Md(),{registerTimeout:C}=Fd(),{transitionProps:S,transitionStyle:x}=Vd(t),{localScrollTarget:k,changeScrollEvent:O,unconfigureScrollTarget:D}=gw(t,Je),{anchorEl:V,canShow:j,anchorEvents:b}=mw({showing:u,configureAnchorEl:qe}),{show:v,hide:_}=Dd({showing:u,canShow:j,handleShow:E,handleHide:G,hideOnRouteChange:p,processOnMount:!0});Object.assign(b,{delayShow:_e,delayHide:he});const{showPortal:A,hidePortal:T,renderPortal:R}=Nd(o,c,De,"tooltip");if(a.platform.is.mobile===!0){const de={anchorEl:V,innerRef:c,onClickOutside(ce){return _(ce),ce.target.classList.contains("q-dialog__backdrop")&&Tn(ce),!0}},yt=H(()=>t.modelValue===null&&t.persistent!==!0&&u.value===!0);Ve(yt,ce=>{(ce===!0?Sw:Ol)(de)}),Nt(()=>{Ol(de)})}function E(de){A(),g(()=>{s=new MutationObserver(()=>se()),s.observe(c.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),se(),Je()}),i===void 0&&(i=Ve(()=>a.screen.width+"|"+a.screen.height+"|"+t.self+"|"+t.anchor+"|"+a.lang.rtl,se)),C(()=>{A(!0),n("show",de)},t.transitionDuration)}function G(de){w(),T(),oe(),C(()=>{T(!0),n("hide",de)},t.transitionDuration)}function oe(){s!==void 0&&(s.disconnect(),s=void 0),i!==void 0&&(i(),i=void 0),D(),Al(b,"tooltipTemp")}function se(){const de=c.value;V.value===null||!de||Pw({el:de,offset:t.offset,anchorEl:V.value,anchorOrigin:h.value,selfOrigin:f.value,maxHeight:t.maxHeight,maxWidth:t.maxWidth})}function _e(de){if(a.platform.is.mobile===!0){Ch(),document.body.classList.add("non-selectable");const yt=V.value,ce=["touchmove","touchcancel","touchend","click"].map(Ie=>[yt,Ie,"delayHide","passiveCapture"]);Vo(b,"tooltipTemp",ce)}C(()=>{v(de)},t.delay)}function he(de){a.platform.is.mobile===!0&&(Al(b,"tooltipTemp"),Ch(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),C(()=>{_(de)},t.hideDelay)}function qe(){if(t.noParentEvent===!0||V.value===null)return;const de=a.platform.is.mobile===!0?[[V.value,"touchstart","delayShow","passive"]]:[[V.value,"mouseenter","delayShow","passive"],[V.value,"mouseleave","delayHide","passive"]];Vo(b,"anchor",de)}function Je(){if(V.value!==null||t.scrollTarget!==void 0){k.value=Ud(V.value,t.scrollTarget);const de=t.noParentEvent===!0?se:_;O(k.value,de)}}function st(){return u.value===!0?Y("div",{...r,ref:c,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",r.class],style:[r.style,x.value],role:"tooltip"},On(e.default)):null}function De(){return Y(No,S.value,st)}return Nt(oe),Object.assign(o.proxy,{updatePosition:se}),R}}),dF={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(self,()=>(()=>{var n={d:(f,p)=>{for(var g in p)n.o(p,g)&&!n.o(f,g)&&Object.defineProperty(f,g,{enumerable:!0,get:p[g]})},o:(f,p)=>Object.prototype.hasOwnProperty.call(f,p),r:f=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(f,"__esModule",{value:!0})}},r={};function i(){return document.createElement("canvas")}function s(f){for(var p=atob(f.split(",")[1]),g=f.split(",")[0].split(":")[1].split(";")[0],w=new ArrayBuffer(p.length),C=new Uint8Array(w),S=0;S<p.length;S++)C[S]=p.charCodeAt(S);return new Blob([w],{type:g})}function o(f,p){var g=p.width/p.height,w=Math.min(p.width,f.maxWidth,g*f.maxHeight);return f.maxSize>0&&f.maxSize<p.width*p.height/1e3&&(w=Math.min(w,Math.floor(1e3*f.maxSize/p.height))),f.scaleRatio&&(w=Math.min(w,Math.floor(f.scaleRatio*p.width))),f.debug&&(console.log("browser-image-resizer: original image size = "+p.width+" px (width) X "+p.height+" px (height)"),console.log("browser-image-resizer: scaled image size = "+w+" px (width) X "+Math.floor(w/g)+" px (height)")),w<=0&&(w=1,console.warn("browser-image-resizer: image size is too small")),w}function a(f,p){var g=document.createElement("canvas"),w=p.outputWidth/f.width;g.width=f.width*w,g.height=f.height*w;var C=f.getContext("2d").getImageData(0,0,f.width,f.height),S=g.getContext("2d").createImageData(g.width,g.height);return function(x,k,O){function D(yt,ce,Ie,F,Z,U){var re=1-Z,Ae=1-U;return yt*re*Ae+ce*Z*Ae+Ie*re*U+F*Z*U}var V,j,b,v,_,A,T,R,E,G,oe,se,_e,he,qe,Je,st,De,de;for(V=0;V<k.height;++V)for(b=V/O,v=Math.floor(b),_=Math.ceil(b)>x.height-1?x.height-1:Math.ceil(b),j=0;j<k.width;++j)A=j/O,T=Math.floor(A),R=Math.ceil(A)>x.width-1?x.width-1:Math.ceil(A),E=4*(j+k.width*V),G=4*(T+x.width*v),oe=4*(R+x.width*v),se=4*(T+x.width*_),_e=4*(R+x.width*_),he=A-T,qe=b-v,Je=D(x.data[G],x.data[oe],x.data[se],x.data[_e],he,qe),k.data[E]=Je,st=D(x.data[G+1],x.data[oe+1],x.data[se+1],x.data[_e+1],he,qe),k.data[E+1]=st,De=D(x.data[G+2],x.data[oe+2],x.data[se+2],x.data[_e+2],he,qe),k.data[E+2]=De,de=D(x.data[G+3],x.data[oe+3],x.data[se+3],x.data[_e+3],he,qe),k.data[E+3]=de}(C,S,w),g.getContext("2d").putImageData(S,0,0),g}function c(f){var p=document.createElement("canvas");return p.width=f.width/2,p.height=f.height/2,p.getContext("2d").drawImage(f,0,0,p.width,p.height),p}n.r(r),n.d(r,{readAndCompressImage:()=>h});var u={quality:.5,maxWidth:800,maxHeight:600,autoRotate:!0,debug:!1,mimeType:"image/jpeg"};function h(f,p){return new Promise(function(g,w){var C=document.createElement("img"),S=new FileReader,x=Object.assign({},u,p);S.onload=function(k){C.onerror=function(){w("cannot load image.")},C.onload=function(){var O={img:C,config:x};try{var D=function(){var V=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},j=V.img,b=V.config,v=(V.orientation,i());v.width=j.width,v.height=j.height;var _=v.getContext("2d");b.mimeType==="image/jpeg"&&(_.fillStyle="#ffffff",_.fillRect(0,0,v.width,v.height),_.save()),_.drawImage(j,0,0),_.restore();for(var A=o(b,v);v.width>=2*A;)v=c(v);v.width>A&&(v=a(v,Object.assign(b,{outputWidth:A})));var T=v.toDataURL(b.mimeType,b.quality);return typeof b.onScale=="function"&&b.onScale(T),s(T)}(O);g(D)}catch(V){w(V)}},C.src=k.target.result};try{S.onerror=function(){w("cannot read image file.")},S.readAsDataURL(f)}catch(k){w(k)}})}return r})())})(dF);var ty=et({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(t,{slots:e}){const n=H(()=>`q-card__section q-card__section--${t.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>Y(t.tag,{class:n.value},On(e.default))}}),fF=et({name:"QCard",props:{...ks,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(t,{slots:e}){const{proxy:{$q:n}}=Ze(),r=xs(t,n),i=H(()=>"q-card"+(r.value===!0?" q-card--dark q-dark":"")+(t.bordered===!0?" q-card--bordered":"")+(t.square===!0?" q-card--square no-border-radius":"")+(t.flat===!0?" q-card--flat no-shadow":""));return()=>Y(t.tag,{class:i.value},On(e.default))}});function pF(t,e,n){let r;function i(){r!==void 0&&(vh.remove(r),r=void 0)}return Nt(()=>{t.value===!0&&i()}),{removeFromHistory:i,addToHistory(){r={condition:()=>n.value===!0,handler:e},vh.add(r)}}}let to=0,rh,ih,ho,sh=!1,ny,ry,iy,oi=null;function mF(t){gF(t)&&Tn(t)}function gF(t){if(t.target===document.body||t.target.classList.contains("q-layout__backdrop"))return!0;const e=gR(t),n=t.shiftKey&&!t.deltaX,r=!n&&Math.abs(t.deltaX)<=Math.abs(t.deltaY),i=n||r?t.deltaY:t.deltaX;for(let s=0;s<e.length;s++){const o=e[s];if(LC(o,r))return r?i<0&&o.scrollTop===0?!0:i>0&&o.scrollTop+o.clientHeight===o.scrollHeight:i<0&&o.scrollLeft===0?!0:i>0&&o.scrollLeft+o.clientWidth===o.scrollWidth}return!0}function sy(t){t.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function Ga(t){sh!==!0&&(sh=!0,requestAnimationFrame(()=>{sh=!1;const{height:e}=t.target,{clientHeight:n,scrollTop:r}=document.scrollingElement;(ho===void 0||e!==window.innerHeight)&&(ho=n-e,document.scrollingElement.scrollTop=r),r>ho&&(document.scrollingElement.scrollTop-=Math.ceil((r-ho)/8))}))}function oy(t){const e=document.body,n=window.visualViewport!==void 0;if(t==="add"){const{overflowY:r,overflowX:i}=window.getComputedStyle(e);rh=Tw(window),ih=Ew(window),ny=e.style.left,ry=e.style.top,iy=window.location.href,e.style.left=`-${rh}px`,e.style.top=`-${ih}px`,i!=="hidden"&&(i==="scroll"||e.scrollWidth>window.innerWidth)&&e.classList.add("q-body--force-scrollbar-x"),r!=="hidden"&&(r==="scroll"||e.scrollHeight>window.innerHeight)&&e.classList.add("q-body--force-scrollbar-y"),e.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,at.is.ios===!0&&(n===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",Ga,ut.passiveCapture),window.visualViewport.addEventListener("scroll",Ga,ut.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",sy,ut.passiveCapture))}at.is.desktop===!0&&at.is.mac===!0&&window[`${t}EventListener`]("wheel",mF,ut.notPassive),t==="remove"&&(at.is.ios===!0&&(n===!0?(window.visualViewport.removeEventListener("resize",Ga,ut.passiveCapture),window.visualViewport.removeEventListener("scroll",Ga,ut.passiveCapture)):window.removeEventListener("scroll",sy,ut.passiveCapture)),e.classList.remove("q-body--prevent-scroll"),e.classList.remove("q-body--force-scrollbar-x"),e.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,e.style.left=ny,e.style.top=ry,window.location.href===iy&&window.scrollTo(rh,ih),ho=void 0)}function _F(t){let e="add";if(t===!0){if(to++,oi!==null){clearTimeout(oi),oi=null;return}if(to>1)return}else{if(to===0||(to--,to>0))return;if(e="remove",at.is.ios===!0&&at.is.nativeMobile===!0){oi!==null&&clearTimeout(oi),oi=setTimeout(()=>{oy(e),oi=null},100);return}}oy(e)}function yF(){let t;return{preventBodyScroll(e){e!==t&&(t!==void 0||e===!0)&&(t=e,_F(e))}}}let Qa=0;const vF={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},ay={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var wF=et({name:"QDialog",inheritAttrs:!1,props:{...xd,...Ld,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:t=>t==="standard"||["top","bottom","left","right"].includes(t)}},emits:[...Od,"shake","click","escapeKey"],setup(t,{slots:e,emit:n,attrs:r}){const i=Ze(),s=Re(null),o=Re(!1),a=Re(!1);let c=null,u=null,h,f;const p=H(()=>t.persistent!==!0&&t.noRouteDismiss!==!0&&t.seamless!==!0),{preventBodyScroll:g}=yF(),{registerTimeout:w}=Fd(),{registerTick:C,removeTick:S}=Md(),{transitionProps:x,transitionStyle:k}=Vd(t,()=>ay[t.position][0],()=>ay[t.position][1]),{showPortal:O,hidePortal:D,portalIsAccessible:V,renderPortal:j}=Nd(i,s,yt,"dialog"),{hide:b}=Dd({showing:o,hideOnRouteChange:p,handleShow:G,handleHide:oe,processOnMount:!0}),{addToHistory:v,removeFromHistory:_}=pF(o,b,p),A=H(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${t.maximized===!0?"maximized":"minimized"} q-dialog__inner--${t.position} ${vF[t.position]}`+(a.value===!0?" q-dialog__inner--animating":"")+(t.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(t.fullHeight===!0?" q-dialog__inner--fullheight":"")+(t.square===!0?" q-dialog__inner--square":"")),T=H(()=>o.value===!0&&t.seamless!==!0),R=H(()=>t.autoClose===!0?{onClick:st}:{}),E=H(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${T.value===!0?"modal":"seamless"}`,r.class]);Ve(()=>t.maximized,ce=>{o.value===!0&&Je(ce)}),Ve(T,ce=>{g(ce),ce===!0?(Rw(de),Iw(he)):(Ph(de),Pl(he))});function G(ce){v(),u=t.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,Je(t.maximized),O(),a.value=!0,t.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),C(se)):S(),w(()=>{if(i.proxy.$q.platform.is.ios===!0){if(t.seamless!==!0&&document.activeElement){const{top:Ie,bottom:F}=document.activeElement.getBoundingClientRect(),{innerHeight:Z}=window,U=window.visualViewport!==void 0?window.visualViewport.height:Z;Ie>0&&F>U/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-U,F>=Z?1/0:Math.ceil(document.scrollingElement.scrollTop+F-U/2))),document.activeElement.scrollIntoView()}f=!0,s.value.click(),f=!1}O(!0),a.value=!1,n("show",ce)},t.transitionDuration)}function oe(ce){S(),_(),qe(!0),a.value=!0,D(),u!==null&&(((ce&&ce.type.indexOf("key")===0?u.closest('[tabindex]:not([tabindex^="-"])'):void 0)||u).focus(),u=null),w(()=>{D(!0),a.value=!1,n("hide",ce)},t.transitionDuration)}function se(ce){yw(()=>{let Ie=s.value;Ie===null||Ie.contains(document.activeElement)===!0||(Ie=(ce!==""?Ie.querySelector(ce):null)||Ie.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||Ie.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||Ie.querySelector("[autofocus], [data-autofocus]")||Ie,Ie.focus({preventScroll:!0}))})}function _e(ce){ce&&typeof ce.focus=="function"?ce.focus({preventScroll:!0}):se(),n("shake");const Ie=s.value;Ie!==null&&(Ie.classList.remove("q-animate--scale"),Ie.classList.add("q-animate--scale"),c!==null&&clearTimeout(c),c=setTimeout(()=>{c=null,s.value!==null&&(Ie.classList.remove("q-animate--scale"),se())},170))}function he(){t.seamless!==!0&&(t.persistent===!0||t.noEscDismiss===!0?t.maximized!==!0&&t.noShake!==!0&&_e():(n("escapeKey"),b()))}function qe(ce){c!==null&&(clearTimeout(c),c=null),(ce===!0||o.value===!0)&&(Je(!1),t.seamless!==!0&&(g(!1),Ph(de),Pl(he))),ce!==!0&&(u=null)}function Je(ce){ce===!0?h!==!0&&(Qa<1&&document.body.classList.add("q-body--dialog"),Qa++,h=!0):h===!0&&(Qa<2&&document.body.classList.remove("q-body--dialog"),Qa--,h=!1)}function st(ce){f!==!0&&(b(ce),n("click",ce))}function De(ce){t.persistent!==!0&&t.noBackdropDismiss!==!0?b(ce):t.noShake!==!0&&_e()}function de(ce){t.allowFocusOutside!==!0&&V.value===!0&&aw(s.value,ce.target)!==!0&&se('[tabindex]:not([tabindex="-1"])')}Object.assign(i.proxy,{focus:se,shake:_e,__updateRefocusTarget(ce){u=ce||null}}),Nt(qe);function yt(){return Y("div",{role:"dialog","aria-modal":T.value===!0?"true":"false",...r,class:E.value},[Y(No,{name:"q-transition--fade",appear:!0},()=>T.value===!0?Y("div",{class:"q-dialog__backdrop fixed-full",style:k.value,"aria-hidden":"true",tabindex:-1,onClick:De}):null),Y(No,x.value,()=>o.value===!0?Y("div",{ref:s,class:A.value,style:k.value,tabindex:-1,...R.value},On(e.default)):null)])}return j}});const EF={__name:"AuthDialog",props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const n=e,r=Re("SignInForm"),i=a=>r.value=a,s={SignInForm:Eu(()=>je(()=>import("./SignInForm.15dd2ee8.js"),["assets/SignInForm.15dd2ee8.js","assets/QForm.9ba2c0df.js","assets/error-message.d08c6aae.js"])),SignUpForm:Eu(()=>je(()=>import("./SignUpForm.cdc571b1.js"),["assets/SignUpForm.cdc571b1.js","assets/QForm.9ba2c0df.js","assets/validate-rules.ce7e6efc.js","assets/error-message.d08c6aae.js"])),FindPasswordForm:Eu(()=>je(()=>import("./FindPasswordForm.d70cec0f.js"),["assets/FindPasswordForm.d70cec0f.js","assets/QForm.9ba2c0df.js"]))},o=()=>{n("update:modelValue",!1)};return(a,c)=>(un(),hn(wF,{"model-value":t.modelValue,"onUpdate:modelValue":c[0]||(c[0]=u=>a.$emit("update:modelValue",u)),"transition-show":"none","transition-hide":"none",onHide:c[1]||(c[1]=u=>i("SignInForm"))},{default:nt(()=>[Ee(fF,{style:{width:"400px"}},{default:nt(()=>[Ee(ty,{class:"flex justify-end"},{default:nt(()=>[as(Ee(Yn,{icon:"close",flat:"",round:"",dense:""},null,512),[[nl]])]),_:1}),Ee(ty,{class:"q-px-xl q-pb-xl"},{default:nt(()=>[(un(),hn(FI(s[r.value]),{onChangeView:i,onCloseDialog:o},null,32))]),_:1})]),_:1})]),_:1},8,["model-value"]))}};function TF(){return zt(Fv)}const bF=["src"],IF={__name:"default",setup(t){const e=Dw(),n=GS(),r=TF(),i=H(()=>{var u;return{maxWidth:((u=n.meta)==null?void 0:u.width)||"1080px",margin:"0 auto"}}),s=Re(!1),o=()=>s.value=!0,a=async()=>{await cF(),r.notify("\uB85C\uADF8\uC544\uC6C3 \uB418\uC5C8\uC2B5\uB2C8\uB2E4.")},c=async()=>{uF(),r.notify("\uC774\uBA54\uC77C\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694")};return(u,h)=>{const f=tv("router-view");return un(),hn(QC,{view:"lHh Lpr lff",class:"bg-grey-2"},{default:nt(()=>[Ee(zC,{bordered:"",class:"bg-white text-grey-9"},{default:nt(()=>[Ee(jC,null,{default:nt(()=>[Ee(Yn,{flat:"",dense:"",to:"/"},{default:nt(()=>[Ee(iC,null,{default:nt(()=>[Ee(Rh,null,{default:nt(()=>h[1]||(h[1]=[El("img",{src:"/logo.png"},null,-1)])),_:1}),h[2]||(h[2]=io(" JM \uD074\uB7FD "))]),_:1})]),_:1}),Ee(bC),Ee(Yn,{stretch:"",flat:"",label:"Home",to:"/home"}),Ee(Yn,{stretch:"",flat:"",label:"\uAD6C\uAE00\uC740 \uB2F5\uC744 \uC54C\uACE0 \uC788\uB2E4",href:"https://google.com",target:"_blank"}),Ee(Yn,{stretch:"",flat:"",label:"\uB3C4\uC640\uC918 GPT",href:"https://chatgpt.com/",target:"_blank"}),Ee(Yn,{stretch:"",flat:"",label:"\uC720\uD29C\uBE0C",href:"https://www.youtube.com/",target:"_blank"}),Ee(AC,{vertical:"",class:"q-my-md q-mr-md"}),qt(e).isAuthenticated?am("",!0):(un(),hn(Yn,{key:0,unelevated:"",rounded:"",color:"primary",label:"\uB85C\uADF8\uC778 / \uD68C\uC6D0\uAC00\uC785",onClick:o})),qt(e).isAuthenticated?(un(),hn(Yn,{key:1,round:"",flat:""},{default:nt(()=>[Ee(Rh,null,{default:nt(()=>[El("img",{src:qt(e).user.photoURL||qt(r0)(qt(e).user.uid)},null,8,bF)]),_:1}),Ee(BC,null,{default:nt(()=>[Ee(RC,{style:{"min-width":"140px"}},{default:nt(()=>[qt(e).user.emailVerified?as((un(),hn(Fu,{key:0,clickable:"",to:"/mypage/profile"},{default:nt(()=>[Ee(Mu,null,{default:nt(()=>h[3]||(h[3]=[io("\uD504\uB85C\uD544")])),_:1})]),_:1})),[[nl]]):as((un(),hn(Fu,{key:1,clickable:"",to:"/mypage/profile"},{default:nt(()=>[Ee(Mu,{class:"text-red",onClick:c},{default:nt(()=>h[4]||(h[4]=[io("\uC774\uBA54\uC77C\uC744 \uC778\uC99D\uD574\uC8FC\uC138\uC694.")])),_:1})]),_:1})),[[nl]]),as((un(),hn(Fu,{clickable:"",onClick:a},{default:nt(()=>[Ee(Mu,null,{default:nt(()=>h[5]||(h[5]=[io("\uB85C\uADF8\uC544\uC6C3")])),_:1})]),_:1})),[[nl]])]),_:1})]),_:1})]),_:1})):am("",!0)]),_:1})]),_:1}),Ee(WC,{style:Xo(i.value)},{default:nt(()=>[Ee(f)]),_:1},8,["style"]),Ee(EF,{modelValue:s.value,"onUpdate:modelValue":h[0]||(h[0]=p=>s.value=p)},null,8,["modelValue"])]),_:1})}}},AF={admin:()=>je(()=>import("./admin.ca7a422f.js"),["assets/admin.ca7a422f.js","assets/plugin-vue_export-helper.21dcd24c.js"]),default:IF,MainLayout:()=>je(()=>import("./MainLayout.67af2424.js"),["assets/MainLayout.67af2424.js","assets/QItemLabel.f46cb4a1.js","assets/format.c860d4da.js","assets/plugin-vue_export-helper.21dcd24c.js"])};function RF(t){return t.map(e=>{var n;return{path:e.path,meta:e.meta,component:AF[((n=e.meta)==null?void 0:n.layout)||"default"],children:e.path==="/"?[e]:[{...e,path:""}]}})}var oh=function(){return QS({scrollBehavior:()=>({left:0,top:0}),history:lS("/"),extendRoutes:n=>RF(n.map(r=>(r.path.includes("admin")&&(r={...r,meta:{...r.meta,layout:"admin"}}),r)))})};async function SF(t,e){const n=t(VR);n.use(LR,e);const r=typeof xu=="function"?await xu({}):xu;n.use(r);const i=Di(typeof oh=="function"?await oh({store:r}):oh);return r.use(({store:s})=>{s.router=i}),{app:n,store:r,router:i}}let CF=0;const fl={},pl={},En={},i0={},PF=/^\s*$/,s0=[],Yf=["top-left","top-right","bottom-left","bottom-right","top","bottom","left","right","center"],kF=["top-left","top-right","bottom-left","bottom-right"],ts={positive:{icon:t=>t.iconSet.type.positive,color:"positive"},negative:{icon:t=>t.iconSet.type.negative,color:"negative"},warning:{icon:t=>t.iconSet.type.warning,color:"warning",textColor:"dark"},info:{icon:t=>t.iconSet.type.info,color:"info"},ongoing:{group:!1,timeout:0,spinner:!0,color:"grey-8"}};function o0(t,e,n){if(!t)return no("parameter required");let r;const i={textColor:"white"};if(t.ignoreDefaults!==!0&&Object.assign(i,fl),Mo(t)===!1&&(i.type&&Object.assign(i,ts[i.type]),t={message:t}),Object.assign(i,ts[t.type||i.type],t),typeof i.icon=="function"&&(i.icon=i.icon(e)),i.spinner?(i.spinner===!0&&(i.spinner=ow),i.spinner=Di(i.spinner)):i.spinner=!1,i.meta={hasMedia:Boolean(i.spinner!==!1||i.icon||i.avatar),hasText:ly(i.message)||ly(i.caption)},i.position){if(Yf.includes(i.position)===!1)return no("wrong position",t)}else i.position="bottom";if(i.timeout===void 0)i.timeout=5e3;else{const c=parseInt(i.timeout,10);if(isNaN(c)||c<0)return no("wrong timeout",t);i.timeout=c}i.timeout===0?i.progress=!1:i.progress===!0&&(i.meta.progressClass="q-notification__progress"+(i.progressClass?` ${i.progressClass}`:""),i.meta.progressStyle={animationDuration:`${i.timeout+1e3}ms`});const s=(Array.isArray(t.actions)===!0?t.actions:[]).concat(t.ignoreDefaults!==!0&&Array.isArray(fl.actions)===!0?fl.actions:[]).concat(ts[t.type]!==void 0&&Array.isArray(ts[t.type].actions)===!0?ts[t.type].actions:[]),{closeBtn:o}=i;if(o&&s.push({label:typeof o=="string"?o:e.lang.label.close}),i.actions=s.map(({handler:c,noDismiss:u,...h})=>({flat:!0,...h,onClick:typeof c=="function"?()=>{c(),u!==!0&&a()}:()=>{a()}})),i.multiLine===void 0&&(i.multiLine=i.actions.length>1),Object.assign(i.meta,{class:`q-notification row items-stretch q-notification--${i.multiLine===!0?"multi-line":"standard"}`+(i.color!==void 0?` bg-${i.color}`:"")+(i.textColor!==void 0?` text-${i.textColor}`:"")+(i.classes!==void 0?` ${i.classes}`:""),wrapperClass:"q-notification__wrapper col relative-position border-radius-inherit "+(i.multiLine===!0?"column no-wrap justify-center":"row items-center"),contentClass:"q-notification__content row items-center"+(i.multiLine===!0?"":" col"),leftClass:i.meta.hasText===!0?"additional":"single",attrs:{role:"alert",...i.attrs}}),i.group===!1?(i.group=void 0,i.meta.group=void 0):((i.group===void 0||i.group===!0)&&(i.group=[i.message,i.caption,i.multiline].concat(i.actions.map(c=>`${c.label}*${c.icon}`)).join("|")),i.meta.group=i.group+"|"+i.position),i.actions.length===0?i.actions=void 0:i.meta.actionsClass="q-notification__actions row items-center "+(i.multiLine===!0?"justify-end":"col-auto")+(i.meta.hasMedia===!0?" q-notification__actions--with-media":""),n!==void 0){n.notif.meta.timer&&(clearTimeout(n.notif.meta.timer),n.notif.meta.timer=void 0),i.meta.uid=n.notif.meta.uid;const c=En[i.position].value.indexOf(n.notif);En[i.position].value[c]=i}else{const c=pl[i.meta.group];if(c===void 0){if(i.meta.uid=CF++,i.meta.badge=1,["left","right","center"].indexOf(i.position)!==-1)En[i.position].value.splice(Math.floor(En[i.position].value.length/2),0,i);else{const u=i.position.indexOf("top")>-1?"unshift":"push";En[i.position].value[u](i)}i.group!==void 0&&(pl[i.meta.group]=i)}else{if(c.meta.timer&&(clearTimeout(c.meta.timer),c.meta.timer=void 0),i.badgePosition!==void 0){if(kF.includes(i.badgePosition)===!1)return no("wrong badgePosition",t)}else i.badgePosition=`top-${i.position.indexOf("left")>-1?"right":"left"}`;i.meta.uid=c.meta.uid,i.meta.badge=c.meta.badge+1,i.meta.badgeClass=`q-notification__badge q-notification__badge--${i.badgePosition}`+(i.badgeColor!==void 0?` bg-${i.badgeColor}`:"")+(i.badgeTextColor!==void 0?` text-${i.badgeTextColor}`:"")+(i.badgeClass?` ${i.badgeClass}`:"");const u=En[i.position].value.indexOf(c);En[i.position].value[u]=pl[i.meta.group]=i}}const a=()=>{xF(i),r=void 0};if(i.timeout>0&&(i.meta.timer=setTimeout(()=>{i.meta.timer=void 0,a()},i.timeout+1e3)),i.group!==void 0)return c=>{c!==void 0?no("trying to update a grouped one which is forbidden",t):a()};if(r={dismiss:a,config:t,notif:i},n!==void 0){Object.assign(n,r);return}return c=>{if(r!==void 0)if(c===void 0)r.dismiss();else{const u=Object.assign({},r.config,c,{group:!1,position:i.position});o0(u,e,r)}}}function xF(t){t.meta.timer&&(clearTimeout(t.meta.timer),t.meta.timer=void 0);const e=En[t.position].value.indexOf(t);if(e!==-1){t.group!==void 0&&delete pl[t.meta.group];const n=s0[""+t.meta.uid];if(n){const{width:r,height:i}=getComputedStyle(n);n.style.left=`${n.offsetLeft}px`,n.style.width=r,n.style.height=i}En[t.position].value.splice(e,1),typeof t.onDismiss=="function"&&t.onDismiss()}}function ly(t){return t!=null&&PF.test(t)!==!0}function no(t,e){return console.error(`Notify: ${t}`,e),!1}function OF(){return et({name:"QNotifications",devtools:{hide:!0},setup(){return()=>Y("div",{class:"q-notifications"},Yf.map(t=>Y(ZA,{key:t,class:i0[t],tag:"div",name:`q-notification--${t}`},()=>En[t].value.map(e=>{const n=e.meta,r=[];if(n.hasMedia===!0&&(e.spinner!==!1?r.push(Y(e.spinner,{class:"q-notification__spinner q-notification__spinner--"+n.leftClass,color:e.spinnerColor,size:e.spinnerSize})):e.icon?r.push(Y(gi,{class:"q-notification__icon q-notification__icon--"+n.leftClass,name:e.icon,color:e.iconColor,size:e.iconSize,role:"img"})):e.avatar&&r.push(Y(Rh,{class:"q-notification__avatar q-notification__avatar--"+n.leftClass},()=>Y("img",{src:e.avatar,"aria-hidden":"true"})))),n.hasText===!0){let s;const o={class:"q-notification__message col"};if(e.html===!0)o.innerHTML=e.caption?`<div>${e.message}</div><div class="q-notification__caption">${e.caption}</div>`:e.message;else{const a=[e.message];s=e.caption?[Y("div",a),Y("div",{class:"q-notification__caption"},[e.caption])]:a}r.push(Y("div",o,s))}const i=[Y("div",{class:n.contentClass},r)];return e.progress===!0&&i.push(Y("div",{key:`${n.uid}|p|${n.badge}`,class:n.progressClass,style:n.progressStyle})),e.actions!==void 0&&i.push(Y("div",{class:n.actionsClass},e.actions.map(s=>Y(Yn,s)))),n.badge>1&&i.push(Y("div",{key:`${n.uid}|${n.badge}`,class:e.meta.badgeClass,style:e.badgeStyle},[n.badge])),Y("div",{ref:s=>{s0[""+n.uid]=s},key:n.uid,class:n.class,...n.attrs},[Y("div",{class:n.wrapperClass},i)])}))))}})}var DF={setDefaults(t){Mo(t)===!0&&Object.assign(fl,t)},registerType(t,e){Mo(e)===!0&&(ts[t]=e)},install({$q:t,parentApp:e}){if(t.notify=this.create=n=>o0(n,t),t.notify.setDefaults=this.setDefaults,t.notify.registerType=this.registerType,t.config.notify!==void 0&&this.setDefaults(t.config.notify),this.__installed!==!0){Yf.forEach(r=>{En[r]=Re([]);const i=["left","center","right"].includes(r)===!0?"center":r.indexOf("top")>-1?"top":"bottom",s=r.indexOf("left")>-1?"start":r.indexOf("right")>-1?"end":"center",o=["left","right"].includes(r)?`items-${r==="left"?"start":"end"} justify-center`:r==="center"?"flex-center":`items-${s}`;i0[r]=`q-notifications__list q-notifications__list--${i} fixed column no-wrap ${o}`});const n=vw("q-notify");OR(OF(),e).mount(n)}}},NF={config:{notify:{position:"top"}},plugins:{Notify:DF}};const LF="/";async function VF({app:t,router:e,store:n},r){let i=!1;const s=c=>{try{return e.resolve(c).href}catch{}return Object(c)===c?null:c},o=c=>{if(i=!0,typeof c=="string"&&/^https?:\/\//.test(c)){window.location.href=c;return}const u=s(c);u!==null&&(window.location.href=u)},a=window.location.href.replace(window.location.origin,"");for(let c=0;i===!1&&c<r.length;c++)try{await r[c]({app:t,router:e,store:n,ssrContext:null,redirect:o,urlPath:a,publicPath:LF})}catch(u){if(u&&u.url){o(u.url);return}console.error("[Quasar] boot error:",u);return}i!==!0&&(t.use(e),t.mount("#q-app"))}SF(xv,NF).then(t=>{const[e,n]=Promise.allSettled!==void 0?["allSettled",r=>r.map(i=>{if(i.status==="rejected"){console.error("[Quasar] boot error:",i.reason);return}return i.value.default})]:["all",r=>r.map(i=>i.default)];return Promise[e]([je(()=>Promise.resolve().then(function(){return aF}),void 0),je(()=>import("./error-handler.8da840d3.js"),["assets/error-handler.8da840d3.js","assets/error-message.d08c6aae.js"]),je(()=>import("./navigation-guards.4c61ee54.js"),[]),je(()=>import("./algoliasearch.d6452f1f.js"),[])]).then(r=>{const i=n(r).filter(s=>typeof s=="function");VF(t,i)})});export{on as $,bi as A,WF as B,Vo as C,KF as D,Lo as E,Gt as F,Nv as G,Dv as H,Al as I,Tn as J,Ch as K,et as L,xd as M,DF as N,ks as O,Od as P,xs as Q,Fd as R,zt as S,us as T,Cd as U,Re as V,H as W,Dd as X,pF as Y,Ve as Z,sr as _,io as a,dU as a$,Nt as a0,as as a1,YS as a2,On as a3,Ze as a4,yF as a5,uc as a6,Mu as a7,gi as a8,Fu as a9,ku as aA,Md as aB,cs as aC,Ed as aD,xI as aE,xh as aF,bC as aG,fF as aH,Vy as aI,rU as aJ,Rh as aK,ty as aL,zF as aM,nl as aN,AC as aO,wF as aP,Qe as aQ,kR as aR,hU as aS,If as aT,Qf as aU,aU as aV,lU as aW,uU as aX,cU as aY,oU as aZ,sU as a_,QC as aa,jC as ab,Yn as ac,iC as ad,zC as ae,RC as af,WC as ag,bn as ah,$u as ai,tU as aj,ns as ak,Oh as al,YC as am,eP as an,ra as ao,nU as ap,lP as aq,XC as ar,qt as as,GS as at,ZF as au,QF as av,lw as aw,Ii as ax,IR as ay,rs as az,JF as b,_b as b0,gU as b1,mU as b2,pU as b3,_U as b4,fU as b5,CU as b6,wU as b7,yU as b8,vU as b9,wn as bA,YF as bB,xm as bC,bU as bD,EU as bE,TU as bF,IU as bG,dF as ba,sF as bb,_R as bc,DI as bd,NI as be,Zy as bf,BC as bg,TF as bh,GF as bi,gc as bj,yw as bk,or as bl,eU as bm,ow as bn,No as bo,hw as bp,cc as bq,PU as br,uC as bs,hC as bt,qF as bu,Di as bv,mI as bw,AU as bx,RU as by,SU as bz,El as c,BF as d,am as e,FF as f,tv as g,Y as h,hn as i,Ee as j,jF as k,MF as l,_A as m,oc as n,un as o,UF as p,nt as q,$F as r,XF as s,z0 as t,Dw as u,CA as v,HF as w,yA as x,ew as y,at as z};
