import React from 'react';
import { Create, SimpleForm, TextInput, required, email, minLength, useNotify, useRedirect } from 'react-admin';

const UserCreate = (props) => {
  const notify = useNotify();
  const redirect = useRedirect();

  const onSuccess = () => {
    notify('Usuário criado com sucesso');
    redirect('/users'); 
  };

  return (
    <Create {...props} mutationOptions={{ onSuccess }}>
      <SimpleForm>
        <TextInput source="name" label="Nome" validate={required()} />
        <TextInput source="email" label="E-mail" validate={[required(), email()]} />
        <TextInput source="password" label="Senha" type="password" validate={[required(), minLength(6)]} />
      </SimpleForm>
    </Create>
  );
};

export default UserCreate;