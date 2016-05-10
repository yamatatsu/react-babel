import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { Map, List } from "immutable"

import {ACTION_TYPE} from "./actions.js"

const initial = Map({hasFetched: false, list: List.of("吉村屋")})
function shops(state = initial, action) {
  switch (action.type) {
    case ACTION_TYPE.FETCH_SHOP:
      return state
        .update("list", s => s.concat(action.shops))
        .set({hasFetched: true})
    default:
      return state
  }
}
export default combineReducers({
  shops,
  routing: routerReducer,
})
