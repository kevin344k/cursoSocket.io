
const socket = io()
//selecciona los botones que ,me permitiran conectarme a las salas 
const connectRoom1=document.querySelector("#connectRoom1")
const connectRoom2=document.querySelector("#connectRoom2")
const connectRoom3=document.querySelector("#connectRoom3")

//eventos para que al hacer click me conecte a las salas

connectRoom1.addEventListener("click",()=>{
  socket.emit("connect to room","room1")
})
connectRoom2.addEventListener("click",()=>{
  socket.emit("connect to room","room1")
})
connectRoom3.addEventListener("click",()=>{
  socket.emit("connect to room","room1")
})


//Enviar mensaje
const sendMessage=document.querySelector("#sendMessage")
sendMessage.addEventListener("click",()=>{
  const message=prompt("Escribe tu mensaje:")
  socket.emit("message",message)
})

//recibir el mensaje

socket.on("send message",data=>{
  const {room}=data;
    const {message}=data;

  const li=document.createElement("li")
  li.textContent=message
  document.querySelector(`#${room}`).append(li)
})