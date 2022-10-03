import React, { useMemo } from "react";

// COMPONENTS
import CountUp from 'react-countup';

// STYLES

import { Container } from './styles';

// ASSETS

import dollarImg from '@assets/dollar.svg';

import arrowUpImg from '@assets/arrow-up.svg';

import arrowDownImg from '@assets/arrow-down.svg';

interface IWalletBoxProps {
  title: string;
  amount: number;
  footerLabel: string;
  icon?: 'dolar' | 'arrowUp' | 'arrowDown';
  color: string;
}  

const WalletBox: React.FC<IWalletBoxProps> = ({ 
  title,
  amount,
  footerLabel,
  icon,
  color
}: IWalletBoxProps) => {
  const handleIconSelected = useMemo(() => {
    return {
      'dolar': dollarImg,
      'arrowUp': arrowUpImg,
      'arrowDown': arrowDownImg
    };
  }, []);

  return (
    <Container color={ color }>
      <span>{ title }</span>
      <h1>
        <strong>R$ </strong>
        <CountUp 
          end={ amount } 
          separator="."
          decimal=","
          decimals={ 2 }
        />
      </h1>
      <small>{ footerLabel }</small>
      { icon && <img src={ handleIconSelected[icon] } alt={ title } /> }
    </Container>
  );
}

export default WalletBox;
