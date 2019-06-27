import React from 'react';

const CharacterCreateVirtue = (props) => (
  <ul className="create-virtue">
    <label>
      <li>
        Virtue Name: { props.virtue.name }
        <br></br>
        Virtue Type: { props.virtue.virtue_type }
        <input type="checkbox"></input>
      </li>
    </label>
    <hr></hr>
  </ul>
)

export default CharacterCreateVirtue;