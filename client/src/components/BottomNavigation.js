import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Container = styled.ul`
  height: 56px;
  list-style: none;
  display: flex;
  justify-content: center;
  border-top: 1px solid lightgray;
`;

const NavigationItem = styled.li`
  max-width: 168px;
  min-width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  color: ${(props) => (props.active ? 'red' : 'inherit')};
  fill: ${(props) => (props.active ? 'red' : 'inherit')};
`;

function BottomNavigation({ links, value, onItemClick }) {
  return (
    <Container>
      {links.map((link) => (
        <NavigationItem
          key={link.label}
          active={value === link.label}
          onClick={() => onItemClick(link.label)}
        >
          <link.Icon />
        </NavigationItem>
      ))}
    </Container>
  );
}

BottomNavigation.propTypes = {
  links: PropTypes.array,
  value: PropTypes.string,
  onItemClick: PropTypes.func,
};

export default BottomNavigation;
