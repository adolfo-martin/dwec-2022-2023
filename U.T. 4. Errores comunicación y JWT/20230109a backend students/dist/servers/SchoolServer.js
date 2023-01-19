"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const SchoolRepositoryMock_1 = __importDefault(require("../repositories/SchoolRepositoryMock"));
class SchoolServer {
    constructor() {
        this.app = (0, express_1.default)();
        this.app.use((0, cors_1.default)());
        this.configureRoutes();
    }
    listen() {
        this.app.listen(80, () => console.log('Server listening on port 80'));
    }
    configureRoutes() {
        this.app.get('/api/students', this.retrieveAndSendStudents.bind(this));
    }
    async retrieveAndSendStudents(req, res) {
        setTimeout(async () => {
            if (this.isLoginError()) {
                res.status(401).json({ ok: false, message: 'User has not logged properly' });
                return;
            }
            if (this.isError()) {
                res.status(500).json({ ok: false, message: 'There is an error on the server database' });
                return;
            }
            const repository = new SchoolRepositoryMock_1.default();
            const students = await repository.retrieveStudents();
            res.status(200).json({ ok: true, students });
        }, 5000);
    }
    isError() {
        return Math.random() < 0.2 ? true : false;
    }
    isLoginError() {
        return Math.random() < 0.2 ? true : false;
    }
}
exports.default = SchoolServer;
