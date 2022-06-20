import { OrderItem } from "./orderItem.model";
import * as uuid from 'uuid';

export class ShoppingCart {
    id;
    userId:string;
    totalQuantity: number;
    items: OrderItem[] = [];

    constructor(id?: number) {
        this.id = id;
        this.totalQuantity = 0;
        this.userId = uuid.v4();
    }
}