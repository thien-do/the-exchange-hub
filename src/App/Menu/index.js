import React from 'react';
import styled from 'styled-components';

import Item from './Item';

const Hr = styled.hr`
  border-top: solid 2px hsla(0.0, 0.0%, 88%, 1.0);
  margin: 6px auto;
  width: 50%;
`;

const Container = styled.div`
  background: hsla(0.0, 0.0%, 91.5%, 1.0);
  backdrop-filter: blur(3px);
  box-shadow: 0 12px 36px 0 hsla(0, 0%, 13%, 0.8);
  width: 144px;
  padding: 6px 0;
`;

const Menu = (props) => {
  const panels = [...props.panels]; // avoid manipulate prop
  panels.splice(1, 0, false); // for hr
  panels.splice(6, 0, false); // for hr
  return (
    <Container>
      {panels.map((panel, index) => {
        if (!panel) { return <Hr key={index} />; } // this is hr
        const { name, char, label } = panel;
        const state = props.state[name];
        const toggle = props.toggle[name];
        return <Item key={name} char={char} label={label} state={state} toggle={toggle} />;
      })}
    </Container>
  );
};

export default Menu;
