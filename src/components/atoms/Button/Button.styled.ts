import styled from "styled-components";
import typography from 'styles/typography';
import colors from 'styles/colors';
import { EIconPosition } from './Button.model';

const BaseButton = styled.button<{iconPos: EIconPosition}>`
  padding: 14.5px 24px;
  border-radius: 6px;
  border: none;
  ${typography.body.bold.L}
  display: flex;
  align-items: center;
  font-weight: 600;
  flex-direction: ${({ iconPos }) => iconPos === EIconPosition.RIGHT ? 'row-reverse' : 'row'};
`;

export const FillButton = styled(BaseButton)`
  background-color: ${colors.background.Primary40};
  color: ${colors.text.Primary20};
`;

export const OutlineButton = styled(BaseButton)`
  background-color: ${colors.background.NeutralWhite};
  color: ${colors.text.Primary40};
  border: 1px solid ${colors.text.Primary40};
`;

export const DisableButton = styled(BaseButton)`
  background-color: ${colors.background.Neutral80};
  color: ${colors.background.Neutral40};
`;

export const TransparentButton = styled(BaseButton)`
  background: transparent;
  color: ${colors.text.Primary40};
`;

export const Image = styled.img<{iconPos: EIconPosition}>`
  margin-left: ${({ iconPos: pos }) => (
    pos === EIconPosition.RIGHT ? '16px' : '0'
  )};
  margin-right: ${({ iconPos: pos }) => (
    pos === EIconPosition.LEFT ? '16px' : '0'
  )};

`;
