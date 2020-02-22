import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createCharacter, requestCharacter, updateCharacter } from '../../../actions/character_actions';
import { requestAllVirtues } from '../../../actions/virtue_actions';
import { requestAllFlaws } from '../../../actions/flaw_actions';
import { storeVirtue, storeVirtues, storeFlaw, storeFlaws } from '../../../actions/create_virtues_and_flaws_actions';
import CharacterCreate from './create';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  currentCharacter: state.entities.characters[ownProps.match.params.characterId],
  page: ownProps.page,
  match: ownProps.match,
});

const mapDispatchToProps = dispatch => ({
  requestAllVirtues: () => dispatch(requestAllVirtues()),
  requestAllFlaws: () => dispatch(requestAllFlaws()),
  createCharacter: (character) => dispatch(createCharacter(character)),
  requestCharacter: (id) => dispatch(requestCharacter(id)),
  updateCharacter: (character) => dispatch(updateCharacter(character)),
  storeVirtue: (virtue) => dispatch(storeVirtue(virtue)),
  storeVirtues: (virtues) => dispatch(storeVirtues(virtues)),
  storeFlaw: (flaw) => dispatch(storeFlaw(flaw)),
  storeFlaws: (flaws) => dispatch(storeFlaws(flaws)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CharacterCreate));