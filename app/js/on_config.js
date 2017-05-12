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
          templateUrl: 'products.html',
          controller: 'CatalogCtrl as catalog'
        }
      },
      title: 'Products'
    })
  $urlRouterProvider.otherwise('/');

}

export default OnConfig;
