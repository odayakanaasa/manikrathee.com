<nav id="<?php if ($upper=='dark') { echo 'dark'; } ?><?php if ($upper=='white') { echo 'light'; } ?>" class="global-nav">
	<div id="logo"<?php if ($upper=='white') { echo ' class="white"'; } ?><?php if ($upper=='dark') { echo ' class="dark"'; } ?>"></div>
	<a id="nav" href="#"><span class="ss-icon">Rows</span> Navigation</a>
	<ul id="navigation">
		<li><a<?php if ($section=='home') { echo ' class="current"'; } ?> href="index.php" title="Home">Home</a></li>
		<li><a<?php if ($section=='about') { echo ' class="current"'; } ?> href="about.php" title="About Manik Rathee">About</a></li>
		<li id="portfolio"><a <?php if ($project=='true') { echo ' class="current"'; } ?>href="#" title="Portfolio">Portfolio</a>
			<ul id="projects">
				<li><a<?php if ($section=='barackobama') { echo ' class="current"'; } ?> href="barack-obama.php" title="BarackObama.com">BarackObama.com</a></li>
				<li><a<?php if ($section=='contribute') { echo ' class="current"'; } ?> href="barack-obama-contribute.php" title="Contribute.BarackObama.com">Contribute.BarackObama.com</a></li>
				<li><a<?php if ($section=='calltool') { echo ' class="current"'; } ?> href="barack-obama-call-tool.php" title="Barack Obama Call Tool">Barack Obama Call Tool</a></li>
				<li><a<?php if ($section=='catalyst') { echo ' class="current"'; } ?> href="catalyst-iphone-theme.php" title="CATALYST - Minimal iPhone Theme">Catalyst iOS Theme</a></li>
				<li><a<?php if ($section=='hope') { echo ' class="current"'; } ?> href="hope-will-see-us-through.php" title="Hope Will See Us Through">Hope Will See Us Through</a></li>
				<li><a<?php if ($section=='mrphoto') { echo ' class="current"'; } ?> href="manik-rathee-photography.php" title="Manik Rathee Photography">Manik Rathee Photography</a></li>
				<li><a<?php if ($section=='wrap') { echo ' class="current"'; } ?> href="wrapskins.php" title="Wrapskins">Wrapskins</a></li>
				<li><a<?php if ($section=='livescribe') { echo ' class="current"'; } ?> href="livescribe.php" title="Livescribe">Livescribe</a></li>
				<li><a<?php if ($section=='universalshanti') { echo ' class="current"'; } ?> href="universal-shanti.php" title="Universal Shanti">Universal Shanti</a></li>
				<li><a<?php if ($section=='blog') { echo ' class="current"'; } ?> href="manik-rathee-blog.php" title="Blog.ManikRathee">Blog</a></li>
			</ul>
		</li>
		<li><a href="http://blog.manikrathee.com/" title="Blog.ManikRathee.com">Blog</a></li>
		<!-- <li><a<?php if ($section=='contact') { echo ' class="current"'; } ?> href="contact.php" title="Contact Me">Contact</a></li> -->
		<li><a<?php if ($section=='resources') { echo ' class="current"'; } ?> href="resources.php" title="Resources">Resources</a></li>
	</ul>
	<p id="current"<?php if ($project=='false') { echo 'class=" hide"'; } ?>><?php if ($section=='barackobama') { echo 'BarackObama.com'; } ?><?php if ($section=='contribute') { echo 'Contribute.BarackObama.com'; } ?><?php if ($section=='calltool') { echo 'Barack Obama Call Tool'; } ?><?php if ($section=='hope') { echo 'Hope Will See Us Through'; } ?><?php if ($section=='mrphoto') { echo 'Manik Rathee Photography'; } ?><?php if ($section=='wrap') { echo 'Wrapskins'; } ?><?php if ($section=='livescribe') { echo 'LiveScribe Smartpen'; } ?><?php if ($section=='universalshanti') { echo 'Universal Shanti'; } ?><?php if ($section=='blog') { echo 'Blog.ManikRathee.com'; } ?><?php if ($section=='catalyst') { echo 'Catalyst iOS Theme'; } ?></p>
</nav>


