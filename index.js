const server = require('./api/server.js');

const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`Server is listening now on port ${port}`);
});

// items not working 
// cannot put victims
// 
//
