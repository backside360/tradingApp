(this["webpackJsonpstocks-app"]=this["webpackJsonpstocks-app"]||[]).push([[0],{169:function(e,t,n){e.exports=n(315)},174:function(e,t,n){},176:function(e,t,n){},228:function(e,t,n){},229:function(e,t,n){},283:function(e,t,n){},297:function(e,t,n){},315:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),i=(n(174),n(21)),u=n.n(i),l=n(47),s=n(165),m=n(320),p=n(67),h=n(31),f=n(64),d=(n(176),n(80),n(318)),y=n(10),b=n(48),g=n(321),v=n(15),E=n(316),w=n(100),S=(n(228),n(229),n(317)),O=n(11),k=n.n(O),j=r.a.createContext(null),x=function(){return Object(a.useContext)(j)},D=(S.a.MonthPicker,S.a.RangePicker,Object(f.a)((function(e){var t=e.handleToggle,n=x().store.QuoteStore,o=Object(a.useState)(),c=Object(l.a)(o,2),i=c[0],u=c[1];return r.a.createElement("div",{className:"slide_right"},0!==Object.keys(Object(v.n)(n.quoteStore)).length?r.a.createElement(d.a,{title:"\u0410 \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0442\u0430\u043c \u0440\u0430\u043d\u044c\u0448\u0435 \u0441\u0442\u043e\u0438\u043b\u043e?",extra:r.a.createElement(S.a,{format:"YYYY-MM-DD",onChange:function(e,t){return u(t)},disabledDate:function(e){var t=Object.keys(n.monthlyPriceStore);return(!e||!t.some((function(t){return k()(t).format("YYYY-MM-DD")===k()(e._d).format("YYYY-MM-DD")})))&&e},placeholder:"\u0412\u044b\u0431\u0438\u0440\u0430\u0439 \u0434\u0430\u0442\u0443"}),style:{width:"500px",height:"100%",borderRadius:"10px"},hoverable:!0},"/** \u0447\u0442\u043e \u0437\u0434\u0435\u0441\u044c \u0442\u0432\u043e\u0440\u0438\u0442\u044c\u0441\u044f, \u043f\u043e\u043c\u043e\u0433\u0438\u0442\u0435 */",i?r.a.createElement("p",null,n.monthlyPriceStore[i]["2. high"]):null,r.a.createElement(b.a,{onClick:t},"Go")):null)}))),P=(n(283),function(e){var t=e.handleToggle;return r.a.createElement("div",{className:"slide_in"},r.a.createElement(d.a,{hoverable:!0},r.a.createElement(b.a,{type:"primary",onClick:t},"Back")))}),q=(s.a.TextArea,m.a.Option,d.a.Meta),C=Object(f.a)((function(e){var t=Object(a.useState)(!1),n=Object(l.a)(t,2),o=n[0],c=n[1],i=Object(a.useState)(!1),u=Object(l.a)(i,2),s=u[0],m=u[1],p=x().store.QuoteStore,h=e.loading,f=function(){m(!s)};return r.a.createElement(r.a.Fragment,null,0===Object.keys(Object(v.n)(p.quoteStore)).length?null:r.a.createElement(w.Animated,{animationIn:"bounceInUp",animationOut:"zoomOutDown",animationInDuration:1e3,animationOutDuration:1e3,isVisible:!0},r.a.createElement(d.a,{title:p.quoteStore.companyName,hoverable:!0,style:{width:"300px",height:"100%",borderRadius:"10px"}}," ",r.a.createElement(q,{description:p.quoteStore.primaryExchange}),h?r.a.createElement(E.a,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Latest Price: ",p.quoteStore.latestPrice,0===Object.keys(Object(v.n)(p.quoteStore)).length?null:p.getPreviousDay?r.a.createElement(w.Animated,{animationIn:"bounce",animationOut:"zoomOutDown",animationInDuration:3e3,animationOutDuration:3e3,isVisible:!0},r.a.createElement(y.a,{type:"down-circle",theme:"twoTone",twoToneColor:"red",style:{fontSize:"20px",paddingLeft:"150px"}})):r.a.createElement(w.Animated,{animationIn:"bounce",animationOut:"zoomOutDown",animationInDuration:3e3,animationOutDuration:3e3,isVisible:!0},r.a.createElement(y.a,{type:"up-circle",theme:"twoTone",twoToneColor:"green",style:{fontSize:"20px",paddingLeft:"150px"}})))),r.a.createElement(b.a,{type:"dashed",onClick:function(){return c(!0)}},"Calendar prices"),r.a.createElement(g.a,{title:"Check this out",visible:o,onOk:function(){return c(!1)},onCancel:function(){return c(!1)},width:"600px"},s?r.a.createElement(P,{handleToggle:f}):r.a.createElement(D,{handleToggle:f})))))})),T=s.a.TextArea,M=m.a.Option,Q=Object(f.a)((function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(),i=Object(l.a)(c,2),s=i[0],f=i[1],d=x(),y=d.api,b=d.store.QuoteStore;return r.a.createElement("div",null,r.a.createElement(p.a,{type:"flex",justify:"center"},r.a.createElement(h.a,{span:12},r.a.createElement(m.a,{dataSource:s,dropdownClassName:"certain-category-search-dropdown",style:{width:"100%"},onSearch:function(e){return function(){var e,t,n,a,o=arguments;return u.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return e=o.length>0&&void 0!==o[0]?o[0]:"",c.next=3,u.a.awrap(y.search.getSearch(e));case 3:t=c.sent,void 0!==(n=t.bestMatches)&&(a=n.map((function(e){return r.a.createElement(M,{key:e["1. symbol"],value:e["1. symbol"]},r.a.createElement("div",{className:"global-search-item"},r.a.createElement("span",{className:"global-search-item-desc"},e["1. symbol"]),r.a.createElement("span",{className:"global-search-item-count"},e["2. name"])))})),f(a));case 6:case"end":return c.stop()}}))}(e)},allowClear:!0,optionLabelProp:"value",onSelect:function(e){return t=e,u.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),y.quotes.getQuote(t).then((function(e){return b.setQuoteStore(e)})),e.next=4,u.a.awrap(b.setPreviousDayPrice(t));case 4:return e.next=6,u.a.awrap(b.setMonthlyPrice(t));case 6:o(!1);case 7:case"end":return e.stop()}}));var t},onChange:function(e){b.resetQuoteStore()},size:"large"},r.a.createElement(T,{placeholder:"input here",className:"customs",style:{height:80,backgroundColor:"#fff"}})))),r.a.createElement(p.a,{type:"flex",justify:"center"},r.a.createElement(h.a,{className:"card"},r.a.createElement(C,{loading:n}))))})),Y=n(319),I=Y.a.Title;function N(){return r.a.createElement("div",null,r.a.createElement(I,{type:"danger"},"whatever"))}var z=Y.a.Title;function A(){return r.a.createElement("div",null,r.a.createElement(p.a,{type:"flex",justify:"end"},r.a.createElement(z,{level:2,type:"warning"},"Whatever\u2665")))}n(297);var _=n(322),J=_.a.Header,L=_.a.Footer,V=(_.a.Sider,_.a.Content),R=function(){return r.a.createElement("div",{className:"main"},r.a.createElement(_.a,null,r.a.createElement(J,null,r.a.createElement(N,null)),r.a.createElement(V,{className:"content"},r.a.createElement(Q,null)),r.a.createElement(L,{className:"footer"},r.a.createElement(A,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B,F,W,Z,H,U=n(51),G=n.n(U),$="sk_23710eca08ee41f89b91b025174949ad",K="https://cloud.iexapis.com/stable",X={quotes:{getQuote:function(e){return G.a.get("".concat(K,"/stock/").concat(e,"/quote?token=").concat($)).then((function(e){return e.data}))},getQuoteA:function(e){return G.a.get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&".concat(e,"&interval=5min&outputsize=full&apikey=JLPQJV6Z7V17CO06")).then((function(e){return e.data}))},getMonthlyQuote:function(e){return G.a.get("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=".concat(e,"&outputsize=compact&apikey=").concat("JLPQJV6Z7V17CO06")).then((function(e){return e.data}))},getPreviousDay:function(e){return G.a.get("".concat(K,"/stock/").concat(e,"/previous?token=").concat($)).then((function(e){return e.data}))},getPrice:function(e){return G.a.get("".concat(K,"/stock/").concat(e,"/price?token=").concat($)).then((function(e){return e.data}))}},crypto:{getCryptoPrice:function(e){return G.a.get("https://cloud.iexapis.com/stable/crypto/".concat(e,"/price?token=").concat($)).then((function(e){return e.data}))}},search:{getSearch:function(e){return G.a.get("https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=".concat(e,"&apikey=").concat("JLPQJV6Z7V17CO06")).then((function(e){return e.data}))}}},ee=n(79),te=n(163),ne=n(164),ae=n(66),re=(n(314),function(e){return u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(X.quotes.getMonthlyQuote(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))}),oe=function(e){return u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(X.quotes.getPreviousDay(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))},ce=(B=function(){function e(){var t=this;Object(te.a)(this,e),Object(ee.a)(this,"quoteSearch",F,this),Object(ee.a)(this,"quoteStore",W,this),Object(ee.a)(this,"previousDayStore",Z,this),Object(ee.a)(this,"monthlyPriceStore",H,this),this.setQuoteStore=function(e){return u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.quoteStore=e);case 1:case"end":return n.stop()}}))},this.resetQuoteStore=function(){t.quoteStore={}},this.setPreviousDayPrice=function(e){return u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.a.awrap(oe(e));case 2:t.previousDayStore=n.sent;case 3:case"end":return n.stop()}}))},this.setMonthlyPrice=function(e){var n;return u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.a.awrap(re(e));case 2:n=a.sent,t.monthlyPriceStore=n["Time Series (Daily)"];case 4:case"end":return a.stop()}}))}}return Object(ne.a)(e,[{key:"getPreviousDay",get:function(){return this.quoteStore.latestPrice?this.previousDayStore.open>this.quoteStore.latestPrice:null}}]),e}(),F=Object(ae.a)(B.prototype,"quoteSearch",[v.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),W=Object(ae.a)(B.prototype,"quoteStore",[v.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),Z=Object(ae.a)(B.prototype,"previousDayStore",[v.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),H=Object(ae.a)(B.prototype,"monthlyPriceStore",[v.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),Object(ae.a)(B.prototype,"getPreviousDay",[v.d],Object.getOwnPropertyDescriptor(B.prototype,"getPreviousDay"),B.prototype),B),ie={api:X,setTimeout:function e(t,n){e(t,n)},store:{QuoteStore:new ce}},ue=function(e){var t=e.component;return r.a.createElement(j.Provider,{value:ie},r.a.createElement(t,null))};c.a.render(r.a.createElement(ue,{component:R}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[169,1,2]]]);
//# sourceMappingURL=main.a784301a.chunk.js.map