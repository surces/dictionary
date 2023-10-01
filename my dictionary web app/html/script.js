
const input = document.querySelector('input');
const btn = document.querySelector('button');
const dictionary = document.querySelector('.dictionary');

async function dictionaryfn(word){
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(res => res.json());

    return res[0];
}

btn.addEventListener('click', fetchAndCreateCard);

async function fetchAndCreateCard(){
    const word = input.value;
    const data = await dictionaryfn(word);

    let partOfSpeechArray = [];
    for(let i = 0; i < data.meanings.length; i++){
        partOfSpeechArray.push(data.meanings[i].partOfSpeech);
    }

    dictionary.innerHTML = `<div class="card">
    <div class="property">
        <span>Word:</span>
        <span>${data.word}</span>
    </div>

    <div class="property">
        <span>Phonetic:</span>
        <span>${data.phonetic}</span>
    </div>

    <div class="property">
    <span>Audio:</span>
    <audio id="audio" controls>
        <source src="${data.phonetics[0].audio}" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>
    <button id="playButton">Play</button>
</div>

    <div class="property">
        <span>Definition:</span>
        <span>${data.meanings[0].definitions[0].definition}</span>
    </div>

    <div class="property">
        <span>Example:</span>
        <span>${data.meanings[0].definitions[0].example}</span>
    </div>

    <div class="property">
        <span>Part of speech:</span>
        <span>${partOfSpeechArray.join(', ')}</span>
    </div>
    </div>`;
} 

const audioElement = document.getElementById('audio');
const playButton = document.getElementById('playButton');

function toogleAudio(){
    if(audioElement.pause){
        audioElement.play();
        playButton.textContent = 'pause';
    }
   
   else {
    audioElement.pause();
    playButton.textContent = 'play';

}
}

playButton.addEventListener('click', toogleAudio); 
