var btnMenu=document.getElementById('btn-menu');
var nav= document.getElementById('nav');
var allProducts;
var filteredProducts;
var page = 1;

cargador();
function cargador() {
    allProducts = JSON.parse(localStorage.getItem("products"));
    if (!allProducts) {
        allProducts = [
            {name: "Batman eau de toilette",busquedas:"0" ,categoria:"Hombre" , description: "Batman es una fragancia oriental picante para hombres. La fragancia presenta almizcle, jengibre, pimienta negra, agarwood (oud), mirra y sándalo", precio: "50", cantidad: "5", image: "IMG/p6.jpg"},
            {name: "Carolina Herrera - GOOD GIRL (Eau de perfume)",busquedas:"0" ,categoria:"Mujer" , description: "GOOD GIRL, es una fragancia para mujer oriental floral, que fue lanzada en 2016. El frasco es original y revolucionario en forma de zapato de tacón de aguja negro, con el tacón dorado, envuelto en cristal azul. La perfumista es Louise Turner. En la parte alta de la pirámide encontramos almendra y café, como notas medias cuenta con jazmín sambac y nardos y en la base permanecen haba tonka y cacao. Es una eau de perfume.", precio: "79.95", cantidad: "10", image: "IMG/p1.jpg"}
        ];
        localStorage.setItem("products", JSON.stringify(allProducts));
    }
    filteredProducts = allProducts;
}
function anadirNuevo(){

    allProducts.push({
    name: document.getElementById("titulo").value,
    busquedas:"0",
    categoria:document.getElementById("categoria").value,
    description: document.getElementById("descrip").value, precio:document.getElementById("precio").value, cantidad:document.getElementById("cantidad").value,
    image:"IMG/"+document.getElementById("foto").value});
    localStorage.setItem("products",JSON.stringify(allProducts));
}
    /**
 * Created by Usuario on 11/5/2017.
 */
