cargadorDescripcion();
function cargadorDescripcion()
{
        prodMostrar = JSON.parse(localStorage.getItem("selectedItem"));
        console.log( prodMostrar.name);
         document.getElementById("nombreProd").innerHTML = prodMostrar.name;
        document.getElementById("precio").innerHTML = prodMostrar.precio;
        document.getElementById("cantidad").innerHTML = prodMostrar.cantidad;
        document.getElementById("descripcion").innerHTML = prodMostrar.description;
         document.getElementById("imgprod").src = prodMostrar.image;
    }