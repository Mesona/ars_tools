import React from 'react';

const CharacterCreateFlaw = (props) => (
  <ul className="create-flaw">
    <li>
      { props.flaw.name }
      <br></br>
      <hr></hr>
    </li>
  </ul>
)

export default CharacterCreateFlaw;