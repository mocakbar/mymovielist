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
      // resultHtml += "<div class='input'>anda harus mengisi form dengan benar</div>"
      $('.label-comment').append("<span>*isi form dengan benar*</span>")
      // alert('masukan inputan dengan benar')
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
      $('#nama-komen, #isi-komen, #email-komen, .label-comment span').val("")

      $('.label-comment span').html('')

    }
    
  })


  // membuat big banner slide down
  $('.big-banner img').hide()
  $('.big-banner img').slideDown(1000)
  $('.big-banner .titledex').hide()
  $('.big-banner .titledex').slideDown(2000)


  
})
