import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createCharacter, requestCharacter } from '../../actions/character_actions';
import { requestAllVirtues } from '../../actions/virtue_actions';
import { requestAllFlaws } from '../../actions/flaw_actions';
import CharacterCreate from './create';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  currentCharacter: state.entities.characters[ownProps.match.params.characterId],
  page: ownProps.page,
});

const mapDispatchToProps = dispatch => ({
  requestAllVirtues: () => dispatch(requestAllVirtues()),
  requestAllFlaws: () => dispatch(requestAllFlaws()),
  createCharacter: (character) => dispatch(createCharacter(character)),
  requestCharacter: (id) => dispatch(requestCharacter(id)),
  updateCharacter: (character) => dispatch(updateCharacter(character)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CharacterCreate));