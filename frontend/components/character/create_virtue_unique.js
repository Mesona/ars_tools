import React from 'react';

class UniqueVirtue extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { currentCharacter, virtue } = this.props;
    
    let greatCharacteristics = {};
    let poorCharacteristics = {};
    // console.log('/////')
    // console.log(this.props)
    // console.log('/////')

    // Stat checking for various virtues and flaws
    if (currentCharacter.intelligence >= 3 && currentCharacter.intelligence < 5) {
      greatCharacteristics["intelligence"] = currentCharacter.intelligence;
    } else if ( currentCharacter.intelligence <= -3 && currentCharacter.intelligence > -5) {
      poorCharacteristics["intelligence"] = currentCharacter.intelligence;
    }

    if (currentCharacter.perception >= 3 && currentCharacter.perception < 5) {
      greatCharacteristics["perception"] = currentCharacter.perception;
    } else if ( currentCharacter.perception <= -3 && currentCharacter.perception > -5) {
      poorCharacteristics["perception"] = currentCharacter.perception;
    }

    if (currentCharacter.strength >= 3 && currentCharacter.strength < 5) {
      greatCharacteristics["strength"] = currentCharacter.strength;
    } else if ( currentCharacter.strength <= -3 && currentCharacter.strength > -5) {
      poorCharacteristics["strength"] = currentCharacter.strength;
    }

    if (currentCharacter.stamina >= 3 && currentCharacter.stamina < 5) {
      greatCharacteristics["stamina"] = currentCharacter.stamina;
    } else if ( currentCharacter.stamina <= -3 && currentCharacter.stamina > -5) {
      poorCharacteristics["stamina"] = currentCharacter.stamina;
    }

    if (currentCharacter.presence >= 3 && currentCharacter.presence < 5) {
      greatCharacteristics["presence"] = currentCharacter.presence;
    } else if ( currentCharacter.presence <= -3 && currentCharacter.presence > -5) {
      poorCharacteristics["presence"] = currentCharacter.presence;
    }

    if (currentCharacter.communication >= 3 && currentCharacter.communication < 5) {
      greatCharacteristics["communication"] = currentCharacter.communication;
    } else if ( currentCharacter.communication <= -3 && currentCharacter.communication > -5) {
      poorCharacteristics["communication"] = currentCharacter.communication;
    }

    if (currentCharacter.dexterity >= 3 && currentCharacter.dexterity < 5) {
      greatCharacteristics["dexterity"] = currentCharacter.dexterity;
    } else if ( currentCharacter.dexterity <= -3 && currentCharacter.dexterity > -5) {
      poorCharacteristics["dexterity"] = currentCharacter.dexterity;
    }

    if (currentCharacter.quickness >= 3 && currentCharacter.quickness < 5) {
      greatCharacteristics["quickness"] = currentCharacter.quickness;
    } else if ( currentCharacter.quickness <= -3 && currentCharacter.quickness > -5) {
      poorCharacteristics["quickness"] = currentCharacter.quickness;
    }

    switch (virtue.name) {
      case "Great (Characteristic)":
        return (
          <div>
            Test
            {/* {greatCharacteristics} */}
            {/* <select>
              {greatCharacteristics.forEach(characteristic => (
                <option value={characteristic}>{characteristic}</option>
              ))}
            </select> */}
          </div>
        );
      case "Affinity With (Ability)":
        return (
          <div>
            Affinity Test
          </div>
        )
      default:
        return (
          <div>
            SOMETHING WENT WRONG
          </div>
        )
    } 
    // return (
    //   <div>
    //     {/* <UniversalVirtue virtue={virtue} /> */}
    //     Oops
    //   </div>
    // )
  }

}

export default UniqueVirtue;