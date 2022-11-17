document.addEventListener('DOMContentLoaded', setup);

function setup() {
    retrieveSentence();
}

function retrieveSentence() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => showSentence(data.value))
        .catch(error => console.error(`ERROR: ${error}`))
}

function showSentence(sentence) {
    const nParagraph = document.querySelector('#tParSentence');
    nParagraph.textContent = sentence;
}