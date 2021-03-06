import { connect } from 'react-redux'
import { plus } from './../modules/elapse'

import Elapse from './../components/Elapse'

const mapDispatchToProps = {
  plus
}

const mapStateToProps = (state) => ({
  elapse: state.elapse
})

export default connect(mapStateToProps, mapDispatchToProps)(Elapse)
