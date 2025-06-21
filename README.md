#Prueba tecnica automatización Selaski con Cypress
Este proyecto contiene la solución automatizada para la prueba tecnica de QA proporcionada por Selaski, utilizando Cypress para validar el flujo de autenticación con pin y la búsqueda de embarques.

---

##Estructura del Proyecto

Ruta del proyecto en Linux: `/ruta/local/selaski-cypress` 

###Archivos principales:

- `selaskiFlujoOscar_Ingreso.cy.js`: Test simple de autenticación con PIN válido.
- `selaskiFlujoOscar_Consultar.cy.js`: Test completo del camino feliz (login + búsqueda de embarque válido).
- `selaskiFlujoOscar_Completo.cy.js`: Flujo completo correcto y con validaciones de errores (PIN incorrecto y embarque no encontrado).

---

## Instrucciones para ejecutar

### 1. Clonar el repositorio

```bash
git clone https://github.com/osedca/selaski-cypress.git
cd selaski-cypress
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar Cypress en modo interactivo

```bash
npx cypress open
```

> Selecciona luego el archivo `.cy.js` que desees ejecutar desde la interfaz.

### 4. Ejecutar Cypress en modo headless (linea de comandos)

```bash
npx cypress run --spec "cypress/e2e/selaskiFlujoOscar_Completo.cy.js"
```

---

## datos de Prueba Utilizados

Los datos están definidos dentro de los archivos `.cy.js` como constantes:

```js
const VALID_PIN = '5569';
const INVALID_PIN = '1234';
const VALID_EMBARQUE = 'Prueba 1';
const INVALID_EMBARQUE = 'Inex999';
```
---

## estructura sugerida del proyecto

```
selaski-cypress/
├── cypress/
│   ├── e2e/
│   │   ├── selaskiFlujoOscar_Ingreso.cy.js
│   │   ├── selaskiFlujoOscar_Consultar.cy.js
│   │   └── selaskiFlujoOscar_Completo.cy.js
│   └── fixtures/
│       └── datosEmbarque.json (opcional)
├── cypress.config.js
├── package.json
├── README.md
```


##funcionalidades Cubiertas

- Acceso a URL protegida por pin
- Validacion con pin correcto
- Validacion de error con pin incorrecto
- Selección dinámica del filtro "Embarque"
- Busqueda de embarque valida.
- manejo de búsqueda con embarque inexistente
- Codigo limpio, organizado y reutilizable

---

## Autor

Oscar Eduardo Camacho Pulido

GitHub: [osedca](https://github.com/osedca)

---



