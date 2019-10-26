import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Auth} from './Auth.component';

const mapStateToProps = state => {
  return {};
};

export const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auth);
