export class SubOrder {
    public id: number;
    public paymentId: number;
    public userId: number;

    constructor(id?: number, paymentId?: number, userId?: number) {
        this.id = id!;
        this.paymentId = paymentId!;
        this.userId = userId!;
    }

}