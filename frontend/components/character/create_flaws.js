import React from 'react';
import CharacterCreateVirtue from './create_virtue';
import CharacterCreateFlaw from './create_flaw';
import UniversalVirtue from './create_virtue_universal';
import UniqueVirtue from './create_virtue_unique';


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
    virtuePointText: "alskdvlaskd",
   };

   this.handleSubmit = this.handleSubmit.bind(this);
   this.update = this.update.bind(this);
   this.handleVirtue = this.handleVirtue.bind(this);
  //  this.handleFlaw = this.handleFlaw.bind(this);
   this.validation = this.validation.bind(this);
   this.establishVirtues = this.establishVirtues.bind(this);
 } 

 componentDidMount() {
    // this.props.characterId === null  ? '' :
      this.props.requestCharacter(this.props.characterId)
        .then((response) => {
          this.setState({
            currentCharacter: {...response.character},
            virtuePoints: (response.character.character_type === "mage" ? 10 : 
              response.character.character_type === "companion" ? 10 : 3),
            },
            this.establishVirtues
          );
        }
    );

    this.props.requestAllVirtues()
      .then((response) => this.setState({
        virtues: response.virtues,
    }));

    this.props.requestAllFlaws()
      .then((response) => this.setState({
        flaws: response.flaws,
    }));
  }

 handleSubmit(e) {
    e.preventDefault();
    const currentCharacter = Object.assign({}, this.state);
    this.props.createCharacter(currentCharacter)
      // .then((response) => this.props.history.push(`/character/new/virtues/${response.character.id}`));
      .then((response) => this.props.history.push(`/test/${response.character.id}`));
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleVirtue(e, virtue) {
    // e.stopPropagation();
    e.preventDefault();
    let name = virtue.name;
    let id = virtue.id;
    let { currentVirtues } = this.state;
    if (currentVirtues[name] === id) {
      delete currentVirtues[name];
      this.setState({
        currentVirtues,
      });
      document.getElementById(virtue.id).style.background = "";
    } else {
      currentVirtues[name] = id;
      this.setState({
        currentVirtues,
      });
      document.getElementById(virtue.id).style.background = "purple";
    }

  }

  validation(virtue) {
    const { currentCharacter } = this.state;
    if (currentCharacter !== null) {

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

    // Conditional validations
    if (this.state.currentVirtues.wealthy === true) {
      if (virtue.name === "Poor" ||
        virtue.name === "Custos" ||
        virtue.name === "Covenfolk"
      ) {
        return "disabled";
      }

    } else if (this.state.currentFlaws.poor === true) {
      if (virtue.name === "Wealthy" ||
        virtue.name === "Custos" ||
        virtue.name === "Covenfolk"
      ) {
        return "disabled";
      }

    } else if (this.state.currentVirtues.custos === true) {
      if (virtue.name === "Wealthy" ||
        virtue.name === "Poor"
      ) {
        return "disabled";
      }

    } else if (this.state.currentVirtues.covenfolk === true) {
      if (virtue.name === "Wealthy" ||
        virtue.name === "Poor"
      ) {
        return false;
      }

    } else if (this.state.currentVirtues["Giant Blood"]=== true) {
      if (virtue.name === "Large" ||
        virtue.name === "Small Frame" ||
        virtue.name === "Dwarf"
      ) {
        return false;
      }

    } else if (this.state.currentVirtues["Large"] === true) {
      if (virtue.name === "Giant Blood" ||
        virtue.name === "Small Frame" ||
        virtue.name === "Dwarf"
      ) {
        return false;
      }

    } else if (this.state.currentFlaws.small_frame === true) {
      if (virtue.name === "Large" ||
        virtue.name === "Giant Blood" ||
        virtue.name === "Dwarf"
      ) {
        return false;
      }

    } else if (this.state.currentFlaws.dwarf === true) {
      if (virtue.name === "Large" ||
        virtue.name === "Small Frame" ||
        virtue.name === "Giant Blood"
      ) {
        return false;
      }
    }


    // Necessary validations
    // If have "Diedne Magic" need to have "Dark Secret"
  }

  establishVirtues() {
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

  render () {

    const { currentCharacter } = this.state;
    let generalVirtues;
    let hermeticVirtues;
    let specialVirtues;
    let supernaturalVirtues;
    let socialStatusVirtues;
    let generalFlaws;
    let supernaturalFlaws;
    let personalityFlaws;
    let storyFlaws;
    let hermeticFlaws;
    let socialStatusFlaws;

    let grogCheck; 
    let validationCheck;

    if (this.state.virtues !== null) {
      specialVirtues = this.state.virtues.filter( e => e.virtue_type === "Special");
      generalVirtues = this.state.virtues.filter( e => e.virtue_type === "General");
      hermeticVirtues = this.state.virtues.filter( e => e.virtue_type === "Hermetic");
      supernaturalVirtues = this.state.virtues.filter( e => e.virtue_type === "Supernatural");
      socialStatusVirtues = this.state.virtues.filter(e => e.virtue_type === "Social Status");
    }

    if (this.state.flaws !== null) {
      generalFlaws = this.state.flaws.filter( e => e.flaw_type === "General");
      supernaturalFlaws = this.state.flaws.filter( e => e.flaw_type === "Supernatural");
      personalityFlaws = this.state.flaws.filter( e => e.flaw_type === "Personality");
      storyFlaws = this.state.flaws.filter( e => e.flaw_type === "Story");
      hermeticFlaws = this.state.flaws.filter( e => e.flaw_type === "Hermetic");
      socialStatusFlaws = this.state.flaws.filter( e => e.flaw_type === "Social Status");
    }

    return (
      <div>
        {/* <img src="" title={virtuePointText}></img> */}
        <p title={this.state.virtuePointText}>Remaining Virtue Points Allowed: {this.state.virtuePoints - this.state.currentVirtuePoints}</p>
        <br></br>
        <p>Virtues</p>
        <hr></hr>

        <p>Special:</p>
        <hr></hr>
        <div className="create-virtues-parent">

          <div className="major">
            {specialVirtues === undefined ? '' : specialVirtues.map( virtue => 
              // <div className="create-virtue-hover" key={virtue.id} onClick={ () => this.handleVirtue(virtue)}>
              <div className="create-virtue-hover" key={virtue.id} onClick={ (e) => this.handleVirtue(e, virtue)}>
                  <label>
                    <input className="create-virtue-checkbox" type="checkbox" disabled={this.validation(virtue)} ></input>
                    { virtue.special === true ?
                      <div>
                        <UniversalVirtue virtue={virtue} />
                        <UniqueVirtue virtue={virtue} currentCharacter={currentCharacter} />
                      </div>
                      :
                      <UniversalVirtue virtue={virtue} />
                    }
                  </label>
              </div>
            )}
          </div>

        </div>

        <p>General:</p>
        <hr></hr>
        <div className="create-virtues-parent">
          <div className="major"><p>Major Virtues:</p>
            {generalVirtues === undefined ? '' : 
              generalVirtues.filter( e => e.major === true).map( virtue => 
                <div id={virtue.id} className={ `create-virtue-hover ${this.validation(virtue)}` } key={virtue.id} onClick={ (e) => this.handleVirtue(e, virtue)}>
                  <label>
                    <input className="create-virtue-checkbox" type="checkbox" disabled={this.validation(virtue)} ></input>
                    { virtue.special === true ?
                      <div>
                        <UniversalVirtue virtue={virtue} />
                        <UniqueVirtue virtue={virtue} currentCharacter={currentCharacter} />
                      </div>
                      :
                      <UniversalVirtue virtue={virtue} />
                    }
                    <hr></hr>
                  </label>
                </div>
            )}
          </div>

          <div className="minor"><p>Minor Virtues:</p>
            {generalVirtues === undefined ? '' :
              generalVirtues.filter( e => e.major === false).map( virtue => 
              <div id={virtue.id} className={ `create-virtue-hover ${this.validation(virtue)}` } key={virtue.id} onClick={ (e) => this.handleVirtue(e, virtue)}>
                <label>
                  <input className="create-virtue-checkbox" type="checkbox" disabled={this.validation(virtue)} ></input>
                  { virtue.special === true ?
                    <div>
                      <UniversalVirtue virtue={virtue} />
                      <UniqueVirtue virtue={virtue} currentCharacter={currentCharacter} />
                    </div>
                    :
                    <UniversalVirtue virtue={virtue} />
                  }
                  <hr></hr>
                </label>
              </div>
            )}
          </div>

          <div className="free"><p>Free Virtues:</p>
            {generalVirtues === undefined ? '' :
              generalVirtues.filter( e => e.free === true).map( virtue => 
              <div tabIndex={virtue.id} className={ `create-virtue-hover ${this.validation(virtue)}` } key={virtue.id} onClick={ (e) => this.handleVirtue(e, virtue)}>
                <label>
                  <input className="create-virtue-checkbox" type="checkbox" disabled={this.validation(virtue)} ></input>
                  { virtue.special === true ?
                    <div>
                      <UniversalVirtue virtue={virtue} />
                      <UniqueVirtue virtue={virtue} currentCharacter={currentCharacter} />
                    </div>
                    :
                    <UniversalVirtue virtue={virtue} />
                  }
                </label>
              </div>
            )}
          </div>
        </div>

        <p>Hermetic:</p>
        <hr></hr>
        <div className="create-virtues-parent">
          <div className="major"><p>Major Virtues:</p>
            {hermeticVirtues === undefined ? '' : 
              hermeticVirtues.filter( e => e.major === true).map( virtue => 
                <div tabIndex={virtue.id} className={ `create-virtue-hover ${this.validation(virtue)}` } key={virtue.id} onClick={ (e) => this.handleVirtue(e, virtue)}>
                <label>
                  <input type="checkbox" disabled={this.validation(virtue)} ></input>
                  <CharacterCreateVirtue virtue={virtue} />
                </label>
              </div>
            )}
          </div>

          <div className="minor"><p>Minor Virtues:</p>
            {hermeticVirtues === undefined ? '' :
              hermeticVirtues.filter( e => e.major === false).map( virtue => 
                <div tabIndex={virtue.id} className={ `create-virtue-hover ${this.validation(virtue)}` } key={virtue.id} onClick={ (e) => this.handleVirtue(e, virtue)}>
                <label>
                  <input type="checkbox" disabled={this.validation(virtue)} ></input>
                  <CharacterCreateVirtue virtue={virtue} />
                </label>
              </div>
            )}
          </div>

          <div className="free"><p>Free Virtues:</p>
            {hermeticVirtues === undefined ? '' :
              hermeticVirtues.filter( e => e.free === true).map( virtue => 
                <div tabIndex={virtue.id} className={ `create-virtue-hover ${this.validation(virtue)}` } key={virtue.id} onClick={ (e) => this.handleVirtue(e, virtue)}>
                <label>
                  <input type="checkbox" disabled={this.validation(virtue)} ></input>
                  <CharacterCreateVirtue virtue={virtue} />
                </label>
              </div>
            )}
          </div>
        </div>

        <p>Supernatural:</p>
        <hr></hr>
        <div className="create-virtues-parent">
          <div className="major"><p>Major Virtues:</p>
            {supernaturalVirtues === undefined ? '' : 
              supernaturalVirtues.filter( e => e.major === true).map( virtue => 
                <div className={ `create-virtue-hover ${this.validation(virtue)}` } key={virtue.id} onClick={ (e) => this.handleVirtue(e, virtue)}>
                <label>
                  <input type="checkbox" disabled={this.validation(virtue)} ></input>
                  <CharacterCreateVirtue virtue={virtue} />
                </label>
              </div>
            )}
          </div>

          <div className="minor"><p>Minor Virtues:</p>
            {supernaturalVirtues === undefined ? '' :
              supernaturalVirtues.filter( e => e.major === false).map( virtue => 
                <div className={ `create-virtue-hover ${this.validation(virtue)}` } key={virtue.id} onClick={ (e) => this.handleVirtue(e, virtue)}>
                <label>
                  <input type="checkbox" disabled={this.validation(virtue)} ></input>
                  <CharacterCreateVirtue virtue={virtue} />
                </label>
              </div>
            )}
          </div>

          <div className="free"><p>Free Virtues:</p>
            {supernaturalVirtues === undefined ? '' :
              supernaturalVirtues.filter( e => e.free === true).map( virtue => 
                <div className={ `create-virtue-hover ${this.validation(virtue)}` } key={virtue.id} onClick={ (e) => this.handleVirtue(e, virtue)}>
                <label>
                  <input type="checkbox" disabled={this.validation(virtue)} ></input>
                  <CharacterCreateVirtue virtue={virtue} />
                </label>
              </div>
            )}
          </div>
        </div>

        <p>Social Status:</p>
        <hr></hr>
        <div className="create-virtues-parent">
          <div className="major"><p>Major Virtues:</p>
            {socialStatusVirtues === undefined ? '' : 
              socialStatusVirtues.filter( e => e.major === true).map( virtue => 
                <div className={ `create-virtue-hover ${this.validation(virtue)}` } key={virtue.id} onClick={ (e) => this.handleVirtue(e, virtue)}>
                <label>
                  <input type="checkbox" disabled={this.validation(virtue)} ></input>
                  <CharacterCreateVirtue virtue={virtue} />
                </label>
              </div>
            )}
          </div>

          <div className="minor"><p>Minor Virtues:</p>
            {socialStatusVirtues === undefined ? '' :
              socialStatusVirtues.filter( e => e.major === false).map( virtue => 
                <div className={ `create-virtue-hover ${this.validation(virtue)}` } key={virtue.id} onClick={ (e) => this.handleVirtue(e, virtue)}>
                <label>
                  <input type="checkbox" disabled={this.validation(virtue)} ></input>
                  <CharacterCreateVirtue virtue={virtue} />
                </label>
              </div>
            )}
          </div>

          <div className="free"><p>Free Virtues:</p>
            {socialStatusVirtues === undefined ? '' :
              socialStatusVirtues.filter( e => e.free === true).map( virtue => 
                <div className={ `create-virtue-hover ${this.validation(virtue)}` } key={virtue.id} onClick={ (e) => this.handleVirtue(e, virtue)}>
                <label>
                  <input type="checkbox" disabled={this.validation(virtue)} ></input>
                  <CharacterCreateVirtue virtue={virtue} />
                </label>
              </div>
            )}
          </div>
        </div>

        <p>Remaining Flaw Points Required: {this.state.currentVirtuePoints - this.state.flawPoints}</p>
        <br></br>
        <p>Flaws</p>
        <hr></hr>

        <p>General:</p>
        <hr></hr>
        <div className="create-virtues-parent">

          <div className="major"><p>Major Flaws:</p>
            {generalFlaws === undefined ? '' : 
              generalFlaws.filter( e => e.major === true).map( flaw => 
                <div className="create-flaw-hover" key={flaw.id}>
                  <CharacterCreateFlaw flaw={flaw} />
                </div>
            )}
          </div>

          <div className="minor"><p>Minor Flaws:</p>
            {generalFlaws === undefined ? '' : 
              generalFlaws.filter( e => e.major === false).map( flaw => 
                <div className="create-flaw-hover" key={flaw.id}>
                  <CharacterCreateFlaw flaw={flaw} />
                </div>
            )}
          </div>

          <div className="free"><p>Free Flaws:</p>
            {generalFlaws === undefined ? '' : 
              generalFlaws.filter( e => e.free === true).map( flaw => 
                <div className="create-flaw-hover" key={flaw.id}>
                  <CharacterCreateFlaw flaw={flaw} />
                </div>
            )}
          </div>

        </div>

        <p>Supernatural:</p>
        <hr></hr>
        <div className="create-virtues-parent">

          <div className="major"><p>Major Flaws:</p>
            {supernaturalFlaws === undefined ? '' : 
              supernaturalFlaws.filter( e => e.major === true).map( flaw => 
                <div className="create-flaw-hover" key={flaw.id}>
                  <CharacterCreateFlaw flaw={flaw} />
                </div>
            )}
          </div>

          <div className="minor"><p>Minor Flaws:</p>
            {supernaturalFlaws === undefined ? '' : 
              supernaturalFlaws.filter( e => e.major === false).map( flaw => 
                <div className="create-flaw-hover" key={flaw.id}>
                  <CharacterCreateFlaw flaw={flaw} />
                </div>
            )}
          </div>

          <div className="free"><p>Free Flaws:</p>
            {supernaturalFlaws === undefined ? '' : 
              supernaturalFlaws.filter( e => e.free === true).map( flaw => 
                <div className="create-flaw-hover" key={flaw.id}>
                  <CharacterCreateFlaw flaw={flaw} />
                </div>
            )}
          </div>

        </div>


        <p>Personality:</p>
        <hr></hr>
        <div className="create-virtues-parent">

          <div className="major"><p>Major Flaws:</p>
            {personalityFlaws === undefined ? '' : 
              personalityFlaws.filter( e => e.major === true).map( flaw => 
                <div className="create-flaw-hover" key={flaw.id}>
                  <CharacterCreateFlaw flaw={flaw} />
                </div>
            )}
          </div>

          <div className="minor"><p>Minor Flaws:</p>
            {personalityFlaws === undefined ? '' : 
              personalityFlaws.filter( e => e.major === false).map( flaw => 
                <div className="create-flaw-hover" key={flaw.id}>
                  <CharacterCreateFlaw flaw={flaw} />
                </div>
            )}
          </div>

          <div className="free"><p>Free Flaws:</p>
            {personalityFlaws === undefined ? '' : 
              personalityFlaws.filter( e => e.free === true).map( flaw => 
                <div className="create-flaw-hover" key={flaw.id}>
                  <CharacterCreateFlaw flaw={flaw} />
                </div>
            )}
          </div>

        </div>


        <p>Story:</p>
        <hr></hr>
        <div className="create-virtues-parent">

          <div className="major"><p>Major Flaws:</p>
            {storyFlaws === undefined ? '' : 
              storyFlaws.filter( e => e.major === true).map( flaw => 
                <div className="create-flaw-hover" key={flaw.id}>
                  <CharacterCreateFlaw flaw={flaw} />
                </div>
            )}
          </div>

          <div className="minor"><p>Minor Flaws:</p>
            {storyFlaws === undefined ? '' : 
              storyFlaws.filter( e => e.major === false).map( flaw => 
                <div className="create-flaw-hover" key={flaw.id}>
                  <CharacterCreateFlaw flaw={flaw} />
                </div>
            )}
          </div>

          <div className="free"><p>Free Flaws:</p>
            {storyFlaws === undefined ? '' : 
              storyFlaws.filter( e => e.free === true).map( flaw => 
                <div className="create-flaw-hover" key={flaw.id}>
                  <CharacterCreateFlaw flaw={flaw} />
                </div>
            )}
          </div>

        </div>


        <p>Hermetic:</p>
        <hr></hr>
        <div className="create-virtues-parent">

          <div className="major"><p>Major Flaws:</p>
            {hermeticFlaws === undefined ? '' : 
              hermeticFlaws.filter( e => e.major === true).map( flaw => 
                <div className="create-flaw-hover" key={flaw.id}>
                  <CharacterCreateFlaw flaw={flaw} />
                </div>
            )}
          </div>

          <div className="minor"><p>Minor Flaws:</p>
            {hermeticFlaws === undefined ? '' : 
              hermeticFlaws.filter( e => e.major === false).map( flaw => 
                <div className="create-flaw-hover" key={flaw.id}>
                  <CharacterCreateFlaw flaw={flaw} />
                </div>
            )}
          </div>

          <div className="free"><p>Free Flaws:</p>
            {hermeticFlaws === undefined ? '' : 
              hermeticFlaws.filter( e => e.free === true).map( flaw => 
                <div className="create-flaw-hover" key={flaw.id}>
                  <CharacterCreateFlaw flaw={flaw} />
                </div>
            )}
          </div>

        </div>


        <p>Social Status:</p>
        <hr></hr>
        <div className="create-virtues-parent">

          <div className="major"><p>Major Flaws:</p>
            {socialStatusFlaws === undefined ? '' : 
              socialStatusFlaws.filter( e => e.major === true).map( flaw => 
                <div className="create-flaw-hover" key={flaw.id}>
                  <CharacterCreateFlaw flaw={flaw} />
                </div>
            )}
          </div>

          <div className="minor"><p>Minor Flaws:</p>
            {socialStatusFlaws === undefined ? '' : 
              socialStatusFlaws.filter( e => e.major === false).map( flaw => 
                <div className="create-flaw-hover" key={flaw.id}>
                  <CharacterCreateFlaw flaw={flaw} />
                </div>
            )}
          </div>

          <div className="free"><p>Free Flaws:</p>
            {socialStatusFlaws === undefined ? '' : 
              socialStatusFlaws.filter( e => e.free === true).map( flaw => 
                <div className="create-flaw-hover" key={flaw.id}>
                  <CharacterCreateFlaw flaw={flaw} />
                </div>
            )}
          </div>

        </div>

      </div>
    )
  }
};

export default CharacterCreateVirtues;