
/*-----------
                -------------------ON load
-------------*/
$(document).ready(function ()
{
    $('.empleado').click(
    function ()
    {
        $('.empleado').removeClass('selected');
        $(this).toggleClass('selected');
        var id_mod = $(this).children(0).html();
        var form = $('#formEmpleado');
        getEmpleado(id_mod);
    });
});


$(document).ready(function()
{
    $('select').material_select();
});

/*=======================================================
                    AJAX PART
=========================================================*/

  $(document).ready(function () {
      $('select').material_select();
  });


  /*=======================================================
                      AJAX PART
  =========================================================*/
function agregarEmpleado(data,result,modal,message_area_modal)
{
    http = Connect();
    http.onreadystatechange = function ()
    {
         if (http.readyState == 4 && http.status == 200)
         {

                if (http.responseText == 1)
                {
                    message_area_modal.html("<img src='views/img/success.png'></img> Se ha agregadoel empleado con exìto");
                    modal.openModal();
                    result.html('');

                } else
                {
                    text = '<div class="alert alert-dismissible alert-danger">' +
                        '<button type="button" class="close" data-dismiss="alert">&times;</button>' + http.responseText + '</div>';
                    result.html(http.responseText);
                }
        }
        else if (http.readyState != 4)
        {
            text = '<div class="alert alert-dismissible alert-info">' +
                '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                '<img src="views/img/load.gif"></img> Agragando empleado</div>';
            result.html(text);
        }
    }
    http.open('POST','?post=empleado');
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.send(data);
}


/*
    ----------------------------------Load sitio unico
*/

function getEmpleado(id)
{
    http = Connect();
    http.onreadystatechange = function()
    {
        if(http.readyState == 4 && http.status ==200)
        {
            //Respuesta recivida
            var sitio = JSON.parse(http.responseText).empleado[0];

            $('[name= "id_insidencia"]').val(sitio.idSitio);
            $('[name= "nombre"]').val(sitio.nombre);
            $('[name= "pais"]').val(sitio.pais);
            $('[name= "ciudad"]').val(sitio.ciudad);
            $('[name= "telefono"]').val(sitio.telefono);
            $('[name= "direccion"]').val(sitio.direccion);
        }
        else if(http.readyState != 4)
        {
            //Esperando respuesta
        }
    }
    http.open('GET','?get=empleado&id='+id);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.send(null);
}

