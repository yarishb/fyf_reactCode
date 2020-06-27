import React, { Component } from 'react';
import './caloriesCalendar.scss';
import Navbar from '../../components/navBar/navbar'


import Elements from './foundElement/elements';

import axios from 'axios';

class CaloriesCalendar extends Component{
    constructor(props) {

        //states

        super(props);
        this.state = {
                      food: "", 
                      foodCalories: null,
                      data: [], 
                      ateCalories: null,
                    };
        
        
        //handlers
        
        
        this.foodCaloriesChange =    this.foodCaloriesChange.bind(this);
        this.ateCaloriesChange  =    this.ateCaloriesChange.bind(this)
        this.foodChange         =    this.foodChange.bind(this)
        this.submit             =    this.submit.bind(this)
    }

     componentDidMount(){
         this.getCalories()
     }

     //get request to backend

     getCalories = (props) => {
             axios.get('https://peaceful-basin-44949.herokuapp.com/users/calories')
                 .then(res =>{
                     if(res.data){
                         console.log(res.data);
                         for(let i in res.data){
                           console.log(res.data[i].caloriesLeft)
                           const foundCalories = res.data[i].foodCalories
                           this.setState({foodCalories: foundCalories})
                           this.setState({ateCalories: res.data[i].caloriesLeft})
                         }
                        this.setState({
                            ateCalories: this.state.ateCalories - this.state.foodCalories
                        })
                        this.setState({data: res.data})
                     }
                 })
                 .catch(err => console.log(err))
          }


    //post request to backend

     addAteFood = () => {
        const ateFood = {food: this.state.food, foodCalories: this.state.foodCalories, caloriesLeft: this.state.ateCalories} 
     
        if(ateFood.foodCalories){
            axios.post("https://peaceful-basin-44949.herokuapp.com/users/calories", ateFood)
                .then(res => {
                    if(res.data){
                        this.getCalories();
                    }
                })
                .catch(err => console.log(err))
        }else{
            console.log('input field required')}
    }

    //deleting elements

    deleteElemets = () => {
        axios.delete('https://peaceful-basin-44949.herokuapp.com/users/calories/delete')
          .then(res => {
            if(res.data){
                this.setState({ateCalories: null + this.state.foodCalories})
                this.getCalories()
            }
          })
          .catch(err => console.log(err))
      }
      

    //event hendlers

      foodChange(e){
          this.setState({food: e.target.value})
          e.preventDefault()
      }

      foodCaloriesChange(e){
          this.setState({foodCalories: e.target.value})
      }

      ateCaloriesChange(e){
          this.setState({ateCalories: e.target.value})
          e.preventDefault()
      }

     submit(e){
         e.preventDefault()
     }



    render(){
        return(
            <>
            <Navbar />
            <div className="right">
                <form onSubmit = {this.submit}>
                <div className="rightSubtitle">calories calendar</div>
                <div className="block">
                    <div className="form__group field bmi caloriesCalendar">
                        <input type="text" className="form__field bmiLabel rightCaloriesCalendar" placeholder="Food"  onChange={this.ateCaloriesChange} name="ateCalories" id='ateCalories' />
                        <label for="ateCalories" className="form__label bmiLabel rightCaloriesCalendarInput">Calories you have to eat:</label>
                    </div><div className="calloriesToEat">{this.state.ateCalories}</div> 
                <div className="addAteBlock">
                <div className="form__group field bmi caloriesCalendarAdd">
                    <input type="text" className="form__field bmiLabel" placeholder="Food" value={this.state.food} onChange={this.foodChange} name="food" id='food' />
                    <label for="food" className="form__label bmiLabel">Food you have eaten:</label>
                </div>
                <div className="form__group field bmi caloriesCalendarAdd">
                    <input type="text" className="form__field bmiLabel" placeholder="Calories"  onChange={this.foodCaloriesChange} name="foodCalories" id='foodCalories' />
                    <label for="foodCalories" className="form__label bmiLabel">Calories in this food:</label>
                </div>
                <button className="addToCaloriesCalendar add" onClick={this.addAteFood} type="submit" value="Submit">Add</button>
                <button className="addToCaloriesCalendar removeAll" onClick={this.deleteElemets} >Remove all</button>                
                </div></div>
                </form>
                <div className="dataAboutEaten">
                    <Elements data={this.state.data}/>
                </div>
                </div>
                <div className="calendarImg"></div>
            </>
        )
    }
}

export default CaloriesCalendar