function esPalindromo(palabra) {

    palabra = palabra.toLowerCase().replace(/\s/g, '');
  
    var palabraInvertida = palabra.split('').reverse().join('');

    return palabra === palabraInvertida;
  }

  var palabraEjemplo = "oso";
  if (esPalindromo(palabraEjemplo)) {
    console.log(palabraEjemplo + " es un palíndromo");
  } else {
    console.log(palabraEjemplo + " no es un palíndromo");
  }
  