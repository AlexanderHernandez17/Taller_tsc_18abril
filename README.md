Proyecto: Taller de Introducción a typescript

    Este repositorio contiene el código desarrollado durante el Taller de Introducción a la typescript del 18 de abril. El taller abarca ejercicios prácticos para familiarizarse con conceptos básicos de programación utilizando JavaScript.

Instrucciones de Uso

    1. Clonar el Repositorio: Utiliza el siguiente comando para clonar este repositorio en tu máquina local:
    2. git clone https://github.com/AlexanderHernandez17/Taller_tsc_18abril.git

Instalar las Dependencias: Navega hasta el directorio del proyecto e instala las dependencias con npm:

    1. cd Taller_tsc_18abril
    2. npm install

Ejecutar el Proyecto: Una vez instaladas las dependencias, puedes ejecutar el proyecto utilizando el siguiente comando:

    1. node main.js

Contenido del Taller
Ejercicio 1: Interfaz y Clase de Producto

    Interfaz Producto: Define las propiedades básicas de un producto, este archivo lo puedes encontrar en: (src/models/product.interface.ts).
    Clase Producto: Implementa la interfaz y proporciona métodos para manipular los atributos del producto, este archivo lo puedes encontrar en: (src/models/productImplementation.ts).
    Uso: Incluye ejemplos de cómo instanciar y utilizar objetos de producto.

Ejercicio 2: Clase de Cuenta Bancaria

    Clase Cuenta Bancaria: Modela una cuenta bancaria, este archivo lo puedes encontrar en: (src/models/bankAccount.ts) 
    Funcionalidad:  Se establece metodos de depósito, retiro y consulta de saldo, estas funcionalidades las puede encontrar en: (src/services/accountManagement.ts).
    Operaciones: 

    ### Creación de Cuentas Bancarias

const cuentaOne: bankAccount = {
    holder: 'Juan', 
    balance: 1000,
    accountNumber: 123456
}

const cuentaTwo: bankAccount = {
    holder: 'María', 
    balance: 500,
    accountNumber: 321654
}
    
    ### Operaciones sobre las cuentas (Transacciones)

    console.log('Cuenta 1:');
AccountManagement.checkBalance(cuentaOne);
AccountManagement.deposit(cuentaOne, 500);
AccountManagement.withdraw(cuentaOne, 200);
AccountManagement.checkBalance(cuentaOne);

console.log('Cuenta 2:');
AccountManagement.checkBalance(cuentaTwo);
AccountManagement.withdraw(cuentaTwo, 700);
AccountManagement.checkBalance(cuentaTwo);

        

Ejercicio 3: Función para Palíndromos

    Función Palíndromo: Define una función para verificar si una cadena es un palíndromo, este archivo lo puedes encontrar en: (src/utils/polindrome.ts).
    Resultado: Además de las operaciones bancarias, este proyecto también incluye una función para verificar si una cadena es un palíndromo o no:

    console.log(isPalindrome("A man, a plan, a canal, Panama")); // Devuelve: true
    console.log(isPalindrome("Hello world")); // Devuelve: false


Contribución

    Si deseas contribuir al proyecto o mejorar los ejercicios del taller, ¡eres bienvenido(a) a abrir un pull request!

Contacto

    Para cualquier consulta o sugerencia, no dudes en ponerte en contacto con el organizador del taller: [Alexander Hernandez. email: alexander.hdez.2001@gmail.com].