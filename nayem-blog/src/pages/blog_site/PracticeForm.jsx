import React, {Component} from "react";
import NavBar from "./NavBar";

class FormPractice extends Component{
    state = {
        name: "",
        profession:"",
        CreationDate: "",
        textArea: "",
        gender: "",
        checkbox: false
  

    }
    nameHandler = (event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    clickHandler = (event)=>{
        console.log(this.state)
    }
    checkboxHandler = (event)=>{
        this.setState({
            checkbox: event.target.checked 
        })
       
    }



    render(){

        return(
            <>
            <NavBar />
            <div className="container">
                <br />
               
               <input name="name" onChange={this.nameHandler} className="form-control" type="text" placeholder="name" />
               <select onChange={this.nameHandler} className="form-control" name="profession" id="">
                 <option value="coder">Coder</option>
                 <option value="investor">Investor</option>
                 <option value="content crator">Content Creator</option>
               </select>
               <input name="CreationDate" onChange={this.nameHandler}  className="form-control" type="date" />
               <textarea placeholder="Tell us" className="form-control" onChange={this.nameHandler} name="textArea"></textarea>
               <input name="gender" value="male" onChange={this.nameHandler} type="radio" /> 
                  <label htmlFor=""> Male</label> 
               <input name="gender" value="female" onChange={this.nameHandler} type="radio" />
                <label htmlFor=""> Female </label>
                <br />
               <input  name="checkBox" onChange={this.checkboxHandler} type="checkbox" />
                <label htmlFor="">I agree to the terms and conditions</label>
                   <br />
                <button onClick={this.clickHandler} className="btn btn-primary" > Submit</button>
                

            </div>
            </>
        )
    }

}
export default FormPractice;