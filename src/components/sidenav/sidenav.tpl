<nav class="no-opacity">
	<div class="nav__main">
		<a href="#" scroll-to="intro-indicator" duration="3000" id="nav__home">
			<img ng-src="{{ data.nav_logo.url }}" class="nav__logo nav__logo-main">
			<img ng-src="{{ data.nav_logo_alt.url }}" class="nav__logo nav__logo-alt">
		</a>
		<div class="nav__items">
			<div scroll-to="about-indicator" duration="2000" class="nav__item">
				{{ data.nav_item_1 }}
			</div>
			<div scroll-to="projects-indicator" duration="2000" class="nav__item">
				{{ data.nav_item_2 }}
			</div>
			<div scroll-to="contact-indicator" duration="2000" class="nav__item">
				{{ data.nav_item_3 }}
			</div>
		</div>
		<a href="#white-rabbit" scroll-to="white-rabbit-indicator" duration="1000" class="nav__white-rabbit">
			<img ng-src="{{ data.white_rabbit_image.url }}" class="nav__white-rabbit__image" alt="white rabbit">
		</a>
	</div>
</nav>