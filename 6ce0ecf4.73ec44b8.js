(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(259)),l={id:"configuration",title:"Library Flow Configuration",sidebar_label:"Configuration"},i={id:"library-flow/configuration",title:"Library Flow Configuration",description:"We try to limit confugration, but there are still different use-cases that requires us to provide the following:",source:"@site/docs/library-flow/configuration.md",permalink:"/yoshi/docs/next/library-flow/configuration",editUrl:"https://github.com/wix/yoshi/edit/master/website/docs/library-flow/configuration.md",version:"next",lastUpdatedBy:"Ran Yitzhaki",lastUpdatedAt:1592233613,sidebar_label:"Configuration",sidebar:"library-flow",previous:{title:"Library Flow",permalink:"/yoshi/docs/next/library-flow/overview"},next:{title:"Migration from Legacy Flow",permalink:"/yoshi/docs/next/library-flow/migration-guide"}},b=[{value:"bundle",id:"bundle",children:[]},{value:"bundle.library",id:"bundlelibrary",children:[]},{value:"bundle.externals",id:"bundleexternals",children:[]},{value:"bundle.entry",id:"bundleentry",children:[]},{value:"bundle.port",id:"bundleport",children:[]},{value:"bundle.https",id:"bundlehttps",children:[]}],c={rightToc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We try to limit confugration, but there are still different use-cases that requires us to provide the following:"),Object(o.b)("h3",{id:"bundle"},"bundle"),Object(o.b)("p",null,"Adding a umd bundle which will be created on ",Object(o.b)("inlineCode",{parentName:"p"},"dist/statics/<packageJsonName>.umd.js")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'{\n  "yoshiFlowLibrary": {\n    "bundle": true\n  }\n}\n')),Object(o.b)("h3",{id:"bundlelibrary"},"bundle.library"),Object(o.b)("p",null,"Changing how this library will be exposed (on the ",Object(o.b)("inlineCode",{parentName:"p"},"window")," object for example)"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"This value corresponds to webpack's ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://webpack.js.org/configuration/output/#outputlibrary"}),"library option"))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The variable MyLibrary will be bound with the return value of your entry file, if the resulting output is included as a script tag in an HTML page. In this case on ",Object(o.b)("inlineCode",{parentName:"p"},"window.MyLibrary"))),Object(o.b)("p",null,"Defaults to your project name in ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'{\n  "yoshiFlowLibrary": {\n    "bundle": {\n      "library": "MyLibrary"\n    }\n  }\n}\n')),Object(o.b)("h3",{id:"bundleexternals"},"bundle.externals"),Object(o.b)("p",null,"The externals configuration option provides a way of excluding dependencies from the output bundles. Instead, the created bundle relies on that dependency to be present in the consumer's (any end-user application) environment. This feature is typically most useful to library developers, however there are a variety of applications for it."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Corresponds with webpack's ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://webpack.js.org/configuration/externals/"}),"externals options"))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'{\n  "yoshiFlowLibrary": {\n    "bundle": {\n      "externals": {\n        "react": "React",\n        "react-dom": "ReactDOM"\n      }\n    }\n  }\n}\n')),Object(o.b)("h3",{id:"bundleentry"},"bundle.entry"),Object(o.b)("p",null,"Adding another entry will create another bundle in the ",Object(o.b)("inlineCode",{parentName:"p"},"dist/statics")," directory."),Object(o.b)("p",null,"Defaults to ",Object(o.b)("inlineCode",{parentName:"p"},"index.ts")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Corresponds with webpack's ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://webpack.js.org/configuration/entry-context/#entry"}),"entry option"))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"NOTE: All values here are relative to the ",Object(o.b)("inlineCode",{parentName:"p"},"src")," directory, the following example will take ",Object(o.b)("inlineCode",{parentName:"p"},"src/anotherEntry.ts"))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'{\n  "yoshiFlowLibrary": {\n    "bundle": {\n      "entry": "anotherEntry.ts"\n    }\n  }\n}\n')),Object(o.b)("h3",{id:"bundleport"},"bundle.port"),Object(o.b)("p",null,"The port which will be used by ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/webpack/webpack-dev-server"}),"webpack-dev-server"),"."),Object(o.b)("p",null,"Defaults to ",Object(o.b)("inlineCode",{parentName:"p"},"3300")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'{\n  "yoshiFlowLibrary": {\n    "bundle": {\n      "port": 3333\n    }\n  }\n}\n')),Object(o.b)("h3",{id:"bundlehttps"},"bundle.https"),Object(o.b)("p",null,"Whether ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/webpack/webpack-dev-server"}),"webpack-dev-server")," will run on ",Object(o.b)("inlineCode",{parentName:"p"},"https")," or ",Object(o.b)("inlineCode",{parentName:"p"},"http"),"."),Object(o.b)("p",null,"Defaults to ",Object(o.b)("inlineCode",{parentName:"p"},"false")," (",Object(o.b)("inlineCode",{parentName:"p"},"http"),")"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'{\n  "yoshiFlowLibrary": {\n    "bundle": {\n      "port": 3333\n    }\n  }\n}\n')))}p.isMDXComponent=!0},259:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return y}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,y=u["".concat(l,".").concat(d)]||u[d]||s[d]||o;return n?a.a.createElement(y,i({ref:t},c,{components:n})):a.a.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);