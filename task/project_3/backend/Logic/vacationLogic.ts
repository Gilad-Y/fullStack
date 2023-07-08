
import { likeModel } from "../Models/likeModel";
import { vacationModel } from "../Models/vacationModel";
import dal_mysql from "../Utils/dal_mysql";
const fs=require("fs");
const addVacation=async(vacationInfo:vacationModel)=>{
const SQLcmd=`
INSERT INTO vacation_table (destination, description, startingDate, endingDate, price,fileName) VALUES 
('${vacationInfo.destination}', 
'${vacationInfo.description}',
 '${vacationInfo.startingDate}',
  '${vacationInfo.endingDate}', 
  '${vacationInfo.price}',
  '${vacationInfo.fileName}');
`
const data =await dal_mysql.execute(SQLcmd);
vacationInfo.vacationCode=data.insertId
// console.log(SQLcmd)
// console.log("i am adding this",vacationInfo)
return([vacationInfo])
}
const getVacations=async()=>{
  const SQLcmd=`
  SELECT * FROM vacation_table
  `
  const data =await dal_mysql.execute(SQLcmd);
  return(data)
}
const getVacationById=async(id:number)=>{
  const SQLcmd=`
  SELECT * FROM vacation_table WHERE vacationCode=${id}
  `
  const data =await dal_mysql.execute(SQLcmd);
  return(data)
}
const getFilter = async () => {
  const curr_date = new Date().toISOString().split('T')[0]; // Get current date in 'YYYY-MM-DD' format

  const SQLcmd = `
    SELECT * FROM vacation_table
    WHERE startingDate < '${curr_date}' AND endingDate > '${curr_date}'
  `;

  const data = await dal_mysql.execute(SQLcmd);
  return data;
};
const getFutureVacations = async () => {
  const curr_date = new Date().toISOString().split('T')[0]; // Get current date in 'YYYY-MM-DD' format

  const SQLcmd = `
    SELECT * FROM vacation_table
    WHERE startingDate > '${curr_date}'
  `;

  const data = await dal_mysql.execute(SQLcmd);
  return (data);
};
const deleteVacation=async(id:number)=>{
const SQLcmd=`
DELETE FROM vacation_table
WHERE vacationCode=${id}
`
await dal_mysql.execute(SQLcmd)
return(id)
}
const updateVacation=async()=>{

}
const addLike=async(likeInfo:likeModel)=>{
  const SQLcmd=`
INSERT INTO likes_table (userCode,vacationCode) VALUES 
('${likeInfo.userCode}', 
  '${likeInfo.vacationCode}');
`
const data =await dal_mysql.execute(SQLcmd)
return(data)
}
const deleteLike = async(likeInfo:likeModel)=>{
  const SQLcmd=`
  DELETE FROM likes_table
  WHERE userCode=${likeInfo.userCode} AND vacationCode=${likeInfo.vacationCode}
  `
  // const data=likeInfo
  const data=await dal_mysql.execute(SQLcmd)
  return(data)
}
const getAllLikes =async()=>{
const SQLcmd=`
SELECT * FROM likes_table
`
const data =await dal_mysql.execute(SQLcmd)
return(data)
}
const makeFile=(data:any)=>{
  const csvContent = Object.entries(data.graphData)
    .map(([destination, followers]) => `${destination},${followers}`)
    .join("\n");

  const csvData = `Destination,Followers\n${csvContent}`;

  try {
    fs.unlinkSync("Vacation Followers.csv");
    console.log("Previous file deleted.");
  } catch (err: any) {
    if (err && err.code !== "ENOENT") {
      console.log("Error deleting file:", err);
      return;
    }
  }

  fs.appendFile("Vacation Followers.csv", csvData, (err:any) => {
    if (err) {
      console.log("Error creating file:", err);
    } else {
      console.log("File saved!");
    }
  });
}

export { getVacations,getVacationById,addVacation,getFilter,getFutureVacations,deleteVacation,updateVacation,addLike,deleteLike,getAllLikes,makeFile};

//INSERT INTO `project_3`.`vacation_table` (`destination`, `description`, `startingDate`, `endingDate`, `price`) VALUES ('israel', 'eat good food', '06/06/2001', '07/07/1997', '100');


//UPDATE `project_3`.`vacation_table` SET `destination` = 'rfsdbv', `description` = 'sevsev', `startingDate` = '2023-06-21', `endingDate` = '2023-06-07', `price` = '237' WHERE (`vacationCode` = '13');
