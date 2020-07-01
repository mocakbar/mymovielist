$ (document).ready (function(){  
    animasiSatu()
    animasiDua()
    animasiTiga()

    function animasiSatu(){
        $('.a').animate({
            'top' : '255px'
        })
        $('.a').animate({
            'left' : '15px'
        })
        $('.a').animate({
            'top' : '0px'
        })
        $('.a').animate({
            'left' : '300px'
        })
        $('.a').animate({
            'top' : '120px'
        })
    }

    function animasiDua(){
        $('.b').animate({
            'top' : '255px'
        })
        $('.b').animate({
            'top' : '0px'
        })
        $('.b').animate({
            'top' : '255px'
        })
        $('.b').animate({
            'top' : '0px'
        })
        $('.b').animate({
            'top' : '120px'
        })
    }

    function animasiTiga(){
        $('.c').animate({
            'top' : '255px'
        })
        $('.c').animate({
            'left' : '935px'
        })
        $('.c').animate({
            'top' : '0px'
        })
        $('.c').animate({
            'left' : '660px'
        })
        $('.c').animate({
            'top' : '120px'
        })
    }

})

