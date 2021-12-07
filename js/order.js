$(document).ready(function() {
    $.getJSON('./JSON/orders.json', function(jd) {
        jd.products.forEach(loadProducts);
        setDetails(jd);
    });
});

function loadProducts(item, index, arr){
     let gridItem = "";
     gridItem = "<div class='grid-container product'>";
     gridItem += "<div class='item1 product-image-container'>";
     gridItem += "<img src='"+item.image+"'/>";
     gridItem += "</div>";
     gridItem += "<div class='item2 product-heading'>"+item.name+"</div>";
     gridItem += "<div class='item3 product-quantity'>"+item.quantity+"</div>";
     gridItem += "<div class='item4 product-price'>$"+(item.quantity*item.price)+"</div>";
     gridItem += "<div class='item5 product-description'>"+item.description+"</div>";
     gridItem += "</div>";


    $(gridItem).appendTo( "#products-container" );
}

function setDetails(jsonData){
    let subTotal =  0;
    let taxRate =  jsonData.taxrate;
    let Total =  0;
    jsonData.products.forEach(function(item, index, arr){
        subTotal+=(item.quantity*item.price);
    });
    let tax = subTotal * (taxRate/100);
    Total = subTotal+tax;
    $("#subtotal-price").html("$"+subTotal.toFixed(2));
    $("#taxes-price").html("$"+tax.toFixed(2));
    $("#total-price").html("$"+Total.toFixed(2));
}