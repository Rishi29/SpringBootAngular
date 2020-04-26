!function(e){
var t={}
function a(i){
if(t[i]){
return t[i].exports
}
var o=t[i]={
i:i,
l:!1,
exports:{}
}
return e[i].call(o.exports,o,o.exports,a),o.l=!0,o.exports
}
a.m=e,a.c=t,a.d=function(e,t,i){
a.o(e,t)||Object.defineProperty(e,t,{
enumerable:!0,
get:i
})
},a.r=function(e){
"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{
value:"Module"
}),Object.defineProperty(e,"__esModule",{
value:!0
})
},a.t=function(e,t){
if(1&t&&(e=a(e)),8&t){
return e
}
if(4&t&&"object"==typeof e&&e&&e.__esModule){
return e
}
var i=Object.create(null)
if(a.r(i),Object.defineProperty(i,"default",{
enumerable:!0,
value:e
}),2&t&&"string"!=typeof e){
for(var o in e){
a.d(i,o,function(t){
return e[t]
}.bind(null,o))
}
}
return i
},a.n=function(e){
var t=e&&e.__esModule?function(){
return e.default
}:function(){
return e
}
return a.d(t,"a",t),t
},a.o=function(e,t){
return Object.prototype.hasOwnProperty.call(e,t)
},a.p="",a(a.s=17)
}([function(e,t,a){
"use strict"
;(function(e){
const a=Object.freeze({})
function i(e){
return null==e
}
function o(e){
return null!=e
}
function s(e){
return!0===e
}
function n(e){
return"string"==typeof e||"number"==typeof e||"symbol"==typeof e||"boolean"==typeof e
}
function r(e){
return null!==e&&"object"==typeof e
}
const l=Object.prototype.toString
function c(e){
return l.call(e).slice(8,-1)
}
function u(e){
return"[object Object]"===l.call(e)
}
function d(e){
return"[object RegExp]"===l.call(e)
}
function p(e){
const t=parseFloat(String(e))
return t>=0&&Math.floor(t)===t&&isFinite(e)
}
function g(e){
return o(e)&&"function"==typeof e.then&&"function"==typeof e.catch
}
function m(e){
return null==e?"":Array.isArray(e)||u(e)&&e.toString===l?JSON.stringify(e,null,2):String(e)
}
function k(e){
const t=parseFloat(e)
return isNaN(t)?e:t
}
function h(e,t){
const a=Object.create(null),i=e.split(",")
for(let e=0;e<i.length;e++){
a[i[e]]=!0
}
return t?e=>a[e.toLowerCase()]:e=>a[e]
}
const b=h("slot,component",!0),v=h("key,ref,slot,slot-scope,is")
function y(e,t){
if(e.length){
const a=e.indexOf(t)
if(a>-1){
return e.splice(a,1)
}
}
}
const f=Object.prototype.hasOwnProperty
function j(e,t){
return f.call(e,t)
}
function w(e){
const t=Object.create(null)
return function(a){
return t[a]||(t[a]=e(a))
}
}
const A=/-(\w)/g,z=w(e=>e.replace(A,(e,t)=>t?t.toUpperCase():"")),S=w(e=>e.charAt(0).toUpperCase()+e.slice(1)),B=/\B([A-Z])/g,_=w(e=>e.replace(B,"-$1").toLowerCase())
const T=Function.prototype.bind?function(e,t){
return e.bind(t)
}:function(e,t){
function a(a){
const i=arguments.length
return i?i>1?e.apply(t,arguments):e.call(t,a):e.call(t)
}
return a._length=e.length,a
}
function x(e,t){
t=t||0
let a=e.length-t
const i=new Array(a)
for(;a--;){
i[a]=e[a+t]
}
return i
}
function O(e,t){
for(const a in t){
e[a]=t[a]
}
return e
}
function C(e){
const t={}
for(let a=0;a<e.length;a++){
e[a]&&O(t,e[a])
}
return t
}
function P(e,t,a){}
const $=(e,t,a)=>!1,W=e=>e
function L(e,t){
if(e===t){
return!0
}
const a=r(e),i=r(t)
if(!a||!i){
return!a&&!i&&String(e)===String(t)
}
try{
const a=Array.isArray(e),i=Array.isArray(t)
if(a&&i){
return e.length===t.length&&e.every((e,a)=>L(e,t[a]))
}
if(e instanceof Date&&t instanceof Date){
return e.getTime()===t.getTime()
}
if(a||i){
return!1
}
{
const a=Object.keys(e),i=Object.keys(t)
return a.length===i.length&&a.every(a=>L(e[a],t[a]))
}
}catch(e){
return!1
}
}
function N(e,t){
for(let a=0;a<e.length;a++){
if(L(e[a],t)){
return a
}
}
return-1
}
function q(e){
let t=!1
return function(){
t||(t=!0,e.apply(this,arguments))
}
}
const R=["component","directive","filter"],E=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"]
var D={
optionMergeStrategies:Object.create(null),
silent:!1,
productionTip:!0,
devtools:!0,
performance:!1,
errorHandler:null,
warnHandler:null,
ignoredElements:[],
keyCodes:Object.create(null),
isReservedTag:$,
isReservedAttr:$,
isUnknownElement:$,
getTagNamespace:P,
parsePlatformTagName:W,
mustUseProp:$,
async:!0,
_lifecycleHooks:E
}
const U=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/
function M(e){
const t=(e+"").charCodeAt(0)
return 36===t||95===t
}
function V(e,t,a,i){
Object.defineProperty(e,t,{
value:a,
enumerable:!!i,
writable:!0,
configurable:!0
})
}
const I=new RegExp(`[^${U.source}.$_\\d]`)
const G="__proto__"in{},F="undefined"!=typeof window,H="undefined"!=typeof WXEnvironment&&!!WXEnvironment.platform,K=H&&WXEnvironment.platform.toLowerCase(),J=F&&window.navigator.userAgent.toLowerCase(),Y=J&&/msie|trident/.test(J),Z=J&&J.indexOf("msie 9.0")>0,X=J&&J.indexOf("edge/")>0,Q=(J&&J.indexOf("android"),
J&&/iphone|ipad|ipod|ios/.test(J)||"ios"===K),ee=(J&&/chrome\/\d+/.test(J),
J&&/phantomjs/.test(J),
J&&J.match(/firefox\/(\d+)/)),te={}.watch
let ae,ie=!1
if(F){
try{
const e={}
Object.defineProperty(e,"passive",{
get(){
ie=!0
}
}),window.addEventListener("test-passive",null,e)
}catch(e){}
}
const oe=()=>(void 0===ae&&(ae=!F&&!H&&"undefined"!=typeof global&&(global.process&&"server"===global.process.env.VUE_ENV)),
ae),se=F&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__
function ne(e){
return"function"==typeof e&&/native code/.test(e.toString())
}
const re="undefined"!=typeof Symbol&&ne(Symbol)&&"undefined"!=typeof Reflect&&ne(Reflect.ownKeys)
let le
le="undefined"!=typeof Set&&ne(Set)?Set:class{
constructor(){
this.set=Object.create(null)
}
has(e){
return!0===this.set[e]
}
add(e){
this.set[e]=!0
}
clear(){
this.set=Object.create(null)
}
}
let ce=P,ue=P,de=P,pe=P
{
const e="undefined"!=typeof console,t=/(?:^|[-_])(\w)/g,a=e=>e.replace(t,e=>e.toUpperCase()).replace(/[-_]/g,"")
ce=(t,a)=>{
const i=a?de(a):""
D.warnHandler?D.warnHandler.call(null,t,a,i):e&&D.silent
},ue=(t,a)=>{
e&&D.silent
},pe=(e,t)=>{
if(e.$root===e){
return"<Root>"
}
const i="function"==typeof e&&null!=e.cid?e.options:e._isVue?e.$options||e.constructor.options:e
let o=i.name||i._componentTag
const s=i.__file
if(!o&&s){
const e=s.match(/([^/\\]+)\.vue$/)
o=e&&e[1]
}
return(o?`<${a(o)}>`:"<Anonymous>")+(s&&!1!==t?` at ${s}`:"")
}
const i=(e,t)=>{
let a=""
for(;t;){
t%2==1&&(a+=e),t>1&&(e+=e),t>>=1
}
return a
}
de=e=>{
if(e._isVue&&e.$parent){
const t=[]
let a=0
for(;e;){
if(t.length>0){
const i=t[t.length-1]
if(i.constructor===e.constructor){
a++,e=e.$parent
continue
}
a>0&&(t[t.length-1]=[i,a],a=0)
}
t.push(e),e=e.$parent
}
return"\n\nfound in\n\n"+t.map((e,t)=>`${0===t?"---\x3e ":i(" ",5+2*t)}${Array.isArray(e)?`${pe(e[0])}... (${e[1]} recursive calls)`:pe(e)}`).join("\n")
}
return`\n\n(found in ${pe(e)})`
}
}
let ge=0
class me{
constructor(){
this.id=ge++,this.subs=[]
}
addSub(e){
this.subs.push(e)
}
removeSub(e){
y(this.subs,e)
}
depend(){
me.target&&me.target.addDep(this)
}
notify(){
const e=this.subs.slice()
D.async||e.sort((e,t)=>e.id-t.id)
for(let t=0,a=e.length;t<a;t++){
e[t].update()
}
}
}
me.target=null
const ke=[]
function he(e){
ke.push(e),me.target=e
}
function be(){
ke.pop(),me.target=ke[ke.length-1]
}
class ve{
constructor(e,t,a,i,o,s,n,r){
this.tag=e,this.data=t,this.children=a,this.text=i,
this.elm=o,this.ns=void 0,this.context=s,
this.fnContext=void 0,this.fnOptions=void 0,
this.fnScopeId=void 0,this.key=t&&t.key,
this.componentOptions=n,this.componentInstance=void 0,
this.parent=void 0,this.raw=!1,
this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,
this.isCloned=!1,this.isOnce=!1,
this.asyncFactory=r,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1
}
get child(){
return this.componentInstance
}
}
const ye=(e="")=>{
const t=new ve
return t.text=e,t.isComment=!0,t
}
function fe(e){
return new ve(void 0,void 0,void 0,String(e))
}
function je(e){
const t=new ve(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory)
return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,
t.fnOptions=e.fnOptions,
t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,
t
}
const we=Array.prototype,Ae=Object.create(we)
;["push","pop","shift","unshift","splice","sort","reverse"].forEach((function(e){
const t=we[e]
V(Ae,e,(function(...a){
const i=t.apply(this,a),o=this.__ob__
let s
switch(e){
case"push":
case"unshift":
s=a
break
case"splice":
s=a.slice(2)
}
return s&&o.observeArray(s),o.dep.notify(),i
}))
}))
const ze=Object.getOwnPropertyNames(Ae)
let Se=!0
function Be(e){
Se=e
}
class _e{
constructor(e){
this.value=e,this.dep=new me,this.vmCount=0,V(e,"__ob__",this),Array.isArray(e)?(G?function(e,t){
e.__proto__=t
}(e,Ae):function(e,t,a){
for(let i=0,o=a.length;i<o;i++){
const o=a[i]
V(e,o,t[o])
}
}(e,Ae,ze),this.observeArray(e)):this.walk(e)
}
walk(e){
const t=Object.keys(e)
for(let a=0;a<t.length;a++){
xe(e,t[a])
}
}
observeArray(e){
for(let t=0,a=e.length;t<a;t++){
Te(e[t])
}
}
}
function Te(e,t){
if(!r(e)||e instanceof ve){
return
}
let a
return j(e,"__ob__")&&e.__ob__ instanceof _e?a=e.__ob__:Se&&!oe()&&(Array.isArray(e)||u(e))&&Object.isExtensible(e)&&!e._isVue&&(a=new _e(e)),
t&&a&&a.vmCount++,
a
}
function xe(e,t,a,i,o){
const s=new me,n=Object.getOwnPropertyDescriptor(e,t)
if(n&&!1===n.configurable){
return
}
const r=n&&n.get,l=n&&n.set
r&&!l||2!==arguments.length||(a=e[t])
let c=!o&&Te(a)
Object.defineProperty(e,t,{
enumerable:!0,
configurable:!0,
get:function(){
const t=r?r.call(e):a
return me.target&&(s.depend(),c&&(c.dep.depend(),Array.isArray(t)&&Pe(t))),t
},
set:function(t){
const n=r?r.call(e):a
t===n||t!=t&&n!=n||(i&&i(),r&&!l||(l?l.call(e,t):a=t,c=!o&&Te(t),s.notify()))
}
})
}
function Oe(e,t,a){
if((i(e)||n(e))&&ce(`Cannot set reactive property on undefined, null, or primitive value: ${e}`),
Array.isArray(e)&&p(t)){
return e.length=Math.max(e.length,t),e.splice(t,1,a),a
}
if(t in e&&!(t in Object.prototype)){
return e[t]=a,a
}
const o=e.__ob__
return e._isVue||o&&o.vmCount?(ce("Avoid adding reactive properties to a Vue instance or its root $data at runtime - declare it upfront in the data option."),
a):o?(xe(o.value,t,a),
o.dep.notify(),a):(e[t]=a,a)
}
function Ce(e,t){
if((i(e)||n(e))&&ce(`Cannot delete reactive property on undefined, null, or primitive value: ${e}`),
Array.isArray(e)&&p(t)){
return void e.splice(t,1)
}
const a=e.__ob__
e._isVue||a&&a.vmCount?ce("Avoid deleting properties on a Vue instance or its root $data - just set it to null."):j(e,t)&&(delete e[t],
a&&a.dep.notify())
}
function Pe(e){
for(let t,a=0,i=e.length;a<i;a++){
t=e[a],t&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&Pe(t)
}
}
const $e=D.optionMergeStrategies
function We(e,t){
if(!t){
return e
}
let a,i,o
const s=re?Reflect.ownKeys(t):Object.keys(t)
for(let n=0;n<s.length;n++){
a=s[n],"__ob__"!==a&&(i=e[a],o=t[a],j(e,a)?i!==o&&u(i)&&u(o)&&We(i,o):Oe(e,a,o))
}
return e
}
function Le(e,t,a){
return a?function(){
const i="function"==typeof t?t.call(a,a):t,o="function"==typeof e?e.call(a,a):e
return i?We(i,o):o
}:t?e?function(){
return We("function"==typeof t?t.call(this,this):t,"function"==typeof e?e.call(this,this):e)
}:t:e
}
function Ne(e,t){
const a=t?e?e.concat(t):Array.isArray(t)?t:[t]:e
return a?function(e){
const t=[]
for(let a=0;a<e.length;a++){
-1===t.indexOf(e[a])&&t.push(e[a])
}
return t
}(a):a
}
function qe(e,t,a,i){
const o=Object.create(e||null)
return t?(De(i,t,a),O(o,t)):o
}
$e.el=$e.propsData=function(e,t,a,i){
return a||ce(`option "${i}" can only be used during instance `+"creation with the `new` keyword."),
Re(e,t)
},$e.data=function(e,t,a){
return a?Le(e,t,a):t&&"function"!=typeof t?(ce('The "data" option should be a function that returns a per-instance value in component definitions.',a),
e):Le(e,t)
},E.forEach(e=>{
$e[e]=Ne
}),R.forEach((function(e){
$e[e+"s"]=qe
})),$e.watch=function(e,t,a,i){
if(e===te&&(e=void 0),t===te&&(t=void 0),!t){
return Object.create(e||null)
}
if(De(i,t,a),!e){
return t
}
const o={}
O(o,e)
for(const e in t){
let a=o[e]
const i=t[e]
a&&!Array.isArray(a)&&(a=[a]),o[e]=a?a.concat(i):Array.isArray(i)?i:[i]
}
return o
},$e.props=$e.methods=$e.inject=$e.computed=function(e,t,a,i){
if(t&&De(i,t,a),!e){
return t
}
const o=Object.create(null)
return O(o,e),t&&O(o,t),o
},$e.provide=Le
const Re=function(e,t){
return void 0===t?e:t
}
function Ee(e){
new RegExp(`^[a-zA-Z][\\-\\.0-9_${U.source}]*$`).test(e)||ce('Invalid component name: "'+e+'". Component names should conform to valid custom element name in html5 specification.'),
(b(e)||D.isReservedTag(e))&&ce("Do not use built-in or reserved HTML elements as component id: "+e)
}
function De(e,t,a){
u(t)||ce(`Invalid value for option "${e}": expected an Object, `+`but got ${c(t)}.`,a)
}
function Ue(e,t,a){
if(function(e){
for(const t in e.components){
Ee(t)
}
}(t),"function"==typeof t&&(t=t.options),function(e,t){
const a=e.props
if(!a){
return
}
const i={}
let o,s,n
if(Array.isArray(a)){
for(o=a.length;o--;){
s=a[o],"string"==typeof s?(n=z(s),i[n]={
type:null
}):ce("props must be strings when using array syntax.")
}
}else if(u(a)){
for(const e in a){
s=a[e],n=z(e),i[n]=u(s)?s:{
type:s
}
}
}else{
ce('Invalid value for option "props": expected an Array or an Object, '+`but got ${c(a)}.`,t)
}
e.props=i
}(t,a),function(e,t){
const a=e.inject
if(!a){
return
}
const i=e.inject={}
if(Array.isArray(a)){
for(let e=0;e<a.length;e++){
i[a[e]]={
from:a[e]
}
}
}else if(u(a)){
for(const e in a){
const t=a[e]
i[e]=u(t)?O({
from:e
},t):{
from:t
}
}
}else{
ce('Invalid value for option "inject": expected an Array or an Object, '+`but got ${c(a)}.`,t)
}
}(t,a),function(e){
const t=e.directives
if(t){
for(const e in t){
const a=t[e]
"function"==typeof a&&(t[e]={
bind:a,
update:a
})
}
}
}(t),!t._base&&(t.extends&&(e=Ue(e,t.extends,a)),t.mixins)){
for(let i=0,o=t.mixins.length;i<o;i++){
e=Ue(e,t.mixins[i],a)
}
}
const i={}
let o
for(o in e){
s(o)
}
for(o in t){
j(e,o)||s(o)
}
function s(o){
const s=$e[o]||Re
i[o]=s(e[o],t[o],a,o)
}
return i
}
function Me(e,t,a,i){
if("string"!=typeof a){
return
}
const o=e[t]
if(j(o,a)){
return o[a]
}
const s=z(a)
if(j(o,s)){
return o[s]
}
const n=S(s)
if(j(o,n)){
return o[n]
}
const r=o[a]||o[s]||o[n]
return i&&!r&&ce("Failed to resolve "+t.slice(0,-1)+": "+a,e),r
}
function Ve(e,t,a,i){
const o=t[e],s=!j(a,e)
let n=a[e]
const l=Ke(Boolean,o.type)
if(l>-1){
if(s&&!j(o,"default")){
n=!1
}else if(""===n||n===_(e)){
const e=Ke(String,o.type)
;(e<0||l<e)&&(n=!0)
}
}
if(void 0===n){
n=function(e,t,a){
if(!j(t,"default")){
return
}
const i=t.default
r(i)&&ce('Invalid default value for prop "'+a+'": Props with type Object/Array must use a factory function to return the default value.',e)
if(e&&e.$options.propsData&&void 0===e.$options.propsData[a]&&void 0!==e._props[a]){
return e._props[a]
}
return"function"==typeof i&&"Function"!==Fe(t.type)?i.call(e):i
}(i,o,e)
const t=Se
Be(!0),Te(n),Be(t)
}
return function(e,t,a,i,o){
if(e.required&&o){
return void ce('Missing required prop: "'+t+'"',i)
}
if(null==a&&!e.required){
return
}
let s=e.type,n=!s||!0===s
const r=[]
if(s){
Array.isArray(s)||(s=[s])
for(let e=0;e<s.length&&!n;e++){
const t=Ge(a,s[e])
r.push(t.expectedType||""),n=t.valid
}
}
if(!n){
return void ce(function(e,t,a){
let i=`Invalid prop: type check failed for prop "${e}".`+` Expected ${a.map(S).join(", ")}`
const o=a[0],s=c(t),n=Je(t,o),r=Je(t,s)
1===a.length&&Ye(o)&&!function(...e){
return e.some(e=>"boolean"===e.toLowerCase())
}(o,s)&&(i+=` with value ${n}`)
i+=`, got ${s} `,Ye(s)&&(i+=`with value ${r}.`)
return i
}(t,a,r),i)
}
const l=e.validator
l&&(l(a)||ce('Invalid prop: custom validator check failed for prop "'+t+'".',i))
}(o,e,n,i,s),
n
}
const Ie=/^(String|Number|Boolean|Function|Symbol)$/
function Ge(e,t){
let a
const i=Fe(t)
if(Ie.test(i)){
const o=typeof e
a=o===i.toLowerCase(),a||"object"!==o||(a=e instanceof t)
}else{
a="Object"===i?u(e):"Array"===i?Array.isArray(e):e instanceof t
}
return{
valid:a,
expectedType:i
}
}
function Fe(e){
const t=e&&e.toString().match(/^\s*function (\w+)/)
return t?t[1]:""
}
function He(e,t){
return Fe(e)===Fe(t)
}
function Ke(e,t){
if(!Array.isArray(t)){
return He(t,e)?0:-1
}
for(let a=0,i=t.length;a<i;a++){
if(He(t[a],e)){
return a
}
}
return-1
}
function Je(e,t){
return"String"===t?`"${e}"`:"Number"===t?`${Number(e)}`:`${e}`
}
function Ye(e){
return["string","number","boolean"].some(t=>e.toLowerCase()===t)
}
function Ze(e,t,a){
he()
try{
if(t){
let i=t
for(;i=i.$parent;){
const o=i.$options.errorCaptured
if(o){
for(let s=0;s<o.length;s++){
try{
if(!1===o[s].call(i,e,t,a)){
return
}
}catch(e){
Qe(e,i,"errorCaptured hook")
}
}
}
}
}
Qe(e,t,a)
}finally{
be()
}
}
function Xe(e,t,a,i,o){
let s
try{
s=a?e.apply(t,a):e.call(t),s&&!s._isVue&&g(s)&&!s._handled&&(s.catch(e=>Ze(e,i,o+" (Promise/async)")),
s._handled=!0)
}catch(e){
Ze(e,i,o)
}
return s
}
function Qe(e,t,a){
if(D.errorHandler){
try{
return D.errorHandler.call(null,e,t,a)
}catch(t){
t!==e&&et(t,null,"config.errorHandler")
}
}
et(e,t,a)
}
function et(e,t,a){
if(ce(`Error in ${a}: "${e.toString()}"`,t),!F&&!H||"undefined"==typeof console){
throw e
}
}
let tt=!1
const at=[]
let it,ot,st,nt,rt=!1
function lt(){
rt=!1
const e=at.slice(0)
at.length=0
for(let t=0;t<e.length;t++){
e[t]()
}
}
if("undefined"!=typeof Promise&&ne(Promise)){
const e=Promise.resolve()
it=()=>{
e.then(lt),Q&&setTimeout(P)
},tt=!0
}else if(Y||"undefined"==typeof MutationObserver||!ne(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString()){
it=void 0!==e&&ne(e)?()=>{
e(lt)
}:()=>{
setTimeout(lt,0)
}
}else{
let e=1
const t=new MutationObserver(lt),a=document.createTextNode(String(e))
t.observe(a,{
characterData:!0
}),it=()=>{
e=(e+1)%2,a.data=String(e)
},tt=!0
}
function ct(e,t){
let a
if(at.push(()=>{
if(e){
try{
e.call(t)
}catch(e){
Ze(e,t,"nextTick")
}
}else{
a&&a(t)
}
}),rt||(rt=!0,it()),!e&&"undefined"!=typeof Promise){
return new Promise(e=>{
a=e
})
}
}
{
const e=F&&window.performance
e&&e.mark&&e.measure&&e.clearMarks&&e.clearMeasures&&(ot=t=>e.mark(t),st=(t,a,i)=>{
e.measure(t,a,i),
e.clearMarks(a),e.clearMarks(i)
})
}
{
const e=h("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,require"),t=(e,t)=>{
ce(`Property or method "${t}" is not defined on the instance but `+"referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.",e)
},a=(e,t)=>{
ce(`Property "${t}" must be accessed with "$data.${t}" because `+'properties starting with "$" or "_" are not proxied in the Vue instance to prevent conflicts with Vue internals. See: https://vuejs.org/v2/api/#data',e)
},i="undefined"!=typeof Proxy&&ne(Proxy)
if(i){
const e=h("stop,prevent,self,ctrl,shift,alt,meta,exact")
D.keyCodes=new Proxy(D.keyCodes,{
set:(t,a,i)=>e(a)?(ce(`Avoid overwriting built-in modifier in config.keyCodes: .${a}`),
!1):(t[a]=i,
!0)
})
}
const o={
has(i,o){
const s=o in i,n=e(o)||"string"==typeof o&&"_"===o.charAt(0)&&!(o in i.$data)
return s||n||(o in i.$data?a(i,o):t(i,o)),s||!n
}
},s={
get:(e,i)=>("string"!=typeof i||i in e||(i in e.$data?a(e,i):t(e,i)),e[i])
}
nt=function(e){
if(i){
const t=e.$options,a=t.render&&t.render._withStripped?s:o
e._renderProxy=new Proxy(e,a)
}else{
e._renderProxy=e
}
}
}
const ut=new le
function dt(e){
!function e(t,a){
let i,o
const s=Array.isArray(t)
if(!s&&!r(t)||Object.isFrozen(t)||t instanceof ve){
return
}
if(t.__ob__){
const e=t.__ob__.dep.id
if(a.has(e)){
return
}
a.add(e)
}
if(s){
for(i=t.length;i--;){
e(t[i],a)
}
}else{
for(o=Object.keys(t),i=o.length;i--;){
e(t[o[i]],a)
}
}
}(e,ut),ut.clear()
}
const pt=w(e=>{
const t="&"===e.charAt(0),a="~"===(e=t?e.slice(1):e).charAt(0),i="!"===(e=a?e.slice(1):e).charAt(0)
return{
name:e=i?e.slice(1):e,
once:a,
capture:i,
passive:t
}
})
function gt(e,t){
function a(){
const e=a.fns
if(!Array.isArray(e)){
return Xe(e,null,arguments,t,"v-on handler")
}
{
const a=e.slice()
for(let e=0;e<a.length;e++){
Xe(a[e],null,arguments,t,"v-on handler")
}
}
}
return a.fns=e,a
}
function mt(e,t,a,o,n,r){
let l,c,u,d,p
for(l in e){
c=u=e[l],d=t[l],p=pt(l),i(u)?ce(`Invalid handler for event "${p.name}": got `+String(u),r):i(d)?(i(u.fns)&&(u=e[l]=gt(u,r)),
s(p.once)&&(u=e[l]=n(p.name,u,p.capture)),
a(p.name,u,p.capture,p.passive,p.params)):u!==d&&(d.fns=u,
e[l]=d)
}
for(l in t){
i(e[l])&&(p=pt(l),o(p.name,t[l],p.capture))
}
}
function kt(e,t,a){
let n
e instanceof ve&&(e=e.data.hook||(e.data.hook={}))
const r=e[t]
function l(){
a.apply(this,arguments),y(n.fns,l)
}
i(r)?n=gt([l]):o(r.fns)&&s(r.merged)?(n=r,n.fns.push(l)):n=gt([r,l]),n.merged=!0,
e[t]=n
}
function ht(e,t,a,i,s){
if(o(t)){
if(j(t,a)){
return e[a]=t[a],s||delete t[a],!0
}
if(j(t,i)){
return e[a]=t[i],s||delete t[i],!0
}
}
return!1
}
function bt(e){
return n(e)?[fe(e)]:Array.isArray(e)?function e(t,a){
const r=[]
let l,c,u,d
for(l=0;l<t.length;l++){
c=t[l],i(c)||"boolean"==typeof c||(u=r.length-1,d=r[u],Array.isArray(c)?c.length>0&&(c=e(c,`${a||""}_${l}`),
vt(c[0])&&vt(d)&&(r[u]=fe(d.text+c[0].text),
c.shift()),r.push.apply(r,c)):n(c)?vt(d)?r[u]=fe(d.text+c):""!==c&&r.push(fe(c)):vt(c)&&vt(d)?r[u]=fe(d.text+c.text):(s(t._isVList)&&o(c.tag)&&i(c.key)&&o(a)&&(c.key=`__vlist${a}_${l}__`),
r.push(c)))
}
return r
}(e):void 0
}
function vt(e){
return o(e)&&o(e.text)&&!1===e.isComment
}
function yt(e,t){
if(e){
const a=Object.create(null),i=re?Reflect.ownKeys(e):Object.keys(e)
for(let o=0;o<i.length;o++){
const s=i[o]
if("__ob__"===s){
continue
}
const n=e[s].from
let r=t
for(;r;){
if(r._provided&&j(r._provided,n)){
a[s]=r._provided[n]
break
}
r=r.$parent
}
if(!r){
if("default"in e[s]){
const i=e[s].default
a[s]="function"==typeof i?i.call(t):i
}else{
ce(`Injection "${s}" not found`,t)
}
}
}
return a
}
}
function ft(e,t){
if(!e||!e.length){
return{}
}
const a={}
for(let i=0,o=e.length;i<o;i++){
const o=e[i],s=o.data
if(s&&s.attrs&&s.attrs.slot&&delete s.attrs.slot,o.context!==t&&o.fnContext!==t||!s||null==s.slot){
(a.default||(a.default=[])).push(o)
}else{
const e=s.slot,t=a[e]||(a[e]=[])
"template"===o.tag?t.push.apply(t,o.children||[]):t.push(o)
}
}
for(const e in a){
a[e].every(jt)&&delete a[e]
}
return a
}
function jt(e){
return e.isComment&&!e.asyncFactory||" "===e.text
}
function wt(e,t,i){
let o
const s=Object.keys(t).length>0,n=e?!!e.$stable:!s,r=e&&e.$key
if(e){
if(e._normalized){
return e._normalized
}
if(n&&i&&i!==a&&r===i.$key&&!s&&!i.$hasNormal){
return i
}
o={}
for(const a in e){
e[a]&&"$"!==a[0]&&(o[a]=At(t,a,e[a]))
}
}else{
o={}
}
for(const e in t){
e in o||(o[e]=zt(t,e))
}
return e&&Object.isExtensible(e)&&(e._normalized=o),V(o,"$stable",n),V(o,"$key",r),
V(o,"$hasNormal",s),
o
}
function At(e,t,a){
const i=function(){
let e=arguments.length?a.apply(null,arguments):a({})
return e=e&&"object"==typeof e&&!Array.isArray(e)?[e]:bt(e),e&&(0===e.length||1===e.length&&e[0].isComment)?void 0:e
}
return a.proxy&&Object.defineProperty(e,t,{
get:i,
enumerable:!0,
configurable:!0
}),i
}
function zt(e,t){
return()=>e[t]
}
function St(e,t){
let a,i,s,n,l
if(Array.isArray(e)||"string"==typeof e){
for(a=new Array(e.length),i=0,s=e.length;i<s;i++){
a[i]=t(e[i],i)
}
}else if("number"==typeof e){
for(a=new Array(e),i=0;i<e;i++){
a[i]=t(i+1,i)
}
}else if(r(e)){
if(re&&e[Symbol.iterator]){
a=[]
const i=e[Symbol.iterator]()
let o=i.next()
for(;!o.done;){
a.push(t(o.value,a.length)),o=i.next()
}
}else{
for(n=Object.keys(e),a=new Array(n.length),i=0,s=n.length;i<s;i++){
l=n[i],a[i]=t(e[l],l,i)
}
}
}
return o(a)||(a=[]),a._isVList=!0,a
}
function Bt(e,t,a,i){
const o=this.$scopedSlots[e]
let s
o?(a=a||{},i&&(r(i)||ce("slot v-bind without argument expects an Object",this),a=O(O({},i),a)),
s=o(a)||t):s=this.$slots[e]||t
const n=a&&a.slot
return n?this.$createElement("template",{
slot:n
},s):s
}
function _t(e){
return Me(this.$options,"filters",e,!0)||W
}
function Tt(e,t){
return Array.isArray(e)?-1===e.indexOf(t):e!==t
}
function xt(e,t,a,i,o){
const s=D.keyCodes[t]||a
return o&&i&&!D.keyCodes[t]?Tt(o,i):s?Tt(s,e):i?_(i)!==t:void 0
}
function Ot(e,t,a,i,o){
if(a){
if(r(a)){
let s
Array.isArray(a)&&(a=C(a))
for(const n in a){
if("class"===n||"style"===n||v(n)){
s=e
}else{
const a=e.attrs&&e.attrs.type
s=i||D.mustUseProp(t,a,n)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})
}
const r=z(n),l=_(n)
if(!(r in s||l in s)&&(s[n]=a[n],o)){
(e.on||(e.on={}))[`update:${n}`]=function(e){
a[n]=e
}
}
}
}else{
ce("v-bind without argument expects an Object or Array value",this)
}
}
return e
}
function Ct(e,t){
const a=this._staticTrees||(this._staticTrees=[])
let i=a[e]
return i&&!t?i:(i=a[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),
$t(i,`__static__${e}`,!1),
i)
}
function Pt(e,t,a){
return $t(e,`__once__${t}${a?`_${a}`:""}`,!0),e
}
function $t(e,t,a){
if(Array.isArray(e)){
for(let i=0;i<e.length;i++){
e[i]&&"string"!=typeof e[i]&&Wt(e[i],`${t}_${i}`,a)
}
}else{
Wt(e,t,a)
}
}
function Wt(e,t,a){
e.isStatic=!0,e.key=t,e.isOnce=a
}
function Lt(e,t){
if(t){
if(u(t)){
const a=e.on=e.on?O({},e.on):{}
for(const e in t){
const i=a[e],o=t[e]
a[e]=i?[].concat(i,o):o
}
}else{
ce("v-on without argument expects an Object value",this)
}
}
return e
}
function Nt(e,t,a,i){
t=t||{
$stable:!a
}
for(let i=0;i<e.length;i++){
const o=e[i]
Array.isArray(o)?Nt(o,t,a):o&&(o.proxy&&(o.fn.proxy=!0),t[o.key]=o.fn)
}
return i&&(t.$key=i),t
}
function qt(e,t){
for(let a=0;a<t.length;a+=2){
const i=t[a]
"string"==typeof i&&i?e[t[a]]=t[a+1]:""!==i&&null!==i&&ce(`Invalid value for dynamic directive argument (expected string or null): ${i}`,this)
}
return e
}
function Rt(e,t){
return"string"==typeof e?t+e:e
}
function Et(e){
e._o=Pt,e._n=k,e._s=m,e._l=St,e._t=Bt,e._q=L,e._i=N,e._m=Ct,e._f=_t,
e._k=xt,e._b=Ot,
e._v=fe,e._e=ye,e._u=Nt,e._g=Lt,e._d=qt,e._p=Rt
}
function Dt(e,t,i,o,n){
const r=n.options
let l
j(o,"_uid")?(l=Object.create(o),l._original=o):(l=o,o=o._original)
const c=s(r._compiled),u=!c
this.data=e,this.props=t,this.children=i,this.parent=o,this.listeners=e.on||a,this.injections=yt(r.inject,o),
this.slots=()=>(this.$slots||wt(e.scopedSlots,this.$slots=ft(i,o)),
this.$slots),
Object.defineProperty(this,"scopedSlots",{
enumerable:!0,
get(){
return wt(e.scopedSlots,this.slots())
}
}),c&&(this.$options=r,this.$slots=this.slots(),this.$scopedSlots=wt(e.scopedSlots,this.$slots)),
r._scopeId?this._c=(e,t,a,i)=>{
const s=Ht(l,e,t,a,i,u)
return s&&!Array.isArray(s)&&(s.fnScopeId=r._scopeId,s.fnContext=o),s
}:this._c=(e,t,a,i)=>Ht(l,e,t,a,i,u)
}
function Ut(e,t,a,i,o){
const s=je(e)
return s.fnContext=a,s.fnOptions=i,(s.devtoolsMeta=s.devtoolsMeta||{}).renderContext=o,
t.slot&&((s.data||(s.data={})).slot=t.slot),
s
}
function Mt(e,t){
for(const a in t){
e[z(a)]=t[a]
}
}
Et(Dt.prototype)
const Vt={
init(e,t){
if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){
const t=e
Vt.prepatch(t,t)
}else{
(e.componentInstance=function(e,t){
const a={
_isComponent:!0,
_parentVnode:e,
parent:t
},i=e.data.inlineTemplate
o(i)&&(a.render=i.render,a.staticRenderFns=i.staticRenderFns)
return new e.componentOptions.Ctor(a)
}(e,ia)).$mount(t?e.elm:void 0,t)
}
},
prepatch(e,t){
const i=t.componentOptions
!function(e,t,i,o,s){
oa=!0
const n=o.data.scopedSlots,r=e.$scopedSlots,l=!!(n&&!n.$stable||r!==a&&!r.$stable||n&&e.$scopedSlots.$key!==n.$key),c=!!(s||e.$options._renderChildren||l)
e.$options._parentVnode=o,e.$vnode=o,e._vnode&&(e._vnode.parent=o)
if(e.$options._renderChildren=s,e.$attrs=o.data.attrs||a,e.$listeners=i||a,t&&e.$options.props){
Be(!1)
const a=e._props,i=e.$options._propKeys||[]
for(let o=0;o<i.length;o++){
const s=i[o],n=e.$options.props
a[s]=Ve(s,n,t,e)
}
Be(!0),e.$options.propsData=t
}
i=i||a
const u=e.$options._parentListeners
e.$options._parentListeners=i,aa(e,i,u),c&&(e.$slots=ft(s,o.context),e.$forceUpdate())
oa=!1
}(t.componentInstance=e.componentInstance,i.propsData,i.listeners,t,i.children)
},
insert(e){
const{context:t,componentInstance:a}=e
var i
a._isMounted||(a._isMounted=!0,la(a,"mounted")),e.data.keepAlive&&(t._isMounted?((i=a)._inactive=!1,
ua.push(i)):ra(a,!0))
},
destroy(e){
const{componentInstance:t}=e
t._isDestroyed||(e.data.keepAlive?function e(t,a){
if(a&&(t._directInactive=!0,na(t))){
return
}
if(!t._inactive){
t._inactive=!0
for(let a=0;a<t.$children.length;a++){
e(t.$children[a])
}
la(t,"deactivated")
}
}(t,!0):t.$destroy())
}
},It=Object.keys(Vt)
function Gt(e,t,n,l,c){
if(i(e)){
return
}
const u=n.$options._base
if(r(e)&&(e=u.extend(e)),"function"!=typeof e){
return void ce(`Invalid Component definition: ${String(e)}`,n)
}
let d
if(i(e.cid)&&(d=e,void 0===(e=function(e,t){
if(s(e.error)&&o(e.errorComp)){
return e.errorComp
}
if(o(e.resolved)){
return e.resolved
}
const a=Jt
a&&o(e.owners)&&-1===e.owners.indexOf(a)&&e.owners.push(a)
if(s(e.loading)&&o(e.loadingComp)){
return e.loadingComp
}
if(a&&!o(e.owners)){
const s=e.owners=[a]
let n=!0,l=null,c=null
a.$on("hook:destroyed",()=>y(s,a))
const u=e=>{
for(let e=0,t=s.length;e<t;e++){
s[e].$forceUpdate()
}
e&&(s.length=0,null!==l&&(clearTimeout(l),l=null),null!==c&&(clearTimeout(c),c=null))
},d=q(a=>{
e.resolved=Yt(a,t),n?s.length=0:u(!0)
}),p=q(t=>{
ce(`Failed to resolve async component: ${String(e)}`+(t?`\nReason: ${t}`:"")),
o(e.errorComp)&&(e.error=!0,
u(!0))
}),m=e(d,p)
return r(m)&&(g(m)?i(e.resolved)&&m.then(d,p):g(m.component)&&(m.component.then(d,p),
o(m.error)&&(e.errorComp=Yt(m.error,t)),
o(m.loading)&&(e.loadingComp=Yt(m.loading,t),
0===m.delay?e.loading=!0:l=setTimeout(()=>{
l=null,i(e.resolved)&&i(e.error)&&(e.loading=!0,
u(!1))
},m.delay||200)),o(m.timeout)&&(c=setTimeout(()=>{
c=null,i(e.resolved)&&p(`timeout (${m.timeout}ms)`)
},m.timeout)))),n=!1,e.loading?e.loadingComp:e.resolved
}
}(d,u)))){
return function(e,t,a,i,o){
const s=ye()
return s.asyncFactory=e,s.asyncMeta={
data:t,
context:a,
children:i,
tag:o
},s
}(d,t,n,l,c)
}
t=t||{},Oa(e),o(t.model)&&function(e,t){
const a=e.model&&e.model.prop||"value",i=e.model&&e.model.event||"input"
;(t.attrs||(t.attrs={}))[a]=t.model.value
const s=t.on||(t.on={}),n=s[i],r=t.model.callback
o(n)?(Array.isArray(n)?-1===n.indexOf(r):n!==r)&&(s[i]=[r].concat(n)):s[i]=r
}(e.options,t)
const p=function(e,t,a){
const s=t.options.props
if(i(s)){
return
}
const n={},{attrs:r,props:l}=e
if(o(r)||o(l)){
for(const e in s){
const i=_(e)
{
const i=e.toLowerCase()
e!==i&&r&&j(r,i)&&ue(pe(a||t))
}
ht(n,l,e,i,!0)||ht(n,r,e,i,!1)
}
}
return n
}(t,e,c)
if(s(e.options.functional)){
return function(e,t,i,s,n){
const r=e.options,l={},c=r.props
if(o(c)){
for(const e in c){
l[e]=Ve(e,c,t||a)
}
}else{
o(i.attrs)&&Mt(l,i.attrs),o(i.props)&&Mt(l,i.props)
}
const u=new Dt(i,l,n,s,e),d=r.render.call(null,u._c,u)
if(d instanceof ve){
return Ut(d,i,u.parent,r,u)
}
if(Array.isArray(d)){
const e=bt(d)||[],t=new Array(e.length)
for(let a=0;a<e.length;a++){
t[a]=Ut(e[a],i,u.parent,r,u)
}
return t
}
}(e,p,t,n,l)
}
const m=t.on
if(t.on=t.nativeOn,s(e.options.abstract)){
const e=t.slot
t={},e&&(t.slot=e)
}
!function(e){
const t=e.hook||(e.hook={})
for(let e=0;e<It.length;e++){
const a=It[e],i=t[a],o=Vt[a]
i===o||i&&i._merged||(t[a]=i?Ft(o,i):o)
}
}(t)
const k=e.options.name||c
return new ve(`vue-component-${e.cid}${k?`-${k}`:""}`,t,void 0,void 0,void 0,n,{
Ctor:e,
propsData:p,
listeners:m,
tag:c,
children:l
},d)
}
function Ft(e,t){
const a=(a,i)=>{
e(a,i),t(a,i)
}
return a._merged=!0,a
}
function Ht(e,t,a,l,c,u){
return(Array.isArray(a)||n(a))&&(c=l,l=a,a=void 0),s(u)&&(c=2),
function(e,t,a,l,c){
if(o(a)&&o(a.__ob__)){
return ce(`Avoid using observed data object as vnode data: ${JSON.stringify(a)}\n`+"Always create fresh vnode data objects in each render!",e),
ye()
}
o(a)&&o(a.is)&&(t=a.is)
if(!t){
return ye()
}
o(a)&&o(a.key)&&!n(a.key)&&ce("Avoid using non-primitive value as key, use string/number value instead.",e)
Array.isArray(l)&&"function"==typeof l[0]&&((a=a||{}).scopedSlots={
default:l[0]
},l.length=0)
2===c?l=bt(l):1===c&&(l=function(e){
for(let t=0;t<e.length;t++){
if(Array.isArray(e[t])){
return Array.prototype.concat.apply([],e)
}
}
return e
}(l))
let u,d
if("string"==typeof t){
let i
d=e.$vnode&&e.$vnode.ns||D.getTagNamespace(t),D.isReservedTag(t)?(o(a)&&o(a.nativeOn)&&ce(`The .native modifier for v-on is only valid on components but it was used on <${t}>.`,e),
u=new ve(D.parsePlatformTagName(t),a,l,void 0,void 0,e)):u=a&&a.pre||!o(i=Me(e.$options,"components",t))?new ve(t,a,l,void 0,void 0,e):Gt(i,a,e,l,t)
}else{
u=Gt(t,a,e,l)
}
return Array.isArray(u)?u:o(u)?(o(d)&&function e(t,a,n){
t.ns=a,"foreignObject"===t.tag&&(a=void 0,
n=!0)
if(o(t.children)){
for(let r=0,l=t.children.length;r<l;r++){
const l=t.children[r]
o(l.tag)&&(i(l.ns)||s(n)&&"svg"!==l.tag)&&e(l,a,n)
}
}
}(u,d),o(a)&&function(e){
r(e.style)&&dt(e.style)
r(e.class)&&dt(e.class)
}(a),u):ye()
}(e,t,a,l,c)
}
let Kt,Jt=null
function Yt(e,t){
return(e.__esModule||re&&"Module"===e[Symbol.toStringTag])&&(e=e.default),
r(e)?t.extend(e):e
}
function Zt(e){
return e.isComment&&e.asyncFactory
}
function Xt(e){
if(Array.isArray(e)){
for(let t=0;t<e.length;t++){
const a=e[t]
if(o(a)&&(o(a.componentOptions)||Zt(a))){
return a
}
}
}
}
function Qt(e,t){
Kt.$on(e,t)
}
function ea(e,t){
Kt.$off(e,t)
}
function ta(e,t){
const a=Kt
return function i(){
const o=t.apply(null,arguments)
null!==o&&a.$off(e,i)
}
}
function aa(e,t,a){
Kt=e,mt(t,a||{},Qt,ea,ta,e),Kt=void 0
}
let ia=null,oa=!1
function sa(e){
const t=ia
return ia=e,()=>{
ia=t
}
}
function na(e){
for(;e&&(e=e.$parent);){
if(e._inactive){
return!0
}
}
return!1
}
function ra(e,t){
if(t){
if(e._directInactive=!1,na(e)){
return
}
}else if(e._directInactive){
return
}
if(e._inactive||null===e._inactive){
e._inactive=!1
for(let t=0;t<e.$children.length;t++){
ra(e.$children[t])
}
la(e,"activated")
}
}
function la(e,t){
he()
const a=e.$options[t],i=`${t} hook`
if(a){
for(let t=0,o=a.length;t<o;t++){
Xe(a[t],e,null,e,i)
}
}
e._hasHookEvent&&e.$emit("hook:"+t),be()
}
const ca=[],ua=[]
let da={},pa={},ga=!1,ma=!1,ka=0
let ha=0,ba=Date.now
if(F&&!Y){
const e=window.performance
e&&"function"==typeof e.now&&ba()>document.createEvent("Event").timeStamp&&(ba=()=>e.now())
}
function va(){
let e,t
for(ha=ba(),ma=!0,ca.sort((e,t)=>e.id-t.id),ka=0;ka<ca.length;ka++){
if(e=ca[ka],
e.before&&e.before(),t=e.id,da[t]=null,e.run(),null!=da[t]&&(pa[t]=(pa[t]||0)+1,
pa[t]>100)){
ce("You may have an infinite update loop "+(e.user?`in watcher with expression "${e.expression}"`:"in a component render function."),e.vm)
break
}
}
const a=ua.slice(),i=ca.slice()
ka=ca.length=ua.length=0,da={},pa={},ga=ma=!1,function(e){
for(let t=0;t<e.length;t++){
e[t]._inactive=!0,ra(e[t],!0)
}
}(a),function(e){
let t=e.length
for(;t--;){
const a=e[t],i=a.vm
i._watcher===a&&i._isMounted&&!i._isDestroyed&&la(i,"updated")
}
}(i),se&&D.devtools&&se.emit("flush")
}
let ya=0
class fa{
constructor(e,t,a,i,o){
this.vm=e,o&&(e._watcher=this),e._watchers.push(this),i?(this.deep=!!i.deep,
this.user=!!i.user,
this.lazy=!!i.lazy,this.sync=!!i.sync,this.before=i.before):this.deep=this.user=this.lazy=this.sync=!1,
this.cb=a,
this.id=++ya,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],
this.depIds=new le,
this.newDepIds=new le,this.expression=t.toString(),"function"==typeof t?this.getter=t:(this.getter=function(e){
if(I.test(e)){
return
}
const t=e.split(".")
return function(e){
for(let a=0;a<t.length;a++){
if(!e){
return
}
e=e[t[a]]
}
return e
}
}(t),this.getter||(this.getter=P,ce(`Failed watching path: "${t}" `+"Watcher only accepts simple dot-delimited paths. For full control, use a function instead.",e))),
this.value=this.lazy?void 0:this.get()
}
get(){
let e
he(this)
const t=this.vm
try{
e=this.getter.call(t,t)
}catch(e){
if(!this.user){
throw e
}
Ze(e,t,`getter for watcher "${this.expression}"`)
}finally{
this.deep&&dt(e),be(),this.cleanupDeps()
}
return e
}
addDep(e){
const t=e.id
this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))
}
cleanupDeps(){
let e=this.deps.length
for(;e--;){
const t=this.deps[e]
this.newDepIds.has(t.id)||t.removeSub(this)
}
let t=this.depIds
this.depIds=this.newDepIds,this.newDepIds=t,this.newDepIds.clear(),t=this.deps,this.deps=this.newDeps,
this.newDeps=t,
this.newDeps.length=0
}
update(){
this.lazy?this.dirty=!0:this.sync?this.run():function(e){
const t=e.id
if(null==da[t]){
if(da[t]=!0,ma){
let t=ca.length-1
for(;t>ka&&ca[t].id>e.id;){
t--
}
ca.splice(t+1,0,e)
}else{
ca.push(e)
}
if(!ga){
if(ga=!0,!D.async){
return void va()
}
ct(va)
}
}
}(this)
}
run(){
if(this.active){
const e=this.get()
if(e!==this.value||r(e)||this.deep){
const t=this.value
if(this.value=e,this.user){
try{
this.cb.call(this.vm,e,t)
}catch(e){
Ze(e,this.vm,`callback for watcher "${this.expression}"`)
}
}else{
this.cb.call(this.vm,e,t)
}
}
}
}
evaluate(){
this.value=this.get(),this.dirty=!1
}
depend(){
let e=this.deps.length
for(;e--;){
this.deps[e].depend()
}
}
teardown(){
if(this.active){
this.vm._isBeingDestroyed||y(this.vm._watchers,this)
let e=this.deps.length
for(;e--;){
this.deps[e].removeSub(this)
}
this.active=!1
}
}
}
const ja={
enumerable:!0,
configurable:!0,
get:P,
set:P
}
function wa(e,t,a){
ja.get=function(){
return this[t][a]
},ja.set=function(e){
this[t][a]=e
},Object.defineProperty(e,a,ja)
}
function Aa(e){
e._watchers=[]
const t=e.$options
t.props&&function(e,t){
const a=e.$options.propsData||{},i=e._props={},o=e.$options._propKeys=[],s=!e.$parent
s||Be(!1)
for(const n in t){
o.push(n)
const r=Ve(n,t,a,e)
{
const t=_(n)
;(v(t)||D.isReservedAttr(t))&&ce(`"${t}" is a reserved attribute and cannot be used as component prop.`,e),
xe(i,n,r,()=>{
s||oa||ce("Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's "+`value. Prop being mutated: "${n}"`,e)
})
}
n in e||wa(e,"_props",n)
}
Be(!0)
}(e,t.props),t.methods&&function(e,t){
const a=e.$options.props
for(const i in t){
"function"!=typeof t[i]&&ce(`Method "${i}" has type "${typeof t[i]}" in the component definition. `+"Did you reference the function correctly?",e),
a&&j(a,i)&&ce(`Method "${i}" has already been defined as a prop.`,e),
i in e&&M(i)&&ce(`Method "${i}" conflicts with an existing Vue instance method. `+"Avoid defining component methods that start with _ or $."),
e[i]="function"!=typeof t[i]?P:T(t[i],e)
}
}(e,t.methods),t.data?function(e){
let t=e.$options.data
t=e._data="function"==typeof t?function(e,t){
he()
try{
return e.call(t,t)
}catch(e){
return Ze(e,t,"data()"),{}
}finally{
be()
}
}(t,e):t||{},u(t)||(t={},ce("data functions should return an object:\nhttps://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function",e))
const a=Object.keys(t),i=e.$options.props,o=e.$options.methods
let s=a.length
for(;s--;){
const t=a[s]
o&&j(o,t)&&ce(`Method "${t}" has already been defined as a data property.`,e),i&&j(i,t)?ce(`The data property "${t}" is already declared as a prop. `+"Use prop default value instead.",e):M(t)||wa(e,"_data",t)
}
Te(t,!0)
}(e):Te(e._data={},!0),t.computed&&function(e,t){
const a=e._computedWatchers=Object.create(null),i=oe()
for(const o in t){
const s=t[o],n="function"==typeof s?s:s.get
null==n&&ce(`Getter is missing for computed property "${o}".`,e),i||(a[o]=new fa(e,n||P,P,za)),
o in e?o in e.$data?ce(`The computed property "${o}" is already defined in data.`,e):e.$options.props&&o in e.$options.props&&ce(`The computed property "${o}" is already defined as a prop.`,e):Sa(e,o,s)
}
}(e,t.computed),t.watch&&t.watch!==te&&function(e,t){
for(const a in t){
const i=t[a]
if(Array.isArray(i)){
for(let t=0;t<i.length;t++){
Ta(e,a,i[t])
}
}else{
Ta(e,a,i)
}
}
}(e,t.watch)
}
const za={
lazy:!0
}
function Sa(e,t,a){
const i=!oe()
"function"==typeof a?(ja.get=i?Ba(t):_a(a),ja.set=P):(ja.get=a.get?i&&!1!==a.cache?Ba(t):_a(a.get):P,
ja.set=a.set||P),
ja.set===P&&(ja.set=function(){
ce(`Computed property "${t}" was assigned to but it has no setter.`,this)
}),Object.defineProperty(e,t,ja)
}
function Ba(e){
return function(){
const t=this._computedWatchers&&this._computedWatchers[e]
if(t){
return t.dirty&&t.evaluate(),me.target&&t.depend(),t.value
}
}
}
function _a(e){
return function(){
return e.call(this,this)
}
}
function Ta(e,t,a,i){
return u(a)&&(i=a,a=a.handler),"string"==typeof a&&(a=e[a]),
e.$watch(t,a,i)
}
let xa=0
function Oa(e){
let t=e.options
if(e.super){
const a=Oa(e.super)
if(a!==e.superOptions){
e.superOptions=a
const i=function(e){
let t
const a=e.options,i=e.sealedOptions
for(const e in a){
a[e]!==i[e]&&(t||(t={}),t[e]=a[e])
}
return t
}(e)
i&&O(e.extendOptions,i),t=e.options=Ue(a,e.extendOptions),t.name&&(t.components[t.name]=e)
}
}
return t
}
function Ca(e){
this instanceof Ca||ce("Vue is a constructor and should be called with the `new` keyword"),
this._init(e)
}
function Pa(e){
e.cid=0
let t=1
e.extend=function(e){
e=e||{}
const a=this,i=a.cid,o=e._Ctor||(e._Ctor={})
if(o[i]){
return o[i]
}
const s=e.name||a.options.name
s&&Ee(s)
const n=function(e){
this._init(e)
}
return(n.prototype=Object.create(a.prototype)).constructor=n,n.cid=t++,n.options=Ue(a.options,e),
n.super=a,
n.options.props&&function(e){
const t=e.options.props
for(const a in t){
wa(e.prototype,"_props",a)
}
}(n),n.options.computed&&function(e){
const t=e.options.computed
for(const a in t){
Sa(e.prototype,a,t[a])
}
}(n),n.extend=a.extend,n.mixin=a.mixin,n.use=a.use,R.forEach((function(e){
n[e]=a[e]
})),s&&(n.options.components[s]=n),n.superOptions=a.options,n.extendOptions=e,
n.sealedOptions=O({},n.options),
o[i]=n,n
}
}
function $a(e){
return e&&(e.Ctor.options.name||e.tag)
}
function Wa(e,t){
return Array.isArray(e)?e.indexOf(t)>-1:"string"==typeof e?e.split(",").indexOf(t)>-1:!!d(e)&&e.test(t)
}
function La(e,t){
const{cache:a,keys:i,_vnode:o}=e
for(const e in a){
const s=a[e]
if(s){
const n=$a(s.componentOptions)
n&&!t(n)&&Na(a,e,i,o)
}
}
}
function Na(e,t,a,i){
const o=e[t]
!o||i&&o.tag===i.tag||o.componentInstance.$destroy(),e[t]=null,y(a,t)
}
!function(e){
e.prototype._init=function(e){
const t=this
let i,o
t._uid=xa++,D.performance&&ot&&(i=`vue-perf-start:${t._uid}`,o=`vue-perf-end:${t._uid}`,
ot(i)),
t._isVue=!0,e&&e._isComponent?function(e,t){
const a=e.$options=Object.create(e.constructor.options),i=t._parentVnode
a.parent=t.parent,a._parentVnode=i
const o=i.componentOptions
a.propsData=o.propsData,a._parentListeners=o.listeners,a._renderChildren=o.children,
a._componentTag=o.tag,
t.render&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns)
}(t,e):t.$options=Ue(Oa(t.constructor),e||{},t),
nt(t),t._self=t,function(e){
const t=e.$options
let a=t.parent
if(a&&!t.abstract){
for(;a.$options.abstract&&a.$parent;){
a=a.$parent
}
a.$children.push(e)
}
e.$parent=a,e.$root=a?a.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,
e._directInactive=!1,
e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1
}(t),function(e){
e._events=Object.create(null),e._hasHookEvent=!1
const t=e.$options._parentListeners
t&&aa(e,t)
}(t),function(e){
e._vnode=null,e._staticTrees=null
const t=e.$options,i=e.$vnode=t._parentVnode,o=i&&i.context
e.$slots=ft(t._renderChildren,o),e.$scopedSlots=a,e._c=(t,a,i,o)=>Ht(e,t,a,i,o,!1),
e.$createElement=(t,a,i,o)=>Ht(e,t,a,i,o,!0)
const s=i&&i.data
xe(e,"$attrs",s&&s.attrs||a,()=>{
!oa&&ce("$attrs is readonly.",e)
},!0),xe(e,"$listeners",t._parentListeners||a,()=>{
!oa&&ce("$listeners is readonly.",e)
},!0)
}(t),la(t,"beforeCreate"),function(e){
const t=yt(e.$options.inject,e)
t&&(Be(!1),Object.keys(t).forEach(a=>{
xe(e,a,t[a],()=>{
ce("Avoid mutating an injected value directly since the changes will be overwritten whenever the provided component re-renders. "+`injection being mutated: "${a}"`,e)
})
}),Be(!0))
}(t),Aa(t),function(e){
const t=e.$options.provide
t&&(e._provided="function"==typeof t?t.call(e):t)
}(t),la(t,"created"),D.performance&&ot&&(t._name=pe(t,!1),
ot(o),st(`vue ${t._name} init`,i,o)),
t.$options.el&&t.$mount(t.$options.el)
}
}(Ca),function(e){
const t={
get:function(){
return this._data
}
},a={
get:function(){
return this._props
}
}
t.set=function(){
ce("Avoid replacing instance root $data. Use nested data properties instead.",this)
},
a.set=function(){
ce("$props is readonly.",this)
},Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",a),
e.prototype.$set=Oe,
e.prototype.$delete=Ce,e.prototype.$watch=function(e,t,a){
const i=this
if(u(t)){
return Ta(i,e,t,a)
}
(a=a||{}).user=!0
const o=new fa(i,e,t,a)
if(a.immediate){
try{
t.call(i,o.value)
}catch(e){
Ze(e,i,`callback for immediate watcher "${o.expression}"`)
}
}
return function(){
o.teardown()
}
}
}(Ca),function(e){
const t=/^hook:/
e.prototype.$on=function(e,a){
const i=this
if(Array.isArray(e)){
for(let t=0,o=e.length;t<o;t++){
i.$on(e[t],a)
}
}else{
(i._events[e]||(i._events[e]=[])).push(a),t.test(e)&&(i._hasHookEvent=!0)
}
return i
},e.prototype.$once=function(e,t){
const a=this
function i(){
a.$off(e,i),t.apply(a,arguments)
}
return i.fn=t,a.$on(e,i),a
},e.prototype.$off=function(e,t){
const a=this
if(!arguments.length){
return a._events=Object.create(null),a
}
if(Array.isArray(e)){
for(let i=0,o=e.length;i<o;i++){
a.$off(e[i],t)
}
return a
}
const i=a._events[e]
if(!i){
return a
}
if(!t){
return a._events[e]=null,a
}
let o,s=i.length
for(;s--;){
if(o=i[s],o===t||o.fn===t){
i.splice(s,1)
break
}
}
return a
},e.prototype.$emit=function(e){
const t=this
{
const a=e.toLowerCase()
a!==e&&t._events[a]&&ue((pe(t),_(e)))
}
let a=t._events[e]
if(a){
a=a.length>1?x(a):a
const i=x(arguments,1),o=`event handler for "${e}"`
for(let e=0,s=a.length;e<s;e++){
Xe(a[e],t,i,t,o)
}
}
return t
}
}(Ca),function(e){
e.prototype._update=function(e,t){
const a=this,i=a.$el,o=a._vnode,s=sa(a)
a._vnode=e,a.$el=o?a.__patch__(o,e):a.__patch__(a.$el,e,t,!1),s(),i&&(i.__vue__=null),
a.$el&&(a.$el.__vue__=a),
a.$vnode&&a.$parent&&a.$vnode===a.$parent._vnode&&(a.$parent.$el=a.$el)
},e.prototype.$forceUpdate=function(){
const e=this
e._watcher&&e._watcher.update()
},e.prototype.$destroy=function(){
const e=this
if(e._isBeingDestroyed){
return
}
la(e,"beforeDestroy"),e._isBeingDestroyed=!0
const t=e.$parent
!t||t._isBeingDestroyed||e.$options.abstract||y(t.$children,e),e._watcher&&e._watcher.teardown()
let a=e._watchers.length
for(;a--;){
e._watchers[a].teardown()
}
e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),
la(e,"destroyed"),
e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)
}
}(Ca),function(e){
Et(e.prototype),e.prototype.$nextTick=function(e){
return ct(e,this)
},e.prototype._render=function(){
const e=this,{render:t,_parentVnode:a}=e.$options
let i
a&&(e.$scopedSlots=wt(a.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=a
try{
Jt=e,i=t.call(e._renderProxy,e.$createElement)
}catch(t){
if(Ze(t,e,"render"),e.$options.renderError){
try{
i=e.$options.renderError.call(e._renderProxy,e.$createElement,t)
}catch(t){
Ze(t,e,"renderError"),i=e._vnode
}
}else{
i=e._vnode
}
}finally{
Jt=null
}
return Array.isArray(i)&&1===i.length&&(i=i[0]),i instanceof ve||(Array.isArray(i)&&ce("Multiple root nodes returned from render function. Render function should return a single root node.",e),
i=ye()),
i.parent=a,i
}
}(Ca)
const qa=[String,RegExp,Array]
var Ra={
KeepAlive:{
name:"keep-alive",
abstract:!0,
props:{
include:qa,
exclude:qa,
max:[String,Number]
},
created(){
this.cache=Object.create(null),this.keys=[]
},
destroyed(){
for(const e in this.cache){
Na(this.cache,e,this.keys)
}
},
mounted(){
this.$watch("include",e=>{
La(this,t=>Wa(e,t))
}),this.$watch("exclude",e=>{
La(this,t=>!Wa(e,t))
})
},
render(){
const e=this.$slots.default,t=Xt(e),a=t&&t.componentOptions
if(a){
const e=$a(a),{include:i,exclude:o}=this
if(i&&(!e||!Wa(i,e))||o&&e&&Wa(o,e)){
return t
}
const{cache:s,keys:n}=this,r=null==t.key?a.Ctor.cid+(a.tag?`::${a.tag}`:""):t.key
s[r]?(t.componentInstance=s[r].componentInstance,y(n,r),n.push(r)):(s[r]=t,n.push(r),
this.max&&n.length>parseInt(this.max)&&Na(s,n[0],n,this._vnode)),
t.data.keepAlive=!0
}
return t||e&&e[0]
}
}
}
!function(e){
const t={
get:()=>D,
set:()=>{
ce("Do not replace the Vue.config object, set individual fields instead.")
}
}
Object.defineProperty(e,"config",t),e.util={
warn:ce,
extend:O,
mergeOptions:Ue,
defineReactive:xe
},e.set=Oe,e.delete=Ce,e.nextTick=ct,e.observable=e=>(Te(e),e),
e.options=Object.create(null),
R.forEach(t=>{
e.options[t+"s"]=Object.create(null)
}),e.options._base=e,O(e.options.components,Ra),
function(e){
e.use=function(e){
const t=this._installedPlugins||(this._installedPlugins=[])
if(t.indexOf(e)>-1){
return this
}
const a=x(arguments,1)
return a.unshift(this),"function"==typeof e.install?e.install.apply(e,a):"function"==typeof e&&e.apply(null,a),
t.push(e),
this
}
}(e),function(e){
e.mixin=function(e){
return this.options=Ue(this.options,e),this
}
}(e),Pa(e),function(e){
R.forEach(t=>{
e[t]=function(e,a){
return a?("component"===t&&Ee(e),"component"===t&&u(a)&&(a.name=a.name||e,
a=this.options._base.extend(a)),
"directive"===t&&"function"==typeof a&&(a={
bind:a,
update:a
}),this.options[t+"s"][e]=a,a):this.options[t+"s"][e]
}
})
}(e)
}(Ca),Object.defineProperty(Ca.prototype,"$isServer",{
get:oe
}),Object.defineProperty(Ca.prototype,"$ssrContext",{
get(){
return this.$vnode&&this.$vnode.ssrContext
}
}),Object.defineProperty(Ca,"FunctionalRenderContext",{
value:Dt
}),Ca.version="2.6.11"
const Ea=h("style,class"),Da=h("input,textarea,option,select,progress"),Ua=(e,t,a)=>"value"===a&&Da(e)&&"button"!==t||"selected"===a&&"option"===e||"checked"===a&&"input"===e||"muted"===a&&"video"===e,Ma=h("contenteditable,draggable,spellcheck"),Va=h("events,caret,typing,plaintext-only"),Ia=h("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),Ga="http://www.w3.org/1999/xlink",Fa=e=>":"===e.charAt(5)&&"xlink"===e.slice(0,5),Ha=e=>Fa(e)?e.slice(6,e.length):"",Ka=e=>null==e||!1===e
function Ja(e){
let t=e.data,a=e,i=e
for(;o(i.componentInstance);){
i=i.componentInstance._vnode,i&&i.data&&(t=Ya(i.data,t))
}
for(;o(a=a.parent);){
a&&a.data&&(t=Ya(t,a.data))
}
return function(e,t){
if(o(e)||o(t)){
return Za(e,Xa(t))
}
return""
}(t.staticClass,t.class)
}
function Ya(e,t){
return{
staticClass:Za(e.staticClass,t.staticClass),
class:o(e.class)?[e.class,t.class]:t.class
}
}
function Za(e,t){
return e?t?e+" "+t:e:t||""
}
function Xa(e){
return Array.isArray(e)?function(e){
let t,a=""
for(let i=0,s=e.length;i<s;i++){
o(t=Xa(e[i]))&&""!==t&&(a&&(a+=" "),a+=t)
}
return a
}(e):r(e)?function(e){
let t=""
for(const a in e){
e[a]&&(t&&(t+=" "),t+=a)
}
return t
}(e):"string"==typeof e?e:""
}
const Qa={
svg:"http://www.w3.org/2000/svg",
math:"http://www.w3.org/1998/Math/MathML"
},ei=h("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),ti=h("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),ai=e=>ei(e)||ti(e)
function ii(e){
return ti(e)?"svg":"math"===e?"math":void 0
}
const oi=Object.create(null)
const si=h("text,number,password,search,email,tel,url")
function ni(e){
if("string"==typeof e){
const t=document.querySelector(e)
return t||(ce("Cannot find element: "+e),document.createElement("div"))
}
return e
}
var ri=Object.freeze({
createElement:function(e,t){
const a=document.createElement(e)
return"select"!==e?a:(t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&a.setAttribute("multiple","multiple"),
a)
},
createElementNS:function(e,t){
return document.createElementNS(Qa[e],t)
},
createTextNode:function(e){
return document.createTextNode(e)
},
createComment:function(e){
return document.createComment(e)
},
insertBefore:function(e,t,a){
e.insertBefore(t,a)
},
removeChild:function(e,t){
e.removeChild(t)
},
appendChild:function(e,t){
e.appendChild(t)
},
parentNode:function(e){
return e.parentNode
},
nextSibling:function(e){
return e.nextSibling
},
tagName:function(e){
return e.tagName
},
setTextContent:function(e,t){
e.textContent=t
},
setStyleScope:function(e,t){
e.setAttribute(t,"")
}
}),li={
create(e,t){
ci(t)
},
update(e,t){
e.data.ref!==t.data.ref&&(ci(e,!0),ci(t))
},
destroy(e){
ci(e,!0)
}
}
function ci(e,t){
const a=e.data.ref
if(!o(a)){
return
}
const i=e.context,s=e.componentInstance||e.elm,n=i.$refs
t?Array.isArray(n[a])?y(n[a],s):n[a]===s&&(n[a]=void 0):e.data.refInFor?Array.isArray(n[a])?n[a].indexOf(s)<0&&n[a].push(s):n[a]=[s]:n[a]=s
}
const ui=new ve("",{},[]),di=["create","activate","update","remove","destroy"]
function pi(e,t){
return e.key===t.key&&(e.tag===t.tag&&e.isComment===t.isComment&&o(e.data)===o(t.data)&&function(e,t){
if("input"!==e.tag){
return!0
}
let a
const i=o(a=e.data)&&o(a=a.attrs)&&a.type,s=o(a=t.data)&&o(a=a.attrs)&&a.type
return i===s||si(i)&&si(s)
}(e,t)||s(e.isAsyncPlaceholder)&&e.asyncFactory===t.asyncFactory&&i(t.asyncFactory.error))
}
function gi(e,t,a){
let i,s
const n={}
for(i=t;i<=a;++i){
s=e[i].key,o(s)&&(n[s]=i)
}
return n
}
var mi={
create:ki,
update:ki,
destroy:function(e){
ki(e,ui)
}
}
function ki(e,t){
(e.data.directives||t.data.directives)&&function(e,t){
const a=e===ui,i=t===ui,o=bi(e.data.directives,e.context),s=bi(t.data.directives,t.context),n=[],r=[]
let l,c,u
for(l in s){
c=o[l],u=s[l],c?(u.oldValue=c.value,u.oldArg=c.arg,yi(u,"update",t,e),
u.def&&u.def.componentUpdated&&r.push(u)):(yi(u,"bind",t,e),
u.def&&u.def.inserted&&n.push(u))
}
if(n.length){
const i=()=>{
for(let a=0;a<n.length;a++){
yi(n[a],"inserted",t,e)
}
}
a?kt(t,"insert",i):i()
}
r.length&&kt(t,"postpatch",()=>{
for(let a=0;a<r.length;a++){
yi(r[a],"componentUpdated",t,e)
}
})
if(!a){
for(l in o){
s[l]||yi(o[l],"unbind",e,e,i)
}
}
}(e,t)
}
const hi=Object.create(null)
function bi(e,t){
const a=Object.create(null)
if(!e){
return a
}
let i,o
for(i=0;i<e.length;i++){
o=e[i],o.modifiers||(o.modifiers=hi),a[vi(o)]=o,o.def=Me(t.$options,"directives",o.name,!0)
}
return a
}
function vi(e){
return e.rawName||`${e.name}.${Object.keys(e.modifiers||{}).join(".")}`
}
function yi(e,t,a,i,o){
const s=e.def&&e.def[t]
if(s){
try{
s(a.elm,e,a,i,o)
}catch(i){
Ze(i,a.context,`directive ${e.name} ${t} hook`)
}
}
}
var fi=[li,mi]
function ji(e,t){
const a=t.componentOptions
if(o(a)&&!1===a.Ctor.options.inheritAttrs){
return
}
if(i(e.data.attrs)&&i(t.data.attrs)){
return
}
let s,n,r
const l=t.elm,c=e.data.attrs||{}
let u=t.data.attrs||{}
for(s in o(u.__ob__)&&(u=t.data.attrs=O({},u)),u){
n=u[s],r=c[s],r!==n&&wi(l,s,n)
}
for(s in(Y||X)&&u.value!==c.value&&wi(l,"value",u.value),c){
i(u[s])&&(Fa(s)?l.removeAttributeNS(Ga,Ha(s)):Ma(s)||l.removeAttribute(s))
}
}
function wi(e,t,a){
e.tagName.indexOf("-")>-1?Ai(e,t,a):Ia(t)?Ka(a)?e.removeAttribute(t):(a="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,
e.setAttribute(t,a)):Ma(t)?e.setAttribute(t,((e,t)=>Ka(t)||"false"===t?"false":"contenteditable"===e&&Va(t)?t:"true")(t,a)):Fa(t)?Ka(a)?e.removeAttributeNS(Ga,Ha(t)):e.setAttributeNS(Ga,t,a):Ai(e,t,a)
}
function Ai(e,t,a){
if(Ka(a)){
e.removeAttribute(t)
}else{
if(Y&&!Z&&"TEXTAREA"===e.tagName&&"placeholder"===t&&""!==a&&!e.__ieph){
const t=a=>{
a.stopImmediatePropagation(),e.removeEventListener("input",t)
}
e.addEventListener("input",t),e.__ieph=!0
}
e.setAttribute(t,a)
}
}
var zi={
create:ji,
update:ji
}
function Si(e,t){
const a=t.elm,s=t.data,n=e.data
if(i(s.staticClass)&&i(s.class)&&(i(n)||i(n.staticClass)&&i(n.class))){
return
}
let r=Ja(t)
const l=a._transitionClasses
o(l)&&(r=Za(r,Xa(l))),r!==a._prevClass&&(a.setAttribute("class",r),a._prevClass=r)
}
var Bi={
create:Si,
update:Si
}
const _i=/[\w).+\-_$\]]/
function Ti(e){
let t,a,i,o,s,n=!1,r=!1,l=!1,c=!1,u=0,d=0,p=0,g=0
for(i=0;i<e.length;i++){
if(a=t,t=e.charCodeAt(i),n){
39===t&&92!==a&&(n=!1)
}else if(r){
34===t&&92!==a&&(r=!1)
}else if(l){
96===t&&92!==a&&(l=!1)
}else if(c){
47===t&&92!==a&&(c=!1)
}else if(124!==t||124===e.charCodeAt(i+1)||124===e.charCodeAt(i-1)||u||d||p){
switch(t){
case 34:
r=!0
break
case 39:
n=!0
break
case 96:
l=!0
break
case 40:
p++
break
case 41:
p--
break
case 91:
d++
break
case 93:
d--
break
case 123:
u++
break
case 125:
u--
}
if(47===t){
let t,a=i-1
for(;a>=0&&(t=e.charAt(a)," "===t);a--){}
t&&_i.test(t)||(c=!0)
}
}else{
void 0===o?(g=i+1,o=e.slice(0,i).trim()):m()
}
}
function m(){
(s||(s=[])).push(e.slice(g,i).trim()),g=i+1
}
if(void 0===o?o=e.slice(0,i).trim():0!==g&&m(),s){
for(i=0;i<s.length;i++){
o=xi(o,s[i])
}
}
return o
}
function xi(e,t){
const a=t.indexOf("(")
if(a<0){
return`_f("${t}")(${e})`
}
{
const i=t.slice(0,a),o=t.slice(a+1)
return`_f("${i}")(${e}${")"!==o?","+o:o}`
}
}
function Oi(e,t){}
function Ci(e,t){
return e?e.map(e=>e[t]).filter(e=>e):[]
}
function Pi(e,t,a,i,o){
(e.props||(e.props=[])).push(Mi({
name:t,
value:a,
dynamic:o
},i)),e.plain=!1
}
function $i(e,t,a,i,o){
(o?e.dynamicAttrs||(e.dynamicAttrs=[]):e.attrs||(e.attrs=[])).push(Mi({
name:t,
value:a,
dynamic:o
},i)),e.plain=!1
}
function Wi(e,t,a,i){
e.attrsMap[t]=a,e.attrsList.push(Mi({
name:t,
value:a
},i))
}
function Li(e,t,a,i,o,s,n,r){
(e.directives||(e.directives=[])).push(Mi({
name:t,
rawName:a,
value:i,
arg:o,
isDynamicArg:s,
modifiers:n
},r)),e.plain=!1
}
function Ni(e,t,a){
return a?`_p(${t},"${e}")`:e+t
}
function qi(e,t,i,o,s,n,r,l){
let c
o=o||a,n&&o.prevent&&o.passive&&n("passive and prevent can't be used together. Passive handler can't prevent default event.",r),
o.right?l?t=`(${t})==='click'?'contextmenu':(${t})`:"click"===t&&(t="contextmenu",
delete o.right):o.middle&&(l?t=`(${t})==='click'?'mouseup':(${t})`:"click"===t&&(t="mouseup")),
o.capture&&(delete o.capture,
t=Ni("!",t,l)),o.once&&(delete o.once,t=Ni("~",t,l)),
o.passive&&(delete o.passive,
t=Ni("&",t,l)),o.native?(delete o.native,c=e.nativeEvents||(e.nativeEvents={})):c=e.events||(e.events={})
const u=Mi({
value:i.trim(),
dynamic:l
},r)
o!==a&&(u.modifiers=o)
const d=c[t]
Array.isArray(d)?s?d.unshift(u):d.push(u):c[t]=d?s?[u,d]:[d,u]:u,e.plain=!1
}
function Ri(e,t){
return e.rawAttrsMap[":"+t]||e.rawAttrsMap["v-bind:"+t]||e.rawAttrsMap[t]
}
function Ei(e,t,a){
const i=Di(e,":"+t)||Di(e,"v-bind:"+t)
if(null!=i){
return Ti(i)
}
if(!1!==a){
const a=Di(e,t)
if(null!=a){
return JSON.stringify(a)
}
}
}
function Di(e,t,a){
let i
if(null!=(i=e.attrsMap[t])){
const a=e.attrsList
for(let e=0,i=a.length;e<i;e++){
if(a[e].name===t){
a.splice(e,1)
break
}
}
}
return a&&delete e.attrsMap[t],i
}
function Ui(e,t){
const a=e.attrsList
for(let e=0,i=a.length;e<i;e++){
const i=a[e]
if(t.test(i.name)){
return a.splice(e,1),i
}
}
}
function Mi(e,t){
return t&&(null!=t.start&&(e.start=t.start),null!=t.end&&(e.end=t.end)),
e
}
function Vi(e,t,a){
const{number:i,trim:o}=a||{}
let s="$$v"
o&&(s="(typeof $$v === 'string'? $$v.trim(): $$v)"),i&&(s=`_n(${s})`)
const n=Ii(t,s)
e.model={
value:`(${t})`,
expression:JSON.stringify(t),
callback:`function ($$v) {${n}}`
}
}
function Ii(e,t){
const a=function(e){
if(e=e.trim(),Gi=e.length,e.indexOf("[")<0||e.lastIndexOf("]")<Gi-1){
return Ki=e.lastIndexOf("."),
Ki>-1?{
exp:e.slice(0,Ki),
key:'"'+e.slice(Ki+1)+'"'
}:{
exp:e,
key:null
}
}
Fi=e,Ki=Ji=Yi=0
for(;!Qi();){
Hi=Xi(),eo(Hi)?ao(Hi):91===Hi&&to(Hi)
}
return{
exp:e.slice(0,Ji),
key:e.slice(Ji+1,Yi)
}
}(e)
return null===a.key?`${e}=${t}`:`$set(${a.exp}, ${a.key}, ${t})`
}
let Gi,Fi,Hi,Ki,Ji,Yi,Zi
function Xi(){
return Fi.charCodeAt(++Ki)
}
function Qi(){
return Ki>=Gi
}
function eo(e){
return 34===e||39===e
}
function to(e){
let t=1
for(Ji=Ki;!Qi();){
if(eo(e=Xi())){
ao(e)
}else if(91===e&&t++,93===e&&t--,0===t){
Yi=Ki
break
}
}
}
function ao(e){
const t=e
for(;!Qi()&&(e=Xi())!==t;){}
}
let io
function oo(e,t,a){
const i=io
return function o(){
const s=t.apply(null,arguments)
null!==s&&ro(e,o,a,i)
}
}
const so=tt&&!(ee&&Number(ee[1])<=53)
function no(e,t,a,i){
if(so){
const e=ha,a=t
t=a._wrapper=function(t){
if(t.target===t.currentTarget||t.timeStamp>=e||t.timeStamp<=0||t.target.ownerDocument!==document){
return a.apply(this,arguments)
}
}
}
io.addEventListener(e,t,ie?{
capture:a,
passive:i
}:a)
}
function ro(e,t,a,i){
(i||io).removeEventListener(e,t._wrapper||t,a)
}
function lo(e,t){
if(i(e.data.on)&&i(t.data.on)){
return
}
const a=t.data.on||{},s=e.data.on||{}
io=t.elm,function(e){
if(o(e.__r)){
const t=Y?"change":"input"
e[t]=[].concat(e.__r,e[t]||[]),delete e.__r
}
o(e.__c)&&(e.change=[].concat(e.__c,e.change||[]),delete e.__c)
}(a),mt(a,s,no,ro,oo,t.context),
io=void 0
}
var co={
create:lo,
update:lo
}
let uo
function po(e,t){
if(i(e.data.domProps)&&i(t.data.domProps)){
return
}
let a,s
const n=t.elm,r=e.data.domProps||{}
let l=t.data.domProps||{}
for(a in o(l.__ob__)&&(l=t.data.domProps=O({},l)),r){
a in l||(n[a]="")
}
for(a in l){
if(s=l[a],"textContent"===a||"innerHTML"===a){
if(t.children&&(t.children.length=0),
s===r[a]){
continue
}
1===n.childNodes.length&&n.removeChild(n.childNodes[0])
}
if("value"===a&&"PROGRESS"!==n.tagName){
n._value=s
const e=i(s)?"":String(s)
go(n,e)&&(n.value=e)
}else if("innerHTML"===a&&ti(n.tagName)&&i(n.innerHTML)){
uo=uo||document.createElement("div"),
uo.innerHTML=`<svg>${s}</svg>`
const e=uo.firstChild
for(;n.firstChild;){
n.removeChild(n.firstChild)
}
for(;e.firstChild;){
n.appendChild(e.firstChild)
}
}else if(s!==r[a]){
try{
n[a]=s
}catch(e){}
}
}
}
function go(e,t){
return!e.composing&&("OPTION"===e.tagName||function(e,t){
let a=!0
try{
a=document.activeElement!==e
}catch(e){}
return a&&e.value!==t
}(e,t)||function(e,t){
const a=e.value,i=e._vModifiers
if(o(i)){
if(i.number){
return k(a)!==k(t)
}
if(i.trim){
return a.trim()!==t.trim()
}
}
return a!==t
}(e,t))
}
var mo={
create:po,
update:po
}
const ko=w((function(e){
const t={},a=/:(.+)/
return e.split(/;(?![^(]*\))/g).forEach((function(e){
if(e){
const i=e.split(a)
i.length>1&&(t[i[0].trim()]=i[1].trim())
}
})),t
}))
function ho(e){
const t=bo(e.style)
return e.staticStyle?O(e.staticStyle,t):t
}
function bo(e){
return Array.isArray(e)?C(e):"string"==typeof e?ko(e):e
}
const vo=/^--/,yo=/\s*!important$/,fo=(e,t,a)=>{
if(vo.test(t)){
e.style.setProperty(t,a)
}else if(yo.test(a)){
e.style.setProperty(_(t),a.replace(yo,""),"important")
}else{
const i=Ao(t)
if(Array.isArray(a)){
for(let t=0,o=a.length;t<o;t++){
e.style[i]=a[t]
}
}else{
e.style[i]=a
}
}
},jo=["Webkit","Moz","ms"]
let wo
const Ao=w((function(e){
if(wo=wo||document.createElement("div").style,"filter"!==(e=z(e))&&e in wo){
return e
}
const t=e.charAt(0).toUpperCase()+e.slice(1)
for(let e=0;e<jo.length;e++){
const a=jo[e]+t
if(a in wo){
return a
}
}
}))
function zo(e,t){
const a=t.data,s=e.data
if(i(a.staticStyle)&&i(a.style)&&i(s.staticStyle)&&i(s.style)){
return
}
let n,r
const l=t.elm,c=s.staticStyle,u=s.normalizedStyle||s.style||{},d=c||u,p=bo(t.data.style)||{}
t.data.normalizedStyle=o(p.__ob__)?O({},p):p
const g=function(e,t){
const a={}
let i
if(t){
let t=e
for(;t.componentInstance;){
t=t.componentInstance._vnode,t&&t.data&&(i=ho(t.data))&&O(a,i)
}
}
(i=ho(e.data))&&O(a,i)
let o=e
for(;o=o.parent;){
o.data&&(i=ho(o.data))&&O(a,i)
}
return a
}(t,!0)
for(r in d){
i(g[r])&&fo(l,r,"")
}
for(r in g){
n=g[r],n!==d[r]&&fo(l,r,null==n?"":n)
}
}
var So={
create:zo,
update:zo
}
const Bo=/\s+/
function _o(e,t){
if(t&&(t=t.trim())){
if(e.classList){
t.indexOf(" ")>-1?t.split(Bo).forEach(t=>e.classList.add(t)):e.classList.add(t)
}else{
const a=` ${e.getAttribute("class")||""} `
a.indexOf(" "+t+" ")<0&&e.setAttribute("class",(a+t).trim())
}
}
}
function To(e,t){
if(t&&(t=t.trim())){
if(e.classList){
t.indexOf(" ")>-1?t.split(Bo).forEach(t=>e.classList.remove(t)):e.classList.remove(t),
e.classList.length||e.removeAttribute("class")
}else{
let a=` ${e.getAttribute("class")||""} `
const i=" "+t+" "
for(;a.indexOf(i)>=0;){
a=a.replace(i," ")
}
a=a.trim(),a?e.setAttribute("class",a):e.removeAttribute("class")
}
}
}
function xo(e){
if(e){
if("object"==typeof e){
const t={}
return!1!==e.css&&O(t,Oo(e.name||"v")),O(t,e),t
}
return"string"==typeof e?Oo(e):void 0
}
}
const Oo=w(e=>({
enterClass:`${e}-enter`,
enterToClass:`${e}-enter-to`,
enterActiveClass:`${e}-enter-active`,
leaveClass:`${e}-leave`,
leaveToClass:`${e}-leave-to`,
leaveActiveClass:`${e}-leave-active`
})),Co=F&&!Z
let Po="transition",$o="transitionend",Wo="animation",Lo="animationend"
Co&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Po="WebkitTransition",
$o="webkitTransitionEnd"),
void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Wo="WebkitAnimation",
Lo="webkitAnimationEnd"))
const No=F?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:e=>e()
function qo(e){
No(()=>{
No(e)
})
}
function Ro(e,t){
const a=e._transitionClasses||(e._transitionClasses=[])
a.indexOf(t)<0&&(a.push(t),_o(e,t))
}
function Eo(e,t){
e._transitionClasses&&y(e._transitionClasses,t),To(e,t)
}
function Do(e,t,a){
const{type:i,timeout:o,propCount:s}=Mo(e,t)
if(!i){
return a()
}
const n="transition"===i?$o:Lo
let r=0
const l=()=>{
e.removeEventListener(n,c),a()
},c=t=>{
t.target===e&&++r>=s&&l()
}
setTimeout(()=>{
r<s&&l()
},o+1),e.addEventListener(n,c)
}
const Uo=/\b(transform|all)(,|$)/
function Mo(e,t){
const a=window.getComputedStyle(e),i=(a[Po+"Delay"]||"").split(", "),o=(a[Po+"Duration"]||"").split(", "),s=Vo(i,o),n=(a[Wo+"Delay"]||"").split(", "),r=(a[Wo+"Duration"]||"").split(", "),l=Vo(n,r)
let c,u=0,d=0
return"transition"===t?s>0&&(c="transition",u=s,d=o.length):"animation"===t?l>0&&(c="animation",
u=l,
d=r.length):(u=Math.max(s,l),c=u>0?s>l?"transition":"animation":null,d=c?"transition"===c?o.length:r.length:0),
{
type:c,
timeout:u,
propCount:d,
hasTransform:"transition"===c&&Uo.test(a[Po+"Property"])
}
}
function Vo(e,t){
for(;e.length<t.length;){
e=e.concat(e)
}
return Math.max.apply(null,t.map((t,a)=>Io(t)+Io(e[a])))
}
function Io(e){
return 1e3*Number(e.slice(0,-1).replace(",","."))
}
function Go(e,t){
const a=e.elm
o(a._leaveCb)&&(a._leaveCb.cancelled=!0,a._leaveCb())
const s=xo(e.data.transition)
if(i(s)){
return
}
if(o(a._enterCb)||1!==a.nodeType){
return
}
const{css:n,type:l,enterClass:c,enterToClass:u,enterActiveClass:d,appearClass:p,appearToClass:g,appearActiveClass:m,beforeEnter:h,enter:b,afterEnter:v,enterCancelled:y,beforeAppear:f,appear:j,afterAppear:w,appearCancelled:A,duration:z}=s
let S=ia,B=ia.$vnode
for(;B&&B.parent;){
S=B.context,B=B.parent
}
const _=!S._isMounted||!e.isRootInsert
if(_&&!j&&""!==j){
return
}
const T=_&&p?p:c,x=_&&m?m:d,O=_&&g?g:u,C=_&&f||h,P=_&&"function"==typeof j?j:b,$=_&&w||v,W=_&&A||y,L=k(r(z)?z.enter:z)
null!=L&&Ho(L,"enter",e)
const N=!1!==n&&!Z,R=Jo(P),E=a._enterCb=q(()=>{
N&&(Eo(a,O),Eo(a,x)),E.cancelled?(N&&Eo(a,T),
W&&W(a)):$&&$(a),a._enterCb=null
})
e.data.show||kt(e,"insert",()=>{
const t=a.parentNode,i=t&&t._pending&&t._pending[e.key]
i&&i.tag===e.tag&&i.elm._leaveCb&&i.elm._leaveCb(),P&&P(a,E)
}),C&&C(a),N&&(Ro(a,T),
Ro(a,x),qo(()=>{
Eo(a,T),E.cancelled||(Ro(a,O),R||(Ko(L)?setTimeout(E,L):Do(a,l,E)))
})),e.data.show&&(t&&t(),
P&&P(a,E)),N||R||E()
}
function Fo(e,t){
const a=e.elm
o(a._enterCb)&&(a._enterCb.cancelled=!0,a._enterCb())
const s=xo(e.data.transition)
if(i(s)||1!==a.nodeType){
return t()
}
if(o(a._leaveCb)){
return
}
const{css:n,type:l,leaveClass:c,leaveToClass:u,leaveActiveClass:d,beforeLeave:p,leave:g,afterLeave:m,leaveCancelled:h,delayLeave:b,duration:v}=s,y=!1!==n&&!Z,f=Jo(g),j=k(r(v)?v.leave:v)
o(j)&&Ho(j,"leave",e)
const w=a._leaveCb=q(()=>{
a.parentNode&&a.parentNode._pending&&(a.parentNode._pending[e.key]=null),
y&&(Eo(a,u),
Eo(a,d)),w.cancelled?(y&&Eo(a,c),h&&h(a)):(t(),m&&m(a)),a._leaveCb=null
})
function A(){
w.cancelled||(!e.data.show&&a.parentNode&&((a.parentNode._pending||(a.parentNode._pending={}))[e.key]=e),
p&&p(a),
y&&(Ro(a,c),Ro(a,d),qo(()=>{
Eo(a,c),w.cancelled||(Ro(a,u),f||(Ko(j)?setTimeout(w,j):Do(a,l,w)))
})),g&&g(a,w),
y||f||w())
}
b?b(A):A()
}
function Ho(e,t,a){
"number"!=typeof e?ce(`<transition> explicit ${t} duration is not a valid number - `+`got ${JSON.stringify(e)}.`,a.context):isNaN(e)&&ce(`<transition> explicit ${t} duration is NaN - `+"the duration expression might be incorrect.",a.context)
}
function Ko(e){
return"number"==typeof e&&!isNaN(e)
}
function Jo(e){
if(i(e)){
return!1
}
const t=e.fns
return o(t)?Jo(Array.isArray(t)?t[0]:t):(e._length||e.length)>1
}
function Yo(e,t){
!0!==t.data.show&&Go(t)
}
const Zo=function(e){
let t,a
const r={},{modules:l,nodeOps:c}=e
for(t=0;t<di.length;++t){
for(r[di[t]]=[],a=0;a<l.length;++a){
o(l[a][di[t]])&&r[di[t]].push(l[a][di[t]])
}
}
function u(e){
const t=c.parentNode(e)
o(t)&&c.removeChild(t,e)
}
function p(e,t){
return!t&&!e.ns&&!(D.ignoredElements.length&&D.ignoredElements.some(t=>d(t)?t.test(e.tag):t===e.tag))&&D.isUnknownElement(e.tag)
}
let g=0
function m(e,t,a,i,n,l,u){
if(o(e.elm)&&o(l)&&(e=l[u]=je(e)),e.isRootInsert=!n,function(e,t,a,i){
let n=e.data
if(o(n)){
const l=o(e.componentInstance)&&n.keepAlive
if(o(n=n.hook)&&o(n=n.init)&&n(e,!1),o(e.componentInstance)){
return k(e,t),b(a,e.elm,i),
s(l)&&function(e,t,a,i){
let s,n=e
for(;n.componentInstance;){
if(n=n.componentInstance._vnode,o(s=n.data)&&o(s=s.transition)){
for(s=0;s<r.activate.length;++s){
r.activate[s](ui,n)
}
t.push(n)
break
}
}
b(a,e.elm,i)
}(e,t,a,i),!0
}
}
}(e,t,a,i)){
return
}
const d=e.data,m=e.children,h=e.tag
o(h)?(d&&d.pre&&g++,p(e,g)&&ce("Unknown custom element: <"+h+'> - did you register the component correctly? For recursive components, make sure to provide the "name" option.',e.context),
e.elm=e.ns?c.createElementNS(e.ns,h):c.createElement(h,e),
j(e),v(e,m,t),o(d)&&f(e,t),
b(a,e.elm,i),d&&d.pre&&g--):s(e.isComment)?(e.elm=c.createComment(e.text),
b(a,e.elm,i)):(e.elm=c.createTextNode(e.text),
b(a,e.elm,i))
}
function k(e,t){
o(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),
e.elm=e.componentInstance.$el,
y(e)?(f(e,t),j(e)):(ci(e),t.push(e))
}
function b(e,t,a){
o(e)&&(o(a)?c.parentNode(a)===e&&c.insertBefore(e,t,a):c.appendChild(e,t))
}
function v(e,t,a){
if(Array.isArray(t)){
B(t)
for(let i=0;i<t.length;++i){
m(t[i],a,e.elm,null,!0,t,i)
}
}else{
n(e.text)&&c.appendChild(e.elm,c.createTextNode(String(e.text)))
}
}
function y(e){
for(;e.componentInstance;){
e=e.componentInstance._vnode
}
return o(e.tag)
}
function f(e,a){
for(let t=0;t<r.create.length;++t){
r.create[t](ui,e)
}
t=e.data.hook,o(t)&&(o(t.create)&&t.create(ui,e),o(t.insert)&&a.push(e))
}
function j(e){
let t
if(o(t=e.fnScopeId)){
c.setStyleScope(e.elm,t)
}else{
let a=e
for(;a;){
o(t=a.context)&&o(t=t.$options._scopeId)&&c.setStyleScope(e.elm,t),a=a.parent
}
}
o(t=ia)&&t!==e.context&&t!==e.fnContext&&o(t=t.$options._scopeId)&&c.setStyleScope(e.elm,t)
}
function w(e,t,a,i,o,s){
for(;i<=o;++i){
m(a[i],s,e,t,!1,a,i)
}
}
function A(e){
let t,a
const i=e.data
if(o(i)){
for(o(t=i.hook)&&o(t=t.destroy)&&t(e),t=0;t<r.destroy.length;++t){
r.destroy[t](e)
}
}
if(o(t=e.children)){
for(a=0;a<e.children.length;++a){
A(e.children[a])
}
}
}
function z(e,t,a){
for(;t<=a;++t){
const a=e[t]
o(a)&&(o(a.tag)?(S(a),A(a)):u(a.elm))
}
}
function S(e,t){
if(o(t)||o(e.data)){
let a
const i=r.remove.length+1
for(o(t)?t.listeners+=i:t=function(e,t){
function a(){
0==--a.listeners&&u(e)
}
return a.listeners=t,a
}(e.elm,i),o(a=e.componentInstance)&&o(a=a._vnode)&&o(a.data)&&S(a,t),
a=0;a<r.remove.length;++a){
r.remove[a](e,t)
}
o(a=e.data.hook)&&o(a=a.remove)?a(e,t):t()
}else{
u(e.elm)
}
}
function B(e){
const t={}
for(let a=0;a<e.length;a++){
const i=e[a],s=i.key
o(s)&&(t[s]?ce(`Duplicate keys detected: '${s}'. This may cause an update error.`,i.context):t[s]=!0)
}
}
function _(e,t,a,i){
for(let s=a;s<i;s++){
const a=t[s]
if(o(a)&&pi(e,a)){
return s
}
}
}
function T(e,t,a,n,l,u){
if(e===t){
return
}
o(t.elm)&&o(n)&&(t=n[l]=je(t))
const d=t.elm=e.elm
if(s(e.isAsyncPlaceholder)){
return void(o(t.asyncFactory.resolved)?P(e.elm,t,a):t.isAsyncPlaceholder=!0)
}
if(s(t.isStatic)&&s(e.isStatic)&&t.key===e.key&&(s(t.isCloned)||s(t.isOnce))){
return void(t.componentInstance=e.componentInstance)
}
let p
const g=t.data
o(g)&&o(p=g.hook)&&o(p=p.prepatch)&&p(e,t)
const k=e.children,h=t.children
if(o(g)&&y(t)){
for(p=0;p<r.update.length;++p){
r.update[p](e,t)
}
o(p=g.hook)&&o(p=p.update)&&p(e,t)
}
i(t.text)?o(k)&&o(h)?k!==h&&function(e,t,a,s,n){
let r,l,u,d,p=0,g=0,k=t.length-1,h=t[0],b=t[k],v=a.length-1,y=a[0],f=a[v]
const j=!n
for(B(a);p<=k&&g<=v;){
i(h)?h=t[++p]:i(b)?b=t[--k]:pi(h,y)?(T(h,y,s,a,g),h=t[++p],
y=a[++g]):pi(b,f)?(T(b,f,s,a,v),
b=t[--k],f=a[--v]):pi(h,f)?(T(h,f,s,a,v),j&&c.insertBefore(e,h.elm,c.nextSibling(b.elm)),
h=t[++p],
f=a[--v]):pi(b,y)?(T(b,y,s,a,g),j&&c.insertBefore(e,b.elm,h.elm),b=t[--k],
y=a[++g]):(i(r)&&(r=gi(t,p,k)),
l=o(y.key)?r[y.key]:_(y,t,p,k),i(l)?m(y,s,e,h.elm,!1,a,g):(u=t[l],
pi(u,y)?(T(u,y,s,a,g),
t[l]=void 0,j&&c.insertBefore(e,u.elm,h.elm)):m(y,s,e,h.elm,!1,a,g)),
y=a[++g])
}
p>k?(d=i(a[v+1])?null:a[v+1].elm,w(e,d,a,g,v,s)):g>v&&z(t,p,k)
}(d,k,h,a,u):o(h)?(B(h),
o(e.text)&&c.setTextContent(d,""),w(d,null,h,0,h.length-1,a)):o(k)?z(k,0,k.length-1):o(e.text)&&c.setTextContent(d,""):e.text!==t.text&&c.setTextContent(d,t.text),
o(g)&&o(p=g.hook)&&o(p=p.postpatch)&&p(e,t)
}
function x(e,t,a){
if(s(a)&&o(e.parent)){
e.parent.data.pendingInsert=t
}else{
for(let e=0;e<t.length;++e){
t[e].data.hook.insert(t[e])
}
}
}
let O=!1
const C=h("attrs,class,staticClass,staticStyle,key")
function P(e,t,a,i){
let n
const{tag:r,data:l,children:c}=t
if(i=i||l&&l.pre,t.elm=e,s(t.isComment)&&o(t.asyncFactory)){
return t.isAsyncPlaceholder=!0,
!0
}
if(!function(e,t,a){
return o(t.tag)?0===t.tag.indexOf("vue-component")||!p(t,a)&&t.tag.toLowerCase()===(e.tagName&&e.tagName.toLowerCase()):e.nodeType===(t.isComment?8:3)
}(e,t,i)){
return!1
}
if(o(l)&&(o(n=l.hook)&&o(n=n.init)&&n(t,!0),o(n=t.componentInstance))){
return k(t,a),
!0
}
if(o(r)){
if(o(c)){
if(e.hasChildNodes()){
if(o(n=l)&&o(n=n.domProps)&&o(n=n.innerHTML)){
if(n!==e.innerHTML){
return"undefined"==typeof console||O||(O=!0),!1
}
}else{
let t=!0,o=e.firstChild
for(let e=0;e<c.length;e++){
if(!o||!P(o,c[e],a,i)){
t=!1
break
}
o=o.nextSibling
}
if(!t||o){
return"undefined"==typeof console||O||(O=!0),!1
}
}
}else{
v(t,c,a)
}
}
if(o(l)){
let e=!1
for(const i in l){
if(!C(i)){
e=!0,f(t,a)
break
}
}
!e&&l.class&&dt(l.class)
}
}else{
e.data!==t.text&&(e.data=t.text)
}
return!0
}
return function(e,t,a,n){
if(i(t)){
return void(o(e)&&A(e))
}
let l=!1
const u=[]
if(i(e)){
l=!0,m(t,u)
}else{
const i=o(e.nodeType)
if(!i&&pi(e,t)){
T(e,t,u,null,null,n)
}else{
if(i){
if(1===e.nodeType&&e.hasAttribute("data-server-rendered")&&(e.removeAttribute("data-server-rendered"),
a=!0),
s(a)){
if(P(e,t,u)){
return x(t,u,!0),e
}
ce("The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render.")
}
d=e,e=new ve(c.tagName(d).toLowerCase(),{},[],void 0,d)
}
const n=e.elm,l=c.parentNode(n)
if(m(t,u,n._leaveCb?null:l,c.nextSibling(n)),o(t.parent)){
let e=t.parent
const a=y(t)
for(;e;){
for(let t=0;t<r.destroy.length;++t){
r.destroy[t](e)
}
if(e.elm=t.elm,a){
for(let t=0;t<r.create.length;++t){
r.create[t](ui,e)
}
const t=e.data.hook.insert
if(t.merged){
for(let e=1;e<t.fns.length;e++){
t.fns[e]()
}
}
}else{
ci(e)
}
e=e.parent
}
}
o(l)?z([e],0,0):o(e.tag)&&A(e)
}
}
var d
return x(t,u,l),t.elm
}
}({
nodeOps:ri,
modules:[zi,Bi,co,mo,So,F?{
create:Yo,
activate:Yo,
remove(e,t){
!0!==e.data.show?Fo(e,t):t()
}
}:{}].concat(fi)
})
Z&&document.addEventListener("selectionchange",()=>{
const e=document.activeElement
e&&e.vmodel&&ss(e,"input")
})
const Xo={
inserted(e,t,a,i){
"select"===a.tag?(i.elm&&!i.elm._vOptions?kt(a,"postpatch",()=>{
Xo.componentUpdated(e,t,a)
}):Qo(e,t,a.context),e._vOptions=[].map.call(e.options,as)):("textarea"===a.tag||si(e.type))&&(e._vModifiers=t.modifiers,
t.modifiers.lazy||(e.addEventListener("compositionstart",is),
e.addEventListener("compositionend",os),
e.addEventListener("change",os),Z&&(e.vmodel=!0)))
},
componentUpdated(e,t,a){
if("select"===a.tag){
Qo(e,t,a.context)
const i=e._vOptions,o=e._vOptions=[].map.call(e.options,as)
if(o.some((e,t)=>!L(e,i[t]))){
(e.multiple?t.value.some(e=>ts(e,o)):t.value!==t.oldValue&&ts(t.value,o))&&ss(e,"change")
}
}
}
}
function Qo(e,t,a){
es(e,t,a),(Y||X)&&setTimeout(()=>{
es(e,t,a)
},0)
}
function es(e,t,a){
const i=t.value,o=e.multiple
if(o&&!Array.isArray(i)){
return void ce(`<select multiple v-model="${t.expression}"> `+`expects an Array value for its binding, but got ${Object.prototype.toString.call(i).slice(8,-1)}`,a)
}
let s,n
for(let t=0,a=e.options.length;t<a;t++){
if(n=e.options[t],o){
s=N(i,as(n))>-1,n.selected!==s&&(n.selected=s)
}else if(L(as(n),i)){
return void(e.selectedIndex!==t&&(e.selectedIndex=t))
}
}
o||(e.selectedIndex=-1)
}
function ts(e,t){
return t.every(t=>!L(t,e))
}
function as(e){
return"_value"in e?e._value:e.value
}
function is(e){
e.target.composing=!0
}
function os(e){
e.target.composing&&(e.target.composing=!1,ss(e.target,"input"))
}
function ss(e,t){
const a=document.createEvent("HTMLEvents")
a.initEvent(t,!0,!0),e.dispatchEvent(a)
}
function ns(e){
return!e.componentInstance||e.data&&e.data.transition?e:ns(e.componentInstance._vnode)
}
var rs={
model:Xo,
show:{
bind(e,{value:t},a){
const i=(a=ns(a)).data&&a.data.transition,o=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display
t&&i?(a.data.show=!0,Go(a,()=>{
e.style.display=o
})):e.style.display=t?o:"none"
},
update(e,{value:t,oldValue:a},i){
if(!t==!a){
return
}
(i=ns(i)).data&&i.data.transition?(i.data.show=!0,t?Go(i,()=>{
e.style.display=e.__vOriginalDisplay
}):Fo(i,()=>{
e.style.display="none"
})):e.style.display=t?e.__vOriginalDisplay:"none"
},
unbind(e,t,a,i,o){
o||(e.style.display=e.__vOriginalDisplay)
}
}
}
const ls={
name:String,
appear:Boolean,
css:Boolean,
mode:String,
type:String,
enterClass:String,
leaveClass:String,
enterToClass:String,
leaveToClass:String,
enterActiveClass:String,
leaveActiveClass:String,
appearClass:String,
appearActiveClass:String,
appearToClass:String,
duration:[Number,String,Object]
}
function cs(e){
const t=e&&e.componentOptions
return t&&t.Ctor.options.abstract?cs(Xt(t.children)):e
}
function us(e){
const t={},a=e.$options
for(const i in a.propsData){
t[i]=e[i]
}
const i=a._parentListeners
for(const e in i){
t[z(e)]=i[e]
}
return t
}
function ds(e,t){
if(/\d-keep-alive$/.test(t.tag)){
return e("keep-alive",{
props:t.componentOptions.propsData
})
}
}
const ps=e=>e.tag||Zt(e),gs=e=>"show"===e.name
var ms={
name:"transition",
props:ls,
abstract:!0,
render(e){
let t=this.$slots.default
if(!t){
return
}
if(t=t.filter(ps),!t.length){
return
}
t.length>1&&ce("<transition> can only be used on a single element. Use <transition-group> for lists.",this.$parent)
const a=this.mode
a&&"in-out"!==a&&"out-in"!==a&&ce("invalid <transition> mode: "+a,this.$parent)
const i=t[0]
if(function(e){
for(;e=e.parent;){
if(e.data.transition){
return!0
}
}
}(this.$vnode)){
return i
}
const o=cs(i)
if(!o){
return i
}
if(this._leaving){
return ds(e,i)
}
const s=`__transition-${this._uid}-`
o.key=null==o.key?o.isComment?s+"comment":s+o.tag:n(o.key)?0===String(o.key).indexOf(s)?o.key:s+o.key:o.key
const r=(o.data||(o.data={})).transition=us(this),l=this._vnode,c=cs(l)
if(o.data.directives&&o.data.directives.some(gs)&&(o.data.show=!0),c&&c.data&&!function(e,t){
return t.key===e.key&&t.tag===e.tag
}(o,c)&&!Zt(c)&&(!c.componentInstance||!c.componentInstance._vnode.isComment)){
const t=c.data.transition=O({},r)
if("out-in"===a){
return this._leaving=!0,kt(t,"afterLeave",()=>{
this._leaving=!1,this.$forceUpdate()
}),ds(e,i)
}
if("in-out"===a){
if(Zt(o)){
return l
}
let e
const a=()=>{
e()
}
kt(r,"afterEnter",a),kt(r,"enterCancelled",a),kt(t,"delayLeave",t=>{
e=t
})
}
}
return i
}
}
const ks=O({
tag:String,
moveClass:String
},ls)
function hs(e){
e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()
}
function bs(e){
e.data.newPos=e.elm.getBoundingClientRect()
}
function vs(e){
const t=e.data.pos,a=e.data.newPos,i=t.left-a.left,o=t.top-a.top
if(i||o){
e.data.moved=!0
const t=e.elm.style
t.transform=t.WebkitTransform=`translate(${i}px,${o}px)`,t.transitionDuration="0s"
}
}
delete ks.mode
var ys={
Transition:ms,
TransitionGroup:{
props:ks,
beforeMount(){
const e=this._update
this._update=(t,a)=>{
const i=sa(this)
this.__patch__(this._vnode,this.kept,!1,!0),this._vnode=this.kept,i(),e.call(this,t,a)
}
},
render(e){
const t=this.tag||this.$vnode.data.tag||"span",a=Object.create(null),i=this.prevChildren=this.children,o=this.$slots.default||[],s=this.children=[],n=us(this)
for(let e=0;e<o.length;e++){
const t=o[e]
if(t.tag){
if(null!=t.key&&0!==String(t.key).indexOf("__vlist")){
s.push(t),a[t.key]=t,(t.data||(t.data={})).transition=n
}else{
const e=t.componentOptions,a=e?e.Ctor.options.name||e.tag||"":t.tag
ce(`<transition-group> children must be keyed: <${a}>`)
}
}
}
if(i){
const o=[],s=[]
for(let e=0;e<i.length;e++){
const t=i[e]
t.data.transition=n,t.data.pos=t.elm.getBoundingClientRect(),a[t.key]?o.push(t):s.push(t)
}
this.kept=e(t,null,o),this.removed=s
}
return e(t,null,s)
},
updated(){
const e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move"
e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(hs),e.forEach(bs),e.forEach(vs),this._reflow=document.body.offsetHeight,
e.forEach(e=>{
if(e.data.moved){
const a=e.elm,i=a.style
Ro(a,t),i.transform=i.WebkitTransform=i.transitionDuration="",a.addEventListener($o,a._moveCb=function e(i){
i&&i.target!==a||i&&!/transform$/.test(i.propertyName)||(a.removeEventListener($o,e),
a._moveCb=null,
Eo(a,t))
})
}
}))
},
methods:{
hasMove(e,t){
if(!Co){
return!1
}
if(this._hasMove){
return this._hasMove
}
const a=e.cloneNode()
e._transitionClasses&&e._transitionClasses.forEach(e=>{
To(a,e)
}),_o(a,t),a.style.display="none",this.$el.appendChild(a)
const i=Mo(a)
return this.$el.removeChild(a),this._hasMove=i.hasTransform
}
}
}
}
Ca.config.mustUseProp=Ua,Ca.config.isReservedTag=ai,Ca.config.isReservedAttr=Ea,
Ca.config.getTagNamespace=ii,
Ca.config.isUnknownElement=function(e){
if(!F){
return!0
}
if(ai(e)){
return!1
}
if(e=e.toLowerCase(),null!=oi[e]){
return oi[e]
}
const t=document.createElement(e)
return e.indexOf("-")>-1?oi[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:oi[e]=/HTMLUnknownElement/.test(t.toString())
},
O(Ca.options.directives,rs),O(Ca.options.components,ys),Ca.prototype.__patch__=F?Zo:P,
Ca.prototype.$mount=function(e,t){
return function(e,t,a){
let i
return e.$el=t,e.$options.render||(e.$options.render=ye,e.$options.template&&"#"!==e.$options.template.charAt(0)||e.$options.el||t?ce("You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.",e):ce("Failed to mount component: template or render function not defined.",e)),
la(e,"beforeMount"),
i=D.performance&&ot?()=>{
const t=e._name,i=e._uid,o=`vue-perf-start:${i}`,s=`vue-perf-end:${i}`
ot(o)
const n=e._render()
ot(s),st(`vue ${t} render`,o,s),ot(o),e._update(n,a),ot(s),st(`vue ${t} patch`,o,s)
}:()=>{
e._update(e._render(),a)
},new fa(e,i,P,{
before(){
e._isMounted&&!e._isDestroyed&&la(e,"beforeUpdate")
}
},!0),a=!1,null==e.$vnode&&(e._isMounted=!0,la(e,"mounted")),e
}(this,e=e&&F?ni(e):void 0,t)
},F&&setTimeout(()=>{
D.devtools&&se&&se.emit("init",Ca),D.productionTip
},0)
const fs=/\{\{((?:.|\r?\n)+?)\}\}/g,js=/[-.*+?^${}()|[\]\/\\]/g,ws=w(e=>{
const t=e[0].replace(js,"\\$&"),a=e[1].replace(js,"\\$&")
return new RegExp(t+"((?:.|\\n)+?)"+a,"g")
})
function As(e,t){
const a=t?ws(t):fs
if(!a.test(e)){
return
}
const i=[],o=[]
let s,n,r,l=a.lastIndex=0
for(;s=a.exec(e);){
n=s.index,n>l&&(o.push(r=e.slice(l,n)),i.push(JSON.stringify(r)))
const t=Ti(s[1].trim())
i.push(`_s(${t})`),o.push({
"@binding":t
}),l=n+s[0].length
}
return l<e.length&&(o.push(r=e.slice(l)),i.push(JSON.stringify(r))),{
expression:i.join("+"),
tokens:o
}
}
var zs={
staticKeys:["staticClass"],
transformNode:function(e,t){
const a=t.warn||Oi,i=Di(e,"class")
if(i){
As(i,t.delimiters)&&a(`class="${i}": `+'Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div class="{{ val }}">, use <div :class="val">.',e.rawAttrsMap.class)
}
i&&(e.staticClass=JSON.stringify(i))
const o=Ei(e,"class",!1)
o&&(e.classBinding=o)
},
genData:function(e){
let t=""
return e.staticClass&&(t+=`staticClass:${e.staticClass},`),e.classBinding&&(t+=`class:${e.classBinding},`),
t
}
}
var Ss={
staticKeys:["staticStyle"],
transformNode:function(e,t){
const a=t.warn||Oi,i=Di(e,"style")
if(i){
As(i,t.delimiters)&&a(`style="${i}": `+'Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div style="{{ val }}">, use <div :style="val">.',e.rawAttrsMap.style)
e.staticStyle=JSON.stringify(ko(i))
}
const o=Ei(e,"style",!1)
o&&(e.styleBinding=o)
},
genData:function(e){
let t=""
return e.staticStyle&&(t+=`staticStyle:${e.staticStyle},`),e.styleBinding&&(t+=`style:(${e.styleBinding}),`),
t
}
}
let Bs
var _s={
decode:e=>(Bs=Bs||document.createElement("div"),Bs.innerHTML=e,Bs.textContent)
}
const Ts=h("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),xs=h("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),Os=h("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),Cs=/^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,Ps=/^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,$s=`[a-zA-Z_][\\-\\.0-9_a-zA-Z${U.source}]*`,Ws=`((?:${$s}\\:)?${$s})`,Ls=new RegExp(`^<${Ws}`),Ns=/^\s*(\/?)>/,qs=new RegExp(`^<\\/${Ws}[^>]*>`),Rs=/^<!DOCTYPE [^>]+>/i,Es=/^<!\--/,Ds=/^<!\[/,Us=h("script,style,textarea",!0),Ms={},Vs={
"&lt;":"<",
"&gt;":">",
"&quot;":'"',
"&amp;":"&",
"&#10;":"\n",
"&#9;":"\t",
"&#39;":"'"
},Is=/&(?:lt|gt|quot|amp|#39);/g,Gs=/&(?:lt|gt|quot|amp|#39|#10|#9);/g,Fs=h("pre,textarea",!0),Hs=(e,t)=>e&&Fs(e)&&"\n"===t[0]
function Ks(e,t){
const a=t?Gs:Is
return e.replace(a,e=>Vs[e])
}
const Js=/^@|^v-on:/,Ys=/^v-|^@|^:|^#/,Zs=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,Xs=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,Qs=/^\(|\)$/g,en=/^\[.*\]$/,tn=/:(.*)$/,an=/^:|^\.|^v-bind:/,on=/\.[^.\]]+(?=[^\]]*$)/g,sn=/^v-slot(:|$)|^#/,nn=/[\r\n]/,rn=/\s+/g,ln=/[\s"'<>\/=]/,cn=w(_s.decode)
let un,dn,pn,gn,mn,kn,hn,bn,vn
function yn(e,t,a){
return{
type:1,
tag:e,
attrsList:t,
attrsMap:Bn(t),
rawAttrsMap:{},
parent:a,
children:[]
}
}
function fn(e,t){
un=t.warn||Oi,kn=t.isPreTag||$,hn=t.mustUseProp||$,bn=t.getTagNamespace||$
const a=t.isReservedTag||$
vn=e=>!!e.component||!a(e.tag),pn=Ci(t.modules,"transformNode"),gn=Ci(t.modules,"preTransformNode"),
mn=Ci(t.modules,"postTransformNode"),
dn=t.delimiters
const i=[],o=!1!==t.preserveWhitespace,s=t.whitespace
let n,r,l=!1,c=!1,u=!1
function d(e,t){
u||(u=!0,un(e,t))
}
function p(e){
if(g(e),l||e.processed||(e=jn(e,t)),i.length||e===n||(n.if&&(e.elseif||e.else)?(m(e),
An(n,{
exp:e.elseif,
block:e
})):d("Component template should contain exactly one root element. If you are using v-if on multiple elements, use v-else-if to chain them instead.",{
start:e.start
})),r&&!e.forbidden){
if(e.elseif||e.else){
!function(e,t){
const a=function(e){
let t=e.length
for(;t--;){
if(1===e[t].type){
return e[t]
}
" "!==e[t].text&&un(`text "${e[t].text.trim()}" between v-if and v-else(-if) `+"will be ignored.",e[t]),
e.pop()
}
}(t.children)
a&&a.if?An(a,{
exp:e.elseif,
block:e
}):un(`v-${e.elseif?'else-if="'+e.elseif+'"':"else"} `+`used on element <${e.tag}> without corresponding v-if.`,e.rawAttrsMap[e.elseif?"v-else-if":"v-else"])
}(e,r)
}else{
if(e.slotScope){
const t=e.slotTarget||'"default"'
;(r.scopedSlots||(r.scopedSlots={}))[t]=e
}
r.children.push(e),e.parent=r
}
}
e.children=e.children.filter(e=>!e.slotScope),g(e),e.pre&&(l=!1),kn(e.tag)&&(c=!1)
for(let a=0;a<mn.length;a++){
mn[a](e,t)
}
}
function g(e){
if(!c){
let t
for(;(t=e.children[e.children.length-1])&&3===t.type&&" "===t.text;){
e.children.pop()
}
}
}
function m(e){
"slot"!==e.tag&&"template"!==e.tag||d(`Cannot use <${e.tag}> as component root element because it may `+"contain multiple nodes.",{
start:e.start
}),e.attrsMap.hasOwnProperty("v-for")&&d("Cannot use v-for on stateful component root element because it renders multiple elements.",e.rawAttrsMap["v-for"])
}
return function(e,t){
const a=[],i=t.expectHTML,o=t.isUnaryTag||$,s=t.canBeLeftOpenTag||$
let n,r,l=0
for(;e;){
if(n=e,r&&Us(r)){
let a=0
const i=r.toLowerCase(),o=Ms[i]||(Ms[i]=new RegExp("([\\s\\S]*?)(</"+i+"[^>]*>)","i")),s=e.replace(o,(function(e,o,s){
return a=s.length,
Us(i)||"noscript"===i||(o=o.replace(/<!\--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),
Hs(i,o)&&(o=o.slice(1)),
t.chars&&t.chars(o),""
}))
l+=e.length-s.length,e=s,p(i,l-a,l)
}else{
let a,i,o,s=e.indexOf("<")
if(0===s){
if(Es.test(e)){
const a=e.indexOf("--\x3e")
if(a>=0){
t.shouldKeepComment&&t.comment(e.substring(4,a),l,l+a+3),c(a+3)
continue
}
}
if(Ds.test(e)){
const t=e.indexOf("]>")
if(t>=0){
c(t+2)
continue
}
}
const a=e.match(Rs)
if(a){
c(a[0].length)
continue
}
const i=e.match(qs)
if(i){
const e=l
c(i[0].length),p(i[1],e,l)
continue
}
const o=u()
if(o){
d(o),Hs(o.tagName,e)&&c(1)
continue
}
}
if(s>=0){
for(i=e.slice(s);!(qs.test(i)||Ls.test(i)||Es.test(i)||Ds.test(i)||(o=i.indexOf("<",1),
o<0));){
s+=o,i=e.slice(s)
}
a=e.substring(0,s)
}
s<0&&(a=e),a&&c(a.length),t.chars&&a&&t.chars(a,l-a.length,l)
}
if(e===n){
t.chars&&t.chars(e),!a.length&&t.warn&&t.warn(`Mal-formatted tag at end of template: "${e}"`,{
start:l+e.length
})
break
}
}
function c(t){
l+=t,e=e.substring(t)
}
function u(){
const t=e.match(Ls)
if(t){
const a={
tagName:t[1],
attrs:[],
start:l
}
let i,o
for(c(t[0].length);!(i=e.match(Ns))&&(o=e.match(Ps)||e.match(Cs));){
o.start=l,c(o[0].length),
o.end=l,a.attrs.push(o)
}
if(i){
return a.unarySlash=i[1],c(i[0].length),a.end=l,a
}
}
}
function d(e){
const n=e.tagName,l=e.unarySlash
i&&("p"===r&&Os(n)&&p(r),s(n)&&r===n&&p(n))
const c=o(n)||!!l,u=e.attrs.length,d=new Array(u)
for(let a=0;a<u;a++){
const i=e.attrs[a],o=i[3]||i[4]||i[5]||"",s="a"===n&&"href"===i[1]?t.shouldDecodeNewlinesForHref:t.shouldDecodeNewlines
d[a]={
name:i[1],
value:Ks(o,s)
},t.outputSourceRange&&(d[a].start=i.start+i[0].match(/^\s*/).length,
d[a].end=i.end)
}
c||(a.push({
tag:n,
lowerCasedTag:n.toLowerCase(),
attrs:d,
start:e.start,
end:e.end
}),r=n),t.start&&t.start(n,d,c,e.start,e.end)
}
function p(e,i,o){
let s,n
if(null==i&&(i=l),null==o&&(o=l),e){
for(n=e.toLowerCase(),s=a.length-1;s>=0&&a[s].lowerCasedTag!==n;s--){}
}else{
s=0
}
if(s>=0){
for(let n=a.length-1;n>=s;n--){
(n>s||!e&&t.warn)&&t.warn(`tag <${a[n].tag}> has no matching end tag.`,{
start:a[n].start,
end:a[n].end
}),t.end&&t.end(a[n].tag,i,o)
}
a.length=s,r=s&&a[s-1].tag
}else{
"br"===n?t.start&&t.start(e,[],!0,i,o):"p"===n&&(t.start&&t.start(e,[],!1,i,o),
t.end&&t.end(e,i,o))
}
}
p()
}(e,{
warn:un,
expectHTML:t.expectHTML,
isUnaryTag:t.isUnaryTag,
canBeLeftOpenTag:t.canBeLeftOpenTag,
shouldDecodeNewlines:t.shouldDecodeNewlines,
shouldDecodeNewlinesForHref:t.shouldDecodeNewlinesForHref,
shouldKeepComment:t.comments,
outputSourceRange:t.outputSourceRange,
start(e,a,o,s,u){
const d=r&&r.ns||bn(e)
Y&&"svg"===d&&(a=function(e){
const t=[]
for(let a=0;a<e.length;a++){
const i=e[a]
_n.test(i.name)||(i.name=i.name.replace(Tn,""),t.push(i))
}
return t
}(a))
let g=yn(e,a,r)
var k
d&&(g.ns=d),t.outputSourceRange&&(g.start=s,g.end=u,g.rawAttrsMap=g.attrsList.reduce((e,t)=>(e[t.name]=t,
e),{})),
a.forEach(e=>{
ln.test(e.name)&&un("Invalid dynamic argument expression: attribute names cannot contain spaces, quotes, <, >, / or =.",{
start:e.start+e.name.indexOf("["),
end:e.start+e.name.length
})
}),"style"!==(k=g).tag&&("script"!==k.tag||k.attrsMap.type&&"text/javascript"!==k.attrsMap.type)||oe()||(g.forbidden=!0,
un("Templates should only be responsible for mapping the state to the UI. Avoid placing tags with side-effects in your templates, such as "+`<${e}>`+", as they will not be parsed.",{
start:g.start
}))
for(let e=0;e<gn.length;e++){
g=gn[e](g,t)||g
}
l||(!function(e){
null!=Di(e,"v-pre")&&(e.pre=!0)
}(g),g.pre&&(l=!0)),kn(g.tag)&&(c=!0),l?function(e){
const t=e.attrsList,a=t.length
if(a){
const i=e.attrs=new Array(a)
for(let e=0;e<a;e++){
i[e]={
name:t[e].name,
value:JSON.stringify(t[e].value)
},null!=t[e].start&&(i[e].start=t[e].start,i[e].end=t[e].end)
}
}else{
e.pre||(e.plain=!0)
}
}(g):g.processed||(wn(g),function(e){
const t=Di(e,"v-if")
if(t){
e.if=t,An(e,{
exp:t,
block:e
})
}else{
null!=Di(e,"v-else")&&(e.else=!0)
const t=Di(e,"v-else-if")
t&&(e.elseif=t)
}
}(g),function(e){
null!=Di(e,"v-once")&&(e.once=!0)
}(g)),n||(n=g,m(n)),o?p(g):(r=g,i.push(g))
},
end(e,a,o){
const s=i[i.length-1]
i.length-=1,r=i[i.length-1],t.outputSourceRange&&(s.end=o),p(s)
},
chars(a,i,n){
if(!r){
return void(a===e?d("Component template requires a root element, rather than just text.",{
start:i
}):(a=a.trim())&&d(`text "${a}" outside root element will be ignored.`,{
start:i
}))
}
if(Y&&"textarea"===r.tag&&r.attrsMap.placeholder===a){
return
}
const u=r.children
var p
if(a=c||a.trim()?"script"===(p=r).tag||"style"===p.tag?a:cn(a):u.length?s?"condense"===s&&nn.test(a)?"":" ":o?" ":"":""){
let e,o
c||"condense"!==s||(a=a.replace(rn," ")),!l&&" "!==a&&(e=As(a,dn))?o={
type:2,
expression:e.expression,
tokens:e.tokens,
text:a
}:" "===a&&u.length&&" "===u[u.length-1].text||(o={
type:3,
text:a
}),o&&(t.outputSourceRange&&(o.start=i,o.end=n),u.push(o))
}
},
comment(e,a,i){
if(r){
const o={
type:3,
text:e,
isComment:!0
}
t.outputSourceRange&&(o.start=a,o.end=i),r.children.push(o)
}
}
}),n
}
function jn(e,t){
var a
!function(e){
const t=Ei(e,"key")
if(t){
if("template"===e.tag&&un("<template> cannot be keyed. Place the key on real elements instead.",Ri(e,"key")),
e.for){
const a=e.iterator2||e.iterator1,i=e.parent
a&&a===t&&i&&"transition-group"===i.tag&&un("Do not use v-for index as key on <transition-group> children, this is the same as not using keys.",Ri(e,"key"),!0)
}
e.key=t
}
}(e),e.plain=!e.key&&!e.scopedSlots&&!e.attrsList.length,function(e){
const t=Ei(e,"ref")
t&&(e.ref=t,e.refInFor=function(e){
let t=e
for(;t;){
if(void 0!==t.for){
return!0
}
t=t.parent
}
return!1
}(e))
}(e),function(e){
let t
"template"===e.tag?(t=Di(e,"scope"),t&&un('the "scope" attribute for scoped slots have been deprecated and replaced by "slot-scope" since 2.5. The new "slot-scope" attribute can also be used on plain elements in addition to <template> to denote scoped slots.',e.rawAttrsMap.scope,!0),
e.slotScope=t||Di(e,"slot-scope")):(t=Di(e,"slot-scope"))&&(e.attrsMap["v-for"]&&un(`Ambiguous combined usage of slot-scope and v-for on <${e.tag}> `+"(v-for takes higher priority). Use a wrapper <template> for the scoped slot to make it clearer.",e.rawAttrsMap["slot-scope"],!0),
e.slotScope=t)
const a=Ei(e,"slot")
a&&(e.slotTarget='""'===a?'"default"':a,e.slotTargetDynamic=!(!e.attrsMap[":slot"]&&!e.attrsMap["v-bind:slot"]),
"template"===e.tag||e.slotScope||$i(e,"slot",a,Ri(e,"slot")))
if("template"===e.tag){
const t=Ui(e,sn)
if(t){
(e.slotTarget||e.slotScope)&&un("Unexpected mixed usage of different slot syntaxes.",e),
e.parent&&!vn(e.parent)&&un("<template v-slot> can only appear at the root level inside the receiving component",e)
const{name:a,dynamic:i}=zn(t)
e.slotTarget=a,e.slotTargetDynamic=i,e.slotScope=t.value||"_empty_"
}
}else{
const t=Ui(e,sn)
if(t){
vn(e)||un("v-slot can only be used on components or <template>.",t),(e.slotScope||e.slotTarget)&&un("Unexpected mixed usage of different slot syntaxes.",e),
e.scopedSlots&&un("To avoid scope ambiguity, the default slot should also use <template> syntax when there are other named slots.",t)
const a=e.scopedSlots||(e.scopedSlots={}),{name:i,dynamic:o}=zn(t),s=a[i]=yn("template",[],e)
s.slotTarget=i,s.slotTargetDynamic=o,s.children=e.children.filter(e=>{
if(!e.slotScope){
return e.parent=s,!0
}
}),s.slotScope=t.value||"_empty_",e.children=[],e.plain=!1
}
}
}(e),"slot"===(a=e).tag&&(a.slotName=Ei(a,"name"),a.key&&un("`key` does not work on <slot> because slots are abstract outlets and can possibly expand into multiple elements. Use the key on a wrapping element instead.",Ri(a,"key"))),
function(e){
let t
;(t=Ei(e,"is"))&&(e.component=t)
null!=Di(e,"inline-template")&&(e.inlineTemplate=!0)
}(e)
for(let a=0;a<pn.length;a++){
e=pn[a](e,t)||e
}
return function(e){
const t=e.attrsList
let a,i,o,s,n,r,l,c
for(a=0,i=t.length;a<i;a++){
if(o=s=t[a].name,n=t[a].value,Ys.test(o)){
if(e.hasBindings=!0,r=Sn(o.replace(Ys,"")),
r&&(o=o.replace(on,"")),an.test(o)){
o=o.replace(an,""),n=Ti(n),c=en.test(o),c&&(o=o.slice(1,-1)),
0===n.trim().length&&un(`The value for a v-bind expression cannot be empty. Found in "v-bind:${o}"`),
r&&(r.prop&&!c&&(o=z(o),
"innerHtml"===o&&(o="innerHTML")),r.camel&&!c&&(o=z(o)),
r.sync&&(l=Ii(n,"$event"),
c?qi(e,`"update:"+(${o})`,l,null,!1,un,t[a],!0):(qi(e,`update:${z(o)}`,l,null,!1,un,t[a]),
_(o)!==z(o)&&qi(e,`update:${_(o)}`,l,null,!1,un,t[a])))),
r&&r.prop||!e.component&&hn(e.tag,e.attrsMap.type,o)?Pi(e,o,n,t[a],c):$i(e,o,n,t[a],c)
}else if(Js.test(o)){
o=o.replace(Js,""),c=en.test(o),c&&(o=o.slice(1,-1)),qi(e,o,n,r,!1,un,t[a],c)
}else{
o=o.replace(Ys,"")
const i=o.match(tn)
let l=i&&i[1]
c=!1,l&&(o=o.slice(0,-(l.length+1)),en.test(l)&&(l=l.slice(1,-1),c=!0)),Li(e,o,s,n,l,c,r,t[a]),
"model"===o&&xn(e,n)
}
}else{
As(n,dn)&&un(`${o}="${n}": `+'Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div id="{{ val }}">, use <div :id="val">.',t[a])
$i(e,o,JSON.stringify(n),t[a]),!e.component&&"muted"===o&&hn(e.tag,e.attrsMap.type,o)&&Pi(e,o,"true",t[a])
}
}
}(e),e
}
function wn(e){
let t
if(t=Di(e,"v-for")){
const a=function(e){
const t=e.match(Zs)
if(!t){
return
}
const a={}
a.for=t[2].trim()
const i=t[1].trim().replace(Qs,""),o=i.match(Xs)
o?(a.alias=i.replace(Xs,"").trim(),a.iterator1=o[1].trim(),o[2]&&(a.iterator2=o[2].trim())):a.alias=i
return a
}(t)
a?O(e,a):un(`Invalid v-for expression: ${t}`,e.rawAttrsMap["v-for"])
}
}
function An(e,t){
e.ifConditions||(e.ifConditions=[]),e.ifConditions.push(t)
}
function zn(e){
let t=e.name.replace(sn,"")
return t||("#"!==e.name[0]?t="default":un("v-slot shorthand syntax requires a slot name.",e)),
en.test(t)?{
name:t.slice(1,-1),
dynamic:!0
}:{
name:`"${t}"`,
dynamic:!1
}
}
function Sn(e){
const t=e.match(on)
if(t){
const e={}
return t.forEach(t=>{
e[t.slice(1)]=!0
}),e
}
}
function Bn(e){
const t={}
for(let a=0,i=e.length;a<i;a++){
!t[e[a].name]||Y||X||un("duplicate attribute: "+e[a].name,e[a]),
t[e[a].name]=e[a].value
}
return t
}
const _n=/^xmlns:NS\d+/,Tn=/^NS\d+:/
function xn(e,t){
let a=e
for(;a;){
a.for&&a.alias===t&&un(`<${e.tag} v-model="${t}">: `+"You are binding v-model directly to a v-for iteration alias. This will not be able to modify the v-for source array because writing to the alias is like modifying a function local variable. Consider using an array of objects and use v-model on an object property instead.",e.rawAttrsMap["v-model"]),
a=a.parent
}
}
function On(e){
return yn(e.tag,e.attrsList.slice(),e.parent)
}
var Cn=[zs,Ss,{
preTransformNode:function(e,t){
if("input"===e.tag){
const a=e.attrsMap
if(!a["v-model"]){
return
}
let i
if((a[":type"]||a["v-bind:type"])&&(i=Ei(e,"type")),a.type||i||!a["v-bind"]||(i=`(${a["v-bind"]}).type`),
i){
const a=Di(e,"v-if",!0),o=a?`&&(${a})`:"",s=null!=Di(e,"v-else",!0),n=Di(e,"v-else-if",!0),r=On(e)
wn(r),Wi(r,"type","checkbox"),jn(r,t),r.processed=!0,r.if=`(${i})==='checkbox'`+o,
An(r,{
exp:r.if,
block:r
})
const l=On(e)
Di(l,"v-for",!0),Wi(l,"type","radio"),jn(l,t),An(r,{
exp:`(${i})==='radio'`+o,
block:l
})
const c=On(e)
return Di(c,"v-for",!0),Wi(c,":type",i),jn(c,t),An(r,{
exp:a,
block:c
}),s?r.else=!0:n&&(r.elseif=n),r
}
}
}
}]
const Pn={
expectHTML:!0,
modules:Cn,
directives:{
model:function(e,t,a){
Zi=a
const i=t.value,o=t.modifiers,s=e.tag,n=e.attrsMap.type
if("input"===s&&"file"===n&&Zi(`<${e.tag} v-model="${i}" type="file">:\n`+"File inputs are read only. Use a v-on:change listener instead.",e.rawAttrsMap["v-model"]),
e.component){
return Vi(e,i,o),!1
}
if("select"===s){
!function(e,t,a){
let i=`var $$selectedVal = ${'Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;'+`return ${a&&a.number?"_n(val)":"val"}})`};`
i=`${i} ${Ii(t,"$event.target.multiple ? $$selectedVal : $$selectedVal[0]")}`,qi(e,"change",i,null,!0)
}(e,i,o)
}else if("input"===s&&"checkbox"===n){
!function(e,t,a){
const i=a&&a.number,o=Ei(e,"value")||"null",s=Ei(e,"true-value")||"true",n=Ei(e,"false-value")||"false"
Pi(e,"checked",`Array.isArray(${t})`+`?_i(${t},${o})>-1`+("true"===s?`:(${t})`:`:_q(${t},${s})`)),
qi(e,"change",`var $$a=${t},`+"$$el=$event.target,"+`$$c=$$el.checked?(${s}):(${n});`+"if(Array.isArray($$a)){"+`var $$v=${i?"_n("+o+")":o},`+"$$i=_i($$a,$$v);"+`if($$el.checked){$$i<0&&(${Ii(t,"$$a.concat([$$v])")})}`+`else{$$i>-1&&(${Ii(t,"$$a.slice(0,$$i).concat($$a.slice($$i+1))")})}`+`}else{${Ii(t,"$$c")}}`,null,!0)
}(e,i,o)
}else if("input"===s&&"radio"===n){
!function(e,t,a){
const i=a&&a.number
let o=Ei(e,"value")||"null"
o=i?`_n(${o})`:o,Pi(e,"checked",`_q(${t},${o})`),qi(e,"change",Ii(t,o),null,!0)
}(e,i,o)
}else if("input"===s||"textarea"===s){
!function(e,t,a){
const i=e.attrsMap.type
{
const t=e.attrsMap["v-bind:value"]||e.attrsMap[":value"],a=e.attrsMap["v-bind:type"]||e.attrsMap[":type"]
if(t&&!a){
const a=e.attrsMap["v-bind:value"]?"v-bind:value":":value"
Zi(`${a}="${t}" conflicts with v-model on the same element `+"because the latter already expands to a value binding internally",e.rawAttrsMap[a])
}
}
const{lazy:o,number:s,trim:n}=a||{},r=!o&&"range"!==i,l=o?"change":"range"===i?"__r":"input"
let c="$event.target.value"
n&&(c="$event.target.value.trim()")
s&&(c=`_n(${c})`)
let u=Ii(t,c)
r&&(u=`if($event.target.composing)return;${u}`)
Pi(e,"value",`(${t})`),qi(e,l,u,null,!0),(n||s)&&qi(e,"blur","$forceUpdate()")
}(e,i,o)
}else{
if(!D.isReservedTag(s)){
return Vi(e,i,o),!1
}
Zi(`<${e.tag} v-model="${i}">: `+"v-model is not supported on this element type. If you are working with contenteditable, it's recommended to wrap a library dedicated for that purpose inside a custom component.",e.rawAttrsMap["v-model"])
}
return!0
},
text:function(e,t){
t.value&&Pi(e,"textContent",`_s(${t.value})`,t)
},
html:function(e,t){
t.value&&Pi(e,"innerHTML",`_s(${t.value})`,t)
}
},
isPreTag:e=>"pre"===e,
isUnaryTag:Ts,
mustUseProp:Ua,
canBeLeftOpenTag:xs,
isReservedTag:ai,
getTagNamespace:ii,
staticKeys:function(e){
return e.reduce((e,t)=>e.concat(t.staticKeys||[]),[]).join(",")
}(Cn)
}
let $n,Wn
const Ln=w((function(e){
return h("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap"+(e?","+e:""))
}))
function Nn(e,t){
e&&($n=Ln(t.staticKeys||""),Wn=t.isReservedTag||$,function e(t){
if(t.static=function(e){
if(2===e.type){
return!1
}
if(3===e.type){
return!0
}
return!(!e.pre&&(e.hasBindings||e.if||e.for||b(e.tag)||!Wn(e.tag)||function(e){
for(;e.parent;){
if("template"!==(e=e.parent).tag){
return!1
}
if(e.for){
return!0
}
}
return!1
}(e)||!Object.keys(e).every($n)))
}(t),1===t.type){
if(!Wn(t.tag)&&"slot"!==t.tag&&null==t.attrsMap["inline-template"]){
return
}
for(let a=0,i=t.children.length;a<i;a++){
const i=t.children[a]
e(i),i.static||(t.static=!1)
}
if(t.ifConditions){
for(let a=1,i=t.ifConditions.length;a<i;a++){
const i=t.ifConditions[a].block
e(i),i.static||(t.static=!1)
}
}
}
}(e),function e(t,a){
if(1===t.type){
if((t.static||t.once)&&(t.staticInFor=a),t.static&&t.children.length&&(1!==t.children.length||3!==t.children[0].type)){
return void(t.staticRoot=!0)
}
if(t.staticRoot=!1,t.children){
for(let i=0,o=t.children.length;i<o;i++){
e(t.children[i],a||!!t.for)
}
}
if(t.ifConditions){
for(let i=1,o=t.ifConditions.length;i<o;i++){
e(t.ifConditions[i].block,a)
}
}
}
}(e,!1))
}
const qn=/^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/,Rn=/\([^)]*?\);*$/,En=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,Dn={
esc:27,
tab:9,
enter:13,
space:32,
up:38,
left:37,
right:39,
down:40,
delete:[8,46]
},Un={
esc:["Esc","Escape"],
tab:"Tab",
enter:"Enter",
space:[" ","Spacebar"],
up:["Up","ArrowUp"],
left:["Left","ArrowLeft"],
right:["Right","ArrowRight"],
down:["Down","ArrowDown"],
delete:["Backspace","Delete","Del"]
},Mn=e=>`if(${e})return null;`,Vn={
stop:"$event.stopPropagation();",
prevent:"$event.preventDefault();",
self:Mn("$event.target !== $event.currentTarget"),
ctrl:Mn("!$event.ctrlKey"),
shift:Mn("!$event.shiftKey"),
alt:Mn("!$event.altKey"),
meta:Mn("!$event.metaKey"),
left:Mn("'button' in $event && $event.button !== 0"),
middle:Mn("'button' in $event && $event.button !== 1"),
right:Mn("'button' in $event && $event.button !== 2")
}
function In(e,t){
const a=t?"nativeOn:":"on:"
let i="",o=""
for(const t in e){
const a=Gn(e[t])
e[t]&&e[t].dynamic?o+=`${t},${a},`:i+=`"${t}":${a},`
}
return i=`{${i.slice(0,-1)}}`,o?a+`_d(${i},[${o.slice(0,-1)}])`:a+i
}
function Gn(e){
if(!e){
return"function(){}"
}
if(Array.isArray(e)){
return`[${e.map(e=>Gn(e)).join(",")}]`
}
const t=En.test(e.value),a=qn.test(e.value),i=En.test(e.value.replace(Rn,""))
if(e.modifiers){
let o="",s=""
const n=[]
for(const t in e.modifiers){
if(Vn[t]){
s+=Vn[t],Dn[t]&&n.push(t)
}else if("exact"===t){
const t=e.modifiers
s+=Mn(["ctrl","shift","alt","meta"].filter(e=>!t[e]).map(e=>`$event.${e}Key`).join("||"))
}else{
n.push(t)
}
}
return n.length&&(o+=function(e){
return"if(!$event.type.indexOf('key')&&"+`${e.map(Fn).join("&&")})return null;`
}(n)),
s&&(o+=s),`function($event){${o}${t?`return ${e.value}($event)`:a?`return (${e.value})($event)`:i?`return ${e.value}`:e.value}}`
}
return t||a?e.value:`function($event){${i?`return ${e.value}`:e.value}}`
}
function Fn(e){
const t=parseInt(e,10)
if(t){
return`$event.keyCode!==${t}`
}
const a=Dn[e],i=Un[e]
return"_k($event.keyCode,"+`${JSON.stringify(e)},`+`${JSON.stringify(a)},`+"$event.key,"+`${JSON.stringify(i)}`+")"
}
var Hn={
on:function(e,t){
t.modifiers&&ce("v-on without argument does not support modifiers."),
e.wrapListeners=e=>`_g(${e},${t.value})`
},
bind:function(e,t){
e.wrapData=a=>`_b(${a},'${e.tag}',${t.value},${t.modifiers&&t.modifiers.prop?"true":"false"}${t.modifiers&&t.modifiers.sync?",true":""})`
},
cloak:P
}
class Kn{
constructor(e){
this.options=e,this.warn=e.warn||Oi,this.transforms=Ci(e.modules,"transformCode"),
this.dataGenFns=Ci(e.modules,"genData"),
this.directives=O(O({},Hn),e.directives)
const t=e.isReservedTag||$
this.maybeComponent=e=>!!e.component||!t(e.tag),this.onceId=0,this.staticRenderFns=[],
this.pre=!1
}
}
function Jn(e,t){
const a=new Kn(t)
return{
render:`with(this){return ${e?Yn(e,a):'_c("div")'}}`,
staticRenderFns:a.staticRenderFns
}
}
function Yn(e,t){
if(e.parent&&(e.pre=e.pre||e.parent.pre),e.staticRoot&&!e.staticProcessed){
return Zn(e,t)
}
if(e.once&&!e.onceProcessed){
return Xn(e,t)
}
if(e.for&&!e.forProcessed){
return er(e,t)
}
if(e.if&&!e.ifProcessed){
return Qn(e,t)
}
if("template"!==e.tag||e.slotTarget||t.pre){
if("slot"===e.tag){
return function(e,t){
const a=e.slotName||'"default"',i=or(e,t)
let o=`_t(${a}${i?`,${i}`:""}`
const s=e.attrs||e.dynamicAttrs?rr((e.attrs||[]).concat(e.dynamicAttrs||[]).map(e=>({
name:z(e.name),
value:e.value,
dynamic:e.dynamic
}))):null,n=e.attrsMap["v-bind"]
!s&&!n||i||(o+=",null")
s&&(o+=`,${s}`)
n&&(o+=`${s?"":",null"},${n}`)
return o+")"
}(e,t)
}
{
let a
if(e.component){
a=function(e,t,a){
const i=t.inlineTemplate?null:or(t,a,!0)
return`_c(${e},${tr(t,a)}${i?`,${i}`:""})`
}(e.component,e,t)
}else{
let i
;(!e.plain||e.pre&&t.maybeComponent(e))&&(i=tr(e,t))
const o=e.inlineTemplate?null:or(e,t,!0)
a=`_c('${e.tag}'${i?`,${i}`:""}${o?`,${o}`:""})`
}
for(let i=0;i<t.transforms.length;i++){
a=t.transforms[i](e,a)
}
return a
}
}
return or(e,t)||"void 0"
}
function Zn(e,t){
e.staticProcessed=!0
const a=t.pre
return e.pre&&(t.pre=e.pre),t.staticRenderFns.push(`with(this){return ${Yn(e,t)}}`),
t.pre=a,
`_m(${t.staticRenderFns.length-1}${e.staticInFor?",true":""})`
}
function Xn(e,t){
if(e.onceProcessed=!0,e.if&&!e.ifProcessed){
return Qn(e,t)
}
if(e.staticInFor){
let a="",i=e.parent
for(;i;){
if(i.for){
a=i.key
break
}
i=i.parent
}
return a?`_o(${Yn(e,t)},${t.onceId++},${a})`:(t.warn("v-once can only be used inside v-for that is keyed. ",e.rawAttrsMap["v-once"]),
Yn(e,t))
}
return Zn(e,t)
}
function Qn(e,t,a,i){
return e.ifProcessed=!0,function e(t,a,i,o){
if(!t.length){
return o||"_e()"
}
const s=t.shift()
return s.exp?`(${s.exp})?${n(s.block)}:${e(t,a,i,o)}`:`${n(s.block)}`
function n(e){
return i?i(e,a):e.once?Xn(e,a):Yn(e,a)
}
}(e.ifConditions.slice(),t,a,i)
}
function er(e,t,a,i){
const o=e.for,s=e.alias,n=e.iterator1?`,${e.iterator1}`:"",r=e.iterator2?`,${e.iterator2}`:""
return t.maybeComponent(e)&&"slot"!==e.tag&&"template"!==e.tag&&!e.key&&t.warn(`<${e.tag} v-for="${s} in ${o}">: component lists rendered with `+"v-for should have explicit keys. See https://vuejs.org/guide/list.html#key for more info.",e.rawAttrsMap["v-for"],!0),
e.forProcessed=!0,
`${i||"_l"}((${o}),`+`function(${s}${n}${r}){`+`return ${(a||Yn)(e,t)}`+"})"
}
function tr(e,t){
let a="{"
const i=function(e,t){
const a=e.directives
if(!a){
return
}
let i,o,s,n,r="directives:[",l=!1
for(i=0,o=a.length;i<o;i++){
s=a[i],n=!0
const o=t.directives[s.name]
o&&(n=!!o(e,s,t.warn)),n&&(l=!0,r+=`{name:"${s.name}",rawName:"${s.rawName}"${s.value?`,value:(${s.value}),expression:${JSON.stringify(s.value)}`:""}${s.arg?`,arg:${s.isDynamicArg?s.arg:`"${s.arg}"`}`:""}${s.modifiers?`,modifiers:${JSON.stringify(s.modifiers)}`:""}},`)
}
if(l){
return r.slice(0,-1)+"]"
}
}(e,t)
i&&(a+=i+","),e.key&&(a+=`key:${e.key},`),e.ref&&(a+=`ref:${e.ref},`),e.refInFor&&(a+="refInFor:true,"),
e.pre&&(a+="pre:true,"),
e.component&&(a+=`tag:"${e.tag}",`)
for(let i=0;i<t.dataGenFns.length;i++){
a+=t.dataGenFns[i](e)
}
if(e.attrs&&(a+=`attrs:${rr(e.attrs)},`),e.props&&(a+=`domProps:${rr(e.props)},`),
e.events&&(a+=`${In(e.events,!1)},`),
e.nativeEvents&&(a+=`${In(e.nativeEvents,!0)},`),
e.slotTarget&&!e.slotScope&&(a+=`slot:${e.slotTarget},`),
e.scopedSlots&&(a+=`${function(e,t,a){
let i=e.for||Object.keys(t).some(e=>{
const a=t[e]
return a.slotTargetDynamic||a.if||a.for||ar(a)
}),o=!!e.if
if(!i){
let t=e.parent
for(;t;){
if(t.slotScope&&"_empty_"!==t.slotScope||t.for){
i=!0
break
}
t.if&&(o=!0),t=t.parent
}
}
const s=Object.keys(t).map(e=>ir(t[e],a)).join(",")
return`scopedSlots:_u([${s}]${i?",null,true":""}${!i&&o?`,null,false,${function(e){
let t=5381,a=e.length
for(;a;){
t=33*t^e.charCodeAt(--a)
}
return t>>>0
}(s)}`:""})`
}(e,e.scopedSlots,t)},`),e.model&&(a+=`model:{value:${e.model.value},callback:${e.model.callback},expression:${e.model.expression}},`),
e.inlineTemplate){
const i=function(e,t){
const a=e.children[0]
1===e.children.length&&1===a.type||t.warn("Inline-template components must have exactly one child element.",{
start:e.start
})
if(a&&1===a.type){
const e=Jn(a,t.options)
return`inlineTemplate:{render:function(){${e.render}},staticRenderFns:[${e.staticRenderFns.map(e=>`function(){${e}}`).join(",")}]}`
}
}(e,t)
i&&(a+=`${i},`)
}
return a=a.replace(/,$/,"")+"}",e.dynamicAttrs&&(a=`_b(${a},"${e.tag}",${rr(e.dynamicAttrs)})`),
e.wrapData&&(a=e.wrapData(a)),
e.wrapListeners&&(a=e.wrapListeners(a)),a
}
function ar(e){
return 1===e.type&&("slot"===e.tag||e.children.some(ar))
}
function ir(e,t){
const a=e.attrsMap["slot-scope"]
if(e.if&&!e.ifProcessed&&!a){
return Qn(e,t,ir,"null")
}
if(e.for&&!e.forProcessed){
return er(e,t,ir)
}
const i="_empty_"===e.slotScope?"":String(e.slotScope),o=`function(${i}){`+`return ${"template"===e.tag?e.if&&a?`(${e.if})?${or(e,t)||"undefined"}:undefined`:or(e,t)||"undefined":Yn(e,t)}}`,s=i?"":",proxy:true"
return`{key:${e.slotTarget||'"default"'},fn:${o}${s}}`
}
function or(e,t,a,i,o){
const s=e.children
if(s.length){
const e=s[0]
if(1===s.length&&e.for&&"template"!==e.tag&&"slot"!==e.tag){
const o=a?t.maybeComponent(e)?",1":",0":""
return`${(i||Yn)(e,t)}${o}`
}
const n=a?function(e,t){
let a=0
for(let i=0;i<e.length;i++){
const o=e[i]
if(1===o.type){
if(sr(o)||o.ifConditions&&o.ifConditions.some(e=>sr(e.block))){
a=2
break
}
(t(o)||o.ifConditions&&o.ifConditions.some(e=>t(e.block)))&&(a=1)
}
}
return a
}(s,t.maybeComponent):0,r=o||nr
return`[${s.map(e=>r(e,t)).join(",")}]${n?`,${n}`:""}`
}
}
function sr(e){
return void 0!==e.for||"template"===e.tag||"slot"===e.tag
}
function nr(e,t){
return 1===e.type?Yn(e,t):3===e.type&&e.isComment?function(e){
return`_e(${JSON.stringify(e.text)})`
}(e):function(e){
return`_v(${2===e.type?e.expression:lr(JSON.stringify(e.text))})`
}(e)
}
function rr(e){
let t="",a=""
for(let i=0;i<e.length;i++){
const o=e[i],s=lr(o.value)
o.dynamic?a+=`${o.name},${s},`:t+=`"${o.name}":${s},`
}
return t=`{${t.slice(0,-1)}}`,a?`_d(${t},[${a.slice(0,-1)}])`:t
}
function lr(e){
return e.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")
}
const cr=new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b")+"\\b"),ur=new RegExp("\\b"+"delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b")+"\\s*\\([^\\)]*\\)"),dr=/'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g
function pr(e,t){
e&&function e(t,a){
if(1===t.type){
for(const e in t.attrsMap){
if(Ys.test(e)){
const i=t.attrsMap[e]
if(i){
const o=t.rawAttrsMap[e]
"v-for"===e?mr(t,`v-for="${i}"`,a,o):"v-slot"===e||"#"===e[0]?br(i,`${e}="${i}"`,a,o):Js.test(e)?gr(i,`${e}="${i}"`,a,o):hr(i,`${e}="${i}"`,a,o)
}
}
}
if(t.children){
for(let i=0;i<t.children.length;i++){
e(t.children[i],a)
}
}
}else{
2===t.type&&hr(t.expression,t.text,a,t)
}
}(e,t)
}
function gr(e,t,a,i){
const o=e.replace(dr,""),s=o.match(ur)
s&&"$"!==o.charAt(s.index-1)&&a("avoid using JavaScript unary operator as property name: "+`"${s[0]}" in expression ${t.trim()}`,i),
hr(e,t,a,i)
}
function mr(e,t,a,i){
hr(e.for||"",t,a,i),kr(e.alias,"v-for alias",t,a,i),kr(e.iterator1,"v-for iterator",t,a,i),
kr(e.iterator2,"v-for iterator",t,a,i)
}
function kr(e,t,a,i,o){
if("string"==typeof e){
try{
new Function(`var ${e}=_`)
}catch(s){
i(`invalid ${t} "${e}" in expression: ${a.trim()}`,o)
}
}
}
function hr(e,t,a,i){
try{
new Function(`return ${e}`)
}catch(o){
const s=e.replace(dr,"").match(cr)
a(s?"avoid using JavaScript keyword as property name: "+`"${s[0]}"\n  Raw expression: ${t.trim()}`:`invalid expression: ${o.message} in\n\n`+`    ${e}\n\n`+`  Raw expression: ${t.trim()}\n`,i)
}
}
function br(e,t,a,i){
try{
new Function(e,"")
}catch(o){
a(`invalid function parameter expression: ${o.message} in\n\n`+`    ${e}\n\n`+`  Raw expression: ${t.trim()}\n`,i)
}
}
function vr(e,t){
let a=""
if(t>0){
for(;1&t&&(a+=e),!((t>>>=1)<=0);){
e+=e
}
}
return a
}
function yr(e,t){
try{
return new Function(e)
}catch(a){
return t.push({
err:a,
code:e
}),P
}
}
function fr(e){
const t=Object.create(null)
return function(a,i,o){
const s=(i=O({},i)).warn||ce
delete i.warn
try{
new Function("return 1")
}catch(e){
e.toString().match(/unsafe-eval|CSP/)&&s("It seems you are using the standalone build of Vue.js in an environment with Content Security Policy that prohibits unsafe-eval. The template compiler cannot work in this environment. Consider relaxing the policy to allow unsafe-eval or pre-compiling your templates into render functions.")
}
const n=i.delimiters?String(i.delimiters)+a:a
if(t[n]){
return t[n]
}
const r=e(a,i)
r.errors&&r.errors.length&&(i.outputSourceRange?r.errors.forEach(e=>{
s(`Error compiling template:\n\n${e.msg}\n\n`+function(e,t=0,a=e.length){
const i=e.split(/\r?\n/)
let o=0
const s=[]
for(let e=0;e<i.length;e++){
if(o+=i[e].length+1,o>=t){
for(let n=e-2;n<=e+2||a>o;n++){
if(n<0||n>=i.length){
continue
}
s.push(`${n+1}${vr(" ",3-String(n+1).length)}|  ${i[n]}`)
const r=i[n].length
if(n===e){
const e=t-(o-r)+1,i=a>o?r-e:a-t
s.push("   |  "+vr(" ",e)+vr("^",i))
}else if(n>e){
if(a>o){
const e=Math.min(a-o,r)
s.push("   |  "+vr("^",e))
}
o+=r+1
}
}
break
}
}
return s.join("\n")
}(a,e.start,e.end),o)
}):s(`Error compiling template:\n\n${a}\n\n`+r.errors.map(e=>`- ${e}`).join("\n")+"\n",o)),
r.tips&&r.tips.length&&(i.outputSourceRange?r.tips.forEach(e=>ue(e.msg)):r.tips.forEach(e=>ue()))
const l={},c=[]
return l.render=yr(r.render,c),l.staticRenderFns=r.staticRenderFns.map(e=>yr(e,c)),
r.errors&&r.errors.length||!c.length||s("Failed to generate render function:\n\n"+c.map(({err:e,code:t})=>`${e.toString()} in\n\n${t}\n`).join("\n"),o),
t[n]=l
}
}
const jr=(wr=function(e,t){
const a=fn(e.trim(),t)
!1!==t.optimize&&Nn(a,t)
const i=Jn(a,t)
return{
ast:a,
render:i.render,
staticRenderFns:i.staticRenderFns
}
},function(e){
function t(t,a){
const i=Object.create(e),o=[],s=[]
let n=(e,t,a)=>{
(a?s:o).push(e)
}
if(a){
if(a.outputSourceRange){
const e=t.match(/^\s*/)[0].length
n=(t,a,i)=>{
const n={
msg:t
}
a&&(null!=a.start&&(n.start=a.start+e),null!=a.end&&(n.end=a.end+e)),(i?s:o).push(n)
}
}
a.modules&&(i.modules=(e.modules||[]).concat(a.modules)),a.directives&&(i.directives=O(Object.create(e.directives||null),a.directives))
for(const e in a){
"modules"!==e&&"directives"!==e&&(i[e]=a[e])
}
}
i.warn=n
const r=wr(t.trim(),i)
return pr(r.ast,n),r.errors=o,r.tips=s,r
}
return{
compile:t,
compileToFunctions:fr(t)
}
})
var wr
const{compile:Ar,compileToFunctions:zr}=jr(Pn)
let Sr
function Br(e){
return Sr=Sr||document.createElement("div"),Sr.innerHTML=e?'<a href="\n"/>':'<div a="\n"/>',
Sr.innerHTML.indexOf("&#10;")>0
}
const _r=!!F&&Br(!1),Tr=!!F&&Br(!0),xr=w(e=>{
const t=ni(e)
return t&&t.innerHTML
}),Or=Ca.prototype.$mount
Ca.prototype.$mount=function(e,t){
if((e=e&&ni(e))===document.body||e===document.documentElement){
return ce("Do not mount Vue to <html> or <body> - mount to normal elements instead."),
this
}
const a=this.$options
if(!a.render){
let t=a.template
if(t){
if("string"==typeof t){
"#"===t.charAt(0)&&(t=xr(t),t||ce(`Template element not found or is empty: ${a.template}`,this))
}else{
if(!t.nodeType){
return ce("invalid template option:"+t,this),this
}
t=t.innerHTML
}
}else{
e&&(t=function(e){
if(e.outerHTML){
return e.outerHTML
}
{
const t=document.createElement("div")
return t.appendChild(e.cloneNode(!0)),t.innerHTML
}
}(e))
}
if(t){
D.performance&&ot&&ot("compile")
const{render:e,staticRenderFns:i}=zr(t,{
outputSourceRange:!0,
shouldDecodeNewlines:_r,
shouldDecodeNewlinesForHref:Tr,
delimiters:a.delimiters,
comments:a.comments
},this)
a.render=e,a.staticRenderFns=i,D.performance&&ot&&(ot("compile end"),st(`vue ${this._name} compile`,"compile","compile end"))
}
}
return Or.call(this,e,t)
},Ca.compile=zr,t.a=Ca
}).call(this,a(15).setImmediate)
},function(e,t){
var a,i,o=e.exports={}
function s(){
throw new Error("setTimeout has not been defined")
}
function n(){
throw new Error("clearTimeout has not been defined")
}
function r(e){
if(a===setTimeout){
return setTimeout(e,0)
}
if((a===s||!a)&&setTimeout){
return a=setTimeout,setTimeout(e,0)
}
try{
return a(e,0)
}catch(t){
try{
return a.call(null,e,0)
}catch(t){
return a.call(this,e,0)
}
}
}
!function(){
try{
a="function"==typeof setTimeout?setTimeout:s
}catch(e){
a=s
}
try{
i="function"==typeof clearTimeout?clearTimeout:n
}catch(e){
i=n
}
}()
var l,c=[],u=!1,d=-1
function p(){
u&&l&&(u=!1,l.length?c=l.concat(c):d=-1,c.length&&g())
}
function g(){
if(!u){
var e=r(p)
u=!0
for(var t=c.length;t;){
for(l=c,c=[];++d<t;){
l&&l[d].run()
}
d=-1,t=c.length
}
l=null,u=!1,function(e){
if(i===clearTimeout){
return clearTimeout(e)
}
if((i===n||!i)&&clearTimeout){
return i=clearTimeout,clearTimeout(e)
}
try{
i(e)
}catch(t){
try{
return i.call(null,e)
}catch(t){
return i.call(this,e)
}
}
}(e)
}
}
function m(e,t){
this.fun=e,this.array=t
}
function k(){}
o.nextTick=function(e){
var t=new Array(arguments.length-1)
if(arguments.length>1){
for(var a=1;a<arguments.length;a++){
t[a-1]=arguments[a]
}
}
c.push(new m(e,t)),1!==c.length||u||r(g)
},m.prototype.run=function(){
this.fun.apply(null,this.array)
},o.title="browser",o.browser=!0,o.env={},o.argv=[],
o.version="",o.versions={},o.on=k,
o.addListener=k,o.once=k,o.off=k,o.removeListener=k,
o.removeAllListeners=k,o.emit=k,
o.prependListener=k,o.prependOnceListener=k,o.listeners=function(e){
return[]
},o.binding=function(e){
throw new Error("process.binding is not supported")
},o.cwd=function(){
return"/"
},o.chdir=function(e){
throw new Error("process.chdir is not supported")
},o.umask=function(){
return 0
}
},function(e,t,a){
var i
!function(o,s,n,r){
"use strict"
var l=function e(t,a){
return new e.Instance(t,a||{})
},c=l.globalSettings={
scrollMinUpdateInterval:25,
checkFrequency:1e3,
pauseCheck:!1
}
l.defaults={
preventParentScroll:!1,
forceScrollbars:!1,
scrollStopDelay:300,
maxTrackSize:95,
minTrackSize:5,
draggableTracks:!0,
autoUpdate:!0,
classPrefix:"optiscroll-",
wrapContent:!0,
rtl:!1
},(l.Instance=function(e,t){
this.element=e,this.settings=v(v({},l.defaults),t||{}),
"boolean"!=typeof t.rtl&&(this.settings.rtl="rtl"===o.getComputedStyle(e).direction),
this.cache={},
this.init()
}).prototype={
init:function(){
var e=this.element,t=this.settings,a=!1,i=this.scrollEl=t.wrapContent?m.createWrapper(e):e.firstElementChild
b(i,t.classPrefix+"content",!0),b(e,"is-enabled"+(t.rtl?" is-rtl":""),!0),this.scrollbars={
v:g("v",this),
h:g("h",this)
},(k.scrollbarSpec.width||t.forceScrollbars)&&(a=m.hideNativeScrollbars(i,t.rtl)),
a&&y(this.scrollbars,"create"),
k.isTouch&&t.preventParentScroll&&b(e,t.classPrefix+"prevent",!0),
this.update(),
this.bind(),t.autoUpdate&&k.instances.push(this),t.autoUpdate&&!k.checkTimer&&m.checkLoop()
},
bind:function(){
var e,t,a,i,o=this.listeners={},s=this.scrollEl
for(var n in o.scroll=(e=p.scroll.bind(this),t=c.scrollMinUpdateInterval,function(){
var o=this,s=Date.now(),n=arguments
a&&s<a+t?(clearTimeout(i),i=setTimeout((function(){
a=s,e.apply(o,n)
}),t)):(a=s,e.apply(o,n))
}),k.isTouch&&(o.touchstart=p.touchstart.bind(this),o.touchend=p.touchend.bind(this)),
o.mousewheel=o.wheel=p.wheel.bind(this),
o){
s.addEventListener(n,o[n],k.passiveEvent)
}
},
update:function(){
var e=this.scrollEl,t=this.cache,a=t.clientH,i=e.scrollHeight,o=e.clientHeight,n=e.scrollWidth,r=e.clientWidth
if(i!==t.scrollH||o!==t.clientH||n!==t.scrollW||r!==t.clientW){
if(t.scrollH=i,t.clientH=o,
t.scrollW=n,t.clientW=r,void 0!==a){
if(0===i&&0===o&&!s.body.contains(this.element)){
return this.destroy(),!1
}
this.fireCustomEvent("sizechange")
}
y(this.scrollbars,"update")
}
},
scrollTo:function(e,t,a){
var i,o,s,n,r=this.cache
k.pauseCheck=!0,this.update(),i=this.scrollEl.scrollLeft,o=this.scrollEl.scrollTop,
s=+e,
"left"===e&&(s=0),"right"===e&&(s=r.scrollW-r.clientW),!1===e&&(s=i),n=+t,"top"===t&&(n=0),
"bottom"===t&&(n=r.scrollH-r.clientH),
!1===t&&(n=o),this.animateScroll(i,s,o,n,+a)
},
scrollIntoView:function(e,t,a){
var i,o,s,n,r,l,c,u,d,p,g,m,h=this.scrollEl
k.pauseCheck=!0,this.update(),"string"==typeof e?e=h.querySelector(e):e.length&&e.jquery&&(e=e[0]),
"number"==typeof a&&(a={
top:a,
right:a,
bottom:a,
left:a
}),a=a||{},i=e.getBoundingClientRect(),o=h.getBoundingClientRect(),d=g=h.scrollLeft,
p=m=h.scrollTop,
c=d+i.left-o.left,u=p+i.top-o.top,s=c-(a.left||0),n=u-(a.top||0),
s<d&&(g=s),(r=c+i.width-this.cache.clientW+(a.right||0))>d&&(g=r),
n<p&&(m=n),(l=u+i.height-this.cache.clientH+(a.bottom||0))>p&&(m=l),
this.animateScroll(d,g,p,m,+t)
},
animateScroll:function(e,t,a,i,s){
var r=this,l=this.scrollEl,c=Date.now()
if(t!==e||i!==a){
if(0===s){
return l.scrollLeft=t,void(l.scrollTop=i)
}
isNaN(s)&&(s=15*n.pow(n.max(n.abs(t-e),n.abs(i-a)),.54)),function u(){
var d=n.min(1,(Date.now()-c)/s),p=m.easingFunction(d)
i!==a&&(l.scrollTop=~~(p*(i-a))+a),t!==e&&(l.scrollLeft=~~(p*(t-e))+e),r.scrollAnimation=d<1?o.requestAnimationFrame(u):null
}()
}
},
destroy:function(){
var e,t=this,a=this.element,i=this.scrollEl,s=this.listeners
if(this.scrollEl){
for(var n in s){
i.removeEventListener(n,s[n])
}
if(y(this.scrollbars,"remove"),this.settings.wrapContent){
for(;e=i.childNodes[0];){
a.insertBefore(e,i)
}
a.removeChild(i),this.scrollEl=null
}
b(a,this.settings.classPrefix+"prevent",!1),b(a,"is-enabled",!1),o.requestAnimationFrame((function(){
var e=k.instances.indexOf(t)
e>-1&&k.instances.splice(e,1)
}))
}
},
fireCustomEvent:function(e){
var t,a,i=this.cache,o=i.scrollH,n=i.scrollW
t={
scrollbarV:v({},i.v),
scrollbarH:v({},i.h),
scrollTop:i.v.position*o,
scrollLeft:i.h.position*n,
scrollBottom:(1-i.v.position-i.v.size)*o,
scrollRight:(1-i.h.position-i.h.size)*n,
scrollWidth:n,
scrollHeight:o,
clientWidth:i.clientW,
clientHeight:i.clientH
},"function"==typeof CustomEvent?a=new CustomEvent(e,{
detail:t
}):(a=s.createEvent("CustomEvent")).initCustomEvent(e,!1,!1,t),this.element.dispatchEvent(a)
}
}
var u,d,p={
scroll:function(e){
k.pauseCheck||this.fireCustomEvent("scrollstart"),k.pauseCheck=!0,
this.scrollbars.v.update(),
this.scrollbars.h.update(),this.fireCustomEvent("scroll"),
clearTimeout(this.cache.timerStop),
this.cache.timerStop=setTimeout(p.scrollStop.bind(this),this.settings.scrollStopDelay)
},
touchstart:function(e){
k.pauseCheck=!1,this.scrollbars.v.update(),this.scrollbars.h.update(),
p.wheel.call(this,e)
},
touchend:function(e){
clearTimeout(this.cache.timerStop)
},
scrollStop:function(){
this.fireCustomEvent("scrollstop"),k.pauseCheck=!1
},
wheel:function(e){
var t=this.cache,a=t.v,i=t.h,s=this.settings.preventParentScroll&&k.isTouch
o.cancelAnimationFrame(this.scrollAnimation),s&&a.enabled&&a.percent%100==0&&(this.scrollEl.scrollTop=a.percent?t.scrollH-t.clientH-1:1),
s&&i.enabled&&i.percent%100==0&&(this.scrollEl.scrollLeft=i.percent?t.scrollW-t.clientW-1:1)
}
},g=function(e,t){
var a="v"===e,i=t.element,r=t.scrollEl,l=t.settings,c=t.cache,u=c[e]={},d=a?"H":"W",p="client"+d,g="scroll"+d,m=a?"scrollTop":"scrollLeft",h=a?["top","bottom"]:["left","right"],y=/^(mouse|touch|pointer)/,f=k.scrollbarSpec.rtl,j=!1,w=null,A=null,z={
dragData:null,
dragStart:function(e){
e.preventDefault()
var t=e.touches?e.touches[0]:e
z.dragData={
x:t.pageX,
y:t.pageY,
scroll:r[m]
},z.bind(!0,e.type.match(y)[1])
},
dragMove:function(e){
var t,i=e.touches?e.touches[0]:e,o=l.rtl&&1===f&&!a?-1:1
e.preventDefault(),t=(a?i.pageY-z.dragData.y:i.pageX-z.dragData.x)/c[p],r[m]=z.dragData.scroll+t*c[g]*o
},
dragEnd:function(e){
z.dragData=null,z.bind(!1,e.type.match(y)[1])
},
bind:function(e,t){
var a=(e?"add":"remove")+"EventListener",i=t+"move",o=t+("touch"===t?"end":"up")
s[a](i,z.dragMove),s[a](o,z.dragEnd),s[a](t+"cancel",z.dragEnd)
}
}
return{
toggle:function(t){
j=t,A&&b(i,"has-"+e+"track",j),u.enabled=j
},
create:function(){
(w=s.createElement("div"),A=s.createElement("b"),w.className=l.classPrefix+e,
A.className=l.classPrefix+e+"track",
w.appendChild(A),i.appendChild(w),l.draggableTracks)&&(o.PointerEvent?["pointerdown"]:["touchstart","mousedown"]).forEach((function(e){
A.addEventListener(e,z.dragStart)
}))
},
update:function(){
var e,t,a,i,o
;(j||c[p]!==c[g])&&(e=(a=this.calc()).size,t=u.size,i=1/e*a.position*100,
o=n.abs(a.position-(u.position||0))*c[p],
1===e&&j&&this.toggle(!1),e<1&&!j&&this.toggle(!0),
A&&j&&this.style(i,o,e,t),u=v(u,a),
j&&this.fireEdgeEv())
},
style:function(e,t,i,o){
i!==o&&(A.style[a?"height":"width"]=100*i+"%",l.rtl&&!a&&(A.style.marginRight=100*(1-i)+"%")),
A.style[k.cssTransform]="translate("+(a?"0%,"+e+"%":e+"%,0%")+")"
},
calc:function(){
var e,t=r[m],i=c[p],o=c[g],s=i/o,u=o-i
return s>=1||!o?{
position:0,
size:1,
percent:0
}:(!a&&l.rtl&&f&&(t=u-t*f),e=100*t/u,t<=1&&(e=0),t>=u-1&&(e=100),s=n.max(s,l.minTrackSize/100),
{
position:e/100*(1-(s=n.min(s,l.maxTrackSize/100))),
size:s,
percent:e
})
},
fireEdgeEv:function(){
var e=u.percent
u.was!==e&&e%100==0&&(t.fireCustomEvent("scrollreachedge"),t.fireCustomEvent("scrollreach"+h[e/100])),
u.was=e
},
remove:function(){
this.toggle(!1),w&&(w.parentNode.removeChild(w),w=null)
}
}
},m={
hideNativeScrollbars:function(e,t){
var a=k.scrollbarSpec.width,i=e.style
if(0===a){
var o=Date.now()
return e.setAttribute("data-scroll",o),m.addCssRule('[data-scroll="'+o+'"]::-webkit-scrollbar',"display:none;width:0;height:0;")
}
return i[t?"left":"right"]=-a+"px",i.bottom=-a+"px",!0
},
addCssRule:function(e,t){
var a=s.getElementById("scroll-sheet")
a||((a=s.createElement("style")).id="scroll-sheet",a.appendChild(s.createTextNode("")),
s.head.appendChild(a))
try{
return a.sheet.insertRule(e+" {"+t+"}",0),!0
}catch(e){
return
}
},
createWrapper:function(e,t){
for(var a,i=s.createElement("div");a=e.childNodes[0];){
i.appendChild(a)
}
return e.appendChild(i)
},
checkLoop:function(){
k.instances.length?(k.pauseCheck||y(k.instances,"update"),c.checkFrequency&&(k.checkTimer=setTimeout((function(){
m.checkLoop()
}),c.checkFrequency))):k.checkTimer=null
},
easingFunction:function(e){
return--e*e*e+1
}
},k=l.G={
isTouch:"ontouchstart"in o,
cssTransition:h("transition"),
cssTransform:h("transform"),
scrollbarSpec:function(){
var e,t,a,i=s.documentElement,o=1
;(e=s.createElement("div")).style.cssText="overflow:scroll;width:50px;height:50px;position:absolute;left:-100px;direction:rtl",
(t=s.createElement("div")).style.cssText="width:100px;height:100px",
e.appendChild(t),
i.appendChild(e),a=e.offsetWidth-e.clientWidth,e.scrollLeft>0?o=0:(e.scrollLeft=1,
0===e.scrollLeft&&(o=-1))
return i.removeChild(e),{
width:a,
rtl:o
}
}(),
passiveEvent:(u=!1,d=Object.defineProperty({},"passive",{
get:function(){
u=!0
}
}),o.addEventListener("test",null,d),!!u&&{
capture:!1,
passive:!0
}),
instances:[],
checkTimer:null,
pauseCheck:!1
}
function h(e){
var t=e.charAt(0).toUpperCase()+e.slice(1),a=s.createElement("test"),i=[e,"Webkit"+t]
for(var o in i){
if(void 0!==a.style[i[o]]){
return i[o]
}
}
return""
}
function b(e,t,a){
var i=e.className.split(/\s+/),o=i.indexOf(t)
a?~o||i.push(t):~o&&i.splice(o,1),e.className=i.join(" ")
}
function v(e,t,a){
for(var i in t){
!t.hasOwnProperty(i)||void 0!==e[i]&&a||(e[i]=t[i])
}
return e
}
function y(e,t,a){
var i,o
if(e.length){
for(i=0,o=e.length;i<o;i++){
e[i][t].apply(e[i],a)
}
}else{
for(i in e){
e[i][t].apply(e[i],a)
}
}
}
void 0===(i=function(){
return l
}.call(t,a,t,e))||(e.exports=i),e.exports&&(e.exports=l),o.Optiscroll=l
}(window,document,Math)
},function(e,t,a){
var i=function(){
var e=this,t=e.$createElement,a=e._self._c||t
return a("div",{
staticClass:"aos aos-body-container"
},[a("div",{
staticClass:"aos-body"
},[a("div",{
staticClass:"aos-header"
},[a("span",{
staticClass:"aos-logo aos-g-margin-right--5"
}),e._v(" "),a("span",{
staticClass:"aos-text-col aos-white"
},[e._v(e._s(e.nls(e.brandName+".title")))]),e._v(" "),e.isBeta?a("span",{
staticClass:"aos-title-beta"
},[e._v(e._s(e.nls("global.beta")))]):e._e(),e._v(" "),a("span",{
staticClass:"aos-controls"
},[a("button",{
staticClass:"aos-btn-setting",
attrs:{
id:"aosBody-setting",
title:e.nls("setting.title")
},
on:{
click:function(t){
return e.action("toggleSettings")
}
}
}),e._v(" "),a("button",{
staticClass:"aos-btn-close",
attrs:{
id:"aosBody-close",
title:e.nls("global.close")
},
on:{
click:function(t){
return e.action("close")
}
}
})])]),e._v(" "),a("div",{
staticClass:"aos-content optiscroll"
},[e.URL_CONSENT?a("div",{
staticClass:"aos-content-common"
},[e.security.status.unsafe?[a("div",{
staticClass:"aos-g-align--center aos-unsafe"
},[a("span",{
staticClass:"aos-security-icon aos-icon-unsafe-big aos-g-margin-right--10"
}),e._v(" "),a("h2",{
staticClass:"aos-h2 aos-text-col aos-critical aos-g-margin-bottom--10 aos-g-margin-top--20"
},[e._v(e._s(e.nls("security.unsafe.title")))]),e._v(" "),e.security.phishing?a("p",[e._v(e._s(e.nls("security.unsafe.phishing.desc")))]):e._e(),e._v(" "),e.security.malware?a("p",[e._v(e._s(e.nls("security.unsafe.malware.desc")))]):e._e(),e._v(" "),a("button",{
staticClass:"aos-button aos-critical aos-g-margin-top--20",
on:{
click:function(t){
return e.action("leave")
}
}
},[e._v("\n\t\t\t\t\t\t\t"+e._s(e.nls("global.leaveSite"))+"\n\t\t\t\t\t\t")])])]:e._e(),e._v(" "),e.security.status.unsafe?e._e():[a("div",{
staticClass:"aos-section",
attrs:{
"data-section":"Security"
}
},[a("h3",{
staticClass:"aos-h3 aos-g-padding-bottom--10 aos-g-margin-bottom--10"
},[e._v(e._s(e.nls("security.title")))]),e._v(" "),e.security.status.safe?[a("div",{
staticClass:"aos-flex"
},[a("span",{
staticClass:"aos-security-icon aos-icon-safe aos-flex-no aos-g-margin-right--10"
}),e._v(" "),a("div",[a("h2",{
staticClass:"aos-h2 aos-text-col aos-g-margin-bottom--5"
},[e._v(e._s(e.nls("security.safe.title")))]),e._v(" "),a("button",{
staticClass:"aos-section-details-button aos-button aos-secondary aos-small aos-g-margin-bottom--5",
on:{
click:function(t){
return e.sectionToggle("Security")
}
}
},[e._v("\n\t\t\t\t\t\t\t\t\t\t"+e._s(e.isSectionOpened.Security?e.nls("global.detailsHide"):e.nls("global.detailsShow"))+"\n\t\t\t\t\t\t\t\t\t")])])]),e._v(" "),a("div",{
staticClass:"aos-section-details aos-hidden",
class:{
"aos-active":e.isSectionOpened.Security
}
},[a("ul",{
staticClass:"aos-security-list aos-g-margin-top--20 aos-g-margin-right--20"
},[a("li",[a("span",{
staticClass:"aos-text"
},[e._v(e._s(e.nls("security.safe.item1.desc")))]),e._v(" "),a("span",{
staticClass:"aos-info",
attrs:{
title:e.nls("security.safe.item1.tooltip")
}
})]),e._v(" "),a("li",[a("span",{
staticClass:"aos-text"
},[e._v(e._s(e.nls("security.safe.item2.desc")))]),e._v(" "),a("span",{
staticClass:"aos-info",
attrs:{
title:e.nls("security.safe.item2.tooltip")
}
})]),e._v(" "),a("li",[a("span",{
staticClass:"aos-text"
},[e._v(e._s(e.nls("security.safe.item3.desc")))]),e._v(" "),a("span",{
staticClass:"aos-info",
attrs:{
title:e.nls("security.safe.item3.tooltip",e.brandName,"<i class='aos-icon-thumb-up'></i>")
}
})])])])]:e._e(),e._v(" "),e.security.status.unknown?[a("div",{
staticClass:"aos-flex"
},[a("span",{
staticClass:"aos-security-icon aos-icon-unknown aos-flex-no aos-g-margin-right--10"
}),e._v(" "),a("div",{
staticClass:"aos-security-text"
},[a("h2",{
staticClass:"aos-h2 aos-text-col aos-white aos-g-margin-bottom--5"
},[e._v(e._s(e.nls("security.unknown.title")))]),e._v(" "),a("p",{
staticClass:"aos-g-margin-bottom--5"
},[e._v(e._s(e.nls("security.unknown.desc")))])])])]:e._e(),e._v(" "),e.security.status.bad?[a("div",{
staticClass:"aos-flex"
},[a("span",{
staticClass:"aos-security-icon aos-icon-bad aos-flex-no aos-g-margin-right--10"
}),e._v(" "),a("div",{
staticClass:"aos-security-text"
},[a("h2",{
staticClass:"aos-h2 aos-text-col aos-attention aos-g-margin-bottom--5"
},[e._v(e._s(e.nls("security.bad.title")))]),e._v(" "),a("p",{
staticClass:"aos-g-margin-bottom--5"
},[e._v(e._s(e.nls("security.bad.desc")))])])])]:e._e()],2),e._v(" "),a("div",{
staticClass:"aos-section aos-section-vote",
attrs:{
"data-section":"Vote"
}
},[a("h3",{
staticClass:"aos-h3 aos-g-padding-bottom--10 aos-g-margin-bottom--10"
},[a("div",{
staticClass:"aos-hidden",
attrs:{
id:"aosVote-thanks"
}
},[e.vote.status.trusted?a("span",{
staticClass:"aos-text-col"
},[e._v(e._s(e.nls("rating.thanks")))]):e._e(),e._v(" "),e.vote.status.untrusted?a("span",{
staticClass:"aos-text-col aos-critical"
},[e._v(e._s(e.nls("rating.thanks")))]):e._e()]),e._v(" "),a("div",{
attrs:{
id:"aosVote-info"
}
},[e.vote.status.unrated?a("div",{
staticClass:"aos-flex-left aos-multiline"
},[a("span",[e._v(e._s(e.nls("rating.question.desc",e.web.name)))]),e._v(" "),a("span",[a("span",{
staticClass:"aos-info",
attrs:{
title:e.nls("rating.tooltip")
}
})])]):e._e(),e._v(" "),e.vote.status.trusted?a("div",{
staticClass:"aos-flex-left aos-multiline"
},[a("span",{
staticClass:"aos-i-col",
domProps:{
innerHTML:e._s(e.nls("rating.trusted.desc",e.web.name))
}
}),e._v(" "),a("span",[a("span",{
staticClass:"aos-info",
attrs:{
title:e.nls("rating.tooltip")
}
})])]):e._e(),e._v(" "),e.vote.status.untrusted?a("div",{
staticClass:"aos-flex-left aos-multiline"
},[a("span",{
staticClass:"aos-i-col aos-critical",
domProps:{
innerHTML:e._s(e.nls("rating.untrusted.desc",e.web.name))
}
}),e._v(" "),a("span",[a("span",{
staticClass:"aos-info",
attrs:{
title:e.nls("rating.tooltip")
}
})])]):e._e()])]),e._v(" "),a("div",{
staticClass:"aos-votes aos-g-align--center"
},[a("span",[e.vote.status.trusted?a("button",{
staticClass:"aos-vote-icon aos-vote-yes aos-active",
attrs:{
title:e.nls("rating.revert.tooltip")
},
on:{
click:function(t){
return e.action("unvote")
}
}
}):e._e()]),e._v(" "),a("span",[e.vote.status.trusted?e._e():a("button",{
staticClass:"aos-vote-icon aos-vote-yes",
on:{
click:function(t){
return e.action("voteYes")
}
}
})]),e._v(" "),a("span",[e.vote.status.untrusted?a("button",{
staticClass:"aos-vote-icon aos-vote-no aos-active",
attrs:{
title:e.nls("rating.revert.tooltip")
},
on:{
click:function(t){
return e.action("unvote")
}
}
}):e._e()]),e._v(" "),a("span",[e.vote.status.untrusted?e._e():a("button",{
staticClass:"aos-vote-icon aos-vote-no",
on:{
click:function(t){
return e.action("voteNo")
}
}
})])])]),e._v(" "),a("div",{
staticClass:"aos-section",
attrs:{
"data-section":"Privacy"
}
},[a("h3",{
staticClass:"aos-h3 aos-g-padding-bottom--10 aos-g-margin-bottom--10"
},[e._v(e._s(e.nls("privacy.title")))]),e._v(" "),a("div",{
staticClass:"aos-flex"
},[e.privacy.status.on?[a("span",{
staticClass:"aos-privacy-icon aos-icon-on aos-flex-no"
}),e._v(" "),a("div",{
staticClass:"aos-privacy-text"
},[a("p",{
staticClass:"aos-i-col aos-g-margin-bottom--5",
domProps:{
innerHTML:e._s(e.nls("privacy.trackersBlockedAll",e.privacy.trackersBlocked,e.web.name))
}
}),e._v(" "),a("button",{
staticClass:"aos-section-details-button aos-button aos-secondary aos-small",
on:{
click:function(t){
return e.sectionToggle("Privacy")
}
}
},[e._v("\n\t\t\t\t\t\t\t\t\t\t"+e._s(e.isSectionOpened.Privacy?e.nls("global.detailsHide"):e.nls("global.detailsShow"))+"\n\t\t\t\t\t\t\t\t\t")])])]:e._e(),e._v(" "),e.privacy.status.some?[a("span",{
staticClass:"aos-privacy-icon aos-icon-some aos-flex-no"
}),e._v(" "),a("div",{
staticClass:"aos-privacy-text"
},[a("p",{
staticClass:"aos-i-col aos-attention aos-g-margin-bottom--5",
domProps:{
innerHTML:e._s(e.nls("privacy.trackersBlockedSome",e.privacy.trackersBlocked,e.privacy.trackersFound,e.web.name))
}
}),e._v(" "),a("button",{
staticClass:"aos-section-details-button aos-button aos-small",
class:{
"aos-secondary":e.isSectionOpened.Privacy,
"aos-attention":!e.isSectionOpened.Privacy
},
on:{
click:function(t){
return e.sectionToggle("Privacy")
}
}
},[e._v("\n\t\t\t\t\t\t\t\t\t\t"+e._s(e.isSectionOpened.Privacy?e.nls("global.detailsHide"):e.nls("global.detailsShow"))+"\n\t\t\t\t\t\t\t\t\t")])])]:e._e(),e._v(" "),e.privacy.status.off?[a("span",{
staticClass:"aos-privacy-icon aos-icon-off aos-flex-no"
}),e._v(" "),a("div",{
staticClass:"aos-privacy-text"
},[a("p",{
staticClass:"aos-i-col aos-critical aos-g-margin-bottom--5",
domProps:{
innerHTML:e._s(e.nls("privacy.trackersBlockedNone",e.privacy.trackersFound,e.web.name))
}
}),e._v(" "),a("button",{
staticClass:"aos-section-details-button aos-button aos-small",
class:{
"aos-secondary":e.isSectionOpened.Privacy,
"aos-critical":!e.isSectionOpened.Privacy
},
on:{
click:function(t){
return e.sectionToggle("Privacy")
}
}
},[e._v("\n\t\t\t\t\t\t\t\t\t\t"+e._s(e.isSectionOpened.Privacy?e.nls("global.detailsHide"):e.nls("global.detailsShow"))+"\n\t\t\t\t\t\t\t\t\t")])])]:e._e()],2),e._v(" "),a("div",{
staticClass:"aos-g-align--center"
}),e._v(" "),a("div",{
staticClass:"aos-section-details aos-hidden",
class:{
"aos-active":e.isSectionOpened.Privacy
}
},[a("div",{
staticClass:"aos-accordions"
},e._l(e.privacy.groups,(function(t){
return a("div",{
staticClass:"aos-trackers aos-accordion"
},[a("button",{
staticClass:"aos-trackers-header aos-accordion-button aos-g-align--left",
class:{
"aos-disabled":!t.trackersFound
},
attrs:{
tabindex:!t.trackersFound&&-1
}
},[a("span",{
staticClass:"aos-text-col aos-white aos-g-margin-left--5"
},[e._v(e._s(e.nls("privacy.group."+t.id+".desc")))]),e._v(" "),t.trackersFound&&t.status.on?a("span",{
staticClass:"aos-trackers-count aos-g-font--bold aos-text-col"
},[e._v("\n\t\t\t\t\t\t\t\t\t\t\t"+e._s(e.nls("privacy.trackersBlocked",t.trackersBlocked,t.trackersFound))+"\n\t\t\t\t\t\t\t\t\t\t")]):e._e(),e._v(" "),t.trackersFound&&t.status.some?a("span",{
staticClass:"aos-trackers-count aos-g-font--bold aos-text-col aos-attention"
},[e._v("\n\t\t\t\t\t\t\t\t\t\t\t"+e._s(e.nls("privacy.trackersBlocked",t.trackersBlocked,t.trackersFound))+"\n\t\t\t\t\t\t\t\t\t\t")]):e._e(),e._v(" "),t.trackersFound&&t.status.off?a("span",{
staticClass:"aos-trackers-count aos-g-font--bold aos-text-col aos-critical"
},[e._v("\n\t\t\t\t\t\t\t\t\t\t\t"+e._s(e.nls("privacy.trackersFound",t.trackersFound))+"\n\t\t\t\t\t\t\t\t\t\t")]):e._e(),e._v(" "),t.trackersFound?e._e():a("span",{
staticClass:"aos-trackers-count"
},[e._v("\n\t\t\t\t\t\t\t\t\t\t\t"+e._s(e.nls("privacy.trackersNone"))+"\n\t\t\t\t\t\t\t\t\t\t")])]),e._v(" "),t.trackersFound?a("div",{
staticClass:"aos-g-margin-bottom--15 aos-g-display--none aos-accordion-content"
},[a("ul",{
staticClass:"aos-trackers-list"
},e._l(t.trackers,(function(i){
return a("li",{
class:{
"aos-blocked":e.privacy.autoBlock||t.blocked||i.blocked
}
},[a("span",{
staticClass:"aos-text aos-g-margin-right--10"
},[e._v(e._s(i.name))]),e._v(" "),e.privacy.autoBlock?a("button",{
staticClass:"aos-text-col",
attrs:{
title:e.nls("privacy.trackerUnblockOnAutoBlock.tooltip",i.name)
}
},[e._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t"+e._s(e.nls("privacy.trackerUnblock.desc"))+"\n\t\t\t\t\t\t\t\t\t\t\t\t")]):e._e(),e._v(" "),!e.privacy.autoBlock&&t.blocked?a("button",{
staticClass:"aos-text-col"
},[e._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t"+e._s(e.nls("privacy.trackerUnblock.desc"))+"\n\t\t\t\t\t\t\t\t\t\t\t\t")]):e._e(),e._v(" "),e.privacy.autoBlock||t.blocked||!i.blocked?e._e():a("button",{
staticClass:"aos-text-col aos-g-cursor--pointer",
attrs:{
title:e.nls("privacy.trackerUnblock.tooltip",i.name)
},
on:{
click:function(a){
return e.action("blockTracker",i.id,!1,t.id,i.name)
}
}
},[e._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t"+e._s(e.nls("privacy.trackerUnblock.desc"))+"\n\t\t\t\t\t\t\t\t\t\t\t\t")]),e._v(" "),e.privacy.autoBlock||t.blocked||i.blocked?e._e():a("button",{
staticClass:"aos-text-col aos-link aos-g-cursor--pointer",
attrs:{
title:e.nls("privacy.trackerBlock.tooltip",i.name)
},
on:{
click:function(a){
return e.action("blockTracker",i.id,!0,t.id,i.name)
}
}
},[e._v(e._s(e.nls("privacy.trackerBlock.desc")))])])
})),0),e._v(" "),a("div",{
staticClass:"aos-g-align--center"
},[!e.privacy.autoBlock&&t.blocked?a("button",{
staticClass:"aos-text-col aos-link aos-g-cursor--pointer",
attrs:{
title:e.nls("privacy.group."+t.id+".unblock.tooltip")
},
on:{
click:function(a){
return e.action("blockGroup",t.id,!1)
}
}
},[e._v(e._s(e.nls("privacy.group."+t.id+".unblock.desc")))]):e._e(),e._v(" "),e.privacy.autoBlock||t.blocked?e._e():a("button",{
staticClass:"aos-text-col aos-link aos-g-cursor--pointer",
attrs:{
title:e.nls("privacy.group."+t.id+".block.tooltip")
},
on:{
click:function(a){
return e.action("blockGroup",t.id,!0)
}
}
},[e._v(e._s(e.nls("privacy.group."+t.id+".block.desc")))])])]):e._e()])
})),0),e._v(" "),a("div",{
staticClass:"aos-flex aos-g-margin-top--30 aos-g-margin-bottom--30 aos-text-col aos-white"
},[a("span",[e._v(e._s(e.nls("privacy.automaticBlocking.desc")))]),e._v(" "),a("span",{
staticClass:"aos-g-nowrap"
},[a("span",{
staticClass:"aos-info",
attrs:{
title:e.nls("privacy.automaticBlocking.tooltip")
}
}),e._v(" "),a("input",{
staticClass:"aos-switch aos-no-label",
attrs:{
type:"checkbox",
id:"aosAutoBlockTrackers"
},
domProps:{
checked:e.privacy.autoBlock
},
on:{
click:function(t){
return e.action("blockAuto",!e.privacy.autoBlock)
}
}
}),e._v(" "),a("label",{
staticClass:"aos-g-margin-left--5",
attrs:{
tabindex:"0",
for:"aosAutoBlockTrackers",
"data-off":e.nls("global.switcher.off"),
"data-on":e.nls("global.switcher.on")
}
})])])])]),e._v(" "),"card"===e.feedback.style?[a("div",{
staticClass:"aos-section",
attrs:{
"data-section":"Feedback"
}
},[a("h3",{
staticClass:"aos-h3 aos-g-padding-bottom--10 aos-g-margin-bottom--10"
},[e._v("\n\t\t\t\t\t\t\t\tGot any feedback?\n\t\t\t\t\t\t\t")]),e._v(" "),a("div",{
staticClass:"aos-flex"
},[a("span",{
staticClass:"aos-feedback-icon aos-icon-on aos-flex-no"
}),e._v(" "),a("div",{
staticClass:"aos-privacy-text"
},[a("p",{
staticClass:"aos-i-col aos-g-margin-bottom--5"
},[e._v("Tell us your thoughts and suggestions")]),e._v(" "),a("button",{
staticClass:"aos-section-details-button aos-button aos-g-margin-top--5 aos-secondary aos-small",
on:{
click:function(t){
return e.openFeedback()
}
}
},[e._v("\n\t\t\t\t\t\t\t\t\t\t\tGive Feedback\n\t\t\t\t\t\t\t\t\t\t")])])])])]:e._e(),e._v(" "),a("div",{
staticClass:"aos-g-margin-bottom--30"
},[e._v(" ")])],e._v(" "),"link"===e.feedback.style?[a("a",{
staticClass:"aos-feedback-link aos-a aos-secondary aos-small",
on:{
click:function(t){
return e.openFeedback()
}
}
},[e._v("\n\t\t\t\t\t\tGive Feedback\n\t\t\t\t\t")])]:e._e()],2):a("div",{
staticClass:"aos-content-common"
},[a("div",{
staticClass:"aos-g-align--center aos-unsafe"
},[a("span",{
staticClass:"aos-security-icon aos-icon-consent-big aos-g-margin-right--10"
}),e._v(" "),a("h2",{
staticClass:"aos-h2 aos-text-col aos-g-margin-bottom--10 aos-g-margin-top--20"
},[e._v("\n\t\t\t\t\t\t"+e._s(e.nls("installPage.consent.title"))+"\n\t\t\t\t\t")]),e._v(" "),a("p",{
domProps:{
innerHTML:e._s(e.consentDescWithUrl)
}
}),e._v(" "),a("button",{
staticClass:"aos-button aos-g-margin-top--20",
on:{
click:function(t){
return e.action("consentAgree")
}
}
},[e._v("\n\t\t\t\t\t\t"+e._s(e.nls("panel.consent.agree"))+"\n\t\t\t\t\t")])])]),e._v(" "),a("div",{
staticClass:"aos-content-settings aos-hidden"
},[a("h2",{
staticClass:"aos-h2 aos-g-align--center aos-text-col aos-white aos-g-margin-top--30"
},[e._v(e._s(e.nls("setting.title")))]),e._v(" "),a("div",{
staticClass:"aos-section",
attrs:{
"data-section":"Settings"
}
},[e._l(e.settings,(function(t){
return[a("h3",{
staticClass:"aos-h3 aos-g-padding-bottom--10 aos-g-margin-bottom--10"
},[e._v(e._s(e.nls(t.categoryId+".title")))]),e._v(" "),a("ul",{
staticClass:"aos-settings aos-g-margin-bottom--30 aos-g-margin-top--10"
},[e._l(t.items,(function(t){
return[t.hide?e._e():a("li",{
staticClass:"aos-g-margin-bottom--20"
},[a("input",{
directives:[{
name:"model",
rawName:"v-model",
value:t.value,
expression:"item.value"
}],
staticClass:"aos-block",
attrs:{
disabled:!t.enabled&&"disabled",
id:"aosSetting-"+t.id,
type:"checkbox"
},
domProps:{
checked:Array.isArray(t.value)?e._i(t.value,null)>-1:t.value
},
on:{
change:[function(a){
var i=t.value,o=a.target,s=!!o.checked
if(Array.isArray(i)){
var n=e._i(i,null)
o.checked?n<0&&e.$set(t,"value",i.concat([null])):n>-1&&e.$set(t,"value",i.slice(0,n).concat(i.slice(n+1)))
}else{
e.$set(t,"value",s)
}
},function(a){
t.enabled&&e.action("settingSet",t.id,t.value)
}]
}
}),e._v(" "),a("label",{
attrs:{
for:"aosSetting-"+t.id,
tabindex:"0"
}
},[t.noTitle?e._e():a("div",{
staticClass:"aos-text-col aos-white aos-g-margin-bottom--5"
},[e._v("\n\t\t\t\t\t\t\t\t\t\t\t"+e._s(e.nls("setting."+t.nls+".name"))+"  "),t.tooltip?a("span",{
staticClass:"aos-info",
attrs:{
title:e.nls(t.tooltip)
}
}):e._e()]),e._v(" "),t.noDesc?e._e():a("span",[e._v(e._s(e.nls("setting."+t.nls+".desc")))])]),e._v(" "),a("ul",{
staticClass:"aos-settings aos-g-margin-left--30 aos-g-margin-bottom--30 aos-g-margin-top--10"
},[e._l(t.subitems,(function(t){
return[t.hide?e._e():a("li",{
staticClass:"aos-g-margin-bottom--10"
},[a("input",{
directives:[{
name:"model",
rawName:"v-model",
value:t.value,
expression:"subitem.value"
}],
staticClass:"aos-block",
attrs:{
disabled:!t.enabled&&"disabled",
id:"aosSetting-"+t.id,
type:"checkbox"
},
domProps:{
checked:Array.isArray(t.value)?e._i(t.value,null)>-1:t.value
},
on:{
change:[function(a){
var i=t.value,o=a.target,s=!!o.checked
if(Array.isArray(i)){
var n=e._i(i,null)
o.checked?n<0&&e.$set(t,"value",i.concat([null])):n>-1&&e.$set(t,"value",i.slice(0,n).concat(i.slice(n+1)))
}else{
e.$set(t,"value",s)
}
},function(a){
t.enabled&&e.action("settingSet",t.id,t.value)
}]
}
}),e._v(" "),a("label",{
attrs:{
for:"aosSetting-"+t.id,
tabindex:"0"
}
},[t.noTitle?e._e():a("div",{
staticClass:"aos-text-col aos-white aos-g-margin-bottom--5"
},[e._v(e._s(e.nls("setting."+t.nls+".name")))]),e._v(" "),a("span",[e._v(e._s(e.nls("setting."+t.nls+".desc")))])])])]
}))],2)])]
}))],2)]
})),e._v(" "),a("div",{
staticClass:"aos-g-align--center"
},[a("button",{
staticClass:"aos-button",
on:{
click:function(t){
return e.action("settingSave")
}
}
},[e._v(e._s(e.nls("global.done")))])])],2)])])])])
},o=[]
i._withStripped=!0,e.exports=function(e){
var t="function"==typeof e?e.options:e
return t.render=i,t.staticRenderFns=o,e
}
},function(e,t,a){
var i=function(){
var e=this,t=e.$createElement,a=e._self._c||t
return a("div",{
staticClass:"aos aos-body-container"
},[a("div",{
staticClass:"aos-body"
},[a("div",{
staticClass:"aos-header"
},[a("span",{
staticClass:"aos-logo aos-g-margin-right--5"
}),e._v(" "),a("span",{
staticClass:"aos-text-col aos-white"
},[e._v(e._s(e.nls(e.brandName+".title")))]),e._v(" "),e.isBeta?a("span",{
staticClass:"aos-title-beta"
},[e._v(e._s(e.nls("global.beta")))]):e._e(),e._v(" "),a("span",{
staticClass:"aos-controls"
},[a("button",{
staticClass:"aos-btn-setting",
attrs:{
id:"aosBody-setting"
},
on:{
click:function(t){
return e.action("toggleSettings")
}
}
}),e._v(" "),a("button",{
staticClass:"aos-btn-close",
attrs:{
id:"aosBody-close"
},
on:{
click:function(t){
return e.action("close")
}
}
})])]),e._v(" "),a("div",{
staticClass:"aos-content optiscroll"
},[a("div",{
staticClass:"aos-content-common"
},[e.security.status.unsafe?[a("div",{
staticClass:"aos-g-align--center aos-unsafe"
},[a("span",{
staticClass:"aos-security-icon aos-icon-unsafe-big aos-g-margin-right--10"
}),e._v(" "),a("h2",{
staticClass:"aos-h2 aos-text-col aos-critical aos-g-margin-bottom--10 aos-g-margin-top--20"
},[e._v(e._s(e.nls("security.unsafe.title")))]),e._v(" "),e.security.phishing?a("p",[e._v(e._s(e.nls("security.unsafe.phishing.desc")))]):e._e(),e._v(" "),e.security.malware?a("p",[e._v(e._s(e.nls("security.unsafe.malware.desc")))]):e._e(),e._v(" "),a("a",{
staticClass:"aos-button aos-critical aos-g-margin-top--20",
attrs:{
href:e.security.safetyUrl
}
},[e._v("\n\t\t\t\t\t\t\t"+e._s(e.nls("global.leaveSite"))+"\n\t\t\t\t\t\t")])])]:e._e(),e._v(" "),e.security.status.unsafe?e._e():[a("div",{
staticClass:"aos-section",
attrs:{
"data-section":"Security"
}
},[a("h3",{
staticClass:"aos-h3 aos-g-padding-bottom--10 aos-g-margin-bottom--10"
},[e._v(e._s(e.nls("security.title")))]),e._v(" "),e.security.status.safe?[a("div",{
staticClass:"aos-flex"
},[a("span",{
staticClass:"aos-security-icon aos-icon-safe aos-flex-no aos-g-margin-right--10"
}),e._v(" "),a("div",[a("h2",{
staticClass:"aos-h2 aos-text-col aos-g-margin-bottom--5"
},[e._v(e._s(e.nls("security.safe.title")))]),e._v(" "),a("button",{
staticClass:"aos-section-details-button aos-button aos-secondary aos-small aos-g-margin-bottom--5",
on:{
click:function(t){
return e.sectionToggle("Security")
}
}
},[e._v("\n\t\t\t\t\t\t\t\t\t\t"+e._s(e.isSectionOpened.Security?e.nls("global.detailsHide"):e.nls("global.detailsShow"))+"\n\t\t\t\t\t\t\t\t\t")])])]),e._v(" "),a("div",{
staticClass:"aos-section-details aos-hidden",
class:{
"aos-active":e.isSectionOpened.Security
}
},[a("ul",{
staticClass:"aos-security-list aos-g-margin-top--20 aos-g-margin-right--20"
},[a("li",[a("span",{
staticClass:"aos-text"
},[e._v(e._s(e.nls("security.safe.item1.desc")))]),e._v(" "),a("span",{
staticClass:"aos-info",
attrs:{
title:e.nls("security.safe.item1.tooltip")
}
})]),e._v(" "),a("li",[a("span",{
staticClass:"aos-text"
},[e._v(e._s(e.nls("security.safe.item2.desc")))]),e._v(" "),a("span",{
staticClass:"aos-info",
attrs:{
title:e.nls("security.safe.item2.tooltip")
}
})]),e._v(" "),a("li",[a("span",{
staticClass:"aos-text"
},[e._v(e._s(e.nls("security.safe.item3.desc")))]),e._v(" "),a("span",{
staticClass:"aos-info",
attrs:{
title:e.nls("security.safe.item3.tooltip",e.brandName,"<i class='aos-icon-thumb-up'></i>")
}
})])])])]:e._e(),e._v(" "),e.security.status.unknown?[a("div",{
staticClass:"aos-flex"
},[a("span",{
staticClass:"aos-security-icon aos-icon-unknown aos-flex-no aos-g-margin-right--10"
}),e._v(" "),a("div",{
staticClass:"aos-security-text"
},[a("h2",{
staticClass:"aos-h2 aos-text-col aos-white aos-g-margin-bottom--5"
},[e._v(e._s(e.nls("security.unknown.title")))]),e._v(" "),a("p",{
staticClass:"aos-g-margin-bottom--5"
},[e._v(e._s(e.nls("security.unknown.desc")))])])])]:e._e(),e._v(" "),e.security.status.bad?[a("div",{
staticClass:"aos-flex"
},[a("span",{
staticClass:"aos-security-icon aos-icon-bad aos-flex-no aos-g-margin-right--10"
}),e._v(" "),a("div",{
staticClass:"aos-security-text"
},[a("h2",{
staticClass:"aos-h2 aos-text-col aos-attention aos-g-margin-bottom--5"
},[e._v(e._s(e.nls("security.bad.title")))]),e._v(" "),a("p",{
staticClass:"aos-g-margin-bottom--5"
},[e._v(e._s(e.nls("security.bad.desc")))])])])]:e._e()],2),e._v(" "),a("div",{
staticClass:"aos-section aos-section-vote",
attrs:{
"data-section":"Vote"
}
},[a("h3",{
staticClass:"aos-h3 aos-g-padding-bottom--10 aos-g-margin-bottom--10"
},[a("div",{
staticClass:"aos-hidden",
attrs:{
id:"aosVote-thanks"
}
},[e.vote.status.trusted?a("span",{
staticClass:"aos-text-col"
},[e._v(e._s(e.nls("rating.thanks")))]):e._e(),e._v(" "),e.vote.status.untrusted?a("span",{
staticClass:"aos-text-col aos-critical"
},[e._v(e._s(e.nls("rating.thanks")))]):e._e()]),e._v(" "),a("div",{
attrs:{
id:"aosVote-info"
}
},[e.vote.status.unrated?a("div",{
staticClass:"aos-flex-left aos-multiline"
},[a("span",[e._v(e._s(e.nls("rating.question.desc",e.web.name)))]),e._v(" "),a("span",[a("span",{
staticClass:"aos-info",
attrs:{
title:e.nls("rating.tooltip")
}
})])]):e._e(),e._v(" "),e.vote.status.trusted?a("div",{
staticClass:"aos-flex-left aos-multiline"
},[a("span",{
staticClass:"aos-i-col",
domProps:{
innerHTML:e._s(e.nls("rating.trusted.desc",e.web.name))
}
}),e._v(" "),a("span",[a("span",{
staticClass:"aos-info",
attrs:{
title:e.nls("rating.tooltip")
}
})])]):e._e(),e._v(" "),e.vote.status.untrusted?a("div",{
staticClass:"aos-flex-left aos-multiline"
},[a("span",{
staticClass:"aos-i-col aos-critical",
domProps:{
innerHTML:e._s(e.nls("rating.untrusted.desc",e.web.name))
}
}),e._v(" "),a("span",[a("span",{
staticClass:"aos-info",
attrs:{
title:e.nls("rating.tooltip")
}
})])]):e._e()])]),e._v(" "),a("div",{
staticClass:"aos-votes aos-g-align--center"
},[a("span",[e.vote.status.trusted?a("button",{
staticClass:"aos-vote-icon aos-vote-yes aos-active",
attrs:{
title:e.nls("rating.revert.tooltip")
},
on:{
click:function(t){
return e.action("unvote")
}
}
}):e._e()]),e._v(" "),a("span",[e.vote.status.trusted?e._e():a("button",{
staticClass:"aos-vote-icon aos-vote-yes",
on:{
click:function(t){
return e.action("voteYes")
}
}
})]),e._v(" "),a("span",[e.vote.status.untrusted?a("button",{
staticClass:"aos-vote-icon aos-vote-no aos-active",
attrs:{
title:e.nls("rating.revert.tooltip")
},
on:{
click:function(t){
return e.action("unvote")
}
}
}):e._e()]),e._v(" "),a("span",[e.vote.status.untrusted?e._e():a("button",{
staticClass:"aos-vote-icon aos-vote-no aos-section-details-button",
on:{
click:function(t){
return e.sectionToggle("Vote")
}
}
})])]),e._v(" "),a("div",{
staticClass:"aos-section-details aos-hidden",
class:{
"aos-active":e.isSectionOpened.Vote
}
},[a("p",{
staticClass:"aos-g-margin-top--20"
},[e._v(e._s(e.nls("rating.negative")))]),e._v(" "),a("ul",{
staticClass:"aos-vote-list aos-g-margin-bottom--30"
},e._l(e.vote.categories,(function(t){
return a("li",{
staticClass:"aos-g-margin-bottom--10"
},[a("input",{
directives:[{
name:"model",
rawName:"v-model",
value:t.value,
expression:"category.value"
}],
attrs:{
type:"checkbox",
id:"aosVote-"+t.id
},
domProps:{
checked:Array.isArray(t.value)?e._i(t.value,null)>-1:t.value
},
on:{
change:function(a){
var i=t.value,o=a.target,s=!!o.checked
if(Array.isArray(i)){
var n=e._i(i,null)
o.checked?n<0&&e.$set(t,"value",i.concat([null])):n>-1&&e.$set(t,"value",i.slice(0,n).concat(i.slice(n+1)))
}else{
e.$set(t,"value",s)
}
}
}
}),e._v(" "),a("label",{
attrs:{
tabindex:"0",
for:"aosVote-"+t.id
}
},[e._v("\n\t\t\t\t\t\t\t\t\t\t"+e._s(e.nls("rating.category."+t.id))+"\n\t\t\t\t\t\t\t\t\t")])])
})),0),e._v(" "),a("div",{
staticClass:"aos-g-align--center"
},[a("button",{
staticClass:"aos-button",
on:{
click:function(t){
return e.action("voteNo")
}
}
},[e._v(e._s(e.nls("global.done")))])])])])]],2),e._v(" "),a("div",{
staticClass:"aos-content-settings aos-hidden"
},[a("h2",{
staticClass:"aos-h2 aos-g-align--center aos-text-col aos-white aos-g-margin-top--30"
},[e._v(e._s(e.nls("setting.title")))]),e._v(" "),a("div",{
staticClass:"aos-section",
attrs:{
"data-section":"Settings"
}
},[e._l(e.settings,(function(t){
return[a("h3",{
staticClass:"aos-h3 aos-g-padding-bottom--10 aos-g-margin-bottom--10"
},[e._v(e._s(e.nls(t.categoryId+".title")))]),e._v(" "),a("ul",{
staticClass:"aos-settings aos-g-margin-bottom--30 aos-g-margin-top--10"
},[e._l(t.items,(function(t){
return[t.hide?e._e():a("li",{
staticClass:"aos-g-margin-bottom--20"
},[a("input",{
directives:[{
name:"model",
rawName:"v-model",
value:t.value,
expression:"item.value"
}],
staticClass:"aos-block",
attrs:{
disabled:!t.enabled&&"disabled",
id:"aosSetting-"+t.id,
type:"checkbox"
},
domProps:{
checked:Array.isArray(t.value)?e._i(t.value,null)>-1:t.value
},
on:{
click:function(a){
t.enabled&&e.action("settingSet",t.id,!t.value)
},
change:function(a){
var i=t.value,o=a.target,s=!!o.checked
if(Array.isArray(i)){
var n=e._i(i,null)
o.checked?n<0&&e.$set(t,"value",i.concat([null])):n>-1&&e.$set(t,"value",i.slice(0,n).concat(i.slice(n+1)))
}else{
e.$set(t,"value",s)
}
}
}
}),e._v(" "),a("label",{
attrs:{
for:"aosSetting-"+t.id,
tabindex:"0"
}
},[t.noTitle?e._e():a("div",{
staticClass:"aos-text-col aos-white aos-g-margin-bottom--5"
},[e._v(e._s(e.nls("setting."+t.nls+".name")))]),e._v(" "),t.noDesc?e._e():a("span",[e._v(e._s(e.nls("setting."+t.nls+".desc")))])]),e._v(" "),a("ul",{
staticClass:"aos-settings aos-g-margin-left--30 aos-g-margin-bottom--30 aos-g-margin-top--10"
},[e._l(t.subitems,(function(t){
return[t.hide?e._e():a("li",{
staticClass:"aos-g-margin-bottom--10"
},[a("input",{
directives:[{
name:"model",
rawName:"v-model",
value:t.value,
expression:"subitem.value"
}],
staticClass:"aos-block",
attrs:{
disabled:!t.enabled&&"disabled",
id:"aosSetting-"+t.id,
type:"checkbox"
},
domProps:{
checked:Array.isArray(t.value)?e._i(t.value,null)>-1:t.value
},
on:{
click:function(a){
t.enabled&&e.action("settingSet",t.id,!t.value)
},
change:function(a){
var i=t.value,o=a.target,s=!!o.checked
if(Array.isArray(i)){
var n=e._i(i,null)
o.checked?n<0&&e.$set(t,"value",i.concat([null])):n>-1&&e.$set(t,"value",i.slice(0,n).concat(i.slice(n+1)))
}else{
e.$set(t,"value",s)
}
}
}
}),e._v(" "),a("label",{
attrs:{
for:"aosSetting-"+t.id,
tabindex:"0"
}
},[t.noTitle?e._e():a("div",{
staticClass:"aos-text-col aos-white aos-g-margin-bottom--5"
},[e._v(e._s(e.nls("setting."+t.nls+".name")))]),e._v(" "),a("span",[e._v(e._s(e.nls("setting."+t.nls+".desc")))])])])]
}))],2)])]
}))],2)]
})),e._v(" "),a("div",{
staticClass:"aos-g-align--center"
},[a("button",{
staticClass:"aos-button",
on:{
click:function(t){
return e.action("settingSave")
}
}
},[e._v(e._s(e.nls("global.done")))])])],2)])])])])
},o=[]
i._withStripped=!0,e.exports=function(e){
var t="function"==typeof e?e.options:e
return t.render=i,t.staticRenderFns=o,e
}
},function(e,t,a){
var i=function(){
var e=this,t=e.$createElement,a=e._self._c||t
return a("div",{
staticClass:"aos"
},[a("div",{
staticClass:"aos-topbar aos-body"
},[a("div",{
staticClass:"aos-flex-left aos-header"
},[a("div",[a("span",{
staticClass:"aos-logo"
}),e._v(" "),a("p",{
staticClass:"aos-g-margin-right--10"
},[e._v(e._s(e.nls("topbar.desc")))]),e._v(" "),a("button",{
staticClass:"aos-button aos-small aos-g-margin-right--10",
on:{
click:function(t){
return e.action("bankmode")
}
}
},[e._v("\n\t\t\t\t\t"+e._s(e.nls("topbar.openBankMode"))+"\n\t\t\t\t")]),e._v(" "),a("span",{
staticClass:"aos-info",
attrs:{
title:e.nls("topbar.tooltip")
}
})]),e._v(" "),a("div",{
staticClass:"aos-controls"
},[a("input",{
directives:[{
name:"model",
rawName:"v-model",
value:e.dontShowAgain,
expression:"dontShowAgain"
}],
attrs:{
type:"checkbox",
id:"aos-topbar-dont-show-again"
},
domProps:{
checked:Array.isArray(e.dontShowAgain)?e._i(e.dontShowAgain,null)>-1:e.dontShowAgain
},
on:{
change:function(t){
var a=e.dontShowAgain,i=t.target,o=!!i.checked
if(Array.isArray(a)){
var s=e._i(a,null)
i.checked?s<0&&(e.dontShowAgain=a.concat([null])):s>-1&&(e.dontShowAgain=a.slice(0,s).concat(a.slice(s+1)))
}else{
e.dontShowAgain=o
}
}
}
}),e._v(" "),a("label",{
attrs:{
for:"aos-topbar-dont-show-again"
}
},[e._v(e._s(e.nls("topbar.dontShowAgain")))]),e._v(" "),a("button",{
staticClass:"aos-btn-close",
on:{
click:function(t){
return e.action("close")
}
}
})])])])])
},o=[]
i._withStripped=!0,e.exports=function(e){
var t="function"==typeof e?e.options:e
return t.render=i,t.staticRenderFns=o,e
}
},function(e){
e.exports=JSON.parse('{"ar":{"AVG.title":"Online Security","Avast.title":"Avast Online Security","global.beta":"بيتا","global.detailsShow":"تفاصيل","global.detailsHide":"إخفاء التفاصيل","global.done":"تم","global.leaveSite":"مغادرة الموقع","global.switcher.off":"OFF","global.switcher.on":"ON","global.close":"إغلاق","global.back":"عودة","background.icon.unknown":"{0} - موقع غير معروف","background.icon.safe":"{0} - هذا الموقع آمن","background.icon.bad":"{0} - قد يكون هذا الموقع غير موثوق","background.icon.unsafe":"{0} - قد يكون هذا الموقع غير آمن","security.title":"الأمن","security.safe.title":"هذا الموقع آمن","security.safe.item1.desc":"من دون تصيد","security.safe.item1.tooltip":"لم نكتشف أي محاولات لسرقة المعلومات الحساسة مثل كلمات المرور، وأرقام بطاقات الائتمان وغيرها على هذا الموقع.","security.safe.item2.desc":"من دون برمجيات خبيثة","security.safe.item2.tooltip":"لم نكتشف أي رمز خبيث على هذا الموقع.","security.safe.item3.desc":"موثوق","security.safe.item3.tooltip":"قام مستخدمو {0} بتقييم هذا الموقع بأنه موثوق به بالنقر فوق {1} في {0} Online Security.","security.bad.title":"قد يكون هذا غير موثوق به","security.bad.desc":"لم نعثر على أي تهديدات بالتصيد أو برمجيات خبيثة هنا، لكن العديد من مستخدمينا قد أعطوا للموقع علامة سلبية.","security.unknown.title":"موقع غير معروف","security.unknown.desc":"ليس لدينا ما يكفي من المعلومات لتقييم هذا الموقع بعد.","security.unsafe.title":"هذا الموقع غير آمن","security.unsafe.phishing.desc":"وُضعت علامة على هذا الموقع على أنه موقع تصيد. التصيد هو محاولة لسرقة معلومات حساسة منك مثل كلمات المرور وأرقام بطاقات الائتمان، وما إلى ذلك.","security.unsafe.malware.desc":"عثرنا على رمز خبيث على هذا الموقع، والذي من الممكن أن يضر جهاز الكمبيوتر الخاص بك أو يسرق بياناتك الخاصة.","rating.question.desc":"هل تثق في موقع {0}؟","rating.negative":"هل يوجد أي محتوى غير ملائم على هذا الموقع؟ (اختياري)","rating.thanks":"شكرًا على تقييمك!","rating.trusted.desc":"أنت <i>تثق</i> في موقع {0}","rating.untrusted.desc":"أنت <i>لا تثق</i> في موقع {0}","rating.revert.tooltip":"النقر لإزالة تقييمك","rating.tooltip":"ستؤخذ ثقتك أو عدمها في الاعتبار في تقييم الأمان الخاص بهذا الموقع.","rating.category.pornography":"إباحي","rating.category.violence":"أسلحة / عنف","rating.category.gambling":"لعب القمار","rating.category.drugs":"كحول / مخدرات","rating.category.illegal":"ويرز / غير قانوني","rating.category.others":"غير ذلك","privacy.title":"الخصوصية","privacy.group.Social.desc":"الشبكات الاجتماعية","privacy.group.Social.block.desc":"حظر تتبع الشبكات الاجتماعية بالكامل","privacy.group.Social.block.tooltip":"سيحظر ذلك تتبع الشبكات الاجتماعية على كل موقع تزوره.","privacy.group.Social.unblock.desc":"إلغاء حظر تتبع الشبكات الاجتماعية بالكامل","privacy.group.Social.unblock.tooltip":"سيسمح ذلك بتتبع الشبكات الاجتماعية على كل موقع تزوره.","privacy.group.AdTracking.desc":"تتبع الإعلانات","privacy.group.AdTracking.block.desc":"حظر تتبع الإعلانات بالكامل","privacy.group.AdTracking.block.tooltip":"سيحظر ذلك تتبع الإعلانات على كل موقع تزوره.","privacy.group.AdTracking.unblock.desc":"إلغاء حظر تتبع الإعلانات بالكامل","privacy.group.AdTracking.unblock.tooltip":"سيسمح ذلك بتتبع الإعلانات على أي موقع تزوره.","privacy.group.WebAnalytics.desc":"تحليلات المواقع","privacy.group.WebAnalytics.block.desc":"حظر تتبع تحليلات المواقع بالكامل","privacy.group.WebAnalytics.block.tooltip":"سيحظر ذلك تتبع تحليلات المواقع على كل موقع تزوره.","privacy.group.WebAnalytics.unblock.desc":"إلغاء حظر تتبع تحليلات المواقع بالكامل","privacy.group.WebAnalytics.unblock.tooltip":"سيسمح ذلك بالتتبعات الأخرى على كل موقع تزوره.","privacy.group.Others.desc":"غير ذلك","privacy.group.Others.block.desc":"حظر جميع التتبعات الأخرى","privacy.group.Others.block.tooltip":"سيحظر ذلك التتبع الآخر على كل موقع تزوره.","privacy.group.Others.unblock.desc":"إلغاء حظر جميع التتبعات الأخرى","privacy.trackersBlockedAll":"<i>{0} متتبع</i> بالكامل محظور على موقع {1} | <i>{0} متتبع</i> بالكامل محظور على موقع {1} | <i>{0} متتبع</i> بالكامل محظور على موقع {1} | <i>{0} متتبعين</i> بالكامل محظورين على موقع {1} | <i>{0} متتبع</i> بالكامل محظور على موقع {1} | <i>{0} متتبع</i> بالكامل محظور على موقع {1}","privacy.trackersBlockedSome":"<i>{0} من {1} متتبع</i> محظور على {2} | <i>{0} من {1} متتبع</i> محظور على {2} | <i>{0} من {1} متتبع</i> محظور على {2} | <i>{0} من {1} متتبعين</i> محظورين على {2} | <i>{0} من {1} متتبع</i> محظور على {2} | <i>{0} من {1} متتبع</i> محظور على {2}","privacy.trackersBlockedNone":"<i>{0} نظام متتبع</i> على موقع {1} | <i>{0} نظام متتبع</i> على موقع {1} | <i>{0} نظام متتبع</i> على موقع {1} | <i>{0} أنظمة متتبعة</i> على موقع {1} | <i>{0} نظام متتبع</i> على موقع {1} | <i>{0} نظام متتبع</i> على موقع {1}","privacy.trackersBlocked":"{0} من {1} محظور","privacy.trackersFound":"تم العثور على {0}","privacy.trackersNone":"لا شيء","privacy.trackerBlock.desc":"حظر","privacy.trackerBlock.tooltip":"سيحظر ذلك [{0}] على أي موقع تزوره.","privacy.trackerUnblock.desc":"محظور","privacy.trackerUnblock.tooltip":"سيلغي ذلك حظر [{0}] على كل موقع تزوره.","privacy.trackerUnblockOnAutoBlock.tooltip":"لإلغاء حظر متتبع معين، قم بإيقاف الحظر التلقائي.","privacy.automaticBlocking.desc":"حظر جميع المتتبعين تلقائيًا","privacy.automaticBlocking.tooltip":"سنقوم بحظر جميع المتتبعين الذين عُثر عليهم على أي موقع تزوره تلقائيًا.","setting.title":"الإعدادات","setting.serp.name":"وضع علامة على نتائج البحث الخاص بي","setting.serp.desc":"أضف رموز ملونة إلى نتائج البحث الخاصة بك على Google وYahoo!، وما إلى ذلك. لمعرفة النتائج التي يمكن النقر عليها بأمان. (أخضر = آمن، رمادي = غير معروف، أحمر = غير آمن)","setting.serpPopup.name":"إظهار تلميحات لنتائج البحث","setting.serpPopup.desc":"حرك الماوس فوق الرموز الخاصة بنا لمعرفة مزيد من المعلومات.","setting.secureBrowser.Avast.name":"Secure Browser","setting.secureBrowser.Avast.desc":"التبديل إلى وضع البنك للمواقع المالية الحساسة (يحتاج إلى تثبيت Avast Antivirus وAvast Secure Browser)","setting.secureBrowser.AVG.name":"Secure Browser","setting.secureBrowser.AVG.desc":"التبديل إلى وضع البنك للمواقع المالية الحساسة (يتطلب تثبيت AVG AntiVirus وAVG Secure Browser)","setting.dntBadge.name":"إظهار إجمالي المتتبعين على أحد المواقع","setting.dntBadge.desc":"إضافة شارة على متصفحك لمعرفة عدد المتتبعين على أي موقع على الفور.","setting.dntAutoBlock.name":"حظر جميع المتتبعين تلقائيًا","setting.dntAutoBlock.desc":"حظر جميع المتتبعين الذين عُثر عليهم على كل موقع تزوره.","setting.dntSocial.desc":"حظر جميع متتبعي الشبكات الاجتماعية","setting.dntAdTracking.desc":"حظر جميع متتبعي الإعلانات","setting.dntWebAnalytics.desc":"حظر جميع متتبعي تحليلات المواقع","setting.dntOthers.desc":"حظر جميع المتتبعين الآخرين","setting.productAnalysis.name":"السماح بتحليل أداء المنتج واستخدامه لتطوير منتجٍ جديدٍ","setting.productAnalysis.tooltip":"إننا نقوم بجمع بيانات استخدام الخوادم الخاصة بالملحق ومعرّف الملحق الداخلي ونوع المتصفح وإصداره ونظام التشغيل والبلد واللغة وحالة تطبيق مضاد الفيروسات من Avast وإرسالها لخوادمنا.","setting.urlConsent.name":"الموافقة على جمع عنوان URL","serp.safe.desc":"هذا الموقع آمن","serp.bad.desc":"قد يكون هذا الموقع غير موثوق","serp.unknown.desc":"ليس لهذا الموقع تقييم","serp.unsafe.desc":"هذا الموقع غير آمن","topbar.openBankMode":"الفتح في وضع البنك","topbar.desc":"قد تكون البيانات المالية الخاصة بك مرئيةً للآخرين.","topbar.tooltip":"يقوم وضع البنك، الذي هو جزء من متصفح Avast Secure Browser المثبت باستخدام Avast المضاد للفيروسات، بعزل جلسات المعاملات البنكية والتسوق الخاصة بك بأمان لإيقاف القراصنة من سرقة أرقام بطاقة الائتمان الخاص بك، وكلمات المرور، والبيانات الشخصية الأخرى.","topbar.dontShowAgain":"لا تظهر البيانات على هذا الموقع مرة أخرى","installPage.consent.title":"هل تسمح لنا بحمايتك عن طريق فحص عناوين الويب؟","installPage.consent.desc":"إذا وافقت، فسوف نفحص عناوين مواقع الويب التي تزورها حتى نتمكن من إخبارك بما إذا كانت هذه المواقع آمنة أم لا. (راجع {URL_START}سياسة الخصوصية{URL_END} الخاصة بنا)","installPage.agreed.title":"شكرًا!","installPage.agreed.desc":"نحن نحميك في الوقت الحالي من مواقع الويب غير الآمنة.","installPage.disagreed.title":"لا تشغل بالك","installPage.disagreed.desc":"إذا كنت لا تريدنا أن نفحص عناوين الويب الخاصة بك، فما عليك سوى إلغاء تثبيت {0} Online Security – ولكن توخّ الحذر!","installPage.consent.disagree":"لا، شكرًا","installPage.consent.agree":"نعم، افحص عناوين الويب","panel.consent.agree":"فحص عناوين الويب"},"be":{"AVG.title":"Online Security","Avast.title":"Avast Online Security","global.beta":"Бэта-версія","global.detailsShow":"Падрабязнасці","global.detailsHide":"Схаваць падрабязнасці","global.done":"Гатова","global.leaveSite":"Пакінуць сайт","global.switcher.off":"OFF","global.switcher.on":"ON","global.close":"Закрыць","global.back":"Назад","background.icon.unknown":"{0}: невядомы сайт","background.icon.safe":"{0}: гэты вэб-сайт бяспечны","background.icon.bad":"{0}: гэты сайт можа быць небяспечным","background.icon.unsafe":"{0}: гэты вэб-сайт небяспечны","security.title":"Бяспека","security.safe.title":"Гэты вэб-сайт бяспечны","security.safe.item1.desc":"Фішынгу няма","security.safe.item1.tooltip":"На гэтым сайце не выяўлена спроб крадзяжу канфідэнцыяльнай інфармацыі, такой як паролі, нумары крэдытных картак і г. д.","security.safe.item2.desc":"Шкоднасных праграм няма","security.safe.item2.tooltip":"На гэтым сайце не выяўлены шкодны код.","security.safe.item3.desc":"Давераны","security.safe.item3.tooltip":"Карыстальнікі ({0}) ацанілі гэты вэб-сайт як надзейны, націснуўшы {1} у Online Security {0}.","security.bad.title":"Гэта можа быць небяспечным","security.bad.desc":"Тут не было выяўлена пагроз фішынгу або шкоднасных праграм, але многія нашы карыстальнікі далі гэтаму сайту адзнаку «палец уніз».","security.unknown.title":"Невядомы сайт","security.unknown.desc":"У нас пакуль не хапае інфармацыі, каб ацаніць гэты вэб-сайт.","security.unsafe.title":"Гэты вэб-сайт небяспечны","security.unsafe.phishing.desc":"Гэты вэб-сайт пазначаны як фішынгавы. Фішынг — гэта спроба ўкрасці канфідэнцыяльную інфармацыю, такую як паролі, нумары крэдытных картак і г. д.","security.unsafe.malware.desc":"На гэтым сайце знойдзены шкоднасны код, які можа нанесці шкоду вашаму камп’ютару ці ўкрасці вашы асабістыя даныя.","rating.question.desc":"Вы давяраеце {0}?","rating.negative":"Ці ёсць на гэтым вэб-сайце недапушчальнае змесціва? (неабавязкова)","rating.thanks":"Дзякуем за адзнаку!","rating.trusted.desc":"Вы <i>давяраеце</i> {0}","rating.untrusted.desc":"Вы <i>не давяраеце</i> {0}","rating.revert.tooltip":"Націсніце, каб выдаліць адзнаку","rating.tooltip":"Ваш давер або недавер будуць улічаны ў нашым рэйтынгу бяспекі для гэтага вэб-сайта.","rating.category.pornography":"Парнаграфія","rating.category.violence":"Зброя / Гвалт","rating.category.gambling":"Азартныя гульні","rating.category.drugs":"Алкаголь / Наркотыкі","rating.category.illegal":"Нелегальныя праграмы","rating.category.others":"Іншае","privacy.title":"Канфідэнцыяльнасць","privacy.group.Social.desc":"Сацыяльныя сеткі","privacy.group.Social.block.desc":"Заблакіраваць адсочванне сацыяльных сетак","privacy.group.Social.block.tooltip":"Гэта дзеянне заблакіруе адсочванне сацыяльных сетак на ўсіх сайтах, якія вы наведваеце.","privacy.group.Social.unblock.desc":"Разблакіраваць адсочванне сацыяльных сетак","privacy.group.Social.unblock.tooltip":"Гэта дзеянне дазволіць адсочванне сацыяльных сетак на ўсіх сайтах, якія вы наведваеце.","privacy.group.AdTracking.desc":"Адсочванне рэкламы","privacy.group.AdTracking.block.desc":"Заблакіраваць адсочванне рэкламы","privacy.group.AdTracking.block.tooltip":"Гэта дзеянне заблакіруе адсочванне рэкламы на ўсіх сайтах, якія вы наведваеце.","privacy.group.AdTracking.unblock.desc":"Разблакіраваць адсочванне рэкламы","privacy.group.AdTracking.unblock.tooltip":"Гэта дзеянне дазволіць адсочванне рэкламы на ўсіх сайтах, якія вы наведваеце.","privacy.group.WebAnalytics.desc":"Вэб-аналітыка","privacy.group.WebAnalytics.block.desc":"Заблакіраваць адсочванне вэб-аналітыкі","privacy.group.WebAnalytics.block.tooltip":"Гэта дзеянне заблакіруе адсочванне вэб-аналітыкі на ўсіх сайтах, якія вы наведваеце.","privacy.group.WebAnalytics.unblock.desc":"Разблакіраваць адсочванне вэб-аналітыкі","privacy.group.WebAnalytics.unblock.tooltip":"Гэта дзеянне дазволіць іншыя віды адсочвання на ўсіх сайтах, якія вы наведваеце.","privacy.group.Others.desc":"Іншае","privacy.group.Others.block.desc":"Заблакіраваць іншае адсочванне","privacy.group.Others.block.tooltip":"Гэта дзеянне заблакіруе іншыя віды адсочвання на ўсіх сайтах, якія вы наведваеце.","privacy.group.Others.unblock.desc":"Разблакіраваць іншае адсочванне","privacy.trackersBlockedAll":"На {1} заблакіраваны <i>{0} сродак адсочвання</i> | На {1} заблакіраваны ўсе <i>{0} сродкі адсочвання</i> | На {1} заблакіраваны ўсе <i>{0} сродкаў адсочвання</i> | На {1} заблакіраваны ўсе <i>{0} сродкаў адсочвання</i>","privacy.trackersBlockedSome":"На {2} заблакіраваны сродкі адсочвання: <i>{0} з {1}</i> | На {2} заблакіраваны сродкі адсочвання: <i>{0} з {1}</i> | На {2} заблакіраваны сродкі адсочвання: <i>{0} з {1}</i> | На {2} заблакіраваны сродкі адсочвання: <i>{0} з {1}</i>","privacy.trackersBlockedNone":"<i>{0} сістэма адсочвання</i> на {1} | <i>{0} сістэмы адсочвання</i> на {1} | <i>{0} сістэм адсочвання</i> на {1} | <i>{0} сістэм адсочвання</i> на {1}","privacy.trackersBlocked":"Заблакіравана: {0} з {1}","privacy.trackersFound":"Знойдзена: {0}","privacy.trackersNone":"нічога","privacy.trackerBlock.desc":"Заблакіраваць","privacy.trackerBlock.tooltip":"Гэта дзеянне заблакіруе [{0}] на ўсіх сайтах, якія вы наведваеце.","privacy.trackerUnblock.desc":"Заблакіравана","privacy.trackerUnblock.tooltip":"Гэта дзеянне разблакіруе [{0}] на ўсіх сайтах, якія вы наведваеце.","privacy.trackerUnblockOnAutoBlock.tooltip":"Каб разблакіраваць пэўны сродак адсочвання, выключыце аўтаматычную блакіроўку.","privacy.automaticBlocking.desc":"Аўтаматычна блакіраваць усе сродкі адсочвання","privacy.automaticBlocking.tooltip":"Мы будзем аўтаматычна блакіраваць усе знойдзеныя сродкі адсочвання на ўсіх сайтах, якія вы наведваеце.","setting.title":"Налады","setting.serp.name":"Пазначыць мае вынікі пошуку","setting.serp.desc":"Дадаваць каляровыя значкі да вынікаў пошуку ў Google, Yahoo! і г. д., каб бачыць, якія вынікі бяспечныя (зялёны — бяспечна, шэры — невядома, чырвоны — небяспечна)","setting.serpPopup.name":"Паказваць падказкі для вынікаў пошуку","setting.serpPopup.desc":"Навядзіце мышку на значок, каб атрымаць дадатковую інфармацыю.","setting.secureBrowser.Avast.name":"Secure Browser","setting.secureBrowser.Avast.desc":"Для працы з канфідэнцыяльнай фінансавай інфармацыяй пераключыцеся на рэжым банкінгу (патрабуецца антывірус Avast і Avast Secure Browser)","setting.secureBrowser.AVG.name":"Secure Browser","setting.secureBrowser.AVG.desc":"Для працы з канфідэнцыяльнай фінансавай інфармацыяй пераключыцеся на рэжым банкінгу (патрабуецца антывірус AVG і AVG Secure Browser)","setting.dntBadge.name":"Паказваць колькасць усіх сродкаў адсочвання на сайце","setting.dntBadge.desc":"Дадайце значок у сваім браўзеры, каб адразу бачыць, колькі сродкаў адсочвання знаходзіцца на вэб-сайце.","setting.dntAutoBlock.name":"Аўтаматычна блакіраваць усе сродкі адсочвання","setting.dntAutoBlock.desc":"Блакіраваць усе сродкі адсочвання на ўсіх сайтах, якія вы наведваеце.","setting.dntSocial.desc":"Заблакіраваць усе сродкі адсочвання сацыяльных сетак","setting.dntAdTracking.desc":"Заблакіраваць усе сродкі адсочвання рэкламы","setting.dntWebAnalytics.desc":"Заблакіраваць усе сродкі адсочвання вэб-аналітыкі","setting.dntOthers.desc":"Заблакіраваць усе іншыя сродкі адсочвання","setting.productAnalysis.name":"Дазволіць аналіз прадукцыйнасці і выкарыстання прадукту для распрацоўкі новых прадуктаў","setting.productAnalysis.tooltip":"Мы збіраем і адпраўляем на нашы серверы даныя пра выкарыстанне пашырэння, унутраны ідэнтыфікатар пашырэння, тып і версію браўзера, версію аперацыйнай сістэмы, краіну, мову, стан антывіруснай праграмы Avast.","setting.urlConsent.name":"Згода на збор URL-адрасоў","serp.safe.desc":"Гэты вэб-сайт бяспечны","serp.bad.desc":"Гэты сайт можа быць небяспечным","serp.unknown.desc":"У гэтага сайта няма рэйтынгу","serp.unsafe.desc":"Гэты сайт небяспечны","topbar.openBankMode":"Адкрыць у рэжыме банкінгу","topbar.desc":"Вашы фінансавыя даныя могуць бачыць іншыя людзі.","topbar.tooltip":"Рэжым банкінгу, частка Avast Secure Browser, усталяваная разам з антывірусам Avast, бяспечна ізалюе сеансы купляў і банкаўскіх аперацый, каб забараніць хакерам красці нумары вашых крэдытных картак, пароль і іншыя асабістыя даныя.","topbar.dontShowAgain":"Больш не паказваць на гэтым сайце","installPage.consent.title":"Дазволіць абарону з дапамогай сканіравання вэб-адрасоў?","installPage.consent.desc":"У выпадку вашай згоды мы будзем праглядаць адрасы вэб-сайтаў, якія вы наведалі, каб паведамляць аб узроўні іх бяспекі. (Больш падрабязна гл. у {URL_START}Палітыцы прыватнасці{URL_END}.)","installPage.agreed.title":"Дзякуй!","installPage.agreed.desc":"Цяпер вы абаронены ад небяспечных вэб-сайтаў.","installPage.disagreed.title":"Без крыўд","installPage.disagreed.desc":"Калі вы не хочаце, каб мы сканіравалі вэб-адрасы, проста выдаліце {0} Online Security. Беражыце сябе!","installPage.consent.disagree":"Не, дзякуй","installPage.consent.agree":"Так, сканіраваць вэб-адрасы","panel.consent.agree":"Сканіраваць вэб-адрасы"},"bg":{"AVG.title":"Online Security","Avast.title":"Avast Online Security","global.beta":"Бета","global.detailsShow":"Подробности","global.detailsHide":"Скриване на подробности","global.done":"Готово","global.leaveSite":"Напускане на сайта","global.switcher.off":"OFF","global.switcher.on":"ON","global.close":"Затваряне","global.back":"Назад","background.icon.unknown":"{0} – Неизвестен сайт","background.icon.safe":"{0} – Уеб сайтът е безопасен","background.icon.bad":"{0} – Сайтът може да не е благонадежден","background.icon.unsafe":"{0} – Уеб сайтът не е безопасен","security.title":"Сигурност","security.safe.title":"Уеб сайтът е безопасен","security.safe.item1.desc":"Няма фишинг","security.safe.item1.tooltip":"В този уеб сайт не открихме каквито и да било опити за кражба на чувствителна информация като пароли, номера на кредитни карти и т.н.","security.safe.item2.desc":"Няма злонамерен софтуер","security.safe.item2.tooltip":"В този уеб сайт не открихме какъвто и да било злонамерен код.","security.safe.item3.desc":"Надежден","security.safe.item3.tooltip":"{0} потребители са оценили този уеб сайт като достоверен, като са щракнали {1} в {0} Online Security.","security.bad.title":"Сайтът може да е неблагонадежден","security.bad.desc":"Не открихме каквито и да било заплахи за фишинг или злонамерен софтуер, но много от нашите потребители са дали палец надолу за този сайт.","security.unknown.title":"Неизвестен сайт","security.unknown.desc":"Все още нямаме достатъчно информация, за да оценим този уеб сайт.","security.unsafe.title":"Уеб сайтът не е безопасен","security.unsafe.phishing.desc":"Уеб сайтът е отбелязан като сайт за фишинг. Фишингът представлява опит за кражба на чувствителна информация като пароли, номера на кредитни карти и т.н.","security.unsafe.malware.desc":"В този уеб сайт открихме злонамерен код, който би могъл да навреди на компютъра ви или да открадне личните ви данни.","rating.question.desc":"Доверявате ли се на {0}?","rating.negative":"Има ли неподходящо съдържание в този уеб сайт? (по избор)","rating.thanks":"Благодарим ви за оценката!","rating.trusted.desc":"<i>Доверявате се</i> на {0}","rating.untrusted.desc":"<i>Не се доверявате</i> на {0}","rating.revert.tooltip":"Натиснете, за да премахнете оценката си","rating.tooltip":"Вашата оценка ще бъде взета предвид в оценката ни за сигурността на този уеб сайт.","rating.category.pornography":"Порнография","rating.category.violence":"Оръжия/насилие","rating.category.gambling":"Хазарт","rating.category.drugs":"Алкохол/наркотици","rating.category.illegal":"Нелегален софтуер","rating.category.others":"Други","privacy.title":"Поверителност","privacy.group.Social.desc":"Социални мрежи","privacy.group.Social.block.desc":"Блокиране на цялостното следене на социалните мрежи","privacy.group.Social.block.tooltip":"Това ще блокира следенето на социалните мрежи във всеки уеб сайт, който посетите.","privacy.group.Social.unblock.desc":"Деблокиране на цялостното следене на социалните мрежи","privacy.group.Social.unblock.tooltip":"Това ще позволи следенето на социалните мрежи във всеки уеб сайт, който посетите.","privacy.group.AdTracking.desc":"Рекламно следене","privacy.group.AdTracking.block.desc":"Блокиране на цялостното рекламно следене","privacy.group.AdTracking.block.tooltip":"Това ще блокира рекламното следене във всеки уеб сайт, който посетите.","privacy.group.AdTracking.unblock.desc":"Деблокиране на цялостното рекламно следене","privacy.group.AdTracking.unblock.tooltip":"Това ще позволи рекламното следене във всеки уеб сайт, който посетите.","privacy.group.WebAnalytics.desc":"Уеб анализатори","privacy.group.WebAnalytics.block.desc":"Блокиране на цялостното следене от уеб анализатори","privacy.group.WebAnalytics.block.tooltip":"Това ще блокира следенето от уеб анализатори във всеки уеб сайт, който посетите.","privacy.group.WebAnalytics.unblock.desc":"Деблокиране на цялостното следене от уеб анализатори","privacy.group.WebAnalytics.unblock.tooltip":"Това ще позволи другите видове следене във всеки уеб сайт, който посетите.","privacy.group.Others.desc":"Други","privacy.group.Others.block.desc":"Блокиране на всякакво друго следене","privacy.group.Others.block.tooltip":"Това ще блокира другите видове следене във всеки уеб сайт, който посетите.","privacy.group.Others.unblock.desc":"Деблокиране на всякакво друго следене","privacy.trackersBlockedAll":"<i>{0} система за проследяване</i> е блокирана в/във {1} | <i>{0} система за проследяване</i> е блокирана в/във {1}","privacy.trackersBlockedSome":"<i>{0} от {1} система за проследяване</i> е блокирана в/във {2} | <i>{0} от {1} системи за проследяване</i> са блокирани в/във {2}","privacy.trackersBlockedNone":"<i>{0} система</i> за следене в/във {1} | <i>{0} системи</i> за следене в/във {1}","privacy.trackersBlocked":"{0} от {1} блокирани","privacy.trackersFound":"{0} открити","privacy.trackersNone":"нищо","privacy.trackerBlock.desc":"Блокиране","privacy.trackerBlock.tooltip":"Това ще блокира [{0}] във всеки уеб сайт, който посетите.","privacy.trackerUnblock.desc":"Блокирано","privacy.trackerUnblock.tooltip":"Това ще деблокира [{0}] във всеки уеб сайт, който посетите.","privacy.trackerUnblockOnAutoBlock.tooltip":"За да деблокирате конкретна система за проследяване, изключете автоматичното блокиране.","privacy.automaticBlocking.desc":"Автоматично блокиране на всички системи за проследяване","privacy.automaticBlocking.tooltip":"Автоматично ще блокираме всички открити системи за проследяване във всеки уеб сайт, който посетите.","setting.title":"Настройки","setting.serp.name":"Маркирай резултатите ми от търсенето","setting.serp.desc":"Добавя цветни икони към резултатите ви от търсенето в Google, Yahoo! и т.н., за да разберете кои резултати са безопасни. (зелена = безопасно, сива = неизвестно, червена = опасно)","setting.serpPopup.name":"Показвай съвети за резултатите от търсенето","setting.serpPopup.desc":"Поставете курсора на мишката върху иконите за повече информация.","setting.secureBrowser.Avast.name":"Secure Browser","setting.secureBrowser.Avast.desc":"Превключете към режим за банкиране за чувствителни финансови сайтове (изисква инсталирана антивирусна програма и Secure Browser на Avast)","setting.secureBrowser.AVG.name":"Secure Browser","setting.secureBrowser.AVG.desc":"Превключете към режим за банкиране за чувствителни финансови сайтове (изисква инсталирана антивирусна програма и Secure Browser на AVG)","setting.dntBadge.name":"Показвай общия брой системи за проследяване в даден уеб сайт","setting.dntBadge.desc":"Добавя значка към браузъра ви, за да разберете незабавно колко системи за проследяване има във всеки уеб сайт.","setting.dntAutoBlock.name":"Блокирай автоматично всички системи за проследяване","setting.dntAutoBlock.desc":"Блокира всички открити системи за проследяване във всеки уеб сайт, който посетите.","setting.dntSocial.desc":"Блокирай всички системи за проследяване на социалните мрежи","setting.dntAdTracking.desc":"Блокирай всички системи за рекламно проследяване","setting.dntWebAnalytics.desc":"Блокирай всички системи за проследяване на уеб анализатори","setting.dntOthers.desc":"Блокирай всички други системи за проследяване","setting.productAnalysis.name":"Позволете анализ на характеристиките и изполването на продукта за разработване на нов продукт","setting.productAnalysis.tooltip":"Ние събираме и изпращаме до сървърите си данни за използването на разширението, вътрешен идентификатор на разширението, вид и версия на браузъра, операционна система, държава, език, статус на антивирусната програма Avast.","setting.urlConsent.name":"Съгласие за събиране на данни за URL","serp.safe.desc":"Уеб сайтът е безопасен","serp.bad.desc":"Сайтът може да не е благонадежден","serp.unknown.desc":"Сайтът няма оценка","serp.unsafe.desc":"Сайтът не е безопасен","topbar.openBankMode":"Отваряне в режим за банкиране","topbar.desc":"Възможно е финансовите ви данни да бъдат видими за други хора.","topbar.tooltip":"Режимът за банкиране, част от Secure Browser на Avast, инсталиран с антивирусната програма на Avast, безопасно изолира сесиите за пазаруване и банкиране, за да попречи на хакерите да откраднат номерата на кредитните ви карти, паролата и другите ви лични данни.","topbar.dontShowAgain":"Не показвай повече за този сайт","installPage.consent.title":"Позолявате ли ни да ви защитаваме чрез сканиране на уеб адреси?","installPage.consent.desc":"Ако се съгласите, ще преглеждаме адресите на уеб сайтовете, които посещавате, така ще можем да ви кажем дали тези сайтова са безопасни. (вижте нашата {URL_START}Политика за поверителност{URL_END})","installPage.agreed.title":"Благодарим!","installPage.agreed.desc":"Вече ви защитаваме от небезопасни уеб сайтове.","installPage.disagreed.title":"Без лоши чувства","installPage.disagreed.desc":"Ако не искате да сканираме уеб сайтовете ви, просто деинсталирайте {0} Online Security – но се пазете!","installPage.consent.disagree":"Не, благодаря","installPage.consent.agree":"Да, сканирайте уеб сайтовете","panel.consent.agree":"Сканиране на уеб сайтовете"},"bn":{"AVG.title":"অনলাইন সুরক্ষা","Avast.title":"Avast অনলাইন সুরক্ষা","global.beta":"বেটা","global.detailsShow":"বিস্তারিত","global.detailsHide":"বিস্তারিত লুকান","global.done":"সম্পন্ন","global.leaveSite":"সাইট ছেড়ে চলে যান","global.switcher.off":"অফ","global.switcher.on":"অন","global.close":"বন্ধ","global.back":"ফিরুন","background.icon.unknown":"{0} - অজানা সাইট","background.icon.safe":"{0}- এই ওয়েবসাইটটি নিরাপদ","background.icon.bad":"{0}- এই সাইটটি বিশ্বাসযোগ্য নয়","background.icon.unsafe":"{0}- এই ওয়েবসাইটটি নিরাপদ নয়","security.title":"নিরাপত্তা","security.safe.title":"এই ওয়েবসাইটটি নিরাপদ","security.safe.item1.desc":"কোনো ফিশিং করা হবে না","security.safe.item1.tooltip":"আমরা এই ওয়েবসাইটে পাসওয়ার্ড, ক্রেডিট কার্ড নম্বর ইত্যাদি সংবেদনশীল তথ্য চুরি করার মত কোনো প্রচেষ্টা সনাক্ত করি নি।","security.safe.item2.desc":"কোন ম্যালওয়্যার নেই","security.safe.item2.tooltip":"আমরা এই ওয়েবসাইটে কোন দুষিত কোড সনাক্ত করি নি।","security.safe.item3.desc":"বিশ্বস্ত","security.safe.item3.tooltip":"{0} ব্যবহারকারী অনলাইন সুরক্ষার {1}মধ্যে {0} ক্লিক করে এই ওয়েবসাইট বিশ্বস্ত হিসেবে মূল্যায়িত করেছে।","security.bad.title":"এটি বিশ্বাসযোগ্য নাও হতে পারে","security.bad.desc":"আমরা কোন ফিশিং হুমকি বা ম্যালওয়্যার এখানে খুঁজে পাইনি, কিন্তু আমাদের ব্যবহারকারীদের মধ্যে অনেকেই এই সাইটটিকে চিহ্নিত করেছে দিয়েছে।","security.unknown.title":"অজানা সাইট","security.unknown.desc":"এই ওয়েবসাইটটি মূল্যায়ন করার জন্য আমাদের কাছে এখন পর্যন্ত কোন যথেষ্ট তথ্য নেই।","security.unsafe.title":"এই ওয়েবসাইটটি অনিরাপদ","security.unsafe.phishing.desc":"এই ওয়েবসাইটটিকে ফিশিং সাইট হিসেবে চিহ্নিত করা হয়েছে।ফিশিং আপনার কাছ থেকে সংবেদনশীল তথ্য, যেমন পাসওয়ার্ড, ক্রেডিট কার্ড নম্বর ইত্যাদি চুরি করার একটি প্রচেষ্টা।","security.unsafe.malware.desc":"আমরা এই ওয়েবসাইটে দূষিত কোড পেয়েছি যা আপনার কম্পিউটারকে ক্ষতি করতে পারে বা আপনার ব্যক্তিগত তথ্য চুরি করতে পারে।","rating.question.desc":"আপনি কি  {0} বিশ্বাস করেন?","rating.negative":"এই ওয়েবসাইটে কি কোন অনুপযুক্ত সামগ্রী রয়েছে? (ঐচ্ছিক)","rating.thanks":"আপনার মূল্যায়নের জন্য ধন্যবাদ!","rating.trusted.desc":"আপনি <i>বিশ্বাস করেন</i> {0}","rating.untrusted.desc":"আপনি <i>বিশ্বাস করেন না</i> {0}","rating.revert.tooltip":"আপনার রেটিং মুছে ফেলতে ক্লিক করুন","rating.tooltip":"এই ওয়েবসাইটের জন্য আপনার বিশ্বাস বা অবিশ্বাস  আমাদের নিরাপত্তা রেটিং এর ক্ষেত্রে গণ্য করা হবে।","rating.category.pornography":"অশ্লীল সাহিত্যাদি","rating.category.violence":"অস্ত্র / সহিংসতা","rating.category.gambling":"জুয়া খেলা","rating.category.drugs":"অ্যালকোহল / ড্রাগস্","rating.category.illegal":"Warez / অবৈধ","rating.category.others":"অন্যান্য","privacy.title":"গোপনীয়তা","privacy.group.Social.desc":"সামাজিক নেটওয়ার্ক","privacy.group.Social.block.desc":"সবগুলি সোশ্যাল নেটওয়ার্ক ট্র্যাক করা ব্লক করুন","privacy.group.Social.block.tooltip":"আপনি যেই প্রত্যেকটি ওয়েবসাইট দেখেন সেখান সোশ্যাল নেটওয়ার্ক ট্র্যাক করা ব্লক করবে।","privacy.group.Social.unblock.desc":"সবগুলি সোশ্যাল নেটওয়ার্ক ট্র্যাক করা আনব্লক করুন","privacy.group.Social.unblock.tooltip":"আপনি যেই প্রত্যেকটি ওয়েবসাইট দেখেন সেখান সোশ্যাল নেটওয়ার্ক ট্র্যাক করার অনুমতি দেবে।","privacy.group.AdTracking.desc":"বিজ্ঞাপন অনুসরণ","privacy.group.AdTracking.block.desc":"সবগুলি বিজ্ঞাপন ট্র্যাক করা ব্লক করুন","privacy.group.AdTracking.block.tooltip":"আপনি যেই প্রত্যেকটি ওয়েবসাইট দেখেন সেখান বিজ্ঞাপন ট্র্যাক করা ব্লক করবে।","privacy.group.AdTracking.unblock.desc":"সবগুলি বিজ্ঞাপন ট্র্যাক করা আনব্লক করুন","privacy.group.AdTracking.unblock.tooltip":"আপনি যেই প্রত্যেকটি ওয়েবসাইট দেখেন সেখান বিজ্ঞাপন ট্র্যাক করার অনুমতি দেবে।","privacy.group.WebAnalytics.desc":"ওয়েব পরিসংখ্যান","privacy.group.WebAnalytics.block.desc":"সবগুলি ওয়েব পরিসংখ্যান ট্র্যাক করা ব্লক করুন","privacy.group.WebAnalytics.block.tooltip":"আপনি যেই প্রত্যেকটি ওয়েবসাইট দেখেন সেখান ওয়েব পরিসংখ্যান ট্র্যাক করা ব্লক করবে।","privacy.group.WebAnalytics.unblock.desc":"সবগুলি ওয়েব পরিসংখ্যান ট্র্যাক করা আনব্লক করুন","privacy.group.WebAnalytics.unblock.tooltip":"আপনি যেই প্রত্যেকটি ওয়েবসাইট দেখেন সেখান অন্যান্য ট্র্যাক করার অনুমতি দেবে।","privacy.group.Others.desc":"অন্যান্য","privacy.group.Others.block.desc":"অন্যান্য সবগুলি ট্র্যাক করা বন্ধ করুন","privacy.group.Others.block.tooltip":"আপনি যেই প্রত্যেকটি ওয়েবসাইট দেখেন সেখান অন্যান্য ট্র্যাক করা ব্লক করবে।","privacy.group.Others.unblock.desc":"অন্যান্য সবগুলি ট্র্যাক করা আনব্লক করুন","privacy.trackersBlockedAll":"<i>সব {0} ট্র্যাকার</i>  {1}-তে ব্লক করা হয়েছে | <i>সব {0} ট্র্যাকার</i>  {1}-তে ব্লক করা হয়েছে","privacy.trackersBlockedSome":"<i>এর {0} ট্র্যাকার</i>  {1}-তে ব্লক করা হয়েছে | <i>এর {0} ট্র্যাকারগুলি</i>  {1}-তে ব্লক করা হয়েছে","privacy.trackersBlockedNone":"{1}-এ সিস্টেম <i>{0}ট্র্যাক করা হচ্ছে</i> | {1}-এ সিস্টেমগুলিতে <i>{0}ট্র্যাক করা হচ্ছে</i>","privacy.trackersBlocked":"{1}এর {0}টি ব্লক করা হয়েছে","privacy.trackersFound":"{0} খুঁজে পাওয়া গেছে","privacy.trackersNone":"কিছুই না","privacy.trackerBlock.desc":"প্রতিরোধ করুন","privacy.trackerBlock.tooltip":"আপনি যেই প্রত্যেকটি ওয়েবসাইট দেখেন সেখানে [{0}] প্রতিরোধ করবে।","privacy.trackerUnblock.desc":"ব্লক করা হয়েছে","privacy.trackerUnblock.tooltip":"আপনি যেই প্রত্যেকটি ওয়েবসাইট দেখেন সেখানে [{0}] অপ্রতিরোধ করবে।","privacy.trackerUnblockOnAutoBlock.tooltip":"নির্দিষ্ট একটি ট্র্যাকার আনব্লক করার জন্য স্বয়ংক্রিয়ভাবে ব্লক করা বন্ধ করুন।","privacy.automaticBlocking.desc":"স্বয়ংক্রিয়ভাবে সবগুলি ট্রাকার বন্ধ করুন","privacy.automaticBlocking.tooltip":"আপনি যেই প্রত্যেকটি ওয়েবসাইট দেখেন সেখানে খুঁজে পাওয়া ট্র্যাকারগুলি স্বয়ংক্রিয়ভাবে ব্লক করবো। ","setting.title":"সেটিংস","setting.serp.name":"আমার অনুসন্ধানের ফলাফলগুলি চিহ্নিত করুন","setting.serp.desc":"কোন ফলাফলগুলি নিরাপদ তা দেখার জন্য ক্লিক করতে Google, Yahoo!, ইত্যাদিতে আপনার অনুসন্ধানের ফলাফলগুলিতে রঙিন আইকন যোগ করুন।(সবুজ = নিরাপদ, ধুসর = অজানা, লাল = অনিরাপদ)","setting.serpPopup.name":"অনুসন্ধানের ফলাফলের জন্য টুলটিপস প্রদর্শন করুন","setting.serpPopup.desc":"আরও তথ্য দেখার জন্য আমাদের আইকনের উপর মাউস চালনা করুন৷ ","setting.secureBrowser.Avast.name":"Secure Browser","setting.secureBrowser.Avast.desc":"সংবেদনশীল আর্থিক সাইটগুলির জন্য, ব্যাঙ্ক মোডে পরিবর্তিত হন (Avast Antivirus এবং Avast সুরক্ষিত ব্রাউজার ইনস্টল করার প্রয়োজন)","setting.secureBrowser.AVG.name":"Secure Browser","setting.secureBrowser.AVG.desc":"সংবেদনশীল আর্থিক সাইটগুলির জন্য, ব্যাঙ্ক মোডে পরিবর্তিত হন (Avast Antivirus এবং Avast সুরক্ষিত ব্রাউজার ইনস্টল করার প্রয়োজন)","setting.dntBadge.name":"মোট সবগুলি ট্র্যাকার সাইটে প্রদর্শন করুন","setting.dntBadge.desc":"অবিলম্বে যেকোনও ওয়েবসাইটে কতগুলি ট্র্যাকার রয়েছে তা দেখতে আপনার ব্রাউজারে একটি ব্যাজ যুক্ত করুন।","setting.dntAutoBlock.name":"স্বয়ংক্রিয়ভাবে সবগুলি ট্রাকার ব্লক করুন","setting.dntAutoBlock.desc":"আপনার দেখা প্রত্যেকটি ওয়েবসাইট থেকে খুঁজে পাওয়া ট্র্যাকারগুলি ব্লক করুন","setting.dntSocial.desc":"সবগুলি সোশ্যাল নেটওয়ার্ক ট্র্যাকার ব্লক করুন","setting.dntAdTracking.desc":"সবগুলি বিজ্ঞাপন ট্র্যাকার ব্লক করুন","setting.dntWebAnalytics.desc":"সবগুলি ওয়েব পরিসংখ্যান ট্র্যাকার ব্লক করুন","setting.dntOthers.desc":"অন্যান্য সবগুলি ট্র্যাকার বন্ধ করুন","setting.productAnalysis.name":"নতুন পণ্যের উন্নতিতে পণ্যের কার্য সম্পাদন বিশ্লেষণ ও ব্যবহারে অনুমতি দিন","setting.productAnalysis.tooltip":"আমরা আমাদের সার্ভারে এক্সটেনশনের ব্যবহৃত ডেটা, ইন্টারনাল এক্সটেনশন নির্ধারণকারী, ব্রাউজারের ধরণ এবং সংস্করণ, অপারেটিং সিস্টেম, দেশ, ভাষা, Avast অ্যান্টিভাইরাস অ্যাপের স্থিতি সংগ্রহ করি এবং প্রেরণ করি।","setting.urlConsent.name":"URL হারভেস্টে সম্মতি","serp.safe.desc":"এই ওয়েবসাইটটি নিরাপদ","serp.bad.desc":"- এই সাইটটি বোধহয় বিশ্বাসযোগ্য নয়","serp.unknown.desc":"এই সাইটের কোন রেটিং নেই","serp.unsafe.desc":"এই সাইটটি অনিরাপদ","topbar.openBankMode":"ব্যাঙ্ক মোড-এ খুলুন","topbar.desc":"আপনার আর্থিক ডেটা অন্যদের কাছে দৃশ্যমান হতে পারে।","topbar.tooltip":"ব্যাঙ্ক মোড , Avast নিরাপদ ব্রাউজারের ইনস্টল করা অংশ আপনার Avast এন্টিভাইরাস, নিরাপদে কেনাকাটা এবং ব্যাংকিং অধিবেশনের সময় ক্রেডিট কার্ড নম্বর, পাসওয়ার্ড, এবং অন্যান্য ব্যক্তিগত তথ্য  আলাদা করা সহ আপনার হ্যাকারদের চুরি করা থেকে বিরত রাখে।","topbar.dontShowAgain":"এই সাইটটিতে পুনরায় দেখাবেন না","installPage.consent.title":"ওয়েব ঠিকানা স্ক্যান করে আপনাকে সুরক্ষিত রাখতে আমাদের অনুমতি দেবেন?","installPage.consent.desc":"আপনি যদি সম্মত হন তবে আমরা যে ওয়েবসাইটগুলো দেখেছি সেগুলির ঠিকানা আমরা দেখব যাতে সেই সাইটগুলো নিরাপদ থাকে কিনা তা আমরা আপনাকে বলতে পারি. (আমাদের {URL_START}গোপনীয়তা নীতি দেখুন{URL_END})","installPage.agreed.title":"ধন্যবাদ!","installPage.agreed.desc":"আমরা এখন অনিরাপদ ওয়েবসাইট থেকে আপনাকে সুরক্ষিত রাখছি।","installPage.disagreed.title":"কোনও কঠিন অনুভূতি নেই","installPage.disagreed.desc":"আপনি যদি না চান আমরা আপনার ওয়েব ঠিকানা স্ক্যান করি তাহলে, তাহলে শুধু {0} অনলাইন নিরাপত্তা আনইনস্টল করুন - এবং সেখানে নিরাপদ থাকুন!","installPage.consent.disagree":"না, ধন্যবাদ","installPage.consent.agree":"হ্যাঁ, ওয়েব ঠিকানা স্ক্যান করুন","panel.consent.agree":"ওয়েব ঠিকানা স্ক্যান করুন"},"ca":{"AVG.title":"Online Security","Avast.title":"Avast Online Security","global.beta":"Beta","global.detailsShow":"Detalls","global.detailsHide":"Amaga els detalls","global.done":"Fet","global.leaveSite":"Surt del lloc","global.switcher.off":"OFF","global.switcher.on":"ON","global.close":"Tanca","global.back":"Enrere","background.icon.unknown":"{0}: Lloc desconegut.","background.icon.safe":"{0}: Aquest lloc web és segur.","background.icon.bad":"{0}: Aquest lloc pot ser no fiable.","background.icon.unsafe":"{0}: Aquest lloc web no és segur.","security.title":"Seguretat","security.safe.title":"Aquest lloc web és segur.","security.safe.item1.desc":"Sense pesca electrònica","security.safe.item1.tooltip":"No hem detectat cap intent de robar informació confidencial en aquesta pàgina web, com ara contrasenyes, números de targeta de crèdit, etc.","security.safe.item2.desc":"Sense programari maliciós","security.safe.item2.tooltip":"No hem detectat cap codi maliciós en aquest lloc web.","security.safe.item3.desc":"De confiança","security.safe.item3.tooltip":"Els usuaris de l\'{0} han valorat aquest lloc web com a fiable fent clic a {1}, a l\'{0} Online Security.","security.bad.title":"Aquest lloc pot ser no fiable.","security.bad.desc":"Aquí no hem trobat cap amenaça de pesca electrònica o programari maliciós, però molts dels nostres usuaris han qualificat aquest lloc amb un polze cap avall.","security.unknown.title":"Lloc desconegut","security.unknown.desc":"Encara no tenim prou informació per valorar aquest lloc web.","security.unsafe.title":"Aquest lloc web no és segur.","security.unsafe.phishing.desc":"Aquest lloc web s\'ha marcat com a lloc de pesca electrònica. La pesca electrònica és un intent de robar-vos informació personal, com ara contrasenyes, números de targeta de crèdit, etc.","security.unsafe.malware.desc":"Hem trobat codi maliciós en aquest lloc web que podria malmetre l\'equip o robar les vostres dades privades.","rating.question.desc":"Confieu en {0}?","rating.negative":"Heu detectat contingut inadequat en aquest lloc web? (opcional)","rating.thanks":"Gràcies per la valoració!","rating.trusted.desc":"<i>Confieu</i> en {0}.","rating.untrusted.desc":"<i>No confieu</i> en {0}.","rating.revert.tooltip":"Feu clic per eliminar la vostra valoració.","rating.tooltip":"La vostra confiança o desconfiança es tindrà en compte en la nostra valoració de seguretat per a aquest lloc web.","rating.category.pornography":"Pornografia","rating.category.violence":"Armes o violència","rating.category.gambling":"Jocs d\'atzar","rating.category.drugs":"Alcohol o drogues","rating.category.illegal":"Pirateria o actes il·legals","rating.category.others":"Altres","privacy.title":"Privacitat","privacy.group.Social.desc":"Xarxes socials","privacy.group.Social.block.desc":"Bloqueja tot el seguiment de xarxes socials","privacy.group.Social.block.tooltip":"Això bloquejarà el seguiment de xarxes socials a tots els llocs web que visiteu.","privacy.group.Social.unblock.desc":"Desbloqueja tot el seguiment de xarxes socials","privacy.group.Social.unblock.tooltip":"Això desbloquejarà el seguiment de xarxes socials a tots els llocs web que visiteu.","privacy.group.AdTracking.desc":"Publicitat intrusiva","privacy.group.AdTracking.block.desc":"Bloqueja el seguiment de publicitat intrusiva","privacy.group.AdTracking.block.tooltip":"Això bloquejarà el seguiment de publicitat intrusiva a tots els llocs web que visiteu.","privacy.group.AdTracking.unblock.desc":"Desbloqueja el seguiment de publicitat intrusiva","privacy.group.AdTracking.unblock.tooltip":"Això permetrà el seguiment de publicitat intrusiva a tots els llocs web que visiteu.","privacy.group.WebAnalytics.desc":"Anàlisi web","privacy.group.WebAnalytics.block.desc":"Bloqueja tot el seguiment d\'anàlisi web","privacy.group.WebAnalytics.block.tooltip":"Això bloquejarà el seguiment d\'anàlisi web a tots els llocs web que visiteu.","privacy.group.WebAnalytics.unblock.desc":"Desbloqueja tot el seguiment d\'anàlisi web","privacy.group.WebAnalytics.unblock.tooltip":"Això permetrà els altres seguiments a tots els llocs web que visiteu.","privacy.group.Others.desc":"Altres","privacy.group.Others.block.desc":"Bloqueja tots els altres seguiments","privacy.group.Others.block.tooltip":"Això bloquejarà els altres seguiments a tots els llocs web que visiteu.","privacy.group.Others.unblock.desc":"Desbloqueja tots els altres seguiments","privacy.trackersBlockedAll":"<i>{0} rastrejador</i> bloquejat a {1} | <i>{0} rastrejadors</i> bloquejats a {1}","privacy.trackersBlockedSome":"<i>{0} de {1} rastrejador</i> bloquejat a {2} | <i>{0} de {1} rastrejadors</i> bloquejats a {2}","privacy.trackersBlockedNone":"<i>{0} sistema de rastreig</i> a {1} | <i>{0} sistemes de rastreig</i> a {1}","privacy.trackersBlocked":"{0} de {1} bloquejats","privacy.trackersFound":"{0} trobats","privacy.trackersNone":"res","privacy.trackerBlock.desc":"Bloqueja","privacy.trackerBlock.tooltip":"Això bloquejarà [{0}] a tots els llocs web que visiteu.","privacy.trackerUnblock.desc":"Bloquejat","privacy.trackerUnblock.tooltip":"Això desbloquejarà [{0}] a tots els llocs web que visiteu.","privacy.trackerUnblockOnAutoBlock.tooltip":"Per desbloquejar un rastrejador específic, desactiveu el bloqueig automàtic.","privacy.automaticBlocking.desc":"Bloqueja automàticament tots els rastrejadors","privacy.automaticBlocking.tooltip":"Bloquejarem automàticament tots els rastrejadors detectats a tots els llocs web que visiteu.","setting.title":"Configuració","setting.serp.name":"Marca els meus resultats de cerca","setting.serp.desc":"Afegiu icones de colors als vostres resultats de cerca a Google, Yahoo!, etc. per veure en quins resultats es pot fer clic amb seguretat. El verd indica que és segur; el gris, que es desconeix; i el vermell, que no és segur.","setting.serpPopup.name":"Mostra informació en pantalla sobre els resultats de cerca","setting.serpPopup.desc":"Passeu el ratolí per sobre de les icones per veure més informació.","setting.secureBrowser.Avast.name":"Secure Browser","setting.secureBrowser.Avast.desc":"Canvieu al Mode de banca en visitar pàgines web d\'entitats bancàries (cal tenir l\'Avast Antivirus i l\'Avast Secure Browser instal·lats).","setting.secureBrowser.AVG.name":"Secure Browser","setting.secureBrowser.AVG.desc":"Canvieu al Mode de banca en visitar pàgines web d\'entitats bancàries (cal tenir l\'AVG AntiVirus i l\'AVG Secure Browser instal·lats)","setting.dntBadge.name":"Mostra el total de rastrejadors en un lloc","setting.dntBadge.desc":"Afegiu un distintiu al navegador per veure immediatament els rastrejadors que hi ha en qualsevol lloc web.","setting.dntAutoBlock.name":"Bloqueja automàticament tots els rastrejadors","setting.dntAutoBlock.desc":"Bloquegeu els rastrejadors detectats a tots els llocs web que visiteu.","setting.dntSocial.desc":"Bloqueja tots els rastrejadors de xarxes socials","setting.dntAdTracking.desc":"Bloqueja tots els rastrejadors de publicitat intrusiva","setting.dntWebAnalytics.desc":"Bloqueja tots els rastrejadors d\'anàlisi web","setting.dntOthers.desc":"Bloqueja tots els altres rastrejadors","setting.productAnalysis.name":"Permet analitzar el rendiment i l\'ús del producte per desenvolupar-ne de nous","setting.productAnalysis.tooltip":"Recopilem i enviem als nostres servidors dades d\'ús de l\'extensió, l\'identificador de l\'extensió interna, el tipus i la versió del navegador, el sistema operatiu, el país, l\'idioma i l\'estat de l\'aplicació de l\'Avast antivirus.","setting.urlConsent.name":"Consentiment per recollir URL","serp.safe.desc":"Aquest lloc web és segur","serp.bad.desc":"Aquest lloc pot ser no fiable.","serp.unknown.desc":"Aquest lloc no té cap valoració.","serp.unsafe.desc":"Aquest lloc no és segur.","topbar.openBankMode":"Obre en Mode de banca","topbar.desc":"Altres podrien veure les vostres dades bancàries.","topbar.tooltip":"El Mode de banca, una part de l\'Avast Secure Browser instal·lada amb l\'antivirus de l\'Avast, aïlla de manera segura les sessions bancàries i de compra per evitar que els hackers us robin els números de les targetes de crèdit, la contrasenya i altres dades privades.","topbar.dontShowAgain":"No ho tornis a mostrar en aquest lloc","installPage.consent.title":"Ens doneu permís per analitzar les adreces web per protegir-vos?","installPage.consent.desc":"Si hi esteu d\'acord, examinarem les adreces dels llocs web que visiteu i podrem indicar-vos si aquests llocs són segurs (consulteu la nostra {URL_START}Política de privacitat{URL_END}).","installPage.agreed.title":"Gràcies.","installPage.agreed.desc":"Ara us protegim dels llocs web poc segurs.","installPage.disagreed.title":"Sense rancúnia","installPage.disagreed.desc":"Si no voleu que analitzem les vostres adreces web, només heu de desinstal·lar {0} Online Security. Us desitgem una navegació segura.","installPage.consent.disagree":"No, gràcies.","installPage.consent.agree":"Sí, analitzeu les adreces web","panel.consent.agree":"Analitza les adreces web"},"cs":{"AVG.title":"Online Security","Avast.title":"Avast Online Security","global.beta":"Beta","global.detailsShow":"Podrobnosti","global.detailsHide":"Skrýt podrobnosti","global.done":"Hotovo","global.leaveSite":"Opustit web","global.switcher.off":"VYP","global.switcher.on":"ZAP","global.close":"Zavřít","global.back":"Zpět","background.icon.unknown":"{0} – neznámá stránka","background.icon.safe":"{0} – tato stránka je bezpečná","background.icon.bad":"{0} – tato stránka může být nedůvěryhodná","background.icon.unsafe":"{0} – tato stránka je nebezpečná","security.title":"Zabezpečení","security.safe.title":"Tato stránka je bezpečná","security.safe.item1.desc":"Žádný phishing","security.safe.item1.tooltip":"Na této stránce jsme nenašli žádné pokusy ukrást citlivé údaje, jako jsou hesla, čísla platebních karet atd.","security.safe.item2.desc":"Žádný malware","security.safe.item2.tooltip":"Na této stránce jsme nenašli žádný škodlivý kód.","security.safe.item3.desc":"Důvěryhodná","security.safe.item3.tooltip":"Někteří uživatelé ({0}) tuto stránku označili jako důvěryhodnou tím, že v online zabezpečení {0} klikli na tlačítko {1}.","security.bad.title":"Tato stránka může být nedůvěryhodná","security.bad.desc":"Na této stránce jsme nenašli žádné phishingové hrozby, ale hodně našich uživatelů jí udělilo palec dolů.","security.unknown.title":"Neznámá stránka","security.unknown.desc":"K ohodnocení této stránky nemáme dostatek informací.","security.unsafe.title":"Tato stránka je nebezpečná","security.unsafe.phishing.desc":"Tato stránka byla nahlášena jako phishingová. Phishing jsou pokusy ukrást citlivé údaje, jako jsou hesla, čísla platebních karet atd.","security.unsafe.malware.desc":"Na této stránce jsme našli škodlivý kód, který by vám mohl poškodit počítač nebo ukrást soukromá data.","rating.question.desc":"Důvěřujete {0}?","rating.negative":"Je na této stránce nějaký nevhodný obsah? (nepovinné)","rating.thanks":"Děkujeme za hodnocení!","rating.trusted.desc":"Stránce {0} <i>důvěřujete</i> ","rating.untrusted.desc":"Stránce {0} <i>nedůvěřujete</i> ","rating.revert.tooltip":"Kliknutím své hodnocení zrušíte","rating.tooltip":"Vaše důvěra či nedůvěra se promítne do našeho bezpečnostního hodnocení stránky.","rating.category.pornography":"Pornografie","rating.category.violence":"Zbraně/násilí","rating.category.gambling":"Hazardní hry","rating.category.drugs":"Alkohol/drogy","rating.category.illegal":"Warez / nelegální obsah","rating.category.others":"Ostatní","privacy.title":"Soukromí","privacy.group.Social.desc":"Sociální sítě","privacy.group.Social.block.desc":"Blokovat veškerá sledování sociálními sítěmi","privacy.group.Social.block.tooltip":"Tímto zablokujete sledování sociálními sítěmi na každé navštívené stránce.","privacy.group.Social.unblock.desc":"Odblokovat veškerá sledování sociálními sítěmi","privacy.group.Social.unblock.tooltip":"Tímto povolíte sledování sociálními sítěmi na každé navštívené stránce.","privacy.group.AdTracking.desc":"Sledování reklamami","privacy.group.AdTracking.block.desc":"Blokovat veškerá sledování reklamami","privacy.group.AdTracking.block.tooltip":"Tímto zablokujete sledování reklamami na každé navštívené stránce.","privacy.group.AdTracking.unblock.desc":"Odblokovat veškerá sledování reklamami","privacy.group.AdTracking.unblock.tooltip":"Tímto povolíte sledování reklamami na každé navštívené stránce.","privacy.group.WebAnalytics.desc":"Webová analytika","privacy.group.WebAnalytics.block.desc":"Blokovat veškerá sledování webovými analytickými nástroji","privacy.group.WebAnalytics.block.tooltip":"Tímto zablokujete sledování webovými analytickými nástroji na každé navštívené stránce.","privacy.group.WebAnalytics.unblock.desc":"Odblokovat veškerá sledování webovými analytickými nástroji","privacy.group.WebAnalytics.unblock.tooltip":"Tímto povolíte ostatní sledování na každé navštívené stránce.","privacy.group.Others.desc":"Ostatní","privacy.group.Others.block.desc":"Blokovat veškerá ostatní sledování","privacy.group.Others.block.tooltip":"Tímto zablokujete ostatní sledování na každé navštívené stránce.","privacy.group.Others.unblock.desc":"Odblokovat veškerá ostatní sledování","privacy.trackersBlockedAll":"Na {1} byl zablokován <i>{0} sledovací nástroj</i> | Na {1} byly zablokovány <i>{0} sledovací nástroje</i> | Na {1} bylo zablokováno <i>všech {0} sledovacích nástrojů</i> | Na {1} bylo zablokováno <i>všech {0} sledovacích nástrojů</i>","privacy.trackersBlockedSome":"Na stránce {2} jsme zablokovali <i>{0} sledovací nástroj z {1}</i> | Na stránce {2} jsme zablokovali <i>{0} sledovací nástroje z {1}</i> | Na stránce {2} jsme zablokovali <i>{0} sledovacích nástrojů z {1}</i> | Na stránce {2} jsme zablokovali <i>{0} sledovacích nástrojů z {1}</i>","privacy.trackersBlockedNone":"<i>{0} sledovací systém</i> na stránce {1} | <i>{0} sledovací systémy</i> na stránce {1} | <i>{0} sledovacích systémů</i> na stránce {1} | <i>{0} sledovacích systémů</i> na stránce {1}","privacy.trackersBlocked":"Zablokováno: {0} z {1}","privacy.trackersFound":"Nalezeno: {0}","privacy.trackersNone":"nic","privacy.trackerBlock.desc":"Zablokovat","privacy.trackerBlock.tooltip":"Tímto krokem zablokujete [{0}] na každé navštívené stránce.","privacy.trackerUnblock.desc":"Zablokováno","privacy.trackerUnblock.tooltip":"Tímto krokem odblokujete [{0}] na každé navštívené stránce.","privacy.trackerUnblockOnAutoBlock.tooltip":"Chcete-li odblokovat konkrétní sledovací nástroj, vypněte automatické blokování.","privacy.automaticBlocking.desc":"Automaticky blokovat veškerá sledování","privacy.automaticBlocking.tooltip":"Na každé stránce, kterou navštívíte, automaticky zablokujeme všechny nalezené sledovací nástroje.","setting.title":"Nastavení","setting.serp.name":"Označovat výsledky vyhledávání","setting.serp.desc":"Přidejte si do výsledků vyhledávání přes Google, Yahoo! atd. barevné ikony, podle kterých poznáte, které stránky jsou bezpečné (zelená = bezpečná, šedá = neznámá, červená = nebezpečná)","setting.serpPopup.name":"Ukazovat popisky k výsledkům hledání","setting.serpPopup.desc":"Najetím myší nad ikony si zobrazíte další informace.","setting.secureBrowser.Avast.name":"Secure Browser","setting.secureBrowser.Avast.desc":"Na stránkách s citlivými finančními údaji přepínat do Platebního režimu (vyžaduje nainstalovaný Avast Antivirus a Avast Secure Browser)","setting.secureBrowser.AVG.name":"Secure Browser","setting.secureBrowser.AVG.desc":"Na stránkách s citlivými finančními údaji přepínat do Platebního režimu (vyžaduje nainstalovaný AVG AntiVirus a AVG Secure Browser)","setting.dntBadge.name":"Zobrazit celkový počet sledovacích nástrojů na stránce","setting.dntBadge.desc":"Přidejte si do prohlížeče ukazatel počtu sledovacích nástrojů na aktuálně otevřené stránce.","setting.dntAutoBlock.name":"Automaticky blokovat veškerá sledování","setting.dntAutoBlock.desc":"Blokujte veškeré sledovací nástroje na každé navštívené stránce.","setting.dntSocial.desc":"Blokovat veškerá sledování sociálními sítěmi","setting.dntAdTracking.desc":"Blokovat veškerá sledování reklamami","setting.dntWebAnalytics.desc":"Blokovat veškerá sledování webovými analytickými nástroji","setting.dntOthers.desc":"Blokovat veškerá ostatní sledování","setting.productAnalysis.name":"Povolit analýzu fungování a používání produktu pro účely jeho dalšího vývoje","setting.productAnalysis.tooltip":"Sbíráme a posíláme na naše servery data o používání rozšíření, interní identifikátor rozšíření, typ a verzi prohlížeče, operační systém, zemi, jazyk a stav antivirové aplikace Avast.","setting.urlConsent.name":"Souhlas se sbíráním webových adres","serp.safe.desc":"Tato stránka je bezpečná","serp.bad.desc":"Tato stránka může být nedůvěryhodná","serp.unknown.desc":"Tato stránka nemá žádné hodnocení","serp.unsafe.desc":"Tato stránka je nebezpečná","topbar.openBankMode":"Otevřít v Platebním režimu","topbar.desc":"Ostatní uživatelé mohou vidět vaše finanční údaje.","topbar.tooltip":"Platební režim je součást prohlížeče Avast Secure Browser nainstalovaného s vaším antivirem Avast, která bezpečně izoluje vaše nakupování a používání internetového bankovnictví od ostatních aktivit, aby vám hackeři nemohli ukrást čísla platebních karet, hesla či jiné soukromé údaje.","topbar.dontShowAgain":"Na této stránce znovu nezobrazovat","installPage.consent.title":"Chcete, abychom vás chránili testováním webových adres?","installPage.consent.desc":"Pokud souhlasíte, budeme kontrolovat webové stránky, které navštívíte, abychom vás mohli informovat, zda jsou bezpečné (víc se dozvíte v našich {URL_START}zásadách ochrany soukromí{URL_END})","installPage.agreed.title":"Děkujeme!","installPage.agreed.desc":"Odteď vás chráníme před nebezpečnými stránkami.","installPage.disagreed.title":"Nemáme vám to za zlé","installPage.disagreed.desc":"Pokud nechcete, abychom testovali navštívené webové adresy, stačí si odinstalovat online zabezpečení {0}.","installPage.consent.disagree":"Ne, děkuji","installPage.consent.agree":"Ano, testovat webové adresy","panel.consent.agree":"Testování webových adres"},"da":{"AVG.title":"Online Security","Avast.title":"Avast Online Security","global.beta":"Beta","global.detailsShow":"Detaljer","global.detailsHide":"Skjul detaljer","global.done":"OK","global.leaveSite":"Forlad websted","global.switcher.off":"FRA","global.switcher.on":"TIL","global.close":"Luk","global.back":"Tilbage","background.icon.unknown":"{0} – ukendt websted","background.icon.safe":"{0} – dette websted er sikkert","background.icon.bad":"{0} – dette websted kan være upålideligt","background.icon.unsafe":"{0} – dette websted er ikke sikkert","security.title":"Sikkerhed","security.safe.title":"Dette websted er sikkert","security.safe.item1.desc":"Ingen phishing","security.safe.item1.tooltip":"Vi har ikke registreret nogen forsøg på at stjæle følsomme oplysninger som adgangskoder, kreditkortnumre osv. på dette websted.","security.safe.item2.desc":"Ingen malware","security.safe.item2.tooltip":"Vi har ikke fundet nogen skadelig kode på dette websted.","security.safe.item3.desc":"Pålidelig","security.safe.item3.tooltip":"{0} brugere har bedømt dette websted som pålideligt ved at klikke på {1} i {0} Online Security.","security.bad.title":"Dette kan være upålideligt","security.bad.desc":"Vi fandt ingen phishing-trusler eller malware her, men mange af vores brugere har givet webstedet en nedadvendt tommelfinger.","security.unknown.title":"Ukendt websted","security.unknown.desc":"Vi har ikke nok oplysninger endnu til at bedømme dette websted.","security.unsafe.title":"Dette websted er ikke sikkert","security.unsafe.phishing.desc":"Dette websted er blevet markeret som et phishing-websted. Phishing er et forsøg på at stjæle følsomme oplysninger fra dig såsom adgangskoder, kreditkortnumre osv.","security.unsafe.malware.desc":"Vi har fundet skadelig kode på dette websted, som kan skade din computer eller stjæle dine private data.","rating.question.desc":"Har du tillid til {0}?","rating.negative":"Er der noget upassende indhold på dette websted? (valgfrit)","rating.thanks":"Tak for din bedømmelse!","rating.trusted.desc":"Du har <i>tillid</i> til {0}","rating.untrusted.desc":"Du har <i>ikke tillid</i> til {0}","rating.revert.tooltip":"Klik for at fjerne din bedømmelse","rating.tooltip":"Din tillid eller mistillid vil indgå i vores sikkerhedsbedømmelse for dette websted.","rating.category.pornography":"Pornografi","rating.category.violence":"Våben / Vold","rating.category.gambling":"Hasardspil","rating.category.drugs":"Alkohol / Narkotika","rating.category.illegal":"Warez / Ulovlig","rating.category.others":"Andet","privacy.title":"Fortrolighed","privacy.group.Social.desc":"Sociale medier","privacy.group.Social.block.desc":"Bloker al sporing på sociale medier","privacy.group.Social.block.tooltip":"Dette blokerer social sporing på alle websteder, du besøger.","privacy.group.Social.unblock.desc":"Fjern blokering af al social sporing","privacy.group.Social.unblock.tooltip":"Dette tillader social sporing på alle websteder, du besøger.","privacy.group.AdTracking.desc":"Reklamesporing","privacy.group.AdTracking.block.desc":"Bloker al reklamesporing","privacy.group.AdTracking.block.tooltip":"Dette blokerer reklamesporing på alle websteder, du besøger.","privacy.group.AdTracking.unblock.desc":"Fjern blokering af al reklamesporing","privacy.group.AdTracking.unblock.tooltip":"Dette tillader reklamesporing på alle websteder, du besøger.","privacy.group.WebAnalytics.desc":"Webanalyse","privacy.group.WebAnalytics.block.desc":"Bloker al webanalysesporing","privacy.group.WebAnalytics.block.tooltip":"Dette blokerer webanalysesporing på alle websteder, du besøger.","privacy.group.WebAnalytics.unblock.desc":"Fjern blokering af al webanalysesporing","privacy.group.WebAnalytics.unblock.tooltip":"Dette tillader anden sporing på alle websteder, du besøger.","privacy.group.Others.desc":"Andre","privacy.group.Others.block.desc":"Bloker al anden sporing","privacy.group.Others.block.tooltip":"Dette blokerer anden sporing på alle websteder, du besøger.","privacy.group.Others.unblock.desc":"Fjern blokering af al anden sporing","privacy.trackersBlockedAll":"<i>Alle {0} tracker</i> blokeret på {1} | <i>Alle {0} trackere</i> blokeret på {1}","privacy.trackersBlockedSome":"<i>{0} af {1} tracker</i> blokeret på {2} | <i>{0} af {1} trackere</i> blokeret på {2}","privacy.trackersBlockedNone":"<i>{0} tracking-system</i> på {1} | <i>{0} tracking-systemer</i> på {1}","privacy.trackersBlocked":"{0} af {1} blokeret","privacy.trackersFound":"{0} fundet","privacy.trackersNone":"ingenting","privacy.trackerBlock.desc":"Bloker","privacy.trackerBlock.tooltip":"Dette blokerer [{0}] på alle websteder, du besøger.","privacy.trackerUnblock.desc":"Blokeret","privacy.trackerUnblock.tooltip":"Dette fjerner blokering af [{0}] på hvert websted, du besøger.","privacy.trackerUnblockOnAutoBlock.tooltip":"Deaktiver automatisk blokering for at fjerne blokering af en specifik tracker.","privacy.automaticBlocking.desc":"Bloker automatisk alle trackere","privacy.automaticBlocking.tooltip":"Vi vil automatisk blokere alle fundne trackere på ethvert websted, du besøger.","setting.title":"Indstillinger","setting.serp.name":"Markér mine søgeresultater","setting.serp.desc":"Føj farvede ikoner til dine søgeresultater på Google, Yahoo! osv. for at se, hvilke resultater der er sikre at klikke på. (grøn = sikker, grå = ukendt, rød = ikke sikker)","setting.serpPopup.name":"Vis værktøjstips for søgeresultater","setting.serpPopup.desc":"Hold markøren over vores ikoner for at se flere oplysninger.","setting.secureBrowser.Avast.name":"Secure Browser","setting.secureBrowser.Avast.desc":"Skift til Banktilstand for følsomme finansielle websteder (kræver, at Avast Antivirus og Avast Secure Browser er installeret)","setting.secureBrowser.AVG.name":"Secure Browser","setting.secureBrowser.AVG.desc":"Skift til Banktilstand for følsomme finansielle websteder (kræver, at AVG AntiVirus og AVG Secure Browser er installeret)","setting.dntBadge.name":"Vis alle trackere på et websted","setting.dntBadge.desc":"Føj et ikon til din browser for at se øjeblikkeligt, hvor mange trackere der er på hvert websted.","setting.dntAutoBlock.name":"Bloker automatisk alle trackere","setting.dntAutoBlock.desc":"Bloker alle fundne trackere på alle websteder, du besøger.","setting.dntSocial.desc":"Bloker alle trackere på sociale medier","setting.dntAdTracking.desc":"Bloker alle reklametrackere","setting.dntWebAnalytics.desc":"Bloker alle webanalysetrackere","setting.dntOthers.desc":"Bloker alle andre trackere","setting.productAnalysis.name":"Tillad analyse af produktydeevne og -brug til udvikling af nye produkter","setting.productAnalysis.tooltip":"Vi indsamler og sender brugsdata om udvidelsen, den interne udvidelsesidentifikator, browsertype og -version, operativsystem, land, sprog samt status af Avast-antivirusapp til vores servere.","setting.urlConsent.name":"Samtykke til at indsamle URL","serp.safe.desc":"Dette websted er sikkert","serp.bad.desc":"Dette websted kan være upålideligt","serp.unknown.desc":"Dette websted har ingen bedømmelse","serp.unsafe.desc":"Dette websted er ikke sikkert","topbar.openBankMode":"Åbn i Banktilstand","topbar.desc":"Dine økonomiske data kan muligvis ses af andre.","topbar.tooltip":"Banktilstand, der er en del af Avast Secure Browser, som blev installeret sammen med din Avast-antivirus, isolerer sikkert shopping- og banksessioner for at forhindre hackere i at stjæle dine kreditkortnumre, adgangskoder og andre private data.","topbar.dontShowAgain":"Vis ikke på dette websted igen","installPage.consent.title":"Tillad os at beskytte dig ved at scanne webadresser?","installPage.consent.desc":"Hvis du accepterer, kigger vi på adresserne på de websteder, du besøger, så vi kan fortælle dig, om de websteder er sikre. (Se vores {URL_START}Fortrolighedspolitik{URL_END})","installPage.agreed.title":"Tak!","installPage.agreed.desc":"Vi beskytter dig nu mod usikre websteder.","installPage.disagreed.title":"Ingen sure miner","installPage.disagreed.desc":"Hvis du ikke ønsker, at vi skal scanne dine webadresser, skal du blot afinstallere {0} Online Security – og pas på derude!","installPage.consent.disagree":"Nej tak","installPage.consent.agree":"Ja, scan webadresser","panel.consent.agree":"Scan webadresser"},"de":{"AVG.title":"Online Security","Avast.title":"Avast Online Security","global.beta":"Beta","global.detailsShow":"Details","global.detailsHide":"Details ausblenden","global.done":"Fertig","global.leaveSite":"Website verlassen","global.switcher.off":"AUS","global.switcher.on":"EIN","global.close":"Schließen","global.back":"Zurück","background.icon.unknown":"{0} - Unbekannte Webseite","background.icon.safe":"{0} - Diese Webseite ist sicher","background.icon.bad":"{0} - Diese Webseite ist möglichweise nicht vertrauenswürdig","background.icon.unsafe":"{0} - Diese Webseite ist nicht sicher","security.title":"Sicherheit","security.safe.title":"Diese Webseite ist sicher","security.safe.item1.desc":"Kein Phishing","security.safe.item1.tooltip":"Wir haben keine Versuche festgestellt, sensible Informationen wie Kennwörter, Kreditkartennummern usw. auf dieser Website zu stehlen.","security.safe.item2.desc":"Keine Malware","security.safe.item2.tooltip":"Wir haben keinen bösartigen Code auf dieser Website erkannt.","security.safe.item3.desc":"Vertrauenswürdig","security.safe.item3.tooltip":"{0} Benutzer haben diese Website als vertrauenswürdig bewertet, indem sie in {0} Online-Security auf {1} geklickt haben.","security.bad.title":"Diese Webseite ist möglichweise nicht vertrauenswürdig","security.bad.desc":"Wir konnten hier keine Phishing-Bedrohungen oder Malware finden. Viele unserer Benutzer haben diese Website jedoch schlecht bewertet.","security.unknown.title":"Unbekannte Webseite","security.unknown.desc":"Wir haben noch nicht genügend Informationen, um diese Webseite zu bewerten.","security.unsafe.title":"Diese Webseite ist nicht sicher","security.unsafe.phishing.desc":"Diese Webseite wurde als Phishing-Website markiert. Phishing ist der Versuch, vertrauliche Informationen wie Kennwörter, Kreditkartennummern usw. von Ihnen zu stehlen.","security.unsafe.malware.desc":"Wir haben auf dieser Webseite schädlichen Code gefunden, der Ihren Computer beschädigen oder Ihre private Daten stehlen könnte.","rating.question.desc":"Vertrauen {0}?","rating.negative":"Unangemessene Inhalte auf dieser Webseite? (optional)","rating.thanks":"Vielen Dank für Ihre Bewertung!","rating.trusted.desc":"Sie <i>vertrauen</i> {0}","rating.untrusted.desc":"Sie <i>haben kein Vertrauen</i> {0}","rating.revert.tooltip":"Klicken Sie zum Entfernen der Bewertung","rating.tooltip":"Ihr Vertrauen oder Misstrauen wird in unserer Sicherheitsbewertung für diese Website berücksichtigt.","rating.category.pornography":"Pornografie","rating.category.violence":"Waffen/Gewalt","rating.category.gambling":"Glücksspiel","rating.category.drugs":"Alkohol/Drogen","rating.category.illegal":"Raubkopie/Illegales","rating.category.others":"Sonstiges","privacy.title":"Privatsphäre","privacy.group.Social.desc":"Soziale Netzwerke","privacy.group.Social.block.desc":"Soziale Netzwerke standardmäßig blockieren","privacy.group.Social.block.tooltip":"Dies blockiert soziale Netzwerke auf jeder Website, die Sie aufsuchen.","privacy.group.Social.unblock.desc":"Soziale Netzwerke standardmäßig entsperren","privacy.group.Social.unblock.tooltip":"Dies ermöglicht soziale Netzwerke auf jeder Website, die Sie aufsuchen.","privacy.group.AdTracking.desc":"Verfolgung zu Werbezwecken","privacy.group.AdTracking.block.desc":"Sämtliches Werbe-Tracking blockieren","privacy.group.AdTracking.block.tooltip":"Dies blockiert Werbe-Tracking auf jeder Website, die Sie aufsuchen.","privacy.group.AdTracking.unblock.desc":"Sämtliches Werbe-Tracking entsperren","privacy.group.AdTracking.unblock.tooltip":"Dies ermöglicht Werbe-Tracking auf jeder Website, die Sie aufsuchen.","privacy.group.WebAnalytics.desc":"Web-Anwendungen","privacy.group.WebAnalytics.block.desc":"Tracking der Webanalyse insgesamt blockieren","privacy.group.WebAnalytics.block.tooltip":"Dies blockiert Webanalyse-Tracking auf jeder Website, die Sie besuchen.","privacy.group.WebAnalytics.unblock.desc":"Tracking der Webanalyse insgesamt entsperren","privacy.group.WebAnalytics.unblock.tooltip":"Dies ermöglicht sonstiges Tracking auf jeder Website, die Sie besuchen.","privacy.group.Others.desc":"Sonstiges","privacy.group.Others.block.desc":"Sonstiges Tracking blockieren","privacy.group.Others.block.tooltip":"Dies blockiert sonstiges Tracking auf jeder Website, die Sie besuchen.","privacy.group.Others.unblock.desc":"Sonstiges Tracking entsperren","privacy.trackersBlockedAll":"<i>Alle {0} Tracker</i> blockiert auf {1}\\n\\n<i>Alle {0} Tracker</i> blockiert auf {1} | <i>Alle {0} Tracker</i> blockiert auf {1}","privacy.trackersBlockedSome":"<i>{0} von {1} Tracker</i> blockiert auf {2} | <i>{0} von {1} Trackern</i> blockiert auf {2}","privacy.trackersBlockedNone":"<i>{0} verfolgt</i> System unter {1} | <i>{0} verfolgt</i> Systeme unter {1}","privacy.trackersBlocked":"{0} von {1} blockiert","privacy.trackersFound":"{0} gefunden","privacy.trackersNone":"keine Aktion","privacy.trackerBlock.desc":"Blockieren","privacy.trackerBlock.tooltip":"Dies blockiert [{0}] auf jeder Website, die Sie aufsuchen.","privacy.trackerUnblock.desc":"Blockiert","privacy.trackerUnblock.tooltip":"Dies entsperrt [{0}] auf jeder Website, die Sie aufsuchen.","privacy.trackerUnblockOnAutoBlock.tooltip":"Um einen bestimmten Tracker zu entsperren, deaktivieren Sie die automatische Blockierung.","privacy.automaticBlocking.desc":"Blockieren Sie automatisch alle Tracker","privacy.automaticBlocking.tooltip":"Wir blockieren automatisch alle gefundenen Tracker, auf jeder Website, die Sie besuchen.","setting.title":"Einstellungen","setting.serp.name":"Meine Suchergebnisse markieren","setting.serp.desc":"Fügen Sie farbige Symbole zu Ihren Suchergebnissen bei Google, Yahoo!. usw hinzu, um herauszufinden, auf welche Ergebnisse Sie klicken können. (Grün = Sicher, Grau = Unbekannt, Rot = Unsicher)","setting.serpPopup.name":"Tooltips für Suchergebnisse zeigen","setting.serpPopup.desc":"Ziehen Sie die Maus über unsere Symbole, um mehr Informationen anzuzeigen.","setting.secureBrowser.Avast.name":"Secure Browser","setting.secureBrowser.Avast.desc":"Wechselt für sensible Finanz-Webseiten in den Bankmodus (Avast Antivirus und Avast Secure Browser müssen dafür installiert sein)","setting.secureBrowser.AVG.name":"Secure Browser","setting.secureBrowser.AVG.desc":"Wechselt für sensible Finanz-Webseiten in den Bankmodus (AVG AntiVirus und AVG Secure Browser müssen dafür installiert sein)","setting.dntBadge.name":"Alle Tracker auf einer Webseite anzeigen","setting.dntBadge.desc":"Fügen Sie Ihrem Browser ein Abzeichen hinzu, um sofort zu sehen, wie viele Tracker sich auf einer Webseite befinden.","setting.dntAutoBlock.name":"Alle Tracker automatisch blockieren","setting.dntAutoBlock.desc":"Blockieren Sie alle gefundenen Tracker, auf jeder Webseite, die Sie besuchen.","setting.dntSocial.desc":"Tracker für alle sozialen Netzwerke blockieren","setting.dntAdTracking.desc":"Alle Werbe-Tracker blockieren","setting.dntWebAnalytics.desc":"Alle Webanalyse-Tracker blockieren","setting.dntOthers.desc":"Alle Tracker blockieren","setting.productAnalysis.name":"Analyse der Produktleistung und -nutzung für die Entwicklung neuer Produkte zulassen","setting.productAnalysis.tooltip":"Wir sammeln und übermitteln Nutzungsdaten der Erweiterung, interne Erweiterungsidentifikatoren sowie Informationen zu Browsertyp und -version, Betriebssystem, Land, Sprache und Status der Avast Antivirus-App an unsere Server.","setting.urlConsent.name":"Einverständnis zur Erfassung von URLs","serp.safe.desc":"Diese Webseite ist sicher","serp.bad.desc":"Diese Webseite ist möglichweise nicht vertrauenswürdig","serp.unknown.desc":"Diese Webseite wurde noch nicht bewertet","serp.unsafe.desc":"Diese Webseite ist nicht sicher","topbar.openBankMode":"Im Bankmodus öffnen","topbar.desc":"Ihre Finanzdaten sind möglicherweise für andere Personen sichtbar.","topbar.tooltip":"Bankmodus, der als Bestandteil von Avast Secure Browser mit Ihrem Avast Antivirus installiert wurde, schirmt Shopping- und Bank-Sitzungen sicher ab, um zu verhindern, dass Hacker Ihre Kreditkartennummern, Passwörter und andere private Daten stehlen können.","topbar.dontShowAgain":"Auf dieser Website nicht mehr anzeigen","installPage.consent.title":"Möchten Sie zulassen, dass wir Ihre Web-Adressen scannen, um Sie zu schützen?","installPage.consent.desc":"Wenn Sie hierfür Ihre Erlaubnis erteilen, werden wir die Adressen der von Ihnen besuchten Webseiten überprüfen, um herauszufinden, ob diese Seiten sicher sind. (Siehe hierzu unsere {URL_START}Datenschutzrichtlinie{URL_END})","installPage.agreed.title":"Vielen Dank!","installPage.agreed.desc":"Wir schützen Sie nun vor unsicheren Webseiten.","installPage.disagreed.title":"Wir sind nicht nachtragend","installPage.disagreed.desc":"Wenn Sie nicht wünschen, dass wir Ihre Web-Adressen scannen, deinstallieren Sie einfach {0} Online Security - und Sie sind aus dem Schneider!","installPage.consent.disagree":"Nein danke","installPage.consent.agree":"Ja, Web-Adressen scannen","panel.consent.agree":"Web-Adressen scannen"},"el":{"AVG.title":"Online Security","Avast.title":"Avast Online Security","global.beta":"Beta","global.detailsShow":"Λεπτομέρειες","global.detailsHide":"Απόκρυψη λεπτομερειών","global.done":"Τελείωσε","global.leaveSite":"Έξοδος από ιστότοπο","global.switcher.off":"OFF","global.switcher.on":"ON","global.close":"Κλείσιμο","global.back":"Πίσω","background.icon.unknown":"{0} - Άγνωστος ιστότοπος","background.icon.safe":"{0} - Αυτός ο ιστότοπος είναι ασφαλής","background.icon.bad":"{0} - Αυτός ο ιστότοπος μπορεί να είναι αναξιόπιστος","background.icon.unsafe":"{0} - Αυτός ο ιστότοπος δεν είναι ασφαλής","security.title":"Ασφάλεια","security.safe.title":"Αυτός ο ιστότοπος είναι ασφαλής","security.safe.item1.desc":"Δεν είναι phishing","security.safe.item1.tooltip":"Δεν εντοπίσαμε σε αυτή την ιστοσελίδα προσπάθειες υποκλοπής ευαίσθητων πληροφοριών όπως κωδικών πρόσβασης, αριθμών πιστωτικών καρτών κ.α.","security.safe.item2.desc":"Δεν υπάρχει malware","security.safe.item2.tooltip":"Δεν εντοπίσαμε κακόβουλο κώδικα σε αυτή την ιστοσελίδα.","security.safe.item3.desc":"Αξιόπιστη","security.safe.item3.tooltip":"Οι χρήστες της {0} έχουν αξιολογήσει αυτή την ιστοσελίδα ως αξιόπιστη πατώντας {1} στο {0} Online Security.","security.bad.title":"Αυτή μπορεί να είναι αναξιόπιστη","security.bad.desc":"Δεν βρήκαμε απειλές εδώ ηλ. ψαρέματος ή κακόβουλου λογισμικού, αλλά πολλοί χρήστες μας έδωσαν στον ιστότοπο χειρονομία αποδοκιμασίας.","security.unknown.title":"Άγνωστος ιστότοπος","security.unknown.desc":"Δεν έχουμε ακόμη αρκετές πληροφορίες για να αξιολογήσουμε αυτόν τον ιστότοπο.","security.unsafe.title":"Αυτός ο ιστότοπος δεν είναι ασφαλής","security.unsafe.phishing.desc":"Αυτός ο ιστότοπος έχει επισημανθεί ως τοποθεσία ηλεκτρονικού ψαρέματος. Το ηλ. ψάρεμα είναι μια προσπάθεια υποκλοπής ευαίσθητων πληροφοριών, όπως κωδικών πρόσβασης, αριθμών πιστωτικών καρτών κ.λπ.","security.unsafe.malware.desc":"Σε αυτή την ιστοσελίδα βρήκαμε κακόβουλο κώδικα που θα μπορούσε να βλάψει τον υπολογιστή σας ή να κλέψει τα προσωπικά σας στοιχεία.","rating.question.desc":"Εμπιστεύεστε το {0};","rating.negative":"Τυχόν ακατάλληλο περιεχόμενο σε αυτή την ιστοσελίδα; (προαιρετικό)","rating.thanks":"Ευχαριστούμε για τη βαθμολογία σας!","rating.trusted.desc":"Εσείς <i>εμπιστεύεστε</i> {0}","rating.untrusted.desc":"Εσείς <i>δεν εμπιστεύεστε</i> {0}","rating.revert.tooltip":"Κάντε κλικ για να καταργήσετε τη βαθμολογία σας","rating.tooltip":"Η εμπιστοσύνη ή η δυσπιστίας σας θα ληφθούν υπόψη όταν θα βαθμολογήσουμε την ασφάλεια αυτής της ιστοσελίδας.","rating.category.pornography":"Πορνογραφία","rating.category.violence":"Όπλα/Βία","rating.category.gambling":"Τυχερά παιχνίδια","rating.category.drugs":"Αλκοόλ/Ναρκωτικά","rating.category.illegal":"Warez/Παράνομα","rating.category.others":"Άλλα","privacy.title":"Απόρρητο","privacy.group.Social.desc":"Κοινων. δίκτυα","privacy.group.Social.block.desc":"Μπλοκάρισμα παρακολούθησης κοινωνικών δικτύων","privacy.group.Social.block.tooltip":"Αυτό θα μπλοκάρει την παρακολούθηση κοινωνικών δικτύων σε κάθε ιστοσελίδα που επισκέπτεστε.","privacy.group.Social.unblock.desc":"Ξεμπλοκάρισμα παρακολούθησης κοινωνικών δικτύων","privacy.group.Social.unblock.tooltip":"Αυτό θα επιτρέψει την παρακολούθηση κοινωνικών δικτύων σε κάθε ιστοσελίδα που επισκέπτεστε.","privacy.group.AdTracking.desc":"Παρακολ. διαφημίσεων","privacy.group.AdTracking.block.desc":"Μπλοκάρισμα παρακολούθησης διαφημίσεων","privacy.group.AdTracking.block.tooltip":"Αυτό θα μπλοκάρει την παρακολούθηση διαφημίσεων σε κάθε ιστοσελίδα που επισκέπτεστε.","privacy.group.AdTracking.unblock.desc":"Ξεμπλοκάρισμα παρακολούθησης διαφημίσεων","privacy.group.AdTracking.unblock.tooltip":"Αυτό θα επιτρέψει την παρακολούθηση διαφημίσεων σε κάθε ιστοσελίδα που επισκέπτεστε.","privacy.group.WebAnalytics.desc":"Ανάλυση Web","privacy.group.WebAnalytics.block.desc":"Μπλοκάρισμα όλων των παρακολουθήσεων ανάλυσης web","privacy.group.WebAnalytics.block.tooltip":"Αυτό θα μπλοκάρει την παρακολούθηση ανάλυσης web σε κάθε ιστοσελίδα που επισκέπτεστε.","privacy.group.WebAnalytics.unblock.desc":"Ξεμπλοκάρισμα όλων των παρακολουθήσεων ανάλυσης web","privacy.group.WebAnalytics.unblock.tooltip":"Αυτό θα επιτρέψει άλλες παρακολουθήσεις σε κάθε ιστοσελίδα που επισκέπτεστε.","privacy.group.Others.desc":"Άλλα","privacy.group.Others.block.desc":"Μπλοκάρισμα όλων των άλλων παρακολουθήσεων","privacy.group.Others.block.tooltip":"Αυτό θα μπλοκάρει άλλες παρακολουθήσεις σε κάθε ιστοσελίδα που επισκέπτεστε.","privacy.group.Others.unblock.desc":"Ξεμπλοκάρισμα όλων των άλλων παρακολουθήσεων","privacy.trackersBlockedAll":"<i>Το {0} πρόγραμμα παρακολούθησης</i> μπλοκαρίστηκε στο {1} | <i>Τα {0} προγράμματα παρακολούθησης</i> μπλοκαρίστηκαν στο {1}","privacy.trackersBlockedSome":"<i>{0} από {1} πρόγραμμα παρακολούθησης</i> μπλοκαρίστηκε στο {2} | <i>{0} από {1} προγράμματα παρακολούθησης</i> μπλοκαρίστηκαν στο {2}","privacy.trackersBlockedNone":"<i>{0} σύστημα παρακολούθησης</i> στο {1} | <i>{0} συστήματα παρακολούθησης</i> στο {1}","privacy.trackersBlocked":"{0} από {1} μπλοκαρίστηκε","privacy.trackersFound":"{0} βρέθηκαν","privacy.trackersNone":"τίποτα","privacy.trackerBlock.desc":"Αποκλεισμ.","privacy.trackerBlock.tooltip":"Αυτό θα μπλοκάρει το [{0}] σε κάθε ιστοσελίδα που επισκέπτεστε.","privacy.trackerUnblock.desc":"Αποκλείστηκε","privacy.trackerUnblock.tooltip":"Αυτό θα ξεμπλοκάρει το [{0}] σε κάθε ιστοσελίδα που επισκέπτεστε.","privacy.trackerUnblockOnAutoBlock.tooltip":"Για να ξεμπλοκάρετε ένα συγκεκριμένο πρόγραμμα παρακολούθησης, απενεργοποιήστε το αυτόματο μπλοκάρισμα.","privacy.automaticBlocking.desc":"Αυτόματο μπλοκάρισμα όλων των παρακολουθήσεων","privacy.automaticBlocking.tooltip":"Θα μπλοκάρουμε αυτόματα τα προγράμματα παρακολούθησης σε κάθε ιστοσελίδα που επισκέπτεστε.","setting.title":"Ρυθμίσεις","setting.serp.name":"Σήμανση αποτελεσμάτων αναζητήσεων","setting.serp.desc":"Προσθέστε έγχρωμα εικονίδια στα αποτελέσματα αναζήτησης στο Google, το Yahoo! κ.λπ., για να δείτε σε ποια αποτελέσματα είναι ασφαλές να κάνετε κλικ (πράσινο = ασφαλές, γκρι = άγνωστο,, κόκκινο = μη ασφαλές).","setting.serpPopup.name":"Εμφάνιση επεξηγήσεων εργαλείων για αποτελέσματα αναζήτησης","setting.serpPopup.desc":"Μετακινήστε το ποντίκι πάνω από τα εικονίδια για να δείτε περισσότερες πληροφορίες.","setting.secureBrowser.Avast.name":"Secure Browser","setting.secureBrowser.Avast.desc":"Αλλαγή σε Τραπεζική Λειτουργία για σελίδες με ευαίσθητα οικονομικά στοιχεία (απαιτείται εγκατάσταση του Avast Antivirus και του Avast Secure Browser)","setting.secureBrowser.AVG.name":"Secure Browser","setting.secureBrowser.AVG.desc":"Αλλαγή σε Τραπεζική Λειτουργία για σελίδες με ευαίσθητα οικονομικά στοιχεία (απαιτείται εγκατάσταση του AVG AntiVirus και του AVG Secure Browser)","setting.dntBadge.name":"Εμφάνιση συνολικών προγρ. παρακολούθησης σε μια ιστοσελίδα","setting.dntBadge.desc":"Προσθέστε ένα σήμα στο πρόγραμμα περιήγησης για να δείτε αμέσως πόσα προγράμματα παρακολούθησης είναι σε κάθε ιστοσελίδα.","setting.dntAutoBlock.name":"Αυτόματο μπλοκάρισμα όλων των παρακολουθήσεων","setting.dntAutoBlock.desc":"Μπλοκάρισμα όλων των προγρ. παρακολούθησης σε κάθε ιστοσελίδα που επισκέπτεστε.","setting.dntSocial.desc":"Μπλοκάρισμα παρακολούθησης από όλα τα κοινωνικά δίκτυα","setting.dntAdTracking.desc":"Μπλοκάρισμα παρακολούθησης διαφημίσεων","setting.dntWebAnalytics.desc":"Μπλοκάρισμα όλων των παρακολουθήσεων ανάλυσης web","setting.dntOthers.desc":"Μπλοκάρισμα όλων των άλλων παρακολουθήσεων","setting.productAnalysis.name":"Επιτρέψτε την ανάλυση της απόδοσης και της χρήσης του προϊόντος για την ανάπτυξη νέων προϊόντων","setting.productAnalysis.tooltip":"Συλλέγουμε και στέλνουμε στους server μας δεδομένα χρήσης από την επέκταση, το εσωτερικό αναγνωριστικό της επέκτασης, τον τύπο και την έκδοση του προγράμματος περιήγησης, το λειτουργικό σύστημα, τη χώρα, τη γλώσσα και την κατάσταση του app Avast antivirus.","setting.urlConsent.name":"Συναινέστε για τη συλλογή διευθύνσεων URL","serp.safe.desc":"Αυτός ο ιστότοπος είναι ασφαλής","serp.bad.desc":"Αυτή η ιστοσελίδα μπορεί να είναι αναξιόπιστη","serp.unknown.desc":"Αυτή η ιστοσελίδα δεν έχει αξιολόγηση","serp.unsafe.desc":"Αυτή η ιστοσελίδα δεν είναι ασφαλής","topbar.openBankMode":"Άνοιγμα σε Τραπεζική Λειτουργία","topbar.desc":"Τα οικονομικά σας στοιχεία ενδέχεται να είναι ορατά σε άλλους.","topbar.tooltip":"Η Τραπεζική Λειτουργία, μέρος του Avast Secure Browser που έχει εγκατασταθεί με το Avast antivirus, απομονώνει με ασφάλεια αγορές και συνδέσεις σε ιστοσελίδες τραπεζών για να μην μπορούν οι χάκερ να υποκλέψουν αριθμούς πιστωτικών καρτών, κωδικούς και άλλα απόρρητα στοιχεία.","topbar.dontShowAgain":"Να μην εμφανιστεί ξανά σε αυτήν την ιστοσελίδα","installPage.consent.title":"Μας επιτρέπετε να σαρώνουμε τις διευθύνσεις web για να σας προστατεύουμε;","installPage.consent.desc":"Εάν συμφωνείτε, θα εξετάζουμε τις διευθύνσεις των ιστότοπων που επισκέπτεστε, για να σας ενημερώσουμε αν οι ιστότοποι είναι ασφαλείς. (Ανατρέξτε στην {URL_START}Πολιτική Απορρήτου{URL_END})","installPage.agreed.title":"Ευχαριστούμε!","installPage.agreed.desc":"Τώρα σας προστατεύουμε από επικίνδυνους ιστότοπους.","installPage.disagreed.title":"Δεν πειράζει","installPage.disagreed.desc":"Αν δεν θέλετε να σαρώνουμε τις διευθύνσεις web, απλώς απεγκαταστήστε την Ηλεκτρονική Ασφάλεια {0} - και παραμείνετε ασφαλείς!","installPage.consent.disagree":"Όχι, ευχαριστώ","installPage.consent.agree":"Ναι, σάρωση διευθύνσεων web","panel.consent.agree":"Σάρωση διευθύνσεων web"},"en":{"AVG.title":"Online Security","Avast.title":"Avast Online Security","global.beta":"Beta","global.detailsShow":"Details","global.detailsHide":"Hide details","global.done":"Done","global.leaveSite":"Leave site","global.switcher.off":"OFF","global.switcher.on":"ON","global.close":"Close","global.back":"Back","background.icon.unknown":"{0} - Unknown site","background.icon.safe":"{0} - This website is safe","background.icon.bad":"{0} - This site may be untrustworthy","background.icon.unsafe":"{0} - This website is unsafe","security.title":"Security","security.safe.title":"This website is safe","security.safe.item1.desc":"No phishing","security.safe.item1.tooltip":"We have not detected any attempts to steal sensitive information like passwords, credit card numbers, etc. on this website.","security.safe.item2.desc":"No malware","security.safe.item2.tooltip":"We have not detected any malicious code on this website.","security.safe.item3.desc":"Trusted","security.safe.item3.tooltip":"{0} users have rated this website as trustworthy by clicking {1} within {0} Online Security.","security.bad.title":"This may be untrustworthy","security.bad.desc":"We didn\'t find any phishing threats or malware here, but many of our users gave the site a thumbs down.","security.unknown.title":"Unknown site","security.unknown.desc":"We don\'t have enough information yet to rate this website.","security.unsafe.title":"This website is unsafe","security.unsafe.phishing.desc":"This website has been marked as a phishing site. Phishing is an attempt to steal sensitive information from you like passwords, credit card numbers, etc.","security.unsafe.malware.desc":"We\'ve found malicious code on this website that could harm your computer or steal your private data.","rating.question.desc":"Do you trust {0}?","rating.negative":"Any inappropriate content on this website? (optional)","rating.thanks":"Thanks for your rating!","rating.trusted.desc":"You <i>trust</i> {0}","rating.untrusted.desc":"You <i>don\'t trust</i> {0}","rating.revert.tooltip":"Click to remove your rating","rating.tooltip":"Your trust or distrust will be factored into our safety rating for this website.","rating.category.pornography":"Pornography","rating.category.violence":"Weapons / Violence","rating.category.gambling":"Gambling","rating.category.drugs":"Alcohol / Drugs","rating.category.illegal":"Warez / Illegal","rating.category.others":"Others","privacy.title":"Privacy","privacy.group.Social.desc":"Social networks","privacy.group.Social.block.desc":"Block all social network tracking","privacy.group.Social.block.tooltip":"This will block social network tracking on every website you visit.","privacy.group.Social.unblock.desc":"Unblock all social network tracking","privacy.group.Social.unblock.tooltip":"This will allow social network tracking on every website you visit.","privacy.group.AdTracking.desc":"Ad Tracking","privacy.group.AdTracking.block.desc":"Block all ad tracking","privacy.group.AdTracking.block.tooltip":"This will block ad tracking on every website you visit.","privacy.group.AdTracking.unblock.desc":"Unblock all ad tracking","privacy.group.AdTracking.unblock.tooltip":"This will allow ad tracking on every website you visit.","privacy.group.WebAnalytics.desc":"Web Analytics","privacy.group.WebAnalytics.block.desc":"Block all web analytic tracking","privacy.group.WebAnalytics.block.tooltip":"This will block web analytic tracking on every website you visit.","privacy.group.WebAnalytics.unblock.desc":"Unblock all web analytic tracking","privacy.group.WebAnalytics.unblock.tooltip":"This will allow other tracking on every website you visit.","privacy.group.Others.desc":"Others","privacy.group.Others.block.desc":"Block all other tracking","privacy.group.Others.block.tooltip":"This will block other tracking on every website you visit.","privacy.group.Others.unblock.desc":"Unblock all other tracking","privacy.trackersBlockedAll":"<i>All {0} tracker</i> blocked on {1} | <i>All {0} trackers</i> blocked on {1}","privacy.trackersBlockedSome":"<i>{0} of {1} tracker</i> blocked on {2} | <i>{0} of {1} trackers</i> blocked on {2}","privacy.trackersBlockedNone":"<i>{0} tracking</i> system on {1} | <i>{0} tracking</i> systems on {1}","privacy.trackersBlocked":"{0} of {1} blocked","privacy.trackersFound":"{0} found","privacy.trackersNone":"nothing","privacy.trackerBlock.desc":"Block","privacy.trackerBlock.tooltip":"This will block [{0}] on every website you visit.","privacy.trackerUnblock.desc":"Blocked","privacy.trackerUnblock.tooltip":"This will unblock [{0}] on every website you visit.","privacy.trackerUnblockOnAutoBlock.tooltip":"To unblock a specific tracker, turn off automatic blocking.","privacy.automaticBlocking.desc":"Automatically block all trackers","privacy.automaticBlocking.tooltip":"We\'ll automatically block all found trackers on every website you visit.","setting.title":"Settings","setting.serp.name":"Mark my search results","setting.serp.desc":"Add colored icons to your search results on Google, Yahoo!, etc. to see which results are safe to click. (Green = Safe, Gray = Unknown, Red = Unsafe)","setting.serpPopup.name":"Show tooltips for search results","setting.serpPopup.desc":"Mouse-over our icons to see more information.","setting.secureBrowser.Avast.name":"Secure Browser","setting.secureBrowser.Avast.desc":"Switch to Bank Mode for sensitive financial sites (requires Avast Antivirus and Avast Secure Browser installed)","setting.secureBrowser.AVG.name":"Secure Browser","setting.secureBrowser.AVG.desc":"Switch to Bank Mode for sensitive financial sites (requires AVG AntiVirus and AVG Secure Browser installed)","setting.dntBadge.name":"Show total trackers on a site","setting.dntBadge.desc":"Add a badge to your browser to immediately see how many trackers are on any website.","setting.dntAutoBlock.name":"Automatically block all trackers","setting.dntAutoBlock.desc":"Block all found trackers on every website you visit.","setting.dntSocial.desc":"Block all social network trackers","setting.dntAdTracking.desc":"Block all ad trackers","setting.dntWebAnalytics.desc":"Block all web analytic trackers","setting.dntOthers.desc":"Block all other trackers","setting.productAnalysis.name":"Allow analysis of product performance and usage for new product development","setting.productAnalysis.tooltip":"We collect and send to our servers usage data of the extension, internal extension identifier, browser type and version, operating system, country, language, status of Avast antivirus app.","setting.urlConsent.name":"Consent to harvest URL","serp.safe.desc":"This website is safe","serp.bad.desc":"This site may be untrustworthy","serp.unknown.desc":"This site has no rating","serp.unsafe.desc":"This site is unsafe","topbar.openBankMode":"Open in bank mode","topbar.desc":"Your financial data may be visible to others.","topbar.tooltip":"Bank Mode, part of the Avast Secure Browser installed with your Avast antivirus, safely isolates shopping and banking sessions to stop hackers from stealing your credit card numbers, password, and other private data.","topbar.dontShowAgain":"Don\'t show on this site again","installPage.consent.title":"Allow us to protect you by scanning web addresses?","installPage.consent.desc":"If you agree, we\'ll look at the addresses of the websites you visit so we can tell you if those sites are safe. (See our {URL_START}Privacy Policy{URL_END})","installPage.agreed.title":"Thanks!","installPage.agreed.desc":"We\'re now protecting you from unsafe websites.","installPage.disagreed.title":"No hard feelings","installPage.disagreed.desc":"If you don\'t want us to scan your web addresses, just uninstall {0} Online Security - and be safe out there!","installPage.consent.disagree":"No thanks","installPage.consent.agree":"Yes, scan web addresses","panel.consent.agree":"Scan web addresses"},"es":{"AVG.title":"Online Security","Avast.title":"Avast Online Security","global.beta":"Beta","global.detailsShow":"Detalles","global.detailsHide":"Ocultar detalles","global.done":"Listo","global.leaveSite":"Salir del sitio","global.switcher.off":"OFF","global.switcher.on":"ON","global.close":"Cerrar","global.back":"Atrás","background.icon.unknown":"{0}: Sitio desconocido","background.icon.safe":"{0}: Este sitio web es seguro.","background.icon.bad":"{0}: Este sitio puede ser poco fiable.","background.icon.unsafe":"{0}: Este sitio web no es seguro.","security.title":"Seguridad","security.safe.title":"Este sitio web es seguro.","security.safe.item1.desc":"Ausencia de phishing","security.safe.item1.tooltip":"No hemos detectado ningún intento de robar información confidencial en este sitio web, como contraseñas, números de tarjeta de crédito, etc.","security.safe.item2.desc":"Ningún malware","security.safe.item2.tooltip":"No hemos detectado ningún código malicioso en este sitio web.","security.safe.item3.desc":"Fiable","security.safe.item3.tooltip":"Los usuarios de {0} han calificado este sitio web como fiable haciendo clic en el botón {1} de {0} Online Security.","security.bad.title":"Este sitio puede ser poco fiable.","security.bad.desc":"Aquí no hemos encontrado ninguna amenaza de phishing o malware, pero muchos de nuestros usuarios calificaron el sitio con un pulgar hacia abajo.","security.unknown.title":"Sitio desconocido","security.unknown.desc":"Todavía no tenemos suficiente información sobre este sitio web.","security.unsafe.title":"Este sitio web no es seguro.","security.unsafe.phishing.desc":"Este sitio web ha sido marcado como sitio de phishing. El phishing es un intento de robar información confidencial, como contraseñas, números de tarjeta de crédito, etc.","security.unsafe.malware.desc":"Hemos detectado código malintencionado en este sitio web que podría dañar su equipo o robar sus datos privados.","rating.question.desc":"¿Confía en {0}?","rating.negative":"¿Ha detectado contenido inadecuado en este sitio web? (opcional)","rating.thanks":"¡Gracias por su calificación!","rating.trusted.desc":"<i>Confía</i> en {0}.","rating.untrusted.desc":"<i>No confía</i> en {0}.","rating.revert.tooltip":"Haga clic para eliminar su calificación","rating.tooltip":"Su confianza o desconfianza se tendrá en cuenta a la hora de establecer nuestra calificación de seguridad para este sitio web.","rating.category.pornography":"Pornografía","rating.category.violence":"Armas o violencia","rating.category.gambling":"Apuestas","rating.category.drugs":"Alcohol o drogas","rating.category.illegal":"Piratería o ilegalidades","rating.category.others":"Otros","privacy.title":"Privacidad","privacy.group.Social.desc":"Redes sociales","privacy.group.Social.block.desc":"Bloquear todo el seguimiento de redes sociales","privacy.group.Social.block.tooltip":"Esto bloqueará el seguimiento de redes sociales en todos los sitios web que visite.","privacy.group.Social.unblock.desc":"Desbloquear todo el seguimiento de redes sociales","privacy.group.Social.unblock.tooltip":"Esto permitirá el seguimiento de redes sociales en todos los sitios web que visite.","privacy.group.AdTracking.desc":"Seguimiento de anuncios","privacy.group.AdTracking.block.desc":"Bloquear todo el seguimiento de anuncios","privacy.group.AdTracking.block.tooltip":"Esto bloqueará el seguimiento de anuncios en todos los sitios web que visite.","privacy.group.AdTracking.unblock.desc":"Desbloquear todo el seguimiento de anuncios","privacy.group.AdTracking.unblock.tooltip":"Esto permitirá el seguimiento de anuncios en todos los sitios web que visite.","privacy.group.WebAnalytics.desc":"Análisis web","privacy.group.WebAnalytics.block.desc":"Bloquear todo el seguimiento de análisis web","privacy.group.WebAnalytics.block.tooltip":"Esto bloqueará el seguimiento de análisis web en todos los sitios web que visite.","privacy.group.WebAnalytics.unblock.desc":"Desbloquear todo el seguimiento de análisis web","privacy.group.WebAnalytics.unblock.tooltip":"Esto permitirá los otros seguimientos en todos los sitios web que visite.","privacy.group.Others.desc":"Otros","privacy.group.Others.block.desc":"Bloquear los otros seguimientos","privacy.group.Others.block.tooltip":"Esto bloqueará los otros seguimientos en todos los sitios web que visite.","privacy.group.Others.unblock.desc":"Desbloquear los otros seguimientos","privacy.trackersBlockedAll":"<i>{0} rastreador</i> bloqueado en {1} | <i>{0} rastreadores</i> bloqueados en {1}","privacy.trackersBlockedSome":"<i>{0} de {1} rastreador</i> bloqueado en {2} | <i>{0} de {1} rastreadores</i> bloqueados en {2}","privacy.trackersBlockedNone":"<i>{0} sistema de seguimiento</i> en {1} | <i>{0} sistemas de seguimiento</i> en {1}","privacy.trackersBlocked":"{0} de {1} bloqueado","privacy.trackersFound":"{0} encontrado","privacy.trackersNone":"nada","privacy.trackerBlock.desc":"Bloquear","privacy.trackerBlock.tooltip":"Esto desbloqueará [{0}] en todos los sitios web que visite.","privacy.trackerUnblock.desc":"Bloqueado","privacy.trackerUnblock.tooltip":"Esto desbloqueará [{0}] en todos los sitios web que visite.","privacy.trackerUnblockOnAutoBlock.tooltip":"Para desbloquear un rastreador específico, desactive el bloqueo automático.","privacy.automaticBlocking.desc":"Bloquear de forma automática todos los rastreadores","privacy.automaticBlocking.tooltip":"Bloquearemos automáticamente todos los rastreadores detectados en cada sitio web que visite.","setting.title":"Configuración","setting.serp.name":"Marcar mis resultados de búsqueda","setting.serp.desc":"Agregue iconos de colores a los resultados de la búsqueda en Google, Yahoo!, etc. para ver en qué resultados puede hacer clic de forma segura. El verde indica que es seguro; el gris, que se desconoce; el rojo, que no es seguro","setting.serpPopup.name":"Mostrar información en pantalla sobre los resultados de búsqueda","setting.serpPopup.desc":"Pase el ratón por encima de nuestros iconos para ver más información.","setting.secureBrowser.Avast.name":"Secure Browser","setting.secureBrowser.Avast.desc":"Cambiar a Modo de banca para sitios financieros confidenciales (requiere la instalación de Avast Antivirus y Avast Secure Browser)","setting.secureBrowser.AVG.name":"Secure Browser","setting.secureBrowser.AVG.desc":"Cambiar a Modo de banca para sitios financieros confidenciales (requiere la instalación de AVG AntiVirus y AVG Secure Browser)","setting.dntBadge.name":"Mostrar el total de rastreadores en un sitio","setting.dntBadge.desc":"Añada un distintivo al navegador para ver inmediatamente cuántos rastreadores hay en cualquier sitio web.","setting.dntAutoBlock.name":"Bloquear de forma automática todos los rastreadores","setting.dntAutoBlock.desc":"Bloquee todos los rastreadores detectados en los sitios web que visite.","setting.dntSocial.desc":"Bloquear todos los rastreadores de redes sociales","setting.dntAdTracking.desc":"Bloquear todos los rastreadores de anuncios","setting.dntWebAnalytics.desc":"Bloquear todos los rastreadores de análisis web","setting.dntOthers.desc":"Bloquear los otros rastreadores","setting.productAnalysis.name":"Permitir el análisis de rendimiento y de uso para el desarrollo de nuevos productos","setting.productAnalysis.tooltip":"Recopilamos y enviamos a nuestros servidores datos de uso de la extensión, identificadores internos de la extensión, tipo y versión del navegador, sistema operativo, país, idioma y estado de la aplicación antivirus de Avast.","setting.urlConsent.name":"Consentimiento para la recolección de URL","serp.safe.desc":"Este sitio web es seguro","serp.bad.desc":"Este sitio puede ser poco fiable","serp.unknown.desc":"Este sitio no tiene ninguna calificación","serp.unsafe.desc":"Este sitio no es seguro","topbar.openBankMode":"Abrir en Modo de banca","topbar.desc":"Es posible que otros usuarios puedan ver sus datos financieros.","topbar.tooltip":"El Modo de banca, que forma parte de Avast Secure Browser, que se instala con Avast Antivirus, aísla de forma segura las sesiones de banca y compras para impedir que los hackers roben los números de sus tarjetas de crédito, su contraseña y otros datos privados.","topbar.dontShowAgain":"No volver a mostrarlo en este sitio","installPage.consent.title":"¿Nos permite analizar los sitios web para protegerlo?","installPage.consent.desc":"Si acepta, miraremos las direcciones de los sitios web que visite para poder decirle si son seguros (Consulte nuestra {URL_START}Política de privacidad{URL_END})","installPage.agreed.title":"¡Gracias!","installPage.agreed.desc":"Ahora lo estamos protegiendo de sitios web no seguros.","installPage.disagreed.title":"Sin rencores","installPage.disagreed.desc":"Si no desea que analicemos las direcciones de los sitios web, simplemente desinstale {0} Online Security, ¡y cuídese allí afuera!","installPage.consent.disagree":"No, gracias","installPage.consent.agree":"Sí, analizar las direcciones web","panel.consent.agree":"Analizar direcciones web"},"et":{"AVG.title":"Veebiturvalisus","Avast.title":"Avasti veebiturvalisus","global.beta":"Beeta","global.detailsShow":"Detailid","global.detailsHide":"Peida detailid","global.done":"Valmis","global.leaveSite":"Lahku lehelt","global.switcher.off":"-","global.switcher.on":"-","global.close":"Sulge","global.back":"Tagasi","background.icon.unknown":"{0} - Tundmatu leht","background.icon.safe":"{0} - See veebileht on turvaline","background.icon.bad":"{0} - See leht võib olla ebausaldusväärne","background.icon.unsafe":"{0} - See veebileht ei ole turvaline","security.title":"Turvalisus","security.safe.title":"See veebileht on turvaline","security.safe.item1.desc":"Õngitsemist pole tuvastatud","security.safe.item1.tooltip":"Me ei ole tuvastanud katseid varastada tundlikku teavet nagu paroolid, krediitkaartide numbrid jne sellelt veebilehelt.","security.safe.item2.desc":"Pahavara pole tuvastatud","security.safe.item2.tooltip":"Me ei ole tuvastanud pahatahtlikke koode sellel veebilehel.","security.safe.item3.desc":"Usaldusväärne","security.safe.item3.tooltip":"{0} kasutajat hindas selle veebilehe usaldusväärseks, klõpsates {1} valikul {0} Veebiturvalisus.","security.bad.title":"See võib olla ebausaldusväärne","security.bad.desc":"Me ei leidnud siit õngitsemise ohtu või pahavara, kuid paljud meie kasutajad panind sellele lehele pöial alla märgi.","security.unknown.title":"Tundmatu veebileht","security.unknown.desc":"Meil ei ole veel piisavat teavet selle veebilehe hindamiseks.","security.unsafe.title":"See veebileht ei ole turvaline","security.unsafe.phishing.desc":"See veebileht on märgitud kui õngitsemise leht. Õngitsemine on püüd varastada sinult tundlikku teavet nagu paroolid, krediitkaartide numbrid jne.","security.unsafe.malware.desc":"Leidsime sellelt veebilehelt pahatahtliku koodi, mis võib kahjustada sinu arvutit või varastada sinu isikuandmeid.","rating.question.desc":"Kas sa usaldad {0}?","rating.negative":"Kas sellel veebilehel on sobimatu sisu? (valikuline)","rating.thanks":"Täname sind hinnangu eest!","rating.trusted.desc":"Sina <i>usaldad</i> {0}","rating.untrusted.desc":"Sina <i>ei usalda</i> {0}","rating.revert.tooltip":"Klõpsa oma hinnangu eemaldamiseks","rating.tooltip":"Usaldamine või usaldamatus sinu poolt kajastub meie ohutuse hinnangus selle veebilehe kohta.","rating.category.pornography":"Pornograafia","rating.category.violence":"Relvad / Vägivald","rating.category.gambling":"Hasartmängud","rating.category.drugs":"Alkohol / Uimastid","rating.category.illegal":"Warez / Illegaalne","rating.category.others":"Muud","privacy.title":"Privaatsus","privacy.group.Social.desc":"Sotsiaalvõrgustikud","privacy.group.Social.block.desc":"Blokeeri kogu sotsiaalvõrgustiku jälgimine","privacy.group.Social.block.tooltip":"See blokeerib sotsiaalvõrgustiku jälgimise igal veebilehel, mida sa külastad.","privacy.group.Social.unblock.desc":"Vabasta kogu sotsiaalvõrgustiku jälgimise blokeerimine","privacy.group.Social.unblock.tooltip":"See lubab sotsiaalvõrgustiku jälgimise igal veebilehel, mida sa külastad.","privacy.group.AdTracking.desc":"Reklaami jälgimine","privacy.group.AdTracking.block.desc":"Blokeeri kogu reklaami jälgimine","privacy.group.AdTracking.block.tooltip":"See blokeerib reklaami jälgimise igal veebilehel, mida sa külastad.","privacy.group.AdTracking.unblock.desc":"Vabasta kogu reklaami jälgimise blokeerimine","privacy.group.AdTracking.unblock.tooltip":"See lubab reklaami jälgimise igal veebilehel, mida sa külastad.","privacy.group.WebAnalytics.desc":"Veebianalüütika","privacy.group.WebAnalytics.block.desc":"Blokeeri kogu veebianalüütika jälgimine","privacy.group.WebAnalytics.block.tooltip":"See blokeerib veebianalüütika jälgimise igal veebilehel, mida sa külastad.","privacy.group.WebAnalytics.unblock.desc":"Vabasta kogu veebianalüütika jälgimine","privacy.group.WebAnalytics.unblock.tooltip":"See lubab kogu muu jälgimise igal veebilehel, mida sa külastad.","privacy.group.Others.desc":"Muud","privacy.group.Others.block.desc":"Blokeeri kogu muu jälgimine","privacy.group.Others.block.tooltip":"See blokeerib jälgimise igal veebilehel, mida sa külastad.","privacy.group.Others.unblock.desc":"Vabasta kogu muu jälgimise blokeerimine","privacy.trackersBlockedAll":"<i>{0} jälgija</i> on blokeeritud {1} | <i>{0} jälgijat</i> on blokeeritud {1}","privacy.trackersBlockedSome":"<i>{0} / {1} jälgija</i> on blokeeritud {2} | <i>{0} / {1} jälgijat</i> on blokeeritud {2}","privacy.trackersBlockedNone":"<i>{0} jälgimise</i> süsteemi {1} | <i>{0} jälgimise</i> süsteemi {1}","privacy.trackersBlocked":"{0} / {1} blokeeritud","privacy.trackersFound":"{0} leitud","privacy.trackersNone":"mitte midagi","privacy.trackerBlock.desc":"Blokeeri","privacy.trackerBlock.tooltip":"See blokeerib [{0}] igal veebilehel, mida sa külastad.","privacy.trackerUnblock.desc":"Blokeeritud","privacy.trackerUnblock.tooltip":"See vabastab [{0}] blokeerimisest igal veebilehel, mida sa külastad.","privacy.trackerUnblockOnAutoBlock.tooltip":"Konkreetse jälgija vabastamiseks lülita automaatne blokeerimine välja.","privacy.automaticBlocking.desc":"Blokeeri automaatselt kõik jälgijad","privacy.automaticBlocking.tooltip":"Me blokeerime automaatselt kõik leitud jälgijad igal veebilehel, mida sa külastad.","setting.title":"Seaded","setting.serp.name":"Märgi minu otsingutulemused","setting.serp.desc":"Lisa värvilised ikoonid oma otsingutulemustele Google\'ist, Yahoo!-st jne, et näha, millistele tulemustele klõpsamine on turvaline. (Roheline = Turvaline, Hall = Teadmata, Punane = Ebaturvaline)","setting.serpPopup.name":"Kuva soovitused otsingtulemuste jaoks","setting.serpPopup.desc":"Lisateabe saamiseks liiguta hiirt üle meie ikoonide.","setting.secureBrowser.Avast.name":"Secure Browser","setting.secureBrowser.Avast.desc":"Lülitu pangarežiimile tundlikel finantslehtedel (Avast Antivirus ja Avast Secure Browser peavad olema installitud)","setting.secureBrowser.AVG.name":"Secure Browser","setting.secureBrowser.AVG.desc":"Lülitu pangarežiimile tundlikel finantslehtedel (AVG AntiVirus ja AVG Secure Browser peavad olema installitud)","setting.dntBadge.name":"Kuva kõik jälgijad lehel","setting.dntBadge.desc":"Lisa märk oma brauserile, et näha kohe, kui palju jälgijaid on veebilehel.","setting.dntAutoBlock.name":"Blokeeri automaatselt kõik jälgijad","setting.dntAutoBlock.desc":"Blokeeri kõik leitud jälgijad igal veebilehel, mida sa külastad.","setting.dntSocial.desc":"Blokeeri kõik sotsiaalvõrgu jälgijad","setting.dntAdTracking.desc":"Blokeeri kõik reklaami jälgijad","setting.dntWebAnalytics.desc":"Blokeeri kogu veebianalüütika jälgimine","setting.dntOthers.desc":"Blokeeri kõik muud jälgijad","setting.productAnalysis.name":"Luba analüüsida toote jõudlust ja kasutust uue toote arendamiseks","setting.productAnalysis.tooltip":"Kogume ja saadame oma serveritesse kasutusandmeid laienduse, sisemise laienduse identifikaatori, brauseri tüübi ja versiooni, operatsioonisüsteemi, riigi, keele ning Avasti antiviiruse rakenduse oleku kohta.","setting.urlConsent.name":"Nõusolek URL-i kogumiseks","serp.safe.desc":"See veebileht on turvaline","serp.bad.desc":"See leht võib olla ebausaldusväärne","serp.unknown.desc":"Sellel lehel puudub reiting","serp.unsafe.desc":"See leht ei ole turvaline","topbar.openBankMode":"Ava pangarežiimis","topbar.desc":"Sinu finantsandmed võivad teistele nähtavad olla.","topbar.tooltip":"Avasti antiviirusega koos installitud Avasti turvalise brauseri juurde kuuluv pangarežiim isoleerib turvaliselt ostu- ja pangandussessioonid, et häkkerid ei saaks varastada sinu krediitkaartide numbreid, parooli ja muid isiklikke andmeid.","topbar.dontShowAgain":"Ära näita enam sellel lehel","installPage.consent.title":"Lubad meil ennast kaitsta veebiaadresside kontrollimisega?","installPage.consent.desc":"Sinu nõusolekul vaaame veebilehtede aadresse, mida sa külastad, et saaksime sulle öelda, kas need lehed on turvalised. (Vt meie dokumenti {URL_START}Privaatsuspoliitika{URL_END})","installPage.agreed.title":"Aitäh!","installPage.agreed.desc":"Nüüd kaitseme sind ebaturvaliste veebilehtede eest.","installPage.disagreed.title":"Ei mingit solvumist","installPage.disagreed.desc":"Kui sa ei soovi, et me kontrollime sinu veebiaadresse, siis lihtsalt eemalda {0} Online Security - ja ole ettevaatlik!","installPage.consent.disagree":"Ei, aitäh","installPage.consent.agree":"Jah, kontrolli veebiaadresse","panel.consent.agree":"Kontrolli veebiaadresse"},"fa":{"AVG.title":"امنیت آنلاین","Avast.title":"امنیت آنلاین Avast","global.beta":"بتا","global.detailsShow":"جزئیات","global.detailsHide":"پنهان کردن جزئیات","global.done":"انجام شد","global.leaveSite":"ترک سایت","global.switcher.off":"غ.ف","global.switcher.on":"فع","global.close":"بستن","global.back":"بازگشت","background.icon.unknown":"{0} - سایت ناشناخته","background.icon.safe":"{0} - این وب‌سایت امن است","background.icon.bad":"{0} - این سایت ممکن است نامعتبر باشد","background.icon.unsafe":"{0} - این وب‌سایت ناامن است","security.title":"امنیت","security.safe.title":"این وب‌سایت امن است","security.safe.item1.desc":"بدون فیشینگ","security.safe.item1.tooltip":"ما هیچ تلاشی برای سرقت اطلاعات حساس شما از قبیل رمزهای عبور، شماره کارت‌های اعتباری و غیره در این وب‌سایت پیدا نکردیم.","security.safe.item2.desc":"بدون بدافزار","security.safe.item2.tooltip":"ما هیچ کد خطرناکی در این وب‌سایت تشخیص ندادیم.","security.safe.item3.desc":"مورد اعتماد","security.safe.item3.tooltip":"کاربران {0} این وب‌سایت را از طریق کلیک روی {1} در امنیت آنلاین {0} به عنوان مورد اعتماد رتبه‌بندی کردند.","security.bad.title":"این سایت ممکن است نامطمئن باشد","security.bad.desc":"ما هیچ تهدید‌ فیشینگ یا بدافزار در اینجا پیدا نکردیم، اما بسیاری از کاربران ما برای این سایت شست پایین نشان دادند.","security.unknown.title":"سایت ناشناخته","security.unknown.desc":"ما اطلاعات کافی برای رتبه‌بندی این وب‌سایت نداریم.","security.unsafe.title":"این وب‌سایت ناامن است","security.unsafe.phishing.desc":"این وب‌سایت به عنوان یک سایت فیشینگ علامت‌گذاری شده است. فیشینگ به منزله تلاش برای سرقت اطلاعات حساس از قبیل رمزهای عبور، شماره کارت‌های اعتباری و غیره از شما می‌باشد.","security.unsafe.malware.desc":"ما کد خطرناکی در این وب‌سایت پیدا کردیم که ممکن است به رایانه شما صدمه بزند یا داده‌های شخصی شما را سرقت کند.","rating.question.desc":"آیا به {0} اعتماد دارید؟","rating.negative":"آیا محتوای نامناسب در این وب‌سایت وجود دارد؟ (اختیاری)","rating.thanks":"سپاس از اینکه رتبه‌بندی کردید!","rating.trusted.desc":"شما <i>اعتماد دارید به</i> {0}","rating.untrusted.desc":"شما <i>اعتماد ندارید به</i> {0}","rating.revert.tooltip":"برای حذف رتبه‌بندی خود کلیک کنید","rating.tooltip":"اعتماد یا عدم اعتماد شما در رتبه‌بندی ایمنی ما برای این وب‌سایت لحاظ خواهد شد.","rating.category.pornography":"هرزه‌نگاری","rating.category.violence":"اسلحه / خشونت","rating.category.gambling":"قمار","rating.category.drugs":"الکل / مواد مخدر","rating.category.illegal":"نرم افزار دزدی / غیرقانونی","rating.category.others":"سایر موارد","privacy.title":"حریم خصوصی","privacy.group.Social.desc":"شبکه‌های اجتماعی","privacy.group.Social.block.desc":"مسدود کردن ردیابی همه شبکه‌های اجتماعی","privacy.group.Social.block.tooltip":"این کار، ردیابی شبکه‌های اجتماعی را در همه وب‌سایت‌هایی که بازدید می‌کنید مسدود خواهد کرد.","privacy.group.Social.unblock.desc":"لغو مسدود کردن ردیابی همه شبکه‌های اجتماعی","privacy.group.Social.unblock.tooltip":"این کار، به ردیابی شبکه‌های اجتماعی در همه وب‌سایت‌هایی که بازدید می‌کنید اجازه خواهد داد.","privacy.group.AdTracking.desc":"ردیابی تبلیغات","privacy.group.AdTracking.block.desc":"مسدود کردن همه ردیابی‌های تبلیغات","privacy.group.AdTracking.block.tooltip":"این کار، ردیابی تبلیغات را در همه وب‌سایت‌هایی که بازدید می‌کنید مسدود خواهد کرد.","privacy.group.AdTracking.unblock.desc":"لغو مسدود کردن همه ردیابی‌های تبلیغات","privacy.group.AdTracking.unblock.tooltip":"این کار، به ردیابی تبلیغات در همه وب‌سایت‌هایی که بازدید می‌کنید اجازه خواهد داد.","privacy.group.WebAnalytics.desc":"تحلیل وب","privacy.group.WebAnalytics.block.desc":"مسدود کردن همه ردیابی‌های تحلیل وب","privacy.group.WebAnalytics.block.tooltip":"این ردیابی تحلیل وب را در همه وب‌سایت‌هایی که بازدید می‌کنید مسدود خواهد کرد.","privacy.group.WebAnalytics.unblock.desc":"لغو مسدود کردن همه ردیابی‌های تحلیل وب","privacy.group.WebAnalytics.unblock.tooltip":"این همه ردیابی‌های دبگر را در هر وب‌سایتی که بازدید می‌کنید اجازه خواهد داد.","privacy.group.Others.desc":"سایر موارد","privacy.group.Others.block.desc":"مسدود کردن همه ردیابی‌های دیگر","privacy.group.Others.block.tooltip":"این همه ردیابی‌های دیگر را در هر وب‌سایتی که بازدید می‌کنید مسدود خواهد کرد.","privacy.group.Others.unblock.desc":"لغو مسدود کردن همه ردیابی‌های دیگر","privacy.trackersBlockedAll":"<i>{0} ردیاب</i> در {1} مسدود است | <i>همه {0} ردیاب</i> در {1} مسدود هستند","privacy.trackersBlockedSome":"<i>{0} از {1} ردیاب</i> در {2} مسدود است | <i>{0} از {1} ردیاب</i> در {2} مسدود هستند","privacy.trackersBlockedNone":"<i>{0} سیستم </i> ردیابی در {1} | <i>{0} سیستم </i> ردیابی در {1}","privacy.trackersBlocked":"{0} از {1} مسدود شد","privacy.trackersFound":"{0} یافت شد","privacy.trackersNone":"هیچ چیز","privacy.trackerBlock.desc":"مسدود کردن","privacy.trackerBlock.tooltip":"این [{0}] را در همه وب‌سایت‌هایی که بازدید می‌کنید مسدود خواهد کرد.","privacy.trackerUnblock.desc":"مسدود","privacy.trackerUnblock.tooltip":"این [{0}] را در همه وب‌سایت‌هایی که بازدید می‌کنید لغو انسداد خواهد کرد.","privacy.trackerUnblockOnAutoBlock.tooltip":"برای لغو انسداد یک ردیاب خاص، مسدودسازی خودکار را غیرفعال کنید.","privacy.automaticBlocking.desc":"مسدودسازی خودکار همه ردیاب‌ها","privacy.automaticBlocking.tooltip":"ما به طور خودکار همه ردیاب‌ها را در هر وب‌سایتی که بازدید می‌کنید، مسدود خواهیم کرد.","setting.title":"تنظیمات","setting.serp.name":"علامت‌گذاری همه نتایج جستجو","setting.serp.desc":"افزودن آیکن‌های رنگی به نتایج جستجوی شما در Google،‏ Yahoo!‎ و غیره تا نتایجی که کلیک روی آنها امن است مشخص شوند. (سبز = امن، خاکستری = نامشخص، قرمز = ناامن)","setting.serpPopup.name":"نمایش نکته ابزارها برای نتایج جستجو","setting.serpPopup.desc":"برای مشاهده اطلاعات بیشتر، ماوس را روی آیکن‌ها نگه دارید.","setting.secureBrowser.Avast.name":"Secure Browser","setting.secureBrowser.Avast.desc":"برای استفاده از سایت‌های مالی حساس، به حالت بانکداری اینترنتی بروید (لازم است ضد ویروس Avast و Avast Secure Browser هر دو نصب باشند)","setting.secureBrowser.AVG.name":"Secure Browser","setting.secureBrowser.AVG.desc":"برای سایت‌های مالی حساس، روی حالت بانکداری تنظیم کنید (ضد ویروس AVG و AVG Secure Browser باید نصب شده باشند)","setting.dntBadge.name":"نمایش مجموع ردیاب‌ها در یک سایت","setting.dntBadge.desc":"افزودن یک علامت به مرورگر شما برای مشاهده سریع تعداد ردیاب‌ها در هر وب‌سایت.","setting.dntAutoBlock.name":"مسدودسازی خودکار همه ردیاب‌ها","setting.dntAutoBlock.desc":"مسدود کردن همه ردیاب‌ها در هر وب‌سایتی که بازدید می‌کنید.","setting.dntSocial.desc":"مسدود کردن همه ردیابی‌های شبکه‌های اجتماعی","setting.dntAdTracking.desc":"مسدود کردن همه ردیاب‌های تبلیغات","setting.dntWebAnalytics.desc":"مسدود کردن همه ردیاب‌های تحلیل وب","setting.dntOthers.desc":"مسدود کردن همه ردیاب‌های دیگر","setting.productAnalysis.name":"امکان تحلیل عملکرد محصول و استفاده به منظور توسعه محصول جدید را فراهم می‌آورد","setting.productAnalysis.tooltip":"ما داده‌های مصرف افزونه، شناسه افزونه داخلی، نوع و نسخه مرورگر، سیستم عامل، کشور، زبان و وضعیت برنامه ضد ویروس Avast را گردآوری کرده و به سرورهای خود ارسال می‌کنیم.","setting.urlConsent.name":"موافقت با گردآوری URL","serp.safe.desc":"این وب‌سایت امن است","serp.bad.desc":"این سایت ممکن است نامطمئن باشد","serp.unknown.desc":"این سایت رتبه‌بندی ندارد","serp.unsafe.desc":"این سایت ناامن است","topbar.openBankMode":"باز کردن در حالت بانکداری اینترنتی","topbar.desc":"ممکن است دیگران قادر به رویت داده‌های مالی شما باشند.","topbar.tooltip":"حالت بانکداری اینترنتی به عنوان بخشی از قابلیت Avast Secure Browser به همراه ضد ویروس Avast شما نصب می‌شود و فعالیت‌های خرید و بانکداری شما را از سایر گشت و گذارهای اینترنتی مجزا می‌کند تا هکرها فرصتی برای سرقت شماره کارت‌های اعتباری، رمزهای عبور و همچنین سایر داده‌های شخصی شما نداشته باشند.","topbar.dontShowAgain":"دیگر برای این سایت نشان داده نشود","installPage.consent.title":"اجازه می‌دهید با اسکن کردن آدرس‌های وب از شما محافظت کنیم؟","installPage.consent.desc":"در صورتیکه موافقت کنید، ما آدرس وب‌سایت‌هایی که بازدید می‌کنید را بررسی خواهیم کرد تا بتوانیم ایمن بودن آنها را به شما اعلام کنیم. ({URL_START}سیاست حریم خصوصی{URL_END} ما را ملاحظه کنید)","installPage.agreed.title":"سپاسگزاریم!","installPage.agreed.desc":"اکنون شما را در مقابل وب‌سایت‌های ناامن محافظت می‌کنیم.","installPage.disagreed.title":"سخت نگیرید","installPage.disagreed.desc":"در صورتی که مایل نیستید آدرس‌های وب شما را اسکن کنیم، کافیست نصب ‎{0} Online Security را لغو کنید – و خودتان مراقبت امنیت‌تان باشید!","installPage.consent.disagree":"خیلی متشکرم","installPage.consent.agree":"بلی، آدرس‌های وب اسکن شوند","panel.consent.agree":"اسکن کردن آدرس‌های وب"},"fi":{"AVG.title":"Online Security","Avast.title":"Avast Online Security","global.beta":"Beta","global.detailsShow":"Lisätiedot","global.detailsHide":"Piilota lisätiedot","global.done":"Valmis","global.leaveSite":"Poistu sivustolta","global.switcher.off":"OFF","global.switcher.on":"ON","global.close":"Sulje","global.back":"Takaisin","background.icon.unknown":"{0} - tuntematon sivusto","background.icon.safe":"{0} - Tämä sivusto on turvallinen","background.icon.bad":"{0} - sivusto voi olla epäluotettava","background.icon.unsafe":"{0} - Tämä sivusto ei ole turvallinen","security.title":"Turvallisuus","security.safe.title":"Tämä sivusto on turvallinen","security.safe.item1.desc":"Ei tietojenkalastelua","security.safe.item1.tooltip":"Tällä sivustolla ei havaittu yrityksiä varastaa luottamuksellisia tietoja kuten salasanoja, luottokorttinumeroita jne.","security.safe.item2.desc":"Ei haittaohjelmia","security.safe.item2.tooltip":"Tällä sivustolla ei havaittu haitallista koodia.","security.safe.item3.desc":"Luotettu","security.safe.item3.tooltip":"{0} käyttäjää on arvioinut tämän sivuston turvalliseksi napsauttamalla {1} {0} Online Securityssä.","security.bad.title":"Sivusto voi olla epäluotettava","security.bad.desc":"Emme havainneet kalasteluyrityksiä tai haittaohjelmia, mutta monet käyttäjät ovat arvioineet sivuston epäluotettavaksi.","security.unknown.title":"Tuntematon sivusto","security.unknown.desc":"Meillä ei ole vielä tarpeeksi tietoja tämän sivuston arvioimiseksi.","security.unsafe.title":"Tämä sivusto ei ole turvallinen","security.unsafe.phishing.desc":"Tämä sivusto on merkitty tietojenkalastelusivustoksi. Tietojenkalastelu on yritys varastaa luottamuksellisia tietoja kuten salasanoja, luottokorttinumeroita jne.","security.unsafe.malware.desc":"Olemme havainneet tällä sivustolla haitallista koodia, joka voi vahingoittaa tietokonetta tai varastaa yksityisiä tietoja.","rating.question.desc":"Luotatko sivustoon {0}?","rating.negative":"Onko tällä sivustolla sopimatonta sisältöä? (valinnainen)","rating.thanks":"Kiitos luokituksesta!","rating.trusted.desc":"<i>Luotat</i> sivustoon {0}","rating.untrusted.desc":"<i>Et luota</i> sivustoon {0}","rating.revert.tooltip":"Napsauta poistaaksesi luokituksen","rating.tooltip":"Luottamus tai epäluottamus otetaan huomioon tämän sivuston turvallisuusarvioinnissa.","rating.category.pornography":"Pornografiaa","rating.category.violence":"Aseita / Väkivaltaa","rating.category.gambling":"Uhkapelejä","rating.category.drugs":"Alkoholia / Huumeita","rating.category.illegal":"Laittomia ohjelmia","rating.category.others":"Muut","privacy.title":"Yksityisyys","privacy.group.Social.desc":"Sosiaaliset verkostot","privacy.group.Social.block.desc":"Estä kaikki sosiaalisten verkostojen seuranta","privacy.group.Social.block.tooltip":"Tämä estää sosiaalisia verkostoja seuraamasta, millä sivustoilla käyt.","privacy.group.Social.unblock.desc":"Poista kaikki sosiaalisten verkostojen seuranta","privacy.group.Social.unblock.tooltip":"Tämä antaa sosiaalisten verkostojen seurata, millä sivustoilla käyt.","privacy.group.AdTracking.desc":"Mainosseuranta","privacy.group.AdTracking.block.desc":"Estä kaikki mainosseuranta","privacy.group.AdTracking.block.tooltip":"Tämä estää mainostajia seuraamasta, millä sivustoilla käyt.","privacy.group.AdTracking.unblock.desc":"Poista mainosseurannan esto","privacy.group.AdTracking.unblock.tooltip":"Tämä antaa mainostajien seurata, millä sivustoilla käyt.","privacy.group.WebAnalytics.desc":"Verkkoanalyysit","privacy.group.WebAnalytics.block.desc":"Estä kaikki verkkoanalyysiseuranta","privacy.group.WebAnalytics.block.tooltip":"Tämä estää verkkoanalysoijia seuraamasta, millä sivustoilla käyt.","privacy.group.WebAnalytics.unblock.desc":"Poista verkkoanalyysien seurannan esto","privacy.group.WebAnalytics.unblock.tooltip":"Tämä antaa muiden tahojen seurata, millä sivustoilla käyt.","privacy.group.Others.desc":"Muut","privacy.group.Others.block.desc":"Estä kaikki muu seuranta","privacy.group.Others.block.tooltip":"Tämä estää muita tahoja seuraamasta, millä sivustoilla käyt.","privacy.group.Others.unblock.desc":"Poista muun seurannan esto","privacy.trackersBlockedAll":"<i>{0} seuraaja</i> estetty sivustolla {1} | <i>Kaikki {0} seurainta</i> estetty sivustolla {1}","privacy.trackersBlockedSome":"<i>{0} seuraaja {1} seuraajasta</i> estetty sivustolla {2} | <i>{0} seurainta {1} seuraimesta</i> estetty sivustolla {2}","privacy.trackersBlockedNone":"<i>{0} seurainjärjestelmä</i> kohteessa {1} | <i>{0} seurainjärjestelmää</i> kohteessa {1}","privacy.trackersBlocked":"{0}/{1} estetty","privacy.trackersFound":"{0} löytynyt","privacy.trackersNone":"ei toimenpiteitä","privacy.trackerBlock.desc":"Estä","privacy.trackerBlock.tooltip":"Tämä estää kohteen [{0}] kaikilla sivustoilla, joilla käyt.","privacy.trackerUnblock.desc":"Estetty","privacy.trackerUnblock.tooltip":"Tämä poistaa kohteen [{0}] eston kaikilla sivustoilla, joilla käyt.","privacy.trackerUnblockOnAutoBlock.tooltip":"Ota automaattinen esto pois päältä poistaaksesi tietyn seuraimen eston.","privacy.automaticBlocking.desc":"Estä automaattisesti kaikki seuraimet","privacy.automaticBlocking.tooltip":"Kaikki havaitut seuraimet estetään automaattisesti kaikilla sivustoilla, joilla käyt.","setting.title":"Asetukset","setting.serp.name":"Merkitse hakutulokset","setting.serp.desc":"Lisää värilliset kuvakkeet Google-, Yahoo!- ym. hakujen tuloksiin, jotta voin nähdä, mitkä tulokset ovat turvallisia. (Vihreä = turvallinen, harmaa = tuntematon, punainen = ei-turvallinen)","setting.serpPopup.name":"Näytä työkaluvihjeet hakutuloksissa","setting.serpPopup.desc":"Näytä lisätiedot vedettäessä hiiri kuvakkeiden päälle.","setting.secureBrowser.Avast.name":"Secure Browser","setting.secureBrowser.Avast.desc":"Käynnistä Pankkitila, kun alat käyttää esimerkiksi verkkopankkia (vaatii Avast Antiviruksen ja Avast Secure Browser -selaimen)","setting.secureBrowser.AVG.name":"Secure Browser","setting.secureBrowser.AVG.desc":"Siirry Pankkitilaan, kun alat käyttää esimerkiksi verkkopankkia (vaatii AVG AntiViruksen ja AVG Secure Browser -selaimen)","setting.dntBadge.name":"Näytä sivuston seuraimien kokonaismäärä","setting.dntBadge.desc":"Lisää selaimeesi kuvake, josta näkee heti sivuston seuraimien määrän.","setting.dntAutoBlock.name":"Estä automaattisesti kaikki seuraimet","setting.dntAutoBlock.desc":"Estä kaikki seuraimet kaikilla sivustoilla, joilla käyt.","setting.dntSocial.desc":"Estä kaikki sosiaalisten verkostojen seuraimet","setting.dntAdTracking.desc":"Estä kaikki mainosseuraimet","setting.dntWebAnalytics.desc":"Estä kaikki verkkoanalyysiseuraimet","setting.dntOthers.desc":"Estä kaikki muu seuraimet","setting.productAnalysis.name":"Salli tuotteen suorituskyvyn ja käytön analysointi tuotekehitystä varten","setting.productAnalysis.tooltip":"Keräämme ja lähetämme palvelimillemme seuraavia käyttäjätietoja: laajennuksen käyttötiedot, sisäinen laajennuksen tunniste, selain ja sen versio, käyttöjärjestelmä, maa, kieli ja Avast-virustorjuntaohjelman tila.","setting.urlConsent.name":"Lupa URL-osoitteiden keräämiseen","serp.safe.desc":"Tämä sivusto on turvallinen","serp.bad.desc":"Tämä sivusto voi olla epäluotettava","serp.unknown.desc":"Tätä sivustoa ei ole luokiteltu","serp.unsafe.desc":"Tämä sivusto ei ole turvallinen","topbar.openBankMode":"Avaa Pankkitilassa","topbar.desc":"Talous- ja rahatietosi saattavat näkyä muille.","topbar.tooltip":"Pankkitila on osa Avast Secure selainta, joka on asennettu Avast-virustorjuntaohjelmistosi kanssa. Se eristää suojatusti ostos- ja pankki-istunnot ja estää hakkereita varastamasta luottokorttinumeroita, salasanoja ja muita yksityisiä tietojasi.","topbar.dontShowAgain":"Älä näytä enää uudelleen tällä sivustolla","installPage.consent.title":"Sallitko, että suojaamme sinua skannaamalla verkko-osoitteita?","installPage.consent.desc":"Jos sallit, katsomme, millä verkkosivustoilla käyt, jotta voimme tarkistaa, ovatko ne turvallisia. (Katso {URL_START}Tietosuojakäytäntömme{URL_END})","installPage.agreed.title":"Kiitos!","installPage.agreed.desc":"Suojaamme sinua nyt haitallisilta verkkosivustoilta.","installPage.disagreed.title":"Ei mikään ongelma","installPage.disagreed.desc":"Jos et halua, että tarkistamme verkko-osoitteita, poista {0} Online Securityn asennus - ja pidä varasi netissä!","installPage.consent.disagree":"Ei kiitos","installPage.consent.agree":"Kyllä, tarkista verkko-osoitteet","panel.consent.agree":"Tarkista verkko-osoitteet"},"fr":{"AVG.title":"Online Security","Avast.title":"Avast Online Security","global.beta":"Bêta","global.detailsShow":"Détails","global.detailsHide":"Masquer les détails","global.done":"Terminé","global.leaveSite":"Quitter le site","global.switcher.off":"OFF","global.switcher.on":"ON","global.close":"Fermer","global.back":"Retour","background.icon.unknown":"{0} - Site inconnu","background.icon.safe":"{0} - Ce site Web est sûr","background.icon.bad":"{0} - Ce site peut être indigne de confiance","background.icon.unsafe":"{0} - Ce site Web n\'est pas sûr","security.title":"Sécurité","security.safe.title":"Ce site Web est sûr","security.safe.item1.desc":"Aucun hameçonnage","security.safe.item1.tooltip":"Nous n’avons détecté aucune tentative de dérober des informations sensibles comme les mots de passe, les numéros de carte de crédit, etc. sur ce site Web.","security.safe.item2.desc":"Aucun malware","security.safe.item2.tooltip":"Nous n’avons détecté aucun code malveillant sur ce site Web.","security.safe.item3.desc":"Digne de confiance","security.safe.item3.tooltip":"{0} utilisateurs ont évalué ce site comme digne de confiance en cliquant sur {1} dans {0} Online Security.","security.bad.title":"Peut-être pas digne de confiance","security.bad.desc":"Nous n\'avons trouvé aucune menace de hameçonnage ou malware ici, mais beaucoup de nos utilisateurs ont donné au site un coup de pouce vers le bas.","security.unknown.title":"Site inconnu","security.unknown.desc":"Nous n’avons pas encore suffisamment d’informations pour évaluer ce site Web.","security.unsafe.title":"Ce site Web n\'est pas sûr","security.unsafe.phishing.desc":"Ce site a été marqué comme un site de hameçonnage. L’hameçonnage est une tentative de voler vos informations sensibles comme mots de passe, numéros de carte de crédit, etc.","security.unsafe.malware.desc":"Nous avons trouvé un code malveillant sur ce site Web qui pourrait endommager votre ordinateur ou voler vos données personnelles.","rating.question.desc":"Faites-vous confiance à {0} ?","rating.negative":"Du contenu inapproprié sur ce site Web ? (facultatif)","rating.thanks":"Merci pour votre évaluation !","rating.trusted.desc":"Vous <i> faites confiance</i> à {0}","rating.untrusted.desc":"Vous <i>ne faites pas confiance</i> à {0}","rating.revert.tooltip":"Cliquez pour supprimer votre évaluation","rating.tooltip":"Votre confiance ou méfiance sera prise en compte dans notre évaluation de sécurité pour ce site Web.","rating.category.pornography":"Pornographie","rating.category.violence":"Armes / Violence","rating.category.gambling":"Jeux de hasard","rating.category.drugs":"Alcool / Drogues","rating.category.illegal":"Warez / Illégal","rating.category.others":"Autres","privacy.title":"Confidentialité","privacy.group.Social.desc":"Réseaux sociaux","privacy.group.Social.block.desc":"Bloquer le suivi de tous les réseaux sociaux","privacy.group.Social.block.tooltip":"Cela bloquera le suivi des réseaux sociaux sur chaque site Web que vous visitez.","privacy.group.Social.unblock.desc":"Débloquer le suivi de tous les réseaux sociaux","privacy.group.Social.unblock.tooltip":"Cela activera le suivi des réseaux sociaux sur chaque site Web que vous visitez.","privacy.group.AdTracking.desc":"Suivi de publicité","privacy.group.AdTracking.block.desc":"Bloquer tout suivi des publicités","privacy.group.AdTracking.block.tooltip":"Cela bloquera le suivi de la publicité sur chaque site Web que vous visitez.","privacy.group.AdTracking.unblock.desc":"Débloquer le suivi de la publicité","privacy.group.AdTracking.unblock.tooltip":"Cela activera le suivi de la publicité sur chaque site Web que vous visitez.","privacy.group.WebAnalytics.desc":"Mesure d\'audience","privacy.group.WebAnalytics.block.desc":"Bloquer tout suivi de la mesure d\'audience","privacy.group.WebAnalytics.block.tooltip":"Cela bloquera le suivi de la mesure d\'audience sur chaque site Web que vous visitez.","privacy.group.WebAnalytics.unblock.desc":"Débloquer le suivi de la mesure d\'audience","privacy.group.WebAnalytics.unblock.tooltip":"Cela activera tous les autres suivis sur chaque site Web que vous visitez.","privacy.group.Others.desc":"Autres","privacy.group.Others.block.desc":"Bloquer tous les autres suivis","privacy.group.Others.block.tooltip":"Cela bloquera tous les autres suivis sur chaque site Web que vous visitez.","privacy.group.Others.unblock.desc":"Débloquer tous les autres suivis","privacy.trackersBlockedAll":"<i>Tous les {0} trackers</i> bloqués sur {1} | <i>Tous les {0} trackers</i> bloqués sur {1}","privacy.trackersBlockedSome":"<i>{0} sur {1} tracker</i> bloqué sur {2} | <i>{0} sur {1} trackers</i> bloqués sur {2}","privacy.trackersBlockedNone":"<i>{0} systèmes de suivi</i> sur {1} | <i>{0} systèmes de suivi</i> sur {1}","privacy.trackersBlocked":"{0} sur {1} bloqués","privacy.trackersFound":"{0} trouvés","privacy.trackersNone":"aucun","privacy.trackerBlock.desc":"Bloquer","privacy.trackerBlock.tooltip":"Cela bloquera [{0}] sur chaque site Web que vous visitez.","privacy.trackerUnblock.desc":"Bloqué","privacy.trackerUnblock.tooltip":"Cela débloquera [{0}] sur chaque site Web que vous visitez.","privacy.trackerUnblockOnAutoBlock.tooltip":"Pour débloquer un tracker spécifique, désactivez le blocage automatique.","privacy.automaticBlocking.desc":"Blocage automatique de tous les trackers","privacy.automaticBlocking.tooltip":"Nous bloquerons automatiquement tous les trackers trouvés sur chaque site Web que vous visitez.","setting.title":"Paramètres","setting.serp.name":"Marquer mes résultats de recherche","setting.serp.desc":"Ajouter des icônes colorées aux résultats de votre recherche sur Google, Yahoo!, etc. pour voir quels résultats sont sûrs à cliquer. (Vert = Sûr, Gris = Inconnu, Rouge = Non sûr)","setting.serpPopup.name":"Afficher les info-bulles des résultats de recherche","setting.serpPopup.desc":"Passez votre souris sur nos icônes pour afficher plus d’informations.","setting.secureBrowser.Avast.name":"Secure Browser","setting.secureBrowser.Avast.desc":"Passer au Mode Bancaire pour les sites financiers sensibles (Avast Antivirus et Avast Secure Browser doivent être installés)","setting.secureBrowser.AVG.name":"Secure Browser","setting.secureBrowser.AVG.desc":"Passer au Mode Bancaire pour les sites sensibles (nécessite AVG Antivirus et AVG Secure Browser installés)","setting.dntBadge.name":"Affichage de tous les trackers sur un site","setting.dntBadge.desc":"Ajoutez un badge à votre navigateur pour voir immédiatement combien de trackers sont sur un site Web.","setting.dntAutoBlock.name":"Blocage automatique de tous les trackers","setting.dntAutoBlock.desc":"Bloquez tous les trackers trouvés sur chaque site Web que vous visitez.","setting.dntSocial.desc":"Bloquer tous les trackers des réseaux sociaux","setting.dntAdTracking.desc":"Bloquer tous les trackers des publicités","setting.dntWebAnalytics.desc":"Bloquer tous les trackers de mesure d\'audience","setting.dntOthers.desc":"Bloquer tous les autres trackers","setting.productAnalysis.name":"Autoriser l\'analyse des performances et de l\'utilisation du produit pour le développement de nouveaux produits","setting.productAnalysis.tooltip":"Nous collectons et envoyons à nos serveurs les données d\'utilisation de l\'extension et son identifiant interne, le type et la version du navigateur, le système d\'exploitation, le pays, la langue et l\'état de l\'application antivirus Avast.","setting.urlConsent.name":"Autoriser la collecte d\'URL","serp.safe.desc":"Ce site Web est sûr","serp.bad.desc":"Ce site peut être indigne de confiance","serp.unknown.desc":"Ce site n\'a pas été évalué","serp.unsafe.desc":"Ce site n\'est pas sûr","topbar.openBankMode":"Ouvrir en Mode bancaire","topbar.desc":"Vos données financières peuvent être accessibles à d\'autres personnes.","topbar.tooltip":"Le Mode bancaire, partie intégrante du Avast Secure Browser installé avec votre antivirus Avast, isole en toute sécurité vos sessions shopping et vos transactions bancaires pour empêcher les pirates de voler vos numéros de carte de crédit, vos mots de passe et autres données privées.","topbar.dontShowAgain":"Ne plus afficher ce site à l\'avenir","installPage.consent.title":"Nous autoriser à analyser les adresses Web pour vous protéger ?","installPage.consent.desc":"Si vous nous y autorisez, nous analyserons les adresses des sites Web que vous visitez afin de vous indiquer s\'ils sont sûrs (consultez notre {URL_START}Politique de confidentialité{URL_END}).","installPage.agreed.title":"Merci !","installPage.agreed.desc":"Nous vous protégeons désormais des sites Web non sécurisés.","installPage.disagreed.title":"Sans rancune","installPage.disagreed.desc":"Si vous ne souhaitez pas que nous analysions vos adresses Web, désinstallez {0} Online Security et faites attention à vous !","installPage.consent.disagree":"Non, merci","installPage.consent.agree":"Oui, analyser les adresses Web","panel.consent.agree":"Analyser les adresses Web"},"he":{"AVG.title":"Online Security","Avast.title":"Avast Online Security","global.beta":"בטא","global.detailsShow":"פרטים","global.detailsHide":"הסתר פרטים","global.done":"סיום","global.leaveSite":"צא מהאתר","global.switcher.off":"OFF","global.switcher.on":"ON","global.close":"סגור","global.back":"הקודם","background.icon.unknown":"{0} - אתר לא מוכר","background.icon.safe":"{0} - האתר הזה בטוח","background.icon.bad":"{0} - ייתכן שהאתר הזה לא בטוח","background.icon.unsafe":"{0} - האתר הזה לא בטוח","security.title":"אבטחה","security.safe.title":"האתר הזה בטוח","security.safe.item1.desc":"אין דיוג","security.safe.item1.tooltip":"לא זיהינו באתר הזה ניסיונות לגנוב מידע רגיש, כגון סיסמאות, מספרי כרטיס אשראי וכדומה.","security.safe.item2.desc":"אין תוכנה זדונית","security.safe.item2.tooltip":"לא זיהינו קוד זדוני באתר הזה.","security.safe.item3.desc":"אמין","security.safe.item3.tooltip":"{0} משתמשים דירגו את האתר הזה כאמין בלחיצה על {1} ב-Online Security של {0}.","security.bad.title":"עלול להיות לא בטוח","security.bad.desc":"לא מצאנו כאן איומי דיוג או תוכנה זדונית, אבל משתמשים רבים שלנו דירגו את האתר הזה כלא בטוח.","security.unknown.title":"אתר לא מוכר","security.unknown.desc":"בינתיים אין לנו מספיק מידע בשביל לדרג את האתר הזה.","security.unsafe.title":"האתר הזה לא בטוח","security.unsafe.phishing.desc":"האתר הזה סומן כאתר דיוג. דיוג הוא ניסיון לגנוב מידע רגיש, כגון סיסמאות, מספרי כרטיס אשראי וכדומה.","security.unsafe.malware.desc":"מצאנו באתר הזה קוד זדוני שיכול להזיק למחשב או לגנוב ממך נתונים פרטיים.","rating.question.desc":"האם אתה בוטח ב-{0}?","rating.negative":"יש תוכן לא הולם באתר הזה? (אופציונלי)","rating.thanks":"תודה שדירגת!","rating.trusted.desc":"אתה <i>בוטח</i> ב-{0}","rating.untrusted.desc":"אתה <i>לא בוטח</i> ב-{0}","rating.revert.tooltip":"לחץ להסרת הדירוג","rating.tooltip":"האמון או חוסר האמון שלך יובא בחשבון בדירוג הבטיחות של האתר הזה אצלנו.","rating.category.pornography":"פורנוגרפיה","rating.category.violence":"נשק / אלימות","rating.category.gambling":"הימורים","rating.category.drugs":"אלכוהול / סמים","rating.category.illegal":"תוכניות פירטיות / לא חוקיות","rating.category.others":"אחר","privacy.title":"פרטיות","privacy.group.Social.desc":"רשתות חברתיות","privacy.group.Social.block.desc":"חסום את כל מעקבי הרשתות החברתיות","privacy.group.Social.block.tooltip":"מעקבי הרשתות החברתיות ייחסמו בכל האתרים שתיכנס אליהם.","privacy.group.Social.unblock.desc":"בטל את חסימת מעקבי הרשתות החברתיות","privacy.group.Social.unblock.tooltip":"מעקבי הרשתות החברתיות יתאפשרו בכל האתרים שתיכנס אליהם.","privacy.group.AdTracking.desc":"מעקב פרסומות","privacy.group.AdTracking.block.desc":"חסום את כל מעקבי הפרסומות","privacy.group.AdTracking.block.tooltip":"מעקבי הפרסומות ייחסמו בכל האתרים שתיכנס אליהם.","privacy.group.AdTracking.unblock.desc":"בטל את חסימת מעקבי הפרסומות","privacy.group.AdTracking.unblock.tooltip":"מעקבי הפרסומות יתאפשרו בכל האתרים שתיכנס אליהם.","privacy.group.WebAnalytics.desc":"ניתוחי תנועת גולשים","privacy.group.WebAnalytics.block.desc":"חסום את כל מעקבי ניתוח תנועת הגולשים","privacy.group.WebAnalytics.block.tooltip":"מעקבי ניתוח תנועת הגולשים ייחסמו בכל האתרים שתיכנס אליהם.","privacy.group.WebAnalytics.unblock.desc":"בטל את החסימה של מעקבי ניתוח תנועת הגולשים","privacy.group.WebAnalytics.unblock.tooltip":"מעקבים נוספים יתאפשרו בכל האתרים שתיכנס אליהם.","privacy.group.Others.desc":"אחר","privacy.group.Others.block.desc":"חסום את כל שאר המעקבים","privacy.group.Others.block.tooltip":"מעקבים נוספים ייחסמו בכל האתרים שתיכנס אליהם.","privacy.group.Others.unblock.desc":"בטל את חסימת שאר המעקבים","privacy.trackersBlockedAll":"<i> העוקב ({0})</i> נחסם באתר {1} | <i> כל {0} העוקבים</i> נחסמו באתר {1} | <i>כל {0} העוקבים</i> נחסמו באתר {1} | <i>כל {0} העוקבים</i> נחסמו באתר {1}","privacy.trackersBlockedSome":"<i>{0} מתוך {1} עוקב</i> נחסם באתר {2} | <i>{0} מתוך {1} עוקבים</i> נחסמו באתר {2} | <i>{0} מתוך {1} עוקבים</i> נחסמו באתר {2} | <i>{0} מתוך {1} עוקבים</i> נחסמו באתר {2}","privacy.trackersBlockedNone":"<i>{0} מערכת מעקב</i> באתר {1} | <i>{0} מערכות מעקב</i> באתר {1} | <i>{0} מערכות מעקב</i> באתר {1} | <i>{0} מערכות מעקב</i> באתר {1}","privacy.trackersBlocked":"נחסמו {0} מתוך {1}","privacy.trackersFound":"נמצאו {0}","privacy.trackersNone":"שום דבר","privacy.trackerBlock.desc":"חסום","privacy.trackerBlock.tooltip":"העוקב [{0}] ייחסם בכל האתרים שתיכנס אליהם.","privacy.trackerUnblock.desc":"חסום","privacy.trackerUnblock.tooltip":"העוקב [{0}] לא ייחסם בכל האתרים שתיכנס אליהם.","privacy.trackerUnblockOnAutoBlock.tooltip":"כדי לבטל את החסימה של עוקב מסוים, כבה את החסימה האוטומטית.","privacy.automaticBlocking.desc":"חסום את כל העוקבים אוטומטית","privacy.automaticBlocking.tooltip":"אנחנו נחסום אוטומטית את כל העוקבים שנמצא בכל האתרים שתיכנס אליהם.","setting.title":"הגדרות","setting.serp.name":"סמן את תוצאות החיפוש","setting.serp.desc":"הוסף לתוצאות החיפוש ב-Google, ב-Yahoo!‎ וכו\' אייקונים צבעוניים לסימון התוצאות שבטוח ללחוץ עליהן. (ירוק = בטוח, אפור = לא ידוע, אדום = לא בטוח)","setting.serpPopup.name":"הצג הודעות tooltip בתוצאות החיפוש","setting.serpPopup.desc":"הצב את סמן העכבר מעל האייקונים שלנו להצגת מידע נוסף.","setting.secureBrowser.Avast.name":"Secure Browser","setting.secureBrowser.Avast.desc":"עבור ל\'מצב בנק\' באתרים פיננסיים רגישים (מחייב התקנה של Avast Antivirus‎ ושל Avast Secure Browser)","setting.secureBrowser.AVG.name":"Secure Browser","setting.secureBrowser.AVG.desc":"עבור ל\'מצב בנק\' באתרים פיננסיים רגישים (מחייב התקנה של AVG AntiVirus‎ ושל AVG Secure Browser)","setting.dntBadge.name":"הצג את סך כול העוקבים באתר","setting.dntBadge.desc":"הוסף לדפדפן תג ותראה מיד כמה עוקבים יש בכל אתר.","setting.dntAutoBlock.name":"חסום את כל העוקבים אוטומטית","setting.dntAutoBlock.desc":"חסום אוטומטית את כל העוקבים שיימצאו בכל האתרים שתיכנס אליהם.","setting.dntSocial.desc":"חסום את כל עוקבי הרשתות החברתיות","setting.dntAdTracking.desc":"חסום את כל עוקבי הפרסומות","setting.dntWebAnalytics.desc":"חסום את כל עוקבי ניתוח תנועת הגולשים","setting.dntOthers.desc":"חסום את כל שאר העוקבים","setting.productAnalysis.name":"אפשר ניתוח של ביצועי המוצר ושל השימוש במוצר, בשביל פיתוח מוצרים חדשים","setting.productAnalysis.tooltip":"אנחנו אוספים ושולחים לשרתים שלנו נתונים על ההרחבה, המזהה הפנימי של ההרחבה, סוג הדפדפן והגרסה, מערכת ההפעלה, המדינה, השפה והסטטוס של יישום האנטי-וירוס של Avast.","setting.urlConsent.name":"הסכמה לאיסוף כתובת URL","serp.safe.desc":"האתר הזה בטוח","serp.bad.desc":"ייתכן שהאתר הזה לא בטוח","serp.unknown.desc":"לאתר הזה אין דירוג","serp.unsafe.desc":"האתר הזה לא בטוח","topbar.openBankMode":"פתח ב\'מצב בנק\'","topbar.desc":"ייתכן שאנשים אחרים יכולים לראות את הנתונים הכספיים שלך.","topbar.tooltip":"\'מצב בנק\', חלק ב-Avast Secure Browser המותקן עם האנטי-וירוס של Avast ומבודד סשנים של קניות וסשנים בנקאיים באופן בטוח כדי לעצור האקרים שמנסים לגנוב את מספרי כרטיסי האשראי, הסיסמאות ועוד נתונים פרטיים שלך.","topbar.dontShowAgain":"אל תציג את ההודעה באתר הזה שוב","installPage.consent.title":"מרשה לנו להגן עליך על ידי סריקה של כתובות אינטרנט?","installPage.consent.desc":"אם תסכים, נסתכל על כתובות האתרים שתבחר להיכנס אליהם, ונגיד לך אם האתרים האלה בטוחים. (עיין ב{URL_START}מדיניות הפרטיות{URL_END})","installPage.agreed.title":"תודה!","installPage.agreed.desc":"עכשיו אנחנו שומרים עליך מפני אתרים לא בטוחים.","installPage.disagreed.title":"זה בסדר","installPage.disagreed.desc":"אם אינך רוצה שנסרוק את כתובות האינטרנט, פשוט הסר את ההתקנה של {0} Online Security. ושמור על עצמך!","installPage.consent.disagree":"לא, תודה","installPage.consent.agree":"כן, סרוק כתובות אינטרנט","panel.consent.agree":"סרוק כתובות אינטרנט"},"hi":{"AVG.title":"Online Security","Avast.title":"Avast Online Security","global.beta":"बीटा","global.detailsShow":"विवरण","global.detailsHide":"विवरण छिपाएँ","global.done":"पूर्ण","global.leaveSite":"साइट छोड़ें","global.switcher.off":"बंद","global.switcher.on":"ऑन","global.close":"बंद करें","global.back":"वापस","background.icon.unknown":"{0} - अज्ञात साइट","background.icon.safe":"{0} - यह वेबसाइट सुरक्षित है","background.icon.bad":"{0} - यह साइट अविश्वसनीय हो सकती है","background.icon.unsafe":"{0} - यह वेबसाइट असुरक्षित है","security.title":"सुरक्षा","security.safe.title":"यह वेबसाइट सुरक्षित है","security.safe.item1.desc":"कोई फ़िशिंग नहीं","security.safe.item1.tooltip":"हमें इस वेबसाइट पर पासवर्ड, क्रेडिट कार्ड नंबर आदि जैसी संवेदनशील जानकारी चुराने के किसी भी प्रयास का पता नहीं चला है।","security.safe.item2.desc":"कोई मालवेयर नहीं","security.safe.item2.tooltip":"हमें इस वेबसाइट पर किसी दुर्भावनापूर्ण कोड का पता नहीं चला है।","security.safe.item3.desc":"विश्वसनीय","security.safe.item3.tooltip":"{0} उपयोगकर्ताओं ने {1} पर क्लिक करके {0} Online Security के अंतर्गत, इस वेबसाइट को भरोसेमंद माना है|","security.bad.title":"यह अविश्वसनीय हो सकती है","security.bad.desc":"हमें यहां फ़िशिंग संबंधी किसी ख़तरे या मालवेयर का पता नहीं चला, लेकिन हमारे कई उपयोगकर्ताओं के साइट को नापसंद किया है।","security.unknown.title":"अज्ञात साइट","security.unknown.desc":"इस वेबसाइट की रेटिंग के लिए, अभी हमारे पास पर्याप्त जानकारी नहीं है।","security.unsafe.title":"यह वेबसाइट असुरक्षित है","security.unsafe.phishing.desc":"इस वेबसाइट को फ़िशिंग साइट के रूप में चिह्नित किया गया है। फ़िशिंग, पासवर्ड, क्रेडिट कार्ड नंबर आदि जैसी आपकी संवेदनशील जानकारी चुराने का प्रयास है।","security.unsafe.malware.desc":"हमें इस वेबसाइट पर ऐसे दुर्भावनापूर्ण कोड का पता चला है जो आपके कंप्यूटर को नुकसान पहुंचा सकता है या आपका निजी डेटा चुरा सकता है।","rating.question.desc":"क्या आप {0} पर भरोसा करते हैं?","rating.negative":"इस वेबसाइट पर कोई अनुचित सामग्री है? (वैकल्पिक)","rating.thanks":"रेटिंग के लिए धन्यवाद!","rating.trusted.desc":"आप {0} पर <i>विश्वास</i> करते हैं","rating.untrusted.desc":"आप {0} पर <i>विश्वास नहीं</i> करते हैं","rating.revert.tooltip":"अपनी रेटिंग हटाने के लिए क्लिक करें","rating.tooltip":"आपका विश्वास या अविश्वास इस वेबसाइट के लिए हमारी सुरक्षा की रेटिंग में दिखाई देगा।","rating.category.pornography":"पोर्नोग्राफ़ी","rating.category.violence":"हथियार / हिंसा","rating.category.gambling":"जुआ","rating.category.drugs":"शराब / ड्रग","rating.category.illegal":"वारेज़ / अवैध","rating.category.others":"अन्य","privacy.title":"गोपनीयता","privacy.group.Social.desc":"सामाजिक नेटवर्क","privacy.group.Social.block.desc":"सभी सामाजिक नेटवर्क ट्रैकिंग ब्लॉक करें","privacy.group.Social.block.tooltip":"यह आपके द्वारा विज़िट की जाने वाली प्रत्येक वेबसाइट पर सामाजिक नेटवर्क की ट्रैकिंग को ब्लॉक कर देगा।","privacy.group.Social.unblock.desc":"सभी सामाजिक नेटवर्क ट्रैकिंग अनब्लॉक करें","privacy.group.Social.unblock.tooltip":"यह आपके द्वारा विज़िट की जाने वाली प्रत्येक वेबसाइट पर सामाजिक नेटवर्क की ट्रैकिंग की अनुमति देगा।","privacy.group.AdTracking.desc":"विज्ञापन ट्रैकिंग","privacy.group.AdTracking.block.desc":"सभी विज्ञापन ट्रैकिंग ब्लॉक करें","privacy.group.AdTracking.block.tooltip":"यह आपके द्वारा विज़िट की जाने वाली प्रत्येक वेबसाइट पर विज्ञापन ट्रैकिंग को ब्लॉक कर देगा।","privacy.group.AdTracking.unblock.desc":"सभी विज्ञापन ट्रैकिंग अनब्लॉक करें","privacy.group.AdTracking.unblock.tooltip":"यह आपके द्वारा विज़िट की जाने वाली प्रत्येक वेबसाइट पर विज्ञापन ट्रैकिंग की अनुमति देगा।","privacy.group.WebAnalytics.desc":"वेब विश्लेषण","privacy.group.WebAnalytics.block.desc":"सभी वेब विश्लेषणात्मक ट्रैकिंग ब्लॉक करें","privacy.group.WebAnalytics.block.tooltip":"यह आपके द्वारा विज़िट की जाने वाली प्रत्येक वेबसाइट पर वेब विश्लेषणात्मक ट्रैकिंग को ब्लॉक कर देगा।","privacy.group.WebAnalytics.unblock.desc":"सभी वेब विश्लेषणात्मक ट्रैकिंग अनब्लॉक करें","privacy.group.WebAnalytics.unblock.tooltip":"यह आपके द्वारा विज़िट की जाने वाली प्रत्येक वेबसाइट पर अन्य ट्रैकिंग की अनुमति देगा।","privacy.group.Others.desc":"अन्य","privacy.group.Others.block.desc":"अन्य सभी ट्रैकिंग ब्लॉक करें","privacy.group.Others.block.tooltip":"यह आपके द्वारा विज़िट की जाने वाली प्रत्येक वेबसाइट पर अन्य ट्रैकिंग को ब्लॉक कर देगा।","privacy.group.Others.unblock.desc":"अन्य सभी ट्रैकिंग अनब्लॉक करें","privacy.trackersBlockedAll":"<i>{1} पर सभी {0} ट्रैकर</i> ब्लॉक हैं | <i>{1} पर सभी {0} ट्रैकर्स</i> ब्लॉक हैं","privacy.trackersBlockedSome":"<i>{2} पर {1} में से {0} ट्रैकर</i> ब्लॉक हैं | <i>{2} पर {1} में से {0} ट्रैकर्स</i> ब्लॉक हैं","privacy.trackersBlockedNone":"<i>{1} पर {0} ट्रैकिंग</i> सिस्टम | <i>{1} पर {0} ट्रैकिंग</i> सिस्टम्स","privacy.trackersBlocked":"{1} में से {0} ब्लॉक","privacy.trackersFound":"{0} मिले","privacy.trackersNone":"कुछ नहीं","privacy.trackerBlock.desc":"ब्लॉक करें","privacy.trackerBlock.tooltip":"यह आपके द्वारा विज़िट की जाने वाली प्रत्येक वेबसाइट पर [{0}] को ब्लॉक कर देगा।","privacy.trackerUnblock.desc":"ब्लॉक की गई","privacy.trackerUnblock.tooltip":"यह आपके द्वारा देखी जाने वाली प्रत्येक वेबसाइट को अनब्लॉक {0} कर देगा।","privacy.trackerUnblockOnAutoBlock.tooltip":"किसी विशिष्ट ट्रैकर को अनब्लॉक करने के लिए, स्वचालित ब्लॉकिंग बंद करें।","privacy.automaticBlocking.desc":"स्वचालित रूप से सभी ट्रैकर्स ब्लॉक करें","privacy.automaticBlocking.tooltip":"हम आपके द्वारा विज़िट की जाने वाली प्रत्येक वेबसाइट पर मिलने वाले सभी ट्रैकर्स को स्वचालित रूप से ब्लॉक कर देंगे।","setting.title":"सेटिंग्स","setting.serp.name":"मेरे खोज परिणामों को चिह्नित करें","setting.serp.desc":"Google, Yahoo! आदि पर यह देखने के लिए अपने खोज परिणामों में रंगीन आइकन जोड़ें कि कौन से परिणाम क्लिक करने के लिए सुरक्षित हैं। (हरा = सुरक्षित, स्लेटी = अज्ञात, लाल = असुरक्षित)","setting.serpPopup.name":"खोज परिणामों के लिए टूल टिप दिखाएं","setting.serpPopup.desc":"अधिक जानकारी देखने के लिए, हमारे आइकन्स पर माउस घुमाएं","setting.secureBrowser.Avast.name":"Secure Browser","setting.secureBrowser.Avast.desc":"संवेदनशील वित्तीय साइटों के लिए, बैंक मोड पर स्विच करें (Avast एंटीवायरस और Avast Secure Browser स्थापित करने की आवश्यकता है)","setting.secureBrowser.AVG.name":"Secure Browser","setting.secureBrowser.AVG.desc":"संवेदनशील वित्तीय साइटों के लिए, बैंक मोड पर स्विच करें (AVG एंटीवायरस और AVG Secure Browser इंस्टॉल करने की आवश्यकता है)","setting.dntBadge.name":"किसी साइट पर कुल ट्रैकर्स दिखाएं","setting.dntBadge.desc":"किसी वेबसाइट पर कितने ट्रैकर्स हैं, तुरंत यह देखने के लिए अपने ब्राउज़र पर एक बैज जोड़ें।","setting.dntAutoBlock.name":"स्वचालित रूप से सभी ट्रैकर्स ब्लॉक करें","setting.dntAutoBlock.desc":"यह आपके द्वारा विज़िट की जाने वाली प्रत्येक वेबसाइट पर मिलने वाले सभी ट्रैकर्स ब्लॉक करें।","setting.dntSocial.desc":"सभी सामाजिक नेटवर्क ट्रैकर्स ब्लॉक करें","setting.dntAdTracking.desc":"सभी विज्ञापन ट्रैकर्स ब्लॉक करें","setting.dntWebAnalytics.desc":"सभी वेब विश्लेषणात्मक ट्रैकर्स ब्लॉक करें","setting.dntOthers.desc":"अन्य सभी ट्रैकर्स ब्लॉक करें","setting.productAnalysis.name":"नए उत्पाद विकास के लिए उत्पाद के प्रदर्शन और उपयोग के विश्लेषण करने की अनुमति दें","setting.productAnalysis.tooltip":"हम, एक्सटेंशन, आंतरिक एक्सटेंशन पहचानकर्ता, ब्राउज़र प्रकार और संस्करण, ऑपरेटिंग सिस्टम, देश, भाषा, Avast एंटीवायरस की स्थिति के उपयोग डेटा को एकत्र करते हैं और सर्वर पर भेज देते हैं.","setting.urlConsent.name":"URL हार्वेस्ट करने के लिए सहमति","serp.safe.desc":"यह वेबसाइट सुरक्षित है","serp.bad.desc":"यह साइट अविश्वसनीय हो सकती है","serp.unknown.desc":"इस साइट की कोई रेटिंग नही है","serp.unsafe.desc":"यह साइट असुरक्षित है","topbar.openBankMode":"बैंक मोड में खोलें","topbar.desc":"आपका वित्तीय डेटा अन्य लोगों को दिखाई दे सकता है।","topbar.tooltip":"बैंक मोड, आपके Avast एंटीवायरस के साथ इंस्टॉल किया गया Avast सुरक्षित ब्राउज़र का हिस्सा, सुरक्षित रूप से शॉपिंग और बैंकिंग सत्रों को अलग कर देता है ताकि हैकर्स को आपके क्रेडिट कार्ड नंबर, पासवर्ड और अन्य निजी डेटा चोरी करने से रोका जा सके.","topbar.dontShowAgain":"इस साइट पर फिर न दिखाएं","installPage.consent.title":"वेब पते स्कैन करके हमें आपकी सुरक्षा करने की अनुमति दें?","installPage.consent.desc":"यदि आप सहमत हैं, तो हम आपके द्वारा देखी जाने वाली वेबसाइटों के पते देखेंगे, ताकि हम आपको बता सकें कि क्या वे साइट सुरक्षित हैं. (हमारी {URL_START}गोपनीयता नीति{URL_END} देखें)","installPage.agreed.title":"धन्यवाद.","installPage.agreed.desc":"अब हम आपको असुरक्षित वेबसाइटों से बचा रहे हैं.","installPage.disagreed.title":"बुरा न मानिए","installPage.disagreed.desc":"यदि आप नहीं चाहते हैं कि हम आपके वेब पते स्कैन करें, तो बस {0} Online Security को अनइंस्टॉल करें – और वहां सुरक्षित रहें!","installPage.consent.disagree":"नहीं, धन्यवाद","installPage.consent.agree":"हां, वेब पते स्कैन करें","panel.consent.agree":"वेब पते स्कैन करें"},"hr":{"AVG.title":"Online Security","Avast.title":"Avast Online Security","global.beta":"Beta","global.detailsShow":"Pojedinosti","global.detailsHide":"Sakrij pojedinosti","global.done":"Gotovo","global.leaveSite":"Napusti web-mjesto","global.switcher.off":"IS.","global.switcher.on":"UK.","global.close":"Zatvori","global.back":"Natrag","background.icon.unknown":"{0} – nepoznato web-mjesto","background.icon.safe":"{0} – ovo je web-mjesto sigurno","background.icon.bad":"{0} –ovo web-mjesto možda nije pouzdano","background.icon.unsafe":"{0} – ovo web-mjesto nije sigurno","security.title":"Sigurnost","security.safe.title":"Ovo je web-mjesto sigurno","security.safe.item1.desc":"Nema krađe identiteta","security.safe.item1.tooltip":"Na ovom web-mjestu nismo otkrili nijedan pokušaj krađe povjerljivih podataka, kao što su zaporke, brojevi kreditnih kartica i slično.","security.safe.item2.desc":"Nema zlonamjernog softvera","security.safe.item2.tooltip":"Na ovom web-mjesto nismo otkrili nijedan zlonamjerni kod.","security.safe.item3.desc":"Pouzdano","security.safe.item3.tooltip":"Korisnici proizvoda {0} ocijenili su ovo web-mjesto kao pouzdano klikom na {1} u komponenti {0} Online Security.","security.bad.title":"Ovo web-mjesto možda nije pouzdano","security.bad.desc":"Ovdje nismo pronašli nijednu prijetnju krađe identiteta ni zlonamjerni softver, no mnogi su korisnici web-mjestu dali ocjenu označenu palcem okrenutim prema dolje.","security.unknown.title":"Nepoznato web-mjesto","security.unknown.desc":"Još nemamo dovoljno informacija da ocijenimo ovo web-mjesto.","security.unsafe.title":"Ovo web-mjesto nije sigurno","security.unsafe.phishing.desc":"Ovo je web-mjesto označno kao web-mjesto za krađu identiteta. Krađa identiteta predstavlja pokušaj krađe povjerljivih podataka, kao što su zaporke, brojevi kreditnih kartica i slično.","security.unsafe.malware.desc":"Na ovom smo web-mjestu pronašli zlonamjerni kod koji bi mogao naštetiti vašem računalu ili ukrasti osobne podatke.","rating.question.desc":"Smatrate li web-mjesto {0} pouzdanim?","rating.negative":"Ima li na web-mjesto neprikladnog sadržaja? (neobavezno)","rating.thanks":"Hvala na ocjenI!","rating.trusted.desc":"Web-mjesto {0} smatrate <i>pouzdanim</i>","rating.untrusted.desc":"Web-mjesto {0} ne smatrate <i>pouzdanim</i>","rating.revert.tooltip":"Kliknite da biste uklonili ocjenu","rating.tooltip":"Činjenica smatrate li nešto pouzdanim ili nepouzdanim bit će uzeta u obzir prilikom određivanja ocjene sigurnosti web-mjesta.","rating.category.pornography":"Pornografija","rating.category.violence":"Oružje / nasilje","rating.category.gambling":"Kockanje","rating.category.drugs":"Alkohol / droga","rating.category.illegal":"Warez / ilegalno","rating.category.others":"Ostalo","privacy.title":"Zaštita privatnosti","privacy.group.Social.desc":"Društvene mreže","privacy.group.Social.block.desc":"Blokiraj praćenje svih društvenih mreža","privacy.group.Social.block.tooltip":"Time ćete blokirati praćenje društvenih mreža na svim web-mjestima koja posjetite.","privacy.group.Social.unblock.desc":"Deblokiraj praćenje svih društvenih mreža","privacy.group.Social.unblock.tooltip":"Time ćete omogućiti praćenje društvenih mreža na svim web-mjestima koja posjetite.","privacy.group.AdTracking.desc":"Praćenje oglasa","privacy.group.AdTracking.block.desc":"Blokiraj praćenje svih oglasa","privacy.group.AdTracking.block.tooltip":"Time ćete blokirati praćenje oglasa na svim web-mjestima koja posjetite.","privacy.group.AdTracking.unblock.desc":"Deblokiraj praćenje svih oglasa","privacy.group.AdTracking.unblock.tooltip":"Time ćete omogućiti praćenje oglasa na svim web-mjestima koja posjetite.","privacy.group.WebAnalytics.desc":"Web-analiza","privacy.group.WebAnalytics.block.desc":"Blokiraj praćenje svih web-analiza","privacy.group.WebAnalytics.block.tooltip":"Time ćete blokirati praćenje web-analiza na svim web-mjestima koja posjetite.","privacy.group.WebAnalytics.unblock.desc":"Deblokiraj praćenje svih web-analiza","privacy.group.WebAnalytics.unblock.tooltip":"Time ćete omogućiti praćenje svih ostalih stavki na svim web-mjestima koja posjetite.","privacy.group.Others.desc":"Ostalo","privacy.group.Others.block.desc":"Blokiraj praćenje svega ostalog","privacy.group.Others.block.tooltip":"Time ćete blokirati praćenje svih ostalih stavki na svim web-mjestima koja posjetite.","privacy.group.Others.unblock.desc":"Deblokiraj praćenje svega ostalog","privacy.trackersBlockedAll":"<i>{0} pratitelj</i> blokiran je na web-mjestu {1} | <i>{0} pratitelja</i> blokirana su na web-mjestu {1} | <i>{0} pratitelja</i> blokirano je na web-mjestu {1}","privacy.trackersBlockedSome":"<i>{0} od {1} pratitelja</i> blokiran je na web-mjestu {2} | <i>{0} od {1} pratitelja</i> blokirana su na web-mjestu {2} | <i>{0} od {1} pratitelja</i> blokirano je na web-mjestu {2}","privacy.trackersBlockedNone":"<i>{0} sustav za praćenje</i> na web-mjestu {1} | <i>{0} sustava za praćenje</i> na web-mjestu {1} | <i>{0} sustava za praćenje</i> na web-mjestu {1}","privacy.trackersBlocked":"Blokirano: {0} od {1}","privacy.trackersFound":"Pronađeno: {0}","privacy.trackersNone":"ništa","privacy.trackerBlock.desc":"Blokiraj","privacy.trackerBlock.tooltip":"Time ćete blokirati [{0}] na svim web-mjestima koja posjetite.","privacy.trackerUnblock.desc":"Blokirano","privacy.trackerUnblock.tooltip":"Time ćete deblokirati [{0}] na svim web-mjestima koja posjetite.","privacy.trackerUnblockOnAutoBlock.tooltip":"Da biste deblokirali određeni pratitelj, isključite automatsko blokiranje.","privacy.automaticBlocking.desc":"Automatski blokiraj sve pratitelje","privacy.automaticBlocking.tooltip":"Automatski ćemo blokirati sve pronađene pratitelje na svim web-mjestima koja posjetite.","setting.title":"Postavke","setting.serp.name":"Označi moje rezultate pretraživanja","setting.serp.desc":"Dodaj ikone u boji za rezultate pretraživanja na servisima Google, Yahoo! i slično da biste vidjeli koji su rezultati sigurni (zeleno = sigurno, sivo = nepoznato, crveno = nesigurno).","setting.serpPopup.name":"Pokaži elemente opisa za rezultate pretraživanja","setting.serpPopup.desc":"Postavite miš iznad ikona da biste vidjeli više informacija.","setting.secureBrowser.Avast.name":"Secure Browser","setting.secureBrowser.Avast.desc":"Prijeđite na bankovni način za osjetljiva financijska web-mjesta (zahtijeva instaliranu zaštitu od virusa tvrtke Avast i Avast Secure Browser)","setting.secureBrowser.AVG.name":"Secure Browser","setting.secureBrowser.AVG.desc":"Prijeđite na bankovni način za osjetljiva financijska web-mjesta (moraju biti instalirani ACG AntiVIrus i AVG Secure Browser)","setting.dntBadge.name":"Pokaži sve pratitelje na web-mjestu","setting.dntBadge.desc":"Dodajte značku u pretraživač da biste odmah vidjeli koliko je pratitelja na web-mjestu.","setting.dntAutoBlock.name":"Automatski blokiraj sve pratitelje","setting.dntAutoBlock.desc":"Blokira sve pronađene pratitelje na svim web-mjestima koja posjetite.","setting.dntSocial.desc":"Blokiraj sve pratitelje društvenih mreža","setting.dntAdTracking.desc":"Blokiraj sve pratitelje oglasa","setting.dntWebAnalytics.desc":"Blokiraj sve pratitelje web-analiza","setting.dntOthers.desc":"Blokiraj sve ostale pratitelje","setting.productAnalysis.name":"Omogući analizu performansi proizvoda i upotrebe za razvoj novog proizvoda","setting.productAnalysis.tooltip":"Prikupljamo i na naše poslužitelje šaljemo podatke o korištenju proširenja, internoj identifikacijskoj oznaci proširenja, vrsti preglednika i verziji, operacijskom sustavu, državi, jeziku i statusu Avastove aplikacije za zaštitu od virusa.","setting.urlConsent.name":"Pristanak za prikupljanje podataka o URL-ovima","serp.safe.desc":"Ovo je web-mjesto sigurno","serp.bad.desc":"Ovo web-mjesto možda nije pouzdano","serp.unknown.desc":"Ovo web-mjesto nema ocjenu","serp.unsafe.desc":"Ovo web-mjesto nije sigurno","topbar.openBankMode":"Otvori u bankovnom načinu","topbar.desc":"Drugi korisnici možda mogu vidjeti vaše financijske podatke.","topbar.tooltip":"Bankovni način, dio preglednika preglednika Avast Secure Browser instaliran sa zaštitom od virusa tvrtke Avast, sigurno izolira sesije kupnje i bankarstva radi sprječavanja hakera u pokušajima krađe brojeva kreditnih kartica, zaporki i ostalih privatnih podataka.","topbar.dontShowAgain":"Ne prikazuj ponovno na ovom web-mjestu","installPage.consent.title":"Dopuštate li nam da vas zaštitimo pregledom web-adresa?","installPage.consent.desc":"Ako se slažete, pregledat ćemo adrese na web-mjestima koja posjećujete da bismo vam mogli reći jesu li ta web-mjesta sigurna (pogledajte naš {URL_START}Pravilnik o zaštiti privatnosti{URL_END})","installPage.agreed.title":"Hvala!","installPage.agreed.desc":"Sada vas štitimo od web-mjesta koja nisu sigurna.","installPage.disagreed.title":"Nema veze","installPage.disagreed.desc":"Ako ne želite da pregledavamo web-adrese, samo deinstalirajte {0} Online Security, i to je to!","installPage.consent.disagree":"Ne, hvala","installPage.consent.agree":"Da, pregledaj web-adrese","panel.consent.agree":"Pregledaj web-adrese"},"hu":{"AVG.title":"Online Security","Avast.title":"Avast Online Security","global.beta":"Béta","global.detailsShow":"Részletek","global.detailsHide":"Részletek elrejtése","global.done":"Kész","global.leaveSite":"Webhely elhagyása","global.switcher.off":"KI","global.switcher.on":"BE","global.close":"Bezárás","global.back":"Vissza","background.icon.unknown":"{0} – Ismeretlen webhely","background.icon.safe":"{0} – Ez a webhely biztonságos","background.icon.bad":"{0} – Előfordulhat, hogy ez a webhely nem megbízható","background.icon.unsafe":"{0} – Ez a webhely nem biztonságos","security.title":"Biztonság","security.safe.title":"Ez a webhely biztonságos","security.safe.item1.desc":"Nincs adathalászat","security.safe.item1.tooltip":"Ezen a webhelyen nem észleltünk a bizalmas adatok, például jelszavak, bankkártyaszámok stb. eltulajdonítására tett kísérleteket.","security.safe.item2.desc":"Nincsenek kártevők","security.safe.item2.tooltip":"A webhelyen nem találtunk rosszindulatú kódokat.","security.safe.item3.desc":"Megbízható","security.safe.item3.tooltip":"{0} felhasználó értékelte megbízhatónak ezt a webhelyet azzal, hogy a {1} ikonra kattintott az {0} Online Securityben.","security.bad.title":"Előfordulhat, hogy ez nem megbízható","security.bad.desc":"Nem találtunk adathalászati fenyegetéseket vagy kártevőket, de sok felhasználó negatívan értékelte a webhelyet.","security.unknown.title":"Ismeretlen webhely","security.unknown.desc":"Egyelőre nincs elegendő információnk a webhely értékeléséhez.","security.unsafe.title":"Ez a webhely nem biztonságos","security.unsafe.phishing.desc":"Ezt a webhelyet adathalászként jelölték meg. Az adathalászat a bizalmas adatok, például jelszavak, bankkártyaszámok stb. eltulajdonítására tett kísérleteket jelent.","security.unsafe.malware.desc":"A webhelyen rosszindulatú kódot találtunk, amely kárt tehet a számítógépében vagy eltulajdoníthatja a személyes adatait.","rating.question.desc":"Megbízik a(z) {0} webhelyben?","rating.negative":"Vannak kifogásolható tartalmak a webhelyen? (opcionális)","rating.thanks":"Köszönjük az értékelését!","rating.trusted.desc":"Ön <i>megbízik</i> a(z) {0} webhelyben","rating.untrusted.desc":"Ön <i>nem bízik meg</i> a(z) {0} webhelyben","rating.revert.tooltip":"Kattintson az értékelés visszavonásához","rating.tooltip":"A webhely értékelése során figyelembe vesszük, hogy a felhasználók, köztük Ön is, megbízik-e a webhelyben.","rating.category.pornography":"Pornográfia","rating.category.violence":"Fegyverek/erőszak","rating.category.gambling":"Szerencsejáték","rating.category.drugs":"Alkohol/drogok","rating.category.illegal":"Warez/illegális","rating.category.others":"Egyebek","privacy.title":"Adatvédelem","privacy.group.Social.desc":"Közösségi hálózatok","privacy.group.Social.block.desc":"A közösségi hálózatok általi nyomon követés blokkolása","privacy.group.Social.block.tooltip":"Ezzel a beállítással megakadályozza, hogy a közösségi hálózatok nyomon tudják követni a tevékenységeit az Ön által látogatott webhelyeken.","privacy.group.Social.unblock.desc":"A közösségi hálózatok általi nyomon követés blokkolásának feloldása","privacy.group.Social.unblock.tooltip":"Ezzel a beállítással engedélyezi, hogy a közösségi hálózatok nyomon kövessék a tevékenységeit az Ön által látogatott webhelyeken.","privacy.group.AdTracking.desc":"Hirdetéskövetés","privacy.group.AdTracking.block.desc":"Minden hirdetéskövetés blokkolása","privacy.group.AdTracking.block.tooltip":"Ezzel a beállítással minden Ön által látogatott webhelyen blokkolja a hirdetéskövetést.","privacy.group.AdTracking.unblock.desc":"Hirdetéskövetés blokkolásának feloldása","privacy.group.AdTracking.unblock.tooltip":"Ezzel a beállítással minden Ön által látogatott webhelyen engedélyezi a hirdetéskövetést.","privacy.group.WebAnalytics.desc":"Webanalitika","privacy.group.WebAnalytics.block.desc":"Webanalitikai nyomkövetés blokkolása","privacy.group.WebAnalytics.block.tooltip":"Ezzel a beállítással minden Ön által látogatott webhelyen blokkolja a webanalitikai nyomkövetést.","privacy.group.WebAnalytics.unblock.desc":"Webanalitikai nyomkövetés blokkolásának feloldása","privacy.group.WebAnalytics.unblock.tooltip":"Ezzel a beállítással minden Ön által látogatott webhelyen engedélyezi az egyéb jellegű nyomkövetéseket.","privacy.group.Others.desc":"Egyebek","privacy.group.Others.block.desc":"Minden egyéb jellegű nyomkövetés blokkolása","privacy.group.Others.block.tooltip":"Ezzel a beállítással minden Ön által látogatott webhelyen blokkolja az egyéb jellegű nyomkövetéseket.","privacy.group.Others.unblock.desc":"Minden egyéb jellegű nyomkövetés blokkolásának feloldása","privacy.trackersBlockedAll":"<i>Mind a(z) {0} nyomkövető</i> blokkolva a(z) {1} webhelyen | <i>Mind a(z) {0} nyomkövető</i> blokkolva a(z) {1} webhelyen","privacy.trackersBlockedSome":"<i>{0}/{1} nyomkövető</i> blokkolva a(z) {2} webhelyen | <i>{0}/{1} nyomkövető</i> blokkolva a(z) {2} webhelyen","privacy.trackersBlockedNone":"<i>{0} nyomkövető</i> rendszer a(z) {1} webhelyen | <i>{0} nyomkövető</i> rendszer a(z) {1} webhelyen","privacy.trackersBlocked":"{0}/{1} blokkolva","privacy.trackersFound":"{0} található","privacy.trackersNone":"nincs","privacy.trackerBlock.desc":"Blokkolás","privacy.trackerBlock.tooltip":"Ezzel a beállítással minden Ön által látogatott webhelyen blokkolja a(z) [{0}] nyomkövetőt.","privacy.trackerUnblock.desc":"Blokkolva","privacy.trackerUnblock.tooltip":"Ezzel a beállítással minden Ön által látogatott webhelyen feloldja a(z) [{0}] nyomkövető blokkolását.","privacy.trackerUnblockOnAutoBlock.tooltip":"Ha szeretné feloldani egy adott nyomkövető blokkolását, kapcsolja ki az automatikus blokkolást.","privacy.automaticBlocking.desc":"Az összes nyomkövető automatikus blokkolása","privacy.automaticBlocking.tooltip":"Automatikusan blokkolni fogunk minden nyomkövetőt az Ön által látogatott összes webhelyen.","setting.title":"Beállítások","setting.serp.name":"Keresési eredmények megjelölése","setting.serp.desc":"Színes ikonokat ad a Google, Yahoo! stb. keresési találataihoz, amelyek jelzik, hogy mely találatokra lehet biztonságosan rákattintani. (Zöld = biztonságos, szürke = nem állapítható meg, vörös = nem biztonságos)","setting.serpPopup.name":"Eszköztippek megjelenítése a keresési eredményekhez","setting.serpPopup.desc":"Ha az egérmutatót az ikonok fölé viszi, további információk jelennek meg.","setting.secureBrowser.Avast.name":"Secure Browser","setting.secureBrowser.Avast.desc":"Átváltás a Bank módra a bizalmas pénzügyi információt tartalmazó webhelyeken (az Avast Antivirusnak és az Avast Secure Browsernek telepítve kell lennie)","setting.secureBrowser.AVG.name":"Secure Browser","setting.secureBrowser.AVG.desc":"Átváltás a Bank módra a bizalmas pénzügyi információt tartalmazó webhelyeken (az AVG AntiVirusnak és az AVG Secure Browsernek telepítve kell lennie)","setting.dntBadge.name":"Egy webhely összes nyomkövetőjének megjelenítése","setting.dntBadge.desc":"A böngészőben megjelenített jelvény azonnal jelzi, hogy egy-egy webhelyen mennyi nyomkövető van.","setting.dntAutoBlock.name":"Az összes nyomkövető automatikus blokkolása","setting.dntAutoBlock.desc":"Az Ön által látogatott összes webhelyen minden megtalált nyomkövetőt blokkol.","setting.dntSocial.desc":"A közösségi hálózatok összes nyomkövetőjének blokkolása","setting.dntAdTracking.desc":"Az összes hirdetéskövető blokkolása","setting.dntWebAnalytics.desc":"Az összes webanalitikai nyomkövető blokkolása","setting.dntOthers.desc":"Az összes egyéb jellegű nyomkövető blokkolása","setting.productAnalysis.name":"Hozzájárulás a termék teljesítményének és használatának új termékek kifejlesztése céljából történő elemzéséhez","setting.productAnalysis.tooltip":"A következőkről gyűjtünk és küldünk használati adatokat a kiszolgálóinknak: bővítmény, belső bővítményazonosító, a böngésző típusa és verziója, operációs rendszer, nyelv, az Avast vírusvédelmi alkalmazás állapota.","setting.urlConsent.name":"URL-címek gyűjtésének engedélyezése","serp.safe.desc":"Ez a webhely biztonságos","serp.bad.desc":"Előfordulhat, hogy ez a webhely nem megbízható","serp.unknown.desc":"Ez a webhely még nincs minősítve","serp.unsafe.desc":"Ez a webhely nem biztonságos","topbar.openBankMode":"Megnyitás Bank módban","topbar.desc":"Előfordulhat, hogy pénzügyi adatait mások is láthatják.","topbar.tooltip":"A Bank mód az Avast vírusvédelmi megoldással együtt telepített Avast Secure Browser része. Biztonságosan elkülöníti a vásárlási és banki tevékenységek munkameneteit, nehogy a hackerek ellophassák hitelkártyaszámait, jelszavait és egyéb bizalmas adatait.","topbar.dontShowAgain":"Ne mutassa többet ezen az oldalon","installPage.consent.title":"Engedélyezi a webcímek megvizsgálásával járó védelmet?","installPage.consent.desc":"Ha engedélyezi, akkor ellenőrizzük a felkeresett webhelyek címét, és tájékoztatjuk a webhelyek biztonságosságáról. (További részletekért lásd az {URL_START}adatvédelmi nyilatkozatunkat{URL_END}.)","installPage.agreed.title":"Köszönjük!","installPage.agreed.desc":"Mostantól megvédjük a nem biztonságok webhelyek jelentette kockázatoktól.","installPage.disagreed.title":"Semmi baj","installPage.disagreed.desc":"Ha nem szeretné, hogy figyeljük a webes címeket, akkor távolítsa el az {0} Online Securityt, és már itt sem vagyunk!","installPage.consent.disagree":"Köszönöm, nem","installPage.consent.agree":"Igen, hozzájárulok a webes címek átvizsgálásához","panel.consent.agree":"Webes címek figyelése"},"id":{"AVG.title":"Online Security","Avast.title":"Avast Online Security","global.beta":"Beta","global.detailsShow":"Perincian","global.detailsHide":"Sembunyikan detail","global.done":"Selesai","global.leaveSite":"Tinggalkan situs","global.switcher.off":"OFF","global.switcher.on":"ON","global.close":"Tutup","global.back":"Kembali","background.icon.unknown":"{0} - Situs tidak diketahui","background.icon.safe":"{0} - Situs web ini aman","background.icon.bad":"{0} - Situs ini mungkin tidak dapat dipercaya","background.icon.unsafe":"{0} - Situs web ini tidak aman","security.title":"Keamanan","security.safe.title":"Situs web ini aman","security.safe.item1.desc":"Tanpa phishing","security.safe.item1.tooltip":"Kami tidak mendeteksi adanya upaya mencuri informasi sensitif, seperti kata sandi, nomor kartu kredit, dsb. di situs web ini.","security.safe.item2.desc":"Tidak ada malware","security.safe.item2.tooltip":"Kami tidak menemukan kode berbahaya di situs web ini.","security.safe.item3.desc":"Tepercaya","security.safe.item3.tooltip":"{0} pengguna telah menilai situs web ini sebagai situs tepercaya dengan mengeklik {1} dalam {0} Online Security.","security.bad.title":"Situs ini mungkin tidak dapat dipercaya","security.bad.desc":"Kami tidak menemukan ancaman phishing atau malware di sini, tetapi banyak pengguna kami memberikan thumb down untuk situs ini.","security.unknown.title":"Situs tidak dikenal","security.unknown.desc":"Kami tidak punya cukup informasi untuk menilai situs web ini.","security.unsafe.title":"Situs web ini tidak aman","security.unsafe.phishing.desc":"Situs web ini telah ditandai sebagai situs phishing. Phishing adalah upaya mencuri informasi sensitif dari Anda, misalnya kata sandi, nomor kartu kredit, dsb.","security.unsafe.malware.desc":"Kami telah menemukan kode berbahaya di situs ini yang dapat merusak komputer atau mencuri data pribadi Anda.","rating.question.desc":"Apakah Anda percaya {0}?","rating.negative":"Adakah konten tidak senonoh di situs web ini? (opsional)","rating.thanks":"Terima kasih atas penilaian Anda!","rating.trusted.desc":"Anda <i>percaya</i> {0}","rating.untrusted.desc":"Anda <i>tidak percaya</i> {0}","rating.revert.tooltip":"Klik untuk menghapus penilaian Anda","rating.tooltip":"Rasa percaya atau tidak percaya Anda akan menjadi faktor dalam penilaian keamanan kami bagi situs web ini.","rating.category.pornography":"Pornografi","rating.category.violence":"Senjata/Kekerasan","rating.category.gambling":"Perjudian","rating.category.drugs":"Alkohol/Narkoba","rating.category.illegal":"Warez/Ilegal","rating.category.others":"Lainnya","privacy.title":"Privasi","privacy.group.Social.desc":"Jaringan sosial","privacy.group.Social.block.desc":"Blokir semua pelacakan jaringan sosial","privacy.group.Social.block.tooltip":"Ini akan memblokir pelacakan jaringan sosial di setiap situs web yang Anda kunjungi.","privacy.group.Social.unblock.desc":"Buka blokiran semua pelacakan jaringan sosial","privacy.group.Social.unblock.tooltip":"Ini akan mengizinkan pelacakan jaringan sosial di setiap situs web yang Anda kunjungi.","privacy.group.AdTracking.desc":"Pelacakan Iklan","privacy.group.AdTracking.block.desc":"Blokir semua pelacakan iklan","privacy.group.AdTracking.block.tooltip":"Ini akan memblokir pelacakan iklan di setiap situs web yang Anda kunjungi.","privacy.group.AdTracking.unblock.desc":"Buka blokiran semua pelacakan iklan","privacy.group.AdTracking.unblock.tooltip":"Ini akan mengizinkan pelacakan iklan di setiap situs web yang Anda kunjungi.","privacy.group.WebAnalytics.desc":"Analitik Web","privacy.group.WebAnalytics.block.desc":"Blokir semua pelacakan analitik web","privacy.group.WebAnalytics.block.tooltip":"Ini akan memblokir pelacakan analitik web di setiap situs web yang Anda kunjungi.","privacy.group.WebAnalytics.unblock.desc":"Buka blokiran semua pelacakan analitik web","privacy.group.WebAnalytics.unblock.tooltip":"Ini akan mengizinkan pelacakan lainnya di setiap situs web yang Anda kunjungi.","privacy.group.Others.desc":"Lainnya","privacy.group.Others.block.desc":"Blokir semua pelacakan lainnya","privacy.group.Others.block.tooltip":"Ini akan memblokir pelacakan lainnya di setiap situs web yang Anda kunjungi.","privacy.group.Others.unblock.desc":"Buka blokiran semua pelacakan lainnya","privacy.trackersBlockedAll":"<i>Semua {0} pelacak</i> diblokir pada {1}","privacy.trackersBlockedSome":"<i>{0} dari {1} pelacak</i> diblokir pada {2}","privacy.trackersBlockedNone":"<i>{0} sistem</i> pelacak pada {1}","privacy.trackersBlocked":"{0} dari {1} diblokir","privacy.trackersFound":"{0} ditemukan","privacy.trackersNone":"tidak ada","privacy.trackerBlock.desc":"Blokir","privacy.trackerBlock.tooltip":"Ini akan memblokir [{0}] pelacakan di setiap situs web yang Anda kunjungi.","privacy.trackerUnblock.desc":"Diblokir","privacy.trackerUnblock.tooltip":"Ini akan membuka blokir [{0}] di setiap situs web yang Anda kunjungi.","privacy.trackerUnblockOnAutoBlock.tooltip":"Untuk membuka blokiran pelacak tertentu, nonaktifkan pemblokiran otomatis.","privacy.automaticBlocking.desc":"Otomatis memblokir semua pelacak","privacy.automaticBlocking.tooltip":"Kami akan secara otomatis memblokir semua pelacak yang ditemukan di semua situs web yang Anda kunjungi.","setting.title":"Pengaturan","setting.serp.name":"Tandai hasil penelusuran saya","setting.serp.desc":"Tambahkan ikon berwarna ke hasil penelusuran Anda di Google, Yahoo!, dsb. untuk melihat hasil yang paling aman untuk diklik. (Hijau = Aman, Abu-abu = Tidak diketahui, Merah = Tidak aman)","setting.serpPopup.name":"Tampilkan tooltip untuk hasil penelusuran","setting.serpPopup.desc":"Layangkan kursor di atas ikon kami untuk melihat informasi selengkapnya.","setting.secureBrowser.Avast.name":"Secure Browser","setting.secureBrowser.Avast.desc":"Beralih ke Mode Bank untuk situs-situs finansial yang sensitif (wajib menginstal Avast Antivirus dan Avast Secure Browser)","setting.secureBrowser.AVG.name":"Secure Browser","setting.secureBrowser.AVG.desc":"Beralih ke Mode Bank untuk situs-situs finansial yang sensitif (wajib menginstal AVG AntiVirus dan AVG Secure Browser)","setting.dntBadge.name":"Tampilkan total pelacak di suatu situs","setting.dntBadge.desc":"Tambahkan lencana ke browser Anda untuk melihat jumlah pelacak di setiap situs secara langsung.","setting.dntAutoBlock.name":"Otomatis memblokir semua pelacak","setting.dntAutoBlock.desc":"Memblokir semua pelacak yang ditemukan di setiap situs web yang Anda kunjungi.","setting.dntSocial.desc":"Blokir semua pelacak jaringan sosial","setting.dntAdTracking.desc":"Blokir semua pelacak iklan","setting.dntWebAnalytics.desc":"Blokir semua pelacak analitik web","setting.dntOthers.desc":"Blokir semua pelacak lainnya","setting.productAnalysis.name":"Izinkan analisis kinerja dan penggunaan produk untuk pengembangan produk baru","setting.productAnalysis.tooltip":"Kami mengumpulkan dan mengirimkan data penggunaan ekstensi, pengidentifikasi ekstensi internal, jenis dan versi browser, sistem operasi, negara, bahasa, serta status aplikasi antivirus Avast ke server kami.","setting.urlConsent.name":"Setuju mengumpulkan URL","serp.safe.desc":"Situs web ini aman","serp.bad.desc":"Situs ini mungkin tidak dapat dipercaya","serp.unknown.desc":"Situs ini tidak memiliki peringkat","serp.unsafe.desc":"Situs ini tidak aman","topbar.openBankMode":"Buka dalam mode bank","topbar.desc":"Data keuangan Anda mungkin dapat dilihat orang lain.","topbar.tooltip":"Mode Bank, bagian Avast Secure Browser yang diinstal dengan antivirus Avast, mengisolasi dengan aman sesi belanja dan aktivitas perbankan Anda guna menghentikan peretas agar tidak dapat mencuri nomor kartu kredit, sandi, dan data pribadi Anda lainnya.","topbar.dontShowAgain":"Jangan tampilkan di situs ini lagi","installPage.consent.title":"Beri izin memindai alamat web untuk melindungi Anda?","installPage.consent.desc":"Jika Anda setuju, kami akan memeriksa alamat situs-situs web yang Anda kunjungi agar dapat melaporkan apakah situs web tersebut aman atau tidak. (Baca {URL_START}Kebijakan Privasi{URL_END} kami)","installPage.agreed.title":"Terima kasih!","installPage.agreed.desc":"Sekarang kami sedang melindungi Anda dari situs-situs web tidak aman.","installPage.disagreed.title":"Tak ada niat apa-apa","installPage.disagreed.desc":"Jika Anda tidak ingin kami memindai alamat web yang Anda kunjungi, cukup hapus instalasi {0} Online Security, tapi tetap waspada ya!","installPage.consent.disagree":"Tidak, terima kasih","installPage.consent.agree":"Ya, pindai alamat web","panel.consent.agree":"Pindai alamat web"},"it":{"AVG.title":"Online Security","Avast.title":"Avast Online Security","global.beta":"Beta","global.detailsShow":"Dettagli","global.detailsHide":"Nascondi dettagli","global.done":"Fatto","global.leaveSite":"Esci dal sito","global.switcher.off":"OFF","global.switcher.on":"ON","global.close":"Chiudi","global.back":"Indietro","background.icon.unknown":"{0} - Sito sconosciuto","background.icon.safe":"{0} - Questo sito è sicuro","background.icon.bad":"{0} - Questo sito potrebbe non essere affidabile","background.icon.unsafe":"{0} - Questo sito non è sicuro","security.title":"Sicurezza","security.safe.title":"Questo sito è sicuro","security.safe.item1.desc":"Phishing assente","security.safe.item1.tooltip":"In questo sito non sono stati rilevati tentativi di furto di informazioni sensibili come password, numeri di carte di credito ecc.","security.safe.item2.desc":"Malware assente","security.safe.item2.tooltip":"In questo sito non è stato rilevato codice dannoso.","security.safe.item3.desc":"Attendibile","security.safe.item3.tooltip":"{0} utenti hanno valutato attendibile questo sito facendo clic su {1} in {0} Online Security.","security.bad.title":"Potrebbe non essere affidabile","security.bad.desc":"In questo sito non sono stati rilevati malware o minacce di phishing, ma molti utenti lo hanno valutato negativamente.","security.unknown.title":"Sito sconosciuto","security.unknown.desc":"Non abbiamo ancora informazioni sufficienti per valutare questo sito.","security.unsafe.title":"Questo sito non è sicuro","security.unsafe.phishing.desc":"Questo sito è stato contrassegnato come sito di phishing. Il phishing è il tentativo di sottrarre all\'utente informazioni sensibili come password, numeri di carte di credito, ecc.","security.unsafe.malware.desc":"In questo sito è stato rilevato codice dannoso che potrebbe danneggiare il computer o rubare i dati privati degli utenti.","rating.question.desc":"Consideri attendibile {0}?","rating.negative":"Questo sito presenta contenuti inappropriati? (opzionale)","rating.thanks":"Grazie per la tua valutazione!","rating.trusted.desc":"<i>Consideri attendibile</i> {0}","rating.untrusted.desc":"<i>Non consideri attendibile</i> {0}","rating.revert.tooltip":"Fai clic per rimuovere la valutazione","rating.tooltip":"Il tuo giudizio contribuirà a determinare la valutazione di sicurezza per questo sito.","rating.category.pornography":"Pornografia","rating.category.violence":"Armi / Violenza","rating.category.gambling":"Gioco d\'azzardo","rating.category.drugs":"Alcol / Droghe","rating.category.illegal":"Warez / Illegale","rating.category.others":"Altro","privacy.title":"Privacy","privacy.group.Social.desc":"Social network","privacy.group.Social.block.desc":"Blocca completamente il tracciamento dei social network","privacy.group.Social.block.tooltip":"Verrà bloccato il tracciamento dei social network per tutti i siti Web visitati.","privacy.group.Social.unblock.desc":"Sblocca completamente il tracciamento dei social network","privacy.group.Social.unblock.tooltip":"Verrà consentito il tracciamento dei social network per tutti i siti Web visitati.","privacy.group.AdTracking.desc":"Ad Tracking","privacy.group.AdTracking.block.desc":"Blocca completamente il tracciamento delle pubblicità","privacy.group.AdTracking.block.tooltip":"Verrà bloccato il tracciamento delle pubblicità per tutti i siti Web visitati.","privacy.group.AdTracking.unblock.desc":"Sblocca completamente il tracciamento delle pubblicità","privacy.group.AdTracking.unblock.tooltip":"Verrà consentito il tracciamento delle pubblicità per tutti i siti Web visitati.","privacy.group.WebAnalytics.desc":"Analisi Web","privacy.group.WebAnalytics.block.desc":"Blocca completamente il tracciamento dell\'analisi Web","privacy.group.WebAnalytics.block.tooltip":"Verrà bloccato il tracciamento dell\'analisi Web per tutti i siti Web visitati.","privacy.group.WebAnalytics.unblock.desc":"Sblocca completamente il tracciamento dell\'analisi Web","privacy.group.WebAnalytics.unblock.tooltip":"Verranno consentiti tutti gli altri tipi di tracciamento per tutti i siti Web visitati.","privacy.group.Others.desc":"Altro","privacy.group.Others.block.desc":"Blocca tutti gli altri tipi di tracciamento","privacy.group.Others.block.tooltip":"Verranno bloccati tutti gli altri tipi di tracciamento per tutti i siti Web visitati.","privacy.group.Others.unblock.desc":"Sblocca tutti gli altri tipi di tracciamento","privacy.trackersBlockedAll":"<i>{0} tracker</i> bloccato in {1} | <i>Tutti i {0} tracker</i> bloccati in {1}","privacy.trackersBlockedSome":"<i>{0} di {1} tracker</i> bloccato in {2} | <i>{0} di {1} tracker</i> bloccati in {2}","privacy.trackersBlockedNone":"<i>{0} sistema di tracciamento</i> in {1} | <i>{0} sistemi di tracciamento</i> in {1}","privacy.trackersBlocked":"{0} di {1} bloccati","privacy.trackersFound":"{0} rilevati","privacy.trackersNone":"niente","privacy.trackerBlock.desc":"Blocca","privacy.trackerBlock.tooltip":"Verrà bloccato il [{0}] per tutti i siti Web visitati.","privacy.trackerUnblock.desc":"Bloccato","privacy.trackerUnblock.tooltip":"Verrà sbloccato il [{0}] per tutti i siti Web visitati.","privacy.trackerUnblockOnAutoBlock.tooltip":"Per sbloccare un tracker specifico, disattivare il blocco automatico.","privacy.automaticBlocking.desc":"Blocca automaticamente tutti i tracker","privacy.automaticBlocking.tooltip":"Bloccheremo automaticamente tutti i tracker rilevati in ogni sito Web visitato.","setting.title":"Impostazioni","setting.serp.name":"Contrassegna i risultati di ricerca","setting.serp.desc":"Aggiungi icone colorate ai risultati di ricerca su Google, Yahoo! e non solo per vedere quali risultati sono sicuri (verde = sicuro, grigio = sconosciuto, rosso = non sicuro).","setting.serpPopup.name":"Mostra tooltip per i risultati di ricerca","setting.serpPopup.desc":"Muovi il mouse sopra le icone per visualizzare altre informazioni.","setting.secureBrowser.Avast.name":"Secure Browser","setting.secureBrowser.Avast.desc":"Passa alla Modalità Banca per i siti finanziari sensibili (richiede l\'installazione di Avast Antivirus e Avast Secure Browser)","setting.secureBrowser.AVG.name":"Secure Browser","setting.secureBrowser.AVG.desc":"Passa alla Modalità Banca per i siti finanziari sensibili (richiede l\'installazione di AVG AntiVirus e AVG Secure Browser)","setting.dntBadge.name":"Mostra i tracker totali in un sito","setting.dntBadge.desc":"Aggiungi un badge al tuo browser per scoprire subito quanti tracker ci sono in un sito Web.","setting.dntAutoBlock.name":"Blocca automaticamente tutti i tracker","setting.dntAutoBlock.desc":"Blocca tutti i tracker rilevati nei siti Web visitati.","setting.dntSocial.desc":"Blocca tutti i tracker di social network","setting.dntAdTracking.desc":"Blocca tutti i tracker di pubblicità","setting.dntWebAnalytics.desc":"Blocca tutti i tracker di analisi Web","setting.dntOthers.desc":"Blocca tutti gli altri tracker","setting.productAnalysis.name":"Consenti l\'analisi dell\'utilizzo e delle prestazioni del prodotto ai fini dello sviluppo di nuovi prodotti","setting.productAnalysis.tooltip":"Raccogliamo e inviamo ai nostri server i dati relativi all\'utilizzo dell\'estensione, l\'identificatore dell\'estensione interna, la versione e il tipo di browser, il sistema operativo, il paese, la lingua, lo stato dell\'app antivirus Avast.","setting.urlConsent.name":"Consenti la raccolta degli URL","serp.safe.desc":"Questo sito è sicuro","serp.bad.desc":"Questo sito potrebbe non essere affidabile","serp.unknown.desc":"Questo sito non è stato valutato","serp.unsafe.desc":"Questo sito non è sicuro","topbar.openBankMode":"Apri in Modalità Banca","topbar.desc":"I dati finanziari potrebbero essere visibili per altri utenti.","topbar.tooltip":"Modalità Banca, inclusa in Avast Secure Browser installato con Avast Antivirus, isola in modo sicuro le sessioni di shopping e di online banking per impedire agli hacker di rubare numeri di carte di credito, password e altri dati privati.","topbar.dontShowAgain":"Non mostrare più per questo sito","installPage.consent.title":"Intendi autorizzare la scansione degli indirizzi Web ai fini della protezione?","installPage.consent.desc":"Se acconsenti, gli indirizzi dei siti Web che visiti verranno analizzati al fine di verificarne la sicurezza (consulta l\'{URL_START}Informativa sulla privacy{URL_END})","installPage.agreed.title":"Grazie!","installPage.agreed.desc":"Ora sei protetto dai siti Web non sicuri.","installPage.disagreed.title":"Senza rancore","installPage.disagreed.desc":"Se non desideri autorizzare la scansione degli indirizzi Web, disinstalla {0} Online Security. Fai attenzione in rete!","installPage.consent.disagree":"No, grazie","installPage.consent.agree":"Sì, esegui la scansione degli indirizzi Web","panel.consent.agree":"Esegui la scansione degli indirizzi Web"},"ja":{"AVG.title":"Online Security","Avast.title":"Avast Online Security","global.beta":"ベータ版","global.detailsShow":"詳細","global.detailsHide":"詳細を隠す","global.done":"完了","global.leaveSite":"サイトを離れる","global.switcher.off":"OFF","global.switcher.on":"ON","global.close":"閉じる","global.back":"戻る","background.icon.unknown":"{0} - 不明なサイト","background.icon.safe":"{0} - このウェブサイトは安全です","background.icon.bad":"{0} - このサイトは信頼できない可能性があります","background.icon.unsafe":"{0} - このウェブサイトは安全ではありません","security.title":"セキュリティ","security.safe.title":"このウェブサイトは安全です","security.safe.item1.desc":"フィッシング未検出","security.safe.item1.tooltip":"このウェブサイトでは、パスワードやクレジットカード番号などの機密情報を盗もうとする試みは検出されませんでした。","security.safe.item2.desc":"マルウェア未検出","security.safe.item2.tooltip":"このウェブサイトでは、悪意のあるコードは検出されませんでした。","security.safe.item3.desc":"信頼できます","security.safe.item3.tooltip":"{0} ユーザーが {0} Online Security 内で {1} をクリックして、このウェブサイトを信頼できると評価しています。","security.bad.title":"このサイトは信頼できない可能性があります","security.bad.desc":"このサイト内でフィッシング脅威やマルウェアは検出されませんでしたが、多くのユーザーが信頼できないと評価しています。","security.unknown.title":"不明なサイト","security.unknown.desc":"このウェブサイトを評価するための情報が不足しています。","security.unsafe.title":"このウェブサイトは安全ではありません","security.unsafe.phishing.desc":"このウェブサイトはフィッシング サイトとしてマークされています。フィッシングとは、ユーザーのパスワードやクレジットカード番号などの機密情報を盗もうとする試みです。","security.unsafe.malware.desc":"このウェブサイトで、コンピューターに害を及ぼしたり、個人データを盗んだりする悪意のあるコードが検出されました。","rating.question.desc":"{0} は信頼できますか？","rating.negative":"このウェブサイトに不適切なコンテンツはありますか？（任意）","rating.thanks":"ご評価いただきありがとうございます！","rating.trusted.desc":"{0} は<i>信頼できます</i>","rating.untrusted.desc":"{0} は<i>信頼できません</i>","rating.revert.tooltip":"クリックすると評価を削除できます","rating.tooltip":"あなたの信頼できるか否かの評価は、このウェブサイトの安全性の評価に反映されます。","rating.category.pornography":"アダルト","rating.category.violence":"武器 / 暴力","rating.category.gambling":"ギャンブル","rating.category.drugs":"酒 / 薬物","rating.category.illegal":"海賊版 / 違法","rating.category.others":"その他","privacy.title":"プライバシー","privacy.group.Social.desc":"ソーシャル ネットワーク","privacy.group.Social.block.desc":"すべてのソーシャル ネットワーク追跡をブロック","privacy.group.Social.block.tooltip":"アクセスするすべてのウェブサイトでソーシャル ネットワーク追跡をブロックします。","privacy.group.Social.unblock.desc":"すべてのソーシャル ネットワーク追跡をブロック解除","privacy.group.Social.unblock.tooltip":"アクセスするすべてのウェブサイトでソーシャル ネットワーク追跡をブロック解除します。","privacy.group.AdTracking.desc":"広告による追跡","privacy.group.AdTracking.block.desc":"広告による追跡をすべてブロック","privacy.group.AdTracking.block.tooltip":"アクセスするすべてのウェブサイトで広告による追跡をブロックします。","privacy.group.AdTracking.unblock.desc":"広告による追跡をすべてブロック解除","privacy.group.AdTracking.unblock.tooltip":"アクセスするすべてのウェブサイトで広告による追跡をブロック解除します。","privacy.group.WebAnalytics.desc":"ウェブサイト解析","privacy.group.WebAnalytics.block.desc":"ウェブ解析による追跡をすべてブロック","privacy.group.WebAnalytics.block.tooltip":"アクセスするすべてのウェブサイトでウェブ解析による追跡をブロックします。","privacy.group.WebAnalytics.unblock.desc":"ウェブ解析による追跡をすべてブロック解除","privacy.group.WebAnalytics.unblock.tooltip":"アクセスするすべてのウェブサイトでその他の追跡をブロック解除します。","privacy.group.Others.desc":"その他","privacy.group.Others.block.desc":"その他の追跡をすべてブロック","privacy.group.Others.block.tooltip":"アクセスするすべてのウェブサイトでその他の追跡をブロックします。","privacy.group.Others.unblock.desc":"その他の追跡をすべてブロック解除","privacy.trackersBlockedAll":"{1} で <i>{0} 件のトラッカーがすべて</i>ブロックされました","privacy.trackersBlockedSome":"{2} で <i>{1} 件中 {0} 件のトラッカー</i>がブロックされました","privacy.trackersBlockedNone":"{1} で <i>{0} 件の追跡</i>システムが見つかりました","privacy.trackersBlocked":"{1} 件中 {0} 件がブロックされました","privacy.trackersFound":"{0} 件見つかりました","privacy.trackersNone":"見つかりませんでした","privacy.trackerBlock.desc":"ブロック","privacy.trackerBlock.tooltip":"アクセスするすべてのウェブサイトで [{0}] をブロックします。","privacy.trackerUnblock.desc":"ブロックしました","privacy.trackerUnblock.tooltip":"アクセスするすべてのウェブサイトで [{0}] をブロック解除します。","privacy.trackerUnblockOnAutoBlock.tooltip":"特定のトラッカーをブロック解除するには、自動ブロック機能をオフにしてください。","privacy.automaticBlocking.desc":"すべてのトラッカーを自動的にブロック","privacy.automaticBlocking.tooltip":"アクセスするすべてのウェブサイトで見つかったトラッカーをすべて自動的にブロックします。","setting.title":"設定","setting.serp.name":"検索結果に印を付ける","setting.serp.desc":"Google や Yahoo! などでの検索結果に色付きのアイコンを付けて、どの検索結果が安全にクリックできるか表示します（緑 = 安全、グレー = 不明、赤 = 安全ではない）。","setting.serpPopup.name":"検索結果にツールチップを表示","setting.serpPopup.desc":"アイコンの上にカーソルを移動させると、詳細情報が表示されます。","setting.secureBrowser.Avast.name":"セキュア ブラウザ","setting.secureBrowser.Avast.desc":"銀行取引の際はバンク モードに切り替える（アバスト アンチウイルスとアバスト セキュア ブラウザのインストールが必要です）","setting.secureBrowser.AVG.name":"セキュア ブラウザ","setting.secureBrowser.AVG.desc":"銀行取引の際はバンク モードに切り替える（AVG アンチウイルスと AVG セキュア ブラウザのインストールが必要です）","setting.dntBadge.name":"サイト内のトラッカー総数を表示","setting.dntBadge.desc":"ブラウザーにバッジを追加して、ウェブサイトに含まれているトラッカー件数がすぐにわかるようにします。","setting.dntAutoBlock.name":"すべてのトラッカーを自動的にブロック","setting.dntAutoBlock.desc":"アクセスするすべてのウェブサイトで見つかったトラッカーをすべてブロックします。","setting.dntSocial.desc":"すべてのソーシャル ネットワーク トラッカーをブロック","setting.dntAdTracking.desc":"すべての広告トラッカーをブロック","setting.dntWebAnalytics.desc":"すべてのウェブ解析トラッカーをブロック","setting.dntOthers.desc":"その他のトラッカーをすべてブロック","setting.productAnalysis.name":"新製品の開発を目的として、製品のパフォーマンスと使用状況の分析を許可します","setting.productAnalysis.tooltip":"拡張機能の使用状況データ、内部拡張機能 ID、ブラウザーの種類とバージョン、オペレーティング システム、国、言語、アバスト アンチウイルス アプリのステータスを収集してサーバーに送信します。","setting.urlConsent.name":"URL の収集に同意します","serp.safe.desc":"このウェブサイトは安全です","serp.bad.desc":"このサイトは信頼できない可能性があります","serp.unknown.desc":"このサイトはまだ評価されていません","serp.unsafe.desc":"このサイトは安全ではありません","topbar.openBankMode":"バンク モードで開く","topbar.desc":"あなたの金融取引データは他人に見られる可能性があります。","topbar.tooltip":"バンク モードは、アバスト アンチウイルスと共にインストールされるアバスト セキュア ブラウザに含まれている機能です。ショッピングとバンキングのセッションを安全に分離し、クレジット カード番号やパスワードなどの個人データを盗もうとするハッカーから保護します。","topbar.dontShowAgain":"今後このサイトでは表示しない","installPage.consent.title":"セキュリティを確保するため、ウェブ アドレスのスキャンを許可してください。","installPage.consent.desc":"許可された場合、アクセスしたウェブサイトのアドレスを確認して、安全なサイトかどうかをお知らせします（{URL_START}プライバシー ポリシー{URL_END}をご覧ください）。","installPage.agreed.title":"ありがとうございます！","installPage.agreed.desc":"今後は、危険なウェブサイトから保護されます。","installPage.disagreed.title":"承知しました","installPage.disagreed.desc":"ウェブ アドレスのスキャンを希望しない場合は、{0} オンライン セキュリティをアンインストールしてください。お客様の安全をお祈り致します。","installPage.consent.disagree":"いいえ、結構です","installPage.consent.agree":"はい、ウェブ アドレスをスキャンしてください","panel.consent.agree":"ウェブ アドレスをスキャン"},"ko":{"AVG.title":"Online Security","Avast.title":"Avast Online Security","global.beta":"베타","global.detailsShow":"세부정보","global.detailsHide":"세부정보 숨기기","global.done":"완료","global.leaveSite":"사이트 나가기","global.switcher.off":"OFF","global.switcher.on":"ON","global.close":"닫기","global.back":"뒤로","background.icon.unknown":"{0} - 알 수 없는 사이트","background.icon.safe":"{0} - 이 웹사이트는 안전함","background.icon.bad":"{0} - 이 사이트는 신뢰할 수 없음","background.icon.unsafe":"{0} - 이 웹사이트는 안전하지 않음","security.title":"보안","security.safe.title":"이 웹사이트는 안전함","security.safe.item1.desc":"피싱 없음","security.safe.item1.tooltip":"이 웹사이트에서 비밀번호, 신용카드 번호 등의 중요한 정보를 도용하려는 어떤 시도도 발견하지 못했습니다.","security.safe.item2.desc":"맬웨어 없음","security.safe.item2.tooltip":"이 웹사이트에서 어떤 악성 코드도 발견하지 못했습니다.","security.safe.item3.desc":"신뢰할 수 있음","security.safe.item3.tooltip":"{0}명의 사용자들이 {0} Online Security에서 {1}을(를) 클릭하여 이 웹사이트를 신뢰할 수 있다고 평가했습니다.","security.bad.title":"이 사이트는 신뢰할 수 없음","security.bad.desc":"여기서 어떤 피싱 위협이나 맬웨어도 발견하지 못했지만 많은 사용자들이 이 사이트를 나쁘게 평가했습니다.","security.unknown.title":"알 수 없는 사이트","security.unknown.desc":"이 웹사이트를 평가할 충분한 정보가 아직 없습니다.","security.unsafe.title":"이 웹사이트는 안전하지 않음","security.unsafe.phishing.desc":"이 웹사이트는 피싱 사이트로 표시되었습니다. 피싱은 비밀번호, 신용카드 번호 등과 같은 중요한 정보를 도용하려는 시도입니다.","security.unsafe.malware.desc":"이 웹사이트에서 컴퓨터를 손상시키거나 개인 정보를 도용할 수 있는 악성 코드를 발견했습니다.","rating.question.desc":"{0}을(를) 신뢰하십니까?","rating.negative":"이 웹사이트에 부적절한 콘텐츠가 있습니까? (선택 사항)","rating.thanks":"평가해 주셔서 감사합니다!","rating.trusted.desc":"귀하는 {0}을(를) <i>신뢰합니다</i>","rating.untrusted.desc":"귀하는 {0}을(를) <i>신뢰하시지 않습니다</i>","rating.revert.tooltip":"평가를 제거하려면 클릭하십시오","rating.tooltip":"이 웹사이트의 안전 평가에는 여러분의 신뢰 또는 불신이 반영됩니다.","rating.category.pornography":"포르노","rating.category.violence":"무기/폭력","rating.category.gambling":"도박","rating.category.drugs":"알코올/마약","rating.category.illegal":"와레즈/불법","rating.category.others":"기타","privacy.title":"개인정보 보호","privacy.group.Social.desc":"소셜 네트워크","privacy.group.Social.block.desc":"모든 소셜 네트워크 추적 차단","privacy.group.Social.block.tooltip":"방문하는 모든 웹사이트에서 소셜 네트워크 추적을 차단합니다.","privacy.group.Social.unblock.desc":"모든 소셜 네트워크 추적 차단 해제","privacy.group.Social.unblock.tooltip":"방문하는 모든 웹사이트에서 소셜 네트워크 추적을 허용합니다.","privacy.group.AdTracking.desc":"광고 추적","privacy.group.AdTracking.block.desc":"모든 광고 추적 차단","privacy.group.AdTracking.block.tooltip":"방문하는 모든 웹사이트에서 광고 추적을 차단합니다.","privacy.group.AdTracking.unblock.desc":"모든 광고 추적 차단 해제","privacy.group.AdTracking.unblock.tooltip":"방문하는 모든 웹사이트에서 광고 추적을 허용합니다.","privacy.group.WebAnalytics.desc":"웹 분석","privacy.group.WebAnalytics.block.desc":"모든 웹 분석 추적 차단","privacy.group.WebAnalytics.block.tooltip":"방문하는 모든 웹사이트에서 웹 분석 추적을 차단합니다.","privacy.group.WebAnalytics.unblock.desc":"모든 웹 분석 추적 차단 해제","privacy.group.WebAnalytics.unblock.tooltip":"방문하는 모든 웹사이트에서 기타 추적을 허용합니다.","privacy.group.Others.desc":"기타","privacy.group.Others.block.desc":"기타 모든 추적 차단","privacy.group.Others.block.tooltip":"방문하는 모든 웹사이트에서 기타 추적을 차단합니다.","privacy.group.Others.unblock.desc":"기타 모든 추적 차단 해제","privacy.trackersBlockedAll":"{1}에서 <i>{0}개의 추적기 모두</i> 차단됨","privacy.trackersBlockedSome":"{2}에서 <i>{1}개 추적기 중 {0}개</i>가 차단됨","privacy.trackersBlockedNone":"{1}에서 <i>{0}개의 추적</i> 시스템 발견","privacy.trackersBlocked":"{1}개 중 {0}개 차단됨","privacy.trackersFound":"{0}개 발견","privacy.trackersNone":"없음","privacy.trackerBlock.desc":"차단","privacy.trackerBlock.tooltip":"방문하는 모든 웹사이트에서 [{0}]을(를) 차단합니다.","privacy.trackerUnblock.desc":"차단됨","privacy.trackerUnblock.tooltip":"방문하는 모든 웹사이트에서 [{0}]을(를) 차단 해제합니다.","privacy.trackerUnblockOnAutoBlock.tooltip":"특정 추적기를 차단 해제하려면 자동 차단을 끄십시오.","privacy.automaticBlocking.desc":"모든 추적기를 자동 차단","privacy.automaticBlocking.tooltip":"방문하는 모든 웹사이트에서 발견된 모든 추적기를 자동으로 차단합니다.","setting.title":"설정","setting.serp.name":"내 검색 결과 표시","setting.serp.desc":"Google, Yahoo! 등에서 검색 결과에 컬러 아이콘을 추가하면 어떤 결과가 클릭해도 안전한지 알 수 있습니다(녹색 = 안전함, 회색 = 알 수 없음, 빨간색 = 안전하지 않음).","setting.serpPopup.name":"검색 결과에 대한 도구 설명 표시","setting.serpPopup.desc":"아이콘 위에 마우스를 갖다 대면 자세한 정보가 표시됩니다.","setting.secureBrowser.Avast.name":"Secure Browser","setting.secureBrowser.Avast.desc":"중요한 금융 사이트의 경우 뱅킹 모드로 전환(Avast Antivirus와 Avast Secure Browser가 설치되어 있어야 함)","setting.secureBrowser.AVG.name":"Secure Browser","setting.secureBrowser.AVG.desc":"중요한 금융 사이트의 경우 뱅킹 모드로 전환(AVG AntiVirus와 AVG Secure Browser가 설치되어 있어야 함)","setting.dntBadge.name":"사이트의 모든 추적기 표시","setting.dntBadge.desc":"브라우저에 배지를 추가하면 웹사이트에 얼마나 많은 추적기가 있는지 바로 알 수 있습니다.","setting.dntAutoBlock.name":"모든 추적기를 자동 차단","setting.dntAutoBlock.desc":"방문하는 모든 웹사이트에서 발견된 모든 추적기를 차단합니다.","setting.dntSocial.desc":"모든 소셜 네트워크 추적기 차단","setting.dntAdTracking.desc":"모든 광고 추적기 차단","setting.dntWebAnalytics.desc":"모든 웹 분석 추적기 차단","setting.dntOthers.desc":"기타 모든 추적기 차단","setting.productAnalysis.name":"새로운 제품 개발을 위한 제품 성능 및 사용 분석 허용","setting.productAnalysis.tooltip":"확장, 내부 확장 식별자, 브라우저 유형 및 버전, 운영 체제, 국가, 언어, Avast 안티바이러스 앱 상태에 대한 사용 데이터를 수집하여 당사 서버로 전송합니다.","setting.urlConsent.name":"URL 수집 동의","serp.safe.desc":"이 웹사이트는 안전함","serp.bad.desc":"이 사이트는 신뢰할 수 없을 수 있음","serp.unknown.desc":"이 사이트는 평가되지 않음","serp.unsafe.desc":"이 사이트는 안전하지 않음","topbar.openBankMode":"뱅킹 모드에서 열기","topbar.desc":"금융 데이터를 다른 사람이 볼 수 있습니다.","topbar.tooltip":"뱅킹 모드는 Avast Antivirus에 설치된 Avast Secure Browser 기능으로, 쇼핑 및 뱅킹 세션을 안전하게 격리하여 해커가 귀하의 신용카드 번호, 비밀번호 및 기타 개인 데이터를 도용하지 못하도록 방지합니다.","topbar.dontShowAgain":"이 사이트 다시 표시 안 함","installPage.consent.title":"웹 주소를 검사하여 사용자를 보호하도록 허용하시겠습니까?","installPage.consent.desc":"동의하면 귀하가 방문하는 웹사이트의 주소를 검사하여 해당 사이트가 안전한지 알려드립니다({URL_START}개인정보 보호 정책{URL_END} 참조).","installPage.agreed.title":"감사합니다!","installPage.agreed.desc":"이제 안전하지 않은 웹사이트로부터 보호됩니다.","installPage.disagreed.title":"괜찮습니다","installPage.disagreed.desc":"웹 주소를 검사하는 것을 원하지 않는 경우에는 {0} Online Security를 제거하면 되지만 안전하지 않을 수 있습니다.","installPage.consent.disagree":"아니요, 괜찮습니다.","installPage.consent.agree":"예, 웹 주소를 검사합니다.","panel.consent.agree":"웹 주소 검사"},"lt":{"AVG.title":"„Online Security“","Avast.title":"„Avast Online Security“","global.beta":"Beta versija","global.detailsShow":"Išsami informacija","global.detailsHide":"Slėpti išsamią informaciją","global.done":"Baigta","global.leaveSite":"Palikti interneto svetainę","global.switcher.off":"IŠJ","global.switcher.on":"ĮJ.","global.close":"Užverti","global.back":"Atgal","background.icon.unknown":"{0} – Nežinoma interneto svetainė","background.icon.safe":"{0} – Ši interneto svetainė yra saugi","background.icon.bad":"{0} – Ši interneto svetainė gali būti nepatikima","background.icon.unsafe":"{0} – Ši interneto svetainė yra nesaugi","security.title":"Saugumas","security.safe.title":"Ši interneto svetainė yra saugi","security.safe.item1.desc":"Nėra sukčiavimo","security.safe.item1.tooltip":"Šioje interneto svetainėje neaptikome bandymų pavogti svarbią informaciją, tokią kaip slaptažodžiai, kredito kortelių numeriai ir kt.","security.safe.item2.desc":"Nėra kenkimo programų","security.safe.item2.tooltip":"Šioje interneto svetainėje neaptikome kenkėjiško kodo.","security.safe.item3.desc":"Patikima","security.safe.item3.tooltip":"{0} naudotojų įvertino šį tinklalapį kaip patikimą paspausdami {1} {0} „Online Security“.","security.bad.title":"Ši interneto svetainė gali būti nepatikima","security.bad.desc":"Joje neradome jokių sukčiavimo grėsmių ar kenkimo programų, tačiau daugelis mūsų naudotojų neigiamai įvertino šią interneto svetainę.","security.unknown.title":"Nežinoma interneto svetainė","security.unknown.desc":"Kol kas neturime pakankamai informacijos įvertinti šią interneto svetainę.","security.unsafe.title":"Ši interneto svetainė yra nesaugi","security.unsafe.phishing.desc":"Ši interneto svetainė pažymėta kaip sukčiavimo svetainė. Sukčiavimas yra bandymas pavogti svarbią informaciją, tokią kaip jūsų slaptažodžiai, kredito kortelių numeriai ir kt.","security.unsafe.malware.desc":"Šioje interneto svetainėje radome kenkėjišką kodą, galintį pakenkti jūsų kompiuteriui ar pavogti jūsų privačius duomenis.","rating.question.desc":"Ar pasitikite {0}?","rating.negative":"Ar šioje interneto svetainėje yra netinkamo turinio? (neprivaloma nurodyti)","rating.thanks":"Dėkojame už jūsų įvertinimą!","rating.trusted.desc":"Jūs <i>pasitikite</i> {0}","rating.untrusted.desc":"Jūs <i>nepasitikite</i> {0}","rating.revert.tooltip":"Spauskite, norėdami pašalinti savo įvertinimą","rating.tooltip":"Į jūsų įvertinimą atsižvelgsime vertindami šios interneto svetainės saugumą.","rating.category.pornography":"Pornografija","rating.category.violence":"Ginklai / smurtas","rating.category.gambling":"Azartiniai žaidimai","rating.category.drugs":"Alkoholis / narkotikai","rating.category.illegal":"Nelegali programinė įranga / nelegalus turinys","rating.category.others":"Kita","privacy.title":"Privatumas","privacy.group.Social.desc":"Socialiniai tinklai","privacy.group.Social.block.desc":"Blokuoti visą socialinių tinklų sekimą","privacy.group.Social.block.tooltip":"Užblokuosite socialinių tinklų sekimą kiekvienoje interneto svetainėje, kurioje apsilankysite.","privacy.group.Social.unblock.desc":"Atblokuoti visą socialinių tinklų sekimą","privacy.group.Social.unblock.tooltip":"Atblokuosite socialinių tinklų sekimą kiekvienoje interneto svetainėje, kurioje apsilankysite.","privacy.group.AdTracking.desc":"Reklamos sekimas","privacy.group.AdTracking.block.desc":"Blokuoti visą reklamų sekimą","privacy.group.AdTracking.block.tooltip":"Užblokuosite reklamos sekimą kiekvienoje interneto svetainėje, kurioje apsilankysite.","privacy.group.AdTracking.unblock.desc":"Atblokuoti visą reklamų sekimą","privacy.group.AdTracking.unblock.tooltip":"Atblokuosite reklamos sekimą kiekvienoje interneto svetainėje, kurioje apsilankysite.","privacy.group.WebAnalytics.desc":"Žiniatinklio analitika","privacy.group.WebAnalytics.block.desc":"Užblokuoti visą žiniatinklio analitikos sekimą","privacy.group.WebAnalytics.block.tooltip":"Užblokuosite žiniatinklio analitikos sekimą kiekvienoje interneto svetainėje, kurioje apsilankysite.","privacy.group.WebAnalytics.unblock.desc":"Atblokuoti visą žiniatinklio analitikos sekimą","privacy.group.WebAnalytics.unblock.tooltip":"Atblokuosite kitą sekimą kiekvienoje interneto svetainėje, kurioje apsilankysite.","privacy.group.Others.desc":"Kita","privacy.group.Others.block.desc":"Blokuoti visą kitą sekimą","privacy.group.Others.block.tooltip":"Užblokuosite kitą sekimą kiekvienoje interneto svetainėje, kurioje apsilankysite.","privacy.group.Others.unblock.desc":"Atblokuoti visą kitą sekimą","privacy.trackersBlockedAll":"<i>{0} sekiklis</i> užblokuotas {1} | <i>{0} sekikliai</i> užblokuoti {1} | <i>{0} sekiklių</i> užblokuota {1} | <i>{0} sekiklių</i> užblokuota {1}","privacy.trackersBlockedSome":"<i>{0} iš {1} sekiklių</i> užblokuotas {2} | <i>{0} iš {1} sekiklių</i> užblokuoti {2} | <i>{0} iš {1} sekiklių</i> užblokuota {2} | <i>{0} iš {1} sekiklių</i> užblokuota {2}","privacy.trackersBlockedNone":"<i>{0} sekimo</i> sistema {1} | <i>{0} sekimo</i> sistemos {1} | <i>{0} sekimo</i> sistemų {1} | <i>{0} sekimo</i> sistemų {1}","privacy.trackersBlocked":"{0} iš {1} užblokuoti","privacy.trackersFound":"{0} rasta","privacy.trackersNone":"nieko","privacy.trackerBlock.desc":"Blokuoti","privacy.trackerBlock.tooltip":"Užblokuosite [{0}] kiekvienoje interneto svetainėje, kurioje apsilankysite.","privacy.trackerUnblock.desc":"Užblokuota","privacy.trackerUnblock.tooltip":"Atblokuosite [{0}] kiekvienoje interneto svetainėje, kurioje apsilankysite.","privacy.trackerUnblockOnAutoBlock.tooltip":"Norėdami užblokuoti konkretų sekiklį, išjunkite automatinį blokavimą.","privacy.automaticBlocking.desc":"Automatiškai blokuoti visus sekiklius","privacy.automaticBlocking.tooltip":"Automatiškai užblokuosime visus rastus sekiklius kiekvienoje interneto svetainėje, kurioje apsilankysite.","setting.title":"Nuostatos","setting.serp.name":"Pažymėti mano paieškos rezultatus","setting.serp.desc":"Pridėkite spalvotų piktogramų prie savo paieškų rezultatų „Google“, „Yahoo!“ ir kt., kad pamatytumėte, kuriuos rezultatus saugu atverti. (Žalia = saugu, pilka = nežinoma, raudona = nesaugu)","setting.serpPopup.name":"Rodyti paieškų rezultatų paaiškinimus","setting.serpPopup.desc":"Užveskite pelytės žymeklį ant piktogramų, kad pamatytumėte daugiau informacijos.","setting.secureBrowser.Avast.name":"„Secure Browser“","setting.secureBrowser.Avast.desc":"Persijungti į Banko režimą naršant jautrius finansinius puslapius (reikia įdiegti „Avast Antivirus“ antivirusinę programą ir „Avast Secure Browser“ naršyklę)","setting.secureBrowser.AVG.name":"„Secure Browser“","setting.secureBrowser.AVG.desc":"Persijungti į Banko režimą naršant po jautrius finansinius tinklalapius (turi būti įdiegta „AVG AntiVirus“ antivirusinė programa ir „AVG Secure Browser“ naršyklė)","setting.dntBadge.name":"Rodyti, kiek sekiklių yra interneto svetainėje","setting.dntBadge.desc":"Pridėkite ženklelį prie savo interneto naršyklės, kad iš karto pamatytumėte, kiek sekiklių yra interneto svetainėje.","setting.dntAutoBlock.name":"Automatiškai blokuoti visus sekiklius","setting.dntAutoBlock.desc":"Blokuoti visus rastus sekiklius kiekvienoje interneto svetainėje, kurioje apsilankysite.","setting.dntSocial.desc":"Blokuoti visus socialinių tinklų sekiklius","setting.dntAdTracking.desc":"Blokuoti visus reklamos sekiklius","setting.dntWebAnalytics.desc":"Užblokuoti visus žiniatinklio analitikos sekiklius","setting.dntOthers.desc":"Blokuoti visus kitus sekiklius","setting.productAnalysis.name":"Leisti atlikti produkto veikimo analizę bei naudoti duomenis naujų produktų kūrimui","setting.productAnalysis.tooltip":"Mes renkame ir siunčiame į savo serverius plėtinio naudojimo, vidinio plėtinio identifikatoriaus, naršyklės tipo ir versijos, operacinės sistemos, šalies, kalbos, „Avast antivirus“ programos būsenos duomenis.","setting.urlConsent.name":"Sutikimas rinkti URL","serp.safe.desc":"Ši interneto svetainė yra saugi","serp.bad.desc":"Ši interneto svetainė gali būti nepatikima","serp.unknown.desc":"Ši interneto svetainė neįvertinta","serp.unsafe.desc":"Ši interneto svetainė yra nesaugi","topbar.openBankMode":"Atverti banko režimu","topbar.desc":"Jūsų finansiniai duomenys gali būti matomi kitiems.","topbar.tooltip":"Banko režimas, „Avast Secure Browser“, kuri yra įdiegta kartu su „Avast“ antivirusine sistema, elementas, saugiai izoliuoja pirkimų ir bankines sesijas nuo įsilaužėlių, kad nebūtų pavogti jūsų kredito kortelių numeriai, slaptažodžiai ir kiti privatūs duomenys.","topbar.dontShowAgain":"Daugiau neberodyti šioje interneto svetainėje","installPage.consent.title":"Ar leidžiate mums jus saugoti nuskaitant svetainių adresus?","installPage.consent.desc":"Jei sutinkate, mes peržiūrėsime jūsų lankomų svetainių adresus, kad galėtumėme nustatyti, ar jos saugios. (žr. mūsų {URL_START}Privatumo politiką{URL_END})","installPage.agreed.title":"Dėkojame!","installPage.agreed.desc":"Dabar saugome jus nuo nesaugių svetainių.","installPage.disagreed.title":"Jokių nuoskaudų","installPage.disagreed.desc":"Jei nenorite, kad nuskaitytumėme jūsų interneto adresus, tiesiog įdiekite {0} „Online Security“ – išliksite saugūs!","installPage.consent.disagree":"Ne, ačiū","installPage.consent.agree":"Taip, nuskaityti interneto svetainių adresus","panel.consent.agree":"Nuskaityti svetainių adresus"},"lv":{"AVG.title":"Drošība tiešsaistē","Avast.title":"Avast Online Security","global.beta":"Beta","global.detailsShow":"Detalizēta informācija","global.detailsHide":"Paslēpt detalizētu informāciju","global.done":"Gatavs","global.leaveSite":"Aizvērt vietni","global.switcher.off":"Izs","global.switcher.on":"Ies","global.close":"Aizvērt","global.back":"Atpakaļ","background.icon.unknown":"{0} - nezināma vietne","background.icon.safe":"{0} - šī vietne ir droša","background.icon.bad":"{0} - šī vietne, iespējams, ir neuzticama","background.icon.unsafe":"{0} - šī vietne nav droša","security.title":"Drošība","security.safe.title":"Šī vietne ir droša","security.safe.item1.desc":"Nav pikšķerēšanas","security.safe.item1.tooltip":"Mēs nekonstatējām mēģinājumus šajā tīmekļa vietnē nozagt sensitīvu informāciju, piemēram, paroles, kredītkaršu numurus u.c.","security.safe.item2.desc":"Nav ļaunprogrammatūras","security.safe.item2.tooltip":"Mēs nekonstatējām nevienu ļaunprātīgu kodu šajā tīmekļa vietnē.","security.safe.item3.desc":"Uzticama","security.safe.item3.tooltip":"{0} lietotāji ir novērtējuši šo vietni kā uzticamu, noklikšķinot uz {1} {0} tiešsaistes drošības sadaļā.","security.bad.title":"Šī vietne, iespējams, ir neuzticama","security.bad.desc":"Mēs nekonstatējām šeit nevienu pikšķerēšanas apdraudējumu vai ļaunprogrammatūru, taču daudzi no mūsu lietotājiem to vērtēja negatīvi.","security.unknown.title":"Nezināma vietne","security.unknown.desc":"Mums joprojām nav pietiekami daudz informācijas, lai novērtētu šo tīmekļa vietni.","security.unsafe.title":"Šī vietne nav droša","security.unsafe.phishing.desc":"Šī tīmekļa vietne ir atzīmēta kā pikšķerēšanas vietne. Pikšķerēšana ir mēģinājums nozagt sensitīvu informāciju, piemēram, jūsu paroles, kredītkaršu numurus utt.","security.unsafe.malware.desc":"Mēs šajā tīmekļa vietnē konstatējām ļaunprātīgu kodu, kas var kaitēt jūsu datoram vai nozagt jūsu privātos datus.","rating.question.desc":"Vai uzticaties {0}?","rating.negative":"Vai šajā tīmekļa vietnē ir nepiemērots saturs? (papildiespēja)","rating.thanks":"Paldies par jūsu vērtējumu!","rating.trusted.desc":"Jūs <i>uzticaties</i> {0}","rating.untrusted.desc":"Jūs <i>neuzticaties</i> {0}","rating.revert.tooltip":"Noklikšķiniet, lai noņemtu savu vērtējumu","rating.tooltip":"Jūsu uzticēšanās vai neuzticēšanās tiks ņemta vērā mūsu drošības novērtējumā par šo tīmekļa vietni.","rating.category.pornography":"Pornogrāfija","rating.category.violence":"Ieroči un vardarbība","rating.category.gambling":"Azartspēles","rating.category.drugs":"Alkohols un narkotikas","rating.category.illegal":"Nelegālas programmas","rating.category.others":"Cits","privacy.title":"Privātums","privacy.group.Social.desc":"Sociālie tīkli","privacy.group.Social.block.desc":"Bloķēt visu sociālo tīklu izsekošanu","privacy.group.Social.block.tooltip":"Šādi tiks bloķēta sociālo tīklu izsekošana katrā tīmekļa vietnē, ko apmeklējat.","privacy.group.Social.unblock.desc":"Atbloķēt visu sociālo tīklu izsekošanu","privacy.group.Social.unblock.tooltip":"Šādi tiks atļauta sociālo tīklu izsekošana katrā tīmekļa vietnē, ko apmeklējat.","privacy.group.AdTracking.desc":"Reklāmu izsekošana","privacy.group.AdTracking.block.desc":"Bloķēt visas reklāmas izsekošanu","privacy.group.AdTracking.block.tooltip":"Šādi tiks bloķēta reklāmas izsekošana katrā tīmekļa vietnē, ko apmeklējat.","privacy.group.AdTracking.unblock.desc":"Atbloķēt visas reklāmas izsekošanu","privacy.group.AdTracking.unblock.tooltip":"Šādi tiks atbloķēta reklāmas izsekošana katrā tīmekļa vietnē, ko apmeklējat.","privacy.group.WebAnalytics.desc":"Tīmekļa analīze","privacy.group.WebAnalytics.block.desc":"Bloķēt visas tīmekļa analīzes izsekošanu","privacy.group.WebAnalytics.block.tooltip":"Šādi tiks bloķēta tīmekļa analīzes izsekošana katrā tīmekļa vietnē, ko apmeklējat.","privacy.group.WebAnalytics.unblock.desc":"Atbloķēt visas tīmekļa analīzes izsekošanu","privacy.group.WebAnalytics.unblock.tooltip":"Šādi tiks atļauta cita veida izsekošana katrā tīmekļa vietnē, ko apmeklējat.","privacy.group.Others.desc":"Cits","privacy.group.Others.block.desc":"Bloķēt visu pārējo izsekošanu","privacy.group.Others.block.tooltip":"Šādi tiks bloķēta cita veida izsekošana katrā tīmekļa vietnē, ko apmeklējat.","privacy.group.Others.unblock.desc":"Atbloķēt visu pārējo izsekošanu","privacy.trackersBlockedAll":"<i>Visi {0} izsekotāji</i> bloķēti {1} | <i>{0} izsekotājs</i> bloķēts {1} | <i>Visi {0} izsekotāji</i> bloķēti {1}","privacy.trackersBlockedSome":"<i>{0} no {1} izsekotājiem</i> bloķēti {2} | <i>{0} no {1} izsekotājiem</i> bloķēts {2} | <i>{0} no {1} izsekotājiem</i> bloķēti {2}","privacy.trackersBlockedNone":"<i>{0} izsekošanas</i> sistēmu {1} | <i>{0} izsekošanas</i> sistēma {1} | <i>{0} izsekošanas</i> sistēmas {1}","privacy.trackersBlocked":"Bloķēts {0} no {1}","privacy.trackersFound":"Atrasti {0}","privacy.trackersNone":"nav","privacy.trackerBlock.desc":"Bloķēt","privacy.trackerBlock.tooltip":"Šādi tiks bloķēts [{0}] katrā vietnē, ko apmeklējat.","privacy.trackerUnblock.desc":"Bloķēts","privacy.trackerUnblock.tooltip":"Šādi tiks atbloķēts [{0}] katrā vietnē, ko apmeklējat.","privacy.trackerUnblockOnAutoBlock.tooltip":"Lai atbloķētu konkrētu izsekotāju, izslēdziet automātisko bloķēšanu.","privacy.automaticBlocking.desc":"Automātiski bloķēt visus izsekotājus","privacy.automaticBlocking.tooltip":"Bloķējiet visus izsekotājus katrā tīmekļa vietnē, ko apmeklējat.","setting.title":"Iestatījumi","setting.serp.name":"Atzīmēt manas meklēšanas rezultātus","setting.serp.desc":"Pievienojiet ikonas saviem meklēšanas rezultātiem pakalpojumā Google, Yahoo! utt., lai redzētu, uz kuriem rezultātiem var droši noklikšķināt (zaļš = drošs, pelēks = nezināms, sarkans = nedrošs).","setting.serpPopup.name":"Rādīt rīka padomus meklēšanas rezultātiem","setting.serpPopup.desc":"Novietojiet peles rādītāju virs mūsu ikonām, lai skatītu plašāku informāciju.","setting.secureBrowser.Avast.name":"Secure Browser","setting.secureBrowser.Avast.desc":"Sensitīvu finanšu vietņu gadījumā pārslēgties uz bankas režīmu (jāinstalē Avast antivīruss un Avast Secure Browser)","setting.secureBrowser.AVG.name":"Secure Browser","setting.secureBrowser.AVG.desc":"Sensitīvu finanšu vietņu gadījumā pārslēgties uz bankas režīmu (jāinstalē AVG antivīruss un AVG Secure Browser)","setting.dntBadge.name":"Rādīt kopējo izsekotāju skaitu vietnē","setting.dntBadge.desc":"Pievienojiet savā pārlūkprogrammā žetonu, lai uzreiz redzētu, cik daudz izsekotāju ir tīmekļa vietnē.","setting.dntAutoBlock.name":"Automātiski bloķēt visus izsekotājus","setting.dntAutoBlock.desc":"Bloķējiet visus izsekotājus katrā vietnē, ko apmeklējat.","setting.dntSocial.desc":"Bloķēt visu sociālo tīklu izsekotājus","setting.dntAdTracking.desc":"Bloķēt visas reklāmas izsekotājus","setting.dntWebAnalytics.desc":"Bloķēt visas tīmekļa analīzes izsekotājus","setting.dntOthers.desc":"Bloķēt cita satura izsekotājus","setting.productAnalysis.name":"Atļaut produkta snieguma un lietojuma analīzi jaunu produktu izstrādes nolūkos","setting.productAnalysis.tooltip":"Mēs ievācam un nosūtām mūsu serveriem šādus lietojuma datus: paplašinājums, iekšējais paplašinājuma identifikators, pārlūka tips un versija, operētājsistēma, valsts, valoda, Avast antivīrusa lietotnes statuss.","setting.urlConsent.name":"Piekrišana URL ievākšanai","serp.safe.desc":"Šī vietne ir droša","serp.bad.desc":"Šī vietne, iespējams, ir neuzticama","serp.unknown.desc":"Šai vietnei nav novērtējuma","serp.unsafe.desc":"Šī vietne nav droša","topbar.openBankMode":"Atvērt bankas režīmā","topbar.desc":"Jūsu finanšu dati var būt redzami citiem.","topbar.tooltip":"Bankas režīms, kas ir daļa no Avast Secure Browser un ir instalēts kopā ar jūsu Avast pretvīrusu programmu, droši izolē iepirkšanās un bankas darbību sesijas, lai neļautu urķiem nozagt jūsu kredītkaršu numurus, paroles un citus personas datus.","topbar.dontShowAgain":"Vairs neradīt šo vietni","installPage.consent.title":"Vai atļaujat mums aizsargāt jūs, skenējot tīmekļa adreses?","installPage.consent.desc":"Ja piekrītat, mēs apskatīsim jūsu apmeklēto tīmekļa vietņu adreses, lai varētu informēt, vai šīs vietnes ir drošas. (Skatiet mūsu {URL_START}Privātuma politiku{URL_END})","installPage.agreed.title":"Paldies!","installPage.agreed.desc":"Tagad mēs aizsargājam jūs no nedrošām tīmekļa vietnēm.","installPage.disagreed.title":"Bez spēcīgām izjūtām","installPage.disagreed.desc":"Ja nevēlaties, lai mēs skenētu jūsu tīmekļa adreses, vienkārši atinstalējiet {0} Online Security un droši uz priekšu!","installPage.consent.disagree":"Paldies, nē","installPage.consent.agree":"Jā, skenēt tīmekļa adreses","panel.consent.agree":"Skenēt tīmekļa adreses"},"ms":{"AVG.title":"Online Security","Avast.title":"Avast Online Security","global.beta":"Beta","global.detailsShow":"Butiran","global.detailsHide":"Sembunyikan butiran","global.done":"Selesai","global.leaveSite":"Tinggalkan tapak","global.switcher.off":"OFF","global.switcher.on":"ON","global.close":"Tutup","global.back":"Kembali","background.icon.unknown":"{0} – Tapak tidak diketahui","background.icon.safe":"{0} – Tapak web ini selamat","background.icon.bad":"{0} – Tapak web ini mungkin tidak boleh dipercayai","background.icon.unsafe":"{0} – Tapak web ini tidak selamat","security.title":"Keselamatan","security.safe.title":"Tapak web ini selamat","security.safe.item1.desc":"Tiada pemancingan data","security.safe.item1.tooltip":"Kami tidak mengesan apa-apa percubaan untuk mencuri maklumat sensitif seperti kata laluan, nombor kad kredit dan sebagainya pada tapak web ini.","security.safe.item2.desc":"Tiada perisian hasad","security.safe.item2.tooltip":"Kami tidak mengesan sebarang kod berniat jahat pada tapak web ini.","security.safe.item3.desc":"Dipercayai","security.safe.item3.tooltip":"{0} pengguna telah menilai tapak web ini sebagai boleh dipercayai dengan mengklik {1} dalam {0} Online Security.","security.bad.title":"Tapak web ini mungkin tidak boleh dipercayai","security.bad.desc":"Kami tidak menemui sebarang ancaman pemancingan data atau perisian hasad di sini, tetapi ramai pengguna kami menilai tapak ini sebagai tidak baik.","security.unknown.title":"Tapak tidak diketahui","security.unknown.desc":"Kami tiada maklumat yang mencukupi lagi untuk menilai tapak web ini.","security.unsafe.title":"Tapak web ini tidak selamat","security.unsafe.phishing.desc":"Tapak web ini telah ditandai sebagai tapak pemancingan data. Pemancingan data adalah percubaan untuk mencuri maklumat sensitif daripada anda seperti kata laluan, nombor kad kredit dan sebagainya.","security.unsafe.malware.desc":"Kami menemui kod berniat jahat pada tapak web ini yang boleh memudaratkan komputer atau mencuri data peribadi anda.","rating.question.desc":"Adakah anda mempercayai {0}?","rating.negative":"Ada sebarang kandungan yang tidak wajar pada tapak web ini? (pilihan)","rating.thanks":"Terima kasih kerana membuat penilaian!","rating.trusted.desc":"Anda <i>percaya</i> {0}","rating.untrusted.desc":"Anda <i>tidak percaya</i> {0}","rating.revert.tooltip":"Klik untuk membuang penilaian anda","rating.tooltip":"Penilaian percaya atau tidak percaya daripada anda akan diambil kira dalam rating keselamatan kami untuk tapak web ini.","rating.category.pornography":"Pornografi","rating.category.violence":"Senjata/Keganasan","rating.category.gambling":"Perjudian","rating.category.drugs":"Alkohol/Dadah","rating.category.illegal":"Cetak rompak/Menyalahi undang-undang","rating.category.others":"Lain-lain","privacy.title":"Privasi","privacy.group.Social.desc":"Rangkaian sosial","privacy.group.Social.block.desc":"Sekat semua penjejakan rangkaian sosial","privacy.group.Social.block.tooltip":"Ini akan menyekat penjejakan rangkaian sosial pada setiap tapak web yang anda lawati.","privacy.group.Social.unblock.desc":"Nyahsekat semua penjejakan rangkaian sosial","privacy.group.Social.unblock.tooltip":"Ini akan membenarkan penjejakan rangkaian sosial pada setiap tapak web yang anda lawati.","privacy.group.AdTracking.desc":"Penjejakan Iklan","privacy.group.AdTracking.block.desc":"Sekat semua penjejakan iklan","privacy.group.AdTracking.block.tooltip":"Ini akan menyekat penjejakan iklan pada setiap tapak web yang anda lawati.","privacy.group.AdTracking.unblock.desc":"Nyahsekat semua penjejakan iklan","privacy.group.AdTracking.unblock.tooltip":"Ini akan membenarkan penjejakan iklan pada setiap tapak web yang anda lawati.","privacy.group.WebAnalytics.desc":"Analisis Web","privacy.group.WebAnalytics.block.desc":"Sekat semua penjejakan analisis web","privacy.group.WebAnalytics.block.tooltip":"Ini akan menyekat penjejakan analisis web pada setiap tapak web yang anda lawati.","privacy.group.WebAnalytics.unblock.desc":"Nyahsekat semua penjejakan analisis web","privacy.group.WebAnalytics.unblock.tooltip":"Ini akan membenarkan penjejakan lain pada setiap tapak web yang anda lawati.","privacy.group.Others.desc":"Lain-lain","privacy.group.Others.block.desc":"Sekat semua penjejakan lain","privacy.group.Others.block.tooltip":"Ini akan menyekat penjejakan lain pada setiap tapak web yang anda lawati.","privacy.group.Others.unblock.desc":"Nyahsekat semua penjejakan lain","privacy.trackersBlockedAll":"<i>Semua {0} penjejak</i> disekat pada {1}","privacy.trackersBlockedSome":"<i>{0} daripada {1} penjejak</i> disekat pada {2}","privacy.trackersBlockedNone":"<i>{0} menjejaki</i> sistem pada {1}","privacy.trackersBlocked":"{0} daripada {1} disekat","privacy.trackersFound":"{0} ditemui","privacy.trackersNone":"jangan buat apa-apa","privacy.trackerBlock.desc":"Sekat","privacy.trackerBlock.tooltip":"Ini akan menyekat [{0}] pada setiap tapak web yang anda lawati.","privacy.trackerUnblock.desc":"Disekat","privacy.trackerUnblock.tooltip":"Ini akan menyahsekat [{0}] pada setiap tapak web yang anda lawati.","privacy.trackerUnblockOnAutoBlock.tooltip":"Untuk menyahsekat penjejak tertentu, matikan sekatan automatik.","privacy.automaticBlocking.desc":"Sekat semua penjejak secara automatik","privacy.automaticBlocking.tooltip":"Kami akan menyekat semua penjejak yang ditemui secara automatik pada setiap tapak web yang anda lawati.","setting.title":"Tetapan","setting.serp.name":"Tandakan hasil carian saya","setting.serp.desc":"Tambahkan ikon berwarna pada hasil carian anda di Google, Yahoo! dan sebagainya untuk melihat hasil carian yang selamat untuk diklik. (Hijau = Selamat, Kelabu = Tidak diketahui, Merah = Tidak selamat)","setting.serpPopup.name":"Tunjukkan petua alat untuk hasil carian","setting.serpPopup.desc":"Apungkan penuding tetikus pada ikon kami untuk melihat maklumat lanjut.","setting.secureBrowser.Avast.name":"Secure Browser","setting.secureBrowser.Avast.desc":"Beralih kepada Mod Bank untuk tapak kewangan yang sensitif (Avast Antivirus dan Avast Secure Browser perlu dipasang)","setting.secureBrowser.AVG.name":"Secure Browser","setting.secureBrowser.AVG.desc":"Beralih kepada Mod Bank untuk tapak kewangan yang sensitif (AVG AntiVirus dan AVG Secure Browser perlu dipasang)","setting.dntBadge.name":"Tunjukkan jumlah penjejak pada tapak","setting.dntBadge.desc":"Tambahkan lencana pada pelayar anda untuk melihat dengan serta-merta jumlah penjejak pada mana-mana tapak web.","setting.dntAutoBlock.name":"Sekat semua penjejak secara automatik","setting.dntAutoBlock.desc":"Sekat semua penjejak yang dijumpai pada setiap tapak web yang anda lawati.","setting.dntSocial.desc":"Sekat semua penjejak rangkaian sosial","setting.dntAdTracking.desc":"Sekat semua penjejak iklan","setting.dntWebAnalytics.desc":"Sekat semua penjejak analisis web","setting.dntOthers.desc":"Sekat semua penjejak lain","setting.productAnalysis.name":"Benarkan analisis prestasi dan penggunaan produk untuk pembangunan produk baharu","setting.productAnalysis.tooltip":"Kami mengumpul dan menghantar data penggunaan sambungan, pengecam sambungan dalaman, jenis dan versi pelayar, sistem pengendalian, negara, bahasa, status aplikasi antivirus Avast ke pelayan kami.","setting.urlConsent.name":"Persetujuan untuk menuai URL","serp.safe.desc":"Tapak web ini selamat","serp.bad.desc":"Tapak web ini mungkin tidak boleh dipercayai","serp.unknown.desc":"Tapak ini tiada penilaian","serp.unsafe.desc":"Tapak ini tidak selamat","topbar.openBankMode":"Buka dalam mod bank","topbar.desc":"Data kewangan anda mungkin dapat dilihat oleh orang lain.","topbar.tooltip":"Mod Bank, sebahagian daripada Avast Secure Browser yang dipasang dengan antivirus Avast anda, mengasingkan sesi beli-belah dan perbankan dengan selamat untuk menghalang penggodam daripada mencuri nombor kad kredit, kata laluan dan data peribadi anda yang lain.","topbar.dontShowAgain":"Jangan tunjukkan pada tapak ini lagi","installPage.consent.title":"Benarkan kami melindungi anda dengan mengimbas alamat web?","installPage.consent.desc":"Jika anda bersetuju, kami akan melihat alamat tapak web yang anda lawati supaya kami dapat memberitahu anda jika tapak tersebut selamat. (Lihat {URL_START}Dasar Privasi{URL_END} kami)","installPage.agreed.title":"Terima kasih!","installPage.agreed.desc":"Kini kami melindungi anda daripada tapak web yang tidak selamat.","installPage.disagreed.title":"Tiada kesukaran","installPage.disagreed.desc":"Jika anda tidak mahu kami mengimbas alamat web anda, nyahpasang sahaja {0} Online Security – dan semoga anda selamat di luar sana!","installPage.consent.disagree":"Tidak mengapa","installPage.consent.agree":"Ya, imbas alamat web","panel.consent.agree":"Imbas alamat web"},"nb":{"AVG.title":"Online Security","Avast.title":"Avast Online Security","global.beta":"Beta","global.detailsShow":"Detaljer","global.detailsHide":"Skjul detaljer","global.done":"Utført","global.leaveSite":"Forlat nettstedet","global.switcher.off":"AV","global.switcher.on":"PÅ","global.close":"Lukk","global.back":"Tilbake","background.icon.unknown":"{0} – ukjent nettsted","background.icon.safe":"{0} – dette nettstedet er trygt","background.icon.bad":"{0} – dette nettstedet kan være upålitelig","background.icon.unsafe":"{0} – dette nettstedet er usikkert","security.title":"Sikkerhet","security.safe.title":"Dette nettstedet er trygt","security.safe.item1.desc":"Ingen phishing","security.safe.item1.tooltip":"Vi har ikke oppdaget forsøk på å stjele sensitiv informasjon som passord, kortnummer osv. på dette nettstedet.","security.safe.item2.desc":"Ingen skadelig programvare","security.safe.item2.tooltip":"Vi har ikke oppdaget skadelig kode på dette nettstedet.","security.safe.item3.desc":"Klarert","security.safe.item3.tooltip":"{0} brukere har vurdert dette nettstedet som pålitelig ved å klikke på {1} i {0} Online Security.","security.bad.title":"Dette kan være upålitelig","security.bad.desc":"Vi fant ingen phishing-trusler eller skadelig programvare her, men mange av brukerne våre har gitt nettstedet tommel ned.","security.unknown.title":"Ukjent nettsted","security.unknown.desc":"Vi har foreløpig ikke nok informasjon til å vurdere dette nettstedet.","security.unsafe.title":"Dette nettstedet er usikkert","security.unsafe.phishing.desc":"Dette nettstedet er merket som et phishing-nettsted. Phishing er et forsøk på å stjele sensitiv informasjon som passord, kortnummer osv.","security.unsafe.malware.desc":"Vi har funnet skadelig kode på dette nettstedet, og det kan skade datamaskinen eller stjele privat informasjon fra deg.","rating.question.desc":"Stoler du på {0}?","rating.negative":"Er det upassende innhold på dette nettstedet? (valgfritt)","rating.thanks":"Takk for vurderingen!","rating.trusted.desc":"Du <i>stoler på</i> {0}","rating.untrusted.desc":"Du <i>stoler ikke på</i> {0}","rating.revert.tooltip":"Klikk for å fjerne vurderingen","rating.tooltip":"Når du gir tilbakemelding om at du stoler på eller ikke stoler på dette nettstedet, tas det med i sikkerhetsvurderingen vår av nettstedet.","rating.category.pornography":"Pornografi","rating.category.violence":"Våpen/vold","rating.category.gambling":"Pengespill","rating.category.drugs":"Alkohol/narkotika","rating.category.illegal":"Warez/ulovlig","rating.category.others":"Annet","privacy.title":"Personvern","privacy.group.Social.desc":"Sosiale nettverk","privacy.group.Social.block.desc":"Blokker all sporing fra sosiale nettverk","privacy.group.Social.block.tooltip":"Dette blokkerer sporing fra sosiale nettverk på alle nettsteder du besøker.","privacy.group.Social.unblock.desc":"Opphev all blokkering av sporing fra sosiale nettverk","privacy.group.Social.unblock.tooltip":"Dette tillater sporing fra sosiale nettverk på alle nettsteder du besøker.","privacy.group.AdTracking.desc":"Reklamesporing","privacy.group.AdTracking.block.desc":"Blokker all reklamesporing","privacy.group.AdTracking.block.tooltip":"Dette blokkerer reklamesporing på alle nettsteder du besøker.","privacy.group.AdTracking.unblock.desc":"Opphev blokkering av all reklamesporing","privacy.group.AdTracking.unblock.tooltip":"Dette tillater reklamesporing på alle nettsteder du besøker.","privacy.group.WebAnalytics.desc":"Webanalyse","privacy.group.WebAnalytics.block.desc":"Blokker all webanalysesporing","privacy.group.WebAnalytics.block.tooltip":"Dette blokkerer webanalysesporing på alle nettsteder du besøker.","privacy.group.WebAnalytics.unblock.desc":"Opphev blokkering av all webanalysesporing","privacy.group.WebAnalytics.unblock.tooltip":"Dette tillater annen sporing på alle nettsteder du besøker.","privacy.group.Others.desc":"Andre","privacy.group.Others.block.desc":"Blokker all annen sporing","privacy.group.Others.block.tooltip":"Dette blokkerer annen sporing på alle nettsteder du besøker.","privacy.group.Others.unblock.desc":"Opphev blokkering av all annen sporing","privacy.trackersBlockedAll":"<i>{0} av 1 sporingstjeneste</i> blokkert på {1} | <i>Alle {0} sporingstjenester</i> blokkert på {1}","privacy.trackersBlockedSome":"<i>{0} av {1} sporingstjeneste</i> blokkert på {2} | <i>{0} av {1} sporingstjenester</i> blokkert på {2}","privacy.trackersBlockedNone":"<i>{0} sporingssystem</i> på {1} | <i>{0} sporingssystemer</i> på {1}","privacy.trackersBlocked":"{0} av {1} blokkert","privacy.trackersFound":"{0} funnet","privacy.trackersNone":"ingenting","privacy.trackerBlock.desc":"Blokker","privacy.trackerBlock.tooltip":"Dette blokkerer [{0}] på alle nettsteder du besøker.","privacy.trackerUnblock.desc":"Blokkert","privacy.trackerUnblock.tooltip":"Dette opphever blokkeringen av [{0}] på alle nettsteder du besøker.","privacy.trackerUnblockOnAutoBlock.tooltip":"Hvis du vil oppheve blokkeringen av en bestemt sporingstjeneste, må du slå av automatisk sporing.","privacy.automaticBlocking.desc":"Blokker all sporing automatisk","privacy.automaticBlocking.tooltip":"Vi blokkerer automatisk all sporing vi finner på alle nettsteder du besøker.","setting.title":"Innstillinger","setting.serp.name":"Marker søkeresultatene mine","setting.serp.desc":"Legg til fargede ikoner på søkeresultatene dine på Google, Yahoo! osv. for å se hvilke resultater som er trygge å klikke på. (Grønn = trygt, grå = ukjent, rødt = usikkert.)","setting.serpPopup.name":"Vis verktøytips for søkeresultater","setting.serpPopup.desc":"Hold musen over ikonene for å se mer informasjon.","setting.secureBrowser.Avast.name":"Secure Browser","setting.secureBrowser.Avast.desc":"Bytt til bankmodus på nettsteder med sensitive økonomiske data (Avast Antivirus og Avast Secure Browser må være installert)","setting.secureBrowser.AVG.name":"Secure Browser","setting.secureBrowser.AVG.desc":"Bytt til bankmodus på nettsteder med sensitive økonomidata (AVG AntiVirus og AVG Secure Browser må være installert)","setting.dntBadge.name":"Vis totalt antall sporingstjenester på nettstedet","setting.dntBadge.desc":"Legg til et merke i nettleseren for å se hvor mange sporingstjenester som er på et nettsted med en gang.","setting.dntAutoBlock.name":"Blokker all sporing automatisk","setting.dntAutoBlock.desc":"Blokker all sporing som er funnet, på alle nettsteder du besøker.","setting.dntSocial.desc":"Blokker all sporing fra sosiale nettverk","setting.dntAdTracking.desc":"Blokker all reklamesporing","setting.dntWebAnalytics.desc":"Blokker all webanalysesporing","setting.dntOthers.desc":"Blokker all annen sporing","setting.productAnalysis.name":"Tillat analyse av produktytelse og -bruk til utvikling av nye produkter","setting.productAnalysis.tooltip":"Vi samler inn og sender følgende bruksdata til serverne våre: intern utvidelsesidentifikator, nettlesertype og versjon, operativsystem, land, språk og status for Avast antivirus-appen.","setting.urlConsent.name":"Samtykke til å samle inn nettadresser","serp.safe.desc":"Dette nettstedet er trygt","serp.bad.desc":"Dette nettstedet kan være upålitelig","serp.unknown.desc":"Dette nettstedet er ikke vurdert","serp.unsafe.desc":"Dette nettstedet er usikkert","topbar.openBankMode":"Åpne i bankmodus","topbar.desc":"Økonomidataene dine kan være synlige for andre.","topbar.tooltip":"Bankmodus er en del av Avasts Secure Browser som ble installert med Avast Antivirus og isolerer netthandel og nettbanker for å hindre hackere i å stjele kredittkortnumre, passord og andre private data.","topbar.dontShowAgain":"Ikke vis for dette nettstedet igjen","installPage.consent.title":"Tillat at vi beskytter deg ved å skanne nettadresser?","installPage.consent.desc":"Hvis du tillater dette, kommer vi til å undersøke adressene til nettstedene du besøker for å sjekke om de er trygge eller ikke. (Se {URL_START}Retningslinjer for personvern{URL_END})","installPage.agreed.title":"Takk!","installPage.agreed.desc":"Vi beskytter deg mot utrygge nettsteder.","installPage.disagreed.title":"Null problem","installPage.disagreed.desc":"Hvis du ikke vil at vi skal skanne nettadressene dine, kan du bare avinstallere {0} Online Security. Vær forsiktig på nettet!","installPage.consent.disagree":"Nei takk","installPage.consent.agree":"Ja, skann nettadresser","panel.consent.agree":"Skann nettadresser"},"nl":{"AVG.title":"Online Security","Avast.title":"Avast Online Security","global.beta":"Bèta","global.detailsShow":"Details","global.detailsHide":"Details verbergen","global.done":"Gereed","global.leaveSite":"Website verlaten","global.switcher.off":"UIT","global.switcher.on":"AAN","global.close":"Sluiten","global.back":"Terug","background.icon.unknown":"{0} - Onbekende website","background.icon.safe":"{0} - Deze website is veilig","background.icon.bad":"{0} - Deze website is mogelijk onbetrouwbaar","background.icon.unsafe":"{0} - Deze website is niet veilig","security.title":"Beveiliging","security.safe.title":"Deze website is veilig","security.safe.item1.desc":"Geen phishing","security.safe.item1.tooltip":"Voor zover wij kunnen nagaan wordt op deze website niet geprobeerd vertrouwelijke gegevens (zoals wachtwoorden en creditcardnummers) te stelen.","security.safe.item2.desc":"Geen malware","security.safe.item2.tooltip":"Er is geen schadelijke code op deze website gevonden.","security.safe.item3.desc":"Vertrouwd","security.safe.item3.tooltip":"{0} gebruikers hebben deze website aangemerkt als betrouwbaar door te klikken op {1} in {0} Online Security.","security.bad.title":"Deze website is mogelijk onbetrouwbaar","security.bad.desc":"Er zijn geen phishing-dreigingen of malware gevonden, maar veel van onze gebruikers hebben geen goed gevoel over deze website.","security.unknown.title":"Onbekende site","security.unknown.desc":"Er zijn nog niet genoeg gegevens om deze website te kunnen beoordelen.","security.unsafe.title":"Deze website is niet veilig","security.unsafe.phishing.desc":"Deze website is aangemerkt als een phishing-site. Bij phishing wordt geprobeerd vertrouwelijke gegevens, zoals wachtwoorden en creditcardnummers, te stelen.","security.unsafe.malware.desc":"Er is schadelijke code gevonden op deze website die uw computer kan schaden of waarmee persoonlijke gegevens kunnen worden gestolen.","rating.question.desc":"Vertrouwt u {0}?","rating.negative":"Hebt u ongepaste inhoud aangetroffen op deze website? (Optioneel.)","rating.thanks":"Bedankt voor uw beoordeling!","rating.trusted.desc":"U <i>vertrouwt</i> {0}","rating.untrusted.desc":"U vertrouwt {0} <i>niet</i>","rating.revert.tooltip":"Klik hier om uw beoordeling te verwijderen","rating.tooltip":"Uw vertrouwen of wantrouwen wordt meegenomen in de veiligheidsbeoordeling van deze website.","rating.category.pornography":"Porno","rating.category.violence":"Wapens/geweld","rating.category.gambling":"Gokken","rating.category.drugs":"Alcohol/drugs","rating.category.illegal":"Warez/illegaal","rating.category.others":"Overig","privacy.title":"Privacy","privacy.group.Social.desc":"Sociale netwerken","privacy.group.Social.block.desc":"Tracering door sociale netwerken volledig blokkeren","privacy.group.Social.block.tooltip":"Hiermee blokkeert u de tracering door sociale netwerken op elke website die u bezoekt.","privacy.group.Social.unblock.desc":"Blokkering van tracering op sociale netwerken volledig opheffen","privacy.group.Social.unblock.tooltip":"Hiermee staat u tracering door sociale netwerken toe op elke website die u bezoekt.","privacy.group.AdTracking.desc":"Advertentietracering","privacy.group.AdTracking.block.desc":"Advertentietracering volledig blokkeren","privacy.group.AdTracking.block.tooltip":"Hiermee blokkeert u advertentietracering op elke website die u bezoekt.","privacy.group.AdTracking.unblock.desc":"Blokkering van advertentietracering volledig opheffen","privacy.group.AdTracking.unblock.tooltip":"Hiermee staat u advertentietracering toe op elke website die u bezoekt.","privacy.group.WebAnalytics.desc":"Webanalyses","privacy.group.WebAnalytics.block.desc":"Tracering voor webanalyse volledig blokkeren","privacy.group.WebAnalytics.block.tooltip":"Hiermee blokkeert u webanalysetracking op elke website die u bezoekt.","privacy.group.WebAnalytics.unblock.desc":"Blokkering van alle webanalysetracking opheffen","privacy.group.WebAnalytics.unblock.tooltip":"Hiermee staat u overige tracking toe op elke website die u bezoekt.","privacy.group.Others.desc":"Overig","privacy.group.Others.block.desc":"Alle overige tracking blokkeren","privacy.group.Others.block.tooltip":"Hiermee blokkeert u alle overige tracking op elke website die u bezoekt.","privacy.group.Others.unblock.desc":"Blokkering van alle overige tracking opheffen","privacy.trackersBlockedAll":"<i>Elke {0} tracker</i> geblokkeerd op {1} | <i>Alle {0} trackers</i> geblokkeerd op {1}","privacy.trackersBlockedSome":"<i>{0} van {1} tracker</i> geblokkeerd op {2} | <i>{0} van {1} trackers</i> geblokkeerd op {2}","privacy.trackersBlockedNone":"<i>{0} tracking</i>systeem is ingeschakeld {1} | <i>{0} tracking</i>systemen zijn ingeschakeld {1}","privacy.trackersBlocked":"{0} van {1} geblokkeerd","privacy.trackersFound":"{0} gevonden","privacy.trackersNone":"niets","privacy.trackerBlock.desc":"Blokkeren","privacy.trackerBlock.tooltip":"Hiermee blokkeert u {0} op elke website die u bezoekt.","privacy.trackerUnblock.desc":"Geblokkeerd","privacy.trackerUnblock.tooltip":"Hiermee heft u de blokkering van {0} op op elke website die u bezoekt.","privacy.trackerUnblockOnAutoBlock.tooltip":"Als u de blokkering van een specifieke tracker wilt opheffen, moet u de functie voor automatisch blokkeren uitschakelen.","privacy.automaticBlocking.desc":"Alle trackers automatisch blokkeren","privacy.automaticBlocking.tooltip":"Hiermee blokkeert u automatisch alle gevonden trackers op elke website die u bezoekt.","setting.title":"Instellingen","setting.serp.name":"Mijn zoekresultaten markeren","setting.serp.desc":"Voeg gekleurde pictogrammen toe aan uw zoekresultaten in Google, Yahoo!, enz., om te zien op welke resultaten u veilig kunt klikken. (Groen = veilig, grijs = onbekend, rood = niet veilig.)","setting.serpPopup.name":"Knopinfo weergeven voor zoekresultaten","setting.serpPopup.desc":"Wijs de pictogrammen aan met de muis voor meer informatie.","setting.secureBrowser.Avast.name":"Secure Browser","setting.secureBrowser.Avast.desc":"Bankmodus activeren bij privacygevoelige financiële sites (installatie van Avast Antivirus en Avast Secure Browser vereist)","setting.secureBrowser.AVG.name":"Secure Browser","setting.secureBrowser.AVG.desc":"Activeer Bankmodus voor privacygevoelige financiële sites (installatie van AVG AntiVirus en AVG Secure Browser vereist)","setting.dntBadge.name":"Totaal aantal trackers op een website weergeven","setting.dntBadge.desc":"Voeg een badge toe aan uw browser om meteen te kunnen zien hoeveel trackers een website bevat.","setting.dntAutoBlock.name":"Alle trackers automatisch blokkeren","setting.dntAutoBlock.desc":"Blokkeer alle gevonden trackers op elke website die u bezoekt.","setting.dntSocial.desc":"Alle trackers van sociale netwerken blokkeren","setting.dntAdTracking.desc":"Alle advertentietrackers blokkeren","setting.dntWebAnalytics.desc":"Alle webanalysetrackers blokkeren","setting.dntOthers.desc":"Alle overige trackers blokkeren","setting.productAnalysis.name":"Analyse van prestaties en gebruik van product toestaan ten behoeve van de ontwikkeling van nieuwe producten","setting.productAnalysis.tooltip":"We verzamelen de volgende gegevens en sturen deze naar onze servers: gegevens over het gebruik van de extensie, intern identificatiekenmerk van de extensie, browsertype en -versie, besturingssysteem, land, taal, en status van de antivirus-app van Avast.","setting.urlConsent.name":"Toestemming om URL-gegevens te verzamelen","serp.safe.desc":"Deze website is veilig","serp.bad.desc":"Deze website is mogelijk onbetrouwbaar","serp.unknown.desc":"Deze website is nog niet beoordeeld","serp.unsafe.desc":"Deze website is niet veilig","topbar.openBankMode":"Openen in Bankmodus","topbar.desc":"Uw financiële gegevens zijn mogelijk zichtbaar voor anderen.","topbar.tooltip":"Bankmodus, onderdeel van de Avast Secure Browser die is geïnstalleerd met Avast Antivirus, schermt winkel- en banksessies op een veilige manier af om te voorkomen dat hackers uw creditcardnummers, wachtwoorden en andere privégegevens stelen.","topbar.dontShowAgain":"Niet meer weergeven voor deze website","installPage.consent.title":"Geeft u ons toestemming om u te beschermen door webadressen te scannen?","installPage.consent.desc":"Als u daarmee instemt, bekijken we de adressen van de websites die u bezoekt, zodat we u kunnen vertellen of die websites veilig zijn. (Zie ons {URL_START}privacybeleid{URL_END})","installPage.agreed.title":"Bedankt!","installPage.agreed.desc":"U wordt nu beschermd tegen onveilige websites.","installPage.disagreed.title":"Geen probleem","installPage.disagreed.desc":"Als u niet wilt dat uw webadressen worden gescand, verwijdert u {0} Online Security gewoon. Denk eraan: veiligheid voorop!","installPage.consent.disagree":"Nee, bedankt","installPage.consent.agree":"Ja, webadressen scannen","panel.consent.agree":"Webadressen scannen"},"pl":{"AVG.title":"Online Security","Avast.title":"Avast Online Security","global.beta":"Beta","global.detailsShow":"Szczegóły","global.detailsHide":"Ukryj szczegóły","global.done":"Gotowe","global.leaveSite":"Opuść witrynę","global.switcher.off":"WYŁ","global.switcher.on":"WŁ.","global.close":"Zamknij","global.back":"Wstecz","background.icon.unknown":"{0} — Nieznana witryna","background.icon.safe":"{0} — Ta witryna jest bezpieczna","background.icon.bad":"{0} — Ta witryna może być niegodna zaufania","background.icon.unsafe":"{0} — Ta witryna jest niebezpieczna","security.title":"Bezpieczeństwo","security.safe.title":"Ta witryna jest bezpieczna","security.safe.item1.desc":"Brak phishingu","security.safe.item1.tooltip":"Nie wykryliśmy w tej witrynie żadnych prób kradzieży informacji poufnych, takich jak hasła, numery kart kredytowych itd.","security.safe.item2.desc":"Brak złośliwego oprogramowania","security.safe.item2.tooltip":"Nie wykryliśmy w tej witrynie żadnego złośliwego kodu.","security.safe.item3.desc":"Zaufana","security.safe.item3.tooltip":"Użytkownicy {0} ocenili tę stronę jako godną zaufania, klikając ikonę {1} w {0} Online Security.","security.bad.title":"To może być niegodne zaufania","security.bad.desc":"Nie znaleźliśmy w tej witrynie żadnego phishingu ani złośliwego oprogramowania, ale wielu naszych użytkowników oceniło ją negatywnie.","security.unknown.title":"Nieznana witryna","security.unknown.desc":"Na razie mamy za mało informacji, aby ocenić tę witrynę internetową.","security.unsafe.title":"Ta witryna jest niebezpieczna","security.unsafe.phishing.desc":"Ta witryna internetowa została oznaczona jako phishingowa. Phishing to próba kradzieży informacji poufnych, takich jak hasła, numery kart kredytowych itd.","security.unsafe.malware.desc":"W tej witrynie internetowej znaleźliśmy złośliwy kod, który może uszkodzić Twój komputer lub ukraść poufne dane.","rating.question.desc":"Czy ufasz witrynie {0}?","rating.negative":"Czy ta witryna zawiera nieodpowiednie treści? (opcjonalnie)","rating.thanks":"Dziękujemy za dokonanie oceny!","rating.trusted.desc":"<i>Ufasz</i> witrynie {0}","rating.untrusted.desc":"<i>Nie ufasz</i> witrynie {0}","rating.revert.tooltip":"Kliknij, aby usunąć swoją ocenę","rating.tooltip":"Twoje zaufanie lub jego brak zostaną wliczone do naszej oceny bezpieczeństwa tej witryny.","rating.category.pornography":"Pornografia","rating.category.violence":"Broń / Przemoc","rating.category.gambling":"Hazard","rating.category.drugs":"Alkohol / Narkotyki","rating.category.illegal":"Pirackie / Nielegalne","rating.category.others":"Inne","privacy.title":"Prywatność","privacy.group.Social.desc":"Sieci społecznościowe","privacy.group.Social.block.desc":"Blokuj całe śledzenie sieci społecznościowych","privacy.group.Social.block.tooltip":"Zablokuje to śledzenie sieci społecznościowych na każdej odwiedzanej stronie.","privacy.group.Social.unblock.desc":"Odblokuj całe śledzenie sieci społecznościowych","privacy.group.Social.unblock.tooltip":"Zezwoli to na śledzenie sieci społecznościowych na każdej odwiedzanej stronie.","privacy.group.AdTracking.desc":"Reklamy śledzące","privacy.group.AdTracking.block.desc":"Blokuj wszystkie reklamy śledzące","privacy.group.AdTracking.block.tooltip":"Zablokuje to reklamy śledzące na każdej odwiedzanej stronie.","privacy.group.AdTracking.unblock.desc":"Odblokuj wszystkie reklamy śledzące","privacy.group.AdTracking.unblock.tooltip":"Zezwoli to na reklamy śledzące na każdej odwiedzanej stronie.","privacy.group.WebAnalytics.desc":"Analizy działań w sieci","privacy.group.WebAnalytics.block.desc":"Blokuj całe śledzenie analiz działań w sieci","privacy.group.WebAnalytics.block.tooltip":"Zablokuje to śledzenie analiz działań w sieci na każdej odwiedzanej stronie.","privacy.group.WebAnalytics.unblock.desc":"Odblokuj całe śledzenie analiz działań w sieci","privacy.group.WebAnalytics.unblock.tooltip":"Zezwoli to na inne działania śledzące na każdej odwiedzanej stronie.","privacy.group.Others.desc":"Inne","privacy.group.Others.block.desc":"Blokuj wszelkie inne śledzenie","privacy.group.Others.block.tooltip":"Zablokuje to inne działania śledzące na każdej odwiedzanej stronie.","privacy.group.Others.unblock.desc":"Odblokuj wszelkie inne śledzenie","privacy.trackersBlockedAll":"W witrynie {1} zablokowano <i>{0} znaleziony plik śledzący</i> | W witrynie {1} zablokowano <i>wszystkie {0} znalezione pliki śledzące</i> | W witrynie {1} zablokowano <i>wszystkich {0} znalezionych plików śledzących</i> | W witrynie {1} zablokowano <i>wszystkich {0} znalezionych plików śledzących</i>","privacy.trackersBlockedSome":"W witrynie {2} zablokowano <i>{0} z {1} plików śledzących</i> | W witrynie {2} zablokowano <i>{0} z {1} plików śledzących</i> | W witrynie {2} zablokowano <i>{0} z {1} plików śledzących</i> | W witrynie {2} zablokowano <i>{0} z {1} plików śledzących</i>","privacy.trackersBlockedNone":"<i>{0} system śledzący</i> w witrynie {1} | <i>{0} systemy śledzące</i> w witrynie {1} | <i>{0} systemów śledzących</i> w witrynie {1} | <i>{0} systemów śledzących</i> w witrynie {1}","privacy.trackersBlocked":"Zablokowano {0} z {1}","privacy.trackersFound":"Znaleziono {0}","privacy.trackersNone":"nic","privacy.trackerBlock.desc":"Blokuj","privacy.trackerBlock.tooltip":"Zablokuje to [{0}] na każdej odwiedzanej stronie.","privacy.trackerUnblock.desc":"Zablokowano","privacy.trackerUnblock.tooltip":"Odblokuje to [{0}] na każdej odwiedzanej stronie.","privacy.trackerUnblockOnAutoBlock.tooltip":"Aby odblokować konkretny plik śledzący, wyłącz automatyczne blokowanie.","privacy.automaticBlocking.desc":"Automatycznie blokuj wszystkie pliki śledzące","privacy.automaticBlocking.tooltip":"Będziemy automatycznie blokować wszystkie znalezione pliki śledzące na każdej odwiedzanej stronie.","setting.title":"Ustawienia","setting.serp.name":"Oznaczaj wyniki wyszukiwania","setting.serp.desc":"Dodawaj kolorowe ikony do wyników wyszukiwania w serwisach Google, Yahoo! itp., aby widzieć, które wyniki można bezpiecznie kliknąć. (zielony = bezpieczne, szary = nieznane, czerwony = niebezpieczne)","setting.serpPopup.name":"Pokazuj porady dla wyników wyszukiwania","setting.serpPopup.desc":"Umieszczaj wskaźnik myszy na ikonach, aby wyświetlić więcej informacji.","setting.secureBrowser.Avast.name":"Secure Browser","setting.secureBrowser.Avast.desc":"Przełącz się do Trybu bankowego w przypadku stron obsługujących poufne transakcje finansowe (wymaga zainstalowania Avast Antivirus i Avast Secure Browser)","setting.secureBrowser.AVG.name":"Secure Browser","setting.secureBrowser.AVG.desc":"Przełącz się do Trybu bankowego w przypadku stron obsługujących poufne transakcje finansowe (wymaga zainstalowania AVG AntiVirus i AVG Secure Browser)","setting.dntBadge.name":"Pokazuj całkowitą liczbę plików śledzących na stronie","setting.dntBadge.desc":"Dodaj znaczek do przeglądarki, aby od razu widzieć, ile plików śledzących jest na każdej stronie.","setting.dntAutoBlock.name":"Automatycznie blokuj wszystkie pliki śledzące","setting.dntAutoBlock.desc":"Blokuj wszystkie znalezione pliki śledzące na każdej odwiedzanej stronie.","setting.dntSocial.desc":"Blokuj wszystkie pliki śledzące sieci społecznościowych","setting.dntAdTracking.desc":"Blokuj wszystkie pliki śledzące reklam","setting.dntWebAnalytics.desc":"Blokuj wszystkie pliki śledzące analiz działań w sieci","setting.dntOthers.desc":"Blokuj wszystkie inne pliki śledzące","setting.productAnalysis.name":"Zezwalaj na analizowanie danych o wydajności i sposobie użytkowania produktu na potrzeby tworzenia nowych produktów","setting.productAnalysis.tooltip":"Gromadzimy i wysyłamy na swoje serwery następujące informacje: dane o użytkowaniu rozszerzenia, identyfikator wewnętrzny rozszerzenia, typ i wersja przeglądarki, system operacyjny, kraj, język, stan aplikacji antywirusowej Avast.","setting.urlConsent.name":"Zgoda na gromadzenie adresów URL","serp.safe.desc":"Ta strona jest bezpieczna","serp.bad.desc":"Ta witryna może być niegodna zaufania","serp.unknown.desc":"Ta witryna nie ma oceny reputacji","serp.unsafe.desc":"Ta witryna jest niebezpieczna","topbar.openBankMode":"Otwórz w trybie bankowym","topbar.desc":"Twoje dane finansowe mogą być widoczne dla innych.","topbar.tooltip":"Tryb bankowy, część oprogramowania Avast Secure Browser instalowanego razem z antywirusem Avast, w bezpieczny sposób izoluje sesje zakupów i bankowości, aby uniemożliwić hakerom kradzież numerów Twoich kart kredytowych, haseł oraz innych prywatnych danych.","topbar.dontShowAgain":"Nie pokazuj ponownie w tej witrynie","installPage.consent.title":"Czy możemy chronić Cię poprzez skanowanie adresów internetowych?","installPage.consent.desc":"Jeśli wyrazisz na to zgodę, będziemy analizować adresy stron, które odwiedzasz, i informować Cię, czy są one bezpieczne. (Zapoznaj się z naszą {URL_START}Polityką prywatności{URL_END})","installPage.agreed.title":"Dziękujemy!","installPage.agreed.desc":"Chronimy Cię teraz przed niebezpiecznymi stronami.","installPage.disagreed.title":"Nie gniewamy się","installPage.disagreed.desc":"Jeśli nie chcesz, abyśmy skanowali adresy internetowe stron, które odwiedzasz, wystarczy, że odinstalujesz {0} Online Security. Bezpiecznego przeglądania!","installPage.consent.disagree":"Nie, dziękuję","installPage.consent.agree":"Tak, pozwalam na skanowanie adresów internetowych","panel.consent.agree":"Skanuj adresy internetowe"},"pt_BR":{"AVG.title":"Online Security","Avast.title":"Avast Online Security","global.beta":"Beta","global.detailsShow":"Detalhes","global.detailsHide":"Ocultar detalhes","global.done":"Concluído","global.leaveSite":"Sair do site","global.switcher.off":"DES","global.switcher.on":"LIG","global.close":"Fechar","global.back":"Voltar","background.icon.unknown":"{0} - Site desconhecido","background.icon.safe":"{0} - Este site é seguro","background.icon.bad":"{0} - Este site pode não ser confiável","background.icon.unsafe":"{0} - Este site não é seguro","security.title":"Segurança","security.safe.title":"Este site é seguro","security.safe.item1.desc":"Sem phishing","security.safe.item1.tooltip":"Não detectamos tentativas de roubar informações confidenciais, como senhas, números de cartão de crédito, etc, neste site.","security.safe.item2.desc":"Sem malware","security.safe.item2.tooltip":"Não detectamos códigos maliciosos no site.","security.safe.item3.desc":"Confiável","security.safe.item3.tooltip":"Os usuários do {0} classificaram este site como confiável ao clicar em {1} no {0} Online Security.","security.bad.title":"Este site pode não ser confiável","security.bad.desc":"Não encontramos ameaças de phishing ou malware aqui, mas muitos dos nossos usuários não gostaram do site.","security.unknown.title":"Site desconhecido","security.unknown.desc":"Ainda não temos informações suficientes para classificar este site.","security.unsafe.title":"Este site não é seguro","security.unsafe.phishing.desc":"Este site foi marcado como um site de phishing. Phishing é uma tentativa de roubar informações sigilosas como senhas, números de cartão de crédito, etc.","security.unsafe.malware.desc":"Encontramos código maligno neste site, que poderia prejudicar seu computador ou roubar seus dados privados.","rating.question.desc":"Confia em {0}?","rating.negative":"Existe conteúdo impróprio neste site? (opcional)","rating.thanks":"Obrigado pela avaliação!","rating.trusted.desc":"Você <i>confia</i> no {0}","rating.untrusted.desc":"Você não <i>confia</i> no {0}","rating.revert.tooltip":"Clique para remover a sua avaliação","rating.tooltip":"A sua confiança ou desconfiança será considerada na avaliação de segurança deste site.","rating.category.pornography":"Pornografia","rating.category.violence":"Armas / Violência","rating.category.gambling":"Jogos de azar","rating.category.drugs":"Álcool / Drogas","rating.category.illegal":"Warez / Ilegal","rating.category.others":"Outros","privacy.title":"Privacidade","privacy.group.Social.desc":"Redes sociais","privacy.group.Social.block.desc":"Bloquear o rastreamento de redes sociais","privacy.group.Social.block.tooltip":"Esta opção bloqueará o rastreamento de redes sociais em todos os sites visitados.","privacy.group.Social.unblock.desc":"Desbloquear o rastreamento de redes sociais","privacy.group.Social.unblock.tooltip":"Esta opção permitirá o rastreamento de redes sociais em todos os sites visitados.","privacy.group.AdTracking.desc":"Rastreamento de publicidade","privacy.group.AdTracking.block.desc":"Bloquear todo o rastreamento de publicidade","privacy.group.AdTracking.block.tooltip":"Esta opção bloqueará o rastreamento de publicidade em todos os sites visitados.","privacy.group.AdTracking.unblock.desc":"Desbloquear todo o rastreamento de publicidade","privacy.group.AdTracking.unblock.tooltip":"Esta opção permitirá o rastreamento de publicidade em todos os sites visitados.","privacy.group.WebAnalytics.desc":"Análises web","privacy.group.WebAnalytics.block.desc":"Bloquear todo o rastreamento de análises web","privacy.group.WebAnalytics.block.tooltip":"Esta opção bloqueará o rastreamento de análises web em todos os sites visitados.","privacy.group.WebAnalytics.unblock.desc":"Desbloquear todo o rastreamento de análises web","privacy.group.WebAnalytics.unblock.tooltip":"Esta opção permitirá outros tipos de rastreamento em todos os sites visitados.","privacy.group.Others.desc":"Outros","privacy.group.Others.block.desc":"Bloquear todos os outros tipos de rastreamento","privacy.group.Others.block.tooltip":"Esta opção bloqueará outros tipos de rastreamento em todos os sites visitados.","privacy.group.Others.unblock.desc":"Desbloquear os outros tipos de rastreamento","privacy.trackersBlockedAll":"<i>{0} rastreador</i> bloqueado em {1} | <i>{0} rastreadores</i> bloqueados em {1}","privacy.trackersBlockedSome":"<i>{0} de {1} rastreador</i> bloqueado em {2} | <i>{0} de {1} rastreadores</i> bloqueados em {2}","privacy.trackersBlockedNone":"<i>{0} rastreamento</i> em {1} | <i>{0} rastreamentos</i> em {1}","privacy.trackersBlocked":"{0} de {1} bloqueados","privacy.trackersFound":"{0} encontrado(s)","privacy.trackersNone":"nada","privacy.trackerBlock.desc":"Bloquear","privacy.trackerBlock.tooltip":"Esta opção bloqueará [{0}] em todos os sites visitados.","privacy.trackerUnblock.desc":"Bloqueado","privacy.trackerUnblock.tooltip":"Esta opção desbloqueará [{0}] em todos os sites visitados.","privacy.trackerUnblockOnAutoBlock.tooltip":"Para desbloquear um rastreador específico, desative o bloqueio automático.","privacy.automaticBlocking.desc":"Bloquear automaticamente todos os rastreadores","privacy.automaticBlocking.tooltip":"Bloquearemos automaticamente todos os rastreadores encontrados em todos os sites visitados.","setting.title":"Configurações","setting.serp.name":"Marcar os resultados de pesquisas","setting.serp.desc":"Adicione ícones coloridos aos resultados de pesquisas no Google, Yahoo!, etc., para ver em que resultados é seguro clicar. (Verde = Seguro, Cinza = Desconhecido, Vermelho = Perigoso)","setting.serpPopup.name":"Mostrar dicas para resultados de pesquisas","setting.serpPopup.desc":"Passe o ponteiro do mouse sobre nossos ícones para ver mais informações.","setting.secureBrowser.Avast.name":"Secure Browser","setting.secureBrowser.Avast.desc":"Mudar para o Modo Banco no caso de sites bancários (é necessário ter o Avast Antivirus e o Avast Secure Browser instalados)","setting.secureBrowser.AVG.name":"Secure Browser","setting.secureBrowser.AVG.desc":"Mudar para o Modo Banco e acessar sites bancários (é necessário ter o AVG AntiVirus e o AVG Secure Browser instalados)","setting.dntBadge.name":"Mostrar total de rastreadores em um site","setting.dntBadge.desc":"Adicione um emblema ao navegador para ver imediatamente quantos rastreadores estão em um site.","setting.dntAutoBlock.name":"Bloquear automaticamente todos os rastreadores","setting.dntAutoBlock.desc":"Bloqueie todos os rastreadores encontrados em todos os sites visitados.","setting.dntSocial.desc":"Bloquear todos os rastreadores de redes sociais","setting.dntAdTracking.desc":"Bloquear todos os rastreadores de publicidade","setting.dntWebAnalytics.desc":"Bloquear todos os rastreadores de análises web","setting.dntOthers.desc":"Bloquear todos os outros rastreadores","setting.productAnalysis.name":"Permitir análise de desempenho e utilização do produto para desenvolvimento de novos produtos","setting.productAnalysis.tooltip":"Coletamos e enviamos para os nossos servidores dados de utilização da extensão, identificador interno da extensão, tipo e versão do navegador, sistema operacional, país, idioma e status do aplicativo antivírus Avast.","setting.urlConsent.name":"Consentimento para coletar URL","serp.safe.desc":"Este site é seguro","serp.bad.desc":"Este site pode não ser confiável","serp.unknown.desc":"Este site não tem avaliação","serp.unsafe.desc":"Este site não é seguro","topbar.openBankMode":"Abrir no Modo Banco","topbar.desc":"Os seus dados financeiros poderão ser vistos por outras pessoas.","topbar.tooltip":"O Modo Banco, incluído no Avast Secure Browser que é instalado com o Avast Antivirus, isola sessões de compras e operações bancárias de forma segura para impedir que cibercriminosos roubem os seus números de cartões de crédito, senhas e outros dados privados.","topbar.dontShowAgain":"Não mostrar neste site novamente","installPage.consent.title":"Você nos autoriza a protegê-lo com a análise de endereços web?","installPage.consent.desc":"Caso aceite, iremos analisar os endereços dos sites visitados para podermos informar se esses sites são seguros. (Consulte nossa {URL_START}Política de Privacidade{URL_END})","installPage.agreed.title":"Obrigado!","installPage.agreed.desc":"Estamos te protegendo contra sites não seguros.","installPage.disagreed.title":"Sem ressentimentos","installPage.disagreed.desc":"Se você não quiser que analisemos os endereços web visitados, basta desinstalar o {0} Online Security - e boa sorte!","installPage.consent.disagree":"Não, obrigado","installPage.consent.agree":"Sim, analisar endereços web","panel.consent.agree":"Analisar endereços web"},"pt_PT":{"AVG.title":"Online Security","Avast.title":"Avast Online Security","global.beta":"Beta","global.detailsShow":"Detalhes","global.detailsHide":"Ocultar detalhes","global.done":"Concluído","global.leaveSite":"Sair do site","global.switcher.off":"OFF","global.switcher.on":"ON","global.close":"Fechar","global.back":"Anterior","background.icon.unknown":"{0} - Site desconhecido","background.icon.safe":"{0} - Este site é seguro","background.icon.bad":"{0} - Este site pode não ser fidedigno","background.icon.unsafe":"{0} - Este site não é seguro","security.title":"Segurança","security.safe.title":"Este site é seguro","security.safe.item1.desc":"Sem phishing","security.safe.item1.tooltip":"Não detetámos tentativas de roubo de informações sensíveis, como palavras-passe, números de cartões de crédito, etc., neste site.","security.safe.item2.desc":"Sem malware","security.safe.item2.tooltip":"Não detetámos qualquer código malicioso neste site.","security.safe.item3.desc":"Fidedigno","security.safe.item3.tooltip":"Os utilizadores do {0} classificaram este site como fidedigno clicando em {1} no {0} Online Security.","security.bad.title":"Pode não ser fidedigno","security.bad.desc":"Não encontrámos ameaças de phishing ou malware aqui, mas muitos dos nossos utilizadores não gostaram do site.","security.unknown.title":"Site desconhecido","security.unknown.desc":"Ainda não temos informações suficientes para classificar este site.","security.unsafe.title":"Este site não é seguro","security.unsafe.phishing.desc":"Este site foi marcado como site de phishing. O phishing é uma tentativa de roubar informações sensíveis dos utilizadores, tais como palavras-passe, números de cartões de crédito, etc.","security.unsafe.malware.desc":"Encontrámos código malicioso neste site que pode causar danos no seu computador ou roubar os seus dados privados.","rating.question.desc":"Confia em {0}?","rating.negative":"Existe conteúdo impróprio neste site? (opcional)","rating.thanks":"Obrigado pela sua avaliação!","rating.trusted.desc":"<i>Confia</i> em {0}","rating.untrusted.desc":"<i>Não confia</i> em {0}","rating.revert.tooltip":"Clique para remover a sua avaliação","rating.tooltip":"A sua confiança ou desconfiança será tida em conta na nossa avaliação de segurança deste site.","rating.category.pornography":"Pornografia","rating.category.violence":"Armas / Violência","rating.category.gambling":"Jogos de azar","rating.category.drugs":"Álcool / Drogas","rating.category.illegal":"Pirataria / Ilegal","rating.category.others":"Outros","privacy.title":"Privacidade","privacy.group.Social.desc":"Redes sociais","privacy.group.Social.block.desc":"Bloquear o rastreamento de redes sociais","privacy.group.Social.block.tooltip":"Esta opção bloqueará o rastreamento de redes sociais em todos os sites visitados.","privacy.group.Social.unblock.desc":"Desbloquear o rastreamento de redes sociais","privacy.group.Social.unblock.tooltip":"Esta opção permitirá o rastreamento de redes sociais em todos os sites visitados.","privacy.group.AdTracking.desc":"Rastreamento de Publicidade","privacy.group.AdTracking.block.desc":"Bloquear o rastreamento de publicidade","privacy.group.AdTracking.block.tooltip":"Esta opção bloqueará o rastreamento de publicidade em todos os sites visitados.","privacy.group.AdTracking.unblock.desc":"Desbloquear o rastreamento de publicidade","privacy.group.AdTracking.unblock.tooltip":"Esta opção permitirá o rastreamento de publicidade em todos os sites visitados.","privacy.group.WebAnalytics.desc":"Estatísticas Web","privacy.group.WebAnalytics.block.desc":"Bloquear o rastreamento de estatísticas Web","privacy.group.WebAnalytics.block.tooltip":"Esta opção bloqueará o rastreamento de estatísticas Web em todos os sites visitados.","privacy.group.WebAnalytics.unblock.desc":"Desbloquear o rastreamento de estatísticas Web","privacy.group.WebAnalytics.unblock.tooltip":"Esta opção permitirá outros tipos de rastreamento em todos os sites visitados.","privacy.group.Others.desc":"Outros","privacy.group.Others.block.desc":"Bloquear os outros tipos de rastreamento","privacy.group.Others.block.tooltip":"Esta opção bloqueará outros tipos de rastreamento em todos os sites visitados.","privacy.group.Others.unblock.desc":"Desbloquear os outros tipos de rastreamento","privacy.trackersBlockedAll":"<i>{0} rastreador</i> bloqueado em {1} | <i>{0} rastreadores</i> bloqueados em {1}","privacy.trackersBlockedSome":"<i>{0} de {1} rastreador</i> bloqueado em {2} | <i>{0} de {1} rastreadores</i> bloqueados em {2}","privacy.trackersBlockedNone":"<i>{0} sistema de rastreamento</i> em {1} | <i>{0} sistemas de rastreamento</i> em {1}","privacy.trackersBlocked":"{0} de {1} bloqueados","privacy.trackersFound":"{0} encontrados","privacy.trackersNone":"nada","privacy.trackerBlock.desc":"Bloquear","privacy.trackerBlock.tooltip":"Esta opção bloqueará [{0}] em todos os sites visitados.","privacy.trackerUnblock.desc":"Bloqueado","privacy.trackerUnblock.tooltip":"Esta opção desbloqueará [{0}] em todos os sites visitados.","privacy.trackerUnblockOnAutoBlock.tooltip":"Para desbloquear um rastreador específico, desative o bloqueio automático.","privacy.automaticBlocking.desc":"Bloquear automaticamente todos os rastreadores","privacy.automaticBlocking.tooltip":"Bloquearemos automaticamente todos os rastreadores encontrados em todos os sites visitados.","setting.title":"Definições","setting.serp.name":"Marcar os resultados de pesquisas","setting.serp.desc":"Adicione ícones coloridos aos resultados de pesquisas no Google, Yahoo!, etc., para ver em que resultados é seguro clicar. (Verde = Seguro, Cinzento = Desconhecido, Vermelho = Inseguro)","setting.serpPopup.name":"Mostrar dicas para resultados de pesquisas","setting.serpPopup.desc":"Passe o rato por cima dos nossos ícones para ver mais informações.","setting.secureBrowser.Avast.name":"Secure Browser","setting.secureBrowser.Avast.desc":"Mudar para Modo de banco no caso de sites financeiros sensíveis (é necessário ter o Avast Antivirus e o Avast Secure Browser instalados)","setting.secureBrowser.AVG.name":"Secure Browser","setting.secureBrowser.AVG.desc":"Mudar para Modo de banco no caso de sites financeiros sensíveis (é necessário ter o AVG AntiVirus e o AVG Secure Browser instalados)","setting.dntBadge.name":"Mostrar total de rastreadores num site","setting.dntBadge.desc":"Adicione um emblema ao browser para ver imediatamente quantos rastreadores estão num site.","setting.dntAutoBlock.name":"Bloquear automaticamente todos os rastreadores","setting.dntAutoBlock.desc":"Bloqueie todos os rastreadores encontrados em todos os sites visitados.","setting.dntSocial.desc":"Bloquear todos os rastreadores de redes sociais","setting.dntAdTracking.desc":"Bloquear todos os rastreadores de publicidade","setting.dntWebAnalytics.desc":"Bloquear todos os rastreadores de estatísticas Web","setting.dntOthers.desc":"Bloquear todos os outros rastreadores","setting.productAnalysis.name":"Permitir análise de desempenho e utilização do produto para desenvolvimento de novos produtos","setting.productAnalysis.tooltip":"Recolhemos e enviamos para os nossos servidores dados de utilização da extensão, identificador interno da extensão, tipo e versão do browser, sistema operativo, país, idioma e estado da aplicação antivírus Avast.","setting.urlConsent.name":"Consentimento para recolha de URL","serp.safe.desc":"Este site é seguro","serp.bad.desc":"Este site pode não ser fidedigno","serp.unknown.desc":"Este site não tem avaliação","serp.unsafe.desc":"Este site não é seguro","topbar.openBankMode":"Abrir no modo de banco","topbar.desc":"Os seus dados financeiros poderão ser vistos por outras pessoas.","topbar.tooltip":"O Modo de banco, incluído no Avast Secure Browser que é instalado com o antivírus Avast, isola sessões de compras e operações bancárias de forma segura para impedir que piratas informáticos roubem os seus números de cartões de crédito, palavras-passe e outros dados privados.","topbar.dontShowAgain":"Não mostrar neste site novamente","installPage.consent.title":"Autoriza a nossa proteção através da análise de endereços Web?","installPage.consent.desc":"Se aceitar, analisaremos os endereços dos sites que visita para podermos informar se esses sites são seguros. (Consulte a nossa {URL_START}Política de Privacidade{URL_END})","installPage.agreed.title":"Obrigado!","installPage.agreed.desc":"Estamos a protegê-lo contra sites não seguros.","installPage.disagreed.title":"Sem ressentimentos","installPage.disagreed.desc":"Se não quiser que analisemos os seus endereços Web, basta desinstalar o {0} Online Security e manter-se em segurança!","installPage.consent.disagree":"Não, obrigado","installPage.consent.agree":"Sim, analisar endereços Web","panel.consent.agree":"Analisar endereços Web"},"ro":{"AVG.title":"Online Security","Avast.title":"Avast Online Security","global.beta":"Beta","global.detailsShow":"Detalii","global.detailsHide":"Ascundere detalii","global.done":"Gata","global.leaveSite":"Părăsire site","global.switcher.off":"DEZ","global.switcher.on":"ACT","global.close":"Închidere","global.back":"Înapoi","background.icon.unknown":"{0} - Site necunoscut","background.icon.safe":"{0} - Acest site Web este sigur","background.icon.bad":"{0} - Acest site nu este demn de încredere","background.icon.unsafe":"{0} - Acest site Web nu este sigur","security.title":"Securitate","security.safe.title":"Acest site Web este sigur","security.safe.item1.desc":"Nicio operațiune de phishing","security.safe.item1.tooltip":"Pe acest site Web nu am detectat nicio încercare de a fura informații sensibile, cum ar fi parole, numere de card de credit etc.","security.safe.item2.desc":"Niciun program malware","security.safe.item2.tooltip":"Nu am detectat niciun cod rău intenționat pe acest site.","security.safe.item3.desc":"De încredere","security.safe.item3.tooltip":"{0} utilizatori au evaluat acest site web ca fiind de încredere, făcând clic pe {1} în {0} Online security.","security.bad.title":"Nu este demn de încredere","security.bad.desc":"Nu am detectat aici niciun fel de amenințări de phishing sau programe malware, dar mulți dintre utilizatorii noștri au acordat acestui site un deget în jos.","security.unknown.title":"Site necunoscut","security.unknown.desc":"Nu avem încă suficiente informații pentru a evalua acest site Web.","security.unsafe.title":"Acest site Web nu este sigur","security.unsafe.phishing.desc":"Acest site Web a fost marcat ca site de phishing. Phishing-ul este o încercare de a vă fura informații sensibile, cum ar fi parole, numere de card de credit etc.","security.unsafe.malware.desc":"Am descoperit un cod rău intenționat pe acest site Web, care ar putea să vă afecteze computerul sau să vă fure datele private.","rating.question.desc":"Aveți încredere în site-ul {0}?","rating.negative":"Există conținut inadecvat pe acest site Web? (opțional)","rating.thanks":"Vă mulțumim pentru evaluare!","rating.trusted.desc":"Aveți <i>încredere</i> în site-ul {0}","rating.untrusted.desc":"<i>Nu aveți încredere</i> în site-ul {0}","rating.revert.tooltip":"Faceți clic pentru a șterge evaluarea","rating.tooltip":"Încrederea sau neîncrederea din partea dumneavoastră vor fi luate în calcul la evaluarea noastră de securitate pentru acest site Web.","rating.category.pornography":"Pornografie","rating.category.violence":"Arme / Violență","rating.category.gambling":"Jocuri de noroc","rating.category.drugs":"Alcool / Droguri","rating.category.illegal":"Warez / Ilegal","rating.category.others":"Altele","privacy.title":"Confidențialitate","privacy.group.Social.desc":"Rețele sociale","privacy.group.Social.block.desc":"Blocare urmărire de către toate rețelele sociale","privacy.group.Social.block.tooltip":"Această opțiune va bloca urmărirea de către rețelele sociale pe fiecare site Web pe care îl vizitați.","privacy.group.Social.unblock.desc":"Deblocare urmărire de către toate rețelele sociale","privacy.group.Social.unblock.tooltip":"Această opțiune va permite urmărirea de către rețelele sociale pe fiecare site Web pe care îl vizitați.","privacy.group.AdTracking.desc":"Urmărire pentru reclame","privacy.group.AdTracking.block.desc":"Blocarea oricărei urmăriri pentru reclame","privacy.group.AdTracking.block.tooltip":"Această opțiune va bloca urmărirea pentru reclame pe fiecare site Web pe care îl vizitați.","privacy.group.AdTracking.unblock.desc":"Deblocarea oricărei urmăriri pentru reclame","privacy.group.AdTracking.unblock.tooltip":"Această opțiune va permite urmărirea pentru reclame pe fiecare site Web pe care îl vizitați.","privacy.group.WebAnalytics.desc":"Analiză Web","privacy.group.WebAnalytics.block.desc":"Blocarea oricărei urmăriri de analiză Web","privacy.group.WebAnalytics.block.tooltip":"Această opțiune va bloca urmărirea de analiză Web pe fiecare site Web pe care îl vizitați.","privacy.group.WebAnalytics.unblock.desc":"Deblocarea oricărei urmăriri de analiză Web","privacy.group.WebAnalytics.unblock.tooltip":"Această opțiune va permite alte tipuri de urmărire pe fiecare site Web pe care îl vizitați.","privacy.group.Others.desc":"Altele","privacy.group.Others.block.desc":"Blocarea oricărui alt tip de urmărire","privacy.group.Others.block.tooltip":"Această opțiune va bloca alte tipuri de urmărire pe fiecare site Web pe care îl vizitați.","privacy.group.Others.unblock.desc":"Deblocarea oricărui alt tip de urmărire","privacy.trackersBlockedAll":"<i>{0} urmăritor</i> blocat pe {1} | Toți cei <i>{0} urmăritori</i> sunt blocați pe {1} | Toți cei <i>{0} de urmăritori</i> sunt blocați pe {1}","privacy.trackersBlockedSome":"<i>{0} din {1} urmăritori</i> sunt blocați pe {2} | <i>{0} din {1} urmăritori</i> sunt blocați pe {2} | <i>{0} din {1} de urmăritori</i> sunt blocați pe {2}","privacy.trackersBlockedNone":"<i>{0} sistem de urmărire</i> pe {1} | <i>{0} sisteme de urmărire</i> pe {1} | <i>{0} de sisteme de urmărire</i> pe {1}","privacy.trackersBlocked":"{0} din {1} blocați","privacy.trackersFound":"{0} găsiți","privacy.trackersNone":"nicio acțiune","privacy.trackerBlock.desc":"Blocare","privacy.trackerBlock.tooltip":"Această opțiune va bloca [{0}] pe fiecare site Web pe care îl vizitați.","privacy.trackerUnblock.desc":"Blocat","privacy.trackerUnblock.tooltip":"Această opțiune va debloca [{0}] pe fiecare site Web pe care îl vizitați.","privacy.trackerUnblockOnAutoBlock.tooltip":"Pentru a debloca un anumit urmăritor, dezactivați blocarea automată.","privacy.automaticBlocking.desc":"Blocare automată a tuturor urmăritorilor","privacy.automaticBlocking.tooltip":"Vom bloca în mod automat toți urmăritorii găsiți pe fiecare site pe care îl vizitați.","setting.title":"Setări","setting.serp.name":"Să mi se marcheze rezultatele căutării","setting.serp.desc":"Adăugați pictograme colorate la rezultatele căutărilor pe Google, Yahoo! etc. pentru a vedea pe care rezultate este sigur să faceți clic. (Verde = Sigur, Gri = Necunoscut, Roșu = Nesigur)","setting.serpPopup.name":"Afișare baloane explicative pentru rezultatele căutării","setting.serpPopup.desc":"Poziționați mouse-ul peste pictogramele noastre pentru a vedea mai multe informații.","setting.secureBrowser.Avast.name":"Secure Browser","setting.secureBrowser.Avast.desc":"Comutați la Modul Operațiuni bancare pentru site-urile financiare sensibile (este necesar să aveți instalate Avast Antivirus și Avast Secure Browser)","setting.secureBrowser.AVG.name":"Secure Browser","setting.secureBrowser.AVG.desc":"Comutați la Modul Operațiuni bancare pentru site-urile financiare sensibile (este necesar să aveți instalate AVG AntiVirus și AVG Secure Browser)","setting.dntBadge.name":"Afișare total urmăritori pe un site","setting.dntBadge.desc":"Adăugați un ecuson în browser pentru a vedea imediat câți urmăritori sunt pe oricare site Web.","setting.dntAutoBlock.name":"Blocare automată a tuturor urmăritorilor","setting.dntAutoBlock.desc":"Blocați toți urmăritorii găsiți pe fiecare site Web pe care îl vizitați.","setting.dntSocial.desc":"Blocare urmăritori din toate rețelele sociale","setting.dntAdTracking.desc":"Blocarea oricărui urmăritor pentru reclame","setting.dntWebAnalytics.desc":"Blocarea oricărui urmăritor de analiză Web","setting.dntOthers.desc":"Blocarea oricărui alt urmăritor","setting.productAnalysis.name":"Permiteți analiza performanței și a utilizării produsului, pentru dezvoltarea unui nou produs","setting.productAnalysis.tooltip":"Colectăm și trimitem către serverele noastre date privind utilizarea extensiei, identificatorul intern al extensiei, tipul și versiunea browserului, sistemul de operare, țara, limba, starea aplicației antivirus de la Avast.","setting.urlConsent.name":"Consimțământ pentru colectarea adresei URL","serp.safe.desc":"Acest site Web este sigur","serp.bad.desc":"Acest site nu este demn de încredere","serp.unknown.desc":"Acest site nu are nicio evaluare","serp.unsafe.desc":"Acest site nu este sigur","topbar.openBankMode":"Deschidere în Mod Operațiuni bancare","topbar.desc":"Este posibil ca datele dvs. financiare să fie vizibile pentru alte persoane.","topbar.tooltip":"Mod Operațiuni bancare, o componentă din Avast Secure Browser instalată odată cu antivirusul Avast, izolează în siguranță sesiunile bancare și de cumpărături pentru a opri hackerii să vă fure numerele cardurilor de credit, parolele și alte date private.","topbar.dontShowAgain":"Doresc să nu se afișeze din nou pe acest site","installPage.consent.title":"Ne permiteți să vă protejăm prin scanarea adreselor Web?","installPage.consent.desc":"Dacă sunteți de acord, vom analiza adresele site-urilor Web pe care le vizitați, astfel încât să vă putem spune dacă acele site-uri sunt sigure. (Consultați {URL_START}Politica noastră de confidențialitate{URL_END})","installPage.agreed.title":"Vă mulțumim!","installPage.agreed.desc":"Acum vă protejăm de site-urile Web nesigure.","installPage.disagreed.title":"Fără resentimente","installPage.disagreed.desc":"Dacă nu doriți să vă scanăm adresele Web, pur și simplu dezinstalați {0} Online Security – și vă dorim să nu aveți probleme!","installPage.consent.disagree":"Nu, mulțumesc","installPage.consent.agree":"Da, scanați adresele Web","panel.consent.agree":"Scanare adrese Web"},"ru":{"AVG.title":"Online Security","Avast.title":"Avast Online Security","global.beta":"Бета-версия","global.detailsShow":"Подробнее","global.detailsHide":"Скрыть подробности","global.done":"Готово","global.leaveSite":"Покинуть сайт","global.switcher.off":"ВЫК","global.switcher.on":"ВКЛ","global.close":"Закрыть","global.back":"Назад","background.icon.unknown":"{0}: неизвестный сайт","background.icon.safe":"{0}: этот сайт безопасен","background.icon.bad":"{0}: этот сайт может быть ненадежным","background.icon.unsafe":"{0}: этот сайт небезопасен","security.title":"Безопасность","security.safe.title":"Этот сайт безопасен.","security.safe.item1.desc":"Нет угрозы фишинга","security.safe.item1.tooltip":"На этом веб-сайте не обнаружено попыток украсть конфиденциальную информацию, в частности пароли, номера кредитных карт и т. д.","security.safe.item2.desc":"Нет вредоносных программ","security.safe.item2.tooltip":"На этом веб-сайте не обнаружено вредоносного кода.","security.safe.item3.desc":"Надежный","security.safe.item3.tooltip":"Пользователи {0} оценили этот веб-сайт как надежный, нажав {1} в приложении {0} Online Security.","security.bad.title":"Этот сайт может быть ненадежным","security.bad.desc":"Здесь не обнаружено никаких фишинговых угроз или вредоносных программ, но многие наши пользователи отрицательно оценили этот веб-сайт.","security.unknown.title":"Неизвестный сайт","security.unknown.desc":"У нас пока недостаточно информации, чтобы оценить этот веб-сайт.","security.unsafe.title":"Этот сайт небезопасен.","security.unsafe.phishing.desc":"Этот веб-сайт отмечен как фишинговый. Фишинг — это попытка украсть вашу конфиденциальную информацию, в частности пароли, номера кредитных карт и т. д.","security.unsafe.malware.desc":"На этом веб-сайте обнаружен вредоносный код, который может навредить компьютеру или украсть ваши конфиденциальные данные.","rating.question.desc":"Вы доверяете {0}?","rating.negative":"Содержит ли этот веб-сайт какой-либо неприемлемый контент? (не обязательно)","rating.thanks":"Благодарим за оценку!","rating.trusted.desc":"Вы <i>доверяете</i> {0}","rating.untrusted.desc":"Вы <i>не доверяете</i> {0}","rating.revert.tooltip":"Нажмите, чтобы удалить оценку.","rating.tooltip":"Ваше доверие либо недоверие будет учитываться в нашем рейтинге безопасности для этого веб-сайта.","rating.category.pornography":"Порнография","rating.category.violence":"Оружие / насилие","rating.category.gambling":"Азартные игры","rating.category.drugs":"Алкоголь / наркотики","rating.category.illegal":"Пиратское ПО / нарушения закона","rating.category.others":"Другое","privacy.title":"Конфиденциальность","privacy.group.Social.desc":"Социальные сети","privacy.group.Social.block.desc":"Блокировать все отслеживание социальных сетей","privacy.group.Social.block.tooltip":"Так будет блокироваться отслеживание социальных сетей на каждом посещаемом вами сайте.","privacy.group.Social.unblock.desc":"Разблокировать все отслеживание социальных сетей","privacy.group.Social.unblock.tooltip":"Так будет разрешено отслеживание социальных сетей на каждом посещаемом вами сайте.","privacy.group.AdTracking.desc":"Отслеживание рекламными службами","privacy.group.AdTracking.block.desc":"Блокировать все отслеживание рекламными службами","privacy.group.AdTracking.block.tooltip":"Так будет блокироваться отслеживание рекламными службами на каждом посещаемом вами сайте.","privacy.group.AdTracking.unblock.desc":"Разблокировать все отслеживание рекламными службами","privacy.group.AdTracking.unblock.tooltip":"Так будет разрешено отслеживание рекламными службами на каждом посещаемом вами сайте.","privacy.group.WebAnalytics.desc":"Средства веб-аналитики","privacy.group.WebAnalytics.block.desc":"Блокировать все отслеживание средствами веб-аналитики","privacy.group.WebAnalytics.block.tooltip":"Так будет блокироваться отслеживание средствами веб-аналитики на каждом посещаемом вами сайте.","privacy.group.WebAnalytics.unblock.desc":"Разблокировать все отслеживание средствами веб-аналитики","privacy.group.WebAnalytics.unblock.tooltip":"Так будут разрешены все другие средства отслеживания на каждом посещаемом вами сайте.","privacy.group.Others.desc":"Другое","privacy.group.Others.block.desc":"Блокировать все другие средства отслеживания","privacy.group.Others.block.tooltip":"Так будут блокироваться все другие средства отслеживания на каждом посещаемом вами сайте.","privacy.group.Others.unblock.desc":"Разблокировать все другие средства отслеживания","privacy.trackersBlockedAll":"На сайте {1} заблокировано <i>единственное {0} средство отслеживания</i>. | На сайте {1} заблокированы <i>все {0} средства отслеживания</i>. | На сайте {1} заблокированы <i>все {0} средств отслеживания</i>. | На сайте {1} заблокированы <i>все {0} средства отслеживания</i>.","privacy.trackersBlockedSome":"На сайте {2} заблокированы <i>средства отслеживания: {0} из {1}</i>. | На сайте {2} заблокированы <i>средства отслеживания: {0} из {1}</i>. | На сайте {2} заблокированы <i>средства отслеживания: {0} из {1}</i>. | На сайте {2} заблокированы <i>средства отслеживания: {0} из {1}</i>.","privacy.trackersBlockedNone":"<i>{0} система отслеживания</i> на {1} | <i>{0} системы отслеживания</i> на {1} | <i>{0} систем отслеживания</i> на {1} | <i>{0} системы отслеживания</i> на {1}","privacy.trackersBlocked":"Заблокировано {0} из {1}","privacy.trackersFound":"Обнаружено {0}","privacy.trackersNone":"нет","privacy.trackerBlock.desc":"Блокировать","privacy.trackerBlock.tooltip":"Так [{0}] будет блокироваться на каждом посещаемом вами сайте.","privacy.trackerUnblock.desc":"Заблокировано","privacy.trackerUnblock.tooltip":"Это разблокирует [{0}] на всех посещаемых вами сайтах.","privacy.trackerUnblockOnAutoBlock.tooltip":"Чтобы разблокировать отдельное средство отслеживания, выключите автоматическую блокировку.","privacy.automaticBlocking.desc":"Автоматически блокировать все средства отслеживания","privacy.automaticBlocking.tooltip":"Все обнаруженные средства отслеживания будут автоматически блокироваться на каждом посещаемом веб-сайте.","setting.title":"Настройки","setting.serp.name":"Помечать результаты поиска","setting.serp.desc":"Добавление цветных значков к результатам поиска в Google, Yahoo! и т. д., чтобы видеть, какие сайты безопасны (зеленый — безопасно, серый — неизвестно, красный — опасно)","setting.serpPopup.name":"Отображать подсказки для результатов поиска","setting.serpPopup.desc":"Наведите мышь на значки, чтобы увидеть больше информации.","setting.secureBrowser.Avast.name":"Secure Browser","setting.secureBrowser.Avast.desc":"Переход в режим банковских операций при открытии сайтов с конфиденциальной финансовой информацией (должны быть установлены антивирус Avast и браузер Avast Secure Browser)","setting.secureBrowser.AVG.name":"Secure Browser","setting.secureBrowser.AVG.desc":"Переходить в режим банковских операций при открытии сайтов с конфиденциальной финансовой информацией (должны быть установлены AVG AntiVirus и браузер AVG Secure Browser)","setting.dntBadge.name":"Показывать количество средств отслеживания на сайте","setting.dntBadge.desc":"Добавление в браузер значка, мгновенно показывающего количество средств отслеживания на сайте","setting.dntAutoBlock.name":"Автоматически блокировать все средства отслеживания","setting.dntAutoBlock.desc":"Будут блокироваться все обнаруженные средства отслеживания на каждом посещаемом вами веб-сайте.","setting.dntSocial.desc":"Блокировать все средства отслеживания социальных сетей","setting.dntAdTracking.desc":"Блокировать все рекламные средства отслеживания","setting.dntWebAnalytics.desc":"Блокировать все средства отслеживания средств веб-аналитики","setting.dntOthers.desc":"Блокировать все другие средства отслеживания","setting.productAnalysis.name":"Разрешить анализ производительности и использования продукта для разработки новых продуктов","setting.productAnalysis.tooltip":"Мы собираем и отправляем на свои сервера данные об использовании расширения, внутреннем идентификаторе расширения, типе и версии браузера, операционной системе, стране, языке и статусе антивирусного приложения Avast.","setting.urlConsent.name":"Согласие на сбор URL-адресов","serp.safe.desc":"Этот сайт безопасен.","serp.bad.desc":"Этот сайт может быть ненадежным.","serp.unknown.desc":"У этого сайта нет оценки.","serp.unsafe.desc":"Этот сайт небезопасен.","topbar.openBankMode":"Открыть в режиме банковских операций","topbar.desc":"Ваши финансовые данные могут увидеть посторонние.","topbar.tooltip":"Режим банковских операций, компонент браузера Avast Secure Browser, установленного вместе с антивирусом Avast, безопасно изолирует сеансы покупок и банковских операций, не давая хакерам выкрасть ваши пароли, номера кредитных карт и другие конфиденциальные данные.","topbar.dontShowAgain":"Больше не показывать на этом сайте","installPage.consent.title":"Разрешить защиту с помощью сканирования веб-адресов?","installPage.consent.desc":"В случае вашего согласия мы будем просматривать адреса посещаемых сайтов, чтобы сообщать об уровне их безопасности. (Подробнее см. в {URL_START}Политике конфиденциальности{URL_END}.)","installPage.agreed.title":"Спасибо!","installPage.agreed.desc":"Теперь вы защищены от небезопасных сайтов.","installPage.disagreed.title":"Без обид","installPage.disagreed.desc":"Если вы не хотите, чтобы мы сканировали веб-адреса, просто удалите {0} Online Security. И будьте аккуратны!","installPage.consent.disagree":"Нет, спасибо","installPage.consent.agree":"Да, сканировать веб-адреса","panel.consent.agree":"Сканировать веб-адреса"},"sk":{"AVG.title":"Online Security","Avast.title":"Avast Online Security","global.beta":"Beta","global.detailsShow":"Podrobnosti","global.detailsHide":"Skryť podrobnosti","global.done":"Hotovo","global.leaveSite":"Opustiť stránku","global.switcher.off":"VYP","global.switcher.on":"ZAP","global.close":"Zavrieť","global.back":"Späť","background.icon.unknown":"{0} – neznáma stránka","background.icon.safe":"{0} – táto stránka je bezpečná","background.icon.bad":"{0} – táto stránka môže byť nedôveryhodná","background.icon.unsafe":"{0} – táto stránka je nebezpečná","security.title":"Zabezpečenie","security.safe.title":"Táto stránka je bezpečná","security.safe.item1.desc":"Žiadny phishing","security.safe.item1.tooltip":"Na tejto stránke sme nenašli žiadne pokusy ukradnúť citlivé údaje, ako sú heslá, čísla platobných kariet atď.","security.safe.item2.desc":"Žiadny malware","security.safe.item2.tooltip":"Na tejto stránke sme nenašli žiadny škodlivý kód.","security.safe.item3.desc":"Dôveryhodná","security.safe.item3.tooltip":"Niektorí používatelia ({0}) túto stránku označili ako dôveryhodnú tým, že v doplnku {0} Online Security klikli na tlačidlo {1}.","security.bad.title":"Táto stránka môže byť nedôveryhodná","security.bad.desc":"Na tejto stránke sme nenašli žiadne phishingové hrozby, ale veľa našich používateľov jej udelilo palec dole.","security.unknown.title":"Neznáma stránka","security.unknown.desc":"Na ohodnotenie tejto stránky nemáme dostatok informácií.","security.unsafe.title":"Táto stránka je nebezpečná","security.unsafe.phishing.desc":"Táto stránka bola nahlásená ako phishingová. Phishing sú pokusy ukradnúť citlivé údaje, ako sú heslá, čísla platobných kariet atď.","security.unsafe.malware.desc":"Na tejto stránke sme našli škodlivý kód, ktorý by vám mohol poškodiť počítač alebo ukradnúť súkromné údaje.","rating.question.desc":"Dôverujete stránke {0}?","rating.negative":"Je na tejto stránke nejaký nevhodný obsah? (nepovinné)","rating.thanks":"Ďakujeme za hodnotenie!","rating.trusted.desc":"Stránke {0} <i>dôverujete</i>","rating.untrusted.desc":"Stránke {0} <i>nedôverujete</i>","rating.revert.tooltip":"Kliknutím svoje hodnotenie zrušíte","rating.tooltip":"Vaša dôvera či nedôvera sa premietne do nášho bezpečnostného hodnotenia stránky.","rating.category.pornography":"Pornografia","rating.category.violence":"Zbrane/násilie","rating.category.gambling":"Hazardné hry","rating.category.drugs":"Alkohol/drogy","rating.category.illegal":"Warez/nelegálne","rating.category.others":"Iné","privacy.title":"Súkromie","privacy.group.Social.desc":"Sociálne siete","privacy.group.Social.block.desc":"Blokovať všetko sledovanie sociálnymi sieťami","privacy.group.Social.block.tooltip":"Týmto zablokujete sledovanie sociálnymi sieťami na každej navštívenej stránke.","privacy.group.Social.unblock.desc":"Odblokovať všetko sledovanie sociálnymi sieťami","privacy.group.Social.unblock.tooltip":"Týmto povolíte sledovanie sociálnymi sieťami na každej navštívenej stránke.","privacy.group.AdTracking.desc":"Sledovanie reklamy","privacy.group.AdTracking.block.desc":"Blokovať všetko sledovanie reklamami","privacy.group.AdTracking.block.tooltip":"Týmto zablokujete sledovanie reklamami na každej navštívenej stránke.","privacy.group.AdTracking.unblock.desc":"Odblokovať všetko sledovanie reklamami","privacy.group.AdTracking.unblock.tooltip":"Týmto povolíte sledovanie reklamami na každej navštívenej stránke.","privacy.group.WebAnalytics.desc":"Webová analytika","privacy.group.WebAnalytics.block.desc":"Blokovať všetko sledovanie webovými analytickými nástrojmi","privacy.group.WebAnalytics.block.tooltip":"Týmto zablokujete sledovanie webovými analytickými nástrojmi na každej navštívenej stránke.","privacy.group.WebAnalytics.unblock.desc":"Odblokovať všetko sledovanie webovými analytickými nástrojmi","privacy.group.WebAnalytics.unblock.tooltip":"Týmto povolíte ostatné sledovanie na každej navštívenej stránke.","privacy.group.Others.desc":"Iné","privacy.group.Others.block.desc":"Blokovať všetko ostatné sledovanie","privacy.group.Others.block.tooltip":"Týmto zablokujete ostatné sledovanie na každej navštívenej stránke.","privacy.group.Others.unblock.desc":"Odblokovať všetko ostatné sledovanie","privacy.trackersBlockedAll":"Na stránke {1} bol zablokovaný <i>{0} sledovací nástroj</i> | Na stránke {1} boli zablokované <i>{0} sledovacie nástroje</i> | Na stránke {1} bolo zablokovaných <i>{0} sledovacích nástrojov</i> | Na stránke {1} bolo zablokovaných <i>{0} sledovacích nástrojov</i>","privacy.trackersBlockedSome":"Na stránke {2} sme zablokovali <i>{0} sledovací nástroj z {1}</i> | Na stránke {2} sme zablokovali <i>{0} sledovacie nástroje z {1}</i> | Na stránke {2} sme zablokovali <i>{0} sledovacích nástrojov z {1}</i> | Na stránke {2} sme zablokovali <i>{0} sledovacích nástrojov z {1}</i>","privacy.trackersBlockedNone":"<i>{0} sledovací systém</i> na stránke {1} | <i>{0} sledovacie systémy</i> na stránke {1} | <i>{0} sledovacích systémov</i> na stránke {1} | <i>{0} sledovacích systémov</i> na stránke {1}","privacy.trackersBlocked":"Zablokované: {0} z {1}","privacy.trackersFound":"Nájdené: {0}","privacy.trackersNone":"nič","privacy.trackerBlock.desc":"Blokovať","privacy.trackerBlock.tooltip":"Týmto zablokujete {0} na každej navštívenej stránke.","privacy.trackerUnblock.desc":"Zablokované","privacy.trackerUnblock.tooltip":"Týmto odblokujete {0} na každej navštívenej stránke.","privacy.trackerUnblockOnAutoBlock.tooltip":"Ak chcete odblokovať konkrétny sledovací nástroj, vypnite automatické blokovanie.","privacy.automaticBlocking.desc":"Automaticky blokovať všetko sledovanie","privacy.automaticBlocking.tooltip":"Na každej stránke, ktorú navštívite, automaticky zablokujeme všetky nájdené sledovacie nástroje.","setting.title":"Nastavenia","setting.serp.name":"Označovať výsledky vyhľadávania","setting.serp.desc":"Pridajte si do výsledkov vyhľadávania cez Google, Yahoo! atď. farebné ikony, podľa ktorých rozpoznáte, ktoré stránky sú bezpečné (zelená = bezpečná, šedá = neznáma, červená = nebezpečná)","setting.serpPopup.name":"Ukazovať popisky k výsledkom vyhľadávania","setting.serpPopup.desc":"Umiestnením kurzora nad ikony zobrazíte ďalšie informácie.","setting.secureBrowser.Avast.name":"Secure Browser","setting.secureBrowser.Avast.desc":"V prípade stránok s citlivými finančnými údajmi prepínať na Platobný režim (vyžaduje nainštalovaný Avast Antivirus a Avast Secure Browser)","setting.secureBrowser.AVG.name":"Secure Browser","setting.secureBrowser.AVG.desc":"V prípade stránok s citlivými finančnými údajmi prepínať na Platobný režim (vyžaduje nainštalovaný AVG AntiVirus a AVG Secure Browser)","setting.dntBadge.name":"Zobraziť celkový počet sledovacích nástrojov na stránke","setting.dntBadge.desc":"Pridajte si do prehliadača ukazovateľ počtu sledovacích nástrojov na aktuálne otvorenej stránke.","setting.dntAutoBlock.name":"Automaticky blokovať všetko sledovanie","setting.dntAutoBlock.desc":"Blokujte všetky sledovacie nástroje na každej navštívenej stránke.","setting.dntSocial.desc":"Blokovať všetko sledovanie sociálnymi sieťami","setting.dntAdTracking.desc":"Blokovať všetko sledovanie reklamami","setting.dntWebAnalytics.desc":"Blokovať všetko sledovanie webovými analytickými nástrojmi","setting.dntOthers.desc":"Blokovať všetko ostatné sledovanie","setting.productAnalysis.name":"Povoliť analýzu fungovania a používania produktu na účely jeho ďalšieho vývoja","setting.productAnalysis.tooltip":"Zbierame a posielame na svoje servery údaje o používaní rozšírení, interný identifikátor rozšírenia, typ a verziu prehliadača, operačný systém, krajinu, jazyk a stav antivírusovej aplikácie Avast.","setting.urlConsent.name":"Súhlas so zbieraním webových adries","serp.safe.desc":"Tento web je bezpečný","serp.bad.desc":"Táto stránka môže byť nedôveryhodná","serp.unknown.desc":"Táto stránka nemá žiadne hodnotenie","serp.unsafe.desc":"Táto stránka je nebezpečná","topbar.openBankMode":"Otvoriť v Platobnom režime","topbar.desc":"Vaše finančné údaje môžu vidieť ostatní.","topbar.tooltip":"Platobný režim je súčasť prehliadača Avast Secure Browser nainštalovaná spolu s vašim antivírusom Avast. Bezpečne izoluje relácie nákupov a bankovníctva, aby zabránil hackerom ukradnúť vaše čísla platobných kariet, heslá a iné súkromné údaje.","topbar.dontShowAgain":"Nezobrazovať na tejto stránke znova","installPage.consent.title":"Chcete, aby sme vás chránili testovaním webových adries?","installPage.consent.desc":"Ak súhlasíte, budeme kontrolovať adresy webov, ktoré navštívite, aby sme vás mohli informovať, či sú bezpečné (viac sa dozviete v našom dokumente {URL_START}Ochrana osobných údajov{URL_END})","installPage.agreed.title":"Ďakujeme!","installPage.agreed.desc":"Odteraz vás chránime pred nebezpečnými webmi.","installPage.disagreed.title":"Nemáme vám to za zlé","installPage.disagreed.desc":"Ak nechcete, aby sme testovali navštívené webové adresy, stačí odinštalovať Online Security {0}. A dávajte si na internete pozor!","installPage.consent.disagree":"Nie, ďakujem","installPage.consent.agree":"Áno, testovať webové adresy","panel.consent.agree":"Testovanie webových adries"},"sl":{"AVG.title":"Online Security","Avast.title":"Avast Online Security","global.beta":"Beta","global.detailsShow":"Podrobnosti","global.detailsHide":"Skrij podrobnosti","global.done":"Dokončano","global.leaveSite":"Zapusti spletno mesto","global.switcher.off":"IZK","global.switcher.on":"VKL","global.close":"Zapri","global.back":"Nazaj","background.icon.unknown":"{0} – neznano spletno mesto","background.icon.safe":"{0} – to spletno mesto je varno","background.icon.bad":"{0} – to spletno mesto morda ni zaupanja vredno","background.icon.unsafe":"{0} – to spletno mesto ni varno","security.title":"Varnost","security.safe.title":"To spletno mesto je varno","security.safe.item1.desc":"Brez lažnega predstavljanja","security.safe.item1.tooltip":"Na trem spletnem mestu nismo zaznali nobenih poskusov kraje občutljivih podatkov, kot so gesla, številke kreditnih kartic in drugih.","security.safe.item2.desc":"Brez zlonamerne programske opreme","security.safe.item2.tooltip":"Na tem spletnem mestu nismo zaznali nobene zlonamerne kode.","security.safe.item3.desc":"Zaupanja vredno","security.safe.item3.tooltip":"Uporabniki aplikacije {0} so ocenili to spletno mesto kot zaupanja vredno s klikom gumba {1} v aplikaciji {0} Online Security.","security.bad.title":"To spletno mesto morda ni zaupanja vredno","security.bad.desc":"Na tem spletnem mestu nismo našli nobenih groženj lažnega predstavljanja ali zlonamerne programske opreme, vendar pa mnogim uporabnikom to spletno mesto ni bilo všeč.","security.unknown.title":"Neznano spletno mesto","security.unknown.desc":"Za oceno tega spletnega mesta še nimamo dovolj informacij.","security.unsafe.title":"To spletno mesto ni varno","security.unsafe.phishing.desc":"To spletno mesto je bilo označeno kot spletno mesto z lažnim predstavljanjem. Lažno predstavljanje je poskus kraje vaših občutljivih podatkov, kot so gesla, številke kreditnih kartic in drugi.","security.unsafe.malware.desc":"Na tem spletnem mestu smo našli zlonamerno kodo, ki bi lahko škodovala vašemu računalniku ali ukradla vaše zasebne podatke.","rating.question.desc":"Ali zaupate spletnemu mestu {0}?","rating.negative":"Ali je na tem spletnem mestu kakršna koli neprimerna vsebina? (neobvezno)","rating.thanks":"Zahvaljujemo se vam za oceno.","rating.trusted.desc":"Spletnemu mestu {0} <i>zaupate</i>","rating.untrusted.desc":"Spletnemu mestu {0} <i>ne zaupate</i>","rating.revert.tooltip":"Kliknite, da odstranite svojo oceno","rating.tooltip":"Vaše zaupanje ali nezaupanje bo upoštevano pri naši varnostni oceni tega spletnega mesta.","rating.category.pornography":"Pornografija","rating.category.violence":"Orožje/nasilje","rating.category.gambling":"Igre na srečo","rating.category.drugs":"Alkohol/droge","rating.category.illegal":"Piratstvo/nezakonitosti","rating.category.others":"Drugo","privacy.title":"Zasebnost","privacy.group.Social.desc":"Družabna omrežja","privacy.group.Social.block.desc":"Blokiraj sledenje v vseh družabnih omrežjih","privacy.group.Social.block.tooltip":"S tem boste blokirali sledenje družabnih omrežij na vseh spletnih mestih, ki jih obiščete.","privacy.group.Social.unblock.desc":"Odblokiraj sledenje v vseh družabnih omrežjih","privacy.group.Social.unblock.tooltip":"S tem boste dovolili sledenje družabnih omrežij na vseh spletnih mestih, ki jih obiščete.","privacy.group.AdTracking.desc":"Sledenje v oglasih","privacy.group.AdTracking.block.desc":"Blokiraj sledenje v vseh oglasih","privacy.group.AdTracking.block.tooltip":"S tem boste blokirali sledenje oglasov na vseh spletnih mestih, ki jih obiščete.","privacy.group.AdTracking.unblock.desc":"Odblokiraj sledenje v vseh oglasih","privacy.group.AdTracking.unblock.tooltip":"S tem boste dovolili sledenje oglasov na vseh spletnih mestih, ki jih obiščete.","privacy.group.WebAnalytics.desc":"Spletna analitika","privacy.group.WebAnalytics.block.desc":"Blokiraj sledenje vse spletne analitike","privacy.group.WebAnalytics.block.tooltip":"S tem boste blokirali sledenje spletne analitike na vseh spletnih mestih, ki jih obiščete.","privacy.group.WebAnalytics.unblock.desc":"Odblokiraj sledenje vse spletne analitike","privacy.group.WebAnalytics.unblock.tooltip":"S tem boste dovolili druge vrste sledenja na vseh spletnih mestih, ki jih obiščete.","privacy.group.Others.desc":"Drugo","privacy.group.Others.block.desc":"Blokiraj vse druge vrste sledenja","privacy.group.Others.block.tooltip":"S tem boste blokirali druge vrste sledenja na vseh spletnih mestih, ki jih obiščete.","privacy.group.Others.unblock.desc":"Odblokiraj vse druge vrste sledenja","privacy.trackersBlockedAll":"<i>{0} sledilnik</i> na spletnem mestu {1} je blokiran | <i>Oba {0} sledilnika</i> na spletnem mestu {1} sta blokirana | <i>Vsi {0} sledilniki</i> na spletnem mestu {1} so blokirani | <i>Vseh {0} sledilnikov</i> na spletnem mestu {1} je blokiranih","privacy.trackersBlockedSome":"<i>{0} od {1} sledilnikov</i> na spletnem mestu {2} je blokiran | <i>{0} od {1} sledilnikov</i> na spletnem mestu {2} sta blokirana | <i>{0} od {1} sledilnikov</i> na spletnem mestu {2} so blokirani | <i>{0} od {1} sledilnikov</i> na spletnem mestu {2} je blokiranih","privacy.trackersBlockedNone":"<i>{0} sledilni</i> sistem na spletnem mestu {1} | <i>{0} sledilna</i> sistema na spletnem mestu {1} | <i>{0} sledilni</i> sistemi na spletnem mestu {1} | <i>{0} sledilnih</i> sistemov na spletnem mestu {1}","privacy.trackersBlocked":"{0} od {1} blokiranih","privacy.trackersFound":"Št. najdenih: {0}","privacy.trackersNone":"nič","privacy.trackerBlock.desc":"Blokiraj","privacy.trackerBlock.tooltip":"S tem boste blokirali sledilnik [{0}] na vseh spletnih mestih, ki jih obiščete.","privacy.trackerUnblock.desc":"Blokirano","privacy.trackerUnblock.tooltip":"S tem boste odblokirali sledilnik [{0}] na vseh spletnih mestih, ki jih obiščete.","privacy.trackerUnblockOnAutoBlock.tooltip":"Če želite odblokirati določen sledilnik, izklopite samodejno blokiranje.","privacy.automaticBlocking.desc":"Samodejno blokirajte vse sledilnike","privacy.automaticBlocking.tooltip":"Vsi najdeni sledilniki na vseh spletnih mestih, ki jih obiščete, bodo samodejno blokirani.","setting.title":"Nastavitve","setting.serp.name":"Označi moje rezultate iskanja","setting.serp.desc":"Dodajte barvne ikone svojim rezultatom iskanja v iskalnikih Google, Yahoo! in drugih, da boste vedeli, katere rezultate lahko varno kliknete. (Zelena = varno, siva = neznano, rdeča = nevarno)","setting.serpPopup.name":"Pokaži opise orodij za rezultate iskanja","setting.serpPopup.desc":"Za ogled dodatnih informacij premaknite kazalec miške na našo ikono.","setting.secureBrowser.Avast.name":"Secure Browser","setting.secureBrowser.Avast.desc":"Preklopite na bančni način za obisk spletnih mest z občutljivimi finančnimi podatki (nameščena morata biti protivirusni program Avast in Avast Secure Browser)","setting.secureBrowser.AVG.name":"Secure Browser","setting.secureBrowser.AVG.desc":"Preklopite na bančni način za obisk spletnih strani z občutljivimi finančnimi podatki (nameščena morata biti protivirusni program AVG in AVG Secure Browser)","setting.dntBadge.name":"Pokaži skupno število sledilnikov na spletnem mestu","setting.dntBadge.desc":"Dodajte značko v svoj brskalnik, da boste lahko takoj preverili, koliko sledilnikov je na katerem koli spletnem mestu.","setting.dntAutoBlock.name":"Samodejno blokiraj vse sledilnike","setting.dntAutoBlock.desc":"Blokirajte vse najdene sledilnike na vseh spletnih mestih, ki jih obiščete.","setting.dntSocial.desc":"Blokiraj sledilnike v vseh družabnih omrežjih","setting.dntAdTracking.desc":"Blokiraj sledilnike v vseh oglasih","setting.dntWebAnalytics.desc":"Blokiraj sledilnike v vsej spletni analitiki","setting.dntOthers.desc":"Blokiraj vse druge vrste sledilnikov","setting.productAnalysis.name":"Dovoli analizo učinkovitosti delovanja in uporabe izdelka za razvoj novih izdelkov","setting.productAnalysis.tooltip":"Zbiramo in v naše strežnike pošiljamo podatke o uporabi razširitve, notranjem identifikatorju razširitve, vrsti in različici brskalnika, operacijskem sistemu, državi, jeziku in stanju protivirusnega programa Avast.","setting.urlConsent.name":"Soglasje za uporabo naslova URL","serp.safe.desc":"To spletno mesto je varno","serp.bad.desc":"To spletno mesto morda ni zaupanja vredno","serp.unknown.desc":"Ta spletno mesto še nima ocene","serp.unsafe.desc":"Ta spletno mesto ni varno","topbar.openBankMode":"Odpri v bančnem načinu","topbar.desc":"Vaši finančni podatki so morda prikazani drugim.","topbar.tooltip":"Bančni način, del dodatka Avast Secure Browser, ki je nameščen s protivirusnim programom Avast, varno osami nakupovalne ter bančne seje in tako hekerjem prepreči, da bi ukradli številke kreditnih kartic, gesla in druge zasebne podatke.","topbar.dontShowAgain":"Tega ne kaži več na tem spletnem mestu","installPage.consent.title":"Ali nam dovolite, da vas zaščitimo s pregledovanjem spletnih naslovov?","installPage.consent.desc":"Če se strinjate, bomo pregledali naslove spletnih mest, ki jih obiščete, da vas bomo lahko obvestili, ali so ta spletna mesta varna. (Oglejte si naš {URL_START}pravilnik o zasebnosti{URL_END})","installPage.agreed.title":"Hvala!","installPage.agreed.desc":"Zdaj vas varujemo pred nevarnimi spletnimi mesti.","installPage.disagreed.title":"Brez zamer","installPage.disagreed.desc":"Če ne želite, da pregledamo spletne naslove, preprosto odstranite {0} Online Security in pazite na svojo varnost.","installPage.consent.disagree":"Ne, hvala","installPage.consent.agree":"Da, preglej spletne naslove","panel.consent.agree":"Pregled spletnih naslovov"},"sr":{"AVG.title":"Online Security","Avast.title":"Avast Online Security","global.beta":"Beta","global.detailsShow":"Detalji","global.detailsHide":"Sakrij detalje","global.done":"Gotovo","global.leaveSite":"Napusti lokaciju","global.switcher.off":"ISK","global.switcher.on":"UKL","global.close":"Zatvori","global.back":"Nazad","background.icon.unknown":"{0} – Nepoznata lokacija","background.icon.safe":"{0} – Ova veb lokacija je bezbedna","background.icon.bad":"{0} – Ova lokacija možda nije pouzdana","background.icon.unsafe":"{0} – Ova veb lokacija nije bezbedna","security.title":"Bezbednost","security.safe.title":"Ova veb lokacija je bezbedna","security.safe.item1.desc":"Nema phishinga","security.safe.item1.tooltip":"Nismo otkrili nijedan pokušaj krađe osetljivih informacija kao što su lozinke, brojevi kreditnih kartica itd. na ovoj veb lokaciji.","security.safe.item2.desc":"Nema malvera","security.safe.item2.tooltip":"Nismo otkrili nijedan zlonamerni kôd na ovoj veb lokaciji.","security.safe.item3.desc":"Pouzdana","security.safe.item3.tooltip":"{0} korisnici su ocenili ovu veb lokaciju kao pouzdanu klikom na {1} u usluzi {0} Online Security.","security.bad.title":"Ovo možda nije pouzdano","security.bad.desc":"Ovde nismo pronašli nijednu phishing pretnju ili malver, ali mnogi od naših korisnika su ovoj lokaciji dali palac nadole.","security.unknown.title":"Nepoznata lokacija","security.unknown.desc":"Još uvek nemamo dovoljno informacija da bismo ocenili ovu veb lokaciju.","security.unsafe.title":"Ova veb lokacija nije bezbedna","security.unsafe.phishing.desc":"Ova veb lokacija je označena kao phishing lokacija. Phishing predstavlja pokušaj krađe vaših osetljivih informacija kao što su lozinke, brojevi kreditnih kartica itd.","security.unsafe.malware.desc":"Na ovoj veb lokaciji smo pronašli zlonamerni kôd koji bi mogao da ošteti vaš računar ili ukrade vaše privatne podatke.","rating.question.desc":"Da li imate poverenja u {0}?","rating.negative":"Da li postoji neprikladan sadržaj na ovoj veb lokaciji? (opcionalno)","rating.thanks":"Hvala vam na oceni!","rating.trusted.desc":"<i>Imate poverenja</i> u {0}","rating.untrusted.desc":"<i>Nemate poverenja</i> u {0}","rating.revert.tooltip":"Kliknite da biste uklonili ocenu","rating.tooltip":"Vaše poverenje ili nepoverenje će biti uzeto u obzir za našu bezbednosnu ocenu ove veb lokacije.","rating.category.pornography":"Pornografija","rating.category.violence":"Oružje / nasilje","rating.category.gambling":"Kockanje","rating.category.drugs":"Alkohol / droga","rating.category.illegal":"Warez / nelegalno","rating.category.others":"Ostalo","privacy.title":"Privatnost","privacy.group.Social.desc":"Društvene mreže","privacy.group.Social.block.desc":"Blokiraj kompletno praćenje društvenih mreža","privacy.group.Social.block.tooltip":"Ovo će blokirati praćenje društvenih mreža na svakoj veb lokaciji koju posetite.","privacy.group.Social.unblock.desc":"Deblokiraj kompletno praćenje društvenih mreža","privacy.group.Social.unblock.tooltip":"Ovo će dozvoliti praćenje društvenih mreža na svakoj veb lokaciji koju posetite.","privacy.group.AdTracking.desc":"Praćenje reklama","privacy.group.AdTracking.block.desc":"Blokiraj kompletno praćenje reklama","privacy.group.AdTracking.block.tooltip":"Ovo će blokirati praćenje reklama na svakoj veb lokaciji koju posetite.","privacy.group.AdTracking.unblock.desc":"Deblokiraj kompletno praćenje reklama","privacy.group.AdTracking.unblock.tooltip":"Ovo će dozvoliti praćenje reklama na svakoj veb lokaciji koju posetite.","privacy.group.WebAnalytics.desc":"Veb analitika","privacy.group.WebAnalytics.block.desc":"Blokiraj kompletno praćenje veb analitike","privacy.group.WebAnalytics.block.tooltip":"Ovo će blokirati praćenje veb analitike na svakoj veb lokaciji koju posetite.","privacy.group.WebAnalytics.unblock.desc":"Deblokiraj kompletno praćenje veb analitike","privacy.group.WebAnalytics.unblock.tooltip":"Ovo će dozvoliti ostala praćenja na svakoj veb lokaciji koju posetite.","privacy.group.Others.desc":"Ostalo","privacy.group.Others.block.desc":"Blokiraj sva ostala praćenja","privacy.group.Others.block.tooltip":"Ovo će blokirati ostala praćenja na svakoj veb lokaciji koju posetite.","privacy.group.Others.unblock.desc":"Deblokiraj sva ostala praćenja","privacy.trackersBlockedAll":"<i>{0} praćenje</i> je blokirano na {1} | <i>{0} praćenja</i> su blokirana na {1} | <i>Svih {0} praćenja</i> je blokirano na {1}","privacy.trackersBlockedSome":"<i>{0} od {1} praćenja</i> je blokirano na {2} | <i>{0} od {1} praćenja</i> su blokirana na {2} | <i>{0} od {1} praćenja</i> je blokirano na {2}","privacy.trackersBlockedNone":"<i>{0} sistem za praćenje</i> na {1} | <i>{0} sistema za praćenje</i> na {1} | <i>{0} sistema za praćenje</i> na {1}","privacy.trackersBlocked":"Blokirano: {0} od {1}","privacy.trackersFound":"Pronađeno: {0}","privacy.trackersNone":"ništa","privacy.trackerBlock.desc":"Blokiraj","privacy.trackerBlock.tooltip":"Ovo će blokirati [{0}] na svakoj veb lokaciji koju posetite.","privacy.trackerUnblock.desc":"Blokirano","privacy.trackerUnblock.tooltip":"Ovo će deblokirati [{0}] na svakoj veb lokaciji koju posetite.","privacy.trackerUnblockOnAutoBlock.tooltip":"Da biste deblokirali određeno praćenje, isključite automatsko blokiranje.","privacy.automaticBlocking.desc":"Automatski blokiraj sva praćenja","privacy.automaticBlocking.tooltip":"Automatski ćemo blokirati sva pronađena praćenja na svakoj veb lokaciji koju posetite.","setting.title":"Postavke","setting.serp.name":"Označi moje rezultate pretrage","setting.serp.desc":"Dodajte ikone u boji svojim rezultatima pretrage u uslugama Google, Yahoo! itd. da biste videli na koje rezultate je bezbedno kliknuti. (Zelena = Bezbedno, Siva = Nepoznato, Crvena = Nije bezbedno)","setting.serpPopup.name":"Prikaži opise alatki za rezultate pretrage","setting.serpPopup.desc":"Zadržite miš iznad naših ikona da biste videli više informacija.","setting.secureBrowser.Avast.name":"Secure Browser","setting.secureBrowser.Avast.desc":"Pređite u Režim banke za osetljive finansijske lokacije (zahteva instalirane Avast Antivirus i Avast Secure Browser)","setting.secureBrowser.AVG.name":"Secure Browser","setting.secureBrowser.AVG.desc":"Pređite u Režim banke za osetljive finansijske lokacije (zahteva instalirane AVG AntiVirus i AVG Secure Browser)","setting.dntBadge.name":"Prikaži ukupan broj praćenja na lokaciji","setting.dntBadge.desc":"Dodajte bedž u pregledač da biste odmah videli koliko praćenja postoji na svakoj veb lokaciji.","setting.dntAutoBlock.name":"Automatski blokiraj sva praćenja","setting.dntAutoBlock.desc":"Blokirajte sva pronađena praćenja na svakoj veb lokaciji koju posetite.","setting.dntSocial.desc":"Blokiraj sva praćenja društvenih mreža","setting.dntAdTracking.desc":"Blokiraj sva praćenja reklama","setting.dntWebAnalytics.desc":"Blokiraj sva praćenja veb analitike","setting.dntOthers.desc":"Blokiraj sva ostala praćenja","setting.productAnalysis.name":"Omogućite analizu performansi proizvoda i upotrebu za razvoj novih proizvoda","setting.productAnalysis.tooltip":"Prikupljamo i na naše servere šaljemo podatke o korišćenju proširenja, interni identifikator proširenja, tip pregledača i verziju, operativni sistem, zemlju, jezik, kao i status Avast antivirusne aplikacije.","setting.urlConsent.name":"Pristanak na preuzimanje URL-a","serp.safe.desc":"Ovaj veb-sajt je bezbedan","serp.bad.desc":"Ova lokacija možda nije pouzdana","serp.unknown.desc":"Ova lokacija nema ocenu","serp.unsafe.desc":"Ova lokacija nije bezbedna","topbar.openBankMode":"Otvori u režimu banke","topbar.desc":"Drugi ljudi možda mogu da vide vaše finansijske podatke.","topbar.tooltip":"Režim banke, deo programa Avast Secure Browser koji se instalira uz Avast antivirus, bezbedno izoluje sesije kupovine i bankarskih poslova da bi sprečio hakere da ukradu vaše brojeve kreditnih kartica, lozinke i druge privatne podatke.","topbar.dontShowAgain":"Ne prikazuj ponovo na ovom sajtu","installPage.consent.title":"Želite li da nam dozvolite da vas zaštitimo skeniranjem veb-adresa?","installPage.consent.desc":"Ako se slažete, gledaćemo adrese veb-sajtova koje posećujete kako bismo mogli da vam kažemo da li su oni bezbedni. (Pogledajte naše {URL_START}smernice za privatnost{URL_END})","installPage.agreed.title":"Hvala!","installPage.agreed.desc":"Sada vas štitimo od nebezbednih veb-sajtova.","installPage.disagreed.title":"Nemojte se ljutiti","installPage.disagreed.desc":"Ako ne želite da skeniramo vaše veb-adrese, samo deinstalirajte {0} Online Security – i čuvajte se dok ste tamo!","installPage.consent.disagree":"Ne, hvala","installPage.consent.agree":"Da, skeniraj veb-adrese","panel.consent.agree":"Skeniraj veb-adrese"},"sv":{"AVG.title":"Online Security","Avast.title":"Avast Online Security","global.beta":"Beta","global.detailsShow":"Information","global.detailsHide":"Dölj information","global.done":"Klart","global.leaveSite":"Lämna webbplatsen","global.switcher.off":"AV","global.switcher.on":"PÅ","global.close":"Stäng","global.back":"Tillbaka","background.icon.unknown":"{0} – okänd webbplats","background.icon.safe":"{0} – webbplatsen är säker","background.icon.bad":"{0} – webbplatsen kan vara opålitlig","background.icon.unsafe":"{0} – webbplatsen är osäker","security.title":"Säkerhet","security.safe.title":"Webbplatsen är säker","security.safe.item1.desc":"Inget nätfiske","security.safe.item1.tooltip":"Vi har inte upptäckt några försök att stjäla känslig information som lösenord, kreditkortsnummer etc. på denna webbplats.","security.safe.item2.desc":"Ingen skadlig kod","security.safe.item2.tooltip":"Vi har inte upptäckt någon skadlig kod på den här webbplatsen.","security.safe.item3.desc":"Betrodd","security.safe.item3.tooltip":"{0} användare har angett att denna webbplats är tillförlitlig genom att klicka på {1} i {0} Online Security.","security.bad.title":"Webbplatsen kan vara opålitlig","security.bad.desc":"Vi hittade inget nätfiske eller skadlig kod här, men många användaren har gett webbplatsen tummen ner.","security.unknown.title":"Okänd webbplats","security.unknown.desc":"Vi har inte tillräckligt med information att ranka webbplatsen ännu.","security.unsafe.title":"Webbplatsen är osäker","security.unsafe.phishing.desc":"Webbplatsen har markerats som en nätfiskewebbplats. Nätfiske är ett försök att stjäla känslig information från dig, som t.ex. lösenord eller kreditkortsnummer.","security.unsafe.malware.desc":"Vi har upptäckt skadlig kod på webbplatsen som kan skada din dator eller stjäla din privata information.","rating.question.desc":"Litar du på {0}?","rating.negative":"Finns det något olämpligt innehåll på webbplatsen? (valfritt)","rating.thanks":"Tack för ditt betyg!","rating.trusted.desc":"Du <i>litar på</i> {0}","rating.untrusted.desc":"Du <i>litar inte på</i> {0}","rating.revert.tooltip":"Klicka här om du till ta bort betyget","rating.tooltip":"Ditt förtroende eller din misstro räknas in i vårt säkerhetsbetyg för webbplatsen.","rating.category.pornography":"Pornografi","rating.category.violence":"Vapen/våld","rating.category.gambling":"Hasardspel","rating.category.drugs":"Alkohol/droger","rating.category.illegal":"Piratprogram/illegalt","rating.category.others":"Annat","privacy.title":"Integritet","privacy.group.Social.desc":"Sociala nätverk","privacy.group.Social.block.desc":"Blockera all spårning av sociala nätverk","privacy.group.Social.block.tooltip":"Detta blockerar spårning av sociala nätverk på varje webbplats du besöker.","privacy.group.Social.unblock.desc":"Avblockera all spårning av sociala nätverk","privacy.group.Social.unblock.tooltip":"Detta tillåter spårning av sociala nätverk på varje webbplats du besöker.","privacy.group.AdTracking.desc":"Reklamspårning","privacy.group.AdTracking.block.desc":"Blockera all reklamspårning","privacy.group.AdTracking.block.tooltip":"Detta blockerar reklamspårning på varje webbplats du besöker.","privacy.group.AdTracking.unblock.desc":"Avblockera all reklamspårning","privacy.group.AdTracking.unblock.tooltip":"Detta tillåter reklamspårning på varje webbplats du besöker.","privacy.group.WebAnalytics.desc":"Webbanalys","privacy.group.WebAnalytics.block.desc":"Blockera all webbanalysspårning","privacy.group.WebAnalytics.block.tooltip":"Detta blockerar webbanalysspårning på varje webbplats du besöker.","privacy.group.WebAnalytics.unblock.desc":"Avblockera all webbanalysspårning","privacy.group.WebAnalytics.unblock.tooltip":"Detta tillåter annan spårning på varje webbplats du besöker.","privacy.group.Others.desc":"Övrigt","privacy.group.Others.block.desc":"Blockera all annan spårning","privacy.group.Others.block.tooltip":"Detta blockerar annan spårning på varje webbplats du besöker.","privacy.group.Others.unblock.desc":"Avblockera all annan spårning","privacy.trackersBlockedAll":"<i>Alla {0} spårare</i> blockerades på {1} | <i>Alla {0} spårare</i> blockerades på {1}","privacy.trackersBlockedSome":"<i>{0} av {1} spårare</i> blockerades på {2} | <i>{0} av {1} spårare</i> blockerades på {2}","privacy.trackersBlockedNone":"<i>{0} spårningssystem</i> på {1} | <i>{0} spårningssystem</i> på {1}","privacy.trackersBlocked":"{0} av {1} blockerades","privacy.trackersFound":"{0} hittades","privacy.trackersNone":"ingenting","privacy.trackerBlock.desc":"Blockera","privacy.trackerBlock.tooltip":"Detta blockerar [{0}] på varje webbplats du besöker.","privacy.trackerUnblock.desc":"Blockerad","privacy.trackerUnblock.tooltip":"Detta avblockerar [{0}] på varje webbplats du besöker.","privacy.trackerUnblockOnAutoBlock.tooltip":"Om du vill avblockera en specifik spårare inaktiverar du automatisk blockering.","privacy.automaticBlocking.desc":"Blockera alla spårare automatiskt","privacy.automaticBlocking.tooltip":"Alla hittade spårare blockeras automatiskt på varje webbplats du besöker.","setting.title":"Inställningar","setting.serp.name":"Markera mina sökresultat","setting.serp.desc":"Lägg till färgade ikoner i sökresultatet i Google, Yahoo! etc. så att du kan se vilka resultat som är säkra att klicka på. (Grön = säker, grå = okänd, röd = osäker)","setting.serpPopup.name":"Visa verktygstips för sökresultat","setting.serpPopup.desc":"Håll muspekaren över ikonerna om du vill visa mer information.","setting.secureBrowser.Avast.name":"Secure Browser","setting.secureBrowser.Avast.desc":"Växla till bankläge för banksidor (Avast Antivirus och Avast Secure Browser måste vara installerade)","setting.secureBrowser.AVG.name":"Secure Browser","setting.secureBrowser.AVG.desc":"Växla till Bankläge för känsliga banksidor (kräver installation av AVG Antivirus och AVG Secure Browser)","setting.dntBadge.name":"Visa totalt antal spårare på en webbplats","setting.dntBadge.desc":"Lägg till en bricka i webbläsaren om du genast vill kunna se hur många spårare det finns på en webbplats.","setting.dntAutoBlock.name":"Blockera alla spårare automatiskt","setting.dntAutoBlock.desc":"Blockera alla hittade spårare på varje webbplats du besöker.","setting.dntSocial.desc":"Blockera alla spårare för sociala nätverk","setting.dntAdTracking.desc":"Blockera alla reklamspårare","setting.dntWebAnalytics.desc":"Blockera alla webbanalysspårare","setting.dntOthers.desc":"Blockera alla andra spårare","setting.productAnalysis.name":"Tillåt analys av produktprestanda och användning för ny produktutveckling","setting.productAnalysis.tooltip":"Vi samlar in och skickar användardata för tillägget, intern tilläggsidentifierare, webbläsartyp och version, operativsystem, land, språk och status för Avast antivirus-app till våra servrar.","setting.urlConsent.name":"Samtycke till att hämta URL","serp.safe.desc":"Webbplatsen är säker","serp.bad.desc":"Webbplatsen kan vara opålitlig","serp.unknown.desc":"Webbplatsen har ingen bedömning ännu","serp.unsafe.desc":"Webbplatsen är osäker","topbar.openBankMode":"Öppna i bankläge","topbar.desc":"Finansiell information kan visas för andra.","topbar.tooltip":"Bankläge är en del av Avast Secure Browser som installeras med Avasts antivirusprogram som säkert isolerar shopping- och banksessioner för att stoppa hackare som vill stjäla ditt kreditkortsnummer, lösenord och annan privat information.","topbar.dontShowAgain":"Visa inte på den här webbplatsen igen","installPage.consent.title":"Tillåter du att vi skyddar dig genom att skanna webbadresser?","installPage.consent.desc":"När du godkänner tittar vi på adresserna på webbplatserna du besöker så att vi kan berätta om webbplatserna är säkra. (Se vår {URL_START}sekretesspolicy{URL_END})","installPage.agreed.title":"Tack!","installPage.agreed.desc":"Nu skyddar vi dig mot osäkra webbplatser.","installPage.disagreed.title":"Ingen fara","installPage.disagreed.desc":"Om du inte vill att vi skannar dina webbadresser avinstallerar du bara {0} Online Security. Skydda dig där ute!","installPage.consent.disagree":"Nej tack","installPage.consent.agree":"Ja, skanna webbadresser","panel.consent.agree":"Skanna webbadresser"},"tr":{"AVG.title":"Online Security","Avast.title":"Avast Online Security","global.beta":"Beta","global.detailsShow":"Ayrıntılar","global.detailsHide":"Ayrıntıları gizle","global.done":"Tamamlandı","global.leaveSite":"Siteden ayrıl","global.switcher.off":"OFF","global.switcher.on":"ON","global.close":"Kapat","global.back":"Geri","background.icon.unknown":"{0} - Bilinmeyen site","background.icon.safe":"{0} - Bu web sitesi güvenli","background.icon.bad":"{0} - Bu site güvenilir olmayabilir","background.icon.unsafe":"{0} - Bu web sitesi güvenli değil","security.title":"Güvenlik","security.safe.title":"Bu web sitesi güvenli","security.safe.item1.desc":"Kimlik avı yok","security.safe.item1.tooltip":"Bu web sitesinde parola, kredi kartı bilgileri gibi hassas bilgileri çalma girişimi tespit etmedik.","security.safe.item2.desc":"Kötü amaçlı yazılım yok","security.safe.item2.tooltip":"Bu web sitesinde hiçbir kötü amaçlı kod tespit etmedik.","security.safe.item3.desc":"Güvenilir","security.safe.item3.tooltip":"{0} kullanıcı, {0} Online Security\'deki {1} seçeneğine tıklayarak bu web sitesini güvenilir olarak değerlendirdi.","security.bad.title":"Güvenilir olmayabilir","security.bad.desc":"Burada herhangi bir kimlik avı tehdidi veya kötü amaçlı yazılım tespit etmedik, ancak birçok kullanıcımız bu siteyi olumsuz olarak değerlendirdi.","security.unknown.title":"Bilinmeyen site","security.unknown.desc":"Bu web sitesini değerlendirmek için henüz yeterli bilgimiz yok.","security.unsafe.title":"Bu web sitesi güvenli değil","security.unsafe.phishing.desc":"Bu web sitesi kimlik avı sitesi olarak işaretlenmiş. Kimlik avı parola, kredi kartı numaraları gibi hassas bilgilerinizi çalmak için yapılan bir girişimdir.","security.unsafe.malware.desc":"Bu web sitesinde bilgisayarınıza zarar verebilecek veya gizli bilgilerinizi çalabilecek kötü amaçlı kod tespit ettik.","rating.question.desc":"{0} sitesine güveniyor musunuz?","rating.negative":"Bu web sitesinde uygunsuz içerikler var mı? (İsteğe bağlı)","rating.thanks":"Değerlendirmeniz için teşekkürler!","rating.trusted.desc":"{0} sitesine <i>güveniyorsunuz</i>","rating.untrusted.desc":"{0} sitesine <i>güvenmiyorsunuz</i>","rating.revert.tooltip":"Değerlendirmenizi kaldırmak için tıklayın","rating.tooltip":"Güvenli veya güvenli değil şeklindeki değerlendirmeniz bu web sitesi için yaptığımız güvenlik değerlendirmesini etkileyecek.","rating.category.pornography":"Pornografi","rating.category.violence":"Silah / Şiddet","rating.category.gambling":"Kumar","rating.category.drugs":"Alkol / Uyuşturucu","rating.category.illegal":"Warez / Yasa Dışı","rating.category.others":"Diğerler","privacy.title":"Gizlilik","privacy.group.Social.desc":"Sosyal ağlar","privacy.group.Social.block.desc":"Tüm sosyal ağ izlemelerini engelle","privacy.group.Social.block.tooltip":"Bu işlem ziyaret ettiğiniz tüm web sitelerinde sosyal ağ izlemesini engelleyecek.","privacy.group.Social.unblock.desc":"Tüm sosyal ağ izlemelerinin engelini kaldır","privacy.group.Social.unblock.tooltip":"Bu işlem ziyaret ettiğiniz tüm web sitelerinde sosyal ağ izlemesine izin verecek.","privacy.group.AdTracking.desc":"Reklam İzleme","privacy.group.AdTracking.block.desc":"Tüm reklam izlemelerini engelle","privacy.group.AdTracking.block.tooltip":"Bu işlem ziyaret ettiğiniz tüm web sitelerinde reklam izlemeyi engelleyecek.","privacy.group.AdTracking.unblock.desc":"Tüm reklam izlemelerinin engelini kaldır","privacy.group.AdTracking.unblock.tooltip":"Bu işlem ziyaret ettiğiniz tüm web sitelerinde reklam izlemeye izin verecek.","privacy.group.WebAnalytics.desc":"Web Analizi","privacy.group.WebAnalytics.block.desc":"Tüm web analizi izlemelerini engelle","privacy.group.WebAnalytics.block.tooltip":"Bu işlem ziyaret ettiğiniz tüm web sitelerinde web analizi izlemesini engelleyecek.","privacy.group.WebAnalytics.unblock.desc":"Tüm web analizi izlemelerinin engelini kaldır","privacy.group.WebAnalytics.unblock.tooltip":"Ziyaret ettiğiniz diğer web sitelerinde de izlenmenize neden olacak.","privacy.group.Others.desc":"Diğerleri","privacy.group.Others.block.desc":"Diğer tüm izlemeleri engelle","privacy.group.Others.block.tooltip":"Bu işlem ziyaret ettiğiniz tüm web sitelerinde izlemeleri engelleyecek.","privacy.group.Others.unblock.desc":"Diğer tüm izlemelerin engelini kaldır","privacy.trackersBlockedAll":"{1} sitesindeki <i>{0} izleyicinin tümü</i> engellendi | {1} sitesindeki <i>{0} izleyicinin tümü</i> engellendi","privacy.trackersBlockedSome":"{2} sitesindeki <i>{0} / {1} izleyici</i> engellendi | <i>{0} / {1} izleyici</i> {2} sitesinde engellendi","privacy.trackersBlockedNone":"{1} sitesinde <i>{0} izleme</i> sistemi bulunuyor | {1} sitesinde <i>{0} izleme</i> sistemi bulunuyor","privacy.trackersBlocked":"{0} / {1} engellendi","privacy.trackersFound":"{0} tespit edildi","privacy.trackersNone":"Yok","privacy.trackerBlock.desc":"Engelle","privacy.trackerBlock.tooltip":"Bu işlem [{0}] isimli izleyiciyi ziyaret ettiğiniz tüm web sitelerinde engelleyecek.","privacy.trackerUnblock.desc":"Engellendi","privacy.trackerUnblock.tooltip":"Bu işlem [{0}] adlı izleyicinin ziyaret ettiğiniz tüm web sitelerindeki engelini kaldıracak.","privacy.trackerUnblockOnAutoBlock.tooltip":"Belirli bir izleyicinin engelini kaldırmak için otomatik engellemeyi kapatın.","privacy.automaticBlocking.desc":"Tüm izleyicileri otomatik olarak engelle","privacy.automaticBlocking.tooltip":"Ziyaret ettiğiniz web sitelerinde tespit edilen tüm izleyicileri otomatik olarak engelleyeceğiz.","setting.title":"Ayarlar","setting.serp.name":"Arama sonuçlarımı işaretle","setting.serp.desc":"Hangi sonuçlara güvenli bir şekilde tıklanabileceğini görmek için Google ve Yahoo! gibi platformlardaki arama sonuçlarınıza renkli simgeler ekleyin. (Yeşil: Güvenli, Gri: Bilinmiyor, Kırmızı: Güvenli Değil)","setting.serpPopup.name":"Arama sonuçları için araç ipuçlarını göster","setting.serpPopup.desc":"Daha fazla bilgi edinmek için fareyi simgelerimizin üzerine götürün.","setting.secureBrowser.Avast.name":"Secure Browser","setting.secureBrowser.Avast.desc":"Hassas bilgiler içeren finans siteleri için Banka Modu\'na geç (Avast Antivirus ve Avast Secure Browser\'ın yüklü olması gerekir)","setting.secureBrowser.AVG.name":"Secure Browser","setting.secureBrowser.AVG.desc":"Hassas bilgiler içeren finans siteleri için Banka Modu\'na geç (AVG AntiVirus ve AVG Secure Browser\'ın yüklü olması gerekir)","setting.dntBadge.name":"Bir sitedeki toplam izleyiciyi göster","setting.dntBadge.desc":"Web sitesinde kaç izleyici bulunduğunu hemen görmek için tarayıcınıza bir rozet ekleyin.","setting.dntAutoBlock.name":"Tüm izleyicileri otomatik olarak engelle","setting.dntAutoBlock.desc":"Bu işlem ziyaret ettiğiniz tüm web sitelerinde tespit edilen tüm izleyicileri engelleyecek.","setting.dntSocial.desc":"Tüm sosyal ağ izleyicilerini engelle","setting.dntAdTracking.desc":"Tüm reklam izleyicilerini engelle","setting.dntWebAnalytics.desc":"Tüm web analizi izleyicilerini engelle","setting.dntOthers.desc":"Diğer tüm izleyicileri engelle","setting.productAnalysis.name":"Yeni ürün geliştirmek amacıyla ürün performansının ve kullanımının analiz edilmesine izin ver","setting.productAnalysis.tooltip":"Uzantının kullanım verileri, dâhilî uzantı tanımlayıcısı, tarayıcı türü ve sürümü, işletim sistemi, ülke, dil, Avast antivirüs uygulamasının durum bilgisini toplar ve sunucularımıza göndeririz.","setting.urlConsent.name":"URL toplanmasına onay ver","serp.safe.desc":"Bu web sitesi güvenli","serp.bad.desc":"Bu site güvenilir olmayabilir","serp.unknown.desc":"Bu site değerlendirilmiş değil","serp.unsafe.desc":"Bu site güvenli değil","topbar.openBankMode":"Banka modunda aç","topbar.desc":"Finansal verileriniz başkaları tarafından görülebilir.","topbar.tooltip":"Avast antivirüs ürününüzle yüklenen Avast Secure Browser\'ın bir parçası olan Banka Modu bilgisayar korsanlarının kredi kartı numaralarınızı, parolalarınızı ve diğer kişisel verilerinizi çalmasını engellemek için alışveriş ve bankacılık oturumlarını güvenli bir şekilde izole eder.","topbar.dontShowAgain":"Bu sitede bir daha gösterme","installPage.consent.title":"Web adreslerinizi tarayarak size koruma sağlamamıza izin veriyor musunuz?","installPage.consent.desc":"Kabul ederseniz, hangi web sitelerinin güvenliği olduğunu size bildirebilmek için ziyaret ettiğiniz web sitelerinin adreslerini inceleyeceğiz. ({URL_START}Gizlilik Politikası{URL_END} koşullarımıza göz atın)","installPage.agreed.title":"Teşekkürler!","installPage.agreed.desc":"Sizi şu anda güvenli olmayan web sitelerine karşı koruyoruz.","installPage.disagreed.title":"Bizi yanlış anlamayın","installPage.disagreed.desc":"Web adreslerinizi taramamızı istemiyorsanız {0} Online Security\'yi kaldırmanız yeterlidir. Güvende olmanız dileğiyle!","installPage.consent.disagree":"Hayır, teşekkürler","installPage.consent.agree":"Evet, web adreslerini tara","panel.consent.agree":"Web adreslerini tara"},"uk":{"AVG.title":"Online Security","Avast.title":"Avast Online Security","global.beta":"Бета-версія","global.detailsShow":"Докладніше","global.detailsHide":"Сховати деталі","global.done":"Готово","global.leaveSite":"Закрити веб-сайт","global.switcher.off":"ВМК","global.switcher.on":"УВ.","global.close":"Закрити","global.back":"Назад","background.icon.unknown":"{0}: невідомий веб-сайт","background.icon.safe":"{0}: цей веб-сайт безпечний","background.icon.bad":"{0}: цей веб-сайт може бути ненадійним","background.icon.unsafe":"{0}: цей веб-сайт ненадійний","security.title":"Безпека","security.safe.title":"Цей веб-сайт безпечний.","security.safe.item1.desc":"Немає загрози фішингу","security.safe.item1.tooltip":"На цьому веб-сайті не виявлено жодних спроб викрадення конфіденційної інформації, зокрема паролів, номерів кредитних карток тощо.","security.safe.item2.desc":"Немає шкідливих програм","security.safe.item2.tooltip":"На цьому веб-сайті не виявлено шкідливого коду.","security.safe.item3.desc":"Надійний","security.safe.item3.tooltip":"Користувачі програми {0} оцінили цей сайт як надійний, натиснувши піктограму {1} у програмі {0} Online Security.","security.bad.title":"Цей сайт може бути ненадійним.","security.bad.desc":"Тут не виявлено жодних фішингових загроз або шкідливих програм, однак багато наших користувачів негативно оцінили цей веб-сайт.","security.unknown.title":"Невідомий веб-сайт","security.unknown.desc":"У нас недостатньо інформації, щоб оцінити цей веб-сайт.","security.unsafe.title":"Цей веб-сайт небезпечний.","security.unsafe.phishing.desc":"Цей веб-сайт позначено як фішинговий. Фішинг — це спроба викрасти конфіденційну інформацію, як-от паролі, номери кредитних карток тощо.","security.unsafe.malware.desc":"На цьому веб-сайті виявлено шкідливий код, який може зашкодити вашому комп’ютеру або викрасти ваші конфіденційні дані.","rating.question.desc":"Ви довіряєте веб-сайту {0}?","rating.negative":"Чи містить цей веб-сайт будь-який неприйнятний вміст? (необов’язково)","rating.thanks":"Дякуємо за оцінку!","rating.trusted.desc":"Ви <i>довіряєте</i> веб-сайту {0}.","rating.untrusted.desc":"Ви <i>не довіряєте </i> веб-сайту {0}.","rating.revert.tooltip":"Натисніть, щоб видалити оцінку.","rating.tooltip":"Ваша довіра або недовіра буде врахована в нашому рейтингу безпеки цього сайту.","rating.category.pornography":"Порнографія","rating.category.violence":"Зброя та насильство","rating.category.gambling":"Азартні ігри","rating.category.drugs":"Алкоголь і наркотики","rating.category.illegal":"Викрадене ПЗ та інші порушення закону","rating.category.others":"Інше","privacy.title":"Конфіденційність","privacy.group.Social.desc":"Соціальні мережі","privacy.group.Social.block.desc":"Блокувати все відстежування соціальними мережами","privacy.group.Social.block.tooltip":"Так можна заблокувати відстежування соціальними мережами на всіх відвідуваних веб-сайтах.","privacy.group.Social.unblock.desc":"Розблокувати все відстежування соціальними мережами","privacy.group.Social.unblock.tooltip":"Так можна розблокувати відстежування соціальними мережами на всіх відвідуваних веб-сайтах.","privacy.group.AdTracking.desc":"Відстежування рекламними службами","privacy.group.AdTracking.block.desc":"Заблокувати все відстежування рекламними службами","privacy.group.AdTracking.block.tooltip":"Так можна заблокувати відстежування рекламними службами на всіх відвідуваних веб-сайтах.","privacy.group.AdTracking.unblock.desc":"Розблокувати все відстежування рекламними службами","privacy.group.AdTracking.unblock.tooltip":"Так можна розблокувати відстежування рекламними службами на всіх відвідуваних веб-сайтах.","privacy.group.WebAnalytics.desc":"Веб-аналітика","privacy.group.WebAnalytics.block.desc":"Заблокувати все відстежування службами веб-аналітики","privacy.group.WebAnalytics.block.tooltip":"Так можна заблокувати відстежування службами веб-аналітики на всіх відвідуваних веб-сайтах.","privacy.group.WebAnalytics.unblock.desc":"Розблокувати все відстежування службами веб-аналітики","privacy.group.WebAnalytics.unblock.tooltip":"Так можна розблокувати інше відстежування на всіх відвідуваних веб-сайтах.","privacy.group.Others.desc":"Інше","privacy.group.Others.block.desc":"Заблокувати все інше відстежування","privacy.group.Others.block.tooltip":"Так можна заблокувати інше відстежування на всіх відвідуваних веб-сайтах.","privacy.group.Others.unblock.desc":"Розблокувати все інше відстежування","privacy.trackersBlockedAll":"На сайті {1} заблоковано <i>єдиний {0} засіб відстежування</i>. | На сайті {1} заблоковано <i>всі {0} засоби відстежування</i>. | На сайті {1} заблоковано <i>всі {0} засобів відстежування</i>. | На сайті {1} заблоковано <i>всі {0} засобу відстежування</i>.","privacy.trackersBlockedSome":"На сайті {2} заблоковано <i>засоби відстежування: {0} з {1}</i>. | На сайті {2} заблоковано <i>засоби відстежування: {0} з {1}</i>. | На сайті {2} заблоковано <i>засоби відстежування: {0} з {1}</i>. | На сайті {2} заблоковано <i>засоби відстежування: {0} з {1}</i>.","privacy.trackersBlockedNone":"<i>{0} система відстежування</i> на сайті {1} | <i>{0} системи відстежування</i> на сайті {1} | <i>{0} систем відстежування</i> на сайті {1} | <i>{0} системи відстежування</i> на сайті {1}","privacy.trackersBlocked":"Заблоковано {0} з {1}","privacy.trackersFound":"Знайдено {0}","privacy.trackersNone":"немає","privacy.trackerBlock.desc":"Заблокувати","privacy.trackerBlock.tooltip":"Так можна заблокувати [{0}] на всіх сайтах, які ви відвідуєте.","privacy.trackerUnblock.desc":"Заблоковано","privacy.trackerUnblock.tooltip":"Так можна розблокувати [{0}] на всіх сайтах, які ви відвідуєте.","privacy.trackerUnblockOnAutoBlock.tooltip":"Щоб розблокувати окремий засіб відстежування, вимкніть автоматичне блокування.","privacy.automaticBlocking.desc":"Автоматично блокувати всі засоби відстежування","privacy.automaticBlocking.tooltip":"Ми автоматично блокуватимемо всі виявлені засоби відстежування на всіх сайтах, які ви відвідуєте.","setting.title":"Налаштування","setting.serp.name":"Позначати результати пошуку","setting.serp.desc":"Додавання кольорових піктограм до результатів пошуку в Google, Yahoo! тощо, щоб бачити, які результати безпечні (зелений — безпечно, сірий — невідомо, червоний — небезпечно)","setting.serpPopup.name":"Показувати підказки для результатів пошуку","setting.serpPopup.desc":"Наведіть мишу на піктограму, щоб отримати докладніші відомості.","setting.secureBrowser.Avast.name":"Secure Browser","setting.secureBrowser.Avast.desc":"Переходити в режим банкінгу в разі відкривання сайтів із конфіденційною фінансовою інформацією (має бути встановлено антивірус Avast і браузер Avast Secure Browser)","setting.secureBrowser.AVG.name":"Secure Browser","setting.secureBrowser.AVG.desc":"Переходити в режим банкінгу в разі відкривання сайтів із конфіденційною фінансовою інформацією (має бути встановлено AVG AntiVirus і Avast Secure Browser)","setting.dntBadge.name":"Показувати кількість засобів відстежування на сайті","setting.dntBadge.desc":"Додавання в браузер значка, щоб одразу бачити, скільки засобів відстежування на будь-якому сайті","setting.dntAutoBlock.name":"Автоматично блокувати всі засоби відстежування","setting.dntAutoBlock.desc":"Блокування всіх виявлених засобів відстежування на всіх сайтах, які ви відвідуєте","setting.dntSocial.desc":"Блокувати всі засоби відстежування соціальних мереж","setting.dntAdTracking.desc":"Блокувати всі рекламні засоби відстежування","setting.dntWebAnalytics.desc":"Блокувати всі засоби відстежування служб веб-аналітики","setting.dntOthers.desc":"Блокувати всі інші засоби відстежування","setting.productAnalysis.name":"Дозволити аналіз продуктивності й використання продукту для розробки нових продуктів","setting.productAnalysis.tooltip":"Ми збираємо та надсилаємо на наші сервери дані про використання розширення, внутрішній ідентифікатор розширення, тип і версію браузера, операційну систему, країну, мову та статус антивіруса Avast.","setting.urlConsent.name":"Згода на збирання URL-адрес","serp.safe.desc":"Цей веб-сайт безпечний.","serp.bad.desc":"Цей сайт може бути ненадійним","serp.unknown.desc":"Цей сайт не має оцінки.","serp.unsafe.desc":"Цей сайт небезпечний.","topbar.openBankMode":"Відкрити в режимі банкінгу","topbar.desc":"Інші можуть бачити ваші фінансові дані.","topbar.tooltip":"Режим банкінгу, частина браузера Avast Secure Browser, установленого разом з антивірусом Avast, безпечно ізолює сеанси покупок і банківських операцій, не даючи хакерам змоги викрасти ваші паролі, номери кредитних карток та інші конфіденційні дані.","topbar.dontShowAgain":"Більше не показувати на цьому сайті","installPage.consent.title":"Дозволити захист за допомогою сканування веб-адрес?","installPage.consent.desc":"У разі згоди ми переглядатимемо адреси веб-сайтів, які ви відвідуєте, щоб повідомляти про рівень їх безпеки. (Див. нашу {URL_START}Політику конфіденційності{URL_END}.)","installPage.agreed.title":"Дякуємо!","installPage.agreed.desc":"Тепер ви захищені від небезпечних веб-сайтів.","installPage.disagreed.title":"Без образ","installPage.disagreed.desc":"Якщо не потрібно сканувати веб-адреси, просто видаліть {0} Online Security. Бережіть себе!","installPage.consent.disagree":"Ні, дякую","installPage.consent.agree":"Так, сканувати веб-адреси","panel.consent.agree":"Сканувати веб-адреси"},"ur":{"AVG.title":"آن لائن سیکورٹی","Avast.title":"Avast Online Security","global.beta":"بیٹا","global.detailsShow":"تفصیلات","global.detailsHide":"تفصیلات چھپائیں","global.done":"ہو گیا","global.leaveSite":"سائٹ چھوڑ دیں","global.switcher.off":"آف","global.switcher.on":"آن","global.close":"بند کريں","global.back":"پيچھے","background.icon.unknown":"{0} - نامعلوم سائٹ","background.icon.safe":"{0} - یہ ویب سائٹ محفوظ ہے۔","background.icon.bad":"{0} - یہ سائٹ غیر معتبر ہو سکتی ہے","background.icon.unsafe":"{0} - یہ ویب سائٹ غیر محفوظ ہے۔","security.title":"سیکورٹی","security.safe.title":"- یہ ویب سائٹ محفوظ ہے۔","security.safe.item1.desc":"کوئی جعل سازی نہیں","security.safe.item1.tooltip":"ہم نے اس ویب سائٹ پر پاس ورڈ، کریڈٹ کارڈ نمبر، وغیرہ جیسی حساس معلومات کی چوری کرنے کی کسی کوششوں کا پتہ نہیں لگایا ہے۔","security.safe.item2.desc":"کوئی مل ویئر نہیں","security.safe.item2.tooltip":"ہم نے اس ویب سائٹ پر کسی مضر کوڈ کا پتہ نہیں لگایا ہے۔","security.safe.item3.desc":"قابل اعتماد","security.safe.item3.tooltip":"{0} آن لائن سیکورٹی کے اندر {1} کلک کرکے {0} صارفین نے اس ویب سائٹ کی درجہ بندی معتبر کے طور پر کی ہے۔","security.bad.title":"یہ غیر معتبر ہو سکتی ہے","security.bad.desc":"ہمیں یہاں کوئی جعل سازی کے خطرے یا مل ویئر نہیں ملے تھے، لیکن ہمارے بہت سے صارفین نے سائٹ کو پسند نہیں کیا ہے۔","security.unknown.title":"نامعلوم سائٹ","security.unknown.desc":"اس ویب سئٹ کو ریٹ کرنے کے لیے ہمارے پاس اب تک کافی معلومات نہیں ہیں۔","security.unsafe.title":"یہ ویب سائٹ غیر محفوظ ہے","security.unsafe.phishing.desc":"یہ ویب سائٹ ایک جعل سازی کی سائٹ کے طور پر نشان زد کی گئی ہے۔ جعل سازی آپ سے پاس ورڈ، کریڈٹ کارڈ نمبر، وغیرہ جیسی حساس معلومات چرانے کی ایک کوشش ہے۔","security.unsafe.malware.desc":"ہمیں اس ویب سائٹ پر مضر کوڈ ملے ہیں جو آپ کے کمپیوٹر کو نقصان پہنچا سکتے یا آپ کا نجی ڈیٹا چوری کر سکتے ہیں۔","rating.question.desc":"کیا آپ {0} پر اعتماد کرتے ہیں؟","rating.negative":"اس ویب سائٹ پر کوئی نامناسب مواد؟ (اختیاری)","rating.thanks":"آپ کی ریٹنگ کے لیے شکریہ!","rating.trusted.desc":"آپ {0} پر <i>اعتماد</i> کرتے ہیں","rating.untrusted.desc":"آپ {0} پر <i>اعتماد</i> نہیں کرتے ہیں","rating.revert.tooltip":"اپنی ریٹنگ ہٹانے کے لیے کلک کریں","rating.tooltip":"اس ویب سائٹ کے لیے ہماری حفاظتی ریٹنگ میں آپ کے اعتماد یا بے اعتمادی کو مدنظر رکھا جائے گا۔","rating.category.pornography":"فحش نگارى","rating.category.violence":"ہتھیار / تشدد","rating.category.gambling":"جوا","rating.category.drugs":"شراب / منشيات","rating.category.illegal":"وعریض / غير قانونى","rating.category.others":"دیگر","privacy.title":"رازداری","privacy.group.Social.desc":"سوشل نیٹ ورکس","privacy.group.Social.block.desc":"تمام سوشل نیٹ ورک ٹریکنگ بلاک کریں","privacy.group.Social.block.tooltip":"یہ ہر ویب سائٹ کی سوشل نیٹ ورک ٹریکنگ کو بلاک کر دے گا جس پر آپ جاتے ہیں۔","privacy.group.Social.unblock.desc":"تمام سوشل نیٹ ورک ٹریکنگ کو ان بلاک کریں","privacy.group.Social.unblock.tooltip":"یہ ہر ویب سائٹ کی سوشل نیٹ ورک ٹریکنگ کی اجازت دے گا جس پر آپ جاتے ہیں۔","privacy.group.AdTracking.desc":"اشتہارات ٹریکنگ","privacy.group.AdTracking.block.desc":"تمام اشتہار ٹریکنگ بلاک کریں","privacy.group.AdTracking.block.tooltip":"یہ ہر ویب سائٹ کی اشتہار ٹریکنگ کو بلاک کر دے گا جس پر آپ جاتے ہیں۔","privacy.group.AdTracking.unblock.desc":"تمام اشتہار ٹریکنگ کو ان بلاک کریں","privacy.group.AdTracking.unblock.tooltip":"یہ ہر ویب سائٹ کی اشتہار ٹریکنگ کی اجازت دے گا جس پر آپ جاتے ہیں۔","privacy.group.WebAnalytics.desc":"ویب تجزیات","privacy.group.WebAnalytics.block.desc":"تمام ویب تجزیاتی ٹریکنگ بلاک کریں","privacy.group.WebAnalytics.block.tooltip":"یہ ہر ویب سائٹ کی ویب تجزیاتی ٹریکنگ کو بلاک کر دے گا جس پر آپ جاتے ہیں۔","privacy.group.WebAnalytics.unblock.desc":"تمام ویب تجزیاتی ٹریکنگ ان بلاک کریں","privacy.group.WebAnalytics.unblock.tooltip":"یہ ہر ویب سائٹ کی دیگر ٹریکنگ کی اجازت دے گا جس پر آپ جاتے ہیں۔","privacy.group.Others.desc":"دیگر","privacy.group.Others.block.desc":"تمام دیگر ٹریکنگ بلاک کریں","privacy.group.Others.block.tooltip":"یہ ہر ویب سائٹ کی دیگر ٹریکنگ کو بلاک کر دے گا جس پر آپ جاتے ہیں۔","privacy.group.Others.unblock.desc":"تمام دیگر ٹریکنگ ان بلاک کریں","privacy.trackersBlockedAll":"<i>{1} پر سبھی {0} ٹریکر</i> بلاک کر دیے گئے | <i>{1} پر سبھی {0} ٹریکرز</i> بلاک کر دیے گئے","privacy.trackersBlockedSome":"<i>{2} پر {1} میں سے {0} ٹریکر</i> بلاک کر دیا گیا | <i>{2} پر {1} میں سے {0} ٹریکرز</i> بلاک کر دیے گئے","privacy.trackersBlockedNone":"<i>{1} پر {0} ٹریکنگ</i> سسٹم | <i>{1} پر {0} ٹریکنگ</i> سسٹم","privacy.trackersBlocked":"{1} میں سے {0} بلاک کر دیا گیا","privacy.trackersFound":"{0} ملا","privacy.trackersNone":"کچھ بھی نہیں","privacy.trackerBlock.desc":"بلاک کریں","privacy.trackerBlock.tooltip":"یہ ہر ویب سائٹ پر [{0}] کو بلاک کر دے گا جس پر آپ جاتے ہیں۔","privacy.trackerUnblock.desc":"مسدود","privacy.trackerUnblock.tooltip":"یہ ہر ویب سائٹ پر [{0}] کو ان بلاک کر دے گا جس پر آپ جاتے ہیں۔","privacy.trackerUnblockOnAutoBlock.tooltip":"ایک مخصوص ٹریکر کو ان بلاک کرنے کے لیے، خودکار بلاکنگ بند کریں۔","privacy.automaticBlocking.desc":"تمام ٹریکرز کو خودکار طور پر بلاک کریں","privacy.automaticBlocking.tooltip":"ہم ہر ویب سائٹ پر سبھی پائے جانے والے ٹریکرز خودکار طور پر بلاک کر دیں گے جن پر آپ جاتے ہیں۔","setting.title":"سيٹنگز","setting.serp.name":"میری تلاش کے نتائج کو نشان زد کریں","setting.serp.desc":"یہ دیکھنے کے لیے کہ کون سے نتائج کلک کرنے کے لیے محفوظ ہیں، Google، Yahoo!، وغیرہ پر اپنے تلاش نتائج میں رنگین آئیکن شامل کریں۔ (سبز = محفوظ، بھورا = نامعلوم، سرخ = غیر محفوظ)","setting.serpPopup.name":"تلاش کے نتائج کے لیے ٹول مشورے دکھائیں","setting.serpPopup.desc":"مزید معلومات دیکھنے کے لیے ہمارے آئیکن پر ماؤس لے جائیں۔","setting.secureBrowser.Avast.name":"Secure Browser","setting.secureBrowser.Avast.desc":"حساس مالیاتی سائٹس کے لئے بینک موڈ پر سوئچ کریں (Avast اینٹی وائرس اور Avast Secure Browser انسٹال ہونا چاہیے)","setting.secureBrowser.AVG.name":"Secure Browser","setting.secureBrowser.AVG.desc":"حساس مالیاتی سائٹس کے لئے بینک موڈ پر سوئچ کریں (AVG اینٹی وائرس اور AVG Secure Browser انسٹال ہونا چاہیے)","setting.dntBadge.name":"کسی سائٹ پر کل ٹریکرز دیکھیں","setting.dntBadge.desc":"کسی ویب سائٹ پر کتنے ٹریکرز ہیں یہ فوری طور پر دیکھنے کے لیے اپنے براؤزر میں ایک بیج شامل کریں۔","setting.dntAutoBlock.name":"تمام ٹریکرز کو خودکار طور پر بلاک کریں","setting.dntAutoBlock.desc":"ہر ویب سائٹ تمام پائے جانے والے ٹریکرز بلاک کریں جس پر آپ جاتے ہیں۔","setting.dntSocial.desc":"تمام سوشل نیٹ ورک ٹریکرز بلاک کریں","setting.dntAdTracking.desc":"تمام اشتہار ٹریکرز بلاک کریں","setting.dntWebAnalytics.desc":"تمام ویب تجزیاتی ٹریکرز بلاک کریں","setting.dntOthers.desc":"تمام دیگر ٹریکرز بلاک کریں","setting.productAnalysis.name":"پروڈکٹ کی کارکردگی اور نئے پروڈکٹ کی نشوونما کے لئے تجزیہ کی اجازت دیں","setting.productAnalysis.tooltip":"ہم ایکسٹینشن کے استعمال کا ڈیٹا، داخلی ایکسٹینشن شناخت کار، براؤزر کی قسم اور ورژن، آپریٹنگ سسٹم، ملک، زبان، Avast اینٹی وائرس ایپ کی اسٹیٹس جمع کرتے ہیں اور اپنے سرورز پر بھیجتے ہیں۔","setting.urlConsent.name":"URL کے ہارویسٹ کی رضامندی","serp.safe.desc":"یہ ویب سائٹ محفوظ ہے","serp.bad.desc":"یہ سائٹ غیر معتبر ہو سکتی ہے","serp.unknown.desc":"اس ویب سائٹ کى کوئی ریٹنگ نہیں ہے","serp.unsafe.desc":"یہ سائٹ غیر محفوظ ہے","topbar.openBankMode":"بینک موڈ میں کھولیں","topbar.desc":"آپ کا مالیاتی ڈیٹا دوسروں کو دکھائی دے سکتا ہے۔","topbar.tooltip":"آپ کے Avast اینٹی وائرس کے ساتھ انسٹال شدہ Avast محفوظ براؤز کا حصہ، بینک موڈ ہیکرز کو آپ کے کریڈٹ کارڈ نمبرز، پاس ورڈ، اور دیگر ذاتی ڈیٹا کوچرانے سے روکنے کے لیے خریداری اور بینکنگ سیشن کو تحفظ کے ساتھ علیحدہ کرتا ہے۔","topbar.dontShowAgain":"اس سائٹ پر دوبارہ نہ دکھائیں","installPage.consent.title":"ہمیں ویب پتے اسکین کر کے آپ کی حفاظت کرنے کی اجازت دیں؟","installPage.consent.desc":"اگر آپ متفق ہیں، تو ہم آپ کے ذریعہ ملاحظہ کردہ ویب سائٹوں پر نظر ڈالیں گے تاکہ ہم آپ کو بتا سکیں کہ آیا وہ سائٹیں محفوظ ہیں۔ (ہماری {URL_START}رازداری پالیسی{URL_END} دیکھیں)","installPage.agreed.title":"شکریہ!","installPage.agreed.desc":"اب ہم آپ کو غیر محفوظ ویب سائٹوں سے تحفظ فراہم کر رہے ہیں۔","installPage.disagreed.title":"کوئی سخت احساسات نہیں","installPage.disagreed.desc":"اگر آپ نہیں چاہتے کہ ہم آپ کے ویب پتے اسکین کریں، تو بس {0} آن لائن سیکورٹی ان انسٹال کریں - اور وہاں محفوظ رہیں!","installPage.consent.disagree":"جی نہیں شکریہ","installPage.consent.agree":"جی ہاں، ویب پتوں کو اسکین کریں","panel.consent.agree":"ویب پتوں کو اسکین کریں"},"vi":{"AVG.title":"Online Security","Avast.title":"Avast Online Security","global.beta":"Bản beta","global.detailsShow":"Chi tiết","global.detailsHide":"Ẩn chi tiết","global.done":"Xong","global.leaveSite":"Rời khỏi trang","global.switcher.off":"TẮT","global.switcher.on":"BẬT","global.close":"Đóng","global.back":"Quay lại","background.icon.unknown":"{0} - Trang không xác định","background.icon.safe":"{0} - Trang web này an toàn","background.icon.bad":"{0} - Trang web này có thể không đáng tin","background.icon.unsafe":"{0} - Trang web này không an toàn","security.title":"Bảo mật","security.safe.title":"Trang web này an toàn","security.safe.item1.desc":"Không lừa đảo","security.safe.item1.tooltip":"Chúng tôi chưa phát hiện bất cứ nỗ lực đánh cắp thông tin nhạy cảm nào như mật khẩu, số thẻ tín dụng, v. v. trên trang web này.","security.safe.item2.desc":"Không có phần mềm độc hại","security.safe.item2.tooltip":"Chúng tôi chưa phát hiện bất cứ mã độc hại nào trên trang web này.","security.safe.item3.desc":"Đáng tin cậy","security.safe.item3.tooltip":"{0} người dùng đã đánh giá trang web này là đáng tin cậy bằng cách nhấp vào {1} trong {0} Online Security.","security.bad.title":"Trang web này có thể không đáng tin","security.bad.desc":"Chúng tôi không tìm thấy bất cứ mối đe dọa lừa đảo hay phần mềm độc hại nào ở đây nhưng rất nhiều người dùng của chúng tôi không thích trang này.","security.unknown.title":"Trang không xác định","security.unknown.desc":"Chúng tôi chưa có đủ thông tin để xếp hạng trang web này.","security.unsafe.title":"Trang web này không an toàn","security.unsafe.phishing.desc":"Trang web này đã được đánh dấu là trang lừa đảo. Lừa đảo là hành vi tìm cách đánh cắp thông tin nhạy cảm của bạn như mật khẩu, số thẻ tín dụng, v.v.","security.unsafe.malware.desc":"Chúng tôi đã phát hiện mã độc hại trên trang web này, mã này có thể gây hại cho máy tính hoặc đánh cắp dữ liệu riêng tư của bạn.","rating.question.desc":"Bạn có tin tưởng {0} không?","rating.negative":"Có bất cứ nội dung không phù hợp nào trên trang web này không? (tùy chọn)","rating.thanks":"Cảm ơn bạn đã đánh giá!","rating.trusted.desc":"Bạn <i>tin tưởng</i> {0}","rating.untrusted.desc":"Bạn <i>không tin</i> {0}","rating.revert.tooltip":"Nhấp để xóa đánh giá của bạn","rating.tooltip":"Việc bạn tin hoặc không tin tưởng sẽ được tính vào đánh giá an toàn của chúng tôi cho trang web này.","rating.category.pornography":"Khiêu dâm","rating.category.violence":"Vũ khí / Bạo lực","rating.category.gambling":"Trò cờ bạc","rating.category.drugs":"Rượu / Chất gây nghiện","rating.category.illegal":"Phần mềm lậu / Bất hợp pháp","rating.category.others":"Khác","privacy.title":"Quyền riêng tư","privacy.group.Social.desc":"Mạng xã hội","privacy.group.Social.block.desc":"Chặn mọi hành vi theo dõi mạng xã hội","privacy.group.Social.block.tooltip":"Tính năng này sẽ chặn hành vi theo dõi mạng xã hội trên mọi trang web bạn truy cập.","privacy.group.Social.unblock.desc":"Bỏ chặn mọi hành vi theo dõi mạng xã hội","privacy.group.Social.unblock.tooltip":"Tính năng này sẽ cho phép hành vi theo dõi mạng xã hội trên mọi trang web bạn truy cập.","privacy.group.AdTracking.desc":"Theo dõi quảng cáo","privacy.group.AdTracking.block.desc":"Chặn mọi hành vi theo dõi quảng cáo","privacy.group.AdTracking.block.tooltip":"Tính năng này sẽ chặn hành vi theo dõi quảng cáo trên mọi trang web bạn truy cập.","privacy.group.AdTracking.unblock.desc":"Bỏ chặn hành vi theo dõi quảng cáo","privacy.group.AdTracking.unblock.tooltip":"Tính năng này sẽ cho phép hành vi theo dõi quảng cáo trên mọi trang web bạn truy cập.","privacy.group.WebAnalytics.desc":"Phân tích trang web","privacy.group.WebAnalytics.block.desc":"Chặn mọi hành vi theo dõi phân tích trang web","privacy.group.WebAnalytics.block.tooltip":"Tính năng này sẽ chặn hành vi theo dõi phân tích trang web trên mọi trang web bạn truy cập.","privacy.group.WebAnalytics.unblock.desc":"Bỏ chặn mọi hành vi theo dõi phân tích trang web","privacy.group.WebAnalytics.unblock.tooltip":"Tính năng này sẽ cho phép các hành vi theo dõi khác trên mọi trang web bạn truy cập.","privacy.group.Others.desc":"Khác","privacy.group.Others.block.desc":"Chặn mọi hành vi theo dõi khác","privacy.group.Others.block.tooltip":"Tính năng này sẽ chặn các hành vi theo dõi khác trên mọi trang web bạn truy cập.","privacy.group.Others.unblock.desc":"Bỏ chặn mọi hành vi theo dõi khác","privacy.trackersBlockedAll":"<i>Đã chặn tất cả {0} kẻ theo dõi</i> trên {1}","privacy.trackersBlockedSome":"<i>Đã chặn {0}/{1} kẻ theo dõi</i> trên {2}","privacy.trackersBlockedNone":"<i>{0} đang theo dõi</i> hệ thống trên {1}","privacy.trackersBlocked":"Đã chặn {0}/{1}","privacy.trackersFound":"Đã phát hiện {0}","privacy.trackersNone":"không làm gì","privacy.trackerBlock.desc":"Chặn","privacy.trackerBlock.tooltip":"Tính năng này sẽ chặn [{0}] trên mọi trang web bạn truy cập.","privacy.trackerUnblock.desc":"Đã chặn","privacy.trackerUnblock.tooltip":"Tính năng này sẽ bỏ chặn [{0}] trên mọi trang web bạn truy cập.","privacy.trackerUnblockOnAutoBlock.tooltip":"Để bỏ chặn một kẻ theo dõi cụ thể, hãy tắt tính năng chặn tự động.","privacy.automaticBlocking.desc":"Tự động chặn mọi kẻ theo dõi","privacy.automaticBlocking.tooltip":"Chúng tôi sẽ tự động chặn mọi kẻ theo dõi phát hiện được trên mọi trang web bạn truy cập.","setting.title":"Cài đặt","setting.serp.name":"Đánh dấu kết quả tìm kiếm của tôi","setting.serp.desc":"Thêm biểu tượng màu vào kết quả tìm kiếm của bạn trên Google, Yahoo!, v.v. để xem kết quả nào an toàn khi nhấp. (Màu lục = An toàn, Màu xám = Không xác định, Màu đỏ = Không an toàn)","setting.serpPopup.name":"Hiển thị gợi ý về kết quả tìm kiếm","setting.serpPopup.desc":"Lướt chuột qua các biểu tượng của chúng tôi để xem thêm thông tin.","setting.secureBrowser.Avast.name":"Secure Browser","setting.secureBrowser.Avast.desc":"Chuyển sang Chế độ Ngân hàng đối với các trang web tài chính nhạy cảm (cần cài đặt Avast Antivirus và Avast Secure Browser)","setting.secureBrowser.AVG.name":"Secure Browser","setting.secureBrowser.AVG.desc":"Chuyển sang Chế độ Ngân hàng đối với các trang web tài chính nhạy cảm (cần cài đặt AVG AntiVirus và AVG Secure Browser)","setting.dntBadge.name":"Hiển thị tổng số kẻ theo dõi trên trang","setting.dntBadge.desc":"Thêm huy hiệu vào trình duyệt để xem ngay số lượng kẻ theo dõi trên trang web bất kỳ.","setting.dntAutoBlock.name":"Tự động chặn mọi kẻ theo dõi","setting.dntAutoBlock.desc":"Chặn mọi kẻ theo dõi phát hiện được trên mọi trang web bạn truy cập.","setting.dntSocial.desc":"Chặn mọi kẻ theo dõi mạng xã hội","setting.dntAdTracking.desc":"Chặn mọi kẻ theo dõi quảng cáo","setting.dntWebAnalytics.desc":"Chặn mọi kẻ theo dõi phân tích trang web","setting.dntOthers.desc":"Chặn mọi kẻ theo dõi khác","setting.productAnalysis.name":"Cho phép phân tích hiệu suất và thông tin sử dụng của sản phẩm để phát triển sản phẩm mới","setting.productAnalysis.tooltip":"Chúng tôi thu thập và gửi tới máy chủ của mình dữ liệu về mức sử dụng của phần mở rộng, công cụ nhận dạng phần mở rộng bên trong, loại và phiên bản trình duyệt, hệ điều hành, quốc gia, ngôn ngữ, trạng thái của ứng dụng chống virus Avast.","setting.urlConsent.name":"Đồng ý thu thập URL","serp.safe.desc":"Trang web này an toàn","serp.bad.desc":"Trang web này có thể không đáng tin","serp.unknown.desc":"Trang web này chưa được đánh giá","serp.unsafe.desc":"Trang web này không an toàn","topbar.openBankMode":"Mở trong chế độ ngân hàng","topbar.desc":"Người khác có thể nhìn thấy dữ liệu tài chính của bạn.","topbar.tooltip":"Chế độ Ngân hàng, một phần của Avast Secure Browser được cài đặt với phần mềm chống virus Avast của bạn, giúp cách ly an toàn các phiên mua sắm và giao dịch ngân hàng để ngăn tin tặc đánh cắp số thẻ tín dụng, mật khẩu và các dữ liệu riêng tư khác của bạn.","topbar.dontShowAgain":"Không hiển thị lại trên trang này","installPage.consent.title":"Cho phép chúng tôi bảo vệ bạn bằng cách quét địa chỉ web?","installPage.consent.desc":"Nếu bạn đồng ý, thì chúng tôi sẽ xem xét các địa chỉ trang web bạn truy cập để có thể cho bạn biết liệu những trang web đó có an toàn không. (Xem {URL_START}Chính sách Quyền riêng tư{URL_END} của chúng tôi)","installPage.agreed.title":"Cảm ơn!","installPage.agreed.desc":"Chúng tôi hiện đang bảo vệ bạn khỏi các trang web không an toàn.","installPage.disagreed.title":"Không sao đâu","installPage.disagreed.desc":"Nếu bạn không muốn chúng tôi quét địa chỉ web của bạn, thì chỉ cần gỡ cài đặt {0} Online Security - và hãy giữ an toàn nhé!","installPage.consent.disagree":"Không, cảm ơn","installPage.consent.agree":"Có, hãy quét địa chỉ web","panel.consent.agree":"Quét địa chỉ web"},"zh_CN":{"AVG.title":"Online Security","Avast.title":"Avast Online Security","global.beta":"测试版","global.detailsShow":"详细信息","global.detailsHide":"隐藏详细信息","global.done":"完成","global.leaveSite":"离开网站","global.switcher.off":"关闭","global.switcher.on":"开启","global.close":"关闭","global.back":"返回","background.icon.unknown":"{0} -未知站点","background.icon.safe":"{0} -此网站是安全的","background.icon.bad":"{0} -此网站可能不可信","background.icon.unsafe":"{0} -此网站不安全","security.title":"安全","security.safe.title":"此网站安全","security.safe.item1.desc":"无网络钓鱼","security.safe.item1.tooltip":"在此网站上我们尚未检测到窃取敏感信息的任何企图，比如密码、信用卡号等。","security.safe.item2.desc":"无恶意软件","security.safe.item2.tooltip":"在此网站上我们尚未检测到任何恶意代码。","security.safe.item3.desc":"可信任","security.safe.item3.tooltip":"{0} 用户已通过在 {0} Online Security 内点击 {1} 将此网站评定为可信网站。","security.bad.title":"此网站可能不可信","security.bad.desc":"我们在此网站未发现任何网络钓鱼威胁或恶意软件， 但我们的许多用户对此网站给出差评。","security.unknown.title":"未知站点","security.unknown.desc":"我们没有足够的信息用于评价此网站。","security.unsafe.title":"此网站不安全","security.unsafe.phishing.desc":"此网站已标记为网络钓鱼网站。网络钓鱼指企图窃取您的密码和信用卡之类的敏感信息。","security.unsafe.malware.desc":"我们在此网站上发现可能损害您的计算机或窃取您的私人数据的恶意代码。","rating.question.desc":"您是否信任 {0}？","rating.negative":"此网站上有任何不当内容？（可选）","rating.thanks":"感谢您的评价！","rating.trusted.desc":"您 <i>信任</i> {0}","rating.untrusted.desc":"您 <i>不信任</i> {0}","rating.revert.tooltip":"点击可移除您的评价","rating.tooltip":"您的信任或不信任将作为此网站安全评级的考虑因素","rating.category.pornography":"色情","rating.category.violence":"武器 / 暴力","rating.category.gambling":"赌博","rating.category.drugs":"酒精/ 毒品","rating.category.illegal":"盗版 / 非法","rating.category.others":"其他","privacy.title":"隐私","privacy.group.Social.desc":"社交网络","privacy.group.Social.block.desc":"拦截所有社交网络跟踪","privacy.group.Social.block.tooltip":"这将在您访问的每个网站上拦截社交网络跟踪。","privacy.group.Social.unblock.desc":"取消拦截所有社交网络跟踪","privacy.group.Social.unblock.tooltip":"这将在您访问的每个网站上允许社交网络跟踪。","privacy.group.AdTracking.desc":"广告跟踪","privacy.group.AdTracking.block.desc":"拦截所有广告跟踪","privacy.group.AdTracking.block.tooltip":"这将在您访问的每个网站上拦截广告跟踪。","privacy.group.AdTracking.unblock.desc":"取消拦截所有广告跟踪","privacy.group.AdTracking.unblock.tooltip":"这将在您访问的每个网站上允许广告跟踪。","privacy.group.WebAnalytics.desc":"Web 分析","privacy.group.WebAnalytics.block.desc":"拦截所有 Web 分析跟踪","privacy.group.WebAnalytics.block.tooltip":"这将在您访问的每个网站上拦截 Web 分析跟踪。","privacy.group.WebAnalytics.unblock.desc":"取消拦截所有 Web 分析跟踪","privacy.group.WebAnalytics.unblock.tooltip":"这将在您访问的每个网站上允许其他跟踪。","privacy.group.Others.desc":"其他","privacy.group.Others.block.desc":"拦截所有其他跟踪","privacy.group.Others.block.tooltip":"这将在您访问的每个网站上拦截其他跟踪。","privacy.group.Others.unblock.desc":"取消拦截所有其他跟踪","privacy.trackersBlockedAll":"在 {1} 拦截了<i>所有 {0} 跟踪器</i>","privacy.trackersBlockedSome":"在 {2} 拦截了<i> {0} / {1} 个 跟踪器</i>","privacy.trackersBlockedNone":"在 {1} 上<i>{0} 跟踪</i> 系统","privacy.trackersBlocked":"已拦截 {0}/{1}","privacy.trackersFound":"{0} 已找到","privacy.trackersNone":"什么也没有","privacy.trackerBlock.desc":"拦截","privacy.trackerBlock.tooltip":"这将在您访问的每个网站上拦截[{0}]。","privacy.trackerUnblock.desc":"已拦截","privacy.trackerUnblock.tooltip":"这将在您访问的每个网站上取消拦截[{0}]。","privacy.trackerUnblockOnAutoBlock.tooltip":"要取消拦截特定跟踪器，请关闭自动拦截功能。","privacy.automaticBlocking.desc":"自动拦截所有跟踪器","privacy.automaticBlocking.tooltip":"我们将在您访问的每个网站上自动拦截已发现的所有跟踪器。","setting.title":"设置","setting.serp.name":"标记我的搜索结果","setting.serp.desc":"在 Google、Yahoo! 等上面向您的搜索结果添加彩色图标， 以查看哪些结果可以安全点击。(绿色 = 安全, 灰色 = 未知, 红色 = 不安全)","setting.serpPopup.name":"显示搜索结果的工具提示","setting.serpPopup.desc":"将鼠标悬停在我们的图标上， 以查看更多信息。","setting.secureBrowser.Avast.name":"Secure Browser","setting.secureBrowser.Avast.desc":"切换到银行模式浏览敏感的财务网站（需要安装 Avast Antivirus 和 Avast Secure Browser）","setting.secureBrowser.AVG.name":"Secure Browser","setting.secureBrowser.AVG.desc":"切换到银行模式浏览敏感的财务网站（需要安装 AVG Antivirus 和 AVG Secure Browser）","setting.dntBadge.name":"显示网站上的跟踪器总数","setting.dntBadge.desc":"向您的浏览器中添加徽章，以便立即查看任何网站上有多少跟踪器。","setting.dntAutoBlock.name":"自动拦截所有跟踪器","setting.dntAutoBlock.desc":"在您访问的每个网站上拦截已发现的所有跟踪器。","setting.dntSocial.desc":"拦截所有社交网络跟踪器","setting.dntAdTracking.desc":"拦截所有广告跟踪器","setting.dntWebAnalytics.desc":"拦截所有 web 分析跟踪器","setting.dntOthers.desc":"拦截所有其他跟踪器","setting.productAnalysis.name":"允许分析产品性能和作为新产品研发使用","setting.productAnalysis.tooltip":"我们收集并将扩展的使用数据、内部扩展标识符、浏览器类型和版本、操作系统、国家/地区、语言、Avast 防病毒应用程序状态等信息发送给我们的服务器。","setting.urlConsent.name":"同意获取 URL","serp.safe.desc":"此网站安全","serp.bad.desc":"此网站可能不可信","serp.unknown.desc":"此网站没有评级","serp.unsafe.desc":"此网站不安全","topbar.openBankMode":"在银行模式中打开","topbar.desc":"您的财务数据可能对他人可见。","topbar.tooltip":"银行模式是随 Avast 防病毒软件安装的 Avast Secure Browser 的一部分，可安全隔离购物和银行会话，以阻止黑客窃取您的信用卡号码、密码和其他私有数据。","topbar.dontShowAgain":"在此站点上不再显示","installPage.consent.title":"允许扫描网站地址，对您进行保护？","installPage.consent.desc":"如果您同意，我们将检查您所访问的网站地址，并告知您该网站是否安全。(请参阅我们的{URL_START}隐私政策{URL_END})","installPage.agreed.title":"谢谢！","installPage.agreed.desc":"我们正在确保您免遭危险网站的攻击。","installPage.disagreed.title":"请放心","installPage.disagreed.desc":"如果您不希望我们扫描您的网站地址，卸载 {0} Online Security 即可，请注意安全！","installPage.consent.disagree":"不，谢谢","installPage.consent.agree":"是，扫描网站地址","panel.consent.agree":"扫描网站地址"},"zh_TW":{"AVG.title":"Online Security","Avast.title":"Avast Online Security","global.beta":"測試版","global.detailsShow":"詳細資料","global.detailsHide":"隱藏詳細資料","global.done":"完成","global.leaveSite":"離開網站","global.switcher.off":"關閉","global.switcher.on":"開啟","global.close":"關閉","global.back":"返回","background.icon.unknown":"{0} - 未知的網站","background.icon.safe":"{0} - 這個網站很安全","background.icon.bad":"{0} - 這個網站可能不值得信賴","background.icon.unsafe":"{0} - 這個網站不安全","security.title":"安全","security.safe.title":"這個網站很安全","security.safe.item1.desc":"沒有網路釣魚","security.safe.item1.tooltip":"我們尚未在這個網站上偵測到任何企圖竊取密碼、信用卡號碼等敏感資訊的行為。","security.safe.item2.desc":"沒有惡意軟體","security.safe.item2.tooltip":"我們尚未在這個網站上偵測到任何惡意程式碼。","security.safe.item3.desc":"受信任","security.safe.item3.tooltip":"{0} 使用者已在 {0} Online Security 中按 {1}，將這個網站評為值得信賴。","security.bad.title":"可能不值得信賴","security.bad.desc":"我們並未在這裡發現任何網路釣魚威脅或惡意軟體，不過很多使用者給了負面評價。","security.unknown.title":"未知的網站","security.unknown.desc":"我們還沒有足夠的資訊可以給予這個網站評價。","security.unsafe.title":"這個網站不安全","security.unsafe.phishing.desc":"這個網站已被標示為網路釣魚網站。網路釣魚會企圖竊取如密碼、信用卡號碼等敏感資訊。","security.unsafe.malware.desc":"我們在這個網站上發現惡意程式碼，可能會損害您的電腦或竊取私人資料。","rating.question.desc":"您信任 {0} 嗎？","rating.negative":"網站上有任何不適當的內容嗎？(選填)","rating.thanks":"感謝您給予評價！","rating.trusted.desc":"您<i>信任</i> {0}","rating.untrusted.desc":"您<i>不信任</i> {0}","rating.revert.tooltip":"按一下可移除評價","rating.tooltip":"您的信任與否會影響我們給予網站的安全評價。","rating.category.pornography":"色情","rating.category.violence":"武器 / 暴力","rating.category.gambling":"賭博","rating.category.drugs":"酒類 / 毒品","rating.category.illegal":"盜版 / 違法","rating.category.others":"其他","privacy.title":"隱私","privacy.group.Social.desc":"社群網路","privacy.group.Social.block.desc":"封鎖所有社群網路追蹤","privacy.group.Social.block.tooltip":"在您每次造訪網站時封鎖社群網路追蹤。","privacy.group.Social.unblock.desc":"解除封鎖所有社群網路追蹤","privacy.group.Social.unblock.tooltip":"在您每次造訪網站時允許社群網路追蹤。","privacy.group.AdTracking.desc":"廣告追蹤","privacy.group.AdTracking.block.desc":"封鎖所有廣告追蹤","privacy.group.AdTracking.block.tooltip":"在您每次造訪網站時封鎖廣告追蹤。","privacy.group.AdTracking.unblock.desc":"解除封鎖所有廣告追蹤","privacy.group.AdTracking.unblock.tooltip":"在您每次造訪網站時允許廣告追蹤。","privacy.group.WebAnalytics.desc":"網頁分析","privacy.group.WebAnalytics.block.desc":"封鎖所有網頁分析追蹤","privacy.group.WebAnalytics.block.tooltip":"在您每次造訪網站時封鎖網頁分析追蹤。","privacy.group.WebAnalytics.unblock.desc":"解除封鎖所有網頁分析追蹤","privacy.group.WebAnalytics.unblock.tooltip":"在您每次造訪網站時允許其他追蹤。","privacy.group.Others.desc":"其他","privacy.group.Others.block.desc":"封鎖其他所有追蹤","privacy.group.Others.block.tooltip":"在您每次造訪網站時封鎖其他追蹤。","privacy.group.Others.unblock.desc":"解除封鎖其他所有追蹤","privacy.trackersBlockedAll":"在 {1} 上<i>全數封鎖了 {0} 個追蹤器</i>","privacy.trackersBlockedSome":"在 {2} 上封鎖了 <i>{0} 個追蹤器，共發現 {1} 個</i>","privacy.trackersBlockedNone":"在 {1} 上發現 <i>{0} 個追蹤</i>系統","privacy.trackersBlocked":"封鎖了 {0} 個，共發現 {1} 個","privacy.trackersFound":"發現 {0} 個","privacy.trackersNone":"無","privacy.trackerBlock.desc":"封鎖","privacy.trackerBlock.tooltip":"在您每次造訪網站時封鎖 [{0}]。","privacy.trackerUnblock.desc":"已封鎖","privacy.trackerUnblock.tooltip":"在您每次造訪網站時解除封鎖 [{0}]。","privacy.trackerUnblockOnAutoBlock.tooltip":"若要解除封鎖特定追蹤器，請關閉自動封鎖功能。","privacy.automaticBlocking.desc":"自動封鎖所有追蹤器","privacy.automaticBlocking.tooltip":"我們將會在您每次造訪網站時自動封鎖所有發現的追蹤器。","setting.title":"設定","setting.serp.name":"標示我的搜尋結果","setting.serp.desc":"將彩色圖示加入 Google、Yahoo! 等網站的搜尋結果中，以便查看可以安全點選的結果。(綠色 = 安全，灰色 = 未知，紅色 = 不安全)","setting.serpPopup.name":"顯示搜尋結果的工具提示","setting.serpPopup.desc":"將滑鼠游標移動到我們的圖示上方，即可查看更多資訊。","setting.secureBrowser.Avast.name":"Secure Browser","setting.secureBrowser.Avast.desc":"切換到銀行模式來瀏覽敏感的金融網站 (需要安裝 Avast Antivirus 及 Avast Secure Browser)","setting.secureBrowser.AVG.name":"Secure Browser","setting.secureBrowser.AVG.desc":"切換到銀行模式來瀏覽敏感的金融網站 (需要安裝 AVG AntiVirus 及 AVG Secure Browser)","setting.dntBadge.name":"顯示網站上的追蹤器總數","setting.dntBadge.desc":"將徽章新增至瀏覽器，以便立即查看任何網站上的追蹤器數量。","setting.dntAutoBlock.name":"自動封鎖所有追蹤器","setting.dntAutoBlock.desc":"在您每次造訪網站時自動封鎖所有發現的追蹤器。","setting.dntSocial.desc":"封鎖所有社群網路追蹤器","setting.dntAdTracking.desc":"封鎖所有廣告追蹤器","setting.dntWebAnalytics.desc":"封鎖所有網頁分析追蹤器","setting.dntOthers.desc":"封鎖其他所有追蹤器","setting.productAnalysis.name":"允許分析產品效能與使用量，以利新產品的開發","setting.productAnalysis.tooltip":"我們會收集擴充功能的使用資料、內部擴充功能識別碼、瀏覽器類型和版本、作業系統、國家/地區、語言、Avast 防毒應用程式狀態，然後傳送至我們的伺服器。","setting.urlConsent.name":"同意收集 URL","serp.safe.desc":"這個網站很安全","serp.bad.desc":"這個網站可能不值得信賴","serp.unknown.desc":"這個網站沒有任何評價","serp.unsafe.desc":"這個網站不安全","topbar.openBankMode":"在銀行模式中開啟","topbar.desc":"其他人可能會看到您的財務資料。","topbar.tooltip":"銀行模式是您在安裝 Avast 防毒軟體時一併安裝的 Avast Secure Browser 部件，能以安全的方式隔離購物與銀行交易工作階段，預防駭客竊取您的信用卡號碼、密碼與其他私人資料。","topbar.dontShowAgain":"下次造訪這個網站時不要再顯示","installPage.consent.title":"是否允許我們藉由掃描網址來保護您的安全？","installPage.consent.desc":"如果您同意，我們會在您造訪網站時檢驗網址，告訴您這些網站是否安全。(請參閱我們的{URL_START}隱私權政策{URL_END})","installPage.agreed.title":"謝謝！","installPage.agreed.desc":"我們正在保護您的安全，抵禦危險網站的侵害。","installPage.disagreed.title":"別在意","installPage.disagreed.desc":"如果您不希望我們掃描網址，只要解除安裝{0} Online Security 就可以了。祝您平安順利！","installPage.consent.disagree":"不用了，謝謝","installPage.consent.agree":"好的，請掃描網址","panel.consent.agree":"掃描網址"}}')
},function(e,t){
e.exports={
ar:function(e){
return Number(0==e?0:1==e?1:2==e?2:e%100>=3&&e%100<=10?3:e%100>=11&&e%100<=99?4:5)
},
be:function(e){
return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<12||e%100>14)?1:e%10==0||e%10>=5&&e%10<=9||e%100>=11&&e%100<=14?2:3)
},
bg:function(e){
return Number(1!=e)
},
bn:function(e){
return Number(1!=e)
},
ca:function(e){
return Number(1!=e)
},
cs:function(e){
return Number(1==e?0:e>=2&&e<=4?1:3)
},
da:function(e){
return Number(1!=e)
},
de:function(e){
return Number(1!=e)
},
el:function(e){
return Number(1!=e)
},
en:function(e){
return Number(1!=e)
},
es:function(e){
return Number(1!=e)
},
et:function(e){
return Number(1!=e)
},
fa:function(e){
return Number(1!=e)
},
fi:function(e){
return Number(1!=e)
},
fr:function(e){
return Number(e>1)
},
he:function(e){
return Number(e%100==1?0:e%100==2?1:e%100==3||e%100==4?2:3)
},
hi:function(e){
return Number(1!=e)
},
hr:function(e){
return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)
},
hu:function(e){
return Number(1!=e)
},
id:function(e){
return Number(0)
},
it:function(e){
return Number(1!=e)
},
ja:function(e){
return Number(0)
},
ko:function(e){
return Number(0)
},
lt:function(e){
return Number(e%10==1&&(e%100>19||e%100<11)?0:e%10>=2&&e%10<=9&&(e%100>19||e%100<11)?1:e%1!=0?2:3)
},
lv:function(e){
return Number(0==e?0:e%10==1&&e%100!=11?1:2)
},
ms:function(e){
return Number(0)
},
nb:function(e){
return Number(1!=e)
},
nl:function(e){
return Number(1!=e)
},
pl:function(e){
return Number(1==e?0:e%10>=2&&e%10<=4&&(e%100<12||e%100>14)?1:1!=e&&e%10>=0&&e%10<=1||e%10>=5&&e%10<=9||e%100>=12&&e%100<=14?2:3)
},
pt_BR:function(e){
return Number(1!=e)
},
pt_PT:function(e){
return Number(1!=e)
},
ro:function(e){
return Number(1==e?0:0==e||e%100>0&&e%100<20?1:2)
},
ru:function(e){
return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<12||e%100>14)?1:e%10==0||e%10>=5&&e%10<=9||e%100>=11&&e%100<=14?2:3)
},
sk:function(e){
return Number(1==e?0:e>=2&&e<=4?1:3)
},
sl:function(e){
return Number(e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0)
},
sr:function(e){
return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)
},
sv:function(e){
return Number(1!=e)
},
tr:function(e){
return Number(1!=e)
},
uk:function(e){
return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<12||e%100>14)?1:e%10==0||e%10>=5&&e%10<=9||e%100>=11&&e%100<=14?2:3)
},
ur:function(e){
return Number(1!=e)
},
vi:function(e){
return Number(0)
},
zh_CN:function(e){
return Number(0)
},
zh_TW:function(e){
return Number(0)
}
}
},function(e,t,a){
var i=function(){
var e=this,t=e.$createElement,a=e._self._c||t
return a("div",{
staticClass:"aos"
},[a("div",{
staticClass:"aos-body aos-popup-container"
},[a("div",{
staticClass:"aos-popup aos-g-align--center"
},[a("div",{
staticClass:"aos-security-icon aos-icon-unsafe-big"
}),e._v(" "),a("h2",{
staticClass:"aos-h2 aos-text-col aos-critical aos-g-margin-bottom--10 aos-g-margin-top--20"
},[e._v("\n\t\t\t\t"+e._s(e.nls("security.unsafe.title"))+"\n\t\t\t")]),e._v(" "),e.security.phishing?a("p",[e._v(e._s(e.nls("security.unsafe.phishing.desc")))]):e._e(),e._v(" "),e.security.malware?a("p",[e._v(e._s(e.nls("security.unsafe.malware.desc")))]):e._e(),e._v(" "),a("button",{
staticClass:"aos-button aos-critical aos-g-margin-top--20",
on:{
click:function(t){
return e.action("leave")
}
}
},[e._v("\n\t\t\t\t"+e._s(e.nls("global.leaveSite"))+"\n\t\t\t")]),e._v(" "),a("div",{
staticClass:"aos-text-col aos-white aos-g-margin-top--30"
},[a("span",{
staticClass:"aos-logo"
}),e._v(" "),a("span",[e._v(e._s(e.nls(e.brandName+".title")))])])])])])
},o=[]
i._withStripped=!0,e.exports=function(e){
var t="function"==typeof e?e.options:e
return t.render=i,t.staticRenderFns=o,e
}
},function(e,t,a){
var i=function(){
var e=this,t=e.$createElement,a=e._self._c||t
return a("div",{
staticClass:"aos"
},[a("div",{
staticClass:"aos-body aos-popup-container"
},[a("div",{
staticClass:"aos-popup aos-consent aos-g-align--center"
},[a("div",{
staticClass:"aos-security-icon aos-icon-consent-big"
}),e._v(" "),"consent"===e.installPage.view?a("div",[a("h2",{
staticClass:"aos-h2 aos-text-col aos-g-margin-bottom--10 aos-g-margin-top--20"
},[e._v("\n                    "+e._s(e.nls("installPage.consent.title"))+"\n                ")]),e._v(" "),a("p",{
domProps:{
innerHTML:e._s(e.consentDescWithUrl)
}
}),e._v(" "),a("button",{
staticClass:"aos-button aos-g-margin-top--20 aos-g-margin-right--20",
on:{
click:function(t){
return e.action("consentAgree")
}
}
},[e._v("\n                    "+e._s(e.nls("installPage.consent.agree"))+"\n                ")]),e._v(" "),a("button",{
staticClass:"aos-section-details-button aos-button aos-secondary aos-g-margin-top--20",
on:{
click:function(t){
return e.action("consentDisagree")
}
}
},[e._v("\n                    "+e._s(e.nls("installPage.consent.disagree"))+"\n                ")])]):e._e(),e._v(" "),"agreed"===e.installPage.view?a("div",[a("h2",{
staticClass:"aos-h2 aos-text-col aos-g-margin-bottom--10 aos-g-margin-top--20 aos-g-margin-right--20"
},[e._v("\n                    "+e._s(e.nls("installPage.agreed.title"))+"\n                ")]),e._v(" "),a("p",[e._v(e._s(e.nls("installPage.agreed.desc")))]),e._v(" "),a("button",{
staticClass:"aos-section-details-button aos-button aos-secondary aos-g-margin-top--20",
on:{
click:function(t){
return e.action("close")
}
}
},[e._v("\n                    "+e._s(e.nls("global.close"))+"\n                ")])]):e._e(),e._v(" "),"disagreed"===e.installPage.view?a("div",[a("h2",{
staticClass:"aos-h2 aos-text-col aos-g-margin-bottom--10 aos-g-margin-top--20"
},[e._v("\n                    "+e._s(e.nls("installPage.disagreed.title"))+"\n                ")]),e._v(" "),a("p",[e._v(e._s(e.nls("installPage.disagreed.desc",e.brandName)))]),e._v(" "),a("button",{
staticClass:"aos-button aos-g-margin-top--20 aos-g-margin-right--20",
on:{
click:function(t){
return e.action("close")
}
}
},[e._v("\n                    "+e._s(e.nls("global.close"))+"\n                ")]),e._v(" "),a("button",{
staticClass:"aos-section-details-button aos-button aos-secondary aos-g-margin-top--20",
on:{
click:function(t){
return e.action("disagreeBack")
}
}
},[e._v("\n                    "+e._s(e.nls("global.back"))+"\n                ")])]):e._e(),e._v(" "),a("div",{
staticClass:"aos-text-col aos-white aos-g-margin-top--30"
},[a("span",{
staticClass:"aos-logo"
}),e._v(" "),a("span",[e._v(e._s(e.nls(e.brandName+".title")))])])])])])
},o=[]
i._withStripped=!0,e.exports=function(e){
var t="function"==typeof e?e.options:e
return t.render=i,t.staticRenderFns=o,e
}
},function(e,t,a){
(function(i){
var o
!function(s){
var n=Array.isArray?Array.isArray:function(e){
return"[object Array]"===Object.prototype.toString.call(e)
}
function r(){
this._events={},this._conf&&l.call(this,this._conf)
}
function l(e){
e?(this._conf=e,e.delimiter&&(this.delimiter=e.delimiter),this._maxListeners=void 0!==e.maxListeners?e.maxListeners:10,
e.wildcard&&(this.wildcard=e.wildcard),
e.newListener&&(this._newListener=e.newListener),
e.removeListener&&(this._removeListener=e.removeListener),
e.verboseMemoryLeak&&(this.verboseMemoryLeak=e.verboseMemoryLeak),
this.wildcard&&(this.listenerTree={})):this._maxListeners=10
}
function c(e,t){
var a="(node) warning: possible EventEmitter memory leak detected. "+e+" listeners added. Use emitter.setMaxListeners() to increase limit."
if(this.verboseMemoryLeak&&(a+=" Event name: "+t+"."),void 0!==i&&i.emitWarning){
var o=new Error(a)
o.name="MaxListenersExceededWarning",o.emitter=this,o.count=e,i.emitWarning(o)
}else{
console.trace
}
}
function u(e){
this._events={},this._newListener=!1,this._removeListener=!1,this.verboseMemoryLeak=!1,
l.call(this,e)
}
function d(e,t,a,i){
if(!a){
return[]
}
var o,s,n,r,l,c,u,p=[],g=t.length,m=t[i],k=t[i+1]
if(i===g&&a._listeners){
if("function"==typeof a._listeners){
return e&&e.push(a._listeners),[a]
}
for(o=0,s=a._listeners.length;o<s;o++){
e&&e.push(a._listeners[o])
}
return[a]
}
if("*"===m||"**"===m||a[m]){
if("*"===m){
for(n in a){
"_listeners"!==n&&a.hasOwnProperty(n)&&(p=p.concat(d(e,t,a[n],i+1)))
}
return p
}
if("**"===m){
for(n in(u=i+1===g||i+2===g&&"*"===k)&&a._listeners&&(p=p.concat(d(e,t,a,g))),
a){
"_listeners"!==n&&a.hasOwnProperty(n)&&("*"===n||"**"===n?(a[n]._listeners&&!u&&(p=p.concat(d(e,t,a[n],g))),
p=p.concat(d(e,t,a[n],i))):p=n===k?p.concat(d(e,t,a[n],i+2)):p.concat(d(e,t,a[n],i)))
}
return p
}
p=p.concat(d(e,t,a[m],i+1))
}
if((r=a["*"])&&d(e,t,r,i+1),l=a["**"]){
if(i<g){
for(n in l._listeners&&d(e,t,l,g),l){
"_listeners"!==n&&l.hasOwnProperty(n)&&(n===k?d(e,t,l[n],i+2):n===m?d(e,t,l[n],i+1):((c={})[n]=l[n],
d(e,t,{
"**":c
},i+1)))
}
}else{
l._listeners?d(e,t,l,g):l["*"]&&l["*"]._listeners&&d(e,t,l["*"],g)
}
}
return p
}
function p(e,t){
for(var a=0,i=(e="string"==typeof e?e.split(this.delimiter):e.slice()).length;a+1<i;a++){
if("**"===e[a]&&"**"===e[a+1]){
return
}
}
for(var o=this.listenerTree,s=e.shift();void 0!==s;){
if(o[s]||(o[s]={}),o=o[s],0===e.length){
return o._listeners?("function"==typeof o._listeners&&(o._listeners=[o._listeners]),
o._listeners.push(t),
!o._listeners.warned&&this._maxListeners>0&&o._listeners.length>this._maxListeners&&(o._listeners.warned=!0,
c.call(this,o._listeners.length,s))):o._listeners=t,
!0
}
s=e.shift()
}
return!0
}
u.EventEmitter2=u,u.prototype.delimiter=".",u.prototype.setMaxListeners=function(e){
void 0!==e&&(this._maxListeners=e,
this._conf||(this._conf={}),this._conf.maxListeners=e)
},u.prototype.event="",u.prototype.once=function(e,t){
return this._once(e,t,!1)
},u.prototype.prependOnceListener=function(e,t){
return this._once(e,t,!0)
},u.prototype._once=function(e,t,a){
return this._many(e,1,t,a),this
},u.prototype.many=function(e,t,a){
return this._many(e,t,a,!1)
},u.prototype.prependMany=function(e,t,a){
return this._many(e,t,a,!0)
},u.prototype._many=function(e,t,a,i){
var o=this
if("function"!=typeof a){
throw new Error("many only accepts instances of Function")
}
function s(){
return 0==--t&&o.off(e,s),a.apply(this,arguments)
}
return s._origin=a,this._on(e,s,i),o
},u.prototype.emit=function(){
this._events||r.call(this)
var e=arguments[0]
if("newListener"===e&&!this._newListener&&!this._events.newListener){
return!1
}
var t,a,i,o,s,n=arguments.length
if(this._all&&this._all.length){
if(s=this._all.slice(),n>3){
for(t=new Array(n),o=0;o<n;o++){
t[o]=arguments[o]
}
}
for(i=0,a=s.length;i<a;i++){
switch(this.event=e,n){
case 1:
s[i].call(this,e)
break
case 2:
s[i].call(this,e,arguments[1])
break
case 3:
s[i].call(this,e,arguments[1],arguments[2])
break
default:
s[i].apply(this,t)
}
}
}
if(this.wildcard){
s=[]
var l="string"==typeof e?e.split(this.delimiter):e.slice()
d.call(this,s,l,this.listenerTree,0)
}else{
if("function"==typeof(s=this._events[e])){
switch(this.event=e,n){
case 1:
s.call(this)
break
case 2:
s.call(this,arguments[1])
break
case 3:
s.call(this,arguments[1],arguments[2])
break
default:
for(t=new Array(n-1),o=1;o<n;o++){
t[o-1]=arguments[o]
}
s.apply(this,t)
}
return!0
}
s&&(s=s.slice())
}
if(s&&s.length){
if(n>3){
for(t=new Array(n-1),o=1;o<n;o++){
t[o-1]=arguments[o]
}
}
for(i=0,a=s.length;i<a;i++){
switch(this.event=e,n){
case 1:
s[i].call(this)
break
case 2:
s[i].call(this,arguments[1])
break
case 3:
s[i].call(this,arguments[1],arguments[2])
break
default:
s[i].apply(this,t)
}
}
return!0
}
if(!this._all&&"error"===e){
throw arguments[1]instanceof Error?arguments[1]:new Error("Uncaught, unspecified 'error' event.")
}
return!!this._all
},u.prototype.emitAsync=function(){
this._events||r.call(this)
var e=arguments[0]
if("newListener"===e&&!this._newListener&&!this._events.newListener){
return Promise.resolve([!1])
}
var t,a,i,o,s,n=[],l=arguments.length
if(this._all){
if(l>3){
for(t=new Array(l),o=1;o<l;o++){
t[o]=arguments[o]
}
}
for(i=0,a=this._all.length;i<a;i++){
switch(this.event=e,l){
case 1:
n.push(this._all[i].call(this,e))
break
case 2:
n.push(this._all[i].call(this,e,arguments[1]))
break
case 3:
n.push(this._all[i].call(this,e,arguments[1],arguments[2]))
break
default:
n.push(this._all[i].apply(this,t))
}
}
}
if(this.wildcard){
s=[]
var c="string"==typeof e?e.split(this.delimiter):e.slice()
d.call(this,s,c,this.listenerTree,0)
}else{
s=this._events[e]
}
if("function"==typeof s){
switch(this.event=e,l){
case 1:
n.push(s.call(this))
break
case 2:
n.push(s.call(this,arguments[1]))
break
case 3:
n.push(s.call(this,arguments[1],arguments[2]))
break
default:
for(t=new Array(l-1),o=1;o<l;o++){
t[o-1]=arguments[o]
}
n.push(s.apply(this,t))
}
}else if(s&&s.length){
if(s=s.slice(),l>3){
for(t=new Array(l-1),o=1;o<l;o++){
t[o-1]=arguments[o]
}
}
for(i=0,a=s.length;i<a;i++){
switch(this.event=e,l){
case 1:
n.push(s[i].call(this))
break
case 2:
n.push(s[i].call(this,arguments[1]))
break
case 3:
n.push(s[i].call(this,arguments[1],arguments[2]))
break
default:
n.push(s[i].apply(this,t))
}
}
}else if(!this._all&&"error"===e){
return arguments[1]instanceof Error?Promise.reject(arguments[1]):Promise.reject("Uncaught, unspecified 'error' event.")
}
return Promise.all(n)
},u.prototype.on=function(e,t){
return this._on(e,t,!1)
},u.prototype.prependListener=function(e,t){
return this._on(e,t,!0)
},u.prototype.onAny=function(e){
return this._onAny(e,!1)
},u.prototype.prependAny=function(e){
return this._onAny(e,!0)
},u.prototype.addListener=u.prototype.on,u.prototype._onAny=function(e,t){
if("function"!=typeof e){
throw new Error("onAny only accepts instances of Function")
}
return this._all||(this._all=[]),t?this._all.unshift(e):this._all.push(e),this
},
u.prototype._on=function(e,t,a){
if("function"==typeof e){
return this._onAny(e,t),this
}
if("function"!=typeof t){
throw new Error("on only accepts instances of Function")
}
return this._events||r.call(this),this._newListener&&this.emit("newListener",e,t),
this.wildcard?(p.call(this,e,t),
this):(this._events[e]?("function"==typeof this._events[e]&&(this._events[e]=[this._events[e]]),
a?this._events[e].unshift(t):this._events[e].push(t),
!this._events[e].warned&&this._maxListeners>0&&this._events[e].length>this._maxListeners&&(this._events[e].warned=!0,
c.call(this,this._events[e].length,e))):this._events[e]=t,
this)
},u.prototype.off=function(e,t){
if("function"!=typeof t){
throw new Error("removeListener only takes instances of Function")
}
var a,i=[]
if(this.wildcard){
var o="string"==typeof e?e.split(this.delimiter):e.slice()
i=d.call(this,null,o,this.listenerTree,0)
}else{
if(!this._events[e]){
return this
}
a=this._events[e],i.push({
_listeners:a
})
}
for(var s=0;s<i.length;s++){
var r=i[s]
if(a=r._listeners,n(a)){
for(var l=-1,c=0,u=a.length;c<u;c++){
if(a[c]===t||a[c].listener&&a[c].listener===t||a[c]._origin&&a[c]._origin===t){
l=c
break
}
}
if(l<0){
continue
}
return this.wildcard?r._listeners.splice(l,1):this._events[e].splice(l,1),0===a.length&&(this.wildcard?delete r._listeners:delete this._events[e]),
this._removeListener&&this.emit("removeListener",e,t),
this
}
(a===t||a.listener&&a.listener===t||a._origin&&a._origin===t)&&(this.wildcard?delete r._listeners:delete this._events[e],
this._removeListener&&this.emit("removeListener",e,t))
}
return function e(t){
if(void 0!==t){
var a=Object.keys(t)
for(var i in a){
var o=a[i],s=t[o]
s instanceof Function||"object"!=typeof s||null===s||(Object.keys(s).length>0&&e(t[o]),
0===Object.keys(s).length&&delete t[o])
}
}
}(this.listenerTree),this
},u.prototype.offAny=function(e){
var t,a=0,i=0
if(e&&this._all&&this._all.length>0){
for(a=0,i=(t=this._all).length;a<i;a++){
if(e===t[a]){
return t.splice(a,1),this._removeListener&&this.emit("removeListenerAny",e),
this
}
}
}else{
if(t=this._all,this._removeListener){
for(a=0,i=t.length;a<i;a++){
this.emit("removeListenerAny",t[a])
}
}
this._all=[]
}
return this
},u.prototype.removeListener=u.prototype.off,u.prototype.removeAllListeners=function(e){
if(void 0===e){
return!this._events||r.call(this),this
}
if(this.wildcard){
for(var t="string"==typeof e?e.split(this.delimiter):e.slice(),a=d.call(this,null,t,this.listenerTree,0),i=0;i<a.length;i++){
a[i]._listeners=null
}
}else{
this._events&&(this._events[e]=null)
}
return this
},u.prototype.listeners=function(e){
if(this.wildcard){
var t=[],a="string"==typeof e?e.split(this.delimiter):e.slice()
return d.call(this,t,a,this.listenerTree,0),t
}
return this._events||r.call(this),this._events[e]||(this._events[e]=[]),n(this._events[e])||(this._events[e]=[this._events[e]]),
this._events[e]
},u.prototype.eventNames=function(){
return Object.keys(this._events)
},u.prototype.listenerCount=function(e){
return this.listeners(e).length
},u.prototype.listenersAny=function(){
return this._all?this._all:[]
},void 0===(o=function(){
return u
}.call(t,a,t,e))||(e.exports=o)
}()
}).call(this,a(1))
},function(e,t,a){
"use strict"
var i=a(12),o={}
o.rules=a(14).map((function(e){
return{
rule:e,
suffix:e.replace(/^(\*\.|\!)/,""),
punySuffix:-1,
wildcard:"*"===e.charAt(0),
exception:"!"===e.charAt(0)
}
})),o.endsWith=function(e,t){
return-1!==e.indexOf(t,e.length-t.length)
},o.findRule=function(e){
var t=i.toASCII(e)
return o.rules.reduce((function(e,a){
return-1===a.punySuffix&&(a.punySuffix=i.toASCII(a.suffix)),
o.endsWith(t,"."+a.punySuffix)||t===a.punySuffix?a:e
}),null)
},t.errorCodes={
DOMAIN_TOO_SHORT:"Domain name too short.",
DOMAIN_TOO_LONG:"Domain name too long. It should be no more than 255 chars.",
LABEL_STARTS_WITH_DASH:"Domain name label can not start with a dash.",
LABEL_ENDS_WITH_DASH:"Domain name label can not end with a dash.",
LABEL_TOO_LONG:"Domain name label should be at most 63 chars long.",
LABEL_TOO_SHORT:"Domain name label should be at least 1 character long.",
LABEL_INVALID_CHARS:"Domain name label can only contain alphanumeric characters or dashes."
},
o.validate=function(e){
var t=i.toASCII(e)
if(t.length<1){
return"DOMAIN_TOO_SHORT"
}
if(t.length>255){
return"DOMAIN_TOO_LONG"
}
for(var a,o=t.split("."),s=0;s<o.length;++s){
if(!(a=o[s]).length){
return"LABEL_TOO_SHORT"
}
if(a.length>63){
return"LABEL_TOO_LONG"
}
if("-"===a.charAt(0)){
return"LABEL_STARTS_WITH_DASH"
}
if("-"===a.charAt(a.length-1)){
return"LABEL_ENDS_WITH_DASH"
}
if(!/^[a-z0-9\-]+$/.test(a)){
return"LABEL_INVALID_CHARS"
}
}
},t.parse=function(e){
if("string"!=typeof e){
throw new TypeError("Domain name must be a string.")
}
var a=e.slice(0).toLowerCase()
"."===a.charAt(a.length-1)&&(a=a.slice(0,a.length-1))
var s=o.validate(a)
if(s){
return{
input:e,
error:{
message:t.errorCodes[s],
code:s
}
}
}
var n={
input:e,
tld:null,
sld:null,
domain:null,
subdomain:null,
listed:!1
},r=a.split(".")
if("local"===r[r.length-1]){
return n
}
var l=function(){
return/xn--/.test(a)?(n.domain&&(n.domain=i.toASCII(n.domain)),
n.subdomain&&(n.subdomain=i.toASCII(n.subdomain)),
n):n
},c=o.findRule(a)
if(!c){
return r.length<2?n:(n.tld=r.pop(),n.sld=r.pop(),n.domain=[n.sld,n.tld].join("."),
r.length&&(n.subdomain=r.pop()),
l())
}
n.listed=!0
var u=c.suffix.split("."),d=r.slice(0,r.length-u.length)
return c.exception&&d.push(u.shift()),n.tld=u.join("."),d.length?(c.wildcard&&(u.unshift(d.pop()),
n.tld=u.join(".")),
d.length?(n.sld=d.pop(),n.domain=[n.sld,n.tld].join("."),d.length&&(n.subdomain=d.join(".")),
l()):l()):l()
},t.get=function(e){
return e&&t.parse(e).domain||null
},t.isValid=function(e){
var a=t.parse(e)
return Boolean(a.domain&&a.listed)
}
},function(e,t,a){
(function(e){
var i
!function(o){
t&&t.nodeType,e&&e.nodeType
var s="object"==typeof global&&global
s.global!==s&&s.window!==s&&s.self
var n,r=2147483647,l=/^xn--/,c=/[^\x20-\x7E]/,u=/[\x2E\u3002\uFF0E\uFF61]/g,d={
overflow:"Overflow: input needs wider integers to process",
"not-basic":"Illegal input >= 0x80 (not a basic code point)",
"invalid-input":"Invalid input"
},p=Math.floor,g=String.fromCharCode
function m(e){
throw new RangeError(d[e])
}
function k(e,t){
for(var a=e.length,i=[];a--;){
i[a]=t(e[a])
}
return i
}
function h(e,t){
var a=e.split("@"),i=""
return a.length>1&&(i=a[0]+"@",e=a[1]),i+k((e=e.replace(u,".")).split("."),t).join(".")
}
function b(e){
for(var t,a,i=[],o=0,s=e.length;o<s;){
(t=e.charCodeAt(o++))>=55296&&t<=56319&&o<s?56320==(64512&(a=e.charCodeAt(o++)))?i.push(((1023&t)<<10)+(1023&a)+65536):(i.push(t),
o--):i.push(t)
}
return i
}
function v(e){
return k(e,(function(e){
var t=""
return e>65535&&(t+=g((e-=65536)>>>10&1023|55296),e=56320|1023&e),t+=g(e)
})).join("")
}
function y(e,t){
return e+22+75*(e<26)-((0!=t)<<5)
}
function f(e,t,a){
var i=0
for(e=a?p(e/700):e>>1,e+=p(e/t);e>455;i+=36){
e=p(e/35)
}
return p(i+36*e/(e+38))
}
function j(e){
var t,a,i,o,s,n,l,c,u,d,g,k=[],h=e.length,b=0,y=128,j=72
for((a=e.lastIndexOf("-"))<0&&(a=0),i=0;i<a;++i){
e.charCodeAt(i)>=128&&m("not-basic"),
k.push(e.charCodeAt(i))
}
for(o=a>0?a+1:0;o<h;){
for(s=b,n=1,l=36;o>=h&&m("invalid-input"),((c=(g=e.charCodeAt(o++))-48<10?g-22:g-65<26?g-65:g-97<26?g-97:36)>=36||c>p((r-b)/n))&&m("overflow"),
b+=c*n,
!(c<(u=l<=j?1:l>=j+26?26:l-j));l+=36){
n>p(r/(d=36-u))&&m("overflow"),n*=d
}
j=f(b-s,t=k.length+1,0==s),p(b/t)>r-y&&m("overflow"),y+=p(b/t),b%=t,k.splice(b++,0,y)
}
return v(k)
}
function w(e){
var t,a,i,o,s,n,l,c,u,d,k,h,v,j,w,A=[]
for(h=(e=b(e)).length,t=128,a=0,s=72,n=0;n<h;++n){
(k=e[n])<128&&A.push(g(k))
}
for(i=o=A.length,o&&A.push("-");i<h;){
for(l=r,n=0;n<h;++n){
(k=e[n])>=t&&k<l&&(l=k)
}
for(l-t>p((r-a)/(v=i+1))&&m("overflow"),a+=(l-t)*v,t=l,n=0;n<h;++n){
if((k=e[n])<t&&++a>r&&m("overflow"),
k==t){
for(c=a,u=36;!(c<(d=u<=s?1:u>=s+26?26:u-s));u+=36){
w=c-d,j=36-d,A.push(g(y(d+w%j,0))),
c=p(w/j)
}
A.push(g(y(c,0))),s=f(a,v,i==o),a=0,++i
}
}
++a,++t
}
return A.join("")
}
n={
version:"1.4.1",
ucs2:{
decode:b,
encode:v
},
decode:j,
encode:w,
toASCII:function(e){
return h(e,(function(e){
return c.test(e)?"xn--"+w(e):e
}))
},
toUnicode:function(e){
return h(e,(function(e){
return l.test(e)?j(e.slice(4).toLowerCase()):e
}))
}
},void 0===(i=function(){
return n
}.call(t,a,t,e))||(e.exports=i)
}()
}).call(this,a(13)(e))
},function(e,t){
e.exports=function(e){
return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],
e.children||(e.children=[]),
Object.defineProperty(e,"loaded",{
enumerable:!0,
get:function(){
return e.l
}
}),Object.defineProperty(e,"id",{
enumerable:!0,
get:function(){
return e.i
}
}),e.webpackPolyfill=1),e
}
},function(e){
e.exports=JSON.parse('["ac","com.ac","edu.ac","gov.ac","net.ac","mil.ac","org.ac","ad","nom.ad","ae","co.ae","net.ae","org.ae","sch.ae","ac.ae","gov.ae","mil.ae","aero","accident-investigation.aero","accident-prevention.aero","aerobatic.aero","aeroclub.aero","aerodrome.aero","agents.aero","aircraft.aero","airline.aero","airport.aero","air-surveillance.aero","airtraffic.aero","air-traffic-control.aero","ambulance.aero","amusement.aero","association.aero","author.aero","ballooning.aero","broker.aero","caa.aero","cargo.aero","catering.aero","certification.aero","championship.aero","charter.aero","civilaviation.aero","club.aero","conference.aero","consultant.aero","consulting.aero","control.aero","council.aero","crew.aero","design.aero","dgca.aero","educator.aero","emergency.aero","engine.aero","engineer.aero","entertainment.aero","equipment.aero","exchange.aero","express.aero","federation.aero","flight.aero","freight.aero","fuel.aero","gliding.aero","government.aero","groundhandling.aero","group.aero","hanggliding.aero","homebuilt.aero","insurance.aero","journal.aero","journalist.aero","leasing.aero","logistics.aero","magazine.aero","maintenance.aero","media.aero","microlight.aero","modelling.aero","navigation.aero","parachuting.aero","paragliding.aero","passenger-association.aero","pilot.aero","press.aero","production.aero","recreation.aero","repbody.aero","res.aero","research.aero","rotorcraft.aero","safety.aero","scientist.aero","services.aero","show.aero","skydiving.aero","software.aero","student.aero","trader.aero","trading.aero","trainer.aero","union.aero","workinggroup.aero","works.aero","af","gov.af","com.af","org.af","net.af","edu.af","ag","com.ag","org.ag","net.ag","co.ag","nom.ag","ai","off.ai","com.ai","net.ai","org.ai","al","com.al","edu.al","gov.al","mil.al","net.al","org.al","am","co.am","com.am","commune.am","net.am","org.am","ao","ed.ao","gv.ao","og.ao","co.ao","pb.ao","it.ao","aq","ar","com.ar","edu.ar","gob.ar","gov.ar","int.ar","mil.ar","musica.ar","net.ar","org.ar","tur.ar","arpa","e164.arpa","in-addr.arpa","ip6.arpa","iris.arpa","uri.arpa","urn.arpa","as","gov.as","asia","at","ac.at","co.at","gv.at","or.at","au","com.au","net.au","org.au","edu.au","gov.au","asn.au","id.au","info.au","conf.au","oz.au","act.au","nsw.au","nt.au","qld.au","sa.au","tas.au","vic.au","wa.au","act.edu.au","catholic.edu.au","nsw.edu.au","nt.edu.au","qld.edu.au","sa.edu.au","tas.edu.au","vic.edu.au","wa.edu.au","qld.gov.au","sa.gov.au","tas.gov.au","vic.gov.au","wa.gov.au","education.tas.edu.au","schools.nsw.edu.au","aw","com.aw","ax","az","com.az","net.az","int.az","gov.az","org.az","edu.az","info.az","pp.az","mil.az","name.az","pro.az","biz.az","ba","com.ba","edu.ba","gov.ba","mil.ba","net.ba","org.ba","bb","biz.bb","co.bb","com.bb","edu.bb","gov.bb","info.bb","net.bb","org.bb","store.bb","tv.bb","*.bd","be","ac.be","bf","gov.bf","bg","a.bg","b.bg","c.bg","d.bg","e.bg","f.bg","g.bg","h.bg","i.bg","j.bg","k.bg","l.bg","m.bg","n.bg","o.bg","p.bg","q.bg","r.bg","s.bg","t.bg","u.bg","v.bg","w.bg","x.bg","y.bg","z.bg","0.bg","1.bg","2.bg","3.bg","4.bg","5.bg","6.bg","7.bg","8.bg","9.bg","bh","com.bh","edu.bh","net.bh","org.bh","gov.bh","bi","co.bi","com.bi","edu.bi","or.bi","org.bi","biz","bj","asso.bj","barreau.bj","gouv.bj","bm","com.bm","edu.bm","gov.bm","net.bm","org.bm","bn","com.bn","edu.bn","gov.bn","net.bn","org.bn","bo","com.bo","edu.bo","gob.bo","int.bo","org.bo","net.bo","mil.bo","tv.bo","web.bo","academia.bo","agro.bo","arte.bo","blog.bo","bolivia.bo","ciencia.bo","cooperativa.bo","democracia.bo","deporte.bo","ecologia.bo","economia.bo","empresa.bo","indigena.bo","industria.bo","info.bo","medicina.bo","movimiento.bo","musica.bo","natural.bo","nombre.bo","noticias.bo","patria.bo","politica.bo","profesional.bo","plurinacional.bo","pueblo.bo","revista.bo","salud.bo","tecnologia.bo","tksat.bo","transporte.bo","wiki.bo","br","9guacu.br","abc.br","adm.br","adv.br","agr.br","aju.br","am.br","anani.br","aparecida.br","arq.br","art.br","ato.br","b.br","barueri.br","belem.br","bhz.br","bio.br","blog.br","bmd.br","boavista.br","bsb.br","campinagrande.br","campinas.br","caxias.br","cim.br","cng.br","cnt.br","com.br","contagem.br","coop.br","cri.br","cuiaba.br","curitiba.br","def.br","ecn.br","eco.br","edu.br","emp.br","eng.br","esp.br","etc.br","eti.br","far.br","feira.br","flog.br","floripa.br","fm.br","fnd.br","fortal.br","fot.br","foz.br","fst.br","g12.br","ggf.br","goiania.br","gov.br","ac.gov.br","al.gov.br","am.gov.br","ap.gov.br","ba.gov.br","ce.gov.br","df.gov.br","es.gov.br","go.gov.br","ma.gov.br","mg.gov.br","ms.gov.br","mt.gov.br","pa.gov.br","pb.gov.br","pe.gov.br","pi.gov.br","pr.gov.br","rj.gov.br","rn.gov.br","ro.gov.br","rr.gov.br","rs.gov.br","sc.gov.br","se.gov.br","sp.gov.br","to.gov.br","gru.br","imb.br","ind.br","inf.br","jab.br","jampa.br","jdf.br","joinville.br","jor.br","jus.br","leg.br","lel.br","londrina.br","macapa.br","maceio.br","manaus.br","maringa.br","mat.br","med.br","mil.br","morena.br","mp.br","mus.br","natal.br","net.br","niteroi.br","*.nom.br","not.br","ntr.br","odo.br","ong.br","org.br","osasco.br","palmas.br","poa.br","ppg.br","pro.br","psc.br","psi.br","pvh.br","qsl.br","radio.br","rec.br","recife.br","ribeirao.br","rio.br","riobranco.br","riopreto.br","salvador.br","sampa.br","santamaria.br","santoandre.br","saobernardo.br","saogonca.br","sjc.br","slg.br","slz.br","sorocaba.br","srv.br","taxi.br","tc.br","teo.br","the.br","tmp.br","trd.br","tur.br","tv.br","udi.br","vet.br","vix.br","vlog.br","wiki.br","zlg.br","bs","com.bs","net.bs","org.bs","edu.bs","gov.bs","bt","com.bt","edu.bt","gov.bt","net.bt","org.bt","bv","bw","co.bw","org.bw","by","gov.by","mil.by","com.by","of.by","bz","com.bz","net.bz","org.bz","edu.bz","gov.bz","ca","ab.ca","bc.ca","mb.ca","nb.ca","nf.ca","nl.ca","ns.ca","nt.ca","nu.ca","on.ca","pe.ca","qc.ca","sk.ca","yk.ca","gc.ca","cat","cc","cd","gov.cd","cf","cg","ch","ci","org.ci","or.ci","com.ci","co.ci","edu.ci","ed.ci","ac.ci","net.ci","go.ci","asso.ci","aéroport.ci","int.ci","presse.ci","md.ci","gouv.ci","*.ck","!www.ck","cl","gov.cl","gob.cl","co.cl","mil.cl","cm","co.cm","com.cm","gov.cm","net.cm","cn","ac.cn","com.cn","edu.cn","gov.cn","net.cn","org.cn","mil.cn","公司.cn","网络.cn","網絡.cn","ah.cn","bj.cn","cq.cn","fj.cn","gd.cn","gs.cn","gz.cn","gx.cn","ha.cn","hb.cn","he.cn","hi.cn","hl.cn","hn.cn","jl.cn","js.cn","jx.cn","ln.cn","nm.cn","nx.cn","qh.cn","sc.cn","sd.cn","sh.cn","sn.cn","sx.cn","tj.cn","xj.cn","xz.cn","yn.cn","zj.cn","hk.cn","mo.cn","tw.cn","co","arts.co","com.co","edu.co","firm.co","gov.co","info.co","int.co","mil.co","net.co","nom.co","org.co","rec.co","web.co","com","coop","cr","ac.cr","co.cr","ed.cr","fi.cr","go.cr","or.cr","sa.cr","cu","com.cu","edu.cu","org.cu","net.cu","gov.cu","inf.cu","cv","cw","com.cw","edu.cw","net.cw","org.cw","cx","gov.cx","cy","ac.cy","biz.cy","com.cy","ekloges.cy","gov.cy","ltd.cy","name.cy","net.cy","org.cy","parliament.cy","press.cy","pro.cy","tm.cy","cz","de","dj","dk","dm","com.dm","net.dm","org.dm","edu.dm","gov.dm","do","art.do","com.do","edu.do","gob.do","gov.do","mil.do","net.do","org.do","sld.do","web.do","dz","com.dz","org.dz","net.dz","gov.dz","edu.dz","asso.dz","pol.dz","art.dz","ec","com.ec","info.ec","net.ec","fin.ec","k12.ec","med.ec","pro.ec","org.ec","edu.ec","gov.ec","gob.ec","mil.ec","edu","ee","edu.ee","gov.ee","riik.ee","lib.ee","med.ee","com.ee","pri.ee","aip.ee","org.ee","fie.ee","eg","com.eg","edu.eg","eun.eg","gov.eg","mil.eg","name.eg","net.eg","org.eg","sci.eg","*.er","es","com.es","nom.es","org.es","gob.es","edu.es","et","com.et","gov.et","org.et","edu.et","biz.et","name.et","info.et","net.et","eu","fi","aland.fi","*.fj","*.fk","fm","fo","fr","asso.fr","com.fr","gouv.fr","nom.fr","prd.fr","tm.fr","aeroport.fr","avocat.fr","avoues.fr","cci.fr","chambagri.fr","chirurgiens-dentistes.fr","experts-comptables.fr","geometre-expert.fr","greta.fr","huissier-justice.fr","medecin.fr","notaires.fr","pharmacien.fr","port.fr","veterinaire.fr","ga","gb","gd","ge","com.ge","edu.ge","gov.ge","org.ge","mil.ge","net.ge","pvt.ge","gf","gg","co.gg","net.gg","org.gg","gh","com.gh","edu.gh","gov.gh","org.gh","mil.gh","gi","com.gi","ltd.gi","gov.gi","mod.gi","edu.gi","org.gi","gl","co.gl","com.gl","edu.gl","net.gl","org.gl","gm","gn","ac.gn","com.gn","edu.gn","gov.gn","org.gn","net.gn","gov","gp","com.gp","net.gp","mobi.gp","edu.gp","org.gp","asso.gp","gq","gr","com.gr","edu.gr","net.gr","org.gr","gov.gr","gs","gt","com.gt","edu.gt","gob.gt","ind.gt","mil.gt","net.gt","org.gt","gu","com.gu","edu.gu","gov.gu","guam.gu","info.gu","net.gu","org.gu","web.gu","gw","gy","co.gy","com.gy","edu.gy","gov.gy","net.gy","org.gy","hk","com.hk","edu.hk","gov.hk","idv.hk","net.hk","org.hk","公司.hk","教育.hk","敎育.hk","政府.hk","個人.hk","个人.hk","箇人.hk","網络.hk","网络.hk","组織.hk","網絡.hk","网絡.hk","组织.hk","組織.hk","組织.hk","hm","hn","com.hn","edu.hn","org.hn","net.hn","mil.hn","gob.hn","hr","iz.hr","from.hr","name.hr","com.hr","ht","com.ht","shop.ht","firm.ht","info.ht","adult.ht","net.ht","pro.ht","org.ht","med.ht","art.ht","coop.ht","pol.ht","asso.ht","edu.ht","rel.ht","gouv.ht","perso.ht","hu","co.hu","info.hu","org.hu","priv.hu","sport.hu","tm.hu","2000.hu","agrar.hu","bolt.hu","casino.hu","city.hu","erotica.hu","erotika.hu","film.hu","forum.hu","games.hu","hotel.hu","ingatlan.hu","jogasz.hu","konyvelo.hu","lakas.hu","media.hu","news.hu","reklam.hu","sex.hu","shop.hu","suli.hu","szex.hu","tozsde.hu","utazas.hu","video.hu","id","ac.id","biz.id","co.id","desa.id","go.id","mil.id","my.id","net.id","or.id","ponpes.id","sch.id","web.id","ie","gov.ie","il","ac.il","co.il","gov.il","idf.il","k12.il","muni.il","net.il","org.il","im","ac.im","co.im","com.im","ltd.co.im","net.im","org.im","plc.co.im","tt.im","tv.im","in","co.in","firm.in","net.in","org.in","gen.in","ind.in","nic.in","ac.in","edu.in","res.in","gov.in","mil.in","info","int","eu.int","io","com.io","iq","gov.iq","edu.iq","mil.iq","com.iq","org.iq","net.iq","ir","ac.ir","co.ir","gov.ir","id.ir","net.ir","org.ir","sch.ir","ایران.ir","ايران.ir","is","net.is","com.is","edu.is","gov.is","org.is","int.is","it","gov.it","edu.it","abr.it","abruzzo.it","aosta-valley.it","aostavalley.it","bas.it","basilicata.it","cal.it","calabria.it","cam.it","campania.it","emilia-romagna.it","emiliaromagna.it","emr.it","friuli-v-giulia.it","friuli-ve-giulia.it","friuli-vegiulia.it","friuli-venezia-giulia.it","friuli-veneziagiulia.it","friuli-vgiulia.it","friuliv-giulia.it","friulive-giulia.it","friulivegiulia.it","friulivenezia-giulia.it","friuliveneziagiulia.it","friulivgiulia.it","fvg.it","laz.it","lazio.it","lig.it","liguria.it","lom.it","lombardia.it","lombardy.it","lucania.it","mar.it","marche.it","mol.it","molise.it","piedmont.it","piemonte.it","pmn.it","pug.it","puglia.it","sar.it","sardegna.it","sardinia.it","sic.it","sicilia.it","sicily.it","taa.it","tos.it","toscana.it","trentin-sud-tirol.it","trentin-süd-tirol.it","trentin-sudtirol.it","trentin-südtirol.it","trentin-sued-tirol.it","trentin-suedtirol.it","trentino-a-adige.it","trentino-aadige.it","trentino-alto-adige.it","trentino-altoadige.it","trentino-s-tirol.it","trentino-stirol.it","trentino-sud-tirol.it","trentino-süd-tirol.it","trentino-sudtirol.it","trentino-südtirol.it","trentino-sued-tirol.it","trentino-suedtirol.it","trentino.it","trentinoa-adige.it","trentinoaadige.it","trentinoalto-adige.it","trentinoaltoadige.it","trentinos-tirol.it","trentinostirol.it","trentinosud-tirol.it","trentinosüd-tirol.it","trentinosudtirol.it","trentinosüdtirol.it","trentinosued-tirol.it","trentinosuedtirol.it","trentinsud-tirol.it","trentinsüd-tirol.it","trentinsudtirol.it","trentinsüdtirol.it","trentinsued-tirol.it","trentinsuedtirol.it","tuscany.it","umb.it","umbria.it","val-d-aosta.it","val-daosta.it","vald-aosta.it","valdaosta.it","valle-aosta.it","valle-d-aosta.it","valle-daosta.it","valleaosta.it","valled-aosta.it","valledaosta.it","vallee-aoste.it","vallée-aoste.it","vallee-d-aoste.it","vallée-d-aoste.it","valleeaoste.it","valléeaoste.it","valleedaoste.it","valléedaoste.it","vao.it","vda.it","ven.it","veneto.it","ag.it","agrigento.it","al.it","alessandria.it","alto-adige.it","altoadige.it","an.it","ancona.it","andria-barletta-trani.it","andria-trani-barletta.it","andriabarlettatrani.it","andriatranibarletta.it","ao.it","aosta.it","aoste.it","ap.it","aq.it","aquila.it","ar.it","arezzo.it","ascoli-piceno.it","ascolipiceno.it","asti.it","at.it","av.it","avellino.it","ba.it","balsan-sudtirol.it","balsan-südtirol.it","balsan-suedtirol.it","balsan.it","bari.it","barletta-trani-andria.it","barlettatraniandria.it","belluno.it","benevento.it","bergamo.it","bg.it","bi.it","biella.it","bl.it","bn.it","bo.it","bologna.it","bolzano-altoadige.it","bolzano.it","bozen-sudtirol.it","bozen-südtirol.it","bozen-suedtirol.it","bozen.it","br.it","brescia.it","brindisi.it","bs.it","bt.it","bulsan-sudtirol.it","bulsan-südtirol.it","bulsan-suedtirol.it","bulsan.it","bz.it","ca.it","cagliari.it","caltanissetta.it","campidano-medio.it","campidanomedio.it","campobasso.it","carbonia-iglesias.it","carboniaiglesias.it","carrara-massa.it","carraramassa.it","caserta.it","catania.it","catanzaro.it","cb.it","ce.it","cesena-forli.it","cesena-forlì.it","cesenaforli.it","cesenaforlì.it","ch.it","chieti.it","ci.it","cl.it","cn.it","co.it","como.it","cosenza.it","cr.it","cremona.it","crotone.it","cs.it","ct.it","cuneo.it","cz.it","dell-ogliastra.it","dellogliastra.it","en.it","enna.it","fc.it","fe.it","fermo.it","ferrara.it","fg.it","fi.it","firenze.it","florence.it","fm.it","foggia.it","forli-cesena.it","forlì-cesena.it","forlicesena.it","forlìcesena.it","fr.it","frosinone.it","ge.it","genoa.it","genova.it","go.it","gorizia.it","gr.it","grosseto.it","iglesias-carbonia.it","iglesiascarbonia.it","im.it","imperia.it","is.it","isernia.it","kr.it","la-spezia.it","laquila.it","laspezia.it","latina.it","lc.it","le.it","lecce.it","lecco.it","li.it","livorno.it","lo.it","lodi.it","lt.it","lu.it","lucca.it","macerata.it","mantova.it","massa-carrara.it","massacarrara.it","matera.it","mb.it","mc.it","me.it","medio-campidano.it","mediocampidano.it","messina.it","mi.it","milan.it","milano.it","mn.it","mo.it","modena.it","monza-brianza.it","monza-e-della-brianza.it","monza.it","monzabrianza.it","monzaebrianza.it","monzaedellabrianza.it","ms.it","mt.it","na.it","naples.it","napoli.it","no.it","novara.it","nu.it","nuoro.it","og.it","ogliastra.it","olbia-tempio.it","olbiatempio.it","or.it","oristano.it","ot.it","pa.it","padova.it","padua.it","palermo.it","parma.it","pavia.it","pc.it","pd.it","pe.it","perugia.it","pesaro-urbino.it","pesarourbino.it","pescara.it","pg.it","pi.it","piacenza.it","pisa.it","pistoia.it","pn.it","po.it","pordenone.it","potenza.it","pr.it","prato.it","pt.it","pu.it","pv.it","pz.it","ra.it","ragusa.it","ravenna.it","rc.it","re.it","reggio-calabria.it","reggio-emilia.it","reggiocalabria.it","reggioemilia.it","rg.it","ri.it","rieti.it","rimini.it","rm.it","rn.it","ro.it","roma.it","rome.it","rovigo.it","sa.it","salerno.it","sassari.it","savona.it","si.it","siena.it","siracusa.it","so.it","sondrio.it","sp.it","sr.it","ss.it","suedtirol.it","südtirol.it","sv.it","ta.it","taranto.it","te.it","tempio-olbia.it","tempioolbia.it","teramo.it","terni.it","tn.it","to.it","torino.it","tp.it","tr.it","trani-andria-barletta.it","trani-barletta-andria.it","traniandriabarletta.it","tranibarlettaandria.it","trapani.it","trento.it","treviso.it","trieste.it","ts.it","turin.it","tv.it","ud.it","udine.it","urbino-pesaro.it","urbinopesaro.it","va.it","varese.it","vb.it","vc.it","ve.it","venezia.it","venice.it","verbania.it","vercelli.it","verona.it","vi.it","vibo-valentia.it","vibovalentia.it","vicenza.it","viterbo.it","vr.it","vs.it","vt.it","vv.it","je","co.je","net.je","org.je","*.jm","jo","com.jo","org.jo","net.jo","edu.jo","sch.jo","gov.jo","mil.jo","name.jo","jobs","jp","ac.jp","ad.jp","co.jp","ed.jp","go.jp","gr.jp","lg.jp","ne.jp","or.jp","aichi.jp","akita.jp","aomori.jp","chiba.jp","ehime.jp","fukui.jp","fukuoka.jp","fukushima.jp","gifu.jp","gunma.jp","hiroshima.jp","hokkaido.jp","hyogo.jp","ibaraki.jp","ishikawa.jp","iwate.jp","kagawa.jp","kagoshima.jp","kanagawa.jp","kochi.jp","kumamoto.jp","kyoto.jp","mie.jp","miyagi.jp","miyazaki.jp","nagano.jp","nagasaki.jp","nara.jp","niigata.jp","oita.jp","okayama.jp","okinawa.jp","osaka.jp","saga.jp","saitama.jp","shiga.jp","shimane.jp","shizuoka.jp","tochigi.jp","tokushima.jp","tokyo.jp","tottori.jp","toyama.jp","wakayama.jp","yamagata.jp","yamaguchi.jp","yamanashi.jp","栃木.jp","愛知.jp","愛媛.jp","兵庫.jp","熊本.jp","茨城.jp","北海道.jp","千葉.jp","和歌山.jp","長崎.jp","長野.jp","新潟.jp","青森.jp","静岡.jp","東京.jp","石川.jp","埼玉.jp","三重.jp","京都.jp","佐賀.jp","大分.jp","大阪.jp","奈良.jp","宮城.jp","宮崎.jp","富山.jp","山口.jp","山形.jp","山梨.jp","岩手.jp","岐阜.jp","岡山.jp","島根.jp","広島.jp","徳島.jp","沖縄.jp","滋賀.jp","神奈川.jp","福井.jp","福岡.jp","福島.jp","秋田.jp","群馬.jp","香川.jp","高知.jp","鳥取.jp","鹿児島.jp","*.kawasaki.jp","*.kitakyushu.jp","*.kobe.jp","*.nagoya.jp","*.sapporo.jp","*.sendai.jp","*.yokohama.jp","!city.kawasaki.jp","!city.kitakyushu.jp","!city.kobe.jp","!city.nagoya.jp","!city.sapporo.jp","!city.sendai.jp","!city.yokohama.jp","aisai.aichi.jp","ama.aichi.jp","anjo.aichi.jp","asuke.aichi.jp","chiryu.aichi.jp","chita.aichi.jp","fuso.aichi.jp","gamagori.aichi.jp","handa.aichi.jp","hazu.aichi.jp","hekinan.aichi.jp","higashiura.aichi.jp","ichinomiya.aichi.jp","inazawa.aichi.jp","inuyama.aichi.jp","isshiki.aichi.jp","iwakura.aichi.jp","kanie.aichi.jp","kariya.aichi.jp","kasugai.aichi.jp","kira.aichi.jp","kiyosu.aichi.jp","komaki.aichi.jp","konan.aichi.jp","kota.aichi.jp","mihama.aichi.jp","miyoshi.aichi.jp","nishio.aichi.jp","nisshin.aichi.jp","obu.aichi.jp","oguchi.aichi.jp","oharu.aichi.jp","okazaki.aichi.jp","owariasahi.aichi.jp","seto.aichi.jp","shikatsu.aichi.jp","shinshiro.aichi.jp","shitara.aichi.jp","tahara.aichi.jp","takahama.aichi.jp","tobishima.aichi.jp","toei.aichi.jp","togo.aichi.jp","tokai.aichi.jp","tokoname.aichi.jp","toyoake.aichi.jp","toyohashi.aichi.jp","toyokawa.aichi.jp","toyone.aichi.jp","toyota.aichi.jp","tsushima.aichi.jp","yatomi.aichi.jp","akita.akita.jp","daisen.akita.jp","fujisato.akita.jp","gojome.akita.jp","hachirogata.akita.jp","happou.akita.jp","higashinaruse.akita.jp","honjo.akita.jp","honjyo.akita.jp","ikawa.akita.jp","kamikoani.akita.jp","kamioka.akita.jp","katagami.akita.jp","kazuno.akita.jp","kitaakita.akita.jp","kosaka.akita.jp","kyowa.akita.jp","misato.akita.jp","mitane.akita.jp","moriyoshi.akita.jp","nikaho.akita.jp","noshiro.akita.jp","odate.akita.jp","oga.akita.jp","ogata.akita.jp","semboku.akita.jp","yokote.akita.jp","yurihonjo.akita.jp","aomori.aomori.jp","gonohe.aomori.jp","hachinohe.aomori.jp","hashikami.aomori.jp","hiranai.aomori.jp","hirosaki.aomori.jp","itayanagi.aomori.jp","kuroishi.aomori.jp","misawa.aomori.jp","mutsu.aomori.jp","nakadomari.aomori.jp","noheji.aomori.jp","oirase.aomori.jp","owani.aomori.jp","rokunohe.aomori.jp","sannohe.aomori.jp","shichinohe.aomori.jp","shingo.aomori.jp","takko.aomori.jp","towada.aomori.jp","tsugaru.aomori.jp","tsuruta.aomori.jp","abiko.chiba.jp","asahi.chiba.jp","chonan.chiba.jp","chosei.chiba.jp","choshi.chiba.jp","chuo.chiba.jp","funabashi.chiba.jp","futtsu.chiba.jp","hanamigawa.chiba.jp","ichihara.chiba.jp","ichikawa.chiba.jp","ichinomiya.chiba.jp","inzai.chiba.jp","isumi.chiba.jp","kamagaya.chiba.jp","kamogawa.chiba.jp","kashiwa.chiba.jp","katori.chiba.jp","katsuura.chiba.jp","kimitsu.chiba.jp","kisarazu.chiba.jp","kozaki.chiba.jp","kujukuri.chiba.jp","kyonan.chiba.jp","matsudo.chiba.jp","midori.chiba.jp","mihama.chiba.jp","minamiboso.chiba.jp","mobara.chiba.jp","mutsuzawa.chiba.jp","nagara.chiba.jp","nagareyama.chiba.jp","narashino.chiba.jp","narita.chiba.jp","noda.chiba.jp","oamishirasato.chiba.jp","omigawa.chiba.jp","onjuku.chiba.jp","otaki.chiba.jp","sakae.chiba.jp","sakura.chiba.jp","shimofusa.chiba.jp","shirako.chiba.jp","shiroi.chiba.jp","shisui.chiba.jp","sodegaura.chiba.jp","sosa.chiba.jp","tako.chiba.jp","tateyama.chiba.jp","togane.chiba.jp","tohnosho.chiba.jp","tomisato.chiba.jp","urayasu.chiba.jp","yachimata.chiba.jp","yachiyo.chiba.jp","yokaichiba.chiba.jp","yokoshibahikari.chiba.jp","yotsukaido.chiba.jp","ainan.ehime.jp","honai.ehime.jp","ikata.ehime.jp","imabari.ehime.jp","iyo.ehime.jp","kamijima.ehime.jp","kihoku.ehime.jp","kumakogen.ehime.jp","masaki.ehime.jp","matsuno.ehime.jp","matsuyama.ehime.jp","namikata.ehime.jp","niihama.ehime.jp","ozu.ehime.jp","saijo.ehime.jp","seiyo.ehime.jp","shikokuchuo.ehime.jp","tobe.ehime.jp","toon.ehime.jp","uchiko.ehime.jp","uwajima.ehime.jp","yawatahama.ehime.jp","echizen.fukui.jp","eiheiji.fukui.jp","fukui.fukui.jp","ikeda.fukui.jp","katsuyama.fukui.jp","mihama.fukui.jp","minamiechizen.fukui.jp","obama.fukui.jp","ohi.fukui.jp","ono.fukui.jp","sabae.fukui.jp","sakai.fukui.jp","takahama.fukui.jp","tsuruga.fukui.jp","wakasa.fukui.jp","ashiya.fukuoka.jp","buzen.fukuoka.jp","chikugo.fukuoka.jp","chikuho.fukuoka.jp","chikujo.fukuoka.jp","chikushino.fukuoka.jp","chikuzen.fukuoka.jp","chuo.fukuoka.jp","dazaifu.fukuoka.jp","fukuchi.fukuoka.jp","hakata.fukuoka.jp","higashi.fukuoka.jp","hirokawa.fukuoka.jp","hisayama.fukuoka.jp","iizuka.fukuoka.jp","inatsuki.fukuoka.jp","kaho.fukuoka.jp","kasuga.fukuoka.jp","kasuya.fukuoka.jp","kawara.fukuoka.jp","keisen.fukuoka.jp","koga.fukuoka.jp","kurate.fukuoka.jp","kurogi.fukuoka.jp","kurume.fukuoka.jp","minami.fukuoka.jp","miyako.fukuoka.jp","miyama.fukuoka.jp","miyawaka.fukuoka.jp","mizumaki.fukuoka.jp","munakata.fukuoka.jp","nakagawa.fukuoka.jp","nakama.fukuoka.jp","nishi.fukuoka.jp","nogata.fukuoka.jp","ogori.fukuoka.jp","okagaki.fukuoka.jp","okawa.fukuoka.jp","oki.fukuoka.jp","omuta.fukuoka.jp","onga.fukuoka.jp","onojo.fukuoka.jp","oto.fukuoka.jp","saigawa.fukuoka.jp","sasaguri.fukuoka.jp","shingu.fukuoka.jp","shinyoshitomi.fukuoka.jp","shonai.fukuoka.jp","soeda.fukuoka.jp","sue.fukuoka.jp","tachiarai.fukuoka.jp","tagawa.fukuoka.jp","takata.fukuoka.jp","toho.fukuoka.jp","toyotsu.fukuoka.jp","tsuiki.fukuoka.jp","ukiha.fukuoka.jp","umi.fukuoka.jp","usui.fukuoka.jp","yamada.fukuoka.jp","yame.fukuoka.jp","yanagawa.fukuoka.jp","yukuhashi.fukuoka.jp","aizubange.fukushima.jp","aizumisato.fukushima.jp","aizuwakamatsu.fukushima.jp","asakawa.fukushima.jp","bandai.fukushima.jp","date.fukushima.jp","fukushima.fukushima.jp","furudono.fukushima.jp","futaba.fukushima.jp","hanawa.fukushima.jp","higashi.fukushima.jp","hirata.fukushima.jp","hirono.fukushima.jp","iitate.fukushima.jp","inawashiro.fukushima.jp","ishikawa.fukushima.jp","iwaki.fukushima.jp","izumizaki.fukushima.jp","kagamiishi.fukushima.jp","kaneyama.fukushima.jp","kawamata.fukushima.jp","kitakata.fukushima.jp","kitashiobara.fukushima.jp","koori.fukushima.jp","koriyama.fukushima.jp","kunimi.fukushima.jp","miharu.fukushima.jp","mishima.fukushima.jp","namie.fukushima.jp","nango.fukushima.jp","nishiaizu.fukushima.jp","nishigo.fukushima.jp","okuma.fukushima.jp","omotego.fukushima.jp","ono.fukushima.jp","otama.fukushima.jp","samegawa.fukushima.jp","shimogo.fukushima.jp","shirakawa.fukushima.jp","showa.fukushima.jp","soma.fukushima.jp","sukagawa.fukushima.jp","taishin.fukushima.jp","tamakawa.fukushima.jp","tanagura.fukushima.jp","tenei.fukushima.jp","yabuki.fukushima.jp","yamato.fukushima.jp","yamatsuri.fukushima.jp","yanaizu.fukushima.jp","yugawa.fukushima.jp","anpachi.gifu.jp","ena.gifu.jp","gifu.gifu.jp","ginan.gifu.jp","godo.gifu.jp","gujo.gifu.jp","hashima.gifu.jp","hichiso.gifu.jp","hida.gifu.jp","higashishirakawa.gifu.jp","ibigawa.gifu.jp","ikeda.gifu.jp","kakamigahara.gifu.jp","kani.gifu.jp","kasahara.gifu.jp","kasamatsu.gifu.jp","kawaue.gifu.jp","kitagata.gifu.jp","mino.gifu.jp","minokamo.gifu.jp","mitake.gifu.jp","mizunami.gifu.jp","motosu.gifu.jp","nakatsugawa.gifu.jp","ogaki.gifu.jp","sakahogi.gifu.jp","seki.gifu.jp","sekigahara.gifu.jp","shirakawa.gifu.jp","tajimi.gifu.jp","takayama.gifu.jp","tarui.gifu.jp","toki.gifu.jp","tomika.gifu.jp","wanouchi.gifu.jp","yamagata.gifu.jp","yaotsu.gifu.jp","yoro.gifu.jp","annaka.gunma.jp","chiyoda.gunma.jp","fujioka.gunma.jp","higashiagatsuma.gunma.jp","isesaki.gunma.jp","itakura.gunma.jp","kanna.gunma.jp","kanra.gunma.jp","katashina.gunma.jp","kawaba.gunma.jp","kiryu.gunma.jp","kusatsu.gunma.jp","maebashi.gunma.jp","meiwa.gunma.jp","midori.gunma.jp","minakami.gunma.jp","naganohara.gunma.jp","nakanojo.gunma.jp","nanmoku.gunma.jp","numata.gunma.jp","oizumi.gunma.jp","ora.gunma.jp","ota.gunma.jp","shibukawa.gunma.jp","shimonita.gunma.jp","shinto.gunma.jp","showa.gunma.jp","takasaki.gunma.jp","takayama.gunma.jp","tamamura.gunma.jp","tatebayashi.gunma.jp","tomioka.gunma.jp","tsukiyono.gunma.jp","tsumagoi.gunma.jp","ueno.gunma.jp","yoshioka.gunma.jp","asaminami.hiroshima.jp","daiwa.hiroshima.jp","etajima.hiroshima.jp","fuchu.hiroshima.jp","fukuyama.hiroshima.jp","hatsukaichi.hiroshima.jp","higashihiroshima.hiroshima.jp","hongo.hiroshima.jp","jinsekikogen.hiroshima.jp","kaita.hiroshima.jp","kui.hiroshima.jp","kumano.hiroshima.jp","kure.hiroshima.jp","mihara.hiroshima.jp","miyoshi.hiroshima.jp","naka.hiroshima.jp","onomichi.hiroshima.jp","osakikamijima.hiroshima.jp","otake.hiroshima.jp","saka.hiroshima.jp","sera.hiroshima.jp","seranishi.hiroshima.jp","shinichi.hiroshima.jp","shobara.hiroshima.jp","takehara.hiroshima.jp","abashiri.hokkaido.jp","abira.hokkaido.jp","aibetsu.hokkaido.jp","akabira.hokkaido.jp","akkeshi.hokkaido.jp","asahikawa.hokkaido.jp","ashibetsu.hokkaido.jp","ashoro.hokkaido.jp","assabu.hokkaido.jp","atsuma.hokkaido.jp","bibai.hokkaido.jp","biei.hokkaido.jp","bifuka.hokkaido.jp","bihoro.hokkaido.jp","biratori.hokkaido.jp","chippubetsu.hokkaido.jp","chitose.hokkaido.jp","date.hokkaido.jp","ebetsu.hokkaido.jp","embetsu.hokkaido.jp","eniwa.hokkaido.jp","erimo.hokkaido.jp","esan.hokkaido.jp","esashi.hokkaido.jp","fukagawa.hokkaido.jp","fukushima.hokkaido.jp","furano.hokkaido.jp","furubira.hokkaido.jp","haboro.hokkaido.jp","hakodate.hokkaido.jp","hamatonbetsu.hokkaido.jp","hidaka.hokkaido.jp","higashikagura.hokkaido.jp","higashikawa.hokkaido.jp","hiroo.hokkaido.jp","hokuryu.hokkaido.jp","hokuto.hokkaido.jp","honbetsu.hokkaido.jp","horokanai.hokkaido.jp","horonobe.hokkaido.jp","ikeda.hokkaido.jp","imakane.hokkaido.jp","ishikari.hokkaido.jp","iwamizawa.hokkaido.jp","iwanai.hokkaido.jp","kamifurano.hokkaido.jp","kamikawa.hokkaido.jp","kamishihoro.hokkaido.jp","kamisunagawa.hokkaido.jp","kamoenai.hokkaido.jp","kayabe.hokkaido.jp","kembuchi.hokkaido.jp","kikonai.hokkaido.jp","kimobetsu.hokkaido.jp","kitahiroshima.hokkaido.jp","kitami.hokkaido.jp","kiyosato.hokkaido.jp","koshimizu.hokkaido.jp","kunneppu.hokkaido.jp","kuriyama.hokkaido.jp","kuromatsunai.hokkaido.jp","kushiro.hokkaido.jp","kutchan.hokkaido.jp","kyowa.hokkaido.jp","mashike.hokkaido.jp","matsumae.hokkaido.jp","mikasa.hokkaido.jp","minamifurano.hokkaido.jp","mombetsu.hokkaido.jp","moseushi.hokkaido.jp","mukawa.hokkaido.jp","muroran.hokkaido.jp","naie.hokkaido.jp","nakagawa.hokkaido.jp","nakasatsunai.hokkaido.jp","nakatombetsu.hokkaido.jp","nanae.hokkaido.jp","nanporo.hokkaido.jp","nayoro.hokkaido.jp","nemuro.hokkaido.jp","niikappu.hokkaido.jp","niki.hokkaido.jp","nishiokoppe.hokkaido.jp","noboribetsu.hokkaido.jp","numata.hokkaido.jp","obihiro.hokkaido.jp","obira.hokkaido.jp","oketo.hokkaido.jp","okoppe.hokkaido.jp","otaru.hokkaido.jp","otobe.hokkaido.jp","otofuke.hokkaido.jp","otoineppu.hokkaido.jp","oumu.hokkaido.jp","ozora.hokkaido.jp","pippu.hokkaido.jp","rankoshi.hokkaido.jp","rebun.hokkaido.jp","rikubetsu.hokkaido.jp","rishiri.hokkaido.jp","rishirifuji.hokkaido.jp","saroma.hokkaido.jp","sarufutsu.hokkaido.jp","shakotan.hokkaido.jp","shari.hokkaido.jp","shibecha.hokkaido.jp","shibetsu.hokkaido.jp","shikabe.hokkaido.jp","shikaoi.hokkaido.jp","shimamaki.hokkaido.jp","shimizu.hokkaido.jp","shimokawa.hokkaido.jp","shinshinotsu.hokkaido.jp","shintoku.hokkaido.jp","shiranuka.hokkaido.jp","shiraoi.hokkaido.jp","shiriuchi.hokkaido.jp","sobetsu.hokkaido.jp","sunagawa.hokkaido.jp","taiki.hokkaido.jp","takasu.hokkaido.jp","takikawa.hokkaido.jp","takinoue.hokkaido.jp","teshikaga.hokkaido.jp","tobetsu.hokkaido.jp","tohma.hokkaido.jp","tomakomai.hokkaido.jp","tomari.hokkaido.jp","toya.hokkaido.jp","toyako.hokkaido.jp","toyotomi.hokkaido.jp","toyoura.hokkaido.jp","tsubetsu.hokkaido.jp","tsukigata.hokkaido.jp","urakawa.hokkaido.jp","urausu.hokkaido.jp","uryu.hokkaido.jp","utashinai.hokkaido.jp","wakkanai.hokkaido.jp","wassamu.hokkaido.jp","yakumo.hokkaido.jp","yoichi.hokkaido.jp","aioi.hyogo.jp","akashi.hyogo.jp","ako.hyogo.jp","amagasaki.hyogo.jp","aogaki.hyogo.jp","asago.hyogo.jp","ashiya.hyogo.jp","awaji.hyogo.jp","fukusaki.hyogo.jp","goshiki.hyogo.jp","harima.hyogo.jp","himeji.hyogo.jp","ichikawa.hyogo.jp","inagawa.hyogo.jp","itami.hyogo.jp","kakogawa.hyogo.jp","kamigori.hyogo.jp","kamikawa.hyogo.jp","kasai.hyogo.jp","kasuga.hyogo.jp","kawanishi.hyogo.jp","miki.hyogo.jp","minamiawaji.hyogo.jp","nishinomiya.hyogo.jp","nishiwaki.hyogo.jp","ono.hyogo.jp","sanda.hyogo.jp","sannan.hyogo.jp","sasayama.hyogo.jp","sayo.hyogo.jp","shingu.hyogo.jp","shinonsen.hyogo.jp","shiso.hyogo.jp","sumoto.hyogo.jp","taishi.hyogo.jp","taka.hyogo.jp","takarazuka.hyogo.jp","takasago.hyogo.jp","takino.hyogo.jp","tamba.hyogo.jp","tatsuno.hyogo.jp","toyooka.hyogo.jp","yabu.hyogo.jp","yashiro.hyogo.jp","yoka.hyogo.jp","yokawa.hyogo.jp","ami.ibaraki.jp","asahi.ibaraki.jp","bando.ibaraki.jp","chikusei.ibaraki.jp","daigo.ibaraki.jp","fujishiro.ibaraki.jp","hitachi.ibaraki.jp","hitachinaka.ibaraki.jp","hitachiomiya.ibaraki.jp","hitachiota.ibaraki.jp","ibaraki.ibaraki.jp","ina.ibaraki.jp","inashiki.ibaraki.jp","itako.ibaraki.jp","iwama.ibaraki.jp","joso.ibaraki.jp","kamisu.ibaraki.jp","kasama.ibaraki.jp","kashima.ibaraki.jp","kasumigaura.ibaraki.jp","koga.ibaraki.jp","miho.ibaraki.jp","mito.ibaraki.jp","moriya.ibaraki.jp","naka.ibaraki.jp","namegata.ibaraki.jp","oarai.ibaraki.jp","ogawa.ibaraki.jp","omitama.ibaraki.jp","ryugasaki.ibaraki.jp","sakai.ibaraki.jp","sakuragawa.ibaraki.jp","shimodate.ibaraki.jp","shimotsuma.ibaraki.jp","shirosato.ibaraki.jp","sowa.ibaraki.jp","suifu.ibaraki.jp","takahagi.ibaraki.jp","tamatsukuri.ibaraki.jp","tokai.ibaraki.jp","tomobe.ibaraki.jp","tone.ibaraki.jp","toride.ibaraki.jp","tsuchiura.ibaraki.jp","tsukuba.ibaraki.jp","uchihara.ibaraki.jp","ushiku.ibaraki.jp","yachiyo.ibaraki.jp","yamagata.ibaraki.jp","yawara.ibaraki.jp","yuki.ibaraki.jp","anamizu.ishikawa.jp","hakui.ishikawa.jp","hakusan.ishikawa.jp","kaga.ishikawa.jp","kahoku.ishikawa.jp","kanazawa.ishikawa.jp","kawakita.ishikawa.jp","komatsu.ishikawa.jp","nakanoto.ishikawa.jp","nanao.ishikawa.jp","nomi.ishikawa.jp","nonoichi.ishikawa.jp","noto.ishikawa.jp","shika.ishikawa.jp","suzu.ishikawa.jp","tsubata.ishikawa.jp","tsurugi.ishikawa.jp","uchinada.ishikawa.jp","wajima.ishikawa.jp","fudai.iwate.jp","fujisawa.iwate.jp","hanamaki.iwate.jp","hiraizumi.iwate.jp","hirono.iwate.jp","ichinohe.iwate.jp","ichinoseki.iwate.jp","iwaizumi.iwate.jp","iwate.iwate.jp","joboji.iwate.jp","kamaishi.iwate.jp","kanegasaki.iwate.jp","karumai.iwate.jp","kawai.iwate.jp","kitakami.iwate.jp","kuji.iwate.jp","kunohe.iwate.jp","kuzumaki.iwate.jp","miyako.iwate.jp","mizusawa.iwate.jp","morioka.iwate.jp","ninohe.iwate.jp","noda.iwate.jp","ofunato.iwate.jp","oshu.iwate.jp","otsuchi.iwate.jp","rikuzentakata.iwate.jp","shiwa.iwate.jp","shizukuishi.iwate.jp","sumita.iwate.jp","tanohata.iwate.jp","tono.iwate.jp","yahaba.iwate.jp","yamada.iwate.jp","ayagawa.kagawa.jp","higashikagawa.kagawa.jp","kanonji.kagawa.jp","kotohira.kagawa.jp","manno.kagawa.jp","marugame.kagawa.jp","mitoyo.kagawa.jp","naoshima.kagawa.jp","sanuki.kagawa.jp","tadotsu.kagawa.jp","takamatsu.kagawa.jp","tonosho.kagawa.jp","uchinomi.kagawa.jp","utazu.kagawa.jp","zentsuji.kagawa.jp","akune.kagoshima.jp","amami.kagoshima.jp","hioki.kagoshima.jp","isa.kagoshima.jp","isen.kagoshima.jp","izumi.kagoshima.jp","kagoshima.kagoshima.jp","kanoya.kagoshima.jp","kawanabe.kagoshima.jp","kinko.kagoshima.jp","kouyama.kagoshima.jp","makurazaki.kagoshima.jp","matsumoto.kagoshima.jp","minamitane.kagoshima.jp","nakatane.kagoshima.jp","nishinoomote.kagoshima.jp","satsumasendai.kagoshima.jp","soo.kagoshima.jp","tarumizu.kagoshima.jp","yusui.kagoshima.jp","aikawa.kanagawa.jp","atsugi.kanagawa.jp","ayase.kanagawa.jp","chigasaki.kanagawa.jp","ebina.kanagawa.jp","fujisawa.kanagawa.jp","hadano.kanagawa.jp","hakone.kanagawa.jp","hiratsuka.kanagawa.jp","isehara.kanagawa.jp","kaisei.kanagawa.jp","kamakura.kanagawa.jp","kiyokawa.kanagawa.jp","matsuda.kanagawa.jp","minamiashigara.kanagawa.jp","miura.kanagawa.jp","nakai.kanagawa.jp","ninomiya.kanagawa.jp","odawara.kanagawa.jp","oi.kanagawa.jp","oiso.kanagawa.jp","sagamihara.kanagawa.jp","samukawa.kanagawa.jp","tsukui.kanagawa.jp","yamakita.kanagawa.jp","yamato.kanagawa.jp","yokosuka.kanagawa.jp","yugawara.kanagawa.jp","zama.kanagawa.jp","zushi.kanagawa.jp","aki.kochi.jp","geisei.kochi.jp","hidaka.kochi.jp","higashitsuno.kochi.jp","ino.kochi.jp","kagami.kochi.jp","kami.kochi.jp","kitagawa.kochi.jp","kochi.kochi.jp","mihara.kochi.jp","motoyama.kochi.jp","muroto.kochi.jp","nahari.kochi.jp","nakamura.kochi.jp","nankoku.kochi.jp","nishitosa.kochi.jp","niyodogawa.kochi.jp","ochi.kochi.jp","okawa.kochi.jp","otoyo.kochi.jp","otsuki.kochi.jp","sakawa.kochi.jp","sukumo.kochi.jp","susaki.kochi.jp","tosa.kochi.jp","tosashimizu.kochi.jp","toyo.kochi.jp","tsuno.kochi.jp","umaji.kochi.jp","yasuda.kochi.jp","yusuhara.kochi.jp","amakusa.kumamoto.jp","arao.kumamoto.jp","aso.kumamoto.jp","choyo.kumamoto.jp","gyokuto.kumamoto.jp","kamiamakusa.kumamoto.jp","kikuchi.kumamoto.jp","kumamoto.kumamoto.jp","mashiki.kumamoto.jp","mifune.kumamoto.jp","minamata.kumamoto.jp","minamioguni.kumamoto.jp","nagasu.kumamoto.jp","nishihara.kumamoto.jp","oguni.kumamoto.jp","ozu.kumamoto.jp","sumoto.kumamoto.jp","takamori.kumamoto.jp","uki.kumamoto.jp","uto.kumamoto.jp","yamaga.kumamoto.jp","yamato.kumamoto.jp","yatsushiro.kumamoto.jp","ayabe.kyoto.jp","fukuchiyama.kyoto.jp","higashiyama.kyoto.jp","ide.kyoto.jp","ine.kyoto.jp","joyo.kyoto.jp","kameoka.kyoto.jp","kamo.kyoto.jp","kita.kyoto.jp","kizu.kyoto.jp","kumiyama.kyoto.jp","kyotamba.kyoto.jp","kyotanabe.kyoto.jp","kyotango.kyoto.jp","maizuru.kyoto.jp","minami.kyoto.jp","minamiyamashiro.kyoto.jp","miyazu.kyoto.jp","muko.kyoto.jp","nagaokakyo.kyoto.jp","nakagyo.kyoto.jp","nantan.kyoto.jp","oyamazaki.kyoto.jp","sakyo.kyoto.jp","seika.kyoto.jp","tanabe.kyoto.jp","uji.kyoto.jp","ujitawara.kyoto.jp","wazuka.kyoto.jp","yamashina.kyoto.jp","yawata.kyoto.jp","asahi.mie.jp","inabe.mie.jp","ise.mie.jp","kameyama.mie.jp","kawagoe.mie.jp","kiho.mie.jp","kisosaki.mie.jp","kiwa.mie.jp","komono.mie.jp","kumano.mie.jp","kuwana.mie.jp","matsusaka.mie.jp","meiwa.mie.jp","mihama.mie.jp","minamiise.mie.jp","misugi.mie.jp","miyama.mie.jp","nabari.mie.jp","shima.mie.jp","suzuka.mie.jp","tado.mie.jp","taiki.mie.jp","taki.mie.jp","tamaki.mie.jp","toba.mie.jp","tsu.mie.jp","udono.mie.jp","ureshino.mie.jp","watarai.mie.jp","yokkaichi.mie.jp","furukawa.miyagi.jp","higashimatsushima.miyagi.jp","ishinomaki.miyagi.jp","iwanuma.miyagi.jp","kakuda.miyagi.jp","kami.miyagi.jp","kawasaki.miyagi.jp","marumori.miyagi.jp","matsushima.miyagi.jp","minamisanriku.miyagi.jp","misato.miyagi.jp","murata.miyagi.jp","natori.miyagi.jp","ogawara.miyagi.jp","ohira.miyagi.jp","onagawa.miyagi.jp","osaki.miyagi.jp","rifu.miyagi.jp","semine.miyagi.jp","shibata.miyagi.jp","shichikashuku.miyagi.jp","shikama.miyagi.jp","shiogama.miyagi.jp","shiroishi.miyagi.jp","tagajo.miyagi.jp","taiwa.miyagi.jp","tome.miyagi.jp","tomiya.miyagi.jp","wakuya.miyagi.jp","watari.miyagi.jp","yamamoto.miyagi.jp","zao.miyagi.jp","aya.miyazaki.jp","ebino.miyazaki.jp","gokase.miyazaki.jp","hyuga.miyazaki.jp","kadogawa.miyazaki.jp","kawaminami.miyazaki.jp","kijo.miyazaki.jp","kitagawa.miyazaki.jp","kitakata.miyazaki.jp","kitaura.miyazaki.jp","kobayashi.miyazaki.jp","kunitomi.miyazaki.jp","kushima.miyazaki.jp","mimata.miyazaki.jp","miyakonojo.miyazaki.jp","miyazaki.miyazaki.jp","morotsuka.miyazaki.jp","nichinan.miyazaki.jp","nishimera.miyazaki.jp","nobeoka.miyazaki.jp","saito.miyazaki.jp","shiiba.miyazaki.jp","shintomi.miyazaki.jp","takaharu.miyazaki.jp","takanabe.miyazaki.jp","takazaki.miyazaki.jp","tsuno.miyazaki.jp","achi.nagano.jp","agematsu.nagano.jp","anan.nagano.jp","aoki.nagano.jp","asahi.nagano.jp","azumino.nagano.jp","chikuhoku.nagano.jp","chikuma.nagano.jp","chino.nagano.jp","fujimi.nagano.jp","hakuba.nagano.jp","hara.nagano.jp","hiraya.nagano.jp","iida.nagano.jp","iijima.nagano.jp","iiyama.nagano.jp","iizuna.nagano.jp","ikeda.nagano.jp","ikusaka.nagano.jp","ina.nagano.jp","karuizawa.nagano.jp","kawakami.nagano.jp","kiso.nagano.jp","kisofukushima.nagano.jp","kitaaiki.nagano.jp","komagane.nagano.jp","komoro.nagano.jp","matsukawa.nagano.jp","matsumoto.nagano.jp","miasa.nagano.jp","minamiaiki.nagano.jp","minamimaki.nagano.jp","minamiminowa.nagano.jp","minowa.nagano.jp","miyada.nagano.jp","miyota.nagano.jp","mochizuki.nagano.jp","nagano.nagano.jp","nagawa.nagano.jp","nagiso.nagano.jp","nakagawa.nagano.jp","nakano.nagano.jp","nozawaonsen.nagano.jp","obuse.nagano.jp","ogawa.nagano.jp","okaya.nagano.jp","omachi.nagano.jp","omi.nagano.jp","ookuwa.nagano.jp","ooshika.nagano.jp","otaki.nagano.jp","otari.nagano.jp","sakae.nagano.jp","sakaki.nagano.jp","saku.nagano.jp","sakuho.nagano.jp","shimosuwa.nagano.jp","shinanomachi.nagano.jp","shiojiri.nagano.jp","suwa.nagano.jp","suzaka.nagano.jp","takagi.nagano.jp","takamori.nagano.jp","takayama.nagano.jp","tateshina.nagano.jp","tatsuno.nagano.jp","togakushi.nagano.jp","togura.nagano.jp","tomi.nagano.jp","ueda.nagano.jp","wada.nagano.jp","yamagata.nagano.jp","yamanouchi.nagano.jp","yasaka.nagano.jp","yasuoka.nagano.jp","chijiwa.nagasaki.jp","futsu.nagasaki.jp","goto.nagasaki.jp","hasami.nagasaki.jp","hirado.nagasaki.jp","iki.nagasaki.jp","isahaya.nagasaki.jp","kawatana.nagasaki.jp","kuchinotsu.nagasaki.jp","matsuura.nagasaki.jp","nagasaki.nagasaki.jp","obama.nagasaki.jp","omura.nagasaki.jp","oseto.nagasaki.jp","saikai.nagasaki.jp","sasebo.nagasaki.jp","seihi.nagasaki.jp","shimabara.nagasaki.jp","shinkamigoto.nagasaki.jp","togitsu.nagasaki.jp","tsushima.nagasaki.jp","unzen.nagasaki.jp","ando.nara.jp","gose.nara.jp","heguri.nara.jp","higashiyoshino.nara.jp","ikaruga.nara.jp","ikoma.nara.jp","kamikitayama.nara.jp","kanmaki.nara.jp","kashiba.nara.jp","kashihara.nara.jp","katsuragi.nara.jp","kawai.nara.jp","kawakami.nara.jp","kawanishi.nara.jp","koryo.nara.jp","kurotaki.nara.jp","mitsue.nara.jp","miyake.nara.jp","nara.nara.jp","nosegawa.nara.jp","oji.nara.jp","ouda.nara.jp","oyodo.nara.jp","sakurai.nara.jp","sango.nara.jp","shimoichi.nara.jp","shimokitayama.nara.jp","shinjo.nara.jp","soni.nara.jp","takatori.nara.jp","tawaramoto.nara.jp","tenkawa.nara.jp","tenri.nara.jp","uda.nara.jp","yamatokoriyama.nara.jp","yamatotakada.nara.jp","yamazoe.nara.jp","yoshino.nara.jp","aga.niigata.jp","agano.niigata.jp","gosen.niigata.jp","itoigawa.niigata.jp","izumozaki.niigata.jp","joetsu.niigata.jp","kamo.niigata.jp","kariwa.niigata.jp","kashiwazaki.niigata.jp","minamiuonuma.niigata.jp","mitsuke.niigata.jp","muika.niigata.jp","murakami.niigata.jp","myoko.niigata.jp","nagaoka.niigata.jp","niigata.niigata.jp","ojiya.niigata.jp","omi.niigata.jp","sado.niigata.jp","sanjo.niigata.jp","seiro.niigata.jp","seirou.niigata.jp","sekikawa.niigata.jp","shibata.niigata.jp","tagami.niigata.jp","tainai.niigata.jp","tochio.niigata.jp","tokamachi.niigata.jp","tsubame.niigata.jp","tsunan.niigata.jp","uonuma.niigata.jp","yahiko.niigata.jp","yoita.niigata.jp","yuzawa.niigata.jp","beppu.oita.jp","bungoono.oita.jp","bungotakada.oita.jp","hasama.oita.jp","hiji.oita.jp","himeshima.oita.jp","hita.oita.jp","kamitsue.oita.jp","kokonoe.oita.jp","kuju.oita.jp","kunisaki.oita.jp","kusu.oita.jp","oita.oita.jp","saiki.oita.jp","taketa.oita.jp","tsukumi.oita.jp","usa.oita.jp","usuki.oita.jp","yufu.oita.jp","akaiwa.okayama.jp","asakuchi.okayama.jp","bizen.okayama.jp","hayashima.okayama.jp","ibara.okayama.jp","kagamino.okayama.jp","kasaoka.okayama.jp","kibichuo.okayama.jp","kumenan.okayama.jp","kurashiki.okayama.jp","maniwa.okayama.jp","misaki.okayama.jp","nagi.okayama.jp","niimi.okayama.jp","nishiawakura.okayama.jp","okayama.okayama.jp","satosho.okayama.jp","setouchi.okayama.jp","shinjo.okayama.jp","shoo.okayama.jp","soja.okayama.jp","takahashi.okayama.jp","tamano.okayama.jp","tsuyama.okayama.jp","wake.okayama.jp","yakage.okayama.jp","aguni.okinawa.jp","ginowan.okinawa.jp","ginoza.okinawa.jp","gushikami.okinawa.jp","haebaru.okinawa.jp","higashi.okinawa.jp","hirara.okinawa.jp","iheya.okinawa.jp","ishigaki.okinawa.jp","ishikawa.okinawa.jp","itoman.okinawa.jp","izena.okinawa.jp","kadena.okinawa.jp","kin.okinawa.jp","kitadaito.okinawa.jp","kitanakagusuku.okinawa.jp","kumejima.okinawa.jp","kunigami.okinawa.jp","minamidaito.okinawa.jp","motobu.okinawa.jp","nago.okinawa.jp","naha.okinawa.jp","nakagusuku.okinawa.jp","nakijin.okinawa.jp","nanjo.okinawa.jp","nishihara.okinawa.jp","ogimi.okinawa.jp","okinawa.okinawa.jp","onna.okinawa.jp","shimoji.okinawa.jp","taketomi.okinawa.jp","tarama.okinawa.jp","tokashiki.okinawa.jp","tomigusuku.okinawa.jp","tonaki.okinawa.jp","urasoe.okinawa.jp","uruma.okinawa.jp","yaese.okinawa.jp","yomitan.okinawa.jp","yonabaru.okinawa.jp","yonaguni.okinawa.jp","zamami.okinawa.jp","abeno.osaka.jp","chihayaakasaka.osaka.jp","chuo.osaka.jp","daito.osaka.jp","fujiidera.osaka.jp","habikino.osaka.jp","hannan.osaka.jp","higashiosaka.osaka.jp","higashisumiyoshi.osaka.jp","higashiyodogawa.osaka.jp","hirakata.osaka.jp","ibaraki.osaka.jp","ikeda.osaka.jp","izumi.osaka.jp","izumiotsu.osaka.jp","izumisano.osaka.jp","kadoma.osaka.jp","kaizuka.osaka.jp","kanan.osaka.jp","kashiwara.osaka.jp","katano.osaka.jp","kawachinagano.osaka.jp","kishiwada.osaka.jp","kita.osaka.jp","kumatori.osaka.jp","matsubara.osaka.jp","minato.osaka.jp","minoh.osaka.jp","misaki.osaka.jp","moriguchi.osaka.jp","neyagawa.osaka.jp","nishi.osaka.jp","nose.osaka.jp","osakasayama.osaka.jp","sakai.osaka.jp","sayama.osaka.jp","sennan.osaka.jp","settsu.osaka.jp","shijonawate.osaka.jp","shimamoto.osaka.jp","suita.osaka.jp","tadaoka.osaka.jp","taishi.osaka.jp","tajiri.osaka.jp","takaishi.osaka.jp","takatsuki.osaka.jp","tondabayashi.osaka.jp","toyonaka.osaka.jp","toyono.osaka.jp","yao.osaka.jp","ariake.saga.jp","arita.saga.jp","fukudomi.saga.jp","genkai.saga.jp","hamatama.saga.jp","hizen.saga.jp","imari.saga.jp","kamimine.saga.jp","kanzaki.saga.jp","karatsu.saga.jp","kashima.saga.jp","kitagata.saga.jp","kitahata.saga.jp","kiyama.saga.jp","kouhoku.saga.jp","kyuragi.saga.jp","nishiarita.saga.jp","ogi.saga.jp","omachi.saga.jp","ouchi.saga.jp","saga.saga.jp","shiroishi.saga.jp","taku.saga.jp","tara.saga.jp","tosu.saga.jp","yoshinogari.saga.jp","arakawa.saitama.jp","asaka.saitama.jp","chichibu.saitama.jp","fujimi.saitama.jp","fujimino.saitama.jp","fukaya.saitama.jp","hanno.saitama.jp","hanyu.saitama.jp","hasuda.saitama.jp","hatogaya.saitama.jp","hatoyama.saitama.jp","hidaka.saitama.jp","higashichichibu.saitama.jp","higashimatsuyama.saitama.jp","honjo.saitama.jp","ina.saitama.jp","iruma.saitama.jp","iwatsuki.saitama.jp","kamiizumi.saitama.jp","kamikawa.saitama.jp","kamisato.saitama.jp","kasukabe.saitama.jp","kawagoe.saitama.jp","kawaguchi.saitama.jp","kawajima.saitama.jp","kazo.saitama.jp","kitamoto.saitama.jp","koshigaya.saitama.jp","kounosu.saitama.jp","kuki.saitama.jp","kumagaya.saitama.jp","matsubushi.saitama.jp","minano.saitama.jp","misato.saitama.jp","miyashiro.saitama.jp","miyoshi.saitama.jp","moroyama.saitama.jp","nagatoro.saitama.jp","namegawa.saitama.jp","niiza.saitama.jp","ogano.saitama.jp","ogawa.saitama.jp","ogose.saitama.jp","okegawa.saitama.jp","omiya.saitama.jp","otaki.saitama.jp","ranzan.saitama.jp","ryokami.saitama.jp","saitama.saitama.jp","sakado.saitama.jp","satte.saitama.jp","sayama.saitama.jp","shiki.saitama.jp","shiraoka.saitama.jp","soka.saitama.jp","sugito.saitama.jp","toda.saitama.jp","tokigawa.saitama.jp","tokorozawa.saitama.jp","tsurugashima.saitama.jp","urawa.saitama.jp","warabi.saitama.jp","yashio.saitama.jp","yokoze.saitama.jp","yono.saitama.jp","yorii.saitama.jp","yoshida.saitama.jp","yoshikawa.saitama.jp","yoshimi.saitama.jp","aisho.shiga.jp","gamo.shiga.jp","higashiomi.shiga.jp","hikone.shiga.jp","koka.shiga.jp","konan.shiga.jp","kosei.shiga.jp","koto.shiga.jp","kusatsu.shiga.jp","maibara.shiga.jp","moriyama.shiga.jp","nagahama.shiga.jp","nishiazai.shiga.jp","notogawa.shiga.jp","omihachiman.shiga.jp","otsu.shiga.jp","ritto.shiga.jp","ryuoh.shiga.jp","takashima.shiga.jp","takatsuki.shiga.jp","torahime.shiga.jp","toyosato.shiga.jp","yasu.shiga.jp","akagi.shimane.jp","ama.shimane.jp","gotsu.shimane.jp","hamada.shimane.jp","higashiizumo.shimane.jp","hikawa.shimane.jp","hikimi.shimane.jp","izumo.shimane.jp","kakinoki.shimane.jp","masuda.shimane.jp","matsue.shimane.jp","misato.shimane.jp","nishinoshima.shimane.jp","ohda.shimane.jp","okinoshima.shimane.jp","okuizumo.shimane.jp","shimane.shimane.jp","tamayu.shimane.jp","tsuwano.shimane.jp","unnan.shimane.jp","yakumo.shimane.jp","yasugi.shimane.jp","yatsuka.shimane.jp","arai.shizuoka.jp","atami.shizuoka.jp","fuji.shizuoka.jp","fujieda.shizuoka.jp","fujikawa.shizuoka.jp","fujinomiya.shizuoka.jp","fukuroi.shizuoka.jp","gotemba.shizuoka.jp","haibara.shizuoka.jp","hamamatsu.shizuoka.jp","higashiizu.shizuoka.jp","ito.shizuoka.jp","iwata.shizuoka.jp","izu.shizuoka.jp","izunokuni.shizuoka.jp","kakegawa.shizuoka.jp","kannami.shizuoka.jp","kawanehon.shizuoka.jp","kawazu.shizuoka.jp","kikugawa.shizuoka.jp","kosai.shizuoka.jp","makinohara.shizuoka.jp","matsuzaki.shizuoka.jp","minamiizu.shizuoka.jp","mishima.shizuoka.jp","morimachi.shizuoka.jp","nishiizu.shizuoka.jp","numazu.shizuoka.jp","omaezaki.shizuoka.jp","shimada.shizuoka.jp","shimizu.shizuoka.jp","shimoda.shizuoka.jp","shizuoka.shizuoka.jp","susono.shizuoka.jp","yaizu.shizuoka.jp","yoshida.shizuoka.jp","ashikaga.tochigi.jp","bato.tochigi.jp","haga.tochigi.jp","ichikai.tochigi.jp","iwafune.tochigi.jp","kaminokawa.tochigi.jp","kanuma.tochigi.jp","karasuyama.tochigi.jp","kuroiso.tochigi.jp","mashiko.tochigi.jp","mibu.tochigi.jp","moka.tochigi.jp","motegi.tochigi.jp","nasu.tochigi.jp","nasushiobara.tochigi.jp","nikko.tochigi.jp","nishikata.tochigi.jp","nogi.tochigi.jp","ohira.tochigi.jp","ohtawara.tochigi.jp","oyama.tochigi.jp","sakura.tochigi.jp","sano.tochigi.jp","shimotsuke.tochigi.jp","shioya.tochigi.jp","takanezawa.tochigi.jp","tochigi.tochigi.jp","tsuga.tochigi.jp","ujiie.tochigi.jp","utsunomiya.tochigi.jp","yaita.tochigi.jp","aizumi.tokushima.jp","anan.tokushima.jp","ichiba.tokushima.jp","itano.tokushima.jp","kainan.tokushima.jp","komatsushima.tokushima.jp","matsushige.tokushima.jp","mima.tokushima.jp","minami.tokushima.jp","miyoshi.tokushima.jp","mugi.tokushima.jp","nakagawa.tokushima.jp","naruto.tokushima.jp","sanagochi.tokushima.jp","shishikui.tokushima.jp","tokushima.tokushima.jp","wajiki.tokushima.jp","adachi.tokyo.jp","akiruno.tokyo.jp","akishima.tokyo.jp","aogashima.tokyo.jp","arakawa.tokyo.jp","bunkyo.tokyo.jp","chiyoda.tokyo.jp","chofu.tokyo.jp","chuo.tokyo.jp","edogawa.tokyo.jp","fuchu.tokyo.jp","fussa.tokyo.jp","hachijo.tokyo.jp","hachioji.tokyo.jp","hamura.tokyo.jp","higashikurume.tokyo.jp","higashimurayama.tokyo.jp","higashiyamato.tokyo.jp","hino.tokyo.jp","hinode.tokyo.jp","hinohara.tokyo.jp","inagi.tokyo.jp","itabashi.tokyo.jp","katsushika.tokyo.jp","kita.tokyo.jp","kiyose.tokyo.jp","kodaira.tokyo.jp","koganei.tokyo.jp","kokubunji.tokyo.jp","komae.tokyo.jp","koto.tokyo.jp","kouzushima.tokyo.jp","kunitachi.tokyo.jp","machida.tokyo.jp","meguro.tokyo.jp","minato.tokyo.jp","mitaka.tokyo.jp","mizuho.tokyo.jp","musashimurayama.tokyo.jp","musashino.tokyo.jp","nakano.tokyo.jp","nerima.tokyo.jp","ogasawara.tokyo.jp","okutama.tokyo.jp","ome.tokyo.jp","oshima.tokyo.jp","ota.tokyo.jp","setagaya.tokyo.jp","shibuya.tokyo.jp","shinagawa.tokyo.jp","shinjuku.tokyo.jp","suginami.tokyo.jp","sumida.tokyo.jp","tachikawa.tokyo.jp","taito.tokyo.jp","tama.tokyo.jp","toshima.tokyo.jp","chizu.tottori.jp","hino.tottori.jp","kawahara.tottori.jp","koge.tottori.jp","kotoura.tottori.jp","misasa.tottori.jp","nanbu.tottori.jp","nichinan.tottori.jp","sakaiminato.tottori.jp","tottori.tottori.jp","wakasa.tottori.jp","yazu.tottori.jp","yonago.tottori.jp","asahi.toyama.jp","fuchu.toyama.jp","fukumitsu.toyama.jp","funahashi.toyama.jp","himi.toyama.jp","imizu.toyama.jp","inami.toyama.jp","johana.toyama.jp","kamiichi.toyama.jp","kurobe.toyama.jp","nakaniikawa.toyama.jp","namerikawa.toyama.jp","nanto.toyama.jp","nyuzen.toyama.jp","oyabe.toyama.jp","taira.toyama.jp","takaoka.toyama.jp","tateyama.toyama.jp","toga.toyama.jp","tonami.toyama.jp","toyama.toyama.jp","unazuki.toyama.jp","uozu.toyama.jp","yamada.toyama.jp","arida.wakayama.jp","aridagawa.wakayama.jp","gobo.wakayama.jp","hashimoto.wakayama.jp","hidaka.wakayama.jp","hirogawa.wakayama.jp","inami.wakayama.jp","iwade.wakayama.jp","kainan.wakayama.jp","kamitonda.wakayama.jp","katsuragi.wakayama.jp","kimino.wakayama.jp","kinokawa.wakayama.jp","kitayama.wakayama.jp","koya.wakayama.jp","koza.wakayama.jp","kozagawa.wakayama.jp","kudoyama.wakayama.jp","kushimoto.wakayama.jp","mihama.wakayama.jp","misato.wakayama.jp","nachikatsuura.wakayama.jp","shingu.wakayama.jp","shirahama.wakayama.jp","taiji.wakayama.jp","tanabe.wakayama.jp","wakayama.wakayama.jp","yuasa.wakayama.jp","yura.wakayama.jp","asahi.yamagata.jp","funagata.yamagata.jp","higashine.yamagata.jp","iide.yamagata.jp","kahoku.yamagata.jp","kaminoyama.yamagata.jp","kaneyama.yamagata.jp","kawanishi.yamagata.jp","mamurogawa.yamagata.jp","mikawa.yamagata.jp","murayama.yamagata.jp","nagai.yamagata.jp","nakayama.yamagata.jp","nanyo.yamagata.jp","nishikawa.yamagata.jp","obanazawa.yamagata.jp","oe.yamagata.jp","oguni.yamagata.jp","ohkura.yamagata.jp","oishida.yamagata.jp","sagae.yamagata.jp","sakata.yamagata.jp","sakegawa.yamagata.jp","shinjo.yamagata.jp","shirataka.yamagata.jp","shonai.yamagata.jp","takahata.yamagata.jp","tendo.yamagata.jp","tozawa.yamagata.jp","tsuruoka.yamagata.jp","yamagata.yamagata.jp","yamanobe.yamagata.jp","yonezawa.yamagata.jp","yuza.yamagata.jp","abu.yamaguchi.jp","hagi.yamaguchi.jp","hikari.yamaguchi.jp","hofu.yamaguchi.jp","iwakuni.yamaguchi.jp","kudamatsu.yamaguchi.jp","mitou.yamaguchi.jp","nagato.yamaguchi.jp","oshima.yamaguchi.jp","shimonoseki.yamaguchi.jp","shunan.yamaguchi.jp","tabuse.yamaguchi.jp","tokuyama.yamaguchi.jp","toyota.yamaguchi.jp","ube.yamaguchi.jp","yuu.yamaguchi.jp","chuo.yamanashi.jp","doshi.yamanashi.jp","fuefuki.yamanashi.jp","fujikawa.yamanashi.jp","fujikawaguchiko.yamanashi.jp","fujiyoshida.yamanashi.jp","hayakawa.yamanashi.jp","hokuto.yamanashi.jp","ichikawamisato.yamanashi.jp","kai.yamanashi.jp","kofu.yamanashi.jp","koshu.yamanashi.jp","kosuge.yamanashi.jp","minami-alps.yamanashi.jp","minobu.yamanashi.jp","nakamichi.yamanashi.jp","nanbu.yamanashi.jp","narusawa.yamanashi.jp","nirasaki.yamanashi.jp","nishikatsura.yamanashi.jp","oshino.yamanashi.jp","otsuki.yamanashi.jp","showa.yamanashi.jp","tabayama.yamanashi.jp","tsuru.yamanashi.jp","uenohara.yamanashi.jp","yamanakako.yamanashi.jp","yamanashi.yamanashi.jp","ke","ac.ke","co.ke","go.ke","info.ke","me.ke","mobi.ke","ne.ke","or.ke","sc.ke","kg","org.kg","net.kg","com.kg","edu.kg","gov.kg","mil.kg","*.kh","ki","edu.ki","biz.ki","net.ki","org.ki","gov.ki","info.ki","com.ki","km","org.km","nom.km","gov.km","prd.km","tm.km","edu.km","mil.km","ass.km","com.km","coop.km","asso.km","presse.km","medecin.km","notaires.km","pharmaciens.km","veterinaire.km","gouv.km","kn","net.kn","org.kn","edu.kn","gov.kn","kp","com.kp","edu.kp","gov.kp","org.kp","rep.kp","tra.kp","kr","ac.kr","co.kr","es.kr","go.kr","hs.kr","kg.kr","mil.kr","ms.kr","ne.kr","or.kr","pe.kr","re.kr","sc.kr","busan.kr","chungbuk.kr","chungnam.kr","daegu.kr","daejeon.kr","gangwon.kr","gwangju.kr","gyeongbuk.kr","gyeonggi.kr","gyeongnam.kr","incheon.kr","jeju.kr","jeonbuk.kr","jeonnam.kr","seoul.kr","ulsan.kr","kw","com.kw","edu.kw","emb.kw","gov.kw","ind.kw","net.kw","org.kw","ky","edu.ky","gov.ky","com.ky","org.ky","net.ky","kz","org.kz","edu.kz","net.kz","gov.kz","mil.kz","com.kz","la","int.la","net.la","info.la","edu.la","gov.la","per.la","com.la","org.la","lb","com.lb","edu.lb","gov.lb","net.lb","org.lb","lc","com.lc","net.lc","co.lc","org.lc","edu.lc","gov.lc","li","lk","gov.lk","sch.lk","net.lk","int.lk","com.lk","org.lk","edu.lk","ngo.lk","soc.lk","web.lk","ltd.lk","assn.lk","grp.lk","hotel.lk","ac.lk","lr","com.lr","edu.lr","gov.lr","org.lr","net.lr","ls","ac.ls","biz.ls","co.ls","edu.ls","gov.ls","info.ls","net.ls","org.ls","sc.ls","lt","gov.lt","lu","lv","com.lv","edu.lv","gov.lv","org.lv","mil.lv","id.lv","net.lv","asn.lv","conf.lv","ly","com.ly","net.ly","gov.ly","plc.ly","edu.ly","sch.ly","med.ly","org.ly","id.ly","ma","co.ma","net.ma","gov.ma","org.ma","ac.ma","press.ma","mc","tm.mc","asso.mc","md","me","co.me","net.me","org.me","edu.me","ac.me","gov.me","its.me","priv.me","mg","org.mg","nom.mg","gov.mg","prd.mg","tm.mg","edu.mg","mil.mg","com.mg","co.mg","mh","mil","mk","com.mk","org.mk","net.mk","edu.mk","gov.mk","inf.mk","name.mk","ml","com.ml","edu.ml","gouv.ml","gov.ml","net.ml","org.ml","presse.ml","*.mm","mn","gov.mn","edu.mn","org.mn","mo","com.mo","net.mo","org.mo","edu.mo","gov.mo","mobi","mp","mq","mr","gov.mr","ms","com.ms","edu.ms","gov.ms","net.ms","org.ms","mt","com.mt","edu.mt","net.mt","org.mt","mu","com.mu","net.mu","org.mu","gov.mu","ac.mu","co.mu","or.mu","museum","academy.museum","agriculture.museum","air.museum","airguard.museum","alabama.museum","alaska.museum","amber.museum","ambulance.museum","american.museum","americana.museum","americanantiques.museum","americanart.museum","amsterdam.museum","and.museum","annefrank.museum","anthro.museum","anthropology.museum","antiques.museum","aquarium.museum","arboretum.museum","archaeological.museum","archaeology.museum","architecture.museum","art.museum","artanddesign.museum","artcenter.museum","artdeco.museum","arteducation.museum","artgallery.museum","arts.museum","artsandcrafts.museum","asmatart.museum","assassination.museum","assisi.museum","association.museum","astronomy.museum","atlanta.museum","austin.museum","australia.museum","automotive.museum","aviation.museum","axis.museum","badajoz.museum","baghdad.museum","bahn.museum","bale.museum","baltimore.museum","barcelona.museum","baseball.museum","basel.museum","baths.museum","bauern.museum","beauxarts.museum","beeldengeluid.museum","bellevue.museum","bergbau.museum","berkeley.museum","berlin.museum","bern.museum","bible.museum","bilbao.museum","bill.museum","birdart.museum","birthplace.museum","bonn.museum","boston.museum","botanical.museum","botanicalgarden.museum","botanicgarden.museum","botany.museum","brandywinevalley.museum","brasil.museum","bristol.museum","british.museum","britishcolumbia.museum","broadcast.museum","brunel.museum","brussel.museum","brussels.museum","bruxelles.museum","building.museum","burghof.museum","bus.museum","bushey.museum","cadaques.museum","california.museum","cambridge.museum","can.museum","canada.museum","capebreton.museum","carrier.museum","cartoonart.museum","casadelamoneda.museum","castle.museum","castres.museum","celtic.museum","center.museum","chattanooga.museum","cheltenham.museum","chesapeakebay.museum","chicago.museum","children.museum","childrens.museum","childrensgarden.museum","chiropractic.museum","chocolate.museum","christiansburg.museum","cincinnati.museum","cinema.museum","circus.museum","civilisation.museum","civilization.museum","civilwar.museum","clinton.museum","clock.museum","coal.museum","coastaldefence.museum","cody.museum","coldwar.museum","collection.museum","colonialwilliamsburg.museum","coloradoplateau.museum","columbia.museum","columbus.museum","communication.museum","communications.museum","community.museum","computer.museum","computerhistory.museum","comunicações.museum","contemporary.museum","contemporaryart.museum","convent.museum","copenhagen.museum","corporation.museum","correios-e-telecomunicações.museum","corvette.museum","costume.museum","countryestate.museum","county.museum","crafts.museum","cranbrook.museum","creation.museum","cultural.museum","culturalcenter.museum","culture.museum","cyber.museum","cymru.museum","dali.museum","dallas.museum","database.museum","ddr.museum","decorativearts.museum","delaware.museum","delmenhorst.museum","denmark.museum","depot.museum","design.museum","detroit.museum","dinosaur.museum","discovery.museum","dolls.museum","donostia.museum","durham.museum","eastafrica.museum","eastcoast.museum","education.museum","educational.museum","egyptian.museum","eisenbahn.museum","elburg.museum","elvendrell.museum","embroidery.museum","encyclopedic.museum","england.museum","entomology.museum","environment.museum","environmentalconservation.museum","epilepsy.museum","essex.museum","estate.museum","ethnology.museum","exeter.museum","exhibition.museum","family.museum","farm.museum","farmequipment.museum","farmers.museum","farmstead.museum","field.museum","figueres.museum","filatelia.museum","film.museum","fineart.museum","finearts.museum","finland.museum","flanders.museum","florida.museum","force.museum","fortmissoula.museum","fortworth.museum","foundation.museum","francaise.museum","frankfurt.museum","franziskaner.museum","freemasonry.museum","freiburg.museum","fribourg.museum","frog.museum","fundacio.museum","furniture.museum","gallery.museum","garden.museum","gateway.museum","geelvinck.museum","gemological.museum","geology.museum","georgia.museum","giessen.museum","glas.museum","glass.museum","gorge.museum","grandrapids.museum","graz.museum","guernsey.museum","halloffame.museum","hamburg.museum","handson.museum","harvestcelebration.museum","hawaii.museum","health.museum","heimatunduhren.museum","hellas.museum","helsinki.museum","hembygdsforbund.museum","heritage.museum","histoire.museum","historical.museum","historicalsociety.museum","historichouses.museum","historisch.museum","historisches.museum","history.museum","historyofscience.museum","horology.museum","house.museum","humanities.museum","illustration.museum","imageandsound.museum","indian.museum","indiana.museum","indianapolis.museum","indianmarket.museum","intelligence.museum","interactive.museum","iraq.museum","iron.museum","isleofman.museum","jamison.museum","jefferson.museum","jerusalem.museum","jewelry.museum","jewish.museum","jewishart.museum","jfk.museum","journalism.museum","judaica.museum","judygarland.museum","juedisches.museum","juif.museum","karate.museum","karikatur.museum","kids.museum","koebenhavn.museum","koeln.museum","kunst.museum","kunstsammlung.museum","kunstunddesign.museum","labor.museum","labour.museum","lajolla.museum","lancashire.museum","landes.museum","lans.museum","läns.museum","larsson.museum","lewismiller.museum","lincoln.museum","linz.museum","living.museum","livinghistory.museum","localhistory.museum","london.museum","losangeles.museum","louvre.museum","loyalist.museum","lucerne.museum","luxembourg.museum","luzern.museum","mad.museum","madrid.museum","mallorca.museum","manchester.museum","mansion.museum","mansions.museum","manx.museum","marburg.museum","maritime.museum","maritimo.museum","maryland.museum","marylhurst.museum","media.museum","medical.museum","medizinhistorisches.museum","meeres.museum","memorial.museum","mesaverde.museum","michigan.museum","midatlantic.museum","military.museum","mill.museum","miners.museum","mining.museum","minnesota.museum","missile.museum","missoula.museum","modern.museum","moma.museum","money.museum","monmouth.museum","monticello.museum","montreal.museum","moscow.museum","motorcycle.museum","muenchen.museum","muenster.museum","mulhouse.museum","muncie.museum","museet.museum","museumcenter.museum","museumvereniging.museum","music.museum","national.museum","nationalfirearms.museum","nationalheritage.museum","nativeamerican.museum","naturalhistory.museum","naturalhistorymuseum.museum","naturalsciences.museum","nature.museum","naturhistorisches.museum","natuurwetenschappen.museum","naumburg.museum","naval.museum","nebraska.museum","neues.museum","newhampshire.museum","newjersey.museum","newmexico.museum","newport.museum","newspaper.museum","newyork.museum","niepce.museum","norfolk.museum","north.museum","nrw.museum","nyc.museum","nyny.museum","oceanographic.museum","oceanographique.museum","omaha.museum","online.museum","ontario.museum","openair.museum","oregon.museum","oregontrail.museum","otago.museum","oxford.museum","pacific.museum","paderborn.museum","palace.museum","paleo.museum","palmsprings.museum","panama.museum","paris.museum","pasadena.museum","pharmacy.museum","philadelphia.museum","philadelphiaarea.museum","philately.museum","phoenix.museum","photography.museum","pilots.museum","pittsburgh.museum","planetarium.museum","plantation.museum","plants.museum","plaza.museum","portal.museum","portland.museum","portlligat.museum","posts-and-telecommunications.museum","preservation.museum","presidio.museum","press.museum","project.museum","public.museum","pubol.museum","quebec.museum","railroad.museum","railway.museum","research.museum","resistance.museum","riodejaneiro.museum","rochester.museum","rockart.museum","roma.museum","russia.museum","saintlouis.museum","salem.museum","salvadordali.museum","salzburg.museum","sandiego.museum","sanfrancisco.museum","santabarbara.museum","santacruz.museum","santafe.museum","saskatchewan.museum","satx.museum","savannahga.museum","schlesisches.museum","schoenbrunn.museum","schokoladen.museum","school.museum","schweiz.museum","science.museum","scienceandhistory.museum","scienceandindustry.museum","sciencecenter.museum","sciencecenters.museum","science-fiction.museum","sciencehistory.museum","sciences.museum","sciencesnaturelles.museum","scotland.museum","seaport.museum","settlement.museum","settlers.museum","shell.museum","sherbrooke.museum","sibenik.museum","silk.museum","ski.museum","skole.museum","society.museum","sologne.museum","soundandvision.museum","southcarolina.museum","southwest.museum","space.museum","spy.museum","square.museum","stadt.museum","stalbans.museum","starnberg.museum","state.museum","stateofdelaware.museum","station.museum","steam.museum","steiermark.museum","stjohn.museum","stockholm.museum","stpetersburg.museum","stuttgart.museum","suisse.museum","surgeonshall.museum","surrey.museum","svizzera.museum","sweden.museum","sydney.museum","tank.museum","tcm.museum","technology.museum","telekommunikation.museum","television.museum","texas.museum","textile.museum","theater.museum","time.museum","timekeeping.museum","topology.museum","torino.museum","touch.museum","town.museum","transport.museum","tree.museum","trolley.museum","trust.museum","trustee.museum","uhren.museum","ulm.museum","undersea.museum","university.museum","usa.museum","usantiques.museum","usarts.museum","uscountryestate.museum","usculture.museum","usdecorativearts.museum","usgarden.museum","ushistory.museum","ushuaia.museum","uslivinghistory.museum","utah.museum","uvic.museum","valley.museum","vantaa.museum","versailles.museum","viking.museum","village.museum","virginia.museum","virtual.museum","virtuel.museum","vlaanderen.museum","volkenkunde.museum","wales.museum","wallonie.museum","war.museum","washingtondc.museum","watchandclock.museum","watch-and-clock.museum","western.museum","westfalen.museum","whaling.museum","wildlife.museum","williamsburg.museum","windmill.museum","workshop.museum","york.museum","yorkshire.museum","yosemite.museum","youth.museum","zoological.museum","zoology.museum","ירושלים.museum","иком.museum","mv","aero.mv","biz.mv","com.mv","coop.mv","edu.mv","gov.mv","info.mv","int.mv","mil.mv","museum.mv","name.mv","net.mv","org.mv","pro.mv","mw","ac.mw","biz.mw","co.mw","com.mw","coop.mw","edu.mw","gov.mw","int.mw","museum.mw","net.mw","org.mw","mx","com.mx","org.mx","gob.mx","edu.mx","net.mx","my","com.my","net.my","org.my","gov.my","edu.my","mil.my","name.my","mz","ac.mz","adv.mz","co.mz","edu.mz","gov.mz","mil.mz","net.mz","org.mz","na","info.na","pro.na","name.na","school.na","or.na","dr.na","us.na","mx.na","ca.na","in.na","cc.na","tv.na","ws.na","mobi.na","co.na","com.na","org.na","name","nc","asso.nc","nom.nc","ne","net","nf","com.nf","net.nf","per.nf","rec.nf","web.nf","arts.nf","firm.nf","info.nf","other.nf","store.nf","ng","com.ng","edu.ng","gov.ng","i.ng","mil.ng","mobi.ng","name.ng","net.ng","org.ng","sch.ng","ni","ac.ni","biz.ni","co.ni","com.ni","edu.ni","gob.ni","in.ni","info.ni","int.ni","mil.ni","net.ni","nom.ni","org.ni","web.ni","nl","no","fhs.no","vgs.no","fylkesbibl.no","folkebibl.no","museum.no","idrett.no","priv.no","mil.no","stat.no","dep.no","kommune.no","herad.no","aa.no","ah.no","bu.no","fm.no","hl.no","hm.no","jan-mayen.no","mr.no","nl.no","nt.no","of.no","ol.no","oslo.no","rl.no","sf.no","st.no","svalbard.no","tm.no","tr.no","va.no","vf.no","gs.aa.no","gs.ah.no","gs.bu.no","gs.fm.no","gs.hl.no","gs.hm.no","gs.jan-mayen.no","gs.mr.no","gs.nl.no","gs.nt.no","gs.of.no","gs.ol.no","gs.oslo.no","gs.rl.no","gs.sf.no","gs.st.no","gs.svalbard.no","gs.tm.no","gs.tr.no","gs.va.no","gs.vf.no","akrehamn.no","åkrehamn.no","algard.no","ålgård.no","arna.no","brumunddal.no","bryne.no","bronnoysund.no","brønnøysund.no","drobak.no","drøbak.no","egersund.no","fetsund.no","floro.no","florø.no","fredrikstad.no","hokksund.no","honefoss.no","hønefoss.no","jessheim.no","jorpeland.no","jørpeland.no","kirkenes.no","kopervik.no","krokstadelva.no","langevag.no","langevåg.no","leirvik.no","mjondalen.no","mjøndalen.no","mo-i-rana.no","mosjoen.no","mosjøen.no","nesoddtangen.no","orkanger.no","osoyro.no","osøyro.no","raholt.no","råholt.no","sandnessjoen.no","sandnessjøen.no","skedsmokorset.no","slattum.no","spjelkavik.no","stathelle.no","stavern.no","stjordalshalsen.no","stjørdalshalsen.no","tananger.no","tranby.no","vossevangen.no","afjord.no","åfjord.no","agdenes.no","al.no","ål.no","alesund.no","ålesund.no","alstahaug.no","alta.no","áltá.no","alaheadju.no","álaheadju.no","alvdal.no","amli.no","åmli.no","amot.no","åmot.no","andebu.no","andoy.no","andøy.no","andasuolo.no","ardal.no","årdal.no","aremark.no","arendal.no","ås.no","aseral.no","åseral.no","asker.no","askim.no","askvoll.no","askoy.no","askøy.no","asnes.no","åsnes.no","audnedaln.no","aukra.no","aure.no","aurland.no","aurskog-holand.no","aurskog-høland.no","austevoll.no","austrheim.no","averoy.no","averøy.no","balestrand.no","ballangen.no","balat.no","bálát.no","balsfjord.no","bahccavuotna.no","báhccavuotna.no","bamble.no","bardu.no","beardu.no","beiarn.no","bajddar.no","bájddar.no","baidar.no","báidár.no","berg.no","bergen.no","berlevag.no","berlevåg.no","bearalvahki.no","bearalváhki.no","bindal.no","birkenes.no","bjarkoy.no","bjarkøy.no","bjerkreim.no","bjugn.no","bodo.no","bodø.no","badaddja.no","bådåddjå.no","budejju.no","bokn.no","bremanger.no","bronnoy.no","brønnøy.no","bygland.no","bykle.no","barum.no","bærum.no","bo.telemark.no","bø.telemark.no","bo.nordland.no","bø.nordland.no","bievat.no","bievát.no","bomlo.no","bømlo.no","batsfjord.no","båtsfjord.no","bahcavuotna.no","báhcavuotna.no","dovre.no","drammen.no","drangedal.no","dyroy.no","dyrøy.no","donna.no","dønna.no","eid.no","eidfjord.no","eidsberg.no","eidskog.no","eidsvoll.no","eigersund.no","elverum.no","enebakk.no","engerdal.no","etne.no","etnedal.no","evenes.no","evenassi.no","evenášši.no","evje-og-hornnes.no","farsund.no","fauske.no","fuossko.no","fuoisku.no","fedje.no","fet.no","finnoy.no","finnøy.no","fitjar.no","fjaler.no","fjell.no","flakstad.no","flatanger.no","flekkefjord.no","flesberg.no","flora.no","fla.no","flå.no","folldal.no","forsand.no","fosnes.no","frei.no","frogn.no","froland.no","frosta.no","frana.no","fræna.no","froya.no","frøya.no","fusa.no","fyresdal.no","forde.no","førde.no","gamvik.no","gangaviika.no","gáŋgaviika.no","gaular.no","gausdal.no","gildeskal.no","gildeskål.no","giske.no","gjemnes.no","gjerdrum.no","gjerstad.no","gjesdal.no","gjovik.no","gjøvik.no","gloppen.no","gol.no","gran.no","grane.no","granvin.no","gratangen.no","grimstad.no","grong.no","kraanghke.no","kråanghke.no","grue.no","gulen.no","hadsel.no","halden.no","halsa.no","hamar.no","hamaroy.no","habmer.no","hábmer.no","hapmir.no","hápmir.no","hammerfest.no","hammarfeasta.no","hámmárfeasta.no","haram.no","hareid.no","harstad.no","hasvik.no","aknoluokta.no","ákŋoluokta.no","hattfjelldal.no","aarborte.no","haugesund.no","hemne.no","hemnes.no","hemsedal.no","heroy.more-og-romsdal.no","herøy.møre-og-romsdal.no","heroy.nordland.no","herøy.nordland.no","hitra.no","hjartdal.no","hjelmeland.no","hobol.no","hobøl.no","hof.no","hol.no","hole.no","holmestrand.no","holtalen.no","holtålen.no","hornindal.no","horten.no","hurdal.no","hurum.no","hvaler.no","hyllestad.no","hagebostad.no","hægebostad.no","hoyanger.no","høyanger.no","hoylandet.no","høylandet.no","ha.no","hå.no","ibestad.no","inderoy.no","inderøy.no","iveland.no","jevnaker.no","jondal.no","jolster.no","jølster.no","karasjok.no","karasjohka.no","kárášjohka.no","karlsoy.no","galsa.no","gálsá.no","karmoy.no","karmøy.no","kautokeino.no","guovdageaidnu.no","klepp.no","klabu.no","klæbu.no","kongsberg.no","kongsvinger.no","kragero.no","kragerø.no","kristiansand.no","kristiansund.no","krodsherad.no","krødsherad.no","kvalsund.no","rahkkeravju.no","ráhkkerávju.no","kvam.no","kvinesdal.no","kvinnherad.no","kviteseid.no","kvitsoy.no","kvitsøy.no","kvafjord.no","kvæfjord.no","giehtavuoatna.no","kvanangen.no","kvænangen.no","navuotna.no","návuotna.no","kafjord.no","kåfjord.no","gaivuotna.no","gáivuotna.no","larvik.no","lavangen.no","lavagis.no","loabat.no","loabát.no","lebesby.no","davvesiida.no","leikanger.no","leirfjord.no","leka.no","leksvik.no","lenvik.no","leangaviika.no","leaŋgaviika.no","lesja.no","levanger.no","lier.no","lierne.no","lillehammer.no","lillesand.no","lindesnes.no","lindas.no","lindås.no","lom.no","loppa.no","lahppi.no","láhppi.no","lund.no","lunner.no","luroy.no","lurøy.no","luster.no","lyngdal.no","lyngen.no","ivgu.no","lardal.no","lerdal.no","lærdal.no","lodingen.no","lødingen.no","lorenskog.no","lørenskog.no","loten.no","løten.no","malvik.no","masoy.no","måsøy.no","muosat.no","muosát.no","mandal.no","marker.no","marnardal.no","masfjorden.no","meland.no","meldal.no","melhus.no","meloy.no","meløy.no","meraker.no","meråker.no","moareke.no","moåreke.no","midsund.no","midtre-gauldal.no","modalen.no","modum.no","molde.no","moskenes.no","moss.no","mosvik.no","malselv.no","målselv.no","malatvuopmi.no","málatvuopmi.no","namdalseid.no","aejrie.no","namsos.no","namsskogan.no","naamesjevuemie.no","nååmesjevuemie.no","laakesvuemie.no","nannestad.no","narvik.no","narviika.no","naustdal.no","nedre-eiker.no","nes.akershus.no","nes.buskerud.no","nesna.no","nesodden.no","nesseby.no","unjarga.no","unjárga.no","nesset.no","nissedal.no","nittedal.no","nord-aurdal.no","nord-fron.no","nord-odal.no","norddal.no","nordkapp.no","davvenjarga.no","davvenjárga.no","nordre-land.no","nordreisa.no","raisa.no","ráisa.no","nore-og-uvdal.no","notodden.no","naroy.no","nærøy.no","notteroy.no","nøtterøy.no","odda.no","oksnes.no","øksnes.no","oppdal.no","oppegard.no","oppegård.no","orkdal.no","orland.no","ørland.no","orskog.no","ørskog.no","orsta.no","ørsta.no","os.hedmark.no","os.hordaland.no","osen.no","osteroy.no","osterøy.no","ostre-toten.no","østre-toten.no","overhalla.no","ovre-eiker.no","øvre-eiker.no","oyer.no","øyer.no","oygarden.no","øygarden.no","oystre-slidre.no","øystre-slidre.no","porsanger.no","porsangu.no","porsáŋgu.no","porsgrunn.no","radoy.no","radøy.no","rakkestad.no","rana.no","ruovat.no","randaberg.no","rauma.no","rendalen.no","rennebu.no","rennesoy.no","rennesøy.no","rindal.no","ringebu.no","ringerike.no","ringsaker.no","rissa.no","risor.no","risør.no","roan.no","rollag.no","rygge.no","ralingen.no","rælingen.no","rodoy.no","rødøy.no","romskog.no","rømskog.no","roros.no","røros.no","rost.no","røst.no","royken.no","røyken.no","royrvik.no","røyrvik.no","rade.no","råde.no","salangen.no","siellak.no","saltdal.no","salat.no","sálát.no","sálat.no","samnanger.no","sande.more-og-romsdal.no","sande.møre-og-romsdal.no","sande.vestfold.no","sandefjord.no","sandnes.no","sandoy.no","sandøy.no","sarpsborg.no","sauda.no","sauherad.no","sel.no","selbu.no","selje.no","seljord.no","sigdal.no","siljan.no","sirdal.no","skaun.no","skedsmo.no","ski.no","skien.no","skiptvet.no","skjervoy.no","skjervøy.no","skierva.no","skiervá.no","skjak.no","skjåk.no","skodje.no","skanland.no","skånland.no","skanit.no","skánit.no","smola.no","smøla.no","snillfjord.no","snasa.no","snåsa.no","snoasa.no","snaase.no","snåase.no","sogndal.no","sokndal.no","sola.no","solund.no","songdalen.no","sortland.no","spydeberg.no","stange.no","stavanger.no","steigen.no","steinkjer.no","stjordal.no","stjørdal.no","stokke.no","stor-elvdal.no","stord.no","stordal.no","storfjord.no","omasvuotna.no","strand.no","stranda.no","stryn.no","sula.no","suldal.no","sund.no","sunndal.no","surnadal.no","sveio.no","svelvik.no","sykkylven.no","sogne.no","søgne.no","somna.no","sømna.no","sondre-land.no","søndre-land.no","sor-aurdal.no","sør-aurdal.no","sor-fron.no","sør-fron.no","sor-odal.no","sør-odal.no","sor-varanger.no","sør-varanger.no","matta-varjjat.no","mátta-várjjat.no","sorfold.no","sørfold.no","sorreisa.no","sørreisa.no","sorum.no","sørum.no","tana.no","deatnu.no","time.no","tingvoll.no","tinn.no","tjeldsund.no","dielddanuorri.no","tjome.no","tjøme.no","tokke.no","tolga.no","torsken.no","tranoy.no","tranøy.no","tromso.no","tromsø.no","tromsa.no","romsa.no","trondheim.no","troandin.no","trysil.no","trana.no","træna.no","trogstad.no","trøgstad.no","tvedestrand.no","tydal.no","tynset.no","tysfjord.no","divtasvuodna.no","divttasvuotna.no","tysnes.no","tysvar.no","tysvær.no","tonsberg.no","tønsberg.no","ullensaker.no","ullensvang.no","ulvik.no","utsira.no","vadso.no","vadsø.no","cahcesuolo.no","čáhcesuolo.no","vaksdal.no","valle.no","vang.no","vanylven.no","vardo.no","vardø.no","varggat.no","várggát.no","vefsn.no","vaapste.no","vega.no","vegarshei.no","vegårshei.no","vennesla.no","verdal.no","verran.no","vestby.no","vestnes.no","vestre-slidre.no","vestre-toten.no","vestvagoy.no","vestvågøy.no","vevelstad.no","vik.no","vikna.no","vindafjord.no","volda.no","voss.no","varoy.no","værøy.no","vagan.no","vågan.no","voagat.no","vagsoy.no","vågsøy.no","vaga.no","vågå.no","valer.ostfold.no","våler.østfold.no","valer.hedmark.no","våler.hedmark.no","*.np","nr","biz.nr","info.nr","gov.nr","edu.nr","org.nr","net.nr","com.nr","nu","nz","ac.nz","co.nz","cri.nz","geek.nz","gen.nz","govt.nz","health.nz","iwi.nz","kiwi.nz","maori.nz","mil.nz","māori.nz","net.nz","org.nz","parliament.nz","school.nz","om","co.om","com.om","edu.om","gov.om","med.om","museum.om","net.om","org.om","pro.om","onion","org","pa","ac.pa","gob.pa","com.pa","org.pa","sld.pa","edu.pa","net.pa","ing.pa","abo.pa","med.pa","nom.pa","pe","edu.pe","gob.pe","nom.pe","mil.pe","org.pe","com.pe","net.pe","pf","com.pf","org.pf","edu.pf","*.pg","ph","com.ph","net.ph","org.ph","gov.ph","edu.ph","ngo.ph","mil.ph","i.ph","pk","com.pk","net.pk","edu.pk","org.pk","fam.pk","biz.pk","web.pk","gov.pk","gob.pk","gok.pk","gon.pk","gop.pk","gos.pk","info.pk","pl","com.pl","net.pl","org.pl","aid.pl","agro.pl","atm.pl","auto.pl","biz.pl","edu.pl","gmina.pl","gsm.pl","info.pl","mail.pl","miasta.pl","media.pl","mil.pl","nieruchomosci.pl","nom.pl","pc.pl","powiat.pl","priv.pl","realestate.pl","rel.pl","sex.pl","shop.pl","sklep.pl","sos.pl","szkola.pl","targi.pl","tm.pl","tourism.pl","travel.pl","turystyka.pl","gov.pl","ap.gov.pl","ic.gov.pl","is.gov.pl","us.gov.pl","kmpsp.gov.pl","kppsp.gov.pl","kwpsp.gov.pl","psp.gov.pl","wskr.gov.pl","kwp.gov.pl","mw.gov.pl","ug.gov.pl","um.gov.pl","umig.gov.pl","ugim.gov.pl","upow.gov.pl","uw.gov.pl","starostwo.gov.pl","pa.gov.pl","po.gov.pl","psse.gov.pl","pup.gov.pl","rzgw.gov.pl","sa.gov.pl","so.gov.pl","sr.gov.pl","wsa.gov.pl","sko.gov.pl","uzs.gov.pl","wiih.gov.pl","winb.gov.pl","pinb.gov.pl","wios.gov.pl","witd.gov.pl","wzmiuw.gov.pl","piw.gov.pl","wiw.gov.pl","griw.gov.pl","wif.gov.pl","oum.gov.pl","sdn.gov.pl","zp.gov.pl","uppo.gov.pl","mup.gov.pl","wuoz.gov.pl","konsulat.gov.pl","oirm.gov.pl","augustow.pl","babia-gora.pl","bedzin.pl","beskidy.pl","bialowieza.pl","bialystok.pl","bielawa.pl","bieszczady.pl","boleslawiec.pl","bydgoszcz.pl","bytom.pl","cieszyn.pl","czeladz.pl","czest.pl","dlugoleka.pl","elblag.pl","elk.pl","glogow.pl","gniezno.pl","gorlice.pl","grajewo.pl","ilawa.pl","jaworzno.pl","jelenia-gora.pl","jgora.pl","kalisz.pl","kazimierz-dolny.pl","karpacz.pl","kartuzy.pl","kaszuby.pl","katowice.pl","kepno.pl","ketrzyn.pl","klodzko.pl","kobierzyce.pl","kolobrzeg.pl","konin.pl","konskowola.pl","kutno.pl","lapy.pl","lebork.pl","legnica.pl","lezajsk.pl","limanowa.pl","lomza.pl","lowicz.pl","lubin.pl","lukow.pl","malbork.pl","malopolska.pl","mazowsze.pl","mazury.pl","mielec.pl","mielno.pl","mragowo.pl","naklo.pl","nowaruda.pl","nysa.pl","olawa.pl","olecko.pl","olkusz.pl","olsztyn.pl","opoczno.pl","opole.pl","ostroda.pl","ostroleka.pl","ostrowiec.pl","ostrowwlkp.pl","pila.pl","pisz.pl","podhale.pl","podlasie.pl","polkowice.pl","pomorze.pl","pomorskie.pl","prochowice.pl","pruszkow.pl","przeworsk.pl","pulawy.pl","radom.pl","rawa-maz.pl","rybnik.pl","rzeszow.pl","sanok.pl","sejny.pl","slask.pl","slupsk.pl","sosnowiec.pl","stalowa-wola.pl","skoczow.pl","starachowice.pl","stargard.pl","suwalki.pl","swidnica.pl","swiebodzin.pl","swinoujscie.pl","szczecin.pl","szczytno.pl","tarnobrzeg.pl","tgory.pl","turek.pl","tychy.pl","ustka.pl","walbrzych.pl","warmia.pl","warszawa.pl","waw.pl","wegrow.pl","wielun.pl","wlocl.pl","wloclawek.pl","wodzislaw.pl","wolomin.pl","wroclaw.pl","zachpomor.pl","zagan.pl","zarow.pl","zgora.pl","zgorzelec.pl","pm","pn","gov.pn","co.pn","org.pn","edu.pn","net.pn","post","pr","com.pr","net.pr","org.pr","gov.pr","edu.pr","isla.pr","pro.pr","biz.pr","info.pr","name.pr","est.pr","prof.pr","ac.pr","pro","aaa.pro","aca.pro","acct.pro","avocat.pro","bar.pro","cpa.pro","eng.pro","jur.pro","law.pro","med.pro","recht.pro","ps","edu.ps","gov.ps","sec.ps","plo.ps","com.ps","org.ps","net.ps","pt","net.pt","gov.pt","org.pt","edu.pt","int.pt","publ.pt","com.pt","nome.pt","pw","co.pw","ne.pw","or.pw","ed.pw","go.pw","belau.pw","py","com.py","coop.py","edu.py","gov.py","mil.py","net.py","org.py","qa","com.qa","edu.qa","gov.qa","mil.qa","name.qa","net.qa","org.qa","sch.qa","re","asso.re","com.re","nom.re","ro","arts.ro","com.ro","firm.ro","info.ro","nom.ro","nt.ro","org.ro","rec.ro","store.ro","tm.ro","www.ro","rs","ac.rs","co.rs","edu.rs","gov.rs","in.rs","org.rs","ru","rw","ac.rw","co.rw","coop.rw","gov.rw","mil.rw","net.rw","org.rw","sa","com.sa","net.sa","org.sa","gov.sa","med.sa","pub.sa","edu.sa","sch.sa","sb","com.sb","edu.sb","gov.sb","net.sb","org.sb","sc","com.sc","gov.sc","net.sc","org.sc","edu.sc","sd","com.sd","net.sd","org.sd","edu.sd","med.sd","tv.sd","gov.sd","info.sd","se","a.se","ac.se","b.se","bd.se","brand.se","c.se","d.se","e.se","f.se","fh.se","fhsk.se","fhv.se","g.se","h.se","i.se","k.se","komforb.se","kommunalforbund.se","komvux.se","l.se","lanbib.se","m.se","n.se","naturbruksgymn.se","o.se","org.se","p.se","parti.se","pp.se","press.se","r.se","s.se","t.se","tm.se","u.se","w.se","x.se","y.se","z.se","sg","com.sg","net.sg","org.sg","gov.sg","edu.sg","per.sg","sh","com.sh","net.sh","gov.sh","org.sh","mil.sh","si","sj","sk","sl","com.sl","net.sl","edu.sl","gov.sl","org.sl","sm","sn","art.sn","com.sn","edu.sn","gouv.sn","org.sn","perso.sn","univ.sn","so","com.so","edu.so","gov.so","me.so","net.so","org.so","sr","ss","biz.ss","com.ss","edu.ss","gov.ss","net.ss","org.ss","st","co.st","com.st","consulado.st","edu.st","embaixada.st","gov.st","mil.st","net.st","org.st","principe.st","saotome.st","store.st","su","sv","com.sv","edu.sv","gob.sv","org.sv","red.sv","sx","gov.sx","sy","edu.sy","gov.sy","net.sy","mil.sy","com.sy","org.sy","sz","co.sz","ac.sz","org.sz","tc","td","tel","tf","tg","th","ac.th","co.th","go.th","in.th","mi.th","net.th","or.th","tj","ac.tj","biz.tj","co.tj","com.tj","edu.tj","go.tj","gov.tj","int.tj","mil.tj","name.tj","net.tj","nic.tj","org.tj","test.tj","web.tj","tk","tl","gov.tl","tm","com.tm","co.tm","org.tm","net.tm","nom.tm","gov.tm","mil.tm","edu.tm","tn","com.tn","ens.tn","fin.tn","gov.tn","ind.tn","intl.tn","nat.tn","net.tn","org.tn","info.tn","perso.tn","tourism.tn","edunet.tn","rnrt.tn","rns.tn","rnu.tn","mincom.tn","agrinet.tn","defense.tn","turen.tn","to","com.to","gov.to","net.to","org.to","edu.to","mil.to","tr","av.tr","bbs.tr","bel.tr","biz.tr","com.tr","dr.tr","edu.tr","gen.tr","gov.tr","info.tr","mil.tr","k12.tr","kep.tr","name.tr","net.tr","org.tr","pol.tr","tel.tr","tsk.tr","tv.tr","web.tr","nc.tr","gov.nc.tr","tt","co.tt","com.tt","org.tt","net.tt","biz.tt","info.tt","pro.tt","int.tt","coop.tt","jobs.tt","mobi.tt","travel.tt","museum.tt","aero.tt","name.tt","gov.tt","edu.tt","tv","tw","edu.tw","gov.tw","mil.tw","com.tw","net.tw","org.tw","idv.tw","game.tw","ebiz.tw","club.tw","網路.tw","組織.tw","商業.tw","tz","ac.tz","co.tz","go.tz","hotel.tz","info.tz","me.tz","mil.tz","mobi.tz","ne.tz","or.tz","sc.tz","tv.tz","ua","com.ua","edu.ua","gov.ua","in.ua","net.ua","org.ua","cherkassy.ua","cherkasy.ua","chernigov.ua","chernihiv.ua","chernivtsi.ua","chernovtsy.ua","ck.ua","cn.ua","cr.ua","crimea.ua","cv.ua","dn.ua","dnepropetrovsk.ua","dnipropetrovsk.ua","dominic.ua","donetsk.ua","dp.ua","if.ua","ivano-frankivsk.ua","kh.ua","kharkiv.ua","kharkov.ua","kherson.ua","khmelnitskiy.ua","khmelnytskyi.ua","kiev.ua","kirovograd.ua","km.ua","kr.ua","krym.ua","ks.ua","kv.ua","kyiv.ua","lg.ua","lt.ua","lugansk.ua","lutsk.ua","lv.ua","lviv.ua","mk.ua","mykolaiv.ua","nikolaev.ua","od.ua","odesa.ua","odessa.ua","pl.ua","poltava.ua","rivne.ua","rovno.ua","rv.ua","sb.ua","sebastopol.ua","sevastopol.ua","sm.ua","sumy.ua","te.ua","ternopil.ua","uz.ua","uzhgorod.ua","vinnica.ua","vinnytsia.ua","vn.ua","volyn.ua","yalta.ua","zaporizhzhe.ua","zaporizhzhia.ua","zhitomir.ua","zhytomyr.ua","zp.ua","zt.ua","ug","co.ug","or.ug","ac.ug","sc.ug","go.ug","ne.ug","com.ug","org.ug","uk","ac.uk","co.uk","gov.uk","ltd.uk","me.uk","net.uk","nhs.uk","org.uk","plc.uk","police.uk","*.sch.uk","us","dni.us","fed.us","isa.us","kids.us","nsn.us","ak.us","al.us","ar.us","as.us","az.us","ca.us","co.us","ct.us","dc.us","de.us","fl.us","ga.us","gu.us","hi.us","ia.us","id.us","il.us","in.us","ks.us","ky.us","la.us","ma.us","md.us","me.us","mi.us","mn.us","mo.us","ms.us","mt.us","nc.us","nd.us","ne.us","nh.us","nj.us","nm.us","nv.us","ny.us","oh.us","ok.us","or.us","pa.us","pr.us","ri.us","sc.us","sd.us","tn.us","tx.us","ut.us","vi.us","vt.us","va.us","wa.us","wi.us","wv.us","wy.us","k12.ak.us","k12.al.us","k12.ar.us","k12.as.us","k12.az.us","k12.ca.us","k12.co.us","k12.ct.us","k12.dc.us","k12.de.us","k12.fl.us","k12.ga.us","k12.gu.us","k12.ia.us","k12.id.us","k12.il.us","k12.in.us","k12.ks.us","k12.ky.us","k12.la.us","k12.ma.us","k12.md.us","k12.me.us","k12.mi.us","k12.mn.us","k12.mo.us","k12.ms.us","k12.mt.us","k12.nc.us","k12.ne.us","k12.nh.us","k12.nj.us","k12.nm.us","k12.nv.us","k12.ny.us","k12.oh.us","k12.ok.us","k12.or.us","k12.pa.us","k12.pr.us","k12.ri.us","k12.sc.us","k12.tn.us","k12.tx.us","k12.ut.us","k12.vi.us","k12.vt.us","k12.va.us","k12.wa.us","k12.wi.us","k12.wy.us","cc.ak.us","cc.al.us","cc.ar.us","cc.as.us","cc.az.us","cc.ca.us","cc.co.us","cc.ct.us","cc.dc.us","cc.de.us","cc.fl.us","cc.ga.us","cc.gu.us","cc.hi.us","cc.ia.us","cc.id.us","cc.il.us","cc.in.us","cc.ks.us","cc.ky.us","cc.la.us","cc.ma.us","cc.md.us","cc.me.us","cc.mi.us","cc.mn.us","cc.mo.us","cc.ms.us","cc.mt.us","cc.nc.us","cc.nd.us","cc.ne.us","cc.nh.us","cc.nj.us","cc.nm.us","cc.nv.us","cc.ny.us","cc.oh.us","cc.ok.us","cc.or.us","cc.pa.us","cc.pr.us","cc.ri.us","cc.sc.us","cc.sd.us","cc.tn.us","cc.tx.us","cc.ut.us","cc.vi.us","cc.vt.us","cc.va.us","cc.wa.us","cc.wi.us","cc.wv.us","cc.wy.us","lib.ak.us","lib.al.us","lib.ar.us","lib.as.us","lib.az.us","lib.ca.us","lib.co.us","lib.ct.us","lib.dc.us","lib.fl.us","lib.ga.us","lib.gu.us","lib.hi.us","lib.ia.us","lib.id.us","lib.il.us","lib.in.us","lib.ks.us","lib.ky.us","lib.la.us","lib.ma.us","lib.md.us","lib.me.us","lib.mi.us","lib.mn.us","lib.mo.us","lib.ms.us","lib.mt.us","lib.nc.us","lib.nd.us","lib.ne.us","lib.nh.us","lib.nj.us","lib.nm.us","lib.nv.us","lib.ny.us","lib.oh.us","lib.ok.us","lib.or.us","lib.pa.us","lib.pr.us","lib.ri.us","lib.sc.us","lib.sd.us","lib.tn.us","lib.tx.us","lib.ut.us","lib.vi.us","lib.vt.us","lib.va.us","lib.wa.us","lib.wi.us","lib.wy.us","pvt.k12.ma.us","chtr.k12.ma.us","paroch.k12.ma.us","ann-arbor.mi.us","cog.mi.us","dst.mi.us","eaton.mi.us","gen.mi.us","mus.mi.us","tec.mi.us","washtenaw.mi.us","uy","com.uy","edu.uy","gub.uy","mil.uy","net.uy","org.uy","uz","co.uz","com.uz","net.uz","org.uz","va","vc","com.vc","net.vc","org.vc","gov.vc","mil.vc","edu.vc","ve","arts.ve","co.ve","com.ve","e12.ve","edu.ve","firm.ve","gob.ve","gov.ve","info.ve","int.ve","mil.ve","net.ve","org.ve","rec.ve","store.ve","tec.ve","web.ve","vg","vi","co.vi","com.vi","k12.vi","net.vi","org.vi","vn","com.vn","net.vn","org.vn","edu.vn","gov.vn","int.vn","ac.vn","biz.vn","info.vn","name.vn","pro.vn","health.vn","vu","com.vu","edu.vu","net.vu","org.vu","wf","ws","com.ws","net.ws","org.ws","gov.ws","edu.ws","yt","امارات","հայ","বাংলা","бг","бел","中国","中國","الجزائر","مصر","ею","موريتانيا","გე","ελ","香港","公司.香港","教育.香港","政府.香港","個人.香港","網絡.香港","組織.香港","ಭಾರತ","ଭାରତ","ভাৰত","भारतम्","भारोत","ڀارت","ഭാരതം","भारत","بارت","بھارت","భారత్","ભારત","ਭਾਰਤ","ভারত","இந்தியா","ایران","ايران","عراق","الاردن","한국","қаз","ලංකා","இலங்கை","المغرب","мкд","мон","澳門","澳门","مليسيا","عمان","پاکستان","پاكستان","فلسطين","срб","пр.срб","орг.срб","обр.срб","од.срб","упр.срб","ак.срб","рф","قطر","السعودية","السعودیة","السعودیۃ","السعوديه","سودان","新加坡","சிங்கப்பூர்","سورية","سوريا","ไทย","ศึกษา.ไทย","ธุรกิจ.ไทย","รัฐบาล.ไทย","ทหาร.ไทย","เน็ต.ไทย","องค์กร.ไทย","تونس","台灣","台湾","臺灣","укр","اليمن","xxx","*.ye","ac.za","agric.za","alt.za","co.za","edu.za","gov.za","grondar.za","law.za","mil.za","net.za","ngo.za","nic.za","nis.za","nom.za","org.za","school.za","tm.za","web.za","zm","ac.zm","biz.zm","co.zm","com.zm","edu.zm","gov.zm","info.zm","mil.zm","net.zm","org.zm","sch.zm","zw","ac.zw","co.zw","gov.zw","mil.zw","org.zw","aaa","aarp","abarth","abb","abbott","abbvie","abc","able","abogado","abudhabi","academy","accenture","accountant","accountants","aco","actor","adac","ads","adult","aeg","aetna","afamilycompany","afl","africa","agakhan","agency","aig","aigo","airbus","airforce","airtel","akdn","alfaromeo","alibaba","alipay","allfinanz","allstate","ally","alsace","alstom","amazon","americanexpress","americanfamily","amex","amfam","amica","amsterdam","analytics","android","anquan","anz","aol","apartments","app","apple","aquarelle","arab","aramco","archi","army","art","arte","asda","associates","athleta","attorney","auction","audi","audible","audio","auspost","author","auto","autos","avianca","aws","axa","azure","baby","baidu","banamex","bananarepublic","band","bank","bar","barcelona","barclaycard","barclays","barefoot","bargains","baseball","basketball","bauhaus","bayern","bbc","bbt","bbva","bcg","bcn","beats","beauty","beer","bentley","berlin","best","bestbuy","bet","bharti","bible","bid","bike","bing","bingo","bio","black","blackfriday","blockbuster","blog","bloomberg","blue","bms","bmw","bnpparibas","boats","boehringer","bofa","bom","bond","boo","book","booking","bosch","bostik","boston","bot","boutique","box","bradesco","bridgestone","broadway","broker","brother","brussels","budapest","bugatti","build","builders","business","buy","buzz","bzh","cab","cafe","cal","call","calvinklein","cam","camera","camp","cancerresearch","canon","capetown","capital","capitalone","car","caravan","cards","care","career","careers","cars","casa","case","caseih","cash","casino","catering","catholic","cba","cbn","cbre","cbs","ceb","center","ceo","cern","cfa","cfd","chanel","channel","charity","chase","chat","cheap","chintai","christmas","chrome","church","cipriani","circle","cisco","citadel","citi","citic","city","cityeats","claims","cleaning","click","clinic","clinique","clothing","cloud","club","clubmed","coach","codes","coffee","college","cologne","comcast","commbank","community","company","compare","computer","comsec","condos","construction","consulting","contact","contractors","cooking","cookingchannel","cool","corsica","country","coupon","coupons","courses","cpa","credit","creditcard","creditunion","cricket","crown","crs","cruise","cruises","csc","cuisinella","cymru","cyou","dabur","dad","dance","data","date","dating","datsun","day","dclk","dds","deal","dealer","deals","degree","delivery","dell","deloitte","delta","democrat","dental","dentist","desi","design","dev","dhl","diamonds","diet","digital","direct","directory","discount","discover","dish","diy","dnp","docs","doctor","dog","domains","dot","download","drive","dtv","dubai","duck","dunlop","dupont","durban","dvag","dvr","earth","eat","eco","edeka","education","email","emerck","energy","engineer","engineering","enterprises","epson","equipment","ericsson","erni","esq","estate","esurance","etisalat","eurovision","eus","events","exchange","expert","exposed","express","extraspace","fage","fail","fairwinds","faith","family","fan","fans","farm","farmers","fashion","fast","fedex","feedback","ferrari","ferrero","fiat","fidelity","fido","film","final","finance","financial","fire","firestone","firmdale","fish","fishing","fit","fitness","flickr","flights","flir","florist","flowers","fly","foo","food","foodnetwork","football","ford","forex","forsale","forum","foundation","fox","free","fresenius","frl","frogans","frontdoor","frontier","ftr","fujitsu","fujixerox","fun","fund","furniture","futbol","fyi","gal","gallery","gallo","gallup","game","games","gap","garden","gay","gbiz","gdn","gea","gent","genting","george","ggee","gift","gifts","gives","giving","glade","glass","gle","global","globo","gmail","gmbh","gmo","gmx","godaddy","gold","goldpoint","golf","goo","goodyear","goog","google","gop","got","grainger","graphics","gratis","green","gripe","grocery","group","guardian","gucci","guge","guide","guitars","guru","hair","hamburg","hangout","haus","hbo","hdfc","hdfcbank","health","healthcare","help","helsinki","here","hermes","hgtv","hiphop","hisamitsu","hitachi","hiv","hkt","hockey","holdings","holiday","homedepot","homegoods","homes","homesense","honda","horse","hospital","host","hosting","hot","hoteles","hotels","hotmail","house","how","hsbc","hughes","hyatt","hyundai","ibm","icbc","ice","icu","ieee","ifm","ikano","imamat","imdb","immo","immobilien","inc","industries","infiniti","ing","ink","institute","insurance","insure","intel","international","intuit","investments","ipiranga","irish","ismaili","ist","istanbul","itau","itv","iveco","jaguar","java","jcb","jcp","jeep","jetzt","jewelry","jio","jll","jmp","jnj","joburg","jot","joy","jpmorgan","jprs","juegos","juniper","kaufen","kddi","kerryhotels","kerrylogistics","kerryproperties","kfh","kia","kim","kinder","kindle","kitchen","kiwi","koeln","komatsu","kosher","kpmg","kpn","krd","kred","kuokgroup","kyoto","lacaixa","lamborghini","lamer","lancaster","lancia","land","landrover","lanxess","lasalle","lat","latino","latrobe","law","lawyer","lds","lease","leclerc","lefrak","legal","lego","lexus","lgbt","lidl","life","lifeinsurance","lifestyle","lighting","like","lilly","limited","limo","lincoln","linde","link","lipsy","live","living","lixil","llc","llp","loan","loans","locker","locus","loft","lol","london","lotte","lotto","love","lpl","lplfinancial","ltd","ltda","lundbeck","lupin","luxe","luxury","macys","madrid","maif","maison","makeup","man","management","mango","map","market","marketing","markets","marriott","marshalls","maserati","mattel","mba","mckinsey","med","media","meet","melbourne","meme","memorial","men","menu","merckmsd","metlife","miami","microsoft","mini","mint","mit","mitsubishi","mlb","mls","mma","mobile","moda","moe","moi","mom","monash","money","monster","mormon","mortgage","moscow","moto","motorcycles","mov","movie","msd","mtn","mtr","mutual","nab","nadex","nagoya","nationwide","natura","navy","nba","nec","netbank","netflix","network","neustar","new","newholland","news","next","nextdirect","nexus","nfl","ngo","nhk","nico","nike","nikon","ninja","nissan","nissay","nokia","northwesternmutual","norton","now","nowruz","nowtv","nra","nrw","ntt","nyc","obi","observer","off","office","okinawa","olayan","olayangroup","oldnavy","ollo","omega","one","ong","onl","online","onyourside","ooo","open","oracle","orange","organic","origins","osaka","otsuka","ott","ovh","page","panasonic","paris","pars","partners","parts","party","passagens","pay","pccw","pet","pfizer","pharmacy","phd","philips","phone","photo","photography","photos","physio","pics","pictet","pictures","pid","pin","ping","pink","pioneer","pizza","place","play","playstation","plumbing","plus","pnc","pohl","poker","politie","porn","pramerica","praxi","press","prime","prod","productions","prof","progressive","promo","properties","property","protection","pru","prudential","pub","pwc","qpon","quebec","quest","qvc","racing","radio","raid","read","realestate","realtor","realty","recipes","red","redstone","redumbrella","rehab","reise","reisen","reit","reliance","ren","rent","rentals","repair","report","republican","rest","restaurant","review","reviews","rexroth","rich","richardli","ricoh","rightathome","ril","rio","rip","rmit","rocher","rocks","rodeo","rogers","room","rsvp","rugby","ruhr","run","rwe","ryukyu","saarland","safe","safety","sakura","sale","salon","samsclub","samsung","sandvik","sandvikcoromant","sanofi","sap","sarl","sas","save","saxo","sbi","sbs","sca","scb","schaeffler","schmidt","scholarships","school","schule","schwarz","science","scjohnson","scor","scot","search","seat","secure","security","seek","select","sener","services","ses","seven","sew","sex","sexy","sfr","shangrila","sharp","shaw","shell","shia","shiksha","shoes","shop","shopping","shouji","show","showtime","shriram","silk","sina","singles","site","ski","skin","sky","skype","sling","smart","smile","sncf","soccer","social","softbank","software","sohu","solar","solutions","song","sony","soy","spa","space","sport","spot","spreadbetting","srl","stada","staples","star","statebank","statefarm","stc","stcgroup","stockholm","storage","store","stream","studio","study","style","sucks","supplies","supply","support","surf","surgery","suzuki","swatch","swiftcover","swiss","sydney","symantec","systems","tab","taipei","talk","taobao","target","tatamotors","tatar","tattoo","tax","taxi","tci","tdk","team","tech","technology","temasek","tennis","teva","thd","theater","theatre","tiaa","tickets","tienda","tiffany","tips","tires","tirol","tjmaxx","tjx","tkmaxx","tmall","today","tokyo","tools","top","toray","toshiba","total","tours","town","toyota","toys","trade","trading","training","travel","travelchannel","travelers","travelersinsurance","trust","trv","tube","tui","tunes","tushu","tvs","ubank","ubs","unicom","university","uno","uol","ups","vacations","vana","vanguard","vegas","ventures","verisign","versicherung","vet","viajes","video","vig","viking","villas","vin","vip","virgin","visa","vision","vistaprint","viva","vivo","vlaanderen","vodka","volkswagen","volvo","vote","voting","voto","voyage","vuelos","wales","walmart","walter","wang","wanggou","watch","watches","weather","weatherchannel","webcam","weber","website","wed","wedding","weibo","weir","whoswho","wien","wiki","williamhill","win","windows","wine","winners","wme","wolterskluwer","woodside","work","works","world","wow","wtc","wtf","xbox","xerox","xfinity","xihuan","xin","कॉम","セール","佛山","慈善","集团","在线","大众汽车","点看","คอม","八卦","موقع","公益","公司","香格里拉","网站","移动","我爱你","москва","католик","онлайн","сайт","联通","קום","时尚","微博","淡马锡","ファッション","орг","नेट","ストア","アマゾン","삼성","商标","商店","商城","дети","ポイント","新闻","工行","家電","كوم","中文网","中信","娱乐","谷歌","電訊盈科","购物","クラウド","通販","网店","संगठन","餐厅","网络","ком","亚马逊","诺基亚","食品","飞利浦","手表","手机","ارامكو","العليان","اتصالات","بازار","ابوظبي","كاثوليك","همراه","닷컴","政府","شبكة","بيتك","عرب","机构","组织机构","健康","招聘","рус","珠宝","大拿","みんな","グーグル","世界","書籍","网址","닷넷","コム","天主教","游戏","vermögensberater","vermögensberatung","企业","信息","嘉里大酒店","嘉里","广东","政务","xyz","yachts","yahoo","yamaxun","yandex","yodobashi","yoga","yokohama","you","youtube","yun","zappos","zara","zero","zip","zone","zuerich","cc.ua","inf.ua","ltd.ua","adobeaemcloud.com","adobeaemcloud.net","*.dev.adobeaemcloud.com","beep.pl","barsy.ca","*.compute.estate","*.alces.network","altervista.org","alwaysdata.net","cloudfront.net","*.compute.amazonaws.com","*.compute-1.amazonaws.com","*.compute.amazonaws.com.cn","us-east-1.amazonaws.com","cn-north-1.eb.amazonaws.com.cn","cn-northwest-1.eb.amazonaws.com.cn","elasticbeanstalk.com","ap-northeast-1.elasticbeanstalk.com","ap-northeast-2.elasticbeanstalk.com","ap-northeast-3.elasticbeanstalk.com","ap-south-1.elasticbeanstalk.com","ap-southeast-1.elasticbeanstalk.com","ap-southeast-2.elasticbeanstalk.com","ca-central-1.elasticbeanstalk.com","eu-central-1.elasticbeanstalk.com","eu-west-1.elasticbeanstalk.com","eu-west-2.elasticbeanstalk.com","eu-west-3.elasticbeanstalk.com","sa-east-1.elasticbeanstalk.com","us-east-1.elasticbeanstalk.com","us-east-2.elasticbeanstalk.com","us-gov-west-1.elasticbeanstalk.com","us-west-1.elasticbeanstalk.com","us-west-2.elasticbeanstalk.com","*.elb.amazonaws.com","*.elb.amazonaws.com.cn","s3.amazonaws.com","s3-ap-northeast-1.amazonaws.com","s3-ap-northeast-2.amazonaws.com","s3-ap-south-1.amazonaws.com","s3-ap-southeast-1.amazonaws.com","s3-ap-southeast-2.amazonaws.com","s3-ca-central-1.amazonaws.com","s3-eu-central-1.amazonaws.com","s3-eu-west-1.amazonaws.com","s3-eu-west-2.amazonaws.com","s3-eu-west-3.amazonaws.com","s3-external-1.amazonaws.com","s3-fips-us-gov-west-1.amazonaws.com","s3-sa-east-1.amazonaws.com","s3-us-gov-west-1.amazonaws.com","s3-us-east-2.amazonaws.com","s3-us-west-1.amazonaws.com","s3-us-west-2.amazonaws.com","s3.ap-northeast-2.amazonaws.com","s3.ap-south-1.amazonaws.com","s3.cn-north-1.amazonaws.com.cn","s3.ca-central-1.amazonaws.com","s3.eu-central-1.amazonaws.com","s3.eu-west-2.amazonaws.com","s3.eu-west-3.amazonaws.com","s3.us-east-2.amazonaws.com","s3.dualstack.ap-northeast-1.amazonaws.com","s3.dualstack.ap-northeast-2.amazonaws.com","s3.dualstack.ap-south-1.amazonaws.com","s3.dualstack.ap-southeast-1.amazonaws.com","s3.dualstack.ap-southeast-2.amazonaws.com","s3.dualstack.ca-central-1.amazonaws.com","s3.dualstack.eu-central-1.amazonaws.com","s3.dualstack.eu-west-1.amazonaws.com","s3.dualstack.eu-west-2.amazonaws.com","s3.dualstack.eu-west-3.amazonaws.com","s3.dualstack.sa-east-1.amazonaws.com","s3.dualstack.us-east-1.amazonaws.com","s3.dualstack.us-east-2.amazonaws.com","s3-website-us-east-1.amazonaws.com","s3-website-us-west-1.amazonaws.com","s3-website-us-west-2.amazonaws.com","s3-website-ap-northeast-1.amazonaws.com","s3-website-ap-southeast-1.amazonaws.com","s3-website-ap-southeast-2.amazonaws.com","s3-website-eu-west-1.amazonaws.com","s3-website-sa-east-1.amazonaws.com","s3-website.ap-northeast-2.amazonaws.com","s3-website.ap-south-1.amazonaws.com","s3-website.ca-central-1.amazonaws.com","s3-website.eu-central-1.amazonaws.com","s3-website.eu-west-2.amazonaws.com","s3-website.eu-west-3.amazonaws.com","s3-website.us-east-2.amazonaws.com","amsw.nl","t3l3p0rt.net","tele.amune.org","apigee.io","on-aptible.com","user.aseinet.ne.jp","gv.vc","d.gv.vc","user.party.eus","pimienta.org","poivron.org","potager.org","sweetpepper.org","myasustor.com","myfritz.net","*.awdev.ca","*.advisor.ws","b-data.io","backplaneapp.io","balena-devices.com","app.banzaicloud.io","betainabox.com","bnr.la","blackbaudcdn.net","boomla.net","boxfuse.io","square7.ch","bplaced.com","bplaced.de","square7.de","bplaced.net","square7.net","browsersafetymark.io","uk0.bigv.io","dh.bytemark.co.uk","vm.bytemark.co.uk","mycd.eu","carrd.co","crd.co","uwu.ai","ae.org","ar.com","br.com","cn.com","com.de","com.se","de.com","eu.com","gb.com","gb.net","hu.com","hu.net","jp.net","jpn.com","kr.com","mex.com","no.com","qc.com","ru.com","sa.com","se.net","uk.com","uk.net","us.com","uy.com","za.bz","za.com","africa.com","gr.com","in.net","us.org","co.com","c.la","certmgr.org","xenapponazure.com","discourse.group","virtueeldomein.nl","cleverapps.io","*.lcl.dev","*.stg.dev","c66.me","cloud66.ws","cloud66.zone","jdevcloud.com","wpdevcloud.com","cloudaccess.host","freesite.host","cloudaccess.net","cloudcontrolled.com","cloudcontrolapp.com","cloudera.site","trycloudflare.com","workers.dev","wnext.app","co.ca","*.otap.co","co.cz","c.cdn77.org","cdn77-ssl.net","r.cdn77.net","rsc.cdn77.org","ssl.origin.cdn77-secure.org","cloudns.asia","cloudns.biz","cloudns.club","cloudns.cc","cloudns.eu","cloudns.in","cloudns.info","cloudns.org","cloudns.pro","cloudns.pw","cloudns.us","cloudeity.net","cnpy.gdn","co.nl","co.no","webhosting.be","hosting-cluster.nl","ac.ru","edu.ru","gov.ru","int.ru","mil.ru","test.ru","dyn.cosidns.de","dynamisches-dns.de","dnsupdater.de","internet-dns.de","l-o-g-i-n.de","dynamic-dns.info","feste-ip.net","knx-server.net","static-access.net","realm.cz","*.cryptonomic.net","cupcake.is","*.customer-oci.com","*.oci.customer-oci.com","*.ocp.customer-oci.com","*.ocs.customer-oci.com","cyon.link","cyon.site","daplie.me","localhost.daplie.me","dattolocal.com","dattorelay.com","dattoweb.com","mydatto.com","dattolocal.net","mydatto.net","biz.dk","co.dk","firm.dk","reg.dk","store.dk","*.dapps.earth","*.bzz.dapps.earth","builtwithdark.com","edgestack.me","debian.net","dedyn.io","dnshome.de","online.th","shop.th","drayddns.com","dreamhosters.com","mydrobo.com","drud.io","drud.us","duckdns.org","dy.fi","tunk.org","dyndns-at-home.com","dyndns-at-work.com","dyndns-blog.com","dyndns-free.com","dyndns-home.com","dyndns-ip.com","dyndns-mail.com","dyndns-office.com","dyndns-pics.com","dyndns-remote.com","dyndns-server.com","dyndns-web.com","dyndns-wiki.com","dyndns-work.com","dyndns.biz","dyndns.info","dyndns.org","dyndns.tv","at-band-camp.net","ath.cx","barrel-of-knowledge.info","barrell-of-knowledge.info","better-than.tv","blogdns.com","blogdns.net","blogdns.org","blogsite.org","boldlygoingnowhere.org","broke-it.net","buyshouses.net","cechire.com","dnsalias.com","dnsalias.net","dnsalias.org","dnsdojo.com","dnsdojo.net","dnsdojo.org","does-it.net","doesntexist.com","doesntexist.org","dontexist.com","dontexist.net","dontexist.org","doomdns.com","doomdns.org","dvrdns.org","dyn-o-saur.com","dynalias.com","dynalias.net","dynalias.org","dynathome.net","dyndns.ws","endofinternet.net","endofinternet.org","endoftheinternet.org","est-a-la-maison.com","est-a-la-masion.com","est-le-patron.com","est-mon-blogueur.com","for-better.biz","for-more.biz","for-our.info","for-some.biz","for-the.biz","forgot.her.name","forgot.his.name","from-ak.com","from-al.com","from-ar.com","from-az.net","from-ca.com","from-co.net","from-ct.com","from-dc.com","from-de.com","from-fl.com","from-ga.com","from-hi.com","from-ia.com","from-id.com","from-il.com","from-in.com","from-ks.com","from-ky.com","from-la.net","from-ma.com","from-md.com","from-me.org","from-mi.com","from-mn.com","from-mo.com","from-ms.com","from-mt.com","from-nc.com","from-nd.com","from-ne.com","from-nh.com","from-nj.com","from-nm.com","from-nv.com","from-ny.net","from-oh.com","from-ok.com","from-or.com","from-pa.com","from-pr.com","from-ri.com","from-sc.com","from-sd.com","from-tn.com","from-tx.com","from-ut.com","from-va.com","from-vt.com","from-wa.com","from-wi.com","from-wv.com","from-wy.com","ftpaccess.cc","fuettertdasnetz.de","game-host.org","game-server.cc","getmyip.com","gets-it.net","go.dyndns.org","gotdns.com","gotdns.org","groks-the.info","groks-this.info","ham-radio-op.net","here-for-more.info","hobby-site.com","hobby-site.org","home.dyndns.org","homedns.org","homeftp.net","homeftp.org","homeip.net","homelinux.com","homelinux.net","homelinux.org","homeunix.com","homeunix.net","homeunix.org","iamallama.com","in-the-band.net","is-a-anarchist.com","is-a-blogger.com","is-a-bookkeeper.com","is-a-bruinsfan.org","is-a-bulls-fan.com","is-a-candidate.org","is-a-caterer.com","is-a-celticsfan.org","is-a-chef.com","is-a-chef.net","is-a-chef.org","is-a-conservative.com","is-a-cpa.com","is-a-cubicle-slave.com","is-a-democrat.com","is-a-designer.com","is-a-doctor.com","is-a-financialadvisor.com","is-a-geek.com","is-a-geek.net","is-a-geek.org","is-a-green.com","is-a-guru.com","is-a-hard-worker.com","is-a-hunter.com","is-a-knight.org","is-a-landscaper.com","is-a-lawyer.com","is-a-liberal.com","is-a-libertarian.com","is-a-linux-user.org","is-a-llama.com","is-a-musician.com","is-a-nascarfan.com","is-a-nurse.com","is-a-painter.com","is-a-patsfan.org","is-a-personaltrainer.com","is-a-photographer.com","is-a-player.com","is-a-republican.com","is-a-rockstar.com","is-a-socialist.com","is-a-soxfan.org","is-a-student.com","is-a-teacher.com","is-a-techie.com","is-a-therapist.com","is-an-accountant.com","is-an-actor.com","is-an-actress.com","is-an-anarchist.com","is-an-artist.com","is-an-engineer.com","is-an-entertainer.com","is-by.us","is-certified.com","is-found.org","is-gone.com","is-into-anime.com","is-into-cars.com","is-into-cartoons.com","is-into-games.com","is-leet.com","is-lost.org","is-not-certified.com","is-saved.org","is-slick.com","is-uberleet.com","is-very-bad.org","is-very-evil.org","is-very-good.org","is-very-nice.org","is-very-sweet.org","is-with-theband.com","isa-geek.com","isa-geek.net","isa-geek.org","isa-hockeynut.com","issmarterthanyou.com","isteingeek.de","istmein.de","kicks-ass.net","kicks-ass.org","knowsitall.info","land-4-sale.us","lebtimnetz.de","leitungsen.de","likes-pie.com","likescandy.com","merseine.nu","mine.nu","misconfused.org","mypets.ws","myphotos.cc","neat-url.com","office-on-the.net","on-the-web.tv","podzone.net","podzone.org","readmyblog.org","saves-the-whales.com","scrapper-site.net","scrapping.cc","selfip.biz","selfip.com","selfip.info","selfip.net","selfip.org","sells-for-less.com","sells-for-u.com","sells-it.net","sellsyourhome.org","servebbs.com","servebbs.net","servebbs.org","serveftp.net","serveftp.org","servegame.org","shacknet.nu","simple-url.com","space-to-rent.com","stuff-4-sale.org","stuff-4-sale.us","teaches-yoga.com","thruhere.net","traeumtgerade.de","webhop.biz","webhop.info","webhop.net","webhop.org","worse-than.tv","writesthisblog.com","ddnss.de","dyn.ddnss.de","dyndns.ddnss.de","dyndns1.de","dyn-ip24.de","home-webserver.de","dyn.home-webserver.de","myhome-server.de","ddnss.org","definima.net","definima.io","bci.dnstrace.pro","ddnsfree.com","ddnsgeek.com","giize.com","gleeze.com","kozow.com","loseyourip.com","ooguy.com","theworkpc.com","casacam.net","dynu.net","accesscam.org","camdvr.org","freeddns.org","mywire.org","webredirect.org","myddns.rocks","blogsite.xyz","dynv6.net","e4.cz","en-root.fr","mytuleap.com","onred.one","staging.onred.one","enonic.io","customer.enonic.io","eu.org","al.eu.org","asso.eu.org","at.eu.org","au.eu.org","be.eu.org","bg.eu.org","ca.eu.org","cd.eu.org","ch.eu.org","cn.eu.org","cy.eu.org","cz.eu.org","de.eu.org","dk.eu.org","edu.eu.org","ee.eu.org","es.eu.org","fi.eu.org","fr.eu.org","gr.eu.org","hr.eu.org","hu.eu.org","ie.eu.org","il.eu.org","in.eu.org","int.eu.org","is.eu.org","it.eu.org","jp.eu.org","kr.eu.org","lt.eu.org","lu.eu.org","lv.eu.org","mc.eu.org","me.eu.org","mk.eu.org","mt.eu.org","my.eu.org","net.eu.org","ng.eu.org","nl.eu.org","no.eu.org","nz.eu.org","paris.eu.org","pl.eu.org","pt.eu.org","q-a.eu.org","ro.eu.org","ru.eu.org","se.eu.org","si.eu.org","sk.eu.org","tr.eu.org","uk.eu.org","us.eu.org","eu-1.evennode.com","eu-2.evennode.com","eu-3.evennode.com","eu-4.evennode.com","us-1.evennode.com","us-2.evennode.com","us-3.evennode.com","us-4.evennode.com","twmail.cc","twmail.net","twmail.org","mymailer.com.tw","url.tw","apps.fbsbx.com","ru.net","adygeya.ru","bashkiria.ru","bir.ru","cbg.ru","com.ru","dagestan.ru","grozny.ru","kalmykia.ru","kustanai.ru","marine.ru","mordovia.ru","msk.ru","mytis.ru","nalchik.ru","nov.ru","pyatigorsk.ru","spb.ru","vladikavkaz.ru","vladimir.ru","abkhazia.su","adygeya.su","aktyubinsk.su","arkhangelsk.su","armenia.su","ashgabad.su","azerbaijan.su","balashov.su","bashkiria.su","bryansk.su","bukhara.su","chimkent.su","dagestan.su","east-kazakhstan.su","exnet.su","georgia.su","grozny.su","ivanovo.su","jambyl.su","kalmykia.su","kaluga.su","karacol.su","karaganda.su","karelia.su","khakassia.su","krasnodar.su","kurgan.su","kustanai.su","lenug.su","mangyshlak.su","mordovia.su","msk.su","murmansk.su","nalchik.su","navoi.su","north-kazakhstan.su","nov.su","obninsk.su","penza.su","pokrovsk.su","sochi.su","spb.su","tashkent.su","termez.su","togliatti.su","troitsk.su","tselinograd.su","tula.su","tuva.su","vladikavkaz.su","vladimir.su","vologda.su","channelsdvr.net","fastly-terrarium.com","fastlylb.net","map.fastlylb.net","freetls.fastly.net","map.fastly.net","a.prod.fastly.net","global.prod.fastly.net","a.ssl.fastly.net","b.ssl.fastly.net","global.ssl.fastly.net","fastpanel.direct","fastvps-server.com","fhapp.xyz","fedorainfracloud.org","fedorapeople.org","cloud.fedoraproject.org","app.os.fedoraproject.org","app.os.stg.fedoraproject.org","mydobiss.com","filegear.me","filegear-au.me","filegear-de.me","filegear-gb.me","filegear-ie.me","filegear-jp.me","filegear-sg.me","firebaseapp.com","flynnhub.com","flynnhosting.net","0e.vc","freebox-os.com","freeboxos.com","fbx-os.fr","fbxos.fr","freebox-os.fr","freeboxos.fr","freedesktop.org","*.futurecms.at","*.ex.futurecms.at","*.in.futurecms.at","futurehosting.at","futuremailing.at","*.ex.ortsinfo.at","*.kunden.ortsinfo.at","*.statics.cloud","service.gov.uk","gehirn.ne.jp","usercontent.jp","gentapps.com","lab.ms","github.io","githubusercontent.com","gitlab.io","glitch.me","lolipop.io","cloudapps.digital","london.cloudapps.digital","homeoffice.gov.uk","ro.im","shop.ro","goip.de","run.app","a.run.app","web.app","*.0emm.com","appspot.com","*.r.appspot.com","blogspot.ae","blogspot.al","blogspot.am","blogspot.ba","blogspot.be","blogspot.bg","blogspot.bj","blogspot.ca","blogspot.cf","blogspot.ch","blogspot.cl","blogspot.co.at","blogspot.co.id","blogspot.co.il","blogspot.co.ke","blogspot.co.nz","blogspot.co.uk","blogspot.co.za","blogspot.com","blogspot.com.ar","blogspot.com.au","blogspot.com.br","blogspot.com.by","blogspot.com.co","blogspot.com.cy","blogspot.com.ee","blogspot.com.eg","blogspot.com.es","blogspot.com.mt","blogspot.com.ng","blogspot.com.tr","blogspot.com.uy","blogspot.cv","blogspot.cz","blogspot.de","blogspot.dk","blogspot.fi","blogspot.fr","blogspot.gr","blogspot.hk","blogspot.hr","blogspot.hu","blogspot.ie","blogspot.in","blogspot.is","blogspot.it","blogspot.jp","blogspot.kr","blogspot.li","blogspot.lt","blogspot.lu","blogspot.md","blogspot.mk","blogspot.mr","blogspot.mx","blogspot.my","blogspot.nl","blogspot.no","blogspot.pe","blogspot.pt","blogspot.qa","blogspot.re","blogspot.ro","blogspot.rs","blogspot.ru","blogspot.se","blogspot.sg","blogspot.si","blogspot.sk","blogspot.sn","blogspot.td","blogspot.tw","blogspot.ug","blogspot.vn","cloudfunctions.net","cloud.goog","codespot.com","googleapis.com","googlecode.com","pagespeedmobilizer.com","publishproxy.com","withgoogle.com","withyoutube.com","awsmppl.com","fin.ci","free.hr","caa.li","ua.rs","conf.se","hs.zone","hs.run","hashbang.sh","hasura.app","hasura-app.io","hepforge.org","herokuapp.com","herokussl.com","myravendb.com","ravendb.community","ravendb.me","development.run","ravendb.run","bpl.biz","orx.biz","ng.city","biz.gl","ng.ink","col.ng","firm.ng","gen.ng","ltd.ng","ngo.ng","ng.school","sch.so","häkkinen.fi","*.moonscale.io","moonscale.net","iki.fi","dyn-berlin.de","in-berlin.de","in-brb.de","in-butter.de","in-dsl.de","in-dsl.net","in-dsl.org","in-vpn.de","in-vpn.net","in-vpn.org","biz.at","info.at","info.cx","ac.leg.br","al.leg.br","am.leg.br","ap.leg.br","ba.leg.br","ce.leg.br","df.leg.br","es.leg.br","go.leg.br","ma.leg.br","mg.leg.br","ms.leg.br","mt.leg.br","pa.leg.br","pb.leg.br","pe.leg.br","pi.leg.br","pr.leg.br","rj.leg.br","rn.leg.br","ro.leg.br","rr.leg.br","rs.leg.br","sc.leg.br","se.leg.br","sp.leg.br","to.leg.br","pixolino.com","ipifony.net","mein-iserv.de","test-iserv.de","iserv.dev","iobb.net","myjino.ru","*.hosting.myjino.ru","*.landing.myjino.ru","*.spectrum.myjino.ru","*.vps.myjino.ru","*.triton.zone","*.cns.joyent.com","js.org","kaas.gg","khplay.nl","keymachine.de","kinghost.net","uni5.net","knightpoint.systems","oya.to","co.krd","edu.krd","git-repos.de","lcube-server.de","svn-repos.de","leadpages.co","lpages.co","lpusercontent.com","lelux.site","co.business","co.education","co.events","co.financial","co.network","co.place","co.technology","app.lmpm.com","linkitools.space","linkyard.cloud","linkyard-cloud.ch","members.linode.com","nodebalancer.linode.com","we.bs","loginline.app","loginline.dev","loginline.io","loginline.services","loginline.site","krasnik.pl","leczna.pl","lubartow.pl","lublin.pl","poniatowa.pl","swidnik.pl","uklugs.org","glug.org.uk","lug.org.uk","lugs.org.uk","barsy.bg","barsy.co.uk","barsyonline.co.uk","barsycenter.com","barsyonline.com","barsy.club","barsy.de","barsy.eu","barsy.in","barsy.info","barsy.io","barsy.me","barsy.menu","barsy.mobi","barsy.net","barsy.online","barsy.org","barsy.pro","barsy.pub","barsy.shop","barsy.site","barsy.support","barsy.uk","*.magentosite.cloud","mayfirst.info","mayfirst.org","hb.cldmail.ru","miniserver.com","memset.net","cloud.metacentrum.cz","custom.metacentrum.cz","flt.cloud.muni.cz","usr.cloud.muni.cz","meteorapp.com","eu.meteorapp.com","co.pl","azurecontainer.io","azurewebsites.net","azure-mobile.net","cloudapp.net","mozilla-iot.org","bmoattachments.org","net.ru","org.ru","pp.ru","ui.nabu.casa","pony.club","of.fashion","on.fashion","of.football","in.london","of.london","for.men","and.mom","for.mom","for.one","for.sale","of.work","to.work","nctu.me","bitballoon.com","netlify.com","4u.com","ngrok.io","nh-serv.co.uk","nfshost.com","dnsking.ch","mypi.co","n4t.co","001www.com","ddnslive.com","myiphost.com","forumz.info","16-b.it","32-b.it","64-b.it","soundcast.me","tcp4.me","dnsup.net","hicam.net","now-dns.net","ownip.net","vpndns.net","dynserv.org","now-dns.org","x443.pw","now-dns.top","ntdll.top","freeddns.us","crafting.xyz","zapto.xyz","nsupdate.info","nerdpol.ovh","blogsyte.com","brasilia.me","cable-modem.org","ciscofreak.com","collegefan.org","couchpotatofries.org","damnserver.com","ddns.me","ditchyourip.com","dnsfor.me","dnsiskinky.com","dvrcam.info","dynns.com","eating-organic.net","fantasyleague.cc","geekgalaxy.com","golffan.us","health-carereform.com","homesecuritymac.com","homesecuritypc.com","hopto.me","ilovecollege.info","loginto.me","mlbfan.org","mmafan.biz","myactivedirectory.com","mydissent.net","myeffect.net","mymediapc.net","mypsx.net","mysecuritycamera.com","mysecuritycamera.net","mysecuritycamera.org","net-freaks.com","nflfan.org","nhlfan.net","no-ip.ca","no-ip.co.uk","no-ip.net","noip.us","onthewifi.com","pgafan.net","point2this.com","pointto.us","privatizehealthinsurance.net","quicksytes.com","read-books.org","securitytactics.com","serveexchange.com","servehumour.com","servep2p.com","servesarcasm.com","stufftoread.com","ufcfan.org","unusualperson.com","workisboring.com","3utilities.com","bounceme.net","ddns.net","ddnsking.com","gotdns.ch","hopto.org","myftp.biz","myftp.org","myvnc.com","no-ip.biz","no-ip.info","no-ip.org","noip.me","redirectme.net","servebeer.com","serveblog.net","servecounterstrike.com","serveftp.com","servegame.com","servehalflife.com","servehttp.com","serveirc.com","serveminecraft.net","servemp3.com","servepics.com","servequake.com","sytes.net","webhop.me","zapto.org","stage.nodeart.io","nodum.co","nodum.io","pcloud.host","nyc.mn","nom.ae","nom.af","nom.ai","nom.al","nym.by","nym.bz","nom.cl","nym.ec","nom.gd","nom.ge","nom.gl","nym.gr","nom.gt","nym.gy","nym.hk","nom.hn","nym.ie","nom.im","nom.ke","nym.kz","nym.la","nym.lc","nom.li","nym.li","nym.lt","nym.lu","nym.me","nom.mk","nym.mn","nym.mx","nom.nu","nym.nz","nym.pe","nym.pt","nom.pw","nom.qa","nym.ro","nom.rs","nom.si","nym.sk","nom.st","nym.su","nym.sx","nom.tj","nym.tw","nom.ug","nom.uy","nom.vc","nom.vg","static.observableusercontent.com","cya.gg","cloudycluster.net","nid.io","opencraft.hosting","operaunite.com","skygearapp.com","outsystemscloud.com","ownprovider.com","own.pm","ox.rs","oy.lc","pgfog.com","pagefrontapp.com","art.pl","gliwice.pl","krakow.pl","poznan.pl","wroc.pl","zakopane.pl","pantheonsite.io","gotpantheon.com","mypep.link","perspecta.cloud","on-web.fr","*.platform.sh","*.platformsh.site","dyn53.io","co.bn","xen.prgmr.com","priv.at","prvcy.page","*.dweb.link","protonet.io","chirurgiens-dentistes-en-france.fr","byen.site","pubtls.org","qualifioapp.com","instantcloud.cn","ras.ru","qa2.com","qcx.io","*.sys.qcx.io","dev-myqnapcloud.com","alpha-myqnapcloud.com","myqnapcloud.com","*.quipelements.com","vapor.cloud","vaporcloud.io","rackmaze.com","rackmaze.net","*.on-k3s.io","*.on-rancher.cloud","*.on-rio.io","readthedocs.io","rhcloud.com","app.render.com","onrender.com","repl.co","repl.run","resindevice.io","devices.resinstaging.io","hzc.io","wellbeingzone.eu","ptplus.fit","wellbeingzone.co.uk","git-pages.rit.edu","sandcats.io","logoip.de","logoip.com","schokokeks.net","gov.scot","scrysec.com","firewall-gateway.com","firewall-gateway.de","my-gateway.de","my-router.de","spdns.de","spdns.eu","firewall-gateway.net","my-firewall.org","myfirewall.org","spdns.org","biz.ua","co.ua","pp.ua","shiftedit.io","myshopblocks.com","shopitsite.com","mo-siemens.io","1kapp.com","appchizi.com","applinzi.com","sinaapp.com","vipsinaapp.com","siteleaf.net","bounty-full.com","alpha.bounty-full.com","beta.bounty-full.com","stackhero-network.com","static.land","dev.static.land","sites.static.land","apps.lair.io","*.stolos.io","spacekit.io","customer.speedpartner.de","api.stdlib.com","storj.farm","utwente.io","soc.srcf.net","user.srcf.net","temp-dns.com","applicationcloud.io","scapp.io","*.s5y.io","*.sensiosite.cloud","syncloud.it","diskstation.me","dscloud.biz","dscloud.me","dscloud.mobi","dsmynas.com","dsmynas.net","dsmynas.org","familyds.com","familyds.net","familyds.org","i234.me","myds.me","synology.me","vpnplus.to","direct.quickconnect.to","taifun-dns.de","gda.pl","gdansk.pl","gdynia.pl","med.pl","sopot.pl","edugit.org","telebit.app","telebit.io","*.telebit.xyz","gwiddle.co.uk","thingdustdata.com","cust.dev.thingdust.io","cust.disrec.thingdust.io","cust.prod.thingdust.io","cust.testing.thingdust.io","arvo.network","azimuth.network","bloxcms.com","townnews-staging.com","12hp.at","2ix.at","4lima.at","lima-city.at","12hp.ch","2ix.ch","4lima.ch","lima-city.ch","trafficplex.cloud","de.cool","12hp.de","2ix.de","4lima.de","lima-city.de","1337.pictures","clan.rip","lima-city.rocks","webspace.rocks","lima.zone","*.transurl.be","*.transurl.eu","*.transurl.nl","tuxfamily.org","dd-dns.de","diskstation.eu","diskstation.org","dray-dns.de","draydns.de","dyn-vpn.de","dynvpn.de","mein-vigor.de","my-vigor.de","my-wan.de","syno-ds.de","synology-diskstation.de","synology-ds.de","uber.space","*.uberspace.de","hk.com","hk.org","ltd.hk","inc.hk","virtualuser.de","virtual-user.de","lib.de.us","2038.io","router.management","v-info.info","voorloper.cloud","v.ua","wafflecell.com","*.webhare.dev","wedeploy.io","wedeploy.me","wedeploy.sh","remotewd.com","wmflabs.org","half.host","xnbay.com","u2.xnbay.com","u2-local.xnbay.com","cistron.nl","demon.nl","xs4all.space","yandexcloud.net","storage.yandexcloud.net","website.yandexcloud.net","official.academy","yolasite.com","ybo.faith","yombo.me","homelink.one","ybo.party","ybo.review","ybo.science","ybo.trade","nohost.me","noho.st","za.net","za.org","now.sh","bss.design","basicserver.io","virtualserver.io","site.builder.nu","enterprisecloud.nu"]')
},function(e,t,a){
var i="undefined"!=typeof global&&global||"undefined"!=typeof self&&self||window,o=Function.prototype.apply
function s(e,t){
this._id=e,this._clearFn=t
}
t.setTimeout=function(){
return new s(o.call(setTimeout,i,arguments),clearTimeout)
},t.setInterval=function(){
return new s(o.call(setInterval,i,arguments),clearInterval)
},t.clearTimeout=t.clearInterval=function(e){
e&&e.close()
},s.prototype.unref=s.prototype.ref=function(){},s.prototype.close=function(){
this._clearFn.call(i,this._id)
},t.enroll=function(e,t){
clearTimeout(e._idleTimeoutId),e._idleTimeout=t
},t.unenroll=function(e){
clearTimeout(e._idleTimeoutId),e._idleTimeout=-1
},t._unrefActive=t.active=function(e){
clearTimeout(e._idleTimeoutId)
var t=e._idleTimeout
t>=0&&(e._idleTimeoutId=setTimeout((function(){
e._onTimeout&&e._onTimeout()
}),t))
},a(16),t.setImmediate="undefined"!=typeof self&&self.setImmediate||"undefined"!=typeof global&&global.setImmediate||this&&this.setImmediate,
t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||"undefined"!=typeof global&&global.clearImmediate||this&&this.clearImmediate
},function(e,t,a){
(function(e){
!function(t,a){
"use strict"
if(!t.setImmediate){
var i,o,s,n,r,l=1,c={},u=!1,d=t.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(t)
p=p&&p.setTimeout?p:t,"[object process]"==={}.toString.call(t.process)?i=function(t){
e.nextTick((function(){
m(t)
}))
}:!function(){
if(t.postMessage&&!t.importScripts){
var e=!0,a=t.onmessage
return t.onmessage=function(){
e=!1
},t.postMessage("","*"),t.onmessage=a,e
}
}()?t.MessageChannel?((s=new MessageChannel).port1.onmessage=function(e){
m(e.data)
},i=function(e){
s.port2.postMessage(e)
}):d&&"onreadystatechange"in d.createElement("script")?(o=d.documentElement,
i=function(e){
var t=d.createElement("script")
t.onreadystatechange=function(){
m(e),t.onreadystatechange=null,o.removeChild(t),
t=null
},o.appendChild(t)
}):i=function(e){
setTimeout(m,0,e)
}:(n="setImmediate$"+Math.random()+"$",r=function(e){
e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(n)&&m(+e.data.slice(n.length))
},
t.addEventListener?t.addEventListener("message",r,!1):t.attachEvent("onmessage",r),
i=function(e){
t.postMessage(n+e,"*")
}),p.setImmediate=function(e){
"function"!=typeof e&&(e=new Function(""+e))
for(var t=new Array(arguments.length-1),a=0;a<t.length;a++){
t[a]=arguments[a+1]
}
var o={
callback:e,
args:t
}
return c[l]=o,i(l),l++
},p.clearImmediate=g
}
function g(e){
delete c[e]
}
function m(e){
if(u){
setTimeout(m,0,e)
}else{
var t=c[e]
if(t){
u=!0
try{
!function(e){
var t=e.callback,a=e.args
switch(a.length){
case 0:
t()
break
case 1:
t(a[0])
break
case 2:
t(a[0],a[1])
break
case 3:
t(a[0],a[1],a[2])
break
default:
t.apply(void 0,a)
}
}(t)
}finally{
g(e),u=!1
}
}
}
}
}("undefined"==typeof self?"undefined"==typeof global?this:global:self)
}).call(this,a(1))
},function(e,t,a){
"use strict"
a.r(t)
const i=a(10)
const o=a(11)
var s=a(0),n=a(2),r=a.n(n)
class l{
constructor(e){
this.root=e,this.optiscroll=null,this.tooltipMouseEnterBinded=this.tooltipMouseEnter.bind(this),
this.tooltipMouseLeaveBinded=this.tooltipMouseLeave.bind(this)
}
initTopBar(){
this.tooltips(),this.tabfocus(),this.checkboxes()
}
initPanel(){
this.accordions(),this.tooltips(),this.tabfocus(),this.scrollbar(),this.shortcuts(),
this.resetFocus(),
this.checkboxes()
}
updatePanel(){
this.accordions(),this.tooltips(),this.checkboxes()
}
deletePanel(){
this.scrollbarDestroy()
}
scrollbar(){
this.optiscroll=new r.a(this.root.querySelector(".aos-body .aos-content.optiscroll"))
}
scrollbarUpdate(){
this.optiscroll&&this.optiscroll.update()
}
scrollbarScroll(){
this.optiscroll&&this.optiscroll.scrollTo(0,0,0)
}
scrollbarDestroy(){
this.optiscroll&&(this.optiscroll.destroy(),this.optiscroll=null)
}
animate(e,t,a,i,o){
return new Promise((s,n)=>{
!function(){
let n={
valueStart:t,
valueEnd:a,
t:0
},r=function(){
n.t=i-n.t,n.t<0&&(n.t=0)
let e=n.valueStart
n.valueStart=n.valueEnd,n.valueEnd=e
},l=function(){
let t=n.valueStart,a=n.valueEnd
if(n.t>=i){
o(e,1,t,a,r)
}else{
let s=n.t/i
o(e,s,t,a,r)
}
n.t>=i?s():e.dataset.animationTimeout=setTimeout(()=>{
n.t+=20,l()
},20)
}
l()
}()
})
}
animateStyle(e,t,a,i,o,s,n){
let r=function(){
return"function"==typeof o?o():o
},l=function(o){
if(o>=s){
e.style[t]=r()+a,"function"==typeof n&&n(),delete e.dataset.animationTimeout,
delete e.dataset.animationFinishCallback
}else{
let n="function"==typeof i?i():i,c=r(),u=n+o/s*(c-n)
e.style[t]=u+a,e.dataset.animationTimeout=setTimeout(()=>{
l(o+20)
},20)
}
}
e.dataset.animationFinishCallback=n,l(0)
}
animateAttribute(e,t,a,i,o,s,n){
let r=function(){
return"function"==typeof o?o():o
},l=function(o){
if(o>=s){
e[t]=r()+a,"function"==typeof n&&n(),delete e.dataset.animationTimeout,
delete e.dataset.animationFinishCallback
}else{
let n="function"==typeof i?i():i,c=r(),u=n+o/s*(c-n)
e[t]=u+a,e.dataset.animationTimeout=setTimeout((function(){
l(o+20)
}),20)
}
}
e.dataset.animationFinishCallback=n,l(0)
}
animationStop(e){
let t=e.dataset.animationTimeout
e.dataset.animationFinishCallback
t&&clearTimeout(t),delete e.dataset.animationTimeout,delete e.dataset.animationFinishCallback
}
slideDown(e,t){
if(!e){
return
}
this.animationStop(e)
let a="block"
"span"==e.tagName.toLowerCase()&&(a="inline-block"),e.style.display=a,e.style.overflow="hidden",
this.animateStyle(e,"maxHeight","px",0,e.scrollHeight,250,()=>{
e.style.maxHeight=null,
e.style.overflow=null,this.scrollbarUpdate(),"function"==typeof t&&t()
})
}
slideUp(e,t){
if(!e){
return
}
this.animationStop(e)
let a="block"
"span"==e.tagName.toLowerCase()&&(a="inline-block"),e.style.display=a,e.style.overflow="hidden",
this.animateStyle(e,"maxHeight","px",e.scrollHeight,0,250,()=>{
e.style.maxHeight=null,
e.style.overflow=null,e.style.display="none",this.scrollbarUpdate(),
"function"==typeof t&&t()
})
}
hide(e){
e&&(e.style.display="none",this.scrollbarUpdate())
}
show(e){
if(!e){
return
}
let t="block"
"span"==e.tagName.toLowerCase()&&(t="inline-block"),e.style.display=t,this.scrollbarUpdate()
}
fadeIn(e,t){
if(!e){
return
}
let a="block"
"span"==e.tagName.toLowerCase()&&(a="inline-block"),e.style.display=a,this.animateStyle(e,"opacity","",0,1,200,(function(){
e.style.opacity=null,
this.scrollbarUpdate(),"function"==typeof t&&t()
}))
}
fadeOut(e,t){
if(!e){
return
}
let a="block"
"span"==e.tagName.toLowerCase()&&(a="inline-block"),e.style.display=a,this.animateStyle(e,"opacity","",1,0,200,(function(){
e.style.opacity=null,
e.style.display="none",this.scrollbarUpdate(),"function"==typeof t&&t()
}))
}
elementColorGet(e){
var t={
r:0,
g:0,
b:0,
a:1
}
if(!e){
return t
}
let a=window.getComputedStyle(e).color.match(/rgba?\(([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*(,\s*([0-9.]+))?\)/)
return t.r=parseInt(a[1]),t.g=parseInt(a[2]),t.b=parseInt(a[3]),void 0!==a[5]&&(t.a=parseFloat(a[5])),
t
}
elementColorSet(e,t,a,i,o){
e.style.color="rgba("+t+","+a+","+i+","+o+")"
}
slideSwap(e){
if(e.dataset.slideSwapRunning){
if(e.dataset.slideSwapRevert){
let t=parseInt(e.dataset.slideSwapRevert)
e.dataset.slideSwapRevert=t+1
}else{
e.dataset.slideSwapRevert=1
}
return void(e.dataset.opened?delete e.dataset.opened:e.dataset.opened="1")
}
e.dataset.slideSwapRunning="1",e.dataset.slideSwapReverted="",e.style.display="block"
let t={
opened:!!e.dataset.opened,
height:e.dataset.opened?e.scrollHeight:0
},a={
opened:!e.dataset.opened,
height:e.dataset.opened?0:e.scrollHeight
}
e.dataset.opened?delete e.dataset.opened:e.dataset.opened="1",this.animate(e,t,a,250,(e,t,a,i,o)=>{
e.style.display="block",
e.style.overflow="hidden",e.style.maxHeight=a.height+(i.height-a.height)*t+"px"
let s=parseInt(e.dataset.slideSwapRevert)
s&&(s%2==1&&o(),e.dataset.slideSwapRevert=0,e.dataset.slideSwapReverted?e.dataset.slideSwapReverted="":e.dataset.slideSwapReverted="1")
}).then(()=>{
e.removeAttribute("style"),e.dataset.slideSwapRunning="",e.dataset.slideSwapReverted?a.opened?(e.style.display="none",
delete e.dataset.opened):(e.style.display="block",
e.dataset.opened="1"):a.opened?(e.style.display="block",
e.dataset.opened="1"):(e.style.display="none",
delete e.dataset.opened)
})
}
textSwap(e,t,a,i,o){
this.animationStop(e),e.removeAttribute("style"),e.childNodes[0].textContent=a
let s=e.offsetWidth+5
e.childNodes[0].textContent=t
let n=e.offsetWidth+5
e.style.whiteSpace="nowrap",this.animate(e,n,s,250,(e,s,n,r)=>{
e.removeAttribute("style")
let l=this.elementColorGet(e)
if(s<=.5){
i&&(l=i)
let a=(s-0)/.5
e.childNodes[0].textContent=t,this.elementColorSet(e,l.r,l.g,l.b,l.a*(1-a))
}else{
o&&(l=o)
let t=(s-.5)/.5
e.childNodes[0].textContent=a,this.elementColorSet(e,l.r,l.g,l.b,l.a*t)
}
e.style.whiteSpace="nowrap",e.style.width=n+(r-n)*s+"px"
}).then(()=>{
e.removeAttribute("style"),e.style.width=s+"px"
})
}
buttonSwap(e){
if(e.dataset.buttonSwapRunning){
if(e.dataset.buttonSwapRevert){
let t=parseInt(e.dataset.buttonSwapRevert)
e.dataset.buttonSwapRevert=t+1
}else{
e.dataset.buttonSwapRevert=1
}
return
}
e.dataset.buttonSwapRunning="1",e.dataset.buttonSwapReverted=""
let t={
text:e.innerHTML,
width:e.offsetWidth
}
e.removeAttribute("style"),e.innerHTML=e.dataset.textSwitch
let a={
text:e.dataset.textSwitch,
width:e.offsetWidth+5
}
e.innerHTML=t.text,e.style.whiteSpace="nowrap",animate(e,t,a,250,(e,t,a,i,o)=>{
e.removeAttribute("style")
let s=this.elementColorGet(e)
if(t<=.5){
let i=(t-0)/.5
e.innerHTML=a.text,this.elementColorSet(e,s.r,s.g,s.b,s.a*(1-i)*(1-i))
}else{
let a=(t-.5)/.5
e.innerHTML=i.text,this.elementColorSet(e,s.r,s.g,s.b,s.a*a*a)
}
e.style.whiteSpace="nowrap",e.style.width=a.width+(i.width-a.width)*t+"px"
let n=parseInt(e.dataset.buttonSwapRevert)
n&&(n%2==1&&o(),e.dataset.buttonSwapRevert=0,e.dataset.buttonSwapReverted?e.dataset.buttonSwapReverted="":e.dataset.buttonSwapReverted="1")
}).then(()=>{
e.removeAttribute("style"),e.dataset.buttonSwapRunning="",e.dataset.buttonSwapReverted?(e.dataset.textSwitch=a.text,
e.style.width=t.width+"px"):(e.dataset.textSwitch=t.text,
e.style.width=a.width+"px")
})
}
sectionBeforeToggle(e){
if(!e){
return
}
"string"==typeof e&&(e=this.root.querySelector(".aos-section[data-section='"+e+"']"))
let t=e.querySelectorAll(".aos-section-details-button")
for(let e=0;e<t.length;e+=1){
let a=t[e]
!a.dataset.swapText&&a.childNodes[0]&&(a.dataset.swapText=a.innerHTML.trim(),a.dataset.swapColor=JSON.stringify(this.elementColorGet(a)),
a.childNodes[0].textContent="")
}
}
sectionDetailsOpen(e){
if(!e){
return
}
"string"==typeof e&&(e=this.root.querySelector(".aos-section[data-section='"+e+"']"))
let t=e.querySelectorAll(".aos-section-details-button")
for(let e=0;e<t.length;e+=1){
let a=t[e]
a.dataset.swapText&&(this.textSwap(a,a.dataset.swapText,a.innerHTML.trim(),JSON.parse(a.dataset.swapColor),this.elementColorGet(a)),
delete a.dataset.swapText)
}
let a=this.root.querySelector(".aos-content > .optiscroll-content")
a||(a=this.root.querySelector(".aos-content"))
let i=a.scrollTop
this.animateAttribute(a,"scrollTop","",i,()=>{
let t=a.scrollTop,i=a.clientHeight,o=parseInt(window.getComputedStyle(e).marginTop),s=parseInt(window.getComputedStyle(e).marginBottom),n=e.offsetHeight
return e.offsetTop+n+s>t+i&&(t=e.offsetTop+o+s+n-i),e.offsetTop-o<t&&(t=e.offsetTop-o),
t
},300,(function(){}))
let o=e.querySelectorAll(".aos-section-details")
for(let e=0;e<o.length;e+=1){
o[e].dataset.opened||this.slideSwap(o[e])
}
}
sectionDetailsClose(e){
if(!e){
return
}
"string"==typeof e&&(e=this.root.querySelector(".aos-section[data-section='"+e+"']"))
let t=e.querySelectorAll(".aos-section-details-button")
for(let e=0;e<t.length;e+=1){
let a=t[e]
a.dataset.swapText&&(this.textSwap(a,a.dataset.swapText,a.innerHTML.trim(),JSON.parse(a.dataset.swapColor),this.elementColorGet(a)),
delete a.dataset.swapText)
}
let a=e.querySelectorAll(".aos-section-details")
for(let e=0;e<a.length;e+=1){
a[e].dataset.opened&&this.slideSwap(a[e])
}
}
accordions(){
let e=this.root.querySelectorAll(".aos-body .aos-accordions")
for(let t=0;t<e.length;t+=1){
let a=e[t].querySelectorAll(".aos-accordion")
for(let e=0;e<a.length;e+=1){
let t=a[e],i=t.querySelector(".aos-accordion-button"),o=t.querySelector(".aos-accordion-content")
;(function(e,t,a,i){
a.onclick=function(){
if(!a.classList.contains("aos-disabled")){
if(t.classList.contains("aos-active")){
t.classList.toggle("aos-active"),this.slideUp(i)
}else{
for(let a=0;a<e.length;a+=1){
e[a]!=t&&e[a].classList.contains("aos-active")&&(e[a].classList.toggle("aos-active"),
this.slideUp(e[a].querySelector(".aos-accordion-content")))
}
t.classList.toggle("aos-active"),this.slideDown(i)
}
}
}.bind(this)
}).call(this,a,t,i,o)
}
}
}
tabfocus(){
this.root.addEventListener("keydown",e=>{
9==e.keyCode&&this.root.querySelector(".aos-body").classList.add("aos-tabfocus")
}),
this.root.addEventListener("mousedown",e=>{
this.root.querySelector(".aos-body").classList.remove("aos-tabfocus")
})
}
shortcuts(){
this.root.addEventListener("keydown",e=>{
27==e.keyCode&&this.root.querySelector("#aosBody-close").click()
})
}
resetFocus(){
this.root.querySelector(".aos-body").classList.remove("aos-tabfocus")
let e=this.root.querySelector(".aos-body .aos-header *:first-child")
e.tabIndex=0,e.focus(),e.tabIndex=-1
}
checkboxKeyDown(e){
let t=e.currentTarget
32!=e.keyCode&&13!=e.keyCode||(t.click(),e.preventDefault(),e.stopPropagation())
}
checkboxes(){
let e=this.root.querySelectorAll("input[type='checkbox']+label")
for(let t=0;t<e.length;t+=1){
let a=e[t]
a.removeEventListener("keydown",this.checkboxKeyDown),a.addEventListener("keydown",this.checkboxKeyDown)
}
}
votingShowThanks(){
const e=this.root.querySelector(".aos-body"),t=e.querySelector("#aosVote-thanks"),a=e.querySelector("#aosVote-info"),i=e.querySelectorAll(".aos-vote-icon")
i.forEach(e=>e.setAttribute("disabled","disabled")),this.show(t),this.hide(a)
let o=t.dataset.timer
o&&clearTimeout(o),o=setTimeout(()=>{
this.hide(t),this.show(a),i.forEach(e=>e.removeAttribute("disabled"))
},2e3),t.dataset.timer=o
}
tooltipMouseEnter(e){
let t=e.currentTarget,a=this.root.querySelector(".aos-body"),i=a.querySelector(".aos-tooltip"),o=t.dataset.tooltip
i.innerHTML=o,i.classList.contains("aos-active")||i.classList.toggle("aos-active"),
i.style.left="0px",
i.style.top="0px"
let s=i.scrollHeight,n=i.scrollWidth,r=t.getBoundingClientRect(),l=(r.left+r.right)/2-n/2,c=r.bottom+6
l<12&&(l=12),l+n>a.scrollWidth-12&&(l=a.scrollWidth-12-n),c+s>a.scrollHeight-12&&(c=r.top-6-s),
c<12&&(c=12),
i.style.left=l+"px",i.style.top=c+"px"
}
tooltipMouseLeave(e){
e.currentTarget
let t=this.root.querySelector(".aos-body").querySelector(".aos-tooltip")
t.classList.contains("aos-active")&&t.classList.toggle("aos-active")
}
tooltips(){
let e=this.root.querySelector(".aos-body"),t=e.querySelector(".aos-tooltip")
null==t&&(t=document.createElement("div"),t.classList.toggle("aos-tooltip"),e.appendChild(t))
let a=this.root.querySelectorAll(".aos-body [title]")
for(let e=0;e<a.length;e+=1){
let t=a[e],i=t.title
i&&(t.title="",t.dataset.tooltip=i,t.removeEventListener("mouseenter",this.tooltipMouseEnterBinded),
t.removeEventListener("mouseleave",this.tooltipMouseLeaveBinded),
t.addEventListener("mouseenter",this.tooltipMouseEnterBinded),
t.addEventListener("mouseleave",this.tooltipMouseLeaveBinded))
}
e.onclick=function(){
t.classList.contains("aos-active")&&t.classList.toggle("aos-active")
}.bind(this)
}
settingsOpen(){
let e=this.root.querySelector(".aos-body #aosBody-setting"),t=this.root.querySelector(".aos-body .aos-content .aos-content-common"),a=this.root.querySelector(".aos-body .aos-content .aos-content-settings")
a.classList.contains("aos-hidden")&&(t.classList.contains("aos-hidden")||t.classList.toggle("aos-hidden"),
a.classList.contains("aos-hidden")&&a.classList.toggle("aos-hidden"),
e.classList.contains("aos-active")||e.classList.toggle("aos-active"),
this.scrollbarScroll(0,0,0),
this.scrollbarUpdate(),this.checkboxes())
}
settingsClose(){
let e=this.root.querySelector(".aos-body #aosBody-setting"),t=this.root.querySelector(".aos-body .aos-content .aos-content-common"),a=this.root.querySelector(".aos-body .aos-content .aos-content-settings")
a.classList.contains("aos-hidden")||(a.classList.contains("aos-hidden")||a.classList.toggle("aos-hidden"),
t.classList.contains("aos-hidden")&&t.classList.toggle("aos-hidden"),
e.classList.contains("aos-active")&&e.classList.toggle("aos-active"),
this.scrollbarScroll(0,0,0),
this.scrollbarUpdate(),this.checkboxes())
}
toggleSettings(){
return this.root.querySelector(".aos-body #aosBody-setting").classList.contains("aos-active")?(this.settingsClose(),
!1):(this.settingsOpen(),
!0)
}
}
class c{
constructor(e){
this.AvastWRC=e
}
createContainer(){
let e=document.createElement("div")
return e.style.width="100%",e.style.height="100%",e.style.position="fixed",e.style.top="0",
e.style.left="0",
e.style.zIndex="2147483647",e.style.pointerEvents="none",e.dataset.aos=this.AvastWRC.ial.domData,
e
}
createIframe(){
let e=document.createElement("iframe")
return e.style.width="100%",e.style.height="100%",e.style.position="fixed",e.style.top="0",
e.style.bottom="0",
e.style.left="0",e.style.right="0",e.style.padding="0",e.style.margin="0",
e.style.border="0",
e
}
createIframeDefaultStyle(){
let e=document.createElement("style")
return e.innerHTML=".aos-body-container { display:none; }",e
}
createIframeStyle(){
let e=this.AvastWRC.bs.getLocalResourceURL("common/ui/css/style.css"),t=document.createElement("link")
return t.setAttribute("href",e),t.setAttribute("rel","stylesheet"),t
}
createIframeTopee(){
let e=this.AvastWRC.bs.getLocalResourceURL("scripts/topee-iframe-resources.js"),t=document.createElement("script")
return t.setAttribute("src",e),t
}
createSidebar(e,t){
let a=document.createElement("div")
return a.innerHTML="<div id='main-panel'></div>",a.style.width=e+"px",a.style.position="fixed",
a.style.right="0",
a.style.top="0",a.style.height=t?"435px":"100vh",a.style.zIndex="2147483647",
a.style.minWidth=e+"px",
a.style.maxWidth=e+"px",a.style.border="none",a.style.background="#242a36",
a.style.boxShadow="-1px 1px 5px 0 rgba(0, 0, 0, 0.3)",
a.style.marginRight="-"+(e+10)+"px",
a
}
createOverlay(){
let e=document.createElement("div")
return e.style.width="100vw",e.style.position="fixed",e.style.right="0",e.style.top="0",
e.style.height="100vh",
e.style.zIndex="2147483646",e.style.border="none",e.style.background="rgba(24, 29, 38, 0.8)",
e.style.opacity="0",
e
}
}
var u=a(3),d=a.n(u),p=a(4),g=a.n(p)
var m=a(5),k=a.n(m)
class h{
constructor(e){
this.execute=e
}
enable(){
return this.execute("browserAction","enable",...arguments)
}
disable(){
return this.execute("browserAction","disable",...arguments)
}
setTitle(){
return this.execute("browserAction","setTitle",...arguments)
}
setIcon(){
return this.execute("browserAction","setIcon",...arguments)
}
setBadgeText(){
return this.execute("browserAction","setBadgeText",...arguments)
}
setBadgeTextColor(){
return this.execute("browserAction","setBadgeTextColor",...arguments)
}
setBadgeBackgroundColor(){
return this.execute("browserAction","setBadgeBackgroundColor",...arguments)
}
get onClicked(){
return{
addListener:this.execute.bind(this,"browserAction.onClicked","addListener"),
hasListener:this.execute.bind(this,"browserAction.onClicked","hasListener"),
removeListener:this.execute.bind(this,"browserAction.onClicked","removeListener")
}
}
}
class b{
constructor(e){
this.execute=e
}
getURL(){
return this.execute("extension","getURL",...arguments)
}
}
class v{
constructor(e){
this.execute=e
}
get lastError(){
return this.execute("runtime","lastError")
}
get onInstalled(){
return{
addListener:this.execute.bind(this,"runtime.onInstalled","addListener"),
hasListener:this.execute.bind(this,"runtime.onInstalled","hasListener"),
removeListener:this.execute.bind(this,"runtime.onInstalled","removeListener")
}
}
get onMessage(){
return{
addListener:this.execute.bind(this,"runtime.onMessage","addListener"),
hasListener:this.execute.bind(this,"runtime.onMessage","hasListener"),
removeListener:this.execute.bind(this,"runtime.onMessage","removeListener")
}
}
sendMessage(){
return this.execute("runtime","sendMessage",...arguments)
}
setUninstallURL(){
return this.execute("runtime","setUninstallURL",...arguments)
}
getManifest(){
return this.execute("runtime","getManifest",...arguments)
}
}
class y{
constructor(e){
this.execute=e
}
getUILanguage(){
return this.execute("i18n","getUILanguage")
}
getMessage(){
return this.execute("i18n","getMessage",...arguments)
}
}
class f{
constructor(e){
this.execute=e
}
get local(){
return{
get:this.execute.bind(this,"storage.local","get"),
set:this.execute.bind(this,"storage.local","set"),
remove:this.execute.bind(this,"storage.local","remove"),
clear:this.execute.bind(this,"storage.local","clear"),
getBytesInUse:this.execute.bind(this,"storage.local","getBytesInUse")
}
}
}
class j{
constructor(e){
this.execute=e
}
sendMessage(){
return this.execute("tabs","sendMessage",...arguments)
}
create(){
return this.execute("tabs","create",...arguments)
}
get(){
return this.execute("tabs","get",...arguments)
}
query(){
return this.execute("tabs","query",...arguments)
}
remove(){
return this.execute("tabs","remove",...arguments)
}
update(){
return this.execute("tabs","update",...arguments)
}
get onActivated(){
return{
addListener:this.execute.bind(this,"tabs.onActivated","addListener"),
hasListener:this.execute.bind(this,"tabs.onActivated","hasListener"),
removeListener:this.execute.bind(this,"tabs.onActivated","removeListener")
}
}
get onUpdated(){
return{
addListener:this.execute.bind(this,"tabs.onUpdated","addListener"),
hasListener:this.execute.bind(this,"tabs.onUpdated","hasListener"),
removeListener:this.execute.bind(this,"tabs.onUpdated","removeListener")
}
}
get onCreated(){
return{
addListener:this.execute.bind(this,"tabs.onCreated","addListener"),
hasListener:this.execute.bind(this,"tabs.onCreated","hasListener"),
removeListener:this.execute.bind(this,"tabs.onCreated","removeListener")
}
}
get onRemoved(){
return{
addListener:this.execute.bind(this,"tabs.onRemoved","addListener"),
hasListener:this.execute.bind(this,"tabs.onRemoved","hasListener"),
removeListener:this.execute.bind(this,"tabs.onRemoved","removeListener")
}
}
}
class w{
constructor(e){
this.execute=e
}
get onCommitted(){
return{
addListener:this.execute.bind(this,"webNavigation.onCommitted","addListener"),
hasListener:this.execute.bind(this,"webNavigation.onCommitted","hasListener"),
removeListener:this.execute.bind(this,"webNavigation.onCommitted","removeListener")
}
}
get onHistoryStateUpdated(){
return{
addListener:this.execute.bind(this,"webNavigation.onHistoryStateUpdated","addListener"),
hasListener:this.execute.bind(this,"webNavigation.onHistoryStateUpdated","hasListener"),
removeListener:this.execute.bind(this,"webNavigation.onHistoryStateUpdated","removeListener")
}
}
get onReferenceFragmentUpdated(){
return{
addListener:this.execute.bind(this,"webNavigation.onReferenceFragmentUpdated","addListener"),
hasListener:this.execute.bind(this,"webNavigation.onReferenceFragmentUpdated","hasListener"),
removeListener:this.execute.bind(this,"webNavigation.onReferenceFragmentUpdated","removeListener")
}
}
get onBeforeNavigate(){
return{
addListener:this.execute.bind(this,"webNavigation.onBeforeNavigate","addListener"),
hasListener:this.execute.bind(this,"webNavigation.onBeforeNavigate","hasListener"),
removeListener:this.execute.bind(this,"webNavigation.onBeforeNavigate","removeListener")
}
}
get onDOMContentLoaded(){
return{
addListener:this.execute.bind(this,"webNavigation.onDOMContentLoaded","addListener"),
hasListener:this.execute.bind(this,"webNavigation.onDOMContentLoaded","hasListener"),
removeListener:this.execute.bind(this,"webNavigation.onDOMContentLoaded","removeListener")
}
}
get onCompleted(){
return{
addListener:this.execute.bind(this,"webNavigation.onCompleted","addListener"),
hasListener:this.execute.bind(this,"webNavigation.onCompleted","hasListener"),
removeListener:this.execute.bind(this,"webNavigation.onCompleted","removeListener")
}
}
get onErrorOccurred(){
return{
addListener:this.execute.bind(this,"webNavigation.onErrorOccurred","addListener"),
hasListener:this.execute.bind(this,"webNavigation.onErrorOccurred","hasListener"),
removeListener:this.execute.bind(this,"webNavigation.onErrorOccurred","removeListener")
}
}
}
class A{
constructor(e){
this.execute=e
}
get onBeforeRequest(){
return{
addListener:this.execute.bind(this,"webRequest.onBeforeRequest","addListener"),
hasListener:this.execute.bind(this,"webRequest.onBeforeRequest","hasListener"),
removeListener:this.execute.bind(this,"webRequest.onBeforeRequest","removeListener")
}
}
get onBeforeRedirect(){
return{
addListener:this.execute.bind(this,"webRequest.onBeforeRedirect","addListener"),
hasListener:this.execute.bind(this,"webRequest.onBeforeRedirect","hasListener"),
removeListener:this.execute.bind(this,"webRequest.onBeforeRedirect","removeListener")
}
}
get onSendHeaders(){
return{
addListener:this.execute.bind(this,"webRequest.onSendHeaders","addListener"),
hasListener:this.execute.bind(this,"webRequest.onSendHeaders","hasListener"),
removeListener:this.execute.bind(this,"webRequest.onSendHeaders","removeListener")
}
}
get onHeadersReceived(){
return{
addListener:this.execute.bind(this,"webRequest.onHeadersReceived","addListener"),
hasListener:this.execute.bind(this,"webRequest.onHeadersReceived","hasListener"),
removeListener:this.execute.bind(this,"webRequest.onHeadersReceived","removeListener")
}
}
get onResponseStarted(){
return{
addListener:this.execute.bind(this,"webRequest.onResponseStarted","addListener"),
hasListener:this.execute.bind(this,"webRequest.onResponseStarted","hasListener"),
removeListener:this.execute.bind(this,"webRequest.onResponseStarted","removeListener")
}
}
get onCompleted(){
return{
addListener:this.execute.bind(this,"webRequest.onCompleted","addListener"),
hasListener:this.execute.bind(this,"webRequest.onCompleted","hasListener"),
removeListener:this.execute.bind(this,"webRequest.onCompleted","removeListener")
}
}
get onErrorOccurred(){
return{
addListener:this.execute.bind(this,"webRequest.onErrorOccurred","addListener"),
hasListener:this.execute.bind(this,"webRequest.onErrorOccurred","hasListener"),
removeListener:this.execute.bind(this,"webRequest.onErrorOccurred","removeListener")
}
}
}
var z=Array.isArray,S="object"==typeof global&&global&&global.Object===Object&&global,B="object"==typeof self&&self&&self.Object===Object&&self,_=S||B||Function("return this")(),T=_.Symbol,x=Object.prototype,O=x.hasOwnProperty,C=x.toString,P=T?T.toStringTag:void 0
var $=function(e){
var t=O.call(e,P),a=e[P]
try{
e[P]=void 0
var i=!0
}catch(e){}
var o=C.call(e)
return i&&(t?e[P]=a:delete e[P]),o
},W=Object.prototype.toString
var L=function(e){
return W.call(e)
},N=T?T.toStringTag:void 0
var q=function(e){
return null==e?void 0===e?"[object Undefined]":"[object Null]":N&&N in Object(e)?$(e):L(e)
}
var R=function(e){
return null!=e&&"object"==typeof e
}
var E=function(e){
return"symbol"==typeof e||R(e)&&"[object Symbol]"==q(e)
},D=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,U=/^\w*$/
var M=function(e,t){
if(z(e)){
return!1
}
var a=typeof e
return!("number"!=a&&"symbol"!=a&&"boolean"!=a&&null!=e&&!E(e))||(U.test(e)||!D.test(e)||null!=t&&e in Object(t))
}
var V=function(e){
var t=typeof e
return null!=e&&("object"==t||"function"==t)
}
var I,G=function(e){
if(!V(e)){
return!1
}
var t=q(e)
return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t
},F=_["__core-js_shared__"],H=(I=/[^.]+$/.exec(F&&F.keys&&F.keys.IE_PROTO||""))?"Symbol(src)_1."+I:""
var K=function(e){
return!!H&&H in e
},J=Function.prototype.toString
var Y=function(e){
if(null!=e){
try{
return J.call(e)
}catch(e){}
try{
return e+""
}catch(e){}
}
return""
},Z=/^\[object .+?Constructor\]$/,X=Function.prototype,Q=Object.prototype,ee=X.toString,te=Q.hasOwnProperty,ae=RegExp("^"+ee.call(te).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$")
var ie=function(e){
return!(!V(e)||K(e))&&(G(e)?ae:Z).test(Y(e))
}
var oe=function(e,t){
return null==e?void 0:e[t]
}
var se=function(e,t){
var a=oe(e,t)
return ie(a)?a:void 0
},ne=se(Object,"create")
var re=function(){
this.__data__=ne?ne(null):{},this.size=0
}
var le=function(e){
var t=this.has(e)&&delete this.__data__[e]
return this.size-=t?1:0,t
},ce=Object.prototype.hasOwnProperty
var ue=function(e){
var t=this.__data__
if(ne){
var a=t[e]
return"__lodash_hash_undefined__"===a?void 0:a
}
return ce.call(t,e)?t[e]:void 0
},de=Object.prototype.hasOwnProperty
var pe=function(e){
var t=this.__data__
return ne?void 0!==t[e]:de.call(t,e)
}
var ge=function(e,t){
var a=this.__data__
return this.size+=this.has(e)?0:1,a[e]=ne&&void 0===t?"__lodash_hash_undefined__":t,
this
}
function me(e){
var t=-1,a=null==e?0:e.length
for(this.clear();++t<a;){
var i=e[t]
this.set(i[0],i[1])
}
}
me.prototype.clear=re,me.prototype.delete=le,me.prototype.get=ue,me.prototype.has=pe,
me.prototype.set=ge
var ke=me
var he=function(){
this.__data__=[],this.size=0
}
var be=function(e,t){
return e===t||e!=e&&t!=t
}
var ve=function(e,t){
for(var a=e.length;a--;){
if(be(e[a][0],t)){
return a
}
}
return-1
},ye=Array.prototype.splice
var fe=function(e){
var t=this.__data__,a=ve(t,e)
return!(a<0)&&(a==t.length-1?t.pop():ye.call(t,a,1),--this.size,!0)
}
var je=function(e){
var t=this.__data__,a=ve(t,e)
return a<0?void 0:t[a][1]
}
var we=function(e){
return ve(this.__data__,e)>-1
}
var Ae=function(e,t){
var a=this.__data__,i=ve(a,e)
return i<0?(++this.size,a.push([e,t])):a[i][1]=t,this
}
function ze(e){
var t=-1,a=null==e?0:e.length
for(this.clear();++t<a;){
var i=e[t]
this.set(i[0],i[1])
}
}
ze.prototype.clear=he,ze.prototype.delete=fe,ze.prototype.get=je,ze.prototype.has=we,
ze.prototype.set=Ae
var Se=ze,Be=se(_,"Map")
var _e=function(){
this.size=0,this.__data__={
hash:new ke,
map:new(Be||Se),
string:new ke
}
}
var Te=function(e){
var t=typeof e
return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e
}
var xe=function(e,t){
var a=e.__data__
return Te(t)?a["string"==typeof t?"string":"hash"]:a.map
}
var Oe=function(e){
var t=xe(this,e).delete(e)
return this.size-=t?1:0,t
}
var Ce=function(e){
return xe(this,e).get(e)
}
var Pe=function(e){
return xe(this,e).has(e)
}
var $e=function(e,t){
var a=xe(this,e),i=a.size
return a.set(e,t),this.size+=a.size==i?0:1,this
}
function We(e){
var t=-1,a=null==e?0:e.length
for(this.clear();++t<a;){
var i=e[t]
this.set(i[0],i[1])
}
}
We.prototype.clear=_e,We.prototype.delete=Oe,We.prototype.get=Ce,We.prototype.has=Pe,
We.prototype.set=$e
var Le=We
function Ne(e,t){
if("function"!=typeof e||null!=t&&"function"!=typeof t){
throw new TypeError("Expected a function")
}
var a=function(){
var i=arguments,o=t?t.apply(this,i):i[0],s=a.cache
if(s.has(o)){
return s.get(o)
}
var n=e.apply(this,i)
return a.cache=s.set(o,n)||s,n
}
return a.cache=new(Ne.Cache||Le),a
}
Ne.Cache=Le
var qe=Ne
var Re=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ee=/\\(\\)?/g,De=function(e){
var t=qe(e,(function(e){
return 500===a.size&&a.clear(),e
})),a=t.cache
return t
}((function(e){
var t=[]
return 46===e.charCodeAt(0)&&t.push(""),e.replace(Re,(function(e,a,i,o){
t.push(i?o.replace(Ee,"$1"):a||e)
})),t
}))
var Ue=function(e,t){
for(var a=-1,i=null==e?0:e.length,o=Array(i);++a<i;){
o[a]=t(e[a],a,e)
}
return o
},Me=T?T.prototype:void 0,Ve=Me?Me.toString:void 0
var Ie=function e(t){
if("string"==typeof t){
return t
}
if(z(t)){
return Ue(t,e)+""
}
if(E(t)){
return Ve?Ve.call(t):""
}
var a=t+""
return"0"==a&&1/t==-1/0?"-0":a
}
var Ge=function(e){
return null==e?"":Ie(e)
}
var Fe=function(e,t){
return z(e)?e:M(e,t)?[e]:De(Ge(e))
}
var He=function(e){
if("string"==typeof e||E(e)){
return e
}
var t=e+""
return"0"==t&&1/e==-1/0?"-0":t
}
var Ke=function(e,t){
for(var a=0,i=(t=Fe(t,e)).length;null!=e&&a<i;){
e=e[He(t[a++])]
}
return a&&a==i?e:void 0
}
var Je=function(e,t,a){
var i=null==e?void 0:Ke(e,t)
return void 0===i?a:i
}
class Ye{
constructor(){
this.browser="",this.version="",this.OS="",this.OSVersion="",this.dataBrowser=[{
string:navigator.userAgent,
subString:"Edge",
identity:"MS_EDGE",
versionSearch:"Version"
},{
string:navigator.userAgent,
subString:"OPR",
identity:"OPERA",
versionSearch:"Version"
},{
string:navigator.userAgent,
subString:"Avast",
identity:"AVAST",
versionSearch:"Version"
},{
string:navigator.userAgent,
subString:"Chrome",
identity:"CHROME",
versionSearch:"Version"
},{
string:navigator.vendor,
subString:"Apple",
identity:"SAFARI",
versionSearch:"Version"
},{
string:navigator.userAgent,
subString:"Firefox",
identity:"FIREFOX",
versionSearch:"Version"
}],this.dataOS=[{
string:navigator.platform,
subString:"Win",
identity:"Windows"
},{
string:navigator.platform,
subString:"Mac",
identity:"Mac"
},{
string:navigator.userAgent,
subString:"iPhone",
identity:"iPhone/iPod"
},{
string:navigator.platform,
subString:"Linux",
identity:"Linux"
}],this.dataOSVersion=[{
string:navigator.userAgent,
subString:"Windows 10.0",
identity:"10.0 (Windows 10.0)"
},{
string:navigator.userAgent,
subString:"Windows NT 10.0",
identity:"10.0 (Windows NT 10.0)"
},{
string:navigator.userAgent,
subString:"Windows 8.1",
identity:"6.3 (Windows 8.1)"
},{
string:navigator.userAgent,
subString:"Windows NT 6.3",
identity:"6.3 (Windows NT 6.3)"
},{
string:navigator.userAgent,
subString:"Windows 8",
identity:"6.2 (Windows 8)"
},{
string:navigator.userAgent,
subString:"Windows NT 6.2",
identity:"6.2 (Windows NT 6.2)"
},{
string:navigator.userAgent,
subString:"Windows 7",
identity:"6.1 (Windows 7)"
},{
string:navigator.userAgent,
subString:"Windows NT 6.1",
identity:"6.1 (Windows NT 6.1)"
},{
string:navigator.userAgent,
subString:"Windows NT 6.0",
identity:"6.0 (Windows NT 6.0)"
},{
string:navigator.userAgent,
subString:"Windows NT 5.2",
identity:"5.2 (Windows NT 5.2)"
},{
string:navigator.userAgent,
subString:"Windows NT 5.1",
identity:"5.1 (Windows NT 5.1)"
},{
string:navigator.userAgent,
subString:"Windows XP",
identity:"5.1 (Windows XP)"
},{
string:navigator.userAgent,
subString:"Windows NT 5.0",
identity:"5.0 (Windows NT 5.0)"
},{
string:navigator.userAgent,
subString:"Windows 2000",
identity:"5.0 (Windows 2000)"
},{
string:navigator.userAgent,
subString:"Win 9x 4.90",
identity:"4.90 (Win 9x 4.90)"
},{
string:navigator.userAgent,
subString:"Windows ME",
identity:"4.90 (Windows ME)"
},{
string:navigator.userAgent,
subString:"Windows 98",
identity:"4.10 (Windows 98)"
},{
string:navigator.userAgent,
subString:"Win98",
identity:"4.10 (Win98)"
},{
string:navigator.userAgent,
subString:"Windows 95",
identity:"4.03 (Windows 95)"
},{
string:navigator.userAgent,
subString:"Win95",
identity:"4.03 (Win95)"
},{
string:navigator.userAgent,
subString:"Windows_95",
identity:"4.03 (Windows_95)"
},{
string:navigator.userAgent,
subString:"Windows NT 4.0",
identity:"4.0 (Windows NT 4.0)"
},{
string:navigator.userAgent,
subString:"WinNT4.0",
identity:"4.0 (WinNT4.0)"
},{
string:navigator.userAgent,
subString:"WinNT",
identity:"4.0 (WinNT)"
},{
string:navigator.userAgent,
subString:"Windows NT",
identity:"4.0 (Windows NT)"
},{
string:navigator.userAgent,
subString:"Win16",
identity:"3.11 (Win16)"
},{
string:navigator.userAgent,
subString:"Intel Mac OS X 10_13",
identity:"10.13 (macOS High Sierra)"
},{
string:navigator.userAgent,
subString:"Intel Mac OS X 10_12",
identity:"10.12 (macOS Sierra)"
},{
string:navigator.userAgent,
subString:"Intel Mac OS X 10_11",
identity:"10.11 (macOS El Capitan)"
},{
string:navigator.userAgent,
subString:"Intel Mac OS X 10_10",
identity:"10.10 (macOS Yosemite)"
},{
string:navigator.userAgent,
subString:"Intel Mac OS X 10_9",
identity:"10.9 (macOS Mavericks)"
}]
}
get(e){
if("browser"===e){
return""===this.browser&&(this.browser=this.searchString(this.dataBrowser)||"An unknown browser"),
this.browser
}
if("version"===e){
return""===this.version&&(this.version=this.searchVersion(this.dataBrowser)||"an unknown version"),
this.version
}
if("OS"===e){
return""===this.OS&&(this.OS=this.searchString(this.dataOS)||"an unknown OS"),
this.OS
}
if("OSVersion"===e){
return""===this.OSVersion&&(this.OSVersion=this.searchString(this.dataOSVersion)||"0.0 an unknown OS Version"),
this.OSVersion
}
if("OSType"===e){
switch(this.get("OS")){
case"Windows":
return"WIN"
case"Mac":
return"MAC"
case"iPhone/iPad":
return"IOS"
case"Linux":
return-1!==navigator.userAgent.indexOf("Android")?"ANDROID":"LINUX"
default:
return""
}
}else if("OSBuild"===e){
const e=this.get("OSVersion").match(/^[0-9.]+/)
return e?e[0]+".0":""
}
return"not found"
}
searchString(e){
for(let t=0;t<e.length;t++){
const a=e[t].string
if(a&&-1!==a.indexOf(e[t].subString)){
return e[t].identity
}
}
}
searchVersion(e){
for(let t=0;t<e.length;t++){
const a=e[t].string,i=new RegExp("("+e[t].subString+")/?\\s*([\\d\\.]+)","i"),o=a.match(i)||[]
if(3===o.length){
return o[2]
}
}
return!1
}
}
var Ze=a(6),Xe=a(7),Qe=a.n(Xe),et=a(8),tt=a.n(et),at=a(9),it=a.n(at)
const ot=new class{
constructor(e){
const t=function(){
const t=[...arguments],a=Je(e,t.shift())||{},i=a[t.shift()]
return"function"==typeof i?i.apply(a,t):i
}
this.browserAction=new h(t),this.extension=new b(t),this.i18n=new y(t),this.runtime=new v(t),
this.storage=new f(t),
this.tabs=new j(t),this.webNavigation=new w(t),this.webRequest=new A(t)
}
}(chrome)
let st={}
st.Api=ot,st.DEFAULTS={},st.DEFAULTS.BRAND="AVAST",st.DEFAULTS.BRAND_NAME="Avast",
st.bs=new class{
constructor(e){
this.AvastWRC=e,this.Api=this.AvastWRC.Api,this.MAX_INTERVAL_COUNT=50,
this.INIT_TIMEOUT=100,
this.initializeTimeout=-1,this.onMessageBinded=this.onMessage.bind(this),
this.session=btoa(Math.floor(1e5+9e5*Math.random()))
}
onMessage(e){
switch(e.message){
case"tabInitAccepted":
clearTimeout(this.initializeTimeout)
break
default:
this.AvastWRC.ial.messageHub(e.message,e.data)
}
}
init(){
if(this.AvastWRC.ial.init(this),this.Api.runtime.onMessage.addListener(this.onMessageBinded),
this._startInitInterval(0),
this.checkExtensionUrl(window.location.href)){
let e=this.getMessageFromExtensionUrl(window.location.href),t=this.getDataFromExtensionUrl(window.location.href)
if(t&&"messagebox.html"===e){
const e=t.brandName
if("phishing"===t.type||"malware"===t.type){
let a=this.AvastWRC.localization.localizeString("background.icon.unsafe",[e]),i=this.getLocalResourceURL("/common/ui/icons/icon-danger.png")
document.querySelector("html head title#aos_ext_page_title").text=a,document.querySelector("html head link#aos_ext_page_icon").setAttribute("href",i),
this.AvastWRC.ial.messageHub("showMessageBox",t)
}else if("afterInstallPage"===t.type){
let a=this.AvastWRC.localization.localizeString(e+".title",[])
document.querySelector("html head title#aos_ext_page_title").text=a,this.AvastWRC.ial.messageHub("showMessageBox",t)
}
}
}
}
checkExtensionUrl(e){
return e&&0===e.indexOf(this.AvastWRC.bs.getLocalResourceURL(""))
}
getMessageFromExtensionUrl(e){
if(!this.checkExtensionUrl(e)){
return!1
}
let t=e.match(/([^/]+\.html)/)
return!!t&&t[1]
}
getDataFromExtensionUrl(e){
if(!this.checkExtensionUrl(e)){
return!1
}
let t=e.match(/\?data=([^&]+)/)
if(!t){
return!1
}
let a=t[1],i={}
try{
i=JSON.parse(atob(a))
}catch(e){
i={}
}
return i
}
messageHandler(e,t){
(t=t||{}).message=e
try{
this.Api.runtime.sendMessage(t)
}catch(e){}
}
getLocalResourceURL(e){
return this.Api.extension.getURL(e)
}
getUILanguage(){
return this.Api.i18n&&this.Api.i18n.getUILanguage?this.Api.i18n.getUILanguage():"en"
}
_startInitInterval(e){
e<this.MAX_INTERVAL_COUNT?(this.messageHandler("tabInitialized",{
session:this.session
}),this.initializeTimeout=setTimeout(()=>{
this._startInitInterval(++e)
},this.INIT_TIMEOUT)):clearTimeout(this.initializeTimeout)
}
end(){
this.messageHandler("unload",{
session:this.session
})
}
}(st),st.ial=new class{
constructor(e,t,a){
this.AvastWRC=e,this.messages=t,this.plurals=a,this.bs=this.AvastWRC.bs,
this._ee=new i,
this.aosLinkClickBinded=this.aosLinkClick.bind(this),this.onUnloadBinded=this.onUnload.bind(this),
this.registerEvents(e=>{
e.on("message.fixAosUrls",this.fixAosUrls.bind(this))
}),this.search=null,this.panel=null,
this.popup=null,this.topbar=null,this.domData=btoa(Math.floor(1e5+9e5*Math.random())),
this.AvastWRC.bs.messageHandler("domData",{
domData:this.domData
})
}
init(e){
return this.attachHandlers(),this
}
registerEvents(e,t){
"function"==typeof e&&e.call(t,this._ee)
}
injectFonts(){
if(!document.head){
let e=document.createElement("head"),t=document.querySelector("html")
t.insertBefore(e,t.firstChild)
}
if(!document.querySelector("#aos_ext_custom_font")){
let e=document.createElement("link")
e.id="aos_ext_custom_font",e.href="https://fonts.googleapis.com/css?family=Roboto:400,700&amp;subset=cyrillic,greek,latin-ext",
e.rel="stylesheet",
e.type="text/css",document.head.appendChild(e)
}
}
injectStyles(){
if(!document.head){
let e=document.createElement("head"),t=document.querySelector("html")
t.insertBefore(e,t.firstChild)
}
if(!document.querySelector("#aos_ext_custom_css")){
let e=document.createElement("link")
e.id="aos_ext_custom_css",e.href=this.bs.getLocalResourceURL("common/ui/css/style.css"),
e.rel="stylesheet",
e.type="text/css",document.head.appendChild(e)
}
}
messageHub(e,t){
this._ee.emit("message."+e,t)
}
attachHandlers(){
window.addEventListener("unload",this.onUnloadBinded)
}
onUnload(){
this.bs.end()
}
detectElementChange(e,t,a){
let i={
observer:new MutationObserver((i,o)=>{
let s=!1,n=!1
for(let t=0;t<i.length;t+=1){
let a=i[t]
if("childList"===a.type){
for(let t=0;t<a.removedNodes.length;t+=1){
if(a.removedNodes[t]===e){
s=!0
break
}
}
}
if("attributes"===a.type&&(n=!0),n||s){
break
}
}
s?"function"==typeof t&&(o.disconnect(),t(),e.parentNode&&o.observe(e.parentNode,{
childList:!0
}),e&&o.observe(e,{
attributes:!0
})):n&&"function"==typeof a&&(o.disconnect(),a(),e.parentNode&&o.observe(e.parentNode,{
childList:!0
}),e&&o.observe(e,{
attributes:!0
}))
}),
element:e,
removedCallback:t,
changedCallback:a
}
return this.detectElementChangeStart(i),i
}
detectElementChangeStop(e){
e&&e.observer&&e.observer.disconnect()
}
detectElementChangeStart(e){
if(e){
let t=e.observer
t.observe(e.element.parentNode,{
childList:!0
}),t.observe(e.element,{
attributes:!0
})
}
}
fixAosUrls(e){
let t=document.querySelectorAll("a")
for(let e=0;e<t.length;e+=1){
let a=t[e],i=a.getAttribute("href")
;/^avast\:\/\//.test(i)&&a.addEventListener("click",this.aosLinkClickBinded)
}
}
aosLinkClick(e){
let t=e.target.getAttribute("href").match(/^avast\:\/\/(.+)/)
if(t){
e.preventDefault()
let a=data.actions[t[1]]
a&&this.bs.messageHandler(a.message,a.data)
}
}
setExtensionUrl(e){
const t=this.AvastWRC.ial.bs.getLocalResourceURL("")
return e.replace(/\[REPLACE_WITH_ID\]\//g,t)
}
}(st),st.localization=new class{
constructor(e,t,a){
this.AvastWRC=e,this.Api=this.AvastWRC.Api,this.messages=t,this.plurals=a,
this.locale=this.getLocale(),
this.lang=this.getDefaultLanguage()
}
getDefaultLanguage(){
let e="en"
const{browserLang:t,browserLang2:a}=this.getLanguages()
return this.messages?t in this.messages?e=t:a in this.messages&&(e=a):e=t,e
}
getLocale(){
if(!this.locale){
const e=window.navigator.language
this.locale=e.split("-").pop()
}
return this.locale
}
getLanguages(){
const e=this.Api.i18n.getUILanguage(),t=e.substring(0,2)
return{
browserLang:e,
browserLang2:t
}
}
localizeString(e,t){
let a=this.lang
if(this.messages){
this.messages[a][e]||(a="en")
let i=this.messages[a][e],o=!1
if(void 0!==t[0]&&"number"==typeof t[0]&&(o=this.plurals[a](t[0])),!1!==o){
let e=i.split(" | ")
void 0!==e[o]&&(i=e[o])
}
for(let e=0;e<t.length;e+=1){
let a=new RegExp("\\{"+e+"\\}","g")
i=i.replace(a,t[e])
}
return i
}
return this.Api.i18n.getMessage(e)
}
}(st,Ze,Qe.a),st.Utils=new class{
constructor(e){
this.AvastWRC=e,this.throttle=this.AvastWRC.throttle,this.dateFormat=function(){
var e=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,t=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,a=/[^-+\dA-Z]/g,i=function(e,t){
for(e=String(e),
t=t||2;e.length<t;){
e="0"+e
}
return e
}
return function(o,s,n){
var r=this.dateFormat
if(1!=arguments.length||"[object String]"!=Object.prototype.toString.call(o)||/\d/.test(o)||(s=o,
o=void 0),
o=o?new Date(o):new Date,isNaN(o)){
throw SyntaxError("invalid date")
}
"UTC:"==(s=String(r.masks[s]||s||r.masks.default)).slice(0,4)&&(s=s.slice(4),n=!0)
var l=n?"getUTC":"get",c=o[l+"Date"](),u=o[l+"Day"](),d=o[l+"Month"](),p=o[l+"FullYear"](),g=o[l+"Hours"](),m=o[l+"Minutes"](),k=o[l+"Seconds"](),h=o[l+"Milliseconds"](),b=n?0:o.getTimezoneOffset(),v={
d:c,
dd:i(c),
ddd:r.i18n.dayNames[u],
dddd:r.i18n.dayNames[u+7],
m:d+1,
mm:i(d+1),
mmm:r.i18n.monthNames[d],
mmmm:r.i18n.monthNames[d+12],
yy:String(p).slice(2),
yyyy:p,
h:g%12||12,
hh:i(g%12||12),
H:g,
HH:i(g),
M:m,
MM:i(m),
s:k,
ss:i(k),
l:i(h,3),
L:i(h>99?Math.round(h/10):h),
t:g<12?"a":"p",
tt:g<12?"am":"pm",
T:g<12?"A":"P",
TT:g<12?"AM":"PM",
Z:n?"UTC":(String(o).match(t)||[""]).pop().replace(a,""),
o:(b>0?"-":"+")+i(100*Math.floor(Math.abs(b)/60)+Math.abs(b)%60,4),
S:["th","st","nd","rd"][c%10>3?0:(c%100-c%10!=10)*c%10]
}
return s.replace(e,(function(e){
return e in v?v[e]:e.slice(1,e.length-1)
}))
}.bind(this)
}.bind(this)(),this.dateFormat.masks={
default:"ddd mmm dd yyyy HH:MM:ss",
shortDate:"m/d/yy",
mediumDate:"mmm d, yyyy",
longDate:"mmmm d, yyyy",
fullDate:"dddd, mmmm d, yyyy",
shortTime:"h:MM TT",
mediumTime:"h:MM:ss TT",
longTime:"h:MM:ss TT Z",
isoDate:"yyyy-mm-dd",
isoTime:"HH:MM:ss",
isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",
isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
},this.dateFormat.i18n={
dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"]
}
}
getProperties(){
var e=0,t=void 0
if(arguments.length>0){
for(t=arguments[e++];t&&e<arguments.length;){
t=t[arguments[e++]]
}
}
return t
}
setProperties(){
var e=arguments.length
if(e>2){
for(var t=arguments[0],a=1;a<e-2;a++){
t[arguments[a]]||(t[arguments[a]]={}),t=t[arguments[a]]
}
t[arguments[e-2]]=arguments[e-1]
}
}
resolveLocalMock(e){
for(var t=this.AvastWRC.DEFAULTS.DNT_MOCKS_RULES,a=0;a<t.length;a++){
if(RegExp(t[a].pattern).test(e)){
return t[a].mock
}
}
return null
}
getDomain(e){
if(void 0===e||null==e){
return null
}
const t=this.getUrlTarget(e)
t&&(e="http://"+t)
const a=e.match(new RegExp("^(ftp|http|https)://(w+:{0,1}w*@)?(www.)?([a-z0-9-.]+[a-z]{2,6})(:[0-9]+)?(.*)?$"))
return a&&a.length>4?a[4]:null
}
getUrlTarget(e){
var t=this.getUrlVars(e)
for(var a in t){
if(t.hasOwnProperty(a)){
try{
var i=/((https?\:\/\/(www\.)?|www\.)(([\w|\-]+\.)+(\w+)))([\/#\?].*)?/,o=decodeURIComponent(t[a]),s=o.match(i)
if(s){
return s[2]+s[4]
}
if(s=atob(o).match(i)){
return s[2]+s[4]
}
}catch(e){}
}
}
return null
}
getUrlVars(e){
const t={}
return void 0===e||null==e?t:(e.replace(/[?&]+([^=&]+)=([^&]*)/gi,(function(e,a,i){
t[a]=i
})),t)
}
getBrowserInfo(){
let e=new Ye
return{
osVersion:e.get("OSVersion"),
os:e.get("OS"),
getBrowser:function(){
return e.get("browser")
},
getBrowserVersion:function(){
return e.get("version")
},
getBrowserVersionMajor:function(){
let t=e.get("version").split(".")
return t.length>=1?t[0]:0
},
getOS:function(){
return e.get("OS")
},
getOSVersion:function(){
return e.get("OSVersion")
},
getOSType:function(){
return e.get("OSType")
},
getOSBuild:function(){
return e.get("OSBuild")
},
isWindows:function(){
return null!==this.os&&/Windows/.test(this.os)
},
isFirefox:function(){
return"FIREFOX"===e.get("browser")
},
isChrome:function(){
return"CHROME"===e.get("browser")
},
isEdge:function(){
return"MS_EDGE"===e.get("browser")
},
isOpera:function(){
return"OPERA"===e.get("browser")
},
isSafari:function(){
return"SAFARI"===e.get("browser")
},
isAvast:function(){
return"AVAST"===e.get("browser")
}
}
}
getRandomUID(){
const e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",t="0123456789abcdef"
let a=0,i=""
for(let o=0;o<e.length;o++){
"-"!==e[o]&&"4"!==e[o]&&(a=16*Math.random()|0),"x"===e[o]?i+=t[a]:"y"===e[o]?(a&=3,
a|=8,
i+=t[a]):i+=e[o]
}
return i
}
}(st),st.ial.search=new class{
constructor(e){
this.AvastWRC=e,this.hideTimer=null,this.docMouseOverBinded=this.docMouseOver.bind(this),
this.docMouseOutBinded=this.docMouseOut.bind(this),
this.containerObserver=null,this.isPageParsed=!1,
this.AvastWRC.ial.registerEvents(e=>{
e.on("message.parseLinks",this.parseLinks.bind(this)),
e.on("message.checkLinksResult",this.checkLinksResult.bind(this))
})
}
getDomainFromUrl(e){
var t=e.match(new RegExp("^(ftp|http|https)://(w+:{0,1}w*@)?([a-z0-9-.]+[a-z]{2,6})(:[0-9]+)?(.*)?$"))
if(t&&t.length>4){
var a=t[3]
let e=o.parse(a)
if(e.domain){
return e.domain
}
}
return null
}
retrieveTargetUrl(e){
var t=this.getTargetFromRedirectorUrl(e)
return t?(0!=t.indexOf("http")?"http://":"")+t:e
}
getTargetFromRedirectorUrl(e){
var t=this.getUrlVars(e)
for(var a in t){
if(t.hasOwnProperty(a)){
try{
var i=/((https?\:\/\/(www\.)?|www\.)(([\w|\-]+\.)+(\w+)))([\/#\?].*)?/,o=decodeURIComponent(t[a]),s=o.match(i)
if(s){
return s[1]
}
if(s=atob(o).match(i)){
return s[1]
}
}catch(e){}
}
}
return null
}
getUrlVars(e){
var t={}
e.replace(/[?&]+([^=&]+)=([^&]*)/gi,(function(e,a,i){
t[a]=i
}))
return t
}
sendCheckRequest(){
const e=[]
document.querySelectorAll("a").forEach(t=>{
const a=t.getAttribute("href"),i=t.protocol.indexOf("http")>-1,o=t.offsetParent
if(a&&"#"!==a[0]&&i&&o){
const a=this.AvastWRC.ial.search.retrieveTargetUrl(t.href)
e.push(a)
}
}),this.AvastWRC.ial.bs.messageHandler("checkLinks",{
urls:e
})
}
prepareObserver(e){
const t=()=>{
this.containerObserver=new MutationObserver(e=>{
let t=!1
for(let a=0;a<e.length;a+=1){
const i=e[a]
for(let e=0;e<i.addedNodes.length;e+=1){
const a=i.addedNodes[e]
if(a&&0!==a.length&&!a.matches("span.wrc_icon")){
t=!0
break
}
}
}
t&&setTimeout(()=>{
this.sendCheckRequest()
},500)
}),document.querySelectorAll(e.container).forEach(e=>{
this.containerObserver.observe(e,{
childList:!0,
subtree:!0
})
})
},a=(a,i)=>{
0===document.querySelectorAll(e.container).length?i&&setTimeout(()=>{
a(a,i-1)
},1e3):(this.sendCheckRequest(),t())
}
a(a,10)
}
hide(){
this.hideTimer=setTimeout((function(){
document.querySelector("#wrcHoverDiv").style.display="none"
}),500)
}
createPopup(){
if(document.getElementById("wrcHoverDiv")){
return
}
let e=document.createElement("div")
e.dataset.aos=this.AvastWRC.ial.domData,e.setAttribute("id","wrcHoverDiv"),e.innerHTML="<div id='wrccontainer' class='aos-serp-tooltip'><span class='aos-serp-tooltip-icon'></span><span class='aos-serp-tooltip-text'></span><span class='aos-serp-tooltip-logo'></span></div>"
let t=document.querySelector("body")
t.insertBefore(e,t.firstChild),document.addEventListener("mouseover",this.docMouseOverBinded),
document.addEventListener("mouseout",this.docMouseOutBinded),
document.querySelector("#wrcHoverDiv").addEventListener("mouseover",e=>{
this.hideTimer&&clearTimeout(this.hideTimer),
this.hideTimer=null
}),document.querySelector("#wrcHoverDiv").addEventListener("mouseout",e=>{
this.hide()
})
}
docMouseOver(e){
if(e.target.classList.contains("wrc_icon")){
this.hideTimer&&clearTimeout(this.hideTimer),
this.hideTimer=null
let t=document.querySelector("#wrcHoverDiv")
t.style.display="block"
let a="",i=""
switch(e.target.dataset.rating){
case"0":
a=this.AvastWRC.localization.localizeString("serp.unknown.desc",[]),i="aos-serp-unknown"
break
case"1":
a=this.AvastWRC.localization.localizeString("serp.safe.desc",[]),i="aos-serp-safe"
break
case"2":
a=this.AvastWRC.localization.localizeString("serp.bad.desc",[]),i="aos-serp-bad"
break
case"3":
a=this.AvastWRC.localization.localizeString("serp.unsafe.desc",[]),i="aos-serp-unsafe"
}
document.querySelector("#wrcHoverDiv .aos-serp-tooltip-text").textContent=a,document.querySelector("#wrcHoverDiv .aos-serp-tooltip").classList.remove("aos-serp-unknown","aos-serp-safe","aos-serp-bad","aos-serp-unsafe"),
document.querySelector("#wrcHoverDiv .aos-serp-tooltip").classList.add(i)
const o=e.target.getBoundingClientRect()
let s=e.target.classList.contains("wrc_icon_right"),n=o.left-112
if(s){
const e=document.querySelector("#wrcHoverDiv .aos-serp-tooltip").getBoundingClientRect()
document.querySelector("#wrcHoverDiv .aos-serp-tooltip").classList.add("aos-serp-icon-right"),
n=o.left+8-(e.right-e.left)
}else{
document.querySelector("#wrcHoverDiv .aos-serp-tooltip").classList.remove("aos-serp-icon-right")
}
const r=document.querySelector("html").scrollTop||document.querySelector("body").scrollTop,l=o.top+r+5
t.style.left=n+"px",t.style.top=l+"px"
}
}
docMouseOut(e){
e.target.classList.contains("wrc_icon")&&this.hide()
}
preparePage(e){
let t=document.querySelectorAll(".wrc_injected")
for(let e=0;e<t.length;e+=1){
t[e].parentNode.removeChild(t[e])
}
let a=document.querySelectorAll("a")
for(let e=0;e<a.length;e+=1){
a[e].removeAttribute("wrc_done")
}
this.AvastWRC.ial.injectFonts(),this.AvastWRC.ial.injectStyles()
var i=document.getElementById("wrc-css")
!i&&e.style&&((i=document.createElement("style")).id="wrc-css",i.type="text/css",
i.innerHTML=e.style,
document.querySelector("head").appendChild(i))
}
parseLinks(e){
if(this.isPageParsed){
return!1
}
this.isPageParsed=!0,this.preparePage(e),e.container?this.containerObserver||this.prepareObserver(e):this.sendCheckRequest()
}
checkLinksResult(e){
e.showPopup&&this.createPopup()
var t=e.result,a=[]
for(var i in t){
a[t[i].url]=t[i]
}
let o=document.querySelectorAll("a")
for(let t=0;t<o.length;t+=1){
let i=o[t]
if(i.getAttribute("wrc_done")){
continue
}
let s=i.getAttribute("href"),n=i.dataset.url
if(n&&-1!=n.indexOf("http")&&(s=n),!s){
continue
}
let r=this.retrieveTargetUrl(i.href),l=a[r]
if(!l&&(l=a[this.getDomainFromUrl(r)],!l)){
continue
}
let c="wrc"+l.rating,u=document.createElement("span")
u.dataset.aos=this.AvastWRC.ial.domData,u.classList.add(c,"wrc_icon","wrc_injected"),
u.dataset.rating=l.rating,
i.setAttribute("wrc_done","true"),e.rules.isIconRight?(u.classList.add("wrc_icon_right"),
i.after(u)):i.before(u)
}
}
}(st),st.ial.panel=new class{
constructor(e){
this.AvastWRC=e,this.domHelper=new c(e),this.ui=null,this.running=!1,
this.vue=null,
this.SIDEBAR_WIDTH=350,this.container=null,this.containerObserver=null,
this.containerShadow=null,
this.iframe=null,this.sidebar=null,this.overlay=null
let t=this.AvastWRC.Utils.getBrowserInfo()
this.isFirefox=t.isFirefox(),this.isSafari=t.isSafari(),this.ee=this.AvastWRC.ial._ee,
this.ee.on("message.toggleSidebar",this.sidebarToggle.bind(this)),
this.ee.on("message.openSidebar",this.sidebarOpen.bind(this)),
this.ee.on("message.closeSidebar",e=>{
this.sidebarClose(e.immediately)
}),this.ee.on("message.initPanel",this.initPanel.bind(this)),
this.ee.on("message.updatePanel",this.updatePanel.bind(this)),
this.ee.on("message.disconnected",this.deletePanel.bind(this))
}
_attachShadowDomContainer(){
document.querySelector("html").appendChild(this.container),
this.container.attachShadow?this.containerShadow=this.container.attachShadow({
mode:"closed"
}):(this.containerShadow=document.createElement("div"),this.container.appendChild(this.containerShadow))
}
_appendIframeIntoShadowDom(){
this.containerShadow.appendChild(this.iframe)
const e=()=>{
const e=this.iframe.contentWindow.document.querySelector("head"),t=this.iframe.contentWindow.document.querySelector("html")
e.appendChild(this.domHelper.createIframeDefaultStyle()),e.appendChild(this.domHelper.createIframeStyle()),
this.isSafari&&e.appendChild(this.domHelper.createIframeTopee()),
t.appendChild(this.sidebar),
t.appendChild(this.overlay),this.overlay.onclick=()=>this.sidebarClose()
}
try{
this.isFirefox?this.iframe.contentWindow.document.body.onload=e:e()
}catch(t){
setTimeout(e,1)
}
}
_createContainerObserver(){
const e=this.container.getAttribute("style")
this.containerObserver=this.AvastWRC.ial.detectElementChange(this.container,()=>{
let e=this.vue._data,t=this.sidebarIsOpened()
this.deletePanel(),this.sidebarCreate(),this.initPanel({
data:e
}),t&&this.sidebarOpen()
},()=>{
this.container.setAttribute("style",e)
})
}
sidebarCreate(){
this.AvastWRC.ial.injectFonts(),this.container=this.domHelper.createContainer(),
this.iframe=this.domHelper.createIframe(),
this.sidebar=this.domHelper.createSidebar(),
this.overlay=this.domHelper.createOverlay(),
this._attachShadowDomContainer(),this._appendIframeIntoShadowDom(),
this._createContainerObserver(),
this.init()
}
sidebarIsOpened(){
return this.sidebar&&"0px"===this.sidebar.style.marginRight
}
sidebarToggle(){
this.sidebarIsOpened()?this.sidebarClose():this.sidebarOpen()
}
sidebarOpen(e={}){
this.container||this.sidebarCreate(),this.sidebar.style.marginRight="-"+(+this.SIDEBAR_WIDTH+10)+"px",
setTimeout(()=>{
const t=this.sidebar.style,a=this.overlay.style
t.transition="margin 700ms",t.marginRight="0px",a.transition="opacity 700ms",a.opacity="1",
this.iframe.style.pointerEvents="initial",
!0===e.openSettings&&setTimeout(()=>{
this.ui.settingsOpen()
},50)
},10),this.AvastWRC.bs.messageHandler("sidebarShow")
}
sidebarClose(e){
if(!this.sidebar){
return
}
const t=this.sidebar.style,a=this.overlay.style
e?(t.transition="",a.transition=""):(t.transition="margin 700ms",a.transition="opacity 700ms"),
t.marginRight="-"+(+this.SIDEBAR_WIDTH+10)+"px",
a.opacity="0",this.iframe.style.pointerEvents="none",
this.AvastWRC.bs.messageHandler("sidebarHide")
}
init(){
this.AvastWRC.bs.messageHandler("iframeReady")
}
getSettingSaveParams(){
let e=this.vue.settings,t=[]
for(let a=0;a<e.length;a+=1){
for(let i=0;i<e[a].items.length;i+=1){
let o=e[a].items[i]
if(t[o.id]=o.value,o.subitems){
for(let e=0;e<o.subitems.length;e+=1){
let a=o.subitems[e]
t[a.id]=a.value
}
}
}
}
return[t]
}
initPanel(e){
if(this.vue){
return
}
void 0!==e.isSafari&&(this.isSafari=e.isSafari)
const t=this.AvastWRC.localization.localizeString("installPage.consent.desc",[]),a=this.urlToText(t,"https://addons.mozilla.org/firefox/addon/avast-online-security/privacy")
let i=Object.assign(e.data,{
consentDescWithUrl:a,
sectionOpened:null,
isSectionOpened:{
Security:!1,
Vote:!1,
Privacy:!1,
Settings:!0
},
nls:function(e){
let t=Array.prototype.slice.call(arguments,1),a=[]
for(let e=0;e<t.length;e+=1){
a.push(t[e])
}
return this.AvastWRC.localization.localizeString(e,a)
}.bind(this)
}),o={
el:this.sidebar.querySelector("#main-panel"),
methods:{
action:function(e){
if(this.running){
return
}
let t="action."+e,a=Array.prototype.slice.call(arguments,1)
switch(t){
case"action.settingSave":
a=this.getSettingSaveParams()
break
default:
a=a
}
if("action.leave"==t){
let e=""
this.vue.security.phishing&&(e="phishing"),this.vue.security.malware&&(e="malware"),
this.AvastWRC.bs.messageHandler("messageBoxFeedback",{
type:e,
ok:!0,
safety_url:this.vue.security.safetyUrl
})
}else{
this.msgSend(t,a)
}
}.bind(this),
openFeedback:()=>{
this.sendAction("openFeedback",{
style:e.data.feedback.style
})
},
sectionToggle:function(e){
let t=this.vue.sectionOpened,a=e
t===a&&(a=null),this.vue.sectionOpened=a,t&&(this.ui.sectionBeforeToggle(t),this.vue.isSectionOpened[t]=!1,
this.vue.$nextTick(()=>{
this.ui.sectionDetailsClose(t)
})),a&&(this.ui.sectionBeforeToggle(a),this.vue.isSectionOpened[a]=!0,
this.vue.$nextTick(()=>{
this.ui.sectionDetailsOpen(a)
}))
}.bind(this)
},
data:i
}
this.isSafari?g()(o):d()(o),this.vue=new s.a(o),this.ui=new l(this.sidebar),this.ui.initPanel()
}
updatePanel(e){
if(!this.vue){
return
}
let t=e.data
for(let e in t){
let a=t[e]
this.vue[e]=a
}
this.vue.$nextTick(()=>{
if(this.running=!1,this.ui.updatePanel(),t.uiAction.showVoteThanks&&("Vote"==this.vue.sectionOpened&&this.vue.sectionToggle("Vote"),
this.ui.votingShowThanks()),
t.uiAction.closeDetails){
let e=this.vue.sectionOpened
e&&this.vue.sectionToggle(e)
}
if(t.uiAction.showDefault){
this.ui.resetFocus(),this.ui.settingsOpen(),this.ui.settingsClose()
let e=this.vue.sectionOpened
e&&this.vue.sectionToggle(e)
}
})
}
deletePanel(){
this.ui&&this.ui.deletePanel(),this.vue&&(this.vue.$destroy(),this.vue=null),
this.containerObserver&&(this.AvastWRC.ial.detectElementChangeStop(this.containerObserver),
this.containerObserver=null),
this.sidebar&&this.sidebar.parentNode&&(this.sidebar.parentNode.removeChild(this.sidebar),
this.sidebar=null),
this.overlay&&this.overlay.parentNode&&(this.overlay.parentNode.removeChild(this.overlay),
this.overlay=null),
this.container&&this.container.parentNode&&(this.container.parentNode.removeChild(this.container),
this.container=null)
}
sendAction(e,t){
let a=Object.assign({},t)
a.type=e,this.running=!0,this.AvastWRC.bs.messageHandler("panelAction",{
data:a
})
}
msgSend(e,t){
if("action.close"===e){
this.sendAction("viewClose")
}else if("action.voteYes"===e){
this.sendAction("ratePositive")
}else if("action.voteNo"===e){
this.sendAction("rateNegative")
}else if("action.unvote"===e){
this.sendAction("rateRevert")
}else if("action.blockTracker"===e){
const e="tracker"+(t[1]?"Block":"Unblock")
this.sendAction(e,{
trackerId:t[0],
trackerGroup:t[2],
trackerName:t[3]
})
}else if("action.blockGroup"===e){
const e="trackerGroup"+(t[1]?"Block":"Unblock")
this.sendAction(e,{
groupId:t[0]
})
}else if("action.blockAuto"===e){
let e=t[0]
this.sendAction("settingFeatureSet",{
feature:"dntAutoBlock",
value:e,
trackCategory:"globalblock"
})
}else if("action.settingSet"===e){
let e=t[0],a=t[1]
this.sendAction("settingFeatureSet",{
feature:e,
value:a,
trackCategory:"settings"
})
}else if("action.settingSave"===e){
this.sendAction("settingSave",{})
}else if("action.toggleSettings"===e){
this.ui.toggleSettings()&&this.sendAction("trackSettingsOpened")
}else{
"action.consentAgree"===e&&(this.sendAction("afterInstallAction",{
urlConsent:!0,
clickSource:"MainUi"
}),this.ui.settingsOpen())
}
}
urlToText(e,t){
return e.replace(new RegExp("{URL_START}(.+?){URL_END}"),'<a href="'+t+'" class="aos-a" target="_blank">$1</a>')
}
}(st),st.ial.popup=new class{
constructor(e,t,a){
this.AvastWRC=e,this.template=t,this.templateAfterInstall=a,this.vue=null,
this.popup=null,
this.popupShadow=null,this.popupData=null,this.popupObserver=null,
this.ee=this.AvastWRC.ial._ee,
this.ee.on("message.showMessageBox",e=>{
this.popupData=e,this.messageBoxShow()
})
}
messageBoxCreate(){
this.AvastWRC.ial.injectFonts(),this.popup=document.createElement("div"),
this.popup.dataset.aos=this.AvastWRC.ial.domData,
this.popup.style.width="100vw",
this.popup.style.position="fixed",this.popup.style.right="0",
this.popup.style.top="0",
this.popup.style.height="100vh",this.popup.style.zIndex="2147483645",
this.popup.style.border="none",
this.popupStyle=this.popup.getAttribute("style"),
this.popup.attachShadow?this.popupShadow=this.popup.attachShadow({
mode:"open"
}):(this.popupShadow=document.createElement("div"),this.popup.appendChild(this.popupShadow))
let e=this.AvastWRC.bs.getLocalResourceURL("common/ui/css/style.css")
this.popupShadow.innerHTML="<style> @import '"+e+"';</style><div id='aos-inpage'></div>",
document.querySelector("html").appendChild(this.popup),
this.popupObserver=this.AvastWRC.ial.detectElementChange(this.popup,()=>{
document.querySelector("html").appendChild(this.popup)
},()=>{
this.popup.setAttribute("style",this.popupStyle)
})
const t=this.AvastWRC.DEFAULTS.BRAND_NAME,a=this.AvastWRC.localization.localizeString("installPage.consent.desc",[]),i=this.urlToText(a,"https://addons.mozilla.org/firefox/addon/avast-online-security/privacy")
let o={
el:this.popupShadow.querySelector("#aos-inpage"),
data:{
consentDescWithUrl:i,
nls:function(e){
let t=Array.prototype.slice.call(arguments,1),a=[]
for(let e=0;e<t.length;e+=1){
a.push(t[e])
}
return this.AvastWRC.localization.localizeString(e,a)
}.bind(this),
brandName:t,
security:{
phishing:"phishing"===this.popupData.type,
malware:"malware"===this.popupData.type
},
safetyUrl:this.popupData.safety_url,
installPage:{
view:"consent"
}
},
methods:{
action:function(e){
"leave"===e?this.AvastWRC.bs.messageHandler("messageBoxFeedback",{
type:this.popupData.type,
ok:!0,
safety_url:this.popupData.safety_url
}):"consentDisagree"===e?(this.vue._data.installPage.view="disagreed",
this.sendAction("afterInstallAction",{
urlConsent:!1,
clickSource:"Consent Page"
})):"consentAgree"===e?(this.vue._data.installPage.view="agreed",
this.sendAction("afterInstallAction",{
urlConsent:!0,
clickSource:"Consent Page"
})):"disagreeBack"===e?this.vue._data.installPage.view="consent":"close"===e&&this.sendAction("closeTab")
}.bind(this)
}
}
"afterInstallPage"===this.popupData.type?this.templateAfterInstall(o):this.template(o),
this.vue=new s.a(o)
}
messageBoxShow(){
this.popup||this.messageBoxCreate(),this.AvastWRC.ial.detectElementChangeStop(this.popupObserver),
this.popup.style.display="block",
this.popupStyle=this.popup.getAttribute("style"),
this.AvastWRC.ial.detectElementChangeStart(this.popupObserver)
}
sendAction(e,t){
let a=Object.assign({},t)
a.type=e,this.AvastWRC.bs.messageHandler(e,a)
}
urlToText(e,t){
return e.replace(new RegExp("{URL_START}(.+?){URL_END}"),'<a href="'+t+'" class="aos-a" target="_blank">$1</a>')
}
}(st,tt.a,it.a),st.ial.topbar=new class{
constructor(e){
this.AvastWRC=e,this.vue=null,this.topbar=null,this.topbarShadow=null,
this.TOPBAR_HEIGHT=40,
this.htmlOriginalMarginTop=null,this.ee=this.AvastWRC.ial._ee,
this.ee.on("message.showTopBar",this.topBarShow.bind(this)),
this.ee.on("message.disconnected",this.topBarDelete.bind(this))
}
topBarCreate(){
this.AvastWRC.ial.injectFonts(),this.topbar=document.createElement("div"),
this.topbar.dataset.aos=this.AvastWRC.ial.domData,
this.topbar.style.width="100%",
this.topbar.style.position="fixed",this.topbar.style.left="0",
this.topbar.style.top="0",
this.topbar.style.height=this.TOPBAR_HEIGHT+"px",this.topbar.style.zIndex="2147483644",
this.topbar.style.border="none",
this.topbar.style.margin="-"+this.TOPBAR_HEIGHT+"px 0px 0px 0px",
this.topbar.attachShadow?this.topbarShadow=this.topbar.attachShadow({
mode:"closed"
}):(this.topbarShadow=document.createElement("div"),this.topbar.appendChild(this.topbarShadow))
let e=this.AvastWRC.bs.getLocalResourceURL("common/ui/css/style.css")
this.topbarShadow.innerHTML="<style> @import '"+e+"';</style><div id='aos-topbar'></div>",
document.querySelector("html").prepend(this.topbar)
let t={
el:this.topbarShadow.querySelector("#aos-topbar"),
data:{
nls:function(e){
let t=Array.prototype.slice.call(arguments,1),a=[]
for(let e=0;e<t.length;e+=1){
a.push(t[e])
}
return this.AvastWRC.localization.localizeString(e,a)
}.bind(this),
dontShowAgain:!1
},
methods:{
action:function(e){
let t="action."+e
Array.prototype.slice.call(arguments,1)
switch(t){
case"action.close":
this.vue.dontShowAgain&&this.AvastWRC.ial.bs.messageHandler("messageBoxFeedback",{
type:"safeZone",
url_from:document.location.href,
ok:!1,
decline:!0
}),this.topBarHide()
break
case"action.bankmode":
this.AvastWRC.ial.bs.messageHandler("messageBoxFeedback",{
type:"safeZone",
url_from:document.location.href,
ok:!0,
decline:this.vue.dontShowAgain
}),this.topBarHide()
}
}.bind(this)
}
}
k()(t),this.vue=new s.a(t),this.ui=new l(this.topbarShadow),this.ui.initTopBar()
}
topBarShow(){
this.topbar||this.topBarCreate(),setTimeout(()=>{
const e=this.topbar.style,t=document.querySelector("html").style
this.htmlOriginalMarginTop=t.marginTop,e.transition="margin 700ms",e.marginTop="0px",
t.transition="margin 700ms",
t.marginTop=this.TOPBAR_HEIGHT+"px"
},1)
}
topBarHide(){
const e=this.topbar.style,t=document.querySelector("html").style
e.transition="margin 700ms",e.marginTop="-"+this.TOPBAR_HEIGHT+"px",t.transition="margin 700ms",
t.marginTop=this.htmlOriginalMarginTop
}
topBarDelete(){
this.topbar&&(this.topBarHide(),this.topbar.parentNode.removeChild(this.topbar),
this.topbar=null)
}
}(st),st.bs.init()
const nt=window.location.href
"webshieldLogs.html"===st.bs.getMessageFromExtensionUrl(nt)&&ot.runtime.sendMessage({
message:"getWebshieldData"
},e=>{
document.querySelector("#webshieldData").innerHTML=JSON.stringify(e.webshieldData)
})
}])
