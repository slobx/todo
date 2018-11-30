import React, {Component} from 'react';

import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import WorkIcon from '@material-ui/icons/Work';
import FamilyIcon from '@material-ui/icons/People';
import OtherIcon from '@material-ui/icons/Assignment';
import AddIcon from '@material-ui/icons/NoteAdd';

import Subcategory from '../Subcategory';
import Todo from '../Todo';
import './index.css';

class Page extends Component {

    state = {
        value: 0,
        open: false,
        todos: [],
        date: null,
        modalText: null

    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    handleModalOpen = () => {
        this.setState({open: true});
    };

    handleModalClose = () => {
        this.setState({open: false});
    };

    handleModalBtn = () => {
        if (this.state.date && this.state.modalText) {

            this.setState(prevState => ({
                todos: [...prevState.todos, {text: this.state.modalText, date: this.state.date}]
            }));
            this.setState({open: false});
            this.setState({date: null});
            this.setState({modalText: null});
        } else {
            console.log("empty")
        }
    };

    modalChooserChange = (e) => {
        this.setState({date: e.currentTarget.value});
    };

    modalTextChange = (e) => {
        this.setState({modalText: e.currentTarget.value});
    };


    renderSwitch(param) {
        switch (param) {
            case 0:
                return <div>
                    <List>
                        <ListItem button>
                            <ListItemIcon>
                                <AddIcon/>
                            </ListItemIcon>
                            <div>ADD SUBCATEGORY</div>
                        </ListItem>
                        <Subcategory title="test"/>
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
                        <Tab icon={<WorkIcon/>} label="WORK"/>
                        <Tab icon={<FamilyIcon/>} label="FAMILY"/>
                        <Tab icon={<OtherIcon/>} label="OTHER"/>
                    </Tabs>
                    {this.renderSwitch(this.state.value)}

                </div>
                <div id="page_right">
                    <div className="todo_card_container">
                        {this.state.todos.map((todo) => {
                            return (
                                <div className="todo_card">
                                    <Todo date={todo.date} text={todo.text}/>
                                </div>
                            )
                        })}
                    </div>


                    <Modal
                        open={this.state.open}
                        onClose={this.handleModalClose}>
                        <div id="modal_body">
                            <div id="modal_text">
                                <TextField
                                    onChange={this.modalTextChange}
                                    id="todo_text_field"
                                    label="Enter todo"
                                    multiline
                                    rows="7"
                                    variant="filled"
                                />
                            </div>
                            <div id="modal_chooser">
                                <TextField
                                    onChange={this.modalChooserChange}
                                    label="Due date and time"
                                    type="datetime-local"
                                    defaultValue="2018-01-01T00:00"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>
                            <div id="todo_add_btn">
                                <Button variant="contained" color="primary" onClick={this.handleModalBtn}>
                                    Add TODO
                                </Button>
                            </div>
                        </div>
                    </Modal>
                </div>
                <div className="fab_btn">
                    <Button variant="fab" color="primary" onClick={this.handleModalOpen}>
                        <div id="plus_fab">+</div>
                    </Button>
                </div>
            </div>

        )
    }
}

export default Page;