products = []

$(document).ready(function(){

    // Methods for plus and minus buttons
    $(".plusButton").click(function(){
        let quantity = parseInt($(this).parent().find('.quantity').val());
        quantity += 1;
        $(this).parent().find('.quantity').val(quantity);
    });

    $(".minusButton").click(function(){
        let quantity = parseInt($(this).parent().find('.quantity').val());
        if (quantity > 0) {
            quantity -= 1;
            $(this).parent().find('.quantity').val(quantity);
        } 
    });

    // Methods for click on "add to cart" for individual items
    $(".chickenThali").click(function(){
        let quantity = $(this).parent().find(".quantityContainer").children(".quantity").val()
        addChickenThali(quantity);
        let addToCartBtn = document.getElementById("add-to-cart-ct")
        addToCartBtn.innerText = "Added ✓"
    });

    $(".butterChicken").click(function(){
        let quantity = $(this).parent().find(".quantityContainer").children(".quantity").val()
        addButterChicken(quantity);
        let addToCartBtn = document.getElementById("add-to-cart-btc")
        addToCartBtn.innerText = "Added ✓"
    });

    $(".chickenTikka").click(function(){
        let quantity = $(this).parent().find(".quantityContainer").children(".quantity").val()
        addChickenTikka(quantity);
        let addToCartBtn = document.getElementById("add-to-cart-ctk")
        addToCartBtn.innerText = "Added ✓"
    });

    $(".beefTaco").click(function(){
        let quantity = $(this).parent().find(".quantityContainer").children(".quantity").val()
        addBeefTaco(quantity);
        let addToCartBtn = document.getElementById("add-to-cart-bft")
        addToCartBtn.innerText = "Added ✓"
    });

    $(".baconChilaEgg").click(function(){
        let quantity = $(this).parent().find(".quantityContainer").children(".quantity").val()
        addBaconChilaEgg(quantity);
        let addToCartBtn = document.getElementById("add-to-cart-bce")
        addToCartBtn.innerText = "Added ✓"
    });

    $(".porkPosole").click(function(){
        let quantity = $(this).parent().find(".quantityContainer").children(".quantity").val()
        addPorkPosole(quantity);
        let addToCartBtn = document.getElementById("add-to-cart-pkp")
        addToCartBtn.innerText = "Added ✓"
    });

    $(".dumpling").click(function(){
        let quantity = $(this).parent().find(".quantityContainer").children(".quantity").val()
        addDumpling(quantity);
        let addToCartBtn = document.getElementById("add-to-cart-dmg")
        addToCartBtn.innerText = "Added ✓"
    });

    $(".kungPaoChicken").click(function(){
        let quantity = $(this).parent().find(".quantityContainer").children(".quantity").val()
        addkungPaoChicken(quantity);
        let addToCartBtn = document.getElementById("add-to-cart-kpc")
        addToCartBtn.innerText = "Added ✓"
    });

    $(".chowmein").click(function(){
        let quantity = $(this).parent().find(".quantityContainer").children(".quantity").val()
        addchowmein(quantity);
        let addToCartBtn = document.getElementById("add-to-cart-chm")
        addToCartBtn.innerText = "Added ✓"
    });

    // Functions to show menu items based on Food type selection
    $(".all-tab").click(function(e){
        e.preventDefault();
       $(".mughlai-cuisine ").show()
       $(".mexican-cuisine ").show()
       $(".chinese-cuisine ").show()
       $(".mid-nav").children(".active").removeClass("active")
       $(this).addClass("active")
    });

    $(".mughlai-tab").click(function(e){
        e.preventDefault();
        $(".mughlai-cuisine").show()
        $(".mexican-cuisine").hide()
        $(".chinese-cuisine").hide()
        $(".mid-nav").children(".active").removeClass("active")
        $(this).addClass("active")
     });

     $(".mexican-tab").click(function(e){
        e.preventDefault();
        $(".mughlai-cuisine").hide()
        $(".mexican-cuisine").show()
        $(".chinese-cuisine").hide()
        $(".mid-nav").children(".active").removeClass("active")
        $(this).addClass("active")
     });

     $(".chinese-tab").click(function(e){
        e.preventDefault();
        $(".mughlai-cuisine").hide()
        $(".mexican-cuisine").hide()
        $(".chinese-cuisine").show()
        $(".mid-nav").children(".active").removeClass("active")
        $(this).addClass("active")
     });

})

