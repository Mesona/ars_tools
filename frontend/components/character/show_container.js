import { connect } from 'react-redux';
import { requestCharacter } from '../../actions/character_actions';

import CharacterShow from './show';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  currentCharacter: state.entities.characters[ownProps.match.params.characterId],
  allCharactersTest: state.entities.characters,
  test: ownProps.match.params.characterId,
});

const mapDispatchToProps = dispatch => ({
  requestCharacter: (id) => dispatch(requestCharacter(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterShow);