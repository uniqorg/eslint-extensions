"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6097],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1518:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={id:"no-commonjs-dynamic-require",title:"no-commonjs-dynamic-require",tags:["No CommonJS","No Hard Maintenance"],sidebar_class_name:"red"},l=void 0,c={unversionedId:"plugins/migrate-to-typescript/rules/no-commonjs-dynamic-require",id:"plugins/migrate-to-typescript/rules/no-commonjs-dynamic-require",title:"no-commonjs-dynamic-require",description:"Rule Details",source:"@site/docs/plugins/migrate-to-typescript/rules/no-commonjs-dynamic-require.md",sourceDirName:"plugins/migrate-to-typescript/rules",slug:"/plugins/migrate-to-typescript/rules/no-commonjs-dynamic-require",permalink:"/eslint-plugin-migrate-to-typescript/docs/plugins/migrate-to-typescript/rules/no-commonjs-dynamic-require",draft:!1,tags:[{label:"No CommonJS",permalink:"/eslint-plugin-migrate-to-typescript/docs/tags/no-common-js"},{label:"No Hard Maintenance",permalink:"/eslint-plugin-migrate-to-typescript/docs/tags/no-hard-maintenance"}],version:"current",frontMatter:{id:"no-commonjs-dynamic-require",title:"no-commonjs-dynamic-require",tags:["No CommonJS","No Hard Maintenance"],sidebar_class_name:"red"},sidebar:"migrate2typescriptSidebar",previous:{title:"Introduction",permalink:"/eslint-plugin-migrate-to-typescript/docs/plugins/migrate-to-typescript/rules/"},next:{title:"no-commonjs-exports",permalink:"/eslint-plugin-migrate-to-typescript/docs/plugins/migrate-to-typescript/rules/no-commonjs-exports"}},u={},p=[{value:"Rule Details",id:"rule-details",level:2},{value:"When to use it",id:"when-to-use-it",level:3},{value:"When <em>not</em> to use it",id:"when-not-to-use-it",level:3},{value:"Credit \ud83d\ude4f",id:"credit-",level:4}],m={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"rule-details"},"Rule Details"),(0,o.kt)("p",null,"The require method from ",(0,o.kt)("inlineCode",{parentName:"p"},"commonjs")," is used to import modules from different files. Unlike the ES6 import syntax, it can be given expressions that will be resolved at runtime. While this is sometimes necessary and useful, in most cases it isn't. Using expressions (for instance, concatenating a path and variable) as the argument makes it harder for tools to do static code analysis, or to find where in the codebase a module is used."),(0,o.kt)("p",null,"This rule checks every call to require() that uses expressions for the module name argument."),(0,o.kt)("p",null,"Examples of ",(0,o.kt)("strong",{parentName:"p"},"correct")," code for this rule \u2705"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'// correct \u2705\nrequire("../name");\nrequire(`../name`);\n')),(0,o.kt)("p",null,"Examples of ",(0,o.kt)("strong",{parentName:"p"},"incorrect")," code for this rule \u26d4\ufe0f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'// incorrect \u26d4\ufe0f\nrequire(name);\nrequire("../" + name);\nrequire(`../${name}`);\nrequire(name());\n')),(0,o.kt)("h3",{id:"when-to-use-it"},"When to use it"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use for every project that works with modules and consistently being develop and maintained.")),(0,o.kt)("h3",{id:"when-not-to-use-it"},"When ",(0,o.kt)("em",{parentName:"h3"},"not")," to use it"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When writing specific script that should not execute often.")),(0,o.kt)("h4",{id:"credit-"},"Credit \ud83d\ude4f"),(0,o.kt)("sup",null,(0,o.kt)("p",null,"Inspired with \ud83d\udc9c ","\xa0",(0,o.kt)("a",{parentName:"p",href:"https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-dynamic-require.md"},"from eslint-plugin-import"))))}d.isMDXComponent=!0}}]);