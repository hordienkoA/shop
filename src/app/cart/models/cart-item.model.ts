import { Product } from "src/app/product/models/product.model";

export class CartItem{
    constructor(
        public product: Product,
        public quantity: number
    ){}
}
