(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(8),o=n.n(l),c=(n(16),n(9)),i=n(1),s=n(2),u=n(4),h=n(3),m=n(5);n(17);var v=function(e){var t=e.value,n=e.onClick;return a.a.createElement("div",{className:"board-cell","data-value":t,onClick:n},t)},w=function(e){function t(e){return Object(i.a)(this,t),Object(u.a)(this,Object(h.a)(t).call(this,e))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"renderResetButton",value:function(e,t){if(e||10===t)return a.a.createElement("button",{className:"resetGame",onClick:this.props.restartGame},"Restart Game")}},{key:"renderCells",value:function(){var e=this.props,t=e.cells,n=e.onClick;return t.map(function(e,t){return a.a.createElement(v,{value:e,key:"Cell -"+t,onClick:function(){n(t)}})})}},{key:"render",value:function(){var e=this.props,t=e.winner,n=e.stepCounter;return a.a.createElement("div",{className:"board"},this.renderCells()," ",this.renderResetButton(t,n))}}]),t}(a.a.Component),f=n(6);var d=function(e){var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]].filter(function(t){var n=Object(f.a)(t,3),r=n[0],a=n[1],l=n[2];return e[r]&&e[r]===e[a]&&e[a]===e[l]}),n=Object(f.a)(t,1)[0];if(n)return e[n[0]]},p=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).hendlerCells=function(t){var n=e.state,r=n.cells,a=n.whoNext,l=n.stepCounter,o=n.winner;(r=Object(c.a)(r))[t]||o||(r[t]=a,a="X"===a?"0":"X",l+=1,o=d(r),e.setState({cells:r,whoNext:a,stepCounter:l,winner:o}))},e.restartGame=function(){e.setState({cells:Array(9).fill(null),stepCounter:1,whoNext:"X",winner:null})},e.state={cells:Array(9).fill(null),stepCounter:1,whoNext:"X",winner:null},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"wichPlayerIs",value:function(e){return"X"===e?"X":"0"}},{key:"render",value:function(){var e,t=this.state,n=t.cells,r=t.winner,l=t.whoNext,o=t.stepCounter;return e=r?"Player ".concat(r," wins!"):10===o?"It is A DRAW!":"Player ".concat(l," your turn!"),a.a.createElement("div",{className:"wraper"},a.a.createElement("div",{className:"Game"},a.a.createElement("h1",null,"TIC TAC TOE"),a.a.createElement("h3",null,e),a.a.createElement(w,{restartGame:this.restartGame,cells:n,onClick:this.hendlerCells,winner:r,stepCounter:o})))}}]),t}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.31349691.chunk.js.map