import{a as u}from"./chunk-3A5NOHRR.js";import{g as l}from"./chunk-2R6CW7ES.js";var b=class{attachView(a,e){return l(this,null,function*(){var n;return((n=e?.parentElement)!==null&&n!==void 0?n:document.body).appendChild(a),a})}removeView(a){return l(this,null,function*(){a.remove()})}},p=new b,g=p;var x=()=>g,y=()=>p;function T(t,a){let e=a.ariaDescribedby,n=a.ariaLabelledby;delete a.ariaDescribedby,delete a.ariaLabelledby,e&&t.setAttribute("aria-describedby",e),n&&t.setAttribute("aria-labelledby",n)}function m(t,a,e,n){let s=[];return a!==void 0&&(s=[...s,{id:"cancel",text:a,type:"cancel",payload:n}]),[...s,{id:"okay",text:t,type:"okay",payload:e}]}function o(t){return l(this,null,function*(){let a=new u,e=document.createElement("ix-modal"),n=document.createElement("ix-modal-header"),s=document.createElement("ix-modal-content"),i=document.createElement("ix-modal-footer");T(e,t),Object.assign(n,t),Object.assign(s,t),Object.assign(i,t),n.innerText=t.messageTitle,s.innerText=t.message,t.actions.forEach(({id:c,text:v,type:w,payload:h})=>{let r=document.createElement("ix-button");if(r.innerText=v,i.appendChild(r),w==="okay"){r.variant="primary",r.addEventListener("click",()=>e.closeModal({actionId:c,payload:h}));return}if(w==="cancel"){r.variant="primary",r.outline=!0,r.addEventListener("click",()=>e.dismissModal({actionId:c,payload:h}));return}}),e.appendChild(n),e.appendChild(s),e.appendChild(i);let d=yield y().attachView(e);return d.addEventListener("dialogClose",c=>{a.emit(c.detail),d.remove()}),d.addEventListener("dialogDismiss",c=>{a.emit(c.detail),d.remove()}),d.showModal(),a})}o.info=(t,a,e,n,s,i)=>o({message:a,messageTitle:t,icon:"info",actions:m(e,n,s,i)});o.warning=(t,a,e,n,s,i)=>o({message:a,messageTitle:t,icon:"warning",iconColor:"color-warning",actions:m(e,n,s,i)});o.error=(t,a,e,n,s,i)=>o({message:a,messageTitle:t,icon:"error",iconColor:"color-alarm",actions:m(e,n,s,i)});o.success=(t,a,e,n,s,i)=>o({message:a,messageTitle:t,icon:"success",iconColor:"color-success",actions:m(e,n,s,i)});o.question=(t,a,e,n,s,i)=>o({message:a,messageTitle:t,icon:"question",actions:m(e,n,s,i)});function L(t,a){let e=a.ariaDescribedby,n=a.ariaLabelledby;delete a.ariaDescribedby,delete a.ariaLabelledby,e&&t.setAttribute("aria-describedby",e),n&&t.setAttribute("aria-labelledby",n)}function E(t){return t.closest("ix-modal")}function C(t,a){let e=E(t);if(e){e.closeModal(a);return}}function D(t,a){let e=E(t);if(e){e.dismissModal(a);return}}function f(t){return l(this,null,function*(){let a=x(),e,n=new u,s=new u;if(typeof t.content=="string"){let i=document.createElement("ix-modal");i.innerText=t.content,e=yield y().attachView(i)}if(t.content instanceof HTMLElement&&t.content.tagName!=="IX-MODAL"){let i=document.createElement("ix-modal");i.appendChild(t.content),e=yield y().attachView(i)}return e||(e=yield a.attachView(t.content)),L(e,t),Object.assign(e,t),yield e.showModal(),e.addEventListener("dialogClose",d=>l(this,[d],function*({detail:i}){n.emit(i),yield a.removeView(e)})),e.addEventListener("dialogDismiss",d=>l(this,[d],function*({detail:i}){s.emit(i),yield a.removeView(e)})),{htmlElement:e,onClose:n,onDismiss:s}})}export{C as a,D as b,f as c};
