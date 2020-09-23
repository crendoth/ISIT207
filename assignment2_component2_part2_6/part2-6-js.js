let hashMap = new Map();

$(function() {

	$("#hash_submit").on('click', function(){
	
		let n = parseInt($("#hash_input").val());
		hashMap[n] = hash(n);

		console.log(hashMap);

		$("#hash_out").text(JSON.stringify(hashMap));

	});

});

function hash(n){

	return n % 100;

}