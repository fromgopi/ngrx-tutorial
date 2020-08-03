import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx-tutorial';

  constructor(private store: Store<any>) {}

  cart: Observable<Array<any>>;

  ngOnInit(){
    this.cart = this.store.select('store');
  }

}
