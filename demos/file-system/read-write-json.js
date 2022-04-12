const fs = require('fs');
const PATH = './inventors.json';

let inventors = JSON.parse(fs.readFileSync(PATH, 'utf-8'));

// TODO: Del archivo inventors.json mostrorar por consola los nacidos despues del 1800

//console.log(inventors.filter(inventor => inventor.year > 1800 ));

// TODO 2: Insertar y persistir un nuevo inventor {first: 'Steve', last: 'Jobs', year: 1955}

//inventors.push({first: 'Steve', last: 'Jobs', year: 1955});
console.log(inventors);

fs.writeFileSync(PATH, JSON.stringify(inventors, null, '    '));