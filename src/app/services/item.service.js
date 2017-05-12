"use strict";
var item_model_1 = require("../model/item.model");
var ItemService = (function () {
    function ItemService() {
        this.items = [new item_model_1.Item('Harry Potter part 1', 500, 10), new item_model_1.Item('Sherlock Holmes Part 1', 300, 5)];
    }
    ItemService.prototype.getItems = function () {
        return this.items;
    };
    return ItemService;
}());
exports.ItemService = ItemService;
//# sourceMappingURL=item.service.js.map