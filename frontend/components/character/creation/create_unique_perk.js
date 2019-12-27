import React from 'react';
import Select from 'react-select'

// TODO: Create template to reduce redundancy in unique
// virtue and flaw components 
class UniquePerk extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dupes: {},
      maxDupes: 0,
      special_one_text: "",
      special_two_text: "",
      special_one: this.props.special_one || null,
      special_two: this.props.special_two || "",
      // numberOfSpecials 3 is for virtues with custom specials
      numberOfSpecials: 0,
      disabled: "disabled",
      thisID: this.props.perk.id,
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
      formOptions: [
        { value: 'creo', label: 'Creo' },
        { value: 'intelligo', label: 'Intelligo' },
        { value: 'muto', label: 'Muto' },
        { value: 'perdo', label: 'Perdo' },
        { value: 'rego', label: 'Rego' },
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
      faerieOptions: [
        { value: 'dwarf', label: 'Dwarf Blood' },
        { value: 'gobling', label: 'Goblin Blood' },
        { value: 'satyr', label: 'Satyr Blood' },
        { value: 'sidhe', label: 'Sidhe Blood' },
        { value: 'undine', label: 'Undine Blood' },
        { value: 'custom', label: 'Custom' },
      ],
      realmOptions: [
        { value: 'divine', label: 'Divine' },
        { value: 'faerie', label: 'Faerie' },
        { value: 'infernal', label: 'Infernal' },
        { value: 'magic', label: 'Magic' },
      ],
      abilityOptions: [{}],
    };

    this.test = this.test.bind(this);
    this.setSpecial = this.setSpecial.bind(this);
    this.enableSpecial = this.enableSpecial.bind(this);
    this.generateAbilities = this.generateAbilities.bind(this);
    this.updateOptionsWithDupes = this.updateOptionsWithDupes.bind(this);
    this.checkLoopholes = this.checkLoopholes.bind(this);
    this.calculateDupes = this.calculateDupes.bind(this);
    this.dupeCheck = this.dupeCheck.bind(this);
    this.uncheckBox = this.uncheckBox.bind(this);
    this.checkBox = this.checkBox.bind(this);
  }

  componentDidMount() {
    const SELECT_AN_ABILITY = "Select an ability . . .";
    const SELECT_AN_ART = "Select an art . . .";
    const SELECT_AN_ATTRIBUTE = "Select an attribute . . .";
    const SELECT_A_FORM = "Select a form . . .";
    const SELECT_A_REALM = "Select a realm . . .";
    const artOptions = this.state.formOptions.concat(this.state.techniqueOptions);

    // Determines if the current perk uses special_two or not, as well as if
    // any other startup methods need to be called
    switch (this.props.perk.name) {
      case "The Gift":
      case "Hermetic Magus":
        if (this.props.currentCharacter.character_type === "mage") {
          this.checkBox();
        }
        break;
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
      case "Cautios With (Ability)":
        this.setState({
          special_one_text: SELECT_AN_ABILITY,
          special_two: null,
          numberOfSpecials: 1,
          theseOptions: [...this.state.abilityOptions],
        }, function() {
          this.generateAbilities();
        });
        break;
      case "Cyclic Magic (Positive)":
        this.setState({
          numberOfSpecials: 3,
          special_one_text: "Choose a Natural Cycle . . .",
          special_two: null,
        });
        break;
      case "Death Prophecy":
        this.setState({
          numberOfSpecials: 3,
          special_one_text: "Death Prophecy . . .",
          special_two: null,
        });
        break;
      case "Deft Form":
        this.setState({
          special_one_text: SELECT_A_FORM,
          special_two: null,
          numberOfSpecials: 1,
          theseOptions: [...this.state.formOptions],
        });
        break;
      case "Faerie Blood":
        this.setState({
          special_one_text: "Faerie Blood Type . . .",
          special_two: null,
          numberOfSpecials: 1,
          theseOptions: [...this.state.faerieOptions],
        });
        break;
      case "Famous":
        this.setState({
          numberOfSpecials: 3,
          special_one_text: "Choose a Reputation . . .",
          special_two: null,
        });
        break;
      case "Greater Immunity":
        this.setState({
          numberOfSpecials: 3,
          special_one_text: "Choose One Hazard . . .",
          special_two: null,
        });
        break;
      case "Greater Purifying Touch":
        this.setState({
          numberOfSpecials: 3,
          special_one_text: "Choose One Disease . . .",
          special_two: null,
        });
        break;
      case "Hermetic Prestige":
      case "Protection":
        this.setState({
          numberOfSpecials: 3,
          special_one_text: "Choose One Reputation . . .",
          special_two: null,
        });
        break;
      case "Learn (Ability) From Mistakes":
        this.setState({
          special_one_text: SELECT_AN_ABILITY,
          special_two: null,
          numberOfSpecials: 1,
          theseOptions: [...this.state.abilityOptions],
        }, function() {
          this.generateAbilities();
        });
        break;
      case "Lesser Immunity":
        this.setState({
          numberOfSpecials: 3,
          special_one_text: "Choose One Hazard . . .",
          special_two: null,
        });
        break;
      case "Lesser Purifying Touch":
        this.setState({
          numberOfSpecials: 3,
          special_one_text: "Choose One Disease . . .",
          special_two: null,
        });
        break;
      case "Major Magical Focus":
        this.setState({
          numberOfSpecials: 3,
          special_one_text: "Choose One Focus . . .",
          special_two: null,
        });
        break;
      case "Minor Magical Focus":
        this.setState({
          numberOfSpecials: 3,
          special_one_text: "Choose One Focus . . .",
          special_two: null,
        });
        break;
      case "Puissant (Ability)":
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
      case "Puissant (Art)":
        this.setState({
          special_one_text: SELECT_AN_ART,
          special_two: null,
          numberOfSpecials: 1,
          theseOptions: [...artOptions],
        });
        break;
      case "Relic":
        this.setState({
          numberOfSpecials: 3,
          special_one_text: "Choose A Relic . . .",
          special_two: null,
        });
        break;
      case "Relic":
        this.setState({
          numberOfSpecials: 3,
          special_one_text: "Choose A Side Effect . . .",
          special_two: null,
        });
        break;
      case "Skinchanger":
        this.setState({
          numberOfSpecials: 3,
          special_one_text: "Choose A Magical Item . . .",
          special_two: null,
        });
        break;
      case "Special Circumstances":
        this.setState({
          numberOfSpecials: 3,
          special_one_text: "Choose An Uncommon Situation . . .",
          special_two: null,
        });
        break;
      case "Strong Faerie Blood":
        this.setState({
          special_one_text: "Faerie Blood Type . . .",
          special_two: null,
          numberOfSpecials: 1,
          theseOptions: [...this.state.faerieOptions],
        });
        break;
      case "Student of (Realm)":
        this.setState({
          maxDupes: 1,
          special_one_text: SELECT_A_REALM,
          special_two: null,
          numberOfSpecials: 1,
          theseOptions: [...this.state.realmOptions],
        });
        break;
      // TODO: Get dupe checking for Ways of the Land to work, but since it's an RP
      // virtue that cannot be progrmatically enforced, it's a low priority
      case "Ways of the (Land)":
        this.setState({
          maxDupes: 1,
          special_one_text: "Land Type . . .",
          special_two: null,
          numberOfSpecials: 3,
        });
        break;
    }
  }

  componentDidUpdate(prevProps) {
    // The component was not updating automatically, even though it was registering the
    // props changes
    if (prevProps.currentPerks !== this.props.currentPerks) {
      this.updateOptionsWithDupes();
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
    } else if (specialSpot === "three") {
      this.setState({special_one: e.currentTarget.value},
        function() {
          this.enableSpecial();
        }
      );
    }
  }

  enableSpecial() {
    let baseValidation = this.props.validate(this.props.perk);

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

    this.setState({
      theseOptions: returnedAbilities,
    });
  }

  updateOptionsWithDupes() {
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

    Object.keys(this.props.currentPerks).forEach((currentPerk) => {
      let perk = this.props.currentPerks[currentPerk];
      let value = perk.special_one;
      // Don't want to add the current virtue twice
      if (currentPerk !== this.props.perk.id && value !== null) {
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
        this.props.handleClick(false, this.props.perk, this.state);
      } else {

      const dupes = this.state.dupes;

      Object.keys(dupes).forEach((dupe) => {
        let stat = dupes[dupe];
        switch (this.state.maxDupes) {
          case 2:
            looped = this.dupeCheck(stat, dupe, 2);
            break;
          case 1:
            looped = this.dupeCheck(stat, dupe, 1);
            break;
          }
        });
  
      if (looped === false) {
        this.setState({disabled: false});
        this.props.handleClick(checkBox, this.props.perk, this.state);
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
    let thisID = `create-perk-checkbox-${this.state.thisID}`;
    let thisCheckbox = document.getElementById(thisID);
    if (thisCheckbox.checked === true) {
      thisCheckbox.checked = false;
      this.props.handleClick(false, this.props.perk, this.state);
    }
  }
  
  // Used in special cases where a virtue needs to be checked and cannot, under any
  // circumstance, be unchecked. Primarily used by Virtues & Flaws granted to
  // Mages and their chosen House
  checkBox() {
    let thisID = `create-perk-checkbox-${this.state.thisID}`;
    let thisCheckbox = document.getElementById(thisID);
    thisCheckbox.checked = true;
    this.props.handleClick(true, this.props.perk, this.state);
  }

  render () {
    const { perk } = this.props;
    switch (this.state.numberOfSpecials) {
      case 0:
        return (
          <React.Fragment>
  
            <input
              className="create-perk-checkbox"
              id={`create-perk-checkbox-${this.state.thisID}`}
              disabled={this.props.validate(perk)}
              type="checkbox" onClick={(e) => this.checkLoopholes(e)}>
            </input>
  
            { perk.name } <span className="perkInfo">?</span>
  
          </React.Fragment>
        )
      case 1:
        return (
          <>
            <input
              className="create-perk-checkbox"
              id={`create-perk-checkbox-${this.state.thisID}`}
              type="checkbox" disabled={this.state.disabled}
              onClick={(e) => this.checkLoopholes(e)}>
            </input>

            { perk.name } <span className="perkInfo">?</span>

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
              className="create-perk-checkbox"
              id={`create-perk-checkbox-${this.state.thisID}`}
              type="checkbox" disabled={this.state.disabled}
              onClick={(e) => this.checkLoopholes(e)}>
            </input>

            { perk.name } <span className="perkInfo">?</span>
            {/* TODO: On "?" click, show virtue.description in new "popup" div, close when clicked outside */}

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
      case 3:
        return (
          <>
            <input
              className="create-perk-checkbox"
              id={`create-perk-checkbox-${this.state.thisID}`}
              type="checkbox" disabled={this.state.disabled}
              onClick={(e) => this.checkLoopholes(e)}>
            </input>

            { perk.name } <span className="perkInfo">?</span>

            <input
              type="string"
              placeholder={this.state.special_one_text}
              defaultValue={this.state.special_one}
              onChange={(e) => this.setSpecial(e, "three")}
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

export default UniquePerk;