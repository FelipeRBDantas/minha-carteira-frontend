import React from "react";

import { Container } from './styles';

interface Props {
  children: React.ReactNode;
}  

const Content: React.FC<Props> = ({ children }: Props) => {
  return (
    <Container>
      { children }
    </Container>
  );
}

export default Content;
