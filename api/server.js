const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const loginRouter = require('./auth/auth.router.js');
const usersRouter = require('../routes/users.routes')
const victimRouter = require('../routes/victim.routes')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());


server.use('/api/auth', loginRouter);
server.use('/api/users', usersRouter);
server.use('/api/victim', victimRouter);


server.get('/', (req, res) => {
	res.send("server's here!");
});

server.use('/docs', express.static('./docs'));

module.exports = server;
