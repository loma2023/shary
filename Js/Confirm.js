let City = []
if (localStorage.City != null) { City = JSON.parse(localStorage.City) }
let MyCity = []
if (localStorage.MyCity != null) { MyCity = JSON.parse(localStorage.MyCity) }

let element = "";
for (let i = 0; i < City.length; i++) {
    element += `
    <option value="${City[i].id}">${City[i].name}</option>
    `
}

document.querySelector(".select-City").innerHTML = `
<option selected hidden disabled value="${MyCity.id}">${City[MyCity.id].name}</option>
`
document.querySelector(".select-City").innerHTML += element


function SetMyCity(value) {
    let obj = {
        id: value,
    }
    localStorage.setItem("MyCity", JSON.stringify(obj))
}


const myform = document.forms['confirmForm']
myform.addEventListener('submit', e => {
    e.preventDefault()
    let obj = {
        name: document.querySelectorAll("input")[1].value,
        email: document.querySelectorAll("input")[2].value,
        phone: document.querySelectorAll("input")[3].value,
        city: document.querySelector(".select-City").value,
        village: document.querySelectorAll("input")[4].value,
        street: document.querySelectorAll("input")[5].value,
        home: document.querySelectorAll("input")[6].value,
        description: document.querySelectorAll("input")[7].value,
        notes: document.querySelectorAll("input")[8].value,
    }

    localStorage.setItem("info", JSON.stringify(obj))
    location.href = "ConfirmOrder.html";
})
