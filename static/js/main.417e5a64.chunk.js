(this["webpackJsonpmoney-convertor"]=this["webpackJsonpmoney-convertor"]||[]).push([[0],{115:function(A,e,t){},116:function(A,e,t){"use strict";t.r(e);var c=t(2),n=t(1),r=t.n(n),s=t(54),a=t.n(s),C=(t(67),t(8)),o=t(32),u=t.n(o),Q=t(55),i=t(56),j=t.n(i),l=function(){return j.a.create({baseURL:"https://api.coingecko.com/api/v3/"})},b=t(57),d=t.n(b),h=function(){var A=Object(Q.a)(u.a.mark((function A(e){var t;return u.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,l().get("coins/".concat(e,"/market_chart?&vs_currency=usd&days=14&interval=daily")).then((function(A){return A.data})).catch((function(A){return console.log(A,"error with "),null}));case 2:return t=A.sent,A.abrupt("return",t.prices.map((function(A){var e=Object(C.a)(A,2),t=e[0],c=e[1];return{x:+d()(t).format("DD "),y:+c.toFixed(2)}})));case 4:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}(),v=(t(86),t(87),t.p+"static/media/logo.966a73d7.svg"),O=t(14);var m=function(){return Object(c.jsx)("header",{className:"header",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"header-wrapper",children:[Object(c.jsx)("img",{className:"header__logo",src:v,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f: \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0435\u0440 \u043a\u0440\u0438\u043f\u0442\u043e\u0432\u0430\u043b\u044e\u0442"}),Object(c.jsxs)("nav",{className:"header-nav",children:[Object(c.jsx)(O.b,{to:"/",className:"header-nav__link",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(c.jsx)(O.b,{to:"/portfolio",className:"header-nav__link",children:"\u041f\u043e\u0440\u0442\u0444\u0435\u043b\u044c"})]})]})})})},f=t(11),x=(t(92),{btc:"bitcoin",eth:"ethereum",usd:"uniswap-state-dollar"}),p={btc:"Bitcoin",eth:"Ethereum",usd:"Us Dollar"},g=t(4);function N(A){return A.toFixed(2)}var y=function(A){var e=A.courses,t=Object(n.useState)({bitcoin:[],ethereum:[]}),r=Object(C.a)(t,2),s=r[0],a=r[1],o=Object(n.useState)({from:0,to:0}),u=Object(C.a)(o,2),Q=u[0],i=u[1],j=Object(n.useState)("btc"),l=Object(C.a)(j,2),b=l[0],d=l[1],v=Object(n.useState)("usd"),O=Object(C.a)(v,2),m=O[0],y=O[1],S=function(A){"from"===A.target.name?(d(A.target.value),U(x[A.target.value]),i(Object(f.a)(Object(f.a)({},Q),{},{from:N(Q.to*e[A.target.value][m])}))):(y(A.target.value),i(Object(f.a)(Object(f.a)({},Q),{},{to:N(Q.from*e[b][A.target.value])})))},P=function(A){"from"===A.target.name?i({from:A.target.value,to:N(A.target.value*e[b][m])}):i({to:A.target.value,from:N(A.target.value*e[b][m])})},U=function(A){h(A).then((function(A){return a({item:A})}))};return Object(n.useEffect)((function(){h(x[b]).then((function(A){return a({item:A})}))}),[]),e?Object(c.jsx)("main",{className:"main",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{className:"title",children:"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0435\u0440 \u043a\u0440\u0438\u043f\u0442\u043e\u0432\u0430\u043b\u044e\u0442"}),Object(c.jsxs)("div",{className:"main-wrapper",children:[Object(c.jsxs)("div",{className:"converter",children:[Object(c.jsxs)("div",{className:"converter-from",children:[Object(c.jsxs)("div",{className:"converter-controls",children:[Object(c.jsxs)("label",{htmlFor:"from-btc",children:[Object(c.jsx)("input",{type:"radio",className:"converter__buttons",value:"btc",id:"from-btc",name:"from",defaultChecked:!0,onChange:S}),"BTC"]}),Object(c.jsxs)("label",{htmlFor:"from-eth",children:[Object(c.jsx)("input",{type:"radio",className:"converter__buttons",value:"eth",id:"from-eth",name:"from",onChange:S}),"ETH"]}),Object(c.jsxs)("label",{htmlFor:"from-usd",children:[Object(c.jsx)("input",{type:"radio",className:"converter__buttons",value:"usd",id:"from-usd",name:"from",onChange:S}),"USD"]})]}),Object(c.jsx)("input",{className:"converter__input",type:"number",value:Q.from,onInput:P,name:"from"})]}),Object(c.jsx)("img",{className:"converter__arrows",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAbrqAAG66gHB8Tn1AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAklQTFRF////AQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACDsWOEAAAAMJ0Uk5TAAECAwQFBgcICQoLDA0ODxAREhMUFhcYGRobHB0eHyAhIiMkJSYoKSorLS4vMTIzNDc4OTo7PD0+P0BBQkZHS0xOU1RVVllaW1xdXl9gYWJjZGVmZ2hpa21ub3BxdXh5f4CCg4eJi4yPkZKTlJeanJ2goqOlp6iqrK2ur7CxsrW4ubq7vb6/wMHDxMXHyMnKy8zNzs/Q0dLT1NbX2Nna29zd3t/g4eLj5OXm5+jp6uvt7u/w8fLz9PX29/j5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",alt:"\u0418\u043a\u043e\u043d\u043a\u0430: \u0441\u0442\u0440\u0435\u043b\u043a\u0438"}),Object(c.jsxs)("div",{className:"converter-to",children:[Object(c.jsxs)("div",{className:"converter-controls",children:[Object(c.jsxs)("label",{htmlFor:"to-btc",children:[Object(c.jsx)("input",{type:"radio",className:"converter__buttons",value:"btc",id:"to-btc",name:"to",onChange:S}),"BTC"]}),Object(c.jsxs)("label",{htmlFor:"to-eth",children:[Object(c.jsx)("input",{type:"radio",className:"converter__buttons",value:"eth",id:"to-eth",name:"to",onChange:S}),"ETH"]}),Object(c.jsxs)("label",{htmlFor:"to-usd",children:[Object(c.jsx)("input",{type:"radio",className:"converter__buttons",value:"usd",id:"to-usd",name:"to",defaultChecked:!0,onChange:S}),"USD"]})]}),Object(c.jsx)("input",{className:"converter__input",type:"number",name:"to",value:Q.to,onInput:P})]})]}),s&&Object(c.jsx)("div",{className:"graph",children:Object(c.jsxs)("div",{className:"graph__bitcoin",children:[Object(c.jsx)("span",{className:"graph__name",children:p[b]}),Object(c.jsxs)(g.f,{width:300,height:300,children:[Object(c.jsx)(g.d,{}),Object(c.jsx)(g.a,{}),Object(c.jsx)(g.e,{}),Object(c.jsx)(g.g,{}),Object(c.jsx)(g.b,{className:"linemark-series-example",style:{strokeWidth:"3px"},lineStyle:{stroke:"#a8e5ea"},markStyle:{stroke:"rgb(43 107 108)"},data:s.item})]})]})})]})]})}):"\u0414\u0430\u043d\u043d\u044b\u0435 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442"},S=t(22),P=t(3);t(115);var U=function(A){var e=A.courses,t=void 0!==e&&e,r=Object(n.useState)({btc:0,eth:0,usd:0}),s=Object(C.a)(r,2),a=s[0],o=s[1],u=function(A,e){o(Object(f.a)(Object(f.a)({},a),{},Object(S.a)({},A,a[A]+e)))};return t?Object(c.jsx)("main",{className:"main",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{className:"title",children:"\u041c\u043e\u0439 \u043f\u0440\u043e\u0444\u0438\u043b\u044c"}),Object(c.jsxs)("div",{className:"main-wrapper",children:[Object(c.jsx)("h4",{children:"Total in USD"}),Object(c.jsxs)("span",{className:"total",children:[function(){var A,e;if(!t)return Object(c.jsx)(P.a,{to:"/"});var n=a.btc,r=a.eth,s=a.usd;return Math.floor(n*(null===(A=t.btc)||void 0===A?void 0:A.usd))+Math.floor(r*(null===(e=t.eth)||void 0===e?void 0:e.usd))+s}(),"$"]}),Object(c.jsx)("h3",{children:p.btc}),Object(c.jsxs)("div",{className:"currency_group",children:[Object(c.jsx)("button",{disabled:0===a.btc,onClick:function(){return u("btc",-1)},children:"-"}),Object(c.jsx)("input",{type:"number",value:a.btc,readOnly:!0}),Object(c.jsx)("button",{onClick:function(){return u("btc",1)},children:"+"})]}),Object(c.jsx)("h3",{children:p.eth}),Object(c.jsxs)("div",{className:"currency_group",children:[Object(c.jsx)("button",{disabled:0===a.eth,onClick:function(){return u("eth",-1)},children:"-"}),Object(c.jsx)("input",{type:"number",value:a.eth,readOnly:!0}),Object(c.jsx)("button",{onClick:function(){return u("eth",1)},children:"+"})]}),Object(c.jsx)("h3",{children:p.usd}),Object(c.jsxs)("div",{className:"currency_group",children:[Object(c.jsx)("button",{disabled:0===a.usd,onClick:function(){return u("usd",-1)},children:"-"}),Object(c.jsx)("input",{type:"number",value:a.usd,readOnly:!0}),Object(c.jsx)("button",{onClick:function(){return u("usd",1)},children:"+"})]}),Object(c.jsxs)(g.f,{xType:"ordinal",width:600,height:300,xDistance:100,children:[Object(c.jsx)(g.d,{}),Object(c.jsx)(g.a,{}),Object(c.jsx)(g.e,{}),Object(c.jsx)(g.g,{}),Object(c.jsx)(g.c,{className:"vertical-bar-series-example",data:[{y:a.usd,x:"usd"}]}),Object(c.jsx)(g.c,{data:[{y:a.eth,x:"eth"}]}),Object(c.jsx)(g.c,{data:[{y:a.btc,x:"btc"}]})]})]})]})}):Object(c.jsx)(P.a,{to:"/"})};t(53);var F=function(){var A=Object(n.useState)(!1),e=Object(C.a)(A,2),t=e[0],r=e[1];return Object(n.useEffect)((function(){var A;(A="simple/price?ids=ethereum,bitcoin&vs_currencies=usd,eth,btc",l().get(A).then((function(A){var e=A.data,t={usd:{usd:1,btc:0,eth:0}};for(var c in e)"bitcoin"===c&&(t.btc=e[c],t.usd.btc=e[c].usd),"ethereum"===c&&(t.eth=e[c],t.usd.eth=e[c].usd);return t})).catch((function(A){return console.log(A),null}))).then((function(A){return r(A)}))}),[]),Object(c.jsx)(O.a,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(m,{}),Object(c.jsxs)(P.d,{children:[Object(c.jsx)(P.b,{path:"/",exact:!0,render:function(){return Object(c.jsx)(y,{courses:t})}}),Object(c.jsx)(P.b,{exact:!0,path:"/portfolio",render:function(){return Object(c.jsx)(U,{courses:t})}})]})]})})};a.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(F,{})}),document.getElementById("root"))},53:function(A,e){},67:function(A,e,t){},86:function(A,e,t){},87:function(A,e,t){},92:function(A,e,t){}},[[116,1,2]]]);
//# sourceMappingURL=main.417e5a64.chunk.js.map