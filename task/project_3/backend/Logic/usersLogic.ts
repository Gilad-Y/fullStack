import { OkPacket } from "mysql";
import { userModel } from "../Models/userModel";
import dal_mysql from "../Utils/dal_mysql";
const addUser=async(userInfo:userModel)=>{

const SQLcmd=`
INSERT INTO users_table (firstName, lastName, userEmail, userPassword, userType)
 VALUES ('${userInfo.firstName}', '${userInfo.lastName}', '${userInfo.userEmail}',
  '${userInfo.userPassword}', '${userInfo.userType}');
`
const data:OkPacket =await dal_mysql.execute(SQLcmd);
userInfo.userCode=data.insertId
// console.log("i am adding this",userInfo)
return([userInfo])
}
const getUsers=async()=>{
  const SQLcmd=`
  SELECT * FROM users_table
  `
  const data =await dal_mysql.execute(SQLcmd);
  return(data)
}
const logIn=async(user:userModel)=>{
  // console.log("this user",user)
  const SQLcmd=`
  SELECT userCode,firstName,lastName,userEmail,userType FROM users_table WHERE userEmail='${user.userEmail}'AND userPassword ='${user.userPassword}'
  `
  const data =await dal_mysql.execute(SQLcmd);
  if (data.length==1){
    // console.log("the user is",data)
    return(data)
  }else{
    return(false)
  }
  // console.log(data)
  // return(data)
}
const checkEmail=async(email:string)=>{
  const SQLcmd=`
  SELECT count(*) as 'email' FROM users_table WHERE userEmail='${email}'
  `
  const data= await dal_mysql.execute(SQLcmd)
  // console.log(email)
  // return (Object.keys(data))
  // return (Object.values(data))
  return((data[0].email)==0)
  }
export { addUser,getUsers,logIn,checkEmail};