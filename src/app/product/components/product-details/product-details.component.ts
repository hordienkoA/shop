import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product!: Product;

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private cartService = inject(CartService);

  @Input({ required: true }) productFromResolver: Product = new Product(null, '', '');

  ngOnInit(): void {
    console.log("asdfasd");
    this.product = {...this.productFromResolver};
  }

  onAddToCart(): void{
    this.cartService.addProduct(this.product);
  }
}
