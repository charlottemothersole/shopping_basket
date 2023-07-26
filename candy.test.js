const Candy = require('./candy.js');

describe('candy class', () => {
    const candy = new Candy('Mars', 4.99);
    it('getName returns string "Mars"', () => {    
        expect(candy.getName()).toBe('Mars');
    });
    it('getPrice returns int "4.99"', () => {    
        expect(candy.getPrice()).toBe(4.99);
    })
});

