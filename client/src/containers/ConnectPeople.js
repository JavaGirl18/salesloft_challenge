import PeoplePage from '../components/PeoplePage'
import { connect } from 'react-redux'

const mapStateToProps = state => ({ people: state.people });

export const  ConnectPeople = connect(
  mapStateToProps
)(PeoplePage);

export default ConnectPeople
