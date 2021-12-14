let leftImages = [
    "images/Beef Birria Tacos.jpg",
    "images/Bacon Chilaquiles with Eggs.jpg",
    "images/Pork Posole.jpg"
]

let leftText = [{
    "title":"Beef Birria Tacos",
    "description":"These juicy tacos are loaded with brothy red sauce and tender shredded meat. They’re inspired by traditional birria, which is a popular lamb or goat stew from the Mexican state of Jalisco."
},{
    "title":"Bacon Chilaquiles with Eggs",
    "description":"In Mexico and throughout the Southwest, chilaquiles with eggs are typically made for brunch using tortillas and any leftovers from the previous day’s dinner. This is usually brought to family brunches as it gives the traditional eggs-and-bacon dish a unique twist"
},{
    "title":"Pork Posole",
    "description":"A Mexican classic full of cubed pork, sliced sausage, hominy and more—it’s very much a traditional Mexican food. The stew is seasoned with a combination of spices, and it's typically topped with garnishes like radishes, avocados and lime juice."
}]

let displayLeftImages = () => {
    let imageHtml = "";
    leftImages.forEach((val) => {
        imageHtml += `<figure><img src="${val}"></img></figure>`
    })
    $('.leftimg').html(imageHtml)
}

let displayLeftText = () => {
    let textHtml = "";
    leftText.forEach((val)=> {
        textHtml += `<h4>${val.title}</h4><p>${val.description}</p>`
    })
    $('.lefttext').html(textHtml)
}

displayLeftText(leftText)
displayLeftImages(leftImages)