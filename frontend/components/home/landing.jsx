import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import CharacterIndex from '../character/index';

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: null,
      campaigns: null,
      covenants: null,
      showCharacters: false,
    };

    this.showCharacters = this.showCharacters.bind(this);
  }

  showCharacters(e) {
    e.preventDefault();
    if (this.state.showCharacters === true) {
      this.setState({ showCharacters: false })
    } else {
      this.setState({ showCharacters: true })
    }
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
        <div onClick={this.showCharacters}>
          <p>Characters</p>
          <div className="show-characters-button" />
          { this.state.showCharacters ? (
            <div className="show-users-characters">
              <Link to={`/characters/new/gen`}>
                <ul>
                  <li>
                    <img src={window.images.blankCharacter} className="blank-character-png"></img>
                  </li>
                  <li>
                    New character
                  </li>
                </ul>
              </Link>
              {this.state.characters === null ? '' : this.state.characters.map((character) => <CharacterIndex key={character.id} currentCharacter={character}/>)}
            </div>
          ) : (
            null
          )}
          <hr></hr>
        </div>
        <div>
          <p>Covenants</p>
        </div>
      </section>
    );

  }
};

export default withRouter(Landing);