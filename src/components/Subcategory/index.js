import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';

const Subcategory = ({onClick, title}) =>  (
    <div onClick={onClick}>
        <ListItem>
            <div>{title}</div>
        </ListItem>
    </div>
);

Subcategory.propTypes = {
    // onClick : PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
};

export default Subcategory;


