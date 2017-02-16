<nav>
	<div class="nav__main">
		<a href="#top">
			<img ng-src="{{ data.nav_logo.url }}" class="nav__logo">
		</a>
		<div class="nav__items">
			<a href="#about" class="nav__item">
				{{ data.nav_item_1 }}
			</a>
			<a href="#projects" class="nav__item">
				{{ data.nav_item_2 }}
			</a>
			<a href="#contact" class="nav__item">
				{{ data.nav_item_3 }}
			</a>
		</div>
		<a href="#white-rabbit" class="nav__white-rabbit">
			<img ng-src="{{ data.white_rabbit_image.url }}" class="nav__white-rabbit__image" alt="white rabbit">
		</a>
	</div>
</nav>