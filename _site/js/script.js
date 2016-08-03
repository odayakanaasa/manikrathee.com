 // Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-19400273-3', 'auto');
ga('send', 'pageview');

function trackEvent(cat, action, label){
  if (cat && action && label) {
    ga('send', 'event', cat, action, label);
  }
}

$('.social-api').on('hover', function(){
  trackEvent('home','api bar','interaction: hovered [' + $(this).attr('id') + ']');
});


;/*!
 * @preserve
 * jquery.scrolldepth.js | v0.6
 * Copyright (c) 2014 Rob Flaherty (@robflaherty)
 * Licensed under the MIT and GPL licenses.
 */
!function(e,n,t){"use strict";var r,a,o,i={minHeight:0,elements:[],percentage:!0,userTiming:!0,pixelDepth:!0,nonInteraction:!0},l=e(n),c=[],u=0;e.scrollDepth=function(h){function p(e,n,t,i){o?(dataLayer.push({event:"ScrollDistance",eventCategory:"Scroll Depth",eventAction:e,eventLabel:n,eventValue:1,eventNonInteraction:h.nonInteraction}),h.pixelDepth&&arguments.length>2&&t>u&&(u=t,dataLayer.push({event:"ScrollDistance",eventCategory:"Scroll Depth",eventAction:"Pixel Depth",eventLabel:f(t),eventValue:1,eventNonInteraction:h.nonInteraction})),h.userTiming&&arguments.length>3&&dataLayer.push({event:"ScrollTiming",eventCategory:"Scroll Depth",eventAction:e,eventLabel:n,eventTiming:i})):(r&&(ga("send","event","Scroll Depth",e,n,1,{nonInteraction:h.nonInteraction?1:0}),h.pixelDepth&&arguments.length>2&&t>u&&(u=t,ga("send","event","Scroll Depth","Pixel Depth",f(t),1,{nonInteraction:h.nonInteraction?1:0})),h.userTiming&&arguments.length>3&&ga("send","timing","Scroll Depth",e,i,n)),a&&(_gaq.push(["_trackEvent","Scroll Depth",e,n,1,h.nonInteraction]),h.pixelDepth&&arguments.length>2&&t>u&&(u=t,_gaq.push(["_trackEvent","Scroll Depth","Pixel Depth",f(t),1,h.nonInteraction])),h.userTiming&&arguments.length>3&&_gaq.push(["_trackTiming","Scroll Depth",e,i,n,100])))}function g(e){return{"25%":parseInt(.25*e,10),"50%":parseInt(.5*e,10),"75%":parseInt(.75*e,10),"100%":e-5}}function s(n,t,r){e.each(n,function(n,a){-1===e.inArray(n,c)&&t>=a&&(p("Percentage",n,t,r),c.push(n))})}function v(n,t,r){e.each(n,function(n,a){-1===e.inArray(a,c)&&e(a).length&&t>=e(a).offset().top&&(p("Elements",a,t,r),c.push(a))})}function f(e){return(250*Math.floor(e/250)).toString()}function m(e,n){var t,r,a,o=null,i=0,l=function(){i=new Date,o=null,a=e.apply(t,r)};return function(){var c=new Date;i||(i=c);var u=n-(c-i);return t=this,r=arguments,0>=u?(clearTimeout(o),o=null,i=c,a=e.apply(t,r)):o||(o=setTimeout(l,u)),a}}var D=+new Date;h=e.extend({},i,h),e(t).height()<h.minHeight||("function"==typeof ga&&(r=!0),"undefined"!=typeof _gaq&&"function"==typeof _gaq.push&&(a=!0),"undefined"!=typeof dataLayer&&"function"==typeof dataLayer.push&&(o=!0),h.percentage?p("Percentage","Baseline"):h.elements&&p("Elements","Baseline"),l.on("scroll.scrollDepth",m(function(){var r=e(t).height(),a=n.innerHeight?n.innerHeight:l.height(),o=l.scrollTop()+a,i=g(r),u=+new Date-D;return c.length>=4+h.elements.length?void l.off("scroll.scrollDepth"):(h.elements&&v(h.elements,o,u),void(h.percentage&&s(i,o,u)))},500)))}}(jQuery,window,document);;/*! 
	:: mo · js :: motion graphics toolbelt for the web
	Oleg Solomka @LegoMushroom 2015 MIT
	0.147.4 
*/

