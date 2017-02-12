app.factory('WordpressData', function($http){
  return {
    listHome: function(callback){
      $http.get('http://alex-abbott.com/wtu/wp-json/acf/v2/home/12').then(callback);
    },
    listPortfolio: function(callback){
      $http.get('http://alex-abbott.com/wtu/wp-json/acf/v2/portfolio/18').then(callback);
    },
  };
});