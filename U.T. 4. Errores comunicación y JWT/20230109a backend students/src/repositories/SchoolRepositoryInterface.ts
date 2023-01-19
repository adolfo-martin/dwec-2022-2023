import Student from "../entities/Student";

export default interface SchoolRepositoryInterface {
    retrieveStudents(): Promise<Student[]>;
    retrieveStudentByUuid(uuid: string): Promise<Student>;
}