export class Product {

  public id: number;
  public name: string;
  public price: number;
  public description: string;
  public categoryId: number;
  public imageId: number;


  constructor(id?: number, name?: string, price?: number, description?: string,
    categoryId?: number, imageId?: number) {
    this.id = id!;
    this.name = name!;
    this.price = price!;
    this.description = description!;
    this.categoryId = categoryId!;
    this.imageId = imageId!;
  }

}
