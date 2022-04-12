const fs = require('fs');
const PATH = '../demos/file-system/inventors.json';

let inventors = JSON.parse(fs.readFileSync(PATH, 'utf-8'));

// TODO: getInventors()

function getInventors()
{
    return inventors;
}

//console.log(getInventors());

// TODO: getInventors(id)
function getInventorsById(id)
{
    return inventors.find(inventor => inventor._id === id);
}

//console.log(getInventorsById(4));

// TODO: insertInventor(inventor)
function insertInventor(first, last, year)
{
    const inventor = {_id: inventors[inventors.length-1]._id + 1, first, last, year}

    inventors.push(inventor);

    fs.writeFileSync(PATH, JSON.stringify(inventors, null, '    '));

    return 'Insert OK'
}

let newInventor = {first: 'Pepe', last: 'Jobs', year: 1234}
insertInventor(newInventor.first, newInventor.last, newInventor.year);
//  console.log(inventors);


// TODO: updateInventor(inventor)
function updateInventor(inventor)
{
    let inv = inventors.find(a => a._id === inventor._id)

    inv.first = inventor.first
    inv.last = inventor.last
    inv.year = inventor.year

    fs.writeFileSync(PATH, JSON.stringify(inventors, null, '    '));
}

// updateInventor({ _id: 9, first: 'Agustin', last: 'Perez', year: 1978 })
// console.log(inventors);


// TODO: deleteInventor(id)

function deleteInventor(id)
{
    let array = inventors.filter(inv => inv._id != id)

    fs.writeFileSync(PATH, JSON.stringify(array, null, '    '));
}

//deleteInventor(4);
console.log(inventors);