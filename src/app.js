import React from 'react';
import Events from './events/Events';
import Launches from './launches/Launches';

import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom'

const App = () => {
    return (
        <Router>
            <div>
                <header>
                    <ul>
                      <li>
                        <NavLink exact to="/" activeStyle={{ fontWeight: 'bold' }}>Home</NavLink>
                      </li>
                      <li>
                        <NavLink to="/about" activeStyle={{ fontWeight: 'bold' }}>O stronie</NavLink>
                      </li>
                    </ul>
                </header>
                <div className="content_page">
                    <Switch>
                        <Route exact path="/" component={Events}/>
                        <Route path="/launche/:launcheId" component={Launches}/>
                        <Route path="/about" render={() => <p>O strnie</p>} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
