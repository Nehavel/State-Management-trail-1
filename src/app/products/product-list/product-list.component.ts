import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

 
   products = [
    {
        'id': 1,
        'productName': 'Leaf Rake',
        'productCode': 'GDN-0011',
        'description': 'Leaf rake with 48-inch wooden handle',
        'starRating': 3.2
    },
    {
        'id': 2,
        'productName': 'Garden Cart',
        'productCode': 'GDN-0023',
        'description': '15 gallon capacity rolling garden cart',
        'starRating': 4.2
    },
    {
        'id': 5,
        'productName': 'Hammer',
        'productCode': 'TBX-0048',
        'description': 'Curved claw steel hammer',
        'starRating': 4.8
    },
    {
        'id': 8,
        'productName': 'Saw',
        'productCode': 'TBX-0022',
        'description': '15-inch steel blade hand saw',
        'starRating': 3.7
    },
    {
        'id': 10,
        'productName': 'Video Game Controller',
        'productCode': 'GMG-0042',
        'description': 'Standard two-button video game controller',
        'starRating': 4.6
    }];
  displayCode: boolean;
 
    constructor(private store: Store<any>) { }
  ngOnInit() {
    this.store.pipe(select('products')).subscribe(
      products => {
        if (products) {
          this.displayCode = products.showProductCode;
        }
      });
  }
  checkChanged(value: boolean): void {
    this.displayCode = value;
    this.store.dispatch({
      type: 'TOGGLE_PRODUCT_CODE',
      payload: value
    });
  }
}
