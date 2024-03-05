# Tests automatizados

Tests automatizados utilizando [selenium](https://www.selenium.dev/) y [mocha](https://mochajs.org/) como testing framework.

## Ejecutar tests

Dentro del directorio __QA__:

1. Instalar las dependencias:

```sh
npm install
```

2. Ejecutar los tests con el comando:

```sh
npm test
```

Output:

```sh
[cristian@linux QA]$ npm test

> qa@1.0.0 test
> mocha ./tests/*.spec.js --no-timeouts



  Login
    ✔ Validar login con credenciales validas (3223ms)

  Reports
    ✔ Validar 3 canvas existentes en reports (2107ms)

  Transactions
    ✔ Validar que los valores de transactiones sean numericos (1032ms)


  3 passing (6s)
```