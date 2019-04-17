import React from 'react';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {
  render () {
    return (
      <section className="side-sticky">
        <header className="side-bar">
          <div>
            <span className="characters-title">Characters</span>
            <ul>
              <li>New</li>
              <li>Stickied Character 1</li>
              <li>Stickied Character 2</li>
              <li>Stickied Character 3</li>
            </ul>
          </div>
          <div>
            <span className="covenants-title">Covenants</span>
            <ul>
              <li>New</li>
              <li>Stickied Covenant 1</li>
              <li>Stickied Covenant 2</li>
              <li>Stickied Covenant 3</li>
            </ul>
          </div>
          <div>
            <span className="campaigns-title">Campaigns</span>
            <ul>
              <li>New</li>
              <li>Stickied Campaign 1</li>
              <li>Stickied Campaign 2</li>
              <li>Stickied Campaign 3</li>
            </ul>
          </div>
        </header>
      </section>
    );

  }
};

export default SideBar;