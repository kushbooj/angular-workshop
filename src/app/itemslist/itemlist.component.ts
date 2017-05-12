import { Component } from '@angular/core';
import { Item } from '../model/item.model';
@Component({
    templateUrl: './itemlist.component.html',
})

export class ItemListComponent {
    public items: Item[] = [new Item('Harry Potter part 1', 500, 10), new Item('Sherlock Holmes Part 1', 300, 5)];
}