webpackJsonp([1],{NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("7+uW"),s={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]};var u=e("VU/8")({name:"App"},s,!1,function(t){e("gsu9")},null,null).exports,i=e("/ocq"),r=e("w/TU"),o={name:"demo",components:{draggable:e.n(r).a},data:function(){return{data:[],subData:[{value:0,width:100}]}},created:function(){for(var t=0;t<20;t++)this.data.push({value:t+1,width:100})},methods:{cut:function(t,a){if(t){var e=t.width/=2;this.subData.forEach(function(a){a.value===t.value&&(a.width=e)});var n={value:"cut"+t.value,width:e};this.subData.splice(a+1,0,n)}}}},c={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"hello"},[e("draggable",{staticClass:"list",attrs:{animation:"300",group:"data"},model:{value:t.data,callback:function(a){t.data=a},expression:"data"}},[e("transition-group",t._l(t.data,function(a,n){return e("div",{key:a.value,staticClass:"item",style:{width:a.width+"px"}},[e("span",[t._v(t._s(a.value))]),t._v(" "),e("span",{staticClass:"hover_cut",on:{click:function(e){return t.cut(a,n)}}},[t._v("切分")])])}),0)],1),t._v(" "),e("draggable",{staticClass:"sub",attrs:{animation:"300",group:"data"},model:{value:t.subData,callback:function(a){t.subData=a},expression:"subData"}},[e("transition-group",t._l(t.subData,function(a,n){return e("div",{key:a.value,staticClass:"sub_item",style:{width:a.width+"px"}},[e("span",[t._v(t._s(a.value))]),t._v(" "),e("span",{staticClass:"hover_cut",on:{click:function(e){return t.cut(a,n)}}},[t._v("切分")])])}),0)],1)],1)},staticRenderFns:[]};var l=e("VU/8")(o,c,!1,function(t){e("rPQ4")},"data-v-28f42944",null).exports;n.a.use(i.a);var d=new i.a({routes:[{path:"/",name:"demo",component:l}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:d,components:{App:u},template:"<App/>"})},gsu9:function(t,a){},rPQ4:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.5f8f16b475abd71dfbdc.js.map