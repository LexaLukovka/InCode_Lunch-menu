import {LOAD_DISHES_PENDING, LOAD_DISHES_FULFILLED} from "../actions/loadDishes.action"

const initialState = {
    loading: false,
    dish: [],
    dishes: [],
}

const loadDishes = (state = initialState, {type, payload}) => {
    switch (type) {

        case LOAD_DISHES_PENDING: {
            return {
                ...state,
                loading: true
            }
        }
        case LOAD_DISHES_FULFILLED: {
            let dish
            const {loading} = state
            if (loading === true) {
                dish = payload
            }
            return {
                ...state,
                dishes: dish
            }
        }

        default: {
            return state
        }
    }
}

export default loadDishes