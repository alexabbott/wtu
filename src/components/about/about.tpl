<div class="about">
  <div class="about__main">
    <div class="about__container no-opacity">
      <div class="about__text" ng-bind-html="data.about_text"></div>
      <h3 class="about__clients-header">Clients</h3>
      <div class="about__clients">
        <div class="about__client">
          <img ng-src="{{ client.client_image }}" ng-repeat="client in data.about_clients">
        </div>
      </div>
      <div class="about__text" ng-bind-html="data.about_text"></div>
      <h3 class="about__clients-header">Clients</h3>
      <div class="about__clients">
        <div class="about__client">
          <img ng-src="{{ client.client_image }}" ng-repeat="client in data.about_clients">
        </div>
      </div>
      <div class="about__text" ng-bind-html="data.about_text"></div>
      <h3 class="about__clients-header">Clients</h3>
      <div class="about__clients">
        <div class="about__client">
          <img ng-src="{{ client.client_image }}" ng-repeat="client in data.about_clients">
        </div>
      </div>
      <div class="about__text" ng-bind-html="data.about_text"></div>
      <h3 class="about__clients-header">Clients</h3>
      <div class="about__clients">
        <div class="about__client">
          <img ng-src="{{ client.client_image }}" ng-repeat="client in data.about_clients">
        </div>
      </div>
    </div>
  </div>
</div>
