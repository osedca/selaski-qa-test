//Prueba de Ingreso VAlido
describe('Flujo para autenticacion', () => {
  it('debe autenticar con PIN y buscar un embarque', () => {
    // Ingreso a la URL de pruebas
    cy.visit('https://www.selaski.com/public/reports/shared?token=cdeadfd7a31da5257e1d5f7af80e21ec56y89');
    // Se ingresa PIN de Prueba
    //cy.get('input', { timeout: 10000 }).should('be.visible').type('5569');
    //cy.get('input').first().should('be.visible').type('5569');
    cy.wait(3000); 
    cy.get('input', { timeout: 10000 }).first().should('be.visible').type('5569');
    cy.contains('Ingresar', { timeout: 5000 }).should('be.visible').click();


////////////////////////////////////////////////////////
    // Espera el cargue de la tabla de embarques y uno conocido para la prueba
    cy.contains('Reporte de Embarques', { timeout: 15000 }).should('be.visible');
    cy.contains('KSIO34588-01', { timeout: 15000 }).should('be.visible');
    // VAlida que aparece el embarque "Prueba 1-02"
    cy.contains('Prueba 1-02', { timeout: 15000 }).should('be.visible');
    // Valdia que en la misma fila este el proveedor correcto
    cy.contains('Prueba 1-02')
      .parents('tr')
      .within(() => {
        cy.contains('Proveedor API 1').should('be.visible');
      });
    //abrimos menu filtros
    cy.contains('p', 'Filtros', { timeout: 10000 }).should('be.visible').click();
    cy.contains('Embarque', { timeout: 5000 }).should('be.visible');
    });

  });
