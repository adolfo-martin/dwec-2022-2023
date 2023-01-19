"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = __importDefault(require("../entities/Student"));
const crypto_1 = __importDefault(require("crypto"));
class SchoolRepositoryMock {
    static setupStudents() {
        return [
            new Student_1.default(crypto_1.default.randomUUID(), 'Mónica', 'Martínez'),
            new Student_1.default(crypto_1.default.randomUUID(), 'Luis', 'López'),
            new Student_1.default(crypto_1.default.randomUUID(), 'Cristian', 'Castillo'),
            new Student_1.default(crypto_1.default.randomUUID(), 'Víctor', 'Vázquez'),
            new Student_1.default(crypto_1.default.randomUUID(), 'Jordan', 'Jiménez'),
        ];
    }
    async retrieveStudents() {
        return SchoolRepositoryMock.students;
    }
    async retrieveStudentByUuid(uuid) {
        throw new Error("Method not implemented.");
    }
}
exports.default = SchoolRepositoryMock;
SchoolRepositoryMock.students = SchoolRepositoryMock.setupStudents();
