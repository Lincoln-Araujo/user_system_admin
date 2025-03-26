# User Management API

API Backend para gestão de usuários do sistema final.

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **MongoDB** (via Mongoose)
- **Jest** (para testes unitários)
- **Supertest** (para testes de sistema)
- **MongoMemoryServer** (para testes isolados)
- **Dotenv** (para configuração de variáveis de ambiente)

## 📌 Requisitos do Sistema

- O sistema deve ser escrito em **Node.js**
- Deve conter **testes unitários**
- Deve conter **testes de sistema**
- Cada usuário deve conter os seguintes atributos:
  - `_id`
  - `name`
  - `email`
  - `password`

## 🔗 Contrato da API

| **Path**         | **Descrição**              | **Cenários de Teste**                 |
|-----------------|----------------------|---------------------------------|
| **GET /users**   | Listar todos os usuários | `Status Code = 200 (OK)`       |
| **POST /users**  | Criar um novo usuário   | `Status Code = 201 (Created)`  |
| **GET /users/:id** | Detalhar um usuário   | `Status Code = 200 (OK)`, `Status Code = 404 (Not Found)` |
| **PUT /users/:id** | Atualizar um usuário  | `Status Code = 200 (OK)`, `Status Code = 404 (Not Found)` |
| **DELETE /users/:id** | Excluir um usuário  | `Status Code = 204 (No Content)`, `Status Code = 404 (Not Found)` |

## ⚙️ Instalação e Configuração

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/seu-usuario/user-management-api.git
   cd user-management-api
   ```
2. **Instale as dependências:**
   ```sh
   npm install
   ```
3. **Crie o arquivo `.env` e configure a conexão com o MongoDB:**
   ```ini
   MONGO_URI=mongodb://localhost:27017/user-management
   PORT=3000
   ```
4. **Inicie o servidor:**
   ```sh
   npm start
   ```
   O servidor será iniciado em **http://localhost:3000**

## 🛠️ Executando os Testes

Este projeto inclui **testes unitários e de sistema**.

### 🔹 Testes Unitários
Para rodar os testes unitários:
```sh
npm test
```

### 🔹 Testes de Sistema
Os testes de sistema usam um banco de dados **MongoDB em memória** para garantir que as chamadas à API sejam testadas sem afetar o banco real.
```sh
npm test
```
Caso precise depurar testes com conexões abertas:
```sh
npm test -- --detectOpenHandles
```

## 📂 Estrutura do Projeto

```
user-management-api/
│-- src/
│   ├── config/
│   │   ├── db.js            # Configuração do banco de dados
│   ├── controllers/
│   │   ├── userController.js # Controlador de usuários
│   ├── models/
│   │   ├── userModel.js      # Modelo de Usuário
│   ├── routes/
│   │   ├── userRoutes.js     # Rotas da API
│   ├── server.js            # Arquivo principal do servidor
│-- tests/
│   ├── unit/
│   │   ├── userController.test.js  # Testes unitários do controller
│   ├── system/
│   │   ├── userRoutes.test.js      # Testes de sistema das rotas
│-- .env                          # Variáveis de ambiente
│-- package.json                   # Dependências e scripts
│-- README.md                      # Documentação do projeto
```

## 📌 Melhorias Futuras
- Implementar autenticação com **JWT**
- Adicionar **hash de senha** usando `bcrypt`
- Melhorar a cobertura de testes para cenários extremos

---

📌 **Criado por Lincoln Araújo** | Projeto para gestão de usuários com Node.js e MongoDB da disciplina de Qualidade de Software e Testes do curso de pós-graduação em UX Engineering da PUC Minas 🚀

