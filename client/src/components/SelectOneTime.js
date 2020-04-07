import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';

const Container = styled.div`
  margin: 15px 0;
  text-align: center;
`;

function SelectOneTime(props) {
  return (
    <Container>
      <legend>Should your pasta be available for only one view?</legend>
      <Checkbox label="Yes, that sounds cool" {...props} />
    </Container>
  );
}

SelectOneTime.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
};

export default SelectOneTime;
