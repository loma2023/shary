document.querySelector("header")
    .querySelector(".right").querySelectorAll("a")[0].classList.add("hover")

let City = []
if (localStorage.City != null) { City = JSON.parse(localStorage.City) }
let MyCity = []
if (localStorage.MyCity != null) { 
    MyCity = JSON.parse(localStorage.MyCity) ;
    document.querySelector(".Delivery").innerText = (City[MyCity.id].price).toFixed(2);
}

function ShowData() {
    let Shopping = []
    if (localStorage.Shopping != null) { Shopping = JSON.parse(localStorage.Shopping) }
    let element = ""; let timer = 0;
    for (let i = 0; i < Shopping.length; i++) {
        let hiddenColor = "none"; let hiddenSize = "none"; let hiddenWeight = "none"
        if (Shopping[i].color != "none") { hiddenColor = "" }
        if (Shopping[i].size != "none") { hiddenSize = "" }
        if (Shopping[i].weight != "none") { hiddenWeight = "" }
        element += `
                <div class="cart">
                    <img src="${Shopping[i].img}" alt="">
                    <div class="info">
                        <div class="ProdectName">
                            <h1 class="big">${Shopping[i].name}</h1>
                            <i class="new fas fa-xmark" onclick="UnShopping(id)" id="${i}"></i>
                        </div>
                        <div class="center">
                            <h3 style="display: ${hiddenColor};">اللون  : <span style="color:${Shopping[i].color}">${Shopping[i].color}</span></h3>
                            <h3 style="display: ${hiddenSize};">المقاس : <span>${Shopping[i].size}</span></h3>
                            <h3 style="display: ${hiddenWeight};">الوزن  : <span>${Shopping[i].weight}</span></h3>
                        </div>
                        <div class="bottom">
                            <div class="R-div" id=${i}>
                                <i class="fas fa-plus" onclick="plus(event)"></i>
                                <i class="Quantity">${Shopping[i].quantity}</i>
                                <i class="fas fa-minus" onclick="minus(event)"></i>
                            </div>
                            <div class="L-div">
                                <a>KWD</a>
                                <h2>${Shopping[i].price}</h2>
                            </div>
                        </div>
                    </div>
                </div>`
        timer = timer + 1
    }
    let section = document.querySelector(".Shopping")
    section.querySelector(".container").innerHTML = element
    total()
    if (timer == 0) {
        section.querySelector(".NoResult").style.display = ""
    }

}

function UnShopping(id) {
    let Shopping = []
    if (localStorage.Shopping != null) { Shopping = JSON.parse(localStorage.Shopping) }
    Shopping.splice(id, 1);
    localStorage.Shopping = JSON.stringify(Shopping);
    ShowData()
    notificationss()
}

ShowData();


function total() {
    let Shopping = []
    if (localStorage.Shopping != null) { Shopping = JSON.parse(localStorage.Shopping) }
    let total = 0;
    for (let i = 0; i < Shopping.length; i++) {
        total = total + (parseFloat(Shopping[i].price) * parseFloat(Shopping[i].quantity))
    }
    let Delivery = document.querySelector(".Delivery").innerText

    document.querySelector(".SubTotal").innerText = total.toFixed(2)
    document.querySelector(".Total").innerText = (total + parseFloat(Delivery)).toFixed(2)

    if (total == 0) {
        document.querySelector(".cart-total").style.display = "none"
    } else {
        document.querySelector(".cart-total").style.display = ""
    }
}

function minus(event) {
    let Shopping
    if (localStorage.Shopping != null) { Shopping = JSON.parse(localStorage.Shopping) }

    let btn = event.target
    let parent = btn.parentElement
    let Quantity = parent.querySelector(".Quantity")

    if (parseFloat(Quantity.innerText) == 1) {
        Quantity.innerText = 1
    } else {
        Quantity.innerText = parseFloat(Quantity.innerText) - 1
    }
    Shopping[parent.id].quantity = Quantity.innerText
    localStorage.Shopping = JSON.stringify(Shopping);
    total()
}


function plus(event) {
    let Shopping
    if (localStorage.Shopping != null) { Shopping = JSON.parse(localStorage.Shopping) }

    let btn = event.target
    let parent = btn.parentElement
    let Quantity = parent.querySelector(".Quantity")
    Quantity.innerText = parseFloat(Quantity.innerText) + 1

    Shopping[parent.id].quantity = Quantity.innerText
    localStorage.Shopping = JSON.stringify(Shopping);
    total()

}