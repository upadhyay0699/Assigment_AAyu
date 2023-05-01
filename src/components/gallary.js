import React from 'react';
import {Link} from  'react-router-dom'
function Gallary(props) {
   
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
                <h4 className='proflwheading'>Gallary</h4> 
              </div>
              
           </div>
           </div>
           </div>
           </>
           
        
        
    );
}

export default Gallary;