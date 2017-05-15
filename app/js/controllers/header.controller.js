function HeaderCtrl(CartService, ProductsService) {
  'ngInject';

  const vm = this

  vm.cart = CartService.cart;
  vm.searchProducts = ProductsService.searchProducts;
  vm.searchTerm = '';

  function init() {
    CartService.getCart();
  }

  init();

}

export default {
  name: 'HeaderCtrl',
  fn: HeaderCtrl
};
