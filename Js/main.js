document.querySelector("header").innerHTML = `
<div class="right">
    <a href="Shopping.html" class="fa fa-cart-shopping"><span>/span></a>
    <a href="Favorate.html" class="fa-solid fa-heart"><span></span></a>
    <a href="Categories.html" class="fa fa-grip-vertical"></a>
    <a href="Home.html" class="fa-solid fa-house"></a>
</div>

<div class="center">
    <div class="search_bar">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="ابحث هنا" onkeyup="Search(value)" onclick="Search(value)">
    </div>
    <div class="search_list" style="display: none;"></div>
</div>

<div class="left">
    <!-- <a href="#">Shary</a> -->
    <img src="Css/logo.jpg" alt="">
</div>`

document.querySelector("body").innerHTML += `
<div class="Msg-Box" id="">
        <div class="Message">
            <i class="fa fa-cloud-arrow-up"></i>
            <h1> جارِ حفظ البيانات </h1>
            <div class="loader">
                <div class="load"></div>
            </div>
            <div class="btn-oky"></div>
        </div>
    </div>
    <audio src="CSS/Msg.mp3"></audio>

`


function Hide_Msg() {
    document.querySelector(".Msg-Box").classList.remove("active")
    document.querySelector(".Msg-Box").id = ""
}

function CompleteData(txt) {
    let MsgBox = document.querySelector(".Msg-Box")
    MsgBox.querySelector(".loader").style.display = "none"
    MsgBox.querySelector(".btn-oky").style.display = "grid"
    MsgBox.querySelector(".btn-oky").innerHTML = `<a onclick="Hide_Msg()">موافق</a>`
    MsgBox.querySelector("i").classList.add("fa-exclamation")
    MsgBox.querySelector("i").classList.remove("fa-check")
    MsgBox.querySelector("i").classList.remove("fa-xmark")
    MsgBox.querySelector("i").classList.remove("fa-trash")
    MsgBox.querySelector("i").classList.remove("fa-cloud-arrow-up")
    MsgBox.querySelector("h1").innerText = txt
    MsgBox.classList.add("active")
}

function LoadSave(txt) {
    document.querySelector("audio").play();
    let MsgBox = document.querySelector(".Msg-Box")
    MsgBox.querySelector(".loader").style.display = "flex"
    MsgBox.querySelector(".btn-oky").style.display = "none"
    MsgBox.querySelector("i").classList.add("fa-cloud-arrow-up")
    MsgBox.querySelector("i").classList.remove("fa-exclamation")
    MsgBox.querySelector("i").classList.remove("fa-check")
    MsgBox.querySelector("i").classList.remove("fa-xmark")
    MsgBox.querySelector("i").classList.remove("fa-trash")
    MsgBox.querySelector("h1").innerText = txt

    MsgBox.classList.add("active")
}

function SuccessSave(txt) {
    let MsgBox = document.querySelector(".Msg-Box")
    MsgBox.querySelector(".loader").style.display = "none"
    MsgBox.querySelector(".btn-oky").style.display = "grid"
    MsgBox.querySelector(".btn-oky").innerHTML = `<a onclick="location.reload()">موافق</a>`
    MsgBox.querySelector("i").classList.add("fa-check")
    MsgBox.querySelector("i").classList.remove("fa-exclamation")
    MsgBox.querySelector("i").classList.remove("fa-xmark")
    MsgBox.querySelector("i").classList.remove("fa-trash")
    MsgBox.querySelector("i").classList.remove("fa-cloud-arrow-up")
    MsgBox.querySelector("h1").innerText = txt
    MsgBox.classList.add("active")
}

function failedSave(err) {
    let MsgBox = document.querySelector(".Msg-Box")
    MsgBox.querySelector(".loader").style.display = "none"
    MsgBox.querySelector(".btn-oky").style.display = "grid"
    MsgBox.querySelector(".btn-oky").innerHTML = `<a onclick="Hide_Msg()">موافق</a>`
    MsgBox.querySelector("i").classList.add("fa-xmark")
    MsgBox.querySelector("i").classList.remove("fa-check")
    MsgBox.querySelector("i").classList.remove("fa-exclamation")
    MsgBox.querySelector("i").classList.remove("fa-trash")
    MsgBox.querySelector("i").classList.remove("fa-cloud-arrow-up")
    MsgBox.querySelector("h1").innerText = "خطأ في الانترنت اعد المحاوله"
    MsgBox.classList.add("active")

}



function notificationss() {
    let header = document.querySelector("header")
    let btn1 = header.querySelector(".fa-cart-shopping");
    let btn2 = header.querySelector(".fa-heart");

    let Shopping = []
    if (localStorage.Shopping != null) { Shopping = JSON.parse(localStorage.Shopping) }

    let Favorate = []
    if (localStorage.Favorate != null) { Favorate = JSON.parse(localStorage.Favorate) }

    if (Shopping.length > 0 && Shopping.length <= 9) {
        btn1.querySelector("span").classList.add("active");
        btn1.querySelector("span").innerText = Shopping.length
    } else if (Shopping.length > 9) {
        btn1.querySelector("span").classList.add("active");
        btn1.querySelector("span").innerText = "+9"
    } else {
        btn1.querySelector("span").classList.remove("active");
    }
    if (Favorate.length > 0 && Favorate.length <= 9) {
        btn2.querySelector("span").classList.add("active");
        btn2.querySelector("span").innerText = Favorate.length
    } else if (Favorate.length > 9) {
        btn2.querySelector("span").classList.add("active");
        btn2.querySelector("span").innerText = "+9"
    } else {
        btn2.querySelector("span").classList.remove("active");
    }
}

