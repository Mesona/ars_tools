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
    virtuePointText: "",
   };

   this.handleSubmit = this.handleSubmit.bind(this);
   this.update = this.update.bind(this);
   this.handleVirtue = this.handleVirtue.bind(this);
   this.validation = this.validation.bind(this);
   this.establishVirtues = this.establishVirtues.bind(this);
 } 

 componentDidMount() {
      this.props.requestCharacter(this.props.characterId)
        .then((response) => {
          this.setState({
            currentCharacter: {...response.character},
            currentVirtues: response.character.virtues,
            virtuePoints: (response.character.character_type === "mage" ? 10 : 
              response.character.character_type === "companion" ? 10 : 3),
            },
            // this.establishVirtues
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

  handleVirtue(e, virtue, childData = null) {
    console.log("handling virtue")
    console.log(virtue)
    // console.log("eeeeeeeeeeeeeee")
    // console.log(e.currentTarget)
    // console.log(e.target)
    // console.log("VIRTUUUUUUUUUUE")
    // console.log(virtue)

    if (childData !== null) {
      virtue.special_one = childData.special_one;
      virtue.special_two = childData.special_two;
    }

    // console.log("Specials: " + childData.special_one + ", " + childData.special_two)
    let checked = e.target.checked || null;

    let { currentVirtues } = this.state;
    if (checked) {
      currentVirtues[virtue.id] = {
        name: virtue.name,
        special_one: virtue.special_one,
        special_two: virtue.special_two,
      };
      this.setState({currentVirtues: currentVirtues});
    } else {
      let currentVirtueID = virtue.id;
      delete currentVirtues[currentVirtueID];
      this.setState({currentVirtues: currentVirtues});
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
      if (virtue.name === "Custos" ||
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
      if (virtue.name === "Wealthy") {
        return "disabled";
      }

    } else if (this.state.currentVirtues.covenfolk === true) {
      if (virtue.name === "Wealthy") {
        return "disabled";
      }

    } else if (this.state.currentVirtues["Giant Blood"]=== true) {
      if (virtue.name === "Large") {
        return "disabled";
      }

    } else if (this.state.currentVirtues["Large"] === true) {
      if (virtue.name === "Giant Blood") {
        return "disabled";
      }

    } else if (this.state.currentFlaws.small_frame === true) {
      if (virtue.name === "Large" ||
        virtue.name === "Giant Blood") {
        return "disabled";
      }

    } else if (this.state.currentFlaws.dwarf === true) {
      if (virtue.name === "Large" ||
      virtue.name === "Giant Blood") {
        return "disabled";
      }
    }

    // Necessary validations
    // If have "Diedne Magic" need to have "Dark Secret"

    // if ((virtue.special_one !== undefined && virtue.special_one === "") ||
    //     (virtue.special_two !== undefined && virtue.special_two === "")) {
    //       return "disabled";
    // }
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
        <br></br>
        <p>Virtues</p>
        <hr></hr>

        <p>Special:</p>
        <hr></hr>
        <div className="create-virtues-parent">

          <div className="major">
            {specialVirtues === undefined ? '' : specialVirtues.map( virtue => 
              <div className="create-virtue-hover" key={virtue.id}>
                  <label>
                    <input className="create-virtue-checkbox" type="checkbox" disabled={this.validation(virtue)} onChange={(e) => this.handleVirtue(e, virtue)}></input>
                    { virtue.special === true ?
                      <React.Fragment>
                        <UniversalVirtue virtue={virtue} />
                        <UniqueVirtue virtue={virtue} currentCharacter={currentCharacter} />
                      </React.Fragment>
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
                      <>
                        <UniversalVirtue virtue={virtue} />
                        <UniqueVirtue virtue={virtue} currentCharacter={currentCharacter} />
                      </>
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
                <div id={virtue.id} className={ `create-virtue-hover ${this.validation(virtue)}` } key={virtue.id}>
                  <label>
                    { virtue.special === true ?
                      <>
                        <UniqueVirtue virtue={virtue} validateVirtue={this.validation} currentCharacter={currentCharacter} characterVirtues={this.state.currentVirtues} handleClick={this.handleVirtue} />
                      </>
                      :
                      <UniversalVirtue virtue={virtue} />
                    }
                    <hr></hr>
                  </label>
                </div>
              // <div id={virtue.id} className={ `create-virtue-hover ${this.validation(virtue)}` } key={virtue.id}>
              //   <label>
              //     <input className="create-virtue-checkbox" type="checkbox" disabled={this.validation(virtue)} onClick={() => console.log(virtue)} ></input>
              //     { virtue.special === true ?
              //       <>
              //         <UniversalVirtue virtue={virtue} />
              //       </>
              //       :
              //       <UniversalVirtue virtue={virtue} />
              //     }
              //     <hr></hr>
              //   </label>
              // </div>
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

      </div>
    )
  }
};

export default CharacterCreateVirtues;