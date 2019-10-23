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
    return (
      <>
        <CharacterCreatePerks
          characterID={this.props.characterID}
          perkType={"virtue"}
          handleSubmit={this.handleSubmit}
        />
      </>
    )
  }
};

export default CharacterCreateVirtues;