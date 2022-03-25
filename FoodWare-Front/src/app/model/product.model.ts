import { Category } from "./category.model";

export class Product{

    public id: number;
    public name : string;
    public price: number;
    public description : string;
    public category: Category;
    public image : string;
    public isExtra : boolean;
  
  
    constructor(id?: number, name?: string,  price?: number,description?: string,
        category?:Category,image?:string, isExtra?:boolean){
          this.id = id!;
          this.name = name!;
          this.price = price!;
          this.description = description!;
          this.category = category!;
          this.image = image!;
          this.isExtra = isExtra!;
    }
  
  }
  