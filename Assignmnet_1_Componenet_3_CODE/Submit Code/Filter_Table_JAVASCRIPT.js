
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
	{
        type:"Jp",
        price:300,
        color:"black"
    },
    {
        type:"Hold",
        price:10003,
        color:"orange"
    },
    {
        type:"Mazda 360",
        price:50088,
        color:"red"
    },
    {
        type:"Fiat 500",
        price:500,
        color:"black"
    },    
    {
        type:"Audi",
        price:250000,
        color:"black"
    },
    {
        type:"Audi",
        price:10003,
        color:"red"
    },
    {
        type:"Mazda",
        price:50066,
        color:"yellow"
    },
    {
        type:"Fiat",
        price:15000,
        color:"yellow"
    },    
    {
        type:"Jeep",
        price:20000,
        color:"yellow"
    },
    {
        type:"Holden",
        price:750,
        color:"purple"
    },
    {
        type:"Lexus",
        price:50000,
        color:"red"
    },
    {
        type:"lexus",
        price:15000,
        color:"white"
    },    
    {
        type:"Lexus",
        price:20000,
        color:"black"
    },
    {
        type:"Great Wall",
        price:1000,
        color:"red"
    },
    {
        type:"Great Wall",
        price:500,
        color:"blue"
    },
    {
        type:"Great Wall",
        price:15000,
        color:"white"
    },
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
    {
        type:"Jp",
        price:300,
        color:"black"
    },
    {
        type:"Hold",
        price:10003,
        color:"orange"
    },
    {
        type:"Mazda 360",
        price:50088,
        color:"red"
    },
    {
        type:"Fiat 500",
        price:500,
        color:"black"
    },    
    {
        type:"Audi",
        price:250000,
        color:"black"
    },
    {
        type:"Audi",
        price:10003,
        color:"red"
    },
    {
        type:"Mazda",
        price:50066,
        color:"yellow"
    },
    {
        type:"Fiat",
        price:15000,
        color:"yellow"
    },    
    {
        type:"Jeep",
        price:20000,
        color:"yellow"
    },
    {
        type:"Holden",
        price:750,
        color:"purple"
    },
    {
        type:"Lexus",
        price:50000,
        color:"red"
    },
    {
        type:"lexus",
        price:15000,
        color:"white"
    },    
    {
        type:"Lexus",
        price:20000,
        color:"black"
    },
    {
        type:"Great Wall",
        price:1000,
        color:"red"
    },
    {
        type:"Great Wall",
        price:500,
        color:"blue"
    },
    {
        type:"Great Wall",
        price:15000,
        color:"white"
    }
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



// functions start from here onwards
// variables to keep track of which input fields are being used
var price_Search = false;
var colour_Search = false

function priceSearch()
{
    let price_input = document.getElementById("myInput1");

    let value_converter = price_input.value;

    let filter_table = document.getElementById("table");

    let table_row = filter_table.getElementsByTagName("tr");
    
    // these variables will be used inside the loop
    let table_data, output_value;

    for(let i = 0; i < table_row.length; i++)
    {
        table_data = table_row[i].getElementsByTagName("td")[1];
        if(table_data)
        {
            output_value = table_data.innerHTML;

            if(output_value.toLowerCase().indexOf(value_converter) > -1)
            {
                price_Search = true;

                // to display the searched result
                table_row[i].style.color = "Red";
                table_row[i].style.display;
            }
            else if(output_value.toLowerCase().indexOf(value_converter) == -1)
            {
                price_Search = false;

                // if input not found then display nothing
                table_row[i].style.display = "none";
            }
        }
    }
}

function colourSearch()
{
    let color_input = document.getElementById("myInput2");

    let value_converter = color_input.value.toLowerCase();

    let filter_table = document.getElementById("table");

    let table_row = filter_table.getElementsByTagName("tr");
    
    // these variables will be used inside the loop
    let table_data, output_value;

    for(let i = 0; i < table_row.length; i++)
    {
        table_data = table_row[i].getElementsByTagName("td")[2];
        if(table_data)
        {
            output_value = table_data.innerHTML;

            if(output_value.toLowerCase().indexOf(value_converter) > -1)
            {
                colour_Search = true;

                // to display the searched result
                table_row[i].style.color = "Red";
                table_row[i].style.display;
            }
            else if(output_value.toLowerCase().indexOf(value_converter) == -1)
            {
                colour_Search = false;

                // if input not found then display nothing
                table_row[i].style.display = "none";
            }
        }
    }
}


// to reset the filtered table and the input fields
function resetButton()
{
    
	
	let filter_table = document.getElementById("table");
    let price_input = document.getElementById("myInput1");
    let color_input = document.getElementById("myInput2");


        price_input.value = "";
        color_input.value = "";
        filter_table.innerHTML = t;
 
}
