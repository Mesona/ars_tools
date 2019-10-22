import React from 'react';
import UniqueFlawContainer from './create_flaw_unique_container';
import { Link } from 'react-router-dom';

// TODO: Create template to reduce redundancy in 
// CreateFlaws and CreateVirtues
class CharacterCreateFlaws extends React.Component {
 constructor(props) {
   super(props);

   this.state = {
    currentCharacter: null,
    virtues: null,
    flaws: null,
    virtuePoints: 0,
    currentVirtuePoints: 0,
    currentFlawPoints: 0,
    flawPoints: 0,
    minorFlaws: 0,
    currentVirtues: {},
    currentFlaws: {},
    flawPointText: "",
    show: [],
   };

   this.handleSubmit = this.handleSubmit.bind(this);
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
    ).then(this.establishFlaws);

    // this.props.requestAllVirtues()
    //   .then((response) => this.setState({
    //     virtues: response.virtues,
    // }));

    this.props.requestAllFlaws()
      .then((response) => this.setState({
        flaws: response.flaws,
    }));

    this.props.requestAllAbilities();

  }

 handleSubmit(e) {
    e.preventDefault();
    this.props.history.push(`/characters/new/flaws/${currentCharacter.id}`);
    // const currentCharacter = Object.assign({}, this.state);
    // this.props.createCharacter(currentCharacter)
      // .then((response) => this.props.history.push(`/character/new/virtues/${response.character.id}`));
      // .then((response) => this.props.history.push(`/test/${response.character.id}`));
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleFlaw(checkBox, flaw, childData = null) {
 
    if (childData !== null) {
      flaw.special_one = childData.special_one;
      flaw.special_two = childData.special_two;
    }

    // Checks if the virtue is already "checked," and if it
    // it is, the virtue will be deleted rather than added
    if (checkBox) {
      this.props.storeFlaw(flaw);
    } else {
      this.props.deleteFlaw(flaw);
    }
  }

  validation(flaw) {
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

  establishFlaws() {
    this.props.storeFlaws(this.state.currentCharacter.virtues)

    let character_type = this.state.currentCharacter.character_type;
    // TODO: Look up the actual flaw descriptions, currently it is
    // just a dupe of the (also incorrect) virtue texts
    let universalFlawText = "Most virtues cost a number of virtue points to obtain. Major virtues cost 3, while minor virtues cost 1. "
    switch (character_type) {
      case "mage":
        let mageFlawText = "Mages get the special virtue 'The Gift' for free, and MUST take X, Y, or Z";
        this.setState({flawPointText: universalFlawText + mageFlawText});
        break;
      case "grog":
        let grogFlawText = "Grogs cannot take major virtues, and are limited to X Y OR Z";
        this.setState({flawPointText: universalFlawText + grogFlawText});
        break;
      case "companion":
        let companionFlawText = "Companions are things that can be created";
        this.setState({flawPointText: universalFlawText + companionFlawText});
        break;
      case "other":
        let otherFlawText = "There are several that are free and can be taken with no penalty."
        this.setState({flawPointText: universalFlawText + otherFlawText});
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
          <span onClick={this.handleSubmit} className="fake-url">Next</span>
        </div>

        <Link to={`/character/new`}>
          <span className="fake-url">Back</span>
        </Link>

        <br></br>
        <p>Flaws:</p>
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
                    <UniqueFlawContainer flaw={flaw} validateFlaw={this.validation} handleClick={this.handleFlaw} />
                    <hr></hr>
                  </div>
              )}
            </div>

            <div className="minor"><p>Minor Flaws:</p>
              {generalFlaws === undefined ? '' :
                generalFlaws.filter( e => e.major === false).map( flaw => 
                  <div id={flaw.id} className={ `create-flaw-hover ${this.validation(flaw)}` } key={flaw.id}>
                    <UniqueFlawContainer flaw={flaw} validateFlaw={this.validation} handleClick={this.handleFlaw} />
                    <hr></hr>
                  </div>
              )}
            </div>

            <div className="free"><p>Free Flaws:</p>
              {generalFlaws === undefined ? '' :
                generalFlaws.filter( e => e.free === true).map( flaw => 
                  <div id={flaw.id} className={ `create-flaw-hover ${this.validation(flaw)}` } key={flaw.id}>
                    <UniqueFlawContainer flaw={flaw} validateFlaw={this.validation} handleClick={this.handleFlaw} />
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

export default CharacterCreateFlaws;