function ProductsService($http, AppSettings, $state) {
  'ngInject';

  const service = {

  };

  function querySearch(query, directory='') {
    return $http({
      method: 'GET',
      url: AppSettings.apiBaseUrl + directory + query + AppSettings.apiKey,
      cache: true
    });
  };

  service.getProducts = function(query='') {
    return $http({
      method: 'GET',
      url: AppSettings.apiBaseUrl + 'products?q[name_cont]=' + query + '&token=721ba6d3f45e5257cc7b74c5b2d6b4e932d58711184d01d6'
    })
    .then(function(response) {
      return response.data;
    })
    .catch(function(response) {
      return response;
    })
  };

  service.getProduct = function(slug) {
    return (
      querySearch(slug, 'products/')
        .then(function(response) {
          return response.data
        })
        .catch(function(response) {
          return response;
        })
    );
  }

  service.searchProducts = function(query) {
    $state.go('search', { query: query });
  }

  return service;

}

export default {
  name: 'ProductsService',
  fn: ProductsService
};
