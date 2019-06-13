import React from 'react';
// import { Link } from 'react-router-dom';
import CharacterIndex from '../character/index';

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: null,
      campaigns: null,
      covenants: null,
    };
  }


  componentDidMount() {
    this.props.requestAllCharacters(this.props.currentUser.id)
      .then((response) => this.setState({
        characters: response.characters,
      }));
  }

  render () {
    return (
      <section className="intro">
        <div>
          <p>Campaigns</p>
          <hr></hr>
        </div>
        <div>
          <p>Characters</p>
          {/* TODO -- Add dropdown to show/hide this section */}
          <div className="users-characters">
            <ul>
              <li>
                <img src={window.images.blankCharacter} className="blank-character-png"></img>
              </li>
              <li>
                New character
              </li>
            </ul>
            {this.state.characters === null ? '' : this.state.characters.map((character) => <CharacterIndex key={character.id} currentCharacter={character}/>)}
          </div>
          <hr></hr>
        </div>
        <div>
          <p>Covenants</p>
        </div>
      </section>
    );

  }
};

export default Landing;