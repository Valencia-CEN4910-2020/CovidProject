(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[40],{530:function(e,t,a){"use strict";var n=a(20),o=a(55),r=a(1),s=a.n(r),i=a(5),c=a.n(i),l=a(525),p=a.n(l),d=a(526),u=c.a.oneOfType([c.a.number,c.a.string]),f={tag:d.q,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:u,sm:u,md:u,lg:u,xl:u},m={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e){var t=e.className,a=e.cssModule,r=e.noGutters,i=e.tag,c=e.form,l=e.widths,u=Object(o.a)(e,["className","cssModule","noGutters","tag","form","widths"]),f=[];l.forEach((function(t,a){var n=e[t];if(delete u[t],n){var o=!a;f.push(o?"row-cols-"+n:"row-cols-"+t+"-"+n)}}));var m=Object(d.m)(p()(t,r?"no-gutters":null,c?"form-row":"row",f),a);return s.a.createElement(i,Object(n.a)({},u,{className:m}))};h.propTypes=f,h.defaultProps=m,t.a=h},531:function(e,t,a){"use strict";var n=a(20),o=a(55),r=a(1),s=a.n(r),i=a(5),c=a.n(i),l=a(525),p=a.n(l),d=a(526),u=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:u,offset:u})]),m={tag:d.q,xs:f,sm:f,md:f,lg:f,xl:f,className:c.a.string,cssModule:c.a.object,widths:c.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},g=function(e){var t=e.className,a=e.cssModule,r=e.widths,i=e.tag,c=Object(o.a)(e,["className","cssModule","widths","tag"]),l=[];r.forEach((function(t,n){var o=e[t];if(delete c[t],o||""===o){var r=!n;if(Object(d.k)(o)){var s,i=r?"-":"-"+t+"-",u=b(r,t,o.size);l.push(Object(d.m)(p()(((s={})[u]=o.size||""===o.size,s["order"+i+o.order]=o.order||0===o.order,s["offset"+i+o.offset]=o.offset||0===o.offset,s)),a))}else{var f=b(r,t,o);l.push(f)}}})),l.length||l.push("col");var u=Object(d.m)(p()(t,l),a);return s.a.createElement(i,Object(n.a)({},c,{className:u}))};g.propTypes=m,g.defaultProps=h,t.a=g},553:function(e,t,a){"use strict";var n=a(20),o=a(529),r=a(55),s=a(32),i=a(1),c=a.n(i),l=a(5),p=a.n(l),d=a(525),u=a.n(d),f=a(774),m=a(532),h=a(526),b={tag:h.q,children:p.a.node.isRequired,right:p.a.bool,flip:p.a.bool,modifiers:p.a.object,className:p.a.string,cssModule:p.a.object,persist:p.a.bool,positionFixed:p.a.bool},g={flip:{enabled:!1}},v={up:"top",left:"left",right:"right",down:"bottom"},O=function(e){function t(){return e.apply(this,arguments)||this}return Object(s.a)(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.className,s=t.cssModule,i=t.right,l=t.tag,p=t.flip,d=t.modifiers,m=t.persist,b=t.positionFixed,O=Object(r.a)(t,["className","cssModule","right","tag","flip","modifiers","persist","positionFixed"]),j=Object(h.m)(u()(a,"dropdown-menu",{"dropdown-menu-right":i,show:this.context.isOpen}),s),x=l;if(m||this.context.isOpen&&!this.context.inNavbar){var N=(v[this.context.direction]||"bottom")+"-"+(i?"end":"start"),y=p?d:Object(o.a)({},d,{},g),w=!!b;return c.a.createElement(f.a,{placement:N,modifiers:y,positionFixed:w},(function(t){var a=t.ref,o=t.style,r=t.placement;return c.a.createElement(x,Object(n.a)({tabIndex:"-1",role:"menu",ref:a,style:o},O,{"aria-hidden":!e.context.isOpen,className:j,"x-placement":r}))}))}return c.a.createElement(x,Object(n.a)({tabIndex:"-1",role:"menu"},O,{"aria-hidden":!this.context.isOpen,className:j,"x-placement":O.placement}))},t}(c.a.Component);O.propTypes=b,O.defaultProps={tag:"div",flip:!0},O.contextType=m.a,t.a=O},554:function(e,t,a){"use strict";var n=a(20),o=a(55),r=a(527),s=a(32),i=a(1),c=a.n(i),l=a(5),p=a.n(l),d=a(525),u=a.n(d),f=a(532),m=a(526),h={children:p.a.node,active:p.a.bool,disabled:p.a.bool,divider:p.a.bool,tag:m.q,header:p.a.bool,onClick:p.a.func,className:p.a.string,cssModule:p.a.object,toggle:p.a.bool},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(r.a)(a)),a.getTabIndex=a.getTabIndex.bind(Object(r.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled||this.props.header||this.props.divider?e.preventDefault():(this.props.onClick&&this.props.onClick(e),this.props.toggle&&this.context.toggle(e))},a.getTabIndex=function(){return this.props.disabled||this.props.header||this.props.divider?"-1":"0"},a.render=function(){var e=this.getTabIndex(),t=e>-1?"menuitem":void 0,a=Object(m.n)(this.props,["toggle"]),r=a.className,s=a.cssModule,i=a.divider,l=a.tag,p=a.header,d=a.active,f=Object(o.a)(a,["className","cssModule","divider","tag","header","active"]),h=Object(m.m)(u()(r,{disabled:f.disabled,"dropdown-item":!i&&!p,active:d,"dropdown-header":p,"dropdown-divider":i}),s);return"button"===l&&(p?l="h6":i?l="div":f.href&&(l="a")),c.a.createElement(l,Object(n.a)({type:"button"===l&&(f.onClick||this.props.toggle)?"button":void 0},f,{tabIndex:e,role:t,className:h,onClick:this.onClick}))},t}(c.a.Component);b.propTypes=h,b.defaultProps={tag:"button",toggle:!0},b.contextType=f.a,t.a=b},556:function(e,t,a){"use strict";var n=a(20),o=a(55),r=a(527),s=a(32),i=a(1),c=a.n(i),l=a(5),p=a.n(l),d=a(525),u=a.n(d),f=a(546),m=a.n(f),h=a(541),b=a.n(h),g=a(542),v=a.n(g),O=a(543),j=a.n(O),x=a(545),N=a.n(x),y=a(544),w=a(547),E=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return t=e.call.apply(e,[this].concat(n))||this,j()(b()(t),"refHandler",(function(e){Object(w.b)(t.props.innerRef,e),Object(w.a)(t.props.setReferenceNode,e)})),t}v()(t,e);var a=t.prototype;return a.componentWillUnmount=function(){Object(w.b)(this.props.innerRef,null)},a.render=function(){return N()(Boolean(this.props.setReferenceNode),"`Reference` should not be used outside of a `Manager` component."),Object(w.c)(this.props.children)({ref:this.refHandler})},t}(i.Component);function k(e){return i.createElement(y.b.Consumer,null,(function(t){return i.createElement(E,m()({setReferenceNode:t},e))}))}var C=a(532),T=a(526),M=a(537),R={caret:p.a.bool,color:p.a.string,children:p.a.node,className:p.a.string,cssModule:p.a.object,disabled:p.a.bool,onClick:p.a.func,"aria-haspopup":p.a.bool,split:p.a.bool,tag:T.q,nav:p.a.bool},I=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(r.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled||this.context.disabled?e.preventDefault():(this.props.nav&&!this.props.tag&&e.preventDefault(),this.props.onClick&&this.props.onClick(e),this.context.toggle(e))},a.render=function(){var e,t=this,a=this.props,r=a.className,s=a.color,i=a.cssModule,l=a.caret,p=a.split,d=a.nav,f=a.tag,m=a.innerRef,h=Object(o.a)(a,["className","color","cssModule","caret","split","nav","tag","innerRef"]),b=h["aria-label"]||"Toggle Dropdown",g=Object(T.m)(u()(r,{"dropdown-toggle":l||p,"dropdown-toggle-split":p,"nav-link":d}),i),v=h.children||c.a.createElement("span",{className:"sr-only"},b);return d&&!f?(e="a",h.href="#"):f?e=f:(e=M.a,h.color=s,h.cssModule=i),this.context.inNavbar?c.a.createElement(e,Object(n.a)({},h,{className:g,onClick:this.onClick,"aria-expanded":this.context.isOpen,children:v})):c.a.createElement(k,{innerRef:m},(function(a){var o,r=a.ref;return c.a.createElement(e,Object(n.a)({},h,((o={})["string"===typeof e?"ref":"innerRef"]=r,o),{className:g,onClick:t.onClick,"aria-expanded":t.context.isOpen,children:v}))}))},t}(c.a.Component);I.propTypes=R,I.defaultProps={"aria-haspopup":!0,color:"secondary"},I.contextType=C.a;t.a=I},773:function(e,t,a){"use strict";a.r(t);var n=a(173),o=a(174),r=a(177),s=a(176),i=a(175),c=a(1),l=a.n(c),p=a(593),d=a(530),u=a(531),f=a(559),m=a(556),h=a(553),b=a(554),g=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).toggle=o.toggle.bind(Object(r.a)(o)),o.state={dropdownOpen:new Array(6).fill(!1)},o}return Object(o.a)(a,[{key:"toggle",value:function(e){var t=this.state.dropdownOpen.map((function(t,a){return a===e&&!t}));this.setState({dropdownOpen:t})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"app flex-row align-items-center"},l.a.createElement(p.a,null,l.a.createElement(d.a,{className:"justify-content-center"},l.a.createElement(u.a,{md:"6"},l.a.createElement("div",{className:"clearfix"},l.a.createElement("h1",{className:"float-left display-3 mr-4"},"404"),l.a.createElement("h4",{className:"pt-3"},"Oops! You're lost."),l.a.createElement("p",{className:"text-muted float-left"},"The page you are looking for was not found, please select a county to return to the main page.")),l.a.createElement(f.a,{isOpen:this.state.dropdownOpen[0],toggle:function(){e.toggle(0)}},l.a.createElement(m.a,{caret:!0},"Counties"),l.a.createElement(h.a,null,l.a.createElement(b.a,null,"Orange"),l.a.createElement(b.a,null,"Osceola")))))))}}]),a}(c.Component);t.default=g}}]);
//# sourceMappingURL=40.89ea7036.chunk.js.map