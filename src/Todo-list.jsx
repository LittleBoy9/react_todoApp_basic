import React from 'react';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';

const Todolist = (props) => {
   //console.log(props)
  
   return (
      <>     
         <li> 
            <span><DeleteForeverRoundedIcon 
               onClick={() => {
                  props.onSelect(props.id) 
               }}/>
            </span>                               
            {props.text} 
         </li>
      </>
   );

}
export default Todolist;