"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var itemdetail_component_1 = require("./itemdetail/itemdetail.component");
var itemlist_component_1 = require("./itemslist/itemlist.component");
var oders_component_1 = require("./orders/oders.component");
var pagenotfound_component_1 = require("./pagenotfound.component");
// First match Win
var appRoutes = [
    { path: 'item/:id', component: itemdetail_component_1.ItemDetailComponent },
    {
        path: 'items',
        component: itemlist_component_1.ItemListComponent,
        data: { title: 'Books List' }
    },
    {
        path: 'orders',
        component: oders_component_1.OrdersComponent,
    },
    { path: '',
        redirectTo: '/items',
        pathMatch: 'full'
    },
    { path: '**', component: pagenotfound_component_1.PageNotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(appRoutes)],
        declarations: [app_component_1.AppComponent, itemdetail_component_1.ItemDetailComponent, itemlist_component_1.ItemListComponent, pagenotfound_component_1.PageNotFoundComponent, oders_component_1.OrdersComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map