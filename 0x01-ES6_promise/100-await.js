function getAsyncData(){
	return new Promise(function(resolve){
		setTimeout(function(){
			resolve({
				name: "Amr"
			});
		},2000);
	});
}

function getData(){
	return new Promise(function(resolve){
		getAsyncData().then(function(data){
			resolve(data);
		});
	})
}

getData()
.then(function(data){
	console.log(data); //will print {name: "Amr"} after 2 seconds
});
