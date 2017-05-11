var btnMenu=document.getElementById('btn-menu');
var nav= document.getElementById('nav');
btnMenu.addEventListener('click',function(){
    nav.classList.toggle('mostrar');
})

var allProducts;
var filteredProducts;
var page = 1;

cargador();
function cargador() {
    allProducts = JSON.parse(localStorage.getItem("products"));
    if (!allProducts) {
        allProducts = [
            {name: "Batman eau de toilette", description: "Batman es una fragancia oriental picante para hombres. La fragancia presenta almizcle, jengibre, pimienta negra, agarwood (oud), mirra y sándalo", precio: "50", cantidad: "5", image: "IMG/p6.jpg"},
            {name: "Carolina Herrera - GOOD GIRL (Eau de perfume)", description: "GOOD GIRL, es una fragancia para mujer oriental floral, que fue lanzada en 2016. El frasco es original y revolucionario en forma de zapato de tacón de aguja negro, con el tacón dorado, envuelto en cristal azul. La perfumista es Louise Turner. En la parte alta de la pirámide encontramos almendra y café, como notas medias cuenta con jazmín sambac y nardos y en la base permanecen haba tonka y cacao. Es una eau de perfume.", precio: "79.95", cantidad: "10", image: "IMG/p1.jpg"}
                ];
        localStorage.setItem("products", JSON.stringify(allProducts));
    }
    filteredProducts = allProducts;
    mostrar();
}

function mostrar() {
    var posPage = page * 4 - 4;
    var arrayPos = 0;
    for (var i = 1; i < 5; i++) {
        arrayPos = i - 1 + posPage;
        if (filteredProducts.length <= arrayPos) {
            document.getElementById("prod" + i).style.display = "none";
        } else {
            document.getElementById("prod" + i).style.display = "block";
            document.getElementById("prod" + i + "-img").src = filteredProducts[arrayPos].image;
            document.getElementById("prod" + i + "-title").innerHTML = filteredProducts[arrayPos].name;
            document.getElementById("prod" + i + "-description").innerHTML = filteredProducts[arrayPos].description;
        }
    }
}
function buscar() {
    var name = document.getElementById("buscador").value;
    if (!name)
        filteredProducts = allProducts;
    else {
        filteredProducts = [];
        for(var i=0; i<allProducts.length; i++) {
            if (allProducts[i].name.toLowerCase().includes(name.toLowerCase())){
                filteredProducts.push(allProducts[i]);
            }
        }
    }
    mostrar();
}
function prevPage() {
        if (page > 1) {
        page--;
        mostrar();
    }
    else
        alert("Primera Pagina alcanzada");
}

function nextPage() {
    if (Math.ceil(filteredProducts.length / (page * 4)) > 1) {
        page++;
        mostrar();
    }
    else
        alert("Ultima Pagina alcanzada");
}
function openDetails(viewPos) {
    arrayPos = viewPos - 1 + (page * 4 - 4);;
    localStorage.setItem("selectedItem", JSON.stringify(filteredProducts[arrayPos]));

}