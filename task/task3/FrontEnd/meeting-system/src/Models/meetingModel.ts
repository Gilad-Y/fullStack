export class teamMeeting {
  public meetingCode:number;
  public dev_teamCode: number;
  public startingTime:string;
  public endingTime:string;
  public description:string;
  public meetingRoom:string;

  constructor(meetingCode:number,dev_teamCode:number,startingTime:string,endingTime:string,description:string,meetingRoom:string) {
    this.meetingCode=meetingCode,
    this.dev_teamCode=dev_teamCode,
    this.startingTime=startingTime,
    this.endingTime=endingTime,
    this.description=description,
    this.meetingRoom=meetingRoom

  }
}
