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
            $scope.marqueeStyle = {
                backgroundImage: `url(${$scope.current.acf.bg_img})`
            }
            $scope.contentStyle = {
                backgroundColor: $scope.current.acf.background,
                color: $scope.current.acf.text_color
            }

            let titleLen = $scope.current.title.rendered.length
            $scope.titleStyle = {
                left: titleLen * 27,
                fontSize: `${Math.min(titleLen * 3.75, 15)}vw`,
            }

            $scope.content = $scope.current.acf.content;
            console.log($scope.current)

            if (!$scope.current.cats) {
                $scope.current.cats = $scope.categories ?
                                      mapCatsFromIdx(
                                          $scope.current.categories,
                                          $scope.categories
                                      ) :
                                      []
            }
        }

        const bindCats = (data) => {
            $scope.categories = data
            return(
                $scope.current ?
                $scope.current.cats = mapCatsFromIdx(
                    $scope.current.categories,
                    $scope.categories
                ) :
                null
            )
        }

        const mapCatsFromIdx = (idxArr, categories) => {
            let cats = idxArr.map((i) => {
                return categories.find((cat) => {
                    return i === cat.id
                })
            })

            return cats
        }

        if (!WordpressData.categories) {
            WordpressData.fetchCats().then(() => {
                return bindCats(WordpressData.categories)
            })
        } else {
            bindCats(WordpressData.categories)
        }

        if (!WordpressData.portfolio) {
            WordpressData.fetchPortfolio().then(() => {
                return bindPortfolio(WordpressData.portfolio)
            })
        } else {
            bindPortfolio(WordpressData.portfolio)
        }

    }]
};

export default Portfolio;
