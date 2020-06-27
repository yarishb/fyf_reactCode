//importing react, axios and styles

import React, {Component} from 'react';
import './caloriesCounter.scss'
import Navbar from '../../../components/navBar/navbar'
import axios from 'axios';

//importing  redux 

import {connect} from 'react-redux'


class CaloriesCounter extends Component{
    constructor(props) {

        //states

        super(props);
        this.state = {
                      weight: null, 
                      height: null,
                      age: null, 
                      calories: null, 
                      food: "", 
                      foodCalories: null,
                      data: [], 
                      ateCalories: null,
                      message: false
                    };
        
        
        //handlers
        
        
        this.submitMe           =    this.submitMe.bind(this);
        this.agechange          =    this.agechange.bind(this)
        this.heightchange       =    this.heightchange.bind(this);
        this.weightchange       =    this.weightchange.bind(this);
        this.calculateCalories  =    this.calculateCalories.bind(this); 
    }

     componentDidMount(){
         this.getCalories()
     }

     //get request to backend

     getCalories = (props) => {
             axios.get('http://localhost:5000/users/calories')
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
    //event hendlers


     heightchange(e){
        this.setState({height: e.target.value});
        e.preventDefault();
      }
    
       weightchange(e){
        this.setState({weight: e.target.value});
        e.preventDefault();
      }
    
      agechange(e){
          this.setState({age: e.target.value})
          e.preventDefault()
      }

      submitMe(e) {
        e.preventDefault();
        this.calculateCalories();
     }




      calculateCalories(){
           var readyWeight = (this.state.weight * 9.99)
           var readyHeight = (this.state.height * 6.25)
           var readyAge = (this.state.age * 4.92)

           var startingResult = (readyWeight + readyHeight - readyAge)
        
            //checking for gender
            if(this.props.female === true){
                startingResult = startingResult - 5
            }else if(this.props.male === true){
                startingResult = startingResult - 156} 
            
            //checking for activity
            

             if(this.props.no_activity === true){
                startingResult = startingResult * 1.2
            }else if(this.props.low_activity === true){
                startingResult = startingResult * 1.375
            }else if(this.props.mid_activity === true){
                startingResult = startingResult * 1.55
            }else if(this.props.hight_activity === true){
                startingResult = startingResult * 1.725}
            

            //checking for wishes
            if(this.props.lose_weight === true){
                startingResult = startingResult - 200
            }else if (this.props.get_weight === true){
                startingResult = startingResult + 300 }
            
            this.setState({calories: Math.round(startingResult * 100) / 100})
            this.setState({message: true})
        }
    

    render(){
        return( 
            <>
                <Navbar />
                <div className="fullPageCalories">
                    <div className="caloriesCalculateImg"></div>
                    <div className="left">
                    <div className="headerCalories">FEEL YOUR FIT</div>
                    <div className="subtitle">average daily calories counter</div>
                    <form className="leftForm" onSubmit={this.submitMe}>
                        <div className="form__group field bmi">
                            <input type="text" className="form__field bmiLabel"  id="age" value={this.state.age} onChange={this.agechange} placeholder="Your age" name="age"/>
                            <label for="age" className="form__label bmiLabel">Your age:</label>
                        </div>
                        <button  className="submitButtonBMI" type="submit" value="Submit">Count</button>
                        <div className="form__group field bmi">
                            <input type="text" className="form__field bmiLabel"  id="height" value={this.state.height} onChange={this.heightchange}placeholder="Your height" name="height"/>
                            <label for="height" className="form__label bmiLabel">Your height:</label>
                        </div>
                        <div className="form__group field bmi">
                            <input type="text" className="form__field bmiLabel" placeholder="Your weight" value={this.state.weight} onChange={this.weightchange} name="weight" id='weight' />
                            <label for="weight" className="form__label bmiLabel">Your weight:</label>
                        </div>
                    </form>
                <div className={this.state.message? "messageText" : "none"}>{this.props.lose_weight ===true? "In order to lose weight you have to eat " : this.props.get_weight === true && "In order to get weight you have to eat "}{this.state.calories === null? "" : Math.round(this.state.calories * 100) / 100 + " "} calories daily</div>
                </div>
                </div>
            </>
        )
    }
}

function mapStateToProps(state){
    return{
        female: state.calories.female_choosen,
        male: state.calories.male_choosen,


        lose_weight: state.calories.lose_weight,
        get_weight: state.calories.get_weight,



        no_activity: state.calories.no_activity,
        low_activity: state.calories.low_activity,
        mid_activity: state.calories.mid_activity,
        hight_activity: state.calories.hight_activity,
    }
}


export default connect (mapStateToProps)(CaloriesCounter)