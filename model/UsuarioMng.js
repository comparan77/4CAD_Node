var BaseMng = require('./basemng.js');

function UsuarioMng (o, lst = null) {
	BaseMng.call(this, o, 'Usuario', lst);

	this.Params = {
		Option: 0,
		Id: 0,
		Nombre: '',
		Clave: '',
		Contrasenia: '',
		Email: '',
		Id_bodega: 0,
		Id_rol: 0,
	}
};
UsuarioMng.prototype = Object.create(BaseMng.prototype);
UsuarioMng.prototype.constructor = UsuarioMng;
UsuarioMng.prototype.fillParameters = function(option) {
	this.Params.Option = option;
	this.Params.Id = this.obj.Id;
	this.Params.Nombre = this.obj.Nombre;
	this.Params.Clave = this.obj.Clave;
	this.Params.Contrasenia = this.obj.Contrasenia;
	this.Params.Email = this.obj.Email;
	this.Params.Id_bodega = this.obj.Id_bodega;
	this.Params.Id_rol = this.obj.Id_rol;
}
module.exports = UsuarioMng;