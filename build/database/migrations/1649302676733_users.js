"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Users extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'usuarios';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('Nombre').notNullable();
            table.string('email').unique().notNullable();
            table.string('password').notNullable();
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Users;
//# sourceMappingURL=1649302676733_users.js.map