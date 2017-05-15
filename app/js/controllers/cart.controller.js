function CartCtrl(CartService, AppSettings) {
  'ngInject';

  const vm = this;

  vm.cart = CartService.cart;
  vm.baseURL = AppSettings.cdnBaseUrl;
  vm.removeItem = CartService.removeItem;

  function init() {
    CartService.getCartItems();
  }

  init();

}

export default {
  name: 'CartCtrl',
  fn: CartCtrl
};
