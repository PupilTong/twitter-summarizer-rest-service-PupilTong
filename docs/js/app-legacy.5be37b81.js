(function(e){function t(t){for(var r,s,u=t[0],a=t[1],c=t[2],f=0,p=[];f<u.length;f++)s=u[f],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var a=n[u];0!==i[a]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},i={app:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var d=a;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.isInputed?e._e():n("md-field",{class:e.messageClass},[n("label",[e._v("Hashtag")]),n("md-input",{attrs:{required:""},model:{value:e.args.keyword,callback:function(t){e.$set(e.args,"keyword",t)},expression:"args.keyword"}}),n("span",{staticClass:"md-error"},[e._v("Must input something")])],1),e.isInputed?e._e():n("md-button",{staticClass:"md-dense md-raised md-primary",on:{click:e.submit}},[e._v("Submit")]),n("div",[n("span",{staticStyle:{color:"white"}},[e._v(e._s(e.ret))])])],1)},o=[],s={name:"App",data:function(){return{args:{keyword:""},isInputed:!1,ret:"something"}},components:{},computed:{messageClass:function(){return{"md-invalid":""==this.keyword}}},methods:{submit:function(){var e=this;this.isInputed=!0;var t=new window.fetchApi.fetchApi,n=t.Post("",this.args);n.then((function(t){e.sending=!1,t.ok&&t.json().then((function(t){null!=t&&(e.ret=t)}))}),0)}}},u=s,a=(n("034f"),n("2877")),c=Object(a["a"])(u,i,o,!1,null,null,null),d=c.exports,f=n("43f9"),p=n.n(f);n("51de"),n("0759");r["default"].use(p.a),r["default"].config.productionTip=!1,window.fetchApi=n("ec12"),new r["default"]({render:function(e){return e(d)}}).$mount("#app")},"85ec":function(e,t,n){},ec12:function(e,t,n){"use strict";n.r(t),n.d(t,"fetchApi",(function(){return s}));n("d3b7");var r=n("d4ec"),i=n("bee2"),o=n("ade3"),s=function(){function e(){Object(r["a"])(this,e),Object(o["a"])(this,"apiAddress","http://hw5.onic.xyz/")}return Object(i["a"])(e,[{key:"fetchApi",value:function(e){this.apiAddress=e}},{key:"Get",value:function(e){return fetch(this.apiAddress+e,{method:"GET"})}},{key:"Post",value:function(e,t){return fetch(this.apiAddress+e,{method:"POST",body:JSON.stringify(t)})}},{key:"Put",value:function(e,t){return fetch(this.apiAddress+e,{method:"PUT",body:JSON.stringify(t),headers:new Headers({"Content-Type":"application/json"})})}},{key:"Delete",value:function(e,t){return fetch(this.apiAddress+e,{method:"DELETE",body:JSON.stringify(t),headers:new Headers({"Content-Type":"application/json"})})}}]),e}()}});
//# sourceMappingURL=app-legacy.5be37b81.js.map