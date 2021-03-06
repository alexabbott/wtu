<nav>
	<div class="nav__main no-opacity">
		<a href="/#top" id="nav__home" ng-click="closeNav()">
			<img ng-src="{{ data.nav_logo.url }}" class="nav__logo nav__logo-main animated">
		</a>
		<div class="hamburger" ng-click="openCloseNav()">
			<div class="nav-icon mobile-only" ng-class="{ 'open': navOpen }">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
		<div class="nav__items animated" ng-class="{'mobile-hide': !navOpen}" ng-click="openCloseNav()">
			<a href="/#work" class="nav__item">
				{{ data.nav_item_1 }}
			</a>
			<a href="/about" class="nav__item">
				{{ data.nav_item_2 }}
			</a>
			<a href="/contact" class="nav__item">
				{{ data.nav_item_3 }}
			</a>
			<div class="mobile-only sign-up-container" ng-class="{'mobile-hide': !navOpen}">
				<!-- Begin MailChimp Signup Form -->
				<link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
				<style type="text/css">
					#mc_embed_signup{clear:left; font:14px Helvetica,Arial,sans-serif; }
					/* Add your own MailChimp form style overrides in your site stylesheet or in this style block.
					We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
				</style>
				<div id="mc_embed_signup" ng-init="showSignup = false" class="mc_embed">
					<div class="sign-up-cta mobile-only" ng-class="{ 'no-opacity': showSignup }">
						subscribe to our newsletter by <span ng-click="showSignup = true; $event.stopPropagation();">clicking here</span>.
					</div>
					<div class="sign-up-inner" ng-class="{ 'no-opacity': !showSignup }">
						<div class="close-sign-up" ng-click="showSignup = false; $event.stopPropagation();">&times;</div>
						<form action="//wethem.us11.list-manage.com/subscribe/post?u=2122096652b1fdafa1fb8d8fb&amp;id=6349bb504e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
							<div id="mc_embed_signup_scroll">
								<div class="mc-field-group" ng-click="$event.stopPropagation();">
									<input type="email" placeholder="type your email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
								</div>
								<div id="mce-responses" class="clear">
									<div class="response" id="mce-error-response" style="display:none"></div>
									<div class="response" id="mce-success-response" style="display:none"></div>
								</div>
								<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
								<div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_2122096652b1fdafa1fb8d8fb_6349bb504e" tabindex="-1" value=""></div>
								<div class="clear"><input ng-click="$event.stopPropagation();" type="submit" value="sign up" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
							</div>
						</form>
					</div>
				</div>
				<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
				<!--End mc_embed_signup-->
			</div>
		</div>
		<a ng-href="/internal" class="nav__white-rabbit mobile-hide">
			<img ng-src="{{ data.white_rabbit_image.url }}" class="nav__white-rabbit__image animated" alt="white rabbit">
		</a>
		<div class="nav__socials mobile-hide animated" ng-class="{'mobile-hide': !navOpen}">
			<a target="_blank" ng-href="{{ data.facebook_link }}">
				<i class="fa fa-facebook" aria-hidden="true"></i>
			</a>
			<a target="_blank" ng-href="{{ data.twitter_link }}">
				<i class="fa fa-twitter" aria-hidden="true"></i>
			</a>
			<a target="_blank" ng-href="{{ data.instagram_link }}">
				<i class="fa fa-instagram" aria-hidden="true"></i>
			</a>
			<a target="_blank" ng-href="{{ data.snapchat_link }}">
				<i class="fa fa-snapchat-ghost" aria-hidden="true"></i>
			</a>
		</div>
	</div>
</nav>