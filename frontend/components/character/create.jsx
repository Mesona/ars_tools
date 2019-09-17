import React from 'react';
import { withRouter } from 'react-router-dom';

import CharacterCreateInitial from './create_initial';
import CharacterCreateStats from './create_stats';
import CharacterCreateVirtues from './create_virtues';

class CharacterCreate extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log("#####")
    // console.log(this.props)
    // console.log("#####")
    // console.log(this.state)
    // console.log("#####")
  }

  render () {

    let characterId;
    this.props.match.params.characterId === undefined ?
      characterId = null :
      characterId = this.props.match.params.characterId;
    
    if ( this.props.page === "new-character" || this.props.page === undefined ) {
      return (
        <section className="new-character">
          <CharacterCreateInitial
            currentUser={this.props.currentUser}
            characterId={characterId}
            createCharacter={this.props.createCharacter}
            requestCharacter={this.props.requestCharacter}
            updateCharacter={this.props.updateCharacter}
          />
        </section>
        // <section className="stats">
        //   <CharacterCreateStats
        //     currentUser={this.props.currentUser}
        //     characterId={characterId}
        //     createCharacter={this.props.createCharacter}
        //     requestCharacter={this.props.requestCharacter}
        //   />
        // </section>
      );
    } else if ( this.props.page === "virtues" ) {
      return (
        <CharacterCreateVirtues
          characterId={characterId}
          requestCharacter={this.props.requestCharacter}
          updateCharacter={this.props.updateCharacter}
          requestAllVirtues={this.props.requestAllVirtues}
          requestAllFlaws={this.props.requestAllFlaws}
        />
      )
    } else if ( this.props.page === "new-character" ) {
      return (
        <CharacterCreateInitial
          characterId={characterId}
          requestCharacter={this.props.requestCharacter}
          updateCharacter={this.props.updateCharacter}
        />
      )
    // } else if ( this.props.page === "stats" ) {
    //   return (
    //     <CharacterCreateStats
    //       characterId={characterId}
    //       requestCharacter={this.props.requestCharacter}
    //       updateCharacter={this.props.updateCharacter}
    //     />
    //   )

    } else if ( this.props.page === "early" ) {
      return (
        <p>Early</p>
      )
    } else if ( this.props.page === "pre-apprenticeship" ) {
      return (
        <p>Pre Apprentice</p>
      )
    } else if ( this.props.page === "apprenticeship" ) {
      return (
        <p>Apprenticeship</p>
      )
    } else if ( this.props.page === "advanced" ) {
      return (
        <p>Advanced</p>
      )
    } else {
      console.log(this.props)
      return (
        <p>Wrong Page</p>
      )
    }

  }
};

export default withRouter(CharacterCreate);