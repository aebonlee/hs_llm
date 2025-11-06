const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SyllabusGenerator-BwY-s5tP.js","./ui-vendor-rcE90lUk.js","./react-vendor-oaxG2rvL.js","./PageTitle-BS5QI4b5.js","./action-button-CgjjQ8rI.js","./textarea-MDdIAiCI.js","./sparkles-CvxrqN2C.js","./pdf-vendor-h9Wj2YyB.js","./RubricBuilder-CYMpQx97.js","./trash-2-xS4t9hY4.js","./AssignmentGenerator-D1c2HD_2.js","./FeedbackGenerator-C7O29UGr.js","./alert-circle-qZHH7QFG.js","./UserGuide-IgU1mXu7.js","./Settings-6tkzoY07.js"])))=>i.map(i=>d[i]);
var It=Object.defineProperty;var Mt=(o,e,r)=>e in o?It(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r;var z=(o,e,r)=>Mt(o,typeof e!="symbol"?e+"":e,r);import{c as _t,a as zt,u as He,j as a,B as Ot,P as Z,b as Lt,d as Ft,e as W,f as me,V as Ke,R as Dt,g as Wt,h as Ht,i as Kt}from"./ui-vendor-rcE90lUk.js";import{a as Ue,r as f,u as Ut,L as U,g as Vt,R as Ve,H as Gt,d as Bt,e as q}from"./react-vendor-oaxG2rvL.js";import{E as le,_ as Q}from"./pdf-vendor-h9Wj2YyB.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();var ye={},Re=Ue;ye.createRoot=Re.createRoot,ye.hydrateRoot=Re.hydrateRoot;var Ce="ToastProvider",[Te,qt,Jt]=zt("Toast"),[Ge]=_t("Toast",[Jt]),[Xt,pe]=Ge(Ce),Be=o=>{const{__scopeToast:e,label:r="Notification",duration:t=5e3,swipeDirection:s="right",swipeThreshold:n=50,children:i}=o,[l,u]=f.useState(null),[c,h]=f.useState(0),g=f.useRef(!1),v=f.useRef(!1);return r.trim()||console.error(`Invalid prop \`label\` supplied to \`${Ce}\`. Expected non-empty \`string\`.`),a.jsx(Te.Provider,{scope:e,children:a.jsx(Xt,{scope:e,label:r,duration:t,swipeDirection:s,swipeThreshold:n,toastCount:c,viewport:l,onViewportChange:u,onToastAdd:f.useCallback(()=>h(y=>y+1),[]),onToastRemove:f.useCallback(()=>h(y=>y-1),[]),isFocusedToastEscapeKeyDownRef:g,isClosePausedRef:v,children:i})})};Be.displayName=Ce;var qe="ToastViewport",Yt=["F8"],we="toast.viewportPause",ke="toast.viewportResume",Je=f.forwardRef((o,e)=>{const{__scopeToast:r,hotkey:t=Yt,label:s="Notifications ({hotkey})",...n}=o,i=pe(qe,r),l=qt(r),u=f.useRef(null),c=f.useRef(null),h=f.useRef(null),g=f.useRef(null),v=He(e,g,i.onViewportChange),y=t.join("+").replace(/Key/g,"").replace(/Digit/g,""),x=i.toastCount>0;f.useEffect(()=>{const d=b=>{var j;t.length!==0&&t.every(E=>b[E]||b.code===E)&&((j=g.current)==null||j.focus())};return document.addEventListener("keydown",d),()=>document.removeEventListener("keydown",d)},[t]),f.useEffect(()=>{const d=u.current,b=g.current;if(x&&d&&b){const p=()=>{if(!i.isClosePausedRef.current){const R=new CustomEvent(we);b.dispatchEvent(R),i.isClosePausedRef.current=!0}},j=()=>{if(i.isClosePausedRef.current){const R=new CustomEvent(ke);b.dispatchEvent(R),i.isClosePausedRef.current=!1}},E=R=>{!d.contains(R.relatedTarget)&&j()},$=()=>{d.contains(document.activeElement)||j()};return d.addEventListener("focusin",p),d.addEventListener("focusout",E),d.addEventListener("pointermove",p),d.addEventListener("pointerleave",$),window.addEventListener("blur",p),window.addEventListener("focus",j),()=>{d.removeEventListener("focusin",p),d.removeEventListener("focusout",E),d.removeEventListener("pointermove",p),d.removeEventListener("pointerleave",$),window.removeEventListener("blur",p),window.removeEventListener("focus",j)}}},[x,i.isClosePausedRef]);const m=f.useCallback(({tabbingDirection:d})=>{const p=l().map(j=>{const E=j.ref.current,$=[E,...dr(E)];return d==="forwards"?$:$.reverse()});return(d==="forwards"?p.reverse():p).flat()},[l]);return f.useEffect(()=>{const d=g.current;if(d){const b=p=>{var $,R,M;const j=p.altKey||p.ctrlKey||p.metaKey;if(p.key==="Tab"&&!j){const F=document.activeElement,_=p.shiftKey;if(p.target===d&&_){($=c.current)==null||$.focus();return}const S=m({tabbingDirection:_?"backwards":"forwards"}),O=S.findIndex(w=>w===F);be(S.slice(O+1))?p.preventDefault():_?(R=c.current)==null||R.focus():(M=h.current)==null||M.focus()}};return d.addEventListener("keydown",b),()=>d.removeEventListener("keydown",b)}},[l,m]),a.jsxs(Ot,{ref:u,role:"region","aria-label":s.replace("{hotkey}",y),tabIndex:-1,style:{pointerEvents:x?void 0:"none"},children:[x&&a.jsx(je,{ref:c,onFocusFromOutsideViewport:()=>{const d=m({tabbingDirection:"forwards"});be(d)}}),a.jsx(Te.Slot,{scope:r,children:a.jsx(Z.ol,{tabIndex:-1,...n,ref:v})}),x&&a.jsx(je,{ref:h,onFocusFromOutsideViewport:()=>{const d=m({tabbingDirection:"backwards"});be(d)}})]})});Je.displayName=qe;var Xe="ToastFocusProxy",je=f.forwardRef((o,e)=>{const{__scopeToast:r,onFocusFromOutsideViewport:t,...s}=o,n=pe(Xe,r);return a.jsx(Ke,{tabIndex:0,...s,ref:e,style:{position:"fixed"},onFocus:i=>{var c;const l=i.relatedTarget;!((c=n.viewport)!=null&&c.contains(l))&&t()}})});je.displayName=Xe;var ne="Toast",Zt="toast.swipeStart",Qt="toast.swipeMove",er="toast.swipeCancel",tr="toast.swipeEnd",Ye=f.forwardRef((o,e)=>{const{forceMount:r,open:t,defaultOpen:s,onOpenChange:n,...i}=o,[l,u]=Lt({prop:t,defaultProp:s??!0,onChange:n,caller:ne});return a.jsx(Ft,{present:r||l,children:a.jsx(sr,{open:l,...i,ref:e,onClose:()=>u(!1),onPause:me(o.onPause),onResume:me(o.onResume),onSwipeStart:W(o.onSwipeStart,c=>{c.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:W(o.onSwipeMove,c=>{const{x:h,y:g}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","move"),c.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${h}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${g}px`)}),onSwipeCancel:W(o.onSwipeCancel,c=>{c.currentTarget.setAttribute("data-swipe","cancel"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:W(o.onSwipeEnd,c=>{const{x:h,y:g}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","end"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${h}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${g}px`),u(!1)})})})});Ye.displayName=ne;var[rr,or]=Ge(ne,{onClose(){}}),sr=f.forwardRef((o,e)=>{const{__scopeToast:r,type:t="foreground",duration:s,open:n,onClose:i,onEscapeKeyDown:l,onPause:u,onResume:c,onSwipeStart:h,onSwipeMove:g,onSwipeCancel:v,onSwipeEnd:y,...x}=o,m=pe(ne,r),[d,b]=f.useState(null),p=He(e,w=>b(w)),j=f.useRef(null),E=f.useRef(null),$=s||m.duration,R=f.useRef(0),M=f.useRef($),F=f.useRef(0),{onToastAdd:_,onToastRemove:T}=m,C=me(()=>{var P;(d==null?void 0:d.contains(document.activeElement))&&((P=m.viewport)==null||P.focus()),i()}),S=f.useCallback(w=>{!w||w===1/0||(window.clearTimeout(F.current),R.current=new Date().getTime(),F.current=window.setTimeout(C,w))},[C]);f.useEffect(()=>{const w=m.viewport;if(w){const P=()=>{S(M.current),c==null||c()},I=()=>{const V=new Date().getTime()-R.current;M.current=M.current-V,window.clearTimeout(F.current),u==null||u()};return w.addEventListener(we,I),w.addEventListener(ke,P),()=>{w.removeEventListener(we,I),w.removeEventListener(ke,P)}}},[m.viewport,$,u,c,S]),f.useEffect(()=>{n&&!m.isClosePausedRef.current&&S($)},[n,$,m.isClosePausedRef,S]),f.useEffect(()=>(_(),()=>T()),[_,T]);const O=f.useMemo(()=>d?st(d):null,[d]);return m.viewport?a.jsxs(a.Fragment,{children:[O&&a.jsx(nr,{__scopeToast:r,role:"status","aria-live":t==="foreground"?"assertive":"polite",children:O}),a.jsx(rr,{scope:r,onClose:C,children:Ue.createPortal(a.jsx(Te.ItemSlot,{scope:r,children:a.jsx(Dt,{asChild:!0,onEscapeKeyDown:W(l,()=>{m.isFocusedToastEscapeKeyDownRef.current||C(),m.isFocusedToastEscapeKeyDownRef.current=!1}),children:a.jsx(Z.li,{tabIndex:0,"data-state":n?"open":"closed","data-swipe-direction":m.swipeDirection,...x,ref:p,style:{userSelect:"none",touchAction:"none",...o.style},onKeyDown:W(o.onKeyDown,w=>{w.key==="Escape"&&(l==null||l(w.nativeEvent),w.nativeEvent.defaultPrevented||(m.isFocusedToastEscapeKeyDownRef.current=!0,C()))}),onPointerDown:W(o.onPointerDown,w=>{w.button===0&&(j.current={x:w.clientX,y:w.clientY})}),onPointerMove:W(o.onPointerMove,w=>{if(!j.current)return;const P=w.clientX-j.current.x,I=w.clientY-j.current.y,V=!!E.current,H=["left","right"].includes(m.swipeDirection),D=["left","up"].includes(m.swipeDirection)?Math.min:Math.max,ae=H?D(0,P):0,L=H?0:D(0,I),ge=w.pointerType==="touch"?10:2,ie={x:ae,y:L},$e={originalEvent:w,delta:ie};V?(E.current=ie,ce(Qt,g,$e,{discrete:!1})):Pe(ie,m.swipeDirection,ge)?(E.current=ie,ce(Zt,h,$e,{discrete:!1}),w.target.setPointerCapture(w.pointerId)):(Math.abs(P)>ge||Math.abs(I)>ge)&&(j.current=null)}),onPointerUp:W(o.onPointerUp,w=>{const P=E.current,I=w.target;if(I.hasPointerCapture(w.pointerId)&&I.releasePointerCapture(w.pointerId),E.current=null,j.current=null,P){const V=w.currentTarget,H={originalEvent:w,delta:P};Pe(P,m.swipeDirection,m.swipeThreshold)?ce(tr,y,H,{discrete:!0}):ce(er,v,H,{discrete:!0}),V.addEventListener("click",D=>D.preventDefault(),{once:!0})}})})})}),m.viewport)})]}):null}),nr=o=>{const{__scopeToast:e,children:r,...t}=o,s=pe(ne,e),[n,i]=f.useState(!1),[l,u]=f.useState(!1);return lr(()=>i(!0)),f.useEffect(()=>{const c=window.setTimeout(()=>u(!0),1e3);return()=>window.clearTimeout(c)},[]),l?null:a.jsx(Wt,{asChild:!0,children:a.jsx(Ke,{...t,children:n&&a.jsxs(a.Fragment,{children:[s.label," ",r]})})})},ar="ToastTitle",Ze=f.forwardRef((o,e)=>{const{__scopeToast:r,...t}=o;return a.jsx(Z.div,{...t,ref:e})});Ze.displayName=ar;var ir="ToastDescription",Qe=f.forwardRef((o,e)=>{const{__scopeToast:r,...t}=o;return a.jsx(Z.div,{...t,ref:e})});Qe.displayName=ir;var et="ToastAction",tt=f.forwardRef((o,e)=>{const{altText:r,...t}=o;return r.trim()?a.jsx(ot,{altText:r,asChild:!0,children:a.jsx(Ee,{...t,ref:e})}):(console.error(`Invalid prop \`altText\` supplied to \`${et}\`. Expected non-empty \`string\`.`),null)});tt.displayName=et;var rt="ToastClose",Ee=f.forwardRef((o,e)=>{const{__scopeToast:r,...t}=o,s=or(rt,r);return a.jsx(ot,{asChild:!0,children:a.jsx(Z.button,{type:"button",...t,ref:e,onClick:W(o.onClick,s.onClose)})})});Ee.displayName=rt;var ot=f.forwardRef((o,e)=>{const{__scopeToast:r,altText:t,...s}=o;return a.jsx(Z.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":t||void 0,...s,ref:e})});function st(o){const e=[];return Array.from(o.childNodes).forEach(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent&&e.push(t.textContent),cr(t)){const s=t.ariaHidden||t.hidden||t.style.display==="none",n=t.dataset.radixToastAnnounceExclude==="";if(!s)if(n){const i=t.dataset.radixToastAnnounceAlt;i&&e.push(i)}else e.push(...st(t))}}),e}function ce(o,e,r,{discrete:t}){const s=r.originalEvent.currentTarget,n=new CustomEvent(o,{bubbles:!0,cancelable:!0,detail:r});e&&s.addEventListener(o,e,{once:!0}),t?Kt(s,n):s.dispatchEvent(n)}var Pe=(o,e,r=0)=>{const t=Math.abs(o.x),s=Math.abs(o.y),n=t>s;return e==="left"||e==="right"?n&&t>r:!n&&s>r};function lr(o=()=>{}){const e=me(o);Ht(()=>{let r=0,t=0;return r=window.requestAnimationFrame(()=>t=window.requestAnimationFrame(e)),()=>{window.cancelAnimationFrame(r),window.cancelAnimationFrame(t)}},[e])}function cr(o){return o.nodeType===o.ELEMENT_NODE}function dr(o){const e=[],r=document.createTreeWalker(o,NodeFilter.SHOW_ELEMENT,{acceptNode:t=>{const s=t.tagName==="INPUT"&&t.type==="hidden";return t.disabled||t.hidden||s?NodeFilter.FILTER_SKIP:t.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)e.push(r.currentNode);return e}function be(o){const e=document.activeElement;return o.some(r=>r===e?!0:(r.focus(),document.activeElement!==e))}var ur=Be,nt=Je,at=Ye,it=Ze,lt=Qe,ct=tt,dt=Ee;function ut(o){var e,r,t="";if(typeof o=="string"||typeof o=="number")t+=o;else if(typeof o=="object")if(Array.isArray(o)){var s=o.length;for(e=0;e<s;e++)o[e]&&(r=ut(o[e]))&&(t&&(t+=" "),t+=r)}else for(r in o)o[r]&&(t&&(t+=" "),t+=r);return t}function mt(){for(var o,e,r=0,t="",s=arguments.length;r<s;r++)(o=arguments[r])&&(e=ut(o))&&(t&&(t+=" "),t+=e);return t}const Ae=o=>typeof o=="boolean"?`${o}`:o===0?"0":o,Ie=mt,mr=(o,e)=>r=>{var t;if((e==null?void 0:e.variants)==null)return Ie(o,r==null?void 0:r.class,r==null?void 0:r.className);const{variants:s,defaultVariants:n}=e,i=Object.keys(s).map(c=>{const h=r==null?void 0:r[c],g=n==null?void 0:n[c];if(h===null)return null;const v=Ae(h)||Ae(g);return s[c][v]}),l=r&&Object.entries(r).reduce((c,h)=>{let[g,v]=h;return v===void 0||(c[g]=v),c},{}),u=e==null||(t=e.compoundVariants)===null||t===void 0?void 0:t.reduce((c,h)=>{let{class:g,className:v,...y}=h;return Object.entries(y).every(x=>{let[m,d]=x;return Array.isArray(d)?d.includes({...n,...l}[m]):{...n,...l}[m]===d})?[...c,g,v]:c},[]);return Ie(o,i,u,r==null?void 0:r.class,r==null?void 0:r.className)};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var pr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hr=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),A=(o,e)=>{const r=f.forwardRef(({color:t="currentColor",size:s=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:l="",children:u,...c},h)=>f.createElement("svg",{ref:h,...pr,width:s,height:s,stroke:t,strokeWidth:i?Number(n)*24/Number(s):n,className:["lucide",`lucide-${hr(o)}`,l].join(" "),...c},[...e.map(([g,v])=>f.createElement(g,v)),...Array.isArray(u)?u:[u]]));return r.displayName=`${o}`,r};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=A("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ht=A("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=A("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=A("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gt=A("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=A("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fr=A("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=A("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xt=A("MessageCircle",[["path",{d:"m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z",key:"v2veuj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=A("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=A("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",key:"1xcu5"}],["circle",{cx:"17.5",cy:"10.5",r:".5",key:"736e4u"}],["circle",{cx:"8.5",cy:"7.5",r:".5",key:"clrty"}],["circle",{cx:"6.5",cy:"12.5",r:".5",key:"1s4xz9"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=A("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=A("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=A("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr=A("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=A("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Ne="-",kr=o=>{const e=Sr(o),{conflictingClassGroups:r,conflictingClassGroupModifiers:t}=o;return{getClassGroupId:i=>{const l=i.split(Ne);return l[0]===""&&l.length!==1&&l.shift(),wt(l,e)||jr(i)},getConflictingClassGroupIds:(i,l)=>{const u=r[i]||[];return l&&t[i]?[...u,...t[i]]:u}}},wt=(o,e)=>{var i;if(o.length===0)return e.classGroupId;const r=o[0],t=e.nextPart.get(r),s=t?wt(o.slice(1),t):void 0;if(s)return s;if(e.validators.length===0)return;const n=o.join(Ne);return(i=e.validators.find(({validator:l})=>l(n)))==null?void 0:i.classGroupId},_e=/^\[(.+)\]$/,jr=o=>{if(_e.test(o)){const e=_e.exec(o)[1],r=e==null?void 0:e.substring(0,e.indexOf(":"));if(r)return"arbitrary.."+r}},Sr=o=>{const{theme:e,prefix:r}=o,t={nextPart:new Map,validators:[]};return Tr(Object.entries(o.classGroups),r).forEach(([n,i])=>{Se(i,t,n,e)}),t},Se=(o,e,r,t)=>{o.forEach(s=>{if(typeof s=="string"){const n=s===""?e:ze(e,s);n.classGroupId=r;return}if(typeof s=="function"){if(Cr(s)){Se(s(t),e,r,t);return}e.validators.push({validator:s,classGroupId:r});return}Object.entries(s).forEach(([n,i])=>{Se(i,ze(e,n),r,t)})})},ze=(o,e)=>{let r=o;return e.split(Ne).forEach(t=>{r.nextPart.has(t)||r.nextPart.set(t,{nextPart:new Map,validators:[]}),r=r.nextPart.get(t)}),r},Cr=o=>o.isThemeGetter,Tr=(o,e)=>e?o.map(([r,t])=>{const s=t.map(n=>typeof n=="string"?e+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([i,l])=>[e+i,l])):n);return[r,s]}):o,Er=o=>{if(o<1)return{get:()=>{},set:()=>{}};let e=0,r=new Map,t=new Map;const s=(n,i)=>{r.set(n,i),e++,e>o&&(e=0,t=r,r=new Map)};return{get(n){let i=r.get(n);if(i!==void 0)return i;if((i=t.get(n))!==void 0)return s(n,i),i},set(n,i){r.has(n)?r.set(n,i):s(n,i)}}},kt="!",Nr=o=>{const{separator:e,experimentalParseClassName:r}=o,t=e.length===1,s=e[0],n=e.length,i=l=>{const u=[];let c=0,h=0,g;for(let d=0;d<l.length;d++){let b=l[d];if(c===0){if(b===s&&(t||l.slice(d,d+n)===e)){u.push(l.slice(h,d)),h=d+n;continue}if(b==="/"){g=d;continue}}b==="["?c++:b==="]"&&c--}const v=u.length===0?l:l.substring(h),y=v.startsWith(kt),x=y?v.substring(1):v,m=g&&g>h?g-h:void 0;return{modifiers:u,hasImportantModifier:y,baseClassName:x,maybePostfixModifierPosition:m}};return r?l=>r({className:l,parseClassName:i}):i},$r=o=>{if(o.length<=1)return o;const e=[];let r=[];return o.forEach(t=>{t[0]==="["?(e.push(...r.sort(),t),r=[]):r.push(t)}),e.push(...r.sort()),e},Rr=o=>({cache:Er(o.cacheSize),parseClassName:Nr(o),...kr(o)}),Pr=/\s+/,Ar=(o,e)=>{const{parseClassName:r,getClassGroupId:t,getConflictingClassGroupIds:s}=e,n=[],i=o.trim().split(Pr);let l="";for(let u=i.length-1;u>=0;u-=1){const c=i[u],{modifiers:h,hasImportantModifier:g,baseClassName:v,maybePostfixModifierPosition:y}=r(c);let x=!!y,m=t(x?v.substring(0,y):v);if(!m){if(!x){l=c+(l.length>0?" "+l:l);continue}if(m=t(v),!m){l=c+(l.length>0?" "+l:l);continue}x=!1}const d=$r(h).join(":"),b=g?d+kt:d,p=b+m;if(n.includes(p))continue;n.push(p);const j=s(m,x);for(let E=0;E<j.length;++E){const $=j[E];n.push(b+$)}l=c+(l.length>0?" "+l:l)}return l};function Ir(){let o=0,e,r,t="";for(;o<arguments.length;)(e=arguments[o++])&&(r=jt(e))&&(t&&(t+=" "),t+=r);return t}const jt=o=>{if(typeof o=="string")return o;let e,r="";for(let t=0;t<o.length;t++)o[t]&&(e=jt(o[t]))&&(r&&(r+=" "),r+=e);return r};function Mr(o,...e){let r,t,s,n=i;function i(u){const c=e.reduce((h,g)=>g(h),o());return r=Rr(c),t=r.cache.get,s=r.cache.set,n=l,l(u)}function l(u){const c=t(u);if(c)return c;const h=Ar(u,r);return s(u,h),h}return function(){return n(Ir.apply(null,arguments))}}const N=o=>{const e=r=>r[o]||[];return e.isThemeGetter=!0,e},St=/^\[(?:([a-z-]+):)?(.+)\]$/i,_r=/^\d+\/\d+$/,zr=new Set(["px","full","screen"]),Or=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Lr=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Fr=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Dr=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Wr=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,K=o=>X(o)||zr.has(o)||_r.test(o),G=o=>ee(o,"length",Jr),X=o=>!!o&&!Number.isNaN(Number(o)),xe=o=>ee(o,"number",X),te=o=>!!o&&Number.isInteger(Number(o)),Hr=o=>o.endsWith("%")&&X(o.slice(0,-1)),k=o=>St.test(o),B=o=>Or.test(o),Kr=new Set(["length","size","percentage"]),Ur=o=>ee(o,Kr,Ct),Vr=o=>ee(o,"position",Ct),Gr=new Set(["image","url"]),Br=o=>ee(o,Gr,Yr),qr=o=>ee(o,"",Xr),re=()=>!0,ee=(o,e,r)=>{const t=St.exec(o);return t?t[1]?typeof e=="string"?t[1]===e:e.has(t[1]):r(t[2]):!1},Jr=o=>Lr.test(o)&&!Fr.test(o),Ct=()=>!1,Xr=o=>Dr.test(o),Yr=o=>Wr.test(o),Zr=()=>{const o=N("colors"),e=N("spacing"),r=N("blur"),t=N("brightness"),s=N("borderColor"),n=N("borderRadius"),i=N("borderSpacing"),l=N("borderWidth"),u=N("contrast"),c=N("grayscale"),h=N("hueRotate"),g=N("invert"),v=N("gap"),y=N("gradientColorStops"),x=N("gradientColorStopPositions"),m=N("inset"),d=N("margin"),b=N("opacity"),p=N("padding"),j=N("saturate"),E=N("scale"),$=N("sepia"),R=N("skew"),M=N("space"),F=N("translate"),_=()=>["auto","contain","none"],T=()=>["auto","hidden","clip","visible","scroll"],C=()=>["auto",k,e],S=()=>[k,e],O=()=>["",K,G],w=()=>["auto",X,k],P=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],I=()=>["solid","dashed","dotted","double","none"],V=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],H=()=>["start","end","center","between","around","evenly","stretch"],D=()=>["","0",k],ae=()=>["auto","avoid","all","avoid-page","page","left","right","column"],L=()=>[X,k];return{cacheSize:500,separator:":",theme:{colors:[re],spacing:[K,G],blur:["none","",B,k],brightness:L(),borderColor:[o],borderRadius:["none","","full",B,k],borderSpacing:S(),borderWidth:O(),contrast:L(),grayscale:D(),hueRotate:L(),invert:D(),gap:S(),gradientColorStops:[o],gradientColorStopPositions:[Hr,G],inset:C(),margin:C(),opacity:L(),padding:S(),saturate:L(),scale:L(),sepia:D(),skew:L(),space:S(),translate:S()},classGroups:{aspect:[{aspect:["auto","square","video",k]}],container:["container"],columns:[{columns:[B]}],"break-after":[{"break-after":ae()}],"break-before":[{"break-before":ae()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...P(),k]}],overflow:[{overflow:T()}],"overflow-x":[{"overflow-x":T()}],"overflow-y":[{"overflow-y":T()}],overscroll:[{overscroll:_()}],"overscroll-x":[{"overscroll-x":_()}],"overscroll-y":[{"overscroll-y":_()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",te,k]}],basis:[{basis:C()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",k]}],grow:[{grow:D()}],shrink:[{shrink:D()}],order:[{order:["first","last","none",te,k]}],"grid-cols":[{"grid-cols":[re]}],"col-start-end":[{col:["auto",{span:["full",te,k]},k]}],"col-start":[{"col-start":w()}],"col-end":[{"col-end":w()}],"grid-rows":[{"grid-rows":[re]}],"row-start-end":[{row:["auto",{span:[te,k]},k]}],"row-start":[{"row-start":w()}],"row-end":[{"row-end":w()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",k]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",k]}],gap:[{gap:[v]}],"gap-x":[{"gap-x":[v]}],"gap-y":[{"gap-y":[v]}],"justify-content":[{justify:["normal",...H()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...H(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...H(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[p]}],px:[{px:[p]}],py:[{py:[p]}],ps:[{ps:[p]}],pe:[{pe:[p]}],pt:[{pt:[p]}],pr:[{pr:[p]}],pb:[{pb:[p]}],pl:[{pl:[p]}],m:[{m:[d]}],mx:[{mx:[d]}],my:[{my:[d]}],ms:[{ms:[d]}],me:[{me:[d]}],mt:[{mt:[d]}],mr:[{mr:[d]}],mb:[{mb:[d]}],ml:[{ml:[d]}],"space-x":[{"space-x":[M]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[M]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",k,e]}],"min-w":[{"min-w":[k,e,"min","max","fit"]}],"max-w":[{"max-w":[k,e,"none","full","min","max","fit","prose",{screen:[B]},B]}],h:[{h:[k,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[k,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[k,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[k,e,"auto","min","max","fit"]}],"font-size":[{text:["base",B,G]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",xe]}],"font-family":[{font:[re]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",k]}],"line-clamp":[{"line-clamp":["none",X,xe]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",K,k]}],"list-image":[{"list-image":["none",k]}],"list-style-type":[{list:["none","disc","decimal",k]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[o]}],"placeholder-opacity":[{"placeholder-opacity":[b]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[o]}],"text-opacity":[{"text-opacity":[b]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...I(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",K,G]}],"underline-offset":[{"underline-offset":["auto",K,k]}],"text-decoration-color":[{decoration:[o]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:S()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",k]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",k]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[b]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...P(),Vr]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Ur]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Br]}],"bg-color":[{bg:[o]}],"gradient-from-pos":[{from:[x]}],"gradient-via-pos":[{via:[x]}],"gradient-to-pos":[{to:[x]}],"gradient-from":[{from:[y]}],"gradient-via":[{via:[y]}],"gradient-to":[{to:[y]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[b]}],"border-style":[{border:[...I(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[b]}],"divide-style":[{divide:I()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...I()]}],"outline-offset":[{"outline-offset":[K,k]}],"outline-w":[{outline:[K,G]}],"outline-color":[{outline:[o]}],"ring-w":[{ring:O()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[o]}],"ring-opacity":[{"ring-opacity":[b]}],"ring-offset-w":[{"ring-offset":[K,G]}],"ring-offset-color":[{"ring-offset":[o]}],shadow:[{shadow:["","inner","none",B,qr]}],"shadow-color":[{shadow:[re]}],opacity:[{opacity:[b]}],"mix-blend":[{"mix-blend":[...V(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":V()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[t]}],contrast:[{contrast:[u]}],"drop-shadow":[{"drop-shadow":["","none",B,k]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[h]}],invert:[{invert:[g]}],saturate:[{saturate:[j]}],sepia:[{sepia:[$]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[t]}],"backdrop-contrast":[{"backdrop-contrast":[u]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[h]}],"backdrop-invert":[{"backdrop-invert":[g]}],"backdrop-opacity":[{"backdrop-opacity":[b]}],"backdrop-saturate":[{"backdrop-saturate":[j]}],"backdrop-sepia":[{"backdrop-sepia":[$]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",k]}],duration:[{duration:L()}],ease:[{ease:["linear","in","out","in-out",k]}],delay:[{delay:L()}],animate:[{animate:["none","spin","ping","pulse","bounce",k]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[E]}],"scale-x":[{"scale-x":[E]}],"scale-y":[{"scale-y":[E]}],rotate:[{rotate:[te,k]}],"translate-x":[{"translate-x":[F]}],"translate-y":[{"translate-y":[F]}],"skew-x":[{"skew-x":[R]}],"skew-y":[{"skew-y":[R]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",k]}],accent:[{accent:["auto",o]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",k]}],"caret-color":[{caret:[o]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":S()}],"scroll-mx":[{"scroll-mx":S()}],"scroll-my":[{"scroll-my":S()}],"scroll-ms":[{"scroll-ms":S()}],"scroll-me":[{"scroll-me":S()}],"scroll-mt":[{"scroll-mt":S()}],"scroll-mr":[{"scroll-mr":S()}],"scroll-mb":[{"scroll-mb":S()}],"scroll-ml":[{"scroll-ml":S()}],"scroll-p":[{"scroll-p":S()}],"scroll-px":[{"scroll-px":S()}],"scroll-py":[{"scroll-py":S()}],"scroll-ps":[{"scroll-ps":S()}],"scroll-pe":[{"scroll-pe":S()}],"scroll-pt":[{"scroll-pt":S()}],"scroll-pr":[{"scroll-pr":S()}],"scroll-pb":[{"scroll-pb":S()}],"scroll-pl":[{"scroll-pl":S()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",k]}],fill:[{fill:[o,"none"]}],"stroke-w":[{stroke:[K,G,xe]}],stroke:[{stroke:[o,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},Qr=Mr(Zr);function J(...o){return Qr(mt(o))}const eo=ur,Tt=f.forwardRef(({className:o,...e},r)=>a.jsx(nt,{ref:r,className:J("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",o),...e}));Tt.displayName=nt.displayName;const to=mr("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),ro=f.forwardRef(({className:o,variant:e,...r},t)=>a.jsx(at,{ref:t,className:J(to({variant:e}),o),...r}));ro.displayName=at.displayName;const oo=f.forwardRef(({className:o,...e},r)=>a.jsx(ct,{ref:r,className:J("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",o),...e}));oo.displayName=ct.displayName;const so=f.forwardRef(({className:o,...e},r)=>a.jsx(dt,{ref:r,className:J("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",o),"toast-close":"",...e,children:a.jsx(yt,{className:"h-4 w-4"})}));so.displayName=dt.displayName;const no=f.forwardRef(({className:o,...e},r)=>a.jsx(it,{ref:r,className:J("text-sm font-semibold",o),...e}));no.displayName=it.displayName;const ao=f.forwardRef(({className:o,...e},r)=>a.jsx(lt,{ref:r,className:J("text-sm opacity-90",o),...e}));ao.displayName=lt.displayName;const io=()=>a.jsx(eo,{children:a.jsx(Tt,{})});class Oe extends f.Component{constructor(){super(...arguments);z(this,"state",{hasError:!1,error:null,errorInfo:null});z(this,"handleReset",()=>{this.setState({hasError:!1,error:null,errorInfo:null})});z(this,"handleReload",()=>{window.location.reload()});z(this,"handleGoHome",()=>{window.location.href="/"})}static getDerivedStateFromError(r){return{hasError:!0,error:r,errorInfo:null}}componentDidCatch(r,t){console.error("ErrorBoundary caught an error:",r,t),this.setState({error:r,errorInfo:t})}render(){return this.state.hasError?this.props.fallback?this.props.fallback:a.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50",children:a.jsx("div",{className:"max-w-lg w-full px-6",children:a.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-8",children:[a.jsx("div",{className:"flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full",children:a.jsx(pt,{className:"w-6 h-6 text-red-600"})}),a.jsx("h1",{className:"mt-4 text-2xl font-bold text-center text-gray-900",children:"문제가 발생했습니다"}),a.jsx("p",{className:"mt-2 text-center text-gray-600",children:"예상치 못한 오류가 발생했습니다. 불편을 드려 죄송합니다."}),!1,a.jsxs("div",{className:"mt-6 flex flex-col gap-3",children:[a.jsxs("button",{onClick:this.handleReset,className:"w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",children:[a.jsx(vr,{className:"w-4 h-4"}),"다시 시도"]}),a.jsx("button",{onClick:this.handleReload,className:"w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors",children:"페이지 새로고침"}),a.jsxs("button",{onClick:this.handleGoHome,className:"w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors",children:[a.jsx(bt,{className:"w-4 h-4"}),"홈으로 이동"]})]})]})})}):this.props.children}}const lo=({size:o="md",text:e="로딩 중..."})=>{const r={sm:"w-8 h-8",md:"w-12 h-12",lg:"w-16 h-16"};return a.jsxs("div",{className:"flex flex-col items-center justify-center p-8",children:[a.jsxs("div",{className:`${r[o]} relative`,children:[a.jsx("div",{className:"absolute inset-0 border-4 border-gray-200 rounded-full"}),a.jsx("div",{className:"absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"})]}),e&&a.jsx("p",{className:"mt-4 text-gray-600 text-sm",children:e})]})},Et=f.createContext(void 0),co={"color-1":{light:{from:"from-[#ec1839]",to:"to-[#d11530]",main:"bg-[#ec1839]",hover:"hover:bg-[#ec1839]",text:"text-[#ec1839]",border:"border-[#ec1839]",rgb:"236, 24, 57"},dark:{from:"from-[#ec1839]",to:"to-[#d11530]",main:"bg-[#ec1839]",hover:"hover:bg-[#ec1839]",text:"text-[#ec1839]",border:"border-[#ec1839]",rgb:"236, 24, 57"}},"color-2":{light:{from:"from-[#fa5b0f]",to:"to-[#e5520d]",main:"bg-[#fa5b0f]",hover:"hover:bg-[#fa5b0f]",text:"text-[#fa5b0f]",border:"border-[#fa5b0f]",rgb:"250, 91, 15"},dark:{from:"from-[#fa5b0f]",to:"to-[#e5520d]",main:"bg-[#fa5b0f]",hover:"hover:bg-[#fa5b0f]",text:"text-[#fa5b0f]",border:"border-[#fa5b0f]",rgb:"250, 91, 15"}},"color-3":{light:{from:"from-[#37b182]",to:"to-[#2e9970]",main:"bg-[#37b182]",hover:"hover:bg-[#37b182]",text:"text-[#37b182]",border:"border-[#37b182]",rgb:"55, 177, 130"},dark:{from:"from-[#37b182]",to:"to-[#2e9970]",main:"bg-[#37b182]",hover:"hover:bg-[#37b182]",text:"text-[#37b182]",border:"border-[#37b182]",rgb:"55, 177, 130"}},"color-4":{light:{from:"from-[#1854b4]",to:"to-[#154a9e]",main:"bg-[#1854b4]",hover:"hover:bg-[#1854b4]",text:"text-[#1854b4]",border:"border-[#1854b4]",rgb:"24, 84, 180"},dark:{from:"from-[#1854b4]",to:"to-[#154a9e]",main:"bg-[#1854b4]",hover:"hover:bg-[#1854b4]",text:"text-[#1854b4]",border:"border-[#1854b4]",rgb:"24, 84, 180"}},"color-5":{light:{from:"from-[#f021b2]",to:"to-[#d91e9e]",main:"bg-[#f021b2]",hover:"hover:bg-[#f021b2]",text:"text-[#f021b2]",border:"border-[#f021b2]",rgb:"240, 33, 178"},dark:{from:"from-[#f021b2]",to:"to-[#d91e9e]",main:"bg-[#f021b2]",hover:"hover:bg-[#f021b2]",text:"text-[#f021b2]",border:"border-[#f021b2]",rgb:"240, 33, 178"}}};function uo({children:o}){const[e,r]=f.useState(()=>{const i=localStorage.getItem("hs-llm-theme");if(i)try{const l=JSON.parse(i);if(["color-1","color-2","color-3","color-4","color-5"].includes(l.color))return l;{const c={ocean:"color-4",forest:"color-3",sunset:"color-2",royal:"color-5",minimal:"color-1",vibrant:"color-5",tech:"color-1",warm:"color-2",arctic:"color-4"};return{mode:l.mode||"light",color:c[l.color]||"color-1"}}}catch{localStorage.removeItem("hs-llm-theme")}return{mode:"light",color:"color-1"}});f.useEffect(()=>{e.mode==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),localStorage.setItem("hs-llm-theme",JSON.stringify(e))},[e]);const t=i=>{r(l=>({...l,mode:i}))},s=i=>{r(l=>({...l,color:i}))},n=()=>{const i=co[e.color][e.mode];return{from:i.from,to:i.to,main:i.main,hover:i.hover,text:i.text,border:i.border,rgb:i.rgb}};return a.jsx(Et.Provider,{value:{theme:e,setThemeMode:t,setThemeColor:s,getAccentColors:n},children:o})}function he(){const o=f.useContext(Et);if(!o)throw new Error("useTheme must be used within a ThemeProvider");return o}function mo(){const{theme:o,setThemeMode:e,setThemeColor:r}=he(),[t,s]=f.useState(!1),n=[{value:"color-1",label:"Color 1",class:"bg-[#ec1839]",hex:"#ec1839"},{value:"color-2",label:"Color 2",class:"bg-[#fa5b0f]",hex:"#fa5b0f"},{value:"color-3",label:"Color 3",class:"bg-[#37b182]",hex:"#37b182"},{value:"color-4",label:"Color 4",class:"bg-[#1854b4]",hex:"#1854b4"},{value:"color-5",label:"Color 5",class:"bg-[#f021b2]",hex:"#f021b2"}];return a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("button",{onClick:()=>e(o.mode==="light"?"dark":"light"),className:"p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200","aria-label":"다크 모드 토글",children:o.mode==="light"?a.jsx(br,{className:"h-5 w-5 text-slate-700 dark:text-slate-300"}):a.jsx(yr,{className:"h-5 w-5 text-slate-700 dark:text-slate-300"})}),a.jsxs("div",{className:"relative",children:[a.jsx("button",{onClick:()=>s(!t),className:"p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200","aria-label":"테마 색상 선택",children:a.jsx(xr,{className:"h-5 w-5 text-slate-700 dark:text-slate-300"})}),t&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"fixed inset-0 z-10",onClick:()=>s(!1)}),a.jsx("div",{className:"absolute right-0 mt-2 p-3 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 z-20",children:a.jsx("div",{className:"flex gap-2",children:n.map(i=>a.jsx("button",{onClick:()=>{r(i.value),s(!1)},className:`w-10 h-10 rounded-full transition-all hover:scale-110 ${i.class} ${o.color===i.value?"ring-2 ring-offset-2 ring-slate-400":""}`,"aria-label":i.label,title:i.hex},i.value))})})]})]})]})}const Le=[{path:"/",label:"대시보드",icon:bt},{path:"/syllabus",label:"강의계획서",icon:ht},{path:"/rubric",label:"루브릭",icon:ft},{path:"/assignment",label:"과제",icon:gt},{path:"/feedback",label:"피드백",icon:xt},{path:"/settings",label:"설정",icon:vt}];function po(){const o=Ut(),[e,r]=f.useState(!1),{getAccentColors:t}=he(),s=t(),n=()=>{r(!e)};return a.jsx("nav",{className:"bg-white dark:bg-gray-900 sticky top-0 z-50 border-b border-slate-200 dark:border-gray-700 shadow-sm",children:a.jsxs("div",{className:"container mx-auto px-6 max-w-7xl",children:[a.jsxs("div",{className:"flex items-center justify-between h-20",children:[a.jsxs("div",{className:"flex items-center space-x-12",children:[a.jsxs(U,{to:"/",className:"flex items-center space-x-3 group focus:outline-none",children:[a.jsx("div",{className:`p-2 bg-gradient-to-br ${s.from} ${s.to} rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105`,children:a.jsx(wr,{className:"h-7 w-7 text-white"})}),a.jsxs("div",{children:[a.jsx("span",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Teaching AI"}),a.jsx("div",{className:"text-xs text-slate-500 dark:text-slate-400 font-medium",children:"한신대학교 교수혁신연구결과"})]})]}),a.jsx("div",{className:"hidden lg:flex items-center space-x-2",children:Le.map(i=>{const l=i.icon,u=o.pathname===i.path;return a.jsx(U,{to:i.path,className:"focus:outline-none",children:a.jsxs("div",{className:`px-3 py-2 rounded-lg flex items-center space-x-2 text-sm font-medium transition-all duration-200 focus:outline-none
                        ${u?`${s.main} text-white`:"text-slate-600 dark:text-slate-300"}`,style:u?{}:{":hover":{backgroundColor:`rgba(${s.rgb}, 0.1)`,color:`rgb(${s.rgb})`}},onMouseEnter:c=>{u||(c.currentTarget.style.backgroundColor=`rgba(${s.rgb}, 0.1)`,c.currentTarget.style.color=`rgb(${s.rgb})`)},onMouseLeave:c=>{u||(c.currentTarget.style.backgroundColor="",c.currentTarget.style.color="")},children:[a.jsx(l,{className:"h-4 w-4"}),a.jsx("span",{children:i.label})]})},i.path)})})]}),a.jsxs("div",{className:"flex items-center space-x-4",children:[a.jsx(mo,{}),a.jsx(U,{to:"/guide",className:"hidden md:block focus:outline-none",children:a.jsx("button",{className:`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border focus:outline-none ${s.border} ${s.text} ${s.hover} hover:text-white`,onMouseEnter:i=>{i.currentTarget.style.backgroundColor=`rgb(${s.rgb})`,i.currentTarget.style.color="white"},onMouseLeave:i=>{i.currentTarget.style.backgroundColor="",i.currentTarget.style.color=`rgb(${s.rgb})`},children:"도움말"})}),a.jsxs("div",{className:"hidden md:flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400",children:[a.jsx("div",{className:`w-2 h-2 ${s.main} rounded-full animate-pulse`}),a.jsx("span",{className:"font-medium",children:"AI 시스템 정상"})]}),a.jsx("button",{onClick:n,className:"lg:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 focus:outline-none","aria-label":"메뉴 열기",children:e?a.jsx(yt,{className:"h-6 w-6 text-slate-700 dark:text-slate-300"}):a.jsx(gr,{className:"h-6 w-6 text-slate-700 dark:text-slate-300"})})]})]}),e&&a.jsx("div",{className:"lg:hidden",children:a.jsxs("div",{className:"px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-slate-900 rounded-lg mt-2 border border-slate-200 dark:border-slate-700",children:[Le.map(i=>{const l=i.icon,u=o.pathname===i.path;return a.jsxs(U,{to:i.path,onClick:()=>r(!1),className:`group flex items-center px-3 py-2 text-base font-medium rounded-lg transition-all duration-200 focus:outline-none ${u?`${s.main} text-white`:"text-slate-700 dark:text-slate-300"}`,onMouseEnter:c=>{u||(c.currentTarget.style.backgroundColor=`rgba(${s.rgb}, 0.1)`,c.currentTarget.style.color=`rgb(${s.rgb})`)},onMouseLeave:c=>{u||(c.currentTarget.style.backgroundColor="",c.currentTarget.style.color="")},children:[a.jsx(l,{className:"mr-3 h-5 w-5"}),i.label]},i.path)}),a.jsxs("div",{className:"border-t border-slate-200 dark:border-slate-700 pt-3 mt-3",children:[a.jsx(U,{to:"/guide",onClick:()=>r(!1),className:"block w-full text-left px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors duration-200",children:"도움말"}),a.jsxs("div",{className:"flex items-center px-3 py-2 text-sm text-slate-600 dark:text-slate-400",children:[a.jsx("div",{className:`w-2 h-2 ${s.main} rounded-full animate-pulse mr-2`}),a.jsx("span",{className:"font-medium",children:"AI 시스템 정상"})]})]})]})})]})})}const ho={},Fe=o=>{let e;const r=new Set,t=(h,g)=>{const v=typeof h=="function"?h(e):h;if(!Object.is(v,e)){const y=e;e=g??(typeof v!="object"||v===null)?v:Object.assign({},e,v),r.forEach(x=>x(e,y))}},s=()=>e,u={setState:t,getState:s,getInitialState:()=>c,subscribe:h=>(r.add(h),()=>r.delete(h)),destroy:()=>{(ho?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}},c=e=o(t,s,u);return u},fo=o=>o?Fe(o):Fe;var Nt={exports:{}},$t={},Rt={exports:{}},Pt={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y=f;function go(o,e){return o===e&&(o!==0||1/o===1/e)||o!==o&&e!==e}var bo=typeof Object.is=="function"?Object.is:go,xo=Y.useState,vo=Y.useEffect,yo=Y.useLayoutEffect,wo=Y.useDebugValue;function ko(o,e){var r=e(),t=xo({inst:{value:r,getSnapshot:e}}),s=t[0].inst,n=t[1];return yo(function(){s.value=r,s.getSnapshot=e,ve(s)&&n({inst:s})},[o,r,e]),vo(function(){return ve(s)&&n({inst:s}),o(function(){ve(s)&&n({inst:s})})},[o]),wo(r),r}function ve(o){var e=o.getSnapshot;o=o.value;try{var r=e();return!bo(o,r)}catch{return!0}}function jo(o,e){return e()}var So=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?jo:ko;Pt.useSyncExternalStore=Y.useSyncExternalStore!==void 0?Y.useSyncExternalStore:So;Rt.exports=Pt;var Co=Rt.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fe=f,To=Co;function Eo(o,e){return o===e&&(o!==0||1/o===1/e)||o!==o&&e!==e}var No=typeof Object.is=="function"?Object.is:Eo,$o=To.useSyncExternalStore,Ro=fe.useRef,Po=fe.useEffect,Ao=fe.useMemo,Io=fe.useDebugValue;$t.useSyncExternalStoreWithSelector=function(o,e,r,t,s){var n=Ro(null);if(n.current===null){var i={hasValue:!1,value:null};n.current=i}else i=n.current;n=Ao(function(){function u(y){if(!c){if(c=!0,h=y,y=t(y),s!==void 0&&i.hasValue){var x=i.value;if(s(x,y))return g=x}return g=y}if(x=g,No(h,y))return x;var m=t(y);return s!==void 0&&s(x,m)?(h=y,x):(h=y,g=m)}var c=!1,h,g,v=r===void 0?null:r;return[function(){return u(e())},v===null?void 0:function(){return u(v())}]},[e,r,t,s]);var l=$o(o,n[0],n[1]);return Po(function(){i.hasValue=!0,i.value=l},[l]),Io(l),l};Nt.exports=$t;var Mo=Nt.exports;const _o=Vt(Mo),At={},{useDebugValue:zo}=Ve,{useSyncExternalStoreWithSelector:Oo}=_o;let De=!1;const Lo=o=>o;function Fo(o,e=Lo,r){(At?"production":void 0)!=="production"&&r&&!De&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),De=!0);const t=Oo(o.subscribe,o.getState,o.getServerState||o.getInitialState,e,r);return zo(t),t}const Do=o=>{(At?"production":void 0)!=="production"&&typeof o!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof o=="function"?fo(o):o,r=(t,s)=>Fo(e,t,s);return Object.assign(r,e),r},Wo=o=>Do,Ho={};function Ko(o,e){let r;try{r=o()}catch{return}return{getItem:s=>{var n;const i=u=>u===null?null:JSON.parse(u,void 0),l=(n=r.getItem(s))!=null?n:null;return l instanceof Promise?l.then(i):i(l)},setItem:(s,n)=>r.setItem(s,JSON.stringify(n,void 0)),removeItem:s=>r.removeItem(s)}}const se=o=>e=>{try{const r=o(e);return r instanceof Promise?r:{then(t){return se(t)(r)},catch(t){return this}}}catch(r){return{then(t){return this},catch(t){return se(t)(r)}}}},Uo=(o,e)=>(r,t,s)=>{let n={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:d=>d,version:0,merge:(d,b)=>({...b,...d}),...e},i=!1;const l=new Set,u=new Set;let c;try{c=n.getStorage()}catch{}if(!c)return o((...d)=>{console.warn(`[zustand persist middleware] Unable to update item '${n.name}', the given storage is currently unavailable.`),r(...d)},t,s);const h=se(n.serialize),g=()=>{const d=n.partialize({...t()});let b;const p=h({state:d,version:n.version}).then(j=>c.setItem(n.name,j)).catch(j=>{b=j});if(b)throw b;return p},v=s.setState;s.setState=(d,b)=>{v(d,b),g()};const y=o((...d)=>{r(...d),g()},t,s);let x;const m=()=>{var d;if(!c)return;i=!1,l.forEach(p=>p(t()));const b=((d=n.onRehydrateStorage)==null?void 0:d.call(n,t()))||void 0;return se(c.getItem.bind(c))(n.name).then(p=>{if(p)return n.deserialize(p)}).then(p=>{if(p)if(typeof p.version=="number"&&p.version!==n.version){if(n.migrate)return n.migrate(p.state,p.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return p.state}).then(p=>{var j;return x=n.merge(p,(j=t())!=null?j:y),r(x,!0),g()}).then(()=>{b==null||b(x,void 0),i=!0,u.forEach(p=>p(x))}).catch(p=>{b==null||b(void 0,p)})};return s.persist={setOptions:d=>{n={...n,...d},d.getStorage&&(c=d.getStorage())},clearStorage:()=>{c==null||c.removeItem(n.name)},getOptions:()=>n,rehydrate:()=>m(),hasHydrated:()=>i,onHydrate:d=>(l.add(d),()=>{l.delete(d)}),onFinishHydration:d=>(u.add(d),()=>{u.delete(d)})},m(),x||y},Vo=(o,e)=>(r,t,s)=>{let n={storage:Ko(()=>localStorage),partialize:m=>m,version:0,merge:(m,d)=>({...d,...m}),...e},i=!1;const l=new Set,u=new Set;let c=n.storage;if(!c)return o((...m)=>{console.warn(`[zustand persist middleware] Unable to update item '${n.name}', the given storage is currently unavailable.`),r(...m)},t,s);const h=()=>{const m=n.partialize({...t()});return c.setItem(n.name,{state:m,version:n.version})},g=s.setState;s.setState=(m,d)=>{g(m,d),h()};const v=o((...m)=>{r(...m),h()},t,s);s.getInitialState=()=>v;let y;const x=()=>{var m,d;if(!c)return;i=!1,l.forEach(p=>{var j;return p((j=t())!=null?j:v)});const b=((d=n.onRehydrateStorage)==null?void 0:d.call(n,(m=t())!=null?m:v))||void 0;return se(c.getItem.bind(c))(n.name).then(p=>{if(p)if(typeof p.version=="number"&&p.version!==n.version){if(n.migrate)return[!0,n.migrate(p.state,p.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,p.state];return[!1,void 0]}).then(p=>{var j;const[E,$]=p;if(y=n.merge($,(j=t())!=null?j:v),r(y,!0),E)return h()}).then(()=>{b==null||b(y,void 0),y=t(),i=!0,u.forEach(p=>p(y))}).catch(p=>{b==null||b(void 0,p)})};return s.persist={setOptions:m=>{n={...n,...m},m.storage&&(c=m.storage)},clearStorage:()=>{c==null||c.removeItem(n.name)},getOptions:()=>n,rehydrate:()=>x(),hasHydrated:()=>i,onHydrate:m=>(l.add(m),()=>{l.delete(m)}),onFinishHydration:m=>(u.add(m),()=>{u.delete(m)})},n.skipHydration||x(),y||v},Go=(o,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?((Ho?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),Uo(o,e)):Vo(o,e),Bo=Go;class We{constructor(e){z(this,"apiKey");z(this,"baseURL","https://api.openai.com/v1");z(this,"model");z(this,"temperature");z(this,"maxTokens");this.apiKey=e.apiKey,this.model=e.model||"gpt-3.5-turbo",this.temperature=e.temperature||.7,this.maxTokens=e.maxTokens||2e3}async complete(e){var s;const r=await fetch(`${this.baseURL}/chat/completions`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.apiKey}`},body:JSON.stringify({model:this.model,messages:e,temperature:this.temperature,max_tokens:this.maxTokens,stream:!1})});if(!r.ok){const n=await r.json().catch(()=>({error:{message:r.statusText}}));throw new Error(`OpenAI API error: ${((s=n.error)==null?void 0:s.message)||r.statusText}`)}return(await r.json()).choices[0].message.content}async*streamComplete(e){var i,l,u,c;const r=await fetch(`${this.baseURL}/chat/completions`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.apiKey}`},body:JSON.stringify({model:this.model,messages:e,temperature:this.temperature,max_tokens:this.maxTokens,stream:!0})});if(!r.ok){const h=await r.json().catch(()=>({error:{message:r.statusText}}));throw new Error(`OpenAI API error: ${((i=h.error)==null?void 0:i.message)||r.statusText}`)}const t=(l=r.body)==null?void 0:l.getReader(),s=new TextDecoder;if(!t)throw new Error("Response body is not readable");let n="";try{for(;;){const{done:h,value:g}=await t.read();if(h)break;n+=s.decode(g,{stream:!0});const v=n.split(`
`);n=v.pop()||"";for(const y of v){const x=y.trim();if(x.startsWith("data: ")){const m=x.slice(6);if(m==="[DONE]")return;try{const b=(c=(u=JSON.parse(m).choices[0])==null?void 0:u.delta)==null?void 0:c.content;b&&(yield b)}catch(d){console.debug("Failed to parse streaming chunk:",d)}}}}}finally{t.releaseLock()}}async validateApiKey(){try{return(await fetch(`${this.baseURL}/models`,{headers:{Authorization:`Bearer ${this.apiKey}`}})).ok}catch{return!1}}async getAvailableModels(){const e=await fetch(`${this.baseURL}/models`,{headers:{Authorization:`Bearer ${this.apiKey}`}});if(!e.ok)throw new Error("Failed to fetch models");return(await e.json()).data.filter(t=>t.id.includes("gpt")).map(t=>t.id).sort()}updateConfig(e){e.apiKey&&(this.apiKey=e.apiKey),e.model&&(this.model=e.model),e.temperature!==void 0&&(this.temperature=e.temperature),e.maxTokens!==void 0&&(this.maxTokens=e.maxTokens)}}class qo{constructor(){z(this,"PREFIX","ta_ai_");z(this,"ENCRYPTION_KEY","teaching-assistant-2024")}saveApiKey(e){const r=this.encrypt(e);localStorage.setItem(`${this.PREFIX}api_key`,r)}getApiKey(){const e=localStorage.getItem(`${this.PREFIX}api_key`);if(!e)return null;try{return this.decrypt(e)}catch{return this.removeApiKey(),null}}removeApiKey(){localStorage.removeItem(`${this.PREFIX}api_key`)}saveChatHistory(e){const r=e.slice(-100);this.save("chat_history",r)}getChatHistory(){return this.get("chat_history")||[]}clearChatHistory(){this.remove("chat_history")}saveSyllabus(e){const r=this.getSyllabi(),t=r.findIndex(n=>n.courseInfo.name===e.courseInfo.name);t>=0?r[t]=e:r.push(e);const s=r.slice(-20);this.save("syllabi",s),this.addRecentWork({type:"syllabus",title:e.courseInfo.name,data:e})}getSyllabi(){return this.get("syllabi")||[]}getSyllabus(e){return this.getSyllabi().find(t=>t.courseInfo.name===e)||null}deleteSyllabus(e){const t=this.getSyllabi().filter(s=>s.courseInfo.name!==e);this.save("syllabi",t)}saveRubric(e){const r=this.getRubrics(),t=r.findIndex(n=>n.assignmentTitle===e.assignmentTitle);t>=0?r[t]=e:r.push(e);const s=r.slice(-30);this.save("rubrics",s),this.addRecentWork({type:"rubric",title:e.assignmentTitle,data:e})}getRubrics(){return this.get("rubrics")||[]}getRubric(e){return this.getRubrics().find(t=>t.assignmentTitle===e)||null}saveAssignment(e){const r=this.getAssignments(),t=r.findIndex(n=>n.title===e.title);t>=0?r[t]=e:r.push(e);const s=r.slice(-30);this.save("assignments",s),this.addRecentWork({type:"assignment",title:e.title,data:e})}getAssignments(){return this.get("assignments")||[]}savePreferences(e){const t={...this.getPreferences(),...e};this.save("preferences",t)}getPreferences(){const e=this.get("preferences");return{...{theme:"system",language:"ko",model:"gpt-3.5-turbo",temperature:.7,maxTokens:2e3,autoSave:!0},...e}}addRecentWork(e){const r=this.getRecentWork(),t={...e,id:this.generateId(),timestamp:new Date().toISOString()};r.unshift(t);const s=r.slice(0,50);this.save("recent_work",s)}getRecentWork(){return this.get("recent_work")||[]}exportAllData(){return{chatHistory:this.getChatHistory(),syllabi:this.getSyllabi(),rubrics:this.getRubrics(),assignments:this.getAssignments(),quizzes:this.get("quizzes")||[],preferences:this.getPreferences(),recentWork:this.getRecentWork()}}importData(e){e.chatHistory&&this.saveChatHistory(e.chatHistory),e.syllabi&&this.save("syllabi",e.syllabi),e.rubrics&&this.save("rubrics",e.rubrics),e.assignments&&this.save("assignments",e.assignments),e.quizzes&&this.save("quizzes",e.quizzes),e.preferences&&this.savePreferences(e.preferences),e.recentWork&&this.save("recent_work",e.recentWork)}clearAll(){Object.keys(localStorage).forEach(r=>{r.startsWith(this.PREFIX)&&localStorage.removeItem(r)})}getStorageSize(){let e=0;return Object.keys(localStorage).forEach(t=>{if(t.startsWith(this.PREFIX)){const s=localStorage.getItem(t)||"";e+=t.length+s.length}}),e}save(e,r){try{const t=JSON.stringify(r);localStorage.setItem(`${this.PREFIX}${e}`,t)}catch(t){if(console.error(`Failed to save ${e}:`,t),t instanceof DOMException&&t.code===22){this.cleanupOldData();try{const s=JSON.stringify(r);localStorage.setItem(`${this.PREFIX}${e}`,s)}catch{throw new Error("Storage quota exceeded")}}}}get(e){try{const r=localStorage.getItem(`${this.PREFIX}${e}`);return r?JSON.parse(r):null}catch{return null}}remove(e){localStorage.removeItem(`${this.PREFIX}${e}`)}encrypt(e){const r=this.ENCRYPTION_KEY;let t="";for(let s=0;s<e.length;s++)t+=String.fromCharCode(e.charCodeAt(s)^r.charCodeAt(s%r.length));return btoa(t)}decrypt(e){const r=atob(e),t=this.ENCRYPTION_KEY;let s="";for(let n=0;n<r.length;n++)s+=String.fromCharCode(r.charCodeAt(n)^t.charCodeAt(n%t.length));return s}generateId(){return Date.now().toString(36)+Math.random().toString(36).substring(2)}cleanupOldData(){const e=this.getRecentWork();this.save("recent_work",e.slice(0,10));const r=this.getChatHistory();this.saveChatHistory(r.slice(-50))}}class oe{static generateSyllabusPrompt(e){return[{role:"system",content:`당신은 대학 강의계획서를 작성하는 교육 전문가입니다.
다음 원칙을 따라주세요:
1. Bloom's Taxonomy를 활용한 학습목표 설정
2. 주차별 점진적 난이도 상승
3. 이론과 실습의 적절한 배분
4. 명확하고 측정 가능한 평가 기준
5. 한국 대학 교육 환경에 맞는 구성`},{role:"user",content:`과목명: ${e.name}
학점: ${e.credits}
시수: 주 ${e.hoursPerWeek}시간
대상: ${e.targetYear}학년
선수과목: ${e.prerequisites||"없음"}
과목 설명: ${e.description||""}

15주차 강의계획서를 다음 형식으로 작성해주세요:

## 교과목 개요
[과목의 목적과 중요성을 2-3문장으로 설명]

## 학습목표 (Course Learning Outcomes)
1. [구체적이고 측정 가능한 학습목표 1]
2. [구체적이고 측정 가능한 학습목표 2]
3. [구체적이고 측정 가능한 학습목표 3]
4. [구체적이고 측정 가능한 학습목표 4]

## 주차별 세부 계획

### 1주차: [주제]
- **학습목표**: 
- **주요 내용**: 
- **수업 활동**: 
- **사전 학습**: 
- **과제**: 

[2-15주차 동일 형식으로 작성]

## 평가 방법
| 평가 항목 | 비율 | 평가 기준 |
|----------|------|----------|
| 중간고사 | 30% | [평가 기준] |
| 기말고사 | 30% | [평가 기준] |
| 과제 | 20% | [평가 기준] |
| 출석 | 10% | [평가 기준] |
| 참여도 | 10% | [평가 기준] |

## 교재 및 참고자료
- **주교재**: 
- **부교재**: 
- **참고자료**: 

## 수업 규칙
- 출석 정책:
- 과제 제출:
- 학습 윤리:`}]}static generateRubricPrompt(e){var r;return[{role:"system",content:`당신은 공정하고 명확한 평가 루브릭을 설계하는 전문가입니다.
루브릭은 다음 요소를 포함해야 합니다:
1. 명확한 평가 항목 (4-5개)
2. 구체적인 수준별 기준 (3단계: 우수/보통/미흡)
3. 객관적이고 측정 가능한 지표
4. 적절한 가중치 배분 (합계 100%)
5. 학생이 이해하기 쉬운 표현`},{role:"user",content:`과제 제목: ${e.title}
과제 유형: ${e.type}
과제 설명: ${e.description}
제출 형식: ${e.format}
학습목표: ${((r=e.objectives)==null?void 0:r.join(", "))||""}

위 과제에 대한 평가 루브릭을 만들어주세요.

## 루브릭 형식:

| 평가항목 | 가중치 | 우수 (90-100점) | 보통 (70-89점) | 미흡 (0-69점) |
|---------|--------|-----------------|----------------|---------------|
| [항목1] | [%] | [구체적 기준] | [구체적 기준] | [구체적 기준] |
| [항목2] | [%] | [구체적 기준] | [구체적 기준] | [구체적 기준] |
| [항목3] | [%] | [구체적 기준] | [구체적 기준] | [구체적 기준] |
| [항목4] | [%] | [구체적 기준] | [구체적 기준] | [구체적 기준] |

각 평가 항목별로 다음을 포함해주세요:
- 평가하고자 하는 역량
- 관찰 가능한 증거
- 구체적인 예시`}]}static generateAssignmentPrompt(e,r,t){const s={basic:"기초 (개념 이해 중심)",intermediate:"중급 (응용 및 분석)",advanced:"고급 (창의적 문제 해결)"};return[{role:"system",content:`당신은 창의적이고 교육적인 과제를 설계하는 전문가입니다.
과제는 다음 원칙을 따라야 합니다:
1. 학습목표와 명확히 연계
2. 학생의 흥미와 동기 유발
3. 실제 상황과 연결된 문제
4. 단계별 명확한 지침
5. 평가 기준의 투명성`},{role:"user",content:`학습목표:
${e.map((n,i)=>`${i+1}. ${n}`).join(`
`)}

난이도: ${s[r]}
과제 유형: ${t}

위 학습목표를 평가할 수 있는 과제를 설계해주세요.

## 과제 설계서

### 과제 제목
[흥미롭고 명확한 제목]

### 과제 개요
[과제의 목적과 배경을 3-4문장으로 설명]

### 구체적 요구사항
1. [명확한 요구사항 1]
2. [명확한 요구사항 2]
3. [명확한 요구사항 3]
4. [명확한 요구사항 4]
5. [명확한 요구사항 5]

### 제출 형식
- 형식: [보고서/코드/발표자료 등]
- 분량: [구체적 분량]
- 제출 방법: [제출 방식]
- 마감일: [상대적 기간]

### 평가 기준 (간략)
- [주요 평가 요소 1] (00%)
- [주요 평가 요소 2] (00%)
- [주요 평가 요소 3] (00%)
- [주요 평가 요소 4] (00%)

### 예상 소요 시간
[학생이 과제 완성에 필요한 예상 시간]

### 도움 자료
- [참고 자료 1]
- [참고 자료 2]
- [유용한 도구나 웹사이트]

### 팁과 주의사항
- [성공적 완성을 위한 팁 1]
- [주의해야 할 사항 1]
- [자주 하는 실수와 해결법]`}]}static generateFeedbackPrompt(e){return[{role:"system",content:`당신은 건설적이고 격려하는 피드백을 제공하는 교육자입니다.
피드백 작성 원칙:
1. 구체적이고 행동 가능한 조언
2. 강점을 먼저 인정하고 격려
3. 개선점은 건설적으로 제시
4. 학생의 성장을 돕는 방향
5. 명확하고 이해하기 쉬운 표현`},{role:"user",content:`학생 제출물 요약:
${e.submissionSummary}

평가 루브릭:
${e.rubric?JSON.stringify(e.rubric,null,2):"일반 평가"}

획득 점수: ${e.score}/100

위 정보를 바탕으로 학생에게 피드백을 작성해주세요.

## 피드백

### 잘한 점 (강점)
• [구체적인 강점 1 - 예시나 증거 포함]
• [구체적인 강점 2 - 예시나 증거 포함]
• [구체적인 강점 3 - 예시나 증거 포함]

### 개선이 필요한 부분
• [개선점 1]: [구체적 문제] → [개선 방법]
• [개선점 2]: [구체적 문제] → [개선 방법]
• [개선점 3]: [구체적 문제] → [개선 방법]

### 다음 과제를 위한 조언
1. [실천 가능한 구체적 조언 1]
2. [실천 가능한 구체적 조언 2]

### 추가 학습 자료
- [도움이 될 자료나 참고 사항]

총평: [2-3문장으로 격려와 함께 전체적인 평가 요약]`}]}static generateCLOPrompt(e,r){return[{role:"system",content:`당신은 Bloom's Taxonomy를 활용한 학습목표 설정 전문가입니다.
학습목표는 SMART 원칙을 따라야 합니다:
- Specific (구체적)
- Measurable (측정가능)
- Achievable (달성가능)
- Relevant (관련성)
- Time-bound (시간제한)`},{role:"user",content:`과목명: ${e}
과목 설명: ${r}

이 과목의 학습목표(Course Learning Outcomes)를 6개 생성해주세요.
Bloom's Taxonomy의 각 수준별로 1개씩 작성하되, 실제 수업에서 달성 가능한 목표로 설정해주세요.

## 학습목표 (CLOs)

### 1. 기억 (Remember) - 지식 회상
[학생은 ~을 정의할 수 있다/나열할 수 있다/식별할 수 있다]

### 2. 이해 (Understand) - 의미 구성
[학생은 ~을 설명할 수 있다/요약할 수 있다/비교할 수 있다]

### 3. 적용 (Apply) - 절차 실행
[학생은 ~을 적용할 수 있다/구현할 수 있다/해결할 수 있다]

### 4. 분석 (Analyze) - 관계 파악
[학생은 ~을 분석할 수 있다/구분할 수 있다/조직할 수 있다]

### 5. 평가 (Evaluate) - 판단
[학생은 ~을 평가할 수 있다/비판할 수 있다/정당화할 수 있다]

### 6. 창조 (Create) - 새로운 생성
[학생은 ~을 설계할 수 있다/개발할 수 있다/창작할 수 있다]`}]}static generateQuizPrompt(e,r,t){return[{role:"system",content:`당신은 교육 평가 문항을 개발하는 전문가입니다.
문제는 다음 원칙을 따라야 합니다:
1. 명확하고 모호하지 않은 문장
2. 학습목표와 직접적 연관
3. 적절한 난이도 분포
4. 정답의 명확성
5. 교육적 가치`},{role:"user",content:`주제: ${e}
문제 수: ${r}개
문제 유형: ${t.join(", ")}

위 조건에 맞는 평가 문제를 생성해주세요.

## 평가 문제

${Array.from({length:r},(s,n)=>`
### 문제 ${n+1}
**유형**: [객관식/주관식/서술형/문제해결형]
**난이도**: [상/중/하]
**배점**: [00점]

**문제**:
[문제 내용]

**선택지** (객관식인 경우):
1) [선택지 1]
2) [선택지 2]
3) [선택지 3]
4) [선택지 4]

**정답**:
[정답 및 간단한 설명]

**채점 기준** (주관식/서술형인 경우):
- [채점 포인트 1]
- [채점 포인트 2]
`).join(`
`)}`}]}static generateCustomPrompt(e,r,t){return[{role:"system",content:`당신은 대학 교육을 지원하는 AI 조교입니다.
교육학적 원칙을 바탕으로 도움을 제공하며, 
한국 대학 교육 환경과 문화를 이해하고 있습니다.`},{role:"user",content:`맥락: ${e}

요청사항: ${r}

${t?`출력 형식: ${t}`:"적절한 형식으로 응답해주세요."}`}]}}class de{exportSyllabus(e,r){const t=r.filename||`syllabus_${e.courseInfo.name}_${Date.now()}`;switch(r.format){case"json":this.exportAsJSON(e,t);break;case"markdown":this.exportSyllabusAsMarkdown(e,t);break;case"pdf":this.exportSyllabusAsPDF(e,t);break;case"html":this.exportSyllabusAsHTML(e,t);break;default:throw new Error(`Unsupported format: ${r.format}`)}}exportRubric(e,r){const t=r.filename||`rubric_${e.assignmentTitle}_${Date.now()}`;switch(r.format){case"json":this.exportAsJSON(e,t);break;case"markdown":this.exportRubricAsMarkdown(e,t);break;case"pdf":this.exportRubricAsPDF(e,t);break;case"csv":this.exportRubricAsCSV(e,t);break;default:throw new Error(`Unsupported format: ${r.format}`)}}exportChatHistory(e,r){const t=r.filename||`chat_history_${Date.now()}`;switch(r.format){case"json":this.exportAsJSON(e,t);break;case"markdown":this.exportChatAsMarkdown(e,t);break;case"pdf":this.exportChatAsPDF(e,t);break;default:throw new Error(`Unsupported format: ${r.format}`)}}exportAsJSON(e,r){const t=JSON.stringify(e,null,2),s=new Blob([t],{type:"application/json"});this.download(s,`${r}.json`)}exportSyllabusAsMarkdown(e,r){let t=`# ${e.courseInfo.name}

`;t+=`## 과목 정보
`,t+=`- **학점**: ${e.courseInfo.credits}
`,t+=`- **시수**: 주 ${e.courseInfo.hoursPerWeek}시간
`,t+=`- **대상**: ${e.courseInfo.targetYear}학년
`,e.courseInfo.prerequisites&&(t+=`- **선수과목**: ${e.courseInfo.prerequisites}
`),t+=`
`,t+=`## 과목 개요
`,t+=`${e.courseOverview}

`,t+=`## 학습목표 (CLOs)
`,e.learningOutcomes.forEach((n,i)=>{t+=`${i+1}. ${n.description} (${n.bloomCategory})
`}),t+=`
`,t+=`## 주차별 세부 계획

`,e.weeklyPlans.forEach(n=>{t+=`### ${n.week}주차: ${n.topic}
`,t+=`**학습목표**:
`,n.objectives.forEach(i=>{t+=`- ${i}
`}),t+=`
**주요 내용**:
`,n.content.forEach(i=>{t+=`- ${i}
`}),n.assignments&&(t+=`
**과제**: ${n.assignments}
`),t+=`
`}),t+=`## 평가 방법
`,t+=`| 항목 | 비율 |
`,t+=`|------|------|
`,t+=`| 중간고사 | ${e.evaluationMethod.midterm}% |
`,t+=`| 기말고사 | ${e.evaluationMethod.final}% |
`,t+=`| 과제 | ${e.evaluationMethod.assignments}% |
`,t+=`| 출석 | ${e.evaluationMethod.attendance}% |
`,t+=`| 참여도 | ${e.evaluationMethod.participation}% |

`,t+=`## 교재 및 참고자료
`,e.textbooks.required&&(t+=`### 주교재
`,e.textbooks.required.forEach(n=>{t+=`- ${n}
`})),e.textbooks.recommended&&(t+=`### 부교재
`,e.textbooks.recommended.forEach(n=>{t+=`- ${n}
`}));const s=new Blob([t],{type:"text/markdown"});this.download(s,`${r}.md`)}exportRubricAsMarkdown(e,r){let t=`# ${e.assignmentTitle} - 평가 루브릭

`;t+=`**총점**: ${e.totalPoints}점

`,t+=`| 평가항목 | 가중치 | 우수 (90-100) | 보통 (70-89) | 미흡 (0-69) |
`,t+=`|---------|--------|---------------|--------------|-------------|
`,e.criteria.forEach(n=>{t+=`| ${n.name} | ${n.weight}% | ${n.excellent} | ${n.good} | ${n.needsImprovement} |
`});const s=new Blob([t],{type:"text/markdown"});this.download(s,`${r}.md`)}exportRubricAsCSV(e,r){let t=`Assessment Item,Weight,Excellent (90-100),Good (70-89),Needs Improvement (0-69)
`;e.criteria.forEach(n=>{t+=`"${n.name}",${n.weight}%,"${n.excellent}","${n.good}","${n.needsImprovement}"
`});const s=new Blob(["\uFEFF"+t],{type:"text/csv;charset=utf-8"});this.download(s,`${r}.csv`)}exportChatAsMarkdown(e,r){let t=`# 채팅 기록

`;t+=`생성일: ${new Date().toLocaleString("ko-KR")}

`,t+=`---

`,e.forEach(n=>{const i=n.role==="user"?"👤 사용자":"🤖 AI";t+=`### ${i}

`,t+=`${n.content}

`,t+=`---

`});const s=new Blob([t],{type:"text/markdown"});this.download(s,`${r}.md`)}exportSyllabusAsPDF(e,r){const t=new le;let s=20;const n=7,i=t.internal.pageSize.height;t.setFontSize(20),t.text(e.courseInfo.name,20,s),s+=n*2,t.setFontSize(12),t.text(`Credits: ${e.courseInfo.credits}`,20,s),s+=n,t.text(`Hours per week: ${e.courseInfo.hoursPerWeek}`,20,s),s+=n,t.text(`Target: ${e.courseInfo.targetYear}`,20,s),s+=n*2,t.setFontSize(14),t.text("Learning Outcomes",20,s),s+=n,t.setFontSize(10),e.learningOutcomes.forEach((l,u)=>{s>i-20&&(t.addPage(),s=20);const c=`${u+1}. ${l.description}`;t.splitTextToSize(c,170).forEach(g=>{t.text(g,20,s),s+=n})}),s>i-40&&(t.addPage(),s=20),t.setFontSize(14),t.text("Weekly Schedule",20,s),s+=n,t.setFontSize(10),e.weeklyPlans.forEach(l=>{s>i-20&&(t.addPage(),s=20),t.text(`Week ${l.week}: ${l.topic}`,20,s),s+=n}),t.save(`${r}.pdf`)}exportRubricAsPDF(e,r){const t=new le("l","mm","a4");t.setFontSize(16),t.text(e.assignmentTitle,20,20),t.text(`Total Points: ${e.totalPoints}`,20,30);let s=45;t.setFontSize(10),t.text("Criteria",20,s),t.text("Weight",60,s),t.text("Excellent",80,s),t.text("Good",130,s),t.text("Needs Improvement",180,s),t.line(20,s+2,270,s+2),s+=10,e.criteria.forEach(n=>{const i=t.splitTextToSize(n.excellent,45),l=t.splitTextToSize(n.good,45),u=t.splitTextToSize(n.needsImprovement,45),c=Math.max(i.length,l.length,u.length);t.text(n.name,20,s),t.text(`${n.weight}%`,60,s),i.forEach((h,g)=>{t.text(h,80,s+g*5)}),l.forEach((h,g)=>{t.text(h,130,s+g*5)}),u.forEach((h,g)=>{t.text(h,180,s+g*5)}),s+=c*5+5,s>180&&(t.addPage(),s=20)}),t.save(`${r}.pdf`)}exportChatAsPDF(e,r){const t=new le;let s=20;const n=7,i=t.internal.pageSize.height;t.setFontSize(16),t.text("Chat History",20,s),t.setFontSize(10),s+=n,t.text(`Date: ${new Date().toLocaleString()}`,20,s),s+=n*2,e.forEach(l=>{s>i-30&&(t.addPage(),s=20),t.setFontSize(12);const u=l.role==="user"?"User":"Assistant";t.text(u,20,s),s+=n,t.setFontSize(10),t.splitTextToSize(l.content,170).forEach(h=>{s>i-20&&(t.addPage(),s=20),t.text(h,25,s),s+=n}),s+=n}),t.save(`${r}.pdf`)}exportSyllabusAsHTML(e,r){let t=`<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${e.courseInfo.name} - 강의계획서</title>
    <style>
        body { font-family: 'Malgun Gothic', sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; }
        h1 { color: #333; border-bottom: 2px solid #333; padding-bottom: 10px; }
        h2 { color: #555; margin-top: 30px; }
        h3 { color: #777; }
        table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #f5f5f5; }
        .week { background-color: #f9f9f9; margin: 15px 0; padding: 15px; border-radius: 5px; }
    </style>
</head>
<body>
    <h1>${e.courseInfo.name}</h1>
    
    <h2>과목 정보</h2>
    <ul>
        <li><strong>학점</strong>: ${e.courseInfo.credits}</li>
        <li><strong>시수</strong>: 주 ${e.courseInfo.hoursPerWeek}시간</li>
        <li><strong>대상</strong>: ${e.courseInfo.targetYear}학년</li>
        ${e.courseInfo.prerequisites?`<li><strong>선수과목</strong>: ${e.courseInfo.prerequisites}</li>`:""}
    </ul>
    
    <h2>과목 개요</h2>
    <p>${e.courseOverview}</p>
    
    <h2>학습목표</h2>
    <ol>
        ${e.learningOutcomes.map(n=>`<li>${n.description} <em>(${n.bloomCategory})</em></li>`).join(`
        `)}
    </ol>
    
    <h2>주차별 계획</h2>
    ${e.weeklyPlans.map(n=>`
    <div class="week">
        <h3>${n.week}주차: ${n.topic}</h3>
        <p><strong>학습목표</strong>:</p>
        <ul>
            ${n.objectives.map(i=>`<li>${i}</li>`).join(`
            `)}
        </ul>
        ${n.assignments?`<p><strong>과제</strong>: ${n.assignments}</p>`:""}
    </div>
    `).join(`
`)}
    
    <h2>평가 방법</h2>
    <table>
        <tr>
            <th>항목</th>
            <th>비율</th>
        </tr>
        <tr>
            <td>중간고사</td>
            <td>${e.evaluationMethod.midterm}%</td>
        </tr>
        <tr>
            <td>기말고사</td>
            <td>${e.evaluationMethod.final}%</td>
        </tr>
        <tr>
            <td>과제</td>
            <td>${e.evaluationMethod.assignments}%</td>
        </tr>
        <tr>
            <td>출석</td>
            <td>${e.evaluationMethod.attendance}%</td>
        </tr>
        <tr>
            <td>참여도</td>
            <td>${e.evaluationMethod.participation}%</td>
        </tr>
    </table>
</body>
</html>`;const s=new Blob([t],{type:"text/html;charset=utf-8"});this.download(s,`${r}.html`)}download(e,r){const t=URL.createObjectURL(e),s=document.createElement("a");s.href=t,s.download=r,s.click(),URL.revokeObjectURL(t)}async copyToClipboard(e){try{await navigator.clipboard.writeText(e)}catch{const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.left="-999999px",document.body.appendChild(t),t.focus(),t.select(),document.execCommand("copy"),document.body.removeChild(t)}}static downloadPDF(e,r){const t=new le;t.setFont("helvetica"),t.setFontSize(12);const s=t.splitTextToSize(e,170);let n=20;s.forEach(i=>{n>280&&(t.addPage(),n=20),t.text(i,20,n),n+=7}),t.save(`${r}.pdf`)}static downloadMarkdown(e,r){const t=new Blob([e],{type:"text/markdown"}),s=URL.createObjectURL(t),n=document.createElement("a");n.href=s,n.download=`${r}.md`,n.click(),URL.revokeObjectURL(s)}static downloadJSON(e,r){const t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),s=URL.createObjectURL(t),n=document.createElement("a");n.href=s,n.download=`${r}.json`,n.click(),URL.revokeObjectURL(s)}}const Jo=Wo()(Bo((o,e)=>({openAIService:new We({apiKey:""}),storageService:new qo,promptService:new oe,exportService:new de,currentCourse:null,currentRubric:null,currentAssignment:null,generatedContent:null,isGenerating:!1,apiKey:"",selectedModel:"gpt-3.5-turbo",setApiKey:r=>{const{storageService:t}=e(),s=new We({apiKey:r});t.saveApiKey(r),o({apiKey:r,openAIService:s})},setCurrentCourse:r=>{o({currentCourse:r})},setCurrentRubric:r=>{o({currentRubric:r})},setCurrentAssignment:r=>{o({currentAssignment:r})},generateContent:async(r,t)=>{const{openAIService:s}=e();o({isGenerating:!0});try{let n=[];switch(r){case"syllabus":n=oe.generateSyllabusPrompt(t);break;case"rubric":n=oe.generateRubricPrompt(t);break;case"assignment":n=oe.generateAssignmentPrompt(t.objectives||[],t.level||"basic",t.type||"general");break;case"feedback":n=oe.generateFeedbackPrompt(t);break;default:throw new Error(`Unknown content type: ${r}`)}const i=await s.complete(n);o({generatedContent:{type:r,content:i,params:t},isGenerating:!1})}catch(n){throw console.error("Content generation failed:",n),o({isGenerating:!1}),n}},saveContent:r=>{console.log("Content saved:",r)},exportContent:r=>{const{generatedContent:t}=e();if(t)switch(r){case"pdf":de.downloadPDF(t.content,`document_${Date.now()}`);break;case"markdown":de.downloadMarkdown(t.content,`document_${Date.now()}`);break;case"json":de.downloadJSON(t,`document_${Date.now()}`);break;default:throw new Error(`Unknown export format: ${r}`)}}}),{name:"teaching-assistant-storage",partialize:o=>({apiKey:o.apiKey,selectedModel:o.selectedModel,currentCourse:o.currentCourse})})),ue=f.forwardRef(({className:o,variant:e="primary",size:r="md",children:t,disabled:s,onClick:n,type:i="button",useThemeColor:l=!0,style:u,...c},h)=>{const{getAccentColors:g,theme:v}=he(),y=g(),x=v.mode==="dark",d=(y==null?void 0:y.rgb)||"59, 130, 246",b={sm:"h-9 px-3 text-sm",md:"h-10 px-4 py-2 text-base",lg:"h-11 px-8 text-lg"},p="inline-flex items-center justify-center rounded-md font-medium transition-all duration-200",j=()=>{if(s)return"opacity-60 cursor-not-allowed bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400";switch(e){case"primary":return"text-white shadow-sm hover:shadow-md active:scale-95";case"secondary":return"bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 active:scale-95";case"outline":return"bg-white dark:bg-gray-800 border-2 hover:bg-gray-50 dark:hover:bg-gray-700 active:scale-95";case"ghost":return"hover:bg-gray-100 dark:hover:bg-gray-700 active:scale-95";default:return""}},E=()=>{const T={position:"relative",overflow:"hidden",cursor:s?"not-allowed":"pointer"};if(s)return{...T,backgroundColor:x?"#374151":"#e5e7eb",color:x?"#9ca3af":"#6b7280",border:`1px solid ${x?"#4b5563":"#d1d5db"}`,opacity:.6};switch(e){case"primary":return{...T,backgroundColor:`rgb(${d})`,color:"#ffffff",border:`1px solid rgb(${d})`,boxShadow:"0 1px 3px rgba(0,0,0,0.12)",fontWeight:"500"};case"secondary":return{...T,backgroundColor:x?"#374151":"#f3f4f6",color:`rgb(${d})`,border:`1px solid ${x?"#4b5563":"#e5e7eb"}`,fontWeight:"500"};case"outline":return{...T,backgroundColor:x?"rgba(31, 41, 55, 0.5)":"#ffffff",color:`rgb(${d})`,border:`2px solid rgb(${d})`,fontWeight:"500"};case"ghost":return{...T,backgroundColor:"transparent",color:`rgb(${d})`,border:"1px solid transparent",fontWeight:"500"};default:return T}},$=T=>{if(s)return;const C=T.currentTarget;switch(e){case"primary":C.style.backgroundColor=`rgba(${d}, 0.9)`,C.style.boxShadow="0 4px 6px rgba(0,0,0,0.15)",C.style.transform="translateY(-1px)";break;case"secondary":C.style.backgroundColor=x?`rgba(${d}, 0.15)`:`rgba(${d}, 0.08)`;break;case"outline":C.style.backgroundColor=`rgba(${d}, 0.05)`,C.style.borderColor=`rgba(${d}, 0.8)`;break;case"ghost":C.style.backgroundColor=`rgba(${d}, 0.08)`;break}},R=T=>{if(s)return;const C=T.currentTarget;C.style.transform="";const S=E();Object.assign(C.style,S)},M=T=>{if(s)return;const C=T.currentTarget;C.style.transform="scale(0.98)"},F=T=>{if(s)return;const C=T.currentTarget;C.style.transform=e==="primary"?"translateY(-1px)":""},_=T=>{if(console.log("UnifiedButton clicked:",{variant:e,disabled:s,children:t}),s){T.preventDefault(),T.stopPropagation();return}const C=document.createElement("span"),S=T.currentTarget.getBoundingClientRect(),O=Math.max(S.width,S.height),w=T.clientX-S.left-O/2,P=T.clientY-S.top-O/2;C.style.width=C.style.height=O+"px",C.style.left=w+"px",C.style.top=P+"px",C.className="absolute bg-white/30 rounded-full animate-ping pointer-events-none",T.currentTarget.appendChild(C),setTimeout(()=>C.remove(),600),n&&(console.log("Calling onClick handler"),n(T))};return a.jsx("button",{ref:h,className:J(p,b[r],j(),"relative overflow-hidden",o),style:{...E(),...u},disabled:s,onClick:_,onMouseEnter:$,onMouseLeave:R,onMouseDown:M,onMouseUp:F,type:i,...c,children:t})});ue.displayName="UnifiedButton";const Xo=[{title:"강의계획서 생성",description:"AI를 활용한 체계적인 강의계획서 작성",icon:ht,path:"/syllabus"},{title:"루브릭 빌더",description:"평가 기준표 생성 및 관리",icon:ft,path:"/rubric"},{title:"과제 생성",description:"학습 목표에 맞는 과제 설계",icon:gt,path:"/assignment"},{title:"피드백 생성",description:"개인화된 학습 피드백 작성",icon:xt,path:"/feedback"}];function Yo(){const{apiKey:o}=Jo(),e=o&&o.trim().length>0,{getAccentColors:r}=he(),t=r();return a.jsxs("div",{className:"space-y-10 animate-fadeIn",children:[a.jsxs("div",{className:"text-center space-y-4 py-12",children:[a.jsx("h1",{className:"text-5xl font-bold text-slate-900 dark:text-white tracking-tight",children:"Teaching AI"}),a.jsx("p",{className:"text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-balance",children:"한신대학교 교수혁신연구결과"}),a.jsx("p",{className:"text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-balance",children:"AI의 힘으로 더 나은 교육 경험을 만들어보세요"})]}),!e&&a.jsx("div",{className:"bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 rounded-lg p-4",children:a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsx(pt,{className:"h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0"}),a.jsxs("div",{className:"flex-1",children:[a.jsx("h3",{className:"text-base font-medium text-amber-800 dark:text-amber-200",children:"OpenAI API 키가 필요합니다"}),a.jsx("p",{className:"text-sm text-amber-700 dark:text-amber-300 mt-1",children:"AI 기능을 사용하려면 OpenAI API 키를 설정해야 합니다. 모든 AI 기반 도구(강의계획서, 과제, 루브릭, 피드백 생성)를 사용할 수 있습니다."})]}),a.jsx(U,{to:"/settings",className:"flex-shrink-0",children:a.jsxs(ue,{size:"sm",className:"flex items-center space-x-2",children:[a.jsx(vt,{className:"h-4 w-4"}),a.jsx("span",{children:"API 키 설정"})]})})]})}),e&&a.jsx("div",{className:"bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-900/30 rounded-lg p-4",children:a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsx(Me,{className:"h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0"}),a.jsxs("div",{className:"flex-1",children:[a.jsx("h3",{className:"text-base font-medium text-green-800 dark:text-green-200",children:"API 키 설정 완료"}),a.jsx("p",{className:"text-sm text-green-700 dark:text-green-300 mt-1",children:"OpenAI API 키가 설정되어 있습니다. 이제 모든 AI 기능을 사용할 수 있습니다."})]}),a.jsx(U,{to:"/settings",className:"flex-shrink-0",children:a.jsxs(ue,{size:"sm",variant:"outline",className:"flex items-center space-x-2",children:[a.jsx(fr,{className:"h-4 w-4"}),a.jsx("span",{children:"설정 관리"})]})})]})}),a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{className:"text-center",children:[a.jsx("h2",{className:"text-3xl font-bold text-slate-900 dark:text-white mb-2",children:"빠른 작업"}),a.jsx("p",{className:"text-slate-600 dark:text-slate-400",children:"원하는 도구를 선택하여 시작하세요"})]}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:Xo.map((s,n)=>{const i=s.icon;return a.jsx(U,{to:s.path,className:"block animate-scaleIn",style:{animationDelay:`${n*150}ms`},children:a.jsx("div",{className:"bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-lg h-full p-6 group hover:shadow-lg dark:hover:shadow-2xl transition-all duration-200",children:a.jsxs("div",{className:"relative z-10",children:[a.jsxs("div",{className:"flex items-center space-x-4 mb-4",children:[a.jsx("div",{className:`p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${t.from} ${t.to}`,children:a.jsx(i,{className:"h-6 w-6 text-white"})}),a.jsx("div",{children:a.jsx("h3",{className:"font-semibold text-slate-900 dark:text-white text-lg group-hover:text-slate-900 dark:group-hover:text-white transition-colors",children:s.title})})]}),a.jsx("p",{className:"text-slate-600 dark:text-slate-400 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors",children:s.description}),a.jsx("div",{className:"mt-4 text-slate-700 dark:text-slate-300 font-medium group-hover:text-slate-900 dark:group-hover:text-white transition-colors",children:"시작하기 →"})]})})},s.title)})})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[a.jsxs("div",{className:"bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-lg p-6",children:[a.jsxs("div",{className:"mb-4",children:[a.jsx("h3",{className:"text-xl font-semibold text-slate-900 dark:text-white",children:"최근 활동"}),a.jsx("p",{className:"text-sm text-slate-600 dark:text-gray-400",children:"최근에 작업한 문서들을 확인하세요"})]}),a.jsx("div",{className:"flex items-center justify-center h-32 text-slate-500 dark:text-gray-400",children:a.jsx("p",{children:"아직 생성된 문서가 없습니다. 위의 도구들을 사용하여 시작해보세요!"})})]}),a.jsxs("div",{className:"bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-lg p-6",children:[a.jsxs("div",{className:"mb-4",children:[a.jsx("h3",{className:"text-xl font-semibold text-slate-900 dark:text-white",children:"시스템 상태"}),a.jsx("p",{className:"text-sm text-slate-600 dark:text-gray-400",children:"AI 서비스 상태를 확인하세요"})]}),a.jsx("div",{className:"space-y-4",children:a.jsxs("div",{className:"flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-gray-900 border border-slate-200 dark:border-gray-700 transition-all duration-200",children:[a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsx(Me,{className:"h-5 w-5 text-green-600 dark:text-green-500"}),a.jsx("span",{className:"font-medium text-slate-900 dark:text-white",children:"준비 완료"})]}),a.jsx("span",{className:"text-sm font-medium text-slate-700 dark:text-gray-300 bg-slate-100 dark:bg-gray-800 px-2 py-1 rounded-full",children:"정상"})]})}),a.jsx("div",{className:"mt-6",children:a.jsx(U,{to:"/settings",className:"block",children:a.jsx(ue,{variant:"outline",className:"w-full",children:"설정 관리"})})})]})]})]})}const Zo=f.lazy(()=>Q(()=>import("./SyllabusGenerator-BwY-s5tP.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url).then(o=>({default:o.SyllabusGenerator}))),Qo=f.lazy(()=>Q(()=>import("./RubricBuilder-CYMpQx97.js"),__vite__mapDeps([8,1,2,3,4,5,6,9,7]),import.meta.url).then(o=>({default:o.RubricBuilder}))),es=f.lazy(()=>Q(()=>import("./AssignmentGenerator-D1c2HD_2.js"),__vite__mapDeps([10,1,2,3,4,5,6,7]),import.meta.url).then(o=>({default:o.AssignmentGenerator}))),ts=f.lazy(()=>Q(()=>import("./FeedbackGenerator-C7O29UGr.js"),__vite__mapDeps([11,1,2,3,4,5,12,6,7]),import.meta.url).then(o=>({default:o.FeedbackGenerator}))),rs=f.lazy(()=>Q(()=>import("./UserGuide-IgU1mXu7.js"),__vite__mapDeps([13,1,2,3,6,12,7]),import.meta.url).then(o=>({default:o.UserGuide}))),os=f.lazy(()=>Q(()=>import("./Settings-6tkzoY07.js"),__vite__mapDeps([14,1,2,3,5,12,9,7]),import.meta.url).then(o=>({default:o.Settings})));function ss(){return a.jsx(Oe,{children:a.jsx(uo,{children:a.jsx(Gt,{children:a.jsxs("div",{className:"min-h-screen bg-background",children:[a.jsx(po,{}),a.jsx("main",{className:"container mx-auto px-6 py-8 max-w-7xl",children:a.jsx("div",{className:"animate-fadeIn",children:a.jsx(Oe,{children:a.jsx(f.Suspense,{fallback:a.jsx(lo,{size:"lg",text:"페이지를 불러오는 중..."}),children:a.jsxs(Bt,{children:[a.jsx(q,{path:"/",element:a.jsx(Yo,{})}),a.jsx(q,{path:"/syllabus",element:a.jsx(Zo,{})}),a.jsx(q,{path:"/rubric",element:a.jsx(Qo,{})}),a.jsx(q,{path:"/assignment",element:a.jsx(es,{})}),a.jsx(q,{path:"/feedback",element:a.jsx(ts,{})}),a.jsx(q,{path:"/guide",element:a.jsx(rs,{})}),a.jsx(q,{path:"/settings",element:a.jsx(os,{})})]})})})})}),a.jsx(io,{})]})})})})}ye.createRoot(document.getElementById("root")).render(a.jsx(Ve.StrictMode,{children:a.jsx(ss,{})}));export{ht as B,ft as C,de as E,gt as F,fr as K,xt as M,vt as S,ue as U,wr as a,he as b,A as c,J as d,Me as e,Jo as u};
