import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import Bio from '../Pages/Bio';
import Projects from '../Pages/Projects';
import Contact from '../Pages/Contact';

export default () => (
    <Switch>
        <Route exact path='/' component={ Home }/>
        <Route exact path='/Bio' component={ Bio }/>
        <Route exact path='/Projects' component={ Projects }/>
        <Route exact path='/Contact' component={ Contact }/>
    </Switch>
)

