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
      showCharacters: false,
    };

    this.showCharacters = this.showCharacters.bind(this);
    this.hideCharacters = this.hideCharacters.bind(this);
  }


  showCharacters(e) {
    e.preventDefault();
    this.setState({ showCharacters: true }, () => {
      document.addEventListener('click', this.hideCharacters);
    });
  }

  hideCharacters() {
    this.setState({ showCharacters: false }, () => {
      document.removeEventListener('click', this.hideCharacters);
    });
  }

  componentDidMount() {
    this.props.requestAllCharacters(this.props.currentUser.id)
      .then((response) => this.setState({
        characters: response.characters,
      }));
  }

  componentWillUnmount() {
    this.setState({
      characters: null,
      campaigns: null,
      covenants: null,
      showCharacters: false,
    });
  }

  render () {
    return (
      <section className="intro">
        <div>
          <p>Campaigns</p>
          <hr></hr>
        </div>
        <div onClick={this.showCharacters}>
          {/* <span>Characters</span> */}
          <p>Characters</p>
          <div className="show-characters-button" />
          { this.state.showCharacters ? (
            <div className="show-users-characters">
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

export default Landing;