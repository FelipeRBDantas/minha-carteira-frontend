import React, { useCallback, useEffect, useMemo, useState } from "react";

import { useParams } from "react-router-dom";

// COMPONENTS COMMON

import ContentHeader from "@components/ContentHeader";

import SelectInput from "@components/SelectInput";

import HistoryFinanceCard from "@components/HistoryFinanceCard";

// STORES

import { ListParams, Months, Gains, Expanses, TypeMovement } from "@store/enums/enum";

import { ISelectInputProps } from "@store/types/types";

// STYLES

import { Container, Content, Filters } from "./styles";

// COMPONENTS

import { v4 as uuidv4 } from 'uuid';

// UTILS

import { formatCurrency } from "@utils/numberUtil";

import { compareMonth, compareYear, reverseDate } from "@utils/dateUtil";

interface IData {
  description: string;
  amountFormatted: string;
  frequency: string;
  dateFormatted: string;
  tagColor: string;
}

const List: React.FC = () => {
  const { movementType } = useParams();

  const [data, setData] = useState<IData[]>([]);

  const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1));

  const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));

  const [frequencyFilterSelected, setFrequencyFilterSelected] = useState<string[]>([ 
    TypeMovement.recurrent, TypeMovement.eventual 
  ]);

  const pageData = useMemo(() => {
    return movementType === ListParams.entryBalance ? {
      title: 'Entradas',
      lineColor: '#4E41F0',
      data: Gains
    } : {
      title: 'Saídas',
      lineColor: '#E44C4E',
      data: Expanses
    };
  }, [ movementType ]);

  const years: ISelectInputProps["options"] = useMemo(() => {
    let uniqueYears: number[] = [];

    const { data } = pageData;
      
    data.forEach( item => {
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
  }, [ pageData ]);

  const handleTypeFrequency = useCallback((frquency: string) => {
    return frquency === TypeMovement.recurrent ? '#4E41F0' : '#E44C4E';
  }, []);

  const handleFrequencyClick = useCallback((frequency: string) => {
    const alreadySelected = frequencyFilterSelected.findIndex( item => item === frequency );

    if (alreadySelected >= 0) {
      const filtered = frequencyFilterSelected.filter( item => item !== frequency );

      setFrequencyFilterSelected(filtered);
    } else {
      setFrequencyFilterSelected((prev) => [ ...prev, frequency ]);
    }
  }, [ frequencyFilterSelected ]);

  useEffect(() => {
    const { data } = pageData;

    const filteredDate = data
      .filter(
        item => compareMonth(item.date, monthSelected) && compareYear(item.date, yearSelected) && frequencyFilterSelected.includes(item.frequency)
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
  }, [pageData, monthSelected, yearSelected, setData, handleTypeFrequency, frequencyFilterSelected]);

  useEffect(() => {
    if (years && years.length > 0) {
      setYearSelected(years[0].value.toString());
      setMonthSelected(Months[0].value.toString());
    }
  }, [ years ]);

  return (
    <Container>
      <ContentHeader title={ pageData.title } lineColor={ pageData.lineColor }>
        <SelectInput 
          options={ Months } 
          onChange={ (e) => setMonthSelected(e.target.value) } 
          value={ monthSelected } 
          labelEmpty="Mês não informado" 
        />
        <SelectInput 
          options={ years } 
          onChange={ (e) => setYearSelected(e.target.value) } 
          value={ yearSelected } 
          labelEmpty="Ano não informado" 
        />
      </ContentHeader>

      <Filters>
        <button 
          type="button" 
          className={ `tag-filter tag-filter-recurrent ${ frequencyFilterSelected.includes(TypeMovement.recurrent) && 'tag-actived' }` } 
          onClick={ () => handleFrequencyClick(TypeMovement.recurrent) }
        >
          Recorrentes
        </button>
        <button 
          type="button" 
          className={ `tag-filter tag-filter-eventual ${ frequencyFilterSelected.includes(TypeMovement.eventual) && 'tag-actived' }` } 
          onClick={ () => handleFrequencyClick(TypeMovement.eventual) }
        >
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
