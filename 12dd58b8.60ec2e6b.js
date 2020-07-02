(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{119:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(259)),i={id:"flow-api",title:"flowAPI",sidebar_label:"flowAPI"},l={id:"version-4.x/editor-flow/runtime-api/flow-api",title:"flowAPI",description:"To extend platform API's editor flow passes an additional value to platform methods.",source:"@site/versioned_docs/version-4.x/editor-flow/runtime-api/flow-api.md",permalink:"/yoshi/docs/editor-flow/runtime-api/flow-api",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-4.x/editor-flow/runtime-api/flow-api.md",version:"4.x",lastUpdatedBy:"Artem Yavorsky",lastUpdatedAt:1593419081,sidebar_label:"flowAPI",sidebar:"version-4.x/editor-flow",previous:{title:"yoshi-flow-editor-runtime",permalink:"/yoshi/docs/editor-flow/runtime-api/yoshi-flow-editor-runtime"},next:{title:"Local Development",permalink:"/yoshi/docs/editor-flow/local-development"}},b=[{value:"Sentry",id:"sentry",children:[]},{value:"<code>sentryMonitor</code>",id:"sentrymonitor",children:[]},{value:"<code>reportError</code>",id:"reporterror",children:[]},{value:"Fedops",id:"fedops",children:[{value:"<code>fedopsLogger</code>",id:"fedopslogger",children:[]}]},{value:"Translations",id:"translations",children:[{value:"getTranslations",id:"gettranslations",children:[]},{value:"getSiteLanguage",id:"getsitelanguage",children:[]}]},{value:"isSSR",id:"isssr",children:[]},{value:"isMobile",id:"ismobile",children:[{value:"getExperiments",id:"getexperiments",children:[]}]}],c={rightToc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To extend platform API's editor flow passes an additional value to platform methods.\nThis value is an object called ",Object(o.b)("inlineCode",{parentName:"p"},"flowAPI"),". It's already configured for:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"app level"),". ",Object(o.b)("inlineCode",{parentName:"li"},"flowAPI")," will be passed for ",Object(o.b)("inlineCode",{parentName:"li"},"initAppForPage")," and editor script methods from ",Object(o.b)("inlineCode",{parentName:"li"},"editor.app.ts"),". (",Object(o.b)("inlineCode",{parentName:"li"},"editorReady"),", ",Object(o.b)("inlineCode",{parentName:"li"},"getManifest"),", etc)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"component level:")," ",Object(o.b)("inlineCode",{parentName:"li"},"flowAPI")," will be a field for user's ",Object(o.b)("inlineCode",{parentName:"li"},"controller.ts"),".")),Object(o.b)("p",null,"In this section we'll go through instances and helpers ",Object(o.b)("inlineCode",{parentName:"p"},"flowAPI")," provides. In practice, ",Object(o.b)("inlineCode",{parentName:"p"},"flowAPI")," is not a single instance. Its shape will vary according to consumer's environment:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"editor.app.ts"),": ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/wix/yoshi/blob/master/packages/yoshi-flow-editor-runtime/src/FlowAPI.ts#L91"}),Object(o.b)("inlineCode",{parentName:"a"},"EditorScriptFlowAPI"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"viewer.app.ts"),": ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/wix/yoshi/blob/master/packages/yoshi-flow-editor-runtime/src/FlowAPI.ts#L137"}),Object(o.b)("inlineCode",{parentName:"a"},"ViewerScriptFlowAPI"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"controller.ts"),": ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/wix/yoshi/blob/master/packages/yoshi-flow-editor-runtime/src/FlowAPI.ts#L43"}),Object(o.b)("inlineCode",{parentName:"a"},"ControllerFlowAPI")))),Object(o.b)("h3",{id:"sentry"},"Sentry"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Available for ",Object(o.b)("inlineCode",{parentName:"em"},"viewer.app.ts"),", ",Object(o.b)("inlineCode",{parentName:"em"},"editor.app.ts")," and ",Object(o.b)("inlineCode",{parentName:"em"},"controller"),".")),Object(o.b)("p",null,"Open-source error tracking tool that helps developers monitor and fix crashes in real time. You can head to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.sentry.io/"}),"the official documentation")," for better understanding of Sentry's capabilities, API and configuration."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"All unhandled errors in ",Object(o.b)("inlineCode",{parentName:"strong"},"Widget"),", ",Object(o.b)("inlineCode",{parentName:"strong"},"Settings"),", ",Object(o.b)("inlineCode",{parentName:"strong"},"controller"),", ",Object(o.b)("inlineCode",{parentName:"strong"},"viewer.app.ts"),", ",Object(o.b)("inlineCode",{parentName:"strong"},"editor.app.ts")," are being logged automatically"),"."),Object(o.b)("p",null,"Each log event has different ",Object(o.b)("inlineCode",{parentName:"p"},"environment")," according to the context an error appeared:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Error Context"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Logger Environment"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Widget")," in viewer"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Viewer")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Widget")," in editor"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Editor")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Settings")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Editor")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"controller")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Viewer:Worker")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"viewer.app")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Viewer:Worker")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"editor.app")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Editor:Worker")))),Object(o.b)("p",null,"For example, if the error will appear in ",Object(o.b)("em",{parentName:"p"},"controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"export default ({ flowAPI }) => {\n  // This error is being logged by the Editor Flow\n  throw new Error('Ooh, oops \ud83e\udd74');\n\n  try {\n    // This error is being logged by user\n    throw new Error('Ooh, oops \ud83e\udd74);\n  } catch (e) {\n    flowAPI.reportError(e);\n  }\n};\n")),Object(o.b)("p",null,"It will be logged under ",Object(o.b)("inlineCode",{parentName:"p"},"Viewer:Worker")," environment.\n",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/11733036/84033045-f0eac280-a9a0-11ea-80dc-2770e60af399.png",alt:"sentry-search"})),"\n",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/11733036/84033054-f3e5b300-a9a0-11ea-82f3-5c45f8667aed.png",alt:"sentry-error-row"}))),Object(o.b)("h3",{id:"sentrymonitor"},Object(o.b)("inlineCode",{parentName:"h3"},"sentryMonitor")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Available for ",Object(o.b)("inlineCode",{parentName:"em"},"viewer.app.ts"),", ",Object(o.b)("inlineCode",{parentName:"em"},"editor.app.ts")," and ",Object(o.b)("inlineCode",{parentName:"em"},"controller"),".")),Object(o.b)("p",null,"Provides a ",Object(o.b)("inlineCode",{parentName:"p"},"Raven")," or ",Object(o.b)("inlineCode",{parentName:"p"},"Sentry Browser Client")," instances according to the environment it's consumed. To prevent increasing a bundle, we're just taking the monitor passed by the platform. We create an instance which is specifically configured for your app and environment and pass it as a ",Object(o.b)("inlineCode",{parentName:"p"},"flowAPI")," property."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'export default ({ flowAPI }) => {\n  try {\n    doSomethingDangerouseButNotVeryImportant();\n  } catch (e) {\n    flowAPI.sentryMonitor.captureMessage(\n      "Something not important is not working."\n    );\n  }\n};\n')),Object(o.b)("h3",{id:"reporterror"},Object(o.b)("inlineCode",{parentName:"h3"},"reportError")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Available for ",Object(o.b)("inlineCode",{parentName:"em"},"viewer.app.ts"),", ",Object(o.b)("inlineCode",{parentName:"em"},"editor.app.ts")," and ",Object(o.b)("inlineCode",{parentName:"em"},"controller"),".")),Object(o.b)("p",null,"It's a shorthand for ",Object(o.b)("inlineCode",{parentName:"p"},"sentryMonitor.captureException"),". Since this method is the main part of sentry interaction use-cases, we providing it as a separate method."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"export default ({ flowAPI }) => {\n  try {\n    doSomethingDangerouseAndVeryImportant();\n  } catch (e) {\n    flowAPI.reportError(e); // the same as `flowAPI.sentryMonitor.captureException(e);`\n  }\n};\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"editor.app.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"export const editorReady: EditorReadyFn = async (\n  editorSDK, // platform\n  appDefinitionId, // platform\n  platformOptions, // platform\n  flowAPI // editor flow\n) => {\n  if (platformOptions.firstInstall) {\n    try {\n      installApp();\n    } catch (e) {\n      flowAPI.reportError(e);\n    }\n  }\n};\n")),Object(o.b)("h2",{id:"fedops"},"Fedops"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Available for ",Object(o.b)("inlineCode",{parentName:"em"},"editor.app.ts")," and ",Object(o.b)("inlineCode",{parentName:"em"},"controller"),".")),Object(o.b)("p",null,"A javascript library to allow realtime monitoring, following the 'fedops' methodology."),Object(o.b)("p",null,"After you initialize the app via ",Object(o.b)("inlineCode",{parentName:"p"},"create-yoshi-app"),", integrated it with lifecycle and pushed to the github, a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://grafana.wixpress.com/login"}),"grafana")," dashboard will be created automatically for your app."),Object(o.b)("p",null,"Boards for each component will be configured also."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"appLoadStarted")," and ",Object(o.b)("inlineCode",{parentName:"strong"},"appLoaded")," events will be logged automatically by the Editor Flow."),"\nMoreover, both client-side rendering and server-side rendering logs for Widget are covered. So for most cases you don't need to handle fedops logs by yourself at all."),Object(o.b)("h3",{id:"fedopslogger"},Object(o.b)("inlineCode",{parentName:"h3"},"fedopsLogger")),Object(o.b)("p",null,"Provides a ",Object(o.b)("inlineCode",{parentName:"p"},"Fedops BaseLogger")," initialized for current environment. Logs from ",Object(o.b)("inlineCode",{parentName:"p"},"editor.app.ts")," will be available for editor script board, ",Object(o.b)("inlineCode",{parentName:"p"},"controller")," - for component's board."),Object(o.b)("p",null,"For more info relared to fedopsLogger API, please ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/wix-private/fed-infra/tree/master/fedops/fedops-logger"}),"follow this link")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"// appLoadStarted and appLoaded already covered by the editor flow \ud83d\ude0c\nexport default ({ flowAPI }) => {\n  const handleSubmitSomething = () => {\n    flowAPI.fedopsLogger.interactionStarted(SUBMIT_SOMETHING_FEDOPS_INTERACTION);\n    // process the action...\n    flowAPI.fedopsLogger.interactionEnded(SUBMIT_SOMETHING_FEDOPS_INTERACTION);\n  };\n\n  return {\n    pageReady() {\n      setProps({\n        handleSubmitSomething,\n      });\n    }\n  };\n};\n")),Object(o.b)("h2",{id:"translations"},"Translations"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note, Since translations feature is common for Widget but not a controller, in most cases you won't need these calls.\nFor Widget you just need to use ",Object(o.b)("inlineCode",{parentName:"p"},"translations")," HOC. For more info, check ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/yoshi/docs/editor-flow/structure-api/application#locales"}),"structure-api docs"),".")),Object(o.b)("h3",{id:"gettranslations"},"getTranslations"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Available for the ",Object(o.b)("inlineCode",{parentName:"em"},"controller"),".")),Object(o.b)("p",null,"Returns a pending ",Object(o.b)("inlineCode",{parentName:"p"},"Promise")," which will be resolved with translations for the current site's language."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Since we want to start fetching translations as soon as possible, this call won't create a new network call.\nIt will just return a promise for an already created call by the editor flow.")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"export default async function({ flowAPI }) => {\n  return {\n    pageReady() {\n      const translations = await flowAPI.getTranslations();\n\n      console.log(translations['app.widget.hello']);\n    }\n  };\n}\n")),Object(o.b)("h3",{id:"getsitelanguage"},"getSiteLanguage"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Available for the ",Object(o.b)("inlineCode",{parentName:"em"},"controller"),".")),Object(o.b)("p",null,"If multilingual is enabled, returns current language for it. If not, returns a site language. Will use a fallback language if nothing found."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"export default async function({ flowAPI }) => {\n  return {\n    pageReady() {\n      const language = flowAPI.getSiteLanguage();\n      // ...\n    }\n  };\n}\n")),Object(o.b)("h2",{id:"isssr"},"isSSR"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Available for the ",Object(o.b)("inlineCode",{parentName:"em"},"controller"),".")),Object(o.b)("p",null,"A helper that returns ",Object(o.b)("inlineCode",{parentName:"p"},"true")," if current rendering environment is a server-side-rendering. Returns ",Object(o.b)("inlineCode",{parentName:"p"},"false")," in case of client-side-rendering.\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://bo.wix.com/wix-docs/client/viewer-platform---ooi/about/get-started/guidelines#viewer-platform---ooi_about_get-started_guidelines_overview"}),"Read more about SSR and CRS")," for viewer platform."),Object(o.b)("h2",{id:"ismobile"},"isMobile"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Available for the ",Object(o.b)("inlineCode",{parentName:"em"},"controller"),".")),Object(o.b)("p",null,"A helper that returns ",Object(o.b)("inlineCode",{parentName:"p"},"true")," if window's form factor is a mobile."),Object(o.b)("h3",{id:"getexperiments"},"getExperiments"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Available for ",Object(o.b)("inlineCode",{parentName:"em"},"viewer.app.ts"),", ",Object(o.b)("inlineCode",{parentName:"em"},"editor.app.ts")," and ",Object(o.b)("inlineCode",{parentName:"em"},"controller"),".")),Object(o.b)("p",null,"Returns a ",Object(o.b)("inlineCode",{parentName:"p"},"Promise"),", which will be resolved with ",Object(o.b)("inlineCode",{parentName:"p"},"Experiments")," instance for current app's scope."),Object(o.b)("p",null,"To read more about experiments API, ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/wix-private/fed-infra/tree/master/experiments/wix-experiments"}),"check Experiments page")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"getExperiments")," won't trigger a fetch process for your experiments. To optimize performance, it's already triggered under the hood before method execution.\nSo technically ",Object(o.b)("inlineCode",{parentName:"p"},"getExperiments")," just returns a pending or resolved ",Object(o.b)("inlineCode",{parentName:"p"},"Promise"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"export default async function({ flowAPI }) => {\n  return {\n    pageReady() {\n      const experiments = await flowAPI.getExperiments();\n      setProps({\n        withNewButton: experiments.enabled('specs.my-scope.EnableNewButton'),\n      });\n    }\n  };\n}\n")),Object(o.b)("p",null,"Parallel loading example to improve your controller performance:"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"export default async function createController({ flowData }) => {\n  return {\n    pageReady() {\n      const [experiments, someData] = await Promise.all([\n        flowData.getExperiments(),\n        getSomeData(),\n      ]);\n      setProps({\n        withNewButton: experiments.enabled('specs.my-scope.EnableNewButton'),\n        someData,\n      });\n    }\n  };\n}\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"We are currently working on implementing more runtime helpers")))}p.isMDXComponent=!0},259:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},s=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,u=s["".concat(i,".").concat(m)]||s[m]||d[m]||o;return n?a.a.createElement(u,l({ref:t},c,{components:n})):a.a.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);