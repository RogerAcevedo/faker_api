// IMPORT THE MODELS
const { faker } = require("@faker-js/faker")




// DEFINE ALL MY CONTROLLERS FUNCTIONS
    // CREATE
    // READ ALL
    // READ ONE
    // UPDATE
    // DELETE

// DUMMY METHODS
// SECOND ARGUMENT WHICH IS THE ARROW FUCTIONS THAT REQUESTS FROM RESPONSE OBJECTS GOES IN CONTROLLER
// module.exports is creating a key called "_____Method" that is storing an arrow function
module.exports.companyMethod = (req, res) => {
    res.json({
        Name: faker.company.companyName(),
        Address: faker.address.streetAddress(boolean = true),
        street: faker.address.streetName(),
        city: faker.address.city(), 
        state: faker.address.state(),
        Zipcode: faker.address.zipCode(),
        Country: faker.address.country()
    });
}


// CREATE FIRST AND THEN EXPORT TO ROUTE
module.exports.fakerMethod = (req, res) => {
    res.json({
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        userId: faker.datatype.uuid(),
        username: faker.internet.userName(),
        PhoneNumber: faker.phone.phoneNumber('501-###-###'),
        email: faker.internet.email(),
        password: faker.internet.password()
    });
}

module.exports.musicMethod = (req, res) => {
    res.json({
        Genre: faker.music.genre(),
        SongName :faker.music.songName(),
        test:"test",
        myID:"My made up ID"
    });
}


// module.exports.recipeMethod = (req, res) => {
//     // ID IS STORED IN req.params. key where path variables are stored
//     // VARIABLE NAMES NEED TO BE A SINGLE VARIABLE WORD
//     console.log(req.params.recipe_id)
//     res.json(req.params.recipe_id)
// }