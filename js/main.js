/*var llamarAjax = function(){
	$.ajax({
		url: 'http://pokeapi.co/api/v2/pokemon',
		type: 'GET',
		dataType: 'json',
		data: {Limit: 15},
		success: function(response){
					
				response.results.forEach{
                	function(el){
						console.log(el.name);
							$.ajax({
						url: el.url,
						type: 'GET',
						dataType: 'json',
						data: {Limit: 15},
						success: function(res){
						console.log(res.abilities[0].ability.name)
					}
					
				})			
		}
			
		};
		console.log("este es un mensaje");
		error: function(error){
			console.log(error);
			return error;
		},

	})
}*/

/*console.log("esta es una prueba");
var respuesta = llamarAjax();
respuesta.results.forEach(
	function(el){
		console.log(el.name);
	}
)*/

$.ajax({
	url: 'http://pokeapi.co/api/v2/pokemon',
	type: 'GET',
	dataType: 'json',
	data: {'limit': '1'},		
})

.done(function(respuesta) {
	respuesta.results.forEach(function(el){
		$("#box-a").prepend('<h3><em>Nombre: '+el.name + '</em></h3>');
	});	
})


$.ajax({
	url: 'http://pokeapi.co/api/v2/ability',
	type: 'GET',
	dataType: 'json',
	data: {'limit': '1'},
})

.done(function(respuesta) {
	respuesta.results.forEach(function(el){
		$("#box-a").append('<h5><strong>Habilidad: </strong>'+ el.name+ '</h5>');
	});	
})


$.ajax({
	url: 'http://pokeapi.co/api/v2/move-ailment',
	type: 'GET',
	dataType: 'json',
	data: {'limit': '1'},
})

.done(function(respuesta) {
	respuesta.results.forEach(function(el){
		$("#box-a").append('<h5><strong>enfermedad de ataque: </strong>'+ el.name+ '</h5>');
	});	
})

.done(function(respuesta){
	for(var i = 1; i <= 3; i++){		
		$("#box").append('<img src="http://pokeapi.co/media/img/'+[i]+'.png">');
	}	
})


.fail(function() {
	console.log("error");
})
.always(function() {
	console.log("complete");
}); 



