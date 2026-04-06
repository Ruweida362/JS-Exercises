const people = [
  {
    name: "Ali",
    age: 25,
    city: "Mogadishu"
  },
  {
    name: "Bilaal",
    age: 30,
    city: "Baydhabo"
  },
  {
    name: "Cumar",
    age: 35,
    city: "Hargeisa"
  }
];

for (let person of people) {
  for (let key in person) {
    console.log(key + ": " + person[key]);
  }
  console.log("------");
}