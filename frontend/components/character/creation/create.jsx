import React from 'react';
import { withRouter, Route, Redirect, Router, browserHistory } from 'react-router-dom';

import CharacterCreateInitial from './create_initial';
import CharacterCreateStats from './create_stats';
import CharacterEstablishPerks from './establish_perks';

class CharacterCreate extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { match } = this.props;

    return (
      <>
        <Route
          exact path={`${match.path}/gen`}
          render={() => (
            <CharacterCreateInitial
              createCharacter={this.props.createCharacter}
              currentUser={this.props.currentUser}
            />
          )}
        />

        <Route
          path={`${match.path}/virtues`}
          // component={CharacterEstablishPerks}
          render={() => {
            return (
              this.props.currentCharacter === undefined ?
              <Redirect to="/characters/new/gen" /> :
              <Redirect to={path} />
            )
          }}
        />

        <Route
          path={`${match.path}/flaws`}
          component={CharacterEstablishPerks}
        />
      </>

    )

    // let page = this.props.history.location.pathname;
    
    // if ( page.includes("new-character") || this.props.page === undefined ) {
    //   return (
    //     <section className="new-character">
    //       <CharacterCreateInitial
    //         currentUser={this.props.currentUser}
    //         createCharacter={this.props.createCharacter}
    //       />
    //     </section>
    //   );
    // } else if ( page.includes("virtues") ) {
    //   return (
    //     // <CharacterCreatePerksContainer
    //     //   characterId={characterId}
    //     // />
    //     <CharacterCreateVirtuesContainer
    //       characterId={characterId}
    //     />
    //   );
    // } else if ( page.includes("flaws") ) {
    //   return (
    //     <CharacterCreateFlawsContainer
    //       characterId={characterId}
    //     />
    //   );
    // } else if ( page.includes("stats") ) {
    //   return (
    //     <CharacterCreateStats
    //       characterId={characterId}
    //       requestCharacter={this.props.requestCharacter}
    //       updateCharacter={this.props.updateCharacter}
    //     />
    //   )

    // } else if ( this.props.page === "early" ) {
    //   return (
    //     <p>Early</p>
    //   )
    // } else if ( this.props.page === "pre-apprenticeship" ) {
    //   return (
    //     <p>Pre Apprentice</p>
    //   )
    // } else if ( this.props.page === "apprenticeship" ) {
    //   return (
    //     <p>Apprenticeship</p>
    //   )
    // } else if ( this.props.page === "advanced" ) {
    //   return (
    //     <p>Advanced</p>
    //   )
    // } else {
    //   console.log(this.props)
    //   return (
    //     <p>Wrong Page</p>
    //   )
    // }

  }
};

export default withRouter(CharacterCreate);