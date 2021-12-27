function qs (element){
    return document.querySelector(element)
}


let $main = qs('.container')
let $subtitle = qs('.subtitulo')
let $link = qs('a')
let $paragraph = document.querySelectorAll('p')

let userName = prompt('Ingrese su nombre');
 //promt('Ingrese su nombre) ?? 'Invitado'

userName.trim() !== ""  /* trim para que no haya espacios vacios */
?($subtitle.innerText += `${userName}`)
:($subtitle.innerText += "Invitado");
$subtitle.style.textTransform = "uppecase"
$link.style.color = "#E51B3E"

let background = confirm('¿Desea colocar un fondo de pantalla?')

background && document.body.classList.add('fondo')

$paragraph.forEach((element, index) =>{
    if((index + 1)% 2 === 0){
    element.classList.add("destacadoPar")
}else{
    element.classList.add("destacadoImpar")
}
})

$main.style.display = "block"