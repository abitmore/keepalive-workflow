parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"YOqM":[function(require,module,exports) {
function e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function t(t){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?e(Object(n),!0).forEach(function(e){r(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const{spawn:o}=require("child_process"),n=(e,r=[],n={})=>new Promise((c,i)=>{let u="";const s=t({},n);s.stdio||Object.assign(s,{stdio:["inherit","inherit","inherit"]});const a=o(e,r,s);a.stdout&&a.stdout.on("data",function(e){u+=e.toString()}),a.on("close",e=>0!==e?i({code:e,outputData:u}):c({code:e,outputData:u})),a.on("error",()=>i({code:1,outputData:u}))});module.exports={execute:n};
},{}],"I9BA":[function(require,module,exports) {
const{execute:t}=require("./util"),e=async(e,i,o,a,r=50)=>new Promise(async(n,c)=>{try{const{outputData:p}=await t("git",["--no-pager","log","-1","--format=%ct"],{encoding:"utf8",stdio:["pipe","pipe","pipe"]}),m=new Date(1e3*parseInt(p,10));Math.round((new Date-m)/864e5)>r?(await t("git",["config","--global","user.email",o]),await t("git",["remote","set-url","origin",`https://${e}@github.com/${process.env.GITHUB_REPOSITORY}.git`]),await t("git",["config","--global","user.name",i]),await t("git",["commit","--allow-empty","-m",`"${a}"`]),n("Dummy commit created to keep the repository active...")):n("Nothing to do...")}catch(g){c(g.toString())}});module.exports={KeepAliveWorkflow:e};
},{"./util":"YOqM"}],"ONtA":[function(require,module,exports) {
"use strict";function e(e){return null==e?"":"string"==typeof e||e instanceof String?e:JSON.stringify(e)}function t(e){return Object.keys(e).length?{title:e.title,line:e.startLine,endLine:e.endLine,col:e.startColumn,endColumn:e.endColumn}:{}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.toCommandProperties=exports.toCommandValue=void 0,exports.toCommandValue=e,exports.toCommandProperties=t;
},{}],"Y3tv":[function(require,module,exports) {
"use strict";var e=this&&this.__createBinding||(Object.create?function(e,t,r,s){void 0===s&&(s=r),Object.defineProperty(e,s,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,s){void 0===s&&(s=r),e[s]=t[r]}),t=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(r){if(r&&r.__esModule)return r;var s={};if(null!=r)for(var i in r)"default"!==i&&Object.hasOwnProperty.call(r,i)&&e(s,r,i);return t(s,r),s};Object.defineProperty(exports,"__esModule",{value:!0}),exports.issue=exports.issueCommand=void 0;const s=r(require("os")),i=require("./utils");function n(e,t,r){const i=new u(e,t,r);process.stdout.write(i.toString()+s.EOL)}function o(e,t=""){n(e,{},t)}exports.issueCommand=n,exports.issue=o;const c="::";class u{constructor(e,t,r){e||(e="missing.command"),this.command=e,this.properties=t,this.message=r}toString(){let e=c+this.command;if(this.properties&&Object.keys(this.properties).length>0){e+=" ";let t=!0;for(const r in this.properties)if(this.properties.hasOwnProperty(r)){const s=this.properties[r];s&&(t?t=!1:e+=",",e+=`${r}=${p(s)}`)}}return e+=`${c}${a(this.message)}`}}function a(e){return i.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function p(e){return i.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}
},{"./utils":"ONtA"}],"JPy4":[function(require,module,exports) {
"use strict";var e=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),t=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),n=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var r={};if(null!=n)for(var i in n)"default"!==i&&Object.hasOwnProperty.call(n,i)&&e(r,n,i);return t(r,n),r};Object.defineProperty(exports,"__esModule",{value:!0}),exports.issueCommand=void 0;const r=n(require("fs")),i=n(require("os")),o=require("./utils");function u(e,t){const n=process.env[`GITHUB_${e}`];if(!n)throw new Error(`Unable to find environment variable for file command ${e}`);if(!r.existsSync(n))throw new Error(`Missing file at path: ${n}`);r.appendFileSync(n,`${o.toCommandValue(t)}${i.EOL}`,{encoding:"utf8"})}exports.issueCommand=u;
},{"./utils":"ONtA"}],"FTVr":[function(require,module,exports) {
"use strict";var e=this&&this.__createBinding||(Object.create?function(e,t,o,r){void 0===r&&(r=o),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[o]}})}:function(e,t,o,r){void 0===r&&(r=o),e[r]=t[o]}),t=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(o){if(o&&o.__esModule)return o;var r={};if(null!=o)for(var n in o)"default"!==n&&Object.hasOwnProperty.call(o,n)&&e(r,o,n);return t(r,o),r},r=this&&this.__awaiter||function(e,t,o,r){return new(o||(o=Promise))(function(n,s){function i(e){try{p(r.next(e))}catch(t){s(t)}}function u(e){try{p(r.throw(e))}catch(t){s(t)}}function p(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o(function(e){e(t)})).then(i,u)}p((r=r.apply(e,t||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getState=exports.saveState=exports.group=exports.endGroup=exports.startGroup=exports.info=exports.notice=exports.warning=exports.error=exports.debug=exports.isDebug=exports.setFailed=exports.setCommandEcho=exports.setOutput=exports.getBooleanInput=exports.getMultilineInput=exports.getInput=exports.addPath=exports.setSecret=exports.exportVariable=exports.ExitCode=void 0;const n=require("./command"),s=require("./file-command"),i=require("./utils"),u=o(require("os")),p=o(require("path"));var a;function c(e,t){const o=i.toCommandValue(t);if(process.env[e]=o,process.env.GITHUB_ENV||""){const t="_GitHubActionsFileCommandDelimeter_",r=`${e}<<${t}${u.EOL}${o}${u.EOL}${t}`;s.issueCommand("ENV",r)}else n.issueCommand("set-env",{name:e},o)}function d(e){n.issueCommand("add-mask",{},e)}function f(e){process.env.GITHUB_PATH||""?s.issueCommand("PATH",e):n.issueCommand("add-path",{},e),process.env.PATH=`${e}${p.delimiter}${process.env.PATH}`}function l(e,t){const o=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!o)throw new Error(`Input required and not supplied: ${e}`);return t&&!1===t.trimWhitespace?o:o.trim()}function m(e,t){return l(e,t).split("\n").filter(e=>""!==e)}function x(e,t){const o=l(e,t);if(["true","True","TRUE"].includes(o))return!0;if(["false","False","FALSE"].includes(o))return!1;throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${e}\n`+"Support boolean input list: `true | True | TRUE | false | False | FALSE`")}function g(e,t){process.stdout.write(u.EOL),n.issueCommand("set-output",{name:e},t)}function v(e){n.issue("echo",e?"on":"off")}function h(e){process.exitCode=a.Failure,_(e)}function C(){return"1"===process.env.RUNNER_DEBUG}function E(e){n.issueCommand("debug",{},e)}function _(e,t={}){n.issueCommand("error",i.toCommandProperties(t),e instanceof Error?e.toString():e)}function b(e,t={}){n.issueCommand("warning",i.toCommandProperties(t),e instanceof Error?e.toString():e)}function S(e,t={}){n.issueCommand("notice",i.toCommandProperties(t),e instanceof Error?e.toString():e)}function P(e){process.stdout.write(e+u.EOL)}function w(e){n.issue("group",e)}function T(){n.issue("endgroup")}function O(e,t){return r(this,void 0,void 0,function*(){let o;w(e);try{o=yield t()}finally{T()}return o})}function $(e,t){n.issueCommand("save-state",{name:e},t)}function y(e){return process.env[`STATE_${e}`]||""}!function(e){e[e.Success=0]="Success",e[e.Failure=1]="Failure"}(a=exports.ExitCode||(exports.ExitCode={})),exports.exportVariable=c,exports.setSecret=d,exports.addPath=f,exports.getInput=l,exports.getMultilineInput=m,exports.getBooleanInput=x,exports.setOutput=g,exports.setCommandEcho=v,exports.setFailed=h,exports.isDebug=C,exports.debug=E,exports.error=_,exports.warning=b,exports.notice=S,exports.info=P,exports.startGroup=w,exports.endGroup=T,exports.group=O,exports.saveState=$,exports.getState=y;
},{"./command":"Y3tv","./file-command":"JPy4","./utils":"ONtA"}],"Focm":[function(require,module,exports) {
const{KeepAliveWorkflow:e}=require("./library"),t=require("@actions/core"),r=t.getInput("gh_token"),i=t.getInput("committer_username"),o=t.getInput("committer_email"),n=t.getInput("commit_message"),s=parseInt(t.getInput("time_elapsed"));e(r,i,o,n,s).then(e=>{t.info(e),process.exit(0)}).catch(e=>{t.error(e),process.exit(1)});
},{"./library":"I9BA","@actions/core":"FTVr"}]},{},["Focm"], null)