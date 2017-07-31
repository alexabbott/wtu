let About = {
    templateUrl: '/components/about/about.tpl',
    controller: ['WordpressData', '$scope', (WordpressData, $scope) => {

        WordpressData.listHome((response) => {
            $scope.data = response.data[0].acf;
            console.log('home data', $scope.data);
        });

    }]
};

export default About;
