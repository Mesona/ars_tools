import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';


class CharacterCreateStats extends React.Component {
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
     displayMenu: false,
     currentStat: "",
   };

   this.handleSubmit = this.handleSubmit.bind(this);
   this.update = this.update.bind(this);

   this.showDropdownMenu = this.showDropdownMenu.bind(this);
   this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
   this.updateStat = this.updateStat.bind(this);
 } 

 componentDidMount() {
    this.props.characterId === null  ? '' :
      this.props.requestCharacter(this.props.characterId)
        .then((response) => this.setState({
          currentCharacter: response.character,
    }));
  }

 handleSubmit(e) {
    e.preventDefault();
    const currentCharacter = Object.assign({}, this.state.currentCharacter);
    this.props.createCharacter(currentCharacter)
      // .then((response) => console.log(response.character.id))
      .then((response) => this.props.history.push(`/character/new/virtues/${response.character.id}`));
  }

  update(field) {
    return (e) => {
      this.setState({currentCharacter: {...this.state.currentCharacter, [field]: e.currentTarget.value}});
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

  // updateStat(stat, number) {
  //   let currentCharacter = this.state.currentCharacter;
  //   currentCharacter[stat] = number;
  //   this.setState({currentCharacter: {...currentCharacter}});
  // }

  showDropdownMenu(e) {
    e.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  }

  updateStat(e) {
    if (e !== undefined) {
      if (e.target.id !== "") {
        this.setState({currentStat: e.target.id});
      } else if (e.target.value !== "" && e.target.value !== undefined) {
        let currentCharacter = this.state.currentCharacter;
        currentCharacter[this.state.currentStat] = e.target.value;
        this.setState({currentCharacter: {...currentCharacter}});
      }
    }
  }

  render () {

    const { currentCharacter } = this.state;

    return (
      <form className="new-character-setup-form" onSubmit={this.handleSubmit}>

        <label>Character Name: 
          <input
            type="string"
            defaultValue={currentCharacter.name}
            onChange={this.update('name')}
          />
        </label>
        
        <br></br>

        <label>Character Type:
          <select 
            defaultValue={currentCharacter.character_type} 
            required
            onChange={this.update('character_type')}>
            <option value="" disabled defaultValue>Pick One</option>
            <option value="mage">Mage</option>
            <option value="grog">Grog</option>
            <option value="companion">Companion</option>
            <option value="npc">NPC</option>
          </select>
        </label>

        <br></br>

        <div className="characterStats">

          <label onClick={this.updateStat}>Stats:

            <br></br>
            <div>
            <span>Intelligence:</span>
            {/* TODO: Move stats to separate page after virtues and flaws */}
            {/* TODO: Have virtues on same page as character type, but virtues don't appear until character type is chosen */}
            <button className="mini-place-index-hamburger" onClick={this.showDropdownMenu} id="intelligence">{this.state.currentCharacter.intelligence}
              { this.state.displayMenu ? (
                <ul>
                  <li value="-3">-3</li>
                  <li value="-2">-2</li>
                  <li value="-1">-1</li>
                  <li value="0">0</li>
                  <li value="1">1</li>
                  <li value="2">2</li>
                  <li value="3">3</li>
                </ul>
              ) : (
                null
              )}
            </button>
            </div>
            <br></br>
          
            Perception: 
            <input
              type="number"
              defaultValue={currentCharacter.perception}
              onChange={this.update('perception')}
            />
            <br></br>
            
            Strength: 
            <input
              type="number"
              defaultValue={currentCharacter.strength}
              onChange={this.update('strength')}
            />
            <br></br>
            
            Stamina: 
            <input
              type="number"
              defaultValue={currentCharacter.stamina}
              onChange={this.update('stamina')}
            />
            <br></br>
            
            Presence: 
            <input
              type="number"
              defaultValue={currentCharacter.presence}
              onChange={this.update('presence')}
            />
            <br></br>
            
            Communication: 
            <input
              type="number"
              defaultValue={currentCharacter.communication}
              onChange={this.update('communication')}
            />
            <br></br>
            
            Dexterity: 
            <input
              type="number"
              defaultValue={currentCharacter.dexterity}
              onChange={this.update('dexterity')}
            />
            <br></br>
            
            Quickness: 
            <input
              type="number"
              defaultValue={currentCharacter.quickness}
              onChange={this.update('quickness')}
            />
            <br></br>
            
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