import { GroupedObservable } from "rxjs";
import { Group } from "./group.model";

export class Category{

    public id: number;
    public name : string;
    public groupId : number;
  
  
    constructor(id?: number, name?: string, groupId?:number){
          this.id = id!;
          this.name = name!;
         this.groupId = groupId!;
    }
  
  }
  