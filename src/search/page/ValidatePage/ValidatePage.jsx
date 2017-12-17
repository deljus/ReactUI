import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loader, Error, Thumbnail, SelectModel } from '../../../containers';
import styled from 'styled-components';
import 'react-select/dist/react-select.css';
import { URL, CONST } from '../../../config';
import { message } from 'antd';
import 'antd/lib/message/style/css';


const ButtonBack = styled.button`
    float: left;
`;

const ButtonContinue = styled.button`
    float: right;
`;

const Live = styled.div`
  padding-bottom: 20px;
`;

const addModelList = (type, models) => {
  if (type === CONST.StructureType.MOLECULE) {
    return models.filter(o => o.type === CONST.ModelType.MOLECULE_SEARCHING);
  } else if (type === CONST.StructureType.REACTION) {
    return models.filter(o => o.type === CONST.ModelType.REACTION_SEARCHING);
  }
  return [];
};

class ValidatePage extends Component {
  onContinueBtn() {
    const { task, onContinue } = this.props;
    const model = this.select.selectModel();
    const data = { models: [{ model, data: task.cml }], structure: 1 };
    onContinue(data, { base64: task.base64 });
  }

  render() {
    const { task, models, errorRequest, isLoading, forceRequest, onRevalidate, onContinue, openEditModal, history } = this.props;

    return (
      <div>
        <Loader loaded={isLoading} />

        {errorRequest && errorRequest.message && <Error
          backBtn={() => history.push({ pathname: URL.INDEX })}
          refreshBtn={() => forceRequest()}
        />}

        {!isLoading && !errorRequest.message && task && <div className="container container-search">

          <div className="row">
            <div className="col-md-8">
              <Thumbnail
                cml={task.cml}
                base64={task.base64}
                revalidate={task.revalidate}
                onClickImage={openEditModal}
              />
            </div>
            <div className="col-md-4">
              <SelectModel models={addModelList(task.type, models)} ref={(e) => { this.select = e; }} />
            </div>
            <Live className="col-md-12">
              <hr />
            </Live>
            <Live className="col-md-12">
              <ButtonBack
                className="btn btn-default"
                onClick={() => history.push(URL.INDEX)}
              >
                <span className="glyphicon glyphicon-chevron-left" />&nbsp;
                            Back</ButtonBack>
              {task && task.revalidate ?
                <ButtonContinue
                  className="btn btn-danger"
                  onClick={() => onRevalidate(task.cml)}
                >
                                Revalidate&nbsp;
                  <span className="glyphicon glyphicon-refresh" />
                </ButtonContinue> :
                <ButtonContinue
                  className="btn btn-primary"
                  onClick={() => this.onContinueBtn()}
                >
                                Сontinue&nbsp;
                  <span className="glyphicon glyphicon-chevron-right" />
                </ButtonContinue>}
            </Live>
          </div>
        </div>}
      </div>
    );
  }
}

ValidatePage.propTypes = {
  task: PropTypes.object,
  models: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
  openEditModal: PropTypes.func.isRequired,
  onContinue: PropTypes.func.isRequired,
};

ValidatePage.defaultProps = {
  task: null,
  models: null,
  isLoading: false,
  errorRequest: { message: null },
};

export default ValidatePage;
