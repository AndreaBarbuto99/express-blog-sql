const express = require("express");
const app = express();
const port = 3000;

//import middlewares
const errorsHandler = require("./middlewares/errorsHandler");
const endpointNotFound = require("./middlewares/endpointNotFound");

// import router

const myRouter = require("./routers/myRouter.js");

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h1>Homepage della pagina</h1>")
})

app.use("/blog", myRouter);




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
