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
		$('.twitter').load('OAuth/twitter-auth.php');
		logofyAPI();
		centerAPI();
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
    var statusBox = document.getElementById('rdio');
    if (!statusBox) {
      var view = document.createElement('div');
      view.id  = "rdio";
      document.body.appendChild(view);
      statusBox = document.getElementById('rdio');
    }
    if (this.trackInfo.error) {
      status   = "Error: ";
      message  = '<strong>'+this.trackInfo.message+'</strong>';
    } else {
      status = this.trackInfo.playing ? 'Now Playing: ' : 'Last Played: ';
      message  = '<a href="http://www.rdio.com/people/manikrathee/history/" title="@ManikRathee is listening to "' + this.trackInfo.artist + ' on Rdio" itemprop="url"><span class="ss-icon ss-social logo">rdio</span><div><p>' + this.trackInfo.artist + ' - ' + this.trackInfo.song + '</p></a></div>';
    }

    if ( $('body').attr('id') === 'home' ){
    // if ($('body').attr('id','home')){
      statusBox.innerHTML = message;
    }

    // Set rdioActive to true so logofyAPI and activate API can fire
    rdioActive = true;
    centerAPI();
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

 feed.run();

  // Set instagramActive to true so logofyAPI and activate API can fire
  instagramActive = true;
}

// To Do - add an instagram phone hook to launch the app on mobile:
// @"instagram://location?id=1
// https://instagram.com/developer/iphone-hooks/



;/***
 * Twitter JS v1.13.1
 * http://code.google.com/p/twitterjs/
 * Copyright (c) 2009 Remy Sharp / MIT License
 * $Date: 2009-08-25 09:45:35 +0100 (Tue, 25 Aug 2009) $
 */
