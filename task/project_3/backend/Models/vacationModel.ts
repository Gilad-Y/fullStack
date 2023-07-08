export class vacationModel{
    public vacationCode:number;
    public destination:string;
    public description:string;
    public startingDate:Date;
    public endingDate:Date;
    public price:number;
    public fileName:string;
    constructor(vacationCode:number,destination:string , description:string,startingDate:Date,endingDate:Date,price:number,fileName:string){
        this.vacationCode=vacationCode;
        this.destination=destination;
        this.description=description;
        this.startingDate=startingDate;
        this.endingDate=endingDate;
        this.price=price;
        this.fileName=fileName;
    }
}