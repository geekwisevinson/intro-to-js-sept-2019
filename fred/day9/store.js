cash = 2;
class Store {
    cash = 3;
    hamburgers = 100;
    pizzas = 100;
    drinks = 100;
    tacos = 100;
    items =  ['pizzas', 'drinks', 'hamburgers', 'tacos'];
    constructor({cash, tacos, hamburgers, pizzas, drinks}) {
        if (cash) {
            this.cash = cash;
        }
        this.pizzas = pizzas;
        this.hamburgers = hamburgers;
        this.tacos = tacos;
        this.drinks = drinks;
    }

    takeOrder(order) {
        //guard
      if (!order) { return; }
        this.items.forEach( (item) => {
          this[item] -=  order[item];
          this.cash += this.getPrice(item)(order[item]);
        });
        console.log('this', this);
    }

    createOrder() {
        const order = {
            pizzas: 0,
            drinks: 0,
            hamburgers: 0,
            "tacos": 0,
        };
        for (let item = 0; item < this.items.length; item++){
            const randomNumber = Math.floor(Math.random() * 5);
            order[  this.items[item] ] = randomNumber;
        }
        console.log('order', order);
        return order;
    };

    getPrice(item) {
        switch (item) {
            case 'pizzas':
                return function (q) {
                    return 3 * q;
                };
            case 'hamburgers':
                return function (q) {
                    return 2 * q;
                };
            case 'drinks':
                return function (q) {
                    return 1 * q;
                };
            case 'tacos':
                return function (q) {
                    return 1 * q;
                };
            default:
                console.log('we don\'t serve that yet');
                console.log("we don't serve that yet");
                console.log(`we don't serve that "yet"`);
        }
    }
}

let bw2go1;
let bw2go2;
if (stores.length > 0) {

} else {
     bw2go1 = new Store({ cash: 999, hamburgers : 99, tacos: 99, drinks: 99, pizzas: 99});
     bw2go2 = new Store({ cash: 999, hamburgers : 99, tacos: 99, drinks: 99, pizzas: 99});
    stores.push(bw2go1, bw2go2);
}

console.log(bw2go2);

stores = stores.map( store => new Store(store));