"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5326],{5326:(E,T,m)=>{m.r(T),m.d(T,{startInputShims:()=>$});var D=m(5861),p=m(8416),v=m(5730);const L=new WeakMap,A=(e,n,t,o=0,r=!1)=>{L.has(e)!==t&&(t?N(e,n,o,r):O(e,n))},C=e=>e===e.getRootNode().activeElement,N=(e,n,t,o=!1)=>{const r=n.parentNode,s=n.cloneNode(!1);s.classList.add("cloned-input"),s.tabIndex=-1,o&&(s.disabled=!0),r.appendChild(s),L.set(e,s);const i="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",n.style.transform=`translate3d(${i}px,${t}px,0) scale(0)`},O=(e,n)=>{const t=L.get(e);t&&(L.delete(e),t.remove()),e.style.pointerEvents="",n.style.transform=""},w="input, textarea, [no-blur], [contenteditable]",H=function(){var e=(0,D.Z)(function*(n,t,o,r,s,c=!1){if(!o&&!r)return;const i=((e,n,t)=>{var o;return((e,n,t,o)=>{const r=e.top,s=e.bottom,c=n.top,d=c+15,S=.75*Math.min(n.bottom,o-t)-s,l=d-r,h=Math.round(S<0?-S:l>0?-l:0),_=Math.min(h,r-c),u=Math.abs(_)/.3;return{scrollAmount:_,scrollDuration:Math.min(400,Math.max(150,u)),scrollPadding:t,inputSafeY:4-(r-d)}})((null!==(o=e.closest("ion-item,[ion-item]"))&&void 0!==o?o:e).getBoundingClientRect(),n.getBoundingClientRect(),t,e.ownerDocument.defaultView.innerHeight)})(n,o||r,s);if(o&&Math.abs(i.scrollAmount)<4)t.focus();else if(A(n,t,!0,i.inputSafeY,c),t.focus(),(0,v.r)(()=>n.click()),typeof window<"u"){let d;const f=function(){var l=(0,D.Z)(function*(){void 0!==d&&clearTimeout(d),window.removeEventListener("ionKeyboardDidShow",S),window.removeEventListener("ionKeyboardDidShow",f),o&&(yield(0,p.c)(o,0,i.scrollAmount,i.scrollDuration)),A(n,t,!1,i.inputSafeY),t.focus()});return function(){return l.apply(this,arguments)}}(),S=()=>{window.removeEventListener("ionKeyboardDidShow",S),window.addEventListener("ionKeyboardDidShow",f)};if(o){const l=yield(0,p.g)(o);if(i.scrollAmount>l.scrollHeight-l.clientHeight-l.scrollTop)return"password"===t.type?(i.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",S)):window.addEventListener("ionKeyboardDidShow",f),void(d=setTimeout(f,1e3))}f()}});return function(t,o,r,s,c){return e.apply(this,arguments)}}(),P="$ionPaddingTimer",M=(e,n)=>{var t,o;if("INPUT"!==e.tagName||e.parentElement&&"ION-INPUT"===e.parentElement.tagName||"ION-SEARCHBAR"===(null===(o=null===(t=e.parentElement)||void 0===t?void 0:t.parentElement)||void 0===o?void 0:o.tagName))return;const r=(0,p.f)(e);if(null===r)return;const s=r[P];s&&clearTimeout(s),n>0?r.style.setProperty("--keyboard-offset",`${n}px`):r[P]=setTimeout(()=>{r.style.setProperty("--keyboard-offset","0px")},120)},$=(e,n)=>{const t=document,o="ios"===n,r="android"===n,s=e.getNumber("keyboardHeight",290),c=e.getBoolean("scrollAssist",!0),i=e.getBoolean("hideCaretOnScroll",o),d=e.getBoolean("inputBlurring",o),f=e.getBoolean("scrollPadding",!0),S=Array.from(t.querySelectorAll("ion-input, ion-textarea")),l=new WeakMap,h=new WeakMap,_=function(){var u=(0,D.Z)(function*(a){yield new Promise(y=>(0,v.c)(a,y));const I=a.shadowRoot||a,b=I.querySelector("input")||I.querySelector("textarea"),g=(0,p.f)(a),x=g?null:a.closest("ion-footer");if(b){if(g&&i&&!l.has(a)){const y=((e,n,t)=>{if(!t||!n)return()=>{};const o=i=>{C(n)&&A(e,n,i)},r=()=>A(e,n,!1),s=()=>o(!0),c=()=>o(!1);return(0,v.a)(t,"ionScrollStart",s),(0,v.a)(t,"ionScrollEnd",c),n.addEventListener("blur",r),()=>{(0,v.b)(t,"ionScrollStart",s),(0,v.b)(t,"ionScrollEnd",c),n.removeEventListener("blur",r)}})(a,b,g);l.set(a,y)}if("date"!==b.type&&"datetime-local"!==b.type&&(g||x)&&c&&!h.has(a)){const y=((e,n,t,o,r,s=!1)=>{let c;const i=f=>{c=(0,v.p)(f)},d=f=>{if(!c)return;const S=(0,v.p)(f);!((e,n,t)=>{if(n&&t){const o=n.x-t.x,r=n.y-t.y;return o*o+r*r>e*e}return!1})(6,c,S)&&!C(n)&&H(e,n,t,o,r,s)};return e.addEventListener("touchstart",i,{capture:!0,passive:!0}),e.addEventListener("touchend",d,!0),()=>{e.removeEventListener("touchstart",i,!0),e.removeEventListener("touchend",d,!0)}})(a,b,g,x,s,r);h.set(a,y)}}});return function(I){return u.apply(this,arguments)}}();d&&(()=>{let e=!0,n=!1;const t=document;(0,v.a)(t,"ionScrollStart",()=>{n=!0}),t.addEventListener("focusin",()=>{e=!0},!0),t.addEventListener("touchend",c=>{if(n)return void(n=!1);const i=t.activeElement;if(!i||i.matches(w))return;const d=c.target;d!==i&&(d.matches(w)||d.closest(w)||(e=!1,setTimeout(()=>{e||i.blur()},50)))},!1)})(),f&&(e=>{const n=document;n.addEventListener("focusin",r=>{M(r.target,e)}),n.addEventListener("focusout",r=>{M(r.target,0)})})(s);for(const u of S)_(u);t.addEventListener("ionInputDidLoad",u=>{_(u.detail)}),t.addEventListener("ionInputDidUnload",u=>{(u=>{if(i){const a=l.get(u);a&&a(),l.delete(u)}if(c){const a=h.get(u);a&&a(),h.delete(u)}})(u.detail)})}}}]);