!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.yes=t()}}(function(){var t;return function e(t,r,i){function s(o,p){if(!r[o]){if(!t[o]){var a="function"==typeof require&&require;if(!p&&a)return a(o,!0);if(n)return n(o,!0);var h=new Error("Cannot find module '"+o+"'");throw h.code="MODULE_NOT_FOUND",h}var u=r[o]={exports:{}};t[o][0].call(u.exports,function(e){var r=t[o][1][e];return s(r?r:e)},u,u.exports,e,t,r,i)}return r[o].exports}for(var n="function"==typeof require&&require,o=0;o<i.length;o++)s(i[o]);return s}({1:[function(t,e,r){var i,s,n,o,p,a=function(t,e){function r(){this.constructor=t}for(var i in e)h.call(e,i)&&(t[i]=e[i]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},h={}.hasOwnProperty;o=t("./shapes/bitsMap"),n=t("./transit"),s=t("./swirl"),p=t("./h"),i=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return a(e,t),e.prototype.skipProps={childOptions:1},e.prototype.defaults={count:5,degree:360,opacity:1,randomAngle:0,randomRadius:0,x:100,y:100,shiftX:0,shiftY:0,easing:"Linear.None",radius:{25:75},radiusX:void 0,radiusY:void 0,angle:0,size:null,sizeGap:0,duration:600,delay:0,onStart:null,onComplete:null,onCompleteChain:null,onUpdate:null,isResetAngles:!1},e.prototype.childDefaults={radius:{7:0},radiusX:void 0,radiusY:void 0,angle:0,opacity:1,onStart:null,onComplete:null,onUpdate:null,points:3,duration:500,delay:0,repeat:0,yoyo:!1,easing:"Linear.None",type:"circle",fill:"deeppink",fillOpacity:1,isSwirl:!1,swirlSize:10,swirlFrequency:3,stroke:"transparent",strokeWidth:0,strokeOpacity:1,strokeDasharray:"",strokeDashoffset:"",strokeLinecap:null},e.prototype.optionsIntersection={radius:1,radiusX:1,radiusY:1,angle:1,opacity:1,onStart:1,onComplete:1,onUpdate:1},e.prototype.run=function(t){var e,r,i,s,n,o,p,a,h,u,l;if(null!=t&&Object.keys(t).length){for((t.count||(null!=(h=t.childOptions)?h.count:void 0))&&this.h.warn("Sorry, count can not be changed on run"),this.extendDefaults(t),n=Object.keys(t.childOptions||{}),null==(e=this.o).childOptions&&(e.childOptions={}),r=i=0,p=n.length;p>i;r=++i)s=n[r],this.o.childOptions[s]=t.childOptions[s];for(o=this.transits.length;o--;)a=this.getOption(o),null==(null!=(u=t.childOptions)?u.angle:void 0)&&null==t.angleShift?a.angle=this.transits[o].o.angle:t.isResetAngles||(a.angle=this.getBitAngle(a.angle,o)),this.transits[o].tuneNewOption(a,!0);this.timeline.recalcDuration()}if(this.props.randomAngle||this.props.randomRadius)for(o=this.transits.length;o--;)l=this.transits[o],this.props.randomAngle&&l.setProp({angleShift:this.generateRandomAngle()}),this.props.randomRadius&&l.setProp({radiusScale:this.generateRandomRadius()});return this.startTween()},e.prototype.createBit=function(){var t,e,r,i,n;for(this.transits=[],n=[],t=e=0,i=this.props.count;i>=0?i>e:e>i;t=i>=0?++e:--e)r=this.getOption(t),r.ctx=this.ctx,r.index=t,r.isDrawLess=r.isRunLess=r.isTweenLess=!0,this.props.randomAngle&&(r.angleShift=this.generateRandomAngle()),this.props.randomRadius&&(r.radiusScale=this.generateRandomRadius()),n.push(this.transits.push(new s(r)));return n},e.prototype.addBitOptions=function(){var t,e,r,i,s,n,o,p,a,h,u;for(o=this.props.count,this.degreeCnt=this.props.degree%360===0?o:o-1||1,h=this.props.degree/this.degreeCnt,p=this.transits,a=[],e=r=0,i=p.length;i>r;e=++r)u=p[e],t=u.props.angleShift||0,n=this.getSidePoint("start",e*h+t),s=this.getSidePoint("end",e*h+t),u.o.x=this.getDeltaFromPoints("x",n,s),u.o.y=this.getDeltaFromPoints("y",n,s),this.props.isResetAngles||(u.o.angle=this.getBitAngle(u.o.angle,e)),a.push(u.extendDefaults());return a},e.prototype.getBitAngle=function(t,e){var r,i,s,n,o,p,a,h,u,l,c,d;return l=this.props.count,n=this.props.degree%360===0?l:l-1||1,d=this.props.degree/n,r=e*d+90,i=this.transits[e].props.angleShift||0,t="object"!=typeof t?t+r+i:(a=Object.keys(t),c=a[0],p=t[c],s=r+i,u=parseFloat(c)+s,h=parseFloat(p)+s,o={},o[u]=h,o)},e.prototype.getSidePoint=function(t,e){var r,i;return i=this.getSideRadius(t),r=this.h.getRadialPoint({radius:i.radius,radiusX:i.radiusX,radiusY:i.radiusY,angle:e,center:{x:this.props.center,y:this.props.center}})},e.prototype.getSideRadius=function(t){return{radius:this.getRadiusByKey("radius",t),radiusX:this.getRadiusByKey("radiusX",t),radiusY:this.getRadiusByKey("radiusY",t)}},e.prototype.getRadiusByKey=function(t,e){return null!=this.deltas[t]?this.deltas[t][e]:null!=this.props[t]?this.props[t]:void 0},e.prototype.getDeltaFromPoints=function(t,e,r){var i;return i={},e[t]===r[t]?i=e[t]:(i[e[t]]=r[t],i)},e.prototype.draw=function(t){return this.drawEl()},e.prototype.isNeedsTransform=function(){return this.isPropChanged("shiftX")||this.isPropChanged("shiftY")||this.isPropChanged("angle")},e.prototype.fillTransform=function(){return"rotate("+this.props.angle+"deg) translate("+this.props.shiftX+", "+this.props.shiftY+")"},e.prototype.createTween=function(){var t,r;for(e.__super__.createTween.apply(this,arguments),t=this.transits.length,r=[];t--;)r.push(this.timeline.add(this.transits[t].tween));return r},e.prototype.calcSize=function(){var t,e,r,i,s,n,o;for(r=-1,n=this.transits,t=e=0,i=n.length;i>e;t=++e)o=n[t],o.calcSize(),r<o.props.size&&(r=o.props.size);return s=this.calcMaxRadius(),this.props.size=r+2*s,this.props.size+=2*this.props.sizeGap,this.props.center=this.props.size/2,this.addBitOptions()},e.prototype.getOption=function(t){var e,r,i,s;for(s={},r=Object.keys(this.childDefaults),i=r.length;i--;)e=r[i],s[e]=this.getPropByMod({key:e,i:t,from:this.o.childOptions}),this.optionsIntersection[e]?null==s[e]&&(s[e]=this.getPropByMod({key:e,i:t,from:this.childDefaults})):(null==s[e]&&(s[e]=this.getPropByMod({key:e,i:t,from:this.o})),null==s[e]&&(s[e]=this.getPropByMod({key:e,i:t,from:this.childDefaults})));return s},e.prototype.getPropByMod=function(t){var e,r;return e=null!=(r=t.from||this.o.childOptions)?r[t.key]:void 0,this.h.isArray(e)?e[t.i%e.length]:e},e.prototype.generateRandomAngle=function(t){var e,r;return r=parseFloat(this.props.randomAngle),e=r>1?1:0>r?0:void 0,this.h.rand(0,r?360*r:180)},e.prototype.generateRandomRadius=function(t){var e,r,i;return r=parseFloat(this.props.randomRadius),e=r>1?1:0>r?0:void 0,i=r?100*(1-r):50,this.h.rand(i,100)/100},e.prototype.then=function(t){return this.h.error('Burst\'s "then" method is under consideration, you can vote for it in github repo issues'),this},e}(n),e.exports=i},{"./h":6,"./shapes/bitsMap":12,"./swirl":22,"./transit":23}],2:[function(t,e,r){(function(r){var i,s,n,o=[].indexOf||function(t){for(var e=0,r=this.length;r>e;e++)if(e in this&&this[e]===t)return e;return-1};n=t("../h"),i=function(){function t(t){return this.vars(),this.generate}return t.prototype.vars=function(){return this.generate=n.bind(this.generate,this)},t.prototype.generate=function(t,e,i,s){var n,p,a,h,u,l,c,d,f,y,g,m,v,w,b,x,_,T,S,M,P,C,E,k;if(arguments.length<4)return this.error("Bezier function expects 4 arguments");for(_=T=0;4>T;_=++T)if(f=arguments[_],"number"!=typeof f||isNaN(f)||!isFinite(f))return this.error("Bezier function expects 4 arguments");return 0>t||t>1||0>i||i>1?this.error("Bezier x values should be > 0 and < 1"):(h=4,u=.001,c=1e-7,l=10,M=11,S=1/(M-1),w=o.call(r,"Float32Array")>=0,n=function(t,e){return 1-3*e+3*t},p=function(t,e){return 3*e-6*t},a=function(t){return 3*t},g=function(t,e,r){return((n(e,r)*t+p(e,r))*t+a(e))*t},b=function(t,e,r){return 3*n(e,r)*t*t+2*p(e,r)*t+a(e)},C=function(e,r){var s,n;for(_=0;h>_;){if(s=b(r,t,i),0===s)return r;n=g(r,t,i)-e,r-=n/s,++_}return r},m=function(){for(_=0;M>_;)P[_]=g(_*S,t,i),++_},y=function(e,r,s){var n,o,p;for(o=void 0,n=void 0,_=0;;)if(n=r+(s-r)/2,o=g(n,t,i)-e,o>0?s=n:r=n,p=Math.abs(o)>c,!(p&&++_<l))break;return n},x=function(e){var r,s,n,o,p,a,h;for(a=0,r=1,h=M-1;r!==h&&P[r]<=e;)a+=S,++r;return--r,s=P[r+1]-P[r],n=(e-P[r])/s,o=a+n*S,p=b(o,t,i),p>=u?C(e,o):0===p?o:y(e,a,a+S)},E=function(){var r;return r=!0,t!==e||i!==s?m():void 0},P=w?new Float32Array(M):new Array(M),d=!1,v=function(r){return d||E(),t===e&&i===s?r:0===r?0:1===r?1:g(x(r),e,s)},k="bezier("+[t,e,i,s]+")",v.toStr=function(){return k},v)},t.prototype.error=function(t){return n.error(t)},t}(),s=new i,e.exports=s}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../h":6}],3:[function(t,e,r){var i,s,n,o,p,a;n=t("./bezier-easing"),s=t("./path-easing"),a=t("./mix"),p=t("../h"),i=function(){function t(){}return t.prototype.bezier=n,t.prototype.PathEasing=s,t.prototype.path=new s("creator").create,t.prototype.inverse=function(t){return 1-t},t.prototype.linear={none:function(t){return t}},t.prototype.ease={"in":n.apply(t,[.42,0,1,1]),out:n.apply(t,[0,0,.58,1]),inout:n.apply(t,[.42,0,.58,1])},t.prototype.quad={"in":function(t){return t*t},out:function(t){return t*(2-t)},inout:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}},t.prototype.cubic={"in":function(t){return t*t*t},out:function(t){return--t*t*t+1},inout:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}},t.prototype.quart={"in":function(t){return t*t*t*t},out:function(t){return 1- --t*t*t*t},inout:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}},t.prototype.quint={"in":function(t){return t*t*t*t*t},out:function(t){return--t*t*t*t*t+1},inout:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},t.prototype.sin={"in":function(t){return 1-Math.cos(t*Math.PI/2)},out:function(t){return Math.sin(t*Math.PI/2)},inout:function(t){return.5*(1-Math.cos(Math.PI*t))}},t.prototype.expo={"in":function(t){return 0===t?0:Math.pow(1024,t-1)},out:function(t){return 1===t?1:1-Math.pow(2,-10*t)},inout:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2)}},t.prototype.circ={"in":function(t){return 1-Math.sqrt(1-t*t)},out:function(t){return Math.sqrt(1- --t*t)},inout:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},t.prototype.back={"in":function(t){var e;return e=1.70158,t*t*((e+1)*t-e)},out:function(t){var e;return e=1.70158,--t*t*((e+1)*t+e)+1},inout:function(t){var e;return e=2.5949095,(t*=2)<1?.5*t*t*((e+1)*t-e):.5*((t-=2)*t*((e+1)*t+e)+2)}},t.prototype.elastic={"in":function(t){var e,r,i;return i=void 0,r=.4,0===t?0:1===t?1:(e=1,i=r/4,-(e*Math.pow(2,10*(t-=1))*Math.sin(2*(t-i)*Math.PI/r)))},out:function(t){var e,r,i;return i=void 0,r=.4,0===t?0:1===t?1:(e=1,i=r/4,e*Math.pow(2,-10*t)*Math.sin(2*(t-i)*Math.PI/r)+1)},inout:function(t){var e,r,i;return i=void 0,r=.4,0===t?0:1===t?1:(e=1,i=r/4,(t*=2)<1?-.5*e*Math.pow(2,10*(t-=1))*Math.sin(2*(t-i)*Math.PI/r):e*Math.pow(2,-10*(t-=1))*Math.sin(2*(t-i)*Math.PI/r)*.5+1)}},t.prototype.bounce={"in":function(t){return 1-o.bounce.out(1-t)},out:function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},inout:function(t){return.5>t?.5*o.bounce["in"](2*t):.5*o.bounce.out(2*t-1)+.5}},t.prototype.parseEasing=function(t){var e,r;return r=typeof t,"string"===r?"m"===t.charAt(0).toLowerCase()?this.path(t):(t=this._splitEasing(t),e=this[t[0]],e?e[t[1]]:(p.error('Easing with name "'+t[0]+'" was not found, fallback to "linear.none" instead'),this.linear.none)):p.isArray(t)?this.bezier.apply(this,t):t},t.prototype._splitEasing=function(t){var e,r,i;return"function"==typeof t?t:"string"==typeof t&&t.length?(i=t.split("."),e=i[0].toLowerCase()||"linear",r=i[1].toLowerCase()||"none",[e,r]):["linear","none"]},t}(),o=new i,o.mix=a(o),e.exports=o},{"../h":6,"./bezier-easing":2,"./mix":4,"./path-easing":5}],4:[function(t,e,r){var i,s,n,o,p,a,h=[].slice;s=null,p=function(t){return"number"==typeof t.value?t.value:s.parseEasing(t.value)},a=function(t,e){var r;return t.value=p(t),e.value=p(e),r=0,t.to<e.to&&(r=-1),t.to>e.to&&(r=1),r},n=function(t,e){var r,i,s,n,o;for(i=0,r=s=0,n=t.length;n>s&&(o=t[r],i=r,!(o.to>e));r=++s);return i},o=function(){var t;return t=1<=arguments.length?h.call(arguments,0):[],t.length>1?t=t.sort(a):t[0].value=p(t[0]),function(e){var r,i;return r=n(t,e),-1!==r?(i=t[r].value,r===t.length-1&&e>t[r].to?1:"function"==typeof i?i(e):i):void 0}},i=function(t){return s=t,o},e.exports=i},{}],5:[function(t,e,r){var i,s;s=t("../h"),i=function(){function t(t,e){if(this.o=null!=e?e:{},"creator"!==t){if(this.path=s.parsePath(t),null==this.path)return s.error("Error while parsing the path");this._vars(),this.path.setAttribute("d",this._normalizePath(this.path.getAttribute("d"))),this.pathLength=this.path.getTotalLength(),this.sample=s.bind(this.sample,this),this._hardSample=s.bind(this._hardSample,this),this._preSample()}}return t.prototype._vars=function(){return this._precompute=s.clamp(this.o.precompute||1450,100,1e4),this._step=1/this._precompute,this._rect=this.o.rect||100,this._approximateMax=this.o.approximateMax||5,this._eps=this.o.eps||.001,this._boundsPrevProgress=-1},t.prototype._preSample=function(){var t,e,r,i,s,n,o;for(this._samples=[],o=[],t=e=0,n=this._precompute;n>=0?n>=e:e>=n;t=n>=0?++e:--e)s=t*this._step,r=this.pathLength*s,i=this.path.getPointAtLength(r),o.push(this._samples[t]={point:i,length:r,progress:s});return o},t.prototype._findBounds=function(t,e){var r,i,s,n,o,p,a,h,u,l,c,d,f;if(e===this._boundsPrevProgress)return this._prevBounds;for(null==this._boundsStartIndex&&(this._boundsStartIndex=0),p=t.length,this._boundsPrevProgress>e?(a=0,i="reverse"):(a=p,i="forward"),"forward"===i?(d=t[0],s=t[t.length-1]):(d=t[t.length-1],s=t[0]),n=o=l=this._boundsStartIndex,c=a;c>=l?c>o:o>c;n=c>=l?++o:--o){if(f=t[n],u=f.point.x/this._rect,h=e,"reverse"===i&&(r=u,u=h,h=r),!(h>u)){s=f;break}d=f,this._boundsStartIndex=n}return this._boundsPrevProgress=e,this._prevBounds={start:d,end:s}},t.prototype.sample=function(t){var e,r;return t=s.clamp(t,0,1),e=this._findBounds(this._samples,t),r=this._checkIfBoundsCloseEnough(t,e),null!=r?r:this._findApproximate(t,e.start,e.end)},t.prototype._checkIfBoundsCloseEnough=function(t,e){var r,i;return r=void 0,i=this._checkIfPointCloseEnough(t,e.start.point),null!=i?i:this._checkIfPointCloseEnough(t,e.end.point)},t.prototype._checkIfPointCloseEnough=function(t,e){return s.closeEnough(t,e.x/this._rect,this._eps)?this._resolveY(e):void 0},t.prototype._approximate=function(t,e,r){var i,s;return i=e.point.x-t.point.x,s=(r-t.point.x/this._rect)/(i/this._rect),t.length+s*(e.length-t.length)},t.prototype._findApproximate=function(t,e,r,i){var n,o,p,a,h;return null==i&&(i=this._approximateMax),n=this._approximate(e,r,t),a=this.path.getPointAtLength(n),h=a.x/this._rect,s.closeEnough(t,h,this._eps)?this._resolveY(a):--i<1?this._resolveY(a):(p={point:a,length:n},o=h>t?[t,e,p,i]:[t,p,r,i],this._findApproximate.apply(this,o))},t.prototype._resolveY=function(t){return 1-t.y/this._rect},t.prototype._normalizePath=function(t){var e,r,i,s,n,o;return o=/[M|L|H|V|C|S|Q|T|A]/gim,s=t.split(o),s.shift(),e=t.match(o),n=0,s[n]=this._normalizeSegment(s[n]),r=s.length-1,s[r]=this._normalizeSegment(s[r],this._rect||100),i=this._joinNormalizedPath(e,s)},t.prototype._joinNormalizedPath=function(t,e){var r,i,s,n,o,p;for(o="",i=s=0,n=t.length;n>s;i=++s)r=t[i],p=0===i?"":" ",o+=""+p+r+e[i].trim();return o},t.prototype._normalizeSegment=function(t,e){var r,i,s,n,o,p,a,h,u,l;if(null==e&&(e=0),t=t.trim(),o=/(-|\+)?((\d+(\.(\d|\e(-|\+)?)+)?)|(\.?(\d|\e|(\-|\+))+))/gim,p=this._getSegmentPairs(t.match(o)),s=p[p.length-1],l=s[0],a=Number(l),a!==e)for(t="",s[0]=e,r=i=0,n=p.length;n>i;r=++i)h=p[r],u=0===r?"":" ",t+=""+u+h[0]+","+h[1];return t},t.prototype._getSegmentPairs=function(t){var e,r,i,n,o,p;for(t.length%2!==0&&s.error("Failed to parse the path - segment pairs are not even.",t),n=[],e=r=0,i=t.length;i>r;e=r+=2)p=t[e],o=[t[e],t[e+1]],n.push(o);return n},t.prototype.create=function(e,r){var i;return i=new t(e,r),i.sample.path=i.path,i.sample},t}(),e.exports=i},{"../h":6}],6:[function(t,e,r){var i,s;i=function(){function t(){this.vars()}return t.prototype.NS="http://www.w3.org/2000/svg",t.prototype.logBadgeCss="background:#3A0839;color:#FF512F;border-radius:5px; padding: 1px 5px 2px; border: 1px solid #FF512F;",t.prototype.shortColors={transparent:"rgba(0,0,0,0)",none:"rgba(0,0,0,0)",aqua:"rgb(0,255,255)",black:"rgb(0,0,0)",blue:"rgb(0,0,255)",fuchsia:"rgb(255,0,255)",gray:"rgb(128,128,128)",green:"rgb(0,128,0)",lime:"rgb(0,255,0)",maroon:"rgb(128,0,0)",navy:"rgb(0,0,128)",olive:"rgb(128,128,0)",purple:"rgb(128,0,128)",red:"rgb(255,0,0)",silver:"rgb(192,192,192)",teal:"rgb(0,128,128)",white:"rgb(255,255,255)",yellow:"rgb(255,255,0)",orange:"rgb(255,128,0)"},t.prototype.chainOptionMap={duration:1,delay:1,repeat:1,easing:1,yoyo:1,onStart:1,onComplete:1,onCompleteChain:1,onUpdate:1,points:1},t.prototype.callbacksMap={onStart:1,onComplete:1,onCompleteChain:1,onUpdate:1},t.prototype.tweenOptionMap={duration:1,delay:1,repeat:1,easing:1,yoyo:1},t.prototype.posPropsMap={x:1,y:1,shiftX:1,shiftY:1,burstX:1,burstY:1,burstShiftX:1,burstShiftY:1},t.prototype.strokeDashPropsMap={strokeDasharray:1,strokeDashoffset:1},t.prototype.RAD_TO_DEG=180/Math.PI,t.prototype.vars=function(){var t;return this.prefix=this.getPrefix(),this.getRemBase(),this.isFF="moz"===this.prefix.lowercase,this.isIE="ms"===this.prefix.lowercase,t=navigator.userAgent,this.isOldOpera=t.match(/presto/gim),this.isSafari=t.indexOf("Safari")>-1,this.isChrome=t.indexOf("Chrome")>-1,this.isOpera=t.toLowerCase().indexOf("op")>-1,this.isChrome&&this.isSafari&&(this.isSafari=!1),t.match(/PhantomJS/gim)&&(this.isSafari=!1),this.isChrome&&this.isOpera&&(this.isChrome=!1),this.is3d=this.checkIf3d(),this.uniqIDs=-1,this.div=document.createElement("div"),document.body.appendChild(this.div)},t.prototype.cloneObj=function(t,e){var r,i,s,n;for(s=Object.keys(t),n={},r=s.length;r--;)i=s[r],null!=e?e[i]||(n[i]=t[i]):n[i]=t[i];return n},t.prototype.extend=function(t,e){var r,i;for(r in e)i=e[r],null==t[r]&&(t[r]=e[r]);return t},t.prototype.getRemBase=function(){var t,e;return t=document.querySelector("html"),e=getComputedStyle(t),this.remBase=parseFloat(e.fontSize)},t.prototype.clamp=function(t,e,r){return e>t?e:t>r?r:t},t.prototype.setPrefixedStyle=function(t,e,r,i){return e.match(/transform/gim)?(t.style[""+e]=r,t.style[""+this.prefix.css+e]=r):t.style[e]=r},t.prototype.style=function(t,e,r){var i,s,n,o;if("object"==typeof e){for(s=Object.keys(e),n=s.length,o=[];n--;)i=s[n],r=e[i],o.push(this.setPrefixedStyle(t,i,r));return o}return this.setPrefixedStyle(t,e,r)},t.prototype.prepareForLog=function(t){return t=Array.prototype.slice.apply(t),t.unshift("::"),t.unshift(this.logBadgeCss),t.unshift("%cmo·js%c"),t},t.prototype.log=function(){return mojs.isDebug!==!1?console.log.apply(console,this.prepareForLog(arguments)):void 0},t.prototype.warn=function(){return mojs.isDebug!==!1?console.warn.apply(console,this.prepareForLog(arguments)):void 0},t.prototype.error=function(){return mojs.isDebug!==!1?console.error.apply(console,this.prepareForLog(arguments)):void 0},t.prototype.parseUnit=function(t){var e,r,i,s,n,o;return"number"==typeof t?n={unit:"px",isStrict:!1,value:t,string:t+"px"}:"string"==typeof t?(s=/px|%|rem|em|ex|cm|ch|mm|in|pt|pc|vh|vw|vmin/gim,o=null!=(i=t.match(s))?i[0]:void 0,r=!0,o||(o="px",r=!1),e=parseFloat(t),n={unit:o,isStrict:r,value:e,string:""+e+o}):t},t.prototype.bind=function(t,e){var r,i;return i=function(){var i,s;return i=Array.prototype.slice.call(arguments),s=r.concat(i),t.apply(e,s)},r=Array.prototype.slice.call(arguments,2),i},t.prototype.getRadialPoint=function(t){var e,r,i,s;return null==t&&(t={}),null!=t.radius&&null!=t.angle&&null!=t.center?(r=(t.angle-90)*(Math.PI/180),i=null!=t.radiusX?t.radiusX:t.radius,s=null!=t.radiusY?t.radiusY:t.radius,e={x:t.center.x+Math.cos(r)*i,y:t.center.y+Math.sin(r)*s}):void 0},t.prototype.getPrefix=function(){var t,e,r,i;return r=window.getComputedStyle(document.documentElement,""),i=Array.prototype.slice.call(r).join("").match(/-(moz|webkit|ms)-/),e=(i||""===r.OLink&&["","o"])[1],t="WebKit|Moz|MS|O".match(new RegExp("("+e+")","i"))[1],{dom:t,lowercase:e,css:"-"+e+"-",js:e[0].toUpperCase()+e.substr(1)}},t.prototype.strToArr=function(t){var e;return e=[],"number"!=typeof t||isNaN(t)?(t.trim().split(/\s+/gim).forEach(function(t){return function(r){return e.push(t.parseUnit(t.parseIfRand(r)))}}(this)),e):(e.push(this.parseUnit(t)),e)},t.prototype.calcArrDelta=function(t,e){var r,i,s,n,o;for(r=[],i=s=0,n=t.length;n>s;i=++s)o=t[i],r[i]=this.parseUnit(""+(e[i].value-t[i].value)+e[i].unit);return r},t.prototype.isArray=function(t){return t instanceof Array},t.prototype.normDashArrays=function(t,e){var r,i,s,n,o,p,a,h,u,l;if(r=t.length,i=e.length,r>i)for(a=r-i,l=e.length,n=o=0,h=a;h>=0?h>o:o>h;n=h>=0?++o:--o)s=n+l,e.push(this.parseUnit("0"+t[s].unit));else if(i>r)for(a=i-r,l=t.length,n=p=0,u=a;u>=0?u>p:p>u;n=u>=0?++p:--p)s=n+l,t.push(this.parseUnit("0"+e[s].unit));return[t,e]},t.prototype.makeColorObj=function(t){var e,r,i,s,n,o,p,a,h,u;return"#"===t[0]&&(h=/^#?([a-f\d]{1,2})([a-f\d]{1,2})([a-f\d]{1,2})$/i.exec(t),i={},h&&(o=2===h[1].length?h[1]:h[1]+h[1],s=2===h[2].length?h[2]:h[2]+h[2],r=2===h[3].length?h[3]:h[3]+h[3],i={r:parseInt(o,16),g:parseInt(s,16),b:parseInt(r,16),a:1})),"#"!==t[0]&&(n="r"===t[0]&&"g"===t[1]&&"b"===t[2],n&&(u=t),n||(u=this.shortColors[t]?this.shortColors[t]:(this.div.style.color=t,this.computedStyle(this.div).color)),p="^rgba?\\((\\d{1,3}),\\s?(\\d{1,3}),",a="\\s?(\\d{1,3}),?\\s?(\\d{1}|0?\\.\\d{1,})?\\)$",h=new RegExp(p+a,"gi").exec(u),i={},e=parseFloat(h[4]||1),h&&(i={r:parseInt(h[1],10),g:parseInt(h[2],10),b:parseInt(h[3],10),a:null==e||isNaN(e)?1:e})),i},t.prototype.computedStyle=function(t){return getComputedStyle(t)},t.prototype.capitalize=function(t){if("string"!=typeof t)throw Error("String expected - nothing to capitalize");return t.charAt(0).toUpperCase()+t.substring(1)},t.prototype.parseRand=function(t){var e,r,i;return r=t.split(/rand\(|\,|\)/),i=this.parseUnit(r[2]),e=this.rand(parseFloat(r[1]),parseFloat(r[2])),i.unit&&r[2].match(i.unit)?e+i.unit:e},t.prototype.parseStagger=function(t,e){var r,i,s,n,o,p;return p=t.split(/stagger\(|\)$/)[1].toLowerCase(),s=p.split(/(rand\(.*?\)|[^\(,\s]+)(?=\s*,|\s*$)/gim),p=s.length>3?(r=this.parseUnit(this.parseIfRand(s[1])),s[3]):(r=this.parseUnit(0),s[1]),p=this.parseIfRand(p),o=this.parseUnit(p),i=e*o.value+r.value,n=r.isStrict?r.unit:o.isStrict?o.unit:"",n?""+i+n:i},t.prototype.parseIfStagger=function(t,e){return"string"==typeof t&&t.match(/stagger/g)?this.parseStagger(t,e):t},t.prototype.parseIfRand=function(t){return"string"==typeof t&&t.match(/rand\(/)?this.parseRand(t):t},t.prototype.parseDelta=function(t,e){var r,i,s,n,o,p,a,h,u,l;if(h=Object.keys(e)[0],i=e[h],r={start:h},isNaN(parseFloat(h))&&!h.match(/rand\(/)){if("strokeLinecap"===t)return this.warn("Sorry, stroke-linecap property is not animatable yet, using the start("+h+") value instead",e),r;l=this.makeColorObj(h),n=this.makeColorObj(i),r={start:l,end:n,type:"color",delta:{r:n.r-l.r,g:n.g-l.g,b:n.b-l.b,a:n.a-l.a}}}else if("strokeDasharray"===t||"strokeDashoffset"===t){for(u=this.strToArr(h),s=this.strToArr(i),this.normDashArrays(u,s),o=p=0,a=u.length;a>p;o=++p)h=u[o],i=s[o],this.mergeUnits(h,i,t);r={start:u,end:s,delta:this.calcArrDelta(u,s),type:"array"}}else this.chainOptionMap[t]||(this.posPropsMap[t]?(i=this.parseUnit(this.parseIfRand(i)),h=this.parseUnit(this.parseIfRand(h)),this.mergeUnits(h,i,t),r={start:h,end:i,delta:i.value-h.value,type:"unit"}):(i=parseFloat(this.parseIfRand(i)),h=parseFloat(this.parseIfRand(h)),r={start:h,end:i,delta:i-h,type:"number"}));return r},t.prototype.mergeUnits=function(t,e,r){return!e.isStrict&&t.isStrict?(e.unit=t.unit,e.string=""+e.value+e.unit):e.isStrict&&!t.isStrict?(t.unit=e.unit,t.string=""+t.value+t.unit):e.isStrict&&t.isStrict&&e.unit!==t.unit?(t.unit=e.unit,t.string=""+t.value+t.unit,this.warn('Two different units were specified on "'+r+'" delta property, mo · js will fallback to end "'+e.unit+'" unit ')):void 0},t.prototype.rand=function(t,e){return Math.random()*(e-t)+t},t.prototype.isDOM=function(t){var e;return null==t?!1:(e="number"==typeof t.nodeType&&"string"==typeof t.nodeName,"object"==typeof t&&e)},t.prototype.getChildElements=function(t){var e,r,i;for(e=t.childNodes,r=[],i=e.length;i--;)1===e[i].nodeType&&r.unshift(e[i]);return r},t.prototype.delta=function(t,e){var r,i,s,n,o;return n=typeof t,o=typeof e,r="string"===n||"number"===n&&!isNaN(t),i="string"===o||"number"===o&&!isNaN(e),r&&i?(s={},s[t]=e,s):void this.error("delta method expects Strings or Numbers at input but got - "+t+", "+e)},t.prototype.getUniqID=function(){return++this.uniqIDs},t.prototype.parsePath=function(t){var e;return"string"==typeof t?"m"===t.charAt(0).toLowerCase()?(e=document.createElementNS(this.NS,"path"),e.setAttributeNS(null,"d",t),e):document.querySelector(t):t.style?t:void 0},t.prototype.closeEnough=function(t,e,r){return Math.abs(t-e)<r},t.prototype.checkIf3d=function(){var t,e,r,i;return t=document.createElement("div"),this.style(t,"transform","translateZ(0)"),r=t.style,e=this.prefix.css+"transform",i=null!=r[e]?r[e]:r.transform,""!==i},t}(),s=new i,e.exports=s},{}],7:[function(e,r,i){window.mojs={revision:"0.147.4",isDebug:!0,helpers:e("./h"),Bit:e("./shapes/bit"),bitsMap:e("./shapes/bitsMap"),Circle:e("./shapes/circle"),Cross:e("./shapes/cross"),Line:e("./shapes/line"),Rect:e("./shapes/rect"),Polygon:e("./shapes/polygon"),Equal:e("./shapes/equal"),Zigzag:e("./shapes/zigzag"),Burst:e("./burst"),Transit:e("./transit"),Swirl:e("./swirl"),Stagger:e("./stagger"),Spriter:e("./spriter"),MotionPath:e("./motion-path"),Tween:e("./tween/tween"),Timeline:e("./tween/timeline"),tweener:e("./tween/tweener"),easing:e("./easing/easing")},mojs.h=mojs.helpers,mojs.delta=mojs.h.delta,"function"==typeof t&&t.amd&&t("mojs",[],function(){return mojs}),"object"==typeof r&&"object"==typeof r.exports&&(r.exports=mojs)},{"./burst":1,"./easing/easing":3,"./h":6,"./motion-path":8,"./shapes/bit":11,"./shapes/bitsMap":12,"./shapes/circle":13,"./shapes/cross":14,"./shapes/equal":15,"./shapes/line":16,"./shapes/polygon":17,"./shapes/rect":18,"./shapes/zigzag":19,"./spriter":20,"./stagger":21,"./swirl":22,"./transit":23,"./tween/timeline":24,"./tween/tween":25,"./tween/tweener":26}],8:[function(t,e,r){var i,s,n,o,p,a=function(t,e){return function(){return t.apply(e,arguments)}};o=t("./h"),p=t("./vendor/resize"),n=t("./tween/tween"),s=t("./tween/timeline"),i=function(){function t(t){this.o=null!=t?t:{},this.calcHeight=a(this.calcHeight,this),this.vars()||this.createTween()}return t.prototype.defaults={path:null,curvature:{x:"75%",y:"50%"},isCompositeLayer:!0,delay:0,duration:1e3,easing:null,repeat:0,yoyo:!1,offsetX:0,offsetY:0,angleOffset:null,pathStart:0,pathEnd:1,motionBlur:0,transformOrigin:null,isAngle:!1,isReverse:!1,isRunLess:!1,isPresetPosition:!0,onStart:null,onComplete:null,onUpdate:null},t.prototype.vars=function(){return this.getScaler=o.bind(this.getScaler,this),this.resize=p,this.props=o.cloneObj(this.defaults),this.extendOptions(this.o),this.isMotionBlurReset=o.isSafari||o.isIE,this.isMotionBlurReset&&(this.props.motionBlur=0),this.history=[o.cloneObj(this.props)],this.postVars()},t.prototype.curveToPath=function(t){var e,r,i,s,n,p,a,h,u,l,c,d,f;return l=document.createElementNS(o.NS,"path"),f=t.start,u={x:f.x+t.shift.x,y:f.x+t.shift.y},r=t.curvature,a=t.shift.x,h=t.shift.y,d=Math.sqrt(a*a+h*h),c=d/100,e=Math.atan(h/a)*(180/Math.PI)+90,t.shift.x<0&&(e+=180),i=o.parseUnit(r.x),i="%"===i.unit?i.value*c:i.value,p=o.getRadialPoint({center:{x:f.x,y:f.y},radius:i,angle:e}),s=o.parseUnit(r.y),s="%"===s.unit?s.value*c:s.value,n=o.getRadialPoint({center:{x:p.x,y:p.y},radius:s,angle:e+90}),l.setAttribute("d","M"+f.x+","+f.y+" Q"+n.x+","+n.y+" "+u.x+","+u.y),l},t.prototype.postVars=function(){return this.props.pathStart=o.clamp(this.props.pathStart,0,1),this.props.pathEnd=o.clamp(this.props.pathEnd,this.props.pathStart,1),this.angle=0,this.speedX=0,this.speedY=0,this.blurX=0,this.blurY=0,this.prevCoords={},this.blurAmount=20,this.props.motionBlur=o.clamp(this.props.motionBlur,0,1),this.onUpdate=this.props.onUpdate,this.o.el?(this.el=this.parseEl(this.props.el),this.props.motionBlur>0&&this.createFilter(),this.path=this.getPath(),this.path.getAttribute("d")?(this.len=this.path.getTotalLength(),this.slicedLen=this.len*(this.props.pathEnd-this.props.pathStart),this.startLen=this.props.pathStart*this.len,this.fill=this.props.fill,null!=this.fill&&(this.container=this.parseEl(this.props.fill.container),this.fillRule=this.props.fill.fillRule||"all",this.getScaler(),null!=this.container)?(this.removeEvent(this.container,"onresize",this.getScaler),this.addEvent(this.container,"onresize",this.getScaler)):void 0):(o.error("Path has no coordinates to work with, aborting"),!0)):(o.error('Missed "el" option. It could be a selector, DOMNode or another module.'),!0)},t.prototype.addEvent=function(t,e,r){return t.addEventListener(e,r,!1)},t.prototype.removeEvent=function(t,e,r){return t.removeEventListener(e,r,!1)},t.prototype.createFilter=function(){var t,e;return t=document.createElement("div"),this.filterID="filter-"+o.getUniqID(),t.innerHTML='<svg id="svg-'+this.filterID+'"\n    style="visibility:hidden; width:0px; height:0px">\n  <filter id="'+this.filterID+'" y="-20" x="-20" width="40" height="40">\n    <feOffset\n      id="blur-offset" in="SourceGraphic"\n      dx="0" dy="0" result="offset2"></feOffset>\n    <feGaussianblur\n      id="blur" in="offset2"\n      stdDeviation="0,0" result="blur2"></feGaussianblur>\n    <feMerge>\n      <feMergeNode in="SourceGraphic"></feMergeNode>\n      <feMergeNode in="blur2"></feMergeNode>\n    </feMerge>\n  </filter>\n</svg>',e=t.querySelector("#svg-"+this.filterID),this.filter=e.querySelector("#blur"),this.filterOffset=e.querySelector("#blur-offset"),document.body.insertBefore(e,document.body.firstChild),this.el.style.filter="url(#"+this.filterID+")",this.el.style[o.prefix.css+"filter"]="url(#"+this.filterID+")"},t.prototype.parseEl=function(t){return"string"==typeof t?document.querySelector(t):t instanceof HTMLElement?t:null!=t.setProp?(this.isModule=!0,t):void 0},t.prototype.getPath=function(){var t;return t=o.parsePath(this.props.path),t?t:this.props.path.x||this.props.path.y?this.curveToPath({start:{x:0,y:0},shift:{x:this.props.path.x||0,y:this.props.path.y||0},curvature:{x:this.props.curvature.x||this.defaults.curvature.x,y:this.props.curvature.y||this.defaults.curvature.y}}):void 0},t.prototype.getScaler=function(){var t,e,r;switch(this.cSize={width:this.container.offsetWidth||0,height:this.container.offsetHeight||0},r=this.path.getPointAtLength(0),t=this.path.getPointAtLength(this.len),e={},this.scaler={},e.width=t.x>=r.x?t.x-r.x:r.x-t.x,e.height=t.y>=r.y?t.y-r.y:r.y-t.y,this.fillRule){case"all":return this.calcWidth(e),this.calcHeight(e);case"width":return this.calcWidth(e),this.scaler.y=this.scaler.x;case"height":return this.calcHeight(e),this.scaler.x=this.scaler.y}},t.prototype.calcWidth=function(t){return this.scaler.x=this.cSize.width/t.width,!isFinite(this.scaler.x)&&(this.scaler.x=1)},t.prototype.calcHeight=function(t){return this.scaler.y=this.cSize.height/t.height,!isFinite(this.scaler.y)&&(this.scaler.y=1)},t.prototype.run=function(t){var e,r,i;if(t){e=this.history[0];for(r in t)i=t[r],o.callbacksMap[r]||o.tweenOptionMap[r]?(o.warn('the property "'+r+'" property can not be overridden on run yet'),delete t[r]):this.history[0][r]=i;this.tuneOptions(t)}return this.startTween()},t.prototype.createTween=function(){return this.tween=new n({duration:this.props.duration,delay:this.props.delay,yoyo:this.props.yoyo,repeat:this.props.repeat,easing:this.props.easing,onStart:function(t){return function(){var e;return null!=(e=t.props.onStart)?e.apply(t):void 0}}(this),onComplete:function(t){return function(){var e;return t.props.motionBlur&&t.setBlur({blur:{x:0,y:0},offset:{x:0,y:0}}),null!=(e=t.props.onComplete)?e.apply(t):void 0;

}}(this),onUpdate:function(t){return function(e){return t.setProgress(e)}}(this),onFirstUpdateBackward:function(t){return function(){return t.history.length>1&&t.tuneOptions(t.history[0])}}(this)}),this.timeline=new s,this.timeline.add(this.tween),!this.props.isRunLess&&this.startTween(),this.props.isPresetPosition&&this.setProgress(0,!0)},t.prototype.startTween=function(){return setTimeout(function(t){return function(){var e;return null!=(e=t.timeline)?e.start():void 0}}(this),1)},t.prototype.setProgress=function(t,e){var r,i,s,n;return r=this.startLen+(this.props.isReverse?(1-t)*this.slicedLen:t*this.slicedLen),i=this.path.getPointAtLength(r),s=i.x+this.props.offsetX,n=i.y+this.props.offsetY,this._getCurrentAngle(i,r,t),this._setTransformOrigin(t),this._setTransform(s,n,t,e),this.props.motionBlur&&this.makeMotionBlur(s,n)},t.prototype.setElPosition=function(t,e,r){var i,s,n,p;return n=0!==this.angle?"rotate("+this.angle+"deg)":"",s=this.props.isCompositeLayer&&o.is3d,i=s?"translateZ(0)":"",p="translate("+t+"px,"+e+"px) "+n+" "+i,o.setPrefixedStyle(this.el,"transform",p)},t.prototype.setModulePosition=function(t,e){return this.el.setProp({shiftX:t+"px",shiftY:e+"px",angle:this.angle}),this.el.draw()},t.prototype._getCurrentAngle=function(t,e,r){var i,s,n,p,a;return s="function"==typeof this.props.transformOrigin,this.props.isAngle||null!=this.props.angleOffset||s?(n=this.path.getPointAtLength(e-1),p=t.y-n.y,a=t.x-n.x,i=Math.atan(p/a),!isFinite(i)&&(i=0),this.angle=i*o.RAD_TO_DEG,"function"!=typeof this.props.angleOffset?this.angle+=this.props.angleOffset||0:this.angle=this.props.angleOffset.call(this,this.angle,r)):this.angle=0},t.prototype._setTransform=function(t,e,r,i){var s;return this.scaler&&(t*=this.scaler.x,e*=this.scaler.y),s=null,i||(s="function"==typeof this.onUpdate?this.onUpdate(r,{x:t,y:e,angle:this.angle}):void 0),this.isModule?this.setModulePosition(t,e):"string"!=typeof s?this.setElPosition(t,e,r):o.setPrefixedStyle(this.el,"transform",s)},t.prototype._setTransformOrigin=function(t){var e,r;return this.props.transformOrigin?(e="function"==typeof this.props.transformOrigin,r=e?this.props.transformOrigin(this.angle,t):this.props.transformOrigin,o.setPrefixedStyle(this.el,"transform-origin",r)):void 0},t.prototype.makeMotionBlur=function(t,e){var r,i,s,n,p,a,h;return h=0,p=1,a=1,null==this.prevCoords.x||null==this.prevCoords.y?(this.speedX=0,this.speedY=0):(s=t-this.prevCoords.x,n=e-this.prevCoords.y,s>0&&(p=-1),0>p&&(a=-1),this.speedX=Math.abs(s),this.speedY=Math.abs(n),h=Math.atan(n/s)*(180/Math.PI)+90),r=h-this.angle,i=this.angToCoords(r),this.blurX=o.clamp(this.speedX/16*this.props.motionBlur,0,1),this.blurY=o.clamp(this.speedY/16*this.props.motionBlur,0,1),this.setBlur({blur:{x:3*this.blurX*this.blurAmount*Math.abs(i.x),y:3*this.blurY*this.blurAmount*Math.abs(i.y)},offset:{x:3*p*this.blurX*i.x*this.blurAmount,y:3*a*this.blurY*i.y*this.blurAmount}}),this.prevCoords.x=t,this.prevCoords.y=e},t.prototype.setBlur=function(t){return this.isMotionBlurReset?void 0:(this.filter.setAttribute("stdDeviation",t.blur.x+","+t.blur.y),this.filterOffset.setAttribute("dx",t.offset.x),this.filterOffset.setAttribute("dy",t.offset.y))},t.prototype.extendDefaults=function(t){var e,r,i;r=[];for(e in t)i=t[e],r.push(this[e]=i);return r},t.prototype.extendOptions=function(t){var e,r,i;r=[];for(e in t)i=t[e],r.push(this.props[e]=i);return r},t.prototype.then=function(t){var e,r,i,s,p;s=this.history[this.history.length-1],i={};for(r in s)p=s[r],!o.callbacksMap[r]&&!o.tweenOptionMap[r]||"duration"===r?null==t[r]&&(t[r]=p):null==t[r]&&(t[r]=void 0),o.tweenOptionMap[r]&&(i[r]="duration"!==r?t[r]:null!=t[r]?t[r]:s[r]);return this.history.push(t),e=this,i.onUpdate=function(t){return function(e){return t.setProgress(e)}}(this),i.onStart=function(t){return function(){var e;return null!=(e=t.props.onStart)?e.apply(t):void 0}}(this),i.onComplete=function(t){return function(){var e;return null!=(e=t.props.onComplete)?e.apply(t):void 0}}(this),i.onFirstUpdate=function(){return e.tuneOptions(e.history[this.index])},i.isChained=!t.delay,this.timeline.append(new n(i)),this},t.prototype.tuneOptions=function(t){return this.extendOptions(t),this.postVars()},t.prototype.angToCoords=function(t){var e,r,i;return t%=360,e=(t-90)*Math.PI/180,r=Math.cos(e),i=Math.sin(e),r=0>r?Math.max(r,-.7):Math.min(r,.7),i=0>i?Math.max(i,-.7):Math.min(i,.7),{x:1.428571429*r,y:1.428571429*i}},t}(),e.exports=i},{"./h":6,"./tween/timeline":24,"./tween/tween":25,"./vendor/resize":27}],9:[function(t,e,r){!function(t){var e,r,i;return null==t.performance&&(t.performance={}),Date.now=Date.now||function(){return(new Date).getTime()},null==t.performance.now?(e=(null!=(r=t.performance)&&null!=(i=r.timing)?i.navigationStart:void 0)?performance.timing.navigationStart:Date.now(),t.performance.now=function(){return Date.now()-e}):void 0}(window)},{}],10:[function(t,e,r){!function(){"use strict";var t,e,r,i,s,n,o;for(s=["webkit","moz"],e=0,o=window;e<s.length&&!o.requestAnimationFrame;)n=s[e],o.requestAnimationFrame=o[n+"RequestAnimationFrame"],t=o[n+"CancelAnimationFrame"],o.cancelAnimationFrame=t||o[n+"CancelRequestAnimationFrame"],++e;r=!o.requestAnimationFrame||!o.cancelAnimationFrame,(/iP(ad|hone|od).*OS 6/.test(o.navigator.userAgent)||r)&&(i=0,o.requestAnimationFrame=function(t){var e,r;return r=Date.now(),e=Math.max(i+16,r),setTimeout(function(){t(i=e)},e-r)},o.cancelAnimationFrame=clearTimeout)}()},{}],11:[function(t,e,r){var i,s;s=t("../h"),i=function(){function t(t){this.o=null!=t?t:{},this.init()}return t.prototype.ns="http://www.w3.org/2000/svg",t.prototype.type="line",t.prototype.ratio=1,t.prototype.defaults={radius:50,radiusX:void 0,radiusY:void 0,points:3,x:0,y:0,angle:0,stroke:"hotpink","stroke-width":2,"stroke-opacity":1,fill:"transparent","fill-opacity":1,"stroke-dasharray":"","stroke-dashoffset":"","stroke-linecap":""},t.prototype.init=function(){return this.vars(),this.render(),this},t.prototype.vars=function(){return this.o.ctx&&"svg"===this.o.ctx.tagName?this.ctx=this.o.ctx:this.o.el||s.error("You should pass a real context(ctx) to the bit"),this.state={},this.drawMapLength=this.drawMap.length,this.extendDefaults(),this.calcTransform()},t.prototype.calcTransform=function(){var t;return t="rotate("+this.props.angle+", "+this.props.x+", "+this.props.y+")",this.props.transform=""+t},t.prototype.extendDefaults=function(){var t,e,r,i;null==this.props&&(this.props={}),e=this.defaults,r=[];for(t in e)i=e[t],r.push(this.props[t]=null!=this.o[t]?this.o[t]:i);return r},t.prototype.setAttr=function(t,e){var r,i,s,n,o,p;if("object"==typeof t){for(s=Object.keys(t),n=s.length,r=e||this.el,o=[];n--;)i=s[n],p=t[i],o.push(r.setAttribute(i,p));return o}return this.el.setAttribute(t,e)},t.prototype.setProp=function(t,e){var r,i,s;if("object"==typeof t){i=[];for(r in t)s=t[r],i.push(this.props[r]=s);return i}return this.props[t]=e},t.prototype.render=function(){return this.isRendered=!0,null!=this.o.el?(this.el=this.o.el,this.isForeign=!0):(this.el=document.createElementNS(this.ns,this.type||"line"),!this.o.isDrawLess&&this.draw(),this.ctx.appendChild(this.el))},t.prototype.drawMap=["stroke","stroke-width","stroke-opacity","stroke-dasharray","fill","stroke-dashoffset","stroke-linecap","fill-opacity","transform"],t.prototype.draw=function(){var t,e;for(this.props.length=this.getLength(),t=this.drawMapLength;t--;){switch(e=this.drawMap[t]){case"stroke-dasharray":case"stroke-dashoffset":this.castStrokeDash(e)}this.setAttrsIfChanged(e,this.props[e])}return this.state.radius=this.props.radius},t.prototype.castStrokeDash=function(t){var e,r,i,n,o,p,a;if(s.isArray(this.props[t])){for(a="",p=this.props[t],i=n=0,o=p.length;o>n;i=++n)r=p[i],e="%"===r.unit?this.castPercent(r.value):r.value,a+=e+" ";return this.props[t]="0 "===a?a="":a,this.props[t]=a}return"object"==typeof this.props[t]?(a="%"===this.props[t].unit?this.castPercent(this.props[t].value):this.props[t].value,this.props[t]=0===a?a="":a):void 0},t.prototype.castPercent=function(t){return t*(this.props.length/100)},t.prototype.setAttrsIfChanged=function(t,e){var r,i,s,n;if("object"==typeof t){for(i=Object.keys(t),s=i.length,n=[];s--;)r=i[s],e=t[r],n.push(this.setAttrIfChanged(r,e));return n}return null==e&&(e=this.props[t]),this.setAttrIfChanged(t,e)},t.prototype.setAttrIfChanged=function(t,e){return this.isChanged(t,e)?(this.el.setAttribute(t,e),this.state[t]=e):void 0},t.prototype.isChanged=function(t,e){return null==e&&(e=this.props[t]),this.state[t]!==e},t.prototype.getLength=function(){var t;return null!=(null!=(t=this.el)?t.getTotalLength:void 0)&&this.el.getAttribute("d")?this.el.getTotalLength():2*(null!=this.props.radiusX?this.props.radiusX:this.props.radius)},t}(),e.exports=i},{"../h":6}],12:[function(t,e,r){var i,s,n,o,p,a,h,u,l,c;i=t("./bit"),n=t("./circle"),a=t("./line"),l=t("./zigzag"),u=t("./rect"),h=t("./polygon"),o=t("./cross"),p=t("./equal"),c=t("../h"),s=function(){function t(){}return t.prototype.h=c,t.prototype.map={bit:i,circle:n,line:a,zigzag:l,rect:u,polygon:h,cross:o,equal:p},t.prototype.getBit=function(t){return this.map[t]||this.h.error('no "'+t+'" shape available yet, please choose from this list:',this.map)},t}(),e.exports=new s},{"../h":6,"./bit":11,"./circle":13,"./cross":14,"./equal":15,"./line":16,"./polygon":17,"./rect":18,"./zigzag":19}],13:[function(t,e,r){var i,s,n=function(t,e){function r(){this.constructor=t}for(var i in e)o.call(e,i)&&(t[i]=e[i]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},o={}.hasOwnProperty;i=t("./bit"),s=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return n(e,t),e.prototype.type="ellipse",e.prototype.draw=function(){var t,r;return t=null!=this.props.radiusX?this.props.radiusX:this.props.radius,r=null!=this.props.radiusY?this.props.radiusY:this.props.radius,this.setAttrsIfChanged({rx:t,ry:r,cx:this.props.x,cy:this.props.y}),e.__super__.draw.apply(this,arguments)},e.prototype.getLength=function(){var t,e;return t=null!=this.props.radiusX?this.props.radiusX:this.props.radius,e=null!=this.props.radiusY?this.props.radiusY:this.props.radius,2*Math.PI*Math.sqrt((Math.pow(t,2)+Math.pow(e,2))/2)},e}(i),e.exports=s},{"./bit":11}],14:[function(t,e,r){var i,s,n=function(t,e){function r(){this.constructor=t}for(var i in e)o.call(e,i)&&(t[i]=e[i]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},o={}.hasOwnProperty;i=t("./bit"),s=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return n(e,t),e.prototype.type="path",e.prototype.draw=function(){var t,r,i,s,n,o,p,a,h;return e.__super__.draw.apply(this,arguments),s=null!=this.props.radiusX?this.props.radiusX:this.props.radius,n=null!=this.props.radiusY?this.props.radiusY:this.props.radius,o=this.props.x-s,p=this.props.x+s,r="M"+o+","+this.props.y+" L"+p+","+this.props.y,a=this.props.y-n,h=this.props.y+n,i="M"+this.props.x+","+a+" L"+this.props.x+","+h,t=r+" "+i,this.setAttr({d:t})},e.prototype.getLength=function(){var t,e;return t=null!=this.props.radiusX?this.props.radiusX:this.props.radius,e=null!=this.props.radiusY?this.props.radiusY:this.props.radius,2*(t+e)},e}(i),e.exports=s},{"./bit":11}],15:[function(t,e,r){var i,s,n=function(t,e){function r(){this.constructor=t}for(var i in e)o.call(e,i)&&(t[i]=e[i]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},o={}.hasOwnProperty;i=t("./bit"),s=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return n(e,t),e.prototype.type="path",e.prototype.ratio=1.43,e.prototype.draw=function(){var t,r,i,s,n,o,p,a,h,u,l;if(e.__super__.draw.apply(this,arguments),this.props.points){for(s=null!=this.props.radiusX?this.props.radiusX:this.props.radius,n=null!=this.props.radiusY?this.props.radiusY:this.props.radius,p=this.props.x-s,a=this.props.x+s,t="",l=2*n/(this.props.points-1),u=this.props.y-n,r=i=0,o=this.props.points;o>=0?o>i:i>o;r=o>=0?++i:--i)h=""+(r*l+u),t+="M"+p+", "+h+" L"+a+", "+h+" ";return this.setAttr({d:t})}},e.prototype.getLength=function(){return 2*(null!=this.props.radiusX?this.props.radiusX:this.props.radius)},e}(i),e.exports=s},{"./bit":11}],16:[function(t,e,r){var i,s,n=function(t,e){function r(){this.constructor=t}for(var i in e)o.call(e,i)&&(t[i]=e[i]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},o={}.hasOwnProperty;i=t("./bit"),s=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return n(e,t),e.prototype.draw=function(){var t;return t=null!=this.props.radiusX?this.props.radiusX:this.props.radius,this.setAttrsIfChanged({x1:this.props.x-t,x2:this.props.x+t,y1:this.props.y,y2:this.props.y}),e.__super__.draw.apply(this,arguments)},e}(i),e.exports=s},{"./bit":11}],17:[function(t,e,r){var i,s,n,o=function(t,e){function r(){this.constructor=t}for(var i in e)p.call(e,i)&&(t[i]=e[i]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},p={}.hasOwnProperty;i=t("./bit"),n=t("../h"),s=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return o(e,t),e.prototype.type="path",e.prototype.draw=function(){return this.drawShape(),e.__super__.draw.apply(this,arguments)},e.prototype.drawShape=function(){var t,e,r,i,s,o,p,a,h,u;for(u=360/this.props.points,this.radialPoints=[],r=i=0,a=this.props.points;a>=0?a>i:i>a;r=a>=0?++i:--i)this.radialPoints.push(n.getRadialPoint({radius:this.props.radius,radiusX:this.props.radiusX,radiusY:this.props.radiusY,angle:r*u,center:{x:this.props.x,y:this.props.y}}));for(e="",h=this.radialPoints,r=s=0,o=h.length;o>s;r=++s)p=h[r],t=0===r?"M":"L",e+=""+t+p.x.toFixed(4)+","+p.y.toFixed(4)+" ";return this.setAttr({d:e+="z"})},e.prototype.getLength=function(){return this.el.getTotalLength()},e}(i),e.exports=s},{"../h":6,"./bit":11}],18:[function(t,e,r){var i,s,n=function(t,e){function r(){this.constructor=t}for(var i in e)o.call(e,i)&&(t[i]=e[i]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},o={}.hasOwnProperty;i=t("./bit"),s=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return n(e,t),e.prototype.type="rect",e.prototype.ratio=1.43,e.prototype.draw=function(){var t,r;return e.__super__.draw.apply(this,arguments),t=null!=this.props.radiusX?this.props.radiusX:this.props.radius,r=null!=this.props.radiusY?this.props.radiusY:this.props.radius,this.setAttrsIfChanged({width:2*t,height:2*r,x:this.props.x-t,y:this.props.y-r})},e.prototype.getLength=function(){var t,e;return t=null!=this.props.radiusX?this.props.radiusX:this.props.radius,e=null!=this.props.radiusY?this.props.radiusY:this.props.radius,2*t+2*e},e}(i),e.exports=s},{"./bit":11}],19:[function(t,e,r){var i,s,n=function(t,e){function r(){this.constructor=t}for(var i in e)o.call(e,i)&&(t[i]=e[i]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},o={}.hasOwnProperty;i=t("./bit"),s=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return n(e,t),e.prototype.type="path",e.prototype.ratio=1.43,e.prototype.draw=function(){var t,r,i,s,n,o,p,a,h,u,l,c,d,f,y,g;if(this.props.points){for(h=null!=this.props.radiusX?this.props.radiusX:this.props.radius,u=null!=this.props.radiusY?this.props.radiusY:this.props.radius,a="",c=2*h/this.props.points,d=2*u/this.props.points,f=this.props["stroke-width"],y=this.props.x-h,g=this.props.y-u,r=p=l=this.props.points;0>=l?0>p:p>0;r=0>=l?++p:--p)i=y+r*c+f,n=g+r*d+f,s=y+(r-1)*c+f,o=g+(r-1)*d+f,t=r===this.props.points?"M":"L",a+=""+t+i+","+n+" l0, -"+d+" l-"+c+", 0";return this.setAttr({d:a}),e.__super__.draw.apply(this,arguments)}},e}(i),e.exports=s},{"./bit":11}],20:[function(t,e,r){var i,s,n,o;o=t("./h"),n=t("./tween/tween"),s=t("./tween/timeline"),i=function(){function t(t){return this.o=null!=t?t:{},null==this.o.el?o.error('No "el" option specified, aborting'):(this._vars(),this._extendDefaults(),this._parseFrames(),this._frames.length<=2&&o.warn("Spriter: only "+this._frames.length+" frames found"),this._frames.length<1&&o.error("Spriter: there is no frames to animate, aborting"),void this._createTween())}return t.prototype._defaults={duration:500,delay:0,easing:"linear.none",repeat:0,yoyo:!1,isRunLess:!1,isShowEnd:!1,onStart:null,onUpdate:null,onComplete:null},t.prototype._vars=function(){return this._props=o.cloneObj(this.o),this.el=this.o.el,this._frames=[]},t.prototype.run=function(t){return this._timeline.start()},t.prototype._extendDefaults=function(){return o.extend(this._props,this._defaults)},t.prototype._parseFrames=function(){var t,e,r,i,s;for(this._frames=Array.prototype.slice.call(this.el.children,0),s=this._frames,e=r=0,i=s.length;i>r;e=++r)t=s[e],t.style.opacity=0;return this._frameStep=1/this._frames.length},t.prototype._createTween=function(){return this._tween=new n({duration:this._props.duration,delay:this._props.delay,yoyo:this._props.yoyo,repeat:this._props.repeat,easing:this._props.easing,onStart:function(t){return function(){var e;return"function"==typeof(e=t._props).onStart?e.onStart():void 0}}(this),onComplete:function(t){return function(){var e;return"function"==typeof(e=t._props).onComplete?e.onComplete():void 0}}(this),onUpdate:function(t){return function(e){return t._setProgress(e)}}(this)}),this._timeline=new s,this._timeline.add(this._tween),!this._props.isRunLess&&this._startTween()},t.prototype._startTween=function(){return setTimeout(function(t){return function(){return t._timeline.start()}}(this),1)},t.prototype._setProgress=function(t){var e,r,i,s,n;return i=Math.floor(t/this._frameStep),this._prevFrame!==this._frames[i]&&(null!=(s=this._prevFrame)&&(s.style.opacity=0),r=1===t&&this._props.isShowEnd?i-1:i,null!=(n=this._frames[r])&&(n.style.opacity=1),this._prevFrame=this._frames[i]),"function"==typeof(e=this._props).onUpdate?e.onUpdate(t):void 0},t}(),e.exports=i},{"./h":6,"./tween/timeline":24,"./tween/tween":25}],21:[function(t,e,r){var i,s,n,o;o=t("./h"),n=t("./tween/timeline"),i=function(){function t(t,e){this.init(t,e)}return t.prototype._getOptionByMod=function(t,e,r){var i,s;return i=r[t],i+""=="[object NodeList]"&&(i=Array.prototype.slice.call(i,0)),i+""=="[object HTMLCollection]"&&(i=Array.prototype.slice.call(i,0)),s=o.isArray(i)?i[e%i.length]:i,o.parseIfStagger(s,e)},t.prototype._getOptionByIndex=function(t,e){var r,i,s;i={};for(r in e)s=e[r],i[r]=this._getOptionByMod(r,t,e);return i},t.prototype._getChildQuantity=function(t,e){var r,i;return"number"==typeof t?t:(i=e[t],o.isArray(i)?i.length:i+""=="[object NodeList]"?i.length:i+""=="[object HTMLCollection]"?(r=Array.prototype.slice.call(i,0),r.length):i instanceof HTMLElement?1:"string"==typeof i?1:void 0)},t.prototype._createTimeline=function(t){return null==t&&(t={}),this.timeline=new n({onStart:t.onStaggerStart,onUpdate:t.onStaggerUpdate,onComplete:t.onStaggerComplete,onReverseComplete:t.onStaggerReverseComplete,delay:t.moduleDelay})},t.prototype.init=function(t,e){var r,i,s,n,o,p;for(r=this._getChildQuantity(t.quantifier||"el",t),this._createTimeline(t),this.childModules=[],i=s=0,p=r;p>=0?p>s:s>p;i=p>=0?++s:--s)o=this._getOptionByIndex(i,t),o.isRunLess=!0,n=new e(o),this.childModules.push(n),this.timeline.add(n);return this},t.prototype.run=function(){return this.timeline.start()},t}(),s=function(){function t(t){var e;return e=t,function(t){return new i(t,e)}}return t}(),e.exports=s},{"./h":6,"./tween/timeline":24}],22:[function(t,e,r){var i,s,n=function(t,e){function r(){this.constructor=t}for(var i in e)o.call(e,i)&&(t[i]=e[i]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},o={}.hasOwnProperty;s=t("./transit"),i=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return n(e,t),e.prototype.skipPropsDelta={x:1,y:1},e.prototype.vars=function(){return e.__super__.vars.apply(this,arguments),!this.o.isSwirlLess&&this.generateSwirl()},e.prototype.extendDefaults=function(){var t,r,i,s;return e.__super__.extendDefaults.apply(this,arguments),i=this.getPosValue("x"),s=this.getPosValue("y"),t=90+Math.atan(s.delta/i.delta||0)*(180/Math.PI),i.delta<0&&(t+=180),this.positionDelta={radius:Math.sqrt(i.delta*i.delta+s.delta*s.delta),angle:t,x:i,y:s},null==(r=this.o).radiusScale&&(r.radiusScale=1),this.props.angleShift=this.h.parseIfRand(this.o.angleShift||0),this.props.radiusScale=this.h.parseIfRand(this.o.radiusScale)},e.prototype.getPosValue=function(t){var e,r;return e=this.o[t],e&&"object"==typeof e?(r=this.h.parseDelta(t,e),{start:r.start.value,end:r.end.value,delta:r.delta,units:r.end.unit}):(r=parseFloat(e||this.defaults[t]),{start:r,end:r,delta:0,units:"px"})},e.prototype.setProgress=function(t){var r,i,s,n;return r=this.positionDelta.angle,this.o.isSwirl&&(r+=this.getSwirl(t)),i=this.h.getRadialPoint({angle:r,radius:this.positionDelta.radius*t*this.props.radiusScale,center:{x:this.positionDelta.x.start,y:this.positionDelta.y.start}}),s=i.x.toFixed(4),n=i.y.toFixed(4),this.props.x=this.o.ctx?s:s+this.positionDelta.x.units,this.props.y=this.o.ctx?n:n+this.positionDelta.y.units,e.__super__.setProgress.apply(this,arguments)},e.prototype.generateSwirl=function(){var t,e;return this.props.signRand=Math.round(this.h.rand(0,1))?-1:1,null==(t=this.o).swirlSize&&(t.swirlSize=10),null==(e=this.o).swirlFrequency&&(e.swirlFrequency=3),this.props.swirlSize=this.h.parseIfRand(this.o.swirlSize),this.props.swirlFrequency=this.h.parseIfRand(this.o.swirlFrequency)},e.prototype.getSwirl=function(t){return this.props.signRand*this.props.swirlSize*Math.sin(this.props.swirlFrequency*t)},e}(s),e.exports=i},{"./transit":23}],23:[function(t,e,r){var i,s,n,o,p,a=function(t,e){function r(){this.constructor=t}for(var i in e)h.call(e,i)&&(t[i]=e[i]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},h={}.hasOwnProperty;p=t("./h"),o=t("./shapes/bitsMap"),n=t("./tween/tween"),i=t("./tween/timeline"),s=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return a(e,t),e.prototype.progress=0,e.prototype.defaults={strokeWidth:2,strokeOpacity:1,strokeDasharray:0,strokeDashoffset:0,stroke:"transparent",fill:"deeppink",fillOpacity:"transparent",strokeLinecap:"",points:3,x:0,y:0,shiftX:0,shiftY:0,opacity:1,radius:{0:50},radiusX:void 0,radiusY:void 0,angle:0,size:null,sizeGap:0,onStart:null,onComplete:null,onUpdate:null,duration:500,delay:0,repeat:0,yoyo:!1,easing:"Linear.None"},e.prototype.vars=function(){var t;return null==this.h&&(this.h=p),null==this.lastSet&&(this.lastSet={}),this.index=this.o.index||0,null==this.runCount&&(this.runCount=0),this.extendDefaults(),t=this.h.cloneObj(this.o),this.h.extend(t,this.defaults),this.history=[t],this.isForeign=!!this.o.ctx,this.isForeignBit=!!this.o.bit,this.timelines=[]},e.prototype.render=function(){return this.isRendered||(this.isForeign||this.isForeignBit?(this.ctx=this.o.ctx,this.createBit(),this.calcSize()):(this.ctx=document.createElementNS(this.ns,"svg"),this.ctx.style.position="absolute",this.ctx.style.width="100%",this.ctx.style.height="100%",this.createBit(),this.calcSize(),this.el=document.createElement("div"),this.el.appendChild(this.ctx),(this.o.parent||document.body).appendChild(this.el)),this.isRendered=!0),this.setElStyles(),this.setProgress(0,!0),this.createTween(),this},e.prototype.setElStyles=function(){var t,e,r;return this.isForeign||(r=this.props.size+"px",t=-this.props.size/2+"px",this.el.style.position="absolute",this.el.style.top=this.props.y,this.el.style.left=this.props.x,this.el.style.width=r,this.el.style.height=r,this.el.style["margin-left"]=t,this.el.style["margin-top"]=t,this.el.style.marginLeft=t,this.el.style.marginTop=t),null!=(e=this.el)&&(e.style.opacity=this.props.opacity),this.o.isShowInit?this.show():this.hide()},e.prototype.show=function(){return this.isShown||null==this.el?void 0:(this.el.style.display="block",this.isShown=!0)},e.prototype.hide=function(){return this.isShown!==!1&&null!=this.el?(this.el.style.display="none",this.isShown=!1):void 0},e.prototype.draw=function(){return this.bit.setProp({x:this.origin.x,y:this.origin.y,stroke:this.props.stroke,"stroke-width":this.props.strokeWidth,"stroke-opacity":this.props.strokeOpacity,"stroke-dasharray":this.props.strokeDasharray,"stroke-dashoffset":this.props.strokeDashoffset,"stroke-linecap":this.props.strokeLinecap,fill:this.props.fill,"fill-opacity":this.props.fillOpacity,radius:this.props.radius,radiusX:this.props.radiusX,radiusY:this.props.radiusY,points:this.props.points,transform:this.calcTransform()}),this.bit.draw(),this.drawEl()},e.prototype.drawEl=function(){return null==this.el?!0:(this.isPropChanged("opacity")&&(this.el.style.opacity=this.props.opacity),!this.isForeign&&(this.isPropChanged("x")&&(this.el.style.left=this.props.x),this.isPropChanged("y")&&(this.el.style.top=this.props.y),this.isNeedsTransform())?this.h.setPrefixedStyle(this.el,"transform",this.fillTransform()):void 0)},e.prototype.fillTransform=function(){return"translate("+this.props.shiftX+", "+this.props.shiftY+")"},e.prototype.isNeedsTransform=function(){var t,e;return t=this.isPropChanged("shiftX"),e=this.isPropChanged("shiftY"),t||e},e.prototype.isPropChanged=function(t){var e;return null==(e=this.lastSet)[t]&&(e[t]={}),this.lastSet[t].value!==this.props[t]?(this.lastSet[t].value=this.props[t],!0):!1},e.prototype.calcTransform=function(){return this.props.transform="rotate("+this.props.angle+","+this.origin.x+","+this.origin.y+")"},e.prototype.calcSize=function(){var t,e,r,i;if(!this.o.size){switch(r=this.calcMaxRadius(),e=this.deltas.strokeWidth,i=null!=e?Math.max(Math.abs(e.start),Math.abs(e.end)):this.props.strokeWidth,this.props.size=2*r+2*i,"function"==typeof(t=this.props.easing).toLowerCase?t.toLowerCase():void 0){case"elastic.out":case"elastic.inout":this.props.size*=1.25;break;case"back.out":case"back.inout":this.props.size*=1.1}return this.props.size*=this.bit.ratio,this.props.size+=2*this.props.sizeGap,this.props.center=this.props.size/2}},e.prototype.calcMaxRadius=function(){var t,e,r;return t=this.getRadiusSize({key:"radius"}),e=this.getRadiusSize({key:"radiusX",fallback:t}),r=this.getRadiusSize({key:"radiusY",fallback:t}),Math.max(e,r)},e.prototype.getRadiusSize=function(t){return null!=this.deltas[t.key]?Math.max(Math.abs(this.deltas[t.key].end),Math.abs(this.deltas[t.key].start)):null!=this.props[t.key]?parseFloat(this.props[t.key]):t.fallback||0},e.prototype.createBit=function(){var t;return t=o.getBit(this.o.type||this.type),this.bit=new t({ctx:this.ctx,el:this.o.bit,isDrawLess:!0}),this.isForeign||this.isForeignBit?this.el=this.bit.el:void 0},e.prototype.setProgress=function(t,e){return e||(this.show(),"function"==typeof this.onUpdate&&this.onUpdate(t)),this.progress=0>t||!t?0:t>1?1:t,this.calcCurrentProps(t),this.calcOrigin(),this.draw(t),this},e.prototype.calcCurrentProps=function(t){var e,r,i,s,n,o,p,a,h,u,l,c,d,f;for(a=Object.keys(this.deltas),h=a.length,l=[];h--;)p=a[h],f=this.deltas[p],l.push(this.props[p]=function(){var p,a,h;switch(f.type){case"array":for(c=[],h=f.delta,n=p=0,a=h.length;a>p;n=++p)o=h[n],i=f.start[n].value+o.value*this.progress,c.push({value:i,unit:o.unit});return c;case"number":return f.start+f.delta*t;case"unit":return d=f.end.unit,""+(f.start.value+f.delta*t)+d;case"color":return u=parseInt(f.start.r+f.delta.r*t,10),s=parseInt(f.start.g+f.delta.g*t,10),r=parseInt(f.start.b+f.delta.b*t,10),e=parseInt(f.start.a+f.delta.a*t,10),"rgba("+u+","+s+","+r+","+e+")"}}.call(this));return l},e.prototype.calcOrigin=function(){return this.origin=this.o.ctx?{x:parseFloat(this.props.x),y:parseFloat(this.props.y)}:{x:this.props.center,y:this.props.center}},e.prototype.extendDefaults=function(t){var e,r,i,s,n,o,p,a,h,u,l,c,d,f;for(null==this.props&&(this.props={}),i=t||this.defaults,null==t&&(this.deltas={}),p=Object.keys(i),a=p.length;a--;)if(o=p[a],r=i[o],null!=(c=this.skipProps)?!c[o]:!0)if(t?(this.o[o]=r,u=r,delete this.deltas[o]):u=null!=this.o[o]?this.o[o]:r,this.isDelta(u))this.isSkipDelta||this.getDelta(o,u);else if("string"==typeof u&&u.match(/stagger/)&&(u=this.h.parseStagger(u,this.index)),"string"==typeof u&&u.match(/rand/)&&(u=this.h.parseRand(u)),this.props[o]=u,"radius"===o&&(null==this.o.radiusX&&(this.props.radiusX=u),null==this.o.radiusY&&(this.props.radiusY=u)),this.h.posPropsMap[o]&&(this.props[o]=this.h.parseUnit(this.props[o]).string),this.h.strokeDashPropsMap[o]){switch(l=this.props[o],f=[],typeof l){case"number":f.push(this.h.parseUnit(l));break;case"string":for(e=this.props[o].split(" "),s=n=0,h=e.length;h>n;s=++n)d=e[s],f.push(this.h.parseUnit(d))}this.props[o]=f}return this.onUpdate=this.props.onUpdate},e.prototype.isDelta=function(t){var e;return e=null!=t&&"object"==typeof t,e=e&&!t.unit,!(!e||this.h.isArray(t)||p.isDOM(t))},e.prototype.getDelta=function(t,e){var r,i;return"x"!==t&&"y"!==t||this.o.ctx||this.h.warn("Consider to animate shiftX/shiftY properties instead of x/y, as it would be much more performant",e),(null!=(i=this.skipPropsDelta)?i[t]:0)?void 0:(r=this.h.parseDelta(t,e,this.defaults[t]),null!=r.type&&(this.deltas[t]=r),this.props[t]=r.start)},e.prototype.mergeThenOptions=function(t,e){var r,i,s,n,o,p,a,h,u;p={};for(n in t)u=t[n],p[n]=!this.h.tweenOptionMap[n]&&!this.h.callbacksMap[n]||"duration"===n?u:"easing"===n?"":void 0;for(o=Object.keys(e),i=o.length;i--;)n=o[i],r=e[n],s="function"==typeof r,this.h.tweenOptionMap[n]||"object"==typeof r||s?p[n]=null!=r?r:t[n]:(a=t[n],null==a&&(a=this.defaults[n]),"radiusX"!==n&&"radiusY"!==n||null!=a||(a=t.radius),"object"==typeof a&&null!=a&&(h=Object.keys(a),a=a[h[0]]),null!=r&&(p[n]={},p[n][a]=r));return p},e.prototype.then=function(t){var e,r,i,s,o,p;if(null!=t&&Object.keys(t)){for(o=this.mergeThenOptions(this.history[this.history.length-1],t),this.history.push(o),i=Object.keys(this.h.tweenOptionMap),e=i.length,p={};e--;)p[i[e]]=o[i[e]];return r=this,s=r.history.length,function(e){return function(i){return p.onUpdate=function(t){return e.setProgress(t)},p.onStart=function(){var t;return null!=(t=e.props.onStart)?t.apply(e):void 0},p.onComplete=function(){var t;return null!=(t=e.props.onComplete)?t.apply(e):void 0},p.onFirstUpdate=function(){return r.tuneOptions(r.history[this.index])},p.isChained=!t.delay,e.timeline.append(new n(p))}}(this)(s),this}},e.prototype.tuneOptions=function(t){return this.extendDefaults(t),this.calcSize(),this.setElStyles()},e.prototype.createTween=function(){var t;return t=this,this.createTimeline(),this.timeline=new i({onComplete:function(t){return function(){var e;return!t.o.isShowEnd&&t.hide(),null!=(e=t.props.onComplete)?e.apply(t):void 0}}(this)}),this.timeline.add(this.tween),!this.o.isRunLess&&this.startTween()},e.prototype.createTimeline=function(){return this.tween=new n({duration:this.props.duration,delay:this.props.delay,repeat:this.props.repeat,yoyo:this.props.yoyo,easing:this.props.easing,onUpdate:function(t){return function(e){return t.setProgress(e)}}(this),onStart:function(t){return function(){var e;return t.show(),null!=(e=t.props.onStart)?e.apply(t):void 0}}(this),onFirstUpdateBackward:function(t){return function(){return t.history.length>1&&t.tuneOptions(t.history[0])}}(this),onReverseComplete:function(t){return function(){var e;return!t.o.isShowInit&&t.hide(),null!=(e=t.props.onReverseComplete)?e.apply(t):void 0}}(this)})},e.prototype.run=function(t){var e,r,i;if(this.runCount++,t&&Object.keys(t).length){if(this.history.length>1)for(r=Object.keys(t),i=r.length;i--;)e=r[i],(p.callbacksMap[e]||p.tweenOptionMap[e])&&(p.warn('the property "'+e+'" property can not be overridden on run with "then" chain yet'),delete t[e]);this.transformHistory(t),this.tuneNewOption(t),t=this.h.cloneObj(this.o),this.h.extend(t,this.defaults),this.history[0]=t,!this.o.isDrawLess&&this.setProgress(0,!0)}else this.tuneNewOption(this.history[0]);return this.startTween()},e.prototype.transformHistory=function(t){var e,r,i,s,n,o,p,a,h,u,l,c;for(n=Object.keys(t),r=-1,o=n.length,e=this.history.length,a=[];++r<o;)s=n[r],i=0,a.push(function(){var r;for(r=[];++i<e;){if(p=this.history[i][s],
"object"==typeof p){l=Object.keys(p),h=p[l[0]],delete this.history[i][s][l[0]],"object"==typeof t[s]?(c=Object.keys(t[s]),u=t[s][c[0]],this.history[i][s][u]=h):this.history[i][s][t[s]]=h;break}r.push(this.history[i][s]=t[s])}return r}.call(this));return a},e.prototype.tuneNewOption=function(t,e){return null!=t&&null!=t.type&&t.type!==(this.o.type||this.type)&&(this.h.warn("Sorry, type can not be changed on run"),delete t.type),null!=t&&Object.keys(t).length?(this.extendDefaults(t),this.resetTimeline(),!e&&this.timeline.recalcDuration(),this.calcSize(),!e&&this.setElStyles()):void 0},e.prototype.startTween=function(){return setTimeout(function(t){return function(){var e;return null!=(e=t.timeline)?e.start():void 0}}(this),1)},e.prototype.resetTimeline=function(){var t,e,r,i,s,n;for(n={},s=Object.keys(this.h.tweenOptionMap),t=e=0,i=s.length;i>e;t=++e)r=s[t],n[r]=this.props[r];return n.onStart=this.props.onStart,n.onComplete=this.props.onComplete,this.tween.setProp(n)},e.prototype.getBitLength=function(){return this.props.bitLength=this.bit.getLength(),this.props.bitLength},e}(o.map.bit),e.exports=s},{"./h":6,"./shapes/bitsMap":12,"./tween/timeline":24,"./tween/tween":25}],24:[function(t,e,r){var i,s,n,o=[].slice;s=t("../h"),n=t("./tweener"),i=function(){function t(t){this.o=null!=t?t:{},this.vars(),this._extendDefaults()}return t.prototype.state="stop",t.prototype.defaults={repeat:0,delay:0},t.prototype.vars=function(){return this.timelines=[],this.props={time:0,repeatTime:0,shiftedRepeatTime:0},this.loop=s.bind(this.loop,this),this.onUpdate=this.o.onUpdate},t.prototype.add=function(){var t;return t=1<=arguments.length?o.call(arguments,0):[],this.pushTimelineArray(t),this},t.prototype.pushTimelineArray=function(t){var e,r,i,n,o;for(n=[],e=r=0,i=t.length;i>r;e=++r)o=t[e],n.push(s.isArray(o)?this.pushTimelineArray(o):this.pushTimeline(o));return n},t.prototype._extendDefaults=function(){var t,e,r,i;e=this.defaults,r=[];for(t in e)i=e[t],r.push(this.props[t]=null!=this.o[t]?this.o[t]:i);return r},t.prototype.setProp=function(t){var e,r;for(e in t)r=t[e],this.props[e]=r;return this.recalcDuration()},t.prototype.pushTimeline=function(e,r){return e.timeline instanceof t&&(e=e.timeline),null!=r&&e.setProp({shiftTime:r}),this.timelines.push(e),this._recalcTimelineDuration(e)},t.prototype.remove=function(t){var e;return e=this.timelines.indexOf(t),-1!==e?this.timelines.splice(e,1):void 0},t.prototype.append=function(){var t,e,r,i,n;for(i=1<=arguments.length?o.call(arguments,0):[],t=e=0,r=i.length;r>e;t=++e)n=i[t],s.isArray(n)?this._appendTimelineArray(n):this.appendTimeline(n,this.timelines.length);return this},t.prototype._appendTimelineArray=function(t){var e,r,i,s;for(e=t.length,s=this.props.repeatTime-this.props.delay,r=this.timelines.length,i=[];e--;)i.push(this.appendTimeline(t[e],r,s));return i},t.prototype.appendTimeline=function(t,e,r){var i;return i=null!=r?r:this.props.time,i+=t.props.shiftTime||0,t.index=e,this.pushTimeline(t,i)},t.prototype.recalcDuration=function(){var t,e;for(t=this.timelines.length,this.props.time=0,this.props.repeatTime=0,this.props.shiftedRepeatTime=0,e=[];t--;)e.push(this._recalcTimelineDuration(this.timelines[t]));return e},t.prototype._recalcTimelineDuration=function(t){var e;return e=t.props.repeatTime+(t.props.shiftTime||0),this.props.time=Math.max(e,this.props.time),this.props.repeatTime=(this.props.time+this.props.delay)*(this.props.repeat+1),this.props.shiftedRepeatTime=this.props.repeatTime+(this.props.shiftTime||0),this.props.shiftedRepeatTime-=this.props.delay},t.prototype.update=function(t,e){return t>this.props.endTime&&(t=this.props.endTime),t===this.props.endTime&&this.isCompleted?!0:(this._updateTimelines(t,e),this._checkCallbacks(t))},t.prototype._updateTimelines=function(t,e){var r,i,s,n,o;if(n=this.props.startTime-this.props.delay,r=(t-n)%(this.props.delay+this.props.time),o=t===this.props.endTime?this.props.endTime:n+r>=this.props.startTime?t>=this.props.endTime?this.props.endTime:n+r:t>this.props.startTime+this.props.time?this.props.startTime+this.props.time:null,null!=o)for(i=-1,s=this.timelines.length-1;i++<s;)null==e&&(e=t>(this._previousUpdateTime||0)),this.timelines[i].update(o,e);return this._previousUpdateTime=t},t.prototype._checkCallbacks=function(t){var e,r,i;if(this.prevTime!==t)return(!this.prevTime||this.isCompleted&&!this.isStarted)&&(null!=(e=this.o.onStart)&&e.apply(this),this.isStarted=!0,this.isCompleted=!1),t>=this.props.startTime&&t<this.props.endTime&&"function"==typeof this.onUpdate&&this.onUpdate((t-this.props.startTime)/this.props.repeatTime),this.prevTime>t&&t<=this.props.startTime&&null!=(r=this.o.onReverseComplete)&&r.apply(this),this.prevTime=t,t!==this.props.endTime||this.isCompleted?void 0:("function"==typeof this.onUpdate&&this.onUpdate(1),null!=(i=this.o.onComplete)&&i.apply(this),this.isCompleted=!0,this.isStarted=!1,!0)},t.prototype.start=function(t){return this.setStartTime(t),!t&&(n.add(this),this.state="play"),this},t.prototype.pause=function(){return this.removeFromTweener(),this.state="pause",this},t.prototype.stop=function(){return this.removeFromTweener(),this.setProgress(0),this.state="stop",this},t.prototype.restart=function(){return this.stop(),this.start()},t.prototype.removeFromTweener=function(){return n.remove(this),this},t.prototype.setStartTime=function(t){return this.getDimentions(t),this.startTimelines(this.props.startTime)},t.prototype.startTimelines=function(t){var e,r;for(e=this.timelines.length,null==t&&(t=this.props.startTime),r=[];e--;)r.push(this.timelines[e].start(t));return r},t.prototype.setProgress=function(t){return null==this.props.startTime&&this.setStartTime(),t=s.clamp(t,0,1),this.update(this.props.startTime+t*this.props.repeatTime)},t.prototype.getDimentions=function(t){return null==t&&(t=performance.now()),this.props.startTime=t+this.props.delay+(this.props.shiftTime||0),this.props.endTime=this.props.startTime+this.props.shiftedRepeatTime,this.props.endTime-=this.props.shiftTime||0},t}(),e.exports=i},{"../h":6,"./tweener":26}],25:[function(t,e,r){var i,s,n,o;n=t("../h"),o=t("./tweener"),s=t("../easing/easing"),i=function(){function t(t){this.o=null!=t?t:{},this.extendDefaults(),this.vars()}return t.prototype.defaults={duration:600,delay:0,repeat:0,yoyo:!1,easing:"Linear.None",onStart:null,onComplete:null,onReverseComplete:null,onFirstUpdate:null,onUpdate:null,onFirstUpdateBackward:null,isChained:!1},t.prototype.vars=function(){return this.h=n,this.progress=0,this.prevTime=0,this.calcDimentions()},t.prototype.calcDimentions=function(){return this.props.time=this.props.duration+this.props.delay,this.props.repeatTime=this.props.time*(this.props.repeat+1)},t.prototype.extendDefaults=function(){var t,e,r;this.props={},e=this.defaults;for(t in e)r=e[t],this.props[t]=null!=this.o[t]?this.o[t]:r;return this.props.easing=s.parseEasing(this.o.easing||this.defaults.easing),this.onUpdate=this.props.onUpdate},t.prototype.start=function(t){return this.isCompleted=!1,this.isStarted=!1,null==t&&(t=performance.now()),this.props.startTime=t+this.props.delay+(this.props.shiftTime||0),this.props.endTime=this.props.startTime+this.props.repeatTime-this.props.delay,this},t.prototype.update=function(t,e){var r,i,s,n,o;return t>=this.props.startTime&&t<this.props.endTime?(this.isOnReverseComplete=!1,this.isCompleted=!1,this.isFirstUpdate||(null!=(r=this.props.onFirstUpdate)&&r.apply(this),this.isFirstUpdate=!0),this.isStarted||(null!=(i=this.props.onStart)&&i.apply(this),this.isStarted=!0),this._updateInActiveArea(t),t<this.prevTime&&!this.isFirstUpdateBackward&&(null!=(s=this.props.onFirstUpdateBackward)&&s.apply(this),this.isFirstUpdateBackward=!0)):(t>=this.props.endTime&&!this.isCompleted&&this._complete(),t>this.props.endTime&&(this.isFirstUpdate=!1),t>this.props.endTime&&(this.isFirstUpdateBackward=!1)),t<this.prevTime&&t<=this.props.startTime&&(this.isFirstUpdateBackward||(null!=(n=this.props.onFirstUpdateBackward)&&n.apply(this),this.isFirstUpdateBackward=!0),e?this._complete():this.isOnReverseComplete||(this.isOnReverseComplete=!0,this.setProgress(0,!this.props.isChained),null!=(o=this.props.onReverseComplete)&&o.apply(this)),this.isFirstUpdate=!1),this.prevTime=t,this.isCompleted},t.prototype._complete=function(){var t;return this.setProgress(1),null!=(t=this.props.onComplete)&&t.apply(this),this.isCompleted=!0,this.isStarted=!1,this.isOnReverseComplete=!1},t.prototype._updateInActiveArea=function(t){var e,r,i,s,n;return n=this.props.startTime-this.props.delay,r=(t-n)%(this.props.delay+this.props.duration),e=Math.floor((t-n)/(this.props.delay+this.props.duration)),n+r>=this.props.startTime?(i=(t-this.props.startTime)%(this.props.delay+this.props.duration),s=i/this.props.duration,this.setProgress(this.props.yoyo?e%2===0?s:1-(1===s?0:s):s)):this.setProgress(this.prevTime<t?1:0)},t.prototype.setProgress=function(t,e){return null==e&&(e=!0),this.progress=t,this.easedProgress=this.props.easing(this.progress),this.props.prevEasedProgress!==this.easedProgress&&e&&"function"==typeof this.onUpdate&&this.onUpdate(this.easedProgress,this.progress),this.props.prevEasedProgress=this.easedProgress},t.prototype.setProp=function(t,e){var r,i;if("object"==typeof t)for(r in t)i=t[r],this.props[r]=i,"easing"===r&&(this.props.easing=s.parseEasing(this.props.easing));else"string"==typeof t&&("easing"===t?this.props.easing=s.parseEasing(e):this.props[t]=e);return this.calcDimentions()},t.prototype.run=function(t){return this.start(t),!t&&o.add(this),this},t.prototype.stop=function(){return this.pause(),this.setProgress(0),this},t.prototype.pause=function(){return this._removeFromTweener(),this},t.prototype._removeFromTweener=function(){return o.remove(this),this},t}(),e.exports=i},{"../easing/easing":3,"../h":6,"./tweener":26}],26:[function(t,e,r){var i,s,n,o;t("../polyfills/raf"),t("../polyfills/performance"),s=t("../h"),n=0,i=function(){function t(){this.vars()}return t.prototype.vars=function(){return this.tweens=[],this.loop=s.bind(this.loop,this)},t.prototype.loop=function(){var t;return this.isRunning?(t=performance.now(),this.update(t),this.tweens.length?(requestAnimationFrame(this.loop),this):this.isRunning=!1):!1},t.prototype.startLoop=function(){return this.isRunning?void 0:(this.isRunning=!0,requestAnimationFrame(this.loop))},t.prototype.stopLoop=function(){return this.isRunning=!1},t.prototype.update=function(t){var e;for(n=this.tweens.length,e=[];n--;)e.push(this.tweens[n].update(t)===!0?this.remove(n):void 0);return e},t.prototype.add=function(t){return this.tweens.push(t),this.startLoop()},t.prototype.removeAll=function(){return this.tweens.length=0},t.prototype.remove=function(t){var e;return e="number"==typeof t?t:this.tweens.indexOf(t),-1!==e?this.tweens.splice(e,1):void 0},t}(),o=new i,e.exports=o},{"../h":6,"../polyfills/performance":9,"../polyfills/raf":10}],27:[function(e,r,i){!function(){var e;return e=function(){function t(t){this.o=null!=t?t:{},window.isAnyResizeEventInited||(this.vars(),this.redefineProto())}return t.prototype.vars=function(){return window.isAnyResizeEventInited=!0,this.allowedProtos=[HTMLDivElement,HTMLFormElement,HTMLLinkElement,HTMLBodyElement,HTMLParagraphElement,HTMLFieldSetElement,HTMLLegendElement,HTMLLabelElement,HTMLButtonElement,HTMLUListElement,HTMLOListElement,HTMLLIElement,HTMLHeadingElement,HTMLQuoteElement,HTMLPreElement,HTMLBRElement,HTMLFontElement,HTMLHRElement,HTMLModElement,HTMLParamElement,HTMLMapElement,HTMLTableElement,HTMLTableCaptionElement,HTMLImageElement,HTMLTableCellElement,HTMLSelectElement,HTMLInputElement,HTMLTextAreaElement,HTMLAnchorElement,HTMLObjectElement,HTMLTableColElement,HTMLTableSectionElement,HTMLTableRowElement],this.timerElements={img:1,textarea:1,input:1,embed:1,object:1,svg:1,canvas:1,tr:1,tbody:1,thead:1,tfoot:1,a:1,select:1,option:1,optgroup:1,dl:1,dt:1,br:1,basefont:1,font:1,col:1,iframe:1}},t.prototype.redefineProto=function(){var t,e,r,i;return e=this,i=function(){var i,s,n,o;for(n=this.allowedProtos,o=[],t=i=0,s=n.length;s>i;t=++i)r=n[t],null!=r.prototype&&o.push(function(t){var r,i;return r=t.prototype.addEventListener||t.prototype.attachEvent,function(r){var i;return i=function(){var t;return(this!==window||this!==document)&&(t="onresize"===arguments[0]&&!this.isAnyResizeEventInited,t&&e.handleResize({args:arguments,that:this})),r.apply(this,arguments)},t.prototype.addEventListener?t.prototype.addEventListener=i:t.prototype.attachEvent?t.prototype.attachEvent=i:void 0}(r),i=t.prototype.removeEventListener||t.prototype.detachEvent,function(e){var r;return r=function(){return this.isAnyResizeEventInited=!1,this.iframe&&this.removeChild(this.iframe),e.apply(this,arguments)},t.prototype.removeEventListener?t.prototype.removeEventListener=r:t.prototype.detachEvent?t.prototype.detachEvent=wrappedListener:void 0}(i)}(r));return o}.call(this)},t.prototype.handleResize=function(t){var e,r,i,s,n,o,p;return r=t.that,this.timerElements[r.tagName.toLowerCase()]?this.initTimer(r):(i=document.createElement("iframe"),r.appendChild(i),i.style.width="100%",i.style.height="100%",i.style.position="absolute",i.style.zIndex=-999,i.style.opacity=0,i.style.top=0,i.style.left=0,e=window.getComputedStyle?getComputedStyle(r):r.currentStyle,n=""===r.style.position,o="static"===e.position&&n,s=""===e.position&&""===r.style.position,(o||s)&&(r.style.position="relative"),null!=(p=i.contentWindow)&&(p.onresize=function(t){return function(e){return t.dispatchEvent(r)}}(this)),r.iframe=i),r.isAnyResizeEventInited=!0},t.prototype.initTimer=function(t){var e,r;return r=0,e=0,this.interval=setInterval(function(i){return function(){var s,n;return n=t.offsetWidth,s=t.offsetHeight,n!==r||s!==e?(i.dispatchEvent(t),r=n,e=s):void 0}}(this),this.o.interval||62.5)},t.prototype.dispatchEvent=function(t){var e;return document.createEvent?(e=document.createEvent("HTMLEvents"),e.initEvent("onresize",!1,!1),t.dispatchEvent(e)):document.createEventObject?(e=document.createEventObject(),t.fireEvent("onresize",e)):!1},t.prototype.destroy=function(){var t,e,r,i,s,n,o;for(clearInterval(this.interval),this.interval=null,window.isAnyResizeEventInited=!1,e=this,n=this.allowedProtos,o=[],t=r=0,i=n.length;i>r;t=++r)s=n[t],null!=s.prototype&&o.push(function(t){var e;return e=t.prototype.addEventListener||t.prototype.attachEvent,t.prototype.addEventListener?t.prototype.addEventListener=Element.prototype.addEventListener:t.prototype.attachEvent&&(t.prototype.attachEvent=Element.prototype.attachEvent),t.prototype.removeEventListener?t.prototype.removeEventListener=Element.prototype.removeEventListener:t.prototype.detachEvent?t.prototype.detachEvent=Element.prototype.detachEvent:void 0}(s));return o},t}(),"function"==typeof t&&t.amd?t("any-resize-event",[],function(){return new e}):"object"==typeof r&&"object"==typeof r.exports?r.exports=new e:("undefined"!=typeof window&&null!==window&&(window.AnyResizeEvent=e),"undefined"!=typeof window&&null!==window?window.anyResizeEvent=new e:void 0)}()},{}]},{},[7])(7)});;/**
 * Within Viewport
 *
 * @description Determines whether an element is completely
 *              within the browser viewport
 * @author      Craig Patik, http://patik.com/
 * @version     0.2
 * @date        2011-11-05
 */

