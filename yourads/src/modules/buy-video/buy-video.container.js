import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from 'react-navigation';
import BuyVideoView from './buy-video.view';

export default connect(
  null,
  dispatch => {
    return {
      navigate: bindActionCreators(NavigationActions.navigate, dispatch)
    };
  }
)(BuyVideoView);
