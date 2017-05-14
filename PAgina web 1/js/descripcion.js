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
    }

