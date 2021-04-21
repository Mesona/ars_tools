import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';

import { requestAllVirtues } from '../../../actions/virtue_actions';
import { requestAllFlaws } from '../../../actions/flaw_actions';
import { storeVirtue, deleteVirtue, storeFlaw, deleteFlaw } from '../../../actions/create_virtues_and_flaws_actions';
import { requestAllAbilities } from '../../../actions/ability_actions';
import CharacterCreateInitial from './create_initial';

const mapStateToProps = (state) => ({
  currentCharacter: state.entities.characters.currentCharacter,
});

const mapDispatchToProps = dispatch => ({
  requestAllVirtues: () => dispatch(requestAllVirtues()),
  requestAllFlaws: () => dispatch(requestAllFlaws()),
  storeVirtue: (virtue) => dispatch(storeVirtue(virtue)),
  deleteVirtue: (virtue) => dispatch(deleteVirtue(virtue)),
  storeFlaw: (flaw) => dispatch(storeFlaw(flaw)),
  deleteFlaw: (flaw) => dispatch(deleteFlaw(flaw)),
  requestAllAbilities: () => dispatch(requestAllAbilities()),
});


import React from 'react';
import UniquePerkContainer from './create_unique_perk_container';
import { Link } from 'react-router-dom';
import merge from 'lodash/merge';

