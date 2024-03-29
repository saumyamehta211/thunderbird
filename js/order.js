let orderInfo = [
        {
            "name":"2015 Merlot",
            "image":"images/image-wine_tasting.jpg",
            "quantity":1,
            "price":20.00,
            "description":"This year’s Merlot is medium/dark garnet in colour, with aromas of black cherry, blackberry, caramel, chocolate and vanilla.  The palate shows plum complemented with a blend of savoury dark berries and mocha/chocolate. It’s medium-bodied with velvety/dusty tannins, good acidity with well-integrated oak and medium finish."
        },
        {
            "name":"Classic Veggie Pizza",
            "image":"images/pizza.jpg",
            "quantity":1,
            "price":15.25,
            "description":"Try our classic toasted pizza with Sliced mushrooms, green pepper, red onion, tomato and pizza mozzarella."
        },
        {
            "name":"Toasted Veggie Pizza",
            "image":"images/pizza.jpg",
            "quantity":3,
            "price":15.25,
            "description":"Try our classic toasted pizza with Sliced mushrooms, green pepper, red onion, tomato and pizza mozzarella."
        }
    ];

localStorage.setItem('productsArr', JSON.stringify(orderInfo));


$(document).ready(function() {
    let infoFromStorage = {"products":JSON.parse(localStorage.getItem('productsArr')),"taxrate":20};
    if (infoFromStorage.products != null){
        $("#order-button-container").show();
        infoFromStorage.products.forEach(loadProducts);
        setDetails(infoFromStorage);
    }else{
        $("#order-button-container").hide();
        setNullDetails();
    }
    $(".order-button").click(function(){
        Swal.fire({
            title: 'Order Placed!',
            text: 'Order placed successfully!',
            icon: 'success',
            confirmButtonText: 'Okay'
        })
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

function setNullDetails(){
    let gridItem = "";
     gridItem = "<div class='grid-container product'>";
     gridItem += "<div class='item1 product-image-container'>";
     gridItem += "";
     gridItem += "</div>";
     gridItem += "<div class='item2 product-heading'>No Items Found</div>";
     gridItem += "<div class='item3 product-quantity'></div>";
     gridItem += "<div class='item4 product-price'></div>";
     gridItem += "<div class='item5 product-description'></div>";
     gridItem += "</div>";


    $(gridItem).appendTo( "#products-container" );
    let subTotal =  0;
    let taxRate =  0;
    let Total =  0;

    let tax = subTotal * (taxRate/100);
    Total = subTotal+tax;
    $("#subtotal-price").html("$"+subTotal.toFixed(2));
    $("#taxes-price").html("$"+tax.toFixed(2));
    $("#total-price").html("$"+Total.toFixed(2));
}