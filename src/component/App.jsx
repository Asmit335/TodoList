import React from 'react'
import "./index.css"
import { useState } from 'react'
import { TodoList } from './TodoList'


export const App = () => {

  const [input1, setinput1] = useState("");
  const [items, setitems] = useState([]);

  const itemsEvent=(e)=>{
    setinput1(e.target.value)
  }

  const handleClick =(e1)=>{
      setitems((olditems)=>{
    return  [...olditems,input1]
     })
     setinput1("");
  }

  const deleteItem =(id)=>{
    // alert("clicked")
    setitems((olditems)=>{
      return olditems.filter((arrE1,index)=>{
        return index !==id;
      })
    })
  }

  return (
    <>
    <div className="main_div">
      <div className="center">
        <br></br>
        <h1>ToDo List</h1>
        <br></br>
      
      <input type="text" value={input1} onChange={itemsEvent} placeholder='Add a Item' />

      <button onClick={handleClick}>+</button>

      <ol>
        {/* <li>{input1}</li> */}
        {
          items.map(( items,index)=>{
        return   <TodoList 
        key={index}
        id={index}
        onSelect={deleteItem}
        text={items}/>
          })
        }
      </ol>
      </div>

    </div>
    </>
  )
}
