"use strict";(self.webpackChunksleact_ts_front=self.webpackChunksleact_ts_front||[]).push([[94],{2309:(e,n,t)=>{t.d(n,{Z:()=>Z});var r,a,o,i,l,c,u=t(7294),s=t(5996),d=t(5802);function p(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var f=s.Z.div(r||(r=p(["\n  display: flex;\n  width: 100%;\n  padding: 20px;\n  padding-top: 0;\n"]))),m=s.Z.form(a||(a=p(["\n  color: rgb(29, 28, 29);\n  font-size: 15px;\n  width: 100%;\n  border-radius: 4px;\n  border: 1px solid rgb(29, 28, 29);\n"]))),g=(0,s.Z)(d.r)(o||(o=p(["\n  font-family: Slack-Lato, appleLogo, sans-serif;\n  font-size: 15px;\n  padding: 8px 9px;\n  width: 100%;\n  & strong {\n    background: skyblue;\n  }\n  & textarea {\n    height: 44px;\n    padding: 9px 10px !important;\n    outline: none !important;\n    border-radius: 4px !important;\n    resize: none !important;\n    line-height: 22px;\n    border: none;\n  }\n  & ul {\n    border: 1px solid lightgray;\n    max-height: 200px;\n    overflow-y: auto;\n    padding: 9px 10px;\n    background: white;\n    border-radius: 4px;\n    width: 150px;\n  }\n"]))),h=s.Z.div(i||(i=p(["\n  position: relative;\n  background: rgb(248, 248, 248);\n  height: 41px;\n  display: flex;\n  border-top: 1px solid rgb(221, 221, 221);\n  align-items: center;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n"]))),b=s.Z.button(l||(l=p(["\n  position: absolute;\n  right: 5px;\n  top: 5px;\n"]))),v=s.Z.button(c||(c=p(["\n  padding: 4px 20px;\n  background: transparent;\n  border: none;\n  display: flex;\n  align-items: center;\n  color: rgb(28, 29, 28);\n  width: 100%;\n  & img {\n    margin-right: 5px;\n  }\n  ",";\n"])),(function(e){return e.focus&&"\n    background: #1264a3;\n    color: white;\n  "})),x=t(3682),y=t(6550),w=t(8575),k=t(3564),E=t(6182),S=t.n(E);const Z=function(e){var n=e.chat,t=e.onSubmitForm,r=e.onChangeChat,a=e.placeholder,o=(0,y.UO)().workspace,i=(0,w.ZP)("/api/users",k.Z,{dedupingInterval:2e3}),l=i.data,c=(i.error,i.revalidate,i.mutate,(0,w.ZP)(l?"/api/workspaces/".concat(o,"/members"):null,k.Z).data),s=(0,u.useRef)(null);(0,u.useEffect)((function(){s.current&&(0,x.Z)(s.current)}),[]);var p=(0,u.useCallback)((function(e){"Enter"===e.key&&(e.shiftKey||(e.preventDefault(),t(e)))}),[t]),E=(0,u.useCallback)((function(e,n,t,r,a){if(c)return u.createElement(v,{focus:a},u.createElement("img",{src:S().url(c[r].email,{s:"20px",d:"retro"}),alt:c[r].nickname}),u.createElement("span",null,t))}),[c]);return u.createElement(f,null,u.createElement(m,{onSubmit:t},u.createElement(g,{id:"editor-chat",value:n,onChange:r,onKeyDown:p,placeholder:a,inputRef:s,forceSuggestionsAboveCursor:!0},u.createElement(d.p,{appendSpaceOnAdd:!0,trigger:"@",data:(null==c?void 0:c.map((function(e){return{id:e.id,display:e.nickname}})))||[],renderSuggestion:E})),u.createElement(h,null,u.createElement(b,{className:"c-button-unstyled c-icon_button c-icon_button--size_small c-wysiwyg_container__button c-wysiwyg_container__button--send"+(null!=n&&n.trim()?"":" c-wysiwyg_container__button--disabled c-button--disabled c-icon_button--default"),"data-qa":"texty_send_button","aria-label":"Send message","data-sk":"tooltip_parent",type:"submit",disabled:!(null!=n&&n.trim())},u.createElement("i",{className:"c-icon c-icon--paperplane-filled","aria-hidden":"true"})))))}},2545:(e,n,t)=>{t.d(n,{Z:()=>O});var r,a,o,i=t(7294),l=t(5996),c=l.Z.div(r||(a=["\n  display: flex;\n  padding: 8px 20px;\n  &:hover {\n    background: #eee;\n  }\n  & .chat-img {\n    display: flex;\n    width: 36px;\n    margin-right: 8px;\n    & img {\n      width: 36px;\n      height: 36px;\n    }\n  }\n"],o||(o=a.slice(0)),r=Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(o)}})))),u=t(6182),s=t.n(u),d=t(7484),p=t.n(d),f=t(8817),m=t(6550),g=t(3727),h=function(e){var n=e.data,t=(0,m.UO)().workspace,r="Sender"in n?n.Sender:n.User,a=(0,i.useMemo)((function(){return(0,f.Z)({input:n.content,pattern:/@\[(.+?)]\((\d+?)\)|\n/g,decorator:function(e,n){var r=e.match(/@\[(.+?)]\((\d+?)\)/);return r?i.createElement(g.rU,{key:e+n,to:"/workspace/".concat(t,"/dm/").concat(r[2])},"@",r[1]):i.createElement("br",{key:n})}})}),[n.content]);return i.createElement(c,null,i.createElement("div",{className:"chat-img"},i.createElement("img",{src:s().url(r.email,{s:"36px",d:"retro"}),alt:r.nickname})),i.createElement("div",{className:"chat-text"},i.createElement("div",{className:"chat-user"},i.createElement("b",null,r.nickname),i.createElement("span",null," ",p()(n.createdAt).format("h:mm A"))),i.createElement("p",null,a)))};const b=(0,i.memo)(h);var v,x,y;function w(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var k=l.Z.div(v||(v=w(["\n  width: 100%;\n  display: flex;\n  flex: 1;\n"]))),E=l.Z.section(x||(x=w(["\n  margin-top: 20px;\n  border-top: 1px solid #eee;\n"]))),S=l.Z.div(y||(y=w(["\n  display: flex;\n  justify-content: center;\n  flex: 1;\n  width: 100%;\n  position: sticky;\n  top: 14px;\n  & button {\n    font-weight: bold;\n    font-size: 13px;\n    height: 28px;\n    line-height: 27px;\n    padding: 0 16px;\n    z-index: 2;\n    --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);\n    box-shadow: 0 0 0 1px var(--saf-0), 0 1px 3px 0 rgba(0, 0, 0, 0.08);\n    border-radius: 24px;\n    position: relative;\n    top: -13px;\n    background: white;\n    border: none;\n    outline: none;\n  }\n"]))),Z=t(1298);function _(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}const O=(0,i.forwardRef)((function(e,n){var t=e.chatSections,r=e.setSize,a=e.isReachingEnd,o=(0,i.useCallback)((function(e){0!==e.scrollTop||a||(console.log("가장 위"),r((function(e){return e+1})).then((function(){var t=null==n?void 0:n.current;t&&t.scrollTop(t.getScrollHeight()-e.scrollHeight)})))}),[n,a,r]);return i.createElement(k,null,i.createElement(Z.$B,{autoHide:!0,ref:n,onScrollFrame:o},Object.entries(t).map((function(e){var n,t,r=(t=2,function(e){if(Array.isArray(e))return e}(n=e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==t.return||t.return()}finally{if(l)throw a}}return o}}(n,t)||function(e,n){if(e){if("string"==typeof e)return _(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_(e,n):void 0}}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=r[0],o=r[1];return i.createElement(E,{className:"section-".concat(a),key:a},i.createElement(S,null,i.createElement("button",null,a)),o.map((function(e){return i.createElement(b,{key:e.id,data:e})})))}))))}))},3094:(e,n,t)=>{t.r(n),t.d(n,{default:()=>S});var r,a,o=t(2309),i=t(2545),l=t(8678),c=t(5996);function u(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var s=c.Z.div(r||(r=u(["\n  display: flex;\n  flex-wrap: wrap;\n  height: calc(100vh - 38px);\n  flex-flow: column;\n"]))),d=c.Z.header(a||(a=u(["\n  height: 64px;\n  display: flex;\n  width: 100%;\n  --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);\n  box-shadow: 0 1px 0 var(--saf-0);\n  padding: 20px 16px 20px 20px;\n  font-weight: bold;\n  align-items: center;\n  & img {\n    margin-right: 5px;\n  }\n"]))),p=t(3564),f=t(8667),m=t(9669),g=t.n(m),h=t(7294),b=t(6182),v=t.n(b),x=t(6550),y=t(8575),w=t(2951);function k(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==t.return||t.return()}finally{if(l)throw a}}return o}}(e,n)||function(e,n){if(e){if("string"==typeof e)return E(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?E(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}const S=function(){var e,n,t=(0,x.UO)(),r=t.workspace,a=t.id,c=(0,y.ZP)("/api/workspaces/".concat(r,"/users/").concat(a),p.Z).data,u=(0,y.ZP)("/api/users",p.Z).data,m=k((0,l.Z)(""),3),b=m[0],E=m[1],S=m[2],Z=(0,y.g_)((function(e){return"/api/workspaces/".concat(r,"/dms/").concat(a,"/chats?perPage=20&page=").concat(e+1)}),p.Z),_=Z.data,O=Z.mutate,j=Z.revalidate,A=Z.setSize,z=k((0,w.Z)(r),1)[0],C=0===(null==_||null===(e=_[0])||void 0===e?void 0:e.length)||_&&(null===(n=_[_.length-1])||void 0===n?void 0:n.length)<20||!1,T=(0,h.useRef)(null),I=(0,h.useCallback)((function(e){if(e.preventDefault(),console.log(b),null!=b&&b.trim()&&_){var n=b;O((function(e){var t;return null==e||e[0].unshift({id:((null===(t=_[0][0])||void 0===t?void 0:t.id)||0)+1,content:n,SenderId:u.id,Sender:u,ReceiverId:c.id,Receiver:c,createdAt:new Date}),e}),!1).then((function(){var e;S(""),null===(e=T.current)||void 0===e||e.scrollToBottom()})),g().post("/api/workspaces/".concat(r,"/dms/").concat(a,"/chats"),{content:b}).then((function(){j()})).catch(console.error)}}),[b,_,u,c,r,a]),P=(0,h.useCallback)((function(e){e.SenderId===Number(a)&&u.id!==Number(a)&&O((function(n){return null==n||n[0].unshift(e),n}),!1).then((function(){var e;T.current&&T.current.getScrollHeight()<T.current.getClientHeight()+T.current.getScrollTop()+150&&(console.log("scrollToBottom!",null===(e=T.current)||void 0===e?void 0:e.getValues()),setTimeout((function(){var e;null===(e=T.current)||void 0===e||e.scrollToBottom()}),50))}))}),[]);if((0,h.useEffect)((function(){return null==z||z.on("dm",P),function(){null==z||z.off("dm",P)}}),[z,P]),(0,h.useEffect)((function(){1===(null==_?void 0:_.length)&&setTimeout((function(){var e;null===(e=T.current)||void 0===e||e.scrollToBottom()}),100)}),[_]),!c||!u)return null;var N=(0,f.Z)(_?_.flat().reverse():[]);return h.createElement(s,null,h.createElement(d,null,h.createElement("img",{src:v().url(c.email,{s:"24px",d:"retro"}),alt:c.nickname}),h.createElement("span",null,c.nickname)),h.createElement(i.Z,{chatSections:N,ref:T,setSize:A,isReachingEnd:C}),h.createElement(o.Z,{chat:b,onChangeChat:E,onSubmitForm:I}))}},8667:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(7484),a=t.n(r);function o(e){var n={};return console.log(n),e.forEach((function(e){var t=a()(e.createdAt).format("YYYY-MM-DD");Array.isArray(n[t])?n[t].push(e):n[t]=[e]})),n}}}]);