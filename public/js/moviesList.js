function qs (element){
    return document.querySelector(element)
}

let $body = qs('body')
let $title = qs('.moviesListTitulo')

let darkMode = confirm('¿Desea modo oscuro?')

if (darkMode) {
    $body.style.backgroundColor = "#7f7f7f"
    $body.classList.add('fondoMoviesList')

} 
    $title.innerText = "Listado de peliculas"
    $title.style.color = "white"
    $title.style.backgroundColor = "teal"
    $title.style.padding = "20px"
    
