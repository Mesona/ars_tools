import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class CharacterCreateInitial extends React.Component {
 constructor(props) {
   super(props);

   this.state = {
    currentCharacter: {
      character_type: "",
      name: "",
      gender: "",
      user_id: this.props.currentUser.id,
    },
   };

   this.handleSubmit = this.handleSubmit.bind(this);
   this.update = this.update.bind(this);

   this.showDropdownMenu = this.showDropdownMenu.bind(this);
   this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
 } 

 handleSubmit(e) {
    e.preventDefault();
    let currentCharacter = Object.assign({}, this.state.currentCharacter);
    this.props.createCharacter(currentCharacter)
      .then((response) => this.props.history.push(`/characters/new/virtues/${response.character.id}`));
  }

  update(field) {
    return (e) => {
      this.setState({currentCharacter: {...this.state.currentCharacter, [field]: e.currentTarget.value}});
      // if (field === "character_type") {
      //   if (e.currentTarget.value === "mage") {
      //     this.setState({
      //       pages: ["stats", "virtues", "early", "pre-apprenticeship", "apprenticeship", "advanced"],
      //     });
      //   } else {
      //     this.setState({
      //       pages: ["stats", "virtues", "early", "advanced"],
      //     });
      //   }
      // }
    }
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

  render () {

    const { currentCharacter } = this.state;

    return (
      <form className="new-character-setup-form" onSubmit={this.handleSubmit}>

        {/* FIXME: Sanitize character name input */}
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

        {this.state.character_type === "mage" ? 
          <div>
            <label>Hermetic House:
              <select 
                // FIXME: Add hermetic house to character model
                defaultValue={currentCharacter.house} 
                required
                onChange={this.update('gender')}>
                <option value="" disabled defaultValue>Pick One</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>
          </div>
        :
          null
        }

        {/* TODO: Region born, background bio, still in apprenticeship, house association, all will be done in another page */}

        <div>
          {/* <span onClick={this.handleSubmit} className="fake-url">Next</span> */}
          <Link to={`/${this.props.match.path}/virtues/:characterId`} onClick={this.handleSubmit}>Next</Link>
        </div>

        <Link to={`/`}>
          <span className="fake-url">Back</span>
        </Link>

      </form>
    )
  }
};

export default withRouter(CharacterCreateInitial);