let countEl = document.querySelector('#counter');//NUMBER COUNT
let increment = document.querySelector('#increment');//INCREASE BUTTON
let save = document.querySelector('#save');//SAVE BUTTON
let saved = document.querySelector('#saved');//SAVED NUMBER

count = 0;

increment.addEventListener('click', () => {
    countEl.textContent = ++count
});


save.addEventListener('click', () =>{
    savedNum = countEl.textContent + ' - '
    saved.textContent += savedNum
});