

function Add_City(id) {
    let name = document.querySelector(".NameCity").value;
    let price_delivery = document.querySelector(".price-delivery").value;

    let CRUD = ""
    let loma = ""

    if (id === "save") {
        CRUD = "insert"
        loma = "=row()-2"
    } else {
        CRUD = "update"
        loma = id
    }
    let url = City_Url + "?&id=" + loma + "&city=" + name + "&price_delivery=" + price_delivery + "&action=" + CRUD;

    if (name === "") {
        CompleteData(txt = "يرجي ادخال اسم المنطقة")
        return
    }
    if (price_delivery === "") {
        CompleteData(txt = "يرجي ادخال سعر التوصيل")
        return
    }

    let request = jQuery.ajax({ crossDomain: true, url: url, method: "GET", dataType: "jsonp" });

    LoadSave(txt = "جارِ حفظ المنطقة")
    fetch(City_Url)
        .then((response) => response.json())
        .then((row) => { SuccessSave(txt = "تم حفظ المنطقة") })
    
}

function ShowCity() {
    let City = []
    if (localStorage.City != null) { City = JSON.parse(localStorage.City) }
    let element = "";
    for (let i = 0; i < City.length; i++) {
        element += `
                <tr>
                    <td>${i}</td>
                    <td>${City[i].name}</td>
                    <td>${City[i].price}</td>
                    <td >
                    <a onclick="Edit(id)" id="${City[i].id}" class="fa-solid fa-pen-to-square"></a>
                    <a onclick="AskSure(id)" id="${City[i].id}" class="fa-solid fa-trash"></a>
                   </td>
                </tr>`
    }
    document.querySelector(".table-body").innerHTML = element
}


function Edit(id) {
    let City = []
    if (localStorage.City != null) { City = JSON.parse(localStorage.City) }
    document.querySelector(".NameCity").value = City[id].name
    document.querySelector(".price-delivery").value = City[id].price
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
    Msg.querySelector("h1").innerText = "هل تريد حذف المنطقة ؟"

    Msg.classList.add("active")
}

function Delete_data() {
    let id = document.querySelector(".Msg-Box").id
    let url = City_Url + "?&id=" + id + "&action=delete";
    let request = jQuery.ajax({ crossDomain: true, url: url, method: "GET", dataType: "jsonp" });
    LoadSave(txt = "جارِ حذف المنطقة")
    fetch(City_Url)
        .then((response) => response.json())
        .then((row) => { SuccessSave(txt = "تم حذف المنطقة") })
}