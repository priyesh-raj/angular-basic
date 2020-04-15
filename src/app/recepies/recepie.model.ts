export class Recepie{
  public recepieName: string;
  public imgUrl: string;
  public recepieDescription: string;

  constructor(name: string,imgUrl: string,recepieDesc: string){
    this.recepieName = name
    this.imgUrl = imgUrl
    this.recepieDescription = recepieDesc
  }

}