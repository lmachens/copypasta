import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Container = styled.div`
  color: #a0a0a0;
`;

function Author({ name }) {
  return <Container>Author: {name}</Container>;
}

Author.propTypes = {
  name: PropTypes.string,
};

export default Author;
