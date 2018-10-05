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
    }

    componentDidMount(){
        axios.get('http://localhost:4000/api/houses')
             .then(res=>{
                 this.setState({houses:res.data})
             })
    }

    render(){
        let moreHouses=this.state.houses.map((home,i)=>{
            return <House key={i} home={home} />
        })
        return(
            <div>
                <Link to ='/wizard'><button>Add New Property</button></Link>
                Dashboard
                <House />
            </div>
        )
    }
}