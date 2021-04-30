
const parrafos = document.querySelectorAll('p');

for (const parrafo of parrafos) {
    parrafo.innerHTML = parrafo.innerText
    .split(' ')
    .map(word => word.length > 5 ? `<u>${word}</u>` : word)
    .join(' ');    
}
