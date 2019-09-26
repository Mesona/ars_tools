import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { storeVirtue, storeVirtues, storeFlaw, storeFlaws } from '../../../actions/create_virtues_and_flaws_actions';
import UniqueVirtue from './create_virtue_unique';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = dispatch => ({
  storeVirtue: (virtue) => dispatch(storeVirtue(virtue)),
  storeVirtues: (virtues) => dispatch(storeVirtues(virtues)),
  storeFlaw: (flaw) => dispatch(storeFlaw(flaw)),
  storeFlaws: (flaws) => dispatch(storeFlaws(flaws)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UniqueVirtue));