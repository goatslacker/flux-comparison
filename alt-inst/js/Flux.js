'use strict';

import Alt from 'alt';
import Actions from './actions/Actions';
import ProductStore from './stores/ProductStore';
import CartStore from './stores/CartStore';

export default class Flux extends Alt {
    constructor() {
        super();

        this.addActions('app', Actions);
        this.addStore('products', ProductStore);
        this.addStore('cart', CartStore);
    }
}
