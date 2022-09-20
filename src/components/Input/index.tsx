import React, { InputHTMLAttributes } from "react";

// STYLES

import { 
  InputContainer
} from '@components/Input/styles';

type IInputProps = InputHTMLAttributes<HTMLInputElement>;

const InputCommon: React.FC<IInputProps> = ({ ...rest }) => {
  return (
    <InputContainer { ...rest } />
  );
}

export default InputCommon;
