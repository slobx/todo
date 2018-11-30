import React, {Component} from 'react';

import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const StyledCard = withStyles({
    root: {
        borderRadius: 3,
        border: 1,
        height: 150,
        width: 220,
        padding: '0 30px',
        boxShadow: '0 3px 5px 3px rgba(0, 0, 0, .4)'

    }
})(Card);

class Todo extends Component {

    calculateDate = () => {
        const date = new Date(this.props.date);
        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        let dt = date.getDate();
        if (dt < 10) {
            dt = '0' + dt;
        }
        if (month < 10) {
            month = '0' + month;
        }
        return `${dt}.${month}.${year}.`
    };


    render() {


        return (
            <StyledCard>
                <CardContent>
                    <div className="card">
                        <div>
                            {this.props.text}
                        </div>
                        <div>
                            Due date: {this.calculateDate()}
                        </div>
                    </div>
                </CardContent>
            </StyledCard>
        )
    }
}

export default Todo;