import People from '../components/People'
import { connect } from 'react-redux'
import { fetchPeople } from '../actions/AsyncActions'
import { count } from '../actions/AsyncActions'

const mapStateToProps = state => ({ people: state.people });

const mapDispatchToProps = {
 count: fetchPeople
 }
export const  ConnectPeople = connect(
  mapStateToProps,
  mapDispatchToProps
)(People);

export default ConnectPeople
