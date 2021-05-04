import { connect } from 'react-redux';

import { requestAllVirtues } from '../../../actions/virtue_actions';
import { requestAllFlaws } from '../../../actions/flaw_actions';

const mapStateToProps = (state) => ({
  currentCharacter: state.entities.characters.currentCharacter,
});

const mapDispatchToProps = dispatch => ({
  requestAllVirtues: () => dispatch(requestAllVirtues()),
  requestAllFlaws: () => dispatch(requestAllFlaws()),
});


import React from 'react';
import UniquePerkContainer from './create_unique_perk_container';
import { Link } from 'react-router-dom';
import { merge, remove } from 'lodash/merge';

class CharacterCreatePerks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCharacter: this.props.currentCharacter,
      displayedPerks: this.props.perks,
      shown: this.props.classifications,
    };

    this.generateTemporaryPerkAttributes = this.generateTemporaryPerkAttributes.bind(this);
    this.generateInitialStates = this.generateInitialStates.bind(this);
    this.initialPerkStateUpdate = this.initialPerkStateUpdate.bind(this);
    this.disablePerk = this.disablePerk.bind(this);
    this.disablePerks = this.disablePerks.bind(this);
    this.disablePerkType = this.disablePerkType.bind(this);
    this.establishPerkHelperText = this.establishPerkHelperText.bind(this);

    // this.update = this.update.bind(this);
    this.handlePerk = this.handlePerk.bind(this);
    this.validation = this.validation.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.test = this.test.bind(this);
    this.calculatePerkPoints = this.calculatePerkPoints.bind(this);
    this.updateDisabledTypes = this.updateDisabledTypes.bind(this);
    this.classificationRender = this.classificationRender.bind(this);
    this.perkColumnRender = this.perkColumnRender.bind(this);
    this.perksRender = this.perksRender.bind(this);
  }   

  // componentDidUpdate(prevProps) {
  //   // Best way I found to enforce synchronise calue updating
  //   if (prevProps.perks !== this.props.perks) {
  //     this.calculatePerkPoints();
  //   }
  // }

  componentDidMount() {
    // TODO: Enable ability to resume an incomplete character creation
    this.generateInitialStates();
  }

  generateInitialStates() {
    let currentCharacter = this.state.currentCharacter;
    // let currentPerks = Object.assign([], currentCharacter.virtues, currentCharacter.flaws);
    let currentPerks = [];
    currentPerks = currentPerks.concat(currentCharacter.virtues, currentCharacter.flaws);
    let virtuePoints = 0;
    let flawPoints = 0;
    for (let i = 0; i < currentPerks.length; i++) {
      let thisPerk = currentPerks[i];
      if (thisPerk.major === false && thisPerk.free === false) {
        if (thisPerk.perk_type === "virtue") {
          virtuePoints += 1;
        } else {
          flawPoints += 1;
        }
      } else if (thisPerk.major === true) {
        if (thisPerk.perk_type === "virtue") {
          virtuePoints += 3;
        } else {
          flawPoints += 3;
        }
      }
    }

    this.setState({
      "flawPoints": flawPoints,
      "virtuePoints": virtuePoints,
      "perkPointText": "",
      "currentPerks": currentPerks,
    }, function () {
      this.generateTemporaryPerkAttributes();
      this.establishPerkHelperText();
      this.initialPerkStateUpdate();
    });
  }

  initialPerkStateUpdate() {
    const { currentCharacter } = this.state; 
    const { perkType } = this.props;
    let currentPerks = this.state.currentPerks;
    // if (perkType === "virtues") {
    //   currentPerks = currentCharacter.virtues;
    // } else if (perkType === "flaws") {
    //   currentPerks = currentCharacter.flaws;
    // }

    // Perks disabled upon load based on already established Perks
    currentPerks.forEach((currentPerk) => this.validation(currentPerk));
    // for (let i = 0; i < currentPerks.length; i++) {
    //   // let currentPerkIdx = Object.keys(currentPerks)[i];
    //   let currentPerk = currentPerks[i];
    //   this.validation(currentPerk);
    // }

    this.setState({
      currentPerks,
      displayReady: true
    }, () => {
      // Character type validations, always disabled
      // TODO: Move to separate function
      if (currentCharacter.character_type === "grog") {
        this.disablePerks(false,
                          "The Gift",
                          "Temporal Influence");

        this.disablePerkType("major", true);
        this.disablePerkType("perk_type", "Hermetic");

      } else if (currentCharacter.character_type === "npc") {
        this.disablePerks(false, "TheGift");

      } else if (currentCharacter.character_type === "companion") {
        this.disablePerks(false, "TheGift");

      } else if (currentCharacter.character_type === "mage") {
        this.disablePerks(false,
                          "The Gift",
                          "Hermetic Magus",
                          "Covenfolk",
                          "Craftsman",
                          "Wanderer",
                          "Merchant",
                          "Peasant");
      }
    });
  }

  establishPerkHelperText() {
    let character_type = this.state.currentCharacter.character_type;
    // TODO: Look up the actual flaw descriptions, currently it is
    // just a dupe of the (also incorrect) virtue texts
    let universalPerkText;
    let magePerkText;
    let grogPerkText;
    let companionPerkText;
    let otherPerkText;

    if (this.props.perkType === "virtue") {
      // TODO: Actual text, currently it's mostly placeholder
      universalPerkText = "Most virtues cost a number of virtue points to obtain. Major virtues cost 3, while minor virtues cost 1. "
      magePerkText = "Mages get the special virtue 'The Gift' for free, and MUST take X, Y, or Z";
      grogPerkText = "Grogs cannot take major virtues, and are limited to X Y OR Z";
      companionPerkText = "Companions are things that can be created";
      otherPerkText = "There are several that are free and can be taken with no penalty."
    } else if (this.props.perkType === "flaw") {
      universalPerkText = "Most virtues cost a number of virtue points to obtain. Major virtues cost 3, while minor virtues cost 1. "
      magePerkText = "Mages get the special virtue 'The Gift' for free, and MUST take X, Y, or Z";
      grogPerkText = "Grogs cannot take major virtues, and are limited to X Y OR Z";
      companionPerkText = "Companions are things that can be created";
      otherPerkText = "There are several that are free and can be taken with no penalty."
    }
    switch (character_type) {
      case "mage":
        this.setState({perkPointText: universalPerkText + magePerkText});
        break;
      case "grog":
        this.setState({perkPointText: universalPerkText + grogPerkText});
        break;
      case "companion":
        this.setState({perkPointText: universalPerkText + companionPerkText});
        break;
      case "other":
        this.setState({perkPointText: universalPerkText + otherPerkText});
        break;
    }
  }

  generateTemporaryPerkAttributes() {
    let displayedPerks = this.state.displayedPerks;
    let updatedDisplayedPerks = []

    let index = 0;
    let thisPerk = null;
    for (let i = 0; i < displayedPerks.length; i++) {
      thisPerk = displayedPerks[i];
      thisPerk.disabled = false;
      thisPerk.disabled_count = 0;

      for (let j = 0; j < thisPerk.creation_max; j++) {
        let individualPerk = JSON.parse(JSON.stringify(thisPerk));
        individualPerk.idx = index; 
        updatedDisplayedPerks.push(individualPerk);
        index++;
      }
    }

    this.setState({ displayedPerks: updatedDisplayedPerks});
  }

  disablePerk(undo, perk) {
    if (undo === false) {
      perk.disabled = "disabled";
      perk.disabled_count++;
    } else {
      perk.disabled_count--;
      if (perk.disabled_count === 0) {
        perk.disabled = false;
      }
    }

    return perk;
  }

  disablePerks() {
    let displayedPerks = this.state.displayedPerks;

    let perk;
    let passedPerks = [...arguments];
    let undo = passedPerks.shift();

    for (let i = 0; i < passedPerks.length; i++) {
      try {
        perk = displayedPerks.find( (thisPerk) => thisPerk.name === passedPerks[i]);
  
        if (perk.name === "The Gift") {
          console.log("DISABLE EARLY:", perk);
        }

        perk = this.disablePerk(undo, perk);
        // if (undo === false) {
        //   perk.disabled = "disabled";
        //   perk.disabled_count++;
        // } else {
        //   perk.disabled_count--;
        //   if (perk.disabled_count === 0) {
        //     perk.disabled = false;
        //   }
        // }
        if (perk.name === "The Gift") {
          console.log("DISABLE LATE:", perk);
        }
  
        displayedPerks[perk.idx] = perk;
      }
      catch(TypeError) {
        // We don't want this to error out when it tried to load flaws on the
        // virtue page, or virtues on the flaws page
      }
    }

    this.setState({ displayedPerks: displayedPerks });
  }

  disablePerkType(field, value, undo="") {
    let { displayedPerks } = this.state;

    for (let i = 0; i < Object.keys(displayedPerks).length; i++) {
      let perkIdx = Object.keys(displayedPerks)[i];
      let perk = displayedPerks[perkIdx];
      // TODO: Move somewhere for easy access, because this WILL be needed
      // Small snippet to create an object with a variable for its name
      // var this_perk = perk.name,
      //   obj = { [this_perk]: perk};
      if (perk[field] === value &&
        ! (perk in this.state.currentPerks)) {
          perk = this.disablePerk(undo, perk);
          // if (undo === "") {
          //   perk.disabled = "disabled";
          //   perk.disabled_count++;
          //   displayedPerks[perk.idx] = perk;
          // } else {
          //   perk.disabled_count--;
          //   if (perk.disabled_count === 0) {
          //     perk.disabled = false;
          //   }
          //   displayedPerks[perk.idx] = perk;
          // }
          displayedPerks[perk.idx] = perk;
      }
    }

    this.setState({ displayedPerks: displayedPerks });
  }

  // update(field) {
  //   return (e) => {
  //     this.setState({[field]: e.currentTarget.value});
  //   };
  // }

  handlePerk(checkBox, perk, childData = null) {
    const { perkType } = this.props;
    let currentPerks = this.state.currentPerks;
    let undo;
 
    if (childData !== null) {
      perk.special_one = childData.special_one;
      perk.special_two = childData.special_two;
    }

    // Checks if the virtue is already "checked," and if it
    // it is, the virtue will be deleted rather than added
    if (checkBox) {
      this.calculatePerkPoints(perk, "add");
      currentPerks.push(perk);
      undo = false;
    } else {
      this.calculatePerkPoints(perk, "subtract");
      currentPerks = _.remove(currentPerks, (thisPerk) => {
        return thisPerk !== perk;
      });
      undo = true;
    }

    if (perk.name === "The Gift") {
      console.log("YOOOO 2:", perk.disabled);
    }

    this.validation(perk, undo);

    this.setState({ currentPerks });
  }


  validation(perk, undo=false) {
    // Conditional validations
    if (perk.name === "Wealthy") {
      this.disablePerks(undo, "Custos", "Covenfolk");

    } else if (perk.name === 'Poor') {
      this.disablePerks(undo, "Wealthy", "Custos", "Covenfolk");

    } else if (perk.name === 'Custos') {
      this.disablePerks(undo, "Wealthy");

    } else if (perk.name === 'Covenfolk') {
      this.disablePerks(undo, "Wealthy");

    } else if (perk.name === 'Giant Blood') {
      this.disablePerks(undo, "Large", "Dwarf", "Small Frame");

    } else if (perk.name === 'Large') {
      this.disablePerks(undo, "Giant Blood", "Dwarf", "Small Frame");

    } else if (perk.name === "Small/disable Frame") {
      this.disablePerks(undo, "Large", "Giant Blood", "Dwarf");

    } else if (perk.name === "Dwarf") {
      this.disablePerks(undo, "Large", "Giant Blood", "Small Frame");

    // TODO: Make sure players cannot accidentally take both "Inoffensive
    // to Animals" virtues. 
    // } else if (perk.name === "Inoffensive to Animals") {
    //   this.disablePerks(undo, "Inoffensive to Animals");

    }

    // Necessary validations
    // If have "Diedne Magic" need to have "Dark Secret"
    // If you take inoffensive to animals hermetic, the general also gets applied (but doesn't add 2 virtues to virtue score)
  }


  handleShow(section) {
    // removes the section from view if it already exist
    // TODO: Visually hide the section so it doesn't need to rerender
    // when "show" is reactivated
    let shownSections = [...this.state.shown];
    if (shownSections.includes(section)) {
      let sectionIndex = shownSections.indexOf(section);
      let newSections = shownSections.slice(0, sectionIndex).concat(shownSections.slice(sectionIndex + 1));
      this.setState({ shown: newSections }, () => {
        console.log('yo')
        // document.getElementById(section).style.visibility = 'hidden';  // Will hide
        // document.getElementById(section).style.display = "none";
      });
    } else {
      shownSections.push(section);
      this.setState({ shown: shownSections }, () => {
        console.log('oy')
        // document.getElementById(section).style.visibility = 'visible';  // Will show 
        // document.getElementById(section).style.display = "block";
      });
    }
  }

  test() {
    console.log("Virtue Points:", this.state.virtuePoints);
    // let testVirtues = this.props.perks.filter(e => e.virtueType === classification)
    // this.props.perks.filter( perk => (perk.perk_type === undefined ? perk.perk_type === classification : perk.perk_type === classification) && perk.major === true ).map( perk => {
    // })
  }

  calculatePerkPoints(newPerk, math) {
    // FIXME: visually lags one state behind
    let perkPoints = 0;
    if (this.props.perkType === "virtue") {
      perkPoints = this.state.virtuePoints;
    } else {
      perkPoints = this.state.flawPoints;
    }

    let additionalValue = 0;
    if (newPerk.major === true) {
      additionalValue = 3;
    } else if (newPerk.free === false) {
      additionalValue = 1;
    }

    let newPerkPoints = 0;
    if (math === "add") {
      newPerkPoints = perkPoints + additionalValue;
    } else {
      newPerkPoints = perkPoints - additionalValue;
    }

    if (this.props.perkType === "virtue") {
      this.setState({ virtuePoints: newPerkPoints}, () => {
      });
    } else {
      this.setState({ flawPoints: perkPoints });
    }

    if (perkPoints < 10 && newPerkPoints === 10) {
      console.log("DISABLING MINORS")
      this.disablePerkType("major", true);
      this.disablePerkType("major", false);
    } else if (perkPoints === 10 && newPerkPoints < 10) {
      console.log("REENABLING MINORS")
      this.disablePerkType("major", false, true);
    } else if (perkPoints < 7 && newPerkPoints > 7) {
      console.log("DISABLING MAJORS")
      this.disablePerkType("major", true);
    } else if (perkPoints > 7 && newPerkPoints < 7) {
      console.log("REENABLING MAJORS")
      this.disablePerkType("major", true, true);
    }
  }

  updateDisabledTypes(value, perkType) {
    // console.log(totalVirtues)
    // console.log(minorVirtues)
    // TODO: Simplify this ugliness
    if (perkType === "virtues") {
      let virtuePoints = this.state.virtuePoints;
      // If we have added a non-free virtue
      if (value > virtuePoints && value > 7) {
        if (value > 9) {
          this.setState({ virtuePoints: value }, () => {
            this.disablePerkType("major", false);
            this.disablePerkType("major", true);
          });
        } else {
          this.setState({ virtuePoints: value }, () => {
            this.disablePerkType("major", true);
          });
        }
      } else if (value < virtuePoints && virtuePoints > 7) {
        if (value < 7) {
          this.setState({ virtuePoints: value }, () => {
            this.disablePerkType("major", false, 'undo');
            this.disablePerkType("major", true, 'undo');
          });
        } else {
          this.setState({ virtuePoints: value }, () => {
            this.disablePerkType("major", false, 'undo');
          });
        }
      } else {
        this.setState({ virtuePoints: value });
      }
    } else if (perkType === "flaws") {
      let flawPoints = this.state.flawPoints;
      // If we have added a non-free virtue
      if (value > flawPoints && value > 7) {
        if (value > 9) {
          this.setState({ flawPoints: value }, () => {
            this.disablePerkType("major", false);
            this.disablePerkType("major", true);
          });
        } else {
          this.setState({ flawPoints: value }, () => {
            this.disablePerkType("major", true);
          });
        }
      } else if (value < flawPoints && flawPoints > 7) {
        if (value < 7) {
          this.setState({ flawPoints: value }, () => {
            this.disablePerkType("major", false, 'undo');
            this.disablePerkType("major", true, 'undo');
          });
        } else {
          this.setState({ flawPoints: value }, () => {
            this.disablePerkType("major", false, 'undo');
          });
        }
      } else {
        this.setState({ flawPoints: value });
      }
    }
  }

  perksRender(perks) {
    return perks.map((perk) => {
      if (perk !== undefined) {
        return (
          <div
            id={perk.idx}
            className={`create-perk-hover ${perk.disabled}`}
            key={perk.idx}
          >
            <UniquePerkContainer 
              perk={perk}
              validate={this.validation}
              handleClick={this.handlePerk}
              currentPerks={this.state.currentPerks}
            />
            <hr></hr>
          </div>
        );
      }
    })
  }

  perkColumnRender(perks, perkType) {
    let majorPerks = Object.values(perks).filter((perk) => perk.major === true);
    let minorPerks = Object.values(perks).filter((perk) => perk.major === false && perk.free === false);
    let freePerks = Object.values(perks).filter((perk) => perk.major === false && perk.free === true);
    majorPerks = this.perksRender(majorPerks);
    minorPerks = this.perksRender(minorPerks);
    freePerks = this.perksRender(freePerks);
    return (
      <div key={`column-${perkType}`} className={`create-perks-parent ${this.state.shown.includes(perkType) ? "" : "removed"}`}>
        <div className="major">
          MAJOR
          {majorPerks}
        </div>

        <div className="minor">
          MINOR
          {minorPerks}
        </div>

        <div className="free">
          FREE
          {freePerks}
        </div>
        <br></br>
      </div>
    )
  };

  classificationRender(classifications) {
    return classifications.map((classification) => {
      let thesePerks = Object.values(this.state.displayedPerks).filter((perk) => perk.perk_type === classification);
      return (
        <div key={classification}>
          <p>{classification}</p>
          <span onClick={() => this.handleShow(classification)}>
            Show/Hide
          </span>
          <hr></hr>
          {this.perkColumnRender(thesePerks, classification)}
        </div>
      )
    })
  };

  render () {
    // if (this.state.ready === undefined) { 
    if (this.state.perkPointText === undefined || this.state.displayReady === undefined) { 
    // if (this.props.currentCharacter === undefined && this.props.perks === undefined) { 
      return (
        <div>
          Loading . . .
        </div>
      )}
    else { 
      return (
        <div>
          <p onClick={this.test}>
            Total Virtue Point Accumulation:{this.state.virtuePoints}
          </p>
          <p>
            Remaining Flaw Points Required:
            {this.state.virtuePoints - this.state.flawPoints}
          </p>
          {/* TODO: Hover question marks that explain the point distribution */}
          <div>
            <span onClick={this.props.handleSubmit} className="fake-url">
              Next
            </span>
          </div>

          { this.props.perkType === "virtue" ? 
            <Link to={`/character/new`}>
              <span className="fake-url">Back</span>
            </Link>
          :
            <Link to={`/characters/new/virtues`}>
              <span className="fake-url">Back</span>
            </Link>
          }

          <br></br>
          <hr></hr>

          {this.classificationRender(this.props.classifications)}
        </div>
      );
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterCreatePerks);