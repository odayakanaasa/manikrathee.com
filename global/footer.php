	<a id="top" class="ss-icon" href="#" title="Back To The Top">Up <span>To the top</span></a>

	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js"></script>
	<script>!window.jQuery && document.write(unescape('%3Cscript src="js/libs/jquery-1.5.1.min.js"%3E%3C/script%3E'))</script>
	<script src="js/plugins.js"></script>
	<script src="js/script.js"></script>
	<script type="text/javascript" src="js/css3-mediaqueries.js"></script>
	<!--[if lt IE 7 ]>
	<script src="js/libs/dd_belatedpng.js"></script>
	<script> DD_belatedPNG.fix('img, .png_bg');</script>
	<![endif]-->
	<script src="js/jquery.fittext.js"></script>
	<script src="js/jquery.flexslider.js"></script>
    <script src="js/jquery.backstretch.js"></script>
    <script src="js/prettyForms.js"></script>
    <script src="js/jquery.tipTip.js"></script>
    <script type="text/javascript">
		$(window).load(function() {
		   $("#home_title").fitText(0.55);
		   $("h2").fitText(1.2);
		   $("h3").fitText(0.75);
		   $("h3#fit").fitText(0.9);
		   $("#fit_mobile_glance").fitText(1.5);
		   $('.flexslider').flexslider();

			setTimeout(function(){
				window.scrollTo(0, 1);
			}, 0);

			$("#submit").hide();
		    $("#page-changer select").change(function() {
		        window.location = $("#page-changer select option:selected").val();
		    })
			$(".tooltip").tipTip({maxWidth: "auto", edgeOffset: 10});
		 });
		

        $(function() {
            $(window).scroll(function(){
				var scrollTop = $(window).scrollTop();
				if(scrollTop != 0)
					$('#nav').stop().animate({'opacity':'0.2'},400);
				else	
					$('#nav').stop().animate({'opacity':'1'},400);
			});
				
			$('#nav').hover(
				function (e) {
					var scrollTop = $(window).scrollTop();
					if(scrollTop != 0){
						$('#nav').stop().animate({'opacity':'1'},400);
					}
				},
				function (e) {
					var scrollTop = $(window).scrollTop();
					if(scrollTop != 0){
						$('#nav').stop().animate({'opacity':'0.2'},400);
					}
				}
			);
        });

		$(function() {
			var toTop = $('#top');
			toTop.click(function() {
				$('body,html').animate({scrollTop:0},800);
			});	
		});

		var _gaq = _gaq || [];
		_gaq.push(['_setAccount', 'UA-19400273-3']);
		_gaq.push(['_trackPageview']);

		(function() {
			var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		})();
	</script>
	
</body>
</html>