import axios from 'axios';
import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react'
import {Link} from  'react-router-dom'
import Popup from 'reactjs-popup';
function Home(props) {

    const[data ,setData] =useState([])

    useEffect(()=>{
        axios.get("https://panorbit.in/api/users.json")
        .then((res)=>{
            setData(res)
            console.log(res)

        }
        )
    },[])

    
    const user = props.user;
  return (
    <>
        
        
      <div className='maincontanier'>
        <div className='sidebar'>
         <div className='linkcolour'>
            <ul>
                <li>
                <Link to="/">Profile</Link>

                </li>
                <li>
                <Link to="/post">Post</Link>
                </li>
                <li>
                <Link to="/gallary">Gallery</Link>
                </li>
                <li>
                <Link to="/todo">ToDo</Link>
                </li>
            </ul>
       
      
  
        
   
       


         </div>
        
        </div>
      
        <div className='profileimg1'>
            <div className='profileimg'>
            <div>
              <h4 className='proflwheading'>Profile</h4> 
            </div>
            <div className='ingname'>
            <Popup trigger={
          <button className='buttu'>  <span className="wd-51img"> <img src={user.profilepicture} alt="" /> </span></button>}>
         <div className='popup'>
         <ul className='list-group'>
            <li>
            <span className='pf-155'>
                <img src={user.profilepicture}  alt="" />
            </span>
            </li>
            <li>
            <h5 className='hh4'>{user.name}</h5>  
            </li>
            <li>
            <p className='hh5'>{user.email}</p>
            </li>
         </ul>
         <ul className='list-group'>
         {data?.data?.users.slice(0,2).map((user)=>{
            return(<div>
                   
                <button className="buttonlist"> <li className="lt-dt-1"  key={user.id}   >
                     <span className="wd-51"> <img src={user.profilepicture} alt="" /> </span>
                     <div className="mt-13">
                      <div className="ml-47"> {user.name} </div>
                    </div>
          
                </li>
               
                </button>  
               
              
                  
                </div>
                
            )
        })} 
            
         
            <li className='sign-bt'> <Link to="/home" className='sign'>Sign Out</Link></li>

         </ul>
          
         </div>
          </Popup>
            </div>
         </div>
         <div className='photoadd'> 
         <div className="userimg">
            <span className='pf-153'>
                <img src={user.profilepicture}  alt="" />
            </span>
            <h5 className='hh1'>{user.name}</h5>
           
            <span className='hd-p '> 
               <p className='op-05'>Username</p>
               <p className='dot'>:</p>
                <h5> {user.username}</h5> 
            </span>
            <span className='hd-p'> 
               <p className='op-05'>e-mail</p>
               <p className='dot'>:</p>
               <h5 className='email'> {user.email}</h5> 
           </span>
           <span className='hd-p'> 
               <p className='op-05'>phone</p>
               <p className='dot'>:</p>
               <h5 className='email'> {user.phone}</h5> 
           </span>
           <span className='hd-p'> 
               <p className='op-05'> Website</p>
               <p className='dot'>:</p>
               <h5 className='email'> {user.website}</h5> 
           </span>
           <hr></hr>
           <p className='company'>Company</p>
           <span className='hd-p'> 
               <p className='op-05'> Name</p>
               <p className='dot'>:</p>
               <h5 className='name'> {user.name}</h5> 
           </span>
       
           <span className='hd-p'> 
               <p className='op-05'>catchPhrase</p>
               <p className='dot'>:</p>
               <h5 > {user.company.catchPhrase}</h5> 
           </span>
           


         </div>
         <div className="gip">
            <p className='mt-76'>Address:</p>
            <div className="add">
            <span className='hd-p'> 
               <p className='op-05'> Street</p>
               <p className='dot'>:</p>
               <h5 className='email'> {user.address.street}</h5> 
           </span>
           <span className='hd-p'> 
               <p className='op-05'> Suite</p>
               <p className='dot'>:</p>
               <h5 className='email'> {user.address.suite}</h5> 
           </span>
           <span className='hd-p'> 
               <p className='op-05'>City</p>
               <p className='dot'>:</p>
               <h5 className='email'> {user.address.city}</h5> 
           </span>
           <span className='hd-p'> 
               <p className='op-05'>Zipcode</p>
               <p className='dot'>:</p>
               <h5 className='email'> {user.address.zipcode}</h5> 
           </span>
           <span className='hd-g'>
           {user.address.geo.lat.lng}

           </span>

           

            </div>
            
         </div>

         </div>
       


        </div>
        
       
        

    </div>
 
  

    </>
  )
}

export default Home