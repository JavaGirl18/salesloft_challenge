import People from '../components/People'
import { connect } from 'react-redux'
import { fetchPeople } from '../actions/AsyncActions'

const mapStateToProps = state => ({ people: state.people });

const mapDispatchToProps = {
  grabPeople: fetchPeople
}
export const  ConnectPeople = connect(
  mapStateToProps,
  mapDispatchToProps
)(People);

export default ConnectPeople
