import{a as Z,b as _t,c as vt,d as Q,e as yt,f as wt,g as It,h as kt,i as W,j as X,k as Et}from"./chunk-VLKR6JZL.js";import{a as xt}from"./chunk-5YIGJS2A.js";import{w as gt}from"./chunk-EE3LR2SH.js";import{k as ht,m as q}from"./chunk-2ZBRESMT.js";import"./chunk-D7LMDJMI.js";import{$ as E,Da as st,Fb as I,Ga as u,Gb as k,Ha as h,X as l,Ya as y,Z as ct,_a as g,a as T,ab as d,bb as r,bc as $,cb as F,fa as C,ga as c,gb as Y,ib as x,jb as w,jc as ft,kc as ut,nb as mt,nc as pt,oa as M,pa as R,qc as bt,rc as j,tb as s,ub as A,vb as L}from"./chunk-GFFIWVVQ.js";function Yt(i,t){i&1&&(d(0,"div")(1,"p",1),s(2," There are no items in your basket "),r()())}function $t(i,t){if(i&1){let e=Y();d(0,"tr")(1,"th",16)(2,"div",17),F(3,"img",18),d(4,"div",19)(5,"h5",20)(6,"a",21),s(7),r()(),d(8,"span",22),s(9),r()()()(),d(10,"td",23)(11,"strong"),s(12),I(13,"currency"),r()(),d(14,"td",23)(15,"div",24)(16,"i",25),x("click",function(){let n=M(e).$implicit,a=w(3);return R(a.decrementItemQuantity(n))}),r(),d(17,"span",26),s(18),r(),d(19,"i",27),x("click",function(){let n=M(e).$implicit,a=w(3);return R(a.incrementItemQuantity(n))}),r()()(),d(20,"td",23)(21,"strong"),s(22),I(23,"currency"),r()(),d(24,"td",28)(25,"a",29)(26,"i",30),x("click",function(){let n=M(e).$implicit,a=w(3);return R(a.removeBasketItem(n))}),r()()()()}if(i&2){let e=t.$implicit;u(3),g("src",e.pictureUrl,st)("alt",e.productName),u(3),mt("routerLink","/shop/",e.id,""),u(),A(e.productName),u(2),L(" Type: ",e.type,""),u(3),A(k(13,9,e.price)),u(6),A(e.quantity),u(4),L(" ",k(23,11,e.price*e.quantity)," ")}}function qt(i,t){if(i&1&&(d(0,"div",3)(1,"div",4)(2,"div",5)(3,"div",6)(4,"div",7)(5,"div",8)(6,"table",9)(7,"thead")(8,"tr")(9,"th",10)(10,"div",11),s(11,"Product"),r()(),d(12,"th",10)(13,"div",12),s(14,"Price"),r()(),d(15,"th",10)(16,"div",12),s(17,"Quantity"),r()(),d(18,"th",10)(19,"div",12),s(20,"Total"),r()(),d(21,"th",10)(22,"div",12),s(23,"Remove"),r()()()(),d(24,"tbody"),y(25,$t,27,13,"tr",13),r()()()()(),d(26,"div",6)(27,"div",14),F(28,"app-order-totals"),d(29,"a",15),s(30,"Proceed to checkout"),r()()()()()()),i&2){let e=t.ngIf;u(25),g("ngForOf",e.items)}}function Zt(i,t){if(i&1&&(d(0,"div"),y(1,qt,31,1,"div",2),I(2,"async"),r()),i&2){let e=w();u(),g("ngIf",k(2,1,e.basket$))}}var Ct=(()=>{let t=class t{constructor(o){this.basket=o}ngOnInit(){this.basket$=this.basket.basket$}removeBasketItem(o){this.basket.removeItemFromBasket(o)}incrementItemQuantity(o){this.basket.incrementItemQuantity(o)}decrementItemQuantity(o){this.basket.decrementItemQuantity(o)}};t.\u0275fac=function(n){return new(n||t)(h(xt))},t.\u0275cmp=C({type:t,selectors:[["app-basket"]],decls:5,vars:8,consts:[[4,"ngIf"],[2,"display","flex","justify-content","center","font-size","26px","margin-top","220px"],["data-bs-theme","dark",4,"ngIf"],["data-bs-theme","dark"],[1,"pb-5"],[1,"container"],[1,"row"],[1,"col-12","py-5","mb-1"],[1,"table-responsive"],[1,"table"],["scope","col",1,"border-0","bg-dark"],[1,"p-2","px-3","text-uppercase"],[1,"py-2","text-uppercase"],[4,"ngFor","ngForOf"],[1,"col-6","offset-6"],["routerLink","/checkout",1,"btn","btn-dark","py-2",2,"width","100%"],["scope","row",2,"background-color","rgb(25, 25, 25)"],[1,"p-2"],[1,"image-fluid",2,"max-height","50px","max-width","50px",3,"src","alt"],[1,"ms-3","d-inline-block","align-middle"],[1,"mb-0"],[1,"text-light",2,"text-decoration","none",3,"routerLink"],[1,"text-muted","font-weight-normal","font-italic","d-block"],[1,"align-middle",2,"background-color","rgb(25, 25, 25)"],[1,"d-flex","align-items-center"],[1,"fa","fa-minus-circle","text-light","me-2",2,"cursor","pointer","font-size","1.5em",3,"click"],[1,"font-weight-bold",2,"font-size","1.2em"],[1,"fa","fa-plus-circle","text-light","mx-2",2,"cursor","pointer","font-size","1.5em",3,"click"],[1,"align-middle","text-center",2,"background-color","rgb(25, 25, 25)"],[1,"text-danger",2,"cursor","pointer"],[1,"fa","fa-trash",2,"font-size","1.5em","cursor","pointer",3,"click"]],template:function(n,a){if(n&1&&(y(0,Yt,3,0,"div",0),I(1,"async"),I(2,"async"),y(3,Zt,3,3,"div",0),I(4,"async")),n&2){let p,S;g("ngIf",k(1,2,a.basket$)===null||((p=k(2,4,a.basket$))==null||p.items==null?null:p.items.length)===0),u(3),g("ngIf",((S=k(4,6,a.basket$))==null||S.items==null?null:S.items.length)!==0)}},dependencies:[ft,ut,ht,Et,pt,bt]});let i=t;return i})();var Qt=[{path:"",component:Ct}],Ft=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=c({type:t}),t.\u0275inj=l({imports:[q.forChild(Qt),q]});let i=t;return i})();function te(){return!0}var ee=new ct("mat-sanity-checks",{providedIn:"root",factory:te}),m=(()=>{let t=class t{constructor(o,n,a){this._sanityChecks=n,this._document=a,this._hasDoneGlobalChecks=!1,o._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(o){return vt()?!1:typeof this._sanityChecks=="boolean"?this._sanityChecks:!!this._sanityChecks[o]}};t.\u0275fac=function(n){return new(n||t)(E(kt),E(ee,8),E($))},t.\u0275mod=c({type:t}),t.\u0275inj=l({imports:[W,W]});let i=t;return i})();var b=function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i}(b||{}),G=class{constructor(t,e,o,n=!1){this._renderer=t,this.element=e,this.config=o,this._animationForciblyDisabledThroughCss=n,this.state=b.HIDDEN}fadeOut(){this._renderer.fadeOutRipple(this)}},Dt=Z({passive:!0,capture:!0}),K=class{constructor(){this._events=new Map,this._delegateEventHandler=t=>{let e=_t(t);e&&this._events.get(t.type)?.forEach((o,n)=>{(n===e||n.contains(e))&&o.forEach(a=>a.handleEvent(t))})}}addHandler(t,e,o,n){let a=this._events.get(e);if(a){let p=a.get(o);p?p.add(n):a.set(o,new Set([n]))}else this._events.set(e,new Map([[o,new Set([n])]])),t.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Dt)})}removeHandler(t,e,o){let n=this._events.get(t);if(!n)return;let a=n.get(e);a&&(a.delete(o),a.size===0&&n.delete(e),n.size===0&&(this._events.delete(t),document.removeEventListener(t,this._delegateEventHandler,Dt)))}},St={enterDuration:225,exitDuration:150},ie=800,Tt=Z({passive:!0,capture:!0}),Mt=["mousedown","touchstart"],Rt=["mouseup","mouseleave","touchend","touchcancel"],z=class z{constructor(t,e,o,n){this._target=t,this._ngZone=e,this._platform=n,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,n.isBrowser&&(this._containerElement=Q(o))}fadeInRipple(t,e,o={}){let n=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),a=T(T({},St),o.animation);o.centered&&(t=n.left+n.width/2,e=n.top+n.height/2);let p=o.radius||oe(t,e,n),S=t-n.left,Vt=e-n.top,V=a.enterDuration,f=document.createElement("div");f.classList.add("mat-ripple-element"),f.style.left=`${S-p}px`,f.style.top=`${Vt-p}px`,f.style.height=`${p*2}px`,f.style.width=`${p*2}px`,o.color!=null&&(f.style.backgroundColor=o.color),f.style.transitionDuration=`${V}ms`,this._containerElement.appendChild(f);let nt=window.getComputedStyle(f),Ut=nt.transitionProperty,at=nt.transitionDuration,U=Ut==="none"||at==="0s"||at==="0s, 0s"||n.width===0&&n.height===0,v=new G(this,f,o,U);f.style.transform="scale3d(1, 1, 1)",v.state=b.FADING_IN,o.persistent||(this._mostRecentTransientRipple=v);let dt=null;return!U&&(V||a.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let rt=()=>this._finishRippleTransition(v),lt=()=>this._destroyRipple(v);f.addEventListener("transitionend",rt),f.addEventListener("transitioncancel",lt),dt={onTransitionEnd:rt,onTransitionCancel:lt}}),this._activeRipples.set(v,dt),(U||!V)&&this._finishRippleTransition(v),v}fadeOutRipple(t){if(t.state===b.FADING_OUT||t.state===b.HIDDEN)return;let e=t.element,o=T(T({},St),t.config.animation);e.style.transitionDuration=`${o.exitDuration}ms`,e.style.opacity="0",t.state=b.FADING_OUT,(t._animationForciblyDisabledThroughCss||!o.exitDuration)&&this._finishRippleTransition(t)}fadeOutAll(){this._getActiveRipples().forEach(t=>t.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(t=>{t.config.persistent||t.fadeOut()})}setupTriggerEvents(t){let e=Q(t);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Mt.forEach(o=>{z._eventManager.addHandler(this._ngZone,o,e,this)}))}handleEvent(t){t.type==="mousedown"?this._onMousedown(t):t.type==="touchstart"?this._onTouchStart(t):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Rt.forEach(e=>{this._triggerElement.addEventListener(e,this,Tt)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(t){t.state===b.FADING_IN?this._startFadeOutTransition(t):t.state===b.FADING_OUT&&this._destroyRipple(t)}_startFadeOutTransition(t){let e=t===this._mostRecentTransientRipple,{persistent:o}=t.config;t.state=b.VISIBLE,!o&&(!e||!this._isPointerDown)&&t.fadeOut()}_destroyRipple(t){let e=this._activeRipples.get(t)??null;this._activeRipples.delete(t),this._activeRipples.size||(this._containerRect=null),t===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),t.state=b.HIDDEN,e!==null&&(t.element.removeEventListener("transitionend",e.onTransitionEnd),t.element.removeEventListener("transitioncancel",e.onTransitionCancel)),t.element.remove()}_onMousedown(t){let e=wt(t),o=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+ie;!this._target.rippleDisabled&&!e&&!o&&(this._isPointerDown=!0,this.fadeInRipple(t.clientX,t.clientY,this._target.rippleConfig))}_onTouchStart(t){if(!this._target.rippleDisabled&&!It(t)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=t.changedTouches;if(e)for(let o=0;o<e.length;o++)this.fadeInRipple(e[o].clientX,e[o].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(t=>{let e=t.state===b.VISIBLE||t.config.terminateOnPointerUp&&t.state===b.FADING_IN;!t.config.persistent&&e&&t.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let t=this._triggerElement;t&&(Mt.forEach(e=>z._eventManager.removeHandler(e,t,this)),this._pointerUpEventsRegistered&&(Rt.forEach(e=>t.removeEventListener(e,this,Tt)),this._pointerUpEventsRegistered=!1))}};z._eventManager=new K;var At=z;function oe(i,t,e){let o=Math.max(Math.abs(i-e.left),Math.abs(i-e.right)),n=Math.max(Math.abs(t-e.top),Math.abs(t-e.bottom));return Math.sqrt(o*o+n*n)}var Lt=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=c({type:t}),t.\u0275inj=l({imports:[m,m]});let i=t;return i})();var jt=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=c({type:t}),t.\u0275inj=l({imports:[m,Lt,m]});let i=t;return i})();var Pt=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=c({type:t}),t.\u0275inj=l({imports:[m,m]});let i=t;return i})();var Ht=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=c({type:t}),t.\u0275inj=l({});let i=t;return i})();var ot=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=c({type:t}),t.\u0275inj=l({imports:[m,j,yt,m]});let i=t;return i})();var Bt=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=c({type:t}),t.\u0275inj=l({imports:[m,ot,ot,Ht,m]});let i=t;return i})();var Hi=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=c({type:t}),t.\u0275inj=l({imports:[j,Ft,X,jt,Pt,Bt,gt,X]});let i=t;return i})();export{Hi as BasketModule};