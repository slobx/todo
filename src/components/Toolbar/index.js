import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './index.css';

class Toolbar extends Component {
    render() {
        return (
            <AppBar className="toolbar" color="primary">
                <div className="toolbar_items">
                    <MenuIcon className="menu_icon" fontSize="large"/>
                    <MoreVertIcon className="more_icon" fontSize="large"/>

                    <SearchIcon className="search_icon" fontSize="large"/>
                </div>
            </AppBar>
        )
    }
}

export default Toolbar;