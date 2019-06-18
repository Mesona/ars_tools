import React from 'react';

class CharacterShowStats extends React.Component {
  constructor(props) {
    super(props);
  }


  render () {
    const { currentCharacter } = this.props;
    return (
      <div>
        { currentCharacter === null ? '' : (
          <section>
            <ul className="character-info">
              <li>
                <img onClick={this.sendData} src={window.images.blankCharacter} className="blank-character-png"></img>
              </li>
              <li>
                { currentCharacter.name }
                <br></br>
                <hr></hr>
              </li>
            </ul>
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
          </section>
        )}
      </div>
    )
  }
};

export default CharacterShowStats;