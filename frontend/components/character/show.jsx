import React from 'react';

class CharacterShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCharacter: null,
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
      <div>
        { currentCharacter === null ? '' : (
          <ul>
            <li>
              <img onClick={this.sendData} src={window.images.blankCharacter} className="blank-character-png"></img>
            </li>
            <li>
              { currentCharacter.name }
              <br></br>
            </li>
            <li>
              { currentCharacter.ability_associations === undefined ? 'no' : 
                currentCharacter.ability_associations.map( ability_association => 
                <ul>
                  <li>
                    ability: {ability_association.ability_name}
                  </li>
                  <li>
                    Experience: {ability_association.experience}
                  </li>
                  <hr></hr>
                </ul>
                )}
            </li>
            {/* <li>
              { currentCharacter.abilities === undefined ? 'no' : 
                currentCharacter.abilities.map( ability => 
                <ul>
                  <li>
                    {ability.name}
                  </li>
                  <li>
                    Experience: {ability.experience}
                  </li>
                  <hr></hr>
                </ul>
                )}
            </li> */}
            <li>
              Strength: { currentCharacter.strength }
            </li>
            {/* { currentCharacter.abilities.map ( ability => 
            <li>
              {ability.name}
            </li>
            )} */}
          </ul>
        )}
      </div>
    )
  }
};

export default CharacterShow;