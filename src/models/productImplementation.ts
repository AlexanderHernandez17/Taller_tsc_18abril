import { Product } from "./product.interface";

export class ProductImplementation implements Product {
    constructor(
        public name: string,
        public price: number,
        public category: string
    ) {}
}