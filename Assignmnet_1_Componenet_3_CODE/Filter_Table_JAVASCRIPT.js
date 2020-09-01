// start coding

var cars = [
    {
        type:"Jeep",
        price:20000,
        color:"black"
    },
    {
        type:"Holden",
        price:1000,
        color:"red"
    },
    {
        type:"Mazda",
        price:500,
        color:"blue"
    },
    {
        type:"Fiat",
        price:15000,
        color:"white"
    },
]


var t = "";
for(var i = 0; i < cars.length; i++)
{
    var tr = "<tr>";

    tr += "<td>" + cars[i].type + "</td>";
    tr += "<td>" + cars[i].price + "</td>";
    tr += "<td>" + cars[i].color + "</td>";
    tr += "</tr>";
    t += tr;
}


document.getElementById("table").innerHTML = t;


// functions
function priceSearch()
{

}