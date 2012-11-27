//@codekit-prepend "libs/jquery-1.8.2.min.js";
//@codekit-prepend "libs/jquery.backstretch.js";
//@codekit-prepend "libs/jquery.fittext.js";
//@codekit-prepend "libs/jquery.flexslider.js";
//@codekit-prepend "libs/jquery.api.instagram.js";
//@codekit-prepend "libs/jquery.api.twitter.js";
//@codekit-prepend "libs/jquery.twitter.js";
//@codekit-prepend "libs/jquery.prettyForms.js";
//@codekit-prepend "libs/jquery.tipTip.js";
//@codekit-prepend "konami.js";

// "libs/ss-social.js", "libs/ss-standard.js", "libs/jquery.lettering.js", "libs/jquery.api.rdio.js"

//Social API Vars
var twitterAPI = $('#twitter');
var instagramAPI = $('#instagram');
var rdioAPI = $('#rdio');
var readmillAPI = $('#readmill');
var twitterID = $('#twitter').prop('id');
var instagramID = $('#instagram').prop('id');
var rdioID = $('#rdio').prop('id');
var readmillID = $('#readmill').prop('id');

// This adds the logo spans which are targetted with symbolset. It is called in api.twitter.js after twitter.html();
function logofyAPI(){
    setTimeout(function(){
        if (instagramActive = true){
        	console.log('instagrammmmmm', instagramActive);
        	$(".social-api").prepend('<span class="ss-icon logo"></span>');
        	twitterAPI.find('span.logo').prepend(twitterID);
        	instagramAPI.find('span.logo').prepend(instagramID);
        	rdioAPI.find('span.logo').prepend(rdioID);
        	readmillAPI.find('span.logo').prepend(readmillID);
        	activateAPI();
        }
        else{
        	console.log('not true yet');
        	return;
        }
    }, 1000);
 }
 
 // Callback function for after API js has run to display the API containers
 function activateAPI(){
 	$('.social-api').addClass("run");
	$(".social-api").delay(6500).queue(function(next){
		$(this).addClass('inactive');
		next();
	});
 }

//readmill
// $.ajax({
// 	"type": "GET",
// 	"url": 'https://readmill.com/oauth/authorize?response_type=code&client_id=ad3a96ebfbdc00703a8f332d7311c737&redirect_uri=http://dev.manikrathee.com/v5-6',
// 	"cache": true,
// 	"type": "jsonp",
// 	"complete": function(r) {
// 		console.log(r);
// 	}
// });

// $.ajax({
// 	"type": "POST",
// 	"url": 'https://readmill.com/oauth/token?grant_type=authorization_code&client_id=ad3a96ebfbdc00703a8f332d7311c737&client_secret=fb47dca72c0ee77b6a7e4605b3081ada&redirect_uri=http://dev.manikrathee.com/v5-6/callback&code=20bd3f5233c2719aad05c187057b278a',
// 	"cache": true,
// 	"type": "jsonp",
// 	"complete": function(r) {
// 		console.log(r);
// 	}
// });

// Nav Hover
function checkWidth() {
	if ($(window).width() > 769){
		$('#portfolio').hover(function(){
			$('.copy').addClass('fade');
			$('#current').addClass('fade');
		}, function(){
			$('.copy').removeClass('fade');
			$('#current').removeClass('fade');
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

navHook.click(function(e){
	e.preventDefault();
	e.stopPropagation();
	if (navMenu.hasClass('show')){
	   navMenu.removeClass('show');
   	}
   	else{
		navMenu.addClass('show');
   	}
});

navMenu.click(function(e){
	e.stopPropagation();
});

$(document).click(function() {
   if (navMenu.hasClass('show')){
	   navMenu.removeClass('show');
   }
});


// Rdio API
// R.ready(function() {
// 	R.request({
// 		method: "getTopCharts",
// 		content: {
// 		type: "Track", 
// 		start: 0, 
// 		count: 1
// 		},
// 		success: function(response) {
// 			var top = response.result[0];
// 			console.log(top.name + " by " + top.artist);
// 		},
// 		error: function(response) {
// 			console.log("error");
// 		}
// 	});
// });


//Slider
$('.flexslider').flexslider();


// TipTip
$(".tooltip").tipTip({maxWidth: "auto", edgeOffset: 10});


// ScrollTop Function
var toTop = $('#top');
toTop.click(function(e) {
	e.preventDefault();
	$('body,html').animate({scrollTop:0},800);
});	


//FitText
// $(".interior h2").fitText(1.2);
$(".interior h3").fitText();
$(".interior h3#fit").fitText(0.9);


// Twitter Button
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
 
 
 // Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-19400273-3']);
_gaq.push(['_trackPageview']);
(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();