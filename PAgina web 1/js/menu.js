var btnMenu=document.getElementById('btn-menu');
var nav= document.getElementById('nav');
btnMenu.addEventListener('click',function(){
    nav.classList.toggle('mostrar');
})

var allProducts;
var filteredProducts;
var page = 1;
var allimagenes;
var filteredimagenes;


cargador();
function cargador() {
    allProducts = JSON.parse(localStorage.getItem("products"));
    allimagenes=JSON.parse(localStorage.getItem("imagenes"))
    if (!allProducts) {
        allProducts = [
            {
                name: "Batman eau de toilette",
                Categoria: "Hombre",
                description: "Batman es una fragancia oriental picante para hombres. La fragancia presenta almizcle, jengibre, pimienta negra, agarwood (oud), mirra y sándalo",
                precio: "50",
                busquedas: "0",
                cantidad: "5"
            },
            {
                name: "Carolina Herrera - GOOD GIRL (Eau de perfume)",
                Categoria: "Mujer",
                description: "GOOD GIRL, es una fragancia para mujer oriental floral, que fue lanzada en 2016. El frasco es original y revolucionario en forma de zapato de tacón de aguja negro, con el tacón dorado, envuelto en cristal azul. La perfumista es Louise Turner. En la parte alta de la pirámide encontramos almendra y café, como notas medias cuenta con jazmín sambac y nardos y en la base permanecen haba tonka y cacao. Es una eau de perfume.",
                precio: "79.95",
                busquedas: "0",
                cantidad: "10"
            }

        ];
        localStorage.setItem("products", JSON.stringify(allProducts));
    }
    if (!allimagenes) {
        allimagenes= ["img/p6.jpg","img/p1.jpg"];
        localStorage.setItem("imagenes",JSON.stringify(allimagenes));
    }



    filteredProducts = allProducts;
    filteredimagenes= allimagenes;
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
            document.getElementById("prod" + i + "-img").src = filteredimagenes[arrayPos];
            document.getElementById("prod" + i + "-title").innerHTML = filteredProducts[arrayPos].name;
            document.getElementById("prod" + i + "-description").innerHTML = filteredProducts[arrayPos].description;
        }
    }
}
function buscar() {
    var name = document.getElementById("buscador").value;
    if (!name) {
        filteredProducts = allProducts;
        filteredimagenes = allimagenes;
    }
    else {
        filteredimagenes= [];
        filteredProducts = [];
        for(var i=0; i<allProducts.length; i++) {
            if (allProducts[i].name.toLowerCase().includes(name.toLowerCase())){
                filteredProducts.push(allProducts[i]);
                filteredimagenes.push(allimagenes[i]);
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
    localStorage.setItem("selectedimagen",JSON.stringify(filteredimagenes[arrayPos]));

}
function buscarcategoria() {
    var Cate = document.getElementById("categoria").value;
    if (!Cate) {
        filteredProducts = allProducts;
        filteredimagenes = allimagenes;
    }
    else {
        filteredProducts = [];
        filteredimagenes = [];
        for(var i=0; i<allProducts.length; i++) {
            if (allProducts[i].Categoria.toLowerCase().includes(Cate.toLowerCase())){
                filteredProducts.push(allProducts[i]);
                filteredimagenes.push(allimagenes[i]);
            }
        }
    }
    mostrar();
}
