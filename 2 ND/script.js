var number = [100, 21, 10.211, 300, 41, 21, -41, 0, 1, 27];

var suma = 0;
var didziausias = number[0];
var maziausias = number[0];
for (i = 0; i <= number.length - 1; i++) {
  console.log(i, number[i]);
  suma = suma + number[i];
  if (number[i] > didziausias) {
    didziausias = number[i];
  }
  if (number[i] < maziausias) {
    maziausias = number[i];
  }
}
var vidurkis = suma / number.length;

console.log('Skaičių suma: ' + suma);
console.log('Skaičių vidurkis: ' + vidurkis.toFixed(2));
console.log('Dižiausias skaičius: ' + didziausias);
console.log('Mažiausias skaičius: ' + maziausias);
