import React from "react";

import ContentHeader from "../../components/ContentHeader";

import SelectInput from "../../components/SelectInput";

import HistoryFinanceCard from "../../components/HistoryFinanceCard";

import { ContentHeaderOptions, ListItemHistoryFinanceCard } from "../../store/enums/enum";

import { Container, Content } from "./styles";

const List: React.FC = () => {
    return (
        <Container>
            <ContentHeader title="Saídas" lineColor='#E44C4E'>
                <SelectInput options={ ContentHeaderOptions } />
            </ContentHeader>
            
            <Content>
                { ListItemHistoryFinanceCard && ListItemHistoryFinanceCard.map( item => (
                    <HistoryFinanceCard 
                        tagColor={ item.tagColor }
                        title={ item.title }
                        subtitle={ item.subtitle }
                        amount={`R$ ${ item.amount }`}
                        />
                    ))
                }
            </Content>
        </Container>
    );
}

export default List;
