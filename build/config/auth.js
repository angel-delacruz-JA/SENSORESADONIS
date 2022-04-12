"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authConfig = {
    guard: 'web',
    guards: {
        web: {
            driver: 'session',
            provider: {
                driver: 'database',
                identifierKey: 'id',
                uids: ['email'],
                usersTable: 'usuarios',
            },
        },
        api: {
            driver: 'oat',
            tokenProvider: {
                type: 'api',
                driver: 'database',
                table: 'api_tokens',
                foreignKey: 'user_id',
            },
            provider: {
                driver: 'database',
                identifierKey: 'id',
                uids: ['email'],
                usersTable: 'usuarios',
            },
        },
        basic: {
            driver: 'basic',
            realm: 'Login',
            provider: {
                driver: 'database',
                identifierKey: 'id',
                uids: ['email'],
                usersTable: 'usuarios',
            },
        },
    },
};
exports.default = authConfig;
//# sourceMappingURL=auth.js.map