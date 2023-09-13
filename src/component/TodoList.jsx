import React from 'react'

export const TodoList = (props) => {

    

  return (
    <>
    <div className='todo_style'>
        <i className="fa-solid fa-trash"
        onClick={()=>{
            props.onSelect(props.id)
        }}
        ></i>
        {/* <i class=></i> */}

    <li>{props.text}</li>
    </div>
    </>
  )
}
