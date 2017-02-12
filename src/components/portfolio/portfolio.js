app.component('portfolio', {
    templateUrl: '/components/portfolio/portfolio.tpl',
    controller: ['$scope', 'WordpressData', function($scope, WordpressData) {

        var ctrl = this;

        $scope.test = 'portfolio testing';

        WordpressData.listPortfolio(function(response) {
            $scope.data = response.data.acf;
            console.log('data', $scope.data);
        });
    }]
});