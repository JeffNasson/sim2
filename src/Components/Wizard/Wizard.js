import React,{Component} from 'react'
import {Link} from 'react-router-dom';

export default class Wizard extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            address:'',
            city:'',
            states:'',
            zipcode:[]
        }
        this.handleName=this.handleName.bind(this);
        this.handleAddress=this.handleAddress.bind(this);
        this.handleCity=this.handleCity.bind(this);
        this.handleStates=this.handleStates.bind(this);
        this.handleZipcode=this.handleZipcode.bind(this);
    }

    handleName(e){
        this.setState({name:e.target.value})
    }
    handleAddress(e){
        this.setState({address:e.target.value})
    }
    handleCity(e){
        this.setState({city:e.target.value})
    }
    handleStates(e){
        this.setState({states:e.target.value})
    }
    handleZipcode(e){
        this.setState({zipcode:e.target.value})
    }

    render(){
        console.log(this.state)
        return(
            <div>
                <input type='text' placeholder='name' value={this.state.name} onChange={this.handleName} />
                <input type='text' placeholder='address' value={this.state.address} onChange={this.handleAddress} />
                <input type='text' placeholder='city' value={this.state.city} onChange={this.handleCity} />
                <input type='text' placeholder='state' value={this.state.states} onChange={this.handleStates} />
                <input type='text' placeholder='zipcode' value={this.state.zipcode} onChange={this.handleZipcode} />
                <Link to ='/'><button>Cancel</button></Link>
                Wizard
            </div>
        )
    }
}