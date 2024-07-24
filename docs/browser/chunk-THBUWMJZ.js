import{a as o}from"./chunk-ZECISSPR.js";import{a as e,b as a,c as n,d as s,h}from"./chunk-SDUPZHXZ.js";import"./chunk-2R6CW7ES.js";var c=":host{display:flex;position:relative;flex-direction:column;align-items:flex-start;margin:0.5rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .CardList_Title{display:flex;position:relative;height:1.5rem;align-items:center;width:100%;margin-bottom:0.5rem}:host .CardList__Title__Button{margin-right:1rem;transition:var(--theme-default-time) transform ease-in-out}:host .CardList__Title__Button__Collapsed{transform:rotate(-90deg)}:host .CardList__Title__Show__All{align-self:center;margin-left:auto;margin-right:0px}:host .CardList__Content{display:flex;position:relative;height:calc(100% - 1.5rem);width:100%;gap:1.5rem;transition:var(--theme-default-time) ease-in-out;overflow:auto}:host .CardList__Content__Collapsed{min-height:0px;max-height:0px;overflow:hidden;opacity:0}:host .CardList__Style__Flexbox__Scroll{flex-wrap:wrap}:host .CardList__Style__Infinite__Scroll{flex-wrap:nowrap;-ms-overflow-style:none;scrollbar-width:none}:host .CardList__Style__Infinite__Scroll::-webkit-scrollbar{display:none}:host .CardList__Overflow{display:block;position:relative;height:100%;width:100%;pointer-events:all;-webkit-mask-image:var(--ix-card-list-overflow, none);mask-image:var(--ix-card-list-overflow, none)}:host .Show__All__Card{display:flex;position:relative;align-self:flex-start;justify-self:center;max-width:11.25rem;min-width:11.25rem;width:11.25rem;min-height:11.25rem;max-height:11.25rem;height:11.25rem;--ix-card-border-color:var(--theme-color-primary);color:var(--theme-color-primary)}:host .CardList__Style__Infinite__Scroll .Show__All__Card{margin-top:2.375rem}:host .CardList__Style__Flexbox__Scroll .Show__All__Card{margin-bottom:2.375rem}:host .Show__All__Card:hover{background-color:var(--theme-color-ghost--hover)}:host .Show__All__Card:active{background-color:var(--theme-color-ghost--active)}:host .Show__All__Card__Content{display:flex;justify-content:center;align-items:center}:host .Show__All__Card__Icon{display:flex;position:absolute;height:4rem;width:4rem;justify-content:center;align-items:center}:host .Show__All__Card__Text{margin-bottom:0px;margin-top:auto}",d=c;function _(l){return l.label===""?null:e("div",{class:"CardList_Title"},e("ix-icon-button",{ghost:!0,icon:"chevron-down",onClick:l.onClick,color:"color-primary",class:{CardList__Title__Button:!0,CardList__Title__Button__Collapsed:l.isCollapsed}}),e("ix-typography",{variant:"large-single"},l.label),!l.hideShowAll&&e("ix-button",{class:"CardList__Title__Show__All",ghost:!0,onClick:l.onShowAllClick},e("span",null,l.showAllLabel),e("span",null,isNaN(l.showAllCounter)?null:` (${l.showAllCounter})`)))}var f=(()=>{let l=class{constructor(t){h(this,t),this.collapseChanged=s(this,"collapseChanged",7),this.showAllClick=s(this,"showAllClick",7),this.showMoreCardClick=s(this,"showMoreCardClick",7),this.label=void 0,this.collapse=!1,this.listStyle="stack",this.maxVisibleCards=12,this.showAllCount=void 0,this.suppressOverflowHandling=!1,this.hideShowAll=!1,this.i18nShowAll="Show all",this.i18nMoreCards="There are more cards available",this.hasOverflowingElements=!1,this.numberOfOverflowingElements=0,this.numberOfAllChildElements=0,this.leftScrollDistance=0,this.rightScrollDistance=0}onCardListVisibilityToggle(){this.collapse=!this.collapse,this.collapseChanged.emit(this.collapse)}onShowAllClick(t){this.showAllClick.emit({nativeEvent:t})}getListChildren(){return this.hostElement.shadowRoot.querySelector(".CardList__Content > slot").assignedElements({flatten:!0})}changeVisibilityOfSlotChildren(){let t=this.getListChildren();t.forEach((i,r)=>{if(i instanceof HTMLElement){if(r>this.maxVisibleCards-1){i.classList.add("d-none");return}i.classList.remove("d-none")}}),this.hasOverflowingElements=t.length>this.maxVisibleCards,this.numberOfOverflowingElements=t.length-this.maxVisibleCards,this.numberOfAllChildElements=t.length,this.detectOverflow()}registerOverflowHandler(){this.observer=o(()=>{this.changeVisibilityOfSlotChildren()}),this.observer.observe(this.hostElement.shadowRoot.querySelector(".CardList__Content"),{childList:!0,subtree:!0}),requestAnimationFrame(()=>{this.changeVisibilityOfSlotChildren()})}shouldHandleOverflow(){if(this.suppressOverflowHandling)return!1;if(this.listStyle==="stack"||this.listStyle==="scroll")return!0}get listElement(){return this.hostElement.shadowRoot.querySelector(".CardList__Content")}onCardListScroll(){this.detectOverflow()}isShowMoreCardVisible(){return this.suppressOverflowHandling===!1&&this.hasOverflowingElements}getOpacityFromScrollDistance(t){return!this.listElement||t===0?0:t>100?1:t/100}computeMaskLayer(){return{"--ix-card-list-overflow":`linear-gradient(
      90deg,
      transparent 0px,
      black ${80*(this.getOpacityFromScrollDistance(this.leftScrollDistance)>0?1:0)}px,
      black calc(100% - ${80*(this.getOpacityFromScrollDistance(this.rightScrollDistance)>0?1:0)}px),
      transparent 100%
    )`}}detectOverflow(){let{clientWidth:t,scrollWidth:i,scrollLeft:r}=this.listElement;this.leftScrollDistance=r,this.rightScrollDistance=i-r-t}componentDidLoad(){this.shouldHandleOverflow()&&this.registerOverflowHandler()}disconnectedCallback(){this.observer&&this.observer.disconnect()}render(){return e(a,{key:"59b22287fe21651d515b79a8394b91f600f07a7a"},e(_,{key:"8f81a2633acb901e848c243a51d60752b35e5765",isCollapsed:this.collapse,label:this.label,showAllLabel:this.i18nShowAll,showAllCounter:this.showAllCount===void 0?this.numberOfAllChildElements:this.showAllCount,onClick:()=>this.onCardListVisibilityToggle(),onShowAllClick:t=>this.onShowAllClick(t),hideShowAll:this.hideShowAll}),e("div",{key:"d53f0dcc4707057dedbc08c3b57f9cde8887f225",class:{CardList__Overflow:!0},style:this.computeMaskLayer()},e("div",{key:"74e389bb906687dff585eabb348fd6265af7d401",class:{CardList__Content:!0,CardList__Content__Collapsed:this.collapse,CardList__Style__Flexbox__Scroll:this.listStyle==="stack",CardList__Style__Infinite__Scroll:this.listStyle==="scroll"},onScroll:()=>this.onCardListScroll()},e("slot",{key:"9a2ce4357b2e065c35c93c9fc24ef21c31ca0827",onSlotchange:()=>this.changeVisibilityOfSlotChildren()}),this.isShowMoreCardVisible()?e("ix-card",{class:{Show__All__Card:!0},onClick:t=>this.showMoreCardClick.emit({nativeEvent:t})},e("ix-card-content",{class:"Show__All__Card__Content"},e("ix-icon",{name:"more-menu",size:"32",class:"Show__All__Card__Icon"}),e("span",{class:"Show__All__Card__Text"},this.i18nMoreCards," (",this.numberOfOverflowingElements,")"))):null)))}get hostElement(){return n(this)}};return l.style=d,l})();export{f as ix_card_list};
