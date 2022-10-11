let text = document.querySelector('h1')

function inside () {
    console.log('Mouse in')
}
text.addEventListener('mouseenter',inside)
function outside () {
    console.log('Mouse out')
}
text.addEventListener('mouseleave',outside)