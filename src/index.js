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
//Broadcast de eventos

  socket.on("circle position",position=>{
    socket.broadcast.emit("move circle",position)
  })
  

  /*
 // console.log(socket.id)
 // console.log("clientes conectdos :", io.engine.clientsCount)

/*socket.on("disconnect",()=>{
  
  console.log("El socket "+ socket.id+ "se ha desconectado")
})
socket.conn.once("upgrade",()=>{
  console.log("hemos pasado de HTTP Long-Polling a ",socket.conn.transport.name)
})


//emision basica

  socketsOnline.push(socket.id)
  console.log(socketsOnline)
  socket.emit("welcome","Ahora estas conectado 😎.")

socket.on("server",data=>{
  console.log(data)
})

  //emision a todos

  io.emit("everyone","El cliente : "+socket.id+"se ha conectado 👀")

  //emision a uno solo

  socket.on("last",message=>{
    const lastSocket=socketsOnline[socketsOnline.length-1]

    io.to(lastSocket).emit("salute",message)
    
  })


  //on,once y off
  /*socket.emit("on","hola")
    socket.emit("on","hola")
socket.emit("once","hola")
  socket.emit("once","hola")
  
socket.emit("off","hola")

  setTimeout(()=>{
    socket.emit("off","hola")
  },3000)
  */
})


httpServer.listen(port)