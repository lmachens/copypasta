import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';

function SelectOneTime(props) {
  return (
    <div>
      <legend>Should your pasta be available for only one view?</legend>
      <Checkbox label="Yes, that sounds cool" {...props} />
    </div>
  );
}

SelectOneTime.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
};

export default SelectOneTime;
