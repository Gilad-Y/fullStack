export class userModel{
    public userCode:number;
    public firstName:string;
    public lastName:string;
    public userEmail:string;
    public userPassword:string;
    public userType:string;
    constructor(userCode:number,firstName:string , lastName:string,userEmail:string,userPassword:string,userType:string){
        this.userCode=userCode;
        this.firstName=firstName;
        this.lastName=lastName;
        this.userEmail=userEmail;
        this.userPassword=userPassword;
        this.userType=userType;
    }
}