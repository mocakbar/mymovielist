$(document).ready(function(){

	// memanggil API youtube
	$.ajax({
		url: "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=PLScC8g4bqD47c-qHlsfhGH3j6Bg7jzFy-&key=AIzaSyAltHSIIyR9R_wYpWamq7ELe9hnpFi6ijQ",
		accepts: 'application/json',
    dataType :'json',
    success: function(result, status, xhr){

      let resultHtml = '';let kuwi = '';let mbuh = '';let c = ''; let d = ''; let e = '';

      for(i=0; i<5; i++){
        let cinta = "https://www.youtube.com/embed/" + result['items'][i]['snippet']['resourceId']['videoId']

        if (i == 0){
          resultHtml += "<iframe allowFullScreen='allowFullScreen' class='oz' src='" + cinta + "'></iframe>"
        } else if ( i == 1){
          kuwi += "<iframe allowFullScreen='allowFullScreen' class='oz' src='" + cinta + "'></iframe>"
        } else if ( i == 2){
          mbuh += "<iframe allowFullScreen='allowFullScreen' class='oz' src='" + cinta + "'></iframe>"
        } else if ( i == 3){
          c += "<iframe allowFullScreen='allowFullScreen' class='oz' src='" + cinta + "'></iframe>"
        } else if ( i == 4){
          d += "<iframe allowFullScreen='allowFullScreen' class='oz' src='" + cinta + "'></iframe>"
        } else if ( i == 5){
          e += "<iframe allowFullScreen='allowFullScreen' class='oz' src='" + cinta + "'></iframe>"
        } 
      }

      $('.carousel-item.active').html(resultHtml)
      $('.carousel-item.two').html(kuwi)
      $('.carousel-item.three').html(mbuh)
      $('.carousel-item.four').html(c)
      $('.carousel-item.five').html(d)
      
    },
    eror: function(status, xhr, result){
      $("#trailer").html("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
    }
  })


	// membuat zoom in zoom out news highlght 
	$('.box-news a').on('mouseenter', function(){
		$('.box-news a:hover img').css({
			'transform' : 'scale(1.3)', 
			'transition' : 'transform .5s ease',
		}),
		$('.box-news a:hover .kategori').css({
			'opacity' : '1'
		})
	})

	$('.box-news a').on('mouseleave', function(){
		$('.box-news a img').css({
			'transform' : 'scale(1)',
			'transition' : 'transform .5s ease'
		}),
		$('.box-news a .kategori').css({
			'opacity' : '0.5'
		})
	})

	// memanggil API top upcoming movie
	$.ajax({
		url: "https://api.themoviedb.org/3/movie/upcoming?&page=1",
			data: { "api_key": "4dda69557f9d1b4d4930dd9ee950047d" },
			dataType: "json",
			success: function(result, status, xhr){
				let resultHtml = '';
				
				for(i=0; i<5; i++){

					let img = "https://image.tmdb.org/t/p/w500/" + result['results'][i]['poster_path'];

					let title = result['results'][i]['title']
					let release = result['results'][i]['release_date']

					resultHtml += '<div class="popular-movie">'
					resultHtml += "<p class='no'>" + (i + 1) + "</p>"
					resultHtml += "<img src='" + img + "'>"
					resultHtml += "<div class='ket'>"
					resultHtml += "<h4>" + title + "</h4>"
					resultHtml += "<p class='tgl-tahun'><b>Release : " + release + "</b></p>"
					resultHtml += "</div>"
					resultHtml += "</div>"

				}

				$("#top-upcoming-movie .main-body").html(resultHtml)
			}
	})

	
})


