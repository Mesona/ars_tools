import React from 'react';

class CharacterShow extends React.Component {
  render () {
    const { currentCharacter } = this.props;
    return (
      <ul>
        <li>
          <img src={window.images.blankCharacter} className="blank-character-png"></img>
        </li>
        <li>
          {/* {currentCharacter.name} */}
          <p>yay</p>
        </li>
      </ul>
    )
  }
};

export default CharacterShow;