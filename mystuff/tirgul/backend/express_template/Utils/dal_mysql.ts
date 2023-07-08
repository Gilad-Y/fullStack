import mysql from "mysql";
import config from "./Config";
const connection = mysql.createPool({
host: config.mysql_host,
user: config.mysql_user,
password: config.mysql_password,
database: config.mysql_database,
port:config.mysql_port,
})

const execute = (sql:string):Promise<any> =>{
    return new Promise<any>((resolve,reject)=>{
        connection.query(sql,(err,res)=>{
            if (err) {
                reject(err);
                console.log("mysql error: ",err)
                return;
            }
            resolve(res);
        })
    })
}
export default {execute};