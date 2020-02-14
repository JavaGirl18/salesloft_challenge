import * as actions from './Constants'

export function getPeople(people) {
  return {
    type: actions.GET_PEOPLE,
    people
  }
}