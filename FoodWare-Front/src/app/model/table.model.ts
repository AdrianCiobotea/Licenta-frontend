export class Table {

    public id: number;
    public table_id: string;
    public table_status: string;


    constructor(id?: number, table_id?: string, table_status?: string) {
        this.id = id!;
        this.table_id = table_id!;
        this.table_status = table_status!;
    }

}