;(function(d) {

  /**
   * withinViewport
   * @param {Object} [elem]      DOM Element, required
   * @param {Object} [settings]  optional settings
   * @return {Boolean}           whether elem was completely within the viewport
  */
  var withinViewport = function(elem, settings)
  {
    var result = false;
    try {
      if (typeof elem !== "object" || elem.nodeType !== 1) {
        throw new Error("First argument should be a DOM element");
      }
      var arr, i, side, // Temporary variables for looping
          metadata = elem.getAttribute("data-withinviewport-settings") && window.JSON
                     ? JSON.parse(elem.getAttribute("data-withinviewport-settings"))
                     : {},
          // settings argument may be a simple: string 'top', 'right', etc
          settings = typeof settings === "string" ? {sides: settings} : settings || {},
          // Build configuration from defaults and given settings
          config = {
            sides: settings.sides || metadata.sides || withinViewport.defaults.sides || "all",
            top: settings.top || metadata.top || withinViewport.defaults.top || 0,
            right: settings.right || metadata.right || withinViewport.defaults.right || 0,
            bottom: settings.bottom || metadata.bottom || withinViewport.defaults.bottom || 0,
            left: settings.left || metadata.left || withinViewport.defaults.left || 0
          },
          // Element testing methods
          isWithin = {
            // Element is below the top edge of the viewport
            top: function() {
              return elemOffset[1]
                  >= scrollOffset[1] + config.top;
            },

            // Element is to the left of the right edge of the viewport
            right: function() {
              var width = window.innerWidth || document.documentElement.clientWidth;
              return elemOffset[0] + elem.offsetWidth
                  <= width + scrollOffset[0] - config.right;
            },

            // Element is above the bottom edge of the viewport
            bottom: function() {
              var height = window.innerHeight || document.documentElement.clientHeight;
              return elemOffset[1] + elem.offsetHeight
                  <= height + scrollOffset[1] - config.bottom;
            },

            // Element is to the right of the left edge of the viewport
            left: function() {
              return elemOffset[0]
                  >= scrollOffset[0] + config.left;
            },

            all: function() {
              return (isWithin.top() && isWithin.right() && isWithin.bottom() && isWithin.left());
            }
          },

          // Current offset values
          scrollOffset = (function() {
            var x = d.body.scrollLeft,
                y = d.body.scrollTop;
            if (y == 0) {
              if (window.pageYOffset) {
                y = window.pageYOffset;
              }
              else {
                y = (d.body.parentElement) ? d.body.parentElement.scrollTop : 0;
              }
            }
            if (x == 0) {
              if (window.pageXOffset) {
                x = window.pageXOffset;
              }
              else {
                x = (d.body.parentElement) ? d.body.parentElement.scrollLeft : 0;
              }
            }
            return [x, y];
          })(),

          elemOffset = (function() {
            var el = elem,
                x = 0,
                y = 0;
            if (el.offsetParent) {
              x = el.offsetLeft;
              y = el.offsetTop;
              while (el = el.offsetParent) {
                x += el.offsetLeft;
                y += el.offsetTop;
              }
            }
            return [x, y];
          })();

      // Test element against each side of the viewport that was requested
      arr = config.sides.split(" ");
      i = arr.length;
      while (i--) {
        side = arr[i].toLowerCase();
        if (/top|right|bottom|left|all/.test(side)) {
          if (isWithin[side]()) {
            result = true;
          }
          else {
            // Quit as soon as we find the first failure
            return false;
          }
        }
      }

      return result;
    }
    catch(e) { }
    finally {
      return result;
    }
  };

  // Default settings
  withinViewport.prototype.defaults = {
    sides: "all",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  withinViewport.defaults = withinViewport.prototype.defaults;

  // Make function available globally
  window.withinViewport = withinViewport;

  /**
   * Optional enhancements and shortcuts
   *
   * @description Uncomment or comment these pieces as they apply to your project and coding preferences
   */

  // Shortcut methods for each side of the viewport
  // Ex: withinViewport.top(elem) is the same as withinViewport(elem, "top")
  //
  var arr = ['top', 'right', 'bottom', 'left'];
  var i = arr.length;
  while(i--) {
    var side = arr[i];
    withinViewport.prototype[side] = function(element) {
      return withinViewport(element, side);
    };
    withinViewport[side] = withinViewport.prototype[side];
  }

})(document);
;/**
 * Within Viewport jQuery Plugin
 *
 * @description Companion plugin for withinViewport.js
 * @author      Craig Patik, http://patik.com/
 * @version     0.2
 * @date        2011-11-05
 */

;(function( $, window, undefined ) {

  /**
   * $.withinViewport()
   * @description          jQuery method
   * @param {Object}       [settings] optional settings
   * @return {Collection}  Contains all elements that were within the viewport
  */
  $.fn.withinViewport = function(settings) {
    if (typeof settings === "string") { settings = {sides: settings}; }
    var opts = $.extend({}, settings, {sides: "all"}), elems = [];
    this.each(function() {
      if (withinViewport(this, opts)) {
        elems.push(this);
      }
    });
    return $(elems);
  };

  // Custom selector
  $.extend($.expr[":"], {
    "within-viewport": function(element) {
      return withinViewport(element, "all");
    }
  });

  /**
   * Optional enhancements and shortcuts
   *
   * @description Uncomment or comment these pieces as they apply to your project and coding preferences
   */

  // Shorthand jQuery methods
  //
  $.fn.withinViewportTop = function(settings) {
    if (typeof settings === "string") { settings = {sides: settings}; }
    var opts = $.extend({}, settings, {sides: "top"}), elems = [];
    this.each(function() {
      if (withinViewport(this, opts)) {
        elems.push(this);
      }
    });
    return $(elems);
  };

  $.fn.withinViewportRight = function(settings) {
    if (typeof settings === "string") { settings = {sides: settings}; }
    var opts = $.extend({}, settings, {sides: "right"}), elems = [];
    this.each(function() {
      if (withinViewport(this, opts)) {
        elems.push(this);
      }
    });
    return $(elems);
  };

  $.fn.withinViewportBottom = function(settings) {
    if (typeof settings === "string") { settings = {sides: settings}; }
    var opts = $.extend({}, settings, {sides: "bottom"}), elems = [];
    this.each(function() {
      if (withinViewport(this, opts)) {
        elems.push(this);
      }
    });
    return $(elems);
  };

  $.fn.withinViewportLeft = function(settings) {
    if (typeof settings === "string") { settings = {sides: settings}; }
    var opts = $.extend({}, settings, {sides: "left"}), elems = [];
    this.each(function() {
      if (withinViewport(this, opts)) {
        elems.push(this);
      }
    });
    return $(elems);
  };

  // Custom jQuery selectors
  //
  $.extend($.expr[":"], {
    "within-viewport-top": function(element) {
      return withinViewport(element, "top");
    },
    "within-viewport-right": function(element) {
      return withinViewport(element, "right");
    },
    "within-viewport-bottom": function(element) {
      return withinViewport(element, "bottom");
    },
    "within-viewport-left": function(element) {
      return withinViewport(element, "left");
    }
    //,
    // "within-viewport-top-left-45": function(element) {
    //   return withinViewport(element, {sides:'top left', top: 45, left: 45});
    // }
  });

})(jQuery, window);
;if ( $('body').attr('id') === 'home' ){
	//Twitter Call
	// $(document).ready(function() {
		// $.getJSON('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=manikrathee&count=1', function(data) {

		// 	var html = "<div>";
		// 	var twitter = $('.twitter');

		// 	for(var i=0; i<data.length; i++) {

		// 		// create URLs and link @Mentions
		// 		var status = data[i].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(url) {
		// 		      return '<a href="'+url+'">'+url+'</a>';
		// 		    }).replace(/\B@([_a-z0-9]+)/ig, function(reply) {
		// 		      return  reply.charAt(0)+'<a href="http://twitter.com/'+reply.substring(1)+'">'+reply.substring(1)+'</a>';
		// 		    });

		// 		// set relative time - function source by Alex Hedley
		// 		var time_value = data[i].created_at
		//         var relative = '';

		// 		function relative_time(time_value) {
		// 	        var values = time_value.split(" ");
		// 	        time_value = values[1] + " " + values[2] + ", " + values[5] + " " + values[3];
		// 	        var parsed_date = Date.parse(time_value);
		// 	        var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
		// 	        var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);
		// 	        delta = delta + (relative_to.getTimezoneOffset() * 60);

		// 	        if (delta < 60) {
		// 	            relative = 'a minute ago';
		// 	        } else if (delta < 120) {
		// 	            relative = 'couple of minutes ago';
		// 	        } else if (delta < (45 * 60)) {
		// 	            relative = (parseInt(delta / 60)).toString() + ' minutes ago';
		// 	        } else if (delta < (90 * 60)) {
		// 	            relative = 'an hour ago';
		// 	        } else if (delta < (24 * 60 * 60)) {
		// 	            relative = '' + (parseInt(delta / 3600)).toString() + ' hours ago';
		// 	        } else if (delta < (48 * 60 * 60)) {
		// 	            relative = '1 day ago';
		// 	        } else {
		// 	            relative = (parseInt(delta / 86400)).toString() + ' days ago';
		// 	        }

		// 	        return relative;
		// 	    }
		// 		// Run relative time and apply var
		// 		relative_time(time_value);

		// 		// Concatenate tweet and add linked relative time
		//     	html += "<p> " + status + ' - <a href="http://www.twitter.com/manikrathee/statuses/' + data[i].id_str + '" title="View this Tweet on Twitter.com">' + relative + "</a></span></p>";
		// 	}
		// 	html += "</div>"

			// Spit out the final product
	    	// twitter.html(html);
	    	// logofyAPI();
		// });
	// });

	$(document).ready(function() {
		$('#twitter-api-bar').load('OAuth/twitter-auth.php');
		// logofyAPI();
		// centerAPI();
	});
}
;var LastFMStatus = {
  defaultApiKey    : '8268a36df9e8ca5f3bf2dac06f83ef93',
  updateDelay      : 60000,
  apikey           : null,
  username         : null,
  trackInfo        : null,

  init: function(options) {
    options = options || {};
    this.apikey = (options.apikey ? options.apikey:this.defaultApiKey);
    if (options.username) {
      this.username = options.username;
    } else {
      throw 'RuntimeError: No username was specified!';
    }
    this.fetch();
  },

  url: function(callback) {
    return 'http://ws.audioscrobbler.com/2.0?method=user.getrecenttracks&user='+this.username+'&api_key='+this.apikey+'&limit=2&format=json&callback='+callback;
  },

  fetch: function() {
    var oldScript = document.getElementById('lfm_state_json');
    if (oldScript) {
      document.body.removeChild(oldScript);
    }
    var script = document.createElement('script');
    script.src = this.url('LastFMStatus.updateInfo');
    script.id  = 'lfm_state_json'
    document.body.appendChild(script);
  },

  updateInfo: function(data) {
    if (data.error) {
      this.trackInfo = data;
    } else {
      var track = data.recenttracks.track[0];
      var trackInfo = {
        song    : track.name,
        artist  : track.artist["#text"],
        playing : (track["@attr"] ? true : false)
      };
      this.trackInfo = (this.trackInfo || {});

      if (this.songChanged(trackInfo)) {
        this.trackInfo = trackInfo;
      }
    }
    this.updateView();
    setTimeout(function() {LastFMStatus.fetch()}, this.updateDelay);
  },

  songChanged: function(newInfo) {
    return this.trackInfo.song != newInfo.song || this.trackInfo.playing != newInfo.playing;
  },

  updateView: function() {
    var status, message,
    userlink = ' ( <a target="__blank" href="http://www.last.fm/user/' + this.username + '">last.fm</a> )';
    var statusBox = document.getElementById('spotify-api-bar');
    if (!statusBox) {
      var view = document.createElement('div');
      view.id  = "spotify-api-bar";
      document.getElementById('main-footer').appendChild(view);
      statusBox = document.getElementById('spotify-api-bar');
    }
    if (this.trackInfo.error) {
      status   = "Error: ";
      message  = '<strong>'+this.trackInfo.message+'</strong>';
    } else {
      status = this.trackInfo.playing ? 'Now Playing: ' : 'Last Played: ';
      message  = '<a href="http://www.manikrathee.com/spotify/" title="@ManikRathee is listening to "' + this.trackInfo.artist + ' on Spotify" itemprop="url"><div><p>' + this.trackInfo.artist + ' - ' + this.trackInfo.song + '</p></div></a>';
    }

    if ( $('body').attr('id') === 'home' ){
      statusBox.innerHTML = message;
    }

  }
};
;(function(){var e,t;e=function(){function e(e,t){var n,r;this.options={target:"instafeed",get:"popular",resolution:"thumbnail",sortBy:"none",links:!0,mock:!1,useHttp:!1};if(typeof e=="object")for(n in e)r=e[n],this.options[n]=r;this.context=t!=null?t:this,this.unique=this._genKey()}return e.prototype.hasNext=function(){return typeof this.context.nextUrl=="string"&&this.context.nextUrl.length>0},e.prototype.next=function(){return this.hasNext()?this.run(this.context.nextUrl):!1},e.prototype.run=function(t){var n,r,i;if(typeof this.options.clientId!="string"&&typeof this.options.accessToken!="string")throw new Error("Missing clientId or accessToken.");if(typeof this.options.accessToken!="string"&&typeof this.options.clientId!="string")throw new Error("Missing clientId or accessToken.");return this.options.before!=null&&typeof this.options.before=="function"&&this.options.before.call(this),typeof document!="undefined"&&document!==null&&(i=document.createElement("script"),i.id="instafeed-fetcher",i.src=t||this._buildUrl(),n=document.getElementsByTagName("head"),n[0].appendChild(i),r="instafeedCache"+this.unique,window[r]=new e(this.options,this),window[r].unique=this.unique),!0},e.prototype.parse=function(e){var t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S;if(typeof e!="object"){if(this.options.error!=null&&typeof this.options.error=="function")return this.options.error.call(this,"Invalid JSON data"),!1;throw new Error("Invalid JSON response")}if(e.meta.code!==200){if(this.options.error!=null&&typeof this.options.error=="function")return this.options.error.call(this,e.meta.error_message),!1;throw new Error("Error from Instagram: "+e.meta.error_message)}if(e.data.length===0){if(this.options.error!=null&&typeof this.options.error=="function")return this.options.error.call(this,"No images were returned from Instagram"),!1;throw new Error("No images were returned from Instagram")}this.options.success!=null&&typeof this.options.success=="function"&&this.options.success.call(this,e),this.context.nextUrl="",e.pagination!=null&&(this.context.nextUrl=e.pagination.next_url);if(this.options.sortBy!=="none"){this.options.sortBy==="random"?d=["","random"]:d=this.options.sortBy.split("-"),p=d[0]==="least"?!0:!1;switch(d[1]){case"random":e.data.sort(function(){return.5-Math.random()});break;case"recent":e.data=this._sortBy(e.data,"created_time",p);break;case"liked":e.data=this._sortBy(e.data,"likes.count",p);break;case"commented":e.data=this._sortBy(e.data,"comments.count",p);break;default:throw new Error("Invalid option for sortBy: '"+this.options.sortBy+"'.")}}if(typeof document!="undefined"&&document!==null&&this.options.mock===!1){a=e.data,this.options.limit!=null&&a.length>this.options.limit&&(a=a.slice(0,this.options.limit+1||9e9)),n=document.createDocumentFragment(),this.options.filter!=null&&typeof this.options.filter=="function"&&(a=this._filter(a,this.options.filter));if(this.options.template!=null&&typeof this.options.template=="string"){i="",o="",l="",v=document.createElement("div");for(m=0,b=a.length;m<b;m++)s=a[m],u=s.images[this.options.resolution].url,this.options.useHttp||(u=u.replace("http://","//")),o=this._makeTemplate(this.options.template,{model:s,id:s.id,link:s.link,image:u,caption:this._getObjectProperty(s,"caption.text"),likes:s.likes.count,comments:s.comments.count,location:this._getObjectProperty(s,"location.name")}),i+=o;v.innerHTML=i,S=[].slice.call(v.childNodes);for(g=0,w=S.length;g<w;g++)h=S[g],n.appendChild(h)}else for(y=0,E=a.length;y<E;y++)s=a[y],f=document.createElement("img"),u=s.images[this.options.resolution].url,this.options.useHttp||(u=u.replace("http://","//")),f.src=u,this.options.links===!0?(t=document.createElement("a"),t.href=s.link,t.appendChild(f),n.appendChild(t)):n.appendChild(f);document.getElementById(this.options.target).appendChild(n),r=document.getElementsByTagName("head")[0],r.removeChild(document.getElementById("instafeed-fetcher")),c="instafeedCache"+this.unique,window[c]=void 0;try{delete window[c]}catch(x){}}return this.options.after!=null&&typeof this.options.after=="function"&&this.options.after.call(this),!0},e.prototype._buildUrl=function(){var e,t,n;e="https://api.instagram.com/v1";switch(this.options.get){case"popular":t="media/popular";break;case"tagged":if(typeof this.options.tagName!="string")throw new Error("No tag name specified. Use the 'tagName' option.");t="tags/"+this.options.tagName+"/media/recent";break;case"location":if(typeof this.options.locationId!="number")throw new Error("No location specified. Use the 'locationId' option.");t="locations/"+this.options.locationId+"/media/recent";break;case"user":if(typeof this.options.userId!="number")throw new Error("No user specified. Use the 'userId' option.");if(typeof this.options.accessToken!="string")throw new Error("No access token. Use the 'accessToken' option.");t="users/"+this.options.userId+"/media/recent";break;default:throw new Error("Invalid option for get: '"+this.options.get+"'.")}return n=""+e+"/"+t,this.options.accessToken!=null?n+="?access_token="+this.options.accessToken:n+="?client_id="+this.options.clientId,this.options.limit!=null&&(n+="&count="+this.options.limit),n+="&callback=instafeedCache"+this.unique+".parse",n},e.prototype._genKey=function(){var e;return e=function(){return((1+Math.random())*65536|0).toString(16).substring(1)},""+e()+e()+e()+e()},e.prototype._makeTemplate=function(e,t){var n,r,i,s,o;r=/(?:\{{2})([\w\[\]\.]+)(?:\}{2})/,n=e;while(r.test(n))i=n.match(r)[1],s=(o=this._getObjectProperty(t,i))!=null?o:"",n=n.replace(r,""+s);return n},e.prototype._getObjectProperty=function(e,t){var n,r;t=t.replace(/\[(\w+)\]/g,".$1"),r=t.split(".");while(r.length){n=r.shift();if(!(e!=null&&n in e))return null;e=e[n]}return e},e.prototype._sortBy=function(e,t,n){var r;return r=function(e,r){var i,s;return i=this._getObjectProperty(e,t),s=this._getObjectProperty(r,t),n?i>s?1:-1:i<s?1:-1},e.sort(r.bind(this)),e},e.prototype._filter=function(e,t){var n,r,i,s,o;n=[],i=function(e){if(t(e))return n.push(e)};for(s=0,o=e.length;s<o;s++)r=e[s],i(r);return n},e}(),t=typeof exports!="undefined"&&exports!==null?exports:window,t.Instafeed=e}).call(this);

if ( $('body').attr('id') === 'home' ){
  var instagramActive = false;

  var feed = new Instafeed({
    get: 'user',
    userId: 262351,
    clientId: 'f7f319ceb411486593db148972918108',
    accessToken: '262351.467ede5.32fb0226aa3c4ef88bcbbaa67ea2ded5',
    target: 'instagram',
    limit: 1,
    template: '<div class="photo" data="{{id}}"><p><a id="instagram-link" href="{{link}}" title="View my latest Instagram Shot">{{caption}}</a></p></div>'
 });

 // feed.run();

  // Set instagramActive to true so logofyAPI and activate API can fire
  // instagramActive = true;
}

// To Do - add an instagram phone hook to launch the app on mobile:
// This does an alert-style redirect to the app -- make sure the use-case is stable
// @"instagram://user?username=manikrathee
// https://instagram.com/developer/iphone-hooks/



;/*
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2013 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.8.4
 *
 */
(function($, window, document, undefined) {
    var $window = $(window);

    $.fn.lazyload = function(options) {
        var elements = this;
        var $container;
        var settings = {
            threshold       : 0,
            failure_limit   : 0,
            event           : "scroll",
            effect          : "show",
            container       : window,
            data_attribute  : "original",
            skip_invisible  : true,
            appear          : null,
            load            : null
        };

        function update() {
            var counter = 0;

            elements.each(function() {
                var $this = $(this);
                if (settings.skip_invisible && !$this.is(":visible")) {
                    return;
                }
                if ($.abovethetop(this, settings) ||
                    $.leftofbegin(this, settings)) {
                        /* Nothing. */
                } else if (!$.belowthefold(this, settings) &&
                    !$.rightoffold(this, settings)) {
                        $this.trigger("appear");
                        /* if we found an image we'll load, reset the counter */
                        counter = 0;
                } else {
                    if (++counter > settings.failure_limit) {
                        return false;
                    }
                }
            });

        }

        if(options) {
            /* Maintain BC for a couple of versions. */
            if (undefined !== options.failurelimit) {
                options.failure_limit = options.failurelimit;
                delete options.failurelimit;
            }
            if (undefined !== options.effectspeed) {
                options.effect_speed = options.effectspeed;
                delete options.effectspeed;
            }

            $.extend(settings, options);
        }

        /* Cache container as jQuery as object. */
        $container = (settings.container === undefined ||
                      settings.container === window) ? $window : $(settings.container);

        /* Fire one scroll event per scroll. Not one scroll event per image. */
        if (0 === settings.event.indexOf("scroll")) {
            $container.bind(settings.event, function(event) {
                return update();
            });
        }

        this.each(function() {
            var self = this;
            var $self = $(self);

            self.loaded = false;

            /* When appear is triggered load original image. */
            $self.one("appear", function() {
                if (!this.loaded) {
                    if (settings.appear) {
                        var elements_left = elements.length;
                        settings.appear.call(self, elements_left, settings);
                    }
                    $("<img />")
                        .bind("load", function() {
                            $self
                                .hide()
                                .attr("src", $self.data(settings.data_attribute))
                                [settings.effect](settings.effect_speed);
                            self.loaded = true;

                            /* Remove image from array so it is not looped next time. */
                            var temp = $.grep(elements, function(element) {
                                return !element.loaded;
                            });
                            elements = $(temp);

                            if (settings.load) {
                                var elements_left = elements.length;
                                settings.load.call(self, elements_left, settings);
                            }
                        })
                        .attr("src", $self.data(settings.data_attribute));
                }
            });

            /* When wanted event is triggered load original image */
            /* by triggering appear.                              */
            if (0 !== settings.event.indexOf("scroll")) {
                $self.bind(settings.event, function(event) {
                    if (!self.loaded) {
                        $self.trigger("appear");
                    }
                });
            }
        });

        /* Check if something appears when window is resized. */
        $window.bind("resize", function(event) {
            update();
        });

        /* With IOS5 force loading images when navigating with back button. */
        /* Non optimal workaround. */
        if ((/iphone|ipod|ipad.*os 5/gi).test(navigator.appVersion)) {
            $window.bind("pageshow", function(event) {
                if (event.originalEvent.persisted) {
                    elements.each(function() {
                        $(this).trigger("appear");
                    });
                }
            });
        }

        /* Force initial check if images should appear. */
        $(window).load(function() {
            update();
        });

        return this;
    };

    /* Convenience methods in jQuery namespace.           */
    /* Use as  $.belowthefold(element, {threshold : 100, container : window}) */

    $.belowthefold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.height() + $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top + $(settings.container).height();
        }

        return fold <= $(element).offset().top - settings.threshold;
    };

    $.rightoffold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.width() + $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left + $(settings.container).width();
        }

        return fold <= $(element).offset().left - settings.threshold;
    };

    $.abovethetop = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top;
        }

        return fold >= $(element).offset().top + settings.threshold  + $(element).height();
    };

    $.leftofbegin = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left;
        }

        return fold >= $(element).offset().left + settings.threshold + $(element).width();
    };

    $.inviewport = function(element, settings) {
         return !$.rightoffold(element, settings) && !$.leftofbegin(element, settings) &&
                !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
     };

    /* Custom selectors for your convenience.   */
    /* Use as $("img:below-the-fold").something() or */
    /* $("img").filter(":below-the-fold").something() which is faster */

    $.extend($.expr[':'], {
        "below-the-fold" : function(a) { return $.belowthefold(a, {threshold : 0}); },
        "above-the-top"  : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-screen": function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-screen" : function(a) { return !$.rightoffold(a, {threshold : 0}); },
        "in-viewport"    : function(a) { return $.inviewport(a, {threshold : 0}); },
        /* Maintain BC for couple of versions. */
        "above-the-fold" : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-fold"  : function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-fold"   : function(a) { return !$.rightoffold(a, {threshold : 0}); }
    });

})(jQuery, window, document);;var Konami = function (callback) {
  var konami = {
    addEvent: function (obj, type, fn, ref_obj) {
      if (obj.addEventListener)
        obj.addEventListener(type, fn, false);
      else if (obj.attachEvent) {
        // IE
        obj["e" + type + fn] = fn;
        obj[type + fn] = function () {
          obj["e" + type + fn](window.event, ref_obj);
        }
        obj.attachEvent("on" + type, obj[type + fn]);
      }
    },
    input: "",
    pattern: "38384040373937396665",
    load: function (link) {
      this.addEvent(document, "keydown", function (e, ref_obj) {
        if (ref_obj) konami = ref_obj; // IE
        konami.input += e ? e.keyCode : event.keyCode;
        if (konami.input.length > konami.pattern.length)
          konami.input = konami.input.substr((konami.input.length - konami.pattern.length));
        if (konami.input == konami.pattern) {
          konami.code(link);
          konami.input = "";
          e.preventDefault();
          return false;
        }
      }, this);
      this.iphone.load(link);
    },
    code: function (link) {
      window.location = link
    },
    iphone: {
      start_x: 0,
      start_y: 0,
      stop_x: 0,
      stop_y: 0,
      tap: false,
      capture: false,
      orig_keys: "",
      keys: ["UP", "UP", "DOWN", "DOWN", "LEFT", "RIGHT", "LEFT", "RIGHT", "TAP", "TAP"],
      code: function (link) {
        konami.code(link);
      },
      load: function (link) {
        this.orig_keys = this.keys;
        konami.addEvent(document, "touchmove", function (e) {
          if (e.touches.length == 1 && konami.iphone.capture == true) {
            var touch = e.touches[0];
            konami.iphone.stop_x = touch.pageX;
            konami.iphone.stop_y = touch.pageY;
            konami.iphone.tap = false;
            konami.iphone.capture = false;
            konami.iphone.check_direction();
          }
        });
        konami.addEvent(document, "touchend", function (evt) {
          if (konami.iphone.tap == true) konami.iphone.check_direction(link);
        }, false);
        konami.addEvent(document, "touchstart", function (evt) {
          konami.iphone.start_x = evt.changedTouches[0].pageX;
          konami.iphone.start_y = evt.changedTouches[0].pageY;
          konami.iphone.tap = true;
          konami.iphone.capture = true;
        });
      },
      check_direction: function (link) {
        x_magnitude = Math.abs(this.start_x - this.stop_x);
        y_magnitude = Math.abs(this.start_y - this.stop_y);
        x = ((this.start_x - this.stop_x) < 0) ? "RIGHT" : "LEFT";
        y = ((this.start_y - this.stop_y) < 0) ? "DOWN" : "UP";
        result = (x_magnitude > y_magnitude) ? x : y;
        result = (this.tap == true) ? "TAP" : result;

        if (result == this.keys[0]) this.keys = this.keys.slice(1, this.keys.length);
        if (this.keys.length == 0) {
          this.keys = this.orig_keys;
          this.code(link);
        }
      }
    }
  }

  typeof callback === "string" && konami.load(callback);
  if (typeof callback === "function") {
    konami.code = callback;
    konami.load();
  }

  return konami;
};
;/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
/*! Gecko-Picture - v1.0
 * https://github.com/scottjehl/picturefill/tree/3.0/src/plugins/gecko-picture
 * Firefox's early picture implementation (prior to FF41) is static and does
 * not react to viewport changes. This tiny module fixes this.
 */
