import React from 'react';
// import { Link } from 'react-router-dom';

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
      }))
      .then(console.log("characters loaded"))
      
    console.log("!!!!!")
    console.log(this.props)
    console.log("!!!!!")
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
          <br></br>
          {this.state.characters === null ? '' : this.state.characters.map((character) => (
            <ul>
              <li>
                {character.name}
              </li>
            </ul>
          ))}
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