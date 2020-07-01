$(document).ready(function(){

    $.ajax({
      url: "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      data: {'api_key' : '4dda69557f9d1b4d4930dd9ee950047d'},
      dataType: "json",
      success: function(result, status, xhr){

        let resultHtml = ''

        for(i = 0 ; i <result['results'].length; i++ ){

          let img = "https://image.tmdb.org/t/p/w500/" + result['results'][i]['poster_path'];
          let idMovie = result['results'][i]['id']
          resultHtml += "<div class='movies-poster' idmovie='" + idMovie + "'>"
          resultHtml += "<img src='" + img + "' />"
          resultHtml += "</div>"

          // for(x=0; x<result['results'][i]['genre_ids'].length; x++){
          //   apaGenre(result['results'][i]['genre_ids'][x])
          // }

        }
        $('.movies .main-body').html(resultHtml)

      },
    })

  const cek = 'true';

  // function menampilkan movie id
  $('.movies').on('click', '.movies-poster', function(){
    let resourceId = $(this).attr("idmovie");
    $.ajax({
      url: "https://api.themoviedb.org/3/movie/" + resourceId + "?",
      data: {'api_key' : '4dda69557f9d1b4d4930dd9ee950047d'},
      dataType: "json",
      success: function(result, status, xhr){
        let img = result['poster_path'] == null ?  "assets/img/image-not-found.png" : "https://image.tmdb.org/t/p/w500/" + result['poster_path']
        let title = result['original_title'];
        let runtime = result['runtime'] + 'menit';
        let rilis = result['release_date'];
        let bahasa = result['spoken_languages'][0]['name'];
        let genre =''
        for(x = 0; x<result['genres'].length; x++){
          genre += ' ' + result['genres'][x]['name'] + ',';
        }
        let sinopsis = result['overview'];

        let resultHtml = ''
        resultHtml += "<img src='" + img + "' />"
        resultHtml += "<h1 class='judul-film'>" + title + "</h1>"
        resultHtml += "<p class='genre'><strong>Genre : </strong>" + genre + "</p>"
        resultHtml += "<p class='rilis'><strong>Tanggal Rilis :</strong> " + rilis + "</p>"
        resultHtml += "<p class='menit'><strong>Durasi :</strong> " + runtime + "</p>"
        resultHtml += "<p class='bahasa'><strong>Bahasa :</strong> " + bahasa + "</p>"
        resultHtml += "<p class'sinopsis'><strong>Sinopsis :</strong> <br>" + sinopsis + "</p>"

        $('.info-movie').html(resultHtml)

        if(cek == 'true'){
          $('#box-content').hide()
          $('#movie-list').show()
          $(window).scrollTop(0)
        }
      }
      
    })

    // function mendapatkan cast pemain
    $.ajax({
      url: "https://api.themoviedb.org/3/movie/" + resourceId + "/credits?",
      data: {'api_key' : '4dda69557f9d1b4d4930dd9ee950047d'},
      dataType: "json",
      success: function(result, status, xhr){
        
        let resultHtml = ''

        for(i=0; i<8; i++){

          let img = result['cast'][i]['profile_path'] == null ?  "assets/img/image-not-found.png" : "https://image.tmdb.org/t/p/w500/" + result['cast'][i]['profile_path']
          let karakter = result['cast'][i]['character']
          let nama = result['cast'][i]['name']

          resultHtml += "<div class='pemain'>"
          resultHtml += "<img src='" + img + "' />"
          resultHtml += "<p class='nama'>" + nama + "</p>"
          resultHtml += "<p class='char'>" + karakter + "</p>"
          resultHtml += "</div>"
        }

        $('.cast-movie').html(resultHtml)
      }
    })

  })


  $('.btn-close').click(function(){
    $('#movie-list').hide()
    $('#box-content').show()
  })

  $.ajax({
    url: "https://api.themoviedb.org/3/movie/upcoming?&page=1",
    data: {'api_key' : '4dda69557f9d1b4d4930dd9ee950047d'},
    dataType: "json",
    success: function(result, status, xhr){
      console.log(result)
    },
    eror: function(xhr, status){
      console.log(status + xhr)
    }
  
  })

})

