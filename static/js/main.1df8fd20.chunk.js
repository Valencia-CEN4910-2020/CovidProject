(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[5],{121:function(e,t,n){"use strict";t.a={items:[{name:"Orange",url:"/dashboard"},{title:!0,name:"Orange County Current Status",wrapper:{element:"",attributes:{}},class:""},{name:"State of Emergency",url:"/"},{name:"Current Restrictions",url:"/"},{title:!0,name:"Orange County Resources",wrapper:{element:"",attributes:{}}},{name:"Testing Locations",children:[{name:"Location 1"},{name:"Location 2"},{name:"Location 3"}]},{name:"Plan for Florida\u2019s Recovery.",url:"https://www.flgov.com/wp-content/uploads/covid19/Taskforce%20Report.pdf"},{divider:!0}]}},430:function(e,t,n){"use strict";var a=n(68),r=n.n(a),o=n(95),i=(n(1),n(93),n(169),function(){var e=Object(o.a)(r.a.mark((function e(){var t,n,a,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,fetch("https://covid19.mathdro.id/api/countries/USA/confirmed");case 3:return n=e.sent,e.next=6,n.json();case 6:for(a=e.sent,o=0;o<a.length;o++)"Florida"==a[o].provinceState&&t.push(a[o]);return e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());t.a=i},435:function(e,t,n){"use strict";var a=n(432),r=n(1),o=n.n(r),i=(n(93),n(169)),c=n(121),u=n(68),l=n.n(u),s=n(95),m=n(92),p=n(430),d=Object(r.memo)((function(e){var t=e.setTooltipContent;return o.a.createElement(o.a.Fragment,null,o.a.createElement(m.ComposableMap,{"data-tip":"",projectionConfig:{scale:3e3},width:800,height:400,style:{width:"50%",height:"25%",float:"right"}},o.a.createElement(m.ZoomableGroup,{center:[-83,27.5]},o.a.createElement(m.Geographies,{geography:"https://raw.githubusercontent.com/wrislin1/CovidProject/master/Prototype/florida2.json"},(function(e){return e.geographies.map((function(e){return o.a.createElement(m.Geography,{key:e.rsmKey,geography:e,onClick:function(){var t;t=e.properties.NAME,c.a.items[0].name=t},onMouseEnter:Object(s.a)(l.a.mark((function n(){var a,r,o,i,c;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(p.a)();case 2:for(o=n.sent,i=e.properties.NAME,c=0;c<o.length;c++)i==o[c].admin2&&(a=o[c].confirmed,r=o[c].deaths);t("".concat(i," County <br/> Confirmed cases: ").concat(a," <br/>\n                      Deaths: ").concat(r));case 6:case"end":return n.stop()}}),n)}))),onMouseLeave:function(){t("")},style:{default:{fill:"black",outline:"none"},hover:{fill:"#F53",outline:"none"},pressed:{fill:"#E42",outline:"none"}}})}))})))))}));t.a=function(){var e=Object(r.useState)(""),t=Object(a.a)(e,2),n=t[0],c=t[1];return o.a.createElement("div",null,o.a.createElement(d,{setTooltipContent:c}),o.a.createElement(i.a,{multiline:!0,html:!0},n))}},439:function(e,t,n){e.exports=n(521)},512:function(e,t,n){},513:function(e,t,n){},521:function(e,t,n){"use strict";n.r(t);n(440),n(450),n(136),n(137),n(138),n(139),n(140),n(141),n(142),n(143),n(144),n(145),n(146),n(147),n(148),n(149),n(150),n(236),n(238),n(239),n(240),n(241),n(242),n(243),n(245),n(246),n(153),n(248),n(249),n(87),n(250),n(251),n(253),n(254),n(255),n(256),n(257),n(258),n(259),n(260),n(261),n(262),n(263),n(264),n(267),n(268),n(269),n(270),n(271),n(154),n(73),n(272),n(274),n(275),n(276),n(277),n(278),n(279),n(280),n(282),n(283),n(284),n(285),n(286),n(287),n(288),n(289),n(155),n(290),n(291),n(292),n(294),n(296),n(297),n(298),n(299),n(300),n(301),n(303),n(304),n(306),n(307),n(308),n(310),n(311),n(312),n(313),n(314),n(315),n(316),n(318),n(319),n(320),n(321),n(322),n(323),n(324),n(325),n(102),n(326),n(327),n(333),n(334),n(335),n(336),n(337),n(338),n(339),n(340),n(341),n(342),n(343),n(344),n(345),n(346),n(163),n(347),n(348),n(103),n(349),n(350),n(351),n(352),n(85),n(353),n(354),n(357),n(358),n(359),n(360),n(361),n(362),n(363),n(364),n(365),n(366),n(367),n(368),n(369),n(370),n(371),n(372),n(373),n(374),n(375),n(376),n(377),n(378),n(379),n(380),n(383),n(384),n(385),n(386),n(387),n(388),n(389),n(390),n(391),n(392),n(393),n(394),n(395),n(396),n(397),n(398),n(399),n(400),n(401),n(402),n(403),n(404),n(405),n(406),n(407),n(408),n(409),n(410),n(411),n(412),n(413),n(414),n(415),n(116),n(417),n(461),n(462),n(463),n(464),n(465),n(466),n(192),n(193),n(194),n(195),n(196),n(197),n(198),n(199),n(200),n(201),n(202),n(203),n(204),n(205),n(206),n(207),n(208),n(468),n(469),n(470),n(471),n(472),n(473),n(474),n(475),n(476),n(477),n(478),n(479),n(480),n(481),n(482),n(483),n(485),n(486),n(487),n(488),n(489),n(490),n(491),n(492),n(493),n(494),n(495),n(209),n(211),n(212),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(221),n(222),n(223),n(224),n(225),n(226),n(227),n(496),n(497),n(498),n(500),n(232),n(233),n(234),n(501),n(502),n(503),n(504),n(505),n(506),n(507),n(418),n(135),n(419),n(420),n(421),n(423),n(168);!function(){if("function"===typeof window.CustomEvent)return!1;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e}();var a=n(1),r=n.n(a),o=n(93),i=n.n(o),c=(n(512),n(173)),u=n(174),l=n(176),s=n(175),m=n(178),p=n(19),d=(n(513),n(435),r.a.lazy((function(){return Promise.all([n.e(3),n.e(9),n.e(51)]).then(n.bind(null,821))}))),f=(r.a.lazy((function(){return Promise.all([n.e(11),n.e(55)]).then(n.bind(null,771))})),r.a.lazy((function(){return Promise.all([n.e(10),n.e(56)]).then(n.bind(null,772))})),r.a.lazy((function(){return Promise.all([n.e(0),n.e(3),n.e(40)]).then(n.bind(null,773))}))),h=r.a.lazy((function(){return Promise.all([n.e(0),n.e(3),n.e(41)]).then(n.bind(null,775))})),b=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(m.HashRouter,null,r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",{className:"animated fadeIn pt-3 text-center"},"Loading...")},r.a.createElement(p.g,null,r.a.createElement(p.d,{exact:!0,path:"/404",name:"Page 404",render:function(e){return r.a.createElement(f,e)}}),r.a.createElement(p.d,{exact:!0,path:"/500",name:"Page 500",render:function(e){return r.a.createElement(h,e)}}),r.a.createElement(p.d,{path:"/",name:"Home",render:function(e){return r.a.createElement(d,e)}}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[439,6,7]]]);
//# sourceMappingURL=main.1df8fd20.chunk.js.map