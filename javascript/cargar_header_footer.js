document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    const footer = document.getElementById("footer");
  
    Promise.all([
      fetch("../html/header.html")
        .then(res => res.text())
        .then(data => {
          header.innerHTML = data;
        }),
      fetch("../html/footer.html")
        .then(res => res.text())
        .then(data => {
          footer.innerHTML = data;
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