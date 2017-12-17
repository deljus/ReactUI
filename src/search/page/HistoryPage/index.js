import { connect } from 'react-redux';
import HistoryPage from './HistoryPage';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  histories: state.history,
});


export default withRouter(connect(mapStateToProps)(HistoryPage));
