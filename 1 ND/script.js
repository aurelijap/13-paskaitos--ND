var arrNames = [
  'Jon Snow',
  'Cersei Lannister',
  'Daenerys Targaryen',
  'Theopn Greyjoy',
  'Tyrion Lannister',
  'Arya Stark',
];

console.log('Pirmasis elementas: ' + arrNames[0]);
console.log('Paskutinis elementas: ' + arrNames[arrNames.length - 1]);

var number = prompt('Įveskite skaičių nuo 1 iki 6');
console.log(number + ' elementas yra: ' + arrNames[number - 1]);
