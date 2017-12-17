import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { MARVIN_PATH_IFRAME, MARVIN_EDITOR_IS_EMPTY } from '../config';
import { exportCmlBase64, clearMarvin, importCml } from '../marvinAPI';
import { MODAL } from '../config';

const Modal = styled.div`
  opacity: ${props => (props.isShow ? 1 : 0)};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${props => (props.isShow ? 100 : -1)};
  overflow: hidden;
  outline: 0;
  background: rgba(0,0,0,0.4);
`;

const Content = styled.div`
    position: relative;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.2);
    outline: 0;
`;

const Body = styled.div`
  position: relative;
  padding: 5px;
`;

const Iframe = styled.iframe`
  border: 0;
`;

const MarvinEditor = ({
  modal,
  onClose,
  editTask,
  createTask,
}) => {
  const submitModal = () => {

    exportCmlBase64(
      (data) => {
        if (data.cml === MARVIN_EDITOR_IS_EMPTY) return false;
        switch (modal.typeAction) {
          case MODAL.CREATE_TASK:
            createTask({ data: data.cml });
            break;
          case MODAL.EDIT_TASK:
            editTask(data);
            break;
        }
        onClose();
      },
    );
  };

  if (modal.visible) {
    if (modal.actionType = MODAL.EDIT_TASK) { importCml(modal.cml); } else { clearMarvin(); }
  }

  return (
    <Modal isShow={modal.visible} role="dialog">
      <div className="modal-dialog modal-lg">
        <Content>
          <div className="modal-header">
            <button
              type="button"
              className="close"
              onClick={onClose}
            >
                            &times;
            </button>
          </div>
          <Body>
            <Iframe
              title="marvinjs"
              id="marvinjs"
              data-toolbars="reaction"
              src={MARVIN_PATH_IFRAME}
              width="100%"
              height={500}
            />
          </Body>
          <div className="modal-footer">
            <Button onClick={() => { submitModal(); }}>Save</Button>
            <Button onClick={onClose}>Discard</Button>
          </div>
        </Content>
      </div>
    </Modal>
  );
};

MarvinEditor.propTypes = {
  modal: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
};

MarvinEditor.defaultProps = {
  modal: null,
};

export default MarvinEditor;
