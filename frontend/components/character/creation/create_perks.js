import React from 'react';
import UniquePerkContainer from './create_unique_perk_container';
import { Link } from 'react-router-dom';

class CharacterCreatePerks extends React.Component {
 constructor(props) {
   super(props);

   this.state = {
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
   };

   this.update = this.update.bind(this);
   this.handlePerk = this.handlePerk.bind(this);
   this.validation = this.validation.bind(this);
   this.establishPerks = this.establishPerks.bind(this);
   this.handleShow = this.handleShow.bind(this);
   this.showAll = this.showAll.bind(this);
   this.test = this.test.bind(this);
 } 

  componentDidMount() {
    // this.props.requestCharacter(this.props.match.params.characterId)
    //   .then((response) => {
    //     this.setState({
    //       currentCharacter: {...response.character},
    //       currentVirtues: response.character.virtues,
    //       currentFlaws: response.character.flaws,
    //       virtuePoints: (response.character.character_type === "mage" ? 10 : 
    //         response.character.character_type === "companion" ? 10 : 3),
    //       // TODO: Fix flawPoints
    //       flawPoints: 10,
    //       }
    //     );
    //   }
    // ).then(this.establishPerks);
    let { currentCharacter } = this.props;

    this.setState({
      currentVirtues: currentCharacter.virtues,
      currentFlaws: currentCharacter.flaws,
    });

    this.establishPerks();

    let allClassifications = this.props.classifications;
    this.setState({ show: allClassifications });
    // this.showAll();

    this.props.requestAllAbilities();

    // this.props.requestCharacter(this.props.match.params.characterId);
  }

  componentDidUpdate(prevProps) {
    // Necessary to automatically expand every "Perk" field
    if (prevProps.classifications !== this.props.classifications) {
      this.showAll();
    }
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handlePerk(checkBox, perk, childData = null) {
    let storePerk, deletePerk;
    if (this.props.perkType === "virtue") {
      // TODO: Not sure if these need to be called
      storePerk = this.props.storeVirtue;
      deletePerk = this.props.deleteVirtue;
    } else if (this.props.perkType === "flaw") {
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
    const { currentCharacter } = this.props;
    
    // Character validations
    if (currentCharacter.character_type === "grog") {
      if (perk.major === true ||
        perk.name === "The Gift"
      ) {
        return "disabled";
      }

    } else if (currentCharacter.character_type === "npc") {
      if (perk.name === "The Gift" 
      ) {
        return "disabled";
      }

    } else if (currentCharacter.character_type === "companion") {
      if (perk.name === "The Gift"
      ) {
        return "disabled";
      }

    } else if (currentCharacter.character_type === "mage") {

      if (perk.name === "Wealthy") {
        return "disabled";
      }
    }

    if (perk.name === "The Gift") {
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
    // this.setPerkType();
    // TODO: Don't remember why this is here, remove once everything is working?
    // this.props.storeFlaws(this.state.currentCharacter.flaws)

    let character_type = this.props.currentCharacter.character_type;
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

  showAll() {
    this.setState({ show: this.props.classifications });
  }

  test(type, classification) {
    // let testVirtues = this.props.perks.filter(e => e.virtueType === classification)
    this.props.perks.filter( perk => (perk.virtue_type === undefined ? perk.flaw_type === classification : perk.virtue_type === classification) && perk.major === true ).map( perk => {
      console.log(perk)
      // console.log("WWWWWWWWW")
    })
    // console.log(testVirtues)
  }

  render () {
    if (this.props.perks === undefined) { 
      return (
        <div>
          stuff
        </div>
      )}
    else { 
    
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
          {this.props.classifications.map(classification => 
            <React.Fragment key={classification}>
              <p>{classification}</p>
              <span onClick={() => this.handleShow(classification)}>Show/Hide</span>
              <hr></hr>
                <div className="create-perks-parent">

                  <div className="major"><p onClick={() => this.test("major", classification)}>Major {this.props.perkType}</p>
                    {this.props.perks.filter( perks => (perks.virtue_type === undefined ? perks.flaw_type === classification : perks.virtue_type === classification) && perks.major === true ).map( perk => 
                      <div id={perk.id} className={ `create-perk-hover ${this.validation(perk)}` } key={perk.id}>
                        <UniquePerkContainer perk={perk} validate={this.validation} handleClick={this.handlePerk} />
                        <hr></hr>
                      </div>
                    )}
                  </div>

                  <div className="minor"><p>Minor {this.props.perkType}</p>
                    {this.props.perks.filter( perks => (perks.virtue_type === undefined ? perks.flaw_type === classification : perks.virtue_type === classification) && perks.major === false && perks.free === false).map( perk => 
                      <div id={perk.id} className={ `create-perk-hover ${this.validation(perk)}` } key={perk.id}>
                        <UniquePerkContainer perk={perk} validate={this.validation} handleClick={this.handlePerk} />
                        <hr></hr>
                      </div>
                    )}
                  </div>

                  <div className="free"><p>Free {this.props.perkType}</p>
                    {this.props.perks.filter( perks => (perks.virtue_type === undefined ? perks.flaw_type === classification : perks.virtue_type === classification) && perks.free === true).map( perk => 
                      <div id={perk.id} className={ `create-perk-hover ${this.validation(perk)}` } key={perk.id}>
                        <UniquePerkContainer perk={perk} validate={this.validation} handleClick={this.handlePerk} />
                        <hr></hr>
                      </div>
                    )}
                  </div>

                </div>
            </React.Fragment>
          )
        }
      </div>
    )
    }
  }
};

export default CharacterCreatePerks;