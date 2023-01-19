"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SchoolServer_1 = __importDefault(require("./servers/SchoolServer"));
class App {
    async run() {
        // const repository: SchoolRepositoryInterface = new SchoolRepositoryMock();
        // const students: Student[] = await repository.retrieveStudents();
        // console.log(students);
        const server = new SchoolServer_1.default();
        server.listen();
    }
}
const app = new App();
app.run();
