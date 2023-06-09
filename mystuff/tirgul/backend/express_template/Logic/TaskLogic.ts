import { OkPacket } from "mysql";
import dal_mysql from "../Utils/dal_mysql";
import {Tasks} from "../../../frontend/src/Components/modal/taskModal"


const getAllTasks=async()=>{
    const SQLcmd=`
    SELECT * FROM taskTable
    `
    const data =await dal_mysql.execute(SQLcmd);
    return data;
}
const addNewTask=async(newTask:Tasks)=>{
    const SQLcmd=`
    INSERT INTO taskTable 
    (content, type) VALUES 
    ('${newTask.content}', '${newTask.type}')
    `;
    console.log(SQLcmd);
    const result:OkPacket = await dal_mysql.execute(SQLcmd);
    return result.insertId;
}
const deleteTask =async(id:Number)=>{
    const SQLcmd=`
    DELETE FROM taskTable WHERE id=${id}
    `
    dal_mysql.execute(SQLcmd);
}
const getTaskById=async(id:number)=>{
    const SQLcmd=`
    SELECT * FROM taskTable WHERE id=${id}
    `
    const data=dal_mysql.execute(SQLcmd);
    return data;
}
const updateTask=async (updatedTask:Tasks) => {
    const SQLcmd=`
    UPDATE taskBoard.taskTable SET content = 
    '${updatedTask.content}', type = '${updatedTask.type}' WHERE (id = ${updatedTask.id});
    `
    console.log(SQLcmd,updatedTask);
    const data= await dal_mysql.execute(SQLcmd);
    return data;
}

export {getAllTasks,addNewTask,deleteTask,updateTask,getTaskById}
//UPDATE `taskBoard`.`taskTable` SET `content` = 'i didit ?' WHERE (`id` = '23');
// UPDATE `taskBoard`.`taskTable` SET `content` = 'updateed', `type` = 'right' WHERE (`id` = '26');