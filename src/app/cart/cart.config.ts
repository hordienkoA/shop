import { InjectionToken } from '@angular/core';

export const CartsAPI = new InjectionToken<string>('CartsAPI', {
  providedIn: 'root',
  factory: () => 'http://localhost:3000/cart'
});