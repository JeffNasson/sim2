import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Wizard extends Component{
    constructor(){
        super();
        this.state={
            rent:null,
            mortgage:null,
            name:'',
            address:'',
            city:'',
            states:'',
            zipcode:null,
            url:'',
            homes:[]
        }
        this.handleMortgage=this.handleMortgage.bind(this);
        this.handleRent=this.handleRent.bind(this);
        this.postRequest=this.postRequest.bind(this);
        
    }

    postRequest(Houses){
        console.log(Houses);
        let {name,address,city,states,zipcode:zip}=this.state
        axios.post(`http://localhost:4000/api/houses`,{name,address,city,states,zip})
             .then(res=>console.log(res) || this.setState({homes:res.data}))

    }

    handleRent(e){
        this.setState({rent:e.target.value})
    }
    handleMortgage(e){
        this.setState({mortgage:e.target.value})
    }
    

    render(){
        console.log(this.state)
        return(
            <div>
                Monthly Mortgage Amount
                <input type='text' placeholder='0' value={this.state.mortgage} onChange={this.handleMortgage} />
                Desired Monthly Rent
                <input type='text' placeholder='0' value={this.state.rent} onChange={this.handleRent} />
                <Link to ='/wizard/step2'><button>Back</button></Link>

               <Link to ='/'><button onClick={this.postRequest}>Complete</button></Link>
            </div>
        )
    }
}