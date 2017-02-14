app.factory('WordpressData', ($http) => {
  return {
    listHome: (callback) => {
      $http.get('http://alex-abbott.com/wtu/wp-json/acf/v2/home/12').then(callback);
    },
    listPortfolio: (callback) => {
      $http.get('http://alex-abbott.com/wtu/wp-json/acf/v2/portfolio/18').then(callback);
    },
  };
});