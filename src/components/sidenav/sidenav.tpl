<nav class="no-opacity">
	<div class="nav__main">
		<a href="/" id="nav__home" ng-click="hideWhiteRabbit()">
			<img ng-src="{{ data.nav_logo.url }}" class="nav__logo nav__logo-main">
			<img ng-src="{{ data.nav_logo_alt.url }}" class="nav__logo nav__logo-alt">
		</a>
		<div class="nav__items">
			<div scroll-to="work-indicator" duration="2000" class="nav__item" ng-click="hideWhiteRabbit()">
				{{ data.nav_item_1 }}
			</div>
			<a href="/about" class="nav__item">
				{{ data.nav_item_2 }}
			</a>
			<a href="/contact" class="nav__item">
				{{ data.nav_item_3 }}
			</a>
		</div>
		<div class="nav__white-rabbit" ng-click="showWhiteRabbit()">
			<img ng-src="{{ data.white_rabbit_image.url }}" class="nav__white-rabbit__image" alt="white rabbit">
		</div>
	</div>
</nav>