(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[35],{530:function(e,a,t){"use strict";var r=t(20),s=t(55),n=t(1),c=t.n(n),l=t(5),o=t.n(l),u=t(525),m=t.n(u),i=t(526),f=o.a.oneOfType([o.a.number,o.a.string]),d={tag:i.q,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool,xs:f,sm:f,md:f,lg:f,xl:f},b={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e){var a=e.className,t=e.cssModule,n=e.noGutters,l=e.tag,o=e.form,u=e.widths,f=Object(s.a)(e,["className","cssModule","noGutters","tag","form","widths"]),d=[];u.forEach((function(a,t){var r=e[a];if(delete f[a],r){var s=!t;d.push(s?"row-cols-"+r:"row-cols-"+a+"-"+r)}}));var b=Object(i.m)(m()(a,n?"no-gutters":null,o?"form-row":"row",d),t);return c.a.createElement(l,Object(r.a)({},f,{className:b}))};g.propTypes=d,g.defaultProps=b,a.a=g},531:function(e,a,t){"use strict";var r=t(20),s=t(55),n=t(1),c=t.n(n),l=t(5),o=t.n(l),u=t(525),m=t.n(u),i=t(526),f=o.a.oneOfType([o.a.number,o.a.string]),d=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:f,offset:f})]),b={tag:i.q,xs:d,sm:d,md:d,lg:d,xl:d,className:o.a.string,cssModule:o.a.object,widths:o.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,n=e.widths,l=e.tag,o=Object(s.a)(e,["className","cssModule","widths","tag"]),u=[];n.forEach((function(a,r){var s=e[a];if(delete o[a],s||""===s){var n=!r;if(Object(i.k)(s)){var c,l=n?"-":"-"+a+"-",f=p(n,a,s.size);u.push(Object(i.m)(m()(((c={})[f]=s.size||""===s.size,c["order"+l+s.order]=s.order||0===s.order,c["offset"+l+s.offset]=s.offset||0===s.offset,c)),t))}else{var d=p(n,a,s);u.push(d)}}})),u.length||u.push("col");var f=Object(i.m)(m()(a,u),t);return c.a.createElement(l,Object(r.a)({},o,{className:f}))};v.propTypes=b,v.defaultProps=g,a.a=v},533:function(e,a,t){"use strict";var r=t(20),s=t(55),n=t(1),c=t.n(n),l=t(5),o=t.n(l),u=t(525),m=t.n(u),i=t(526),f={tag:i.q,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},d=function(e){var a=e.className,t=e.cssModule,n=e.color,l=e.body,o=e.inverse,u=e.outline,f=e.tag,d=e.innerRef,b=Object(s.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),g=Object(i.m)(m()(a,"card",!!o&&"text-white",!!l&&"card-body",!!n&&(u?"border":"bg")+"-"+n),t);return c.a.createElement(f,Object(r.a)({},b,{className:g,ref:d}))};d.propTypes=f,d.defaultProps={tag:"div"},a.a=d},534:function(e,a,t){"use strict";var r=t(20),s=t(55),n=t(1),c=t.n(n),l=t(5),o=t.n(l),u=t(525),m=t.n(u),i=t(526),f={tag:i.q,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},d=function(e){var a=e.className,t=e.cssModule,n=e.innerRef,l=e.tag,o=Object(s.a)(e,["className","cssModule","innerRef","tag"]),u=Object(i.m)(m()(a,"card-body"),t);return c.a.createElement(l,Object(r.a)({},o,{className:u,ref:n}))};d.propTypes=f,d.defaultProps={tag:"div"},a.a=d},535:function(e,a,t){"use strict";var r=t(20),s=t(55),n=t(1),c=t.n(n),l=t(5),o=t.n(l),u=t(525),m=t.n(u),i=t(526),f={tag:i.q,className:o.a.string,cssModule:o.a.object},d=function(e){var a=e.className,t=e.cssModule,n=e.tag,l=Object(s.a)(e,["className","cssModule","tag"]),o=Object(i.m)(m()(a,"card-header"),t);return c.a.createElement(n,Object(r.a)({},l,{className:o}))};d.propTypes=f,d.defaultProps={tag:"div"},a.a=d},779:function(e,a,t){"use strict";t.r(a);var r=t(173),s=t(174),n=t(176),c=t(175),l=t(1),o=t.n(l),u=t(530),m=t(531),i=t(533),f=t(535),d=t(534),b=t(766),g=t(765),p=function(e){Object(n.a)(t,e);var a=Object(c.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"animated fadeIn"},o.a.createElement(u.a,null,o.a.createElement(m.a,{xs:"12"},o.a.createElement(i.a,null,o.a.createElement(f.a,null,o.a.createElement("i",{className:"fa fa-align-justify"}),o.a.createElement("strong",null,"Breadcrumbs"),o.a.createElement("div",{className:"card-header-actions"},o.a.createElement("a",{href:"https://reactstrap.github.io/components/breadcrumbs/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},o.a.createElement("small",{className:"text-muted"},"docs")))),o.a.createElement(d.a,null,o.a.createElement(b.a,null,o.a.createElement(g.a,{active:!0},"Home")),o.a.createElement(b.a,null,o.a.createElement(g.a,null,o.a.createElement("a",{href:"#"},"Home")),o.a.createElement(g.a,{active:!0},"Library")),o.a.createElement(b.a,null,o.a.createElement(g.a,null,o.a.createElement("a",{href:"#"},"Home")),o.a.createElement(g.a,null,o.a.createElement("a",{href:"#"},"Library")),o.a.createElement(g.a,{active:!0},"Data")),o.a.createElement(b.a,{tag:"nav"},o.a.createElement(g.a,{tag:"a",href:"#"},"Home"),o.a.createElement(g.a,{tag:"a",href:"#"},"Library"),o.a.createElement(g.a,{tag:"a",href:"#"},"Data"),o.a.createElement(g.a,{active:!0,tag:"span"},"Bootstrap")))))))}}]),t}(l.Component);a.default=p}}]);
//# sourceMappingURL=35.2fe3e420.chunk.js.map