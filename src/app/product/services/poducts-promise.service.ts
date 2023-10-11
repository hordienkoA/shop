import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Product } from "../models";
import { firstValueFrom } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductsPromiseService{
    private productUrl = "http://localhost:3000/products";
    private http = inject(HttpClient);

    getProducts(): Promise<Product[]>{
        const request$ = this.http.get(this.productUrl);
        return firstValueFrom(request$)
        .then(response=> response as Product[])
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
      }

      getProduct(id: NonNullable<Product['id']>): Promise<Product>{
        const url = `${this.productUrl}/${id}`;

        const request$ = this.http.get(url);
        return firstValueFrom(request$)
        .then(response=> response as Product)
        .catch(this.handleError);
      }
}