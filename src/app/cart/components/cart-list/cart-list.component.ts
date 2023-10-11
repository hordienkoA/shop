import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { CartItem } from '../../models/cart-item.model';
import { Router } from '@angular/router';
import { AppSettingsService } from 'src/app/core/services/app-settings.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})

export class CartListComponent implements OnInit {
 

  private router = inject(Router);
  private appSettingsService = inject(AppSettingsService);
  @Input() cartItems!: Array<CartItem>;
  @Input() totalQuantity!: number;
  @Input() totalSum!: number;
  @Input() isEmptyCart!: boolean;
  @Output() QuantityDecrease = new EventEmitter<CartItem>();
  @Output() QuantityIncrease = new EventEmitter<CartItem>();
  @Output() DeleteItem = new EventEmitter<CartItem>();

  sortOptions = ['product.price', 'quantity', 'product.name'];
  _selectedSortOption = this.sortOptions[0] || '';
  _isAscending = true;

  set isAscending(value: boolean){
    this._isAscending = value;
    const isAscConfig = this.appSettingsService.settings.find(el=> el.name == "isAscending");
    if(isAscConfig){
      isAscConfig.value = value.toString();
      this.appSettingsService.storeSettings();
    }
  }

  get isAscending(){
    return this._isAscending
  }
  
  set selectedSortOption(value: string){
    this._selectedSortOption = value;
    const selectedOption = this.appSettingsService.settings.find((el)=>el.name=="selectedSortOption");
    if(selectedOption){
      selectedOption.value = value;
      this.appSettingsService.storeSettings();
    }
  }

  get selectedSortOption(){
    return this._selectedSortOption
  }
  ngOnInit(): void {
    this.isAscending = this.appSettingsService.settings.find(el=> el.name == "isAscending")?.value == "true";
    this.selectedSortOption = this.appSettingsService.settings.find((el)=>el.name=="selectedSortOption")?.value || this.sortOptions[0];
  }
  onQuantityIncrease(cartItem: CartItem){
    this.QuantityIncrease.emit(cartItem);
  }

  onQuantityDecrease(cartItem: CartItem){
    this.QuantityDecrease.emit(cartItem);
  }

  onDeleteItem(cartItem: CartItem){
    this.DeleteItem.emit(cartItem);
  }
  trackByItems(index: number, item: CartItem): string { return item.product.name; }

  navigateToOrder(){
    this.router.navigate(['/order']);
  }
}


