import React from 'react';
import { Link } from 'react-router-dom';

class Landing extends React.Component {
  render () {
    return (
      <section className="intro">
        <div onClick={() => console.log(this.props)}>
          <p>Campaigns</p>
          <hr></hr>
        </div>
        <div onClick={() => console.log(this.props)}>
          <p>Characters</p>
          <hr></hr>
        </div>
        <div onClick={() => console.log(this.props)}>
          <p>Covenants</p>
        </div>
      </section>
    );

  }
};

export default Landing;