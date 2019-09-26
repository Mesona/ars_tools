import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';


class CharacterCreateStats extends React.Component {
 constructor(props) {
   super(props);

   this.state = {
    currentCharacter: {
      character_type: "",
      name: "",
      user_id: null,
      intelligence: 0,
      perception: 0,
      strength: 0,
      stamina: 0,
      presence: 0,
      communication: 0,
      dexterity: 0,
      quickness: 0,
      age: null,
      appearant_age: null,
    },
   };

   this.handleSubmit = this.handleSubmit.bind(this);
   this.updateStat = this.updateStat.bind(this);
 } 

componentDidMount() {
    this.props.requestCharacter(this.props.characterId)
      .then((response) => {
        this.setState({
          currentCharacter: {...response.character},
        });
    });
}

 handleSubmit(e) {
    e.preventDefault();
    const currentCharacter = Object.assign({}, this.state.currentCharacter);
    this.props.createCharacter(currentCharacter)
      .then((response) => this.props.history.push(`/character/new/virtues/${response.character.id}`));
  }

  updateStat(e) {
    if (e.currentTarget.value !== undefined) {
      let currentCharacter = this.state.currentCharacter;
      currentCharacter[e.target.id] = e.currentTarget.value;
      this.setState({currentCharacter: {...currentCharacter}});
    } 
  }

  render () {

    const { currentCharacter } = this.state;

    return (
      <form className="new-character-setup-form" onSubmit={this.handleSubmit}>
        <br></br>

        <div className="characterStats">

          <label onClick={this.updateStat}>Stats:

            <br></br>
            <div>
            <label htmlFor="intelligence">Intelligence:</label>
              <select id="intelligence" value={this.state.currentCharacter.intelligence} onChange={this.updateStat}>
                <option value="-3">-3</option>
                <option value="-2">-2</option>
                <option value="-1">-1</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          
            <div>
              <label htmlFor="perception">Perception:</label>
              <select id="perception" value={this.state.currentCharacter.perception} onChange={this.updateStat}>
                <option value="-3">-3</option>
                <option value="-2">-2</option>
                <option value="-1">-1</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            
            <div>
            <label htmlFor="strength">Strength:</label>
              <select id="strength" value={this.state.currentCharacter.strength} onChange={this.updateStat}>
                <option value="-3">-3</option>
                <option value="-2">-2</option>
                <option value="-1">-1</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>

            <div>
            <label htmlFor="stamina">Stamina:</label>
              <select id="stamina" value={this.state.currentCharacter.stamina} onChange={this.updateStat}>
                <option value="-3">-3</option>
                <option value="-2">-2</option>
                <option value="-1">-1</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div> 

            
            <div>
            <label htmlFor="presence">Presence:</label>
              <select id="presence" value={this.state.currentCharacter.presence} onChange={this.updateStat}>
                <option value="-3">-3</option>
                <option value="-2">-2</option>
                <option value="-1">-1</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            
            <div>
            <label htmlFor="communication">Communication:</label>
              <select id="communication" value={this.state.currentCharacter.communication} onChange={this.updateStat}>
                <option value="-3">-3</option>
                <option value="-2">-2</option>
                <option value="-1">-1</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            
            <div>
            <label htmlFor="dexterity">Dexterity:</label>
              <select id="dexterity" value={this.state.currentCharacter.dexterity} onChange={this.updateStat}>
                <option value="-3">-3</option>
                <option value="-2">-2</option>
                <option value="-1">-1</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            
            <div>
            <label htmlFor="quickness">Quickness:</label>
              <select id="quickness" value={this.state.currentCharacter.quickness} onChange={this.updateStat}>
                <option value="-3">-3</option>
                <option value="-2">-2</option>
                <option value="-1">-1</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            
            <input type="submit"></input>
          </label>
        </div>

        <br></br>

        <NavLink to={`/`}>
          Back
        </NavLink>

      </form>
    )
  }
};

export default withRouter(CharacterCreateStats);