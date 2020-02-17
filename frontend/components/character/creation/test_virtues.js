import React from 'react';
import CharacterCreatePerksContainer from './create_perks_container';

class CharacterCreateVirtues extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCharacter: null,
      virtues: null,
      flaws: null,
      virtueClassifications: [],
      flawClassifications: [],
      combinedPerks: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.setClassifications = this.setClassifications.bind(this);
    // this.concatPerks = this.concatPerks.bind(this);
    // TODO: Separate this out so virtues doesn't load all virtues and flaws at once
  } 

  componentDidMount() {
    this.props.requestAllVirtues()
      .then(response => this.setClassifications(response, "virtues"));

    this.props.requestAllFlaws()
      .then(response => this.setClassifications(response, "flaws"));

    this.props.requestAllAbilities();

    this.props.requestCharacter(this.props.match.params.characterId)
      .then( response => this.setState({ currentCharacter: response.character }));
  }

  setClassifications(response, perkType) {
    let perksArray = [];
    let classifications = [];

    
    if (perkType === "virtues") {
      // this.concatPerks(response.virtues);
      
      for (let i = 0; i < response.virtues.length; i++) {
        perksArray.push(response.virtues[i]);
      }

      this.setState({ virtues: perksArray });

      response.virtues.forEach((virtue) => {
        if (!classifications.includes(virtue.virtue_type) && virtue.virtue_type !== "") {
          classifications.push(virtue.virtue_type);
        }      
      });

      this.setState({ virtueClassifications: classifications });
    } else {
      // this.concatPerks(response.flaws);
      for (let i = 0; i < response.flaws.length; i++) {
        perksArray.push(response.flaws[i]);
      }

      this.setState({ flaws: perksArray });

      response.flaws.forEach((flaw) => {
        if (!classifications.includes(flaw.flaw_type) && flaw.flaw_type !== "") {
          classifications.push(flaw.flaw_type);
        }      
      });

      this.setState({ flawClassifications: classifications });
    }
 }


  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push(`/characters/new/flaws/${currentCharacter.id}`);
  // const currentCharacter = Object.assign({}, this.state);
  // this.props.createCharacter(currentCharacter)
    // .then((response) => this.props.history.push(`/character/new/virtues/${response.character.id}`));
    // .then((response) => this.props.history.push(`/test/${response.character.id}`));
  }

  // concatPerks(perks) {
  //   let these_perks = this.state.combinedPerks.concat(perks);

  //   if (these_perks[0] === undefined) {
  //     these_perks.shift();
  //   }

  //   this.setState({ combinedPerks: these_perks })
  // }

  render () {
    if (this.state.currentCharacter === undefined)  { 
      return (
        <>
          Loaaaaaaaaaading . . .
        </>
      )}
    else { 
      return (
        <>
          { this.state.virtues !== null ?
            <CharacterCreatePerksContainer
              currentCharacter={this.state.currentCharacter}
              perkType={"virtue"}
              handleSubmit={this.handleSubmit}
              perks={this.state.virtues}
              // perks={this.state.combinedPerks}
              classifications={this.state.virtueClassifications}
            />
          :
            this.state.flaws !== null ?
              <CharacterCreatePerksContainer
                perkType={"flaw"}
                handleSubmit={this.handleSubmit}
                perks={this.state.flaws}
                // perks={this.state.combinedPerks}
                classifications={this.state.flawClassifications}
              />
              :
              null
            
          }
        </>
      )
    }
  }
};

export default CharacterCreateVirtues;