function convertirTemperatura() {
    let celsius;
    let validInput = false;
  
    while (!validInput) {
      let userInput = prompt('Ingrese la temperatura en grados Celsius:');
      celsius = parseFloat(userInput);
  
      if (!isNaN(celsius)) {
        validInput = true;
      } else {
        alert('Por favor, ingrese un valor numérico.');
      }
    }
  
    // Convertir a grados Fahrenheit y Kelvin
    let fahrenheit = (celsius * 9/5) + 32;
    let kelvin = celsius + 273.15;
  
    // Mostrar los resultados
    console.log('Grados Fahrenheit:', fahrenheit.toFixed(2));
    console.log('Grados Kelvin:', kelvin.toFixed(2));
  }
  
  // Llama a la función para convertir la temperatura
  convertirTemperatura();
  
