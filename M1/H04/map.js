var people = [
    { name: "anya", age: 20 },
    { name: "geraldine", age: 16 },
    { name: "tata", age: 25 }
  ];
  
  var peopleSentences = [];
  
  for (var i = 0; i < people.length; i++) {
    var sentence = people[i].name + " is " + people[i].age + " years old";
    peopleSentences.push(sentence);
  }

  
  console.log(peopleSentences);

var values = [1, 2, 3, -4, 5];

for (var i = 0; i < values.length; i++) {
  values[i] = Math.abs(values[i]);
}

console.log(values)