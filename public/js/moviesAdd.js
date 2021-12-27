function qs (element){
    return document.querySelector(element)
}

let $title = qs('.moviesAddTitulo')
let $section = qs('#formulario')
let $article = qs('article')

$title.innerText = "Agregar pelicula"
$title.classList.add('titulo')
$article.classList.add('fondoTransparente')
$section.classList.add('fondoCRUD')