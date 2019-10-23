import React from 'react';
import UniquePerkContainer from './create_virtue_flaw_template_container';
import { Link } from 'react-router-dom';

class CharacterCreateVirtues extends React.Component {
 constructor(props) {
   super(props);

   this.state = {
    currentCharacter: null,
    virtues: null,
    flaws: null,
    virtuePoints: 0,
    currentVirtuePoints: 0,
    flawPoints: 0,
    minorVirtues: 0,
    currentVirtues: {},
    currentFlaws: {},
    virtuePointText: "",
    show: ["general", "hermetic", "special", "social", "supernatural"],
   };

   this.handleSubmit = this.handleSubmit.bind(this);
   this.update = this.update.bind(this);
   this.handleVirtue = this.handleVirtue.bind(this);
   this.validation = this.validation.bind(this);
   this.establishVirtues = this.establishVirtues.bind(this);
   this.handleShow = this.handleShow.bind(this);
 } 

 componentDidMount() {
      this.props.requestCharacter(this.props.characterId)
        .then((response) => {
          this.setState({
            currentCharacter: {...response.character},
            currentVirtues: response.character.virtues,
            virtuePoints: (response.character.character_type === "mage" ? 10 : 
              response.character.character_type === "companion" ? 10 : 3),
            }
          );
        }
    ).then(this.establishVirtues);

    this.props.requestAllVirtues()
      .then((response) => this.setState({
        virtues: response.virtues,
    }));

    this.props.requestAllFlaws()
      .then((response) => this.setState({
        flaws: response.flaws,
    }));

    this.props.requestAllAbilities();

  }

