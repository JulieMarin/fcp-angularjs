function ProductsGrid() {

  return {
    restrict: 'EA',
    templateUrl: 'directives/products-grid.html',
    scope: {
      product: '=',
      imageUrlBase: '@'
    },
  };
}

export default {
  name: 'productsGrid',
  fn: ProductsGrid
};
