import React, { useCallback, useEffect, useMemo, useState } from "react";

import ContentHeader from "../../components/ContentHeader";

import SelectInput from "../../components/SelectInput";

import HistoryFinanceCard from "../../components/HistoryFinanceCard";

import { ListParams, Months, Years, Gains, Expanses } from "../../store/enums/enum";

import { Container, Content, Filters } from "./styles";

import { v4 as uuidv4 } from 'uuid';

import { useParams } from "react-router-dom";

import { formatCurrency } from "../../utils/numberUtil";

import { reverseDate } from "../../utils/stringUtil";

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

    const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1));

    const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));

    const contentHeaderProps = useMemo(() => {
        return type === ListParams.entryBalance ? {
            title: 'Entradas',
            lineColor: '#F7931B'
        } : {
            title: 'Saídas',
            lineColor: '#E44C4E'
        };
    }, [ type ]);

    const listData = useMemo(() => {
        return type === ListParams.entryBalance ? Gains : Expanses;
    }, [ type ]);

    const handleTypeFrequency = useCallback((frquency: string) => {
        return frquency === 'recorrente' ? '#4E41F0' : '#E44C4E';
    }, []);

    useEffect(() => {
      const filteredDate = listData.filter( item => {
        const date = new Date(item.date);

        const month = String(date.getMonth() + 1);

        const year = String(date.getFullYear());

        return month === monthSelected && year === yearSelected;

      });

      const formattedData = filteredDate.map( item => {
        return {
            description: item.description,
            amountFormatted: formatCurrency(item.amount),
            frequency: item.frequency,
            dateFormatted: reverseDate(item.date),
            tagColor: handleTypeFrequency(item.frequency),
        }
      });

      setData(formattedData);
    }, [ listData, monthSelected, yearSelected, setData ]);

    return (
        <Container>
            <ContentHeader title={ contentHeaderProps.title } lineColor={ contentHeaderProps.lineColor }>
                <SelectInput options={ Months } onChange={ (e) => setMonthSelected(e.target.value) } value={ monthSelected } />
                <SelectInput options={ Years } onChange={ (e) => setYearSelected(e.target.value) } value={ yearSelected }  />
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
                        amount={ item.amountFormatted }
                        />
                    ))
                }
            </Content>
        </Container>
    );
}

export default List;
