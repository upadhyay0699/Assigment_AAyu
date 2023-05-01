
import { useState } from "react";
import { useEffect } from "react";
import Home from "./home";
import axios from "axios";




function Homepage(){

    const [data, setData] = useState([])
    const [about,setabout] = useState(false)
    const [user1,setuser1]= useState()
    

    useEffect(()=>{
        axios.get("https://panorbit.in/api/users.json")
        .then((res)=>{
            setData(res)
            console.log(res)

        }
        )
    },[])

    function clickme(user){
        setuser1(user)
                setabout(true)
            }

     

            

    return(

        <div className="wd-panel1" id="result_panel">   
       {

       about?<Home user={user1}/>:
       
       <div>
        <div className="wd-panel">
       <div className="panel-heading"><h4 className="panel-title">Select An Account</h4>
       </div>
       <ul className="list-group ">
       {data?.data?.users.map((user)=>{
           const{id, name ,profilepicture,phone,company,website,address,email,username}=user;
           
           
          
               return(<div>
                   
                   <button className="buttonlist"> <li className="lt-dt"  key={id} onClick={()=>clickme(user)}  >
                        <span className="wd-50"> <img src={profilepicture} alt="" /> </span>
                        <div className="mt-12">
                         <div className="ml-46"> {name} </div>
                       </div>
             
                   </li>
                   </button>   
                 
                     
                   </div>
                   
               )
           })} 
   </ul>
   </div>
   </div>
       }
   </div>
       


        

    );
}

export default Homepage;