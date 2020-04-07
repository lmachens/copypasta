import React from 'react';

import PropTypes from 'prop-types';
import Checkbox from './Checkbox';

export default function EncryptCheckbox(props) {
  return <Checkbox label="Encrypt my pasta:" {...props} />;
}

EncryptCheckbox.propTypes = {
  value: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
};
