import { connect } from 'react-redux'
import { PeoplePage } from '../components/PeoplePage'

const mapStateToProps = state => ({ people: state.people });

export const  ConnectPeople = connect(
  mapStateToProps
)(PeoplePage);

export default ConnectPeople
