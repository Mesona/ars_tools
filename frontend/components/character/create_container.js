import { connect } from 'react-redux';
import { createCharacter } from '../../actions/character_actions';

import CharacterCreate from './create';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  createCharacter: (character) => dispatch(createCharacter(character)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterCreate);