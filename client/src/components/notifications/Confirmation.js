import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Notification from './Notification';

const ConfirmationNotification = styled(Notification)`
  border: 5px solid #a9dc76;
`;

function Confirmation({ children }) {
  return (
    <ConfirmationNotification>
      <div>
        <span role="img" aria-label="confirmation-emoji">
          🎉🎉🎉
        </span>
      </div>
      {children}
    </ConfirmationNotification>
  );
}

Confirmation.propTypes = {
  children: PropTypes.node,
};

export default Confirmation;
