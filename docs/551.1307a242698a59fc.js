"use strict";(self.webpackChunkmyApp=self.webpackChunkmyApp||[]).push([[551],{551:(q,m,s)=>{s.r(m),s.d(m,{ProductsPageModule:()=>I});var p=s(6814),l=s(4670),t=s(4946),x=s(832),r=s(95);function y(o,a){if(1&o&&(t.ynx(0),t._UZ(1,"img",24),t.BQk()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("src",e.data.spinnerImg,t.LSH)}}let O=(()=>{class o{constructor(){this.cartItems=[],this.addToCartClicked=new t.vpe,this.cartClickCount=0,this.radioValue="250",this.checkBoxValue=!1,this.quantity=1,this.showQuantityContainer=!1,this.hideButton=!0}sendMessage(e){alert(`\u0412\u044b \u0432\u044b\u0431\u0440\u0430\u043b\u0438 \u043a\u043e\u0444\u0435 \u0441 index: ${e}`)}ngOnInit(){const e=localStorage.getItem("cartItems");this.cartItems=e?JSON.parse(e):[]}saveCartItemsToLocalStorage(){localStorage.setItem("cartItems",JSON.stringify(this.cartItems))}increaseQuantity(){this.quantity++,this.saveCartItemsToLocalStorage()}decreaseQuantity(){this.quantity>1&&this.quantity--,this.saveCartItemsToLocalStorage()}addNewItem(e){this.showQuantityContainer=!0,this.hideButton=!1,this.addToCartClicked.emit(this.cartItems.length);const _=this.data?.name,Z=this.data?.img,T=this.checkBoxValue?"Sugar":"Without Sugar",f="250"===this.radioValue?"250":"500",u="250"===this.radioValue?this.data.price250:this.data.discount,P=localStorage.getItem("cartItems");let d=P?JSON.parse(P):[];this.cartItems=d;const g=d.findIndex(M=>M.name===_&&M.radio===f);-1!==g?(d[g].quantity+=1,d[g].price+=1*u):d.push({name:_,img:Z,quantity:this.quantity,active:T,radio:f,price:u,price2:u}),this.cartItems=d,localStorage.setItem("cartItems",JSON.stringify(d))}sendMessageRadioButton(e){"500"===this.radioValue?console.log(`[${e}] \u0412\u044b \u0432\u044b\u0431\u0440\u0430\u043b\u0438 500 \u043c\u043b`):console.log(`[${e}] \u0412\u044b \u0432\u044b\u0431\u0440\u0430\u043b\u0438 250 \u043c\u043b`)}sendMessageSugar(e){this.checkBoxValue?console.log(`[${e}] \u0412\u044b \u0432\u044b\u0431\u0440\u0430\u043b\u0438 \u0441 \u0441\u0430\u0445\u0430\u0440\u043e\u043c`):console.log(`[${e}] \u0412\u044b \u0432\u044b\u0431\u0440\u0430\u043b\u0438 \u0431\u0435\u0437 \u0441\u0430\u0445\u0430\u0440\u0430`)}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-product"]],inputs:{data:"data",cartItems:"cartItems"},outputs:{addToCartClicked:"addToCartClicked"},decls:36,vars:17,consts:[[1,"cart"],[1,"cart__img-container"],["alt","Product2",1,"cart__img",3,"src"],[4,"ngIf"],[1,"cart__name-price-container"],[1,"cart__name"],[1,"cart__price"],["cartForm","ngForm"],[1,"cart__options-container"],[1,"cart__option-container"],["type","radio","value","250",3,"name","id","ngModel","ngModelChange","change"],[1,"cart__label",3,"for"],[1,"cart__quantity-container"],["type","button",1,"quanity-counter-product-button","button-left",3,"click"],["src","assets/Minus.svg","alt","Minus"],["type","number","name","quantity",1,"quanity-counter-product",3,"ngModel","ngModelChange"],["type","button",1,"quanity-counter-product-button","button-right",3,"click"],["src","assets/Plus.svg","alt","Minus"],["type","radio","value","500",3,"name","id","ngModel","ngModelChange","change"],["type","checkbox","name","Sugar",3,"id","ngModel","ngModelChange","change"],[1,"cart__buttons-container"],[1,"cart__prm-btn",3,"click"],["src","assets/Info.svg","alt","Info",1,"cart__info-button"],[1,"cart__article-shape"],["alt","Product1",1,"cart__stamp",3,"src"]],template:function(e,n){1&e&&(t.TgZ(0,"article",0)(1,"div",1),t._UZ(2,"img",2),t.YNc(3,y,2,1,"ng-container",3),t.qZA(),t.TgZ(4,"div",4)(5,"h2",5),t._uU(6),t.qZA(),t.TgZ(7,"span",6),t._uU(8),t.qZA()(),t.TgZ(9,"form",null,7)(11,"div",8)(12,"div",9)(13,"input",10),t.NdJ("ngModelChange",function(c){return n.radioValue=c})("change",function(){return n.sendMessageRadioButton(n.data.index)}),t.qZA(),t.TgZ(14,"label",11),t._uU(15,"250 ml"),t.qZA()(),t.TgZ(16,"div",12)(17,"button",13),t.NdJ("click",function(){return n.addNewItem(n.decreaseQuantity())}),t._UZ(18,"img",14),t.qZA(),t.TgZ(19,"input",15),t.NdJ("ngModelChange",function(c){return n.quantity=c}),t.qZA(),t.TgZ(20,"button",16),t.NdJ("click",function(){return n.addNewItem(n.increaseQuantity())}),t._UZ(21,"img",17),t.qZA()(),t.TgZ(22,"div",9)(23,"input",18),t.NdJ("ngModelChange",function(c){return n.radioValue=c})("change",function(){return n.sendMessageRadioButton(n.data.index)}),t.qZA(),t.TgZ(24,"label",11),t._uU(25,"500 ML"),t.qZA()(),t._uU(26),t.TgZ(27,"div",9)(28,"input",19),t.NdJ("ngModelChange",function(c){return n.checkBoxValue=c})("change",function(){return n.sendMessageSugar(n.data.index)}),t.qZA(),t.TgZ(29,"label",11),t._uU(30,"Add sugar"),t.qZA()()()(),t.TgZ(31,"div",20)(32,"button",21),t.NdJ("click",function(){return n.addNewItem(n.data)}),t._uU(33,"Add to cart"),t.qZA(),t._UZ(34,"img",22),t.qZA()(),t._UZ(35,"div",23)),2&e&&(t.xp6(2),t.Q6J("src",n.data.img,t.LSH),t.xp6(1),t.Q6J("ngIf",n.data.spinnerImg),t.xp6(3),t.Oqu(null==n.data?null:n.data.name),t.xp6(2),t.hij("$",n.data.discount,""),t.xp6(5),t.Q6J("name",n.data.radioName)("id",n.data.radioId1)("ngModel",n.radioValue),t.xp6(1),t.Q6J("for",n.data.radioId1),t.xp6(5),t.Q6J("ngModel",n.quantity),t.xp6(4),t.Q6J("name",n.data.radioName)("id",n.data.radioId2)("ngModel",n.radioValue),t.xp6(1),t.Q6J("for",n.data.radioId2),t.xp6(2),t.hij(" ",n.data.id," "),t.xp6(2),t.Q6J("id",n.data.checkBoxName)("ngModel",n.checkBoxValue),t.xp6(1),t.Q6J("for",n.data.checkBoxName))},dependencies:[p.O5,r._Y,r.Fj,r.wV,r.Wl,r._,r.JJ,r.JL,r.On,r.F],styles:['.product-list[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;margin-top:64px}.container-padding[_ngcontent-%COMP%]{margin-bottom:64px}.cart[_ngcontent-%COMP%]{max-width:624px}.cart__name-price-container[_ngcontent-%COMP%]{display:flex;align-items:center;margin-top:24px}.cart__price[_ngcontent-%COMP%]{font:700 16px/120% Eczar;color:#fff;padding:2px 6px;border-radius:16px;background:#F73;margin-left:8px;margin-bottom:4px}h2[_ngcontent-%COMP%]{font:700 32px/120% Eczar;color:#023a6b}.cart__options-container[_ngcontent-%COMP%]{display:flex;max-width:280px;flex-wrap:wrap;margin:16px 0}.cart__option-container[_ngcontent-%COMP%]{display:flex;align-items:center}.cart__option-container[_ngcontent-%COMP%]:nth-child(2){margin-left:16px}.cart__option-container[_ngcontent-%COMP%]:last-child{margin-top:16px;margin-bottom:8px}.cart-item-option-container[_ngcontent-%COMP%]{display:flex;width:60px}.cart-item-option-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:8px}input[type=radio][_ngcontent-%COMP%], input[type=checkbox][_ngcontent-%COMP%]{position:relative;appearance:none;-webkit-appearance:none;-moz-appearance:none;width:24px;height:24px;background:white;border-radius:50%;outline:none;cursor:pointer;margin-right:12px}input[type=radio][_ngcontent-%COMP%]:checked{background-color:#f73;border:4px solid white}input[type=checkbox][_ngcontent-%COMP%]:checked{background-color:#fff;border:8px solid #FFBD5C}input[type=checkbox][_ngcontent-%COMP%]:checked:before{content:"";display:inline-block;width:12px;height:12px;border-radius:100px;background-color:#fff;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.cart__buttons-container[_ngcontent-%COMP%]{display:flex;align-items:center}.buttons-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-left:16px;cursor:pointer}.cart__prm-btn[_ngcontent-%COMP%]{border-radius:64px;border:2px solid #FFBD5C;padding:16px 24px;color:#023a6b;font:700 14px/114.286% Open Sans,sans-serif;text-transform:uppercase;background:unset;cursor:pointer;transition:.5s}.cart__prm-btn[_ngcontent-%COMP%]:hover{background:#FFBD5C}.cart__info-button[_ngcontent-%COMP%]{transition:.3s;margin-left:16px}.cart__info-button[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.cart__img-container[_ngcontent-%COMP%]{position:relative}.cart__stamp[_ngcontent-%COMP%]{position:absolute;right:40px;bottom:16px;animation:_ngcontent-%COMP%_rotate 5.6s ease-out infinite}@keyframes _ngcontent-%COMP%_rotate{0%{transform:rotate(0)}50%{transform:rotate(180deg)}}@media only screen and (max-width: 769px){.product-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center}.cart[_ngcontent-%COMP%]:last-child{margin-top:64px}}@media only screen and (max-width: 412px){.Logo[_ngcontent-%COMP%]{height:34px}.cart__stamp[_ngcontent-%COMP%]{position:absolute;right:80px;bottom:16px;animation:_ngcontent-%COMP%_rotate 5.6s ease-out infinite}.cart__article-shape[_ngcontent-%COMP%]{width:100%;border:1px solid white;margin-top:32px}.container-padding[_ngcontent-%COMP%]{margin-bottom:unset}.container[_ngcontent-%COMP%]{padding:24px;margin:8px auto 0}.product-list[_ngcontent-%COMP%]{margin-top:40px}.cart[_ngcontent-%COMP%]{margin-top:40px;max-width:unset;width:100%}.cart[_ngcontent-%COMP%]:nth-child(2){margin-top:40px}.cart[_ngcontent-%COMP%]:last-child{margin-bottom:32px;margin-top:40px}.cart[_ngcontent-%COMP%]:last-child   .cart__article-shape[_ngcontent-%COMP%]{border:0}h2[_ngcontent-%COMP%]{font:700 24px/120% Eczar;color:#023a6b}}.cart__quantity-container[_ngcontent-%COMP%]{position:relative;max-width:141px}.quanity-counter-product[_ngcontent-%COMP%]{z-index:1;width:141px}']}),o})();function b(o,a){1&o&&t._UZ(0,"app-product",5),2&o&&t.Q6J("data",a.$implicit)}const w=[{path:"",component:(()=>{class o{addNewItem(e){this.messageEvent.emit("Hey!"),console.log(`Hi! ${e}`)}sendMessage(e){alert(`\u0412\u044b \u0432\u044b\u0431\u0440\u0430\u043b\u0438 \u043a\u043e\u0444\u0435 \u0441 index: ${e}`)}constructor(e,n){this.service=e,this.activatedRoute=n,this.messageEvent=new t.vpe,this.sectionNameFirstPart="We believe a cup of coffee is one of the most important, simple",this.sectionNameSecondPart="in life",this.specialWord="pleasures ",this.productList=[],this.activatedRoute.data.subscribe(i=>{this.service.products=i.products.products,this.product=this.service.products})}onSubmit(){console.log(this.service.products)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(x.s),t.Y36(l.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-product-page"]],inputs:{index:"index",data:"data"},outputs:{messageEvent:"messageEvent"},features:[t._Bn([])],decls:10,vars:7,consts:[[1,"container"],[1,"header-wrapper"],[1,"special-word"],[1,"product-list","container-padding"],["class","cart-container",3,"data",4,"ngFor","ngForOf"],[1,"cart-container",3,"data"]],template:function(e,n){1&e&&(t.TgZ(0,"section",0)(1,"h1",1),t._uU(2),t.TgZ(3,"span",2),t._uU(4),t.qZA(),t._uU(5),t.qZA(),t._uU(6),t.ALo(7,"json"),t.TgZ(8,"div",3),t.YNc(9,b,1,1,"app-product",4),t.qZA()()),2&e&&(t.xp6(2),t.hij(" ",n.sectionNameFirstPart," "),t.xp6(2),t.Oqu(n.specialWord),t.xp6(1),t.hij("",n.sectionNameSecondPart," "),t.xp6(1),t.hij(" ",t.lcZ(7,5,n.data)," "),t.xp6(3),t.Q6J("ngForOf",n.product))},dependencies:[p.sg,O,p.Ts],styles:[".container[_ngcontent-%COMP%]{max-width:960px;margin:64px auto}.header-wrapper[_ngcontent-%COMP%]{max-width:720px}h1[_ngcontent-%COMP%]{color:#023a6b;font:700 48px/120% Eczar,sans-serif}.special-word[_ngcontent-%COMP%]{font:700 48px/120% Eczar;color:#f73}.product-list[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;margin-top:64px}@media only screen and (max-width: 769px){.container[_ngcontent-%COMP%]{padding:0 24px}.product-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center}}@media only screen and (max-width: 412px){.cart-container[_ngcontent-%COMP%]{width:100%}.cart-container[_ngcontent-%COMP%]:last-child   .cart__article-shape[_ngcontent-%COMP%]{border:1px solid blue}h1[_ngcontent-%COMP%]{color:#023a6b;font-family:Eczar;font-size:24px;font-style:normal;font-weight:700;line-height:130%}.product-list[_ngcontent-%COMP%]{margin-top:40px}.special-word[_ngcontent-%COMP%]{color:#f73;font-family:Eczar;font-size:24px;font-style:normal;font-weight:700;line-height:130%}}"]}),o})()}];let v=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[l.Bz.forChild(w),l.Bz]}),o})(),I=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[p.ez,r.u5,v]}),o})()}}]);