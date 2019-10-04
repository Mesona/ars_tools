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
    this.calculateDupes = this.calculateDupes.bind(this);
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
          this.generateOptions();
          break;
        case "Affinity With (Ability)":
          this.generateOptions();
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
        function() {
          this.enableSpecial();
        }
      );
    } else if (specialSpot === "two") {
      this.setState({special_two: e.value},
        function() {
          this.enableSpecial();
        }
      );
    }
  }

  enableSpecial() {
    let baseValidation = this.props.validateVirtue(this.props.virtue);

    // If the virtue is not disabled by some "hard set" lock
    if (baseValidation !== "disabled") {
      // if (this.state.special_one === "" || this.special_two === "") {
      if (this.special_two === "") {
        this.setState({disabled: "disabled"});
      } else {
        this.setState({disabled: ""});
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
      returnedAbilities.push({"value": value.join(' '), "label": label.join(' ')});
    });

    this.setState({abilityOptions: returnedAbilities});
  }

  generateOptions() {
    let theseOptions;
    let capacity;
    const theseStats = [...this.state.statOptions];
    const theseAbilities = [...this.state.abilityOptions];
    let dupes = this.calculateDupes();

      switch (this.props.virtue.name) {
        case "Great (Characteristic)":
          theseOptions = [...this.state.statOptions];
          capacity = 2;
          Object.keys(theseOptions).forEach((optionsIndex) => {
            let option = theseOptions[optionsIndex];
            // console.log("OPTION CHECK")
            // console.log(option.value)
            // console.log(dupes[option.value])
            if (dupes[option.value] >= capacity) {
              option["isDisabled"] = true;
            } else {
              option["isDisabled"] = false;
            }
          });

          this.setState({
            statOptions: theseOptions,
            dupes: dupes,
          }, function() {
            this.checkLoopholes();
          });
          break;
        case "Affinity With (Ability)":
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

  calculateDupes() {
    let virtueName = this.props.virtue.name;
    let dupes = {};

    Object.keys(this.props.currentVirtues).forEach((currentVirtue) => {
      let virtue = this.props.currentVirtues[currentVirtue];
      switch (virtueName) {
        case "Great (Characteristic)":
          if ((virtue.name === "Great (Characteristic)") && (currentVirtue !== this.props.virtue.id)) {
            let stat = virtue.special_one;
            if (dupes[stat] === undefined) {
              dupes[stat] = 1;
            } else {
              dupes[stat]++;
            }
          }
          break;

          case "Affinity With (Ability)":
          if ((virtue.name === "Affinity With (Ability)") && (currentVirtue !== this.props.virtue.id)) {
            let ability = virtue.special_one;
            if (dupes[ability] === undefined) {
              dupes[ability] = 1;
            } else {
              dupes[ability]++;
            }
          }
          break;

      }
    });

    return dupes;
  }

  // WORKS, BUT ISN'T GENERALIZED
  // generateOptions(virtueName) {
  //   const theseStats = [...this.state.statOptions];
  //   const theseAbilities = [...this.state.abilityOptions];
  //   let dupes = {};

  //   switch (virtueName) {

  //     case "Great (Characteristic)":
  //       Object.keys(this.props.currentVirtues).forEach((currentVirtue) => {
  //         let virtue = this.props.currentVirtues[currentVirtue];
  //         if ((virtue.name === "Great (Characteristic)") && (currentVirtue !== this.props.virtue.id)) {
  //           let stat = virtue.special_one;
  //           if (dupes[stat] === undefined) {
  //             dupes[stat] = 1;
  //           } else {
  //             dupes[stat]++;
  //           }
  //         }
  //       });

  //       Object.keys(theseStats).forEach((statIndex) => {
  //         let stat = theseStats[statIndex];
  //         if (dupes[stat.value] >= 2) {
  //           stat["isDisabled"] = true;
  //         } else {
  //           stat["isDisabled"] = false;
  //         }
  //       });

  //       this.setState({
  //         statOptions: theseStats,
  //         dupes: dupes,
  //       }, this.checkLoopholes());
  //       break;

  //     case "Affinity With (Ability)":
  //       Object.keys(this.props.currentVirtues).forEach((currentVirtue) => {
  //         let virtue = this.props.currentVirtues[currentVirtue];
  //         if ((virtue.name === "Affinity With (Ability)") && (currentVirtue !== this.props.virtue.id)) {
  //           let ability = virtue.special_one;
  //           if (dupes[ability] === undefined) {
  //             dupes[ability] = 1;
  //           } else {
  //             dupes[ability]++;
  //           }
  //         }
  //       });

  //       Object.keys(theseAbilities).forEach((abilityIndex) => {
  //         let ability = theseAbilities[abilityIndex];
  //         if (dupes[ability.value] >= 1) {
  //           ability["isDisabled"] = true;
  //         } else {
  //           ability["isDisabled"] = false;
  //         }
  //       });

  //       this.setState({
  //         abilityOptions: theseAbilities,
  //         dupes: dupes,
  //       }, this.checkLoopholes());
  //       break;
  //   }
  // }

  checkLoopholes(e) {
    // This "if (e) stops the site from generating errors on load"
    if (e) {
      e.stopPropagation();
      let looped = false;
      let checkBox = e.target.checked;

      if (checkBox === false) {
        this.props.handleClick(false, this.props.virtue, this.state);
      } else {

      const dupes = this.state.dupes;

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
}

  dupeCheck(stat, dupe, cap) {
    // Validates a possible exploit where a user could select an option
    // multiple times before checking the checkboxes, and then check them all,
    // bypassing the default limit
    console.log("STAT: " + stat)
    console.log("SPECIAL_ONE: " + this.state.special_one)
    console.log("DUPE: " + dupe)
    console.log("CAP: " + cap)
    console.log(stat >= cap)
    console.log(this.state.special_one === dupe)
    if (stat >= cap && this.state.special_one === dupe) {
      // Undoes the addition of the "offending" virtue
      this.uncheckBox();
      this.setState({disabled: "disabled"});
      return true;
    } else {
      return false;
    }
  }

  uncheckBox() {
    let thisID = `create-virtue-checkbox-${this.state.thisID}`;
    let thisCheckbox = document.getElementById(thisID);
    if (thisCheckbox.checked === true) {
      thisCheckbox.checked = false;
      console.log("RUN")
      this.props.handleClick(false, this.props.virtue, this.state);
    }
  }

  render () {
    const { virtue } = this.props;

    if (virtue.special === false) {
      return (
        <React.Fragment>

          <input className="create-virtue-checkbox" id={`create-virtue-checkbox-${this.state.thisID}`} type="checkbox" onClick={(e) => this.checkLoopholes(e)}></input>

          { virtue.name }

        </React.Fragment>
      )
    } else {

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

}

export default UniqueVirtue;