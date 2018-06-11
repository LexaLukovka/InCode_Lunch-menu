import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const styles = {
    root: {
        width: 500,
    },
    action: {
        fontSize: 20,
        '&:focus': {
            outline: 0,
        },
    }

};

class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0,
        };
    }

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const {classes} = this.props;
        const {value} = this.state;

        return (
            <BottomNavigation
                value={value}
                onChange={this.handleChange}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction className={classes.action} label="Home"/>
                <BottomNavigationAction className={classes.action} label="Statistics"/>
                <BottomNavigationAction className={classes.action} label="Admin"/>
            </BottomNavigation>
        );
    }
}

Menu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);