 handleSubmit(e) {
    e.preventDefault();
    this.props.history.push(`/characters/new/flaws/${this.state.currentCharacter.id}`);
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

  handleVirtue(checkBox, virtue, childData = null) {
 
    if (childData !== null) {
      virtue.special_one = childData.special_one;
      virtue.special_two = childData.special_two;
    }

    // Checks if the virtue is already "checked," and if it
    // it is, the virtue will be deleted rather than added
    if (checkBox) {
      this.props.storeVirtue(virtue);
    } else {
      this.props.deleteVirtue(virtue);
    }
  }

  validation(virtue) {
    const { currentCharacter } = this.state;
    if (currentCharacter !== null && virtue !== undefined) {

      // Character validations
      if (currentCharacter.character_type === "grog") {
        if (virtue.major === true ||
          virtue.name === "The Gift"
        ) {
          return "disabled";
        }

      } else if (currentCharacter.character_type === "npc") {
        if (virtue.name === "The Gift" 
        ) {
          return "disabled";
        }

      } else if (currentCharacter.character_type === "companion") {
        if (virtue.name === "The Gift"
        ) {
          return "disabled";
        }

      } else if (currentCharacter.character_type === "mage") {

        if (virtue.name === "Wealthy") {
          return "disabled";
        }
      }
    }

    if (virtue.name === "The Gift") {
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

  establishVirtues() {
    this.props.storeVirtues(this.state.currentCharacter.virtues)

    let character_type = this.state.currentCharacter.character_type;
    // TODO: Look up the actual virtue descriptions
    let universalVirtueText = "Most virtues cost a number of virtue points to obtain. Major virtues cost 3, while minor virtues cost 1. "
    switch (character_type) {
      case "mage":
        let mageVirtueText = "Mages get the special virtue 'The Gift' for free, and MUST take X, Y, or Z";
        this.setState({virtuePointText: universalVirtueText + mageVirtueText});
        break;
      case "grog":
        let grogVirtueText = "Grogs cannot take major virtues, and are limited to X Y OR Z";
        this.setState({virtuePointText: universalVirtueText + grogVirtueText});
        break;
      case "companion":
        let companionVirtueText = "Companions are things that can be created";
        this.setState({virtuePointText: universalVirtueText + companionVirtueText});
        break;
      case "other":
        let otherVirtueText = "There are several that are free and can be taken with no penalty."
        this.setState({virtuePointText: universalVirtueText + otherVirtueText});
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
    let generalVirtues;
    let hermeticVirtues;
    let specialVirtues;
    let supernaturalVirtues;
    let socialStatusVirtues;

    let grogCheck; 
    let validationCheck;

    if (this.state.virtues !== null) {
      specialVirtues = this.state.virtues.filter( e => e.virtue_type === "Special");
      generalVirtues = this.state.virtues.filter( e => e.virtue_type === "General");
      hermeticVirtues = this.state.virtues.filter( e => e.virtue_type === "Hermetic");
      supernaturalVirtues = this.state.virtues.filter( e => e.virtue_type === "Supernatural");
      socialStatusVirtues = this.state.virtues.filter(e => e.virtue_type === "Social Status");
    }

    return (
      <div>
        {/* <img src="" title={virtuePointText}></img> */}
        <p title={this.state.virtuePointText}>Remaining Virtue Points Allowed: {this.state.virtuePoints - this.state.currentVirtuePoints}</p>
        <div>
          <span onClick={this.handleSubmit} className="fake-url">Next</span>
        </div>

        <Link to={`/character/new`}>
          <span className="fake-url">Back</span>
        </Link>

        <br></br>
        <p>Virtues</p>
        <hr></hr>

        <p>Special:</p>
        <span onClick={() => this.handleShow("special")}>Show/Hide</span>
        <hr></hr>
        <div className="create-virtues-parent">
          { this.state.show.includes("special") ? (
            <div className="major">
              {specialVirtues === undefined ? '' : specialVirtues.map( virtue => 
                <div id={virtue.id} className={ `create-virtue-hover ${this.validation(virtue)}` } key={virtue.id}>
                  <UniquePerkContainer perk={virtue} validate={this.validation} handleClick={this.handleVirtue} />
                  <hr></hr>
                </div>
              )}
            </div>
          ) : (
            null
          )} 
        </div>

        <p>General:</p>
        <span onClick={() => this.handleShow("general")}>Show/Hide</span>
        <hr></hr>
        { this.state.show.includes("general") ? (
          <div className="create-virtues-parent">
            <div className="major"><p>Major Virtues:</p>
              {generalVirtues === undefined ? '' : 
                generalVirtues.filter( e => e.major === true).map( virtue => 
                  <div id={virtue.id} className={ `create-virtue-hover ${this.validation(virtue)}` } key={virtue.id}>
                    <UniquePerkContainer perk={virtue} validate={this.validation} handleClick={this.handleVirtue} />
                    <hr></hr>
                  </div>
              )}
            </div>

            <div className="minor"><p>Minor Virtues:</p>
              {generalVirtues === undefined ? '' :
                generalVirtues.filter( e => e.major === false).map( virtue => 
                  <div id={virtue.id} className={ `create-virtue-hover ${this.validation(virtue)}` } key={virtue.id}>
                    <UniquePerkContainer perk={virtue} validate={this.validation} handleClick={this.handleVirtue} />
                    <hr></hr>
                  </div>
              )}
            </div>

            <div className="free"><p>Free Virtues:</p>
              {generalVirtues === undefined ? '' :
                generalVirtues.filter( e => e.free === true).map( virtue => 
                  <div id={virtue.id} className={ `create-virtue-hover ${this.validation(virtue)}` } key={virtue.id}>
                    <UniquePerkContainer perk={virtue} validate={this.validation} handleClick={this.handleVirtue} />
                    <hr></hr>
                  </div>
              )}
            </div>
          </div>
        ) : (
          null
        )}

        <p>Hermetic:</p>
        <span onClick={() => this.handleShow("hermetic")}>Show/Hide</span>
        <hr></hr>
        { this.state.show.includes("hermetic") ? (
          <div className="create-virtues-parent">
            <div className="major"><p>Major Virtues:</p>
              {hermeticVirtues === undefined ? '' : 
                hermeticVirtues.filter( e => e.major === true).map( virtue => 
                  <div id={virtue.id} className={ `create-virtue-hover ${this.validation(virtue)}` } key={virtue.id}>
                    <UniquePerkContainer perk={virtue} validate={this.validation} handleClick={this.handleVirtue} />
                    <hr></hr>
                  </div>
              )}
            </div>

            <div className="minor"><p>Minor Virtues:</p>
              {hermeticVirtues === undefined ? '' :
                hermeticVirtues.filter( e => e.major === false).map( virtue => 
                  <div id={virtue.id} className={ `create-virtue-hover ${this.validation(virtue)}` } key={virtue.id}>
                    <UniquePerkContainer perk={virtue} validate={this.validation} handleClick={this.handleVirtue} />
                    <hr></hr>
                  </div>
              )}
            </div>

            <div className="free"><p>Free Virtues:</p>
              {hermeticVirtues === undefined ? '' :
                hermeticVirtues.filter( e => e.free === true).map( virtue => 
                  <div id={virtue.id} className={ `create-virtue-hover ${this.validation(virtue)}` } key={virtue.id}>
                    <UniquePerkContainer perk={virtue} validate={this.validation} handleClick={this.handleVirtue} />
                    <hr></hr>
                  </div>
              )}
            </div>
          </div>
        ) : (
          null
        )}

        {/* TODO: Discover why first virtue is always checked now */}
        <p>Supernatural:</p>
        <span onClick={() => this.handleShow("supernatural")}>Show/Hide</span>
        <hr></hr>
        { this.state.show.includes("supernatural") ? (
          <div className="create-virtues-parent">
            <div className="major"><p>Major Virtues:</p>
              {supernaturalVirtues === undefined ? '' : 
                supernaturalVirtues.filter( e => e.major === true).map( virtue => 
                  <div id={virtue.id} className={ `create-virtue-hover ${this.validation(virtue)}` } key={virtue.id}>
                    <UniquePerkContainer perk={virtue} validate={this.validation} handleClick={this.handleVirtue} />
                    <hr></hr>
                  </div>
              )}
            </div>

            <div className="minor"><p>Minor Virtues:</p>
              {supernaturalVirtues === undefined ? '' :
                supernaturalVirtues.filter( e => e.major === false).map( virtue => 
                  <div id={virtue.id} className={ `create-virtue-hover ${this.validation(virtue)}` } key={virtue.id}>
                    <UniquePerkContainer perk={virtue} validate={this.validation} handleClick={this.handleVirtue} />
                    <hr></hr>
                  </div>
              )}
            </div>

            <div className="free"><p>Free Virtues:</p>
              {supernaturalVirtues === undefined ? '' :
                supernaturalVirtues.filter( e => e.free === true).map( virtue => 
                  <div id={virtue.id} className={ `create-virtue-hover ${this.validation(virtue)}` } key={virtue.id}>
                    <UniquePerkContainer perk={virtue} validate={this.validation} handleClick={this.handleVirtue} />
                    <hr></hr>
                  </div>
              )}
            </div>
          </div>
        ) : (
          null
        )}

        <p>Social Status:</p>
        <span onClick={() => this.handleShow("social")}>Show/Hide</span>
        <hr></hr>
        { this.state.show.includes("social") ? (
          <div className="create-virtues-parent">
            <div className="major"><p>Major Virtues:</p>
              {socialStatusVirtues === undefined ? '' : 
                socialStatusVirtues.filter( e => e.major === true).map( virtue => 
                  <div id={virtue.id} className={ `create-virtue-hover ${this.validation(virtue)}` } key={virtue.id}>
                    <UniquePerkContainer perk={virtue} validate={this.validation} handleClick={this.handleVirtue} />
                    <hr></hr>
                  </div>
              )}
            </div>

            <div className="minor"><p>Minor Virtues:</p>
              {socialStatusVirtues === undefined ? '' :
                socialStatusVirtues.filter( e => e.major === false).map( virtue => 
                  <div id={virtue.id} className={ `create-virtue-hover ${this.validation(virtue)}` } key={virtue.id}>
                    <UniquePerkContainer perk={virtue} validate={this.validation} handleClick={this.handleVirtue} />
                    <hr></hr>
                  </div>
              )}
            </div>

            <div className="free"><p>Free Virtues:</p>
              {socialStatusVirtues === undefined ? '' :
                socialStatusVirtues.filter( e => e.free === true).map( virtue => 
                  <div id={virtue.id} className={ `create-virtue-hover ${this.validation(virtue)}` } key={virtue.id}>
                    <UniquePerkContainer perk={virtue} validate={this.validation} handleClick={this.handleVirtue} />
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

export default CharacterCreateVirtues;