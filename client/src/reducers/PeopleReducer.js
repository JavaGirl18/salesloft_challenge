// import { merge } from '../utils'
import { GET_PEOPLE } from '../actions/Constants'
import { routerActions } from 'react-router-redux';


const defaultState={
  people:[]
}



export default function(state = defaultState, action) {
  switch(action.type) {
    case GET_PEOPLE:
      return {
        state, 
        people: action.people
      }
    
    default:
      return state
  }
}
