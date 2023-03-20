const express=require("express")
const {createServer}=require("http")
const {Server}=require("socket.io")
const path=require("path")
const port=process.env.PORT || 3000


const app=express()
const httpServer=createServer(app)
const io=new Server(httpServer)
//const socketsOnline=[]


app.use(express.static(path.join(__dirname,"views")))

app.get("/",(req,res)=>{
  res.sendFile(__dirname+"views/index.html")
})


io.on("connection",socket=>{

socket.connectionRoom=""
  
socket.on("connect to room",room=>{
  socket.leave(socket.connectionRoom)
  switch(room){
    case "room1":
      socket.join("room1")
      socket.connectionRoom="room1"
      break;
          case "room2":
      socket.join("room2")
      socket.connectionRoom="room2"
      break;
          case "room3":
      socket.join("room3")
      socket.connectionRoom="room3"
      break;
  }
})
  
})
socket.on("message",message=>{
  const room=socket.connectionRoom
  io.to(room).emit("send message",{
    message.
    room
  })
})

httpServer.listen(port)