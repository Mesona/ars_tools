import React from 'react';

import CharacterCreateStats from './create_stats';

class CharacterCreate extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {

    let characterId;
    this.props.match.params.characterId === undefined ?
      characterId = null :
      characterId = this.props.match.params.characterId;
    
    if ( this.props.page === "stats" || this.props.page === undefined ) {
      return (
        <section className="new-character">
          <CharacterCreateStats
            currentUser={this.props.currentUser}
            characterId={characterId}
            createCharacter={this.props.createCharacter}
            requestCharacter={this.props.requestCharacter}
          />
        </section>
      );
    } else if ( this.props.page === "virtues" ) {
     <p>Virtues</p> 
    } else if ( this.props.page === "early" ) {
      <p>Early</p>
    } else if ( this.props.page === "pre-apprenticeship" ) {
      <p>Pre Apprentice</p>
    } else if ( this.props.page === "apprenticeship" ) {
      <p>Apprenticeship</p>
    } else if ( this.props.page === "advanced" ) {
      <p>Advanced</p>
    } else {
      <p>Wrong Page</p>
    }

  }
};

export default CharacterCreate;