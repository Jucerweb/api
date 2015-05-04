SC.initialize({
  client_id:"0e43f3b794fdcc9ee9b17298c096fe7a"
});

$(document).ready(function() {
	$("#search").keypress(function(){
		
		var Data = $("#search").val();
		$('#get').html('');
		//if (Data.length > 1)	
				SC.get('/tracks', { limit: 5 , q: Data}, function(tracks) {
					var id = 1;
					$(tracks).each(function(index, track) {
				
						//$('div').append($('<li class="results"></li>').html(track.title));
						$('#get').append('<div class="list-group-item" id="'+ id +'">' + '<a href="' + track.permalink_url + '">' + track.title + '</a>'+ '</div><br>');
						  SC.oEmbed(track.permalink_url, document.getElementById(id));
						id ++;
					});
				});
		//else
			//$('.results').remove();
		
	});
});