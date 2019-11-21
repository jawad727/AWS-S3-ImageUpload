const express = require("express");
const app = express();
const config = require("./config")
require("dotenv/config")


// Endpoints
const imageController = require("./controllers/imageController")
app.post("/api/uploadImage", imageController.uploadImageToS3)

app.get('/', (req, res) => {
    console.log(process.env.SECRET_MESSAGE)
    res.send(
        `<h1>working</h1>`
        
    )
 })





app.listen(config.port, () => console.log(`app listening on port ${config.port}!`))