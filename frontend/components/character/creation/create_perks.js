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
      perks: [],
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
    this.disablePerks = this.disablePerks.bind(this);
    this.disablePerkType = this.disablePerkType.bind(this);
    this.initialPerkStateUpdate = this.initialPerkStateUpdate.bind(this);
    this.generatePerkFields = this.generatePerkFields.bind(this);
  } 

  componentDidMount() {
    let { currentCharacter } = this.props;

    // The perks check is just to make sure this doesn't run multiple times
    if (currentCharacter) {

      this.setState({
        currentVirtues: currentCharacter.virtues,
        currentFlaws: currentCharacter.flaws,
      }, function () {
        this.generatePerkFields();
      });

      this.establishPerks();

      let allClassifications = this.props.classifications;
      this.setState({ show: allClassifications });

      this.props.requestAllAbilities();
    }
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

  disablePerks() {
    const { perks } = this.state;

    let perk;
    let passedPerks = [...arguments];
    let undo = passedPerks.shift();

    for (let i = 0; i < passedPerks.length; i++) {
      try {
        perk = perks.find( perk => perk.name === passedPerks[i]);
  
        if (undo === false) {
          perk.disabled = "disabled";
          perk.disabled_count++;
        } else {
          perk.disabled_count--;
          if (perk.disabled_count === 0) {
            perk.disabled = false;
          }
        }
  
        perks[perk.idx] = perk;
      }
      catch(TypeError) {
        // We don't want this to error out when it tried to load flaws on the
        // virtue page, or virtues on the flaws page
      }
    }

    this.setState({ perks: perks });
  }

  disablePerkType(field, value, perk) {
    const { perks } = this.state;

    if (perk[field] === value) {
      perk.disabled = "disabled";
      perks[perk.idx] = perk;
      this.setState({ perks: perks });
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
      this.validation(perk)
    } else {
      deletePerk(perk);
      this.validation(perk, true)
    }
  }

  initialPerkStateUpdate() {
    const { currentCharacter, currentPerks } = this.props;
    console.log('here')

    // Character type validations, always disabled
    if (currentCharacter.character_type === "grog") {
      this.disablePerks("The Gift",
                       "Temporal Influence");

      this.disablePerkType("major", true, perk);

    } else if (currentCharacter.character_type === "npc") {
      this.disablePerks("TheGift");

    } else if (currentCharacter.character_type === "companion") {
      this.disablePerks("TheGift");

    } else if (currentCharacter.character_type === "mage") {
      console.log('and here')
      this.disablePerks("The Gift",
                       "Hermetic Magus",
                       "Covenfolk",
                       "Craftsman",
                       "Wanderer",
                       "Merchant",
                       "Peasant");
    }

    // Perks disabled upon load based on already established Perks
    for (let i = 0; i < currentPerks.length; i++) {
      this.validation(currentPerks[i]);
    }
  }

  generatePerkFields() {
    let local_perks = this.props.perks;

    for (let i = 0; i < local_perks.length; i++) {
      local_perks[i].disabled = false;
      // Included array idx to speed up lookup
      local_perks[i].idx = i;
      local_perks[i].disabled_count = 0;
      if (this.props.perkType === "virtue") {
        local_perks[i].perk_type = local_perks[i].virtue_type;
      } else {
        local_perks[i].perk_type = local_perks[i].flaw_type;
      }
    }

    this.setState({ perks: local_perks }, function () {
      this.initialPerkStateUpdate();
    });
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

    } else if (perk.name === "Small Frame") {
      this.disablePerks(undo, "Large", "Giant Blood", "Dwarf");

    } else if (perk.name === "Dwarf") {
      this.disablePerks(undo, "Large", "Giant Blood", "Small Frame");

    }

    // Necessary validations
    // If have "Diedne Magic" need to have "Dark Secret"
    // If you take inoffensive to animals hermetic, the general also gets applied (but doesn't add 2 virtues to virtue score)
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
    })
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
    if (this.props.currentCharacter === undefined || this.props.perks === undefined) { 
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
                      {this.state.perks
                        .filter(
                          // perks =>
                          //   (perks.virtue_type === undefined
                          //     ? perks.flaw_type === classification
                          //     : perks.virtue_type === classification) &&
                          //   perks.major === true
                          // )
                          perks => (
                            perks.perk_type === classification &&
                            perks.major === true
                          )
                        )
                        .map(perk => (
                          <div
                            id={perk.id}
                            className={`create-perk-hover ${perk.disabled}`}
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
                            className={`create-perk-hover ${perk.disabled}`}
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
                            className={`create-perk-hover ${perk.disabled}`}
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