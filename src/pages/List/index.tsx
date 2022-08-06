import React, { useEffect, useMemo, useState } from "react";

import ContentHeader from "../../components/ContentHeader";

import SelectInput from "../../components/SelectInput";

import HistoryFinanceCard from "../../components/HistoryFinanceCard";

import { Months, Years, Gains, Expanses } from "../../store/enums/enum";

import { Container, Content, Filters } from "./styles";

import { v4 as uuidv4 } from 'uuid';

import { useParams } from "react-router-dom";

interface IData {
    description: string;
    amountFormatted: string;
    frequency: string;
    dateFormatted: string;
    tagColor: string;
}

const List: React.FC = () => {
    const { type } = useParams();

    const [data, setData] = useState<IData[]>([]);

    const contentHeaderProps = useMemo(() => {
        return type === 'entry-balance' ? {
            title: 'Entradas',
            lineColor: '#F7931B'
        } : {
            title: 'Saídas',
            lineColor: '#E44C4E'
        };
    }, [ type ]);

    const listData = useMemo(() => {
        return type === 'entry-balance' ? Gains : Expanses;
    }, [ type ]);

    useEffect(() => {
        const response = listData.map( item => {
            return {
                description: item.description,
                amountFormatted: item.amount,
                frequency: item.frequency,
                dateFormatted: item.date,
                tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E',
            }
        });

        setData(response);
    }, []);

    return (
        <Container>
            <ContentHeader title={ contentHeaderProps.title } lineColor={ contentHeaderProps.lineColor }>
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
                { data && data.map( item => (
                    <HistoryFinanceCard 
                        key={ uuidv4() }
                        tagColor={ item.tagColor }
                        title={ item.description }
                        subtitle={ item.dateFormatted }
                        amount={`R$ ${ item.amountFormatted }`}
                        />
                    ))
                }
            </Content>
        </Container>
    );
}

export default List;
