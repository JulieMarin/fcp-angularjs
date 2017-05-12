function TestCtrl(PersistedService) {
  'ngInject';

  const vm = this;

  vm.title = 'AngularJS, Gulp, and Browserify! Written with keyboards and love!';
  vm.number = PersistedService.getCart();

}

export default {
  name: 'TestCtrl',
  fn: TestCtrl
};
