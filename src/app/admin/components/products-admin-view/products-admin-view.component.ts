import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsItemAdminComponent } from '../products-item-admin/products-item-admin.component';
import { ProductsPromiseService } from 'src/app/product/services/poducts-promise.service';

@Component({
  selector: 'app-products-admin-view',
  standalone: true,
  imports: [CommonModule, ProductsItemAdminComponent],
  templateUrl: './products-admin-view.component.html',
  styleUrls: ['./products-admin-view.component.css']
})
export class ProductsAdminViewComponent {
  productsService = inject(ProductsPromiseService);

}
