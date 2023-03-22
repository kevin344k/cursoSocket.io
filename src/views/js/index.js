

const socket = io({auth:{
  token:"Mr. Michi s genial"
}})

//en caso de error en el middleware

socket.on("connect_error",err=>{
  console.log("error de conexión")
  console.log(err.message)
  console.log(err.data.details)
})