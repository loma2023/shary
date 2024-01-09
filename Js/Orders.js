let Orders_Url = "https://script.google.com/macros/s/AKfycbxXoP3Yg-KUusr8fxqTRtE85RHp1bADh0_HsW3wt_ekXcAvNhHagPe-L2BrftU9SzSE5g/exec"

fetch(Orders_Url)
    .then((response) => response.json())
    .then((row) => {
        localStorage.removeItem("Orders")
        let Orders = []
        let colum = "";
        for (let i = 1; i < row.length; i++) {
            colum = row[i];
            let obj = {
                id: colum[0],
                name: colum[1],
                email: colum[2],
                phone: colum[3],
                city: colum[4],
                village: colum[5],
                street: colum[6],
                home: colum[7],
                description: colum[8],
                notes: colum[9],
                item1: colum[10],
                item2: colum[16],
                item3: colum[22],
                item4: colum[28],
                item5: colum[34],
                item6: colum[40],
                item7: colum[46],
                quantity1: colum[11],
                quantity2: colum[17],
                quantity3: colum[23],
                quantity4: colum[29],
                quantity5: colum[35],
                quantity6: colum[41],
                quantity7: colum[47],
                price1: colum[12],
                price2: colum[18],
                price3: colum[24],
                price4: colum[30],
                price5: colum[36],
                price6: colum[42],
                price7: colum[48],
                color1: colum[13],
                color2: colum[19],
                color3: colum[25],
                color4: colum[31],
                color5: colum[37],
                color6: colum[43],
                color7: colum[49],
                size1: colum[14],
                size2: colum[20],
                size3: colum[26],
                size4: colum[32],
                size5: colum[38],
                size6: colum[44],
                size7: colum[50],
                weight1: colum[15],
                weight2: colum[21],
                weight3: colum[27],
                weight4: colum[33],
                weight5: colum[39],
                weight6: colum[45],
                weight7: colum[51],
                subtotal: colum[52],
                delivery: colum[53],
                total: colum[54],
            }
            Orders.push(obj)
            localStorage.setItem("Orders", JSON.stringify(Orders))
        }
    }).then(() => { ShowOrders() })


function ShowOrders() {
    let Orders = []
    if (localStorage.Orders != null) { Orders = JSON.parse(localStorage.Orders) }
    let element2 = "";
    for (let i = 0; i < Orders.length; i++) {
        element2 += `
                <tr>
                    <td>${i}</td>
                    <td>${Orders[i].name}</td>
                    <td>${Orders[i].email}</td>
                    <td>${Orders[i].phone}</td>
                    <td>${Orders[i].city}</td>
                    <td>${Orders[i].total}</td>
                    <td>
                    <a onclick="AskSure(id)" id="${i}" class="fa-solid fa-trash"></a>
                    <a onclick="showDataOrder(id)" id="${i}" class="fa-solid fa-eye"></a>
                   </td>
                </tr>`
    }
    document.querySelector(".table-body").innerHTML = element2
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
    Msg.querySelector("h1").innerText = "هل تريد حذف الطلب ؟"
    Msg.classList.add("active")

}

function Delete_data() {
    let id = document.querySelector(".Msg-Box").id
    let url = Orders_Url + "?&id=" + id + "&action=delete";
    let request = jQuery.ajax({ crossDomain: true, url: url, method: "GET", dataType: "jsonp" });
    LoadSave(txt = "جارِ حذف الطلب")

    fetch(Orders_Url)
        .then((response) => response.json())
        .then((row) => { SuccessSave(txt = "تم حذف الطلب") })
        .then((row) => { location.reload() })
}

