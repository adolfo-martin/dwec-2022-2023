"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = __importDefault(require("./entities/Student"));
class App {
    run() {
        const student = new Student_1.default('46546-56', 'Mónica', 'Martínez');
        console.log(student);
    }
}
const app = new App();
app.run();