// Function to add products 
function addProduct(addValue) {

    // Adding product directly if no product exists yet.
    if (products.length == 0) {
        products.push(addValue)
    }
    else {

        // Check if product already exists, then replace quantity of product.
        list_of_all_values = products.map( item => { return item.name });
        if (list_of_all_values.includes(addValue['name'])) {
            for (var i = 0; i < products.length; i++) {
                if (products[i]['name'] == addValue["name"]) {

                    // If product quantity is 0, remove the product from array.
                    if (addValue["quantity"] == 0) {
                        products.splice(i, 1);
                    }
                    else {
                        products[i]['quantity'] = addValue["quantity"];
                    }
                    }
                }
            }
        else {
            // If some product already exists in array but adding a different product here then push json to array.
            products.push(addValue)
        }
        // Storing products array in local storage.
        localStorage.setItem('productsArr', JSON.stringify(products));
    }
}

// Methods for adding individual products to Cart
function addChickenThali(quantity) {
    let addValue = 
        {
            "name":"Chicken Thali",
            "image":"images/pexels-chan-walrus-958545.jpg",
            "quantity": quantity,
            "price":17.99,
            "description":"A spicy, tangy homestyle chicken curry made with a mix of different Indian spices and smothered the goodness of masala gravy"
        }
        addProduct(addValue)
}

function addButterChicken(quantity) {
    let addValue = 
        {
            "name":"Butter Chicken",
            "image":"images/pexels-marvin-ozz-2474661.jpg",
            "quantity":quantity,
            "price":17.99,
            "description":"Butter chicken is a curry of chicken in a spiced tomato and butter. Aromatic golden chicken in an incredible creamy sauce."
        }
        addProduct(addValue)
}

function addChickenTikka(quantity) {
    let addValue = 
        {
            "name":"Chicken Tikka",
            "image":"images/pexels-omar-mahmood-106343.jpg",
            "quantity":quantity,
            "price":17.99,
            "description":"It is traditionally small pieces of boneless chicken baked using skewers on a brazier called angeethi or over charcoal after marinating in Indian spices"
        }
        addProduct(addValue)
    }

function addBeefTaco(quantity) {
    let addValue = 
        {
            "name":"Beef Birria Tacos",
            "image":"images/Beef Birria Tacos.jpg",
            "quantity":quantity,
            "price":15.99,
            "description": "These juicy tacos are loaded with brothy red sauce and tender shredded meat with veggies. You won't regret ordering this!"
        }
        addProduct(addValue)
    }

function addBaconChilaEgg(quantity) {
    let addValue = 
        {
            "name":"Bacon Chilaquiles with Eggs",
            "image":"images/Bacon Chilaquiles with Eggs.jpg",
            "quantity":quantity,
            "price":15.99,
            "description": "Famous in Mexico and throughout the Southwest, chilaquiles with eggs. It gives the traditional eggs-and-bacon dish a unique twist. This is a must try!"
        }
        addProduct(addValue)
    }

    function addPorkPosole(quantity) {
        let addValue = 
            {
                "name":"Pork Posole",
                "image":"images/Pork Posole.jpg",
                "quantity":quantity,
                "price":15.99,
                "description": "A Mexican classic full of cubed pork, sliced sausage, hominy. The stew is seasoned with a combination of spices, and it's topped with garnishes"
            }
            addProduct(addValue)
        }

    function addDumpling(quantity) {
        let addValue = 
            {
                "name":"Dumpling (饺子)",
                "image":"images/Dumpling.jpg",
                "quantity":quantity,
                "price":15.99,
                "description": "Dumpling has been an indispensable Chinese dish of the reunion dinner on Chinese New Year’s Eve. They are everyone's favourite chinese snack!"
            }
            addProduct(addValue)
        }

    function addkungPaoChicken(quantity) {
        let addValue = 
            {
                "name":"Kung Pao Chicken（宫保鸡丁",
                "image":"images/kung pao chicken.jpg",
                "quantity":quantity,
                "price":15.99,
                "description": "Kung Pao Chicken（宫保鸡丁）is a popular dish not only among Chinese people. Special flavor of sweet and sour and is a little bit spicy."
            }
            addProduct(addValue)
        }
        function addchowmein(quantity) {
            let addValue = 
                {
                    "name":"Chow Mein（炒面）",
                    "image":"images/chowmein.jpg",
                    "quantity":quantity,
                    "price":14.99,
                    "description": "Chow Mein（炒面）or stir-fried noodles, is one of the best Chinese dishes, made of noodles, onion, sliced meat, green pepper."
                }
                addProduct(addValue)
            }
    