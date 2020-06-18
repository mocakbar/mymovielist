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

})