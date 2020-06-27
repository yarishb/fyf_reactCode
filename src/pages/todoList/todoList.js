import React from 'react';
import './todoList.scss'

const ListTodo = ({ todos, deleteTodo }) => {

  return (
      <>
      {
            (
              todos.map(todo => {
                return (
                <>
                <div className='todoItemsDiv'>
                  <div className="todoItem" key={todo._id}><input onClick={() => deleteTodo(todo._id)} className="checkbox" type="checkbox"/>{todo.action}</div>
                </div>
                </>
                )
              })
            )
            
      }
      </>
  )
}

//                  <div className="deleteTodo" onClick={() => deleteTodo(todo._id)}>x</div>


export default ListTodo