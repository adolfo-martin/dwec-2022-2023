document.addEventListener('DOMContentLoaded', setup);

function setup() {
    retrieveSentence();
}

function retrieveSentence() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => translateSentenceFromEnglishToSpanish(data.value))
        .then(response => response.json())
        .then(data => showSentence(data[0][0][0]))
        .catch(error => console.error(`ERROR: ${error}`))
}


function translateSentenceFromEnglishToSpanish(sentenceInEnglish) {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=es&dt=t&q=${sentenceInEnglish}`;
    return fetch(url);
}


function showSentence(sentence) {
    const nParagraph = document.querySelector('#tParSentence');
    nParagraph.textContent = sentence;
}