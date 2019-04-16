import React from 'react';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {
  render () {
    return (
      <section className="side-sticky">
        <header className="side-bar">
          <div>Characters</div>
          <div>Covenents</div>
          <div>Campaigns</div>
        </header>
      </section>
    );

  }
};

export default SideBar;