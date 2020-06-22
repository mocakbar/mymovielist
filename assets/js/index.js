$(document).ready(function(){

	// slider dark theme
	$(document).on('change', '.switch', function(){
		$("body").toggleClass("dark")
	});

	// membuat btn navbar active
	$(".btn-navbar").click(function(){
			$(".btn-navbar").removeClass('active').addClass('inactive');
			$(this).removeClass('inactive').addClass('active');
	});

	// memasukan query dan mensubmitnya
	$('#submit').click(function(){
		let validate = Validation();
		$('#note').html(validate);
		if(validate == 0){
			//memanggil function queryCall
			QueryCall(1)
		}
	});

	// mengecek apakah query form sudah terisi atau belum
	function Validation(){
		let pesanEror = '';
		if($('#query').val() == ''){
			pesanEror = '<span class="eror-teks">"Harap masukan teks"</span>' + "<img class='not-found' src='assets/img/page-not-found.svg'>"
		} 
		return pesanEror;
	}

	
let a  = "false"

	// function mengambil API dari tmdb
	function QueryCall(page){
		$.ajax({
			url: "https://api.themoviedb.org/3/search/person?&query=" + $('#query').val() + "&page=" + page,
			data: { "api_key": "4dda69557f9d1b4d4930dd9ee950047d" },
			dataType: "json",
			success: function(result, status, xhr){
				let resultHtml = $("<div class='person-box'><span class='xty'>search '" + $('#query').val() + "'</span>")
				
				for(i=0; i<result['results'].length; i++){

					let img = result['results'][i]['profile_path'] == null ? "assets/img/image-not-found.png" : "https://image.tmdb.org/t/p/w500/" + result['results'][i]['profile_path']

					let title = result['results'][i]['name']
					let idPerson = result['results'][i]['id']

					resultHtml.append("<div class='person' resourceId='" + idPerson + "'><img src='" + img + "' /><div class='person-name'><p>" + title + "</p></div></div>")

				}

				resultHtml.append("</div>");
				$('#note').html(resultHtml);
				$('#box-content').hide()

				if( a == "true"){
					$('#note, #halaman').show()
					$('#myModal').hide()
				} else {
					$('#myModal').show()
				}

				// Halaman(result['total_pages'])

				console.log(result)
			},
			eror: function(status, xhr, eror){
				$('#note').html("<div clas='eror'>Result: " + status + " " + eror + " " + xhr.status + " " + xhr.statusText + "</div>")
			}
		})
	}

	// function menampilkan query person
	$("#note").on('click', '.person', function(){
		let resourceId = $(this).attr("resourceid");
		$.ajax({
			url: "https://api.themoviedb.org/3/person/" + resourceId + "?",
			data: { "api_key": "4dda69557f9d1b4d4930dd9ee950047d" },
			dataType: 'json',
			success: function(result, status, xhr){

				let image = result['profile_path'] == null ? "assets/img/image-not-found.png" : "https://image.tmdb.org/t/p/w500/" + result['profile_path'];

				let nama = result['name'];
				let tanggalLahir = result['birthday'];
				let tempatLahir = result['place_of_birth'];
				let biography = result['biography'];
				let web = result['homepage'] == null ? 'Tidak memiliki website' : result['homepage'];
				let link = web == 'Tidak memiliki website' ? '#' : result['hompage'];
				let gender = result['gender'] == 1 ? 'Perempuan' : 'Laki-Laki';

				let resultHtml = "<div class='person-view'><img class='profil-img' src='" + image + "' /><div class='person-info'><span class='nama-person'><strong>Name Lengkap :</strong> " + nama + "</span><span class='tgl-lahir'><strong>Tanggal Lahir :</strong> " + tanggalLahir + "</span><span class='tempat-lahir'><strong>Tempat Lahir :</strong> " + tempatLahir + "</span><span class='gender'><strong>Jenis Kelamin :</strong> " + gender + "</span><span class='web'><strong>Website : </strong><a href='" + link + "'>" + web + "</a></span><span><strong>Film :</strong></span><div class='film-movie'><div class='rex'></div></div></div><p class='bio'><strong>Biography :</strong>" + biography + "</p>";

				$('#content-view').html(resultHtml);

				$('#myModal').show()
				$('#note, #halaman').hide()

				let y = $('#myModal').show();
				

				if(x = y) {
					return a = 'true'
				} else {
					return a ='false'
				}

			},
			error: function (xhr, status, error) {
				$("#note").html("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
			}
		})

		CallMovie(resourceId);
	})

	function CallMovie(id){
		$.ajax({
			url: "https://api.themoviedb.org/3/person/" + id + "/movie_credits?",
			data: { "api_key": "4dda69557f9d1b4d4930dd9ee950047d" },
			dataType: 'json',
			success: function(result, status, xhr){
				
				let resultHtml = $('<section class="woe">')
				
				for(x = 0; x<10; x++){
					let image = result['cast'][x]['poster_path'] == null ? "assets/img/image-404.png" : "https://image.tmdb.org/t/p/w500/" + result['cast'][x]['poster_path'];
					let title = result['cast'][x]['title'];
					
					resultHtml.append("<div class='person-film'><img src='" + image + "'/><span class='person-title-film'>" + title + "</span>")
				}

				resultHtml.append("</section>");
				$('.rex').html(resultHtml)
				console.log(resultHtml);
			}
		})
	}

	let api_key = 'AIzaSyAmbiSd1rztfjH6PNhhYDEyQ65AJ28seUk';

	// memanggil API youtube
	$.ajax({
    url: "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=PLScC8g4bqD47c-qHlsfhGH3j6Bg7jzFy-&key=" + api_key,
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

      console.log(result)
      
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


	//memanggil API Top Movie
	$.ajax({
		url: "https://api.themoviedb.org/3/movie/popular?&page=1",
			data: { "api_key": "4dda69557f9d1b4d4930dd9ee950047d" },
			dataType: "json",
			success: function(result, status, xhr){
				let resultHtml = '';

				let wos
				
				for(i=0; i<5; i++){

					if(i == 0){
						wos = "https://image.tmdb.org/t/p/w500/" + result['results'][0]['poster_path'];
					}

					let img = "https://image.tmdb.org/t/p/w500/" + result['results'][i]['poster_path'];

					let title = result['results'][i]['title']
					let release = result['results'][i]['release_date']

					resultHtml += "<div class='top" + (i + 1) + "'>"
					resultHtml += '<div class="popular-movie">'
					resultHtml += "<p class='no'>" + (i + 1) + "</p>"
					resultHtml += "<img src='" + img + "'>"
					resultHtml += "<div class='ket'>"
					resultHtml += "<h4>" + title + "</h4>"
					resultHtml += "<p class='tgl-tahun'><b>Release : " + release + "</b></p>"
					resultHtml += "</div>"
					resultHtml += "</div>"
					resultHtml += "</div>"

				}

				$("#top-movie .main-body").html(resultHtml)

				console.log(result)
			}
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

				console.log(result)
			}
	})

	$(document).on('scroll', function(){
		scrollTopFunction();
	})

	function scrollTopFunction(){
		if ($(window).scrollTop() > 20) {
			$('.btn-scroll').css({ 'display' : 'block'})
		} else {
			$('.btn-scroll').css({ 'display' : 'none'})
		}
	}

	$('.btn-scroll').on('click', function(){
		$(window).scrollTop(0)
	})

})

