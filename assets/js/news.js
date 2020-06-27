$(document).ready(function(){

  $('.cinta').mouseover( () => {
    $('.shape').css({ 'background-image':'linear-gradient(rgba(225,225,225,0.2), rgba(122,121,215, 1))'});
    $('.kata').css({ 'color' : '#000'})
  })

  $('.cinta').mouseleave( () => {
    $('.shape').css({
      'background-image':'linear-gradient(rgba(255, 255, 255, 0.2), rgba(10, 0, 0, 1))'
    })
    $('.kata').css({ 'color' : '#fff'})
  })

  $('.cintaTwo').mouseover( () => {
    $('.shape2').css({ 'background-image':'linear-gradient(rgba(225,225,225,0.2), rgba(122,121,215, 1))'});
    $('.kata2').css({ 'color' : '#000'})
  })

  $('.cintaTwo').mouseleave( () => {
    $('.shape2').css({
      'background-image':'linear-gradient(rgba(255, 255, 255, 0.2), rgba(10, 0, 0, 1))'
    })
    $('.kata2').css({ 'color' : '#fff'})
  })
  
})