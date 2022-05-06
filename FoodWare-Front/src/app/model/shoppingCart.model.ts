import { OrderItem } from "./orderItem.model";

export class ShoppingCart {
    id;
    totalQuantity:number;
    items: OrderItem[] = [];

    constructor(id?: number) {
        this.id = id;
        this.totalQuantity = 0;
    }
}