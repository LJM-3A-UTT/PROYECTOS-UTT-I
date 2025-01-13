function verificarPalabras(palabraPrincipal, palabrasAverificar) {
    const contarCaracteres = (palabra) => {
      const contador = {};
  
      for (const letra of palabra) {
        contador[letra] = (contador[letra] || 0) + 1;
      }
  
      return contador;
    };
  
    const caracteresPalabraPrincipal = contarCaracteres(palabraPrincipal);
  
    for (const palabra of palabrasAverificar) {
      const caracteresPalabraActual = contarCaracteres(palabra);
  
      let esPosibleFormar = true;
  
      for (const letra in caracteresPalabraActual) {
        if (!caracteresPalabraPrincipal[letra] || caracteresPalabraPrincipal[letra] < caracteresPalabraActual[letra]) {
          esPosibleFormar = false;
          break;
        }
      }
  
      console.log(${palabra} ${esPosibleFormar ? 'puede' : 'no puede'} ser formada a partir de ${palabraPrincipal});
    }
  }
  
  const palabraPrincipal = "ferrocarril";
  const palabrasAverificar = ["carro", "roca", "fresco"];
  
  verificarPalabras(palabraPrincipal, palabrasAverificar);