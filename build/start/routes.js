"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.group(() => {
    Route_1.default.get('/', async () => {
        return { hello: 'world' };
    });
}).middleware('auth:api');
Route_1.default.post('/login/:request', 'AuthController.Login');
Route_1.default.post('/storeUser/:request', 'UsuariosController.store');
//# sourceMappingURL=routes.js.map