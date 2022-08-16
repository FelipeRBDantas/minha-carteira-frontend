import React, { useCallback, useEffect, useMemo, useState } from "react";

import ContentHeader from "../../components/ContentHeader";

import SelectInput from "../../components/SelectInput";

import HistoryFinanceCard from "../../components/HistoryFinanceCard";

import { ListParams, Months, Gains, Expanses } from "../../store/enums/enum";

import { Container, Content, Filters } from "./styles";

import { v4 as uuidv4 } from 'uuid';

import { useParams } from "react-router-dom";

import { formatCurrency } from "../../utils/numberUtil";

import { compareMonth, comparYear, reverseDate } from "../../utils/dateUtil";

import { ISelectInputProps } from "../../store/types/types";

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

    const years: ISelectInputProps["options"] = useMemo(() => {
      let uniqueYears: number[] = [];
      
      listData.forEach( item => {
        const date = new Date(item.date);

        const year = date.getFullYear();

        if (!uniqueYears.includes(year)) {
          uniqueYears.push(year);
        }
      });

      return uniqueYears.map( year => {
        return {
          value: year,
          label: year,
        }
      });
    }, [ listData ]);

    const handleTypeFrequency = useCallback((frquency: string) => {
        return frquency === 'recorrente' ? '#4E41F0' : '#E44C4E';
    }, []);

    useEffect(() => {
      const filteredDate = listData
        .filter(
          item => compareMonth(item.date, monthSelected) && comparYear(item.date, yearSelected)
        )
        .map( item => {
          return {
              description: item.description,
              amountFormatted: formatCurrency(item.amount),
              frequency: item.frequency,
              dateFormatted: reverseDate(item.date),
              tagColor: handleTypeFrequency(item.frequency),
          }
        });

      setData(filteredDate);
    }, [listData, monthSelected, yearSelected, setData, handleTypeFrequency]);

    return (
        <Container>
            <ContentHeader title={ contentHeaderProps.title } lineColor={ contentHeaderProps.lineColor }>
                <SelectInput options={ Months } onChange={ (e) => setMonthSelected(e.target.value) } value={ monthSelected } labelEmpty="Mês não informado" />
                <SelectInput options={ years } onChange={ (e) => setYearSelected(e.target.value) } value={ yearSelected } labelEmpty="Ano não informado" />
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
