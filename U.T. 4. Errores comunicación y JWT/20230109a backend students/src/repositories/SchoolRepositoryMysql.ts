import Student from "../entities/Student";
import SchoolRepositoryInterface from "./SchoolRepositoryInterface";

export default class SchoolRepositoryMysql implements SchoolRepositoryInterface {
    retrieveStudents(): Promise<Student[]> {
        throw new Error("Method not implemented.");
    }
    retrieveStudentByUuid(uuid: string): Promise<Student> {
        throw new Error("Method not implemented.");
    }
}