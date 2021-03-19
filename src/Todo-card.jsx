import React, { useState } from 'react';
import './todo-card.css';
import Todolist from './Todo-list';

const TodoCard  = () => {
   const [newitem, set_newitem] = useState("");
   const [itemset, set_itemset] = useState([]);

   const inputEvent = (event) => {
      set_newitem(event.target.value)
   };
   const addItem = () => {
      set_itemset((olditems) => {
         return [newitem,...olditems];       
      });
      set_newitem('')
   };
   const deleteItem = (item_id) => {
      //console.log(item_id)
      set_itemset((__olditem) => {
         return(
            __olditem.filter((arr, index) => {
               //console.log(arr)
               return index !== item_id
            })
         );
      });
   }
   return(
      <>
         <div className="main_div">
            <div className="center_div">
               <br/>
                  <h1>ToDo List</h1>
               <br/>
               <input type="text" placeholder="type something" maxLength="15" value={newitem} onChange={ inputEvent }/>
               <button onClick={ addItem }>+</button>

               <ol>
                  {
                     itemset.map((itemval, index) => {                                   
                        return <Todolist 
                              key={index}
                              id={index}
                              text={itemval} 
                              onSelect={ deleteItem }
                           />;         
                     })
                  }
               </ol>

            </div>
         </div>
      </>
   );
}
export default TodoCard;