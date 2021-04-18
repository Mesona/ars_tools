import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { requestAllVirtues } from '../../../actions/virtue_actions';
import { requestAllFlaws } from '../../../actions/flaw_actions';
// import CharacterCreateVirtues from './test_virtues';

const mapDispatchToProps = dispatch => ({
  requestAllVirtues: () => dispatch(requestAllVirtues()),
  requestAllFlaws: () => dispatch(requestAllFlaws()),
});




import React from 'react';
import CharacterCreatePerks from './create_perks';

class CharacterEstablishPerks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      perks: null,
      classifications: [],
      perkType: null,
      unpause: false,
    };

    this.setClassifications = this.setClassifications.bind(this);
    this.unpauseRender = this.unpauseRender.bind(this);
  } 

  componentDidMount() {
    console.log("TEST VIRTUES PROPS:", this.props);
    if (this.props.history.location.pathname.includes('virtues')) {
      this.setState({perkType: "virtues"});
      this.props.requestAllVirtues()
        .then(response => this.setClassifications(response, "virtues"));
    } else if (this.props.history.location.pathname.includes('flaws')) {
      this.setState({perkType: "flaws"});
      this.props.requestAllFlaws()
        .then(response => this.setClassifications(response, "flaws"));
    }

  }

  setClassifications(response, perkType) {
    let perksArray = [];
    let classifications = [];
    
    if (perkType === "virtues") {
      for (let i = 0; i < response.virtues.length; i++) {
        let this_virtue = response.virtues[i];
        perksArray.push(this_virtue);
        if (!classifications.includes(this_virtue.virtue_type) && this_virtue.virtue_type !== "") {
          classifications.push(this_virtue.virtue_type);
        }      
      }
    } else {
      for (let i = 0; i < response.flaws.length; i++) {
        let this_flaw = response.flaws[i]
        perksArray.push(this_flaw);
        if (!classifications.includes(this_flaw.flaw_type) && this_flaw.flaw_type !== "") {
          classifications.push(this_flaw.flaw_type);
        }      
      }
    }
    
    this.setState({
      perks: perksArray,
      classifications: classifications
    }, () => {
      console.log("TEST VIRTUES STATE:", this.state)
      this.unpauseRender();
    });
 }

 unpauseRender() {
  //  This is a dumb function that prevents the child components
  // from rendering too soon, causing all kinds of errors because
  // setState is asynchronous
   this.setState({ unpause: true });
 }

  render () {
    if (this.state.unpause === false) {
      return (
        <>
          Loaaaaaaaaaading . . .
        </>
      )}
    else { 
      return (
        <>
          {this.state.perkType === "virtues" ?
            <CharacterCreatePerks
              perkType={"virtue"}
              perks={this.state.perks}
              classifications={this.state.classifications}
            />
          :
            <CharacterCreatePerks
              perkType={"flaw"}
              perks={this.state.perks}
              classifications={this.state.classifications}
            />
          }
        </>
      )
    }
  }
};

export default withRouter(connect(null, mapDispatchToProps)(CharacterEstablishPerks));