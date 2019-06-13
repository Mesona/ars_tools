import React from 'react';

class CharacterIndex extends React.Component {
  render () {
    const { currentCharacter } = this.props;
    return (
    <ul>
      <li>
        <img src={window.images.blankCharacter} className="blank-character-png"></img>
      </li>
      <li>
        {currentCharacter.name}
    </li>
    </ul>
    )
  }
};

export default CharacterIndex;