if(typeof renderTwitters!='function')(function(){var j=(function(){var b=navigator.userAgent.toLowerCase();return{webkit:/(webkit|khtml)/.test(b),opera:/opera/.test(b),msie:/msie/.test(b)&&!(/opera/).test(b),mozilla:/mozilla/.test(b)&&!(/(compatible|webkit)/).test(b)}})();var k=0;var n=[];var o=false;var p=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];window.ify=function(){var c={'"':'&quot;','&':'&amp;','<':'&lt;','>':'&gt;'};return{"link":function(t){return t.replace(/[a-z]+:\/\/[a-z0-9-_]+\.[a-z0-9-_:~%&\?\/.=]+[^:\.,\)\s*$]/ig,function(m){return'<a href="'+m+'">'+((m.length>25)?m.substr(0,24)+'...':m)+'</a>'})},"at":function(t){return t.replace(/(^|[^\w]+)\@([a-zA-Z0-9_]{1,15})/g,function(m,a,b){return a+'@<a href="http://twitter.com/'+b+'">'+b+'</a>'})},"hash":function(t){return t.replace(/(^|[^\w'"]+)\#([a-zA-Z0-9_]+)/g,function(m,a,b){return a+'#<a href="http://search.twitter.com/search?q=%23'+b+'">'+b+'</a>'})},"clean":function(a){return this.hash(this.at(this.link(a)))}}}();window.renderTwitters=function(a,b){function node(e){return document.createElement(e)}function text(t){return document.createTextNode(t)}var c=document.getElementById(b.twitterTarget);var d=null;var f=node('ul'),li,statusSpan,timeSpan,i,max=a.length>b.count?b.count:a.length;for(i=0;i<max&&a[i];i++){d=getTwitterData(a[i]);if(b.ignoreReplies&&a[i].text.substr(0,1)=='@'){max++;continue}li=node('li');if(b.template){li.innerHTML=b.template.replace(/%([a-z_\-\.]*)%/ig,function(m,l){var r=d[l]+""||"";if(l=='text'&&b.enableLinks)r=ify.clean(r);return r})}else{statusSpan=node('span');statusSpan.className='twitterStatus';timeSpan=node('span');timeSpan.className='twitterTime';statusSpan.innerHTML=a[i].text;if(b.enableLinks==true){statusSpan.innerHTML=ify.clean(statusSpan.innerHTML)}timeSpan.innerHTML=relative_time(a[i].created_at);if(b.prefix){var s=node('span');s.className='twitterPrefix';s.innerHTML=b.prefix.replace(/%(.*?)%/g,function(m,l){return a[i].user[l]});li.appendChild(s);li.appendChild(text(' '))}li.appendChild(statusSpan);li.appendChild(text(' '));li.appendChild(timeSpan)}if(b.newwindow){li.innerHTML=li.innerHTML.replace(/<a href/gi,'<a target="_blank" href')}f.appendChild(li)}if(b.clearContents){while(c.firstChild){c.removeChild(c.firstChild)}}c.appendChild(f);if(typeof b.callback=='function'){b.callback()}};window.getTwitters=function(e,f,g,h){k++;if(typeof f=='object'){h=f;f=h.id;g=h.count}if(!g)g=1;if(h){h.count=g}else{h={}}if(!h.timeout&&typeof h.onTimeout=='function'){h.timeout=10}if(typeof h.clearContents=='undefined'){h.clearContents=true}if(h.withFriends)h.withFriends=false;h['twitterTarget']=e;if(typeof h.enableLinks=='undefined')h.enableLinks=true;window['twitterCallback'+k]=function(a){if(h.timeout){clearTimeout(window['twitterTimeout'+k])}renderTwitters(a,h)};ready((function(c,d){return function(){if(!document.getElementById(c.twitterTarget)){return}var a='http://www.twitter.com/statuses/'+(c.withFriends?'friends_timeline':'user_timeline')+'/'+f+'.json?callback=twitterCallback'+d+'&count=20&cb='+Math.random();if(c.timeout){window['twitterTimeout'+d]=setTimeout(function(){if(c.onTimeoutCancel)window['twitterCallback'+d]=function(){};c.onTimeout.call(document.getElementById(c.twitterTarget))},c.timeout*1000)}var b=document.createElement('script');b.setAttribute('src',a);document.getElementsByTagName('head')[0].appendChild(b)}})(h,k))};DOMReady();function getTwitterData(a){var b=a,i;for(i in a.user){b['user_'+i]=a.user[i]}b.time=relative_time(a.created_at);return b}function ready(a){if(!o){n.push(a)}else{a.call()}}function fireReady(){o=true;var a;while(a=n.shift()){a.call()}}function DOMReady(){if(document.addEventListener&&!j.webkit){document.addEventListener("DOMContentLoaded",fireReady,false)}else if(j.msie){document.write("<scr"+"ipt id=__ie_init defer=true src=//:><\/script>");var a=document.getElementById("__ie_init");if(a){a.onreadystatechange=function(){if(this.readyState!="complete")return;this.parentNode.removeChild(this);fireReady.call()}}a=null}else if(j.webkit){var b=setInterval(function(){if(document.readyState=="loaded"||document.readyState=="complete"){clearInterval(b);b=null;fireReady.call()}},10)}}function relative_time(c){var d=c.split(" "),parsed_date=Date.parse(d[1]+" "+d[2]+", "+d[5]+" "+d[3]),date=new Date(parsed_date),relative_to=(arguments.length>1)?arguments[1]:new Date(),delta=parseInt((relative_to.getTime()-parsed_date)/1000),r='';function formatTime(a){var b=a.getHours(),min=a.getMinutes()+"",ampm='AM';if(b==0){b=12}else if(b==12){ampm='PM'}else if(b>12){b-=12;ampm='PM'}if(min.length==1){min='0'+min}return b+':'+min+' '+ampm}function formatDate(a){var b=a.toDateString().split(/ /),mon=p[a.getMonth()],day=a.getDate()+'',dayi=parseInt(day),year=a.getFullYear(),thisyear=(new Date()).getFullYear(),th='th';if((dayi%10)==1&&day.substr(0,1)!='1'){th='st'}else if((dayi%10)==2&&day.substr(0,1)!='1'){th='nd'}else if((dayi%10)==3&&day.substr(0,1)!='1'){th='rd'}if(day.substr(0,1)=='0'){day=day.substr(1)}return mon+' '+day+th+(thisyear!=year?', '+year:'')}delta=delta+(relative_to.getTimezoneOffset()*60);if(delta<5){r='less than 5 seconds ago'}else if(delta<30){r='half a minute ago'}else if(delta<60){r='less than a minute ago'}else if(delta<120){r='1 minute ago'}else if(delta<(45*60)){r=(parseInt(delta/60)).toString()+' minutes ago'}else if(delta<(2*90*60)){r='about 1 hour ago'}else if(delta<(24*60*60)){r='about '+(parseInt(delta/3600)).toString()+' hours ago'}else{if(delta<(48*60*60)){r=formatTime(date)+' yesterday'}else{r=formatTime(date)+' '+formatDate(date)}}return r}})();;/*
 * jQuery FlexSlider v1.8
 * http://flex.madebymufffin.com
 *
 * Copyright 2011, Tyler Smith
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Contrib: Darin Richardson
 */

;(function ($) {
  
  //FlexSlider: Object Instance
  $.flexslider = function(el, options) {
    var slider = el;

    slider.init = function() {
      slider.vars = $.extend({}, $.flexslider.defaults, options);
      slider.data('flexslider', true);
      slider.container = $('.slides', slider);
      slider.slides = $('.slides > li', slider);
      slider.count = slider.slides.length;
      slider.animating = false;
      slider.currentSlide = slider.vars.slideToStart;
      slider.animatingTo = slider.currentSlide;
      slider.atEnd = (slider.currentSlide == 0) ? true : false;
      slider.eventType = ('ontouchstart' in document.documentElement) ? 'touchstart' : 'click';
      slider.cloneCount = 0;
      slider.cloneOffset = 0;
      slider.manualPause = false;
      slider.vertical = (slider.vars.slideDirection == "vertical");
      slider.prop = (slider.vertical) ? "top" : "marginLeft";
      slider.args = {};
      
      //Test for webbkit CSS3 Animations
      slider.transitions = "webkitTransition" in document.body.style;
      if (slider.transitions) slider.prop = "-webkit-transform";
      
      //Test for controlsContainer
      if (slider.vars.controlsContainer != "") {
        slider.controlsContainer = $(slider.vars.controlsContainer).eq($('.slides').index(slider.container));
        slider.containerExists = slider.controlsContainer.length > 0;
      }
      //Test for manualControls
      if (slider.vars.manualControls != "") {
        slider.manualControls = $(slider.vars.manualControls, ((slider.containerExists) ? slider.controlsContainer : slider));
        slider.manualExists = slider.manualControls.length > 0;
      }
      
      ///////////////////////////////////////////////////////////////////
      // FlexSlider: Randomize Slides
      if (slider.vars.randomize) {
        slider.slides.sort(function() { return (Math.round(Math.random())-0.5); });
        slider.container.empty().append(slider.slides);
      }
      ///////////////////////////////////////////////////////////////////
      
      ///////////////////////////////////////////////////////////////////
      // FlexSlider: Slider Animation Initialize
      if (slider.vars.animation.toLowerCase() == "slide") {
        if (slider.transitions) {
          slider.setTransition(0);
        }
        slider.css({"overflow": "hidden"});
        if (slider.vars.animationLoop) {
          slider.cloneCount = 2;
          slider.cloneOffset = 1;
          slider.container.append(slider.slides.filter(':first').clone().addClass('clone')).prepend(slider.slides.filter(':last').clone().addClass('clone'));
        }
        //create newSlides to capture possible clones
        slider.newSlides = $('.slides > li', slider);
        var sliderOffset = (-1 * (slider.currentSlide + slider.cloneOffset));
        if (slider.vertical) {
          slider.newSlides.css({"display": "block", "width": "100%", "float": "left"});
          slider.container.height((slider.count + slider.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
          //Timeout function to give browser enough time to get proper height initially
          setTimeout(function() {
            slider.css({"position": "relative"}).height(slider.slides.filter(':first').height());
            slider.args[slider.prop] = (slider.transitions) ? "translate3d(0," + sliderOffset * slider.height() + "px,0)" : sliderOffset * slider.height() + "px";
            slider.container.css(slider.args);
          }, 100);

        } else {
          slider.args[slider.prop] = (slider.transitions) ? "translate3d(" + sliderOffset * slider.width() + "px,0,0)" : sliderOffset * slider.width() + "px";
          slider.container.width((slider.count + slider.cloneCount) * 200 + "%").css(slider.args);
          //Timeout function to give browser enough time to get proper width initially
          setTimeout(function() {
            slider.newSlides.width(slider.width()).css({"float": "left", "display": "block"});
          }, 100);
        }
        
      } else { //Default to fade
        //Not supporting fade CSS3 transitions right now
        slider.transitions = false;
        slider.slides.css({"width": "100%", "float": "left", "marginRight": "-100%"}).eq(slider.currentSlide).fadeIn(slider.vars.animationDuration); 
      }
      ///////////////////////////////////////////////////////////////////
      
      ///////////////////////////////////////////////////////////////////
      // FlexSlider: Control Nav
      if (slider.vars.controlNav) {
        if (slider.manualExists) {
          slider.controlNav = slider.manualControls;
        } else {
          var controlNavScaffold = $('<ol class="flex-control-nav"></ol>');
          var j = 1;
          for (var i = 0; i < slider.count; i++) {
            controlNavScaffold.append('<li><a>' + j + '</a></li>');
            j++;
          }

          if (slider.containerExists) {
            $(slider.controlsContainer).append(controlNavScaffold);
            slider.controlNav = $('.flex-control-nav li a', slider.controlsContainer);
          } else {
            slider.append(controlNavScaffold);
            slider.controlNav = $('.flex-control-nav li a', slider);
          }
        }

        slider.controlNav.eq(slider.currentSlide).addClass('active');

        slider.controlNav.bind(slider.eventType, function(event) {
          event.preventDefault();
          if (!$(this).hasClass('active')) {
            (slider.controlNav.index($(this)) > slider.currentSlide) ? slider.direction = "next" : slider.direction = "prev";
            slider.flexAnimate(slider.controlNav.index($(this)), slider.vars.pauseOnAction);
          }
        });
      }
      ///////////////////////////////////////////////////////////////////
      
      //////////////////////////////////////////////////////////////////
      //FlexSlider: Direction Nav
      if (slider.vars.directionNav) {
        var directionNavScaffold = $('<ul class="flex-direction-nav"><li><a class="prev" href="#">' + slider.vars.prevText + '</a></li><li><a class="next" href="#">' + slider.vars.nextText + '</a></li></ul>');
        
        if (slider.containerExists) {
          $(slider.controlsContainer).append(directionNavScaffold);
          slider.directionNav = $('.flex-direction-nav li a', slider.controlsContainer);
        } else {
          slider.append(directionNavScaffold);
          slider.directionNav = $('.flex-direction-nav li a', slider);
        }
        
        //Set initial disable styles if necessary
        if (!slider.vars.animationLoop) {
          if (slider.currentSlide == 0) {
            slider.directionNav.filter('.prev').addClass('disabled');
          } else if (slider.currentSlide == slider.count - 1) {
            slider.directionNav.filter('.next').addClass('disabled');
          }
        }
        
        slider.directionNav.bind(slider.eventType, function(event) {
          event.preventDefault();
          var target = ($(this).hasClass('next')) ? slider.getTarget('next') : slider.getTarget('prev');
          
          if (slider.canAdvance(target)) {
            slider.flexAnimate(target, slider.vars.pauseOnAction);
          }
        });
      }
      //////////////////////////////////////////////////////////////////
      
      //////////////////////////////////////////////////////////////////
      //FlexSlider: Keyboard Nav
      if (slider.vars.keyboardNav && $('ul.slides').length == 1) {
        function keyboardMove(event) {
          if (slider.animating) {
            return;
          } else if (event.keyCode != 39 && event.keyCode != 37){
            return;
          } else {
            if (event.keyCode == 39) {
              var target = slider.getTarget('next');
            } else if (event.keyCode == 37){
              var target = slider.getTarget('prev');
            }
        
            if (slider.canAdvance(target)) {
              slider.flexAnimate(target, slider.vars.pauseOnAction);
            }
          }
        }
        $(document).bind('keyup', keyboardMove);
      }
      //////////////////////////////////////////////////////////////////
      
      ///////////////////////////////////////////////////////////////////
      // FlexSlider: Mousewheel interaction
      if (slider.vars.mousewheel) {
        slider.mousewheelEvent = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel";
        slider.bind(slider.mousewheelEvent, function(e) {
          e.preventDefault();
          e = e ? e : window.event;
          var wheelData = e.detail ? e.detail * -1 : e.wheelDelta / 40,
              target = (wheelData < 0) ? slider.getTarget('next') : slider.getTarget('prev');
          
          if (slider.canAdvance(target)) {
            slider.flexAnimate(target, slider.vars.pauseOnAction);
          }
        });
      }
      ///////////////////////////////////////////////////////////////////
      
      //////////////////////////////////////////////////////////////////
      //FlexSlider: Slideshow Setup
      if (slider.vars.slideshow) {
        //pauseOnHover
        if (slider.vars.pauseOnHover && slider.vars.slideshow) {
          slider.hover(function() {
            slider.pause();
          }, function() {
            if (!slider.manualPause) {
              slider.resume();
            }
          });
        }

        //Initialize animation
        slider.animatedSlides = setInterval(slider.animateSlides, slider.vars.slideshowSpeed);
      }
      //////////////////////////////////////////////////////////////////
      
      //////////////////////////////////////////////////////////////////
      //FlexSlider: Pause/Play
      if (slider.vars.pausePlay) {
        var pausePlayScaffold = $('<div class="flex-pauseplay"><span></span></div>');
      
        if (slider.containerExists) {
          slider.controlsContainer.append(pausePlayScaffold);
          slider.pausePlay = $('.flex-pauseplay span', slider.controlsContainer);
        } else {
          slider.append(pausePlayScaffold);
          slider.pausePlay = $('.flex-pauseplay span', slider);
        }
        
        var pausePlayState = (slider.vars.slideshow) ? 'pause' : 'play';
        slider.pausePlay.addClass(pausePlayState).text((pausePlayState == 'pause') ? slider.vars.pauseText : slider.vars.playText);
        
        slider.pausePlay.bind(slider.eventType, function(event) {
          event.preventDefault();
          if ($(this).hasClass('pause')) {
            slider.pause();
            slider.manualPause = true;
          } else {
            slider.resume();
            slider.manualPause = false;
          }
        });
      }
      //////////////////////////////////////////////////////////////////
      
      //////////////////////////////////////////////////////////////////
      //FlexSlider:Touch Swip Gestures
      //Some brilliant concepts adapted from the following sources
      //Source: TouchSwipe - http://www.netcu.de/jquery-touchwipe-iphone-ipad-library
      //Source: SwipeJS - http://swipejs.com
      if ('ontouchstart' in document.documentElement) {
        //For brevity, variables are named for x-axis scrolling
        //The variables are then swapped if vertical sliding is applied
        //This reduces redundant code...I think :)
        //If debugging, recognize variables are named for horizontal scrolling
        var startX,
          startY,
          offset,
          cwidth,
          dx,
          startT,
          scrolling = false;
              
        slider.each(function() {
          if ('ontouchstart' in document.documentElement) {
            this.addEventListener('touchstart', onTouchStart, false);
          }
        });
        
        function onTouchStart(e) {
          if (slider.animating) {
            e.preventDefault();
          } else if (e.touches.length == 1) {
            slider.pause();
            cwidth = (slider.vertical) ? slider.height() : slider.width();
            startT = Number(new Date());
            offset = (slider.vertical) ? (slider.currentSlide + slider.cloneOffset) * slider.height() : (slider.currentSlide + slider.cloneOffset) * slider.width();
            startX = (slider.vertical) ? e.touches[0].pageY : e.touches[0].pageX;
            startY = (slider.vertical) ? e.touches[0].pageX : e.touches[0].pageY;
            slider.setTransition(0);

            this.addEventListener('touchmove', onTouchMove, false);
            this.addEventListener('touchend', onTouchEnd, false);
          }
        }

        function onTouchMove(e) {
          dx = (slider.vertical) ? startX - e.touches[0].pageY : startX - e.touches[0].pageX;
          scrolling = (slider.vertical) ? (Math.abs(dx) < Math.abs(e.touches[0].pageX - startY)) : (Math.abs(dx) < Math.abs(e.touches[0].pageY - startY));

          if (!scrolling) {
            e.preventDefault();
            if (slider.vars.animation == "slide" && slider.transitions) {
              if (!slider.vars.animationLoop) {
                dx = dx/((slider.currentSlide == 0 && dx < 0 || slider.currentSlide == slider.count - 1 && dx > 0) ? (Math.abs(dx)/cwidth+2) : 1);
              }
              slider.args[slider.prop] = (slider.vertical) ? "translate3d(0," + (-offset - dx) + "px,0)": "translate3d(" + (-offset - dx) + "px,0,0)";
              slider.container.css(slider.args);
            }
          }
        }
        
        function onTouchEnd(e) {
          slider.animating = false;
          if (slider.animatingTo == slider.currentSlide && !scrolling && !(dx == null)) {
            var target = (dx > 0) ? slider.getTarget('next') : slider.getTarget('prev');
            if (slider.canAdvance(target) && Number(new Date()) - startT < 550 && Math.abs(dx) > 20 || Math.abs(dx) > cwidth/2) {
              slider.flexAnimate(target, slider.vars.pauseOnAction);
            } else {
              slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction);
            }
          }
          
          //Finish the touch by undoing the touch session
          this.removeEventListener('touchmove', onTouchMove, false);
          this.removeEventListener('touchend', onTouchEnd, false);
          startX = null;
          startY = null;
          dx = null;
          offset = null;
        }
      }
      //////////////////////////////////////////////////////////////////
      
      //////////////////////////////////////////////////////////////////
      //FlexSlider: Resize Functions (If necessary)
      if (slider.vars.animation.toLowerCase() == "slide") {
        $(window).resize(function(){
          if (!slider.animating) {
            if (slider.vertical) {
              slider.height(slider.slides.filter(':first').height());
              slider.args[slider.prop] = (-1 * (slider.currentSlide + slider.cloneOffset))* slider.slides.filter(':first').height() + "px";
              if (slider.transitions) {
                slider.setTransition(0);
                slider.args[slider.prop] = (slider.vertical) ? "translate3d(0," + slider.args[slider.prop] + ",0)" : "translate3d(" + slider.args[slider.prop] + ",0,0)";
              }
              slider.container.css(slider.args);
            } else {
              slider.newSlides.width(slider.width());
              slider.args[slider.prop] = (-1 * (slider.currentSlide + slider.cloneOffset))* slider.width() + "px";
              if (slider.transitions) {
                slider.setTransition(0);
                slider.args[slider.prop] = (slider.vertical) ? "translate3d(0," + slider.args[slider.prop] + ",0)" : "translate3d(" + slider.args[slider.prop] + ",0,0)";
              }
              slider.container.css(slider.args);
            }
          }
        });
      }
      //////////////////////////////////////////////////////////////////
      
      //////////////////////////////////////////////////////////////////
      //FlexSlider: Destroy the slider entity
      //Destory is not included in the minified version right now, but this is a working function for anyone who wants to include it.
      //Simply bind the actions you need from this function into a function in the start() callback to the event of your chosing
      /*
      slider.destroy = function() {
        slider.pause();
        if (slider.controlNav && slider.vars.manualControls == "") slider.controlNav.closest('.flex-control-nav').remove();
        if (slider.directionNav) slider.directionNav.closest('.flex-direction-nav').remove();
        if (slider.vars.pausePlay) slider.pausePlay.closest('.flex-pauseplay').remove();
        if (slider.vars.keyboardNav && $('ul.slides').length == 1) $(document).unbind('keyup', keyboardMove);
        if (slider.vars.mousewheel) slider.unbind(slider.mousewheelEvent);
        if (slider.transitions) slider.each(function(){this.removeEventListener('touchstart', onTouchStart, false);});
        if (slider.vars.animation == "slide" && slider.vars.animationLoop) slider.newSlides.filter('.clone').remove();
        if (slider.vertical) slider.height("auto");
        slider.slides.hide();
        slider.removeData('flexslider');
      }
      */
      //////////////////////////////////////////////////////////////////
      
      //FlexSlider: start() Callback
      slider.vars.start(slider);
    }
    
    //FlexSlider: Animation Actions
    slider.flexAnimate = function(target, pause) {
      if (!slider.animating) {
        //Animating flag
        slider.animating = true;
        
        //FlexSlider: before() animation Callback
        slider.animatingTo = target;
        slider.vars.before(slider);
        
        //Optional paramter to pause slider when making an anmiation call
        if (pause) {
          slider.pause();
        }
        
        //Update controlNav   
        if (slider.vars.controlNav) {
          slider.controlNav.removeClass('active').eq(target).addClass('active');
        }
        
        //Is the slider at either end
        slider.atEnd = (target == 0 || target == slider.count - 1) ? true : false;
        if (!slider.vars.animationLoop && slider.vars.directionNav) {
          if (target == 0) {
            slider.directionNav.removeClass('disabled').filter('.prev').addClass('disabled');
          } else if (target == slider.count - 1) {
            slider.directionNav.removeClass('disabled').filter('.next').addClass('disabled');
          } else {
            slider.directionNav.removeClass('disabled');
          }
        }
        
        if (!slider.vars.animationLoop && target == slider.count - 1) {
          slider.pause();
          //FlexSlider: end() of cycle Callback
          slider.vars.end(slider);
        }
        
        if (slider.vars.animation.toLowerCase() == "slide") {
          var dimension = (slider.vertical) ? slider.slides.filter(':first').height() : slider.slides.filter(':first').width();
          
          if (slider.currentSlide == 0 && target == slider.count - 1 && slider.vars.animationLoop && slider.direction != "next") {
            slider.slideString = "0px";
          } else if (slider.currentSlide == slider.count - 1 && target == 0 && slider.vars.animationLoop && slider.direction != "prev") {
            slider.slideString = (-1 * (slider.count + 1)) * dimension + "px";
          } else {
            slider.slideString = (-1 * (target + slider.cloneOffset)) * dimension + "px";
          }
          slider.args[slider.prop] = slider.slideString;

          if (slider.transitions) {
              slider.setTransition(slider.vars.animationDuration); 
              slider.args[slider.prop] = (slider.vertical) ? "translate3d(0," + slider.slideString + ",0)" : "translate3d(" + slider.slideString + ",0,0)";
              slider.container.css(slider.args).one("webkitTransitionEnd transitionend", function(){
                slider.wrapup(dimension);
              });   
          } else {
            slider.container.animate(slider.args, slider.vars.animationDuration, function(){
              slider.wrapup(dimension);
            });
          }
        } else { //Default to Fade
          slider.slides.eq(slider.currentSlide).fadeOut(slider.vars.animationDuration);
          slider.slides.eq(target).fadeIn(slider.vars.animationDuration, function() {
            slider.wrapup();
          });
        }
      }
    }
    
    //FlexSlider: Function to minify redundant animation actions
    slider.wrapup = function(dimension) {
      if (slider.vars.animation == "slide") {
        //Jump the slider if necessary
        if (slider.currentSlide == 0 && slider.animatingTo == slider.count - 1 && slider.vars.animationLoop) {
          slider.args[slider.prop] = (-1 * slider.count) * dimension + "px";
          if (slider.transitions) {
            slider.setTransition(0);
            slider.args[slider.prop] = (slider.vertical) ? "translate3d(0," + slider.args[slider.prop] + ",0)" : "translate3d(" + slider.args[slider.prop] + ",0,0)";
          }
          slider.container.css(slider.args);
        } else if (slider.currentSlide == slider.count - 1 && slider.animatingTo == 0 && slider.vars.animationLoop) {
          slider.args[slider.prop] = -1 * dimension + "px";
          if (slider.transitions) {
            slider.setTransition(0);
            slider.args[slider.prop] = (slider.vertical) ? "translate3d(0," + slider.args[slider.prop] + ",0)" : "translate3d(" + slider.args[slider.prop] + ",0,0)";
          }
          slider.container.css(slider.args);
        }
      }
      slider.animating = false;
      slider.currentSlide = slider.animatingTo;
      //FlexSlider: after() animation Callback
      slider.vars.after(slider);
    }
    
    //FlexSlider: Automatic Slideshow
    slider.animateSlides = function() {
      if (!slider.animating) {
        slider.flexAnimate(slider.getTarget("next"));
      }
    }
    
    //FlexSlider: Automatic Slideshow Pause
    slider.pause = function() {
      clearInterval(slider.animatedSlides);
      if (slider.vars.pausePlay) {
        slider.pausePlay.removeClass('pause').addClass('play').text(slider.vars.playText);
      }
    }
    
    //FlexSlider: Automatic Slideshow Start/Resume
    slider.resume = function() {
      slider.animatedSlides = setInterval(slider.animateSlides, slider.vars.slideshowSpeed);
      if (slider.vars.pausePlay) {
        slider.pausePlay.removeClass('play').addClass('pause').text(slider.vars.pauseText);
      }
    }
    
    //FlexSlider: Helper function for non-looping sliders
    slider.canAdvance = function(target) {
      if (!slider.vars.animationLoop && slider.atEnd) {
        if (slider.currentSlide == 0 && target == slider.count - 1 && slider.direction != "next") {
          return false;
        } else if (slider.currentSlide == slider.count - 1 && target == 0 && slider.direction == "next") {
          return false;
        } else {
          return true;
        }
      } else {
        return true;
      }  
    }
    
    //FlexSlider: Helper function to determine animation target
    slider.getTarget = function(dir) {
      slider.direction = dir;
      if (dir == "next") {
        return (slider.currentSlide == slider.count - 1) ? 0 : slider.currentSlide + 1;
      } else {
        return (slider.currentSlide == 0) ? slider.count - 1 : slider.currentSlide - 1;
      }
    }
    
    //FlexSlider: Helper function to set CSS3 transitions
    slider.setTransition = function(dur) {
      slider.container.css({'-webkit-transition-duration': (dur/1000) + "s"});
    }

    //FlexSlider: Initialize
    slider.init();
  }
  
  //FlexSlider: Default Settings
  $.flexslider.defaults = {
    animation: "fade",              //String: Select your animation type, "fade" or "slide"
    slideDirection: "horizontal",   //String: Select the sliding direction, "horizontal" or "vertical"
    slideshow: true,                //Boolean: Animate slider automatically
    slideshowSpeed: 7000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
    animationDuration: 600,         //Integer: Set the speed of animations, in milliseconds
    directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
    controlNav: true,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
    keyboardNav: true,              //Boolean: Allow slider navigating via keyboard left/right keys
    mousewheel: false,              //Boolean: Allow slider navigating via mousewheel
    prevText: "Previous",           //String: Set the text for the "previous" directionNav item
    nextText: "Next",               //String: Set the text for the "next" directionNav item
    pausePlay: false,               //Boolean: Create pause/play dynamic element
    pauseText: 'Pause',             //String: Set the text for the "pause" pausePlay item
    playText: 'Play',               //String: Set the text for the "play" pausePlay item
    randomize: false,               //Boolean: Randomize slide order
    slideToStart: 0,                //Integer: The slide that the slider should start on. Array notation (0 = first slide)
    animationLoop: true,            //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
    pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
    pauseOnHover: false,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
    controlsContainer: "",          //Selector: Declare which container the navigation elements should be appended too. Default container is the flexSlider element. Example use would be ".flexslider-container", "#container", etc. If the given element is not found, the default action will be taken.
    manualControls: "",             //Selector: Declare custom control navigation. Example would be ".flex-control-nav li" or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
    start: function(){},            //Callback: function(slider) - Fires when the slider loads the first slide
    before: function(){},           //Callback: function(slider) - Fires asynchronously with each slider animation
    after: function(){},            //Callback: function(slider) - Fires after each slider animation completes
    end: function(){}               //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
  }
  
  //FlexSlider: Plugin Function
  $.fn.flexslider = function(options) {
    return this.each(function() {
      if ($(this).find('.slides li').length == 1) {
        $(this).find('.slides li').fadeIn(400);
      }
      else if ($(this).data('flexslider') != true) {
        new $.flexslider($(this), options);
      }
    });
  }  

})(jQuery);;/*******************
Author: Patrick Ryan
URL: http://www.agavegroup.com

Feel free to use this however you like.  Credit is always appreciated.
*******************/

	//need to set a couple of images here:
	imageCheckboxChecked="checkboxChecked.gif";
	imageCheckboxUnchecked="checkboxUnchecked.gif";
	imageRadioChecked="radiobuttonChecked.gif";
	imageRadioUnchecked="radiobuttonUnchecked.gif";
	imageSelectDropDownArrow="selectDrop.gif";
	
	//the rest of the images are in the CSS


	function prettyForms(){
		fixTextBoxes();
		fixTextareas();
		fixSelects();
		fixChecks();
		fixRadios();
		fixSubmits();
	}
	
	
//****
//**** functions that apply the look to the form elements
//****	

	//this function is run for all form elements (except radio buttons)
	//this function accepts one element, and wraps it in four divs that are styled with shadows
	function appendParentsTo(currItem){
		//create the divs
		tl = document.createElement("div");
		br = document.createElement("div");
		bl = document.createElement("div");
		tr = document.createElement("div");

		if(document.all){							//IE
			//give them the proper class
			tl.className="frmShdwTopLt";
			br.className="frmShdwBottomRt";
			bl.className="frmShdwBottomLt";
			tr.className="frmShdwTopRt";
			//insert the top level div
			t1=currItem.insertAdjacentElement("BeforeBegin",tl);
		}else{										//FFX
			//give them the proper class
			tl.setAttribute("class", "frmShdwTopLt");
			br.setAttribute("class", "frmShdwBottomRt");
			bl.setAttribute("class", "frmShdwBottomLt");
			tr.setAttribute("class", "frmShdwTopRt");
			inputParent = currItem.parentNode;
			//insert the top level div
			tl = inputParent.insertBefore(tl, currItem);
		}
		
		//append children
		br = tl.appendChild(br);
		bl = br.appendChild(bl);
		tr = bl.appendChild(tr);
		//move input to child of divs
		tr.appendChild(currItem);
	}


	//apply look to text boxes
	function fixTextBoxes(){
		inputs = document.getElementsByTagName("input");
		for(i=0;i<inputs.length;i++){
			if(inputs[i].type=="text"){
				appendParentsTo(inputs[i]);
			}
		}
	}
	
	//apply look to textareas
	function fixTextareas(){
		textareas = document.getElementsByTagName("textarea")
		for(i=0;i<textareas.length;i++){
			appendParentsTo(textareas[i]);
		}
	}
	
	
	//apply look to submit buttons
	function fixSubmits(){
		inputs = document.getElementsByTagName("input");
		for(i=0;i<inputs.length;i++){
			if(inputs[i].type=="submit"){
				appendParentsTo(inputs[i]);
				inputs[i].className="frmShdwSubmit";
			}
		}
	}
	
	
	//apply look to radio buttons
	function fixRadios(){
		inputs = document.getElementsByTagName("input");
		for(i=0;i<inputs.length;i++){
			if(inputs[i].type=="radio"){
				lnk = document.createElement("a");
				lnk.style.margin="4px";
				lnk.className="frmShdwRadio";
				img = document.createElement("img");
				if(inputs[i].checked==true){
					img.src = imageRadioChecked;
				}else{
					img.src = imageRadioUnchecked;
				}
				
				//elements created, now pass functionality
				//give the checkbox an id if it doesn't have one
				if(inputs[i].id){
					realId = inputs[i].id;
				}else{
					realId = "radio"+i;
					inputs[i].id = realId;
				}
				
				//give the fake check an id
				fakeId = "fake"+realId;
				img.id=fakeId
				
				lnk.href="javascript:toggleRadio('"+realId+"','"+fakeId+"')";
			
				//insert the new image into the document
				if(document.all){				//IE
					lnk = inputs[i].insertAdjacentElement("BeforeBegin",lnk)
				}else{
					inputParent = inputs[i].parentNode;
					lnk = inputParent.insertBefore(lnk,inputs[i]);
				}
				lnk.appendChild(img);
				
				//remove the actual checkbox
				inputs[i].style.display="none";
			}
		}
	}
	
	
	
	//apply look to check boxes
	function fixChecks(){
		inputs = document.getElementsByTagName("input");
		for(i=0;i<inputs.length;i++){
			if(inputs[i].type=="checkbox"){
				appendParentsTo(inputs[i]);
				//have shadow box, now replace checkbox with image of check, or no image.
				//need to create an <a> element AND an <img> element because IE won't happily put an onclick on the img alone
				lnk = document.createElement("a");
				lnk.style.margin="4px";
				lnk.className="frmShdwCheck";
				img = document.createElement("img");
				
				
				if(inputs[i].checked==true){
					img.src = imageCheckboxChecked;
				}else{
					img.src = imageCheckboxUnchecked;
				}
				
				
				//elements created, now pass functionality
				//give the checkbox an id if it doesn't have one
				if(inputs[i].id){
					realId = inputs[i].id;
				}else{
					realId = "check"+i;
					inputs[i].id = realId;
				}
				
				//give the fake check an id
				fakeId = "fake"+realId;
				img.id=fakeId
				
				lnk.href="javascript:toggleCheck('"+realId+"','"+fakeId+"')";
				
				
				//insert the new image into the document
				if(document.all){				//IE
					lnk = inputs[i].insertAdjacentElement("BeforeBegin",lnk)
				}else{
					inputParent = inputs[i].parentNode;
					lnk = inputParent.insertBefore(lnk,inputs[i]);
				}
				lnk.appendChild(img);
				
				//remove the actual checkbox
				inputs[i].style.display="none";
			}
		}
	}
	
	//apply look to select boxes
	function fixSelects(){
		selects = document.getElementsByTagName("select")
		for(i=0;i<selects.length;i++){
			//create the standard shadows
			appendParentsTo(selects[i]);
			
			//give this thing an id if it doesn't have one
			if(selects[i].id==""){
				selects[i].id="dynId"+i;
			}
			
			//create new div to hold list
			//this is a wrapper div to hold everything together
			fakeSelectWrapper = document.createElement("div");
			
			//this is the link that holds the select's drop down arrow
			fakeSelectIcon = document.createElement("a")
			
			if(document.all){				//IE
				fakeSelectIcon.href="javascript:dropDownMenu(\"frmShdwMenu"+i+"\", \"frmShdwMenuChosen"+i+"\",\""+selects[i].id+"\")";
				fakeSelectIcon.innerHTML = "<img class=\"fakeSelectImg\" src=\""+imageSelectDropDownArrow+"\" />";
				//this is the div that actually contains the list of options
				fakeSelect = document.createElement("div");
				fakeSelect.id="frmShdwMenu"+i;
				fakeSelect.className="frmShdwSelectDrop";
				options = selects[i].getElementsByTagName("option");
				//this div is displayed when the box is NOT dropped down.  Shows currently displayed item
				fakeSelectedHolder = document.createElement("a");

				fakeSelectedHolder.className="frmShdwSelectDropChosen";
				fakeSelectedHolder.id="frmShdwMenuChosen"+i;
				fakeSelectedHolder.style.width=selects[i].clientWidth-15+"px";
				fakeSelectedHolder.href="javascript:dropDownMenu(\"frmShdwMenu"+i+"\", \"frmShdwMenuChosen"+i+"\",\""+selects[i].id+"\")";

				
				for(j=0;j<options.length;j++){
					//create a p tag for each element, and append it to the parent div
					fakeOption = document.createElement("a")
					fakeOption.innerHTML = options[j].innerHTML;
					fakeOption.style.width=selects[i].clientWidth-16+"px";
					//here's some crazy IE stuff.
					fakeOption.href='javascript:chooseSelect("'+selects[i].id+'",'+j+',"frmShdwMenu'+i+'", "frmShdwMenuChosen'+i+'")'
					fakeSelect.appendChild(fakeOption);
					//set the default text to show
					if(options[j].selected==true){
						fakeSelectedHolder.innerHTML=options[j].innerHTML;
						fakeOption.className="selected";
					}
				}
				
				//construct the menu parts Wrapper around list of options and image
				fakeSelectWrapper.appendChild(fakeSelectedHolder);
				fakeSelectWrapper.appendChild(fakeSelect);
				fakeSelectWrapper.appendChild(fakeSelectIcon);
				
				//now put the new div inside the shadows, above the select box
				selectParent = selects[i].parentNode;
				fakeSelect.style.width=selects[i].clientWidth-15+"px";
				
				// more crazy IE stuff : push the dropped down menu to the left where it belongs
				fakeSelect.style.margin="3px 3px 3px -"+(selects[i].clientWidth-5)+"px";
				
				
				fakeSelectWrapper = selects[i].insertAdjacentElement("BeforeBegin",fakeSelectWrapper)
				//hide the real select box
				selects[i].style.display="none"; 
				
				
			}else{
				fakeSelectIcon.setAttribute("href","javascript:dropDownMenu(\"frmShdwMenu"+i+"\", \"frmShdwMenuChosen"+i+"\",\""+selects[i].id+"\")");
				fakeSelectIcon.innerHTML = "<img class=\"fakeSelectImg\" src=\""+imageSelectDropDownArrow+"\" />";
				//this is the div that actually contains the list of options
				fakeSelect = document.createElement("div");
				fakeSelect.setAttribute("id","frmShdwMenu"+i);
				fakeSelect.setAttribute("class","frmShdwSelectDrop");
				options = selects[i].getElementsByTagName("option");
				//this div is displayed when the box is NOT dropped down.  Shows currently displayed item
				fakeSelectedHolder = document.createElement("div");
				fakeSelectedHolder.setAttribute("class","frmShdwSelectDropChosen");
				fakeSelectedHolder.setAttribute("id","frmShdwMenuChosen"+i);
				fakeSelectedHolder.style.width=selects[i].clientWidth-15+"px";
				fakeSelectedHolder.setAttribute("onclick","javascript:dropDownMenu(\"frmShdwMenu"+i+"\", \"frmShdwMenuChosen"+i+"\",\""+selects[i].id+"\")");
				
				
				for(j=0;j<options.length;j++){
					//create a p tag for each element, and append it to the parent div
					fakeOption = document.createElement("a")
					fakeOption.innerHTML = options[j].innerHTML;
					fakeOption.setAttribute("href","javascript:chooseSelect(\""+selects[i].id+"\","+j+",\"frmShdwMenu"+i+"\", \"frmShdwMenuChosen"+i+"\")");	//clicking calls the function chooseSelect passing the select object, and the chosen index
					fakeSelect.appendChild(fakeOption);
					
					//set the default text to show
					if(options[j].selected==true){
						fakeSelectedHolder.innerHTML=options[j].innerHTML;
						fakeOption.setAttribute("class","selected");
					}				
				}
				
				//construct the menu parts Wrapper around list of options and image
				fakeSelectWrapper.appendChild(fakeSelectedHolder);
				fakeSelectWrapper.appendChild(fakeSelect);
				fakeSelectWrapper.appendChild(fakeSelectIcon);
				
				//now put the new div inside the shadows, above the select box
				selectParent = selects[i].parentNode;
				fakeSelect.style.width=selects[i].clientWidth-15+"px";
				fakeSelectWrapper = selectParent.insertBefore(fakeSelectWrapper,selects[i]);
				//hide the real select box
				selects[i].style.display="none"; 
			}
		}
	}
	
	
	
	
	
	
//****
//**** functions that apply the functionality to the form elements
//****		
	
	//function runs when a radio button is clicked
	function toggleRadio(realRadioId, fakeRadioId){
		realRadio = document.getElementById(realRadioId);
		fakeRadio = document.getElementById(fakeRadioId);
		//want to ONLY look in the correct form, so get this radio button's parent form (supports multiple forms)
		radioForm = realRadio.parentNode;
		tmpCnt=1;
		while(radioForm.tagName!="FORM"){
			radioForm = radioForm.parentNode;
			tmpCnt++;
			if(tmpCnt>50){
				window.alert("encountered javascript error\n[parentNode]")
				break;
			}
		}	
		inputs=radioForm.getElementsByTagName("input");
		for(i=0;i<inputs.length;i++){
			if(inputs[i].type=="radio"){		
				//IDs look like this:  realId: blah    fakeId: fakeblah
				if(inputs[i].name==realRadio.name){	//is part of the same radio group, uncheck it.
					inputs[i].checked=false;	//uncheck the actual button
					document.getElementById("fake"+inputs[i].id).src=imageRadioUnchecked;
					if(inputs[i].id==realRadioId){
						inputs[i].checked=true;	//check the actual button
						document.getElementById("fake"+inputs[i].id).src=imageRadioChecked;
					}
				}
			}
		}
		
		//**** EVENT HANDLING
		// Clicking the radiobutton equivalent to the button's onClick event and onChange event . fire it.
		triggerEvent(realRadio,"change");
		triggerEvent(realRadio,"click");
	}
	

	//this function handles the actual check box handling
	function toggleCheck(realCheckId, fakeCheckId){
		fakeCheck = document.getElementById(fakeCheckId);
		realCheck = document.getElementById(realCheckId);
		if(fakeCheck.src.indexOf("checkboxChecked.gif") != -1){
			fakeCheck.src = imageCheckboxUnchecked;
		}else{
			fakeCheck.src = imageCheckboxChecked;
		}
		
		if(realCheck.checked==true){
			realCheck.checked=false;
		}else{
			realCheck.checked=true;
		}
		
		//**** EVENT HANDLING
		// Clicking the box equivalent to the box's onClick event and onChange event . fire it.
		triggerEvent(realCheck,"change");
		//NOTE cannot use click event on checkbox - it causes bubbling (that cannot be prevented:mozilla bug?) and the change event gets fired multiple times
		
	}
	
	
	//function runs when drop down arrow next to select box is clicked
	function dropDownMenu(menuId, chosenMenuId, realMenuId){
		//hide the default Text item
		//document.getElementById(chosenMenuId).style.display="none";
		//show the full list
		document.getElementById(menuId).className="frmShdwSelectDropShown";
		
		//**** EVENT HANDLING
		// Clicking the list is equivalent to the selects onClick event. fire it.
		realMenu = document.getElementById(realMenuId);
		if(document.all){
			res = realMenu.fireEvent("onclick");
		}else{
			mouseEvent = document.createEvent('MouseEvents');
			mouseEvent.initMouseEvent('click',true,true,window,1,0,0,0,0,false,false,false,false,0,null);
			realMenu.dispatchEvent(mouseEvent); 
		}
		
	}
	
	//function runs when a drop down item is clicked
	function chooseSelect(chosenSelect,chosenIndex,menuId, chosenMenuId){

		realDropdown = document.getElementById(chosenSelect);
		fakeDropDown = document.getElementById(menuId);
		fakeChosenItem = document.getElementById(chosenMenuId)
		//set the chosen item to be selected in the REAL drop down		
		currSelect = realDropdown.selectedIndex=chosenIndex;
				
		//put the chosen text into the display div
		//for some reason setting innerHTML breaks in IE
		fakeChosenItem.childNodes[0].nodeValue=realDropdown[chosenIndex].innerHTML;
		
		//deselect all the items under the dropdown
		fakeOptions=fakeDropDown.getElementsByTagName("a");
		
		for(i=0;i<fakeOptions.length;i++){
			fakeOptions[i].className="";
			//if this is the selected item, set to selected
			if(fakeOptions[i].innerHTML ==  realDropdown[chosenIndex].innerHTML){
				fakeOptions[i].className="selected";
			}
		}
		
		//hide the rest of the dropdown
		fakeDropDown.className="frmShdwSelectDrop";
		
		//show the display div
		fakeChosenItem.style.display="block";
		
		//**** EVENT HANDLING
		// Choosing an item is equivalent to the selects onChange event. fire it.
		triggerEvent(realDropdown,"change");
		
	}
	
	
	
	
	//function to trigger events that are built into the form elements that have been hidden
	function triggerEvent(obj, evt){
		if(document.all){
			if(evt=="click"){
				res = obj.fireEvent("onclick");
			}else if(evt=="change"){
				res = obj.fireEvent("onchange");
			}
		}else{
			//NOTE - in the mozilla event model, I am cancelling the bubbleUp!  (1st false)
			// this is needed to prevent odd interaction, but could cause other issues!
			if(evt=="click"){
				mouseEvent = document.createEvent('MouseEvents');
				mouseEvent.initMouseEvent('click',true,true,window,1,0,0,0,0,false,false,false,false,0,null);
				obj.dispatchEvent(mouseEvent); 
			}else if(evt=="change"){
				mouseEvent = document.createEvent('HTMLEvents');
				mouseEvent.initEvent('change',true,true,window,1,0,0,0,0,false,false,false,false,0,null);
				obj.dispatchEvent(mouseEvent);
			}
		}
	}
	
;(function($) {
    $.fn.countTo = function(options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;

        return $(this).each(function() {
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() {
                value += increment;
                loopCount++;
                $(_this).html(value.toFixed(options.decimals));

                if (typeof(options.onUpdate) == 'function') {
                    options.onUpdate.call(_this, value);
                }

                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;

                    if (typeof(options.onComplete) == 'function') {
                        options.onComplete.call(_this, value);
                    }
                }
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0,  // the number the element should start at
        to: 100,  // the number the element should end at
        speed: 1000,  // how long it should take to count between the target numbers
        refreshInterval: 100,  // how often the element should be updated
        decimals: 0,  // the number of decimal places to show
        onUpdate: null,  // callback method for every time the element is updated,
        onComplete: null,  // callback method for when the element finishes updating
    };
})(jQuery);;/**
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
;
//Social API Vars
var twitterAPI = $('#twitter');
var instagramAPI = $('#instagram');
var rdioAPI = $('#rdio');
var readmillAPI = $('#readmill');
var twitterID = twitterAPI.prop('id');
var instagramID = instagramAPI.prop('id');
var rdioID = instagramAPI.prop('id');
var readmillID = readmillAPI.prop('id');

$('#readmill').prepend('<div><p id="readmill-book">Currently Reading: Helvetica/ Objectified/ Urbanized: The Complete Interviews</p></div>');

LastFMStatus.init({
    username: "mrathee"
});

// This adds the logo spans which are targetted with symbolset. It is called in api.twitter.js after twitter.html();
function logofyAPI(){
  setTimeout(function(){
    if (instagramActive){
      $(".social-api").prepend('<span class="ss-icon ss-social logo"></span>');
      twitterAPI.find('span.logo').prepend(twitterID);
      instagramAPI.find('span.logo').prepend(instagramID);
      // rdioAPI.find('span.logo').prepend(rdioID);
      readmillAPI.find('span.logo').prepend(readmillID);
      centerAPI();
      activateAPI();
    }
    else{
    	return;
    }
  }, 1000);
}

// Callback function for after API js has run to display the API containers
function activateAPI(){
	$('.social-api').addClass("run");
  trackEvent('home','api bar','init');
  $(".social-api").delay(4500).queue(function(next){
    $(this).addClass('inactive');
    next();
  });
}


function centerAPI(){
  var socialAPI = $('.social-api');
  if ($(window).width() > 768){
    $(socialAPI).each(function() {
        var center = $(this).find('div');
        var h = center.height();
        center.css('margin-top', + h / -2 + 'px');
    });
  }
}

$(window).resize(function() {
  centerAPI();
});

centerAPI();

// Nav Hover
function checkWidth() {
	if ($(window).width() > 769){
		$('#portfolio').hover(function(){
			$('#current, .copy, .dark-shade').addClass('fade');
      trackEvent('global','portfolio sub menu','opened');
		}, function(){
			$('#current, .copy, .dark-shade').removeClass('fade');
      trackEvent('global','portfolio sub menu','closed');
		});
		// TipTip
		$(".tooltip").tipTip({maxWidth: "auto", edgeOffset: 10});
	}
	else{
		$('.copy').removeClass('fade');
	}
};

$(window).resize(function() {
	checkWidth();
});
checkWidth();



// Mobile Nav
var navHook = $('#nav');
var navMenu = $('#navigation');
var body = $('body');

navHook.click(function(e) {
	e.preventDefault();
	e.stopPropagation();
	if (body.hasClass('nav')) {
    body.removeClass('nav');
    trackEvent('global','mobile menu','closed');
 	} else {
		body.addClass('nav');
    trackEvent('global','mobile menu','opened');
 	}
});

navMenu.click(function(e){
	e.stopPropagation();
});

$(document).click(function() {
   if (body.hasClass('nav')){
	   body.removeClass('nav');
   }
});



// Konami Code
// konami = new Konami()
// konami.code = function() {
//     $('body').addClass('konami');
// }
// konami.load()

//Slider
var slider = $('.flexslider');
if (slider) {
  $('.flexslider').flexslider();
}

// TipTip
var toolTip = $(".tooltip");
if (toolTip) {
  $(".tooltip").tipTip({maxWidth: "auto", edgeOffset: 10});
}

// ScrollTop Function
var toTop = $('#top');
toTop.click(function(e) {
	e.preventDefault();
	$('body,html').animate({scrollTop:0},800);
  trackEvent('global','back to top link','page: ' + location.pathname);
});


//Counter
var countNumberValue;
function startCount() {
  $('.count').each(function() {
    countNumberValue = $(this).attr('data-number');
    $(this).countTo({
        from: 0,
        to: countNumberValue,
        speed: 1400,
        refreshInterval: 5,
        onComplete: function(value) {
        }
    });
  });
}
// startCount();

var eventsFired = 0;
$(window).scroll(function() {
  var elem = $('#about-data');
  withinViewport(elem);
  if ($("#about-data").is(":within-viewport")){
	  if (eventsFired == 0) {
  		startCount();
  		eventsFired++;
      trackEvent('about','element watcher','stats-view');
  	}
  }
});


// Twitter Button
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
