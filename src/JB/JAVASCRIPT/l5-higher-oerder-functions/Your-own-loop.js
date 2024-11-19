function bucle(initialvalue, proof,update, body) {
  while (proof(initialvalue)) {
      body(initialvalue); 
      initialvalue =update(initialvalue); 
  }
}

bucle(3, n => n > 0, n => n - 1, console.log);
