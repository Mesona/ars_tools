import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createCharacter, requestCharacter, updateCharacter } from '../../../actions/character_actions';
import { requestAllVirtues } from '../../../actions/virtue_actions';
import { requestAllFlaws } from '../../../actions/flaw_actions';
import { storeVirtue, storeVirtues, storeFlaw, storeFlaws } from '../../../actions/create_virtues_and_flaws_actions';
import CharacterCreate from './create';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  currentCharacter: state.entities.characters.currentCharacter,
  page: ownProps.page,
  match: ownProps.match,
});

const mapDispatchToProps = dispatch => ({
  requestAllVirtues: () => dispatch(requestAllVirtues()),
  requestAllFlaws: () => dispatch(requestAllFlaws()),
  storeVirtue: (virtue) => dispatch(storeVirtue(virtue)),
  storeFlaw: (flaw) => dispatch(storeFlaw(flaw)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CharacterCreate));