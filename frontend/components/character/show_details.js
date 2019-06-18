import React from 'react';

class CharacterShowDetails extends React.Component {
  constructor(props) {
    super(props);
  }


  render () {
    const { currentCharacter } = this.props;
    return (
      <ul className="character-info">
        <li>
          <img onClick={this.sendData} src={window.images.blankCharacter} className="blank-character-png"></img>
        </li>
        <li>
          { currentCharacter.name }
          <br></br>
          <hr></hr>
        </li>
      </ul>
    )
  }
};

export default CharacterShowDetails;