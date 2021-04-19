$(document).ready(function(){
    // Enlace interno con transición
    $('#a-contacto, #a-contacto-movil').bind('click',function(event){
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000,'easeOutExpo');
        event.preventDefault();
    });

    // Abrir y Cerrar Menú Responsive >>> Izquierda 290px
    $('#abrir').click(function(){
        $('#menu-responsive').animate({
            left: 0
        });
        $('#abrir').hide();
        $('#cerrar').show();
        event.preventDefault();
    });

    $('#cerrar, #a-contacto-movil').click(function(){
        $('#menu-responsive').animate({
            left: -290
        });
        $('#cerrar').hide();
        $('#abrir').show();
        event.preventDefault();
    });



    // Abrir y Cerrar Menú Responsive >>> Derecha 290px
    $('#abrir').click(function(){
        $('#menu-responsive-derecha-290').animate({
            right: 0
        });
        $('#abrir').hide();
        $('#cerrar').show();
        event.preventDefault();
    });

    $('#cerrar, #a-contacto-movil').click(function(){
        $('#menu-responsive-derecha-290').animate({
            right: -290
        });
        $('#cerrar').hide();
        $('#abrir').show();
        event.preventDefault();
    });



    // Abrir y Cerrar Menú Responsive >>> Izquierda 100%
    $('#abrir').click(function(){
        $('#menu-responsive-100x100').animate({
            left: 0
        });
        $('#abrir').hide();
        $('#cerrar').show();
        event.preventDefault();
    });

    $('#cerrar, #a-contacto-movil').click(function(){
        $('#menu-responsive-100x100').animate({
            left: '-100%'
        });
        $('#cerrar').hide();
        $('#abrir').show();
        event.preventDefault();
    });



    // Abrir y Cerrar Menú Responsive >>> Derecha 100%
    $('#abrir').click(function(){
        $('#menu-responsive-derecha-100x100').animate({
            right: 0
        });
        $('#abrir').hide();
        $('#cerrar').show();
        event.preventDefault();
    });

    $('#cerrar, #a-contacto-movil').click(function(){
        $('#menu-responsive-derecha-100x100').animate({
            right: '-100%'
        });
        $('#cerrar').hide();
        $('#abrir').show();
        event.preventDefault();
    });
});