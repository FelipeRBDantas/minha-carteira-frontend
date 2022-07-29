import React from "react";

import { ISelectInputProps } from "../../store/types/types";

import { Container } from './styles';

const SelectInput: React.FC<ISelectInputProps> = ({ options }) => {
    return (
        <Container>
            <select>
                {
                    options.map(option => (
                        <option value={ option.value }>{ option.label }</option>
                    ))
                }
            </select>
        </Container>
    );
}

export default SelectInput;
