(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{253:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(9),r=(n(0),n(281)),o={id:"managing-dependencies",title:"Managing Dependencies",sidebar_label:"Managing Dependencies"},c={id:"version-4.x/legacy-guides/managing-dependencies",title:"Managing Dependencies",description:'NPM uses a file called [`package-lock.json`](https://docs.npmjs.com/files/package-lock.json) as a "lockfile".  ',source:"@site/versioned_docs/version-4.x/legacy-guides/managing-dependencies.md",permalink:"/yoshi/docs/legacy-guides/managing-dependencies",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-4.x/legacy-guides/managing-dependencies.md",version:"4.x",lastUpdatedBy:"Ran Yitzhaki",lastUpdatedAt:1589529706,sidebar_label:"Managing Dependencies"},l=[{value:"What are the advantagesdisadvantages of each approach?",id:"what-are-the-advantagesdisadvantages-of-each-approach",children:[]},{value:"What is the defaultpreferred approach?",id:"what-is-the-defaultpreferred-approach",children:[]},{value:"How to start using a lockfile?",id:"how-to-start-using-a-lockfile",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"NPM uses a file called ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.npmjs.com/files/package-lock.json"}),Object(r.b)("inlineCode",{parentName:"a"},"package-lock.json")),' as a "lockfile".',Object(r.b)("br",{parentName:"p"}),"\n","A lockfile lists the exact dependency versions that are expected to be downloaded and installed when ",Object(r.b)("inlineCode",{parentName:"p"},"npm install")," is executed."),Object(r.b)("p",null,"Generally there are two approaches to working with dependencies in the NPM ecosystem:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Using a lockfile")," - if a ",Object(r.b)("inlineCode",{parentName:"li"},"package-lock.json")," is present, the exact dependency versions defined in that lockfile will be downloaded when you ",Object(r.b)("inlineCode",{parentName:"li"},"npm install"),".",Object(r.b)("br",{parentName:"li"}),"The ",Object(r.b)("inlineCode",{parentName:"li"},"package-lock.json")," will be committed to source-control and will affect all developers working on the project and the CI builds."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Not using a lockfile")," - if ",Object(r.b)("inlineCode",{parentName:"li"},"package-lock.json")," is not present, whenever you do a fresh ",Object(r.b)("inlineCode",{parentName:"li"},"npm install")," the latest versions of your dependencies will be downloaded from the npm registry (based on semantic versioning as detailed ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.npmjs.com/about-semantic-versioning#using-semantic-versioning-to-specify-update-types-your-package-can-accept"}),"here"),").")),Object(r.b)("p",null,"This is a high-level explanation. For more details you can read up on the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.npmjs.com/files/package-locks"}),"NPM documentation")),Object(r.b)("h2",{id:"what-are-the-advantagesdisadvantages-of-each-approach"},"What are the advantages\\disadvantages of each approach?"),Object(r.b)("p",null,"Advantages of using a lockfile:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"By locking the entire dependency tree, changes in 3rd party libraries are only applied when you choose to initiate an upgrade.",Object(r.b)("br",{parentName:"li"}),"This reduces the likelihood of introducing bugs related to these changes without you knowing."),Object(r.b)("li",{parentName:"ul"},"Having a lockfile helps assure reproducible deterministic builds- meaning if the ",Object(r.b)("inlineCode",{parentName:"li"},"install")," step passed successfully when the lockfile was created\\changed, then each subsequent build that only reads the existing lockfile should also pass and the exact same content will be installed."),Object(r.b)("li",{parentName:"ul"},"Having a lockfile results in significantly faster installations.")),Object(r.b)("p",null,"Disadvantages of using a lockfile:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Having a lockfile means needing to remember to update the lockfile and reason about the changes, and deal with lockfile conflicts.",Object(r.b)("br",{parentName:"li"}),"This is especially problematic when your dependencies change often (as in the case internally in Wix where your package version is auto-incremented on every commit).")),Object(r.b)("h2",{id:"what-is-the-defaultpreferred-approach"},"What is the default\\preferred approach?"),Object(r.b)("p",null,"Because of the advantages mentioned above, the default NPM behavior is to use a lockfile, and one is generated automatically when you run ",Object(r.b)("inlineCode",{parentName:"p"},"npm install")," for the first time.",Object(r.b)("br",{parentName:"p"}),"\n","However for projects generated by ",Object(r.b)("inlineCode",{parentName:"p"},"create-yoshi-app")," a ",Object(r.b)("inlineCode",{parentName:"p"},"package-lock.json")," will not be generated.",Object(r.b)("br",{parentName:"p"}),"\n","This is because in Wix it's common to depend on other Wix packages that update often (on every commit), therefore you would need to update your ",Object(r.b)("inlineCode",{parentName:"p"},"package-lock.json")," very often and conflicts are likely."),Object(r.b)("h2",{id:"how-to-start-using-a-lockfile"},"How to start using a lockfile?"),Object(r.b)("p",null,"By default, projects generated by ",Object(r.b)("inlineCode",{parentName:"p"},"create-yoshi-app")," do not use a lockfile. To use a lockfile, edit the ",Object(r.b)("inlineCode",{parentName:"p"},".npmrc")," file (NPM configuration file) in the root folder and set ",Object(r.b)("inlineCode",{parentName:"p"},"package-lock=true"),".",Object(r.b)("br",{parentName:"p"}),"\n","The next time you run ",Object(r.b)("inlineCode",{parentName:"p"},"npm install")," a lockfile will be created and you should commit it."))}p.isMDXComponent=!0},281:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,h=d["".concat(o,".").concat(u)]||d[u]||b[u]||r;return n?i.a.createElement(h,c({ref:t},s,{components:n})):i.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);