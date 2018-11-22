import React, {Component} from 'react';
import Toolbar from './components/Toolbar';
import Page from "./components/Page/";
import './App.css';

class App extends Component {
    render() {
        return (
            <div id="app">
                <Toolbar/>
                <div className="page">
                    <Page/>
                </div>
            </div>
        );
    }
}

export default App;
