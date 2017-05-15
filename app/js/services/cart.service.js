function CartService($http, AppSettings) {
  'ngInject';

  const service = {
    cartSize: 0,
    orderID: 'R235651380',
    cart: {
      items: [],
      size: 0
    }
  };

  function querySearch(query) {
    return $http({
      method: 'GET',
      url: AppSettings.apiBaseUrl + query + AppSettings.apiKey,
      cache: true
    });
  };

  service.getCart = function() {
    return (
      querySearch('orders/' + service.orderID)
        .then(function(response) {
          service.cart.size = response.data.total_quantity;
        })
        .catch(function(response) {
          return response;
        })
    );
  };


  service.addToCart = function(productID, quantity) {
    return $http({
      method: 'POST',
      url: AppSettings.apiBaseUrl +  'orders/R235651380/line_items?line_item[variant_id]=' + productID + '&line_item[quantity]=' + quantity + '&token=721ba6d3f45e5257cc7b74c5b2d6b4e932d58711184d01d6'
    })
    .then(function() {
      service.cart.size += parseInt(quantity);
    })
  }

  service.getCartItems = function() {
    return $http({
      method: 'GET',
      url: AppSettings.apiBaseUrl +  'orders/R235651380' + AppSettings.apiKey
    })
    .then(function(response) {
      service.cart.items = response.data.line_items;
      service.cart.cartTotal = response.data.display_item_total;
    })
  }

  service.removeItem = function(productID) {
    $http({
      method: 'DELETE',
      url: AppSettings.apiBaseUrl +  'orders/R235651380/line_items' + productID + '&token=721ba6d3f45e5257cc7b74c5b2d6b4e932d58711184d01d6'
    })
    .then(function() {
      service.getCartItems();
    })
  }

  return service;

}

export default {
  name: 'CartService',
  fn: CartService
};
