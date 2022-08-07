import React from "react";

import { v4 as uuidv4 } from 'uuid';

import { ISelectInputProps } from "../../store/types/types";

import { Container } from './styles';

const SelectInput: React.FC<ISelectInputProps> = ({ options, onChange, value }) => {
    return (
        <Container>
            <select onChange={ onChange } value={ value }>
                {
                    options.map((option) => (
                        <option key={ uuidv4() } value={ option.value }>{ option.label }</option>
                    ))
                }
            </select>
        </Container>
    );
}

export default SelectInput;
