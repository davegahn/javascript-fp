class ShoppingList {
    constructor(items = []) {
        this.items = items;
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItems(...itemsToRemove) {
        for (let i = 0; i < itemsToRemove.length; i++) {
            let itemToRemove = itemsToRemove[i];

            for (let j = 0; j < this.items.length; j++) {
                let item = this.items[j];

                if (item.title === itemToRemove) {
                    this.items.splice(j, 1);
                }
            }
        }
    }
}

class Item {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}

const shoppingList = new ShoppingList([
    new Item('молоко', 100),
    new Item('яйца', 70),
    new Item('яблоки', 120)
]);


shoppingList.addItem(new Item('бананы', 60));

let onDiet = true;
let isVegan = true;

if (onDiet) {
    shoppingList.removeItems('бананы');
} else if (isVegan) {
    shoppingList.removeItems('молоко', 'яйца');
}

console.log(shoppingList);
