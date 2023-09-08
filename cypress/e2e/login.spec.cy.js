
// describe('Авторизация', () => {
it('Неверные учетные данные', () => {
  cy.visit('https://demo.sedmax.ru/sedmax/web/ui/login');

  cy.get('input[placeholder="Пользователь"]').type('2023QA!i_want_to_get_this_offer');
  cy.get('input[placeholder="Пароль"]').type('I_want_work_with_you2023!');
  cy.get('button[type="submit"]').click().then(() => {
    cy.request({
      // Фактические параметры запроса
      url: 'https://demo.sedmax.ru/sedmax/auth/login',
      method: 'POST',
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(400); // Проверяем, что статус код равен 400
      expect(response.body).not.to.be.empty; // Проверяем, что ответ сервера не пустой
      
    });
  });

  cy.contains('Неверные логин или пароль').should('be.visible'); // Проверяем наличие текста "Неверные логин или пароль"
});
