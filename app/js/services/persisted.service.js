function PersistedService() {

  const service = {
    cartSize: 0
  };

  service.getCart = function functionName() {
    service.cartSize = 7;
    return 7;
  }

  return service;

}

export default {
  name: 'PersistedService',
  fn: PersistedService
};
