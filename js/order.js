// let orderInfo = {
//     "products":[
//         {
//             "name":"2015 Merlot",
//             "image":"images/image-wine_tasting.jpg",
//             "quantity":1,
//             "price":20.00,
//             "description":"This year’s Merlot is medium/dark garnet in colour, with aromas of black cherry, blackberry, caramel, chocolate and vanilla.  The palate shows plum complemented with a blend of savoury dark berries and mocha/chocolate. It’s medium-bodied with velvety/dusty tannins, good acidity with well-integrated oak and medium finish."
//         },
//         {
//             "name":"Classic Veggie Pizza",
//             "image":"images/pizza.jpg",
//             "quantity":1,
//             "price":15.25,
//             "description":"Try our classic toasted pizza with Sliced mushrooms, green pepper, red onion, tomato and pizza mozzarella."
//         },
//         {
//             "name":"Toasted Veggie Pizza",
//             "image":"images/pizza.jpg",
//             "quantity":3,
//             "price":15.25,
//             "description":"Try our classic toasted pizza with Sliced mushrooms, green pepper, red onion, tomato and pizza mozzarella."
//         }
//     ],
//     "taxrate":20
// }

// localStorage.setItem('orderInfo', JSON.stringify(orderInfo));


$(document).ready(function() {
    let infoFromStorage = {"products":JSON.parse(localStorage.getItem('productsArr')),"taxrate":20};
    infoFromStorage.products.forEach(loadProducts);
    setDetails(infoFromStorage);
    // $.getJSON('./JSON/orders.json', function(jd) {
    //     jd.products.forEach(loadProducts);
    //     setDetails(jd);
    // });
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