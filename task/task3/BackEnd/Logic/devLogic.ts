import { teamMeeting } from "../Models/meetingModel";
import dal_mysql from "../Utils/dal_mysql";
const getTeams=async()=>{
const SQLcmd=`
SELECT * FROM dev_team
`
const data=await dal_mysql.execute(SQLcmd)
return(data)
}
const getMeetings=async()=>{
    const SQLcmd=`
    SELECT * FROM dev_meeting
    `
    const data=await dal_mysql.execute(SQLcmd)
    return(data)
}
const addMeeting=async(newMeeting:teamMeeting)=>{
    if(newMeeting.dev_teamCode<=0){
        return("choose team")
    }else{
        // console.log(newMeeting);
    const SQLcmd=`
    INSERT INTO dev_meeting 
    (dev_teamCode,startingTime, endingTime, description, meetingRoom) VALUES 
    (${newMeeting.dev_teamCode}, '${newMeeting.startingTime}', 
    '${newMeeting.endingTime}', '${newMeeting.description}', '${newMeeting.meetingRoom}')
    `
    console.log(SQLcmd)
    const data = await dal_mysql.execute(SQLcmd)
    return(data)
    }
}

export{getMeetings,getTeams,addMeeting}


// INSERT INTO dev_meeting (dev_teamCode, dev_meeting, startingTime, endingTime, description, meetingRoom) VALUES (1, 'Meeting 1', '2023-06-20', '2023-06-21', 'Discussion on UI/UX design', 'Room A')