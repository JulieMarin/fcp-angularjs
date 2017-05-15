function SidebarCtrl(ProductsService, $stateParams) {
  'ngInject';

  const vm = this;
  var query = $stateParams.query || '';

  vm.taxons = {
    categories: [],
    brands: []
  };

  function generateCategories(products) {
    let categories = new Set(products.map(function(product) {
      return product.classifications[0].taxon.name;
    }));

    let brands = new Set(
      products.map(function(product) {
        return product.classifications[1].taxon.name;
      })
    );

    vm.taxons.categories = Array.from(categories);
    vm.taxons.brands = Array.from(brands);
  }

  function init() {
    ProductsService.getProducts(query)
      .then(function(data) {
        generateCategories(data.products)
      })
  }

  init()
}

export default {
  name: 'SidebarCtrl',
  fn: SidebarCtrl
};
