import{a as e,b as a,h as i}from"./chunk-SDUPZHXZ.js";import"./chunk-2R6CW7ES.js";var r=":host{display:flex;flex-grow:1;height:2.5rem;border-radius:var(--theme-kpi--border-radius);padding:0.375rem 0.25rem;min-width:0}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .kpi-container{display:flex;height:100%;width:100%;border-block-end:2px solid grey}:host .kpi-container.alarm{border-block-end-color:var(--theme-color-alarm)}:host .kpi-container.warning{border-block-end-color:var(--theme-color-warning)}:host .kpi-container .kpi-label{display:flex;align-items:center;color:var(--theme-kpi-display-label--color);flex-grow:1;flex-shrink:9999}:host .kpi-container .kpi-label ix-icon{margin-inline-end:0.25rem}:host .kpi-container .kpi-value-container{display:flex;align-items:flex-end}:host .kpi-container .kpi-value{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text);color:var(--theme-kpi-display-value--color)}:host .kpi-container .kpi-unit{margin-inline-start:0.5rem;color:var(--theme-kpi-display-units--color)}:host .kpi-container .kpi-label,:host .kpi-container .kpi-unit{margin-block-start:0.125rem}:host:not(.disabled):not(:disabled){cursor:pointer}:host:not(.disabled):not(:disabled):hover{background-color:var(--theme-kpi-display--background--hover)}:host:not(.disabled):not(:disabled){cursor:pointer}:host:not(.disabled):not(:disabled):active,:host:not(.disabled):not(:disabled).active{background-color:var(--theme-kpi-display--background--active)}:host:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--focus--border-color)}:host(.stacked){height:3.75rem}:host(.stacked) .kpi-container{justify-content:center;flex-wrap:wrap}:host(.stacked) .kpi-container .kpi-label{width:100%;justify-content:center}",s=r,l=(()=>{let o=class{constructor(t){i(this,t),this.label=void 0,this.value=void 0,this.unit=void 0,this.state="neutral",this.orientation="horizontal"}getStateIcon(){switch(this.state){case"alarm":return e("ix-icon",{color:"kpi-display-icon--color",name:"alarm",size:"16"});case"warning":return e("ix-icon",{color:"kpi-display-icon--color",name:"warning",size:"16"});default:return""}}getTooltipText(){let t=`${this.label}: ${this.value}`;return this.unit&&(t=t.concat(` ${this.unit}`)),t}render(){return e(a,{key:"d55ca486905d0294052dcb2ce5dca5e82a8c7566",title:this.getTooltipText(),tabindex:"1",class:{stacked:this.orientation==="vertical"}},e("div",{key:"99f29f60ed8257b14dd062d13813d2078ae5c8b0",class:{"kpi-container":!0,alarm:this.state==="alarm",warning:this.state==="warning"}},e("span",{key:"49d9bbffb0b97df9dea86542347bb5defe46728e",class:"kpi-label"},this.getStateIcon(),e("span",{key:"5947f6b00f33857cf93c1bb161734a6505b5cb3c",class:"kpi-label-text"},this.label)),e("span",{key:"55a429623ac5bcf1e3884d5af539e03b8e51605a",class:"kpi-value-container"},e("span",{key:"3569aac806ad75bb105290c55a14aa297d47662e",class:"kpi-value"},this.value),this.unit?e("span",{class:"kpi-unit"},this.unit):"")))}};return o.style=s,o})();export{l as ix_kpi};
