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
    // rdioActive = true;
    // centerAPI();
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
// @"instagram://location?id=1
// https://instagram.com/developer/iphone-hooks/



;/***
 * Twitter JS v1.13.1
 * http://code.google.com/p/twitterjs/
 * Copyright (c) 2009 Remy Sharp / MIT License
 * $Date: 2009-08-25 09:45:35 +0100 (Tue, 25 Aug 2009) $
 */
if(typeof renderTwitters!='function')(function(){var j=(function(){var b=navigator.userAgent.toLowerCase();return{webkit:/(webkit|khtml)/.test(b),opera:/opera/.test(b),msie:/msie/.test(b)&&!(/opera/).test(b),mozilla:/mozilla/.test(b)&&!(/(compatible|webkit)/).test(b)}})();var k=0;var n=[];var o=false;var p=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];window.ify=function(){var c={'"':'&quot;','&':'&amp;','<':'&lt;','>':'&gt;'};return{"link":function(t){return t.replace(/[a-z]+:\/\/[a-z0-9-_]+\.[a-z0-9-_:~%&\?\/.=]+[^:\.,\)\s*$]/ig,function(m){return'<a href="'+m+'">'+((m.length>25)?m.substr(0,24)+'...':m)+'</a>'})},"at":function(t){return t.replace(/(^|[^\w]+)\@([a-zA-Z0-9_]{1,15})/g,function(m,a,b){return a+'@<a href="http://twitter.com/'+b+'">'+b+'</a>'})},"hash":function(t){return t.replace(/(^|[^\w'"]+)\#([a-zA-Z0-9_]+)/g,function(m,a,b){return a+'#<a href="http://search.twitter.com/search?q=%23'+b+'">'+b+'</a>'})},"clean":function(a){return this.hash(this.at(this.link(a)))}}}();window.renderTwitters=function(a,b){function node(e){return document.createElement(e)}function text(t){return document.createTextNode(t)}var c=document.getElementById(b.twitterTarget);var d=null;var f=node('ul'),li,statusSpan,timeSpan,i,max=a.length>b.count?b.count:a.length;for(i=0;i<max&&a[i];i++){d=getTwitterData(a[i]);if(b.ignoreReplies&&a[i].text.substr(0,1)=='@'){max++;continue}li=node('li');if(b.template){li.innerHTML=b.template.replace(/%([a-z_\-\.]*)%/ig,function(m,l){var r=d[l]+""||"";if(l=='text'&&b.enableLinks)r=ify.clean(r);return r})}else{statusSpan=node('span');statusSpan.className='twitterStatus';timeSpan=node('span');timeSpan.className='twitterTime';statusSpan.innerHTML=a[i].text;if(b.enableLinks==true){statusSpan.innerHTML=ify.clean(statusSpan.innerHTML)}timeSpan.innerHTML=relative_time(a[i].created_at);if(b.prefix){var s=node('span');s.className='twitterPrefix';s.innerHTML=b.prefix.replace(/%(.*?)%/g,function(m,l){return a[i].user[l]});li.appendChild(s);li.appendChild(text(' '))}li.appendChild(statusSpan);li.appendChild(text(' '));li.appendChild(timeSpan)}if(b.newwindow){li.innerHTML=li.innerHTML.replace(/<a href/gi,'<a target="_blank" href')}f.appendChild(li)}if(b.clearContents){while(c.firstChild){c.removeChild(c.firstChild)}}c.appendChild(f);if(typeof b.callback=='function'){b.callback()}};window.getTwitters=function(e,f,g,h){k++;if(typeof f=='object'){h=f;f=h.id;g=h.count}if(!g)g=1;if(h){h.count=g}else{h={}}if(!h.timeout&&typeof h.onTimeout=='function'){h.timeout=10}if(typeof h.clearContents=='undefined'){h.clearContents=true}if(h.withFriends)h.withFriends=false;h['twitterTarget']=e;if(typeof h.enableLinks=='undefined')h.enableLinks=true;window['twitterCallback'+k]=function(a){if(h.timeout){clearTimeout(window['twitterTimeout'+k])}renderTwitters(a,h)};ready((function(c,d){return function(){if(!document.getElementById(c.twitterTarget)){return}var a='http://www.twitter.com/statuses/'+(c.withFriends?'friends_timeline':'user_timeline')+'/'+f+'.json?callback=twitterCallback'+d+'&count=20&cb='+Math.random();if(c.timeout){window['twitterTimeout'+d]=setTimeout(function(){if(c.onTimeoutCancel)window['twitterCallback'+d]=function(){};c.onTimeout.call(document.getElementById(c.twitterTarget))},c.timeout*1000)}var b=document.createElement('script');b.setAttribute('src',a);document.getElementsByTagName('head')[0].appendChild(b)}})(h,k))};DOMReady();function getTwitterData(a){var b=a,i;for(i in a.user){b['user_'+i]=a.user[i]}b.time=relative_time(a.created_at);return b}function ready(a){if(!o){n.push(a)}else{a.call()}}function fireReady(){o=true;var a;while(a=n.shift()){a.call()}}function DOMReady(){if(document.addEventListener&&!j.webkit){document.addEventListener("DOMContentLoaded",fireReady,false)}else if(j.msie){document.write("<scr"+"ipt id=__ie_init defer=true src=//:><\/script>");var a=document.getElementById("__ie_init");if(a){a.onreadystatechange=function(){if(this.readyState!="complete")return;this.parentNode.removeChild(this);fireReady.call()}}a=null}else if(j.webkit){var b=setInterval(function(){if(document.readyState=="loaded"||document.readyState=="complete"){clearInterval(b);b=null;fireReady.call()}},10)}}function relative_time(c){var d=c.split(" "),parsed_date=Date.parse(d[1]+" "+d[2]+", "+d[5]+" "+d[3]),date=new Date(parsed_date),relative_to=(arguments.length>1)?arguments[1]:new Date(),delta=parseInt((relative_to.getTime()-parsed_date)/1000),r='';function formatTime(a){var b=a.getHours(),min=a.getMinutes()+"",ampm='AM';if(b==0){b=12}else if(b==12){ampm='PM'}else if(b>12){b-=12;ampm='PM'}if(min.length==1){min='0'+min}return b+':'+min+' '+ampm}function formatDate(a){var b=a.toDateString().split(/ /),mon=p[a.getMonth()],day=a.getDate()+'',dayi=parseInt(day),year=a.getFullYear(),thisyear=(new Date()).getFullYear(),th='th';if((dayi%10)==1&&day.substr(0,1)!='1'){th='st'}else if((dayi%10)==2&&day.substr(0,1)!='1'){th='nd'}else if((dayi%10)==3&&day.substr(0,1)!='1'){th='rd'}if(day.substr(0,1)=='0'){day=day.substr(1)}return mon+' '+day+th+(thisyear!=year?', '+year:'')}delta=delta+(relative_to.getTimezoneOffset()*60);if(delta<5){r='less than 5 seconds ago'}else if(delta<30){r='half a minute ago'}else if(delta<60){r='less than a minute ago'}else if(delta<120){r='1 minute ago'}else if(delta<(45*60)){r=(parseInt(delta/60)).toString()+' minutes ago'}else if(delta<(2*90*60)){r='about 1 hour ago'}else if(delta<(24*60*60)){r='about '+(parseInt(delta/3600)).toString()+' hours ago'}else{if(delta<(48*60*60)){r=formatTime(date)+' yesterday'}else{r=formatTime(date)+' '+formatDate(date)}}return r}})();;/**
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

LastFMStatus.init({
    username: "mrathee"
});


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
	}
	else{
		$('.copy').removeClass('fade');
	}
};

$(window).resize(function() {
	checkWidth();
});
checkWidth();



// Twitter Button
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");






(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-19400273-5', 'auto');
ga('send', 'pageview');


function trackEvent(cat, action, label){
  if (cat && action && label) {
    ga('send', 'event', cat, action, label);
  }
}


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
