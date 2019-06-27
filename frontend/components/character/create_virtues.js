import React from 'react';

class CharacterCreateVirtues extends React.Component {
 constructor(props) {
   super(props);

   this.state = {
    currentCharacter: null,
    virtues: null,
    flaws: null,
   };

   this.handleSubmit = this.handleSubmit.bind(this);
   this.update = this.update.bind(this)
 } 

 componentDidMount() {
    this.props.characterId === null  ? '' :
      this.props.requestCharacter(this.props.characterId)
        .then((response) => this.setState({
          currentCharacter: response.character,
    }));

    this.props.requestAllVirtues()
      .then((response) => this.setState({
        virtues: response.virtues,
    }));

    this.props.requestAllFlaws()
      .then((response) => this.setState({
        flaws: response.flaws,
    }));

    console.log("!!!!!")
    console.log(this.props)
    console.log("!!!!!")
    console.log(this.state)
    console.log("!!!!!")
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
    };
  }

  render () {

    const { currentCharacter } = this.state;

    return (
      <div>
        <p>Virtues</p>
        <hr></hr>
        { this.state.virtues === null ? '' : this.state.virtues.map( virtue => 
          <ul key={virtue.id}>
            <li>
              {virtue.name}
              <br></br>
            </li>
          </ul>
        )}
        <hr></hr>

        <br></br>
        <p>Flaws</p>
        { this.state.flaws === null ? '' : this.state.flaws.map( flaw => 
        <ul key={flaw.id}>
          <li>
            {flaw.name}
          </li>
        </ul>
        )}
      </div>
    )
  }
};

export default CharacterCreateVirtues;