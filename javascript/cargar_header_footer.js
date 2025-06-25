document.addEventListener("DOMContentLoaded", () => {

  console.log("Entrando al script de JS")


    const header = document.getElementById("header");
    const footer = document.getElementById("footer");
  
    Promise.all([
      fetch("../html/header.html")
        .then(res => res.text())
        .then(data => {
          header.innerHTML = data;
          console.log("Carga header ")
        }),
      fetch("../html/footer.html")
        .then(res => res.text())
        .then(data => {
          footer.innerHTML = data;
          console.log("Carga footer")
        })
    ]).then(() => {
      // Ocultar el loader cuando ambos hayan terminado
      const loader = document.getElementById("loader");
      if (loader) {
        loader.style.display = "none";
      }
    });
  });

  /*document.addEventListener("DOMContentLoaded",function()
{
fetch('../html/header.html')
.then(response=>response.text())
.then(data=>{
    document.getElementById('header').innerHTML=data;   
});

fetch('../html/footer.html')
.then(response=>response.text())
.then(data=>{
    document.getElementById('footer').innerHTML=data;   
});
});*/