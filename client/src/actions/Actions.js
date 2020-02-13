import * as actions from './Constants'

export function receivePeople(people) {
  return {
    type: actions.GET_PEOPLE,
    people
  }
}