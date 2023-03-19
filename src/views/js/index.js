

const socket = io()


const circle=document.querySelector("#circle")

const drawCircle=position=>{
      circle.style.top=position.top
    circle.style.left=position.left
}

const drag=e=>{


const position={
    top: e.clientY+"px",
  left:e.clientX+"px"
}
drawCircle(position)
socket.emit("circle position",position)
  
 // circle.style.top=clientY+"px"
 //   circle.style.left=clientX+"px"

}

circle.addEventListener("mousedown",e=>{
  document.addEventListener("mousemove",drag)
})


document.addEventListener("mouseup",e=>{
  document.removeEventListener("mousemove",drag)
})


socket.on("move circle",position=>{
drawCircle(position)
})

/*
socket.on("welcome", data => {
  console.log(data)
  text.textContent = data
})

const emitToServer = document.querySelector("#emit-to-server")

emitToServer.addEventListener("click", () => {
  socket.emit("server", "Hola servidor 👀")
})

socket.on("everyone", data => {
  console.log(data)
})

const emitToLast = document.querySelector("#emit-to-last")

emitToLast.addEventListener("click", () => {
  socket.emit("last", "hola 👍")
})

socket.on("salute", message => {
console.log(message)
})
/*
function checkSocketStatus(){
  console.log("Estado del socket : ",socket.connected)
}



socket.on("connect",()=>{
  console.log("el socket se ha conectado",socket.id)
  checkSocketStatus()
})

socket.on("connect_error",()=>{
  console.log("no me he posido conectar 😥")
})
socket.on("disconnect",()=>{
  console.log("el socket se ha desconectado", socket.id)
  checkSocketStatus()
})

socket.io.on("reconnect_attempt",()=>{
  console.log("Estoy intentando reconectarme 🍔 ")
})

socket.io.on("reconnect",()=>{
  console.log("Me he vuelto a conectar 🍗 ")
})
*/


//on,once y off
/*
socket.on("on",()=>{
  console.log("se emite varias veces")
})
socket.once("once",()=>{
  console.log("se emite una sola vez")
})

const listener= () => {
  console.log("se apaga el evento")
}

socket.on("off",listener)

setTimeout(()=>{
  socket.off("off",listener)
},2000)
*/