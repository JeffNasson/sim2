import React,{Component} from 'react'
import {Link,Route} from 'react-router-dom';
import axios from 'axios';
import stepone from '../../dux/stepone';
import steptwo from '../../dux/steptwo';
import stepthree from '../../dux/stepthree';

export default class Wizard extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            address:'',
            city:'',
            states:'',
            zipcode:null,
            homes:[]
        }
    
    }

    
    render(){
        
        return(
            <div>
                <Route component={stepone} exact path='/wizard/step1' />
                <Route component={steptwo} exact path='/wizard/step2' />
                <Route component={stepthree} exact path='/wizard/step3' />

                <Link to ='/'><button>Cancel</button></Link>
            </div>
        )
    }
}