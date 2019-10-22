import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import UniqueFlaw from './create_flaw_unique';

const mapStateToProps = (state, ownProps) => ({
  currentCharacter: state.entities.characters[ownProps.match.params.characterId],
  currentVirtuesAndFlaws: state.entities.createVirtuesAndFlaws,
  abilities: state.entities.abilities,
});

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UniqueFlaw));