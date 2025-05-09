// const Kalinchwok = document.getElementById("Kalinchwok");
// const navlinks = document.getElementById("navlinks");

// Kalinchwok.addEventListener('click',()=>{navlinks.classList.toggle('active')});


const text = "Welcome to Kalinchwok Resort";
const typedtext = document.getElementById('typed-text');
let index = 0;
function type(){
    if (index < text.length){
        typedtext.textContent += text.charAt(index);
        index++;
        setTimeout(type,150);
}
}
type();
