import React from 'react';
import { Link } from 'react-router-dom';

class CharacterIndex extends React.Component {
  render () {
    const { currentCharacter } = this.props;
    return (
    <ul>
      <Link to={`/characters/${currentCharacter.id}`}>
        <li>
          <img src={window.images.blankCharacter} className="blank-character-png"></img>
        </li>
        <li>
          {currentCharacter.name}
        </li>
      </Link>
    </ul>
    )
  }
};

export default CharacterIndex;