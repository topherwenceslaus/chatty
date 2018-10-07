const server = require('http').createServer();
const io = require('socket.io')(server);

io.on('connection', (client) => { 

  client.on('newchat', (username) => {
    client.username = username 
    client.emit('welcome',{username :client.username })
  });

  client.on('msg', (msg) => {
    let data= {username: client.username , msg: `${msg} AH`}
    console.log(data)
    io.sockets.emit('msgrec', data);
  }); 
});

const port = 8080;
server.listen(port);
console.log('listening on port ', port);