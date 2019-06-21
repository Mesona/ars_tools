import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createCharacter, requestCharacter } from '../../actions/character_actions';
import CharacterCreate from './create';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  currentCharacter: state.entities.characters[ownProps.match.params.characterId],
});

const mapDispatchToProps = dispatch => ({
  createCharacter: (character) => dispatch(createCharacter(character)),
  requestCharacter: (id) => dispatch(requestCharacter(id)),
  updateCharacter: (character) => dispatch(updateCharacter(character)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CharacterCreate));