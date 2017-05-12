import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Welcome to {{name}} Workshop</h1>
  <nav>
    <a routerLink="/items" routerLinkActive="active">Available Items</a>
    <a routerLink="/orders" routerLinkActive="active">Orders Placed</a>
  </nav>
  <router-outlet></router-outlet>
`,
  // styleUrls: '';
})
export class AppComponent  {
  name = 'Angular 2';
}
