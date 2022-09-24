import React, { useCallback } from "react";

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

// STYLES

import { Container, Logo, Form, FormTitle } from "@pages/SignIn/styles";

// COMPONENTS

import InputCommon from "@components/Input";

import ButtonCommon from "@components/Button";

// ASSETS

import logoImg from '@assets/logo.svg';

// STORES

import { postLoginRequest } from "@store/modules/api/login/postLogin/action";

const SignIn: React.FC = () => {
  const navigateTo = useNavigate();

  const dispatch = useDispatch();
  
  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(postLoginRequest({
      email: 'admin@admin.com',
      password: 'admin'
    }));

    navigateTo('/dashboard');
  }, [ dispatch, navigateTo ]);

  return (
    <Container>
      <Logo>
        <img src={ logoImg } alt="Minha Carteira" />

        <h2>Minha Carteira</h2>
      </Logo>

      <Form onSubmit={ handleSubmit }>
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
