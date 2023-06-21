import { useEffect, useRef, useState } from "react";
import "./main.css";
import axios from "axios";
import { teamMeeting } from "../../../Models/meetingModel";

function Main(): JSX.Element {
    const [options, setOptions] = useState<any>([]);
    // const meetings =useRef<teamMeeting[]>([]);
    const [meetings,setMeeting]=useState("")
        useEffect(()=>{
        axios.get("http://localhost:4000/api/v1/dev/getAllTeams")
        .then(async(res)=>{
            // console.log(res.data)
            setOptions(res.data)
     
        })
       
       }
    ,[])
    const showMeetings = (code: number) => {
        axios
          .get("http://localhost:4000/api/v1/dev/getAllMeetings")
          .then((res) => {
            // console.log(res.data);
            const tableData = res.data
              .filter((item: teamMeeting) => item.dev_teamCode === code)
              .map((item: teamMeeting) => (
                <tr key={item.meetingCode}>
                  <td>{item.meetingCode}</td>
                  <td>{item.dev_teamCode}</td>
                  <td>{item.startingTime}</td>
                  <td>{item.endingTime}</td>
                  <td>{item.description}</td>
                  <td>{item.meetingRoom}</td>
                </tr>
              ));
            setMeeting(tableData);
          });
      };
      
    
    return (
        <div className="main">
			main
            <select required onChange={(event) => showMeetings(+event.target.value)}>
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
            
            {meetings!=""?
            <table>
                <thead>
                <th>meeting code</th>
                <th>group code</th>
                <th>starting time</th>
                <th>ending time</th>
                <th>description</th>
                <th>meeting room</th>
                </thead>
                <tbody>{meetings}</tbody>
            </table>:""}
        </div>
    );
}

export default Main;
