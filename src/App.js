import React, {Component} from 'react'
import {connect} from 'react-redux'
import Grid from "@material-ui/core/es/Grid/Grid";
import Body from "./container/Body"
import Menu from "./container/Menu";
import {loadDishes} from './redux/actions/loadDishes.action'

class App extends Component {
    componentDidMount() {
        this.props.dispatch(loadDishes())
    }

    render() {
        return (
            <Grid container justify="center">
                <Menu/>
                <Body/>
            </Grid>
        )
    }
}

export default connect()(App)
