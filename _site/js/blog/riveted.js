/*!
 * @preserve
 * riveted.js | v0.4.0
 * Copyright (c) 2014 Rob Flaherty (@robflaherty)
 * Licensed under the MIT license
 */
var riveted=function(){function e(e){"function"==typeof ga&&(y=!0),"undefined"!=typeof _gaq&&"function"==typeof _gaq.push&&(T=!0),"undefined"!=typeof dataLayer&&"function"==typeof dataLayer.push&&(I=!0),e=e||{},m=parseInt(e.reportInterval,10)||5,g=parseInt(e.idleTimeout,10)||30,"function"==typeof e.eventHandler&&(f=e.eventHandler),"function"==typeof e.userTimingHandler&&(s=e.userTimingHandler),p="nonInteraction"in e&&(e.nonInteraction===!1||"false"===e.nonInteraction)?!1:!0,t(document,"keydown",v),t(document,"click",v),t(window,"mousemove",n(v,500)),t(window,"scroll",n(v,500)),t(document,"visibilitychange",o),t(document,"webkitvisibilitychange",o)}function n(e,n){var t,i,o,a=null,r=0,u=function(){r=new Date,a=null,o=e.apply(t,i)};return function(){var c=new Date;r||(r=c);var d=n-(c-r);return t=this,i=arguments,0>=d?(clearTimeout(a),a=null,r=c,o=e.apply(t,i)):a||(a=setTimeout(u,d)),o}}function t(e,n,t){e.addEventListener?e.addEventListener(n,t,!1):e.attachEvent?e.attachEvent("on"+n,t):e["on"+n]=t}function i(){clearTimeout(b),r()}function o(){(document.hidden||document.webkitHidden)&&i()}function a(){L+=1,L>0&&L%m===0&&f(L)}function r(){w=!0,clearTimeout(_)}function u(){i(),R=!0}function c(){R=!1}function d(){w=!1,clearTimeout(_),_=setInterval(a,1e3)}function l(){var e=new Date,n=e-k;h=!0,s(n),_=setInterval(a,1e3)}function v(){R||(h||l(),w&&d(),clearTimeout(b),b=setTimeout(i,1e3*g+100))}var f,s,m,g,p,y,T,I,h=!1,w=!1,R=!1,L=0,k=new Date,_=null,b=null;return s=function(e){I?dataLayer.push({event:"RivetedTiming",eventCategory:"Riveted",timingVar:"First Interaction",timingValue:e}):(y&&ga("send","timing","Riveted","First Interaction",e),T&&_gaq.push(["_trackTiming","Riveted","First Interaction",e,null,100]))},f=function(e){I?dataLayer.push({event:"Riveted",eventCategory:"Riveted",eventAction:"Time Spent",eventLabel:e,eventValue:m,eventNonInteraction:p}):(y&&ga("send","event","Riveted","Time Spent",e.toString(),m,{nonInteraction:p}),T&&_gaq.push(["_trackEvent","Riveted","Time Spent",e.toString(),m,p]))},{init:e,trigger:v,setIdle:i,on:c,off:u}}();