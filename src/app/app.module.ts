import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }  from './app.component';
import { ItemDetailComponent }  from './itemdetail/itemdetail.component'
import { ItemListComponent }  from './itemslist/itemlist.component';
import { OrdersComponent }  from './orders/oders.component';
import { PageNotFoundComponent }  from './pagenotfound.component';


// First match Win
const appRoutes: Routes = [
  { path: 'item/:id', component: ItemDetailComponent },
  {
    path: 'items',
    component: ItemListComponent,
    data: { title: 'Books List' }
  },
  {
    path: 'orders',
    component: OrdersComponent,
  },
  { path: '',
    redirectTo: '/items',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, ItemDetailComponent, ItemListComponent, PageNotFoundComponent, OrdersComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
