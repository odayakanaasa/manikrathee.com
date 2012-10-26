//@codekit-prepend "libs/jquery-1.8.2.min.js","libs/jquery.backstretch.js","libs/jquery.fittext.js","libs/jquery.flexslider.js","libs/jquery.api.instagram.js","libs/jquery.api.twitter.js","libs/jquery.twitter.js","libs/jquery.prettyForms.js","libs/jquery.tipTip.js";

// "libs/ss-social.js", "libs/ss-standard.js", "libs/jquery.lettering.js", "libs/jquery.api.rdio.js"

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
		if ($('body').attr('id','home')){
			// $.backstretch("http://www.manikrathee.com/images/home/background.jpg");
		}
		// TipTip
		$(".tooltip").tipTip({maxWidth: "auto", edgeOffset: 10});
	}
	else{
		$.backstretch("");
		$('.copy').removeClass('fade');
	}
};
$(window).resize(function() {
	checkWidth();
});
checkWidth();



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

$('.flexslider').flexslider();

$(".tooltip").tipTip({maxWidth: "auto", edgeOffset: 10});
var toTop = $('#top');
toTop.click(function(e) {
	e.preventDefault();
	$('body,html').animate({scrollTop:0},800);
});	

$(".interior h2").fitText(1.2);
$(".interior h3").fitText(0.75);
$(".interior h3#fit").fitText(0.9);

// $.ajax({
// 	"type": "GET",
// 	"url": 'http://boomingsystem.com/api/v1/feed/',
// 	"cache": false,
// 	"dataType": "text",
// 	"complete": function(r) {
// 		console.log(JSON.parse(r.responseText));
// 	}
// });


// Instagram API
instagramFeed.embed({
	username: 'manikrathee',
	count: 1,
	container: 'instagram'
});


// Social API
$(".social-api").delay(4500).queue(function(next){
	$(this).addClass('inactive');
	next();
});

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