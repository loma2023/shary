
function toggelcolor() {
    document.querySelectorAll(".parent-toggel")[0].classList.toggle("active")
    document.querySelector(".color-div").classList.toggle("activecolumn")
}
function toggelsize() {
    document.querySelectorAll(".parent-toggel")[1].classList.toggle("active")
    document.querySelector(".size-div").classList.toggle("activecolumn")
}
function toggelweight() {
    document.querySelectorAll(".parent-toggel")[2].classList.toggle("active")
    document.querySelector(".weight-div").classList.toggle("activecolumn")
}

let categories = []
if (localStorage.categories != null) { categories = JSON.parse(localStorage.categories) }
let element = "";
for (let i = 0; i < categories.length; i++) {
    element += `
    <option value="${categories[i].name}">${categories[i].name}</option>
    `
}
document.querySelector(".select-categry").innerHTML += element


let Image_Url = "https://script.google.com/macros/s/AKfycbzInpr5KRwBxBy48MISwiYRyjabobjS2OyRjdQ6fzSyIngT3gLeSeepuo0WRRlpPjI0/exec";


function imgitem(event) {
    let file = event.target
    let parent = file.parentElement.parentElement
    let imgloader = parent.querySelector(".imgloader");
    let mainImg = parent.querySelector(".img-item");
    let fr = new FileReader();

    fr.addEventListener('loadend', () => {
        let res = fr.result;
        imgloader.style.display = "table"
        imgloader.classList.add("waiting")
        mainImg.src = res
        let obj = {
            base64: res.split("base64,")[1],
            type: file.files[0].type,
            name: file.files[0].name,
        }
        fetch(Image_Url, {
            method: "POST",
            body: JSON.stringify(obj)
        })
            .then(r => r.text())
            .then((data) => { mainImg.src = data, mainImg.id = data })
            .then(() => imgloader.style.display = "none")
            .then(() => imgloader.classList.remove("waiting"))
    })
    fr.readAsDataURL(file.files[0])
}

function add_Prodect(id) {
    let name = document.querySelector(".NameItem").value;
    let details = document.querySelector(".details").value;
    let mainPrice = document.querySelector(".main-price").value;
    let category = document.querySelector(".select-categry").value;
    let status1 = document.querySelector(".status1").value;
    let status2 = document.querySelector(".status2").value;

    let CRUD = ""
    let loma = ""

    if (id === "save") {
        CRUD = "insert"
        loma = "=row()-2"
    } else {
        CRUD = "update"
        loma = id
    }
    let url = Products_Url + "?&id=" + loma + "&name=" + name + "&details=" + details
        + "&category=" + category + "&status1=" + status1 + "&status2=" + status2 + "&action=" + CRUD;

    let AllImage = document.querySelectorAll(".img-item")

    let colors_div = document.querySelector(".color-div")
    let AllColor = colors_div.querySelectorAll("select")


    let sizes_div = document.querySelector(".size-div")
    let AllSize = sizes_div.querySelectorAll("input")


    let weights_div = document.querySelector(".weight-div")
    let AllWeight = weights_div.querySelectorAll(".weight-in")
    let AllPrices = weights_div.querySelectorAll(".price-in")

    if (name === "") {
        CompleteData(txt = "يرجي ادخال اسم الصنف")
        return
    }
    if (mainPrice === "") {
        CompleteData(txt = "يرجي ادخال سعر الصنف")
        return
    }
    if (category === "NoCategry") {
        CompleteData(txt = "يرجي اختيار قسم للمنتج")
        return
    }

    if (AllImage[0].id === "image.svg") {
        CompleteData(txt = "يرجي اختيار صوره علي الاقل")
        return
    }

    let imgloader = document.querySelectorAll(".imgloader");

    for (let i = 0; i < imgloader.length; i++) {
        let img = imgloader[i];

        if (img.classList.contains("waiting") == true) {
            CompleteData(txt = "يرجي انتظار تحميل الصوره")
            return
        }
    }

    for (let i = 0; i < 7; i++) {
        let prices = "price" + [i + 1]
        let photos = "photo" + [i + 1]
        let colors = "color" + [i + 1]
        let sizes = "size" + [i + 1]
        let weights = "weight" + [i + 1]

        let price = AllPrices[i].value
        let photo = AllImage[i].id
        let color = AllColor[i].value
        let size = AllSize[i].value
        let weight = AllWeight[i].value

        if (photo === "image.svg") {
            photo = ""
        }
        if (color === "NoColor") {
            color = ""
        }
        if (weight === "") {
            price = mainPrice
        }

        url += "&" + prices + "=" + price + "&" + photos + "=" + photo + "&" + colors + "=" + color + "&" + sizes + "=" + size + "&" + weights + "=" + weight
    }

    let request = jQuery.ajax({ crossDomain: true, url: url, method: "GET", dataType: "jsonp" });

    LoadSave(txt = "جارِ حفظ الصنف")
    fetch(Products_Url)
        .then((response) => response.json())
        .then((row) => { SuccessSave(txt = "تم حفظ الصنف") })
}

