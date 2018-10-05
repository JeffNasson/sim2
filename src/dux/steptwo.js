import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Wizard extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            address:'',
            city:'',
            states:'',
            zipcode:null,
            url:'',
            homes:[]
        }
        this.handleURL=this.handleURL.bind(this);
    }

    postRequest(Houses){
        console.log(Houses);
        let {name,address,city,states,zipcode:zip}=this.state
        axios.post(`http://localhost:4000/api/houses`,{name,address,city,states,zip})
             .then(res=>console.log(res) || this.setState({homes:res.data}))

    }

    handleURL(e){
        this.setState({url:e.target.value})
    }
    
    render(){
        console.log(this.state)
        return(
            <div>
                <input type='text' placeholder='name' value={this.state.url} onChange={this.handleURL} />
                <Link to='/wizard/step3' ><button>Next</button></Link>
                <Link to ='/wizard/step1'><button>Back</button></Link>

            </div>
        )
    }
}