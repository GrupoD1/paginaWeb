var btnMenu=document.getElementById('btn-menu');
var nav= document.getElementById('nav');
var allProducts;
var filteredProducts;
var allimagenes;
var filteredimagenes;
var page = 1;
var imagen=new Image();
var imgData;
var imgAsDataURL;

cargador();
function cargador() {
    allProducts = JSON.parse(localStorage.getItem("products"));
    allimagenes=JSON.parse(localStorage.getItem("imagenes"))
    if (!allProducts) {
        allProducts = [
            {
                name: "Batman eau de toilette",
                description: "Batman es una fragancia oriental picante para hombres. La fragancia presenta almizcle, jengibre, pimienta negra, agarwood (oud), mirra y sándalo",
                Categoria:"Hombre",
                precio: "50",
                cantidad: "5"
            },
            {
                name: "Carolina Herrera - GOOD GIRL (Eau de perfume)",
                description: "GOOD GIRL, es una fragancia para mujer oriental floral, que fue lanzada en 2016. El frasco es original y revolucionario en forma de zapato de tacón de aguja negro, con el tacón dorado, envuelto en cristal azul. La perfumista es Louise Turner. En la parte alta de la pirámide encontramos almendra y café, como notas medias cuenta con jazmín sambac y nardos y en la base permanecen haba tonka y cacao. Es una eau de perfume.",
                Categoria: "Mujer",
                precio: "79.95",
                cantidad: "10"
            }

        ];
        localStorage.setItem("products", JSON.stringify(allProducts));
    }
        if (!allimagenes) {
            allimagenes= ["img/img1.jpg","img/img2.jpeg"];
            localStorage.setItem("imagenes",JSON.stringify(allimagenes));
                    }



    filteredProducts = allProducts;
    filteredimagenes= allimagenes;
}
function anadirNuevo(){
    document.getElementById("imgprueba").src=document.getElementById("foto").value;
    imagen = document.getElementById("imgprueba");
    imagen.addEventListener("load", function () {
        var imgCanvas = document.createElement("canvas"),
            imgContext = imgCanvas.getContext("2d");
        imgCanvas.width = imagen.width;
        imgCanvas.height = imagen.height;
        imgContext.drawImage(imagen, 0, 0, imagen.width, imagen.height);
         imgAsDataURL = imgCanvas.toDataURL("image/png");
        allimagenes.push(imgAsDataURL.toString());
        localStorage.setItem("imagenes",JSON.stringify(allimagenes));
    });

    allProducts.push({name: document.getElementById("titulo").value, description: document.getElementById("descrip").value, precio:document.getElementById("precio").value, cantidad:document.getElementById("cantidad").value, busquedas:"0",Categoria:document.getElementById("mySelect").value});
    localStorage.setItem("products",JSON.stringify(allProducts));
}


    /**
 * Created by Usuario on 11/5/2017.
 */
