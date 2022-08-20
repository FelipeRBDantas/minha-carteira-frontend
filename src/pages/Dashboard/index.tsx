import React, { useEffect, useMemo, useState } from "react";

// COMPONENTS COMMON

import ContentHeader from "@components/ContentHeader";

import SelectInput from "@components/SelectInput";

import WalletBox from '@components/WalletBox';

import MessageBox from '@components/MessageBox';

// ASSETS

import happyImg from '@assets/happy.svg';

import sadImg from '@assets/sad.svg';

import grinningImg from '@assets/grinning.svg';

// STORES

import { Expanses, Gains, Months } from "@store/enums/enum";

import { ISelectInputProps } from "@store/types/types";

// UTILS

import { compareMonth, compareYear } from "@/utils/dateUtil";

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

  const totalExpanses = useMemo(() => {
    return Expanses
      .filter( item => compareMonth(item.date, monthSelected) && compareYear(item.date, yearSelected) )
      .reduce((previousValue, currentValue) => previousValue + Number(currentValue.amount), 0);
  }, [ monthSelected, yearSelected ]);

  const totalGains = useMemo(() => {
    return Gains
      .filter( item => compareMonth(item.date, monthSelected) && compareYear(item.date, yearSelected) )
      .reduce((previousValue, currentValue) => previousValue + Number(currentValue.amount), 0);
  }, [ monthSelected, yearSelected ]);

  const totalBalance = useMemo(() => {
    return totalGains - totalExpanses;
  }, [ totalExpanses, totalGains ]);

  const message = useMemo(() => {
    if (totalBalance < 0) {
      return {
        title: "Que triste!",
        description: "Neste mês, você gastou mais do que deveria.",
        footerText: "Verifique seus gastos e tente cortar algumas coisas desnecessárias.",
        icon: sadImg
      };
    } else if (totalBalance === 0) {
      return {
        title: "Ufaa!",
        description: "Neste mês, você gastou exatamente o que ganhou.",
        footerText: "Tenha cuidado. No próximo mês tente poupar o seu dinheiro.",
        icon: grinningImg
      };
    } else {
      return {
        title: "Muito bem!",
        description: "Sua carteira está positiva!",
        footerText: "Continue assim. Considere investir o seu saldo.",
        icon: happyImg
      };
    }
  }, [ totalBalance ]);

  useEffect(() => {
    if (years && years.length > 0) {
      setYearSelected(years[0].value.toString());
      setMonthSelected(Months[0].value.toString());
    }
  }, [ years ]);

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
          amount={ totalBalance }
          footerLabel={ "atualizado com base nas entradas e saídas" }
          icon="dolar"
          color="#4E41F0"
        />
        <WalletBox 
          title="entradas"
          amount={ totalGains }
          footerLabel={ "atualizado com base nas entradas e saídas" }
          icon="arrowUp"
          color="#F7931B"
        />
        <WalletBox 
          title="saídas"
          amount={ totalExpanses }
          footerLabel={ "atualizado com base nas entradas e saídas" }
          icon="arrowDown"
          color="#E44C4E"
        />

        <MessageBox 
          title={ message.title }
          description={ message.description }
          footerText={ message.footerText }
          icon={ message.icon }
        />
      </Content>
    </Container>
  );
}

export default Dashboard;
