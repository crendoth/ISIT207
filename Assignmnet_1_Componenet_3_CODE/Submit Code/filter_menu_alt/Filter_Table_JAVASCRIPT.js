var types = ["Great Wall", "Lexus", "Holden", "Fiat", "Jeep", "Audi"];
var colors = ["Red", "White", "Black", "Blue", "Yellow", "Purple", "Orange", "Green"];
var cars = new Array();

for (var j = 0; j < 50; j++){

    cars.push({
    
        code: createRandomString(5),
        type: types[rand_int(0, 6)],
        color: colors[rand_int(0, 8)],
        price: "$" + rand_int(500, 30001),
        year: rand_int(2017, 2021)
         
	});

}


var t = "";
for(let i = 0; i < 50; i++)
{
    var tr = "<tr>";
    
    tr += "<td>" + cars[i].type + "</td>";
    tr += "<td>" + cars[i].price + "</td>";
    tr += "<td>" + cars[i].color + "</td>";
    tr += "<td>" + cars[i].code + "</td>";
    tr += "<td>" + cars[i].year + "</td>";
    tr += "</tr>";

    t += tr;
}

document.getElementById("table").innerHTML = t;



// functions start from here onwards
// variables to keep track of which input fields are being used
var price_Search = false;
var colour_Search = false

function year_select(){

    let input, filter, table, table_row, table_data, text_val;

    input = document.getElementById("years");
    filter = input.value;
    table = document.getElementById("table");
    table_row = table.getElementsByTagName("tr");

    for (let x = 0; x < table_row.length; x++){
    
        table_data = table_row[x].getElementsByTagName("td")[4];

        if (table_data){
      
            text_val = table_data.innerHTML;
            if (text_val.indexOf(filter) > -1){
       
                table_row[x].style.color = "Red";
                table_row[x].style.display;

			} else {
        
                table_row[x].style.display = "none";

			}

		}

	}

}

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
    document.getElementById("years").options[0].selected = true;


        price_input.value = "";
        color_input.value = "";
        year_select_input = 
        filter_table.innerHTML = t;
 
}

function createRandomString(string_length) {

  var range_of_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return [...Array(string_length)].reduce((a) => a + range_of_chars[~~(Math.random() * range_of_chars.length)]," ");

}

function rand_int(min, max) {

  return Math.floor(Math.random() * (max - min) ) + min;

}
