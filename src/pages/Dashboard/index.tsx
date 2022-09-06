import React, { useEffect, useMemo, useState } from "react";

// COMPONENTS COMMON

import ContentHeader from "@components/ContentHeader";

import SelectInput from "@components/SelectInput";

import WalletBox from '@components/WalletBox';

import MessageBox from '@components/MessageBox';

import PieChartBox from '@components/PieChartBox';

import HistoryBox from '@components/HistoryBox';

// ASSETS

import happyImg from '@assets/happy.svg';

import sadImg from '@assets/sad.svg';

import grinningImg from '@assets/grinning.svg';

// STORES

import { Expanses, Gains, Months, TypeMovement } from "@store/enums/enum";

import { ISelectInputProps } from "@store/types";

// UTILS

import { average } from "@utils/numberUtil";

import { compareMinorOrEqualMonth, compareMinorYear, compareMonth, compareYear } from "@utils/dateUtil";

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

  const relationExpansesVersusGains = useMemo(() => {
    const total = totalGains + totalExpanses;

    const percentGains = Number(average(totalGains, total));

    const percentExpanses = Number(average(totalExpanses, total));

    const data = [
      {
        name: "Entradas",
        color: "#E44C4E",
        value: totalGains,
        percent: Number(percentGains.toFixed(1))
      },
      {
        name: "Saídas",
        color: "#F7931B",
        value: totalExpanses,
        percent: Number(percentExpanses.toFixed(1))
      }
    ];

    return data;
  }, [ totalExpanses, totalGains ]);

  const historyData = useMemo(() => {
    return Months
      .map((_, month) => {
        let amountEntry = Gains.filter( item => compareMonth(item.date, String(month + 1)) && compareYear(item.date, yearSelected) )
          .reduce((previousValue, currentValue) => previousValue + Number(currentValue.amount), 0);

        let amountOutput = Expanses.filter( item => compareMonth(item.date, String(month + 1)) && compareYear(item.date, yearSelected) )
          .reduce((previousValue, currentValue) => previousValue + Number(currentValue.amount), 0);

        return {
          monthNumber: month,
          month: Months[month].label.substr(0, 3),
          amountEntry,
          amountOutput
        };
      })
      .filter( item => (compareMinorOrEqualMonth(null, String(item.monthNumber)) && compareYear(null, yearSelected)) || compareMinorYear(null, yearSelected) );
  }, [ yearSelected ]);

  const relationExpansesRecurrentVersusEventual = useMemo(() => {
    let amountRecurrent = 0;

    let amountEventual = 0;

    Expanses
      .filter((item) => compareMonth(item.date, (Number(monthSelected) + 1).toString()) && compareYear(item.date, yearSelected))
      .forEach((expanse) => {
        if (expanse.frequency === TypeMovement.recurrent) {
          return amountRecurrent += Number(expanse.amount);
        }

        if (expanse.frequency === TypeMovement.eventual) {
          return amountEventual += Number(expanse.amount);
        }
      });

      const total = amountRecurrent + amountEventual;

      const percentRecurrent = average(amountRecurrent, total);
      
      const percentEventual = average(amountEventual, total);

      return [
        {
          name: 'Recorrentes',
          amount: amountRecurrent,
          percent: Number(percentRecurrent),
          color: "#F7931B"
        },
        {
          name: 'Eventuais',
          amount: amountEventual,
          percent: Number(percentEventual),
          color: "#E44C4E"
        }
      ];
  }, [ monthSelected, yearSelected ]);

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

        <PieChartBox data={ relationExpansesVersusGains } />

        <HistoryBox data={ historyData } lineColorAmountEntry="#F7931B" lineColorAmountOutput="#E44C4E" />
      </Content>
    </Container>
  );
}

export default Dashboard;
