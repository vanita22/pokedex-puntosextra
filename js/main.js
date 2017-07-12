/*var llamarAjax = function(){
	$.ajax({
		url: 'http://pokeapi.co/api/v2/pokemon',
		type: 'GET',
		dataType: 'json',
		data: {Limit: 15},
		success: function(response){
			console.log(response);
			return response;
		},
		error: function(error){
			console.log(error);
			return error;
		}

	})
}

console.log("esta es una prueba");
var respuesta = llamarAjax();
respuesta.results.forEach(
	function(el){
		console.log(el.name);
	}
)

console.log("este es el mensaje después de la llamada del ajax");*/

