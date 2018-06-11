import dishs from "../../dishes.json"

export const LOAD_DISHES_PENDING= "LOAD_DISHES_PENDING"
export const LOAD_DISHES_FULFILLED= "LOAD_DISHES_FULFILLED"

export const loadDishes = () => dispatch => {
    dispatch({
        type: LOAD_DISHES_PENDING
    })
    setTimeout(() => dispatch({
        type: LOAD_DISHES_FULFILLED,
        payload: dishs
    }), 500)
}