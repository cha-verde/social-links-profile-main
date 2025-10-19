const links = document.querySelectorAll('.social-link')
let firstTime = false;
let position = 0;
console.log(links)

document.addEventListener('mousemove', () => {
    links.forEach((x) => {
            x.blur();
    })
})

document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowDown'){
        if(!firstTime){
            links[position].focus();
            firstTime = true;
        }
        else{
            if(position < 2){
            position++;
            links[position].focus();
            }
        }
    }

    if(event.key === 'ArrowUp'){
        if(!firstTime){
            position = 2;
            links[position].focus();
            firstTime = true;
        }
        else{
            if(position > 0){
            position--;
            links[position].focus();
            }
        }
    }

    if(event.key === 'Enter'){
        links[position].click();
    }
})