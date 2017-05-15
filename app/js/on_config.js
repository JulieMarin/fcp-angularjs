function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $compileProvider) {
  'ngInject';

  if (process.env.NODE_ENV === 'production') {
    $compileProvider.debugInfoEnabled(false);
  }

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $stateProvider
    .state('main', {
      url: '/',
      views: {
        '': {
          templateUrl: 'products.html',
          controller: 'CatalogCtrl as catalog'
        }
      },
      title: 'Main'
    })

    .state('products', {
      url: '/products/:productName',
      views: {
        '': {
          templateUrl: 'product-info.html',
          controller: 'ProductCtrl as product'
        }
      },
      title: 'Products'
    })

    .state('search', {
      url: '/products/search/:query',
      views: {
        '': {
          templateUrl: 'products.html',
          controller: 'CatalogCtrl as catalog'
        }
      },
      title: 'Search Results'
    })

    .state('cart', {
      url: '/cart',
      views: {
        '': {
          templateUrl: 'cart.html',
          controller: 'CartCtrl as cart'
        }
      },
      title: 'Your Cart'
    })
  $urlRouterProvider.otherwise('/');

}

export default OnConfig;
