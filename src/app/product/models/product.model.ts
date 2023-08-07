import { Category } from "src/app/sample/models/category.enum";

export class Product{
    constructor(
    public name?: string,
    public description?: string,
    public price?: number,
    public category?: Category,
    public isAvailable?: boolean
    ){}
}