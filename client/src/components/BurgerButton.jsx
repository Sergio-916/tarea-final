

import styled from 'styled-components';

const StyledBurger = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
 
  cursor: pointer;


  div {
    width: 30px;
    height: 3px;
    background-color: ${({ isopen }) => isopen ? '#ccc' : '#fff'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ isopen }) => isopen ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ isopen }) => isopen ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ isopen }) => isopen ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ isopen }) => isopen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const BurgerButton = ({ isopen, handleBurgerClick }) => {
 
  return (
    <StyledBurger isopen={isopen} onClick={handleBurgerClick}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default BurgerButton;
