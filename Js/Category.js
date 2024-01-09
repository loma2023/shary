document.querySelector("header")
    .querySelector(".right").querySelectorAll("a")[2].classList.add("hover")

function ShowData() {
    let products = []
    if (localStorage.products != null) { products = JSON.parse(localStorage.products) }
    let category = []
    if (localStorage.category != null) { category = JSON.parse(localStorage.category) }
    let element = "";
    for (let i = 0; i < products.length; i++) {
        let available = "";
        if (products[i].status1 === "متوفر") {available = "none"}

        if (products[i].categories == category[0].name) {
            element += `
            <div class="cart">
            <div class="available" style="display:${available}"><span>غير متوفر<span></div>
                <img src="${products[i].photo1}" alt="">
                <h1>${products[i].name}</h1>
                <div class="price1">
                    <i>KWD</i>
                    <h3>${products[i].price1}</h3>
                </div>
                <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                </div>  
                <div class="icons" id="${i}">
                    <a class="fas fa-shopping-cart" onclick="Details(id)" id="${i}"></a>
                    <a class="fas fa-heart" onclick="Favorate(event)"></a>
                </div>                  
            </div>`

        }
    }
    let section = document.querySelector(".products")
    section.querySelector(".Title").innerText = category[0].name
    section.querySelector(".container").innerHTML = element
}

ShowData();