app.component('home', {
    templateUrl: '/components/home/home.tpl',
    controller: ['$scope', 'WordpressData', ($scope, WordpressData) => {

        $scope.test = 'testing';

        WordpressData.listHome((response) => {
            $scope.data = response.data.acf;
            console.log('data', $scope.data);
        });
    }]
});