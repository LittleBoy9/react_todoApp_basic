import React from 'react';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
const Todolist = (props) => {
   //console.log(props)
  
   return (
      <>     
         <li> 
            {props.text} 
            <span>
               <DeleteForeverRoundedIcon 
               onClick={() => {         
                  props.onSelect(props.id) 
               }} className="deleteIcon"/>
            </span> 
         </li>
      </>
   );

}
export default Todolist;