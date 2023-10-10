import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-item-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-item-admin.component.html',
  styleUrls: ['./products-item-admin.component.css']
})
export class ProductsItemAdminComponent {
  @Input()
  product!: Product;

  private router = inject(Router);

  navigateToEdit(){
    this.router.navigate(['admin', 'products', 'edit', this.product.id ]);
  }
}
