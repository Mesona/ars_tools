import React from 'react';
import Select from 'react-select'

class UniqueVirtue extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dupes: {},
      maxDupes: 0,
      special_one_text: "",
      special_two_text: "",
      special_one: this.props.special_one || null,
      special_two: this.props.special_two || "",
      numberOfSpecials: 0,
      disabled: "disabled",
      thisID: this.props.virtue.id,
      theseOptions: [{}],
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
    const SELECT_AN_ABILITY = "Select an ability . . .";
    const SELECT_AN_ART = "Select an art . . .";
    const SELECT_AN_ATTRIBUTE = "Select an attribute . . .";
    const SELECT_A_FORM = "Select a form . . .";

    // Determines if the current virtue uses special_two or not, as well as if
    // any other startup methods need to be called
    switch (this.props.virtue.name) {
      case "Great (Characteristic)":
        this.setState({
          maxDupes: 2,
          special_one_text: SELECT_AN_ATTRIBUTE,
          special_two: null,
          numberOfSpecials: 1,
          theseOptions: [...this.state.statOptions],
        });
        break;
      case "Affinity With (Ability)":
        this.setState({
          maxDupes: 1,
          special_one_text: SELECT_AN_ABILITY,
          special_two: null,
          numberOfSpecials: 1,
          theseOptions: [...this.state.abilityOptions],
        }, function() {
          this.generateAbilities();
        });
        break;
    }
  }

  componentDidUpdate(prevProps) {
    // The component was not updating automatically, even though it was registering the
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

    this.setState({theseOptions: returnedAbilities});
  }

  generateOptions() {
    let theseOptions = [...this.state.theseOptions];
    let dupes = this.calculateDupes();

    Object.keys(theseOptions).forEach((optionsIndex) => {
      let option = theseOptions[optionsIndex];
      if (dupes[option.value] >= this.state.maxDupes) {
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
  }

  calculateDupes() {
    let dupes = {};

    Object.keys(this.props.currentVirtues).forEach((currentVirtue) => {
      let virtue = this.props.currentVirtues[currentVirtue];
      let value = virtue.special_one;
      // Don't want to add the current virtue twice
      if (currentVirtue !== this.props.virtue.id && value !== null) {
        if (dupes[value] === undefined) {
          dupes[value] = 1;
        } else {
          dupes[value]++;
        }
      }
    });

    return dupes;
  }

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
      this.props.handleClick(false, this.props.virtue, this.state);
    }
  }

  render () {
    const { virtue } = this.props;
    switch (this.state.numberOfSpecials) {
      case 0:
        return (
          <React.Fragment>
  
            <input
              className="create-virtue-checkbox"
              id={`create-virtue-checkbox-${this.state.thisID}`}
              type="checkbox" onClick={(e) => this.checkLoopholes(e)}>
            </input>
  
            { virtue.name }
  
          </React.Fragment>
        )
      case 1:
        return (
          <>
            <input
              className="create-virtue-checkbox"
              id={`create-virtue-checkbox-${this.state.thisID}`}
              type="checkbox" disabled={this.state.disabled}
              onClick={(e) => this.checkLoopholes(e)}>
            </input>

            { virtue.name }

            <Select
              placeholder={<>{this.state.special_one_text}</>}
              options={this.state.theseOptions}
              onChange={(e) => this.setSpecial(e, "one")}
            />
          </>
        );
      case 2:
        return (
          <>
            <input
              className="create-virtue-checkbox"
              id={`create-virtue-checkbox-${this.state.thisID}`}
              type="checkbox" disabled={this.state.disabled}
              onClick={(e) => this.checkLoopholes(e)}>
            </input>

            { virtue.name }

            <Select
              placeholder={<>{this.state.special_one_text}</>}
              options={this.state.theseOptions}
              onChange={(e) => this.setSpecial(e, "one")}
            />

            <Select
              placeholder={<>{this.state.special_two_text}</>}
              options={this.state.theseOptions}
              onChange={(e) => this.setSpecial(e, "two")}
            />
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