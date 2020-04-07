import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';

function EmbedCheck(props) {
  return <Checkbox label="Should your pasta be embeddable?" {...props} />;
}

EmbedCheck.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
};

export default EmbedCheck;
