export class ShoppingCart {

    public id: number;
    public initiatorId: number;


    constructor(id?: number, initiatorId?: number) {
        this.id = id!;
        this.initiatorId = initiatorId!;
    }

}