import * as actions from './Actions'

export const creds = { credentials: 'same-origin' };

export function fetchpeople() {
  return dispatch => {
    return fetch('/api/people.json', creds).
      then(response => response.json()).
      then(people => dispatch(actions.getPeople(people.data)))
      .catch((err) => {
        console.log('ERROR', err)
  })
}
}

