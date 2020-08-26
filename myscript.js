function within_range(x) {
  return x >= 2 && x <= 8;
}

function amount_within_range(arr) {
  var counter = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 4 && arr[i] <= 9) {
      counter++;
    }
  }

  return counter;
}

function createRandomString(string_length) {
  var range_of_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return [...Array(string_length)].reduce((a) => a + range_of_chars[~~(Math.random() * range_of_chars.length)]," ");
}

function component2_1() {
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  //2-1(a)
  var reduce_func = (accumulator, current_value) => accumulator + current_value;

  console.log(arr.reduce(reduce_func));
  var out =
    "<table><tr><td>2-1(a):</td><td>" +
    arr.reduce(reduce_func) +
    "</td><td></td></tr>";

  //2-1(b)
  var arr_filtered_results = arr.filter(within_range);
  console.log(arr_filtered_results);
  out +=
    "<tr><td>2-1(b):</td><td>" + arr_filtered_results + "</td><td></td></tr>";

  //2-1(c)
  var between_4_and_9 = amount_within_range(arr);
  console.log(between_4_and_9);
  out += "<tr><td>2-1(c):</td><td>" + between_4_and_9 + "</td><td></td></tr>";

  //2-1(d)
  arr_filtered_results.forEach((element, index, arr) => {
    arr[index] = element + 1;
  });

  console.log(arr_filtered_results);
  out +=
    "<tr><td>2-1(d):</td><td>" +
    arr_filtered_results +
    "</td><td></td></tr><tr></tr>";

  var names = [
    "Sam",
    "Alex",
    "Lee",
    "John",
    "George",
    "Adam",
    "Mark",
    "Matthew",
    "Luke",
    "Ethan",
  ];

  var arr2 = new Array(10);

  for (var i = 0; i < 10; i++) {
    let obj = { name: names[i], propNum: i + 3 };
    arr2[i] = obj;
  }

  console.log(arr2);

  //2-1(d)(i)
  var propNum_total = 0;
  arr2.forEach((element) => {
    propNum_total += element.propNum;
  });

  console.log(propNum_total);

  out +=
    "<tr><td></td><td>2-1(d)(i):</td><td>" +
    propNum_total +
    "</td></tr><tr></tr>";

  //2-1(d)(ii)
  var obj_4_11 = arr2.filter((e) => {
    return e.propNum >= 4 && e.propNum <= 7;
  });

  console.log(obj_4_11);
  out +=
    "<tr><td></td><td>2-1(d)(ii):</td><td>" +
    JSON.stringify(obj_4_11) +
    "</td></tr><tr></tr>";

  //2-1(e)
  arr_strings = new Array(20);
  for (var x = 0; x < arr_strings.length; x++) {
    arr_strings[x] = createRandomString(Math.floor(Math.random() * 14 + 1));
  }

  console.log(arr_strings);

  document.getElementById("component_2_1_out").innerHTML = out + "</table>";
}

/* (2-5) Create an array of 1000 objects randomly and sort them based on one of their alphanumeric properties. Then sort them based one of their numeric properties. */
//component 2-5 function
function genRandString() {
	var randString = Math.random().toString(36).slice(2);
	return randString;
}

function component2_5() {
	var randomArray = []; //Array for 1000 randomly generated Strings

	var i;
	for (i = 0; i < 1000; i++) {
		var x = genRandString(); //generate random String as var x
		randomArray[randomArray.length] = x; //add generated string 'x' to the array
	}

	var clonedArray1 = JSON.parse(JSON.stringify(randomArray)); //Cloning randomArray for Alphabetical sorting
	var clonedArray2 = JSON.parse(JSON.stringify(randomArray)); //Cloning randomArray for Numerical sorting

	clonedArray1.sort();
	document.getElementById('alphaSortedArray').innerHTML = JSON.stringify(clonedArray1); //print Alphabetically sorted Array to screen

	clonedArray2.sort(function(a, b){return a-b});
	document.getElementById('numerSortedArray').innerHTML = JSON.stringify(clonedArray2); //print Numerically sorted Array to screen

}
