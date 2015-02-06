'use strict';

export default class ProductStore {
    constructor() {
        let actionIds = this.alt.getActions('app');
        this.bindAction(actionIds.addToCart, this.handleAddToCart);
        this.bindAction(actionIds.receiveProducts, this.handleReceiveProducts);

        this.products = [];
    }

    decreaseInventory(product) {
        product.inventory = product.inventory > 0 ? product.inventory-1 : 0;
    }

    handleAddToCart(product) {
        this.decreaseInventory(product);
    }

    handleReceiveProducts(newProducts) {
        this.products = newProducts;
    }
}
