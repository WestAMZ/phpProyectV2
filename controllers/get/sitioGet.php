<?php
    Empleado(MODELS_DIR .'sitio.php');
    header('Content-type: application/json');
    if($_GET)
    {
        if(isset($_GET['id']))
        {
            $id = $_GET['id'];
            $sitio = Empleado::getSitioById($id);
            echo ('{ "sitio" : [' );
            echo(JSON_encode($sitio));
            echo (']}' );
        }
    }
?>
