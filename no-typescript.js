function add(a, b) {
  return a + b;
}

const result = add(2, 5);

console.log(result);


// const houseKeeper = {
//     name: "Mary",
//     age: 30,
//     address: "Abuja, Nigeria",
//     experience: 5,
//     languageSpoken: ["Hausa", "Igbo", "Yoruba", "English"]
// }

function houseKeeper (name, age, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
}

var houseKeeper1 = new houseKeeper ("Abdul", 20, true, ["Hausa", "Igbo", "Yoruba", "English"])

console.log(houseKeeper);

