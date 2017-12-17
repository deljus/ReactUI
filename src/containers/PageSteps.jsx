import React from 'react';
import Steps from 'antd/lib/steps';
import 'antd/lib/steps/style/css';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { URL } from '../config';

const Step = Steps.Step;

const WrapperSteps = styled.div`
    padding-bottom: 50px;
`;

const PageSteps = ({ location }) => {
  let currentPage = 0;

  Object.keys(URL).forEach(
    (key, value) => {
      if (URL[key] === location.pathname) currentPage = value;
    },
  );

  return (<WrapperSteps>
    <Steps current={currentPage}>
      <Step title="Start" description="Choosing a structure for searching" />
      <Step title="Validate" description="The choice of model and the correctness of the structure" />
      <Step title="Result" description="Search results" />
    </Steps>
  </WrapperSteps>);
};

PageSteps.propTypes = {
  location: PropTypes.object,
};

export default PageSteps;
