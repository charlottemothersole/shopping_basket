class ShoppingBasket {
    constructor() {
        this.all_candies = []
    }

    addItem(candy) {
        this.all_candies.push(candy);
    }

    getTotalPrice() {
        let totalPrice = 0;
        this.all_candies.map((candy) => {
            totalPrice += candy.getPrice()
        })
        return totalPrice;
    }
}

module.exports = ShoppingBasket;