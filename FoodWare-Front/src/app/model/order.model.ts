export class Order {

    public id: number;
    public initiatorId: number;
    public subOrderId: number;


    constructor(id?: number, initiatorId?: number, subOrderId?: number) {
        this.id = id!;
        this.initiatorId = initiatorId!;
        this.subOrderId = subOrderId!;
    }

}