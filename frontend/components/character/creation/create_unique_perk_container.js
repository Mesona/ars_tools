import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import UniquePerk from './create_unique_perk';

const mapStateToProps = (state, ownProps) => ({
  currentCharacter: state.entities.characters[ownProps.match.params.characterId],
  currentPerks: state.entities.createVirtuesAndFlaws,
  abilities: state.entities.abilities,
});

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UniquePerk));