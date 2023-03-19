import styled from '@emotion/styled';
import { RotatingLines } from 'react-loader-spinner';

const StyledFallBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: '#0003';
`;

export const Fallback = () => {
  return (
    <StyledFallBack>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </StyledFallBack>
  );
};
