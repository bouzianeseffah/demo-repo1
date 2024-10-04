// const jsonNames = `["bouz", "aml", "fat", "nab"]`;
// const jsonPerson = `{ "name": "boz","age": 30,"isEmloyed": true,"hobies": ["writing", "karate", "cooking"]}`;
// const jsonPeople = `[{"name": "boz","age": 30,"isEmloyed": true},
//                    {"name": "aml","age": 34,"isEmloyed": false},
//                    {"name": "nab","age": 33,"isEmloyed": true},
//                    {"name": "fat","age": 25,"isEmloyed": false}]`;

// const parsedData = JSON.parse(jsonPerson);
// console.log(parsedData)

fetch('people.json')
     .then(response => response.json())
     .then(values => values.forEach(value => console.log(value.name)))
     .catch(error => console.error(error));