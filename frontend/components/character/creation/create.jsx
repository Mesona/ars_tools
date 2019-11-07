import React from 'react';
import { withRouter } from 'react-router-dom';

import CharacterCreateInitial from './create_initial';
import CharacterCreateStats from './create_stats';
// import CharacterCreateVirtuesContainer from './create_virtues_container';
// import CharacterCreatePerksContainer from './create_perks_container';
import CharacterCreateVirtuesContainer from './test_virtues_container';
import CharacterCreateFlawsContainer from './create_flaws_container';

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
            createCharacter={this.props.createCharacter}
          />
        </section>
      );
    } else if ( this.props.page === "virtues" ) {
      return (
        // <CharacterCreatePerksContainer
        //   characterId={characterId}
        // />
        <CharacterCreateVirtuesContainer
          characterId={characterId}
        />
      );
    } else if ( this.props.page === "flaws" ) {
      return (
        <CharacterCreateFlawsContainer
          characterId={characterId}
        />
      );
    } else if ( this.props.page === "stats" ) {
      return (
        <CharacterCreateStats
          characterId={characterId}
          requestCharacter={this.props.requestCharacter}
          updateCharacter={this.props.updateCharacter}
        />
      )

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