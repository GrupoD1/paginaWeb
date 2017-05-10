var mysql =require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database:'node_mysql',
    port: 3306
});
connection.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('Conexion Correcto');
    }
});
var query = connection.query('Select nombre,imagen, precio, cantidad,descripcion FROM producto WHERE nombre=?',[1],
function(error,result){
    if(error){
        throw error;
    }else{
        var resultado=result;
        if(resultado.length>0){
           console.log(resultado[0].nombre+' '
                       +resultado[0].imagen+'/'
                       +resultado[0].precio+' '
                       +resultado[0].cantidad+'/'
                       +resultado[0].descripcion);
           }
        else{
            console.log('Registro no encontrado');
        }
    }
}
);
connection.end();