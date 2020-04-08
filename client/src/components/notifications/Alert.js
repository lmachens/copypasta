import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Notification from './Notification';

const AlertNotification = styled(Notification)`
  border: 5px solid red;
`;

function Alert({ children }) {
  return (
    <AlertNotification>
      <div>
        <span role="img" aria-label="alert-emoji">
          ☠️☠️☠️
        </span>
      </div>
      {children}
    </AlertNotification>
  );
}

Alert.propTypes = {
  children: PropTypes.node,
};

export default Alert;
