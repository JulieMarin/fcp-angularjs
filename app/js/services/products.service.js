function ProductsService($http, AppSettings) {
  'ngInject';

  const service = {};

  function querySearch(query) {
    return $http({
      method: 'GET',
      url: AppSettings.apiBaseUrl + query + AppSettings.apiKey,
      cache: true
    });
  };

  service.getProducts = function() {
    return (
      querySearch('products')
        .then(function(response) {
          return response.data;
        })
        .catch(function(response) {
          return response;
        })
    );
  };

  return service;

}

export default {
  name: 'ProductsService',
  fn: ProductsService
};
