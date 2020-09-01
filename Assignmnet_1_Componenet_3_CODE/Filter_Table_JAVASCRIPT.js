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
for(let i = 0; i < cars.length; i++)
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
    let price_input = document.getElementById("myInput1");

    let value_converter = price_input.value.toLowerCase();

    let filter_table = document.getElementById("table")

    let table_row = filter_table.getElementsByTagName("tr");
    
    // these variables will be used inside the loop
    let table_data, output_value;

    for(let i = 0; i < table_row.length; i++)
    {
        table_data = table_row[i].getElementsByTagName("td")[1];
        if(table_data)
        {
            output_value = table_data.innerText;

            if(output_value.toLowerCase().indexOf(value_converter) > -1)
            {
                // to display the searched result
                table_row[i].style.color = "Red";
                table_row[i].style.outline = "solid green";
                table_row[i].style.display;
            }
            else
            {
                // if input not found then display nothing
                table_row[i].style.display = "none";
            }
        }
    }
}


// need a reset button function
