"use strict";(self.webpackChunkTheme_One=self.webpackChunkTheme_One||[]).push([[984],{984:(t,i,s)=>{s.r(i),s.d(i,{salla_product_availability:()=>a});var e=s(378),l=s(863);const a=class{constructor(t){(0,e.r)(this,t),this.isUser=l.H.isUser(),this.productId=salla.config.get("page.id"),this.isSubscribed=!1,this.submit=async()=>{if(this.isUser)return salla.api.product.availabilitySubscribe(this.productId).then((()=>this.isSubscribed=!0));let{mobile:t,countryCode:i}=await this.mobileInput.getValues(),s={id:this.productId,country_code:i};return""!==t&&(s.mobile=t),""!==this.email.value&&(s.email=this.email.value),await this.validateform(),this.btn.load().then((()=>this.btn.disable())).then((()=>salla.api.product.availabilitySubscribe(s))).then((()=>this.isSubscribed=!0)).then((()=>this.btn.stop())).then((()=>this.modal.hide())).catch((()=>this.btn.stop()&&this.btn.enable()))},this.typing=(t,i)=>{const s=t.target.nextElementSibling;t.target.classList.remove("s-has-error"),(null==s?void 0:s.classList.contains("s-product-availability-error-msg"))&&(s.innerText=""),"Enter"==t.key&&i()},this.isUser||(this.channelsWatcher(this.channels),this.title_=this.host.title||salla.lang.get("pages.products.notify_availability_title"),this.host.removeAttribute("title"),salla.event.on("languages::translations.loaded",(()=>{var t,i,s,e;this.title_=this.host.title||salla.lang.get("pages.products.notify_availability_title"),this.subTitle=salla.lang.get("pages.products.notify_availability_subtitle"),this.mobileLabel=salla.lang.get("common.elements.mobile"),this.emailLabel=salla.lang.get("common.elements.email"),this.emailPlaceholder=salla.lang.get("common.elements.email_placeholder"),this.subscribedMessage=salla.lang.get("pages.products.notify_availability_success"),this.emailErrorMsg=salla.lang.get("common.elements.email_is_valid"),null===(t=this.modal)||void 0===t||t.setTitle(this.title_),null===(i=this.btn)||void 0===i||i.setText(salla.lang.get("common.elements.submit")),null===(s=this.cancelBtn)||void 0===s||s.setText(salla.lang.get("common.elements.cancel")),null===(e=this.inlineBtn)||void 0===e||e.setText(salla.lang.get("pages.products.notify_availability"))})))}channelsWatcher(t){this.channels_=t.split(",")}async validateform(){if(this.channels_.includes("email")){const t=l.H.isValidEmail(this.email.value);if(t)return;!t&&this.validateField(this.email,this.emailErrorMsg)}if(!this.channels_.includes("sms")||!await this.mobileInput.isValid())throw"Please insert required fields"}validateField(t,i){t.classList.add("s-has-error"),t.nextElementSibling.innerText="* "+i}render(){return(0,e.h)(e.H,null,this.isSubscribed?(0,e.h)("div",{class:"s-product-availability-subscribed"},(0,e.h)("i",{class:"sicon-bell-ring s-product-availability-subs-icon"})," ",this.subscribedMessage):(0,e.h)("slot",null,(0,e.h)("salla-button",{onClick:()=>this.isUser?this.submit():this.modal.show(),wide:!0,ref:t=>this.inlineBtn=t},salla.lang.get("pages.products.notify_availability"))),this.isUser||this.isSubscribed?"":this.renderModal())}renderModal(){return(0,e.h)("salla-modal",{ref:t=>this.modal=t,title:this.title_,subTitle:this.subTitle,icon:"sicon-bell-ring",width:"sm"},(0,e.h)("div",{class:"s-product-availability-body"},this.channels_.includes("email")?[(0,e.h)("label",{class:"s-product-availability-label"},this.emailLabel),(0,e.h)("input",{class:"s-product-availability-input",onKeyDown:t=>this.typing(t,this.submit),placeholder:this.emailPlaceholder,ref:t=>this.email=t,type:"email"}),(0,e.h)("span",{class:"s-product-availability-error-msg"})]:"",this.channels_.includes("sms")?[(0,e.h)("label",{class:"s-product-availability-label"},this.mobileLabel),(0,e.h)("salla-tel-input",{ref:t=>this.mobileInput=t,onKeyDown:t=>this.typing(t,this.submit)})]:""),(0,e.h)("div",{slot:"footer",class:"s-product-availability-footer"},(0,e.h)("salla-button",{wide:!0,"btn-style":"outline",onClick:()=>this.modal.hide(),ref:t=>this.cancelBtn=t},salla.lang.get("common.elements.cancel")),(0,e.h)("salla-button",{"loader-position":"center",wide:!0,ref:t=>this.btn=t,onClick:()=>this.submit()},salla.lang.get("common.elements.submit"))))}get host(){return(0,e.g)(this)}static get watchers(){return{channels:["channelsWatcher"]}}}},863:(t,i,s)=>{s.d(i,{H:()=>l}),salla.event.setMaxListeners(20);class e extends salla.AppHelpers{setHost(t){this.host=t}getElement(t){return this.host.querySelector(t)}getAttribute(t,i){var s;return null===(s=this.getElement(t))||void 0===s?void 0:s.getAttribute(i)}val(t){return this.getAttribute(t,"value")}isUser(){return"user"===salla.config.get("user.type")}}const l=new e}}]);