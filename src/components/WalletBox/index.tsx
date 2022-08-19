import React from "react";

import { Container } from './styles';

import dollarImg from '@assets/dollar.svg';

import arrowUpImg from '@assets/dollar.svg';

import arrowDownImg from '@assets/dollar.svg';

interface IWalletBoxProps {
  title: string;
  amount: string;
  footerLabel: string;
  icon: string;
}  

const WalletBox: React.FC<IWalletBoxProps> = ({ 
  title,
  amount,
  footerLabel,
  icon
}: IWalletBoxProps) => {
  return (
    <Container>
      
    </Container>
  );
}

export default WalletBox;
