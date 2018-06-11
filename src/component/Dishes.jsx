import React from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux"
import {withStyles} from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Cards from "./Cards"
import Card from "@material-ui/core/es/Card/Card"

const styles = theme => ({
    card: {
        display: 'flex',
        backgroundColor: "transparent",
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 70,
        height: 70,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
    },
})

const Dishes = ({classes, dishes, onClick, clicked}) => {
    return <Cards onClick={onClick} clicked={clicked}>
        {dishes.map(dish =>
            <Card key={dish.id} className={classes.card}>
                <CardMedia
                    className={classes.cover}
                    image={dish.src}
                />
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography variant="subheading" color="textSecondary">
                            {dish.description}
                        </Typography>
                    </CardContent>
                </div>
            </Card>
        )}
    </Cards>
}

Dishes.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    clicked: PropTypes.bool.isRequired,
}

const mapStateToProps = (store) => {
    return {
        dishes: store.loadDishes.dishes,
    }
}

export default connect(mapStateToProps)(withStyles(styles, {withTheme: true})(Dishes))