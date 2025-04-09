const M0=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),Gp={},F0="/",Le=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${F0}${r}`,r in Gp)return;Gp[r]=!0;const i=r.endsWith(".css"),s=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${s}`))return;const o=document.createElement("link");if(o.rel=i?"stylesheet":M0,i||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),i)return new Promise((a,c)=>{o.addEventListener("load",a),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function hd(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const He={},is=[],An=()=>{},U0=()=>!1,ac=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),dd=t=>t.startsWith("onUpdate:"),lt=Object.assign,fd=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},$0=Object.prototype.hasOwnProperty,Ve=(t,e)=>$0.call(t,e),ge=Array.isArray,ss=t=>lc(t)==="[object Map]",mv=t=>lc(t)==="[object Set]",ye=t=>typeof t=="function",Je=t=>typeof t=="string",hr=t=>typeof t=="symbol",Ke=t=>t!==null&&typeof t=="object",gv=t=>(Ke(t)||ye(t))&&ye(t.then)&&ye(t.catch),_v=Object.prototype.toString,lc=t=>_v.call(t),q0=t=>lc(t).slice(8,-1),vv=t=>lc(t)==="[object Object]",pd=t=>Je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,po=hd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),cc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},B0=/-(\w)/g,mn=cc(t=>t.replace(B0,(e,n)=>n?n.toUpperCase():"")),j0=/\B([A-Z])/g,Kr=cc(t=>t.replace(j0,"-$1").toLowerCase()),uc=cc(t=>t.charAt(0).toUpperCase()+t.slice(1)),vu=cc(t=>t?`on${uc(t)}`:""),Nr=(t,e)=>!Object.is(t,e),yu=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},yv=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},H0=t=>{const e=parseFloat(t);return isNaN(e)?t:e},z0=t=>{const e=Je(t)?Number(t):NaN;return isNaN(e)?t:e};let Qp;const Zo=()=>Qp||(Qp=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});function ea(t){if(ge(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=Je(r)?Q0(r):ea(r);if(i)for(const s in i)e[s]=i[s]}return e}else if(Je(t)||Ke(t))return t}const W0=/;(?![^(]*\))/g,K0=/:([^]+)/,G0=/\/\*[^]*?\*\//g;function Q0(t){const e={};return t.replace(G0,"").split(W0).forEach(n=>{if(n){const r=n.split(K0);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function hc(t){let e="";if(Je(t))e=t;else if(ge(t))for(let n=0;n<t.length;n++){const r=hc(t[n]);r&&(e+=r+" ")}else if(Ke(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function JF(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Je(e)&&(t.class=hc(e)),n&&(t.style=ea(n)),t}const J0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Y0=hd(J0);function wv(t){return!!t||t===""}const Ev=t=>!!(t&&t.__v_isRef===!0),X0=t=>Je(t)?t:t==null?"":ge(t)||Ke(t)&&(t.toString===_v||!ye(t.toString))?Ev(t)?X0(t.value):JSON.stringify(t,Tv,2):String(t),Tv=(t,e)=>Ev(e)?Tv(t,e.value):ss(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i],s)=>(n[wu(r,s)+" =>"]=i,n),{})}:mv(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>wu(n))}:hr(e)?wu(e):Ke(e)&&!ge(e)&&!vv(e)?String(e):e,wu=(t,e="")=>{var n;return hr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $t;class bv{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=$t,!e&&$t&&(this.index=($t.scopes||($t.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=$t;try{return $t=this,e()}finally{$t=n}}}on(){$t=this}off(){$t=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Iv(t){return new bv(t)}function md(){return $t}function Av(t,e=!1){$t&&$t.cleanups.push(t)}let ze;const Eu=new WeakSet;class Rv{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,$t&&$t.active&&$t.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Eu.has(this)&&(Eu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Cv(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Jp(this),Pv(this);const e=ze,n=Rn;ze=this,Rn=!0;try{return this.fn()}finally{kv(this),ze=e,Rn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)vd(e);this.deps=this.depsTail=void 0,Jp(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Eu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){hh(this)&&this.run()}get dirty(){return hh(this)}}let Sv=0,mo,go;function Cv(t,e=!1){if(t.flags|=8,e){t.next=go,go=t;return}t.next=mo,mo=t}function gd(){Sv++}function _d(){if(--Sv>0)return;if(go){let e=go;for(go=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;mo;){let e=mo;for(mo=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Pv(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function kv(t){let e,n=t.depsTail,r=n;for(;r;){const i=r.prevDep;r.version===-1?(r===n&&(n=i),vd(r),Z0(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}t.deps=e,t.depsTail=n}function hh(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(xv(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function xv(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ko))return;t.globalVersion=ko;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!hh(t)){t.flags&=-3;return}const n=ze,r=Rn;ze=t,Rn=!0;try{Pv(t);const i=t.fn(t._value);(e.version===0||Nr(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{ze=n,Rn=r,kv(t),t.flags&=-3}}function vd(t,e=!1){const{dep:n,prevSub:r,nextSub:i}=t;if(r&&(r.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)vd(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Z0(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Rn=!0;const Ov=[];function Gr(){Ov.push(Rn),Rn=!1}function Qr(){const t=Ov.pop();Rn=t===void 0?!0:t}function Jp(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ze;ze=void 0;try{e()}finally{ze=n}}}let ko=0;class eI{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class dc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ze||!Rn||ze===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ze)n=this.activeLink=new eI(ze,this),ze.deps?(n.prevDep=ze.depsTail,ze.depsTail.nextDep=n,ze.depsTail=n):ze.deps=ze.depsTail=n,Dv(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ze.depsTail,n.nextDep=void 0,ze.depsTail.nextDep=n,ze.depsTail=n,ze.deps===n&&(ze.deps=r)}return n}trigger(e){this.version++,ko++,this.notify(e)}notify(e){gd();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{_d()}}}function Dv(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Dv(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const yl=new WeakMap,mi=Symbol(""),dh=Symbol(""),xo=Symbol("");function Ot(t,e,n){if(Rn&&ze){let r=yl.get(t);r||yl.set(t,r=new Map);let i=r.get(n);i||(r.set(n,i=new dc),i.map=r,i.key=n),i.track()}}function Xn(t,e,n,r,i,s){const o=yl.get(t);if(!o){ko++;return}const a=c=>{c&&c.trigger()};if(gd(),e==="clear")o.forEach(a);else{const c=ge(t),u=c&&pd(n);if(c&&n==="length"){const h=Number(r);o.forEach((f,p)=>{(p==="length"||p===xo||!hr(p)&&p>=h)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(xo)),e){case"add":c?u&&a(o.get("length")):(a(o.get(mi)),ss(t)&&a(o.get(dh)));break;case"delete":c||(a(o.get(mi)),ss(t)&&a(o.get(dh)));break;case"set":ss(t)&&a(o.get(mi));break}}_d()}function tI(t,e){const n=yl.get(t);return n&&n.get(e)}function Hi(t){const e=Pe(t);return e===t?e:(Ot(e,"iterate",xo),fn(t)?e:e.map(Dt))}function fc(t){return Ot(t=Pe(t),"iterate",xo),t}const nI={__proto__:null,[Symbol.iterator](){return Tu(this,Symbol.iterator,Dt)},concat(...t){return Hi(this).concat(...t.map(e=>ge(e)?Hi(e):e))},entries(){return Tu(this,"entries",t=>(t[1]=Dt(t[1]),t))},every(t,e){return Qn(this,"every",t,e,void 0,arguments)},filter(t,e){return Qn(this,"filter",t,e,n=>n.map(Dt),arguments)},find(t,e){return Qn(this,"find",t,e,Dt,arguments)},findIndex(t,e){return Qn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Qn(this,"findLast",t,e,Dt,arguments)},findLastIndex(t,e){return Qn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Qn(this,"forEach",t,e,void 0,arguments)},includes(...t){return bu(this,"includes",t)},indexOf(...t){return bu(this,"indexOf",t)},join(t){return Hi(this).join(t)},lastIndexOf(...t){return bu(this,"lastIndexOf",t)},map(t,e){return Qn(this,"map",t,e,void 0,arguments)},pop(){return Ys(this,"pop")},push(...t){return Ys(this,"push",t)},reduce(t,...e){return Yp(this,"reduce",t,e)},reduceRight(t,...e){return Yp(this,"reduceRight",t,e)},shift(){return Ys(this,"shift")},some(t,e){return Qn(this,"some",t,e,void 0,arguments)},splice(...t){return Ys(this,"splice",t)},toReversed(){return Hi(this).toReversed()},toSorted(t){return Hi(this).toSorted(t)},toSpliced(...t){return Hi(this).toSpliced(...t)},unshift(...t){return Ys(this,"unshift",t)},values(){return Tu(this,"values",Dt)}};function Tu(t,e,n){const r=fc(t),i=r[e]();return r!==t&&!fn(t)&&(i._next=i.next,i.next=()=>{const s=i._next();return s.value&&(s.value=n(s.value)),s}),i}const rI=Array.prototype;function Qn(t,e,n,r,i,s){const o=fc(t),a=o!==t&&!fn(t),c=o[e];if(c!==rI[e]){const f=c.apply(t,s);return a?Dt(f):f}let u=n;o!==t&&(a?u=function(f,p){return n.call(this,Dt(f),p,t)}:n.length>2&&(u=function(f,p){return n.call(this,f,p,t)}));const h=c.call(o,u,r);return a&&i?i(h):h}function Yp(t,e,n,r){const i=fc(t);let s=n;return i!==t&&(fn(t)?n.length>3&&(s=function(o,a,c){return n.call(this,o,a,c,t)}):s=function(o,a,c){return n.call(this,o,Dt(a),c,t)}),i[e](s,...r)}function bu(t,e,n){const r=Pe(t);Ot(r,"iterate",xo);const i=r[e](...n);return(i===-1||i===!1)&&Ed(n[0])?(n[0]=Pe(n[0]),r[e](...n)):i}function Ys(t,e,n=[]){Gr(),gd();const r=Pe(t)[e].apply(t,n);return _d(),Qr(),r}const iI=hd("__proto__,__v_isRef,__isVue"),Nv=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(hr));function sI(t){hr(t)||(t=String(t));const e=Pe(this);return Ot(e,"has",t),e.hasOwnProperty(t)}class Lv{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(i?s?mI:Uv:s?Fv:Mv).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ge(e);if(!i){let c;if(o&&(c=nI[n]))return c;if(n==="hasOwnProperty")return sI}const a=Reflect.get(e,n,Qe(e)?e:r);return(hr(n)?Nv.has(n):iI(n))||(i||Ot(e,"get",n),s)?a:Qe(a)?o&&pd(n)?a:a.value:Ke(a)?i?pc(a):dn(a):a}}class Vv extends Lv{constructor(e=!1){super(!1,e)}set(e,n,r,i){let s=e[n];if(!this._isShallow){const c=Ti(s);if(!fn(r)&&!Ti(r)&&(s=Pe(s),r=Pe(r)),!ge(e)&&Qe(s)&&!Qe(r))return c?!1:(s.value=r,!0)}const o=ge(e)&&pd(n)?Number(n)<e.length:Ve(e,n),a=Reflect.set(e,n,r,Qe(e)?e:i);return e===Pe(i)&&(o?Nr(r,s)&&Xn(e,"set",n,r):Xn(e,"add",n,r)),a}deleteProperty(e,n){const r=Ve(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&r&&Xn(e,"delete",n,void 0),i}has(e,n){const r=Reflect.has(e,n);return(!hr(n)||!Nv.has(n))&&Ot(e,"has",n),r}ownKeys(e){return Ot(e,"iterate",ge(e)?"length":mi),Reflect.ownKeys(e)}}class oI extends Lv{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const aI=new Vv,lI=new oI,cI=new Vv(!0);const fh=t=>t,La=t=>Reflect.getPrototypeOf(t);function uI(t,e,n){return function(...r){const i=this.__v_raw,s=Pe(i),o=ss(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=i[t](...r),h=n?fh:e?ph:Dt;return!e&&Ot(s,"iterate",c?dh:mi),{next(){const{value:f,done:p}=u.next();return p?{value:f,done:p}:{value:a?[h(f[0]),h(f[1])]:h(f),done:p}},[Symbol.iterator](){return this}}}}function Va(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function hI(t,e){const n={get(i){const s=this.__v_raw,o=Pe(s),a=Pe(i);t||(Nr(i,a)&&Ot(o,"get",i),Ot(o,"get",a));const{has:c}=La(o),u=e?fh:t?ph:Dt;if(c.call(o,i))return u(s.get(i));if(c.call(o,a))return u(s.get(a));s!==o&&s.get(i)},get size(){const i=this.__v_raw;return!t&&Ot(Pe(i),"iterate",mi),Reflect.get(i,"size",i)},has(i){const s=this.__v_raw,o=Pe(s),a=Pe(i);return t||(Nr(i,a)&&Ot(o,"has",i),Ot(o,"has",a)),i===a?s.has(i):s.has(i)||s.has(a)},forEach(i,s){const o=this,a=o.__v_raw,c=Pe(a),u=e?fh:t?ph:Dt;return!t&&Ot(c,"iterate",mi),a.forEach((h,f)=>i.call(s,u(h),u(f),o))}};return lt(n,t?{add:Va("add"),set:Va("set"),delete:Va("delete"),clear:Va("clear")}:{add(i){!e&&!fn(i)&&!Ti(i)&&(i=Pe(i));const s=Pe(this);return La(s).has.call(s,i)||(s.add(i),Xn(s,"add",i,i)),this},set(i,s){!e&&!fn(s)&&!Ti(s)&&(s=Pe(s));const o=Pe(this),{has:a,get:c}=La(o);let u=a.call(o,i);u||(i=Pe(i),u=a.call(o,i));const h=c.call(o,i);return o.set(i,s),u?Nr(s,h)&&Xn(o,"set",i,s):Xn(o,"add",i,s),this},delete(i){const s=Pe(this),{has:o,get:a}=La(s);let c=o.call(s,i);c||(i=Pe(i),c=o.call(s,i)),a&&a.call(s,i);const u=s.delete(i);return c&&Xn(s,"delete",i,void 0),u},clear(){const i=Pe(this),s=i.size!==0,o=i.clear();return s&&Xn(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=uI(i,t,e)}),n}function yd(t,e){const n=hI(t,e);return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(Ve(n,i)&&i in r?n:r,i,s)}const dI={get:yd(!1,!1)},fI={get:yd(!1,!0)},pI={get:yd(!0,!1)};const Mv=new WeakMap,Fv=new WeakMap,Uv=new WeakMap,mI=new WeakMap;function gI(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _I(t){return t.__v_skip||!Object.isExtensible(t)?0:gI(q0(t))}function dn(t){return Ti(t)?t:wd(t,!1,aI,dI,Mv)}function vI(t){return wd(t,!1,cI,fI,Fv)}function pc(t){return wd(t,!0,lI,pI,Uv)}function wd(t,e,n,r,i){if(!Ke(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=_I(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function ir(t){return Ti(t)?ir(t.__v_raw):!!(t&&t.__v_isReactive)}function Ti(t){return!!(t&&t.__v_isReadonly)}function fn(t){return!!(t&&t.__v_isShallow)}function Ed(t){return t?!!t.__v_raw:!1}function Pe(t){const e=t&&t.__v_raw;return e?Pe(e):t}function Di(t){return!Ve(t,"__v_skip")&&Object.isExtensible(t)&&yv(t,"__v_skip",!0),t}const Dt=t=>Ke(t)?dn(t):t,ph=t=>Ke(t)?pc(t):t;function Qe(t){return t?t.__v_isRef===!0:!1}function Te(t){return $v(t,!1)}function ns(t){return $v(t,!0)}function $v(t,e){return Qe(t)?t:new yI(t,e)}class yI{constructor(e,n){this.dep=new dc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Pe(e),this._value=n?e:Dt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||fn(e)||Ti(e);e=r?e:Pe(e),Nr(e,n)&&(this._rawValue=e,this._value=r?e:Dt(e),this.dep.trigger())}}function qt(t){return Qe(t)?t.value:t}function bn(t){return ye(t)?t():qt(t)}const wI={get:(t,e,n)=>e==="__v_raw"?t:qt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Qe(i)&&!Qe(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function qv(t){return ir(t)?t:new Proxy(t,wI)}class EI{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new dc,{get:r,set:i}=e(n.track.bind(n),n.trigger.bind(n));this._get=r,this._set=i}get value(){return this._value=this._get()}set value(e){this._set(e)}}function TI(t){return new EI(t)}function bI(t){const e=ge(t)?new Array(t.length):{};for(const n in t)e[n]=jv(t,n);return e}class II{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return tI(Pe(this._object),this._key)}}class AI{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Bv(t,e,n){return Qe(t)?t:ye(t)?new AI(t):Ke(t)&&arguments.length>1?jv(t,e,n):Te(t)}function jv(t,e,n){const r=t[e];return Qe(r)?r:new II(t,e,n)}class RI{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new dc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ko-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ze!==this)return Cv(this,!0),!0}get value(){const e=this.dep.track();return xv(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function SI(t,e,n=!1){let r,i;return ye(t)?r=t:(r=t.get,i=t.set),new RI(r,i,n)}const Ma={},wl=new WeakMap;let ai;function CI(t,e=!1,n=ai){if(n){let r=wl.get(n);r||wl.set(n,r=[]),r.push(t)}}function PI(t,e,n=He){const{immediate:r,deep:i,once:s,scheduler:o,augmentJob:a,call:c}=n,u=D=>i?D:fn(D)||i===!1||i===0?Zn(D,1):Zn(D);let h,f,p,g,w=!1,C=!1;if(Qe(t)?(f=()=>t.value,w=fn(t)):ir(t)?(f=()=>u(t),w=!0):ge(t)?(C=!0,w=t.some(D=>ir(D)||fn(D)),f=()=>t.map(D=>{if(Qe(D))return D.value;if(ir(D))return u(D);if(ye(D))return c?c(D,2):D()})):ye(t)?e?f=c?()=>c(t,2):t:f=()=>{if(p){Gr();try{p()}finally{Qr()}}const D=ai;ai=h;try{return c?c(t,3,[g]):t(g)}finally{ai=D}}:f=An,e&&i){const D=f,V=i===!0?1/0:i;f=()=>Zn(D(),V)}const A=md(),x=()=>{h.stop(),A&&A.active&&fd(A.effects,h)};if(s&&e){const D=e;e=(...V)=>{D(...V),x()}}let k=C?new Array(t.length).fill(Ma):Ma;const O=D=>{if(!(!(h.flags&1)||!h.dirty&&!D))if(e){const V=h.run();if(i||w||(C?V.some((H,b)=>Nr(H,k[b])):Nr(V,k))){p&&p();const H=ai;ai=h;try{const b=[V,k===Ma?void 0:C&&k[0]===Ma?[]:k,g];c?c(e,3,b):e(...b),k=V}finally{ai=H}}}else h.run()};return a&&a(O),h=new Rv(f),h.scheduler=o?()=>o(O,!1):O,g=D=>CI(D,!1,h),p=h.onStop=()=>{const D=wl.get(h);if(D){if(c)c(D,4);else for(const V of D)V();wl.delete(h)}},e?r?O(!0):k=h.run():o?o(O.bind(null,!0),!0):h.run(),x.pause=h.pause.bind(h),x.resume=h.resume.bind(h),x.stop=x,x}function Zn(t,e=1/0,n){if(e<=0||!Ke(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Qe(t))Zn(t.value,e,n);else if(ge(t))for(let r=0;r<t.length;r++)Zn(t[r],e,n);else if(mv(t)||ss(t))t.forEach(r=>{Zn(r,e,n)});else if(vv(t)){for(const r in t)Zn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Zn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ta(t,e,n,r){try{return r?t(...r):t()}catch(i){na(i,e,n)}}function Cn(t,e,n,r){if(ye(t)){const i=ta(t,e,n,r);return i&&gv(i)&&i.catch(s=>{na(s,e,n)}),i}if(ge(t)){const i=[];for(let s=0;s<t.length;s++)i.push(Cn(t[s],e,n,r));return i}}function na(t,e,n,r=!0){const i=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||He;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const h=a.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](t,c,u)===!1)return}a=a.parent}if(s){Gr(),ta(s,null,10,[t,c,u]),Qr();return}}kI(t,n,i,r,o)}function kI(t,e,n,r=!0,i=!1){if(i)throw t;console.error(t)}const Bt=[];let Mn=-1;const os=[];let Ar=null,Qi=0;const Hv=Promise.resolve();let El=null;function on(t){const e=El||Hv;return t?e.then(this?t.bind(this):t):e}function xI(t){let e=Mn+1,n=Bt.length;for(;e<n;){const r=e+n>>>1,i=Bt[r],s=Oo(i);s<t||s===t&&i.flags&2?e=r+1:n=r}return e}function Td(t){if(!(t.flags&1)){const e=Oo(t),n=Bt[Bt.length-1];!n||!(t.flags&2)&&e>=Oo(n)?Bt.push(t):Bt.splice(xI(e),0,t),t.flags|=1,zv()}}function zv(){El||(El=Hv.then(Kv))}function OI(t){ge(t)?os.push(...t):Ar&&t.id===-1?Ar.splice(Qi+1,0,t):t.flags&1||(os.push(t),t.flags|=1),zv()}function Xp(t,e,n=Mn+1){for(;n<Bt.length;n++){const r=Bt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Bt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Wv(t){if(os.length){const e=[...new Set(os)].sort((n,r)=>Oo(n)-Oo(r));if(os.length=0,Ar){Ar.push(...e);return}for(Ar=e,Qi=0;Qi<Ar.length;Qi++){const n=Ar[Qi];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ar=null,Qi=0}}const Oo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Kv(t){const e=An;try{for(Mn=0;Mn<Bt.length;Mn++){const n=Bt[Mn];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),ta(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;Mn<Bt.length;Mn++){const n=Bt[Mn];n&&(n.flags&=-2)}Mn=-1,Bt.length=0,Wv(),El=null,(Bt.length||os.length)&&Kv()}}let mt=null,Gv=null;function Tl(t){const e=mt;return mt=t,Gv=t&&t.type.__scopeId||null,e}function nt(t,e=mt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&dm(-1);const s=Tl(e);let o;try{o=t(...i)}finally{Tl(s),r._d&&dm(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function as(t,e){if(mt===null)return t;const n=wc(mt),r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[s,o,a,c=He]=e[i];s&&(ye(s)&&(s={mounted:s,updated:s}),s.deep&&Zn(o),r.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function ri(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(Gr(),Cn(c,n,8,[t.el,a,t,e]),Qr())}}const Qv=Symbol("_vte"),Jv=t=>t.__isTeleport,_o=t=>t&&(t.disabled||t.disabled===""),Zp=t=>t&&(t.defer||t.defer===""),em=t=>typeof SVGElement!="undefined"&&t instanceof SVGElement,tm=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,mh=(t,e)=>{const n=t&&t.to;return Je(n)?e?e(n):null:n},Yv={name:"Teleport",__isTeleport:!0,process(t,e,n,r,i,s,o,a,c,u){const{mc:h,pc:f,pbc:p,o:{insert:g,querySelector:w,createText:C,createComment:A}}=u,x=_o(e.props);let{shapeFlag:k,children:O,dynamicChildren:D}=e;if(t==null){const V=e.el=C(""),H=e.anchor=C("");g(V,n,r),g(H,n,r);const b=(_,R)=>{k&16&&(i&&i.isCE&&(i.ce._teleportTarget=_),h(O,_,R,i,s,o,a,c))},y=()=>{const _=e.target=mh(e.props,w),R=Xv(_,e,C,g);_&&(o!=="svg"&&em(_)?o="svg":o!=="mathml"&&tm(_)&&(o="mathml"),x||(b(_,R),el(e,!1)))};x&&(b(n,H),el(e,!0)),Zp(e.props)?Ut(()=>{y(),e.el.__isMounted=!0},s):y()}else{if(Zp(e.props)&&!t.el.__isMounted){Ut(()=>{Yv.process(t,e,n,r,i,s,o,a,c,u),delete t.el.__isMounted},s);return}e.el=t.el,e.targetStart=t.targetStart;const V=e.anchor=t.anchor,H=e.target=t.target,b=e.targetAnchor=t.targetAnchor,y=_o(t.props),_=y?n:H,R=y?V:b;if(o==="svg"||em(H)?o="svg":(o==="mathml"||tm(H))&&(o="mathml"),D?(p(t.dynamicChildren,D,_,i,s,o,a),Pd(t,e,!0)):c||f(t,e,_,R,i,s,o,a,!1),x)y?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Fa(e,n,V,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const T=e.target=mh(e.props,w);T&&Fa(e,T,null,u,0)}else y&&Fa(e,H,b,u,1);el(e,x)}},remove(t,e,n,{um:r,o:{remove:i}},s){const{shapeFlag:o,children:a,anchor:c,targetStart:u,targetAnchor:h,target:f,props:p}=t;if(f&&(i(u),i(h)),s&&i(c),o&16){const g=s||!_o(p);for(let w=0;w<a.length;w++){const C=a[w];r(C,e,n,g,!!C.dynamicChildren)}}},move:Fa,hydrate:DI};function Fa(t,e,n,{o:{insert:r},m:i},s=2){s===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:u,props:h}=t,f=s===2;if(f&&r(o,e,n),(!f||_o(h))&&c&16)for(let p=0;p<u.length;p++)i(u[p],e,n,2);f&&r(a,e,n)}function DI(t,e,n,r,i,s,{o:{nextSibling:o,parentNode:a,querySelector:c,insert:u,createText:h}},f){const p=e.target=mh(e.props,c);if(p){const g=_o(e.props),w=p._lpa||p.firstChild;if(e.shapeFlag&16)if(g)e.anchor=f(o(t),e,a(t),n,r,i,s),e.targetStart=w,e.targetAnchor=w&&o(w);else{e.anchor=o(t);let C=w;for(;C;){if(C&&C.nodeType===8){if(C.data==="teleport start anchor")e.targetStart=C;else if(C.data==="teleport anchor"){e.targetAnchor=C,p._lpa=e.targetAnchor&&o(e.targetAnchor);break}}C=o(C)}e.targetAnchor||Xv(p,e,h,u),f(w&&o(w),e,p,n,r,i,s)}el(e,g)}return e.anchor&&o(e.anchor)}const NI=Yv;function el(t,e){const n=t.ctx;if(n&&n.ut){let r,i;for(e?(r=t.el,i=t.anchor):(r=t.targetStart,i=t.targetAnchor);r&&r!==i;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function Xv(t,e,n,r){const i=e.targetStart=n(""),s=e.targetAnchor=n("");return i[Qv]=s,t&&(r(i,t),r(s,t)),s}const Rr=Symbol("_leaveCb"),Ua=Symbol("_enterCb");function Zv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return zn(()=>{t.isMounted=!0}),It(()=>{t.isUnmounting=!0}),t}const ln=[Function,Array],ey={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ln,onEnter:ln,onAfterEnter:ln,onEnterCancelled:ln,onBeforeLeave:ln,onLeave:ln,onAfterLeave:ln,onLeaveCancelled:ln,onBeforeAppear:ln,onAppear:ln,onAfterAppear:ln,onAppearCancelled:ln},ty=t=>{const e=t.subTree;return e.component?ty(e.component):e},LI={name:"BaseTransition",props:ey,setup(t,{slots:e}){const n=Ye(),r=Zv();return()=>{const i=e.default&&bd(e.default(),!0);if(!i||!i.length)return;const s=ny(i),o=Pe(t),{mode:a}=o;if(r.isLeaving)return Iu(s);const c=nm(s);if(!c)return Iu(s);let u=Do(c,o,r,n,f=>u=f);c.type!==jt&&bi(c,u);let h=n.subTree&&nm(n.subTree);if(h&&h.type!==jt&&!ci(c,h)&&ty(n).type!==jt){let f=Do(h,o,r,n);if(bi(h,f),a==="out-in"&&c.type!==jt)return r.isLeaving=!0,f.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,h=void 0},Iu(s);a==="in-out"&&c.type!==jt?f.delayLeave=(p,g,w)=>{const C=ry(r,h);C[String(h.key)]=h,p[Rr]=()=>{g(),p[Rr]=void 0,delete u.delayedLeave,h=void 0},u.delayedLeave=()=>{w(),delete u.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return s}}};function ny(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==jt){e=n;break}}return e}const VI=LI;function ry(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Do(t,e,n,r,i){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:h,onEnterCancelled:f,onBeforeLeave:p,onLeave:g,onAfterLeave:w,onLeaveCancelled:C,onBeforeAppear:A,onAppear:x,onAfterAppear:k,onAppearCancelled:O}=e,D=String(t.key),V=ry(n,t),H=(_,R)=>{_&&Cn(_,r,9,R)},b=(_,R)=>{const T=R[1];H(_,R),ge(_)?_.every(S=>S.length<=1)&&T():_.length<=1&&T()},y={mode:o,persisted:a,beforeEnter(_){let R=c;if(!n.isMounted)if(s)R=A||c;else return;_[Rr]&&_[Rr](!0);const T=V[D];T&&ci(t,T)&&T.el[Rr]&&T.el[Rr](),H(R,[_])},enter(_){let R=u,T=h,S=f;if(!n.isMounted)if(s)R=x||u,T=k||h,S=O||f;else return;let E=!1;const G=_[Ua]=oe=>{E||(E=!0,oe?H(S,[_]):H(T,[_]),y.delayedLeave&&y.delayedLeave(),_[Ua]=void 0)};R?b(R,[_,G]):G()},leave(_,R){const T=String(t.key);if(_[Ua]&&_[Ua](!0),n.isUnmounting)return R();H(p,[_]);let S=!1;const E=_[Rr]=G=>{S||(S=!0,R(),G?H(C,[_]):H(w,[_]),_[Rr]=void 0,V[T]===t&&delete V[T])};V[T]=t,g?b(g,[_,E]):E()},clone(_){const R=Do(_,e,n,r,i);return i&&i(R),R}};return y}function Iu(t){if(ra(t))return t=Ur(t),t.children=null,t}function nm(t){if(!ra(t))return Jv(t.type)&&t.children?ny(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ye(n.default))return n.default()}}function bi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,bi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function bd(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Gt?(o.patchFlag&128&&i++,r=r.concat(bd(o.children,e,a))):(e||o.type!==jt)&&r.push(a!=null?Ur(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function mc(t,e){return ye(t)?(()=>lt({name:t.name},e,{setup:t}))():t}function Id(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function bl(t,e,n,r,i=!1){if(ge(t)){t.forEach((w,C)=>bl(w,e&&(ge(e)?e[C]:e),n,r,i));return}if(ls(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&bl(t,e,n,r.component.subTree);return}const s=r.shapeFlag&4?wc(r.component):r.el,o=i?null:s,{i:a,r:c}=t,u=e&&e.r,h=a.refs===He?a.refs={}:a.refs,f=a.setupState,p=Pe(f),g=f===He?()=>!1:w=>Ve(p,w);if(u!=null&&u!==c&&(Je(u)?(h[u]=null,g(u)&&(f[u]=null)):Qe(u)&&(u.value=null)),ye(c))ta(c,a,12,[o,h]);else{const w=Je(c),C=Qe(c);if(w||C){const A=()=>{if(t.f){const x=w?g(c)?f[c]:h[c]:c.value;i?ge(x)&&fd(x,s):ge(x)?x.includes(s)||x.push(s):w?(h[c]=[s],g(c)&&(f[c]=h[c])):(c.value=[s],t.k&&(h[t.k]=c.value))}else w?(h[c]=o,g(c)&&(f[c]=o)):C&&(c.value=o,t.k&&(h[t.k]=o))};o?(A.id=-1,Ut(A,n)):A()}}}const rm=t=>t.nodeType===8;Zo().requestIdleCallback;Zo().cancelIdleCallback;function MI(t,e){if(rm(t)&&t.data==="["){let n=1,r=t.nextSibling;for(;r;){if(r.nodeType===1){if(e(r)===!1)break}else if(rm(r))if(r.data==="]"){if(--n===0)break}else r.data==="["&&n++;r=r.nextSibling}}else e(t)}const ls=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Au(t){ye(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:i=200,hydrate:s,timeout:o,suspensible:a=!0,onError:c}=t;let u=null,h,f=0;const p=()=>(f++,u=null,g()),g=()=>{let w;return u||(w=u=e().catch(C=>{if(C=C instanceof Error?C:new Error(String(C)),c)return new Promise((A,x)=>{c(C,()=>A(p()),()=>x(C),f+1)});throw C}).then(C=>w!==u&&u?u:(C&&(C.__esModule||C[Symbol.toStringTag]==="Module")&&(C=C.default),h=C,C)))};return mc({name:"AsyncComponentWrapper",__asyncLoader:g,__asyncHydrate(w,C,A){const x=s?()=>{const k=s(A,O=>MI(w,O));k&&(C.bum||(C.bum=[])).push(k)}:A;h?x():g().then(()=>!C.isUnmounted&&x())},get __asyncResolved(){return h},setup(){const w=pt;if(Id(w),h)return()=>Ru(h,w);const C=O=>{u=null,na(O,w,13,!r)};if(a&&w.suspense||_s)return g().then(O=>()=>Ru(O,w)).catch(O=>(C(O),()=>r?Ie(r,{error:O}):null));const A=Te(!1),x=Te(),k=Te(!!i);return i&&setTimeout(()=>{k.value=!1},i),o!=null&&setTimeout(()=>{if(!A.value&&!x.value){const O=new Error(`Async component timed out after ${o}ms.`);C(O),x.value=O}},o),g().then(()=>{A.value=!0,w.parent&&ra(w.parent.vnode)&&w.parent.update()}).catch(O=>{C(O),x.value=O}),()=>{if(A.value&&h)return Ru(h,w);if(x.value&&r)return Ie(r,{error:x.value});if(n&&!k.value)return Ie(n)}}})}function Ru(t,e){const{ref:n,props:r,children:i,ce:s}=e.vnode,o=Ie(t,r,i);return o.ref=n,o.ce=s,delete e.vnode.ce,o}const ra=t=>t.type.__isKeepAlive;function FI(t,e){iy(t,"a",e)}function Ad(t,e){iy(t,"da",e)}function iy(t,e,n=pt){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(gc(e,r,n),n){let i=n.parent;for(;i&&i.parent;)ra(i.parent.vnode)&&UI(r,e,n,i),i=i.parent}}function UI(t,e,n,r){const i=gc(e,t,r,!0);_c(()=>{fd(r[e],i)},n)}function gc(t,e,n=pt,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{Gr();const a=ia(n),c=Cn(e,n,t,o);return a(),Qr(),c});return r?i.unshift(s):i.push(s),s}}const dr=t=>(e,n=pt)=>{(!_s||t==="sp")&&gc(t,(...r)=>e(...r),n)},$I=dr("bm"),zn=dr("m"),qI=dr("bu"),sy=dr("u"),It=dr("bum"),_c=dr("um"),BI=dr("sp"),jI=dr("rtg"),HI=dr("rtc");function oy(t,e=pt){gc("ec",t,e)}const Rd="components";function ay(t,e){return cy(Rd,t,!0,e)||t}const ly=Symbol.for("v-ndc");function zI(t){return Je(t)?cy(Rd,t,!1)||t:t||ly}function cy(t,e,n=!0,r=!1){const i=mt||pt;if(i){const s=i.type;if(t===Rd){const a=DA(s,!1);if(a&&(a===e||a===mn(e)||a===uc(mn(e))))return s}const o=im(i[t]||s[t],e)||im(i.appContext[t],e);return!o&&r?s:o}}function im(t,e){return t&&(t[e]||t[mn(e)]||t[uc(mn(e))])}function YF(t,e,n,r){let i;const s=n&&n[r],o=ge(t);if(o||Je(t)){const a=o&&ir(t);let c=!1;a&&(c=!fn(t),t=fc(t)),i=new Array(t.length);for(let u=0,h=t.length;u<h;u++)i[u]=e(c?Dt(t[u]):t[u],u,void 0,s&&s[u])}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,s&&s[a])}else if(Ke(t))if(t[Symbol.iterator])i=Array.from(t,(a,c)=>e(a,c,void 0,s&&s[c]));else{const a=Object.keys(t);i=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const h=a[c];i[c]=e(t[h],h,c,s&&s[c])}}else i=[];return n&&(n[r]=i),i}function XF(t,e){for(let n=0;n<e.length;n++){const r=e[n];if(ge(r))for(let i=0;i<r.length;i++)t[r[i].name]=r[i].fn;else r&&(t[r.name]=r.key?(...i)=>{const s=r.fn(...i);return s&&(s.key=r.key),s}:r.fn)}return t}function ZF(t,e,n={},r,i){if(mt.ce||mt.parent&&ls(mt.parent)&&mt.parent.ce)return e!=="default"&&(n.name=e),un(),hn(Gt,null,[Ie("slot",n,r&&r())],64);let s=t[e];s&&s._c&&(s._d=!1),un();const o=s&&uy(s(n)),a=n.key||o&&o.key,c=hn(Gt,{key:(a&&!hr(a)?a:`_${e}`)+(!o&&r?"_fb":"")},o||(r?r():[]),o&&t._===1?64:-2);return!i&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),s&&s._c&&(s._d=!0),c}function uy(t){return t.some(e=>Lo(e)?!(e.type===jt||e.type===Gt&&!uy(e.children)):!0)?t:null}const gh=t=>t?Cy(t)?wc(t):gh(t.parent):null,vo=lt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>gh(t.parent),$root:t=>gh(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Sd(t),$forceUpdate:t=>t.f||(t.f=()=>{Td(t.update)}),$nextTick:t=>t.n||(t.n=on.bind(t.proxy)),$watch:t=>pA.bind(t)}),Su=(t,e)=>t!==He&&!t.__isScriptSetup&&Ve(t,e),WI={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(Su(r,e))return o[e]=1,r[e];if(i!==He&&Ve(i,e))return o[e]=2,i[e];if((u=t.propsOptions[0])&&Ve(u,e))return o[e]=3,s[e];if(n!==He&&Ve(n,e))return o[e]=4,n[e];_h&&(o[e]=0)}}const h=vo[e];let f,p;if(h)return e==="$attrs"&&Ot(t.attrs,"get",""),h(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==He&&Ve(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Ve(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return Su(i,e)?(i[e]=n,!0):r!==He&&Ve(r,e)?(r[e]=n,!0):Ve(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==He&&Ve(t,o)||Su(e,o)||(a=s[0])&&Ve(a,o)||Ve(r,o)||Ve(vo,o)||Ve(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ve(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function sm(t){return ge(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let _h=!0;function KI(t){const e=Sd(t),n=t.proxy,r=t.ctx;_h=!1,e.beforeCreate&&om(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:u,created:h,beforeMount:f,mounted:p,beforeUpdate:g,updated:w,activated:C,deactivated:A,beforeDestroy:x,beforeUnmount:k,destroyed:O,unmounted:D,render:V,renderTracked:H,renderTriggered:b,errorCaptured:y,serverPrefetch:_,expose:R,inheritAttrs:T,components:S,directives:E,filters:G}=e;if(u&&GI(u,r,null),o)for(const _e in o){const he=o[_e];ye(he)&&(r[_e]=he.bind(n))}if(i){const _e=i.call(n,n);Ke(_e)&&(t.data=dn(_e))}if(_h=!0,s)for(const _e in s){const he=s[_e],Be=ye(he)?he.bind(n,n):ye(he.get)?he.get.bind(n,n):An,Ze=!ye(he)&&ye(he.set)?he.set.bind(n):An,st=B({get:Be,set:Ze});Object.defineProperty(r,_e,{enumerable:!0,configurable:!0,get:()=>st.value,set:De=>st.value=De})}if(a)for(const _e in a)hy(a[_e],r,n,_e);if(c){const _e=ye(c)?c.call(n):c;Reflect.ownKeys(_e).forEach(he=>{cs(he,_e[he])})}h&&om(h,t,"c");function se(_e,he){ge(he)?he.forEach(Be=>_e(Be.bind(n))):he&&_e(he.bind(n))}if(se($I,f),se(zn,p),se(qI,g),se(sy,w),se(FI,C),se(Ad,A),se(oy,y),se(HI,H),se(jI,b),se(It,k),se(_c,D),se(BI,_),ge(R))if(R.length){const _e=t.exposed||(t.exposed={});R.forEach(he=>{Object.defineProperty(_e,he,{get:()=>n[he],set:Be=>n[he]=Be})})}else t.exposed||(t.exposed={});V&&t.render===An&&(t.render=V),T!=null&&(t.inheritAttrs=T),S&&(t.components=S),E&&(t.directives=E),_&&Id(t)}function GI(t,e,n=An){ge(t)&&(t=vh(t));for(const r in t){const i=t[r];let s;Ke(i)?"default"in i?s=zt(i.from||r,i.default,!0):s=zt(i.from||r):s=zt(i),Qe(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function om(t,e,n){Cn(ge(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function hy(t,e,n,r){let i=r.includes(".")?by(n,r):()=>n[r];if(Je(t)){const s=e[t];ye(s)&&Me(i,s)}else if(ye(t))Me(i,t.bind(n));else if(Ke(t))if(ge(t))t.forEach(s=>hy(s,e,n,r));else{const s=ye(t.handler)?t.handler.bind(n):e[t.handler];ye(s)&&Me(i,s,t)}}function Sd(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!n&&!r?c=e:(c={},i.length&&i.forEach(u=>Il(c,u,o,!0)),Il(c,e,o)),Ke(e)&&s.set(e,c),c}function Il(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Il(t,s,n,!0),i&&i.forEach(o=>Il(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=QI[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const QI={data:am,props:lm,emits:lm,methods:io,computed:io,beforeCreate:Ft,created:Ft,beforeMount:Ft,mounted:Ft,beforeUpdate:Ft,updated:Ft,beforeDestroy:Ft,beforeUnmount:Ft,destroyed:Ft,unmounted:Ft,activated:Ft,deactivated:Ft,errorCaptured:Ft,serverPrefetch:Ft,components:io,directives:io,watch:YI,provide:am,inject:JI};function am(t,e){return e?t?function(){return lt(ye(t)?t.call(this,this):t,ye(e)?e.call(this,this):e)}:e:t}function JI(t,e){return io(vh(t),vh(e))}function vh(t){if(ge(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ft(t,e){return t?[...new Set([].concat(t,e))]:e}function io(t,e){return t?lt(Object.create(null),t,e):e}function lm(t,e){return t?ge(t)&&ge(e)?[...new Set([...t,...e])]:lt(Object.create(null),sm(t),sm(e!=null?e:{})):e}function YI(t,e){if(!t)return e;if(!e)return t;const n=lt(Object.create(null),t);for(const r in e)n[r]=Ft(t[r],e[r]);return n}function dy(){return{app:null,config:{isNativeTag:U0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let XI=0;function ZI(t,e){return function(r,i=null){ye(r)||(r=lt({},r)),i!=null&&!Ke(i)&&(i=null);const s=dy(),o=new WeakSet,a=[];let c=!1;const u=s.app={_uid:XI++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:LA,get config(){return s.config},set config(h){},use(h,...f){return o.has(h)||(h&&ye(h.install)?(o.add(h),h.install(u,...f)):ye(h)&&(o.add(h),h(u,...f))),u},mixin(h){return s.mixins.includes(h)||s.mixins.push(h),u},component(h,f){return f?(s.components[h]=f,u):s.components[h]},directive(h,f){return f?(s.directives[h]=f,u):s.directives[h]},mount(h,f,p){if(!c){const g=u._ceVNode||Ie(r,i);return g.appContext=s,p===!0?p="svg":p===!1&&(p=void 0),f&&e?e(g,h):t(g,h,p),c=!0,u._container=h,h.__vue_app__=u,wc(g.component)}},onUnmount(h){a.push(h)},unmount(){c&&(Cn(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,f){return s.provides[h]=f,u},runWithContext(h){const f=gi;gi=u;try{return h()}finally{gi=f}}};return u}}let gi=null;function cs(t,e){if(pt){let n=pt.provides;const r=pt.parent&&pt.parent.provides;r===n&&(n=pt.provides=Object.create(r)),n[t]=e}}function zt(t,e,n=!1){const r=pt||mt;if(r||gi){const i=gi?gi._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ye(e)?e.call(r&&r.proxy):e}}function eA(){return!!(pt||mt||gi)}const fy={},py=()=>Object.create(fy),my=t=>Object.getPrototypeOf(t)===fy;function tA(t,e,n,r=!1){const i={},s=py();t.propsDefaults=Object.create(null),gy(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:vI(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function nA(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=Pe(i),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let f=0;f<h.length;f++){let p=h[f];if(vc(t.emitsOptions,p))continue;const g=e[p];if(c)if(Ve(s,p))g!==s[p]&&(s[p]=g,u=!0);else{const w=mn(p);i[w]=yh(c,a,w,g,t,!1)}else g!==s[p]&&(s[p]=g,u=!0)}}}else{gy(t,e,i,s)&&(u=!0);let h;for(const f in a)(!e||!Ve(e,f)&&((h=Kr(f))===f||!Ve(e,h)))&&(c?n&&(n[f]!==void 0||n[h]!==void 0)&&(i[f]=yh(c,a,f,void 0,t,!0)):delete i[f]);if(s!==a)for(const f in s)(!e||!Ve(e,f)&&!0)&&(delete s[f],u=!0)}u&&Xn(t.attrs,"set","")}function gy(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(po(c))continue;const u=e[c];let h;i&&Ve(i,h=mn(c))?!s||!s.includes(h)?n[h]=u:(a||(a={}))[h]=u:vc(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(s){const c=Pe(n),u=a||He;for(let h=0;h<s.length;h++){const f=s[h];n[f]=yh(i,c,f,u[f],t,!Ve(u,f))}}return o}function yh(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=Ve(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ye(c)){const{propsDefaults:u}=i;if(n in u)r=u[n];else{const h=ia(i);r=u[n]=c.call(null,e),h()}}else r=c;i.ce&&i.ce._setProp(n,r)}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===Kr(n))&&(r=!0))}return r}const rA=new WeakMap;function _y(t,e,n=!1){const r=n?rA:e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let c=!1;if(!ye(t)){const h=f=>{c=!0;const[p,g]=_y(f,e,!0);lt(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!s&&!c)return Ke(t)&&r.set(t,is),is;if(ge(s))for(let h=0;h<s.length;h++){const f=mn(s[h]);cm(f)&&(o[f]=He)}else if(s)for(const h in s){const f=mn(h);if(cm(f)){const p=s[h],g=o[f]=ge(p)||ye(p)?{type:p}:lt({},p),w=g.type;let C=!1,A=!0;if(ge(w))for(let x=0;x<w.length;++x){const k=w[x],O=ye(k)&&k.name;if(O==="Boolean"){C=!0;break}else O==="String"&&(A=!1)}else C=ye(w)&&w.name==="Boolean";g[0]=C,g[1]=A,(C||Ve(g,"default"))&&a.push(f)}}const u=[o,a];return Ke(t)&&r.set(t,u),u}function cm(t){return t[0]!=="$"&&!po(t)}const vy=t=>t[0]==="_"||t==="$stable",Cd=t=>ge(t)?t.map(Un):[Un(t)],iA=(t,e,n)=>{if(e._n)return e;const r=nt((...i)=>Cd(e(...i)),n);return r._c=!1,r},yy=(t,e,n)=>{const r=t._ctx;for(const i in t){if(vy(i))continue;const s=t[i];if(ye(s))e[i]=iA(i,s,r);else if(s!=null){const o=Cd(s);e[i]=()=>o}}},wy=(t,e)=>{const n=Cd(e);t.slots.default=()=>n},Ey=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},sA=(t,e,n)=>{const r=t.slots=py();if(t.vnode.shapeFlag&32){const i=e._;i?(Ey(r,e,n),n&&yv(r,"_",i,!0)):yy(e,r)}else e&&wy(t,e)},oA=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=He;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:Ey(i,e,n):(s=!e.$stable,yy(e,i)),o=e}else e&&(wy(t,e),o={default:1});if(s)for(const a in i)!vy(a)&&o[a]==null&&delete i[a]};function aA(){typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__!="boolean"&&(Zo().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const Ut=EA;function lA(t){return cA(t)}function cA(t,e){aA();const n=Zo();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:u,setElementText:h,parentNode:f,nextSibling:p,setScopeId:g=An,insertStaticContent:w}=t,C=(I,P,L,z=null,q=null,W=null,ee=void 0,Y=null,J=!!P.dynamicChildren)=>{if(I===P)return;I&&!ci(I,P)&&(z=F(I),De(I,q,W,!0),I=null),P.patchFlag===-2&&(J=!1,P.dynamicChildren=null);const{type:K,ref:fe,shapeFlag:ne}=P;switch(K){case yc:A(I,P,L,z);break;case jt:x(I,P,L,z);break;case tl:I==null&&k(P,L,z,ee);break;case Gt:S(I,P,L,z,q,W,ee,Y,J);break;default:ne&1?V(I,P,L,z,q,W,ee,Y,J):ne&6?E(I,P,L,z,q,W,ee,Y,J):(ne&64||ne&128)&&K.process(I,P,L,z,q,W,ee,Y,J,re)}fe!=null&&q&&bl(fe,I&&I.ref,W,P||I,!P)},A=(I,P,L,z)=>{if(I==null)r(P.el=a(P.children),L,z);else{const q=P.el=I.el;P.children!==I.children&&u(q,P.children)}},x=(I,P,L,z)=>{I==null?r(P.el=c(P.children||""),L,z):P.el=I.el},k=(I,P,L,z)=>{[I.el,I.anchor]=w(I.children,P,L,z,I.el,I.anchor)},O=({el:I,anchor:P},L,z)=>{let q;for(;I&&I!==P;)q=p(I),r(I,L,z),I=q;r(P,L,z)},D=({el:I,anchor:P})=>{let L;for(;I&&I!==P;)L=p(I),i(I),I=L;i(P)},V=(I,P,L,z,q,W,ee,Y,J)=>{P.type==="svg"?ee="svg":P.type==="math"&&(ee="mathml"),I==null?H(P,L,z,q,W,ee,Y,J):_(I,P,q,W,ee,Y,J)},H=(I,P,L,z,q,W,ee,Y)=>{let J,K;const{props:fe,shapeFlag:ne,transition:ae,dirs:me}=I;if(J=I.el=o(I.type,W,fe&&fe.is,fe),ne&8?h(J,I.children):ne&16&&y(I.children,J,null,z,q,Cu(I,W),ee,Y),me&&ri(I,null,z,"created"),b(J,I,I.scopeId,ee,z),fe){for(const be in fe)be!=="value"&&!po(be)&&s(J,be,null,fe[be],W,z);"value"in fe&&s(J,"value",null,fe.value,W),(K=fe.onVnodeBeforeMount)&&Ln(K,z,I)}me&&ri(I,null,z,"beforeMount");const pe=uA(q,ae);pe&&ae.beforeEnter(J),r(J,P,L),((K=fe&&fe.onVnodeMounted)||pe||me)&&Ut(()=>{K&&Ln(K,z,I),pe&&ae.enter(J),me&&ri(I,null,z,"mounted")},q)},b=(I,P,L,z,q)=>{if(L&&g(I,L),z)for(let W=0;W<z.length;W++)g(I,z[W]);if(q){let W=q.subTree;if(P===W||Ay(W.type)&&(W.ssContent===P||W.ssFallback===P)){const ee=q.vnode;b(I,ee,ee.scopeId,ee.slotScopeIds,q.parent)}}},y=(I,P,L,z,q,W,ee,Y,J=0)=>{for(let K=J;K<I.length;K++){const fe=I[K]=Y?Sr(I[K]):Un(I[K]);C(null,fe,P,L,z,q,W,ee,Y)}},_=(I,P,L,z,q,W,ee)=>{const Y=P.el=I.el;let{patchFlag:J,dynamicChildren:K,dirs:fe}=P;J|=I.patchFlag&16;const ne=I.props||He,ae=P.props||He;let me;if(L&&ii(L,!1),(me=ae.onVnodeBeforeUpdate)&&Ln(me,L,P,I),fe&&ri(P,I,L,"beforeUpdate"),L&&ii(L,!0),(ne.innerHTML&&ae.innerHTML==null||ne.textContent&&ae.textContent==null)&&h(Y,""),K?R(I.dynamicChildren,K,Y,L,z,Cu(P,q),W):ee||he(I,P,Y,null,L,z,Cu(P,q),W,!1),J>0){if(J&16)T(Y,ne,ae,L,q);else if(J&2&&ne.class!==ae.class&&s(Y,"class",null,ae.class,q),J&4&&s(Y,"style",ne.style,ae.style,q),J&8){const pe=P.dynamicProps;for(let be=0;be<pe.length;be++){const xe=pe[be],Rt=ne[xe],dt=ae[xe];(dt!==Rt||xe==="value")&&s(Y,xe,Rt,dt,q,L)}}J&1&&I.children!==P.children&&h(Y,P.children)}else!ee&&K==null&&T(Y,ne,ae,L,q);((me=ae.onVnodeUpdated)||fe)&&Ut(()=>{me&&Ln(me,L,P,I),fe&&ri(P,I,L,"updated")},z)},R=(I,P,L,z,q,W,ee)=>{for(let Y=0;Y<P.length;Y++){const J=I[Y],K=P[Y],fe=J.el&&(J.type===Gt||!ci(J,K)||J.shapeFlag&70)?f(J.el):L;C(J,K,fe,null,z,q,W,ee,!0)}},T=(I,P,L,z,q)=>{if(P!==L){if(P!==He)for(const W in P)!po(W)&&!(W in L)&&s(I,W,P[W],null,q,z);for(const W in L){if(po(W))continue;const ee=L[W],Y=P[W];ee!==Y&&W!=="value"&&s(I,W,Y,ee,q,z)}"value"in L&&s(I,"value",P.value,L.value,q)}},S=(I,P,L,z,q,W,ee,Y,J)=>{const K=P.el=I?I.el:a(""),fe=P.anchor=I?I.anchor:a("");let{patchFlag:ne,dynamicChildren:ae,slotScopeIds:me}=P;me&&(Y=Y?Y.concat(me):me),I==null?(r(K,L,z),r(fe,L,z),y(P.children||[],L,fe,q,W,ee,Y,J)):ne>0&&ne&64&&ae&&I.dynamicChildren?(R(I.dynamicChildren,ae,L,q,W,ee,Y),(P.key!=null||q&&P===q.subTree)&&Pd(I,P,!0)):he(I,P,L,fe,q,W,ee,Y,J)},E=(I,P,L,z,q,W,ee,Y,J)=>{P.slotScopeIds=Y,I==null?P.shapeFlag&512?q.ctx.activate(P,L,z,ee,J):G(P,L,z,q,W,ee,J):oe(I,P,J)},G=(I,P,L,z,q,W,ee)=>{const Y=I.component=CA(I,z,q);if(ra(I)&&(Y.ctx.renderer=re),PA(Y,!1,ee),Y.asyncDep){if(q&&q.registerDep(Y,se,ee),!I.el){const J=Y.subTree=Ie(jt);x(null,J,P,L)}}else se(Y,I,P,L,q,W,ee)},oe=(I,P,L)=>{const z=P.component=I.component;if(yA(I,P,L))if(z.asyncDep&&!z.asyncResolved){_e(z,P,L);return}else z.next=P,z.update();else P.el=I.el,z.vnode=P},se=(I,P,L,z,q,W,ee)=>{const Y=()=>{if(I.isMounted){let{next:ne,bu:ae,u:me,parent:pe,vnode:be}=I;{const ft=Ty(I);if(ft){ne&&(ne.el=be.el,_e(I,ne,ee)),ft.asyncDep.then(()=>{I.isUnmounted||Y()});return}}let xe=ne,Rt;ii(I,!1),ne?(ne.el=be.el,_e(I,ne,ee)):ne=be,ae&&yu(ae),(Rt=ne.props&&ne.props.onVnodeBeforeUpdate)&&Ln(Rt,pe,ne,be),ii(I,!0);const dt=Pu(I),Zt=I.subTree;I.subTree=dt,C(Zt,dt,f(Zt.el),F(Zt),I,q,W),ne.el=dt.el,xe===null&&wA(I,dt.el),me&&Ut(me,q),(Rt=ne.props&&ne.props.onVnodeUpdated)&&Ut(()=>Ln(Rt,pe,ne,be),q)}else{let ne;const{el:ae,props:me}=P,{bm:pe,m:be,parent:xe,root:Rt,type:dt}=I,Zt=ls(P);if(ii(I,!1),pe&&yu(pe),!Zt&&(ne=me&&me.onVnodeBeforeMount)&&Ln(ne,xe,P),ii(I,!0),ae&&Ue){const ft=()=>{I.subTree=Pu(I),Ue(ae,I.subTree,I,q,null)};Zt&&dt.__asyncHydrate?dt.__asyncHydrate(ae,I,ft):ft()}else{Rt.ce&&Rt.ce._injectChildStyle(dt);const ft=I.subTree=Pu(I);C(null,ft,L,z,I,q,W),P.el=ft.el}if(be&&Ut(be,q),!Zt&&(ne=me&&me.onVnodeMounted)){const ft=P;Ut(()=>Ln(ne,xe,ft),q)}(P.shapeFlag&256||xe&&ls(xe.vnode)&&xe.vnode.shapeFlag&256)&&I.a&&Ut(I.a,q),I.isMounted=!0,P=L=z=null}};I.scope.on();const J=I.effect=new Rv(Y);I.scope.off();const K=I.update=J.run.bind(J),fe=I.job=J.runIfDirty.bind(J);fe.i=I,fe.id=I.uid,J.scheduler=()=>Td(fe),ii(I,!0),K()},_e=(I,P,L)=>{P.component=I;const z=I.vnode.props;I.vnode=P,I.next=null,nA(I,P.props,z,L),oA(I,P.children,L),Gr(),Xp(I),Qr()},he=(I,P,L,z,q,W,ee,Y,J=!1)=>{const K=I&&I.children,fe=I?I.shapeFlag:0,ne=P.children,{patchFlag:ae,shapeFlag:me}=P;if(ae>0){if(ae&128){Ze(K,ne,L,z,q,W,ee,Y,J);return}else if(ae&256){Be(K,ne,L,z,q,W,ee,Y,J);return}}me&8?(fe&16&&Ae(K,q,W),ne!==K&&h(L,ne)):fe&16?me&16?Ze(K,ne,L,z,q,W,ee,Y,J):Ae(K,q,W,!0):(fe&8&&h(L,""),me&16&&y(ne,L,z,q,W,ee,Y,J))},Be=(I,P,L,z,q,W,ee,Y,J)=>{I=I||is,P=P||is;const K=I.length,fe=P.length,ne=Math.min(K,fe);let ae;for(ae=0;ae<ne;ae++){const me=P[ae]=J?Sr(P[ae]):Un(P[ae]);C(I[ae],me,L,null,q,W,ee,Y,J)}K>fe?Ae(I,q,W,!0,!1,ne):y(P,L,z,q,W,ee,Y,J,ne)},Ze=(I,P,L,z,q,W,ee,Y,J)=>{let K=0;const fe=P.length;let ne=I.length-1,ae=fe-1;for(;K<=ne&&K<=ae;){const me=I[K],pe=P[K]=J?Sr(P[K]):Un(P[K]);if(ci(me,pe))C(me,pe,L,null,q,W,ee,Y,J);else break;K++}for(;K<=ne&&K<=ae;){const me=I[ne],pe=P[ae]=J?Sr(P[ae]):Un(P[ae]);if(ci(me,pe))C(me,pe,L,null,q,W,ee,Y,J);else break;ne--,ae--}if(K>ne){if(K<=ae){const me=ae+1,pe=me<fe?P[me].el:z;for(;K<=ae;)C(null,P[K]=J?Sr(P[K]):Un(P[K]),L,pe,q,W,ee,Y,J),K++}}else if(K>ae)for(;K<=ne;)De(I[K],q,W,!0),K++;else{const me=K,pe=K,be=new Map;for(K=pe;K<=ae;K++){const wt=P[K]=J?Sr(P[K]):Un(P[K]);wt.key!=null&&be.set(wt.key,K)}let xe,Rt=0;const dt=ae-pe+1;let Zt=!1,ft=0;const gr=new Array(dt);for(K=0;K<dt;K++)gr[K]=0;for(K=me;K<=ne;K++){const wt=I[K];if(Rt>=dt){De(wt,q,W,!0);continue}let an;if(wt.key!=null)an=be.get(wt.key);else for(xe=pe;xe<=ae;xe++)if(gr[xe-pe]===0&&ci(wt,P[xe])){an=xe;break}an===void 0?De(wt,q,W,!0):(gr[an-pe]=K+1,an>=ft?ft=an:Zt=!0,C(wt,P[an],L,null,q,W,ee,Y,J),Rt++)}const Fs=Zt?hA(gr):is;for(xe=Fs.length-1,K=dt-1;K>=0;K--){const wt=pe+K,an=P[wt],ya=wt+1<fe?P[wt+1].el:z;gr[K]===0?C(null,an,L,ya,q,W,ee,Y,J):Zt&&(xe<0||K!==Fs[xe]?st(an,L,ya,2):xe--)}}},st=(I,P,L,z,q=null)=>{const{el:W,type:ee,transition:Y,children:J,shapeFlag:K}=I;if(K&6){st(I.component.subTree,P,L,z);return}if(K&128){I.suspense.move(P,L,z);return}if(K&64){ee.move(I,P,L,re);return}if(ee===Gt){r(W,P,L);for(let ne=0;ne<J.length;ne++)st(J[ne],P,L,z);r(I.anchor,P,L);return}if(ee===tl){O(I,P,L);return}if(z!==2&&K&1&&Y)if(z===0)Y.beforeEnter(W),r(W,P,L),Ut(()=>Y.enter(W),q);else{const{leave:ne,delayLeave:ae,afterLeave:me}=Y,pe=()=>r(W,P,L),be=()=>{ne(W,()=>{pe(),me&&me()})};ae?ae(W,pe,be):be()}else r(W,P,L)},De=(I,P,L,z=!1,q=!1)=>{const{type:W,props:ee,ref:Y,children:J,dynamicChildren:K,shapeFlag:fe,patchFlag:ne,dirs:ae,cacheIndex:me}=I;if(ne===-2&&(q=!1),Y!=null&&bl(Y,null,L,I,!0),me!=null&&(P.renderCache[me]=void 0),fe&256){P.ctx.deactivate(I);return}const pe=fe&1&&ae,be=!ls(I);let xe;if(be&&(xe=ee&&ee.onVnodeBeforeUnmount)&&Ln(xe,P,I),fe&6)ce(I.component,L,z);else{if(fe&128){I.suspense.unmount(L,z);return}pe&&ri(I,null,P,"beforeUnmount"),fe&64?I.type.remove(I,P,L,re,z):K&&!K.hasOnce&&(W!==Gt||ne>0&&ne&64)?Ae(K,P,L,!1,!0):(W===Gt&&ne&384||!q&&fe&16)&&Ae(J,P,L),z&&de(I)}(be&&(xe=ee&&ee.onVnodeUnmounted)||pe)&&Ut(()=>{xe&&Ln(xe,P,I),pe&&ri(I,null,P,"unmounted")},L)},de=I=>{const{type:P,el:L,anchor:z,transition:q}=I;if(P===Gt){vt(L,z);return}if(P===tl){D(I);return}const W=()=>{i(L),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(I.shapeFlag&1&&q&&!q.persisted){const{leave:ee,delayLeave:Y}=q,J=()=>ee(L,W);Y?Y(I.el,W,J):J()}else W()},vt=(I,P)=>{let L;for(;I!==P;)L=p(I),i(I),I=L;i(P)},ce=(I,P,L)=>{const{bum:z,scope:q,job:W,subTree:ee,um:Y,m:J,a:K}=I;um(J),um(K),z&&yu(z),q.stop(),W&&(W.flags|=8,De(ee,I,P,L)),Y&&Ut(Y,P),Ut(()=>{I.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&I.asyncDep&&!I.asyncResolved&&I.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},Ae=(I,P,L,z=!1,q=!1,W=0)=>{for(let ee=W;ee<I.length;ee++)De(I[ee],P,L,z,q)},F=I=>{if(I.shapeFlag&6)return F(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const P=p(I.anchor||I.el),L=P&&P[Qv];return L?p(L):P};let Z=!1;const U=(I,P,L)=>{I==null?P._vnode&&De(P._vnode,null,null,!0):C(P._vnode||null,I,P,null,null,null,L),P._vnode=I,Z||(Z=!0,Xp(),Wv(),Z=!1)},re={p:C,um:De,m:st,r:de,mt:G,mc:y,pc:he,pbc:R,n:F,o:t};let Re,Ue;return e&&([Re,Ue]=e(re)),{render:U,hydrate:Re,createApp:ZI(U,Re)}}function Cu({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ii({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function uA(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Pd(t,e,n=!1){const r=t.children,i=e.children;if(ge(r)&&ge(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Sr(i[s]),a.el=o.el),!n&&a.patchFlag!==-2&&Pd(o,a)),a.type===yc&&(a.el=o.el)}}function hA(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(i=n[n.length-1],t[i]<u){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<u?s=a+1:o=a;u<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function Ty(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ty(e)}function um(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const dA=Symbol.for("v-scx"),fA=()=>zt(dA);function eU(t,e){return kd(t,null,e)}function Me(t,e,n){return kd(t,e,n)}function kd(t,e,n=He){const{immediate:r,deep:i,flush:s,once:o}=n,a=lt({},n),c=e&&r||!e&&s!=="post";let u;if(_s){if(s==="sync"){const g=fA();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=An,g.resume=An,g.pause=An,g}}const h=pt;a.call=(g,w,C)=>Cn(g,h,w,C);let f=!1;s==="post"?a.scheduler=g=>{Ut(g,h&&h.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(g,w)=>{w?g():Td(g)}),a.augmentJob=g=>{e&&(g.flags|=4),f&&(g.flags|=2,h&&(g.id=h.uid,g.i=h))};const p=PI(t,e,a);return _s&&(u?u.push(p):c&&p()),p}function pA(t,e,n){const r=this.proxy,i=Je(t)?t.includes(".")?by(r,t):()=>r[t]:t.bind(r,r);let s;ye(e)?s=e:(s=e.handler,n=e);const o=ia(this),a=kd(i,s.bind(r),n);return o(),a}function by(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}const mA=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${mn(e)}Modifiers`]||t[`${Kr(e)}Modifiers`];function gA(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||He;let i=n;const s=e.startsWith("update:"),o=s&&mA(r,e.slice(7));o&&(o.trim&&(i=n.map(h=>Je(h)?h.trim():h)),o.number&&(i=n.map(H0)));let a,c=r[a=vu(e)]||r[a=vu(mn(e))];!c&&s&&(c=r[a=vu(Kr(e))]),c&&Cn(c,t,6,i);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Cn(u,t,6,i)}}function Iy(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!ye(t)){const c=u=>{const h=Iy(u,e,!0);h&&(a=!0,lt(o,h))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(Ke(t)&&r.set(t,null),null):(ge(s)?s.forEach(c=>o[c]=null):lt(o,s),Ke(t)&&r.set(t,o),o)}function vc(t,e){return!t||!ac(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ve(t,e[0].toLowerCase()+e.slice(1))||Ve(t,Kr(e))||Ve(t,e))}function Pu(t){const{type:e,vnode:n,proxy:r,withProxy:i,propsOptions:[s],slots:o,attrs:a,emit:c,render:u,renderCache:h,props:f,data:p,setupState:g,ctx:w,inheritAttrs:C}=t,A=Tl(t);let x,k;try{if(n.shapeFlag&4){const D=i||r,V=D;x=Un(u.call(V,D,h,f,g,p,w)),k=a}else{const D=e;x=Un(D.length>1?D(f,{attrs:a,slots:o,emit:c}):D(f,null)),k=e.props?a:_A(a)}}catch(D){yo.length=0,na(D,t,1),x=Ie(jt)}let O=x;if(k&&C!==!1){const D=Object.keys(k),{shapeFlag:V}=O;D.length&&V&7&&(s&&D.some(dd)&&(k=vA(k,s)),O=Ur(O,k,!1,!0))}return n.dirs&&(O=Ur(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&bi(O,n.transition),x=O,Tl(A),x}const _A=t=>{let e;for(const n in t)(n==="class"||n==="style"||ac(n))&&((e||(e={}))[n]=t[n]);return e},vA=(t,e)=>{const n={};for(const r in t)(!dd(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function yA(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?hm(r,o,u):!!o;if(c&8){const h=e.dynamicProps;for(let f=0;f<h.length;f++){const p=h[f];if(o[p]!==r[p]&&!vc(u,p))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?hm(r,o,u):!0:!!o;return!1}function hm(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!vc(n,s))return!0}return!1}function wA({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Ay=t=>t.__isSuspense;function EA(t,e){e&&e.pendingBranch?ge(t)?e.effects.push(...t):e.effects.push(t):OI(t)}const Gt=Symbol.for("v-fgt"),yc=Symbol.for("v-txt"),jt=Symbol.for("v-cmt"),tl=Symbol.for("v-stc"),yo=[];let tn=null;function un(t=!1){yo.push(tn=t?null:[])}function TA(){yo.pop(),tn=yo[yo.length-1]||null}let No=1;function dm(t,e=!1){No+=t,t<0&&tn&&e&&(tn.hasOnce=!0)}function Ry(t){return t.dynamicChildren=No>0?tn||is:null,TA(),No>0&&tn&&tn.push(t),t}function tU(t,e,n,r,i,s){return Ry(Al(t,e,n,r,i,s,!0))}function hn(t,e,n,r,i){return Ry(Ie(t,e,n,r,i,!0))}function Lo(t){return t?t.__v_isVNode===!0:!1}function ci(t,e){return t.type===e.type&&t.key===e.key}const Sy=({key:t})=>t!=null?t:null,nl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Je(t)||Qe(t)||ye(t)?{i:mt,r:t,k:e,f:!!n}:t:null);function Al(t,e=null,n=null,r=0,i=null,s=t===Gt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Sy(e),ref:e&&nl(e),scopeId:Gv,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:mt};return a?(xd(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=Je(n)?8:16),No>0&&!o&&tn&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&tn.push(c),c}const Ie=bA;function bA(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===ly)&&(t=jt),Lo(t)){const a=Ur(t,e,!0);return n&&xd(a,n),No>0&&!s&&tn&&(a.shapeFlag&6?tn[tn.indexOf(t)]=a:tn.push(a)),a.patchFlag=-2,a}if(NA(t)&&(t=t.__vccOpts),e){e=IA(e);let{class:a,style:c}=e;a&&!Je(a)&&(e.class=hc(a)),Ke(c)&&(Ed(c)&&!ge(c)&&(c=lt({},c)),e.style=ea(c))}const o=Je(t)?1:Ay(t)?128:Jv(t)?64:Ke(t)?4:ye(t)?2:0;return Al(t,e,n,r,i,o,s,!0)}function IA(t){return t?Ed(t)||my(t)?lt({},t):t:null}function Ur(t,e,n=!1,r=!1){const{props:i,ref:s,patchFlag:o,children:a,transition:c}=t,u=e?AA(i||{},e):i,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Sy(u),ref:e&&e.ref?n&&s?ge(s)?s.concat(nl(e)):[s,nl(e)]:nl(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Gt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ur(t.ssContent),ssFallback:t.ssFallback&&Ur(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&bi(h,c.clone(h)),h}function so(t=" ",e=0){return Ie(yc,null,t,e)}function nU(t,e){const n=Ie(tl,null,t);return n.staticCount=e,n}function fm(t="",e=!1){return e?(un(),hn(jt,null,t)):Ie(jt,null,t)}function Un(t){return t==null||typeof t=="boolean"?Ie(jt):ge(t)?Ie(Gt,null,t.slice()):Lo(t)?Sr(t):Ie(yc,null,String(t))}function Sr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ur(t)}function xd(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ge(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),xd(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!my(e)?e._ctx=mt:i===3&&mt&&(mt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ye(e)?(e={default:e,_ctx:mt},n=32):(e=String(e),r&64?(n=16,e=[so(e)]):n=8);t.children=e,t.shapeFlag|=n}function AA(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=hc([e.class,r.class]));else if(i==="style")e.style=ea([e.style,r.style]);else if(ac(i)){const s=e[i],o=r[i];o&&s!==o&&!(ge(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function Ln(t,e,n,r=null){Cn(t,e,7,[n,r])}const RA=dy();let SA=0;function CA(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||RA,s={uid:SA++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new bv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_y(r,i),emitsOptions:Iy(r,i),emit:null,emitted:null,propsDefaults:He,inheritAttrs:r.inheritAttrs,ctx:He,data:He,props:He,attrs:He,slots:He,refs:He,setupState:He,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=gA.bind(null,s),t.ce&&t.ce(s),s}let pt=null;const Ye=()=>pt||mt;let Rl,wh;{const t=Zo(),e=(n,r)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(r),s=>{i.length>1?i.forEach(o=>o(s)):i[0](s)}};Rl=e("__VUE_INSTANCE_SETTERS__",n=>pt=n),wh=e("__VUE_SSR_SETTERS__",n=>_s=n)}const ia=t=>{const e=pt;return Rl(t),t.scope.on(),()=>{t.scope.off(),Rl(e)}},pm=()=>{pt&&pt.scope.off(),Rl(null)};function Cy(t){return t.vnode.shapeFlag&4}let _s=!1;function PA(t,e=!1,n=!1){e&&wh(e);const{props:r,children:i}=t.vnode,s=Cy(t);tA(t,r,s,e),sA(t,i,n);const o=s?kA(t,e):void 0;return e&&wh(!1),o}function kA(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,WI);const{setup:r}=n;if(r){Gr();const i=t.setupContext=r.length>1?OA(t):null,s=ia(t),o=ta(r,t,0,[t.props,i]),a=gv(o);if(Qr(),s(),(a||t.sp)&&!ls(t)&&Id(t),a){if(o.then(pm,pm),e)return o.then(c=>{mm(t,c,e)}).catch(c=>{na(c,t,0)});t.asyncDep=o}else mm(t,o,e)}else Py(t,e)}function mm(t,e,n){ye(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ke(e)&&(t.setupState=qv(e)),Py(t,n)}let gm;function Py(t,e,n){const r=t.type;if(!t.render){if(!e&&gm&&!r.render){const i=r.template||Sd(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=lt(lt({isCustomElement:s,delimiters:a},o),c);r.render=gm(i,u)}}t.render=r.render||An}{const i=ia(t);Gr();try{KI(t)}finally{Qr(),i()}}}const xA={get(t,e){return Ot(t,"get",""),t[e]}};function OA(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,xA),slots:t.slots,emit:t.emit,expose:e}}function wc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(qv(Di(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in vo)return vo[n](t)},has(e,n){return n in e||n in vo}})):t.proxy}function DA(t,e=!0){return ye(t)?t.displayName||t.name:t.name||e&&t.__name}function NA(t){return ye(t)&&"__vccOpts"in t}const B=(t,e)=>SI(t,e,_s);function Q(t,e,n){const r=arguments.length;return r===2?Ke(e)&&!ge(e)?Lo(e)?Ie(t,null,[e]):Ie(t,e):Ie(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Lo(n)&&(n=[n]),Ie(t,e,n))}const LA="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Eh;const _m=typeof window!="undefined"&&window.trustedTypes;if(_m)try{Eh=_m.createPolicy("vue",{createHTML:t=>t})}catch{}const ky=Eh?t=>Eh.createHTML(t):t=>t,VA="http://www.w3.org/2000/svg",MA="http://www.w3.org/1998/Math/MathML",Yn=typeof document!="undefined"?document:null,vm=Yn&&Yn.createElement("template"),FA={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e==="svg"?Yn.createElementNS(VA,t):e==="mathml"?Yn.createElementNS(MA,t):n?Yn.createElement(t,{is:n}):Yn.createElement(t);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>Yn.createTextNode(t),createComment:t=>Yn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Yn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{vm.innerHTML=ky(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=vm.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},wr="transition",Xs="animation",vs=Symbol("_vtc"),xy={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Oy=lt({},ey,xy),UA=t=>(t.displayName="Transition",t.props=Oy,t),Vo=UA((t,{slots:e})=>Q(VI,Dy(t),e)),si=(t,e=[])=>{ge(t)?t.forEach(n=>n(...e)):t&&t(...e)},ym=t=>t?ge(t)?t.some(e=>e.length>1):t.length>1:!1;function Dy(t){const e={};for(const S in t)S in xy||(e[S]=t[S]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:u=o,appearToClass:h=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,w=$A(i),C=w&&w[0],A=w&&w[1],{onBeforeEnter:x,onEnter:k,onEnterCancelled:O,onLeave:D,onLeaveCancelled:V,onBeforeAppear:H=x,onAppear:b=k,onAppearCancelled:y=O}=e,_=(S,E,G,oe)=>{S._enterCancelled=oe,br(S,E?h:a),br(S,E?u:o),G&&G()},R=(S,E)=>{S._isLeaving=!1,br(S,f),br(S,g),br(S,p),E&&E()},T=S=>(E,G)=>{const oe=S?b:k,se=()=>_(E,S,G);si(oe,[E,se]),wm(()=>{br(E,S?c:s),Vn(E,S?h:a),ym(oe)||Em(E,r,C,se)})};return lt(e,{onBeforeEnter(S){si(x,[S]),Vn(S,s),Vn(S,o)},onBeforeAppear(S){si(H,[S]),Vn(S,c),Vn(S,u)},onEnter:T(!1),onAppear:T(!0),onLeave(S,E){S._isLeaving=!0;const G=()=>R(S,E);Vn(S,f),S._enterCancelled?(Vn(S,p),Th()):(Th(),Vn(S,p)),wm(()=>{!S._isLeaving||(br(S,f),Vn(S,g),ym(D)||Em(S,r,A,G))}),si(D,[S,G])},onEnterCancelled(S){_(S,!1,void 0,!0),si(O,[S])},onAppearCancelled(S){_(S,!0,void 0,!0),si(y,[S])},onLeaveCancelled(S){R(S),si(V,[S])}})}function $A(t){if(t==null)return null;if(Ke(t))return[ku(t.enter),ku(t.leave)];{const e=ku(t);return[e,e]}}function ku(t){return z0(t)}function Vn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[vs]||(t[vs]=new Set)).add(e)}function br(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[vs];n&&(n.delete(e),n.size||(t[vs]=void 0))}function wm(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let qA=0;function Em(t,e,n,r){const i=t._endId=++qA,s=()=>{i===t._endId&&r()};if(n!=null)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=Ny(t,e);if(!o)return r();const u=o+"end";let h=0;const f=()=>{t.removeEventListener(u,p),s()},p=g=>{g.target===t&&++h>=c&&f()};setTimeout(()=>{h<c&&f()},a+1),t.addEventListener(u,p)}function Ny(t,e){const n=window.getComputedStyle(t),r=w=>(n[w]||"").split(", "),i=r(`${wr}Delay`),s=r(`${wr}Duration`),o=Tm(i,s),a=r(`${Xs}Delay`),c=r(`${Xs}Duration`),u=Tm(a,c);let h=null,f=0,p=0;e===wr?o>0&&(h=wr,f=o,p=s.length):e===Xs?u>0&&(h=Xs,f=u,p=c.length):(f=Math.max(o,u),h=f>0?o>u?wr:Xs:null,p=h?h===wr?s.length:c.length:0);const g=h===wr&&/\b(transform|all)(,|$)/.test(r(`${wr}Property`).toString());return{type:h,timeout:f,propCount:p,hasTransform:g}}function Tm(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>bm(n)+bm(t[r])))}function bm(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Th(){return document.body.offsetHeight}function BA(t,e,n){const r=t[vs];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Im=Symbol("_vod"),jA=Symbol("_vsh"),HA=Symbol(""),zA=/(^|;)\s*display\s*:/;function WA(t,e,n){const r=t.style,i=Je(n);let s=!1;if(n&&!i){if(e)if(Je(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&rl(r,a,"")}else for(const o in e)n[o]==null&&rl(r,o,"");for(const o in n)o==="display"&&(s=!0),rl(r,o,n[o])}else if(i){if(e!==n){const o=r[HA];o&&(n+=";"+o),r.cssText=n,s=zA.test(n)}}else e&&t.removeAttribute("style");Im in t&&(t[Im]=s?r.display:"",t[jA]&&(r.display="none"))}const Am=/\s*!important$/;function rl(t,e,n){if(ge(n))n.forEach(r=>rl(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=KA(t,e);Am.test(n)?t.setProperty(Kr(r),n.replace(Am,""),"important"):t[r]=n}}const Rm=["Webkit","Moz","ms"],xu={};function KA(t,e){const n=xu[e];if(n)return n;let r=mn(e);if(r!=="filter"&&r in t)return xu[e]=r;r=uc(r);for(let i=0;i<Rm.length;i++){const s=Rm[i]+r;if(s in t)return xu[e]=s}return e}const Sm="http://www.w3.org/1999/xlink";function Cm(t,e,n,r,i,s=Y0(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Sm,e.slice(6,e.length)):t.setAttributeNS(Sm,e,n):n==null||s&&!wv(n)?t.removeAttribute(e):t.setAttribute(e,s?"":hr(n)?String(n):n)}function Pm(t,e,n,r,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?ky(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=wv(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function GA(t,e,n,r){t.addEventListener(e,n,r)}function QA(t,e,n,r){t.removeEventListener(e,n,r)}const km=Symbol("_vei");function JA(t,e,n,r,i=null){const s=t[km]||(t[km]={}),o=s[e];if(r&&o)o.value=r;else{const[a,c]=YA(e);if(r){const u=s[e]=eR(r,i);GA(t,a,u,c)}else o&&(QA(t,a,o,c),s[e]=void 0)}}const xm=/(?:Once|Passive|Capture)$/;function YA(t){let e;if(xm.test(t)){e={};let r;for(;r=t.match(xm);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Kr(t.slice(2)),e]}let Ou=0;const XA=Promise.resolve(),ZA=()=>Ou||(XA.then(()=>Ou=0),Ou=Date.now());function eR(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Cn(tR(r,n.value),e,5,[r])};return n.value=t,n.attached=ZA(),n}function tR(t,e){if(ge(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Om=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,nR=(t,e,n,r,i,s)=>{const o=i==="svg";e==="class"?BA(t,r,o):e==="style"?WA(t,n,r):ac(e)?dd(e)||JA(t,e,n,r,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):rR(t,e,r,o))?(Pm(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Cm(t,e,r,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Je(r))?Pm(t,mn(e),r,s,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Cm(t,e,r,o))};function rR(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Om(e)&&ye(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Om(e)&&Je(n)?!1:e in t}const Ly=new WeakMap,Vy=new WeakMap,Sl=Symbol("_moveCb"),Dm=Symbol("_enterCb"),iR=t=>(delete t.props.mode,t),sR=iR({name:"TransitionGroup",props:lt({},Oy,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Ye(),r=Zv();let i,s;return sy(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!uR(i[0].el,n.vnode.el,o))return;i.forEach(aR),i.forEach(lR);const a=i.filter(cR);Th(),a.forEach(c=>{const u=c.el,h=u.style;Vn(u,o),h.transform=h.webkitTransform=h.transitionDuration="";const f=u[Sl]=p=>{p&&p.target!==u||(!p||/transform$/.test(p.propertyName))&&(u.removeEventListener("transitionend",f),u[Sl]=null,br(u,o))};u.addEventListener("transitionend",f)})}),()=>{const o=Pe(t),a=Dy(o);let c=o.tag||Gt;if(i=[],s)for(let u=0;u<s.length;u++){const h=s[u];h.el&&h.el instanceof Element&&(i.push(h),bi(h,Do(h,a,r,n)),Ly.set(h,h.el.getBoundingClientRect()))}s=e.default?bd(e.default()):[];for(let u=0;u<s.length;u++){const h=s[u];h.key!=null&&bi(h,Do(h,a,r,n))}return Ie(c,null,s)}}}),oR=sR;function aR(t){const e=t.el;e[Sl]&&e[Sl](),e[Dm]&&e[Dm]()}function lR(t){Vy.set(t,t.el.getBoundingClientRect())}function cR(t){const e=Ly.get(t),n=Vy.get(t),r=e.left-n.left,i=e.top-n.top;if(r||i){const s=t.el.style;return s.transform=s.webkitTransform=`translate(${r}px,${i}px)`,s.transitionDuration="0s",t}}function uR(t,e,n){const r=t.cloneNode(),i=t[vs];i&&i.forEach(a=>{a.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),n.split(/\s+/).forEach(a=>a&&r.classList.add(a)),r.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(r);const{hasTransform:o}=Ny(r);return s.removeChild(r),o}const hR=["ctrl","shift","alt","meta"],dR={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>hR.some(n=>t[`${n}Key`]&&!e.includes(n))},rU=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(i,...s)=>{for(let o=0;o<e.length;o++){const a=dR[e[o]];if(a&&a(i,e))return}return t(i,...s)})},fR={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},iU=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=i=>{if(!("key"in i))return;const s=Kr(i.key);if(e.some(o=>o===s||fR[o]===s))return t(i)})},pR=lt({patchProp:nR},FA);let Nm;function mR(){return Nm||(Nm=lA(pR))}const My=(...t)=>{const e=mR().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=_R(r);if(!i)return;const s=e._component;!ye(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,gR(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function gR(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function _R(t){return Je(t)?document.querySelector(t):t}function Ec(t,e,n,r){return Object.defineProperty(t,e,{get:n,set:r,enumerable:!0}),t}const or=Te(!1);let Tc;function vR(t,e){const n=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(t)||/(opr)[\/]([\w.]+)/.exec(t)||/(vivaldi)[\/]([\w.]+)/.exec(t)||/(chrome|crios)[\/]([\w.]+)/.exec(t)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t)||/(firefox|fxios)[\/]([\w.]+)/.exec(t)||/(webkit)[\/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(t)||[];return{browser:n[5]||n[3]||n[1]||"",version:n[2]||n[4]||"0",versionNumber:n[4]||n[2]||"0",platform:e[0]||""}}function yR(t){return/(ipad)/.exec(t)||/(ipod)/.exec(t)||/(windows phone)/.exec(t)||/(iphone)/.exec(t)||/(kindle)/.exec(t)||/(silk)/.exec(t)||/(android)/.exec(t)||/(win)/.exec(t)||/(mac)/.exec(t)||/(linux)/.exec(t)||/(cros)/.exec(t)||/(playbook)/.exec(t)||/(bb)/.exec(t)||/(blackberry)/.exec(t)||[]}const Fy="ontouchstart"in window||window.navigator.maxTouchPoints>0;function wR(t){Tc={is:{...t}},delete t.mac,delete t.desktop;const e=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(t,{mobile:!0,ios:!0,platform:e,[e]:!0})}function ER(t){const e=t.toLowerCase(),n=yR(e),r=vR(e,n),i={};r.browser&&(i[r.browser]=!0,i.version=r.version,i.versionNumber=parseInt(r.versionNumber,10)),r.platform&&(i[r.platform]=!0);const s=i.android||i.ios||i.bb||i.blackberry||i.ipad||i.iphone||i.ipod||i.kindle||i.playbook||i.silk||i["windows phone"];return s===!0||e.indexOf("mobile")>-1?(i.mobile=!0,i.edga||i.edgios?(i.edge=!0,r.browser="edge"):i.crios?(i.chrome=!0,r.browser="chrome"):i.fxios&&(i.firefox=!0,r.browser="firefox")):i.desktop=!0,(i.ipod||i.ipad||i.iphone)&&(i.ios=!0),i["windows phone"]&&(i.winphone=!0,delete i["windows phone"]),(i.chrome||i.opr||i.safari||i.vivaldi||i.mobile===!0&&i.ios!==!0&&s!==!0)&&(i.webkit=!0),i.edg&&(r.browser="edgechromium",i.edgeChromium=!0),(i.safari&&i.blackberry||i.bb)&&(r.browser="blackberry",i.blackberry=!0),i.safari&&i.playbook&&(r.browser="playbook",i.playbook=!0),i.opr&&(r.browser="opera",i.opera=!0),i.safari&&i.android&&(r.browser="android",i.android=!0),i.safari&&i.kindle&&(r.browser="kindle",i.kindle=!0),i.safari&&i.silk&&(r.browser="silk",i.silk=!0),i.vivaldi&&(r.browser="vivaldi",i.vivaldi=!0),i.name=r.browser,i.platform=r.platform,e.indexOf("electron")>-1?i.electron=!0:document.location.href.indexOf("-extension://")>-1?i.bex=!0:(window.Capacitor!==void 0?(i.capacitor=!0,i.nativeMobile=!0,i.nativeMobileWrapper="capacitor"):(window._cordovaNative!==void 0||window.cordova!==void 0)&&(i.cordova=!0,i.nativeMobile=!0,i.nativeMobileWrapper="cordova"),Fy===!0&&i.mac===!0&&(i.desktop===!0&&i.safari===!0||i.nativeMobile===!0&&i.android!==!0&&i.ios!==!0&&i.ipad!==!0)&&wR(i)),i}const Lm=navigator.userAgent||navigator.vendor||window.opera,TR={has:{touch:!1,webStorage:!1},within:{iframe:!1}},at={userAgent:Lm,is:ER(Lm),has:{touch:Fy},within:{iframe:window.self!==window.top}},Cl={install(t){const{$q:e}=t;or.value===!0?(t.onSSRHydrated.push(()=>{Object.assign(e.platform,at),or.value=!1,Tc=void 0}),e.platform=dn(this)):e.platform=this}};{let t;Ec(at.has,"webStorage",()=>{if(t!==void 0)return t;try{if(window.localStorage)return t=!0,!0}catch{}return t=!1,!1}),at.is.ios===!0&&window.navigator.vendor.toLowerCase().indexOf("apple"),or.value===!0?Object.assign(Cl,at,Tc,TR):Object.assign(Cl,at)}var sa=(t,e)=>{const n=dn(t);for(const r in t)Ec(e,r,()=>n[r],i=>{n[r]=i});return e};const ut={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const t=Object.defineProperty({},"passive",{get(){Object.assign(ut,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,t),window.removeEventListener("qtest",null,t)}catch{}function In(){}function sU(t){return t.button===0}function Uy(t){return t.touches&&t.touches[0]?t=t.touches[0]:t.changedTouches&&t.changedTouches[0]?t=t.changedTouches[0]:t.targetTouches&&t.targetTouches[0]&&(t=t.targetTouches[0]),{top:t.clientY,left:t.clientX}}function bR(t){if(t.path)return t.path;if(t.composedPath)return t.composedPath();const e=[];let n=t.target;for(;n;){if(e.push(n),n.tagName==="HTML")return e.push(document),e.push(window),e;n=n.parentElement}}function $y(t){t.stopPropagation()}function Mo(t){t.cancelable!==!1&&t.preventDefault()}function Tn(t){t.cancelable!==!1&&t.preventDefault(),t.stopPropagation()}function oU(t,e){if(t===void 0||e===!0&&t.__dragPrevented===!0)return;const n=e===!0?r=>{r.__dragPrevented=!0,r.addEventListener("dragstart",Mo,ut.notPassiveCapture)}:r=>{delete r.__dragPrevented,r.removeEventListener("dragstart",Mo,ut.notPassiveCapture)};t.querySelectorAll("a, img").forEach(n)}function Fo(t,e,n){const r=`__q_${e}_evt`;t[r]=t[r]!==void 0?t[r].concat(n):n,n.forEach(i=>{i[0].addEventListener(i[1],t[i[2]],ut[i[3]])})}function Pl(t,e){const n=`__q_${e}_evt`;t[n]!==void 0&&(t[n].forEach(r=>{r[0].removeEventListener(r[1],t[r[2]],ut[r[3]])}),t[n]=void 0)}function IR(t,e=250,n){let r=null;function i(){const s=arguments,o=()=>{r=null,n!==!0&&t.apply(this,s)};r!==null?clearTimeout(r):n===!0&&t.apply(this,s),r=setTimeout(o,e)}return i.cancel=()=>{r!==null&&clearTimeout(r)},i}const Du=["sm","md","lg","xl"],{passive:Vm}=ut;var AR=sa({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:In,setDebounce:In,install({$q:t,onSSRHydrated:e}){if(t.screen=this,this.__installed===!0){t.config.screen!==void 0&&(t.config.screen.bodyClasses===!1?document.body.classList.remove(`screen--${this.name}`):this.__update(!0));return}const{visualViewport:n}=window,r=n||window,i=document.scrollingElement||document.documentElement,s=n===void 0||at.is.mobile===!0?()=>[Math.max(window.innerWidth,i.clientWidth),Math.max(window.innerHeight,i.clientHeight)]:()=>[n.width*n.scale+window.innerWidth-i.clientWidth,n.height*n.scale+window.innerHeight-i.clientHeight],o=t.config.screen!==void 0&&t.config.screen.bodyClasses===!0;this.__update=f=>{const[p,g]=s();if(g!==this.height&&(this.height=g),p!==this.width)this.width=p;else if(f!==!0)return;let w=this.sizes;this.gt.xs=p>=w.sm,this.gt.sm=p>=w.md,this.gt.md=p>=w.lg,this.gt.lg=p>=w.xl,this.lt.sm=p<w.sm,this.lt.md=p<w.md,this.lt.lg=p<w.lg,this.lt.xl=p<w.xl,this.xs=this.lt.sm,this.sm=this.gt.xs===!0&&this.lt.md===!0,this.md=this.gt.sm===!0&&this.lt.lg===!0,this.lg=this.gt.md===!0&&this.lt.xl===!0,this.xl=this.gt.lg,w=this.xs===!0&&"xs"||this.sm===!0&&"sm"||this.md===!0&&"md"||this.lg===!0&&"lg"||"xl",w!==this.name&&(o===!0&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${w}`)),this.name=w)};let a,c={},u=16;this.setSizes=f=>{Du.forEach(p=>{f[p]!==void 0&&(c[p]=f[p])})},this.setDebounce=f=>{u=f};const h=()=>{const f=getComputedStyle(document.body);f.getPropertyValue("--q-size-sm")&&Du.forEach(p=>{this.sizes[p]=parseInt(f.getPropertyValue(`--q-size-${p}`),10)}),this.setSizes=p=>{Du.forEach(g=>{p[g]&&(this.sizes[g]=p[g])}),this.__update(!0)},this.setDebounce=p=>{a!==void 0&&r.removeEventListener("resize",a,Vm),a=p>0?IR(this.__update,p):this.__update,r.addEventListener("resize",a,Vm)},this.setDebounce(u),Object.keys(c).length!==0?(this.setSizes(c),c=void 0):this.__update(),o===!0&&this.name==="xs"&&document.body.classList.add("screen--xs")};or.value===!0?e.push(h):h()}});const kt=sa({isActive:!1,mode:!1},{__media:void 0,set(t){kt.mode=t,t==="auto"?(kt.__media===void 0&&(kt.__media=window.matchMedia("(prefers-color-scheme: dark)"),kt.__updateMedia=()=>{kt.set("auto")},kt.__media.addListener(kt.__updateMedia)),t=kt.__media.matches):kt.__media!==void 0&&(kt.__media.removeListener(kt.__updateMedia),kt.__media=void 0),kt.isActive=t===!0,document.body.classList.remove(`body--${t===!0?"light":"dark"}`),document.body.classList.add(`body--${t===!0?"dark":"light"}`)},toggle(){kt.set(kt.isActive===!1)},install({$q:t,onSSRHydrated:e,ssrContext:n}){const{dark:r}=t.config;if(t.dark=this,this.__installed===!0&&r===void 0)return;this.isActive=r===!0;const i=r!==void 0?r:!1;if(or.value===!0){const s=a=>{this.__fromSSR=a},o=this.set;this.set=s,s(i),e.push(()=>{this.set=o,this.set(this.__fromSSR)})}else this.set(i)}}),qy=()=>!0;function RR(t){return typeof t=="string"&&t!==""&&t!=="/"&&t!=="#/"}function SR(t){return t.startsWith("#")===!0&&(t=t.substring(1)),t.startsWith("/")===!1&&(t="/"+t),t.endsWith("/")===!0&&(t=t.substring(0,t.length-1)),"#"+t}function CR(t){if(t.backButtonExit===!1)return()=>!1;if(t.backButtonExit==="*")return qy;const e=["#/"];return Array.isArray(t.backButtonExit)===!0&&e.push(...t.backButtonExit.filter(RR).map(SR)),()=>e.includes(window.location.hash)}var bh={__history:[],add:In,remove:In,install({$q:t}){if(this.__installed===!0)return;const{cordova:e,capacitor:n}=at.is;if(e!==!0&&n!==!0)return;const r=t.config[e===!0?"cordova":"capacitor"];if(r!==void 0&&r.backButton===!1||n===!0&&(window.Capacitor===void 0||window.Capacitor.Plugins.App===void 0))return;this.add=o=>{o.condition===void 0&&(o.condition=qy),this.__history.push(o)},this.remove=o=>{const a=this.__history.indexOf(o);a>=0&&this.__history.splice(a,1)};const i=CR(Object.assign({backButtonExit:!0},r)),s=()=>{if(this.__history.length){const o=this.__history[this.__history.length-1];o.condition()===!0&&(this.__history.pop(),o.handler())}else i()===!0?navigator.app.exitApp():window.history.back()};e===!0?document.addEventListener("deviceready",()=>{document.addEventListener("backbutton",s,!1)}):window.Capacitor.Plugins.App.addListener("backButton",s)}},Mm={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh",expand:t=>t?`Expand "${t}"`:"Expand",collapse:t=>t?`Collapse "${t}"`:"Collapse"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days"},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:t=>t===1?"1 record selected.":(t===0?"No":t)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(t,e,n)=>t+"-"+e+" of "+n,columns:"Columns"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function Fm(){const t=Array.isArray(navigator.languages)===!0&&navigator.languages.length!==0?navigator.languages[0]:navigator.language;if(typeof t=="string")return t.split(/[-_]/).map((e,n)=>n===0?e.toLowerCase():n>1||e.length<4?e.toUpperCase():e[0].toUpperCase()+e.slice(1).toLowerCase()).join("-")}const wn=sa({__langPack:{}},{getLocale:Fm,set(t=Mm,e){const n={...t,rtl:t.rtl===!0,getLocale:Fm};{if(n.set=wn.set,wn.__langConfig===void 0||wn.__langConfig.noHtmlAttrs!==!0){const r=document.documentElement;r.setAttribute("dir",n.rtl===!0?"rtl":"ltr"),r.setAttribute("lang",n.isoName)}Object.assign(wn.__langPack,n),wn.props=n,wn.isoName=n.isoName,wn.nativeName=n.nativeName}},install({$q:t,lang:e,ssrContext:n}){t.lang=wn.__langPack,wn.__langConfig=t.config.lang,this.__installed===!0?e!==void 0&&this.set(e):this.set(e||Mm)}});function PR(t,e,n=document.body){if(typeof t!="string")throw new TypeError("Expected a string as propName");if(typeof e!="string")throw new TypeError("Expected a string as value");if(!(n instanceof Element))throw new TypeError("Expected a DOM element");n.style.setProperty(`--q-${t}`,e)}let By=!1;function kR(t){By=t.isComposing===!0}function xR(t){return By===!0||t!==Object(t)||t.isComposing===!0||t.qKeyEvent===!0}function Ii(t,e){return xR(t)===!0?!1:[].concat(e).includes(t.keyCode)}function jy(t){if(t.ios===!0)return"ios";if(t.android===!0)return"android"}function OR({is:t,has:e,within:n},r){const i=[t.desktop===!0?"desktop":"mobile",`${e.touch===!1?"no-":""}touch`];if(t.mobile===!0){const s=jy(t);s!==void 0&&i.push("platform-"+s)}if(t.nativeMobile===!0){const s=t.nativeMobileWrapper;i.push(s),i.push("native-mobile"),t.ios===!0&&(r[s]===void 0||r[s].iosStatusBarPadding!==!1)&&i.push("q-ios-padding")}else t.electron===!0?i.push("electron"):t.bex===!0&&i.push("bex");return n.iframe===!0&&i.push("within-iframe"),i}function DR(){const{is:t}=at,e=document.body.className,n=new Set(e.replace(/ {2}/g," ").split(" "));if(Tc!==void 0)n.delete("desktop"),n.add("platform-ios"),n.add("mobile");else if(t.nativeMobile!==!0&&t.electron!==!0&&t.bex!==!0){if(t.desktop===!0)n.delete("mobile"),n.delete("platform-ios"),n.delete("platform-android"),n.add("desktop");else if(t.mobile===!0){n.delete("desktop"),n.add("mobile");const i=jy(t);i!==void 0?(n.add(`platform-${i}`),n.delete(`platform-${i==="ios"?"android":"ios"}`)):(n.delete("platform-ios"),n.delete("platform-android"))}}at.has.touch===!0&&(n.delete("no-touch"),n.add("touch")),at.within.iframe===!0&&n.add("within-iframe");const r=Array.from(n).join(" ");e!==r&&(document.body.className=r)}function NR(t){for(const e in t)PR(e,t[e])}var LR={install(t){if(this.__installed!==!0){if(or.value===!0)DR();else{const{$q:e}=t;e.config.brand!==void 0&&NR(e.config.brand);const n=OR(at,e.config);document.body.classList.add.apply(document.body.classList,n)}at.is.ios===!0&&document.body.addEventListener("touchstart",In),window.addEventListener("keydown",kR,!0)}}},VR={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}};const kl=sa({iconMapFn:null,__icons:{}},{set(t,e){const n={...t,rtl:t.rtl===!0};n.set=kl.set,Object.assign(kl.__icons,n)},install({$q:t,iconSet:e,ssrContext:n}){t.config.iconMapFn!==void 0&&(this.iconMapFn=t.config.iconMapFn),t.iconSet=this.__icons,Ec(t,"iconMapFn",()=>this.iconMapFn,r=>{this.iconMapFn=r}),this.__installed===!0?e!==void 0&&this.set(e):this.set(e||VR)}}),Hy="_q_",Od="_q_l_",MR="_q_pc_",aU="_q_fo_",lU="_q_tabs_",us=()=>{},xl={};let zy=!1;function FR(){zy=!0}function Nu(t,e){if(t===e)return!0;if(t!==null&&e!==null&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;let n,r;if(t.constructor===Array){if(n=t.length,n!==e.length)return!1;for(r=n;r--!==0;)if(Nu(t[r],e[r])!==!0)return!1;return!0}if(t.constructor===Map){if(t.size!==e.size)return!1;let s=t.entries();for(r=s.next();r.done!==!0;){if(e.has(r.value[0])!==!0)return!1;r=s.next()}for(s=t.entries(),r=s.next();r.done!==!0;){if(Nu(r.value[1],e.get(r.value[0]))!==!0)return!1;r=s.next()}return!0}if(t.constructor===Set){if(t.size!==e.size)return!1;const s=t.entries();for(r=s.next();r.done!==!0;){if(e.has(r.value[0])!==!0)return!1;r=s.next()}return!0}if(t.buffer!=null&&t.buffer.constructor===ArrayBuffer){if(n=t.length,n!==e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();const i=Object.keys(t).filter(s=>t[s]!==void 0);if(n=i.length,n!==Object.keys(e).filter(s=>e[s]!==void 0).length)return!1;for(r=n;r--!==0;){const s=i[r];if(Nu(t[s],e[s])!==!0)return!1}return!0}return t!==t&&e!==e}function ys(t){return t!==null&&typeof t=="object"&&Array.isArray(t)!==!0}function cU(t){return Object.prototype.toString.call(t)==="[object Date]"}const Um=[Cl,LR,kt,AR,bh,wn,kl];function Wy(t,e){const n=My(t);n.config.globalProperties=e.config.globalProperties;const{reload:r,...i}=e._context;return Object.assign(n._context,i),n}function $m(t,e){e.forEach(n=>{n.install(t),n.__installed=!0})}function UR(t,e,n){t.config.globalProperties.$q=n.$q,t.provide(Hy,n.$q),$m(n,Um),e.components!==void 0&&Object.values(e.components).forEach(r=>{ys(r)===!0&&r.name!==void 0&&t.component(r.name,r)}),e.directives!==void 0&&Object.values(e.directives).forEach(r=>{ys(r)===!0&&r.name!==void 0&&t.directive(r.name,r)}),e.plugins!==void 0&&$m(n,Object.values(e.plugins).filter(r=>typeof r.install=="function"&&Um.includes(r)===!1)),or.value===!0&&(n.$q.onSSRHydrated=()=>{n.onSSRHydrated.forEach(r=>{r()}),n.$q.onSSRHydrated=()=>{}})}var $R=function(t,e={}){const n={version:"2.12.0"};zy===!1?(e.config!==void 0&&Object.assign(xl,e.config),n.config={...xl},FR()):n.config=e.config||{},UR(t,e,{parentApp:t,$q:n,lang:e.lang,iconSet:e.iconSet,onSSRHydrated:[]})},qR={version:"2.12.0",install:$R,lang:wn,iconSet:kl};const BR={__name:"App",setup(t){return oy(e=>{console.log("### onErrorCaptured ###"),console.log("err: ",e)}),(e,n)=>{const r=ay("router-view");return un(),hn(r)}}};function uU(t){return t}var jR=!1;/*!
  * pinia v2.1.3
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Ky;const bc=t=>Ky=t,Gy=Symbol();function Ih(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var wo;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(wo||(wo={}));function HR(){const t=Iv(!0),e=t.run(()=>Te({}));let n=[],r=[];const i=Di({install(s){bc(i),i._a=s,s.provide(Gy,i),s.config.globalProperties.$pinia=i,r.forEach(o=>n.push(o)),r=[]},use(s){return!this._a&&!jR?r.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Qy=()=>{};function qm(t,e,n,r=Qy){t.push(e);const i=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),r())};return!n&&md()&&Av(i),i}function zi(t,...e){t.slice().forEach(n=>{n(...e)})}const zR=t=>t();function Ah(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],i=t[n];Ih(i)&&Ih(r)&&t.hasOwnProperty(n)&&!Qe(r)&&!ir(r)?t[n]=Ah(i,r):t[n]=r}return t}const WR=Symbol();function KR(t){return!Ih(t)||!t.hasOwnProperty(WR)}const{assign:Ir}=Object;function GR(t){return!!(Qe(t)&&t.effect)}function QR(t,e,n,r){const{state:i,actions:s,getters:o}=e,a=n.state.value[t];let c;function u(){a||(n.state.value[t]=i?i():{});const h=bI(n.state.value[t]);return Ir(h,s,Object.keys(o||{}).reduce((f,p)=>(f[p]=Di(B(()=>{bc(n);const g=n._s.get(t);return o[p].call(g,g)})),f),{}))}return c=Jy(t,u,e,n,r,!0),c}function Jy(t,e,n={},r,i,s){let o;const a=Ir({actions:{}},n),c={deep:!0};let u,h,f=[],p=[],g;const w=r.state.value[t];!s&&!w&&(r.state.value[t]={}),Te({});let C;function A(y){let _;u=h=!1,typeof y=="function"?(y(r.state.value[t]),_={type:wo.patchFunction,storeId:t,events:g}):(Ah(r.state.value[t],y),_={type:wo.patchObject,payload:y,storeId:t,events:g});const R=C=Symbol();on().then(()=>{C===R&&(u=!0)}),h=!0,zi(f,_,r.state.value[t])}const x=s?function(){const{state:_}=n,R=_?_():{};this.$patch(T=>{Ir(T,R)})}:Qy;function k(){o.stop(),f=[],p=[],r._s.delete(t)}function O(y,_){return function(){bc(r);const R=Array.from(arguments),T=[],S=[];function E(se){T.push(se)}function G(se){S.push(se)}zi(p,{args:R,name:y,store:V,after:E,onError:G});let oe;try{oe=_.apply(this&&this.$id===t?this:V,R)}catch(se){throw zi(S,se),se}return oe instanceof Promise?oe.then(se=>(zi(T,se),se)).catch(se=>(zi(S,se),Promise.reject(se))):(zi(T,oe),oe)}}const D={_p:r,$id:t,$onAction:qm.bind(null,p),$patch:A,$reset:x,$subscribe(y,_={}){const R=qm(f,y,_.detached,()=>T()),T=o.run(()=>Me(()=>r.state.value[t],S=>{(_.flush==="sync"?h:u)&&y({storeId:t,type:wo.direct,events:g},S)},Ir({},c,_)));return R},$dispose:k},V=dn(D);r._s.set(t,V);const H=r._a&&r._a.runWithContext||zR,b=r._e.run(()=>(o=Iv(),H(()=>o.run(e))));for(const y in b){const _=b[y];if(Qe(_)&&!GR(_)||ir(_))s||(w&&KR(_)&&(Qe(_)?_.value=w[y]:Ah(_,w[y])),r.state.value[t][y]=_);else if(typeof _=="function"){const R=O(y,_);b[y]=R,a.actions[y]=_}}return Ir(V,b),Ir(Pe(V),b),Object.defineProperty(V,"$state",{get:()=>r.state.value[t],set:y=>{A(_=>{Ir(_,y)})}}),r._p.forEach(y=>{Ir(V,o.run(()=>y({store:V,app:r._a,pinia:r,options:a})))}),w&&s&&n.hydrate&&n.hydrate(V.$state,w),u=!0,h=!0,V}function JR(t,e,n){let r,i;const s=typeof e=="function";typeof t=="string"?(r=t,i=s?n:e):(i=t,r=t.id);function o(a,c){const u=eA();return a=a||(u?zt(Gy,null):null),a&&bc(a),a=Ky,a._s.has(r)||(s?Jy(r,e,i,a):QR(r,i,a)),a._s.get(r)}return o.$id=r,o}function hU(t){{t=Pe(t);const e={};for(const n in t){const r=t[n];(Qe(r)||ir(r))&&(e[n]=Bv(t,n))}return e}}var Lu=()=>HR();const Bm=[{path:"/",name:"/",component:()=>Le(()=>import("./index.e60e8fc5.js"),["assets/index.e60e8fc5.js","assets/index.cf7e0c69.css","assets/QPage.7e14a298.js","assets/PostForm.a700ac99.js","assets/PostForm.07fb72be.css","assets/QForm.c4906c4c.js","assets/QItemLabel.00abfbc3.js","assets/QCardActions.fcdd61ed.js","assets/validate-rules.0c14b07e.js","assets/index.e0cc83e5.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/post.055bc757.js","assets/PostList.3e9b9cf8.js","assets/PostIcon.3dd0017d.js"])},{path:"/_admin",name:"/_admin",component:()=>Le(()=>import("./_admin.605c6902.js"),["assets/_admin.605c6902.js","assets/route-block.1e6a8648.js","assets/plugin-vue_export-helper.21dcd24c.js"]),meta:{layout:"admin"}},{path:"/:path(.*)",name:"/[...path]",component:()=>Le(()=>import("./_...path_.b0292ecc.js"),["assets/_...path_.b0292ecc.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/about",name:"/about",component:()=>Le(()=>import("./about.9a590c61.js"),["assets/about.9a590c61.js","assets/route-block.1e6a8648.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/admin",children:[{path:"",name:"/admin/",component:()=>Le(()=>import("./index.ab1ad00a.js"),["assets/index.ab1ad00a.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"dashboard",name:"/admin/dashboard",component:()=>Le(()=>import("./dashboard.a4f6bb85.js"),["assets/dashboard.a4f6bb85.js","assets/plugin-vue_export-helper.21dcd24c.js"])}]},{path:"/docs",children:[{path:"",name:"/docs/",component:()=>Le(()=>import("./index.aab5f62d.js"),["assets/index.aab5f62d.js","assets/plugin-vue_export-helper.21dcd24c.js"])}]},{path:"/ErrorNotFound",name:"/ErrorNotFound",component:()=>Le(()=>import("./ErrorNotFound.44b75b26.js"),["assets/ErrorNotFound.44b75b26.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/hobby",name:"/hobby",component:()=>Le(()=>import("./hobby.8f67c674.js"),["assets/hobby.8f67c674.js","assets/pokeCard.66b351b4.js","assets/pokeCard.a05fc42c.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/index.215aef8b.js"]),children:[{path:"pokeCard",name:"/hobby/pokeCard",component:()=>Le(()=>import("./pokeCard.66b351b4.js"),["assets/pokeCard.66b351b4.js","assets/pokeCard.a05fc42c.css","assets/plugin-vue_export-helper.21dcd24c.js"])}]},{path:"/home",name:"home-page",component:()=>Le(()=>import("./home.f7c82a3a.js"),["assets/home.f7c82a3a.js","assets/QPage.7e14a298.js","assets/route-block.1e6a8648.js","assets/plugin-vue_export-helper.21dcd24c.js"]),meta:{requiresAuth:!0,width:"600px"}},{path:"/IndexPage",name:"/IndexPage",component:()=>Le(()=>import("./IndexPage.59fc1d61.js"),["assets/IndexPage.59fc1d61.js","assets/QPage.7e14a298.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/mypage",name:"/mypage",component:()=>Le(()=>import("./mypage.940b5dc6.js"),["assets/mypage.940b5dc6.js","assets/QPage.7e14a298.js","assets/BaseCard.cc56466f.js","assets/route-block.1e6a8648.js"]),children:[{path:"bookmark",name:"/mypage/bookmark",component:()=>Le(()=>import("./bookmark.1a33be1e.js"),["assets/bookmark.1a33be1e.js","assets/post.055bc757.js","assets/PostList.3e9b9cf8.js","assets/PostIcon.3dd0017d.js"])},{path:"password",name:"/mypage/password",component:()=>Le(()=>import("./password.9dcfd856.js"),["assets/password.9dcfd856.js","assets/QForm.c4906c4c.js","assets/QCardActions.fcdd61ed.js","assets/BaseCard.cc56466f.js","assets/error-message.d08c6aae.js"])},{path:"profile",name:"/mypage/profile",component:()=>Le(()=>import("./profile.f6140cd4.js"),["assets/profile.f6140cd4.js","assets/QForm.c4906c4c.js","assets/QCardActions.fcdd61ed.js","assets/BaseCard.cc56466f.js","assets/error-message.d08c6aae.js"])}],meta:{requiresAuth:!0}},{path:"/posts",children:[{path:":id",children:[{path:"",name:"/posts/[id]/",component:()=>Le(()=>import("./index.d8d83701.js"),["assets/index.d8d83701.js","assets/index.4a640d70.css","assets/QPage.7e14a298.js","assets/post.055bc757.js","assets/PostIcon.3dd0017d.js","assets/BaseCard.cc56466f.js","assets/index.e0cc83e5.js","assets/QForm.c4906c4c.js","assets/route-block.1e6a8648.js"]),meta:{width:"800px"}},{path:"edit",name:"/posts/[id]/edit",component:()=>Le(()=>import("./edit.0738621a.js"),["assets/edit.0738621a.js","assets/QPage.7e14a298.js","assets/post.055bc757.js","assets/BaseCard.cc56466f.js","assets/PostForm.a700ac99.js","assets/PostForm.07fb72be.css","assets/QForm.c4906c4c.js","assets/QItemLabel.00abfbc3.js","assets/QCardActions.fcdd61ed.js","assets/validate-rules.0c14b07e.js","assets/index.e0cc83e5.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/route-block.1e6a8648.js"]),meta:{width:"800px"}}]}]},{path:"/search",children:[{path:"",name:"/search/",component:()=>Le(()=>import("./index.d56d23b7.js"),["assets/index.d56d23b7.js","assets/index.752c06c4.css","assets/QPage.7e14a298.js","assets/PostList.3e9b9cf8.js","assets/PostIcon.3dd0017d.js","assets/post.055bc757.js"])}]},{path:"/vueuse",children:[{path:"",name:"/vueuse/",component:()=>Le(()=>import("./index.ddca1b57.js"),["assets/index.ddca1b57.js","assets/QPage.7e14a298.js"])}]}];/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Ji=typeof window!="undefined";function YR(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const $e=Object.assign;function Vu(t,e){const n={};for(const r in e){const i=e[r];n[r]=Pn(i)?i.map(t):t(i)}return n}const Eo=()=>{},Pn=Array.isArray,XR=/\/$/,ZR=t=>t.replace(XR,"");function Mu(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=rS(r!=null?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function eS(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function jm(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function tS(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&ws(e.matched[r],n.matched[i])&&Yy(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ws(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Yy(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!nS(t[n],e[n]))return!1;return!0}function nS(t,e){return Pn(t)?Hm(t,e):Pn(e)?Hm(e,t):t===e}function Hm(t,e){return Pn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function rS(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Uo;(function(t){t.pop="pop",t.push="push"})(Uo||(Uo={}));var To;(function(t){t.back="back",t.forward="forward",t.unknown=""})(To||(To={}));function iS(t){if(!t)if(Ji){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ZR(t)}const sS=/^[^#]+#/;function oS(t,e){return t.replace(sS,"#")+e}function aS(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ic=()=>({left:window.pageXOffset,top:window.pageYOffset});function lS(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=aS(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function zm(t,e){return(history.state?history.state.position-e:-1)+t}const Rh=new Map;function cS(t,e){Rh.set(t,e)}function uS(t){const e=Rh.get(t);return Rh.delete(t),e}let hS=()=>location.protocol+"//"+location.host;function Xy(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),jm(c,"")}return jm(n,t)+r+i}function dS(t,e,n,r){let i=[],s=[],o=null;const a=({state:p})=>{const g=Xy(t,location),w=n.value,C=e.value;let A=0;if(p){if(n.value=g,e.value=p,o&&o===w){o=null;return}A=C?p.position-C.position:0}else r(g);i.forEach(x=>{x(n.value,w,{delta:A,type:Uo.pop,direction:A?A>0?To.forward:To.back:To.unknown})})};function c(){o=n.value}function u(p){i.push(p);const g=()=>{const w=i.indexOf(p);w>-1&&i.splice(w,1)};return s.push(g),g}function h(){const{history:p}=window;!p.state||p.replaceState($e({},p.state,{scroll:Ic()}),"")}function f(){for(const p of s)p();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:u,destroy:f}}function Wm(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?Ic():null}}function fS(t){const{history:e,location:n}=window,r={value:Xy(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,u,h){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:hS()+t+c;try{e[h?"replaceState":"pushState"](u,"",p),i.value=u}catch(g){console.error(g),n[h?"replace":"assign"](p)}}function o(c,u){const h=$e({},e.state,Wm(i.value.back,c,i.value.forward,!0),u,{position:i.value.position});s(c,h,!0),r.value=c}function a(c,u){const h=$e({},i.value,e.state,{forward:c,scroll:Ic()});s(h.current,h,!0);const f=$e({},Wm(r.value,c,null),{position:h.position+1},u);s(c,f,!1),r.value=c}return{location:r,state:i,push:a,replace:o}}function pS(t){t=iS(t);const e=fS(t),n=dS(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=$e({location:"",base:t,go:r,createHref:oS.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function mS(t){return typeof t=="string"||t&&typeof t=="object"}function Zy(t){return typeof t=="string"||typeof t=="symbol"}const Er={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ew=Symbol("");var Km;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Km||(Km={}));function Es(t,e){return $e(new Error,{type:t,[ew]:!0},e)}function Jn(t,e){return t instanceof Error&&ew in t&&(e==null||!!(t.type&e))}const Gm="[^/]+?",gS={sensitive:!1,strict:!1,start:!0,end:!0},_S=/[.+*?^${}()[\]/\\]/g;function vS(t,e){const n=$e({},gS,e),r=[];let i=n.start?"^":"";const s=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let f=0;f<u.length;f++){const p=u[f];let g=40+(n.sensitive?.25:0);if(p.type===0)f||(i+="/"),i+=p.value.replace(_S,"\\$&"),g+=40;else if(p.type===1){const{value:w,repeatable:C,optional:A,regexp:x}=p;s.push({name:w,repeatable:C,optional:A});const k=x||Gm;if(k!==Gm){g+=10;try{new RegExp(`(${k})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${w}" (${k}): `+D.message)}}let O=C?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;f||(O=A&&u.length<2?`(?:/${O})`:"/"+O),A&&(O+="?"),i+=O,g+=20,A&&(g+=-8),C&&(g+=-20),k===".*"&&(g+=-50)}h.push(g)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(u){const h=u.match(o),f={};if(!h)return null;for(let p=1;p<h.length;p++){const g=h[p]||"",w=s[p-1];f[w.name]=g&&w.repeatable?g.split("/"):g}return f}function c(u){let h="",f=!1;for(const p of t){(!f||!h.endsWith("/"))&&(h+="/"),f=!1;for(const g of p)if(g.type===0)h+=g.value;else if(g.type===1){const{value:w,repeatable:C,optional:A}=g,x=w in u?u[w]:"";if(Pn(x)&&!C)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const k=Pn(x)?x.join("/"):x;if(!k)if(A)p.length<2&&(h.endsWith("/")?h=h.slice(0,-1):f=!0);else throw new Error(`Missing required param "${w}"`);h+=k}}return h||"/"}return{re:o,score:r,keys:s,parse:a,stringify:c}}function yS(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function wS(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=yS(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(Qm(r))return 1;if(Qm(i))return-1}return i.length-r.length}function Qm(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const ES={type:0,value:""},TS=/[a-zA-Z0-9_]/;function bS(t){if(!t)return[[]];if(t==="/")return[[ES]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,c,u="",h="";function f(){!u||(n===0?s.push({type:0,value:u}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&f(),o()):c===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:TS.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:n=3:h+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),i}function IS(t,e,n){const r=vS(bS(t.path),n),i=$e(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function AS(t,e){const n=[],r=new Map;e=Xm({strict:!1,end:!0,sensitive:!1},e);function i(h){return r.get(h)}function s(h,f,p){const g=!p,w=RS(h);w.aliasOf=p&&p.record;const C=Xm(e,h),A=[w];if("alias"in h){const O=typeof h.alias=="string"?[h.alias]:h.alias;for(const D of O)A.push($e({},w,{components:p?p.record.components:w.components,path:D,aliasOf:p?p.record:w}))}let x,k;for(const O of A){const{path:D}=O;if(f&&D[0]!=="/"){const V=f.record.path,H=V[V.length-1]==="/"?"":"/";O.path=f.record.path+(D&&H+D)}if(x=IS(O,f,C),p?p.alias.push(x):(k=k||x,k!==x&&k.alias.push(x),g&&h.name&&!Ym(x)&&o(h.name)),w.children){const V=w.children;for(let H=0;H<V.length;H++)s(V[H],x,p&&p.children[H])}p=p||x,(x.record.components&&Object.keys(x.record.components).length||x.record.name||x.record.redirect)&&c(x)}return k?()=>{o(k)}:Eo}function o(h){if(Zy(h)){const f=r.get(h);f&&(r.delete(h),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(h);f>-1&&(n.splice(f,1),h.record.name&&r.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return n}function c(h){let f=0;for(;f<n.length&&wS(h,n[f])>=0&&(h.record.path!==n[f].record.path||!tw(h,n[f]));)f++;n.splice(f,0,h),h.record.name&&!Ym(h)&&r.set(h.record.name,h)}function u(h,f){let p,g={},w,C;if("name"in h&&h.name){if(p=r.get(h.name),!p)throw Es(1,{location:h});C=p.record.name,g=$e(Jm(f.params,p.keys.filter(k=>!k.optional).map(k=>k.name)),h.params&&Jm(h.params,p.keys.map(k=>k.name))),w=p.stringify(g)}else if("path"in h)w=h.path,p=n.find(k=>k.re.test(w)),p&&(g=p.parse(w),C=p.record.name);else{if(p=f.name?r.get(f.name):n.find(k=>k.re.test(f.path)),!p)throw Es(1,{location:h,currentLocation:f});C=p.record.name,g=$e({},f.params,h.params),w=p.stringify(g)}const A=[];let x=p;for(;x;)A.unshift(x.record),x=x.parent;return{name:C,path:w,params:g,matched:A,meta:CS(A)}}return t.forEach(h=>s(h)),{addRoute:s,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Jm(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function RS(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:SS(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function SS(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Ym(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function CS(t){return t.reduce((e,n)=>$e(e,n.meta),{})}function Xm(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function tw(t,e){return e.children.some(n=>n===t||tw(t,n))}const nw=/#/g,PS=/&/g,kS=/\//g,xS=/=/g,OS=/\?/g,rw=/\+/g,DS=/%5B/g,NS=/%5D/g,iw=/%5E/g,LS=/%60/g,sw=/%7B/g,VS=/%7C/g,ow=/%7D/g,MS=/%20/g;function Dd(t){return encodeURI(""+t).replace(VS,"|").replace(DS,"[").replace(NS,"]")}function FS(t){return Dd(t).replace(sw,"{").replace(ow,"}").replace(iw,"^")}function Sh(t){return Dd(t).replace(rw,"%2B").replace(MS,"+").replace(nw,"%23").replace(PS,"%26").replace(LS,"`").replace(sw,"{").replace(ow,"}").replace(iw,"^")}function US(t){return Sh(t).replace(xS,"%3D")}function $S(t){return Dd(t).replace(nw,"%23").replace(OS,"%3F")}function qS(t){return t==null?"":$S(t).replace(kS,"%2F")}function Ol(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function BS(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(rw," "),o=s.indexOf("="),a=Ol(o<0?s:s.slice(0,o)),c=o<0?null:Ol(s.slice(o+1));if(a in e){let u=e[a];Pn(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function Zm(t){let e="";for(let n in t){const r=t[n];if(n=US(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Pn(r)?r.map(s=>s&&Sh(s)):[r&&Sh(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function jS(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Pn(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const HS=Symbol(""),eg=Symbol(""),Ac=Symbol(""),Nd=Symbol(""),Ch=Symbol("");function Zs(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Cr(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=f=>{f===!1?a(Es(4,{from:n,to:e})):f instanceof Error?a(f):mS(f)?a(Es(2,{from:e,to:f})):(s&&r.enterCallbacks[i]===s&&typeof f=="function"&&s.push(f),o())},u=t.call(r&&r.instances[i],e,n,c);let h=Promise.resolve(u);t.length<3&&(h=h.then(c)),h.catch(f=>a(f))})}function Fu(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(zS(a)){const u=(a.__vccOpts||a)[e];u&&i.push(Cr(u,n,r,s,o))}else{let c=a();i.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const h=YR(u)?u.default:u;s.components[o]=h;const p=(h.__vccOpts||h)[e];return p&&Cr(p,n,r,s,o)()}))}}return i}function zS(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function tg(t){const e=zt(Ac),n=zt(Nd),r=B(()=>e.resolve(qt(t.to))),i=B(()=>{const{matched:c}=r.value,{length:u}=c,h=c[u-1],f=n.matched;if(!h||!f.length)return-1;const p=f.findIndex(ws.bind(null,h));if(p>-1)return p;const g=ng(c[u-2]);return u>1&&ng(h)===g&&f[f.length-1].path!==g?f.findIndex(ws.bind(null,c[u-2])):p}),s=B(()=>i.value>-1&&QS(n.params,r.value.params)),o=B(()=>i.value>-1&&i.value===n.matched.length-1&&Yy(n.params,r.value.params));function a(c={}){return GS(c)?e[qt(t.replace)?"replace":"push"](qt(t.to)).catch(Eo):Promise.resolve()}return{route:r,href:B(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const WS=mc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:tg,setup(t,{slots:e}){const n=dn(tg(t)),{options:r}=zt(Ac),i=B(()=>({[rg(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[rg(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Q("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),KS=WS;function GS(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function QS(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Pn(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function ng(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const rg=(t,e,n)=>t!=null?t:e!=null?e:n,JS=mc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=zt(Ch),i=B(()=>t.route||r.value),s=zt(eg,0),o=B(()=>{let u=qt(s);const{matched:h}=i.value;let f;for(;(f=h[u])&&!f.components;)u++;return u}),a=B(()=>i.value.matched[o.value]);cs(eg,B(()=>o.value+1)),cs(HS,a),cs(Ch,i);const c=Te();return Me(()=>[c.value,a.value,t.name],([u,h,f],[p,g,w])=>{h&&(h.instances[f]=u,g&&g!==h&&u&&u===p&&(h.leaveGuards.size||(h.leaveGuards=g.leaveGuards),h.updateGuards.size||(h.updateGuards=g.updateGuards))),u&&h&&(!g||!ws(h,g)||!p)&&(h.enterCallbacks[f]||[]).forEach(C=>C(u))},{flush:"post"}),()=>{const u=i.value,h=t.name,f=a.value,p=f&&f.components[h];if(!p)return ig(n.default,{Component:p,route:u});const g=f.props[h],w=g?g===!0?u.params:typeof g=="function"?g(u):g:null,A=Q(p,$e({},w,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(f.instances[h]=null)},ref:c}));return ig(n.default,{Component:A,route:u})||A}}});function ig(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const YS=JS;function XS(t){const e=AS(t.routes,t),n=t.parseQuery||BS,r=t.stringifyQuery||Zm,i=t.history,s=Zs(),o=Zs(),a=Zs(),c=ns(Er);let u=Er;Ji&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Vu.bind(null,F=>""+F),f=Vu.bind(null,qS),p=Vu.bind(null,Ol);function g(F,Z){let U,re;return Zy(F)?(U=e.getRecordMatcher(F),re=Z):re=F,e.addRoute(re,U)}function w(F){const Z=e.getRecordMatcher(F);Z&&e.removeRoute(Z)}function C(){return e.getRoutes().map(F=>F.record)}function A(F){return!!e.getRecordMatcher(F)}function x(F,Z){if(Z=$e({},Z||c.value),typeof F=="string"){const P=Mu(n,F,Z.path),L=e.resolve({path:P.path},Z),z=i.createHref(P.fullPath);return $e(P,L,{params:p(L.params),hash:Ol(P.hash),redirectedFrom:void 0,href:z})}let U;if("path"in F)U=$e({},F,{path:Mu(n,F.path,Z.path).path});else{const P=$e({},F.params);for(const L in P)P[L]==null&&delete P[L];U=$e({},F,{params:f(P)}),Z.params=f(Z.params)}const re=e.resolve(U,Z),Re=F.hash||"";re.params=h(p(re.params));const Ue=eS(r,$e({},F,{hash:FS(Re),path:re.path})),I=i.createHref(Ue);return $e({fullPath:Ue,hash:Re,query:r===Zm?jS(F.query):F.query||{}},re,{redirectedFrom:void 0,href:I})}function k(F){return typeof F=="string"?Mu(n,F,c.value.path):$e({},F)}function O(F,Z){if(u!==F)return Es(8,{from:Z,to:F})}function D(F){return b(F)}function V(F){return D($e(k(F),{replace:!0}))}function H(F){const Z=F.matched[F.matched.length-1];if(Z&&Z.redirect){const{redirect:U}=Z;let re=typeof U=="function"?U(F):U;return typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=k(re):{path:re},re.params={}),$e({query:F.query,hash:F.hash,params:"path"in re?{}:F.params},re)}}function b(F,Z){const U=u=x(F),re=c.value,Re=F.state,Ue=F.force,I=F.replace===!0,P=H(U);if(P)return b($e(k(P),{state:typeof P=="object"?$e({},Re,P.state):Re,force:Ue,replace:I}),Z||U);const L=U;L.redirectedFrom=Z;let z;return!Ue&&tS(r,re,U)&&(z=Es(16,{to:L,from:re}),st(re,re,!0,!1)),(z?Promise.resolve(z):R(L,re)).catch(q=>Jn(q)?Jn(q,2)?q:Ze(q):he(q,L,re)).then(q=>{if(q){if(Jn(q,2))return b($e({replace:I},k(q.to),{state:typeof q.to=="object"?$e({},Re,q.to.state):Re,force:Ue}),Z||L)}else q=S(L,re,!0,I,Re);return T(L,re,q),q})}function y(F,Z){const U=O(F,Z);return U?Promise.reject(U):Promise.resolve()}function _(F){const Z=vt.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(F):F()}function R(F,Z){let U;const[re,Re,Ue]=ZS(F,Z);U=Fu(re.reverse(),"beforeRouteLeave",F,Z);for(const P of re)P.leaveGuards.forEach(L=>{U.push(Cr(L,F,Z))});const I=y.bind(null,F,Z);return U.push(I),Ae(U).then(()=>{U=[];for(const P of s.list())U.push(Cr(P,F,Z));return U.push(I),Ae(U)}).then(()=>{U=Fu(Re,"beforeRouteUpdate",F,Z);for(const P of Re)P.updateGuards.forEach(L=>{U.push(Cr(L,F,Z))});return U.push(I),Ae(U)}).then(()=>{U=[];for(const P of F.matched)if(P.beforeEnter&&!Z.matched.includes(P))if(Pn(P.beforeEnter))for(const L of P.beforeEnter)U.push(Cr(L,F,Z));else U.push(Cr(P.beforeEnter,F,Z));return U.push(I),Ae(U)}).then(()=>(F.matched.forEach(P=>P.enterCallbacks={}),U=Fu(Ue,"beforeRouteEnter",F,Z),U.push(I),Ae(U))).then(()=>{U=[];for(const P of o.list())U.push(Cr(P,F,Z));return U.push(I),Ae(U)}).catch(P=>Jn(P,8)?P:Promise.reject(P))}function T(F,Z,U){for(const re of a.list())_(()=>re(F,Z,U))}function S(F,Z,U,re,Re){const Ue=O(F,Z);if(Ue)return Ue;const I=Z===Er,P=Ji?history.state:{};U&&(re||I?i.replace(F.fullPath,$e({scroll:I&&P&&P.scroll},Re)):i.push(F.fullPath,Re)),c.value=F,st(F,Z,U,I),Ze()}let E;function G(){E||(E=i.listen((F,Z,U)=>{if(!ce.listening)return;const re=x(F),Re=H(re);if(Re){b($e(Re,{replace:!0}),re).catch(Eo);return}u=re;const Ue=c.value;Ji&&cS(zm(Ue.fullPath,U.delta),Ic()),R(re,Ue).catch(I=>Jn(I,12)?I:Jn(I,2)?(b(I.to,re).then(P=>{Jn(P,20)&&!U.delta&&U.type===Uo.pop&&i.go(-1,!1)}).catch(Eo),Promise.reject()):(U.delta&&i.go(-U.delta,!1),he(I,re,Ue))).then(I=>{I=I||S(re,Ue,!1),I&&(U.delta&&!Jn(I,8)?i.go(-U.delta,!1):U.type===Uo.pop&&Jn(I,20)&&i.go(-1,!1)),T(re,Ue,I)}).catch(Eo)}))}let oe=Zs(),se=Zs(),_e;function he(F,Z,U){Ze(F);const re=se.list();return re.length?re.forEach(Re=>Re(F,Z,U)):console.error(F),Promise.reject(F)}function Be(){return _e&&c.value!==Er?Promise.resolve():new Promise((F,Z)=>{oe.add([F,Z])})}function Ze(F){return _e||(_e=!F,G(),oe.list().forEach(([Z,U])=>F?U(F):Z()),oe.reset()),F}function st(F,Z,U,re){const{scrollBehavior:Re}=t;if(!Ji||!Re)return Promise.resolve();const Ue=!U&&uS(zm(F.fullPath,0))||(re||!U)&&history.state&&history.state.scroll||null;return on().then(()=>Re(F,Z,Ue)).then(I=>I&&lS(I)).catch(I=>he(I,F,Z))}const De=F=>i.go(F);let de;const vt=new Set,ce={currentRoute:c,listening:!0,addRoute:g,removeRoute:w,hasRoute:A,getRoutes:C,resolve:x,options:t,push:D,replace:V,go:De,back:()=>De(-1),forward:()=>De(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:se.add,isReady:Be,install(F){const Z=this;F.component("RouterLink",KS),F.component("RouterView",YS),F.config.globalProperties.$router=Z,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>qt(c)}),Ji&&!de&&c.value===Er&&(de=!0,D(i.location).catch(Re=>{}));const U={};for(const Re in Er)U[Re]=B(()=>c.value[Re]);F.provide(Ac,Z),F.provide(Nd,dn(U)),F.provide(Ch,c);const re=F.unmount;vt.add(F),F.unmount=function(){vt.delete(F),vt.size<1&&(u=Er,E&&E(),E=null,c.value=Er,de=!1,_e=!1),re()}}};function Ae(F){return F.reduce((Z,U)=>Z.then(()=>_(U)),Promise.resolve())}return ce}function ZS(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(u=>ws(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>ws(u,c))||i.push(c))}return[n,r,i]}function dU(){return zt(Ac)}function eC(){return zt(Nd)}function tC(t){const{extendRoutes:e}=t;return XS(Object.assign(t,{routes:typeof e=="function"?e(Bm):Bm}))}const Ph={xs:18,sm:24,md:32,lg:38,xl:46},Rc={size:String};function Sc(t,e=Ph){return B(()=>t.size!==void 0?{fontSize:t.size in e?`${e[t.size]}px`:t.size}:null)}const Xe=t=>Di(mc(t)),aw=t=>Di(t);function Dn(t,e){return t!==void 0&&t()||e}function lw(t,e){if(t!==void 0){const n=t();if(n!=null)return n.slice()}return e}function rs(t,e){return t!==void 0?e.concat(t()):e}function cw(t,e){return t===void 0?e:e!==void 0?e.concat(t()):t()}function nC(t,e,n,r,i,s){e.key=r+i;const o=Q(t,e,n);return i===!0?as(o,s()):o}const sg="0 0 24 24",og=t=>t,Uu=t=>`ionicons ${t}`,uw={"mdi-":t=>`mdi ${t}`,"icon-":og,"bt-":t=>`bt ${t}`,"eva-":t=>`eva ${t}`,"ion-md":Uu,"ion-ios":Uu,"ion-logo":Uu,"iconfont ":og,"ti-":t=>`themify-icon ${t}`,"bi-":t=>`bootstrap-icons ${t}`},hw={o_:"-outlined",r_:"-round",s_:"-sharp"},dw={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},rC=new RegExp("^("+Object.keys(uw).join("|")+")"),iC=new RegExp("^("+Object.keys(hw).join("|")+")"),ag=new RegExp("^("+Object.keys(dw).join("|")+")"),sC=/^[Mm]\s?[-+]?\.?\d/,oC=/^img:/,aC=/^svguse:/,lC=/^ion-/,cC=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var _i=Xe({name:"QIcon",props:{...Rc,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(t,{slots:e}){const{proxy:{$q:n}}=Ye(),r=Sc(t),i=B(()=>"q-icon"+(t.left===!0?" on-left":"")+(t.right===!0?" on-right":"")+(t.color!==void 0?` text-${t.color}`:"")),s=B(()=>{let o,a=t.name;if(a==="none"||!a)return{none:!0};if(n.iconMapFn!==null){const h=n.iconMapFn(a);if(h!==void 0)if(h.icon!==void 0){if(a=h.icon,a==="none"||!a)return{none:!0}}else return{cls:h.cls,content:h.content!==void 0?h.content:" "}}if(sC.test(a)===!0){const[h,f=sg]=a.split("|");return{svg:!0,viewBox:f,nodes:h.split("&&").map(p=>{const[g,w,C]=p.split("@@");return Q("path",{style:w,d:g,transform:C})})}}if(oC.test(a)===!0)return{img:!0,src:a.substring(4)};if(aC.test(a)===!0){const[h,f=sg]=a.split("|");return{svguse:!0,src:h.substring(7),viewBox:f}}let c=" ";const u=a.match(rC);if(u!==null)o=uw[u[1]](a);else if(cC.test(a)===!0)o=a;else if(lC.test(a)===!0)o=`ionicons ion-${n.platform.is.ios===!0?"ios":"md"}${a.substring(3)}`;else if(ag.test(a)===!0){o="notranslate material-symbols";const h=a.match(ag);h!==null&&(a=a.substring(6),o+=dw[h[1]]),c=a}else{o="notranslate material-icons";const h=a.match(iC);h!==null&&(a=a.substring(2),o+=hw[h[1]]),c=a}return{cls:o,content:c}});return()=>{const o={class:i.value,style:r.value,"aria-hidden":"true",role:"presentation"};return s.value.none===!0?Q(t.tag,o,Dn(e.default)):s.value.img===!0?Q("span",o,rs(e.default,[Q("img",{src:s.value.src})])):s.value.svg===!0?Q("span",o,rs(e.default,[Q("svg",{viewBox:s.value.viewBox||"0 0 24 24"},s.value.nodes)])):s.value.svguse===!0?Q("span",o,rs(e.default,[Q("svg",{viewBox:s.value.viewBox},[Q("use",{"xlink:href":s.value.src})])])):(s.value.cls!==void 0&&(o.class+=" "+s.value.cls),Q(t.tag,o,rs(e.default,[s.value.content])))}}}),kh=Xe({name:"QAvatar",props:{...Rc,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(t,{slots:e}){const n=Sc(t),r=B(()=>"q-avatar"+(t.color?` bg-${t.color}`:"")+(t.textColor?` text-${t.textColor} q-chip--colored`:"")+(t.square===!0?" q-avatar--square":t.rounded===!0?" rounded-borders":"")),i=B(()=>t.fontSize?{fontSize:t.fontSize}:null);return()=>{const s=t.icon!==void 0?[Q(_i,{name:t.icon})]:void 0;return Q("div",{class:r.value,style:n.value},[Q("div",{class:"q-avatar__content row flex-center overflow-hidden",style:i.value},cw(e.default,s))])}}}),uC=Xe({name:"QToolbarTitle",props:{shrink:Boolean},setup(t,{slots:e}){const n=B(()=>"q-toolbar__title ellipsis"+(t.shrink===!0?" col-shrink":""));return()=>Q("div",{class:n.value},Dn(e.default))}});const hC={size:{type:[Number,String],default:"1em"},color:String};function dC(t){return{cSize:B(()=>t.size in Ph?`${Ph[t.size]}px`:t.size),classes:B(()=>"q-spinner"+(t.color?` text-${t.color}`:""))}}var fw=Xe({name:"QSpinner",props:{...hC,thickness:{type:Number,default:5}},setup(t){const{cSize:e,classes:n}=dC(t);return()=>Q("svg",{class:n.value+" q-spinner-mat",width:e.value,height:e.value,viewBox:"25 25 50 50"},[Q("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":t.thickness,"stroke-miterlimit":"10"})])}});function xh(t,e){const n=t.style;for(const r in e)n[r]=e[r]}function fC(t){if(t==null)return;if(typeof t=="string")try{return document.querySelector(t)||void 0}catch{return}const e=qt(t);if(e)return e.$el||e}function pw(t,e){if(t==null||t.contains(e)===!0)return!0;for(let n=t.nextElementSibling;n!==null;n=n.nextElementSibling)if(n.contains(e))return!0;return!1}function pC(t,e=250){let n=!1,r;return function(){return n===!1&&(n=!0,setTimeout(()=>{n=!1},e),r=t.apply(this,arguments)),r}}function lg(t,e,n,r){n.modifiers.stop===!0&&$y(t);const i=n.modifiers.color;let s=n.modifiers.center;s=s===!0||r===!0;const o=document.createElement("span"),a=document.createElement("span"),c=Uy(t),{left:u,top:h,width:f,height:p}=e.getBoundingClientRect(),g=Math.sqrt(f*f+p*p),w=g/2,C=`${(f-g)/2}px`,A=s?C:`${c.left-u-w}px`,x=`${(p-g)/2}px`,k=s?x:`${c.top-h-w}px`;a.className="q-ripple__inner",xh(a,{height:`${g}px`,width:`${g}px`,transform:`translate3d(${A},${k},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${i?" text-"+i:""}`,o.setAttribute("dir","ltr"),o.appendChild(a),e.appendChild(o);const O=()=>{o.remove(),clearTimeout(D)};n.abort.push(O);let D=setTimeout(()=>{a.classList.add("q-ripple__inner--enter"),a.style.transform=`translate3d(${C},${x},0) scale3d(1,1,1)`,a.style.opacity=.2,D=setTimeout(()=>{a.classList.remove("q-ripple__inner--enter"),a.classList.add("q-ripple__inner--leave"),a.style.opacity=0,D=setTimeout(()=>{o.remove(),n.abort.splice(n.abort.indexOf(O),1)},275)},250)},50)}function cg(t,{modifiers:e,value:n,arg:r}){const i=Object.assign({},t.cfg.ripple,e,n);t.modifiers={early:i.early===!0,stop:i.stop===!0,center:i.center===!0,color:i.color||r,keyCodes:[].concat(i.keyCodes||13)}}var mw=aw({name:"ripple",beforeMount(t,e){const n=e.instance.$.appContext.config.globalProperties.$q.config||{};if(n.ripple===!1)return;const r={cfg:n,enabled:e.value!==!1,modifiers:{},abort:[],start(i){r.enabled===!0&&i.qSkipRipple!==!0&&i.type===(r.modifiers.early===!0?"pointerdown":"click")&&lg(i,t,r,i.qKeyEvent===!0)},keystart:pC(i=>{r.enabled===!0&&i.qSkipRipple!==!0&&Ii(i,r.modifiers.keyCodes)===!0&&i.type===`key${r.modifiers.early===!0?"down":"up"}`&&lg(i,t,r,!0)},300)};cg(r,e),t.__qripple=r,Fo(r,"main",[[t,"pointerdown","start","passive"],[t,"click","start","passive"],[t,"keydown","keystart","passive"],[t,"keyup","keystart","passive"]])},updated(t,e){if(e.oldValue!==e.value){const n=t.__qripple;n!==void 0&&(n.enabled=e.value!==!1,n.enabled===!0&&Object(e.value)===e.value&&cg(n,e))}},beforeUnmount(t){const e=t.__qripple;e!==void 0&&(e.abort.forEach(n=>{n()}),Pl(e,"main"),delete t._qripple)}});const gw={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},mC=Object.keys(gw),gC={align:{type:String,validator:t=>mC.includes(t)}};function _C(t){return B(()=>{const e=t.align===void 0?t.vertical===!0?"stretch":"left":t.align;return`${t.vertical===!0?"items":"justify"}-${gw[e]}`})}function il(t){if(Object(t.$parent)===t.$parent)return t.$parent;let{parent:e}=t.$;for(;Object(e)===e;){if(Object(e.proxy)===e.proxy)return e.proxy;e=e.parent}}function _w(t){return t.appContext.config.globalProperties.$router!==void 0}function vw(t){return t.isUnmounted===!0||t.isDeactivated===!0}function ug(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}function hg(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function vC(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(Array.isArray(i)===!1||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function dg(t,e){return Array.isArray(e)===!0?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function yC(t,e){return Array.isArray(t)===!0?dg(t,e):Array.isArray(e)===!0?dg(e,t):t===e}function wC(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(yC(t[n],e[n])===!1)return!1;return!0}const yw={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function ww({fallbackTag:t,useDisableForRouterLinkProps:e=!0}={}){const n=Ye(),{props:r,proxy:i,emit:s}=n,o=_w(n),a=B(()=>r.disable!==!0&&r.href!==void 0),c=B(e===!0?()=>o===!0&&r.disable!==!0&&a.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!=="":()=>o===!0&&a.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!==""),u=B(()=>c.value===!0?k(r.to):null),h=B(()=>u.value!==null),f=B(()=>a.value===!0||h.value===!0),p=B(()=>r.type==="a"||f.value===!0?"a":r.tag||t||"div"),g=B(()=>a.value===!0?{href:r.href,target:r.target}:h.value===!0?{href:u.value.href,target:r.target}:{}),w=B(()=>{if(h.value===!1)return-1;const{matched:V}=u.value,{length:H}=V,b=V[H-1];if(b===void 0)return-1;const y=i.$route.matched;if(y.length===0)return-1;const _=y.findIndex(hg.bind(null,b));if(_>-1)return _;const R=ug(V[H-2]);return H>1&&ug(b)===R&&y[y.length-1].path!==R?y.findIndex(hg.bind(null,V[H-2])):_}),C=B(()=>h.value===!0&&w.value!==-1&&vC(i.$route.params,u.value.params)),A=B(()=>C.value===!0&&w.value===i.$route.matched.length-1&&wC(i.$route.params,u.value.params)),x=B(()=>h.value===!0?A.value===!0?` ${r.exactActiveClass} ${r.activeClass}`:r.exact===!0?"":C.value===!0?` ${r.activeClass}`:"":"");function k(V){try{return i.$router.resolve(V)}catch{}return null}function O(V,{returnRouterError:H,to:b=r.to,replace:y=r.replace}={}){if(r.disable===!0)return V.preventDefault(),Promise.resolve(!1);if(V.metaKey||V.altKey||V.ctrlKey||V.shiftKey||V.button!==void 0&&V.button!==0||r.target==="_blank")return Promise.resolve(!1);V.preventDefault();const _=i.$router[y===!0?"replace":"push"](b);return H===!0?_:_.then(()=>{}).catch(()=>{})}function D(V){if(h.value===!0){const H=b=>O(V,b);s("click",V,H),V.defaultPrevented!==!0&&H()}else s("click",V)}return{hasRouterLink:h,hasHrefLink:a,hasLink:f,linkTag:p,resolvedLink:u,linkIsActive:C,linkIsExactActive:A,linkClass:x,linkAttrs:g,getLink:k,navigateToRouterLink:O,navigateOnClick:D}}const fg={none:0,xs:4,sm:8,md:16,lg:24,xl:32},EC={xs:8,sm:10,md:14,lg:20,xl:24},TC=["button","submit","reset"],bC=/[^\s]\/[^\s]/,IC=["flat","outline","push","unelevated"],AC=(t,e)=>t.flat===!0?"flat":t.outline===!0?"outline":t.push===!0?"push":t.unelevated===!0?"unelevated":e,RC={...Rc,...yw,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...IC.reduce((t,e)=>(t[e]=Boolean)&&t,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...gC.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function SC(t){const e=Sc(t,EC),n=_C(t),{hasRouterLink:r,hasLink:i,linkTag:s,linkAttrs:o,navigateOnClick:a}=ww({fallbackTag:"button"}),c=B(()=>{const A=t.fab===!1&&t.fabMini===!1?e.value:{};return t.padding!==void 0?Object.assign({},A,{padding:t.padding.split(/\s+/).map(x=>x in fg?fg[x]+"px":x).join(" "),minWidth:"0",minHeight:"0"}):A}),u=B(()=>t.rounded===!0||t.fab===!0||t.fabMini===!0),h=B(()=>t.disable!==!0&&t.loading!==!0),f=B(()=>h.value===!0?t.tabindex||0:-1),p=B(()=>AC(t,"standard")),g=B(()=>{const A={tabindex:f.value};return i.value===!0?Object.assign(A,o.value):TC.includes(t.type)===!0&&(A.type=t.type),s.value==="a"?(t.disable===!0?A["aria-disabled"]="true":A.href===void 0&&(A.role="button"),r.value!==!0&&bC.test(t.type)===!0&&(A.type=t.type)):t.disable===!0&&(A.disabled="",A["aria-disabled"]="true"),t.loading===!0&&t.percentage!==void 0&&Object.assign(A,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":t.percentage}),A}),w=B(()=>{let A;t.color!==void 0?t.flat===!0||t.outline===!0?A=`text-${t.textColor||t.color}`:A=`bg-${t.color} text-${t.textColor||"white"}`:t.textColor&&(A=`text-${t.textColor}`);const x=t.round===!0?"round":`rectangle${u.value===!0?" q-btn--rounded":t.square===!0?" q-btn--square":""}`;return`q-btn--${p.value} q-btn--${x}`+(A!==void 0?" "+A:"")+(h.value===!0?" q-btn--actionable q-focusable q-hoverable":t.disable===!0?" disabled":"")+(t.fab===!0?" q-btn--fab":t.fabMini===!0?" q-btn--fab-mini":"")+(t.noCaps===!0?" q-btn--no-uppercase":"")+(t.dense===!0?" q-btn--dense":"")+(t.stretch===!0?" no-border-radius self-stretch":"")+(t.glossy===!0?" glossy":"")+(t.square?" q-btn--square":"")}),C=B(()=>n.value+(t.stack===!0?" column":" row")+(t.noWrap===!0?" no-wrap text-no-wrap":"")+(t.loading===!0?" q-btn__content--hidden":""));return{classes:w,style:c,innerClasses:C,attributes:g,hasLink:i,linkTag:s,navigateOnClick:a,isActionable:h}}const{passiveCapture:cn}=ut;let Wi=null,Ki=null,Gi=null;var ui=Xe({name:"QBtn",props:{...RC,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(t,{slots:e,emit:n}){const{proxy:r}=Ye(),{classes:i,style:s,innerClasses:o,attributes:a,hasLink:c,linkTag:u,navigateOnClick:h,isActionable:f}=SC(t),p=Te(null),g=Te(null);let w=null,C,A=null;const x=B(()=>t.label!==void 0&&t.label!==null&&t.label!==""),k=B(()=>t.disable===!0||t.ripple===!1?!1:{keyCodes:c.value===!0?[13,32]:[13],...t.ripple===!0?{}:t.ripple}),O=B(()=>({center:t.round})),D=B(()=>{const G=Math.max(0,Math.min(100,t.percentage));return G>0?{transition:"transform 0.6s",transform:`translateX(${G-100}%)`}:{}}),V=B(()=>{if(t.loading===!0)return{onMousedown:E,onTouchstart:E,onClick:E,onKeydown:E,onKeyup:E};if(f.value===!0){const G={onClick:b,onKeydown:y,onMousedown:R};if(r.$q.platform.has.touch===!0){const oe=t.onTouchstart!==void 0?"":"Passive";G[`onTouchstart${oe}`]=_}return G}return{onClick:Tn}}),H=B(()=>({ref:p,class:"q-btn q-btn-item non-selectable no-outline "+i.value,style:s.value,...a.value,...V.value}));function b(G){if(p.value!==null){if(G!==void 0){if(G.defaultPrevented===!0)return;const oe=document.activeElement;if(t.type==="submit"&&oe!==document.body&&p.value.contains(oe)===!1&&oe.contains(p.value)===!1){p.value.focus();const se=()=>{document.removeEventListener("keydown",Tn,!0),document.removeEventListener("keyup",se,cn),p.value!==null&&p.value.removeEventListener("blur",se,cn)};document.addEventListener("keydown",Tn,!0),document.addEventListener("keyup",se,cn),p.value.addEventListener("blur",se,cn)}}h(G)}}function y(G){p.value!==null&&(n("keydown",G),Ii(G,[13,32])===!0&&Ki!==p.value&&(Ki!==null&&S(),G.defaultPrevented!==!0&&(p.value.focus(),Ki=p.value,p.value.classList.add("q-btn--active"),document.addEventListener("keyup",T,!0),p.value.addEventListener("blur",T,cn)),Tn(G)))}function _(G){p.value!==null&&(n("touchstart",G),G.defaultPrevented!==!0&&(Wi!==p.value&&(Wi!==null&&S(),Wi=p.value,w=G.target,w.addEventListener("touchcancel",T,cn),w.addEventListener("touchend",T,cn)),C=!0,A!==null&&clearTimeout(A),A=setTimeout(()=>{A=null,C=!1},200)))}function R(G){p.value!==null&&(G.qSkipRipple=C===!0,n("mousedown",G),G.defaultPrevented!==!0&&Gi!==p.value&&(Gi!==null&&S(),Gi=p.value,p.value.classList.add("q-btn--active"),document.addEventListener("mouseup",T,cn)))}function T(G){if(p.value!==null&&!(G!==void 0&&G.type==="blur"&&document.activeElement===p.value)){if(G!==void 0&&G.type==="keyup"){if(Ki===p.value&&Ii(G,[13,32])===!0){const oe=new MouseEvent("click",G);oe.qKeyEvent=!0,G.defaultPrevented===!0&&Mo(oe),G.cancelBubble===!0&&$y(oe),p.value.dispatchEvent(oe),Tn(G),G.qKeyEvent=!0}n("keyup",G)}S()}}function S(G){const oe=g.value;G!==!0&&(Wi===p.value||Gi===p.value)&&oe!==null&&oe!==document.activeElement&&(oe.setAttribute("tabindex",-1),oe.focus()),Wi===p.value&&(w!==null&&(w.removeEventListener("touchcancel",T,cn),w.removeEventListener("touchend",T,cn)),Wi=w=null),Gi===p.value&&(document.removeEventListener("mouseup",T,cn),Gi=null),Ki===p.value&&(document.removeEventListener("keyup",T,!0),p.value!==null&&p.value.removeEventListener("blur",T,cn),Ki=null),p.value!==null&&p.value.classList.remove("q-btn--active")}function E(G){Tn(G),G.qSkipRipple=!0}return It(()=>{S(!0)}),Object.assign(r,{click:b}),()=>{let G=[];t.icon!==void 0&&G.push(Q(_i,{name:t.icon,left:t.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"})),x.value===!0&&G.push(Q("span",{class:"block"},[t.label])),G=rs(e.default,G),t.iconRight!==void 0&&t.round===!1&&G.push(Q(_i,{name:t.iconRight,right:t.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"}));const oe=[Q("span",{class:"q-focus-helper",ref:g})];return t.loading===!0&&t.percentage!==void 0&&oe.push(Q("span",{class:"q-btn__progress absolute-full overflow-hidden"+(t.darkPercentage===!0?" q-btn__progress--dark":"")},[Q("span",{class:"q-btn__progress-indicator fit block",style:D.value})])),oe.push(Q("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+o.value},G)),t.loading!==null&&oe.push(Q(Vo,{name:"q-transition--fade"},()=>t.loading===!0?[Q("span",{key:"loading",class:"absolute-full flex flex-center"},e.loading!==void 0?e.loading():[Q(fw)])]:null)),as(Q(u.value,H.value,oe),[[mw,k.value,void 0,O.value]])}}});const CC=Q("div",{class:"q-space"});var PC=Xe({name:"QSpace",setup(){return()=>CC}});const xs={dark:{type:Boolean,default:null}};function Os(t,e){return B(()=>t.dark===null?e.dark.isActive:t.dark)}const kC={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},$u={xs:2,sm:4,md:8,lg:16,xl:24};var xC=Xe({name:"QSeparator",props:{...xs,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(t){const e=Ye(),n=Os(t,e.proxy.$q),r=B(()=>t.vertical===!0?"vertical":"horizontal"),i=B(()=>` q-separator--${r.value}`),s=B(()=>t.inset!==!1?`${i.value}-${kC[t.inset]}`:""),o=B(()=>`q-separator${i.value}${s.value}`+(t.color!==void 0?` bg-${t.color}`:"")+(n.value===!0?" q-separator--dark":"")),a=B(()=>{const c={};if(t.size!==void 0&&(c[t.vertical===!0?"width":"height"]=t.size),t.spaced!==!1){const u=t.spaced===!0?`${$u.md}px`:t.spaced in $u?`${$u[t.spaced]}px`:t.spaced,h=t.vertical===!0?["Left","Right"]:["Top","Bottom"];c[`margin${h[0]}`]=c[`margin${h[1]}`]=u}return c});return()=>Q("hr",{class:o.value,style:a.value,"aria-orientation":r.value})}}),qu=Xe({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(t,{slots:e}){const n=B(()=>`q-item__section column q-item__section--${t.avatar===!0||t.side===!0||t.thumbnail===!0?"side":"main"}`+(t.top===!0?" q-item__section--top justify-start":" justify-center")+(t.avatar===!0?" q-item__section--avatar":"")+(t.thumbnail===!0?" q-item__section--thumbnail":"")+(t.noWrap===!0?" q-item__section--nowrap":""));return()=>Q("div",{class:n.value},Dn(e.default))}}),Bu=Xe({name:"QItem",props:{...xs,...yw,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(t,{slots:e,emit:n}){const{proxy:{$q:r}}=Ye(),i=Os(t,r),{hasLink:s,linkAttrs:o,linkClass:a,linkTag:c,navigateOnClick:u}=ww(),h=Te(null),f=Te(null),p=B(()=>t.clickable===!0||s.value===!0||t.tag==="label"),g=B(()=>t.disable!==!0&&p.value===!0),w=B(()=>"q-item q-item-type row no-wrap"+(t.dense===!0?" q-item--dense":"")+(i.value===!0?" q-item--dark":"")+(s.value===!0&&t.active===null?a.value:t.active===!0?` q-item--active${t.activeClass!==void 0?` ${t.activeClass}`:""}`:"")+(t.disable===!0?" disabled":"")+(g.value===!0?" q-item--clickable q-link cursor-pointer "+(t.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(t.focused===!0?" q-manual-focusable--focused":""):"")),C=B(()=>{if(t.insetLevel===void 0)return null;const O=r.lang.rtl===!0?"Right":"Left";return{["padding"+O]:16+t.insetLevel*56+"px"}});function A(O){g.value===!0&&(f.value!==null&&(O.qKeyEvent!==!0&&document.activeElement===h.value?f.value.focus():document.activeElement===f.value&&h.value.focus()),u(O))}function x(O){if(g.value===!0&&Ii(O,13)===!0){Tn(O),O.qKeyEvent=!0;const D=new MouseEvent("click",O);D.qKeyEvent=!0,h.value.dispatchEvent(D)}n("keyup",O)}function k(){const O=lw(e.default,[]);return g.value===!0&&O.unshift(Q("div",{class:"q-focus-helper",tabindex:-1,ref:f})),O}return()=>{const O={ref:h,class:w.value,style:C.value,role:"listitem",onClick:A,onKeyup:x};return g.value===!0?(O.tabindex=t.tabindex||"0",Object.assign(O,o.value)):p.value===!0&&(O["aria-disabled"]="true"),Q(c.value,O,k())}}}),OC=Xe({name:"QList",props:{...xs,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(t,{slots:e}){const n=Ye(),r=Os(t,n.proxy.$q),i=B(()=>"q-list"+(t.bordered===!0?" q-list--bordered":"")+(t.dense===!0?" q-list--dense":"")+(t.separator===!0?" q-list--separator":"")+(r.value===!0?" q-list--dark":"")+(t.padding===!0?" q-list--padding":""));return()=>Q(t.tag,{class:i.value},Dn(e.default))}});function Oh(){if(window.getSelection!==void 0){const t=window.getSelection();t.empty!==void 0?t.empty():t.removeAllRanges!==void 0&&(t.removeAllRanges(),Cl.is.mobile!==!0&&t.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const Ew={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function Tw({showing:t,avoidEmit:e,configureAnchorEl:n}){const{props:r,proxy:i,emit:s}=Ye(),o=Te(null);let a=null;function c(g){return o.value===null?!1:g===void 0||g.touches===void 0||g.touches.length<=1}const u={};n===void 0&&(Object.assign(u,{hide(g){i.hide(g)},toggle(g){i.toggle(g),g.qAnchorHandled=!0},toggleKey(g){Ii(g,13)===!0&&u.toggle(g)},contextClick(g){i.hide(g),Mo(g),on(()=>{i.show(g),g.qAnchorHandled=!0})},prevent:Mo,mobileTouch(g){if(u.mobileCleanup(g),c(g)!==!0)return;i.hide(g),o.value.classList.add("non-selectable");const w=g.target;Fo(u,"anchor",[[w,"touchmove","mobileCleanup","passive"],[w,"touchend","mobileCleanup","passive"],[w,"touchcancel","mobileCleanup","passive"],[o.value,"contextmenu","prevent","notPassive"]]),a=setTimeout(()=>{a=null,i.show(g),g.qAnchorHandled=!0},300)},mobileCleanup(g){o.value.classList.remove("non-selectable"),a!==null&&(clearTimeout(a),a=null),t.value===!0&&g!==void 0&&Oh()}}),n=function(g=r.contextMenu){if(r.noParentEvent===!0||o.value===null)return;let w;g===!0?i.$q.platform.is.mobile===!0?w=[[o.value,"touchstart","mobileTouch","passive"]]:w=[[o.value,"mousedown","hide","passive"],[o.value,"contextmenu","contextClick","notPassive"]]:w=[[o.value,"click","toggle","passive"],[o.value,"keyup","toggleKey","passive"]],Fo(u,"anchor",w)});function h(){Pl(u,"anchor")}function f(g){for(o.value=g;o.value.classList.contains("q-anchor--skip");)o.value=o.value.parentNode;n()}function p(){if(r.target===!1||r.target===""||i.$el.parentNode===null)o.value=null;else if(r.target===!0)f(i.$el.parentNode);else{let g=r.target;if(typeof r.target=="string")try{g=document.querySelector(r.target)}catch{g=void 0}g!=null?(o.value=g.$el||g,n()):(o.value=null,console.error(`Anchor: target "${r.target}" not found`))}}return Me(()=>r.contextMenu,g=>{o.value!==null&&(h(),n(g))}),Me(()=>r.target,()=>{o.value!==null&&h(),p()}),Me(()=>r.noParentEvent,g=>{o.value!==null&&(g===!0?h():n())}),zn(()=>{p(),e!==!0&&r.modelValue===!0&&o.value===null&&s("update:modelValue",!1)}),It(()=>{a!==null&&clearTimeout(a),h()}),{anchorEl:o,canShow:c,anchorEvents:u}}function bw(t,e){const n=Te(null);let r;function i(a,c){const u=`${c!==void 0?"add":"remove"}EventListener`,h=c!==void 0?c:r;a!==window&&a[u]("scroll",h,ut.passive),window[u]("scroll",h,ut.passive),r=c}function s(){n.value!==null&&(i(n.value),n.value=null)}const o=Me(()=>t.noParentEvent,()=>{n.value!==null&&(s(),e())});return It(o),{localScrollTarget:n,unconfigureScrollTarget:s,changeScrollEvent:i}}const Ld={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Vd=["beforeShow","show","beforeHide","hide"];function Md({showing:t,canShow:e,hideOnRouteChange:n,handleShow:r,handleHide:i,processOnMount:s}){const o=Ye(),{props:a,emit:c,proxy:u}=o;let h;function f(k){t.value===!0?w(k):p(k)}function p(k){if(a.disable===!0||k!==void 0&&k.qAnchorHandled===!0||e!==void 0&&e(k)!==!0)return;const O=a["onUpdate:modelValue"]!==void 0;O===!0&&(c("update:modelValue",!0),h=k,on(()=>{h===k&&(h=void 0)})),(a.modelValue===null||O===!1)&&g(k)}function g(k){t.value!==!0&&(t.value=!0,c("beforeShow",k),r!==void 0?r(k):c("show",k))}function w(k){if(a.disable===!0)return;const O=a["onUpdate:modelValue"]!==void 0;O===!0&&(c("update:modelValue",!1),h=k,on(()=>{h===k&&(h=void 0)})),(a.modelValue===null||O===!1)&&C(k)}function C(k){t.value!==!1&&(t.value=!1,c("beforeHide",k),i!==void 0?i(k):c("hide",k))}function A(k){a.disable===!0&&k===!0?a["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):k===!0!==t.value&&(k===!0?g:C)(h)}Me(()=>a.modelValue,A),n!==void 0&&_w(o)===!0&&Me(()=>u.$route.fullPath,()=>{n.value===!0&&t.value===!0&&w()}),s===!0&&zn(()=>{A(a.modelValue)});const x={show:p,hide:w,toggle:f};return Object.assign(u,x),x}let hi=[],$o=[];function Iw(t){$o=$o.filter(e=>e!==t)}function DC(t){Iw(t),$o.push(t)}function pg(t){Iw(t),$o.length===0&&hi.length!==0&&(hi[hi.length-1](),hi=[])}function Aw(t){$o.length===0?t():hi.push(t)}function fU(t){hi=hi.filter(e=>e!==t)}let NC=1,LC=document.body;function Fd(t,e){const n=document.createElement("div");if(n.id=e!==void 0?`q-portal--${e}--${NC++}`:t,xl.globalNodes!==void 0){const r=xl.globalNodes.class;r!==void 0&&(n.className=r)}return LC.appendChild(n),n}function VC(t){t.remove()}const hs=[];function MC(t){return hs.find(e=>e.contentEl!==null&&e.contentEl.contains(t))}function Rw(t,e){do{if(t.$options.name==="QMenu"){if(t.hide(e),t.$props.separateClosePopup===!0)return il(t)}else if(t.__qPortal===!0){const n=il(t);return n!==void 0&&n.$options.name==="QPopupProxy"?(t.hide(e),n):t}t=il(t)}while(t!=null)}function FC(t,e,n){for(;n!==0&&t!==void 0&&t!==null;){if(t.__qPortal===!0){if(n--,t.$options.name==="QMenu"){t=Rw(t,e);continue}t.hide(e)}t=il(t)}}function UC(t){for(t=t.parent;t!=null;){if(t.type.name==="QGlobalDialog")return!0;if(t.type.name==="QDialog"||t.type.name==="QMenu")return!1;t=t.parent}return!1}function Ud(t,e,n,r){const i=Te(!1),s=Te(!1);let o=null;const a={},c=r==="dialog"&&UC(t);function u(f){if(f===!0){pg(a),s.value=!0;return}s.value=!1,i.value===!1&&(c===!1&&o===null&&(o=Fd(!1,r)),i.value=!0,hs.push(t.proxy),DC(a))}function h(f){if(s.value=!1,f!==!0)return;pg(a),i.value=!1;const p=hs.indexOf(t.proxy);p!==-1&&hs.splice(p,1),o!==null&&(VC(o),o=null)}return _c(()=>{h(!0)}),t.proxy.__qPortal=!0,Ec(t.proxy,"contentEl",()=>e.value),{showPortal:u,hidePortal:h,portalIsActive:i,portalIsAccessible:s,renderPortal:()=>c===!0?n():i.value===!0?[Q(NI,{to:o},n())]:void 0}}const $d={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function qd(t,e=()=>{},n=()=>{}){return{transitionProps:B(()=>{const r=`q-transition--${t.transitionShow||e()}`,i=`q-transition--${t.transitionHide||n()}`;return{appear:!0,enterFromClass:`${r}-enter-from`,enterActiveClass:`${r}-enter-active`,enterToClass:`${r}-enter-to`,leaveFromClass:`${i}-leave-from`,leaveActiveClass:`${i}-leave-active`,leaveToClass:`${i}-leave-to`}}),transitionStyle:B(()=>`--q-transition-duration: ${t.transitionDuration}ms`)}}function Bd(){let t;const e=Ye();function n(){t=void 0}return Ad(n),It(n),{removeTick:n,registerTick(r){t=r,on(()=>{t===r&&(vw(e)===!1&&t(),t=void 0)})}}}function jd(){let t=null;const e=Ye();function n(){t!==null&&(clearTimeout(t),t=null)}return Ad(n),It(n),{removeTimeout:n,registerTimeout(r,i){n(),vw(e)===!1&&(t=setTimeout(r,i))}}}const $C=[null,document,document.body,document.scrollingElement,document.documentElement];function Hd(t,e){let n=fC(e);if(n===void 0){if(t==null)return window;n=t.closest(".scroll,.scroll-y,.overflow-auto")}return $C.includes(n)?window:n}function Sw(t){return t===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:t.scrollTop}function Cw(t){return t===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:t.scrollLeft}let $a;function sl(){if($a!==void 0)return $a;const t=document.createElement("p"),e=document.createElement("div");xh(t,{width:"100%",height:"200px"}),xh(e,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),e.appendChild(t),document.body.appendChild(e);const n=t.offsetWidth;e.style.overflow="scroll";let r=t.offsetWidth;return n===r&&(r=e.clientWidth),e.remove(),$a=n-r,$a}function qC(t,e=!0){return!t||t.nodeType!==Node.ELEMENT_NODE?!1:e?t.scrollHeight>t.clientHeight&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-y"])):t.scrollWidth>t.clientWidth&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-x"]))}const vi=[];let Ts;function BC(t){Ts=t.keyCode===27}function jC(){Ts===!0&&(Ts=!1)}function HC(t){Ts===!0&&(Ts=!1,Ii(t,27)===!0&&vi[vi.length-1](t))}function Pw(t){window[t]("keydown",BC),window[t]("blur",jC),window[t]("keyup",HC),Ts=!1}function kw(t){at.is.desktop===!0&&(vi.push(t),vi.length===1&&Pw("addEventListener"))}function Dl(t){const e=vi.indexOf(t);e>-1&&(vi.splice(e,1),vi.length===0&&Pw("removeEventListener"))}const yi=[];function xw(t){yi[yi.length-1](t)}function Ow(t){at.is.desktop===!0&&(yi.push(t),yi.length===1&&document.body.addEventListener("focusin",xw))}function Dh(t){const e=yi.indexOf(t);e>-1&&(yi.splice(e,1),yi.length===0&&document.body.removeEventListener("focusin",xw))}const{notPassiveCapture:Nl}=ut,wi=[];function Ll(t){const e=t.target;if(e===void 0||e.nodeType===8||e.classList.contains("no-pointer-events")===!0)return;let n=hs.length-1;for(;n>=0;){const r=hs[n].$;if(r.type.name!=="QDialog")break;if(r.props.seamless!==!0)return;n--}for(let r=wi.length-1;r>=0;r--){const i=wi[r];if((i.anchorEl.value===null||i.anchorEl.value.contains(e)===!1)&&(e===document.body||i.innerRef.value!==null&&i.innerRef.value.contains(e)===!1))t.qClickOutside=!0,i.onClickOutside(t);else return}}function Dw(t){wi.push(t),wi.length===1&&(document.addEventListener("mousedown",Ll,Nl),document.addEventListener("touchstart",Ll,Nl))}function Vl(t){const e=wi.findIndex(n=>n===t);e>-1&&(wi.splice(e,1),wi.length===0&&(document.removeEventListener("mousedown",Ll,Nl),document.removeEventListener("touchstart",Ll,Nl)))}let mg,gg;function Ml(t){const e=t.split(" ");return e.length!==2?!1:["top","center","bottom"].includes(e[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(e[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Nw(t){return t?!(t.length!==2||typeof t[0]!="number"||typeof t[1]!="number"):!0}const Nh={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(t=>{Nh[`${t}#ltr`]=t,Nh[`${t}#rtl`]=t});function Fl(t,e){const n=t.split(" ");return{vertical:n[0],horizontal:Nh[`${n[1]}#${e===!0?"rtl":"ltr"}`]}}function zC(t,e){let{top:n,left:r,right:i,bottom:s,width:o,height:a}=t.getBoundingClientRect();return e!==void 0&&(n-=e[1],r-=e[0],s+=e[1],i+=e[0],o+=e[0],a+=e[1]),{top:n,bottom:s,height:a,left:r,right:i,width:o,middle:r+(i-r)/2,center:n+(s-n)/2}}function WC(t,e,n){let{top:r,left:i}=t.getBoundingClientRect();return r+=e.top,i+=e.left,n!==void 0&&(r+=n[1],i+=n[0]),{top:r,bottom:r+1,height:1,left:i,right:i+1,width:1,middle:i,center:r}}function KC(t){return{top:0,center:t.offsetHeight/2,bottom:t.offsetHeight,left:0,middle:t.offsetWidth/2,right:t.offsetWidth}}function _g(t,e,n){return{top:t[n.anchorOrigin.vertical]-e[n.selfOrigin.vertical],left:t[n.anchorOrigin.horizontal]-e[n.selfOrigin.horizontal]}}function Lw(t){if(at.is.ios===!0&&window.visualViewport!==void 0){const a=document.body.style,{offsetLeft:c,offsetTop:u}=window.visualViewport;c!==mg&&(a.setProperty("--q-pe-left",c+"px"),mg=c),u!==gg&&(a.setProperty("--q-pe-top",u+"px"),gg=u)}const{scrollLeft:e,scrollTop:n}=t.el,r=t.absoluteOffset===void 0?zC(t.anchorEl,t.cover===!0?[0,0]:t.offset):WC(t.anchorEl,t.absoluteOffset,t.offset);let i={maxHeight:t.maxHeight,maxWidth:t.maxWidth,visibility:"visible"};(t.fit===!0||t.cover===!0)&&(i.minWidth=r.width+"px",t.cover===!0&&(i.minHeight=r.height+"px")),Object.assign(t.el.style,i);const s=KC(t.el);let o=_g(r,s,t);if(t.absoluteOffset===void 0||t.offset===void 0)ju(o,r,s,t.anchorOrigin,t.selfOrigin);else{const{top:a,left:c}=o;ju(o,r,s,t.anchorOrigin,t.selfOrigin);let u=!1;if(o.top!==a){u=!0;const h=2*t.offset[1];r.center=r.top-=h,r.bottom-=h+2}if(o.left!==c){u=!0;const h=2*t.offset[0];r.middle=r.left-=h,r.right-=h+2}u===!0&&(o=_g(r,s,t),ju(o,r,s,t.anchorOrigin,t.selfOrigin))}i={top:o.top+"px",left:o.left+"px"},o.maxHeight!==void 0&&(i.maxHeight=o.maxHeight+"px",r.height>o.maxHeight&&(i.minHeight=i.maxHeight)),o.maxWidth!==void 0&&(i.maxWidth=o.maxWidth+"px",r.width>o.maxWidth&&(i.minWidth=i.maxWidth)),Object.assign(t.el.style,i),t.el.scrollTop!==n&&(t.el.scrollTop=n),t.el.scrollLeft!==e&&(t.el.scrollLeft=e)}function ju(t,e,n,r,i){const s=n.bottom,o=n.right,a=sl(),c=window.innerHeight-a,u=document.body.clientWidth;if(t.top<0||t.top+s>c)if(i.vertical==="center")t.top=e[r.vertical]>c/2?Math.max(0,c-s):0,t.maxHeight=Math.min(s,c);else if(e[r.vertical]>c/2){const h=Math.min(c,r.vertical==="center"?e.center:r.vertical===i.vertical?e.bottom:e.top);t.maxHeight=Math.min(s,h),t.top=Math.max(0,h-s)}else t.top=Math.max(0,r.vertical==="center"?e.center:r.vertical===i.vertical?e.top:e.bottom),t.maxHeight=Math.min(s,c-t.top);if(t.left<0||t.left+o>u)if(t.maxWidth=Math.min(o,u),i.horizontal==="middle")t.left=e[r.horizontal]>u/2?Math.max(0,u-o):0;else if(e[r.horizontal]>u/2){const h=Math.min(u,r.horizontal==="middle"?e.middle:r.horizontal===i.horizontal?e.right:e.left);t.maxWidth=Math.min(o,h),t.left=Math.max(0,h-t.maxWidth)}else t.left=Math.max(0,r.horizontal==="middle"?e.middle:r.horizontal===i.horizontal?e.left:e.right),t.maxWidth=Math.min(o,u-t.left)}var GC=Xe({name:"QMenu",inheritAttrs:!1,props:{...Ew,...Ld,...xs,...$d,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:Ml},self:{type:String,validator:Ml},offset:{type:Array,validator:Nw},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Vd,"click","escapeKey"],setup(t,{slots:e,emit:n,attrs:r}){let i=null,s,o,a;const c=Ye(),{proxy:u}=c,{$q:h}=u,f=Te(null),p=Te(!1),g=B(()=>t.persistent!==!0&&t.noRouteDismiss!==!0),w=Os(t,h),{registerTick:C,removeTick:A}=Bd(),{registerTimeout:x}=jd(),{transitionProps:k,transitionStyle:O}=qd(t),{localScrollTarget:D,changeScrollEvent:V,unconfigureScrollTarget:H}=bw(t,de),{anchorEl:b,canShow:y}=Tw({showing:p}),{hide:_}=Md({showing:p,canShow:y,handleShow:Ze,handleHide:st,hideOnRouteChange:g,processOnMount:!0}),{showPortal:R,hidePortal:T,renderPortal:S}=Ud(c,f,Z,"menu"),E={anchorEl:b,innerRef:f,onClickOutside(U){if(t.persistent!==!0&&p.value===!0)return _(U),(U.type==="touchstart"||U.target.classList.contains("q-dialog__backdrop"))&&Tn(U),!0}},G=B(()=>Fl(t.anchor||(t.cover===!0?"center middle":"bottom start"),h.lang.rtl)),oe=B(()=>t.cover===!0?G.value:Fl(t.self||"top start",h.lang.rtl)),se=B(()=>(t.square===!0?" q-menu--square":"")+(w.value===!0?" q-menu--dark q-dark":"")),_e=B(()=>t.autoClose===!0?{onClick:vt}:{}),he=B(()=>p.value===!0&&t.persistent!==!0);Me(he,U=>{U===!0?(kw(Ae),Dw(E)):(Dl(Ae),Vl(E))});function Be(){Aw(()=>{let U=f.value;U&&U.contains(document.activeElement)!==!0&&(U=U.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||U.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||U.querySelector("[autofocus], [data-autofocus]")||U,U.focus({preventScroll:!0}))})}function Ze(U){if(i=t.noRefocus===!1?document.activeElement:null,Ow(ce),R(),de(),s=void 0,U!==void 0&&(t.touchPosition||t.contextMenu)){const re=Uy(U);if(re.left!==void 0){const{top:Re,left:Ue}=b.value.getBoundingClientRect();s={left:re.left-Ue,top:re.top-Re}}}o===void 0&&(o=Me(()=>h.screen.width+"|"+h.screen.height+"|"+t.self+"|"+t.anchor+"|"+h.lang.rtl,F)),t.noFocus!==!0&&document.activeElement.blur(),C(()=>{F(),t.noFocus!==!0&&Be()}),x(()=>{h.platform.is.ios===!0&&(a=t.autoClose,f.value.click()),F(),R(!0),n("show",U)},t.transitionDuration)}function st(U){A(),T(),De(!0),i!==null&&(U===void 0||U.qClickOutside!==!0)&&(((U&&U.type.indexOf("key")===0?i.closest('[tabindex]:not([tabindex^="-"])'):void 0)||i).focus(),i=null),x(()=>{T(!0),n("hide",U)},t.transitionDuration)}function De(U){s=void 0,o!==void 0&&(o(),o=void 0),(U===!0||p.value===!0)&&(Dh(ce),H(),Vl(E),Dl(Ae)),U!==!0&&(i=null)}function de(){(b.value!==null||t.scrollTarget!==void 0)&&(D.value=Hd(b.value,t.scrollTarget),V(D.value,F))}function vt(U){a!==!0?(Rw(u,U),n("click",U)):a=!1}function ce(U){he.value===!0&&t.noFocus!==!0&&pw(f.value,U.target)!==!0&&Be()}function Ae(U){n("escapeKey"),_(U)}function F(){const U=f.value;U===null||b.value===null||Lw({el:U,offset:t.offset,anchorEl:b.value,anchorOrigin:G.value,selfOrigin:oe.value,absoluteOffset:s,fit:t.fit,cover:t.cover,maxHeight:t.maxHeight,maxWidth:t.maxWidth})}function Z(){return Q(Vo,k.value,()=>p.value===!0?Q("div",{role:"menu",...r,ref:f,tabindex:-1,class:["q-menu q-position-engine scroll"+se.value,r.class],style:[r.style,O.value],..._e.value},Dn(e.default)):null)}return It(De),Object.assign(u,{focus:Be,updatePosition:F}),S}}),QC=Xe({name:"QToolbar",props:{inset:Boolean},setup(t,{slots:e}){const n=B(()=>"q-toolbar row no-wrap items-center"+(t.inset===!0?" q-toolbar--inset":""));return()=>Q("div",{class:n.value,role:"toolbar"},Dn(e.default))}});function JC(){const t=Te(!or.value);return t.value===!1&&zn(()=>{t.value=!0}),t}const Vw=typeof ResizeObserver!="undefined",vg=Vw===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Lh=Xe({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(t,{emit:e}){let n=null,r,i={width:-1,height:-1};function s(c){c===!0||t.debounce===0||t.debounce==="0"?o():n===null&&(n=setTimeout(o,t.debounce))}function o(){if(n!==null&&(clearTimeout(n),n=null),r){const{offsetWidth:c,offsetHeight:u}=r;(c!==i.width||u!==i.height)&&(i={width:c,height:u},e("resize",i))}}const{proxy:a}=Ye();if(Vw===!0){let c;const u=h=>{r=a.$el.parentNode,r?(c=new ResizeObserver(s),c.observe(r),o()):h!==!0&&on(()=>{u(!0)})};return zn(()=>{u()}),It(()=>{n!==null&&clearTimeout(n),c!==void 0&&(c.disconnect!==void 0?c.disconnect():r&&c.unobserve(r))}),In}else{let h=function(){n!==null&&(clearTimeout(n),n=null),u!==void 0&&(u.removeEventListener!==void 0&&u.removeEventListener("resize",s,ut.passive),u=void 0)},f=function(){h(),r&&r.contentDocument&&(u=r.contentDocument.defaultView,u.addEventListener("resize",s,ut.passive),o())};const c=JC();let u;return zn(()=>{on(()=>{r=a.$el,r&&f()})}),It(h),a.trigger=s,()=>{if(c.value===!0)return Q("object",{style:vg.style,tabindex:-1,type:"text/html",data:vg.url,"aria-hidden":"true",onLoad:f})}}}}),YC=Xe({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:e,emit:n}){const{proxy:{$q:r}}=Ye(),i=zt(Od,us);if(i===us)return console.error("QHeader needs to be child of QLayout"),us;const s=Te(parseInt(t.heightHint,10)),o=Te(!0),a=B(()=>t.reveal===!0||i.view.value.indexOf("H")>-1||r.platform.is.ios&&i.isContainer.value===!0),c=B(()=>{if(t.modelValue!==!0)return 0;if(a.value===!0)return o.value===!0?s.value:0;const k=s.value-i.scroll.value.position;return k>0?k:0}),u=B(()=>t.modelValue!==!0||a.value===!0&&o.value!==!0),h=B(()=>t.modelValue===!0&&u.value===!0&&t.reveal===!0),f=B(()=>"q-header q-layout__section--marginal "+(a.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(u.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),p=B(()=>{const k=i.rows.value.top,O={};return k[0]==="l"&&i.left.space===!0&&(O[r.lang.rtl===!0?"right":"left"]=`${i.left.size}px`),k[2]==="r"&&i.right.space===!0&&(O[r.lang.rtl===!0?"left":"right"]=`${i.right.size}px`),O});function g(k,O){i.update("header",k,O)}function w(k,O){k.value!==O&&(k.value=O)}function C({height:k}){w(s,k),g("size",k)}function A(k){h.value===!0&&w(o,!0),n("focusin",k)}Me(()=>t.modelValue,k=>{g("space",k),w(o,!0),i.animate()}),Me(c,k=>{g("offset",k)}),Me(()=>t.reveal,k=>{k===!1&&w(o,t.modelValue)}),Me(o,k=>{i.animate(),n("reveal",k)}),Me(i.scroll,k=>{t.reveal===!0&&w(o,k.direction==="up"||k.position<=t.revealOffset||k.position-k.inflectionPoint<100)});const x={};return i.instances.header=x,t.modelValue===!0&&g("size",s.value),g("space",t.modelValue),g("offset",c.value),It(()=>{i.instances.header===x&&(i.instances.header=void 0,g("size",0),g("offset",0),g("space",!1))}),()=>{const k=lw(e.default,[]);return t.elevated===!0&&k.push(Q("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),k.push(Q(Lh,{debounce:0,onResize:C})),Q("header",{class:f.value,style:p.value,onFocusin:A},k)}}}),XC=Xe({name:"QPageContainer",setup(t,{slots:e}){const{proxy:{$q:n}}=Ye(),r=zt(Od,us);if(r===us)return console.error("QPageContainer needs to be child of QLayout"),us;cs(MR,!0);const i=B(()=>{const s={};return r.header.space===!0&&(s.paddingTop=`${r.header.size}px`),r.right.space===!0&&(s[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${r.right.size}px`),r.footer.space===!0&&(s.paddingBottom=`${r.footer.size}px`),r.left.space===!0&&(s[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${r.left.size}px`),s});return()=>Q("div",{class:"q-page-container",style:i.value},Dn(e.default))}});const{passive:yg}=ut,ZC=["both","horizontal","vertical"];var eP=Xe({name:"QScrollObserver",props:{axis:{type:String,validator:t=>ZC.includes(t),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(t,{emit:e}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let r=null,i,s;Me(()=>t.scrollTarget,()=>{c(),a()});function o(){r!==null&&r();const f=Math.max(0,Sw(i)),p=Cw(i),g={top:f-n.position.top,left:p-n.position.left};if(t.axis==="vertical"&&g.top===0||t.axis==="horizontal"&&g.left===0)return;const w=Math.abs(g.top)>=Math.abs(g.left)?g.top<0?"up":"down":g.left<0?"left":"right";n.position={top:f,left:p},n.directionChanged=n.direction!==w,n.delta=g,n.directionChanged===!0&&(n.direction=w,n.inflectionPoint=n.position),e("scroll",{...n})}function a(){i=Hd(s,t.scrollTarget),i.addEventListener("scroll",u,yg),u(!0)}function c(){i!==void 0&&(i.removeEventListener("scroll",u,yg),i=void 0)}function u(f){if(f===!0||t.debounce===0||t.debounce==="0")o();else if(r===null){const[p,g]=t.debounce?[setTimeout(o,t.debounce),clearTimeout]:[requestAnimationFrame(o),cancelAnimationFrame];r=()=>{g(p),r=null}}}const{proxy:h}=Ye();return Me(()=>h.$q.lang.rtl,o),zn(()=>{s=h.$el.parentNode,a()}),It(()=>{r!==null&&r(),c()}),Object.assign(h,{trigger:u,getPosition:()=>n}),In}}),tP=Xe({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:t=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(t.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(t,{slots:e,emit:n}){const{proxy:{$q:r}}=Ye(),i=Te(null),s=Te(r.screen.height),o=Te(t.container===!0?0:r.screen.width),a=Te({position:0,direction:"down",inflectionPoint:0}),c=Te(0),u=Te(or.value===!0?0:sl()),h=B(()=>"q-layout q-layout--"+(t.container===!0?"containerized":"standard")),f=B(()=>t.container===!1?{minHeight:r.screen.height+"px"}:null),p=B(()=>u.value!==0?{[r.lang.rtl===!0?"left":"right"]:`${u.value}px`}:null),g=B(()=>u.value!==0?{[r.lang.rtl===!0?"right":"left"]:0,[r.lang.rtl===!0?"left":"right"]:`-${u.value}px`,width:`calc(100% + ${u.value}px)`}:null);function w(D){if(t.container===!0||document.qScrollPrevented!==!0){const V={position:D.position.top,direction:D.direction,directionChanged:D.directionChanged,inflectionPoint:D.inflectionPoint.top,delta:D.delta.top};a.value=V,t.onScroll!==void 0&&n("scroll",V)}}function C(D){const{height:V,width:H}=D;let b=!1;s.value!==V&&(b=!0,s.value=V,t.onScrollHeight!==void 0&&n("scrollHeight",V),x()),o.value!==H&&(b=!0,o.value=H),b===!0&&t.onResize!==void 0&&n("resize",D)}function A({height:D}){c.value!==D&&(c.value=D,x())}function x(){if(t.container===!0){const D=s.value>c.value?sl():0;u.value!==D&&(u.value=D)}}let k=null;const O={instances:{},view:B(()=>t.view),isContainer:B(()=>t.container),rootRef:i,height:s,containerHeight:c,scrollbarWidth:u,totalWidth:B(()=>o.value+u.value),rows:B(()=>{const D=t.view.toLowerCase().split(" ");return{top:D[0].split(""),middle:D[1].split(""),bottom:D[2].split("")}}),header:dn({size:0,offset:0,space:!1}),right:dn({size:300,offset:0,space:!1}),footer:dn({size:0,offset:0,space:!1}),left:dn({size:300,offset:0,space:!1}),scroll:a,animate(){k!==null?clearTimeout(k):document.body.classList.add("q-body--layout-animate"),k=setTimeout(()=>{k=null,document.body.classList.remove("q-body--layout-animate")},155)},update(D,V,H){O[D][V]=H}};if(cs(Od,O),sl()>0){let H=function(){D=null,V.classList.remove("hide-scrollbar")},b=function(){if(D===null){if(V.scrollHeight>r.screen.height)return;V.classList.add("hide-scrollbar")}else clearTimeout(D);D=setTimeout(H,300)},y=function(_){D!==null&&_==="remove"&&(clearTimeout(D),H()),window[`${_}EventListener`]("resize",b)},D=null;const V=document.body;Me(()=>t.container!==!0?"add":"remove",y),t.container!==!0&&y("add"),_c(()=>{y("remove")})}return()=>{const D=rs(e.default,[Q(eP,{onScroll:w}),Q(Lh,{onResize:C})]),V=Q("div",{class:h.value,style:f.value,ref:t.container===!0?void 0:i,tabindex:-1},D);return t.container===!0?Q("div",{class:"q-layout-container overflow-hidden",ref:i},[Q(Lh,{onResize:A}),Q("div",{class:"absolute-full",style:p.value},[Q("div",{class:"scroll",style:g.value},[V])])]):V}}});function wg(t){if(t===!1)return 0;if(t===!0||t===void 0)return 1;const e=parseInt(t,10);return isNaN(e)?0:e}var ol=aw({name:"close-popup",beforeMount(t,{value:e}){const n={depth:wg(e),handler(r){n.depth!==0&&setTimeout(()=>{const i=MC(t);i!==void 0&&FC(i,r,n.depth)})},handlerKey(r){Ii(r,13)===!0&&n.handler(r)}};t.__qclosepopup=n,t.addEventListener("click",n.handler),t.addEventListener("keyup",n.handlerKey)},updated(t,{value:e,oldValue:n}){e!==n&&(t.__qclosepopup.depth=wg(e))},beforeUnmount(t){const e=t.__qclosepopup;t.removeEventListener("click",e.handler),t.removeEventListener("keyup",e.handlerKey),delete t.__qclosepopup}});function nP(t){return md()?(Av(t),!0):!1}const oa=typeof window!="undefined"&&typeof document!="undefined";typeof WorkerGlobalScope!="undefined"&&globalThis instanceof WorkerGlobalScope;const pU=t=>t!=null,rP=Object.prototype.toString,iP=t=>rP.call(t)==="[object Object]",Vh=()=>{},mU=sP();function sP(){var t,e;return oa&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((e=window==null?void 0:window.navigator)==null?void 0:e.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function oP(...t){if(t.length!==1)return Bv(...t);const e=t[0];return typeof e=="function"?pc(TI(()=>({get:e,set:Vh}))):Te(e)}function aP(t,e){function n(...r){return new Promise((i,s)=>{Promise.resolve(t(()=>e.apply(this,r),{fn:e,thisArg:this,args:r})).then(i).catch(s)})}return n}const Mw=t=>t();function lP(t=Mw,e={}){const{initialState:n="active"}=e,r=oP(n==="active");function i(){r.value=!1}function s(){r.value=!0}const o=(...a)=>{r.value&&t(...a)};return{isActive:pc(r),pause:i,resume:s,eventFilter:o}}function Mh(t,e=!1,n="Timeout"){return new Promise((r,i)=>{setTimeout(e?()=>i(n):r,t)})}function Hu(t){return Array.isArray(t)?t:[t]}function cP(t){return t||Ye()}function uP(t,e,n={}){const{eventFilter:r=Mw,...i}=n;return Me(t,aP(r,e),i)}function hP(t,e,n={}){const{eventFilter:r,initialState:i="active",...s}=n,{eventFilter:o,pause:a,resume:c,isActive:u}=lP(r,{initialState:i});return{stop:uP(t,e,{...s,eventFilter:o}),pause:a,resume:c,isActive:u}}function dP(t,e=!0,n){cP()?zn(t,n):e?t():on(t)}function Fh(t,e=!1){function n(f,{flush:p="sync",deep:g=!1,timeout:w,throwOnTimeout:C}={}){let A=null;const k=[new Promise(O=>{A=Me(t,D=>{f(D)!==e&&(A?A():on(()=>A==null?void 0:A()),O(D))},{flush:p,deep:g,immediate:!0})})];return w!=null&&k.push(Mh(w,C).then(()=>bn(t)).finally(()=>A==null?void 0:A())),Promise.race(k)}function r(f,p){if(!Qe(f))return n(D=>D===f,p);const{flush:g="sync",deep:w=!1,timeout:C,throwOnTimeout:A}=p!=null?p:{};let x=null;const O=[new Promise(D=>{x=Me([t,f],([V,H])=>{e!==(V===H)&&(x?x():on(()=>x==null?void 0:x()),D(V))},{flush:g,deep:w,immediate:!0})})];return C!=null&&O.push(Mh(C,A).then(()=>bn(t)).finally(()=>(x==null||x(),bn(t)))),Promise.race(O)}function i(f){return n(p=>Boolean(p),f)}function s(f){return r(null,f)}function o(f){return r(void 0,f)}function a(f){return n(Number.isNaN,f)}function c(f,p){return n(g=>{const w=Array.from(g);return w.includes(f)||w.includes(bn(f))},p)}function u(f){return h(1,f)}function h(f=1,p){let g=-1;return n(()=>(g+=1,g>=f),p)}return Array.isArray(bn(t))?{toMatch:n,toContains:c,changed:u,changedTimes:h,get not(){return Fh(t,!e)}}:{toMatch:n,toBe:r,toBeTruthy:i,toBeNull:s,toBeNaN:a,toBeUndefined:o,changed:u,changedTimes:h,get not(){return Fh(t,!e)}}}function fP(t){return Fh(t)}function pP(t,e,n){return Me(t,e,{...n,immediate:!0})}const Ul=oa?window:void 0;oa&&window.document;oa&&window.navigator;oa&&window.location;function mP(t){var e;const n=bn(t);return(e=n==null?void 0:n.$el)!=null?e:n}function Eg(...t){const e=[],n=()=>{e.forEach(a=>a()),e.length=0},r=(a,c,u,h)=>(a.addEventListener(c,u,h),()=>a.removeEventListener(c,u,h)),i=B(()=>{const a=Hu(bn(t[0])).filter(c=>c!=null);return a.every(c=>typeof c!="string")?a:void 0}),s=pP(()=>{var a,c;return[(c=(a=i.value)==null?void 0:a.map(u=>mP(u)))!=null?c:[Ul].filter(u=>u!=null),Hu(bn(i.value?t[1]:t[0])),Hu(qt(i.value?t[2]:t[1])),bn(i.value?t[3]:t[2])]},([a,c,u,h])=>{if(n(),!(a!=null&&a.length)||!(c!=null&&c.length)||!(u!=null&&u.length))return;const f=iP(h)?{...h}:h;e.push(...a.flatMap(p=>c.flatMap(g=>u.map(w=>r(p,g,w,f)))))},{flush:"post"}),o=()=>{s(),n()};return nP(n),o}function gU(t,e,n){const{immediate:r=!0,delay:i=0,onError:s=Vh,onSuccess:o=Vh,resetOnExecute:a=!0,shallow:c=!0,throwError:u}=n!=null?n:{},h=c?ns(e):Te(e),f=ns(!1),p=ns(!1),g=ns(void 0);async function w(x=0,...k){a&&(h.value=e),g.value=void 0,f.value=!1,p.value=!0,x>0&&await Mh(x);const O=typeof t=="function"?t(...k):t;try{const D=await O;h.value=D,f.value=!0,o(D)}catch(D){if(g.value=D,s(D),u)throw D}finally{p.value=!1}return h.value}r&&w(i);const C={state:h,isReady:f,isLoading:p,error:g,execute:w};function A(){return new Promise((x,k)=>{fP(p).toBe(!1).then(()=>x(C)).catch(k)})}return{...C,then(x,k){return A().then(x,k)}}}const qa=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Ba="__vueuse_ssr_handlers__",gP=_P();function _P(){return Ba in qa||(qa[Ba]=qa[Ba]||{}),qa[Ba]}function vP(t,e){return gP[t]||e}function yP(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const Fw={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},Tg="vueuse-storage";function wP(t,e,n,r={}){var i;const{flush:s="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:h,window:f=Ul,eventFilter:p,onError:g=T=>{console.error(T)},initOnMounted:w}=r,C=(h?ns:Te)(typeof e=="function"?e():e),A=B(()=>bn(t));if(!n)try{n=vP("getDefaultStorage",()=>{var T;return(T=Ul)==null?void 0:T.localStorage})()}catch(T){g(T)}if(!n)return C;const x=bn(e),k=yP(x),O=(i=r.serializer)!=null?i:Fw[k],{pause:D,resume:V}=hP(C,()=>b(C.value),{flush:s,deep:o,eventFilter:p});Me(A,()=>_(),{flush:s}),f&&a&&dP(()=>{n instanceof Storage?Eg(f,"storage",_,{passive:!0}):Eg(f,Tg,R),w&&_()}),w||_();function H(T,S){if(f){const E={key:A.value,oldValue:T,newValue:S,storageArea:n};f.dispatchEvent(n instanceof Storage?new StorageEvent("storage",E):new CustomEvent(Tg,{detail:E}))}}function b(T){try{const S=n.getItem(A.value);if(T==null)H(S,null),n.removeItem(A.value);else{const E=O.write(T);S!==E&&(n.setItem(A.value,E),H(S,E))}}catch(S){g(S)}}function y(T){const S=T?T.newValue:n.getItem(A.value);if(S==null)return c&&x!=null&&n.setItem(A.value,O.write(x)),x;if(!T&&u){const E=O.read(S);return typeof u=="function"?u(E,x):k==="object"&&!Array.isArray(E)?{...x,...E}:E}else return typeof S!="string"?S:O.read(S)}function _(T){if(!(T&&T.storageArea!==n)){if(T&&T.key==null){C.value=x;return}if(!(T&&T.key!==A.value)){D();try{(T==null?void 0:T.newValue)!==O.write(C.value)&&(C.value=y(T))}catch(S){g(S)}finally{T?on(V):V()}}}}function R(T){_(T.detail)}return C}function EP(t,e,n={}){const{window:r=Ul}=n;return wP(t,e,r==null?void 0:r.localStorage,n)}const Uw=JR("auth",()=>{const t=EP("auth/user",null,{serializer:Fw.object}),e=B(()=>!!t.value),n=B(()=>{var s;return((s=t.value)==null?void 0:s.uid)||null});return{uid:n,user:t,isAuthenticated:e,setUser:s=>{t.value=s,s?t.value={uid:s.uid,photoURL:s.photoURL,displayName:s.displayName,email:s.email,emailVerified:s.emailVerified}:t.value=null},hasOwnContent:s=>e.value?n.value===s:!1}}),TP=()=>{};/**
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
 */const $w=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},bP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},qw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let p=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(p=64)),r.push(n[h],n[f],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($w(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):bP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw new IP;const p=s<<2|a>>4;if(r.push(p),u!==64){const g=a<<4&240|u>>2;if(r.push(g),f!==64){const w=u<<6&192|f;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class IP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const AP=function(t){const e=$w(t);return qw.encodeByteArray(e,!0)},$l=function(t){return AP(t).replace(/\./g,"")},Bw=function(t){try{return qw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function RP(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
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
 */const SP=()=>RP().__FIREBASE_DEFAULTS__,CP=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},PP=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Bw(t[1]);return e&&JSON.parse(e)},Cc=()=>{try{return TP()||SP()||CP()||PP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},jw=t=>{var e,n;return(n=(e=Cc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Hw=t=>{const e=jw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},zw=()=>{var t;return(t=Cc())===null||t===void 0?void 0:t.config},Ww=t=>{var e;return(e=Cc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class kP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Kw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[$l(JSON.stringify(n)),$l(JSON.stringify(o)),a].join(".")}/**
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
 */function Lt(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xP(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Lt())}function OP(){var t;const e=(t=Cc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function DP(){return typeof navigator!="undefined"&&navigator.userAgent==="Cloudflare-Workers"}function Gw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function NP(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function LP(){const t=Lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function VP(){return!OP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Qw(){try{return typeof indexedDB=="object"}catch{return!1}}function Jw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function MP(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
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
 */const FP="FirebaseError";class vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=FP,Object.setPrototypeOf(this,vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ni.prototype.create)}}class Ni{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?UP(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new vn(i,a,r)}}function UP(t,e){return t.replace($P,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const $P=/\{\$([^}]+)}/g;function qP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $r(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(bg(s)&&bg(o)){if(!$r(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function bg(t){return t!==null&&typeof t=="object"}/**
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
 */function aa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function oo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ao(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function BP(t,e){const n=new jP(t,e);return n.subscribe.bind(n)}class jP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");HP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=zu),i.error===void 0&&(i.error=zu),i.complete===void 0&&(i.complete=zu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function HP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function zu(){}/**
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
 */const zP=1e3,WP=2,KP=4*60*60*1e3,GP=.5;function Ig(t,e=zP,n=WP){const r=e*Math.pow(n,t),i=Math.round(GP*r*(Math.random()-.5)*2);return Math.min(KP,r+i)}/**
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
 */function qe(t){return t&&t._delegate?t._delegate:t}class gn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class QP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new kP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(YP(e))try{this.getOrInitializeService({instanceIdentifier:li})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=li){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=li){return this.instances.has(e)}getOptions(e=li){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:JP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=li){return this.component?this.component.multipleInstances?e:li:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function JP(t){return t===li?void 0:t}function YP(t){return t.instantiationMode==="EAGER"}/**
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
 */class XP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new QP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Se||(Se={}));const ZP={debug:Se.DEBUG,verbose:Se.VERBOSE,info:Se.INFO,warn:Se.WARN,error:Se.ERROR,silent:Se.SILENT},ek=Se.INFO,tk={[Se.DEBUG]:"log",[Se.VERBOSE]:"log",[Se.INFO]:"info",[Se.WARN]:"warn",[Se.ERROR]:"error"},nk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=tk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pc{constructor(e){this.name=e,this._logLevel=ek,this._logHandler=nk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ZP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Se.DEBUG,...e),this._logHandler(this,Se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Se.VERBOSE,...e),this._logHandler(this,Se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Se.INFO,...e),this._logHandler(this,Se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Se.WARN,...e),this._logHandler(this,Se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Se.ERROR,...e),this._logHandler(this,Se.ERROR,...e)}}const rk=(t,e)=>e.some(n=>t instanceof n);let Ag,Rg;function ik(){return Ag||(Ag=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sk(){return Rg||(Rg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yw=new WeakMap,Uh=new WeakMap,Xw=new WeakMap,Wu=new WeakMap,zd=new WeakMap;function ok(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Lr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Yw.set(n,t)}).catch(()=>{}),zd.set(e,t),e}function ak(t){if(Uh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Uh.set(t,e)}let $h={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Uh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Xw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Lr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function lk(t){$h=t($h)}function ck(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ku(this),e,...n);return Xw.set(r,e.sort?e.sort():[e]),Lr(r)}:sk().includes(t)?function(...e){return t.apply(Ku(this),e),Lr(Yw.get(this))}:function(...e){return Lr(t.apply(Ku(this),e))}}function uk(t){return typeof t=="function"?ck(t):(t instanceof IDBTransaction&&ak(t),rk(t,ik())?new Proxy(t,$h):t)}function Lr(t){if(t instanceof IDBRequest)return ok(t);if(Wu.has(t))return Wu.get(t);const e=uk(t);return e!==t&&(Wu.set(t,e),zd.set(e,t)),e}const Ku=t=>zd.get(t);function Zw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Lr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Lr(o.result),c.oldVersion,c.newVersion,Lr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const hk=["get","getKey","getAll","getAllKeys","count"],dk=["put","add","delete","clear"],Gu=new Map;function Sg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gu.get(e))return Gu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=dk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||hk.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return Gu.set(e,s),s}lk(t=>({...t,get:(e,n,r)=>Sg(e,n)||t.get(e,n,r),has:(e,n)=>!!Sg(e,n)||t.has(e,n)}));/**
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
 */class fk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function pk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qh="@firebase/app",Cg="0.11.2";/**
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
 */const ar=new Pc("@firebase/app"),mk="@firebase/app-compat",gk="@firebase/analytics-compat",_k="@firebase/analytics",vk="@firebase/app-check-compat",yk="@firebase/app-check",wk="@firebase/auth",Ek="@firebase/auth-compat",Tk="@firebase/database",bk="@firebase/data-connect",Ik="@firebase/database-compat",Ak="@firebase/functions",Rk="@firebase/functions-compat",Sk="@firebase/installations",Ck="@firebase/installations-compat",Pk="@firebase/messaging",kk="@firebase/messaging-compat",xk="@firebase/performance",Ok="@firebase/performance-compat",Dk="@firebase/remote-config",Nk="@firebase/remote-config-compat",Lk="@firebase/storage",Vk="@firebase/storage-compat",Mk="@firebase/firestore",Fk="@firebase/vertexai",Uk="@firebase/firestore-compat",$k="firebase",qk="11.4.0";/**
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
 */const Bh="[DEFAULT]",Bk={[qh]:"fire-core",[mk]:"fire-core-compat",[_k]:"fire-analytics",[gk]:"fire-analytics-compat",[yk]:"fire-app-check",[vk]:"fire-app-check-compat",[wk]:"fire-auth",[Ek]:"fire-auth-compat",[Tk]:"fire-rtdb",[bk]:"fire-data-connect",[Ik]:"fire-rtdb-compat",[Ak]:"fire-fn",[Rk]:"fire-fn-compat",[Sk]:"fire-iid",[Ck]:"fire-iid-compat",[Pk]:"fire-fcm",[kk]:"fire-fcm-compat",[xk]:"fire-perf",[Ok]:"fire-perf-compat",[Dk]:"fire-rc",[Nk]:"fire-rc-compat",[Lk]:"fire-gcs",[Vk]:"fire-gcs-compat",[Mk]:"fire-fst",[Uk]:"fire-fst-compat",[Fk]:"fire-vertex","fire-js":"fire-js",[$k]:"fire-js-all"};/**
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
 */const ql=new Map,jk=new Map,jh=new Map;function Pg(t,e){try{t.container.addComponent(e)}catch(n){ar.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function kn(t){const e=t.name;if(jh.has(e))return ar.debug(`There were multiple attempts to register component ${e}.`),!1;jh.set(e,t);for(const n of ql.values())Pg(n,t);for(const n of jk.values())Pg(n,t);return!0}function Jr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ht(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Hk={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},Vr=new Ni("app","Firebase",Hk);/**
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
 */class zk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vr.create("app-deleted",{appName:this._name})}}/**
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
 */const Li=qk;function eE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Bh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Vr.create("bad-app-name",{appName:String(i)});if(n||(n=zw()),!n)throw Vr.create("no-options");const s=ql.get(i);if(s){if($r(n,s.options)&&$r(r,s.config))return s;throw Vr.create("duplicate-app",{appName:i})}const o=new XP(i);for(const c of jh.values())o.addComponent(c);const a=new zk(n,r,o);return ql.set(i,a),a}function kc(t=Bh){const e=ql.get(t);if(!e&&t===Bh&&zw())return eE();if(!e)throw Vr.create("no-app",{appName:t});return e}function Jt(t,e,n){var r;let i=(r=Bk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ar.warn(a.join(" "));return}kn(new gn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Wk="firebase-heartbeat-database",Kk=1,qo="firebase-heartbeat-store";let Qu=null;function tE(){return Qu||(Qu=Zw(Wk,Kk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(qo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Vr.create("idb-open",{originalErrorMessage:t.message})})),Qu}async function Gk(t){try{const n=(await tE()).transaction(qo),r=await n.objectStore(qo).get(nE(t));return await n.done,r}catch(e){if(e instanceof vn)ar.warn(e.message);else{const n=Vr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ar.warn(n.message)}}}async function kg(t,e){try{const r=(await tE()).transaction(qo,"readwrite");await r.objectStore(qo).put(e,nE(t)),await r.done}catch(n){if(n instanceof vn)ar.warn(n.message);else{const r=Vr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ar.warn(r.message)}}}function nE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Qk=1024,Jk=30;class Yk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Zk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=xg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>Jk){const o=ex(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ar.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=xg(),{heartbeatsToSend:r,unsentEntries:i}=Xk(this._heartbeatsCache.heartbeats),s=$l(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return ar.warn(n),""}}}function xg(){return new Date().toISOString().substring(0,10)}function Xk(t,e=Qk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Og(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Og(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Zk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Qw()?Jw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Gk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return kg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return kg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Og(t){return $l(JSON.stringify({version:2,heartbeats:t})).length}function ex(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function tx(t){kn(new gn("platform-logger",e=>new fk(e),"PRIVATE")),kn(new gn("heartbeat",e=>new Yk(e),"PRIVATE")),Jt(qh,Cg,t),Jt(qh,Cg,"esm2017"),Jt("fire-js","")}tx("");function Wd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function rE(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nx=rE,iE=new Ni("auth","Firebase",rE());/**
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
 */const Bl=new Pc("@firebase/auth");function rx(t,...e){Bl.logLevel<=Se.WARN&&Bl.warn(`Auth (${Li}): ${t}`,...e)}function al(t,...e){Bl.logLevel<=Se.ERROR&&Bl.error(`Auth (${Li}): ${t}`,...e)}/**
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
 */function _n(t,...e){throw Gd(t,...e)}function Sn(t,...e){return Gd(t,...e)}function Kd(t,e,n){const r=Object.assign(Object.assign({},nx()),{[e]:n});return new Ni("auth","Firebase",r).create(e,{appName:t.name})}function qn(t){return Kd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ix(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&_n(t,"argument-error"),Kd(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Gd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return iE.create(t,...e)}function ue(t,e,...n){if(!t)throw Gd(e,...n)}function tr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw al(e),new Error(e)}function lr(t,e){t||tr(e)}/**
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
 */function Hh(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function sx(){return Dg()==="http:"||Dg()==="https:"}function Dg(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function ox(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sx()||Gw()||"connection"in navigator)?navigator.onLine:!0}function ax(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class la{constructor(e,n){this.shortDelay=e,this.longDelay=n,lr(n>e,"Short delay should be less than long delay!"),this.isMobile=xP()||NP()}get(){return ox()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Qd(t,e){lr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class sE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;tr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;tr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;tr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const lx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const cx=new la(3e4,6e4);function fr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Nn(t,e,n,r,i={}){return oE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=aa(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},s);return DP()||(u.referrerPolicy="no-referrer"),sE.fetch()(aE(t,t.config.apiHost,n,a),u)})}async function oE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},lx),e);try{const i=new hx(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ja(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ja(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ja(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ja(t,"user-disabled",o);const h=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Kd(t,h,u);_n(t,h)}}catch(i){if(i instanceof vn)throw i;_n(t,"network-request-failed",{message:String(i)})}}async function ca(t,e,n,r,i={}){const s=await Nn(t,e,n,r,i);return"mfaPendingCredential"in s&&_n(t,"multi-factor-auth-required",{_serverResponse:s}),s}function aE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Qd(t.config,i):`${t.config.apiScheme}://${i}`}function ux(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class hx{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Sn(this.auth,"network-request-failed")),cx.get())})}}function ja(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Sn(t,e,r);return i.customData._tokenResponse=n,i}function Ng(t){return t!==void 0&&t.enterprise!==void 0}class dx{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return ux(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function fx(t,e){return Nn(t,"GET","/v2/recaptchaConfig",fr(t,e))}/**
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
 */async function px(t,e){return Nn(t,"POST","/v1/accounts:delete",e)}async function lE(t,e){return Nn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function bo(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mx(t,e=!1){const n=qe(t),r=await n.getIdToken(e),i=Jd(r);ue(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:bo(Ju(i.auth_time)),issuedAtTime:bo(Ju(i.iat)),expirationTime:bo(Ju(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ju(t){return Number(t)*1e3}function Jd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return al("JWT malformed, contained fewer than 3 sections"),null;try{const i=Bw(n);return i?JSON.parse(i):(al("Failed to decode base64 JWT payload"),null)}catch(i){return al("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Lg(t){const e=Jd(t);return ue(e,"internal-error"),ue(typeof e.exp!="undefined","internal-error"),ue(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ai(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof vn&&gx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function gx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class _x{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class zh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=bo(this.lastLoginAt),this.creationTime=bo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function jl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ai(t,lE(n,{idToken:r}));ue(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?cE(s.providerUserInfo):[],a=yx(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=c?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new zh(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function vx(t){const e=qe(t);await jl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yx(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function cE(t){return t.map(e=>{var{providerId:n}=e,r=Wd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function wx(t,e){const n=await oE(t,{},async()=>{const r=aa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=aE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",sE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ex(t,e){return Nn(t,"POST","/v2/accounts:revokeToken",fr(t,e))}/**
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
 */class ds{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ue(e.idToken,"internal-error"),ue(typeof e.idToken!="undefined","internal-error"),ue(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Lg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ue(e.length!==0,"internal-error");const n=Lg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ue(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await wx(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ds;return r&&(ue(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ue(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ue(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ds,this.toJSON())}_performRefresh(){return tr("not implemented")}}/**
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
 */function Tr(t,e){ue(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class nr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Wd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _x(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new zh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ai(this,this.stsTokenManager.getToken(this.auth,e));return ue(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return mx(this,e)}reload(){return vx(this)}_assign(e){this!==e&&(ue(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new nr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await jl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ht(this.auth.app))return Promise.reject(qn(this.auth));const e=await this.getIdToken();return await Ai(this,px(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,u,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,x=(u=n.createdAt)!==null&&u!==void 0?u:void 0,k=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:O,emailVerified:D,isAnonymous:V,providerData:H,stsTokenManager:b}=n;ue(O&&b,e,"internal-error");const y=ds.fromJSON(this.name,b);ue(typeof O=="string",e,"internal-error"),Tr(f,e.name),Tr(p,e.name),ue(typeof D=="boolean",e,"internal-error"),ue(typeof V=="boolean",e,"internal-error"),Tr(g,e.name),Tr(w,e.name),Tr(C,e.name),Tr(A,e.name),Tr(x,e.name),Tr(k,e.name);const _=new nr({uid:O,auth:e,email:p,emailVerified:D,displayName:f,isAnonymous:V,photoURL:w,phoneNumber:g,tenantId:C,stsTokenManager:y,createdAt:x,lastLoginAt:k});return H&&Array.isArray(H)&&(_.providerData=H.map(R=>Object.assign({},R))),A&&(_._redirectEventId=A),_}static async _fromIdTokenResponse(e,n,r=!1){const i=new ds;i.updateFromServerResponse(n);const s=new nr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await jl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ue(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?cE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new ds;a.updateFromIdToken(r);const c=new nr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new zh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,u),c}}/**
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
 */const Vg=new Map;function rr(t){lr(t instanceof Function,"Expected a class definition");let e=Vg.get(t);return e?(lr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Vg.set(t,e),e)}/**
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
 */class uE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}uE.type="NONE";const Mg=uE;/**
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
 */function ll(t,e,n){return`firebase:${t}:${e}:${n}`}class fs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ll(this.userKey,i.apiKey,s),this.fullPersistenceKey=ll("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?nr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new fs(rr(Mg),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||rr(Mg);const o=ll(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const f=nr._fromJSON(e,h);u!==s&&(a=f),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new fs(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new fs(s,e,r))}}/**
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
 */function Fg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gE(e))return"Blackberry";if(_E(e))return"Webos";if(dE(e))return"Safari";if((e.includes("chrome/")||fE(e))&&!e.includes("edge/"))return"Chrome";if(mE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function hE(t=Lt()){return/firefox\//i.test(t)}function dE(t=Lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fE(t=Lt()){return/crios\//i.test(t)}function pE(t=Lt()){return/iemobile/i.test(t)}function mE(t=Lt()){return/android/i.test(t)}function gE(t=Lt()){return/blackberry/i.test(t)}function _E(t=Lt()){return/webos/i.test(t)}function Yd(t=Lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Tx(t=Lt()){var e;return Yd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function bx(){return LP()&&document.documentMode===10}function vE(t=Lt()){return Yd(t)||mE(t)||_E(t)||gE(t)||/windows phone/i.test(t)||pE(t)}/**
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
 */function yE(t,e=[]){let n;switch(t){case"Browser":n=Fg(Lt());break;case"Worker":n=`${Fg(Lt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Li}/${r}`}/**
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
 */class Ix{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Ax(t,e={}){return Nn(t,"GET","/v2/passwordPolicy",fr(t,e))}/**
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
 */const Rx=6;class Sx{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Rx,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Cx{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ug(this),this.idTokenSubscription=new Ug(this),this.beforeStateQueue=new Ix(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=iE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await fs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await lE(this,{idToken:e}),r=await nr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ht(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await jl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ax()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ht(this.app))return Promise.reject(qn(this));const n=e?qe(e):null;return n&&ue(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ue(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ht(this.app)?Promise.reject(qn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ht(this.app)?Promise.reject(qn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ax(this),n=new Sx(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ni("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ex(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rr(e)||this._popupRedirectResolver;ue(n,this,"argument-error"),this.redirectPersistenceManager=await fs.create(this,[rr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ue(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(Ht(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&rx(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function pr(t){return qe(t)}class Ug{constructor(e){this.auth=e,this.observer=null,this.addObserver=BP(n=>this.observer=n)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let xc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Px(t){xc=t}function wE(t){return xc.loadJS(t)}function kx(){return xc.recaptchaEnterpriseScript}function xx(){return xc.gapiScript}function Ox(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Dx{constructor(){this.enterprise=new Nx}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Nx{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Lx="recaptcha-enterprise",EE="NO_RECAPTCHA";class Vx{constructor(e){this.type=Lx,this.auth=pr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{fx(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new dx(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;Ng(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(EE)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Dx().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Ng(window.grecaptcha))i(a,s,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=kx();c.length!==0&&(c+=a),wE(c).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function eo(t,e,n,r=!1,i=!1){const s=new Vx(t);let o;if(i)o=EE;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Hl(t,e,n,r,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await eo(t,e,n,n==="getOobCode");return r(t,a)}else return r(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await eo(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(a)});else if(i==="PHONE_PROVIDER")if(!((o=t._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await eo(t,e,n);return r(t,a).catch(async c=>{var u;if(((u=t._getRecaptchaConfig())===null||u===void 0?void 0:u.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(c.code==="auth/missing-recaptcha-token"||c.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const h=await eo(t,e,n,!1,!0);return r(t,h)}return Promise.reject(c)})}else{const a=await eo(t,e,n,!1,!0);return r(t,a)}else return Promise.reject(i+" provider is not supported.")}/**
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
 */function Mx(t,e){const n=Jr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if($r(s,e!=null?e:{}))return i;_n(i,"already-initialized")}return n.initialize({options:e})}function Fx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(rr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ux(t,e,n){const r=pr(t);ue(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=TE(e),{host:o,port:a}=$x(e),c=a===null?"":`:${a}`,u={url:`${s}//${o}${c}/`},h=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){ue(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ue($r(u,r.config.emulator)&&$r(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,i||qx()}function TE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $x(t){const e=TE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:$g(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:$g(o)}}}function $g(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Xd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return tr("not implemented")}_getIdTokenResponse(e){return tr("not implemented")}_linkToIdToken(e,n){return tr("not implemented")}_getReauthenticationResolver(e){return tr("not implemented")}}async function Bx(t,e){return Nn(t,"POST","/v1/accounts:update",e)}async function jx(t,e){return Nn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Hx(t,e){return ca(t,"POST","/v1/accounts:signInWithPassword",fr(t,e))}async function bE(t,e){return Nn(t,"POST","/v1/accounts:sendOobCode",fr(t,e))}async function zx(t,e){return bE(t,e)}async function Wx(t,e){return bE(t,e)}/**
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
 */async function Kx(t,e){return ca(t,"POST","/v1/accounts:signInWithEmailLink",fr(t,e))}async function Gx(t,e){return ca(t,"POST","/v1/accounts:signInWithEmailLink",fr(t,e))}/**
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
 */class Bo extends Xd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Bo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Bo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hl(e,n,"signInWithPassword",Hx,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Kx(e,{email:this._email,oobCode:this._password});default:_n(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hl(e,r,"signUpPassword",jx,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Gx(e,{idToken:n,email:this._email,oobCode:this._password});default:_n(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ps(t,e){return ca(t,"POST","/v1/accounts:signInWithIdp",fr(t,e))}/**
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
 */const Qx="http://localhost";class Ri extends Xd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ri(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):_n("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Wd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ri(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ps(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ps(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ps(e,n)}buildRequest(){const e={requestUri:Qx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=aa(n)}return e}}/**
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
 */function Jx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Yx(t){const e=oo(ao(t)).link,n=e?oo(ao(e)).deep_link_id:null,r=oo(ao(t)).deep_link_id;return(r?oo(ao(r)).link:null)||r||n||e||t}class Zd{constructor(e){var n,r,i,s,o,a;const c=oo(ao(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,h=(r=c.oobCode)!==null&&r!==void 0?r:null,f=Jx((i=c.mode)!==null&&i!==void 0?i:null);ue(u&&h&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=h,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Yx(e);try{return new Zd(n)}catch{return null}}}/**
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
 */class Ds{constructor(){this.providerId=Ds.PROVIDER_ID}static credential(e,n){return Bo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Zd.parseLink(n);return ue(r,"argument-error"),Bo._fromEmailAndCode(e,r.code,r.tenantId)}}Ds.PROVIDER_ID="password";Ds.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ds.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ef{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ua extends ef{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Pr extends ua{constructor(){super("facebook.com")}static credential(e){return Ri._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pr.credential(e.oauthAccessToken)}catch{return null}}}Pr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pr.PROVIDER_ID="facebook.com";/**
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
 */class er extends ua{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ri._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return er.credential(n,r)}catch{return null}}}er.GOOGLE_SIGN_IN_METHOD="google.com";er.PROVIDER_ID="google.com";/**
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
 */class kr extends ua{constructor(){super("github.com")}static credential(e){return Ri._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kr.credential(e.oauthAccessToken)}catch{return null}}}kr.GITHUB_SIGN_IN_METHOD="github.com";kr.PROVIDER_ID="github.com";/**
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
 */class xr extends ua{constructor(){super("twitter.com")}static credential(e,n){return Ri._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return xr.credential(n,r)}catch{return null}}}xr.TWITTER_SIGN_IN_METHOD="twitter.com";xr.PROVIDER_ID="twitter.com";/**
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
 */async function Xx(t,e){return ca(t,"POST","/v1/accounts:signUp",fr(t,e))}/**
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
 */class Si{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await nr._fromIdTokenResponse(e,r,i),o=qg(r);return new Si({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=qg(r);return new Si({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function qg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class zl extends vn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,zl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new zl(e,n,r,i)}}function IE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?zl._fromErrorAndOperation(t,s,e,r):s})}async function Zx(t,e,n=!1){const r=await Ai(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Si._forOperation(t,"link",r)}/**
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
 */async function e1(t,e,n=!1){const{auth:r}=t;if(Ht(r.app))return Promise.reject(qn(r));const i="reauthenticate";try{const s=await Ai(t,IE(r,i,e,t),n);ue(s.idToken,r,"internal-error");const o=Jd(s.idToken);ue(o,r,"internal-error");const{sub:a}=o;return ue(t.uid===a,r,"user-mismatch"),Si._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&_n(r,"user-mismatch"),s}}/**
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
 */async function AE(t,e,n=!1){if(Ht(t.app))return Promise.reject(qn(t));const r="signIn",i=await IE(t,r,e),s=await Si._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function t1(t,e){return AE(pr(t),e)}/**
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
 */function RE(t,e,n){var r;ue(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),ue(typeof n.dynamicLinkDomain=="undefined"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),ue(typeof n.linkDomain=="undefined"||n.linkDomain.length>0,t,"invalid-hosting-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.linkDomain=n.linkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(ue(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(ue(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function SE(t){const e=pr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function n1(t,e,n){const r=pr(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&RE(r,i,n),await Hl(r,i,"getOobCode",Wx,"EMAIL_PASSWORD_PROVIDER")}async function r1(t,e,n){if(Ht(t.app))return Promise.reject(qn(t));const r=pr(t),o=await Hl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Xx,"EMAIL_PASSWORD_PROVIDER").catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&SE(t),c}),a=await Si._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function i1(t,e,n){return Ht(t.app)?Promise.reject(qn(t)):t1(qe(t),Ds.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&SE(t),r})}async function CE(t,e){const n=qe(t),r=await t.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:r};e&&RE(n.auth,i,e);const{email:s}=await zx(n.auth,i);s!==t.email&&await t.reload()}/**
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
 */async function s1(t,e){return Nn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function PE(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=qe(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ai(r,s1(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function o1(t,e){const n=qe(t);return Ht(n.auth.app)?Promise.reject(qn(n.auth)):kE(n,e,null)}function a1(t,e){return kE(qe(t),null,e)}async function kE(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Ai(t,Bx(r,s));await t._updateTokensIfNecessary(o,!0)}function l1(t,e,n,r){return qe(t).onIdTokenChanged(e,n,r)}function c1(t,e,n){return qe(t).beforeAuthStateChanged(e,n)}function u1(t,e,n,r){return qe(t).onAuthStateChanged(e,n,r)}function h1(t){return qe(t).signOut()}const Wl="__sak";/**
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
 */class xE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wl,"1"),this.storage.removeItem(Wl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const d1=1e3,f1=10;class OE extends xE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=vE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);bx()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,f1):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},d1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}OE.type="LOCAL";const p1=OE;/**
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
 */class DE extends xE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}DE.type="SESSION";const NE=DE;/**
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
 */function m1(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Oc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Oc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),c=await m1(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Oc.receivers=[];/**
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
 */function tf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class g1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=tf("",20);i.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(h),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Bn(){return window}function _1(t){Bn().location.href=t}/**
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
 */function LE(){return typeof Bn().WorkerGlobalScope!="undefined"&&typeof Bn().importScripts=="function"}async function v1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function y1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function w1(){return LE()?self:null}/**
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
 */const VE="firebaseLocalStorageDb",E1=1,Kl="firebaseLocalStorage",ME="fbase_key";class ha{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Dc(t,e){return t.transaction([Kl],e?"readwrite":"readonly").objectStore(Kl)}function T1(){const t=indexedDB.deleteDatabase(VE);return new ha(t).toPromise()}function Wh(){const t=indexedDB.open(VE,E1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Kl,{keyPath:ME})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Kl)?e(r):(r.close(),await T1(),e(await Wh()))})})}async function Bg(t,e,n){const r=Dc(t,!0).put({[ME]:e,value:n});return new ha(r).toPromise()}async function b1(t,e){const n=Dc(t,!1).get(e),r=await new ha(n).toPromise();return r===void 0?null:r.value}function jg(t,e){const n=Dc(t,!0).delete(e);return new ha(n).toPromise()}const I1=800,A1=3;class FE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>A1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return LE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Oc._getInstance(w1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await v1(),!this.activeServiceWorker)return;this.sender=new g1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||y1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wh();return await Bg(e,Wl,"1"),await jg(e,Wl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Bg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>b1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>jg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Dc(i,!1).getAll();return new ha(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),I1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}FE.type="LOCAL";const R1=FE;new la(3e4,6e4);/**
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
 */function UE(t,e){return e?rr(e):(ue(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class nf extends Xd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ps(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ps(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ps(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function S1(t){return AE(t.auth,new nf(t),t.bypassAuthState)}function C1(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),e1(n,new nf(t),t.bypassAuthState)}async function P1(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),Zx(n,new nf(t),t.bypassAuthState)}/**
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
 */class $E{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return S1;case"linkViaPopup":case"linkViaRedirect":return P1;case"reauthViaPopup":case"reauthViaRedirect":return C1;default:_n(this.auth,"internal-error")}}resolve(e){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const k1=new la(2e3,1e4);async function x1(t,e,n){if(Ht(t.app))return Promise.reject(Sn(t,"operation-not-supported-in-this-environment"));const r=pr(t);ix(t,e,ef);const i=UE(r,n);return new di(r,"signInViaPopup",e,i).executeNotNull()}class di extends $E{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,di.currentPopupAction&&di.currentPopupAction.cancel(),di.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ue(e,this.auth,"internal-error"),e}async onExecution(){lr(this.filter.length===1,"Popup operations only handle one event");const e=tf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,di.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,k1.get())};e()}}di.currentPopupAction=null;/**
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
 */const O1="pendingRedirect",cl=new Map;class D1 extends $E{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=cl.get(this.auth._key());if(!e){try{const r=await N1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}cl.set(this.auth._key(),e)}return this.bypassAuthState||cl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function N1(t,e){const n=M1(e),r=V1(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function L1(t,e){cl.set(t._key(),e)}function V1(t){return rr(t._redirectPersistence)}function M1(t){return ll(O1,t.config.apiKey,t.name)}async function F1(t,e,n=!1){if(Ht(t.app))return Promise.reject(qn(t));const r=pr(t),i=UE(r,e),o=await new D1(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const U1=10*60*1e3;class $1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!q1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!qE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Sn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=U1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hg(e))}saveEventToCache(e){this.cachedEventUids.add(Hg(e)),this.lastProcessedEventTime=Date.now()}}function Hg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function qE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function q1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qE(t);default:return!1}}/**
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
 */async function B1(t,e={}){return Nn(t,"GET","/v1/projects",e)}/**
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
 */const j1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,H1=/^https?/;async function z1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await B1(t);for(const n of e)try{if(W1(n))return}catch{}_n(t,"unauthorized-domain")}function W1(t){const e=Hh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!H1.test(n))return!1;if(j1.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const K1=new la(3e4,6e4);function zg(){const t=Bn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function G1(t){return new Promise((e,n)=>{var r,i,s;function o(){zg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zg(),n(Sn(t,"network-request-failed"))},timeout:K1.get()})}if(!((i=(r=Bn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Bn().gapi)===null||s===void 0)&&s.load)o();else{const a=Ox("iframefcb");return Bn()[a]=()=>{gapi.load?o():n(Sn(t,"network-request-failed"))},wE(`${xx()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ul=null,e})}let ul=null;function Q1(t){return ul=ul||G1(t),ul}/**
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
 */const J1=new la(5e3,15e3),Y1="__/auth/iframe",X1="emulator/auth/iframe",Z1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tO(t){const e=t.config;ue(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Qd(e,X1):`https://${t.config.authDomain}/${Y1}`,r={apiKey:e.apiKey,appName:t.name,v:Li},i=eO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${aa(r).slice(1)}`}async function nO(t){const e=await Q1(t),n=Bn().gapi;return ue(n,t,"internal-error"),e.open({where:document.body,url:tO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Z1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Sn(t,"network-request-failed"),a=Bn().setTimeout(()=>{s(o)},J1.get());function c(){Bn().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const rO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},iO=500,sO=600,oO="_blank",aO="http://localhost";class Wg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lO(t,e,n,r=iO,i=sO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},rO),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Lt().toLowerCase();n&&(a=fE(u)?oO:n),hE(u)&&(e=e||aO,c.scrollbars="yes");const h=Object.entries(c).reduce((p,[g,w])=>`${p}${g}=${w},`,"");if(Tx(u)&&a!=="_self")return cO(e||"",a),new Wg(null);const f=window.open(e||"",a,h);ue(f,t,"popup-blocked");try{f.focus()}catch{}return new Wg(f)}function cO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const uO="__/auth/handler",hO="emulator/auth/handler",dO=encodeURIComponent("fac");async function Kg(t,e,n,r,i,s){ue(t.config.authDomain,t,"auth-domain-config-required"),ue(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Li,eventId:i};if(e instanceof ef){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",qP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries(s||{}))o[h]=f}if(e instanceof ua){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await t._getAppCheckToken(),u=c?`#${dO}=${encodeURIComponent(c)}`:"";return`${fO(t)}?${aa(a).slice(1)}${u}`}function fO({config:t}){return t.emulator?Qd(t,hO):`https://${t.authDomain}/${uO}`}/**
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
 */const Yu="webStorageSupport";class pO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=NE,this._completeRedirectFn=F1,this._overrideRedirectResult=L1}async _openPopup(e,n,r,i){var s;lr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Kg(e,n,r,Hh(),i);return lO(e,o,tf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Kg(e,n,r,Hh(),i);return _1(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(lr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await nO(e),r=new $1(e);return n.register("authEvent",i=>(ue(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Yu,{type:Yu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Yu];o!==void 0&&n(!!o),_n(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=z1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return vE()||dE()||Yd()}}const mO=pO;var Gg="@firebase/auth",Qg="1.9.1";/**
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
 */class gO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function _O(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function vO(t){kn(new gn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ue(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yE(t)},u=new Cx(r,i,s,c);return Fx(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),kn(new gn("auth-internal",e=>{const n=pr(e.getProvider("auth").getImmediate());return(r=>new gO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jt(Gg,Qg,_O(t)),Jt(Gg,Qg,"esm2017")}/**
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
 */const yO=5*60,wO=Ww("authIdTokenMaxAge")||yO;let Jg=null;const EO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>wO)return;const i=n==null?void 0:n.token;Jg!==i&&(Jg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function TO(t=kc()){const e=Jr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Mx(t,{popupRedirectResolver:mO,persistence:[R1,p1,NE]}),r=Ww("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=EO(s.toString());c1(n,o,()=>o(n.currentUser)),l1(n,a=>o(a))}}const i=jw("auth");return i&&Ux(n,`http://${i}`),n}function bO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Px({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Sn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",bO().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});vO("Browser");var Yg=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Mr,BE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,y){function _(){}_.prototype=y.prototype,b.D=y.prototype,b.prototype=new _,b.prototype.constructor=b,b.C=function(R,T,S){for(var E=Array(arguments.length-2),G=2;G<arguments.length;G++)E[G-2]=arguments[G];return y.prototype[T].apply(R,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,y,_){_||(_=0);var R=Array(16);if(typeof y=="string")for(var T=0;16>T;++T)R[T]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(T=0;16>T;++T)R[T]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=b.g[0],_=b.g[1],T=b.g[2];var S=b.g[3],E=y+(S^_&(T^S))+R[0]+3614090360&4294967295;y=_+(E<<7&4294967295|E>>>25),E=S+(T^y&(_^T))+R[1]+3905402710&4294967295,S=y+(E<<12&4294967295|E>>>20),E=T+(_^S&(y^_))+R[2]+606105819&4294967295,T=S+(E<<17&4294967295|E>>>15),E=_+(y^T&(S^y))+R[3]+3250441966&4294967295,_=T+(E<<22&4294967295|E>>>10),E=y+(S^_&(T^S))+R[4]+4118548399&4294967295,y=_+(E<<7&4294967295|E>>>25),E=S+(T^y&(_^T))+R[5]+1200080426&4294967295,S=y+(E<<12&4294967295|E>>>20),E=T+(_^S&(y^_))+R[6]+2821735955&4294967295,T=S+(E<<17&4294967295|E>>>15),E=_+(y^T&(S^y))+R[7]+4249261313&4294967295,_=T+(E<<22&4294967295|E>>>10),E=y+(S^_&(T^S))+R[8]+1770035416&4294967295,y=_+(E<<7&4294967295|E>>>25),E=S+(T^y&(_^T))+R[9]+2336552879&4294967295,S=y+(E<<12&4294967295|E>>>20),E=T+(_^S&(y^_))+R[10]+4294925233&4294967295,T=S+(E<<17&4294967295|E>>>15),E=_+(y^T&(S^y))+R[11]+2304563134&4294967295,_=T+(E<<22&4294967295|E>>>10),E=y+(S^_&(T^S))+R[12]+1804603682&4294967295,y=_+(E<<7&4294967295|E>>>25),E=S+(T^y&(_^T))+R[13]+4254626195&4294967295,S=y+(E<<12&4294967295|E>>>20),E=T+(_^S&(y^_))+R[14]+2792965006&4294967295,T=S+(E<<17&4294967295|E>>>15),E=_+(y^T&(S^y))+R[15]+1236535329&4294967295,_=T+(E<<22&4294967295|E>>>10),E=y+(T^S&(_^T))+R[1]+4129170786&4294967295,y=_+(E<<5&4294967295|E>>>27),E=S+(_^T&(y^_))+R[6]+3225465664&4294967295,S=y+(E<<9&4294967295|E>>>23),E=T+(y^_&(S^y))+R[11]+643717713&4294967295,T=S+(E<<14&4294967295|E>>>18),E=_+(S^y&(T^S))+R[0]+3921069994&4294967295,_=T+(E<<20&4294967295|E>>>12),E=y+(T^S&(_^T))+R[5]+3593408605&4294967295,y=_+(E<<5&4294967295|E>>>27),E=S+(_^T&(y^_))+R[10]+38016083&4294967295,S=y+(E<<9&4294967295|E>>>23),E=T+(y^_&(S^y))+R[15]+3634488961&4294967295,T=S+(E<<14&4294967295|E>>>18),E=_+(S^y&(T^S))+R[4]+3889429448&4294967295,_=T+(E<<20&4294967295|E>>>12),E=y+(T^S&(_^T))+R[9]+568446438&4294967295,y=_+(E<<5&4294967295|E>>>27),E=S+(_^T&(y^_))+R[14]+3275163606&4294967295,S=y+(E<<9&4294967295|E>>>23),E=T+(y^_&(S^y))+R[3]+4107603335&4294967295,T=S+(E<<14&4294967295|E>>>18),E=_+(S^y&(T^S))+R[8]+1163531501&4294967295,_=T+(E<<20&4294967295|E>>>12),E=y+(T^S&(_^T))+R[13]+2850285829&4294967295,y=_+(E<<5&4294967295|E>>>27),E=S+(_^T&(y^_))+R[2]+4243563512&4294967295,S=y+(E<<9&4294967295|E>>>23),E=T+(y^_&(S^y))+R[7]+1735328473&4294967295,T=S+(E<<14&4294967295|E>>>18),E=_+(S^y&(T^S))+R[12]+2368359562&4294967295,_=T+(E<<20&4294967295|E>>>12),E=y+(_^T^S)+R[5]+4294588738&4294967295,y=_+(E<<4&4294967295|E>>>28),E=S+(y^_^T)+R[8]+2272392833&4294967295,S=y+(E<<11&4294967295|E>>>21),E=T+(S^y^_)+R[11]+1839030562&4294967295,T=S+(E<<16&4294967295|E>>>16),E=_+(T^S^y)+R[14]+4259657740&4294967295,_=T+(E<<23&4294967295|E>>>9),E=y+(_^T^S)+R[1]+2763975236&4294967295,y=_+(E<<4&4294967295|E>>>28),E=S+(y^_^T)+R[4]+1272893353&4294967295,S=y+(E<<11&4294967295|E>>>21),E=T+(S^y^_)+R[7]+4139469664&4294967295,T=S+(E<<16&4294967295|E>>>16),E=_+(T^S^y)+R[10]+3200236656&4294967295,_=T+(E<<23&4294967295|E>>>9),E=y+(_^T^S)+R[13]+681279174&4294967295,y=_+(E<<4&4294967295|E>>>28),E=S+(y^_^T)+R[0]+3936430074&4294967295,S=y+(E<<11&4294967295|E>>>21),E=T+(S^y^_)+R[3]+3572445317&4294967295,T=S+(E<<16&4294967295|E>>>16),E=_+(T^S^y)+R[6]+76029189&4294967295,_=T+(E<<23&4294967295|E>>>9),E=y+(_^T^S)+R[9]+3654602809&4294967295,y=_+(E<<4&4294967295|E>>>28),E=S+(y^_^T)+R[12]+3873151461&4294967295,S=y+(E<<11&4294967295|E>>>21),E=T+(S^y^_)+R[15]+530742520&4294967295,T=S+(E<<16&4294967295|E>>>16),E=_+(T^S^y)+R[2]+3299628645&4294967295,_=T+(E<<23&4294967295|E>>>9),E=y+(T^(_|~S))+R[0]+4096336452&4294967295,y=_+(E<<6&4294967295|E>>>26),E=S+(_^(y|~T))+R[7]+1126891415&4294967295,S=y+(E<<10&4294967295|E>>>22),E=T+(y^(S|~_))+R[14]+2878612391&4294967295,T=S+(E<<15&4294967295|E>>>17),E=_+(S^(T|~y))+R[5]+4237533241&4294967295,_=T+(E<<21&4294967295|E>>>11),E=y+(T^(_|~S))+R[12]+1700485571&4294967295,y=_+(E<<6&4294967295|E>>>26),E=S+(_^(y|~T))+R[3]+2399980690&4294967295,S=y+(E<<10&4294967295|E>>>22),E=T+(y^(S|~_))+R[10]+4293915773&4294967295,T=S+(E<<15&4294967295|E>>>17),E=_+(S^(T|~y))+R[1]+2240044497&4294967295,_=T+(E<<21&4294967295|E>>>11),E=y+(T^(_|~S))+R[8]+1873313359&4294967295,y=_+(E<<6&4294967295|E>>>26),E=S+(_^(y|~T))+R[15]+4264355552&4294967295,S=y+(E<<10&4294967295|E>>>22),E=T+(y^(S|~_))+R[6]+2734768916&4294967295,T=S+(E<<15&4294967295|E>>>17),E=_+(S^(T|~y))+R[13]+1309151649&4294967295,_=T+(E<<21&4294967295|E>>>11),E=y+(T^(_|~S))+R[4]+4149444226&4294967295,y=_+(E<<6&4294967295|E>>>26),E=S+(_^(y|~T))+R[11]+3174756917&4294967295,S=y+(E<<10&4294967295|E>>>22),E=T+(y^(S|~_))+R[2]+718787259&4294967295,T=S+(E<<15&4294967295|E>>>17),E=_+(S^(T|~y))+R[9]+3951481745&4294967295,b.g[0]=b.g[0]+y&4294967295,b.g[1]=b.g[1]+(T+(E<<21&4294967295|E>>>11))&4294967295,b.g[2]=b.g[2]+T&4294967295,b.g[3]=b.g[3]+S&4294967295}r.prototype.u=function(b,y){y===void 0&&(y=b.length);for(var _=y-this.blockSize,R=this.B,T=this.h,S=0;S<y;){if(T==0)for(;S<=_;)i(this,b,S),S+=this.blockSize;if(typeof b=="string"){for(;S<y;)if(R[T++]=b.charCodeAt(S++),T==this.blockSize){i(this,R),T=0;break}}else for(;S<y;)if(R[T++]=b[S++],T==this.blockSize){i(this,R),T=0;break}}this.h=T,this.o+=y},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var y=1;y<b.length-8;++y)b[y]=0;var _=8*this.o;for(y=b.length-8;y<b.length;++y)b[y]=_&255,_/=256;for(this.u(b),b=Array(16),y=_=0;4>y;++y)for(var R=0;32>R;R+=8)b[_++]=this.g[y]>>>R&255;return b};function s(b,y){var _=a;return Object.prototype.hasOwnProperty.call(_,b)?_[b]:_[b]=y(b)}function o(b,y){this.h=y;for(var _=[],R=!0,T=b.length-1;0<=T;T--){var S=b[T]|0;R&&S==y||(_[T]=S,R=!1)}this.g=_}var a={};function c(b){return-128<=b&&128>b?s(b,function(y){return new o([y|0],0>y?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return f;if(0>b)return A(u(-b));for(var y=[],_=1,R=0;b>=_;R++)y[R]=b/_|0,_*=4294967296;return new o(y,0)}function h(b,y){if(b.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(b.charAt(0)=="-")return A(h(b.substring(1),y));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=u(Math.pow(y,8)),R=f,T=0;T<b.length;T+=8){var S=Math.min(8,b.length-T),E=parseInt(b.substring(T,T+S),y);8>S?(S=u(Math.pow(y,S)),R=R.j(S).add(u(E))):(R=R.j(_),R=R.add(u(E)))}return R}var f=c(0),p=c(1),g=c(16777216);t=o.prototype,t.m=function(){if(C(this))return-A(this).m();for(var b=0,y=1,_=0;_<this.g.length;_++){var R=this.i(_);b+=(0<=R?R:4294967296+R)*y,y*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(w(this))return"0";if(C(this))return"-"+A(this).toString(b);for(var y=u(Math.pow(b,6)),_=this,R="";;){var T=D(_,y).g;_=x(_,T.j(y));var S=((0<_.g.length?_.g[0]:_.h)>>>0).toString(b);if(_=T,w(_))return S+R;for(;6>S.length;)S="0"+S;R=S+R}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function w(b){if(b.h!=0)return!1;for(var y=0;y<b.g.length;y++)if(b.g[y]!=0)return!1;return!0}function C(b){return b.h==-1}t.l=function(b){return b=x(this,b),C(b)?-1:w(b)?0:1};function A(b){for(var y=b.g.length,_=[],R=0;R<y;R++)_[R]=~b.g[R];return new o(_,~b.h).add(p)}t.abs=function(){return C(this)?A(this):this},t.add=function(b){for(var y=Math.max(this.g.length,b.g.length),_=[],R=0,T=0;T<=y;T++){var S=R+(this.i(T)&65535)+(b.i(T)&65535),E=(S>>>16)+(this.i(T)>>>16)+(b.i(T)>>>16);R=E>>>16,S&=65535,E&=65535,_[T]=E<<16|S}return new o(_,_[_.length-1]&-2147483648?-1:0)};function x(b,y){return b.add(A(y))}t.j=function(b){if(w(this)||w(b))return f;if(C(this))return C(b)?A(this).j(A(b)):A(A(this).j(b));if(C(b))return A(this.j(A(b)));if(0>this.l(g)&&0>b.l(g))return u(this.m()*b.m());for(var y=this.g.length+b.g.length,_=[],R=0;R<2*y;R++)_[R]=0;for(R=0;R<this.g.length;R++)for(var T=0;T<b.g.length;T++){var S=this.i(R)>>>16,E=this.i(R)&65535,G=b.i(T)>>>16,oe=b.i(T)&65535;_[2*R+2*T]+=E*oe,k(_,2*R+2*T),_[2*R+2*T+1]+=S*oe,k(_,2*R+2*T+1),_[2*R+2*T+1]+=E*G,k(_,2*R+2*T+1),_[2*R+2*T+2]+=S*G,k(_,2*R+2*T+2)}for(R=0;R<y;R++)_[R]=_[2*R+1]<<16|_[2*R];for(R=y;R<2*y;R++)_[R]=0;return new o(_,0)};function k(b,y){for(;(b[y]&65535)!=b[y];)b[y+1]+=b[y]>>>16,b[y]&=65535,y++}function O(b,y){this.g=b,this.h=y}function D(b,y){if(w(y))throw Error("division by zero");if(w(b))return new O(f,f);if(C(b))return y=D(A(b),y),new O(A(y.g),A(y.h));if(C(y))return y=D(b,A(y)),new O(A(y.g),y.h);if(30<b.g.length){if(C(b)||C(y))throw Error("slowDivide_ only works with positive integers.");for(var _=p,R=y;0>=R.l(b);)_=V(_),R=V(R);var T=H(_,1),S=H(R,1);for(R=H(R,2),_=H(_,2);!w(R);){var E=S.add(R);0>=E.l(b)&&(T=T.add(_),S=E),R=H(R,1),_=H(_,1)}return y=x(b,T.j(y)),new O(T,y)}for(T=f;0<=b.l(y);){for(_=Math.max(1,Math.floor(b.m()/y.m())),R=Math.ceil(Math.log(_)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),S=u(_),E=S.j(y);C(E)||0<E.l(b);)_-=R,S=u(_),E=S.j(y);w(S)&&(S=p),T=T.add(S),b=x(b,E)}return new O(T,b)}t.A=function(b){return D(this,b).h},t.and=function(b){for(var y=Math.max(this.g.length,b.g.length),_=[],R=0;R<y;R++)_[R]=this.i(R)&b.i(R);return new o(_,this.h&b.h)},t.or=function(b){for(var y=Math.max(this.g.length,b.g.length),_=[],R=0;R<y;R++)_[R]=this.i(R)|b.i(R);return new o(_,this.h|b.h)},t.xor=function(b){for(var y=Math.max(this.g.length,b.g.length),_=[],R=0;R<y;R++)_[R]=this.i(R)^b.i(R);return new o(_,this.h^b.h)};function V(b){for(var y=b.g.length+1,_=[],R=0;R<y;R++)_[R]=b.i(R)<<1|b.i(R-1)>>>31;return new o(_,b.h)}function H(b,y){var _=y>>5;y%=32;for(var R=b.g.length-_,T=[],S=0;S<R;S++)T[S]=0<y?b.i(S+_)>>>y|b.i(S+_+1)<<32-y:b.i(S+_);return new o(T,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,BE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Mr=o}).apply(typeof Yg!="undefined"?Yg:typeof self!="undefined"?self:typeof window!="undefined"?window:{});var Ha=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jE,lo,HE,hl,Kh,zE,WE,KE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,m){return l==Array.prototype||l==Object.prototype||(l[d]=m.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ha=="object"&&Ha];for(var d=0;d<l.length;++d){var m=l[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(l,d){if(d)e:{var m=r;l=l.split(".");for(var v=0;v<l.length-1;v++){var N=l[v];if(!(N in m))break e;m=m[N]}l=l[l.length-1],v=m[l],d=d(v),d!=v&&d!=null&&e(m,l,{configurable:!0,writable:!0,value:d})}}function s(l,d){l instanceof String&&(l+="");var m=0,v=!1,N={next:function(){if(!v&&m<l.length){var M=m++;return{value:d(M,l[M]),done:!1}}return v=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(l){return l||function(){return s(this,function(d,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function u(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,m){return l.call.apply(l.bind,arguments)}function f(l,d,m){if(!l)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,v),l.apply(d,N)}}return function(){return l.apply(d,arguments)}}function p(l,d,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,p.apply(null,arguments)}function g(l,d){var m=Array.prototype.slice.call(arguments,1);return function(){var v=m.slice();return v.push.apply(v,arguments),l.apply(this,v)}}function w(l,d){function m(){}m.prototype=d.prototype,l.aa=d.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(v,N,M){for(var X=Array(arguments.length-2),je=2;je<arguments.length;je++)X[je-2]=arguments[je];return d.prototype[N].apply(v,X)}}function C(l){const d=l.length;if(0<d){const m=Array(d);for(let v=0;v<d;v++)m[v]=l[v];return m}return[]}function A(l,d){for(let m=1;m<arguments.length;m++){const v=arguments[m];if(c(v)){const N=l.length||0,M=v.length||0;l.length=N+M;for(let X=0;X<M;X++)l[N+X]=v[X]}else l.push(v)}}class x{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function k(l){return/^[\s\xa0]*$/.test(l)}function O(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function D(l){return D[" "](l),l}D[" "]=function(){};var V=O().indexOf("Gecko")!=-1&&!(O().toLowerCase().indexOf("webkit")!=-1&&O().indexOf("Edge")==-1)&&!(O().indexOf("Trident")!=-1||O().indexOf("MSIE")!=-1)&&O().indexOf("Edge")==-1;function H(l,d,m){for(const v in l)d.call(m,l[v],v,l)}function b(l,d){for(const m in l)d.call(void 0,l[m],m,l)}function y(l){const d={};for(const m in l)d[m]=l[m];return d}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(l,d){let m,v;for(let N=1;N<arguments.length;N++){v=arguments[N];for(m in v)l[m]=v[m];for(let M=0;M<_.length;M++)m=_[M],Object.prototype.hasOwnProperty.call(v,m)&&(l[m]=v[m])}}function T(l){var d=1;l=l.split(":");const m=[];for(;0<d&&l.length;)m.push(l.shift()),d--;return l.length&&m.push(l.join(":")),m}function S(l){a.setTimeout(()=>{throw l},0)}function E(){var l=Be;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class G{constructor(){this.h=this.g=null}add(d,m){const v=oe.get();v.set(d,m),this.h?this.h.next=v:this.g=v,this.h=v}}var oe=new x(()=>new se,l=>l.reset());class se{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let _e,he=!1,Be=new G,Ze=()=>{const l=a.Promise.resolve(void 0);_e=()=>{l.then(st)}};var st=()=>{for(var l;l=E();){try{l.h.call(l.g)}catch(m){S(m)}var d=oe;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}he=!1};function De(){this.s=this.s,this.C=this.C}De.prototype.s=!1,De.prototype.ma=function(){this.s||(this.s=!0,this.N())},De.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function de(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}de.prototype.h=function(){this.defaultPrevented=!0};var vt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};a.addEventListener("test",m,d),a.removeEventListener("test",m,d)}catch{}return l}();function ce(l,d){if(de.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,v=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(V){e:{try{D(d.nodeName);var N=!0;break e}catch{}N=!1}N||(d=null)}}else m=="mouseover"?d=l.fromElement:m=="mouseout"&&(d=l.toElement);this.relatedTarget=d,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Ae[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&ce.aa.h.call(this)}}w(ce,de);var Ae={2:"touch",3:"pen",4:"mouse"};ce.prototype.h=function(){ce.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var F="closure_listenable_"+(1e6*Math.random()|0),Z=0;function U(l,d,m,v,N){this.listener=l,this.proxy=null,this.src=d,this.type=m,this.capture=!!v,this.ha=N,this.key=++Z,this.da=this.fa=!1}function re(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Re(l){this.src=l,this.g={},this.h=0}Re.prototype.add=function(l,d,m,v,N){var M=l.toString();l=this.g[M],l||(l=this.g[M]=[],this.h++);var X=I(l,d,v,N);return-1<X?(d=l[X],m||(d.fa=!1)):(d=new U(d,this.src,M,!!v,N),d.fa=m,l.push(d)),d};function Ue(l,d){var m=d.type;if(m in l.g){var v=l.g[m],N=Array.prototype.indexOf.call(v,d,void 0),M;(M=0<=N)&&Array.prototype.splice.call(v,N,1),M&&(re(d),l.g[m].length==0&&(delete l.g[m],l.h--))}}function I(l,d,m,v){for(var N=0;N<l.length;++N){var M=l[N];if(!M.da&&M.listener==d&&M.capture==!!m&&M.ha==v)return N}return-1}var P="closure_lm_"+(1e6*Math.random()|0),L={};function z(l,d,m,v,N){if(v&&v.once)return ee(l,d,m,v,N);if(Array.isArray(d)){for(var M=0;M<d.length;M++)z(l,d[M],m,v,N);return null}return m=me(m),l&&l[F]?l.K(d,m,u(v)?!!v.capture:!!v,N):q(l,d,m,!1,v,N)}function q(l,d,m,v,N,M){if(!d)throw Error("Invalid event type");var X=u(N)?!!N.capture:!!N,je=ne(l);if(je||(l[P]=je=new Re(l)),m=je.add(d,m,v,X,M),m.proxy)return m;if(v=W(),m.proxy=v,v.src=l,v.listener=m,l.addEventListener)vt||(N=X),N===void 0&&(N=!1),l.addEventListener(d.toString(),v,N);else if(l.attachEvent)l.attachEvent(K(d.toString()),v);else if(l.addListener&&l.removeListener)l.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return m}function W(){function l(m){return d.call(l.src,l.listener,m)}const d=fe;return l}function ee(l,d,m,v,N){if(Array.isArray(d)){for(var M=0;M<d.length;M++)ee(l,d[M],m,v,N);return null}return m=me(m),l&&l[F]?l.L(d,m,u(v)?!!v.capture:!!v,N):q(l,d,m,!0,v,N)}function Y(l,d,m,v,N){if(Array.isArray(d))for(var M=0;M<d.length;M++)Y(l,d[M],m,v,N);else v=u(v)?!!v.capture:!!v,m=me(m),l&&l[F]?(l=l.i,d=String(d).toString(),d in l.g&&(M=l.g[d],m=I(M,m,v,N),-1<m&&(re(M[m]),Array.prototype.splice.call(M,m,1),M.length==0&&(delete l.g[d],l.h--)))):l&&(l=ne(l))&&(d=l.g[d.toString()],l=-1,d&&(l=I(d,m,v,N)),(m=-1<l?d[l]:null)&&J(m))}function J(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[F])Ue(d.i,l);else{var m=l.type,v=l.proxy;d.removeEventListener?d.removeEventListener(m,v,l.capture):d.detachEvent?d.detachEvent(K(m),v):d.addListener&&d.removeListener&&d.removeListener(v),(m=ne(d))?(Ue(m,l),m.h==0&&(m.src=null,d[P]=null)):re(l)}}}function K(l){return l in L?L[l]:L[l]="on"+l}function fe(l,d){if(l.da)l=!0;else{d=new ce(d,this);var m=l.listener,v=l.ha||l.src;l.fa&&J(l),l=m.call(v,d)}return l}function ne(l){return l=l[P],l instanceof Re?l:null}var ae="__closure_events_fn_"+(1e9*Math.random()>>>0);function me(l){return typeof l=="function"?l:(l[ae]||(l[ae]=function(d){return l.handleEvent(d)}),l[ae])}function pe(){De.call(this),this.i=new Re(this),this.M=this,this.F=null}w(pe,De),pe.prototype[F]=!0,pe.prototype.removeEventListener=function(l,d,m,v){Y(this,l,d,m,v)};function be(l,d){var m,v=l.F;if(v)for(m=[];v;v=v.F)m.push(v);if(l=l.M,v=d.type||d,typeof d=="string")d=new de(d,l);else if(d instanceof de)d.target=d.target||l;else{var N=d;d=new de(v,l),R(d,N)}if(N=!0,m)for(var M=m.length-1;0<=M;M--){var X=d.g=m[M];N=xe(X,v,!0,d)&&N}if(X=d.g=l,N=xe(X,v,!0,d)&&N,N=xe(X,v,!1,d)&&N,m)for(M=0;M<m.length;M++)X=d.g=m[M],N=xe(X,v,!1,d)&&N}pe.prototype.N=function(){if(pe.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var m=l.g[d],v=0;v<m.length;v++)re(m[v]);delete l.g[d],l.h--}}this.F=null},pe.prototype.K=function(l,d,m,v){return this.i.add(String(l),d,!1,m,v)},pe.prototype.L=function(l,d,m,v){return this.i.add(String(l),d,!0,m,v)};function xe(l,d,m,v){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var N=!0,M=0;M<d.length;++M){var X=d[M];if(X&&!X.da&&X.capture==m){var je=X.listener,Et=X.ha||X.src;X.fa&&Ue(l.i,X),N=je.call(Et,v)!==!1&&N}}return N&&!v.defaultPrevented}function Rt(l,d,m){if(typeof l=="function")m&&(l=p(l,m));else if(l&&typeof l.handleEvent=="function")l=p(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function dt(l){l.g=Rt(()=>{l.g=null,l.i&&(l.i=!1,dt(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class Zt extends De{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:dt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ft(l){De.call(this),this.h=l,this.g={}}w(ft,De);var gr=[];function Fs(l){H(l.g,function(d,m){this.g.hasOwnProperty(m)&&J(d)},l),l.g={}}ft.prototype.N=function(){ft.aa.N.call(this),Fs(this)},ft.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var wt=a.JSON.stringify,an=a.JSON.parse,ya=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function ru(){}ru.prototype.h=null;function rp(l){return l.h||(l.h=l.i())}function ip(){}var Us={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function iu(){de.call(this,"d")}w(iu,de);function su(){de.call(this,"c")}w(su,de);var Zr={},sp=null;function wa(){return sp=sp||new pe}Zr.La="serverreachability";function op(l){de.call(this,Zr.La,l)}w(op,de);function $s(l){const d=wa();be(d,new op(d))}Zr.STAT_EVENT="statevent";function ap(l,d){de.call(this,Zr.STAT_EVENT,l),this.stat=d}w(ap,de);function Vt(l){const d=wa();be(d,new ap(d,l))}Zr.Ma="timingevent";function lp(l,d){de.call(this,Zr.Ma,l),this.size=d}w(lp,de);function qs(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function Bs(){this.g=!0}Bs.prototype.xa=function(){this.g=!1};function p0(l,d,m,v,N,M){l.info(function(){if(l.g)if(M)for(var X="",je=M.split("&"),Et=0;Et<je.length;Et++){var Ne=je[Et].split("=");if(1<Ne.length){var St=Ne[0];Ne=Ne[1];var Ct=St.split("_");X=2<=Ct.length&&Ct[1]=="type"?X+(St+"="+Ne+"&"):X+(St+"=redacted&")}}else X=null;else X=M;return"XMLHTTP REQ ("+v+") [attempt "+N+"]: "+d+`
`+m+`
`+X})}function m0(l,d,m,v,N,M,X){l.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+N+"]: "+d+`
`+m+`
`+M+" "+X})}function $i(l,d,m,v){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+_0(l,m)+(v?" "+v:"")})}function g0(l,d){l.info(function(){return"TIMEOUT: "+d})}Bs.prototype.info=function(){};function _0(l,d){if(!l.g)return d;if(!d)return null;try{var m=JSON.parse(d);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var v=m[l];if(!(2>v.length)){var N=v[1];if(Array.isArray(N)&&!(1>N.length)){var M=N[0];if(M!="noop"&&M!="stop"&&M!="close")for(var X=1;X<N.length;X++)N[X]=""}}}}return wt(m)}catch{return d}}var Ea={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},cp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ou;function Ta(){}w(Ta,ru),Ta.prototype.g=function(){return new XMLHttpRequest},Ta.prototype.i=function(){return{}},ou=new Ta;function _r(l,d,m,v){this.j=l,this.i=d,this.l=m,this.R=v||1,this.U=new ft(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new up}function up(){this.i=null,this.g="",this.h=!1}var hp={},au={};function lu(l,d,m){l.L=1,l.v=Ra(Kn(d)),l.m=m,l.P=!0,dp(l,null)}function dp(l,d){l.F=Date.now(),ba(l),l.A=Kn(l.v);var m=l.A,v=l.R;Array.isArray(v)||(v=[String(v)]),Rp(m.i,"t",v),l.C=0,m=l.j.J,l.h=new up,l.g=Hp(l.j,m?d:null,!l.m),0<l.O&&(l.M=new Zt(p(l.Y,l,l.g),l.O)),d=l.U,m=l.g,v=l.ca;var N="readystatechange";Array.isArray(N)||(N&&(gr[0]=N.toString()),N=gr);for(var M=0;M<N.length;M++){var X=z(m,N[M],v||d.handleEvent,!1,d.h||d);if(!X)break;d.g[X.key]=X}d=l.H?y(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),$s(),p0(l.i,l.u,l.A,l.l,l.R,l.m)}_r.prototype.ca=function(l){l=l.target;const d=this.M;d&&Gn(l)==3?d.j():this.Y(l)},_r.prototype.Y=function(l){try{if(l==this.g)e:{const Ct=Gn(this.g);var d=this.g.Ba();const ji=this.g.Z();if(!(3>Ct)&&(Ct!=3||this.g&&(this.h.h||this.g.oa()||Dp(this.g)))){this.J||Ct!=4||d==7||(d==8||0>=ji?$s(3):$s(2)),cu(this);var m=this.g.Z();this.X=m;t:if(fp(this)){var v=Dp(this.g);l="";var N=v.length,M=Gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){ei(this),js(this);var X="";break t}this.h.i=new a.TextDecoder}for(d=0;d<N;d++)this.h.h=!0,l+=this.h.i.decode(v[d],{stream:!(M&&d==N-1)});v.length=0,this.h.g+=l,this.C=0,X=this.h.g}else X=this.g.oa();if(this.o=m==200,m0(this.i,this.u,this.A,this.l,this.R,Ct,m),this.o){if(this.T&&!this.K){t:{if(this.g){var je,Et=this.g;if((je=Et.g?Et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(je)){var Ne=je;break t}}Ne=null}if(m=Ne)$i(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,uu(this,m);else{this.o=!1,this.s=3,Vt(12),ei(this),js(this);break e}}if(this.P){m=!0;let yn;for(;!this.J&&this.C<X.length;)if(yn=v0(this,X),yn==au){Ct==4&&(this.s=4,Vt(14),m=!1),$i(this.i,this.l,null,"[Incomplete Response]");break}else if(yn==hp){this.s=4,Vt(15),$i(this.i,this.l,X,"[Invalid Chunk]"),m=!1;break}else $i(this.i,this.l,yn,null),uu(this,yn);if(fp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ct!=4||X.length!=0||this.h.h||(this.s=1,Vt(16),m=!1),this.o=this.o&&m,!m)$i(this.i,this.l,X,"[Invalid Chunked Response]"),ei(this),js(this);else if(0<X.length&&!this.W){this.W=!0;var St=this.j;St.g==this&&St.ba&&!St.M&&(St.j.info("Great, no buffering proxy detected. Bytes received: "+X.length),gu(St),St.M=!0,Vt(11))}}else $i(this.i,this.l,X,null),uu(this,X);Ct==4&&ei(this),this.o&&!this.J&&(Ct==4?$p(this.j,this):(this.o=!1,ba(this)))}else L0(this.g),m==400&&0<X.indexOf("Unknown SID")?(this.s=3,Vt(12)):(this.s=0,Vt(13)),ei(this),js(this)}}}catch{}finally{}};function fp(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function v0(l,d){var m=l.C,v=d.indexOf(`
`,m);return v==-1?au:(m=Number(d.substring(m,v)),isNaN(m)?hp:(v+=1,v+m>d.length?au:(d=d.slice(v,v+m),l.C=v+m,d)))}_r.prototype.cancel=function(){this.J=!0,ei(this)};function ba(l){l.S=Date.now()+l.I,pp(l,l.I)}function pp(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=qs(p(l.ba,l),d)}function cu(l){l.B&&(a.clearTimeout(l.B),l.B=null)}_r.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(g0(this.i,this.A),this.L!=2&&($s(),Vt(17)),ei(this),this.s=2,js(this)):pp(this,this.S-l)};function js(l){l.j.G==0||l.J||$p(l.j,l)}function ei(l){cu(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,Fs(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function uu(l,d){try{var m=l.j;if(m.G!=0&&(m.g==l||hu(m.h,l))){if(!l.K&&hu(m.h,l)&&m.G==3){try{var v=m.Da.g.parse(d)}catch{v=null}if(Array.isArray(v)&&v.length==3){var N=v;if(N[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)Oa(m),ka(m);else break e;mu(m),Vt(18)}}else m.za=N[1],0<m.za-m.T&&37500>N[2]&&m.F&&m.v==0&&!m.C&&(m.C=qs(p(m.Za,m),6e3));if(1>=_p(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else ni(m,11)}else if((l.K||m.g==l)&&Oa(m),!k(d))for(N=m.Da.g.parse(d),d=0;d<N.length;d++){let Ne=N[d];if(m.T=Ne[0],Ne=Ne[1],m.G==2)if(Ne[0]=="c"){m.K=Ne[1],m.ia=Ne[2];const St=Ne[3];St!=null&&(m.la=St,m.j.info("VER="+m.la));const Ct=Ne[4];Ct!=null&&(m.Aa=Ct,m.j.info("SVER="+m.Aa));const ji=Ne[5];ji!=null&&typeof ji=="number"&&0<ji&&(v=1.5*ji,m.L=v,m.j.info("backChannelRequestTimeoutMs_="+v)),v=m;const yn=l.g;if(yn){const Na=yn.g?yn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Na){var M=v.h;M.g||Na.indexOf("spdy")==-1&&Na.indexOf("quic")==-1&&Na.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(du(M,M.h),M.h=null))}if(v.D){const _u=yn.g?yn.g.getResponseHeader("X-HTTP-Session-Id"):null;_u&&(v.ya=_u,Ge(v.I,v.D,_u))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),v=m;var X=l;if(v.qa=jp(v,v.J?v.ia:null,v.W),X.K){vp(v.h,X);var je=X,Et=v.L;Et&&(je.I=Et),je.B&&(cu(je),ba(je)),v.g=X}else Fp(v);0<m.i.length&&xa(m)}else Ne[0]!="stop"&&Ne[0]!="close"||ni(m,7);else m.G==3&&(Ne[0]=="stop"||Ne[0]=="close"?Ne[0]=="stop"?ni(m,7):pu(m):Ne[0]!="noop"&&m.l&&m.l.ta(Ne),m.v=0)}}$s(4)}catch{}}var y0=class{constructor(l,d){this.g=l,this.map=d}};function mp(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function gp(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function _p(l){return l.h?1:l.g?l.g.size:0}function hu(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function du(l,d){l.g?l.g.add(d):l.h=d}function vp(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}mp.prototype.cancel=function(){if(this.i=yp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function yp(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const m of l.g.values())d=d.concat(m.D);return d}return C(l.i)}function w0(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map!="undefined"&&l instanceof Map||typeof Set!="undefined"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var d=[],m=l.length,v=0;v<m;v++)d.push(l[v]);return d}d=[],m=0;for(v in l)d[m++]=l[v];return d}function E0(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map!="undefined"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set!="undefined"&&l instanceof Set)){if(c(l)||typeof l=="string"){var d=[];l=l.length;for(var m=0;m<l;m++)d.push(m);return d}d=[],m=0;for(const v in l)d[m++]=v;return d}}}function wp(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var m=E0(l),v=w0(l),N=v.length,M=0;M<N;M++)d.call(void 0,v[M],m&&m[M],l)}var Ep=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function T0(l,d){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var v=l[m].indexOf("="),N=null;if(0<=v){var M=l[m].substring(0,v);N=l[m].substring(v+1)}else M=l[m];d(M,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function ti(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof ti){this.h=l.h,Ia(this,l.j),this.o=l.o,this.g=l.g,Aa(this,l.s),this.l=l.l;var d=l.i,m=new Ws;m.i=d.i,d.g&&(m.g=new Map(d.g),m.h=d.h),Tp(this,m),this.m=l.m}else l&&(d=String(l).match(Ep))?(this.h=!1,Ia(this,d[1]||"",!0),this.o=Hs(d[2]||""),this.g=Hs(d[3]||"",!0),Aa(this,d[4]),this.l=Hs(d[5]||"",!0),Tp(this,d[6]||"",!0),this.m=Hs(d[7]||"")):(this.h=!1,this.i=new Ws(null,this.h))}ti.prototype.toString=function(){var l=[],d=this.j;d&&l.push(zs(d,bp,!0),":");var m=this.g;return(m||d=="file")&&(l.push("//"),(d=this.o)&&l.push(zs(d,bp,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(zs(m,m.charAt(0)=="/"?A0:I0,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",zs(m,S0)),l.join("")};function Kn(l){return new ti(l)}function Ia(l,d,m){l.j=m?Hs(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function Aa(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function Tp(l,d,m){d instanceof Ws?(l.i=d,C0(l.i,l.h)):(m||(d=zs(d,R0)),l.i=new Ws(d,l.h))}function Ge(l,d,m){l.i.set(d,m)}function Ra(l){return Ge(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Hs(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function zs(l,d,m){return typeof l=="string"?(l=encodeURI(l).replace(d,b0),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function b0(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var bp=/[#\/\?@]/g,I0=/[#\?:]/g,A0=/[#\?]/g,R0=/[#\?@]/g,S0=/#/g;function Ws(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function vr(l){l.g||(l.g=new Map,l.h=0,l.i&&T0(l.i,function(d,m){l.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}t=Ws.prototype,t.add=function(l,d){vr(this),this.i=null,l=qi(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(d),this.h+=1,this};function Ip(l,d){vr(l),d=qi(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function Ap(l,d){return vr(l),d=qi(l,d),l.g.has(d)}t.forEach=function(l,d){vr(this),this.g.forEach(function(m,v){m.forEach(function(N){l.call(d,N,v,this)},this)},this)},t.na=function(){vr(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),m=[];for(let v=0;v<d.length;v++){const N=l[v];for(let M=0;M<N.length;M++)m.push(d[v])}return m},t.V=function(l){vr(this);let d=[];if(typeof l=="string")Ap(this,l)&&(d=d.concat(this.g.get(qi(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)d=d.concat(l[m])}return d},t.set=function(l,d){return vr(this),this.i=null,l=qi(this,l),Ap(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function Rp(l,d,m){Ip(l,d),0<m.length&&(l.i=null,l.g.set(qi(l,d),C(m)),l.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var m=0;m<d.length;m++){var v=d[m];const M=encodeURIComponent(String(v)),X=this.V(v);for(v=0;v<X.length;v++){var N=M;X[v]!==""&&(N+="="+encodeURIComponent(String(X[v]))),l.push(N)}}return this.i=l.join("&")};function qi(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function C0(l,d){d&&!l.j&&(vr(l),l.i=null,l.g.forEach(function(m,v){var N=v.toLowerCase();v!=N&&(Ip(this,v),Rp(this,N,m))},l)),l.j=d}function P0(l,d){const m=new Bs;if(a.Image){const v=new Image;v.onload=g(yr,m,"TestLoadImage: loaded",!0,d,v),v.onerror=g(yr,m,"TestLoadImage: error",!1,d,v),v.onabort=g(yr,m,"TestLoadImage: abort",!1,d,v),v.ontimeout=g(yr,m,"TestLoadImage: timeout",!1,d,v),a.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=l}else d(!1)}function k0(l,d){const m=new Bs,v=new AbortController,N=setTimeout(()=>{v.abort(),yr(m,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:v.signal}).then(M=>{clearTimeout(N),M.ok?yr(m,"TestPingServer: ok",!0,d):yr(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(N),yr(m,"TestPingServer: error",!1,d)})}function yr(l,d,m,v,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),v(m)}catch{}}function x0(){this.g=new ya}function O0(l,d,m){const v=m||"";try{wp(l,function(N,M){let X=N;u(N)&&(X=wt(N)),d.push(v+M+"="+encodeURIComponent(X))})}catch(N){throw d.push(v+"type="+encodeURIComponent("_badmap")),N}}function Sa(l){this.l=l.Ub||null,this.j=l.eb||!1}w(Sa,ru),Sa.prototype.g=function(){return new Ca(this.l,this.j)},Sa.prototype.i=function(l){return function(){return l}}({});function Ca(l,d){pe.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}w(Ca,pe),t=Ca.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,Gs(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ks(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Gs(this)),this.g&&(this.readyState=3,Gs(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream!="undefined"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Sp(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Sp(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?Ks(this):Gs(this),this.readyState==3&&Sp(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Ks(this))},t.Qa=function(l){this.g&&(this.response=l,Ks(this))},t.ga=function(){this.g&&Ks(this)};function Ks(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Gs(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=d.next();return l.join(`\r
`)};function Gs(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ca.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Cp(l){let d="";return H(l,function(m,v){d+=v,d+=":",d+=m,d+=`\r
`}),d}function fu(l,d,m){e:{for(v in m){var v=!1;break e}v=!0}v||(m=Cp(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):Ge(l,d,m))}function tt(l){pe.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}w(tt,pe);var D0=/^https?$/i,N0=["POST","PUT"];t=tt.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,m,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ou.g(),this.v=this.o?rp(this.o):rp(ou),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(M){Pp(this,M);return}if(l=m||"",m=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var N in v)m.set(N,v[N]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const M of v.keys())m.set(M,v.get(M));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(m.keys()).find(M=>M.toLowerCase()=="content-type"),N=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(N0,d,void 0))||v||N||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,X]of m)this.g.setRequestHeader(M,X);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Op(this),this.u=!0,this.g.send(l),this.u=!1}catch(M){Pp(this,M)}};function Pp(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,kp(l),Pa(l)}function kp(l){l.A||(l.A=!0,be(l,"complete"),be(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,be(this,"complete"),be(this,"abort"),Pa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Pa(this,!0)),tt.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?xp(this):this.bb())},t.bb=function(){xp(this)};function xp(l){if(l.h&&typeof o!="undefined"&&(!l.v[1]||Gn(l)!=4||l.Z()!=2)){if(l.u&&Gn(l)==4)Rt(l.Ea,0,l);else if(be(l,"readystatechange"),Gn(l)==4){l.h=!1;try{const X=l.Z();e:switch(X){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var m;if(!(m=d)){var v;if(v=X===0){var N=String(l.D).match(Ep)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),v=!D0.test(N?N.toLowerCase():"")}m=v}if(m)be(l,"complete"),be(l,"success");else{l.m=6;try{var M=2<Gn(l)?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.Z()+"]",kp(l)}}finally{Pa(l)}}}}function Pa(l,d){if(l.g){Op(l);const m=l.g,v=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||be(l,"ready");try{m.onreadystatechange=v}catch{}}}function Op(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Gn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Gn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),an(d)}};function Dp(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function L0(l){const d={};l=(l.g&&2<=Gn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<l.length;v++){if(k(l[v]))continue;var m=T(l[v]);const N=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const M=d[N]||[];d[N]=M,M.push(m)}b(d,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qs(l,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||d}function Np(l){this.Aa=0,this.i=[],this.j=new Bs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Qs("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Qs("baseRetryDelayMs",5e3,l),this.cb=Qs("retryDelaySeedMs",1e4,l),this.Wa=Qs("forwardChannelMaxRetries",2,l),this.wa=Qs("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new mp(l&&l.concurrentRequestLimit),this.Da=new x0,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Np.prototype,t.la=8,t.G=1,t.connect=function(l,d,m,v){Vt(0),this.W=l,this.H=d||{},m&&v!==void 0&&(this.H.OSID=m,this.H.OAID=v),this.F=this.X,this.I=jp(this,null,this.W),xa(this)};function pu(l){if(Lp(l),l.G==3){var d=l.U++,m=Kn(l.I);if(Ge(m,"SID",l.K),Ge(m,"RID",d),Ge(m,"TYPE","terminate"),Js(l,m),d=new _r(l,l.j,d),d.L=2,d.v=Ra(Kn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=d.v,m=!0),m||(d.g=Hp(d.j,null),d.g.ea(d.v)),d.F=Date.now(),ba(d)}Bp(l)}function ka(l){l.g&&(gu(l),l.g.cancel(),l.g=null)}function Lp(l){ka(l),l.u&&(a.clearTimeout(l.u),l.u=null),Oa(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function xa(l){if(!gp(l.h)&&!l.s){l.s=!0;var d=l.Ga;_e||Ze(),he||(_e(),he=!0),Be.add(d,l),l.B=0}}function V0(l,d){return _p(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=qs(p(l.Ga,l,d),qp(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const N=new _r(this,this.j,l);let M=this.o;if(this.S&&(M?(M=y(M),R(M,this.S)):M=this.S),this.m!==null||this.O||(N.H=M,M=null),this.P)e:{for(var d=0,m=0;m<this.i.length;m++){t:{var v=this.i[m];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(d+=v,4096<d){d=m;break e}if(d===4096||m===this.i.length-1){d=m+1;break e}}d=1e3}else d=1e3;d=Mp(this,N,d),m=Kn(this.I),Ge(m,"RID",l),Ge(m,"CVER",22),this.D&&Ge(m,"X-HTTP-Session-Id",this.D),Js(this,m),M&&(this.O?d="headers="+encodeURIComponent(String(Cp(M)))+"&"+d:this.m&&fu(m,this.m,M)),du(this.h,N),this.Ua&&Ge(m,"TYPE","init"),this.P?(Ge(m,"$req",d),Ge(m,"SID","null"),N.T=!0,lu(N,m,null)):lu(N,m,d),this.G=2}}else this.G==3&&(l?Vp(this,l):this.i.length==0||gp(this.h)||Vp(this))};function Vp(l,d){var m;d?m=d.l:m=l.U++;const v=Kn(l.I);Ge(v,"SID",l.K),Ge(v,"RID",m),Ge(v,"AID",l.T),Js(l,v),l.m&&l.o&&fu(v,l.m,l.o),m=new _r(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),d&&(l.i=d.D.concat(l.i)),d=Mp(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),du(l.h,m),lu(m,v,d)}function Js(l,d){l.H&&H(l.H,function(m,v){Ge(d,v,m)}),l.l&&wp({},function(m,v){Ge(d,v,m)})}function Mp(l,d,m){m=Math.min(l.i.length,m);var v=l.l?p(l.l.Na,l.l,l):null;e:{var N=l.i;let M=-1;for(;;){const X=["count="+m];M==-1?0<m?(M=N[0].g,X.push("ofs="+M)):M=0:X.push("ofs="+M);let je=!0;for(let Et=0;Et<m;Et++){let Ne=N[Et].g;const St=N[Et].map;if(Ne-=M,0>Ne)M=Math.max(0,N[Et].g-100),je=!1;else try{O0(St,X,"req"+Ne+"_")}catch{v&&v(St)}}if(je){v=X.join("&");break e}}}return l=l.i.splice(0,m),d.D=l,v}function Fp(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;_e||Ze(),he||(_e(),he=!0),Be.add(d,l),l.v=0}}function mu(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=qs(p(l.Fa,l),qp(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Up(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=qs(p(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Vt(10),ka(this),Up(this))};function gu(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Up(l){l.g=new _r(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=Kn(l.qa);Ge(d,"RID","rpc"),Ge(d,"SID",l.K),Ge(d,"AID",l.T),Ge(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ge(d,"TO",l.ja),Ge(d,"TYPE","xmlhttp"),Js(l,d),l.m&&l.o&&fu(d,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=Ra(Kn(d)),m.m=null,m.P=!0,dp(m,l)}t.Za=function(){this.C!=null&&(this.C=null,ka(this),mu(this),Vt(19))};function Oa(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function $p(l,d){var m=null;if(l.g==d){Oa(l),gu(l),l.g=null;var v=2}else if(hu(l.h,d))m=d.D,vp(l.h,d),v=1;else return;if(l.G!=0){if(d.o)if(v==1){m=d.m?d.m.length:0,d=Date.now()-d.F;var N=l.B;v=wa(),be(v,new lp(v,m)),xa(l)}else Fp(l);else if(N=d.s,N==3||N==0&&0<d.X||!(v==1&&V0(l,d)||v==2&&mu(l)))switch(m&&0<m.length&&(d=l.h,d.i=d.i.concat(m)),N){case 1:ni(l,5);break;case 4:ni(l,10);break;case 3:ni(l,6);break;default:ni(l,2)}}}function qp(l,d){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*d}function ni(l,d){if(l.j.info("Error code "+d),d==2){var m=p(l.fb,l),v=l.Xa;const N=!v;v=new ti(v||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ia(v,"https"),Ra(v),N?P0(v.toString(),m):k0(v.toString(),m)}else Vt(2);l.G=0,l.l&&l.l.sa(d),Bp(l),Lp(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Vt(2)):(this.j.info("Failed to ping google.com"),Vt(1))};function Bp(l){if(l.G=0,l.ka=[],l.l){const d=yp(l.h);(d.length!=0||l.i.length!=0)&&(A(l.ka,d),A(l.ka,l.i),l.h.i.length=0,C(l.i),l.i.length=0),l.l.ra()}}function jp(l,d,m){var v=m instanceof ti?Kn(m):new ti(m);if(v.g!="")d&&(v.g=d+"."+v.g),Aa(v,v.s);else{var N=a.location;v=N.protocol,d=d?d+"."+N.hostname:N.hostname,N=+N.port;var M=new ti(null);v&&Ia(M,v),d&&(M.g=d),N&&Aa(M,N),m&&(M.l=m),v=M}return m=l.D,d=l.ya,m&&d&&Ge(v,m,d),Ge(v,"VER",l.la),Js(l,v),v}function Hp(l,d,m){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new tt(new Sa({eb:m})):new tt(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function zp(){}t=zp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Da(){}Da.prototype.g=function(l,d){return new en(l,d)};function en(l,d){pe.call(this),this.g=new Np(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!k(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!k(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new Bi(this)}w(en,pe),en.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},en.prototype.close=function(){pu(this.g)},en.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=wt(l),l=m);d.i.push(new y0(d.Ya++,l)),d.G==3&&xa(d)},en.prototype.N=function(){this.g.l=null,delete this.j,pu(this.g),delete this.g,en.aa.N.call(this)};function Wp(l){iu.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const m in d){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}w(Wp,iu);function Kp(){su.call(this),this.status=1}w(Kp,su);function Bi(l){this.g=l}w(Bi,zp),Bi.prototype.ua=function(){be(this.g,"a")},Bi.prototype.ta=function(l){be(this.g,new Wp(l))},Bi.prototype.sa=function(l){be(this.g,new Kp)},Bi.prototype.ra=function(){be(this.g,"b")},Da.prototype.createWebChannel=Da.prototype.g,en.prototype.send=en.prototype.o,en.prototype.open=en.prototype.m,en.prototype.close=en.prototype.close,KE=function(){return new Da},WE=function(){return wa()},zE=Zr,Kh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ea.NO_ERROR=0,Ea.TIMEOUT=8,Ea.HTTP_ERROR=6,hl=Ea,cp.COMPLETE="complete",HE=cp,ip.EventType=Us,Us.OPEN="a",Us.CLOSE="b",Us.ERROR="c",Us.MESSAGE="d",pe.prototype.listen=pe.prototype.K,lo=ip,tt.prototype.listenOnce=tt.prototype.L,tt.prototype.getLastError=tt.prototype.Ka,tt.prototype.getLastErrorCode=tt.prototype.Ba,tt.prototype.getStatus=tt.prototype.Z,tt.prototype.getResponseJson=tt.prototype.Oa,tt.prototype.getResponseText=tt.prototype.oa,tt.prototype.send=tt.prototype.ea,tt.prototype.setWithCredentials=tt.prototype.Ha,jE=tt}).apply(typeof Ha!="undefined"?Ha:typeof self!="undefined"?self:typeof window!="undefined"?window:{});const Xg="@firebase/firestore",Zg="4.7.9";/**
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
 */class xt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}xt.UNAUTHENTICATED=new xt(null),xt.GOOGLE_CREDENTIALS=new xt("google-credentials-uid"),xt.FIRST_PARTY=new xt("first-party-uid"),xt.MOCK_USER=new xt("mock-user");/**
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
 */let Ns="11.4.0";/**
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
 */const Ci=new Pc("@firebase/firestore");function Yi(){return Ci.logLevel}function ie(t,...e){if(Ci.logLevel<=Se.DEBUG){const n=e.map(rf);Ci.debug(`Firestore (${Ns}): ${t}`,...n)}}function cr(t,...e){if(Ci.logLevel<=Se.ERROR){const n=e.map(rf);Ci.error(`Firestore (${Ns}): ${t}`,...n)}}function bs(t,...e){if(Ci.logLevel<=Se.WARN){const n=e.map(rf);Ci.warn(`Firestore (${Ns}): ${t}`,...n)}}function rf(t){if(typeof t=="string")return t;try{/**
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
 */function ve(t="Unexpected state"){const e=`FIRESTORE (${Ns}) INTERNAL ASSERTION FAILED: `+t;throw cr(e),new Error(e)}function Fe(t,e){t||ve()}function Ee(t,e){return t}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class sr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class GE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class IO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(xt.UNAUTHENTICATED))}shutdown(){}}class AO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class RO{constructor(e){this.t=e,this.currentUser=xt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Fe(this.o===void 0);let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new sr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new sr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new sr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Fe(typeof r.accessToken=="string"),new GE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string"),new xt(e)}}class SO{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=xt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class CO{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new SO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(xt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class e_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class PO{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Ht(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){Fe(this.o===void 0);const r=s=>{s.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,ie("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new e_(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Fe(typeof n.token=="string"),this.R=n.token,new e_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function kO(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class QE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=kO(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ke(t,e){return t<e?-1:t>e?1:0}function Is(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const t_=-62135596800,n_=1e6;class gt{static now(){return gt.fromMillis(Date.now())}static fromDate(e){return gt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*n_);return new gt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new te($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new te($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<t_)throw new te($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/n_}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-t_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */const r_="__name__";class Fn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ve(),r===void 0?r=e.length-n:r>e.length-n&&ve(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Fn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Fn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Fn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return Math.sign(e.length-n.length)}static compareSegments(e,n){const r=Fn.isNumericId(e),i=Fn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Fn.extractNumericId(e).compare(Fn.extractNumericId(n)):e<n?-1:e>n?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Mr.fromString(e.substring(4,e.length-2))}}class We extends Fn{construct(e,n,r){return new We(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new te($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new We(n)}static emptyPath(){return new We([])}}const xO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bt extends Fn{construct(e,n,r){return new bt(e,n,r)}static isValidIdentifier(e){return xO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===r_}static keyField(){return new bt([r_])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new te($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new te($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new te($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new te($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new bt(n)}static emptyPath(){return new bt([])}}/**
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
 */const jo=-1;function OO(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=we.fromTimestamp(r===1e9?new gt(n+1,0):new gt(n,r));return new qr(i,le.empty(),e)}function DO(t){return new qr(t.readTime,t.key,jo)}class qr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new qr(we.min(),le.empty(),jo)}static max(){return new qr(we.max(),le.empty(),jo)}}function NO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=le.comparator(t.documentKey,e.documentKey),n!==0?n:ke(t.largestBatchId,e.largestBatchId))}/**
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
 */const LO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class VO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ls(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==LO)throw t;ie("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ve(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(i=>i?j.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new j((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;n(e[u]).next(h=>{o[u]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new j((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function MO(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Vs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Nc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Nc.ae=-1;/**
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
 */const sf=-1;function Lc(t){return t==null}function Gl(t){return t===0&&1/t==-1/0}function FO(t){return typeof t=="number"&&Number.isInteger(t)&&!Gl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const JE="";function UO(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=i_(e)),e=$O(t.get(n),e);return i_(e)}function $O(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case JE:n+="";break;default:n+=s}}return n}function i_(t){return t+JE+""}/**
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
 */function s_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Yr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function YE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class et{constructor(e,n){this.comparator=e,this.root=n||Tt.EMPTY}insert(e,n){return new et(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Tt.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new za(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new za(this.root,e,this.comparator,!1)}getReverseIterator(){return new za(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new za(this.root,e,this.comparator,!0)}}class za{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Tt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Tt.RED,this.left=i!=null?i:Tt.EMPTY,this.right=s!=null?s:Tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Tt(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Tt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ve();const e=this.left.check();if(e!==this.right.check())throw ve();return e+(this.isRed()?0:1)}}Tt.EMPTY=null,Tt.RED=!0,Tt.BLACK=!1;Tt.EMPTY=new class{constructor(){this.size=0}get key(){throw ve()}get value(){throw ve()}get color(){throw ve()}get left(){throw ve()}get right(){throw ve()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Tt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class _t{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new o_(this.data.getIterator())}getIteratorFrom(e){return new o_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof _t)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new _t(this.comparator);return n.data=e,n}}class o_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class nn{constructor(e){this.fields=e,e.sort(bt.comparator)}static empty(){return new nn([])}unionWith(e){let n=new _t(bt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new nn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Is(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class XE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class At{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException!="undefined"&&s instanceof DOMException?new XE("Invalid base64 string: "+s):s}}(e);return new At(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new At(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}At.EMPTY_BYTE_STRING=new At("");const qO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Br(t){if(Fe(!!t),typeof t=="string"){let e=0;const n=qO.exec(t);if(Fe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ot(t.seconds),nanos:ot(t.nanos)}}function ot(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function jr(t){return typeof t=="string"?At.fromBase64String(t):At.fromUint8Array(t)}/**
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
 */const ZE="server_timestamp",eT="__type__",tT="__previous_value__",nT="__local_write_time__";function Vc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[eT])===null||n===void 0?void 0:n.stringValue)===ZE}function Mc(t){const e=t.mapValue.fields[tT];return Vc(e)?Mc(e):e}function Ho(t){const e=Br(t.mapValue.fields[nT].timestampValue);return new gt(e.seconds,e.nanos)}/**
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
 */class BO{constructor(e,n,r,i,s,o,a,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}const Ql="(default)";class zo{constructor(e,n){this.projectId=e,this.database=n||Ql}static empty(){return new zo("","")}get isDefaultDatabase(){return this.database===Ql}isEqual(e){return e instanceof zo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const rT="__type__",iT="__max__",Wa={mapValue:{fields:{__type__:{stringValue:iT}}}},sT="__vector__",Jl="value";function Hr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Vc(t)?4:HO(t)?9007199254740991:jO(t)?10:11:ve()}function Wn(t,e){if(t===e)return!0;const n=Hr(t);if(n!==Hr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ho(t).isEqual(Ho(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Br(i.timestampValue),a=Br(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return jr(i.bytesValue).isEqual(jr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ot(i.geoPointValue.latitude)===ot(s.geoPointValue.latitude)&&ot(i.geoPointValue.longitude)===ot(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ot(i.integerValue)===ot(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ot(i.doubleValue),a=ot(s.doubleValue);return o===a?Gl(o)===Gl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Is(t.arrayValue.values||[],e.arrayValue.values||[],Wn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(s_(o)!==s_(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Wn(o[c],a[c])))return!1;return!0}(t,e);default:return ve()}}function Wo(t,e){return(t.values||[]).find(n=>Wn(n,e))!==void 0}function As(t,e){if(t===e)return 0;const n=Hr(t),r=Hr(e);if(n!==r)return ke(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ke(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ot(s.integerValue||s.doubleValue),c=ot(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return a_(t.timestampValue,e.timestampValue);case 4:return a_(Ho(t),Ho(e));case 5:return ke(t.stringValue,e.stringValue);case 6:return function(s,o){const a=jr(s),c=jr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const h=ke(a[u],c[u]);if(h!==0)return h}return ke(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ke(ot(s.latitude),ot(o.latitude));return a!==0?a:ke(ot(s.longitude),ot(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return l_(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,c,u,h;const f=s.fields||{},p=o.fields||{},g=(a=f[Jl])===null||a===void 0?void 0:a.arrayValue,w=(c=p[Jl])===null||c===void 0?void 0:c.arrayValue,C=ke(((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0,((h=w==null?void 0:w.values)===null||h===void 0?void 0:h.length)||0);return C!==0?C:l_(g,w)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Wa.mapValue&&o===Wa.mapValue)return 0;if(s===Wa.mapValue)return 1;if(o===Wa.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let f=0;f<c.length&&f<h.length;++f){const p=ke(c[f],h[f]);if(p!==0)return p;const g=As(a[c[f]],u[h[f]]);if(g!==0)return g}return ke(c.length,h.length)}(t.mapValue,e.mapValue);default:throw ve()}}function a_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ke(t,e);const n=Br(t),r=Br(e),i=ke(n.seconds,r.seconds);return i!==0?i:ke(n.nanos,r.nanos)}function l_(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=As(n[i],r[i]);if(s)return s}return ke(n.length,r.length)}function Rs(t){return Gh(t)}function Gh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Br(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return jr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return le.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Gh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Gh(n.fields[o])}`;return i+"}"}(t.mapValue):ve()}function dl(t){switch(Hr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Mc(t);return e?16+dl(e):16;case 5:return 2*t.stringValue.length;case 6:return jr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+dl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Yr(r.fields,(s,o)=>{i+=s.length+dl(o)}),i}(t.mapValue);default:throw ve()}}function Yl(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Qh(t){return!!t&&"integerValue"in t}function of(t){return!!t&&"arrayValue"in t}function c_(t){return!!t&&"nullValue"in t}function u_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function fl(t){return!!t&&"mapValue"in t}function jO(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[rT])===null||n===void 0?void 0:n.stringValue)===sT}function Io(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Yr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Io(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Io(t.arrayValue.values[n]);return e}return Object.assign({},t)}function HO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===iT}/**
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
 */class Qt{constructor(e){this.value=e}static empty(){return new Qt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!fl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Io(n)}setAll(e){let n=bt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Io(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());fl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Wn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];fl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Yr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Qt(Io(this.value))}}function oT(t){const e=[];return Yr(t.fields,(n,r)=>{const i=new bt([n]);if(fl(r)){const s=oT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new nn(e)}/**
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
 */class Nt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Nt(e,0,we.min(),we.min(),we.min(),Qt.empty(),0)}static newFoundDocument(e,n,r,i){return new Nt(e,1,n,we.min(),r,i,0)}static newNoDocument(e,n){return new Nt(e,2,n,we.min(),we.min(),Qt.empty(),0)}static newUnknownDocument(e,n){return new Nt(e,3,n,we.min(),we.min(),Qt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ss{constructor(e,n){this.position=e,this.inclusive=n}}function h_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=le.comparator(le.fromName(o.referenceValue),n.key):r=As(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function d_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Wn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ko{constructor(e,n="asc"){this.field=e,this.dir=n}}function zO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class aT{}class ht extends aT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new KO(e,n,r):n==="array-contains"?new JO(e,r):n==="in"?new YO(e,r):n==="not-in"?new XO(e,r):n==="array-contains-any"?new ZO(e,r):new ht(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new GO(e,r):new QO(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(As(n,this.value)):n!==null&&Hr(this.value)===Hr(n)&&this.matchesComparison(As(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ve()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xn extends aT{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new xn(e,n)}matches(e){return lT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function lT(t){return t.op==="and"}function cT(t){return WO(t)&&lT(t)}function WO(t){for(const e of t.filters)if(e instanceof xn)return!1;return!0}function Jh(t){if(t instanceof ht)return t.field.canonicalString()+t.op.toString()+Rs(t.value);if(cT(t))return t.filters.map(e=>Jh(e)).join(",");{const e=t.filters.map(n=>Jh(n)).join(",");return`${t.op}(${e})`}}function uT(t,e){return t instanceof ht?function(r,i){return i instanceof ht&&r.op===i.op&&r.field.isEqual(i.field)&&Wn(r.value,i.value)}(t,e):t instanceof xn?function(r,i){return i instanceof xn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&uT(o,i.filters[a]),!0):!1}(t,e):void ve()}function hT(t){return t instanceof ht?function(n){return`${n.field.canonicalString()} ${n.op} ${Rs(n.value)}`}(t):t instanceof xn?function(n){return n.op.toString()+" {"+n.getFilters().map(hT).join(" ,")+"}"}(t):"Filter"}class KO extends ht{constructor(e,n,r){super(e,n,r),this.key=le.fromName(r.referenceValue)}matches(e){const n=le.comparator(e.key,this.key);return this.matchesComparison(n)}}class GO extends ht{constructor(e,n){super(e,"in",n),this.keys=dT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class QO extends ht{constructor(e,n){super(e,"not-in",n),this.keys=dT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function dT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>le.fromName(r.referenceValue))}class JO extends ht{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return of(n)&&Wo(n.arrayValue,this.value)}}class YO extends ht{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Wo(this.value.arrayValue,n)}}class XO extends ht{constructor(e,n){super(e,"not-in",n)}matches(e){if(Wo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Wo(this.value.arrayValue,n)}}class ZO extends ht{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!of(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Wo(this.value.arrayValue,r))}}/**
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
 */class eD{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.le=null}}function f_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new eD(t,e,n,r,i,s,o)}function af(t){const e=Ee(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Jh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Lc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Rs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Rs(r)).join(",")),e.le=n}return e.le}function lf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!zO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!uT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!d_(t.startAt,e.startAt)&&d_(t.endAt,e.endAt)}function Yh(t){return le.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Vi{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function tD(t,e,n,r,i,s,o,a){return new Vi(t,e,n,r,i,s,o,a)}function cf(t){return new Vi(t)}function p_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function uf(t){return t.collectionGroup!==null}function ms(t){const e=Ee(t);if(e.he===null){e.he=[];const n=new Set;for(const s of e.explicitOrderBy)e.he.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new _t(bt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.he.push(new Ko(s,r))}),n.has(bt.keyField().canonicalString())||e.he.push(new Ko(bt.keyField(),r))}return e.he}function jn(t){const e=Ee(t);return e.Pe||(e.Pe=nD(e,ms(t))),e.Pe}function nD(t,e){if(t.limitType==="F")return f_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ko(i.field,s)});const n=t.endAt?new Ss(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ss(t.startAt.position,t.startAt.inclusive):null;return f_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Xh(t,e){const n=t.filters.concat([e]);return new Vi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Xl(t,e,n){return new Vi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Fc(t,e){return lf(jn(t),jn(e))&&t.limitType===e.limitType}function fT(t){return`${af(jn(t))}|lt:${t.limitType}`}function Xi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>hT(i)).join(", ")}]`),Lc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Rs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Rs(i)).join(",")),`Target(${r})`}(jn(t))}; limitType=${t.limitType})`}function Uc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):le.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ms(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,c){const u=h_(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,ms(r),i)||r.endAt&&!function(o,a,c){const u=h_(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,ms(r),i))}(t,e)}function rD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function pT(t){return(e,n)=>{let r=!1;for(const i of ms(t)){const s=iD(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function iD(t,e,n){const r=t.field.isKeyField()?le.comparator(e.key,n.key):function(s,o,a){const c=o.data.field(s),u=a.data.field(s);return c!==null&&u!==null?As(c,u):ve()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ve()}}/**
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
 */class Mi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Yr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return YE(this.inner)}size(){return this.innerSize}}/**
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
 */const sD=new et(le.comparator);function ur(){return sD}const mT=new et(le.comparator);function co(...t){let e=mT;for(const n of t)e=e.insert(n.key,n);return e}function gT(t){let e=mT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function fi(){return Ao()}function _T(){return Ao()}function Ao(){return new Mi(t=>t.toString(),(t,e)=>t.isEqual(e))}const oD=new et(le.comparator),aD=new _t(le.comparator);function Ce(...t){let e=aD;for(const n of t)e=e.add(n);return e}const lD=new _t(ke);function cD(){return lD}/**
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
 */function hf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gl(e)?"-0":e}}function vT(t){return{integerValue:""+t}}function yT(t,e){return FO(e)?vT(e):hf(t,e)}/**
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
 */class $c{constructor(){this._=void 0}}function uD(t,e,n){return t instanceof Go?function(i,s){const o={fields:{[eT]:{stringValue:ZE},[nT]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Vc(s)&&(s=Mc(s)),s&&(o.fields[tT]=s),{mapValue:o}}(n,e):t instanceof Qo?ET(t,e):t instanceof Jo?TT(t,e):function(i,s){const o=wT(i,s),a=m_(o)+m_(i.Ie);return Qh(o)&&Qh(i.Ie)?vT(a):hf(i.serializer,a)}(t,e)}function hD(t,e,n){return t instanceof Qo?ET(t,e):t instanceof Jo?TT(t,e):n}function wT(t,e){return t instanceof Yo?function(r){return Qh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Go extends $c{}class Qo extends $c{constructor(e){super(),this.elements=e}}function ET(t,e){const n=bT(e);for(const r of t.elements)n.some(i=>Wn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Jo extends $c{constructor(e){super(),this.elements=e}}function TT(t,e){let n=bT(e);for(const r of t.elements)n=n.filter(i=>!Wn(i,r));return{arrayValue:{values:n}}}class Yo extends $c{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function m_(t){return ot(t.integerValue||t.doubleValue)}function bT(t){return of(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class IT{constructor(e,n){this.field=e,this.transform=n}}function dD(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Qo&&i instanceof Qo||r instanceof Jo&&i instanceof Jo?Is(r.elements,i.elements,Wn):r instanceof Yo&&i instanceof Yo?Wn(r.Ie,i.Ie):r instanceof Go&&i instanceof Go}(t.transform,e.transform)}class fD{constructor(e,n){this.version=e,this.transformResults=n}}class pn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new pn}static exists(e){return new pn(void 0,e)}static updateTime(e){return new pn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function pl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class qc{}function AT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new df(t.key,pn.none()):new da(t.key,t.data,pn.none());{const n=t.data,r=Qt.empty();let i=new _t(bt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Xr(t.key,r,new nn(i.toArray()),pn.none())}}function pD(t,e,n){t instanceof da?function(i,s,o){const a=i.value.clone(),c=__(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Xr?function(i,s,o){if(!pl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=__(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(RT(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ro(t,e,n,r){return t instanceof da?function(s,o,a,c){if(!pl(s.precondition,o))return a;const u=s.value.clone(),h=v_(s.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Xr?function(s,o,a,c){if(!pl(s.precondition,o))return a;const u=v_(s.fieldTransforms,c,o),h=o.data;return h.setAll(RT(s)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return pl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function mD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=wT(r.transform,i||null);s!=null&&(n===null&&(n=Qt.empty()),n.set(r.field,s))}return n||null}function g_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Is(r,i,(s,o)=>dD(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class da extends qc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Xr extends qc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function RT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function __(t,e,n){const r=new Map;Fe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,hD(o,a,n[i]))}return r}function v_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,uD(s,o,e))}return r}class df extends qc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gD extends qc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class _D{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&pD(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ro(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ro(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=_T();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=AT(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(we.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ce())}isEqual(e){return this.batchId===e.batchId&&Is(this.mutations,e.mutations,(n,r)=>g_(n,r))&&Is(this.baseMutations,e.baseMutations,(n,r)=>g_(n,r))}}class ff{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Fe(e.mutations.length===r.length);let i=function(){return oD}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ff(e,n,r,i)}}/**
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
 */class vD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class yD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ct,Oe;function wD(t){switch(t){case $.OK:return ve();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return ve()}}function ST(t){if(t===void 0)return cr("GRPC error has no .code"),$.UNKNOWN;switch(t){case ct.OK:return $.OK;case ct.CANCELLED:return $.CANCELLED;case ct.UNKNOWN:return $.UNKNOWN;case ct.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case ct.INTERNAL:return $.INTERNAL;case ct.UNAVAILABLE:return $.UNAVAILABLE;case ct.UNAUTHENTICATED:return $.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case ct.NOT_FOUND:return $.NOT_FOUND;case ct.ALREADY_EXISTS:return $.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return $.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case ct.ABORTED:return $.ABORTED;case ct.OUT_OF_RANGE:return $.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return $.UNIMPLEMENTED;case ct.DATA_LOSS:return $.DATA_LOSS;default:return ve()}}(Oe=ct||(ct={}))[Oe.OK=0]="OK",Oe[Oe.CANCELLED=1]="CANCELLED",Oe[Oe.UNKNOWN=2]="UNKNOWN",Oe[Oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Oe[Oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Oe[Oe.NOT_FOUND=5]="NOT_FOUND",Oe[Oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Oe[Oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Oe[Oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Oe[Oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Oe[Oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Oe[Oe.ABORTED=10]="ABORTED",Oe[Oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Oe[Oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Oe[Oe.INTERNAL=13]="INTERNAL",Oe[Oe.UNAVAILABLE=14]="UNAVAILABLE",Oe[Oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function ED(){return new TextEncoder}/**
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
 */const TD=new Mr([4294967295,4294967295],0);function y_(t){const e=ED().encode(t),n=new BE;return n.update(e),new Uint8Array(n.digest())}function w_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Mr([n,r],0),new Mr([i,s],0)]}class pf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new uo(`Invalid padding: ${n}`);if(r<0)throw new uo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new uo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new uo(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=Mr.fromNumber(this.Ee)}Ae(e,n,r){let i=e.add(n.multiply(Mr.fromNumber(r)));return i.compare(TD)===1&&(i=new Mr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const n=y_(e),[r,i]=w_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ae(r,i,s);if(!this.Re(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new pf(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ee===0)return;const n=y_(e),[r,i]=w_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ae(r,i,s);this.Ve(o)}}Ve(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class uo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Bc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,fa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Bc(we.min(),i,new et(ke),ur(),Ce())}}class fa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new fa(r,n,Ce(),Ce(),Ce())}}/**
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
 */class ml{constructor(e,n,r,i){this.me=e,this.removedTargetIds=n,this.key=r,this.fe=i}}class CT{constructor(e,n){this.targetId=e,this.ge=n}}class PT{constructor(e,n,r=At.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class E_{constructor(){this.pe=0,this.ye=T_(),this.we=At.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.we=e)}Fe(){let e=Ce(),n=Ce(),r=Ce();return this.ye.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ve()}}),new fa(this.we,this.be,e,n,r)}Me(){this.Se=!1,this.ye=T_()}xe(e,n){this.Se=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.Se=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Fe(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class bD{constructor(e){this.ke=e,this.qe=new Map,this.Qe=ur(),this.$e=Ka(),this.Ke=Ka(),this.Ue=new et(ke)}We(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(n,e.fe):this.ze(n,e.key,e.fe);for(const n of e.removedTargetIds)this.ze(n,e.key,e.fe)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.Je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Ce(e.resumeToken));break;default:ve()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((r,i)=>{this.Je(i)&&n(i)})}Ze(e){const n=e.targetId,r=e.ge.count,i=this.Xe(n);if(i){const s=i.target;if(Yh(s))if(r===0){const o=new le(s.path);this.ze(n,o,Nt.newNoDocument(o,we.min()))}else Fe(r===1);else{const o=this.et(n);if(o!==r){const a=this.tt(e),c=a?this.nt(a,e,o):1;if(c!==0){this.Ye(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(n,u)}}}}}tt(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=jr(r).toUint8Array()}catch(c){if(c instanceof XE)return bs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new pf(o,i,s)}catch(c){return bs(c instanceof uo?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ee===0?null:a}nt(e,n,r){return n.ge.count===r-this.st(e,n.targetId)?0:2}st(e,n){const r=this.ke.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.ke.it(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.ze(n,s,null),i++)}),i}ot(e){const n=new Map;this.qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&Yh(a.target)){const c=new le(a.target.path);this._t(c).has(o)||this.ut(o,c)||this.ze(o,c,Nt.newNoDocument(c,e))}s.ve&&(n.set(o,s.Fe()),s.Me())}});let r=Ce();this.Ke.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Xe(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Qe.forEach((s,o)=>o.setReadTime(e));const i=new Bc(e,n,this.Ue,this.Qe,r);return this.Qe=ur(),this.$e=Ka(),this.Ke=Ka(),this.Ue=new et(ke),i}Ge(e,n){if(!this.Je(e))return;const r=this.ut(e,n.key)?2:0;this.He(e).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e)),this.Ke=this.Ke.insert(n.key,this.ct(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const i=this.He(e);this.ut(e,n)?i.xe(n,1):i.Oe(n),this.Ke=this.Ke.insert(n,this.ct(n).delete(e)),this.Ke=this.Ke.insert(n,this.ct(n).add(e)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(e){this.qe.delete(e)}et(e){const n=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let n=this.qe.get(e);return n||(n=new E_,this.qe.set(e,n)),n}ct(e){let n=this.Ke.get(e);return n||(n=new _t(ke),this.Ke=this.Ke.insert(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new _t(ke),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||ie("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new E_),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ut(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function Ka(){return new et(le.comparator)}function T_(){return new et(le.comparator)}const ID=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),AD=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),RD=(()=>({and:"AND",or:"OR"}))();class SD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Zh(t,e){return t.useProto3Json||Lc(e)?e:{value:e}}function Zl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function kT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function CD(t,e){return Zl(t,e.toTimestamp())}function Hn(t){return Fe(!!t),we.fromTimestamp(function(n){const r=Br(n);return new gt(r.seconds,r.nanos)}(t))}function mf(t,e){return ed(t,e).canonicalString()}function ed(t,e){const n=function(i){return new We(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function xT(t){const e=We.fromString(t);return Fe(VT(e)),e}function td(t,e){return mf(t.databaseId,e.path)}function Xu(t,e){const n=xT(e);if(n.get(1)!==t.databaseId.projectId)throw new te($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new te($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new le(DT(n))}function OT(t,e){return mf(t.databaseId,e)}function PD(t){const e=xT(t);return e.length===4?We.emptyPath():DT(e)}function nd(t){return new We(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function DT(t){return Fe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function b_(t,e,n){return{name:td(t,e),fields:n.value.mapValue.fields}}function kD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ve()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,h){return u.useProto3Json?(Fe(h===void 0||typeof h=="string"),At.fromBase64String(h||"")):(Fe(h===void 0||h instanceof Buffer||h instanceof Uint8Array),At.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?$.UNKNOWN:ST(u.code);return new te(h,u.message||"")}(o);n=new PT(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Xu(t,r.document.name),s=Hn(r.document.updateTime),o=r.document.createTime?Hn(r.document.createTime):we.min(),a=new Qt({mapValue:{fields:r.document.fields}}),c=Nt.newFoundDocument(i,s,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new ml(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Xu(t,r.document),s=r.readTime?Hn(r.readTime):we.min(),o=Nt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ml([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Xu(t,r.document),s=r.removedTargetIds||[];n=new ml([],s,i,null)}else{if(!("filter"in e))return ve();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new yD(i,s),a=r.targetId;n=new CT(a,o)}}return n}function xD(t,e){let n;if(e instanceof da)n={update:b_(t,e.key,e.value)};else if(e instanceof df)n={delete:td(t,e.key)};else if(e instanceof Xr)n={update:b_(t,e.key,e.data),updateMask:$D(e.fieldMask)};else{if(!(e instanceof gD))return ve();n={verify:td(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Go)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Qo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Jo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Yo)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw ve()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:CD(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ve()}(t,e.precondition)),n}function OD(t,e){return t&&t.length>0?(Fe(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Hn(i.updateTime):Hn(s);return o.isEqual(we.min())&&(o=Hn(s)),new fD(o,i.transformResults||[])}(n,e))):[]}function DD(t,e){return{documents:[OT(t,e.path)]}}function ND(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=OT(t,i);const s=function(u){if(u.length!==0)return LT(xn.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(h=>function(p){return{field:Zi(p.field),direction:MD(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Zh(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ht:n,parent:i}}function LD(t){let e=PD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Fe(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const p=NT(f);return p instanceof xn&&cT(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(w){return new Ko(es(w.field),function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,Lc(p)?null:p}(n.limit));let c=null;n.startAt&&(c=function(f){const p=!!f.before,g=f.values||[];return new Ss(g,p)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const p=!f.before,g=f.values||[];return new Ss(g,p)}(n.endAt)),tD(e,i,o,s,a,"F",c,u)}function VD(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ve()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function NT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=es(n.unaryFilter.field);return ht.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=es(n.unaryFilter.field);return ht.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=es(n.unaryFilter.field);return ht.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=es(n.unaryFilter.field);return ht.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ve()}}(t):t.fieldFilter!==void 0?function(n){return ht.create(es(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ve()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return xn.create(n.compositeFilter.filters.map(r=>NT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ve()}}(n.compositeFilter.op))}(t):ve()}function MD(t){return ID[t]}function FD(t){return AD[t]}function UD(t){return RD[t]}function Zi(t){return{fieldPath:t.canonicalString()}}function es(t){return bt.fromServerFormat(t.fieldPath)}function LT(t){return t instanceof ht?function(n){if(n.op==="=="){if(u_(n.value))return{unaryFilter:{field:Zi(n.field),op:"IS_NAN"}};if(c_(n.value))return{unaryFilter:{field:Zi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(u_(n.value))return{unaryFilter:{field:Zi(n.field),op:"IS_NOT_NAN"}};if(c_(n.value))return{unaryFilter:{field:Zi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zi(n.field),op:FD(n.op),value:n.value}}}(t):t instanceof xn?function(n){const r=n.getFilters().map(i=>LT(i));return r.length===1?r[0]:{compositeFilter:{op:UD(n.op),filters:r}}}(t):ve()}function $D(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function VT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Dr{constructor(e,n,r,i,s=we.min(),o=we.min(),a=At.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Dr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Dr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class qD{constructor(e){this.Tt=e}}function BD(t){const e=LD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Xl(e,e.limit,"L"):e}/**
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
 */class jD{constructor(){this.Tn=new HD}addToCollectionParentIndex(e,n){return this.Tn.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(qr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(qr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class HD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new _t(We.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new _t(We.comparator)).toArray()}}/**
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
 */const I_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},MT=41943040;class Kt{static withCacheSize(e){return new Kt(e,Kt.DEFAULT_COLLECTION_PERCENTILE,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Kt.DEFAULT_COLLECTION_PERCENTILE=10,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Kt.DEFAULT=new Kt(MT,Kt.DEFAULT_COLLECTION_PERCENTILE,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Kt.DISABLED=new Kt(-1,0,0);/**
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
 */class Cs{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new Cs(0)}static Un(){return new Cs(-1)}}/**
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
 */const A_="LruGarbageCollector",zD=1048576;function R_([t,e],[n,r]){const i=ke(t,n);return i===0?ke(e,r):i}class WD{constructor(e){this.Hn=e,this.buffer=new _t(R_),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();R_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class KD{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){ie(A_,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Vs(n)?ie(A_,"Ignoring IndexedDB error during garbage collection: ",n):await Ls(n)}await this.er(3e5)})}}class GD{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return j.resolve(Nc.ae);const r=new WD(n);return this.tr.forEachTarget(e,i=>r.Zn(i.sequenceNumber)).next(()=>this.tr.rr(e,i=>r.Zn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.tr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(I_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),I_):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let r,i,s,o,a,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(u=Date.now(),Yi()<=Se.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${f} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function QD(t,e){return new GD(t,e)}/**
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
 */class JD{constructor(){this.changes=new Mi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class YD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class XD{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ro(r.mutation,i,nn.empty(),gt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ce()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ce()){const i=fi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=co();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=fi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ce()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=ur();const o=Ao(),a=function(){return Ao()}();return n.forEach((c,u)=>{const h=r.get(u.key);i.has(u.key)&&(h===void 0||h.mutation instanceof Xr)?s=s.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Ro(h.mutation,u,h.mutation.getFieldMask(),gt.now())):o.set(u.key,nn.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var f;return a.set(u,new YD(h,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ao();let i=new et((o,a)=>o-a),s=Ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=r.get(c)||nn.empty();h=a.applyToLocalView(u,h),r.set(c,h);const f=(i.get(a.batchId)||Ce()).add(c);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,f=_T();h.forEach(p=>{if(!s.has(p)){const g=AT(n.get(p),r.get(p));g!==null&&f.set(p,g),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return le.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):uf(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):j.resolve(fi());let a=jo,c=s;return o.next(u=>j.forEach(u,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?j.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{c=c.insert(h,p)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,Ce())).next(h=>({batchId:a,changes:gT(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new le(n)).next(r=>{let i=co();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=co();return this.indexManager.getCollectionParents(e,s).next(a=>j.forEach(a,c=>{const u=function(f,p){return new Vi(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(h=>{h.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Nt.newInvalidDocument(h)))});let a=co();return o.forEach((c,u)=>{const h=s.get(c);h!==void 0&&Ro(h.mutation,u,nn.empty(),gt.now()),Uc(n,u)&&(a=a.insert(c,u))}),a})}}/**
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
 */class ZD{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return j.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Hn(i.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(i){return{name:i.name,query:BD(i.bundledQuery),readTime:Hn(i.readTime)}}(n)),j.resolve()}}/**
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
 */class eN{constructor(){this.overlays=new et(le.comparator),this.Rr=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=fi();return j.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.Et(e,n,s)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Rr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Rr.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const i=fi(),s=n.length+1,o=new le(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return j.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new et((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=s.get(u.largestBatchId);h===null&&(h=fi(),s=s.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=fi(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=i)););return j.resolve(a)}Et(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Rr.get(i.largestBatchId).delete(r.key);this.Rr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new vD(n,r));let s=this.Rr.get(n);s===void 0&&(s=Ce(),this.Rr.set(n,s)),this.Rr.set(n,s.add(r.key))}}/**
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
 */class tN{constructor(){this.sessionToken=At.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
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
 */class gf{constructor(){this.Vr=new _t(yt.mr),this.gr=new _t(yt.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const r=new yt(e,n);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.wr(new yt(e,n))}br(e,n){e.forEach(r=>this.removeReference(r,n))}Sr(e){const n=new le(new We([])),r=new yt(n,e),i=new yt(n,e+1),s=[];return this.gr.forEachInRange([r,i],o=>{this.wr(o),s.push(o.key)}),s}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new le(new We([])),r=new yt(n,e),i=new yt(n,e+1);let s=Ce();return this.gr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new yt(e,0),r=this.Vr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class yt{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return le.comparator(e.key,n.key)||ke(e.Cr,n.Cr)}static pr(e,n){return ke(e.Cr,n.Cr)||le.comparator(e.key,n.key)}}/**
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
 */class nN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new _t(yt.mr)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new _D(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Mr=this.Mr.add(new yt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Nr(r),s=i<0?0:i;return j.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?sf:this.Fr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new yt(n,0),i=new yt(n,Number.POSITIVE_INFINITY),s=[];return this.Mr.forEachInRange([r,i],o=>{const a=this.Or(o.Cr);s.push(a)}),j.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new _t(ke);return n.forEach(i=>{const s=new yt(i,0),o=new yt(i,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([s,o],a=>{r=r.add(a.Cr)})}),j.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;le.isDocumentKey(s)||(s=s.child(""));const o=new yt(new le(s),0);let a=new _t(ke);return this.Mr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.Cr)),!0)},o),j.resolve(this.Br(a))}Br(e){const n=[];return e.forEach(r=>{const i=this.Or(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Fe(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return j.forEach(n.mutations,i=>{const s=new yt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,n){const r=new yt(n,0),i=this.Mr.firstAfterOrEqual(r);return j.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class rN{constructor(e){this.kr=e,this.docs=function(){return new et(le.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.kr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():Nt.newInvalidDocument(n))}getEntries(e,n){let r=ur();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Nt.newInvalidDocument(i))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=ur();const o=n.path,a=new le(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||NO(DO(h),r)<=0||(i.has(h.key)||Uc(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return j.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ve()}qr(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new iN(this)}getSize(e){return j.resolve(this.size)}}class iN extends JD{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Ir.addEntry(e,i)):this.Ir.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
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
 */class sN{constructor(e){this.persistence=e,this.Qr=new Mi(n=>af(n),lf),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.$r=0,this.Kr=new gf,this.targetCount=0,this.Ur=Cs.Kn()}forEachTarget(e,n){return this.Qr.forEach((r,i)=>n(i)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$r&&(this.$r=n),j.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ur=new Cs(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.zn(n),j.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Kr.Sr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Qr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Qr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),j.waitFor(s).next(()=>i)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.Qr.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.Kr.yr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.Kr.br(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),j.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Kr.Sr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Kr.vr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.Kr.containsKey(n))}}/**
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
 */class FT{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new Nc(0),this.zr=!1,this.zr=!0,this.jr=new tN,this.referenceDelegate=e(this),this.Hr=new sN(this),this.indexManager=new jD,this.remoteDocumentCache=function(i){return new rN(i)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new qD(n),this.Yr=new ZD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new eN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Wr[e.toKey()];return r||(r=new nN(n,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,r){ie("MemoryPersistence","Starting transaction:",e);const i=new oN(this.Gr.next());return this.referenceDelegate.Zr(),r(i).next(s=>this.referenceDelegate.Xr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}ei(e,n){return j.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,n)))}}class oN extends VO{constructor(e){super(),this.currentSequenceNumber=e}}class _f{constructor(e){this.persistence=e,this.ti=new gf,this.ni=null}static ri(e){return new _f(e)}get ii(){if(this.ni)return this.ni;throw ve()}addReference(e,n,r){return this.ti.addReference(r,n),this.ii.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.ti.removeReference(r,n),this.ii.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),j.resolve()}removeTarget(e,n){this.ti.Sr(n.targetId).forEach(i=>this.ii.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.ii.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.ii,r=>{const i=le.fromPath(r);return this.si(e,i).next(s=>{s||n.removeEntry(i,we.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(r=>{r?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return j.or([()=>j.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class ec{constructor(e,n){this.persistence=e,this.oi=new Mi(r=>UO(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=QD(this,n)}static ri(e,n){return new ec(e,n)}Zr(){}Xr(e){return j.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}sr(e){let n=0;return this.rr(e,r=>{n++}).next(()=>n)}rr(e,n){return j.forEach(this.oi,(r,i)=>this.ar(e,r,i).next(s=>s?j.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.qr(e,o=>this.ar(e,o,n).next(a=>{a||(r++,s.removeEntry(o,we.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),j.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),j.resolve()}removeReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),j.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=dl(e.data.value)),n}ar(e,n,r){return j.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.oi.get(n);return j.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class vf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Hi=r,this.Ji=i}static Yi(e,n){let r=Ce(),i=Ce();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new vf(e,n.fromCache,r,i)}}/**
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
 */class aN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class lN{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return VP()?8:MO(Lt())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.rs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ss(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new aN;return this._s(e,n,o).next(a=>{if(s.result=a,this.Xi)return this.us(e,n,o,a.size)})}).next(()=>s.result)}us(e,n,r,i){return r.documentReadCount<this.es?(Yi()<=Se.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",Xi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),j.resolve()):(Yi()<=Se.DEBUG&&ie("QueryEngine","Query:",Xi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ts*i?(Yi()<=Se.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",Xi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,jn(n))):j.resolve())}rs(e,n){if(p_(n))return j.resolve(null);let r=jn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Xl(n,null,"F"),r=jn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Ce(...s);return this.ns.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.cs(n,a);return this.ls(n,u,o,c.readTime)?this.rs(e,Xl(n,null,"F")):this.hs(e,u,n,c)}))})))}ss(e,n,r,i){return p_(n)||i.isEqual(we.min())?j.resolve(null):this.ns.getDocuments(e,r).next(s=>{const o=this.cs(n,s);return this.ls(n,o,r,i)?j.resolve(null):(Yi()<=Se.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Xi(n)),this.hs(e,o,n,OO(i,jo)).next(a=>a))})}cs(e,n){let r=new _t(pT(e));return n.forEach((i,s)=>{Uc(e,s)&&(r=r.add(s))}),r}ls(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}_s(e,n,r){return Yi()<=Se.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",Xi(n)),this.ns.getDocumentsMatchingQuery(e,n,qr.min(),r)}hs(e,n,r,i){return this.ns.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const yf="LocalStore",cN=3e8;class uN{constructor(e,n,r,i){this.persistence=e,this.Ps=n,this.serializer=i,this.Ts=new et(ke),this.Is=new Mi(s=>af(s),lf),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new XD(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function hN(t,e,n,r){return new uN(t,e,n,r)}async function UT(t,e){const n=Ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.As(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=Ce();for(const u of i){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of s){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Rs:u,removedBatchIds:o,addedBatchIds:a}))})})}function dN(t,e){const n=Ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ds.newChangeBuffer({trackRemovals:!0});return function(a,c,u,h){const f=u.batch,p=f.keys();let g=j.resolve();return p.forEach(w=>{g=g.next(()=>h.getEntry(c,w)).next(C=>{const A=u.docVersions.get(w);Fe(A!==null),C.version.compareTo(A)<0&&(f.applyToRemoteDocument(C,u),C.isValidDocument()&&(C.setReadTime(u.commitVersion),h.addEntry(C)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(c,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=Ce();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function $T(t){const e=Ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function fN(t,e){const n=Ee(t),r=e.snapshotVersion;let i=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ds.newChangeBuffer({trackRemovals:!0});i=n.Ts;const a=[];e.targetChanges.forEach((h,f)=>{const p=i.get(f);if(!p)return;a.push(n.Hr.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Hr.addMatchingKeys(s,h.addedDocuments,f)));let g=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(At.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),i=i.insert(f,g),function(C,A,x){return C.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=cN?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(p,g,h)&&a.push(n.Hr.updateTargetData(s,g))});let c=ur(),u=Ce();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(pN(s,o,e.documentUpdates).next(h=>{c=h.Vs,u=h.fs})),!r.isEqual(we.min())){const h=n.Hr.getLastRemoteSnapshotVersion(s).next(f=>n.Hr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return j.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(n.Ts=i,s))}function pN(t,e,n){let r=Ce(),i=Ce();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=ur();return n.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(we.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):ie(yf,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Vs:o,fs:i}})}function mN(t,e){const n=Ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=sf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function gN(t,e){const n=Ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Hr.getTargetData(r,e).next(s=>s?(i=s,j.resolve(i)):n.Hr.allocateTargetId(r).next(o=>(i=new Dr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Hr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(r.targetId,r),n.Is.set(e,r.targetId)),r})}async function rd(t,e,n){const r=Ee(t),i=r.Ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Vs(o))throw o;ie(yf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ts=r.Ts.remove(e),r.Is.delete(i.target)}function S_(t,e,n){const r=Ee(t);let i=we.min(),s=Ce();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const f=Ee(c),p=f.Is.get(h);return p!==void 0?j.resolve(f.Ts.get(p)):f.Hr.getTargetData(u,h)}(r,o,jn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Ps.getDocumentsMatchingQuery(o,e,n?i:we.min(),n?s:Ce())).next(a=>(_N(r,rD(e),a),{documents:a,gs:s})))}function _N(t,e,n){let r=t.Es.get(e)||we.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Es.set(e,r)}class C_{constructor(){this.activeTargetIds=cD()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vN{constructor(){this.ho=new C_,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,r){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new C_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class yN{To(e){}shutdown(){}}/**
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
 */const P_="ConnectivityMonitor";class k_{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){ie(P_,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){ie(P_,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ga=null;function id(){return Ga===null?Ga=function(){return 268435456+Math.round(2147483648*Math.random())}():Ga++,"0x"+Ga.toString(16)}/**
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
 */const Zu="RestConnection",wN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class EN{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${r}/databases/${i}`,this.wo=this.databaseId.database===Ql?`project_id=${r}`:`project_id=${r}&database_id=${i}`}bo(e,n,r,i,s){const o=id(),a=this.So(e,n.toUriEncodedString());ie(Zu,`Sending RPC '${e}' ${o}:`,a,r);const c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(c,i,s),this.vo(e,a,c,r).then(u=>(ie(Zu,`Received RPC '${e}' ${o}: `,u),u),u=>{throw bs(Zu,`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}Co(e,n,r,i,s,o){return this.bo(e,n,r,i,s)}Do(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ns}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}So(e,n){const r=wN[e];return`${this.po}/v1/${n}:${r}`}terminate(){}}/**
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
 */class TN{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
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
 */const Pt="WebChannelConnection";class bN extends EN{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,i){const s=id();return new Promise((o,a)=>{const c=new jE;c.setWithCredentials(!0),c.listenOnce(HE.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case hl.NO_ERROR:const h=c.getResponseJson();ie(Pt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case hl.TIMEOUT:ie(Pt,`RPC '${e}' ${s} timed out`),a(new te($.DEADLINE_EXCEEDED,"Request time out"));break;case hl.HTTP_ERROR:const f=c.getStatus();if(ie(Pt,`RPC '${e}' ${s} failed with status:`,f,"response text:",c.getResponseText()),f>0){let p=c.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const w=function(A){const x=A.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(x)>=0?x:$.UNKNOWN}(g.status);a(new te(w,g.message))}else a(new te($.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new te($.UNAVAILABLE,"Connection failed."));break;default:ve()}}finally{ie(Pt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);ie(Pt,`RPC '${e}' ${s} sending request:`,i),c.send(n,"POST",u,r,15)})}Wo(e,n,r){const i=id(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=KE(),a=WE(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const h=s.join("");ie(Pt,`Creating RPC '${e}' stream ${i}: ${h}`,c);const f=o.createWebChannel(h,c);let p=!1,g=!1;const w=new TN({Fo:A=>{g?ie(Pt,`Not sending because RPC '${e}' stream ${i} is closed:`,A):(p||(ie(Pt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),ie(Pt,`RPC '${e}' stream ${i} sending:`,A),f.send(A))},Mo:()=>f.close()}),C=(A,x,k)=>{A.listen(x,O=>{try{k(O)}catch(D){setTimeout(()=>{throw D},0)}})};return C(f,lo.EventType.OPEN,()=>{g||(ie(Pt,`RPC '${e}' stream ${i} transport opened.`),w.Qo())}),C(f,lo.EventType.CLOSE,()=>{g||(g=!0,ie(Pt,`RPC '${e}' stream ${i} transport closed`),w.Ko())}),C(f,lo.EventType.ERROR,A=>{g||(g=!0,bs(Pt,`RPC '${e}' stream ${i} transport errored:`,A),w.Ko(new te($.UNAVAILABLE,"The operation could not be completed")))}),C(f,lo.EventType.MESSAGE,A=>{var x;if(!g){const k=A.data[0];Fe(!!k);const O=k,D=(O==null?void 0:O.error)||((x=O[0])===null||x===void 0?void 0:x.error);if(D){ie(Pt,`RPC '${e}' stream ${i} received error:`,D);const V=D.status;let H=function(_){const R=ct[_];if(R!==void 0)return ST(R)}(V),b=D.message;H===void 0&&(H=$.INTERNAL,b="Unknown error status: "+V+" with message "+D.message),g=!0,w.Ko(new te(H,b)),f.close()}else ie(Pt,`RPC '${e}' stream ${i} received:`,k),w.Uo(k)}}),C(a,zE.STAT_EVENT,A=>{A.stat===Kh.PROXY?ie(Pt,`RPC '${e}' stream ${i} detected buffering proxy`):A.stat===Kh.NOPROXY&&ie(Pt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{w.$o()},0),w}}function eh(){return typeof document!="undefined"?document:null}/**
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
 */function jc(t){return new SD(t,!0)}/**
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
 */class qT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ti=e,this.timerId=n,this.Go=r,this.zo=i,this.jo=s,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),i=Math.max(0,n-r);i>0&&ie("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,i,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const x_="PersistentStream";class BT{constructor(e,n,r,i,s,o,a,c){this.Ti=e,this.n_=r,this.r_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new qT(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(cr(n.toString()),cr("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.i_===n&&this.V_(r,i)},r=>{e(()=>{const i=new te($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(i)})})}V_(e,n){const r=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(i=>{r(()=>this.m_(i))}),this.stream.onMessage(i=>{r(()=>++this.__==1?this.g_(i):this.onNext(i))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return ie(x_,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(ie(x_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class IN extends BT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}f_(e,n){return this.connection.Wo("Listen",e,n)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const n=kD(this.serializer,e),r=function(s){if(!("targetChange"in s))return we.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?we.min():o.readTime?Hn(o.readTime):we.min()}(e);return this.listener.p_(n,r)}y_(e){const n={};n.database=nd(this.serializer),n.addTarget=function(s,o){let a;const c=o.target;if(a=Yh(c)?{documents:DD(s,c)}:{query:ND(s,c).ht},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=kT(s,o.resumeToken);const u=Zh(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(we.min())>0){a.readTime=Zl(s,o.snapshotVersion.toTimestamp());const u=Zh(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=VD(this.serializer,e);r&&(n.labels=r),this.I_(n)}w_(e){const n={};n.database=nd(this.serializer),n.removeTarget=e,this.I_(n)}}class AN extends BT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return Fe(!!e.streamToken),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=OD(e.writeResults,e.commitTime),r=Hn(e.commitTime);return this.listener.v_(r,n)}C_(){const e={};e.database=nd(this.serializer),this.I_(e)}S_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>xD(this.serializer,r))};this.I_(n)}}/**
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
 */class RN{}class SN extends RN{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.F_=!1}M_(){if(this.F_)throw new te($.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.bo(e,ed(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new te($.UNKNOWN,s.toString())})}Co(e,n,r,i,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Co(e,ed(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new te($.UNKNOWN,o.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class CN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */const Pi="RemoteStore";class PN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=s,this.z_.To(o=>{r.enqueueAndForget(async()=>{Fi(this)&&(ie(Pi,"Restarting streams for network reachability change."),await async function(c){const u=Ee(c);u.W_.add(4),await pa(u),u.j_.set("Unknown"),u.W_.delete(4),await Hc(u)}(this))})}),this.j_=new CN(r,i)}}async function Hc(t){if(Fi(t))for(const e of t.G_)await e(!0)}async function pa(t){for(const e of t.G_)await e(!1)}function jT(t,e){const n=Ee(t);n.U_.has(e.targetId)||(n.U_.set(e.targetId,e),bf(n)?Tf(n):Ms(n).c_()&&Ef(n,e))}function wf(t,e){const n=Ee(t),r=Ms(n);n.U_.delete(e),r.c_()&&HT(n,e),n.U_.size===0&&(r.c_()?r.P_():Fi(n)&&n.j_.set("Unknown"))}function Ef(t,e){if(t.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ms(t).y_(e)}function HT(t,e){t.H_.Ne(e),Ms(t).w_(e)}function Tf(t){t.H_=new bD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.U_.get(e)||null,it:()=>t.datastore.serializer.databaseId}),Ms(t).start(),t.j_.B_()}function bf(t){return Fi(t)&&!Ms(t).u_()&&t.U_.size>0}function Fi(t){return Ee(t).W_.size===0}function zT(t){t.H_=void 0}async function kN(t){t.j_.set("Online")}async function xN(t){t.U_.forEach((e,n)=>{Ef(t,e)})}async function ON(t,e){zT(t),bf(t)?(t.j_.q_(e),Tf(t)):t.j_.set("Unknown")}async function DN(t,e,n){if(t.j_.set("Online"),e instanceof PT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.U_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.U_.delete(a),i.H_.removeTarget(a))}(t,e)}catch(r){ie(Pi,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await tc(t,r)}else if(e instanceof ml?t.H_.We(e):e instanceof CT?t.H_.Ze(e):t.H_.je(e),!n.isEqual(we.min()))try{const r=await $T(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.H_.ot(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=s.U_.get(u);h&&s.U_.set(u,h.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const h=s.U_.get(c);if(!h)return;s.U_.set(c,h.withResumeToken(At.EMPTY_BYTE_STRING,h.snapshotVersion)),HT(s,c);const f=new Dr(h.target,c,u,h.sequenceNumber);Ef(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){ie(Pi,"Failed to raise snapshot:",r),await tc(t,r)}}async function tc(t,e,n){if(!Vs(e))throw e;t.W_.add(1),await pa(t),t.j_.set("Offline"),n||(n=()=>$T(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ie(Pi,"Retrying IndexedDB access"),await n(),t.W_.delete(1),await Hc(t)})}function WT(t,e){return e().catch(n=>tc(t,n,e))}async function zc(t){const e=Ee(t),n=zr(e);let r=e.K_.length>0?e.K_[e.K_.length-1].batchId:sf;for(;NN(e);)try{const i=await mN(e.localStore,r);if(i===null){e.K_.length===0&&n.P_();break}r=i.batchId,LN(e,i)}catch(i){await tc(e,i)}KT(e)&&GT(e)}function NN(t){return Fi(t)&&t.K_.length<10}function LN(t,e){t.K_.push(e);const n=zr(t);n.c_()&&n.b_&&n.S_(e.mutations)}function KT(t){return Fi(t)&&!zr(t).u_()&&t.K_.length>0}function GT(t){zr(t).start()}async function VN(t){zr(t).C_()}async function MN(t){const e=zr(t);for(const n of t.K_)e.S_(n.mutations)}async function FN(t,e,n){const r=t.K_.shift(),i=ff.from(r,e,n);await WT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await zc(t)}async function UN(t,e){e&&zr(t).b_&&await async function(r,i){if(function(o){return wD(o)&&o!==$.ABORTED}(i.code)){const s=r.K_.shift();zr(r).h_(),await WT(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await zc(r)}}(t,e),KT(t)&&GT(t)}async function O_(t,e){const n=Ee(t);n.asyncQueue.verifyOperationInProgress(),ie(Pi,"RemoteStore received new credentials");const r=Fi(n);n.W_.add(3),await pa(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await Hc(n)}async function $N(t,e){const n=Ee(t);e?(n.W_.delete(2),await Hc(n)):e||(n.W_.add(2),await pa(n),n.j_.set("Unknown"))}function Ms(t){return t.J_||(t.J_=function(n,r,i){const s=Ee(n);return s.M_(),new IN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{xo:kN.bind(null,t),No:xN.bind(null,t),Lo:ON.bind(null,t),p_:DN.bind(null,t)}),t.G_.push(async e=>{e?(t.J_.h_(),bf(t)?Tf(t):t.j_.set("Unknown")):(await t.J_.stop(),zT(t))})),t.J_}function zr(t){return t.Y_||(t.Y_=function(n,r,i){const s=Ee(n);return s.M_(),new AN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{xo:()=>Promise.resolve(),No:VN.bind(null,t),Lo:UN.bind(null,t),D_:MN.bind(null,t),v_:FN.bind(null,t)}),t.G_.push(async e=>{e?(t.Y_.h_(),await zc(t)):(await t.Y_.stop(),t.K_.length>0&&(ie(Pi,`Stopping write stream with ${t.K_.length} pending writes`),t.K_=[]))})),t.Y_}/**
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
 */class If{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new sr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new If(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Af(t,e){if(cr("AsyncQueue",`${e}: ${t}`),Vs(t))return new te($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class gs{static emptySet(e){return new gs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||le.comparator(n.key,r.key):(n,r)=>le.comparator(n.key,r.key),this.keyedMap=co(),this.sortedSet=new et(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof gs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class D_{constructor(){this.Z_=new et(le.comparator)}track(e){const n=e.doc.key,r=this.Z_.get(n);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(n,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(n):e.type===1&&r.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):ve():this.Z_=this.Z_.insert(n,e)}X_(){const e=[];return this.Z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ps{constructor(e,n,r,i,s,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ps(e,n,gs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class qN{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class BN{constructor(){this.queries=N_(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,r){const i=Ee(n),s=i.queries;i.queries=N_(),s.forEach((o,a)=>{for(const c of a.ta)c.onError(r)})})(this,new te($.ABORTED,"Firestore shutting down"))}}function N_(){return new Mi(t=>fT(t),Fc)}async function QT(t,e){const n=Ee(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.na()&&e.ra()&&(r=2):(s=new qN,r=e.ra()?0:1);try{switch(r){case 0:s.ea=await n.onListen(i,!0);break;case 1:s.ea=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Af(o,`Initialization of query '${Xi(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.ta.push(e),e.sa(n.onlineState),s.ea&&e.oa(s.ea)&&Rf(n)}async function JT(t,e){const n=Ee(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.ta.indexOf(e);o>=0&&(s.ta.splice(o,1),s.ta.length===0?i=e.ra()?0:1:!s.na()&&e.ra()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function jN(t,e){const n=Ee(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.ta)a.oa(i)&&(r=!0);o.ea=i}}r&&Rf(n)}function HN(t,e,n){const r=Ee(t),i=r.queries.get(e);if(i)for(const s of i.ta)s.onError(n);r.queries.delete(e)}function Rf(t){t.ia.forEach(e=>{e.next()})}var sd,L_;(L_=sd||(sd={}))._a="default",L_.Cache="cache";class YT{constructor(e,n,r){this.query=e,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ps(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ua?this.la(e)&&(this.aa.next(e),n=!0):this.ha(e,this.onlineState)&&(this.Pa(e),n=!0),this.ca=e,n}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),n=!0),n}ha(e,n){if(!e.fromCache||!this.ra())return!0;const r=n!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}la(e){if(e.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(e){e=Ps.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==sd.Cache}}/**
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
 */class XT{constructor(e){this.key=e}}class ZT{constructor(e){this.key=e}}class zN{constructor(e,n){this.query=e,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Ce(),this.mutatedKeys=Ce(),this.ya=pT(e),this.wa=new gs(this.ya)}get ba(){return this.fa}Sa(e,n){const r=n?n.Da:new D_,i=n?n.wa:this.wa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const p=i.get(h),g=Uc(this.query,f)?f:null,w=!!p&&this.mutatedKeys.has(p.key),C=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let A=!1;p&&g?p.data.isEqual(g.data)?w!==C&&(r.track({type:3,doc:g}),A=!0):this.va(p,g)||(r.track({type:2,doc:g}),A=!0,(c&&this.ya(g,c)>0||u&&this.ya(g,u)<0)&&(a=!0)):!p&&g?(r.track({type:0,doc:g}),A=!0):p&&!g&&(r.track({type:1,doc:p}),A=!0,(c||u)&&(a=!0)),A&&(g?(o=o.add(g),s=C?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{wa:o,Da:r,ls:a,mutatedKeys:s}}va(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const o=e.Da.X_();o.sort((h,f)=>function(g,w){const C=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ve()}};return C(g)-C(w)}(h.type,f.type)||this.ya(h.doc,f.doc)),this.Ca(r),i=i!=null&&i;const a=n&&!i?this.Fa():[],c=this.pa.size===0&&this.current&&!i?1:0,u=c!==this.ga;return this.ga=c,o.length!==0||u?{snapshot:new Ps(this.query,e.wa,s,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:a}:{Ma:a}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new D_,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Ce(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const n=[];return e.forEach(r=>{this.pa.has(r)||n.push(new ZT(r))}),this.pa.forEach(r=>{e.has(r)||n.push(new XT(r))}),n}Oa(e){this.fa=e.gs,this.pa=Ce();const n=this.Sa(e.documents);return this.applyChanges(n,!0)}Na(){return Ps.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Sf="SyncEngine";class WN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class KN{constructor(e){this.key=e,this.Ba=!1}}class GN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.La={},this.ka=new Mi(a=>fT(a),Fc),this.qa=new Map,this.Qa=new Set,this.$a=new et(le.comparator),this.Ka=new Map,this.Ua=new gf,this.Wa={},this.Ga=new Map,this.za=Cs.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function QN(t,e,n=!0){const r=sb(t);let i;const s=r.ka.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Na()):i=await eb(r,e,n,!0),i}async function JN(t,e){const n=sb(t);await eb(n,e,!0,!1)}async function eb(t,e,n,r){const i=await gN(t.localStore,jn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await YN(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&jT(t.remoteStore,i),a}async function YN(t,e,n,r,i){t.Ha=(f,p,g)=>async function(C,A,x,k){let O=A.view.Sa(x);O.ls&&(O=await S_(C.localStore,A.query,!1).then(({documents:b})=>A.view.Sa(b,O)));const D=k&&k.targetChanges.get(A.targetId),V=k&&k.targetMismatches.get(A.targetId)!=null,H=A.view.applyChanges(O,C.isPrimaryClient,D,V);return M_(C,A.targetId,H.Ma),H.snapshot}(t,f,p,g);const s=await S_(t.localStore,e,!0),o=new zN(e,s.gs),a=o.Sa(s.documents),c=fa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,c);M_(t,n,u.Ma);const h=new WN(e,n,o);return t.ka.set(e,h),t.qa.has(n)?t.qa.get(n).push(e):t.qa.set(n,[e]),u.snapshot}async function XN(t,e,n){const r=Ee(t),i=r.ka.get(e),s=r.qa.get(i.targetId);if(s.length>1)return r.qa.set(i.targetId,s.filter(o=>!Fc(o,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await rd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&wf(r.remoteStore,i.targetId),od(r,i.targetId)}).catch(Ls)):(od(r,i.targetId),await rd(r.localStore,i.targetId,!0))}async function ZN(t,e){const n=Ee(t),r=n.ka.get(e),i=n.qa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),wf(n.remoteStore,r.targetId))}async function eL(t,e,n){const r=aL(t);try{const i=await function(o,a){const c=Ee(o),u=gt.now(),h=a.reduce((g,w)=>g.add(w.key),Ce());let f,p;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let w=ur(),C=Ce();return c.ds.getEntries(g,h).next(A=>{w=A,w.forEach((x,k)=>{k.isValidDocument()||(C=C.add(x))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,w)).next(A=>{f=A;const x=[];for(const k of a){const O=mD(k,f.get(k.key).overlayedDocument);O!=null&&x.push(new Xr(k.key,O,oT(O.value.mapValue),pn.exists(!0)))}return c.mutationQueue.addMutationBatch(g,u,x,a)}).next(A=>{p=A;const x=A.applyToLocalDocumentSet(f,C);return c.documentOverlayCache.saveOverlays(g,A.batchId,x)})}).then(()=>({batchId:p.batchId,changes:gT(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let u=o.Wa[o.currentUser.toKey()];u||(u=new et(ke)),u=u.insert(a,c),o.Wa[o.currentUser.toKey()]=u}(r,i.batchId,n),await ma(r,i.changes),await zc(r.remoteStore)}catch(i){const s=Af(i,"Failed to persist write");n.reject(s)}}async function tb(t,e){const n=Ee(t);try{const r=await fN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Ka.get(s);o&&(Fe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ba=!0:i.modifiedDocuments.size>0?Fe(o.Ba):i.removedDocuments.size>0&&(Fe(o.Ba),o.Ba=!1))}),await ma(n,r,e)}catch(r){await Ls(r)}}function V_(t,e,n){const r=Ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ka.forEach((s,o)=>{const a=o.view.sa(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=Ee(o);c.onlineState=a;let u=!1;c.queries.forEach((h,f)=>{for(const p of f.ta)p.sa(a)&&(u=!0)}),u&&Rf(c)}(r.eventManager,e),i.length&&r.La.p_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function tL(t,e,n){const r=Ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ka.get(e),s=i&&i.key;if(s){let o=new et(le.comparator);o=o.insert(s,Nt.newNoDocument(s,we.min()));const a=Ce().add(s),c=new Bc(we.min(),new Map,new et(ke),o,a);await tb(r,c),r.$a=r.$a.remove(s),r.Ka.delete(e),Cf(r)}else await rd(r.localStore,e,!1).then(()=>od(r,e,n)).catch(Ls)}async function nL(t,e){const n=Ee(t),r=e.batch.batchId;try{const i=await dN(n.localStore,e);rb(n,r,null),nb(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ma(n,i)}catch(i){await Ls(i)}}async function rL(t,e,n){const r=Ee(t);try{const i=await function(o,a){const c=Ee(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,a).next(f=>(Fe(f!==null),h=f.keys(),c.mutationQueue.removeMutationBatch(u,f))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(r.localStore,e);rb(r,e,n),nb(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ma(r,i)}catch(i){await Ls(i)}}function nb(t,e){(t.Ga.get(e)||[]).forEach(n=>{n.resolve()}),t.Ga.delete(e)}function rb(t,e,n){const r=Ee(t);let i=r.Wa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Wa[r.currentUser.toKey()]=i}}function od(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.qa.get(e))t.ka.delete(r),n&&t.La.Ja(r,n);t.qa.delete(e),t.isPrimaryClient&&t.Ua.Sr(e).forEach(r=>{t.Ua.containsKey(r)||ib(t,r)})}function ib(t,e){t.Qa.delete(e.path.canonicalString());const n=t.$a.get(e);n!==null&&(wf(t.remoteStore,n),t.$a=t.$a.remove(e),t.Ka.delete(n),Cf(t))}function M_(t,e,n){for(const r of n)r instanceof XT?(t.Ua.addReference(r.key,e),iL(t,r)):r instanceof ZT?(ie(Sf,"Document no longer in limbo: "+r.key),t.Ua.removeReference(r.key,e),t.Ua.containsKey(r.key)||ib(t,r.key)):ve()}function iL(t,e){const n=e.key,r=n.path.canonicalString();t.$a.get(n)||t.Qa.has(r)||(ie(Sf,"New document in limbo: "+n),t.Qa.add(r),Cf(t))}function Cf(t){for(;t.Qa.size>0&&t.$a.size<t.maxConcurrentLimboResolutions;){const e=t.Qa.values().next().value;t.Qa.delete(e);const n=new le(We.fromString(e)),r=t.za.next();t.Ka.set(r,new KN(n)),t.$a=t.$a.insert(n,r),jT(t.remoteStore,new Dr(jn(cf(n.path)),r,"TargetPurposeLimboResolution",Nc.ae))}}async function ma(t,e,n){const r=Ee(t),i=[],s=[],o=[];r.ka.isEmpty()||(r.ka.forEach((a,c)=>{o.push(r.Ha(c,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){i.push(u);const f=vf.Yi(c.targetId,u);s.push(f)}}))}),await Promise.all(o),r.La.p_(i),await async function(c,u){const h=Ee(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>j.forEach(u,p=>j.forEach(p.Hi,g=>h.persistence.referenceDelegate.addReference(f,p.targetId,g)).next(()=>j.forEach(p.Ji,g=>h.persistence.referenceDelegate.removeReference(f,p.targetId,g)))))}catch(f){if(!Vs(f))throw f;ie(yf,"Failed to update sequence numbers: "+f)}for(const f of u){const p=f.targetId;if(!f.fromCache){const g=h.Ts.get(p),w=g.snapshotVersion,C=g.withLastLimboFreeSnapshotVersion(w);h.Ts=h.Ts.insert(p,C)}}}(r.localStore,s))}async function sL(t,e){const n=Ee(t);if(!n.currentUser.isEqual(e)){ie(Sf,"User change. New user:",e.toKey());const r=await UT(n.localStore,e);n.currentUser=e,function(s,o){s.Ga.forEach(a=>{a.forEach(c=>{c.reject(new te($.CANCELLED,o))})}),s.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ma(n,r.Rs)}}function oL(t,e){const n=Ee(t),r=n.Ka.get(e);if(r&&r.Ba)return Ce().add(r.key);{let i=Ce();const s=n.qa.get(e);if(!s)return i;for(const o of s){const a=n.ka.get(o);i=i.unionWith(a.view.ba)}return i}}function sb(t){const e=Ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=tb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=oL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tL.bind(null,e),e.La.p_=jN.bind(null,e.eventManager),e.La.Ja=HN.bind(null,e.eventManager),e}function aL(t){const e=Ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rL.bind(null,e),e}class nc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=jc(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return hN(this.persistence,new lN,e.initialUser,this.serializer)}Xa(e){return new FT(_f.ri,this.serializer)}Za(e){return new vN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}nc.provider={build:()=>new nc};class lL extends nc{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){Fe(this.persistence.referenceDelegate instanceof ec);const r=this.persistence.referenceDelegate.garbageCollector;return new KD(r,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?Kt.withCacheSize(this.cacheSizeBytes):Kt.DEFAULT;return new FT(r=>ec.ri(r,n),this.serializer)}}class ad{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>V_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=sL.bind(null,this.syncEngine),await $N(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new BN}()}createDatastore(e){const n=jc(e.databaseInfo.databaseId),r=function(s){return new bN(s)}(e.databaseInfo);return function(s,o,a,c){return new SN(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new PN(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>V_(this.syncEngine,n,0),function(){return k_.D()?new k_:new yN}())}createSyncEngine(e,n){return function(i,s,o,a,c,u,h){const f=new GN(i,s,o,a,c,u);return h&&(f.ja=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Ee(i);ie(Pi,"RemoteStore shutting down."),s.W_.add(5),await pa(s),s.z_.shutdown(),s.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}ad.provider={build:()=>new ad};/**
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
 */class ob{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):cr("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Wr="FirestoreClient";class cL{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=xt.UNAUTHENTICATED,this.clientId=QE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{ie(Wr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ie(Wr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new sr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Af(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function th(t,e){t.asyncQueue.verifyOperationInProgress(),ie(Wr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await UT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function F_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await uL(t);ie(Wr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>O_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>O_(e.remoteStore,i)),t._onlineComponents=e}async function uL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ie(Wr,"Using user provided OfflineComponentProvider");try{await th(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===$.FAILED_PRECONDITION||i.code===$.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;bs("Error using user provided cache. Falling back to memory cache: "+n),await th(t,new nc)}}else ie(Wr,"Using default OfflineComponentProvider"),await th(t,new lL(void 0));return t._offlineComponents}async function ab(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ie(Wr,"Using user provided OnlineComponentProvider"),await F_(t,t._uninitializedComponentsProvider._online)):(ie(Wr,"Using default OnlineComponentProvider"),await F_(t,new ad))),t._onlineComponents}function hL(t){return ab(t).then(e=>e.syncEngine)}async function lb(t){const e=await ab(t),n=e.eventManager;return n.onListen=QN.bind(null,e.syncEngine),n.onUnlisten=XN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=JN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=ZN.bind(null,e.syncEngine),n}function dL(t,e,n={}){const r=new sr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const h=new ob({next:p=>{h.su(),o.enqueueAndForget(()=>JT(s,f));const g=p.docs.has(a);!g&&p.fromCache?u.reject(new te($.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&p.fromCache&&c&&c.source==="server"?u.reject(new te($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),f=new YT(cf(a.path),h,{includeMetadataChanges:!0,Ta:!0});return QT(s,f)}(await lb(t),t.asyncQueue,e,n,r)),r.promise}function fL(t,e,n={}){const r=new sr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const h=new ob({next:p=>{h.su(),o.enqueueAndForget(()=>JT(s,f)),p.fromCache&&c.source==="server"?u.reject(new te($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),f=new YT(a,h,{includeMetadataChanges:!0,Ta:!0});return QT(s,f)}(await lb(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function cb(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const U_=new Map;/**
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
 */function ub(t,e,n){if(!n)throw new te($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function pL(t,e,n,r){if(e===!0&&r===!0)throw new te($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function $_(t){if(!le.isDocumentKey(t))throw new te($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function q_(t){if(le.isDocumentKey(t))throw new te($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Wc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ve()}function On(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new te($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Wc(t);throw new te($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function mL(t,e){if(e<=0)throw new te($.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */const hb="firestore.googleapis.com",B_=!0;class j_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new te($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=hb,this.ssl=B_}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:B_;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=MT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<zD)throw new te($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}pL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cb((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new te($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new te($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new te($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Kc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new j_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new j_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new IO;switch(r.type){case"firstParty":return new CO(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=U_.get(n);r&&(ie("ComponentProvider","Removing Datastore"),U_.delete(n),r.terminate())}(this),Promise.resolve()}}function gL(t,e,n,r={}){var i;const s=(t=On(t,Kc))._getSettings(),o=Object.assign(Object.assign({},s),{emulatorOptions:t._getEmulatorOptions()}),a=`${e}:${n}`;s.host!==hb&&s.host!==a&&bs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},s),{host:a,ssl:!1,emulatorOptions:r});if(!$r(c,o)&&(t._setSettings(c),r.mockUserToken)){let u,h;if(typeof r.mockUserToken=="string")u=r.mockUserToken,h=xt.MOCK_USER;else{u=Kw(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new te($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new xt(f)}t._authCredentials=new AO(new GE(u,h))}}/**
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
 */class mr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new mr(this.firestore,e,this._query)}}class Wt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Wt(this.firestore,e,this._key)}}class Fr extends mr{constructor(e,n,r){super(e,n,cf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Wt(this.firestore,null,new le(e))}withConverter(e){return new Fr(this.firestore,e,this._path)}}function vU(t,e,...n){if(t=qe(t),ub("collection","path",e),t instanceof Kc){const r=We.fromString(e,...n);return q_(r),new Fr(t,null,r)}{if(!(t instanceof Wt||t instanceof Fr))throw new te($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(We.fromString(e,...n));return q_(r),new Fr(t.firestore,null,r)}}function Pf(t,e,...n){if(t=qe(t),arguments.length===1&&(e=QE.newId()),ub("doc","path",e),t instanceof Kc){const r=We.fromString(e,...n);return $_(r),new Wt(t,null,new le(r))}{if(!(t instanceof Wt||t instanceof Fr))throw new te($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(We.fromString(e,...n));return $_(r),new Wt(t.firestore,t instanceof Fr?t.converter:null,new le(r))}}/**
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
 */const H_="AsyncQueue";class z_{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new qT(this,"async_queue_retry"),this.bu=()=>{const r=eh();r&&ie(H_,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.Su=e;const n=eh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=eh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new sr;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Vs(e))throw e;ie(H_,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.Su.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw cr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.pu=!1,r))));return this.Su=n,n}enqueueAfterDelay(e,n,r){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const i=If.createAndSchedule(this,e,n,r,s=>this.Fu(s));return this.fu.push(i),i}Du(){this.gu&&ve()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}class Ui extends Kc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new z_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new z_(e),this._firestoreClient=void 0,await e}}}function _L(t,e){const n=typeof t=="object"?t:kc(),r=typeof t=="string"?t:e||Ql,i=Jr(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Hw("firestore");s&&gL(i,...s)}return i}function kf(t){if(t._terminated)throw new te($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||vL(t),t._firestoreClient}function vL(t){var e,n,r;const i=t._freezeSettings(),s=function(a,c,u,h){return new BO(a,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,cb(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||((n=i.localCache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((r=i.localCache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new cL(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class ks{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ks(At.fromBase64String(e))}catch(n){throw new te($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ks(At.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Gc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new te($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ga{constructor(e){this._methodName=e}}/**
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
 */class xf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new te($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new te($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}}/**
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
 */class Of{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const yL=/^__.*__$/;class wL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Xr(e,this.data,this.fieldMask,n,this.fieldTransforms):new da(e,this.data,n,this.fieldTransforms)}}class db{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Xr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function fb(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ve()}}class Df{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Bu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Df(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ku({path:r,Qu:!1});return i.$u(e),i}Ku(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ku({path:r,Qu:!1});return i.Bu(),i}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return rc(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(fb(this.Lu)&&yL.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class EL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||jc(e)}ju(e,n,r,i=!1){return new Df({Lu:e,methodName:n,zu:r,path:bt.emptyPath(),Qu:!1,Gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _a(t){const e=t._freezeSettings(),n=jc(t._databaseId);return new EL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function pb(t,e,n,r,i,s={}){const o=t.ju(s.merge||s.mergeFields?2:0,e,n,i);Vf("Data must be an object, but it was:",o,r);const a=gb(r,o);let c,u;if(s.merge)c=new nn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const p=ld(e,f,n);if(!o.contains(p))throw new te($.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);vb(h,p)||h.push(p)}c=new nn(h),u=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,u=o.fieldTransforms;return new wL(new Qt(a),c,u)}class Qc extends ga{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Qc}}class Nf extends ga{_toFieldTransform(e){return new IT(e.path,new Go)}isEqual(e){return e instanceof Nf}}class Lf extends ga{constructor(e,n){super(e),this.Ju=n}_toFieldTransform(e){const n=new Yo(e.serializer,yT(e.serializer,this.Ju));return new IT(e.path,n)}isEqual(e){return e instanceof Lf&&this.Ju===e.Ju}}function TL(t,e,n,r){const i=t.ju(1,e,n);Vf("Data must be an object, but it was:",i,r);const s=[],o=Qt.empty();Yr(r,(c,u)=>{const h=Mf(e,c,n);u=qe(u);const f=i.Ku(h);if(u instanceof Qc)s.push(h);else{const p=va(u,f);p!=null&&(s.push(h),o.set(h,p))}});const a=new nn(s);return new db(o,a,i.fieldTransforms)}function bL(t,e,n,r,i,s){const o=t.ju(1,e,n),a=[ld(e,r,n)],c=[i];if(s.length%2!=0)throw new te($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)a.push(ld(e,s[p])),c.push(s[p+1]);const u=[],h=Qt.empty();for(let p=a.length-1;p>=0;--p)if(!vb(u,a[p])){const g=a[p];let w=c[p];w=qe(w);const C=o.Ku(g);if(w instanceof Qc)u.push(g);else{const A=va(w,C);A!=null&&(u.push(g),h.set(g,A))}}const f=new nn(u);return new db(h,f,o.fieldTransforms)}function mb(t,e,n,r=!1){return va(n,t.ju(r?4:3,e))}function va(t,e){if(_b(t=qe(t)))return Vf("Unsupported field value:",e,t),gb(t,e);if(t instanceof ga)return function(r,i){if(!fb(i.Lu))throw i.Wu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Wu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=va(a,i.Uu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=qe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return yT(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=gt.fromDate(r);return{timestampValue:Zl(i.serializer,s)}}if(r instanceof gt){const s=new gt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Zl(i.serializer,s)}}if(r instanceof xf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ks)return{bytesValue:kT(i.serializer,r._byteString)};if(r instanceof Wt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Wu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:mf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Of)return function(o,a){return{mapValue:{fields:{[rT]:{stringValue:sT},[Jl]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Wu("VectorValues must only contain numeric values.");return hf(a.serializer,u)})}}}}}}(r,i);throw i.Wu(`Unsupported field value: ${Wc(r)}`)}(t,e)}function gb(t,e){const n={};return YE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Yr(t,(r,i)=>{const s=va(i,e.qu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function _b(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof gt||t instanceof xf||t instanceof ks||t instanceof Wt||t instanceof ga||t instanceof Of)}function Vf(t,e,n){if(!_b(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Wc(n);throw r==="an object"?e.Wu(t+" a custom object"):e.Wu(t+" "+r)}}function ld(t,e,n){if((e=qe(e))instanceof Gc)return e._internalPath;if(typeof e=="string")return Mf(t,e);throw rc("Field path arguments must be of type string or ",t,!1,void 0,n)}const IL=new RegExp("[~\\*/\\[\\]]");function Mf(t,e,n){if(e.search(IL)>=0)throw rc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Gc(...e.split("."))._internalPath}catch{throw rc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function rc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new te($.INVALID_ARGUMENT,a+t+c)}function vb(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Ff{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new AL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Jc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class AL extends Ff{data(){return super.data()}}function Jc(t,e){return typeof e=="string"?Mf(t,e):e instanceof Gc?e._internalPath:e._delegate._internalPath}/**
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
 */function RL(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new te($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Uf{}class Yc extends Uf{}function yU(t,e,...n){let r=[];e instanceof Uf&&r.push(e),r=r.concat(n),function(s){const o=s.filter(c=>c instanceof $f).length,a=s.filter(c=>c instanceof Xc).length;if(o>1||o>0&&a>0)throw new te($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Xc extends Yc{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Xc(e,n,r)}_apply(e){const n=this._parse(e);return yb(e._query,n),new mr(e.firestore,e.converter,Xh(e._query,n))}_parse(e){const n=_a(e.firestore);return function(s,o,a,c,u,h,f){let p;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new te($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){K_(f,h);const w=[];for(const C of f)w.push(W_(c,s,C));p={arrayValue:{values:w}}}else p=W_(c,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||K_(f,h),p=mb(a,o,f,h==="in"||h==="not-in");return ht.create(u,h,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function wU(t,e,n){const r=e,i=Jc("where",t);return Xc._create(i,r,n)}class $f extends Uf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new $f(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:xn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const c of a)yb(o,c),o=Xh(o,c)}(e._query,n),new mr(e.firestore,e.converter,Xh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class qf extends Yc{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new qf(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new te($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new te($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ko(s,o)}(e._query,this._field,this._direction);return new mr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Vi(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function EU(t,e="asc"){const n=e,r=Jc("orderBy",t);return qf._create(r,n)}class Bf extends Yc{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Bf(e,n,r)}_apply(e){return new mr(e.firestore,e.converter,Xl(e._query,this._limit,this._limitType))}}function TU(t){return mL("limit",t),Bf._create("limit",t,"F")}class jf extends Yc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new jf(e,n,r)}_apply(e){const n=SL(e,this.type,this._docOrFields,this._inclusive);return new mr(e.firestore,e.converter,function(i,s){return new Vi(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function bU(...t){return jf._create("startAfter",t,!1)}function SL(t,e,n,r){if(n[0]=qe(n[0]),n[0]instanceof Ff)return function(s,o,a,c,u){if(!c)throw new te($.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const h=[];for(const f of ms(s))if(f.field.isKeyField())h.push(Yl(o,c.key));else{const p=c.data.field(f.field);if(Vc(p))throw new te($.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(p===null){const g=f.field.canonicalString();throw new te($.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${g}' (used as the orderBy) does not exist.`)}h.push(p)}return new Ss(h,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=_a(t.firestore);return function(o,a,c,u,h,f){const p=o.explicitOrderBy;if(h.length>p.length)throw new te($.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const g=[];for(let w=0;w<h.length;w++){const C=h[w];if(p[w].field.isKeyField()){if(typeof C!="string")throw new te($.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof C}`);if(!uf(o)&&C.indexOf("/")!==-1)throw new te($.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${C}' contains a slash.`);const A=o.path.child(We.fromString(C));if(!le.isDocumentKey(A))throw new te($.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${A}' is not because it contains an odd number of segments.`);const x=new le(A);g.push(Yl(a,x))}else{const A=mb(c,u,C);g.push(A)}}return new Ss(g,f)}(t._query,t.firestore._databaseId,i,e,n,r)}}function W_(t,e,n){if(typeof(n=qe(n))=="string"){if(n==="")throw new te($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!uf(e)&&n.indexOf("/")!==-1)throw new te($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(We.fromString(n));if(!le.isDocumentKey(r))throw new te($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Yl(t,new le(r))}if(n instanceof Wt)return Yl(t,n._key);throw new te($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Wc(n)}.`)}function K_(t,e){if(!Array.isArray(t)||t.length===0)throw new te($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function yb(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new te($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class CL{convertValue(e,n="none"){switch(Hr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ot(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ve()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Yr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n[Jl].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>ot(o.doubleValue));return new Of(s)}convertGeoPoint(e){return new xf(ot(e.latitude),ot(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Mc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ho(e));default:return null}}convertTimestamp(e){const n=Br(e);return new gt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=We.fromString(e);Fe(VT(r));const i=new zo(r.get(1),r.get(3)),s=new le(r.popFirst(5));return i.isEqual(n)||cr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function wb(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class ho{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Eb extends Ff{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new gl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Jc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class gl extends Eb{data(e={}){return super.data(e)}}class PL{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ho(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new gl(this._firestore,this._userDataWriter,r.key,r,new ho(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new te($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new gl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ho(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new gl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ho(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:kL(a.type),doc:c,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function kL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ve()}}/**
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
 */function IU(t){t=On(t,Wt);const e=On(t.firestore,Ui);return dL(kf(e),t._key).then(n=>xL(e,t,n))}class Tb extends CL{constructor(e){super(),this.firestore=e}convertBytes(e){return new ks(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Wt(this.firestore,null,n)}}function AU(t){t=On(t,mr);const e=On(t.firestore,Ui),n=kf(e),r=new Tb(e);return RL(t._query),fL(n,t._query).then(i=>new PL(e,r,t,i))}function RU(t,e,n){t=On(t,Wt);const r=On(t.firestore,Ui),i=wb(t.converter,e,n);return Zc(r,[pb(_a(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,pn.none())])}function bb(t,e,n,...r){t=On(t,Wt);const i=On(t.firestore,Ui),s=_a(i);let o;return o=typeof(e=qe(e))=="string"||e instanceof Gc?bL(s,"updateDoc",t._key,e,n,r):TL(s,"updateDoc",t._key,e),Zc(i,[o.toMutation(t._key,pn.exists(!0))])}function SU(t){return Zc(On(t.firestore,Ui),[new df(t._key,pn.none())])}function CU(t,e){const n=On(t.firestore,Ui),r=Pf(t),i=wb(t.converter,e);return Zc(n,[pb(_a(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,pn.exists(!1))]).then(()=>r)}function Zc(t,e){return function(r,i){const s=new sr;return r.asyncQueue.enqueueAndForget(async()=>eL(await hL(r),i,s)),s.promise}(kf(t),e)}function xL(t,e,n){const r=n.docs.get(e._key),i=new Tb(t);return new Eb(t,i,e._key,r,new ho(n.hasPendingWrites,n.fromCache),e.converter)}function PU(){return new Nf("serverTimestamp")}function kU(t){return new Lf("increment",t)}(function(e,n=!0){(function(i){Ns=i})(Li),kn(new gn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Ui(new RO(r.getProvider("auth-internal")),new PO(o,r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new te($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zo(u.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Jt(Xg,Zg,e),Jt(Xg,Zg,"esm2017")})();var OL="firebase",DL="11.4.0";/**
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
 */Jt(OL,DL,"app");const Ib="@firebase/installations",Hf="0.6.13";/**
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
 */const Ab=1e4,Rb=`w:${Hf}`,Sb="FIS_v2",NL="https://firebaseinstallations.googleapis.com/v1",LL=60*60*1e3,VL="installations",ML="Installations";/**
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
 */const FL={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},ki=new Ni(VL,ML,FL);function Cb(t){return t instanceof vn&&t.code.includes("request-failed")}/**
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
 */function Pb({projectId:t}){return`${NL}/projects/${t}/installations`}function kb(t){return{token:t.token,requestStatus:2,expiresIn:$L(t.expiresIn),creationTime:Date.now()}}async function xb(t,e){const r=(await e.json()).error;return ki.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Ob({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function UL(t,{refreshToken:e}){const n=Ob(t);return n.append("Authorization",qL(e)),n}async function Db(t){const e=await t();return e.status>=500&&e.status<600?t():e}function $L(t){return Number(t.replace("s","000"))}function qL(t){return`${Sb} ${t}`}/**
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
 */async function BL({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Pb(t),i=Ob(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:Sb,appId:t.appId,sdkVersion:Rb},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Db(()=>fetch(r,a));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:kb(u.authToken)}}else throw await xb("Create Installation",c)}/**
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
 */function Nb(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function jL(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const HL=/^[cdef][\w-]{21}$/,cd="";function zL(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=WL(t);return HL.test(n)?n:cd}catch{return cd}}function WL(t){return jL(t).substr(0,22)}/**
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
 */function eu(t){return`${t.appName}!${t.appId}`}/**
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
 */const Lb=new Map;function Vb(t,e){const n=eu(t);Mb(n,e),KL(n,e)}function Mb(t,e){const n=Lb.get(t);if(!!n)for(const r of n)r(e)}function KL(t,e){const n=GL();n&&n.postMessage({key:t,fid:e}),QL()}let pi=null;function GL(){return!pi&&"BroadcastChannel"in self&&(pi=new BroadcastChannel("[Firebase] FID Change"),pi.onmessage=t=>{Mb(t.data.key,t.data.fid)}),pi}function QL(){Lb.size===0&&pi&&(pi.close(),pi=null)}/**
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
 */const JL="firebase-installations-database",YL=1,xi="firebase-installations-store";let nh=null;function zf(){return nh||(nh=Zw(JL,YL,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(xi)}}})),nh}async function ic(t,e){const n=eu(t),i=(await zf()).transaction(xi,"readwrite"),s=i.objectStore(xi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Vb(t,e.fid),e}async function Fb(t){const e=eu(t),r=(await zf()).transaction(xi,"readwrite");await r.objectStore(xi).delete(e),await r.done}async function tu(t,e){const n=eu(t),i=(await zf()).transaction(xi,"readwrite"),s=i.objectStore(xi),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Vb(t,a.fid),a}/**
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
 */async function Wf(t){let e;const n=await tu(t.appConfig,r=>{const i=XL(r),s=ZL(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===cd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function XL(t){const e=t||{fid:zL(),registrationStatus:0};return Ub(e)}function ZL(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ki.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=eV(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:tV(t)}:{installationEntry:e}}async function eV(t,e){try{const n=await BL(t,e);return ic(t.appConfig,n)}catch(n){throw Cb(n)&&n.customData.serverCode===409?await Fb(t.appConfig):await ic(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function tV(t){let e=await G_(t.appConfig);for(;e.registrationStatus===1;)await Nb(100),e=await G_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Wf(t);return r||n}return e}function G_(t){return tu(t,e=>{if(!e)throw ki.create("installation-not-found");return Ub(e)})}function Ub(t){return nV(t)?{fid:t.fid,registrationStatus:0}:t}function nV(t){return t.registrationStatus===1&&t.registrationTime+Ab<Date.now()}/**
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
 */async function rV({appConfig:t,heartbeatServiceProvider:e},n){const r=iV(t,n),i=UL(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:Rb,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Db(()=>fetch(r,a));if(c.ok){const u=await c.json();return kb(u)}else throw await xb("Generate Auth Token",c)}function iV(t,{fid:e}){return`${Pb(t)}/${e}/authTokens:generate`}/**
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
 */async function Kf(t,e=!1){let n;const r=await tu(t.appConfig,s=>{if(!$b(s))throw ki.create("not-registered");const o=s.authToken;if(!e&&aV(o))return s;if(o.requestStatus===1)return n=sV(t,e),s;{if(!navigator.onLine)throw ki.create("app-offline");const a=cV(s);return n=oV(t,a),a}});return n?await n:r.authToken}async function sV(t,e){let n=await Q_(t.appConfig);for(;n.authToken.requestStatus===1;)await Nb(100),n=await Q_(t.appConfig);const r=n.authToken;return r.requestStatus===0?Kf(t,e):r}function Q_(t){return tu(t,e=>{if(!$b(e))throw ki.create("not-registered");const n=e.authToken;return uV(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function oV(t,e){try{const n=await rV(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await ic(t.appConfig,r),n}catch(n){if(Cb(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Fb(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ic(t.appConfig,r)}throw n}}function $b(t){return t!==void 0&&t.registrationStatus===2}function aV(t){return t.requestStatus===2&&!lV(t)}function lV(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+LL}function cV(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function uV(t){return t.requestStatus===1&&t.requestTime+Ab<Date.now()}/**
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
 */async function hV(t){const e=t,{installationEntry:n,registrationPromise:r}=await Wf(e);return r?r.catch(console.error):Kf(e).catch(console.error),n.fid}/**
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
 */async function dV(t,e=!1){const n=t;return await fV(n),(await Kf(n,e)).token}async function fV(t){const{registrationPromise:e}=await Wf(t);e&&await e}/**
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
 */function pV(t){if(!t||!t.options)throw rh("App Configuration");if(!t.name)throw rh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw rh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function rh(t){return ki.create("missing-app-config-values",{valueName:t})}/**
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
 */const qb="installations",mV="installations-internal",gV=t=>{const e=t.getProvider("app").getImmediate(),n=pV(e),r=Jr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},_V=t=>{const e=t.getProvider("app").getImmediate(),n=Jr(e,qb).getImmediate();return{getId:()=>hV(n),getToken:i=>dV(n,i)}};function vV(){kn(new gn(qb,gV,"PUBLIC")),kn(new gn(mV,_V,"PRIVATE"))}vV();Jt(Ib,Hf);Jt(Ib,Hf,"esm2017");/**
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
 */const sc="analytics",yV="firebase_id",wV="origin",EV=60*1e3,TV="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Gf="https://www.googletagmanager.com/gtag/js";/**
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
 */const Yt=new Pc("@firebase/analytics");/**
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
 */const bV={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},sn=new Ni("analytics","Analytics",bV);/**
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
 */function IV(t){if(!t.startsWith(Gf)){const e=sn.create("invalid-gtag-resource",{gtagURL:t});return Yt.warn(e.message),""}return t}function Bb(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function AV(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function RV(t,e){const n=AV("firebase-js-sdk-policy",{createScriptURL:IV}),r=document.createElement("script"),i=`${Gf}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function SV(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function CV(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const c=(await Bb(n)).find(u=>u.measurementId===i);c&&await e[c.appId]}}catch(a){Yt.error(a)}t("config",i,s)}async function PV(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Bb(n);for(const c of o){const u=a.find(f=>f.measurementId===c),h=u&&e[u.appId];if(h)s.push(h);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Yt.error(s)}}function kV(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,c]=o;await PV(t,e,n,a,c)}else if(s==="config"){const[a,c]=o;await CV(t,e,n,r,a,c)}else if(s==="consent"){const[a,c]=o;t("consent",a,c)}else if(s==="get"){const[a,c,u]=o;t("get",a,c,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){Yt.error(a)}}return i}function xV(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=kV(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function OV(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Gf)&&n.src.includes(t))return n;return null}/**
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
 */const DV=30,NV=1e3;class LV{constructor(e={},n=NV){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const jb=new LV;function VV(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function MV(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:VV(r)},s=TV.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw sn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function FV(t,e=jb,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw sn.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw sn.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new qV;return setTimeout(async()=>{a.abort()},n!==void 0?n:EV),Hb({appId:r,apiKey:i,measurementId:s},o,a,e)}async function Hb(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=jb){var s;const{appId:o,measurementId:a}=t;try{await UV(r,e)}catch(c){if(a)return Yt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await MV(t);return i.deleteThrottleMetadata(o),c}catch(c){const u=c;if(!$V(u)){if(i.deleteThrottleMetadata(o),a)return Yt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw c}const h=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?Ig(n,i.intervalMillis,DV):Ig(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(o,f),Yt.debug(`Calling attemptFetch again in ${h} millis`),Hb(t,f,r,i)}}function UV(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(sn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function $V(t){if(!(t instanceof vn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class qV{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function BV(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function jV(){if(Qw())try{await Jw()}catch(t){return Yt.warn(sn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Yt.warn(sn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function HV(t,e,n,r,i,s,o){var a;const c=FV(t);c.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&Yt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Yt.error(g)),e.push(c);const u=jV().then(g=>{if(g)return r.getId()}),[h,f]=await Promise.all([c,u]);OV(s)||RV(s,h.measurementId),i("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[wV]="firebase",p.update=!0,f!=null&&(p[yV]=f),i("config",h.measurementId,p),h.measurementId}/**
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
 */class zV{constructor(e){this.app=e}_delete(){return delete So[this.app.options.appId],Promise.resolve()}}let So={},J_=[];const Y_={};let ih="dataLayer",WV="gtag",X_,zb,Z_=!1;function KV(){const t=[];if(Gw()&&t.push("This is a browser extension environment."),MP()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=sn.create("invalid-analytics-context",{errorInfo:e});Yt.warn(n.message)}}function GV(t,e,n){KV();const r=t.options.appId;if(!r)throw sn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Yt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw sn.create("no-api-key");if(So[r]!=null)throw sn.create("already-exists",{id:r});if(!Z_){SV(ih);const{wrappedGtag:s,gtagCore:o}=xV(So,J_,Y_,ih,WV);zb=s,X_=o,Z_=!0}return So[r]=HV(t,J_,Y_,e,X_,ih,n),new zV(t)}function QV(t=kc()){t=qe(t);const e=Jr(t,sc);return e.isInitialized()?e.getImmediate():JV(t)}function JV(t,e={}){const n=Jr(t,sc);if(n.isInitialized()){const i=n.getImmediate();if($r(e,n.getOptions()))return i;throw sn.create("already-initialized")}return n.initialize({options:e})}function YV(t,e,n,r){t=qe(t),BV(zb,So[t.app.options.appId],e,n,r).catch(i=>Yt.error(i))}const ev="@firebase/analytics",tv="0.10.12";function XV(){kn(new gn(sc,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return GV(r,i,n)},"PUBLIC")),kn(new gn("analytics-internal",t,"PRIVATE")),Jt(ev,tv),Jt(ev,tv,"esm2017");function t(e){try{const n=e.getProvider(sc).getImmediate();return{logEvent:(r,i,s)=>YV(n,r,i,s)}}catch(n){throw sn.create("interop-component-reg-failed",{reason:n})}}}XV();/**
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
 */const Wb="firebasestorage.googleapis.com",Kb="storageBucket",ZV=2*60*1e3,eM=10*60*1e3;/**
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
 */class it extends vn{constructor(e,n,r=0){super(sh(e),`Firebase Storage: ${n} (${sh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,it.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return sh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var rt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(rt||(rt={}));function sh(t){return"storage/"+t}function Qf(){const t="An unknown error occurred, please check the error payload for server response.";return new it(rt.UNKNOWN,t)}function tM(t){return new it(rt.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function nM(t){return new it(rt.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function rM(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new it(rt.UNAUTHENTICATED,t)}function iM(){return new it(rt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function sM(t){return new it(rt.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function oM(){return new it(rt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function aM(){return new it(rt.CANCELED,"User canceled the upload/download.")}function lM(t){return new it(rt.INVALID_URL,"Invalid URL '"+t+"'.")}function cM(t){return new it(rt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function uM(){return new it(rt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Kb+"' property when initializing the app?")}function hM(){return new it(rt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function dM(){return new it(rt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function fM(t){return new it(rt.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ud(t){return new it(rt.INVALID_ARGUMENT,t)}function Gb(){return new it(rt.APP_DELETED,"The Firebase app was deleted.")}function pM(t){return new it(rt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Co(t,e){return new it(rt.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function to(t){throw new it(rt.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class rn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=rn.makeFromUrl(e,n)}catch{return new rn(e,"")}if(r.path==="")return r;throw cM(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(D){D.path_=decodeURIComponent(D.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${h}/b/${i}/o${p}`,"i"),w={bucket:1,path:3},C=n===Wb?"(?:storage.googleapis.com|storage.cloud.google.com)":n,A="([^?#]*)",x=new RegExp(`^https?://${C}/${i}/${A}`,"i"),O=[{regex:a,indices:c,postModify:s},{regex:g,indices:w,postModify:u},{regex:x,indices:{bucket:1,path:2},postModify:u}];for(let D=0;D<O.length;D++){const V=O[D],H=V.regex.exec(e);if(H){const b=H[V.indices.bucket];let y=H[V.indices.path];y||(y=""),r=new rn(b,y),V.postModify(r);break}}if(r==null)throw lM(e);return r}}class mM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function gM(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return a===2}let u=!1;function h(...A){u||(u=!0,e.apply(null,A))}function f(A){i=setTimeout(()=>{i=null,t(g,c())},A)}function p(){s&&clearTimeout(s)}function g(A,...x){if(u){p();return}if(A){p(),h.call(null,A,...x);return}if(c()||o){p(),h.call(null,A,...x);return}r<64&&(r*=2);let O;a===1?(a=2,O=0):O=(r+Math.random())*1e3,f(O)}let w=!1;function C(A){w||(w=!0,p(),!u&&(i!==null?(A||(a=2),clearTimeout(i),f(0)):A||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,C(!0)},n),C}function _M(t){t(!1)}/**
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
 */function vM(t){return t!==void 0}function yM(t){return typeof t=="object"&&!Array.isArray(t)}function Jf(t){return typeof t=="string"||t instanceof String}function nv(t){return Yf()&&t instanceof Blob}function Yf(){return typeof Blob!="undefined"}function rv(t,e,n,r){if(r<e)throw ud(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw ud(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Xf(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Qb(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Ei;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ei||(Ei={}));/**
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
 */function wM(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class EM{constructor(e,n,r,i,s,o,a,c,u,h,f,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=f,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,w)=>{this.resolve_=g,this.reject_=w,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Qa(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Ei.NO_ERROR,c=s.getStatus();if(!a||wM(c,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===Ei.ABORT;r(!1,new Qa(!1,null,h));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new Qa(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());vM(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=Qf();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?Gb():aM();o(c)}else{const c=oM();o(c)}};this.canceled_?n(!1,new Qa(!1,null,!0)):this.backoffId_=gM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&_M(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Qa{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function TM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function bM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function IM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function AM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function RM(t,e,n,r,i,s,o=!0){const a=Qb(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return IM(u,e),TM(u,n),bM(u,s),AM(u,r),new EM(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function SM(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function CM(...t){const e=SM();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Yf())return new Blob(t);throw new it(rt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function PM(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function kM(t){if(typeof atob=="undefined")throw fM("base-64");return atob(t)}/**
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
 */const $n={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class oh{constructor(e,n){this.data=e,this.contentType=n||null}}function xM(t,e){switch(t){case $n.RAW:return new oh(Jb(e));case $n.BASE64:case $n.BASE64URL:return new oh(Yb(t,e));case $n.DATA_URL:return new oh(DM(e),NM(e))}throw Qf()}function Jb(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function OM(t){let e;try{e=decodeURIComponent(t)}catch{throw Co($n.DATA_URL,"Malformed data URL.")}return Jb(e)}function Yb(t,e){switch(t){case $n.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Co(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case $n.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Co(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=kM(e)}catch(i){throw i.message.includes("polyfill")?i:Co(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class Xb{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Co($n.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=LM(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function DM(t){const e=new Xb(t);return e.base64?Yb($n.BASE64,e.rest):OM(e.rest)}function NM(t){return new Xb(t).contentType}function LM(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Or{constructor(e,n){let r=0,i="";nv(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(nv(this.data_)){const r=this.data_,i=PM(r,e,n);return i===null?null:new Or(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Or(r,!0)}}static getBlob(...e){if(Yf()){const n=e.map(r=>r instanceof Or?r.data_:r);return new Or(CM.apply(null,n))}else{const n=e.map(o=>Jf(o)?xM($n.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Or(i,!0)}}uploadData(){return this.data_}}/**
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
 */function Zb(t){let e;try{e=JSON.parse(t)}catch{return null}return yM(e)?e:null}/**
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
 */function VM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function MM(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function e0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function FM(t,e){return e}class Mt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||FM}}let Ja=null;function UM(t){return!Jf(t)||t.length<2?t:e0(t)}function t0(){if(Ja)return Ja;const t=[];t.push(new Mt("bucket")),t.push(new Mt("generation")),t.push(new Mt("metageneration")),t.push(new Mt("name","fullPath",!0));function e(s,o){return UM(o)}const n=new Mt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Mt("size");return i.xform=r,t.push(i),t.push(new Mt("timeCreated")),t.push(new Mt("updated")),t.push(new Mt("md5Hash",null,!0)),t.push(new Mt("cacheControl",null,!0)),t.push(new Mt("contentDisposition",null,!0)),t.push(new Mt("contentEncoding",null,!0)),t.push(new Mt("contentLanguage",null,!0)),t.push(new Mt("contentType",null,!0)),t.push(new Mt("metadata","customMetadata",!0)),Ja=t,Ja}function $M(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new rn(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function qM(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return $M(r,t),r}function n0(t,e,n){const r=Zb(e);return r===null?null:qM(t,r,n)}function BM(t,e,n,r){const i=Zb(e);if(i===null||!Jf(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const h=t.bucket,f=t.fullPath,p="/b/"+o(h)+"/o/"+o(f),g=Xf(p,n,r),w=Qb({alt:"media",token:u});return g+w})[0]}function jM(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class r0{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function i0(t){if(!t)throw Qf()}function HM(t,e){function n(r,i){const s=n0(t,i,e);return i0(s!==null),s}return n}function zM(t,e){function n(r,i){const s=n0(t,i,e);return i0(s!==null),BM(s,i,t.host,t._protocol)}return n}function s0(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=iM():i=rM():n.getStatus()===402?i=nM(t.bucket):n.getStatus()===403?i=sM(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function WM(t){const e=s0(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=tM(t.path)),s.serverResponse=i.serverResponse,s}return n}function KM(t,e,n){const r=e.fullServerUrl(),i=Xf(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new r0(i,s,zM(t,n),o);return a.errorHandler=WM(e),a}function GM(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function QM(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=GM(null,e)),r}function JM(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let O="";for(let D=0;D<2;D++)O=O+Math.random().toString().slice(2);return O}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=QM(e,r,i),h=jM(u,n),f="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,p=`\r
--`+c+"--",g=Or.getBlob(f,r,p);if(g===null)throw hM();const w={name:u.fullPath},C=Xf(s,t.host,t._protocol),A="POST",x=t.maxUploadRetryTime,k=new r0(C,A,HM(t,n),x);return k.urlParams=w,k.headers=o,k.body=g.uploadData(),k.errorHandler=s0(e),k}class YM{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ei.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ei.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ei.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw to("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw to("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw to("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw to("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw to("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class XM extends YM{initXhr(){this.xhr_.responseType="text"}}function o0(){return new XM}/**
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
 */class Oi{constructor(e,n){this._service=e,n instanceof rn?this._location=n:this._location=rn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Oi(e,n)}get root(){const e=new rn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return e0(this._location.path)}get storage(){return this._service}get parent(){const e=VM(this._location.path);if(e===null)return null;const n=new rn(this._location.bucket,e);return new Oi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw pM(e)}}function ZM(t,e,n){t._throwIfRoot("uploadBytes");const r=JM(t.storage,t._location,t0(),new Or(e,!0),n);return t.storage.makeRequestWithTokens(r,o0).then(i=>({metadata:i,ref:t}))}function eF(t){t._throwIfRoot("getDownloadURL");const e=KM(t.storage,t._location,t0());return t.storage.makeRequestWithTokens(e,o0).then(n=>{if(n===null)throw dM();return n})}function tF(t,e){const n=MM(t._location.path,e),r=new rn(t._location.bucket,n);return new Oi(t.storage,r)}/**
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
 */function nF(t){return/^[A-Za-z]+:\/\//.test(t)}function rF(t,e){return new Oi(t,e)}function a0(t,e){if(t instanceof Zf){const n=t;if(n._bucket==null)throw uM();const r=new Oi(n,n._bucket);return e!=null?a0(r,e):r}else return e!==void 0?tF(t,e):t}function iF(t,e){if(e&&nF(e)){if(t instanceof Zf)return rF(t,e);throw ud("To use ref(service, url), the first argument must be a Storage instance.")}else return a0(t,e)}function iv(t,e){const n=e==null?void 0:e[Kb];return n==null?null:rn.makeFromBucketSpec(n,t)}function sF(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Kw(i,t.app.options.projectId))}class Zf{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Wb,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ZV,this._maxUploadRetryTime=eM,this._requests=new Set,i!=null?this._bucket=rn.makeFromBucketSpec(i,this._host):this._bucket=iv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=rn.makeFromBucketSpec(this._url,e):this._bucket=iv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){rv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){rv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Ht(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Oi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new mM(Gb());{const o=RM(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const sv="@firebase/storage",ov="0.13.7";/**
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
 */const l0="storage";function xU(t,e,n){return t=qe(t),ZM(t,e,n)}function OU(t){return t=qe(t),eF(t)}function DU(t,e){return t=qe(t),iF(t,e)}function oF(t=kc(),e){t=qe(t);const r=Jr(t,l0).getImmediate({identifier:e}),i=Hw("storage");return i&&aF(r,...i),r}function aF(t,e,n,r={}){sF(t,e,n,r)}function lF(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Zf(n,r,i,e,Li)}function cF(){kn(new gn(l0,lF,"PUBLIC").setMultipleInstances(!0)),Jt(sv,ov,""),Jt(sv,ov,"esm2017")}cF();const uF={apiKey:"AIzaSyA75UioB4LkxZBOmmJhIvUvRjfUrySC6nk",authDomain:"kjm01-vue3-firebase-app-c56f7.firebaseapp.com",projectId:"kjm01-vue3-firebase-app-c56f7",storageBucket:"kjm01-vue3-firebase-app-c56f7.firebasestorage.app",messagingSenderId:"1093570967237",appId:"1:1093570967237:web:b05e745dd9d30813b522ac",measurementId:"G-RFLEFK40QF"},nu=eE(uF);QV(nu);const Xt=TO(nu),ep=_L(nu),hF=oF(nu);var dF=async()=>{const t=Uw();u1(Xt,e=>{t.setUser(e)})},fF=Object.freeze(Object.defineProperty({__proto__:null,auth:Xt,db:ep,storage:hF,default:dF},Symbol.toStringTag,{value:"Module"}));const pF="https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=";async function NU(){const t=new er,{user:e}=await x1(Xt,t);return e}async function mF(){await h1(Xt)}async function LU({email:t,password:e}){const{user:n}=await r1(Xt,t,e);await PE(n,{displayName:t.split("@")[0],photoURL:c0(n.uid)}),CE(Xt.currentUser)}function c0(t){return`${pF}${t}`}async function VU({email:t,password:e}){const{user:n}=await i1(Xt,t,e);return n}async function MU(t){await n1(Xt,t)}async function FU(t){await a1(Xt.currentUser,t)}async function gF(){await CE(Xt.currentUser)}async function UU(t){await PE(Xt.currentUser,{displayName:t}),await bb(Pf(ep,"users",Xt.currentUser.uid),{displayName:t})}async function $U(t){await o1(Xt.currentUser,t),await bb(Pf(ep,"users",Xt.currentUser.uid),{email:t})}const _F={xs:8,sm:10,md:14,lg:20,xl:24};var qU=Xe({name:"QChip",props:{...xs,...Rc,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(t,{slots:e,emit:n}){const{proxy:{$q:r}}=Ye(),i=Os(t,r),s=Sc(t,_F),o=B(()=>t.selected===!0||t.icon!==void 0),a=B(()=>t.selected===!0?t.iconSelected||r.iconSet.chip.selected:t.icon),c=B(()=>t.iconRemove||r.iconSet.chip.remove),u=B(()=>t.disable===!1&&(t.clickable===!0||t.selected!==null)),h=B(()=>{const A=t.outline===!0&&t.color||t.textColor;return"q-chip row inline no-wrap items-center"+(t.outline===!1&&t.color!==void 0?` bg-${t.color}`:"")+(A?` text-${A} q-chip--colored`:"")+(t.disable===!0?" disabled":"")+(t.dense===!0?" q-chip--dense":"")+(t.outline===!0?" q-chip--outline":"")+(t.selected===!0?" q-chip--selected":"")+(u.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(t.square===!0?" q-chip--square":"")+(i.value===!0?" q-chip--dark q-dark":"")}),f=B(()=>{const A=t.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:t.tabindex||0},x={...A,role:"button","aria-hidden":"false","aria-label":t.removeAriaLabel||r.lang.label.remove};return{chip:A,remove:x}});function p(A){A.keyCode===13&&g(A)}function g(A){t.disable||(n("update:selected",!t.selected),n("click",A))}function w(A){(A.keyCode===void 0||A.keyCode===13)&&(Tn(A),t.disable===!1&&(n("update:modelValue",!1),n("remove")))}function C(){const A=[];u.value===!0&&A.push(Q("div",{class:"q-focus-helper"})),o.value===!0&&A.push(Q(_i,{class:"q-chip__icon q-chip__icon--left",name:a.value}));const x=t.label!==void 0?[Q("div",{class:"ellipsis"},[t.label])]:void 0;return A.push(Q("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},cw(e.default,x))),t.iconRight&&A.push(Q(_i,{class:"q-chip__icon q-chip__icon--right",name:t.iconRight})),t.removable===!0&&A.push(Q(_i,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:c.value,...f.value.remove,onClick:w,onKeyup:w})),A}return()=>{if(t.modelValue===!1)return;const A={class:h.value,style:s.value};return u.value===!0&&Object.assign(A,f.value.chip,{onClick:g,onKeyup:p}),nC("div",A,C(),"ripple",t.ripple!==!1&&t.disable!==!0,()=>[[mw,t.ripple]])}}}),BU=Xe({name:"QTooltip",inheritAttrs:!1,props:{...Ew,...Ld,...$d,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:Ml},self:{type:String,default:"top middle",validator:Ml},offset:{type:Array,default:()=>[14,14],validator:Nw},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...Vd],setup(t,{slots:e,emit:n,attrs:r}){let i,s;const o=Ye(),{proxy:{$q:a}}=o,c=Te(null),u=Te(!1),h=B(()=>Fl(t.anchor,a.lang.rtl)),f=B(()=>Fl(t.self,a.lang.rtl)),p=B(()=>t.persistent!==!0),{registerTick:g,removeTick:w}=Bd(),{registerTimeout:C}=jd(),{transitionProps:A,transitionStyle:x}=qd(t),{localScrollTarget:k,changeScrollEvent:O,unconfigureScrollTarget:D}=bw(t,Ze),{anchorEl:V,canShow:H,anchorEvents:b}=Tw({showing:u,configureAnchorEl:Be}),{show:y,hide:_}=Md({showing:u,canShow:H,handleShow:E,handleHide:G,hideOnRouteChange:p,processOnMount:!0});Object.assign(b,{delayShow:_e,delayHide:he});const{showPortal:R,hidePortal:T,renderPortal:S}=Ud(o,c,De,"tooltip");if(a.platform.is.mobile===!0){const de={anchorEl:V,innerRef:c,onClickOutside(ce){return _(ce),ce.target.classList.contains("q-dialog__backdrop")&&Tn(ce),!0}},vt=B(()=>t.modelValue===null&&t.persistent!==!0&&u.value===!0);Me(vt,ce=>{(ce===!0?Dw:Vl)(de)}),It(()=>{Vl(de)})}function E(de){R(),g(()=>{s=new MutationObserver(()=>se()),s.observe(c.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),se(),Ze()}),i===void 0&&(i=Me(()=>a.screen.width+"|"+a.screen.height+"|"+t.self+"|"+t.anchor+"|"+a.lang.rtl,se)),C(()=>{R(!0),n("show",de)},t.transitionDuration)}function G(de){w(),T(),oe(),C(()=>{T(!0),n("hide",de)},t.transitionDuration)}function oe(){s!==void 0&&(s.disconnect(),s=void 0),i!==void 0&&(i(),i=void 0),D(),Pl(b,"tooltipTemp")}function se(){const de=c.value;V.value===null||!de||Lw({el:de,offset:t.offset,anchorEl:V.value,anchorOrigin:h.value,selfOrigin:f.value,maxHeight:t.maxHeight,maxWidth:t.maxWidth})}function _e(de){if(a.platform.is.mobile===!0){Oh(),document.body.classList.add("non-selectable");const vt=V.value,ce=["touchmove","touchcancel","touchend","click"].map(Ae=>[vt,Ae,"delayHide","passiveCapture"]);Fo(b,"tooltipTemp",ce)}C(()=>{y(de)},t.delay)}function he(de){a.platform.is.mobile===!0&&(Pl(b,"tooltipTemp"),Oh(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),C(()=>{_(de)},t.hideDelay)}function Be(){if(t.noParentEvent===!0||V.value===null)return;const de=a.platform.is.mobile===!0?[[V.value,"touchstart","delayShow","passive"]]:[[V.value,"mouseenter","delayShow","passive"],[V.value,"mouseleave","delayHide","passive"]];Fo(b,"anchor",de)}function Ze(){if(V.value!==null||t.scrollTarget!==void 0){k.value=Hd(V.value,t.scrollTarget);const de=t.noParentEvent===!0?se:_;O(k.value,de)}}function st(){return u.value===!0?Q("div",{...r,ref:c,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",r.class],style:[r.style,x.value],role:"tooltip"},Dn(e.default)):null}function De(){return Q(Vo,A.value,st)}return It(oe),Object.assign(o.proxy,{updatePosition:se}),S}}),vF={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(self,()=>(()=>{var n={d:(f,p)=>{for(var g in p)n.o(p,g)&&!n.o(f,g)&&Object.defineProperty(f,g,{enumerable:!0,get:p[g]})},o:(f,p)=>Object.prototype.hasOwnProperty.call(f,p),r:f=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(f,"__esModule",{value:!0})}},r={};function i(){return document.createElement("canvas")}function s(f){for(var p=atob(f.split(",")[1]),g=f.split(",")[0].split(":")[1].split(";")[0],w=new ArrayBuffer(p.length),C=new Uint8Array(w),A=0;A<p.length;A++)C[A]=p.charCodeAt(A);return new Blob([w],{type:g})}function o(f,p){var g=p.width/p.height,w=Math.min(p.width,f.maxWidth,g*f.maxHeight);return f.maxSize>0&&f.maxSize<p.width*p.height/1e3&&(w=Math.min(w,Math.floor(1e3*f.maxSize/p.height))),f.scaleRatio&&(w=Math.min(w,Math.floor(f.scaleRatio*p.width))),f.debug&&(console.log("browser-image-resizer: original image size = "+p.width+" px (width) X "+p.height+" px (height)"),console.log("browser-image-resizer: scaled image size = "+w+" px (width) X "+Math.floor(w/g)+" px (height)")),w<=0&&(w=1,console.warn("browser-image-resizer: image size is too small")),w}function a(f,p){var g=document.createElement("canvas"),w=p.outputWidth/f.width;g.width=f.width*w,g.height=f.height*w;var C=f.getContext("2d").getImageData(0,0,f.width,f.height),A=g.getContext("2d").createImageData(g.width,g.height);return function(x,k,O){function D(vt,ce,Ae,F,Z,U){var re=1-Z,Re=1-U;return vt*re*Re+ce*Z*Re+Ae*re*U+F*Z*U}var V,H,b,y,_,R,T,S,E,G,oe,se,_e,he,Be,Ze,st,De,de;for(V=0;V<k.height;++V)for(b=V/O,y=Math.floor(b),_=Math.ceil(b)>x.height-1?x.height-1:Math.ceil(b),H=0;H<k.width;++H)R=H/O,T=Math.floor(R),S=Math.ceil(R)>x.width-1?x.width-1:Math.ceil(R),E=4*(H+k.width*V),G=4*(T+x.width*y),oe=4*(S+x.width*y),se=4*(T+x.width*_),_e=4*(S+x.width*_),he=R-T,Be=b-y,Ze=D(x.data[G],x.data[oe],x.data[se],x.data[_e],he,Be),k.data[E]=Ze,st=D(x.data[G+1],x.data[oe+1],x.data[se+1],x.data[_e+1],he,Be),k.data[E+1]=st,De=D(x.data[G+2],x.data[oe+2],x.data[se+2],x.data[_e+2],he,Be),k.data[E+2]=De,de=D(x.data[G+3],x.data[oe+3],x.data[se+3],x.data[_e+3],he,Be),k.data[E+3]=de}(C,A,w),g.getContext("2d").putImageData(A,0,0),g}function c(f){var p=document.createElement("canvas");return p.width=f.width/2,p.height=f.height/2,p.getContext("2d").drawImage(f,0,0,p.width,p.height),p}n.r(r),n.d(r,{readAndCompressImage:()=>h});var u={quality:.5,maxWidth:800,maxHeight:600,autoRotate:!0,debug:!1,mimeType:"image/jpeg"};function h(f,p){return new Promise(function(g,w){var C=document.createElement("img"),A=new FileReader,x=Object.assign({},u,p);A.onload=function(k){C.onerror=function(){w("cannot load image.")},C.onload=function(){var O={img:C,config:x};try{var D=function(){var V=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},H=V.img,b=V.config,y=(V.orientation,i());y.width=H.width,y.height=H.height;var _=y.getContext("2d");b.mimeType==="image/jpeg"&&(_.fillStyle="#ffffff",_.fillRect(0,0,y.width,y.height),_.save()),_.drawImage(H,0,0),_.restore();for(var R=o(b,y);y.width>=2*R;)y=c(y);y.width>R&&(y=a(y,Object.assign(b,{outputWidth:R})));var T=y.toDataURL(b.mimeType,b.quality);return typeof b.onScale=="function"&&b.onScale(T),s(T)}(O);g(D)}catch(V){w(V)}},C.src=k.target.result};try{A.onerror=function(){w("cannot read image file.")},A.readAsDataURL(f)}catch(k){w(k)}})}return r})())})(vF);var av=Xe({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(t,{slots:e}){const n=B(()=>`q-card__section q-card__section--${t.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>Q(t.tag,{class:n.value},Dn(e.default))}}),yF=Xe({name:"QCard",props:{...xs,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(t,{slots:e}){const{proxy:{$q:n}}=Ye(),r=Os(t,n),i=B(()=>"q-card"+(r.value===!0?" q-card--dark q-dark":"")+(t.bordered===!0?" q-card--bordered":"")+(t.square===!0?" q-card--square no-border-radius":"")+(t.flat===!0?" q-card--flat no-shadow":""));return()=>Q(t.tag,{class:i.value},Dn(e.default))}});function wF(t,e,n){let r;function i(){r!==void 0&&(bh.remove(r),r=void 0)}return It(()=>{t.value===!0&&i()}),{removeFromHistory:i,addToHistory(){r={condition:()=>n.value===!0,handler:e},bh.add(r)}}}let no=0,ah,lh,fo,ch=!1,lv,cv,uv,oi=null;function EF(t){TF(t)&&Tn(t)}function TF(t){if(t.target===document.body||t.target.classList.contains("q-layout__backdrop"))return!0;const e=bR(t),n=t.shiftKey&&!t.deltaX,r=!n&&Math.abs(t.deltaX)<=Math.abs(t.deltaY),i=n||r?t.deltaY:t.deltaX;for(let s=0;s<e.length;s++){const o=e[s];if(qC(o,r))return r?i<0&&o.scrollTop===0?!0:i>0&&o.scrollTop+o.clientHeight===o.scrollHeight:i<0&&o.scrollLeft===0?!0:i>0&&o.scrollLeft+o.clientWidth===o.scrollWidth}return!0}function hv(t){t.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function Ya(t){ch!==!0&&(ch=!0,requestAnimationFrame(()=>{ch=!1;const{height:e}=t.target,{clientHeight:n,scrollTop:r}=document.scrollingElement;(fo===void 0||e!==window.innerHeight)&&(fo=n-e,document.scrollingElement.scrollTop=r),r>fo&&(document.scrollingElement.scrollTop-=Math.ceil((r-fo)/8))}))}function dv(t){const e=document.body,n=window.visualViewport!==void 0;if(t==="add"){const{overflowY:r,overflowX:i}=window.getComputedStyle(e);ah=Cw(window),lh=Sw(window),lv=e.style.left,cv=e.style.top,uv=window.location.href,e.style.left=`-${ah}px`,e.style.top=`-${lh}px`,i!=="hidden"&&(i==="scroll"||e.scrollWidth>window.innerWidth)&&e.classList.add("q-body--force-scrollbar-x"),r!=="hidden"&&(r==="scroll"||e.scrollHeight>window.innerHeight)&&e.classList.add("q-body--force-scrollbar-y"),e.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,at.is.ios===!0&&(n===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",Ya,ut.passiveCapture),window.visualViewport.addEventListener("scroll",Ya,ut.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",hv,ut.passiveCapture))}at.is.desktop===!0&&at.is.mac===!0&&window[`${t}EventListener`]("wheel",EF,ut.notPassive),t==="remove"&&(at.is.ios===!0&&(n===!0?(window.visualViewport.removeEventListener("resize",Ya,ut.passiveCapture),window.visualViewport.removeEventListener("scroll",Ya,ut.passiveCapture)):window.removeEventListener("scroll",hv,ut.passiveCapture)),e.classList.remove("q-body--prevent-scroll"),e.classList.remove("q-body--force-scrollbar-x"),e.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,e.style.left=lv,e.style.top=cv,window.location.href===uv&&window.scrollTo(ah,lh),fo=void 0)}function bF(t){let e="add";if(t===!0){if(no++,oi!==null){clearTimeout(oi),oi=null;return}if(no>1)return}else{if(no===0||(no--,no>0))return;if(e="remove",at.is.ios===!0&&at.is.nativeMobile===!0){oi!==null&&clearTimeout(oi),oi=setTimeout(()=>{dv(e),oi=null},100);return}}dv(e)}function IF(){let t;return{preventBodyScroll(e){e!==t&&(t!==void 0||e===!0)&&(t=e,bF(e))}}}let Xa=0;const AF={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},fv={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var RF=Xe({name:"QDialog",inheritAttrs:!1,props:{...Ld,...$d,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:t=>t==="standard"||["top","bottom","left","right"].includes(t)}},emits:[...Vd,"shake","click","escapeKey"],setup(t,{slots:e,emit:n,attrs:r}){const i=Ye(),s=Te(null),o=Te(!1),a=Te(!1);let c=null,u=null,h,f;const p=B(()=>t.persistent!==!0&&t.noRouteDismiss!==!0&&t.seamless!==!0),{preventBodyScroll:g}=IF(),{registerTimeout:w}=jd(),{registerTick:C,removeTick:A}=Bd(),{transitionProps:x,transitionStyle:k}=qd(t,()=>fv[t.position][0],()=>fv[t.position][1]),{showPortal:O,hidePortal:D,portalIsAccessible:V,renderPortal:H}=Ud(i,s,vt,"dialog"),{hide:b}=Md({showing:o,hideOnRouteChange:p,handleShow:G,handleHide:oe,processOnMount:!0}),{addToHistory:y,removeFromHistory:_}=wF(o,b,p),R=B(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${t.maximized===!0?"maximized":"minimized"} q-dialog__inner--${t.position} ${AF[t.position]}`+(a.value===!0?" q-dialog__inner--animating":"")+(t.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(t.fullHeight===!0?" q-dialog__inner--fullheight":"")+(t.square===!0?" q-dialog__inner--square":"")),T=B(()=>o.value===!0&&t.seamless!==!0),S=B(()=>t.autoClose===!0?{onClick:st}:{}),E=B(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${T.value===!0?"modal":"seamless"}`,r.class]);Me(()=>t.maximized,ce=>{o.value===!0&&Ze(ce)}),Me(T,ce=>{g(ce),ce===!0?(Ow(de),kw(he)):(Dh(de),Dl(he))});function G(ce){y(),u=t.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,Ze(t.maximized),O(),a.value=!0,t.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),C(se)):A(),w(()=>{if(i.proxy.$q.platform.is.ios===!0){if(t.seamless!==!0&&document.activeElement){const{top:Ae,bottom:F}=document.activeElement.getBoundingClientRect(),{innerHeight:Z}=window,U=window.visualViewport!==void 0?window.visualViewport.height:Z;Ae>0&&F>U/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-U,F>=Z?1/0:Math.ceil(document.scrollingElement.scrollTop+F-U/2))),document.activeElement.scrollIntoView()}f=!0,s.value.click(),f=!1}O(!0),a.value=!1,n("show",ce)},t.transitionDuration)}function oe(ce){A(),_(),Be(!0),a.value=!0,D(),u!==null&&(((ce&&ce.type.indexOf("key")===0?u.closest('[tabindex]:not([tabindex^="-"])'):void 0)||u).focus(),u=null),w(()=>{D(!0),a.value=!1,n("hide",ce)},t.transitionDuration)}function se(ce){Aw(()=>{let Ae=s.value;Ae===null||Ae.contains(document.activeElement)===!0||(Ae=(ce!==""?Ae.querySelector(ce):null)||Ae.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||Ae.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||Ae.querySelector("[autofocus], [data-autofocus]")||Ae,Ae.focus({preventScroll:!0}))})}function _e(ce){ce&&typeof ce.focus=="function"?ce.focus({preventScroll:!0}):se(),n("shake");const Ae=s.value;Ae!==null&&(Ae.classList.remove("q-animate--scale"),Ae.classList.add("q-animate--scale"),c!==null&&clearTimeout(c),c=setTimeout(()=>{c=null,s.value!==null&&(Ae.classList.remove("q-animate--scale"),se())},170))}function he(){t.seamless!==!0&&(t.persistent===!0||t.noEscDismiss===!0?t.maximized!==!0&&t.noShake!==!0&&_e():(n("escapeKey"),b()))}function Be(ce){c!==null&&(clearTimeout(c),c=null),(ce===!0||o.value===!0)&&(Ze(!1),t.seamless!==!0&&(g(!1),Dh(de),Dl(he))),ce!==!0&&(u=null)}function Ze(ce){ce===!0?h!==!0&&(Xa<1&&document.body.classList.add("q-body--dialog"),Xa++,h=!0):h===!0&&(Xa<2&&document.body.classList.remove("q-body--dialog"),Xa--,h=!1)}function st(ce){f!==!0&&(b(ce),n("click",ce))}function De(ce){t.persistent!==!0&&t.noBackdropDismiss!==!0?b(ce):t.noShake!==!0&&_e()}function de(ce){t.allowFocusOutside!==!0&&V.value===!0&&pw(s.value,ce.target)!==!0&&se('[tabindex]:not([tabindex="-1"])')}Object.assign(i.proxy,{focus:se,shake:_e,__updateRefocusTarget(ce){u=ce||null}}),It(Be);function vt(){return Q("div",{role:"dialog","aria-modal":T.value===!0?"true":"false",...r,class:E.value},[Q(Vo,{name:"q-transition--fade",appear:!0},()=>T.value===!0?Q("div",{class:"q-dialog__backdrop fixed-full",style:k.value,"aria-hidden":"true",tabindex:-1,onClick:De}):null),Q(Vo,x.value,()=>o.value===!0?Q("div",{ref:s,class:R.value,style:k.value,tabindex:-1,...S.value},Dn(e.default)):null)])}return H}});const SF={__name:"AuthDialog",props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const n=e,r=Te("SignInForm"),i=a=>r.value=a,s={SignInForm:Au(()=>Le(()=>import("./SignInForm.65961f02.js"),["assets/SignInForm.65961f02.js","assets/QForm.c4906c4c.js","assets/error-message.d08c6aae.js"])),SignUpForm:Au(()=>Le(()=>import("./SignUpForm.4a35cb11.js"),["assets/SignUpForm.4a35cb11.js","assets/QForm.c4906c4c.js","assets/validate-rules.0c14b07e.js","assets/error-message.d08c6aae.js"])),FindPasswordForm:Au(()=>Le(()=>import("./FindPasswordForm.30d83415.js"),["assets/FindPasswordForm.30d83415.js","assets/QForm.c4906c4c.js"]))},o=()=>{n("update:modelValue",!1)};return(a,c)=>(un(),hn(RF,{"model-value":t.modelValue,"onUpdate:modelValue":c[0]||(c[0]=u=>a.$emit("update:modelValue",u)),"transition-show":"none","transition-hide":"none",onHide:c[1]||(c[1]=u=>i("SignInForm"))},{default:nt(()=>[Ie(yF,{style:{width:"400px"}},{default:nt(()=>[Ie(av,{class:"flex justify-end"},{default:nt(()=>[as(Ie(ui,{icon:"close",flat:"",round:"",dense:""},null,512),[[ol]])]),_:1}),Ie(av,{class:"q-px-xl q-pb-xl"},{default:nt(()=>[(un(),hn(zI(s[r.value]),{onChangeView:i,onCloseDialog:o},null,32))]),_:1})]),_:1})]),_:1},8,["model-value"]))}};function CF(){return zt(Hy)}const PF=["src"],kF={__name:"default",setup(t){const e=Uw(),n=eC(),r=CF(),i=B(()=>{var u;return{maxWidth:((u=n.meta)==null?void 0:u.width)||"1080px",margin:"0 auto"}}),s=Te(!1),o=()=>s.value=!0,a=async()=>{await mF(),r.notify("\uB85C\uADF8\uC544\uC6C3 \uB418\uC5C8\uC2B5\uB2C8\uB2E4.")},c=async()=>{gF(),r.notify("\uC774\uBA54\uC77C\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694")};return(u,h)=>{const f=ay("router-view");return un(),hn(tP,{view:"lHh Lpr lff",class:"bg-grey-2"},{default:nt(()=>[Ie(YC,{bordered:"",class:"bg-white text-grey-9"},{default:nt(()=>[Ie(QC,null,{default:nt(()=>[Ie(ui,{flat:"",dense:"",to:"/"},{default:nt(()=>[Ie(uC,null,{default:nt(()=>[Ie(kh,null,{default:nt(()=>h[1]||(h[1]=[Al("img",{src:"/logo.png"},null,-1)])),_:1}),h[2]||(h[2]=so(" JM \uC6F9 \uC0AC\uC774\uD2B8 "))]),_:1})]),_:1}),Ie(PC),Ie(ui,{stretch:"",flat:"",label:"Home",to:"/"}),Ie(ui,{stretch:"",flat:"",label:"\uCDE8\uBBF8",to:"/hobby"}),Ie(xC,{vertical:"",class:"q-my-md q-mr-md"}),qt(e).isAuthenticated?fm("",!0):(un(),hn(ui,{key:0,unelevated:"",rounded:"",color:"primary",label:"\uB85C\uADF8\uC778 / \uD68C\uC6D0\uAC00\uC785",onClick:o})),qt(e).isAuthenticated?(un(),hn(ui,{key:1,round:"",flat:""},{default:nt(()=>[Ie(kh,null,{default:nt(()=>[Al("img",{src:qt(e).user.photoURL||qt(c0)(qt(e).user.uid)},null,8,PF)]),_:1}),Ie(GC,null,{default:nt(()=>[Ie(OC,{style:{"min-width":"140px"}},{default:nt(()=>[qt(e).user.emailVerified?as((un(),hn(Bu,{key:0,clickable:"",to:"/mypage/profile"},{default:nt(()=>[Ie(qu,null,{default:nt(()=>h[3]||(h[3]=[so("\uD504\uB85C\uD544")])),_:1})]),_:1})),[[ol]]):as((un(),hn(Bu,{key:1,clickable:"",to:"/mypage/profile"},{default:nt(()=>[Ie(qu,{class:"text-red",onClick:c},{default:nt(()=>h[4]||(h[4]=[so("\uC774\uBA54\uC77C\uC744 \uC778\uC99D\uD574\uC8FC\uC138\uC694.")])),_:1})]),_:1})),[[ol]]),as((un(),hn(Bu,{clickable:"",onClick:a},{default:nt(()=>[Ie(qu,null,{default:nt(()=>h[5]||(h[5]=[so("\uB85C\uADF8\uC544\uC6C3")])),_:1})]),_:1})),[[ol]])]),_:1})]),_:1})]),_:1})):fm("",!0)]),_:1})]),_:1}),Ie(XC,{style:ea(i.value)},{default:nt(()=>[Ie(f)]),_:1},8,["style"]),Ie(SF,{modelValue:s.value,"onUpdate:modelValue":h[0]||(h[0]=p=>s.value=p)},null,8,["modelValue"])]),_:1})}}},xF={admin:()=>Le(()=>import("./admin.3fd0075b.js"),["assets/admin.3fd0075b.js","assets/plugin-vue_export-helper.21dcd24c.js"]),default:kF,MainLayout:()=>Le(()=>import("./MainLayout.2142af41.js"),["assets/MainLayout.2142af41.js","assets/QItemLabel.00abfbc3.js","assets/plugin-vue_export-helper.21dcd24c.js"])};function OF(t){return t.map(e=>{var n;return{path:e.path,meta:e.meta,component:xF[((n=e.meta)==null?void 0:n.layout)||"default"],children:e.path==="/"?[e]:[{...e,path:""}]}})}function jU(t){return t.charAt(0).toUpperCase()+t.slice(1)}function DF(t,e,n){return n<=e?e:Math.min(n,Math.max(e,t))}function HU(t,e,n){if(n<=e)return e;const r=n-e+1;let i=e+(t-e)%r;return i<e&&(i=r+i),i===0?0:i}function zU(t,e=2,n="0"){if(t==null)return t;const r=""+t;return r.length>=e?r:new Array(e-r.length+1).join(n)+r}const tp=XMLHttpRequest,u0=tp.prototype.open,NF=["top","right","bottom","left"];let oc=[],Po=0;function LF({p:t,pos:e,active:n,horiz:r,reverse:i,dir:s}){let o=1,a=1;return r===!0?(i===!0&&(o=-1),e==="bottom"&&(a=-1),{transform:`translate3d(${o*(t-100)}%,${n?0:a*-200}%,0)`}):(i===!0&&(a=-1),e==="right"&&(o=-1),{transform:`translate3d(${n?0:s*o*-200}%,${a*(t-100)}%,0)`})}function VF(t,e){return typeof e!="number"&&(t<25?e=Math.random()*3+3:t<65?e=Math.random()*3:t<85?e=Math.random()*2:t<99?e=.6:e=0),DF(t+e,0,100)}function MF(t){Po++,oc.push(t),!(Po>1)&&(tp.prototype.open=function(e,n){const r=[],i=()=>{oc.forEach(o=>{(o.hijackFilter.value===null||o.hijackFilter.value(n)===!0)&&(o.start(),r.push(o.stop))})},s=()=>{r.forEach(o=>{o()})};this.addEventListener("loadstart",i,{once:!0}),this.addEventListener("loadend",s,{once:!0}),u0.apply(this,arguments)})}function FF(t){oc=oc.filter(e=>e.start!==t),Po=Math.max(0,Po-1),Po===0&&(tp.prototype.open=u0)}var UF=Xe({name:"QAjaxBar",props:{position:{type:String,default:"top",validator:t=>NF.includes(t)},size:{type:String,default:"2px"},color:String,skipHijack:Boolean,reverse:Boolean,hijackFilter:Function},emits:["start","stop"],setup(t,{emit:e}){const{proxy:n}=Ye(),r=Te(0),i=Te(!1),s=Te(!0);let o=0,a=null,c;const u=B(()=>`q-loading-bar q-loading-bar--${t.position}`+(t.color!==void 0?` bg-${t.color}`:"")+(s.value===!0?"":" no-transition")),h=B(()=>t.position==="top"||t.position==="bottom"),f=B(()=>h.value===!0?"height":"width"),p=B(()=>{const O=i.value,D=LF({p:r.value,pos:t.position,active:O,horiz:h.value,reverse:n.$q.lang.rtl===!0&&["top","bottom"].includes(t.position)?t.reverse===!1:t.reverse,dir:n.$q.lang.rtl===!0?-1:1});return D[f.value]=t.size,D.opacity=O?1:0,D}),g=B(()=>i.value===!0?{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":r.value}:{"aria-hidden":"true"});function w(O=300){const D=c;return c=Math.max(0,O)||0,o++,o>1?(D===0&&O>0?x():a!==null&&D>0&&O<=0&&(clearTimeout(a),a=null),o):(a!==null&&clearTimeout(a),e("start"),r.value=0,a=setTimeout(()=>{a=null,s.value=!0,O>0&&x()},i.value===!0?500:1),i.value!==!0&&(i.value=!0,s.value=!1),o)}function C(O){return o>0&&(r.value=VF(r.value,O)),o}function A(){if(o=Math.max(0,o-1),o>0)return o;a!==null&&(clearTimeout(a),a=null),e("stop");const O=()=>{s.value=!0,r.value=100,a=setTimeout(()=>{a=null,i.value=!1},1e3)};return r.value===0?a=setTimeout(O,1):O(),o}function x(){r.value<100&&(a=setTimeout(()=>{a=null,C(),x()},c))}let k;return zn(()=>{t.skipHijack!==!0&&(k=!0,MF({start:w,stop:A,hijackFilter:B(()=>t.hijackFilter||null)}))}),It(()=>{a!==null&&clearTimeout(a),k===!0&&FF(w)}),Object.assign(n,{start:w,stop:A,increment:C}),()=>Q("div",{class:u.value,style:p.value,...g.value})}});const Za=Te(null),Xo=sa({isActive:!1},{start:In,stop:In,increment:In,setDefaults:In,install({$q:t,parentApp:e}){if(t.loadingBar=this,this.__installed===!0){t.config.loadingBar!==void 0&&this.setDefaults(t.config.loadingBar);return}const n=Te(t.config.loadingBar!==void 0?{...t.config.loadingBar}:{});function r(){Xo.isActive=!0}function i(){Xo.isActive=!1}const s=Fd("q-loading-bar");Wy({name:"LoadingBar",devtools:{hide:!0},setup:()=>()=>Q(UF,{...n.value,onStart:r,onStop:i,ref:Za})},e).mount(s),Object.assign(this,{start(o){Za.value.start(o)},stop(){Za.value.stop()},increment(){Za.value.increment.apply(null,arguments)},setDefaults(o){ys(o)===!0&&Object.assign(n.value,o)}})}});var uh=function(){const e=tC({scrollBehavior:()=>({left:0,top:0}),history:pS("/"),extendRoutes:n=>OF(n.map(r=>(r.path.includes("admin")&&(r={...r,meta:{...r.meta,layout:"admin"}}),r)))});return e.beforeEach(()=>{Xo.start()}),e.afterEach(()=>{Xo.stop()}),e};async function $F(t,e){const n=t(BR);n.use(qR,e);const r=typeof Lu=="function"?await Lu({}):Lu;n.use(r);const i=Di(typeof uh=="function"?await uh({store:r}):uh);return r.use(({store:s})=>{s.router=i}),{app:n,store:r,router:i}}let qF=0;const _l={},vl={},En={},h0={},BF=/^\s*$/,d0=[],np=["top-left","top-right","bottom-left","bottom-right","top","bottom","left","right","center"],jF=["top-left","top-right","bottom-left","bottom-right"],ts={positive:{icon:t=>t.iconSet.type.positive,color:"positive"},negative:{icon:t=>t.iconSet.type.negative,color:"negative"},warning:{icon:t=>t.iconSet.type.warning,color:"warning",textColor:"dark"},info:{icon:t=>t.iconSet.type.info,color:"info"},ongoing:{group:!1,timeout:0,spinner:!0,color:"grey-8"}};function f0(t,e,n){if(!t)return ro("parameter required");let r;const i={textColor:"white"};if(t.ignoreDefaults!==!0&&Object.assign(i,_l),ys(t)===!1&&(i.type&&Object.assign(i,ts[i.type]),t={message:t}),Object.assign(i,ts[t.type||i.type],t),typeof i.icon=="function"&&(i.icon=i.icon(e)),i.spinner?(i.spinner===!0&&(i.spinner=fw),i.spinner=Di(i.spinner)):i.spinner=!1,i.meta={hasMedia:Boolean(i.spinner!==!1||i.icon||i.avatar),hasText:pv(i.message)||pv(i.caption)},i.position){if(np.includes(i.position)===!1)return ro("wrong position",t)}else i.position="bottom";if(i.timeout===void 0)i.timeout=5e3;else{const c=parseInt(i.timeout,10);if(isNaN(c)||c<0)return ro("wrong timeout",t);i.timeout=c}i.timeout===0?i.progress=!1:i.progress===!0&&(i.meta.progressClass="q-notification__progress"+(i.progressClass?` ${i.progressClass}`:""),i.meta.progressStyle={animationDuration:`${i.timeout+1e3}ms`});const s=(Array.isArray(t.actions)===!0?t.actions:[]).concat(t.ignoreDefaults!==!0&&Array.isArray(_l.actions)===!0?_l.actions:[]).concat(ts[t.type]!==void 0&&Array.isArray(ts[t.type].actions)===!0?ts[t.type].actions:[]),{closeBtn:o}=i;if(o&&s.push({label:typeof o=="string"?o:e.lang.label.close}),i.actions=s.map(({handler:c,noDismiss:u,...h})=>({flat:!0,...h,onClick:typeof c=="function"?()=>{c(),u!==!0&&a()}:()=>{a()}})),i.multiLine===void 0&&(i.multiLine=i.actions.length>1),Object.assign(i.meta,{class:`q-notification row items-stretch q-notification--${i.multiLine===!0?"multi-line":"standard"}`+(i.color!==void 0?` bg-${i.color}`:"")+(i.textColor!==void 0?` text-${i.textColor}`:"")+(i.classes!==void 0?` ${i.classes}`:""),wrapperClass:"q-notification__wrapper col relative-position border-radius-inherit "+(i.multiLine===!0?"column no-wrap justify-center":"row items-center"),contentClass:"q-notification__content row items-center"+(i.multiLine===!0?"":" col"),leftClass:i.meta.hasText===!0?"additional":"single",attrs:{role:"alert",...i.attrs}}),i.group===!1?(i.group=void 0,i.meta.group=void 0):((i.group===void 0||i.group===!0)&&(i.group=[i.message,i.caption,i.multiline].concat(i.actions.map(c=>`${c.label}*${c.icon}`)).join("|")),i.meta.group=i.group+"|"+i.position),i.actions.length===0?i.actions=void 0:i.meta.actionsClass="q-notification__actions row items-center "+(i.multiLine===!0?"justify-end":"col-auto")+(i.meta.hasMedia===!0?" q-notification__actions--with-media":""),n!==void 0){n.notif.meta.timer&&(clearTimeout(n.notif.meta.timer),n.notif.meta.timer=void 0),i.meta.uid=n.notif.meta.uid;const c=En[i.position].value.indexOf(n.notif);En[i.position].value[c]=i}else{const c=vl[i.meta.group];if(c===void 0){if(i.meta.uid=qF++,i.meta.badge=1,["left","right","center"].indexOf(i.position)!==-1)En[i.position].value.splice(Math.floor(En[i.position].value.length/2),0,i);else{const u=i.position.indexOf("top")>-1?"unshift":"push";En[i.position].value[u](i)}i.group!==void 0&&(vl[i.meta.group]=i)}else{if(c.meta.timer&&(clearTimeout(c.meta.timer),c.meta.timer=void 0),i.badgePosition!==void 0){if(jF.includes(i.badgePosition)===!1)return ro("wrong badgePosition",t)}else i.badgePosition=`top-${i.position.indexOf("left")>-1?"right":"left"}`;i.meta.uid=c.meta.uid,i.meta.badge=c.meta.badge+1,i.meta.badgeClass=`q-notification__badge q-notification__badge--${i.badgePosition}`+(i.badgeColor!==void 0?` bg-${i.badgeColor}`:"")+(i.badgeTextColor!==void 0?` text-${i.badgeTextColor}`:"")+(i.badgeClass?` ${i.badgeClass}`:"");const u=En[i.position].value.indexOf(c);En[i.position].value[u]=vl[i.meta.group]=i}}const a=()=>{HF(i),r=void 0};if(i.timeout>0&&(i.meta.timer=setTimeout(()=>{i.meta.timer=void 0,a()},i.timeout+1e3)),i.group!==void 0)return c=>{c!==void 0?ro("trying to update a grouped one which is forbidden",t):a()};if(r={dismiss:a,config:t,notif:i},n!==void 0){Object.assign(n,r);return}return c=>{if(r!==void 0)if(c===void 0)r.dismiss();else{const u=Object.assign({},r.config,c,{group:!1,position:i.position});f0(u,e,r)}}}function HF(t){t.meta.timer&&(clearTimeout(t.meta.timer),t.meta.timer=void 0);const e=En[t.position].value.indexOf(t);if(e!==-1){t.group!==void 0&&delete vl[t.meta.group];const n=d0[""+t.meta.uid];if(n){const{width:r,height:i}=getComputedStyle(n);n.style.left=`${n.offsetLeft}px`,n.style.width=r,n.style.height=i}En[t.position].value.splice(e,1),typeof t.onDismiss=="function"&&t.onDismiss()}}function pv(t){return t!=null&&BF.test(t)!==!0}function ro(t,e){return console.error(`Notify: ${t}`,e),!1}function zF(){return Xe({name:"QNotifications",devtools:{hide:!0},setup(){return()=>Q("div",{class:"q-notifications"},np.map(t=>Q(oR,{key:t,class:h0[t],tag:"div",name:`q-notification--${t}`},()=>En[t].value.map(e=>{const n=e.meta,r=[];if(n.hasMedia===!0&&(e.spinner!==!1?r.push(Q(e.spinner,{class:"q-notification__spinner q-notification__spinner--"+n.leftClass,color:e.spinnerColor,size:e.spinnerSize})):e.icon?r.push(Q(_i,{class:"q-notification__icon q-notification__icon--"+n.leftClass,name:e.icon,color:e.iconColor,size:e.iconSize,role:"img"})):e.avatar&&r.push(Q(kh,{class:"q-notification__avatar q-notification__avatar--"+n.leftClass},()=>Q("img",{src:e.avatar,"aria-hidden":"true"})))),n.hasText===!0){let s;const o={class:"q-notification__message col"};if(e.html===!0)o.innerHTML=e.caption?`<div>${e.message}</div><div class="q-notification__caption">${e.caption}</div>`:e.message;else{const a=[e.message];s=e.caption?[Q("div",a),Q("div",{class:"q-notification__caption"},[e.caption])]:a}r.push(Q("div",o,s))}const i=[Q("div",{class:n.contentClass},r)];return e.progress===!0&&i.push(Q("div",{key:`${n.uid}|p|${n.badge}`,class:n.progressClass,style:n.progressStyle})),e.actions!==void 0&&i.push(Q("div",{class:n.actionsClass},e.actions.map(s=>Q(ui,s)))),n.badge>1&&i.push(Q("div",{key:`${n.uid}|${n.badge}`,class:e.meta.badgeClass,style:e.badgeStyle},[n.badge])),Q("div",{ref:s=>{d0[""+n.uid]=s},key:n.uid,class:n.class,...n.attrs},[Q("div",{class:n.wrapperClass},i)])}))))}})}var WF={setDefaults(t){ys(t)===!0&&Object.assign(_l,t)},registerType(t,e){ys(e)===!0&&(ts[t]=e)},install({$q:t,parentApp:e}){if(t.notify=this.create=n=>f0(n,t),t.notify.setDefaults=this.setDefaults,t.notify.registerType=this.registerType,t.config.notify!==void 0&&this.setDefaults(t.config.notify),this.__installed!==!0){np.forEach(r=>{En[r]=Te([]);const i=["left","center","right"].includes(r)===!0?"center":r.indexOf("top")>-1?"top":"bottom",s=r.indexOf("left")>-1?"start":r.indexOf("right")>-1?"end":"center",o=["left","right"].includes(r)?`items-${r==="left"?"start":"end"} justify-center`:r==="center"?"flex-center":`items-${s}`;h0[r]=`q-notifications__list q-notifications__list--${i} fixed column no-wrap ${o}`});const n=Fd("q-notify");Wy(zF(),e).mount(n)}}},KF={config:{notify:{position:"top"},loadingBar:{color:"primary"}},plugins:{Notify:WF,LoadingBar:Xo}};const GF="/";async function QF({app:t,router:e,store:n},r){let i=!1;const s=c=>{try{return e.resolve(c).href}catch{}return Object(c)===c?null:c},o=c=>{if(i=!0,typeof c=="string"&&/^https?:\/\//.test(c)){window.location.href=c;return}const u=s(c);u!==null&&(window.location.href=u)},a=window.location.href.replace(window.location.origin,"");for(let c=0;i===!1&&c<r.length;c++)try{await r[c]({app:t,router:e,store:n,ssrContext:null,redirect:o,urlPath:a,publicPath:GF})}catch(u){if(u&&u.url){o(u.url);return}console.error("[Quasar] boot error:",u);return}i!==!0&&(t.use(e),t.mount("#q-app"))}$F(My,KF).then(t=>{const[e,n]=Promise.allSettled!==void 0?["allSettled",r=>r.map(i=>{if(i.status==="rejected"){console.error("[Quasar] boot error:",i.reason);return}return i.value.default})]:["all",r=>r.map(i=>i.default)];return Promise[e]([Le(()=>Promise.resolve().then(function(){return fF}),void 0),Le(()=>import("./error-handler.5cdc029d.js"),["assets/error-handler.5cdc029d.js","assets/error-message.d08c6aae.js"]),Le(()=>import("./navigation-guards.25a58b1e.js"),[]),Le(()=>import("./algoliasearch.474339dc.js"),[]),Le(()=>import("./pokemon-tcg.eb5aa34e.js"),["assets/pokemon-tcg.eb5aa34e.js","assets/index.215aef8b.js"])]).then(r=>{const i=n(r).filter(s=>typeof s=="function");QF(t,i)})});export{on as $,In as A,sU as B,Fo as C,oU as D,Mo as E,Gt as F,$y as G,Uy as H,Pl as I,Tn as J,Oh as K,Xe as L,Ld as M,WF as N,xs as O,Vd as P,Os as Q,jd as R,zt as S,us as T,Od as U,Te as V,B as W,Md as X,wF as Y,Me as Z,zn as _,so as a,sy as a$,It as a0,as as a1,nC as a2,Dn as a3,DF as a4,Ye as a5,IF as a6,mc as a7,qu as a8,_i as a9,rs as aA,Nu as aB,Bd as aC,cs as aD,Ad as aE,FI as aF,Lh as aG,PC as aH,yF as aI,Bv as aJ,gU as aK,kh as aL,av as aM,iU as aN,ol as aO,xC as aP,RF as aQ,Qe as aR,MR as aS,DU as aT,xU as aU,OU as aV,vF as aW,hF as aX,IR as aY,$I as aZ,qI as a_,Bu as aa,tP as ab,QC as ac,ui as ad,uC as ae,YC as af,OC as ag,XC as ah,bn as ai,Hu as aj,pU as ak,ns as al,Vh as am,nP as an,oP as ao,oa as ap,mU as aq,pP as ar,iP as as,qt as at,eC as au,dU as av,lU as aw,mw as ax,Ii as ay,xR as az,uU as b,HU as b0,qU as b1,GC as b2,CF as b3,IU as b4,Pf as b5,ep as b6,wU as b7,EU as b8,bU as b9,FU as bA,UU as bB,$U as bC,wn as bD,zU as bE,cU as bF,Mm as bG,jU as bH,VU as bI,NU as bJ,LU as bK,MU as bL,TU as ba,yU as bb,vU as bc,AU as bd,bb as be,PU as bf,CU as bg,SU as bh,kU as bi,RU as bj,aU as bk,Ec as bl,Aw as bm,or as bn,fU as bo,fw as bp,Vo as bq,vw as br,pc as bs,BU as bt,gC as bu,_C as bv,eU as bw,Di as bx,TI as by,ea as bz,Al as c,tU as d,fm as e,YF as f,ay as g,Q as h,hn as i,Ie as j,nU as k,JF as l,IA as m,hc as n,un as o,XF as p,nt as q,ZF as r,hU as s,X0 as t,Uw as u,LA as v,rU as w,AA as x,aw as y,at as z};
