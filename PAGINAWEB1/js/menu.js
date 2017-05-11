var btnMenu=document.getElementById('btn-menu');
var nav= document.getElementById('nav');
btnMenu.addEventListener('click',function(){
    nav.classList.toggle('mostrar');
})

var allProducts;
var filteredProducts;
var page = 1;
var selPopUp;

loader();

function loader() {
    allProducts = JSON.parse(localStorage.getItem("products"));
    if (!allProducts) {
        allProducts = [
            {name: "perfume1", description: "perfume", precio:"5" ,cantidad:"10", image: "IMG/img1.jpg"},
            {name: "perfume2", description: "perfume", precio:"6" ,cantidad:"11", image: "IMG/img2.jpeg"}
        ];
        localStorage.setItem("products", JSON.stringify(allProducts));
    }
    filteredProducts = allProducts;
    show();
}

function show() {
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

function searchForPerfume() {
    var name = document.getElementById("searchFilter").value;
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
    show();
}


function prevPage() {
    console.log("hello");
    if (page > 1) {
        page--;
        show();
    }
    else
        alert("Primera Pagina alcanzada");
}

function nextPage() {
    if (Math.ceil(filteredProducts.length / (page * 4)) > 1) {
        page++;
        show();
    }
    else
        alert("Ultima Pagina alcanzada");
}

function addNew() {
    allProducts.push({name: "perfume", description: "perfume", image: "IMG/img1.jpg"});
    localStorage.setItem("products", JSON.stringify(allProducts));
    searchForPerfume();
}

function openDetails(viewPos) {
    arrayPos = viewPos - 1 + (page * 4 - 4);;
    localStorage.setItem("selectedItem", JSON.stringify(filteredProducts[arrayPos]));
    
}


