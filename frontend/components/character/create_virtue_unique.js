import React from 'react';

class UniqueVirtue extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      greatCharacteristics: [],
      affinityWithAbility: [],
      affinityWithArt: [],
      special_one: null,
      special_two: null,
    };

    this.test = this.test.bind(this);
    this.setSpecial = this.setSpecial.bind(this);
  }

  componentDidMount() {

  }

  test(e) {
    console.log(this.props)
    console.log(e.currentTarget.className)
    console.log(e.target.name)
  }

  setSpecial(e, specialSpot) {
    if (specialSpot === "one") {
      this.setState({special_one: e.target.value});
    } else if (specialSpot === "two") {
      this.setState({special_two: e.target.value});
    }

  }

  render () {
    const { currentCharacter, virtue } = this.props;
    
    let greatCharacteristics = {};
    let poorCharacteristics = {};
    // console.log('/////')
    // console.log(this.props)
    // console.log('/////')

    // Stat checking for various virtues and flaws
    if (currentCharacter !== null) {
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
    }

    switch (virtue.name) {
      case "Great (Characteristic)":
        return (
          <>

            <label htmlFor="special_one">
              {/* <select value={"something"} onChange={(e) => this.test(e)}> */}
              <select value={"something"} onChange={(e) => this.setSpecial(e, "one")}>
                <option name="special_one" className="special_one" value="strength">Strength</option>
                <option name="special_one" value="intelligence">Intelligence</option>
                <option name="special_one" value="stamina">Stamina</option>
              </select>
            </label>

            <label htmlFor="special_two" onChange={(e) => this.setSpecial(e, "two")}>
              <select value={"something2"} onChange={(e) => this.test(e)}>
                <option htmlFor="special_two" value="strength">Strength</option>
                <option htmlFor="special_two" value="intelligence">Intelligence</option>
                <option htmlFor="special_two" value="stamina">Stamina</option>
              </select>
            </label>

            {/* {greatCharacteristics} */}
            {/* <select>
              {greatCharacteristics.forEach(characteristic => (
                <option value={characteristic}>{characteristic}</option>
              ))}
            </select> */}
          </>
        );
      case "Affinity With (Ability)":
        return (
          <>
            Affinity Test
          </>
        )
      default:
        return (
          <>
            SOMETHING WENT WRONG
          </>
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