'use strict';

import { checkoutProducts, getAllProducts } from '../utils/WebAPIUtils';

export default class AppActions {

    async getAllProducts() {
        let products = await getAllProducts();

        this.actions.receiveProducts(products);
    }

    receiveProducts(products) {
        this.dispatch(products);
    }

    addToCart(product) {
        this.dispatch(product);
    }

    async cartCheckout(products) {
        this.actions.beginCheckout();

        let products = await checkoutProducts(products);

        this.actions.finishCheckout(products);
    }

    beginCheckout() {
        this.dispatch();
    }

    finishCheckout(products) {
        this.dispatch(products);
    }

}
