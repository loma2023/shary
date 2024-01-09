
document.querySelector("header")
    .querySelector(".right").querySelectorAll("a")[3].classList.add("hover")

function fetch_Products() {
    fetch(Products_Url)
        .then((response) => response.json())
        .then((row) => {
            localStorage.removeItem("products")
            let products = []
            let colum = "";
            for (let i = 1; i < row.length; i++) {
                colum = row[i];
                let obj = {
                    id: colum[0],
                    name: colum[1],
                    Details: colum[2],
                    price1: colum[3],
                    price2: colum[4],
                    price3: colum[5],
                    price4: colum[6],
                    price5: colum[7],
                    price6: colum[8],
                    price7: colum[9],
                    photo1: colum[10],
                    photo2: colum[11],
                    photo3: colum[12],
                    photo4: colum[13],
                    photo5: colum[14],
                    photo6: colum[15],
                    photo7: colum[16],
                    color1: colum[17],
                    color2: colum[18],
                    color3: colum[19],
                    color4: colum[20],
                    color5: colum[21],
                    color6: colum[22],
                    color7: colum[23],
                    size1: colum[24],
                    size2: colum[25],
                    size3: colum[26],
                    size4: colum[27],
                    size5: colum[28],
                    size6: colum[29],
                    size7: colum[30],
                    weight1: colum[31],
                    weight2: colum[32],
                    weight3: colum[33],
                    weight4: colum[34],
                    weight5: colum[35],
                    weight6: colum[36],
                    weight7: colum[37],
                    categories: colum[38],
                    status1: colum[39],
                    status2: colum[40],
                }
                products.push(obj)
                localStorage.setItem("products", JSON.stringify(products))
            }
        })
        .then(() => {
            if (document.title === "Shary") {
                ShowData()
            } else if(document.title === "اضافة صنف"){
                ShowItems()
            }
        })
}

fetch_Products()

fetch(Categories_Url)
    .then((response) => response.json())
    .then((row) => {
        localStorage.removeItem("categories")
        let categories = []
        let colum = "";
        for (let i = 1; i < row.length; i++) {
            colum = row[i];
            let obj = {
                id: colum[0],
                name: colum[1],
                photo: colum[2],
            }
            categories.push(obj)
            localStorage.setItem("categories", JSON.stringify(categories))
        }
    }).then(() => { if(document.title === "اضافة قسم"){
        ShowCategories()
    }})

fetch(City_Url)
    .then((response) => response.json())
    .then((row) => {
        localStorage.removeItem("City")
        let City = []
        let colum = "";
        for (let i = 1; i < row.length; i++) {
            colum = row[i];
            let obj = {
                id: colum[0],
                name: colum[1],
                price: colum[2],
            }
            City.push(obj)
            localStorage.setItem("City", JSON.stringify(City))
        }
    }).then(() => {if(document.title === "اضافة منطقة"){
        ShowCity()
    }})

function ShowData() {
    let products = []
    if (localStorage.products != null) { products = JSON.parse(localStorage.products) }
    let element = "";
    let nuProdect = 0
    for (let i = 0; i < products.length; i++) {
        let available = "";
        if (products[i].status1 === "متوفر") {available = "none"}
    
        if (products[i].status2 === "الاكثر مبيعاً") {
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
            nuProdect = nuProdect + 1
        }
    }

    let section = document.querySelector(".products")
    section.querySelector(".container").innerHTML = element
    if (nuProdect === 0) {
        section.style.display = "none"
    }
}

if (document.title === "Shary") { ShowData() }