const input= document.getElementById('button');

function clickAlert(){
    alert("Surprise pal")
}
function addingEventListener() {
    input.addEventListener('click',clickAlert);
}
