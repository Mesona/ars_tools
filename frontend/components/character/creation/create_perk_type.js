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

class CreatePerkType extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      perks: [],
      classifications: [],
      perkType: null,
      unpause: false,
    };

    this.setClassifications = this.setClassifications.bind(this);
    this.unpauseRender = this.unpauseRender.bind(this);
  } 

  componentDidMount() {
    if (this.props.history.location.pathname.includes('virtues')) {
      this.setState({perkType: "virtues"});
      this.props.requestAllVirtues()
        .then(response => this.setState({ perks: response.virtues }, () => {
          this.setClassifications(this.state.perks);
        }));
        // .then(response => this.setClassifications(response, "virtues"));
    } else if (this.props.history.location.pathname.includes('flaws')) {
      this.setState({perkType: "flaws"});
      this.props.requestAllFlaws()
        .then(response => this.setClassifications(response, "flaws"));
    }
  }

  setClassifications(perks) {
    let classifications = [];
    
    for (let i = 0; i < Object.keys(perks).length; i++) {
      let thisPerkIdx = Object.keys(perks)[i];
      let thisPerk = perks[thisPerkIdx];
      if ( ! classifications.includes(thisPerk.perk_type)) {
        classifications.push(thisPerk.perk_type);
      }
    }
    
    this.setState({
      classifications: classifications
    }, () => {
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
          Loading . . .
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

export default withRouter(connect(null, mapDispatchToProps)(CreatePerkType));