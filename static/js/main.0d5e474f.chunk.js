(this["webpackJsonpcountry-searcher"]=this["webpackJsonpcountry-searcher"]||[]).push([[0],{17:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var a=c(0),r=(c(17),c(1)),s=c(7),n=c.n(s),l=c(4),i=(c(27),c(5)),u=(c(28),c(29),c(30),c(6)),o=c.n(u),h=function(e){var t=e.country,c=e.isActive;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("ul",{className:o()("search-result desktop",{isShown:c}),children:[Object(a.jsx)("li",{className:"search-result__header",children:"Region"}),Object(a.jsx)("li",{className:"search-result__header",children:"Population"}),Object(a.jsx)("li",{className:"search-result__header",children:"Area"}),Object(a.jsx)("li",{className:"search-result__header",children:"Time Zones"}),Object(a.jsx)("li",{className:"search-result__header",children:"Code"}),Object(a.jsx)("li",{className:"search-result__header",children:"Domain"}),Object(a.jsx)("li",{className:"search-result__text",children:t.region}),Object(a.jsx)("li",{className:"search-result__text",children:t.population}),Object(a.jsx)("li",{className:"search-result__text",children:t.area}),Object(a.jsx)("li",{className:"search-result__text",children:t.timezones.map((function(e){return Object(a.jsx)("p",{className:"search-result__text",children:e},e)}))}),Object(a.jsx)("li",{className:"search-result__text",children:t.alpha2Code}),Object(a.jsx)("li",{className:"search-result__text",children:t.topLevelDomain})]}),Object(a.jsxs)("ul",{className:o()("search-result mobile",{isShown:c}),children:[Object(a.jsx)("li",{className:"search-result__header mobile",children:"Region"}),Object(a.jsx)("li",{className:"search-result__text mobile",children:t.region}),Object(a.jsx)("li",{className:"search-result__header mobile",children:"Population"}),Object(a.jsx)("li",{className:"search-result__text mobile",children:t.population}),Object(a.jsx)("li",{className:"search-result__header mobile",children:"Area"}),Object(a.jsx)("li",{className:"search-result__text mobile",children:t.area}),Object(a.jsx)("li",{className:"search-result__header mobile",children:"Time Zones"}),Object(a.jsx)("li",{className:"search-result__text mobile",children:t.timezones.map((function(e){return Object(a.jsx)("p",{className:"search-result__text",children:e},e)}))}),Object(a.jsx)("li",{className:"search-result__header mobile",children:"Code"}),Object(a.jsx)("li",{className:"search-result__text mobile",children:t.alpha2Code}),Object(a.jsx)("li",{className:"search-result__header mobile",children:"Domain"}),Object(a.jsx)("li",{className:"search-result__text mobile",children:t.topLevelDomain})]})]})},j=function(e){var t=e.country,c=t.name,s=t.capital,n=t.flag,l=Object(r.useState)(!1),u=Object(i.a)(l,2),o=u[0],j=u[1],d=function(e){return o?e.target&&j(!1):e.target&&j(!0)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("li",{className:"item-container",onClick:d,onKeyPress:d,tabIndex:"0",children:[Object(a.jsx)("p",{className:"text",children:c}),Object(a.jsx)("p",{className:"text",children:s}),Object(a.jsx)("img",{src:n,alt:"Flag",className:"flag"})]}),Object(a.jsx)(h,{country:e.country,isActive:o})]})},d=c(2),b="CHANGE_INPUT_VALUE_ACTION",m=function(e){return{type:b,payload:e}},O="CHANGE_COUNTRIES_DATA_ACTION",x=function(e){return{type:O,payload:e}},p="TOGGLE_IS_FETCHING",_=function(e){return{type:p,payload:e}},g=function(e){switch(e){case"SearchForm":return function(e){return{changeInputValue:Object(d.a)(m,e),toggleIsFetching:Object(d.a)(_,e)}};case"CountrySearch":return function(e){return{changeData:Object(d.a)(x,e)}};default:return}},f=function(e){switch(e){case"SearchForm":return function(e){return{inputValue:e.input.inputValue,isFetching:e.fetching.isFetching}};case"CountrySearch":return function(e){return{data:e.data.countriesData}};default:return}},N=(c(31),c(32),function(e){return Object(a.jsxs)("select",{className:"select",defaultValue:"50",onChange:e.onChange,children:[Object(a.jsx)("option",{value:"10",children:"10"}),Object(a.jsx)("option",{value:"20",children:"20"}),Object(a.jsx)("option",{value:"50",children:"50"})]})}),v=function(e){return/[a-z]/i.test(e)},y=c(11),C=c.n(y),S=c(14),F="https://restcountries.eu/rest/v2/",w=function(){var e=Object(S.a)(C.a.mark((function e(t){var c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(F,"name/").concat(t));case 2:if((c=e.sent).ok){e.next=5;break}return e.abrupt("return",Promise.reject("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441. \u041e\u0448\u0438\u0431\u043a\u0430: ".concat(c.status)));case 5:return e.abrupt("return",c.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=c.p+"static/media/preloader.7ce68684.svg",A=function(e){var t=e.inputValue,c=e.changeInputValue,s=e.countriesData,n=e.toggleIsFetching,l=e.isFetching,u=Object(r.useState)(!1),h=Object(i.a)(u,2),j=h[0],d=h[1];return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("form",{className:"form",children:[Object(a.jsx)("span",{className:o()("message-rule",{warn:j}),children:"The text must be typed in Latin letters"}),Object(a.jsx)("input",{type:"text",placeholder:"Search...",onChange:function(e){if(!v(e.target.value||""===e.target.value))return e.target.value.trim()&&d(!0);d(!1),c(e.target.value),n(!0),""===e.target.value?s.changeData([])&&n(!1):w(e.target.value).then((function(e){s.changeData(e),n(!1)})).catch((function(e){console.log(e)}))},value:t,className:"input"}),Object(a.jsx)(N,{onChange:e.handleListClipping}),Object(a.jsx)("div",{className:"preloader",children:l&&Object(a.jsx)("img",{src:D,alt:"Preloader"})})]})})},I=Object(l.b)(f("SearchForm"),g("SearchForm"))(A),T=function(e){var t=e.data,c=Object(r.useState)("50"),s=Object(i.a)(c,2),n=s[0],l=s[1],u=t.map((function(e){return Object(a.jsx)(j,{country:e},e.numericCode)}));return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"search-items",children:[Object(a.jsx)("h1",{className:"title",children:"Country Search Service"}),Object(a.jsx)(I,{countriesData:e,handleListClipping:function(e){l(e.target.value),u.slice(0,"".concat(e.target.value))}}),Object(a.jsx)("ul",{className:"list",children:u.slice(0,"".concat(n))})]})})},V=Object(l.b)(f("CountrySearch"),g("CountrySearch"))(T),k=function(e){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(V,{})})},E=c(3),L={inputValue:"",countriesData:[],isFetching:!1},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(E.a)(Object(E.a)({},e),{},{inputValue:t.payload});default:return e}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(E.a)(Object(E.a)({},e),{},{countriesData:t.payload});default:return e}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(E.a)(Object(E.a)({},e),{},{isFetching:t.payload});default:return e}},H=Object(d.b)({input:P,data:G,fetching:z}),R=Object(d.c)(H);window.store=R;var U=R;n.a.render(Object(a.jsx)(l.a,{store:U,children:Object(a.jsx)(k,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.0d5e474f.chunk.js.map