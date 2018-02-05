import { connect } from 'react-redux'
import ProgressBar from './../components/ProgressBar';
import { calculatePercentageOfCompletedTasks } from '../utils'

const mapStateToProps = (state) => ({
  percent: calculatePercentageOfCompletedTasks(state.categories),
});

const ProgressBarContainer = connect(
  mapStateToProps,
)(ProgressBar);

export default ProgressBarContainer;
