import React from 'react';
import CharacterShowStats from './show_stats';

class CharacterShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCharacter: null,
      page: "character",
      // "page" state will eventually be used to determine if
      // it should render the character's stats, their spells, 
      // or their inventory
    }


    this.sendData = this.sendData.bind(this);
  }

  componentDidMount() {
    this.props.requestCharacter(this.props.match.params.characterId)
      .then((response) => this.setState({
        currentCharacter: response.character,
      }));
  }

  sendData() {
    console.log("!!!!!");
    console.log(this.props);
    console.log("!!!!!");
    console.log(this.state);
    console.log("!!!!!");
    console.log(this.state.currentCharacter.abilities)
    console.log("!!!!!");
    console.log(this.state.currentCharacter.ability_associations);
    console.log("!!!!!");
  }


  render () {
    const { currentCharacter } = this.state;
    return (
      // TODO
      // Tab for spells, if a mage character
      // Tab for inventory
      <div>
        { currentCharacter === null ? '' : <CharacterShowStats currentCharacter={currentCharacter} />}
      </div>
    )
  }
};

export default CharacterShow;