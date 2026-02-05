import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  products = [
    { id: 1, name: 'Laptop', price: 50000 },
    { id: 2, name: 'Mobile', price: 20000 },
    { id: 3, name: 'Tablet', price: 30000 }
  ];

  // Selected product
  selectedProduct: any = null;

  // Called when child emits event OR when user clicks
  onProductSelect(product: any) {
    this.selectedProduct = product;
  }
}
