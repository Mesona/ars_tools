import React from 'react';
import UniquePerkContainer from './create_unique_perk_container';
import { Link } from 'react-router-dom';

// TODO: Create template to reduce redundancy in 
// CreateFlaws and CreateVirtues
class CharacterCreatePerks extends React.Component {
 constructor(props) {
   super(props);

   this.state = {
    currentCharacter: null,
    virtues: null,
    flaws: null,
    virtuePoints: 0,
    // TODO: Get rid of virtue/flaw point state variables and
    // calculate from currentVirtues & currentFlaws
    currentVirtuePoints: 0,
    currentFlawPoints: 0,
    flawPoints: 0,
    minorFlaws: 0,
    currentVirtues: {},
    currentFlaws: {},
    perkPointText: "",
    show: [],

    perkType: this.props.perkType,
   };

   this.update = this.update.bind(this);
   this.handleFlaw = this.handleFlaw.bind(this);
   this.validation = this.validation.bind(this);
   this.establishFlaws = this.establishFlaws.bind(this);
   this.handleShow = this.handleShow.bind(this);
 } 

 componentDidMount() {
      this.props.requestCharacter(this.props.characterId)
        .then((response) => {
          this.setState({
            currentCharacter: {...response.character},
            currentVirtues: response.character.virtues,
            currentFlaws: response.character.flaws,
            virtuePoints: (response.character.character_type === "mage" ? 10 : 
              response.character.character_type === "companion" ? 10 : 3),
            // TODO: Fix flawPoints
            flawPoints: 10,
            }
          );
        }
    ).then(this.establishPerks);

    if (this.state.perkType === "virtue") {
      this.props.requestAllVirtues()
        .then((response) => this.setState({
          virtues: response.virtues,
      }));
    } else if (this.state.perkType === "flaw") {
      this.props.requestAllFlaws()
        .then((response) => this.setState({
          flaws: response.flaws,
      }));
    }

    this.props.requestAllAbilities();

  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handlePerk(checkBox, perk, childData = null) {
    let storePerk, deletePerk;
    if (this.state.perkType === "virtue") {
      // TODO: Not sure if these need to be called
      storePerk = this.props.storeVirtue;
      deletePerk = this.props.deleteVirtue;
    } else if (this.state.perkType === "flaw") {
      storePerk = this.props.storeFlaw;
      deletePerk = this.props.deleteFlaw;
    }
 
    if (childData !== null) {
      perk.special_one = childData.special_one;
      perk.special_two = childData.special_two;
    }

    // Checks if the virtue is already "checked," and if it
    // it is, the virtue will be deleted rather than added
    if (checkBox) {
      storePerk(perk);
    } else {
      deletePerk(perk);
    }
  }

  validation(perk) {
    const { currentCharacter } = this.state;
    if (currentCharacter !== null && flaw !== undefined) {

      // Character validations
      if (currentCharacter.character_type === "grog") {
        if (flaw.major === true ||
          flaw.name === "The Gift"
        ) {
          return "disabled";
        }

      } else if (currentCharacter.character_type === "npc") {
        if (flaw.name === "The Gift" 
        ) {
          return "disabled";
        }

      } else if (currentCharacter.character_type === "companion") {
        if (flaw.name === "The Gift"
        ) {
          return "disabled";
        }

      } else if (currentCharacter.character_type === "mage") {

        if (flaw.name === "Wealthy") {
          return "disabled";
        }
      }
    }

    if (flaw.name === "The Gift") {
      return "disabled";
    }

    // Conditional validations
    if (this.props.currentVirtues.wealthy === true) {
      if (virtue.name === "Custos" ||
        virtue.name === "Covenfolk"
      ) {
        return "disabled";
      }

    } else if (this.props.currentFlaws.poor === true) {
      if (virtue.name === "Wealthy" ||
        virtue.name === "Custos" ||
        virtue.name === "Covenfolk"
      ) {
        return "disabled";
      }

    } else if (this.props.currentVirtues.custos === true) {
      if (virtue.name === "Wealthy") {
        return "disabled";
      }

    } else if (this.props.currentVirtues.covenfolk === true) {
      if (virtue.name === "Wealthy") {
        return "disabled";
      }

    } else if (this.props.currentVirtues["Giant Blood"]=== true) {
      if (virtue.name === "Large") {
        return "disabled";
      }

    } else if (this.props.currentVirtues["Large"] === true) {
      if (virtue.name === "Giant Blood") {
        return "disabled";
      }

    } else if (this.props.currentFlaws.small_frame === true) {
      if (virtue.name === "Large" ||
        virtue.name === "Giant Blood") {
        return "disabled";
      }

    } else if (this.props.currentFlaws.dwarf === true) {
      if (virtue.name === "Large" ||
      virtue.name === "Giant Blood") {
        return "disabled";
      }
    }

    // Necessary validations
    // If have "Diedne Magic" need to have "Dark Secret"

  }

  establishPerks() {
    // TODO: Don't remember why this is here, remove once everything is working?
    // this.props.storeFlaws(this.state.currentCharacter.flaws)

    let character_type = this.state.currentCharacter.character_type;
    // TODO: Look up the actual flaw descriptions, currently it is
    // just a dupe of the (also incorrect) virtue texts
    let universalPerkText;
    let magePerkText;
    let grogPerkText;
    let companionPerkText;
    let otherPerkText;
    if (this.state.perkType === "virtue") {
      // TODO: Actual text, currently it's mostly placeholder
      universalPerkText = "Most virtues cost a number of virtue points to obtain. Major virtues cost 3, while minor virtues cost 1. "
      magePerkText = "Mages get the special virtue 'The Gift' for free, and MUST take X, Y, or Z";
      grogPerkText = "Grogs cannot take major virtues, and are limited to X Y OR Z";
      companionPerkText = "Companions are things that can be created";
      otherPerkText = "There are several that are free and can be taken with no penalty."
    } else if (this.state.perkType === "flaw") {
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
        let grogFlawText = "Grogs cannot take major virtues, and are limited to X Y OR Z";
        this.setState({perkPointText: universalPerkText + grogPerkText});
        break;
      case "companion":
        let companionFlawText = "Companions are things that can be created";
        this.setState({perkPointText: universalPerkText + companionPerkText});
        break;
      case "other":
        let otherFlawText = "There are several that are free and can be taken with no penalty."
        this.setState({perkPointText: universalPerkText + otherPerkText});
        break;
    }
  }

  handleShow(section) {
    // removes the section from view if it already exist
    let shownSections = [...this.state.show];
    if (shownSections.includes(section)) {
      let sectionIndex = shownSections.indexOf(section);
      let newSections = shownSections.slice(0, sectionIndex).concat(shownSections.slice(sectionIndex + 1));
      this.setState({ show: newSections });
    } else {
      shownSections.push(section);
      this.setState({ show: shownSections });
    }

  }

  render () {

    const { currentCharacter } = this.state;

    let generalFlaws;
    let supernaturalFlaws;
    let personalityFlaws;
    let storyFlaws;
    let hermeticFlaws;
    let socialStatusFlaws;

    if (this.state.flaws !== null) {
      generalFlaws = this.state.flaws.filter( e => e.flaw_type === "General");
      supernaturalFlaws = this.state.flaws.filter( e => e.flaw_type === "Supernatural");
      personalityFlaws = this.state.flaws.filter( e => e.flaw_type === "Personality");
      storyFlaws = this.state.flaws.filter(e => e.flaw_type === "Story");
      hermeticFlaws = this.state.flaws.filter(e => e.flaw_type === "Hermetic");
      socialStatusFlaws = this.state.flaws.filter(e => e.flaw_type === "Social Status");
    }

    return (
      <div>
        {/* <img src="" title={flawPointText}></img> */}
        <p title={this.state.flawPointText}>Remaining Flaw Points Required: {this.state.flawPoints - this.state.currentFlawPoints}</p>
        {/* TODO: Flaw Points Max needs some math */}
        <p title={this.state.flawPointText}>Flaw Points Maximum Available: {this.state.flawPoints - this.state.currentFlawPoints}</p>
        <div>
          <span onClick={this.props.handleSubmit} className="fake-url">Next</span>
        </div>

        <Link to={`/character/new`}>
          <span className="fake-url">Back</span>
        </Link>

        <br></br>
        <p>Flaws 222:</p>
        <hr></hr>

        <p>General:</p>
        <span onClick={() => this.handleShow("general")}>Show</span>
        <hr></hr>
        { this.state.show.includes("general") ? (
          <div className="create-flaws-parent">
            <div className="major"><p>Major Flaws:</p>
              {generalFlaws === undefined ? '' : 
                generalFlaws.filter( e => e.major === true).map( flaw => 
                  <div id={flaw.id} className={ `create-flaw-hover ${this.validation(flaw)}` } key={flaw.id}>
                    <UniquePerkContainer perk={flaw} validate={this.validation} handleClick={this.handleFlaw} />
                    <hr></hr>
                  </div>
              )}
            </div>

            <div className="minor"><p>Minor Flaws:</p>
              {generalFlaws === undefined ? '' :
                generalFlaws.filter( e => e.major === false).map( flaw => 
                  <div id={flaw.id} className={ `create-flaw-hover ${this.validation(flaw)}` } key={flaw.id}>
                    <UniquePerkContainer perk={flaw} validate={this.validation} handleClick={this.handleFlaw} />
                    <hr></hr>
                  </div>
              )}
            </div>

            <div className="free"><p>Free Flaws:</p>
              {generalFlaws === undefined ? '' :
                generalFlaws.filter( e => e.free === true).map( flaw => 
                  <div id={flaw.id} className={ `create-flaw-hover ${this.validation(flaw)}` } key={flaw.id}>
                    <UniquePerkContainer perk={flaw} validate={this.validation} handleClick={this.handleFlaw} />
                    <hr></hr>
                  </div>
              )}
            </div>
          </div>
        ) : (
          null
        )}

      </div>
    )
  }
};

export default CharacterCreatePerks;