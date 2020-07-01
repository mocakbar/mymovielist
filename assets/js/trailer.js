$(document).ready(function(){
		$.ajax({
      url: "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLScC8g4bqD47c-qHlsfhGH3j6Bg7jzFy-&key=AIzaSyCgraMZ6TzVP2XleH2HqFN8vtihk1fpzF0",
			dataType :'json',
			success: function(result, status, xhr){

        let resultHtml = ''

        for(i=0; i<20; i++){

          let link = "https://www.youtube.com/embed/" + result['items'][i]['snippet']['resourceId']['videoId']

            resultHtml += "<div class='coming-trailer'>"
            resultHtml += "<iframe allowFullScreen='allowFullScreen' class='dox' src='" + link + "'></iframe>"
            resultHtml += "</div>"
        }

        $('.trailer-soon .main-body').html(resultHtml)

				console.log(resultHtml)
				console.log(result)
			},
      eror: function(status, xhr, result){
        $("#trailer").html("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
      }
    })

})