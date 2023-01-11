export default class StudentsService {
    async retrieveStudents() {
        const url = 'http://127.0.0.1:80/api/students';

        try {
            const response = await fetch(url);
            const data = await response.json();
            const students = data.students;
            return students;
        } catch (error) {
            throw new Error(`Cannot retrieve students: ${error}`);
        }
    }
}