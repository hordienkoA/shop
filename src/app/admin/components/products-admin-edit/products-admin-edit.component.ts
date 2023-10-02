import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-admin-edit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-admin-edit.component.html',
  styleUrls: ['./products-admin-edit.component.css']
})
export class ProductsAdminEditComponent {
 
  @Input() productID!: number;
  
}
