(self["webpackChunklightandnight"]=self["webpackChunklightandnight"]||[]).push([[680],{9591:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var n=a(5160),l=(a(6338),a(6252));function o(e,t,a,o,r,i){const c=n.bL;return(0,l.wg)(),(0,l.j4)(c,{title:e.$t(`tutorial.${a.message}[0]`),label:e.$t("tutorial.via",[e.$t(`tutorial.${a.message}[2]`),a.desc]),"is-link":"",center:"",onClick:i.openUrl},null,8,["title","label","onClick"])}var r={name:"TutorialCell",props:{message:String,desc:String},methods:{openUrl(){window.open(this.$t(`tutorial.${this.message}[1]`))}}},i=a(3744);const c=(0,i.Z)(r,[["render",o]]);var u=c},680:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return k}});var n=a(4548),l=(a(2219),a(4385)),o=(a(5077),a(4635)),r=(a(7515),a(5778)),i=(a(8008),a(5160)),c=(a(6338),a(7630)),u=(a(1063),a(5267)),d=(a(1645),a(9591)),s=a(4958),m=a(6252);function h(e,t,h,f,p,g){const w=s.Z,k=d.Z,v=u.TS,b=c.rs,C=i.bL,$=r.gN,D=o.f,S=l.cW,V=n.GI;return(0,m.wg)(),(0,m.iD)(m.HY,null,[(0,m.Wm)(w,{title:e.$t("route.hoard"),hint:"hoard","can-return":""},null,8,["title"]),(0,m.Wm)(v,{title:e.$t("common.tutorial"),inset:""},{default:(0,m.w5)((()=>[(0,m.Wm)(k,{message:"hoard"})])),_:1},8,["title"]),(0,m.Wm)(v,{title:e.$t("hoard.card"),inset:""},{default:(0,m.w5)((()=>[((0,m.wg)(!0),(0,m.iD)(m.HY,null,(0,m.Ko)(p.card,((t,a)=>((0,m.wg)(),(0,m.iD)(m.HY,{key:a},[(0,m.Wm)(C,{title:t.name,label:e.$t("hoard.cardDesc",[t.count,t.unit,t.aka,t.desc]),center:""},{"right-icon":(0,m.w5)((()=>[(0,m.Wm)(b,{modelValue:t.on,"onUpdate:modelValue":e=>t.on=e},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["title","label"]),t.level&&t.on?((0,m.wg)(),(0,m.j4)($,{key:0,modelValue:t.level[t.curLevel].text,"onUpdate:modelValue":e=>t.level[t.curLevel].text=e,label:e.$t("hoard.level"),"left-icon":"arrow",readonly:"","is-link":"",onClick:e=>g.showPicker(t)},null,8,["modelValue","onUpdate:modelValue","label","onClick"])):(0,m.kq)("",!0),t.on?((0,m.wg)(),(0,m.j4)(C,{key:1,title:e.$t("hoard.decline"),icon:"arrow",value:t.decString,clickable:"",onClick:e=>g.showCalendar(a)},null,8,["title","value","onClick"])):(0,m.kq)("",!0)],64)))),128))])),_:1},8,["title"]),((0,m.wg)(!0),(0,m.iD)(m.HY,null,(0,m.Ko)(p.data,((t,a)=>((0,m.wg)(),(0,m.j4)(v,{key:a,inset:"",title:t.name+"常"},{default:(0,m.w5)((()=>[((0,m.wg)(!0),(0,m.iD)(m.HY,null,(0,m.Ko)(t.value,((t,a)=>((0,m.wg)(),(0,m.j4)(C,{key:a,title:t.name,label:e.$t("hoard.itemDesc",[t.count,t.desc]),center:""},{"right-icon":(0,m.w5)((()=>[(0,m.Wm)(b,{modelValue:t.on,"onUpdate:modelValue":e=>t.on=e},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["title","label"])))),128)),(0,m.Wm)($,{modelValue:t.other,"onUpdate:modelValue":e=>t.other=e,type:"number",label:e.$t("hoard.other"),placeholder:e.$t("hoard.otherDesc",[t.name]),autocomplete:"off"},null,8,["modelValue","onUpdate:modelValue","label","placeholder"])])),_:2},1032,["title"])))),128)),(0,m.Wm)(v,{inset:"",title:e.$t("common.currentStatus")},{default:(0,m.w5)((()=>[(0,m.Wm)($,{"left-icon":a(6130),label:e.$t("items.100003"),modelValue:p.currentBear,"onUpdate:modelValue":t[0]||(t[0]=e=>p.currentBear=e),type:"number",autocomplete:"off"},null,8,["left-icon","label","modelValue"]),(0,m.Wm)($,{"left-icon":a(3895),label:e.$t("items.100011"),modelValue:p.currentGachapon,"onUpdate:modelValue":t[1]||(t[1]=e=>p.currentGachapon=e),type:"number",autocomplete:"off"},null,8,["left-icon","label","modelValue"]),(0,m.Wm)($,{"left-icon":a(9784),label:e.$t("items.100012"),modelValue:p.currentGachapon10,"onUpdate:modelValue":t[2]||(t[2]=e=>p.currentGachapon10=e),type:"number",autocomplete:"off"},null,8,["left-icon","label","modelValue"]),(0,m.Wm)(C,{title:e.$t("hoard.target"),value:p.targetDateString,clickable:"",onClick:t[3]||(t[3]=e=>g.showCalendar(-1))},null,8,["title","value"])])),_:1},8,["title"]),(0,m.Wm)(v,{inset:"",title:e.$t("common.result")},{default:(0,m.w5)((()=>[(0,m.Wm)(C,{title:e.$t("hoard.resultGacha"),value:g.gacha},null,8,["title","value"]),(0,m.Wm)(C,{title:e.$t("common.equalsTo",[e.$t("items.100003")]),value:g.bear},null,8,["title","value"])])),_:1},8,["title"]),(0,m.Wm)(D,{show:p.calendarShow,"onUpdate:show":t[4]||(t[4]=e=>p.calendarShow=e),formatter:g.calendarFormatter,"min-date":p.startDate,onConfirm:g.calendarConfirm,"safe-area-inset-bottom":""},null,8,["show","formatter","min-date","onConfirm"]),(0,m.Wm)(V,{show:p.pickerShow,"onUpdate:show":t[6]||(t[6]=e=>p.pickerShow=e),round:"",position:"bottom","safe-area-inset-bottom":""},{default:(0,m.w5)((()=>[(0,m.Wm)(S,{columns:p.pickerColumn,"default-index":0,onConfirm:g.pickerConfirm,onCancel:t[5]||(t[5]=e=>p.pickerShow=!1)},null,8,["columns","onConfirm"])])),_:1},8,["show"])],64)}let f=a(7484);var p={name:"HoardCalculator",components:{Navbar:s.Z,TutorialCell:d.Z},data(){let{data:e,card:t}=a(9731)(`./${this.$root.server}/hoard.json`);for(let a in e)e[a].other=void 0;for(let a in t)t[a].dec=void 0;return{card:t,data:e,currentBear:void 0,currentGachapon:void 0,currentGachapon10:void 0,currentCalendar:0,pickerColumn:[],pickerTarget:{},pickerShow:!1,calendarShow:!1,startDate:f().toDate(),targetDate:f().add(1,"month").toDate(),targetDateString:f().add(1,"month").format(this.$t("hoard.dateFormat",[this.$t("hoard.defaultRemain")]))}},computed:{bear(){let e=f(this.targetDate),t=this.currentBear?Number(this.currentBear):0;t+=300*(this.currentGachapon?Number(this.currentGachapon):0),t+=3e3*(this.currentGachapon10?Number(this.currentGachapon10):0);for(let a in this.card)if(this.card[a].on){let n=this.getDiff(e,this.card[a].unit);this.card[a].dec&&(n=Math.min(n,this.getDiff(this.card[a].dec,this.card[a].unit))),t+=n*this.card[a].count}for(let a in this.data){let n=this.getDiff(e,this.data[a].unit),l=this.data[a].other?Number(this.data[a].other):0;for(let e in this.data[a].value)this.data[a].value[e].on&&(l+=this.data[a].value[e].count);t+=n*l}return t},gacha(){return Math.floor(this.bear/300)}},methods:{getDiff(e,t){return Math.ceil(f(e).diff(f(),t||"day",!0))},showPicker(e){this.pickerColumn=e.level.map(((e,t)=>({...e,index:t}))),this.pickerTarget=e,this.pickerShow=!0},pickerConfirm(e){let t=e.selectedOptions[0];this.pickerTarget.count=t.value,this.pickerTarget.curLevel=t.index,this.pickerShow=!1},showCalendar(e){this.currentCalendar=e,this.calendarShow=!0},calendarFormatter(e){return"selected"==e.type&&(e.bottomInfo=this.$t("hoard.remain",[this.getDiff(e.date)])),e},calendarConfirm(e){let t=this.currentCalendar;this.calendarShow=!1;let a=this.getDiff(e),n=f(e).format(this.$t("hoard.dateFormat",[this.$t("hoard.remain",[a])]));-1==t?(this.targetDate=e,this.targetDateString=n):(this.card[t].dec=e,this.card[t].decString=n)}}},g=a(3744);const w=(0,g.Z)(p,[["render",h]]);var k=w},9731:function(e,t,a){var n={"./CN/hoard.json":7476};function l(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}l.keys=function(){return Object.keys(n)},l.resolve=o,e.exports=l,l.id=9731},6130:function(e,t,a){"use strict";e.exports=a.p+"img/100003.f3678a08.png"},3895:function(e,t,a){"use strict";e.exports=a.p+"img/100011.4d11842a.png"},9784:function(e,t,a){"use strict";e.exports=a.p+"img/100012.ef7d22c4.png"},7515:function(e,t,a){"use strict";a(1958),a(368),a(6742),a(2939),a(1452),a(6196),a(2666),a(770),a(1771),a(9137),a(1088),a(5338),a(1564),a(1744),a(6565)},7476:function(e){"use strict";e.exports=JSON.parse('{"data":{"daily":{"name":"日","unit":"day","value":[{"name":"日常全勤","desc":"今日计划、星光展馆、商店 5 区","count":120,"on":true},{"name":"QQ 游戏中心","desc":"每日登录礼包、启动特权礼包","count":6,"on":false}]},"weekly":{"name":"周","unit":"week","value":[{"name":"星座研究","desc":"按第 6 章通关计","count":800,"on":true},{"name":"QQ 游戏中心","desc":"每周登陆礼包","count":10,"on":false},{"name":"心悦俱乐部","desc":"每周签到第一天","count":30,"on":false},{"name":"掌上道聚城","desc":"道具兑换、周五六签到、互助","count":215,"on":false}]},"monthly":{"name":"月","unit":"month","value":[{"name":"本月签到","desc":"x6 日羽毛笔折合","count":900,"on":true},{"name":"签到链接","desc":"第六、七天折合，按每月两次计","count":1200,"on":false},{"name":"QQ 游戏中心","desc":"道具兑换、每月登录礼包","count":40,"on":false}]}},"card":[{"name":"超值月卡","aka":"小月卡","desc":"游戏内 30 元开通","count":150,"on":false,"decString":"不过期","unit":"d"},{"name":"悦享卡","aka":"大月卡","desc":"心悦俱乐部 98 元开通","count":300,"on":false,"decString":"不过期","unit":"d"},{"name":"限定巡礼","aka":"季卡/年卡","desc":"活动 60 元开通","count":100,"on":false,"decString":"不过期","unit":"d"},{"name":"祈愿勾勾","aka":"年卡","desc":"活动 68 元开通，按保底计","level":[{"text":"日影契约 (200/w)","value":200},{"text":"仲元契约 (400/w)","value":400},{"text":"永兆契约 (700/w)","value":700}],"count":200,"on":false,"curLevel":0,"decString":"不过期","unit":"w"}]}')}}]);
//# sourceMappingURL=680.e1c3bb87.js.map