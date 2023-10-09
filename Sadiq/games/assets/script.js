const input = document.querySelector('input');
const guess = document.querySelector('.guess');
const checkBtn = document.querySelector('button');
const remainChences = document.querySelector('.chances');

input.focus();

let randomNum = math.floor(math.random()*100);
chance = 10;

checkBtn.addEventListener('click', ()=>{
    chance--;
    let inputValue = input.value;
    if( inputValue == randomNum ){
        [ guess.textContent, input.disabled ] = [ 'Congratulations', true ];
        [ checkBtn, guess.style.color ] = [ 'Replay', '#333' ];
    }else if( inputValue > randomNum && inputValue < 100 ){
        [ guess.textContent, remainChences.textContent ] = [ 'Your guess is high', chance ];
        guess.style.color = '#333'
    }else if( inputValue < randomNum && inputValue > 0 ){
        [ guess.textContent, remainChences.textContent ] = [ 'Your guess is low', chance ];
        guess.style.color = '#333'
    }else{
        [ guess.textContent, remainChences.textContent ] = [ 'Your number is Invalid', chance ];
        guess.style.color = '#DE0611'
    }

    if( chance == 0 ){
        [ checkBtn.textContent, input.disabled, inputValue ] = [ 'Replay', true, '' ];
        [ guess.textContent, guess.style.color ] = [ 'You lost the game', '#DE0611' ];
    }

    if( chance < 0 ){
        window.location.reload();
    }
})