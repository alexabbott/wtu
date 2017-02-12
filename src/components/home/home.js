app.component('home', {
    templateUrl: '/components/home/home.tpl',
    controller: ['$scope', 'WordpressData', function($scope, WordpressData) {

        var ctrl = this;

        $scope.test = 'testing';

        WordpressData.listHome(function(response) {
            $scope.data = response.data.acf;
            console.log('data', $scope.data);
        });
    }]
});