(function(window) {
	/*jshint eqnull:true */
	var ua = navigator.userAgent;

	if ( window.HTMLPictureElement && ((/ecko/).test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 < 45) ) {
		addEventListener("resize", (function() {
			var timer;

			var dummySrc = document.createElement("source");

			var fixRespimg = function(img) {
				var source, sizes;
				var picture = img.parentNode;

				if (picture.nodeName.toUpperCase() === "PICTURE") {
					source = dummySrc.cloneNode();

					picture.insertBefore(source, picture.firstElementChild);
					setTimeout(function() {
						picture.removeChild(source);
					});
				} else if (!img._pfLastSize || img.offsetWidth > img._pfLastSize) {
					img._pfLastSize = img.offsetWidth;
					sizes = img.sizes;
					img.sizes += ",100vw";
					setTimeout(function() {
						img.sizes = sizes;
					});
				}
			};

			var findPictureImgs = function() {
				var i;
				var imgs = document.querySelectorAll("picture > img, img[srcset][sizes]");
				for (i = 0; i < imgs.length; i++) {
					fixRespimg(imgs[i]);
				}
			};
			var onResize = function() {
				clearTimeout(timer);
				timer = setTimeout(findPictureImgs, 99);
			};
			var mq = window.matchMedia && matchMedia("(orientation: landscape)");
			var init = function() {
				onResize();

				if (mq && mq.addListener) {
					mq.addListener(onResize);
				}
			};

			dummySrc.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

			if (/^[c|i]|d$/.test(document.readyState || "")) {
				init();
			} else {
				document.addEventListener("DOMContentLoaded", init);
			}

			return onResize;
		})());
	}
})(window);

