<div class="home">
  <h1 class="hidden" smooth-scroll duration="3000" easing="easeInQuint">WeThem.Us</h1>

  <section class="intro__bg">
		<img ng-src="{{ data.intro_image.url }}" class="intro__image">
		<div class="intro__gradient"></div>
	</section>

	<div id="intro-indicator"></div>

    <section id="intro" class="intro">
    	<div class="intro__container">
	    	<img ng-src="{{ data.intro_big_logo.url }}" class="intro__big-logo no-opacity low-position" alt="WeThem.Us">
	    	<div class="intro__text" ng-bind-html="data.intro_text"></div>
	    	<div class="intro__scroll-down no-opacity" scroll-to="about-indicator">
	    		{{ data.intro_scroll_down_text }}
	    		<img ng-src="{{ data.intro_scroll_down_arrow.url }}" class="intro__scroll-down-arrow" alt="{{ data.intro_scroll_down_text }}">
	    	</div>
	    </div>
    </section>

    <img ng-src="{{ data.pink_blotch.url }}" class="pink-blotch">

    <section id="about-intro" class="about-intro no-opacity" ng-init="showImage = '1blur'">
    	<div class="about-intro__container">
	    	<div class="about-intro__image-container">
	    		<div class="about-intro__image-box">
			    	<img ng-src="{{ data.about_image_1.url }}" ng-show="showImage == '1clear'" class="about-intro__image-1 clear" alt="{{ data.about_text_1 }}">
			    	<img ng-src="{{ data.about_image_blur_1.url }}" ng-show="showImage == '1blur'" class="about-intro__image-blur-1 blur" alt="{{ data.about_text_1 }}">
			    	<h3 class="about-intro__image-text">
			    		{{ data.about_text_1 }}
			    	</h3>
			    </div>
			    <div class="about-intro__image-box">
			    	<img ng-src="{{ data.about_image_2.url }}" ng-show="showImage == '2clear'" class="about-intro__image-2" alt="{{ data.about_text_2 }}">
			    	<img ng-src="{{ data.about_image_blur_2.url }}" ng-show="showImage == '2blur'" class="about-intro__image-blur-2" alt="{{ data.about_text_2 }}">
			    	<h3 class="about-intro__image-text">
			    		{{ data.about_text_2 }}
			    	</h3>
			    </div>
		    	<div class="about-intro__image-box">
			    	<img ng-src="{{ data.about_image_3.url }}" ng-show="showImage == '3clear'" class="about-intro__image-3" alt="{{ data.about_text_3 }}">
			    	<img ng-src="{{ data.about_image_blur_3.url }}" ng-show="showImage == '3blur'" class="about-intro__image-blur-3" alt="{{ data.about_text_3 }}">
			    	<h3 class="about-intro__image-text">
			    		{{ data.about_text_3 }}
			    	</h3>
			    </div> 
		    </div>

		    <div class="about-intro__text">
	    		<h2 class="about-intro__text-1" ng-mouseenter="changeImageBlur('1clear')" ng-mouseleave="changeImageBlur('1blur')">{{ data.about_text_1 }}</h2>
	    		<h2 class="about-intro__text-2" ng-mouseenter="changeImageBlur('2clear')" ng-mouseleave="changeImageBlur('2blur')">{{ data.about_text_2 }}</h2>
	    		<h2 class="about-intro__text-3" ng-mouseenter="changeImageBlur('3clear')" ng-mouseleave="changeImageBlur('3blur')">{{ data.about_text_3 }}</h2>
	    	</div>
	    </div>
    </section>

    <div id="about-indicator"></div>

    <section id="about" class="about no-opacity">
    	<div class="about__container">
	    	<div class="about__text">
			    <div ng-bind-html="data.about_paragraph" class="about__text-main"></div>
			    <div class="about__bottom-headline fade-in-out">{{ data.about_bottom_headline }}</div>
			    <img ng-src="{{ data.about_gif_1.url }}" class="about__gif about__gif-1 hidden">
			    <img ng-src="{{ data.about_gif_2.url }}" class="about__gif about__gif-2 hidden">
			    <img ng-src="{{ data.about_gif_3.url }}" class="about__gif about__gif-3 hidden">
			    <img ng-src="{{ data.about_gif_4.url }}" class="about__gif about__gif-4 hidden">
				</div>
				<marquee direction="left" scrollamount="20">
				    <h2 class="about__scroll-text">{{ data.about_scroll_text }}</h2>
				</marquee>
			</div>
    </section>

    <div id="projects-indicator"></div>

    <section id="projects" class="projects">
    	<div class="projects__container no-opacity">
    		<div ng-repeat="project in portfolio" class="projects__marquee-box">
	    		<div class="projects__marquee">
	    			<a href="/{{ project.slug }}"
               class="projects__link uppercase"
               ng-repeat="i in [1,2,3,4,5]"
               ng-mouseenter="showBg($index)"
               ng-mouseleave="hideBg($index)">
               {{ project.acf.short_title }}
            </a> <a href="/{{ project.slug }}"
               class="projects__link uppercase"
               ng-repeat="i in [1,2,3,4,5]"
               ng-mouseenter="showBg($index)"
               ng-mouseleave="hideBg($index)">
               {{ project.acf.short_title }}
            </a>
	    		</div>
	    		<div class="projects__bg no-opacity" style="background-image: url({{ project.acf.bg_img }});">
	    		</div>
    		</div>
    	</div>
    </section>

    <div id="contact-indicator"></div>

    <section id="contact" class="contact no-opacity">
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
			#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
			/* Add your own MailChimp form style overrides in your site stylesheet or in this style block.
			We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
		</style>
		<div id="mc_embed_signup" ng-init="showSignup = false">
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

    <div id="white-rabbit-indicator"></div>

    <section id="white-rabbit" class="white-rabbit no-opacity">
    	<div class="white-rabbit__container">
		    <h2 class="white-rabbit__text">{{ data.white_rabbit_text }}</h2>
		    <iframe data-src="{{ data.white_rabbit_video | youtubeEmbedUrl }}" class="white-rabbit__video" frameborder="0" allowfullscreen></iframe>
		</div>
    </section>
</div>
