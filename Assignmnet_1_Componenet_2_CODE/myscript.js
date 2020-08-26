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

function hole_counter(arr){

	var counter = 0;
	
	arr.forEach((element, index, array) => {
	
		if (element in array === false){
	
			++counter;

		}
	
	});

	return counter;

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

	//2-1(e)(pattern-1)

	//Pattern 1 searches for any string with at least 3 digits, and starts with an 's'

	var pattern1 = /^s(.*\d){3,}/gi;
	var arr_pattern_1 = new Array(20);
	arr_strings.forEach((element, index, arr) => {
	
		if (!pattern1.test(element)){
		
			arr_pattern_1[index] = "";

		} else {
		
			arr_pattern_1[index] = element;

		}

	});

	console.log(arr_pattern_1);
	out += "<tr><td style='padding-bottom:50px;'>2-1(e)(pattern-1):</td><td style='overflow:auto;'>" + JSON.stringify(arr_pattern_1) + "</td></tr>";

	//2-1(e)(pattern-2)

	//Pattern 2 searches for any string between 4 and 9 elements long, and has at least one uppercase and one lowercase letter

	var pattern2 = /(?=^.{4,9}$)((.*[a-z].*[A-Z].*)|(.*[A-Z].*[a-z].*)).*$/g;
	var arr_pattern_2 = new Array(20);
	arr_strings.forEach((element, index, arr) => {
	
		if (!pattern2.test(element)){
		
			arr_pattern_2[index] = "";

		} else {
		
			arr_pattern_2[index] = element;

		}

	});

	console.log(arr_pattern_2);
	out += "<tr><td style='padding-bottom:50px;'>2-1(e)(pattern-2):</td><td style='overflow:auto;'>" + JSON.stringify(arr_pattern_2) + "</td></tr>";

	//2-1(e)(pattern-3)

	//Pattern 3 searches for strings that are made up entirely of digits and nothing else

	var pattern3 = /\b\d+\b/g;
	var arr_pattern_3 = new Array(20);
	arr_strings.forEach((element, index, arr) => {
	
		if (!pattern3.test(element)){
		
			arr_pattern_3[index] = "";

		} else {
		
			arr_pattern_3[index] = element;

		}

	});

	console.log(arr_pattern_3);
	out += "<tr><td style='padding-bottom:50px;'>2-1(e)(pattern-3):</td><td style='overflow:auto;'>" + JSON.stringify(arr_pattern_3) + "</td></tr>";

	//2-1(e)(pattern-4)

	//Pattern 4 searches for strings that are made up entirely of letters and nothing else

	var pattern4 = /\b[a-z]+\b/gi;
	var arr_pattern_4 = new Array(20);
	arr_strings.forEach((element, index, arr) => {
	
		if (!pattern4.test(element)){
		
			arr_pattern_4[index] = "";

		} else {
		
			arr_pattern_4[index] = element;

		}

	});

	console.log(arr_pattern_4);
	out += "<tr><td style='padding-bottom:50px;'>2-1(e)(pattern-4):</td><td style='overflow:auto;'>" + JSON.stringify(arr_pattern_4) + "</td></tr>";

	//2-1(e)(pattern-5)

	//Pattern 5 searches for strings that start with an uppercase letter and end with a lowercase letters

	var pattern5 = /^[A-Z].*[a-z]$/g;
	var arr_pattern_5 = new Array(20);
	arr_strings.forEach((element, index, arr) => {
	
		if (!pattern5.test(element)){
		
			arr_pattern_5[index] = "";

		} else {
		
			arr_pattern_5[index] = element;

		}

	});

	console.log(arr_pattern_5);
	out += "<tr><td style='padding-bottom:50px;'>2-1(e)(pattern-5):</td><td style='overflow:auto;'>" + JSON.stringify(arr_pattern_5) + "</td></tr>";

	//2-1(e)(pattern-6)

	//Pattern 6 looks for strings starting with either upper or lowercase 'c' or 'a', and has somewhere in the string two consectutive digits.

	var pattern6 = /^(c|a)(?=.*\d\d).*$/gi;
	var arr_pattern_6 = new Array(20);
	arr_strings.forEach((element, index, arr) => {
	
		if (!pattern6.test(element)){
		
			arr_pattern_6[index] = "";

		} else {
		
			arr_pattern_6[index] = element;

		}

	});

	console.log(arr_pattern_6);
	out += "<tr><td style='padding-bottom:50px;'>2-1(e)(pattern-6):</td><td style='overflow:auto;'>" + JSON.stringify(arr_pattern_6) + "</td></tr>";

	document.getElementById("component_2_1_out").innerHTML = out + "</table>";

	//Array with holes

	var arr_holes = [1, 2, 3, 4, , 6, , 8, , , 11, 12, , 14, , 16];

	console.log(arr_holes);

	console.log(hole_counter(arr_holes));

}