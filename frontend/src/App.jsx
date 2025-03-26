import React from 'react';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

import UserList from './users/UserList';
import UserCreate from './users/UserCreate';
import UserEdit from './users/UserEdit';

const dataProvider = simpleRestProvider('http://localhost:3000/api');

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={UserList} create={UserCreate} edit={UserEdit} />
  </Admin>
);

export default App;
