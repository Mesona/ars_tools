import React from 'react';
import UniquePerkContainer from './create_unique_perk_container';
import CharacterCreatePerks from './create_perks_container';
import { Link } from 'react-router-dom';

class CharacterCreateVirtues extends React.Component {
 constructor(props) {
   super(props);

   this.state = {
    currentCharacter: null,
    virtues: null,
    virtuePoints: 0,
    currentVirtuePoints: 0,
    flawPoints: 0,
    minorVirtues: 0,
    currentVirtues: {},
    currentFlaws: {},
    virtuePointText: "",
    classifications: [],
   };

   this.handleSubmit = this.handleSubmit.bind(this);
   this.setClassifications = this.setClassifications.bind(this)
 } 

 componentDidMount() {
  this.props.requestAllVirtues()
    .then((response) => this.setState({
      virtues: response.virtues,
  }))
  .then(this.setClassifications);

  this.props.requestAllAbilities();
 }

 setClassifications() {
    let classifications = [];
    this.state.virtues.forEach((virtue) => {
      if (!classifications.includes(virtue.virtue_type) && virtue.virtue_type !== "") {
        classifications.push(virtue.virtue_type);
      }      
    });

    this.setState({ classifications: classifications });
 }


  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push(`/characters/new/flaws/${currentCharacter.id}`);
  // const currentCharacter = Object.assign({}, this.state);
  // this.props.createCharacter(currentCharacter)
    // .then((response) => this.props.history.push(`/character/new/virtues/${response.character.id}`));
    // .then((response) => this.props.history.push(`/test/${response.character.id}`));
  }

  render () {
    console.log("CLASSIFICATION: " + this.state.classifications)
    return (
      <>
        { this.state.virtues === null ?
          null
        :
          <CharacterCreatePerks
            perkType={"virtue"}
            handleSubmit={this.handleSubmit}
            perks={this.state.virtues}
            classifications={this.state.classifications}
          />
        }
      </>
    )
  }
};

export default CharacterCreateVirtues;