 const socket=io()

function checkSocketStatus(){
  console.log("Estado del socket : ",socket.connected)
}



socket.on("connect",()=>{
  console.log("el socket se ha conectado",socket.id)
  checkSocketStatus()
})


socket.on("disconnect",()=>{
  console.log("el socket se ha desconectado", socket.id)
  checkSocketStatus()
})

socket.io.on("reconnect_attempt",()=>{
  console.log("Estoy intentando reconectarme 🍔 ")
})
socket.on("connect_error",()=>{
  console.log("no me he posido conectar 😥")
})
socket.io.on("reconnect",()=>{
  console.log("Me he vuelto a conectar 🍗 ")
})
