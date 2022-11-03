// IMPORT THE CONTROLLER
// imports controller file inside a variable called ExpressController
// ".." goes out a level in the folders
// "FakerController" is an object. with the amount keys in the controller


const FakerController = require("../controllers/faker.controller")


// DEFINE THE ROUTES
// ALL ROUTES GET DEFINED HERE
// ROUTE RUNS BEFORE CONTROLLER
// app.get & app.get require to arguments the URL and METHODS that executes on the request
// module.exports is the vanilla JS method of exporting an object 
// app overwrites modeule.exports(object) to an arrow function
module.exports = app => {
    app.get("/api/company" , FakerController.companyMethod )

    app.get("/api/faker" , FakerController.fakerMethod)

    app.get("/api/sandia" , FakerController.musicMethod)

    // app.get("/api/recipes/:recipe_id", FakerController.recipeMethod )

}



