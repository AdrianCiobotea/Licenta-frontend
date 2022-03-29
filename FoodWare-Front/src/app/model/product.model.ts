import { Category } from "./category.model";

export class Product{

    public id: number;
    public name : string;
    public price: number;
    public description : string;
    public categoryId: number;
    public imageURL : string;
    public isExtra : boolean;
  
  
    constructor(id?: number, name?: string,  price?: number,description?: string,
      categoryId?:number,imageURL?:string, isExtra?:boolean){
          this.id = id!;
          this.name = name!;
          this.price = price!;
          this.description = description!;
          this.categoryId = categoryId!;
          this.imageURL = imageURL!;
          this.isExtra = isExtra!;
    }
  
  }
  