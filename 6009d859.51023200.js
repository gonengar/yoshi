(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{187:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(9),i=(n(0),n(281)),a={id:"svg",title:"How to use SVG?",sidebar_label:"How to use SVG?"},c={id:"version-4.x/legacy-guides/svg",title:"How to use SVG?",description:"There are few ways of using SVG:",source:"@site/versioned_docs/version-4.x/legacy-guides/svg.md",permalink:"/yoshi/docs/legacy-guides/svg",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-4.x/legacy-guides/svg.md",version:"4.x",lastUpdatedBy:"Ran Yitzhaki",lastUpdatedAt:1589529706,sidebar_label:"How to use SVG?"},s=[],l={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"There are few ways of using SVG:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Just import it or use ",Object(i.b)("inlineCode",{parentName:"li"},"background: url()")," in your css and it will be inserted as data URI"),Object(i.b)("li",{parentName:"ul"},'Call the svg file with "inline" suffix (i.e., "icon.inline.svg"), then import it and it will import optimized svg,\nwhich can be inserted to the DOM. Note: don\'t use this for react application, raw svg is not valid react code, use the next one.'),Object(i.b)("li",{parentName:"ul"},"For react applications use ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/wix/svg2react-icon"}),"https://github.com/wix/svg2react-icon")," \u2013 converts your svg into a react component."),Object(i.b)("li",{parentName:"ul"},"Starting from the v4, there is a handy way of working with SVGs \u2013 instead of running ",Object(i.b)("inlineCode",{parentName:"li"},"svg2react-icon")," as a pre-build step, you can now import SVGs directly as React components:",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'import { ReactComponent as Logo } from "./logo.svg";\nconst App = () => (\n  <div>\n    {/* Logo is an actual React component */}\n    <Logo />\n  </div>\n);\n')))))}u.isMDXComponent=!0},281:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(a,".").concat(d)]||p[d]||b[d]||i;return n?o.a.createElement(f,c({ref:t},l,{components:n})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);