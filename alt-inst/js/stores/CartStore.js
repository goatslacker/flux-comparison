'use strict';

export default class CartStore {

    constructor() {
        let actionIds = this.alt.getActions('app');
        this.productStore = this.alt.getStore('products');

        this.bindAction(actionIds.addToCart, this.handleAddToCart);
        this.bindAction(actionIds.beginCheckout, this.handleBeginCheckout);
        this.bindAction(actionIds.finishCheckout, this.handleFinishCheckout);

        this.products = {};
    }

    handleAddToCart(product) {
        this.waitFor(this.productStore.dispatchToken);

        let products = Object.assign({}, this.products);

        let { id } = product;
        product.quantity = id in products ? products[id].quantity + 1 : 1;

        products[id] = Object.assign({}, products[id], product);

        this.products = products;
    }

    handleBeginCheckout() {
        this.products = {};
    }

    handleFinishCheckout(products) {
        // this can be used to redirect to success page, etc.
        console.log('YOU BOUGHT:', products);
    }

    static getProducts() {
        let { products } = this.getState();
        return Object.keys(products).map(
            id => products[id]
        );
    }

    static getTotal() {
        let { products } = this.getState();
        let total = 0;

        for (let id in products) {
            let product = products[id];
            total += product.price * product.quantity;
        }

        return total.toFixed(2);
    }

}
