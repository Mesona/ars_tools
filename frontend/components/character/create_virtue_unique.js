import React from 'react';

class UniqueVirtue extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { currentCharacter, virtue } = this.props;
    
    // let stats = [];
    // currentCharacter.stats.forEach( )
    // currentCharacter.stats.each do |stat, value|
    // end
    console.log("!!!!!")
    console.log(this.props)
    console.log("!!!!!")

    switch (virtue.name) {
      case "Improved Characteristics":
        return (
          <ul>
            
          </ul>
        );
      case "Affinity With (Ability)":
        return (
          <div>
            Affinity Test
          </div>
        )
    } 
    return (
      <div>
        {/* <UniversalVirtue virtue={virtue} /> */}
        Oops
      </div>
    )
  }

}

export default UniqueVirtue;