/*! Picturefill - v3.0.2
 * http://scottjehl.github.io/picturefill
 * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt;
 *  License: MIT
 */

(function( window, document, undefined ) {
	// Enable strict mode
	"use strict";

	// HTML shim|v it for old IE (IE9 will still need the HTML video tag workaround)
	document.createElement( "picture" );

	var warn, eminpx, alwaysCheckWDescriptor, evalId;
	// local object for method references and testing exposure
	var pf = {};
	var isSupportTestReady = false;
	var noop = function() {};
	var image = document.createElement( "img" );
	var getImgAttr = image.getAttribute;
	var setImgAttr = image.setAttribute;
	var removeImgAttr = image.removeAttribute;
	var docElem = document.documentElement;
	var types = {};
	var cfg = {
		//resource selection:
		algorithm: ""
	};
	var srcAttr = "data-pfsrc";
	var srcsetAttr = srcAttr + "set";
	// ua sniffing is done for undetectable img loading features,
	// to do some non crucial perf optimizations
	var ua = navigator.userAgent;
	var supportAbort = (/rident/).test(ua) || ((/ecko/).test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 > 35 );
	var curSrcProp = "currentSrc";
	var regWDesc = /\s+\+?\d+(e\d+)?w/;
	var regSize = /(\([^)]+\))?\s*(.+)/;
	var setOptions = window.picturefillCFG;
	/**
	 * Shortcut property for https://w3c.github.io/webappsec/specs/mixedcontent/#restricts-mixed-content ( for easy overriding in tests )
	 */
	// baseStyle also used by getEmValue (i.e.: width: 1em is important)
	var baseStyle = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)";
	var fsCss = "font-size:100%!important;";
	var isVwDirty = true;

	var cssCache = {};
	var sizeLengthCache = {};
	var DPR = window.devicePixelRatio;
	var units = {
		px: 1,
		"in": 96
	};
	var anchor = document.createElement( "a" );
	/**
	 * alreadyRun flag used for setOptions. is it true setOptions will reevaluate
	 * @type {boolean}
	 */
	var alreadyRun = false;

	// Reusable, non-"g" Regexes

	// (Don't use \s, to avoid matching non-breaking space.)
	var regexLeadingSpaces = /^[ \t\n\r\u000c]+/,
	    regexLeadingCommasOrSpaces = /^[, \t\n\r\u000c]+/,
	    regexLeadingNotSpaces = /^[^ \t\n\r\u000c]+/,
	    regexTrailingCommas = /[,]+$/,
	    regexNonNegativeInteger = /^\d+$/,

	    // ( Positive or negative or unsigned integers or decimals, without or without exponents.
	    // Must include at least one digit.
	    // According to spec tests any decimal point must be followed by a digit.
	    // No leading plus sign is allowed.)
	    // https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number
	    regexFloatingPoint = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;

	var on = function(obj, evt, fn, capture) {
		if ( obj.addEventListener ) {
			obj.addEventListener(evt, fn, capture || false);
		} else if ( obj.attachEvent ) {
			obj.attachEvent( "on" + evt, fn);
		}
	};

	/**
	 * simple memoize function:
	 */

	var memoize = function(fn) {
		var cache = {};
		return function(input) {
			if ( !(input in cache) ) {
				cache[ input ] = fn(input);
			}
			return cache[ input ];
		};
	};

	// UTILITY FUNCTIONS

	// Manual is faster than RegEx
	// http://jsperf.com/whitespace-character/5
	function isSpace(c) {
		return (c === "\u0020" || // space
		        c === "\u0009" || // horizontal tab
		        c === "\u000A" || // new line
		        c === "\u000C" || // form feed
		        c === "\u000D");  // carriage return
	}

	/**
	 * gets a mediaquery and returns a boolean or gets a css length and returns a number
	 * @param css mediaqueries or css length
	 * @returns {boolean|number}
	 *
	 * based on: https://gist.github.com/jonathantneal/db4f77009b155f083738
	 */
	var evalCSS = (function() {

		var regLength = /^([\d\.]+)(em|vw|px)$/;
		var replace = function() {
			var args = arguments, index = 0, string = args[0];
			while (++index in args) {
				string = string.replace(args[index], args[++index]);
			}
			return string;
		};

		var buildStr = memoize(function(css) {

			return "return " + replace((css || "").toLowerCase(),
				// interpret `and`
				/\band\b/g, "&&",

				// interpret `,`
				/,/g, "||",

				// interpret `min-` as >=
				/min-([a-z-\s]+):/g, "e.$1>=",

				// interpret `max-` as <=
				/max-([a-z-\s]+):/g, "e.$1<=",

				//calc value
				/calc([^)]+)/g, "($1)",

				// interpret css values
				/(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)",
				//make eval less evil
				/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/ig, ""
			) + ";";
		});

		return function(css, length) {
			var parsedLength;
			if (!(css in cssCache)) {
				cssCache[css] = false;
				if (length && (parsedLength = css.match( regLength ))) {
					cssCache[css] = parsedLength[ 1 ] * units[parsedLength[ 2 ]];
				} else {
					/*jshint evil:true */
					try{
						cssCache[css] = new Function("e", buildStr(css))(units);
					} catch(e) {}
					/*jshint evil:false */
				}
			}
			return cssCache[css];
		};
	})();

	var setResolution = function( candidate, sizesattr ) {
		if ( candidate.w ) { // h = means height: || descriptor.type === 'h' do not handle yet...
			candidate.cWidth = pf.calcListLength( sizesattr || "100vw" );
			candidate.res = candidate.w / candidate.cWidth ;
		} else {
			candidate.res = candidate.d;
		}
		return candidate;
	};

	/**
	 *
	 * @param opt
	 */
	var picturefill = function( opt ) {

		if (!isSupportTestReady) {return;}

		var elements, i, plen;

		var options = opt || {};

		if ( options.elements && options.elements.nodeType === 1 ) {
			if ( options.elements.nodeName.toUpperCase() === "IMG" ) {
				options.elements =  [ options.elements ];
			} else {
				options.context = options.elements;
				options.elements =  null;
			}
		}

		elements = options.elements || pf.qsa( (options.context || document), ( options.reevaluate || options.reselect ) ? pf.sel : pf.selShort );

		if ( (plen = elements.length) ) {

			pf.setupRun( options );
			alreadyRun = true;

			// Loop through all elements
			for ( i = 0; i < plen; i++ ) {
				pf.fillImg(elements[ i ], options);
			}

			pf.teardownRun( options );
		}
	};

	/**
	 * outputs a warning for the developer
	 * @param {message}
	 * @type {Function}
	 */
	warn = ( window.console && console.warn ) ?
		function( message ) {
			console.warn( message );
		} :
		noop
	;

	if ( !(curSrcProp in image) ) {
		curSrcProp = "src";
	}

	// Add support for standard mime types.
	types[ "image/jpeg" ] = true;
	types[ "image/gif" ] = true;
	types[ "image/png" ] = true;

	function detectTypeSupport( type, typeUri ) {
		// based on Modernizr's lossless img-webp test
		// note: asynchronous
		var image = new window.Image();
		image.onerror = function() {
			types[ type ] = false;
			picturefill();
		};
		image.onload = function() {
			types[ type ] = image.width === 1;
			picturefill();
		};
		image.src = typeUri;
		return "pending";
	}

	// test svg support
	types[ "image/svg+xml" ] = document.implementation.hasFeature( "http://www.w3.org/TR/SVG11/feature#Image", "1.1" );

	/**
	 * updates the internal vW property with the current viewport width in px
	 */
	function updateMetrics() {

		isVwDirty = false;
		DPR = window.devicePixelRatio;
		cssCache = {};
		sizeLengthCache = {};

		pf.DPR = DPR || 1;

		units.width = Math.max(window.innerWidth || 0, docElem.clientWidth);
		units.height = Math.max(window.innerHeight || 0, docElem.clientHeight);

		units.vw = units.width / 100;
		units.vh = units.height / 100;

		evalId = [ units.height, units.width, DPR ].join("-");

		units.em = pf.getEmValue();
		units.rem = units.em;
	}

	function chooseLowRes( lowerValue, higherValue, dprValue, isCached ) {
		var bonusFactor, tooMuch, bonus, meanDensity;

		//experimental
		if (cfg.algorithm === "saveData" ){
			if ( lowerValue > 2.7 ) {
				meanDensity = dprValue + 1;
			} else {
				tooMuch = higherValue - dprValue;
				bonusFactor = Math.pow(lowerValue - 0.6, 1.5);

				bonus = tooMuch * bonusFactor;

				if (isCached) {
					bonus += 0.1 * bonusFactor;
				}

				meanDensity = lowerValue + bonus;
			}
		} else {
			meanDensity = (dprValue > 1) ?
				Math.sqrt(lowerValue * higherValue) :
				lowerValue;
		}

		return meanDensity > dprValue;
	}

	function applyBestCandidate( img ) {
		var srcSetCandidates;
		var matchingSet = pf.getSet( img );
		var evaluated = false;
		if ( matchingSet !== "pending" ) {
			evaluated = evalId;
			if ( matchingSet ) {
				srcSetCandidates = pf.setRes( matchingSet );
				pf.applySetCandidate( srcSetCandidates, img );
			}
		}
		img[ pf.ns ].evaled = evaluated;
	}

	function ascendingSort( a, b ) {
		return a.res - b.res;
	}

	function setSrcToCur( img, src, set ) {
		var candidate;
		if ( !set && src ) {
			set = img[ pf.ns ].sets;
			set = set && set[set.length - 1];
		}

		candidate = getCandidateForSrc(src, set);

		if ( candidate ) {
			src = pf.makeUrl(src);
			img[ pf.ns ].curSrc = src;
			img[ pf.ns ].curCan = candidate;

			if ( !candidate.res ) {
				setResolution( candidate, candidate.set.sizes );
			}
		}
		return candidate;
	}

	function getCandidateForSrc( src, set ) {
		var i, candidate, candidates;
		if ( src && set ) {
			candidates = pf.parseSet( set );
			src = pf.makeUrl(src);
			for ( i = 0; i < candidates.length; i++ ) {
				if ( src === pf.makeUrl(candidates[ i ].url) ) {
					candidate = candidates[ i ];
					break;
				}
			}
		}
		return candidate;
	}

	function getAllSourceElements( picture, candidates ) {
		var i, len, source, srcset;

		// SPEC mismatch intended for size and perf:
		// actually only source elements preceding the img should be used
		// also note: don't use qsa here, because IE8 sometimes doesn't like source as the key part in a selector
		var sources = picture.getElementsByTagName( "source" );

		for ( i = 0, len = sources.length; i < len; i++ ) {
			source = sources[ i ];
			source[ pf.ns ] = true;
			srcset = source.getAttribute( "srcset" );

			// if source does not have a srcset attribute, skip
			if ( srcset ) {
				candidates.push( {
					srcset: srcset,
					media: source.getAttribute( "media" ),
					type: source.getAttribute( "type" ),
					sizes: source.getAttribute( "sizes" )
				} );
			}
		}
	}

	/**
	 * Srcset Parser
	 * By Alex Bell |  MIT License
	 *
	 * @returns Array [{url: _, d: _, w: _, h:_, set:_(????)}, ...]
	 *
	 * Based super duper closely on the reference algorithm at:
	 * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-srcset-attribute
	 */

	// 1. Let input be the value passed to this algorithm.
	// (TO-DO : Explain what "set" argument is here. Maybe choose a more
	// descriptive & more searchable name.  Since passing the "set" in really has
	// nothing to do with parsing proper, I would prefer this assignment eventually
	// go in an external fn.)
	function parseSrcset(input, set) {

		function collectCharacters(regEx) {
			var chars,
			    match = regEx.exec(input.substring(pos));
			if (match) {
				chars = match[ 0 ];
				pos += chars.length;
				return chars;
			}
		}

		var inputLength = input.length,
		    url,
		    descriptors,
		    currentDescriptor,
		    state,
		    c,

		    // 2. Let position be a pointer into input, initially pointing at the start
		    //    of the string.
		    pos = 0,

		    // 3. Let candidates be an initially empty source set.
		    candidates = [];

		/**
		* Adds descriptor properties to a candidate, pushes to the candidates array
		* @return undefined
		*/
		// (Declared outside of the while loop so that it's only created once.
		// (This fn is defined before it is used, in order to pass JSHINT.
		// Unfortunately this breaks the sequencing of the spec comments. :/ )
		function parseDescriptors() {

			// 9. Descriptor parser: Let error be no.
			var pError = false,

			// 10. Let width be absent.
			// 11. Let density be absent.
			// 12. Let future-compat-h be absent. (We're implementing it now as h)
			    w, d, h, i,
			    candidate = {},
			    desc, lastChar, value, intVal, floatVal;

			// 13. For each descriptor in descriptors, run the appropriate set of steps
			// from the following list:
			for (i = 0 ; i < descriptors.length; i++) {
				desc = descriptors[ i ];

				lastChar = desc[ desc.length - 1 ];
				value = desc.substring(0, desc.length - 1);
				intVal = parseInt(value, 10);
				floatVal = parseFloat(value);

				// If the descriptor consists of a valid non-negative integer followed by
				// a U+0077 LATIN SMALL LETTER W character
				if (regexNonNegativeInteger.test(value) && (lastChar === "w")) {

					// If width and density are not both absent, then let error be yes.
					if (w || d) {pError = true;}

					// Apply the rules for parsing non-negative integers to the descriptor.
					// If the result is zero, let error be yes.
					// Otherwise, let width be the result.
					if (intVal === 0) {pError = true;} else {w = intVal;}

				// If the descriptor consists of a valid floating-point number followed by
				// a U+0078 LATIN SMALL LETTER X character
				} else if (regexFloatingPoint.test(value) && (lastChar === "x")) {

					// If width, density and future-compat-h are not all absent, then let error
					// be yes.
					if (w || d || h) {pError = true;}

					// Apply the rules for parsing floating-point number values to the descriptor.
					// If the result is less than zero, let error be yes. Otherwise, let density
					// be the result.
					if (floatVal < 0) {pError = true;} else {d = floatVal;}

				// If the descriptor consists of a valid non-negative integer followed by
				// a U+0068 LATIN SMALL LETTER H character
				} else if (regexNonNegativeInteger.test(value) && (lastChar === "h")) {

					// If height and density are not both absent, then let error be yes.
					if (h || d) {pError = true;}

					// Apply the rules for parsing non-negative integers to the descriptor.
					// If the result is zero, let error be yes. Otherwise, let future-compat-h
					// be the result.
					if (intVal === 0) {pError = true;} else {h = intVal;}

				// Anything else, Let error be yes.
				} else {pError = true;}
			} // (close step 13 for loop)

			// 15. If error is still no, then append a new image source to candidates whose
			// URL is url, associated with a width width if not absent and a pixel
			// density density if not absent. Otherwise, there is a parse error.
			if (!pError) {
				candidate.url = url;

				if (w) { candidate.w = w;}
				if (d) { candidate.d = d;}
				if (h) { candidate.h = h;}
				if (!h && !d && !w) {candidate.d = 1;}
				if (candidate.d === 1) {set.has1x = true;}
				candidate.set = set;

				candidates.push(candidate);
			}
		} // (close parseDescriptors fn)

		/**
		* Tokenizes descriptor properties prior to parsing
		* Returns undefined.
		* (Again, this fn is defined before it is used, in order to pass JSHINT.
		* Unfortunately this breaks the logical sequencing of the spec comments. :/ )
		*/
		function tokenize() {

			// 8.1. Descriptor tokeniser: Skip whitespace
			collectCharacters(regexLeadingSpaces);

			// 8.2. Let current descriptor be the empty string.
			currentDescriptor = "";

			// 8.3. Let state be in descriptor.
			state = "in descriptor";

			while (true) {

				// 8.4. Let c be the character at position.
				c = input.charAt(pos);

				//  Do the following depending on the value of state.
				//  For the purpose of this step, "EOF" is a special character representing
				//  that position is past the end of input.

				// In descriptor
				if (state === "in descriptor") {
					// Do the following, depending on the value of c:

				  // Space character
				  // If current descriptor is not empty, append current descriptor to
				  // descriptors and let current descriptor be the empty string.
				  // Set state to after descriptor.
					if (isSpace(c)) {
						if (currentDescriptor) {
							descriptors.push(currentDescriptor);
							currentDescriptor = "";
							state = "after descriptor";
						}

					// U+002C COMMA (,)
					// Advance position to the next character in input. If current descriptor
					// is not empty, append current descriptor to descriptors. Jump to the step
					// labeled descriptor parser.
					} else if (c === ",") {
						pos += 1;
						if (currentDescriptor) {
							descriptors.push(currentDescriptor);
						}
						parseDescriptors();
						return;

					// U+0028 LEFT PARENTHESIS (()
					// Append c to current descriptor. Set state to in parens.
					} else if (c === "\u0028") {
						currentDescriptor = currentDescriptor + c;
						state = "in parens";

					// EOF
					// If current descriptor is not empty, append current descriptor to
					// descriptors. Jump to the step labeled descriptor parser.
					} else if (c === "") {
						if (currentDescriptor) {
							descriptors.push(currentDescriptor);
						}
						parseDescriptors();
						return;

					// Anything else
					// Append c to current descriptor.
					} else {
						currentDescriptor = currentDescriptor + c;
					}
				// (end "in descriptor"

				// In parens
				} else if (state === "in parens") {

					// U+0029 RIGHT PARENTHESIS ())
					// Append c to current descriptor. Set state to in descriptor.
					if (c === ")") {
						currentDescriptor = currentDescriptor + c;
						state = "in descriptor";

					// EOF
					// Append current descriptor to descriptors. Jump to the step labeled
					// descriptor parser.
					} else if (c === "") {
						descriptors.push(currentDescriptor);
						parseDescriptors();
						return;

					// Anything else
					// Append c to current descriptor.
					} else {
						currentDescriptor = currentDescriptor + c;
					}

				// After descriptor
				} else if (state === "after descriptor") {

					// Do the following, depending on the value of c:
					// Space character: Stay in this state.
					if (isSpace(c)) {

					// EOF: Jump to the step labeled descriptor parser.
					} else if (c === "") {
						parseDescriptors();
						return;

					// Anything else
					// Set state to in descriptor. Set position to the previous character in input.
					} else {
						state = "in descriptor";
						pos -= 1;

					}
				}

				// Advance position to the next character in input.
				pos += 1;

			// Repeat this step.
			} // (close while true loop)
		}

		// 4. Splitting loop: Collect a sequence of characters that are space
		//    characters or U+002C COMMA characters. If any U+002C COMMA characters
		//    were collected, that is a parse error.
		while (true) {
			collectCharacters(regexLeadingCommasOrSpaces);

			// 5. If position is past the end of input, return candidates and abort these steps.
			if (pos >= inputLength) {
				return candidates; // (we're done, this is the sole return path)
			}

			// 6. Collect a sequence of characters that are not space characters,
			//    and let that be url.
			url = collectCharacters(regexLeadingNotSpaces);

			// 7. Let descriptors be a new empty list.
			descriptors = [];

			// 8. If url ends with a U+002C COMMA character (,), follow these substeps:
			//		(1). Remove all trailing U+002C COMMA characters from url. If this removed
			//         more than one character, that is a parse error.
			if (url.slice(-1) === ",") {
				url = url.replace(regexTrailingCommas, "");
				// (Jump ahead to step 9 to skip tokenization and just push the candidate).
				parseDescriptors();

			//	Otherwise, follow these substeps:
			} else {
				tokenize();
			} // (close else of step 8)

		// 16. Return to the step labeled splitting loop.
		} // (Close of big while loop.)
	}

	/*
	 * Sizes Parser
	 *
	 * By Alex Bell |  MIT License
	 *
	 * Non-strict but accurate and lightweight JS Parser for the string value <img sizes="here">
	 *
	 * Reference algorithm at:
	 * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-sizes-attribute
	 *
	 * Most comments are copied in directly from the spec
	 * (except for comments in parens).
	 *
	 * Grammar is:
	 * <source-size-list> = <source-size># [ , <source-size-value> ]? | <source-size-value>
	 * <source-size> = <media-condition> <source-size-value>
	 * <source-size-value> = <length>
	 * http://www.w3.org/html/wg/drafts/html/master/embedded-content.html#attr-img-sizes
	 *
	 * E.g. "(max-width: 30em) 100vw, (max-width: 50em) 70vw, 100vw"
	 * or "(min-width: 30em), calc(30vw - 15px)" or just "30vw"
	 *
	 * Returns the first valid <css-length> with a media condition that evaluates to true,
	 * or "100vw" if all valid media conditions evaluate to false.
	 *
	 */

	function parseSizes(strValue) {

		// (Percentage CSS lengths are not allowed in this case, to avoid confusion:
		// https://html.spec.whatwg.org/multipage/embedded-content.html#valid-source-size-list
		// CSS allows a single optional plus or minus sign:
		// http://www.w3.org/TR/CSS2/syndata.html#numbers
		// CSS is ASCII case-insensitive:
		// http://www.w3.org/TR/CSS2/syndata.html#characters )
		// Spec allows exponential notation for <number> type:
		// http://dev.w3.org/csswg/css-values/#numbers
		var regexCssLengthWithUnits = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i;

		// (This is a quick and lenient test. Because of optional unlimited-depth internal
		// grouping parens and strict spacing rules, this could get very complicated.)
		var regexCssCalc = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;

		var i;
		var unparsedSizesList;
		var unparsedSizesListLength;
		var unparsedSize;
		var lastComponentValue;
		var size;

		// UTILITY FUNCTIONS

		//  (Toy CSS parser. The goals here are:
		//  1) expansive test coverage without the weight of a full CSS parser.
		//  2) Avoiding regex wherever convenient.
		//  Quick tests: http://jsfiddle.net/gtntL4gr/3/
		//  Returns an array of arrays.)
		function parseComponentValues(str) {
			var chrctr;
			var component = "";
			var componentArray = [];
			var listArray = [];
			var parenDepth = 0;
			var pos = 0;
			var inComment = false;

			function pushComponent() {
				if (component) {
					componentArray.push(component);
					component = "";
				}
			}

			function pushComponentArray() {
				if (componentArray[0]) {
					listArray.push(componentArray);
					componentArray = [];
				}
			}

			// (Loop forwards from the beginning of the string.)
			while (true) {
				chrctr = str.charAt(pos);

				if (chrctr === "") { // ( End of string reached.)
					pushComponent();
					pushComponentArray();
					return listArray;
				} else if (inComment) {
					if ((chrctr === "*") && (str[pos + 1] === "/")) { // (At end of a comment.)
						inComment = false;
						pos += 2;
						pushComponent();
						continue;
					} else {
						pos += 1; // (Skip all characters inside comments.)
						continue;
					}
				} else if (isSpace(chrctr)) {
					// (If previous character in loop was also a space, or if
					// at the beginning of the string, do not add space char to
					// component.)
					if ( (str.charAt(pos - 1) && isSpace( str.charAt(pos - 1) ) ) || !component ) {
						pos += 1;
						continue;
					} else if (parenDepth === 0) {
						pushComponent();
						pos +=1;
						continue;
					} else {
						// (Replace any space character with a plain space for legibility.)
						chrctr = " ";
					}
				} else if (chrctr === "(") {
					parenDepth += 1;
				} else if (chrctr === ")") {
					parenDepth -= 1;
				} else if (chrctr === ",") {
					pushComponent();
					pushComponentArray();
					pos += 1;
					continue;
				} else if ( (chrctr === "/") && (str.charAt(pos + 1) === "*") ) {
					inComment = true;
					pos += 2;
					continue;
				}

				component = component + chrctr;
				pos += 1;
			}
		}

		function isValidNonNegativeSourceSizeValue(s) {
			if (regexCssLengthWithUnits.test(s) && (parseFloat(s) >= 0)) {return true;}
			if (regexCssCalc.test(s)) {return true;}
			// ( http://www.w3.org/TR/CSS2/syndata.html#numbers says:
			// "-0 is equivalent to 0 and is not a negative number." which means that
			// unitless zero and unitless negative zero must be accepted as special cases.)
			if ((s === "0") || (s === "-0") || (s === "+0")) {return true;}
			return false;
		}

		// When asked to parse a sizes attribute from an element, parse a
		// comma-separated list of component values from the value of the element's
		// sizes attribute (or the empty string, if the attribute is absent), and let
		// unparsed sizes list be the result.
		// http://dev.w3.org/csswg/css-syntax/#parse-comma-separated-list-of-component-values

		unparsedSizesList = parseComponentValues(strValue);
		unparsedSizesListLength = unparsedSizesList.length;

		// For each unparsed size in unparsed sizes list:
		for (i = 0; i < unparsedSizesListLength; i++) {
			unparsedSize = unparsedSizesList[i];

			// 1. Remove all consecutive <whitespace-token>s from the end of unparsed size.
			// ( parseComponentValues() already omits spaces outside of parens. )

			// If unparsed size is now empty, that is a parse error; continue to the next
			// iteration of this algorithm.
			// ( parseComponentValues() won't push an empty array. )

			// 2. If the last component value in unparsed size is a valid non-negative
			// <source-size-value>, let size be its value and remove the component value
			// from unparsed size. Any CSS function other than the calc() function is
			// invalid. Otherwise, there is a parse error; continue to the next iteration
			// of this algorithm.
			// http://dev.w3.org/csswg/css-syntax/#parse-component-value
			lastComponentValue = unparsedSize[unparsedSize.length - 1];

			if (isValidNonNegativeSourceSizeValue(lastComponentValue)) {
				size = lastComponentValue;
				unparsedSize.pop();
			} else {
				continue;
			}

			// 3. Remove all consecutive <whitespace-token>s from the end of unparsed
			// size. If unparsed size is now empty, return size and exit this algorithm.
			// If this was not the last item in unparsed sizes list, that is a parse error.
			if (unparsedSize.length === 0) {
				return size;
			}

			// 4. Parse the remaining component values in unparsed size as a
			// <media-condition>. If it does not parse correctly, or it does parse
			// correctly but the <media-condition> evaluates to false, continue to the
			// next iteration of this algorithm.
			// (Parsing all possible compound media conditions in JS is heavy, complicated,
			// and the payoff is unclear. Is there ever an situation where the
			// media condition parses incorrectly but still somehow evaluates to true?
			// Can we just rely on the browser/polyfill to do it?)
			unparsedSize = unparsedSize.join(" ");
			if (!(pf.matchesMedia( unparsedSize ) ) ) {
				continue;
			}

			// 5. Return size and exit this algorithm.
			return size;
		}

		// If the above algorithm exhausts unparsed sizes list without returning a
		// size value, return 100vw.
		return "100vw";
	}

	// namespace
	pf.ns = ("pf" + new Date().getTime()).substr(0, 9);

	// srcset support test
	pf.supSrcset = "srcset" in image;
	pf.supSizes = "sizes" in image;
	pf.supPicture = !!window.HTMLPictureElement;

	// UC browser does claim to support srcset and picture, but not sizes,
	// this extended test reveals the browser does support nothing
	if (pf.supSrcset && pf.supPicture && !pf.supSizes) {
		(function(image2) {
			image.srcset = "data:,a";
			image2.src = "data:,a";
			pf.supSrcset = image.complete === image2.complete;
			pf.supPicture = pf.supSrcset && pf.supPicture;
		})(document.createElement("img"));
	}

	// Safari9 has basic support for sizes, but does't expose the `sizes` idl attribute
	if (pf.supSrcset && !pf.supSizes) {

		(function() {
			var width2 = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==";
			var width1 = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
			var img = document.createElement("img");
			var test = function() {
				var width = img.width;

				if (width === 2) {
					pf.supSizes = true;
				}

				alwaysCheckWDescriptor = pf.supSrcset && !pf.supSizes;

				isSupportTestReady = true;
				// force async
				setTimeout(picturefill);
			};

			img.onload = test;
			img.onerror = test;
			img.setAttribute("sizes", "9px");

			img.srcset = width1 + " 1w," + width2 + " 9w";
			img.src = width1;
		})();

	} else {
		isSupportTestReady = true;
	}

	// using pf.qsa instead of dom traversing does scale much better,
	// especially on sites mixing responsive and non-responsive images
	pf.selShort = "picture>img,img[srcset]";
	pf.sel = pf.selShort;
	pf.cfg = cfg;

	/**
	 * Shortcut property for `devicePixelRatio` ( for easy overriding in tests )
	 */
	pf.DPR = (DPR  || 1 );
	pf.u = units;

	// container of supported mime types that one might need to qualify before using
	pf.types =  types;

	pf.setSize = noop;

	/**
	 * Gets a string and returns the absolute URL
	 * @param src
	 * @returns {String} absolute URL
	 */

	pf.makeUrl = memoize(function(src) {
		anchor.href = src;
		return anchor.href;
	});

	/**
	 * Gets a DOM element or document and a selctor and returns the found matches
	 * Can be extended with jQuery/Sizzle for IE7 support
	 * @param context
	 * @param sel
	 * @returns {NodeList|Array}
	 */
	pf.qsa = function(context, sel) {
		return ( "querySelector" in context ) ? context.querySelectorAll(sel) : [];
	};

	/**
	 * Shortcut method for matchMedia ( for easy overriding in tests )
	 * wether native or pf.mMQ is used will be decided lazy on first call
	 * @returns {boolean}
	 */
	pf.matchesMedia = function() {
		if ( window.matchMedia && (matchMedia( "(min-width: 0.1em)" ) || {}).matches ) {
			pf.matchesMedia = function( media ) {
				return !media || ( matchMedia( media ).matches );
			};
		} else {
			pf.matchesMedia = pf.mMQ;
		}

		return pf.matchesMedia.apply( this, arguments );
	};

	/**
	 * A simplified matchMedia implementation for IE8 and IE9
	 * handles only min-width/max-width with px or em values
	 * @param media
	 * @returns {boolean}
	 */
	pf.mMQ = function( media ) {
		return media ? evalCSS(media) : true;
	};

	/**
	 * Returns the calculated length in css pixel from the given sourceSizeValue
	 * http://dev.w3.org/csswg/css-values-3/#length-value
	 * intended Spec mismatches:
	 * * Does not check for invalid use of CSS functions
	 * * Does handle a computed length of 0 the same as a negative and therefore invalid value
	 * @param sourceSizeValue
	 * @returns {Number}
	 */
	pf.calcLength = function( sourceSizeValue ) {

		var value = evalCSS(sourceSizeValue, true) || false;
		if (value < 0) {
			value = false;
		}

		return value;
	};

	/**
	 * Takes a type string and checks if its supported
	 */

	pf.supportsType = function( type ) {
		return ( type ) ? types[ type ] : true;
	};

	/**
	 * Parses a sourceSize into mediaCondition (media) and sourceSizeValue (length)
	 * @param sourceSizeStr
	 * @returns {*}
	 */
	pf.parseSize = memoize(function( sourceSizeStr ) {
		var match = ( sourceSizeStr || "" ).match(regSize);
		return {
			media: match && match[1],
			length: match && match[2]
		};
	});

	pf.parseSet = function( set ) {
		if ( !set.cands ) {
			set.cands = parseSrcset(set.srcset, set);
		}
		return set.cands;
	};

	/**
	 * returns 1em in css px for html/body default size
	 * function taken from respondjs
	 * @returns {*|number}
	 */
	pf.getEmValue = function() {
		var body;
		if ( !eminpx && (body = document.body) ) {
			var div = document.createElement( "div" ),
				originalHTMLCSS = docElem.style.cssText,
				originalBodyCSS = body.style.cssText;

			div.style.cssText = baseStyle;

			// 1em in a media query is the value of the default font size of the browser
			// reset docElem and body to ensure the correct value is returned
			docElem.style.cssText = fsCss;
			body.style.cssText = fsCss;

			body.appendChild( div );
			eminpx = div.offsetWidth;
			body.removeChild( div );

			//also update eminpx before returning
			eminpx = parseFloat( eminpx, 10 );

			// restore the original values
			docElem.style.cssText = originalHTMLCSS;
			body.style.cssText = originalBodyCSS;

		}
		return eminpx || 16;
	};

	/**
	 * Takes a string of sizes and returns the width in pixels as a number
	 */
	pf.calcListLength = function( sourceSizeListStr ) {
		// Split up source size list, ie ( max-width: 30em ) 100%, ( max-width: 50em ) 50%, 33%
		//
		//                           or (min-width:30em) calc(30% - 15px)
		if ( !(sourceSizeListStr in sizeLengthCache) || cfg.uT ) {
			var winningLength = pf.calcLength( parseSizes( sourceSizeListStr ) );

			sizeLengthCache[ sourceSizeListStr ] = !winningLength ? units.width : winningLength;
		}

		return sizeLengthCache[ sourceSizeListStr ];
	};

	/**
	 * Takes a candidate object with a srcset property in the form of url/
	 * ex. "images/pic-medium.png 1x, images/pic-medium-2x.png 2x" or
	 *     "images/pic-medium.png 400w, images/pic-medium-2x.png 800w" or
	 *     "images/pic-small.png"
	 * Get an array of image candidates in the form of
	 *      {url: "/foo/bar.png", resolution: 1}
	 * where resolution is http://dev.w3.org/csswg/css-values-3/#resolution-value
	 * If sizes is specified, res is calculated
	 */
	pf.setRes = function( set ) {
		var candidates;
		if ( set ) {

			candidates = pf.parseSet( set );

			for ( var i = 0, len = candidates.length; i < len; i++ ) {
				setResolution( candidates[ i ], set.sizes );
			}
		}
		return candidates;
	};

	pf.setRes.res = setResolution;

	pf.applySetCandidate = function( candidates, img ) {
		if ( !candidates.length ) {return;}
		var candidate,
			i,
			j,
			length,
			bestCandidate,
			curSrc,
			curCan,
			candidateSrc,
			abortCurSrc;

		var imageData = img[ pf.ns ];
		var dpr = pf.DPR;

		curSrc = imageData.curSrc || img[curSrcProp];

		curCan = imageData.curCan || setSrcToCur(img, curSrc, candidates[0].set);

		// if we have a current source, we might either become lazy or give this source some advantage
		if ( curCan && curCan.set === candidates[ 0 ].set ) {

			// if browser can abort image request and the image has a higher pixel density than needed
			// and this image isn't downloaded yet, we skip next part and try to save bandwidth
			abortCurSrc = (supportAbort && !img.complete && curCan.res - 0.1 > dpr);

			if ( !abortCurSrc ) {
				curCan.cached = true;

				// if current candidate is "best", "better" or "okay",
				// set it to bestCandidate
				if ( curCan.res >= dpr ) {
					bestCandidate = curCan;
				}
			}
		}

		if ( !bestCandidate ) {

			candidates.sort( ascendingSort );

			length = candidates.length;
			bestCandidate = candidates[ length - 1 ];

			for ( i = 0; i < length; i++ ) {
				candidate = candidates[ i ];
				if ( candidate.res >= dpr ) {
					j = i - 1;

					// we have found the perfect candidate,
					// but let's improve this a little bit with some assumptions ;-)
					if (candidates[ j ] &&
						(abortCurSrc || curSrc !== pf.makeUrl( candidate.url )) &&
						chooseLowRes(candidates[ j ].res, candidate.res, dpr, candidates[ j ].cached)) {

						bestCandidate = candidates[ j ];

					} else {
						bestCandidate = candidate;
					}
					break;
				}
			}
		}

		if ( bestCandidate ) {

			candidateSrc = pf.makeUrl( bestCandidate.url );

			imageData.curSrc = candidateSrc;
			imageData.curCan = bestCandidate;

			if ( candidateSrc !== curSrc ) {
				pf.setSrc( img, bestCandidate );
			}
			pf.setSize( img );
		}
	};

	pf.setSrc = function( img, bestCandidate ) {
		var origWidth;
		img.src = bestCandidate.url;

		// although this is a specific Safari issue, we don't want to take too much different code paths
		if ( bestCandidate.set.type === "image/svg+xml" ) {
			origWidth = img.style.width;
			img.style.width = (img.offsetWidth + 1) + "px";

			// next line only should trigger a repaint
			// if... is only done to trick dead code removal
			if ( img.offsetWidth + 1 ) {
				img.style.width = origWidth;
			}
		}
	};

	pf.getSet = function( img ) {
		var i, set, supportsType;
		var match = false;
		var sets = img [ pf.ns ].sets;

		for ( i = 0; i < sets.length && !match; i++ ) {
			set = sets[i];

			if ( !set.srcset || !pf.matchesMedia( set.media ) || !(supportsType = pf.supportsType( set.type )) ) {
				continue;
			}

			if ( supportsType === "pending" ) {
				set = supportsType;
			}

			match = set;
			break;
		}

		return match;
	};

	pf.parseSets = function( element, parent, options ) {
		var srcsetAttribute, imageSet, isWDescripor, srcsetParsed;

		var hasPicture = parent && parent.nodeName.toUpperCase() === "PICTURE";
		var imageData = element[ pf.ns ];

		if ( imageData.src === undefined || options.src ) {
			imageData.src = getImgAttr.call( element, "src" );
			if ( imageData.src ) {
				setImgAttr.call( element, srcAttr, imageData.src );
			} else {
				removeImgAttr.call( element, srcAttr );
			}
		}

		if ( imageData.srcset === undefined || options.srcset || !pf.supSrcset || element.srcset ) {
			srcsetAttribute = getImgAttr.call( element, "srcset" );
			imageData.srcset = srcsetAttribute;
			srcsetParsed = true;
		}

		imageData.sets = [];

		if ( hasPicture ) {
			imageData.pic = true;
			getAllSourceElements( parent, imageData.sets );
		}

		if ( imageData.srcset ) {
			imageSet = {
				srcset: imageData.srcset,
				sizes: getImgAttr.call( element, "sizes" )
			};

			imageData.sets.push( imageSet );

			isWDescripor = (alwaysCheckWDescriptor || imageData.src) && regWDesc.test(imageData.srcset || "");

			// add normal src as candidate, if source has no w descriptor
			if ( !isWDescripor && imageData.src && !getCandidateForSrc(imageData.src, imageSet) && !imageSet.has1x ) {
				imageSet.srcset += ", " + imageData.src;
				imageSet.cands.push({
					url: imageData.src,
					d: 1,
					set: imageSet
				});
			}

		} else if ( imageData.src ) {
			imageData.sets.push( {
				srcset: imageData.src,
				sizes: null
			} );
		}

		imageData.curCan = null;
		imageData.curSrc = undefined;

		// if img has picture or the srcset was removed or has a srcset and does not support srcset at all
		// or has a w descriptor (and does not support sizes) set support to false to evaluate
		imageData.supported = !( hasPicture || ( imageSet && !pf.supSrcset ) || (isWDescripor && !pf.supSizes) );

		if ( srcsetParsed && pf.supSrcset && !imageData.supported ) {
			if ( srcsetAttribute ) {
				setImgAttr.call( element, srcsetAttr, srcsetAttribute );
				element.srcset = "";
			} else {
				removeImgAttr.call( element, srcsetAttr );
			}
		}

		if (imageData.supported && !imageData.srcset && ((!imageData.src && element.src) ||  element.src !== pf.makeUrl(imageData.src))) {
			if (imageData.src === null) {
				element.removeAttribute("src");
			} else {
				element.src = imageData.src;
			}
		}

		imageData.parsed = true;
	};

	pf.fillImg = function(element, options) {
		var imageData;
		var extreme = options.reselect || options.reevaluate;

		// expando for caching data on the img
		if ( !element[ pf.ns ] ) {
			element[ pf.ns ] = {};
		}

		imageData = element[ pf.ns ];

		// if the element has already been evaluated, skip it
		// unless `options.reevaluate` is set to true ( this, for example,
		// is set to true when running `picturefill` on `resize` ).
		if ( !extreme && imageData.evaled === evalId ) {
			return;
		}

		if ( !imageData.parsed || options.reevaluate ) {
			pf.parseSets( element, element.parentNode, options );
		}

		if ( !imageData.supported ) {
			applyBestCandidate( element );
		} else {
			imageData.evaled = evalId;
		}
	};

	pf.setupRun = function() {
		if ( !alreadyRun || isVwDirty || (DPR !== window.devicePixelRatio) ) {
			updateMetrics();
		}
	};

	// If picture is supported, well, that's awesome.
	if ( pf.supPicture ) {
		picturefill = noop;
		pf.fillImg = noop;
	} else {

		 // Set up picture polyfill by polling the document
		(function() {
			var isDomReady;
			var regReady = window.attachEvent ? /d$|^c/ : /d$|^c|^i/;

			var run = function() {
				var readyState = document.readyState || "";

				timerId = setTimeout(run, readyState === "loading" ? 200 :  999);
				if ( document.body ) {
					pf.fillImgs();
					isDomReady = isDomReady || regReady.test(readyState);
					if ( isDomReady ) {
						clearTimeout( timerId );
					}

				}
			};

			var timerId = setTimeout(run, document.body ? 9 : 99);

			// Also attach picturefill on resize and readystatechange
			// http://modernjavascript.blogspot.com/2013/08/building-better-debounce.html
			var debounce = function(func, wait) {
				var timeout, timestamp;
				var later = function() {
					var last = (new Date()) - timestamp;

					if (last < wait) {
						timeout = setTimeout(later, wait - last);
					} else {
						timeout = null;
						func();
					}
				};

				return function() {
					timestamp = new Date();

					if (!timeout) {
						timeout = setTimeout(later, wait);
					}
				};
			};
			var lastClientWidth = docElem.clientHeight;
			var onResize = function() {
				isVwDirty = Math.max(window.innerWidth || 0, docElem.clientWidth) !== units.width || docElem.clientHeight !== lastClientWidth;
				lastClientWidth = docElem.clientHeight;
				if ( isVwDirty ) {
					pf.fillImgs();
				}
			};

			on( window, "resize", debounce(onResize, 99 ) );
			on( document, "readystatechange", run );
		})();
	}

	pf.picturefill = picturefill;
	//use this internally for easy monkey patching/performance testing
	pf.fillImgs = picturefill;
	pf.teardownRun = noop;

	/* expose methods for testing */
	picturefill._ = pf;

	window.picturefillCFG = {
		pf: pf,
		push: function(args) {
			var name = args.shift();
			if (typeof pf[name] === "function") {
				pf[name].apply(pf, args);
			} else {
				cfg[name] = args[0];
				if (alreadyRun) {
					pf.fillImgs( { reselect: true } );
				}
			}
		}
	};

	while (setOptions && setOptions.length) {
		window.picturefillCFG.push(setOptions.shift());
	}

	/* expose picturefill */
	window.picturefill = picturefill;

	/* expose picturefill */
	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// CommonJS, just export
		module.exports = picturefill;
	} else if ( typeof define === "function" && define.amd ) {
		// AMD support
		define( "picturefill", function() { return picturefill; } );
	}

	// IE8 evals this sync, so it must be the last thing we do
	if ( !pf.supPicture ) {
		types[ "image/webp" ] = detectTypeSupport("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==" );
	}

} )( window, document );
;/***
 * Twitter JS v1.13.1
 * http://code.google.com/p/twitterjs/
 * Copyright (c) 2009 Remy Sharp / MIT License
 * $Date: 2009-08-25 09:45:35 +0100 (Tue, 25 Aug 2009) $
 */
