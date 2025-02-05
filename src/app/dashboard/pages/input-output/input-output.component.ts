import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  signal,
} from '@angular/core';
import { ProductCardComponent } from './ui/product-card/product-card.component';
import { Product } from '../../../interfaces';
import { interval, take, tap } from 'rxjs';

@Component({
  selector: 'app-input-output',
  imports: [ProductCardComponent],
  templateUrl: './input-output.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InputOutputComponent implements OnDestroy {
  public products = signal<Product[]>([
    {
      id: 1,
      name: `Product 1`,
      quantity: 0,
    },
    {
      id: 2,
      name: `Product 2`,
      quantity: 4,
    },
  ]);

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }

  private intervalSubscription = interval(1000)
    .pipe(
      tap(() => {
        this.products.update((products) => [
          ...products,
          {
            id: products.length + 1,
            name: `Product ${products.length + 1} `,
            quantity: 0,
          },
        ]);
      }),
      take(8)
    )
    .subscribe();

  public updateProduct(quantity: number, product: Product) {

    this.products.update((products) =>
      products.map((currentProduct) =>

        product.id === currentProduct.id
          ? {
              ...product,
              quantity,
            }
          : currentProduct
      )
    );

  }
}
