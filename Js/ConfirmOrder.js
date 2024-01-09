let info = []
if (localStorage.info != null) { info = JSON.parse(localStorage.info) }

let MyCity = []
if (localStorage.MyCity != null) { MyCity = JSON.parse(localStorage.MyCity) }

let City = []
if (localStorage.City != null) { City = JSON.parse(localStorage.City) }


document.querySelector(".Name").innerText = info.name;
document.querySelector(".Email").innerText = info.email;
document.querySelector(".Phone").innerText = info.phone;
document.querySelector(".Delivery").innerText = (City[MyCity.id].price).toFixed(2);


total()
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
ShowOrder()
function ShowOrder() {
    let Shopping = []
    if (localStorage.Shopping != null) { Shopping = JSON.parse(localStorage.Shopping) }

    let element = "";
    for (let i = 0; i < Shopping.length; i++) {
        let color = Shopping[i].color
        let size = Shopping[i].size
        let weight = Shopping[i].weight
        if (color === "none") { color = "" }
        if (weight === "none") { weight = "" }
        if (size === "none") { size = "" }

        element += `
                <tr>
                    <td>${Shopping[i].name}</td>
                    <td>${Shopping[i].quantity}</td>
                    <td>${color}</td>
                    <td>${size}</td>
                    <td>${weight}</td>
                    <td>${Shopping[i].price}</td>
                </tr>`
    }
    document.querySelector(".table-body").innerHTML = element
}



// =============================
let Order_Url = "https://script.google.com/macros/s/AKfycbxXoP3Yg-KUusr8fxqTRtE85RHp1bADh0_HsW3wt_ekXcAvNhHagPe-L2BrftU9SzSE5g/exec"

function Sent_Order(event) {
    let Shopping = [];
    if (localStorage.Shopping != null) { Shopping = JSON.parse(localStorage.Shopping) }

    let info = [];
    if (localStorage.info != null) { info = JSON.parse(localStorage.info); }

    let City = [];
    if (localStorage.City != null) { City = JSON.parse(localStorage.City); }

    let btn = event.target;
    LoadSave(txt = "جارِ حفظ الطلب")

    let id = "=Row()-2";
    let name = info.name;
    let email = info.email;
    let phone = info.phone;
    let city = City[info.city].name;
    let village = info.village;
    let street = info.street;
    let home = info.home;
    let notes = info.notes;
    let description = info.description;
    let SubTotal = document.querySelector(".SubTotal").innerText;
    let Delivery = document.querySelector(".Delivery").innerText;
    let Total = document.querySelector(".Total").innerText;

    let Url = Order_Url + "?&id=" + id + "&name=" + name + "&phone=" + phone + "&email=" + email + "&city=" + city +
        "&village=" + village + "&street=" + street + "&home=" + home + "&notes=" + notes + "&description=" + description +
        "&total=" + Total + "&subtotal=" + SubTotal + "&delivery=" + Delivery + "&action=insert";

    for (let i = 0; i < Shopping.length; i++) {
        let items = "item" + [i + 1];
        let colors = "color" + [i + 1];
        let prices = "price" + [i + 1];
        let quantitys = "quantity" + [i + 1];
        let weights = "weight" + [i + 1];
        let sizes = "size" + [i + 1];

        let item = Shopping[i].name;
        let price = Shopping[i].price;
        let quantity = Shopping[i].quantity;
        let color = Shopping[i].color;
        let weight = Shopping[i].weight;
        let size = Shopping[i].size;

        if (color === "none") {
            color = ""
        }
        if (size === "none") {
            size = ""
        }
        if (weight === "none") {
            weight = ""
        }

        Url += "&" + items + "=" + item + "&" + colors + "=" + color + "&" + weights + "=" + weight + "&" + sizes + "=" + size +
            "&" + prices + "=" + price + "&" + quantitys + "=" + quantity
    }

    let request = jQuery.ajax({ crossDomain: true, url: Url, method: "GET", dataType: "jsonp" })

        .then(() => {
            SuccessSave(txt = "تم ارسال الطلب بنجاح"); btn.innerText = "تم ارسال الطلب"
        })
}