let Portfolio = {
    templateUrl: '/components/portfolio/portfolio.tpl',
    controller: ['$scope', 'WordpressData', '$routeParams', '$sce', '$location', '$timeout', ($scope, WordpressData, $routeParams, $sce, $location, $timeout) => {

        $scope.transitioning = true;
        $timeout(() => {
            $scope.transitioning = false;
        }, 666)

        $scope.trustBlob = (blob) => {
            blob = blob.replace(/<script>.*(<\/?script>?)?/, '')
            return $sce.trustAsHtml(blob)
        }
        $scope.transition = (to) => {
            $scope.transitioning = true;
            $timeout(() => {
                $location.path(to);
                $scope.transitioning = false;
            }, 666);
        }

        const bindPortfolio = (data) => {
            let keys = Object.keys(data);
            $scope.portfolio = data;
            $scope.current = $scope.portfolio[$routeParams.slug];
            $scope.first = keys[0];
            $scope.last = keys[keys.length - 1];
            $scope.bgStyle = {
                backgroundImage: `url(${$scope.current.acf.bg_img})`
            }

            let scrollLen = $scope.current.title.rendered.length * 1.5
            $scope.titleAnim = {
                animation: `slide-slug ${scrollLen}s -${scrollLen*1.2}s infinite linear`
            }

            $scope.content = $scope.current.acf.content;
            $scope.content.forEach(b => {
                if (b.styles.length) {
                    var style = {}
                    b.styles.forEach(s => {
                        style[s.property] = s.value
                    })
                    b.acfStyle = style
                }
            })
            console.log($scope.current)
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
