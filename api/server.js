const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const loginRouter = require('./auth/auth.router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());


server.use('/api/auth', loginRouter);
server.get('/', (req, res) => {
	res.send("server's here!");
});


module.exports = server;
