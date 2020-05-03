import { Ingredients } from "../shared/ingredients.model";

export class Recepie{
  public recepieName: string;
  public imgUrl: string;
  public recepieDescription: string;
  public recipeIngredients: Ingredients[]

  constructor(name: string,imgUrl: string,recepieDesc: string,ingredients: Ingredients[]){
    this.recepieName = name
    this.imgUrl = imgUrl
    this.recepieDescription = recepieDesc
    this.recipeIngredients = ingredients
  }

}