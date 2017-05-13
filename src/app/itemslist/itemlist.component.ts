import {Component} from '@angular/core';
import {Item} from '../model/item.model';
import {ItemService} from '../services/item.service';

@Component({
    templateUrl: './itemlist.component.html',
})

export class ItemListComponent {

    public items: Item[] = [];

    constructor(private itemService: ItemService) {
        this.items = itemService.getItems();
    }

    getItemValue() {
        return this.itemService.getValue();
    }
}