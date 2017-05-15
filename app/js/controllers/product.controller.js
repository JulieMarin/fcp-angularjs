function ProductCtrl(ProductsService, AppSettings, $stateParams, CartService) {
  'ngInject';

  const vm = this;
  vm.imageBaseUrl = AppSettings.cdnBaseUrl;
  vm.productName = $stateParams.productName;
  vm.addToCart = CartService.addToCart;
  vm.quantity = 1;

  vm.getAvailability = function() {
    return vm.inStock ? 'Yes' : 'No';
  }

  function init() {
    ProductsService.getProduct(vm.productName)
      .then(function(data) {
        vm.id = data.id;
        vm.name = data.name;
        vm.description = data.description;
        vm.price =  data.display_price;
        vm.images = data.master.images;
        vm.inStock = data.master.in_stock;
        vm.sku = data.master.sku;
      });
  };

  init();
}


export default {
  name: 'ProductCtrl',
  fn: ProductCtrl
};
