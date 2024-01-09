let Image_Url = "https://script.google.com/macros/s/AKfycbzInpr5KRwBxBy48MISwiYRyjabobjS2OyRjdQ6fzSyIngT3gLeSeepuo0WRRlpPjI0/exec";

function imgCategory(event) {
    let file = event.target
    let fr = new FileReader();

    fr.addEventListener('loadend', () => {
        let res = fr.result;
        file.id = "waiting"
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
            .then((data) => { file.id = data })
    })
    fr.readAsDataURL(file.files[0])
}


function Add_Category(id) {
    let name = document.querySelector(".Namecategory").value;
    let img_Category = document.querySelector(".img-Category").id;

    let CRUD = ""
    let loma = ""

    if (id === "save") {
        CRUD = "insert"
        loma = "=row()-2"
    } else {
        CRUD = "update"
        loma = id
    }
    let url = Categories_Url + "?&id=" + loma + "&name=" + name + "&photo=" + img_Category + "&action=" + CRUD;

    if (name === "") {
        CompleteData(txt = "برجاء ادخال اسم القسم")
        return
    }

    if (img_Category === "NoImg") {
        CompleteData(txt = "برجاء اختيار صورة")
        return
    }

    if (img_Category === "waiting") {
        CompleteData(txt = "برجاء انتظار تحميل الصورة")
        return
    }


    let request = jQuery.ajax({ crossDomain: true, url: url, method: "GET", dataType: "jsonp" });

    LoadSave(txt = "جارِ حفظ القسم")
    fetch(Categories_Url)
        .then((response) => response.json())
        .then((row) => { SuccessSave(txt = "تم حفظ القسم") })
}

function ShowCategories() {
    let categories = []
    if (localStorage.categories != null) { categories = JSON.parse(localStorage.categories) }
    let element2 = "";
    for (let i = 0; i < categories.length; i++) {
        element2 += `
                <tr>
                    <td>${i}</td>
                    <td>${categories[i].name}</td>
                    <td><img src="${categories[i].photo}" alt=""></td>
                    <td >
                    <a onclick="Edit(id)" id="${i}" class="fa-solid fa-pen-to-square"></a>
                    <a onclick="AskSure(id)" id="${i}" class="fa-solid fa-trash"></a>
                   </td>
                </tr>`
    }
    document.querySelector(".table-body").innerHTML = element2
}

function Edit(id) {
    let categories = []
    if (localStorage.categories != null) { categories = JSON.parse(localStorage.categories) }

    document.querySelector(".Namecategory").value = categories[id].name

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
    Msg.querySelector("h1").innerText = "هل تريد حذف القسم ؟"
    Msg.classList.add("active")
}

function Delete_data() {
    let id = document.querySelector(".Msg-Box").id
    let url = Categories_Url + "?&id=" + id + "&action=delete";
    let request = jQuery.ajax({ crossDomain: true, url: url, method: "GET", dataType: "jsonp" });
    LoadSave(txt = "جارِ حذف القسم")
    fetch(Categories_Url)
        .then((response) => response.json())
        .then((row) => { SuccessSave(txt = "تم حذف القسم") })
}