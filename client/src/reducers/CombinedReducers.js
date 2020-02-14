import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import peopleReducer from './PeopleReducer'

const Reducers = combineReducers({
  router: routerReducer,
  people: peopleReducer,
});

export default Reducers