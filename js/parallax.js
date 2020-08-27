$(document).ready(function(){

    /* SCROLL ELEMENTOS MENU */

    if($(window).width() > 700){
        var intro = $('#intro').offset().top;
        estado = $('#estado').offset().top,
        municipio = $('#Municipio').offset().top,
        estadog = $('#estadog').offset().top,
        redagua = $('#redAgua').offset().top,
        /* sistema = $('#Sistema').offset().top; */
        $('#btn-intro').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: intro-50
            }, 500);
        });
        $('#btn-estado').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: estado-50
            }, 500);
        });
        $('#btn-municipio').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: municipio-50
            }, 500);
        });
        $('#btn-estadog').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: estadog+175
            }, 500);
        });
        $('#btn-redagua').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: redagua+175
            }, 500);
        });
        /* $('#btn-sistema').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: sistema-75
            }, 500);
        }); */
    }

    if($(window).width() < 700){
        var intro = $('#intro').offset().top;
        estado = $('#estado').offset().top,
        municipio = $('#Municipio').offset().top,
        estadog = $('#estadog').offset().top,
        redagua = $('#redAgua').offset().top,
        /* sistema = $('#Sistema').offset().top; */
        $('#btn-intro').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: intro-75
            }, 500);
        });
        $('#btn-estado').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: estado-75
            }, 500);
        });
        $('#btn-municipio').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: municipio-75
            }, 500);
        });
        $('#btn-estadog').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: estadog-75
            }, 500);
        });
        $('#btn-redagua').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: redagua-75
            }, 500);
        });
        /* $('#btn-sistema').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: sistema-75
            }, 500);
        }); */
    }

});