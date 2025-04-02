# User Management Admin

Este é um sistema de gerenciamento de usuários construído com **React Admin** no frontend, **Express + MongoDB** no backend e testes E2E com **Cypress**.

## 💪 Tecnologias utilizadas

- **Frontend:** React + React Admin + Vite
- **Backend:** Node.js + Express + Mongoose
- **Banco de dados:** MongoDB
- **Testes:** Cypress

---

## 📦 Instalação

Clone o repositório:

```bash
git clone https://github.com/SEU-USUARIO/user_system_admin.git
cd user_system_admin
```

### 🔧 Backend

1. Acesse a pasta:

```bash
cd backend
```

2. Instale as dependências:

```bash
npm install
```

3. Configure o banco de dados (MongoDB). Por padrão, está apontando para `mongodb://localhost:27017/user-system`.

4. Inicie o servidor backend:

```bash
npm run dev
```

O backend será executado em `http://localhost:3000`.

---

### 💻 Frontend

1. Acesse a pasta:

```bash
cd frontend
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie a aplicação:

```bash
npm run dev
```

A interface estará disponível em `http://localhost:5173`.

---

## ✅ Testes com Cypress

1. Certifique-se de que o **frontend (`localhost:5173`)** e o **backend (`localhost:3000`)** estão rodando.

2. Ainda na pasta `frontend`, instale o Cypress (caso ainda não tenha feito isso):

```bash
npm install cypress --save-dev
```

3. Para abrir a interface do Cypress:

```bash
npm run cypress:open
```

4. Execute os testes E2E localizados em `frontend/cypress/e2e/user.cy.js`.

Os testes cobrem os seguintes cenários:

- ✅ Listagem de usuários
- ✅ Exibição da mensagem *"No users yet."* quando o banco está vazio
- ✅ Criação de usuário (com botão Save e com tecla Enter)
- ✅ Edição de usuário
- ✅ Remoção de usuário
- ✅ Cancelamento da remoção de usuário

---

## 📄 Observações

- O React Admin fornece automaticamente formulários e botões para criação, edição e remoção.
- Para editar usuários, o backend precisa retornar o objeto diretamente no formato `{ id, name, email }`.

---

## 🛠️ Melhorias Futuras

- Adicionar **confirmação ou cancelamento de edição**, para evitar alterações acidentais.
- Implementar um **modal de confirmação para remoção de usuários**, garantindo mais segurança nas exclusões.
- Adicionar **validações no backend** para impedir e-mails duplicados ou senhas fracas.
- Criar um campo de busca para filtrar usuários por nome ou e-mail.
- Implementar paginação com controle visual (próximo/anterior) para lidar melhor com grandes listas.
- Estilizar melhor a interface com tema customizado no React Admin.
- Adicionar autenticação para proteger a interface administrativa.