function ShowItems() {
    let products = []
    if (localStorage.products != null) { products = JSON.parse(localStorage.products) }
    let element2 = "";
    for (let i = 0; i < products.length; i++) {
        element2 += `
                <tr>
                    <td>${i}</td>
                    <td>${products[i].name}</td>
                    <td>${products[i].price1}</td>
                    <td>${products[i].Details}</td>
                    <td>${products[i].categories}</td>
                    <td>${products[i].status1}</td>
                    <td >
                    <a onclick="Edit(id)" id="${i}" class="fa-solid fa-pen-to-square"></a>
                    <a onclick="AskSure(id)" id="${i}" class="fa-solid fa-trash"></a>
                    <a onclick="Details(id)" id="${i}" class="fa-solid fa-eye"></a>
                   </td>
                </tr>`
    }
    document.querySelector(".TableProdects").innerHTML = element2
}


function Edit(id) {
    let products = []
    if (localStorage.products != null) { products = JSON.parse(localStorage.products) }

    document.querySelector(".NameItem").value = products[id].name
    document.querySelector(".details").value = products[id].Details
    document.querySelector(".main-price").value = products[id].price1
    document.querySelector(".select-categry").value = products[id].categories
    document.querySelector(".status1").value = products[id].status1
    document.querySelector(".status2").value = products[id].status2

    document.querySelectorAll(".img-item")[0].src = products[id].photo1
    document.querySelectorAll(".img-item")[0].id = products[id].photo1
    document.querySelectorAll(".img-item")[1].src = products[id].photo2
    document.querySelectorAll(".img-item")[2].src = products[id].photo3
    document.querySelectorAll(".img-item")[3].src = products[id].photo4
    document.querySelectorAll(".img-item")[4].src = products[id].photo5
    document.querySelectorAll(".img-item")[5].src = products[id].photo6
    document.querySelectorAll(".img-item")[6].src = products[id].photo7

    let colors = document.querySelector(".color-div")
    colors.querySelectorAll("select")[0].value = products[id].color1
    colors.querySelectorAll("select")[1].value = products[id].color2
    colors.querySelectorAll("select")[2].value = products[id].color3
    colors.querySelectorAll("select")[3].value = products[id].color4
    colors.querySelectorAll("select")[4].value = products[id].color5
    colors.querySelectorAll("select")[5].value = products[id].color6
    colors.querySelectorAll("select")[6].value = products[id].color7

    let sizes = document.querySelector(".size-div")
    sizes.querySelectorAll("input")[0].value = products[id].size1
    sizes.querySelectorAll("input")[1].value = products[id].size2
    sizes.querySelectorAll("input")[2].value = products[id].size3
    sizes.querySelectorAll("input")[3].value = products[id].size4
    sizes.querySelectorAll("input")[4].value = products[id].size5
    sizes.querySelectorAll("input")[5].value = products[id].size6
    sizes.querySelectorAll("input")[6].value = products[id].size7

    let weights = document.querySelector(".weight-div")
    weights.querySelectorAll(".weight-in")[0].value = products[id].weight1
    weights.querySelectorAll(".weight-in")[1].value = products[id].weight2
    weights.querySelectorAll(".weight-in")[2].value = products[id].weight3
    weights.querySelectorAll(".weight-in")[3].value = products[id].weight4
    weights.querySelectorAll(".weight-in")[4].value = products[id].weight5
    weights.querySelectorAll(".weight-in")[5].value = products[id].weight6
    weights.querySelectorAll(".weight-in")[6].value = products[id].weight7

    weights.querySelectorAll(".price-in")[0].value = products[id].price1
    weights.querySelectorAll(".price-in")[1].value = products[id].price2
    weights.querySelectorAll(".price-in")[2].value = products[id].price3
    weights.querySelectorAll(".price-in")[3].value = products[id].price4
    weights.querySelectorAll(".price-in")[4].value = products[id].price5
    weights.querySelectorAll(".price-in")[5].value = products[id].price6
    weights.querySelectorAll(".price-in")[6].value = products[id].price7

    document.querySelector(".btnSave").id = id

}

function AskSure(id) {
    let Msg = document.querySelector(".Msg-Box")
    Msg.id = id
    Msg.querySelector(".loader").style.display = "none"
    Msg.querySelector(".btn-oky").style.display = "grid"
    Msg.querySelector(".btn-oky").innerHTML = `<a onclick="Delete_data()">نعم</a>
                                                  <a onclick="Hide_Msg()">لا</a> `
    Msg.querySelector("i").classList.add("fa-trash")
    Msg.querySelector("i").classList.remove("fa-exclamation")
    Msg.querySelector("i").classList.remove("fa-check")
    Msg.querySelector("i").classList.remove("fa-xmark")
    Msg.querySelector("i").classList.remove("fa-cloud-arrow-up")
    Msg.querySelector("h1").innerText = "هل تريد حذف الصنف ؟"

    Msg.classList.add("active")
}

function Delete_data() {
    let id = document.querySelector(".Msg-Box").id
    let url = Products_Url + "?&id=" + id + "&action=delete";
    let request = jQuery.ajax({ crossDomain: true, url: url, method: "GET", dataType: "jsonp" });
    LoadSave(txt = "جارِ حذف الصنف")
    fetch(Products_Url)
        .then((response) => response.json())
        .then((row) => { SuccessSave(txt = "تم حذف الصنف") })
        .then((row) => { location.reload() })
}