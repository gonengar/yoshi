(window.webpackJsonp=window.webpackJsonp||[]).push([[115,25],{216:function(e,a,t){"use strict";t.r(a);var n=t(2),l=t(0),r=t.n(l),i=t(261),c=t.n(i),o=t(267),s=t(95),u=t(263),m=t(217),p=t.n(m);const d=[{title:r.a.createElement(r.a.Fragment,null,"Aspire for zero config"),imageUrl:"img/rocket.png",description:r.a.createElement(r.a.Fragment,null,"Standard Wix Flows like Out of iFrame app or Business-manager module require minimal configuration")},{title:r.a.createElement(r.a.Fragment,null,"Yoshi \u2764\ufe0f TypeScript"),imageUrl:"img/ts.png",description:r.a.createElement(r.a.Fragment,null,"You can use TypeScript with any of the flows")},{title:r.a.createElement(r.a.Fragment,null,"We have your back"),imageUrl:"img/lotusman.png",description:r.a.createElement(r.a.Fragment,null,"Stable, Reliable and Fully Supported #yoshi")}];function f({imageUrl:e,title:a,description:t}){const n=Object(u.a)(e);return r.a.createElement("div",{className:c()("col col--4",p.a.feature)},n&&r.a.createElement("div",{className:"text--center"},r.a.createElement("img",{className:p.a.featureImage,src:n,alt:a})),r.a.createElement("h3",null,a),r.a.createElement("p",null,t))}a.default=function(){return r.a.createElement(o.a,{title:"Toolkit for building applications @ Wix",description:"Toolkit for building applications @ Wix"},r.a.createElement(s.default,null),r.a.createElement("main",null,d&&d.length&&r.a.createElement("section",{className:p.a.features},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},d.map((e,a)=>r.a.createElement(f,Object(n.a)({key:a},e))))))))}},277:function(e,a,t){"use strict";t(278)("link",(function(e){return function(a){return e(this,"a","href",a)}}))},278:function(e,a,t){var n=t(53),l=t(35),r=t(36),i=/"/g,c=function(e,a,t,n){var l=String(r(e)),c="<"+a;return""!==t&&(c+=" "+t+'="'+String(n).replace(i,"&quot;")+'"'),c+">"+l+"</"+a+">"};e.exports=function(e,a){var t={};t[e]=a(c),n(n.P+n.F*l((function(){var a=""[e]('"');return a!==a.toLowerCase()||a.split('"').length>3})),"String",t)}},279:function(e,a,t){"use strict";var n=t(53),l=t(54),r=t(55),i=t(35),c=[].sort,o=[1,2,3];n(n.P+n.F*(i((function(){o.sort(void 0)}))||!i((function(){o.sort(null)}))||!t(280)(c)),"Array",{sort:function(e){return void 0===e?c.call(r(this)):c.call(r(this),l(e))}})},280:function(e,a,t){"use strict";var n=t(35);e.exports=function(e,a){return!!e&&n((function(){a?e.call(null,(function(){}),1):e.call(null)}))}},92:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(94),i=t.n(r);const c=e=>e/20+"s";a.default=({label:e,color:a,size:t})=>l.a.createElement("div",{className:i.a.planetResizer},l.a.createElement("div",{className:i.a.planetMover,style:{animationDuration:c(t)}},l.a.createElement("div",{className:i.a.planet,style:{backgroundColor:a,width:t,height:t}},l.a.createElement("div",{className:i.a.hover})),l.a.createElement("span",{className:i.a.planetLabel},e)))},93:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(261),i=t.n(r),c=t(96),o=t.n(c);a.default=function(){return l.a.createElement("div",{className:o.a.animationWrapper},l.a.createElement("div",{className:i()(o.a.particle,o.a.particle1)}),l.a.createElement("div",{className:i()(o.a.particle,o.a.particle2)}),l.a.createElement("div",{className:i()(o.a.particle,o.a.particle3)}),l.a.createElement("div",{className:i()(o.a.particle,o.a.particle4)}))}},95:function(e,a,t){"use strict";t.r(a);t(277),t(279);var n=t(0),l=t.n(n),r=t(92),i=t(261),c=t.n(i),o=t(262),s=t(263),u=t(93),m=t(260),p=t(97),d=t.n(p);function f(e){return e.sort((function(){return Math.random()-.5}))}var E=function(){var e=f(["#FFA19E","#FFD594","#B3F3ED","#55E5AC","#FF6D89","#BDBDFF","#38216B"]);return{sizes:f([80,90,100,110,120,130,140]),colors:e}}(),v=E.sizes,g=E.colors;a.default=function(){var e=Object(m.a)().siteConfig,a=void 0===e?{}:e;return l.a.createElement("header",{className:c()("hero",d.a.heroBanner)},l.a.createElement(u.default,null),l.a.createElement("div",{className:d.a.container},l.a.createElement("h1",{className:c()("hero__title",d.a.heroTitle)},a.title),l.a.createElement("p",{className:c()("hero__subtitle",d.a.heroSubTitle)},a.tagline),l.a.createElement("div",{className:d.a.planetsWrapper},a.customFields.flows.map((function(e,a){return l.a.createElement(o.a,{to:Object(s.a)(e.to),key:e.label},l.a.createElement(r.default,{label:e.label,color:g[a],size:v[a]}))}))),l.a.createElement("div",{className:d.a.buttons},l.a.createElement(o.a,{className:c()("button button--outline button--secondary button--lg",d.a.link),to:Object(s.a)("docs/welcome")},"Get Started"))))}}}]);