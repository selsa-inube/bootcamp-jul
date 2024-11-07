function crearTablero(size) {
    let tablero = ''; 
    for (let fila = 0; fila < size; fila++) {
      for (let columna = 0; columna < size; columna++) {
        if ((fila + columna) % 2 === 0) {
          tablero += '#';
        } else {
          tablero += ' ';
        }
      }
      tablero += '\n';
    }
    return tablero;
  }
  
  console.log(crearTablero(10));  
  