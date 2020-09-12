//
// Object Destructuring
//

/*const person = {
    name: 'abd',
    age: 29,
    location : {
        city: 'ist',
        sic: 25
    }
}

console.log(person);

const {name, age} = person;
console.log(`${person.name} is ${person.age}`);

const {city, sic} = person.location;

if(city && sic) {
    console.log(`${city} is ${sic} `)
}*/

/*const book = {
    name: 'DERT',
    author: 'sert',
    publisher: {
        //name: 'Penguin'
    }
}

const {name: publisherName = 'self'} = book.publisher
console.log(publisherName);*/

//
// Array Destructuring
//
/*const adress = [' street',' tbilisi','georgia','kod'];
const [, city, country, zip] = adress;
console.log (`I am in ${city} ${country}`);*/


const item = ['Coffee (Hot)','2.00 ','2.50','2.75'] ;
const [type, small, medium, big] = item;
console.log(`A medium ${type} cost ${medium}`);






