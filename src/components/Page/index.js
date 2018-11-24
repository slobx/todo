import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import WorkIcon from '@material-ui/icons/Work';
import FamilyIcon from '@material-ui/icons/People';
import OtherIcon from '@material-ui/icons/Assignment';
import AddIcon from '@material-ui/icons/NoteAdd';
import './index.css';

class Page extends Component {

    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
        console.log(value + " value")
    };

    renderSwitch(param) {
        switch(param) {
            case 0:
                return <div>
                    <List>
                        <ListItem button>
                            <ListItemIcon>
                                <AddIcon/>
                            </ListItemIcon>
                            <div>ADD SUBCATEGORY</div>
                        </ListItem>
                    </List>
                </div>;
            case 1:
                return <div>1</div>;
            case 2:
                return <div>2</div>;

            default:
                return <div>default</div>;
        }
    }


    render() {
        return (
            <div id="page_main">
                <div id="page_left">
                        <Tabs
                            value={this.state.value}
                            onChange={this.handleChange}
                            fullWidth
                            indicatorColor="primary"
                            textColor="primary"
                        >
                            <Tab icon={<WorkIcon />} label="WORK" />
                            <Tab icon={<FamilyIcon />} label="FAMILY" />
                            <Tab icon={<OtherIcon />} label="OTHER" />
                        </Tabs>
                    {this.renderSwitch(this.state.value)}

                </div>
                <div id="page_right">
                    test right
                </div>
                <div className="fab_btn">
                    <Button variant="fab" color="primary">
                        <div id="plus_fab">+</div>
                    </Button>
                </div>
            </div>

        )
    }
}

export default Page;