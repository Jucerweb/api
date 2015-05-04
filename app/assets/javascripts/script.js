// $(function(){ igual a document.ready
$(document).ready(function() {
	SC.initialize({
  	client_id:"0e43f3b794fdcc9ee9b17298c096fe7a"
	});
	// $('#search').autocomplete({
	// 	source: function(req, res) {
	// 		SC.get('/tracks', { limit: 10, q: req.term}, function(tracks) {
	// 			$.each(tracks, function(i, track){
	// 				track.label = track.title;
	// 			});
	// 			res(tracks);
	// 		});
	// 	},
	// 	select: function(e, ui) {
	// 		SC.oEmbed(ui.item.permalink_url, document.getElementById('get'));
	// 	}
	// });
	$("#search").keyup(function(e){
		var Data = $("#search").val();
		SC.get('/tracks', { limit: 10, q: Data}, function(tracks) {
			$('#get').html('');
			$(tracks).each(function(index, track) {
				$('#get').append('<div class="list-group-item" id="'+ track.id +'">' + '<a href="' + track.permalink_url + '">' + track.title + '</a>'+ '</div><br>');
				SC.oEmbed(track.permalink_url, document.getElementById(track.id));
			});
		});
	});
});