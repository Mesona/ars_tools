import React from 'react';
import Select from 'react-select'



// const formOptions = [
//   { value: 'creo', label: 'Creo' },
//   { value: 'intelligo', label: 'Intelligo' },
//   { value: 'muto', label: 'Muto' },
//   { value: 'perdo', label: 'Perdo' },
//   { value: 'rego', label: 'Rego' },
// ];

// const techniqueOptions = [
//   { value: 'animal', label: 'Animal' },
//   { value: 'aquam', label: 'Aquam' },
//   { value: 'auram', label: 'Auram' },
//   { value: 'corpus', label: 'Corpus' },
//   { value: 'herbam', label: 'Herbam' },
//   { value: 'ignem', label: 'Ignem' },
//   { value: 'imaginem', label: 'Imaginem' },
//   { value: 'mentem', label: 'Mentem' },
//   { value: 'terram', label: 'Terram' },
//   { value: 'vim', label: 'Vim' },
// ];

class UniqueVirtue extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      greatCharacteristics: {},
      affinityWithAbility: [],
      affinityWithArt: [],
      special_one: this.props.special_one || "",
      special_two: this.props.special_two || "",
      statOptions: [
        { value: 'intelligence', label: 'Intelligence' },
        { value: 'perception', label: 'Perception' },
        { value: 'strength', label: 'Strength' },
        { value: 'stamina', label: 'Stamina' },
        { value: 'presence', label: 'Presence' },
        { value: 'communication', label: 'Communication' },
        { value: 'dexterity', label: 'Dexterity' },
        { value: 'quickness', label: 'Quickness' },
      ],
    };

    this.test = this.test.bind(this);
    this.setSpecial = this.setSpecial.bind(this);
    this.enableSpecial = this.enableSpecial.bind(this);
    this.specialValidation = this.specialValidation.bind(this);
    this.generateOptions = this.generateOptions.bind(this);
  }

  componentDidMount() {

  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentVirtues !== this.props.currentVirtues) {
      if (this.props.virtue.name === "Great (Characteristic)") {
        this.generateOptions("Great (Characteristic)");
      }
    }
  }

  test(e) {
    // const { currentVirtues } = this.props;
    
    // console.log("character virtues")

    // Object.keys(currentVirtues).length !== 0 ? Object.keys(currentVirtues).forEach((virtue) => {
    //   let currentVirtue = currentVirtues[virtue];
    //   switch (currentVirtue.name) {
    //     case "Great (Characteristic)":
    //       let special_one = currentVirtue.special_one;
    //       let greatCharacteristics = this.state.greatCharacteristics;
    //       greatCharacteristics[currentVirtue.id] = currentVirtue;

    //       this.setState({greatCharacteristics: greatCharacteristics});
    //       break;
    //     }
    // })
    // :
    // "";

    // console.log(this.state.greatCharacteristics);
    // console.log("TEST HERE")
    // console.log(e.target)
    // return "disabled";
    // return false;
    console.log("STATE")
    console.log(this.state.statOptions)
    console.log("PROPS")
    console.log(this.props.currentVirtues)
  }

  setSpecial(e, specialSpot) {
    if (specialSpot === "one") {
      this.setState({special_one: e.target.value});
    } else if (specialSpot === "two") {
      this.setState({special_two: e.target.value});
    }
  }

  enableSpecial() {
    let baseValidation = this.props.validateVirtue(this.props.virtue);

    // If the virtue is not disabled by some "hard set" lock
    if (baseValidation !== "disabled") {
      if (this.state.special_one === "" || this.special_two === "") {
        return "disabled";
      }
    }
  }

  specialValidation() {
    console.log("SPECIAL VALIDATION")
    // console.log(e.target)
    // return false 
  }

  generateOptions(virtueName) {
    const theseStats = [...this.state.statOptions];
    let statDupes = [];
    let formDupes = [];
    let techniqueDupes = [];
    switch (virtueName) {
      case "Great (Characteristic)":
        Object.keys(this.props.currentVirtues).forEach((currentVirtue) => {
          let virtue = this.props.currentVirtues[currentVirtue]
          if ((virtue.name === "Great (Characteristic)") && (currentVirtue !== this.props.virtue.id)) {
            // console.log(virtue.name)
            // console.log(this.props.virtue.id)
            // console.log(this.props.virtue.name)
            statDupes.push(virtue.special_one)
            statDupes.push(virtue.special_two)
          } else if ((virtue.name === "Great (Characteristic")) {
            console.log("ITS A MATCH WOOOO")
          }
        })

        Object.keys(theseStats).forEach((statIndex) => {
          let stat = theseStats[statIndex];
          if (statDupes.includes(stat.value)) {
            stat["isDisabled"] = true;
          }
        });
        // console.log([...theseStats])
        this.setState({statOptions: theseStats})
        // console.log("TEST")
        // console.log(this.state.statOptions)
        // return theseStats;
        // return this.state.statOptions;
    }
    //     let greatCharacteristics = this.state.greatCharacteristics;
    //     let currentOptions = statOptions.slice(0);
    //     let duplicateStats = [];
    //     Object.keys(greatCharacteristics).forEach((greatCharacteristic) => {
    //       let gC = greatCharacteristics[greatCharacteristic];
    //       duplicateStats.push(gC.special_one);
    //       duplicateStats.push(gC.special_two);
    //     });

    //     currentOptions.forEach((option) => {
    //       if (duplicateStats.includes(option.value)) {
    //         option.disabled = true;
    //       }
    //     });

    //     return currentOptions;
    // }

  }

  render () {
    const { currentCharacter, virtue, characterVirtues } = this.props;


    
    let { greatCharacteristics } = this.state;

    // Object.keys(characterVirtues).length !== 0 ? Object.keys(characterVirtues).forEach((virtue) => {
    //   switch (characterVirtues[virtue].name) {
    //     case "Great (Characteristic)":
    //       // greatCharacteristics[virtue.special_one] = true;
    //       // greatCharacteristics[virtue.special_two] = true;
    //       var select = document.getElementsByClassName("great-characteristics-select");
    //       console.log("SELECT HERE")
    //       console.log(select.options)
    //       // select.options[select.selectedIndex] = null;
    //       break;
    //     }
    // })
    // :
    // "";

    // Stat checking for various virtues and flaws
    if (currentCharacter !== null && currentCharacter !== undefined) {
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

    // let test = "disabled"

    switch (virtue.name) {
      case "Great (Characteristic)":
        return (
          <>
            <input className="create-virtue-checkbox" type="checkbox" disabled={this.enableSpecial()} onClick={(e) => this.props.handleClick(e, this.props.virtue, this.state)}></input>

            { virtue.name }

            <label htmlFor="special_one">
              <select name="" value={this.state.special_one} onChange={(e) => this.setSpecial(e, "one")} onMouseOver={() => this.test()} >
                <option name="special_one" value="">-- Select A Stat --</option>
                <option name="special_one" value="intelligence">Intelligence</option>
                <option name="special_one" value="perception">Perception</option>
                <option name="special_one" value="strength">Strength</option>
                <option name="special_one" value="stamina">Stamina</option>
                <option name="special_one" value="presence">Presence</option>
                <option name="special_one" value="communication">Communication</option>
                <option name="special_one" value="dexterity">Dexterity</option>
                <option name="special_one" value="quickness">Quickness</option>
              </select>
            </label>

            <label htmlFor="special_two">
              <select value={this.state.special_two} onChange={(e) => this.setSpecial(e, "two")} onMouseOver={() => this.test()} >
                <option name="special_two" value="">-- Select A Stat --</option>
                <option name="special_two" value="intelligence">Intelligence</option>
                <option name="special_two" value="perception">Perception</option>
                <option name="special_two" value="strength">Strength</option>
                <option name="special_two" value="stamina">Stamina</option>
                <option name="special_two" value="presence">Presence</option>
                <option name="special_two" value="communication">Communication</option>
                <option name="special_two" value="dexterity">Dexterity</option>
                <option name="special_two" value="quickness">Quickness</option>
              </select>
            </label>

            {/* <Select options={this.generateOptions()} /> */}
            <Select options={this.state.statOptions} />

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