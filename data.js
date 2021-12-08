let data = {
    "features": [
        {
            "class": "fas fa-hotel fa-3x", "heading": "Location",
            "description": "50 Parallel Road , Newyork City, USA"
        },
        {
            "class": "fas fa-phone fa-3x", "heading": "Phone Number",
            "description": "+91-7337416690"
        },
        {
            "class": "fas fa-envelope fa-3x", "heading": "Email address",
            "description": "Newyork@Thunderfury.com"
        }
    ]
}

localStorage.setItem('featureData', JSON.stringify(data));

$(document).ready(function() {

    let infoFromStorage = JSON.parse(localStorage.getItem('featureData'));

    infoFromStorage.features.forEach(loadFeatures);

    setDetails(infoFromStorage);

});

function loadFeatures(item, index, arr){

    let gridItem = "";

    gridItem = "<div class='box bg-dark'>";

    gridItem += "<i class='"+item.class+"'></i>";

    gridItem += "<h3>"+item.heading+"</h3>";

    gridItem += "<p>"+item.description+"</p>";

    gridItem += "</div>";



   $(gridItem).appendTo( "#features" );

}