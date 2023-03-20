import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 30px;
  padding: 10px;
  margin: 0 auto;
  padding: 0 16px;

  @media screen and (min-width: 360px) {
    width: 360px;
  }

  @media screen and (min-width: 480px) {
    width: 480px;
    padding: 0 24px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }
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
    background-color: currentColor;
    transform: scale(0);
    transition: all 0.25s ease;
  }

  &:hover::before {
    transform: scale(1);
  }
`;
