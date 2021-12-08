function validateForm() {
  let name = document.querySelector("#name");
  if (name.value == "") {
    name.nextElementSibling.innerHTML = "Name Cannot Be Blank"
  } else {
    name.nextElementSibling.innerHTML = ""
  }


  let phone = document.querySelector("#phone");
  if (phone.value == "") {
    phone.nextElementSibling.innerHTML = "Phone Number Cannot Be Blank"
  } else {
    phone.nextElementSibling.innerHTML = ""
  }

  let size = document.querySelector("#size");
  if (size.value == "") {
    size.nextElementSibling.innerHTML = "Please Select The Size"
  } else {
    size.nextElementSibling.innerHTML = ""
  }

  let crust = document.querySelector("#crust");
  if (crust.value == "") {
    crust.nextElementSibling.innerHTML = "Kindly Select The Crust"
  } else {
    crust.nextElementSibling.innerHTML = ""
  }

  let dough = document.querySelector("#dough");
  if (dough.value == "") {
    dough.nextElementSibling.innerHTML = "Please Select The Dough"
  } else {
    dough.nextElementSibling.innerHTML = ""
  }

  let sauce = document.querySelector("#sauce");
  if (sauce.value == "") {
    sauce.nextElementSibling.innerHTML = "Please Select The Sauce"
  } else {
    sauce.nextElementSibling.innerHTML = ""
  }

  let toppings = document.querySelectorAll("input[name=toppings]:checked");
  let toppingsError = document.querySelector("span.no-topping-error")
  if (toppings.length == 0) {
    toppingsError.innerHTML = "Select atleast 2 Toppings"
  } else {
    toppingsError.innerHTML = ""
  }
}