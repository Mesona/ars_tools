import React from 'react';

const CharacterCreateVirtue = (props) => (
  <ul className="create-virtue">
    <li>
      Virtue Name: { props.virtue.name }
      <br></br>
      Virtue Type: { props.virtue.virtue_type }
    </li>
    <hr></hr>
  </ul>
)

export default CharacterCreateVirtue;