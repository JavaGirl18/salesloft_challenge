import { merge } from '../utils'
import { GET_PEOPLE } from '../actions/Constants'
import { routerActions } from 'react-router-redux';


const defaultState={
  allPeople:[],
  person: {}
}



export default function(state = defaultState, action) {
  switch(action.type) {
    case GET_PEOPLE:
      return merge(state, action.people)
    default:
      return state
  }
}
