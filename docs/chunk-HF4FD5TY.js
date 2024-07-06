import{a as D}from"./chunk-6SPHCMAC.js";import{a as ce,b as F,c as W}from"./chunk-4BXBNGET.js";import{c as pe}from"./chunk-S3YCQRDJ.js";import{a as re,b as T,d as x,e as E,g as P,i as B,j as V,k as de,p as ae,q as le,r as se,s as I,v as me}from"./chunk-EE3LR2SH.js";import{h as K,j as M,k as X,m as $}from"./chunk-2ZBRESMT.js";import{Db as H,Ga as m,Ha as g,I as q,Q as ne,X as R,Ya as N,_a as u,ab as t,bb as n,cb as k,fa as S,ga as Q,gb as _,ib as h,jc as L,kc as J,oa as c,pa as p,pb as z,qb as G,rb as U,rc as oe,s as ie,sb as w,tb as a,ub as j,vb as Z,xb as b,yb as y,zb as v}from"./chunk-GFFIWVVQ.js";var ue=(()=>{let e=class e{constructor(o,d){this.productBrandService=o,this.router=d,this.productBrand={id:"",name:"",slug:""}}onSubmit(){this.productBrandService.addProductBrand(this.productBrand).subscribe({next:o=>{this.productBrand=o,this.router.navigate(["/admin/product-brands"])}})}};e.\u0275fac=function(d){return new(d||e)(g(F),g(M))},e.\u0275cmp=S({type:e,selectors:[["app-add-product-brand"]],decls:8,vars:2,consts:[["form","ngForm"],["data-bs-theme","dark",3,"ngSubmit"],[1,"mb-3"],[1,"form-label","text-light","ms-2"],["type","text","name","name","id","name","required","",1,"form-control",2,"outline","none","box-shadow","none",3,"ngModelChange","ngModel"],["type","submit",1,"btn","btn-dark","d-flex","ms-auto","me-1",3,"disabled"]],template:function(d,i){if(d&1){let l=_();t(0,"form",1,0),h("ngSubmit",function(){return c(l),p(i.onSubmit())}),t(2,"div",2)(3,"label",3),a(4,"Name"),n(),t(5,"input",4),v("ngModelChange",function(s){return c(l),y(i.productBrand.name,s)||(i.productBrand.name=s),p(s)}),n()(),t(6,"button",5),a(7," Create "),n()()}if(d&2){let l=w(1);m(5),b("ngModel",i.productBrand.name),m(),u("disabled",!l.valid)}},dependencies:[V,T,x,E,I,B,P]});let r=e;return r})();var ge=(()=>{let e=class e{constructor(o,d){this.productTypeService=o,this.router=d,this.productType={id:"",name:"",slug:""}}onSubmit(){this.productTypeService.addProductType(this.productType).subscribe({next:o=>{this.productType=o,this.router.navigate(["/admin/product-types"])}})}};e.\u0275fac=function(d){return new(d||e)(g(W),g(M))},e.\u0275cmp=S({type:e,selectors:[["app-add-product-type"]],decls:8,vars:2,consts:[["form","ngForm"],["data-bs-theme","dark",3,"ngSubmit"],[1,"mb-3"],[1,"form-label","text-light","ms-2"],["type","text","name","name","id","name","required","",1,"form-control",2,"outline","none","box-shadow","none",3,"ngModelChange","ngModel"],["type","submit",1,"btn","btn-dark","d-flex","ms-auto","me-1",3,"disabled"]],template:function(d,i){if(d&1){let l=_();t(0,"form",1,0),h("ngSubmit",function(){return c(l),p(i.onSubmit())}),t(2,"div",2)(3,"label",3),a(4,"Name"),n(),t(5,"input",4),v("ngModelChange",function(s){return c(l),y(i.productType.name,s)||(i.productType.name=s),p(s)}),n()(),t(6,"button",5),a(7," Create "),n()()}if(d&2){let l=w(1);m(5),b("ngModel",i.productType.name),m(),u("disabled",!l.valid)}},dependencies:[V,T,x,E,I,B,P]});let r=e;return r})();var _e=r=>["/admin/product-brands/product-brand-edit/",r];function we(r,e){r&1&&k(0,"div",7)}function Me(r,e){r&1&&(t(0,"div",8)(1,"span",9),a(2,"Loading..."),n()())}function Te(r,e){if(r&1&&(t(0,"tr")(1,"td"),a(2),n(),t(3,"td"),a(4),n(),t(5,"td")(6,"a",10),a(7,"Edit"),n()()()),r&2){let C=e.$implicit;m(2),j(C.id),m(2),j(C.name),m(2),u("routerLink",H(3,_e,C.slug))}}var he=(()=>{let e=class e{constructor(o){this.productBrandService=o,this.loading=!1}ngOnInit(){this.loading=!0,this.productBrandService.getProductBrands().pipe(q(1e3)).subscribe({next:o=>{this.loading=!1,this.productBrands=o},error:()=>{this.loading=!1}})}};e.\u0275fac=function(d){return new(d||e)(g(F))},e.\u0275cmp=S({type:e,selectors:[["app-edit-product-brand"]],decls:16,vars:3,consts:[[1,"container"],["class","overlay",4,"ngIf"],["role","status","class","spinner-border text-light loading",4,"ngIf"],[1,"my-3","text-light"],["data-bs-theme","dark",1,"table","table-bordered","mt-4",2,"background-color","#212529"],["scope","col"],[4,"ngFor","ngForOf"],[1,"overlay"],["role","status",1,"spinner-border","text-light","loading"],[1,"sr-only"],[1,"btn","btn-dark",3,"routerLink"]],template:function(d,i){d&1&&(t(0,"div",0),N(1,we,1,0,"div",1)(2,Me,3,0,"div",2),t(3,"h1",3),a(4,"Product Brand List"),n(),t(5,"table",4)(6,"thead")(7,"tr")(8,"th",5),a(9,"ID"),n(),t(10,"th",5),a(11,"Name"),n(),t(12,"th",5),a(13,"Actions"),n()()(),t(14,"tbody"),N(15,Te,8,5,"tr",6),n()()()),d&2&&(m(),u("ngIf",i.loading),m(),u("ngIf",i.loading),m(13),u("ngForOf",i.productBrands))},dependencies:[L,J,X],styles:[".overlay[_ngcontent-%COMP%]{height:100vh;width:100vw;position:fixed;top:0;left:0;z-index:999999999999999999999999999999999999999;background-color:#0000004d}.loading[_ngcontent-%COMP%]{position:fixed;top:50%;left:50%;z-index:9999999999999999999999999999999999999999}"]});let r=e;return r})();var xe=r=>["/admin/product-types/product-type-edit/",r];function Ee(r,e){r&1&&k(0,"div",7)}function Pe(r,e){r&1&&(t(0,"div",8)(1,"span",9),a(2,"Loading..."),n()())}function Be(r,e){if(r&1&&(t(0,"tr")(1,"td"),a(2),n(),t(3,"td"),a(4),n(),t(5,"td")(6,"a",10),a(7,"Edit"),n()()()),r&2){let C=e.$implicit;m(2),j(C.id),m(2),j(C.name),m(2),u("routerLink",H(3,xe,C.slug))}}var be=(()=>{let e=class e{constructor(o){this.productTypeService=o,this.loading=!1}ngOnInit(){this.loading=!0,this.productTypeService.getProductTypes().pipe(q(1e3)).subscribe({next:o=>{this.loading=!1,this.productTypes=o},error:()=>{this.loading=!1}})}};e.\u0275fac=function(d){return new(d||e)(g(W))},e.\u0275cmp=S({type:e,selectors:[["app-edit-product-type"]],decls:16,vars:3,consts:[[1,"container"],["class","overlay",4,"ngIf"],["role","status","class","spinner-border text-light loading",4,"ngIf"],[1,"my-3","text-light"],["data-bs-theme","dark",1,"table","table-bordered","mt-4",2,"background-color","#212529"],["scope","col"],[4,"ngFor","ngForOf"],[1,"overlay"],["role","status",1,"spinner-border","text-light","loading"],[1,"sr-only"],[1,"btn","btn-dark",3,"routerLink"]],template:function(d,i){d&1&&(t(0,"div",0),N(1,Ee,1,0,"div",1)(2,Pe,3,0,"div",2),t(3,"h1",3),a(4,"Product Type List"),n(),t(5,"table",4)(6,"thead")(7,"tr")(8,"th",5),a(9,"ID"),n(),t(10,"th",5),a(11,"Name"),n(),t(12,"th",5),a(13,"Actions"),n()()(),t(14,"tbody"),N(15,Be,8,5,"tr",6),n()()()),d&2&&(m(),u("ngIf",i.loading),m(),u("ngIf",i.loading),m(13),u("ngForOf",i.productTypes))},dependencies:[L,J,X],styles:[".overlay[_ngcontent-%COMP%]{height:100vh;width:100vw;position:fixed;top:0;left:0;z-index:999999999999999999999999999999999999999;background-color:#0000004d}.loading[_ngcontent-%COMP%]{position:fixed;display:flex;justify-content:center;align-items:center;top:50%;left:50%;z-index:9999999999999999999999999999999999999999}"]});let r=e;return r})();var Ve=["deleteConfirmationModal"],ye=(()=>{let e=class e{constructor(o,d,i){this.productTypeService=o,this.route=d,this.router=i,this.productType={id:"",name:"",slug:""},this.id=null,this.slug=null}ngOnInit(){this.idSubscription=this.route.paramMap.subscribe({next:o=>{this.slug=o.get("id")}}),this.getProductTypeBySlug()}ngAfterViewInit(){this.deleteModalInstance=new bootstrap.Modal(this.deleteConfirmationModal.nativeElement)}getProductTypeBySlug(){this.slug&&this.productTypeService.getProductTypeBySlug(this.slug).subscribe({next:o=>{this.productType=o,this.id=o.id}})}onSubmit(){this.id&&this.productTypeService.updateProductType(this.id,this.productType).subscribe({next:o=>{this.router.navigate(["/admin/product-types"])}})}openDeleteModal(){this.deleteModalInstance.show()}onDelete(){this.id&&this.productTypeService.deleteProductType(this.id).subscribe({next:o=>{this.router.navigate(["/admin/product-types"]),this.deleteModalInstance.hide()}})}ngOnDestroy(){this.idSubscription&&this.idSubscription.unsubscribe()}};e.\u0275fac=function(d){return new(d||e)(g(W),g(K),g(M))},e.\u0275cmp=S({type:e,selectors:[["app-product-type-editing"]],viewQuery:function(d,i){if(d&1&&z(Ve,5),d&2){let l;G(l=U())&&(i.deleteConfirmationModal=l.first)}},decls:27,vars:2,consts:[["form","ngForm"],["deleteConfirmationModal",""],[1,"container"],["data-bs-theme","dark",3,"ngSubmit"],[1,"mb-3"],[1,"form-label","text-light","ms-2"],["type","text","name","name","id","name","required","",1,"form-control",2,"outline","none","box-shadow","none",3,"ngModelChange","ngModel"],[1,"d-flex","align-items-center","justify-content-end"],["type","submit",1,"btn","btn-dark",3,"disabled"],["type","button",1,"btn","btn-danger","mx-3",3,"click"],["data-bs-theme","dark","id","deleteConfirmationModal","tabindex","-1","aria-labelledby","deleteConfirmationModalLabel","aria-hidden","true",1,"modal","fade",2,"z-index","9999999999999999999999999999999999999999999999999"],[1,"modal-dialog","modal-fullscreen-sm-down"],[1,"modal-content"],[1,"modal-header"],["id","deleteConfirmationModalLabel",1,"modal-title","text-light"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body","text-light"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(d,i){if(d&1){let l=_();t(0,"div",2)(1,"form",3,0),h("ngSubmit",function(){return c(l),p(i.onSubmit())}),t(3,"div",4)(4,"label",5),a(5,"Name"),n(),t(6,"input",6),v("ngModelChange",function(s){return c(l),y(i.productType.name,s)||(i.productType.name=s),p(s)}),n()(),t(7,"div",7)(8,"button",8),a(9," Update "),n(),t(10,"button",9),h("click",function(){return c(l),p(i.openDeleteModal())}),a(11," Delete "),n()()(),t(12,"div",10,1)(14,"div",11)(15,"div",12)(16,"div",13)(17,"h5",14),a(18," Confirm Delete "),n(),k(19,"button",15),n(),t(20,"div",16),a(21," Are you sure you want to delete this product Type? "),n(),t(22,"div",17)(23,"button",18),a(24," Cancel "),n(),t(25,"button",19),h("click",function(){return c(l),p(i.onDelete())}),a(26," Delete "),n()()()()()()}if(d&2){let l=w(2);m(6),b("ngModel",i.productType.name),m(2),u("disabled",!l.valid)}},dependencies:[V,T,x,E,I,B,P]});let r=e;return r})();var Ie=["deleteConfirmationModal"],ve=(()=>{let e=class e{constructor(o,d,i){this.productBrandService=o,this.route=d,this.router=i,this.productBrand={id:"",name:"",slug:""},this.id=null,this.slug=null}ngOnInit(){this.idSubscription=this.route.paramMap.subscribe({next:o=>{this.slug=o.get("id")}}),this.getProductBrandBySlug()}ngAfterViewInit(){this.deleteModalInstance=new bootstrap.Modal(this.deleteConfirmationModal.nativeElement)}getProductBrandBySlug(){this.slug&&this.productBrandService.getProductBrandBySlug(this.slug).subscribe({next:o=>{this.productBrand=o,this.id=o.id}})}onSubmit(){this.id&&this.productBrandService.updateProductBrand(this.id,this.productBrand).subscribe({next:o=>{this.router.navigate(["/admin/product-brands"])}})}openDeleteModal(){this.deleteModalInstance.show()}onDelete(){this.id&&this.productBrandService.deleteProductBrand(this.id).subscribe({next:o=>{this.router.navigate(["/admin/product-brands"]),this.deleteModalInstance.hide()}})}ngOnDestroy(){this.idSubscription&&this.idSubscription.unsubscribe()}};e.\u0275fac=function(d){return new(d||e)(g(F),g(K),g(M))},e.\u0275cmp=S({type:e,selectors:[["app-product-brand-editing"]],viewQuery:function(d,i){if(d&1&&z(Ie,5),d&2){let l;G(l=U())&&(i.deleteConfirmationModal=l.first)}},decls:27,vars:2,consts:[["form","ngForm"],["deleteConfirmationModal",""],[1,"container"],["data-bs-theme","dark",3,"ngSubmit"],[1,"mb-3"],[1,"form-label","text-light","ms-2"],["type","text","name","name","id","name","required","",1,"form-control",2,"outline","none","box-shadow","none",3,"ngModelChange","ngModel"],[1,"d-flex","align-items-center","justify-content-end"],["type","submit",1,"btn","btn-dark",3,"disabled"],["type","button",1,"btn","btn-danger","mx-3",3,"click"],["data-bs-theme","dark","id","deleteConfirmationModal","tabindex","-1","aria-labelledby","deleteConfirmationModalLabel","aria-hidden","true",1,"modal","fade",2,"z-index","99999999999999999999"],[1,"modal-dialog","modal-fullscreen-sm-down"],[1,"modal-content"],[1,"modal-header"],["id","deleteConfirmationModalLabel",1,"modal-title","text-light"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body","text-light"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(d,i){if(d&1){let l=_();t(0,"div",2)(1,"form",3,0),h("ngSubmit",function(){return c(l),p(i.onSubmit())}),t(3,"div",4)(4,"label",5),a(5,"Name"),n(),t(6,"input",6),v("ngModelChange",function(s){return c(l),y(i.productBrand.name,s)||(i.productBrand.name=s),p(s)}),n()(),t(7,"div",7)(8,"button",8),a(9," Update "),n(),t(10,"button",9),h("click",function(){return c(l),p(i.openDeleteModal())}),a(11," Delete "),n()()(),t(12,"div",10,1)(14,"div",11)(15,"div",12)(16,"div",13)(17,"h5",14),a(18," Confirm Delete "),n(),k(19,"button",15),n(),t(20,"div",16),a(21," Are you sure you want to delete this product brand? "),n(),t(22,"div",17)(23,"button",18),a(24," Cancel "),n(),t(25,"button",19),h("click",function(){return c(l),p(i.onDelete())}),a(26," Delete "),n()()()()()()}if(d&2){let l=w(2);m(6),b("ngModel",i.productBrand.name),m(2),u("disabled",!l.valid)}},dependencies:[V,T,x,E,I,B,P]});let r=e;return r})();function Ne(r,e){if(r&1&&(t(0,"option",16),a(1),n()),r&2){let C=e.$implicit;u("value",C.id),m(),Z(" ",C.name," ")}}function ke(r,e){if(r&1&&(t(0,"option",16),a(1),n()),r&2){let C=e.$implicit;u("value",C.id),m(),Z(" ",C.name," ")}}var Se=(()=>{let e=class e{constructor(o,d,i,l){this.brands=o,this.types=d,this.productService=i,this.router=l,this.fileName="",this.productBrands=[],this.productTypes=[],this.product={name:"",description:"",pictureUrl:"",inStock:!0,productBrandId:"",slug:"",productTypeId:"",price:null}}ngOnInit(){this.getAllProductBrands(),this.getAllProductTypes()}getAllProductBrands(){this.brands.getProductBrands().subscribe({next:o=>{this.productBrands=o}})}getAllProductTypes(){this.types.getProductTypes().subscribe({next:o=>{this.productTypes=o}})}onFileUploadChange(o){let d=o.currentTarget;if(d.files&&d.files.length>0){let i=d.files[0];if(i){this.file=i;let f=i.name.split(".").slice(0,-1).join(".");this.fileName=f}}}onSubmit(){this.file&&this.fileName!==""&&this.productService.uploadImage(this.file,this.fileName).pipe(ie(o=>o.url),ne(o=>(o&&(this.product.pictureUrl=o),this.productService.addProduct(this.product)))).subscribe({next:o=>{this.router.navigate(["/shop"])}})}};e.\u0275fac=function(d){return new(d||e)(g(F),g(W),g(ce),g(M))},e.\u0275cmp=S({type:e,selectors:[["app-product-creation"]],decls:30,vars:9,consts:[["form","ngForm"],["data-bs-theme","dark",3,"ngSubmit"],[1,"mb-3"],[1,"form-label","text-light","ms-2"],["type","text","name","name","id","name","required","",1,"form-control",2,"outline","none","box-shadow","none",3,"ngModelChange","ngModel"],[1,"form-label","text-light","mt-4","ms-2"],["type","textarea","name","description","id","description","required","",1,"form-control",2,"outline","none","box-shadow","none",3,"ngModelChange","ngModel"],["type","file","name","pictureUrl",1,"form-control","text-light",3,"change"],["type","number","name","price","id","price","required","",1,"form-control",2,"outline","none","box-shadow","none",3,"ngModelChange","ngModel"],["name","productBrand","id","productBrand","required","",1,"form-control",3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],["name","productType","id","productType","required","",1,"form-control",3,"ngModelChange","ngModel"],[1,"mb-3","form-check","mt-3"],["type","checkbox","id","inStock","name","inStock",1,"form-check-input",3,"ngModelChange","ngModel"],[1,"form-check-label","text-light"],["type","submit",1,"btn","btn-dark","d-flex","ms-auto","me-1",3,"disabled"],[3,"value"]],template:function(d,i){if(d&1){let l=_();t(0,"form",1,0),h("ngSubmit",function(){return c(l),p(i.onSubmit())}),t(2,"div",2)(3,"label",3),a(4,"Name"),n(),t(5,"input",4),v("ngModelChange",function(s){return c(l),y(i.product.name,s)||(i.product.name=s),p(s)}),n(),t(6,"label",5),a(7,"Description"),n(),t(8,"textarea",6),v("ngModelChange",function(s){return c(l),y(i.product.description,s)||(i.product.description=s),p(s)}),a(9,"    "),n(),t(10,"label",5),a(11,"Product Image"),n(),t(12,"input",7),h("change",function(s){return c(l),p(i.onFileUploadChange(s))}),n(),t(13,"label",5),a(14,"Price"),n(),t(15,"input",8),v("ngModelChange",function(s){return c(l),y(i.product.price,s)||(i.product.price=s),p(s)}),n(),t(16,"label",5),a(17,"Product Brand"),n(),t(18,"select",9),v("ngModelChange",function(s){return c(l),y(i.product.productBrandId,s)||(i.product.productBrandId=s),p(s)}),N(19,Ne,2,2,"option",10),n(),t(20,"label",5),a(21,"Product Types"),n(),t(22,"select",11),v("ngModelChange",function(s){return c(l),y(i.product.productTypeId,s)||(i.product.productTypeId=s),p(s)}),N(23,ke,2,2,"option",10),n(),t(24,"div",12)(25,"input",13),v("ngModelChange",function(s){return c(l),y(i.product.inStock,s)||(i.product.inStock=s),p(s)}),n(),t(26,"label",14),a(27,"In Stock"),n()()(),t(28,"button",15),a(29," Create "),n()()}if(d&2){let l=w(1);m(5),b("ngModel",i.product.name),m(3),b("ngModel",i.product.description),m(7),b("ngModel",i.product.price),m(3),b("ngModel",i.product.productBrandId),m(),u("ngForOf",i.productBrands),m(3),b("ngModel",i.product.productTypeId),m(),u("ngForOf",i.productTypes),m(2),b("ngModel",i.product.inStock),m(3),u("disabled",!l.valid)}},dependencies:[L,V,le,se,T,de,re,ae,x,E,I,B,P]});let r=e;return r})();var De=[{path:"add-product-type",canActivate:[D],component:ge},{path:"add-product-brand",canActivate:[D],component:ue},{path:"product-brands",canActivate:[D],component:he},{path:"product-types",canActivate:[D],component:be},{path:"product-brands/product-brand-edit/:id",canActivate:[D],component:ve},{path:"product-types/product-type-edit/:id",canActivate:[D],component:ye},{path:"add-product",canActivate:[D],component:Se}],Ce=(()=>{let e=class e{};e.\u0275fac=function(d){return new(d||e)},e.\u0275mod=Q({type:e}),e.\u0275inj=R({imports:[$.forChild(De),$]});let r=e;return r})();var St=(()=>{let e=class e{};e.\u0275fac=function(d){return new(d||e)},e.\u0275mod=Q({type:e}),e.\u0275inj=R({imports:[oe,me,Ce,pe]});let r=e;return r})();export{St as AdminModule};