<div class="contact">
    <section id="contact" class="contact">
  		<div class="contact__container">
	    	<div class="contact__text-container">
			    <h2 class="contact__text contact__text-1">{{ data.contact_text_1 }}</h2>
			    <h2 class="contact__text-2">{{ data.contact_text_1 }}</h2>
			    <h2 class="contact__text-3">{{ data.contact_text_1 }}</h2>
			    <h2 class="contact__text-4">{{ data.contact_text_1 }}</h2>
			    <h2 class="contact__text-5">{{ data.contact_text_1 }}</h2>
			</div>
		    <a href="mailto:{{ data.contact_email }}" class="contact__email">
		    	<h2>{{ data.contact_text_2 }}</h2>
		    </a>
		</div>

		<!-- Begin MailChimp Signup Form -->
		<link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
		<style type="text/css">
			#mc_embed_signup{clear:left; font:14px Helvetica,Arial,sans-serif; }
			/* Add your own MailChimp form style overrides in your site stylesheet or in this style block.
			We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
		</style>
		<div id="mc_embed_signup" ng-init="showSignup = false" class="mc_embed">
			<div class="sign-up-cta" ng-class="{ 'no-opacity': showSignup }">
				subscribe to our newsletter by <span ng-click="showSignup = true">clicking here</span>.
			</div>
			<div class="sign-up-inner" ng-class="{ 'no-opacity': !showSignup }">
				<div class="close-sign-up" ng-click="showSignup = false">&times;</div>
				<form action="//wethem.us11.list-manage.com/subscribe/post?u=2122096652b1fdafa1fb8d8fb&amp;id=6349bb504e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
					<div id="mc_embed_signup_scroll">
						<div class="mc-field-group">
							<input type="email" placeholder="type your email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
						</div>
						<div id="mce-responses" class="clear">
							<div class="response" id="mce-error-response" style="display:none"></div>
							<div class="response" id="mce-success-response" style="display:none"></div>
						</div>
						<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
						<div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_2122096652b1fdafa1fb8d8fb_6349bb504e" tabindex="-1" value=""></div>
						<div class="clear"><input type="submit" value="sign up" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
					</div>
				</form>
			</div>
		</div>
		<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
		<!--End mc_embed_signup-->
    </section>
</div>
