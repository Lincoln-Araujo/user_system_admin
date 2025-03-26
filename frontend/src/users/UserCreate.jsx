import React from 'react';
import { Create, SimpleForm, TextInput, required, email, minLength } from 'react-admin';

const validateName = required('O nome é obrigatório');
const validateEmail = [required('O e-mail é obrigatório'), email('E-mail inválido')];
const validatePassword = [required('A senha é obrigatória'), minLength(6, 'A senha deve ter no mínimo 6 caracteres')];

const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" label="Nome" validate={validateName} />
      <TextInput source="email" label="E-mail" validate={validateEmail} />
      <TextInput source="password" label="Senha" type="password" validate={validatePassword} />
    </SimpleForm>
  </Create>
);

export default UserCreate;
