import React, {Component} from 'react';
import './bmi.scss'
import Navbar from '../../components/navBar/navbar'

class Bmi extends Component {

    constructor(props) {
       super(props);
       this.state = {weight: null, height: null, bmi: null, message: '', optimalweight: ''};
       this.submitMe = this.submitMe.bind(this);
       this.heightchange = this.heightchange.bind(this);
       this.weightchange = this.weightchange.bind(this);
       this.calculateBMI = this.calculateBMI.bind(this); 
    }
  
  
    heightchange(e){
      this.setState({height: e.target.value});
      e.preventDefault();
    }
  
     weightchange(e){
      this.setState({weight: e.target.value});
      e.preventDefault();
    }
  
    calculateBMI(){
  
        var heightSquared = (this.state.height/100  * this.state.height/100);
        var bmi = this.state.weight / heightSquared;
        var low = Math.round(18.5 * heightSquared);                                                         
        var high = Math.round(24.99 * heightSquared);    
        var message = "";
        if( bmi >= 18.5  && bmi <= 24.99 ){
            message = "You are in a healthy weight range";
        }
        else if(bmi >= 25 && bmi <= 29.9){
          message = "You are overweight";
        }
        else if(bmi >= 30){
            message ="You are obese";
        }
        else if(bmi < 18.5){
          message = "You are under weight";
        }
        this.setState({message: message});  
        this.setState({optimalweight: "Your suggested weight range is between "+low+ " - "+high});    
        this.setState({bmi: Math.round(bmi * 100) / 100});   
  
    }
  
    submitMe(e) {
       e.preventDefault();
       this.calculateBMI();
    }
  
    render() {
      return (
          <>
          <Navbar />
        <div className="bmiFull">
          <div className="App-header">
              <div className="hederLogo">FEEL YOUR FIT</div>
              <div className="headerSubHeading">BMI calculator</div>
          </div>
            <form onSubmit={this.submitMe}>
            <div className="inputArea">
            <div className="form__group field bmi">
                        <input type="text" className="form__field bmiLabel" value={this.state.height} onChange={this.heightchange} id="height" placeholder="Your height" name="height"/>
                        <label for="height" className="form__label bmiLabel">Your height</label>
            </div>
            <div className="form__group field bmi">
                        <input type="text" className="form__field bmiLabel" placeholder="Your weight" value={this.state.weight} onChange={this.weightchange} name="weight" id='weight' />
                        <label for="weight" className="form__label bmiLabel">Your weight</label>
            </div>
            </div> 
              <button className="submitButtonBMI bmiButton" type="submit" value="Submit">Count</button>
            </form>
            <div className="message">
            <label>{this.state.checked}<div className="yourBmi">{this.state.bmi && this.state.bmi + " - Your BMI"}</div></label>
                <label>{this.state.message}.</label>
                <label>{"" + this.state.optimalweight}</label></div>
        </div>
        <div className="photoBmi">

        </div>
        </>
      );
    }
  }
  

export default Bmi