if(typeof renderTwitters!='function')(function(){var j=(function(){var b=navigator.userAgent.toLowerCase();return{webkit:/(webkit|khtml)/.test(b),opera:/opera/.test(b),msie:/msie/.test(b)&&!(/opera/).test(b),mozilla:/mozilla/.test(b)&&!(/(compatible|webkit)/).test(b)}})();var k=0;var n=[];var o=false;var p=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];window.ify=function(){var c={'"':'&quot;','&':'&amp;','<':'&lt;','>':'&gt;'};return{"link":function(t){return t.replace(/[a-z]+:\/\/[a-z0-9-_]+\.[a-z0-9-_:~%&\?\/.=]+[^:\.,\)\s*$]/ig,function(m){return'<a href="'+m+'">'+((m.length>25)?m.substr(0,24)+'...':m)+'</a>'})},"at":function(t){return t.replace(/(^|[^\w]+)\@([a-zA-Z0-9_]{1,15})/g,function(m,a,b){return a+'@<a href="http://twitter.com/'+b+'">'+b+'</a>'})},"hash":function(t){return t.replace(/(^|[^\w'"]+)\#([a-zA-Z0-9_]+)/g,function(m,a,b){return a+'#<a href="http://search.twitter.com/search?q=%23'+b+'">'+b+'</a>'})},"clean":function(a){return this.hash(this.at(this.link(a)))}}}();window.renderTwitters=function(a,b){function node(e){return document.createElement(e)}function text(t){return document.createTextNode(t)}var c=document.getElementById(b.twitterTarget);var d=null;var f=node('ul'),li,statusSpan,timeSpan,i,max=a.length>b.count?b.count:a.length;for(i=0;i<max&&a[i];i++){d=getTwitterData(a[i]);if(b.ignoreReplies&&a[i].text.substr(0,1)=='@'){max++;continue}li=node('li');if(b.template){li.innerHTML=b.template.replace(/%([a-z_\-\.]*)%/ig,function(m,l){var r=d[l]+""||"";if(l=='text'&&b.enableLinks)r=ify.clean(r);return r})}else{statusSpan=node('span');statusSpan.className='twitterStatus';timeSpan=node('span');timeSpan.className='twitterTime';statusSpan.innerHTML=a[i].text;if(b.enableLinks==true){statusSpan.innerHTML=ify.clean(statusSpan.innerHTML)}timeSpan.innerHTML=relative_time(a[i].created_at);if(b.prefix){var s=node('span');s.className='twitterPrefix';s.innerHTML=b.prefix.replace(/%(.*?)%/g,function(m,l){return a[i].user[l]});li.appendChild(s);li.appendChild(text(' '))}li.appendChild(statusSpan);li.appendChild(text(' '));li.appendChild(timeSpan)}if(b.newwindow){li.innerHTML=li.innerHTML.replace(/<a href/gi,'<a target="_blank" href')}f.appendChild(li)}if(b.clearContents){while(c.firstChild){c.removeChild(c.firstChild)}}c.appendChild(f);if(typeof b.callback=='function'){b.callback()}};window.getTwitters=function(e,f,g,h){k++;if(typeof f=='object'){h=f;f=h.id;g=h.count}if(!g)g=1;if(h){h.count=g}else{h={}}if(!h.timeout&&typeof h.onTimeout=='function'){h.timeout=10}if(typeof h.clearContents=='undefined'){h.clearContents=true}if(h.withFriends)h.withFriends=false;h['twitterTarget']=e;if(typeof h.enableLinks=='undefined')h.enableLinks=true;window['twitterCallback'+k]=function(a){if(h.timeout){clearTimeout(window['twitterTimeout'+k])}renderTwitters(a,h)};ready((function(c,d){return function(){if(!document.getElementById(c.twitterTarget)){return}var a='http://www.twitter.com/statuses/'+(c.withFriends?'friends_timeline':'user_timeline')+'/'+f+'.json?callback=twitterCallback'+d+'&count=20&cb='+Math.random();if(c.timeout){window['twitterTimeout'+d]=setTimeout(function(){if(c.onTimeoutCancel)window['twitterCallback'+d]=function(){};c.onTimeout.call(document.getElementById(c.twitterTarget))},c.timeout*1000)}var b=document.createElement('script');b.setAttribute('src',a);document.getElementsByTagName('head')[0].appendChild(b)}})(h,k))};DOMReady();function getTwitterData(a){var b=a,i;for(i in a.user){b['user_'+i]=a.user[i]}b.time=relative_time(a.created_at);return b}function ready(a){if(!o){n.push(a)}else{a.call()}}function fireReady(){o=true;var a;while(a=n.shift()){a.call()}}function DOMReady(){if(document.addEventListener&&!j.webkit){document.addEventListener("DOMContentLoaded",fireReady,false)}else if(j.msie){document.write("<scr"+"ipt id=__ie_init defer=true src=//:><\/script>");var a=document.getElementById("__ie_init");if(a){a.onreadystatechange=function(){if(this.readyState!="complete")return;this.parentNode.removeChild(this);fireReady.call()}}a=null}else if(j.webkit){var b=setInterval(function(){if(document.readyState=="loaded"||document.readyState=="complete"){clearInterval(b);b=null;fireReady.call()}},10)}}function relative_time(c){var d=c.split(" "),parsed_date=Date.parse(d[1]+" "+d[2]+", "+d[5]+" "+d[3]),date=new Date(parsed_date),relative_to=(arguments.length>1)?arguments[1]:new Date(),delta=parseInt((relative_to.getTime()-parsed_date)/1000),r='';function formatTime(a){var b=a.getHours(),min=a.getMinutes()+"",ampm='AM';if(b==0){b=12}else if(b==12){ampm='PM'}else if(b>12){b-=12;ampm='PM'}if(min.length==1){min='0'+min}return b+':'+min+' '+ampm}function formatDate(a){var b=a.toDateString().split(/ /),mon=p[a.getMonth()],day=a.getDate()+'',dayi=parseInt(day),year=a.getFullYear(),thisyear=(new Date()).getFullYear(),th='th';if((dayi%10)==1&&day.substr(0,1)!='1'){th='st'}else if((dayi%10)==2&&day.substr(0,1)!='1'){th='nd'}else if((dayi%10)==3&&day.substr(0,1)!='1'){th='rd'}if(day.substr(0,1)=='0'){day=day.substr(1)}return mon+' '+day+th+(thisyear!=year?', '+year:'')}delta=delta+(relative_to.getTimezoneOffset()*60);if(delta<5){r='less than 5 seconds ago'}else if(delta<30){r='half a minute ago'}else if(delta<60){r='less than a minute ago'}else if(delta<120){r='1 minute ago'}else if(delta<(45*60)){r=(parseInt(delta/60)).toString()+' minutes ago'}else if(delta<(2*90*60)){r='about 1 hour ago'}else if(delta<(24*60*60)){r='about '+(parseInt(delta/3600)).toString()+' hours ago'}else{if(delta<(48*60*60)){r=formatTime(date)+' yesterday'}else{r=formatTime(date)+' '+formatDate(date)}}return r}})();;// OFA Donate - Sequential Asks JS
//      Created By Manik Rathee on 2012-05-08
//      Copyright 2012 Obama for America. All rights reserved.

// (function($, win) {
    var win = $('window');
    var current              = 1;
    
    var donateForm           = $('#donate-form');
    var group1               = $('#select-amount-header, #amounts-cont');
    var group2               = $('#firstname-cont, #lastname-cont, #addr1-cont, #city-cont, #state_cd-cont, #zip-cont, #email-cont, #phone-cont');
    var group3               = $('.qd-info.cc_number_related.cc_expir_group_related, #cc-type-cont, #cc-number-cont, #cc-expiration-cont, #recurring-cont');
    var group4               = $('#personalized-content, .employer_related.occupation_related, #employer-cont, #occupation-cont, #employer-occupation-helper, #ovf-switch');
    var personalizedContent  = $('#personalized-content');
    var next                 = $('#next');
    var replacementSubmit    = $('#submit-button');
    var inputFields          = $(":input");
    var amountInputs         = $('#amounts input');
    var amountOther          = $('#amount-cont-8 input');
    var breadcrumb           = $('#breadcrumbs');
    var breadcrumbItem       = $('.breadcrumb-item');
    var breadcrumbName       = $('#breadcrumb-name');
    var breadcrumbPayment    = $('#breadcrumb-payment');
    var breadcrumbEmployment = $('#breadcrumb-employment');
    var premature            = $('span.premature');
    var goNext;
    var overLimit;
    var underLimit;
    var hasSavedPayment;
    var errorFullForm;
    var inputTel             = $('#amount-other, #phone, #zip, #cc_number');
    var inputEmail           = $('#email');
    var inputChanges         = $('#amount-other, #zip, #cc_number, #phone, #email');
    var $formContent         = $('#donate-form-content');
    var runValidation        = true;
    var minDonationLimit;
    var amountOtherClean;
    var keycode = false;
    // Enables Sequential To Fire
    $('body').addClass('sequential-active');


    // Mobile Input Types
    function adjustInputTypes(){
        if ($(window).width() < 769 && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)){
            // inputNumber.prop('type','number');
            inputTel.prop('type','tel');
            inputEmail.prop('type','email');
        }
        else{
            inputChanges.prop('type','text');
        }
    }
    $(window).resize(function() {
        adjustInputTypes();
    });
    $(document).ready(function() {
        adjustInputTypes();
    });
    
    //Set min and max if it doesnt exist or is not a number
    win.minDonationLimit = (!minDonationLimit || typeof minDonationLimit !== "number") ? 3 : win.minDonationLimit;

    if ( $('body').hasClass('ovf-gateway') || (win.ofaOvfSwitch && donateForm.data('bsd_ovf_slug')) ) {
        win.maxDonationLimit = ( win.maxDonationLimit && (typeof( win.maxDonationLimit ) === "number") && (!win.ofaOvfSwitch) ) ? win.maxDonationLimit : 73300 ;
    } else {
        win.maxDonationLimit = (win.maxDonationLimit && typeof( win.maxDonationLimit ) === "number") ? win.maxDonationLimit : 2500 ;
    }
    
    // Toggles .hide on current group
    function showContent(){
        $('.group' + current).toggleClass('hide');
    }

    // Animate Next Button
    var noPulse;
    var animateFrames = function(color) {

        var colors = ['#00abeb','#085775'];
        var newColor =  color ? 0 : 1;

        if (current === 1){
            next.animate({backgroundColor: colors[color]}, 140, 'linear', function(){
                noPulse = setTimeout(function(){
                    animateFrames(newColor);
                }, 500);
            });
        }
        else{
            next.css('background-color','#1297c9');
        }
    };

    // Get current value and set old breadcrumbs to completed
    function updateBreadcrumb(i){
        var increment = i;
        breadcrumbItem.removeClass('current');
        // goNext = true;
        while (increment){
            increment--;
            $('[data-breadcrumb-number='+increment+']').addClass('completed');
        }
        $('[data-breadcrumb-number='+i+']').addClass('completed').addClass('current');
    }
    
    //Update breadcrumbs based on Saved Payment Info
    function savePaymentBreadcrumbs(){
        if (hasSavedPayment){
            breadcrumbEmployment.find('span').html('<hr>2');
            breadcrumbName.hide();
            breadcrumbPayment.hide();
            breadcrumbItem.addClass('saved-payment');
        }
        else{
            breadcrumbItem.removeClass('saved-payment');
            breadcrumbName.fadeIn('500');
            breadcrumbPayment.fadeIn('500');
            breadcrumbEmployment.find('span').delay(2000).html('<hr>4');
        }
    }

    
    // Serve up client-side validation errors
    function clientErrors(){
        if (!goNext){
            premature.removeClass().addClass('premature');
            
            if (current === 1){
                premature.addClass('first');
                $('#amount-header').addClass('error');
                if (underLimit){
                    if (win.minDonationLimit && !win.minDonationLimit.isNaN){
                        premature.text('Please choose an amount higher than $' + win.minDonationLimit + '.').fadeIn('800');
                    }
                    else{
                        premature.text('Please choose an amount higher than $3.').fadeIn('800');
                    }
                }
                else if (overLimit ){
                    if(win.maxDonationLimit && !win.minDonationLimit.isNaN){
                        premature.text('Please choose an amount less than $' + win.maxDonationLimit +  '.').fadeIn('800');
                    }
                    else{
                        premature.text('Please choose an amount less than $2500.').fadeIn('800');
                    }
                }
                else{
                    premature.text('Please choose an amount.').fadeIn('800');
                }
            }
            else if (current === 2){
                premature.addClass('second').text('Please correct the errors shown above.').fadeIn('800');
            }
            else if (current === 3){
                premature.addClass('third').text('Please correct your payment information').fadeIn('800');
            }
            else if (current === 4){
                premature.addClass('fourth').text('Please correct your employment information.').fadeIn('800');
            }
            else {
                premature.text('Please correct the errors shown above.').fadeIn('800');
            }
        }
    }
    

    //Validation
    function validateForm(){
        if (!runValidation){
            return;
        }
        runValidation = false;
        currentInputs = $('.group' + current).find('input');
        var arrLength = currentInputs.length;
        goNext = false;
        overLimit = false;
        underLimit = false;
        var i;
        
        if (!$('body').hasClass('error')) {

            if (current === 1){

                for (i=0; i < arrLength; i++) {
                    if (currentInputs.eq(i).attr('checked')) {
                        goNext = true;
                        break;
                    }
                }
                if ($('#other-amount-radio').attr('checked')){

                    if (/^\$?([1-9]{1}[0-9]{0,2}(\,[0-9]{3})*(\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\.[0-9]{0,2})?|0(\.[0-9]{0,2})?|(\.[0-9]{1,2})?)$/.test(amountOther.val()) && amountOther.val() > win.maxDonationLimit){
                        goNext = false;
                        overLimit = true;
                        amountOther.addClass('error');
                    }
                    if (/^\$?([1-9]{1}[0-9]{0,2}(\,[0-9]{3})*(\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\.[0-9]{0,2})?|0(\.[0-9]{0,2})?|(\.[0-9]{1,2})?)$/.test(amountOther.val()) && amountOther.val() < win.minDonationLimit && amountOther.val() !== ''){
                        goNext = false;
                        underLimit = true;
                        amountOther.addClass('error');
                    }
                    if (amountOther.val() === ''){
                        goNext = false;
                        amountOther.addClass('error');
                    }
                    if (!/^\$?([1-9]{1}[0-9]{0,2}(\,[0-9]{3})*(\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\.[0-9]{0,2})?|0(\.[0-9]{0,2})?|(\.[0-9]{1,2})?)$/.test(amountOther.val())) {
                        goNext = false;
                        amountOther.addClass('error');
                    }

                }
            }

            if  (current === 2){
                for (i=0; i < arrLength; i++) {
                    if (currentInputs.eq(i).val() !== '') {
                        goNext = true;
                        break;
                    }
                }

                var firstName = $('#firstname');
                if (!/([a-zA-Z]+)|(([0-9]+)([a-zA-Z]+))/.test(firstName.val())) {
                    goNext = false;
                    firstName.addClass('error');
                }

                var lastName = $('#lastname');
                if (!/([a-zA-Z]+)|(([0-9]+)([a-zA-Z]+))/.test(lastName.val())) {
                    goNext = false;
                    lastName.addClass('error');
                }

                var address = $('#addr1');
                if (!/([a-zA-Z]+)|(([0-9]+)([a-zA-Z]+))/.test(address.val())) {
                    goNext = false;
                    address.addClass('error');
                }

                var city = $('#city');
                if (!/([a-zA-Z]+)|(([0-9]+)([a-zA-Z]+))/.test(city.val())) {
                    goNext = false;
                    city.addClass('error');
                }

                if ($('#state_cd').val() === '') {
                    goNext = false;
                    $('#state_cd').addClass('error');
                }

                var zip = $('#zip');
                if (!/^(\d{5}-\d{4}|\d{5}\+\d{4}|\d{5}|\d{9})$/.test(zip.val())) {
                    goNext = false;
                    zip.addClass('error');
                }

                var email = $('#email');
                if (!/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email.val())) {
                    goNext = false;
                    email.addClass('error');
                }

                var phone = $('#phone');
                // if (!/^([\(]{1}[0-9]{3}[\)]{1}[\.| |\-]{0,1}|^[0-9]{3}[\.|\-| ]?)?[0-9]{3}(\.|\-| )?[0-9]{4}$/.test(phone.val())) {
                //  goNext = false;
                //  phone.addClass('error');
                //  // next.addClass('inactive');
                // }

                // Looser restrictions for phone regex
                // phone.val(phone.val().replace(/[^0-9]/g,''));

                phone.val(phone.val().replace(/\D/g,''));

                if (phone.val().length > 11 || phone.val().length < 10) {
                    goNext = false;
                    phone.addClass('error');
                    // next.addClass('inactive');
                }

            }

            if (current === 3){

                for (i=0; i < arrLength; i++) {
                    if (currentInputs.eq(i).val() !== '') {
                        goNext = true;
                        break;
                    }
                }

            }

            if (current === 4){
                replacementSubmit.focus();
                goNext = true;

                // if (hasSavedPayment = false){
                    var employ = $('#employer');
                    if (!/([a-zA-Z]+)|(([0-9]+)([a-zA-Z]+))/.test(employ.val())) {
                        goNext = false;
                        employ.addClass('error');
                    }

                    var occup = $('#occupation');
                    if (!/([a-zA-Z]+)|(([0-9]+)([a-zA-Z]+))/.test(occup.val())) {
                        goNext = false;
                        occup.addClass('error');
                    }
                // }
            }
            if (goNext){
                currentInputs.find('input').removeClass('error');
            }
            if (!goNext){
                clientErrors();
            }
        } // end, if body has class errors
        runValidation = true;
    }

    // // ERROR HIJACK
    // window.customError = function(errorObj){
    //     errorFullForm = true;
    //     amountOther.off('blur.otherField');
    //     hasSavedPayment = false;

    //     $('body').addClass('error');
    //     if ($(window).width() > 767){
    //         breadcrumb.fadeOut(800);
    //         premature.fadeOut(700);
    //         group1.removeClass('hide').fadeIn(1000);
    //         group2.removeClass('hide').fadeIn(1000);
    //         group3.removeClass('hide').fadeIn(1000);
    //         group4.not('#ovf-switch').removeClass('hide').fadeIn(1000);
    //         replacementSubmit.html('<span id="processingform">Thanks for your fake donation</span>Resubmit').removeClass('processingform').addClass('fullform');
    //     }

    //     // Takes an object with two properties field and message. It finds the appropriate error element
    //     // for that form field and puts the message into it
    //     function displayErrorMessage( errorPair ){
    //         var $self = $('#donate-form');
    //         var $errorFields = $self.find('[class*="_error"]');
    //         var $relatedFields = $self.find('[class*="_related"]');
    //         var $currentField = $errorFields.filter('.' + errorPair.field + '_error');

    //         if ( $currentField.length === 0 ) {
    //             $self.find('[name="' + errorPair.field + '"]').before('<p class="error ' + errorPair.field + '_error"></p>');
    //             $currentField = $self.find('.' + errorPair.field + '_error');
    //         }

    //         $currentField.html( errorPair.message ).removeClass('hidden').addClass('error');
    //         $self.find('#' + errorPair.field)
    //             .add( $relatedFields.filter('.' + errorPair.field + '_related') )
    //                 .addClass('error');
    //     }
        
    //     function errorifyForm( donateError ){

    //         var numErrors, i;
    //         var ofaAPI = new win.ODonateAPIWrapper('');
            
    //         if ( donateError.code ) {
    //             switch ( donateError.code ) {
    //                 case ofaAPI.VALIDATION_FAILURE :
    //                     numErrors = donateError.field_errors.length;
    //                     for ( i=0; i < numErrors; i++ ) {
    //                         displayErrorMessage( donateError.field_errors[i] );
    //                     }
    //                     displayErrorMessage({
    //                         field : 'general',
    //                         message : '<strong>Error:</strong> Please correct the problems marked in the form and submit your donation again.'
    //                     });
    //                     break;
    //                 case ofaAPI.CONFIRMATION_FAILURE :
    //                     displayErrorMessage({
    //                         field : 'general',
    //                         message : '<strong>Error:</strong> Please try to submit your donation again.'
    //                     });
    //                     break;
    //                 case ofaAPI.INVALID_SLUG_ERROR :
    //                     displayErrorMessage({
    //                         field : 'general',
    //                         message : '<strong>Error:</strong> Please try to submit your donation again.'
    //                     });
    //                     break;
    //                 case ofaAPI.NO_SLUG_ERROR :
    //                     displayErrorMessage({
    //                         field : 'general',
    //                         message : '<strong>Error:</strong> Please try to submit your donation again.'
    //                     });
    //                     break;
    //                 case ofaAPI.SERVER_ERROR :
    //                     displayErrorMessage({
    //                         field : 'general',
    //                         message : '<strong>Error:</strong> Please try to submit your donation again.'
    //                     });
    //                     break;
    //                 case ofaAPI.GATEWAY_ERROR :
    //                     displayErrorMessage({
    //                         field : 'general',
    //                         message : '<strong>Error:</strong> The transaction was declined. Please verify the information below or try a different credit card.'
    //                     });
    //                     break;
    //                 default:
    //                     displayErrorMessage({
    //                         field : 'general',
    //                         message : '<strong>Error:</strong> Please try to submit your donation again.'
    //                     });
    //                     break;
    //             }
    //             $('body').addClass('error');
    //         }
    //     }
    //     errorifyForm($.parseJSON(errorObj.responseText));
    // };

    // Check browser width and enable  for widths higher than 768
    if ($(window).width() > 767 && $('body').hasClass('sequential-active')){
        $('.row.content-area-bg').removeClass('no-js');
        group1.addClass('group1');
        group2.addClass('group2');
        group3.addClass('group3');
        group4.addClass('group4');
        $('#personalized-content').addClass('hide');
        // Adds numeric data attributes to breadcrumbs
        breadcrumbItem.each(function(){
            $(this).attr('data-breadcrumb-number', ($(this).index() + 1));
        });
        // Runs hide & show content functions
        $('.group1, .group2, .group3, .group4').addClass('hide');
        showContent();
        replacementSubmit.hide();
        next.attr('tabindex','19');
        var currentInputs = $('.group' + current).find('input');
        group1.find('input').attr('checked', false);

        // Disable enter key and backspace key outside of form fields
        $(document).keydown(function(e) {
            var nodeName = e.target.nodeName.toLowerCase();

            if (e.which === 8) {
                if (nodeName === 'input') {
                    // do nothing
                } else {
                    e.preventDefault();
                }
            }
            if (e.which === 13 && current <=  3) {
                if (current === 1){
                    $('#amount-other').val($('#amount-other').val().replace(/ +/g,'')).blur();
                    win.ofa.ee.emitEvent( 'amount:change', [$('#amount-other').val()] );
                }
                if (current === 2){
                    $('#zip').val($('#zip').val().replace(/ +/g,''));
                }
                next.click();
                return false;
            }
            if (e.which === 13 && current === 4) {
                replacementSubmit.click();
                return false;
            }
        });
        
        

        // Restore form fields if QD info not you is clicked
        $('#personalized-content').on("click", "#qd-edit-info", function(){
            showContent();
            $('.employer_related.occupation_related, #employer-cont, #occupation-cont').show();
            $('#personalized-content').fadeOut(800);
            replacementSubmit.fadeOut(400);
            next.show();
            hasSavedPayment = false;
            savePaymentBreadcrumbs();
            breadcrumbPayment.removeClass('completed');
            breadcrumbEmployment.removeClass('completed');
            replacementSubmit.removeClass('saved-payment');
            $('#employer-occupation-helper').show();
            current = 1;
            current++;
            updateBreadcrumb(current);
            showContent();
        });
        
        
            

        // Set active states on amount button and populate amount banner
        // Mark hidden radios active and inactive with the label
        $('.amount-cont').click(function(){
            $(this).removeClass('active');
            amountInputs.attr('checked', false);
            premature.fadeOut('1200');
            $('#amount-header').removeClass('error');
            $('.amount-cont').find('input').removeClass('error');
            
            if ($(this).attr('id') === 'amount-cont-8') {
                $(this).find("input").attr('checked', true);
                $('#other-amount-radio').attr('checked' , true);
                amountOther.val('');
                if (!errorFullForm){
                    next.fadeIn(400);
                }
            }
        });
        
        $('.amount-cont').find('label').click(function(){
            var $this = $(this),
                $theInput = $this.parent().find("input");
            amountOther.val('');
            $('#other-amount-radio').attr('checked' , false);
            $this.addClass('active');
            $theInput.attr('checked', true);
            if (!errorFullForm){
                next.click();
                if (!hasSavedPayment){
                    next.fadeIn(600);
                }
                replacementSubmit.html('<span id="processingform">Thanks for your fake donation</span>Donate  $' + $this.parent().find("label").html().replace('$', ''));
            }
        });


        amountOther.change(function(){
            var $this = $(this);

            premature.fadeOut('1200');
            $('#amount-header').removeClass('error');
            $('.amount-cont').find('input').removeClass('error');

            // Kill spaces in Other amount field
            $this.val($this.val().replace(/ +/g,''));
            if ($this.val() === ""){
                $this.attr('checked' , false);
                $('#other-amount-radio').attr('checked' , false);
            }
            if (!errorFullForm){
                amountOther.on('blur.otherField', function(){
                    amountOtherClean = amountOther.text($(this).val().replace('$', '')).text();
                    replacementSubmit.html('<span id="processingform">Thanks for your fake donation</span>Donate  $' + amountOtherClean);
                });
            }
        });
        $('#zip').focus(function(){
            $('#zip').removeClass('error');
        });
        $('#zip').change(function(){
            $(this).val($(this).val().replace(/ +/g,''));
        });
        $('#email, #phone').change(function(){
            $(this).val($(this).val().replace(/ +/g,''));
        });
        $('#email, #phone').focus(function(){
            $(this).removeClass('error');
        });
        $('#cc_number').change(function(){
            $(this).val($(this).val().replace(/-/g,''));
        });

        // Fade out premature error if fields are focused
        inputFields.focus(function(){
            premature.fadeOut('1200');
            $(this).removeClass('error');
        });
        inputFields.change(function(){
            premature.fadeOut('1200');
            $(this).removeClass('error');
        });
        
        // ##BREADCRUMBS
        breadcrumbItem.click(function(){
            var index;
            var allGroups = $('.group1, .group2, .group3, .group4, .group5, .group6');
            
            $('this').focus();
            
            if (current < index){
                validateForm();
            }
            
            if ($(this).hasClass('completed')){
                index = $(this).attr('data-breadcrumb-number');

                if (current < index){
                    validateForm();
                }
                if (goNext){
                    allGroups.addClass('hide');
                    $('.group' + index).removeClass('hide');
                    updateBreadcrumb(index);
                    current = parseInt(index, 10);
                }
                if (current < 4){
                    next.show();
                    replacementSubmit.hide();
                }
            }
            
            if (!goNext){
                validateForm();
                // revalidate just to make sure, and if go next is true, run breadcrumb actions
                if (goNext){
                    index = $(this).attr('data-breadcrumb-number');
                    allGroups.addClass('hide');
                    $('.group' + index).removeClass('hide');
                    updateBreadcrumb(index);
                    current = parseInt(index, 10);
                }
            }
            // Set proper tab index for continue button and focus on first form field in the group
            if (current === 1){
                next.attr('tabindex','19');
                if (keycode){
                    personalizedContent.addClass('hide');
                }
            }
            if (current === 2){
                next.attr('tabindex','10');
                if (keycode){
                    personalizedContent.removeClass('hide');
                }
            }
            if (current === 3){
                next.attr('tabindex','26');
                if (keycode){
                    personalizedContent.addClass('hide');
                }
            }
            if (current === 4){
                next.hide();
                replacementSubmit.fadeIn(1800);
                if (keycode){
                    personalizedContent.removeClass('hide');
                }
                $formContent.addClass('ovfSwitch');
            }
            if (current !== 4){
                next.show();
                replacementSubmit.hide();
                $formContent.removeClass('ovfSwitch');
            }
            if (goNext){
                premature.fadeOut(800);
            }
        });

        // ##NEXT
        next.unbind('click').click(function(i){
            i.preventDefault();
            next.focus();
            validateForm();

           
            if (goNext) {
                premature.fadeOut('1200');
                showContent();
                current++;
                if (current >= 4){
                    current = 4;
                }
                showContent();
                updateBreadcrumb(current);

                if (current === 1){
                    next.attr('tabindex','19');
                    if (keycode){
                        personalizedContent.addClass('hide');
                    }
                }
                if (current === 2){
                    $("#firstname").focus();
                    next.attr('tabindex','10');
                    if (keycode){
                        personalizedContent.removeClass('hide');
                    }
                }
                if (current === 3){
                    $("#cc_number").focus();
                    next.attr('tabindex','26');
                    if (keycode){
                        personalizedContent.addClass('hide');
                    }
                }
                if (current === 4){
                    $("#employer").focus();
                    next.hide();
                    replacementSubmit.fadeIn(1000);
                    if (keycode){
                        personalizedContent.removeClass('hide');
                    }
                }
            }
            if (current !== 4){
                next.show();
                replacementSubmit.hide();
            }
            if (goNext){
                premature.fadeOut(800);
            }
        });

        // Validated last screen with submit button then submit form
        replacementSubmit.click(function(i){
            i.preventDefault();
            if (!$("body").hasClass("error")) {
                validateForm();
                if (!goNext){
                    premature.css('bottom', bottomPx).text('Please correct your employment information.').fadeIn('800');
                }
                else{
                    replacementSubmit.html('<span id="processingform">Thanks for your fake donation</span>Processing').addClass('processingform');
                }
            }
            else{
                replacementSubmit.html('<span id="processingform">Thanks for your fake donation</span>Processing').addClass('processingform');
            }
        });
    } // END 768 WIDTH CHECK
// })(jQuery, window);
;

LastFMStatus.init({
    username: "mrathee"
});





// function animatedIcons() {
//   /* Icon 11 */
//   var el11 = document.querySelector('.animated-logo'), el11span = el11.querySelector('span');
//   var opacityCurve11 = mojs.easing.path('M0,0 C0,87 27,100 40,100 L40,0 L100,0');
//   var scaleCurve11 = mojs.easing.path('M0,0c0,80,39.2,100,39.2,100L40-100c0,0-0.7,106,60,106');
//   new Animocon(el11, {
//     tweens : [
//       // ring animation
//       new mojs.Transit({
//         parent: el11,
//         duration: 1000,
//         delay: 100,
//         type: 'circle',
//         radius: {0: 95},
//         fill: 'transparent',
//         stroke: '#C0C1C3',
//         strokeWidth: {50:0},
//         opacity: 0.4,
//         x: '50%',
//         y: '50%',
//         isRunLess: true,
//         easing: mojs.easing.bezier(0, 1.6, 0.5, 1)
//       }),
//       new mojs.Transit({
//         parent: el11,
//         duration: 1100,
//         delay: 100,
//         type: 'circle',
//         radius: {0: 85},
//         fill: 'transparent',
//         stroke: '#C0C1C3',
//         strokeWidth: {50:0},
//         opacity: 0.4,
//         x: '50%',
//         y: '50%',
//         isRunLess: true,
//         easing: mojs.easing.bezier(0, 0.4, 0.5, 1)
//       }),
//       new mojs.Transit({
//         parent: el11,
//         duration: 1375,
//         delay: 90,
//         type: 'circle',
//         radius: {0: 115},
//         fill: 'transparent',
//         stroke: '#C0C1C3',
//         strokeWidth: {50:0},
//         opacity: 0.4,
//         x: '50%',
//         y: '50%',
//         isRunLess: true,
//         easing: mojs.easing.bezier(0, 1, 0.5, 1)
//       }),
//       // ring animation
//       new mojs.Transit({
//         parent: el11,
//         duration: 1800,
//         delay: 300,
//         type: 'circle',
//         radius: {0: 80},
//         fill: 'transparent',
//         stroke: '#C0C1C3',
//         strokeWidth: {40:0},
//         opacity: 0.2,
//         x: '50%',
//         y: '50%',
//         isRunLess: true,
//         easing: mojs.easing.bezier(0, 1, 0.5, 1)
//       }),
//       // icon scale animation
//       new mojs.Tween({
//         duration : 2000,
//         easing: mojs.easing.ease.out,
//         onUpdate: function(progress) {
//           var opacityProgress = opacityCurve11(progress);
//           el11span.style.opacity = opacityProgress;

//           var scaleProgress = scaleCurve11(progress);
//           el11span.style.WebkitTransform = el11span.style.transform = 'scale3d(' + scaleProgress + ',' + scaleProgress + ',1)';

//           var colorProgress = opacityCurve11(progress);
//           el11.style.color = colorProgress >= 1 ? '#E87171' : '#C0C1C3';
//         }
//       })
//     ],
//     onUnCheck : function() {
//       el11.style.color = '#C0C1C3';
//     }
//   });
//   /* Icon 11 */

// }

// animatedIcons();

 var scaleCurve = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0');
  var el = document.querySelector('.animated-logo'),
  interiorLogo = el.querySelector('.mountain-monday'),
  // mo.js timeline obj
  timeline = new mojs.Timeline(),

  // tweens for the animation:

  // burst animation
  tween1 = new mojs.Burst({
    parent: el,
    duration: 800,
    delay: 200,
    // shape : 'circle',
    shape : 'star',
    fill : [ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
    x: '50%',
    y: '50%',
    opacity: 0.6,
    childOptions: { radius: {20:5} },
    radius: {40:80},
    count: 22,
    // isSwirl: true,
    isRunLess: true,
    easing: mojs.easing.bezier(.89,0,.19,1)
  }),
  // ring animation
  tween2 = new mojs.Transit({
    parent: el,
    duration: 800,
    delay: 200,
    type: 'circle',
    radius: {0: 50},
    fill: 'transparent',
    stroke: '#988ADE',
    strokeWidth: {5:0},
    opacity: 0.6,
    x: '50%',
    y: '50%',
    isRunLess: true,
    easing: mojs.easing.bezier(.89,0,.19,1)
  }),
  // icon scale animation
  tween3 = new mojs.Tween({
    duration : 1000,
    onUpdate: function(progress) {
      var scaleProgress = scaleCurve(progress);
      interiorLogo.style.WebkitTransform = interiorLogo.style.transform = 'scale3d(' + scaleProgress + ',' + scaleProgress + ',1)';
    }
  });

  tween1 = new mojs.Burst({
    parent: el,
    duration: 1000,
    shape : 'circle',
    fill : [ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
    // fill : 'white',
    x: '50%',
    y: '50%',
    childOptions: {
      radius: {12:0},
      type: 'line',
      stroke: '#988ADE',
      strokeWidth: 2
    },
    radius: {40:110},
    count: 20,
    isRunLess: true,
    easing: mojs.easing.bezier(0,0,.04,1)
  }),
  // ring animation
  tween2 = new mojs.Transit({
    parent: el,
    duration: 700,
    type: 'circle',
    radius: {10: 60},
    fill: 'transparent',
    // stroke: '#988ADE',
    stroke : [ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
    strokeWidth: {30:0},
    count: 3,
    x: '50%',
    y: '50%',
    isRunLess: true,
    easing: mojs.easing.bezier(0,0,.04,1)
  }),
  // icon scale animation
  tween3 = new mojs.Tween({
    duration : 700,
    easing: mojs.easing.bezier(0,0,.04,1),
    onUpdate: function(progress) {
      var scaleProgress = scaleCurve(progress);
      interiorLogo.style.WebkitTransform = interiorLogo.style.transform = 'scale3d(' + progress + ',' + progress + ',1)';
    }
  });


// add tweens to timeline:
// if (el.length && interiorLogo.length) {
  timeline.add(tween1, tween2, tween3);
  timeline.start();
// }









// $('#main-footer').withinviewport({top: -300});






// // Twitter Button
// !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");







$(document).ready(function() {
  var body = $('body');

  // Reading Time
  $(".time").text(function (index, value) {
    return Math.round(parseFloat(value));
  });

  if ( body.data('lazyload') ) {
    $('#loader li img').lazyload({
      effect : "fadeIn",
      threshold : 50
    });
  }

});







(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-19400273-5', 'auto');
ga('send', 'pageview');


function trackEvent(cat, action, label){
  if (cat && action && label) {
    try {
        ga('send', 'event', cat, action, label);
    } catch (e) {
        logMyErrors(e); // pass exception object to error handler
    }
  }
};
