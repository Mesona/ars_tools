import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { requestCharacter, updateCharacter } from '../../../actions/character_actions';
import { requestAllFlaws } from '../../../actions/flaw_actions';
import { storeFlaw, deleteFlaw, storeFlaws } from '../../../actions/create_virtues_and_flaws_actions';
import { requestAllAbilities } from '../../../actions/ability_actions';
import CharacterCreateFlaws from './create_flaws';

const mapStateToProps = (state, ownProps) => ({
  currentVirtues: state.entities.createVirtuesAndFlaws,
  currentFlaws: state.entities.createVirtuesAndFlaws,
  currentCharacter: state.entities.characters[ownProps.match.params.characterId],
});

const mapDispatchToProps = dispatch => ({
  requestAllFlaws: () => dispatch(requestAllFlaws()),
  requestCharacter: (id) => dispatch(requestCharacter(id)),
  updateCharacter: (character) => dispatch(updateCharacter(character)),
  storeFlaw: (flaw) => dispatch(storeFlaw(flaw)),
  deleteFlaw: (flaw) => dispatch(deleteFlaw(flaw)),
  storeFlaws: (flaws) => dispatch(storeFlaws(flaws)),
  requestAllAbilities: () => dispatch(requestAllAbilities()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CharacterCreateFlaws));