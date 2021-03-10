import { Response} from 'express'
const express = require('express');
const cors = require('cors');
const http = require('http');

const app = express();
app.use(cors())

app.get('/', function (req:Request, res:Response) {
    res.send('Hello World!');
});

const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

//event file of socket.io
require('./controllers/socket.controller')(io);

const {PORT} = require('./config/portConfig')
server.listen(PORT || 5000, () => console.log(`Server port:${PORT} has started with socket.`));
