import React from 'react';

const CharacterShowStats = (props) => (
  <ul className="stats">
    <li>
      Intelligence: { props.currentCharacter.intelligence }
    </li>
    <li>
      Perception: { props.currentCharacter.perception }
    </li>
    <li>
      Strength: { props.currentCharacter.strength }
    </li>
    <li>
      Stamina: { props.currentCharacter.stamina }
    </li>
    <li>
      Presence: { props.currentCharacter.presence }
    </li>
    <li>
      Communication: { props.currentCharacter.communication }
    </li>
    <li>
      Dexterity: { props.currentCharacter.dexterity }
    </li>
    <li>
      Quickness: { props.currentCharacter.quickness }
    </li>
  </ul>
)

export default CharacterShowStats;