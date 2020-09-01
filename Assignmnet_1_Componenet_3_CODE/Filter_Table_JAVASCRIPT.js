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
    let price_input, filter, filter_table, table_row, table_data, output_value;

    price_input = document.getElementById("myInput1");

    filter = price_input.value.toUpperCase();

    filter_table = document.getElementById("table")

    table_row = filter_table.getElementsByTagName("tr");

    for(let i = 0; i < table_row.length; i++)
    {
        table_data = table_row[i].getElementsByTagName("td")[1];
        if(table_data)
        {
            output_value = table_data.innerText;

            if(output_value.toUpperCase().indexOf(filter) > -1)
            {
                table_row[i].style.display = "";
            }
            else
            {
                table_row[i].style.display = "none";
            }
        }
    }
}
