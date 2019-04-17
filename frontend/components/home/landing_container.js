import { connect } from 'react-redux';

import Landing from './landing';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  thisState: state,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);