import { connect } from 'react-redux';
import { createCharacter, requestCharacter } from '../../actions/character_actions';

import CharacterCreate from './create';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  currentCharacter: state.entities.characters[ownProps.match.params.characterId],
});

const mapDispatchToProps = dispatch => ({
  createCharacter: (character) => dispatch(createCharacter(character)),
  requestCharacter: (id) => dispatch(requestCharacter(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterCreate);