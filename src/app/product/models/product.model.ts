import { Category } from "src/app/sample/models/category.enum";

export class Product{
    constructor(
    public id: number | null,
    public name: string,
    public description?: string,
    public price?: number,
    public category?: Category,
    public isAvailable?: boolean,
    public imagePath?: string
    ){}
}
