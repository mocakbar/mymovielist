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

				Halaman(result['total_pages'])

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

				let resultHtml = "<div class='person-view'><img class='profil-img' src='" + image + "' /><div class='person-info'><span class='nama-person'><strong>Name Lengkap :</strong> " + nama + "</span><span class='tgl-lahir'><strong>Tanggal Lahir :</strong> " + tanggalLahir + "</span><span class='tempat-lahir'><strong>Tempat Lahir :</strong> " + tempatLahir + "</span><span class='gender'><strong>Jenis Kelamin :</strong> " + gender + "</span><span class='web'><strong>Website : </strong><a href='" + link + "'>" + web + "</a></span><p class='bio'><strong>Biography :</strong><br>" + biography + "</p></div>";

				$('#content-view').html(resultHtml);

				$('#myModal').show()
				$('#note, #halaman').hide()
			},
			error: function (xhr, status, error) {
				$("#note").html("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
			}
		})
	})

})