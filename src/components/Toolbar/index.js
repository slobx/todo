import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './index.css';

class Toolbar extends Component {
    render() {
        return (
            <AppBar className="toolbar" color="primary">
                <div className="toolbar_items">
                    <IconButton color="inherit" aria-label="Open drawer">
                        <MenuIcon/>
                    </IconButton>
                    <div className="search_more_icons">
                        <IconButton color="inherit" aria-label="Open drawer">
                            <MoreVertIcon/>
                        </IconButton>
                        <IconButton color="inherit" aria-label="Open drawer">
                            <SearchIcon/>
                        </IconButton>
                    </div>
                </div>
            </AppBar>
        )
    }
}

export default Toolbar;