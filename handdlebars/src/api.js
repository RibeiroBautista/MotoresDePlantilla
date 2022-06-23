class Api {
    constructor() {
    this.products = [];
    this.currentId = 1;
    }

    getProducts() {
        return this.products;
    }

    postProduct(name, price, thumbnail) {
        this.currentId = this.products.length + 1;
        this.products.push({ id: this.currentId, name, price, thumbnail });
    }}

module.exports = Api;