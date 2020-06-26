$(document).ready(function(){

  $('#btn-kirim-comment').click(function() {
    let resultHtml = ''
    const dt = new Date();
    let acak = Math.floor(Math.random() * 4) + 1;
    let warna = '';
    if(acak == 1){
      warna = "style='color:red'"
    } else if (acak == 2){
      warna = "style='color:#7C7BD7'"
    } else if ( acak == 3){
      warna = "style='color:green'"
    } else {
      warna = "style='color:black'"
    };

    if($('#nama-komen').val() == '' || $('#isi-komen').val() == '' || $('#email-komen').val() == ''){
      console.log('isi dulu formnya')
    } else {
      const jam =  dt.getDate() + "/" + (dt.getUTCMonth() + 1) + "/" + dt.getFullYear();

      resultHtml += "<div class='komenan'>"
      resultHtml += "<i class='fas fa-user-circle fa-4x img-komen'" + warna + "></i>"
      resultHtml += "<div class='teks-pesan'>"
      resultHtml += "<span>" + $('#nama-komen').val() + "<em>" + jam + "</em></span>"
      resultHtml += "<p>" + $('#isi-komen').val() + "</span>"
      resultHtml += "</div>"
      resultHtml += "</div>"
      
      $('#hasil-komentar').append(resultHtml)
    
    }
    
  })

  
  
})
