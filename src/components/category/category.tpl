<div class="category">
  <h3 class="animated fadeInDown">{{ category.name }}</h3>
  <div ng-repeat="project in data.projects" class="project">
      <a ng-href="{{ project.slug }}">
        <img ng-src="{{ project.acf.category_image.url }}" class="animated fadeInUp">
        <span class="animated fadeIn">{{ project.title.rendered }}</span>
      </a>
  </div>
</div>