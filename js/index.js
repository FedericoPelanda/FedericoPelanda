document.addEventListener('DOMContentLoaded',()=>{

    let usuario = JSON.parse(localStorage.getItem('user'));

    if(usuario == null){
        alert("Es necesario iniciar sesión.");
        
    } else {
        document.getElementById('usuario');
    }
}
)

function logOut(){
    localStorage.clear();
    
}

document.getElementById('logOut').addEventListener('click', ()=>{
    logOut();
})

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});