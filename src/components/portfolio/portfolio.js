let Portfolio = {
    templateUrl: '/components/portfolio/portfolio.tpl',
    controller: ['$scope', 'WordpressData', ($scope, WordpressData) => {

        $scope.test = 'portfolio testing';

        WordpressData.listPortfolio((response) => {
            $scope.data = response.data.acf;
            console.log('data', $scope.data);
        });
    }]
};

export default Portfolio;