import React, { ButtonHTMLAttributes } from "react";

// STYLES

import { 
  ButtonContainer
} from '@components/Button/styles';

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonCommon: React.FC<IButtonProps> = ({ children, ...rest }) => {
  return (
    <ButtonContainer { ...rest }>
      { children }
    </ButtonContainer>
  );
}

export default ButtonCommon;
