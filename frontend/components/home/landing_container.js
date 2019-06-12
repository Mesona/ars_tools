import { connect } from 'react-redux';
import { requestAllCharacters, requestCharacter } from '../../actions/character_actions';

import Landing from './landing';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  characters: state.entities.characters,
});

const mapDispatchToProps = dispatch => ({
  requestAllCharacters: (id) => dispatch(requestAllCharacters(id)),
  requestCharacter: (id) => dispatch(requestCharacter(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);