import { connect } from 'react-redux';

import Landing from './landing';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  characters: state.entities.characters,
  thisState: state,
});

const mapDispatchToProps = dispatch => ({
  getCharacters: () => dispatch(getCharacters),
  getCharacter: (id) => dispatch(getCharacter(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);