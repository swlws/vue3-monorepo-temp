import{u as e,a as t,e as r}from"./web-core.88e4d655.js";import{c as n}from"./element-plus.095c427e.js";const{getHttpBaseUrl:o}=e,a=o();var s={testGet:{url:`${a}/test`,method:"get"},testPost:{url:`${a}/test`,method:"post"},testDel:{url:`${a}/test`,method:"delete"},testPut:{url:`${a}/test`,method:"put"}},i=Object.freeze(Object.defineProperty({__proto__:null,default:s},Symbol.toStringTag,{value:"Module"}));const{getHttpBaseUrl:u}=e,c=u();var f={postOneAsyncFlow:{url:`${c}/v1/async/flow`,method:"post"},getOneAsyncFlowStatus:{url:`${c}/v1/async/flow/:id`,method:"get"},fileInfo:{url:`${c}/v1/async/flow/file/:id/size`,method:"get"},downFile:{url:`${c}/v1/async/flow/file/:id`,method:"get"}},l=Object.freeze(Object.defineProperty({__proto__:null,default:f},Symbol.toStringTag,{value:"Module"}));const{getHttpBaseUrl:p}=e,d=p();var h={startFile:{url:`${d}/v1/file/start`,method:"post"},processFile:{url:`${d}/v1/file/progress`,method:"get"},endFile:{url:`${d}/v1/file/end`,method:"blob"}},m=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"}));var g={uaaLogin:{url:"/api_power/uaa/oauth/user_token",method:"get"},changeUserPassword:{url:"/api_power/uaa/users/:user_id/password",method:"put"},refreshToken:{url:"/api_power/uaa/oauth/refresh_token",method:"post"}},v=Object.freeze(Object.defineProperty({__proto__:null,default:g},Symbol.toStringTag,{value:"Module"})),y={exports:{}},b={exports:{}},w=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}},j=w,x=Object.prototype.toString;function O(e){return"[object Array]"===x.call(e)}function E(e){return void 0===e}function S(e){return null!==e&&"object"==typeof e}function k(e){if("[object Object]"!==x.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function T(e){return"[object Function]"===x.call(e)}function A(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),O(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var N={isArray:O,isArrayBuffer:function(e){return"[object ArrayBuffer]"===x.call(e)},isBuffer:function(e){return null!==e&&!E(e)&&null!==e.constructor&&!E(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:S,isPlainObject:k,isUndefined:E,isDate:function(e){return"[object Date]"===x.call(e)},isFile:function(e){return"[object File]"===x.call(e)},isBlob:function(e){return"[object Blob]"===x.call(e)},isFunction:T,isStream:function(e){return S(e)&&T(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:A,merge:function e(){var t={};function r(r,n){k(t[n])&&k(r)?t[n]=e(t[n],r):k(r)?t[n]=e({},r):O(r)?t[n]=r.slice():t[n]=r}for(var n=0,o=arguments.length;n<o;n++)A(arguments[n],r);return t},extend:function(e,t,r){return A(t,(function(t,n){e[n]=r&&"function"==typeof t?j(t,r):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}},P=N;function C(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var R=function(e,t,r){if(!t)return e;var n;if(r)n=r(t);else if(P.isURLSearchParams(t))n=t.toString();else{var o=[];P.forEach(t,(function(e,t){null!=e&&(P.isArray(e)?t+="[]":e=[e],P.forEach(e,(function(e){P.isDate(e)?e=e.toISOString():P.isObject(e)&&(e=JSON.stringify(e)),o.push(C(t)+"="+C(e))})))})),n=o.join("&")}if(n){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e},_=N;function U(){this.handlers=[]}U.prototype.use=function(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1},U.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},U.prototype.forEach=function(e){_.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var B=U,L=N,q=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e},D=q,F=function(e,t,r,n,o){var a=new Error(e);return D(a,t,r,n,o)},z=F,M=N,$=M.isStandardBrowserEnv()?{write:function(e,t,r,n,o,a){var s=[];s.push(e+"="+encodeURIComponent(t)),M.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),M.isString(n)&&s.push("path="+n),M.isString(o)&&s.push("domain="+o),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},H=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},J=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},I=N,V=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],X=N,G=X.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function n(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=n(window.location.href),function(t){var r=X.isString(t)?n(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0},W=N,K=function(e,t,r){var n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(z("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)},Z=$,Q=R,Y=function(e,t){return e&&!H(t)?J(e,t):t},ee=function(e){var t,r,n,o={};return e?(I.forEach(e.split("\n"),(function(e){if(n=e.indexOf(":"),t=I.trim(e.substr(0,n)).toLowerCase(),r=I.trim(e.substr(n+1)),t){if(o[t]&&V.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([r]):o[t]?o[t]+", "+r:r}})),o):o},te=G,re=F,ne=function(e){return new Promise((function(t,r){var n=e.data,o=e.headers,a=e.responseType;W.isFormData(n)&&delete o["Content-Type"];var s=new XMLHttpRequest;if(e.auth){var i=e.auth.username||"",u=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(i+":"+u)}var c=Y(e.baseURL,e.url);function f(){if(s){var n="getAllResponseHeaders"in s?ee(s.getAllResponseHeaders()):null,o={data:a&&"text"!==a&&"json"!==a?s.response:s.responseText,status:s.status,statusText:s.statusText,headers:n,config:e,request:s};K(t,r,o),s=null}}if(s.open(e.method.toUpperCase(),Q(c,e.params,e.paramsSerializer),!0),s.timeout=e.timeout,"onloadend"in s?s.onloadend=f:s.onreadystatechange=function(){s&&4===s.readyState&&(0!==s.status||s.responseURL&&0===s.responseURL.indexOf("file:"))&&setTimeout(f)},s.onabort=function(){s&&(r(re("Request aborted",e,"ECONNABORTED",s)),s=null)},s.onerror=function(){r(re("Network Error",e,null,s)),s=null},s.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(re(t,e,e.transitional&&e.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",s)),s=null},W.isStandardBrowserEnv()){var l=(e.withCredentials||te(c))&&e.xsrfCookieName?Z.read(e.xsrfCookieName):void 0;l&&(o[e.xsrfHeaderName]=l)}"setRequestHeader"in s&&W.forEach(o,(function(e,t){void 0===n&&"content-type"===t.toLowerCase()?delete o[t]:s.setRequestHeader(t,e)})),W.isUndefined(e.withCredentials)||(s.withCredentials=!!e.withCredentials),a&&"json"!==a&&(s.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&s.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&s.upload&&s.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){s&&(s.abort(),r(e),s=null)})),n||(n=null),s.send(n)}))},oe=N,ae=function(e,t){L.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))},se=q,ie={"Content-Type":"application/x-www-form-urlencoded"};function ue(e,t){!oe.isUndefined(e)&&oe.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var ce,fe={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(ce=ne),ce),transformRequest:[function(e,t){return ae(t,"Accept"),ae(t,"Content-Type"),oe.isFormData(e)||oe.isArrayBuffer(e)||oe.isBuffer(e)||oe.isStream(e)||oe.isFile(e)||oe.isBlob(e)?e:oe.isArrayBufferView(e)?e.buffer:oe.isURLSearchParams(e)?(ue(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):oe.isObject(e)||t&&"application/json"===t["Content-Type"]?(ue(t,"application/json"),function(e,t,r){if(oe.isString(e))try{return(t||JSON.parse)(e),oe.trim(e)}catch(n){if("SyntaxError"!==n.name)throw n}return(r||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional,r=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,o=!r&&"json"===this.responseType;if(o||n&&oe.isString(e)&&e.length)try{return JSON.parse(e)}catch(a){if(o){if("SyntaxError"===a.name)throw se(a,this,"E_JSON_PARSE");throw a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};fe.headers={common:{Accept:"application/json, text/plain, */*"}},oe.forEach(["delete","get","head"],(function(e){fe.headers[e]={}})),oe.forEach(["post","put","patch"],(function(e){fe.headers[e]=oe.merge(ie)}));var le=fe,pe=N,de=le,he=function(e){return!(!e||!e.__CANCEL__)},me=N,ge=function(e,t,r){var n=this||de;return pe.forEach(r,(function(r){e=r.call(n,e,t)})),e},ve=he,ye=le;function be(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var we=N,je=function(e,t){t=t||{};var r={},n=["url","method","data"],o=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function i(e,t){return we.isPlainObject(e)&&we.isPlainObject(t)?we.merge(e,t):we.isPlainObject(t)?we.merge({},t):we.isArray(t)?t.slice():t}function u(n){we.isUndefined(t[n])?we.isUndefined(e[n])||(r[n]=i(void 0,e[n])):r[n]=i(e[n],t[n])}we.forEach(n,(function(e){we.isUndefined(t[e])||(r[e]=i(void 0,t[e]))})),we.forEach(o,u),we.forEach(a,(function(n){we.isUndefined(t[n])?we.isUndefined(e[n])||(r[n]=i(void 0,e[n])):r[n]=i(void 0,t[n])})),we.forEach(s,(function(n){n in t?r[n]=i(e[n],t[n]):n in e&&(r[n]=i(void 0,e[n]))}));var c=n.concat(o).concat(a).concat(s),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===c.indexOf(e)}));return we.forEach(f,u),r};var xe={name:"axios",version:"0.21.4",description:"Promise based HTTP client for the browser and node.js",main:"index.js",scripts:{test:"grunt test",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",fix:"eslint --fix lib/**/*.js"},repository:{type:"git",url:"https://github.com/axios/axios.git"},keywords:["xhr","http","ajax","promise","node"],author:"Matt Zabriskie",license:"MIT",bugs:{url:"https://github.com/axios/axios/issues"},homepage:"https://axios-http.com",devDependencies:{coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},browser:{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},jsdelivr:"dist/axios.min.js",unpkg:"dist/axios.min.js",typings:"./index.d.ts",dependencies:{"follow-redirects":"^1.14.0"},bundlesize:[{path:"./dist/axios.min.js",threshold:"5kB"}]},Oe={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){Oe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}}));var Ee={},Se=xe.version.split(".");function ke(e,t){for(var r=t?t.split("."):Se,n=e.split("."),o=0;o<3;o++){if(r[o]>n[o])return!0;if(r[o]<n[o])return!1}return!1}Oe.transitional=function(e,t,r){var n=t&&ke(t);return function(o,a,s){if(!1===e)throw new Error(function(e,t){return"[Axios v"+xe.version+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}(a," has been removed in "+t));return n&&!Ee[a]&&(Ee[a]=!0),!e||e(o,a,s)}};var Te=N,Ae=R,Ne=B,Pe=function(e){return be(e),e.headers=e.headers||{},e.data=ge.call(e,e.data,e.headers,e.transformRequest),e.headers=me.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),me.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||ye.adapter)(e).then((function(t){return be(e),t.data=ge.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return ve(t)||(be(e),t&&t.response&&(t.response.data=ge.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},Ce=je,Re={isOlderVersion:ke,assertOptions:function(e,t,r){if("object"!=typeof e)throw new TypeError("options must be an object");for(var n=Object.keys(e),o=n.length;o-- >0;){var a=n[o],s=t[a];if(s){var i=e[a],u=void 0===i||s(i,a,e);if(!0!==u)throw new TypeError("option "+a+" must be "+u)}else if(!0!==r)throw Error("Unknown option "+a)}},validators:Oe},_e=Re.validators;function Ue(e){this.defaults=e,this.interceptors={request:new Ne,response:new Ne}}Ue.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=Ce(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;void 0!==t&&Re.assertOptions(t,{silentJSONParsing:_e.transitional(_e.boolean,"1.0.0"),forcedJSONParsing:_e.transitional(_e.boolean,"1.0.0"),clarifyTimeoutError:_e.transitional(_e.boolean,"1.0.0")},!1);var r=[],n=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(n=n&&t.synchronous,r.unshift(t.fulfilled,t.rejected))}));var o,a=[];if(this.interceptors.response.forEach((function(e){a.push(e.fulfilled,e.rejected)})),!n){var s=[Pe,void 0];for(Array.prototype.unshift.apply(s,r),s=s.concat(a),o=Promise.resolve(e);s.length;)o=o.then(s.shift(),s.shift());return o}for(var i=e;r.length;){var u=r.shift(),c=r.shift();try{i=u(i)}catch(f){c(f);break}}try{o=Pe(i)}catch(f){return Promise.reject(f)}for(;a.length;)o=o.then(a.shift(),a.shift());return o},Ue.prototype.getUri=function(e){return e=Ce(this.defaults,e),Ae(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},Te.forEach(["delete","get","head","options"],(function(e){Ue.prototype[e]=function(t,r){return this.request(Ce(r||{},{method:e,url:t,data:(r||{}).data}))}})),Te.forEach(["post","put","patch"],(function(e){Ue.prototype[e]=function(t,r,n){return this.request(Ce(n||{},{method:e,url:t,data:r}))}}));var Be=Ue;function Le(e){this.message=e}Le.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},Le.prototype.__CANCEL__=!0;var qe=Le,De=qe;function Fe(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new De(e),t(r.reason))}))}Fe.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},Fe.source=function(){var e;return{token:new Fe((function(t){e=t})),cancel:e}};var ze=Fe,Me=N,$e=w,He=Be,Je=je;function Ie(e){var t=new He(e),r=$e(He.prototype.request,t);return Me.extend(r,He.prototype,t),Me.extend(r,t),r}var Ve=Ie(le);Ve.Axios=He,Ve.create=function(e){return Ie(Je(Ve.defaults,e))},Ve.Cancel=qe,Ve.CancelToken=ze,Ve.isCancel=he,Ve.all=function(e){return Promise.all(e)},Ve.spread=function(e){return function(t){return e.apply(null,t)}},Ve.isAxiosError=function(e){return"object"==typeof e&&!0===e.isAxiosError},b.exports=Ve,b.exports.default=Ve;var Xe=b.exports;!function(e,t){function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=r(t);function o(e){return"[object Object]"===Object.prototype.toString.call(e)}
/*! *****************************************************************************
        Copyright (c) Microsoft Corporation.
    
        Permission to use, copy, modify, and/or distribute this software for any
        purpose with or without fee is hereby granted.
    
        THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
        REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
        AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
        INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
        LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
        OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
        PERFORMANCE OF THIS SOFTWARE.
        ***************************************************************************** */var a=function(){return a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)};function s(e){return Promise.reject(e)}function i(e){var t=e.url,r=void 0===t?"":t,n=e.params,o=void 0===n?{}:n,s=e.data,i=void 0===s?{}:s,u=e.method;if(FormData&&i instanceof FormData)return e;var c=a(a({},o),i);return e.url=r.replace(/:([^/\d]+)/g,(function(e,t){var r=c[t];return Reflect.deleteProperty(c,t),r})),"get"===u?(e.params=a({},c),e.data={}):(e.params={},e.data=a({},c)),e}function u(e){var t=e.config.responseType,r=e.data;return"json"===t?r:e}var c=null;function f(e){if(null!==c)return c;var t={baseURL:"",timeout:e.timeout||1e4,headers:{"Content-Type":"application/json"},responseType:"json"};return c=n.default.create(t)}function l(e){var t,r,n=f(e),o=null===(t=e.interceptor)||void 0===t?void 0:t.request;"function"==typeof o&&n.interceptors.request.use(o,s);var c=null===(r=e.interceptor)||void 0===r?void 0:r.response;return"function"==typeof c&&n.interceptors.response.use(c,s),n.interceptors.request.use(i,s),n.interceptors.response.use(u,s),{instance:n,head:function(e,t,r){return n.head(e,a({params:t},r))},post:function(e,t,r){return n.post(e,t,r)},delete:function(e,t,r){return n.delete(e,a({data:t},r))},put:function(e,t,r){return n.put(e,t,r)},get:function(e,t,r){return n.get(e,a({params:t},r))},patch:function(e,t,r){return n.put(e,t,r)},blob:function(e,t,r){return n.get(e,a(a({params:t},r),{responseType:"blob"}))}}}var p=null;function d(e){if(!o(e))return{};var t={};return Object.keys(e).forEach((function(r){t[r]={};var n=e[r];Object.keys(n).forEach((function(e){var o=n[e],a=o.url,s=(o.method||"").toLowerCase(),i=p[s];i&&(t[r][e]=i.bind(null,a))}))})),t}function h(e){return p=p||l(e),d(e.modules)}e.createApis=h,Object.defineProperty(e,"__esModule",{value:!0})}(y.exports,Xe);const{getAppName:Ge}=e;const{getAppName:We}=e;let Ke,Ze;function Qe(e){if(e.headers.Authorization)return e;try{Ke=Ke||We();const{getValue:r}=t(Ke),n=(r("token")||{}).access_token;n&&(e.headers.Authorization=`Bearer ${n}`)}catch(n){r(n)}return e}function Ye(e){e.headers["x-refresh-token"]&&t(Ge());const{config:{responseType:r},data:n}=e;if("json"===r){const e=n.r0;[8010].includes(e)&&(clearTimeout(Ze),Ze=setTimeout((()=>{window.location.hash="/"}),300))}return e}let et=new Map;function tt(e,t){if(et.has(e))return et.get(e)||{};let r=(n=function(e){let t={};return Object.keys(e).forEach((r=>{const n=r.split("/"),o=n[n.length-1].replace(".ts","");if(!o)return;const a=e[r].default;a&&(t[o]=a)})),t}(t()),y.exports.createApis({modules:n,timeout:6e4,interceptor:{request:Qe,response:Ye}}));var n;return et.set(e,r),r}function rt(){return tt("cm",(()=>({"./common/asyncflow.ts":l,"./common/file.ts":m,"./common/token.ts":v})))}function nt(){return tt("demo",(()=>({"./demo/test.ts":i})))}export{nt as a,rt as u};