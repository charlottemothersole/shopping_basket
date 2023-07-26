// > const basket = new ShoppingBasket();
// > basket.getTotalPrice();
// 0
// > basket.addItem(candy);
// > basket.getTotalPrice();
// 4.99
// > basket.addItem(new Candy('Skittle', 3.99));
// > basket.addItem(new Candy('Skittle', 3.99));
// > basket.getTotalPrice();
// 12.97
const ShoppingBasket = require('./shoppingBasket.js');

describe('shopping basket class', () => {
    const fakeCandy = { getPrice: () => 4.99 };
    const basket = new ShoppingBasket();
    basket.addItem(fakeCandy);
    it('adding an item gives us a price of 4.99', () => {
        expect(basket.getTotalPrice()).toBe(4.99);
    });
    it('adding two more items gives us a price of 12.97', () => {
        const fakeSkittle = { getPrice: () => 3.99 };
        basket.addItem(fakeSkittle);
        basket.addItem(fakeSkittle);
        expect(basket.getTotalPrice()).toBe(12.97);
    })
})