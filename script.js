
function responsiveTopnav() {
  var x = document.getElementById("topnavbar");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var count_items = 1;
var dict = {};

function Update_product(){
    var product = document.getElementById('Product').value;

    document.getElementById("product"+count_items).innerHTML = product;

    var quantity = document.getElementById('Quantity').value;
    document.getElementById("quantity"+count_items).innerHTML = quantity;

    const date1 = new Date(document.getElementById('Expiry_date').value);
    const date2 = new Date(curday("/"));
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    document.getElementById("days_left"+count_items).innerHTML = diffDays;
    /*save_data(product,quantity,date1,count_items)*/
    count_items = count_items + 1;
 }



function curday(sp){
    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //As January is 0.
    var yyyy = today.getFullYear();

    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    return (mm+sp+dd+sp+yyyy);
}

function delete_item(i){
    document.getElementById("product"+i).innerHTML = null;
    document.getElementById("quantity"+i).innerHTML = null;
    document.getElementById("days_left"+i).innerHTML = null;

}
/*
function save_data(p,q,ed,i){
  dict = {"product"+i: p, "quantity"+i: q, "Expiry_date"+i: ed};

}*/
