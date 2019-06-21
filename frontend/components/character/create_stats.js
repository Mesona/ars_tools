import React from 'react';

class CharacterCreatStats extends React.Component {
 constructor(props) {
   super(props);

   this.state = {
    currentCharacter: {
      character_type: "",
      name: "",
      user_id: this.props.currentUser.id,
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
     page_location: 0,
     pages: ["stats"],
   };

   this.handleSubmit = this.handleSubmit.bind(this);
   this.update = this.update.bind(this)
 } 

 componentDidMount() {
    console.log("!!!!!")
    console.log(this.props)
    console.log("!!!!!")
    console.log(this.state)
    console.log("!!!!!")
    // this.props.match.params.characterId === null  ? '' :
    this.props.characterId === null  ? '' :
      this.props.requestCharacter(this.props.characterId)
        .then((response) => this.setState({
          currentCharacter: response.character,
    }));
  }

 handleSubmit(e) {
    e.preventDefault();
    // const currentCharacter = Object.assign({}, this.state);
    // console.log(currentCharacter)
    console.log("!!!!!")
    console.log(this.props)
    console.log("!!!!!")
    console.log(this.state)
    console.log("!!!!!")
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
      if (field === "character_type") {
        if (e.currentTarget.value === "mage") {
          this.setState({
            pages: ["stats", "virtues", "early", "pre-apprenticeship", "apprenticeship", "advanced"],
          });
        } else {
          this.setState({
            pages: ["stats", "virtues", "early", "advanced"],
          });
        }
      }
    };
  }

  render () {

    const { currentCharacter } = this.state;

    return (
      <form className="new-character-setup-form" onSubmit={this.handleSubmit} >

        <label>Character Name: 
          <input
            type="text"
            value={currentCharacter.name}
            onChange={this.update('name')}
          />
        </label>
        
        <br></br>

        <br></br>

        <label>Character Type:
          <select 
            value={currentCharacter.character_type} 
            required
            onChange={this.update('character_type')}>
            <option value="" disabled selected>Pick One</option>
            <option value="mage">Mage</option>
            <option value="grog">Grog</option>
            <option value="companion">Companion</option>
            <option value="npc">NPC</option>
          </select>
        </label>

        <br></br>

        <label>Stats:

          <br></br>
          Intelligence: 
          <input
            type="number"
            value={currentCharacter.intelligence}
            onChange={this.update('intelligence')}
          />
          <br></br>
          
          Perception: 
          <input
            type="number"
            value={currentCharacter.perception}
            onChange={this.update('perception')}
          />
          <br></br>
          
          Strength: 
          <input
            type="number"
            value={currentCharacter.strength}
            onChange={this.update('strength')}
          />
          <br></br>
          
          Stamina: 
          <input
            type="number"
            value={currentCharacter.stamina}
            onChange={this.update('stamina')}
          />
          <br></br>
          
          Presence: 
          <input
            type="number"
            value={currentCharacter.presence}
            onChange={this.update('presence')}
          />
          <br></br>
          
          Communication: 
          <input
            type="number"
            value={currentCharacter.communication}
            onChange={this.update('communication')}
          />
          <br></br>
          
          Dexterity: 
          <input
            type="number"
            value={currentCharacter.dexterity}
            onChange={this.update('dexterity')}
          />
          <br></br>
          
          Quickness: 
          <input
            type="number"
            value={currentCharacter.quickness}
            onChange={this.update('quickness')}
          />
          <br></br>
          
          <input type="submit"></input>
        </label>

      </form>
    )
  }
};

export default CharacterCreatStats;