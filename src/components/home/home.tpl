<div class="home">
	<h1 class="hidden">WeThem.Us</h1>

	<img ng-src="{{ data.intro_image.url }}" class="intro__image">

	<div class="intro__gradient"></div>

    <section id="intro" class="intro">
    	<div class="intro__container">
	    	<img ng-src="{{ data.intro_big_logo.url }}" class="intro__big-logo" alt="WeThem.Us">
	    	<div class="intro__text" ng-bind-html="data.intro_text"></div>
	    	<div class="intro__scroll-down">
	    		{{ data.intro_scroll_down_text }}
	    		<img ng-src="{{ data.intro_scroll_down_arrow.url }}" class="intro__scroll-down-arrow" alt="{{ data.intro_scroll_down_text }}">
	    	</div>
	    </div>
    </section>

    <img ng-src="{{ data.pink_blotch.url }}" class="pink-blotch">

    <section id="about-intro" class="about-intro">
    	<div class="about-intro__container">
	    	<div class="about-intro__image-container">
	    		<div class="about-intro__image-box">
			    	<img ng-src="{{ data.about_image_1.url }}" class="about-intro__image-1 hidden" alt="{{ data.about_text_1 }}">
			    	<img ng-src="{{ data.about_image_blur_1.url }}" class="about-intro__image-blur-1" alt="{{ data.about_text_1 }}">
			    	<h3 class="about-intro__image-text">
			    		{{ data.about_text_1 }}
			    	</h3>
			    </div>
			    <!-- <div class="about-intro__image-box">
			    	<img ng-src="{{ data.about_image_2.url }}" class="about-intro__image-2 hidden" alt="{{ data.about_text_2 }}">
			    	<img ng-src="{{ data.about_image_blur_2.url }}" class="about-intro__image-blur-2 hidden" alt="{{ data.about_text_2 }}">
			    	<h3 class="about-intro__image-text">
			    		{{ data.about_text_2 }}
			    	</h3>
			    </div>
		    	<div class="about-intro__image-box">
			    	<img ng-src="{{ data.about_image_3.url }}" class="about-intro__image-3 hidden" alt="{{ data.about_text_3 }}">
			    	<img ng-src="{{ data.about_image_blur_3.url }}" class="about-intro__image-blur-3 hidden" alt="{{ data.about_text_3 }}">
			    	<h3 class="about-intro__image-text">
			    		{{ data.about_text_3 }}
			    	</h3>
			    </div> -->
		    </div>

		    <div class="about-intro__text">
	    		<h2 class="about-intro__text-1">{{ data.about_text_1 }}</h2>
	    		<h2 class="about-intro__text-2">{{ data.about_text_2 }}</h2>
	    		<h2 class="about-intro__text-3">{{ data.about_text_3 }}</h2>
	    	</div>
	    </div>
    </section>

    <section id="about" class="about">
    	<div class="about__container">
	    	<div class="about__text">
			    <div ng-bind-html="data.about_paragraph" class="about__text-main"></div>
			    <div class="about__bottom-headline">{{ data.about_bottom_headline }}</div>
			    <img ng-src="{{ data.about_gif_1.url }}" class="about__gif-1 hidden">
			    <img ng-src="{{ data.about_gif_2.url }}" class="about__gif-2 hidden">
			    <img ng-src="{{ data.about_gif_3.url }}" class="about__gif-3 hidden">
			    <img ng-src="{{ data.about_gif_4.url }}" class="about__gif-4 hidden">
			</div>
			<marquee direction="left" scrollamount="20">
			    <h2 class="about__scroll-text">{{ data.about_scroll_text }}</h2>
			</marquee>
		</div>
    </section>

    <section id="contact" class="contact">
  		<div class="contact__container">
	    	<div class="contact__text-container">
			    <h2 class="contact__text-1">{{ data.contact_text_1 }}</h2>
			    <h2 class="contact__text-1">{{ data.contact_text_1 }}</h2>
			    <h2 class="contact__text-1">{{ data.contact_text_1 }}</h2>
			    <h2 class="contact__text-1">{{ data.contact_text_1 }}</h2>
			    <h2 class="contact__text-1">{{ data.contact_text_1 }}</h2>
			</div>
		    <a href="mailto:{{ data.contact_email }}" class="contact__text-2">
		    	<h2>{{ data.contact_text_2 }}</h2>
		    </a>
		</div>
    </section>

    <section id="white-rabbit" class="white-rabbit">
    	<div class="white-rabbit__container">
		    <h2 class="white-rabbit__text">{{ data.white_rabbit_text }}</h2>
		    <video ng-src="{{ data.white_rabbit_video }}" class="white-rabbit__video"></video>
		</div>
    </section>
</div>