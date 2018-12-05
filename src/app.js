import React from 'react';
import Events from './events/Events';
import Launches from './launches/Launches';
import Menu from './common/menu';
import About from './about/About';

import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div>
                <Menu/>
                <div className="content_page">
                    <Switch>
                        <Route path="/about" component={About} />
                        <Route exact path="/" component={Events}/>
                        <Route path="/launche/:launcheId" component={Launches}/>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
