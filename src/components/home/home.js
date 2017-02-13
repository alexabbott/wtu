let Home = {
    templateUrl: '/components/home/home.tpl',
    controller: ['$scope', 'WordpressData', ($scope, WordpressData) => {

        $scope.test = 'testin';

        WordpressData.listHome((response) => {
            $scope.data = response.data.acf;
            console.log('data', $scope.data);
        });
    }]
};

export default Home;