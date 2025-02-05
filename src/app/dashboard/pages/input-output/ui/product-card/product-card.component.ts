import { Component, input, Output, EventEmitter, output } from '@angular/core';
import { Product } from '../../../../../interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  imports: [
    
  ],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent { 

  // @Input({ required: true })
  // public product!: Product;
  //! Es una señal
  public product = input.required<Product>();

  // @Output()
  // public onIncrementQuantity = new EventEmitter<number>();

  public onIncrementQuantity = output<number>();

  public incrementQuantity(){
    this.onIncrementQuantity.emit(this.product().quantity + 1)
  }
  public decrementQuantity(){

    if (this.product().quantity <= 0) return
    this.onIncrementQuantity.emit(this.product().quantity - 1)

  }


}
