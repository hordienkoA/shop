import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Product } from '../../models/product.model';
import { SharedModule } from 'src/app/shared/shared.module';
import { Store } from '@ngrx/store';
import * as RouterActions from '../../../core/@ngrx/router/router.actions';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {

  private store = inject(Store);
  @Input() product!: Product;

  @Output() addProductToCartEvent = new EventEmitter<Product>();

  onAddToCard() {
    this.addProductToCartEvent.emit(this.product);
    console.log("Product successfully purchased");
  }
  onDetailClick(){
    //this.router.navigate(['/products/item', this.product.id]);
    this.store.dispatch(RouterActions.go({
      path: ['/products/item', this.product.id]
    }))
  }
}
