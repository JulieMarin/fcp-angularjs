function CatalogCtrl(ProductsService, AppSettings) {
  'ngInject';

  const vm = this;
  vm.imageUrlBase = AppSettings.cdnBaseUrl;
  vm.products = {};
  vm.count = null;
  vm.totalCount = null;
  vm.currentPage = null;
  vm.perPage = null;
  vm.pages = null;

  function generateProductTiles(products) {

  }

  function init() {
    ProductsService.getProducts()
      .then(function(data) {
        vm.products = data.products;
        vm.count = data.count;
        vm.totalCount = data.total_count;
        vm.currentPage = data.current_page;
        vm.perPage = data.per_page;
        vm.pages = data.pages;
    });
  };

  init();
}

export default {
  name: 'CatalogCtrl',
  fn: CatalogCtrl
};
