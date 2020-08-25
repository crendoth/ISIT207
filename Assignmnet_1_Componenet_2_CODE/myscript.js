function within_range(x){

	return (x >=2 && x <= 8);

}

function amount_within_range(arr){

	var counter = 0;

	for (var i = 0; i < arr.length; i++){
	
		if (arr[i] >= 4 && arr[i] <= 9){
		
			counter++;

		}

	}

	return counter;

}

function randomStringGenerator(string_length) {

    let range_of_chars = "abcdefghijkl0123456789mnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return [...Array(string_length)].reduce(element=>element+range_of_chars[Math.floor((Math.random()*range_of_chars.length))],'');

}

function component2_1(){
	
	var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	//2-1(a)
	var reduce_func = (accumulator, current_value) => accumulator + current_value;

	console.log(arr.reduce(reduce_func));
	var out = "<table><tr><td style='padding-bottom:50px;'>2-1(a):</td><td>" + arr.reduce(reduce_func) + "</td></tr>";

	//2-1(b)
	var arr_filtered_results = arr.filter(within_range);
	console.log(arr_filtered_results);
	out += "<tr><td style='padding-bottom:50px;'>2-1(b):</td><td>" + arr_filtered_results + "</td></tr>";

	//2-1(c)
	var between_4_and_9 = amount_within_range(arr);
	console.log(between_4_and_9);
	out += "<tr><td style='padding-bottom:50px;'>2-1(c):</td><td>" + between_4_and_9 + "</td></tr>";

	//2-1(d)
	arr_filtered_results.forEach((element, index, arr) => { 
		arr[index] = element + 1 
		})

	console.log(arr_filtered_results);
	out += "<tr><td style='padding-bottom:50px;'>2-1(d):</td><td>" + arr_filtered_results + "</td></tr>";

	var names = ["Sam", "Alex", "Lee", "John", "George", "Adam", "Mark", "Matthew", "Luke", "Ethan"];

	var arr2 = new Array(10);

	for (var i = 0; i < 10; i++){
	
		let obj = {name:names[i], propNum:(i+3)};
		arr2[i] = obj

	}

	console.log(arr2);

	//2-1(d)(i)
	var propNum_total = 0;
	arr2.forEach((element) => {
		propNum_total += element.propNum
	});

	console.log(propNum_total);

	out += "<tr><td style='padding-bottom:50px;'>2-1(d)(i):</td><td>" + propNum_total + "</td></tr>";

	//2-1(d)(ii)
	var obj_4_11 = arr2.filter((e) => {
	
		return e.propNum >= 4 && e.propNum <= 7;

	});

	console.log(obj_4_11);
	out += "<tr><td style='padding-bottom:50px;'>2-1(d)(ii):</td><td>" + JSON.stringify(obj_4_11) + "</td></tr>";

	//2-1(e)
	arr_strings = new Array(20);
	for (var x = 0; x < arr_strings.length; x++){
	
		arr_strings[x] = randomStringGenerator(Math.floor((Math.random() * 10) + 1));

	}

	console.log(arr_strings);
	out += "<tr><td style='padding-bottom:50px;'>2-1(e):</td><td style='overflow:auto;'>" + JSON.stringify(arr_strings) + "</td></tr>";

	//2-1(e)(i)

	var pattern_e_i = /((^t).{4}(t$))/gi;
	var arr_pattern_e_i = new Array(20);
	arr_strings.forEach((element, index, arr) => {
	
		if (!pattern_e_i.test(element)){
		
			arr_pattern_e_i[index] = "";

		} else {
		
			arr_pattern_e_i[index] = element;

		}

	});

	console.log(arr_pattern_e_i);
	out += "<tr><td style='padding-bottom:50px;'>2-1(e)(i):</td><td style='overflow:auto;'>" + JSON.stringify(arr_pattern_e_i) + "</td></tr>";

	//2-1(e)(ii)

	var arr_pattern_e_ii = new Array(20);
	var pattern_e_ii = /(?=^.{3,7}$)(?=.*\d)(?=.*[a-z]).*$/gi;
	arr_strings.forEach((element, index, arr) => {
	
		if (!pattern_e_ii.test(element)){
		
			arr_pattern_e_ii[index] = "";

		} else {
		
			arr_pattern_e_ii[index] = element;

		}

	});

	console.log(arr_pattern_e_ii);
	out += "<tr><td style='padding-bottom:50px;'>2-1(e)(ii):</td><td style='overflow:auto;'>" + JSON.stringify(arr_pattern_e_ii) + "</td></tr>";

	//2-1(e)(iii)
	
	var pattern_e_iii = /(tx){2,}(xyz)/gi;
	var arr_pattern_e_iii = new Array(20);
	arr_strings.forEach((element, index, arr) => {
	
		if (!pattern_e_iii.test(element)){
		
			arr_pattern_e_iii[index] = "";

		} else {
		
			arr_pattern_e_iii[index] = element;

		}

	});

	console.log(arr_pattern_e_iii);
	out += "<tr><td style='padding-bottom:50px;'>2-1(e)(iii):</td><td style='overflow:auto;'>" + JSON.stringify(arr_pattern_e_iii) + "</td></tr>";

	/*
	var pattern1 = 
	var pattern2 = 
	var pattern3 = 
	var pattern4 = 
	var pattern5 = 
	var pattern6 = 

	*/

	document.getElementById("component_2_1_out").innerHTML = out + "</table>";

}