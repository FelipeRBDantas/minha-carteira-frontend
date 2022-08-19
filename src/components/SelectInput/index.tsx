import React from "react";

// COMPONENTS COMMON

import { v4 as uuidv4 } from 'uuid';

// STORES

import { ISelectInputProps } from "@store/types/types";

// STYLES

import { Container } from './styles';

const SelectInput: React.FC<ISelectInputProps> = ({ options, onChange, value, labelEmpty }) => {
  return (
    <Container>
      <select onChange={ onChange } value={ value } disabled={ options.length === 0 }>
        { options.length === 0 && 
          <option key={ uuidv4() } value=''>{ labelEmpty || 'Selecione...' }</option>
        }

        {
          options && options.map((option) => (
              <option key={ uuidv4() } value={ option.value }>{ option.label }</option>
          ))
        }
      </select>
    </Container>
  );
}

export default SelectInput;
