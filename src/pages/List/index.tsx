import React from "react";

import ContentHeader from "../../components/ContentHeader";

import SelectInput from "../../components/SelectInput";

import { ContentHeaderOptions } from "../../store/enums/enum";

import { Container } from "./styles";

const List: React.FC = () => {
    return (
        <Container>
            <ContentHeader title="Saídas" lineColor='#E44C4E'>
                <SelectInput options={ ContentHeaderOptions } />
            </ContentHeader>
        </Container>
    );
}

export default List;
