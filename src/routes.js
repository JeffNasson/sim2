import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard.js';
import Wizard from './Components/Wizard/Wizard.js';
import stepone from './dux/stepone';
import steptwo from './dux/steptwo';
import stepthree from './dux/stepthree';

export default(
    <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/wizard' component={Wizard} />
        <Route component={stepone} exact path='/wizard/step1' />
        <Route component={steptwo} exact path='/wizard/step2' />
        <Route component={stepthree} exact path='/wizard/step3' />
    </Switch>
)