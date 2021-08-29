var countries = [
  { country: 'Lietuva', plotas: 65300, gyventojuSkaicius: 2.794 },
  { country: 'Latvija', plotas: 64589, gyventojuSkaicius: 1.92 },
  { country: 'Estija', plotas: 45227, gyventojuSkaicius: 1.325 },
  { country: 'Norvegija', plotas: 385207, gyventojuSkaicius: 5.323 },
  { country: 'Lenkija', plotas: 312679, gyventojuSkaicius: 37.97 },
];

for (i = 0; i < countries.length; i++) {
  var plotasVienam = countries[i].plotas / countries[i].gyventojuSkaicius;
  console.log(
    'Šalis: ' +
      countries[i].country +
      ', joje gyvena ' +
      countries[i].gyventojuSkaicius +
      ' mln. gyventojų. ' +
      ' Valstybės plotas: ' +
      countries[i].plotas +
      ' km², plotas tenkantis vienam gyventojui: ' +
      plotasVienam.toFixed(2) +
      ' m².'
  );
}
