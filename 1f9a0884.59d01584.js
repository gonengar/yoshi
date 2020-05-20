(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(9),s=(n(0),n(281)),i={id:"disable-css-modules",title:"Disable CSS Modules",sidebar_label:"Disable CSS Modules"},a={id:"version-3.x/guides/disable-css-modules",title:"Disable CSS Modules",description:"There are situations when you are using css modules inside you project, but you need to disable them in specific places (for example, when importing css from 3rd party vendor).",source:"@site/versioned_docs/version-3.x/guides/disable-css-modules.md",permalink:"/yoshi/docs/3.x/guides/disable-css-modules",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-3.x/guides/disable-css-modules.md",version:"3.x",lastUpdatedBy:"Ran Yitzhaki",lastUpdatedAt:1589529706,sidebar_label:"Disable CSS Modules",sidebar:"version-3.x-docs",previous:{title:"Debugging",permalink:"/yoshi/docs/3.x/guides/debugging"},next:{title:"Testing With Enzyme",permalink:"/yoshi/docs/3.x/guides/enzyme-support"}},c=[{value:"Importing css from node_modules",id:"importing-css-from-node_modules",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"There are situations when you are using css modules inside you project, but you need to disable them in specific places (for example, when importing css from 3rd party vendor)."),Object(s.b)("p",null,"In those cases you can wrap your css with ",Object(s.b)("inlineCode",{parentName:"p"},":global"),":"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-css"}),":global {\n  .global-class-name {\n    color: green;\n  }\n}\n")),Object(s.b)("p",null,"Please find more details ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/css-modules/css-modules#exceptions"}),"here"),"."),Object(s.b)("h2",{id:"importing-css-from-node_modules"},"Importing css from node_modules"),Object(s.b)("p",null,"In case you want to import a css from your node modules, just ",Object(s.b)("inlineCode",{parentName:"p"},"@import")," it inside your scss file, and wrap it with ",Object(s.b)("inlineCode",{parentName:"p"},":global"),":"),Object(s.b)("p",null,"Importing style.scss from '3rd-party-module/x/style.scss':"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-scss"}),'@import "3rd-party-module/x/style.scss";\n')),Object(s.b)("p",null,"In case you are importing a regular 'css' file, just omit file extension:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-scss"}),'@import "3rd-party-module/x/style";\n')))}u.isMDXComponent=!0},281:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a({},t,{},e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||s;return n?o.a.createElement(m,a({ref:t},l,{components:n})):o.a.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=b;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var l=2;l<s;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);