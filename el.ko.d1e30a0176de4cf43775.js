(window.webpackJsonp=window.webpackJsonp||[]).push([["el.ko"],{490:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(193),u=a(194),s=a(511),r=a(514),o=a(477),i=a(478),m=a(468),p=a(475),d=a(474),b=a(513),O=a(471),j=a(472),E=a(479),P=a(512),f=a(476),N=a(473);function h(){return{currentMatchupNum:0,currentPotNum:1,possiblePairings:null}}t.default=Object(n.memo)(({season:e,pots:t})=>{const[a,g]=Object(m.a)("draw-"),k=Object(n.useMemo)(()=>t.map(e=>u(e)),[t,a]),M=Object(n.useMemo)(()=>c(16).map(()=>[]),[t,a]),w=Object(n.useMemo)(()=>Object(r.a)(e),[e]),T=Object(n.useMemo)(h,[]),[{currentMatchupNum:y,currentPotNum:G,possiblePairings:v},S]=Object(n.useState)(T),[$]=Object(o.a)(),[x,C]=Object(i.a)(),J=Object(n.useCallback)(e=>{const t=k[G],a=v?v[e]:e,n=t.splice(a,1)[0];M[y].push(n);const l=1===G?Object(s.a)(k,M,w):null;S({currentPotNum:1-G,currentMatchupNum:y-G+1,possiblePairings:l}),C.add(n)},[w,k,M,G,y,v,x]),A=()=>{(1===(null==v?void 0:v.length)||1===G&&1===k[1].length)&&J(0)};Object(n.useEffect)(()=>{setTimeout(A,250)},[G]);const I=Object(n.useCallback)(()=>{g(),S({currentMatchupNum:0,currentPotNum:1,possiblePairings:null})},[t]),R=Object(n.useMemo)(()=>v&&k[0].filter((e,t)=>v.includes(t)),[v]),W=y>=t[0].length,q=v?v.map(e=>k[0][e]):[];return l.a.createElement(N.a,null,l.a.createElement(O.a,null,l.a.createElement(d.a,{selectedTeams:q,initialPots:t,pots:k,currentPotNum:G,split:!0}),l.a.createElement(b.a,{matchups:M,airborneTeams:x})),l.a.createElement(j.a,null,!W&&l.a.createElement(P.a,null,"Runners-up"),l.a.createElement(E.a,{forceNoSelect:0===G,display:!W,displayTeams:$,selectedTeam:null,pot:k[1],onPick:J}),!W&&l.a.createElement(P.a,null,"Group Winners"),W&&l.a.createElement(f.a,{long:!1,completed:W,selectedTeam:null,pickedGroup:null,possibleGroups:null,numGroups:0,reset:I}),R&&l.a.createElement(E.a,{forceNoSelect:1===G,display:!W,displayTeams:$,selectedTeam:null,pot:R,onPick:J})),x.map(e=>{const t=M.findIndex(t=>t.includes(e)),a=M[t].indexOf(e);return l.a.createElement(p.a,{key:e.id,from:`[data-cellid='${e.id}']`,to:`[data-cellid='${t}${1===a?"gw":"ru"}']`,duration:350,data:e,onAnimationEnd:C.remove})}))})}}]);