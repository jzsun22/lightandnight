"use strict";(self["webpackChunklightandnight"]=self["webpackChunklightandnight"]||[]).push([[647],{53671:function(t,e,i){var n=i(19662),a=i(47908),r=i(68361),o=i(26244),s=TypeError,l=function(t){return function(e,i,l,c){n(i);var u=a(e),m=r(u),h=o(u),f=t?h-1:0,d=t?-1:1;if(l<2)while(1){if(f in m){c=m[f],f+=d;break}if(f+=d,t?f<0:h<=f)throw s("Reduce of empty array with no initial value")}for(;t?f>=0:h>f;f+=d)f in m&&(c=i(c,m[f],f,u));return c}};t.exports={left:l(!1),right:l(!0)}},85827:function(t,e,i){var n=i(82109),a=i(53671).left,r=i(9341),o=i(7392),s=i(35268),l=!s&&o>79&&o<83,c=l||!r("reduce");n({target:"Array",proto:!0,forced:c},{reduce:function(t){var e=arguments.length;return a(this,t,e,e>1?arguments[1]:void 0)}})},66911:function(){},93254:function(){},63737:function(){},73647:function(t,e,i){i.r(e),i.d(e,{default:function(){return B}});var n=i(9030),a=(i(87645),i(80083)),r=(i(92130),i(14377)),o=(i(50492),i(86068)),s=(i(92087),i(11046)),l=(i(6186),i(19850)),c=(i(55124),i(99530)),u=(i(46616),i(64871)),m=(i(32563),i(27419)),h=(i(10470),i(87036)),f=(i(20158),i(60367)),d=(i(24762),i(56773)),g=(i(90947),i(47954)),w=(i(67742),i(95267)),v=(i(31645),i(25160)),p=(i(6338),i(38929)),b=i(88217),y=(i(16870),i(68309),i(66252)),k=i(49963),x=i(3577),W=["width","height"],S=["textContent"],_={class:"container"},C={class:"container"},P={key:0,class:"container"};function T(t,e,i,T,A,I){var M=b.JO,$=p.Z,Z=v.bL,F=w.TS,V=g.Ex,U=d.XZ,G=f.OK,O=h.Y8,D=m.Ee,z=u.vF,j=c.mQ,Y=l.JX,B=s.X2,E=o.iz,R=r.Vq,H=a.iV,J=n.Vb,K=(0,y.Q2)("t");return(0,y.wg)(),(0,y.iD)(y.HY,null,[(0,y.Wm)($,{title:t.$t("route.wishsim"),"can-return":"",onClickRight:e[0]||(e[0]=function(t){return A.volumesShow=!0})},{default:(0,y.w5)((function(){return[(0,y.Wm)(M,{name:"exchange"})]})),_:1},8,["title"]),(0,y.Wm)(j,{active:A.active,"onUpdate:active":e[3]||(e[3]=function(t){return A.active=t}),sticky:"","offset-top":"46"},{default:(0,y.w5)((function(){return[(0,y.wy)((0,y._)("canvas",{id:"canvas",width:A.width,height:A.width},null,8,W),[[k.F8,0==A.active]]),(0,y.Wm)(G,{title:A.data[A.volume].name},{default:(0,y.w5)((function(){return[(0,y.Wm)(F,{title:t.$t("common.gacha"),inset:""},{default:(0,y.w5)((function(){return[I.remainGifts?((0,y.wg)(),(0,y.j4)(Z,{key:0,title:t.$t("wishsim.gacha"),"is-link":"",onClick:I.gacha3Times},null,8,["title","onClick"])):((0,y.wg)(),(0,y.j4)(Z,{key:1,title:t.$t("wishsim.complete",[t.gachaTime,A.data[A.volume].gift])},null,8,["title"]))]})),_:1},8,["title"]),(0,y.Wm)(F,{title:t.$t("common.currentStatus"),inset:""},{default:(0,y.w5)((function(){return[(0,y.Wm)(Z,{title:t.$t("wishsim.possibility",[A.data[A.volume].gift]),value:I.giftPossibilityString,"is-link":"",onClick:e[1]||(e[1]=function(t){return A.possibilityShow=!0})},null,8,["title","value"]),(0,y.Wm)(Z,null,{default:(0,y.w5)((function(){return[(0,y.Uk)((0,x.zw)(t.$t("wishsim.gachaTime"))+" ",1),(0,y.Wm)(V,{percentage:t.gachaTime/A.data[A.volume].must[2]*100,"pivot-text":"".concat(t.gachaTime),"pivot-color":"#6c71c5",color:"linear-gradient(135deg, #6c71c5, #93a9da)"},null,8,["percentage","pivot-text"]),(0,y._)("small",{textContent:(0,x.zw)(t.$t("wishsim.gachaTimeDesc",A.data[A.volume].must))},null,8,S)]})),_:1})]})),_:1},8,["title"]),(0,y.Wm)(F,{title:A.data[A.volume].gift,inset:""},{default:(0,y.w5)((function(){return[((0,y.wg)(!0),(0,y.iD)(y.HY,null,(0,y.Ko)(t.gifts,(function(e){return(0,y.wg)(),(0,y.j4)(Z,{key:e,title:e.name},{"right-icon":(0,y.w5)((function(){return[e.time?((0,y.wg)(),(0,y.iD)(y.HY,{key:0},[(0,y.Uk)((0,x.zw)(t.$t("wishsim.giftTime",[e.time])),1)],64)):(0,y.kq)("",!0),(0,y.Wm)(U,{modelValue:e.had,"onUpdate:modelValue":function(t){return e.had=t},disabled:""},null,8,["modelValue","onUpdate:modelValue"])]})),_:2},1032,["title"])})),128))]})),_:1},8,["title"])]})),_:1},8,["title"]),(0,y.Wm)(G,{title:t.$t("common.settings")},{default:(0,y.w5)((function(){return[(0,y.Wm)(D,{modelValue:I.maxFrame,"onUpdate:modelValue":e[2]||(e[2]=function(t){return I.maxFrame=t})},{default:(0,y.w5)((function(){return[(0,y.Wm)(F,{title:t.$t("wishsim.settings.maxFrame"),inset:""},{default:(0,y.w5)((function(){return[((0,y.wg)(!0),(0,y.iD)(y.HY,null,(0,y.Ko)(A.maxFrames,(function(e){return(0,y.wg)(),(0,y.j4)(Z,{key:e,title:t.$t("wishsim.settings.maxFrames[".concat(e,"]")),clickable:"",onClick:function(t){return I.setMaxFrame(e)}},{"right-icon":(0,y.w5)((function(){return[(0,y.Wm)(O,{name:e},null,8,["name"])]})),_:2},1032,["title","onClick"])})),128))]})),_:1},8,["title"])]})),_:1},8,["modelValue"]),0===A.volume?((0,y.wg)(),(0,y.j4)(F,{key:0,title:t.$t("wishsim.settings.weight"),inset:""},{default:(0,y.w5)((function(){return[(0,y.Wm)(Z,{title:t.$t("common.info"),icon:"question-o","is-link":"",onClick:I.showWeightInfo},null,8,["title","onClick"]),((0,y.wg)(),(0,y.iD)(y.HY,null,(0,y.Ko)([0,5],(function(t){return(0,y.Wm)(Z,{key:t,title:A.rewards[t].name,center:""},{"right-icon":(0,y.w5)((function(){return[(0,y.Wm)(z,{modelValue:A.rewards[t].weight,"onUpdate:modelValue":function(e){return A.rewards[t].weight=e},min:"140",max:"175","input-width":"48px"},null,8,["modelValue","onUpdate:modelValue"])]})),_:2},1032,["title"])})),64))]})),_:1},8,["title"])):(0,y.kq)("",!0)]})),_:1},8,["title"])]})),_:1},8,["active"]),(0,y.Wm)(H,{"theme-vars":A.dialogTheme},{default:(0,y.w5)((function(){return[(0,y.Wm)(R,{show:A.possibilityShow,"onUpdate:show":e[4]||(e[4]=function(t){return A.possibilityShow=t}),closeOnClickOverlay:""},{default:(0,y.w5)((function(){return[(0,y._)("div",_,[(0,y.Wm)(B,{class:"content center-row"},{default:(0,y.w5)((function(){return[((0,y.wg)(),(0,y.iD)(y.HY,null,(0,y.Ko)([0,1,2],(function(t){return(0,y.Wm)(Y,{key:t,span:"8"},{default:(0,y.w5)((function(){return[(0,y.wy)((0,y._)("strong",null,null,512),[[K,"wishsim.possibilityTitle[".concat(t,"]")]])]})),_:2},1024)})),64))]})),_:1}),(0,y.Wm)(E,{dashed:""}),((0,y.wg)(!0),(0,y.iD)(y.HY,null,(0,y.Ko)(A.rewards,(function(t,e){return(0,y.wg)(),(0,y.j4)(B,{key:t,class:"content center-row"},{default:(0,y.w5)((function(){return[(0,y.Wm)(Y,{span:"8"},{default:(0,y.w5)((function(){return[(0,y.Uk)((0,x.zw)(t.name),1)]})),_:2},1024),(0,y.Wm)(Y,{span:"8"},{default:(0,y.w5)((function(){return[(0,y.Uk)((0,x.zw)(I.possibilitiesString[e]),1)]})),_:2},1024),(0,y.Wm)(Y,{span:"8"},{default:(0,y.w5)((function(){return[(0,y.Uk)((0,x.zw)(t.remain),1)]})),_:2},1024)]})),_:2},1024)})),128))]),(0,y.Wm)(E),(0,y._)("div",C,[((0,y.wg)(),(0,y.iD)(y.HY,null,(0,y.Ko)([0,1],(function(e){return(0,y.Wm)(B,{key:e,class:"content"},{default:(0,y.w5)((function(){return[(0,y.Wm)(Y,{span:"24",class:"desc"},{default:(0,y.w5)((function(){return[(0,y.Uk)((0,x.zw)(t.$t("wishsim.possibilityDesc[".concat(e,"]"),[A.data[A.volume].gift])),1)]})),_:2},1024)]})),_:2},1024)})),64))])]})),_:1},8,["show"]),(0,y.Wm)(R,{show:A.itemsGotShow,"onUpdate:show":e[5]||(e[5]=function(t){return A.itemsGotShow=t}),title:t.$t("wishsim.resultTitle"),closeOnClickOverlay:""},{default:(0,y.w5)((function(){return[t.itemsGot?((0,y.wg)(),(0,y.iD)("div",P,[((0,y.wg)(!0),(0,y.iD)(y.HY,null,(0,y.Ko)(t.itemsGot,(function(e){return(0,y.wg)(),(0,y.iD)("div",{class:"content",key:e},(0,x.zw)(t.$t("wishsim.giftNumber",[e.name,e.count])),1)})),128))])):(0,y.kq)("",!0)]})),_:1},8,["show","title"])]})),_:1},8,["theme-vars"]),(0,y.Wm)(J,{show:A.volumesShow,"onUpdate:show":e[6]||(e[6]=function(t){return A.volumesShow=t}),actions:A.volumes,"cancel-text":t.$t("common.back"),"close-on-click-action":"",onSelect:I.selectVolume},null,8,["show","actions","cancel-text","onSelect"])],64)}var A,I=i(56084),M=i(66347),$=i(95082),Z=i(47327),F=(i(21249),i(85827),i(41539),i(57658),i(9653),i(33948),i(43290),i(92222),i(11068)),V=i(93939),U=i(40590),G=i(49987),O={gachaTime:0,initialAngle_:Math.PI,initialAngle:Math.PI,angles_:[Math.PI,Math.PI,Math.PI],angles:[Math.PI,Math.PI,Math.PI],frame:0,maxFrame_:void 0,gifts:[0,1,2].map((function(t){return{name:G[G.length-1].gifts[t],count:1,remain:1,had:!1}})),itemsGot:[]},D=function(t,e,i,n){return(t/=n/2)<1?i/2*t*t+e:-i/2*(--t*(t-2)-1)+e},z={name:"WishSimulator",components:(A={},(0,Z.Z)(A,n.Vb.name,n.Vb),(0,Z.Z)(A,g.Ex.name,g.Ex),(0,Z.Z)(A,"Navbar",p.Z),A),data:function(){var t=this,e=(0,U.iP)(),i=e.width;return(0,$.Z)((0,$.Z)({},O),{},{data:G,rewards:G[G.length-1].rewards.map((function(e){return(0,$.Z)((0,$.Z)({},e),{},{name:t.$t("items.".concat(e.id))})})),active:0,volume:G.length-1,volumes:G.map((function(t,e){return{name:t.name,index:e}})),width:Math.min(i.value,425),maxFrames:[216,144,72,36,1],volumesShow:!1,itemsGotShow:!1,possibilityShow:!1,dialogTheme:{dialogFontSize:"var(--van-font-size-md)"}})},watch:{volume:function(t){var e=this;Object.assign(this,(0,$.Z)((0,$.Z)({},O),{},{gifts:[0,1,2].map((function(e){return{name:G[t].gifts[e],count:1,remain:1,had:!1}})),rewards:G[t].rewards.map((function(t){return(0,$.Z)((0,$.Z)({},t),{},{name:e.$t("items.".concat(t.id))})}))})),this.updateCanvas()}},computed:{totalWeight:function(){return this.rewards.reduce((function(t,e){return 0!==e.remain?t+e.weight:t}),0)},possibilities:function(){var t=this;return this.rewards.map((function(e){return 0===e.remain?0:e.weight/t.totalWeight}))},possibilitiesString:function(){return this.possibilities.map((function(t){return Math.round(1e4*t)/100+"%"}))},giftPossibilityString:function(){return Math.round(1e4*Math.pow(this.possibilities[0],3))/100+"%"},remainGifts:function(){return this.gifts.reduce((function(t,e){return t+e.remain}),0)},shapeAngle:function(){return this.possibilities.map((function(t){return 2*Math.PI*t}))},beginAngle:function(){var t=[0];for(var e in this.shapeAngle)t.push(t[e]+this.shapeAngle[e]);return t},maxFrame:{get:function(){if(void 0===this.maxFrame_){var t,e=null===(t=localStorage)||void 0===t?void 0:t.getItem("WishSimMaxFrame");return null!==e?Number(e):144}return this.maxFrame_},set:function(t){var e;this.maxFrame_=t,null===(e=localStorage)||void 0===e||e.setItem("WishSimMaxFrame",t)}}},mounted:function(){var t=document.getElementById("canvas"),e=t.getContext("2d"),i=function(t){var e=t.backingStorePixelRatio||t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/e},n=i(e);t.style.width=t.width+"px",t.style.height=t.height+"px",t.width=t.width*n,t.height=t.height*n,e.scale(n,n),this.updateCanvas(this.angles_)},methods:{showWeightInfo:function(){(0,F.vC)((0,$.Z)((0,$.Z)({},this.$root.dialogSettings),{},{message:this.$t("hint.wishsim")}))},selectVolume:function(t){this.volume=t.index},setMaxFrame:function(t){this.maxFrame=t,this.frame=0},gacha3Times:function(){var t=this;if(!(this.frame&&this.frame<=this.maxFrame)&&!(this.gachaTime>G[this.volume].must[2])&&0!=this.remainGifts){this.gachaTime+=1,this.initialAngle_=this.initialAngle,this.angles_=this.angles,this.initialAngle=2*Math.PI*Math.random();for(var e={},i=[],n=!0,a=0;a<3;a++){var r=this.gacha1Time();0!=r&&(n=!1),e[r]?e[r].count+=this.rewards[r].count:e[r]=(0,$.Z)({},this.rewards[r]),i.push(this.initialAngle+this.beginAngle[r]+this.shapeAngle[r]*Math.random())}this.frame=0,this.angles=i;var o=function i(){if(t.updateCanvas(),t.frame+=1,t.frame<=t.maxFrame)requestAnimationFrame(i);else{if(n&&(0,V.NU)({type:"success",message:t.$t("wishsim.notify.success",[G[t.volume].gift])}),!n)for(var a=0,r=[0,1,2];a<r.length;a++){var o=r[a];if(t.remainGifts==3-o&&t.gachaTime==G[t.volume].must[o]){n=!0,(0,V.NU)({type:"success",message:t.$t("wishsim.notify.protect",[G[t.volume].must[o],G[t.volume].gift])});break}}if(n){var s=Math.random();for(var l in t.gifts){var c=t.gifts[l];if(0!=c.remain){if(s<=1/t.remainGifts){c.remain-=1,c.had=!0,c.time=t.gachaTime,e["gift"]=c;break}s-=1/t.remainGifts,t.updateCanvas()}}}t.itemsGot=e,t.itemsGotShow=!0}};return o(),e}},gacha1Time:function(){var t,e=Math.random(),i=(0,M.Z)(this.rewards.entries());try{for(i.s();!(t=i.n()).done;){var n=(0,I.Z)(t.value,2),a=n[0],r=n[1];if(0!==r.remain){if(e<=this.possibilities[a])return r.remain>0&&(r.remain-=1),a;e-=this.possibilities[a]}}}catch(o){i.e(o)}finally{i.f()}},updateCanvas:function(){var t=this,e=this.width,i=document.getElementById("canvas"),n=i.getContext("2d"),a=.5*e,r=.5*e,o=.3*e,s=.375*e,l=.015*e,c=[.1*e,.17*e,.24*e],u=D(this.frame,this.initialAngle_,this.initialAngle-this.initialAngle_-10*Math.PI,this.maxFrame),m=this.angles.map((function(e,i){return D(t.frame,t.angles_[i],e-t.angles_[i]+(6+4*i)*Math.PI,t.maxFrame)}));for(var h in n.clearRect(0,0,e,e),n.textAlign="center",this.rewards)if(0!==this.rewards[h].remain){n.beginPath(),n.moveTo(a,r),n.arc(a,r,o,u+this.beginAngle[h],u+this.beginAngle[h]+this.shapeAngle[h]),n.closePath(),n.fillStyle=0==h?"#525997":"#2a2c42",n.strokeStyle="#b9bcc2",n.setLineDash([1,10]),n.fill(),n.stroke();var f=a+s*Math.cos(u+this.beginAngle[h]+this.shapeAngle[h]/2),d=r+s*Math.sin(u+this.beginAngle[h]+this.shapeAngle[h]/2);n.fillText(this.rewards[h].name,f,d),this.rewards[h].remain?n.fillText("× ".concat(this.rewards[h].count," × ").concat(this.rewards[h].remain),f,d+12):n.fillText("× ".concat(this.rewards[h].count," × ∞"),f,d+12)}for(var g=0;g<3;g++)n.beginPath(),1==g?n.setLineDash([10,10]):n.setLineDash([]),n.arc(a,r,c[g],0,2*Math.PI),n.closePath(),n.stroke();for(var w in n.strokeStyle="#fff",n.fillStyle="#e5ce9c",m){n.beginPath();var v=a+c[w]*Math.cos(m[w]),p=r+c[w]*Math.sin(m[w]);n.arc(v,p,l,0,2*Math.PI),n.closePath(),n.fill(),n.stroke()}0==this.remainGifts&&(n.fillStyle="#fff",n.fillText(this.$t("wishsim.complete",[this.gachaTime,G[this.volume].gift]),a,r))}}},j=i(83744);const Y=(0,j.Z)(z,[["render",T],["__scopeId","data-v-4a996fb2"]]);var B=Y},66347:function(t,e,i){i.d(e,{Z:function(){return a}});i(82526),i(41817),i(41539),i(32165),i(78783),i(33948),i(21703);var n=i(12780);function a(t,e){var i="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=(0,n.Z)(t))||e&&t&&"number"===typeof t.length){i&&(t=i);var a=0,r=function(){};return{s:r,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,l=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return s=t.done,t},e:function(t){l=!0,o=t},f:function(){try{s||null==i["return"]||i["return"]()}finally{if(l)throw o}}}}},56084:function(t,e,i){function n(t){if(Array.isArray(t))return t}i.d(e,{Z:function(){return s}});i(82526),i(41817),i(41539),i(32165),i(78783),i(33948),i(57658);function a(t,e){var i=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=i){var n,a,r,o,s=[],l=!0,c=!1;try{if(r=(i=i.call(t)).next,0===e){if(Object(i)!==i)return;l=!1}else for(;!(l=(n=r.call(i)).done)&&(s.push(n.value),s.length!==e);l=!0);}catch(u){c=!0,a=u}finally{try{if(!l&&null!=i["return"]&&(o=i["return"](),Object(o)!==o))return}finally{if(c)throw a}}return s}}var r=i(12780);i(21703);function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t,e){return n(t)||a(t,e)||(0,r.Z)(t,e)||o()}},9030:function(t,e,i){i.d(e,{Vb:function(){return p}});var n=i(60458),a=i(66252),r=i(23759),o=i(30293),s=i(8443),l=i(5314),c=i(88217),u=i(54548),m=i(61116),h=i(23229);const[f,d]=(0,r["do"])("action-sheet"),g=(0,o.l7)({},h.W,{title:String,round:s.J5,actions:(0,s.Ce)(),closeIcon:(0,s.SQ)("cross"),closeable:s.J5,cancelText:String,description:String,closeOnPopstate:s.J5,closeOnClickAction:Boolean,safeAreaInsetBottom:s.J5}),w=[...h.m,"round","closeOnPopstate","safeAreaInsetBottom"];var v=(0,a.aZ)({name:f,props:g,emits:["select","cancel","update:show"],setup(t,{slots:e,emit:i}){const n=t=>i("update:show",t),r=()=>{n(!1),i("cancel")},s=()=>{if(t.title)return(0,a.Wm)("div",{class:d("header")},[t.title,t.closeable&&(0,a.Wm)(c.JO,{name:t.closeIcon,class:[d("close"),l.e9],onClick:r},null)])},h=()=>{if(e.cancel||t.cancelText)return[(0,a.Wm)("div",{class:d("gap")},null),(0,a.Wm)("button",{type:"button",class:d("cancel"),onClick:r},[e.cancel?e.cancel():t.cancelText])]},f=(t,i)=>t.loading?(0,a.Wm)(m.gb,{class:d("loading-icon")},null):e.action?e.action({action:t,index:i}):[(0,a.Wm)("span",{class:d("name")},[t.name]),t.subname&&(0,a.Wm)("div",{class:d("subname")},[t.subname])],g=(e,r)=>{const{color:o,loading:s,callback:l,disabled:c,className:u}=e,m=()=>{c||s||(l&&l(e),t.closeOnClickAction&&n(!1),(0,a.Y3)((()=>i("select",e,r))))};return(0,a.Wm)("button",{type:"button",style:{color:o},class:[d("item",{loading:s,disabled:c}),u],onClick:m},[f(e,r)])},v=()=>{if(t.description||e.description){const i=e.description?e.description():t.description;return(0,a.Wm)("div",{class:d("description")},[i])}};return()=>(0,a.Wm)(u.GI,(0,a.dG)({class:d(),position:"bottom","onUpdate:show":n},(0,o.ei)(t,w)),{default:()=>{var i;return[s(),v(),(0,a.Wm)("div",{class:d("content")},[t.actions.map(g),null==(i=e.default)?void 0:i.call(e)]),h()]}})}});const p=(0,n.n)(v)},87645:function(t,e,i){i(31958),i(20368),i(56742),i(62939),i(76196),i(22666)},90947:function(t,e,i){i(31958),i(20368),i(56742),i(66911)},55124:function(t,e,i){i(31958),i(63737)},47954:function(t,e,i){i.d(e,{Ex:function(){return h}});var n=i(60458),a=i(66252),r=i(23759),o=i(8443),s=i(52639);const[l,c]=(0,r["do"])("progress"),u={color:String,inactive:Boolean,pivotText:String,textColor:String,showPivot:o.J5,pivotColor:String,trackColor:String,strokeWidth:o.Or,percentage:{type:o.Or,default:0,validator:t=>+t>=0&&+t<=100}};var m=(0,a.aZ)({name:l,props:u,setup(t){const e=(0,a.Fl)((()=>t.inactive?void 0:t.color)),i=()=>{const{textColor:i,pivotText:n,pivotColor:r,percentage:o}=t,s=null!=n?n:`${o}%`;if(t.showPivot&&s){const n={color:i,left:+o+"%",transform:`translate(-${+o}%,-50%)`,background:r||e.value};return(0,a.Wm)("span",{style:n,class:c("pivot",{inactive:t.inactive})},[s])}};return()=>{const{trackColor:n,percentage:r,strokeWidth:o}=t,l={background:n,height:(0,s.Nn)(o)},u={width:`${r}%`,background:e.value};return(0,a.Wm)("div",{class:c(),style:l},[(0,a.Wm)("span",{class:c("portion",{inactive:t.inactive}),style:u},null),i()])}}});const h=(0,n.n)(m)},67742:function(t,e,i){i(31958)},10470:function(t,e,i){i(31958),i(93254)},20158:function(t,e,i){i(31958),i(20368),i(56742),i(93254),i(66911)},6186:function(t,e,i){i(31958),i(63737)},32563:function(t,e,i){i(31958)},49987:function(t){t.exports=JSON.parse('[{"name":"羁梦星愿","gift":"星辰馈赠","gifts":["限定灵犀","动态头像框","点击特效"],"progress":[64,68,72,76,80],"must":[88,95,99],"rewards":[{"id":"120003","count":2,"weight":166},{"id":"coin","count":5000,"remain":38,"weight":100},{"id":"100003","count":100,"remain":18,"weight":100},{"id":"120002","count":3,"remain":28,"weight":100},{"id":"100030","count":40,"remain":39,"weight":100},{"id":"230001","count":100,"remain":9,"weight":145},{"id":"231002","count":1,"remain":38,"weight":100},{"id":"110003","count":1,"remain":18,"weight":100},{"id":"300401","count":10,"remain":30,"weight":100},{"id":"100073","count":1,"remain":28,"weight":100}]},{"name":"羁梦花事","gift":"浮花馈赠","gifts":["限定灵犀","情侣头像","陪伴氛围音"],"progress":[50,55,60,63,66],"must":[72,78,84],"rewards":[{"id":"120003","count":2,"weight":150},{"id":"400001","count":10,"remain":28,"weight":90},{"id":"100003","count":100,"remain":18,"weight":90},{"id":"120002","count":3,"remain":38,"weight":100},{"id":"400002","count":10,"remain":38,"weight":100},{"id":"110003","count":1,"remain":18,"weight":90},{"id":"coin","count":5000,"remain":38,"weight":90},{"id":"231002","count":1,"remain":28,"weight":100},{"id":"400003","count":150,"remain":32,"weight":90},{"id":"230001","count":100,"remain":9,"weight":100}]},{"name":"羁梦镜影","gift":"镜心馈赠","gifts":["限定灵犀","情侣头像","点击特效"],"progress":[50,55,60,63,66],"must":[72,78,84],"rewards":[{"id":"120003","count":2,"weight":150},{"id":"500001","count":300,"remain":29,"weight":90},{"id":"100003","count":100,"remain":18,"weight":90},{"id":"120002","count":3,"remain":38,"weight":100},{"id":"500002","count":20,"remain":25,"weight":100},{"id":"110003","count":1,"remain":19,"weight":90},{"id":"coin","count":5000,"remain":38,"weight":90},{"id":"231002","count":1,"remain":29,"weight":100},{"id":"500003","count":150,"remain":32,"weight":90},{"id":"230001","count":100,"remain":9,"weight":100}]}]')}}]);
//# sourceMappingURL=647-legacy.679799f6.js.map