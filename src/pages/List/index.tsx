import React from "react";

import ContentHeader from "../../components/ContentHeader";

import SelectInput from "../../components/SelectInput";

import HistoryFinanceCard from "../../components/HistoryFinanceCard";

import { Months, Years, ListItemHistoryFinanceCard } from "../../store/enums/enum";

import { Container, Content, Filters } from "./styles";

import { v4 as uuidv4 } from 'uuid';

const List: React.FC = () => {
    return (
        <Container>
            <ContentHeader title="Saídas" lineColor='#E44C4E'>
                <SelectInput options={ Months } />
                <SelectInput options={ Years } />
            </ContentHeader>

            <Filters>
                <button type="button" className="tag-filter tag-filter-recurrent">
                    Recorrentes
                </button>
                <button type="button" className="tag-filter tag-filter-eventual">
                    Eventuais
                </button>
            </Filters>
            
            <Content>
                { ListItemHistoryFinanceCard && ListItemHistoryFinanceCard.map( item => (
                    <HistoryFinanceCard 
                        key={ uuidv4() }
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
