import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser";
//import * as swaggerJson from "./swagger.json";
import * as swaggerUI from "swagger-ui-express";

dotenv.config()

const app: express.Application = express()
const port = <number> parseInt( <string> process.env.PORT)
const hostname = <string> process.env.HOST

app.use(express.json());
app.use(express.urlencoded({extended : false}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.use(["/openapi", "/docs", "/swagger"], swaggerUI.serve, swaggerUI.setup(swaggerJson));

app.get('/api', (request:express.Request, response:express.Response) => {
    response.status(200).send(`<h3 style="font-family: Lato, sans-serif ; color: cadetblue">Welcome to express js</h3>`)
})

app.listen(port, hostname, () => {
    console.log(`Express server is started at http://${hostname}:${port}`)
})