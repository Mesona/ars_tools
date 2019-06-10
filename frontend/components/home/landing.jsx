import React from 'react';
import { Link } from 'react-router-dom';

class Landing extends React.Component {
  render () {
    return (
      <section className="intro">
        <div onClick={() => console.log('props: ' + this.props)}>
          <p>Test</p>
        </div>
      </section>
    );

  }
};

export default Landing;