import { Extra } from "./extra.model";

export class OrderItem {

    public id: number;
    public quantity: number;
    public status_id: number;
    public product_id: number;
    public sub_order_id: number;
    public extra:Extra[] = [];


    constructor(id?: number, quantity?: number, sub_order_id?: number, product_id?: number, status_id?: number) {
        this.id = id!;
        this.quantity = quantity!;
        this.sub_order_id = sub_order_id!;
        this.product_id = product_id!;
        this.status_id = status_id!;
    }

}