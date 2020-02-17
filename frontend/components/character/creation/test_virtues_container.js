import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { requestCharacter } from '../../../actions/character_actions';
import { requestAllVirtues } from '../../../actions/virtue_actions';
import { requestAllFlaws } from '../../../actions/flaw_actions';
import { requestAllAbilities } from '../../../actions/ability_actions';
import CharacterCreateVirtues from './test_virtues';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = dispatch => ({
  requestAllVirtues: () => dispatch(requestAllVirtues()),
  requestAllFlaws: () => dispatch(requestAllFlaws()),
  requestCharacter: (id) => dispatch(requestCharacter(id)),
  requestAllAbilities: () => dispatch(requestAllAbilities()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CharacterCreateVirtues));