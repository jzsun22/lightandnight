if(!self.define){let l,n={};const i=(i,r)=>(i=new URL(i+".js",r).href,n[i]||new Promise((n=>{if("document"in self){const l=document.createElement("script");l.src=i,l.onload=n,document.head.appendChild(l)}else l=i,importScripts(i),n()})).then((()=>{let l=n[i];if(!l)throw new Error(`Module ${i} didn’t register its module`);return l})));self.define=(r,u)=>{const e=l||("document"in self?document.currentScript.src:"")||location.href;if(n[e])return;let s={};const g=l=>i(l,e),o={module:{uri:e},exports:s,require:g};n[e]=Promise.all(r.map((l=>o[l]||g(l)))).then((l=>(u(...l),s)))}}define(["./workbox-5b385ed2"],(function(l){"use strict";l.setCacheNameDetails({prefix:"lightandnight"}),self.addEventListener("message",(l=>{l.data&&"SKIP_WAITING"===l.data.type&&self.skipWaiting()})),l.precacheAndRoute([{url:"css/395.eb36b4ac.css",revision:null},{url:"css/498.e9749d6a.css",revision:null},{url:"css/610.56546388.css",revision:null},{url:"css/647.2f7cced7.css",revision:null},{url:"css/690.8ed6a266.css",revision:null},{url:"css/764.270c5724.css",revision:null},{url:"css/810.7759bbc5.css",revision:null},{url:"css/819.f1923e0d.css",revision:null},{url:"css/827.73f9d227.css",revision:null},{url:"css/846.5d169af0.css",revision:null},{url:"css/976.5d169af0.css",revision:null},{url:"css/987.320b8bc1.css",revision:null},{url:"css/app.70ac1cf0.css",revision:null},{url:"css/chunk-vendors.21250eef.css",revision:null},{url:"fonts/Northwell_Alt.fbbb15d7.ttf",revision:null},{url:"img/100003.f3678a08.png",revision:null},{url:"img/100011.4d11842a.png",revision:null},{url:"img/100012.ef7d22c4.png",revision:null},{url:"img/100013.fbed8894.png",revision:null},{url:"img/120001.acc9a5e4.png",revision:null},{url:"img/120002.97f69f1f.png",revision:null},{url:"img/120003.7d2d6ce4.png",revision:null},{url:"img/200011.0917c459.png",revision:null},{url:"img/200012.ed4c103a.png",revision:null},{url:"img/200013.2c228f01.png",revision:null},{url:"img/200102.f45d37f4.png",revision:null},{url:"img/200103.8242e9b2.png",revision:null},{url:"img/200104.874a6eb2.png",revision:null},{url:"img/200105.2fe2adf6.png",revision:null},{url:"img/200106.6bc42772.png",revision:null},{url:"img/230001.051ac498.png",revision:null},{url:"img/231001.c2499903.png",revision:null},{url:"img/231002.d3350cca.png",revision:null},{url:"img/300395.0dd35876.png",revision:null},{url:"img/300402.0546e776.png",revision:null},{url:"img/301030.f4d482d9.png",revision:null},{url:"img/301152.8b9aa19d.png",revision:null},{url:"img/400004.85704918.png",revision:null},{url:"img/Anan.d07be731.png",revision:null},{url:"img/Anonymous_1.73f86fe5.png",revision:null},{url:"img/Anonymous_2.a0ab742a.png",revision:null},{url:"img/Anonymous_3.f07d404b.png",revision:null},{url:"img/Anonymous_4.a48e408b.png",revision:null},{url:"img/Anonymous_5.15ef941b.png",revision:null},{url:"img/Anonymous_6.44cbe7dc.png",revision:null},{url:"img/Bob.fdcf66fa.png",revision:null},{url:"img/Charlie.119c1a83.png",revision:null},{url:"img/Charlie_1.d51e02a0.png",revision:null},{url:"img/Charlie_2.ef146881.png",revision:null},{url:"img/ChenChe.87f3f5e9.png",revision:null},{url:"img/Eddie.1cc98ac3.png",revision:null},{url:"img/Evan.dacc5517.png",revision:null},{url:"img/Evan_1.b2c92514.png",revision:null},{url:"img/Evan_2.ebdd7ee0.png",revision:null},{url:"img/FBack.02a3080c.svg",revision:null},{url:"img/FContact.2037c269.svg",revision:null},{url:"img/FDiscover.8c339751.svg",revision:null},{url:"img/FMessage.8b5bdc0d.svg",revision:null},{url:"img/FVideo.7cd59f99.svg",revision:null},{url:"img/GaoCheng.e41aa1af.png",revision:null},{url:"img/HaoShuai.74831683.png",revision:null},{url:"img/Jesse.7fff90d2.png",revision:null},{url:"img/Jesse_1.1730de87.png",revision:null},{url:"img/Jesse_2.30df3679.png",revision:null},{url:"img/JiangLai.aad975f7.png",revision:null},{url:"img/Jishu.17182b24.png",revision:null},{url:"img/LiManman.06591e09.png",revision:null},{url:"img/Maoge.c57862a3.png",revision:null},{url:"img/Mya.c0400d04.png",revision:null},{url:"img/OContact.570ef32f.svg",revision:null},{url:"img/ODiscover.2deac893.svg",revision:null},{url:"img/OMessage.e099c807.svg",revision:null},{url:"img/OVideo.c49098ec.svg",revision:null},{url:"img/Osborn.c25b46ca.png",revision:null},{url:"img/Osborn_1.6653c088.png",revision:null},{url:"img/Osborn_2.126d738b.png",revision:null},{url:"img/Player.f9eaf5c5.png",revision:null},{url:"img/Player_Charlie_1.e555a654.png",revision:null},{url:"img/Player_Charlie_2.06f3ff2d.png",revision:null},{url:"img/Player_Evan_1.8fcccc31.png",revision:null},{url:"img/Player_Evan_2.85033c04.png",revision:null},{url:"img/Player_Jesse_1.e3f51378.png",revision:null},{url:"img/Player_Jesse_2.8037410e.png",revision:null},{url:"img/Player_Osborn_1.4b3faad3.png",revision:null},{url:"img/Player_Osborn_2.76b6939b.png",revision:null},{url:"img/Player_Sariel_1.ff3e58df.png",revision:null},{url:"img/Player_Sariel_2.dc447d1d.png",revision:null},{url:"img/QiShe.3c74cc6d.png",revision:null},{url:"img/Sariel.1815b2db.png",revision:null},{url:"img/Sariel_1.ad011690.png",revision:null},{url:"img/Sariel_2.007828b3.png",revision:null},{url:"img/Warson.cd819c50.png",revision:null},{url:"img/WarsonE.09091168.png",revision:null},{url:"img/XiaoHuolong.ce7ad392.png",revision:null},{url:"img/XiaoXiaoyi.f5e79358.png",revision:null},{url:"img/Xuelijiu.9fb4c8fc.png",revision:null},{url:"img/YeChuan.b8c30fb7.png",revision:null},{url:"img/ZhengLin.89449455.png",revision:null},{url:"img/ZhouYan.650bae80.png",revision:null},{url:"img/background_bottom.783f58a3.png",revision:null},{url:"img/background_card.61864233.png",revision:null},{url:"img/background_float.1e345ac9.png",revision:null},{url:"img/background_top.37bb2377.png",revision:null},{url:"img/border_3.d6b84485.png",revision:null},{url:"img/border_4.60f5b6ff.png",revision:null},{url:"img/border_5.83b56eba.png",revision:null},{url:"img/border_6.2edb2443.png",revision:null},{url:"img/card_1.05433ede.png",revision:null},{url:"img/card_2.cfbb745d.png",revision:null},{url:"img/card_border.36a3a076.png",revision:null},{url:"img/card_thumb.84d0f882.png",revision:null},{url:"img/coin.b732872d.png",revision:null},{url:"img/flower.d7326ce5.png",revision:null},{url:"img/flower_3.38035a62.png",revision:null},{url:"img/flower_4.b2ba1171.png",revision:null},{url:"img/flower_5.cc216391.png",revision:null},{url:"img/flower_6.4295623a.png",revision:null},{url:"img/icon-maskable.png",revision:"dbe226f35160b64a20602de4e6665811"},{url:"img/icon.png",revision:"4186958fa403e00aaadc59cbb0b88c60"},{url:"img/mark_1.1b68fb6d.png",revision:null},{url:"img/navbar.b96ba3f2.png",revision:null},{url:"img/new.1d733a19.png",revision:null},{url:"img/sign_0.86b94cf3.png",revision:null},{url:"img/sign_1.cf934f5c.png",revision:null},{url:"img/sign_2.c7690948.png",revision:null},{url:"img/sign_3.b0e9830b.png",revision:null},{url:"img/sign_4.634cd962.png",revision:null},{url:"img/sign_5.6a738e58.png",revision:null},{url:"img/star.043747f2.png",revision:null},{url:"img/star.5b582332.png",revision:null},{url:"img/wish.f3bcbbad.jpg",revision:null},{url:"index.html",revision:"3fbc1a1b428140cd707f1cb631a2f89a"},{url:"js/395.ca5a7591.js",revision:null},{url:"js/498.75da8d84.js",revision:null},{url:"js/610.b16c688a.js",revision:null},{url:"js/647.2e72b878.js",revision:null},{url:"js/690.dee19ee7.js",revision:null},{url:"js/764.049d2913.js",revision:null},{url:"js/810.663d3d99.js",revision:null},{url:"js/819.74c1833d.js",revision:null},{url:"js/827.9a12227a.js",revision:null},{url:"js/846.d00b822c.js",revision:null},{url:"js/976.9c74bf56.js",revision:null},{url:"js/987.af6c3c04.js",revision:null},{url:"js/app.3093d8ec.js",revision:null},{url:"js/chunk-vendors.64e8e38a.js",revision:null},{url:"js/safari-nomodule-fix.js",revision:"cd7a34e714de94d5c29b8ac5acdde24b"},{url:"manifest.json",revision:"a9a908c93f372c05160d468bb6885645"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
