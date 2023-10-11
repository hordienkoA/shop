import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Inject, Injectable, inject } from "@angular/core";
import { CartsAPI } from "../cart.config";
import { CartItem } from "../models/cart-item.model";
import { Observable, catchError, concatMap, map, retry, share, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class CartObservableService {
    
    private http = inject(HttpClient);
    isDisplayed = false;
    constructor(@Inject(CartsAPI) private cartsApi: string){

    }

    getCart(): Observable<CartItem[]>{
        return this.http.get<CartItem[]>(this.cartsApi)
        .pipe(
            share(),
            catchError(this.handleError))
    }

    addProductToCart(item: CartItem): Observable<CartItem[]>{
        const url = this.cartsApi;
        const options = {
          headers: new HttpHeaders({"Content-Type": 'application/json'})
        };

        return this.http
              .post<CartItem>(url, item,options)
              .pipe(
                concatMap(()=>this.getCart()),
                catchError(this.handleError))
    }

    updateCartItem(item: CartItem): Observable<CartItem[]>{
      const url = `${this.cartsApi}/${item.id}`;
      const options = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      };

      return this.http
            .put<CartItem>(url, item, options)
            .pipe(
              concatMap(()=>this.getCart()),
            catchError(this.handleError))
    }

    deleteFromCart(item: CartItem): Observable<CartItem[]>{
      const url = `${this.cartsApi}/${item.id}`;
      return this.http.delete(url).pipe(
        concatMap(()=>this.getCart()),
        catchError(this.handleError)
      )
    }

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong.
          console.error(
            `Backend returned code ${error.status}, body was: `,
            error.error
          );
        }
        // Return an observable with a user-facing error message.
        return throwError(
          () => new Error('Something bad happened; please try again later.')
        );
      }
  }