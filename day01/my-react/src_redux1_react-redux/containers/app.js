import {connect} from 'react-redux'
import Counter from '../components/counter'
import {increment,decrement} from '../redux/actions'

function mapStateToProps(state) {
    return{count:state}
}
const mapDispatchToProps={
    increment,
    decrement
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)