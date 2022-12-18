(self["webpackChunklightandnight"]=self["webpackChunklightandnight"]||[]).push([[265],{3658:function(t,e,l){"use strict";var i=l(9781),n=l(3157),a=TypeError,s=Object.getOwnPropertyDescriptor,o=i&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=o?function(t,e){if(n(t)&&!s(t,"length").writable)throw a("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},7207:function(t){var e=TypeError,l=9007199254740991;t.exports=function(t){if(t>l)throw e("Maximum allowed index exceeded");return t}},3157:function(t,e,l){var i=l(4326);t.exports=Array.isArray||function(t){return"Array"==i(t)}},7658:function(t,e,l){"use strict";var i=l(2109),n=l(7908),a=l(6244),s=l(3658),o=l(7207),r=l(7293),u=r((function(){return 4294967297!==[].push.call({length:4294967296},1)})),c=!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}}();i({target:"Array",proto:!0,arity:1,forced:u||c},{push:function(t){var e=n(this),l=a(e),i=arguments.length;o(l+i);for(var r=0;r<i;r++)e[l]=arguments[r],l++;return s(e,l),l}})},6911:function(){},7179:function(){},3254:function(){},3737:function(){},9591:function(t,e,l){"use strict";l.d(e,{Z:function(){return u}});var i=l(5160),n=(l(6338),l(6252));function a(t,e,l,a,s,o){const r=i.bL;return(0,n.wg)(),(0,n.j4)(r,{title:t.$t(`tutorial.${l.message}[0]`),label:t.$t("tutorial.via",[t.$t(`tutorial.${l.message}[2]`),l.desc]),"is-link":"",center:"",onClick:o.openUrl},null,8,["title","label","onClick"])}var s={name:"TutorialCell",props:{message:String,desc:String},methods:{openUrl(){window.open(this.$t(`tutorial.${this.message}[1]`))}}},o=l(3744);const r=(0,o.Z)(s,[["render",a]]);var u=r},4265:function(t,e,l){"use strict";l.r(e),l.d(e,{default:function(){return U}});var i=l(83),n=(l(2130),l(6068)),a=(l(2087),l(1046)),s=(l(6186),l(9850)),o=(l(5124),l(4377)),r=(l(2278),l(8480)),u=(l(1958),l(368),l(6742),l(7179),l(4635)),c=(l(7515),l(7630)),h=(l(1063),l(8217)),d=(l(6870),l(7419)),m=(l(470),l(4871)),w=(l(2563),l(5160)),p=(l(6338),l(7036)),g=(l(158),l(5267)),f=(l(1645),l(9591)),W=l(4958),y=l(6252),$=l(3577);const k={class:"container"},V={class:"content"},b={class:"container"};function v(t,e,v,_,x,C){const D=W.Z,U=f.Z,H=g.TS,M=p.Y8,B=w.bL,z=m.vF,O=d.Ee,S=h.JO,T=c.rs,j=u.f,E=r.Ee,G=o.Vq,Y=s.JX,Z=a.X2,N=n.iz,A=i.iV,F=(0,y.Q2)("t");return(0,y.wg)(),(0,y.iD)(y.HY,null,[(0,y.Wm)(D,{title:t.$t("route.wish"),"can-return":""},null,8,["title"]),(0,y.Wm)(H,{title:t.$t("common.tutorial"),inset:""},{default:(0,y.w5)((()=>[(0,y.Wm)(U,{message:"wish"})])),_:1},8,["title"]),(0,y.Wm)(O,{modelValue:x.target,"onUpdate:modelValue":e[1]||(e[1]=t=>x.target=t)},{default:(0,y.w5)((()=>[(0,y.Wm)(H,{title:t.$t("wish.target"),inset:""},{default:(0,y.w5)((()=>[((0,y.wg)(!0),(0,y.iD)(y.HY,null,(0,y.Ko)(x.presetTargets,(e=>((0,y.wg)(),(0,y.j4)(B,{key:e,title:t.$t("wish.preset",[e.count]),label:t.$t("wish.presetDesc",[e.desc]),clickable:"",onClick:t=>x.target=e.count},{"right-icon":(0,y.w5)((()=>[(0,y.Wm)(M,{name:e.count},null,8,["name"])])),_:2},1032,["title","label","onClick"])))),128)),(0,y.Wm)(B,{title:t.$t("common.customize"),center:""},{"right-icon":(0,y.w5)((()=>[(0,y.Wm)(z,(0,y.dG)({modelValue:x.target,"onUpdate:modelValue":e[0]||(e[0]=t=>x.target=t)},x.stepper,{min:"64",max:"99"}),null,16,["modelValue"])])),_:1},8,["title"])])),_:1},8,["title"])])),_:1},8,["modelValue"]),(0,y.Wm)(H,{title:t.$t("common.currentStatus"),inset:""},{default:(0,y.w5)((()=>[(0,y.Wm)(B,{title:"",label:t.$t("wish.hint")},null,8,["label"]),(0,y.Wm)(B,{center:""},{title:(0,y.w5)((()=>[(0,y._)("div",{onClick:e[2]||(e[2]=t=>x.showNextMinigameDetail=!0)},[(0,y.Uk)((0,$.zw)(t.$t("wish.nextMinigame"))+" ",1),(0,y.Wm)(S,{name:"question-o"})])])),"right-icon":(0,y.w5)((()=>[(0,y.Wm)(z,(0,y.dG)({modelValue:x.nextMinigame,"onUpdate:modelValue":e[3]||(e[3]=t=>x.nextMinigame=t)},x.stepper,{min:"1"}),null,16,["modelValue"])])),_:1}),(0,y.Wm)(B,{title:t.$t("wish.freeHad"),center:""},{"right-icon":(0,y.w5)((()=>[(0,y.Wm)(z,(0,y.dG)({modelValue:x.freeHad,"onUpdate:modelValue":e[4]||(e[4]=t=>x.freeHad=t)},x.stepper,{min:"0"}),null,16,["modelValue"])])),_:1},8,["title"]),(0,y.Wm)(B,{title:t.$t("wish.paidHad"),center:""},{"right-icon":(0,y.w5)((()=>[(0,y.Wm)(z,(0,y.dG)({modelValue:x.paidHad,"onUpdate:modelValue":e[5]||(e[5]=t=>x.paidHad=t)},x.stepper,{min:"0"}),null,16,["modelValue"])])),_:1},8,["title"]),(0,y.Wm)(B,{title:t.$t("wish.shop"),center:""},{"right-icon":(0,y.w5)((()=>[(0,y.Wm)(z,(0,y.dG)({modelValue:x.shop,"onUpdate:modelValue":e[6]||(e[6]=t=>x.shop=t)},x.stepper,{min:"0",max:"20"}),null,16,["modelValue"])])),_:1},8,["title"]),(0,y.Wm)(B,{title:t.$t("wish.wished"),center:""},{"right-icon":(0,y.w5)((()=>[(0,y.Wm)(z,(0,y.dG)({modelValue:x.wished,"onUpdate:modelValue":e[7]||(e[7]=t=>x.wished=t)},x.stepper,{min:"0",max:"99"}),null,16,["modelValue"])])),_:1},8,["title"]),(0,y.Wm)(B,{title:t.$t("wish.calendar"),value:x.calendarString,clickable:"",onClick:e[8]||(e[8]=t=>x.showCalendar=!0)},null,8,["title","value"]),(0,y.Wm)(B,{title:t.$t("wish.dailyBought")},{"right-icon":(0,y.w5)((()=>[(0,y.Wm)(T,{modelValue:x.dailyBought,"onUpdate:modelValue":e[9]||(e[9]=t=>x.dailyBought=t)},null,8,["modelValue"])])),_:1},8,["title"]),(0,y.Wm)(B,{title:t.$t("wish.packBought")},{"right-icon":(0,y.w5)((()=>[(0,y.Wm)(T,{modelValue:x.packBought,"onUpdate:modelValue":e[10]||(e[10]=t=>x.packBought=t)},null,8,["modelValue"])])),_:1},8,["title"]),(0,y.Wm)(B,{title:t.$t("wish.lost"),center:""},{"right-icon":(0,y.w5)((()=>[(0,y.Wm)(z,(0,y.dG)({modelValue:x.lost,"onUpdate:modelValue":e[11]||(e[11]=t=>x.lost=t)},x.stepper,{min:"0"}),null,16,["modelValue"])])),_:1},8,["title"])])),_:1},8,["title"]),(0,y.Wm)(H,{title:" ",inset:""},{default:(0,y.w5)((()=>[(0,y.Wm)(B,{title:t.$t("common.calculate"),"is-link":"",onClick:C.calculate},null,8,["title","onClick"])])),_:1}),(0,y.Wm)(j,{show:x.showCalendar,"onUpdate:show":e[12]||(e[12]=t=>x.showCalendar=t),"min-date":x.minDate,"max-date":x.maxDate,onConfirm:C.calendarConfirm,"show-confirm":!1},null,8,["show","min-date","max-date","onConfirm"]),(0,y.Wm)(A,{"theme-vars":x.theme},{default:(0,y.w5)((()=>[(0,y.Wm)(G,{show:x.showNextMinigameDetail,"onUpdate:show":e[13]||(e[13]=t=>x.showNextMinigameDetail=t),closeOnClickOverlay:""},{default:(0,y.w5)((()=>[(0,y._)("div",k,[(0,y.wy)((0,y._)("p",V,null,512),[[F,"wish.nextMinigameDesc"]]),(0,y.Wm)(E,{class:"content",src:l(5908)},null,8,["src"])])])),_:1},8,["show"]),(0,y.Wm)(G,{show:x.showResult,"onUpdate:show":e[14]||(e[14]=t=>x.showResult=t),closeOnClickOverlay:""},{default:(0,y.w5)((()=>[(0,y._)("div",b,[(0,y.Wm)(Z,{class:"content"},{default:(0,y.w5)((()=>[((0,y.wg)(),(0,y.iD)(y.HY,null,(0,y.Ko)([16,4,4],((e,l)=>(0,y.Wm)(Y,{key:e,span:e},{default:(0,y.w5)((()=>[(0,y.Uk)((0,$.zw)(t.$t(`wish.result.title[${l}]`)),1)])),_:2},1032,["span"]))),64))])),_:1}),((0,y.wg)(!0),(0,y.iD)(y.HY,null,(0,y.Ko)(x.result,((t,e)=>((0,y.wg)(),(0,y.iD)(y.HY,{key:t},[1==x.result[e].length?((0,y.wg)(),(0,y.j4)(N,{key:0,dashed:""},{default:(0,y.w5)((()=>[(0,y.Uk)((0,$.zw)(x.result[e][0]),1)])),_:2},1024)):((0,y.wg)(),(0,y.j4)(Z,{key:1,class:"content"},{default:(0,y.w5)((()=>[((0,y.wg)(),(0,y.iD)(y.HY,null,(0,y.Ko)([16,4,4],((e,l)=>(0,y.Wm)(Y,{key:e,span:e},{default:(0,y.w5)((()=>[(0,y.Uk)((0,$.zw)(t[l]),1)])),_:2},1032,["span"]))),64))])),_:2},1024))],64)))),128))])])),_:1},8,["show"])])),_:1},8,["theme-vars"])],64)}l(7658);let _=l(7484);var x={name:"WishCalculator",components:{Navbar:W.Z,TutorialCell:f.Z},data(){return{presetTargets:[64,68,72,76,80,88,95,99].map((t=>({count:t,desc:this.$t(`wish.presets.${t}`)}))),target:64,targetString:"64",nextMinigame:1,showNextMinigameDetail:!1,freeHad:0,paidHad:0,shop:20,wished:0,lost:0,dailyBought:!1,packBought:!1,minDate:_().subtract(5,"hour").subtract(8,"day").toDate(),maxDate:_().subtract(5,"hour").toDate(),showCalendar:!1,calendar:new Date,calendarString:_().format(this.$t("wish.dateFormat")),result:[],showResult:!1,theme:{dialogFontSize:"var(--van-font-size-md)"},stepper:{integer:!0,"input-width":"48px"}}},methods:{calendarConfirm(t){this.showCalendar=!1,this.calendar=t,this.calendarString=_(t).format(this.$t("wish.dateFormat"))},calculate(){let t=[[this.$t("wish.result.type[0]")]],e=(e,l,i)=>{t.push([this.$t(`wish.result.${e}`),l,i])},l=23-(this.nextMinigame||1);e("minigame",l);let i=this.shop||20;e("shop",i);let n=this.wished||0,a=5;[6,18,32,46,52].forEach((t=>{n>=t&&(a-=1)})),e("progress",a);let s=this.freeHad||0,o=this.paidHad||0;s+o&&e("current",s+o);let r=this.lost||0;r&&e("lost",-r),t.push([this.$t("wish.result.type[1]")]);let u=l+i+n+s+o-r+a,c=this.target-u;if(c>0){let{dailyBought:l,packBought:i}=this,a=8-_().subtract(5,"hour").diff(_.tz(this.calendar),"day")-Number(l),s=0;if(c<4&&a>=0||4==c&&a>=4){let t=Math.min(c,a);c-=t,s+=2*t,e("daily",t,2*t)}else{if(i||(c-=6,s+=9,e("pack",6,9)),c>0&&a){let t=Math.min(c,a);c-=t,s+=2*t,e("daily",t,2*t)}c>0&&(s+=3*c,e("direct",c,3*c))}t.push([this.$t("wish.result.type[2]")]),e("total",this.target-n-c,s)}else t.push([this.$t("wish.result.type[2]")]),e("total",u-n,0);this.result=t,this.showResult=!0}}},C=l(3744);const D=(0,C.Z)(x,[["render",v]]);var U=D},5908:function(t,e,l){"use strict";t.exports=l.p+"img/wish.f3bcbbad.jpg"},7515:function(t,e,l){"use strict";l(1958),l(368),l(6742),l(2939),l(1452),l(6196),l(2666),l(770),l(1771),l(9137),l(1088),l(5338),l(1564),l(1744),l(6565)},5124:function(t,e,l){"use strict";l(1958),l(3737)},470:function(t,e,l){"use strict";l(1958),l(3254)},158:function(t,e,l){"use strict";l(1958),l(368),l(6742),l(3254),l(6911)},6186:function(t,e,l){"use strict";l(1958),l(3737)},2563:function(t,e,l){"use strict";l(1958)}}]);
//# sourceMappingURL=265.dba89bff.js.map