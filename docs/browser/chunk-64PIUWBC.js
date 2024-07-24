import{a as o}from"./chunk-3A5NOHRR.js";var h=class{get themeChanged(){return this._themeChanged}hasVariantSuffix(e){return e.endsWith(this.suffixDark)||e.endsWith(this.suffixLight)}isThemeClass(e){return e.startsWith(this.prefixTheme)&&this.hasVariantSuffix(e)}setTheme(e,t=!1){if(!this.isThemeClass(e)&&t===!1)throw Error(`Provided theme name ${e} does not match our naming conventions. (theme-<name>-(dark,light))`);if(t){let s=n();this.replaceBodyThemeClass(e),this.setVariant(s);return}this.replaceBodyThemeClass(e)}replaceBodyThemeClass(e){let t=[];document.body.classList.forEach(s=>{this.isThemeClass(s)&&t.push(s)}),document.body.classList.remove(...t),document.body.classList.add(e)}toggleMode(){let e=[];if(document.body.classList.forEach(t=>{this.isThemeClass(t)&&e.push(t)}),e.length===0){document.body.classList.add(this.getOppositeMode(this.defaultTheme));return}e.forEach(t=>{document.body.classList.replace(t,this.getOppositeMode(t))})}getCurrentTheme(){var e;return(e=Array.from(document.body.classList).find(t=>this.isThemeClass(t)))!==null&&e!==void 0?e:`theme-${window.getComputedStyle(document.body).getPropertyValue("--ix-theme-name")}`}setVariant(e=n()){let t=this.getCurrentTheme();document.body.classList.remove(t),t.endsWith(this.suffixDark)&&document.body.classList.add(t.replace(/-dark$/g,`-${e}`)),t.endsWith(this.suffixLight)&&document.body.classList.add(t.replace(/-light$/g,`-${e}`))}getOppositeMode(e){if(e.endsWith(this.suffixDark))return e.replace(/-dark$/g,this.suffixLight);if(e.endsWith(this.suffixLight))return e.replace(/-light$/g,this.suffixDark)}handleMutations(e){return e.forEach(t=>{let{target:s}=t;s.classList.forEach(i=>{var r;this.isThemeClass(i)&&!(!((r=t.oldValue)===null||r===void 0)&&r.includes(i))&&this._themeChanged.emit(i)})})}registerMutationObserver(){if(!(typeof window>"u")){if(!("MutationObserver"in window)){console.warn("ThemeSwitcher not supported by your browser. Missing MutationObserver API");return}this.mutationObserver=new MutationObserver(e=>{this.handleMutations(e)}),this.mutationObserver.observe(document.body,{attributeFilter:["class"],attributeOldValue:!0})}}constructor(){this.prefixTheme="theme-",this.suffixLight="-light",this.suffixDark="-dark",this.defaultTheme="theme-classic-dark",this._themeChanged=new o,this.registerMutationObserver()}},n=()=>window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",u=new h;export{u as a};
