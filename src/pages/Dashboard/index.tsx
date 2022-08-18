import React, { useMemo, useState } from "react";

import ContentHeader from "../../components/ContentHeader";

import SelectInput from "../../components/SelectInput";

import { Expanses, Gains, Months } from "../../store/enums/enum";

import { ISelectInputProps } from "../../store/types/types";

import { Container } from "./styles";

const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1));

  const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));

  const years: ISelectInputProps["options"] = useMemo(() => {
    let uniqueYears: number[] = [];
      
    [...Expanses, ...Gains].forEach( item => {
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
  }, []);

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor='#F7931B'>
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
    </Container>
  );
}

export default Dashboard;
