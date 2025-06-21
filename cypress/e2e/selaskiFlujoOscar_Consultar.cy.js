// Flujo basico o camino feliz, con flujo de ingreso pin correcto y embarque correcto
describe('Flujo para autenticacion Selaski robusto', () => {
  it('debe autenticar correctamente y hacer busqueda de embarque', () => {
    //Visita la URL
    cy.visit('https://www.selaski.com/public/reports/shared?token=cdeadfd7a31da5257e1d5f7af80e21ec56y89');
    cy.wait(3000);

    //Ingreso del PIN campo por campo
      cy.get('#digit1').should('be.visible').should('not.be.disabled').click().type('5');
      cy.wait(300);
      cy.get('#digit2').should('be.visible').should('not.be.disabled').click().type('5');
      cy.wait(300);
      cy.get('#digit3').should('be.visible').should('not.be.disabled').click().type('6');
      cy.wait(300);
      cy.get('#digit4').should('be.visible').should('not.be.disabled').click().type('9');
      //Click en Ingresar
      cy.contains('Ingresar').should('be.visible').should('not.be.disabled').click();

    /////////////////////////////// Pantalla principal ////////////////////////////
    //Se valida la carga de Reporte de Embarques
    cy.contains('Reporte de Embarques', { timeout: 15000 }).should('be.visible');
    //Abre menu filtros
    cy.contains('p', 'Filtros').click();
    //abre submenu Seleccionar
    cy.get('div.select-btn').contains('Seleccionar').click();
    //Se da una espera para el listado de opciones
    cy.get('div.search-options', { timeout: 10000 }).should('be.visible');
    //Se usa el selector exacto para encontrar la opcoin Embarque y hacer click nativo
    cy.get('div.search-options p')
      .contains('Embarque')
      .should('be.visible')
      .then(($p) => {
        //Se usa click nativo del DOM
        $p[0].click();
      });

    ////////////////////////////// Parte de busqueda //////////////////////////
    //Se verifica y escribe en el campo de busqueda
    cy.get('input[placeholder="Escribe aquí tu búsqueda"]', { timeout: 10000 })
      .should('exist')
      .and('not.be.disabled')
      .type('Prueba 1{enter}', { delay: 100 });

    //Se verifica que aparezca el embarque buscado
    cy.contains('Prueba 1', { timeout: 10000 }).should('be.visible');
  });
});
