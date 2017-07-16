function add(x, y) {
    return x + y;
}

function random(x) {
    return Math.random() * x;
}

function getDate() {
    return Date.now();
}

function save(data) {
    localStorage.set('data', data);
}

{
    let cart = {
        items: [],

        add(item) {
            this.items.push(item);
        }
    };

    cart.add('apple');
}

{
    let cart = {
        items: [],

        add(item) {
            this.items = this.items.concat(item);
            return items;
        }
    };

    let items = cart.add('apple');
}