import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Auth} from './Auth.component';
import {emailChange} from './Auth.actions';

const mapStateToProps = state => {
  return {};
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeEmail: emailChange,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auth);
