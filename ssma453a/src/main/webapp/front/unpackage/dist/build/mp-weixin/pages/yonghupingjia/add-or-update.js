(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/yonghupingjia/add-or-update"],{"18dc":function(n,i,e){"use strict";(function(n){e("96a0");a(e("66fd"));var i=a(e("1c96"));function a(n){return n&&n.__esModule?n:{default:n}}n(i.default)}).call(this,e("543d")["createPage"])},"1c96":function(n,i,e){"use strict";e.r(i);var a=e("e5b2"),t=e("8872");for(var r in t)"default"!==r&&function(n){e.d(i,n,(function(){return t[n]}))}(r);e("fbb0");var u,o=e("f0c5"),c=Object(o["a"])(t["default"],a["b"],a["c"],!1,null,"9e6f211c",null,!1,a["a"],u);i["default"]=c.exports},2207:function(n,i,e){"use strict";(function(n){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=t(e("a34a"));function t(n){return n&&n.__esModule?n:{default:n}}function r(n,i,e,a,t,r,u){try{var o=n[r](u),c=o.value}catch(p){return void e(p)}o.done?i(c):Promise.resolve(c).then(a,t)}function u(n){return function(){var i=this,e=arguments;return new Promise((function(a,t){var u=n.apply(i,e);function o(n){r(u,a,t,o,c,"next",n)}function c(n){r(u,a,t,o,c,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(function(){return resolve(e("8cfa"))}.bind(null,e)).catch(e.oe)},c={data:function(){return{ruleForm:{dingdanbianhao:this.getUUID(),caipinmingcheng:"",tupian:"",caipinpingjia:"",caipinzhiliang:"",fuwupingjia:"",pingyu:"",pingjiashijian:"",dianpuzhanghao:"",dianpumingcheng:"",zhanghao:"",xingming:"",userid:""},caipinpingjiaOptions:[],caipinpingjiaIndex:0,caipinzhiliangOptions:[],caipinzhiliangIndex:0,fuwupingjiaOptions:[],fuwupingjiaIndex:0,user:{},ro:{dingdanbianhao:!1,caipinmingcheng:!1,tupian:!1,caipinpingjia:!1,caipinzhiliang:!1,fuwupingjia:!1,pingyu:!1,pingjiashijian:!1,dianpuzhanghao:!1,dianpumingcheng:!1,zhanghao:!1,xingming:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(i){var e=this;return u(a.default.mark((function t(){var r,u,o,c;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.ruleForm.pingjiashijian=e.$utils.getCurDateTime(),r=n.getStorageSync("nowTable"),t.next=4,e.$api.session(r);case 4:if(u=t.sent,e.user=u.data,e.ruleForm.zhanghao=e.user.zhanghao,e.ruleForm.xingming=e.user.xingming,e.caipinpingjiaOptions="★,★★,★★★,★★★★,★★★★★".split(","),e.caipinzhiliangOptions="★,★★,★★★,★★★★,★★★★★".split(","),e.fuwupingjiaOptions="★,★★,★★★,★★★★,★★★★★".split(","),e.ruleForm.userid=n.getStorageSync("userid"),i.refid&&(e.ruleForm.refid=i.refid,e.ruleForm.nickname=n.getStorageSync("nickname")),!i.id){t.next=19;break}return e.ruleForm.id=i.id,t.next=17,e.$api.info("yonghupingjia",e.ruleForm.id);case 17:u=t.sent,e.ruleForm=u.data;case 19:if(!i.cross){t.next=78;break}o=n.getStorageSync("crossObj"),t.t0=a.default.keys(o);case 22:if((t.t1=t.t0()).done){t.next=78;break}if(c=t.t1.value,"dingdanbianhao"!=c){t.next=28;break}return e.ruleForm.dingdanbianhao=o[c],e.ro.dingdanbianhao=!0,t.abrupt("continue",22);case 28:if("caipinmingcheng"!=c){t.next=32;break}return e.ruleForm.caipinmingcheng=o[c],e.ro.caipinmingcheng=!0,t.abrupt("continue",22);case 32:if("tupian"!=c){t.next=36;break}return e.ruleForm.tupian=o[c],e.ro.tupian=!0,t.abrupt("continue",22);case 36:if("caipinpingjia"!=c){t.next=40;break}return e.ruleForm.caipinpingjia=o[c],e.ro.caipinpingjia=!0,t.abrupt("continue",22);case 40:if("caipinzhiliang"!=c){t.next=44;break}return e.ruleForm.caipinzhiliang=o[c],e.ro.caipinzhiliang=!0,t.abrupt("continue",22);case 44:if("fuwupingjia"!=c){t.next=48;break}return e.ruleForm.fuwupingjia=o[c],e.ro.fuwupingjia=!0,t.abrupt("continue",22);case 48:if("pingyu"!=c){t.next=52;break}return e.ruleForm.pingyu=o[c],e.ro.pingyu=!0,t.abrupt("continue",22);case 52:if("pingjiashijian"!=c){t.next=56;break}return e.ruleForm.pingjiashijian=o[c],e.ro.pingjiashijian=!0,t.abrupt("continue",22);case 56:if("dianpuzhanghao"!=c){t.next=60;break}return e.ruleForm.dianpuzhanghao=o[c],e.ro.dianpuzhanghao=!0,t.abrupt("continue",22);case 60:if("dianpumingcheng"!=c){t.next=64;break}return e.ruleForm.dianpumingcheng=o[c],e.ro.dianpumingcheng=!0,t.abrupt("continue",22);case 64:if("zhanghao"!=c){t.next=68;break}return e.ruleForm.zhanghao=o[c],e.ro.zhanghao=!0,t.abrupt("continue",22);case 68:if("xingming"!=c){t.next=72;break}return e.ruleForm.xingming=o[c],e.ro.xingming=!0,t.abrupt("continue",22);case 72:if("userid"!=c){t.next=76;break}return e.ruleForm.userid=o[c],e.ro.userid=!0,t.abrupt("continue",22);case 76:t.next=22;break;case 78:e.styleChange();case 79:case"end":return t.stop()}}),t)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},pingjiashijianConfirm:function(n){console.log(n),this.ruleForm.pingjiashijian=n.result,this.$forceUpdate()},caipinpingjiaChange:function(n){this.caipinpingjiaIndex=n.target.value,this.ruleForm.caipinpingjia=this.caipinpingjiaOptions[this.caipinpingjiaIndex]},caipinzhiliangChange:function(n){this.caipinzhiliangIndex=n.target.value,this.ruleForm.caipinzhiliang=this.caipinzhiliangOptions[this.caipinzhiliangIndex]},fuwupingjiaChange:function(n){this.fuwupingjiaIndex=n.target.value,this.ruleForm.fuwupingjia=this.fuwupingjiaOptions[this.fuwupingjiaIndex]},tupianTap:function(){var n=this;this.$api.upload((function(i){n.ruleForm.tupian=n.$base.url+"upload/"+i.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(a.default.mark((function i(){return a.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(!n.ruleForm.id){i.next=5;break}return i.next=3,n.$api.update("yonghupingjia",n.ruleForm);case 3:i.next=7;break;case 5:return i.next=7,n.$api.add("yonghupingjia",n.ruleForm);case 7:n.$utils.msgBack("提交成功");case 8:case"end":return i.stop()}}),i)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var i=new Date,e=i.getFullYear(),a=i.getMonth()+1,t=i.getDate();return"start"===n?e-=60:"end"===n&&(e+=2),a=a>9?a:"0"+a,t=t>9?t:"0"+t,"".concat(e,"-").concat(a,"-").concat(t)},toggleTab:function(n){this.$refs[n].show()}}};i.default=c}).call(this,e("543d")["default"])},8872:function(n,i,e){"use strict";e.r(i);var a=e("2207"),t=e.n(a);for(var r in a)"default"!==r&&function(n){e.d(i,n,(function(){return a[n]}))}(r);i["default"]=t.a},9401:function(n,i,e){},e5b2:function(n,i,e){"use strict";e.d(i,"b",(function(){return t})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return a}));var a={wPicker:function(){return Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(e.bind(null,"8cfa"))}},t=function(){var n=this,i=n.$createElement;n._self._c},r=[]},fbb0:function(n,i,e){"use strict";var a=e("9401"),t=e.n(a);t.a}},[["18dc","common/runtime","common/vendor"]]]);