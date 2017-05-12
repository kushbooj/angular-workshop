export class Item {
    name: String;
    price: number;
    quantity: number;
    discount: number;

    constructor(name: String, price: number, quantity: number, discount: number) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.discount = discount;
    }
}