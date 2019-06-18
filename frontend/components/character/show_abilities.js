import React from 'react';

class CharacterShowAbilities extends React.Component {
  constructor(props) {
    super(props);
  }


  render () {
    const { currentCharacter } = this.props;
    return (
      <ul className="abilities">
        <li>
          { currentCharacter.ability_associations === undefined ? 'no' : 
            currentCharacter.ability_associations.map( ability_association => 
            <ul key={ability_association.id}>
              <li>
                ability: {ability_association.ability_name}
              </li>
              <li>
                Experience: {ability_association.experience}
              </li>
              <li>
                Specialization: {ability_association.specialization}
              </li>
              <li>
                Ability Description: {ability_association.ability_description}
              </li>
              <hr></hr>
            </ul>
            )}
        </li>
      </ul>
    )
  }
};

export default CharacterShowAbilities;