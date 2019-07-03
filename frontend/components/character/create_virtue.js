import React from 'react';
import UniversalVirtue from './create_virtue_universal';
import UniqueVirtue from './create_virtue_unique';

class CharacterCreateVirtue extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { currentCharacter, virtue } = this.props;

    if (virtue.special === true) {
      return (
        <div>
          <UniqueVirtue currentCharacter={currentCharacter} virtue={virtue} />
          <UniversalVirtue virtue={virtue} />
        </div>
      )
    } else {
      return (
        <div>
          <UniversalVirtue virtue={virtue} />
        </div>
      )
    }
  }

}

export default CharacterCreateVirtue;