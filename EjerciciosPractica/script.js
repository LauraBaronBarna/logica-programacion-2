//Crear un programa en Javascript que realice lo siguiente:
//Debe solicitar al usuario la temperatura en grados Celsius por prompt o por un input.
//Debe convertir la temperatura ingresada de grados Celsius a grados Fahrenheit y Kelvin
//Debe imprimir ambos resultados por consola o por el DOM.
//Debe ser capaz de identificar si los datos de entrada sean de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar los datos.

// Función principal para convertir temperatura
function convertirTemperatura() {
    let temperaturaCelsius;

    // Bucle para solicitar la temperatura hasta que se ingrese un valor válido
    while (!validarNumero(temperaturaCelsius = prompt("Ingrese la temperatura en grados Celsius:"))) {
        console.error("Error: Por favor, ingrese un valor numérico válido.");
    }

    // Convertir la entrada a un número
    let temperaturaCelsiusNum = parseFloat(temperaturaCelsius);

    // Calcular las temperaturas en Fahrenheit y Kelvin
    let temperaturaFahrenheit = (temperaturaCelsiusNum * 9/5) + 32;
    let temperaturaKelvin = temperaturaCelsiusNum + 273.15;

    // Mostrar resultados en el DOM
    mostrarResultadosEnDOM(temperaturaFahrenheit.toFixed(2), temperaturaKelvin.toFixed(2));
}

// Función para validar si la entrada es un número
function validarNumero(valor) {
    return !isNaN(parseFloat(valor)) && isFinite(valor);
}

// Función para mostrar resultados en el DOM
function mostrarResultadosEnDOM(fahrenheit, kelvin) {
    document.body.innerHTML = `<div>Grados Fahrenheit: ${fahrenheit}, Grados Kelvin: ${kelvin}</div>`;
}

// Llamar a la función para iniciar el programa
convertirTemperatura();
