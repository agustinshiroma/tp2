const fs = require('fs');

let texto = fs.readFileSync('./texto.txt', 'utf-8');

texto += '\nEsto es otra linea de texto plano!'

fs.writeFileSync('./texto.txt', texto)

console.log(texto)