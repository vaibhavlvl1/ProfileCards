const heading = 'Please Meet Our Team';
let i = 0;

function typing() {
    if(i < heading.length){
        document.querySelector('.heading').innerHTML += heading[i];
        i++;

        setTimeout(typing,150);
    }
}

typing();
