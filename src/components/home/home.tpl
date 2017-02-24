<div class="home">
  <h1 class="hidden">WeThem.Us</h1>

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

    <section id="about-intro" class="about-intro">
    	<div class="about-intro__container">
	    	<div class="about-intro__image-container">
	    		<div class="about-intro__image-box">
			    	<img ng-src="{{ data.about_image_1.url }}" class="about-intro__image-1 clear hidden" alt="{{ data.about_text_1 }}">
			    	<img ng-src="{{ data.about_image_blur_1.url }}" class="about-intro__image-blur-1 blur" alt="{{ data.about_text_1 }}">
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
	    		<h2 class="about-intro__text-1" ng-mouseenter="removeImageBlur(1)" ng-mouseleave="addImageBlur(1)">{{ data.about_text_1 }}</h2>
	    		<h2 class="about-intro__text-2">{{ data.about_text_2 }}</h2>
	    		<h2 class="about-intro__text-3">{{ data.about_text_3 }}</h2>
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
	    		<div class="projects__marquee" ng-mouseenter="showBg($index)" ng-mouseleave="hideBg($index)">
	    			<a href="/{{ project.slug }}">{{ project.acf.marquee_pre_context }}<span>{{ project.acf.short_title }}</span>{{ project.acf.marquee_post_context }}</a>
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
    </section>

    <div id="white-rabbit-indicator"></div>

    <section id="white-rabbit" class="white-rabbit no-opacity">
    	<div class="white-rabbit__container">
		    <h2 class="white-rabbit__text">{{ data.white_rabbit_text }}</h2>
		    <iframe ng-src="{{ data.white_rabbit_video | youtubeEmbedUrl }}" class="white-rabbit__video" frameborder="0" allowfullscreen></iframe>
		</div>
    </section>
</div>
