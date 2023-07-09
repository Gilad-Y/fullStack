//INSERT INTO `task_4`.`AccountOperations` (`accountNumber`, `Type`, `amount`) VALUES ('8785219', 'deposit', '100');
import dal_mysql from "../Utils/dal_mysql"

const getAccountData=async(number:string)=>{
const SQLcmd=`
SELECT accountNumber, Type, data From AccountOperations WHERE accountNumber='${number}'
`;
const data= await dal_mysql.execute(SQLcmd);
return data;
}

const addAction=async(action:any)=>{
const SQLcmd=`
INSERT INTO AccountOperations (accountNumber, Type, data) VALUES ('${action.accountNumber}', '${action.Type}', '${action.data}');
`;
const data= await dal_mysql.execute(SQLcmd);
return data.insertId;
}
export {getAccountData,addAction}