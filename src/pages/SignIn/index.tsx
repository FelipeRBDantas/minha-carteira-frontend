import React from "react";

// STYLES

import { Container, Logo, Form, FormTitle } from "@pages/SignIn/styles";

// COMPONENTS

import InputCommon from "@components/Input";

import ButtonCommon from "@components/Button";

// ASSETS

import logoImg from '@assets/logo.svg';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Logo>
        <img src={ logoImg } alt="Minha Carteira" />
        <h2>Minha Carteira</h2>
      </Logo>

      <Form onSubmit={ () => {} }>
        <FormTitle>Entrar</FormTitle>

        <InputCommon 
          type="email"
          placeholder="E-mail"
          required
        />

        <InputCommon 
          type="password"
          placeholder="Senha"
          required
        />

        <ButtonCommon type="submit">Acessar</ButtonCommon>
      </Form>
    </Container>
  );
}

export default SignIn;
