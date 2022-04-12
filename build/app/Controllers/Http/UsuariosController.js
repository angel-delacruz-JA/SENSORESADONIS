"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
class UsuariosController {
    async store({ auth, request, response }) {
        const user = new User_1.default();
        const nombre = request.input('Nombre');
        const email = request.input('Email');
        const password = request.input('Password');
        user.email = email;
        user.password = password;
        user.nombre = nombre;
        await user.save();
        return response.status(200);
    }
}
exports.default = UsuariosController;
//# sourceMappingURL=UsuariosController.js.map