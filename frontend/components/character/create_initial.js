import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';


class CharacterCreateInitial extends React.Component {
 constructor(props) {
   super(props);

   this.state = {
    currentCharacter: {
      characterType: "",
      name: "",
      gender: "",
      user_id: this.props.currentUser.id,
    },
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
      .then((response) => this.props.history.push(`/character/new/virtues/${response.character.id}`));
  }

  update(field) {
    return (e) => {
      this.setState({currentCharacter: {...this.state.currentCharacter, [field]: e.currentTarget.value}});
      if (field === "characterType") {
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

        <div>
          <label>Character Name: 
            <input
              type="string"
              defaultValue={currentCharacter.name}
              onChange={this.update('name')}
            />
          </label>
        </div>

        <div>
          <label>Character Type:
            <select 
              defaultValue={currentCharacter.characterType} 
              required
              onChange={this.update('characterType')}>
              <option value="" disabled defaultValue>Pick One</option>
              <option value="mage">Mage</option>
              <option value="grog">Grog</option>
              <option value="companion">Companion</option>
              <option value="npc">NPC</option>
            </select>
          </label>
        </div>

        <div>
          <label>Character Gender:
            <select 
              defaultValue={currentCharacter.gender} 
              required
              onChange={this.update('gender')}>
              <option value="" disabled defaultValue>Pick One</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
        </div>

        {/* Region born, background bio, still in apprenticeship, house association, all will be done in another page */}

        <NavLink to={`/`}>
          Back
        </NavLink>

      </form>
    )
  }
};

export default withRouter(CharacterCreateInitial);