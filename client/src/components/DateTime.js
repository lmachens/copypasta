import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const DivStyled = styled.div`
  margin: 10px;
  color: #a0a0a0;
`;

function DateTime({ date }) {
  return (
    <DivStyled>
      {date.toLocaleDateString()} - {date.toLocaleTimeString()}
    </DivStyled>
  );
}

DateTime.propTypes = {
  date: PropTypes.instanceOf(Date),
};

export default DateTime;
