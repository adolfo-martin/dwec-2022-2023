import Student from "../entities/Student";
import SchoolRepositoryInterface from "./SchoolRepositoryInterface";
import crypto from 'crypto';

export default class SchoolRepositoryMock implements SchoolRepositoryInterface {

    private static students: Student[] = SchoolRepositoryMock.setupStudents();

    private static setupStudents() {
        return [
            new Student(crypto.randomUUID(), 'Mónica', 'Martínez'),
            new Student(crypto.randomUUID(), 'Luis', 'López'),
            new Student(crypto.randomUUID(), 'Cristian', 'Castillo'),
            new Student(crypto.randomUUID(), 'Víctor', 'Vázquez'),
            new Student(crypto.randomUUID(), 'Jordan', 'Jiménez'),
        ]

    }

    async retrieveStudents(): Promise<Student[]> {
        return SchoolRepositoryMock.students;
    }

    async retrieveStudentByUuid(uuid: string): Promise<Student> {
        throw new Error("Method not implemented.");
    }
}