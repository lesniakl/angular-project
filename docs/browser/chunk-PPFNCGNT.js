import{a as t,b as a,c as r,d as i,h as n}from"./chunk-SDUPZHXZ.js";import"./chunk-2R6CW7ES.js";var c=":host{display:flex;flex-direction:column;position:relative;min-width:17.5rem;max-width:17.5rem;min-height:3.5rem;pointer-events:all;background-color:var(--theme-toast--background);border:var(--theme-toast--border-thickness) solid var(--theme-toast--border-color);border-radius:var(--theme-toast--border-radius);box-shadow:var(--theme-toast--box-shadow);--animate-duration:300ms}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .toast-body{display:flex;position:relative;min-height:3.5rem;width:100%;flex-grow:1;padding:0.75rem}:host .toast-body .toast-icon{display:flex;align-items:flex-start;margin-right:1rem}:host .toast-body .toast-content{overflow:hidden;text-overflow:ellipsis;min-width:0;width:100%}:host .toast-body .toast-content .toast-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.143em;color:var(--theme-color-std-text);margin:0.25rem 0px}:host .toast-body .toast-content .toast-message{min-width:0;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text)}:host .toast-body .toast-icon+.toast-content{max-width:10.25rem}:host .toast-close{display:flex;position:relative;pointer-events:all;margin-left:auto;margin-right:0px}:host .toast-progress-bar{position:absolute;bottom:0;height:0.25rem;width:100%;background-color:var(--theme-toast-timer-value--background);transform-origin:left}:host .toast-progress-bar--animated{animation:trackProgress linear 1 forwards}@keyframes trackProgress{0%{transform:scaleX(1)}100%{transform:scaleX(0)}}",l=c,h=(()=>{let e=class{constructor(o){n(this,o),this.closeToast=i(this,"closeToast",7),this.type="info",this.toastTitle=void 0,this.autoCloseDelay=5e3,this.autoClose=!0,this.icon=void 0,this.iconColor=void 0,this.progress=0,this.touched=!1}getIcon(){if(this.icon)return t("ix-icon",{"data-testid":"toast-icon",name:this.icon,color:this.iconColor,size:"24"});switch(this.type){case"info":return t("ix-icon",{"data-testid":"toast-icon",name:"info",size:"24",color:"color-std-text"});case"error":return t("ix-icon",{"data-testid":"toast-icon",name:"error",size:"24",color:"color-alarm"});case"success":return t("ix-icon",{"data-testid":"toast-icon",name:"success",size:"24",color:"color-success"});case"warning":return t("ix-icon",{"data-testid":"toast-icon",name:"warning",size:"24",color:"color-warning"});default:return""}}close(){this.hostElement&&this.hostElement.classList.add("animate__fadeOut"),setTimeout(()=>{this.closeToast.emit()},250)}render(){let o={},s=["toast-progress-bar"];return o={animationDuration:`${this.autoCloseDelay}ms`,animationPlayState:this.touched?"paused":"running"},s.push("toast-progress-bar--animated"),t(a,{key:"165e8ce47907c08afaef29ec7741efaddaf59d0f",class:"animate__animated animate__fadeIn"},t("div",{key:"fff7c4afb35bf57eead0fa4b484e0843dcf6c163",class:"toast-body",onPointerLeave:()=>{this.touched=!1},onPointerEnter:()=>{this.touched=!0}},this.type||this.icon?t("div",{class:"toast-icon"},this.getIcon()):null,t("div",{key:"cd9db0e7591fc8cc069608cff6c3824b4063b1df",class:"toast-content"},this.toastTitle?t("div",{class:"toast-title"},this.toastTitle):null,t("div",{key:"5c850aab1090ec83bfbb2ed4be68d665efaa403f",class:"toast-message"},t("slot",{key:"0f857c156d576f8bc62cca7f2ab50df00fe3e794"}))),t("div",{key:"47db8f9094de72a16be06466bd694923d86492ff",class:"toast-close"},t("ix-icon-button",{key:"db141553999f04175cb135c9b89b7655a5eae216",icon:"close",size:"24",ghost:!0,onClick:()=>this.closeToast.emit()}))),this.autoClose?t("div",{class:s.join(" "),style:o,onAnimationEnd:()=>{this.close()},onTransitionEnd:()=>{this.progress===0&&this.close()}}):null)}get hostElement(){return r(this)}};return e.style=l,e})();export{h as ix_toast};
