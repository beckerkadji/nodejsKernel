import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app: express.Application = express()
const port = <number> parseInt( <string> process.env.PORT)
const hostname = <string> process.env.HOST

app.use(express.json());
app.use(express.urlencoded({extended : false}))

app.get('/api', (request:express.Request, response:express.Response) => {
    response.status(200).send(`<h3 style="font-family: Lato, sans-serif ; color: cadetblue">Welcome to express js</h3>`)
})

app.listen(port, hostname, () => {
    console.log(`Express server is started at http://${hostname}:${port}`)
})