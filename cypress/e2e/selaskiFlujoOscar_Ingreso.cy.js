//Prueba de Ingreso VAlido
describe('Flujo para autenticacion', () => {
  it('Se autentica con PIN e ingresa', () => {
    //Ingreso a la URL de pruebas
    cy.visit('https://www.selaski.com/public/reports/shared?token=cdeadfd7a31da5257e1d5f7af80e21ec56y89');
    //se ingresa pin de Prueba
    //cy.get('input', { timeout: 10000 }).should('be.visible').type('5569');
    cy.get('input').first().should('be.visible').type('5569');
    cy.contains('Ingresar').click();
    //se valida si la pagina siguiete se carga
    cy.url().should('include', '/public/reports/shared');
  });
});
