let xmlDoc = document.implementation.createDocument(null, "books");
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (xhttp.readyState == 4 && xhttp.status == 200) {
    let xmlDoc = xhttp.responseXML; //important to use responseXML here
}
}
xhttp.open("GET", "../xml/books.xml", true);
xhttp.send();
let xmlString = "<products></products>";
let parser = new DOMParser();
let xmlDoc = parser.parseFromString(xmlString, "text/xml"); //important to use "text/xml"
let node = xmlDoc.createElement("product-title");
let elements = xmlDoc.getElementsByTagName("products");
elements[0].appendChild(node);