(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{383:function(e,t,n){"use strict";var s=n(0),o=n(117),a=n(27);const r=Object(a.a)(o("draw-"));t.a=()=>{const[e,t]=r();return[e,Object(s.useCallback)(()=>{t(o("draw-"))},[t])]}},385:function(e,t,n){"use strict";var s=n(0),o=n(27);t.a=((e,t)=>{const n=Object(o.a)(()=>{try{const t=window.localStorage.getItem(e);if(t)return JSON.parse(t)}catch(e){console.error(e)}try{window.localStorage.setItem(e,JSON.stringify(t))}catch(e){console.error(e)}return t});return()=>{const[o,a]=n(),r=Object(s.useCallback)(t=>{try{const n=t instanceof Function?t(o):t;a(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(e){console.error(e)}},[a]),g=Object(s.useCallback)(()=>{a(t);try{window.localStorage.removeItem(e)}catch(e){console.error(e)}},[a]);return[o,r,g]}})("store:xray",!1)},387:function(e){e.exports=JSON.parse('{"Albania":{"confederation":"UEFA","bert":"alb","flag":"al"},"Andorra":{"confederation":"UEFA","bert":"and","flag":"ad"},"Armenia":{"confederation":"UEFA","bert":"arm","flag":"am"},"Austria":{"confederation":"UEFA","bert":"aut","flag":"at"},"Azerbaijan":{"confederation":"UEFA","bert":"azb","flag":"az"},"Belgium":{"confederation":"UEFA","bert":"bel","flag":"be"},"Belarus":{"confederation":"UEFA","bert":"bls","flag":"by"},"Bosnia & Herzegovina":{"confederation":"UEFA","bert":"bos","flag":"ba"},"Bulgaria":{"confederation":"UEFA","bert":"bul","flag":"bg"},"Croatia":{"confederation":"UEFA","bert":"cro","flag":"hr"},"Cyprus":{"confederation":"UEFA","bert":"cyp","flag":"cy"},"Czechia":{"confederation":"UEFA","bert":"cze","flag":"cz"},"Denmark":{"confederation":"UEFA","bert":"den","flag":"dk"},"England":{"confederation":"UEFA","bert":"eng","flag":"gb-eng"},"Spain":{"confederation":"UEFA","bert":"esp","flag":"es"},"Estonia":{"confederation":"UEFA","bert":"est","flag":"ee"},"Faroe Islands":{"confederation":"UEFA","bert":"far","flag":"fo"},"Finland":{"confederation":"UEFA","bert":"fin","flag":"fi"},"France":{"confederation":"UEFA","bert":"fra","flag":"fr"},"Georgia":{"confederation":"UEFA","bert":"geo","flag":"ge"},"Germany":{"confederation":"UEFA","bert":"ger","flag":"de"},"Gibraltar":{"confederation":"UEFA","bert":"gib","flag":"gi"},"Greece":{"confederation":"UEFA","bert":"gre","flag":"gr"},"Hungary":{"confederation":"UEFA","bert":"hun","flag":"hu"},"Ireland":{"confederation":"UEFA","bert":"irl","flag":"ie"},"Iceland":{"confederation":"UEFA","bert":"isl","flag":"is"},"Israel":{"confederation":"UEFA","bert":"isr","flag":"il"},"Italy":{"confederation":"UEFA","bert":"ita","flag":"it"},"Kazakhstan":{"confederation":"UEFA","bert":"kaz","flag":"kz"},"Kosovo":{"confederation":"UEFA","bert":"kos","flag":"xk"},"Latvia":{"confederation":"UEFA","bert":"lat","flag":"lv"},"Liechtenstein":{"confederation":"UEFA","bert":"lie","flag":"li"},"Lithuania":{"confederation":"UEFA","bert":"lit","flag":"lt"},"Luxembourg":{"confederation":"UEFA","bert":"lux","flag":"lu"},"North Macedonia":{"confederation":"UEFA","bert":"mac","flag":"mk"},"Malta":{"confederation":"UEFA","bert":"mlt","flag":"mt"},"Moldova":{"confederation":"UEFA","bert":"mol","flag":"md"},"Montenegro":{"confederation":"UEFA","bert":"mon","flag":"me"},"Netherlands":{"confederation":"UEFA","bert":"ned","flag":"nl"},"Northern Ireland":{"confederation":"UEFA","bert":"nir","flag":"gb-nir"},"Norway":{"confederation":"UEFA","bert":"nor","flag":"no"},"Poland":{"confederation":"UEFA","bert":"pol","flag":"pl"},"Portugal":{"confederation":"UEFA","bert":"por","flag":"pt"},"Romania":{"confederation":"UEFA","bert":"rom","flag":"ro"},"Russia":{"confederation":"UEFA","bert":"rus","flag":"ru"},"Scotland":{"confederation":"UEFA","bert":"sco","flag":"gb-sct"},"Slovenia":{"confederation":"UEFA","bert":"slo","flag":"si"},"San Marino":{"confederation":"UEFA","bert":"sma","flag":"sm"},"Serbia":{"confederation":"UEFA","bert":"srb","flag":"rs"},"Switzerland":{"confederation":"UEFA","bert":"sui","flag":"ch"},"Slovakia":{"confederation":"UEFA","bert":"svk","flag":"sk"},"Sweden":{"confederation":"UEFA","bert":"swe","flag":"se"},"Turkey":{"confederation":"UEFA","bert":"tur","flag":"tr"},"Ukraine":{"confederation":"UEFA","bert":"ukr","flag":"ua"},"Wales":{"confederation":"UEFA","bert":"wal","flag":"gb-wls"},"Brazil":{"flag":"br","confederation":"CONMEBOL"},"Uruguay":{"flag":"uy","confederation":"CONMEBOL"},"Argentina":{"flag":"ar","confederation":"CONMEBOL"},"Peru":{"flag":"pe","confederation":"CONMEBOL"},"Colombia":{"flag":"co","confederation":"CONMEBOL"},"Mexico":{"flag":"mx","confederation":"CONCACAF"},"Costa Rica":{"flag":"cr","confederation":"CONCACAF"},"Panama":{"flag":"pa","confederation":"CONCACAF"},"Tunisia":{"flag":"tn","confederation":"CAF"},"Egypt":{"flag":"eg","confederation":"CAF"},"Senegal":{"flag":"sn","confederation":"CAF"},"Nigeria":{"flag":"ng","confederation":"CAF"},"Morocco":{"flag":"ma","confederation":"CAF"},"Iran":{"flag":"ir","confederation":"AFC"},"Australia":{"flag":"au","confederation":"AFC"},"Japan":{"flag":"jp","confederation":"AFC"},"South Korea":{"flag":"kr","confederation":"AFC"},"Saudi Arabia":{"flag":"sa","confederation":"AFC"}}')},412:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return g}));var s=n(119);const o=n.n(s).a.getParser(window.navigator.userAgent),a=o.getPlatformType(),r="mobile"===a||"tablet"===a,g="Firefox"===o.getBrowserName()},419:function(e,t,n){"use strict";t.a=(e="")=>`${e}${Math.random().toString(36).slice(2)}`},420:function(e,t,n){"use strict";var s=n(114),o=n(387);const a=n(434),r=n(435);t.a=s(e=>("Belarus"===e?r:a)(`./${o[e].flag}.svg`).default)},429:function(e,t,n){var s={"./cl/gs":[411,9,1,0,2],"./cl/gs/":[411,9,1,0,2],"./cl/gs/index":[411,9,1,0,2],"./cl/gs/index.tsx":[411,9,1,0,2],"./cl/gs/worker":[404,7,7],"./cl/gs/worker.ts":[404,7,7],"./cl/ko":[405,9,1,0,3],"./cl/ko/":[405,9,1,0,3],"./cl/ko/index":[405,9,1,0,3],"./cl/ko/index.tsx":[405,9,1,0,3],"./el/gs":[406,9,1,0,4],"./el/gs/":[406,9,1,0,4],"./el/gs/index":[406,9,1,0,4],"./el/gs/index.tsx":[406,9,1,0,4],"./el/gs/worker":[407,7,8],"./el/gs/worker.ts":[407,7,8],"./el/ko":[408,9,1,0,5],"./el/ko/":[408,9,1,0,5],"./el/ko/index":[408,9,1,0,5],"./el/ko/index.tsx":[408,9,1,0,5],"./wc/gs":[409,9,1,0,6],"./wc/gs/":[409,9,1,0,6],"./wc/gs/index":[409,9,1,0,6],"./wc/gs/index.tsx":[409,9,1,0,6],"./wc/gs/worker":[410,7,10],"./wc/gs/worker.ts":[410,7,10]};function o(e){if(!n.o(s,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=s[e],o=t[0];return Promise.all(t.slice(2).map(n.e)).then((function(){return n.t(o,t[1])}))}o.keys=function(){return Object.keys(s)},o.id=429,e.exports=o},430:function(e){e.exports=JSON.parse('[["Real Madrid","Barcelona"],["Real Madrid","Atlético"],["Man City","Man United"],["Chelsea","Arsenal"],["Chelsea","Tottenham"],["Arsenal","Tottenham"],["Milan","Internazionale"],["Benfica","Porto"],["Benfica","Sporting"],["CSKA","Spartak"],["CSKA","Zenit"],["Zenit","Spartak"],["Shakhtar","Dinamo Kiev"],["Olympiakos","Panathinaikos"]]')},431:function(e,t,n){var s={"./cl/gs/2018/pairings.txt":[466,30],"./cl/gs/2019/pairings.txt":[467,32],"./cl/gs/2020/pairings.txt":[468,34],"./el/gs/2018/pairings.txt":[469,62],"./el/gs/2019/pairings.txt":[470,64]};function o(e){if(!n.o(s,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=s[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(s)},o.id=431,e.exports=o},432:function(e,t,n){var s={"./cl/gs/2000/pots.json":[471,12],"./cl/gs/2001/pots.json":[472,13],"./cl/gs/2002/pots.json":[473,14],"./cl/gs/2003/pots.json":[474,15],"./cl/gs/2004/pots.json":[475,16],"./cl/gs/2005/pots.json":[476,17],"./cl/gs/2006/pots.json":[477,18],"./cl/gs/2007/pots.json":[478,19],"./cl/gs/2008/pots.json":[479,20],"./cl/gs/2009/pots.json":[480,21],"./cl/gs/2010/pots.json":[481,22],"./cl/gs/2011/pots.json":[482,23],"./cl/gs/2012/pots.json":[483,24],"./cl/gs/2013/pots.json":[484,25],"./cl/gs/2014/pots.json":[485,26],"./cl/gs/2015/pots.json":[486,27],"./cl/gs/2016/pots.json":[487,28],"./cl/gs/2017/pots.json":[488,29],"./cl/gs/2018/pots.json":[489,31],"./cl/gs/2019/pots.json":[490,33],"./cl/gs/2020/pots.json":[491,35],"./cl/ko/2003/pots.json":[492,36],"./cl/ko/2004/pots.json":[493,37],"./cl/ko/2005/pots.json":[494,38],"./cl/ko/2006/pots.json":[495,39],"./cl/ko/2007/pots.json":[496,40],"./cl/ko/2008/pots.json":[497,41],"./cl/ko/2009/pots.json":[498,42],"./cl/ko/2010/pots.json":[499,43],"./cl/ko/2011/pots.json":[500,44],"./cl/ko/2012/pots.json":[501,45],"./cl/ko/2013/pots.json":[502,46],"./cl/ko/2014/pots.json":[503,47],"./cl/ko/2015/pots.json":[504,48],"./cl/ko/2016/pots.json":[505,49],"./cl/ko/2017/pots.json":[506,50],"./cl/ko/2018/pots.json":[507,51],"./cl/ko/2019/pots.json":[508,52],"./el/gs/2009/pots.json":[509,53],"./el/gs/2010/pots.json":[510,54],"./el/gs/2011/pots.json":[511,55],"./el/gs/2012/pots.json":[512,56],"./el/gs/2013/pots.json":[513,57],"./el/gs/2014/pots.json":[514,58],"./el/gs/2015/pots.json":[515,59],"./el/gs/2016/pots.json":[516,60],"./el/gs/2017/pots.json":[517,61],"./el/gs/2018/pots.json":[518,63],"./el/gs/2019/pots.json":[519,65],"./el/ko/2009/pots.json":[520,66],"./el/ko/2010/pots.json":[521,67],"./el/ko/2011/pots.json":[522,68],"./el/ko/2012/pots.json":[523,69],"./el/ko/2013/pots.json":[524,70],"./el/ko/2014/pots.json":[525,71],"./el/ko/2015/pots.json":[526,72],"./el/ko/2016/pots.json":[527,73],"./el/ko/2017/pots.json":[528,74],"./el/ko/2018/pots.json":[529,75],"./el/ko/2019/pots.json":[530,76]};function o(e){if(!n.o(s,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=s[e],o=t[0];return n.e(t[1]).then((function(){return n.t(o,3)}))}o.keys=function(){return Object.keys(s)},o.id=432,e.exports=o},433:function(e,t,n){var s={"./wc-2018.txt":[531,81]};function o(e){if(!n.o(s,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=s[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(s)},o.id=433,e.exports=o},434:function(e,t,n){var s={"./ad.svg":123,"./ae.svg":124,"./af.svg":125,"./ag.svg":126,"./ai.svg":127,"./al.svg":128,"./am.svg":129,"./ao.svg":130,"./aq.svg":131,"./ar.svg":132,"./as.svg":133,"./at.svg":134,"./au.svg":135,"./aw.svg":136,"./ax.svg":137,"./az.svg":138,"./ba.svg":139,"./bb.svg":140,"./bd.svg":141,"./be.svg":142,"./bf.svg":143,"./bg.svg":144,"./bh.svg":145,"./bi.svg":146,"./bj.svg":147,"./bl.svg":148,"./bm.svg":149,"./bn.svg":150,"./bo.svg":151,"./bq.svg":152,"./br.svg":153,"./bs.svg":154,"./bt.svg":155,"./bv.svg":156,"./bw.svg":157,"./by.svg":158,"./bz.svg":159,"./ca.svg":160,"./cc.svg":161,"./cd.svg":162,"./cf.svg":163,"./cg.svg":164,"./ch.svg":165,"./ci.svg":166,"./ck.svg":167,"./cl.svg":168,"./cm.svg":169,"./cn.svg":170,"./co.svg":171,"./cr.svg":172,"./cu.svg":173,"./cv.svg":174,"./cw.svg":175,"./cx.svg":176,"./cy.svg":177,"./cz.svg":178,"./de.svg":179,"./dj.svg":180,"./dk.svg":181,"./dm.svg":182,"./do.svg":183,"./dz.svg":184,"./ec.svg":185,"./ee.svg":186,"./eg.svg":187,"./eh.svg":188,"./er.svg":189,"./es-ca.svg":190,"./es-ga.svg":191,"./es.svg":192,"./et.svg":193,"./eu.svg":194,"./fi.svg":195,"./fj.svg":196,"./fk.svg":197,"./fm.svg":198,"./fo.svg":199,"./fr.svg":200,"./ga.svg":201,"./gb-eng.svg":202,"./gb-nir.svg":203,"./gb-sct.svg":204,"./gb-wls.svg":205,"./gb.svg":206,"./gd.svg":207,"./ge.svg":208,"./gf.svg":209,"./gg.svg":210,"./gh.svg":211,"./gi.svg":212,"./gl.svg":213,"./gm.svg":214,"./gn.svg":215,"./gp.svg":216,"./gq.svg":217,"./gr.svg":218,"./gs.svg":219,"./gt.svg":220,"./gu.svg":221,"./gw.svg":222,"./gy.svg":223,"./hk.svg":224,"./hm.svg":225,"./hn.svg":226,"./hr.svg":227,"./ht.svg":228,"./hu.svg":229,"./id.svg":230,"./ie.svg":231,"./il.svg":232,"./im.svg":233,"./in.svg":234,"./io.svg":235,"./iq.svg":236,"./ir.svg":237,"./is.svg":238,"./it.svg":239,"./je.svg":240,"./jm.svg":241,"./jo.svg":242,"./jp.svg":243,"./ke.svg":244,"./kg.svg":245,"./kh.svg":246,"./ki.svg":247,"./km.svg":248,"./kn.svg":249,"./kp.svg":250,"./kr.svg":251,"./kw.svg":252,"./ky.svg":253,"./kz.svg":254,"./la.svg":255,"./lb.svg":256,"./lc.svg":257,"./li.svg":258,"./lk.svg":259,"./lr.svg":260,"./ls.svg":261,"./lt.svg":262,"./lu.svg":263,"./lv.svg":264,"./ly.svg":265,"./ma.svg":266,"./mc.svg":267,"./md.svg":268,"./me.svg":269,"./mf.svg":270,"./mg.svg":271,"./mh.svg":272,"./mk.svg":273,"./ml.svg":274,"./mm.svg":275,"./mn.svg":276,"./mo.svg":277,"./mp.svg":278,"./mq.svg":279,"./mr.svg":280,"./ms.svg":281,"./mt.svg":282,"./mu.svg":283,"./mv.svg":284,"./mw.svg":285,"./mx.svg":286,"./my.svg":287,"./mz.svg":288,"./na.svg":289,"./nc.svg":290,"./ne.svg":291,"./nf.svg":292,"./ng.svg":293,"./ni.svg":294,"./nl.svg":295,"./no.svg":296,"./np.svg":297,"./nr.svg":298,"./nu.svg":299,"./nz.svg":300,"./om.svg":301,"./pa.svg":302,"./pe.svg":303,"./pf.svg":304,"./pg.svg":305,"./ph.svg":306,"./pk.svg":307,"./pl.svg":308,"./pm.svg":309,"./pn.svg":310,"./pr.svg":311,"./ps.svg":312,"./pt.svg":313,"./pw.svg":314,"./py.svg":315,"./qa.svg":316,"./re.svg":317,"./ro.svg":318,"./rs.svg":319,"./ru.svg":320,"./rw.svg":321,"./sa.svg":322,"./sb.svg":323,"./sc.svg":324,"./sd.svg":325,"./se.svg":326,"./sg.svg":327,"./sh.svg":328,"./si.svg":329,"./sj.svg":330,"./sk.svg":331,"./sl.svg":332,"./sm.svg":333,"./sn.svg":334,"./so.svg":335,"./sr.svg":336,"./ss.svg":337,"./st.svg":338,"./sv.svg":339,"./sx.svg":340,"./sy.svg":341,"./sz.svg":342,"./tc.svg":343,"./td.svg":344,"./tf.svg":345,"./tg.svg":346,"./th.svg":347,"./tj.svg":348,"./tk.svg":349,"./tl.svg":350,"./tm.svg":351,"./tn.svg":352,"./to.svg":353,"./tr.svg":354,"./tt.svg":355,"./tv.svg":356,"./tw.svg":357,"./tz.svg":358,"./ua.svg":359,"./ug.svg":360,"./um.svg":361,"./un.svg":362,"./us.svg":363,"./uy.svg":364,"./uz.svg":365,"./va.svg":366,"./vc.svg":367,"./ve.svg":368,"./vg.svg":369,"./vi.svg":370,"./vn.svg":371,"./vu.svg":372,"./wf.svg":373,"./ws.svg":374,"./xk.svg":375,"./ye.svg":376,"./yt.svg":377,"./za.svg":378,"./zm.svg":379,"./zw.svg":380};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}o.keys=function(){return Object.keys(s)},o.resolve=a,e.exports=o,o.id=434},435:function(e,t,n){var s={"./by.svg":436};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}o.keys=function(){return Object.keys(s)},o.resolve=a,e.exports=o,o.id=435},436:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/by.3c7d510.svg"},533:function(e,t,n){"use strict";n.r(t);var s=n(0),o=n.n(s),a=n(116),r=n(2),g=n(12),c=n(383),l=n(385),i=n(4);var v=i.b.div`
  visibility: ${e=>e.visible?"":"hidden"};
`,f={bertHost:"https://kassiesa.net/uefa",defaultTournament:"cl",defaultStage:"gs",currentSeason:{wc:2018,uefa:{cl:{gs:2020,ko:2019},el:{gs:2019,ko:2019}}}},u=n(418);var m,d=(m={cl:{title:"CL draw simulator",favicon:"//img.uefa.com/imgml/favicon/comp/ucl.ico",themeColor:"#00336a",description:"Champions League draw simulator"},el:{title:"EL draw simulator",favicon:"//img.uefa.com/imgml/favicon/comp/uefacup.ico",themeColor:"#f68e00",description:"Europa League draw simulator"},wc:{title:"FIFA World Cup draw simulator",favicon:"//img.fifa.com/image/upload/t_fe-auto/assets/img/icons/favicon.ico",themeColor:"#326295",description:"FIFA World Cup draw simulator"}},e=>m[e]);const p={path:"/:tournament",sensitive:!0};var b=Object(s.memo)(()=>{const e=Object(r.h)(p),t=e&&d(e.params.tournament)||null;return t&&o.a.createElement(u.a,null,o.a.createElement("title",null,t.title),o.a.createElement("link",{rel:"icon",type:"image/x-icon",href:t.favicon}),o.a.createElement("meta",{name:"theme-color",content:t.themeColor}),o.a.createElement("meta",{name:"description",content:t.description}))});const h=i.b.label`
  display: flex;
  align-items: center;
  margin-left: 3px;
  margin-right: 3px;
`,E=i.b.div`
  margin-left: 0.5rem;
  user-select: none;
`;var k=Object(s.memo)(({children:e,onChange:t,...n})=>{const a=Object(s.useCallback)(e=>{t(e.target.checked)},[t]);return o.a.createElement(h,null,o.a.createElement("input",Object.assign({type:"checkbox",onChange:a},n)),o.a.createElement(E,null,e))});var j=i.b.button`
  cursor: pointer;
`,w=n(412),A=n(111),F=n(419),y=e=>(e=>{const[t,n]=Object(s.useState)(e());return[t,Object(s.useCallback)(()=>{n(e())},[e])]})(Object(s.useCallback)(()=>Object(F.a)(e),[e]));const O=i.b.div`
  display: inline;
  margin-left: 3px;
  margin-right: 3px;
`,C=i.b.label`
  display: none;
`;var U=Object(s.memo)(({label:e,children:t,...n})=>{const[s]=y("select-");return o.a.createElement(O,null,o.a.createElement(C,{htmlFor:s},e),o.a.createElement("select",Object.assign({id:s,title:e},n),t))});const{wc:x,uefa:S}=f.currentSeason;var N=(e,t)=>"wc"===e?x:S[e||"cl"][t||"gs"];const z={cl:2e3,el:2009,wc:2018};var I=Object(s.memo)(({tournament:e,stage:t,season:n,onChange:a})=>{const r=Object(s.useCallback)(n=>{const s=+n.target.value;a(e,t,s)},[e,t,a]),g=Object(s.useCallback)(e=>{const n=e.target.value;a(n,t,N(n,t))},[t,a]),c=Object(s.useCallback)(t=>{const n=t.target.value;a(e,n,N(e,n))},[e,a]),l=z[e];return o.a.createElement("div",null,o.a.createElement(U,{label:"tournament",onChange:g,value:e},o.a.createElement("option",{value:"cl"},"Champions League"),o.a.createElement("option",{value:"el"},"Europa League"),o.a.createElement("option",{value:"wc"},"World Cup")),o.a.createElement(U,{label:"stage",onChange:c,value:t},o.a.createElement("option",{value:"gs"},"Group Stage"),"wc"!==e&&o.a.createElement("option",{value:"ko"},"Knockout Stage")),o.a.createElement(U,{label:"season",onChange:r,value:n},A(N(e,t),l-1).map(t=>o.a.createElement("option",{key:t,value:t},((e,t)=>"wc"===e?t:(e=>`${e}/${((e+1)%100).toString().padStart(2,"0")}`)(t))(e,t)))))}),M=n(120);var L=Object(s.memo)(()=>o.a.createElement(o.a.Fragment,null,o.a.createElement(M.a,{href:"https://github.com/inker/draw/issues","data-icon":"octicon-issue-opened","data-show-count":"true","aria-label":"Issues on GitHub"},"Issues"),o.a.createElement(M.a,{href:"https://github.com/inker/draw","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star on GitHub"},"Star")));const $=i.b.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
  padding-bottom: 10px;
  font-size: 16px;

  & > * {
    margin-left: 5px;

    &:not(:last-child) {
      margin-right: 5px;
    }
  }

  @media (max-width: 999px) {
    justify-content: center;
    margin-top: 5px;
    font-family: 'Roboto Condensed', RobotoCondensed, RobotoCondensed-Regular, Roboto, sans-serif;
    font-size: 10px;
  }
`;var P=Object(s.memo)(({season:e,tournament:t,stage:n,refresh:s,isXRay:a,onSetIsXRay:r,onSeasonChange:g})=>o.a.createElement($,null,o.a.createElement(j,{onClick:s},"Restart"),o.a.createElement(I,{tournament:t,stage:n,season:e,onChange:g}),o.a.createElement(k,{checked:a,onChange:r},"X-ray"),!w.b&&o.a.createElement(L,null))),R=n(112),D=n.n(R),B=n(113),T=n.n(B);const _=["cl","el","wc"],J=["gs","ko"];var G=async(e,t)=>{if(s=e,!_.includes(s))throw new Error("Invalid tournament: "+e);var s;if(!(e=>J.includes(e))(t))throw new Error("Invalid stage: "+t);return n(429)(`./${e}/${t}`).then(e=>null==e?void 0:e.default).catch(console.error)},K=n(114),q=n(430),H=n(117);class X{constructor(e){this.id=H("team-"),this.name=e}}class W extends X{constructor(e,t,n){super(e),this.country=t,this.shortName=n}}class Z extends W{constructor(e,t,n,s,o){super(e,t,s),this.coefficient=n,this.pairing=o}}var Q=n(121),V=n.n(Q);const Y=e=>new Z(e.name,e.country,e.coeffient,e.name),ee=e=>e.map(Y);var te=async(e,t)=>{const n=e.map(ee);return((e,t)=>{const n=e.slice();for(const[e,s]of t){const t=n.find(t=>t.shortName===e),o=n.find(e=>e.shortName===s);if(t&&o){if(t.country!==o.country)throw new Error(`teams ${t.name} & ${o.name} cannot be paired up`);t.pairing=o,o.pairing=t,V()(n,t),V()(n,o)}}n.sort((e,t)=>t.coefficient-e.coefficient);const s=n.length,o=s-1;for(let e=0;e<o;++e){const t=n[e];if(!t.pairing)for(let o=e+1;o<s;++o){const e=n[o];if(!e.pairing&&t.country===e.country){t.pairing=e,e.pairing=t;break}}}})(n.flat(1),t),n};class ne extends W{constructor(e,t,n,s){super(e,t,s),this.group=n}}const se=e=>new ne(e.name,e.country,e.group,e.name),oe=e=>e.map(se);var ae=K((async function(e,t,s){const o=n(432)(`./${e}/${t}/${s}/pots.json`),a=await(async(e,t)=>{try{return(await n(431)(`./${t}/gs/${e}/pairings.txt`)).default.trim().split("\n\n").map(e=>e.trim().split("\n"))}catch{console.error("pairings for",t,e,"do not exist, using the default ones")}return q})(s,e),r=(await o).default;return"ko"===t?(async e=>e.map(oe))(r):te(r,a)}),(...e)=>e.join(":")),re=n(122),ge=n(387);class ce extends X{constructor(e,t,n,s){super(e),this.coefficient=t,this.confederation=n,this.host=s}}const le=e=>t=>new ce(t,0,ge[t].confederation,e),ie=le(!0),ve=le(!1);var fe=K((async function(e){const t=await n(433)(`./wc-${e}.txt`),[s,o]=t.default.trim().split("\n\n").map(e=>e.trim().split("\n"));return((e,t)=>{const n=[...e.map(ie),...t.map(ve)];return re(n,8)})(s,o)})),ue=n(420);var me=K((function(e){const t=document.createElement("link");return t.rel="preload",t.as="image",t.onerror=console.error,new Promise(n=>{t.onload=n,t.href=e,document.head.appendChild(t)})}));const de=e=>{var t;return Object(ue.a)(null!==(t=e.country)&&void 0!==t?t:e.name)};const pe={Page:null,pots:null,season:N("cl","gs")};var be=Object(s.memo)(({drawId:e,tournament:t,stage:n,season:a,onRefreshDrawId:c,onSeasonChange:l})=>{const i=Object(r.g)(),[,v]=Object(g.a)(),[{Page:f,pots:u},m]=Object(s.useState)(pe),d=async()=>{v({waiting:!0});try{const e="wc"===t?fe(2018):ae(t,n,a),s=await G(t,n),o=await e;w.a||await T()((e=>{const t=[];for(const n of e){const e=n.map(de);t.push(...e.map(me))}return Promise.all(t)})(o),5e3,{rejectOnTimeout:!1}),c(),m({Page:s,pots:o,season:a}),v({waiting:!1,error:null})}catch(e){console.error(e),v({waiting:!1,error:"Could not fetch data"}),await D()(1e3);const{tournament:t,stage:n}=i,s=u&&a!==N(t,n)?a:void 0;l(t,n,s),v({error:null})}};return Object(s.useEffect)(()=>{d()},[a,n,t]),u&&f&&o.a.createElement(f,{key:e,tournament:i.tournament,stage:i.stage,season:a,pots:u})}),he=n(381);var Ee=Object(he.a)();const{defaultTournament:ke,defaultStage:je}=f;function we(e,t,n){Ee.push(`/${e}/${t}${n?"/"+n:""}`)}function Ae(e){const t=function(e){if(!e)return N(ke,je);const[,t,n,s]=e.pathname.split("/");return+(null!=s?s:N(t,n))}(e),[,n,s]=e.pathname.split("/");return{season:t,tournament:n,stage:s}}t.default=Object(s.memo)(()=>{const[e,t]=Object(c.a)(),[n]=Object(g.a)(),[i,f]=Object(l.a)(),{tournament:u,stage:m,season:d}=function(){const[e,t]=Object(s.useState)(Ee.location);return Object(s.useEffect)(()=>(t(e),Ee.listen(t)),[]),Ae(e)}();return o.a.createElement(a.a,null,o.a.createElement(o.a.Fragment,null,o.a.createElement(b,null),o.a.createElement(v,{visible:!n.initial},o.a.createElement(P,{refresh:t,season:d,tournament:u,stage:m,isXRay:i,onSetIsXRay:f,onSeasonChange:we})),o.a.createElement(r.d,null,o.a.createElement(r.a,{from:"/wc/ko",to:"/wc/"+je}),o.a.createElement(r.b,{path:"/:tournament/:stage/:season?"},u&&m?o.a.createElement(be,{drawId:e,tournament:u,stage:m,season:d,onRefreshDrawId:t,onSeasonChange:we}):null),o.a.createElement(r.a,{from:"/wc",to:"/wc/"+je}),o.a.createElement(r.a,{from:"/el",to:"/el/"+je}),o.a.createElement(r.a,{from:"/cl",to:"/cl/"+je}),o.a.createElement(r.a,{from:"/",to:"/"+ke}))))})}}]);