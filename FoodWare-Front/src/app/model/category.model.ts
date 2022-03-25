import { GroupedObservable } from "rxjs";
import { Group } from "./group.model";

export class Category{

    public id: number;
    public name : string;
    public group : Group;
  
  
    constructor(id?: number, name?: string, group?:Group){
          this.id = id!;
          this.name = name!;
         this.group = group!;
    }
  
  }
  