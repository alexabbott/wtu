let Sidenav = {
    templateUrl: '/components/sidenav/sidenav.tpl',
    controller: ['$scope', 'WordpressData', ($scope, WordpressData) => {

        WordpressData.listNav((response) => {
            $scope.data = response.data.acf;
            console.log('nav data', $scope.data);
        });
    }]
};

export default Sidenav;