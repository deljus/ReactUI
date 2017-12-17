import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SearchInputView } from '../WrappedContainers';
import { cmlToBase64, importCml } from '../../../marvinAPI';

const IndexPageWrapper = styled.div`
    position: absolute;
    top: 40%;
`;

const searchFormSubmit = (text) => {
  // заглушка
};

const IndexPage = ({
  openMarvinModal,
}) => (
  <IndexPageWrapper className="container seach-container">
    <SearchInputView />
  </IndexPageWrapper>
);

IndexPage.propTypes = {
  openMarvinModal: PropTypes.func.isRequired,
};

export default IndexPage;
