import { connect } from 'react-redux';
import { compose } from 'redux';
import { connectRequest, querySelectors, errorSelectors } from 'redux-query';
import { withRouter } from 'react-router-dom';
import { marvinModal, resultTaskOuery, validateTaskOuery, addHistory } from '../../core/actions';
import { getModels, getTasks } from '../../core/queries';
import ValidatePage from './ValidatePage';
import queryString from 'query-string';
import { MODAL, CONST, URL } from '../../../config';


const mapStateToProps = state => ({
  task: state.task,
  models: state.entities.models,
  isLoading: querySelectors.isPending(state.queries, getTasks()),
  errorRequest: errorSelectors.responseBody(state.errors, getTasks()),
});

const mapDispatchToProps = (dispatch, props) => ({
  openEditModal: cml => dispatch(marvinModal(true, MODAL.EDIT_TASK, cml)),
  onRevalidate: (cml) => {
    dispatch(validateTaskOuery({ data: cml })).then((result) => {
      if (result.status >= 200 && result.status < 300) {
        props.history.push({
          pathname: URL.VALIDATE,
          search: queryString.stringify({ task: result.transformed.task }),
        });
        props.forceRequest();
      }
    });
  },
  onContinue: (data, dataHistory) => {
    dispatch(resultTaskOuery(data)).then((result) => {
      if (result.status >= 200 && result.status < 300) {
        props.history.push({
          pathname: URL.RESULT,
          search: queryString.stringify({ task: result.transformed.task }),
        });
        dataHistory.url = props.history.location;
        dispatch(addHistory(dataHistory));
      }
    });
  },
});

export default withRouter(compose(
  connectRequest(getModels),
  connectRequest(getTasks), connect(mapStateToProps, mapDispatchToProps))(ValidatePage));
