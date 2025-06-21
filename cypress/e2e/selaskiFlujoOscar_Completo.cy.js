//Flujo completo con excepciones y validacion de embarque
//Se crean constantes para validar diferente caminos y excepcions
const VALID_PIN = '5569';
const INVALID_PIN = '1234';
const VALID_EMBARQUE = 'Prueba 1';
const INVALID_EMBARQUE = 'Inex999';

//Se crea la funcion para ingresar Pin
function ingresarPin(pin) {
  pin.split('').forEach((digit, i) => {
    cy.get(`#digit${i + 1}`)
      .should('be.visible')
      .should('not.be.disabled')
      .click()
      .type(digit);
    cy.wait(300);
  });
  cy.contains('Ingresar').should('be.visible').click();
}
// Se crea funcion para activar filtros y buscar embarque
function seleccionarEmbarqueYBuscar(nombre) {
  cy.contains('p', 'Filtros').click();
  cy.get('div.select-btn').contains('Seleccionar').click();

  cy.get('div.search-options', { timeout: 10000 })
    .should('be.visible')
    .within(() => {
      cy.contains('p', 'Embarque')
        .should('be.visible')
        .click({ force: true });
    });

  cy.get('input[placeholder="Escribe aquí tu búsqueda"]')
    .should('exist')
    .type(`${nombre}{enter}`, { delay: 100 });
}

describe('Flujo para autenticación y búsqueda Selaski', () => {

  beforeEach(() => {
    cy.visit('https://www.selaski.com/public/reports/shared?token=cdeadfd7a31da5257e1d5f7af80e21ec56y89');
    cy.wait(3000); //se incluye wait para darle tiempo que cargue los campos para ingresar pin
  });
  //flujo para validar correctamente informacion desde el pin hasta la busqueda del embarque
  it('Se autentica correctamente con pin valido y busca un embarque válido', () => {
    ingresarPin(VALID_PIN);
    cy.contains('Reporte de Embarques', { timeout: 15000 }).should('be.visible');
    seleccionarEmbarqueYBuscar(VALID_EMBARQUE);
    cy.contains(VALID_EMBARQUE, { timeout: 10000 }).should('be.visible');
  });
  //Excepcion para pin incorrecto 
  it('Se muestra error si el pin es incorrecto', () => {
    ingresarPin(INVALID_PIN);
    cy.contains('Código incorrecto').should('be.visible'); 
  });
  //execepcion para Pin correcto pero busqueda con resultado no encontrado
  it('se muestra mensaje si no se encuentra el embarque', () => {
    ingresarPin(VALID_PIN);
    //cy.contains('Reporte de Embarques').should('be.visible');
    cy.contains('Reporte de Embarques', { timeout: 15000 }).should('be.visible');
    seleccionarEmbarqueYBuscar(INVALID_EMBARQUE);
    cy.contains('Sin datos para mostrar').should('be.visible'); 
  });

});
