import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/product/services/product.service';
import { Product } from 'src/app/product';
import { ProductsItemAdminComponent } from '../products-item-admin/products-item-admin.component';

@Component({
  selector: 'app-products-admin-view',
  standalone: true,
  imports: [CommonModule, ProductsItemAdminComponent],
  templateUrl: './products-admin-view.component.html',
  styleUrls: ['./products-admin-view.component.css']
})
export class ProductsAdminViewComponent {
  productsService = inject(ProductService);

}
