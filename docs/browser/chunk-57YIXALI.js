import{b as z,c as k}from"./chunk-JEDVMKWO.js";import{a as O}from"./chunk-UUEEBXBG.js";import{a as F,b as M,c as N,d as R,h as j}from"./chunk-SDUPZHXZ.js";import"./chunk-2R6CW7ES.js";var A={exports:{}};(function(T,o){(function(l){T.exports=l()})(function(){return function(){function l(d,a,g){function m(c,y){if(!a[c]){if(!d[c]){var w=typeof k=="function"&&k;if(!y&&w)return w(c,!0);if(_)return _(c,!0);var s=new Error("Cannot find module '"+c+"'");throw s.code="MODULE_NOT_FOUND",s}var n=a[c]={exports:{}};d[c][0].call(n.exports,function(e){var t=d[c][1][e];return m(t||e)},n,n.exports,l,d,a,g)}return a[c].exports}for(var _=typeof k=="function"&&k,v=0;v<g.length;v++)m(g[v]);return m}return l}()({1:[function(l,d,a){Object.defineProperty(a,"__esModule",{value:!0});var g=function(){function s(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(n,e,t){return e&&s(n.prototype,e),t&&s(n,t),n}}();function m(s,n,e){return n in s?Object.defineProperty(s,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):s[n]=e,s}function _(s,n){if(!(s instanceof n))throw new TypeError("Cannot call a class as a function")}var v={width:"100%",height:"100%"},c=function(n){return Number(n)===Number(n)},y="classList"in document.documentElement?function(s,n){s.classList.add(n)}:function(s,n){var e=s.getAttribute("class")||"";s.setAttribute("class",e+" "+n)},w=function(){g(s,null,[{key:"create",value:function(e,t){return new s(e,t)}},{key:"mergeStyle",value:function(e,t){for(var i in t)e.style[i]!==t[i]&&(e.style[i]=t[i])}},{key:"getMaxBrowserHeight",value:function(){var e=document.createElement("div"),t=document.createElement("div");s.mergeStyle(e,{position:"absolute",height:"1px",opacity:0}),s.mergeStyle(t,{height:"1e7px"}),e.appendChild(t),document.body.appendChild(e);var i=t.offsetHeight;return document.body.removeChild(e),i}}]);function s(n,e){var t=this;_(this,s),this._config={},this._lastRepaint=null,this._maxElementHeight=s.getMaxBrowserHeight(),this.refresh(n,e);var i=this._config,r=function h(){var f=t._getScrollPosition(),u=t._lastRepaint;if(t._renderAnimationFrame=window.requestAnimationFrame(h),f!==u){var p=u?f-u:0;if(!u||p<0||p>t._averageHeight){var b=t._renderChunk();t._lastRepaint=f,b!==!1&&typeof i.afterRender=="function"&&i.afterRender()}}};r()}return g(s,[{key:"destroy",value:function(){window.cancelAnimationFrame(this._renderAnimationFrame)}},{key:"refresh",value:function(e,t){var i;if(Object.assign(this._config,v,t),!e||e.nodeType!==1)throw new Error("HyperList requires a valid DOM Node container");this._element=e;var r=this._config,h=this._scroller||r.scroller||document.createElement(r.scrollerTagName||"tr");if(typeof r.useFragment!="boolean"&&(this._config.useFragment=!0),!r.generate)throw new Error("Missing required `generate` function");if(!c(r.total))throw new Error("Invalid required `total` value, expected number");if(!Array.isArray(r.itemHeight)&&!c(r.itemHeight))throw new Error("\n        Invalid required `itemHeight` value, expected number or array\n      ".trim());c(r.itemHeight)?this._itemHeights=Array(r.total).fill(r.itemHeight):this._itemHeights=r.itemHeight,Object.keys(v).filter(function(E){return E in r}).forEach(function(E){var S=r[E],B=c(S);if(S&&typeof S!="string"&&typeof S!="number"){var U="Invalid optional `"+E+"`, expected string or number";throw new Error(U)}else B&&(r[E]=S+"px")});var f=!!r.horizontal,u=r[f?"width":"height"];if(u){var p=c(u),b=p?!1:u.slice(-1)==="%",x=p?u:parseInt(u.replace(/px|%/,""),10),H=window[f?"innerWidth":"innerHeight"];b?this._containerSize=H*x/100:this._containerSize=c(u)?u:x}var L=r.scrollContainer,C=r.itemHeight*r.total,P=this._maxElementHeight;C>P&&console.warn(["HyperList: The maximum element height",P+"px has","been exceeded; please reduce your item height."].join(" "));var D={width:""+r.width,height:L?C+"px":""+r.height,overflow:L?"none":"auto",position:"relative"};s.mergeStyle(e,D),L&&s.mergeStyle(r.scrollContainer,{overflow:"auto"});var q=(i={opacity:"0",position:"absolute"},m(i,f?"height":"width","1px"),m(i,f?"width":"height",C+"px"),i);s.mergeStyle(h,q),this._scroller||e.appendChild(h);var I=this._computeScrollPadding();this._scrollPaddingBottom=I.bottom,this._scrollPaddingTop=I.top,this._scroller=h,this._scrollHeight=this._computeScrollHeight(),this._itemPositions=this._itemPositions||Array(r.total).fill(0),this._computePositions(0),this._renderChunk(this._lastRepaint!==null),typeof r.afterRender=="function"&&r.afterRender()}},{key:"_getRow",value:function(e){var t=this._config,i=t.generate(e),r=i.height;if(r!==void 0&&c(r)?(i=i.element,r!==this._itemHeights[e]&&(this._itemHeights[e]=r,this._computePositions(e),this._scrollHeight=this._computeScrollHeight(e))):r=this._itemHeights[e],!i||i.nodeType!==1)throw new Error("Generator did not return a DOM Node for index: "+e);y(i,t.rowClassName||"vrow");var h=this._itemPositions[e]+this._scrollPaddingTop;return s.mergeStyle(i,m({position:"absolute"},t.horizontal?"left":"top",h+"px")),i}},{key:"_getScrollPosition",value:function(){var e=this._config;return typeof e.overrideScrollPosition=="function"?e.overrideScrollPosition():this._element[e.horizontal?"scrollLeft":"scrollTop"]}},{key:"_renderChunk",value:function(e){var t=this._config,i=this._element,r=this._getScrollPosition(),h=t.total,f=t.reverse?this._getReverseFrom(r):this._getFrom(r)-1;if((f<0||f-this._screenItemsLen<0)&&(f=0),!e&&this._lastFrom===f)return!1;this._lastFrom=f;var u=f+this._cachedItemsLen;(u>h||u+this._cachedItemsLen>h)&&(u=h);var p=t.useFragment?document.createDocumentFragment():[],b=this._scroller;p[t.useFragment?"appendChild":"push"](b);for(var x=f;x<u;x++){var H=this._getRow(x);p[t.useFragment?"appendChild":"push"](H)}if(t.applyPatch)return t.applyPatch(i,p);i.innerHTML="",i.appendChild(p)}},{key:"_computePositions",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,t=this._config,i=t.total,r=t.reverse;e<1&&!r&&(e=1);for(var h=e;h<i;h++)r?h===0?this._itemPositions[0]=this._scrollHeight-this._itemHeights[0]:this._itemPositions[h]=this._itemPositions[h-1]-this._itemHeights[h]:this._itemPositions[h]=this._itemHeights[h-1]+this._itemPositions[h-1]}},{key:"_computeScrollHeight",value:function(){var e,t=this,i=this._config,r=!!i.horizontal,h=i.total,f=this._itemHeights.reduce(function(C,P){return C+P},0)+this._scrollPaddingBottom+this._scrollPaddingTop;s.mergeStyle(this._scroller,(e={opacity:0,position:"absolute",top:"0px"},m(e,r?"height":"width","1px"),m(e,r?"width":"height",f+"px"),e));var u=this._itemHeights.slice(0).sort(function(C,P){return C-P}),p=Math.floor(h/2),b=h%2===0?(u[p]+u[p-1])/2:u[p],x=r?"clientWidth":"clientHeight",H=i.scrollContainer?i.scrollContainer:this._element,L=H[x]?H[x]:this._containerSize;return this._screenItemsLen=Math.ceil(L/b),this._containerSize=L,this._cachedItemsLen=Math.max(this._cachedItemsLen||0,this._screenItemsLen*3),this._averageHeight=b,i.reverse&&window.requestAnimationFrame(function(){r?t._element.scrollLeft=f:t._element.scrollTop=f}),f}},{key:"_computeScrollPadding",value:function(){var e=this._config,t=!!e.horizontal,i=e.reverse,r=window.getComputedStyle(this._element),h=function(u){var p=r.getPropertyValue("padding-"+u);return parseInt(p,10)||0};return t&&i?{bottom:h("left"),top:h("right")}:t?{bottom:h("right"),top:h("left")}:i?{bottom:h("top"),top:h("bottom")}:{bottom:h("bottom"),top:h("top")}}},{key:"_getFrom",value:function(e){for(var t=0;this._itemPositions[t]<e;)t++;return t}},{key:"_getReverseFrom",value:function(e){for(var t=this._config.total-1;t>0&&this._itemPositions[t]<e+this._containerSize;)t--;return t}}]),s}();a.default=w,d.exports=a.default},{}]},{},[1])(1)})})(A);var V=z(A.exports),W=":host{display:block}",$=W,Q=(()=>{let T=class{constructor(o){j(this,o),this.contextChange=R(this,"contextChange",7),this.nodeToggled=R(this,"nodeToggled",7),this.nodeClicked=R(this,"nodeClicked",7),this.nodeRemoved=R(this,"nodeRemoved",7),this.toggleListener=new Map,this.itemClickListener=new Map,this.updates=new Map,this.hasFirstRender=!1,this.root=void 0,this.model=void 0,this.renderItem=void 0,this.context={}}updatePadding(o,l){o.style.paddingLeft=l.level+"rem"}getVirtualizerOptions(){let o=this.buildTreeList(this.model[this.root]),l=(d,a,g)=>{if(d.hasChildren&&!this.toggleListener.has(a)){let m=_=>{_.preventDefault(),_.stopPropagation();let v=this.getContext(o[g].id);v.isExpanded=!v.isExpanded,this.nodeToggled.emit({id:d.id,isExpaned:v.isExpanded}),this.setContext(d.id,v)};a.addEventListener("toggle",m),this.toggleListener.set(a,m)}};return{itemHeight:32,total:o.length,generate:d=>{let a=o[d],g=this.hostElement.querySelector(`[data-tree-node-id="${a.id}"]`),m=this.getContext(a.id);if(g)return g.hasChildren=a.hasChildren,g.context=Object.assign({},m),l(a,g,d),this.updates.has(a.id)&&this.updates.get(a.id)(a,Object.assign({},this.context)),this.updatePadding(g,a),g;let _=y=>{this.updates.set(a.id,y)},v=null;this.renderItem&&(v=this.renderItem(d,a,o,Object.assign({},this.context),_)),v===null&&(v=O(a,m,_));let c=v;if(c.setAttribute("data-tree-node-id",a.id),c.style.paddingRight="1rem",this.updatePadding(c,a),!this.itemClickListener.has(c)){let y=w=>{w.preventDefault(),w.stopPropagation(),Object.values(this.context).forEach(n=>n.isSelected=!1);let s=this.getContext(a.id);s.isSelected=!0,this.setContext(a.id,s),this.nodeClicked.emit(a.id)};c.addEventListener("itemClick",y),this.itemClickListener.set(c,y)}return l(a,c,d),c}}}setContext(o,l){this.context=Object.assign(Object.assign({},this.context),{[o]:l}),this.contextChange.emit(this.context)}getContext(o){return this.context?(this.context[o]||(this.context[o]={isExpanded:!1,isSelected:!1}),this.context[o]):{isExpanded:!1,isSelected:!1}}buildTreeList(o,l=0){let d=[];if(o?.hasChildren){let a=l+1;o.children.forEach(g=>{let m=this.model[g],_=this.getContext(g);d.push(Object.assign(Object.assign({},m),{level:l})),m.hasChildren&&_.isExpanded&&d.push(...this.buildTreeList(m,a))})}return d}componentDidLoad(){this.initList(),this.observer=new MutationObserver(o=>{let l=[];o.forEach(d=>{l=[...l,...Array.from(d.removedNodes)],d.addedNodes.forEach(a=>{let g=l.indexOf(a);g>=0&&l.splice(g,1)})}),this.nodeRemoved.emit(l)}),this.observer.observe(this.hostElement,{childList:!0})}componentWillRender(){this.hasFirstRender=!0,this.isListInitialized()?this.refreshList():this.initList()}disconnectedCallback(){var o,l;(o=this.hyperlist)===null||o===void 0||o.destroy(),(l=this.observer)===null||l===void 0||l.disconnect()}modelChange(){this.hasFirstRender&&!this.isListInitialized()&&this.initList()}isListInitialized(){var o;let l=(o=this.hyperlist)===null||o===void 0?void 0:o._itemPositions;return l!==void 0&&l.length&&!l?.some(d=>d===void 0||Number.isNaN(d))}refreshList(){this.hyperlist&&this.hyperlist.refresh(this.hostElement,this.getVirtualizerOptions())}initList(){var o;if(!this.model)return;(o=this.hyperlist)===null||o===void 0||o.destroy();let l=this.getVirtualizerOptions();this.hyperlist=new V(this.hostElement,l)}render(){return F(M,{key:"c663df76252b24029b33792151c943519a7c3be1"},F("slot",{key:"cfd96717be68c7c4e4c0b9e344ecd4c48481e1e0"}))}get hostElement(){return N(this)}static get watchers(){return{model:["modelChange"]}}};return T.style=$,T})();export{Q as ix_tree};
