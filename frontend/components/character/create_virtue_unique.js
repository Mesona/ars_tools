import React from 'react';

class UniqueVirtue extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { virtue } = this.props;

    
    return (
      <div>
        <UniversalVirtue virtue={virtue} />
      </div>
    )
  }

}

export default UniqueVirtue;