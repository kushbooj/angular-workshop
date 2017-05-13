import {Item} from "../model/item.model";

export class ItemService {

    items: Item[] = [new Item('Harry Potter part 1', 500, 10, 5), new Item('Sherlock Holmes Part 1', 300, 5,10)];
    private value: number;


    constructor(value: number) {
        this.value = value;
    }

    getItems(): Item[] {
        return this.items;
    }

    getValue() : number {
        return this.value;
    }
}