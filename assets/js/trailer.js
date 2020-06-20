
let api_key = 'AIzaSyAmbiSd1rztfjH6PNhhYDEyQ65AJ28seUk';

$(document).ready(function(){

  $.ajax({
    url: "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=PLScC8g4bqD47c-qHlsfhGH3j6Bg7jzFy-&key=" + api_key,
    dataType :'json',
    success: function(result, status, xhr){

      let resultHtml = ''
      let kuwi = ''
      let mbuh = ''

      for(i=0; i<3; i++){
        let cinta = "https://www.youtube.com/embed/" + result['items'][i]['snippet']['resourceId']['videoId']

        if (i == 0){
          resultHtml += "<iframe class='oz' src='" + cinta + "'></iframe>"
        } else if ( i == 1){
          kuwi += "<iframe class='oz' src='" + cinta + "'></iframe>"
        } else if ( i == 2){
          mbuh += "<iframe class='oz' src='" + cinta + "'></iframe>"
        }

      }

      $('.carousel-item.active').html(resultHtml)
      $('.carousel-item.two').html(kuwi)
      $('.carousel-item.three').html(mbuh)

      console.log(result)
      
    },
    eror: function(status, xhr, result){
      $("#trailer").html("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
    }
  })

})

