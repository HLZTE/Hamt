import{d as q,u as te,c as u,O as e,I as Re,P as ue,o as a,a as T,b as _,e as E,i as se,j as p,r as C,q as ie,m,p as F,k as h,w as b,U as Le,t as P,l as K,K as Ue,Q as Te,n as j,S as s,x as de,R as Be,z as ee,F as X,D as z,B as Z,C as ce,T as me,V as le,W as Me,_ as re,v as oe,y as ke,X as Oe,Y as Ye}from"./entry.DvOc7D6n.js";import{_ as Ae,a as He}from"./Price.vue.xuSDgHIl.js";import{u as J}from"./earn.StUoRnmk.js";import{_ as Se}from"./Preloader.vue.sUH7Dpt4.js";import{u as Ce}from"./attraction.D3v_GmwA.js";const Ie={class:"earn-image"},pe={key:0},he=["srcset","alt"],De=["src","alt"],fe=["src"],_e=q({__name:"Image",props:{name:{}},setup(N){te();const S=N,L=u(()=>{switch(S.name){case e.SUBSCRIBE_TELEGRAM_CHANNEL:case e.ADD_OUR_BOT:case e.SUBSCRIBE_TELEGRAM_GROUP:case e.INVITE_FRIENDS:case e.PIN_BOT:case e.GLEAM_TASKS:case e.STREAK_DAYS:case e.SUBSCRIBE_MEDIUM:case e.SUBSCRIBE_DISCORD:case e.SUBSCRIBE_YOUTUBE_CHANNEL:case e.HAMSTER_DROP:case"hamster_drop_dialog":case e.HAMSTER_YOUTUBE_ACADEMY:case e.HAMSTER_YOUTUBE_EASY_START:case e.HAMSTER_YOUTUBE_EASY_START_S1E23:case e.HAMSTER_YOUTUBE_EASY_START_S1E24:case e.HAMSTER_YOUTUBE_EASY_START_S1E25:case e.HAMSTER_YOUTUBE_EASY_START_S1E26:case e.HAMSTER_YOUTUBE_EASY_START_S1E27:case e.HAMSTER_YOUTUBE_EASY_START_S1E28:case e.HAMSTER_YOUTUBE_EASY_START_S1E29:case e.HAMSTER_YOUTUBE_PARTNER_VIDEO_E1:case e.HAMSTER_YOUTUBE_LOCAL_SUBSCRIBE:case e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E5:case e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E6:case e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E7:case e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E8:case e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E9:case e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E10:case e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E11:case e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E12:case e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E13:case e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E14:case e.SUBSCRIBE_TELEGRAM_CRYPTOFAM:case e.SUBSCRIBE_FACEBOOK:return!0;default:return!1}}),l=u(()=>{switch(S.name){case e.SUBSCRIBE_TELEGRAM_CHANNEL:case e.ADD_OUR_BOT:return"earn-ico-01";case e.SUBSCRIBE_TELEGRAM_GROUP:case e.SUBSCRIBE_TELEGRAM_CRYPTOFAM:return"earn-ico-02";case e.INVITE_FRIENDS:return"earn-ico-03";case e.PIN_BOT:return"earn-ico-04";case e.GLEAM_TASKS:return"earn-ico-05";case e.SUBSCRIBE_X_ACCOUNT:return"/images/earn/x.svg";case e.STREAK_DAYS:return"calendar";case e.SELECT_EXCHANGE:return ue;case e.EXCHANGE_SIGNUP_VIA_FRIEND_LINK:return"/images/earn/bingx.svg";case e.SUBSCRIBE_MEDIUM:return"earn-ico-06";case e.SUBSCRIBE_DISCORD:return"earn-ico-07";case e.HAMSTER_DROP:return"hamster_drop";case e.SUBSCRIBE_FACEBOOK:return"earn-facebook";case"hamster_drop_dialog":return"hamster_drop_dialog";case e.SUBSCRIBE_YOUTUBE_CHANNEL:case e.HAMSTER_YOUTUBE_ACADEMY:case e.HAMSTER_YOUTUBE_EASY_START:case e.HAMSTER_YOUTUBE_EASY_START_S1E23:case e.HAMSTER_YOUTUBE_EASY_START_S1E24:case e.HAMSTER_YOUTUBE_EASY_START_S1E25:case e.HAMSTER_YOUTUBE_EASY_START_S1E26:case e.HAMSTER_YOUTUBE_EASY_START_S1E27:case e.HAMSTER_YOUTUBE_EASY_START_S1E28:case e.HAMSTER_YOUTUBE_EASY_START_S1E29:case e.HAMSTER_YOUTUBE_PARTNER_VIDEO_E1:case e.HAMSTER_YOUTUBE_LOCAL_SUBSCRIBE:case e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E5:case e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E6:case e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E7:case e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E8:case e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E9:case e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E10:case e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E11:case e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E12:case e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E13:case e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E14:return"hamster_youtube_channel";default:return Re}});return(U,r)=>(a(),T("div",Ie,[_(L)?(a(),T("picture",pe,[E("source",{srcset:`/images/earn/${_(l)}.webp`,type:"image/webp",alt:U.name},null,8,he),E("img",{class:"img-responsive",src:`/images/earn/${_(l)}.png`,alt:U.name},null,8,De)])):(a(),T("img",{key:1,class:"img-responsive",src:_(l)},null,8,fe))]))}}),ve={class:"bs-content"},ge={class:"bs-content-image"},Ve=["innerHTML"],be=["innerHTML"],ye={key:0,class:"bs-content-description"},$e={key:1,class:"bs-content-description"},Ne={key:2,class:"bs-content-target"},we={class:"bs-content-info"},Pe=["disabled"],Ge=["innerHTML"],Fe=q({__name:"CheckTask",props:{task:{}},setup(N){const{$event:S}=m(),L=J(),l=se(),{locale:U}=p(),r=te(),t=N,n=C(1),M=C(!1),Y=p().t("buttons.check"),d=C(0),v=()=>{switch(t.task.id){case e.SUBSCRIBE_X_ACCOUNT:return p().t("buttons.follow",{n:"X"});case e.GLEAM_TASKS:return p().t("buttons.join");default:return Y}},y=u(()=>{switch(t.task.id){case e.SUBSCRIBE_TELEGRAM_CHANNEL:case e.ADD_OUR_BOT:case e.SUBSCRIBE_TELEGRAM_GROUP:return!0;default:return!1}}),R=u(()=>{switch(t.task.id){case e.SUBSCRIBE_YOUTUBE_CHANNEL:return p().t("earn.subscribe_youtube_channel_description");case e.HAMSTER_YOUTUBE_ACADEMY:case e.HAMSTER_YOUTUBE_EASY_START:case e.HAMSTER_YOUTUBE_EASY_START_S1E23:case e.HAMSTER_YOUTUBE_EASY_START_S1E24:case e.HAMSTER_YOUTUBE_EASY_START_S1E25:case e.HAMSTER_YOUTUBE_EASY_START_S1E26:case e.HAMSTER_YOUTUBE_EASY_START_S1E27:case e.HAMSTER_YOUTUBE_EASY_START_S1E28:case e.HAMSTER_YOUTUBE_EASY_START_S1E29:case e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E5:case e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E6:case e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E7:case e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E8:case e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E9:case e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E10:case e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E11:case e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E12:case e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E13:case e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E14:return p().t(`earn.${t.task.id}_description`);default:return null}}),I=C(v()),A=C(!1);async function $(){var o;t.task.id===e.GLEAM_TASKS?G():t.task.link?(y.value&&(n.value=2),n.value===1?(x(),setTimeout(()=>{n.value=2,I.value=Y},200),G()):M.value||await W()):(o=t.task.linksWithLocales)!=null&&o.length?(y.value&&(n.value=2),n.value===1?(x(),setTimeout(()=>{n.value=2,I.value=Y},200),G()):M.value||await W()):M.value||await W()}const g=u(()=>t.task.id===e.EXCHANGE_SIGNUP_VIA_FRIEND_LINK?p().t("buttons.sign_up"):t.task.id===e.HAMSTER_YOUTUBE_ACADEMY||t.task.id===e.HAMSTER_YOUTUBE_EASY_START||t.task.id===e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E5||t.task.id===e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E6||t.task.id===e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E7||t.task.id===e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E8||t.task.id===e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E9||t.task.id===e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E10||t.task.id===e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E11||t.task.id===e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E12||t.task.id===e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E13||t.task.id===e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E14||t.task.id===e.HAMSTER_YOUTUBE_EASY_START_S1E23||t.task.id===e.HAMSTER_YOUTUBE_EASY_START_S1E24||t.task.id===e.HAMSTER_YOUTUBE_EASY_START_S1E25||t.task.id===e.HAMSTER_YOUTUBE_EASY_START_S1E26||t.task.id===e.HAMSTER_YOUTUBE_EASY_START_S1E27||t.task.id===e.HAMSTER_YOUTUBE_EASY_START_S1E28||t.task.id===e.HAMSTER_YOUTUBE_EASY_START_S1E29||t.task.id===e.HAMSTER_YOUTUBE_PARTNER_VIDEO_E1?p().t("buttons.watch_youtube_video"):p().t("buttons.join")),G=()=>{var O,D,V,f,B;let o=t.task.link;(O=t.task.linksWithLocales)!=null&&O.length&&(t.task.id===e.HAMSTER_YOUTUBE_LOCAL_SUBSCRIBE||t.task.id===e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E5||t.task.id===e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E6||t.task.id===e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E7||t.task.id===e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E8||t.task.id===e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E9||t.task.id===e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E10||t.task.id===e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E11||t.task.id===e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E12||t.task.id===e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E13||t.task.id===e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E14?(o=((D=t.task.linksWithLocales.find(k=>k.locale===F().language_code))==null?void 0:D.link)??"",o||(o=((V=t.task.linksWithLocales.find(k=>k.locale===U.value))==null?void 0:V.link)??"")):o=((f=t.task.linksWithLocales.find(k=>k.locale===F().language_code))==null?void 0:f.link)??"",o||(o=((B=t.task.linksWithLocales.find(k=>k.locale==="en"))==null?void 0:B.link)??"")),setTimeout(()=>{Ue(o??"",{open:{target:"_blank"}})},400)},W=async()=>{A.value=!0,await L.postCheckTask(t.task.id).then(async o=>{if(o.task.isCompleted){await L.postListTasks().then(()=>{setTimeout(()=>{F().taskNotification=!1},50)});const O={x_start_from:-20,x_start_to:window.innerWidth+20,y_start_from:-20,y_start_to:0,x_end_from:-20,x_end_to:window.innerWidth+20,y_end_from:window.innerHeight-64,y_end_to:window.innerHeight,count:200,delay:5,timeout_fly:1e3,direction_y:"from_bottom",random_end_x:!1};Te().settings.coins_animation&&S("coins-animate",O),S("bs:close"),S("check-task:success"),j.success({message:`${m().$i18n.t("messages.success")}`,duration:4e3})}else j.error({message:`${m().$i18n.t("messages.task_not_completed")}`,duration:4e3});setTimeout(()=>{A.value=!1},400)}).catch(o=>{A.value=!1,r.showErrorPush(),console.log(o)})},c=(o,O,D)=>{t.task.id===o&&!localStorage.getItem(O)&&!t.task.isCompleted&&(localStorage.setItem(O,String(r.getNowTimestamp())),M.value=!0,d.value=D)},i=(o,O,D)=>{if(!t.task.isCompleted&&t.task.id===o){const V=3600*D,f=localStorage.getItem(O);f&&(r.getNowTimestamp()-parseInt(f)>=V?(n.value=2,M.value=!1,d.value=0):(M.value=!0,d.value=r.secondsToHours(V-(r.getNowTimestamp()-parseInt(f))),console.log(d.value)))}t.task.isCompleted&&t.task.id===o&&localStorage.removeItem(O)},x=()=>{c(e.EXCHANGE_SIGNUP_VIA_FRIEND_LINK,s.BINGX,48),c(e.SUBSCRIBE_YOUTUBE_CHANNEL,s.SUBSCRIBE_YOUTUBE,1),c(e.SUBSCRIBE_MEDIUM,s.SUBSCRIBE_MEDIUM,24),c(e.SUBSCRIBE_DISCORD,s.SUBSCRIBE_DISCORD,24),c(e.SUBSCRIBE_FACEBOOK,s.SUBSCRIBE_FACEBOOK,1),c(e.HAMSTER_YOUTUBE_ACADEMY,s.HAMSTER_YOUTUBE_ACADEMY,1),c(e.HAMSTER_YOUTUBE_EASY_START,s.HAMSTER_YOUTUBE_EASY_START,1),c(e.HAMSTER_YOUTUBE_EASY_START_S1E23,s.HAMSTER_YOUTUBE_EASY_START_S1E23,1),c(e.HAMSTER_YOUTUBE_EASY_START_S1E24,s.HAMSTER_YOUTUBE_EASY_START_S1E24,1),c(e.HAMSTER_YOUTUBE_EASY_START_S1E25,s.HAMSTER_YOUTUBE_EASY_START_S1E25,1),c(e.HAMSTER_YOUTUBE_EASY_START_S1E26,s.HAMSTER_YOUTUBE_EASY_START_S1E26,1),c(e.HAMSTER_YOUTUBE_EASY_START_S1E27,s.HAMSTER_YOUTUBE_EASY_START_S1E27,1),c(e.HAMSTER_YOUTUBE_EASY_START_S1E28,s.HAMSTER_YOUTUBE_EASY_START_S1E28,1),c(e.HAMSTER_YOUTUBE_EASY_START_S1E29,s.HAMSTER_YOUTUBE_EASY_START_S1E29,1),c(e.HAMSTER_YOUTUBE_PARTNER_VIDEO_E1,s.HAMSTER_YOUTUBE_PARTNER_VIDEO_E1,1),c(e.SUBSCRIBE_TELEGRAM_CRYPTOFAM,s.SUBSCRIBE_TELEGRAM_CRYPTOFAM,1),c(e.HAMSTER_YOUTUBE_LOCAL_SUBSCRIBE,s.HAMSTER_YOUTUBE_LOCAL_SUBSCRIBE,1),c(e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E5,s.HAMSTER_YOUTUBE_LOCAL_VIDEO_E5,1),c(e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E6,s.HAMSTER_YOUTUBE_LOCAL_VIDEO_E6,1),c(e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E7,s.HAMSTER_YOUTUBE_LOCAL_VIDEO_E7,1),c(e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E8,s.HAMSTER_YOUTUBE_LOCAL_VIDEO_E8,1),c(e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E9,s.HAMSTER_YOUTUBE_LOCAL_VIDEO_E9,1),c(e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E10,s.HAMSTER_YOUTUBE_LOCAL_VIDEO_E10,1),c(e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E11,s.HAMSTER_YOUTUBE_LOCAL_VIDEO_E11,1),c(e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E12,s.HAMSTER_YOUTUBE_LOCAL_VIDEO_E12,1),c(e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E13,s.HAMSTER_YOUTUBE_LOCAL_VIDEO_E13,1),c(e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E14,s.HAMSTER_YOUTUBE_LOCAL_VIDEO_E14,1)},ne=()=>{i(e.EXCHANGE_SIGNUP_VIA_FRIEND_LINK,s.BINGX,48),i(e.SUBSCRIBE_YOUTUBE_CHANNEL,s.SUBSCRIBE_YOUTUBE,1),i(e.SUBSCRIBE_MEDIUM,s.SUBSCRIBE_MEDIUM,24),i(e.SUBSCRIBE_DISCORD,s.SUBSCRIBE_DISCORD,24),i(e.SUBSCRIBE_FACEBOOK,s.SUBSCRIBE_FACEBOOK,1),i(e.HAMSTER_YOUTUBE_ACADEMY,s.HAMSTER_YOUTUBE_ACADEMY,1),i(e.HAMSTER_YOUTUBE_EASY_START,s.HAMSTER_YOUTUBE_EASY_START,1),i(e.SUBSCRIBE_TELEGRAM_CRYPTOFAM,s.SUBSCRIBE_TELEGRAM_CRYPTOFAM,1),i(e.HAMSTER_YOUTUBE_EASY_START_S1E23,s.HAMSTER_YOUTUBE_EASY_START_S1E23,1),i(e.HAMSTER_YOUTUBE_EASY_START_S1E24,s.HAMSTER_YOUTUBE_EASY_START_S1E24,1),i(e.HAMSTER_YOUTUBE_EASY_START_S1E25,s.HAMSTER_YOUTUBE_EASY_START_S1E25,1),i(e.HAMSTER_YOUTUBE_EASY_START_S1E26,s.HAMSTER_YOUTUBE_EASY_START_S1E26,1),i(e.HAMSTER_YOUTUBE_EASY_START_S1E27,s.HAMSTER_YOUTUBE_EASY_START_S1E27,1),i(e.HAMSTER_YOUTUBE_EASY_START_S1E28,s.HAMSTER_YOUTUBE_EASY_START_S1E28,1),i(e.HAMSTER_YOUTUBE_EASY_START_S1E29,s.HAMSTER_YOUTUBE_EASY_START_S1E29,1),i(e.HAMSTER_YOUTUBE_PARTNER_VIDEO_E1,s.HAMSTER_YOUTUBE_PARTNER_VIDEO_E1,1),i(e.HAMSTER_YOUTUBE_LOCAL_SUBSCRIBE,s.HAMSTER_YOUTUBE_LOCAL_SUBSCRIBE,1),i(e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E5,s.HAMSTER_YOUTUBE_LOCAL_VIDEO_E5,1),i(e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E6,s.HAMSTER_YOUTUBE_LOCAL_VIDEO_E6,1),i(e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E7,s.HAMSTER_YOUTUBE_LOCAL_VIDEO_E7,1),i(e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E8,s.HAMSTER_YOUTUBE_LOCAL_VIDEO_E8,1),i(e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E9,s.HAMSTER_YOUTUBE_LOCAL_VIDEO_E9,1),i(e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E10,s.HAMSTER_YOUTUBE_LOCAL_VIDEO_E10,1),i(e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E11,s.HAMSTER_YOUTUBE_LOCAL_VIDEO_E11,1),i(e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E12,s.HAMSTER_YOUTUBE_LOCAL_VIDEO_E12,1),i(e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E13,s.HAMSTER_YOUTUBE_LOCAL_VIDEO_E13,1),i(e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E14,s.HAMSTER_YOUTUBE_LOCAL_VIDEO_E14,1)};ie(()=>{ne()});const Ee=()=>{x(),t.task.id!==e.GLEAM_TASKS&&setTimeout(()=>{n.value=2,I.value=Y},200)},Q=u(()=>{switch(t.task.id){case e.HAMSTER_YOUTUBE_ACADEMY:case e.HAMSTER_YOUTUBE_EASY_START:return m().$i18n.t(`earn.${t.task.id}_title`);case e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E5:case e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E6:case e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E7:case e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E8:case e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E9:case e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E10:case e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E11:case e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E12:case e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E13:case e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E14:return m().$i18n.t(`earn.${t.task.id}`);default:return L.getEarnName(t.task.id)}}),H=u(()=>{var o,O,D,V,f;if(t.task.link)return t.task.link;if((o=t.task.linksWithLocales)!=null&&o.length){let B="";if(t.task.id===e.HAMSTER_YOUTUBE_LOCAL_SUBSCRIBE||t.task.id===e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E5||t.task.id===e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E6||t.task.id===e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E7||t.task.id===e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E8||t.task.id===e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E9||t.task.id===e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E10||t.task.id===e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E11||t.task.id===e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E12||t.task.id===e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E13||t.task.id===e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E14){const{locale:k}=p();B=((O=t.task.linksWithLocales.find(ae=>ae.locale===F().language_code))==null?void 0:O.link)??"",B||(B=((D=t.task.linksWithLocales.find(ae=>ae.locale===k.value))==null?void 0:D.link)??"")}else B=((V=t.task.linksWithLocales.find(k=>k.locale===F().language_code))==null?void 0:V.link)??"";return B||(B=((f=t.task.linksWithLocales.find(k=>k.locale==="en"))==null?void 0:f.link)??"https://www.youtube.com/@hamsterkombat_official"),B}}),w=u(()=>{if(d.value){let o="";if(d.value>=1){const O=Math.floor(d.value);o=m().$i18n.t("plural.hours",{n:Math.ceil(Math.abs(O))})}else{const O=Math.floor(d.value*60);o=m().$i18n.t("plural.minutes",{n:Math.ceil(Math.abs(O))})}return o}else return m().$i18n.t("plural.hours",{n:Math.ceil(d.value)})});return(o,O)=>{const D=_e,V=de,f=Be,B=Ae,k=Se;return a(),T("div",ve,[E("div",ge,[h(D,{class:"is-coin-star",name:o.task.id},null,8,["name"])]),E("div",{class:"bs-content-title",innerHTML:_(Q)},null,8,Ve),E("div",{class:"bs-content-description",innerHTML:_(R)},null,8,be),o.task.link||o.task.linksWithLocales?(a(),T("div",ye,[h(V,{class:"button button-primary button-small",to:_(H),onClick:Ee,target:"_blank",innerHTML:_(g)},null,8,["to","innerHTML"])])):b("",!0),o.task.id===_(e).SELECT_EXCHANGE?(a(),T("div",$e,[h(f,{class:"button button-primary button-small",to:_(Le).GAME_SETTINGS_EXCHANGE,onClick:O[0]||(O[0]=()=>_(S)("bs:close")),innerHTML:o.$t("buttons.choose")},null,8,["to","innerHTML"])])):b("",!0),_(d)?(a(),T("div",Ne,P(o.$t("earn.wait",{hours:_(w)})),1)):b("",!0),E("div",we,[h(B,{price:o.task.rewardCoins,size:"large",round:!1,prefix:"+"},null,8,["price"])]),o.task.isCompleted?b("",!0):(a(),T("button",{key:3,class:"bottom-sheet-button button button-primary button-large",onClick:$,disabled:_(A)||_(l).stop||_(M)},[_(A)?(a(),K(k,{key:1})):(a(),T("span",{key:0,innerHTML:_(I)},null,8,Ge))],8,Pe))])}}}),Ke={class:"bs-content"},We={class:"bs-content-image is-boost"},xe=["innerHTML"],Xe=["innerHTML"],ze={class:"bs-content-daily"},je={class:"bs-content-daily-coin"},qe=["disabled"],Qe=["innerHTML"],Ze=q({__name:"DailyReward",props:{task:{}},setup(N){const{$event:S}=m(),L=J(),l=se(),U=te(),r=N,t=C(!1),n=u(()=>r.task.days??0);async function M(){await d()}const Y=A=>{if(A<n.value)return"is-completed";if(A>n.value)return"is-disabled";if(A===n.value)return r.task.isCompleted?"is-completed":"is-current"},d=async()=>{t.value=!0,await L.postCheckTask(r.task.id).then(async A=>{if(A.task.isCompleted){await L.postListTasks().then(()=>{setTimeout(()=>{F().taskNotification=!1},50)});const $={x_start_from:-20,x_start_to:window.innerWidth+20,y_start_from:-20,y_start_to:0,x_end_from:-20,x_end_to:window.innerWidth+20,y_end_from:window.innerHeight-64,y_end_to:window.innerHeight,count:200,delay:5,timeout_fly:1e3,direction_y:"from_bottom",random_end_x:!1};Te().settings.coins_animation&&S("coins-animate",$),S("bs:close"),S("check-task:success"),j.success({message:`${m().$i18n.t("messages.success")}`,duration:4e3}),setTimeout(()=>{Ce().checkAttraction()},1e3)}else j.error({message:`${m().$i18n.t("messages.task_not_completed")}`,duration:4e3});setTimeout(()=>{t.value=!1},400)}).catch(A=>{t.value=!1,U.showErrorPush(),console.log(A)})},v=u(()=>t.value||r.task.isCompleted||l.stop),y=u(()=>r.task.isCompleted?m().$i18n.t("buttons.return_tomorrow"):m().$i18n.t("buttons.claim")),R=A=>({content:I(A.days),triggers:["click"],delay:0,distance:4,theme:"hk-tooltip",placement:"top",container:".bs-content-daily",html:!0}),I=A=>{const $=me();$.locale(U.getLocaleForDate());const g=$().utc();return A===n.value?`<b>${g.format("LL")}</b>`:g.add(A-n.value,"day").format("LL")};return(A,$)=>{const g=_e,G=He,W=Se,c=ee("tooltip");return a(),T("div",Ke,[E("div",We,[h(g,{name:A.task.id},null,8,["name"])]),E("div",{class:"bs-content-title",innerHTML:A.$t("earn.daily_reward_title")},null,8,xe),E("div",{class:"bs-content-description",innerHTML:A.$t("earn.daily_reward_description")},null,8,Xe),E("ul",ze,[(a(!0),T(X,null,z(A.task.rewardsByDays,i=>Z((a(),T("li",{key:i.days,class:ce(Y(i.days))},[E("span",null,P(A.$t("earn.day"))+" "+P(i.days),1),E("div",je,[h(G)]),E("p",null,P(_(U).numberFormat(i.rewardCoins,!0)),1)],2)),[[c,R(i)]])),128))]),E("button",{class:"bottom-sheet-button button button-primary button-large is-sticky",onClick:M,disabled:_(v)},[_(t)?(a(),K(W,{key:1})):(a(),T("span",{key:0,innerHTML:_(y)},null,8,Qe))],8,qe)])}}}),Je={class:"bs-content"},et={class:"bs-content-image is-hamster-drop"},tt=E("div",{class:"bs-content-image-round-bg is-yellow"},null,-1),st=["innerHTML"],_t=["innerHTML"],nt={class:"bs-content-dropdown"},Et={class:"hk-dropdown-placeholder"},at={class:"hk-dropdown-value"},ot={class:"hk-dropdown-icon"},it=["onClick"],Tt={class:"is-white"},ct={class:"bs-content-description"},rt={key:0,class:"bs-content-target"},At={class:"bs-content-info"},St=["disabled"],lt=["innerHTML"],Ot=q({__name:"HamsterDrop",props:{task:{}},setup(N){const{$event:S}=m(),L=J(),l=se(),U=te(),r=N,t=C(1),n=C(!1),M=p().t("buttons.check"),Y=C(0),d=()=>M,v=C(null),y=C(""),R=C(!1),I=[{key:"EMEA",link:"https://hamsterkombat.art"},{key:"NA",link:"https://hamsterkombat.art"},{key:"LATAM",link:"https://hamsterkombat.art"},{key:"APAC",link:"https://hamsterkombat.art"},{key:"CIS",link:"https://ozon.onelink.me/SNMZ/qdi9sru3"}],A=u(()=>p().t("earn.hamster_drop_description",{game:le.GAME_NAME})),$=C(d()),g=C(!1);async function G(){t.value===1?(x(),setTimeout(()=>{t.value=2,$.value=M},200),c()):n.value||await i()}const W=u(()=>p().t("earn.hamster_drop_button",{game:le.GAME_NAME})),c=()=>{setTimeout(()=>{Ue(v.value??"",{open:{target:"_blank"}})},400)},i=async()=>{g.value=!0,await L.postCheckTask(r.task.id).then(async H=>{if(H.task.isCompleted){await L.postListTasks();const w={x_start_from:-20,x_start_to:window.innerWidth+20,y_start_from:-20,y_start_to:0,x_end_from:-20,x_end_to:window.innerWidth+20,y_end_from:window.innerHeight-64,y_end_to:window.innerHeight,count:200,delay:5,timeout_fly:1e3,direction_y:"from_bottom",random_end_x:!1};Te().settings.coins_animation&&S("coins-animate",w),S("bs:close"),S("check-task:success"),j.success({message:`${m().$i18n.t("messages.success")}`,duration:4e3})}else j.error({message:`${m().$i18n.t("messages.task_not_completed")}`,duration:4e3});setTimeout(()=>{g.value=!1},400)}).catch(H=>{g.value=!1,U.showErrorPush(),console.log(H)})},x=()=>{r.task.id===e.HAMSTER_DROP&&!localStorage.getItem(s.HAMSTER_DROP)&&!r.task.isCompleted&&(localStorage.setItem(s.HAMSTER_DROP,String(U.getNowTimestamp())),n.value=!0,Y.value=1)};ie(()=>{if(["ru","kk","uz","be"].indexOf(F().language_code)>-1?Q(I[4]):Q(I[0]),!r.task.isCompleted&&r.task.id===e.HAMSTER_DROP){const w=localStorage.getItem(s.HAMSTER_DROP);w&&(U.getNowTimestamp()-parseInt(w)>=3600?(t.value=2,n.value=!1):(n.value=!0,Y.value=U.secondsToHours(3600-(U.getNowTimestamp()-parseInt(w)))))}r.task.isCompleted&&r.task.id===e.HAMSTER_DROP&&localStorage.removeItem(s.HAMSTER_DROP)});const ne=()=>{x(),setTimeout(()=>{t.value=2,$.value=M},200)},Ee=u(()=>L.getEarnName(r.task.id)),Q=H=>{R.value=!1,y.value=m().$i18n.t(`earn.hamster_drop_${H.key}`),v.value=H.link};return(H,w)=>{const o=_e,O=re,D=de,V=Ae,f=Se;return a(),T("div",Je,[E("div",et,[tt,h(o,{name:"hamster_drop_dialog"})]),E("div",{class:"bs-content-title",innerHTML:_(Ee)},null,8,st),E("div",{class:"bs-content-description is-hamster-drop",innerHTML:_(A)},null,8,_t),E("div",nt,[E("div",{class:ce(["hk-dropdown",{"is-open":_(R)}])},[E("div",{class:"hk-dropdown-select",onClick:w[0]||(w[0]=B=>R.value=!_(R))},[E("div",Et,P(H.$t("earn.hamster_drop_select")),1),E("div",at,P(_(y)),1),E("div",ot,[h(O,{name:"caret-right"})])]),Z(E("ul",null,[(a(),T(X,null,z(I,B=>E("li",{key:B.key,onClick:k=>Q(B)},[E("span",Tt,P(`${B.key} `),1),E("span",null,"("+P(H.$t(`earn.hamster_drop_${B.key}`))+")",1)],8,it)),64))],512),[[Me,_(R)]])],2)]),E("div",ct,[h(D,{class:"button button-primary button-small",to:_(v),onClick:ne,target:"_blank",innerHTML:_(W)},null,8,["to","innerHTML"])]),_(Y)?(a(),T("div",rt,P(H.$t("earn.wait",{hours:Math.ceil(_(Y))})),1)):b("",!0),E("div",At,[h(V,{price:H.task.rewardCoins,size:"large",round:!1,prefix:"+"},null,8,["price"])]),H.task.isCompleted?b("",!0):(a(),T("button",{key:1,class:"bottom-sheet-button button button-primary button-large",onClick:G,disabled:_(g)||_(l).stop||_(n)},[_(g)?(a(),K(f,{key:1})):(a(),T("span",{key:0,innerHTML:_($)},null,8,lt))],8,St))])}}}),Ut={class:"earn-item-image"},dt={class:"earn-item-content"},Rt=["innerHTML"],ut={class:"earn-item-content-bottom"},Lt={class:"earn-item-icon"},Bt={key:0,class:"earn-item-icon-success"},mt=q({__name:"Earn",props:{task:{}},setup(N){const S=J(),{$event:L}=m(),l=N;C(!1);const U=u(()=>l.task.isCompleted),r=u(()=>l.task.id===e.STREAK_DAYS?l.task.rewardsByDays.reduce((n,M)=>n+M.rewardCoins,0):l.task.rewardCoins),t=async()=>{l.task.id===e.STREAK_DAYS?L("bs:open",{component:oe(Ze),props:{task:l.task}}):l.task.id===e.HAMSTER_DROP?L("bs:open",{component:oe(Ot),props:{task:l.task}}):L("bs:open",{component:oe(Fe),props:{task:l.task}})};return(n,M)=>{const Y=_e,d=Ae,v=re,y=ee("motion-pop");return a(),T("div",{class:ce(["earn-item",{"is-completed":_(U)}]),onClick:t},[E("div",Ut,[Z(h(Y,{name:n.task.id},null,8,["name"]),[[y]])]),E("div",dt,[E("div",{class:"earn-item-content-top",innerHTML:_(S).getEarnName(n.task.id)},null,8,Rt),E("div",ut,[h(d,{price:_(r),prefix:"+",round:!1},null,8,["price"])])]),E("div",Lt,[_(U)?(a(),T("div",Bt,[h(v,{name:"check"})])):(a(),K(v,{key:1,name:"caret-right"}))])],2)}}}),Mt={class:"main"},kt={class:"inner earn"},Yt={class:"earn-top"},Ht={class:"earn-top-image"},Ct=["src"],It=["innerHTML"],pt=["innerHTML"],ht={key:1,class:"earn-column"},Dt=["innerHTML"],ft={key:3,class:"earn-column"},vt=["innerHTML"],gt={key:5,class:"earn-column"},Vt=["innerHTML"],bt={class:"earn-column"},Gt=q({__name:"earn",setup(N){p(),se(),ke();const S=J(),L=F();ie(()=>{S.postListTasks(),L.taskNotification=!1});const l=u(()=>S.tasks.filter(n=>n.id.includes("hamster_youtube_"))??[]),U=u(()=>S.tasks.filter(n=>(n.id===e.EXCHANGE_SIGNUP_VIA_FRIEND_LINK||n.id===e.HAMSTER_DROP)&&!n.id.includes("hamster_youtube_"))??[]),r=u(()=>S.tasks.filter(n=>n.periodicity===Oe.ONCE&&n.id!==e.EXCHANGE_SIGNUP_VIA_FRIEND_LINK&&n.id!==e.HAMSTER_DROP&&!n.id.includes("hamster_youtube_"))??[]),t=u(()=>S.tasks.filter(n=>n.periodicity===Oe.REPEATEDLY&&n.id!==e.EXCHANGE_SIGNUP_VIA_FRIEND_LINK&&n.id!==e.HAMSTER_DROP&&!n.id.includes("hamster_youtube_"))??[]);return(n,M)=>{const Y=re,d=mt,v=ee("motion-slide-top"),y=ee("motion-slide-right");return a(),T("main",Mt,[E("div",kt,[E("div",Yt,[Z((a(),T("div",Ht,[h(Y,{name:"glow"}),E("img",{class:"img-responsive",src:"IMAGE_COIN"in n?n.IMAGE_COIN:_(Ye)},null,8,Ct)])),[[v]]),Z(E("div",{class:"earn-top-title",innerHTML:n.$t("earn.title")},null,8,It),[[y]])]),_(l).length?(a(),T("div",{key:0,class:"section-title",innerHTML:n.$t("earn.hamster_youtube")},null,8,pt)):b("",!0),_(l).length?(a(),T("div",ht,[(a(!0),T(X,null,z(_(l),(R,I)=>(a(),K(d,{key:`${R.id}`,task:R},null,8,["task"]))),128))])):b("",!0),_(U).length?(a(),T("div",{key:2,class:"section-title",innerHTML:n.$t("earn.specials")},null,8,Dt)):b("",!0),_(U).length?(a(),T("div",ft,[(a(!0),T(X,null,z(_(U),(R,I)=>(a(),K(d,{key:`${R.id}`,task:R},null,8,["task"]))),128))])):b("",!0),_(r).length?(a(),T("div",{key:4,class:"section-title",innerHTML:n.$t("earn.daily_tasks")},null,8,vt)):b("",!0),_(r).length?(a(),T("div",gt,[(a(!0),T(X,null,z(_(t),(R,I)=>(a(),K(d,{key:`${R.id}`,task:R},null,8,["task"]))),128))])):b("",!0),E("div",{class:"section-title",innerHTML:n.$t("earn.tasks")},null,8,Vt),E("div",bt,[(a(!0),T(X,null,z(_(r),(R,I)=>(a(),K(d,{key:`${R.id}`,task:R},null,8,["task"]))),128))])])])}}});export{Gt as default};