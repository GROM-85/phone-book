import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width:100%;
  display: flex;
  justify-content: flex-start;
  gap: 30px;
  padding: 20px 26px;
  flex-direction: ${({width})=> (width >=860 ? 'row': 'column')};
  
`;

export const NavLinkStyled = styled(NavLink)`
  position: relative;
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;

  &:before {
    content: '';
    height: 2px;
    width: 100%;
    position: absolute;
    bottom: 2px;
    background-color: white;
    transform: scale(0);
    transition: all 0.25s ease;
  }

  &:hover::before,
  &:focus::before {
    color:currentColor;
    transform: scale(1);
  }
  &:focus,
  &:hover{
    color:white;
  }
`;
