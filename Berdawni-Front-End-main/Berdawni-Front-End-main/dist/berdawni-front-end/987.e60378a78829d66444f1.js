(self.webpackChunkberdawni_front_end=self.webpackChunkberdawni_front_end||[]).push([[987],{4987:(e,t,i)=>{"use strict";i.r(t),i.d(t,{CertidicatescreateModule:()=>C});var o=i(8583),r=i(8307),n=i(6304),a=i(3679),d=i(7263),c=i(7430),l=i(2165),s=i(7716),u=i(8295),g=i(9983),p=i(2382),m=i(1095),f=i(6627);function h(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"ul"),s.TgZ(1,"li"),s._uU(2),s.TgZ(3,"mat-icon",13),s.NdJ("click",function(){return s.CHM(e),s.oxw(2).clear()}),s._uU(4,"close "),s.qZA(),s.qZA(),s.qZA()}if(2&e){const e=s.oxw(2);s.xp6(2),s.AsE("",e.uploadedFile.name," - ",e.uploadedFile.size," bytes ")}}function Z(e,t){if(1&e&&s.YNc(0,h,5,2,"ul",11),2&e){const e=s.oxw();s.Q6J("ngIf",e.uploadedFile&&e.isSubmitImg)}}function b(e,t){1&e&&(s.TgZ(0,"mat-error"),s._uU(1,"Main Image is required "),s.qZA())}function _(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"ul"),s.TgZ(1,"li"),s._uU(2),s.TgZ(3,"mat-icon",13),s.NdJ("click",function(){return s.CHM(e),s.oxw(2).clear1()}),s._uU(4,"close "),s.qZA(),s.qZA(),s.qZA()}if(2&e){const e=s.oxw(2);s.xp6(2),s.AsE("",e.uploadedFiles.name," - ",e.uploadedFiles.size," bytes ")}}function x(e,t){if(1&e&&s.YNc(0,_,5,2,"ul",11),2&e){const e=s.oxw();s.Q6J("ngIf",e.uploadedFiles&&e.isSubmitImg1)}}function F(e,t){1&e&&(s.TgZ(0,"mat-error"),s._uU(1,"Certificates Food Safety Image is required "),s.qZA())}const v=[{path:"",component:(()=>{class e{constructor(e,t,i,o){this.route=e,this._certService=t,this._messageService=i,this._Location=o,this.disabledBtn=!1,this.cert=new c.I,this.isEdit=!1,this.isSubmitImg=!0,this.isSubmitImg1=!0}onFileChange(e){}onUpload(e){this.isSubmitImg=!1;for(let t of e.files)this.uploadedFile=t}clear(){this.uploadedFile=void 0}clear1(){this.uploadedFiles=void 0}onUpload1(e){this.isSubmitImg1=!1;for(let t of e.files)this.uploadedFiles=t}getCert(){var e=this;return(0,n.Z)(function*(){const t=yield e._certService.oneCert(e.id).toPromise();t.result&&(e.cert=t.body)})()}saveCert(){var e=this;return(0,n.Z)(function*(){var t,i,o,r;if(null===(t=e.certForm.get("image"))||void 0===t||t.setErrors(null),null===(i=e.certForm.get("certificatesFoodSafetyImage"))||void 0===i||i.setErrors(null),e.uploadedFile)if(e.uploadedFiles){if(e.certForm.valid)if(e.disabledBtn=!0,e.isEdit)yield e._certService.updateCert(e.cert).toPromise(),e.uploadedFile&&(yield e._certService.addImage(0,e.uploadedFile,e.id).toPromise(),yield e._certService.addImage(1,e.uploadedFiles,e.id).toPromise()),e._messageService.add({severity:"success",summary:"Success",detail:"Product Updated"}),e._Location.back();else{const t=yield e._certService.addCert(e.cert).toPromise();t.result&&e.uploadedFile&&(yield e._certService.addImage(0,e.uploadedFile,t.body._id).toPromise(),yield e._certService.addImage(1,e.uploadedFiles,t.body._id).toPromise()),e._messageService.add({severity:"success",summary:"Success",detail:"Product Added"}),e._Location.back()}}else null===(r=e.certForm.get("certificatesFoodSafetyImage"))||void 0===r||r.setErrors({error_key1:!0});else null===(o=e.certForm.get("image"))||void 0===o||o.setErrors({error_key:!0})})()}ngOnInit(){var e=this;return(0,n.Z)(function*(){e.certForm=new a.cw({description:new a.NI("",a.kI.required),image:new a.NI("",a.kI.nullValidator),certificatesFoodSafetyImage:new a.NI("",a.kI.nullValidator)}),e.route.snapshot.paramMap.get("id")&&(e.id=e.route.snapshot.paramMap.get("id"),e.isEdit=!0,yield e.getCert(),yield e.createFile())})()}createFile(){var e=this;return(0,n.Z)(function*(){let t=yield fetch(e.cert.image.toString()),i=yield t.blob(),o={type:"image/jpeg"},r=decodeURI(e.cert.image.toString()).split("/")[e.cert.image.toString().split("/").length-1];e.uploadedFile=new File([i],r,o),r=decodeURI(e.cert.certificatesFoodSafetyImage.toString()).split("/")[e.cert.certificatesFoodSafetyImage.toString().split("/").length-1],e.uploadedFiles=new File([i],r,o)})()}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(r.gz),s.Y36(l.i),s.Y36(d.ez),s.Y36(o.Ye))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-certidicatescreate"]],features:[s._Bn([l.i,d.ez])],decls:32,vars:9,consts:[[1,"box"],[1,"box2"],[1,"form-",3,"formGroup","ngSubmit"],["appearance","outline","id","description-box",1,"description-full-width"],["matInput","","formControlName","description","required","",3,"ngModel","ngModelChange"],[1,"row",2,"margin-top","50px"],[2,"color","#247094","margin-left","5%"],[1,"col","text-center"],["id","main-image",1,"form-group",2,"margin-bottom","20px"],["name","demo[]","required","",3,"multiple","showUploadButton","onClear","onSelect"],["pTemplate","content"],[4,"ngIf"],["mat-raised-button","","type","submit",1,"btn-submit",3,"disabled"],[2,"cursor","pointer",3,"click"]],template:function(e,t){1&e&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"h1"),s._uU(3,"Certificates & Food Safety Creation"),s.qZA(),s.qZA(),s.TgZ(4,"form",2),s.NdJ("ngSubmit",function(){return t.saveCert()}),s.TgZ(5,"p"),s.TgZ(6,"mat-form-field",3),s.TgZ(7,"mat-label"),s._uU(8,"Description"),s.qZA(),s.TgZ(9,"input",4),s.NdJ("ngModelChange",function(e){return t.cert.description=e}),s.qZA(),s.TgZ(10,"mat-error"),s._uU(11,"Description is required"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(12,"div",5),s.TgZ(13,"h1",6),s._uU(14,"Main Image:"),s.qZA(),s.TgZ(15,"div",7),s.TgZ(16,"div",8),s.TgZ(17,"p-fileUpload",9),s.NdJ("onClear",function(){return t.clear()})("onSelect",function(e){return t.onUpload(e)}),s.YNc(18,Z,1,1,"ng-template",10),s.qZA(),s.TgZ(19,"div"),s.YNc(20,b,2,0,"mat-error",11),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(21,"div",5),s.TgZ(22,"h1",6),s._uU(23,"Main Image:"),s.qZA(),s.TgZ(24,"div",7),s.TgZ(25,"div",8),s.TgZ(26,"p-fileUpload",9),s.NdJ("onClear",function(){return t.clear1()})("onSelect",function(e){return t.onUpload1(e)}),s.YNc(27,x,1,1,"ng-template",10),s.qZA(),s.TgZ(28,"div"),s.YNc(29,F,2,0,"mat-error",11),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(30,"button",12),s._uU(31,"Submit"),s.qZA(),s.qZA(),s.qZA()),2&e&&(s.xp6(4),s.Q6J("formGroup",t.certForm),s.xp6(5),s.Q6J("ngModel",t.cert.description),s.xp6(8),s.Q6J("multiple",!1)("showUploadButton",!1),s.xp6(3),s.Q6J("ngIf",t.certForm.controls.image.hasError("error_key")),s.xp6(6),s.Q6J("multiple",!1)("showUploadButton",!1),s.xp6(3),s.Q6J("ngIf",t.certForm.controls.certificatesFoodSafetyImage.hasError("error_key1")),s.xp6(1),s.Q6J("disabled",t.disabledBtn))},directives:[a._Y,a.JL,a.sg,u.KE,u.hX,g.Nt,a.Fj,a.JJ,a.u,a.Q7,u.TO,p.p,d.jx,o.O5,m.lW,f.Hw],styles:[".box[_ngcontent-%COMP%]{width:90%;margin:50px auto;height:auto;padding-bottom:50px;border-radius:20px}.box[_ngcontent-%COMP%], .box2[_ngcontent-%COMP%]{background-color:#fff}.box2[_ngcontent-%COMP%]{border-radius:20px 20px 0 0;padding-top:10px;width:100%;height:90px;border-bottom:5px solid #247094}.box2[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-left:32%;margin-right:auto;padding-top:1.5%;color:#194b62;font-weight:400;font-size:25px}.pi-calendar[_ngcontent-%COMP%]{font-size:20px;color:#777575;cursor:pointer;font-weight:600;float:right;margin-right:5%;margin-top:-11%}.pi-calendar[_ngcontent-%COMP%]:hover{color:#3f51b5}#description-box[_ngcontent-%COMP%]{height:100px}.form-[_ngcontent-%COMP%]{margin-top:50px;margin-left:auto;margin-right:auto;width:50%}.description-full-width[_ngcontent-%COMP%]{width:100%}#other-image[_ngcontent-%COMP%]{margin-top:35px}label[_ngcontent-%COMP%]{margin-bottom:10px;color:#353535;font-size:16px;font-weight:500}.btn-submit[_ngcontent-%COMP%]{margin-top:50px;width:100%;height:50px;font-size:20px;color:#fff;background-color:#247094;border-radius:20px}"]}),e})()}];let S=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[r.Bz.forChild(v)],r.Bz]}),e})();var y=i(2396);let C=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[o.ez,S,y.C]]}),e})()}}]);