function showDataOrder(id) {
    let Orders = []
    if (localStorage.Orders != null) { Orders = JSON.parse(localStorage.Orders) }
    let itemhide2 = ""; let itemhide3 = ""; let itemhide4 = ""
    let itemhide5 = ""; let itemhide6 = ""; let itemhide7 = "";

    if (Orders[id].item2 === "") { itemhide2 = "none" }
    if (Orders[id].item3 === "") { itemhide3 = "none" }
    if (Orders[id].item4 === "") { itemhide4 = "none" }
    if (Orders[id].item5 === "") { itemhide5 = "none" }
    if (Orders[id].item6 === "") { itemhide6 = "none" }
    if (Orders[id].item7 === "") { itemhide7 = "none" }

    document.querySelector("body").innerHTML +=`
    <div class="CustomerOrder active">
    <div class="yyyy">
    <i class="fas fa-xmark" onclick="remove_me()"></i>
        <div class="dataCustomer">
            <div class="cart-total">
                <h3> الاسم : <span class="Name">${Orders[id].name}</span></h3>
                <h3> البريد : <span class="Email">${Orders[id].email}</span></h3>
                <h3> الهاتف : <span class="Phone">${Orders[id].phone}</span></h3>
                <h3> المنطقة : <span class="City">${Orders[id].city}</span></h3>
                <h3> القطعه : <span class="City">${Orders[id].village}</span></h3>
            </div>
            <div class="cart-total">
                <h3> الشارع : <span class="Email">${Orders[id].street}</span></h3>
                <h3> المنزل : <span class="Phone">${Orders[id].home}</span></h3>
                <h3> وصف اضافي : <span class="Phone">${Orders[id].description}</span></h3>
                <h3> ملاحظات : <span class="Phone">${Orders[id].notes}</span></h3>
            </div>
        </div>

        <div class="parent-table">
            <table class="MyTable">
                <thead class="table-head">
                    <tr>
                        <td>اسم الصنف</td>
                        <td>الكمية</td>
                        <td>اللون</td>
                        <td>المقاس</td>
                        <td>الوزن</td>
                        <td>السعر</td>
                    </tr>
                </thead>
                <tbody class="table-body">
                    <tr>
                        <td>${Orders[id].item1}</td>
                        <td>${Orders[id].quantity1}</td>
                        <td>${Orders[id].color1}</td>
                        <td>${Orders[id].size1}</td>
                        <td>${Orders[id].weight1}</td>
                        <td>${Orders[id].price1}</td>
                    </tr>
                    <tr style= "display:${itemhide2}">
                        <td>${Orders[id].item2}</td>
                        <td>${Orders[id].quantity2}</td>
                        <td>${Orders[id].color2}</td>
                        <td>${Orders[id].size2}</td>
                        <td>${Orders[id].weight2}</td>
                        <td>${Orders[id].price2}</td>
                    </tr>
                    <tr style= "display:${itemhide3}">
                        <td>${Orders[id].item3}</td>
                        <td>${Orders[id].quantity3}</td>
                        <td>${Orders[id].color3}</td>
                        <td>${Orders[id].size3}</td>
                        <td>${Orders[id].weight3}</td>
                        <td>${Orders[id].price3}</td>
                    </tr>
                    <tr style= "display:${itemhide4}">
                        <td>${Orders[id].item4}</td>
                        <td>${Orders[id].quantity4}</td>
                        <td>${Orders[id].color4}</td>
                        <td>${Orders[id].size4}</td>
                        <td>${Orders[id].weight4}</td>
                        <td>${Orders[id].price4}</td>
                    </tr>
                    <tr style= "display:${itemhide5}">
                        <td>${Orders[id].item5}</td>
                        <td>${Orders[id].quantity5}</td>
                        <td>${Orders[id].color5}</td>
                        <td>${Orders[id].size5}</td>
                        <td>${Orders[id].weight5}</td>
                        <td>${Orders[id].price5}</td>
                    </tr>
                    <tr style= "display:${itemhide6}">
                        <td>${Orders[id].item6}</td>
                        <td>${Orders[id].quantity6}</td>
                        <td>${Orders[id].color6}</td>
                        <td>${Orders[id].size6}</td>
                        <td>${Orders[id].weight6}</td>
                        <td>${Orders[id].price6}</td>
                    </tr>
                    <tr style= "display:${itemhide7}">
                        <td>${Orders[id].item7}</td>
                        <td>${Orders[id].quantity7}</td>
                        <td>${Orders[id].color7}</td>
                        <td>${Orders[id].size7}</td>
                        <td>${Orders[id].weight7}</td>
                        <td>${Orders[id].price7}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="cart-total">
            <h3> الاجمالي : <span class="Name">${Orders[id].subtotal}</span></h3>
            <h3> التوصيل : <span class="Email">${Orders[id].delivery}</span></h3>
            <h3> الاجمالي : <span class="Phone">${Orders[id].total}</span></h3>
        </div>

    </div>
</div>`
}

function remove_me() {
    document.querySelector(".CustomerOrder").remove()    
}
