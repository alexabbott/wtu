<div class="about">
  <div class="about__main">
    <div class="about__container no-opacity">

      <span ng-repeat="i in [1,2,3,4,5,6,7,8,9,10]">
					<div class="about__text" ng-bind-html="data.about_text"></div>
            <h3 class="about__clients-header">Clients</h3>
            <div class="about__clients">
              <div class="about__client">
              <img ng-src="{{ client.client_image }}" ng-repeat="client in data.about_clients">
            </div>
          </div>
			</span>

    </div>
  </div>
</div>