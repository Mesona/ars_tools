import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// import { storeVirtue, deleteVirtue, storeVirtues, storeFlaw, deleteFlaw, storeFlaws } from '../../../actions/create_virtues_and_flaws_actions';
import UniqueVirtue from './create_virtue_unique';

const mapStateToProps = (state, ownProps) => ({
  currentCharacter: state.entities.characters[ownProps.match.params.characterId],
  currentVirtues: state.entities.createVirtuesAndFlaws,
  abilities: state.entities.abilities,
});

const mapDispatchToProps = dispatch => ({
  // storeVirtue: (virtue) => dispatch(storeVirtue(virtue)),
  // deleteVirtue: (virtue) => dispatch(deleteVirtue(virtue)),
  // storeVirtues: (virtues) => dispatch(storeVirtues(virtues)),
  // storeFlaw: (flaw) => dispatch(storeFlaw(flaw)),
  // deleteFlaw: (flaw) => dispatch(deleteFlaw(flaw)),
  // storeFlaws: (flaws) => dispatch(storeFlaws(flaws)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UniqueVirtue));