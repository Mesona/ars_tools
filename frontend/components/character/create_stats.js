import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';


class CharacterCreateStats extends React.Component {
 constructor(props) {
   super(props);

   this.state = {
    currentCharacter: {
      character_type: "",
      name: "",
      // user_id: this.props.currentUser.id,
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

//  componentDidMount() {
//     this.props.characterId === null  ? '' :
//       this.props.requestCharacter(this.props.characterId)
//         .then((response) => this.setState({
//           currentCharacter: response.character,
//     }));
//   }

componentDidMount() {
  // this.props.characterId === null  ? '' :
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
    this.setState({ displayMenu: e.target.id }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
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
              {/* TODO: Fix stat button, because any time ANY of them are clicked, the intelligence dropdown flashes blue as well */}
              <button onClick={this.showDropdownMenu} id="intelligence">{this.state.currentCharacter.intelligence}
                { this.state.displayMenu === "intelligence" ? (
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
              {/* <button onClick={this.showDropdownMenu} id="perception">{this.state.currentCharacter.perception}
                { this.state.displayMenu === "perception" ? (
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
              </button> */}
            </div>
            
            <div>
              <span>Strength:</span>
              <button onClick={this.showDropdownMenu} id="strength">{this.state.currentCharacter.strength}
                { this.state.displayMenu === "strength" ? (
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

            <div>
              <span>Stamina:</span>
              <button onClick={this.showDropdownMenu} id="stamina">{this.state.currentCharacter.stamina}
                { this.state.displayMenu === "stamina" ? (
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

            
            <div>
              <span>Presence:</span>
              <button onClick={this.showDropdownMenu} id="stamina">{this.state.currentCharacter.stamina}
                { this.state.displayMenu === "stamina" ? (
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
            
            <div>
              <span>Communication:</span>
              <button onClick={this.showDropdownMenu} id="communication">{this.state.currentCharacter.communication}
                { this.state.displayMenu === "communication" ? (
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
            
            <div>
              <span>Dexterity:</span>
              <button onClick={this.showDropdownMenu} id="dexterity">{this.state.currentCharacter.dexterity}
                { this.state.displayMenu === "dexterity" ? (
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
            
            <div>
              <span>Quickness:</span>
              <button onClick={this.showDropdownMenu} id="quickness">{this.state.currentCharacter.quickness}
                { this.state.displayMenu === "quickness" ? (
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