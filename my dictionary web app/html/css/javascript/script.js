const input = document.querySelector('input')
const btn = document.querySelector('button')
const dictionary = document.querySelector('dictionary')

//https://api.dictionaryapi.dev/api/v2/entries/en/<word>

async function dictionaryfn(word){
    const res = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/$(word)')
    .then (res => res.jason())

    console.log(res)
}



btn.addEventListener('click, fetchAndCreatCard')



async function fetchAndCreateCard(){
    const data = await  dictionaryfn('input.value')

}