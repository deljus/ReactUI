import { connect } from 'react-redux';
import { compose } from 'redux';
import queryString from 'query-string';
import { connectRequest, querySelectors, errorSelectors } from 'redux-query';
import { withRouter } from 'react-router-dom';
import { getResults } from '../../core/queries';
import ResultPage from './ResultPage';
import { validateTaskOuery } from '../../core/actions';
import { URL } from '../../../config';

const mapStateToProps = state => ({
  results: state.results,
  isLoading: querySelectors.isPending(state.queries, getResults()),
  errorRequest: errorSelectors.responseBody(state.errors, getResults()),
});

const mapDispatchToProps = (dispatch, props) => ({
  onSearchImg: data => dispatch(validateTaskOuery(data)).then((result) => {
    if (result.status >= 200 && result.status < 300) {
      props.history.push({
        pathname: URL.VALIDATE,
        search: queryString.stringify({ task: result.transformed.task }),
      });
    }
  }),
});

export default withRouter(compose(
  connectRequest(getResults), connect(mapStateToProps, mapDispatchToProps))(ResultPage));
