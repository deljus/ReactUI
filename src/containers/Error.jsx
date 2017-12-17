import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    z-index: 1;
    overflow: hidden;
    position: absolute;
    display: flex;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
    background: rgba(255,255,255,0.4)
`;

const Content = styled.div`
    position: relative;
    width: 300px;
`;

const ButtonBack = styled.button`
    float: left;
`;

const ButtonUpdate = styled.button`
    float: right;
`;

const Message = styled.div`
    font-size: 20px;
    padding-bottom: 20px;
`;


const Error = ({ message, backBtn, refreshBtn }) => (
  <Container>
    <Content>
      <Message>
        {message}
      </Message>
      <ButtonBack
        className="btn btn-default"
        onClick={backBtn}
      >
        <span className="glyphicon glyphicon-chevron-left" />
          &nbsp;
                Back
      </ButtonBack>
      <ButtonUpdate
        className="btn btn-primary"
        onClick={refreshBtn}
      >
        <span className="glyphicon glyphicon-repeat" />
            &nbsp;
                Refresh
      </ButtonUpdate>
    </Content>
  </Container>
);

Error.propTypes = {
  message: PropTypes.string,
  backBtn: PropTypes.func.isRequired,
  refreshBtn: PropTypes.func.isRequired,
};

Error.defaultProps = {
  message: "The structure you selected is not yet ready. You can refresh the page by clicking on the 'refresh' button or return to the home page by clicking the 'back' button.",
};

export default Error;
