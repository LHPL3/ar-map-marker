(this["webpackJsonpar-app"]=this["webpackJsonpar-app"]||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var o=c(1),r=c.n(o),a=c(3),n=c.n(a),i=(c(8),c(9),c(0)),d=function(){return window.onload=function(){var e=document.querySelector("a-scene");navigator.geolocation.getCurrentPosition((function(t){var c=document.createAttribute("gps-entity-place"),o=document.createAttribute("arjs");document.getElementById("welcome");c.value="latitude: ".concat(t.coords.latitude-.001,"; longitude: ").concat(t.coords.longitude-.001,";"),o.value="sourceType: webcam; sourceWidth: 1280; sourceHeight: 960; trackingMethod: best; debugUIEnabled: false;",e.setAttributeNode(c),e.setAttributeNode(o)}))},Object(i.jsx)("div",{children:Object(i.jsxs)("a-scene",{"vr-mode-ui":"enabled: false",embedded:!0,arjs:"sourceType: webcam; videoTexture: true; debugUIEnabled: false;",children:[Object(i.jsx)("a-entity",{geometry:"primitive: box",material:"color: red"}),Object(i.jsx)("a-text",{id:"welcome",value:"Welcome",scale:"75 75 75",color:"#000000",position:"-30 0 -150"}),Object(i.jsx)("a-camera",{"gps-camera":!0,"rotation-reader":!0})]})})};var s=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(d,{})})};n.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(s,{})}),document.getElementById("root"))},8:function(e,t,c){},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.bda3b8b1.chunk.js.map