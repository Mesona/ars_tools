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
    this.uncheckBox = this.uncheckBox.bind(this);
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
    // The componenet was not updating automatically, even though it was registering the
    // props changes
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
            }
          }
        });

        Object.keys(theseStats).forEach((statIndex) => {
          let stat = theseStats[statIndex];
          if (statDupes[stat.value] >= 2) {
            stat["isDisabled"] = true;
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
  
          // Validates a possible exploit where a user could select a stat
          // 3 times before checking the checkboxes, and then check all three
          // bypassing the limit of 2
          Object.keys(statDupes).forEach((statDup) => {
            let stat = statDupes[statDup];
            if (stat >= 2 && this.state.special_one === statDup) {
              this.uncheckBox();
              looped = true;
              this.setState({disabled: "disabled"});
            }
          });
      }
  
      if (looped === false) {
        this.setState({disabled: false});
        this.props.handleClick(checkBox, this.props.virtue, this.state);
      }
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

    switch (virtue.name) {
      case "Great (Characteristic)":
        return (
          <>

            <input className="create-virtue-checkbox" id={`create-virtue-checkbox-${this.state.thisID}`} type="checkbox" disabled={this.state.disabled} onClick={(e) => this.checkLoopholes(e)}></input>

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