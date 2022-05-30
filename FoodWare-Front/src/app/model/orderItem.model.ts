import { Extra } from "./extra.model";
import { Product } from "./product.model";

export class OrderItem {

    public id: number;
    public quantity: number;
    public status_id: number;
    public product: Product;
    public sub_order_id: number;
    public extra: Extra[] = [];


    constructor(id?: number, quantity?: number, sub_order_id?: number, product?: Product, status_id?: number) {
        this.id = id!;
        this.quantity = quantity!;
        this.sub_order_id = sub_order_id!;
        this.product = product!;
        this.status_id = status_id!;
    }

}