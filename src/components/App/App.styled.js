import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
display:flex;
align-items:center;
gap:30px;
padding:30px
`;

export const NavLinkStyled = styled(NavLink)`
    position:relative;
    text-decoration: none;
    color:white;
    display: flex;
    align-items: center;

    &:before{
        content:"";
        height:2px;
        width:100%;
        position:absolute;
        bottom:2px;
        background-color: currentColor;
        transform: scale(0);
        transition: all 0.25s ease; 
    }

    &:hover::before{
        transform:scale(1);
    }

`;

