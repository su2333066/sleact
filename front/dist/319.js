"use strict";(self.webpackChunksleact_ts_front=self.webpackChunksleact_ts_front||[]).push([[319],{8678:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(7294);function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}const o=function(e){var n,t,o=(n=(0,r.useState)(e),t=2,function(e){if(Array.isArray(e))return e}(n)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],l=!0,i=!1;try{for(t=t.call(e);!(l=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==t.return||t.return()}finally{if(i)throw a}}return o}}(n,t)||function(e,n){if(e){if("string"==typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,n):void 0}}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=o[0],i=o[1];return[l,(0,r.useCallback)((function(e){i(e.target.value)}),[]),i]}},6319:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});var r=t(8678),a=t(3564),o=t(7294),l=t(9669),i=t.n(l),c=t(8575),u=t(3046),s=t(6550),d=t(3727);function p(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],l=!0,i=!1;try{for(t=t.call(e);!(l=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==t.return||t.return()}finally{if(i)throw a}}return o}}(e,n)||function(e,n){if(e){if("string"==typeof e)return f(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?f(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}const m=function(){var e=(0,c.ZP)("/api/users",a.Z),n=e.data,t=(e.error,p((0,r.Z)(""),2)),l=t[0],f=t[1],m=p((0,r.Z)(""),2),g=m[0],h=m[1],b=p((0,r.Z)(""),3),v=b[0],x=b[2],y=p((0,r.Z)(""),3),w=y[0],E=y[2],k=p((0,o.useState)(!1),2),_=k[0],S=k[1],j=p((0,o.useState)(""),2),I=j[0],Z=j[1],A=p((0,o.useState)(!1),2),C=A[0],z=A[1],O=(0,o.useCallback)((function(e){x(e.target.value),S(e.target.value!==w)}),[w]),U=(0,o.useCallback)((function(e){E(e.target.value),S(e.target.value!==v)}),[v]),T=(0,o.useCallback)((function(e){e.preventDefault(),!_&&g&&(console.log("서버로 회원가입하기"),Z(""),z(!1),i().post("/api/users",{email:l,nickname:g,password:v}).then((function(e){console.log(e),z(!0)})).catch((function(e){console.log(e.response),Z(e.response.data)})).finally((function(){})))}),[l,g,v,w,_]);return void 0===n?o.createElement("div",null,"로딩중..."):n?o.createElement(s.l_,{to:"/workspace/sleact/channel/일반"}):o.createElement("div",{id:"container"},o.createElement(u.h4,null,"Sleact"),o.createElement(u.l0,{onSubmit:T},o.createElement(u.__,{id:"email-label"},o.createElement("span",null,"이메일 주소"),o.createElement("div",null,o.createElement(u.II,{type:"email",id:"email",name:"email",value:l,onChange:f}))),o.createElement(u.__,{id:"nickname-label"},o.createElement("span",null,"닉네임"),o.createElement("div",null,o.createElement(u.II,{type:"text",id:"nickname",name:"nickname",value:g,onChange:h}))),o.createElement(u.__,{id:"password-label"},o.createElement("span",null,"비밀번호"),o.createElement("div",null,o.createElement(u.II,{type:"password",id:"password",name:"password",value:v,onChange:O}))),o.createElement(u.__,{id:"password-check-label"},o.createElement("span",null,"비밀번호 확인"),o.createElement("div",null,o.createElement(u.II,{type:"password",id:"password-check",name:"password-check",value:w,onChange:U})),_&&o.createElement(u.jj,null,"비밀번호가 일치하지 않습니다."),!g&&o.createElement(u.jj,null,"닉네임을 입력해주세요."),I&&o.createElement(u.jj,null,I),C&&o.createElement(u.fB,null,"회원가입되었습니다! 로그인해주세요.")),o.createElement(u.zx,{type:"submit"},"회원가입")),o.createElement(u.Ji,null,"이미 회원이신가요? ",o.createElement(d.rU,{to:"/login"},"로그인 하러가기")))}},3046:(e,n,t)=>{t.d(n,{II:()=>h,Ji:()=>y,__:()=>g,fB:()=>x,h4:()=>f,jj:()=>v,l0:()=>m,zx:()=>b});var r,a,o,l,i,c,u,s,d=t(5996);function p(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var f=d.Z.header(r||(r=p(["\n  text-align: center;\n  font-family: Slack-Larsseit, Helvetica Neue, Helvetica, Segoe UI, Tahoma, Arial, sans-serif;\n  font-weight: 700;\n  font-size: 48px;\n  line-height: 46px;\n  letter-spacing: -0.75px;\n  margin-top: 50px;\n  margin-bottom: 50px;\n"]))),m=d.Z.form(a||(a=p(["\n  margin: 0 auto;\n  width: 400px;\n  max-width: 400px;\n"]))),g=d.Z.label(o||(o=p(["\n  margin-bottom: 16px;\n  & > span {\n    display: block;\n    text-align: left;\n    padding-bottom: 8px;\n    font-size: 15px;\n    cursor: pointer;\n    line-height: 1.46666667;\n    font-weight: 700;\n  }\n"]))),h=d.Z.input(l||(l=p(["\n  border-radius: 4px;\n  --saf-0: rgba(var(--sk_foreground_high_solid, 134, 134, 134), 1);\n  border: 1px solid var(--saf-0);\n  transition: border 80ms ease-out, box-shadow 80ms ease-out;\n  box-sizing: border-box;\n  margin: 0 0 20px;\n  width: 100%;\n  color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);\n  background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);\n  padding: 12px;\n  height: 44px;\n  padding-top: 11px;\n  padding-bottom: 13px;\n  font-size: 18px;\n  line-height: 1.33333333;\n  &:focus {\n    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);\n    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);\n  }\n"]))),b=d.Z.button(i||(i=p(["\n  margin-bottom: 12px;\n  width: 100%;\n  max-width: 100%;\n  color: #fff;\n  background-color: #4a154b;\n  border: none;\n  font-size: 18px;\n  font-weight: 900;\n  height: 44px;\n  min-width: 96px;\n  padding: 0 16px 3px;\n  transition: all 80ms linear;\n  user-select: none;\n  outline: none;\n  cursor: pointer;\n  border-radius: 4px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n  &:hover {\n    background-color: rgba(74, 21, 75, 0.9);\n    border: none;\n  }\n  &:focus {\n    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);\n    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);\n  }\n"]))),v=d.Z.div(c||(c=p(["\n  color: #e01e5a;\n  margin: 8px 0 16px;\n  font-weight: bold;\n"]))),x=d.Z.div(u||(u=p(["\n  color: #2eb67d;\n  font-weight: bold;\n"]))),y=d.Z.p(s||(s=p(["\n  font-size: 13px;\n  color: #616061;\n  margin: 0 auto 8px;\n  width: 400px;\n  max-width: 400px;\n  & a {\n    color: #1264a3;\n    text-decoration: none;\n    font-weight: 700;\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n"])))},3564:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(9669),a=t.n(r);const o=function(e){return a().get(e,{withCredentials:!0}).then((function(e){return e.data}))}}}]);