notificationss()

let main = document.querySelector(".main")
main.addEventListener("click", function () {
    document.querySelector(".search_list").style.display = "none"
    document.querySelector(".search_bar").style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.2)"
})

function Search(value) {
    let products = []
    if (localStorage.products != null) { products = JSON.parse(localStorage.products) }

    document.querySelector(".search_list").style.display = ""
    document.querySelector(".search_bar").style.boxShadow = "0 0 0 0"

    let element = ""; let timer = 0
    for (let i = 0; i < products.length; i++) {
        if (products[i].name.includes(value)) {
            element += `
            <a id="${i}" onclick="Details(id)" class="item_search">
                <img src="${products[i].photo1}" alt="">
                <h1>${products[i].name}</h1>
            </a>`
            timer = timer + 1
        }
    }
    document.querySelector(".search_list").innerHTML = element

    if (timer == 0) {
        document.querySelector(".search_list").innerHTML = `
        <div class="NoResult">
            <img src="Css/noresult.svg" alt="">
            <h3>لا توجد نتائج</h3>
        </div>`
    }
}


function Shopping(event) {
    let Shopping = []
    if (localStorage.Shopping != null) { Shopping = JSON.parse(localStorage.Shopping) }

    let products = []
    if (localStorage.products != null) { products = JSON.parse(localStorage.products) }
    
    let Details = []
    if (localStorage.Details != null) { Details = JSON.parse(localStorage.Details) }


    if (products[Details.id].status1 === "غير متوفر") { CompleteData(txt = "هذا الصنف غير متوفر"); return }


    if (localStorage.MyCity == null) {
        document.querySelector(".Parent-select-city").style.top = "0"
        return
    }



    let btn = event.target;
    let id = btn.parentElement.id

    let color = document.querySelector(".colors").id;
    let size = document.querySelector(".sizes").id;
    let weight = document.querySelector(".weights").id;
    let buy_price = document.querySelector(".buy-price")


    for (let i = 0; i < Shopping.length; i++) { if (Shopping[i].id === id) { CompleteData(txt = "تم اضافة الصنف من قبل"); return } }

    if (color === "") { CompleteData(txt = "اختار اللون"); return }

    if (size === "") { CompleteData(txt = "اختار المقاس"); return }

    if (weight === "") { CompleteData(txt = "اختار الوزن"); return }

    let obj = {
        id: Details.id,
        name: products[Details.id].name,
        img: products[Details.id].photo1,
        price: buy_price.querySelector("h1").innerText,
        color: color,
        size: size,
        weight: weight,
        quantity: 1,
    }

    Shopping.push(obj)
    localStorage.setItem("Shopping", JSON.stringify(Shopping))
    btn.innerHTML = `
    <i class="fas fa-check"></i>تم اضافة المنتج</a>
    `
    notificationss()

}



function Favorate(event) {
    let btn = event.target;
    let id = btn.parentElement.id

    let Favorate = []
    if (localStorage.Favorate != null) { Favorate = JSON.parse(localStorage.Favorate) }

    for (let i = 0; i < Favorate.length; i++) { if (Favorate[i].id === id) { CompleteData(txt = "تم اضافة الصنف من قبل"); return } }

    let obj = {
        id: id,
    }
    Favorate.push(obj)
    localStorage.setItem("Favorate", JSON.stringify(Favorate))

    notificationss()
}

function Details(id) {
    let Details = []
    if (localStorage.Details != null) { Details = JSON.parse(localStorage.Details) }
    let obj = {
        id: id,
    }
    localStorage.setItem("Details", JSON.stringify(obj))
    location.href = "Details.html"

}

let City_Url = "https://script.google.com/macros/s/AKfycbxjoFvCCnhxSQIUKSEClW84nCysymiwdOw-0YGrjAtPYhHo1TZw4krgr-yCiwoiXXPegQ/exec"
let Categories_Url = "https://script.google.com/macros/s/AKfycbyr9sJXyP5rlqGYIZ-xGtdIYEn-LfjCHkjdRuHm3NEMWEeWpO2l4gqT6aQCGzpWVvgwng/exec"
let Sheet3_URL = "https://script.google.com/macros/s/AKfycbx0n7tElcOMWa9aAyGx5FFkRv1r-QU5BJHzso5MxwyDwqxGSNJqGgcKSMIvqJ4u6gXrTQ/exec"
let Products_Url = "https://script.google.com/macros/s/AKfycbyFPaCG4eqe0iy8Qhzafj5REarPOfd3jrrR0VgdIBZBFfx_lkThkEb9Ed8s_lhTzVIi-A/exec"
