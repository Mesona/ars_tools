import React from 'react';
import Select from 'react-select'

class UniqueVirtue extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dupes: {},
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
      abilityOptions: [{}],
    };

    this.test = this.test.bind(this);
    this.setSpecial = this.setSpecial.bind(this);
    this.enableSpecial = this.enableSpecial.bind(this);
    this.generateAbilities = this.generateAbilities.bind(this);
    this.generateOptions = this.generateOptions.bind(this);
    this.checkLoopholes = this.checkLoopholes.bind(this);
    this.dupeCheck = this.dupeCheck.bind(this);
    this.uncheckBox = this.uncheckBox.bind(this);
  }

  componentDidMount() {
    // Determines if the current virtue uses special_two or not, as well as if
    // any other startup methods need to be called
    switch (this.props.virtue.name) {
      case "Great (Characteristic)":
        this.setState({special_two: null});
        break;
      case "Affinity With (Ability)":
        this.setState({special_two: null});
        this.generateAbilities();
        break;
    }
  }

  componentDidUpdate(prevProps) {
    // The componenet was not updating automatically, even though it was registering the
    // props changes
    if (prevProps.currentVirtues !== this.props.currentVirtues) {
      switch (this.props.virtue.name) {
        case "Great (Characteristic)":
          this.generateOptions("Great (Characteristic)");
          break;
        case "Affinity With (Ability)":
          this.generateOptions("Affinity With (Ability)");
          break;
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

    // Dechecks the checkbox if a user changes the dropdown after selecting the virtue
    this.uncheckBox();

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

  generateAbilities() {
    let abilities = [...this.props.abilities];
    let returnedAbilities = [];
    Object.keys(abilities).forEach((abilityKey) => {
      let ability = abilities[abilityKey].name.split(' ');
      let label = [];
      let value = [];
      ability.forEach((word) => {
        let modifiedWord = word.toLowerCase();
        value.push(modifiedWord);
        if (modifiedWord.charAt(0).match(/[a-z]/i)) {
          label.push(modifiedWord.charAt(0).toUpperCase() + modifiedWord.slice(1));
        } else {
          label.push(modifiedWord.charAt(0) + modifiedWord.charAt(1).toUpperCase() + modifiedWord.slice(2));
        }
      });
      returnedAbilities.push({"value": value.join(' '), "label": label.join(' ')})
    });

    // this.setState({abilityOptions: [...returnedAbilities]});
    this.setState({abilityOptions: returnedAbilities});
  }

  generateOptions(virtueName) {
    const theseStats = [...this.state.statOptions];
    const theseAbilities = [...this.state.abilityOptions];
    let dupes = {};
    let techniqueDupes = [];

    switch (virtueName) {

      case "Great (Characteristic)":
        Object.keys(this.props.currentVirtues).forEach((currentVirtue) => {
          let virtue = this.props.currentVirtues[currentVirtue];
          if ((virtue.name === "Great (Characteristic)") && (currentVirtue !== this.props.virtue.id)) {
            let stat = virtue.special_one;
            if (dupes[stat] === undefined) {
              dupes[stat] = 1;
            } else {
              dupes[stat]++;
            }
          }
        });

        Object.keys(theseStats).forEach((statIndex) => {
          let stat = theseStats[statIndex];
          if (dupes[stat.value] >= 2) {
            stat["isDisabled"] = true;
          } else {
            stat["isDisabled"] = false;
          }
        });

        this.setState({
          statOptions: theseStats,
          dupes: dupes,
        }, this.checkLoopholes());
        break;

      case "Affinity With (Ability)":
        Object.keys(this.props.currentVirtues).forEach((currentVirtue) => {
          let virtue = this.props.currentVirtues[currentVirtue];
          if ((virtue.name === "Affinity With (Ability)") && (currentVirtue !== this.props.virtue.id)) {
            let ability = virtue.special_one;
            if (dupes[ability] === undefined) {
              dupes[ability] = 1;
            } else {
              dupes[ability]++;
            }
          }
        });

        Object.keys(theseAbilities).forEach((abilityIndex) => {
          let ability = theseAbilities[abilityIndex];
          if (dupes[ability.value] >= 1) {
            ability["isDisabled"] = true;
          } else {
            ability["isDisabled"] = false;
          }
        });

        this.setState({
          abilityOptions: theseAbilities,
          dupes: dupes,
        }, this.checkLoopholes());
        break;
    }
  }

  checkLoopholes(e) {
    if (e) {
      e.stopPropagation();
      const dupes = this.state.dupes;
      let looped = false;
      let checkBox = e.target.checked;

      Object.keys(dupes).forEach((dupe) => {
        let stat = dupes[dupe];
        switch (this.props.virtue.name) {
          case "Great (Characteristic)":
            looped = this.dupeCheck(stat, dupe, 2);
            break;
          case "Affinity With (Ability)":
            looped = this.dupeCheck(stat, dupe, 1);
            break;
          }
        });
  
      if (looped === false) {
        this.setState({disabled: false});
        this.props.handleClick(checkBox, this.props.virtue, this.state);
      }
    }
  }

  dupeCheck(stat, dupe, cap) {
    // Validates a possible exploit where a user could select an option
    // multiple times before checking the checkboxes, and then check them all,
    // bypassing the default limi
    if (stat >= cap && this.state.special_one === dupe) {
      this.uncheckBox();
      this.setState({disabled: "disabled"})
      return true;
    } else {
      return false;
    }
  }

  // FUNCTIONAL, BUT NOT GENERALIZED
  // checkLoopholes(e) {
  //   if (e) {
  //     e.stopPropagation();
  //     const dupes = this.state.dupes;
  //     let looped = false;
  //     let checkBox = e.target.checked;
  //     switch (this.props.virtue.name) {
  //       case "Great (Characteristic)":
  
  //         // Validates a possible exploit where a user could select a stat
  //         // 3 times before checking the checkboxes, and then check all three
  //         // bypassing the limit of 2
  //         Object.keys(dupes).forEach((statDup) => {
  //           let stat = dupes[statDup];
  //           if (stat >= 2 && this.state.special_one === statDup) {
  //             this.uncheckBox();
  //             looped = true;
  //             this.setState({disabled: "disabled"});
  //           }
  //         });
  //     }
  
  //     if (looped === false) {
  //       this.setState({disabled: false});
  //       this.props.handleClick(checkBox, this.props.virtue, this.state);
  //     }
  //   }
  // }

  uncheckBox() {
    let thisID = `create-virtue-checkbox-${this.state.thisID}`;
    let thisCheckbox = document.getElementById(thisID);
    if (thisCheckbox.checked === true) {
      thisCheckbox.checked = false;
      this.props.handleClick(false, this.props.virtue, this.state);
    }
  }

  render () {
    const { virtue } = this.props;

    switch (virtue.name) {
      case "Affinity With (Ability)":
        return (
          <>
            <input className="create-virtue-checkbox" id={`create-virtue-checkbox-${this.state.thisID}`} type="checkbox" disabled={this.state.disabled} onClick={(e) => this.checkLoopholes(e)}></input>

            { virtue.name }

            <Select options={this.state.abilityOptions} onChange={(e) => this.setSpecial(e, "one")} />
          </>
        );
      case "Great (Characteristic)":
        return (
          <>

            <input className="create-virtue-checkbox" id={`create-virtue-checkbox-${this.state.thisID}`} type="checkbox" disabled={this.state.disabled} onClick={(e) => this.checkLoopholes(e)}></input>

            { virtue.name }

            <Select options={this.state.statOptions} onChange={(e) => this.setSpecial(e, "one")} />

          </>
        );
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