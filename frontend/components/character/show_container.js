import { connect } from 'react-redux';

import CharacterShow from './show';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  currentCharacter: ownProps.currentCharacter,
});

const mapDispatchToProps = dispatch => ({
  requestCharacter: (id) => dispatch(requestCharacter(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterShow);