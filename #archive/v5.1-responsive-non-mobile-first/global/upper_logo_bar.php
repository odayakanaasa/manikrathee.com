	<div class="row">
		<div class="upper_logo_bar">
			<?php if ($upper=='white') { echo '
				<a href="http://manikrathee.com/" class="logo tooltip logo-light" title="Click to go home."></a>
			'; } ?>
			<?php if ($upper=='dark') { echo '
				<a href="http://manikrathee.com/" class="logo tooltip logo-dark" title="Click to go home."></a>
			'; } ?>

			<ul id="nav" class="full_nav <!-- <?php if ($upper=='white') { echo 'white'; } ?><?php if ($upper=='dark') { echo 'dark'; } ?>  --> ">
				<div class="nav_bar_center">
					<li><a href="interior_catalyst.php" alt="View Project: CATALYST iOS Theme">Catalyst iOS</a></li>
					<li><a href="interior_mrphoto.php" alt="View Project: Manik Rathee Photography">Manik Rathee Photography</a></li>
					<li><a href="interior_hope.php" alt="View Project: Hope Will See Us Through">Hope Will See Us Through</a></li>
					<li><a href="interior_wrap.php" alt="View Project: Wrapskins">Wrapskins</a></li>
					<li><a href="interior_livescribe.php" alt="View Project: LiveScribe Smartpen">Livescribe</a></li>
					<li><a href="interior_universalshanti.php" alt="View Project: Universal Shanti">Universal Shanti</a></li>
					<li><a href="interior_blog.php" alt="View Project: Blog">Blog</a></li>
				<div class="clear"></div>
				</div>
			</ul>
			<div class="mobile_nav">
				<form id="page-changer" action="" method="post">
				    <select name="nav">
				        <option value="">Choose Project:</option>
				        <option value="interior_catalyst.php">Catalyst iOS</option>
				        <option value="interior_mrphoto.php">Manik Rathee Photography</option>
				        <option value="interior_hope.php">Hope Will See Us Through</option>
						<option value="interior_wrap.php">Wrapskins</option>
						<option value="interior_livescribe.php">Livescribe</option>
						<option value="interior_universalshanti.php">Universal Shanti</option>
						<option value="interior_blog.php">Manik Rathee's Blog</option>
				    </select>
				    <input type="submit" value="Go" id="submit" />
				</form>
			</div>
		</div>
		<div class="clear"></div>
	</div>
