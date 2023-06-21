import { useForm } from "react-hook-form";
import { teamMeeting } from "../../../Models/meetingModel";
import "./addMeeting.css";
import axios from "axios";
import { useState, useEffect } from "react";

function AddMeeting(): JSX.Element {
    const [options, setOptions] = useState<any>([]);
    const { register, handleSubmit } = useForm<teamMeeting>();
        useEffect(()=>{
        axios.get("http://localhost:4000/api/v1/dev/getAllTeams")
        .then(async(res)=>{
            // console.log(res.data)
            setOptions(res.data)
     
        })
       
       }
    ,[])
    const addMeeting=(data:teamMeeting)=>{
        // console.log( typeof data.dev_teamCode)
        if(data.startingTime>data.endingTime){
            alert("endingTIme needs to be after starting time")
        }else{
            axios.post("http://localhost:4000/api/v1/dev/addMeeting",data)
            .catch((err)=>{
                // console.log(err)
                alert("pick team first")
            })
        }
    }
    return (
        <div className="addMeeting">
			add meeting
            <form style={{border:"1px solid black", width:"400px"}} onSubmit={handleSubmit(addMeeting)}>
            <select required {...register("dev_teamCode")} >
            <option selected disabled>
              Select team
            </option>
            {options.map((item: any) => (
             <option key={item.teamCode} value={item.teamCode}>
              {item.teamName}
              </option>
))}
            </select>
            <br/>
            <label >starting date:</label>
            <input type="datetime-local"  {...register("startingTime")} required></input>
            <br/>
            <label >ending date:</label>
            <input type="datetime-local" {...register("endingTime")}required></input>
            <br/>
            <input type="text" placeholder="description" {...register("description")}required></input>
            <br/>
            <input type="text" placeholder="meeting room" {...register("meetingRoom")}required></input>
            <br/>
            <input type="submit" style={{background:"lightgreen"}}></input>
            <input type="reset"></input>
            </form>
        </div>
    );
}

export default AddMeeting;
