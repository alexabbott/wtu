let Portfolio = {
    templateUrl: '/components/portfolio/portfolio.tpl',
    controller: ['$scope', 'WordpressData', '$routeParams', '$sce', ($scope, WordpressData, $routeParams, $sce) => {

        WordpressData.renderPortfolio((data) => {
            const keys = {}
            data.data.forEach((c,i,a) => {
                let next = a[i+1];
                let prev = a[i-1];
                c.next = next ? '/' + next.slug : null;
                c.prev = prev ? '/' + prev.slug : null;
                keys[c.slug] = c;
            });

            $scope.portfolio = keys;

            $scope.current = $scope.portfolio[$routeParams.slug];
            $scope.bgStyle = {
                backgroundImage: `url(${$scope.current.acf.bg_img})`
            }

            $scope.content = $sce.trustAsHtml($scope.current.acf.content)
        })

    }]
};

export default Portfolio;
