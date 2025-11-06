const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SyllabusGenerator-CN0w9GTO.js","./ui-vendor-rcE90lUk.js","./react-vendor-oaxG2rvL.js","./PageTitle-Dybl5lrh.js","./sparkles-BAWFebkm.js","./pdf-vendor-h9Wj2YyB.js","./RubricBuilder-DQnojIu3.js","./trash-2-C9ux7vcT.js","./AssignmentGenerator-ZMZtgwtA.js","./FeedbackGenerator-C8tpXnCF.js","./alert-circle-jZdZbUQ1.js","./Settings-BRLiOulm.js"])))=>i.map(i=>d[i]);
var It=Object.defineProperty;var At=(o,e,r)=>e in o?It(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r;var P=(o,e,r)=>At(o,typeof e!="symbol"?e+"":e,r);import{c as Pt,a as $t,u as De,j as a,B as _t,P as Y,b as Mt,d as zt,e as L,f as ue,V as He,R as Ot,g as Lt,h as Ft,i as Dt}from"./ui-vendor-rcE90lUk.js";import{a as Ke,r as g,u as Ht,L as B,g as Kt,R as We,H as Wt,d as Vt,e as q}from"./react-vendor-oaxG2rvL.js";import{E as le,_ as se}from"./pdf-vendor-h9Wj2YyB.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();var be={},Ne=Ke;be.createRoot=Ne.createRoot,be.hydrateRoot=Ne.hydrateRoot;var Se="ToastProvider",[ke,Ut,Gt]=$t("Toast"),[Ve]=Pt("Toast",[Gt]),[Bt,pe]=Ve(Se),Ue=o=>{const{__scopeToast:e,label:r="Notification",duration:t=5e3,swipeDirection:s="right",swipeThreshold:n=50,children:i}=o,[l,p]=g.useState(null),[c,h]=g.useState(0),f=g.useRef(!1),b=g.useRef(!1);return r.trim()||console.error(`Invalid prop \`label\` supplied to \`${Se}\`. Expected non-empty \`string\`.`),a.jsx(ke.Provider,{scope:e,children:a.jsx(Bt,{scope:e,label:r,duration:t,swipeDirection:s,swipeThreshold:n,toastCount:c,viewport:l,onViewportChange:p,onToastAdd:g.useCallback(()=>h(v=>v+1),[]),onToastRemove:g.useCallback(()=>h(v=>v-1),[]),isFocusedToastEscapeKeyDownRef:f,isClosePausedRef:b,children:i})})};Ue.displayName=Se;var Ge="ToastViewport",qt=["F8"],ve="toast.viewportPause",ye="toast.viewportResume",Be=g.forwardRef((o,e)=>{const{__scopeToast:r,hotkey:t=qt,label:s="Notifications ({hotkey})",...n}=o,i=pe(Ge,r),l=Ut(r),p=g.useRef(null),c=g.useRef(null),h=g.useRef(null),f=g.useRef(null),b=De(e,f,i.onViewportChange),v=t.join("+").replace(/Key/g,"").replace(/Digit/g,""),y=i.toastCount>0;g.useEffect(()=>{const d=x=>{var S;t.length!==0&&t.every(E=>x[E]||x.code===E)&&((S=f.current)==null||S.focus())};return document.addEventListener("keydown",d),()=>document.removeEventListener("keydown",d)},[t]),g.useEffect(()=>{const d=p.current,x=f.current;if(y&&d&&x){const m=()=>{if(!i.isClosePausedRef.current){const N=new CustomEvent(ve);x.dispatchEvent(N),i.isClosePausedRef.current=!0}},S=()=>{if(i.isClosePausedRef.current){const N=new CustomEvent(ye);x.dispatchEvent(N),i.isClosePausedRef.current=!1}},E=N=>{!d.contains(N.relatedTarget)&&S()},C=()=>{d.contains(document.activeElement)||S()};return d.addEventListener("focusin",m),d.addEventListener("focusout",E),d.addEventListener("pointermove",m),d.addEventListener("pointerleave",C),window.addEventListener("blur",m),window.addEventListener("focus",S),()=>{d.removeEventListener("focusin",m),d.removeEventListener("focusout",E),d.removeEventListener("pointermove",m),d.removeEventListener("pointerleave",C),window.removeEventListener("blur",m),window.removeEventListener("focus",S)}}},[y,i.isClosePausedRef]);const u=g.useCallback(({tabbingDirection:d})=>{const m=l().map(S=>{const E=S.ref.current,C=[E,...ir(E)];return d==="forwards"?C:C.reverse()});return(d==="forwards"?m.reverse():m).flat()},[l]);return g.useEffect(()=>{const d=f.current;if(d){const x=m=>{var C,N,_;const S=m.altKey||m.ctrlKey||m.metaKey;if(m.key==="Tab"&&!S){const H=document.activeElement,M=m.shiftKey;if(m.target===d&&M){(C=c.current)==null||C.focus();return}const k=u({tabbingDirection:M?"backwards":"forwards"}),G=k.findIndex(j=>j===H);fe(k.slice(G+1))?m.preventDefault():M?(N=c.current)==null||N.focus():(_=h.current)==null||_.focus()}};return d.addEventListener("keydown",x),()=>d.removeEventListener("keydown",x)}},[l,u]),a.jsxs(_t,{ref:p,role:"region","aria-label":s.replace("{hotkey}",v),tabIndex:-1,style:{pointerEvents:y?void 0:"none"},children:[y&&a.jsx(we,{ref:c,onFocusFromOutsideViewport:()=>{const d=u({tabbingDirection:"forwards"});fe(d)}}),a.jsx(ke.Slot,{scope:r,children:a.jsx(Y.ol,{tabIndex:-1,...n,ref:b})}),y&&a.jsx(we,{ref:h,onFocusFromOutsideViewport:()=>{const d=u({tabbingDirection:"backwards"});fe(d)}})]})});Be.displayName=Ge;var qe="ToastFocusProxy",we=g.forwardRef((o,e)=>{const{__scopeToast:r,onFocusFromOutsideViewport:t,...s}=o,n=pe(qe,r);return a.jsx(He,{tabIndex:0,...s,ref:e,style:{position:"fixed"},onFocus:i=>{var c;const l=i.relatedTarget;!((c=n.viewport)!=null&&c.contains(l))&&t()}})});we.displayName=qe;var ne="Toast",Jt="toast.swipeStart",Xt="toast.swipeMove",Yt="toast.swipeCancel",Zt="toast.swipeEnd",Je=g.forwardRef((o,e)=>{const{forceMount:r,open:t,defaultOpen:s,onOpenChange:n,...i}=o,[l,p]=Mt({prop:t,defaultProp:s??!0,onChange:n,caller:ne});return a.jsx(zt,{present:r||l,children:a.jsx(tr,{open:l,...i,ref:e,onClose:()=>p(!1),onPause:ue(o.onPause),onResume:ue(o.onResume),onSwipeStart:L(o.onSwipeStart,c=>{c.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:L(o.onSwipeMove,c=>{const{x:h,y:f}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","move"),c.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${h}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${f}px`)}),onSwipeCancel:L(o.onSwipeCancel,c=>{c.currentTarget.setAttribute("data-swipe","cancel"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:L(o.onSwipeEnd,c=>{const{x:h,y:f}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","end"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${h}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${f}px`),p(!1)})})})});Je.displayName=ne;var[Qt,er]=Ve(ne,{onClose(){}}),tr=g.forwardRef((o,e)=>{const{__scopeToast:r,type:t="foreground",duration:s,open:n,onClose:i,onEscapeKeyDown:l,onPause:p,onResume:c,onSwipeStart:h,onSwipeMove:f,onSwipeCancel:b,onSwipeEnd:v,...y}=o,u=pe(ne,r),[d,x]=g.useState(null),m=De(e,j=>x(j)),S=g.useRef(null),E=g.useRef(null),C=s||u.duration,N=g.useRef(0),_=g.useRef(C),H=g.useRef(0),{onToastAdd:M,onToastRemove:U}=u,z=ue(()=>{var R;(d==null?void 0:d.contains(document.activeElement))&&((R=u.viewport)==null||R.focus()),i()}),k=g.useCallback(j=>{!j||j===1/0||(window.clearTimeout(H.current),N.current=new Date().getTime(),H.current=window.setTimeout(z,j))},[z]);g.useEffect(()=>{const j=u.viewport;if(j){const R=()=>{k(_.current),c==null||c()},I=()=>{const K=new Date().getTime()-N.current;_.current=_.current-K,window.clearTimeout(H.current),p==null||p()};return j.addEventListener(ve,I),j.addEventListener(ye,R),()=>{j.removeEventListener(ve,I),j.removeEventListener(ye,R)}}},[u.viewport,C,p,c,k]),g.useEffect(()=>{n&&!u.isClosePausedRef.current&&k(C)},[n,C,u.isClosePausedRef,k]),g.useEffect(()=>(M(),()=>U()),[M,U]);const G=g.useMemo(()=>d?rt(d):null,[d]);return u.viewport?a.jsxs(a.Fragment,{children:[G&&a.jsx(rr,{__scopeToast:r,role:"status","aria-live":t==="foreground"?"assertive":"polite",children:G}),a.jsx(Qt,{scope:r,onClose:z,children:Ke.createPortal(a.jsx(ke.ItemSlot,{scope:r,children:a.jsx(Ot,{asChild:!0,onEscapeKeyDown:L(l,()=>{u.isFocusedToastEscapeKeyDownRef.current||z(),u.isFocusedToastEscapeKeyDownRef.current=!1}),children:a.jsx(Y.li,{tabIndex:0,"data-state":n?"open":"closed","data-swipe-direction":u.swipeDirection,...y,ref:m,style:{userSelect:"none",touchAction:"none",...o.style},onKeyDown:L(o.onKeyDown,j=>{j.key==="Escape"&&(l==null||l(j.nativeEvent),j.nativeEvent.defaultPrevented||(u.isFocusedToastEscapeKeyDownRef.current=!0,z()))}),onPointerDown:L(o.onPointerDown,j=>{j.button===0&&(S.current={x:j.clientX,y:j.clientY})}),onPointerMove:L(o.onPointerMove,j=>{if(!S.current)return;const R=j.clientX-S.current.x,I=j.clientY-S.current.y,K=!!E.current,F=["left","right"].includes(u.swipeDirection),O=["left","up"].includes(u.swipeDirection)?Math.min:Math.max,ae=F?O(0,R):0,$=F?0:O(0,I),he=j.pointerType==="touch"?10:2,ie={x:ae,y:$},Ce={originalEvent:j,delta:ie};K?(E.current=ie,ce(Xt,f,Ce,{discrete:!1})):Re(ie,u.swipeDirection,he)?(E.current=ie,ce(Jt,h,Ce,{discrete:!1}),j.target.setPointerCapture(j.pointerId)):(Math.abs(R)>he||Math.abs(I)>he)&&(S.current=null)}),onPointerUp:L(o.onPointerUp,j=>{const R=E.current,I=j.target;if(I.hasPointerCapture(j.pointerId)&&I.releasePointerCapture(j.pointerId),E.current=null,S.current=null,R){const K=j.currentTarget,F={originalEvent:j,delta:R};Re(R,u.swipeDirection,u.swipeThreshold)?ce(Zt,v,F,{discrete:!0}):ce(Yt,b,F,{discrete:!0}),K.addEventListener("click",O=>O.preventDefault(),{once:!0})}})})})}),u.viewport)})]}):null}),rr=o=>{const{__scopeToast:e,children:r,...t}=o,s=pe(ne,e),[n,i]=g.useState(!1),[l,p]=g.useState(!1);return nr(()=>i(!0)),g.useEffect(()=>{const c=window.setTimeout(()=>p(!0),1e3);return()=>window.clearTimeout(c)},[]),l?null:a.jsx(Lt,{asChild:!0,children:a.jsx(He,{...t,children:n&&a.jsxs(a.Fragment,{children:[s.label," ",r]})})})},or="ToastTitle",Xe=g.forwardRef((o,e)=>{const{__scopeToast:r,...t}=o;return a.jsx(Y.div,{...t,ref:e})});Xe.displayName=or;var sr="ToastDescription",Ye=g.forwardRef((o,e)=>{const{__scopeToast:r,...t}=o;return a.jsx(Y.div,{...t,ref:e})});Ye.displayName=sr;var Ze="ToastAction",Qe=g.forwardRef((o,e)=>{const{altText:r,...t}=o;return r.trim()?a.jsx(tt,{altText:r,asChild:!0,children:a.jsx(Ee,{...t,ref:e})}):(console.error(`Invalid prop \`altText\` supplied to \`${Ze}\`. Expected non-empty \`string\`.`),null)});Qe.displayName=Ze;var et="ToastClose",Ee=g.forwardRef((o,e)=>{const{__scopeToast:r,...t}=o,s=er(et,r);return a.jsx(tt,{asChild:!0,children:a.jsx(Y.button,{type:"button",...t,ref:e,onClick:L(o.onClick,s.onClose)})})});Ee.displayName=et;var tt=g.forwardRef((o,e)=>{const{__scopeToast:r,altText:t,...s}=o;return a.jsx(Y.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":t||void 0,...s,ref:e})});function rt(o){const e=[];return Array.from(o.childNodes).forEach(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent&&e.push(t.textContent),ar(t)){const s=t.ariaHidden||t.hidden||t.style.display==="none",n=t.dataset.radixToastAnnounceExclude==="";if(!s)if(n){const i=t.dataset.radixToastAnnounceAlt;i&&e.push(i)}else e.push(...rt(t))}}),e}function ce(o,e,r,{discrete:t}){const s=r.originalEvent.currentTarget,n=new CustomEvent(o,{bubbles:!0,cancelable:!0,detail:r});e&&s.addEventListener(o,e,{once:!0}),t?Dt(s,n):s.dispatchEvent(n)}var Re=(o,e,r=0)=>{const t=Math.abs(o.x),s=Math.abs(o.y),n=t>s;return e==="left"||e==="right"?n&&t>r:!n&&s>r};function nr(o=()=>{}){const e=ue(o);Ft(()=>{let r=0,t=0;return r=window.requestAnimationFrame(()=>t=window.requestAnimationFrame(e)),()=>{window.cancelAnimationFrame(r),window.cancelAnimationFrame(t)}},[e])}function ar(o){return o.nodeType===o.ELEMENT_NODE}function ir(o){const e=[],r=document.createTreeWalker(o,NodeFilter.SHOW_ELEMENT,{acceptNode:t=>{const s=t.tagName==="INPUT"&&t.type==="hidden";return t.disabled||t.hidden||s?NodeFilter.FILTER_SKIP:t.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)e.push(r.currentNode);return e}function fe(o){const e=document.activeElement;return o.some(r=>r===e?!0:(r.focus(),document.activeElement!==e))}var lr=Ue,ot=Be,st=Je,nt=Xe,at=Ye,it=Qe,lt=Ee;function ct(o){var e,r,t="";if(typeof o=="string"||typeof o=="number")t+=o;else if(typeof o=="object")if(Array.isArray(o)){var s=o.length;for(e=0;e<s;e++)o[e]&&(r=ct(o[e]))&&(t&&(t+=" "),t+=r)}else for(r in o)o[r]&&(t&&(t+=" "),t+=r);return t}function dt(){for(var o,e,r=0,t="",s=arguments.length;r<s;r++)(o=arguments[r])&&(e=ct(o))&&(t&&(t+=" "),t+=e);return t}const Ie=o=>typeof o=="boolean"?`${o}`:o===0?"0":o,Ae=dt,cr=(o,e)=>r=>{var t;if((e==null?void 0:e.variants)==null)return Ae(o,r==null?void 0:r.class,r==null?void 0:r.className);const{variants:s,defaultVariants:n}=e,i=Object.keys(s).map(c=>{const h=r==null?void 0:r[c],f=n==null?void 0:n[c];if(h===null)return null;const b=Ie(h)||Ie(f);return s[c][b]}),l=r&&Object.entries(r).reduce((c,h)=>{let[f,b]=h;return b===void 0||(c[f]=b),c},{}),p=e==null||(t=e.compoundVariants)===null||t===void 0?void 0:t.reduce((c,h)=>{let{class:f,className:b,...v}=h;return Object.entries(v).every(y=>{let[u,d]=y;return Array.isArray(d)?d.includes({...n,...l}[u]):{...n,...l}[u]===d})?[...c,f,b]:c},[]);return Ae(o,i,p,r==null?void 0:r.class,r==null?void 0:r.className)};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var dr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ur=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),A=(o,e)=>{const r=g.forwardRef(({color:t="currentColor",size:s=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:l="",children:p,...c},h)=>g.createElement("svg",{ref:h,...dr,width:s,height:s,stroke:t,strokeWidth:i?Number(n)*24/Number(s):n,className:["lucide",`lucide-${ur(o)}`,l].join(" "),...c},[...e.map(([f,b])=>g.createElement(f,b)),...Array.isArray(p)?p:[p]]));return r.displayName=`${o}`,r};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=A("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=A("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pe=A("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mt=A("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ht=A("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=A("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr=A("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=A("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gt=A("MessageCircle",[["path",{d:"m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z",key:"v2veuj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hr=A("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xt=A("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fr=A("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=A("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Te="-",gr=o=>{const e=br(o),{conflictingClassGroups:r,conflictingClassGroupModifiers:t}=o;return{getClassGroupId:i=>{const l=i.split(Te);return l[0]===""&&l.length!==1&&l.shift(),vt(l,e)||xr(i)},getConflictingClassGroupIds:(i,l)=>{const p=r[i]||[];return l&&t[i]?[...p,...t[i]]:p}}},vt=(o,e)=>{var i;if(o.length===0)return e.classGroupId;const r=o[0],t=e.nextPart.get(r),s=t?vt(o.slice(1),t):void 0;if(s)return s;if(e.validators.length===0)return;const n=o.join(Te);return(i=e.validators.find(({validator:l})=>l(n)))==null?void 0:i.classGroupId},$e=/^\[(.+)\]$/,xr=o=>{if($e.test(o)){const e=$e.exec(o)[1],r=e==null?void 0:e.substring(0,e.indexOf(":"));if(r)return"arbitrary.."+r}},br=o=>{const{theme:e,prefix:r}=o,t={nextPart:new Map,validators:[]};return yr(Object.entries(o.classGroups),r).forEach(([n,i])=>{je(i,t,n,e)}),t},je=(o,e,r,t)=>{o.forEach(s=>{if(typeof s=="string"){const n=s===""?e:_e(e,s);n.classGroupId=r;return}if(typeof s=="function"){if(vr(s)){je(s(t),e,r,t);return}e.validators.push({validator:s,classGroupId:r});return}Object.entries(s).forEach(([n,i])=>{je(i,_e(e,n),r,t)})})},_e=(o,e)=>{let r=o;return e.split(Te).forEach(t=>{r.nextPart.has(t)||r.nextPart.set(t,{nextPart:new Map,validators:[]}),r=r.nextPart.get(t)}),r},vr=o=>o.isThemeGetter,yr=(o,e)=>e?o.map(([r,t])=>{const s=t.map(n=>typeof n=="string"?e+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([i,l])=>[e+i,l])):n);return[r,s]}):o,wr=o=>{if(o<1)return{get:()=>{},set:()=>{}};let e=0,r=new Map,t=new Map;const s=(n,i)=>{r.set(n,i),e++,e>o&&(e=0,t=r,r=new Map)};return{get(n){let i=r.get(n);if(i!==void 0)return i;if((i=t.get(n))!==void 0)return s(n,i),i},set(n,i){r.has(n)?r.set(n,i):s(n,i)}}},yt="!",jr=o=>{const{separator:e,experimentalParseClassName:r}=o,t=e.length===1,s=e[0],n=e.length,i=l=>{const p=[];let c=0,h=0,f;for(let d=0;d<l.length;d++){let x=l[d];if(c===0){if(x===s&&(t||l.slice(d,d+n)===e)){p.push(l.slice(h,d)),h=d+n;continue}if(x==="/"){f=d;continue}}x==="["?c++:x==="]"&&c--}const b=p.length===0?l:l.substring(h),v=b.startsWith(yt),y=v?b.substring(1):b,u=f&&f>h?f-h:void 0;return{modifiers:p,hasImportantModifier:v,baseClassName:y,maybePostfixModifierPosition:u}};return r?l=>r({className:l,parseClassName:i}):i},Sr=o=>{if(o.length<=1)return o;const e=[];let r=[];return o.forEach(t=>{t[0]==="["?(e.push(...r.sort(),t),r=[]):r.push(t)}),e.push(...r.sort()),e},kr=o=>({cache:wr(o.cacheSize),parseClassName:jr(o),...gr(o)}),Er=/\s+/,Tr=(o,e)=>{const{parseClassName:r,getClassGroupId:t,getConflictingClassGroupIds:s}=e,n=[],i=o.trim().split(Er);let l="";for(let p=i.length-1;p>=0;p-=1){const c=i[p],{modifiers:h,hasImportantModifier:f,baseClassName:b,maybePostfixModifierPosition:v}=r(c);let y=!!v,u=t(y?b.substring(0,v):b);if(!u){if(!y){l=c+(l.length>0?" "+l:l);continue}if(u=t(b),!u){l=c+(l.length>0?" "+l:l);continue}y=!1}const d=Sr(h).join(":"),x=f?d+yt:d,m=x+u;if(n.includes(m))continue;n.push(m);const S=s(u,y);for(let E=0;E<S.length;++E){const C=S[E];n.push(x+C)}l=c+(l.length>0?" "+l:l)}return l};function Cr(){let o=0,e,r,t="";for(;o<arguments.length;)(e=arguments[o++])&&(r=wt(e))&&(t&&(t+=" "),t+=r);return t}const wt=o=>{if(typeof o=="string")return o;let e,r="";for(let t=0;t<o.length;t++)o[t]&&(e=wt(o[t]))&&(r&&(r+=" "),r+=e);return r};function Nr(o,...e){let r,t,s,n=i;function i(p){const c=e.reduce((h,f)=>f(h),o());return r=kr(c),t=r.cache.get,s=r.cache.set,n=l,l(p)}function l(p){const c=t(p);if(c)return c;const h=Tr(p,r);return s(p,h),h}return function(){return n(Cr.apply(null,arguments))}}const T=o=>{const e=r=>r[o]||[];return e.isThemeGetter=!0,e},jt=/^\[(?:([a-z-]+):)?(.+)\]$/i,Rr=/^\d+\/\d+$/,Ir=new Set(["px","full","screen"]),Ar=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Pr=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,$r=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,_r=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Mr=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,D=o=>J(o)||Ir.has(o)||Rr.test(o),W=o=>Z(o,"length",Wr),J=o=>!!o&&!Number.isNaN(Number(o)),ge=o=>Z(o,"number",J),ee=o=>!!o&&Number.isInteger(Number(o)),zr=o=>o.endsWith("%")&&J(o.slice(0,-1)),w=o=>jt.test(o),V=o=>Ar.test(o),Or=new Set(["length","size","percentage"]),Lr=o=>Z(o,Or,St),Fr=o=>Z(o,"position",St),Dr=new Set(["image","url"]),Hr=o=>Z(o,Dr,Ur),Kr=o=>Z(o,"",Vr),te=()=>!0,Z=(o,e,r)=>{const t=jt.exec(o);return t?t[1]?typeof e=="string"?t[1]===e:e.has(t[1]):r(t[2]):!1},Wr=o=>Pr.test(o)&&!$r.test(o),St=()=>!1,Vr=o=>_r.test(o),Ur=o=>Mr.test(o),Gr=()=>{const o=T("colors"),e=T("spacing"),r=T("blur"),t=T("brightness"),s=T("borderColor"),n=T("borderRadius"),i=T("borderSpacing"),l=T("borderWidth"),p=T("contrast"),c=T("grayscale"),h=T("hueRotate"),f=T("invert"),b=T("gap"),v=T("gradientColorStops"),y=T("gradientColorStopPositions"),u=T("inset"),d=T("margin"),x=T("opacity"),m=T("padding"),S=T("saturate"),E=T("scale"),C=T("sepia"),N=T("skew"),_=T("space"),H=T("translate"),M=()=>["auto","contain","none"],U=()=>["auto","hidden","clip","visible","scroll"],z=()=>["auto",w,e],k=()=>[w,e],G=()=>["",D,W],j=()=>["auto",J,w],R=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],I=()=>["solid","dashed","dotted","double","none"],K=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],F=()=>["start","end","center","between","around","evenly","stretch"],O=()=>["","0",w],ae=()=>["auto","avoid","all","avoid-page","page","left","right","column"],$=()=>[J,w];return{cacheSize:500,separator:":",theme:{colors:[te],spacing:[D,W],blur:["none","",V,w],brightness:$(),borderColor:[o],borderRadius:["none","","full",V,w],borderSpacing:k(),borderWidth:G(),contrast:$(),grayscale:O(),hueRotate:$(),invert:O(),gap:k(),gradientColorStops:[o],gradientColorStopPositions:[zr,W],inset:z(),margin:z(),opacity:$(),padding:k(),saturate:$(),scale:$(),sepia:O(),skew:$(),space:k(),translate:k()},classGroups:{aspect:[{aspect:["auto","square","video",w]}],container:["container"],columns:[{columns:[V]}],"break-after":[{"break-after":ae()}],"break-before":[{"break-before":ae()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...R(),w]}],overflow:[{overflow:U()}],"overflow-x":[{"overflow-x":U()}],"overflow-y":[{"overflow-y":U()}],overscroll:[{overscroll:M()}],"overscroll-x":[{"overscroll-x":M()}],"overscroll-y":[{"overscroll-y":M()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[u]}],"inset-x":[{"inset-x":[u]}],"inset-y":[{"inset-y":[u]}],start:[{start:[u]}],end:[{end:[u]}],top:[{top:[u]}],right:[{right:[u]}],bottom:[{bottom:[u]}],left:[{left:[u]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",ee,w]}],basis:[{basis:z()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",w]}],grow:[{grow:O()}],shrink:[{shrink:O()}],order:[{order:["first","last","none",ee,w]}],"grid-cols":[{"grid-cols":[te]}],"col-start-end":[{col:["auto",{span:["full",ee,w]},w]}],"col-start":[{"col-start":j()}],"col-end":[{"col-end":j()}],"grid-rows":[{"grid-rows":[te]}],"row-start-end":[{row:["auto",{span:[ee,w]},w]}],"row-start":[{"row-start":j()}],"row-end":[{"row-end":j()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",w]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",w]}],gap:[{gap:[b]}],"gap-x":[{"gap-x":[b]}],"gap-y":[{"gap-y":[b]}],"justify-content":[{justify:["normal",...F()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...F(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...F(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[m]}],px:[{px:[m]}],py:[{py:[m]}],ps:[{ps:[m]}],pe:[{pe:[m]}],pt:[{pt:[m]}],pr:[{pr:[m]}],pb:[{pb:[m]}],pl:[{pl:[m]}],m:[{m:[d]}],mx:[{mx:[d]}],my:[{my:[d]}],ms:[{ms:[d]}],me:[{me:[d]}],mt:[{mt:[d]}],mr:[{mr:[d]}],mb:[{mb:[d]}],ml:[{ml:[d]}],"space-x":[{"space-x":[_]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[_]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",w,e]}],"min-w":[{"min-w":[w,e,"min","max","fit"]}],"max-w":[{"max-w":[w,e,"none","full","min","max","fit","prose",{screen:[V]},V]}],h:[{h:[w,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[w,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[w,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[w,e,"auto","min","max","fit"]}],"font-size":[{text:["base",V,W]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",ge]}],"font-family":[{font:[te]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",w]}],"line-clamp":[{"line-clamp":["none",J,ge]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",D,w]}],"list-image":[{"list-image":["none",w]}],"list-style-type":[{list:["none","disc","decimal",w]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[o]}],"placeholder-opacity":[{"placeholder-opacity":[x]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[o]}],"text-opacity":[{"text-opacity":[x]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...I(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",D,W]}],"underline-offset":[{"underline-offset":["auto",D,w]}],"text-decoration-color":[{decoration:[o]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:k()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",w]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",w]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[x]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...R(),Fr]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Lr]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Hr]}],"bg-color":[{bg:[o]}],"gradient-from-pos":[{from:[y]}],"gradient-via-pos":[{via:[y]}],"gradient-to-pos":[{to:[y]}],"gradient-from":[{from:[v]}],"gradient-via":[{via:[v]}],"gradient-to":[{to:[v]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[x]}],"border-style":[{border:[...I(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[x]}],"divide-style":[{divide:I()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...I()]}],"outline-offset":[{"outline-offset":[D,w]}],"outline-w":[{outline:[D,W]}],"outline-color":[{outline:[o]}],"ring-w":[{ring:G()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[o]}],"ring-opacity":[{"ring-opacity":[x]}],"ring-offset-w":[{"ring-offset":[D,W]}],"ring-offset-color":[{"ring-offset":[o]}],shadow:[{shadow:["","inner","none",V,Kr]}],"shadow-color":[{shadow:[te]}],opacity:[{opacity:[x]}],"mix-blend":[{"mix-blend":[...K(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":K()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[t]}],contrast:[{contrast:[p]}],"drop-shadow":[{"drop-shadow":["","none",V,w]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[h]}],invert:[{invert:[f]}],saturate:[{saturate:[S]}],sepia:[{sepia:[C]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[t]}],"backdrop-contrast":[{"backdrop-contrast":[p]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[h]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[x]}],"backdrop-saturate":[{"backdrop-saturate":[S]}],"backdrop-sepia":[{"backdrop-sepia":[C]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",w]}],duration:[{duration:$()}],ease:[{ease:["linear","in","out","in-out",w]}],delay:[{delay:$()}],animate:[{animate:["none","spin","ping","pulse","bounce",w]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[E]}],"scale-x":[{"scale-x":[E]}],"scale-y":[{"scale-y":[E]}],rotate:[{rotate:[ee,w]}],"translate-x":[{"translate-x":[H]}],"translate-y":[{"translate-y":[H]}],"skew-x":[{"skew-x":[N]}],"skew-y":[{"skew-y":[N]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",w]}],accent:[{accent:["auto",o]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",w]}],"caret-color":[{caret:[o]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":k()}],"scroll-mx":[{"scroll-mx":k()}],"scroll-my":[{"scroll-my":k()}],"scroll-ms":[{"scroll-ms":k()}],"scroll-me":[{"scroll-me":k()}],"scroll-mt":[{"scroll-mt":k()}],"scroll-mr":[{"scroll-mr":k()}],"scroll-mb":[{"scroll-mb":k()}],"scroll-ml":[{"scroll-ml":k()}],"scroll-p":[{"scroll-p":k()}],"scroll-px":[{"scroll-px":k()}],"scroll-py":[{"scroll-py":k()}],"scroll-ps":[{"scroll-ps":k()}],"scroll-pe":[{"scroll-pe":k()}],"scroll-pt":[{"scroll-pt":k()}],"scroll-pr":[{"scroll-pr":k()}],"scroll-pb":[{"scroll-pb":k()}],"scroll-pl":[{"scroll-pl":k()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",w]}],fill:[{fill:[o,"none"]}],"stroke-w":[{stroke:[D,W,ge]}],stroke:[{stroke:[o,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},Br=Nr(Gr);function Q(...o){return Br(dt(o))}const qr=lr,kt=g.forwardRef(({className:o,...e},r)=>a.jsx(ot,{ref:r,className:Q("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",o),...e}));kt.displayName=ot.displayName;const Jr=cr("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),Xr=g.forwardRef(({className:o,variant:e,...r},t)=>a.jsx(st,{ref:t,className:Q(Jr({variant:e}),o),...r}));Xr.displayName=st.displayName;const Yr=g.forwardRef(({className:o,...e},r)=>a.jsx(it,{ref:r,className:Q("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",o),...e}));Yr.displayName=it.displayName;const Zr=g.forwardRef(({className:o,...e},r)=>a.jsx(lt,{ref:r,className:Q("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",o),"toast-close":"",...e,children:a.jsx(bt,{className:"h-4 w-4"})}));Zr.displayName=lt.displayName;const Qr=g.forwardRef(({className:o,...e},r)=>a.jsx(nt,{ref:r,className:Q("text-sm font-semibold",o),...e}));Qr.displayName=nt.displayName;const eo=g.forwardRef(({className:o,...e},r)=>a.jsx(at,{ref:r,className:Q("text-sm opacity-90",o),...e}));eo.displayName=at.displayName;const to=()=>a.jsx(qr,{children:a.jsx(kt,{})});class Me extends g.Component{constructor(){super(...arguments);P(this,"state",{hasError:!1,error:null,errorInfo:null});P(this,"handleReset",()=>{this.setState({hasError:!1,error:null,errorInfo:null})});P(this,"handleReload",()=>{window.location.reload()});P(this,"handleGoHome",()=>{window.location.href="/"})}static getDerivedStateFromError(r){return{hasError:!0,error:r,errorInfo:null}}componentDidCatch(r,t){console.error("ErrorBoundary caught an error:",r,t),this.setState({error:r,errorInfo:t})}render(){return this.state.hasError?this.props.fallback?this.props.fallback:a.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50",children:a.jsx("div",{className:"max-w-lg w-full px-6",children:a.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-8",children:[a.jsx("div",{className:"flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full",children:a.jsx(ut,{className:"w-6 h-6 text-red-600"})}),a.jsx("h1",{className:"mt-4 text-2xl font-bold text-center text-gray-900",children:"문제가 발생했습니다"}),a.jsx("p",{className:"mt-2 text-center text-gray-600",children:"예상치 못한 오류가 발생했습니다. 불편을 드려 죄송합니다."}),!1,a.jsxs("div",{className:"mt-6 flex flex-col gap-3",children:[a.jsxs("button",{onClick:this.handleReset,className:"w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",children:[a.jsx(hr,{className:"w-4 h-4"}),"다시 시도"]}),a.jsx("button",{onClick:this.handleReload,className:"w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors",children:"페이지 새로고침"}),a.jsxs("button",{onClick:this.handleGoHome,className:"w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors",children:[a.jsx(ft,{className:"w-4 h-4"}),"홈으로 이동"]})]})]})})}):this.props.children}}const ro=({size:o="md",text:e="로딩 중..."})=>{const r={sm:"w-8 h-8",md:"w-12 h-12",lg:"w-16 h-16"};return a.jsxs("div",{className:"flex flex-col items-center justify-center p-8",children:[a.jsxs("div",{className:`${r[o]} relative`,children:[a.jsx("div",{className:"absolute inset-0 border-4 border-gray-200 rounded-full"}),a.jsx("div",{className:"absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"})]}),e&&a.jsx("p",{className:"mt-4 text-gray-600 text-sm",children:e})]})},ze=[{path:"/",label:"대시보드",icon:ft},{path:"/syllabus",label:"강의계획서",icon:pt},{path:"/rubric",label:"루브릭",icon:mt},{path:"/assignment",label:"과제",icon:ht},{path:"/feedback",label:"피드백",icon:gt},{path:"/settings",label:"설정",icon:xt}];function oo(){const o=Ht(),[e,r]=g.useState(!1),t=()=>{r(!e)};return a.jsx("nav",{className:"glass-card sticky top-0 z-50 border-b border-white/20",children:a.jsxs("div",{className:"container mx-auto px-6 max-w-7xl",children:[a.jsxs("div",{className:"flex items-center justify-between h-20",children:[a.jsxs("div",{className:"flex items-center space-x-12",children:[a.jsxs(B,{to:"/",className:"flex items-center space-x-3 group",children:[a.jsx("div",{className:"p-2 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105",children:a.jsx(fr,{className:"h-7 w-7 text-white"})}),a.jsxs("div",{children:[a.jsx("span",{className:"text-2xl font-bold gradient-text",children:"Teaching AI"}),a.jsx("div",{className:"text-xs text-slate-500 font-medium",children:"한신대학교 교수혁신연구결과"})]})]}),a.jsx("div",{className:"hidden lg:flex items-center space-x-2",children:ze.map(s=>{const n=s.icon,i=o.pathname===s.path;return a.jsx(B,{to:s.path,children:a.jsxs("div",{className:`nav-item ${i?"active":""} flex items-center space-x-2`,children:[a.jsx(n,{className:"h-4 w-4"}),a.jsx("span",{children:s.label})]})},s.path)})})]}),a.jsxs("div",{className:"flex items-center space-x-4",children:[a.jsx("button",{className:"btn-secondary text-sm hidden md:block",children:"도움말"}),a.jsxs("div",{className:"hidden md:flex items-center space-x-2 text-sm text-slate-600",children:[a.jsx("div",{className:"w-2 h-2 bg-gray-500 rounded-full animate-pulse"}),a.jsx("span",{className:"font-medium",children:"AI 준비 완료"})]}),a.jsx("button",{onClick:t,className:"lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200","aria-label":"메뉴 열기",children:e?a.jsx(bt,{className:"h-6 w-6 text-slate-700"}):a.jsx(mr,{className:"h-6 w-6 text-slate-700"})})]})]}),e&&a.jsx("div",{className:"lg:hidden",children:a.jsxs("div",{className:"px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-sm rounded-lg mt-2 border border-white/20",children:[ze.map(s=>{const n=s.icon,i=o.pathname===s.path;return a.jsxs(B,{to:s.path,onClick:()=>r(!1),className:`${i?"bg-gray-100 text-gray-800":"text-slate-700 hover:bg-slate-50 hover:text-slate-900"} group flex items-center px-3 py-2 text-base font-medium rounded-lg transition-colors duration-200`,children:[a.jsx(n,{className:"mr-3 h-5 w-5"}),s.label]},s.path)}),a.jsxs("div",{className:"border-t border-slate-200 pt-3 mt-3",children:[a.jsx("button",{className:"w-full text-left px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors duration-200",children:"도움말"}),a.jsxs("div",{className:"flex items-center px-3 py-2 text-sm text-slate-600",children:[a.jsx("div",{className:"w-2 h-2 bg-gray-500 rounded-full animate-pulse mr-2"}),a.jsx("span",{className:"font-medium",children:"AI 준비 완료"})]})]})]})})]})})}const so={},Oe=o=>{let e;const r=new Set,t=(h,f)=>{const b=typeof h=="function"?h(e):h;if(!Object.is(b,e)){const v=e;e=f??(typeof b!="object"||b===null)?b:Object.assign({},e,b),r.forEach(y=>y(e,v))}},s=()=>e,p={setState:t,getState:s,getInitialState:()=>c,subscribe:h=>(r.add(h),()=>r.delete(h)),destroy:()=>{(so?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}},c=e=o(t,s,p);return p},no=o=>o?Oe(o):Oe;var Et={exports:{}},Tt={},Ct={exports:{}},Nt={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X=g;function ao(o,e){return o===e&&(o!==0||1/o===1/e)||o!==o&&e!==e}var io=typeof Object.is=="function"?Object.is:ao,lo=X.useState,co=X.useEffect,uo=X.useLayoutEffect,po=X.useDebugValue;function mo(o,e){var r=e(),t=lo({inst:{value:r,getSnapshot:e}}),s=t[0].inst,n=t[1];return uo(function(){s.value=r,s.getSnapshot=e,xe(s)&&n({inst:s})},[o,r,e]),co(function(){return xe(s)&&n({inst:s}),o(function(){xe(s)&&n({inst:s})})},[o]),po(r),r}function xe(o){var e=o.getSnapshot;o=o.value;try{var r=e();return!io(o,r)}catch{return!0}}function ho(o,e){return e()}var fo=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?ho:mo;Nt.useSyncExternalStore=X.useSyncExternalStore!==void 0?X.useSyncExternalStore:fo;Ct.exports=Nt;var go=Ct.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var me=g,xo=go;function bo(o,e){return o===e&&(o!==0||1/o===1/e)||o!==o&&e!==e}var vo=typeof Object.is=="function"?Object.is:bo,yo=xo.useSyncExternalStore,wo=me.useRef,jo=me.useEffect,So=me.useMemo,ko=me.useDebugValue;Tt.useSyncExternalStoreWithSelector=function(o,e,r,t,s){var n=wo(null);if(n.current===null){var i={hasValue:!1,value:null};n.current=i}else i=n.current;n=So(function(){function p(v){if(!c){if(c=!0,h=v,v=t(v),s!==void 0&&i.hasValue){var y=i.value;if(s(y,v))return f=y}return f=v}if(y=f,vo(h,v))return y;var u=t(v);return s!==void 0&&s(y,u)?(h=v,y):(h=v,f=u)}var c=!1,h,f,b=r===void 0?null:r;return[function(){return p(e())},b===null?void 0:function(){return p(b())}]},[e,r,t,s]);var l=yo(o,n[0],n[1]);return jo(function(){i.hasValue=!0,i.value=l},[l]),ko(l),l};Et.exports=Tt;var Eo=Et.exports;const To=Kt(Eo),Rt={},{useDebugValue:Co}=We,{useSyncExternalStoreWithSelector:No}=To;let Le=!1;const Ro=o=>o;function Io(o,e=Ro,r){(Rt?"production":void 0)!=="production"&&r&&!Le&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Le=!0);const t=No(o.subscribe,o.getState,o.getServerState||o.getInitialState,e,r);return Co(t),t}const Ao=o=>{(Rt?"production":void 0)!=="production"&&typeof o!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof o=="function"?no(o):o,r=(t,s)=>Io(e,t,s);return Object.assign(r,e),r},Po=o=>Ao,$o={};function _o(o,e){let r;try{r=o()}catch{return}return{getItem:s=>{var n;const i=p=>p===null?null:JSON.parse(p,void 0),l=(n=r.getItem(s))!=null?n:null;return l instanceof Promise?l.then(i):i(l)},setItem:(s,n)=>r.setItem(s,JSON.stringify(n,void 0)),removeItem:s=>r.removeItem(s)}}const oe=o=>e=>{try{const r=o(e);return r instanceof Promise?r:{then(t){return oe(t)(r)},catch(t){return this}}}catch(r){return{then(t){return this},catch(t){return oe(t)(r)}}}},Mo=(o,e)=>(r,t,s)=>{let n={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:d=>d,version:0,merge:(d,x)=>({...x,...d}),...e},i=!1;const l=new Set,p=new Set;let c;try{c=n.getStorage()}catch{}if(!c)return o((...d)=>{console.warn(`[zustand persist middleware] Unable to update item '${n.name}', the given storage is currently unavailable.`),r(...d)},t,s);const h=oe(n.serialize),f=()=>{const d=n.partialize({...t()});let x;const m=h({state:d,version:n.version}).then(S=>c.setItem(n.name,S)).catch(S=>{x=S});if(x)throw x;return m},b=s.setState;s.setState=(d,x)=>{b(d,x),f()};const v=o((...d)=>{r(...d),f()},t,s);let y;const u=()=>{var d;if(!c)return;i=!1,l.forEach(m=>m(t()));const x=((d=n.onRehydrateStorage)==null?void 0:d.call(n,t()))||void 0;return oe(c.getItem.bind(c))(n.name).then(m=>{if(m)return n.deserialize(m)}).then(m=>{if(m)if(typeof m.version=="number"&&m.version!==n.version){if(n.migrate)return n.migrate(m.state,m.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return m.state}).then(m=>{var S;return y=n.merge(m,(S=t())!=null?S:v),r(y,!0),f()}).then(()=>{x==null||x(y,void 0),i=!0,p.forEach(m=>m(y))}).catch(m=>{x==null||x(void 0,m)})};return s.persist={setOptions:d=>{n={...n,...d},d.getStorage&&(c=d.getStorage())},clearStorage:()=>{c==null||c.removeItem(n.name)},getOptions:()=>n,rehydrate:()=>u(),hasHydrated:()=>i,onHydrate:d=>(l.add(d),()=>{l.delete(d)}),onFinishHydration:d=>(p.add(d),()=>{p.delete(d)})},u(),y||v},zo=(o,e)=>(r,t,s)=>{let n={storage:_o(()=>localStorage),partialize:u=>u,version:0,merge:(u,d)=>({...d,...u}),...e},i=!1;const l=new Set,p=new Set;let c=n.storage;if(!c)return o((...u)=>{console.warn(`[zustand persist middleware] Unable to update item '${n.name}', the given storage is currently unavailable.`),r(...u)},t,s);const h=()=>{const u=n.partialize({...t()});return c.setItem(n.name,{state:u,version:n.version})},f=s.setState;s.setState=(u,d)=>{f(u,d),h()};const b=o((...u)=>{r(...u),h()},t,s);s.getInitialState=()=>b;let v;const y=()=>{var u,d;if(!c)return;i=!1,l.forEach(m=>{var S;return m((S=t())!=null?S:b)});const x=((d=n.onRehydrateStorage)==null?void 0:d.call(n,(u=t())!=null?u:b))||void 0;return oe(c.getItem.bind(c))(n.name).then(m=>{if(m)if(typeof m.version=="number"&&m.version!==n.version){if(n.migrate)return[!0,n.migrate(m.state,m.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,m.state];return[!1,void 0]}).then(m=>{var S;const[E,C]=m;if(v=n.merge(C,(S=t())!=null?S:b),r(v,!0),E)return h()}).then(()=>{x==null||x(v,void 0),v=t(),i=!0,p.forEach(m=>m(v))}).catch(m=>{x==null||x(void 0,m)})};return s.persist={setOptions:u=>{n={...n,...u},u.storage&&(c=u.storage)},clearStorage:()=>{c==null||c.removeItem(n.name)},getOptions:()=>n,rehydrate:()=>y(),hasHydrated:()=>i,onHydrate:u=>(l.add(u),()=>{l.delete(u)}),onFinishHydration:u=>(p.add(u),()=>{p.delete(u)})},n.skipHydration||y(),v||b},Oo=(o,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?(($o?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),Mo(o,e)):zo(o,e),Lo=Oo;class Fe{constructor(e){P(this,"apiKey");P(this,"baseURL","https://api.openai.com/v1");P(this,"model");P(this,"temperature");P(this,"maxTokens");this.apiKey=e.apiKey,this.model=e.model||"gpt-3.5-turbo",this.temperature=e.temperature||.7,this.maxTokens=e.maxTokens||2e3}async complete(e){var s;const r=await fetch(`${this.baseURL}/chat/completions`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.apiKey}`},body:JSON.stringify({model:this.model,messages:e,temperature:this.temperature,max_tokens:this.maxTokens,stream:!1})});if(!r.ok){const n=await r.json().catch(()=>({error:{message:r.statusText}}));throw new Error(`OpenAI API error: ${((s=n.error)==null?void 0:s.message)||r.statusText}`)}return(await r.json()).choices[0].message.content}async*streamComplete(e){var i,l,p,c;const r=await fetch(`${this.baseURL}/chat/completions`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.apiKey}`},body:JSON.stringify({model:this.model,messages:e,temperature:this.temperature,max_tokens:this.maxTokens,stream:!0})});if(!r.ok){const h=await r.json().catch(()=>({error:{message:r.statusText}}));throw new Error(`OpenAI API error: ${((i=h.error)==null?void 0:i.message)||r.statusText}`)}const t=(l=r.body)==null?void 0:l.getReader(),s=new TextDecoder;if(!t)throw new Error("Response body is not readable");let n="";try{for(;;){const{done:h,value:f}=await t.read();if(h)break;n+=s.decode(f,{stream:!0});const b=n.split(`
`);n=b.pop()||"";for(const v of b){const y=v.trim();if(y.startsWith("data: ")){const u=y.slice(6);if(u==="[DONE]")return;try{const x=(c=(p=JSON.parse(u).choices[0])==null?void 0:p.delta)==null?void 0:c.content;x&&(yield x)}catch(d){console.debug("Failed to parse streaming chunk:",d)}}}}}finally{t.releaseLock()}}async validateApiKey(){try{return(await fetch(`${this.baseURL}/models`,{headers:{Authorization:`Bearer ${this.apiKey}`}})).ok}catch{return!1}}async getAvailableModels(){const e=await fetch(`${this.baseURL}/models`,{headers:{Authorization:`Bearer ${this.apiKey}`}});if(!e.ok)throw new Error("Failed to fetch models");return(await e.json()).data.filter(t=>t.id.includes("gpt")).map(t=>t.id).sort()}updateConfig(e){e.apiKey&&(this.apiKey=e.apiKey),e.model&&(this.model=e.model),e.temperature!==void 0&&(this.temperature=e.temperature),e.maxTokens!==void 0&&(this.maxTokens=e.maxTokens)}}class Fo{constructor(){P(this,"PREFIX","ta_ai_");P(this,"ENCRYPTION_KEY","teaching-assistant-2024")}saveApiKey(e){const r=this.encrypt(e);localStorage.setItem(`${this.PREFIX}api_key`,r)}getApiKey(){const e=localStorage.getItem(`${this.PREFIX}api_key`);if(!e)return null;try{return this.decrypt(e)}catch{return this.removeApiKey(),null}}removeApiKey(){localStorage.removeItem(`${this.PREFIX}api_key`)}saveChatHistory(e){const r=e.slice(-100);this.save("chat_history",r)}getChatHistory(){return this.get("chat_history")||[]}clearChatHistory(){this.remove("chat_history")}saveSyllabus(e){const r=this.getSyllabi(),t=r.findIndex(n=>n.courseInfo.name===e.courseInfo.name);t>=0?r[t]=e:r.push(e);const s=r.slice(-20);this.save("syllabi",s),this.addRecentWork({type:"syllabus",title:e.courseInfo.name,data:e})}getSyllabi(){return this.get("syllabi")||[]}getSyllabus(e){return this.getSyllabi().find(t=>t.courseInfo.name===e)||null}deleteSyllabus(e){const t=this.getSyllabi().filter(s=>s.courseInfo.name!==e);this.save("syllabi",t)}saveRubric(e){const r=this.getRubrics(),t=r.findIndex(n=>n.assignmentTitle===e.assignmentTitle);t>=0?r[t]=e:r.push(e);const s=r.slice(-30);this.save("rubrics",s),this.addRecentWork({type:"rubric",title:e.assignmentTitle,data:e})}getRubrics(){return this.get("rubrics")||[]}getRubric(e){return this.getRubrics().find(t=>t.assignmentTitle===e)||null}saveAssignment(e){const r=this.getAssignments(),t=r.findIndex(n=>n.title===e.title);t>=0?r[t]=e:r.push(e);const s=r.slice(-30);this.save("assignments",s),this.addRecentWork({type:"assignment",title:e.title,data:e})}getAssignments(){return this.get("assignments")||[]}savePreferences(e){const t={...this.getPreferences(),...e};this.save("preferences",t)}getPreferences(){const e=this.get("preferences");return{...{theme:"system",language:"ko",model:"gpt-3.5-turbo",temperature:.7,maxTokens:2e3,autoSave:!0},...e}}addRecentWork(e){const r=this.getRecentWork(),t={...e,id:this.generateId(),timestamp:new Date().toISOString()};r.unshift(t);const s=r.slice(0,50);this.save("recent_work",s)}getRecentWork(){return this.get("recent_work")||[]}exportAllData(){return{chatHistory:this.getChatHistory(),syllabi:this.getSyllabi(),rubrics:this.getRubrics(),assignments:this.getAssignments(),quizzes:this.get("quizzes")||[],preferences:this.getPreferences(),recentWork:this.getRecentWork()}}importData(e){e.chatHistory&&this.saveChatHistory(e.chatHistory),e.syllabi&&this.save("syllabi",e.syllabi),e.rubrics&&this.save("rubrics",e.rubrics),e.assignments&&this.save("assignments",e.assignments),e.quizzes&&this.save("quizzes",e.quizzes),e.preferences&&this.savePreferences(e.preferences),e.recentWork&&this.save("recent_work",e.recentWork)}clearAll(){Object.keys(localStorage).forEach(r=>{r.startsWith(this.PREFIX)&&localStorage.removeItem(r)})}getStorageSize(){let e=0;return Object.keys(localStorage).forEach(t=>{if(t.startsWith(this.PREFIX)){const s=localStorage.getItem(t)||"";e+=t.length+s.length}}),e}save(e,r){try{const t=JSON.stringify(r);localStorage.setItem(`${this.PREFIX}${e}`,t)}catch(t){if(console.error(`Failed to save ${e}:`,t),t instanceof DOMException&&t.code===22){this.cleanupOldData();try{const s=JSON.stringify(r);localStorage.setItem(`${this.PREFIX}${e}`,s)}catch{throw new Error("Storage quota exceeded")}}}}get(e){try{const r=localStorage.getItem(`${this.PREFIX}${e}`);return r?JSON.parse(r):null}catch{return null}}remove(e){localStorage.removeItem(`${this.PREFIX}${e}`)}encrypt(e){const r=this.ENCRYPTION_KEY;let t="";for(let s=0;s<e.length;s++)t+=String.fromCharCode(e.charCodeAt(s)^r.charCodeAt(s%r.length));return btoa(t)}decrypt(e){const r=atob(e),t=this.ENCRYPTION_KEY;let s="";for(let n=0;n<r.length;n++)s+=String.fromCharCode(r.charCodeAt(n)^t.charCodeAt(n%t.length));return s}generateId(){return Date.now().toString(36)+Math.random().toString(36).substring(2)}cleanupOldData(){const e=this.getRecentWork();this.save("recent_work",e.slice(0,10));const r=this.getChatHistory();this.saveChatHistory(r.slice(-50))}}class re{static generateSyllabusPrompt(e){return[{role:"system",content:`당신은 대학 강의계획서를 작성하는 교육 전문가입니다.
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

`});const s=new Blob([t],{type:"text/markdown"});this.download(s,`${r}.md`)}exportSyllabusAsPDF(e,r){const t=new le;let s=20;const n=7,i=t.internal.pageSize.height;t.setFontSize(20),t.text(e.courseInfo.name,20,s),s+=n*2,t.setFontSize(12),t.text(`Credits: ${e.courseInfo.credits}`,20,s),s+=n,t.text(`Hours per week: ${e.courseInfo.hoursPerWeek}`,20,s),s+=n,t.text(`Target: ${e.courseInfo.targetYear}`,20,s),s+=n*2,t.setFontSize(14),t.text("Learning Outcomes",20,s),s+=n,t.setFontSize(10),e.learningOutcomes.forEach((l,p)=>{s>i-20&&(t.addPage(),s=20);const c=`${p+1}. ${l.description}`;t.splitTextToSize(c,170).forEach(f=>{t.text(f,20,s),s+=n})}),s>i-40&&(t.addPage(),s=20),t.setFontSize(14),t.text("Weekly Schedule",20,s),s+=n,t.setFontSize(10),e.weeklyPlans.forEach(l=>{s>i-20&&(t.addPage(),s=20),t.text(`Week ${l.week}: ${l.topic}`,20,s),s+=n}),t.save(`${r}.pdf`)}exportRubricAsPDF(e,r){const t=new le("l","mm","a4");t.setFontSize(16),t.text(e.assignmentTitle,20,20),t.text(`Total Points: ${e.totalPoints}`,20,30);let s=45;t.setFontSize(10),t.text("Criteria",20,s),t.text("Weight",60,s),t.text("Excellent",80,s),t.text("Good",130,s),t.text("Needs Improvement",180,s),t.line(20,s+2,270,s+2),s+=10,e.criteria.forEach(n=>{const i=t.splitTextToSize(n.excellent,45),l=t.splitTextToSize(n.good,45),p=t.splitTextToSize(n.needsImprovement,45),c=Math.max(i.length,l.length,p.length);t.text(n.name,20,s),t.text(`${n.weight}%`,60,s),i.forEach((h,f)=>{t.text(h,80,s+f*5)}),l.forEach((h,f)=>{t.text(h,130,s+f*5)}),p.forEach((h,f)=>{t.text(h,180,s+f*5)}),s+=c*5+5,s>180&&(t.addPage(),s=20)}),t.save(`${r}.pdf`)}exportChatAsPDF(e,r){const t=new le;let s=20;const n=7,i=t.internal.pageSize.height;t.setFontSize(16),t.text("Chat History",20,s),t.setFontSize(10),s+=n,t.text(`Date: ${new Date().toLocaleString()}`,20,s),s+=n*2,e.forEach(l=>{s>i-30&&(t.addPage(),s=20),t.setFontSize(12);const p=l.role==="user"?"User":"Assistant";t.text(p,20,s),s+=n,t.setFontSize(10),t.splitTextToSize(l.content,170).forEach(h=>{s>i-20&&(t.addPage(),s=20),t.text(h,25,s),s+=n}),s+=n}),t.save(`${r}.pdf`)}exportSyllabusAsHTML(e,r){let t=`<!DOCTYPE html>
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
</html>`;const s=new Blob([t],{type:"text/html;charset=utf-8"});this.download(s,`${r}.html`)}download(e,r){const t=URL.createObjectURL(e),s=document.createElement("a");s.href=t,s.download=r,s.click(),URL.revokeObjectURL(t)}async copyToClipboard(e){try{await navigator.clipboard.writeText(e)}catch{const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.left="-999999px",document.body.appendChild(t),t.focus(),t.select(),document.execCommand("copy"),document.body.removeChild(t)}}static downloadPDF(e,r){const t=new le;t.setFont("helvetica"),t.setFontSize(12);const s=t.splitTextToSize(e,170);let n=20;s.forEach(i=>{n>280&&(t.addPage(),n=20),t.text(i,20,n),n+=7}),t.save(`${r}.pdf`)}static downloadMarkdown(e,r){const t=new Blob([e],{type:"text/markdown"}),s=URL.createObjectURL(t),n=document.createElement("a");n.href=s,n.download=`${r}.md`,n.click(),URL.revokeObjectURL(s)}static downloadJSON(e,r){const t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),s=URL.createObjectURL(t),n=document.createElement("a");n.href=s,n.download=`${r}.json`,n.click(),URL.revokeObjectURL(s)}}const Do=Po()(Lo((o,e)=>({openAIService:new Fe({apiKey:""}),storageService:new Fo,promptService:new re,exportService:new de,currentCourse:null,currentRubric:null,currentAssignment:null,generatedContent:null,isGenerating:!1,apiKey:"",selectedModel:"gpt-3.5-turbo",setApiKey:r=>{const{storageService:t}=e(),s=new Fe({apiKey:r});t.saveApiKey(r),o({apiKey:r,openAIService:s})},setCurrentCourse:r=>{o({currentCourse:r})},setCurrentRubric:r=>{o({currentRubric:r})},setCurrentAssignment:r=>{o({currentAssignment:r})},generateContent:async(r,t)=>{const{openAIService:s}=e();o({isGenerating:!0});try{let n=[];switch(r){case"syllabus":n=re.generateSyllabusPrompt(t);break;case"rubric":n=re.generateRubricPrompt(t);break;case"assignment":n=re.generateAssignmentPrompt(t.objectives||[],t.level||"basic",t.type||"general");break;case"feedback":n=re.generateFeedbackPrompt(t);break;default:throw new Error(`Unknown content type: ${r}`)}const i=await s.complete(n);o({generatedContent:{type:r,content:i,params:t},isGenerating:!1})}catch(n){throw console.error("Content generation failed:",n),o({isGenerating:!1}),n}},saveContent:r=>{console.log("Content saved:",r)},exportContent:r=>{const{generatedContent:t}=e();if(t)switch(r){case"pdf":de.downloadPDF(t.content,`document_${Date.now()}`);break;case"markdown":de.downloadMarkdown(t.content,`document_${Date.now()}`);break;case"json":de.downloadJSON(t,`document_${Date.now()}`);break;default:throw new Error(`Unknown export format: ${r}`)}}}),{name:"teaching-assistant-storage",partialize:o=>({apiKey:o.apiKey,selectedModel:o.selectedModel,currentCourse:o.currentCourse})})),Ho=[{title:"강의계획서 생성",description:"AI를 활용한 체계적인 강의계획서 작성",icon:pt,path:"/syllabus",color:"text-gray-600"},{title:"루브릭 빌더",description:"평가 기준표 생성 및 관리",icon:mt,path:"/rubric",color:"text-gray-600"},{title:"과제 생성",description:"학습 목표에 맞는 과제 설계",icon:ht,path:"/assignment",color:"text-gray-600"},{title:"피드백 생성",description:"개인화된 학습 피드백 작성",icon:gt,path:"/feedback",color:"text-gray-600"}];function Ko(){const{apiKey:o}=Do(),e=o&&o.trim().length>0;return a.jsxs("div",{className:"space-y-10 animate-fadeIn",children:[a.jsxs("div",{className:"text-center space-y-4 py-12",children:[a.jsx("h1",{className:"text-5xl font-bold gradient-text tracking-tight",children:"Teaching AI"}),a.jsx("p",{className:"text-lg text-slate-600 max-w-3xl mx-auto text-balance",children:"한신대학교 교수혁신연구결과"}),a.jsx("p",{className:"text-xl text-slate-600 max-w-2xl mx-auto text-balance",children:"AI의 힘으로 더 나은 교육 경험을 만들어보세요"})]}),!e&&a.jsx("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-4",children:a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsx(ut,{className:"h-6 w-6 text-yellow-600"}),a.jsxs("div",{className:"flex-1",children:[a.jsx("h3",{className:"font-medium text-yellow-800",children:"OpenAI API 키가 필요합니다"}),a.jsx("p",{className:"text-sm text-yellow-700 mt-1",children:"AI 기능을 사용하려면 OpenAI API 키를 설정해야 합니다. 모든 AI 기반 도구(강의계획서, 과제, 루브릭, 피드백 생성)를 사용할 수 있습니다."})]}),a.jsx(B,{to:"/settings",className:"flex-shrink-0",children:a.jsxs("button",{className:"bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2",children:[a.jsx(xt,{className:"h-4 w-4"}),a.jsx("span",{children:"API 키 설정"})]})})]})}),e&&a.jsx("div",{className:"bg-green-50 border border-green-200 rounded-lg p-4",children:a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsx(Pe,{className:"h-6 w-6 text-green-600"}),a.jsxs("div",{className:"flex-1",children:[a.jsx("h3",{className:"font-medium text-green-800",children:"API 키 설정 완료"}),a.jsx("p",{className:"text-sm text-green-700 mt-1",children:"OpenAI API 키가 설정되어 있습니다. 이제 모든 AI 기능을 사용할 수 있습니다."})]}),a.jsx(B,{to:"/settings",className:"flex-shrink-0",children:a.jsxs("button",{className:"bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2",children:[a.jsx(pr,{className:"h-4 w-4"}),a.jsx("span",{children:"설정 관리"})]})})]})}),a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{className:"text-center",children:[a.jsx("h2",{className:"text-3xl font-bold text-foreground mb-2",children:"빠른 작업"}),a.jsx("p",{className:"text-muted-foreground",children:"원하는 도구를 선택하여 시작하세요"})]}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:Ho.map((r,t)=>{const s=r.icon;return a.jsx(B,{to:r.path,className:"block animate-scaleIn",style:{animationDelay:`${t*150}ms`},children:a.jsx("div",{className:"option-card h-full p-6 group",children:a.jsxs("div",{className:"relative z-10",children:[a.jsxs("div",{className:"flex items-center space-x-4 mb-4",children:[a.jsx("div",{className:"p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-700 to-gray-800",children:a.jsx(s,{className:"h-6 w-6 text-white"})}),a.jsx("div",{children:a.jsx("h3",{className:"font-semibold text-card-foreground text-lg group-hover:text-foreground transition-colors",children:r.title})})]}),a.jsx("p",{className:"text-muted-foreground leading-relaxed group-hover:text-card-foreground transition-colors",children:r.description}),a.jsx("div",{className:"mt-4 text-primary font-medium group-hover:text-primary-hover transition-colors",children:"시작하기 →"})]})})},r.title)})})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[a.jsxs("div",{className:"card",children:[a.jsxs("div",{className:"card-header mb-4",children:[a.jsx("h3",{className:"card-title text-xl",children:"최근 활동"}),a.jsx("p",{className:"card-description",children:"최근에 작업한 문서들을 확인하세요"})]}),a.jsx("div",{className:"card-content",children:a.jsx("div",{className:"flex items-center justify-center h-32 text-muted-foreground",children:a.jsx("p",{children:"아직 생성된 문서가 없습니다. 위의 도구들을 사용하여 시작해보세요!"})})})]}),a.jsxs("div",{className:"card",children:[a.jsxs("div",{className:"card-header mb-4",children:[a.jsx("h3",{className:"card-title text-xl",children:"시스템 상태"}),a.jsx("p",{className:"card-description",children:"AI 서비스 상태를 확인하세요"})]}),a.jsxs("div",{className:"card-content",children:[a.jsx("div",{className:"space-y-4",children:a.jsxs("div",{className:"flex items-center justify-between p-3 rounded-lg bg-gray-50 border border-gray-200 transition-all duration-200 hover:scale-101",children:[a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsx(Pe,{className:"h-5 w-5 text-success"}),a.jsx("span",{className:"font-medium text-gray-900",children:"준비 완료"})]}),a.jsx("span",{className:"text-sm font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded-full",children:"정상"})]})}),a.jsx("div",{className:"mt-6",children:a.jsx(B,{to:"/settings",className:"block",children:a.jsx("button",{className:"w-full btn-secondary",children:"설정 관리"})})})]})]})]})]})}const Wo=g.lazy(()=>se(()=>import("./SyllabusGenerator-CN0w9GTO.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(o=>({default:o.SyllabusGenerator}))),Vo=g.lazy(()=>se(()=>import("./RubricBuilder-DQnojIu3.js"),__vite__mapDeps([6,1,2,3,4,7,5]),import.meta.url).then(o=>({default:o.RubricBuilder}))),Uo=g.lazy(()=>se(()=>import("./AssignmentGenerator-ZMZtgwtA.js"),__vite__mapDeps([8,1,2,3,4,5]),import.meta.url).then(o=>({default:o.AssignmentGenerator}))),Go=g.lazy(()=>se(()=>import("./FeedbackGenerator-C8tpXnCF.js"),__vite__mapDeps([9,1,2,3,10,4,5]),import.meta.url).then(o=>({default:o.FeedbackGenerator}))),Bo=g.lazy(()=>se(()=>import("./Settings-BRLiOulm.js"),__vite__mapDeps([11,1,2,3,10,7,5]),import.meta.url).then(o=>({default:o.Settings})));function qo(){return a.jsx(Me,{children:a.jsx(Wt,{children:a.jsxs("div",{className:"min-h-screen",style:{backgroundColor:"#f8fafc"},children:[a.jsx(oo,{}),a.jsx("main",{className:"container mx-auto px-6 py-8 max-w-7xl",children:a.jsx("div",{className:"animate-fadeIn",children:a.jsx(Me,{children:a.jsx(g.Suspense,{fallback:a.jsx(ro,{size:"lg",text:"페이지를 불러오는 중..."}),children:a.jsxs(Vt,{children:[a.jsx(q,{path:"/",element:a.jsx(Ko,{})}),a.jsx(q,{path:"/syllabus",element:a.jsx(Wo,{})}),a.jsx(q,{path:"/rubric",element:a.jsx(Vo,{})}),a.jsx(q,{path:"/assignment",element:a.jsx(Uo,{})}),a.jsx(q,{path:"/feedback",element:a.jsx(Go,{})}),a.jsx(q,{path:"/settings",element:a.jsx(Bo,{})})]})})})})}),a.jsx(to,{})]})})})}be.createRoot(document.getElementById("root")).render(a.jsx(We.StrictMode,{children:a.jsx(qo,{})}));export{pt as B,mt as C,de as E,ht as F,pr as K,gt as M,xt as S,fr as U,Pe as a,Q as b,A as c,cr as d,Do as u};
