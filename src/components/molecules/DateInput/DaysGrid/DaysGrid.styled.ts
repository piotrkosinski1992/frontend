import styled, { keyframes } from 'styled-components';
import colors from 'styles/colors';
import typography from 'styles/typography';

const moveHorizontally = () => keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0);

  }
  100% {
    transform: scale(1);
  }
`;

export const StyledDaysGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: repeat(7, 1fr);
  width: 308px;

  &.next,
  &.prev {
    animation: ${moveHorizontally()} 0.1s;
  }
`;

export const StyledSquare = styled.span`
  ${typography.body.L};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  color: ${colors.background.NeutralBlack};
  &.nextDay,
  &.prevDay {
    color: ${colors.background.Neutral40};
  }

  &.point {
    ${typography.body.bold.L};
    border-radius: 4px;
    background-color: ${colors.background.Primary40};
    color: ${colors.background.NeutralWhite};
    transition: 0.2s ease-in;
  }
`;
