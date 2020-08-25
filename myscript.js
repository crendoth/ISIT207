function within_range(x){

	return (x >=2 && x <= 8);

}

//Returns the amount of numbers between 4 and 9
function amount_within_range(arr){

	var counter = 0;

	for (var i = 0; i < arr.length; i++){
	
		if (arr[i] >= 4 && arr[i] <= 9){
		
			counter++;

		}

	}

	return counter;

}

function component2_1(){

	var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	var reduce_func = (accumulator, current_value) => accumulator + current_value;

	console.log(arr.reduce(reduce_func));
	var out = "<table><tr><td>2-1(a):</td><td>" + arr.reduce(reduce_func) + "</td></tr>";

	var arr_filtered_results = arr.filter(within_range);
	console.log(arr_filtered_results);
	out += "<tr><td>2-1(b):</td><td>" + arr_filtered_results + "</td></tr>";

	//Returns the amount of numbers between 4 and 9
	var between_4_and_9 = amount_within_range(arr);
	console.log(between_4_and_9);
	out += "<tr><td>2-1(c):</td><td>" + between_4_and_9 + "</td></tr>";

	arr_filtered_results.forEach((element, index, arr) => { 
		arr[index] = element + 1 
		})

	console.log(arr_filtered_results);
	out += "<tr><td>2-1(d):</td><td>" + arr_filtered_results + "</td></tr></table>";

	document.getElementById("component_2_1_out").innerHTML = out;

}

