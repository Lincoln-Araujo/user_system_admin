import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  required,
  email,
  minLength,
  useRecordContext,
} from 'react-admin';

const validateName = required('O nome é obrigatório');
const validateEmail = [required('O e-mail é obrigatório'), email('E-mail inválido')];
const validatePassword = minLength(6, 'A senha deve ter no mínimo 6 caracteres');

const UserEdit = (props) => {
  const record = useRecordContext();

  console.log('📌 Dados carregados para edição:', record);

  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="name" label="Nome" validate={validateName} />
        <TextInput source="email" label="E-mail" validate={validateEmail} />
        <TextInput source="password" label="Senha" type="password" validate={validatePassword} />
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;
