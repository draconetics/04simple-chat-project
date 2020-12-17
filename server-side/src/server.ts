import userRoutes from './routes/user.route'
const express = require('express');
const cors = require('cors');
const http = require('http');
const path = require('path');

import { Response, Request} from 'express'
import { addUser } from './controllers/user.controller';
// Create a new express app instance
const app = express();
app.use(cors())
app.use(userRoutes);
app.use(express.static(path.resolve('./public')));


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
const db = require('./config/db')
db.connect()
  .then(() => {
    console.log('database connected..');
    server.listen(PORT || 5000, () => console.log(`Server port:${PORT} has started with socket.`));
  });