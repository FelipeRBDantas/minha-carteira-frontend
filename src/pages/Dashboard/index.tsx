import React, { useMemo, useState } from "react";

// COMPONENTS COMMON

import ContentHeader from "@components/ContentHeader";

import SelectInput from "@components/SelectInput";

import WalletBox from '@components/WalletBox';

// STORES

import { Expanses, Gains, Months } from "@store/enums/enum";

import { ISelectInputProps } from "@store/types/types";

// STYLES

import { 
  Container,
  Content
} from "./styles";

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
      
      <Content>
        <WalletBox 
          title="saldo"
          amount={ 150.00 }
          footerLabel={ "atualizado com base nas entradas e saídas" }
          icon="dolar"
          color="#4E41F0"
        />
        <WalletBox 
          title="entradas"
          amount={ 5000.00 }
          footerLabel={ "atualizado com base nas entradas e saídas" }
          icon="arrowUp"
          color="#F7931B"
        />
        <WalletBox 
          title="saídas"
          amount={ 4850.00 }
          footerLabel={ "atualizado com base nas entradas e saídas" }
          icon="arrowDown"
          color="#E44C4E"
        />
      </Content>
    </Container>
  );
}

export default Dashboard;
