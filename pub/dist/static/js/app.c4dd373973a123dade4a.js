webpackJsonp([1],{215:function(e,t,a){"use strict";var s=a(4),n=a(423),r=a(422),i=a(421),o=a.n(i),c=a(416),l=a.n(c),u=a(414),p=a.n(u),d=a(415),m=a.n(d);s.default.use(n.a),s.default.use(r.a),s.default.use(o.a),t.a=new n.a({routes:[{path:"/",name:"Home",component:l.a},{path:"/create",name:"Create",component:m.a},{path:"/batch/:id",name:"Batch",component:p.a}]})},216:function(e,t,a){a(271);var s=a(31)(a(219),a(419),null,null);e.exports=s.exports},217:function(e,t,a){"use strict";var s=a(33),n=a.n(s),r=a(409);a.n(r);t.a=r.Line.extend({props:["data","options"],watch:{data:{handler:function(e,t){var a=this._chart,s=e.datasets.map(function(e){return e.label}),r=t.datasets.map(function(e){return e.label});n()(s)===n()(r)?(e.datasets.forEach(function(e,t){a.data.datasets[t].data=e.data}),a.data.labels=e.labels,a.update()):this.renderChart(this.data,this.options)},deep:!0}},mounted:function(){this.renderChart(this.data,this.options)}})},218:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(4),n=a(216),r=a.n(n),i=a(215);s.default.config.productionTip=!1,new s.default({el:"#app",router:i.a,template:"<App/>",components:{App:r.a}})},219:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},220:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(217);t.default={name:"batch",components:{LineExample:s.a},data:function(){return{batch:[],graphOpts:{responsive:!0,maintainAspectRatio:!1},specgData:{},tempData:{},newDate:"",newTemp:"",newSpecG:"",key:""}},methods:{addData:function(){this.$http.put("http://toaster.me/api/batch/"+this.$route.params.id,{date:this.newDate,specg:parseFloat(this.newSpecG),temp:parseFloat(this.newTemp),key:this.key}).then(function(e){this.getBatches()})},getBatches:function(){this.$http.get("http://toaster.me/api/batch/"+this.$route.params.id).then(function(e){this.batch=e.body,this.specgData={labels:e.body.dates,datasets:[{label:"Specific Gravity",backgroundColor:"#7f1a1a",fill:!1,data:e.body.specgrav}]},this.tempData={labels:e.body.dates,datasets:[{label:"Temperature",backgroundColor:"#fffff",fill:!1,data:e.body.temps}]}})}},created:function(){this.getBatches()}}},221:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"create",data:function(){return{newName:""}},methods:{createBatch:function(){this.$http.post("http://toaster.me/api/batch",{name:this.newName}).then(function(e){this.$router.push("/")})}}}},222:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"home",data:function(){return{batches:[]}},methods:{getBatches:function(){this.$http.get("http://toaster.me/api/batch").then(function(e){this.batches=e.body})}},created:function(){this.getBatches()}}},271:function(e,t){},272:function(e,t){},400:function(e,t,a){function s(e){return a(n(e))}function n(e){var t=r[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var r={"./af":99,"./af.js":99,"./ar":106,"./ar-dz":100,"./ar-dz.js":100,"./ar-kw":101,"./ar-kw.js":101,"./ar-ly":102,"./ar-ly.js":102,"./ar-ma":103,"./ar-ma.js":103,"./ar-sa":104,"./ar-sa.js":104,"./ar-tn":105,"./ar-tn.js":105,"./ar.js":106,"./az":107,"./az.js":107,"./be":108,"./be.js":108,"./bg":109,"./bg.js":109,"./bn":110,"./bn.js":110,"./bo":111,"./bo.js":111,"./br":112,"./br.js":112,"./bs":113,"./bs.js":113,"./ca":114,"./ca.js":114,"./cs":115,"./cs.js":115,"./cv":116,"./cv.js":116,"./cy":117,"./cy.js":117,"./da":118,"./da.js":118,"./de":121,"./de-at":119,"./de-at.js":119,"./de-ch":120,"./de-ch.js":120,"./de.js":121,"./dv":122,"./dv.js":122,"./el":123,"./el.js":123,"./en-au":124,"./en-au.js":124,"./en-ca":125,"./en-ca.js":125,"./en-gb":126,"./en-gb.js":126,"./en-ie":127,"./en-ie.js":127,"./en-nz":128,"./en-nz.js":128,"./eo":129,"./eo.js":129,"./es":131,"./es-do":130,"./es-do.js":130,"./es.js":131,"./et":132,"./et.js":132,"./eu":133,"./eu.js":133,"./fa":134,"./fa.js":134,"./fi":135,"./fi.js":135,"./fo":136,"./fo.js":136,"./fr":139,"./fr-ca":137,"./fr-ca.js":137,"./fr-ch":138,"./fr-ch.js":138,"./fr.js":139,"./fy":140,"./fy.js":140,"./gd":141,"./gd.js":141,"./gl":142,"./gl.js":142,"./gom-latn":143,"./gom-latn.js":143,"./he":144,"./he.js":144,"./hi":145,"./hi.js":145,"./hr":146,"./hr.js":146,"./hu":147,"./hu.js":147,"./hy-am":148,"./hy-am.js":148,"./id":149,"./id.js":149,"./is":150,"./is.js":150,"./it":151,"./it.js":151,"./ja":152,"./ja.js":152,"./jv":153,"./jv.js":153,"./ka":154,"./ka.js":154,"./kk":155,"./kk.js":155,"./km":156,"./km.js":156,"./kn":157,"./kn.js":157,"./ko":158,"./ko.js":158,"./ky":159,"./ky.js":159,"./lb":160,"./lb.js":160,"./lo":161,"./lo.js":161,"./lt":162,"./lt.js":162,"./lv":163,"./lv.js":163,"./me":164,"./me.js":164,"./mi":165,"./mi.js":165,"./mk":166,"./mk.js":166,"./ml":167,"./ml.js":167,"./mr":168,"./mr.js":168,"./ms":170,"./ms-my":169,"./ms-my.js":169,"./ms.js":170,"./my":171,"./my.js":171,"./nb":172,"./nb.js":172,"./ne":173,"./ne.js":173,"./nl":175,"./nl-be":174,"./nl-be.js":174,"./nl.js":175,"./nn":176,"./nn.js":176,"./pa-in":177,"./pa-in.js":177,"./pl":178,"./pl.js":178,"./pt":180,"./pt-br":179,"./pt-br.js":179,"./pt.js":180,"./ro":181,"./ro.js":181,"./ru":182,"./ru.js":182,"./sd":183,"./sd.js":183,"./se":184,"./se.js":184,"./si":185,"./si.js":185,"./sk":186,"./sk.js":186,"./sl":187,"./sl.js":187,"./sq":188,"./sq.js":188,"./sr":190,"./sr-cyrl":189,"./sr-cyrl.js":189,"./sr.js":190,"./ss":191,"./ss.js":191,"./sv":192,"./sv.js":192,"./sw":193,"./sw.js":193,"./ta":194,"./ta.js":194,"./te":195,"./te.js":195,"./tet":196,"./tet.js":196,"./th":197,"./th.js":197,"./tl-ph":198,"./tl-ph.js":198,"./tlh":199,"./tlh.js":199,"./tr":200,"./tr.js":200,"./tzl":201,"./tzl.js":201,"./tzm":203,"./tzm-latn":202,"./tzm-latn.js":202,"./tzm.js":203,"./uk":204,"./uk.js":204,"./ur":205,"./ur.js":205,"./uz":207,"./uz-latn":206,"./uz-latn.js":206,"./uz.js":207,"./vi":208,"./vi.js":208,"./x-pseudo":209,"./x-pseudo.js":209,"./yo":210,"./yo.js":210,"./zh-cn":211,"./zh-cn.js":211,"./zh-hk":212,"./zh-hk.js":212,"./zh-tw":213,"./zh-tw.js":213};s.keys=function(){return Object.keys(r)},s.resolve=n,e.exports=s,s.id=400},413:function(e,t){e.exports={_args:[[{raw:"vue-chartjs",scope:null,escapedName:"vue-chartjs",name:"vue-chartjs",rawSpec:"",spec:"latest",type:"tag"},"/home/dom/tmp/wine_tracker"]],_from:"vue-chartjs@latest",_id:"vue-chartjs@2.6.2",_inCache:!0,_location:"/vue-chartjs",_nodeVersion:"7.9.0",_npmOperationalInternal:{host:"packages-18-east.internal.npmjs.com",tmp:"tmp/vue-chartjs-2.6.2.tgz_1493472545564_0.4451814501080662"},_npmUser:{name:"apertureless",email:"juszczak.j@googlemail.com"},_npmVersion:"4.5.0",_phantomChildren:{},_requested:{raw:"vue-chartjs",scope:null,escapedName:"vue-chartjs",name:"vue-chartjs",rawSpec:"",spec:"latest",type:"tag"},_requiredBy:["#USER","/"],_resolved:"https://registry.npmjs.org/vue-chartjs/-/vue-chartjs-2.6.2.tgz",_shasum:"f0fe61892494325db8e2462cb0397b948b4434f4",_shrinkwrap:null,_spec:"vue-chartjs",_where:"/home/dom/tmp/wine_tracker",author:{name:"Jakub Juszczak",email:"jakub@posteo.de"},babel:{presets:["es2015"]},browserify:{transform:["babelify"]},bugs:{url:"https://github.com/apertureless/vue-chartjs/issues"},contributors:[{name:"Thorsten Lünborg",url:"https://github.com/LinusBorg"},{name:"Juan Carlos Alonso",url:"https://github.com/jcalonso"}],dependencies:{lodash:"^4.17.4"},description:"vue.js wrapper for chart.js",devDependencies:{"babel-cli":"^6.24.1","babel-core":"^6.24.1","babel-loader":"^7.0.0","babel-plugin-transform-runtime":"^6.23.0","babel-preset-es2015":"^6.24.1","babel-preset-stage-2":"^6.24.1","babel-runtime":"^6.23.0",chai:"^3.5.0","chart.js":"^2.5.0",chromedriver:"^2.28.0","connect-history-api-fallback":"^1.1.0","cross-env":"^3.2.4","cross-spawn":"^5.1.0","css-loader":"^0.28.0",eslint:"^3.19.0","eslint-config-standard":"^10.2.1","eslint-friendly-formatter":"^2.0.7","eslint-loader":"^1.7.1","eslint-plugin-html":"^2.0.1","eslint-plugin-import":"^2.2.0","eslint-plugin-node":"^4.2.2","eslint-plugin-promise":"^3.5.0","eslint-plugin-standard":"^3.0.1","eventsource-polyfill":"^0.9.6",express:"^4.15.2","extract-text-webpack-plugin":"^1.0.1","file-loader":"^0.10.1","function-bind":"^1.0.2","html-webpack-plugin":"^2.28.0","http-proxy-middleware":"^0.17.4","inject-loader":"^3.0.0","isparta-loader":"^2.0.0","jasmine-core":"^2.5.2","json-loader":"^0.5.4",karma:"^1.5.0","karma-coverage":"^1.1.1","karma-jasmine":"^1.0.2","karma-mocha":"^1.2.0","karma-phantomjs-launcher":"^1.0.4","karma-sinon-chai":"^1.2.0","karma-sourcemap-loader":"^0.3.7","karma-spec-reporter":"0.0.30","karma-webpack":"1.8.1",lolex:"^1.6.0",mocha:"^3.1.0",nightwatch:"^0.9.14",ora:"^1.2.0","phantomjs-prebuilt":"^2.1.13","selenium-server":"^3.3.1",shelljs:"^0.7.7",sinon:"^2.1.0","sinon-chai":"^2.9.0","url-loader":"^0.5.8",vue:"^2.3.0","vue-hot-reload-api":"^2.1.0","vue-html-loader":"^1.2.4","vue-loader":"^12.0.2","vue-style-loader":"^3.0.1","vue-template-compiler":"^2.3.0",webpack:"^1.13.2","webpack-dev-middleware":"^1.10.1","webpack-hot-middleware":"^2.17.1","webpack-merge":"1.1.1"},directories:{},dist:{shasum:"f0fe61892494325db8e2462cb0397b948b4434f4",tarball:"https://registry.npmjs.org/vue-chartjs/-/vue-chartjs-2.6.2.tgz"},engines:{node:">=6.9.0"},files:["src","dist","es"],gitHead:"25d37666877d4e472c00b5a056c135efe43ee693",greenkeeper:{ignore:["extract-text-webpack-plugin","karma-webpack","webpack","webpack-merge"]},homepage:"http://vue-chartjs.org","jsnext:main":"es/index.js",keywords:["ChartJs","Vue","Visualisation","Wrapper","Charts"],license:"MIT",main:"dist/vue-chartjs.js",maintainers:[{name:"apertureless",email:"netghost03@gmail.com"}],module:"es/index.js",name:"vue-chartjs",optionalDependencies:{},peerDependencies:{"chart.js":"^2.5.0",vue:"^2.3.0"},readme:"ERROR: No README data found!",repository:{type:"git",url:"git+ssh://git@github.com/apertureless/vue-chartjs.git"},scripts:{build:"yarn run release && yarn run build:es","build:es":"cross-env BABEL_ENV=es babel src --out-dir es",dev:"node build/dev-server.js",e2e:"node test/e2e/runner.js",lint:"eslint --ext .js,.vue src test/unit/specs test/e2e/specs",prepublish:"yarn run lint && yarn run test && yarn run build",release:"webpack --progress --hide-modules --config  ./build/webpack.release.js && NODE_ENV=production webpack --progress --hide-modules --config  ./build/webpack.release.min.js && webpack --progress --hide-modules --config  ./build/webpack.release.full.js && NODE_ENV=production webpack --progress --hide-modules --config  ./build/webpack.release.full.min.js",test:"npm run unit",unit:"karma start test/unit/karma.conf.js --single-run"},unpkg:"dist/vue-chartjs.full.min.js",version:"2.6.2"}},414:function(e,t,a){a(272);var s=a(31)(a(220),a(420),null,null);e.exports=s.exports},415:function(e,t,a){var s=a(31)(a(221),a(418),null,null);e.exports=s.exports},416:function(e,t,a){var s=a(31)(a(222),a(417),null,null);e.exports=s.exports},417:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",[e._v("Welcome to Dom's Wine Tracker!")]),e._v(" "),a("ul",e._l(e.batches,function(t){return a("li",[a("router-link",{attrs:{to:{name:"Batch",params:{id:t._id}}}},[e._v(e._s(t.name))])],1)})),e._v(" "),a("router-link",{staticClass:"button",attrs:{to:{name:"Create"}}},[e._v("Click here to create a new batch tracker!")]),e._v(" "),a("v-btn-link",{nativeOn:{click:function(t){e.$dialog("Toast!")}}},[e._v("Toast!")])],1)},staticRenderFns:[]}},418:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newName,expression:"newName"}],attrs:{placeholder:"Name of your new batch"},domProps:{value:e.newName},on:{input:function(t){t.target.composing||(e.newName=t.target.value)}}}),e._v(" "),a("v-btn",{nativeOn:{click:function(t){e.createBatch(t)}}},[e._v("Create!")])],1)},staticRenderFns:[]}},419:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]}},420:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"graph_container"},[a("div",{staticClass:"Chart__list"},[a("div",{staticClass:"Chart"},[a("h2",[e._v(e._s(e.batch.name))]),e._v(" "),a("line-example",{attrs:{data:e.specgData,options:e.graphOpts}}),e._v(" "),a("div",{staticStyle:{"padding-top":"50px"}},[a("line-example",{attrs:{data:e.tempData,options:e.graphOpts}})],1)],1)])]),e._v(" "),a("div",{staticStyle:{width:"80%","padding-top":"25px",margin:"auto"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newDate,expression:"newDate"}],attrs:{placeholder:"Date"},domProps:{value:e.newDate},on:{input:function(t){t.target.composing||(e.newDate=t.target.value)}}})]),e._v(" "),a("div",{staticStyle:{width:"80%","padding-top":"25px",margin:"auto"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newTemp,expression:"newTemp"}],attrs:{placeholder:"Temperature"},domProps:{value:e.newTemp},on:{input:function(t){t.target.composing||(e.newTemp=t.target.value)}}})]),e._v(" "),a("div",{staticStyle:{width:"80%","padding-top":"25px",margin:"auto"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newSpecG,expression:"newSpecG"}],attrs:{placeholder:"Specific Gravity"},domProps:{value:e.newSpecG},on:{input:function(t){t.target.composing||(e.newSpecG=t.target.value)}}})]),e._v(" "),a("div",{staticStyle:{width:"80%","padding-top":"25px",margin:"auto"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.key,expression:"key"}],attrs:{placeholder:"Key"},domProps:{value:e.key},on:{input:function(t){t.target.composing||(e.key=t.target.value)}}})]),e._v(" "),a("v-btn",{nativeOn:{click:function(t){e.addData(t)}}},[e._v("Add!")])],1)},staticRenderFns:[]}},425:function(e,t){}},[218]);
//# sourceMappingURL=app.c4dd373973a123dade4a.js.map