class CharacterCreatePerks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCharacter: this.props.currentCharacter,
      perks: this.props.perks,
      show: this.props.classifications,
    };

    this.generatePerkFields = this.generatePerkFields.bind(this);
    this.generateInitialStates = this.generateInitialStates.bind(this);
    this.initialPerkStateUpdate = this.initialPerkStateUpdate.bind(this);
    this.disablePerks = this.disablePerks.bind(this);
    this.disablePerkType = this.disablePerkType.bind(this);
    this.establishPerkHelperText = this.establishPerkHelperText.bind(this);

    // this.update = this.update.bind(this);
    this.generateArray = this.generateArray.bind(this)
    this.handlePerk = this.handlePerk.bind(this);
    this.validation = this.validation.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.test = this.test.bind(this);
    this.calculatePerkPoints = this.calculatePerkPoints.bind(this);
    this.updateDisabledTypes = this.updateDisabledTypes.bind(this);
    this.classificationRender = this.classificationRender.bind(this);
    this.perkColumnRender = this.perkColumnRender.bind(this);
    this.perkRender = this.perkRender.bind(this);
    this.perksRender = this.perksRender.bind(this);
  } 

  componentDidMount() {
    console.log("CREATE_PERKS PROPS:", this.props)
    console.log("CREATE PERKS STATE:", this.state)
    // TODO: Enable ability to resume an incomplete character creation
    // In case someone loads the virtues page on an incomplete character
    // that got through initial generation but never finalized
    // if (this.props.currentCharacter === undefined) {
    //   this.props.requestCharacter(this.props.match.params.characterId)
    //   .then( response => this.setState({  currentCharacter: response.character,
    //                                       currentVirtues: response.character.virtues,
    //                                       currentFlaws: response.character.flaws,
    //                                     }, function () {
    //                                       this.props.requestAllAbilities();
    //                                       this.establishPerkHelperText();
    //                                       // this.generatePerkFields();
    //                                     }));
    // }
    this.generateInitialStates();
    this.generatePerkFields();
    this.establishPerkHelperText();
  }

  perksRender(perks) {
    console.log("PERKS:", perks);
    return perks.map((perk) => {
      if (perk !== undefined) {
        return (
          <div
            id={perk.id}
            className={`create-perk-hover ${perk.disabled}`}
            key={perk.id}
          >
            Name: {perk.name}
          </div>
        );
      }
    })
  }

  perkRender(perk) {
    // FIXME: Why doesn't this render?
    return (
      <div>
        HERE:
        Name: {perk.name}
      </div>
    );
  }

  perkColumnRender(perks) {
    let majorPerks = Object.values(perks).filter((perk) => perk.major === true);
    let minorPerks = Object.values(perks).filter((perk) => perk.major === false && perk.free === false);
    let freePerks = Object.values(perks).filter((perk) => perk.major === false && perk.free === true);
    majorPerks = this.perksRender(majorPerks);
    minorPerks = this.perksRender(minorPerks);
    freePerks = this.perksRender(freePerks);
    return (
      <div key="column" className="create-perks-parent">
        <div className="major">
          MAJOR
          {majorPerks}
          {/* {this.perksRender(majorPerks)} */}
          {/* {majorPerks.map((perk) => {
            this.perkRender(perk)
          })} */}
        </div>

        <div className="minor">
          MINOR
          {minorPerks}
          {/* {this.perksRender(minorPerks)} */}
          {/* {minorPerks.map((perk) => {
            this.perkRender(perk)
          })} */}
        </div>

        <div className="free">
          FREE
          {freePerks}
          {/* {this.perksRender(freePerks)} */}
          {/* {freePerks.map((perk) => {
            this.perkRender(perk)
          })} */}
        </div>
        <br></br>
      </div>
    )
  };

  classificationRender(classifications) {
    // thesePerks = Object.values(this.state.perks).filter((perk) => perk.perk_type === classification);
    // renderedTypes = this.perkColumnRender(thesePerks);
    return classifications.map((classification) => {
      let thesePerks = Object.values(this.state.perks).filter((perk) => perk.perk_type === classification);
      console.log("CLASSIFICATION:", classification);
      return (
        <div key={classification}>
          <p>{classification}</p>
          <span onClick={() => this.handleShow(classification)}>
            Show/Hide
          </span>
          <hr></hr>
          {this.perkColumnRender(thesePerks)}
        </div>
      )
    })
  };

  generateArray(len) {
    var arr = new Array(len);
    for (var i=0; i<len; i++) {
      arr[i] = i + i;
    }
    return arr;
  }

  generateInitialStates() {
    let currentCharacter = this.state.currentCharacter;
    let perks = Object.assign({}, currentCharacter.virtues, currentCharacter.flaws);
    let minorVirtues = 0;
    let minorFlaws = 0;
    console.log("PERKS:", perks)
    for (let i = 0; i < Object.keys(perks).length; i++) {
      let perkIndex = Object.keys(perks)[i];
      let thisPerk = perks[perkIndex]
      if (thisPerk.major === false) {
        if (thisPerk.virute_type) {
          minorVirtues += 1;
        } else {
          minorFlaws += 1;
        }
      }
    }

    let flawPoints = Object.keys(currentCharacter.flaws).length - minorFlaws;  // # of major flaws
    flawPoints = (flawPoints * 3) + minorFlaws;
    let virtuePoints = Object.keys(currentCharacter.virtues).length - minorVirtues;
    virtuePoints = (virtuePoints * 3) + minorVirtues;

    this.setState({
      "minorFlaws": minorFlaws,
      "minorVirtues": minorVirtues,
      "flawPoints": flawPoints,
      "virtuePoints": virtuePoints,
      "perkPointText": "",
    }, function () {
      this.initialPerkStateUpdate();
    });
  }

  // componentDidUpdate(prevProps) {
  //   // Best way I found to enforce synchronise calue updating
  //   if (prevProps.perks !== this.props.perks) {
  //     this.calculatePerkPoints();
  //   }
  // }

  generatePerkFields() {
    let perks = this.state.perks;
    console.log("GENERATE PERKS:", perks)

    for (let i = 0; i < perks.length; i++) {
      perks[i].disabled = false;
      // Included array idx to speed up lookup
      perks[i].idx = i;
      perks[i].disabled_count = 0;
      if (this.props.perkType === "virtue") {
        perks[i].perk_type = perks[i].perk_type;
      } else {
        perks[i].perk_type = perks[i].perk_type;
      }
    }

    this.setState({ perks: perks }, function () {
      this.initialPerkStateUpdate();
    });
  }

  initialPerkStateUpdate() {
    const { currentCharacter } = this.state; 
    const { perkType } = this.props;
    let currentPerks = {};
    if (perkType === "virtues") {
      currentPerks = currentCharacter.virtues;
    } else if (perkType === "flaws") {
      currentPerks = currentCharacter.flaws;
    }

    // Character type validations, always disabled
    if (currentCharacter.character_type === "grog") {
      this.disablePerks(false,
                        "The Gift",
                        "Temporal Influence");

      this.disablePerkType("major", true);

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

    // Perks disabled upon load based on already established Perks
    for (let i = 0; i < currentPerks.length; i++) {
      let currentPerkIdx = Object.keys(currentPerks)[i];
      let currentPerk = currentPerks[currentPerkIdx];
      this.validation(currentPerk);
    }

    this.calculatePerkPoints();
    // if (this.props.currentVirtuesAndFlaws !== undefined) {
    //   this.calculatePerkPoints();
    // }
  }

  disablePerks() {
    const { perks } = this.state;

    let perk;
    let passedPerks = [...arguments];
    let undo = passedPerks.shift();

    for (let i = 0; i < passedPerks.length; i++) {
      try {
        perk = perks.find( thisPerk => thisPerk.name === passedPerks[i]);
  
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

  disablePerkType(field, value, undo="") {
    let { perks } = this.state;

    perks.forEach((perk) => {
      // TODO: Move somewhere for easy access, because this WILL be needed
      // Small snippet to create an object with a variable for its name
      // var this_perk = perk.name,
      //   obj = { [this_perk]: perk};
      if (perk[field] === value &&
          ! (perk.id in this.props.currentPerks)) {
            if (undo === "") {
              perk.disabled = "disabled";
              perk.disabled_count++;
              perks[perk.idx] = perk;
            } else {
              perk.disabled_count--;
              if (perk.disabled_count === 0) {
                perk.disabled = false;
              }
              perks[perk.idx] = perk;
            }
      }
    });
    this.setState({ perks: perks });
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

  // update(field) {
  //   return (e) => {
  //     this.setState({[field]: e.currentTarget.value});
  //   };
  // }

  handlePerk(checkBox, perk, childData = null) {
    let storePerk, deletePerk;
    let currentCharacter = this.state.currentCharacter;
    const { perkType } = this.props;
    console.log("CB:", checkBox)
    console.log("PERK:", perk)
    if (perkType === "virtue") {
      storePerk = this.props.storeVirtue;
      deletePerk = this.props.deleteVirtue;
    } else if (perkType === "flaw") {
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
      storePerk(perk)
      // if (perkType === "virtues") {
      //   currentCharacter.virtues = merge({}, currentCharacter.virtues, perk)
      // } else {
      //   currentCharacter.flaws = merge({}, currentCharacter.flaws, perk)
      // }
      this.setState({ currentCharacter });
      this.validation(perk);

    } else {
      console.log("SHOULD BE DELETED")
      console.log(perk)
      // if (perkType === "virtues") {
        // REMINDER:  REWORK CURRENT VIRTUES/FLAWS HERE
      //   currentCharacter.virtues.delete(perk)

      // }
      deletePerk(perk);
      this.validation(perk, true);
    }
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

  test(type, classification) {
    // let testVirtues = this.props.perks.filter(e => e.virtueType === classification)
    this.props.perks.filter( perk => (perk.perk_type === undefined ? perk.perk_type === classification : perk.perk_type === classification) && perk.major === true ).map( perk => {
    })
  }

  calculatePerkPoints() {
    // FIXME: visually lags one state behind
    let majorVirtues = 0;
    let minorVirtues = 0;
    let majorFlaws = 0;
    let minorFlaws = 0;
    let currentVirtues = this.state.currentCharacter.virutes;
    let currentFlaws = this.state.currentCharacter.flaws;
    let currentPerks = merge({}, currentFlaws, currentVirtues);

    Object.keys(currentPerks).forEach( perkIndex => {
      let perk = currentPerks[perkIndex];
      console.log("CURRENT PERKL", perk)
      if (perk.perk_type !== undefined) {
        if (perk.free === false) {
          if (perk.major === true) {
            majorVirtues++;
          } else if (perk.free === false) {
            minorVirtues++;
          }
        }
      } else if (perk.perk_type !== undefined) {
        if (perk.major === true) {
          majorFlaws++;
        } else if (perk.free === false) {
          minorFlaws++;
        }
      }
    });

    let totalVirtues = minorVirtues + (majorVirtues * 3);
    let totalFlaws = minorFlaws + (majorFlaws * 3);
    // console.log("CALC POINTS")
    // console.log(totalVirtues)
    // console.log(this.props.currentPerks)
    // console.log("CALC POINTS END")

    if (this.props.perkType === "virtue") {
      this.updateDisabledTypes(totalVirtues, "virtues");
    } else if (this.props.perkType === "flaw") {
      this.updateDisabledTypes(totalFlaws, "flaws");
    }
    this.setState({displayReady: true})
    // if (totalVirtues > 7) {
      // let virtuePoints = (majorVirtues * 3) + minorVirtues;
      // this.setState({ virtuePoints: totalVirtues }, () => {
      //   this.updateDisabledTypes(totalVirtues);
      // });
    // } else if (totalFlaws > 7) {
      // let flawPoints = (majorFlaws * 3) + minorFlaws;
      // this.setState({ flawPoints: totalFlaws }, () => {
      //   this.updateDisabledTypes(totalFlaws);
      // });
    // }
  }

  updateDisabledTypes(value, perkType) {
    console.log("U5")
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

  // if (this.props.currentCharacter === undefined) {
  //   <Route path="/characters/new/gen" component={CharacterCreateInitial} currentUser={this.props.currentUser}>
  //     {console.log("YO")}
  //   </Route>
  //   // this.props.history.push(`/characters/new/gen`);
  // }

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
        // <div>
        //   {console.log("ENTRY RETURN")}

        //   {this.props.classifications.map(classification => (
        //     <React.Fragment key={classification}>
        //       <p>{classification}</p>
        //       <span onClick={() => this.handleShow(classification)}>
        //         Show/Hide
        //       </span>
        //       <hr></hr>
        //       <div className="create-perks-parent">
        //         {this.state.show.includes(classification) ? (
        //           <>
        //             <div className="major">
        //               <p onClick={() => this.test("major", classification)}>
        //                 Major {this.props.perkType}
        //               </p>
        //               {this.props.perks
        //                 .filter(
        //                   perks => (
        //                     perks.perk_type === classification &&
        //                     perks.major === true
        //                   )
        //                 )
        //                 .map(perk => (
        //                   <>
        //                     {/* {console.log("PERK TEST:", `${perk.id}${perk.id}`)} */}
        //                     {this.generateArray(perk.creation_max).forEach((perkIdx) => {
        //                       <div
        //                         id={perk.id}
        //                         perkIdx={perkIdx}
        //                         className={`create-perk-hover ${perk.disabled}`}
        //                         key={`${perk.id}${perkIdx}`}
        //                       >
        //                         {/* {console.log("PERK:", `${perk}`)}
        //                         {console.log("PCM:", perk.creation_max)}
        //                         {console.log("PERK TEST:", `${perk.id}--${perkIdx}`)} */}
        //                         <UniquePerkContainer
        //                           perk={perk}
        //                           validate={this.validation}
        //                           handleClick={this.handlePerk}
        //                         />
        //                         <hr></hr>
        //                       </div>
        //                     })}
        //                   </>
        //                 ))}
        //             </div>

        //             <div className="minor">
        //               <p>Minor {this.props.perkType}</p>
        //               {this.props.perks
        //                 .filter(
        //                   perks =>
        //                     (perks.perk_type === undefined
        //                       ? perks.perk_type === classification
        //                       : perks.perk_type === classification) &&
        //                     perks.major === false &&
        //                     perks.free === false
        //                 )
        //                 .map(perk => (
        //                   <div
        //                     id={perk.id}
        //                     className={`create-perk-hover ${perk.disabled}`}
        //                     key={perk.id}
        //                   >
        //                     {/* {console.log("PERK:", `${perk}`)} */}
        //                     {console.log("PERK ID:", `${perk.id}`)}
        //                     <UniquePerkContainer
        //                       perk={perk}
        //                       validate={this.validation}
        //                       handleClick={this.handlePerk}
        //                     />
        //                     <hr></hr>
        //                   </div>
        //                 ))}
        //             </div>

        //             <div className="free">
        //               <p>Free {this.props.perkType}</p>
        //               {this.props.perks
        //                 .filter(
        //                   perks =>
        //                     (perks.perk_type === undefined
        //                       ? perks.perk_type === classification
        //                       : perks.perk_type === classification) &&
        //                     perks.free === true
        //                 )
        //                 .map(perk => (
        //                   <div
        //                     id={perk.id}
        //                     className={`create-perk-hover ${perk.disabled}`}
        //                     key={perk.id}
        //                   >
        //                     <UniquePerkContainer
        //                       perk={perk}
        //                       validate={this.validation}
        //                       handleClick={this.handlePerk}
        //                     />
        //                     <hr></hr>
        //                   </div>
        //                 ))}
        //             </div>
        //           </>
        //         ) : null}
        //       </div>
        //     </React.Fragment>
        //   ))}
        // </div>
      );
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterCreatePerks);