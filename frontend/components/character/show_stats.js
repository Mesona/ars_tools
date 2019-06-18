import React from 'react';

class CharacterShowStats extends React.Component {
  constructor(props) {
    super(props);
  }


  render () {
    const { currentCharacter } = this.props;
    return (
      <ul className="stats">
        <li>
          Intelligence: { currentCharacter.intelligence }
        </li>
        <li>
          Perception: { currentCharacter.perception }
        </li>
        <li>
          Strength: { currentCharacter.strength }
        </li>
        <li>
          Stamina: { currentCharacter.stamina }
        </li>
        <li>
          Presence: { currentCharacter.presence }
        </li>
        <li>
          Communication: { currentCharacter.communication }
        </li>
        <li>
          Dexterity: { currentCharacter.dexterity }
        </li>
        <li>
          Quickness: { currentCharacter.quickness }
        </li>
      </ul>
    )
  }
};

export default CharacterShowStats;