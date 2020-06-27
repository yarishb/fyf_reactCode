import React, {Component} from 'react';
import axios from 'axios';
import './todo.scss'


import Input from './input';
import ListTodo from './todoList';
import Navbar from '../../components/navBar/navbar';

class Todo extends Component {

  state = {
    todos: []
  }

  componentDidMount(){
    this.getTodos();
  }

  getTodos = () => {
    axios.get('https://peaceful-basin-44949.herokuapp.com/users/todos')
      .then(res => {
        if(res.data){
          this.setState({
            todos: res.data
          })
        }
      })
      .catch(err => console.log(err))
  }

  deleteTodo = (id) => {
    axios.delete(`https://peaceful-basin-44949.herokuapp.com/users/todos/${id}`)
      .then(res => {
        if(res.data){
          this.getTodos()
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    let { todos } = this.state;

    return(
      <>
        <Navbar />
      <div className="fullPage">
          <div>
            <div className="inputTodo">
            <div className="todoText">
                <div className="headerTodo">FEEL YOUR FIT</div>
            </div>
            <div className="usageTodo">
            <Input  getTodos={this.getTodos}/>
            <ListTodo todos={todos} deleteTodo={this.deleteTodo}/>
            </div>
            </div>
        </div>
      </div>
      </>
    )
  }
}

export default Todo;