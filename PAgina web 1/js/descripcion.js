
var nBusq ;
cargadorDescripcion();
function cargadorDescripcion()
{
    prodMostrar = JSON.parse(localStorage.getItem("selectedItem"));
    prodImagen=JSON.parse(localStorage.getItem("selectedimagen"));
    console.log( prodMostrar.name);
    document.getElementById("nombreProd").innerHTML = prodMostrar.name;
    document.getElementById("precio").innerHTML = prodMostrar.precio;
    document.getElementById("cantidad").innerHTML = prodMostrar.cantidad;
    document.getElementById("descripcion").innerHTML = prodMostrar.description;
    document.getElementById("imgprod").src = prodImagen;
    document.getElementById("cat").innerHTML=prodMostrar.Categoria;
    anadirNumBusqueda();
}
function anadirNumBusqueda(){
      prodMostrar = JSON.parse(localStorage.getItem("selectedItem"));
        nBusq = parseInt(prodMostrar.busquedas)+1;
        console.log(nBusq);
        buscarMas();
    }
    function buscarMas() {
        prodBusqueda = JSON.parse(localStorage.getItem("selectedItem"));
            allProducts=JSON.parse(localStorage.getItem("products"));
            var name = prodBusqueda.name;
            if (!name)
                   filteredProducts = allProducts;
           else {
                   filteredProducts = [];
                   for(var i=0; i<allProducts.length; i++) {
                            if (allProducts[i].name.toLowerCase().includes(name.toLowerCase())){
                                   allProducts.splice(i,1);
                                    allProducts[i].busquedas=nBusq;
                                    console.log(allProducts[i].name+" "+allProducts[i].busquedas)
                                }
                        }
               }
        }