var toys = [
			{
				name: "Horse",
				price: 3000,
				colour: "brown"
			},
			{
				name: "Car",
				price: 30,
				colour: "red"
			},
			{
				name: "Truck",
				price: 35,
				colour: "white"
			},
			{
				name: "Bike",
				price: 200,
				colour: "black"
			},
			{
				name: "Scooter",
				price: 70,
				colour: "silver"
			},
			{
				name: "Ball",
				price: 15,
				colour: "white"
			},
			{
				name: "Plane",
				price: 40,
				colour: "white"
			},
			{
				name: "Slinky",
				price: 5,
				colour: "silver"
			},
]

var t = "";
for(let i = 0; i < toys.length; i++)
{
    var tr = "<tr>";

    tr += "<td>" + toys[i].name + "</td>";
    tr += "<td>" + toys[i].price + "</td>";
    tr += "<td>" + toys[i].colour + "</td>";
    tr += "</tr>";
    t += tr;
}

document.getElementById("table").innerHTML = t;

// JavaScript Array methods: 1-2(i, ii, iii, iv, v, vi, vii)
function arrayMethodsButton()
{
	//add item to end of array
	var pushToy = {
		"name": "Tank",
		"price": 1500,
		"colour": "green",
	}
	toys.push(pushToy);
	console.log(pushToy);

	//add to middle
	var spliceToy = {
		"name": "Boat",
		"price": 50,
		"colour": "blue",
	}
	toys.splice(3, 0, spliceToy);
	console.log(spliceToy);

	//add item to begining of array
	var unshiftToy = {
		"name": "Helicopter",
		"price": 150,
		"colour": "grey",
	}
	toys.unshift(unshiftToy);
	console.log(unshiftToy);

	//transform array using map:
	let prices = toys.map(toy => {
	  if (toy.price <= 30){
	    return "cheap";
	  }
	  if (toy.price <= 70 && toy.price >= 31){
	    return "medium";
	  }
	  else return "expensive";
	});
	console.log(prices);

	//add property too all toy obj
	toys.forEach(toy => {
		toy['range'] =  "cheap";
			if (toy.price <= 30){
				toy['range'] = "medium";
			}
			if (toy.price <= 70){
				toy['range'] = "expensive";
			}
	});

	//sort toys array
	let sortedToys = toys.sort((t1, t2) => (t1.price < t2.price) ? 1 : (t1.price > t2.price) ? -1 : 0);
	console.log(sortedToys);
}

// variables to keep track of which input fields are being used
var price_Search = false;

function priceSearch()
{
    let price_input = document.getElementById("myInput");

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
                table_row[i].style.color = "LightGreen";
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

function findButton()
{
	let span = document.getElementById("found")
	let input = document.getElementById("find");
	let found = input.value;

	//find first toy
	let findToy = toys.find(toy => toy.colour === found);
	let myJSON = JSON.stringify(findToy);

	let txt = document.createTextNode(myJSON);
	span.appendChild(txt);
}

function resetButton()
{
	let filter_table = document.getElementById("table");
    let price_input = document.getElementById("myInput");
    let find_input = document.getElementById("find");
    let find_output = document.getElementById("found");

    price_input.value = "";
    filter_table.innerHTML = t;
    find_input.value = "";
    find_output.innerHTML = "";
}