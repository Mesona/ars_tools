import React from 'react';

const CharacterShowAbilities = (props) => (
  <ul className="abilities">
    <li>
      { props.currentCharacter.ability_associations.map( ability_association => 
        <ul key={ability_association.id}>
          <li>
            Ability: {ability_association.ability_name}
          </li>
          <li>
            Ability Level: {Math.floor((Math.sqrt(8*((ability_association.experience)/5)+1)-1)/2)}
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

export default CharacterShowAbilities;