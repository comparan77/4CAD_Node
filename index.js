var pool = require('./model/db.js');
var TableMng = require('./model/TableMng.js');
var Usuario = require('./model/Usuario.js');
var UsuarioMng = require('./model/UsuarioMng.js');

var o = new Usuario();
o.Id = 5;
//o.Nombre = 'Gil';
//o.Codigo = '23';
var oMgn = new UsuarioMng(o);
var oMng = new TableMng({
    objMng: oMgn,
    pool: pool
});

oMng.Action('lst', function(data) {
    console.log(data)
});
