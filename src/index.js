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

//middleware para determinar si esta autenticado o no 
io.use((socket,next)=>{
  const token=socket.handshake.auth.token

  if(token=="Mr. Michi es genial"){
    next()
  }
  else{
    const err=new Error("No puedes pasar ")
    err.data={
      details:"no pudiste ser autenticado"
    }
    console.log(err)
    next(err)
  }
})


io.use((socket,next)=>{
  next()
})

io.on("connection",socket=>{
//Broadcast de eventos

  console.log(socket.id)

})


httpServer.listen(port)