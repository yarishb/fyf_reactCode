import React, { Component } from 'react';
import axios from 'axios';
import './input.scss'

class Input extends Component {

  state = {
    action: ""
  }

  addTodo = () => {
    const task = {action: this.state.action}

    if(task.action && task.action.length > 0){
      axios.post('https://peaceful-basin-44949.herokuapp.com/users/todos', task)
        .then(res => {
          if(res.data){
            this.props.getTodos();
            this.setState({action: ""})
          }
        })
        .catch(err => console.log(err))
    }else {
      console.log('input field required')
    }
  }

  handleChange = (e) => {
    this.setState({
      action: e.target.value
    })
  }

  render() {
    let { action } = this.state;
    return (
      <div className="todoInputArea">
        <div className="form__group field todo">
                        <input style={{paddingTop: "17px"}} value={action} onChange={this.handleChange} className="form__field todoInput" placeholder="Add your target"  />
                        <label for="name3" className="form__label todoInput">Add your target</label>
        </div>
        <div className="todoButton" onClick={this.addTodo}>+</div>
      </div>
    )
  }
}

export default Input