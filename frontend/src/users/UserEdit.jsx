import React from 'react';
import { Edit, SimpleForm, TextInput, required, email, minLength } from 'react-admin';

const validateName = required('O nome é obrigatório');
const validateEmail = [required('O e-mail é obrigatório'), email('E-mail inválido')];
// A senha será opcional na edição, mas se preenchida, deve ter no mínimo 6 caracteres
const validatePassword = minLength(6, 'A senha deve ter no mínimo 6 caracteres');

const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" label="ID" />
      <TextInput source="name" label="Nome" validate={validateName} />
      <TextInput source="email" label="E-mail" validate={validateEmail} />
      <TextInput source="password" label="Senha" type="password" validate={validatePassword} />
    </SimpleForm>
  </Edit>
);

export default UserEdit;
