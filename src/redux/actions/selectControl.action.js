import Http from '../../services/Http'
import Cache from '../../services/Cache'

export const SELECT_CONTROL = 'SELECT_CONTROL'
export const SELECT_CONTROL_FULFILLED = 'SELECT_CONTROL_FULFILLED'

export const selectControl = () => {
  const checked = Cache.get('checked')
  return {
    type: SELECT_CONTROL,
    payload: Http.put('/selectControl', { checked }),
  }
}

