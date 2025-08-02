
window.addEventListener('load', async () => {
    let textarea = document.querySelector('.text');
    let botaoOcultar =  document.querySelector('.linkFlut');
    botaoOcultar.addEventListener("click", function(event) {
        event.preventDefault();
        if(textarea.style.display === "none" || textarea.style.display === ""){
            textarea.style.display = "block";
         }else {
            textarea.style.display = "none";
         }
    });
})
