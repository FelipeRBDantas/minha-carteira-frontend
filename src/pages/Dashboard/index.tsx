import React from "react";

import ContentHeader from "../../components/ContentHeader";

import SelectInput from "../../components/SelectInput";

import { Months, Years } from "../../store/enums/enum";

import { Container } from "./styles";

const Dashboard: React.FC = () => {
    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor='#F7931B'>
                <SelectInput options={ Months } />
                <SelectInput options={ Years } />
            </ContentHeader>
        </Container>
    );
}

export default Dashboard;
