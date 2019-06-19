import React from 'react';

const CharacterShowDetails = (props) => (
  <ul className="character-info">
    <li>
      <img src={window.images.blankCharacter} className="blank-character-png"></img>
    </li>
    <li>
      { props.currentCharacter.name }
      <br></br>
      <hr></hr>
    </li>
  </ul>
)

export default CharacterShowDetails;