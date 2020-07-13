import React, {PureComponent} from 'react';
import {Router, Route, Switch} from 'react-router-dom'
import history from './services/history'
import {Provider} from 'react-redux';
import {initStore} from "./redux/store";
import Home from './pages/Home';
import './App.css';

class App extends PureComponent {
    render() {
        return (
            <div className="App">
                <Router history={history}>
                    <Provider store={initStore()}>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                        </Switch>
                    </Provider>
                </Router>
            </div>
        );
    }
}

export default App;
