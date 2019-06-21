import React from 'react';

class CharacterCreateVirtues extends React.Component {
 constructor(props) {
   super(props);

   this.state = {
    currentCharacter: null,
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
    const currentCharacter = Object.assign({}, this.state);
    this.props.createCharacter(currentCharacter)
      // .then((response) => this.props.history.push(`/character/new/virtues/${response.character.id}`));
      .then((response) => this.props.history.push(`/test/${response.character.id}`));
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
      <div>
        <p>Virtues Test</p>
      </div>
    )
  }
};

export default CharacterCreateVirtues;