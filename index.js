let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);


app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/index.html');
});

http.listen(3000, ()=>{
    console.log("connected done");
})

io.on('connection', (socket)=>{


    //console.log(Object.keys(io.sockets.sockets.connected).length)
    console.log(io.sockets.connected);

    //io.emit('connections', Object.keys(io.sockets.connected).length)



    // if (typeof Object.keys(io.sockets.connected) !== 'undefined' && Object.keys(io.sockets.connected).length > 0) {
    //     console.log(Object.keys(io.sockets.connected).length)
    // }


    

//     let connectedUsersCount = Object.keys(io.sockets.sockets).length;
//   let oneUserLeft = connectedUsersCount - 1;

//   console.log(oneUserLeft)


    socket.on('disconnect', ()=>{
        console.log('Disconnected');
    })

    socket.on('Created', (data) => {
        socket.broadcast.emit('Created', (data))
    })

    socket.on('chat-message', (data) => { 
        socket.broadcast.emit('chat-message', (data))
    })

    socket.on('typing', (data) => { 
        socket.broadcast.emit('typing', (data))
    })

    socket.on('stopTyping', (data) => { 
        socket.broadcast.emit('stopTyping', (data))
    })
    socket.on('joined', (data) => { 
        socket.broadcast.emit('joined', (data))
    })

    socket.on('leaved', (data) => { 
        socket.broadcast.emit('leaved', (data))
    })
    
})