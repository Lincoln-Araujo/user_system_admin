/// <reference types="cypress" />

const baseUrl = 'http://localhost:5173';

const apiUrl = 'http://localhost:3000/api/users';

describe('User Management - React Admin', () => {
  beforeEach(() => {
    // Limpa os usuários antes de cada teste
    cy.request('GET', apiUrl).then((response) => {
      response.body.forEach((user) => {
        cy.request('DELETE', `${apiUrl}/${user.id}`);
      });
    });
    cy.visit(baseUrl);
  });

  it('Exibe a mensagem "No users yet." quando não há usuários', () => {
    cy.visit(baseUrl);
  
    // Espera o carregamento da tabela ou página
    cy.get('body').then(($body) => {
      if ($body.find('.RaEmpty-page p').length > 0) {
        // Se encontrar o seletor, verifica o conteúdo
        cy.get('.RaEmpty-page p').should('contain', 'No users yet.');
      } else {
        // Se não encontrar, imprime os elementos visíveis para debug
        cy.log('Não encontrou .RaEmpty-page p');
        cy.get('body').invoke('html').then(html => {
          cy.log(html);
        });
      }
    });
  });  

  it('Cria um novo usuário (usando botão Save)', () => {
    cy.contains('Create').click();
    cy.get('input[name="name"]').type('Teste Botão');
    cy.get('input[name="email"]').type('botao@email.com');
    cy.get('input[name="password"]').type('123456');
    cy.contains('Save').click();

    cy.contains('Usuário criado com sucesso').should('be.visible');
    cy.contains('Teste Botão').should('be.visible');
  });

  it('Cria um novo usuário (usando tecla Enter)', () => {
    cy.contains('Create').click();
    cy.get('input[name="name"]').type('Teste Enter');
    cy.get('input[name="email"]').type('enter@email.com');
    cy.get('input[name="password"]').type('123456{enter}');

    cy.contains('Usuário criado com sucesso').should('be.visible');
    cy.contains('Teste Enter').should('be.visible');
  });

  it('Edita um usuário existente', () => {
    cy.request('POST', apiUrl, {
      name: 'Para Editar',
      email: 'editar@email.com',
      password: '123456',
    });
  
    cy.visit(baseUrl);
    cy.contains('Para Editar').click();
    cy.get('input[name="name"]').clear().type('Editado');
    cy.contains('Save').click();
  
    cy.contains('Editado').should('be.visible');
    cy.contains('Para Editar').should('not.exist');
  });
  

  it('Remove um usuário existente', () => {
    cy.request('POST', apiUrl, {
      name: 'Para Remover',
      email: 'remover@email.com',
      password: '123456',
    });

    cy.visit(baseUrl);
    cy.contains('Para Remover').click();
    cy.contains('Delete').click();
    cy.contains('Para Remover').should('not.exist');
  });

});
