document.querySelector("header")
    .querySelector(".right").querySelectorAll("a")[1].classList.add("hover")

function ShowData() {
    let Favorate = []
    if (localStorage.Favorate != null) { Favorate = JSON.parse(localStorage.Favorate) }
    let products = []
    if (localStorage.products != null) { products = JSON.parse(localStorage.products) }
    let element = "";let timer = 0
    for (let i = 0; i < Favorate.length; i++) {
        element += `
                <div class="cart">
                <img src="${products[Favorate[i].id].photo1}" alt="">
                <h1>${products[Favorate[i].id].name}</h1>
                <div class="price1">
                    <i>KWD</i>
                    <h3>${products[Favorate[i].id].price1}</h3>
                </div>
                <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                </div>  
                <div class="icons" id="${Favorate[i].id}">
                    <a class="fas fa-shopping-cart" onclick="Details(id)" id="${i}"></a>
                    <a class="fas fa-heart" onclick="UnFavorate(id)" id="${i}"></a>
                </div>                  
            </div>`

                timer =timer + 1
    }
    let section = document.querySelector(".Favorate")
    section.querySelector(".container").innerHTML = element
    if (timer == 0) {
        section.querySelector(".NoResult").style.display = ""
    }

}

function UnFavorate(id) {
    let Favorate = []
    if (localStorage.Favorate != null) { Favorate = JSON.parse(localStorage.Favorate) }
    Favorate.splice(id, 1);
    localStorage.Favorate = JSON.stringify(Favorate);
    ShowData()

    notificationss()

}

ShowData();