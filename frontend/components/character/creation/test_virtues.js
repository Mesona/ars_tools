import React from 'react';
import CharacterCreatePerksContainer from './create_perks_container';

class CharacterCreateVirtues extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCharacter: null,
      perks: null,
      classifications: [],
      perkType: null,
      unpause: false,
    };

    this.setClassifications = this.setClassifications.bind(this);
    this.unpauseRender = this.unpauseRender.bind(this);
  } 

  componentDidMount() {
    if (this.props.history.location.pathname.includes('virtues')) {
      this.setState({perkType: "virtues"});
      this.props.requestAllVirtues()
        .then(response => this.setClassifications(response, "virtues"));

    } else if (this.props.history.location.pathname.includes('flaws')) {
      this.setState({perkType: "flaws"});
      this.props.requestAllFlaws()
        .then(response => this.setClassifications(response, "flaws"));

    }

    this.props.requestCharacter(this.props.match.params.characterId)
      .then( response => this.setState({ currentCharacter: response.character }));

  }

  setClassifications(response, perkType) {
    let perksArray = [];
    let classifications = [];

    
    if (perkType === "virtues") {
      for (let i = 0; i < response.virtues.length; i++) {
        perksArray.push(response.virtues[i]);
      }

      response.virtues.forEach((virtue) => {
        if (!classifications.includes(virtue.virtue_type) && virtue.virtue_type !== "") {
          classifications.push(virtue.virtue_type);
        }      
      });

      this.setState({ classifications: classifications });
    } else {
      for (let i = 0; i < response.flaws.length; i++) {
        perksArray.push(response.flaws[i]);
      }

      response.flaws.forEach((flaw) => {
        if (!classifications.includes(flaw.flaw_type) && flaw.flaw_type !== "") {
          classifications.push(flaw.flaw_type);
        }      
      });
    }
    
    this.setState({
      perks: perksArray,
      classifications: classifications
    }, () => {
      this.unpauseRender();
    });
 }

 unpauseRender() {
  //  This is a dumb function that prevents the child components
  // from rendering too soon, causing all kinds of errors because
  // setState is asynchronous
   this.setState({ unpause: true });
 }

  render () {
    if (this.state.unpause === false) {
      return (
        <>
          Loaaaaaaaaaading . . .
        </>
      )}
    else { 
      return (
        <>
          {this.state.perkType === "virtues" ?
            <CharacterCreatePerksContainer
              currentCharacter={this.state.currentCharacter}
              perkType={"virtue"}
              perks={this.state.perks}
              classifications={this.state.classifications}
            />
          :
            <CharacterCreatePerksContainer
              currentCharacter={this.state.currentCharacter}
              perkType={"flaw"}
              perks={this.state.perks}
              classifications={this.state.classifications}
            />
          }
        </>
      )
    }
  }
};

export default CharacterCreateVirtues;