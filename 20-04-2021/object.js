// object -> key: value
// value can be anything -> Js valid
// excel -> tabular form data store 
// JSON-> Javascript object notation
let cap = {
    firstName: "Steve",
    lastName: "Rogers",
    age: 35,
    movies: ["first avenger", "civil war", "winter soldier"],
    address: {
        state: "New York",
        city: "manhatten"
    },
    isAvenger: true
};
// console.log(cap);
// get 
// exact match the key 
// console.log("lastName", cap.lastName);
// console.log("fav movie", cap.movies[1]);
// console.log("city", cap.address.city);
// console.log("lastName",cap["lastName"])
// //  key :value
// console.log("some prop", cap.abc);
// get -> [] operator 
let abc = "age";
// console.log("age",cap[abc]);

// set update 
// cap.friends = ["tony", "peter", "bruce"];
// cap[abc] = 67;
// delete 
delete cap.movies;
delete cap[abc];
console.log(cap);
