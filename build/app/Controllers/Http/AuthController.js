"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
class AuthController {
    async Login({ auth, request, response }) {
        const email = request.input('email');
        const password = request.input('password');
        try {
            const user = await User_1.default
                .query()
                .where('email', email)
                .where('password', password)
                .firstOrFail();
            const token = auth.use('api').generate(user);
            return token;
        }
        catch {
            return response.badRequest('Invalid credentials');
        }
    }
    async Logout({ auth, response }) {
        try {
            await auth.use('api').authenticate();
            await auth.use('api').revoke();
            return true;
        }
        catch {
            return response.badRequest('No existe el usuario');
        }
    }
    async VerificarToken({ auth }) {
        try {
            await auth.use('api').authenticate();
            return true;
        }
        catch {
            return false;
        }
    }
    async validarrol({ auth, response }) {
        try {
            await auth.use('api').authenticate();
            const rol = auth.use('api').user.$attributes.rol;
            if (rol == 1) {
                return true;
            }
            else {
                return false;
            }
        }
        catch {
            return response.badRequest('El usuario no existe');
        }
    }
    async getUser({ auth }) {
        await auth.use('api').authenticate();
        const user = auth.use('api').user.$attributes.id;
        return user;
    }
}
exports.default = AuthController;
//# sourceMappingURL=AuthController.js.map