(function(e){function t(t){for(var n,i,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,i=1;i<a.length;i++){var s=a[i];0!==r[s]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},i={app:0},r={app:0},o=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-01e90d67":"a2a49420","chunk-0f93fa4c":"b884808e","chunk-20014aa4":"ff7cc8db","chunk-23953478":"8c7652da","chunk-446d11fa":"3bae645e","chunk-45e2001a":"f5dee6aa","chunk-54988b88":"c26f50df","chunk-af8caa32":"807e1173"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={"chunk-01e90d67":1,"chunk-0f93fa4c":1,"chunk-20014aa4":1,"chunk-446d11fa":1,"chunk-45e2001a":1,"chunk-54988b88":1,"chunk-af8caa32":1};i[e]?t.push(i[e]):0!==i[e]&&a[e]&&t.push(i[e]=new Promise((function(t,a){for(var n="css/"+({}[e]||e)+"."+{"chunk-01e90d67":"e5309c5a","chunk-0f93fa4c":"a72c6fa7","chunk-20014aa4":"234b80b5","chunk-23953478":"31d6cfe0","chunk-446d11fa":"e303e13f","chunk-45e2001a":"72a34486","chunk-54988b88":"2c10f5e8","chunk-af8caa32":"121b3320"}[e]+".css",r=c.p+n,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===r))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===n||u===r)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete i[e],p.parentNode.removeChild(p),a(o)},p.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){i[e]=0})));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(p);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",d.name="ChunkLoadError",d.type=n,d.request=i,a[1](d)}r[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=u;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("85ec"),i=a.n(n);i.a},"196b":function(e,t,a){"use strict";var n=a("7f02"),i=a.n(n);i.a},"29d8":function(e,t,a){},"43c7":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:e.id}})},i=[],r=(a("572f"),a("df94")),o={name:"Particles",props:{id:{type:String,default:"particles-js"}},mounted:function(){window.particlesJS(this.id,r)}},s=o,c=(a("5f1d"),a("2877")),l=Object(c["a"])(s,n,i,!1,null,"7b25559a",null);t["a"]=l.exports},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"is-family-monospace",attrs:{id:"app"}},[a("Header"),a("Navigation"),a("router-view"),a("Footer")],1)},r=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header")},s=[],c=a("2877"),l={},u=Object(c["a"])(l,o,s,!1,null,null,null),d=u.exports,p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"navbar is-danger is-fixed-top",attrs:{role:"navigation","aria-label":"main navigation"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"navbar-brand"},[a("div",{staticClass:"navbar-item"},[e._v(" "+e._s(e.$parent.app_owner)+" ")]),a("div",{staticClass:"navbar-burger burger",class:!!e.is_active&&"is-active",attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"mainNavigation"},on:{click:function(t){e.is_active=!e.is_active}}},[a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"navbar-menu",class:!!e.is_active&&"is-active",attrs:{id:"mainNavigation"}},[a("div",{staticClass:"navbar-start"},e._l(e.menus,(function(t){return a("router-link",{key:t.url,staticClass:"navbar-item",attrs:{to:t.url},on:{click:function(a){e.selected_menu=t}}},[e._v(e._s(t.title))])})),1),a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"navbar-item"},[a("div",{staticClass:"buttons are-small is-centered"},e._l(e.socialProfiles,(function(e){return a("a",{key:e.url,staticClass:"button",class:e.bg_class,attrs:{href:e.url,target:"_blank"}},[a("span",{staticClass:"icon"},[a("fa-icon",{attrs:{icon:[e.icon_prefix,e.icon]}})],1)])})),0)])])])])])},m=[],f=a("67c2"),h={name:"Navigation",data:function(){return{is_active:!1,selected_menu:null,socialProfiles:f["h"],menus:[{title:"Home",url:"/"},{title:"About",url:"/about"},{title:"Education",url:"/education"},{title:"Skills",url:"/skills"},{title:"Portfolio",url:"/portfolio"},{title:"Research",url:"/research"},{title:"Award & Honor",url:"/award&honor"},{title:"Contact",url:"/contact"}]}}},g=h,b=(a("ca8f"),Object(c["a"])(g,p,m,!1,null,"238209a5",null)),v=b.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"has-text-white"},[a("section",{staticClass:"columns"},[a("div",{staticClass:"column"},[e._v(e._s(e.$parent.app_title))]),a("div",{staticClass:"column"},[e._v(" Copyright © "+e._s((new Date).getFullYear())+". All Rights Reserved ")]),a("div",{staticClass:"column"},[e._v("v"+e._s(e.$parent.app_version))])])])},k=[],_=(a("196b"),{}),S=Object(c["a"])(_,y,k,!1,null,"6ea8f77b",null),C=S.exports,P=a("9224"),A={name:"Index",data:function(){return{app_title:P["b"],app_owner:P["a"],app_version:P["c"]}},components:{Header:d,Navigation:v,Footer:C}},w=A,D=(a("034f"),Object(c["a"])(w,i,r,!1,null,null,null)),M=D.exports,E=(a("d3b7"),a("8c4f")),L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"section home"},[a("Particles"),a("div",{staticClass:"container"},[a("h2",{staticClass:"title is-uppercase is-size-2-tablet has-text-white"},[e._v(" Welcome to my place! ")]),a("h2",{staticClass:"title is-uppercase is-size-3-tablet has-text-white"},[e._v(" It's nice to meet you. ")]),a("router-link",{staticClass:"button is-success is-size-5-tablet is-rounded is-uppercase",attrs:{to:"/about"}},[e._v("Explore my world")])],1)],1)},R=[],x=a("43c7"),O={name:"Home",components:{Particles:x["a"]}},j=O,I=(a("a851"),Object(c["a"])(j,L,R,!1,null,"0cee1bc5",null)),T=I.exports;n["a"].use(E["a"]);var N=[{path:"/",name:"Home",component:T,meta:{title:"Home"}},{path:"/about",name:"about",component:function(){return a.e("chunk-20014aa4").then(a.bind(null,"f820"))},meta:{title:"About"}},{path:"/education",name:"education",component:function(){return a.e("chunk-54988b88").then(a.bind(null,"7a0c"))},meta:{title:"Education"}},{path:"/skills",name:"skills",component:function(){return a.e("chunk-446d11fa").then(a.bind(null,"ad83"))},meta:{title:"Skills"}},{path:"/portfolio",name:"portfolio",component:function(){return a.e("chunk-0f93fa4c").then(a.bind(null,"c9e5"))},meta:{title:"Portfolio"}},{path:"/research",name:"research",component:function(){return a.e("chunk-45e2001a").then(a.bind(null,"45d3"))},meta:{title:"Research"}},{path:"/award&honor",name:"award&honor",component:function(){return a.e("chunk-23953478").then(a.bind(null,"395e"))},meta:{title:"Award & Honor"}},{path:"/contact",name:"contact",component:function(){return a.e("chunk-af8caa32").then(a.bind(null,"b8fa"))},meta:{title:"Contact"}},{path:"*",component:function(){return a.e("chunk-01e90d67").then(a.bind(null,"7746"))}}],B=new E["a"]({routes:N});B.beforeEach((function(e,t,a){document.title=P["b"]+" | "+e.meta.title,a()}));var H=B,z=(a("29d8"),a("ecee")),F=a("c074"),J=a("f2d1"),$=a("ad3d");z["c"].add(F["e"],F["a"],F["b"],F["d"],F["c"],F["g"],F["f"],J["a"],J["d"],J["b"],J["c"]),n["a"].component("fa-icon",$["a"]),n["a"].component("fa-layers",$["b"]),n["a"].config.productionTip=!1,new n["a"]({router:H,render:function(e){return e(M)}}).$mount("#app")},"5f1d":function(e,t,a){"use strict";var n=a("6f98"),i=a.n(n);i.a},"63fd":function(e,t,a){},"67c2":function(e){e.exports=JSON.parse('{"a":[{"title":"Docker for the Absolute Beginner - Hands On","institute":"KodeKloud","year":2019,"mark":"100%","certificate":"https://kodekloud.com/courses/296044/certificate"},{"title":"Machine Learning","institute":"Stanford University","year":2018,"mark":"Ongoing","certificate":""},{"title":"Intro to Python for Data Science","institute":"DataCamp","year":2017,"mark":"100%","certificate":"https://www.datacamp.com/statement-of-accomplishment/course/7a0d1d072feca7e170f7b0f261636ca4408557f9"},{"title":"The Complete PHP CodeIgniter Course - Beginner To Advanced","institute":"Udemy","year":2016,"mark":"100%","certificate":"https://www.udemy.com/certificate/UC-MS0YL83N/"},{"title":"Python, Javascript, Learn the Command Line","institute":"Codecademy","year":2014,"mark":"100%","certificate":""}],"b":[{"id":1,"category":"Software","title":"DMS","keys":["Laravel","Vue.js"],"image_url":"dms.png","description":"DMS | Plant/Factory Document Management System. About DMS : DMS is abbreviated as Document Management System, specially designed for Plant or Factory. DMS is fully a Rest API based System. Here Progressive Frontend Vue.js v2 is used for views that are very user-friendly to the client-side and laravel 6.2.0 is used as a backend to develop the REST API. Here are the feature of DMS System User Management. User Role Management. Department Management. Plant Management. Equipment Management. Category Management. Locker Management. Document Management. Advanced Filteration to all columns of Document Document Title Document Description Department Plant Equipment Category Locker Columns Can be Sorted Smart Dropdown with filtering feature in Column Filter","client":"Super Petrochemical Limited","month":"December","year":2019},{"id":2,"category":"Software","title":"SPL ERP","keys":["Laravel"],"image_url":"erp.png","description":"ERP (Enterprise Resource Planning) : Features are * User Management * Work-order Management (User access-wise status update) * Department Management * Equipment Management * Plant Management * Store Management * Part Management * Supplier Management * Stock Management with Stock History * Relational Database","client":"Super Petrochemical Limited","month":"August","year":2019},{"id":3,"category":"Industrial Automation","title":"Naphtha Splitter Process","keys":["DCS of ABB"],"image_url":"upgrade-dcs.jpg","description":"Total Naphtha Splitter & Sweetening Process Automation using DCS of ABB","client":"Super Petrochemical Limited","month":"March","year":2019},{"id":4,"category":"Industrial Automation","title":"RO Plant Automation","keys":["Allen Bradley","PLC","IWS SCADA"],"image_url":"scada.png","description":"SPL RO Plant Automation with S7-1200 PLC & SCADA with Indusoft Web Studio","client":"Super Petrochemical Limited","month":"January","year":2019},{"id":5,"category":"Industrial Automation","title":"Power House SCADA System","keys":["IWS SCADA"],"description":"Power House SCADA System using Indusoft Web Studio","image_url":"scada.png","client":"Super Petrochemical Limited","month":"November","year":2018},{"id":6,"category":"Embedded System","title":"Leather Area Measure","keys":["ESP8266"],"description":"Leather Area measurement and intelligent damaged or noisy sensor detection system using ESP8266 for tannery.","image_url":"embedded_system.png","client":"Stellar BD","month":"April","year":2018},{"id":7,"category":"Industrial Automation","title":"Resin Process Automation","keys":["WinCC SCADA"],"description":"Berger Resin Process Automation SCADA developed with WinCC","image_url":"scada.png","client":"Berger","month":"June","year":2017},{"id":8,"category":"Robotics","title":"Robo Nurse","keys":["Robotics"],"description":"Robo Nurse developed on \'Make-a-Thon\' Hackathon in Dhaka organized by ICT Ministry, Bangladesh using Arduino, Bluetooth, ECG Chip, Temperature Chip, Custom build Andriod App","image_url":"Robo_Nurse.jpeg","month":"July","year":2016},{"id":9,"category":"Embedded System","title":"Smart Taxi Meter","keys":["IoT","Embedded Systems"],"description":"Smart Taxi Meter using Arduino, RF Communication, IoT","image_url":"embedded_system.png","month":"July","year":2014},{"id":10,"category":"Embedded System","title":"Pathak","keys":["Reading Device","Raspberry Pi","Pi Camera"],"description":"Reading Device for Visually handicapped people in bengali language using Raspberry Pi and tesseract-ocr","image_url":"Pathak.jpeg","month":"April","year":2014},{"id":11,"category":"Robotics","title":"Maze Solver Robot","keys":["Robotics"],"description":"Maze Solver Robot with Object Gripping and Object Detecting Features","image_url":"maze_solver.jpg","month":"July","year":2013}],"g":[{"id":1,"category":"Industrial Automation","skills":[{"title":"SCADA","percentage":"85"},{"title":"PLC(Siemens)","percentage":"70"},{"title":"PLC(Allen Bradley)","percentage":"70"}]},{"id":2,"category":"Embedded Systems","skills":[{"title":"Arduino","percentage":"80"},{"title":"Raspberry Pi","percentage":"70"},{"title":"ESP","percentage":"60"},{"title":"PIC","percentage":"60"}]},{"id":3,"category":"Programming Languages","skills":[{"title":"PHP","percentage":"75"},{"title":"Python","percentage":"70"},{"title":"C++","percentage":"65"},{"title":"C#","percentage":"60"},{"title":"MATLAB","percentage":"60"}]},{"id":4,"category":"Databases","skills":[{"title":"MySQL","percentage":"80"},{"title":"MSSQL","percentage":"65"}]},{"id":5,"category":"Design Software","skills":[{"title":"Autocad 2D","percentage":"70"},{"title":"Diptrace","percentage":"60"},{"title":"Proteus","percentage":"60"}]},{"id":6,"category":"Others","skills":[{"title":"Git","percentage":"70"},{"title":"OpenCV","percentage":"40"}]}],"e":[{"division":"Computer Vision & Image Processing","sub_division":"Optical Character Recognition & Face Detection","fa_icon":"image"},{"division":"Embedded Systems and IoT","sub_division":"Arduino, ESP, Raspberry Pi, PIC","fa_icon":"microchip"},{"division":"Industrial Automation & Instrumentation","sub_division":"PLC, SCADA, HMI, DCS","fa_icon":"industry"},{"division":"Machine Learning","sub_division":"AI using Machine Learning","fa_icon":"university"}],"d":[{"title":"Implementation of a reading device for bengali speaking visually handicapped people","status":"published","published_year":"2016","url":"https://ieeexplore.ieee.org/document/8288999"}],"h":[{"title":"linkedin","url":"https://www.linkedin.com/in/shuvasisdatta/","icon_prefix":"fab","icon":"linkedin-in","bg_class":"is-info"},{"title":"github","url":"https://github.com/shuvasisdatta","icon_prefix":"fab","icon":"github","bg_class":"is-black"},{"title":"facebook","url":"https://facebook.com/shuvasis.datta","icon_prefix":"fab","icon":"facebook-f","bg_class":"is-link"},{"title":"Email","url":"mailto:shuvasisdatta@gmail.com","icon_prefix":"fab","icon":"google","bg_class":"is-danger"},{"title":"Phone","url":"tel:+8801676383470","icon_prefix":"fas","icon":"phone-alt","bg_class":"is-primary"}],"f":"https://drive.google.com/open?id=1_nR_5aDkOBMjscz-eVgO0zX0BEkaKnpe","c":"profile.jpg"}')},"6f98":function(e,t,a){},"7f02":function(e,t,a){},"85ec":function(e,t,a){},9224:function(e){e.exports=JSON.parse('{"b":"Shuvasis Datta","a":"Shuvasis Datta","c":"1.0.0"}')},a851:function(e,t,a){"use strict";var n=a("f6f5"),i=a.n(n);i.a},ca8f:function(e,t,a){"use strict";var n=a("63fd"),i=a.n(n);i.a},df94:function(e){e.exports=JSON.parse('{"particles":{"number":{"value":75,"density":{"enable":false,"value_area":1000}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"../images/github.svg","width":100,"height":80}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":2,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":4,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}')},f6f5:function(e,t,a){}});
//# sourceMappingURL=app.fc039b03.js.map