export const BUTTON_NAVIGATION = 'BUTTON_NAVIGATION'

export const buttonNavigationAction = (value) => dispatch => {
  localStorage.setItem('buttonNavigation', value)
  dispatch({
    type: BUTTON_NAVIGATION,
    payload: value,
  })
}
