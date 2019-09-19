import React from 'react';

const UniversalVirtue = (props) => (
  <React.Fragment>
    { props.virtue.name }
  </React.Fragment>
  // <ul className="universal-virtue">
  //   <li>
  //     Virtue Name: { props.virtue.name }
  //     <br></br>
  //     {/* Virtue Type: { props.virtue.virtue_type } */}
  //     {/* <br></br> */}
  //     {/* Virtue Book: { props.virtue.book } */}
  //   </li>
  // </ul>
)

export default UniversalVirtue;