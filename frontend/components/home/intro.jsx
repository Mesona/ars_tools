import React from 'react';
import { Link } from 'react-router-dom';

class Intro extends React.Component {
  render () {
    return (
      <section className="intro">
        <p>Intro here!  You should not be logged in if you are seeing this</p>
      </section>
    );

  }
};

export default Intro;