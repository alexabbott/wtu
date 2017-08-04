<div class="category">
  <h3>{{ category.name }}</h3>
  <div ng-repeat="project in data.projects" class="project">
      <a ng-href="{{ project.slug }}">
        <img ng-src="{{ project.acf.bg_img }}">
        <span>{{ project.title.rendered }}</span>
      </a>
  </div>
</div>