const express=require("express")
const {createServer}=require("http")
const {Server}=require("socket.io")
const path=require("path")
const port=process.env.PORT || 3000


const app=express()
const httpServer=createServer(app)
const io=new Server(httpServer)


app.use(express.static(path.join(__dirname,"views")))

app.get("/",(req,res)=>{
  res.sendFile(__dirname+"views/index.html")
})


io.on("connection",socket=>{
 // console.log(socket.id)
 // console.log("clientes conectdos :", io.engine.clientsCount)

/*socket.on("disconnect",()=>{
  
  console.log("El socket "+ socket.id+ "se ha desconectado")
})*/

})


httpServer.listen(port)