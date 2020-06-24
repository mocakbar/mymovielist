// membuat tombol call funtion API Upcoming.
$(document).ready(function(){

  $.ajax({
    url: "https://api.themoviedb.org/3/movie/upcoming?&page=1",
      data: { "api_key": "4dda69557f9d1b4d4930dd9ee950047d" },
      dataType: "json",
      success: function(result, status, xhr){
        let resultHtml = '';
        
        for(i=0; i<result['results'].length; i++){

          let img = "https://image.tmdb.org/t/p/w500/" + result['results'][i]['poster_path'];

          let title = result['results'][i]['title']
          let release = result['results'][i]['release_date']

          resultHtml += '<div class="upcoming-movie">'
          resultHtml += "<img src='" + img + "'>"
          resultHtml += "<h4>" + title + "</h4>"
          resultHtml += "<p>Release : " + release + "</p>"
          resultHtml += "</div>"

        }

        $(".upcoming .main-body").html(resultHtml)
      }
  })

})