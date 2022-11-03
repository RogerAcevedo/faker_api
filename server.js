// 1 - IMPORT DEPENDENCIES (express & cors)
const express = require("express")
const cors = require("cors")
const fakerRoute = require("./routes/faker.route")

// IMPORT FAKER API
// const { faker } = require("@faker-js/faker")

//  2 - INSTALL OUR EXPRESS SERVER
// create variable and run class object(express is our class object)
const app = express()
// define our port
const PORT = 8000

//  3 - SET UP MIDLEWARE
//are set up so that app returns JSON format and allows to recieve POST information
// MIDDLEWARE are kinda like "extensions"
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// cors allows react application to make request to our server
app.use(cors())

// 4 - CONNECT EXPRESS SERVER TO ROUTES
// app holds the server
// './routes.faker.route.js' - goes from server.js to routes
const fakersRoute = require('./routes/faker.route.js')
fakersRoute(app)



//  5 - RUN EXPRESS SERVER
// mix strings and variables use backticks ``
app.listen(PORT, () => console.log(`EXPRESS RUNNING ON PORT ${PORT}`))




// 4 - DEFINE OUR ENDPOINTS



// app.get("/api", (request, response) => {
//     // allows us to send back as json response
//     // will display what its in our response
//     response.json({
//         'name' : 'Neji Hyuga'
//     })
// })

// // app.get("/api/hello", ) - ROUTES
// app.get("/api/hello" , (req, res) => {
//     res.json({
//         user Id: faker.datatype.uuid(),
//         username: faker.internet.username()
//     });
// })

// // READ ONE WITH ID
// app.get("/api/recipes/:recipe_id" , (req, res) => {
//     // ID IS STORED IN req.params. key where path variables are stored
//     // VARIABLE NAMES NEED TO BE A SINGLE VARIABLE WORD
//     console.log(req.params.recipe_id)
//     // our RESPONSE  will display what its in our response
//     res.json(req.params.recipe_id)

// })

// app.post("/api" , (req, res) => {
//     console.log(req)
//     // send res.json(req.body) to get object displayed in POSTMAN 
//     res.json(req.body)
//     res.json("TRANSFER RECIEVED")
// })


