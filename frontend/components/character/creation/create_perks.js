import React from 'react';
import UniquePerkContainer from './create_unique_perk_container';
import { Link } from 'react-router-dom';

class CharacterCreatePerks extends React.Component {
 constructor(props) {
   super(props);

   this.state = {
    virtuePoints: 0,
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
   this.calculateVirtuePoints = this.calculateVirtuePoints.bind(this);
   this.calculateFlawPoints = this.calculateFlawPoints.bind(this);
 } 

  componentDidMount() {
    let { currentCharacter } = this.props;

    if (currentCharacter) {
      this.setState({
        currentVirtues: currentCharacter.virtues,
        currentFlaws: currentCharacter.flaws,
      });
    }

    this.establishPerks();

    let allClassifications = this.props.classifications;
    this.setState({ show: allClassifications });

    this.props.requestAllAbilities();
  }

  componentDidUpdate(prevProps) {
    // Necessary to automatically expand every "Perk" field
    if (prevProps.classifications !== this.props.classifications) {
      this.showAll();
    }

    if (prevProps.currentVirtues !== this.props.currentVirtues) {
      this.calculateVirtuePoints();
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
    
    // Virtue validations
    if (this.props.perkType === "virtue") {

      // Character type validations
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
      
      // These are required for Mages, and as thus, are enabled with no option to disable
      if (perk.name === "The Gift" || perk.name == "Hermetic Magus") {
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
    // If you take inoffensive to animals hermetic, the general also gets applied (but doesn't add 2 virtues to virtue score)

    } else if (this.props.perkType === "flaw") {

      // Character validations
      // Conditional validations

    }
  }

  establishPerks() {
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

  // TODO: Templatize calculateVirtuePoints and calculateFlawPoints
  calculateVirtuePoints() {
    let majorVirtues = 0;
    let minorVirtues = 0;
    if (this.props.currentVirtues !== undefined ) {
      let currentVirtues = this.props.currentVirtues;
      Object.keys(currentVirtues).forEach( virtueIndex => {
        let virtue = currentVirtues[virtueIndex];
        if (virtue.free === false) {
          if (virtue.major === true) {
            majorVirtues++;
          } else if (virtue.free === false) {
            minorVirtues++;
          }

        }
      });

      let virtuePoints = (majorVirtues * 3) + minorVirtues;
      this.setState({ virtuePoints: virtuePoints });
    }

  }

  calculateFlawPoints() {
    let majorFlaws = 0;
    let minorFlaws = 0;
    if (this.props.currentFlaws !== undefined ) {
      let currentFlaws = this.props.currentFlaws;
      Object.keys(currentFlaws).forEach( flawIndex => {
        let flaw = currentFlaws[flawIndex];
        if (flaw.free === false) {
          if (flaw.major === true) {
            majorFlaws++;
          } else if (flaw.free === false) {
            minorFlaws++;
          }

        }
      });

      let flawPoints = (majorFlaws * 3) + minorFlaws;
      this.setState({ flawPoints: flawPoints });
    }


  }

  render () {
    if (this.props.perks === undefined) { 
      return (
        <div>
          Loading . . .
        </div>
      )}
    else { 
    
    return (
      <div>
        <p>
          Total Virtue Point Accumulation:{this.state.virtuePoints}
        </p>
        <p>
          Remaining Flaw Points Required:
          {this.state.virtuePoints - this.state.flawPoints}
        </p>
        {/* TODO: Flaw Points Max needs some math */}
        {/* TODO: Hover question marks that explain the point distribution */}
        <div>
          <span onClick={this.props.handleSubmit} className="fake-url">
            Next
          </span>
        </div>

        <Link to={`/character/new`}>
          <span className="fake-url">Back</span>
        </Link>

        <br></br>
        <hr></hr>
        {this.props.classifications.map(classification => (
          <React.Fragment key={classification}>
            <p>{classification}</p>
            <span onClick={() => this.handleShow(classification)}>
              Show/Hide
            </span>
            <hr></hr>
            <div className="create-perks-parent">
              {this.state.show.includes(classification) ? (
                <>
                  <div className="major">
                    <p onClick={() => this.test("major", classification)}>
                      Major {this.props.perkType}
                    </p>
                    {this.props.perks
                      .filter(
                        perks =>
                          (perks.virtue_type === undefined
                            ? perks.flaw_type === classification
                            : perks.virtue_type === classification) &&
                          perks.major === true
                      )
                      .map(perk => (
                        <div
                          id={perk.id}
                          className={`create-perk-hover ${this.validation(
                            perk
                          )}`}
                          key={perk.id}
                        >
                          <UniquePerkContainer
                            perk={perk}
                            validate={this.validation}
                            handleClick={this.handlePerk}
                          />
                          <hr></hr>
                        </div>
                      ))}
                  </div>

                  <div className="minor">
                    <p>Minor {this.props.perkType}</p>
                    {this.props.perks
                      .filter(
                        perks =>
                          (perks.virtue_type === undefined
                            ? perks.flaw_type === classification
                            : perks.virtue_type === classification) &&
                          perks.major === false &&
                          perks.free === false
                      )
                      .map(perk => (
                        <div
                          id={perk.id}
                          className={`create-perk-hover ${this.validation(
                            perk
                          )}`}
                          key={perk.id}
                        >
                          <UniquePerkContainer
                            perk={perk}
                            validate={this.validation}
                            handleClick={this.handlePerk}
                          />
                          <hr></hr>
                        </div>
                      ))}
                  </div>

                  <div className="free">
                    <p>Free {this.props.perkType}</p>
                    {this.props.perks
                      .filter(
                        perks =>
                          (perks.virtue_type === undefined
                            ? perks.flaw_type === classification
                            : perks.virtue_type === classification) &&
                          perks.free === true
                      )
                      .map(perk => (
                        <div
                          id={perk.id}
                          className={`create-perk-hover ${this.validation(
                            perk
                          )}`}
                          key={perk.id}
                        >
                          <UniquePerkContainer
                            perk={perk}
                            validate={this.validation}
                            handleClick={this.handlePerk}
                          />
                          <hr></hr>
                        </div>
                      ))}
                  </div>
                </>
              ) : null}
            </div>
          </React.Fragment>
        ))}
      </div>
    );
    }
  }
};

export default CharacterCreatePerks;