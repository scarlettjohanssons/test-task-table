(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var c=n(1),i=n(4),a=n.n(i),s=(n(9),n(2));n(10);n(11);var r=n(0),l=function(t){for(var e=t.newsOnPage,n=t.allNews,c=t.paginate,i=[],a=1;a<=Math.ceil(n/e);a++)i.push(a);return Object(r.jsx)("ul",{className:"list",children:i.map((function(t){return Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"list__link",onClick:function(){return c(t)},href:"#",children:t})},t)}))})},o=function(){var t=Object(c.useState)([]),e=Object(s.a)(t,2),n=e[0],i=e[1],a=Object(c.useState)(1),o=Object(s.a)(a,2),j=o[0],d=o[1],u=Object(c.useState)(10),h=Object(s.a)(u,1)[0],m=Object(c.useState)(""),b=Object(s.a)(m,2),O=b[0],f=b[1],p=j*h,x=p-h,N=n.slice(x,p);Object(c.useEffect)((function(){fetch("https://api.hnpwa.com/v0/news/1.json").then((function(t){return t.json()})).then((function(t){return i(t)}))}),[]);N.sort((function(t,e){switch(O){case"time":return t.time-e.time;case"title":return t.title.localeCompare(e.title);case"domain":return t.domain&&e.domain?t.domain.localeCompare(e.domain):t;default:return 0}}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("button",{className:"sort-by-date-mobile",onClick:function(){f("time")},children:"Sort by date"}),Object(r.jsxs)("table",{className:"table",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{className:"th th-time",onClick:function(){f("time")},children:"TIME ADDED"}),Object(r.jsx)("th",{className:"th th-title",onClick:function(){f("title")},children:"TITLE"}),Object(r.jsx)("th",{className:"th th-domain",onClick:function(){f("domain")},children:"DOMAIN"})]})}),N.map((function(t){return Object(r.jsx)("tbody",{children:Object(r.jsxs)("tr",{className:"entry",onClick:function(){return e=t.url,void window.open(e);var e},children:[Object(r.jsx)("td",{className:"td td-time",children:t.time}),Object(r.jsx)("td",{className:"td td-title",children:Object(r.jsx)("div",{className:"title",children:t.title})}),Object(r.jsx)("td",{className:"td td-domain",children:t.domain})]})},t.id)}))]}),Object(r.jsx)(l,{newsOnPage:h,allNews:n.length,paginate:function(t){return d(t)}})]})};var j=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(o,{})})};a.a.render(Object(r.jsx)(j,{}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.aa33305e.chunk.js.map