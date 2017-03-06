let Portfolio = {
    templateUrl: '/components/portfolio/portfolio.tpl',
    controller: ['$scope', 'WordpressData', '$routeParams', '$sce', ($scope, WordpressData, $routeParams, $sce) => {

        $scope.trustBlob = (blob) => $sce.trustAsHtml(blob)

        const bindPortfolio = (data) => {
            console.log(data)
            let keys = Object.keys(data);
            $scope.portfolio = data;
            $scope.current = $scope.portfolio[$routeParams.slug];
            $scope.first = keys[0];
            $scope.last = keys[keys.length - 1];
            $scope.bgStyle = {
                backgroundImage: `url(${$scope.current.acf.bg_img})`
            }

            $scope.content = $scope.current.acf.content
        }

        if (!WordpressData.portfolio) {
            WordpressData.fetchPortfolio(bindPortfolio);
        }
        else {
            bindPortfolio(WordpressData.portfolio);
        }

    }]
};

export default Portfolio;
