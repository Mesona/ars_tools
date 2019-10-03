import React from 'react';
import Select from 'react-select'

class UniqueVirtue extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      greatCharacteristics: {},
      statDupes: {},
      affinityWithAbility: [],
      affinityWithArt: [],
      special_one: this.props.special_one || null,
      special_two: this.props.special_two || "",
      disabled: "disabled",
      thisID: this.props.virtue.id,
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
      techniqueOptions: [
        { value: 'animal', label: 'Animal' },
        { value: 'aquam', label: 'Aquam' },
        { value: 'auram', label: 'Auram' },
        { value: 'corpus', label: 'Corpus' },
        { value: 'herbam', label: 'Herbam' },
        { value: 'ignem', label: 'Ignem' },
        { value: 'imaginem', label: 'Imaginem' },
        { value: 'mentem', label: 'Mentem' },
        { value: 'terram', label: 'Terram' },
        { value: 'vim', label: 'Vim' },
      ],
      formOptions: [
        { value: 'creo', label: 'Creo' },
        { value: 'intelligo', label: 'Intelligo' },
        { value: 'muto', label: 'Muto' },
        { value: 'perdo', label: 'Perdo' },
        { value: 'rego', label: 'Rego' },
      ],
    };

    this.test = this.test.bind(this);
    this.setSpecial = this.setSpecial.bind(this);
    this.enableSpecial = this.enableSpecial.bind(this);
    this.generateOptions = this.generateOptions.bind(this);
    this.checkLoopholes = this.checkLoopholes.bind(this);
  }

  componentDidMount() {
    // Determines if the current virtue uses special_two or not
    switch (this.props.virtue.name) {
      case "Great (Characteristic)":
        this.setState({special_two: null});
        break;
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentVirtues !== this.props.currentVirtues) {
      if (this.props.virtue.name === "Great (Characteristic)") {
        this.generateOptions("Great (Characteristic)");
      }
    }
  }

  test() {
    console.log("STATE")
    console.log(this.state)
    console.log("PROPS")
    console.log(this.props)
  }

  setSpecial(e, specialSpot) {

    if (specialSpot === "one") {
      this.setState({special_one: e.value},
        this.enableSpecial()
      );
    } else if (specialSpot === "two") {
      this.setState({special_two: e.value},
        this.enableSpecial()
      );
    }
  }

  enableSpecial() {
    let baseValidation = this.props.validateVirtue(this.props.virtue);

    // If the virtue is not disabled by some "hard set" lock
    if (baseValidation !== "disabled") {
      // if (this.state.special_one === "" || this.special_two === "") {
      if (this.special_two === "") {
        this.setState({disabled: "disabled"})
      } else {
        this.setState({disabled: ""})
      }
    }
  }

  generateOptions(virtueName) {
    const theseStats = [...this.state.statOptions];
    let statDupes = {};
    let formDupes = [];
    let techniqueDupes = [];

    switch (virtueName) {
      case "Great (Characteristic)":

        Object.keys(this.props.currentVirtues).forEach((currentVirtue) => {
          let virtue = this.props.currentVirtues[currentVirtue];
          if ((virtue.name === "Great (Characteristic)") && (currentVirtue !== this.props.virtue.id)) {
            let stat = virtue.special_one;
            if (statDupes[stat] === undefined) {
              statDupes[stat] = 1;
            } else {
              statDupes[stat]++;
              // if (statDupes[stat] > 2 && currentVirtue === this.state.thisID) {
              // if (statDupes[stat] > 2) {
              //   console.log("HONK")
              //   let thisID = `create-virtue-checkbox-${this.state.thisID}`;
              //   let thisCheckbox = document.getElementById(thisID);
              //   thisCheckbox.checked = false;
              // }
            }
          }
        });

        Object.keys(theseStats).forEach((statIndex) => {
          let stat = theseStats[statIndex];
          if (statDupes[stat.value] >= 2) {
            stat["isDisabled"] = true;
          // } else if (statDupes[stat.value] > 2) {
          //   stat["isDisabled"] = true;
          //   this.setState({disabled: "disabled"});
          //   // let thisID = `create-virtue-checkbox-${this.state.thisID}`;
          //   // let thisCheckbox = document.getElementById(thisID);
          //   // thisCheckbox.checked = false;
          } else {
            stat["isDisabled"] = false;
          }
        });

        this.setState({
          statOptions: theseStats,
          statDupes: statDupes,
         }, this.checkLoopholes());
    }
  }

  checkLoopholes(e) {
    if (e) {
      e.stopPropagation();
      const statDupes = this.state.statDupes;
      let looped = false;
      let checkBox = e.target.checked;
      switch (this.props.virtue.name) {
        case "Great (Characteristic)":
  
          Object.keys(statDupes).forEach((statDup) => {
            let stat = statDupes[statDup];
            if (stat >= 2) {
              let thisID = `create-virtue-checkbox-${this.state.thisID}`;
              let thisCheckbox = document.getElementById(thisID);
              // checkbox = false;
              console.log("THIS CHECKBOX")
              console.log(thisCheckbox)
              // thisCheckbox.checked = false;
              checkBox = false;
              looped = true;
              this.setState({disabled: "disabled"}, console.log("HONK"))
            }
          });
      }
  
      if (looped === false) {
        this.props.handleClick(checkBox, this.props.virtue, this.state);
      }
    }
  }

  render () {
    const { currentCharacter, virtue } = this.props;


    
    // let { greatCharacteristics } = this.state;

    // // Stat checking for various virtues and flaws
    // if (currentCharacter !== null && currentCharacter !== undefined) {
    //   if (currentCharacter.intelligence >= 3 && currentCharacter.intelligence < 5) {
    //     greatCharacteristics["intelligence"] = currentCharacter.intelligence;
    //   } else if ( currentCharacter.intelligence <= -3 && currentCharacter.intelligence > -5) {
    //     poorCharacteristics["intelligence"] = currentCharacter.intelligence;
    //   }

    //   if (currentCharacter.perception >= 3 && currentCharacter.perception < 5) {
    //     greatCharacteristics["perception"] = currentCharacter.perception;
    //   } else if ( currentCharacter.perception <= -3 && currentCharacter.perception > -5) {
    //     poorCharacteristics["perception"] = currentCharacter.perception;
    //   }

    //   if (currentCharacter.strength >= 3 && currentCharacter.strength < 5) {
    //     greatCharacteristics["strength"] = currentCharacter.strength;
    //   } else if ( currentCharacter.strength <= -3 && currentCharacter.strength > -5) {
    //     poorCharacteristics["strength"] = currentCharacter.strength;
    //   }

    //   if (currentCharacter.stamina >= 3 && currentCharacter.stamina < 5) {
    //     greatCharacteristics["stamina"] = currentCharacter.stamina;
    //   } else if ( currentCharacter.stamina <= -3 && currentCharacter.stamina > -5) {
    //     poorCharacteristics["stamina"] = currentCharacter.stamina;
    //   }

    //   if (currentCharacter.presence >= 3 && currentCharacter.presence < 5) {
    //     greatCharacteristics["presence"] = currentCharacter.presence;
    //   } else if ( currentCharacter.presence <= -3 && currentCharacter.presence > -5) {
    //     poorCharacteristics["presence"] = currentCharacter.presence;
    //   }

    //   if (currentCharacter.communication >= 3 && currentCharacter.communication < 5) {
    //     greatCharacteristics["communication"] = currentCharacter.communication;
    //   } else if ( currentCharacter.communication <= -3 && currentCharacter.communication > -5) {
    //     poorCharacteristics["communication"] = currentCharacter.communication;
    //   }

    //   if (currentCharacter.dexterity >= 3 && currentCharacter.dexterity < 5) {
    //     greatCharacteristics["dexterity"] = currentCharacter.dexterity;
    //   } else if ( currentCharacter.dexterity <= -3 && currentCharacter.dexterity > -5) {
    //     poorCharacteristics["dexterity"] = currentCharacter.dexterity;
    //   }

    //   if (currentCharacter.quickness >= 3 && currentCharacter.quickness < 5) {
    //     greatCharacteristics["quickness"] = currentCharacter.quickness;
    //   } else if ( currentCharacter.quickness <= -3 && currentCharacter.quickness > -5) {
    //     poorCharacteristics["quickness"] = currentCharacter.quickness;
    //   }
    // }

    switch (virtue.name) {
      case "Great (Characteristic)":
        return (
          <>
            {/* <input className="create-virtue-checkbox" id={`create-virtue-checkbox-${this.state.thisID}`} type="checkbox" disabled={this.state.disabled} onClick={(e) => this.props.handleClick(e, this.props.virtue, this.state)}></input> */}
            <input className="create-virtue-checkbox" id={`create-virtue-checkbox-${this.state.thisID}`} type="checkbox" disabled={this.state.disabled} onClick={(e) => this.checkLoopholes(e)}></input>
            {/* <input className="create-virtue-checkbox" id={`create-virtue-checkbox-${this.state.thisID}`} type="checkbox" disabled={this.state.disabled} onClick={this.checkLoopholes}></input> */}

            { virtue.name }

            <Select options={this.state.statOptions} onChange={(e) => this.setSpecial(e, "one")} />

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
  }

}

export default UniqueVirtue;