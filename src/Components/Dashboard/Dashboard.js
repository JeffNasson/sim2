import React,{Component} from 'react';
import House from '../House/House.js';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Dashboard extends Component{
    constructor(){
        super();
        this.state={
            houses:[]
        }
        this.deleteHouse=this.deleteHouse.bind(this);
    }

    componentDidMount(){
        axios.get('/api/houses')
             .then(res=>{
                 this.setState({houses:res.data})
             })
    }

    deleteHouse(id){
        axios.delete(`/api/houses/${id}`)
             .then(res=>{
                 this.setState({houses:res.data})
             })
    }

    render(){
        console.log(this.state.houses)
        let moreHouses=this.state.houses.map((home,i)=>{
            return <House key={i} home={home} delete={()=>this.deleteHouse(home.id)} />
        })
        return(
            <div>
                <Link to ='/wizard/step1'><button>Add New Property</button></Link>
                Dashboard
                {moreHouses}
                
            </div>
        )
    }
}