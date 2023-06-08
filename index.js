function carregar(){
const msg = document.getElementById('msg')
const img = document.getElementById('img')
const data = new Date()
const hora = data.getHours()
msg.innerHTML = 'Agora são ' + hora + 'horas'
if(hora >= 0 && hora < 12){
 img.src = 'manhã.jpg'
 document.body.style.background = '#2BE0AA'
}else if(hora >= 12 && hora <= 18){
  img.src = 'tarde.jpg'
  document.body.style.background = '#EFA133'
}else{
  img.src = 'noite.jpg'
  document.body.style.background = '#131D37'
}
}

