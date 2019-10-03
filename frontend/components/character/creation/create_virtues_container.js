import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { requestCharacter, updateCharacter } from '../../../actions/character_actions';
import { requestAllVirtues } from '../../../actions/virtue_actions';
import { requestAllFlaws } from '../../../actions/flaw_actions';
import { storeVirtue, deleteVirtue, storeVirtues, storeFlaw, deleteFlaw, storeFlaws } from '../../../actions/create_virtues_and_flaws_actions';
import { requestAllAbilities } from '../../../actions/ability_actions';
import CharacterCreateVirtues from './create_virtues';

const mapStateToProps = (state, ownProps) => ({
  currentVirtues: state.entities.createVirtuesAndFlaws,
  currentCharacter: state.entities.characters[ownProps.match.params.characterId],
});

const mapDispatchToProps = dispatch => ({
  requestAllVirtues: () => dispatch(requestAllVirtues()),
  requestAllFlaws: () => dispatch(requestAllFlaws()),
  requestCharacter: (id) => dispatch(requestCharacter(id)),
  updateCharacter: (character) => dispatch(updateCharacter(character)),
  storeVirtue: (virtue) => dispatch(storeVirtue(virtue)),
  deleteVirtue: (virtue) => dispatch(deleteVirtue(virtue)),
  storeVirtues: (virtues) => dispatch(storeVirtues(virtues)),
  storeFlaw: (flaw) => dispatch(storeFlaw(flaw)),
  deleteFlaw: (flaw) => dispatch(deleteFlaw(flaw)),
  storeFlaws: (flaws) => dispatch(storeFlaws(flaws)),
  requestAllAbilities: () => dispatch(requestAllAbilities()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CharacterCreateVirtues));