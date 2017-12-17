import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import { MarvinEditor } from '../../../containers';
import { marvinModal, validateTaskOuery, editCml } from '../../core/actions';
import { URL } from '../../../config';

const mapStateToProps = state => ({
  modal: state.marvinModal,
});

const mapDispatchToProps = (dispatch, props) => ({
  onClose: () => dispatch(marvinModal(false)),
  createTask: data => dispatch(validateTaskOuery(data)).then((result) => {
    if (result.status >= 200 && result.status < 300) {
      props.history.push({
        pathname: URL.VALIDATE,
        search: queryString.stringify({ task: result.transformed.task }),
      });
    }
  }),
  editTask: data => dispatch(editCml(data, true)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MarvinEditor));
