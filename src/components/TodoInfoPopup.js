import React from 'react';
import styled from 'styled-components';

const Popup = styled.div`
  width: 400px;
  height: 400px;
  margin: auto;
  position: absolute;
  top: 0; 
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #eee;
  box-shadow: 0px 0px 5px #333;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.div`
  min-width: 30px;
  height: 30px;
  color: #eee;
  align-self: flex-end;
  background-color: #444;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  margin: 5px;
  box-shadow: 0px 0px 8px #333;
  transition: box-shadow 0.1s;

  &:hover {
    background-color: #333;
    box-shadow: 0px 0px 6px #333;

  }
  &:active {
    background-color: #222;
    box-shadow: 0px 0px 1px #222;
  }
`;

const Title = styled.span`
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
`;

const TodoPopup = (props) => {
  if (!props.todo) {
    return null;
  }
  return (
      <Popup>
        <CloseButton onClick={() => props.onCloseClick()}> x </CloseButton>
        <Title>Popup info </Title>
      </Popup>
    )
}

export default TodoPopup;