
function responsiveTopnav() {
  var x = document.getElementById("topnavbar");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var count_items = 0;
var dict = {};

function Update_product(){
    count_items = count_items + 1;


    var product = document.getElementById('Product').value;
    if(product == ""){
      alert("Product field is empty.");

    }

    document.getElementById("product"+count_items).innerHTML = product;

    var quantity = document.getElementById('Quantity').value;
    document.getElementById("quantity"+count_items).innerHTML = quantity;
    if(quantity == ""){
      alert("Product field is empty.");

    }

    const date1 = new Date(document.getElementById('Expiry_date').value);
    if(date1 == ""){
      alert("Expiry date field is empty.");

    }
    const date2 = new Date(curday("/"));
    const diffTime = date1 - date2;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays < 0){
      document.getElementById("days_left"+count_items).innerHTML = "Expired";
    }else{
      document.getElementById("days_left"+count_items).innerHTML = diffDays;
    }
    
    /*save_data(product,quantity,date1,count_items)*/
    document.getElementById('Product').value = "";
    document.getElementById('Quantity').value = "";
    document.getElementById('Expiry_date').value ="";
    date_check(product,diffDays);
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
    if(i<count_items){
      while(i<count_items){
        var j = i + 1;
        document.getElementById("product"+i).innerHTML = document.getElementById("product"+j).innerHTML;
        document.getElementById("quantity"+i).innerHTML = document.getElementById("quantity"+j).innerHTML;
        document.getElementById("days_left"+i).innerHTML = document.getElementById("days_left"+j).innerHTML;
        document.getElementById("days_left"+j).innerHTML = "";
        document.getElementById("product"+j).innerHTML = "";
        document.getElementById("quantity"+j).innerHTML = "";

        i = i+1;
    }
  }
    else {
      document.getElementById("product"+i).innerHTML = "";
      document.getElementById("quantity"+i).innerHTML = "";
      document.getElementById("days_left"+i).innerHTML = "";

    }
    count_items = count_items - 1
}

function date_check(p,d){
  if (d == 0){
    alert(p+" "+"is just about to expire!");
  }

  else if(d < 0){
    alert(p+" "+"expired!");
  }

}


/*
function color_change(){
    document.getElementById("row1").style.borderColor = "red";

}
/*
function save_data(p,q,ed,i){
  dict = {"product"+i: p, "quantity"+i: q, "Expiry_date"+i: ed};

}*/
